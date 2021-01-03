(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/user.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "user",
  data: function data() {
    return {
      user: null,
      message: ''
    };
  },
  methods: {
    getUser: function getUser(id) {
      var _this = this;

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].getUser(id).then(function (response) {
        _this.user = response.data.data;

        _this.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updateUser: function updateUser() {
      var _this2 = this;

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].updateUser(this.user).then(function (response) {
        // console.log(response.data);
        _this2.message = 'The user was updated successfully!';

        _this2.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    deleteUser: function deleteUser() {
      var _this3 = this;

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUser(this.user.id).then(function (response) {
        // console.log(response.data);
        _this3.$Progress.finish();

        _this3.$router.push({
          name: "users"
        });
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.message = '';
    this.getUser(this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user.vue?vue&type=template&id=7548707e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/user.vue?vue&type=template&id=7548707e& ***!
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
                "#" + _vm._s(_vm.user.id) + " - " + _vm._s(_vm.user.name) + " "
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
                        value: _vm.user.name,
                        expression: "user.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      name: "name",
                      placeholder: "Title"
                    },
                    domProps: { value: _vm.user.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "name" } })
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          id: "email",
                          name: "email",
                          placeholder: "Email"
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "email" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.password,
                            expression: "user.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          id: "password",
                          name: "password",
                          placeholder: "Password"
                        },
                        domProps: { value: _vm.user.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "password", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "password" }
                      })
                    ],
                    1
                  )
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
                      attrs: { href: "#", "data-id": "user.id" },
                      on: { click: _vm.updateUser }
                    },
                    [_vm._m(1)]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "m-1 d-block float-right",
                      attrs: { href: "#", "data-id": "user.id" },
                      on: { click: _vm.deleteUser }
                    },
                    [_vm._m(2)]
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
        _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Users")])
      ])
    ])
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
    key: "getAllUsers",
    //users
    value: function getAllUsers(address) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get(address ? address : '/users');
    }
  }, {
    key: "getUser",
    value: function getUser(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/users/".concat(id));
    }
  }, {
    key: "createUser",
    value: function createUser(data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post('/users', data);
    }
  }, {
    key: "updateUser",
    value: function updateUser(data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].put('/users', data);
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/users/".concat(id));
    }
  }, {
    key: "findUser",
    value: function findUser(title) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/users?title=".concat(title));
    } //posts

  }, {
    key: "getAllPosts",
    value: function getAllPosts(address) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get(address ? address : '/posts');
    }
  }, {
    key: "getPost",
    value: function getPost(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts/".concat(id));
    }
  }, {
    key: "createPost",
    value: function createPost(data) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post('/posts', data);
    }
  }, {
    key: "updatePost",
    value: function updatePost(data) {
      // return http.put(`/posts/${id}`, data);
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].put('/posts', data);
    }
  }, {
    key: "deletePost",
    value: function deletePost(id) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/posts/".concat(id));
    }
  }, {
    key: "findPost",
    value: function findPost(title) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts?title=".concat(title));
    }
  }]);

  return DataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DataService());

/***/ }),

/***/ "./resources/assets/js/views/user.vue":
/*!********************************************!*\
  !*** ./resources/assets/js/views/user.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_7548707e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=7548707e& */ "./resources/assets/js/views/user.vue?vue&type=template&id=7548707e&");
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_7548707e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_7548707e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/user.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/views/user.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/user.vue?vue&type=template&id=7548707e&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/views/user.vue?vue&type=template&id=7548707e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_7548707e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=7548707e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user.vue?vue&type=template&id=7548707e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_7548707e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_7548707e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);