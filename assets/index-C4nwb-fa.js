var q=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var T=(n,e,s)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,x=(n,e)=>{for(var s in e||(e={}))U.call(e,s)&&T(n,s,e[s]);if(P)for(var s of P(e))Z.call(e,s)&&T(n,s,e[s]);return n},L=(n,e)=>H(n,J(e));var w=(n,e,s)=>new Promise((u,l)=>{var _=i=>{try{m(s.next(i))}catch(h){l(h)}},d=i=>{try{m(s.throw(i))}catch(h){l(h)}},m=i=>i.done?u(i.value):Promise.resolve(i.value).then(_,d);m((s=s.apply(n,e)).next())});import{p as $,S as K,w as X,a as Y}from"./entry/index-BS_vH3S4-1710492679851.js";import{_ as tt}from"./BasicForm.vue_vue_type_script_setup_true_lang-BME4M3V0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-rcXGZlVm.js";import"./componentMap-xQ68uHIf.js";import{u as et}from"./useForm-B5BTWHx4.js";import{f as g,d as R,c as z,o as at,a7 as B,Z as E,_ as ot,$ as C,k as a,u as t,a9 as o,ae as st,ac as nt,H as rt,G as S,a1 as it,a0 as lt,a8 as pt}from"./vue-COhTiP8A.js";import{af as I,R as O,b6 as ct,e as ut,T as D,ay as dt,b7 as mt,aQ as ft,aq as gt,b8 as _t,b9 as ht,a1 as vt}from"./antd-D1Pawy5U.js";import{P as bt}from"./index-Db-rmeQw.js";import{d as Ct}from"./table-vz0FT7NA.js";import"./FormItem.vue_vue_type_script_lang-CU9FYwNP.js";import"./helper-HFtwS6mJ.js";import"./index-CrGRHWhJ.js";import"./useWindowSizeFn-DFkqTy3L.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CRZvcQF4.js";import"./uuid-D0SLUWHI.js";import"./useSortable-skQdmOEv.js";import"./download-CU-9Oc2Q.js";import"./base64Conver-bBv-IO2K.js";import"./index-DtPUyJcu.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BsIwwtl_.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-D65ROKLH.js";import"./index-Cuf0UQK5.js";import"./useContentViewHeight-DszaP9Xd.js";import"./onMountedOrActivated-GpUdBAv_.js";const b=g(12),yt=(n=6,e=12)=>({min:n,max:e,marks:(()=>{const u={};for(let l=n;l<e+1;l++)u[l]={style:{color:"#fff"},label:l};return u})(),step:1}),wt={class:"p-2"},St={class:"p-4 mb-2 bg-white"},Mt={class:"p-2 bg-white"},xt={class:"flex justify-end space-x-2"},kt=C("div",{class:"w-50"},"每行显示数量",-1),Pt=R({__name:"CardList",props:{params:$.object.def({}),api:$.func},emits:["getMethod","delete"],setup(n,{emit:e}){const s=I.Item,u=O.Meta,l=ct.Paragraph,_=z(()=>yt(4)),d=n,m=e,i=g([]),h=z(()=>`h-${120-b.value*6}`),[F,{validate:N}]=et({schemas:[{field:"type",component:"Input",label:"类型"}],labelWidth:80,baseColProps:{span:6},actionColOptions:{span:24},autoSubmitOnEnter:!0,submitFunc:V});function V(){return w(this,null,function*(){const r=yield N();yield f(r)})}function j(r){v.value=r*4,f()}at(()=>{f(),m("getMethod",f)});function f(){return w(this,arguments,function*(r={}){const{api:c,params:y}=d;if(c&&ut(c)){const p=yield c(x(L(x({},y),{page:M.value,pageSize:v.value}),r));i.value=p.items,k.value=p.total}})}const M=g(1),v=g(36),k=g(0),A=g({showSizeChanger:!1,showQuickJumper:!0,pageSize:v,current:M,total:k,showTotal:r=>`总 ${r} 条`,onChange:G,onShowSizeChange:Q});function G(r,c){M.value=r,v.value=c,f()}function Q(r,c){v.value=c,f()}function W(r){return w(this,null,function*(){m("delete",r)})}return(r,c)=>{const y=B("a-button");return E(),ot("div",wt,[C("div",St,[a(t(tt),{onRegister:t(F)},null,8,["onRegister"])]),C("div",Mt,[a(t(I),{grid:{gutter:5,xs:1,sm:2,md:4,lg:4,xl:6,xxl:t(b)},"data-source":i.value,pagination:A.value},{header:o(()=>[C("div",xt,[st(r.$slots,"header"),a(t(D),null,{title:o(()=>[kt,a(t(dt),nt({id:"slider"},_.value,{value:t(b),"onUpdate:value":c[0]||(c[0]=p=>rt(b)?b.value=p:null),onChange:j}),null,16,["value"])]),default:o(()=>[a(y,null,{default:o(()=>[a(t(mt))]),_:1})]),_:1}),a(t(D),{onClick:f},{title:o(()=>[S("刷新")]),default:o(()=>[a(y,null,{default:o(()=>[a(t(ft))]),_:1})]),_:1})])]),renderItem:o(({item:p})=>[a(t(s),null,{default:o(()=>[a(t(O),null,{title:o(()=>[]),cover:o(()=>[C("div",{class:it(h.value)},[a(t(gt),{src:p.imgs[0]},null,8,["src"])],2)]),actions:o(()=>[a(t(_t)),a(t(K),{trigger:["hover"],dropMenuList:[{text:"删除",event:"1",popConfirm:{title:"是否确认删除",confirm:W.bind(null,p.id)}}],popconfirm:""},{default:o(()=>[a(t(ht))]),_:2},1032,["dropMenuList"])]),default:o(()=>[a(t(u),null,{title:o(()=>[a(t(l),{content:p.name,ellipsis:{tooltip:p.address}},null,8,["content","ellipsis"])]),avatar:o(()=>[a(t(vt),{src:p.avatar},null,8,["src"])]),description:o(()=>[S(lt(p.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:3},8,["grid","data-source","pagination"])])])}}}),Tt=X(Pt),ae=R({__name:"index",setup(n){const{notification:e}=Y(),s={};let u=()=>{};function l(d){u=d}function _(d){e.success({message:`成功删除${d}`}),u()}return(d,m)=>{const i=B("a-button");return E(),pt(t(bt),{title:"卡片列表示例",content:"基础封装"},{default:o(()=>[a(t(Tt),{params:s,api:t(Ct),onGetMethod:l,onDelete:_},{header:o(()=>[a(i,{type:"primary",color:"error"},{default:o(()=>[S(" 按钮1 ")]),_:1}),a(i,{type:"primary",color:"success"},{default:o(()=>[S(" 按钮2 ")]),_:1})]),_:1},8,["api"])]),_:1})}}});export{ae as default};
