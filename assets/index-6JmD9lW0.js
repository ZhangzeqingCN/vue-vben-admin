import{p as R,f as k,c as z}from"./entry/index-BS_vH3S4-1710492679851.js";import{u as C}from"./useContentViewHeight-DszaP9Xd.js";import{G as E}from"./antd-D1Pawy5U.js";import{d as W,f as o,c as $,u as s,o as b,b as B,Z as M,_ as F,k as N,a9 as V,$ as D,a1 as p,ag as g}from"./vue-COhTiP8A.js";import{u as G}from"./useWindowSizeFn-DFkqTy3L.js";const I=["src"],P=W({__name:"index",props:{frameSrc:R.string.def("")},emits:["message"],setup(h,{expose:_,emit:v}){const w=v,a=o(!0),x=o(50),r=o(window.innerHeight),n=o(),{headerHeightRef:y}=C(),{prefixCls:c}=k("iframe-page");G(l,{wait:150,immediate:!0});const m=$(()=>({height:`${s(r)}px`}));function l(){const e=s(n);if(!e)return;const t=y.value;x.value=t,r.value=window.innerHeight-t;const i=document.documentElement.clientHeight-t;e.style.height=`${i}px`}function H(){a.value=!1,l()}const f=e=>{w("message",e.data)},S=(e,t,i)=>{var d;const u=s(n);u&&((d=u.contentWindow)==null||d.postMessage(e,t,i))},L=()=>{var t;a.value=!0;const e=n.value;e&&((t=e.contentWindow)==null||t.location.reload(),a.value=!1)};return b(()=>{window.addEventListener("message",f)}),B(()=>{window.removeEventListener("message",f)}),_({postMessage:S,reload:L}),(e,t)=>(M(),F("div",{class:p(s(c)),style:g(m.value)},[N(s(E),{spinning:a.value,size:"large",style:g(m.value)},{default:V(()=>[D("iframe",{src:h.frameSrc,class:p(`${s(c)}__main`),ref_key:"frameRef",ref:n,onLoad:H},null,42,I)]),_:1},8,["spinning","style"])],6))}}),A=z(P,[["__scopeId","data-v-bb6a7069"]]);export{A as default};
