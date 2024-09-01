// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,h,"e"),n=l.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),e.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,j=Array.isArray;function E(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,u,s,f,l,p,g,d,y;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",s+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var A,P=Object.prototype,V=P.toString,F=P.__defineGetter__,C=P.__defineSetter__,$=P.__lookupGetter__,N=P.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var R=A;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var L=G(Object.freeze({__proto__:null,default:{}}));function M(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof z?z.toStringTag:"";var q=U()?function(e){var r,t,n,i,o;if(null==e)return W.call(e);t=e[Y],o=Y,r=null!=(i=e)&&X.call(i,o);try{e[Y]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return W.call(e)},D=Number,H=D.prototype.toString;var J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Q(e){return M(e)||K(e)}B(Q,"isPrimitive",M),B(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,te=Math.floor;function ne(e){return e<ee&&e>re&&te(r=e)===r;var r}function ie(e){return M(e)&&ne(e)}function oe(e){return K(e)&&ne(e.valueOf())}function ae(e){return ie(e)||oe(e)}function ce(e){return ie(e)&&e>=0}function ue(e){return oe(e)&&e.valueOf()>=0}function se(e){return ce(e)||ue(e)}B(ae,"isPrimitive",ie),B(ae,"isObject",oe),B(se,"isPrimitive",ce),B(se,"isObject",ue);var fe=/./;function le(e){return"boolean"==typeof e}var pe=Boolean,ge=Boolean.prototype.toString;var de=U();function ye(e){return"object"==typeof e&&(e instanceof pe||(de?function(e){try{return ge.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function be(e){return le(e)||ye(e)}B(be,"isPrimitive",le),B(be,"isObject",ye);var he="object"==typeof self?self:null,ve="object"==typeof window?window:null,we="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},me="object"==typeof we?we:null,_e="object"==typeof globalThis?globalThis:null;var je=function(e){if(arguments.length){if(!le(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(_e)return _e;if(he)return he;if(ve)return ve;if(me)return me;throw new Error("unexpected error. Unable to resolve global object.")}(),Ee=je.document&&je.document.childNodes,Oe=Int8Array;function Se(){return/^\s*function\s*([^(]*)/i}var Te=/^\s*function\s*([^(]*)/i;B(Se,"REGEXP",Te);var ke=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function xe(e){return null!==e&&"object"==typeof e}function Ie(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Te.exec(n.toString()))return r[1]}return xe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(xe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ke(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(xe));var Ae="function"==typeof fe||"object"==typeof Oe||"function"==typeof Ee?function(e){return Ie(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ie(e).toLowerCase():r};function Pe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var Ve=L.close;function Fe(e,r){if(!ce(e))throw new TypeError(Pe("0O33p",e));if("function"!==Ae(r))throw new TypeError(Pe("0O33q",r));Ve(e,r)}var Ce=L.closeSync;function $e(e){if(!ce(e))throw new TypeError(Pe("0O33r",e));try{Ce(e)}catch(e){return e}}B(Fe,"sync",$e);export{Fe as default,$e as sync};
//# sourceMappingURL=mod.js.map
