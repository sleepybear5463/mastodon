(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-tk"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/tk.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/tk.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"one\", \"other\"],\n        \"ordinal\": [\"few\", \"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var s = String(n).split('.'),\n          t0 = Number(s[0]) == n,\n          n10 = t0 && s[0].slice(-1);\n        if (ord) return n10 == 6 || n10 == 9 || n == 10 ? 'few' : 'other';\n        return n == 1 ? 'one' : 'other';\n      }\n    },\n    \"locale\": \"tk\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvdGsuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvdGsuanM/ZWU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZ2VuZXJhdGVkICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmlmIChJbnRsLlBsdXJhbFJ1bGVzICYmIHR5cGVvZiBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSh7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiB7XG4gICAgICAgIFwiY2FyZGluYWxcIjogW1wib25lXCIsIFwib3RoZXJcIl0sXG4gICAgICAgIFwib3JkaW5hbFwiOiBbXCJmZXdcIiwgXCJvdGhlclwiXVxuICAgICAgfSxcbiAgICAgIFwiZm5cIjogZnVuY3Rpb24gZm4obiwgb3JkKSB7XG4gICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKTtcbiAgICAgICAgaWYgKG9yZCkgcmV0dXJuIG4xMCA9PSA2IHx8IG4xMCA9PSA5IHx8IG4gPT0gMTAgPyAnZmV3JyA6ICdvdGhlcic7XG4gICAgICAgIHJldHVybiBuID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImxvY2FsZVwiOiBcInRrXCJcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/tk.js\n");

/***/ })

}]);