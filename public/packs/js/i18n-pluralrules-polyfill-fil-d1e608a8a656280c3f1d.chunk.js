(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-fil"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/fil.js":
/*!********************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/fil.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"one\", \"other\"],\n        \"ordinal\": [\"one\", \"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var s = String(n).split('.'),\n          i = s[0],\n          f = s[1] || '',\n          v0 = !s[1],\n          i10 = i.slice(-1),\n          f10 = f.slice(-1);\n        if (ord) return n == 1 ? 'one' : 'other';\n        return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';\n      }\n    },\n    \"locale\": \"fil\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvZmlsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9pbnRsLXBsdXJhbHJ1bGVzL2xvY2FsZS1kYXRhL2ZpbC5qcz9jNTRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEBnZW5lcmF0ZWQgKi9cbi8vIHByZXR0aWVyLWlnbm9yZVxuaWYgKEludGwuUGx1cmFsUnVsZXMgJiYgdHlwZW9mIEludGwuUGx1cmFsUnVsZXMuX19hZGRMb2NhbGVEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gIEludGwuUGx1cmFsUnVsZXMuX19hZGRMb2NhbGVEYXRhKHtcbiAgICBcImRhdGFcIjoge1xuICAgICAgXCJjYXRlZ29yaWVzXCI6IHtcbiAgICAgICAgXCJjYXJkaW5hbFwiOiBbXCJvbmVcIiwgXCJvdGhlclwiXSxcbiAgICAgICAgXCJvcmRpbmFsXCI6IFtcIm9uZVwiLCBcIm90aGVyXCJdXG4gICAgICB9LFxuICAgICAgXCJmblwiOiBmdW5jdGlvbiBmbihuLCBvcmQpIHtcbiAgICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICBmID0gc1sxXSB8fCAnJyxcbiAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgIGkxMCA9IGkuc2xpY2UoLTEpLFxuICAgICAgICAgIGYxMCA9IGYuc2xpY2UoLTEpO1xuICAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICAgICByZXR1cm4gdjAgJiYgKGkgPT0gMSB8fCBpID09IDIgfHwgaSA9PSAzKSB8fCB2MCAmJiBpMTAgIT0gNCAmJiBpMTAgIT0gNiAmJiBpMTAgIT0gOSB8fCAhdjAgJiYgZjEwICE9IDQgJiYgZjEwICE9IDYgJiYgZjEwICE9IDkgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImxvY2FsZVwiOiBcImZpbFwiXG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/fil.js\n");

/***/ })

}]);