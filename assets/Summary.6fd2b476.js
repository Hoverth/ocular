import{_ as S,d as T,o as a,j as r,k as n,A as l,n as e,l as P,f as w,c as _,a as C,q as E,L as f,b as s,F as h,e as V,m as M,O as q,P as z}from"./index.fe273bf0.js";import{A as F}from"./AsyncComponent.3372117a.js";import{f as O,b as k,c as g,s as j,a as G,t as D}from"./budgets.8c854936.js";import{u as L}from"./useMonthNames.54e81566.js";const I="_2v",Q="_2w",R="_2x";var H={summaryTable:I,title:Q,table:R};const J=T({props:{title:null},setup(d){return(m,i)=>(a(),r("div",{class:e(m.$style.summaryTable)},[n("h1",{class:e(m.$style.title)},l(d.title),3),n("div",{class:e(m.$style.table)},[P(m.$slots,"default")],2)],2))}}),K={$style:H};var N=S(J,[["__cssModules",K]]);const U="_1l _1m _1n _1p _1r _1t _1v _1y _21",W="_1o",X="_1q",Y="_1s",Z="_1u _1w _1z",x="_1x",ss="_20";var es={table:U,bold:W,muted:X,currentMonth:Y,current:Z,first:x,last:ss};const ts=n("span",null,null,-1),ls=T({props:{class:null,groups:null,title:null},setup(d){const m=d,{t:i,n:o}=w(),v=L(),$=new Date().getMonth(),p=_(()=>O(m.groups));return(u,t)=>(a(),C(N,{title:d.title},{default:E(()=>[n("div",{class:e(u.$style.table)},[ts,(a(!0),r(h,null,f(s(v),(b,c)=>(a(),r("span",{class:e([u.$style.bold,{[u.$style.currentMonth]:c===s($)}]),key:b},l(b),3))),128)),n("span",{class:e(u.$style.bold)},l(s(i)("budget.total")),3),n("span",{class:e(u.$style.bold)},l(s(i)("budget.average")),3),(a(!0),r(h,null,f(s(p),(b,c)=>(a(),r(h,{key:b.id},[n("span",{class:e(u.$style.bold)},l(b.name),3),(a(!0),r(h,null,f(b.totals,(y,B)=>(a(),r("span",{class:e({[u.$style.current]:B===s($),[u.$style.first]:c===0,[u.$style.last]:c===s(p).length-1}),key:B},l(s(o)(y,"currency")),3))),128)),n("span",{class:e(u.$style.bold)},l(s(o)(s(k)(b.totals),"currency")),3),n("span",{class:e(u.$style.bold)},l(s(o)(s(g)(b.totals),"currency")),3)],64))),128))],2)]),_:1},8,["title"]))}}),ns={$style:es};var A=S(ls,[["__cssModules",ns]]);const as="_22 _23 _24 _26 _28 _2a _2c _2f _2i",rs="_25",os="_27",us="_29",cs="_2b _2d _2g",ys="_2e",ds="_2h";var ms={table:as,bold:rs,muted:os,currentMonth:us,current:cs,first:ys,last:ds};const is=n("span",null,null,-1),$s=n("span",null,null,-1),ps=T({props:{income:{default:()=>[]},expenses:{default:()=>[]},title:null},setup(d){const m=d,{t:i,n:o}=w(),v=L(),$=new Date().getMonth(),p=_(()=>j(m.income,m.expenses)),u=_(()=>G(p.value));return(t,b)=>(a(),C(N,{title:d.title},{default:E(()=>[n("div",{class:e(t.$style.table)},[is,(a(!0),r(h,null,f(s(v),(c,y)=>(a(),r("span",{class:e([t.$style.bold,{[t.$style.currentMonth]:y===s($)}]),key:c},l(c),3))),128)),n("span",{class:e(t.$style.bold)},l(s(i)("budget.total")),3),n("span",{class:e(t.$style.bold)},l(s(i)("budget.average")),3),n("span",{class:e([t.$style.bold,t.$style.muted])},l(s(i)("dashboard.income")),3),(a(!0),r(h,null,f(d.income,(c,y)=>(a(),r("span",{class:e([t.$style.muted,t.$style.first,{[t.$style.current]:y===s($)}]),key:y},l(s(o)(c,"currency")),3))),128)),n("span",{class:e(t.$style.muted)},l(s(o)(s(k)(d.income),"currency")),3),n("span",{class:e(t.$style.muted)},l(s(o)(s(g)(d.income),"currency")),3),n("span",{class:e([t.$style.bold,t.$style.muted])},l(s(i)("dashboard.expenses")),3),(a(!0),r(h,null,f(d.expenses,(c,y)=>(a(),r("span",{class:e([t.$style.muted,{[t.$style.current]:y===s($)}]),key:y},l(s(o)(c,"currency")),3))),128)),n("span",{class:e(t.$style.muted)},l(s(o)(s(k)(d.expenses),"currency")),3),n("span",{class:e(t.$style.muted)},l(s(o)(s(g)(d.expenses),"currency")),3),n("span",{class:e([t.$style.bold,t.$style.muted])},l(s(i)("dashboard.netSavings")),3),(a(!0),r(h,null,f(s(p),(c,y)=>(a(),r("span",{class:e([t.$style.muted,{[t.$style.current]:y===s($)}]),key:y},l(s(o)(c,"currency")),3))),128)),n("span",{class:e(t.$style.muted)},l(s(o)(s(k)(s(p)),"currency")),3),n("span",{class:e(t.$style.muted)},l(s(o)(s(g)(s(p)),"currency")),3),n("span",{class:e(t.$style.bold)},l(s(i)("dashboard.endingBalance")),3),(a(!0),r(h,null,f(s(u),(c,y)=>(a(),r("span",{class:e([t.$style.bold,t.$style.last,{[t.$style.current]:y===s($)}]),key:y},l(s(o)(c,"currency")),3))),128)),$s,n("span",{class:e(t.$style.bold)},l(s(o)(s(g)(s(u)),"currency")),3)],2)]),_:1},8,["title"]))}}),bs={$style:ms};var hs=S(ps,[["__cssModules",bs]]);const fs="_6",vs="_7";var gs={summary:fs,chart:vs};const _s=T({setup(d){const{state:m}=V(),{t:i}=w(),o=z(),v=_(()=>D(m.income)),$=_(()=>D(m.expenses));return(p,u)=>(a(),r("div",{class:e(p.$style.summary)},[M(F,{show:s(o)!=="mobile",class:e(p.$style.chart),import:()=>q(()=>import("./DevelopmentChart.207031e1.js"),["assets/DevelopmentChart.207031e1.js","assets/DevelopmentChart.3bc6c559.css","assets/ChartPlaceholder.8031a909.js","assets/ChartPlaceholder.aede90ea.css","assets/Icon.ef802f3e.js","assets/Icon.174105fb.css","assets/index.fe273bf0.js","assets/index.1f292fa1.css","assets/installSVGRenderer.202a3452.js","assets/installSVGRenderer.dfc0dd66.css","assets/useResizeObserver.23475085.js","assets/useMonthNames.54e81566.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"]),M(hs,{title:s(i)("dashboard.summary"),income:s(v),expenses:s($)},null,8,["title","income","expenses"]),M(A,{title:s(i)("dashboard.income"),groups:s(m).income},null,8,["title","groups"]),M(A,{title:s(i)("dashboard.expenses"),groups:s(m).expenses},null,8,["title","groups"])],2))}}),Ms={$style:gs};var Bs=S(_s,[["__cssModules",Ms]]);export{Bs as default};