(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79928399"],{"07f1":function(e,t,i){},"0a8c":function(e,t,i){},1276:function(e,t,i){"use strict";var r=i("d784"),n=i("44e7"),a=i("825a"),s=i("1d80"),o=i("4840"),c=i("8aa5"),l=i("50c4"),u=i("14c3"),h=i("9263"),d=i("9f7f"),g=i("d039"),p=d.UNSUPPORTED_Y,m=[].push,v=Math.min,f=4294967295,S=!g((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));r("split",(function(e,t,i){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var r=String(s(this)),a=void 0===i?f:i>>>0;if(0===a)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,a);var o,c,l,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,p=new RegExp(e.source,d+"g");while(o=h.call(p,r)){if(c=p.lastIndex,c>g&&(u.push(r.slice(g,o.index)),o.length>1&&o.index<r.length&&m.apply(u,o.slice(1)),l=o[0].length,g=c,u.length>=a))break;p.lastIndex===o.index&&p.lastIndex++}return g===r.length?!l&&p.test("")||u.push(""):u.push(r.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var n=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n,i):r.call(String(n),t,i)},function(e,n){var s=i(r,this,e,n,r!==t);if(s.done)return s.value;var h=a(this),d=String(e),g=o(h,RegExp),m=h.unicode,S=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(p?"g":"y"),b=new g(p?"^(?:"+h.source+")":h,S),y=void 0===n?f:n>>>0;if(0===y)return[];if(0===d.length)return null===u(b,d)?[d]:[];var w=0,$=0,k=[];while($<d.length){b.lastIndex=p?0:$;var I,_=u(b,p?d.slice($):d);if(null===_||(I=v(l(b.lastIndex+(p?$:0)),d.length))===w)$=c(d,$,m);else{if(k.push(d.slice(w,$)),k.length===y)return k;for(var O=1;O<=_.length-1;O++)if(k.push(_[O]),k.length===y)return k;$=w=I}}return k.push(d.slice(w)),k}]}),!S,p)},2532:function(e,t,i){"use strict";var r=i("23e7"),n=i("5a34"),a=i("1d80"),s=i("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(a(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},2552:function(e,t,i){"use strict";i("07f1")},"25f0":function(e,t,i){"use strict";var r=i("6eeb"),n=i("825a"),a=i("d039"),s=i("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=o;(u||h)&&r(RegExp.prototype,o,(function(){var e=n(this),t=String(e.source),i=e.flags,r=String(void 0===i&&e instanceof RegExp&&!("flags"in c)?s.call(e):i);return"/"+t+"/"+r}),{unsafe:!0})},"44e7":function(e,t,i){var r=i("861d"),n=i("c6b6"),a=i("b622"),s=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"4d16":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"au-panel-home",staticStyle:{width:"100%",background:"#F6F8FA","min-height":"100%",height:"fit-content",overflow:"auto","text-align":"justify"}},[e.router.endsWith("app")?e._e():i("Header",{class:{"pc-header":e.isPc&&e.router.endsWith("home")},style:{filter:e.headerFilter?"blur(5px)":"unset"}}),i("router-view",{class:{"header-below":e.isPc&&e.router.endsWith("home")},on:{dialogShow:e.filterOpen}})],1)},n=[],a=(i("b0c0"),i("8a79"),i("ac1f"),i("1276"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header-container"},[e.isPc?i("div",{staticClass:"header-content"},[i("div",{staticClass:"header-left",class:{"show-pointer":!e.router.includes("order/place")},on:{click:e.enterHomePage}},[i("i")]),i("div",{staticClass:"header-right"},[e.router.includes("order/")||e.router.includes("user/invoice")?e._e():i("span",{staticClass:"item-help",class:{"checked-router":e.router.endsWith("help")},on:{click:function(t){return e.enterOtherPage("help","support")}}},[e._v(e._s(e.$t("header.help-center")))]),e.router.includes("order/")||e.router.includes("user/invoice")?e._e():i("span",{staticClass:"item-product",class:{"checked-router":e.router.endsWith("order/place")},on:{click:function(t){return e.enterRenewOrOrder()}}},[e._v(e._s(e.$t("{}"!==JSON.stringify(e.selectedService)&&"Pending"!==e.selectedService.status?"前往续费":"header.subscribe-now")))]),e.router.includes("order/")||e.router.includes("user/invoice")||0!==e.serviceChildList.length?e._e():i("div",{staticClass:"item-service",on:{click:function(t){return e.enterOtherPage("user/service","service")}}},[i("span",{class:{"checked-router":e.router.endsWith("service")}},[e._v(e._s(e.$t("header.my-service")))]),i("i",{class:{"down-i":e.isLogin}})]),e.isLogin&&e.serviceChildList.length>0?i("a-popover",{attrs:{placement:"bottom"}},[i("template",{staticStyle:{margin:"0px"},slot:"content"},e._l(e.serviceChildList,(function(t,r){return i("p",{key:r,staticClass:"lang-item",class:{"checked-lang-item":e.router.endsWith(t.value)},on:{click:function(i){return i.stopPropagation(),e.goToChildPage(t)}}},[e._v(" "+e._s(t.key))])})),0),e.router.includes("order/")||e.router.includes("user/invoice")?e._e():i("div",{staticClass:"item-service",on:{click:function(t){return e.enterOtherPage("user/service","service")}}},[i("span",{class:{"checked-router":e.router.endsWith("service")}},[e._v(e._s(e.$t("header.my-service")))]),i("i",{staticClass:"down-i"})])],2):e._e(),e.router.includes("order/")||e.router.includes("ser/invoice")?e._e():i("a-divider",{staticStyle:{margin:"0px 32px",background:"#E5E9ED",height:"16px"},attrs:{type:"vertical"}}),i("a-popover",{attrs:{placement:"bottom"},scopedSlots:e._u([{key:"content",fn:function(){return e._l(e.langList,(function(t,r){return i("p",{key:r,staticClass:"lang-item",class:{"checked-lang-item":t.value===e.lang},on:{click:function(i){return e.switchLang(t)}}},[e._v(e._s(t.key))])}))},proxy:!0}],null,!1,1123172699)},[i("div",{staticClass:"item-service"},[i("span",[e._v(e._s("zh-CN-ct"===e.lang||"zh-CN"===e.lang?"简体中文":"en-US-ct"===e.lang||"en-US"===e.lang?"English":"繁體中文"))]),i("i",{staticClass:"down-i"})])])],1)]):e._e(),e.isPc||e.router.endsWith("order/place")||e.router.includes("/help")?e._e():i("div",{staticClass:"header-content-mobile"},[i("div",{staticClass:"header-menu"},[i("a",{class:{"a-back":e.router.includes("order/")||e.router.includes("user/invoice"),"a-logo":!(e.router.includes(" order/")||e.router.includes("user/invoice"))},style:{opacity:e.router.includes("order/pay")?0:1},on:{click:function(t){return e.enterHomePage()}}}),e.router.includes("order/ ")||e.router.includes("user/invoice")?e._e():i("button",{staticClass:"hamburger hamburger--squeeze",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:e.openMenu}},[e._m(0)])]),i("div",{staticClass:"menu-content",style:{display:e.isOpen?"flex":"none"},attrs:{id:"menu-content"}},[i("a",{staticClass:"header-link",on:{click:function(t){return e.enterOtherPage("help","support")}}},[e._v(e._s(e.$t("header.help-center")))]),i("a-button",{staticClass:"subscribe-btn",attrs:{type:"primary",ghost:""},on:{click:function(t){return e.enterRenewOrOrder()}}},[e._v(" "+e._s(e.$t("{}"!==JSON.stringify(e.selectedService)&&"Pending"!==e.selectedService.status?"前往续费":"header.subscribe-now"))+" ")]),i("a",{staticClass:"header-link",class:"a-top-line",on:{click:function(t){return e.enterOtherPage("user/service","service")}}},[e._v(e._s(e.$t("header.my-service")))]),e.isLogin?i("div",e._l(e.serviceChildList,(function(t,r){return i("a",{key:r,staticClass:"header-link",on:{click:function(i){return i.stopPropagation(),e.goToChildPage(t)}}},[e._v(e._s(t.key))])})),0):e._e(),i("a-radio-group",{staticClass:"lang-switch",model:{value:e.langMb,callback:function(t){e.langMb=t},expression:"langMb"}},e._l(e.langList,(function(t,r){return i("a-radio",{key:r,attrs:{value:t.value===e.lang?1:0},on:{click:function(i){return e.switchLang(t)}}},[e._v(e._s(t.key)+" ")])})),1)],1)])])}),s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"hamburger-box"},[i("span",{staticClass:"hamburger-inner"})])}],o=i("5530"),c=(i("4de4"),i("a9e3"),i("5319"),i("d3b7"),i("25f0"),i("caad"),i("2532"),i("99af"),i("1c18")),l=i("cffa"),u=i("56cd"),h={name:"Header",data:function(){return{serviceChildList:[],langList:[{key:"繁体中文",value:"zh-TW-ct"},{key:"简体中文",value:"zh-CN-ct"},{key:"English",value:"en-US-ct"}],lang:this.$i18n.locale,router:this.$route.path,isLogin:localStorage.getItem("uuid")&&localStorage.getItem("hmac"),selectedService:localStorage.getItem(c["m"])?JSON.parse(localStorage.getItem(c["m"])):{},isPc:this.$isPc(),isOpen:!1,langMb:1}},watch:{$route:function(e){this.router!==e.path&&(this.router=e.path),this.getInfo()}},created:function(){this.updateMenu()},mounted:function(){var e=this;this.$eventBus.$on("update_header",(function(t){t&&(e.selectedService=localStorage.getItem(c["m"])?JSON.parse(localStorage.getItem(c["m"])):{})}))},methods:{updateMenu:function(){this.isLogin=localStorage.getItem(c["n"])&&localStorage.getItem(c["i"]),this.isLogin&&(localStorage.getItem(c["m"])?(this.serviceChildList=[{key:this.$t("header.account"),path:"user/account",name:"manageAccount"},{key:this.$t("header.billing"),path:"invoice",name:"manageBill"},{key:this.$t("header.log-out"),path:"logout"}],this.selectedService=JSON.parse(localStorage.getItem(c["m"]))):this.getInfo())},getInfo:function(){var e=this;this.isLogin=localStorage.getItem(c["n"])&&localStorage.getItem(c["i"]),this.isLogin&&this.$request.auGetAllServices("","",(function(t){if(t&&(200===t.status||201===t.status)&&t.data){if(localStorage.setItem(c["g"],t.data.email),localStorage.setItem(c["h"],t.data.status),t.data.jjService&&t.data.jjService.length>0){if(!localStorage.getItem(c["m"])){var i=t.data.jjService.filter((function(e){return"Active"===e.status}));localStorage.setItem(c["m"],JSON.stringify(i.length>0?i.pop():t.data.jjService[0]))}}else t.data.unpaidService&&t.data.unpaidService.length>0&&(localStorage.getItem(c["m"])||localStorage.setItem(c["m"],JSON.stringify(t.data.unpaidService[0])));localStorage.getItem(c["m"])?(e.serviceChildList=[{key:e.$t("header.account"),path:"user/account",name:"manageAccount"},{key:e.$t("header.billing"),path:"invoice",name:"manageBill"},{key:e.$t("header.log-out"),path:"logout"}],e.selectedService=JSON.parse(localStorage.getItem(c["m"]))):e.serviceChildList=[{key:e.$t("header.account"),path:"user/account",name:"manageAccount"},{key:e.$t("header.log-out"),path:"logout"}]}else e.serviceChildList=[{key:e.$t("header.account"),path:"user/account",name:"manageAccount"},{key:e.$t("header.log-out"),path:"logout"}]}))},switchLang:function(e){this.lang!==e.value&&(this.$route.query["ct"]&&0===Number(this.$route.query["ct"])?this.lang="home"!==this.$route.name?"zh-TW-ct":e.value.toString().replace("-ct",""):this.lang="home"!==this.$route.name?"zh-TW":e.value,this.$emit("switchLang",!0),this.$setupLang(this.lang)),this.isPc||(this.isOpen=!1),this.updateMenu()},enterOtherPage:function(e,t){if(!this.$route.path.endsWith(e))if("user/service"===e){if(!this.$route.path.endsWith("user/login"))if(localStorage.getItem(c["n"])&&localStorage.getItem(c["i"])){if(!this.$route.path.includes(e)||this.$route.path.includes(e)&&this.$route.path.includes("invoice")){var i=localStorage.getItem(c["m"])?JSON.parse(localStorage.getItem(c["m"])).id:0;this.$router.push({path:"/user/service",name:t,params:{serviceId:i},query:Object(o["a"])(Object(o["a"])({},this.$route.query),{},{uuid:localStorage.getItem(c["n"]),hmac:localStorage.getItem(c["i"])})})}}else this.$router.push({path:"user/login",name:"login",query:this.$route.query})}else"help"===e||"order/place"===e?(window.open("".concat(window.location.origin,"/").concat(e),this.$inApp?"_self":"_blank"),"order/place"===e&&gtag("event","try_now_subscribe")):this.$router.push({path:e,name:t,query:Object(o["a"])(Object(o["a"])({},this.$route.query),{},{uuid:localStorage.getItem(c["n"]),hmac:localStorage.getItem(c["i"])})});this.isPc||(this.isOpen=!1)},enterRenewOrOrder:function(){if(this.selectedService=localStorage.getItem(c["m"])?JSON.parse(localStorage.getItem(c["m"])):{},"{}"!==JSON.stringify(this.selectedService)&&"Pending"!==this.selectedService.status){var e=this;this.$request.auGetLastInvoice(e.selectedService.relid,(function(t){if(e.iconLoading=!1,t&&(200===t.status||201===t.status)&&t.data){var i=e.$router.resolve({path:"order/pay",name:"payment",params:{isRenew:!0},query:{invoiceId:t.data.id}});window.open(i.href,e.$inApp?"_self":"_blank")}else u["a"]["warning"]({message:"消息提示",description:"生成續費帳單失敗，請聯繫客服。"})}))}else window.open("".concat(window.location.origin,"/order/place"),this.$inApp?"_self":"_blank"),gtag("event","try_now_subscribe");this.isPc||(this.isOpen=!1)},goToChildPage:function(e){if("logout"===e.path){var t=localStorage.getItem(c["d"]),i=localStorage.getItem(c["c"]);localStorage.clear(),t&&localStorage.setItem(c["d"],t),i&&localStorage.setItem(c["c"],i),this.isLogin=localStorage.getItem(c["n"])&&localStorage.getItem(c["i"]),this.serviceChildList=[],this.$router.push({path:"user/login",name:"login"}),this.selectedService={}}else if(!this.$route.path.endsWith(e.path)){var r=localStorage.getItem(c["m"])?JSON.parse(localStorage.getItem(c["m"])).id:0;this.$router.push({path:"invoice"===e.path?"user/service/:serviceId/invoice":"user/service",name:e.name,params:{serviceId:r},query:this.$route.query})}this.isPc||(this.isOpen=!1)},enterHomePage:function(){this.isPc||!this.isPc&&!this.router.includes("order/")&&!this.router.includes("user/invoice")?"product"!==this.$route.name&&"home"!==this.$route.name&&this.$router.push({path:"",name:"home",query:this.$route.query}):this.isPc||!this.router.includes("order/")&&!this.router.includes("user/invoice")||this.$router.back(-1),this.isPc||(this.isOpen=!1)},openMenu:function(){if(this.isOpen){var e=this;l["a"].fromTo(document.getElementById("menu-content"),.3,{right:"0"},{css:{right:"-100%"},ease:Power0.easeNone,onComplete:function(){e.isOpen=!1}})}else this.isOpen=!0,l["a"].fromTo(document.getElementById("menu-content"),.3,{right:"-100%"},{right:"0",ease:Power0.easeNone})}}},d=h,g=(i("7e25"),i("2552"),i("2877")),p=Object(g["a"])(d,a,s,!1,null,"0eb7fbe5",null),m=p.exports,v=i("9225"),f={name:"AUPanelHome",components:{Header:m},data:function(){return{isPc:this.$isPc(),router:this.$route.name,headerFilter:!1}},watch:{$route:function(e){this.router=this.$route.name}},methods:{filterOpen:function(e){this.headerFilter=e}},created:function(){var e=document.createElement("script");e.setAttribute("src","https://cdn.jsdelivr.net/gh/Joe-Ng-1998/static-elements@au-web/assets/js/TweenMax.min.js"),document.head.appendChild(e);var t=document.createElement("script");t.setAttribute("id","ze-snippet"),t.setAttribute("src","https://static.zdassets.com/ekr/snippet.js?key=8b9d5a65-b475-4d1d-9d56-8b8224e21bae"),document.head.appendChild(t),t.addEventListener("load",(function(){var e="zh-tw";if(null!=window.localStorage.getItem(v["a"])){var t=window.localStorage.getItem(v["a"]);"zh-CN"===t?e="zh-cn":"en-US"===t&&(e=t)}window.localStorage.getItem(c["g"])&&!localStorage.getItem(c["g"]).endsWith("@auvpn.net")&&localStorage.getItem(c["g"]).length<=40&&zE("webWidget","prefill",{name:{value:window.localStorage.getItem(c["g"]).split("@")[0],readOnly:!1},email:{value:window.localStorage.getItem(c["g"]),readOnly:!1},phone:{value:"",readOnly:!1}}),zE("webWidget","setLocale",e)}))}},S=f,b=(i("6b3e"),Object(g["a"])(S,r,n,!1,null,null,null));t["default"]=b.exports},"5a34":function(e,t,i){var r=i("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6b3e":function(e,t,i){"use strict";i("0a8c")},"7e25":function(e,t,i){"use strict";i("cdb6")},"8a79":function(e,t,i){"use strict";var r=i("23e7"),n=i("06cf").f,a=i("50c4"),s=i("5a34"),o=i("1d80"),c=i("ab13"),l=i("c430"),u="".endsWith,h=Math.min,d=c("endsWith"),g=!l&&!d&&!!function(){var e=n(String.prototype,"endsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!g&&!d},{endsWith:function(e){var t=String(o(this));s(e);var i=arguments.length>1?arguments[1]:void 0,r=a(t.length),n=void 0===i?r:h(a(i),r),c=String(e);return u?u.call(t,c,n):t.slice(n-c.length,n)===c}})},ab13:function(e,t,i){var r=i("b622"),n=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[n]=!1,"/./"[e](t)}catch(r){}}return!1}},caad:function(e,t,i){"use strict";var r=i("23e7"),n=i("4d64").includes,a=i("44d2");r({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},cdb6:function(e,t,i){}}]);
//# sourceMappingURL=chunk-79928399.84374239.js.map