(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features/blocks"],{

/***/ "./app/javascript/mastodon/features/blocks/index.jsx":
/*!***********************************************************!*\
  !*** ./app/javascript/mastodon/features/blocks/index.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-immutable-proptypes */ \"./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js\");\n/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_immutable_pure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-immutable-pure-component */ \"./node_modules/react-immutable-pure-component/lib/react-immutable-pure-component.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/blocks */ \"./app/javascript/mastodon/actions/blocks.js\");\n/* harmony import */ var _components_column_back_button_slim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/column_back_button_slim */ \"./app/javascript/mastodon/components/column_back_button_slim.jsx\");\n/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading_indicator */ \"./app/javascript/mastodon/components/loading_indicator.tsx\");\n/* harmony import */ var _components_scrollable_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/scrollable_list */ \"./app/javascript/mastodon/components/scrollable_list.jsx\");\n/* harmony import */ var _containers_account_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../containers/account_container */ \"./app/javascript/mastodon/containers/account_container.jsx\");\n/* harmony import */ var _ui_components_column__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/components/column */ \"./app/javascript/mastodon/features/ui/components/column.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\nvar _jsxFileName = \"/home/sleepybear/workspace/mastodon-sleepybear/app/javascript/mastodon/features/blocks/index.jsx\";\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"defineMessages\"])({\n  heading: {\n    id: \"column.blocks\",\n    defaultMessage: \"Blocked users\"\n  }\n});\nvar mapStateToProps = state => ({\n  accountIds: state.getIn(['user_lists', 'blocks', 'items']),\n  hasMore: !!state.getIn(['user_lists', 'blocks', 'next']),\n  isLoading: state.getIn(['user_lists', 'blocks', 'isLoading'], true)\n});\nclass Blocks extends react_immutable_pure_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n  constructor() {\n    super(...arguments);\n    this.handleLoadMore = Object(lodash__WEBPACK_IMPORTED_MODULE_5__[\"debounce\"])(() => {\n      this.props.dispatch(Object(_actions_blocks__WEBPACK_IMPORTED_MODULE_6__[\"expandBlocks\"])());\n    }, 300, {\n      leading: true\n    });\n  }\n  UNSAFE_componentWillMount() {\n    this.props.dispatch(Object(_actions_blocks__WEBPACK_IMPORTED_MODULE_6__[\"fetchBlocks\"])());\n  }\n  render() {\n    var {\n      intl,\n      accountIds,\n      hasMore,\n      multiColumn,\n      isLoading\n    } = this.props;\n    if (!accountIds) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_ui_components_column__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__[\"LoadingIndicator\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this);\n    }\n    var emptyMessage = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n      id: \"empty_column.blocks\",\n      defaultMessage: \"You haven't blocked any users yet.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 26\n    }, this);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_ui_components_column__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      bindToDocument: !multiColumn,\n      icon: \"ban\",\n      heading: intl.formatMessage(messages.heading),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_components_column_back_button_slim__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_components_scrollable_list__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        scrollKey: \"blocks\",\n        onLoadMore: this.handleLoadMore,\n        hasMore: hasMore,\n        isLoading: isLoading,\n        emptyMessage: emptyMessage,\n        bindToDocument: !multiColumn,\n        children: accountIds.map(id => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxDEV\"])(_containers_account_container__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          id: id,\n          defaultAction: \"block\"\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this);\n  }\n}\nBlocks.propTypes = {\n  params: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,\n  accountIds: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_2___default.a.list,\n  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  intl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,\n  multiColumn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps)(Object(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"injectIntl\"])(Blocks)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvamF2YXNjcmlwdC9tYXN0b2Rvbi9mZWF0dXJlcy9ibG9ja3MvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2phdmFzY3JpcHQvbWFzdG9kb24vZmVhdHVyZXMvYmxvY2tzL2luZGV4LmpzeD9hZmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBpbmplY3RJbnRsLCBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHVyZUNvbXBvbmVudCBmcm9tICdyZWFjdC1pbW11dGFibGUtcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBmZXRjaEJsb2NrcywgZXhwYW5kQmxvY2tzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9ibG9ja3MnO1xuaW1wb3J0IENvbHVtbkJhY2tCdXR0b25TbGltIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29sdW1uX2JhY2tfYnV0dG9uX3NsaW0nO1xuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZ19pbmRpY2F0b3InO1xuaW1wb3J0IFNjcm9sbGFibGVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2Nyb2xsYWJsZV9saXN0JztcbmltcG9ydCBBY2NvdW50Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvYWNjb3VudF9jb250YWluZXInO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuLi91aS9jb21wb25lbnRzL2NvbHVtbic7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICBoZWFkaW5nOiB7IGlkOiAnY29sdW1uLmJsb2NrcycsIGRlZmF1bHRNZXNzYWdlOiAnQmxvY2tlZCB1c2VycycgfSxcbn0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhY2NvdW50SWRzOiBzdGF0ZS5nZXRJbihbJ3VzZXJfbGlzdHMnLCAnYmxvY2tzJywgJ2l0ZW1zJ10pLFxuICBoYXNNb3JlOiAhIXN0YXRlLmdldEluKFsndXNlcl9saXN0cycsICdibG9ja3MnLCAnbmV4dCddKSxcbiAgaXNMb2FkaW5nOiBzdGF0ZS5nZXRJbihbJ3VzZXJfbGlzdHMnLCAnYmxvY2tzJywgJ2lzTG9hZGluZyddLCB0cnVlKSxcbn0pO1xuXG5jbGFzcyBCbG9ja3MgZXh0ZW5kcyBJbW11dGFibGVQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFjY291bnRJZHM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGhhc01vcmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW50bDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG11bHRpQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZldGNoQmxvY2tzKCkpO1xuICB9XG5cbiAgaGFuZGxlTG9hZE1vcmUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChleHBhbmRCbG9ja3MoKSk7XG4gIH0sIDMwMCwgeyBsZWFkaW5nOiB0cnVlIH0pO1xuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBpbnRsLCBhY2NvdW50SWRzLCBoYXNNb3JlLCBtdWx0aUNvbHVtbiwgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFhY2NvdW50SWRzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIC8+XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbXB0eU1lc3NhZ2UgPSA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nZW1wdHlfY29sdW1uLmJsb2NrcycgZGVmYXVsdE1lc3NhZ2U9XCJZb3UgaGF2ZW4ndCBibG9ja2VkIGFueSB1c2VycyB5ZXQuXCIgLz47XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtbiBiaW5kVG9Eb2N1bWVudD17IW11bHRpQ29sdW1ufSBpY29uPSdiYW4nIGhlYWRpbmc9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5oZWFkaW5nKX0+XG4gICAgICAgIDxDb2x1bW5CYWNrQnV0dG9uU2xpbSAvPlxuICAgICAgICA8U2Nyb2xsYWJsZUxpc3RcbiAgICAgICAgICBzY3JvbGxLZXk9J2Jsb2NrcydcbiAgICAgICAgICBvbkxvYWRNb3JlPXt0aGlzLmhhbmRsZUxvYWRNb3JlfVxuICAgICAgICAgIGhhc01vcmU9e2hhc01vcmV9XG4gICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgZW1wdHlNZXNzYWdlPXtlbXB0eU1lc3NhZ2V9XG4gICAgICAgICAgYmluZFRvRG9jdW1lbnQ9eyFtdWx0aUNvbHVtbn1cbiAgICAgICAgPlxuICAgICAgICAgIHthY2NvdW50SWRzLm1hcChpZCA9PlxuICAgICAgICAgICAgPEFjY291bnRDb250YWluZXIga2V5PXtpZH0gaWQ9e2lkfSBkZWZhdWx0QWN0aW9uPSdibG9jaycgLz4sXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TY3JvbGxhYmxlTGlzdD5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoaW5qZWN0SW50bChCbG9ja3MpKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQXBEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE0Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/javascript/mastodon/features/blocks/index.jsx\n");

/***/ })

}]);