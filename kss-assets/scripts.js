/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var mopsgt = __webpack_require__(/*! ./mop-styleguide-template.js */ \"./src/scripts/mop-styleguide-template.js\");\n\nvar ScrollSpy = __webpack_require__(/*! ./scrollspy.js */ \"./src/scripts/scrollspy.js\"); //\n// var spy = new ScrollSpy('#kss-node', {\n//   nav: '.kss-nav__menu-item.active .kss-nav__menu-child > li > a',\n//   className: 'is-in-viewport'\n// });\n\n//# sourceURL=webpack://mop-styleguide-template/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/mop-styleguide-template.js":
/*!************************************************!*\
  !*** ./src/scripts/mop-styleguide-template.js ***!
  \************************************************/
/***/ (() => {

eval("(function (mopsgt) {\n  'use strict';\n\n  mopsgt = {\n    initialize: function initialize() {\n      var _this = this;\n\n      var mainEl = mopsgt.mainEl = document.getElementById('kss-main');\n      var sidebar = mopsgt.sidebar = mainEl.querySelector(\".kss-sidebar\");\n      mainEl.querySelector(\".sidebar-toggle\").addEventListener('click', function (e) {\n        e.preventDefault();\n        mopsgt.showNav();\n      });\n      sidebar.querySelector(\".button--close\").addEventListener('click', function (e) {\n        e.preventDefault();\n        mopsgt.hideNav();\n      });\n      document.body.addEventListener(\"click\", function (e) {\n        // When you click outside the sidebar, and you didn't click on a link the sidebar should close.\n        var linkClicked = e.target.tagName.toLowerCase() === \"a\";\n        var clickWithinSidebar = e.target.closest('.kss-sidebar');\n\n        if (!linkClicked) {\n          e.preventDefault();\n\n          if (!clickWithinSidebar && !e.target.closest('.sidebar-toggle')) {\n            mopsgt.hideNav();\n          }\n        }\n      });\n      sidebar.querySelector('.kss-nav > ul > li').addEventListener('click', function () {\n        sidebar.dataset.active = _this;\n      });\n      var menuChildToggles = mainEl.querySelectorAll('.kss-sidebar .kss-nav > ul > li .kss-nav__menu-child-actuator');\n\n      if (menuChildToggles.length > 0) {\n        menuChildToggles.forEach(function (item) {\n          item.addEventListener('click', function (e) {\n            e.preventDefault();\n            var parentMenu = e.target.closest('.kss-nav__menu-item');\n            console.log(\"hi\", parentMenu);\n            mopsgt.toggleElement(parentMenu);\n          });\n        });\n      }\n\n      var markupToggles = mainEl.querySelectorAll('.component_details .controls .markup_toggle');\n\n      if (markupToggles.length > 0) {\n        markupToggles.forEach(function (item) {\n          item.addEventListener('click', function (e) {\n            e.preventDefault();\n            mopsgt.showModal(\"Markup\", e.target.closest('.component_details').querySelector('.kss-markup').innerHTML);\n          });\n        });\n      }\n\n      var modToggles = mainEl.querySelectorAll('.component_details .controls .modifiers_toggle');\n\n      if (modToggles.length > 0) {\n        modToggles.forEach(function (item) {\n          item.addEventListener('click', function (e) {\n            e.preventDefault();\n            mopsgt.showModal(\"Variants\", e.target.closest('.component_details').querySelector('.kss-modifier__wrapper').innerHTML);\n          });\n        });\n      }\n\n      var menuItems = mainEl.querySelectorAll(\".kss-sidebar .kss-nav__menu .kss-nav__menu-item\");\n\n      if (menuItems.length > 0) {\n        menuItems.forEach(function (item) {\n          if (item.getAttribute(\"class\") && mainEl.querySelector(\".kss-header h1\").id && mopsgt.slugify(mainEl.querySelector(\".kss-header h1\").id) === kss.slugify(item.getAttribute(\"class\"))) {\n            item.classList.add(\"active\");\n            mainEl.querySelector(\".kss-sidebar\").dataset.active = item;\n            mopsgt.showModal();\n          }\n        });\n      }\n\n      mopsgt.buildModal();\n    },\n    buildModal: function buildModal() {\n      var modalBackdrop = mopsgt.modalBackdrop = document.createElement('div');\n      var modal = mopsgt.modal = document.createElement('div');\n      var modalHeader = mopsgt.modalHeader = document.createElement('div');\n      var modalTitle = mopsgt.modalTitle = document.createElement('h1');\n      var modalCloseButton = mopsgt.modalCloseButton = document.createElement('a');\n      var modalContent = mopsgt.modalContent = document.createElement('div');\n      var modalBody = mopsgt.modalBody = document.createElement('div');\n      modalBackdrop.classList.add('modal__backdrop');\n      modal.classList.add('modal');\n      modalContent.classList.add('modal__content');\n      modalHeader.classList.add('modal__header');\n      modalTitle.classList.add('modal__title');\n      modalCloseButton.classList.add('modal__close');\n      modalBody.classList.add('modal__body');\n      modalContent.appendChild(modalHeader);\n      modalContent.appendChild(modalBody);\n      modalHeader.appendChild(modalTitle);\n      modalHeader.appendChild(modalCloseButton);\n      modal.appendChild(modalContent);\n      document.body.appendChild(modalBackdrop);\n      document.body.appendChild(modal);\n      modalBackdrop.addEventListener('click', function (e) {\n        var clickedBackdrop = e.target === modalBackdrop;\n        console.log('clickedBackdrop', clickedBackdrop);\n\n        if (clickedBackdrop) {\n          mopsgt.hideModal();\n        }\n      });\n      modalCloseButton.addEventListener('click', function (e) {\n        e.preventDefault();\n        mopsgt.hideModal();\n      });\n    },\n    setModalContent: function setModalContent(title, htmlString) {\n      mopsgt.modalTitle.textContent = title;\n      mopsgt.modalBody.innerHTML = htmlString;\n    },\n    showModal: function showModal(title, htmlString) {\n      if (title || htmlString) {\n        mopsgt.setModalContent(title, htmlString);\n      }\n\n      document.body.classList.add('modal-is-active');\n    },\n    hideModal: function hideModal() {\n      document.body.classList.remove('modal-is-active');\n    },\n    slugify: function slugify(text) {\n      return text.toString().toLowerCase().replace(/\\s+/g, '-').replace(/[^\\w\\-]+/g, '').replace(/\\-\\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');\n    },\n    toggleSidebar: function toggleSidebar() {\n      mopsgt.mainEl.classList.toggle('nav-active');\n      mopsgt.sidebar.classList.toggle('active');\n    },\n    showNav: function showNav() {\n      mopsgt.mainEl.classList.add('nav-active');\n      mopsgt.showElement(mopsgt.sidebar);\n    },\n    hideNav: function hideNav() {\n      console.log('hideNav');\n      mopsgt.mainEl.classList.remove('nav-active');\n      mopsgt.hideElement(mopsgt.sidebar);\n    },\n    toggleElement: function toggleElement(el) {\n      console.log('toggleElement', el);\n      el.classList.toggle(\"active\");\n    },\n    showElement: function showElement(el) {\n      console.log('showElement', el);\n      el.classList.add(\"active\");\n    },\n    hideElement: function hideElement(el) {\n      console.log('closeElement', el);\n      el.classList.remove(\"active\");\n    }\n  };\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    mopsgt.initialize();\n  });\n})(window.mopsgt = {});\n\n//# sourceURL=webpack://mop-styleguide-template/./src/scripts/mop-styleguide-template.js?");

/***/ }),

/***/ "./src/scripts/scrollspy.js":
/*!**********************************!*\
  !*** ./src/scripts/scrollspy.js ***!
  \**********************************/
/***/ ((module) => {

eval("(function () {\n  'use strict';\n\n  function ScrollSpy(wrapper, opt) {\n    this.doc = document;\n    this.wrapper = typeof wrapper === 'string' ? this.doc.querySelector(wrapper) : wrapper;\n    this.nav = this.wrapper.querySelectorAll(opt.nav);\n    this.contents = [];\n    this.win = window;\n    this.winH = this.win.innerHeight;\n    this.className = opt.className;\n    this.callback = opt.callback;\n    this.init();\n  }\n\n  ;\n\n  ScrollSpy.prototype.init = function () {\n    this.contents = this.getContents();\n    this.attachEvent();\n  };\n\n  ScrollSpy.prototype.getContents = function () {\n    var targetList = [];\n\n    for (var i = 0, max = this.nav.length; i < max; i++) {\n      var href = this.nav[i].href;\n      targetList.push(this.doc.getElementById(href.split('#')[1]));\n    }\n\n    return targetList;\n  };\n\n  ScrollSpy.prototype.attachEvent = function () {\n    this.win.addEventListener('load', function () {\n      this.spy(this.callback);\n    }.bind(this));\n    var scrollingTimer;\n    this.win.addEventListener('scroll', function () {\n      if (scrollingTimer) {\n        clearTimeout(scrollingTimer);\n      }\n\n      var _this = this;\n\n      scrollingTimer = setTimeout(function () {\n        _this.spy(_this.callback);\n      }, 10);\n    }.bind(this));\n    var resizingTimer;\n    this.win.addEventListener('resize', function () {\n      var _this = this;\n\n      if (resizingTimer) {\n        clearTimeout(resizingTimer);\n      }\n\n      resizingTimer = setTimeout(function () {\n        _this.spy(_this.callback);\n      }, 10);\n    }.bind(this));\n  };\n\n  ScrollSpy.prototype.spy = function (cb) {\n    var elems = this.getElemsViewState();\n    this.markNav(elems);\n\n    if (typeof cb === 'function') {\n      cb(elems);\n    }\n  };\n\n  ScrollSpy.prototype.getElemsViewState = function () {\n    var elemsInView = [];\n    var elemsOutView = [];\n    var viewStatusList = [];\n\n    for (var i = 0, max = this.contents.length; i < max; i++) {\n      var currentContent = this.contents[i];\n      var isInView = this.isInView(currentContent);\n\n      if (isInView) {\n        elemsInView.push(currentContent);\n      } else {\n        elemsOutView.push(currentContent);\n      }\n\n      viewStatusList.push(isInView);\n    }\n\n    return {\n      inView: elemsInView,\n      outView: elemsOutView,\n      viewStatusList: viewStatusList\n    };\n  };\n\n  ScrollSpy.prototype.isInView = function (el) {\n    var winH = this.winH;\n    var scrollTop = this.doc.documentElement.scrollTop || this.doc.body.scrollTop;\n    var scrollBottom = scrollTop + winH;\n    var rect = el.getBoundingClientRect();\n    var elTop = rect.top + scrollTop;\n    var elBottom = elTop + el.offsetHeight;\n    return elTop < scrollBottom && elBottom > scrollTop;\n  };\n\n  ScrollSpy.prototype.markNav = function (elems) {\n    var navItems = this.nav;\n    var isAlreadyMarked = false;\n\n    for (var i = 0, max = navItems.length; i < max; i++) {\n      if (elems.viewStatusList[i] && !isAlreadyMarked) {\n        isAlreadyMarked = true;\n        navItems[i].classList.add(this.className);\n      } else {\n        navItems[i].classList.remove(this.className);\n      }\n    }\n  };\n\n  module.exports = ScrollSpy;\n})();\n\n//# sourceURL=webpack://mop-styleguide-template/./src/scripts/scrollspy.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;