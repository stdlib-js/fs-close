// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).close=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var a,l,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(e,t)||f.call(e,t)?(a=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=a):e[t]=r.value),p="get"in r,y="set"in r,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&u&&u.call(e,t,r.set),e};var a=t;function l(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var y=p(Object.freeze({__proto__:null,default:{}}));function s(e){return"number"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var _=v()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[g],i=g,t=null!=(o=e)&&m.call(o,i);try{e[g]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[g]=r:delete e[g],n}:function(e){return d.call(e)},j=Number,w=j.prototype.toString;var h=v();function O(e){return"object"==typeof e&&(e instanceof j||(h?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Number]"===_(e)))}function E(e){return s(e)||O(e)}l(E,"isPrimitive",s),l(E,"isObject",O);var S=Number.POSITIVE_INFINITY,T=j.NEGATIVE_INFINITY,P=Math.floor;function I(e){return e<S&&e>T&&P(t=e)===t;var t}function A(e){return s(e)&&I(e)}function N(e){return O(e)&&I(e.valueOf())}function B(e){return A(e)||N(e)}function V(e){return A(e)&&e>=0}function x(e){return N(e)&&e.valueOf()>=0}function F(e){return V(e)||x(e)}l(B,"isPrimitive",A),l(B,"isObject",N),l(F,"isPrimitive",V),l(F,"isObject",x);var M=/./;function k(e){return"boolean"==typeof e}var C=Boolean.prototype.toString;var G=v();function L(e){return"object"==typeof e&&(e instanceof Boolean||(G?function(e){try{return C.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===_(e)))}function R(e){return k(e)||L(e)}function U(){return new Function("return this;")()}l(R,"isPrimitive",k),l(R,"isObject",L);var Y="object"==typeof self?self:null,z="object"==typeof window?window:null,D="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X="object"==typeof D?D:null;var q=function(e){if(arguments.length){if(!k(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return U()}if(Y)return Y;if(z)return z;if(X)return X;throw new Error("unexpected error. Unable to resolve global object.")}(),H=q.document&&q.document.childNodes,J=Int8Array;function K(){return/^\s*function\s*([^(]*)/i}var Q=/^\s*function\s*([^(]*)/i;l(K,"REGEXP",Q);var W=Array.isArray?Array.isArray:function(e){return"[object Array]"===_(e)};function Z(e){return null!==e&&"object"==typeof e}function $(e){var t,r,n,o;if(("Object"===(r=_(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=Q.exec(n.toString()))return t[1]}return Z(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(Z,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!W(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(Z));var ee="function"==typeof M||"object"==typeof J||"function"==typeof H?function(e){return $(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?$(e).toLowerCase():t};function te(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}var re=y.close;function ne(e,t){if(!V(e))throw new TypeError(te("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",e));if("function"!==ee(t))throw new TypeError(te("0Bw43",t));re(e,t)}var oe=y.closeSync;return l(ne,"sync",(function(e){if(!V(e))throw new TypeError(te("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",e));try{oe(e)}catch(e){return e}})),ne}));
//# sourceMappingURL=index.js.map
