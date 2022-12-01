// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var o=i(Object.freeze({__proto__:null,default:{}})),s=o.close;function a(e,i){if(!t(e))throw new TypeError(n("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",e));if(!r(i))throw new TypeError(n("0Bw43",i));s(e,i)}var d=o.closeSync;function l(e){if(!t(e))throw new TypeError(n("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",e));try{d(e)}catch(e){return e}}e(a,"sync",l);export{a as default,l as sync};
//# sourceMappingURL=index.mjs.map