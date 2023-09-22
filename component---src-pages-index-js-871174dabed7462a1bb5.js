/*! For license information please see component---src-pages-index-js-871174dabed7462a1bb5.js.LICENSE.txt */
(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[678],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},9712:function(e,t){},6301:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(1883),l=n(682);const o=e=>{let{isCurrent:t}=e;return t?{className:"nav-link active"}:{className:"nav-link"}},s=e=>r.createElement(a.Link,Object.assign({getProps:o},e)),i=e=>{let{siteTitle:t}=e;return r.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},r.createElement("div",{className:"container-fluid"},r.createElement(a.Link,{to:"/",className:"navbar-brand",href:"#"},t),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},r.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},r.createElement("li",{className:"nav-item"},r.createElement(s,{to:"/"},"Search")),r.createElement("li",{className:"nav-item"},r.createElement(s,{to:"/redirect?path=https%3A%2F%2Fgithub.com%2F41319%2Fonlytcm.com"},"github"))))))};i.defaultProps={siteTitle:""};var c=i;var u=e=>{var t;let{children:n}=e;const o=(0,a.useStaticQuery)("3649515864");return r.createElement("div",{className:"container-fluid p-0"},r.createElement(c,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,n),r.createElement("footer",null,r.createElement(l.Z,null,r.createElement("h3",null,"Do your own Research"),"Under no circumstances OnlyTCM be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from your use of or inability to use this website or any websites linked to it, or from your reliance on the information and material on this website, even if the OnlyTCM has been advised of the possibility of such damages in advance.")))}},1707:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(7294),a=n(1883);const l=e=>{let{title:t,description:n,pathname:l,children:o}=e;const{title:s,description:i,siteUrl:c}=(0,a.useStaticQuery)("63159454").site.siteMetadata,u={title:t||s,description:n||i,url:""+c+(l||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,u.title),r.createElement("meta",{name:"description",content:u.description}),r.createElement("meta",{name:"twitter:title",content:u.title}),r.createElement("meta",{name:"twitter:url",content:u.url}),r.createElement("meta",{name:"twitter:description",content:u.description}),o)}},8586:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return G},default:function(){return W}});var r=n(5785),a=n(7294),l=n.t(a,2),o=(n(1883),n(6301)),s=n(1707),i=n(3501),c=n(4184),u=n.n(c);n(2473);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}n(1143);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(n,r){var l,o=n,s=o[f(r)],i=o[r],c=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(o,[f(r),r].map(p)),u=t[r],m=function(e,t,n){var r=(0,a.useRef)(void 0!==e),l=(0,a.useState)(t),o=l[0],s=l[1],i=void 0!==e,c=r.current;return r.current=i,!i&&c&&o!==t&&s(t),[i?e:o,(0,a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(i,s,e[u]),v=m[0],g=m[1];return d({},c,((l={})[r]=v,l[u]=g,l))}),e)}n(9712);var v=Function.prototype.bind.call(Function.prototype.call,[].slice);const g=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;var b=function(e,t){return(0,a.useMemo)((()=>function(e,t){const n=g(e),r=g(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};const x=a.createContext(null);x.displayName="NavContext";var h=x;const y=(e,t=null)=>null!=e?String(e):t||null;var E=a.createContext(null);var w=a.createContext(null);const C="data-rr-ui-";function N(e){return`${C}${e}`}var k=function(e){const t=(0,a.useRef)(e);return(0,a.useEffect)((()=>{t.current=e}),[e]),t};function R(e){const t=k(e);return(0,a.useCallback)((function(...e){return t.current&&t.current(...e)}),[t])}var I=n(5893);const D=["as","disabled"];const T=a.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,D);const[l,{tagName:o}]=function({tagName:e,disabled:t,href:n,target:r,rel:a,role:l,onClick:o,tabIndex:s=0,type:i}){e||(e=null!=n||null!=r||null!=a?"a":"button");const c={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},c];const u=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==o||o(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}(Object.assign({tagName:n,disabled:r},a));return(0,I.jsx)(o,Object.assign({},a,l,{ref:t}))}));T.displayName="Button";var S=T;const B=["as","active","eventKey"];function O({key:e,onClick:t,active:n,id:r,role:l,disabled:o}){const s=(0,a.useContext)(E),i=(0,a.useContext)(h),c=(0,a.useContext)(w);let u=n;const d={role:l};if(i){l||"tablist"!==i.role||(d.role="tab");const t=i.getControllerId(null!=e?e:null),a=i.getControlledId(null!=e?e:null);d[N("event-key")]=e,d.id=t||r,u=null==n&&null!=e?i.activeKey===e:n,!u&&(null!=c&&c.unmountOnExit||null!=c&&c.mountOnEnter)||(d["aria-controls"]=a)}return"tab"===d.role&&(d["aria-selected"]=u,u||(d.tabIndex=-1),o&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=R((n=>{o||(null==t||t(n),null!=e&&s&&!n.isPropagationStopped()&&s(e,n))})),[d,{isActive:u}]}const A=a.forwardRef(((e,t)=>{let{as:n=S,active:r,eventKey:a}=e,l=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,B);const[o,s]=O(Object.assign({key:y(a,l.href),active:r},l));return o[N("active")]=s.isActive,(0,I.jsx)(n,Object.assign({},l,o,{ref:t}))}));A.displayName="NavItem";var _=A;const j=["as","onSelect","activeKey","role","onKeyDown"];const P=()=>{},$=N("event-key"),F=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:l,role:o,onKeyDown:s}=e,i=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,j);const c=function(){const[,e]=(0,a.useReducer)((e=>!e),!1);return e}(),u=(0,a.useRef)(!1),d=(0,a.useContext)(E),f=(0,a.useContext)(w);let p,m;f&&(o=o||"tablist",l=f.activeKey,p=f.getControlledId,m=f.getControllerId);const g=(0,a.useRef)(null),x=e=>{const t=g.current;if(!t)return null;const n=(r=`[${$}]:not([aria-disabled=true])`,v(t.querySelectorAll(r)));var r;const a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const l=n.indexOf(a);if(-1===l)return null;let o=l+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},C=(e,t)=>{null!=e&&(null==r||r(e,t),null==d||d(e,t))};(0,a.useEffect)((()=>{if(g.current&&u.current){const e=g.current.querySelector(`[${$}][aria-selected=true]`);null==e||e.focus()}u.current=!1}));const N=b(t,g);return(0,I.jsx)(E.Provider,{value:C,children:(0,I.jsx)(h.Provider,{value:{role:o,activeKey:y(l),getControlledId:p||P,getControllerId:m||P},children:(0,I.jsx)(n,Object.assign({},i,{onKeyDown:e=>{if(null==s||s(e),!f)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}var n;t&&(e.preventDefault(),C(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),u.current=!0,c())},ref:N,role:o}))})})}));F.displayName="Nav";var K=Object.assign(F,{Item:_}),M=n(6792);const L=a.forwardRef((({bsPrefix:e,active:t,disabled:n,eventKey:r,className:a,variant:l,action:o,as:s,...i},c)=>{e=(0,M.vE)(e,"list-group-item");const[d,f]=O({key:y(r,i.href),active:t,...i}),p=R((e=>{if(n)return e.preventDefault(),void e.stopPropagation();d.onClick(e)}));n&&void 0===i.tabIndex&&(i.tabIndex=-1,i["aria-disabled"]=!0);const m=s||(o?i.href?"a":"button":"div");return(0,I.jsx)(m,{ref:c,...i,...d,onClick:p,className:u()(a,e,f.isActive&&"active",n&&"disabled",l&&`${e}-${l}`,o&&`${e}-action`)})}));L.displayName="ListGroupItem";var U=L;const z=a.forwardRef(((e,t)=>{const{className:n,bsPrefix:r,variant:a,horizontal:l,numbered:o,as:s="div",...i}=m(e,{activeKey:"onSelect"}),c=(0,M.vE)(r,"list-group");let d;return l&&(d=!0===l?"horizontal":`horizontal-${l}`),(0,I.jsx)(K,{ref:t,...i,as:s,className:u()(n,c,a&&`${c}-${a}`,d&&`${c}-${d}`,o&&`${c}-numbered`)})}));z.displayName="ListGroup";var V=Object.assign(z,{Item:U});const{useState:q,useCallback:Z,useEffect:H}=l;var W=e=>{var t;let{data:n}=e;const l=null==n||null===(t=n.allShanhanJson)||void 0===t?void 0:t.edges,[s,c]=q([]),[u,d]=q(l),[f,p]=q([]),[m,v]=q([]);H((()=>{const e=null==l?void 0:l.map((e=>{let{node:t}=e;return{value:t.name,label:t.name}}));v(e)}),[]),H((()=>{const e=s.length?null==l?void 0:l.filter((e=>{let{node:t}=e;const n=[t.name,t.description];return!!s.find((e=>n.find((t=>t.includes(null==e?void 0:e.value)))))})):l;d(e)}),[s]);const g=Z((e=>{c([].concat((0,r.Z)(s),[e]))}),[s]),b=Z((e=>{c(s.filter(((t,n)=>n!==e)))}),[s]);return a.createElement(o.Z,null,a.createElement("section",{className:"py-5 container"},a.createElement("div",{className:"row py-lg-5"},a.createElement("div",{className:"col-lg-6 col-md-8 mx-auto"},a.createElement("h1",{className:"fw-light  text-center"},"唯医搜索"))),a.createElement(i.ReactTags,{"react-tag-autocomplete":!0,placeholderText:"经方名称， 病症， 病名",labelText:"Select",selected:s,suggestions:m,onAdd:g,onDelete:b,noOptionsText:"",allowNew:!0}),a.createElement("br",null),a.createElement(V,null,u.length+" 答案",u.map((e=>{let{node:t}=e;return a.createElement(V.Item,null,a.createElement("div",{className:""},a.createElement("div",{className:"fw-bold"}," ",t.name," "),t.description,a.createElement("br",null),a.createElement("br",null),t.formula),(null==t?void 0:t.url)&&a.createElement("a",{target:"_blank",href:null==t?void 0:t.url},"Watch"))})))))};const G=()=>a.createElement(s.p,null)},682:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),l=n(7294),o=n(6792),s=n(5893);const i=l.forwardRef((({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...l},i)=>{const c=(0,o.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,s.jsx)(n,{ref:i,...l,className:a()(r,t?`${c}${u}`:c)})}));i.displayName="Container",t.Z=i},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return i}});var r=n(7294);n(5893);const a=["xxl","xl","lg","md","sm","xs"],l=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:o,Provider:s}=l;function i(e,t){const{prefixes:n}=(0,r.useContext)(l);return e||n[t]||t}},3501:function(e,t,n){!function(e,t){"use strict";const n={Enter:"Enter",Escape:"Escape",Tab:"Tab",Backspace:"Backspace",UpArrow:"ArrowUp",UpArrowCompat:"Up",DownArrow:"ArrowDown",DownArrowCompat:"Down",PageDown:"PageDown",PageUp:"PageUp"},r=Symbol("Create new tag"),a=Symbol("No options"),l=()=>{},o=t.createContext(void 0);function s(e,t){return e===t?[]:e.filter((e=>!t.includes(e)))}function i(e){return 0===e.selectionStart&&0===e.selectionEnd}function c(e){const t=e.value.length;return e.selectionStart===t&&e.selectionEnd===t}function u(e){return e}function d(e){return`${e}-label`}function f(e){return`${e}-combobox`}function p(e){return`${e}-input`}function m(e){return`${e}-listbox`}function v(e,t){return`${e}-option-${N(t)}`}function g(e,t){if((null==e?void 0:e.value)===r&&!1===e.disabled)return{value:t,label:t}}function b(e){const t=g(e.activeOption,e.value)||e.activeOption||B(e.value,e.options);return t&&!t.disabled?t:void 0}function x(e,t,n){const r=t-1;return e>r?n:e<n?r:e}const h=/%value%/;function y(e,t){return e.replace(h,t)}function E(e,t){const n=D(t),r=e.match(n);if(r){const t=r[0],n=r.index+t.length;return[e.slice(0,r.index),e.slice(r.index,n),e.slice(n)]}}const w=/\s+/g;function C(e){return`${String(e.value)}-${e.label}`}function N(e){return C(e).replace(w,"_")}function k(e,t){return t.findIndex((({value:t})=>t===e.value))}const R=/[-\\^$*+?.()|[\]{}]/g;function I(e){return e.replace(R,"\\$&")}function D(e){return new RegExp(I(e),"i")}function T(e){return new RegExp(`^${I(e)}$`,"i")}function S(e,t){if(e){const n=D(e);return t.filter((e=>n.test(e.label)))}return[].concat(t)}function B(e,t){const n=T(e);return t.find((e=>n.test(e.label)))||null}const O={autoComplete:"off",autoCorrect:"off","data-form-type":"other",spellCheck:!1};function A({allowBackspace:e,ariaDescribedBy:r,ariaErrorMessage:a,delimiterKeys:s}){const{id:u,comboBoxRef:f,inputRef:g,isDisabled:b,isInvalid:x,managerRef:h}=t.useContext(o),y=t.useMemo((()=>{const t=e=>{const{activeIndex:t,isExpanded:n}=h.current.state;n?(e.preventDefault(),h.current.updateActiveIndex(t+1)):(c(e.currentTarget)||e.altKey)&&(e.preventDefault(),h.current.listBoxExpand())},r=e=>{const{activeIndex:t,isExpanded:n}=h.current.state;n?(e.preventDefault(),h.current.updateActiveIndex(t-1)):i(e.currentTarget)&&(e.preventDefault(),h.current.listBoxExpand())},a=e=>{const{isExpanded:t,options:n}=h.current.state;t&&(e.preventDefault(),h.current.updateActiveIndex(n.length-1))},l=e=>{h.current.state.isExpanded&&(e.preventDefault(),h.current.updateActiveIndex(0))},o=()=>{h.current.state.isExpanded?h.current.listBoxCollapse():h.current.updateInputValue("")},u=()=>{if(e){const{value:e,selected:t}=h.current.state,n=t[t.length-1];""===e&&n&&h.current.selectTag(n)}},d=e=>{h.current.state.isExpanded&&(e.preventDefault(),h.current.selectTag())};return{onBlur:e=>{var t;!1===(null==(t=f.current)?void 0:t.contains(e.relatedTarget))&&h.current.listBoxCollapse()},onChange:e=>{const t=e.currentTarget.value;h.current.updateInputValue(t),document.activeElement===g.current&&h.current.listBoxExpand(t)},onClick:()=>{h.current.listBoxExpand()},onFocus:()=>{h.current.listBoxExpand()},onKeyDown:e=>e.key===n.UpArrow?r(e):e.key===n.DownArrow?t(e):e.key===n.PageUp?l(e):e.key===n.PageDown?a(e):e.key===n.Escape?o():e.key===n.Backspace?u():s.includes(e.key)?d(e):void 0}}),[e,f,s,g,h]),{activeOption:E,isExpanded:w,value:C}=h.current.state;return{...O,"aria-autocomplete":"list","aria-activedescendant":E?v(u,E):void 0,"aria-controls":m(u),"aria-describedby":r||void 0,"aria-disabled":b,"aria-errormessage":x&&a||void 0,"aria-invalid":x,"aria-labelledby":d(u),"aria-expanded":w,id:p(u),onBlur:b?l:y.onBlur,onChange:b?l:y.onChange,onClick:b?l:y.onClick,onFocus:b?l:y.onFocus,onKeyDown:b?l:y.onKeyDown,ref:g,role:"combobox",type:"text",value:C}}const _={position:"absolute",width:0,height:0,visibility:"hidden",overflow:"scroll",whiteSpace:"pre"},j=["font-family","font-size","font-style","font-weight","letter-spacing","text-transform"];function P({allowResize:e=!0,text:n}){const r=t.useRef(null),{inputRef:a}=t.useContext(o),[l,s]=t.useState(null);return t.useLayoutEffect((()=>{if(e&&a.current&&r.current&&window.getComputedStyle){const e=window.getComputedStyle(a.current);j.forEach((t=>{const n=e.getPropertyValue(t);r.current.style.setProperty(t,n)}))}}),[e,a,r]),t.useLayoutEffect((()=>{var t;if(e){const e=Math.ceil((null==(t=r.current)?void 0:t.scrollWidth)??0)+2;l!==e&&s(e)}}),[e,n,l]),{width:l,sizerProps:{ref:r,style:_}}}function $(){const{id:e,inputRef:n,listBoxRef:r,managerRef:a}=t.useContext(o),l=-1===a.current.state.activeIndex,s=t.useCallback((e=>{var t;e.target!==n.current&&(null==(t=n.current)||t.focus({preventScroll:!0}))}),[n]);return t.useEffect((()=>{var e;l&&(null==(e=r.current)||e.scrollTo({top:0}))}),[r,l]),{"aria-labelledby":d(e),id:m(e),onFocus:s,ref:r,role:"listbox",tabIndex:-1}}function F({activateFirstOption:e,allowNew:n,collapseOnSelect:l,newOptionText:o,noOptionsText:i,onAdd:c,onDelete:u,onCollapse:d,onExpand:f,onInput:p,onShouldCollapse:m,onShouldExpand:v,onValidate:g,selected:h,suggestions:y,suggestionsTransform:E}){const w=t.useRef(),[C,N]=t.useState(null),[R,I]=t.useState(!1),[D,T]=t.useState(""),S=t.useMemo((()=>{const e=E(D,y);return D&&(n&&e.push({disabled:!!g&&!g(D),label:o,value:r}),0===e.length&&e.push({disabled:!0,label:i,value:a})),e}),[n,o,i,g,y,E,D]),B=C?k(C,S):-1,O=e?Math.max(B,0):B,A=S[O],_={activeIndex:O,activeOption:A,isExpanded:R,options:S,selected:h,value:D},j={tagsAdded:w.current?s(h,w.current.state.selected):[],tagsDeleted:w.current?s(w.current.state.selected,h):[]},P={listBoxCollapse(e){R&&(m&&!m(e??_.value)||(I(!1),N(null),null==d||d()))},listBoxExpand(e){R||v&&!v(e??_.value)||(I(!0),N(S[O]),null==f||f())},updateActiveIndex(t){const n=x(t,S.length,e?0:-1);N(S[n])},updateInputValue(e){D!==e&&(T(e),null==p||p(e))},selectTag(e){if(e??(e=b(_)),e){const t=k(e,_.selected);t>-1?u(t):c(e),l&&this.listBoxCollapse(),this.updateInputValue("")}}};return w.current={...P,flags:j,state:_},w}function K(e){const{id:n,inputRef:r,listBoxRef:a,managerRef:l}=t.useContext(o),s=t.useRef(null),i=l.current.state.options[e],c=e===l.current.state.activeIndex,u=i.disabled??!1,d=k(i,l.current.state.selected)>-1,f=t.useCallback((()=>{var e;l.current.selectTag(),null==(e=r.current)||e.focus()}),[r,l]),p=t.useCallback((()=>{e!==l.current.state.activeIndex&&l.current.updateActiveIndex(e)}),[e,l]);return U(s,a,c),{option:{...i,active:c,disabled:u,index:e,selected:d},optionProps:{"aria-disabled":u,"aria-posinset":e+1,"aria-selected":u?void 0:d,"aria-setsize":l.current.state.options.length,id:v(n,i),onClick:f,onMouseDown:p,ref:s,role:"option",tabIndex:-1}}}function M({inputRef:e,managerRef:n}){return t.useRef({input:{blur(){var t;null==(t=e.current)||t.blur()},focus(){var t;null==(t=e.current)||t.focus()},get value(){return n.current.state.value},set value(e){"string"!=typeof e&&(e=String(e)),n.current.updateInputValue(e)}},listBox:{collapse(){n.current.listBoxCollapse()},expand(){n.current.listBoxExpand()},get activeOption(){return n.current.state.activeOption},get isExpanded(){return n.current.state.isExpanded}},select(e){n.current.selectTag(e)}}).current}function L({onBlur:e,onFocus:n}){const[r,a]=t.useState(!1),{id:l,inputRef:s}=t.useContext(o),i=t.useRef(null);return{isActive:r,rootProps:t.useMemo((()=>({"aria-describedby":d(l),id:u(l),onFocus(){a(!0),null==n||n()},onBlur(){var t;(null==(t=i.current)?void 0:t.contains(document.activeElement))||(a(!1),null==e||e())},onClick(){var e;document.activeElement===i.current&&(null==(e=s.current)||e.focus())},ref:i,tabIndex:-1})),[s,l,e,n,i])}}function U(e,n,r){t.useEffect((()=>{var t,a,l,o;if(r){const r=null==(t=e.current)?void 0:t.offsetHeight,s=null==(a=e.current)?void 0:a.offsetTop,i=null==(l=n.current)?void 0:l.offsetHeight,c=null==(o=n.current)?void 0:o.scrollTop;s<c&&n.current.scrollTo(0,s),s+r>c+i&&n.current.scrollTo(0,s+r-i)}}),[r,n,e])}function z(e,n){const{isDisabled:r,managerRef:a}=t.useContext(o),s=a.current.state.selected[e],i=t.useCallback((()=>a.current.selectTag(s)),[a,s]);return{tag:s,tagProps:{"aria-disabled":r,title:y(n,s.label),onClick:r?l:i}}}function V(){var e;const{inputRef:n,managerRef:r}=t.useContext(o),a=t.useRef(),l=r.current.flags.tagsDeleted.length,s=null==(e=a.current)?void 0:e.contains(document.activeElement);return t.useLayoutEffect((()=>{var e,t;if(l){const r=null==(e=a.current)?void 0:e.contains(document.activeElement);s&&!r&&(null==(t=n.current)||t.focus({preventScroll:!0}))}}),[n,s,a,l]),{listRef:a}}const q={position:"absolute",width:1,height:1,left:-9999,overflow:"hidden",clip:"rect(0 0 0 0)"};function Z({ariaAddedText:e,ariaDeletedText:n}){const{managerRef:r}=t.useContext(o),a=t.useRef([]);return r.current.flags.tagsAdded.forEach((t=>{a.current.push(y(e,t.label))})),r.current.flags.tagsDeleted.forEach((e=>{a.current.push(y(n,e.label))})),t.createElement("div",{"aria-live":"polite","aria-relevant":"additions",role:"status",style:q},a.current.join("\n"))}function H({children:e}){const{classNames:n,comboBoxRef:r,id:a}=t.useContext(o);return t.createElement("div",{className:n.comboBox,id:f(a),ref:r},e)}const W=({classNames:e,text:n})=>t.createElement("mark",{className:e.highlight},n);function G({option:e,query:n,render:l=W}){const{classNames:s}=t.useContext(o);if(e.value===r||e.value===a)return t.createElement(t.Fragment,null,y(e.label,n));if(n){const r=E(e.label,n);if(r){const e=l({text:r[1],classNames:s});return t.createElement(t.Fragment,null,r[0],e,r[2])}}return t.createElement(t.Fragment,null,e.label)}const Q=t.memo(G),J=({classNames:e,inputWidth:n,...r})=>t.createElement("input",{className:e.input,style:{width:n},...r});function X({allowBackspace:e=!0,allowResize:n=!0,ariaDescribedBy:r,ariaErrorMessage:a,delimiterKeys:l,placeholderText:s,render:i=J}){const{classNames:c}=t.useContext(o),{value:u,...d}=A({allowBackspace:e,ariaDescribedBy:r,ariaErrorMessage:a,delimiterKeys:l}),f=u.length<s.length?s:u,{width:p,sizerProps:m}=P({allowResize:n,text:f});return t.createElement(t.Fragment,null,i({classNames:c,inputWidth:p,placeholder:s,value:u,...d}),n?t.createElement("div",{...m},f):null)}const Y=({children:e,classNames:n,id:r})=>t.createElement("div",{className:n.label,id:r},e);function ee({children:e,render:n=Y}){const{classNames:r,id:a}=t.useContext(o);return n({children:e,classNames:r,id:d(a)})}const te=({children:e,classNames:n,...r})=>t.createElement("div",{className:n.listBox,...r},e);function ne({children:e,render:n=te}){const{classNames:r,managerRef:a}=t.useContext(o),l=$();return a.current.state.isExpanded&&0!==t.Children.count(e)?n({children:e,classNames:r,...l}):null}const re=({children:e,classNames:n,option:r,...a})=>{const l=[n.option];return r.active&&l.push(n.optionIsActive),t.createElement("div",{className:l.join(" "),...a},e)};function ae({children:e,index:n,render:r=re}){const{classNames:a}=t.useContext(o),{option:l,optionProps:s}=K(n);return r({classNames:a,children:e,option:l,...s})}const le=({children:e,classNames:n,isActive:r,isDisabled:a,isInvalid:l,...o})=>{const s=[n.root];return r&&s.push(n.rootIsActive),a&&s.push(n.rootIsDisabled),l&&s.push(n.rootIsInvalid),t.createElement("div",{className:s.join(" "),...o},e)};function oe({children:e,onBlur:n,onFocus:r,render:a=le}){const{classNames:l,isDisabled:s,isInvalid:i}=t.useContext(o),{isActive:c,rootProps:u}=L({onBlur:n,onFocus:r});return a({children:e,classNames:l,isActive:c,isDisabled:s,isInvalid:i,...u})}const se=({classNames:e,tag:n,...r})=>t.createElement("button",{type:"button",className:e.tag,...r},t.createElement("span",{className:e.tagName},n.label));function ie({render:e=se,index:n,title:r}){const{classNames:a}=t.useContext(o),{tag:l,tagProps:s}=z(n,r);return e({classNames:a,tag:l,...s})}function ce({children:e,label:n}){const{classNames:r}=t.useContext(o),{listRef:a}=V();return t.createElement("ul",{className:r.tagList,"aria-label":n,ref:a,role:"list"},e.map((e=>t.createElement("li",{className:r.tagListItem,key:e.key,role:"listitem"},e))))}const ue={root:"react-tags",rootIsActive:"is-active",rootIsDisabled:"is-disabled",rootIsInvalid:"is-invalid",label:"react-tags__label",tagList:"react-tags__list",tagListItem:"react-tags__list-item",tag:"react-tags__tag",tagName:"react-tags__tag-name",comboBox:"react-tags__combobox",input:"react-tags__combobox-input",listBox:"react-tags__listbox",option:"react-tags__listbox-option",optionIsActive:"is-active",highlight:"react-tags__listbox-option-highlight"},de=[n.Enter];function fe({activateFirstOption:e=!1,allowBackspace:n=!0,allowNew:r=!1,allowResize:a=!0,ariaAddedText:l="Added tag %value%",ariaDescribedBy:s,ariaErrorMessage:i,ariaDeletedText:c="Removed tag %value%",classNames:u=ue,collapseOnSelect:d=!1,deleteButtonText:f="Remove %value% from the list",delimiterKeys:p=de,id:m="react-tags",isDisabled:v=!1,isInvalid:g=!1,labelText:b="Select tags",newOptionText:x="Add %value%",noOptionsText:h="No options found for %value%",onAdd:y,onBlur:E,onCollapse:w,onDelete:N,onExpand:k,onFocus:R,onInput:I,onShouldCollapse:D,onShouldExpand:T,onValidate:B,placeholderText:O="Add a tag",renderHighlight:A,renderInput:_,renderLabel:j,renderListBox:P,renderOption:$,renderRoot:K,renderTag:L,selected:U=[],suggestions:z=[],suggestionsTransform:V=S,tagListLabelText:q="Selected tags"},W){const G=t.useRef(null),J=t.useRef(null),Y=t.useRef(null),te=F({activateFirstOption:e,allowNew:r,collapseOnSelect:d,newOptionText:x,noOptionsText:h,onAdd:y,onDelete:N,onCollapse:w,onExpand:k,onInput:I,onShouldCollapse:D,onShouldExpand:T,onValidate:B,selected:U,suggestions:z,suggestionsTransform:V}),re=M({inputRef:J,managerRef:te});return W&&("function"==typeof W?W(re):W.current=re),t.createElement(o.Provider,{value:{classNames:u,comboBoxRef:G,id:m,inputRef:J,isDisabled:v,isInvalid:g,listBoxRef:Y,managerRef:te}},t.createElement(oe,{onBlur:E,onFocus:R,render:K},t.createElement(ee,{render:j},b),t.createElement(ce,{label:q},te.current.state.selected.map(((e,n)=>t.createElement(ie,{key:C(e),index:n,render:L,title:f})))),t.createElement(H,null,t.createElement(X,{allowBackspace:n,allowResize:a,ariaDescribedBy:s,ariaErrorMessage:i,delimiterKeys:p,placeholderText:O,render:_}),t.createElement(ne,{render:P},te.current.state.options.map(((e,n)=>t.createElement(ae,{key:C(e),index:n,render:$},t.createElement(Q,{option:e,query:te.current.state.value,render:A})))))),t.createElement(Z,{ariaAddedText:l,ariaDeletedText:c})))}const pe=t.forwardRef(fe);e.ReactTags=pe,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}(t,n(7294))},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-pages-index-js-871174dabed7462a1bb5.js.map