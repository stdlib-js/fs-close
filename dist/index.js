"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var a=i(function(N,n){
var c=require("fs").close,l=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,g=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e){if(!l(r))throw new TypeError(t('0O33p',r));if(!g(e))throw new TypeError(t('0O33q',e));c(r,e)}n.exports=m
});var u=i(function(x,s){
var q=require("fs").closeSync,p=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,y=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r){if(!p(r))throw new TypeError(y('0O33r',r));try{q(r)}catch(e){return e}}s.exports=f
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),d=u();w(o,"sync",d);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
