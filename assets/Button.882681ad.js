import{_ as d,d as f,h as _,j as b,k,o as a,f as r,c as p,n as l,m as i,v as h,b as s}from"./index.27b640a2.js";import{I as C}from"./Icon.16e20304.js";import{u as v}from"./useThemeStyles.5906c575.js";const B="_3v _3w _3y _41 _43 _45 _46 _48 _4a _4b",I="_3x",M="_3z",O="_40 _44",$="_42",z="_47 _49 _4c";var S={button:B,iconOnly:I,hasIcon:M,text:O,icon:$,textual:z};const V=f({props:{class:null,iconClass:null,icon:null,text:null,color:{default:"primary"},textual:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:m}){const o=e;_(n=>({"595c4f6a":s(t).color.base,"0e2c9743":s(t).text.base,"50eb8da9":s(t).focus,"37a0d750":s(t).pure.base,d177b1fc:s(t).color.hover,"907d71ec":s(t).text.hover,bbc426d6:s(t).pure.hover}));const c=b(),t=v(()=>o.color),x=k(()=>[o.class,c.button,{[c.hasIcon]:o.icon,[c.textual]:o.textual,[c.iconOnly]:o.icon&&!o.text}]);return(n,u)=>(a(),r("button",{class:l(s(x)),onClick:u[0]||(u[0]=y=>m("click",y))},[e.icon?(a(),p(C,{key:0,class:l([n.$style.icon,e.iconClass]),icon:e.icon},null,8,["class","icon"])):i("",!0),e.text?(a(),r("span",{key:1,class:l(n.$style.text)},h(e.text),3)):i("",!0)],2))}}),g={$style:S};var E=d(V,[["__cssModules",g]]);export{E as B};