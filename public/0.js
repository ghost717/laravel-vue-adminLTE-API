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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "post",
  data: function data() {
    return {
      currentPost: null,
      message: ''
    };
  },
  methods: {
    getPost: function getPost(id) {
      var _this = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(id).then(function (response) {
        _this.currentPost = response.data.data;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updatePublished: function updatePublished(status) {
      var _this2 = this;

      var data = {
        id: this.currentPost.id,
        title: this.currentPost.title,
        body: this.currentPost.body,
        published: status
      };
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.currentPost.id, data).then(function (response) {
        _this2.currentPost.published = status;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updatePost: function updatePost() {
      var _this3 = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.currentPost.id, this.currentPost).then(function (response) {
        console.log(response.data);
        _this3.message = 'The post was updated successfully!';
      })["catch"](function (e) {
        console.log(e);
      });
    },
    deletePost: function deletePost() {
      var _this4 = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](this.currentPost.id).then(function (response) {
        console.log(response.data);

        _this4.$router.push({
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
  return _vm.currentPost
    ? _c("div", { staticClass: "edit-form" }, [
        _c("h4", [_vm._v("Post")]),
        _vm._v(" "),
        _c("form", [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "title" } }, [_vm._v("Title")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.currentPost.title,
                  expression: "currentPost.title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "title" },
              domProps: { value: _vm.currentPost.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.currentPost, "title", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "body" } }, [_vm._v("Description")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.currentPost.body,
                  expression: "currentPost.body"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "body" },
              domProps: { value: _vm.currentPost.body },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.currentPost, "body", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _vm._m(0),
            _vm._v(
              "\n      " +
                _vm._s(_vm.currentPost.published ? "Published" : "Pending") +
                "\n    "
            )
          ])
        ]),
        _vm._v(" "),
        _vm.currentPost.published
          ? _c(
              "button",
              {
                staticClass: "badge badge-primary mr-2",
                on: {
                  click: function($event) {
                    return _vm.updatePublished(false)
                  }
                }
              },
              [_vm._v("\n    UnPublish\n  ")]
            )
          : _c(
              "button",
              {
                staticClass: "badge badge-primary mr-2",
                on: {
                  click: function($event) {
                    return _vm.updatePublished(true)
                  }
                }
              },
              [_vm._v("\n    Publish\n  ")]
            ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "badge badge-danger mr-2",
            on: { click: _vm.deletePost }
          },
          [_vm._v("\n    Delete\n  ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "badge badge-success",
            attrs: { type: "submit" },
            on: { click: _vm.updatePost }
          },
          [_vm._v("\n    Update\n  ")]
        ),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.message))])
      ])
    : _c("div", [
        _c("br"),
        _vm._v(" "),
        _c("p", [_vm._v("Please click on a Post...")])
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Status:")])])
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