(function() {
  'use strict';
  function ScrollSpy (wrapper, opt) {
    this.doc = document
    this.wrapper = (typeof wrapper === 'string') ? this.doc.querySelector(wrapper) : wrapper
    this.nav = this.wrapper.querySelectorAll(opt.nav)
    this.contents = []
    this.win = window
    this.winH = this.win.innerHeight
    this.className = opt.className
    this.callback = opt.callback
    this.init()
  };

  ScrollSpy.prototype.init = function () {
    this.contents = this.getContents()
    this.attachEvent()
  };

  ScrollSpy.prototype.getContents = function () {
    var targetList = []
    for (var i = 0, max = this.nav.length; i < max; i++) {
      var href = this.nav[i].href
      targetList.push(this.doc.getElementById(href.split('#')[1]))
    }
    return targetList
  };

  ScrollSpy.prototype.attachEvent = function () {
    this.win.addEventListener('load', (function () {
      this.spy(this.callback)
    }).bind(this))
    var scrollingTimer
    this.win.addEventListener('scroll', (function () {
      if (scrollingTimer) {
        clearTimeout(scrollingTimer)
      }
      var _this = this
      scrollingTimer = setTimeout(function () {
        _this.spy(_this.callback)
      }, 10)
    }).bind(this))
    var resizingTimer
    this.win.addEventListener('resize', (function () {
      var _this = this;
      if (resizingTimer) {
        clearTimeout(resizingTimer)
      }
      resizingTimer = setTimeout(function () {
        _this.spy(_this.callback)
      }, 10)
    }).bind(this))
  };

  ScrollSpy.prototype.spy = function (cb) {
    var elems = this.getElemsViewState()
    this.markNav(elems)
    if (typeof cb === 'function') {
      cb(elems)
    }
  };

  ScrollSpy.prototype.getElemsViewState = function () {
    var elemsInView = []
    var elemsOutView = []
    var viewStatusList = []
    for (var i = 0, max = this.contents.length; i < max; i++) {
      var currentContent = this.contents[i]
      var isInView = this.isInView(currentContent)
      if (isInView) {
        elemsInView.push(currentContent)
      } else {
        elemsOutView.push(currentContent)
      }
      viewStatusList.push(isInView)
    }
    return {
      inView: elemsInView,
      outView: elemsOutView,
      viewStatusList: viewStatusList
    };
  };

  ScrollSpy.prototype.isInView = function (el) {
    var winH = this.winH;
    var scrollTop = this.doc.documentElement.scrollTop || this.doc.body.scrollTop
    var scrollBottom = scrollTop + winH
    var rect = el.getBoundingClientRect()
    var elTop = rect.top + scrollTop
    var elBottom = elTop + el.offsetHeight
    return (elTop < scrollBottom) && (elBottom > scrollTop);
  };

  ScrollSpy.prototype.markNav = function (elems) {
    var navItems = this.nav
    var isAlreadyMarked = false
    for (var i = 0, max = navItems.length; i < max; i++) {
      if (elems.viewStatusList[i] && !isAlreadyMarked) {
        isAlreadyMarked = true
        navItems[i].classList.add(this.className)
      } else {
        navItems[i].classList.remove(this.className)
      }
    }
  }
  module.exports = ScrollSpy;
}());
