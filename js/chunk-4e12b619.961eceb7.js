(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e12b619"],{3829:function(t,e,a){"use strict";a("c26d")},"421b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"interchange-container-pc":t.isPc,"interchange-container-mb":!t.isPc}},[a("div",{staticClass:"success-content"},[t.isRenew?t._e():a("div",{class:{"steps-list":t.isLogin,"steps-list-logged":!t.isLogin}},[a("div",{staticClass:"steps-icon"},[a("div",{staticClass:"pay-radio hook number"},[t.isLogin||t.paySuccess?a("i"):t._e(),t.isLogin||t.paySuccess?t._e():a("span",[t._v(t._s(1))])]),t.isLogin?a("div",{staticClass:"pay-radio hook number"},[t.paySuccess?a("i"):t._e(),t.paySuccess?t._e():a("span",[t._v(t._s(2))])]):t._e(),a("div",{staticClass:"pay-radio number",class:{"pay-radio-gray":!t.paySuccess}},[a("span",[t._v(t._s(t.isLogin?3:2))])])]),a("div",{staticClass:"step-lines"},[a("div",{staticClass:"blue-line",class:{"gray-line":!t.isLogin&&!t.paySuccess}}),a("div",{staticClass:"blue-line",class:{"gray-line":!t.paySuccess}})]),a("div",{staticClass:"steps-icon steps-tips"},[a("span",[t._v(t._s(t.isLogin?t.$t("PaymentPage.Choose-Package"):t.$t("PaymentPage.Pay-Bill")))]),t.isLogin?a("span",[t._v(t._s(t.$t("PaymentPage.Pay-Bill2")))]):t._e(),a("span",[t._v(t._s(t.$t("PaymentPage.Pay-Service")))])])]),a("div",{staticClass:"pay-detail-container"},[a("div",{staticClass:"card-wrap"},["{}"===JSON.stringify(t.invoiceInfo)?a("div",{staticClass:"common-box loading-box"},[a("a-spin",[a("a-icon",{staticStyle:{"font-size":"80px",color:"#3963EF",margin:"80px 0px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1):t._e(),!t.isLogin&&t.paySuccess?a("div",{staticClass:"common-box no-account-success-box"},[a("i",{staticClass:"success-icon"}),a("span",{staticClass:"success-title"},[t._v(t._s(t.$t("PaymentPage.Pay-Success")))]),a("span",{staticClass:"success-description"},[t._v(t._s(t.$t("PaymentPage.Check-Email")))])]):t._e(),t.isLogin&&t.paySuccess?a("div",{staticClass:"common-box account-success-box"},[a("span",{staticClass:"success-title"},[t._v(t._s(t.$t("PaymentPage.Pay-Service2")))]),a("span",{staticClass:"success-description"},[t._v(t._s(t.$t("PaymentPage.Service-Ready")))]),a("div",{staticClass:"account-info-box"},[a("AccountAddress",{attrs:{userAccount:t.userAccount}}),a("div",{staticClass:"btn-box"},[a("div",{staticClass:"steps-lines"},[a("a-progress",{attrs:{percent:t.percent,"show-info":!1,size:"small"}})],1),a("a-button",{staticClass:"start-btn",class:{"btn-disabled":!t.gotTheDetail||3!=t.loadSec},attrs:{type:"primary",disabled:!t.gotTheDetail||3!=t.loadSec},on:{click:function(e){return t.startNow()}}},[t._v(" "+t._s(t.$t("PaymentPage.Start-Use"))+" ")])],1)],1)]):t._e(),t.paySuccess||"{}"===JSON.stringify(t.invoiceInfo)?t._e():a("div",{staticClass:"common-box paying-box"},[a("div",{staticClass:"paying-invoice-detail-box"},[t.paySuccess?t._e():a("div",{staticClass:"first-row-box"},[a("span",{staticClass:"price-span"},[t._v(t._s(t.invoiceInfo.balance)),a("span",{staticClass:"unit-span"},[t._v("USD")])]),a("span",[t._v(t._s(t.$t("PaymentPage.Bill-No"))+": "+t._s(t.invoiceInfo.invoiceid))])]),t.paySuccess?t._e():a("span",[t._v(t._s(t.$t("PaymentPage.Pay-Date"))+": "+t._s(t.invoiceInfo.duedate))]),t.isLogin&&!t.paySuccess?a("span",{staticClass:"check-invoice-detail",on:{click:function(e){return t.enterInvoiceDetail()}}},[t._v(t._s(t.$t("PaymentPage.Bill-Detail")))]):t._e()]),a("div",{staticClass:"payment-box"},[t.paySuccess?t._e():a("div",{staticClass:"switch-pay-method"},[t._m(0),t._e()]),t.paySuccess?t._e():a("div",{staticClass:"pay-status-box"},[t.isPaying?a("div",{staticClass:"pay-sync",attrs:{id:"pay-sync"}},[t.paySuccess||t.payFailed?t._e():a("a-spin",[a("a-icon",{staticStyle:{"font-size":"24px",color:"#3963EF"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1),t.paySuccess&&!t.payFailed?a("a-icon",{attrs:{type:"check-circle",theme:"twoTone",twoToneColor:"#44B496"}}):t._e(),t.payFailed?a("a-icon",{attrs:{type:"close-circle",theme:"twoTone",twoToneColor:"#F2585E"}}):t._e(),a("span",{staticClass:"sync-result"},[t._v(t._s(t.payStatus))])],1):t._e(),!t.payFailed&&t.isPaying||t.paySuccess?a("span",{staticClass:"pay-tips-center"},[t._v(t._s(t.footerText))]):t._e(),t.payFailed&&t.isPaying?a("span",{staticClass:"pay-tips-center"},[t._v(t._s(t.$t("PaymentPage.Pay-Fail"))),a("a",{on:{click:function(e){return t.openZendesk()}}},[t._v(t._s(t.$t("PaymentPage.Contact-Customer-Service")))])]):t._e(),t.gotTheDetail?a("div",{staticClass:"btn-container",attrs:{id:"btn-container"}},[a("a-button",{staticClass:"submit-btn",attrs:{type:"primary",id:"submit-btn",disabled:!t.gotTheDetail},on:{click:function(e){return t.payNow()}}},[t._v(" "+t._s(t.isPaying?"":t.invoiceInfo.balance+" USD")+" "+t._s(t.btnTips)+" ")]),t.isPaying?t._e():a("a",{staticClass:"submit-btn",staticStyle:{position:"absolute","background-color":"transparent !important"},attrs:{href:t.payUrl,target:"_blank"},on:{click:function(e){return t.payNow()}}}),a("a-button",{staticClass:"submit-btn2",attrs:{type:"primary",id:"submit-btn2",ghost:""},on:{click:function(e){return t.userPaid()}}},[t._v(" "+t._s(t.$t("PaymentPage.Already-Pay"))+" ")])],1):t._e()])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-pay-method"},[a("span",[t._v("支付寶支付")]),a("i",{staticClass:"alipay"})])}],n=(a("a9e3"),a("99af"),a("b0c0"),a("cffa")),o=a("9225"),c=a("f466"),r=a("1c18"),l=(a("0c12"),{name:"payment",components:{AccountAddress:c["a"]},data:function(){return{userAccount:{},loading:!1,resendTip:!1,secondNum:60,invoiceInfo:{},isAndroid:!1,isIos:!1,isPc:this.$isPc(),isLogged:!1,isLogin:!1,isRenew:!1,btnTips:this.$t("order/pay.Status-1"),payStatus:this.$t("order/pay.Paragraph-1"),paySuccess:!1,payFailed:!1,invoiceId:0,intervalId:"",footerText:this.$t("order/pay.Paragraph-2"),payMethodList:[{id:0,name:"order/place:screen4.Tab1",logo:[{name:"alipay",url:"pay/alipay.svg"}],type:"pkjeub-alipay"}],isSentData:!1,payUrl:"",isPaying:!1,gotTheDetail:!1,userMaxRetry:1,retryCount:0,isUserRetry:!1,selectedMethod:localStorage.getItem("payMethodIndex")?Number(localStorage.getItem("payMethodIndex")):0,selectedOtherMethod:{},showMethodList:!1,startPollingTime:0,oldStatus:"",gtagData:void 0,inApp:"true"===localStorage.getItem(r["j"]),loadSec:0,percent:0}},created:function(){if(this.isLogin=localStorage.getItem(r["n"])&&localStorage.getItem(r["i"]),this.$route.query&&this.$route.query.invoiceId&&(this.invoiceId=this.$route.query.invoiceId),this.$route.params.redirect&&(this.payUrl=this.$route.params.redirect),this.$route.params.gtagData&&(this.gtagData=this.$route.params.gtagData),this.$route.params.isRenew&&(this.isRenew=this.$route.params.isRenew),0!==this.invoiceId){if(0===this.payUrl.length){var t=this;this.$request.auPayInvoice(this.invoiceId,(function(e){e&&(200===e.status||201===e.status)&&e.data&&(t.payUrl=e.data.redirectUrl)}))}this.getInvoiceDetail()}},mounted:function(){},destroyed:function(){window.clearInterval(this.intervalId)},methods:{enterInvoiceDetail:function(){var t={invoiceId:this.invoiceId};this.$router.push({path:"user/invoice",name:"invoiceDetail",params:t,query:this.$route.query})},startNow:function(){window.open("".concat(window.location.origin,"?uuid=").concat(localStorage.getItem(r["n"]),"&hmac=").concat(localStorage.getItem(r["i"])),this.$inApp?"_self":"_blank")},payNow:function(){if(0!=this.invoiceId){var t=this;if(this.isPaying)t.payUrl?window.open(t.payUrl,"_blank"):t.$request.auPayInvoice(t.invoiceId,(function(e){e&&(200===e.status||201===e.status)&&e.data&&(t.payUrl=e.data.redirectUrl,window.open(t.payUrl,"_blank"))})),t.isUserRetry&&(t.payStatus=t.$t("order/pay.Paragraph-1"),t.payFailed=!1,t.isUserRetry=!1,t.retryCount=0,t.startPolling());else if(this.paySuccess)window.open("".concat(window.location.origin,"/my/service"),this.$inApp?"_self":"_blank");else if(0===this.intervalId.length){if(this.gtagData){var e={coupon:this.gtagData.coupon,currency:"USD",value:this.gtagData.value,traffic_type:this.gtagData.traffic_type,items:[{item_id:this.gtagData.items.item_id,item_name:this.gtagData.items.item_name,affiliation:localStorage.getItem(r["e"])?localStorage.getItem(r["e"]):"",promotion_id:0,promotion_name:"none",item_variant:this.gtagData.items.item_variant,price:this.gtagData.value,currency:"USD",coupon:this.gtagData.coupon}]};this.inApp?window.InappWebInterface&&window.InappWebInterface.webEvent("begin_checkout",JSON.stringify(e)):gtag("event","begin_checkout",e)}this.isPaying=!0,n["a"].fromTo(document.getElementById("btn-container"),.3,{marginTop:"0"},{css:{marginTop:t.isPc?"30px":"0.4rem"},onStart:function(){n["a"].fromTo(document.getElementById("submit-btn"),.4,{width:t.isPc?"386px":"7.867rem",left:"0"},{width:t.isPc?"176px":"3.68rem",left:t.isPc?"210px":"4.187rem"}),n["a"].fromTo(document.getElementById("submit-btn2"),.4,{width:t.isPc?"386px":"7.867rem"},{css:{width:t.isPc?"176px":"3.68rem"},onComplete:function(){t.btnTips=t.$t("order/pay.Button-2"),t.invoiceInfo.status!==o["b"].t("Paid")&&(t.payUrl?window.open(t.payUrl,"_blank"):t.$request.auPayInvoice(t.invoiceId,(function(e){e&&(200===e.status||201===e.status)&&e.data&&(t.payUrl=e.data.redirectUrl,window.open(t.payUrl,"_blank"))})))}})}}),n["a"].fromTo(document.getElementById("pay-sync"),.4,{opacity:0},{opacity:1}),this.startPolling()}else this.$notification.open({message:this.$t("order/pay.Fail-4"),onClick:function(){}})}else this.$notification.open({message:this.$t("order/pay.Fail-4"),onClick:function(){}})},userPaid:function(){this.payFailed?this.$notification.open({message:this.$t("order/pay.Fail-1"),onClick:function(){}}):(this.payStatus=this.$t("order/pay.Status-3"),this.getInvoiceDetail(),this.isUserRetry=!0)},getInvoiceDetail:function(){var t=this;this.$request.auGetInvoiceDetail(this.invoiceId,(function(e){if(!e||200!==e.status&&201!==e.status)t.$notification.open({message:"獲取訂單詳情失敗，請稍後重試",onClick:function(){}});else if(t.gotTheDetail=!0,t.invoiceInfo.invoiceid=e.data.invoiceid,t.invoiceInfo.balance=t.isLogin?e.data.total:e.data.subtotal,t.invoiceInfo.duedate=e.data.duedate,t.invoiceInfo.date=e.data.date,t.invoiceInfo.status=o["b"].t("Paid"===e.data.status?"order/pay.Status-2":"order/pay.Item-6"),t.invoiceInfo=Object.assign({},t.invoiceInfo,""),0===t.oldStatus.length&&(t.oldStatus=e.data.status),"Paid"===e.data.status){if("Unpaid"===t.oldStatus){var a=document.createElement("div");a.setAttribute("style","display: none; visibility: hidden"),a.innerHTML='<script  type="application/javascript" src="https://a.exoclick.com/tag_gen.js" data-goal="be98d96266307dc8cbedc8001331a95a"><\/script>',document.body.appendChild(a),t.oldStatus=e.data.status,t.pushPurchaseEvent(e)}window.clearInterval(t.intervalId),t.userAccount={address:"".concat(window.location.origin,"?uuid=").concat(localStorage.getItem(r["n"]),"&hmac=").concat(localStorage.getItem(r["i"])),isFromPaymentPage:!0},t.isPaying=!1,t.paySuccess=!0;var s=setInterval((function(){3!==t.loadSec?(t.loadSec++,t.percent+=3===t.loadSec?34:33):window.clearInterval(s)}),1e3);if(window.InappWebInterface){var i={uuid:localStorage.getItem(r["n"]),hmac:localStorage.getItem(r["i"])};window.InappWebInterface.webEvent("account",JSON.stringify(i))}}else t.isUserRetry&&(t.retryCount>t.userMaxRetry&&(window.clearInterval(t.intervalId),t.intervalId="",t.payFailed=!0,t.payStatus=t.$t("order/pay.Fail-1")),t.retryCount++)}))},pushPurchaseEvent:function(t){var e=[];e.push({item_id:t.data.pid,item_name:t.data.name,promotion_id:0,promotion_name:"",coupon:t.data.coupon,affiliation:localStorage.getItem(r["e"])?localStorage.getItem(r["e"]):"",item_variant:t.data.cycle,price:this.isLogin?t.data.total:t.data.subtotal,currency:"USD"});var a={affiliation:localStorage.getItem(r["e"])?localStorage.getItem(r["e"]):"",coupon:t.data.coupon,currency:"USD",items:e,transaction_id:t.data.transid,shipping:0,value:this.isLogin?t.data.total:t.data.subtotal,tax:0,traffic_type:"normal"};this.inApp?window.InappWebInterface&&window.InappWebInterface.webEvent("purchase",JSON.stringify(a)):gtag("event","purchase",a),fbq("track","Purchase",{currency:"USD",value:this.isLogin?t.data.total:t.data.subtotal}),twq("track","Purchase",{value:this.isLogin?t.data.total:t.data.subtotal,currency:"USD",num_items:"1"}),dablena("track","Purchase",{value:this.isLogin?t.data.total:t.data.subtotal,currency:"USD"}),this.$eventFire.purchase(),a.value>=1?this.$eventFire.subscribe():this.$eventFire.startTrial()},startPolling:function(){var t=this;0===t.intervalId.length&&(t.startPollingTime=(new Date).getTime(),t.intervalId=setInterval((function(){(new Date).getTime()-t.startPollingTime>18e4?(window.clearInterval(t.intervalId),t.startPollingTime=(new Date).getTime(),t.intervalId=setInterval((function(){(new Date).getTime()-t.startPollingTime>6e5?(window.clearInterval(t.intervalId),t.intervalId=""):t.getInvoiceDetail()}),8e3)):t.getInvoiceDetail()}),4e3))},openZendesk:function(){window.zE("webWidget","toggle")}}}),d=l,u=(a("3829"),a("2877")),p=Object(u["a"])(d,s,i,!1,null,null,null);e["default"]=p.exports},"44e7":function(t,e,a){var s=a("861d"),i=a("c6b6"),n=a("b622"),o=n("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,a){var s=a("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"75c2":function(t,e,a){},"88a7":function(t,e,a){"use strict";a("75c2")},"8a79":function(t,e,a){"use strict";var s=a("23e7"),i=a("06cf").f,n=a("50c4"),o=a("5a34"),c=a("1d80"),r=a("ab13"),l=a("c430"),d="".endsWith,u=Math.min,p=r("endsWith"),y=!l&&!p&&!!function(){var t=i(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!y&&!p},{endsWith:function(t){var e=String(c(this));o(t);var a=arguments.length>1?arguments[1]:void 0,s=n(e.length),i=void 0===a?s:u(n(a),s),r=String(t);return d?d.call(e,r,i):e.slice(i-r.length,i)===r}})},ab13:function(t,e,a){var s=a("b622"),i=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[i]=!1,"/./"[t](e)}catch(s){}}return!1}},c26d:function(t,e,a){},f466:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"account-address-box":t.isPc,"account-address-box-mobile":!t.isPc}},[t._m(0),t._e(),a("div",{staticClass:"content-left-box"},[0===t.userAddress.length?a("a-button",{staticClass:"btn-create-account",attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.createAccount.apply(null,arguments)}}},[t._v(t._s(t.$t("AccountAddress.Create-Account")))]):t._e(),t.userAddress.length>0?a("div",{staticStyle:{display:"flex","flex-direction":"column",width:"100%"}},[a("div",{staticStyle:{position:"relative",display:"flex",width:"100%"}},[a("span",{staticClass:"span-address"},[t._v(t._s(t.userAddress))]),a("a-tooltip",{attrs:{placement:"top",trigger:"click",mouseLeaveDelay:1,destroyTooltipOnHide:!0,visible:!t.hideCopyTips}},[a("template",{slot:"title"},[a("span",[t._v(t._s(t.$t("CreateAccount.Copied")))])]),a("span",{staticClass:"copy-tips",on:{click:function(e){return e.stopPropagation(),t.copyAccountInfo.apply(null,arguments)},mouseleave:function(e){t.hideCopyTips=!0}}},[t._v(t._s(t.$t("CreateAccount.Copy-Account-Address")))])],2)],1),a("a-divider",{staticStyle:{"background-color":"#DEE2E8",margin:"0px"}}),a("div",{staticClass:"download-favorite-box"},[a("div",{staticClass:"item-box",on:{click:function(e){return e.stopPropagation(),t.downloadAuAccountInfo.apply(null,arguments)}}},[t.isPc?a("span",{staticClass:"download-span"},[t._v(t._s(t.$t("AccountAddress.Download-Account-Info")))]):t._e(),a("a-tooltip",{attrs:{placement:"top",trigger:"click",mouseLeaveDelay:.5,destroyTooltipOnHide:!0}},[a("template",{slot:"title"},[a("span",[t._v(t._s(t.$t("AccountAddress.Copied")))])]),t.isPc?t._e():a("span",{staticClass:"download-span",on:{click:function(e){return e.stopPropagation(),t.downloadAuAccountInfo()}}},[t._v(t._s(t.$t("AccountAddress.Copy-Account-Info")))])],2)],1),a("a-divider",{staticClass:"divider",attrs:{type:"vertical"}}),t.isPc?a("div",{staticClass:"item-box item-bookmark"},[a("span",{staticClass:"download-span favorite-span",staticStyle:{color:"#3963EF"}},[t._v(t._s(t.$t("AccountAddress.Draw-To-Bookmark")))]),a("a",{staticStyle:{position:"absolute",opacity:"0.1"},attrs:{href:t.userAddress},on:{click:function(e){return e.preventDefault(),t.preventOpenAUAdress.apply(null,arguments)}}},[t._v(t._s(t.$t("AccountAddress.Au-Account")))])]):t._e(),t.isPc?t._e():a("div",{staticClass:"item-box",on:{click:function(e){return e.stopPropagation(),t.addToDeviceDesktop()}}},[a("span",{staticClass:"download-span favorite-span",staticStyle:{color:"#3963EF"}},[t._v(t._s(t.$t("AccountAddress.Add-Mobile-Desktop")))])])],1)],1):t._e()],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"all-tips"},[a("li",{staticClass:"row-tips"},[t._v("auVPN 不使用密碼登入。")]),a("li",{staticClass:"row-tips"},[t._v("登入鏈接為登入唯一途徑，請妥善保存。")]),a("li",{staticClass:"row-tips"},[t._v("可用帳戶郵箱隨時取回登入鏈接。")]),a("li",{staticClass:"row-tips"},[t._v("匿名帳戶沒留郵箱，丟失私密鏈接後無法取回。")])])}],n=(a("8a79"),a("99af"),a("1c18")),o={name:"AccountAddress",data:function(){return{isPc:this.$isPc(),userAddress:"",hideCopyTips:!0,showBottomTips:!this.$route.path.endsWith("order/pay")&&localStorage.getItem(n["n"])&&localStorage.getItem(n["i"])&&localStorage.getItem(n["m"])}},props:{userAccount:{}},watch:{userAccount:{immediate:!0,handler:function(t){void 0!==t&&(this.userAddress=t.address)}}},mounted:function(){!this.$route.path.endsWith("order/pay")&&localStorage.getItem(n["n"])&&localStorage.getItem(n["i"])&&(this.userAddress="https://www.ausvc.link?uuid=".concat(localStorage.getItem(n["n"]),"&hmac=").concat(localStorage.getItem(n["i"])))},methods:{preventOpenAUAdress:function(){},copyAccountInfo:function(){var t=document.createElement("textarea");t.value=this.userAddress,t.readOnly=!0,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="textarea",t.style.display="none";var e=this;setTimeout((function(){e.hideCopyTips=!0}),1500),this.hideCopyTips=!1},downloadAuAccountInfo:function(){if(this.isPc){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent("· ".concat(this.$t("AccountAddress.Address-Login-Save"),"\n· ").concat(this.userAddress,"\n")+"· auVPN 不使用密碼登入。\n· 私密鏈接為登入唯一途徑，請妥善保存。\n· 可用帳戶郵箱隨時取回登入鏈接。\n· 匿名帳戶沒留郵箱，丟失登入鏈接後無法取回。")),t.setAttribute("download","auVPN 帳戶登入鏈接（請妥善保存）"),t.style.display="none",t.click()}else{var e=document.createElement("textarea");e.value=this.userAddress,e.readOnly=!0,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.className="textarea",e.style.display="none"}},addToDeviceDesktop:function(){},createAccount:function(){var t={recaptchaToken:"333333"},e=this;this.$request.auCreatedNewAddress(t,(function(t){t&&(200===t.status||201===t.status)&&t.data&&(localStorage.setItem(n["n"],t.data.uuid),localStorage.setItem(n["i"],t.data.hmac),e.userAddress=t.data.userAddress)}))}}},c=o,r=(a("88a7"),a("2877")),l=Object(r["a"])(c,s,i,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-4e12b619.961eceb7.js.map