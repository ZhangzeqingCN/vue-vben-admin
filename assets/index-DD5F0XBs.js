var B=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var g=(t,e,a)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,x=(t,e)=>{for(var a in e||(e={}))E.call(e,a)&&g(t,a,e[a]);if(y)for(var a of y(e))F.call(e,a)&&g(t,a,e[a]);return t};import{z as S,T as k,w as z}from"./entry/index-BS_vH3S4-1710492679851.js";import{aa as $}from"./antd-D1Pawy5U.js";import{d as D,f as h,c as I,u as M,h as P,w as Z,o as j,Z as q,_ as A,a0 as G,ag as H}from"./vue-COhTiP8A.js";const J=D({name:"CountTo",__name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(t,{expose:e,emit:a}){const n=t,u=a,r=h(n.startVal),V=h(!1);let d=S(r);const b=I(()=>v(M(d)));P(()=>{r.value=n.startVal}),Z([()=>n.startVal,()=>n.endVal],()=>{n.autoplay&&c()}),j(()=>{n.autoplay&&c()});function c(){f(),r.value=n.endVal}function N(){r.value=n.startVal,f()}function f(){d=S(r,x({disabled:V,duration:n.duration,onFinished:()=>u("onFinished"),onStarted:()=>u("onStarted")},n.useEasing?{transition:k[n.transition]}:{}))}function v(o){if(!o&&o!==0)return"";const{decimals:p,decimal:w,separator:i,suffix:T,prefix:C}=n;o=Number(o).toFixed(p),o+="";const l=o.split(".");let s=l[0];const _=l.length>1?w+l[1]:"",m=/(\d+)(\d{3})/;if(i&&!$(i))for(;m.test(s);)s=s.replace(m,"$1"+i+"$2");return C+s+_+T}return e({reset:N}),(o,p)=>(q(),A("span",{style:H({color:t.color})},G(b.value),5))}}),R=z(J);export{R as C};
