(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-pt"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/pt.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/pt.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"one\", \"many\", \"other\"],\n        \"ordinal\": [\"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var _n = String(n),\n          se = _n.split(/[ce]/),\n          e = se[1] || 0,\n          c = e,\n          s = String(e ? Number(se[0]) * Math.pow(10, e) : _n).split(\".\"),\n          i = s[0],\n          v0 = !s[1],\n          i1000000 = i.slice(-6);\n        if (ord) return 'other';\n        return i == 0 || i == 1 ? 'one' : e == 0 && i != 0 && i1000000 == 0 && v0 || e < 0 || e > 5 ? 'many' : 'other';\n      }\n    },\n    \"locale\": \"pt\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvcHQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvcHQuanM/MTQ4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZ2VuZXJhdGVkICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmlmIChJbnRsLlBsdXJhbFJ1bGVzICYmIHR5cGVvZiBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSh7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiB7XG4gICAgICAgIFwiY2FyZGluYWxcIjogW1wib25lXCIsIFwibWFueVwiLCBcIm90aGVyXCJdLFxuICAgICAgICBcIm9yZGluYWxcIjogW1wib3RoZXJcIl1cbiAgICAgIH0sXG4gICAgICBcImZuXCI6IGZ1bmN0aW9uIGZuKG4sIG9yZCkge1xuICAgICAgICB2YXIgX24gPSBTdHJpbmcobiksXG4gICAgICAgICAgc2UgPSBfbi5zcGxpdCgvW2NlXS8pLFxuICAgICAgICAgIGUgPSBzZVsxXSB8fCAwLFxuICAgICAgICAgIGMgPSBlLFxuICAgICAgICAgIHMgPSBTdHJpbmcoZSA/IE51bWJlcihzZVswXSkgKiBNYXRoLnBvdygxMCwgZSkgOiBfbikuc3BsaXQoXCIuXCIpLFxuICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgICAgaTEwMDAwMDAgPSBpLnNsaWNlKC02KTtcbiAgICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgIHJldHVybiBpID09IDAgfHwgaSA9PSAxID8gJ29uZScgOiBlID09IDAgJiYgaSAhPSAwICYmIGkxMDAwMDAwID09IDAgJiYgdjAgfHwgZSA8IDAgfHwgZSA+IDUgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJsb2NhbGVcIjogXCJwdFwiXG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/pt.js\n");

/***/ })

}]);