var history=function(){"use strict";function t(){}function e(t){return t()}function c(){return Object.create(null)}function n(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,c){t.insertBefore(e,c||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function u(){return d(" ")}function p(){return d("")}function f(t,e,c){null==c?t.removeAttribute(e):t.getAttribute(e)!==c&&t.setAttribute(e,c)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function x(t){m=t}const g=[],y=[],v=[],w=[],b=Promise.resolve();let k=!1;function $(t){v.push(t)}const M=new Set;let z=0;function C(){const t=m;do{for(;z<g.length;){const t=g[z];z++,x(t),H(t.$$)}for(x(null),g.length=0,z=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];M.has(e)||(M.add(e),e())}v.length=0}while(g.length);for(;w.length;)w.pop()();k=!1,M.clear(),x(t)}function H(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const _=new Set;function j(t,e){t&&t.i&&(_.delete(t),t.i(e))}function E(t,c,o,s){const{fragment:l,on_mount:a,on_destroy:i,after_update:d}=t.$$;l&&l.m(c,o),s||$((()=>{const c=a.map(e).filter(r);i?i.push(...c):n(c),t.$$.on_mount=[]})),d.forEach($)}function F(t,e){const c=t.$$;null!==c.fragment&&(n(c.on_destroy),c.fragment&&c.fragment.d(e),c.on_destroy=c.fragment=null,c.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(g.push(t),k||(k=!0,b.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,r,o,s,l,i,d,u=[-1]){const p=m;x(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:c(),dirty:u,skip_bound:!1,root:r.target||p.$$.root};d&&d(f.root);let h=!1;if(f.ctx=o?o(e,r.props||{},((t,c,...n)=>{const r=n.length?n[0]:c;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&L(e,t)),c})):[],f.update(),h=!0,n(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();r.intro&&j(e.$$.fragment),E(e,r.target,r.anchor,r.customElement),C()}x(p)}class V{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(e),()=>{const t=c.indexOf(e);-1!==t&&c.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class S extends V{constructor(t){super(),B(this,t,null,null,o,{})}}function T(t,e,c){const n=t.slice();return n[6]=e[c].id,n[7]=e[c].name,n[8]=e[c].estimation_date,n[9]=e[c].issue_key,n[10]=e[c].severity,n[11]=e[c].priority,n[12]=e[c].summary,n[13]=e[c].description,n[14]=e[c].days_of_work,n[16]=c,n}function O(t){let e,c,n;return{c(){e=i("div"),c=i("p"),n=d(t[0]),f(e,"class","text-center pt-10")},m(t,r){l(t,e,r),s(e,c),s(c,n)},p(t,e){1&e&&h(n,t[0])},d(t){t&&a(e)}}}function A(t){let e,c=t[1],n=[];for(let e=0;e<c.length;e+=1)n[e]=P(T(t,c,e));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=p()},m(t,c){for(let e=0;e<n.length;e+=1)n[e].m(t,c);l(t,e,c)},p(t,r){if(6&r){let o;for(c=t[1],o=0;o<c.length;o+=1){const s=T(t,c,o);n[o]?n[o].p(s,r):(n[o]=P(s),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=c.length}},d(t){!function(t,e){for(let c=0;c<t.length;c+=1)t[c]&&t[c].d(e)}(n,t),t&&a(e)}}}function N(t){let e,c,n,r,o,p,m,x,g,y,v=t[7]+"";function w(){return t[3](t[6],t[7])}return{c(){e=i("div"),c=i("div"),n=i("div"),r=i("p"),r.textContent="Download Link:",o=u(),p=i("a"),m=d(v),x=u(),f(r,"class","text-gray-900 inline-block"),f(p,"class","text-gray-500 ml-1 inline-block"),f(p,"href","javascript:void(0)"),f(n,"class","-m-4 text-center items-center"),f(c,"class","container mx-auto block p-6 rounded-lg shadow-lg bg-white"),f(e,"class","collapse"),f(e,"id","collapse"+t[16])},m(t,a){var i,d,u,f;l(t,e,a),s(e,c),s(c,n),s(n,r),s(n,o),s(n,p),s(p,m),s(e,x),g||(d="click",u=w,(i=p).addEventListener(d,u,f),y=()=>i.removeEventListener(d,u,f),g=!0)},p(e,c){t=e,2&c&&v!==(v=t[7]+"")&&h(m,v)},d(t){t&&a(e),g=!1,y()}}}function D(t){let e,c,n,r,o,p,m,x,g,y,v,w,b,k,$,M,z,C,H,_,j,E,F,L,B,V=t[9]+"",S=t[10]+"",T=t[11]+"",O=t[12]+"",A=t[13]+"",N=t[14]+"";return{c(){e=i("div"),c=i("div"),n=i("table"),r=i("thead"),r.innerHTML='<tr><th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Issue Key</th> \n\t\t\t\t\t\t\t\t\t\t\t\t<th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Severity</th> \n\t\t\t\t\t\t\t\t\t\t\t\t<th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Priority</th> \n\t\t\t\t\t\t\t\t\t\t\t\t<th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Summary</th> \n\t\t\t\t\t\t\t\t\t\t\t\t<th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Description</th> \n\t\t\t\t\t\t\t\t\t\t\t\t<th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Days of Work</th> \n\t\t\t\t\t\t\t\t\t\t\t\t<th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th></tr>',o=u(),p=i("tbody"),m=i("tr"),x=i("td"),g=d(V),y=u(),v=i("td"),w=d(S),b=u(),k=i("td"),$=d(T),M=u(),z=i("td"),C=d(O),H=u(),_=i("td"),j=d(A),E=u(),F=i("td"),L=d(N),B=u(),f(x,"class","px-4 py-3"),f(v,"class","px-4 py-3"),f(k,"class","px-4 py-3"),f(z,"class","px-4 py-3"),f(_,"class","px-4 py-3"),f(F,"class","px-4 py-3 text-lg text-gray-900"),f(n,"class","table-auto w-full text-center whitespace-no-wrap"),f(c,"class","block p-6 rounded-lg shadow-lg bg-white"),f(e,"class","collapse"),f(e,"id","collapse"+t[16])},m(t,a){l(t,e,a),s(e,c),s(c,n),s(n,r),s(n,o),s(n,p),s(p,m),s(m,x),s(x,g),s(m,y),s(m,v),s(v,w),s(m,b),s(m,k),s(k,$),s(m,M),s(m,z),s(z,C),s(m,H),s(m,_),s(_,j),s(m,E),s(m,F),s(F,L),s(e,B)},p(t,e){2&e&&V!==(V=t[9]+"")&&h(g,V),2&e&&S!==(S=t[10]+"")&&h(w,S),2&e&&T!==(T=t[11]+"")&&h($,T),2&e&&O!==(O=t[12]+"")&&h(C,O),2&e&&A!==(A=t[13]+"")&&h(j,A),2&e&&N!==(N=t[14]+"")&&h(L,N)},d(t){t&&a(e)}}}function P(t){let e,c,n,r,o,m,x,g,y,v,w,b,k,$=t[8]+"",M=t[7]+"";function z(t,e){return"Form"==t[7]?D:N}let C=z(t),H=C(t);return{c(){e=i("button"),c=i("div"),n=i("div"),r=i("div"),o=i("h2"),m=d($),x=u(),g=i("div"),y=i("h2"),v=d(M),b=u(),H.c(),k=p(),f(o,"class","title-font font-medium text-2xl text-gray-900"),f(r,"class","p-4 sm:w-1/2 w-1/2"),f(y,"class","special-case title-font font-medium text-2xl text-gray-900 svelte-9r7gj5"),f(g,"class","p-4 sm:w-1/2 w-1/2"),f(n,"class","flex flex-wrap -m-4 text-center"),f(c,"class","container px-5 py-2 mx-auto divide-y divide-dashed"),f(e,"class","accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"),f(e,"type","button"),f(e,"data-bs-toggle","collapse"),f(e,"data-bs-target",w="#collapse"+t[16]),f(e,"aria-expanded","false"),f(e,"aria-controls","collapseExample")},m(t,a){l(t,e,a),s(e,c),s(c,n),s(n,r),s(r,o),s(o,m),s(n,x),s(n,g),s(g,y),s(y,v),l(t,b,a),H.m(t,a),l(t,k,a)},p(t,e){2&e&&$!==($=t[8]+"")&&h(m,$),2&e&&M!==(M=t[7]+"")&&h(v,M),C===(C=z(t))&&H?H.p(t,e):(H.d(1),H=C(t),H&&(H.c(),H.m(k.parentNode,k)))},d(t){t&&a(e),t&&a(b),H.d(t),t&&a(k)}}}function J(t){let e,c,n,r,o,d,p,h,m,x,g,y,v,w,b;e=new S({});let k=t[0]&&O(t),$=t[1]&&A(t);return{c(){var t;(t=e.$$.fragment)&&t.c(),c=u(),n=i("body"),r=i("header"),r.innerHTML='<div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-30"><a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"><svg width="200.94008" height="54.687969" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-14 h-14 text-white p-2 bg-cemex-red rounded-full" viewBox="0 0 24 24"><g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(471.61508,-127.2739)"><path class="shrink svelte-9r7gj5" style="fill:#FFFFFF;fill-opacity:1" d="m -399.69329,127.2779 20.14157,-0.004 -0.12532,0.16378 -45.78858,54.41665 -19.78427,0.0346 45.5566,-54.61115 z" id="path2884" sodipodi:nodetypes="cccccccccccscccccscccccccccccccccccccccscccsscccccscccsccccccccccsssssccccccccccsccccccccccssssscccccsssssccccccccccssscccccccccscccccccsssssccccccccscccccccccccccccccccccccccccccc"></path><path class="shrink svelte-9r7gj5" style="fill:#FFFFFF;fill-opacity:1" d="m -471.6055,181.84225 45.4664,-54.49499 20.16591,0 -0.17379,0.18798 -45.80667,54.42663 -9.87711,0 c -9.4002,0 -9.87217,-0.006 -9.77474,-0.11962 z" id="path2884-1" sodipodi:nodetypes="ccccccc"></path></g></svg> \n\t\t\t\t<a class="ml-3 text-xl text-gray-900 hover:text-gray-900" href="http://127.0.0.1:8000/">EffortPredictor</a></a> \n\t\t\t<nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"><a class="mr-5 hover:text-gray-900 text-gray-900" href="http://127.0.0.1:8000/history/">History</a> \n\t\t\t\t\n\t\t\t\t<a class="mr-5 hover:text-gray-900 text-gray-900" href="http://127.0.0.1:8000/account/">Account</a></nav> \n\t\t\t<button type="button" onclick="location.href=&#39;http://127.0.0.1:8000/accounts/logout&#39;" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log Out\n\t\t\t\t<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z"></path><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z"></path></svg></button></div>',o=u(),d=i("main"),p=i("section"),h=i("div"),m=i("div"),x=i("div"),x.innerHTML='<div class="text-center mb-10"><h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Entries History</h1></div> \n\t\t\t\t\t\t<div class="flex flex-wrap -m-4 text-center"><div class="p-4 pr-1 sm:w-1/2 w-1/2"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="text-cemex-red w-12 h-12 mb-3 inline-block" viewBox="0 0 20 24"><path fill="none" d="M16.254,3.399h-0.695V3.052c0-0.576-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042v0.347H6.526V3.052c0-0.576-0.467-1.042-1.042-1.042S4.441,2.476,4.441,3.052v0.347H3.747c-0.768,0-1.39,0.622-1.39,1.39v11.813c0,0.768,0.622,1.39,1.39,1.39h12.507c0.768,0,1.391-0.622,1.391-1.39V4.789C17.645,4.021,17.021,3.399,16.254,3.399z M14.17,3.052c0-0.192,0.154-0.348,0.348-0.348c0.191,0,0.348,0.156,0.348,0.348v0.347H14.17V3.052z M5.136,3.052c0-0.192,0.156-0.348,0.348-0.348S5.831,2.86,5.831,3.052v0.347H5.136V3.052z M16.949,16.602c0,0.384-0.311,0.694-0.695,0.694H3.747c-0.384,0-0.695-0.311-0.695-0.694V7.568h13.897V16.602z M16.949,6.874H3.052V4.789c0-0.383,0.311-0.695,0.695-0.695h12.507c0.385,0,0.695,0.312,0.695,0.695V6.874z M5.484,11.737c0.576,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043s-1.042,0.467-1.042,1.043C4.441,11.271,4.908,11.737,5.484,11.737z M5.484,10.348c0.192,0,0.347,0.155,0.347,0.348c0,0.191-0.155,0.348-0.347,0.348s-0.348-0.156-0.348-0.348C5.136,10.503,5.292,10.348,5.484,10.348z M14.518,11.737c0.574,0,1.041-0.467,1.041-1.042c0-0.576-0.467-1.043-1.041-1.043c-0.576,0-1.043,0.467-1.043,1.043C13.475,11.271,13.941,11.737,14.518,11.737z M14.518,10.348c0.191,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.156-0.348-0.348C14.17,10.503,14.324,10.348,14.518,10.348z M14.518,15.212c0.574,0,1.041-0.467,1.041-1.043c0-0.575-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042C13.475,14.745,13.941,15.212,14.518,15.212z M14.518,13.822c0.191,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.155-0.348-0.348C14.17,13.978,14.324,13.822,14.518,13.822z M10,15.212c0.575,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042c-0.576,0-1.042,0.467-1.042,1.042C8.958,14.745,9.425,15.212,10,15.212z M10,13.822c0.192,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348s-0.348-0.155-0.348-0.348C9.653,13.978,9.809,13.822,10,13.822z M5.484,15.212c0.576,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042s-1.042,0.467-1.042,1.042C4.441,14.745,4.908,15.212,5.484,15.212z M5.484,13.822c0.192,0,0.347,0.155,0.347,0.347c0,0.192-0.155,0.348-0.347,0.348s-0.348-0.155-0.348-0.348C5.136,13.978,5.292,13.822,5.484,13.822z M10,11.737c0.575,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043c-0.576,0-1.042,0.467-1.042,1.043C8.958,11.271,9.425,11.737,10,11.737z M10,10.348c0.192,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348s-0.348-0.156-0.348-0.348C9.653,10.503,9.809,10.348,10,10.348z"></path></svg> \n\t\t\t\t\t\t\t\t<p class="leading-relaxed">Date</p></div> \n\t\t\t\t\t\t\t<div class="p-4 pr-16 sm:w-1/2 w-1/2"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="text-cemex-red w-12 h-12 mb-3 inline-block" viewBox="0 0 18 24"><path fill="none" d="M19.521,7.267c-0.144-0.204-0.38-0.328-0.631-0.328h-3.582l-0.272-1.826c-0.055-0.379-0.379-0.656-0.76-0.656\n\t\t\t\t\t\t\t\t\t\tH9.802l-0.39-0.891c-0.123-0.279-0.399-0.46-0.704-0.46H1.11c-0.222,0-0.434,0.096-0.58,0.264C0.385,3.537,0.319,3.76,0.349,3.981\n\t\t\t\t\t\t\t\t\t\tl1.673,12.243c0,0,0,0,0,0.002v0.004c0.015,0.113,0.06,0.213,0.119,0.303c0.006,0.009,0.006,0.023,0.012,0.033\n\t\t\t\t\t\t\t\t\t\tc0.012,0.016,0.033,0.024,0.046,0.04c0.054,0.065,0.114,0.118,0.185,0.161c0.027,0.018,0.051,0.035,0.078,0.048\n\t\t\t\t\t\t\t\t\t\tc0.099,0.045,0.206,0.078,0.32,0.078h0.002l0,0h13.03c0.323,0,0.611-0.201,0.722-0.505l3.076-8.416\n\t\t\t\t\t\t\t\t\t\tC19.698,7.735,19.663,7.474,19.521,7.267z M8.203,4.644l0.391,0.889c0.123,0.279,0.399,0.461,0.704,0.461h4.315l0.141,0.944H5.859\n\t\t\t\t\t\t\t\t\t\tc-0.323,0-0.611,0.201-0.723,0.505l-2.011,5.505L1.992,4.644H8.203z M15.276,15.356H3.882l2.515-6.879H17.79L15.276,15.356z"></path></svg> \n\t\t\t\t\t\t\t\t<p class="leading-relaxed">File Name</p></div></div>',g=u(),k&&k.c(),y=u(),$&&$.c(),v=u(),w=i("footer"),w.innerHTML='<div class="px-5 py-0 mx-auto flex items-center sm:flex-row flex-col"><p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 EffortPredictor —\n\t\t\t\t\n\t\t\t\t<a href="javascript:void(0)" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@DedicatedCoders</a></p> \n\t\t\t<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a class="text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a> \n\t\t\t\t\n\t\t\t\t<a class="ml-3 text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a> \n\t\t\t\t\n\t\t\t\t<a class="ml-3 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a> \n\t\t\t\t\n\t\t\t\t<a class="ml-3 text-gray-500"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span></div>',f(r,"class","text-gray-600 body-font z-20 relative"),f(x,"class","container px-5 py-4 mx-auto"),f(m,"class","-my-8 divide-y-2 divide-gray-100"),f(h,"class","container px-0 py-10 mx-auto"),f(p,"class","text-gray-600 body-font overflow-hidden"),f(d,"class","grow"),f(w,"class","text-gray-600 body-font"),f(n,"class","flex flex-col h-full")},m(t,a){E(e,t,a),l(t,c,a),l(t,n,a),s(n,r),s(n,o),s(n,d),s(d,p),s(p,h),s(h,m),s(m,x),s(m,g),k&&k.m(m,null),s(m,y),$&&$.m(m,null),s(n,v),s(n,w),b=!0},p(t,[e]){t[0]?k?k.p(t,e):(k=O(t),k.c(),k.m(m,y)):k&&(k.d(1),k=null),t[1]?$?$.p(t,e):($=A(t),$.c(),$.m(m,null)):$&&($.d(1),$=null)},i(t){b||(j(e.$$.fragment,t),b=!0)},o(t){!function(t,e,c,n){if(t&&t.o){if(_.has(t))return;_.add(t),(void 0).c.push((()=>{_.delete(t),n&&(c&&t.d(1),n())})),t.o(e)}}(e.$$.fragment,t),b=!1},d(t){F(e,t),t&&a(c),t&&a(n),k&&k.d(),$&&$.d()}}}function R(t,e,c){let n,r;function o(t,e){fetch("http://127.0.0.1:8000/history/"+t.id+"/",{method:"GET"}).then((t=>{t.ok?t.text().then((function(t){console.log("Text type"),console.log(typeof t),function(t,e){var c=new Blob([t]);if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(c,e);else{var n=window.document.createElement("a");n.href=window.URL.createObjectURL(c,{type:"text/plain"}),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}}(t,e.name)})):(console.error("Error:",t.statusText),t.text().then((function(t){var e=JSON.parse(t);c(0,n=e.Error)})))})).catch((t=>{console.error("Error:",t),c(0,n=t)}))}fetch("http://127.0.0.1:8000/history/all/").then((t=>{t.ok?(console.log(t),t.json().then((function(t){c(1,r=t.profiles)}))):(console.error("Error:",t.statusText),t.text().then((function(t){var e=JSON.parse(t);c(0,n=e.Error)})))})).catch((t=>{c(0,n=t)}));return[n,r,o,(t,e)=>o({id:t},{name:e})]}return new class extends V{constructor(t){super(),B(this,t,R,J,o,{})}}({target:document.body,props:{name:"History"}})}();