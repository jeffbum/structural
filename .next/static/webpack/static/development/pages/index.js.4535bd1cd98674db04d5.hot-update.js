webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_todoitem_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/todoitem.js */ "./components/todoitem.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");









var _jsxFileName = "/Users/jeffbumgardner/structural/pages/index.js";









var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onClick", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "submit", function () {
      var todos = JSON.parse(localStorage.getItem('todoItems'));

      if (_this.state.value) {
        var id = _this.state.todoItems.length + 1;
        var valueObj = {
          name: _this.state.value,
          id: id,
          done: false
        };
        todos.push(valueObj);
        localStorage.setItem('todoItems', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(todos));

        _this.setState({
          value: '',
          emptyError: false,
          todoItems: todos
        });
      } else {
        _this.setState({
          emptyError: true
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderTodoItems", function () {
      var items = _this.state.todoItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_todoitem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
          item: item,
          deleteItem: _this.deleteItem,
          onChange: _this.checkboxOnChange,
          nocheckMark: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      });

      return items;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderCompletedItems", function () {
      if (_this.state.completedItems.length > 0) {
        var items = _this.state.completedItems.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_todoitem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            item: item,
            deleteItem: _this.deleteItem,
            onChange: _this.checkboxOnChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          });
        });

        return items;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Complete a task in your todo list. YOU CAN DO IT!");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteItem", function (item) {
      var newTodoItems = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.todoItems));
      var id = newTodoItems.findIndex(function (i) {
        return i.id === item.id;
      });
      var newState = {};

      if (id >= 0) {
        newTodoItems.splice(id, 1);
        newState.todoItems = newTodoItems;
      } else {
        var completed = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.completedItems));
        var id2 = completed.findIndex(function (i) {
          return i.id === item.id;
        });

        if (id2 >= 0) {
          completed.splice(id2, 1);
          newState.completedItems = completed;
        }
      }

      _this.setState(newState, function () {
        localStorage.setItem('todoItems', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newTodoItems));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "checkboxOnChange", function (event, checked) {
      var index = _this.state.todoItems.findIndex(function (i) {
        return i.id === _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(event.target.value, 10);
      });

      var todos = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.todoItems));
      var completed = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.completedItems));
      todos[index].done = checked;
      completed.push(todos[index]);
      todos.splice(index, 1);

      _this.setState({
        todoItems: todos,
        completedItems: completed
      }, function () {
        localStorage.setItem('todoItems', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.todoItems));
        localStorage.setItem('completedItems', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.completedItems));
      });
    });

    _this.state = {
      value: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!localStorage.getItem('todoItems')) {
        localStorage.setItem('todoItems', '[]');
      }

      if (!localStorage.getItem('completedItems')) {
        localStorage.setItem('completedItems', '[]');
      }

      var todoItems = JSON.parse(localStorage.getItem('todoItems'));
      var completedItems = JSON.parse(localStorage.getItem('completedItems'));
      this.setState({
        todoItems: todoItems,
        completedItems: completedItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        maxWidth: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h4",
        component: "h1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Todo List"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_14__["default"], {
        placeholder: 'enter an action item here',
        style: {
          width: 400,
          height: 25
        },
        onChange: this.onClick,
        type: "input",
        value: this.state.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "contained",
        color: "primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "submit todo item"), this.state.emptyError && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "please enter an todo item before hitting submit"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: 'flex',
          flex: 1,
          flexDirection: 'row'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, this.state.todoItems && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "TO DO LIST"), this.renderTodoItems()), this.state.completedItems && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "COMPLETED TO DO LIST"), this.renderCompletedItems())));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.4535bd1cd98674db04d5.hot-update.js.map