import{u as K,i as z,a as j,b as H,_ as L}from"./installSVGRenderer.44379e37.js";import{d as w,k as b,o as u,c as P,n as r,a as t,v as G,u as D,D as X,e as d,G as R,H as S,_ as N,j as q,b as l,f as _,F as f,r as M,x as A,l as J,g as F,w as U}from"./index.08399701.js";import{b as O,c as Q,t as W}from"./budgets.8c854936.js";import{P as Y}from"./Pane.61c29faf.js";import{B as V}from"./Button.bbb322b5.js";import{_ as I}from"./Currency.vue_vue_type_script_setup_true_lang.581c19c4.js";import{u as Z}from"./useMonthNames.bd3b3d5f.js";const x=w({__name:"MiniChart",props:{class:null,values:null},setup(o){const m=o;K([z,j,H]);const p=b(()=>m.class),a=b(()=>({xAxis:{type:"category",show:!1},yAxis:{show:!1,min:Math.min(...m.values)},grid:{top:"15%",left:0,bottom:"20%",right:0},series:[{data:m.values,type:"line",smooth:!0,showSymbol:!1}]}));return(i,y)=>(u(),P(L,{class:r(t(p)),options:t(a)},null,8,["class","options"]))}}),ll=["type","value"],sl=w({__name:"CurrencyCell",props:{modelValue:null,max:{default:Number.MAX_SAFE_INTEGER}},emits:["update:modelValue"],setup(o,{emit:m}){const p=o,a=G(),i=G(!1),{n:y}=D(),h=b(()=>{const s=p.modelValue;return i.value||!s?s||"":y(p.modelValue,"currency")}),C=s=>{m("update:modelValue",Math.max(s,0))},g=s=>{s.key==="-"&&s.preventDefault()},$=()=>{i.value=!0,S(()=>{a.value.select()})},c=s=>{const n=Number(s.target.value);!Number.isNaN(n)&&C(n)};return X(()=>p.modelValue,(s,n)=>{(s!=null?s:0)>p.max&&n!==void 0&&m("update:modelValue",n)}),(s,n)=>(u(),d("input",{ref_key:"input",ref:a,class:r(s.$style.currencyCell),type:i.value?"number":"text",value:t(h),onBlur:n[0]||(n[0]=e=>i.value=!1),onFocus:$,onInput:c,onKeydown:[g,n[1]||(n[1]=R((...e)=>{var v,k;return((v=a.value)==null?void 0:v.blur)&&((k=a.value)==null?void 0:k.blur(...e))},["enter"]))]},null,42,ll))}}),el="_24",nl={currencyCell:el},tl={$style:nl},ol=N(sl,[["__cssModules",tl]]),ul=["value"],al=w({__name:"TextCell",props:{modelValue:null,inline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:m}){const p=o,a=G(),i=q(),y=G(!1),h=b(()=>[i.textInput,{[i.empty]:!p.modelValue,[i.inline]:p.inline}]),C=()=>{y.value=!0,S(()=>{a.value.select()})},g=$=>{m("update:modelValue",$.target.value)};return($,c)=>(u(),d("span",{class:r(t(h))},[l("input",{ref_key:"input",ref:a,value:o.modelValue,type:"text",onBlur:c[0]||(c[0]=s=>y.value=!1),onFocus:C,onInput:g,onKeydown:c[1]||(c[1]=R((...s)=>{var n,e;return((n=a.value)==null?void 0:n.blur)&&((e=a.value)==null?void 0:e.blur(...s))},["enter"]))},null,40,ul)],2))}}),cl="_2d",rl="_2e",dl="_2f",pl={textInput:cl,inline:rl,empty:dl},il={$style:pl},E=N(al,[["__cssModules",il]]),_l=l("span",null,null,-1),ml=l("span",null,null,-1),yl=l("span",null,null,-1),$l=l("span",null,null,-1),vl=l("span",null,null,-1),hl=l("span",null,null,-1),fl=l("span",null,null,-1),gl=l("span",null,null,-1),Bl=l("span",null,null,-1),Cl=l("span",null,null,-1),bl=l("span",null,null,-1),kl=l("span",null,null,-1),Ml=l("span",null,null,-1),wl=l("span",null,null,-1),Vl=l("span",null,null,-1),Gl=l("span",null,null,-1),Nl=l("span",null,null,-1),Il=w({__name:"BudgetGroup",props:{group:null},setup(o){const m=o,p=new Date().getMonth(),{addBudget:a,setBudgetName:i,setBudgetGroupName:y,setBudget:h,removeBudget:C}=F(),{t:g}=D(),$=G(!0),c=b(()=>{const s=new Array(12).fill(0);for(const{values:n}of m.group.budgets)for(let e=0;e<n.length;e++)s[e]+=n[e];return s});return(s,n)=>(u(),d(f,null,[_(V,{icon:$.value?"arrow-down-s-line":"arrow-right-s-line",color:"dimmed",textual:"",onClick:n[0]||(n[0]=e=>$.value=!$.value)},null,8,["icon"]),_(E,{class:r([s.$style.top,s.$style.start]),"model-value":o.group.name,inline:"","onUpdate:modelValue":n[1]||(n[1]=e=>t(y)(o.group.id,e))},null,8,["class","model-value"]),(u(!0),d(f,null,M(t(c),(e,v)=>(u(),d("span",{key:v,class:r(s.$style.top)},[l("span",null,[_(I,{value:e},null,8,["value"])])],2))),128)),l("span",{class:r(s.$style.top)},[l("span",null,A(t(g)("budget.total")),1)],2),l("span",{class:r([s.$style.top,s.$style.end])},[l("span",null,A(t(g)("budget.average")),1)],2),$.value?(u(),d(f,{key:0},[(u(!0),d(f,null,M(o.group.budgets,(e,v)=>(u(),d(f,{key:e.id+v},[_l,_(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:k=>t(C)(e.id)},null,8,["onClick"]),l("span",{class:r(s.$style.header)},[_(E,{"model-value":e.name,"onUpdate:modelValue":k=>t(i)(e.id,k)},null,8,["model-value","onUpdate:modelValue"])],2),(u(!0),d(f,null,M(e.values,(k,B)=>(u(),d("span",{class:r([s.$style.currencyCell,{[s.$style.even]:v%2,[s.$style.firstRow]:v===0,[s.$style.firstColumn]:B===0,[s.$style.currentMonth]:B===t(p),[s.$style.tlc]:v===0&&B===0,[s.$style.trc]:v===0&&B===11,[s.$style.blc]:v===o.group.budgets.length-1&&B===0,[s.$style.brc]:v===o.group.budgets.length-1&&B===11}]),key:e.id+B},[_(ol,{"model-value":e.values[B],"onUpdate:modelValue":T=>t(h)(e.id,B,T)},null,8,["model-value","onUpdate:modelValue"])],2))),128)),l("span",{class:r(s.$style.meta)},[_(I,{value:t(O)(e.values)},null,8,["value"])],2),l("span",{class:r(s.$style.meta)},[_(I,{value:t(Q)(e.values)},null,8,["value"])],2)],64))),128)),ml,yl,_(V,{class:r(s.$style.addBudgetBtn),textual:"",text:t(g)("budget.addBudget"),onClick:n[2]||(n[2]=e=>t(a)(o.group.id))},null,8,["class","text"]),$l,vl,hl,fl,gl,Bl,Cl,bl,kl,Ml,wl,Vl,Gl,Nl],64)):J("",!0)],64))}}),Al="z",Dl="_21",Fl="e",Ul="_22",El="_23",Pl="_24",Rl="_25",Sl="_26",Tl="s",Kl="_27",zl="_28",jl="_29",Hl="_2a",Ll="_2b",Xl="_2c",ql={header:Al,meta:Dl,top:Fl,start:Ul,end:El,currencyCell:Pl,firstRow:Rl,firstColumn:Sl,currentMonth:Tl,even:Kl,tlc:zl,trc:jl,blc:Hl,brc:Ll,addBudgetBtn:Xl},Jl={$style:ql},Ol=N(Il,[["__cssModules",Jl]]),Ql=l("span",null,null,-1),Wl=l("span",null,null,-1),Yl=l("span",null,null,-1),Zl=l("span",null,null,-1),xl=l("span",null,null,-1),ls=l("span",null,null,-1),ss=l("span",null,null,-1),es=l("span",null,null,-1),ns=l("span",null,null,-1),ts=l("span",null,null,-1),os=l("span",null,null,-1),us=l("span",null,null,-1),as=l("span",null,null,-1),cs=l("span",null,null,-1),rs=l("span",null,null,-1),ds=l("span",null,null,-1),ps=l("span",null,null,-1),is=l("span",null,null,-1),_s=l("span",null,null,-1),ms=l("span",null,null,-1),ys=l("span",null,null,-1),$s=l("span",null,null,-1),vs=l("span",null,null,-1),hs=l("span",null,null,-1),fs=l("span",null,null,-1),gs=w({__name:"BudgetGroups",props:{type:null},setup(o){const m=o,{state:p,addBudgetGroup:a,removeBudgetGroup:i}=F(),{t:y}=D(),h=new Date().getMonth(),C=b(()=>p[m.type]),g=Z(),$=b(()=>{const c=new Array(12).fill(0);for(const{budgets:s}of C.value)for(const{values:n}of s)for(let e=0;e<n.length;e++)c[e]+=n[e];return c});return(c,s)=>(u(),d("div",{class:r(c.$style.budgetGroups)},[Ql,Wl,Yl,(u(!0),d(f,null,M(t(g),(n,e)=>(u(),d("span",{key:n,class:r([c.$style.month,{[c.$style.current]:e===t(h)}])},[l("span",null,A(n),1)],2))),128)),Zl,xl,ls,ss,l("span",{class:r(c.$style.sum)},A(t(y)("budget.totals")),3),(u(!0),d(f,null,M(t($),(n,e)=>(u(),d("span",{key:e,class:r(c.$style.sum)},[_(I,{value:n},null,8,["value"])],2))),128)),es,ns,(u(!0),d(f,null,M(t(C),n=>(u(),d(f,{key:n.id},[_(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:e=>t(i)(n.id)},null,8,["onClick"]),_(Ol,{group:n},null,8,["group"])],64))),128)),ts,os,_(V,{class:r(c.$style.addGroupBtn),icon:"plus",text:t(y)("budget.addGroup"),onClick:s[0]||(s[0]=n=>t(a)(o.type))},null,8,["class","text"]),us,as,cs,rs,ds,ps,is,_s,ms,ys,$s,vs,hs,fs],2))}}),Bs="_1a",Cs="_1b",bs="_1c",ks="t",Ms="_1d",ws={budgetGroups:Bs,sum:Cs,month:bs,current:ks,addGroupBtn:Ms},Vs={$style:ws},Gs=N(gs,[["__cssModules",Vs]]),Ns=w({__name:"BudgetPane",props:{title:null,type:null},setup(o){const m=o,{state:p}=F(),a=b(()=>W(p[m.type])),i=a.value.reduce((y,h)=>y+h,0);return(y,h)=>(u(),P(Y,{amount:t(i),title:o.title},{header:U(()=>[_(x,{class:r(y.$style.miniChart),values:t(a)},null,8,["class","values"])]),default:U(()=>[_(Gs,{type:o.type},null,8,["type"])]),_:1},8,["amount","title"]))}}),Is="k",As={miniChart:Is},Ds={$style:As},Ks=N(Ns,[["__cssModules",Ds]]);export{Ks as B};
