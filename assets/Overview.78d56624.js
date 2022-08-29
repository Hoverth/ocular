import{d as b,k as a,o as i,c as $,n,a as s,_ as f,w as D,l as P,b as C,x,f as m,e as B,s as E,p as L,u as N,g as O,A as j,B as q}from"./index.db807e99.js";import{A as z}from"./AsyncComponent.5f26bec7.js";import{t as A,a as S,s as T,b as p}from"./budgets.8c854936.js";import{_ as Q}from"./Currency.vue_vue_type_script_setup_true_lang.35f691c0.js";import{I as R}from"./Icon.f12cb2bb.js";import{L as F}from"./Link.8aeed8da.js";import{u as G,i as H,a as J,b as K,_ as U}from"./installSVGRenderer.473159fe.js";import"./useThemeStyles.ac0c0253.js";import"./useResizeObserver.63d6a5f1.js";const W=b({__name:"SummaryPanelChart",props:{class:null,color:null,values:null},setup(t){const e=t;G([H,J,K]);const c=a(()=>e.class),u=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...e.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:e.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:e.color}}]}));return(r,d)=>(i(),$(U,{class:n([r.$style.summaryPanelChart,s(c)]),options:s(u)},null,8,["class","options"]))}}),X="_4s",Y={summaryPanelChart:X},Z={$style:Y},ss=f(W,[["__cssModules",Z]]),es=b({__name:"SummaryPanel",props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const e=t;L(l=>({"0d9627ea":s(d),72555020:s(v),b850672a:s(r)}));const c=a(()=>e.class),u=a(()=>Array.isArray(e.values)?e.values[e.values.length-1]:e.values),r=a(()=>`var(${e.color}-shadow)`),d=a(()=>`var(${e.color}-light)`),v=a(()=>`var(${e.color}-light-dimmed)`),y=a(()=>e.to?F:"div");return(l,g)=>(i(),$(E(s(y)),{to:t.to,class:n([l.$style.summaryPanel,s(c)])},{default:D(()=>[t.to?(i(),$(R,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):P("",!0),C("div",{class:n(l.$style.header)},[C("h2",{class:n(l.$style.head)},x(t.title),3),C("span",{class:n(l.$style.title)},[m(Q,{value:s(u)},null,8,["value"])],2),t.subTitle?(i(),B("span",{key:0,class:n(l.$style.subTitle)},x(t.subTitle),3)):P("",!0)],2),Array.isArray(t.values)?(i(),$(ss,{key:1,class:n(l.$style.chart),color:s(v),values:t.values},null,8,["class","color","values"])):P("",!0)]),_:1},8,["to","class"]))}}),as="_3h _3i _3k _3u",ts="_3j _3l",ls="_3m _3n _3p _3r _3v",ns="_3o",os="_3q _3w",cs="_3s",rs="_3t _3x",us={summaryPanel:as,editIcon:ts,header:ls,head:ns,title:os,subTitle:cs,chart:rs},is={$style:us},h=f(es,[["__cssModules",is]]),ms=b({__name:"SummaryPanels",props:{class:null},setup(t){const e=t,c=a(()=>e.class),{state:u}=O(),{t:r,n:d}=N(),v=a(()=>A(u.income)),y=a(()=>A(u.expenses)),l=a(()=>S(v.value)),g=a(()=>S(y.value)),_=a(()=>T(l.value,g.value)),I=a(()=>p(_.value)),M=a(()=>{const o=p(y.value),w=p(v.value);return w?o/w:0}),k=a(()=>{const o=new Date().getMonth()+1;return p(T(v.value.slice(o),y.value.slice(o)))}),V=a(()=>{const o=_.value[_.value.length-1];return o?k.value/o:0});return(o,w)=>(i(),B("div",{class:n([o.$style.summaryPanels,s(c)])},[m(h,{values:s(l),color:"--c-success",to:"/income",title:s(r)("dashboard.income")},null,8,["values","title"]),m(h,{"sub-title":s(d)(s(M),"percent"),to:"/expenses",values:s(g),color:"--c-warning",title:s(r)("dashboard.expenses")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(d)(s(I)?1-s(M):0,"percent"),values:s(_),color:"--c-primary",title:s(r)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(d)(s(V),"percent"),values:s(k),color:"--c-secondary",title:s(r)("dashboard.remainingBalance")},null,8,["sub-title","values","title"])],2))}}),ds="_2r _2s _2t _2u _2v _2w _2x",vs={summaryPanels:ds},ys={$style:vs},_s=f(ms,[["__cssModules",ys]]),ps=b({__name:"Overview",setup(t){const e=q();return(c,u)=>(i(),B("div",{class:n(c.$style.overview)},[m(_s),m(z,{show:s(e)!=="mobile",class:n(c.$style.chart),import:()=>j(()=>import("./DistributionChart.d15949a2.js"),["assets/DistributionChart.d15949a2.js","assets/DistributionChart.8aec1f85.css","assets/ChartPlaceholder.89da3f41.js","assets/ChartPlaceholder.63c647cb.css","assets/Icon.f12cb2bb.js","assets/Icon.6535ff66.css","assets/index.db807e99.js","assets/index.3c3134d9.css","assets/installSVGRenderer.473159fe.js","assets/useResizeObserver.63d6a5f1.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),hs="_8 _9 a",$s="b",bs={overview:hs,chart:$s},fs={$style:bs},Ss=f(ps,[["__cssModules",fs]]);export{Ss as default};
