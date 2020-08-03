function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/ErrorHandlres/IErrorHandler.ts":
  /*!************************************************!*\
    !*** ./src/app/ErrorHandlres/IErrorHandler.ts ***!
    \************************************************/

  /*! exports provided: IErrorHandler */

  /***/
  function srcAppErrorHandlresIErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IErrorHandler", function () {
      return IErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IErrorHandler = function IErrorHandler() {
      _classCallCheck(this, IErrorHandler);
    };

    IErrorHandler.ɵfac = function IErrorHandler_Factory(t) {
      return new (t || IErrorHandler)();
    };

    IErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IErrorHandler,
      factory: IErrorHandler.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ErrorHandlres/ToastErrorHandler.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/ErrorHandlres/ToastErrorHandler.service.ts ***!
    \************************************************************/

  /*! exports provided: ToastErrorHandlerService */

  /***/
  function srcAppErrorHandlresToastErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastErrorHandlerService", function () {
      return ToastErrorHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ToastErrorHandlerService = /*#__PURE__*/function () {
      function ToastErrorHandlerService(toastService) {
        _classCallCheck(this, ToastErrorHandlerService);

        this.toastService = toastService;
      }

      _createClass(ToastErrorHandlerService, [{
        key: "handleError",
        value: function handleError(error) {
          this.toastService.error(error);
        }
      }]);

      return ToastErrorHandlerService;
    }();

    ToastErrorHandlerService.ɵfac = function ToastErrorHandlerService_Factory(t) {
      return new (t || ToastErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
    };

    ToastErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToastErrorHandlerService,
      factory: ToastErrorHandlerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ToDoItem/ToDoItem.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ToDoItem/ToDoItem.component.ts ***!
    \************************************************/

  /*! exports provided: ToDoItemComponent */

  /***/
  function srcAppToDoItemToDoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoItemComponent", function () {
      return ToDoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToDoItemComponent = /*#__PURE__*/function () {
      function ToDoItemComponent() {
        _classCallCheck(this, ToDoItemComponent);
      }

      _createClass(ToDoItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToDoItemComponent;
    }();

    ToDoItemComponent.ɵfac = function ToDoItemComponent_Factory(t) {
      return new (t || ToDoItemComponent)();
    };

    ToDoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToDoItemComponent,
      selectors: [["app-ToDoItem"]],
      decls: 2,
      vars: 0,
      template: function ToDoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ToDoItem works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RvRG9JdGVtL1RvRG9JdGVtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ToDoItem',
          templateUrl: './ToDoItem.component.html',
          styleUrls: ['./ToDoItem.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ToDoList/ToDoList.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ToDoList/ToDoList.component.ts ***!
    \************************************************/

  /*! exports provided: ToDoListComponent */

  /***/
  function srcAppToDoListToDoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoListComponent", function () {
      return ToDoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_assign_todoitem_modal_assign_todoitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../modal-assign-todoitem/modal-assign-todoitem.component */
    "./src/app/modal-assign-todoitem/modal-assign-todoitem.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_Services/toDoList.service */
    "./src/app/_Services/toDoList.service.ts");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");
    /* harmony import */


    var _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_Services/signalRService.service */
    "./src/app/_Services/signalRService.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../users-panel/users-panel.component */
    "./src/app/users-panel/users-panel.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ToDoListComponent_tr_35_i_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoListComponent_tr_35_i_7_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var todo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.markAsDone(todo_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ToDoListComponent_tr_35_i_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoListComponent_tr_35_i_9_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var todo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.markAsDone(todo_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ToDoListComponent_tr_35_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoListComponent_tr_35_td_13_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var todo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.open(todo_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "newItem ": a0
      };
    };

    function ToDoListComponent_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToDoListComponent_tr_35_i_7_Template, 1, 0, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToDoListComponent_tr_35_i_9_Template, 1, 0, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoListComponent_tr_35_Template_i_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var todo_r2 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.deleteToDo(todo_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ToDoListComponent_tr_35_td_13_Template, 3, 0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, todo_r2.isNew));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r2.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !todo_r2.completed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", todo_r2.completed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUserIsAdmin());
      }
    }

    function ToDoListComponent_button_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoListComponent_button_38_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.backToTheTop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "back to top");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ToDoListComponent = /*#__PURE__*/function () {
      function ToDoListComponent(route, toDoListService, authService, router, signalRService, modalService, toastr) {
        _classCallCheck(this, ToDoListComponent);

        this.route = route;
        this.toDoListService = toDoListService;
        this.authService = authService;
        this.router = router;
        this.signalRService = signalRService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.closeResult = '';
        this.currentPage = 2;
        this.pageSize = 10;
      }

      _createClass(ToDoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (resul) {
            _this.currentUser = resul.user;
          });
          this.route.data.subscribe(function (resul) {
            _this.toDoItems = resul.toDoItems;
          });
          this.route.data.subscribe(function (resul) {
            return _this.conectedUsers = resul.conectedUsers;
          });
          this.signalRService.newTask.subscribe(function (res) {
            res.isNew = true;

            _this.toDoItems.unshift(res);

            _this.toastr.info("you have a new task");
          });
        }
      }, {
        key: "addToDoItem",
        value: function addToDoItem() {
          var _this2 = this;

          this.toDoListService.addToDoItem(this.newToDoItem).subscribe(function (next) {
            _this2.toastr.success("todo added!");

            _this2.toDoItems.unshift(next);

            _this2.newToDoItem = "";
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.signalRService.disconectUser();
          this.router.navigate(['/login']);
        }
      }, {
        key: "markAsDone",
        value: function markAsDone(toDoId) {
          var _this3 = this;

          this.toDoListService.markAsDone(toDoId, true).subscribe(function (data) {
            _this3.modifyElements(data);
          });
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          this.addToDoItem();
        }
      }, {
        key: "modifyElements",
        value: function modifyElements(item) {
          var objIndex = this.toDoItems.findIndex(function (obj) {
            return obj.id === item.id;
          });
          this.toDoItems[objIndex].completed = item.completed;
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          return this.authService.currentUser.userName;
        }
      }, {
        key: "currentUserIsAdmin",
        value: function currentUserIsAdmin() {
          return this.currentUser.userRoles.findIndex(function (x) {
            return x.role === 'Admin';
          }) !== -1;
        }
      }, {
        key: "open",
        value: function open(todoitem) {
          var _this4 = this;

          var modalRef = this.modalService.open(_modal_assign_todoitem_modal_assign_todoitem_component__WEBPACK_IMPORTED_MODULE_1__["ModalAssignTodoitemComponent"]);
          modalRef.componentInstance.users = this.signalRService.getConectedUsers();
          modalRef.componentInstance.todoitem = todoitem;
          modalRef.result.then(function (res) {
            var index = _this4.toDoItems.findIndex(function (tdi) {
              return tdi.id === res.id;
            });

            _this4.toDoItems[index] = res;
          }, function (reason) {});
        }
      }, {
        key: "addNewItems",
        value: function addNewItems() {
          var _this5 = this;

          this.toDoListService.getToDoItems(this.authService.getCurrentUserId(), this.currentPage, this.pageSize).subscribe(function (res) {
            if (res.length > 0) {
              _this5.toDoItems = _this5.toDoItems.concat(res);
            } else {
              _this5.end = true;
            }
          });
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          this.addNewItems();
          this.currentPage = this.currentPage + 1;
        }
      }, {
        key: "isAll",
        value: function isAll() {
          return this.end;
        }
      }, {
        key: "backToTheTop",
        value: function backToTheTop() {
          document.documentElement.scrollTop = 0;
        }
      }, {
        key: "deleteToDo",
        value: function deleteToDo(id) {
          var _this6 = this;

          this.toDoListService.deleteToDo(id).subscribe(function (res) {
            var index = _this6.toDoItems.findIndex(function (item) {
              return item.id === res.id;
            });

            _this6.toDoItems.splice(index, 1);
          });
        }
      }]);

      return ToDoListComponent;
    }();

    ToDoListComponent.ɵfac = function ToDoListComponent_Factory(t) {
      return new (t || ToDoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_toDoList_service__WEBPACK_IMPORTED_MODULE_3__["ToDoListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_signalRService_service__WEBPACK_IMPORTED_MODULE_5__["SignalRService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]));
    };

    ToDoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToDoListComponent,
      selectors: [["app-ToDoList"]],
      decls: 39,
      vars: 7,
      consts: [[1, "col-12"], [1, "row"], [1, "col-12", "ml-auto", "text-center", "py-2"], ["src", "https://img.icons8.com/color/48/000000/administrator-male.png", "alt", "Cinque Terre", 1, "rounded-circle"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["id", "page-content", 1, "page-container"], [1, "padding"], [1, "row", "container", "d-flex", "justify-content-center"], [1, "col-sm-4"], [3, "conectedUsers"], [1, "col-sm-8"], [1, "input-group"], [1, "input-group-text"], [1, "fa", "fa-plus"], ["type", "text", "placeholder", "Add todo item", "id", "box", 1, "form-control", 2, "width", "30vw", 3, "ngModel", "keydown.enter", "ngModelChange"], ["infiniteScroll", "", 1, "container", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [1, "table", "table-striped", "table-dark"], ["scope", "col"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col", "text-center"], ["class", "btn btn-link", 3, "click", 4, "ngIf"], [3, "ngClass"], ["title", "mark as done", 1, "icon-stack", 2, "cursor", "pointer"], ["class", "fa fa-check-circle", 3, "click", 4, "ngIf"], ["title", "mark as pending", 1, "icon-stack", 2, "cursor", "pointer"], ["class", "fa fa-clock-o", 3, "click", 4, "ngIf"], ["title", "delete", 1, "icon-stack", 2, "cursor", "pointer", "color", "red"], [1, "fa", "fa-trash", 3, "click"], [4, "ngIf"], [1, "fa", "fa-check-circle", 3, "click"], [1, "fa", "fa-clock-o", 3, "click"], [1, "icon-stack"], [1, "fa", "fa-user-plus", 3, "click"], [1, "btn", "btn-link", 3, "click"], [1, "fa", "fa-angle-double-up"]],
      template: function ToDoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoListComponent_Template_button_click_9_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-users-panel", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ToDoListComponent_Template_input_keydown_enter_21_listener() {
            return ctx.addToDoItem();
          })("ngModelChange", function ToDoListComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.newToDoItem = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function ToDoListComponent_Template_div_scrolled_24_listener() {
            return ctx.onScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Assigned To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ToDoListComponent_tr_35_Template, 14, 8, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ToDoListComponent_button_38_Template, 3, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.currentUser.userName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("conectedUsers", ctx.conectedUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newToDoItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toDoItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAll());
        }
      },
      directives: [_users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_8__["UsersPanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
      styles: [".page-container[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n\r\n.fa-check-circle[_ngcontent-%COMP%] {\r\n    color: green;\r\n  }\r\n\r\nth[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.newItem[_ngcontent-%COMP%]{\r\n    -webkit-animation-name: example;\r\n            animation-name: example;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;;\r\n  }\r\n\r\n@-webkit-keyframes example {\r\n    0%   {background-color: orange;}\r\n    25%  {background-color: orange;}\r\n    50%  {background-color: orange;}\r\n    100% {background-color: orange;}\r\n  }\r\n\r\n@keyframes example {\r\n    0%   {background-color: orange;}\r\n    25%  {background-color: orange;}\r\n    50%  {background-color: orange;}\r\n    100% {background-color: orange;}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVG9Eb0xpc3QvVG9Eb0xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxNQUFNLHdCQUF3QixDQUFDO0lBQy9CLE1BQU0sd0JBQXdCLENBQUM7SUFDL0IsTUFBTSx3QkFBd0IsQ0FBQztJQUMvQixNQUFNLHdCQUF3QixDQUFDO0VBQ2pDOztBQUxBO0lBQ0UsTUFBTSx3QkFBd0IsQ0FBQztJQUMvQixNQUFNLHdCQUF3QixDQUFDO0lBQy9CLE1BQU0sd0JBQXdCLENBQUM7SUFDL0IsTUFBTSx3QkFBd0IsQ0FBQztFQUNqQyIsImZpbGUiOiJzcmMvYXBwL1RvRG9MaXN0L1RvRG9MaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZmEtY2hlY2stY2lyY2xlIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgdGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5uZXdJdGVte1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZXhhbXBsZSB7XHJcbiAgICAwJSAgIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxyXG4gICAgMjUlICB7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cclxuICAgIDUwJSAge2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ToDoList',
          templateUrl: './ToDoList.component.html',
          styleUrls: ['./ToDoList.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_3__["ToDoListService"]
        }, {
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_5__["SignalRService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_Resolvers/ConnectedUsersPanel.resolver.ts":
  /*!************************************************************!*\
    !*** ./src/app/_Resolvers/ConnectedUsersPanel.resolver.ts ***!
    \************************************************************/

  /*! exports provided: ConnectedUsersResolver */

  /***/
  function srcApp_ResolversConnectedUsersPanelResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedUsersResolver", function () {
      return ConnectedUsersResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_Services/toDoList.service */
    "./src/app/_Services/toDoList.service.ts");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");
    /* harmony import */


    var _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_Services/signalRService.service */
    "./src/app/_Services/signalRService.service.ts");

    var ConnectedUsersResolver = /*#__PURE__*/function () {
      function ConnectedUsersResolver(toDoListService, authService, signalRService) {
        _classCallCheck(this, ConnectedUsersResolver);

        this.toDoListService = toDoListService;
        this.authService = authService;
        this.signalRService = signalRService;
      }

      _createClass(ConnectedUsersResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          this.signalRService.startConnection(); // this.signalRService.addNewConnectionListener();

          console.log(this.signalRService.getConectedUsers());
          return this.signalRService.getConectedUsers();
        }
      }]);

      return ConnectedUsersResolver;
    }();

    ConnectedUsersResolver.ɵfac = function ConnectedUsersResolver_Factory(t) {
      return new (t || ConnectedUsersResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_toDoList_service__WEBPACK_IMPORTED_MODULE_1__["ToDoListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_signalRService_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"]));
    };

    ConnectedUsersResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConnectedUsersResolver,
      factory: ConnectedUsersResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectedUsersResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_1__["ToDoListService"]
        }, {
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_Resolvers/currenUser.resolver.ts":
  /*!***************************************************!*\
    !*** ./src/app/_Resolvers/currenUser.resolver.ts ***!
    \***************************************************/

  /*! exports provided: CurrentUser */

  /***/
  function srcApp_ResolversCurrenUserResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentUser", function () {
      return CurrentUser;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");

    var CurrentUser = /*#__PURE__*/function () {
      function CurrentUser(authService) {
        _classCallCheck(this, CurrentUser);

        this.authService = authService;
      }

      _createClass(CurrentUser, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.authService.getCurrentUser();
        }
      }]);

      return CurrentUser;
    }();

    CurrentUser.ɵfac = function CurrentUser_Factory(t) {
      return new (t || CurrentUser)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    CurrentUser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrentUser,
      factory: CurrentUser.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentUser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_Resolvers/toDoList.resolver.ts":
  /*!*************************************************!*\
    !*** ./src/app/_Resolvers/toDoList.resolver.ts ***!
    \*************************************************/

  /*! exports provided: ToDolistResolver */

  /***/
  function srcApp_ResolversToDoListResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDolistResolver", function () {
      return ToDolistResolver;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_Services/toDoList.service */
    "./src/app/_Services/toDoList.service.ts");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");

    var ToDolistResolver = /*#__PURE__*/function () {
      function ToDolistResolver(toDoListService, authService) {
        _classCallCheck(this, ToDolistResolver);

        this.toDoListService = toDoListService;
        this.authService = authService;
        this.currentPage = 1;
        this.pageSize = 10;
      }

      _createClass(ToDolistResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.toDoListService.getToDoItems(this.authService.getCurrentUserId(), this.currentPage, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return ToDolistResolver;
    }();

    ToDolistResolver.ɵfac = function ToDolistResolver_Factory(t) {
      return new (t || ToDolistResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Services_toDoList_service__WEBPACK_IMPORTED_MODULE_3__["ToDoListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    ToDolistResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ToDolistResolver,
      factory: ToDolistResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ToDolistResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_3__["ToDoListService"]
        }, {
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_Services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_Services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_ServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(httpService) {
        _classCallCheck(this, AuthService);

        this.httpService = httpService;
        this.userDisconected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem('token');
        }
      }, {
        key: "login",
        value: function login(data) {
          var _this7 = this;

          return this.httpService.post(this.baseUrl + 'auth/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var token = response['token'];
            var user = response['user'];

            if (token) {
              sessionStorage.setItem('token', token);
            }

            if (user) {
              sessionStorage.setItem('user', JSON.stringify(user));
              _this7.currentUser = user;
            }
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.clear();
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return JSON.parse(sessionStorage.getItem("user"));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return sessionStorage.getItem("token") !== null;
        }
      }, {
        key: "getCurrentUserId",
        value: function getCurrentUserId() {
          return JSON.parse(sessionStorage.getItem('user')).id;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, {
        userDisconected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/_Services/http.interceptors/http.error.interceptor.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/_Services/http.interceptors/http.error.interceptor.ts ***!
    \***********************************************************************/

  /*! exports provided: httpErrorInterceptor */

  /***/
  function srcApp_ServicesHttpInterceptorsHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpErrorInterceptor", function () {
      return httpErrorInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/operators */
    "./node_modules/rxjs/internal/operators/index.js");
    /* harmony import */


    var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_ErrorHandlres_IErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/ErrorHandlres/IErrorHandler */
    "./src/app/ErrorHandlres/IErrorHandler.ts");

    var httpErrorInterceptor = /*#__PURE__*/function () {
      function httpErrorInterceptor(errorHandler) {
        _classCallCheck(this, httpErrorInterceptor);

        this.errorHandler = errorHandler;
      }

      _createClass(httpErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this8 = this;

          return next.handle(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errorText = '';

            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
              if (error.status === 0) {
                // conection refused
                errorText = 'Error has ocurred trying to connect to the server';
              } else {
                errorText = _this8.buildMessageError(error);
              } //console.log(this.errorHandler);


              _this8.errorHandler.handleError(errorText);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message);
            }
          }));
        }
      }, {
        key: "buildMessageError",
        value: function buildMessageError(error) {
          return error.error;
        }
      }]);

      return httpErrorInterceptor;
    }();

    httpErrorInterceptor.ɵfac = function httpErrorInterceptor_Factory(t) {
      return new (t || httpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_ErrorHandlres_IErrorHandler__WEBPACK_IMPORTED_MODULE_4__["IErrorHandler"]));
    };

    httpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: httpErrorInterceptor,
      factory: httpErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](httpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [{
          type: src_app_ErrorHandlres_IErrorHandler__WEBPACK_IMPORTED_MODULE_4__["IErrorHandler"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_Services/http.interceptors/token.interceptor.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_Services/http.interceptors/token.interceptor.ts ***!
    \******************************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcApp_ServicesHttpInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/_Services/auth.service.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(auth) {
        _classCallCheck(this, TokenInterceptor);

        this.auth = auth;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (this.auth.getCurrentUser() !== null) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(this.auth.getToken())
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_Services/signalRService.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_Services/signalRService.service.ts ***!
    \*****************************************************/

  /*! exports provided: SignalRService */

  /***/
  function srcApp_ServicesSignalRServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignalRService", function () {
      return SignalRService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @aspnet/signalr */
    "./node_modules/@aspnet/signalr/dist/esm/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_Services/auth.service.ts");
    /* harmony import */


    var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-pwa/local-storage */
    "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");

    var SignalRService = /*#__PURE__*/function () {
      function SignalRService(authService, localStorage) {
        var _this9 = this;

        _classCallCheck(this, SignalRService);

        this.authService = authService;
        this.localStorage = localStorage;
        this.usersConnected = new Array();
        this.newUserConected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.startConnection = function () {
          _this9.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrlHub, {
            skipNegotiation: true,
            transport: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"].WebSockets,
            accessTokenFactory: function accessTokenFactory() {
              return _this9.authService.getToken();
            }
          }).build();

          _this9.hubConnection.on('newConnection', function (data) {
            _this9.handleData(data);
          });

          _this9.hubConnection.on('closeConnection', function (data) {
            _this9.handleData(data);
          });

          _this9.hubConnection.on('newTask', function (data) {
            _this9.newTask.emit(data);
          });

          _this9.hubConnection.start().then(function (res) {
            return console.log(res);
          })["catch"](function (err) {
            return console.log('Error while starting connection: ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'panel');
          });
        };

        this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrlHub, {
          skipNegotiation: true,
          transport: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"].WebSockets,
          accessTokenFactory: function accessTokenFactory() {
            return _this9.authService.getToken();
          }
        }).build();
      }

      _createClass(SignalRService, [{
        key: "disconectUser",
        value: function disconectUser() {
          var usersConected = JSON.parse(localStorage.getItem("connectedUsers"));

          if (usersConected.length === 1) {
            // i am the last
            localStorage.clear();
          }

          this.hubConnection.stop();
        }
      }, {
        key: "handleData",
        value: function handleData(data) {
          localStorage.setItem('connectedUsers', JSON.stringify(data));
          this.newUserConected.emit(data);
        }
      }, {
        key: "getConectedUsers",
        value: function getConectedUsers() {
          var data = localStorage.getItem('connectedUsers');
          var res = JSON.parse(data) || [];
          return res.map(function (res) {
            return res;
          });
        }
      }]);

      return SignalRService;
    }();

    SignalRService.ɵfac = function SignalRService_Factory(t) {
      return new (t || SignalRService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]));
    };

    SignalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignalRService,
      factory: SignalRService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]
        }];
      }, {
        newUserConected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        newTask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/_Services/toDoList.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_Services/toDoList.service.ts ***!
    \***********************************************/

  /*! exports provided: ToDoListService */

  /***/
  function srcApp_ServicesToDoListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoListService", function () {
      return ToDoListService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ToDoListService = /*#__PURE__*/function () {
      function ToDoListService(http) {
        _classCallCheck(this, ToDoListService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
      }

      _createClass(ToDoListService, [{
        key: "getToDoItems",
        value: function getToDoItems(userId, page, pageSize) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append("pageSize", pageSize);
          params = params.append("page", page);
          return this.http.get(this.baseUrl + 'ToDoList/' + userId, {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "addToDoItem",
        value: function addToDoItem(description) {
          return this.http.post(this.baseUrl + 'toDoList/addToDo', {
            'description': description
          });
        }
      }, {
        key: "markAsDone",
        value: function markAsDone(id, completed) {
          console.log(completed);
          return this.http.post(this.baseUrl + 'toDoList/changeState/' + id, {});
        }
      }, {
        key: "assign",
        value: function assign(idToDoItem, idUser) {
          return this.http.post(this.baseUrl + 'toDoList/assign/' + idToDoItem + "/" + idUser, {});
        }
      }, {
        key: "deleteToDo",
        value: function deleteToDo(id) {
          return this.http.post(this.baseUrl + 'toDoList/delete/' + id, {});
        }
      }]);

      return ToDoListService;
    }();

    ToDoListService.ɵfac = function ToDoListService_Factory(t) {
      return new (t || ToDoListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ToDoListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToDoListService,
      factory: ToDoListService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_guards/authGuard.ts":
  /*!**************************************!*\
    !*** ./src/app/_guards/authGuard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['/todolist']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ToDoList_ToDoList_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ToDoList/ToDoList.component */
    "./src/app/ToDoList/ToDoList.component.ts");
    /* harmony import */


    var _Resolvers_toDoList_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_Resolvers/toDoList.resolver */
    "./src/app/_Resolvers/toDoList.resolver.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _Resolvers_ConnectedUsersPanel_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_Resolvers/ConnectedUsersPanel.resolver */
    "./src/app/_Resolvers/ConnectedUsersPanel.resolver.ts");
    /* harmony import */


    var _Resolvers_currenUser_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_Resolvers/currenUser.resolver */
    "./src/app/_Resolvers/currenUser.resolver.ts");
    /* harmony import */


    var _guards_authGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_guards/authGuard */
    "./src/app/_guards/authGuard.ts");

    var routes = [{
      path: 'todolist',
      component: _ToDoList_ToDoList_component__WEBPACK_IMPORTED_MODULE_2__["ToDoListComponent"],
      resolve: {
        toDoItems: _Resolvers_toDoList_resolver__WEBPACK_IMPORTED_MODULE_3__["ToDolistResolver"],
        conectedUsers: _Resolvers_ConnectedUsersPanel_resolver__WEBPACK_IMPORTED_MODULE_5__["ConnectedUsersResolver"],
        user: _Resolvers_currenUser_resolver__WEBPACK_IMPORTED_MODULE_6__["CurrentUser"]
      }
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      canActivate: [_guards_authGuard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: '**',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_Services/auth.service */
    "./src/app/_Services/auth.service.ts");
    /* harmony import */


    var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-loading-bar/core */
    "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /**
     *
     */
    function AppComponent(authService) {
      _classCallCheck(this, AppComponent);

      this.authService = authService;
      this.title = 'ToDoListClient';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 2,
      consts: [["color", "#FF0000", 3, "height", "diameter"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", "4px")("diameter", "4px");
        }
      },
      directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Services_http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_Services/http.interceptors/http.error.interceptor */
    "./src/app/_Services/http.interceptors/http.error.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-loading-bar/http-client */
    "./node_modules/@ngx-loading-bar/http-client/__ivy_ngcc__/fesm2015/ngx-loading-bar-http-client.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ErrorHandlres_ToastErrorHandler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ErrorHandlres/ToastErrorHandler.service */
    "./src/app/ErrorHandlres/ToastErrorHandler.service.ts");
    /* harmony import */


    var _ErrorHandlres_IErrorHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ErrorHandlres//IErrorHandler */
    "./src/app/ErrorHandlres/IErrorHandler.ts");
    /* harmony import */


    var _ToDoList_ToDoList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ToDoList/ToDoList.component */
    "./src/app/ToDoList/ToDoList.component.ts");
    /* harmony import */


    var _ToDoItem_ToDoItem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ToDoItem/ToDoItem.component */
    "./src/app/ToDoItem/ToDoItem.component.ts");
    /* harmony import */


    var _Resolvers_toDoList_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_Resolvers/toDoList.resolver */
    "./src/app/_Resolvers/toDoList.resolver.ts");
    /* harmony import */


    var _Services_http_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./_Services/http.interceptors/token.interceptor */
    "./src/app/_Services/http.interceptors/token.interceptor.ts");
    /* harmony import */


    var _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./users-panel/users-panel.component */
    "./src/app/users-panel/users-panel.component.ts");
    /* harmony import */


    var _Resolvers_ConnectedUsersPanel_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./_Resolvers/ConnectedUsersPanel.resolver */
    "./src/app/_Resolvers/ConnectedUsersPanel.resolver.ts");
    /* harmony import */


    var _Resolvers_currenUser_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./_Resolvers/currenUser.resolver */
    "./src/app/_Resolvers/currenUser.resolver.ts");
    /* harmony import */


    var _modal_assign_todoitem_modal_assign_todoitem_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./modal-assign-todoitem/modal-assign-todoitem.component */
    "./src/app/modal-assign-todoitem/modal-assign-todoitem.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _Services_http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["httpErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _Services_http_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"],
        multi: true
      }, {
        provide: _ErrorHandlres_IErrorHandler__WEBPACK_IMPORTED_MODULE_13__["IErrorHandler"],
        useClass: _ErrorHandlres_ToastErrorHandler_service__WEBPACK_IMPORTED_MODULE_12__["ToastErrorHandlerService"]
      }, _Resolvers_toDoList_resolver__WEBPACK_IMPORTED_MODULE_16__["ToDolistResolver"], _Resolvers_ConnectedUsersPanel_resolver__WEBPACK_IMPORTED_MODULE_19__["ConnectedUsersResolver"], _Resolvers_currenUser_resolver__WEBPACK_IMPORTED_MODULE_20__["CurrentUser"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_10__["LoadingBarHttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _ToDoList_ToDoList_component__WEBPACK_IMPORTED_MODULE_14__["ToDoListComponent"], _ToDoItem_ToDoItem_component__WEBPACK_IMPORTED_MODULE_15__["ToDoItemComponent"], _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_18__["UsersPanelComponent"], _modal_assign_todoitem_modal_assign_todoitem_component__WEBPACK_IMPORTED_MODULE_21__["ModalAssignTodoitemComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_10__["LoadingBarHttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _ToDoList_ToDoList_component__WEBPACK_IMPORTED_MODULE_14__["ToDoListComponent"], _ToDoItem_ToDoItem_component__WEBPACK_IMPORTED_MODULE_15__["ToDoItemComponent"], _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_18__["UsersPanelComponent"], _modal_assign_todoitem_modal_assign_todoitem_component__WEBPACK_IMPORTED_MODULE_21__["ModalAssignTodoitemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_10__["LoadingBarHttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _Services_http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["httpErrorInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _Services_http_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"],
            multi: true
          }, {
            provide: _ErrorHandlres_IErrorHandler__WEBPACK_IMPORTED_MODULE_13__["IErrorHandler"],
            useClass: _ErrorHandlres_ToastErrorHandler_service__WEBPACK_IMPORTED_MODULE_12__["ToastErrorHandlerService"]
          }, _Resolvers_toDoList_resolver__WEBPACK_IMPORTED_MODULE_16__["ToDolistResolver"], _Resolvers_ConnectedUsersPanel_resolver__WEBPACK_IMPORTED_MODULE_19__["ConnectedUsersResolver"], _Resolvers_currenUser_resolver__WEBPACK_IMPORTED_MODULE_20__["CurrentUser"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent, userInputModel */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userInputModel", function () {
      return userInputModel;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_Services/signalRService.service */
    "./src/app/_Services/signalRService.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, toastr, router, signalR) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.signalR = signalR;
        this.modelInputLogin = new userInputModel();
        this.modelInputLogin.userName = 'user1@gmail.com';
        this.modelInputLogin.password = 'password';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this10 = this;

          this.authService.login(this.modelInputLogin).subscribe(function (next) {
            _this10.toastr.success("welcome ".concat(_this10.authService.getCurrentUser().userName));

            _this10.router.navigate(['/todolist']);
          }, function (error) {
            console.log(error);
          }, function () {
            _this10.router.navigate(['/todolist']);
          });
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return this.authService.getCurrentUser() && !this.authService.getCurrentUser() !== null;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_signalRService_service__WEBPACK_IMPORTED_MODULE_4__["SignalRService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 21,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-9", "col-md-7", "col-lg-5", "mx-auto"], [1, "card", "card-signin", "my-5"], [1, "card-body"], [1, "card-title", "text-center"], [1, "form-signin", 3, "submit"], ["loginForm", "ngForm"], [1, "form-label-group"], ["type", "email", "name", "userName", "placeholder", "User Name", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "custom-control", "custom-checkbox", "mb-3"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", "text-uppercase", 3, "disabled"], [1, "my-4"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.modelInputLogin.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.modelInputLogin.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remember password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " >Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelInputLogin.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelInputLogin.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["[_ngcontent-%COMP%]:root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n  html[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  body[_ngcontent-%COMP%] {\r\n    background: #007bff;\r\n    background: linear-gradient(to right, #0062E6, #33AEFF);\r\n    min-height: 100%;\r\n    width: 100%;\r\n  }\r\n  .card-signin[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  .card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  .card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n    padding: 2rem;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    \r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: transparent;\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: transparent;\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%] {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  .btn-google[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #ea4335;\r\n  }\r\n  .btn-facebook[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #3b5998;\r\n  }\r\n  \r\n  @supports (-ms-ime-align: auto) {\r\n    .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n    .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n      color: #777;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix1REFBdUQ7SUFDdkQsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtFQUVBO0lBQ0UsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4Q0FBOEM7RUFDaEQ7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFFQTs7SUFFRSxzREFBc0Q7RUFDeEQ7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsK0JBQStCO0VBQ2pDO0VBVUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSw0RUFBNEU7SUFDNUUsZ0RBQWdEO0VBQ2xEO0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7RUFFQTtzREFDb0Q7RUFFcEQ7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAgIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbiAgfVxyXG4gIGh0bWx7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbmluIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gIH1cclxuICBcclxuICAvKiBGYWxsYmFjayBmb3IgRWRnZVxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_4__["SignalRService"]
        }];
      }, null);
    })();

    var userInputModel = function userInputModel() {
      _classCallCheck(this, userInputModel);
    };
    /***/

  },

  /***/
  "./src/app/modal-assign-todoitem/modal-assign-todoitem.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modal-assign-todoitem/modal-assign-todoitem.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ModalAssignTodoitemComponent */

  /***/
  function srcAppModalAssignTodoitemModalAssignTodoitemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalAssignTodoitemComponent", function () {
      return ModalAssignTodoitemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_Services/toDoList.service */
    "./src/app/_Services/toDoList.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ModalAssignTodoitemComponent_ul_9_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAssignTodoitemComponent_ul_9_li_1_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.assign(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Assign ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.userName, " ");
      }
    }

    function ModalAssignTodoitemComponent_ul_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalAssignTodoitemComponent_ul_9_li_1_Template, 4, 1, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.todoitem.userName !== item_r1.userName && ctx_r0.canAssign(item_r1));
      }
    }

    var ModalAssignTodoitemComponent = /*#__PURE__*/function () {
      function ModalAssignTodoitemComponent(todoListService, activeModal, authService) {
        _classCallCheck(this, ModalAssignTodoitemComponent);

        this.todoListService = todoListService;
        this.activeModal = activeModal;
        this.authService = authService;
      }

      _createClass(ModalAssignTodoitemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "assign",
        value: function assign(user) {
          var _this11 = this;

          this.todoListService.assign(this.todoitem.id, user.id).subscribe(function (res) {
            _this11.todoitem = res;

            _this11.activeModal.close(res);
          });
        }
      }, {
        key: "canAssign",
        value: function canAssign(user) {
          console.log(this.authService.getCurrentUser().userName);
          return user.userName !== this.authService.getCurrentUser().userName;
        }
      }]);

      return ModalAssignTodoitemComponent;
    }();

    ModalAssignTodoitemComponent.ɵfac = function ModalAssignTodoitemComponent_Factory(t) {
      return new (t || ModalAssignTodoitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_toDoList_service__WEBPACK_IMPORTED_MODULE_1__["ToDoListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ModalAssignTodoitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalAssignTodoitemComponent,
      selectors: [["app-modal-assign-todoitem"]],
      inputs: {
        users: "users",
        todoitem: "todoitem"
      },
      decls: 13,
      vars: 2,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "list-group", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "list-group"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-primary", 3, "click"]],
      template: function ModalAssignTodoitemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assign ToDo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAssignTodoitemComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalAssignTodoitemComponent_ul_9_Template, 2, 1, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAssignTodoitemComponent_Template_button_click_11_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ToDo assigned to : ", ctx.todoitem.userName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWFzc2lnbi10b2RvaXRlbS9tb2RhbC1hc3NpZ24tdG9kb2l0ZW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalAssignTodoitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-assign-todoitem',
          templateUrl: './modal-assign-todoitem.component.html',
          styleUrls: ['./modal-assign-todoitem.component.css']
        }]
      }], function () {
        return [{
          type: _Services_toDoList_service__WEBPACK_IMPORTED_MODULE_1__["ToDoListService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, {
        users: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        todoitem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/users-panel/users-panel.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/users-panel/users-panel.component.ts ***!
    \******************************************************/

  /*! exports provided: UsersPanelComponent */

  /***/
  function srcAppUsersPanelUsersPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPanelComponent", function () {
      return UsersPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_Services/signalRService.service */
    "./src/app/_Services/signalRService.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_Services/auth.service */
    "./src/app/_Services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UsersPanelComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.userName);
      }
    }

    function UsersPanelComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPanelComponent_ng_container_4_div_1_Template, 11, 2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.canSendMessage(user_r1));
      }
    }

    var UsersPanelComponent = /*#__PURE__*/function () {
      function UsersPanelComponent(signalRService, http, authService, route, toastr) {
        _classCallCheck(this, UsersPanelComponent);

        this.signalRService = signalRService;
        this.http = http;
        this.authService = authService;
        this.route = route;
        this.toastr = toastr;
      }

      _createClass(UsersPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.signalRService.newUserConected.subscribe(function (next) {
            _this12.conectedUsers = next;
          });
        }
      }, {
        key: "getCurrentUserId",
        value: function getCurrentUserId() {
          return this.authService.getCurrentUserId();
        }
      }, {
        key: "canSendMessage",
        value: function canSendMessage(user) {
          return this.getCurrentUserId() !== user.id;
        }
      }]);

      return UsersPanelComponent;
    }();

    UsersPanelComponent.ɵfac = function UsersPanelComponent_Factory(t) {
      return new (t || UsersPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_signalRService_service__WEBPACK_IMPORTED_MODULE_1__["SignalRService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    UsersPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersPanelComponent,
      selectors: [["app-users-panel"]],
      inputs: {
        conectedUsers: "conectedUsers"
      },
      decls: 5,
      vars: 1,
      consts: [["id", "page-content", 1, "page-content", "page-container"], [1, "row"], [1, "col-sm-6"], [1, "list", "list-row", "block"], [4, "ngFor", "ngForOf"], ["class", "list-item", "data-id", "19", 4, "ngIf"], ["data-id", "19", 1, "list-item"], [1, "w-48", "avatar", "gd-primary"], ["src", "https://img.icons8.com/color/48/000000/administrator-male.png", "alt", "."], [1, "flex"], ["data-abc", "true", 1, "item-author", "text-color"], [1, "item-except", "text-muted", "text-sm", "h-1x"], [1, "no-wrap"], [1, "item-date", "text-muted", "text-sm", "d-none", "d-md-block"]],
      template: function UsersPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersPanelComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conectedUsers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: .875rem;\r\n    font-weight: 400;\r\n    line-height: 1.4285714286;\r\n    color: #212529;\r\n    text-align: left;\r\n    background-color: #f9f9fa\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #448bff;\r\n    text-decoration: none;\r\n    background-color: transparent\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #005ef7;\r\n    text-decoration: underline\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\r\n    color: inherit;\r\n    text-decoration: none\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover {\r\n    color: inherit;\r\n    text-decoration: none\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\r\n    outline: 0\r\n}\r\n\r\n\r\n\r\n@media (min-width:576px) {\r\n    .col-sm[_ngcontent-%COMP%] {\r\n        flex-basis: 0;\r\n        flex-grow: 1;\r\n        max-width: 100%\r\n    }\r\n\r\n    .col-sm-auto[_ngcontent-%COMP%] {\r\n        flex: 0 0 auto;\r\n        width: auto;\r\n        max-width: 100%\r\n    }\r\n\r\n    .col-sm-1[_ngcontent-%COMP%] {\r\n        flex: 0 0 8.3333333333%;\r\n        max-width: 8.3333333333%\r\n    }\r\n\r\n    .col-sm-2[_ngcontent-%COMP%] {\r\n        flex: 0 0 16.6666666667%;\r\n        max-width: 16.6666666667%\r\n    }\r\n\r\n    .col-sm-3[_ngcontent-%COMP%] {\r\n        flex: 0 0 25%;\r\n        max-width: 25%\r\n    }\r\n\r\n    .col-sm-4[_ngcontent-%COMP%] {\r\n        flex: 0 0 33.3333333333%;\r\n        max-width: 33.3333333333%\r\n    }\r\n\r\n    .col-sm-5[_ngcontent-%COMP%] {\r\n        flex: 0 0 41.6666666667%;\r\n        max-width: 41.6666666667%\r\n    }\r\n\r\n    .col-sm-6[_ngcontent-%COMP%] {\r\n        flex: 0 0 50%;\r\n        max-width: 50%\r\n    }\r\n\r\n    .col-sm-7[_ngcontent-%COMP%] {\r\n        flex: 0 0 58.3333333333%;\r\n        max-width: 58.3333333333%\r\n    }\r\n\r\n    .col-sm-8[_ngcontent-%COMP%] {\r\n        flex: 0 0 66.6666666667%;\r\n        max-width: 66.6666666667%\r\n    }\r\n\r\n    .col-sm-9[_ngcontent-%COMP%] {\r\n        flex: 0 0 75%;\r\n        max-width: 75%\r\n    }\r\n\r\n    .col-sm-10[_ngcontent-%COMP%] {\r\n        flex: 0 0 83.3333333333%;\r\n        max-width: 83.3333333333%\r\n    }\r\n\r\n    .col-sm-11[_ngcontent-%COMP%] {\r\n        flex: 0 0 91.6666666667%;\r\n        max-width: 91.6666666667%\r\n    }\r\n\r\n    .col-sm-12[_ngcontent-%COMP%] {\r\n        flex: 0 0 100%;\r\n        max-width: 100%\r\n    }\r\n\r\n    .order-sm-first[_ngcontent-%COMP%] {\r\n        order: -1\r\n    }\r\n\r\n    .order-sm-last[_ngcontent-%COMP%] {\r\n        order: 13\r\n    }\r\n\r\n    .order-sm-0[_ngcontent-%COMP%] {\r\n        order: 0\r\n    }\r\n\r\n    .order-sm-1[_ngcontent-%COMP%] {\r\n        order: 1\r\n    }\r\n\r\n    .order-sm-2[_ngcontent-%COMP%] {\r\n        order: 2\r\n    }\r\n\r\n    .order-sm-3[_ngcontent-%COMP%] {\r\n        order: 3\r\n    }\r\n\r\n    .order-sm-4[_ngcontent-%COMP%] {\r\n        order: 4\r\n    }\r\n\r\n    .order-sm-5[_ngcontent-%COMP%] {\r\n        order: 5\r\n    }\r\n\r\n    .order-sm-6[_ngcontent-%COMP%] {\r\n        order: 6\r\n    }\r\n\r\n    .order-sm-7[_ngcontent-%COMP%] {\r\n        order: 7\r\n    }\r\n\r\n    .order-sm-8[_ngcontent-%COMP%] {\r\n        order: 8\r\n    }\r\n\r\n    .order-sm-9[_ngcontent-%COMP%] {\r\n        order: 9\r\n    }\r\n\r\n    .order-sm-10[_ngcontent-%COMP%] {\r\n        order: 10\r\n    }\r\n\r\n    .order-sm-11[_ngcontent-%COMP%] {\r\n        order: 11\r\n    }\r\n\r\n    .order-sm-12[_ngcontent-%COMP%] {\r\n        order: 12\r\n    }\r\n\r\n    .offset-sm-0[_ngcontent-%COMP%] {\r\n        margin-left: 0\r\n    }\r\n\r\n    .offset-sm-1[_ngcontent-%COMP%] {\r\n        margin-left: 8.3333333333%\r\n    }\r\n\r\n    .offset-sm-2[_ngcontent-%COMP%] {\r\n        margin-left: 16.6666666667%\r\n    }\r\n\r\n    .offset-sm-3[_ngcontent-%COMP%] {\r\n        margin-left: 25%\r\n    }\r\n\r\n    .offset-sm-4[_ngcontent-%COMP%] {\r\n        margin-left: 33.3333333333%\r\n    }\r\n\r\n    .offset-sm-5[_ngcontent-%COMP%] {\r\n        margin-left: 41.6666666667%\r\n    }\r\n\r\n    .offset-sm-6[_ngcontent-%COMP%] {\r\n        margin-left: 50%\r\n    }\r\n\r\n    .offset-sm-7[_ngcontent-%COMP%] {\r\n        margin-left: 58.3333333333%\r\n    }\r\n\r\n    .offset-sm-8[_ngcontent-%COMP%] {\r\n        margin-left: 66.6666666667%\r\n    }\r\n\r\n    .offset-sm-9[_ngcontent-%COMP%] {\r\n        margin-left: 75%\r\n    }\r\n\r\n    .offset-sm-10[_ngcontent-%COMP%] {\r\n        margin-left: 83.3333333333%\r\n    }\r\n\r\n    .offset-sm-11[_ngcontent-%COMP%] {\r\n        margin-left: 91.6666666667%\r\n    }\r\n}\r\n\r\n\r\n\r\n.text-muted[_ngcontent-%COMP%] {\r\n    color: #99a0ac !important\r\n}\r\n\r\n\r\n\r\n.block[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    border-width: 0;\r\n    border-radius: .25rem;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);\r\n    margin-bottom: 1.5rem\r\n}\r\n\r\n\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    line-height: 1;\r\n    border-radius: 500px;\r\n    white-space: nowrap;\r\n    font-weight: 700;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    border-radius: 500px;\r\n    box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15)\r\n}\r\n\r\n\r\n\r\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: inherit;\r\n    width: 100%\r\n}\r\n\r\n\r\n\r\n.gd-primary[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border: none;\r\n    background: #448bff linear-gradient(45deg, #448bff, #44e9ff)\r\n}\r\n\r\n\r\n\r\n.gd-success[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border: none;\r\n    background: #31c971 linear-gradient(45deg, #31c971, #3dc931)\r\n}\r\n\r\n\r\n\r\n.gd-info[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border: none;\r\n    background: #14bae4 linear-gradient(45deg, #14bae4, #14e4a6)\r\n}\r\n\r\n\r\n\r\n.gd-warning[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border: none;\r\n    background: #f4c414 linear-gradient(45deg, #f4c414, #f45414)\r\n}\r\n\r\n\r\n\r\n@media (min-width:992px) {\r\n    .page-container[_ngcontent-%COMP%] {\r\n        max-width: 1140px;\r\n        margin: 0 auto\r\n    }\r\n\r\n    .page-sidenav[_ngcontent-%COMP%] {\r\n        display: block !important\r\n    }\r\n}\r\n\r\n\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    padding-right: 0\r\n}\r\n\r\n\r\n\r\n.list-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word\r\n}\r\n\r\n\r\n\r\n.list-row[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: .75rem .625rem\r\n}\r\n\r\n\r\n\r\n.list-row[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n    padding-left: .625rem;\r\n    padding-right: .625rem\r\n}\r\n\r\n\r\n\r\n.no-wrap[_ngcontent-%COMP%] {\r\n    white-space: nowrap\r\n}\r\n\r\n\r\n\r\n.text-color[_ngcontent-%COMP%] {\r\n    color: #5e676f\r\n}\r\n\r\n\r\n\r\n.text-gd[_ngcontent-%COMP%] {\r\n    -webkit-background-clip: text;\r\n    -moz-background-clip: text;\r\n    background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    -moz-text-fill-color: transparent;\r\n    text-fill-color: transparent\r\n}\r\n\r\n\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n    font-size: .825rem\r\n}\r\n\r\n\r\n\r\n.h-1x[_ngcontent-%COMP%] {\r\n    height: 1.25rem;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical\r\n}\r\n\r\n\r\n\r\n.w-48[_ngcontent-%COMP%] {\r\n    width: 48px !important;\r\n    height: 48px !important\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    text-decoration: none\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtcGFuZWwvdXNlcnMtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxpS0FBaUs7SUFDakssa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQjtBQUNKOzs7O0FBSUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCO0FBQ0o7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOzs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7OztBQUVBOztJQUVJLGNBQWM7SUFDZDtBQUNKOzs7O0FBRUE7SUFDSTtBQUNKOzs7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QjtJQUNKOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCO0lBQ0o7O0lBRUE7UUFDSSxhQUFhO1FBQ2I7SUFDSjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QjtJQUNKOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCO0lBQ0o7O0lBRUE7UUFDSSxhQUFhO1FBQ2I7SUFDSjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QjtJQUNKOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCO0lBQ0o7O0lBRUE7UUFDSSxhQUFhO1FBQ2I7SUFDSjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QjtJQUNKOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCO0lBQ0o7O0lBRUE7UUFDSSxjQUFjO1FBQ2Q7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKOzs7O0FBRUE7SUFDSTtBQUNKOzs7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDO0FBQ0o7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBRW5CLGFBQWE7SUFFYix1QkFBdUI7SUFFdkIsbUJBQW1CO0lBRW5CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEI7QUFDSjs7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7Ozs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKOzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7Ozs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7OztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakI7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7QUFDSjs7OztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUVsQixhQUFhO0lBRWIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKOzs7O0FBRUE7SUFFSSxtQkFBbUI7SUFFbkIsbUJBQW1CO0lBQ25CO0FBQ0o7Ozs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjtBQUNKOzs7O0FBRUE7SUFDSTtBQUNKOzs7O0FBRUE7SUFDSTtBQUNKOzs7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDO0FBQ0o7Ozs7QUFFQTtJQUNJO0FBQ0o7Ozs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQjtBQUNKOzs7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjs7OztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLXBhbmVsL3VzZXJzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjg2O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYVxyXG59XHJcblxyXG5cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM0NDhiZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA1ZWY3O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcclxufVxyXG5cclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMsXHJcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmhvdmVyIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpIHtcclxuICAgIC5jb2wtc20ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtc20tYXV0byB7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS0xIHtcclxuICAgICAgICBmbGV4OiAwIDAgOC4zMzMzMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTIge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NjY3JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS0zIHtcclxuICAgICAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgICAgIG1heC13aWR0aDogMjUlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS00IHtcclxuICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtc20tNSB7XHJcbiAgICAgICAgZmxleDogMCAwIDQxLjY2NjY2NjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTYge1xyXG4gICAgICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTcge1xyXG4gICAgICAgIGZsZXg6IDAgMCA1OC4zMzMzMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS04IHtcclxuICAgICAgICBmbGV4OiAwIDAgNjYuNjY2NjY2NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtc20tOSB7XHJcbiAgICAgICAgZmxleDogMCAwIDc1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDc1JVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtc20tMTAge1xyXG4gICAgICAgIGZsZXg6IDAgMCA4My4zMzMzMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zbS0xMSB7XHJcbiAgICAgICAgZmxleDogMCAwIDkxLjY2NjY2NjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXNtLTEyIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tZmlyc3Qge1xyXG4gICAgICAgIG9yZGVyOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlci1zbS1sYXN0IHtcclxuICAgICAgICBvcmRlcjogMTNcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tMCB7XHJcbiAgICAgICAgb3JkZXI6IDBcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tMSB7XHJcbiAgICAgICAgb3JkZXI6IDFcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tMiB7XHJcbiAgICAgICAgb3JkZXI6IDJcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tMyB7XHJcbiAgICAgICAgb3JkZXI6IDNcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tNCB7XHJcbiAgICAgICAgb3JkZXI6IDRcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tNSB7XHJcbiAgICAgICAgb3JkZXI6IDVcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tNiB7XHJcbiAgICAgICAgb3JkZXI6IDZcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tNyB7XHJcbiAgICAgICAgb3JkZXI6IDdcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tOCB7XHJcbiAgICAgICAgb3JkZXI6IDhcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tOSB7XHJcbiAgICAgICAgb3JkZXI6IDlcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItc20tMTAge1xyXG4gICAgICAgIG9yZGVyOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlci1zbS0xMSB7XHJcbiAgICAgICAgb3JkZXI6IDExXHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLXNtLTEyIHtcclxuICAgICAgICBvcmRlcjogMTJcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXNtLTAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS0xIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtc20tMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS0zIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS00IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXNtLTUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtc20tNiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJVxyXG4gICAgfVxyXG5cclxuICAgIC5vZmZzZXQtc20tNyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlXHJcbiAgICB9XHJcblxyXG4gICAgLm9mZnNldC1zbS04IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXNtLTkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3NSVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXNtLTEwIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyVcclxuICAgIH1cclxuXHJcbiAgICAub2Zmc2V0LXNtLTExIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyVcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgY29sb3I6ICM5OWEwYWMgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYmxvY2ssXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtXHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSg1MCwgNTAsIDUwLCAuMTUpXHJcbn1cclxuXHJcbi5hdmF0YXIgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4uZ2QtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM0NDhiZmYgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDQ4YmZmLCAjNDRlOWZmKVxyXG59XHJcblxyXG4uZ2Qtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMzMWM5NzEgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzFjOTcxLCAjM2RjOTMxKVxyXG59XHJcblxyXG4uZ2QtaW5mbyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMxNGJhZTQgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTRiYWU0LCAjMTRlNGE2KVxyXG59XHJcblxyXG4uZ2Qtd2FybmluZyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmNGM0MTQgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjRjNDE0LCAjZjQ1NDE0KVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0b1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXNpZGVuYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMFxyXG59XHJcblxyXG4ubGlzdC1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZFxyXG59XHJcblxyXG4ubGlzdC1yb3cgLmxpc3QtaXRlbSB7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAuNjI1cmVtXHJcbn1cclxuXHJcbi5saXN0LXJvdyAubGlzdC1pdGVtPioge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNjI1cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjYyNXJlbVxyXG59XHJcblxyXG4ubm8td3JhcCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwXHJcbn1cclxuXHJcbi50ZXh0LWNvbG9yIHtcclxuICAgIGNvbG9yOiAjNWU2NzZmXHJcbn1cclxuXHJcbi50ZXh0LWdkIHtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi50ZXh0LXNtIHtcclxuICAgIGZvbnQtc2l6ZTogLjgyNXJlbVxyXG59XHJcblxyXG4uaC0xeCB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsXHJcbn1cclxuXHJcbi53LTQ4IHtcclxuICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudFxyXG59XHJcblxyXG5hOmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users-panel',
          templateUrl: './users-panel.component.html',
          styleUrls: ['./users-panel.component.css']
        }]
      }], function () {
        return [{
          type: _Services_signalRService_service__WEBPACK_IMPORTED_MODULE_1__["SignalRService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, {
        conectedUsers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'https://localhost:44367/api/',
      baseUrlHub: 'https://localhost:44367/panel'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ijura\source\repos\ToDoListAPI\ToDoListClient\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map