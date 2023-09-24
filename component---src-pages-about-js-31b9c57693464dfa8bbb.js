/*! For license information please see component---src-pages-about-js-31b9c57693464dfa8bbb.js.LICENSE.txt */
(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[682],{4184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},6301:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(7294),r=a.t(n,2),i=a(1883),l=a(682),o=a(7896);const{useEffect:s,useState:c}=r,u=e=>{let{isCurrent:t}=e;return t?{className:"nav-link active"}:{className:"nav-link"}},m=e=>n.createElement(i.Link,Object.assign({getProps:u},e)),d=[{to:"/",label:"Flu, Fever 感冒 发烧 "}],p=e=>{let{siteTitle:t}=e;const a=(0,o.useLocation)(),[r,l]=c(!1);return s((()=>{const e=!!d.find((e=>a.pathname.includes(null==e?void 0:e.to)));l(e)}),[a.pathname]),n.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},n.createElement("div",{className:"container-fluid"},n.createElement(i.Link,{to:"/",className:"navbar-brand",href:"#"},t),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},n.createElement("li",{class:"nav-item dropdown",id:"myDropdown"},n.createElement("a",{class:"nav-link dropdown-toggle "+(r?"active":""),href:"#","data-bs-toggle":"dropdown"},"  Specific Treatment 专治  "),n.createElement("ul",{class:"dropdown-menu"},null==d?void 0:d.map((e=>n.createElement("li",null," ",n.createElement(i.Link,{className:"dropdown-item",to:null==e?void 0:e.to}," ",e.label," ")))))),n.createElement("li",{className:"nav-item"},n.createElement(m,{to:"/"},"Search 搜索")),n.createElement("li",{className:"nav-item"},n.createElement(m,{to:"/redirect?path=https%3A%2F%2Fgithub.com%2F41319%2Fonlytcm.com"},"github"))))))};p.defaultProps={siteTitle:""};var f=p;var h=e=>{var t;let{children:a}=e;const r=(0,i.useStaticQuery)("3649515864");return n.createElement("div",{className:"container-fluid p-0"},n.createElement(f,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",null,a),n.createElement("footer",null,n.createElement(l.Z,null,n.createElement("h3",null,"Medical Disclaimer"),"All content and media on the OnlyTCM is created and published online for informational purposes only. It is not intended to be a substitute for professional medical advice and should not be relied on as health or personal advice. Always seek the guidance of your doctor or other qualified health professional with any questions you may have regarding your health or a medical condition. Never disregard the advice of a medical professional, or delay in seeking it because of something you have read on this Website.",n.createElement("h3",null,"Do your own Research"),"Under no circumstances OnlyTCM be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from your use of or inability to use this website or any websites linked to it, or from your reliance on the information and material on this website, even if the OnlyTCM has been advised of the possibility of such damages in advance.")))}},1707:function(e,t,a){"use strict";a.d(t,{p:function(){return i}});var n=a(7294),r=a(1883);const i=e=>{let{title:t,description:a,pathname:i,children:l}=e;const{title:o,description:s,siteUrl:c}=(0,r.useStaticQuery)("63159454").site.siteMetadata,u={title:t||o,description:a||s,url:""+c+(i||"")};return n.createElement(n.Fragment,null,n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"twitter:title",content:u.title}),n.createElement("meta",{name:"twitter:url",content:u.url}),n.createElement("meta",{name:"twitter:description",content:u.description}),l)}},5465:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return o}});var n=a(7294),r=a(1883),i=a(6301),l=a(1707);t.default=()=>n.createElement(i.Z,null,n.createElement("div",{className:"container  my-5"},n.createElement("div",{className:"container"},n.createElement("h1",null,"What you need to know"),n.createElement("p",null,n.createElement("ul",null,n.createElement("li",null,"Bootstrap 5 support with SASS"),n.createElement("li",null,"Customize theme via ",n.createElement("span",{className:"font-monospace "},"layout.scss")),n.createElement("li",null,"If any issue report to ",n.createElement("a",{href:"https://github.com/r-ichard/gatsby-starter-bootstrap-5",target:"_blank",rel:"noopener noreferrer"},"Github Repo")))),n.createElement("p",null,"Created by ",n.createElement("a",{href:"https://github.com/r-ichard",target:"_blank",rel:"noopener noreferrer"},"Richard Raduly"))),n.createElement(r.Link,{to:"/"},"Go back to the homepage")));const o=()=>n.createElement(l.p,{title:"About Gatsby Bootsrap 5 starter"})},682:function(e,t,a){"use strict";var n=a(4184),r=a.n(n),i=a(7294),l=a(6792),o=a(5893);const s=i.forwardRef((({bsPrefix:e,fluid:t=!1,as:a="div",className:n,...i},s)=>{const c=(0,l.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(a,{ref:s,...i,className:r()(n,t?`${c}${u}`:c)})}));s.displayName="Container",t.Z=s},6792:function(e,t,a){"use strict";a.d(t,{vE:function(){return s}});var n=a(7294);a(5893);const r=["xxl","xl","lg","md","sm","xs"],i=n.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"}),{Consumer:l,Provider:o}=i;function s(e,t){const{prefixes:a}=(0,n.useContext)(i);return e||a[t]||t}}}]);
//# sourceMappingURL=component---src-pages-about-js-31b9c57693464dfa8bbb.js.map