(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/posts.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/posts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "posts-list",
  data: function data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePosts: function retrievePosts() {
      var _this = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].getAll().then(function (response) {
        _this.posts = response.data.data;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e);
      });
    },
    refreshList: function refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },
    setActivePost: function setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = index;
    },
    removeAllPosts: function removeAllPosts() {
      var _this2 = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].deleteAll().then(function (response) {
        console.log(response.data);

        _this2.refreshList();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    searchTitle: function searchTitle() {
      var _this3 = this;

      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].findByTitle(this.title).then(function (response) {
        _this3.posts = response.data;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.retrievePosts();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/posts.vue?vue&type=template&id=cad15ea0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/posts.vue?vue&type=template&id=cad15ea0& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "list row" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "input-group mb-3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.title,
              expression: "title"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search by title" },
          domProps: { value: _vm.title },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.title = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "input-group-append" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-secondary",
              attrs: { type: "button" },
              on: { click: _vm.searchTitle }
            },
            [_vm._v("\n          Search\n        ")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("h4", [_vm._v("Posts List")]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "list-group" },
        _vm._l(_vm.posts, function(post, index) {
          return _c(
            "li",
            {
              key: index,
              staticClass: "list-group-item",
              class: { active: index == _vm.currentIndex },
              on: {
                click: function($event) {
                  return _vm.setActivePost(post, index)
                }
              }
            },
            [_vm._v("\n        " + _vm._s(post.title) + "\n      ")]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "m-3 btn btn-sm btn-danger",
          on: { click: _vm.removeAllPosts }
        },
        [_vm._v("\n      Remove All\n    ")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _vm.currentPost
        ? _c("div", [
            _c("h4", [_vm._v("Post")]),
            _vm._v(" "),
            _c("div", [
              _vm._m(0),
              _vm._v(" " + _vm._s(_vm.currentPost.title) + "\n      ")
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._m(1),
              _vm._v(" " + _vm._s(_vm.currentPost.body) + "\n      ")
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._m(2),
              _vm._v(
                " " +
                  _vm._s(_vm.currentPost.published ? "Published" : "Pending") +
                  "\n      "
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "badge badge-warning",
                attrs: { href: "/posts/" + _vm.currentPost.id }
              },
              [_vm._v("\n        Edit\n      ")]
            )
          ])
        : _c("div", [
            _c("br"),
            _vm._v(" "),
            _c("p", [_vm._v("Please click on a Post...")])
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Title:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Description:")])])
  },
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

/***/ "./resources/assets/js/views/posts.vue":
/*!*********************************************!*\
  !*** ./resources/assets/js/views/posts.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_vue_vue_type_template_id_cad15ea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.vue?vue&type=template&id=cad15ea0& */ "./resources/assets/js/views/posts.vue?vue&type=template&id=cad15ea0&");
/* harmony import */ var _posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/posts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _posts_vue_vue_type_template_id_cad15ea0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _posts_vue_vue_type_template_id_cad15ea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/posts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/posts.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/views/posts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./posts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/posts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/posts.vue?vue&type=template&id=cad15ea0&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/views/posts.vue?vue&type=template&id=cad15ea0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_posts_vue_vue_type_template_id_cad15ea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./posts.vue?vue&type=template&id=cad15ea0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/posts.vue?vue&type=template&id=cad15ea0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_posts_vue_vue_type_template_id_cad15ea0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_posts_vue_vue_type_template_id_cad15ea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);