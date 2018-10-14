global.webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(102);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_161afc18_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(105);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_161afc18_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-161afc18", Component.options)
  } else {
    hotAPI.reload("data-v-161afc18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      showInstructions: true,
      keyword: '',
      schoolList: []
    };
  },

  components: {},
  created: function created() {
    console.log(this.env);
  },

  methods: {
    searchSchool: function searchSchool() {
      var _this = this;

      if (this.keyword) {
        this.httpGet(this.API.school, { keywords: this.keyword }).then(function (res) {
          if (res) {
            console.log(res);
            _this.showInstructions = false;
            _this.schoolList = res.data.list;
            _this.schoolList.forEach(function (elem) {
              elem.section = elem.section.split('|');
            });
            console.log('schoolList::', _this.schoolList);
          }
        });
      } else {
        this.showInstructions = true;
      }
    },
    back: function back() {
      this.showInstructions = true;
      this.schoolList = [];
    },
    gotoGame: function gotoGame(path) {
      this.reLaunchPageTo(this.router + path);
    }
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-warp"
  }, [_c('p', {
    staticClass: "tit"
  }, [_vm._v("广州公办小学查询系统")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "auto",
      "background": "#ffffff"
    }
  }, [_c('div', {
    staticClass: "search"
  }, [_c('p', {
    staticClass: "search-tit"
  }, [_vm._v("所在地段或小学关键字：")]), _vm._v(" "), _c('div', {
    staticClass: "search-panel"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    staticClass: "search-input",
    attrs: {
      "type": "text",
      "placeholder": "如：天河南街",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-panel"
  }, [_c('button', {
    staticClass: "search-btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.searchSchool
    }
  }, [_vm._v("搜索学校")])], 1)], 1), _vm._v(" "), (_vm.showInstructions) ? _c('div', {
    staticClass: "instructions"
  }, [_c('p', {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("使用说明：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('ol', [_c('li', [_vm._v("在上方搜索框中输入您所在的地段关键字或者您想查询的小学名称，如前进小学、天河南街。")]), _vm._v(" "), _c('li', [_vm._v("点击“搜索学校”按钮，进入结果页面。")]), _vm._v(" "), _c('li', [_vm._v("系统由广东广播电视台房产频道整理。")]), _vm._v(" "), _c('li', [_vm._v("如有错误，请通过"), _c('a', {
    staticStyle: {
      "color": "#ff6600"
    },
    attrs: {
      "href": "http://h5.kanlouyi.com/app#/proposal"
    }
  }, [_vm._v("意见反馈")]), _vm._v("告知我们，非常感谢！")])], 1)], 1)], 1) : _c('div', {
    staticClass: "result-panel"
  }, [(_vm.schoolList.length > 0) ? _c('div', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.schoolList), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "tr"
    }, [_c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.region))]), _vm._v(" "), _c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.school_name))]), _vm._v(" "), _c('div', {
      staticClass: "td flexdiv"
    }, [_c('ul', _vm._l((item.section), function(sectionItem, sectionItemIndex) {
      return _c('li', {
        key: sectionItem
      }, [_vm._v(_vm._s(sectionItem))])
    }))], 1)])
  })], 2) : _c('p', {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("数据库中无对应记录" + _vm._s(_vm.schoolList.length))]), _vm._v(" "), (_vm.schoolList.length > 0) ? _c('div', {
    staticClass: "result-btn-panel"
  }, [_c('button', {
    staticClass: "back",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.back
    }
  }, [_vm._v("返回首页")])], 1) : _vm._e()], 1)]), _vm._v(" "), _vm._m(1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "th",
    attrs: {
      "width": "60"
    }
  }, [_vm._v("辖区")]), _vm._v(" "), _c('div', {
    staticClass: "th",
    attrs: {
      "width": "60"
    }
  }, [_vm._v("学校")]), _vm._v(" "), _c('div', {
    staticClass: "th flexdiv"
  }, [_vm._v("招生服务地段")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('span', [_vm._v("广东广播电视台房产频道@版权所有")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-161afc18", esExports)
  }
}

/***/ })

},[101]);
//# sourceMappingURL=main.js.map