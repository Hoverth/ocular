import{d as y,j as _,k as b,e as r,c as d,n as a,l as i,x as p,a as t,o as l,p as k,_ as C}from"./index.db807e99.js";import{I as h}from"./Icon.f12cb2bb.js";import{u as B}from"./useThemeStyles.ac0c0253.js";const I=y({__name:"Button",props:{class:null,iconClass:null,icon:null,text:null,color:{default:"primary"},textual:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:f}){const o=e;k(c=>({"7fcf761a":t(s).color.base,"1e11f59b":t(s).text.base,"8ba44ffe":t(s).focus,"17d61aa0":t(s).pure.base,"434b4f5a":t(s).color.hover,b6f0989c:t(s).text.hover,e2374d86:t(s).pure.hover}));const n=_(),s=B(()=>o.color),m=b(()=>[o.class,n.button,{[n.hasIcon]:o.icon,[n.textual]:o.textual,[n.iconOnly]:o.icon&&!o.text}]);return(c,u)=>(l(),r("button",{class:a(t(m)),type:"button",onClick:u[0]||(u[0]=x=>f("click",x))},[e.icon?(l(),d(h,{key:0,class:a([c.$style.icon,e.iconClass]),icon:e.icon},null,8,["class","icon"])):i("",!0),e.text?(l(),r("span",{key:1,class:a(c.$style.text)},p(e.text),3)):i("",!0)],2))}}),v="_3y _3z _41 _44 _46 _48 _49 _4b _4d _4e",M="_40",O="_42",$="_43 _47",z="_45",S="_4a _4c _4f",V={button:v,iconOnly:M,hasIcon:O,text:$,icon:z,textual:S},g={$style:V},N=C(I,[["__cssModules",g]]);export{N as B};
