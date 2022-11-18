import{d as P,k as a,o as r,c as p,n,a as e,_ as C,A as L,e as w,w as N,l as b,b as M,x,f as v,s as O,B as j,p as z,u as q,v as F,j as J,g as Q,C as R,D as X}from"./index.0fca65c1.js";import{A as Z}from"./AsyncComponent.55674cd2.js";import{t as D,a as I,s as V,b as g}from"./budgets.8c854936.js";import{_ as G}from"./Currency.vue_vue_type_script_setup_true_lang.bd75f79f.js";import{I as H}from"./Icon.36900350.js";import{L as K}from"./Link.edc65933.js";import{u as U,i as W,a as ee,b as se,_ as ae}from"./installSVGRenderer.c31d97f0.js";import"./useThemeStyles.1f4820cd.js";import"./useResizeObserver.b27efda0.js";const te=P({__name:"SummaryPanelChart",props:{class:null,color:null,values:null},setup(t){const s=t;U([W,ee,se]);const o=a(()=>s.class),c=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...s.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:s.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:s.color}}]}));return(u,m)=>(r(),p(ae,{class:n([u.$style.summaryPanelChart,e(o)]),options:e(c)},null,8,["class","options"]))}}),le="Ja",ne={summaryPanelChart:le},oe={$style:ne},ce=C(te,[["__cssModules",oe]]),re=P({__name:"SummaryPanel",props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const s=t;z(l=>({"32e9c026":e(h),"920aeb98":e(d),"21d8c0af":e(m)}));const o=a(()=>s.class),c=L(.25),u=a(()=>Array.isArray(s.values)?s.values[s.values.length-1]:s.values),m=a(()=>`var(${s.color}-shadow)`),h=a(()=>`var(${s.color}-light)`),d=a(()=>`var(${s.color}-light-dimmed)`),A=a(()=>s.to?K:"div");return(l,$)=>(r(),w("div",{ref_key:"root",ref:c,style:j(l.$style.wrapper)},[(r(),p(O(e(A)),{to:t.to,class:n([l.$style.summaryPanel,e(o)])},{default:N(()=>[t.to?(r(),p(H,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):b("",!0),M("div",{class:n(l.$style.header)},[M("h2",{class:n(l.$style.head)},x(t.title),3),M("span",{class:n(l.$style.title)},[v(G,{value:e(u)},null,8,["value"])],2),t.subTitle?(r(),w("span",{key:0,class:n(l.$style.subTitle)},x(t.subTitle),3)):b("",!0)],2),Array.isArray(t.values)?(r(),p(ce,{key:1,class:n(l.$style.chart),color:e(d),values:t.values},null,8,["class","color","values"])):b("",!0)]),_:1},8,["to","class"]))],4))}}),ue="fa",ie="ga",me="ha",de="ia",ve="ja",ye="ka",pe="la",he="ma",$e={wrapper:ue,summaryPanel:ie,editIcon:me,header:de,head:ve,title:ye,subTitle:pe,chart:he},fe={$style:$e},_=C(re,[["__cssModules",fe]]),ge=P({__name:"SummaryPanels",props:{class:null},setup(t){const s=t,o=new Date().getFullYear(),{state:c}=Q(),{t:u,n:m}=q(),h=F(0),d=J(),A=a(()=>[s.class,d.summaryPanels,{[d.reduced]:c.activeYear!==o,[d.unAnimated]:h.value>=3}]),l=a(()=>D(c.income)),$=a(()=>D(c.expenses)),k=a(()=>I(l.value)),B=a(()=>I($.value)),f=a(()=>V(k.value,B.value)),Y=a(()=>g(f.value)),S=a(()=>{const i=g($.value),y=g(l.value);return y?i/y:0}),T=a(()=>{const i=new Date().getMonth()+1;return g(V(l.value.slice(i),$.value.slice(i)))}),E=a(()=>{const i=f.value[f.value.length-1];return i?T.value/i:0});return(i,y)=>(r(),w("div",{class:n(e(A)),onAnimationend:y[0]||(y[0]=xe=>h.value++)},[v(_,{values:e(k),color:"--c-success",to:"/income",title:e(u)("dashboard.income")},null,8,["values","title"]),v(_,{"sub-title":e(m)(e(S),"percent"),to:"/expenses",values:e(B),color:"--c-warning",title:e(u)("dashboard.expenses")},null,8,["sub-title","values","title"]),v(_,{"sub-title":e(m)(e(Y)?1-e(S):0,"percent"),values:e(f),color:"--c-primary",title:e(u)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),e(o)===e(c).activeYear?(r(),p(_,{key:0,"sub-title":e(m)(e(E),"percent"),values:e(T),color:"--c-secondary",title:e(u)("dashboard.remainingBalance",{year:e(o)+1})},null,8,["sub-title","values","title"])):b("",!0)],34))}}),_e="X",be="Y",we="Z",Pe={summaryPanels:_e,reduced:be,unAnimated:we},Ce={$style:Pe},Ae=C(ge,[["__cssModules",Ce]]),Me=P({__name:"Overview",setup(t){const s=X();return(o,c)=>(r(),w("div",{class:n(o.$style.overview)},[v(Ae),v(Z,{show:e(s)!=="mobile",class:n(o.$style.chart),import:()=>R(()=>import("./DistributionChart.e75db408.js"),["assets/DistributionChart.e75db408.js","assets/ChartPlaceholder.48821862.js","assets/Icon.36900350.js","assets/index.0fca65c1.js","assets/index.f1bcfc4c.css","assets/Icon.497b4b4d.css","assets/ChartPlaceholder.bbc438c4.css","assets/installSVGRenderer.c31d97f0.js","assets/useResizeObserver.b27efda0.js","assets/budgets.8c854936.js","assets/DistributionChart.5645321c.css"])},null,8,["show","class","import"])],2))}}),ke="g",Be="h",Se={overview:ke,chart:Be},Te={$style:Se},ze=C(Me,[["__cssModules",Te]]);export{ze as default};