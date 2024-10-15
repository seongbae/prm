import{P}from"./PrettyButton-DJ97II5T.js";import{P as w}from"./PrettySpan-DbeWKi_L.js";import{T as S}from"./TextInput-DPfNN3hz.js";import{E as x}from"./Errors-DkF-M9C7.js";import{d as _}from"./vuedraggable.umd-h0yOulbD.js";import{H as c,h as u,a as o,t as i,c as C,j as p,n as g,b as l,w as V,P as M,l as b,o as m}from"./app-BmMnv7Hf.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={components:{PrettyButton:P,PrettySpan:w,TextInput:S,Errors:x,draggable:_},props:{data:{type:Object,default:null}},emits:["pageSelected"],data(){return{drag:!1,loadingState:"",createPageModalShown:!1,renamePageModalShownId:0,localPages:[],isSelectedId:0,form:{name:"",position:"",errors:[]}}},computed:{dragOptions(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},mounted(){this.localPages=this.data.template_pages},methods:{showPageModal(){this.form.errors=[],this.form.name="",this.createPageModalShown=!0,this.$nextTick().then(()=>{this.$refs.newPage.focus()})},renamePageModal(t){this.form.name=t.name,this.renamePageModalShownId=t.id,this.$nextTick().then(()=>{this.$refs.rename.focus()})},submit(){this.loadingState="loading",axios.post(this.data.url.template_page_store,this.form).then(t=>{this.flash(this.$t("The page has been added"),"success"),this.localPages.push(t.data.data),this.loadingState=null,this.createPageModalShown=!1}).catch(t=>{this.loadingState=null,this.form.errors=t.response.data})},update(t){this.loadingState="loading",axios.put(t.url.update,this.form).then(e=>{this.flash(this.$t("The page has been updated"),"success"),this.localPages[this.localPages.findIndex(n=>n.id===t.id)]=e.data.data,this.loadingState=null,this.renamePageModalShownId=0}).catch(e=>{this.loadingState=null,this.form.errors=e.response.data})},destroy(t){confirm(this.$t("Are you sure? This action cannot be undone."))&&axios.delete(t.url.destroy).then(()=>{this.flash(this.$t("The page has been deleted"),"success");var e=this.localPages.findIndex(n=>n.id===t.id);this.localPages.splice(e,1)}).catch(e=>{this.loadingState=null,this.form.errors=e.response.data})},updatePosition(t){this.form.position=t.moved.newIndex+2,axios.post(t.moved.element.url.order,this.form).then(()=>{this.flash(this.$t("The position has been saved"),"success")}).catch(e=>{this.loadingState=null,this.errors=e.response.data})},selectPage(t){this.isSelectedId=t.id,this.$emit("pageSelected",t)}}},T={class:"mb-4 mt-8 items-center justify-between border-b pb-3 sm:mt-0 sm:flex"},Z={class:"mb-0 block"},B={class:"text-xs text-gray-400"},E={class:"inline"},j=["onClick"],N={class:"mb-0 block"},A={class:"text-xs"},O=["onClick"],U={class:"text-blue-500 hover:underline"},$=["onClick"],q=["onSubmit"],D={class:"border-b border-gray-200 p-5 dark:border-gray-700"},K={class:"flex justify-between p-5"},R={class:"border-b border-gray-200 p-5 dark:border-gray-700"},z={class:"flex justify-between p-5"},F={key:1},G={class:"rounded-lg border border-gray-200 bg-white p-5 text-center dark:border-gray-700 dark:bg-gray-900"};function J(t,e,n,L,r,a){const h=c("pretty-button"),f=c("errors"),v=c("text-input"),y=c("pretty-span"),k=c("draggable");return m(),u("div",null,[o("div",T,[o("h3",null,i(t.$t("Pages")),1),r.createPageModalShown?p("",!0):(m(),C(h,{key:0,text:t.$t("Add a page"),icon:"plus",onClick:a.showPageModal},null,8,["text","onClick"]))]),o("div",{class:g([r.isSelectedId===n.data.template_page_contact_information.id?"border-2	bg-sky-100":"","mb-2 flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2 hover:cursor-pointer hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-900 hover:dark:bg-slate-800"]),onClick:e[0]||(e[0]=s=>a.selectPage(n.data.template_page_contact_information))},[o("div",null,[o("div",Z,i(n.data.template_page_contact_information.name),1),o("ul",B,[o("li",E,i(t.$t("Can’t be moved or deleted")),1)])])],2),l(k,M({modelValue:r.localPages,"onUpdate:modelValue":e[4]||(e[4]=s=>r.localPages=s),class:"list-group","item-key":"id"},a.dragOptions,{"component-data":{tag:"div",type:"transition-group",name:r.drag?null:"flip-list"},onStart:e[5]||(e[5]=s=>r.drag=!0),onEnd:e[6]||(e[6]=s=>r.drag=!1),onChange:a.updatePosition}),{item:V(({element:s})=>[r.renamePageModalShownId!==s.id?(m(),u("div",{key:0,class:g([r.isSelectedId===s.id?"border-2	bg-sky-100":"","mb-2 flex items-center rounded-lg hover:cursor-pointer border border-gray-200 bg-white py-2 pe-5 ps-2 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-900 hover:dark:bg-slate-800"]),onClick:d=>a.selectPage(s)},[e[11]||(e[11]=o("div",{class:"me-2"},[o("svg",{class:"handle cursor-move",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M7 7H9V9H7V7Z",fill:"currentColor"}),o("path",{d:"M11 7H13V9H11V7Z",fill:"currentColor"}),o("path",{d:"M17 7H15V9H17V7Z",fill:"currentColor"}),o("path",{d:"M7 11H9V13H7V11Z",fill:"currentColor"}),o("path",{d:"M13 11H11V13H13V11Z",fill:"currentColor"}),o("path",{d:"M15 11H17V13H15V11Z",fill:"currentColor"}),o("path",{d:"M9 15H7V17H9V15Z",fill:"currentColor"}),o("path",{d:"M11 15H13V17H11V15Z",fill:"currentColor"}),o("path",{d:"M17 15H15V17H17V15Z",fill:"currentColor"})])],-1)),o("div",null,[o("div",N,i(s.name),1),o("ul",A,[o("li",{class:"me-4 inline cursor-pointer",onClick:d=>a.renamePageModal(s)},[o("span",U,i(t.$t("Rename")),1)],8,O),o("li",{class:"inline cursor-pointer text-red-500 hover:text-red-900",onClick:d=>a.destroy(s)},i(t.$t("Delete")),9,$)])])],10,j)):(m(),u("form",{key:1,class:"item-list mb-2 rounded-lg border border-gray-200 bg-white hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-900 hover:dark:bg-slate-800",onSubmit:b(d=>a.update(s),["prevent"])},[o("div",D,[l(f,{errors:r.form.errors},null,8,["errors"]),l(v,{ref:"rename",modelValue:r.form.name,"onUpdate:modelValue":e[1]||(e[1]=d=>r.form.name=d),label:t.$t("Name"),type:"text",autofocus:!0,"input-class":"block w-full",required:!0,autocomplete:!1,maxlength:255,onEscKeyPressed:e[2]||(e[2]=d=>r.renamePageModalShownId=0)},null,8,["modelValue","label"])]),o("div",K,[l(y,{text:t.$t("Cancel"),class:g("me-3"),onClick:e[3]||(e[3]=b(d=>r.renamePageModalShownId=0,["prevent"]))},null,8,["text"]),l(h,{text:t.$t("Rename"),state:r.loadingState,icon:"check",class:g("save")},null,8,["text","state"])])],40,q))]),_:1},16,["modelValue","component-data","onChange"]),r.createPageModalShown?(m(),u("form",{key:0,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",onSubmit:e[10]||(e[10]=b(s=>a.submit(),["prevent"]))},[o("div",R,[l(f,{errors:r.form.errors},null,8,["errors"]),l(v,{ref:"newPage",modelValue:r.form.name,"onUpdate:modelValue":e[7]||(e[7]=s=>r.form.name=s),label:t.$t("Name"),type:"text",autofocus:!0,"input-class":"block w-full",required:!0,autocomplete:!1,maxlength:255,onEscKeyPressed:e[8]||(e[8]=s=>r.createPageModalShown=!1)},null,8,["modelValue","label"])]),o("div",z,[l(y,{text:t.$t("Cancel"),class:g("me-3"),onClick:e[9]||(e[9]=s=>r.createPageModalShown=!1)},null,8,["text"]),l(h,{text:t.$t("Add"),state:r.loadingState,icon:"plus",class:g("save")},null,8,["text","state"])])],32)):p("",!0),r.localPages.length===0?(m(),u("div",F,[o("p",G,i(t.$t("Create at least one page to display contact’s data.")),1)])):p("",!0)])}const re=H(I,[["render",J],["__scopeId","data-v-f6d0689a"]]);export{re as default};
