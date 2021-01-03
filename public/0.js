(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/addPost.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/addPost.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add-post",
  data: function data() {
    return {
      post: {
        id: null,
        title: "",
        body: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePost: function savePost() {
      var _this = this;

      var data = {
        title: this.post.title,
        body: this.post.body
      };
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].create(data).then(function (response) {
        _this.post.id = response.data.id;
        console.log(response.data);
        _this.submitted = true;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    newPost: function newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/addPost.vue?vue&type=template&id=6fb40d7e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/addPost.vue?vue&type=template&id=6fb40d7e& ***!
  \************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "submit-form" }, [
      !_vm.submitted
        ? _c("div", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "title" } }, [_vm._v("Title")]),
              _vm._v(" "),
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
                  required: "",
                  name: "title"
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "body" } }, [_vm._v("body")]),
              _vm._v(" "),
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
                attrs: { id: "body", required: "", name: "body" },
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
            _c(
              "button",
              { staticClass: "btn btn-success", on: { click: _vm.savePost } },
              [_vm._v("Submit")]
            )
          ])
        : _c("div", [
            _c("h4", [_vm._v("You submitted successfully!")]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-success", on: { click: _vm.newPost } },
              [_vm._v("Add")]
            )
          ])
    ])
  ])
}
var staticRenderFns = []
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
    key: "getAll",
    value: function getAll() {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get('/posts');
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

/***/ "./resources/assets/js/views/addPost.vue":
/*!***********************************************!*\
  !*** ./resources/assets/js/views/addPost.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPost_vue_vue_type_template_id_6fb40d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPost.vue?vue&type=template&id=6fb40d7e& */ "./resources/assets/js/views/addPost.vue?vue&type=template&id=6fb40d7e&");
/* harmony import */ var _addPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPost.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/addPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addPost_vue_vue_type_template_id_6fb40d7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addPost_vue_vue_type_template_id_6fb40d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/addPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/addPost.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/assets/js/views/addPost.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/addPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/addPost.vue?vue&type=template&id=6fb40d7e&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/views/addPost.vue?vue&type=template&id=6fb40d7e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPost_vue_vue_type_template_id_6fb40d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addPost.vue?vue&type=template&id=6fb40d7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/addPost.vue?vue&type=template&id=6fb40d7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPost_vue_vue_type_template_id_6fb40d7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPost_vue_vue_type_template_id_6fb40d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);