(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features/getting_started"],{

/***/ "./app/javascript/mastodon/features/getting_started/index.jsx":
/*!********************************************************************!*\
  !*** ./app/javascript/mastodon/features/getting_started/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.es.js\");\n/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-immutable-proptypes */ \"./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js\");\n/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_immutable_pure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-immutable-pure-component */ \"./node_modules/react-immutable-pure-component/lib/react-immutable-pure-component.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var mastodon_actions_accounts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mastodon/actions/accounts */ \"./app/javascript/mastodon/actions/accounts.js\");\n/* harmony import */ var mastodon_components_column__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mastodon/components/column */ \"./app/javascript/mastodon/components/column.jsx\");\n/* harmony import */ var mastodon_components_column_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mastodon/components/column_header */ \"./app/javascript/mastodon/components/column_header.jsx\");\n/* harmony import */ var mastodon_features_ui_components_link_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mastodon/features/ui/components/link_footer */ \"./app/javascript/mastodon/features/ui/components/link_footer.jsx\");\n/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../initial_state */ \"./app/javascript/mastodon/initial_state.js\");\n/* harmony import */ var _compose_containers_navigation_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../compose/containers/navigation_container */ \"./app/javascript/mastodon/features/compose/containers/navigation_container.js\");\n/* harmony import */ var _ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/components/column_link */ \"./app/javascript/mastodon/features/ui/components/column_link.jsx\");\n/* harmony import */ var _ui_components_column_subheading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/components/column_subheading */ \"./app/javascript/mastodon/features/ui/components/column_subheading.jsx\");\n/* harmony import */ var _containers_trends_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/trends_container */ \"./app/javascript/mastodon/features/getting_started/containers/trends_container.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);\nvar _jsxFileName = \"/home/sleepybear/workspace/mastodon-sleepybear/app/javascript/mastodon/features/getting_started/index.jsx\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"defineMessages\"])({\n  home_timeline: {\n    id: \"tabs_bar.home\",\n    defaultMessage: \"Home\"\n  },\n  notifications: {\n    id: \"tabs_bar.notifications\",\n    defaultMessage: \"Notifications\"\n  },\n  public_timeline: {\n    id: \"navigation_bar.public_timeline\",\n    defaultMessage: \"Federated timeline\"\n  },\n  settings_subheading: {\n    id: \"column_subheading.settings\",\n    defaultMessage: \"Settings\"\n  },\n  community_timeline: {\n    id: \"navigation_bar.community_timeline\",\n    defaultMessage: \"Local timeline\"\n  },\n  explore: {\n    id: \"navigation_bar.explore\",\n    defaultMessage: \"Explore\"\n  },\n  direct: {\n    id: \"navigation_bar.direct\",\n    defaultMessage: \"Private mentions\"\n  },\n  bookmarks: {\n    id: \"navigation_bar.bookmarks\",\n    defaultMessage: \"Bookmarks\"\n  },\n  preferences: {\n    id: \"navigation_bar.preferences\",\n    defaultMessage: \"Preferences\"\n  },\n  follow_requests: {\n    id: \"navigation_bar.follow_requests\",\n    defaultMessage: \"Follow requests\"\n  },\n  favourites: {\n    id: \"navigation_bar.favourites\",\n    defaultMessage: \"Favorites\"\n  },\n  blocks: {\n    id: \"navigation_bar.blocks\",\n    defaultMessage: \"Blocked users\"\n  },\n  domain_blocks: {\n    id: \"navigation_bar.domain_blocks\",\n    defaultMessage: \"Blocked domains\"\n  },\n  mutes: {\n    id: \"navigation_bar.mutes\",\n    defaultMessage: \"Muted users\"\n  },\n  pins: {\n    id: \"navigation_bar.pins\",\n    defaultMessage: \"Pinned posts\"\n  },\n  lists: {\n    id: \"navigation_bar.lists\",\n    defaultMessage: \"Lists\"\n  },\n  discover: {\n    id: \"navigation_bar.discover\",\n    defaultMessage: \"Discover\"\n  },\n  personal: {\n    id: \"navigation_bar.personal\",\n    defaultMessage: \"Personal\"\n  },\n  security: {\n    id: \"navigation_bar.security\",\n    defaultMessage: \"Security\"\n  },\n  menu: {\n    id: \"getting_started.heading\",\n    defaultMessage: \"Getting started\"\n  }\n});\nvar mapStateToProps = state => ({\n  myAccount: state.getIn(['accounts', _initial_state__WEBPACK_IMPORTED_MODULE_11__[\"me\"]]),\n  unreadFollowRequests: state.getIn(['user_lists', 'follow_requests', 'items'], Object(immutable__WEBPACK_IMPORTED_MODULE_3__[\"List\"])()).size\n});\nvar mapDispatchToProps = dispatch => ({\n  fetchFollowRequests: () => dispatch(Object(mastodon_actions_accounts__WEBPACK_IMPORTED_MODULE_7__[\"fetchFollowRequests\"])())\n});\nvar badgeDisplay = (number, limit) => {\n  if (number === 0) {\n    return undefined;\n  } else if (limit && number >= limit) {\n    return limit + \"+\";\n  } else {\n    return number;\n  }\n};\nclass GettingStarted extends react_immutable_pure_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\n  componentDidMount() {\n    var {\n      fetchFollowRequests\n    } = this.props;\n    var {\n      signedIn\n    } = this.context.identity;\n    if (!signedIn) {\n      return;\n    }\n    fetchFollowRequests();\n  }\n  render() {\n    var {\n      intl,\n      myAccount,\n      multiColumn,\n      unreadFollowRequests\n    } = this.props;\n    var {\n      signedIn\n    } = this.context.identity;\n    var navItems = [];\n    navItems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_subheading__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n      text: intl.formatMessage(messages.discover)\n    }, 'header-discover', false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this));\n    if (_initial_state__WEBPACK_IMPORTED_MODULE_11__[\"showTrends\"]) {\n      navItems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        icon: \"hashtag\",\n        text: intl.formatMessage(messages.explore),\n        to: \"/explore\"\n      }, 'explore', false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, this));\n    }\n    navItems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      icon: \"users\",\n      text: intl.formatMessage(messages.community_timeline),\n      to: \"/public/local\"\n    }, 'community_timeline', false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      icon: \"globe\",\n      text: intl.formatMessage(messages.public_timeline),\n      to: \"/public\"\n    }, 'public_timeline', false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this));\n    if (signedIn) {\n      navItems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_subheading__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        text: intl.formatMessage(messages.personal)\n      }, 'header-personal', false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        icon: \"home\",\n        text: intl.formatMessage(messages.home_timeline),\n        to: \"/home\"\n      }, 'home', false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        icon: \"at\",\n        text: intl.formatMessage(messages.direct),\n        to: \"/conversations\"\n      }, 'direct', false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        icon: \"bookmark\",\n        text: intl.formatMessage(messages.bookmarks),\n        to: \"/bookmarks\"\n      }, 'bookmark', false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        icon: \"star\",\n        text: intl.formatMessage(messages.favourites),\n        to: \"/favourites\"\n      }, 'favourites', false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        icon: \"list-ul\",\n        text: intl.formatMessage(messages.lists),\n        to: \"/lists\"\n      }, 'lists', false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this));\n      if (myAccount.get('locked') || unreadFollowRequests > 0) {\n        navItems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n          icon: \"user-plus\",\n          text: intl.formatMessage(messages.follow_requests),\n          badge: badgeDisplay(unreadFollowRequests, 40),\n          to: \"/follow_requests\"\n        }, 'follow_requests', false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 23\n        }, this));\n      }\n      navItems.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_subheading__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        text: intl.formatMessage(messages.settings_subheading)\n      }, 'header-settings', false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_ui_components_column_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        icon: \"gears\",\n        text: intl.formatMessage(messages.preferences),\n        href: \"/settings/preferences\"\n      }, 'preferences', false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this));\n    }\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(mastodon_components_column__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      children: [signedIn && !multiColumn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_compose_containers_navigation_container__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 39\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(mastodon_components_column_header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        title: intl.formatMessage(messages.menu),\n        icon: \"bars\",\n        multiColumn: multiColumn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 65\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(\"div\", {\n        className: \"getting-started scrollable scrollable--flex\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(\"div\", {\n          className: \"getting-started__wrapper\",\n          children: navItems\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, this), !multiColumn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(\"div\", {\n          className: \"flex-spacer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 28\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(mastodon_features_ui_components_link_footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          multiColumn: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this), multiColumn && _initial_state__WEBPACK_IMPORTED_MODULE_11__[\"showTrends\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(_containers_trends_container__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(\"title\", {\n          children: intl.formatMessage(messages.menu)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxDEV\"])(\"meta\", {\n          name: \"robots\",\n          content: \"noindex\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, this);\n  }\n}\nGettingStarted.contextTypes = {\n  router: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,\n  identity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object\n};\nGettingStarted.propTypes = {\n  intl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,\n  myAccount: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_4___default.a.map,\n  multiColumn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  fetchFollowRequests: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,\n  unreadFollowRequests: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,\n  unreadNotifications: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"injectIntl\"])(GettingStarted)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvamF2YXNjcmlwdC9tYXN0b2Rvbi9mZWF0dXJlcy9nZXR0aW5nX3N0YXJ0ZWQvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2phdmFzY3JpcHQvbWFzdG9kb24vZmVhdHVyZXMvZ2V0dGluZ19zdGFydGVkL2luZGV4LmpzeD9mYTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCB7IExpc3QgYXMgSW1tdXRhYmxlTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVB1cmVDb21wb25lbnQgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXB1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGZldGNoRm9sbG93UmVxdWVzdHMgfSBmcm9tICdtYXN0b2Rvbi9hY3Rpb25zL2FjY291bnRzJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnbWFzdG9kb24vY29tcG9uZW50cy9jb2x1bW4nO1xuaW1wb3J0IENvbHVtbkhlYWRlciBmcm9tICdtYXN0b2Rvbi9jb21wb25lbnRzL2NvbHVtbl9oZWFkZXInO1xuaW1wb3J0IExpbmtGb290ZXIgZnJvbSAnbWFzdG9kb24vZmVhdHVyZXMvdWkvY29tcG9uZW50cy9saW5rX2Zvb3Rlcic7XG5cbmltcG9ydCB7IG1lLCBzaG93VHJlbmRzIH0gZnJvbSAnLi4vLi4vaW5pdGlhbF9zdGF0ZSc7XG5pbXBvcnQgTmF2aWdhdGlvbkNvbnRhaW5lciBmcm9tICcuLi9jb21wb3NlL2NvbnRhaW5lcnMvbmF2aWdhdGlvbl9jb250YWluZXInO1xuaW1wb3J0IENvbHVtbkxpbmsgZnJvbSAnLi4vdWkvY29tcG9uZW50cy9jb2x1bW5fbGluayc7XG5pbXBvcnQgQ29sdW1uU3ViaGVhZGluZyBmcm9tICcuLi91aS9jb21wb25lbnRzL2NvbHVtbl9zdWJoZWFkaW5nJztcblxuaW1wb3J0IFRyZW5kc0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvdHJlbmRzX2NvbnRhaW5lcic7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICBob21lX3RpbWVsaW5lOiB7IGlkOiAndGFic19iYXIuaG9tZScsIGRlZmF1bHRNZXNzYWdlOiAnSG9tZScgfSxcbiAgbm90aWZpY2F0aW9uczogeyBpZDogJ3RhYnNfYmFyLm5vdGlmaWNhdGlvbnMnLCBkZWZhdWx0TWVzc2FnZTogJ05vdGlmaWNhdGlvbnMnIH0sXG4gIHB1YmxpY190aW1lbGluZTogeyBpZDogJ25hdmlnYXRpb25fYmFyLnB1YmxpY190aW1lbGluZScsIGRlZmF1bHRNZXNzYWdlOiAnRmVkZXJhdGVkIHRpbWVsaW5lJyB9LFxuICBzZXR0aW5nc19zdWJoZWFkaW5nOiB7IGlkOiAnY29sdW1uX3N1YmhlYWRpbmcuc2V0dGluZ3MnLCBkZWZhdWx0TWVzc2FnZTogJ1NldHRpbmdzJyB9LFxuICBjb21tdW5pdHlfdGltZWxpbmU6IHsgaWQ6ICduYXZpZ2F0aW9uX2Jhci5jb21tdW5pdHlfdGltZWxpbmUnLCBkZWZhdWx0TWVzc2FnZTogJ0xvY2FsIHRpbWVsaW5lJyB9LFxuICBleHBsb3JlOiB7IGlkOiAnbmF2aWdhdGlvbl9iYXIuZXhwbG9yZScsIGRlZmF1bHRNZXNzYWdlOiAnRXhwbG9yZScgfSxcbiAgZGlyZWN0OiB7IGlkOiAnbmF2aWdhdGlvbl9iYXIuZGlyZWN0JywgZGVmYXVsdE1lc3NhZ2U6ICdQcml2YXRlIG1lbnRpb25zJyB9LFxuICBib29rbWFya3M6IHsgaWQ6ICduYXZpZ2F0aW9uX2Jhci5ib29rbWFya3MnLCBkZWZhdWx0TWVzc2FnZTogJ0Jvb2ttYXJrcycgfSxcbiAgcHJlZmVyZW5jZXM6IHsgaWQ6ICduYXZpZ2F0aW9uX2Jhci5wcmVmZXJlbmNlcycsIGRlZmF1bHRNZXNzYWdlOiAnUHJlZmVyZW5jZXMnIH0sXG4gIGZvbGxvd19yZXF1ZXN0czogeyBpZDogJ25hdmlnYXRpb25fYmFyLmZvbGxvd19yZXF1ZXN0cycsIGRlZmF1bHRNZXNzYWdlOiAnRm9sbG93IHJlcXVlc3RzJyB9LFxuICBmYXZvdXJpdGVzOiB7IGlkOiAnbmF2aWdhdGlvbl9iYXIuZmF2b3VyaXRlcycsIGRlZmF1bHRNZXNzYWdlOiAnRmF2b3JpdGVzJyB9LFxuICBibG9ja3M6IHsgaWQ6ICduYXZpZ2F0aW9uX2Jhci5ibG9ja3MnLCBkZWZhdWx0TWVzc2FnZTogJ0Jsb2NrZWQgdXNlcnMnIH0sXG4gIGRvbWFpbl9ibG9ja3M6IHsgaWQ6ICduYXZpZ2F0aW9uX2Jhci5kb21haW5fYmxvY2tzJywgZGVmYXVsdE1lc3NhZ2U6ICdCbG9ja2VkIGRvbWFpbnMnIH0sXG4gIG11dGVzOiB7IGlkOiAnbmF2aWdhdGlvbl9iYXIubXV0ZXMnLCBkZWZhdWx0TWVzc2FnZTogJ011dGVkIHVzZXJzJyB9LFxuICBwaW5zOiB7IGlkOiAnbmF2aWdhdGlvbl9iYXIucGlucycsIGRlZmF1bHRNZXNzYWdlOiAnUGlubmVkIHBvc3RzJyB9LFxuICBsaXN0czogeyBpZDogJ25hdmlnYXRpb25fYmFyLmxpc3RzJywgZGVmYXVsdE1lc3NhZ2U6ICdMaXN0cycgfSxcbiAgZGlzY292ZXI6IHsgaWQ6ICduYXZpZ2F0aW9uX2Jhci5kaXNjb3ZlcicsIGRlZmF1bHRNZXNzYWdlOiAnRGlzY292ZXInIH0sXG4gIHBlcnNvbmFsOiB7IGlkOiAnbmF2aWdhdGlvbl9iYXIucGVyc29uYWwnLCBkZWZhdWx0TWVzc2FnZTogJ1BlcnNvbmFsJyB9LFxuICBzZWN1cml0eTogeyBpZDogJ25hdmlnYXRpb25fYmFyLnNlY3VyaXR5JywgZGVmYXVsdE1lc3NhZ2U6ICdTZWN1cml0eScgfSxcbiAgbWVudTogeyBpZDogJ2dldHRpbmdfc3RhcnRlZC5oZWFkaW5nJywgZGVmYXVsdE1lc3NhZ2U6ICdHZXR0aW5nIHN0YXJ0ZWQnIH0sXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbXlBY2NvdW50OiBzdGF0ZS5nZXRJbihbJ2FjY291bnRzJywgbWVdKSxcbiAgdW5yZWFkRm9sbG93UmVxdWVzdHM6IHN0YXRlLmdldEluKFsndXNlcl9saXN0cycsICdmb2xsb3dfcmVxdWVzdHMnLCAnaXRlbXMnXSwgSW1tdXRhYmxlTGlzdCgpKS5zaXplLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGZldGNoRm9sbG93UmVxdWVzdHM6ICgpID0+IGRpc3BhdGNoKGZldGNoRm9sbG93UmVxdWVzdHMoKSksXG59KTtcblxuY29uc3QgYmFkZ2VEaXNwbGF5ID0gKG51bWJlciwgbGltaXQpID0+IHtcbiAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAobGltaXQgJiYgbnVtYmVyID49IGxpbWl0KSB7XG4gICAgcmV0dXJuIGAke2xpbWl0fStgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbn07XG5cbmNsYXNzIEdldHRpbmdTdGFydGVkIGV4dGVuZHMgSW1tdXRhYmxlUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBpZGVudGl0eTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGludGw6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBteUFjY291bnQ6IEltbXV0YWJsZVByb3BUeXBlcy5tYXAsXG4gICAgbXVsdGlDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICAgIGZldGNoRm9sbG93UmVxdWVzdHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdW5yZWFkRm9sbG93UmVxdWVzdHM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdW5yZWFkTm90aWZpY2F0aW9uczogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgeyBmZXRjaEZvbGxvd1JlcXVlc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2lnbmVkSW4gfSA9IHRoaXMuY29udGV4dC5pZGVudGl0eTtcblxuICAgIGlmICghc2lnbmVkSW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmZXRjaEZvbGxvd1JlcXVlc3RzKCk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgaW50bCwgbXlBY2NvdW50LCBtdWx0aUNvbHVtbiwgdW5yZWFkRm9sbG93UmVxdWVzdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaWduZWRJbiB9ID0gdGhpcy5jb250ZXh0LmlkZW50aXR5O1xuXG4gICAgY29uc3QgbmF2SXRlbXMgPSBbXTtcblxuICAgIG5hdkl0ZW1zLnB1c2goXG4gICAgICA8Q29sdW1uU3ViaGVhZGluZyBrZXk9J2hlYWRlci1kaXNjb3ZlcicgdGV4dD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRpc2NvdmVyKX0gLz4sXG4gICAgKTtcblxuICAgIGlmIChzaG93VHJlbmRzKSB7XG4gICAgICBuYXZJdGVtcy5wdXNoKFxuICAgICAgICA8Q29sdW1uTGluayBrZXk9J2V4cGxvcmUnIGljb249J2hhc2h0YWcnIHRleHQ9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5leHBsb3JlKX0gdG89Jy9leHBsb3JlJyAvPixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbmF2SXRlbXMucHVzaChcbiAgICAgIDxDb2x1bW5MaW5rIGtleT0nY29tbXVuaXR5X3RpbWVsaW5lJyBpY29uPSd1c2VycycgdGV4dD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNvbW11bml0eV90aW1lbGluZSl9IHRvPScvcHVibGljL2xvY2FsJyAvPixcbiAgICAgIDxDb2x1bW5MaW5rIGtleT0ncHVibGljX3RpbWVsaW5lJyBpY29uPSdnbG9iZScgdGV4dD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnB1YmxpY190aW1lbGluZSl9IHRvPScvcHVibGljJyAvPixcbiAgICApO1xuXG4gICAgaWYgKHNpZ25lZEluKSB7XG4gICAgICBuYXZJdGVtcy5wdXNoKFxuICAgICAgICA8Q29sdW1uU3ViaGVhZGluZyBrZXk9J2hlYWRlci1wZXJzb25hbCcgdGV4dD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnBlcnNvbmFsKX0gLz4sXG4gICAgICAgIDxDb2x1bW5MaW5rIGtleT0naG9tZScgaWNvbj0naG9tZScgdGV4dD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmhvbWVfdGltZWxpbmUpfSB0bz0nL2hvbWUnIC8+LFxuICAgICAgICA8Q29sdW1uTGluayBrZXk9J2RpcmVjdCcgaWNvbj0nYXQnIHRleHQ9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kaXJlY3QpfSB0bz0nL2NvbnZlcnNhdGlvbnMnIC8+LFxuICAgICAgICA8Q29sdW1uTGluayBrZXk9J2Jvb2ttYXJrJyBpY29uPSdib29rbWFyaycgdGV4dD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmJvb2ttYXJrcyl9IHRvPScvYm9va21hcmtzJyAvPixcbiAgICAgICAgPENvbHVtbkxpbmsga2V5PSdmYXZvdXJpdGVzJyBpY29uPSdzdGFyJyB0ZXh0PXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZmF2b3VyaXRlcyl9IHRvPScvZmF2b3VyaXRlcycgLz4sXG4gICAgICAgIDxDb2x1bW5MaW5rIGtleT0nbGlzdHMnIGljb249J2xpc3QtdWwnIHRleHQ9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5saXN0cyl9IHRvPScvbGlzdHMnIC8+LFxuICAgICAgKTtcblxuICAgICAgaWYgKG15QWNjb3VudC5nZXQoJ2xvY2tlZCcpIHx8IHVucmVhZEZvbGxvd1JlcXVlc3RzID4gMCkge1xuICAgICAgICBuYXZJdGVtcy5wdXNoKDxDb2x1bW5MaW5rIGtleT0nZm9sbG93X3JlcXVlc3RzJyBpY29uPSd1c2VyLXBsdXMnIHRleHQ9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5mb2xsb3dfcmVxdWVzdHMpfSBiYWRnZT17YmFkZ2VEaXNwbGF5KHVucmVhZEZvbGxvd1JlcXVlc3RzLCA0MCl9IHRvPScvZm9sbG93X3JlcXVlc3RzJyAvPik7XG4gICAgICB9XG5cbiAgICAgIG5hdkl0ZW1zLnB1c2goXG4gICAgICAgIDxDb2x1bW5TdWJoZWFkaW5nIGtleT0naGVhZGVyLXNldHRpbmdzJyB0ZXh0PXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc2V0dGluZ3Nfc3ViaGVhZGluZyl9IC8+LFxuICAgICAgICA8Q29sdW1uTGluayBrZXk9J3ByZWZlcmVuY2VzJyBpY29uPSdnZWFycycgdGV4dD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnByZWZlcmVuY2VzKX0gaHJlZj0nL3NldHRpbmdzL3ByZWZlcmVuY2VzJyAvPixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW4+XG4gICAgICAgIHsoc2lnbmVkSW4gJiYgIW11bHRpQ29sdW1uKSA/IDxOYXZpZ2F0aW9uQ29udGFpbmVyIC8+IDogPENvbHVtbkhlYWRlciB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm1lbnUpfSBpY29uPSdiYXJzJyBtdWx0aUNvbHVtbj17bXVsdGlDb2x1bW59IC8+fVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZXR0aW5nLXN0YXJ0ZWQgc2Nyb2xsYWJsZSBzY3JvbGxhYmxlLS1mbGV4Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2V0dGluZy1zdGFydGVkX193cmFwcGVyJz5cbiAgICAgICAgICAgIHtuYXZJdGVtc31cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHshbXVsdGlDb2x1bW4gJiYgPGRpdiBjbGFzc05hbWU9J2ZsZXgtc3BhY2VyJyAvPn1cblxuICAgICAgICAgIDxMaW5rRm9vdGVyIG11bHRpQ29sdW1uIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsobXVsdGlDb2x1bW4gJiYgc2hvd1RyZW5kcykgJiYgPFRyZW5kc0NvbnRhaW5lciAvPn1cblxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT57aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm1lbnUpfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ncm9ib3RzJyBjb250ZW50PSdub2luZGV4JyAvPlxuICAgICAgICA8L0hlbG1ldD5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShpbmplY3RJbnRsKEdldHRpbmdTdGFydGVkKSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQTVGQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/javascript/mastodon/features/getting_started/index.jsx\n");

/***/ })

}]);