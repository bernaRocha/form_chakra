self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\blue\\form-chakra\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var IndexPage = function IndexPage() {
  _s();

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(),
      toggleColorMode = _useColorMode.toggleColorMode;

  var formBackground = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.100', 'gray.700');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      direction: "column",
      background: formBackground,
      p: 12,
      rounded: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        mb: 6,
        children: "Log in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
        placeholder: "Seu e-mail vem aqui",
        variant: "filled",
        mb: 6,
        md: 3,
        type: "email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
        placeholder: "Digite a senha",
        variant: "filled",
        mb: 6,
        type: "password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        mb: 6,
        colorScheme: "teal",
        children: "Log In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: toggleColorMode,
        children: "Modo noturno"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_s(IndexPage, "mkb1WJgn9KC+I4vubkrVnxWCP+k=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue];
});

_c = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c;

$RefreshReg$(_c, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZUNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsImZvcm1CYWNrZ3JvdW5kIiwidXNlQ29sb3JNb2RlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHNCQUVNQyw4REFBWSxFQUZsQjtBQUFBLE1BRWRDLGVBRmMsaUJBRWRBLGVBRmM7O0FBR3RCLE1BQU1DLGNBQWMsR0FBRUMsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBdkM7QUFDQSxzQkFFRSw4REFBQyxrREFBRDtBQUFNLFVBQU0sRUFBQyxPQUFiO0FBQXFCLGNBQVUsRUFBQyxRQUFoQztBQUF5QyxrQkFBYyxFQUFDLFFBQXhEO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxlQUFTLEVBQUMsUUFBaEI7QUFBeUIsZ0JBQVUsRUFBRUQsY0FBckM7QUFBcUQsT0FBQyxFQUFFLEVBQXhEO0FBQTRELGFBQU8sRUFBRSxDQUFyRTtBQUFBLDhCQUNFLDhEQUFDLHFEQUFEO0FBQVMsVUFBRSxFQUFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVcsRUFBQyxxQkFBbkI7QUFBeUMsZUFBTyxFQUFDLFFBQWpEO0FBQTBELFVBQUUsRUFBRSxDQUE5RDtBQUFpRSxVQUFFLEVBQUUsQ0FBckU7QUFBd0UsWUFBSSxFQUFDO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVcsRUFBQyxnQkFBbkI7QUFBb0MsZUFBTyxFQUFDLFFBQTVDO0FBQXFELFVBQUUsRUFBRSxDQUF6RDtBQUE0RCxZQUFJLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsOERBQUMsb0RBQUQ7QUFBUSxVQUFFLEVBQUUsQ0FBWjtBQUFlLG1CQUFXLEVBQUMsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFLDhEQUFDLG9EQUFEO0FBQVEsZUFBTyxFQUFFRCxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQWFELENBakJEOztHQUFNRixTO1VBRXdCQywwRCxFQUNORywrRDs7O0tBSGxCSixTO0FBbUJOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZjNzI0M2VmY2U5NGY5OTU2MzQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBIZWFkaW5nLCBJbnB1dCwgQnV0dG9uLCB1c2VDb2xvck1vZGUsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG4gIGNvbnN0IGZvcm1CYWNrZ3JvdW5kID11c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS4xMDAnLCAnZ3JheS43MDAnKVxuICByZXR1cm4gKFxuXG4gICAgPEZsZXggaGVpZ2h0PScxMDB2aCcgYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cbiAgICAgIDxGbGV4IGRpcmVjdGlvbj0nY29sdW1uJyBiYWNrZ3JvdW5kPXtmb3JtQmFja2dyb3VuZH0gcD17MTJ9IHJvdW5kZWQ9ezZ9PlxuICAgICAgICA8SGVhZGluZyBtYj17Nn0+TG9nIGluPC9IZWFkaW5nPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9J1NldSBlLW1haWwgdmVtIGFxdWknIHZhcmlhbnQ9J2ZpbGxlZCcgbWI9ezZ9IG1kPXszfSB0eXBlPSdlbWFpbCcgLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPSdEaWdpdGUgYSBzZW5oYScgdmFyaWFudD0nZmlsbGVkJyBtYj17Nn0gdHlwZT0ncGFzc3dvcmQnIC8+XG4gICAgICAgIDxCdXR0b24gbWI9ezZ9IGNvbG9yU2NoZW1lPSd0ZWFsJz5Mb2cgSW48L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9Pk1vZG8gbm90dXJubzwvQnV0dG9uPlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=