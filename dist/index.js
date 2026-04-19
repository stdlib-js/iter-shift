"use strict";var x=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var g=x(function(F,d){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/assert-is-function/dist'),y=require('@stdlib/assert-is-iterator-like/dist'),a=require('@stdlib/symbol-iterator/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),h=require('@stdlib/utils-noop/dist');function m(n,r,f){var t,u,i,o;if(!y(n))throw new TypeError(c('0Pl46',n));if(arguments.length>1){if(!l(r))throw new TypeError(c('0Pl2H',r));i=r}else i=h;return o=0,t={},v(t,"next",s),v(t,"return",p),a&&l(n[a])&&v(t,a,q),t;function s(){var e;return u?{done:!0}:(e=n.next(),o===0?(o+=1,e.done?(u=!0,e):(i.call(f,e.value),s())):e.done?(u=!0,e):{value:e.value,done:!1})}function p(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function q(){return m(n[a](),i,f)}}d.exports=m
});var w=g();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
