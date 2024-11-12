(self.webpackChunkblog=self.webpackChunkblog||[]).push([[695],{8001:(e,t,n)=>{"use strict";n.d(t,{A:()=>z});var r=n(758),i=n(6070);function s(e){var t,n=function(e){var t=r.Children.toArray(e),n=t.find((function(e){return r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),s=t.filter((function(e){return e!==n}));return{mdxAdmonitionTitle:null==n?void 0:n.props.children,rest:s.length>0?(0,i.jsx)(i.Fragment,{children:s}):null}}(e.children),s=n.mdxAdmonitionTitle,a=n.rest,o=null!=(t=e.title)?t:s;return Object.assign({},e,o&&{title:o},{children:a})}var a=n(3394),o=n(5247),c=n(7775);const l={admonition:"admonition_sHdn",admonitionHeading:"admonitionHeading_ZU6Z",admonitionIcon:"admonitionIcon_OmZh",admonitionContent:"admonitionContent_lgGS"};function u(e){var t=e.type,n=e.className,r=e.children;return(0,i.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(t),l.admonition,n),children:r})}function d(e){var t=e.icon,n=e.title;return(0,i.jsxs)("div",{className:l.admonitionHeading,children:[(0,i.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function f(e){var t=e.children;return t?(0,i.jsx)("div",{className:l.admonitionContent,children:t}):null}function m(e){var t=e.type,n=e.icon,r=e.title,s=e.children,a=e.className;return(0,i.jsxs)(u,{type:t,className:a,children:[r||n?(0,i.jsx)(d,{title:r,icon:n}):null,(0,i.jsx)(f,{children:s})]})}function h(e){return(0,i.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var v={icon:(0,i.jsx)(h,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,i.jsx)(m,Object.assign({},v,e,{className:(0,a.A)("alert alert--secondary",e.className),children:e.children}))}function p(e){return(0,i.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var x={icon:(0,i.jsx)(p,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,i.jsx)(m,Object.assign({},x,e,{className:(0,a.A)("alert alert--success",e.className),children:e.children}))}function j(e){return(0,i.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var y={icon:(0,i.jsx)(j,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,i.jsx)(m,Object.assign({},y,e,{className:(0,a.A)("alert alert--info",e.className),children:e.children}))}function w(e){return(0,i.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var L={icon:(0,i.jsx)(w,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function O(e){return(0,i.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var N={icon:(0,i.jsx)(O,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var E={icon:(0,i.jsx)(w,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var H={note:g,tip:b,info:A,warning:function(e){return(0,i.jsx)(m,Object.assign({},L,e,{className:(0,a.A)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,i.jsx)(m,Object.assign({},N,e,{className:(0,a.A)("alert alert--danger",e.className),children:e.children}))}},C={secondary:function(e){return(0,i.jsx)(g,Object.assign({title:"secondary"},e))},important:function(e){return(0,i.jsx)(A,Object.assign({title:"important"},e))},success:function(e){return(0,i.jsx)(b,Object.assign({title:"success"},e))},caution:function(e){return(0,i.jsx)(m,Object.assign({},E,e,{className:(0,a.A)("alert alert--warning",e.className),children:e.children}))}};const k=Object.assign({},H,C);function z(e){var t,n=s(e),r=(t=n.type,k[t]||(console.warn('No admonition component found for admonition type "'+t+'". Using Info as fallback.'),k.info));return(0,i.jsx)(r,Object.assign({},n))}},1702:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(758);var r=n(6070);function i(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}},9106:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(758);var r=n(6070);function i(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}},1235:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(758);var r=n(6070);function i(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}},665:(e,t,n)=>{"use strict";n.d(t,{A:()=>B});var r=n(758),i=n(7092),s=n(5885),a=n(6154),o=n(6070);function c(e){return(0,o.jsx)("code",Object.assign({},e))}var l=n(8712);var u=n(7260),d=n(3394),f=n(5045),m=n(9240),h=n(8654),v=n(3190);const g={details:"details_wPoJ",isBrowser:"isBrowser_zsHC",collapsibleContent:"collapsibleContent_UXun"};var p=["summary","children"];function x(e){return!!e&&("SUMMARY"===e.tagName||x(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function j(e){var t=e.summary,n=e.children,i=(0,f.A)(e,p);(0,m.A)().collectAnchor(i.id);var s=(0,h.A)(),a=(0,r.useRef)(null),c=(0,v.u)({initialState:!i.open}),l=c.collapsed,u=c.setCollapsed,j=(0,r.useState)(i.open),y=j[0],A=j[1],w=r.isValidElement(t)?t:(0,o.jsx)("summary",{children:null!=t?t:"Details"});return(0,o.jsxs)("details",Object.assign({},i,{ref:a,open:y,"data-collapsed":l,className:(0,d.A)(g.details,s&&g.isBrowser,i.className),onMouseDown:function(e){x(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;x(t)&&b(t,a.current)&&(e.preventDefault(),l?(u(!1),A(!0)):u(!0))},children:[w,(0,o.jsx)(v.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),A(!e)},children:(0,o.jsx)("div",{className:g.collapsibleContent,children:n})})]}))}const y={details:"details_rl2Y"};var A="alert alert--info";function w(e){var t=Object.assign({},((0,u.A)(e),e));return(0,o.jsx)(j,Object.assign({},t,{className:(0,d.A)(A,y.details,t.className)}))}function L(e){var t=r.Children.toArray(e.children),n=t.find((function(e){return r.isValidElement(e)&&"summary"===e.type})),i=(0,o.jsx)(o.Fragment,{children:t.filter((function(e){return e!==n}))});return(0,o.jsx)(w,Object.assign({},e,{summary:n,children:i}))}var O=n(5136);function N(e){return(0,o.jsx)(O.A,Object.assign({},e))}const E={containsTaskList:"containsTaskList_LNuJ"};function H(e){if(void 0!==e)return(0,d.A)(e,(null==e?void 0:e.includes("contains-task-list"))&&E.containsTaskList)}const C={img:"img_ZcYA"};var k=n(8001);const z={Head:s.A,details:L,Details:L,code:function(e){return function(e){return void 0!==e.children&&r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,o.jsx)(c,Object.assign({},e)):(0,o.jsx)(a.A,Object.assign({},e))},a:l.A,pre:function(e){return(0,o.jsx)(o.Fragment,{children:e.children})},ul:function(e){return(0,o.jsx)("ul",Object.assign({},e,{className:H(e.className)}))},li:function(e){return(0,m.A)().collectAnchor(e.id),(0,o.jsx)("li",Object.assign({},e))},img:function(e){return(0,o.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},e,{className:(t=e.className,(0,d.A)(t,C.img))}));var t},h1:function(e){return(0,o.jsx)(N,Object.assign({as:"h1"},e))},h2:function(e){return(0,o.jsx)(N,Object.assign({as:"h2"},e))},h3:function(e){return(0,o.jsx)(N,Object.assign({as:"h3"},e))},h4:function(e){return(0,o.jsx)(N,Object.assign({as:"h4"},e))},h5:function(e){return(0,o.jsx)(N,Object.assign({as:"h5"},e))},h6:function(e){return(0,o.jsx)(N,Object.assign({as:"h6"},e))},admonition:k.A,mermaid:function(){return null}};function B(e){var t=e.children;return(0,o.jsx)(i.x,{components:z,children:t})}},5500:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var r=n(5045),i=n(758),s=n(5886),a=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var i=[];return t.forEach((function(e){var n=e.parentIndex,s=(0,r.A)(e,a);n>=0?t[n].children.push(s):i.push(s)})),i}function c(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}function l(e){var t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function u(e,t){var n,r,i=t.anchorTopOffset,s=e.find((function(e){return l(e).top>=i}));return s?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:null!=(r=e[e.indexOf(s)-1])?r:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,i.useRef)(0),t=(0,s.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,i.useRef)(void 0),n=d();(0,i.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,i=e.linkActiveClassName,s=e.minHeadingLevel,a=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],i=t;i<=n;i+=1)r.push("h"+i+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:s,maxHeadingLevel:a}),c=u(o,{anchorTopOffset:n.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===l)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(871),h=n(6070);function v(e){var t=e.toc,n=e.className,r=e.linkClassName,i=e.isChild;return t.length?(0,h.jsx)("ul",{className:i?void 0:n,children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)(m.A,{to:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(v,{isChild:!0,toc:e.children,className:n,linkClassName:r})]},e.id)}))}):null}const g=i.memo(v);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function x(e){var t=e.toc,n=e.className,a=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,u=void 0===l?"table-of-contents__link":l,d=e.linkActiveClassName,m=void 0===d?void 0:d,v=e.minHeadingLevel,x=e.maxHeadingLevel,b=(0,r.A)(e,p),j=(0,s.p)(),y=null!=v?v:j.tableOfContents.minHeadingLevel,A=null!=x?x:j.tableOfContents.maxHeadingLevel,w=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,i.useMemo)((function(){return c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:y,maxHeadingLevel:A});return f((0,i.useMemo)((function(){if(u&&m)return{linkClassName:u,linkActiveClassName:m,minHeadingLevel:y,maxHeadingLevel:A}}),[u,m,y,A])),(0,h.jsx)(g,Object.assign({toc:w,className:a,linkClassName:u},b))}},9522:(e,t,n)=>{"use strict";n.d(t,{f:()=>o});var r=n(758),i=n(9302),s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){var n=(0,r.useState)(),a=n[0],o=n[1],c=(0,r.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=s);var a=(0,i._q)(t),o=(0,i.Be)(n);(0,r.useEffect)((function(){var t=new MutationObserver(a);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,a,o])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function o(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,r.useState)(!1),s=i[0],o=i[1],c=(0,r.useRef)(null),l=(0,r.useCallback)((function(){var e=c.current.querySelector("code");t?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),n((function(e){return!e}))}),[c,t]),u=(0,r.useCallback)((function(){var e=c.current,t=e.scrollWidth>e.clientWidth||c.current.querySelector("code").hasAttribute("style");o(t)}),[c]);return a(c,u),(0,r.useEffect)((function(){u()}),[t,u]),(0,r.useEffect)((function(){return window.addEventListener("resize",u,{passive:!0}),function(){window.removeEventListener("resize",u)}}),[u]),{codeBlockRef:c,isEnabled:t,isCodeScrollable:s,toggle:l}}},1026:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(9125),i=n(5886);function s(){var e=(0,i.p)().prism,t=(0,r.G)().colorMode,n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},1739:(e,t,n)=>{"use strict";n.d(t,{Li:()=>v,M$:()=>g,Op:()=>h,_u:()=>m,wt:()=>f});var r=n(8939),i=n(4809),s=n.n(i),a=(0,r.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),o=(0,r.A)(/\{([\d,-]+)\}/,{range:1}),c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},l=Object.assign({},c,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),u=Object.keys(c);function d(e,t){var n=e.map((function(e){var n=l[e],r=n.start,i=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+i+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function f(e){var t,n;return null!=(t=null==e||null==(n=e.match(a))?void 0:n.groups.title)?t:""}function m(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function h(e){var t=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==t?void 0:t.replace(/language-/,"")}function v(e,t){var n=e.replace(/\n$/,""),r=t.language,i=t.magicComments,a=t.metastring;if(a&&o.test(a)){var c=a.match(o).groups.range;if(0===i.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=i[0].className,f=s()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(f),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var m=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return d(["js","jsBlock"],t);case"jsx":case"tsx":return d(["js","jsBlock","jsx"],t);case"html":return d(["js","jsBlock","html"],t);case"python":case"py":case"bash":return d(["bash"],t);case"markdown":case"md":return d(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return d(["tex"],t);case"lua":case"haskell":case"sql":return d(["lua"],t);case"wasm":return d(["wasm"],t);case"vb":case"vba":case"visual-basic":return d(["vb","rem"],t);case"vbnet":return d(["vbnet","rem"],t);case"batch":return d(["rem"],t);case"basic":return d(["rem","f90"],t);case"fsharp":return d(["js","ml"],t);case"ocaml":case"sml":return d(["ml"],t);case"fortran":return d(["f90"],t);case"cobol":return d(["cobol"],t);default:return d(u,t)}}(r,i),h=n.split("\n"),v=Object.fromEntries(i.map((function(e){return[e.className,{start:0,range:""}]}))),g=Object.fromEntries(i.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(i.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),x=Object.fromEntries(i.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),b=0;b<h.length;){var j=h[b].match(m);if(j){var y=j.slice(1).find((function(e){return void 0!==e}));g[y]?v[g[y]].range+=b+",":p[y]?v[p[y]].start=b:x[y]&&(v[x[y]].range+=v[x[y]].start+"-"+(b-1)+","),h.splice(b,1)}else b+=1}n=h.join("\n");var A={};return Object.entries(v).forEach((function(e){var t=e[0],n=e[1].range;s()(n).forEach((function(e){null!=A[e]||(A[e]=[]),A[e].push(t)}))})),{lineClassNames:A,code:n}}function g(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],i=e[1],s=t[r];s&&"string"==typeof i&&(n[s]=i)})),n}},4809:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,i,s]=t;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==i&&".."!==i&&"\u2025"!==i||(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1750:(e,t,n)=>{"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var i=document.createElement("textarea"),s=document.activeElement;i.value=e,i.setAttribute("readonly",""),i.style.contain="strict",i.style.position="absolute",i.style.left="-9999px",i.style.fontSize="12pt";var a=document.getSelection(),o=a.rangeCount>0&&a.getRangeAt(0);r.append(i),i.select(),i.selectionStart=0,i.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}return i.remove(),o&&(a.removeAllRanges(),a.addRange(o)),s&&s.focus(),c}n.d(t,{A:()=>r})},3602:(e,t,n)=>{"use strict";n.d(t,{L:()=>i});var r=n(758);function i(e,t,n){(0,r.useInsertionEffect)((()=>e.on(t,n)),[e,t,n])}},4457:(e,t,n)=>{"use strict";n.d(t,{L:()=>I});var r=n(1575),i=n(9575),s=n(758),a=n(3080);const o=new WeakMap;let c;function l({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=o.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function u(e){e.forEach(l)}function d(e,t){c||"undefined"!=typeof ResizeObserver&&(c=new ResizeObserver(u));const n=function(e,t,n){var r;if("string"==typeof e){let i=document;t&&((0,a.V)(Boolean(t.current),"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach((e=>{let n=o.get(e);n||(n=new Set,o.set(e,n)),n.add(t),null==c||c.observe(e)})),()=>{n.forEach((e=>{const n=o.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==c||c.unobserve(e)}))}}const f=new Set;let m;function h(e){return f.add(e),m||(m=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};f.forEach((e=>e(t)))},window.addEventListener("resize",m)),()=>{f.delete(e),!f.size&&m&&(m=void 0)}}var v=n(8368),g=n(5971);const p=50,x=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),b={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function j(e,t,n,r){const i=n[t],{length:s,position:a}=b[t],o=i.current,c=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${s}`]-e[`client${s}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,v.q)(0,i.scrollLength,i.current);const l=r-c;i.velocity=l>p?0:(0,g.f)(i.current-o,l)}const y={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},A={start:0,center:.5,end:1};function w(e,t,n=0){let r=0;if(e in A&&(e=A[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}const L=[0,0];function O(e,t,n,r){let i=Array.isArray(e)?e:L,s=0,a=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,A[e]?e:"0"]),s=w(i[0],n,r),a=w(i[1],t),s-a}var N=n(7418),E=n(5299);const H={x:0,y:0};function C(e,t,n){const{offset:r=y.All}=n,{target:i=e,axis:s="y"}=n,a="y"===s?"height":"width",o=i!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,s=r.parentNode;for(;!i;)"svg"===s.tagName&&(i=s),s=r.parentNode;r=i}}return n}(i,e):H,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(i),l={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let u=!t[s].interpolate;const d=r.length;for(let f=0;f<d;f++){const e=O(r[f],l[a],c[a],o[s]);u||e===t[s].interpolatorOffsets[f]||(u=!0),t[s].offset[f]=e}u&&(t[s].interpolate=(0,N.G)(t[s].offset,(0,E.Z)(r)),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=t[s].interpolate(t[s].current)}function k(e,t,n,r={}){return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){j(e,"x",t,n),j(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&C(e,n,r)},notify:()=>t(n)}}var z=n(2574);const B=new WeakMap,M=new WeakMap,S=new WeakMap,T=e=>e===document.documentElement?window:e;function R(e,{container:t=document.documentElement,...n}={}){let r=S.get(t);r||(r=new Set,S.set(t,r));const i=x(),s=k(t,e,i,n);if(r.add(s),!B.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(z.uv.timestamp)},i=()=>{for(const e of r)e.notify()},s=()=>{z.Gt.read(e,!1,!0),z.Gt.read(n,!1,!0),z.Gt.update(i,!1,!0)};B.set(t,s);const c=T(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&M.set(t,(o=s,"function"==typeof(a=t)?h(a):d(a,o))),c.addEventListener("scroll",s,{passive:!0})}var a,o;const c=B.get(t);return z.Gt.read(c,!1,!0),()=>{var e;(0,z.WG)(c);const n=S.get(t);if(!n)return;if(n.delete(s),n.size)return;const r=B.get(t);B.delete(t),r&&(T(t).removeEventListener("scroll",r),null===(e=M.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}var W=n(5022);function _(e,t){(0,a.$)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const V=()=>({scrollX:(0,r.OQ)(0),scrollY:(0,r.OQ)(0),scrollXProgress:(0,r.OQ)(0),scrollYProgress:(0,r.OQ)(0)});function I({container:e,target:t,layoutEffect:n=!0,...r}={}){const a=(0,i.M)(V);return(n?W.E:s.useEffect)((()=>(_("target",t),_("container",e),R((({x:e,y:t})=>{a.scrollX.set(e.current),a.scrollXProgress.set(e.progress),a.scrollY.set(t.current),a.scrollYProgress.set(t.progress)}),{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(r.offset)]),a}}}]);