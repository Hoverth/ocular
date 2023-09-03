import{d as C,c as a,o as r,i as w,n as l,_ as P,u as x,m as F,a as d,w as N,p as B,b as T,l as u,t as k,F as O,q,s as Q,f as R,e as j,v as G,x as H,y as J,z as D,A as V,B as f,k as t,C as K,D as U}from"./index-bff5bb42.js";import{A as W}from"./AsyncComponent-7dcc3ee4.js";import{t as z}from"./budgets-531db56b.js";import{C as X}from"./Currency-f00eca8f.js";import{I as E}from"./Icon-8760e494.js";import{L as Z}from"./Link-bd8d1a8d.js";import{u as ee,i as se,a as ae,b as te,_ as le}from"./EChart.vue_vue_type_script_setup_true_lang-f82b7fdc.js";import"./useThemeStyles-128ca879.js";import"./useResizeObserver-f9048134.js";const oe=C({__name:"SummaryPanelChart",props:{class:{},color:{},values:{}},setup(v){const s=v;ee([se,ae,te]);const o=a(()=>s.class),n=a(()=>({animation:!1,xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...s.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:s.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:s.color}}]}));return(i,m)=>(r(),w(le,{class:l([i.$style.summaryPanelChart,o.value]),options:n.value},null,8,["class","options"]))}}),ne="L_",re={summaryPanelChart:ne},ce={$style:re},ue=P(oe,[["__cssModules",ce]]),ie=C({__name:"SummaryPanel",props:{class:{},title:{},subTitle:{},to:{},alt:{},color:{},values:{}},setup(v){const s=v;x(e=>({"0b68ca22":_.value,"7e5a6dd0":h.value,"630b55cb":$.value,57562074:m.value}));const o=a(()=>s.class),n=F(.25),i=a(()=>Array.isArray(s.values)?s.values[s.values.length-1]:s.values),m=a(()=>`var(--c-${s.color}-shadow)`),h=a(()=>`var(--c-${s.color}-text-accent)`),_=a(()=>`var(--c-${s.color}-light)`),$=a(()=>`var(--c-${s.color}-light-dimmed)`),y=a(()=>s.to?Z:"div");return(e,A)=>(r(),d("div",{ref_key:"root",ref:n,style:Q(e.$style.wrapper)},[(r(),w(q(y.value),{to:e.to,class:l([e.$style.summaryPanel,o.value])},{default:N(()=>[e.to?(r(),w(E,{key:0,class:l(e.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):B("",!0),T("div",{class:l(e.$style.header)},[e.alt?(r(),d("div",{key:0,class:l(e.$style.placeholder)},[u(E,{class:l(e.$style.icon),icon:"calendar-2-line"},null,8,["class"]),T("span",{class:l(e.$style.text)},k(e.alt),3)],2)):(r(),d(O,{key:1},[T("h2",{class:l(e.$style.head)},k(e.title),3),u(X,{class:l(e.$style.title),value:i.value},null,8,["class","value"]),e.subTitle?(r(),d("span",{key:0,class:l(e.$style.subTitle)},k(e.subTitle),3)):B("",!0)],64))],2),Array.isArray(e.values)?(r(),w(ue,{key:1,class:l(e.$style.chart),color:$.value,values:e.values},null,8,["class","color","values"])):B("",!0)]),_:1},8,["to","class"]))],4))}}),me="u_",ve="v_",de="w_",ye="x_",pe="y_",he="z_",_e="A_",$e="B_",be="C_",fe="D_",ge="E_",we={wrapper:me,summaryPanel:ve,editIcon:de,header:ye,head:pe,title:he,subTitle:_e,placeholder:$e,icon:be,text:fe,chart:ge},Ce={$style:we},g=P(ie,[["__cssModules",Ce]]),Pe=C({__name:"SummaryPanels",props:{class:{}},setup(v){const s=v,{state:o}=R(),{t:n,n:i}=j(),m=G(),h=H(0),_=J(),$=a(()=>[s.class,_.summaryPanels,{[_.unAnimated]:h.value>=3}]),y=a(()=>z(o.income)),e=a(()=>z(o.expenses)),A=a(()=>D(y.value)),M=a(()=>D(e.value)),b=a(()=>V(A.value,M.value)),L=a(()=>f(b.value)),S=a(()=>{const c=f(e.value),p=f(y.value);return p?c/p:0}),I=a(()=>{const c=m.year.value===o.activeYear?m.month.value+1:0;return f(V(y.value.slice(c),e.value.slice(c)))}),Y=a(()=>{const c=b.value[b.value.length-1];return c?I.value/c:0});return(c,p)=>(r(),d("div",{class:l($.value),onAnimationend:p[0]||(p[0]=Ee=>h.value++)},[u(g,{values:A.value,color:"success",to:"/income",title:t(n)("dashboard.income")},null,8,["values","title"]),u(g,{"sub-title":t(i)(S.value,"percent"),to:"/expenses",values:M.value,color:"warning",title:t(n)("dashboard.expenses")},null,8,["sub-title","values","title"]),u(g,{"sub-title":t(i)(L.value?1-S.value:0,"percent"),values:b.value,color:"primary",title:t(n)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),u(g,{"sub-title":t(i)(Y.value,"percent"),alt:t(o).activeYear<t(m).year.value?t(n)("dashboard.yearInThePast"):t(o).activeYear>t(m).year.value?t(n)("dashboard.yearInTheFuture"):void 0,values:I.value,color:"secondary",title:t(n)("dashboard.remainingBalance",{year:t(o).activeYear+1})},null,8,["sub-title","alt","values","title"])],34))}}),Ae="Q",Be="R",Te={summaryPanels:Ae,unAnimated:Be},ke={$style:Te},Me=P(Pe,[["__cssModules",ke]]),Se=C({__name:"Overview",setup(v){const s=U();return(o,n)=>(r(),d("div",{class:l(o.$style.overview)},[u(Me),u(W,{show:t(s)!=="mobile",class:l(o.$style.chart),import:()=>K(()=>import("./DistributionChart-11c97836.js"),["assets/DistributionChart-11c97836.js","assets/index-bff5bb42.js","assets/index-6b70ab40.css","assets/ChartPlaceholder-e50360ff.js","assets/Icon-8760e494.js","assets/Icon-2d00bfea.css","assets/ChartPlaceholder-26119b8c.css","assets/EChart.vue_vue_type_script_setup_true_lang-f82b7fdc.js","assets/useResizeObserver-f9048134.js","assets/budgets-531db56b.js","assets/DistributionChart-5404add7.css"])},null,8,["show","class","import"])],2))}}),Ie="d",De="e",Ve={overview:Ie,chart:De},ze={$style:Ve},je=P(Se,[["__cssModules",ze]]);export{je as default};