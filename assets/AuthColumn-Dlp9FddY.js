import{_ as m}from"./BasicTable.vue_vue_type_script_setup_true_lang-C5hYP-KN.js";import"./TableImg.vue_vue_type_style_index_0_lang-DYrUgwcl.js";import{a as p}from"./componentMap-xQ68uHIf.js";import{u}from"./useTable-Cro5Z3-R.js";import{d as c}from"./table-vz0FT7NA.js";import{d as h,Z as n,_ as f,k as b,a9 as w,a8 as _,u as o,ab as x}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-BME4M3V0.js";import"./FormItem.vue_vue_type_script_lang-CU9FYwNP.js";import"./entry/index-BS_vH3S4-1710492679851.js";import"./antd-D1Pawy5U.js";import"./helper-HFtwS6mJ.js";import"./BasicForm.vue_vue_type_style_index_0_lang-rcXGZlVm.js";import"./index-CrGRHWhJ.js";import"./useWindowSizeFn-DFkqTy3L.js";import"./useForm-B5BTWHx4.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CRZvcQF4.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-skQdmOEv.js";import"./download-CU-9Oc2Q.js";import"./base64Conver-bBv-IO2K.js";import"./index-DtPUyJcu.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BsIwwtl_.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-D65ROKLH.js";import"./index-Cuf0UQK5.js";const I={class:"p-4"},X=h({__name:"AuthColumn",setup(C){const a=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",minWidth:200,auth:"test"},{title:"状态",dataIndex:"status",width:100},{title:"状态1",dataIndex:"status1",width:100},{title:"状态2",dataIndex:"status2",width:100},{title:"状态3",dataIndex:"status3",width:100},{title:"状态4",dataIndex:"status4",width:100},{title:"状态5",dataIndex:"status5",width:100},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=u({title:"TableAction组件及固定列示例",api:c,columns:a,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"},showSelectionBar:!0});function l(e){}function d(e){}function i(e){}return(e,k)=>(n(),f("div",I,[b(o(m),{onRegister:o(r)},{bodyCell:w(({column:s,record:t})=>[s.key==="action"?(n(),_(o(p),{key:0,actions:[{label:"编辑",onClick:l.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:d.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:i.bind(null,t)},ifShow:A=>t.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:i.bind(null,t)},ifShow:()=>t.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:i.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):x("",!0)]),_:1},8,["onRegister"])]))}});export{X as default};
