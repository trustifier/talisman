/**
 * Talisman hash/minhash
 * ======================
 *
 * JavaScript implementation of the MinHash signature.
 *
 * [Reference]:
 * https://en.wikipedia.org/wiki/MinHash
 *
 * [Article]:
 * Broder, Andrei Z. (1997), "On the resemblance and containment of documents",
 * Compression and Complexity of Sequences: Proceedings, Positano,
 * Amalfitan Coast, Salerno, Italy, June 11-13, 1997.
 */
import crc32 from './crc32';
import {createRandom} from '../helpers/random';

// TODO: cleanup the type specification to be able to return an Int32Array
// rather than what I feel seems to be buggy.

// TODO: seems to be possible to use some XOR optimization to compute random
// hashes faster beyound first one.

/**
 * Constants.
 */
const MAX_I32 = Math.pow(2, 32) - 1,
      NEXT_PRIME = 4294967311;

/**
 * Defaults.
 */
const DEFAULTS = {
  hashes: 128,
  rng: Math.random
};

/**
 * Factory creating the hashing function.
 *
 * @param  {object}   options  - Options:
 * @param  {number}     hashes - Number of hashes of the produced signature.
 * @return {function}          - The hash function.
 */
export default function createMinHash(options) {
  options = options || {};

  const pi = options.hashes || DEFAULTS.hashes,
        rng = options.rng || DEFAULTS.rng,
        random = createRandom(rng);

  // Picking random coefficient & numbers
  let A = new Set(),
      B = new Set();

  while (A.size < pi)
    A.add(random(0, MAX_I32));
  while (B.size < pi)
    B.add(random(0, MAX_I32));

  A = Array.from(A);
  B = Array.from(B);

  /**
   * Function returning the MinHash signature for the given sequence. If the
   * sequence is a string, tokens will be mapped to char codes while if the
   * sequence is an array of arbitrary strings, the tokens will be mapped to
   * CRC32 hashes.
   *
   * @param  {string|array} sequence - Target sequence.
   * @return {array}                 - The MinHash signature.
   */
  return function(sequence) {
    const tokens = {},
          isString = typeof sequence === 'string';

    // Keeping track of unique tokens
    for (let i = 0, l = sequence.length; i < l; i++) {

      // Using char code if hashing
      if (isString)
        tokens[sequence.charCodeAt(i)] = true;
      else
        tokens[crc32(sequence[i]) & 0xffffffff] = true;
    }

    // Creating the signature
    const signature = new Float64Array(pi);

    for (let i = 0; i < pi; i++) {
      let min = Infinity;

      // Iterating over tokens & keeping track of min
      for (const token in tokens) {
        const hash = (A[i] * token + B[i]) % NEXT_PRIME;

        if (hash < min)
          min = hash;
      }

      signature[i] = min;
    }

    return signature;
  };
}

export function binning(options, items) {
  const minhash = options.minhash,
        rows = options.rows;

  if (typeof minhash !== 'function')
    throw new Error('talisman/hash/minhash#binning: given minhash is not a function.');

  const typicalSignature = minhash(items[0]);

  if (typicalSignature.length % rows !== 0)
    throw new Error('talisman/hash/minhash#binning: the size of your minhash signatures should be divisible by rows.');

  const bins = new Array(items.length),
        bands = typicalSignature.length / rows,
        identifiers = new Map();

  let integer = 0;

  for (let i = 0, l = items.length; i < l; i++) {
    const item = items[i],
          signature = minhash(item);

    for (let j = 0; j < bands; j++) {
      let key = '' + j + '§';

      for (let k = j * rows, m = (j + 1) * rows; k < m; k++)
        key += signature[k] + (k < m - 1 ? '$' : '');

      if (!identifiers.has(key))
        identifiers.set(key, integer++);

      bins[i] = bins[i] || [];
      bins[i].push(identifiers.get(key));
    }
  }

  return bins;
}
