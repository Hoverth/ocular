var _=Object.defineProperty,f=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var l=(a,e,s)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,c=(a,e)=>{for(var s in e||(e={}))y.call(e,s)&&l(a,s,e[s]);if(i)for(var s of i(e))B.call(e,s)&&l(a,s,e[s]);return a},d=(a,e)=>f(a,k(e));import{L as b}from"./Link.1ddf35a6.js";import{A as v}from"./AnimatedRouterView.37698c71.js";import{_ as w,d as $,u as g,a as C,o as r,c as m,w as u,n as p,b as n,e as L,f as R,r as V,F as x,g as A}from"./index.27b640a2.js";import{P as F}from"./Pane.3634f2f2.js";import"./Icon.16e20304.js";import"./useThemeStyles.5906c575.js";import"./Currency.eaf46eb3.js";const M="_4",N="_5";var P={dashboard:M,viewButtons:N};const z=$({setup(a){const{t:e}=g(),s=C(),h=[{id:"charts",icon:"pi-chart-line",link:""},{id:"tables",icon:"grid-line",link:"/summary"}].map(t=>d(c({},t),{link:`/dashboard${t.link}`}));return(t,E)=>(r(),m(F,{class:p(t.$style.dashboard),title:n(e)("dashboard.header")},{header:u(()=>[L("div",{class:p(t.$style.viewButtons)},[(r(!0),R(x,null,V(n(h),o=>(r(),m(b,{to:o.link,color:n(s).currentRoute.value.path.endsWith(o.link)?"primary":"dimmed",icon:o.icon,key:o.id},null,8,["to","color","icon"]))),128))],2)]),default:u(()=>[A(v)]),_:1},8,["class","title"]))}}),D={$style:P};var O=w(z,[["__cssModules",D]]);export{O as default};