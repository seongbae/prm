import{c as g,w as c,o as a,a as e,d as h,t as l,h as t,F as u,k as m,b,n as p,u as _,i as y,j as n}from"./app-BmMnv7Hf.js";import{L as f}from"./Layout-Csq83W0y.js";import{_ as k}from"./Avatar-D1zkgQk9.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"relative sm:mt-24"},w={class:"mx-auto max-w-4xl px-2 py-2 sm:px-6 sm:py-6 lg:px-8"},j={class:"mb-6 font-semibold"},B={key:0},N={class:"group-list mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},V={key:0,class:"relative flex -space-x-2 overflow-hidden py-1"},$={key:1,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},C=["alt"],D={class:"px-5 pb-5 pt-2 text-center"},I={__name:"Index",props:{layoutData:Object,data:Object},setup(s){return(o,i)=>(a(),g(f,{"layout-data":s.layoutData,"inside-vault":!0},{default:c(()=>[e("main",v,[e("div",w,[e("h3",j,[i[0]||(i[0]=e("span",{class:"me-1"}," 🏭 ",-1)),h(" "+l(o.$t("All the companies")),1)]),s.data.companies.length!==0?(a(),t("div",B,[e("ul",N,[(a(!0),t(u,null,m(s.data.companies,r=>(a(),t("li",{key:r.id,class:"border-b border-gray-200 px-5 py-2 hover:bg-slate-50 dark:border-gray-700 dark:bg-slate-900 hover:dark:bg-slate-800"},[e("p",null,l(r.name),1),r.contacts?(a(),t("div",V,[(a(!0),t(u,null,m(r.contacts,d=>(a(),t("div",{key:d.id,class:"inline-block"},[b(_(y),{href:d.url.show},{default:c(()=>[b(k,{data:d.avatar,class:p("h-8 w-8 rounded-full ring-2 ring-white")},null,8,["data"])]),_:2},1032,["href"])]))),128))])):n("",!0)]))),128))])])):n("",!0),s.data.companies.length===0?(a(),t("div",$,[e("img",{src:"/img/vault_company_blank.svg",alt:o.$t("Groups"),class:"mx-auto mt-4 h-36 w-36"},null,8,C),e("p",D,l(o.$t("You can add job information to your contacts and manage the companies here in this tab.")),1)])):n("",!0)])])]),_:1},8,["layout-data"]))}},A=x(I,[["__scopeId","data-v-56bc8c24"]]);export{A as default};
