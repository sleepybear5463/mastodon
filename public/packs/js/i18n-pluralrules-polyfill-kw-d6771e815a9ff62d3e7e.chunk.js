(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-kw"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/kw.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/kw.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"zero\", \"one\", \"two\", \"few\", \"many\", \"other\"],\n        \"ordinal\": [\"one\", \"many\", \"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var s = String(n).split('.'),\n          t0 = Number(s[0]) == n,\n          n100 = t0 && s[0].slice(-2),\n          n1000 = t0 && s[0].slice(-3),\n          n100000 = t0 && s[0].slice(-5),\n          n1000000 = t0 && s[0].slice(-6);\n        if (ord) return t0 && n >= 1 && n <= 4 || n100 >= 1 && n100 <= 4 || n100 >= 21 && n100 <= 24 || n100 >= 41 && n100 <= 44 || n100 >= 61 && n100 <= 64 || n100 >= 81 && n100 <= 84 ? 'one' : n == 5 || n100 == 5 ? 'many' : 'other';\n        return n == 0 ? 'zero' : n == 1 ? 'one' : n100 == 2 || n100 == 22 || n100 == 42 || n100 == 62 || n100 == 82 || t0 && n1000 == 0 && (n100000 >= 1000 && n100000 <= 20000 || n100000 == 40000 || n100000 == 60000 || n100000 == 80000) || n != 0 && n1000000 == 100000 ? 'two' : n100 == 3 || n100 == 23 || n100 == 43 || n100 == 63 || n100 == 83 ? 'few' : n != 1 && (n100 == 1 || n100 == 21 || n100 == 41 || n100 == 61 || n100 == 81) ? 'many' : 'other';\n      }\n    },\n    \"locale\": \"kw\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEva3cuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEva3cuanM/OGE1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZ2VuZXJhdGVkICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmlmIChJbnRsLlBsdXJhbFJ1bGVzICYmIHR5cGVvZiBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSh7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiB7XG4gICAgICAgIFwiY2FyZGluYWxcIjogW1wiemVyb1wiLCBcIm9uZVwiLCBcInR3b1wiLCBcImZld1wiLCBcIm1hbnlcIiwgXCJvdGhlclwiXSxcbiAgICAgICAgXCJvcmRpbmFsXCI6IFtcIm9uZVwiLCBcIm1hbnlcIiwgXCJvdGhlclwiXVxuICAgICAgfSxcbiAgICAgIFwiZm5cIjogZnVuY3Rpb24gZm4obiwgb3JkKSB7XG4gICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMiksXG4gICAgICAgICAgbjEwMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0zKSxcbiAgICAgICAgICBuMTAwMDAwID0gdDAgJiYgc1swXS5zbGljZSgtNSksXG4gICAgICAgICAgbjEwMDAwMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC02KTtcbiAgICAgICAgaWYgKG9yZCkgcmV0dXJuIHQwICYmIG4gPj0gMSAmJiBuIDw9IDQgfHwgbjEwMCA+PSAxICYmIG4xMDAgPD0gNCB8fCBuMTAwID49IDIxICYmIG4xMDAgPD0gMjQgfHwgbjEwMCA+PSA0MSAmJiBuMTAwIDw9IDQ0IHx8IG4xMDAgPj0gNjEgJiYgbjEwMCA8PSA2NCB8fCBuMTAwID49IDgxICYmIG4xMDAgPD0gODQgPyAnb25lJyA6IG4gPT0gNSB8fCBuMTAwID09IDUgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICAgICByZXR1cm4gbiA9PSAwID8gJ3plcm8nIDogbiA9PSAxID8gJ29uZScgOiBuMTAwID09IDIgfHwgbjEwMCA9PSAyMiB8fCBuMTAwID09IDQyIHx8IG4xMDAgPT0gNjIgfHwgbjEwMCA9PSA4MiB8fCB0MCAmJiBuMTAwMCA9PSAwICYmIChuMTAwMDAwID49IDEwMDAgJiYgbjEwMDAwMCA8PSAyMDAwMCB8fCBuMTAwMDAwID09IDQwMDAwIHx8IG4xMDAwMDAgPT0gNjAwMDAgfHwgbjEwMDAwMCA9PSA4MDAwMCkgfHwgbiAhPSAwICYmIG4xMDAwMDAwID09IDEwMDAwMCA/ICd0d28nIDogbjEwMCA9PSAzIHx8IG4xMDAgPT0gMjMgfHwgbjEwMCA9PSA0MyB8fCBuMTAwID09IDYzIHx8IG4xMDAgPT0gODMgPyAnZmV3JyA6IG4gIT0gMSAmJiAobjEwMCA9PSAxIHx8IG4xMDAgPT0gMjEgfHwgbjEwMCA9PSA0MSB8fCBuMTAwID09IDYxIHx8IG4xMDAgPT0gODEpID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibG9jYWxlXCI6IFwia3dcIlxuICB9KTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/kw.js\n");

/***/ })

}]);