/**
 * Talisman phonetics/french/fonem tests
 * ======================================
 *
 */
import assert from 'assert';
import fonem from '../../../src/phonetics/french/fonem';

describe('fonem', function() {
  it('should throw if the given name is not a string.', function() {
    assert.throws(function() {
      fonem([]);
    }, /string/);
  });

  it('should compute the fonem code correctly.', function() {
    const tests = [
      ['BEAULAC', 'BOLAK'],
      ['BAULAC', 'BOLAK'],
      ['IMBEAULT', 'INBO'],
      ['DUFAUT', 'DUFO'],
      ['THIBOUTOT', 'TIBOUTOT'],
      ['DEVAUX', 'DEVO'],
      ['RONDEAUX', 'RONDO'],
      ['BOURGAULX', 'BOURGO'],
      ['PINCHAUD', 'PINCHO'],
      ['PEDNAULD', 'PEDNO'],
      ['MAZENOD', 'MASENOD'],
      ['ARNOLD', 'ARNOL'],
      ['BERTOLD', 'BERTOL'],
      ['BELLAY', 'BELE'],
      ['SANDAY', 'SENDE'],
      ['GAY', 'GAI'],
      ['FAYARD', 'FAYAR'],
      ['LEMIEUX', 'LEMIEU'],
      ['LHEUREUX', 'LEUREU'],
      ['BELLEY', 'BELE'],
      ['WELLEY', 'WELE'],
      ['MEYER', 'MEYER'],
      ['BOILY', 'BOILI'],
      ['LOYSEAU', 'LOISO'],
      ['MAYRAND', 'MAIREN'],
      ['GUYON', 'GUYON'],
      ['FAILLARD', 'FAYAR'],
      ['FAIARD', 'FAYAR'],
      ['MEIER', 'MEYER'],
      ['MEILLER', 'MEYER'],
      ['GUILLON', 'GUYON'],
      ['LAVILLE', 'LAVILLE'],
      ['COUET', 'CWET'],
      ['EDOUARD', 'EDWAR'],
      ['GIROUARD', 'JIRWAR'],
      ['OZOUADE', 'OZWADE'],
      ['BOUILLE', 'BOUYE'],
      ['POUYEZ', 'POUYEZ'],
      ['LEMEE', 'LEME'],
      ['ABRAAM', 'ABRAM'],
      ['ARCHEMBAULT', 'ARCHENBO'],
      ['AMTHIME', 'ENTIME'],
      ['ROMPRE', 'RONPRE'],
      ['BOMSECOURS', 'BONSECOURS'],
      ['BOULANGER', 'BOULENJER'],
      ['TANCREDE', 'TENKREDE'],
      ['BLAIN', 'BLIN'],
      ['BLAINVILLE', 'BLINVILLE'],
      ['MAINARD', 'MAINAR'],
      ['RAIMOND', 'RAIMON'],
      ['BLACKBORN', 'BLAKBURN'],
      ['SEABOURNE', 'SEABURN'],
      ['IMBO', 'INBO'],
      ['RIMFRET', 'RINFRET'],
      ['LEFEBVRE', 'LEFEVRE'],
      ['MACE', 'MASSE'],
      ['MACON', 'MACON'],
      ['MARCELIN', 'MARSELIN'],
      ['MARCEAU', 'MARSO'],
      ['VINCELETTE', 'VINSELETE'],
      ['FORCADE', 'FORCADE'],
      ['CELINE', 'SELINE'],
      ['CERAPHIN', 'SERAFIN'],
      ['CAMILLE', 'KAMILLE'],
      ['CAYETTE', 'KAYETE'],
      ['CARINE', 'KARINE'],
      ['LUC', 'LUK'],
      ['LEBLANC', 'LEBLEN'],
      ['VICTOR', 'VIKTOR'],
      ['LACCOULINE', 'LAKOULINE'],
      ['MACCIMILIEN', 'MAXIMILIEN'],
      ['MAGELLA', 'MAJELA'],
      ['GINETTE', 'JINETE'],
      ['GANDET', 'GANDET'],
      ['GEORGES', 'JORJES'],
      ['GEOFFROID', 'JOFROID'],
      ['PAGEAU', 'PAJO'],
      ['GAGNION', 'GAGNON'],
      ['MIGNIER', 'MIGNER'],
      ['HALLEY', 'ALE'],
      ['GAUTHIER', 'GOTIER'],
      ['CHARTIER', 'CHARTIER'],
      ['JEANNE', 'JANE'],
      ['MACGREGOR', 'MACGREGOR'],
      ['MACKAY', 'MACKE'],
      ['MCNICOL', 'MACNICOL'],
      ['MCNEIL', 'MACNEIL'],
      ['PHANEUF', 'FANEUF'],
      ['PHILIPPE', 'FILIPE'],
      ['QUENNEVILLE', 'KENEVILLE'],
      ['LAROCQUE', 'LAROKE'],
      ['SCIPION', 'SIPION'],
      ['ASCELIN', 'ASSELIN'],
      ['VASCO', 'VASKO'],
      ['PASCALINE', 'PASKALINE'],
      ['ESHEMBACK', 'ECHENBAK'],
      ['ASHED', 'ACHED'],
      ['GRATIA', 'GRASSIA'],
      ['PATRITIA', 'PATRISSIA'],
      ['BERTIO', 'BERTIO'],
      ['MATIEU', 'MATIEU'],
      ['BERTIAUME', 'BERTIOME'],
      ['MUNROW', 'MUNRO'],
      ['BRANISLAW', 'BRANISLA'],
      ['LOWMEN', 'LOMEN'],
      ['ANDREW', 'ENDREW'],
      ['EXCEL', 'EXEL'],
      ['EXCERINE', 'EXERINE'],
      ['EXSILDA', 'EXILDA'],
      ['EXZELDA', 'EXELDA'],
      ['CAZEAU', 'KASO'],
      ['BRAZEAU', 'BRASO'],
      ['FITZPATRICK', 'FITSPATRIK'],
      ['SINGELAIS', 'ST-JELAIS'],
      ['CINQMARS', 'ST-MARS'],
      ['SAINT-AMAND', 'ST-AMEN'],
      ['SAINTECROIX', 'STE-KROIX'],
      ['ST-HILAIRE', 'ST-ILAIRE'],
      ['STE-CROIX', 'STE-KROIX'],
      ['LAVALLEE', 'LAVALE'],
      ['CORINNE', 'KORINE'],
      ['DUTILE', 'DUTILLE']
    ];

    tests.forEach(function([name, code]) {
      assert.strictEqual(fonem(name), code, `${name} => ${code}`);
    });
  });
});
