import{T as h,c as w,w as d,o as u,b as a,a as e,t as n,u as l,h as v,j as b,d as p,i as g,n as $,l as k,p as c}from"./app-BmMnv7Hf.js";import{_ as V}from"./Guest-BnM1mVCv.js";import{_ as m}from"./Input-CLHvIp3o.js";import{_ as i}from"./Label-DWTE4-tY.js";import{_ as x}from"./ValidationErrors-dE7HNvfK.js";import{_ as P}from"./Checkbox-C5vD6F-i.js";import{P as T}from"./PrettyButton-DJ97II5T.js";import"./ApplicationLogo-D_o_S5Vs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"mb-2 text-lg font-bold"},U={class:"mb-8 text-sm text-gray-500"},q={class:"mt-4"},B={class:"mt-4"},M={class:"mt-4"},S={class:"text-xs text-gray-600"},N={class:"mb-8 mt-4"},j={key:0,class:"mb-4 mt-4"},A={class:"flex"},F=["innerHTML"],L={class:"mb-4 rounded-lg border bg-amber-50 p-6"},E={class:"mb-2 text-center font-bold"},H={class:"mb-2"},I={class:"list mb-2 ps-3"},R={class:"list-disc"},z={class:"list-disc"},D={class:"list-disc"},W={class:"list-disc"},Y={class:"mt-4 flex items-center justify-end"},ae={__name:"Register",setup(G){const o=h({first_name:"",last_name:"",email:"",password:"",password_confirmation:"",terms:!1}),f=()=>{o.post(route("register"),{onFinish:()=>o.reset("password","password_confirmation")})},_=()=>`<a target="_blank" href="${route("terms.show")}" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-100">${c("Terms of Service")}</a>`,y=()=>`<a target="_blank" href="${route("policy.show")}" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-100">${c("Privacy Policy")}</a>`;return(s,t)=>(u(),w(V,null,{default:d(()=>[a(x,{class:"mb-4"}),e("p",C,n(s.$t("Sign up for an account")),1),e("p",U,n(s.$t("Your name here will be used to add yourself as a contact.")),1),e("form",{onSubmit:k(f,["prevent"])},[e("div",null,[a(i,{for:"first_name",value:s.$t("First name")},null,8,["value"]),a(m,{id:"first_name",modelValue:l(o).first_name,"onUpdate:modelValue":t[0]||(t[0]=r=>l(o).first_name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"first_name"},null,8,["modelValue"])]),e("div",q,[a(i,{for:"last_name",value:s.$t("Last name")},null,8,["value"]),a(m,{id:"last_name",modelValue:l(o).last_name,"onUpdate:modelValue":t[1]||(t[1]=r=>l(o).last_name=r),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"last_name"},null,8,["modelValue"])]),e("div",B,[a(i,{for:"email",value:s.$t("Email")},null,8,["value"]),a(m,{id:"email",modelValue:l(o).email,"onUpdate:modelValue":t[2]||(t[2]=r=>l(o).email=r),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"])]),e("div",M,[a(i,{for:"password",value:s.$t("Password")},null,8,["value"]),a(m,{id:"password",modelValue:l(o).password,"onUpdate:modelValue":t[3]||(t[3]=r=>l(o).password=r),type:"password",class:"mt-1 mb-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e("p",S,n(s.$t("The password should be at least 8 characters long.")),1)]),e("div",N,[a(i,{for:"password_confirmation",value:s.$t("Confirm Password")},null,8,["value"]),a(m,{id:"password_confirmation",modelValue:l(o).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=r=>l(o).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),s.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(u(),v("div",j,[a(i,{for:"terms"},{default:d(()=>[e("div",A,[a(P,{id:"terms",checked:l(o).terms,"onUpdate:checked":t[5]||(t[5]=r=>l(o).terms=r),name:"terms"},null,8,["checked"]),e("div",{class:"ms-2",innerHTML:s.$t("I agree to the :terms and :policy",{terms:_(),policy:y()})},null,8,F)])]),_:1})])):b("",!0),e("div",L,[e("p",E,[t[6]||(t[6]=e("span",{class:"me-2"},"🚧",-1)),p(" "+n(s.$t("Chandler is in beta."))+" ",1),t[7]||(t[7]=e("span",{class:"ms-2"},"🚧",-1))]),e("p",H,n(s.$t("Compared to Monica:")),1),e("ul",I,[e("li",R,n(s.$t("it misses some of the features, the most important ones being the API and gift management,")),1),e("li",z,n(s.$t("you can't import any data from your current Monica account(yet),")),1),e("li",D,n(s.$t("you can't even use your current username or password to sign in,")),1),e("li",W,n(s.$t("however, there are many, many new features that didn't exist before.")),1)]),e("p",null,n(s.$t("We hope you'll like it.")),1)]),e("div",Y,[a(l(g),{href:s.route("login"),class:"me-4 text-sm text-blue-500 hover:underline dark:text-gray-400"},{default:d(()=>[p(n(s.$t("Already registered?")),1)]),_:1},8,["href"]),a(T,{text:s.$t("Register"),state:s.loadingState,class:$("save")},null,8,["text","state"])])],32)]),_:1}))}};export{ae as default};
