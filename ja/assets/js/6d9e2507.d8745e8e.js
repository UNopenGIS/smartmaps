"use strict";(self.webpackChunksmartmaps=self.webpackChunksmartmaps||[]).push([[2997],{1777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(5893),s=r(1151),o=r(7294);const a=function(e){let{username:t,role:r}=e;const[s,a]=(0,o.useState)("");(0,o.useEffect)((()=>{fetch(`https://api.github.com/users/${t}`).then((e=>e.json())).then((e=>a(e.avatar_url)))}),[t]);const i=`/about/people/${t}`,u=`https://github.com/${t}`;return(0,n.jsx)("a",{href:i||u,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"10px",padding:"10px",border:"1px solid #ddd",borderRadius:"4px"},children:[(0,n.jsx)("img",{src:s,alt:t,style:{width:"50px",height:"50px",borderRadius:"50%",marginRight:"10px"}}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:t}),(0,n.jsx)("div",{style:{fontSize:"0.8em",color:"#666"},children:r})]})]})})},i={},u=void 0,c={id:"about/contributors",title:"contributors",description:"Contributors",source:"@site/docs/about/contributors.md",sourceDirName:"about",slug:"/about/contributors",permalink:"/smartmaps/ja/about/contributors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"about",previous:{title:"\u30d6\u30e9\u30f3\u30c9\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3",permalink:"/smartmaps/ja/about/brand"},next:{title:"Albert Kochaphum",permalink:"/smartmaps/ja/about/people/albertkun"}},l={},d=[{value:"Contributors",id:"contributors",level:2}];function p(e){const t={h2:"h2",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,n.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(a,{username:"hfu",role:"UN Smart Maps Lead"}),(0,n.jsx)(a,{username:"smellman",role:"Maintainer"}),(0,n.jsx)(a,{username:"yuiseki",role:"Maintainer"}),(0,n.jsx)(a,{username:"albertkun",role:"Web Admin"}),(0,n.jsx)(a,{username:"asahina820",role:"Maintainer"})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(7294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);