/*! For license information please see component---src-pages-404-js-75c7d286762b05e393e3.js.LICENSE.txt */
(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[883],{4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},6301:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(7294),r=n.t(a,2),i=n(1883),o=n(682),l=n(7896);const{useEffect:s,useState:c}=r,u=e=>{let{isCurrent:t}=e;return t?{className:"nav-link active"}:{className:"nav-link"}},d=e=>a.createElement(i.Link,Object.assign({getProps:u},e)),m=[{to:"/",label:"Flu, Fever 感冒 发烧 "}],p=e=>{let{siteTitle:t}=e;const n=(0,l.useLocation)(),[r,o]=c(!1);return s((()=>{const e=!!m.find((e=>n.pathname.includes(null==e?void 0:e.to)));o(e)}),[n.pathname]),a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},a.createElement("div",{className:"container-fluid"},a.createElement(i.Link,{to:"/",className:"navbar-brand",href:"#"},t),a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},a.createElement("span",{className:"navbar-toggler-icon"})),a.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},a.createElement("li",{class:"nav-item dropdown",id:"myDropdown"},a.createElement("a",{class:"nav-link dropdown-toggle "+(r?"active":""),href:"#","data-bs-toggle":"dropdown"},"  Specific Treatment 专治  "),a.createElement("ul",{class:"dropdown-menu"},null==m?void 0:m.map((e=>a.createElement("li",null," ",a.createElement(i.Link,{className:"dropdown-item",to:null==e?void 0:e.to}," ",e.label," ")))))),a.createElement("li",{className:"nav-item"},a.createElement(d,{to:"/"},"Search 搜索")),a.createElement("li",{className:"nav-item"},a.createElement(d,{to:"/redirect?path=https%3A%2F%2Fgithub.com%2F41319%2Fonlytcm.com"},"github"))))))};p.defaultProps={siteTitle:""};var f=p;var v=e=>{var t;let{children:n}=e;const r=(0,i.useStaticQuery)("3649515864");return a.createElement("div",{className:"container-fluid p-0"},a.createElement(f,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",null,n),a.createElement("footer",null,a.createElement(o.Z,null,a.createElement("h3",null,"Medical Disclaimer"),"All content and media on the OnlyTCM is created and published online for informational purposes only. It is not intended to be a substitute for professional medical advice and should not be relied on as health or personal advice. Always seek the guidance of your doctor or other qualified health professional with any questions you may have regarding your health or a medical condition. Never disregard the advice of a medical professional, or delay in seeking it because of something you have read on this Website.",a.createElement("h3",null,"Do your own Research"),"Under no circumstances OnlyTCM be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from your use of or inability to use this website or any websites linked to it, or from your reliance on the information and material on this website, even if the OnlyTCM has been advised of the possibility of such damages in advance.")))}},1707:function(e,t,n){"use strict";n.d(t,{p:function(){return i}});var a=n(7294),r=n(1883);const i=e=>{let{title:t,description:n,pathname:i,children:o}=e;const{title:l,description:s,siteUrl:c}=(0,r.useStaticQuery)("63159454").site.siteMetadata,u={title:t||l,description:n||s,url:""+c+(i||"")};return a.createElement(a.Fragment,null,a.createElement("title",null,u.title),a.createElement("meta",{name:"description",content:u.description}),a.createElement("meta",{name:"twitter:title",content:u.title}),a.createElement("meta",{name:"twitter:url",content:u.url}),a.createElement("meta",{name:"twitter:description",content:u.description}),o)}},429:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),r=n(6301),i=n(1707);t.default=()=>a.createElement(r.Z,null,a.createElement("div",{className:"container text-center my-5"},a.createElement("h1",null,"404: Not Found"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")));const o=()=>a.createElement(i.p,{title:"404: Not found"})},682:function(e,t,n){"use strict";var a=n(4184),r=n.n(a),i=n(7294),o=n(6792),l=n(5893);const s=i.forwardRef((({bsPrefix:e,fluid:t=!1,as:n="div",className:a,...i},s)=>{const c=(0,o.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(n,{ref:s,...i,className:r()(a,t?`${c}${u}`:c)})}));s.displayName="Container",t.Z=s},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return s}});var a=n(7294);n(5893);const r=["xxl","xl","lg","md","sm","xs"],i=a.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"}),{Consumer:o,Provider:l}=i;function s(e,t){const{prefixes:n}=(0,a.useContext)(i);return e||n[t]||t}}}]);
//# sourceMappingURL=component---src-pages-404-js-75c7d286762b05e393e3.js.map