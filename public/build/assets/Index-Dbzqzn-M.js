import{c as g,w as l,o,a as e,t as r,b as i,d as c,u,i as m,n as h,h as d,j as b,F as k,k as x}from"./app-BmMnv7Hf.js";import{L as y}from"./Layout-Csq83W0y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"bg-white dark:bg-gray-900 sm:mt-20 sm:border-b"},w={class:"max-w-8xl mx-auto hidden px-4 py-2 sm:px-6 md:block"},f={class:"flex items-baseline justify-between space-x-6"},p={class:"text-sm"},_={class:"me-2 inline text-gray-600 dark:text-gray-400"},j={class:"me-2 inline"},B={class:"inline"},C={class:"sm:mt-18 relative"},V={class:"mx-auto max-w-6xl px-2 py-2 sm:px-6 sm:py-6 lg:px-8"},A={key:0,class:"mb-8"},$={class:"flex justify-center"},z={class:"mb-8 inline-flex rounded-md shadow-sm"},D={key:1,class:"flex"},N=["src","alt"],L={key:2,class:"mb-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},M={class:"p-5 text-center"},T={__name:"Index",props:{layoutData:Object,data:Object},setup(t){return(s,a)=>(o(),g(y,{"layout-data":t.layoutData,"inside-vault":!0},{default:l(()=>[e("nav",v,[e("div",w,[e("div",f,[e("ul",p,[e("li",_,r(s.$t("You are here:")),1),e("li",j,[i(u(m),{href:t.layoutData.vault.url.journals,class:"text-blue-500 hover:underline"},{default:l(()=>[c(r(s.$t("Journals")),1)]),_:1},8,["href"])]),a[0]||(a[0]=e("li",{class:"relative me-2 inline"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon-breadcrumb relative inline h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),e("li",B,r(t.data.name),1)])])])]),e("main",C,[e("div",V,[e("h1",{class:h(["text-2xl",t.data.description?"mb-4":"mb-8"])},r(t.data.name),3),t.data.description?(o(),d("p",A,r(t.data.description),1)):b("",!0),e("div",$,[e("div",z,[i(u(m),{href:t.data.url.show,class:h([{"bg-gray-100 text-blue-700 dark:bg-gray-400 dark:font-bold":s.defaultTab==="activity"},"inline-flex items-center rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white hover:dark:bg-gray-600 hover:dark:text-white dark:focus:text-white dark:focus:ring-blue-500"])},{default:l(()=>[a[1]||(a[1]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"me-2 h-4 w-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})],-1)),c(" "+r(s.$t("Journal entries")),1)]),_:1},8,["href","class"]),i(u(m),{class:"inline-flex items-center rounded-e-md border-y border-e border-gray-200 bg-gray-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-400 dark:bg-gray-700 dark:font-bold dark:text-white hover:dark:bg-gray-600 hover:dark:text-white dark:focus:text-white dark:focus:ring-blue-500"},{default:l(()=>[a[2]||(a[2]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"me-2 h-4 w-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1)),c(" "+r(s.$t("Photos")),1)]),_:1})])]),t.data.photos.length>0?(o(),d("div",D,[(o(!0),d(k,null,x(t.data.photos,n=>(o(),d("div",{key:n.id,class:"mr-2 cursor-pointer rounded-md border border-gray-200 p-2 shadow-sm hover:bg-slate-50 hover:shadow-lg dark:border-gray-700 dark:bg-slate-900 hover:dark:bg-slate-800"},[i(u(m),{href:n.url.post},{default:l(()=>[e("img",{src:n.url.display,alt:n.name},null,8,N)]),_:2},1032,["href"])]))),128))])):(o(),d("div",L,[a[3]||(a[3]=e("img",{src:"/img/journal_photo_index_blank.svg",alt:"blank state",class:"mx-auto block h-32 w-32 py-6"},null,-1)),e("p",M,r(s.$t("Add a photo to a journal entry to see it here.")),1)]))])])]),_:1},8,["layout-data"]))}};export{T as default};
