import{_ as b}from"./BasicTable.vue_vue_type_script_setup_true_lang-C5hYP-KN.js";import"./TableImg.vue_vue_type_style_index_0_lang-DYrUgwcl.js";import"./componentMap-xQ68uHIf.js";import{getBasicData as h,getBasicColumns as k}from"./tableData-ojTekssr.js";import{d as B,f as t,a7 as S,Z as z,_ as x,k as e,a9 as o,G as l,a0 as s,u as m}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-BME4M3V0.js";import"./FormItem.vue_vue_type_script_lang-CU9FYwNP.js";import"./entry/index-BS_vH3S4-1710492679851.js";import"./antd-D1Pawy5U.js";import"./helper-HFtwS6mJ.js";import"./BasicForm.vue_vue_type_style_index_0_lang-rcXGZlVm.js";import"./index-CrGRHWhJ.js";import"./useWindowSizeFn-DFkqTy3L.js";import"./useForm-B5BTWHx4.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CRZvcQF4.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-skQdmOEv.js";import"./download-CU-9Oc2Q.js";import"./base64Conver-bBv-IO2K.js";import"./index-DtPUyJcu.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BsIwwtl_.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-D65ROKLH.js";import"./index-Cuf0UQK5.js";import"./select-C-JQ1hZW.js";const R={class:"p-4"},it=B({__name:"Basic",setup(T){const a=t(!1),p=t(!1),i=t(!0),r=t(!0),u=t(!1),c=k(),d=h();function g(){a.value=!a.value}function f(){i.value=!i.value}function _(){p.value=!0,setTimeout(()=>{p.value=!1,u.value={pageSize:20}},3e3)}function v(){r.value=!r.value}function C(y){}return(y,w)=>{const n=S("a-button");return z(),x("div",R,[e(m(b),{title:"基础示例",titleHelpMessage:"温馨提醒",columns:m(c),dataSource:m(d),canResize:a.value,loading:p.value,striped:i.value,bordered:r.value,showTableSetting:"",pagination:u.value,onColumnsChange:C},{toolbar:o(()=>[e(n,{type:"primary",onClick:g},{default:o(()=>[l(s(a.value?"取消自适应":"自适应高度"),1)]),_:1}),e(n,{type:"primary",onClick:v},{default:o(()=>[l(s(r.value?"隐藏边框":"显示边框"),1)]),_:1}),e(n,{type:"primary",onClick:_},{default:o(()=>[l(" 开启loading ")]),_:1}),e(n,{type:"primary",onClick:f},{default:o(()=>[l(s(i.value?"隐藏斑马纹":"显示斑马纹"),1)]),_:1})]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])}}});export{it as default};
