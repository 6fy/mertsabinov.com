(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(6382)}])},2114:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var a=t(5893),r=t(9008),s=t.n(r),i=t(9873),o=t.n(i),c=t(1664),l=t.n(c),d=t(4281),h=t.n(d),u=t(9583);let m=()=>(0,a.jsxs)("div",{className:h().container,children:[(0,a.jsx)("p",{children:"Mert Sabinov"}),(0,a.jsxs)("div",{className:h().navbarItemContainer,children:[(0,a.jsx)(l(),{href:"/",children:(0,a.jsx)("p",{children:"Home"})}),(0,a.jsx)(l(),{href:"/blog",children:(0,a.jsx)("p",{children:"Blog"})})]}),(0,a.jsx)("div",{className:h().navbarItemContainer,children:(0,a.jsxs)(l(),{href:"https://github.com/mertsabinov/mertsabinov.com",className:h().navbarItemContainer,children:[(0,a.jsx)("p",{children:"GitHub"}),(0,a.jsx)(u.hJX,{size:20,style:{marginLeft:"5%"}})]})})]}),p=e=>{let{children:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Mert Sabinov"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,a.jsx)("meta",{name:"description",content:"I am a Software Developer passionate about developing ideas in open source communities. Currently learning React, Next.js, TypeScript, Go, React Native, graphql, prisma, MongoDB and running open source projects. I want to work with technologies like React, Next.js, TypeScript, Go, React Native, graphql, prisma, MongoDB As a developer, most of my time is spent creating projects and learning new things every day."}),(0,a.jsx)("meta",{name:"keywords",content:"mert, mertsabinov, sabinov, mert sabinov"}),(0,a.jsx)("meta",{name:"author",content:"Mert Sabinov"})]}),(0,a.jsx)(m,{}),(0,a.jsx)("main",{className:o().layout,children:n})]})};var v=p},6382:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var a=t(5893),r=t(7294),s=t(8715),i=t.n(s),o=t(8532),c=t(9234);let l=e=>{let{title:n,content:t}=e,[s,l]=(0,r.useState)(200),d=()=>{switch(s){case 200:l(t.length);break;case t.length:l(200)}};return(0,a.jsx)("div",{className:i().container,onClick:()=>d(),children:(0,a.jsxs)("div",{className:i().content,children:[(0,a.jsx)("h2",{children:n}),(0,a.jsx)(o.D,{children:t.slice(0,s),rehypePlugins:[c.Z]}),200!==s?(0,a.jsx)("h3",{children:"Less"}):null]})})};var d=t(7850),h=t.n(d);t(3454);let u=()=>{let[e,n]=(0,r.useState)([]);(0,r.useEffect)(()=>{t()},[]);let t=async()=>{await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mertsabinov").then(e=>e.json()).then(e=>n(e.items))};return(0,a.jsx)("div",{className:h().container,children:(0,a.jsx)("div",{className:h().cardGroup,children:e.length>0?e.map((e,n)=>{let{title:t,description:r,content:s}=e;return(0,a.jsx)(l,{title:t,content:s},t)}):null})})};var m=t(2114);let p=()=>(0,a.jsx)(m.Z,{children:(0,a.jsx)(u,{})});var v=p},7850:function(e){e.exports={container:"BlogList_container__HvrkZ",loading:"BlogList_loading__FgOOf",cardGroup:"BlogList_cardGroup__Sc5Bi"}},9873:function(e){e.exports={layout:"Layout_layout__DtO8L"}},4281:function(e){e.exports={container:"Navbar_container__C88kT",loading:"Navbar_loading__TEEnP",navbarItemContainer:"Navbar_navbarItemContainer__CeGDA"}},8715:function(e){e.exports={container:"Post_container__Qo8wd",content:"Post_content__4xIGR"}}},function(e){e.O(0,[445,91,308,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);