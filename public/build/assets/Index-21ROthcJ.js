import{i as g,H as o,c as w,w as c,o as k,a as t,t as s,b as r,d as x,l as v,n as i}from"./app-BmMnv7Hf.js";import{L as $}from"./Layout-Csq83W0y.js";import{P as C}from"./PrettyLink-DUWQkaT1.js";import{P as S}from"./PrettyButton-DJ97II5T.js";import{T as j}from"./TextInput-DPfNN3hz.js";import{E as I}from"./Errors-DkF-M9C7.js";import{_ as L}from"./Help-D0DKBJOE.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BX-obcj7.js";const B={components:{InertiaLink:g,Layout:$,PrettyLink:C,PrettyButton:S,TextInput:j,Errors:I,Help:L},props:{layoutData:{type:Object,default:null},data:{type:Object,default:null}},data(){return{loadingState:"",form:{password:"",errors:[]}}},methods:{destroy(){this.loadingState="loading",axios.put(this.data.url.destroy,this.form).then(e=>{this.$inertia.visit(e.data.data)}).catch(e=>{this.loadingState=null,this.form.errors=e.response.data})}}},P={class:"bg-white dark:bg-gray-900 sm:border-b"},T={class:"max-w-8xl mx-auto hidden px-4 py-2 sm:px-6 md:block"},D={class:"flex items-baseline justify-between space-x-6"},M={class:"text-sm"},N={class:"me-2 inline text-gray-600 dark:text-gray-400"},O={class:"me-2 inline"},E={class:"inline"},H={class:"relative sm:mt-24"},Y={class:"mx-auto max-w-lg px-2 py-2 sm:px-6 sm:py-6 lg:px-8"},q={class:"section-head border-b border-gray-200 bg-blue-50 p-5 dark:border-gray-700 dark:bg-blue-900"},z={class:"mb-4 flex justify-center text-2xl font-medium"},A={class:"mb-2"},G={class:"mb-2"},U={class:"list-disc ps-6"},F={class:"border-b border-gray-200 p-5 dark:border-gray-700"},J={class:"flex justify-between p-5"};function K(e,a,n,Q,l,u){const m=o("InertiaLink"),p=o("help"),_=o("errors"),b=o("text-input"),f=o("pretty-link"),h=o("pretty-button"),y=o("layout");return k(),w(y,{"layout-data":n.layoutData},{default:c(()=>[t("nav",P,[t("div",T,[t("div",D,[t("ul",M,[t("li",N,s(e.$t("You are here:")),1),t("li",O,[r(m,{href:n.data.url.settings,class:"text-blue-500 hover:underline"},{default:c(()=>[x(s(e.$t("Settings")),1)]),_:1},8,["href"])]),a[2]||(a[2]=t("li",{class:"relative me-2 inline"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),t("li",E,s(e.$t("Cancel account")),1)])])])]),t("main",H,[t("div",Y,[t("form",{class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",onSubmit:a[1]||(a[1]=v(d=>u.destroy(),["prevent"]))},[t("div",q,[t("h1",z,[t("span",null,s(e.$t("Cancel your account")),1),r(p,{url:e.$page.props.help_links.settings_account_deletion,top:"9px",class:i("ms-3")},null,8,["url"])]),t("p",A,s(e.$t("Thanks for giving Monica a try.")),1),t("p",G,s(e.$t("Once you cancel,")),1),t("ul",U,[t("li",null,s(e.$t("Your account will be closed immediately,")),1),t("li",null,s(e.$t("All users and vaults will be deleted immediately,")),1),t("li",null,s(e.$t("The account’s data will be permanently deleted from our servers within 30 days and from all backups within 60 days.")),1)])]),t("div",F,[r(_,{errors:l.form.errors},null,8,["errors"]),r(b,{modelValue:l.form.password,"onUpdate:modelValue":a[0]||(a[0]=d=>l.form.password=d),label:e.$t("Please enter your password to cancel the account"),type:"password",autofocus:!0,"input-class":"block w-full",required:!0,autocomplete:!1,maxlength:255},null,8,["modelValue","label"])]),t("div",J,[r(f,{href:n.data.url.back,text:e.$t("Go back"),class:i("me-3")},null,8,["href","text"]),r(h,{href:"data.url.vault.create",text:e.$t("Cancel account"),state:l.loadingState,icon:"arrow",class:i("save")},null,8,["text","state"])])],32)])])]),_:1},8,["layout-data"])}const rt=V(B,[["render",K],["__scopeId","data-v-60ef7fb8"]]);export{rt as default};
