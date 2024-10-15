import{o,h as t,a as n,z as g,r as f,T as C,b as e,u as c,w as p,F as d,Z as V,t as i,j as b,d as u,l as k,n as B,A as F}from"./app-BmMnv7Hf.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./AuthenticationCardLogo-Dq_5ZkKO.js";import{_ as I}from"./Button-BWK-thSE.js";import{_ as h}from"./Input-CLHvIp3o.js";import{_ as $}from"./Label-DWTE4-tY.js";import{_ as N}from"./ValidationErrors-dE7HNvfK.js";import U from"./WebauthnLogin-C48CgrnD.js";import"./ApplicationLogo-D_o_S5Vs.js";import"./InputError-CqlclkzZ.js";import"./WaitForKey-B88pVrrY.js";import"./index-DMlPNJkt.js";const K={},P={class:"flex min-h-screen flex-col items-center bg-gray-100 pt-6 dark:bg-gray-800 sm:justify-center sm:pt-0"},S={class:"mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-gray-900 dark:shadow-gray-700 sm:max-w-md sm:rounded-lg"};function z(s,l){return o(),t("div",P,[n("div",null,[g(s.$slots,"logo")]),n("div",S,[g(s.$slots,"default")])])}const A=T(K,[["render",z]]),R={key:0},D={class:"mb-4 max-w-xl text-gray-600 dark:text-gray-400"},E={key:1},L={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},M={key:0},O={key:1},Z={class:"mt-4 flex items-center justify-end"},ae={__name:"TwoFactorChallenge",props:{twoFactor:Boolean,remember:Boolean,publicKey:Object},setup(s){const l=f(!1),r=C({code:"",recovery_code:""}),v=f(null),_=f(null),w=async()=>{l.value^=!0,await F(),l.value?(v.value.focus(),r.code=""):(_.value.focus(),r.recovery_code="")},x=()=>{r.post(route("two-factor.login"))};return(a,m)=>(o(),t(d,null,[e(c(V),{title:a.$t("Two-factor Confirmation")},null,8,["title"]),e(A,null,{logo:p(()=>[e(j)]),default:p(()=>[s.publicKey?(o(),t("div",R,[n("h1",D,i(a.$t("Please confirm access to your account by validating your security key.")),1),e(U,{remember:s.remember,"public-key":s.publicKey},null,8,["remember","public-key"])])):b("",!0),s.twoFactor?(o(),t("div",E,[n("div",L,[l.value?(o(),t(d,{key:1},[u(i(a.$t("Please confirm access to your account by entering one of your emergency recovery codes.")),1)],64)):(o(),t(d,{key:0},[u(i(a.$t("Please confirm access to your account by entering the authentication code provided by your authenticator application.")),1)],64))]),e(N,{class:"mb-4"}),n("form",{onSubmit:k(x,["prevent"])},[l.value?(o(),t("div",O,[e($,{for:"recovery_code",value:a.$t("Recovery Code")},null,8,["value"]),e(h,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:v,modelValue:c(r).recovery_code,"onUpdate:modelValue":m[1]||(m[1]=y=>c(r).recovery_code=y),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])])):(o(),t("div",M,[e($,{for:"code",value:a.$t("Code")},null,8,["value"]),e(h,{id:"code",ref_key:"codeInput",ref:_,modelValue:c(r).code,"onUpdate:modelValue":m[0]||(m[0]=y=>c(r).code=y),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),n("div",Z,[n("button",{type:"button",class:"cursor-pointer text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400",onClick:k(w,["prevent"])},[l.value?(o(),t(d,{key:1},[u(i(a.$t("Use an authentication code")),1)],64)):(o(),t(d,{key:0},[u(i(a.$t("Use a recovery code")),1)],64))]),e(I,{class:B(["ms-4",{"opacity-25":c(r).processing}]),disabled:c(r).processing},{default:p(()=>[u(i(a.$t("Log in")),1)]),_:1},8,["class","disabled"])])],32)])):b("",!0)]),_:1})],64))}};export{ae as default};
