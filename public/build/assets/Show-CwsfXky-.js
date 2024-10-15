import{r as $,T as M,c as p,w as u,o as l,a as e,t as s,b as h,d as m,u as v,i as g,j as c,h as o,F as y,k,l as w,p as j}from"./app-BmMnv7Hf.js";import{L as A}from"./Layout-Csq83W0y.js";import{_ as C}from"./ContactCard-CLKc-Ci_.js";import{U as V}from"./Uploadcare-Chmni2Iq.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BX-obcj7.js";import"./omit-BpS3z5OW.js";const B={class:"bg-white dark:bg-gray-900 sm:mt-20 sm:border-b"},S={class:"max-w-8xl mx-auto hidden px-4 py-2 sm:px-6 md:block"},L={class:"flex items-baseline justify-between space-x-6"},U={class:"text-sm"},D={class:"me-2 inline text-gray-600 dark:text-gray-400"},E={class:"me-2 inline"},T={class:"relative me-2 inline"},F={class:"relative me-2 inline"},N={class:"inline"},K={class:"sm:mt-18 relative"},I={class:"mx-auto max-w-4xl px-2 py-2 sm:px-6 sm:py-6 lg:px-8"},O={class:"mb-6 flex cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white p-3 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-900 hover:dark:bg-slate-800"},Y={class:"text-sm text-gray-500"},J={key:1,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},R={class:"p-5 text-center"},q={key:2,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},G={class:"bg-gray-100 p-3 text-center"},P=["src","alt"],Q={class:"special-grid grid grid-cols-1 gap-6 sm:grid-cols-3"},W={class:"p-3 sm:p-0"},X={class:"text-2xl"},Z={key:0,class:"mb-8 mt-2"},ee={class:"mb-6 mt-8 flex items-center text-sm"},te={key:1,class:"mb-6 flex items-center text-sm"},se={key:2},ae={class:"mb-2 text-sm font-bold"},re={class:"mb-6"},le={class:"text-xs"},oe={class:"mb-2"},ne={key:0,class:"mb-2"},ie={class:"mb-2"},de={class:"p-3 sm:p-0"},ce={key:0,class:"post-list mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},ue={class:"me-4 rounded-lg border border-gray-200 p-2 text-center leading-tight"},me={class:"block text-xs uppercase"},he={class:"text-xl"},ve={key:0},ge={key:1,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},be={class:"p-5 text-center"},pe={__name:"Show",props:{layoutData:Object,data:Object},setup(a){const b=a,n=$(b.data.slice),d=M({uuid:null,name:null,original_url:null,cdn_url:null,mime_type:null,size:null}),x=()=>{axios.put(b.data.slice.url.update_cover_image,d).then(t=>{n.value=t.data.data}).catch(()=>{})},f=t=>{d.uuid=t.uuid,d.name=t.name,d.original_url=t.originalUrl,d.cdn_url=t.cdnUrl,d.mime_type=t.mimeType,d.size=t.size,x()},_=()=>{axios.delete(b.data.slice.url.destroy_cover_image).then(t=>{n.value=t.data.data})},z=()=>{confirm(j("Are you sure? This action cannot be undone."))&&d.delete(b.data.slice.url.destroy)};return(t,r)=>(l(),p(A,{"layout-data":a.layoutData,"inside-vault":!0},{default:u(()=>[e("nav",B,[e("div",S,[e("div",L,[e("ul",U,[e("li",D,s(t.$t("You are here:")),1),e("li",E,[h(v(g),{href:a.layoutData.vault.url.journals,class:"text-blue-500 hover:underline"},{default:u(()=>[m(s(t.$t("Journals")),1)]),_:1},8,["href"])]),r[2]||(r[2]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",T,[h(v(g),{href:a.data.journal.url.show,class:"text-blue-500 hover:underline"},{default:u(()=>[m(s(a.data.journal.name),1)]),_:1},8,["href"])]),r[3]||(r[3]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",F,[h(v(g),{href:a.data.url.slices_index,class:"text-blue-500 hover:underline"},{default:u(()=>[m(s(t.$t("Slices of life")),1)]),_:1},8,["href"])]),r[4]||(r[4]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",N,s(n.value.name),1)])])])]),e("main",K,[e("div",I,[e("div",null,[a.data.uploadcare.publicKey&&a.data.canUploadFile&&!n.value.cover_image?(l(),p(V,{key:0,"public-key":a.data.uploadcare.publicKey,"secure-signature":a.data.uploadcare.signature,"secure-expire":a.data.uploadcare.expire,tabs:"file","preview-step":!1,onSuccess:f,onError:t.onError},{default:u(()=>[e("div",O,[r[5]||(r[5]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"mb-2 h-8 w-8 text-gray-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1)),e("p",Y,s(t.$t("Add a header image")),1)])]),_:1},8,["public-key","secure-signature","secure-expire","onError"])):c("",!0),a.data.uploadcare.publicKey?c("",!0):(l(),o("div",J,[e("p",R,s(t.$t("The keys to manage uploads have not been set in this Monica instance.")),1)])),a.data.canUploadFile?c("",!0):(l(),o("div",q,[e("p",G,[r[6]||(r[6]=e("span",{class:"me-1"},"⚠️",-1)),m(" "+s(t.$t("You don’t have enough space left in your account.")),1)])])),e("img",{src:n.value.cover_image,alt:n.value.uuid,class:"mb-8 w-full rounded-lg"},null,8,P)]),e("div",Q,[e("div",W,[e("h1",X,s(n.value.name),1),n.value.description?(l(),o("p",Z,s(n.value.description),1)):c("",!0),e("p",ee,[r[7]||(r[7]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"me-0 h-4 pe-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1)),e("span",null,s(t.$tChoice(":count post|:count posts",a.data.posts.length,{count:a.data.posts.length})),1)]),n.value.date_range?(l(),o("p",te,[r[8]||(r[8]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"me-0 h-4 pe-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"})],-1)),m(" "+s(n.value.date_range),1)])):c("",!0),a.data.contacts.length>0?(l(),o("div",se,[e("p",ae,s(t.$t("Contacts in this slice")),1),e("ul",re,[(l(!0),o(y,null,k(a.data.contacts,i=>(l(),o("li",{key:i.id},[h(C,{contact:i,"avatar-classes":"h-5 w-5 rounded-full me-2","display-name":!0},null,8,["contact"])]))),128))])])):c("",!0),e("ul",le,[e("li",oe,[h(v(g),{href:a.data.slice.url.edit,class:"cursor-pointer text-blue-500 hover:underline"},{default:u(()=>[m(s(t.$t("Edit")),1)]),_:1},8,["href"])]),n.value.cover_image?(l(),o("li",ne,[e("span",{onClick:r[0]||(r[0]=w(i=>_(),["prevent"])),class:"cursor-pointer text-blue-500 hover:underline"},s(t.$t("Remove cover image")),1)])):c("",!0),e("li",ie,[e("span",{onClick:r[1]||(r[1]=w(i=>z(),["prevent"])),class:"cursor-pointer text-blue-500 hover:underline"},s(t.$t("Delete the slice")),1)])])]),e("div",de,[a.data.posts.length>0?(l(),o("ul",ce,[(l(!0),o(y,null,k(a.data.posts,i=>(l(),o("li",{key:i.id,class:"flex items-center border-b border-gray-200 px-5 py-2 hover:bg-slate-50 dark:border-gray-700 dark:bg-slate-900 hover:dark:bg-slate-800"},[e("div",ue,[e("span",me,s(i.written_at_day),1),e("span",he,s(i.written_at_day_number),1)]),e("div",null,[e("span",null,[h(v(g),{href:i.url.show,class:"text-blue-500 hover:underline"},{default:u(()=>[m(s(i.title),1)]),_:2},1032,["href"])]),i.excerpt?(l(),o("p",ve,s(i.excerpt),1)):c("",!0)])]))),128))])):(l(),o("div",ge,[e("p",be,s(t.$t("A slice of life lets you group posts by something meaningful to you. Add a slice of life in a post to see it here.")),1)]))])])])])]),_:1},8,["layout-data"]))}},$e=H(pe,[["__scopeId","data-v-fae98a24"]]);export{$e as default};
