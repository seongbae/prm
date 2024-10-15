import{c as k,w as d,o as a,a as e,t as s,b as n,d as m,u,i as h,h as r,j as _,k as b,F as g}from"./app-BmMnv7Hf.js";import{L as f}from"./Layout-Csq83W0y.js";import{_ as v}from"./ContactCard-CLKc-Ci_.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BX-obcj7.js";import"./omit-BpS3z5OW.js";const x={class:"bg-white dark:bg-gray-900 sm:mt-20 sm:border-b"},y={class:"max-w-8xl mx-auto hidden px-4 py-2 sm:px-6 md:block"},w={class:"flex items-baseline justify-between space-x-6"},j={class:"text-sm"},B={class:"me-2 inline text-gray-600 dark:text-gray-400"},I={class:"me-2 inline"},$={class:"me-2 inline"},C={class:"me-2 inline"},D={class:"sm:mt-18 relative"},L={class:"mx-auto max-w-3xl px-2 py-2 sm:px-6 sm:py-6 lg:px-8"},N={class:"special-grid grid grid-cols-1 gap-6 sm:grid-cols-3"},V={class:"mb-3 font-bold"},F={key:0,class:"rounded border border-gray-200 p-2 hover:bg-slate-50 dark:border-gray-700 dark:bg-slate-900 hover:dark:bg-slate-800"},M={class:"mb-3"},O=["src","alt"],E={class:"text-xs"},R=["href"],S={class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},T={class:"mb-1 block"},W={class:"list"},Y={__name:"Index",props:{layoutData:Object,data:Object},setup(t){return(i,l)=>(a(),k(f,{"layout-data":t.layoutData,"inside-vault":!0},{default:d(()=>[e("nav",x,[e("div",y,[e("div",w,[e("ul",j,[e("li",B,s(i.$t("You are here:")),1),e("li",I,[n(u(h),{href:t.layoutData.vault.url.reports,class:"text-blue-500 hover:underline"},{default:d(()=>[m(s(i.$t("Reports")),1)]),_:1},8,["href"])]),l[0]||(l[0]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",$,[n(u(h),{href:t.data.url.addresses,class:"text-blue-500 hover:underline"},{default:d(()=>[m(s(i.$t("List of addresses")),1)]),_:1},8,["href"])]),l[1]||(l[1]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",C,s(t.data.city),1)])])])]),e("main",D,[e("div",L,[e("div",N,[e("div",null,[e("h2",V,s(t.data.city),1),t.data.wikipedia.description?(a(),r("div",F,[e("p",M,s(t.data.wikipedia.description),1),e("img",{src:t.data.wikipedia.thumbnail,alt:"Image of "+t.data.city,class:"mb-2 rounded"},null,8,O),e("p",E,[e("a",{href:t.data.wikipedia.url,target:"_blank"},s(i.$t("Information from Wikipedia")),9,R)])])):_("",!0)]),e("div",null,[e("ul",S,[(a(!0),r(g,null,b(t.data.addresses,o=>(a(),r("li",{key:o.id,class:"item-list border-b border-gray-200 px-3 pb-2 pt-3 hover:bg-slate-50 dark:border-gray-700 dark:bg-slate-900 hover:dark:bg-slate-800"},[e("span",T,s(o.address),1),e("ul",W,[(a(!0),r(g,null,b(o.contacts,c=>(a(),r("li",{key:c.id,class:"me-3 inline"},[n(v,{contact:c,"avatar-classes":"h-5 w-5 rounded-full me-2","display-name":!0},null,8,["contact"])]))),128))])]))),128))])])])])])]),_:1},8,["layout-data"]))}},K=p(Y,[["__scopeId","data-v-81cdcc5f"]]);export{K as default};
