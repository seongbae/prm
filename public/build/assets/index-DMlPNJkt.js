function l(e){const t=new Uint8Array(e);let n="";for(const a of t)n+=String.fromCharCode(a);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function b(e){const t=e.replace(/-/g,"+").replace(/_/g,"/"),n=(4-t.length%4)%4,r=t.padEnd(t.length+n,"="),a=atob(r),s=new ArrayBuffer(a.length),i=new Uint8Array(s);for(let u=0;u<a.length;u++)i[u]=a.charCodeAt(u);return s}function g(){return(window==null?void 0:window.PublicKeyCredential)!==void 0&&typeof window.PublicKeyCredential=="function"}function p(e){const{id:t}=e;return{...e,id:b(t),transports:e.transports}}function A(e){return e==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}class o extends Error{constructor({message:t,code:n,cause:r,name:a}){super(t,{cause:r}),this.name=a??r.name,this.code=n}}function _({error:e,options:t}){var r,a;const{publicKey:n}=t;if(!n)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(t.signal instanceof AbortSignal)return new o({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if(e.name==="ConstraintError"){if(((r=n.authenticatorSelection)==null?void 0:r.requireResidentKey)===!0)return new o({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:e});if(((a=n.authenticatorSelection)==null?void 0:a.userVerification)==="required")return new o({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:e})}else{if(e.name==="InvalidStateError")return new o({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:e});if(e.name==="NotAllowedError")return new o({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="NotSupportedError")return n.pubKeyCredParams.filter(i=>i.type==="public-key").length===0?new o({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:e}):new o({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:e});if(e.name==="SecurityError"){const s=window.location.hostname;if(A(s)){if(n.rp.id!==s)return new o({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new o({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="TypeError"){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new o({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:e})}else if(e.name==="UnknownError")return new o({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return e}class I{createNewAbortSignal(){if(this.controller){const n=new Error("Cancelling existing WebAuthn API call for new one");n.name="AbortError",this.controller.abort(n)}const t=new AbortController;return this.controller=t,t.signal}cancelCeremony(){if(this.controller){const t=new Error("Manually cancelling existing WebAuthn API call");t.name="AbortError",this.controller.abort(t),this.controller=void 0}}}const m=new I,P=["cross-platform","platform"];function y(e){if(e&&!(P.indexOf(e)<0))return e}async function T(e){var R;if(!g())throw new Error("WebAuthn is not supported in this browser");const n={publicKey:{...e,challenge:b(e.challenge),user:{...e.user,id:b(e.user.id)},excludeCredentials:(R=e.excludeCredentials)==null?void 0:R.map(p)}};n.signal=m.createNewAbortSignal();let r;try{r=await navigator.credentials.create(n)}catch(c){throw _({error:c,options:n})}if(!r)throw new Error("Registration was not completed");const{id:a,rawId:s,response:i,type:u}=r;let d;typeof i.getTransports=="function"&&(d=i.getTransports());let w;if(typeof i.getPublicKeyAlgorithm=="function")try{w=i.getPublicKeyAlgorithm()}catch(c){E("getPublicKeyAlgorithm()",c)}let f;if(typeof i.getPublicKey=="function")try{const c=i.getPublicKey();c!==null&&(f=l(c))}catch(c){E("getPublicKey()",c)}let h;if(typeof i.getAuthenticatorData=="function")try{h=l(i.getAuthenticatorData())}catch(c){E("getAuthenticatorData()",c)}return{id:a,rawId:l(s),response:{attestationObject:l(i.attestationObject),clientDataJSON:l(i.clientDataJSON),transports:d,publicKeyAlgorithm:w,publicKey:f,authenticatorData:h},type:u,clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:y(r.authenticatorAttachment)}}function E(e,t){console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.
`,t)}function C(){if(!g())return new Promise(t=>t(!1));const e=window.PublicKeyCredential;return e.isConditionalMediationAvailable===void 0?new Promise(t=>t(!1)):e.isConditionalMediationAvailable()}function O({error:e,options:t}){const{publicKey:n}=t;if(!n)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(t.signal instanceof AbortSignal)return new o({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else{if(e.name==="NotAllowedError")return new o({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="SecurityError"){const r=window.location.hostname;if(A(r)){if(n.rpId!==r)return new o({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new o({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="UnknownError")return new o({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return e}async function S(e,t=!1){var h,R;if(!g())throw new Error("WebAuthn is not supported in this browser");let n;((h=e.allowCredentials)==null?void 0:h.length)!==0&&(n=(R=e.allowCredentials)==null?void 0:R.map(p));const r={...e,challenge:b(e.challenge),allowCredentials:n},a={};if(t){if(!await C())throw Error("Browser does not support WebAuthn autofill");if(document.querySelectorAll("input[autocomplete$='webauthn']").length<1)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');a.mediation="conditional",r.allowCredentials=[]}a.publicKey=r,a.signal=m.createNewAbortSignal();let s;try{s=await navigator.credentials.get(a)}catch(c){throw O({error:c,options:a})}if(!s)throw new Error("Authentication was not completed");const{id:i,rawId:u,response:d,type:w}=s;let f;return d.userHandle&&(f=l(d.userHandle)),{id:i,rawId:l(u),response:{authenticatorData:l(d.authenticatorData),clientDataJSON:l(d.clientDataJSON),signature:l(d.signature),userHandle:f},type:w,clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:y(s.authenticatorAttachment)}}export{T as a,g as b,S as s};
