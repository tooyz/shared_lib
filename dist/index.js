"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("classnames");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(e),n=l(t);function r(e,t){void 0===t&&(t={});var l=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===l&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}r(".button{position:relative;background-color:#b70037;border:none;font-size:16px;color:#fff;padding:16px 32px;text-decoration:none;overflow:hidden;cursor:pointer}");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}r(".link{font-family:SuisseIntl,sans-serif;text-decoration:none;color:#505254;transition:all .25s ease;display:flex;align-items:center}.link:hover{cursor:pointer;color:#b70037}");r(".input-label{color:#6a6b6d;font-size:15px;margin-bottom:10px;font-weight:400}.input-required{color:#b70037}.input{width:100%;caret-color:#b70037;border:1px solid #cbcfd6;font-weight:500;padding:27px;border-radius:2px;font-size:16px}");r(".checkbox-wrapper{display:flex}.checkbox-label{color:#6a6b6d;font-size:15px;font-weight:400;display:inline-block;margin-left:10px}.checkbox{caret-color:#b70037;border:1px solid #cbcfd6;font-weight:500;padding:27px;border-radius:2px;font-size:16px}");exports.Button=({onClick:e,disabled:t,className:l,text:r,style:o})=>a.default.createElement("button",{type:"button",className:n.default("button",l),onClick:e,style:o,disabled:t},r),exports.Checkbox=e=>{const{className:t,label:l,...r}=e;return a.default.createElement("div",null,a.default.createElement("label",{className:"checkbox-wrapper"},a.default.createElement("input",o({type:"checkbox",className:n.default("checkbox",t)},r)),l&&a.default.createElement("div",{className:"checkbox-label"},l)))},exports.Input=e=>{const{className:t,label:l,required:r,...c}=e;return a.default.createElement("div",null,a.default.createElement("label",null,l&&a.default.createElement("div",{className:"input-label"},l,r&&a.default.createElement("span",{className:"input-required"},"*")),a.default.createElement("input",o({className:n.default("input",t)},c))))},exports.Link=({children:e,className:t,...l})=>a.default.createElement("a",o({className:n.default("link",t)},l),e);
