(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/post.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/post.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service */ "./resources/assets/js/services/service.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "post",
  data: function data() {
    return {
      post: null,
      authors: [],
      message: ''
    };
  },
  methods: {
    getAuthors: function getAuthors(address) {
      var _this = this;

      axios.get(address ? address : "/api/users").then(function (response) {
        _this.authors = response.data.data;
      });
    },
    getPost: function getPost(id) {
      var _this2 = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(id).then(function (response) {
        _this2.post = response.data.data;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updatePublished: function updatePublished(status) {
      var _this3 = this;

      var data = {
        id: this.post.id,
        title: this.post.title,
        body: this.post.body,
        published: status
      };
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.post.id, data).then(function (response) {
        _this3.post.published = status;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updatePost: function updatePost() {
      var _this4 = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.post.id, this.post).then(function (response) {
        // console.log(response.data);
        _this4.message = 'The post was updated successfully!';
      })["catch"](function (e) {
        console.log(e);
      });
    },
    deletePost: function deletePost() {
      var _this5 = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](this.post.id).then(function (response) {
        // console.log(response.data);
        _this5.$router.push({
          name: "posts"
        });
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.message = '';
    this.getPost(this.$route.params.id);
    this.getAuthors();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/post.vue?vue&type=template&id=9b6caa5a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/post.vue?vue&type=template&id=9b6caa5a& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "item" }, [
          _c("form", { staticClass: "card" }, [
            _c("div", { staticClass: "item__header card-header" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.post.title,
                      expression: "post.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "title",
                    name: "title",
                    placeholder: "Title"
                  },
                  domProps: { value: _vm.post.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.post, "title", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item__body card-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.post.body,
                      expression: "post.body"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "body",
                    name: "body",
                    placeholder: "body"
                  },
                  domProps: { value: _vm.post.body },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.post, "body", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.post.user_id,
                            expression: "post.user_id"
                          }
                        ],
                        ref: "user_id",
                        staticClass: "form-control",
                        attrs: { name: "user_id", id: "user_id" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.post,
                              "user_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.authors, function(d) {
                        return _c("option", { domProps: { value: d.id } }, [
                          _vm._v(_vm._s(d.name))
                        ])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.post.user_id,
                            expression: "post.user_id"
                          }
                        ],
                        ref: "published",
                        staticClass: "form-control",
                        attrs: { name: "published", id: "published" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.post,
                              "user_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Please select one")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "draft" } }, [
                          _vm._v("Draft")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "published" } }, [
                          _vm._v("Published")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.post.published ? "Published" : "Draft") +
                        "\n                                "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item__footer card-header" }, [
              _c(
                "div",
                {
                  staticClass:
                    "item__buttons d-flex justify-content-end align-items-start"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "m-1 d-block float-right",
                      attrs: { href: "#", "data-id": "post.id" },
                      on: { click: _vm.updatePost }
                    },
                    [_vm._m(2)]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "m-1 d-block float-right",
                      attrs: { href: "#", "data-id": "post.id" },
                      on: { click: _vm.deletePost }
                    },
                    [_vm._m(3)]
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.message))])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "/admin/dashboard" } }, [
                  _vm._v("Home")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Posts")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Status:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "btn btn-sm btn-warning text-light d-flex align-items-center justify-content-between",
        attrs: { type: "button" }
      },
      [
        _vm._v("\n                                    Update "),
        _c("i", { staticClass: "fa fa-edit" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "btn btn-sm btn-danger d-flex align-items-center justify-content-between",
        attrs: { type: "button" }
      },
      [
        _vm._v("\n                                    Delete "),
        _c("i", { staticClass: "fas fa-trash" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/http-common.js":
/*!********************************************!*\
  !*** ./resources/assets/js/http-common.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json"
  }
}));

/***/ }),

/***/ "./resources/assets/js/services/service.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/services/service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-common */ "./resources/assets/js/http-common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DataService = /*#__PURE__*/function () {
  function DataService() {
    _classCallCheck(this, DataService);
  }

  _createClass(DataService, [{
    key: "getAllPosts",
    value: function getAllPosts(address) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get(address ? address : '/posts');
    }
  }, {
    key: "get",
    value: function get(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts/".concat(id));
    }
  }, {
    key: "create",
    value: function create(data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post('/posts', data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      // return http.put(`/posts/${id}`, data);
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].put('/posts', data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/posts/".concat(id));
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/posts');
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(title) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts?title=".concat(title));
    }
  }]);

  return DataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DataService());

/***/ }),

/***/ "./resources/assets/js/views/post.vue":
/*!********************************************!*\
  !*** ./resources/assets/js/views/post.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_vue_vue_type_template_id_9b6caa5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.vue?vue&type=template&id=9b6caa5a& */ "./resources/assets/js/views/post.vue?vue&type=template&id=9b6caa5a&");
/* harmony import */ var _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _post_vue_vue_type_template_id_9b6caa5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _post_vue_vue_type_template_id_9b6caa5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/post.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/post.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/views/post.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./post.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/post.vue?vue&type=template&id=9b6caa5a&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/views/post.vue?vue&type=template&id=9b6caa5a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_template_id_9b6caa5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./post.vue?vue&type=template&id=9b6caa5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/post.vue?vue&type=template&id=9b6caa5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_template_id_9b6caa5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_template_id_9b6caa5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);