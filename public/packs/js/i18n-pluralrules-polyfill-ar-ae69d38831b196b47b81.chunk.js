(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-ar"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/ar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/ar.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"zero\", \"one\", \"two\", \"few\", \"many\", \"other\"],\n        \"ordinal\": [\"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var s = String(n).split('.'),\n          t0 = Number(s[0]) == n,\n          n100 = t0 && s[0].slice(-2);\n        if (ord) return 'other';\n        return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';\n      }\n    },\n    \"locale\": \"ar\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvYXIuanM/NzU1OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZ2VuZXJhdGVkICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmlmIChJbnRsLlBsdXJhbFJ1bGVzICYmIHR5cGVvZiBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSh7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiB7XG4gICAgICAgIFwiY2FyZGluYWxcIjogW1wiemVyb1wiLCBcIm9uZVwiLCBcInR3b1wiLCBcImZld1wiLCBcIm1hbnlcIiwgXCJvdGhlclwiXSxcbiAgICAgICAgXCJvcmRpbmFsXCI6IFtcIm90aGVyXCJdXG4gICAgICB9LFxuICAgICAgXCJmblwiOiBmdW5jdGlvbiBmbihuLCBvcmQpIHtcbiAgICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKTtcbiAgICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgIHJldHVybiBuID09IDAgPyAnemVybycgOiBuID09IDEgPyAnb25lJyA6IG4gPT0gMiA/ICd0d28nIDogbjEwMCA+PSAzICYmIG4xMDAgPD0gMTAgPyAnZmV3JyA6IG4xMDAgPj0gMTEgJiYgbjEwMCA8PSA5OSA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImxvY2FsZVwiOiBcImFyXCJcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/ar.js\n");

/***/ })

}]);