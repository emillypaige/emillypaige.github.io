import V from"./Icon.488f96f3.js";import{u as I,o as d,c as L,l as y,H as x,t as $,b as Q,p as q,N as P,a as f}from"./use-resolve-button-type.5e4ef81f.js";import{a as g,x as p,H as C,h as D,y as E,E as j,I as J,J as T,o as S,c as h,j as _,e as b,k as B,u as k,p as O}from"./entry.46a4423d.js";import"./config.5c77e8fd.js";import"./Icon.vue.6729d4f8.js";import"./_plugin-vue_export-helper.c27b6911.js";var R=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(R||{});let z=Symbol("DisclosureContext");function w(t){let o=T(z,null);if(o===null){let u=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,w),u}return o}let H=Symbol("DisclosurePanelContext");function U(){return T(H,null)}let X=g({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:o,attrs:u}){let s=p(t.defaultOpen?0:1),e=p(null),i=p(null),n={buttonId:p(null),panelId:p(null),disclosureState:s,panel:e,button:i,toggleDisclosure(){s.value=I(s.value,{[0]:1,[1]:0})},closeDisclosure(){s.value!==1&&(s.value=1)},close(l){n.closeDisclosure();let r=(()=>l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?d(l):d(n.button):d(n.button))();r==null||r.focus()}};return C(z,n),L(D(()=>I(s.value,{[0]:y.Open,[1]:y.Closed}))),()=>{let{defaultOpen:l,...r}=t,c={open:s.value===0,close:n.close};return x({theirProps:r,ourProps:{},slot:c,slots:o,attrs:u,name:"Disclosure"})}}}),A=g({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${$()}`}},setup(t,{attrs:o,slots:u,expose:s}){let e=w("DisclosureButton");E(()=>{e.buttonId.value=t.id}),j(()=>{e.buttonId.value=null});let i=U(),n=D(()=>i===null?!1:i.value===e.panelId.value),l=p(null);s({el:l,$el:l}),n.value||J(()=>{e.button.value=l.value});let r=Q(D(()=>({as:t.as,type:o.type})),l);function c(){var a;t.disabled||(n.value?(e.toggleDisclosure(),(a=d(e.button))==null||a.focus()):e.toggleDisclosure())}function m(a){var v;if(!t.disabled)if(n.value)switch(a.key){case f.Space:case f.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure(),(v=d(e.button))==null||v.focus();break}else switch(a.key){case f.Space:case f.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure();break}}function K(a){switch(a.key){case f.Space:a.preventDefault();break}}return()=>{let a={open:e.disclosureState.value===0},{id:v,...M}=t,N=n.value?{ref:l,type:r.value,onClick:c,onKeydown:m}:{id:v,ref:l,type:r.value,"aria-expanded":t.disabled?void 0:e.disclosureState.value===0,"aria-controls":d(e.panel)?e.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:c,onKeydown:m,onKeyup:K};return x({ourProps:N,theirProps:M,slot:a,attrs:o,slots:u,name:"DisclosureButton"})}}}),F=g({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${$()}`}},setup(t,{attrs:o,slots:u,expose:s}){let e=w("DisclosurePanel");E(()=>{e.panelId.value=t.id}),j(()=>{e.panelId.value=null}),s({el:e.panel,$el:e.panel}),C(H,e.panelId);let i=q(),n=D(()=>i!==null?(i.value&y.Open)===y.Open:e.disclosureState.value===0);return()=>{let l={open:e.disclosureState.value===0,close:e.close},{id:r,...c}=t,m={id:r,ref:e.panel};return x({ourProps:m,theirProps:c,slot:l,attrs:o,slots:u,features:P.RenderStrategy|P.Static,visible:n.value,name:"DisclosurePanel"})}}});const G={class:"text-base font-semibold leading-7"},W={class:"ml-6 flex h-7 items-center"},Y={class:"text-base leading-7 text-zinc-600 dark:text-zinc-500"},oe=g({__name:"QaItem",setup(t){return(o,u)=>{const s=V;return S(),h(k(X),{as:"div",class:"pt-6"},{default:_(({open:e})=>[b("dt",null,[B(k(A),{class:"flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-200"},{default:_(()=>[b("span",G,[O(o.$slots,"question")]),b("span",W,[e?(S(),h(s,{key:1,name:"heroicons:minus-small",class:"h-6 w-6"})):(S(),h(s,{key:0,name:"heroicons:plus-small",class:"h-6 w-6"}))])]),_:2},1024)]),B(k(F),{as:"dd",class:"mt-2 pr-12"},{default:_(()=>[b("p",Y,[O(o.$slots,"answer")])]),_:3})]),_:3})}}});export{oe as default};