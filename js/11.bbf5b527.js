(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AndroidAds.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fingerprintjs/fingerprintjs */ \"./node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AndroidAds\",\n  data: function data() {\n    return {\n      showPanel: false,\n      auadid: '',\n      ct: 1,\n      cl: 1,\n      isPc: this.$isPc(),\n      androidDownloadLink: ''\n    };\n  },\n  created: function created() {\n    console.log(this.isPc);\n\n    if (this.$route.query.ct || this.$route.query.cl) {\n      this.ct = this.$route.query.ct;\n      this.cl = this.$route.query.cl; // this.$router.replace({query: _.omit(this.$route.query, ['ct', 'cl'])})\n    }\n\n    this.getAndroidDownloadLink(); // event fire\n\n    this.$eventFire.viewContent();\n  },\n  methods: {\n    getAndroidDownloadLink: function getAndroidDownloadLink() {\n      var that = this;\n      this.$request.auGetAppDownloadLink('android', function (data) {\n        if ((data.status === 200 || data.status === 201) && data.data) {\n          that.androidDownloadLink = data.data.url;\n        }\n      });\n    },\n    clickShowPanel: function clickShowPanel() {\n      this.showPanel = !this.showPanel;\n    },\n    copyAuadid: function copyAuadid() {\n      var input = document.createElement(\"input\");\n      input.value = this.auadid;\n      document.body.appendChild(input);\n      input.select(); // 选择对象\n\n      document.execCommand(\"Copy\"); // 执行浏览器复制命令\n\n      input.className = \"input\";\n      input.style.display = \"none\";\n\n      if (navigator.clipboard) {\n        navigator.clipboard.writeText(this.auadid).then(function () {\n          console.log('Async: Copying to clipboard was successful!');\n        }, function (err) {\n          console.error('Async: Could not copy text: ', err);\n        });\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    // To avoid sending request before loading finger print result. Moving those logics to component level.\n    Object(_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var agent, result, jsonResult, that;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load();\n\n            case 2:\n              agent = _context.sent;\n              _context.next = 5;\n              return agent.get();\n\n            case 5:\n              result = _context.sent;\n              result.components.canvas = '{}';\n              jsonResult = JSON.stringify(result);\n              that = _this;\n\n              _this.$request.postUploadAdsFpRequest(jsonResult, function (data) {\n                if (data.data && data.data.auadid) {\n                  that.auadid = data.data.auadid; // const el = document.createElement('textarea');\n                  // el.value =  data.data.auadid;\n                  // document.body.appendChild(el);\n                  // el.focus();\n                  // el.select();\n                  // document.execCommand('copy');\n                  // document.body.removeChild(el);\n                  // navigator.clipboard.writeText(data.data.auadid).then(function() {\n                  //   console.log('Async: Copying to clipboard was successful!');\n                  //   that.$message.info(`Async: Copying to clipboard was successful!`);\n                  //\n                  // }, function(err) {\n                  //   console.error('Async: Could not copy text: ', err);\n                  //   that.$message.info(`Async: Could not copy text: ${err}`);\n                  //\n                  // });\n                }\n              });\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"f81136d4-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=template&id=1280e8fb&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f81136d4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AndroidAds.vue?vue&type=template&id=1280e8fb& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      class: {\n        \"landing-container-pc\": _vm.isPc,\n        \"landing-container-mb\": !_vm.isPc\n      }\n    },\n    [\n      _c(\"div\", { staticClass: \"preload-image\" }, [\n        _c(\"div\", { staticClass: \"part-one\" }, [\n          _c(\"div\", { staticClass: \"au-logo\" }),\n          _c(\"div\", { staticClass: \"title-container\" }, [\n            _c(\"div\", { staticClass: \"header-title\" }, [\n              _vm._v(_vm._s(_vm.$t(\"androidads.title-1\")))\n            ]),\n            _c(\"div\", { staticClass: \"header-title\" }, [\n              _vm._v(_vm._s(_vm.$t(\"androidads.title-2\")))\n            ]),\n            _c(\"div\", { staticClass: \"sub-title\" }, [\n              _vm._v(_vm._s(_vm.$t(\"androidads.subtitle\")))\n            ])\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"part-two\" }, [\n          _c(\"div\", { staticClass: \"describe-container\" }, [\n            _c(\"div\", { staticClass: \"describe-picture picture-one\" }),\n            _c(\"div\", { staticClass: \"describe-titles\" }, [\n              _c(\"div\", { staticClass: \"title\" }, [\n                _vm._v(_vm._s(_vm.$t(\"androidads.describe-title-1\")))\n              ]),\n              _c(\"div\", { staticClass: \"sub-title\" }, [\n                _vm._v(_vm._s(_vm.$t(\"androidads.describe-subtitle-1\")))\n              ])\n            ])\n          ]),\n          _c(\"div\", { staticClass: \"describe-container\" }, [\n            _c(\"div\", { staticClass: \"describe-picture picture-two\" }),\n            _c(\"div\", { staticClass: \"describe-titles\" }, [\n              _c(\"div\", { staticClass: \"title\" }, [\n                _vm._v(_vm._s(_vm.$t(\"androidads.describe-title-2\")))\n              ]),\n              _c(\"div\", { staticClass: \"sub-title\" }, [\n                _vm._v(_vm._s(_vm.$t(\"androidads.describe-subtitle-2\")))\n              ])\n            ])\n          ]),\n          _c(\"div\", { staticClass: \"support-list\" }, [\n            _c(\"p\", { staticClass: \"support-title\" }, [\n              _vm._v(_vm._s(_vm.$t(\"androidads.support\")))\n            ]),\n            _c(\"div\", { staticClass: \"support-list-panel\" }, [\n              _vm.cl !== 1\n                ? _c(\"div\", { staticClass: \"icon-container\" }, [\n                    _c(\"div\", { staticClass: \"icon google\" }),\n                    _c(\"div\", { staticClass: \"icon youtube\" }),\n                    _c(\"div\", { staticClass: \"icon facebook\" }),\n                    _c(\"div\", { staticClass: \"icon instagram\" }),\n                    _c(\"div\", { staticClass: \"icon twitter\" }),\n                    _c(\"div\", { staticClass: \"icon telegram\" })\n                  ])\n                : _vm._e(),\n              _vm.cl !== 1\n                ? _c(\"div\", { staticClass: \"icon-container\" }, [\n                    _c(\"div\", { staticClass: \"icon whatsapp\" }),\n                    _c(\"div\", { staticClass: \"icon line\" }),\n                    _c(\"div\", { staticClass: \"icon netflex\" }),\n                    _c(\"div\", { staticClass: \"icon hbo\" }),\n                    _c(\"div\", { staticClass: \"icon spotify\" }),\n                    _c(\"div\", { staticClass: \"icon pornhub\" })\n                  ])\n                : _vm._e(),\n              _vm.cl === 1\n                ? _c(\"div\", { staticClass: \"icon-container\" }, [\n                    _c(\"div\", { staticClass: \"icon google-cl\" }),\n                    _c(\"div\", { staticClass: \"icon youtube-cl\" }),\n                    _c(\"div\", { staticClass: \"icon facebook-cl\" }),\n                    _c(\"div\", { staticClass: \"icon instagram-cl\" }),\n                    _c(\"div\", { staticClass: \"icon line-cl\" }),\n                    _c(\"div\", { staticClass: \"icon netflex-cl\" })\n                  ])\n                : _vm._e(),\n              _vm.cl === 1\n                ? _c(\"div\", { staticClass: \"icon-container\" }, [\n                    _c(\"div\", { staticClass: \"icon whatsapp-cl\" }),\n                    _c(\"div\", { staticClass: \"icon twitter-cl\" }),\n                    _c(\"div\", { staticClass: \"icon gmail-cl\" }),\n                    _c(\"div\", { staticClass: \"icon telegram-cl\" }),\n                    _c(\"div\", { staticClass: \"icon hulu-cl\" }),\n                    _c(\"div\", { staticClass: \"icon pornhub-cl\" })\n                  ])\n                : _vm._e()\n            ]),\n            _c(\"p\", { staticClass: \"support-text\" }, [\n              _vm._v(_vm._s(_vm.$t(\"androidads.free-world\")))\n            ])\n          ]),\n          _c(\"div\", { staticClass: \"panel-container\" }, [\n            _c(\"div\", { staticClass: \"panel-describe sub-title\" }, [\n              _c(\"p\", [\n                _c(\"span\", [\n                  _vm._v(_vm._s(_vm.$t(\"androidads.describe-panel-1\")))\n                ]),\n                _c(\"span\", [\n                  _vm._v(_vm._s(_vm.$t(\"androidads.describe-panel-2\")))\n                ])\n              ])\n            ])\n          ]),\n          _c(\"div\", { staticClass: \"point-container\" }, [\n            _c(\"div\", { staticClass: \"point-column\" }, [\n              _c(\"div\", { staticClass: \"point-tick\" }, [\n                _c(\"div\", { staticClass: \"tick\" }),\n                _c(\"div\", { staticClass: \"sub-title\" }, [\n                  _c(\"p\", [_vm._v(_vm._s(_vm.$t(\"androidads.point-1\")))])\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"point-tick\" }, [\n                _c(\"div\", { staticClass: \"tick\" }),\n                _c(\"div\", { staticClass: \"sub-title\" }, [\n                  _c(\"p\", [\n                    _c(\"span\", [\n                      _vm._v(_vm._s(_vm.$t(\"androidads.point-2-1\")))\n                    ]),\n                    _c(\"span\", [_vm._v(_vm._s(_vm.$t(\"androidads.point-2-2\")))])\n                  ])\n                ])\n              ])\n            ]),\n            _c(\"div\", { staticClass: \"point-column\" }, [\n              _c(\"div\", { staticClass: \"point-tick\" }, [\n                _c(\"div\", { staticClass: \"tick\" }),\n                _c(\"div\", { staticClass: \"sub-title\" }, [\n                  _c(\"p\", [_vm._v(_vm._s(_vm.$t(\"androidads.point-3\")))])\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"point-tick\" }, [\n                _c(\"div\", { staticClass: \"tick\" }),\n                _c(\"div\", { staticClass: \"sub-title\" }, [\n                  _c(\"p\", [\n                    _c(\"span\", [\n                      _vm._v(_vm._s(_vm.$t(\"androidads.point-4-1\")))\n                    ]),\n                    _c(\"span\", [_vm._v(_vm._s(_vm.$t(\"androidads.point-4-2\")))])\n                  ])\n                ])\n              ])\n            ])\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"download-panel\" }, [\n          _c(\"div\", { staticClass: \"download-button button sub-title\" }, [\n            _c(\n              \"a\",\n              {\n                attrs: { href: _vm.androidDownloadLink },\n                on: { click: _vm.copyAuadid }\n              },\n              [_vm._v(_vm._s(_vm.$t(\"androidads.download-button\")))]\n            )\n          ])\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22f81136d4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/android-ads/google-icon.svg */ \"./src/assets/android-ads/google-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/android-ads/youtube-icon.svg */ \"./src/assets/android-ads/youtube-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/android-ads/facebook-icon.svg */ \"./src/assets/android-ads/facebook-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../assets/android-ads/instagram-icon.svg */ \"./src/assets/android-ads/instagram-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../assets/android-ads/twitter-icon.svg */ \"./src/assets/android-ads/twitter-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../assets/android-ads/telegram-icon.svg */ \"./src/assets/android-ads/telegram-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../assets/android-ads/whatsapp-icon.svg */ \"./src/assets/android-ads/whatsapp-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../assets/android-ads/line-icon.svg */ \"./src/assets/android-ads/line-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../assets/android-ads/netflex-icon.svg */ \"./src/assets/android-ads/netflex-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../assets/android-ads/hbo-icon.svg */ \"./src/assets/android-ads/hbo-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../assets/android-ads/spotify-icon.svg */ \"./src/assets/android-ads/spotify-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../assets/android-ads/pornhub-icon.svg */ \"./src/assets/android-ads/pornhub-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../assets/android-ads/google-icon-cl.svg */ \"./src/assets/android-ads/google-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../assets/android-ads/youtube-icon-cl.svg */ \"./src/assets/android-ads/youtube-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../assets/android-ads/facebook-icon-cl.svg */ \"./src/assets/android-ads/facebook-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ../assets/android-ads/ins-icon-cl.svg */ \"./src/assets/android-ads/ins-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ../assets/android-ads/twitter-icon-cl.svg */ \"./src/assets/android-ads/twitter-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(/*! ../assets/android-ads/telegram-icon-cl.svg */ \"./src/assets/android-ads/telegram-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(/*! ../assets/android-ads/whatsapp-icon-cl.svg */ \"./src/assets/android-ads/whatsapp-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(/*! ../assets/android-ads/line-icon-cl.svg */ \"./src/assets/android-ads/line-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(/*! ../assets/android-ads/netflex-icon-cl.svg */ \"./src/assets/android-ads/netflex-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(/*! ../assets/android-ads/gmail-icon-cl.svg */ \"./src/assets/android-ads/gmail-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(/*! ../assets/android-ads/hulu-icon-cl.svg */ \"./src/assets/android-ads/hulu-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(/*! ../assets/android-ads/pornhub-icon-cl.svg */ \"./src/assets/android-ads/pornhub-icon-cl.svg\");\nvar ___CSS_LOADER_URL_IMPORT_24___ = __webpack_require__(/*! ../assets/android-ads/ground-glass-background.svg */ \"./src/assets/android-ads/ground-glass-background.svg\");\nvar ___CSS_LOADER_URL_IMPORT_25___ = __webpack_require__(/*! ../assets/logo.svg */ \"./src/assets/logo.svg\");\nvar ___CSS_LOADER_URL_IMPORT_26___ = __webpack_require__(/*! ../assets/android-ads/download-app.svg */ \"./src/assets/android-ads/download-app.svg\");\nvar ___CSS_LOADER_URL_IMPORT_27___ = __webpack_require__(/*! ../assets/android-ads/player-with-rocket.svg */ \"./src/assets/android-ads/player-with-rocket.svg\");\nvar ___CSS_LOADER_URL_IMPORT_28___ = __webpack_require__(/*! ../assets/android-ads/tick.svg */ \"./src/assets/android-ads/tick.svg\");\nvar ___CSS_LOADER_URL_IMPORT_29___ = __webpack_require__(/*! ../assets/android-ads/google-play.svg */ \"./src/assets/android-ads/google-play.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_25___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_26___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_27___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_28___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_29___);\n// Module\nexports.push([module.i, \"p span {\\n  display: block;\\n}\\n.landing-container-pc {\\n  display: flex;\\n  justify-content: center;\\n  background: #F8FAFC;\\n}\\n.landing-container-pc .preload-image {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \");\\n    background-size: 0;\\n    width: 400px;\\n    background: #FFFFFF;\\n}\\n.landing-container-pc .preload-image .part-one {\\n      padding-top: 42px;\\n      padding-left: 20px;\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_24___ + \");\\n      background-repeat: no-repeat;\\n      background-size: cover;\\n}\\n.landing-container-pc .preload-image .part-one .au-logo {\\n        width: 96px;\\n        height: 25px;\\n        background-size: contain;\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_25___ + \") center no-repeat;\\n        margin-bottom: 22px;\\n}\\n.landing-container-pc .preload-image .part-one .header-title {\\n        font-weight: bold;\\n        font-size: 42px;\\n        line-height: 56px;\\n        color: #303A55;\\n}\\n.landing-container-pc .preload-image .part-one .sub-title {\\n        font-size: 19px;\\n        line-height: 33px;\\n        margin-top: 14px;\\n}\\n.landing-container-pc .preload-image .part-two {\\n      margin: 38px 0px 50px 20px;\\n}\\n.landing-container-pc .preload-image .part-two .title {\\n        font-weight: bold;\\n        font-size: 21px;\\n        color: #303A55;\\n}\\n.landing-container-pc .preload-image .part-two .sub-title {\\n        font-size: 16px;\\n        line-height: 28px;\\n        color: #707477;\\n}\\n.landing-container-pc .preload-image .describe-container {\\n      display: flex;\\n      flex-direction: row;\\n      align-items: center;\\n      margin-bottom: 22px;\\n}\\n.landing-container-pc .preload-image .describe-container .describe-picture {\\n        width: 85px;\\n        height: 88px;\\n        background-size: contain;\\n}\\n.landing-container-pc .preload-image .describe-container .describe-picture.picture-one {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_26___ + \") center no-repeat;\\n}\\n.landing-container-pc .preload-image .describe-container .describe-picture.picture-two {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_27___ + \") center no-repeat;\\n}\\n.landing-container-pc .preload-image .describe-container .describe-titles {\\n        margin-left: 15px;\\n}\\n.landing-container-pc .preload-image .describe-container .describe-titles .title {\\n          margin-bottom: 11px;\\n}\\n.landing-container-pc .preload-image .support-list {\\n      display: flex;\\n      flex-direction: column;\\n}\\n.landing-container-pc .preload-image .support-list .support-title {\\n        font-size: 16px;\\n        line-height: 28px;\\n        font-weight: 500;\\n        color: #242C45;\\n        margin-top: 16px;\\n        margin-bottom: 23px;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container {\\n        display: flex;\\n        align-items: center;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .icon {\\n          height: 40px;\\n          width: 40px;\\n          margin-right: 23px;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .google {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .youtube {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .facebook {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .instagram {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .twitter {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .telegram {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .whatsapp {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .line {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .netflex {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .hbo {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .spotify {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .pornhub {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .google-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .youtube-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .facebook-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .instagram-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .twitter-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .telegram-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .whatsapp-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .line-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .netflex-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .gmail-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .hulu-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container .pornhub-cl {\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \") center no-repeat;\\n          background-size: contain;\\n}\\n.landing-container-pc .preload-image .support-list .support-list-panel .icon-container:last-child {\\n        margin-top: 17px;\\n}\\n.landing-container-pc .preload-image .support-list .support-text {\\n        font-size: 14px;\\n        font-weight: 400;\\n        color: #616577;\\n        margin-top: 21px;\\n        margin-bottom: 40px;\\n}\\n.landing-container-pc .preload-image .panel-container {\\n      width: 95%;\\n      border: 2px solid #C3CADD;\\n      border-radius: 8px;\\n      box-shadow: 10px 10px 0 0 #D4D6DE;\\n      background-color: #F2F4FC;\\n}\\n.landing-container-pc .preload-image .panel-container .panel-describe {\\n        padding-top: 15px;\\n        margin-left: 30px;\\n        color: #303A55;\\n        font-size: 14px;\\n        line-height: 24px;\\n}\\n.landing-container-pc .preload-image .point-container {\\n      display: flex;\\n      flex-direction: row;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding: 36px 68px 32px 0;\\n}\\n.landing-container-pc .preload-image .point-container .point-column {\\n        display: flex;\\n        flex-direction: column;\\n}\\n.landing-container-pc .preload-image .point-container .point-column .point-tick {\\n          display: flex;\\n          flex-direction: row;\\n          margin-bottom: 24px;\\n}\\n.landing-container-pc .preload-image .point-container .point-column .point-tick .tick {\\n            width: 17px;\\n            height: 17px;\\n            margin-top: 3px;\\n            margin-right: 10px;\\n            background-size: contain;\\n            background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_28___ + \") center no-repeat;\\n}\\n.landing-container-pc .preload-image .point-container .point-column .point-tick p {\\n            font-size: 16px;\\n            line-height: 24px;\\n            margin: 0px;\\n}\\n.landing-container-pc .preload-image .download-panel {\\n      width: 400px;\\n      box-shadow: 0 15px 15px 15px #D4D6DE;\\n      background-color: #FFFFFF;\\n      position: fixed;\\n      z-index: 2;\\n      bottom: 0;\\n      overflow: visible;\\n      display: flex;\\n      flex-direction: row;\\n      justify-content: space-between;\\n}\\n.landing-container-pc .preload-image .download-panel .button {\\n        border-radius: 10px;\\n        border: none;\\n        flex: 246 88;\\n}\\n.landing-container-pc .preload-image .download-panel .google-play {\\n        background-size: cover;\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_29___ + \") left center no-repeat;\\n}\\n.landing-container-pc .preload-image .download-panel .download-button {\\n        margin: 14px 22px;\\n        height: 48px;\\n        background-color: #3963EF;\\n        color: #FFFFFF;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n}\\n.landing-container-pc .preload-image .download-panel .download-button a {\\n          color: #FFFFFF;\\n          font-size: 16px;\\n          line-height: 22px;\\n}\\n.landing-container-mb .preload-image {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \");\\n  background-size: 0;\\n}\\n.landing-container-mb .preload-image .part-one {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_24___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    padding-top: 3vh;\\n}\\n.landing-container-mb .preload-image .part-one .au-logo {\\n      width: 25vw;\\n      height: 10vh;\\n      background-size: contain;\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_25___ + \");\\n      background-repeat: no-repeat;\\n      background-position: center;\\n      padding-bottom: 1vh;\\n      margin-left: 5vw;\\n}\\n.landing-container-mb .preload-image .part-one .header-title {\\n      margin-left: 5vw;\\n}\\n.landing-container-mb .preload-image .part-one .sub-title {\\n      margin-left: 5vw;\\n}\\n.landing-container-mb .preload-image .part-two {\\n    margin-left: 5vw;\\n    margin-bottom: 20vw;\\n}\\n.landing-container-mb .preload-image .header-title {\\n    font-weight: bold;\\n    font-size: 12vw;\\n    color: #303A55;\\n}\\n.landing-container-mb .preload-image .title {\\n    font-weight: bold;\\n    font-size: 6vw;\\n    color: #303A55;\\n}\\n.landing-container-mb .preload-image .sub-title {\\n    font-size: 5vw;\\n    color: #707477;\\n}\\n.landing-container-mb .preload-image .title-container {\\n    margin-bottom: 3vh;\\n}\\n.landing-container-mb .preload-image .title-container .sub-title {\\n      margin-top: 2vh;\\n}\\n.landing-container-mb .preload-image .describe-container {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    margin-bottom: 0.96rem;\\n}\\n.landing-container-mb .preload-image .describe-container .describe-picture {\\n      width: 25vw;\\n      height: 25vw;\\n      background-size: contain;\\n}\\n.landing-container-mb .preload-image .describe-container .describe-picture.picture-one {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_26___ + \") center no-repeat;\\n}\\n.landing-container-mb .preload-image .describe-container .describe-picture.picture-two {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_27___ + \") center no-repeat;\\n}\\n.landing-container-mb .preload-image .describe-container .describe-titles {\\n      margin-left: 15px;\\n}\\n.landing-container-mb .preload-image .describe-container .describe-titles .title {\\n        margin-bottom: 1vh;\\n}\\n.landing-container-mb .preload-image .support-list {\\n    display: flex;\\n    flex-direction: column;\\n}\\n.landing-container-mb .preload-image .support-list .support-title {\\n      font-size: 0.427rem;\\n      font-weight: 500;\\n      color: #242C45;\\n      margin-bottom: 0.107rem;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container {\\n      display: flex;\\n      align-items: center;\\n      margin-top: 0.427rem;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .icon {\\n        height: 1.013rem;\\n        width: 1.013rem;\\n        margin-right: 0.573rem;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .google {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .youtube {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .facebook {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .instagram {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .twitter {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .telegram {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .whatsapp {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .line {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .netflex {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .hbo {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .spotify {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .pornhub {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .google-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .youtube-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .facebook-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .instagram-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .twitter-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .telegram-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .whatsapp-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .line-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .netflex-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .gmail-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .hulu-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-list-panel .icon-container .pornhub-cl {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \") center no-repeat;\\n        background-size: contain;\\n}\\n.landing-container-mb .preload-image .support-list .support-text {\\n      font-size: 0.373rem;\\n      font-weight: 400;\\n      color: #616577;\\n      margin-top: 0.533rem;\\n      margin-bottom: 0.96rem;\\n}\\n.landing-container-mb .preload-image .panel-container {\\n    width: 85vw;\\n    border: 2px solid #C3CADD;\\n    border-radius: 10px;\\n    box-shadow: 10px 10px 0 0 #D4D6DE;\\n    background-color: #F2F4FC;\\n}\\n.landing-container-mb .preload-image .panel-container .panel-describe {\\n      padding-top: 3vh;\\n      padding-bottom: 1vh;\\n      margin-left: 10vw;\\n      color: #303A55;\\n}\\n.landing-container-mb .preload-image .point-container {\\n    width: 85vw;\\n    padding-top: 5vh;\\n    padding-bottom: 10vh;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n.landing-container-mb .preload-image .point-container .point-column {\\n      display: flex;\\n      flex-direction: column;\\n}\\n.landing-container-mb .preload-image .point-container .point-column .point-tick {\\n        display: flex;\\n        flex-direction: row;\\n}\\n.landing-container-mb .preload-image .point-container .point-column .point-tick .tick {\\n          width: 5vw;\\n          height: 5vw;\\n          margin-top: 1vw;\\n          margin-right: 2vw;\\n          background-size: contain;\\n          background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_28___ + \") center no-repeat;\\n}\\n.landing-container-mb .preload-image .download-panel {\\n    height: 20vw;\\n    width: 100vw;\\n    box-shadow: 0 15px 15px 15px #D4D6DE;\\n    background-color: #FFFFFF;\\n    position: fixed;\\n    z-index: 2;\\n    bottom: 0;\\n    overflow: visible;\\n    padding: 2vh 4vw;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n}\\n.landing-container-mb .preload-image .download-panel .button {\\n      border-radius: 10px;\\n      border: none;\\n      flex: 246 88;\\n}\\n.landing-container-mb .preload-image .download-panel .google-play {\\n      background-size: cover;\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_29___ + \") left center no-repeat;\\n}\\n.landing-container-mb .preload-image .download-panel .download-button {\\n      margin-left: 1vw;\\n      background-color: #3963EF;\\n      color: #FFFFFF;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n}\\n.landing-container-mb .preload-image .download-panel .download-button a {\\n        color: #FFFFFF;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AndroidAds.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0a5d48b4\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/android-ads/download-app.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/download-app.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/download-app.3b27c172.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/download-app.svg?");

/***/ }),

/***/ "./src/assets/android-ads/facebook-icon-cl.svg":
/*!*****************************************************!*\
  !*** ./src/assets/android-ads/facebook-icon-cl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/facebook-icon-cl.15f0395f.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/facebook-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/facebook-icon.svg":
/*!**************************************************!*\
  !*** ./src/assets/android-ads/facebook-icon.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/facebook-icon.2f3d0057.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/facebook-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/gmail-icon-cl.svg":
/*!**************************************************!*\
  !*** ./src/assets/android-ads/gmail-icon-cl.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/gmail-icon-cl.a746e6ca.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/gmail-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/google-icon-cl.svg":
/*!***************************************************!*\
  !*** ./src/assets/android-ads/google-icon-cl.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/google-icon-cl.b4fc8b47.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/google-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/google-icon.svg":
/*!************************************************!*\
  !*** ./src/assets/android-ads/google-icon.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/google-icon.7ba3f08d.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/google-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/google-play.svg":
/*!************************************************!*\
  !*** ./src/assets/android-ads/google-play.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/google-play.ceca7d42.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/google-play.svg?");

/***/ }),

/***/ "./src/assets/android-ads/ground-glass-background.svg":
/*!************************************************************!*\
  !*** ./src/assets/android-ads/ground-glass-background.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ground-glass-background.4034a70a.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/ground-glass-background.svg?");

/***/ }),

/***/ "./src/assets/android-ads/hbo-icon.svg":
/*!*********************************************!*\
  !*** ./src/assets/android-ads/hbo-icon.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hbo-icon.5aaef0ff.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/hbo-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/hulu-icon-cl.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/hulu-icon-cl.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hulu-icon-cl.e4879992.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/hulu-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/ins-icon-cl.svg":
/*!************************************************!*\
  !*** ./src/assets/android-ads/ins-icon-cl.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ins-icon-cl.49835c57.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/ins-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/instagram-icon.svg":
/*!***************************************************!*\
  !*** ./src/assets/android-ads/instagram-icon.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/instagram-icon.0b04d2a3.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/instagram-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/line-icon-cl.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/line-icon-cl.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/line-icon-cl.d164c7d8.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/line-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/line-icon.svg":
/*!**********************************************!*\
  !*** ./src/assets/android-ads/line-icon.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/line-icon.618f1110.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/line-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/netflex-icon-cl.svg":
/*!****************************************************!*\
  !*** ./src/assets/android-ads/netflex-icon-cl.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/netflex-icon-cl.940fe88e.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/netflex-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/netflex-icon.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/netflex-icon.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/netflex-icon.9287ea29.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/netflex-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/player-with-rocket.svg":
/*!*******************************************************!*\
  !*** ./src/assets/android-ads/player-with-rocket.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/player-with-rocket.05208f71.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/player-with-rocket.svg?");

/***/ }),

/***/ "./src/assets/android-ads/pornhub-icon-cl.svg":
/*!****************************************************!*\
  !*** ./src/assets/android-ads/pornhub-icon-cl.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/pornhub-icon-cl.d3188bf9.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/pornhub-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/pornhub-icon.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/pornhub-icon.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/pornhub-icon.42716e71.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/pornhub-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/spotify-icon.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/spotify-icon.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/spotify-icon.ba9a2566.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/spotify-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/telegram-icon-cl.svg":
/*!*****************************************************!*\
  !*** ./src/assets/android-ads/telegram-icon-cl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/telegram-icon-cl.b11be674.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/telegram-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/telegram-icon.svg":
/*!**************************************************!*\
  !*** ./src/assets/android-ads/telegram-icon.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/telegram-icon.60b18553.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/telegram-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/tick.svg":
/*!*****************************************!*\
  !*** ./src/assets/android-ads/tick.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/tick.b54a0dad.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/tick.svg?");

/***/ }),

/***/ "./src/assets/android-ads/twitter-icon-cl.svg":
/*!****************************************************!*\
  !*** ./src/assets/android-ads/twitter-icon-cl.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/twitter-icon-cl.0f7781ac.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/twitter-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/twitter-icon.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/twitter-icon.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/twitter-icon.a5a09c23.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/twitter-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/whatsapp-icon-cl.svg":
/*!*****************************************************!*\
  !*** ./src/assets/android-ads/whatsapp-icon-cl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/whatsapp-icon-cl.1b45dbb3.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/whatsapp-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/whatsapp-icon.svg":
/*!**************************************************!*\
  !*** ./src/assets/android-ads/whatsapp-icon.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/whatsapp-icon.c0c51cdc.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/whatsapp-icon.svg?");

/***/ }),

/***/ "./src/assets/android-ads/youtube-icon-cl.svg":
/*!****************************************************!*\
  !*** ./src/assets/android-ads/youtube-icon-cl.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/youtube-icon-cl.e1093808.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/youtube-icon-cl.svg?");

/***/ }),

/***/ "./src/assets/android-ads/youtube-icon.svg":
/*!*************************************************!*\
  !*** ./src/assets/android-ads/youtube-icon.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/youtube-icon.5f3ac6ab.svg\";\n\n//# sourceURL=webpack:///./src/assets/android-ads/youtube-icon.svg?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.7cf8aa57.svg\";\n\n//# sourceURL=webpack:///./src/assets/logo.svg?");

/***/ }),

/***/ "./src/views/AndroidAds.vue":
/*!**********************************!*\
  !*** ./src/views/AndroidAds.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AndroidAds_vue_vue_type_template_id_1280e8fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AndroidAds.vue?vue&type=template&id=1280e8fb& */ \"./src/views/AndroidAds.vue?vue&type=template&id=1280e8fb&\");\n/* harmony import */ var _AndroidAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AndroidAds.vue?vue&type=script&lang=js& */ \"./src/views/AndroidAds.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _AndroidAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AndroidAds.vue?vue&type=style&index=0&lang=scss& */ \"./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _AndroidAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AndroidAds_vue_vue_type_template_id_1280e8fb___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AndroidAds_vue_vue_type_template_id_1280e8fb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/AndroidAds.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?");

/***/ }),

/***/ "./src/views/AndroidAds.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/AndroidAds.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AndroidAds.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?");

/***/ }),

/***/ "./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************!*\
  !*** ./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AndroidAds.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?");

/***/ }),

/***/ "./src/views/AndroidAds.vue?vue&type=template&id=1280e8fb&":
/*!*****************************************************************!*\
  !*** ./src/views/AndroidAds.vue?vue&type=template&id=1280e8fb& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_f81136d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_template_id_1280e8fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"f81136d4-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./AndroidAds.vue?vue&type=template&id=1280e8fb& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"f81136d4-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/AndroidAds.vue?vue&type=template&id=1280e8fb&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_f81136d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_template_id_1280e8fb___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_f81136d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AndroidAds_vue_vue_type_template_id_1280e8fb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/AndroidAds.vue?");

/***/ })

}]);