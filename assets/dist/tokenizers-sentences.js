webpackJsonp([9],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),l=a(r),u=n(12),o=n(17),d=a(o),i=n(282),c=a(i);(0,u.render)(l["default"].createElement(d["default"],{textarea:!0,flow:!1,tokenizer:c["default"]}),document.getElementById("naive-mount"))},16:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.value,n=void 0===t?"":t,a=e.placeholder,r=void 0===a?null:a,l=e.status,o=void 0===l?"default":l,d=e.onChange,i=void 0===d?Function.prototype:d,c=e.faded,s=void 0!==c&&c,f="bar-textarea";return"error"===o?f+=" error":"success"===o&&(f+=" success"),u["default"].createElement("div",null,u["default"].createElement("textarea",{placeholder:r,onChange:i,value:n,className:o+(s?" faded":"")}),u["default"].createElement("span",{className:f}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),u=a(l)},17:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),u=n(11),o=n(9),d=a(o),i=n(16),c=a(i),s=(0,u.compose)((0,u.withState)("input","setInput",""),(0,u.withState)("training","setTraining",function(e){return e.training||""})),f=s(function(e){var t=e.tokenizer,n=e.input,a=e.setInput,r=e.training,u=e.setTraining,o=e.textarea,i=void 0!==o&&o,s=e.trained,f=void 0!==s&&s,v=e.flow,E=void 0===v||v,p=i?c["default"]:d["default"],m=void 0;return m=f?n?t(r)(n):[]:n?t(n):[],l["default"].createElement("div",{style:{width:"55%"}},l["default"].createElement("div",null,f&&l["default"].createElement(c["default"],{placeholder:"Enter training text here...",value:r,onChange:function(e){return u(e.target.value)},faded:!0}),l["default"].createElement(p,{placeholder:"Enter raw text here...",value:n,onChange:function(e){return a(e.target.value)}}),l["default"].createElement("p",{style:{width:"100%"}},m.map(function(e){return E?l["default"].createElement("span",{className:"token",style:{"float":"left"}},e):l["default"].createElement("div",{className:"token"},e)}))),l["default"].createElement("div",{style:{clear:"both"}}))});t["default"]=f},84:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SIMPLE_QUOTES="’‘`‛'",t.DOUBLE_QUOTES='«»„‟“”"'},282:function(e,t,n){"use strict";function a(e,t){var n=e.replace(u,"$1$2").split(""),a=[];t=l.concat(t||[]).map(function(e){return e+"\\."}).join("|");for(var r=new RegExp("("+t+")$"),s="",f=void 0,v=0,E=n.length;v<E;v++)f=n[v],v===E-1||!r.test(f)&&!i.test(f)&&(c.test(f)||((s+f).match(o)||[]).length%2===0&&((s+f).match(d)||[]).length%2===0)?(a.push(s+(f&&s?" ":"")+f),s=""):s+=(s?" ":"")+f;return a}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(84),l=["Mr","Mrs","Ms","Mme","Mlle","Jr","Dr","Prof","Sr","Mgr","St","etc"],u=new RegExp(["([.?!…]+)","(["+r.DOUBLE_QUOTES+"*_]?[*_]?)","[\\s\\r\\n]+","(?=["+r.DOUBLE_QUOTES+r.SIMPLE_QUOTES+"]?[A-Z0-9])"].join(""),"g"),o=new RegExp("["+r.DOUBLE_QUOTES+"]","g"),d=/[(){}\[\]]/g,i=/^[A-Z0-9]\s?[.]\s*$/,c=/^[A-Za-z0-9]\s*\)/}});