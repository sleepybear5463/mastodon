(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-sk"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/sk.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/sk.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"one\", \"few\", \"many\", \"other\"],\n        \"ordinal\": [\"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var s = String(n).split('.'),\n          i = s[0],\n          v0 = !s[1];\n        if (ord) return 'other';\n        return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';\n      }\n    },\n    \"locale\": \"sk\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvc2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvc2suanM/YWViNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZ2VuZXJhdGVkICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmlmIChJbnRsLlBsdXJhbFJ1bGVzICYmIHR5cGVvZiBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSh7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiB7XG4gICAgICAgIFwiY2FyZGluYWxcIjogW1wib25lXCIsIFwiZmV3XCIsIFwibWFueVwiLCBcIm90aGVyXCJdLFxuICAgICAgICBcIm9yZGluYWxcIjogW1wib3RoZXJcIl1cbiAgICAgIH0sXG4gICAgICBcImZuXCI6IGZ1bmN0aW9uIGZuKG4sIG9yZCkge1xuICAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgIHYwID0gIXNbMV07XG4gICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgICByZXR1cm4gbiA9PSAxICYmIHYwID8gJ29uZScgOiBpID49IDIgJiYgaSA8PSA0ICYmIHYwID8gJ2ZldycgOiAhdjAgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJsb2NhbGVcIjogXCJza1wiXG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/sk.js\n");

/***/ })

}]);