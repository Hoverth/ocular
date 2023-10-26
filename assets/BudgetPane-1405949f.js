import{u as x,i as ee,a as te,b as se,_ as le}from"./EChart.vue_vue_type_script_setup_true_lang-9d49069b.js";import{d as A,c as B,o as p,i as U,n as a,K as ne,x as I,a as f,l as g,k as v,s as oe,b as r,t as S,p as ae,_ as P,L as q,M as H,e as K,N as ue,O as J,P as W,y as re,f as O,B as Y,G as z,F as N,r as E,w as j}from"./index-e730ce79.js";import{t as ce}from"./budgets-531db56b.js";import{P as de}from"./Pane-adfa1042.js";import{B as R}from"./Button-29bdbbf8.js";import{C as F}from"./Currency-787e01a2.js";import{u as ie}from"./useMonthNames-b46c703f.js";const pe=A({__name:"MiniChart",props:{class:{},values:{}},setup(b){x([ee,te,se]);const u=b,k=B(()=>u.class),t=B(()=>({xAxis:{type:"category",show:!1},yAxis:{show:!1,min:Math.min(...u.values)},grid:{top:"15%",left:0,bottom:"20%",right:0},series:[{data:u.values,type:"line",smooth:!0,showSymbol:!1,silent:!0}]}));return(m,d)=>(p(),U(le,{class:a(k.value),options:t.value},null,8,["class","options"]))}}),n=ne({group:void 0,source:void 0,target:void 0,type:void 0}),me=A({__name:"Draggable",props:{text:{type:Function},name:{},id:{}},emits:["drop"],setup(b,{emit:u}){const k=u,t=b,m=I(),d=I(),C=I(0),_=I(0),w=B(()=>t.id===n.target&&n.type),V=B(()=>w.value?n.type==="before"?"skip-up-line":"skip-down-line":"draggable"),M=B(()=>{var e;return n.target&&n.target&&n.source?(e=t.text)==null?void 0:e.call(t,n):void 0}),o=e=>{e.dataTransfer&&d.value&&(n.group=t.name,n.source=t.id,e.dataTransfer.effectAllowed="move",e.dataTransfer.setDragImage(d.value,1/0,1/0),e.dataTransfer.setData("text/plain",t.name))},c=e=>{C.value=e.pageX,_.value=e.pageY},l=e=>{var y;if(n.group===t.name){const s=(y=m.value)==null?void 0:y.getBoundingClientRect();if(e.preventDefault(),s&&t.id!==n.source){const h=e.pageY<s.top+s.height/2?"before":"after";n.target=t.id,n.type=h}}},$=e=>{e.pageX&&e.pageY&&n.target!==t.id&&(n.type=void 0,n.target=void 0)},i=()=>{n.type=void 0,n.target=void 0,n.source=void 0,n.group=void 0},G=e=>{n.target&&n.target&&n.source&&k("drop",n),e.preventDefault()};return(e,y)=>(p(),f("div",{ref_key:"draggable",ref:m,class:a(e.$style.draggable),draggable:"true",onDragend:i,onDragover:l,onDragleave:$,onDrop:G,onDrag:c,onDragstart:o},[g(R,{color:v(n).group===t.name?"primary":"dimmed",icon:V.value,textual:""},null,8,["color","icon"]),v(n).source===t.id&&_.value&&C.value&&M.value?(p(),f("div",{key:0,style:oe({top:`${_.value+5}px`,left:`${C.value+5}px`}),class:a(e.$style.content)},[r("span",{class:a(e.$style.text)},S(M.value),3)],6)):ae("",!0),r("div",{ref_key:"element",ref:d,class:a(e.$style.hidden)},"hidden",2)],34))}}),ge="O_",ve="P_",ye="Q_",fe="R_",$e={draggable:ge,content:ve,text:ye,hidden:fe},be={$style:$e},Z=P(me,[["__cssModules",be]]),_e=["type","value"],he=A({__name:"CurrencyCell",props:q({max:{default:Number.MAX_SAFE_INTEGER}},{modelValue:{}}),emits:["update:modelValue"],setup(b){const u=H(b,"modelValue"),k=b,t=I(),m=I(!1),{n:d}=K(),C=B(()=>m.value||!u.value?u.value||"":d(u.value,"currency")),_=o=>{const c=Number((o==null?void 0:o.trim())||NaN);u.value=Number.isNaN(c)?0:c},w=o=>{o.key==="-"&&o.preventDefault()},V=()=>{m.value=!0,W(()=>t.value.select())},M=o=>_(o.target.value);return ue(()=>u.value,(o,c)=>{(o??0)>k.max&&c!==void 0&&(u.value=c)}),(o,c)=>(p(),f("input",{ref_key:"input",ref:t,class:a(o.$style.currencyCell),type:m.value?"number":"text",value:C.value,onBlur:c[0]||(c[0]=l=>m.value=!1),onFocus:V,onInput:M,onKeydown:[w,c[1]||(c[1]=J(l=>{var $;return($=t.value)==null?void 0:$.blur()},["enter"]))]},null,42,_e))}}),Ce="wb",Be={currencyCell:Ce},ke={$style:Be},Me=P(he,[["__cssModules",ke]]),Ge=["value"],De=A({__name:"TextCell",props:q({inline:{type:Boolean,default:!1}},{modelValue:{}}),emits:["update:modelValue"],setup(b){const u=H(b,"modelValue"),k=b,t=I(),m=re(),d=I(!1),C=B(()=>[m.textInput,{[m.empty]:!u.value,[m.inline]:k.inline}]),_=()=>{d.value=!0,W(()=>t.value.select())},w=V=>{u.value=V.target.value};return(V,M)=>(p(),f("span",{class:a(C.value)},[r("input",{ref_key:"input",ref:t,value:u.value,class:a(V.$style.input),type:"text",onBlur:M[0]||(M[0]=o=>d.value=!1),onFocus:_,onInput:w,onKeydown:M[1]||(M[1]=J((...o)=>{var c,l;return((c=t.value)==null?void 0:c.blur)&&((l=t.value)==null?void 0:l.blur(...o))},["enter"]))},null,42,Ge)],2))}}),Ve="Cb",we="Db",Ne="Eb",Ie="Fb",Te={textInput:Ve,input:we,inline:Ne,empty:Ie},Ae={$style:Te},Q=P(De,[["__cssModules",Ae]]),Fe=r("span",null,null,-1),Ee=r("span",{style:{"grid-column":"3 / 16"}},null,-1),Pe=A({__name:"BudgetGroup",props:{group:{}},setup(b){const u=b,{moveBudget:k,removeBudgetGroup:t,getBudget:m,addBudget:d,setBudgetName:C,setBudgetGroupName:_,setBudget:w,removeBudget:V,isCurrentMonth:M}=O(),{t:o}=K(),c=B(()=>{const e=new Array(12).fill(0);for(const{values:y}of u.group.budgets)for(let s=0;s<y.length;s++)e[s]+=y[s];return e}),l=B(()=>Y(c.value)),$=B(()=>z(c.value)),i=e=>{const[y,s]=e.source?m(e.source)??[]:[],[h,T]=e.target?m(e.target)??[]:[];if(s&&y){if(T&&h){const D=y.id===h.id,L=D?s.name:`${y.name} » ${s.name}`,X=D?T.name:`${h.name} » ${T.name}`;return e.type==="before"?o("budget.prepend",{from:L,to:X}):o("budget.append",{from:L,to:X})}return o("budget.move",{from:s.name})}},G=e=>{k(e.source,e.target,e.type==="after")};return(e,y)=>(p(),f(N,null,[g(R,{color:"dimmed",icon:"close-circle",textual:"",onClick:y[0]||(y[0]=s=>v(t)(e.group.id))}),g(Q,{class:a([e.$style.top,e.$style.start]),"model-value":e.group.name,inline:"","onUpdate:modelValue":y[1]||(y[1]=s=>v(_)(e.group.id,s))},null,8,["class","model-value"]),(p(!0),f(N,null,E(c.value,(s,h)=>(p(),f("span",{key:h,class:a(e.$style.top)},[g(F,{value:s},null,8,["value"])],2))),128)),r("span",{class:a(e.$style.top)},[r("span",null,S(v(o)("budget.total")),1)],2),r("span",{class:a([e.$style.top,e.$style.end])},[r("span",null,S(v(o)("budget.average")),1)],2),(p(!0),f(N,null,E(e.group.budgets,(s,h)=>(p(),f(N,{key:s.id+h},[g(Z,{id:s.id,name:"budget-group",text:i,onDrop:G},null,8,["id"]),g(R,{color:"dimmed",icon:"close-circle",textual:"",onClick:T=>v(V)(s.id)},null,8,["onClick"]),r("span",{class:a(e.$style.header)},[g(Q,{"model-value":s.name,"onUpdate:modelValue":T=>v(C)(s.id,T)},null,8,["model-value","onUpdate:modelValue"])],2),(p(!0),f(N,null,E(s.values,(T,D)=>(p(),f("span",{key:s.id+D,class:a([e.$style.currencyCell,{[e.$style.even]:h%2,[e.$style.firstRow]:h===0,[e.$style.firstColumn]:D===0,[e.$style.currentMonth]:v(M)(D),[e.$style.tlc]:h===0&&D===0,[e.$style.trc]:h===0&&D===11,[e.$style.blc]:h===e.group.budgets.length-1&&D===0,[e.$style.brc]:h===e.group.budgets.length-1&&D===11}])},[g(Me,{"model-value":s.values[D],"onUpdate:modelValue":L=>v(w)(s.id,D,L)},null,8,["model-value","onUpdate:modelValue"])],2))),128)),g(F,{class:a(e.$style.meta),value:v(Y)(s.values)},null,8,["class","value"]),g(F,{class:a(e.$style.meta),value:v(z)(s.values)},null,8,["class","value"])],64))),128)),Fe,g(R,{icon:"plus",class:a(e.$style.addBudgetBtn),textual:"",color:"success",onClick:y[2]||(y[2]=s=>v(d)(e.group.id))},null,8,["class"]),Ee,g(F,{class:a([e.$style.meta,e.$style.bold]),value:l.value},null,8,["class","value"]),g(F,{class:a([e.$style.meta,e.$style.bold]),value:$.value},null,8,["class","value"])],64))}}),Re="ab",Se="bb",Le="cb",Ue="db",Ke="eb",Oe="fb",Xe="gb",Ye="hb",ze="ib",je="jb",Qe="kb",qe="lb",He="mb",Je="nb",We="ob",Ze={header:Re,meta:Se,bold:Le,top:Ue,start:Ke,end:Oe,currencyCell:Xe,firstRow:Ye,firstColumn:ze,currentMonth:je,even:Qe,tlc:qe,trc:He,blc:Je,brc:We},xe={$style:Ze},et=P(Pe,[["__cssModules",xe]]),tt=r("span",null,null,-1),st=r("span",null,null,-1),lt=r("span",null,null,-1),nt=r("span",null,null,-1),ot=r("span",null,null,-1),at=r("span",null,null,-1),ut=r("span",null,null,-1),rt=r("span",null,null,-1),ct=r("span",null,null,-1),dt=r("span",null,null,-1),it=A({__name:"BudgetGroups",props:{type:{}},setup(b){const u=b,{state:k,moveBudgetGroup:t,addBudgetGroup:m,getBudgetGroup:d,isCurrentMonth:C}=O(),{t:_}=K(),w=B(()=>k[u.type]),V=ie(),M=B(()=>{const l=new Array(12).fill(0);for(const{budgets:$}of w.value)for(const{values:i}of $)for(let G=0;G<i.length;G++)l[G]+=i[G];return l}),o=l=>{const $=l.source?d(l.source):void 0,i=l.target?d(l.target):void 0;if($)return i?l.type==="before"?_("budget.prepend",{from:$.name,to:i.name}):_("budget.append",{from:$.name,to:i.name}):_("budget.move",{from:$.name})},c=l=>{t(l.source,l.target,l.type==="after")};return(l,$)=>(p(),f("div",{class:a(l.$style.budgetGroups)},[tt,st,lt,(p(!0),f(N,null,E(v(V),(i,G)=>(p(),f("span",{key:i,class:a([l.$style.month,{[l.$style.current]:v(C)(G)}])},[r("span",null,S(i),1)],2))),128)),nt,ot,at,ut,r("span",{class:a(l.$style.sum)},S(v(_)("budget.totals")),3),(p(!0),f(N,null,E(M.value,(i,G)=>(p(),U(F,{key:G,value:i,class:a(l.$style.sum)},null,8,["value","class"]))),128)),rt,ct,(p(!0),f(N,null,E(w.value,i=>(p(),f(N,{key:i.id},[g(Z,{id:i.id,text:o,name:"budget-groups",onDrop:c},null,8,["id"]),g(et,{group:i},null,8,["group"])],64))),128)),dt,g(R,{class:a(l.$style.addGroupBtn),icon:"plus",text:v(_)("budget.addGroup"),onClick:$[0]||($[0]=i=>v(m)(l.type))},null,8,["class","text"])],2))}}),pt="s_",mt="t_",gt="u_",vt="v_",yt="w_",ft={budgetGroups:pt,sum:mt,month:gt,current:vt,addGroupBtn:yt},$t={$style:ft},bt=P(it,[["__cssModules",$t]]),_t=A({__name:"BudgetPane",props:{title:{},type:{}},setup(b){const u=b,{state:k}=O(),t=B(()=>ce(k[u.type])),m=B(()=>t.value.reduce((d,C)=>d+C,0));return(d,C)=>(p(),U(de,{amount:m.value,title:d.title},{header:j(()=>[g(pe,{class:a(d.$style.miniChart),values:t.value},null,8,["class","values"])]),default:j(()=>[g(bt,{type:d.type},null,8,["type"])]),_:1},8,["amount","title"]))}}),ht="r",Ct={miniChart:ht},Bt={$style:Ct},It=P(_t,[["__cssModules",Bt]]);export{It as B};
