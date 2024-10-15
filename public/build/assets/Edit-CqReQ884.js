import{T as F,r as g,f as $,v as L,c as D,w as d,o as i,a as e,t as o,b as n,d as h,u,i as M,h as c,F as j,k as T,j as f,P as N,by as I,n as P,p as K}from"./app-BmMnv7Hf.js";import{D as q}from"./style-ClCZSOx6.js";import{L as H}from"./Layout-Csq83W0y.js";import{P as O}from"./PrettyLink-DUWQkaT1.js";import{T as R}from"./TextInput-DPfNN3hz.js";import{T as W}from"./TextArea-Dl3jFH3I.js";import J from"./Tags-KyHrwe15.js";import G from"./SlicesOfLife-B2cchsHS.js";import Q from"./PostMetrics-CvxABkSO.js";import{U as X}from"./Uploadcare-Chmni2Iq.js";import{C as Z}from"./ContactSelector-DdCoQNmh.js";import{_ as ee}from"./ConfirmationModal-Dcz2uZEg.js";import{_ as te}from"./DangerButton-OSGRtkYA.js";import{_ as se}from"./SecondaryButton-3_x4XnxO.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Errors-DkF-M9C7.js";import"./PrettyButton-DJ97II5T.js";import"./PrettySpan-DbeWKi_L.js";import"./Dropdown-fLyjUirY.js";import"./Modal-COqoaAX8.js";const oe={class:"bg-white dark:bg-gray-900 sm:mt-20 sm:border-b"},le={class:"max-w-8xl mx-auto hidden px-4 py-2 sm:px-6 md:block"},re={class:"flex items-baseline justify-between space-x-6"},ne={class:"text-sm"},ie={class:"me-2 inline text-gray-600 dark:text-gray-400"},de={class:"me-2 inline"},ue={class:"inline"},ce={class:"me-2 inline"},me={class:"relative inline"},he={class:"relative sm:mt-16"},ve={class:"mx-auto max-w-6xl px-2 py-2 sm:px-6 sm:py-6 lg:px-8"},ge={class:"special-grid grid grid-cols-1 gap-6 sm:grid-cols-3"},be={key:0,class:"mb-2 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},pe={class:"flex"},fe=["src"],ke={class:"mb-2 text-sm"},we={class:"font-mono text-xs"},ye=["onClick"],xe={key:0,class:"mb-6 flex cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white p-3 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-900 hover:dark:bg-slate-800"},_e={class:"text-sm text-gray-500"},$e={key:1,class:"mb-6 flex items-center"},Ce={class:"inline-block cursor-pointer rounded-lg border bg-slate-200 dark:bg-slate-700 px-1 py-1 text-xs hover:bg-slate-300 hover:dark:bg-slate-800"},Me={key:2,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},Ve={class:"p-5 text-center"},De={key:3,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},je={class:"bg-gray-100 p-3 text-center"},Te={class:"mb-6 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"},Pe={class:"border-gray-200 p-5 dark:border-gray-700"},ze={class:"mb-2 rounded-lg border border-gray-200 text-center dark:border-gray-700 dark:bg-gray-900"},Be={class:"rounded-b-lg bg-gray-50 p-5 dark:bg-gray-900"},Ue={class:"mb-6 text-sm"},Ae={key:0,class:"flex items-center justify-center"},Ee={key:1,class:"flex items-center justify-center"},Se={class:"mb-2 flex items-center font-bold"},Ye=["value"],Fe={class:"mb-2 mt-6 flex items-center font-bold"},Le={class:"mb-2 font-bold"},Ne={class:"mb-6 text-sm"},Ie={class:"mb-2 flex items-center"},Ke={class:"mb-2 flex items-center"},qe={class:"flex items-center"},He={__name:"Edit",props:{layoutData:Object,data:Object},setup(r){const m=r,a=F({title:m.data.title,contacts:m.data.contacts,date:m.data.editable_date,sections:m.data.sections.map(t=>({id:t.id,label:t.label,content:t.content})),uuid:null,name:null,original_url:null,cdn_url:null,mime_type:null,size:null}),b=g(!1),v=g(m.data.statistics),k=g(!1),C=g(null),w=g(!1),p=g(m.data.photos),z=g({modelValue:"YYYY-MM-DD"});$(()=>_.cloneDeep(a.sections),()=>{y(a.sections)}),$(()=>a.title,()=>{y(a.title)}),$(()=>a.date,()=>{y(a.date)}),$(()=>_.cloneDeep(a.contacts),()=>{y(a.contacts)});const y=L.debounce(()=>{S()},500),B=t=>{a.uuid=t.uuid,a.name=t.name,a.original_url=t.originalUrl,a.cdn_url=t.cdnUrl,a.mime_type=t.mimeType,a.size=t.size,A()},U=t=>{C.value=t,k.value=!0},A=()=>{b.value=!0,axios.post(m.data.url.upload_photo,a).then(t=>{b.value=!1,p.value.push(t.data.data)}).catch(t=>{a.errors=t.response.data})},E=()=>{w.value=!0,axios.delete(C.value.url.destroy).then(()=>{w.value=!1;var t=p.value.findIndex(s=>s.id===C.value.id);p.value.splice(t,1),k.value=!1}).catch(t=>{a.errors=t.response.data})},S=()=>{b.value=!0,axios.put(m.data.url.update,a).then(t=>{setTimeout(()=>b.value=!1,350),v.value=t.data.data}).catch(()=>{})},Y=()=>{confirm(K("Are you sure? This action cannot be undone."))&&a.delete(m.data.url.destroy,{onFinish:()=>{}})};return(t,s)=>(i(),D(H,{"layout-data":r.layoutData,"inside-vault":!0},{default:d(()=>{var V;return[e("nav",oe,[e("div",le,[e("div",re,[e("ul",ne,[e("li",ie,o(t.$t("You are here:")),1),e("li",de,[n(u(M),{href:r.layoutData.vault.url.journals,class:"text-blue-500 hover:underline"},{default:d(()=>[h(o(t.$t("Journals")),1)]),_:1},8,["href"])]),s[7]||(s[7]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",ue,[n(u(M),{href:r.data.url.back,class:"text-blue-500 hover:underline"},{default:d(()=>[h(o(r.data.journal.name),1)]),_:1},8,["href"])]),s[8]||(s[8]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",ce,[n(u(M),{href:r.data.url.show,class:"text-blue-500 hover:underline"},{default:d(()=>[h(o(r.data.title),1)]),_:1},8,["href"])]),s[9]||(s[9]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",me,o(t.$t("Edit a post")),1)])])])]),e("main",he,[e("div",ve,[e("div",ge,[e("div",null,[e("div",null,[p.value.length>0?(i(),c("ul",be,[(i(!0),c(j,null,T(p.value,l=>(i(),c("li",{key:l.id,class:"item-list flex items-center justify-between border-b border-gray-200 p-3 hover:bg-slate-50 dark:border-gray-700 dark:bg-slate-900 hover:dark:bg-slate-800"},[e("div",pe,[e("img",{src:l.url.show,class:"me-4",width:"75",height:"75"},null,8,fe),e("ul",null,[e("li",ke,o(l.name),1),e("li",we,o(l.size),1)])]),e("span",{class:"inline cursor-pointer text-red-500 hover:text-red-900",onClick:x=>U(l)},o(t.$t("Delete")),9,ye)]))),128))])):f("",!0),r.data.uploadcare.publicKey&&r.data.canUploadFile?(i(),D(X,{key:1,"public-key":r.data.uploadcare.publicKey,"secure-signature":r.data.uploadcare.signature,"secure-expire":r.data.uploadcare.expire,tabs:"file","preview-step":!1,onSuccess:B,onError:t.onError},{default:d(()=>[p.value.length===0?(i(),c("div",xe,[s[10]||(s[10]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"mb-2 h-8 w-8 text-gray-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1)),e("p",_e,o(t.$t("Add photos")),1)])):(i(),c("div",$e,[e("p",Ce,o(t.$t("+ add another photo")),1)]))]),_:1},8,["public-key","secure-signature","secure-expire","onError"])):f("",!0),r.data.uploadcare.publicKey?f("",!0):(i(),c("div",Me,[e("p",Ve,o(t.$t("The keys to manage uploads have not been set in this Monica instance.")),1)])),r.data.canUploadFile?f("",!0):(i(),c("div",De,[e("p",je,[s[11]||(s[11]=e("span",{class:"me-1"},"⚠️",-1)),h(" "+o(t.$t("You don’t have enough space left in your account.")),1)])]))]),e("div",Te,[e("div",Pe,[n(R,{ref:"newTitle",modelValue:u(a).title,"onUpdate:modelValue":s[0]||(s[0]=l=>u(a).title=l),label:t.$t("Title"),type:"text","input-class":"block w-full mb-6",required:!0,autocomplete:!1,maxlength:255,onEscKeyPressed:s[1]||(s[1]=l=>t.createNoteModalShown=!1)},null,8,["modelValue","label"]),(i(!0),c(j,null,T(u(a).sections,l=>(i(),c("div",{key:l.id,class:"mb-8"},[n(W,{modelValue:l.content,"onUpdate:modelValue":x=>l.content=x,label:l.label,rows:10,required:!0,maxlength:65535,markdown:!0,"textarea-class":"block w-full"},null,8,["modelValue","onUpdate:modelValue","label"])]))),128))])])]),e("div",null,[e("div",ze,[e("div",Be,[n(O,{href:r.data.url.show,text:t.$t("Close"),icon:"exit"},null,8,["href","text"])])]),e("div",Ue,[b.value?f("",!0):(i(),c("div",Ae,[s[12]||(s[12]=e("svg",{class:"me-2 h-4 w-4 text-green-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})],-1)),e("span",null,o(t.$t("Auto saved a few seconds ago")),1)])),b.value?(i(),c("div",Ee,[s[13]||(s[13]=e("div",{class:"saving-spinner me-3"},[e("div",{class:"dot"}),e("div",{class:"dot"}),e("div",{class:"dot"})],-1)),e("span",null,o(t.$t("Saving in progress")),1)])):f("",!0)]),e("p",Se,[e("span",null,o(t.$t("Written on")),1)]),n(u(q),{modelValue:u(a).date,"onUpdate:modelValue":s[2]||(s[2]=l=>u(a).date=l),modelModifiers:{string:!0},masks:z.value,locale:(V=t.$page.props.auth.user)==null?void 0:V.locale_ietf,class:"mb-6 inline-block"},{default:d(({inputValue:l,inputEvents:x})=>[e("input",N({class:"rounded border bg-white px-2 py-1 dark:border-gray-700 dark:bg-gray-900",value:l},I(x,!0)),null,16,Ye)]),_:1},8,["modelValue","masks","locale"]),e("p",Fe,[e("span",null,o(t.$t("Contacts in this post")),1)]),n(Z,{modelValue:u(a).contacts,"onUpdate:modelValue":s[3]||(s[3]=l=>u(a).contacts=l),"search-url":r.layoutData.vault.url.search_contacts_only,"most-consulted-contacts-url":r.layoutData.vault.url.get_most_consulted_contacts,"display-most-consulted-contacts":!0,"add-multiple-contacts":!0,required:!0,class:P("mb-8 flex-1 border-gray-200 dark:border-gray-700")},null,8,["modelValue","search-url","most-consulted-contacts-url"]),n(G,{data:r.data},null,8,["data"]),n(Q,{data:r.data},null,8,["data"]),n(J,{data:r.data},null,8,["data"]),e("p",Le,o(t.$t("Statistics")),1),e("ul",Ne,[e("li",Ie,[s[14]||(s[14]=e("svg",{class:"me-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})],-1)),e("span",null,o(t.$tChoice(":count word|:count words",v.value.word_count,{count:v.value.word_count})),1)]),e("li",Ke,[s[15]||(s[15]=e("svg",{class:"me-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),e("span",null,o(t.$tChoice(":count min read",v.value.time_to_read_in_minute,{count:v.value.time_to_read_in_minute})),1)]),e("li",qe,[s[16]||(s[16]=e("svg",{class:"me-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1)),e("span",null,o(t.$tChoice("Read :count time|Read :count times",v.value.view_count,{count:v.value.view_count})),1)])]),e("div",{onClick:Y,class:"cursor-pointer text-red-500 hover:text-red-900"},o(t.$t("Delete")),1)])])])]),n(ee,{show:k.value,onClose:s[6]||(s[6]=l=>k.value=!1)},{title:d(()=>[h(o(t.$t("Delete the photo")),1)]),content:d(()=>[h(o(t.$t("Are you sure? This action cannot be undone.")),1)]),footer:d(()=>[n(se,{onClick:s[4]||(s[4]=l=>k.value=!1)},{default:d(()=>[h(o(t.$t("Cancel")),1)]),_:1}),n(te,{class:P(["ms-3",{"opacity-25":w.value}]),disabled:w.value,onClick:s[5]||(s[5]=l=>E(t.file))},{default:d(()=>[h(o(t.$t("Delete")),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]}),_:1},8,["layout-data"]))}},mt=ae(He,[["__scopeId","data-v-087f4e5d"]]);export{mt as default};
