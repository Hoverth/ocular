import{d as b,u as x,y as k,c as h,$ as v,a0 as B,o as c,a as i,i as C,n as a,p as r,t as I,k as s,_ as O}from"./index-e730ce79.js";import{I as $}from"./Icon-69043def.js";import{u as D}from"./useThemeStyles-a6b3f5e4.js";const M=b({__name:"Button",props:{class:{},iconClass:{},icon:{},text:{},tooltip:{},tooltipPosition:{},color:{default:"primary"},textual:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1}},emits:["click"],setup(u,{emit:p}){x(o=>({cb9920d8:s(e).color.base,"5af31a4c":s(e).text.base,"4ab8ccc0":s(e).focus,aeed2022:s(e).pure.base,a6d50e4e:s(e).color.hover,"7ea2de53":s(e).text.hover,"68ff83de":s(e).pure.hover}));const d=p,t=u,n=k(),e=D(()=>t.color),m=h(()=>[t.class,n.button,{[n.hasIcon]:t.icon,[n.textual]:t.textual,[n.rounded]:t.rounded,[n.iconOnly]:t.icon&&!t.text}]);return(o,l)=>{const y=v("tooltip");return B((c(),i("button",{class:a(m.value),type:"button",onClick:l[0]||(l[0]=f=>d("click",f))},[o.icon?(c(),C($,{key:0,class:a([o.$style.icon,o.iconClass]),icon:o.icon},null,8,["class","icon"])):r("",!0),o.text?(c(),i("span",{key:1,class:a(o.$style.text)},I(o.text),3)):r("",!0)],2)),[[y,{text:o.tooltip,position:o.tooltipPosition}]])}}}),P="N",S="O",_="P",N="Q",T="R",V="S",g="T",w={button:P,iconOnly:S,hasIcon:_,text:N,icon:T,textual:V,rounded:g},z={$style:w},j=O(M,[["__cssModules",z]]);export{j as B};
