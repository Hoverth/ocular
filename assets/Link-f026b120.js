import{d,u as f,k as n,a5 as k,y as _,c as y,h,Y as v,Z as C,o as a,i as c,w as L,n as i,p as b,E as w,_ as B}from"./index-5f56ba51.js";import{I as M}from"./Icon-f0486a04.js";import{u as S}from"./useThemeStyles-e64a9f9a.js";const $=d({__name:"Link",props:{class:{},icon:{},color:{default:"primary"},custom:{type:Boolean,default:void 0},tooltip:{},tooltipPosition:{},to:{}},setup(l){const s=l;f(o=>({"5a8aab04":n(e).pure.base,"11b4a92e":n(e).pure.hover}));const r=k(),t=_(),u=y(()=>[s.class,t.link,{[t.custom]:s.custom??r.default}]),e=S(()=>s.color);return(o,g)=>{const p=h("RouterLink"),m=v("tooltip");return C((a(),c(p,{to:o.to,class:i(u.value)},{default:L(()=>[o.icon?(a(),c(M,{key:0,class:i(o.$style.icon),icon:o.icon},null,8,["class","icon"])):b("",!0),w(o.$slots,"default")]),_:3},8,["to","class"])),[[m,{text:o.tooltip,position:o.tooltipPosition}]])}}}),D="g",I="h",P="i",R={link:D,icon:I,custom:P},V={$style:R},T=B($,[["__cssModules",V]]);export{T as L};
