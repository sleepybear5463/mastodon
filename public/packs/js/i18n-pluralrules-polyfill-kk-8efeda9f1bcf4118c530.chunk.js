(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-kk"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/kk.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/kk.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"one\", \"other\"],\n        \"ordinal\": [\"many\", \"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var s = String(n).split('.'),\n          t0 = Number(s[0]) == n,\n          n10 = t0 && s[0].slice(-1);\n        if (ord) return n10 == 6 || n10 == 9 || t0 && n10 == 0 && n != 0 ? 'many' : 'other';\n        return n == 1 ? 'one' : 'other';\n      }\n    },\n    \"locale\": \"kk\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEva2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEva2suanM/NzJhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZ2VuZXJhdGVkICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmlmIChJbnRsLlBsdXJhbFJ1bGVzICYmIHR5cGVvZiBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSh7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiB7XG4gICAgICAgIFwiY2FyZGluYWxcIjogW1wib25lXCIsIFwib3RoZXJcIl0sXG4gICAgICAgIFwib3JkaW5hbFwiOiBbXCJtYW55XCIsIFwib3RoZXJcIl1cbiAgICAgIH0sXG4gICAgICBcImZuXCI6IGZ1bmN0aW9uIGZuKG4sIG9yZCkge1xuICAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgbjEwID0gdDAgJiYgc1swXS5zbGljZSgtMSk7XG4gICAgICAgIGlmIChvcmQpIHJldHVybiBuMTAgPT0gNiB8fCBuMTAgPT0gOSB8fCB0MCAmJiBuMTAgPT0gMCAmJiBuICE9IDAgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJsb2NhbGVcIjogXCJra1wiXG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/kk.js\n");

/***/ })

}]);