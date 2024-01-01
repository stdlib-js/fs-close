// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("fs")):"function"==typeof define&&define.amd?define(["fs"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).close=r(e.require$$0)}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,b,"e-0$1"),e.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,h,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):f.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var S=String.fromCharCode,T=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,a,c,l,f,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(s(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function P(e){var r,t,n;if(!F(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var $,N=Object.prototype,C=N.toString,B=N.__defineGetter__,L=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var M=$;function Z(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var H=X()?function(e){var r,t,n,i,o;if(null==e)return q.call(e);t=e[D],o=D,r=null!=(i=e)&&Y.call(i,o);try{e[D]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[D]=t:delete e[D],n}:function(e){return q.call(e)},J=Number,K=J.prototype.toString;var Q=X();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function re(e){return W(e)||ee(e)}Z(re,"isPrimitive",W),Z(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=J.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return e<te&&e>ne&&ie(r=e)===r;var r}function ae(e){return W(e)&&oe(e)}function ce(e){return ee(e)&&oe(e.valueOf())}function ue(e){return ae(e)||ce(e)}function se(e){return ae(e)&&e>=0}function le(e){return ce(e)&&e.valueOf()>=0}function fe(e){return se(e)||le(e)}Z(ue,"isPrimitive",ae),Z(ue,"isObject",ce),Z(fe,"isPrimitive",se),Z(fe,"isObject",le);var pe=/./;function ge(e){return"boolean"==typeof e}var de=Boolean,be=Boolean.prototype.toString;var ye=X();function he(e){return"object"==typeof e&&(e instanceof de||(ye?function(e){try{return be.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ve(e){return ge(e)||he(e)}function we(){return new Function("return this;")()}Z(ve,"isPrimitive",ge),Z(ve,"isObject",he);var me="object"==typeof self?self:null,je="object"==typeof window?window:null,_e="object"==typeof global?global:null,Ee="object"==typeof globalThis?globalThis:null;var Se=function(e){if(arguments.length){if(!ge(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return we()}if(Ee)return Ee;if(me)return me;if(je)return je;if(_e)return _e;throw new Error("unexpected error. Unable to resolve global object.")}(),Te=Se.document&&Se.document.childNodes,xe=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var Ie=/^\s*function\s*([^(]*)/i;Z(ke,"REGEXP",Ie);var Ve=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Oe(e){return null!==e&&"object"==typeof e}function Ae(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ie.exec(n.toString()))return r[1]}return Oe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(Oe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ve(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Oe));var Fe="function"==typeof pe||"object"==typeof xe||"function"==typeof Te?function(e){return Ae(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ae(e).toLowerCase():r};var Pe=e.close;function $e(e,r){if(!se(e))throw new TypeError(P("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",e));if("function"!==Fe(r))throw new TypeError(P("invalid argument. Last argument must be a function. Value: `%s`.",r));Pe(e,r)}var Ne=e.closeSync;return Z($e,"sync",(function(e){if(!se(e))throw new TypeError(P("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",e));try{Ne(e)}catch(e){return e}})),$e}));
//# sourceMappingURL=index.js.map
