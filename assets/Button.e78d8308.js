import{_ as y,d as _,v as f,g as b,c as p,o as a,j as r,a as k,n as l,B as i,A as C,b as s}from"./index.fe273bf0.js";import{I as h}from"./Icon.ef802f3e.js";import{u as B}from"./useThemeStyles.cfd7d859.js";const v="_3w _3x _3z _42 _44 _46 _47 _49 _4b _4c",I="_3y",M="_40",O="_41 _45",$="_43",g="_48 _4a _4d";var z={button:v,iconOnly:I,hasIcon:M,text:O,icon:$,textual:g};const S=_({props:{class:null,iconClass:null,icon:null,text:null,color:{default:"primary"},textual:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:m}){const o=e;f(n=>({"1e0c8cd4":s(t).color.base,"40ade098":s(t).text.base,"6ec8c97e":s(t).focus,"16b0ddad":s(t).pure.base,"2e986f17":s(t).color.hover,"552daf56":s(t).text.hover,"80746440":s(t).pure.hover}));const c=b(),t=B(()=>o.color),x=p(()=>[o.class,c.button,{[c.hasIcon]:o.icon,[c.textual]:o.textual,[c.iconOnly]:o.icon&&!o.text}]);return(n,u)=>(a(),r("button",{class:l(s(x)),onClick:u[0]||(u[0]=d=>m("click",d))},[e.icon?(a(),k(h,{key:0,class:l([n.$style.icon,e.iconClass]),icon:e.icon},null,8,["class","icon"])):i("",!0),e.text?(a(),r("span",{key:1,class:l(n.$style.text)},C(e.text),3)):i("",!0)],2))}}),V={$style:z};var D=y(S,[["__cssModules",V]]);export{D as B};