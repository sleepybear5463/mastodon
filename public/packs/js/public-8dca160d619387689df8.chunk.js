(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1083:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(60),r=n.n(o),s=n(99),i=(n(104),n(1085)),c=n(7),l=n(28),d=n(118),u=n(133),m=n(73),g=n(43);var p=n(77),f=n(134),b=n(42);n(951);Object(u.a)();const h=Object(c.d)({usernameTaken:{id:"username.taken",defaultMessage:"That username is taken. Try another"},passwordExceedsLength:{id:"password_confirmation.exceeds_maxlength",defaultMessage:"Password confirmation exceeds the maximum password length"},passwordDoesNotMatch:{id:"password_confirmation.mismatching",defaultMessage:"Password confirmation does not match"}});function w(){const{messages:e}=Object(p.b)(),t=document.documentElement.lang,o=new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),c=new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric",timeFormat:!1}),u=new Intl.DateTimeFormat(t,{timeStyle:"short",hour12:!1}),f=(n,a)=>{let{id:o,defaultMessage:r}=n;return new i.a(e[o]||r,t).format(a)};[].forEach.call(document.querySelectorAll(".emojify"),(e=>{e.innerHTML=Object(g.c)(e.innerHTML)})),[].forEach.call(document.querySelectorAll("time.formatted"),(e=>{const t=new Date(e.getAttribute("datetime")),n=o.format(t);e.title=n,e.textContent=n}));const b=new i.a(e["relative_format.today"]||"Today at {time}",t);[].forEach.call(document.querySelectorAll("time.relative-formatted"),(e=>{const t=new Date(e.getAttribute("datetime"));let n;if((e=>{const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()})(t)){const e=u.format(t);n=b.format({time:e})}else n=c.format(t);e.title=n,e.textContent=n})),[].forEach.call(document.querySelectorAll("time.time-ago"),(e=>{const n=new Date(e.getAttribute("datetime")),a=new Date,r=e.getAttribute("datetime").includes("T");e.title=r?o.format(n):c.format(n),e.textContent=Object(m.b)({formatMessage:f,formatDate:(e,n)=>new Intl.DateTimeFormat(t,n).format(e)},n,a,a.getFullYear(),r)}));const w=document.querySelectorAll("[data-component]");w.length>0&&n.e(441).then(n.bind(null,1539)).then((e=>{let{default:n}=e;[].forEach.call(w,(e=>{[].forEach.call(e.children,(t=>{e.removeChild(t)}))}));const o=document.createElement("div");Object(s.createRoot)(o).render(Object(a.a)(n,{locale:t,components:w})),document.body.appendChild(o)})).catch((e=>{console.error(e)})),Object(l.delegate)(document,"#user_account_attributes_username","input",r()((e=>{let{target:t}=e;t.value&&t.value.length>0?d.a.get("/api/v1/accounts/lookup",{params:{acct:t.value}}).then((()=>{t.setCustomValidity(f(h.usernameTaken))})).catch((()=>{t.setCustomValidity("")})):t.setCustomValidity("")}),500,{leading:!1,trailing:!0})),Object(l.delegate)(document,"#user_password,#user_password_confirmation","input",(()=>{const e=document.getElementById("user_password"),t=document.getElementById("user_password_confirmation");t&&(t.value&&t.value.length>e.maxLength?t.setCustomValidity(f(h.passwordExceedsLength)):e.value&&e.value!==t.value?t.setCustomValidity(f(h.passwordDoesNotMatch)):t.setCustomValidity(""))})),Object(l.delegate)(document,".status__content__spoiler-link","click",(function(){const n=this.parentNode.parentNode;return"expanded"===n.dataset.spoiler?(n.dataset.spoiler="folded",this.textContent=new i.a(e["status.show_more"]||"Show more",t).format()):(n.dataset.spoiler="expanded",this.textContent=new i.a(e["status.show_less"]||"Show less",t).format()),!1})),[].forEach.call(document.querySelectorAll(".status__content__spoiler-link"),(n=>{const a="expanded"===n.parentNode.parentNode.dataset.spoiler?e["status.show_less"]||"Show less":e["status.show_more"]||"Show more";n.textContent=new i.a(a,t).format()}))}window.addEventListener("message",(e=>{const t=e.data||{};window.parent&&"setHeight"===t.type&&Object(b.a)((()=>{window.parent.postMessage({type:"setHeight",id:t.id,height:document.getElementsByTagName("html")[0].scrollHeight},"*")}))})),Object(l.delegate)(document,"#edit_profile input[type=file]","change",(e=>{let{target:t}=e;const n=document.getElementById(t.id+"-preview"),[a]=t.files||[],o=a?URL.createObjectURL(a):n.dataset.originalSrc;n.src=o})),Object(l.delegate)(document,".input-copy input","click",(e=>{let{target:t}=e;t.focus(),t.select(),t.setSelectionRange(0,t.value.length)})),Object(l.delegate)(document,".input-copy button","click",(e=>{let{target:t}=e;const n=t.parentNode.querySelector(".input-copy__wrapper input"),a=n.readonly;n.readonly=!1,n.focus(),n.select(),n.setSelectionRange(0,n.value.length);try{document.execCommand("copy")&&(n.blur(),t.parentNode.classList.add("copied"),setTimeout((()=>{t.parentNode.classList.remove("copied")}),700))}catch(e){console.error(e)}n.readonly=a}));const v=()=>{const e=document.querySelector(".sidebar ul"),t=document.querySelector(".sidebar__toggle__icon");e.classList.contains("visible")?(document.body.style.overflow=null,t.setAttribute("aria-expanded","false")):(document.body.style.overflow="hidden",t.setAttribute("aria-expanded","true")),t.classList.toggle("active"),e.classList.toggle("visible")};Object(l.delegate)(document,".sidebar__toggle__icon","click",(()=>{v()})),Object(l.delegate)(document,".sidebar__toggle__icon","keydown",(e=>{" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),v())})),Object(l.delegate)(document,".custom-emoji","mouseover",(e=>{let{target:t}=e;return t.src=t.getAttribute("data-original")})),Object(l.delegate)(document,".custom-emoji","mouseout",(e=>{let{target:t}=e;return t.src=t.getAttribute("data-static")})),Object(l.delegate)(document,"#registration_new_user,#new_user","submit",(()=>{["user_website","user_confirm_password","registration_user_website","registration_user_confirm_password"].forEach((e=>{const t=document.getElementById(e);t&&(t.value="")}))})),Object(f.a)().then(p.c).then((function(){Object(b.a)(w)})).then((function(){return/KAIOS/.test(navigator.userAgent)?n.e(439).then(n.bind(null,1540)).then((e=>{e.register()})):Promise.resolve()})).catch((e=>{console.error(e)}))},951:function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=0,t=function(){return(new Date).getTime()+e++},n=function(e){return"["+e+"]$1"},a=function(e){return"_"+e+"_$1"},o=function(e,o){e.preventDefault(),e.stopPropagation();var r=o,s=r.getAttribute("data-association"),i=r.getAttribute("data-associations"),c=r.getAttribute("data-association-insertion-template"),l=r.getAttribute("data-association-insertion-method")||r.getAttribute("data-association-insertion-position")||"before",d=r.getAttribute("data-association-insertion-node"),u=r.getAttribute("data-association-insertion-traversal"),m=parseInt(r.getAttribute("data-count"),10),g=new RegExp("\\[new_"+s+"\\](.*?\\s)","g"),p=new RegExp("_new_"+s+"_(\\w*)","g"),f=t(),b=c.replace(g,n(f)),h=[],w=e;for(b===c&&(g=new RegExp("\\[new_"+i+"\\](.*?\\s)","g"),p=new RegExp("_new_"+i+"_(\\w*)","g"),b=c.replace(g,n(f))),h=[b=b.replace(p,a(f))],m=isNaN(m)?1:Math.max(m,1),m-=1;m;)f=t(),b=(b=c.replace(g,n(f))).replace(p,a(f)),h.push(b),m-=1;var v=function(e,t,n){return e?"function"==typeof e?(t&&console.warn("association-insertion-traversal is ignored, because association-insertion-node is given as a function."),e(n)):"string"==typeof e?t?n[t](e):"this"===e?n:document.querySelector(e):void 0:n.parentNode}(d,u,r);v&&0!==v.length||console.warn("Couldn't find the element to insert the template. Make sure your `data-association-insertion-*` on `link_to_add_association` is correct."),h.forEach((function(e,t){var n=e,a=new CustomEvent("cocoon:before-insert",{bubbles:!0,cancelable:!0,detail:[n,w]});if(v.dispatchEvent(a),!a.defaultPrevented){var o={before:"beforebegin",prepend:"afterbegin",append:"beforeend",after:"afterend"},r=o[l],s=v.insertAdjacentHTML(r,n);r===o.before?s=v.previousElementSibling:r===o.prepend?s=v.firstElementChild:r===o.append?s=v.lastElementChild:r===o.after&&(s=v.nextElementSibling);var i=new CustomEvent("cocoon:after-insert",{bubbles:!0,detail:[n,w,s]});v.dispatchEvent(i)}}))},r=function(e,t){var n=t,a=n.getAttribute("data-wrapper-class")||"nested-fields",o=n.closest("."+a),r=o.parentNode,s=e;e.preventDefault(),e.stopPropagation();var i=new CustomEvent("cocoon:before-remove",{bubbles:!0,cancelable:!0,detail:[o,s]});if(r.dispatchEvent(i),!i.defaultPrevented){var c=r.getAttribute("data-remove-timeout")||0;setTimeout((function(){var e;n.classList.contains("dynamic")?(e=o).parentElement.removeChild(e):((function(e,t){var n=e.previousElementSibling;if(!t)return n;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}(n,"input[type=hidden]")).value="1",o.style.display="none");var t=new CustomEvent("cocoon:after-remove",{bubbles:!0,detail:[o,s]});r.dispatchEvent(t)}),c)}};document.addEventListener("click",(function(e){for(var t=e.target;t&&t!==this;t=t.parentNode){if(t.matches(".add_fields"))return void o(e,t);if(t.matches(".remove_fields"))return void r(e,t)}}),!1)}))}},[[1083,0]]]);
//# sourceMappingURL=public-8dca160d619387689df8.chunk.js.map