(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4258:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>h,default:()=>c,getServerSideProps:()=>f,getStaticPaths:()=>p,getStaticProps:()=>u,reportWebVitals:()=>x,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>m});var n=r(7093),s=r(5244),l=r(1323),i=r(1777),o=r.n(i),a=r(4849),d=r(8539);let c=(0,l.l)(d,"default"),u=(0,l.l)(d,"getStaticProps"),p=(0,l.l)(d,"getStaticPaths"),f=(0,l.l)(d,"getServerSideProps"),h=(0,l.l)(d,"config"),x=(0,l.l)(d,"reportWebVitals"),m=(0,l.l)(d,"unstable_getStaticProps"),g=(0,l.l)(d,"unstable_getStaticPaths"),b=(0,l.l)(d,"unstable_getStaticParams"),j=(0,l.l)(d,"unstable_getServerProps"),v=(0,l.l)(d,"unstable_getServerSideProps"),y=new n.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:a.default,Document:o()},userland:d})},8539:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(167),s=r(997),l=n._(r(6689)),i=n._(r(6665)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function a(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends l.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:d.error,children:[(0,s.jsx)(i.default,{children:(0,s.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:d.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,s.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,s.jsx)("div",{style:d.wrap,children:(0,s.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=a,c.origGetInitialProps=a,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2771:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6665:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return x}});let n=r(167),s=r(8760),l=r(997),i=s._(r(6689)),o=n._(r(8747)),a=r(8039),d=r(1988),c=r(2771);function u(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1558);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return s=>{let l=!0,i=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){i=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?l=!1:t.add(s.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=s.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?l=!1:(r.add(e),n[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let x=function(e){let{children:t}=e,r=(0,i.useContext)(a.AmpStateContext),n=(0,i.useContext)(d.HeadManagerContext);return(0,l.jsx)(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8747:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(6689),s=()=>{},l=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),l(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1558:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},4849:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(997),s=r(8633),l=r(2091),i=r(1121),o=r(1163);let a=()=>{let e=(0,o.useRouter)();return n.jsx("div",{onClick:()=>e.push("/"),className:"   rounded-full   h-14   w-14   p-4   flex   items-center   justify-center   hover:bg-blue-300   hover:bg-opactiy-10   cursor-pointer   transition   ",children:n.jsx(s.meP,{size:28,color:"white"})})},d=({label:e,href:t,icon:r,onClick:s})=>(0,n.jsxs)("div",{className:"flex flex-row items-center",children:[n.jsx("div",{className:"   relative    rounded-full   h-14   w-14   flex   items-center   justify-center   p-4   hover:bg-slate-300   hover:bg-opacity-10   cursor-pointer   lg:hidden   ",children:n.jsx(r,{size:28,color:"white"})}),(0,n.jsxs)("div",{className:"   relative    hidden   lg:flex   items-center   gap-4   p-4   rounded-full   hover:bg-slate-300   hover:bg-opacity-10   cursor-pointer   ",children:[n.jsx(r,{size:24,color:"white"}),n.jsx("p",{className:"hidden lg:block text-white text-xl",children:e})]})]}),c=()=>{let e=(0,o.useRouter)();return(0,n.jsxs)("div",{onClick:()=>e.push("/"),children:[n.jsx("div",{className:"   mt-6   lg:hidden   rounded-full   h-14   w-14   p-4   flex   items-center   justify-center   bg-sky-500   hover:bg-opactiy-80   transition   cursor-pointer   ",children:n.jsx(l.DdF,{size:24,color:"white"})}),n.jsx("div",{className:"   mt-6   hidden   lg:block   px-4   py-2   rounded-full   bg-sky-500   hover:bg-opactiy-80   transition   cursor-pointer   ",children:n.jsx("p",{className:"   hidden    lg:block    text-center    font-semibold    text-white    text-[20px]   ",children:"Tweet"})})]})},u=()=>{let e=[{label:"Home",href:"/",icon:s.nZm},{label:"Notifications",href:"/notifications",icon:s.JdD},{label:"Profile",href:"/users/123",icon:l.Xws}];return n.jsx("div",{className:"col-span-1 h-full pr-4 md: pr-6",children:n.jsx("div",{className:"flex flex-col items-end",children:(0,n.jsxs)("div",{className:"space-y-2 lg:2-[230px]",children:[n.jsx(a,{}),e.map(e=>n.jsx(d,{href:e.href,label:e.label,icon:e.icon},e.href)),n.jsx(d,{onClick:()=>{},icon:i.XqV,label:"Logout"}),n.jsx(c,{})]})})})},p=()=>n.jsx("div",{className:"px-6 py-4 hidden lg:block",children:(0,n.jsxs)("div",{className:"bg-neutral-800 rounded-xl p-4",children:[n.jsx("h2",{className:"text-white text-xl fonr-semibold",children:"Who to follow"}),n.jsx("div",{className:"flex flex-col gap-6 mt-4"})]})}),f=({children:e})=>n.jsx("div",{className:"h-screen bg-black",children:n.jsx("div",{className:"container h-full mx-auto xl:px-30 max-w-6xl",children:(0,n.jsxs)("div",{className:"grid grid-cols-4 h-full",children:[n.jsx(u,{}),n.jsx("div",{className:"   col-span-3    lg:col-span-2    border-x-[1px]    border-neutral-800   ",children:e}),n.jsx(p,{})]})})});function h({Component:e,pageProps:t}){return n.jsx(f,{children:n.jsx(e,{...t})})}r(6764)},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[255,731,777],()=>r(4258));module.exports=n})();