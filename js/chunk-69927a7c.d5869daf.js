(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69927a7c"],{"04d1":function(e,t,i){var s=i("342f"),a=s.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},1148:function(e,t,i){"use strict";var s=i("a691"),a=i("1d80");e.exports=function(e){var t=String(a(this)),i="",n=s(e);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(i+=t);return i}},1276:function(e,t,i){"use strict";var s=i("d784"),a=i("44e7"),n=i("825a"),r=i("1d80"),c=i("4840"),l=i("8aa5"),o=i("50c4"),d=i("14c3"),u=i("9263"),v=i("9f7f"),p=i("d039"),f=v.UNSUPPORTED_Y,h=[].push,g=Math.min,m=4294967295,y=!p((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));s("split",(function(e,t,i){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var s=String(r(this)),n=void 0===i?m:i>>>0;if(0===n)return[];if(void 0===e)return[s];if(!a(e))return t.call(s,e,n);var c,l,o,d=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,f=new RegExp(e.source,v+"g");while(c=u.call(f,s)){if(l=f.lastIndex,l>p&&(d.push(s.slice(p,c.index)),c.length>1&&c.index<s.length&&h.apply(d,c.slice(1)),o=c[0].length,p=l,d.length>=n))break;f.lastIndex===c.index&&f.lastIndex++}return p===s.length?!o&&f.test("")||d.push(""):d.push(s.slice(p)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var a=r(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a,i):s.call(String(a),t,i)},function(e,a){var r=i(s,this,e,a,s!==t);if(r.done)return r.value;var u=n(this),v=String(e),p=c(u,RegExp),h=u.unicode,y=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(f?"g":"y"),S=new p(f?"^(?:"+u.source+")":u,y),_=void 0===a?m:a>>>0;if(0===_)return[];if(0===v.length)return null===d(S,v)?[v]:[];var C=0,b=0,w=[];while(b<v.length){S.lastIndex=f?0:b;var I,M=d(S,f?v.slice(b):v);if(null===M||(I=g(o(S.lastIndex+(f?b:0)),v.length))===C)b=l(v,b,h);else{if(w.push(v.slice(C,b)),w.length===_)return w;for(var x=1;x<=M.length-1;x++)if(w.push(M[x]),w.length===_)return w;b=C=I}}return w.push(v.slice(C)),w}]}),!y,f)},"408a":function(e,t,i){var s=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=s(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,i){var s=i("861d"),a=i("c6b6"),n=i("b622"),r=n("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==a(e))}},"4e82":function(e,t,i){"use strict";var s=i("23e7"),a=i("1c0b"),n=i("7b0b"),r=i("50c4"),c=i("d039"),l=i("addb"),o=i("a640"),d=i("04d1"),u=i("d998"),v=i("2d00"),p=i("512ce"),f=[],h=f.sort,g=c((function(){f.sort(void 0)})),m=c((function(){f.sort(null)})),y=o("sort"),S=!c((function(){if(v)return v<70;if(!(d&&d>3)){if(u)return!0;if(p)return p<603;var e,t,i,s,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(s=0;s<47;s++)f.push({k:t+s,v:i})}for(f.sort((function(e,t){return t.v-e.v})),s=0;s<f.length;s++)t=f[s].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),_=g||!m||!y||!S,C=function(e){return function(t,i){return void 0===i?-1:void 0===t?1:void 0!==e?+e(t,i)||0:String(t)>String(i)?1:-1}};s({target:"Array",proto:!0,forced:_},{sort:function(e){void 0!==e&&a(e);var t=n(this);if(S)return void 0===e?h.call(t):h.call(t,e);var i,s,c=[],o=r(t.length);for(s=0;s<o;s++)s in t&&c.push(t[s]);c=l(c,C(e)),i=c.length,s=0;while(s<i)t[s]=c[s++];while(s<o)delete t[s++];return t}})},"512ce":function(e,t,i){var s=i("342f"),a=s.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},"5a34":function(e,t,i){var s=i("44e7");e.exports=function(e){if(s(e))throw TypeError("The method doesn't accept regular expressions");return e}},"744e":function(e,t,i){"use strict";i("90df")},"8a79":function(e,t,i){"use strict";var s=i("23e7"),a=i("06cf").f,n=i("50c4"),r=i("5a34"),c=i("1d80"),l=i("ab13"),o=i("c430"),d="".endsWith,u=Math.min,v=l("endsWith"),p=!o&&!v&&!!function(){var e=a(String.prototype,"endsWith");return e&&!e.writable}();s({target:"String",proto:!0,forced:!p&&!v},{endsWith:function(e){var t=String(c(this));r(e);var i=arguments.length>1?arguments[1]:void 0,s=n(t.length),a=void 0===i?s:u(n(i),s),l=String(e);return d?d.call(t,l,a):t.slice(a-l.length,a)===l}})},"90df":function(e,t,i){},ab13:function(e,t,i){var s=i("b622"),a=s("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[a]=!1,"/./"[e](t)}catch(s){}}return!1}},addb:function(e,t){var i=Math.floor,s=function(e,t){var r=e.length,c=i(r/2);return r<8?a(e,t):n(s(e.slice(0,c),t),s(e.slice(c),t),t)},a=function(e,t){var i,s,a=e.length,n=1;while(n<a){s=n,i=e[n];while(s&&t(e[s-1],i)>0)e[s]=e[--s];s!==n++&&(e[s]=i)}return e},n=function(e,t,i){var s=e.length,a=t.length,n=0,r=0,c=[];while(n<s||r<a)n<s&&r<a?c.push(i(e[n],t[r])<=0?e[n++]:t[r++]):c.push(n<s?e[n++]:t[r++]);return c};e.exports=s},ae97:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"manage-bill-container"},[e.isLoading?i("div",{class:{"pc-loading":e.isPc,"mobile-loading":!e.isPc}},[i("a-spin",[i("a-icon",{style:{"font-size":"80px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1):e._e(),e.isPc&&"{}"!==JSON.stringify(e.selectedService)?i("div",{staticClass:"manage-bill-service-detail-box"},[i("div",{staticClass:"detail-left-box"},[i("span",{staticClass:"plan-title"},[e._v(e._s("Pending"!==e.selectedService.status?e.getPlanTitle():e.selectedService.name)+" "),i("span",{staticClass:"plan-number"},[e._v("("+e._s("Pending"!==e.selectedService.status?e.selectedService.relid:e.selectedService.id)+")")])]),i("span",{staticClass:"plan-expired-date"},[e._v(e._s("Pending"!==e.selectedService.status?e.formatDate(e.selectedService.expiredTime)+e.$t("ManageBill.Expire"):e.selectedService.regdate+e.$t("MyService.To")+e.getExpireDate()))]),"Active"!==e.selectedService.status?i("div",{staticClass:"other-plan-status-box"},[i("span",{staticClass:"inactive-service",class:{"wait-service-pay":"Pending"===e.selectedService.status}},[e._v(e._s("Pending"===e.selectedService.status?e.$t("MyService.ToPaid"):e.selectedService.inactiveReasons.includes("Terminated")?e.$t("MyService.Stopped"):e.selectedService.inactiveReasons.includes("Expired")?e.$t("MyService.Expired"):e.selectedService.inactiveReasons.includes("ManualStop")?e.$t("MyService.Stopped-Manually"):e.$t("MyService.Stopped-Blacklist")))])]):e._e()]),i("div",{staticStyle:{display:"flex"}},["Pending"===e.selectedService.status||"Active"===e.selectedService.status||e.selectedService.inactiveReasons.includes("Expired")&&!e.selectedService.inactiveReasons.includes("Terminated")?i("div",{staticClass:"detail-left-box"},[i("span",{staticClass:"plan-title"},[e._v(e._s(e.selectedService.recurringamount)+" "),i("span",{staticClass:"plan-number"},[e._v("USD")])]),"Active"===e.selectedService.status?i("span",{staticClass:"plan-renew-span"},[e._v("下次续费 "),i("span",{staticClass:"renew-date"},[e._v(e._s(e.nextRenewDate()))])]):i("span",{staticClass:"plan-renew-span"},[e._v(e._s(e.$t("Annually"===e.selectedService.billingcycle?"MyService.AnnualFee":"Monthly"===e.selectedService.billingcycle?"MyService.MonthlyFee":"MyService.HalfAYearFee")))]),"Active"!==e.selectedService.status?i("div",{staticClass:"bottom-button-box"},[i("a-button",{staticClass:"button cover-button",attrs:{loading:e.iconLoading},on:{click:e.goToRenew}},[i("span",[e._v(e._s("Pending"===e.selectedService.status?e.$t("MyService.GoToPay"):e.$t("MyService.Pay-Immediate")))])]),i("div",{staticClass:"button uncover-button",on:{click:function(t){return e.goToOrderProduct()}}},[i("span",[e._v(e._s(e.$t("MyService.ReOrder")))])])],1):e._e()]):e._e(),"Active"===e.selectedService.status?i("div",{staticClass:"detail-right-button-box"},[i("a-button",{staticClass:"button cover-button",attrs:{loading:e.iconLoading},on:{click:e.goToRenew}},[e._v(e._s(e.checkExpired?e.$t("ManageBill.Pay-Immediate"):e.$t("ManageBill.Pay-In-Advance")))])],1):e._e(),"Inactive"!==e.selectedService.status||!e.selectedService.inactiveReasons.includes("Terminated")&&e.selectedService.inactiveReasons.includes("Expired")?e._e():i("div",{staticClass:"detail-right-button-box"},[void 0!==e.settingsInfo.embedCode&&void 0!==e.settingsInfo.embedCode.CS_CODE&&0!==e.settingsInfo.embedCode.CS_CODE.length?i("a-button",{staticClass:"button cover-button",attrs:{loading:e.iconLoading},on:{click:e.goToSupport}},[e._v(" "+e._s(e.$t("MyService.Contact-Customer-Service"))+" ")]):i("span",{staticStyle:{color:"#A5B1BF"}},[e._v(e._s(e.$t("MyService.Contact-Customer-Service")))])],1)])]):e._e(),e.isPc?i("div",{staticClass:"my-bill-box"},[i("span",{staticClass:"title"},[e._v(e._s(e.$t("ManageBill.My-Bill")))]),i("a-divider",{staticStyle:{"background-color":"#E5E9ED"}}),i("div",{staticClass:"header-row"},[i("span",{staticClass:"header-item"},[e._v(e._s(e.$t("ManageBill.Bill-No")))]),i("div",{staticClass:"header-item span-cursor"},[i("div",{staticClass:"date-group"},[i("div",{staticClass:"type-title-row"},[i("span",[e._v(e._s(e.$t("ManageBill.Generate-Date")))]),i("i",{staticClass:"type-normal",class:{"type-checked":e.status.length>0}})])])]),i("div",{staticClass:"header-item span-cursor"},[i("div",{staticClass:"date-group"},[i("div",{staticClass:"type-title-row"},[i("span",[e._v(e._s(e.$t("ManageBill.Due-Date")))]),i("i",{staticClass:"type-normal",class:{"type-checked":e.status.length>0}})])])]),i("div",{staticClass:"header-item span-cursor"},[i("span",[e._v(e._s(e.$t("ManageBill.Bill-Amount")))]),i("div",{staticClass:"right-up-down"},[i("i",{staticClass:"up-i",class:{"up-blue-i":"EffectiveDateTime"===e.sortBy&&"Asc"===e.sortType}}),i("i",{staticClass:"down-i",class:{"down-blue-i":"EffectiveDateTime"===e.sortBy&&"Desc"===e.sortType}})])]),i("div",{staticClass:"header-item span-cursor"},[i("div",{staticClass:"type-group"},[i("div",{staticClass:"type-title-row"},[i("span",[e._v(e._s(e.$t("ManageBill.Pay-Method")))]),i("i",{staticClass:"type-normal",class:{"type-checked":e.status.length>0}})])])]),i("div",{staticClass:"header-item span-cursor"},[i("div",{staticClass:"type-group"},[i("div",{staticClass:"type-title-row"},[i("span",[e._v(e._s(e.$t("ManageBill.Pay-Status")))]),i("i",{staticClass:"type-normal",class:{"type-checked":e.status.length>0}})])])]),i("span",{staticStyle:{"text-align":"right",width:"10%"}},[e._v(e._s(e.$t("ManageBill.Operation")))])]),i("a-divider",{staticStyle:{"background-color":"#E5E9ED","margin-bottom":"0px"}}),e.loading?i("div",{staticClass:"loading"},[i("a-spin",[i("a-icon",{style:{"font-size":"80px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1):e._e(),e._l(e.billList,(function(t,s){return i("div",{key:s,staticClass:"header-row item-row"},[i("span",{staticClass:"header-item"},[e._v(e._s(t.id))]),i("span",{staticClass:"header-item"},[e._v(e._s(t.date))]),i("span",{staticClass:"header-item"},[e._v(e._s(t.duedate))]),i("span",{staticClass:"header-item"},[e._v(e._s(t.subtotal)+" USD")]),i("span",{staticClass:"header-item"},[e._v(e._s(e.$t("user:service:invoice.paymentmethod."+t.paymentmethod)))]),i("span",{staticClass:"header-item"},[e._v(e._s("Paid"===t.status?e.$t("ManageBill.Paid"):e.$t("ManageBill.Wait-To-Pay")))]),i("div",{staticStyle:{"text-align":"right",width:"10%"}},[i("span",{staticClass:"last-span",class:{"pay-span":"Paid"!==t.status},on:{click:function(i){return e.payOrCheckInvoice(t)}}},[e._v(e._s("Paid"===t.status?e.$t("ManageBill.Check"):e.$t("ManageBill.Pay")))])])])})),e.loading||0!==e.billList.length?e._e():i("div",{staticClass:"empty-data"},[e._v(e._s(e.$t("ManageBill.No-Bill")))])],2):e._e(),e.isPc||"{}"===JSON.stringify(e.selectedService)?e._e():i("div",{staticClass:"manage-bill-service-detail-box-mobile"},[i("span",{staticClass:"plan-title"},[e._v(e._s("Pending"!==e.selectedService.status?e.getPlanTitle():e.selectedService.name)+" "),i("span",{staticClass:"plan-number"},[e._v("("+e._s("Pending"!==e.selectedService.status?e.selectedService.relid:e.selectedService.id)+")")])]),i("div",{staticClass:"plan-expired-date"},[e._v(" "+e._s("Pending"!==e.selectedService.status?e.formatDate(e.selectedService.expiredTime)+e.$t("ManageBill.Expire"):e.selectedService.regdate+e.$t("MyService.To")+e.getExpireDate())+" ")]),i("div",["Active"!==e.selectedService.status?i("span",{staticClass:"service-status",class:{"wait-service-pay":"Pending"===e.selectedService.status}},[e._v(" "+e._s("Pending"===e.selectedService.status?e.$t("MyService.ToPaid"):e.selectedService.inactiveReasons.includes("Terminated")?e.$t("MyService.Stopped"):e.selectedService.inactiveReasons.includes("Expired")?e.$t("MyService.Expired"):e.selectedService.inactiveReasons.includes("ManualStop")?e.$t("MyService.Stopped-Manually"):e.$t("MyService.Stopped-Blacklist"))+" ")]):e._e(),"Pending"===e.selectedService.status||"Active"===e.selectedService.status||!e.selectedService.inactiveReasons.includes("Terminated")&&e.selectedService.inactiveReasons.includes("Expired")?i("div",{staticClass:"other-status-box"},[i("span",{staticClass:"plan-title"},[e._v(e._s(e.selectedService.recurringamount)+" "),i("span",{staticClass:"plan-number"},[e._v("USD")])]),i("span",{staticClass:"service-billingcycle"},[e._v(e._s(e.$t("Active"===e.selectedService.status?"下次续费":"Annually"===e.selectedService.billingcycle?"MyService.AnnualFee":"Monthly"===e.selectedService.billingcycle?"MyService.MonthlyFee":"MyService.HalfAYearFee")))]),"Active"===e.selectedService.status?i("span",{staticClass:"renew-date"},[e._v(e._s(e.nextRenewDate()))]):e._e(),i("div",{staticClass:"bottom-button-box"},[i("a-button",{staticClass:"button cover-button",attrs:{loading:e.iconLoading},on:{click:e.goToRenew}},[i("span",[e._v(e._s("Pending"===e.selectedService.status?e.$t("MyService.GoToPay"):e.$t("MyService.Pay-Immediate")))])]),"Active"!==e.selectedService.status?i("a-button",{staticClass:"button uncover-button",on:{click:function(t){return e.goToOrderProduct()}}},[i("span",[e._v(e._s(e.$t("MyService.ReOrder")))])]):e._e()],1)]):i("div",{staticStyle:{display:"flex"}},[void 0!==e.settingsInfo.embedCode&&void 0!==e.settingsInfo.embedCode.CS_CODE&&0!==e.settingsInfo.embedCode.CS_CODE.length?i("a-button",{staticClass:"reset-support-btn",attrs:{type:"primary",loading:e.iconLoading},on:{click:e.goToSupport}},[e._v(" "+e._s(e.$t("MyService.Contact-Customer-Service"))+" ")]):i("span",{staticStyle:{color:"#A5B1BF","font-size":"0.373rem"}},[e._v(e._s(e.$t("MyService.Contact-Customer-Service2")))])],1)])]),e.isPc?e._e():i("div",{staticClass:"my-bill-box-mobile"},[i("span",{staticClass:"title"},[e._v(e._s(e.$t("ManageBill.My-Bill2")))]),e._l(e.billList,(function(t,s){return i("div",{key:s,staticClass:"item-row-box"},[i("div",{staticClass:"first-row"},[i("div",{staticClass:"first-row-left"},[i("span",{staticClass:"left-top-span"},[e._v(e._s("Paid"===t.status?e.$t("ManageBill.Paid2"):e.$t("ManageBill.Wait-To-Pay2")))]),i("span",{staticClass:"left-bottom-span"},[e._v(e._s(t.subtotal)),i("span",{staticClass:"left-bottom-unit"},[e._v("USD")])])]),i("span",{staticClass:"unpay-span",class:{"pay-span":"Paid"!==t.status},on:{click:function(i){return e.payOrCheckInvoice(t)}}},[e._v(e._s("Paid"===t.status?e.$t("ManageBill.Check2"):e.$t("ManageBill.Pay2")))])]),i("a-divider",{staticClass:"divider-line"}),i("div",{staticClass:"sec-row"},[i("span",{staticClass:"row-left"},[e._v(e._s(e.$t("ManageBill.Bill-No2")))]),i("span",{staticClass:"row-right"},[e._v(e._s(t.id))])]),i("div",{staticClass:"sec-row"},[i("span",{staticClass:"row-left"},[e._v(e._s(e.$t("ManageBill.Generate-Date2")))]),i("span",{staticClass:"row-right"},[e._v(e._s(t.datepaid))])]),i("div",{staticClass:"sec-row"},[i("span",{staticClass:"row-left"},[e._v(e._s(e.$t("ManageBill.Due-Date2")))]),i("span",{staticClass:"row-right"},[e._v(e._s(t.duedate))])]),i("div",{staticClass:"sec-row"},[i("span",{staticClass:"row-left"},[e._v(e._s(e.$t("ManageBill.Pay-Method2")))]),i("span",{staticClass:"row-right"},[e._v(e._s(t.paymentmethod))])])],1)})),e.loading||0!==e.billList.length?e._e():i("div",{staticClass:"empty-data"},[e._v(e._s(e.$t("ManageBill.No-Bill2")))])],2)])},a=[],n=i("5530"),r=(i("7db0"),i("ac1f"),i("1276"),i("159b"),i("8a79"),i("4e82"),i("b680"),i("1c18")),c=i("56cd"),l={name:"ManageBill",data:function(){return{isLoading:!0,isPc:this.$isPc(),sortType:"",sortBy:"",showCancelDialog:!1,billList:[],status:[],statusList:[{type:"全部",ischecked:!1},{type:"开启",status:"Active",ischecked:!1},{type:"停用",status:"Inactive",ischecked:!1}],payMethods:[],payMethodsList:[{key:"全部",ischecked:!1},{key:"支付寶",value:"alipay",ischecked:!1},{key:"微信支付",value:"wepay",ischecked:!1},{key:"银联卡",value:"union",ischecked:!1},{key:"信用卡",value:"visa",ischecked:!1},{key:"PayPal",value:"paypal",ischecked:!1},{key:"加密貨幣",value:"coin",ischecked:!1}],payStatus:[],payStatusList:[{key:"全部",ischecked:!1},{key:"已支付",status:"paid",ischecked:!1},{key:"待支付",status:"unpaid",ischecked:!1}],showMsg:!1,selectedItem:{},trafficArray:[{trafficLimit:"∞",speedLimit:"∞",isAddon:!1,sessionLimit:"∞"}],speedArray:["速度","∞","","","",""],currentTime:(new Date).getTime(),lang:this.$i18n.locale,loading:!0,selectedService:localStorage.getItem(r["m"])?JSON.parse(localStorage.getItem(r["m"])):{},settingsInfo:{},iconLoading:!1,selectedId:0,renewTimer:0}},created:function(){"{}"===JSON.stringify(this.selectedService)?this.getService():(this.isLoading=!1,this.getMoreData())},mounted:function(){this.selectedId=this.$route.params.serviceId},methods:{getMoreData:function(){this.getServiceInfo(),this.getSettingInfo();var e=this;this.$request.auGetAllInvoices("","",(function(t){e.loading=!1,!t||200!==t.status&&201!==t.status||(e.billList=t.data)}))},getSettingInfo:function(){var e=this;this.$request.getSettingInfo((function(t){t&&(200===t.status||201===t.status)&&t.data&&(e.settingsInfo=t.data)}))},getService:function(){var e=this;this.$request.auGetAllServices("","",(function(t){t&&(200===t.status||201===t.status)&&t.data&&(t.data.jjService&&t.data.jjService.length>0?(0!==e.selectedId&&(e.selectedService=t.data.jjService.find((function(t){return String(t.id)===e.selectedId}))),"{}"===JSON.stringify(e.selectedService)&&(e.selectedService=t.data.jjService[0]),localStorage.setItem(r["m"],JSON.stringify(e.selectedService))):t.data.unpaidService&&t.data.unpaidService.length>0&&(e.selectedService=t.data.unpaidService[0],localStorage.setItem(r["m"],JSON.stringify(e.selectedService)))),e.isLoading=!1,e.getMoreData()}))},getPlanTitle:function(){if(this.lang=this.$i18n.locale,this.selectedItem.planName){if("zh-CN"===this.lang&&this.selectedItem.planName["zh-cn"])return this.selectedItem.planName["zh-cn"];if("zh-TW"===this.lang&&this.selectedItem.planName["zh-tw"])return this.selectedItem.planName["zh-tw"];if(this.selectedItem.planName["en"])return this.selectedItem.planName["en"]}return""},getExpireDate:function(){var e=this.selectedService.regdate.split("-"),t=parseInt(e[0]),i=parseInt(e[1]),s=parseInt(e[2]);return"Annually"===this.selectedService.billingcycle?t=parseInt(t)+1:"Monthly"===this.selectedService.billingcycle?(t=i+1>12?t+1:t,i=i+1>12?i-11:i+1):(t=i+6>12?t+1:t,i=i+6>12?i-11:i+6),t+"-"+(i>=10?i:"0"+i)+"-"+(s>=10?s:"0"+s)},nextRenewDate:function(){var e=this.selectedService.nextduedate,t=this.selectedService.billingcycle;return e+" 至 "+this.countValidEndDay("Monthly"===t?1:"Annually"===t?12:6,e)},countValidEndDay:function(e,t){var i=parseInt(t.split("-")[0]),s=parseInt(t.split("-")[1]),a=parseInt(t.split("-")[2]),n=new Date(2020,s+e,0).getDate(),r=s+e>12?i+1:i,c=s+e>12?s+e-12:s+e,l=a>n?n:a;return r+"-"+(c>9?c:"0"+c)+"-"+(l>9?l:"0"+l)},checkExpired:function(){return void 0!==this.selectedItem.expiredTime&&parseInt(this.selectedItem.expiredTime)-this.currentTime<=604800},payOrCheckInvoice:function(e){if(this.isPc){var t=this.$router.resolve({path:"user/invoice/:invoiceId",name:"invoiceDetail",params:{invoiceId:e.id},query:this.$route.query});window.open(t.href,this.$inApp?"_self":"_blank")}else this.$router.push({path:"user/invoice/:invoiceId",name:"invoiceDetail",params:{invoiceId:e.id},query:this.$route.query})},goToSupport:function(){window.open(this.settingsInfo.embedCode.CS_CODE,this.$inApp?"_self":"_blank")},goToRenew:function(){var e="Pending"===this.selectedService.status?this.selectedService.id:this.selectedService.relid;this.iconLoading=!0;var t=this;this.$request.auGetLastInvoice(e,(function(e){if(t.iconLoading=!1,e&&(200===e.status||201===e.status)&&e.data){var i=t.$router.resolve({path:"order/pay",name:"payment",params:{isRenew:!0},query:Object(n["a"])({invoiceId:e.data.id},t.$route.query)});window.open(i.href,t.$inApp?"_self":"_blank"),t.checkRenewStatus()}else c["a"]["warning"]({message:"消息提示",description:"生成續費帳單失敗，請聯繫客服。"})}))},checkRenewStatus:function(){var e=this;if(0===this.renewTimer){this.startPollingTime=(new Date).getTime();var t=this;this.renewTimer=setInterval((function(){e.$request.auGetAllServices("","",(function(e){e&&(200===e.status||201===e.status)&&e.data&&(localStorage.setItem(r["g"],e.data.email),localStorage.setItem(r["h"],e.data.status),e.data.jjService&&e.data.jjService.length>0&&e.data.jjService.forEach((function(e){var i="Pending"===t.selectedService.status?t.selectedService.id:t.selectedService.relid;e.relid===i&&(window.clearInterval(t.renewTimer),t.renewTimer=0,localStorage.setItem(r["m"],JSON.stringify(e)),t.selectedService=e,t.getMoreData())})))})),(new Date).getTime()-t.startPollingTime>18e4&&(window.clearInterval(t.renewTimer),t.renewTimer=0)}),3e3)}},goToOrderProduct:function(){window.open("".concat(window.location.origin,"/order/place"),this.$inApp?"_self":"_blank")},payInvoice:function(e){this.$request.auPayInvoice(e,(function(e){!e||200!==e.status&&201!==e.status||window.open(e.data.redirectUrl,this.$inApp?"_self":"_blank")}))},formatDate:function(e){var t=new Date(e),i=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var a=t.getDate();return a=a<10?"0"+a:a,i+"-"+s+"-"+a},payMethodsChange:function(e){console.log(e)},payStatusChange:function(e){console.log(e)},getServiceInfo:function(){this.trafficArray=[{trafficLimit:"0",speedLimit:0,isAddon:!1,sessionLimit:"∞"}],this.speedArray=["速度","","","","",""];var e=this;this.$request.getServiceInfo((function(t){if(t&&200===t.status){e.selectedItem=t.data;var i=e.selectedItem.dashboardUrl;e.selectedItem["usageDashboardUrl"]=i.substring(0,i.lastIndexOf("&token")),e.selectedItem.email=e.selectedItem.email?e.selectedItem.email.endsWith("@auvpn.net")&&e.selectedItem.email.length>40?"":e.selectedItem.email:"",e.selectedItem["speedDeviceLimit"]=[];var s=[];e.selectedItem.limitRuleDtos.sort((function(e,t){return e.trafficLimit-t.trafficLimit}));var a=e.selectedItem.addon/Math.pow(1024,3);a>0&&(e.trafficArray[0].isAddon=!0,e.trafficArray.push({trafficLimit:a,speedLimit:0,isAddon:!1,sessionLimit:0})),e.selectedItem.limitRuleDtos.length>0?(e.selectedItem.limitRuleDtos.forEach((function(t,i){t.trafficLimit/=Math.pow(1024,3),t.speedLimit=t.speedLimit/Math.pow(1024,2)*8,t.trafficLimit+=a,0===i?0===t.trafficLimit?(e.trafficArray[0].speedLimit=t.speedLimit,e.trafficArray[0].sessionLimit=t.sessionLimit,s.push(t.speedLimit)):(e.trafficArray.push(t),s.push(t.speedLimit),e.trafficArray[0].speedLimit="addon",a>0&&(e.trafficArray[1].speedLimit="addon")):(e.trafficArray.push(t),s.push(t.speedLimit))})),s.sort((function(e,t){return t-e})),s.length>0&&(s[0]>0?(e.speedArray[1]=s[0],e.speedArray[3]=s[0]/2):e.speedArray[1]="∞")):(e.trafficArray[0].speedLimit="∞",a>0&&(e.trafficArray[1].speedLimit="∞"),e.speedArray[1]="∞",1===e.trafficArray.length&&(e.trafficArray[0].trafficLimit="∞"));var n=(parseFloat(e.selectedItem.trafficDn+e.selectedItem.trafficUp)/Math.pow(1024,3)).toFixed(2);e.trafficArray.forEach((function(t,i){i!==e.trafficArray.length-1?n>=parseFloat(t.trafficLimit)&&n<parseFloat(e.trafficArray[i+1].trafficLimit)&&e.selectedItem["speedDeviceLimit"].push(t):n>=parseFloat(t.trafficLimit)&&e.selectedItem["speedDeviceLimit"].push(t)})),0===e.selectedItem["speedDeviceLimit"].length&&e.selectedItem["speedDeviceLimit"].push(e.trafficArray[e.trafficArray.length-1])}else e.infoError=!0,t&&502===t.status&&(e.apiDevelopError=!0)}))},fraudOrder:function(){this.$request.auFraudOrder("","",(function(e){console.log(e)}))}}},o=l,d=(i("744e"),i("2877")),u=Object(d["a"])(o,s,a,!1,null,null,null);t["default"]=u.exports},b680:function(e,t,i){"use strict";var s=i("23e7"),a=i("a691"),n=i("408a"),r=i("1148"),c=i("d039"),l=1..toFixed,o=Math.floor,d=function(e,t,i){return 0===t?i:t%2===1?d(e,t-1,i*e):d(e*e,t/2,i)},u=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},v=function(e,t,i){var s=-1,a=i;while(++s<6)a+=t*e[s],e[s]=a%1e7,a=o(a/1e7)},p=function(e,t){var i=6,s=0;while(--i>=0)s+=e[i],e[i]=o(s/t),s=s%t*1e7},f=function(e){var t=6,i="";while(--t>=0)if(""!==i||0===t||0!==e[t]){var s=String(e[t]);i=""===i?s:i+r.call("0",7-s.length)+s}return i},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){l.call({})}));s({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,i,s,c,l=n(this),o=a(e),h=[0,0,0,0,0,0],g="",m="0";if(o<0||o>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(g="-",l=-l),l>1e-21)if(t=u(l*d(2,69,1))-69,i=t<0?l*d(2,-t,1):l/d(2,t,1),i*=4503599627370496,t=52-t,t>0){v(h,0,i),s=o;while(s>=7)v(h,1e7,0),s-=7;v(h,d(10,s,1),0),s=t-1;while(s>=23)p(h,1<<23),s-=23;p(h,1<<s),v(h,1,1),p(h,2),m=f(h)}else v(h,0,i),v(h,1<<-t,0),m=f(h)+r.call("0",o);return o>0?(c=m.length,m=g+(c<=o?"0."+r.call("0",o-c)+m:m.slice(0,c-o)+"."+m.slice(c-o))):m=g+m,m}})},d998:function(e,t,i){var s=i("342f");e.exports=/MSIE|Trident/.test(s)}}]);
//# sourceMappingURL=chunk-69927a7c.d5869daf.js.map