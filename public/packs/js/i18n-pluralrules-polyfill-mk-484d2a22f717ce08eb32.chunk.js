(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i18n-pluralrules-polyfill-mk"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/locale-data/mk.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/locale-data/mk.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @generated */\n// prettier-ignore\nif (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {\n  Intl.PluralRules.__addLocaleData({\n    \"data\": {\n      \"categories\": {\n        \"cardinal\": [\"one\", \"other\"],\n        \"ordinal\": [\"one\", \"two\", \"many\", \"other\"]\n      },\n      \"fn\": function fn(n, ord) {\n        var s = String(n).split('.'),\n          i = s[0],\n          f = s[1] || '',\n          v0 = !s[1],\n          i10 = i.slice(-1),\n          i100 = i.slice(-2),\n          f10 = f.slice(-1),\n          f100 = f.slice(-2);\n        if (ord) return i10 == 1 && i100 != 11 ? 'one' : i10 == 2 && i100 != 12 ? 'two' : (i10 == 7 || i10 == 8) && i100 != 17 && i100 != 18 ? 'many' : 'other';\n        return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';\n      }\n    },\n    \"locale\": \"mk\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvbWsuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXMvbG9jYWxlLWRhdGEvbWsuanM/OTdmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZ2VuZXJhdGVkICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmlmIChJbnRsLlBsdXJhbFJ1bGVzICYmIHR5cGVvZiBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICBJbnRsLlBsdXJhbFJ1bGVzLl9fYWRkTG9jYWxlRGF0YSh7XG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiB7XG4gICAgICAgIFwiY2FyZGluYWxcIjogW1wib25lXCIsIFwib3RoZXJcIl0sXG4gICAgICAgIFwib3JkaW5hbFwiOiBbXCJvbmVcIiwgXCJ0d29cIiwgXCJtYW55XCIsIFwib3RoZXJcIl1cbiAgICAgIH0sXG4gICAgICBcImZuXCI6IGZ1bmN0aW9uIGZuKG4sIG9yZCkge1xuICAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpLFxuICAgICAgICAgIGYxMCA9IGYuc2xpY2UoLTEpLFxuICAgICAgICAgIGYxMDAgPSBmLnNsaWNlKC0yKTtcbiAgICAgICAgaWYgKG9yZCkgcmV0dXJuIGkxMCA9PSAxICYmIGkxMDAgIT0gMTEgPyAnb25lJyA6IGkxMCA9PSAyICYmIGkxMDAgIT0gMTIgPyAndHdvJyA6IChpMTAgPT0gNyB8fCBpMTAgPT0gOCkgJiYgaTEwMCAhPSAxNyAmJiBpMTAwICE9IDE4ID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgICAgcmV0dXJuIHYwICYmIGkxMCA9PSAxICYmIGkxMDAgIT0gMTEgfHwgZjEwID09IDEgJiYgZjEwMCAhPSAxMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibG9jYWxlXCI6IFwibWtcIlxuICB9KTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@formatjs/intl-pluralrules/locale-data/mk.js\n");

/***/ })

}]);