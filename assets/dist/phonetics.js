webpackJsonp([2],{0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var u=r(1),s=n(u),o=r(12),l=r(14),i=n(l),a=r(287),f=n(a),c=r(252),g=n(c),d=r(253),S=n(d),b=r(254),h=n(b),p=r(288),m=n(p),y=r(262),v=n(y),C=r(263),E=n(C),H=r(83),A=n(H),K=r(264),T=n(K),I=r(289),$=n(I),R=r(265),O=n(R),M=r(266),N=n(M),Z=r(268),w=n(Z),D=function(t){return"["+t.join(", ")+"]"},_=function(t,e){var r=new Set(e);return t.some(function(t){return r.has(t)})};(0,o.render)(s["default"].createElement(i["default"],{algorithm:f["default"],codeRenderer:D,comparator:_}),document.getElementById("alpha-sis-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:g["default"]}),document.getElementById("caverphone-original-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:c.revisited}),document.getElementById("caverphone-revisited-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:S["default"],codeRenderer:D,comparator:_}),document.getElementById("daitch-mokotoff-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:h["default"],codeRenderer:D,comparator:_}),document.getElementById("double-metaphone-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:m["default"]}),document.getElementById("fuzzy-soundex-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:v["default"]}),document.getElementById("lein-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:E["default"]}),document.getElementById("metaphone-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:A["default"]}),document.getElementById("mra-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:T["default"]}),document.getElementById("nysiis-original-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:K.refined}),document.getElementById("nysiis-refined-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:$["default"]}),document.getElementById("phonex-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:O["default"]}),document.getElementById("roger-root-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:N["default"]}),document.getElementById("soundex-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:M.refined}),document.getElementById("soundex-refined-mount")),(0,o.render)(s["default"].createElement(i["default"],{algorithm:w["default"]}),document.getElementById("statcan-mount"))},5:function(t,e){"use strict";function r(t,e){for(var r=[],n=void 0;n=t.exec(e);)r.push(n);return t.lastIndex=0,r}function n(t){return t.slice().sort(function(t,e){return t-e})}function u(t){return"string"==typeof t?t.split(""):t}function s(t){for(var e="string"==typeof t,r=u(t),n=[r[0]],s=1,o=r.length;s<o;s++)r[s]!==r[s-1]&&n.push(r[s]);return e?n.join(""):n}function o(t,e){var r={};if(t=t.split(""),e=e.split(""),t.length!==e.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var n=0,u=t.length;n<u;n++)r[t[n]]=e[n];return r}function l(t){for(var e=Math.random(),r=t.length,n=0,u=0;u<r;u++)if(n+=t[u],e<=n)return u;return r-1}Object.defineProperty(e,"__esModule",{value:!0}),e.findall=r,e.numericSort=n,e.seq=u,e.squeeze=s,e.translation=o,e.weightedRandomIndex=l},10:function(t,e,r){"use strict";function n(t){return t=s(t),t&&t.replace(o,u).replace(f,"")}var u=r(33),s=r(26),o=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,l="\\u0300-\\u036f\\ufe20-\\ufe23",i="\\u20d0-\\u20f0",a="["+l+i+"]",f=RegExp(a,"g");t.exports=n},14:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var u=r(1),s=n(u),o=r(11),l=r(9),i=n(l),a=function(t){return t},f=function(t,e){return t===e},c=(0,o.compose)((0,o.withState)("wordOne","setWordOne",""),(0,o.withState)("wordTwo","setWordTwo","")),g=c(function(t){var e=t.algorithm,r=t.codeRenderer,n=void 0===r?a:r,u=t.comparator,o=void 0===u?f:u,l=t.wordOne,c=t.wordTwo,g=t.setWordOne,d=t.setWordTwo,S=l?e(l):null,b=c?e(c):null,h=S?n(S):"",p=b?n(b):"",m="·",y="default";return S&&b&&(console.log(S,b),o(S,b)?(m="=~",y="success"):(m="!~",y="error")),s["default"].createElement("table",null,s["default"].createElement("tbody",null,s["default"].createElement("tr",null,s["default"].createElement("td",null,s["default"].createElement(i["default"],{placeholder:"Word 1",value:l,onChange:function(t){return g(t.target.value)},status:y})),s["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},s["default"].createElement("strong",null,m)),s["default"].createElement("td",null,s["default"].createElement(i["default"],{placeholder:"Word 2",value:c,onChange:function(t){return d(t.target.value)},status:y}))),s["default"].createElement("tr",null,s["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},h," "),s["default"].createElement("td",null),s["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},p," "))))});e["default"]=g},20:function(t,e,r){"use strict";var n=r(23),u=n.Symbol;t.exports=u},21:function(t,e,r){"use strict";function n(t){if("string"==typeof t)return t;if(s(t))return i?i.call(t):"";var e=t+"";return"0"==e&&1/t==-o?"-0":e}var u=r(20),s=r(25),o=1/0,l=u?u.prototype:void 0,i=l?l.toString:void 0;t.exports=n},22:function(t,e){"use strict";function r(t){return t&&t.Object===Object?t:null}t.exports=r},23:function(t,e,r){(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},u=r(22),s=u("object"==("undefined"==typeof e?"undefined":n(e))&&e),o=u("object"==("undefined"==typeof self?"undefined":n(self))&&self),l=u("object"==n(void 0)&&void 0),i=s||o||l||Function("return this")();t.exports=i}).call(e,function(){return this}())},24:function(t,e){"use strict";function r(t){return!!t&&"object"==("undefined"==typeof t?"undefined":n(t))}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};t.exports=r},25:function(t,e,r){"use strict";function n(t){return"symbol"==("undefined"==typeof t?"undefined":u(t))||s(t)&&i.call(t)==o}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},s=r(24),o="[object Symbol]",l=Object.prototype,i=l.toString;t.exports=n},26:function(t,e,r){"use strict";function n(t){return null==t?"":u(t)}var u=r(21);t.exports=n},33:function(t,e){"use strict";function r(t){return n[t]}var n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"};t.exports=r},83:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/mra: the given name is not a string.");var e=(0,l["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");e=e.charAt(0)+e.slice(1).replace(/[AEIOU]/g,""),e=(0,s.squeeze)(e);var r=Math.min(3,e.length-3);return e.slice(0,3)+e.substr(e.length-r,r)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(5),o=r(10),l=n(o)},252:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){for(;t.length<10;)t+="1";return t.slice(0,10)}function s(t,e){if("string"!=typeof e)throw Error("talisman/phonetics/caverphone: the given name is not a string.");e=(0,l["default"])(e).toLowerCase().replace(/[^a-z]/g,"");for(var r=0,n=t.length;r<n;r++){var s=t[r],o=s[0],i=s[1];e=e.replace(o,i)}return u(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.revisited=e.original=void 0;var o=r(10),l=n(o),i={original:[[/e$/g,""],[/^(cou|rou|tou|enou|trou)gh/g,"$12f"],[/^gn/g,"2n"],[/^mb/g,"m2"],[/cq/g,"2q"],[/ci/g,"si"],[/ce/g,"se"],[/cy/g,"sy"],[/tch/g,"2ch"],[/c/g,"k"],[/q/g,"k"],[/x/g,"k"],[/v/g,"f"],[/dg/g,"2g"],[/tio/g,"sio"],[/tia/g,"sia"],[/d/g,"t"],[/ph/g,"fh"],[/b/g,"p"],[/sh/g,"s2"],[/z/g,"s"],[/^[aieou]/g,"A"],[/[aeiou]/g,"3"],[/i/g,"y"],[/^y3/g,"Y3"],[/^y/g,"A"],[/y/g,"3"],[/3gh3/g,"3kh3"],[/gh/g,"22"],[/g/g,"k"],[/s+/g,"S"],[/t+/g,"T"],[/p+/g,"P"],[/k+/g,"K"],[/f+/g,"F"],[/m+/g,"M"],[/n+/g,"N"],[/w3/g,"W3"],[/wh3/g,"Wh3"],[/w$/g,"3"],[/w/g,"2"],[/^h/g,"A"],[/h/g,"2"],[/r3/g,"R3"],[/r$/g,"3"],[/r/g,"2"],[/l3/g,"L3"],[/l$/g,"3"],[/l/g,"2"],[/2/g,""],[/3$/g,"A"],[/3/g,""]],revisited:[[/e$/g,""],[/^(cou|rou|tou|enou|trou)gh/g,"$12f"],[/^gn/g,"2n"],[/mb$/g,"mb"],[/cq/g,"2q"],[/c([iey])/g,"s$1"],[/tch/g,"2ch"],[/[cqx]/g,"k"],[/v/g,"f"],[/dg/g,"2g"],[/ti([oa])/g,"si$1"],[/d/g,"t"],[/ph/g,"fh"],[/b/g,"p"],[/sh/g,"s2"],[/z/g,"s"],[/^[aeiou]/g,"A"],[/[aeiou]/g,"3"],[/j/g,"y"],[/^y3/g,"Y3"],[/^y/g,"A"],[/y/g,"3"],[/3gh3/g,"3kh3"],[/gh/g,"22"],[/g/g,"k"],[/s+/g,"S"],[/t+/g,"T"],[/p+/g,"P"],[/k+/g,"K"],[/f+/g,"F"],[/m+/g,"M"],[/n+/g,"N"],[/w3/g,"W3"],[/wh3/g,"Wh3"],[/w$/g,"3"],[/w/g,"2"],[/^h/g,"A"],[/h/g,"2"],[/r3/g,"R3"],[/r$/g,"3"],[/r/g,"2"],[/l3/g,"L3"],[/l$/g,"3"],[/l/g,"2"],[/2/g,""],[/3$/g,"A"],[/3/g,""]]},a=s.bind(null,i.original),f=s.bind(null,i.revisited);e["default"]=a,e.original=a,e.revisited=f},253:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return(t+"000000").slice(0,6)}function s(t){for(var e=[""],r=0,n=t.length;r<n;r++){var u=t[r];if("object"===("undefined"==typeof u?"undefined":i(u))){for(var s=0,o=e.length;s<o;s++)e.push(e[s]);for(var l=0,a=e.length;l<a;l++){var f=u[l<a/2?0:1];e[l]+=null!==f?f:""}}else for(var c=0,g=e.length;c<g;c++)e[c]+=u}return e}function o(t){if("string"!=typeof t)throw Error("talisman/phonetics/daitch-mokotoff: the given name is not a string.");for(var e=[],r=(0,f["default"])(t).toUpperCase().replace(/[^A-ZĄĘŢ]/g,""),n=!0,o=void 0;r.length;){for(var l=r.charAt(0),i=d[l],a=0,c=i.length;a<c;a++){var g=i[a],b=g[0],h=g[1],p=g[2],m=g[3],y=b?r.match(b):[l];if(y){var v=y[0].length,C=m;n?C=h:S.has(r.charAt(v))&&(C=p),o!==b&&null!==C&&e.push(C),o=b||l,r=r.slice(v);break}}n=!1}return s(e).map(u)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":l(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":"undefined"==typeof t?"undefined":l(t)};e["default"]=o;var a=r(10),f=n(a),c=/^(MN|NM)/,g=/^(M|N)/,d={A:[[/^(AI|AJ|AY)/,0,1,null],[/^AU/,0,7,null],[null,0,null,null]],"Ą":[[null,null,null,[6,null]]],B:[[null,7,7,7]],C:[[/^CHS/,5,54,54],[/^CH/,[5,4],[5,4],[5,4]],[/^CK/,[5,45],[5,45],[5,45]],[/^(CSZ|CZS|CZ|CS)/,4,4,4],[null,[5,4],[5,4],[5,4]]],D:[[/^(DRZ|DRS|DSH|DSZ|DZH|DZS|DS|DZ)/,4,4,4],[/^(DT|D)/,3,3,3]],E:[[/^(EI|EJ|EY)/,0,1,null],[/^EU/,1,1,null],[null,0,null,null]],"Ę":[[null,null,null,[6,null]]],F:[[/^(FB|F)/,7,7,7]],G:[[null,5,5,5]],H:[[null,5,5,null]],I:[[/^(IA|IE|IO|IU)/,1,null,null],[null,0,null,null]],J:[[null,[1,4],[null,4],[null,4]]],K:[[/^KS/,5,54,54],[/^(KH|K)/,5,5,5]],L:[[null,8,8,8]],M:[[c,null,66,66],[g,6,6,6]],N:[[c,null,66,66],[g,6,6,6]],O:[[/^(OI|OJ|OY)/,0,1,null],[null,0,null,null]],P:[[/^(PF|PH|P)/,7,7,7]],Q:[[null,5,5,5]],R:[[/^(RZ|RS)/,[94,4],[94,4],[94,4]],[null,9,9,9]],S:[[/^(SCHTSCH|SCHTSH|SCHTCH|SHTCH|SHCH|SHTSH)/,2,4,4],[/^SCH/,4,4,4],[/^(SHT|SCHT|SCHD)/,2,43,43],[/^SH/,4,4,4],[/^(STCH|STSCH|SC|STRZ|STRS|STSH)/,2,4,4],[/^ST/,2,43,43],[/^(SZCZ|SZCS)/,2,4,4],[/^(SZT|SHD|SZD|SD)/,2,43,43],[/^(SZ|S)/,4,4,4]],T:[[/^(TCH|TTCH|TTSCH)/,4,4,4],[/^TH/,3,3,3],[/^(TRZ|TRS|TSCH|TSH|TS|TTS|TTSZ|TC|TZ|TTZ|TZS|TSZ)/,4,4,4],[null,3,3,3]],"Ţ":[[null,[3,4],[3,4],[3,4]]],U:[[/^(UI|UJ|UY)/,0,1,null],[/^(UE|U)/,0,null,null]],V:[[null,7,7,7]],W:[[null,7,7,7]],X:[[null,5,54,54]],Y:[[null,1,null,null]],Z:[[/^(ZHDZH|ZDZH|ZDZ)/,2,4,4],[/^(ZHD|ZD)/,2,43,43],[/^(ZSCH|ZSH|ZH|ZS|Z)/,4,4,4]]},S=new Set(["A","E","I","O","U","Y"])},254:function(t,e){"use strict";function r(t){return o.test(t)}function n(t){return 1===t.length&&l.has(t)}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/doubleMetaphone: the given word is not a string.");for(var e=t.toUpperCase()+"     ",r=s.test(e.slice(0,2))?1:0,u=t.length,o=u-1,l=[],i=[],a=r;;){if(a>u||l.length>=4&&i.length>=4)break;var f=e[a],c=1;n(f)&&(a||(l.push("A"),i.push("A")));var g=h[f];if(g){var d=g(e,a,o,u),S=d[0],b=void 0===S?null:S,p=d[1],m=void 0===p?null:p,y=d[2],v=void 0===y?1:y;c=v,b&&(l=l.concat(b)),m&&(i=i.concat(m))}a+=c}return[l.join("").slice(0,4),i.join("").slice(0,4)]}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=/^GN|KN|PN|WR|PS$/,o=/W|K|CZ|WITZ/,l=new Set(["A","E","I","O","U","Y"]),i=new Set(["HARAC","HARIS"]),a=new Set(["HOR","HYM","HIA","HEM"]),f=new Set(["VAN ","VON "]),c=new Set(["ORCHES","ARCHIT","ORCHID"]),g=new Set(["T","S"]),d=new Set(["A","O","U","E"]),S=new Set(["L","R","N","M","B","H","F","V","W"," "]),b=new Set(["CE","CI"]),h={B:function(t,e){return["P","P","B"===t.substr(e+1,1)?2:1]},CH:function(t,e){return e&&"CHAE"===t.substr(e,4)?["K","X",2]:e||!i.has(t.substr(e+1,5))&&!a.has(t.substr(e+1,3))||"CHORE"===t.substr(0,5)?f.has(t.substr(0,4))||"SCH"===t.substr(0,3)||c.has(t.substr(e-2,6))||g.has(t.substr(e+2,1))||(!e||d.has(t.substr(e-1,1)))&&S.has(t.substr(e+2,1))?["K","K",2]:e?["MC"===t.substr(0,2)?"K":"X","K",2]:["X","X",2]:["K","K",2]},CC:function(t,e){return/^I|E|H$/.test(t.substr(e+2,1))&&"HU"!==t.substr(e+2,2)?1===e&&"A"===t.substr(e-1,1)||/^UCCE(E|S)$/.test(t.substr(e-1,5))?[["K","S"],["K","S"],3]:["X","X",3]:["K","K",2]},C:function(t,e){if(e>1&&n(t.substr(e-2,1))&&"ACH"===t.substr(e-1,3)&&"I"!==t.substr(e+2,1)&&("E"!==t.substr(e+2,1)||/^(B|M)ACHER$/.test(t.substr(e-2,6))))return["K","K",2];if(!e&&"CAESAR"===t.substr(e,6))return["S","S",2];if("CHIA"===t.substr(e,4))return["K","K",2];if("CH"===t.substr(e,2))return h.CH(t,e);if("CZ"===t.substr(e,2)&&"WICZ"!==t.substr(e-2,4))return["S","X",2];if("CIA"===t.substr(e+1,3))return["X","X",3];if("CC"===t.substr(e,2)&&1!==e&&"M"!==t.substr(0,1))return h.CC(t,e);if(/^C(K|G|Q)$/.test(t.substr(e,2)))return["K","K",2];if(/^C(I|E|Y)$/.test(t.substr(e,2)))return["S",/^CI(O|E|A)$/.test(t.substr(e,3))?"X":"S",2];if(/^ (C|Q|G)$/.test(t.substr(e+1,2)))return["K","K",3];var r=1;return/^C|K|Q$/.test(t.substr(e+1,1))&&!b.has(t.substr(e+1,2))&&(r=2),["K","K",r]},"Ç":function(){return["S","S",1]},D:function(t,e){return"DG"===t.substr(e,2)?/^I|E|Y$/.test(t.substr(e+2,1))?["J","J",3]:[["T","K"],["T","K"],2]:["T","T",/^D(T|D)$/.test(t.substr(e,2))?2:1]},F:function(t,e){return["F","F","F"===t.substr(e+1,1)?2:1]},GH:function(t,e){return e&&!n(t.substr(e-1,1))?["K","K",2]:e?e>1&&/^B|H|D$/.test(t.substr(e-2,1))||e>2&&/^B|H|D$/.test(t.substr(e-3,1))||e>3&&/^B|H$/.test(t.substr(e-4,1))?[null,null,2]:e>2&&"U"===t.substr(e-1,1)&&/^C|G|L|R|T$/.test(t.substr(e-3,1))?["F","F",2]:e&&"I"!==t.substr(e-1,1)?["K","K",2]:[null,null,2]:"I"===t.substr(e+2,1)?["J","J",2]:["K","K",2]},GN:function(t,e){return 1===e&&n(t.substr(0,1))&&!r(t)?[["K","N"],"N",2]:"EY"===t.substr(e+2,2)||"Y"===t.substr(e+1,1)||r(t)?[["K","N"],["K","N"],2]:["N",["K","N"],2]},G:function(t,e){var n=t.substr(e+1,1),u=t.substr(e+1,2);return"H"===n?h.GH(t,e):"N"===n?h.GN(t,e):"LI"!==u||r(t)?(e||"Y"!==n&&!/^(E(S|P|B|L|Y|I|R)|I(B|L|N|E))$/.test(u))&&("ER"!==u&&"Y"!==n||/^(D|R|M)ANGER$/.test(t.substr(0,6))||/^E|I$/.test(t.substr(e-1,1))||/^(R|O)GY$/.test(t.substr(e-1,3)))?/^E|I|Y$/.test(n)||/^(A|O)GGI$/.test(t.substr(e-1,4))?/^V(A|O)N /.test(t.substr(0,4))||"SCH"===t.substr(0,3)||t.substr(e+1,!1)?["K","K",2]:"IER "===t.substr(e+1,4)?["J","J",2]:["J","K",2]:["K","K","G"===n?2:1]:["K","J",2]:[["K","L"],"L",2]},H:function(t,e){return e&&!n(t.substr(e-1,1))||!n(t.substr(e+1,1))?[null,null,1]:["H","H",2]},J:function(t,e,u){if("JOSE"===t.substr(e,4)||"SAN "===t.substr(0,4))return!e&&" "===t.substr(e+4,1)||"SAN "===t.substr(0,4)?["H","H",1]:["J","H",1];var s="J"===t.substr(e+1,1)?2:1;return e||"JOSE"===t.substr(e,4)?n(t.substr(e-1,1))&&!r(t)&&/^A|O$/.test(t.substr(e+1,1))?["J","H",s]:u===e?["J",null,s]:/^L|T|K|S|N|M|B|Z$/.test(t.substr(e+1,1))||/^S|K|L$/.test(t.substr(e-1,1))?[null,null,s]:["J","J",s]:["J","A",s]},K:function(t,e){return["K","K","K"===t.substr(e+1,1)?2:1]},L:function(t,e,r,n){return"L"===t.substr(e+1,1)?e===n-3&&/^(ILL(O|A)|ALLE)$/.test(t.substr(e-1,4))||/^(A|O)S$/.test(t.substr(r-1,2)||/^A|O$/.test(t.substr(r,1)))&&"ALLE"===t.substr(e-1,4)?["L",null,2]:["L","L",2]:["L","L",1]},M:function(t,e,r){return"UMB"===t.substr(e-1,3)&&(e===r-1||"ER"===t.substr(e+2,2))||"M"===t.substr(e+1,1)?["M","M",2]:["M","M",1]},N:function(t,e){return["N","N","N"===t.substr(e+1,1)?2:1]},"Ñ":function(){return["N","N",1]},P:function(t,e){return"H"===t.substr(e+1,1)?["F","F",2]:["P","P",/^P|B$/.test(t.substr(e+1,1))?2:1]},Q:function(t,e){return["K","K","Q"===t.substr(e+1,1)?2:1]},R:function(t,e,n){var u="R"===t.substr(e+1,1)?2:1;return e!==n||r(t)||"IE"!==t.substr(e-2,2)||/^M(E|A)$/.test(t.substr(e-4,2))?["R","R",u]:[null,"R",u]},SH:function(t,e){return/^H(EIM|OEK|OLM|OLZ)$/.test(t.substr(e+1,4))?["S","S",2]:["X","X",2]},SC:function(t,e){return"H"===t.substr(e+2,1)?/^OO|ER|EN|UY|ED|EM$/.test(t.substr(e+3,2))?[/^E(R|N)$/.test(t.substr(e+3,2))?"X":["S","K"],["S","K"],3]:["X",e||n(t.substr(3,1))||"W"===t.substr(e+3,1)?"X":"S",3]:/^I|E|Y$/.test(t.substr(e+2,1))?["S","S",3]:[["S","K"],["S","K"],3]},S:function(t,e,n){return/^(I|Y)SL$/.test(t.substr(e-1,3))?[null,null,1]:e||"SUGAR"!==t.substr(e,5)?"SH"===t.substr(e,2)?h.SH(t,e):/^SI(O|A)$/.test(t.substr(e,3))||"SIAN"===t.substr(e,4)?["S",r(t)?"S":"X",3]:!e&&/^M|N|L|W$/.test(t.substr(e+1,1))||"Z"===t.substr(e+1,1)?["S","X","Z"===t.substr(e+1,1)?2:1]:"SC"===t.substr(e,2)?h.SC(t,e):[n===e&&/^(A|O)I$/.test(t.substr(e-2,2))?null:"S","S",/^S|Z$/.test(t.substr(e+1,1))?2:1]:["X","S",1]},TH:function(t,e){return/^(O|A)M$/.test(t.substr(e+2,2))||/^V(A|O)N /.test(t.substr(0,4))||"SCH"===t.substr(0,3)?["T","T",2]:["0","T",2]},T:function(t,e){return"TION"===t.substr(e,4)||/^T(IA|CH)$/.test(t.substr(e,3))?["X","X",3]:"TH"===t.substr(e,2)||"TTH"===t.substr(e,3)?h.TH(t,e):["T","T",/^T|D$/.test(t.substr(e+1,1))?2:1]},V:function(t,e){return["F","F","V"===t.substr(e+1,1)?2:1]},W:function(t,e,r){if("WR"===t.substr(e,2))return["R","R",2];var u=[],s=[];return!e&&n(t.substr(e+1,1)||"WH"===t.substr(e,2))&&(u.push("A"),s.push(n(t.substr(e+1,1))?"F":"A")),e===r&&n(t.substr(e-1,1))||"SCH"===t.substr(0,3)||/^EWSKI|EWSKY|OWSKI|OWSKY$/.test(t.substr(e-1,5))?[u,s.concat("F"),1]:/^WI(C|T)Z$/.test(t.substr(e,4))?[u.concat(["T","S"]),s.concat(["F","X"]),4]:[u,s,1]},X:function(t,e,r){if(!e)return["S","S",1];var n=/^C|X$"/.test(t.substr(e+1,1))?2:1;return e===r&&/^(I|E)AU$/.test(t.substr(e-3,3))||/^(A|O)U$/.test(t.substr(e-2,2))?[null,null,n]:[["K","S"],["K","S"],n]},Z:function(t,e){if("H"===t.substr(e+1,1))return["J","J",2];var n="Z"===t.substr(e+1,1)?2:1;return/^Z(O|I|A)$/.test(t.substr(e+1,2))||e&&r(t)&&"T"===t.substr(e-1,1)?["S",["T","S"],n]:["S","S",n]}}},262:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return(t+"0000").slice(0,4)}function s(t){if("string"!=typeof t)throw Error("talisman/phonetics/lein: the given name is not a string.");var e=(0,l["default"])(t).toUpperCase().replace(/[^A-Z\s]/g,""),r=e[0];e=e.slice(1),e=e.replace(a,""),e=(0,i.squeeze)(e).slice(0,4);var n=e;e="";for(var s=0,o=n.length;s<o;s++)e+=f[n[s]]||n[s];return u(r+e)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s;var o=r(10),l=n(o),i=r(5),a=/[AEIOUYWH]/g,f=(0,i.translation)("DTMNLRBFPVCJKGQSXZ","112233444455555555")},263:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/metaphone: the given word is not a string.");for(var e=(0,o["default"])(t).toLowerCase().replace(/[^a-z]/g,""),r=0,n=l.length;r<n;r++)e=e.replace(l[r][0],l[r][1]);return e.toUpperCase()}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(10),o=n(s),l=[[/([bcdfhjklmnpqrstvwxyz])\1+/g,"$1"],[/^ae/g,"E"],[/^[gkp]n/g,"N"],[/^wr/g,"R"],[/^x/g,"S"],[/^wh/g,"W"],[/mb$/g,"M"],[/(?!^)sch/g,"SK"],[/th/g,"0"],[/t?ch|sh/g,"X"],[/c(?=ia)/g,"X"],[/[st](?=i[ao])/g,"X"],[/s?c(?=[iey])/g,"S"],[/[cq]/g,"K"],[/dg(?=[iey])/g,"J"],[/d/g,"T"],[/g(?=h[^aeiou])/g,""],[/gn(ed)?/g,"N"],[/([^g]|^)g(?=[iey])/g,"$1J"],[/g+/g,"K"],[/ph/g,"F"],[/([aeiou])h(?=\b|[^aeiou])/g,"$1"],[/[wy](?![aeiou])/g,""],[/z/g,"S"],[/v/g,"F"],[/(?!^)[aeiou]+/g,""]]},264:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t,e){if("string"!=typeof e)throw Error("talisman/phonetics/nysiis: the given name is not a string.");e=(0,l["default"])(e).toUpperCase().trim().replace(/[^A-Z]/g,"");for(var r=i[t],n=0,u=r.first.length;n<u;n++){var o=r.first[n],a=o[0],f=o[1];e=e.replace(a,f)}var c=e.charAt(0);"original"===t&&(e=e.slice(1));for(var g=0,d=r.second.length;g<d;g++){var S=r.second[g],a=S[0],f=S[1];e=e.replace(a,f)}return c+(0,s.squeeze)(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.refined=e.original=void 0;var s=r(5),o=r(10),l=n(o),i={original:{first:[[/JR$/g,""],[/SR$/g,""],[/^MAC/g,"MCC"],[/^KN/g,"NN"],[/^K/g,"C"],[/^(PH|PF)/g,"FF"],[/^SCH/g,"SSS"],[/(EE|IE)$/g,"Y"],[/(DT|RT|RD|NT|ND)$/g,"D"]],second:[[/EV/g,"AF"],[/[EIOU]/g,"A"],[/Q/g,"G"],[/Z/g,"S"],[/(M|KN)/g,"N"],[/K/g,"C"],[/SCH/g,"SSS"],[/PH/g,"FF"],[/([^A])H/g,"$1"],[/(.)H[^A]/g,"$1"],[/AW/g,"A"],[/S$/g,""],[/AY$/g,"Y"],[/A$/g,""]]},refined:{first:[[/JR$/g,""],[/SR$/g,""],[/(S|Z)$/g,""],[/MAC/g,"MC"],[/PH/g,"F"],[/IX$/g,"IC"],[/EX$/g,"EC"],[/(YE|EE|IE)/g,"Y"],[/(DT|RT|RD|NT|ND)$/g,"D"],[/(.+)EV/g,"$1EF"]],second:[[/([AEIOU]+)W/g,"$1"],[/[EIOU]/g,"A"],[/AA+/g,"A"],[/GHT/g,"GT"],[/DG/g,"G"],[/PH/g,"F"],[/(.+)HA/g,"$1A"],[/A+H/g,"A"],[/KN/g,"N"],[/K/g,"C"],[/(.+)M/g,"$1N"],[/(.+)Q/g,"$1G"],[/(SH|SCH)/g,"S"],[/YW/g,"Y"],[/(.+)Y(.+)/g,"$1A$2"],[/WR/g,"R"],[/(.+)Z/g,"$1S"],[/AY$/g,"Y"],[/A+$/g,""],[/^\w/g,""]]}},a=u.bind(null,"original"),f=u.bind(null,"refined");e["default"]=a,e.original=a,e.refined=f},265:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return(t+"00000").slice(0,5)}function s(t){if("string"!=typeof t)throw Error("talisman/phonetics/rogerRoot: the given name is not a string.");t=(0,l["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");for(var e="",r=void 0,n=0,s=t.length;n<s;n++){var o=!n,c=o?a:f,g=c[t[n]];if(g)if("string"==typeof g)e+=g;else for(var d=0,S=g.length;d<S;d++){var b=g[d],h=b[0],p=b[1];if(t.substr(n,h.length)===h){e+=p,n+=h.length-1;break}}else e+="-";o&&(r=e)}return e=r+(0,i.squeeze)(e.slice(r.length)),u(e.replace(/-/g,""))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s;var o=r(10),l=n(o),i=r(5),a={A:"1",B:"09",C:[["CE","00"],["CH","06"],["CI","00"],["CY","00"],["C","07"]],D:[["DG","07"],["D","01"]],E:"1",F:"08",G:[["GF","08"],["GM","03"],["GN","02"],["G","07"]],H:"2",I:"1",J:"3",K:[["KN","02"],["K","07"]],L:"05",M:"03",N:"02",O:"1",P:[["PF","08"],["PH","08"],["PN","02"],["P","09"]],Q:"07",R:"04",S:[["SCH","06"],["SH","06"],["S","00"]],T:[["TSCH","06"],["TSH","06"],["TS","00"],["T","01"]],U:"1",V:"08",W:[["WR","04"],["W","4"]],X:"07",Y:"5",Z:"00"},f={B:"9",C:[["CE","0"],["CH","6"],["CI","0"],["CY","0"],["C","7"]],D:[["DG","7"],["D","1"]],F:"8",G:"7",J:"6",K:"7",L:"5",M:"3",N:"2",P:[["PH","8"],["P","9"]],Q:"7",R:"4",S:[["SCH","6"],["SH","6"],["S","0"]],T:[["TSCH","6"],["TSH","6"],["TS","0"],["T","1"]],V:"8",X:"7",Z:"0"}},266:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return(t+"0000").slice(0,4)}function s(t){if("string"!=typeof t)throw Error("talisman/phonetics/soundex: the given name is not a string.");t=(0,a["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");for(var e=t.charAt(0),r="",n=1,s=t.length;n<s;n++)"D"!==f[t[n]]&&(r+=f[t[n]]);r.charAt(0)===f[e]&&(r=r.slice(1));var o=(0,l.squeeze)(r).replace(/0/g,"");return u(e+o)}function o(t){if("string"!=typeof t)throw Error("talisman/phonetics/soundex#refined: the given name is not a string.");t=(0,a["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");for(var e=t.charAt(0),r="",n=0,u=t.length;n<u;n++)"D"!==c[t[n]]&&(r+=c[t[n]]);var s=(0,l.squeeze)(r);return e+s}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s,e.refined=o;var l=r(5),i=r(10),a=n(i),f=(0,l.translation)("AEIOUYWHBPFVCSKGJQXZDTLMNR","000000DD111122222222334556"),c=(0,l.translation)("AEIOUYWHBPFVCKSGJQXZDTLMNR","000000DD112233344555667889")},268:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/statcan: the given name is not a string.");var e=(0,o["default"])(t).toUpperCase().replace(/[^A-Z\s]/g,""),r=e[0];return e=e.slice(1),e=e.replace(i,""),e=(0,l.squeeze)(e),e=e.replace(/\s/g,""),(r+e).slice(0,4)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(10),o=n(s),l=r(5),i=/[AEIOUY]/g},287:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return(t+"00000000000000").slice(0,14)}function s(t){for(var e=[""],r=0,n=t.length;r<n;r++){var u=t[r];if("object"===("undefined"==typeof u?"undefined":i(u))){for(var s=0,o=e.length*(u.length-1);s<o;s++)e.push(e[s]);for(var l=e.length/u.length,a=0,f=0,c=u.length;a<c;a++){for(var g=u[a];f<l;)e[f+a*l]+=g,f++;f=0}}else for(var d=0,S=e.length;d<S;d++)e[d]+=u}return e}function o(t){if("string"!=typeof t)throw Error("talisman/phonetics/alpha-sis: the given name is not a string.");t=(0,f["default"])(t).replace(/ß/g,"SS").toUpperCase().replace(/[^A-Z]/g,"");for(var e=[],r=0,n=0,o=g.length;n<o;n++){var l=g[n],i=l[0],a=l[1];if(t.startsWith(i)){e.push(a),r+=i.length;break}}e[0]||e.push("0");var S=t.length;t:for(;r<S;){for(var b=0,h=d.length;b<h;b++){var p=d[b],i=p[0],a=p[1];if(t.slice(r).startsWith(i)){e.push(a),r+=i.length;continue t}}e.push("_"),r++}return s(e).map(function(t){return u((0,c.squeeze)(t).replace(/_/g,""))})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":l(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":"undefined"==typeof t?"undefined":l(t)};e["default"]=o;var a=r(10),f=n(a),c=r(5),g=[["GF","08"],["GM","03"],["GN","02"],["KN","02"],["PF","08"],["PN","02"],["PS","00"],["WR","04"],["A","1"],["E","1"],["H","2"],["I","1"],["J","3"],["O","1"],["U","1"],["W","4"],["Y","5"]],d=[["SCH","6"],["CZ",["70","6","0"]],["CH",["6","70","0"]],["CK",["7","6"]],["DS",["0","10"]],["DZ",["0","10"]],["TS",["0","10"]],["TZ",["0","10"]],["CI","0"],["CY","0"],["CE","0"],["SH","6"],["DG","7"],["PH","8"],["C",["7","6"]],["K",["7","6"]],["Z","0"],["S","0"],["D","1"],["T","1"],["N","2"],["M","3"],["R","4"],["L","5"],["J","6"],["G","7"],["Q","7"],["X","7"],["F","8"],["V","8"],["B","9"],["P","9"]]},288:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function s(t){if("string"!=typeof t)throw Error("talisman/phonetics/fuzzy-soundex: the given name is not a string.");if(!t)return"";t=(0,l["default"])(t).toUpperCase().replace(/ß/g,"SS").replace(/[^A-Z]/g,"");var e=t.slice(0,2),r=t.slice(2);f.has(e)?t="SS"+r:"GN"===e?t="NN"+r:c.has(e)?t="RR"+r:"HW"===e?t="WW"+r:g.has(e)&&(t="NN"+r);var n=t.slice(-2),s=t.slice(0,-2);"CH"===n?t=s+"KK":"NT"===n?t=s+"TT":"RT"===n?t=s+"RR":"RDT"===t.slice(-3)&&(t=t.slice(0,-3)+"RR");for(var o=0,b=S.length;o<b;o++){var h;t=(h=t).replace.apply(h,u(S[o]))}for(var p=t[0],m="",y=0,v=t.length;y<v;y++)m+=a[t[y]]||t[y];return m=m.replace(/-/g,""),m=(0,i.squeeze)(m),m=d.has(m[0])?p+m:p+m.slice(1),m=m.replace(/0/g,"")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s;var o=r(10),l=n(o),i=r(5),a=(0,i.translation)("ABCDEFGHIJKLMNOPQRSTUVWXYZ","0193017-07745501769301-7-9"),f=new Set(["CS","CZ","TS","TZ"]),c=new Set(["HR","WR"]),g=new Set(["KN","NG"]),d=new Set("HWY"),S=[[/CA/g,"KA"],[/CC/g,"KK"],[/CK/g,"KK"],[/CE/g,"SE"],[/CHL/g,"KL"],[/CL/g,"KL"],[/CHR/g,"KR"],[/CR/g,"KR"],[/CI/g,"SI"],[/CO/g,"KO"],[/CU/g,"KU"],[/CY/g,"SY"],[/DG/g,"GG"],[/GH/g,"HH"],[/MAC/g,"MK"],[/MC/g,"MK"],[/NST/g,"NSS"],[/PF/g,"FF"],[/PH/g,"FF"],[/SCH/g,"SSS"],[/TIO/g,"SIO"],[/TIA/g,"SIO"],[/TCH/g,"CHH"]]},289:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/phonex: the given name is not a string.");if(!t)return"";t=(0,o["default"])(t).toUpperCase().replace(/[^A-Z]/g,""),t=t.replace(/S+$/,"");var e=t.slice(0,2),r=t.slice(2);"KN"===e?t="N"+r:"PH"===e?t="F"+r:"WR"===e&&(t="R"+r),"H"===t[0]&&(t=t.slice(1));for(var n=0,u=l.length;n<u;n++){var s=l[n],c=s[0],g=s[1];if(c.has(t[0])){t=g+t.slice(1);break}}for(var d=t[0],S=d,b=1,h=t.length;b<h;b++){var p=t[b],m=t[b+1],y="0";i.has(p)?y="1":a.has(p)?y="2":"D"===p||"T"===p?"C"!==m&&(y="3"):"L"===p?(f.has(m)||b+1===h)&&(y="4"):"M"===p||"N"===p?("D"!==m&&"G"!==m||(t=t.slice(0,b+1)+p+t.slice(b+2)),y="5"):"R"===p&&(f.has(m)||b+1===h)&&(y="6"),y!==S&&"0"!==y&&(d+=y),S=d.slice(-1)}return d}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(10),o=n(s),l=[["AEIOUY","A"],["BP","B"],["VF","F"],["KQC","C"],["JG","G"],["ZS","S"]];l.forEach(function(t){return t[0]=new Set(t[0])});var i=new Set("BPFV"),a=new Set("CSKGJQXZ"),f=new Set("AEIOUY")}});