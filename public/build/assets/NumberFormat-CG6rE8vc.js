import{P as k}from"./PrettyButton-DJ97II5T.js";import{P as v}from"./PrettyLink-DUWQkaT1.js";import{E as x}from"./Errors-DkF-M9C7.js";import{_ as M}from"./Help-D0DKBJOE.js";import{H as l,h as n,a as t,t as i,b as d,c as w,j as u,l as F,F as C,k as N,n as p,o as a,x as S,bP as E}from"./app-BmMnv7Hf.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BX-obcj7.js";const P={components:{PrettyButton:k,PrettyLink:v,Errors:x,Help:M},props:{data:{type:Object,default:null}},data(){return{loadingState:"",editMode:!1,localNumberFormat:"",form:{numberFormat:"",errors:[]}}},computed:{currentFormat(){let e=_.findIndex(this.data.numbers,r=>r.value===this.localNumberFormat);return e>=0?this.data.numbers[e].format:""}},mounted(){this.localNumberFormat=this.data.number_format,this.form.numberFormat=this.data.number_format},methods:{enableEditMode(){this.editMode=!0},submit(){this.loadingState="loading",axios.post(this.data.url.store,this.form).then(()=>{this.flash(this.$t("Changes saved"),"success"),this.localNumberFormat=this.form.numberFormat,this.editMode=!1,this.loadingState=null}).catch(e=>{this.loadingState=null,this.form.errors=e.response.data})}}},V={class:"mb-16"},j={class:"mb-3 mt-8 items-center justify-between sm:mt-0 sm:flex"},H={class:"mb-4 flex font-semibold sm:mb-0"},D={class:"me-2"},I={key:0,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},L={class:"px-5 py-2"},U={class:"mb-2 block"},$={class:"mb-2 block rounded bg-slate-100 px-5 py-2 text-sm dark:bg-slate-900"},z={class:"border-b border-gray-200 px-5 py-2 dark:border-gray-700"},O=["id","onUpdate:modelValue","value"],R=["for"],q={class:"flex justify-between p-5"};function A(e,r,b,G,s,m){const f=l("help"),c=l("pretty-button"),h=l("errors"),y=l("pretty-link");return a(),n("div",V,[t("div",j,[t("h3",H,[r[2]||(r[2]=t("span",{class:"me-1"}," 💵 ",-1)),t("span",D,i(e.$t("How should we display numerical values")),1),d(f,{url:e.$page.props.help_links.settings_preferences_numerical_format,top:"5px"},null,8,["url"])]),s.editMode?u("",!0):(a(),w(c,{key:0,text:e.$t("Edit"),onClick:m.enableEditMode},null,8,["text","onClick"]))]),s.editMode?u("",!0):(a(),n("div",I,[t("p",L,[t("span",U,i(e.$t("Current way of displaying numbers:")),1),t("span",$,i(m.currentFormat),1)])])),s.editMode?(a(),n("form",{key:1,class:"mb-6 rounded-lg border border-gray-200 bg-gray-50 bg-white dark:border-gray-700 dark:bg-gray-900",onSubmit:r[1]||(r[1]=F(o=>m.submit(),["prevent"]))},[t("div",z,[d(h,{errors:s.form.errors},null,8,["errors"]),(a(!0),n(C,null,N(b.data.numbers,o=>(a(),n("div",{key:o.id,class:"mb-2 flex items-center"},[S(t("input",{id:"input"+o.id,"onUpdate:modelValue":g=>s.form.numberFormat=g,value:o.value,name:"date-format",type:"radio",class:"h-4 w-4 border-gray-300 text-sky-500 dark:border-gray-700"},null,8,O),[[E,s.form.numberFormat]]),t("label",{for:"input"+o.id,class:"ms-3 block cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300"},i(o.format),9,R)]))),128))]),t("div",q,[d(y,{text:e.$t("Cancel"),class:p("me-3"),onClick:r[0]||(r[0]=o=>s.editMode=!1)},null,8,["text"]),d(c,{text:e.$t("Save"),state:s.loadingState,icon:"check",class:p("save")},null,8,["text","state"])])],32)):u("",!0)])}const Z=B(P,[["render",A],["__scopeId","data-v-0e10499a"]]);export{Z as default};
