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

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].getPost(id).then(function (response) {
        _this2.post = response.data.data;

        _this2.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updatePublished: function updatePublished(status) {
      var _this3 = this;

      this.$Progress.start();
      var data = {
        id: this.post.id,
        title: this.post.title,
        body: this.post.body,
        published: status
      };
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].updatePost(this.post.id, data).then(function (response) {
        _this3.post.published = status;
        console.log(response.data);

        _this3.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updatePost: function updatePost() {
      var _this4 = this;

      // const data = new FormData();
      // data.append("title", this.form.title);
      // data.append("body", this.form.body);
      // data.append("user_id", this.form.user_id);
      // data.append("image", this.$refs.image.files[0]);
      // data.append("image", this.form.image);
      console.log(this.form);
      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].updatePost(this.post).then(function (response) {
        // console.log(response.data);
        _this4.message = 'The post was updated successfully!';

        _this4.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    deletePost: function deletePost() {
      var _this5 = this;

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].deletePost(this.post.id).then(function (response) {
        // console.log(response.data);
        _this5.$Progress.finish();

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
    _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0 text-dark" }, [
              _vm._v(
                "#" + _vm._s(_vm.post.id) + " - " + _vm._s(_vm.post.title) + " "
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "item" }, [
          _c("form", { staticClass: "card" }, [
            _c("div", { staticClass: "item__header card-header" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
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
                  }),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "title" } })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item__body card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-sm-8" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "textarea",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.post.body,
                              expression: "post.body"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "body", id: "body" },
                          domProps: { value: _vm.post.body },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.post, "body", $event.target.value)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.post.body))]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "body" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4" },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "custom-file mb-3" }, [
                        _c("input", {
                          ref: "image",
                          staticClass: "custom-file-input",
                          attrs: {
                            type: "file",
                            name: "image",
                            id: "image",
                            required: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("label", { staticClass: "custom-file-label" }, [
                          _vm._v("Choose file...")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "w-100 mt-5",
                      attrs: { src: "../../storage/" + _vm.post.image }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "image" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
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
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "user_id" }
                      })
                    ],
                    1
                  )
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
        _c("li", { staticClass: "breadcrumb-item" }, [
          _c("a", { attrs: { href: "/admin/dashboard" } }, [_vm._v("Home")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Posts")])
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