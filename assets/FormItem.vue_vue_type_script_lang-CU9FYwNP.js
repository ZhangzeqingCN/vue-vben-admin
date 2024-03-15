var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var z=(e,u,p)=>u in e?Z(e,u,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[u]=p,f=(e,u)=>{for(var p in u||(u={}))oe.call(u,p)&&z(e,p,u[p]);if(B)for(var p of B(u))se.call(u,p)&&z(e,p,u[p]);return e},H=(e,u)=>ee(e,te(u));import{c as O,u as o,d as ne,I as le,m as ae,k as g,i as re,ac as J,A as ce,G as ie}from"./vue-COhTiP8A.js";import{c as $}from"./componentMap-xQ68uHIf.js";import{r as E,h as de,V as fe,W as ue}from"./entry/index-BS_vH3S4-1710492679851.js";import{i as me,N as K,c as G,s as he}from"./helper-HFtwS6mJ.js";import{aa as be,e as y,ah as F,V as U,a4 as pe,a2 as Q,f as ge,r as ye,w as Ce}from"./antd-D1Pawy5U.js";function Pe(e){return"slot"in e}function xe(e){return!Pe(e)}function we(e,u){return O(()=>{const p=o(e),{labelCol:L={},wrapperCol:j={}}=p.itemProps||{},{labelWidth:q,disabledLabelWidth:h}=p,{labelWidth:C,labelCol:S,wrapperCol:M,layout:N}=o(u);if(!C&&!q&&!S||h)return L.style={textAlign:"left"},{labelCol:L,wrapperCol:j};let x=q||C;const _=f(f({},S),L),D=f(f({},M),j);return x&&(x=be(x)?`${x}px`:x),{labelCol:f({style:{width:x}},_),wrapperCol:f({style:{width:N==="vertical"?"100%":`calc(100% - ${x})`}},D)}})}function V(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!re(e)}const je=ne({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object},isAdvanced:{type:Boolean}},setup(e,{slots:u}){const{t:p}=de(),{schema:L,formProps:j}=le(e);L.value.component==="CropperAvatar"&&typeof j.value.size=="string"&&(j.value.size=void 0);const q=we(L,j),h=O(()=>{const{allDefaultValues:s,formModel:t,schema:r}=e,{mergeDynamicData:l}=e.formProps;return{field:r.field,model:t,values:f(f(f({},l),s),t),schema:r}}),C=O(()=>{var c;const{schema:s,tableAction:t,formModel:r,formActionType:l}=e;let{componentProps:n={}}=s;return y(n)&&(n=(c=n({schema:s,tableAction:t,formModel:r,formActionType:l}))!=null?c:{}),me(s.component)&&(n=Object.assign({type:"horizontal"},{orientation:"left",plain:!0},n)),n}),S=O(()=>{const{disabled:s}=e.formProps,{dynamicDisabled:t}=e.schema,{disabled:r=!1}=o(C);let l=!!s||r;return F(t)&&(l=t),y(t)&&(l=t(o(h))),l}),M=O(()=>{const{readonly:s}=e.formProps,{dynamicReadonly:t}=e.schema,{readonly:r=!1}=o(C);let l=s||r;return F(t)&&(l=t),y(t)&&(l=t(o(h))),l});function N(){const{show:s,ifShow:t}=e.schema,{showAdvancedButton:r}=e.formProps,l=r&&F(e.isAdvanced)?e.isAdvanced:!0;let n=!0,c=!0;return F(s)&&(n=s),F(t)&&(c=t),y(s)&&(n=s(o(h))),y(t)&&(c=t(o(h))),n=n&&l,{isShow:n,isIfShow:c}}function x(){var k;const{rules:s=[],component:t,rulesMessageJoinLabel:r,label:l,dynamicRules:n,required:c}=e.schema;if(y(n))return n(o(h));let a=ge(s);const{rulesMessageJoinLabel:A}=e.formProps,w=(Reflect.has(e.schema,"rulesMessageJoinLabel")?r:A)?y(l)?"":l:"",m=t?G(t)+w:w;function b(d,i){const P=d.message||m;return i===void 0||ye(i)||Array.isArray(i)&&i.length===0||typeof i=="string"&&i.trim()===""||typeof i=="object"&&Reflect.has(i,"checked")&&Reflect.has(i,"halfChecked")&&Array.isArray(i.checked)&&Array.isArray(i.halfChecked)&&i.checked.length===0&&i.halfChecked.length===0?Promise.reject(P):Promise.resolve()}const v=y(c)?c(o(h)):c;if(v)if(!a||a.length===0){const d=K.includes(t||"Input")?"blur":"change";a=[{required:v,validator:b,trigger:d}]}else a.findIndex(i=>Reflect.has(i,"required"))===-1&&a.push({required:v,validator:b});const T=a.findIndex(d=>Reflect.has(d,"required")&&!Reflect.has(d,"validator"));if(T!==-1){const d=a[T],{isShow:i}=N();if(i||(d.required=!1),t){d.message=d.message||m,(t.includes("Input")||t.includes("Textarea"))&&(d.whitespace=!0);const P=(k=o(C))==null?void 0:k.valueFormat;he(d,t,P)}}const I=a.findIndex(d=>d.max);return I!==-1&&!a[I].validator&&(a[I].message=a[I].message||p("component.form.maxTip",[a[I].max])),a}function _(){var d;if(!xe(e.schema))return null;const{renderComponentContent:s,component:t,field:r,changeEvent:l="change",valueField:n}=e.schema,c=t&&["Switch","Checkbox"].includes(t),a=`on${Ce(l)}`,A={[a]:(...i)=>{const[P]=i,W=P?P.target:null,Y=W?c?W.checked:W.value:P;e.setFormModel(r,Y,e.schema),b[a]&&b[a](...i)}},R=$.get(t),{autoSetPlaceHolder:w,size:m}=e.formProps,b=H(f({allowClear:!0,size:m},o(C)),{disabled:o(S),readonly:o(M)});!b.disabled&&w&&t!=="RangePicker"&&t&&(b.placeholder=((d=o(C))==null?void 0:d.placeholder)||G(t)),b.codeField=r,b.formValues=o(h);const T={[n||(c?"checked":"value")]:e.formModel[r]},I=f(f(f({},b),A),T);if(!s)return g(R,I,null);const k=y(s)?f({},s(o(h),{disabled:o(S),readonly:o(M)})):{default:()=>s};return g(R,I,V(k)?k:{default:()=>[k]})}function D(){const{label:s,helpMessage:t,helpComponentProps:r,subLabel:l}=e.schema,n=y(s)?s(o(h)):s,c=l?g("span",null,[n,ie(" "),g("span",{class:"text-secondary"},[l])]):n,a=y(t)?t(o(h)):t;return!a||Array.isArray(a)&&a.length===0?c:g("span",null,[c,g(ue,J({placement:"top",class:"mx-1",text:a},r),null)])}function X(){const{itemProps:s,slot:t,render:r,field:l,suffix:n,component:c}=e.schema,{labelCol:a,wrapperCol:A}=o(q),{colon:R}=e.formProps,w={disabled:o(S),readonly:o(M)};if(c==="Divider"){let m;return g(U,{span:24},{default:()=>[g(pe,o(C),V(m=D())?m:{default:()=>[m]})]})}else if(c==="BasicTitle"){let m;return g(Q.Item,{labelCol:a,wrapperCol:A,name:l,class:{"suffix-item":!!n}},{default:()=>[g(fe,o(C),V(m=D())?m:{default:()=>[m]})]})}else{const m=()=>t?E(u,t,o(h),w):r?r(o(h),w):_(),b=!!n,v=y(n)?n(o(h)):n;return c&&K.includes(c)&&e.schema&&(e.schema.itemProps=f({autoLink:!1},e.schema.itemProps)),g(Q.Item,J({name:l,colon:R,class:{"suffix-item":b}},s,{label:D(),rules:x(),labelCol:a,wrapperCol:A}),{default:()=>[g("div",{style:"display:flex"},[g("div",{style:"flex:1;"},[m()]),b&&g("span",{class:"suffix"},[v])])]})}}return()=>{let s;const{colProps:t={},colSlot:r,renderColContent:l,component:n,slot:c}=e.schema;if(!(n&&$.has(n)||c))return null;const{baseColProps:a={}}=e.formProps,A=f(f({},a),t),{isIfShow:R,isShow:w}=N(),m=o(h),b={disabled:o(S),readonly:o(M)};return R&&ae(g(U,A,V(s=r?E(u,r,m,b):l?l(m,b):X())?s:{default:()=>[s]}),[[ce,w]])}}});export{je as _};
