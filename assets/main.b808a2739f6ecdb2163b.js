!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n(1);var r=n(2),o=n(3);document.addEventListener("DOMContentLoaded",(function(){r(),o()}))},function(t,e,n){},function(t,e,n){"use strict";t.exports=function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n.classList.toggle("is-active")}))}))}},function(t,e,n){"use strict";t.exports=function(){function t(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="true"===t.getAttribute("aria-expanded"),r=t.getAttribute("data-faq-id"),o=t.getAttribute("aria-controls"),a=document.getElementById(o);e&&window.location.hash.length>0&&r===window.location.hash.substr(1)?window.dataLayer&&window.dataLayer.push({event:"faq_open_".concat(r)}):n?(t.setAttribute("aria-expanded","false"),a.style.maxHeight=0,a.style.padding="0 0 0 3.2rem"):(window.dataLayer&&window.dataLayer.push({event:"faq_open_".concat(r)}),t.setAttribute("aria-expanded","true"),a.style.maxHeight="1000px",a.style.padding="1.5rem 0 1.5rem 3.2rem")}document.querySelectorAll("dl.faq button").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),t(e.currentTarget)})),t(e,!0)}))}}]);
//# sourceMappingURL=main.b808a2739f6ecdb2163b.js.map