// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";function o(d,l,m){var p,j,u,f;if(!n(d))throw new TypeError(s("0Cn4J",d));if(arguments.length>1){if(!t(l))throw new TypeError(s("0Cn2S",l));u=l}else u=i;return f=0,e(p={},"next",h),e(p,"return",a),r&&t(d[r])&&e(p,r,v),p;function h(){var e;return j?{done:!0}:(e=d.next(),0===f?(f+=1,e.done?(j=!0,e):(u.call(m,e.value),h())):e.done?(j=!0,e):{value:e.value,done:!1})}function a(e){return j=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return o(d[r](),u,m)}}export{o as default};
//# sourceMappingURL=index.mjs.map