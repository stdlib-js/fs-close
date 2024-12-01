"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=i(function(h,n){
var v=require("fs").close,c=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,l=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function g(r,e){if(!c(r))throw new TypeError(t('0O33p',r));if(!l(e))throw new TypeError(t('0O33q',e));v(r,e)}n.exports=g
});var u=i(function(N,s){
var m=require("fs").closeSync,q=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,p=require('@stdlib/error-tools-fmtprodmsg/dist');function y(r){if(!q(r))throw new TypeError(p('0O33r',r));try{m(r)}catch(e){return e}}s.exports=y
});var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),w=u();f(o,"sync",w);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
