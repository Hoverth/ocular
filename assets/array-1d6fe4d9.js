const e=(a,r)=>a.map((s,t)=>s-r[t]),g=(...a)=>{var s;const r=new Array((s=a[0])==null?void 0:s.length).fill(0);return a.forEach(t=>t.forEach((n,o)=>r[o]+=n)),r},c=a=>a.reduce((r,s)=>r+s,0),d=a=>c(a)/a.length,f=a=>a.map((r,s)=>c(a.slice(0,s+1))),h=a=>Array.isArray(a)?a:[a];export{f as a,c as b,d as c,g as d,h as e,e as s};
