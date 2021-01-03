(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      authors: [],
      // currentPost: null,
      // currentIndex: -1,
      imagePreview: null,
      showPreview: false,
      search: "",
      editMode: false,
      next: null,
      prev: null,
      form: new Form({
        id: '',
        user_id: '',
        title: '',
        body: '',
        image: ''
      })
    };
  },
  methods: {
    onFileChange: function onFileChange(event) {
      this.form.image = event.target.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.imagePreview = reader.result;
      }.bind(this), false);

      if (this.form.image) {
        if (/\.(jpe?g|png|gif)$/i.test(this.form.image.name)) {
          console.log("here");
          reader.readAsDataURL(this.form.image);
        }
      }
    },
    openModalWindow: function openModalWindow() {
      this.editMode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    editModalWindow: function editModalWindow(post) {
      this.editMode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.id = post.id;
      this.form.user_id = post.user_id;
      this.form.title = post.title;
      this.form.body = post.body; // this.form.image = this.$refs.image.files[0];//post.image;
    },
    getAuthors: function getAuthors(address) {
      var _this = this;

      axios.get(address ? address : "/api/users").then(function (response) {
        _this.authors = response.data.data;
      });
    },
    savePost: function savePost() {
      var _this2 = this;

      this.$Progress.start();
      var data = new FormData();
      data.append("title", this.form.title);
      data.append("body", this.form.body);
      data.append("user_id", this.form.user_id); // data.append("image", this.$refs.image.files[0]);

      data.append("image", this.form.image);
      console.log(data); // console.log(this.$refs.image.files[0]);

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].createPost(data).then(function (response) {
        // this.form.id = response.data.id;
        // console.log(response.data);
        _this2.retrievePosts();

        $('#addNew').modal('hide');

        _this2.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    updatePost: function updatePost() {
      var _this3 = this;

      var data = new FormData();
      data.append("id", this.form.id);
      data.append("title", this.form.title);
      data.append("body", this.form.body);
      data.append("user_id", this.form.user_id); // data.append("image", this.$refs.image.files[0]);

      data.append("image", this.form.image);
      console.log(this.form);
      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].updatePost(this.form).then(function (response) {
        // console.log(response.data);
        // this.message = 'The post was updated successfully!';
        _this3.retrievePosts();

        $('#addNew').modal('hide');

        _this3.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    deletePost: function deletePost(id) {
      var _this4 = this;

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].deletePost(id).then(function (response) {
        // console.log(response.data);
        // this.$router.push({ name: "posts" });
        _this4.retrievePosts();

        _this4.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    retrievePosts: function retrievePosts(address) {
      var _this5 = this;

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].getAllPosts(address).then(function (response) {
        _this5.posts = response.data.data;
        _this5.prev = response.data.links.prev;
        _this5.next = response.data.links.next;

        _this5.$Progress.finish(); // console.log(response.data.links);

      })["catch"](function (e) {
        console.log(e);
      });
    },
    navigate: function navigate(address) {
      this.retrievePosts(address);
    },
    // setActivePost(post, index) {
    //     this.currentPost = post;
    //     this.currentIndex = index;
    // },
    searchTitle: function searchTitle() {
      var _this6 = this;

      this.$Progress.start();
      _services_service__WEBPACK_IMPORTED_MODULE_0__["default"].findPost(this.search).then(function (response) {
        _this6.posts = response.data;
        console.log(response.data);

        _this6.$Progress.finish();
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.retrievePosts();
    this.getAuthors();
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "items" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass:
                  "items__header card-header d-flex align-items-baseline justify-content-between"
              },
              [
                _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Posts")]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search,
                        expression: "search"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Search by title" },
                    domProps: { value: _vm.search },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.search = $event.target.value
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
                      [_vm._v(" Search ")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-tools" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#addNew"
                      },
                      on: { click: _vm.openModalWindow }
                    },
                    [
                      _vm._v("Add new "),
                      _c("i", { staticClass: "fas fa-plus-square" })
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "items__body card-body" }, [
              _c(
                "table",
                { staticClass: "table table-hover", attrs: { id: "posts" } },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.posts, function(post, index) {
                      return _c("tr", { key: index, staticClass: "row" }, [
                        _c(
                          "td",
                          { staticClass: "col", attrs: { scope: "row" } },
                          [_vm._v(_vm._s(post.id))]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "col" }, [
                          _vm._v(_vm._s(post.title))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "col" }, [
                          _c("img", {
                            attrs: { src: "../storage/" + post.image }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "col" }, [
                          _vm._v(_vm._s(post.author.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "col" }, [
                          _vm._v(_vm._s(post.created_at))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "col items__body__buttons d-flex justify-content-end align-items-start"
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "m-1 d-block float-right",
                                attrs: {
                                  to: {
                                    name: "post-details",
                                    params: { id: post.id }
                                  }
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-primary  d-flex align-items-center justify-content-between",
                                    attrs: { type: "button" }
                                  },
                                  [_c("i", { staticClass: "fas fa-eye" })]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "m-1 d-block float-right",
                                attrs: { href: "#", "data-id": "post.id" },
                                on: {
                                  click: function($event) {
                                    return _vm.editModalWindow(post)
                                  }
                                }
                              },
                              [_vm._m(2, true)]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "m-1 d-block float-right",
                                attrs: { href: "#", "data-id": "post.id" },
                                on: {
                                  click: function($event) {
                                    return _vm.deletePost(post.id)
                                  }
                                }
                              },
                              [_vm._m(3, true)]
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-start align-posts-center"
                  },
                  [
                    _vm.next
                      ? _c(
                          "button",
                          {
                            staticClass: "m-2 btn btn-primary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.navigate(_vm.next)
                              }
                            }
                          },
                          [_vm._v("Next")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.prev
                      ? _c(
                          "button",
                          {
                            staticClass: "m-2 btn btn-primary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.navigate(_vm.prev)
                              }
                            }
                          },
                          [_vm._v("Previous")]
                        )
                      : _vm._e()
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addNew",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.editMode,
                        expression: "!editMode"
                      }
                    ],
                    staticClass: "modal-title",
                    attrs: { id: "addNewLabel" }
                  },
                  [_vm._v("Add New post")]
                ),
                _vm._v(" "),
                _c(
                  "h5",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editMode,
                        expression: "editMode"
                      }
                    ],
                    staticClass: "modal-title",
                    attrs: { id: "addNewLabel" }
                  },
                  [_vm._v("Update post")]
                ),
                _vm._v(" "),
                _vm._m(4)
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.editMode ? _vm.updatePost() : _vm.savePost()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
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
                                value: _vm.form.user_id,
                                expression: "form.user_id"
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
                                  _vm.form,
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
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.title,
                              expression: "form.title"
                            }
                          ],
                          ref: "title",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("title") },
                          attrs: {
                            type: "text",
                            name: "title",
                            placeholder: "title"
                          },
                          domProps: { value: _vm.form.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "title", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "title" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.body,
                              expression: "form.body"
                            }
                          ],
                          ref: "body",
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("comment")
                          },
                          attrs: {
                            type: "text",
                            name: "body",
                            placeholder: "body"
                          },
                          domProps: { value: _vm.form.body },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "body", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "body" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        staticClass: "form-control-file",
                        attrs: { type: "file", name: "image", id: "image" },
                        on: { change: _vm.onFileChange }
                      }),
                      _vm._v(" "),
                      _c("img", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showPreview,
                            expression: "showPreview"
                          }
                        ],
                        attrs: {
                          src: _vm.imagePreview,
                          width: "100",
                          height: "100"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("Close")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.editMode,
                            expression: "editMode"
                          }
                        ],
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Update")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.editMode,
                            expression: "!editMode"
                          }
                        ],
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Create")]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
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
    return _c("thead", { staticClass: "thead" }, [
      _c("tr", { staticClass: "row" }, [
        _c("th", { staticClass: "col border-0" }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", { staticClass: "col border-0" }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { staticClass: "col border-0" }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", { staticClass: "col border-0" }, [_vm._v("Author")]),
        _vm._v(" "),
        _c("th", { staticClass: "col border-0" }, [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", { staticClass: "col text-right d-none d-sm-block border-0" }, [
          _vm._v("Actions")
        ])
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
      [_c("i", { staticClass: "fa fa-edit" })]
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
      [_c("i", { staticClass: "fas fa-trash" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
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