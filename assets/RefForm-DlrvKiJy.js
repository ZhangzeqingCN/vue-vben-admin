var b=(d,u,i)=>new Promise((f,p)=>{var l=e=>{try{t(i.next(e))}catch(o){p(o)}},r=e=>{try{t(i.throw(e))}catch(o){p(o)}},t=e=>e.done?f(e.value):Promise.resolve(e.value).then(l,r);t((i=i.apply(d,u)).next())});import{_ as v}from"./BasicForm.vue_vue_type_script_setup_true_lang-BME4M3V0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-rcXGZlVm.js";import"./componentMap-xQ68uHIf.js";import{C,a as c}from"./entry/index-BS_vH3S4-1710492679851.js";import{P as $}from"./index-Db-rmeQw.js";import{d as P,f as B,a7 as w,Z as y,a8 as S,a9 as s,$ as k,k as n,G as a,u as m,y as g}from"./vue-COhTiP8A.js";import"./FormItem.vue_vue_type_script_lang-CU9FYwNP.js";import"./helper-HFtwS6mJ.js";import"./antd-D1Pawy5U.js";import"./index-CrGRHWhJ.js";import"./useWindowSizeFn-DFkqTy3L.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CRZvcQF4.js";import"./uuid-D0SLUWHI.js";import"./useSortable-skQdmOEv.js";import"./download-CU-9Oc2Q.js";import"./base64Conver-bBv-IO2K.js";import"./index-DtPUyJcu.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BsIwwtl_.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-D65ROKLH.js";import"./index-Cuf0UQK5.js";import"./useContentViewHeight-DszaP9Xd.js";import"./onMountedOrActivated-GpUdBAv_.js";const x={class:"mb-4"},R={class:"mb-4"},h=P({__name:"RefForm",setup(d){const u=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:r=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],i=B(null),{createMessage:f}=c();function p(r){f.success("click search,values:"+JSON.stringify(r))}function l(r){return b(this,null,function*(){const t=m(i);t&&(yield g(),yield t.setProps(r))})}return(r,t)=>{const e=w("a-button");return y(),S(m($),{title:"Ref操作示例"},{default:s(()=>[k("div",x,[n(e,{onClick:t[0]||(t[0]=o=>l({labelWidth:150})),class:"mr-2"},{default:s(()=>[a(" 更改labelWidth ")]),_:1}),n(e,{onClick:t[1]||(t[1]=o=>l({labelWidth:120})),class:"mr-2"},{default:s(()=>[a(" 还原labelWidth ")]),_:1}),n(e,{onClick:t[2]||(t[2]=o=>l({size:"large"})),class:"mr-2"},{default:s(()=>[a(" 更改Size ")]),_:1}),n(e,{onClick:t[3]||(t[3]=o=>l({size:"default"})),class:"mr-2"},{default:s(()=>[a(" 还原Size ")]),_:1}),n(e,{onClick:t[4]||(t[4]=o=>l({disabled:!0})),class:"mr-2"},{default:s(()=>[a(" 禁用表单 ")]),_:1}),n(e,{onClick:t[5]||(t[5]=o=>l({disabled:!1})),class:"mr-2"},{default:s(()=>[a(" 解除禁用 ")]),_:1}),n(e,{onClick:t[6]||(t[6]=o=>l({readonly:!0})),class:"mr-2"},{default:s(()=>[a(" 只读表单 ")]),_:1}),n(e,{onClick:t[7]||(t[7]=o=>l({readonly:!1})),class:"mr-2"},{default:s(()=>[a(" 解除只读 ")]),_:1}),n(e,{onClick:t[8]||(t[8]=o=>l({compact:!0})),class:"mr-2"},{default:s(()=>[a(" 紧凑表单 ")]),_:1}),n(e,{onClick:t[9]||(t[9]=o=>l({compact:!1})),class:"mr-2"},{default:s(()=>[a(" 还原正常间距 ")]),_:1}),n(e,{onClick:t[10]||(t[10]=o=>l({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[a(" 操作按钮位置 ")]),_:1})]),k("div",R,[n(e,{onClick:t[11]||(t[11]=o=>l({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[a(" 隐藏操作按钮 ")]),_:1}),n(e,{onClick:t[12]||(t[12]=o=>l({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[a(" 显示操作按钮 ")]),_:1}),n(e,{onClick:t[13]||(t[13]=o=>l({showResetButton:!1})),class:"mr-2"},{default:s(()=>[a(" 隐藏重置按钮 ")]),_:1}),n(e,{onClick:t[14]||(t[14]=o=>l({showResetButton:!0})),class:"mr-2"},{default:s(()=>[a(" 显示重置按钮 ")]),_:1}),n(e,{onClick:t[15]||(t[15]=o=>l({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[a(" 隐藏查询按钮 ")]),_:1}),n(e,{onClick:t[16]||(t[16]=o=>l({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[a(" 显示查询按钮 ")]),_:1}),n(e,{onClick:t[17]||(t[17]=o=>l({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:s(()=>[a(" 修改重置按钮 ")]),_:1}),n(e,{onClick:t[18]||(t[18]=o=>l({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[a(" 修改查询按钮 ")]),_:1})]),n(m(C),{title:"使用ref调用表单内部函数示例"},{default:s(()=>[n(m(v),{schemas:u,ref_key:"formElRef",ref:i,labelWidth:100,onSubmit:p,actionColOptions:{span:24}},null,512)]),_:1})]),_:1})}}});export{h as default};
