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
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.content-container {\n  padding: 84px 0px 0px 0px;\n  margin: 0px 5% 52px 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxIRFAtZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDg0cHggMHB4IDBweCAwcHg7XHJcbiAgbWFyZ2luOiAwcHggNSUgNTJweCA1JTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBwYWRkaW5nOiA4NHB4IDBweCAwcHggMHB4O1xuICBtYXJnaW46IDBweCA1JSA1MnB4IDUlO1xufSJdfQ== */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: "\n    <app-header></app-header>\n    <div class=\"content-container\">\n      <app-controls class=\"mat-elevation-z1\"\n        (isStarted)=\"isStarted = $event\"\n        (etlStats)=\"etlStats = $event\"\n        (etlData)=\"etlData = $event\"\n        (showWarning)=\"showWarning = $event\"\n        (isDone)=\"isDone = $event\"\n      ></app-controls>\n      <app-output class=\"mat-elevation-z1\"\n        [isStarted]=\"isStarted\"\n        [etlStats]=\"etlStats\"\n        [etlData]=\"etlData\"\n        [showWarning]=\"showWarning\"\n        [isDone]=\"isDone\"\n      ></app-output>\n      <router-outlet></router-outlet>\n      <div>\n        <app-footer></app-footer>\n      </div>\n    </div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material */
    "./src/app/material.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _controls_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./controls/controls.component */
    "./src/app/controls/controls.component.ts");
    /* harmony import */


    var _output_output_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./output/output.component */
    "./src/app/output/output.component.ts");
    /* harmony import */


    var _output_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./output/progress-bar/progress-bar.component */
    "./src/app/output/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _disable_control_disable_control_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./disable-control/disable-control.directive */
    "./src/app/disable-control/disable-control.directive.ts");
    /* harmony import */


    var _output_data_table_component_data_table_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./output/data-table-component/data-table-component.component */
    "./src/app/output/data-table-component/data-table-component.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _controls_controls_component__WEBPACK_IMPORTED_MODULE_10__["ControlsComponent"], _output_output_component__WEBPACK_IMPORTED_MODULE_11__["OutputComponent"], _output_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressBarComponent"], _disable_control_disable_control_directive__WEBPACK_IMPORTED_MODULE_14__["DisableControlDirective"], _output_data_table_component_data_table_component_component__WEBPACK_IMPORTED_MODULE_15__["DataTableComponentComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/controls/controls.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/controls/controls.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppControlsControlsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  height: 335px;\n}\n\nmat-card {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\nmat-card-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 15px;\n}\n\n.buttons-container {\n  display: grid;\n  grid-row: 2;\n  grid-template-areas: \"top-row top-row top-row\" \"bottom-row-extract bottom-row-transfer bottom-row-load\";\n  grid-row-gap: 2px;\n  grid-column-gap: 2px;\n}\n\n.top-row {\n  grid-area: top-row;\n}\n\n.bottom-row-extract {\n  grid-area: bottom-row-extract;\n}\n\n.bottom-row-transfer {\n  grid-area: bottom-row-transfer;\n}\n\n.bottom-row-load {\n  grid-area: bottom-row-load;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n}\n\ninput {\n  font-size: larger;\n}\n\n.pages-input {\n  width: 5ch;\n  margin-left: 5px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  opacity: 1;\n}\n\n.request-buttons-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row: 1;\n  grid-column-gap: 5px;\n  padding-top: 20px;\n}\n\n.request-buttons-container button {\n  width: 100px;\n  padding: 10px 0px;\n}\n\n.request-buttons-container button span.mat-button-wrap {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-column: 1;\n}\n\n.request-buttons-container button span.mat-button-wrap * {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\ni {\n  transform: scale(1.5);\n}\n\n.download-csv {\n  color: greenyellow;\n}\n\n.clear-database {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxIRFAtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbnRyb2xzXFxjb250cm9scy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVHQUNFO0VBRUYsaUJBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLDZCQUFBO0FDREY7O0FESUE7RUFDRSw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsMEJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTs7RUFHRyxVQUFBO0FDRkg7O0FETUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRElFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRko7O0FER0k7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDRE47O0FERU07RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNBUjs7QURNQTtFQUNFLHFCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMzNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwidG9wLXJvdyB0b3Atcm93IHRvcC1yb3dcIlxyXG4gICAgXCJib3R0b20tcm93LWV4dHJhY3QgYm90dG9tLXJvdy10cmFuc2ZlciBib3R0b20tcm93LWxvYWRcIjtcclxuICBncmlkLXJvdy1nYXA6IDJweDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDJweDtcclxufVxyXG5cclxuLnRvcC1yb3cge1xyXG4gIGdyaWQtYXJlYTogdG9wLXJvdztcclxufVxyXG5cclxuLmJvdHRvbS1yb3ctZXh0cmFjdCB7XHJcbiAgZ3JpZC1hcmVhOiBib3R0b20tcm93LWV4dHJhY3Q7XHJcbn1cclxuXHJcbi5ib3R0b20tcm93LXRyYW5zZmVyIHtcclxuICBncmlkLWFyZWE6IGJvdHRvbS1yb3ctdHJhbnNmZXI7XHJcbn1cclxuXHJcbi5ib3R0b20tcm93LWxvYWQge1xyXG4gIGdyaWQtYXJlYTogYm90dG9tLXJvdy1sb2FkO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5wYWdlcy1pbnB1dCB7XHJcbiAgd2lkdGg6IDVjaDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyAgXHJcblxyXG4gICBvcGFjaXR5OiAxO1xyXG5cclxufVxyXG5cclxuLnJlcXVlc3QtYnV0dG9ucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBncmlkLXJvdzogMTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBzcGFuLm1hdC1idXR0b24td3JhcCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICAgICoge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1jc3Yge1xyXG4gIGNvbG9yOiBncmVlbnllbGxvd1xyXG59XHJcblxyXG4uY2xlYXItZGF0YWJhc2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwibWF0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDMzNXB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidG9wLXJvdyB0b3Atcm93IHRvcC1yb3dcIiBcImJvdHRvbS1yb3ctZXh0cmFjdCBib3R0b20tcm93LXRyYW5zZmVyIGJvdHRvbS1yb3ctbG9hZFwiO1xuICBncmlkLXJvdy1nYXA6IDJweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycHg7XG59XG5cbi50b3Atcm93IHtcbiAgZ3JpZC1hcmVhOiB0b3Atcm93O1xufVxuXG4uYm90dG9tLXJvdy1leHRyYWN0IHtcbiAgZ3JpZC1hcmVhOiBib3R0b20tcm93LWV4dHJhY3Q7XG59XG5cbi5ib3R0b20tcm93LXRyYW5zZmVyIHtcbiAgZ3JpZC1hcmVhOiBib3R0b20tcm93LXRyYW5zZmVyO1xufVxuXG4uYm90dG9tLXJvdy1sb2FkIHtcbiAgZ3JpZC1hcmVhOiBib3R0b20tcm93LWxvYWQ7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4ucGFnZXMtaW5wdXQge1xuICB3aWR0aDogNWNoO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucmVxdWVzdC1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbi1nYXA6IDVweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ucmVxdWVzdC1idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLnJlcXVlc3QtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHNwYW4ubWF0LWJ1dHRvbi13cmFwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbjogMTtcbn1cbi5yZXF1ZXN0LWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiBzcGFuLm1hdC1idXR0b24td3JhcCAqIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG5pIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4uZG93bmxvYWQtY3N2IHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4uY2xlYXItZGF0YWJhc2Uge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/controls/controls.component.ts":
  /*!************************************************!*\
    !*** ./src/app/controls/controls.component.ts ***!
    \************************************************/

  /*! exports provided: ControlsComponent */

  /***/
  function srcAppControlsControlsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsComponent", function () {
      return ControlsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _review_service_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../review-service/review.service */
    "./src/app/review-service/review.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ControlsComponent =
    /*#__PURE__*/
    function () {
      function ControlsComponent(reviewService) {
        _classCallCheck(this, ControlsComponent);

        this.reviewService = reviewService;
        this.isStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.etlStats = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.etlData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showWarning = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isProcessing = false;
        this.isInputDisabled = false;
        this.isTransformDisabled = true;
        this.isLoadDisabled = true;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(999)]);
      }

      _createClass(ControlsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.control.valueChanges.subscribe(function (value) {
            if (value > 999) {
              _this.control.setValue(999, {
                emitEvent: false
              });
            }

            if (value < 0) {
              _this.control.setValue(1, {
                emitEvent: false
              });
            }

            if (value == 0) {
              _this.control.setValue(1, {
                emitEvent: false
              });
            }
          });
          setTimeout(function () {
            document.getElementById('input').click();
          }, 0);
        }
      }, {
        key: "onFullProcessClick",
        value: function onFullProcessClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var value, pages;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.cleanOutput();

                    if (!(this.input.nativeElement.value && this.pagesInput.nativeElement.value)) {
                      _context.next = 20;
                      break;
                    }

                    value = this.input.nativeElement.value;
                    pages = this.pagesInput.nativeElement.value;
                    this.isProcessing = true;
                    this.isStarted.emit(true);
                    _context.next = 8;
                    return this.reviewService.startETL(value, pages).toPromise();

                  case 8:
                    this.stats = _context.sent;
                    this.etlStats.emit("Proces ETL zakończony. Do bazy zaladowano: " + this.stats.reviews + " nowych opinii dotyczących " + this.stats.products + " znalezionych produktów.");
                    _context.next = 12;
                    return this.reviewService.getReviews().toPromise();

                  case 12:
                    this.result = _context.sent;
                    this.etlData.emit(this.result);
                    this.isDone.emit(true);
                    this.isProcessing = false;
                    this.isTransformDisabled = true;
                    this.isLoadDisabled = true;
                    _context.next = 21;
                    break;

                  case 20:
                    this.showWarning.emit(true);

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onExtractClick",
        value: function onExtractClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var value, pages;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.cleanOutput();

                    if (!(this.input.nativeElement.value && this.pagesInput.nativeElement.value)) {
                      _context2.next = 16;
                      break;
                    }

                    value = this.input.nativeElement.value;
                    pages = this.pagesInput.nativeElement.value;
                    this.isProcessing = true;
                    this.isStarted.emit(true);
                    _context2.next = 8;
                    return this.reviewService.startExtract(value, pages).toPromise();

                  case 8:
                    this.stats = _context2.sent;
                    this.etlStats.emit("Pobrano " + this.stats.reviews + " opinii, dotyczących " + this.stats.products + " znalezionych produktów.");
                    this.isDone.emit(true);
                    this.isProcessing = false;
                    this.isTransformDisabled = false;
                    this.isLoadDisabled = true;
                    _context2.next = 17;
                    break;

                  case 16:
                    this.showWarning.emit(true);

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onTransformClick",
        value: function onTransformClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.cleanOutput();
                    this.isProcessing = true;
                    this.isStarted.emit(true);
                    _context3.next = 5;
                    return this.reviewService.startTransform().toPromise();

                  case 5:
                    this.stats = _context3.sent;
                    this.etlStats.emit("Przetransformowano " + this.stats.reviews + " opinii.");
                    this.isDone.emit(true);
                    this.isProcessing = false;
                    this.isTransformDisabled = true;
                    this.isLoadDisabled = false;

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onLoadClick",
        value: function onLoadClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.cleanOutput();
                    this.isProcessing = true;
                    this.isStarted.emit(true);
                    _context4.next = 5;
                    return this.reviewService.startLoad().toPromise();

                  case 5:
                    this.stats = _context4.sent;
                    this.etlStats.emit("Do bazy zaladowano: " + this.stats.reviews + " nowych opinii dotyczących " + this.stats.products + " znalezionych produktów.");
                    _context4.next = 9;
                    return this.reviewService.getReviews().toPromise();

                  case 9:
                    this.result = _context4.sent;
                    this.etlData.emit(this.result);
                    this.isDone.emit(true);
                    this.isProcessing = false;
                    this.isTransformDisabled = true;
                    this.isLoadDisabled = true;

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "cleanOutput",
        value: function cleanOutput() {
          this.isStarted.emit(false);
          this.etlStats.emit(null);
          this.etlData.emit(null);
          this.isDone.emit(false);
        }
      }, {
        key: "downloadCSV",
        value: function downloadCSV() {
          this.reviewService.downloadCSV();
        }
      }, {
        key: "clearDb",
        value: function clearDb() {
          this.reviewService.clearDatabase().toPromise();
          this.etlData.emit(null);
        }
      }, {
        key: "viewData",
        value: function viewData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.cleanOutput();
                    this.isProcessing = true;
                    this.isStarted.emit(true);
                    _context5.next = 5;
                    return this.reviewService.getReviews().toPromise();

                  case 5:
                    this.result = _context5.sent;
                    this.etlData.emit(this.result);
                    this.isProcessing = false;
                    this.isDone.emit(true);

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ControlsComponent;
    }();

    ControlsComponent.ctorParameters = function () {
      return [{
        type: _review_service_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ControlsComponent.prototype, "isStarted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ControlsComponent.prototype, "etlStats", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ControlsComponent.prototype, "etlData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ControlsComponent.prototype, "showWarning", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ControlsComponent.prototype, "isDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("input", {
      static: false
    })], ControlsComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pagesInput", {
      static: false
    })], ControlsComponent.prototype, "pagesInput", void 0);
    ControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-controls",
      template: "\n    <mat-toolbar color=\"primary\" class=\"mat-elevation-z1\">\n      <div class=\"controls-container\">\n        <mat-card>\n          <mat-card-title>Panel kontrolny</mat-card-title>\n          <mat-card-content>\n            <div class=\"input-container\">\n              <mat-form-field floatLabel=\"always\">\n                <input\n                  id=\"input\"\n                  #input\n                  matInput\n                  placeholder=\"Szukany produkt:\"\n                  type=\"search\"\n                  [disabled]=\"isProcessing\"\n                />\n              </mat-form-field>\n              <mat-form-field class=\"pages-input\" floatLabel=\"always\">\n                <input\n                  id=\"pagesInput\"\n                  #pagesInput\n                  matInput\n                  value=\"1\"\n                  max=\"999\"\n                  min=\"1\"\n                  type=\"number\"\n                  [formControl]=\"control\"\n                  [disableControl]=\"isProcessing\"\n                  placeholder=\"Stron:\"\n                />\n              </mat-form-field>\n            </div>\n            <div class=\"buttons-container\">\n              <button\n                mat-stroked-button\n                color=\"primary\"\n                class=\"top-row\"\n                (click)=\"onFullProcessClick()\"\n                [disabled]=\"isProcessing\"\n              >\n                Kompletny proces ETL\n              </button>\n              <button\n                mat-stroked-button\n                color=\"primary\"\n                class=\"bottom-row-extract\"\n                (click)=\"onExtractClick()\"\n                [disabled]=\"isProcessing\"\n              >\n                Extract\n              </button>\n              <button\n                mat-stroked-button\n                color=\"primary\"\n                class=\"bottom-row-transfer\"\n                (click)=\"onTransformClick()\"\n                [disabled]=\"isProcessing || isTransformDisabled\"\n              >\n                Transform\n              </button>\n              <button\n                mat-stroked-button\n                color=\"primary\"\n                class=\"bottom-row-load\"\n                (click)=\"onLoadClick()\"\n                [disabled]=\"isProcessing || isLoadDisabled\"\n              >\n                Load\n              </button>\n            </div>\n            <div class=\"request-buttons-container\">\n              <button mat-raised-button color=\"primary\" (click)=\"downloadCSV()\">\n                <i class=\"material-icons download-csv\">cloud_download</i>\n                <div>Pobierz .CSV</div>\n              </button>\n              <button mat-raised-button color=\"primary\" (click)=\"viewData()\">\n                <i class=\"material-icons\">list</i>\n                <div>Zobacz dane</div>\n              </button>\n              <button mat-raised-button color=\"primary\" (click)=\"clearDb()\">\n                <i class=\"material-icons clear-database\">clear</i>\n                <div>Wyczy\u015B\u0107 baz\u0119</div>\n              </button>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </mat-toolbar>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./controls.component.scss */
      "./src/app/controls/controls.component.scss")).default]
    })], ControlsComponent);
    /***/
  },

  /***/
  "./src/app/disable-control/disable-control.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/app/disable-control/disable-control.directive.ts ***!
    \**************************************************************/

  /*! exports provided: DisableControlDirective */

  /***/
  function srcAppDisableControlDisableControlDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisableControlDirective", function () {
      return DisableControlDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DisableControlDirective =
    /*#__PURE__*/
    function () {
      function DisableControlDirective(ngControl) {
        _classCallCheck(this, DisableControlDirective);

        this.ngControl = ngControl;
      }

      _createClass(DisableControlDirective, [{
        key: "disableControl",
        set: function set(condition) {
          var action = condition ? 'disable' : 'enable';
          this.ngControl.control[action]();
        }
      }]);

      return DisableControlDirective;
    }();

    DisableControlDirective.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DisableControlDirective.prototype, "disableControl", null);
    DisableControlDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[disableControl]'
    })], DisableControlDirective);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  height: 32px;\n  z-index: 2;\n}\n\n.copyright {\n  font-size: small;\n  color: #ababab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcSERQLWZyb250ZW5kL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMzJweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29weXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogbGlnaHRlbigjMDAwLCA2NyUpO1xyXG59IiwibWF0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICNhYmFiYWI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: "\n    <mat-toolbar color=\"primary\" class='mat-elevation-z6'>\n      <span class='copyright'>Copyright @ 2019-2020 Marcin Skrzekut, Sebastian Rajca, Bartosz Por\u0119bski</span>\n    </mat-toolbar>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\n\n.toolbar-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.toolbar-container a mat-icon {\n  margin-right: 5px;\n  pointer-events: none;\n}\n\n.title {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcSERQLWZyb250ZW5kL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNDTjs7QURJQTtFQUNFLGdCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59IiwibWF0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbn1cblxuLnRvb2xiYXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50b29sYmFyLWNvbnRhaW5lciBhIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var HeaderComponent = function HeaderComponent(matIconRegistry, domSanitizer) {
      _classCallCheck(this, HeaderComponent);

      this.matIconRegistry = matIconRegistry;
      this.domSanitizer = domSanitizer;
      this.matIconRegistry.addSvgIcon("github", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github-circle-white-transparent.svg"));
    };

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: "\n    <mat-toolbar color=\"primary\" class='mat-elevation-z6'>\n      <div class=\"toolbar-container\">\n        <span class='title'\n          >Proces ETL - projekt z przedmiotu Hurtownie Danych 2019/2020</span\n        >\n        <a\n          href=\"https://github.com/cerbin1/data-scrapping\"\n          mat-flat-button\n          color=\"primary\"\n        >\n          <mat-icon svgIcon=\"github\"></mat-icon>GitHub\n        </a>\n      </div>\n    </mat-toolbar>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/material.ts":
  /*!*****************************!*\
    !*** ./src/app/material.ts ***!
    \*****************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/output/data-table-component/data-table-component.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/output/data-table-component/data-table-component.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOutputDataTableComponentDataTableComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-table {\n  overflow-x: scroll;\n}\n\n.mat-cell,\n.mat-header-cell {\n  word-wrap: initial;\n  display: table-cell;\n  padding: 0px 10px;\n  line-break: unset;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n.mat-row,\n.mat-header-row {\n  display: table-row;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.input-filter {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n}\n\ninput {\n  font-size: x-large;\n}\n\n.input-form {\n  width: 50vh;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L2RhdGEtdGFibGUtY29tcG9uZW50L0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcSERQLWZyb250ZW5kL3NyY1xcYXBwXFxvdXRwdXRcXGRhdGEtdGFibGUtY29tcG9uZW50XFxkYXRhLXRhYmxlLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3V0cHV0L2RhdGEtdGFibGUtY29tcG9uZW50L2RhdGEtdGFibGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvb3V0cHV0L2RhdGEtdGFibGUtY29tcG9uZW50L2RhdGEtdGFibGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4ubWF0LWNlbGwsXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHdvcmQtd3JhcDogaW5pdGlhbDtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGxpbmUtYnJlYWs6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubWF0LXJvdyxcclxuLm1hdC1oZWFkZXItcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjODg4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcblxyXG4uaW5wdXQtZmlsdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uaW5wdXQtZm9ybSB7XHJcbiAgd2lkdGg6IDUwdmg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuIiwiLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLm1hdC1jZWxsLFxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHdvcmQtd3JhcDogaW5pdGlhbDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGxpbmUtYnJlYWs6IHVuc2V0O1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1hdC1yb3csXG4ubWF0LWhlYWRlci1yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLmlucHV0LWZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uaW5wdXQtZm9ybSB7XG4gIHdpZHRoOiA1MHZoO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/output/data-table-component/data-table-component.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/output/data-table-component/data-table-component.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DataTableComponentComponent */

  /***/
  function srcAppOutputDataTableComponentDataTableComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableComponentComponent", function () {
      return DataTableComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DataTableComponentComponent =
    /*#__PURE__*/
    function () {
      function DataTableComponentComponent() {
        _classCallCheck(this, DataTableComponentComponent);

        this.displayedColumns = ["id", "reviewerusername", "rating", "upvotes", "downvotes", "date", "reviewedAfter", "content", "reviewerboughtproduct", "productid", "name", "description", "price", "download"];
      }

      _createClass(DataTableComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.etlData);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "downloadTxt",
        value: function downloadTxt(review) {
          var data = "Id recenzji: " + review.id.trim() + "\n" + "Nazwa użykownika: " + review.reviewerusername.trim() + "\n" + "Ocena: " + review.rating + "\n" + "Głosy za: " + review.upvotes + "\n" + "Głosy przeciw: " + review.downvotes + "\n" + "Data wystawienia: " + review.date.trim() + "\n" + "Oceniono po dniach: " + (review.reviewedafter ? review.reviewedafter.trim() : "B/D") + "\n" + "Treść opinii: " + review.content.trim() + "\n" + "Czy recenzujący kupił produkt: " + review.reviewerboughtproduct + "\n" + "Id produktu: " + review.productid.trim() + "\n" + "Nazwa produktu: " + review.name.trim() + "\n" + "Opis produktu: " + review.description.trim() + "\n" + "Cena produktu: " + review.price + "\n";
          var blob = new Blob(["\uFEFF" + data], {
            type: "text/plain"
          });
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = review.id + ".txt";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }, {
        key: "filter",
        value: function filter(value) {
          this.dataSource.filter = value.trim().toLocaleLowerCase();
        }
      }]);

      return DataTableComponentComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponentComponent.prototype, "etlData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: true
    })], DataTableComponentComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], DataTableComponentComponent.prototype, "paginator", void 0);
    DataTableComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-data-table-component",
      template: "\n    <div class=\"input-filter\">\n      <mat-form-field floatLabel=\"always\" class=\"input-form\">\n        <input\n          matInput\n          type=\"text\"\n          (keyup)=\"filter($event.target.value)\"\n          placeholder=\"Filtruj:\"\n        />\n      </mat-form-field>\n    </div>\n    <mat-table\n      class=\"lessons-table mat-elevation-z8\"\n      [dataSource]=\"dataSource\"\n      matSort\n    >\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Id recencji\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.id }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"reviewerusername\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Nazwa u\u017Cytkownika\n        </th>\n        <td mat-cell *matCellDef=\"let review\">\n          {{ review.reviewerusername }}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"rating\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Ocena</th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.rating }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"upvotes\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          G\u0142osy \"za\"\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.upvotes }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"downvotes\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          G\u0142osy \"przeciw\"\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.downvotes }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Data wystawienia\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.date | date }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"reviewedAfter\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Oceniono po dniach\n        </th>\n        <td mat-cell *matCellDef=\"let review\">\n          {{ review.reviewedafter }}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"content\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Tre\u015B\u0107 opini\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.content }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"reviewerboughtproduct\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Czy recenzuj\u0105cy kupi\u0142 produkt\n        </th>\n        <td mat-cell *matCellDef=\"let review\">\n          {{ review.reviewerboughtproduct }}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"productid\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Id produktu\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.productid }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Nazwa produktu\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.name }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Opis produktu\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.description }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"price\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Cena produktu\n        </th>\n        <td mat-cell *matCellDef=\"let review\">{{ review.price }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"download\" stickyEnd>\n        <th mat-header-cell *matHeaderCellDef>Pobierz .txt</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <a mat-button (click)=\"downloadTxt(row)\">Download</a>\n        </td>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n    </mat-table>\n    <mat-paginator\n      [length]=\"etlData?.length\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[10, 20, 50, 100, 500]\"\n    ></mat-paginator>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data-table-component.component.scss */
      "./src/app/output/data-table-component/data-table-component.component.scss")).default]
    })], DataTableComponentComponent);
    /***/
  },

  /***/
  "./src/app/output/output.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/output/output.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOutputOutputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info {\n  font-size: x-large;\n  color: #ababab;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n}\n\n.default-container {\n  height: calc(0.4 * 100vh);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n}\n\n.warning {\n  font-size: x-large;\n  color: red;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n}\n\n.stats {\n  margin: 20px 50px 0px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcSERQLWZyb250ZW5kL3NyY1xcYXBwXFxvdXRwdXRcXG91dHB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3V0cHV0L291dHB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiBsaWdodGVuKCMwMDAsIDY3JSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlZmF1bHQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMC40ICogMTAwdmgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgY29sb3I6IHJlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdHMge1xyXG4gIG1hcmdpbjogMjBweCA1MHB4IDBweCA1MHB4O1xyXG59XHJcbiIsIi5pbmZvIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogI2FiYWJhYjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRlZmF1bHQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDAuNCAqIDEwMHZoKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndhcm5pbmcge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0cyB7XG4gIG1hcmdpbjogMjBweCA1MHB4IDBweCA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/output/output.component.ts":
  /*!********************************************!*\
    !*** ./src/app/output/output.component.ts ***!
    \********************************************/

  /*! exports provided: OutputComponent */

  /***/
  function srcAppOutputOutputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutputComponent", function () {
      return OutputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OutputComponent = function OutputComponent() {
      _classCallCheck(this, OutputComponent);

      this.isStarted = false;
      this.isDone = false;
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OutputComponent.prototype, "isStarted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OutputComponent.prototype, "etlStats", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OutputComponent.prototype, "etlData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OutputComponent.prototype, "showWarning", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OutputComponent.prototype, "isDone", void 0);
    OutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-output",
      template: "\n    <div class=\"default-container\" *ngIf=\"!isStarted\">\n      <span class=\"warning\" *ngIf=\"showWarning\"\n        >Podaj poszukiwany produkt oraz liczb\u0119 stron w zakresie 1-999.</span\n      >\n      <span class=\"info\"\n        >Rozpocznij proces ETL lub jeden z jego pojedynczych krok\xF3w za pomoca\n        przycisk\xF3w powy\u017Cej.\n      </span>\n    </div>\n    <div class=\"output-container\" *ngIf=\"isStarted\">\n      <app-progress-bar *ngIf=\"!isDone\"></app-progress-bar>\n      <div class=\"content-container\">\n        <div class=\"stats-container\" *ngIf=\"etlStats\">\n          <mat-card class=\"stats\">{{ etlStats }}</mat-card>\n        </div>\n        <app-data-table-component *ngIf=\"etlData\" [etlData]=\"etlData\"></app-data-table-component>\n      </div>\n    </div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./output.component.scss */
      "./src/app/output/output.component.scss")).default]
    })], OutputComponent);
    /***/
  },

  /***/
  "./src/app/output/progress-bar/progress-bar.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/output/progress-bar/progress-bar.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOutputProgressBarProgressBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress-container {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  padding: 0px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L3Byb2dyZXNzLWJhci9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEhEUC1mcm9udGVuZC9zcmNcXGFwcFxcb3V0cHV0XFxwcm9ncmVzcy1iYXJcXHByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3V0cHV0L3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXQvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufSIsIi5wcm9ncmVzcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/output/progress-bar/progress-bar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/output/progress-bar/progress-bar.component.ts ***!
    \***************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppOutputProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgressBarComponent = function ProgressBarComponent() {
      _classCallCheck(this, ProgressBarComponent);
    };

    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-progress-bar",
      template: "\n    <div class=\"progress-container\" id='progressContainer'>\n      <span>Przetwarzanie...</span>\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress-bar.component.scss */
      "./src/app/output/progress-bar/progress-bar.component.scss")).default]
    })], ProgressBarComponent);
    /***/
  },

  /***/
  "./src/app/review-service/review.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/review-service/review.service.ts ***!
    \**************************************************/

  /*! exports provided: ReviewService */

  /***/
  function srcAppReviewServiceReviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewService", function () {
      return ReviewService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ReviewService =
    /*#__PURE__*/
    function () {
      function ReviewService(http) {
        _classCallCheck(this, ReviewService);

        this.http = http;
      }

      _createClass(ReviewService, [{
        key: "getReviews",
        value: function getReviews() {
          return this.http.get("http://localhost:3000/displayData");
        }
      }, {
        key: "startETL",
        value: function startETL(product, pages) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.set("phrase", product).set("pagesToSearch", pages.toString());
          return this.http.get("http://localhost:3000/etl", {
            params: params
          });
        }
      }, {
        key: "startExtract",
        value: function startExtract(product, pages) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.set("phrase", product).set("pagesToSearch", pages.toString());
          return this.http.get("http://localhost:3000/extract", {
            params: params
          });
        }
      }, {
        key: "startTransform",
        value: function startTransform() {
          return this.http.get("http://localhost:3000/transform");
        }
      }, {
        key: "startLoad",
        value: function startLoad() {
          return this.http.get("http://localhost:3000/load");
        }
      }, {
        key: "clearDatabase",
        value: function clearDatabase() {
          return this.http.get("http://localhost:3000/clearDb");
        }
      }, {
        key: "downloadCSV",
        value: function downloadCSV() {
          var _this2 = this;

          return this.http.get("http://localhost:3000/csv", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Accept: 'text/csv'
            }),
            responseType: "text"
          }).subscribe(function (response) {
            return _this2.downloadFile(response, "text/csv;charset=utf-8");
          });
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(data, fileType) {
          var blob = new Blob(["\uFEFF" + data], {
            type: fileType
          });
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = "Database.csv";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }]);

      return ReviewService;
    }();

    ReviewService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ReviewService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\DELL\Desktop\HDP-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map