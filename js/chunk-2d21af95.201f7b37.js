(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21af95"],{be95:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[0===t.channel?a("div",{staticClass:"contact-container"},[a("p",{staticClass:"client-title"},[t._v(t._s(t.$t("help/contact-us.Title")))]),a("p",{staticClass:"client-description"},[t._v(t._s(t.$t("help/contact-us.Subtitle")))]),t.isPc?a("div",{staticClass:"channel-item-container"},[a("div",{staticClass:"channel-item"},[a("i",{staticClass:"channel-icon"}),a("p",{staticClass:"channel-title"},[t._v(t._s(t.$t("help/contact-us.Bullet-1")))]),a("p",{staticClass:"channel-description"},[t._v(t._s(t.$t("help/contact-us.Paragraph-1")))]),a("a-button",{staticClass:"subscribe-btn",attrs:{type:"primary",ghost:""},on:{click:function(e){return t.openZw()}}},[t._v(t._s(t.$t("help/contact-us.Button-1")))])],1),a("div",{staticClass:"channel-item"},[a("i",{staticClass:"channel-icon channel-email-icon"}),a("p",{staticClass:"channel-title"},[t._v(t._s(t.$t("help/contact-us.Bullet-2")))]),a("p",{staticClass:"channel-description"},[t._v(t._s(t.$t("help/contact-us.Paragraph-2")))]),a("a-button",{staticClass:"subscribe-btn",attrs:{type:"primary",ghost:""},on:{click:function(e){return t.openNewRequest()}}},[t._v(t._s(t.$t("help/contact-us.Button-2")))])],1),a("div",{staticClass:"channel-item"},[a("i",{staticClass:"channel-icon channel-phone-icon"}),a("p",{staticClass:"channel-title"},[t._v(t._s(t.$t("help/contact-us.Bullet-3")))]),a("p",{staticClass:"channel-description"},[t._v(t._s(t.$t("help/contact-us.Paragraph-3")))]),a("a-button",{staticClass:"subscribe-btn",attrs:{type:"primary",ghost:""},on:{click:function(e){return t.openZw()}}},[t._v(t._s(t.$t("help/contact-us.Button-3")))])],1)]):t._e(),t.isPc?t._e():a("div",{staticClass:"channel-item-container"},[a("div",{staticClass:"channel-item"},[a("i",{staticClass:"channel-icon"}),a("div",{staticClass:"channel-item-right"},[a("p",{staticClass:"channel-title"},[t._v(t._s(t.$t("help/contact-us.Bullet-1")))]),a("p",{staticClass:"channel-description"},[t._v(t._s(t.$t("help/contact-us.Paragraph-1")))]),a("span",{staticClass:"bottom-description",on:{click:function(e){return t.openZw()}}},[t._v(t._s(t.$t("help/contact-us.Button-1")))])])]),a("div",{staticClass:"channel-item"},[a("i",{staticClass:"channel-icon channel-email-icon"}),a("div",{staticClass:"channel-item-right"},[a("p",{staticClass:"channel-title"},[t._v(t._s(t.$t("help/contact-us.Bullet-2")))]),a("p",{staticClass:"channel-description"},[t._v(t._s(t.$t("help/contact-us.Paragraph-2")))]),a("span",{staticClass:"bottom-description",on:{click:function(e){return t.openNewRequest()}}},[t._v(t._s(t.$t("help/contact-us.Button-2")))])])]),a("div",{staticClass:"channel-item"},[a("i",{staticClass:"channel-icon channel-phone-icon"}),a("div",{staticClass:"channel-item-right"},[a("p",{staticClass:"channel-title"},[t._v(t._s(t.$t("help/contact-us.Bullet-3")))]),a("p",{staticClass:"channel-description"},[t._v(t._s(t.$t("help/contact-us.Paragraph-3"))+"。")]),a("span",{staticClass:"bottom-description",on:{click:function(e){return t.openZw()}}},[t._v(t._s(t.$t("help/contact-us.Button-3")))])])])])]):t._e(),1===t.channel?a("div",{staticClass:"contact-email"},[a("p",{staticClass:"client-title"},[t._v(t._s(t.$t("help/contact-us:ticket.Title")))]),a("a-form",{staticClass:"email-form",attrs:{form:t.form,layout:"vertical"},on:{submit:t.handleSubmit}},[a("a-form-item",{staticClass:"form-item",attrs:{label:t.$t("help/contact-us:ticket.Bullet-1")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:t.$t("help/contact-us:ticket.Text-1")}],initialValue:t.email}],expression:"['email', { rules: [{ required: true, message: $t('help/contact-us:ticket.Text-1') }],initialValue: email }]"}],staticClass:"form-email",attrs:{placeholder:t.$t("help/contact-us:ticket.Text-1")}})],1),a("a-form-item",{staticClass:"form-item",attrs:{label:t.$t("help/contact-us:ticket.Bullet-2")}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["detail",{rules:[{required:!0,message:t.$t("help/contact-us:ticket.Text-2")}]}],expression:"['detail', { rules: [{ required: true, message: $t('help/contact-us:ticket.Text-2') }] }]"}],staticClass:"form-description",attrs:{placeholder:t.$t("help/contact-us:ticket.Text-2"),autoSize:{minRows:8,maxRows:8}}})],1),a("a-form-item",{staticClass:"form-item",attrs:{label:t.$t("help/contact-us:ticket.Bullet-3")}},[a("div",{staticClass:"dropbox"},[a("a-upload-dragger",{directives:[{name:"decorator",rawName:"v-decorator",value:["dragger",{valuePropName:"fileList",getValueFromEvent:t.normFile}],expression:"['dragger',{valuePropName: 'fileList',getValueFromEvent: normFile,},]"}],staticClass:"form-upload-dragger",attrs:{name:"uploaded_data",action:t.uploadUrl,data:t.uploadData,beforeUpload:t.uploadFileCheck},on:{change:t.handleChange}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("i",{staticClass:"form-upload-icon"})]),a("p",{staticClass:"ant-upload-text"},[t._v(" "+t._s(t.isPc?t.$t("help/contact-us:ticket.Bullet-4"):t.$t("help/contact-us:ticket.Bullet-3"))+" ")]),t.isPc?a("p",{staticClass:"ant-upload-hint"},[t._v(" "+t._s(t.$t("help/contact-us:ticket.Text-3"))+" ")]):t._e()])],1)]),a("a-form-item",{staticClass:"form-item-btn"},[a("a-button",{staticClass:"submit-btn",attrs:{type:"primary","html-type":"submit",loading:t.submitLoading}},[t._v(" "+t._s(t.$t("help/contact-us:ticket.Button"))+" ")])],1)],1)],1):t._e()])},i=[],n=(a("99af"),a("b0c0"),{name:"SupportContactUsView",data:function(){return{uploadUrl:this.$zUrl+"/api/v2/uploads",isPc:this.$isPc(),channel:0,uploadData:{filename:""},formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),uploadFIleIds:[],submitLoading:!1,maxFiles:5,email:localStorage.getItem("email")}},props:{channelId:{}},watch:{channelId:{immediate:!0,handler:function(t){"{}"!==JSON.stringify(t)&&(this.channel=t.channelId)}}},methods:{openZw:function(){window.zE("webWidget","open"),setTimeout((function(){document.getElementsByClassName("zEWidget-webWidget--active")[0].contentWindow.document.getElementsByTagName("footer")[0].getElementsByTagName("button")[0].click()}),1e3)},openNewRequest:function(){this.channel=1},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){if(!t){e.submitLoading=!0;var s={request:{requester:{name:a["email"],email:a["email"]},subject:a["detail"],comment:{body:"".concat(a["detail"],"↵↵---------- ↵ 來自").concat(window.location.href),uploads:e.uploadFIleIds}}},i=e;e.$request.postNewRequest(s,(function(t){i.submitLoading=!1,201!==t.status&&200!==t.status||0==t.request.id?i.$notification.open({message:this.$t("help/contact-us:ticket.Warning-1"),onClick:function(){}}):(i.channel=0,i.$notification.open({message:this.$t("help/contact-us:ticket.Notice-1")+"\n"+this.$t("help/contact-us:ticket.Notice-2"),onClick:function(){}}))}))}}))},handleChange:function(t){var e=t.file.status;"done"===e?(this.$message.success("".concat(t.file.name)+this.$t("help/contact-us:ticket.Notice-3")),this.uploadFIleIds.push(t.file.response.upload.token)):e||this.$message.error("".concat(t.file.name)+this.$t("help/contact-us:ticket.Notice-4"))},normFile:function(t){return Array.isArray(t)?t:t&&t.fileList},uploadFileCheck:function(){return this.uploadFIleIds.length<this.maxFiles}}}),c=n,l=a("2877"),o=Object(l["a"])(c,s,i,!1,null,"01ecb7a4",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d21af95.201f7b37.js.map