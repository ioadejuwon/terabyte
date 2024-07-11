/**
 * Swiper 8.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2022
 */

!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
  "use strict";
  function e(e) {
      return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
  }
  function t(s, a) {
      void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i=>{
          void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
      }
      ))
  }
  const s = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
          blur() {},
          nodeName: ""
      },
      querySelector: ()=>null,
      querySelectorAll: ()=>[],
      getElementById: ()=>null,
      createEvent: ()=>({
          initEvent() {}
      }),
      createElement: ()=>({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: ()=>[]
      }),
      createElementNS: ()=>({}),
      importNode: ()=>null,
      location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
      }
  };
  function a() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, s),
      e
  }
  const i = {
      document: s,
      navigator: {
          userAgent: ""
      },
      location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
      },
      history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
      },
      CustomEvent: function() {
          return this
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: ()=>({
          getPropertyValue: ()=>""
      }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: ()=>({}),
      requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
      null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
      }
  };
  function r() {
      const e = "undefined" != typeof window ? window : {};
      return t(e, i),
      e
  }
  class n extends Array {
      constructor(e) {
          "number" == typeof e ? super(e) : (super(...e || []),
          function(e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                  get: ()=>t,
                  set(e) {
                      t.__proto__ = e
                  }
              })
          }(this))
      }
  }
  function l(e) {
      void 0 === e && (e = []);
      const t = [];
      return e.forEach((e=>{
          Array.isArray(e) ? t.push(...l(e)) : t.push(e)
      }
      )),
      t
  }
  function o(e, t) {
      return Array.prototype.filter.call(e, t)
  }
  function d(e, t) {
      const s = r()
        , i = a();
      let l = [];
      if (!t && e instanceof n)
          return e;
      if (!e)
          return new n(l);
      if ("string" == typeof e) {
          const s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
              let e = "div";
              0 === s.indexOf("<li") && (e = "ul"),
              0 === s.indexOf("<tr") && (e = "tbody"),
              0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
              0 === s.indexOf("<tbody") && (e = "table"),
              0 === s.indexOf("<option") && (e = "select");
              const t = i.createElement(e);
              t.innerHTML = s;
              for (let e = 0; e < t.childNodes.length; e += 1)
                  l.push(t.childNodes[e])
          } else
              l = function(e, t) {
                  if ("string" != typeof e)
                      return [e];
                  const s = []
                    , a = t.querySelectorAll(e);
                  for (let e = 0; e < a.length; e += 1)
                      s.push(a[e]);
                  return s
              }(e.trim(), t || i)
      } else if (e.nodeType || e === s || e === i)
          l.push(e);
      else if (Array.isArray(e)) {
          if (e instanceof n)
              return e;
          l = e
      }
      return new n(function(e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
              -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t
      }(l))
  }
  d.fn = n.prototype;
  const c = {
      addClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          return this.forEach((e=>{
              e.classList.add(...a)
          }
          )),
          this
      },
      removeClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          return this.forEach((e=>{
              e.classList.remove(...a)
          }
          )),
          this
      },
      hasClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          return o(this, (e=>a.filter((t=>e.classList.contains(t))).length > 0)).length > 0
      },
      toggleClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          this.forEach((e=>{
              a.forEach((t=>{
                  e.classList.toggle(t)
              }
              ))
          }
          ))
      },
      attr: function(e, t) {
          if (1 === arguments.length && "string" == typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
              if (2 === arguments.length)
                  this[s].setAttribute(e, t);
              else
                  for (const t in e)
                      this[s][t] = e[t],
                      this[s].setAttribute(t, e[t]);
          return this
      },
      removeAttr: function(e) {
          for (let t = 0; t < this.length; t += 1)
              this[t].removeAttribute(e);
          return this
      },
      transform: function(e) {
          for (let t = 0; t < this.length; t += 1)
              this[t].style.transform = e;
          return this
      },
      transition: function(e) {
          for (let t = 0; t < this.length; t += 1)
              this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
          return this
      },
      on: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          let[a,i,r,n] = t;
          function l(e) {
              const t = e.target;
              if (!t)
                  return;
              const s = e.target.dom7EventData || [];
              if (s.indexOf(e) < 0 && s.unshift(e),
              d(t).is(i))
                  r.apply(t, s);
              else {
                  const e = d(t).parents();
                  for (let t = 0; t < e.length; t += 1)
                      d(e[t]).is(i) && r.apply(e[t], s)
              }
          }
          function o(e) {
              const t = e && e.target && e.target.dom7EventData || [];
              t.indexOf(e) < 0 && t.unshift(e),
              r.apply(this, t)
          }
          "function" == typeof t[1] && ([a,r,n] = t,
          i = void 0),
          n || (n = !1);
          const c = a.split(" ");
          let p;
          for (let e = 0; e < this.length; e += 1) {
              const t = this[e];
              if (i)
                  for (p = 0; p < c.length; p += 1) {
                      const e = c[p];
                      t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                      t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                      t.dom7LiveListeners[e].push({
                          listener: r,
                          proxyListener: l
                      }),
                      t.addEventListener(e, l, n)
                  }
              else
                  for (p = 0; p < c.length; p += 1) {
                      const e = c[p];
                      t.dom7Listeners || (t.dom7Listeners = {}),
                      t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                      t.dom7Listeners[e].push({
                          listener: r,
                          proxyListener: o
                      }),
                      t.addEventListener(e, o, n)
                  }
          }
          return this
      },
      off: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          let[a,i,r,n] = t;
          "function" == typeof t[1] && ([a,r,n] = t,
          i = void 0),
          n || (n = !1);
          const l = a.split(" ");
          for (let e = 0; e < l.length; e += 1) {
              const t = l[e];
              for (let e = 0; e < this.length; e += 1) {
                  const s = this[e];
                  let a;
                  if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
                  a && a.length)
                      for (let e = a.length - 1; e >= 0; e -= 1) {
                          const i = a[e];
                          r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n),
                          a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n),
                          a.splice(e, 1))
                      }
              }
          }
          return this
      },
      trigger: function() {
          const e = r();
          for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
              s[a] = arguments[a];
          const i = s[0].split(" ")
            , n = s[1];
          for (let t = 0; t < i.length; t += 1) {
              const a = i[t];
              for (let t = 0; t < this.length; t += 1) {
                  const i = this[t];
                  if (e.CustomEvent) {
                      const t = new e.CustomEvent(a,{
                          detail: n,
                          bubbles: !0,
                          cancelable: !0
                      });
                      i.dom7EventData = s.filter(((e,t)=>t > 0)),
                      i.dispatchEvent(t),
                      i.dom7EventData = [],
                      delete i.dom7EventData
                  }
              }
          }
          return this
      },
      transitionEnd: function(e) {
          const t = this;
          return e && t.on("transitionend", (function s(a) {
              a.target === this && (e.call(this, a),
              t.off("transitionend", s))
          }
          )),
          this
      },
      outerWidth: function(e) {
          if (this.length > 0) {
              if (e) {
                  const e = this.styles();
                  return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
              }
              return this[0].offsetWidth
          }
          return null
      },
      outerHeight: function(e) {
          if (this.length > 0) {
              if (e) {
                  const e = this.styles();
                  return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
              }
              return this[0].offsetHeight
          }
          return null
      },
      styles: function() {
          const e = r();
          return this[0] ? e.getComputedStyle(this[0], null) : {}
      },
      offset: function() {
          if (this.length > 0) {
              const e = r()
                , t = a()
                , s = this[0]
                , i = s.getBoundingClientRect()
                , n = t.body
                , l = s.clientTop || n.clientTop || 0
                , o = s.clientLeft || n.clientLeft || 0
                , d = s === e ? e.scrollY : s.scrollTop
                , c = s === e ? e.scrollX : s.scrollLeft;
              return {
                  top: i.top + d - l,
                  left: i.left + c - o
              }
          }
          return null
      },
      css: function(e, t) {
          const s = r();
          let a;
          if (1 === arguments.length) {
              if ("string" != typeof e) {
                  for (a = 0; a < this.length; a += 1)
                      for (const t in e)
                          this[a].style[t] = e[t];
                  return this
              }
              if (this[0])
                  return s.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
              for (a = 0; a < this.length; a += 1)
                  this[a].style[e] = t;
              return this
          }
          return this
      },
      each: function(e) {
          return e ? (this.forEach(((t,s)=>{
              e.apply(t, [t, s])
          }
          )),
          this) : this
      },
      html: function(e) {
          if (void 0 === e)
              return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1)
              this[t].innerHTML = e;
          return this
      },
      text: function(e) {
          if (void 0 === e)
              return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1)
              this[t].textContent = e;
          return this
      },
      is: function(e) {
          const t = r()
            , s = a()
            , i = this[0];
          let l, o;
          if (!i || void 0 === e)
              return !1;
          if ("string" == typeof e) {
              if (i.matches)
                  return i.matches(e);
              if (i.webkitMatchesSelector)
                  return i.webkitMatchesSelector(e);
              if (i.msMatchesSelector)
                  return i.msMatchesSelector(e);
              for (l = d(e),
              o = 0; o < l.length; o += 1)
                  if (l[o] === i)
                      return !0;
              return !1
          }
          if (e === s)
              return i === s;
          if (e === t)
              return i === t;
          if (e.nodeType || e instanceof n) {
              for (l = e.nodeType ? [e] : e,
              o = 0; o < l.length; o += 1)
                  if (l[o] === i)
                      return !0;
              return !1
          }
          return !1
      },
      index: function() {
          let e, t = this[0];
          if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                  1 === t.nodeType && (e += 1);
              return e
          }
      },
      eq: function(e) {
          if (void 0 === e)
              return this;
          const t = this.length;
          if (e > t - 1)
              return d([]);
          if (e < 0) {
              const s = t + e;
              return d(s < 0 ? [] : [this[s]])
          }
          return d([this[e]])
      },
      append: function() {
          let e;
          const t = a();
          for (let s = 0; s < arguments.length; s += 1) {
              e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
              for (let s = 0; s < this.length; s += 1)
                  if ("string" == typeof e) {
                      const a = t.createElement("div");
                      for (a.innerHTML = e; a.firstChild; )
                          this[s].appendChild(a.firstChild)
                  } else if (e instanceof n)
                      for (let t = 0; t < e.length; t += 1)
                          this[s].appendChild(e[t]);
                  else
                      this[s].appendChild(e)
          }
          return this
      },
      prepend: function(e) {
          const t = a();
          let s, i;
          for (s = 0; s < this.length; s += 1)
              if ("string" == typeof e) {
                  const a = t.createElement("div");
                  for (a.innerHTML = e,
                  i = a.childNodes.length - 1; i >= 0; i -= 1)
                      this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
              } else if (e instanceof n)
                  for (i = 0; i < e.length; i += 1)
                      this[s].insertBefore(e[i], this[s].childNodes[0]);
              else
                  this[s].insertBefore(e, this[s].childNodes[0]);
          return this
      },
      next: function(e) {
          return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
      },
      nextAll: function(e) {
          const t = [];
          let s = this[0];
          if (!s)
              return d([]);
          for (; s.nextElementSibling; ) {
              const a = s.nextElementSibling;
              e ? d(a).is(e) && t.push(a) : t.push(a),
              s = a
          }
          return d(t)
      },
      prev: function(e) {
          if (this.length > 0) {
              const t = this[0];
              return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
          }
          return d([])
      },
      prevAll: function(e) {
          const t = [];
          let s = this[0];
          if (!s)
              return d([]);
          for (; s.previousElementSibling; ) {
              const a = s.previousElementSibling;
              e ? d(a).is(e) && t.push(a) : t.push(a),
              s = a
          }
          return d(t)
      },
      parent: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
              null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
          return d(t)
      },
      parents: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
              let a = this[s].parentNode;
              for (; a; )
                  e ? d(a).is(e) && t.push(a) : t.push(a),
                  a = a.parentNode
          }
          return d(t)
      },
      closest: function(e) {
          let t = this;
          return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)),
          t)
      },
      find: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
              const a = this[s].querySelectorAll(e);
              for (let e = 0; e < a.length; e += 1)
                  t.push(a[e])
          }
          return d(t)
      },
      children: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
              const a = this[s].children;
              for (let s = 0; s < a.length; s += 1)
                  e && !d(a[s]).is(e) || t.push(a[s])
          }
          return d(t)
      },
      filter: function(e) {
          return d(o(this, e))
      },
      remove: function() {
          for (let e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
      }
  };
  function p(e, t) {
      return void 0 === t && (t = 0),
      setTimeout(e, t)
  }
  function u() {
      return Date.now()
  }
  function h(e, t) {
      void 0 === t && (t = "x");
      const s = r();
      let a, i, n;
      const l = function(e) {
          const t = r();
          let s;
          return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
      }(e);
      return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
      i.split(",").length > 6 && (i = i.split(", ").map((e=>e.replace(",", "."))).join(", ")),
      n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
      a = n.toString().split(",")),
      "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
      "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
      i || 0
  }
  function m(e) {
      return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
  }
  function f(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
  }
  function g() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
        , t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
          const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (null != a && !f(a)) {
              const s = Object.keys(Object(a)).filter((e=>t.indexOf(e) < 0));
              for (let t = 0, i = s.length; t < i; t += 1) {
                  const i = s[t]
                    , r = Object.getOwnPropertyDescriptor(a, i);
                  void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {},
                  a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
              }
          }
      }
      return e
  }
  function v(e, t, s) {
      e.style.setProperty(t, s)
  }
  function w(e) {
      let {swiper: t, targetPosition: s, side: a} = e;
      const i = r()
        , n = -t.translate;
      let l, o = null;
      const d = t.params.speed;
      t.wrapperEl.style.scrollSnapType = "none",
      i.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > n ? "next" : "prev"
        , p = (e,t)=>"next" === c && e >= t || "prev" === c && e <= t
        , u = ()=>{
          l = (new Date).getTime(),
          null === o && (o = l);
          const e = Math.max(Math.min((l - o) / d, 1), 0)
            , r = .5 - Math.cos(e * Math.PI) / 2;
          let c = n + r * (s - n);
          if (p(c, s) && (c = s),
          t.wrapperEl.scrollTo({
              [a]: c
          }),
          p(c, s))
              return t.wrapperEl.style.overflow = "hidden",
              t.wrapperEl.style.scrollSnapType = "",
              setTimeout((()=>{
                  t.wrapperEl.style.overflow = "",
                  t.wrapperEl.scrollTo({
                      [a]: c
                  })
              }
              )),
              void i.cancelAnimationFrame(t.cssModeFrameID);
          t.cssModeFrameID = i.requestAnimationFrame(u)
      }
      ;
      u()
  }
  let b, x, y;
  function E() {
      return b || (b = function() {
          const e = r()
            , t = a();
          return {
              smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
              touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
              passiveListener: function() {
                  let t = !1;
                  try {
                      const s = Object.defineProperty({}, "passive", {
                          get() {
                              t = !0
                          }
                      });
                      e.addEventListener("testPassiveListener", null, s)
                  } catch (e) {}
                  return t
              }(),
              gestures: "ongesturestart"in e
          }
      }()),
      b
  }
  function T(e) {
      return void 0 === e && (e = {}),
      x || (x = function(e) {
          let {userAgent: t} = void 0 === e ? {} : e;
          const s = E()
            , a = r()
            , i = a.navigator.platform
            , n = t || a.navigator.userAgent
            , l = {
              ios: !1,
              android: !1
          }
            , o = a.screen.width
            , d = a.screen.height
            , c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
            , h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
            , m = "Win32" === i;
          let f = "MacIntel" === i;
          return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/),
          p || (p = [0, 1, "13_0_0"]),
          f = !1),
          c && !m && (l.os = "android",
          l.android = !0),
          (p || h || u) && (l.os = "ios",
          l.ios = !0),
          l
      }(e)),
      x
  }
  function C() {
      return y || (y = function() {
          const e = r();
          return {
              isSafari: function() {
                  const t = e.navigator.userAgent.toLowerCase();
                  return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
              }(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
          }
      }()),
      y
  }
  Object.keys(c).forEach((e=>{
      Object.defineProperty(d.fn, e, {
          value: c[e],
          writable: !0
      })
  }
  ));
  var $ = {
      on(e, t, s) {
          const a = this;
          if (!a.eventsListeners || a.destroyed)
              return a;
          if ("function" != typeof t)
              return a;
          const i = s ? "unshift" : "push";
          return e.split(" ").forEach((e=>{
              a.eventsListeners[e] || (a.eventsListeners[e] = []),
              a.eventsListeners[e][i](t)
          }
          )),
          a
      },
      once(e, t, s) {
          const a = this;
          if (!a.eventsListeners || a.destroyed)
              return a;
          if ("function" != typeof t)
              return a;
          function i() {
              a.off(e, i),
              i.__emitterProxy && delete i.__emitterProxy;
              for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
                  r[n] = arguments[n];
              t.apply(a, r)
          }
          return i.__emitterProxy = t,
          a.on(e, i, s)
      },
      onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed)
              return s;
          if ("function" != typeof e)
              return s;
          const a = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
          s
      },
      offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed)
              return t;
          if (!t.eventsAnyListeners)
              return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1),
          t
      },
      off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e=>{
              void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a,i)=>{
                  (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
              }
              ))
          }
          )),
          s) : s
      },
      emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed)
              return e;
          if (!e.eventsListeners)
              return e;
          let t, s, a;
          for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
              r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0],
          s = r.slice(1, r.length),
          a = e) : (t = r[0].events,
          s = r[0].data,
          a = r[0].context || e),
          s.unshift(a);
          return (Array.isArray(t) ? t : t.split(" ")).forEach((t=>{
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e=>{
                  e.apply(a, [t, ...s])
              }
              )),
              e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e=>{
                  e.apply(a, s)
              }
              ))
          }
          )),
          e
      }
  };
  var S = {
      updateSize: function() {
          const e = this;
          let t, s;
          const a = e.$el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth,
          s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight,
          0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10),
          s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s
          }))
      },
      updateSlides: function() {
          const e = this;
          function t(t) {
              return e.isHorizontal() ? t : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom"
              }[t]
          }
          function s(e, s) {
              return parseFloat(e.getPropertyValue(t(s)) || 0)
          }
          const a = e.params
            , {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
            , o = e.virtual && a.virtual.enabled
            , d = o ? e.virtual.slides.length : e.slides.length
            , c = i.children(`.${e.params.slideClass}`)
            , p = o ? e.virtual.slides.length : c.length;
          let u = [];
          const h = []
            , m = [];
          let f = a.slidesOffsetBefore;
          "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
          let g = a.slidesOffsetAfter;
          "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length
            , b = e.slidesGrid.length;
          let x = a.spaceBetween
            , y = -f
            , E = 0
            , T = 0;
          if (void 0 === r)
              return;
          "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r),
          e.virtualSize = -x,
          n ? c.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
          }) : c.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
          }),
          a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
          v(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const C = a.grid && a.grid.rows > 1 && e.grid;
          let $;
          C && e.grid.initSlides(p);
          const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e=>void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < p; i += 1) {
              $ = 0;
              const n = c.eq(i);
              if (C && e.grid.updateSlide(i, n, p, t),
              "none" !== n.css("display")) {
                  if ("auto" === a.slidesPerView) {
                      S && (c[i].style[t("width")] = "");
                      const r = getComputedStyle(n[0])
                        , l = n[0].style.transform
                        , o = n[0].style.webkitTransform;
                      if (l && (n[0].style.transform = "none"),
                      o && (n[0].style.webkitTransform = "none"),
                      a.roundLengths)
                          $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                      else {
                          const e = s(r, "width")
                            , t = s(r, "padding-left")
                            , a = s(r, "padding-right")
                            , i = s(r, "margin-left")
                            , l = s(r, "margin-right")
                            , o = r.getPropertyValue("box-sizing");
                          if (o && "border-box" === o)
                              $ = e + i + l;
                          else {
                              const {clientWidth: s, offsetWidth: r} = n[0];
                              $ = e + t + a + i + l + (r - s)
                          }
                      }
                      l && (n[0].style.transform = l),
                      o && (n[0].style.webkitTransform = o),
                      a.roundLengths && ($ = Math.floor($))
                  } else
                      $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView,
                      a.roundLengths && ($ = Math.floor($)),
                      c[i] && (c[i].style[t("width")] = `${$}px`);
                  c[i] && (c[i].swiperSlideSize = $),
                  m.push($),
                  a.centeredSlides ? (y = y + $ / 2 + E / 2 + x,
                  0 === E && 0 !== i && (y = y - r / 2 - x),
                  0 === i && (y = y - r / 2 - x),
                  Math.abs(y) < .001 && (y = 0),
                  a.roundLengths && (y = Math.floor(y)),
                  T % a.slidesPerGroup == 0 && u.push(y),
                  h.push(y)) : (a.roundLengths && (y = Math.floor(y)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y),
                  h.push(y),
                  y = y + $ + x),
                  e.virtualSize += $ + x,
                  E = $,
                  T += 1
              }
          }
          if (e.virtualSize = Math.max(e.virtualSize, r) + g,
          n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
              width: `${e.virtualSize + a.spaceBetween}px`
          }),
          a.setWrapperSize && i.css({
              [t("width")]: `${e.virtualSize + a.spaceBetween}px`
          }),
          C && e.grid.updateWrapperSize($, u, t),
          !a.centeredSlides) {
              const t = [];
              for (let s = 0; s < u.length; s += 1) {
                  let i = u[s];
                  a.roundLengths && (i = Math.floor(i)),
                  u[s] <= e.virtualSize - r && t.push(i)
              }
              u = t,
              Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
          }
          if (0 === u.length && (u = [0]),
          0 !== a.spaceBetween) {
              const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
              c.filter(((e,t)=>!a.cssMode || t !== c.length - 1)).css({
                  [s]: `${x}px`
              })
          }
          if (a.centeredSlides && a.centeredSlidesBounds) {
              let e = 0;
              m.forEach((t=>{
                  e += t + (a.spaceBetween ? a.spaceBetween : 0)
              }
              )),
              e -= a.spaceBetween;
              const t = e - r;
              u = u.map((e=>e < 0 ? -f : e > t ? t + g : e))
          }
          if (a.centerInsufficientSlides) {
              let e = 0;
              if (m.forEach((t=>{
                  e += t + (a.spaceBetween ? a.spaceBetween : 0)
              }
              )),
              e -= a.spaceBetween,
              e < r) {
                  const t = (r - e) / 2;
                  u.forEach(((e,s)=>{
                      u[s] = e - t
                  }
                  )),
                  h.forEach(((e,s)=>{
                      h[s] = e + t
                  }
                  ))
              }
          }
          if (Object.assign(e, {
              slides: c,
              snapGrid: u,
              slidesGrid: h,
              slidesSizesGrid: m
          }),
          a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
              v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
              v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
              const t = -e.snapGrid[0]
                , s = -e.slidesGrid[0];
              e.snapGrid = e.snapGrid.map((e=>e + t)),
              e.slidesGrid = e.slidesGrid.map((e=>e + s))
          }
          if (p !== d && e.emit("slidesLengthChange"),
          u.length !== w && (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          a.watchSlidesProgress && e.updateSlidesOffset(),
          !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
              const t = `${a.containerModifierClass}backface-hidden`
                , s = e.$el.hasClass(t);
              p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
          }
      },
      updateAutoHeight: function(e) {
          const t = this
            , s = []
            , a = t.virtual && t.params.virtual.enabled;
          let i, r = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const n = e=>a ? t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                  t.visibleSlides.each((e=>{
                      s.push(e)
                  }
                  ));
              else
                  for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                      const e = t.activeIndex + i;
                      if (e > t.slides.length && !a)
                          break;
                      s.push(n(e))
                  }
          else
              s.push(n(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
              if (void 0 !== s[i]) {
                  const e = s[i].offsetHeight;
                  r = e > r ? e : r
              }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
      },
      updateSlidesOffset: function() {
          const e = this
            , t = e.slides;
          for (let s = 0; s < t.length; s += 1)
              t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
      },
      updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this
            , s = t.params
            , {slides: a, rtlTranslate: i, snapGrid: r} = t;
          if (0 === a.length)
              return;
          void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
          let n = -e;
          i && (n = e),
          a.removeClass(s.slideVisibleClass),
          t.visibleSlidesIndexes = [],
          t.visibleSlides = [];
          for (let e = 0; e < a.length; e += 1) {
              const l = a[e];
              let o = l.swiperSlideOffset;
              s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
              const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                , c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                , p = -(n - o)
                , u = p + t.slidesSizesGrid[e];
              (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l),
              t.visibleSlidesIndexes.push(e),
              a.eq(e).addClass(s.slideVisibleClass)),
              l.progress = i ? -d : d,
              l.originalProgress = i ? -c : c
          }
          t.visibleSlides = d(t.visibleSlides)
      },
      updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
              const s = t.rtlTranslate ? -1 : 1;
              e = t && t.translate && t.translate * s || 0
          }
          const s = t.params
            , a = t.maxTranslate() - t.minTranslate();
          let {progress: i, isBeginning: r, isEnd: n} = t;
          const l = r
            , o = n;
          0 === a ? (i = 0,
          r = !0,
          n = !0) : (i = (e - t.minTranslate()) / a,
          r = i <= 0,
          n = i >= 1),
          Object.assign(t, {
              progress: i,
              isBeginning: r,
              isEnd: n
          }),
          (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          n && !o && t.emit("reachEnd toEdge"),
          (l && !r || o && !n) && t.emit("fromEdge"),
          t.emit("progress", i)
      },
      updateSlidesClasses: function() {
          const e = this
            , {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e
            , n = e.virtual && s.virtual.enabled;
          let l;
          t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
          l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
          l.addClass(s.slideActiveClass),
          s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
          let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
          s.loop && 0 === o.length && (o = t.eq(0),
          o.addClass(s.slideNextClass));
          let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
          s.loop && 0 === d.length && (d = t.eq(-1),
          d.addClass(s.slidePrevClass)),
          s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses()
      },
      updateActiveIndex: function(e) {
          const t = this
            , s = t.rtlTranslate ? t.translate : -t.translate
            , {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
          let d, c = e;
          if (void 0 === c) {
              for (let e = 0; e < a.length; e += 1)
                  void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
              r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
          }
          if (i.indexOf(s) >= 0)
              d = i.indexOf(s);
          else {
              const e = Math.min(r.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / r.slidesPerGroup)
          }
          if (d >= i.length && (d = i.length - 1),
          c === n)
              return void (d !== o && (t.snapIndex = d,
              t.emit("snapIndexChange")));
          const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
          Object.assign(t, {
              snapIndex: d,
              realIndex: p,
              previousIndex: n,
              activeIndex: c
          }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          l !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
      },
      updateClickedSlide: function(e) {
          const t = this
            , s = t.params
            , a = d(e).closest(`.${s.slideClass}`)[0];
          let i, r = !1;
          if (a)
              for (let e = 0; e < t.slides.length; e += 1)
                  if (t.slides[e] === a) {
                      r = !0,
                      i = e;
                      break
                  }
          if (!a || !r)
              return t.clickedSlide = void 0,
              void (t.clickedIndex = void 0);
          t.clickedSlide = a,
          t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
          s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
      }
  };
  var M = {
      getTranslate: function(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
          if (t.virtualTranslate)
              return s ? -a : a;
          if (t.cssMode)
              return a;
          let r = h(i[0], e);
          return s && (r = -r),
          r || 0
      },
      setTranslate: function(e, t) {
          const s = this
            , {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
          let o, d = 0, c = 0;
          s.isHorizontal() ? d = a ? -e : e : c = e,
          i.roundLengths && (d = Math.floor(d),
          c = Math.floor(c)),
          i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
          s.previousTranslate = s.translate,
          s.translate = s.isHorizontal() ? d : c;
          const p = s.maxTranslate() - s.minTranslate();
          o = 0 === p ? 0 : (e - s.minTranslate()) / p,
          o !== l && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t)
      },
      minTranslate: function() {
          return -this.snapGrid[0]
      },
      maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1]
      },
      translateTo: function(e, t, s, a, i) {
          void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === a && (a = !0);
          const r = this
            , {params: n, wrapperEl: l} = r;
          if (r.animating && n.preventInteractionOnTransition)
              return !1;
          const o = r.minTranslate()
            , d = r.maxTranslate();
          let c;
          if (c = a && e > o ? o : a && e < d ? d : e,
          r.updateProgress(c),
          n.cssMode) {
              const e = r.isHorizontal();
              if (0 === t)
                  l[e ? "scrollLeft" : "scrollTop"] = -c;
              else {
                  if (!r.support.smoothScroll)
                      return w({
                          swiper: r,
                          targetPosition: -c,
                          side: e ? "left" : "top"
                      }),
                      !0;
                  l.scrollTo({
                      [e ? "left" : "top"]: -c,
                      behavior: "smooth"
                  })
              }
              return !0
          }
          return 0 === t ? (r.setTransition(0),
          r.setTranslate(c),
          s && (r.emit("beforeTransitionStart", t, i),
          r.emit("transitionEnd"))) : (r.setTransition(t),
          r.setTranslate(c),
          s && (r.emit("beforeTransitionStart", t, i),
          r.emit("transitionStart")),
          r.animating || (r.animating = !0,
          r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
              r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
              r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
              r.onTranslateToWrapperTransitionEnd = null,
              delete r.onTranslateToWrapperTransitionEnd,
              s && r.emit("transitionEnd"))
          }
          ),
          r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
          r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
          !0
      }
  };
  function P(e) {
      let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
      const {activeIndex: r, previousIndex: n} = t;
      let l = a;
      if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
      t.emit(`transition${i}`),
      s && r !== n) {
          if ("reset" === l)
              return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`),
          "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
      }
  }
  var k = {
      slideTo: function(e, t, s, a, i) {
          if (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
              throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
          if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                  throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
              e = t
          }
          const r = this;
          let n = e;
          n < 0 && (n = 0);
          const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
          if (r.animating && l.preventInteractionOnTransition || !m && !a && !i)
              return !1;
          const f = Math.min(r.params.slidesPerGroupSkip, n);
          let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
          g >= o.length && (g = o.length - 1),
          (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
          const v = -o[g];
          if (r.updateProgress(v),
          l.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                  const t = -Math.floor(100 * v)
                    , s = Math.floor(100 * d[e])
                    , a = Math.floor(100 * d[e + 1]);
                  void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
              }
          if (r.initialized && n !== p) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                  return !1;
              if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n)
                  return !1
          }
          let b;
          if (b = n > p ? "next" : n < p ? "prev" : "reset",
          u && -v === r.translate || !u && v === r.translate)
              return r.updateActiveIndex(n),
              l.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== l.effect && r.setTranslate(v),
              "reset" !== b && (r.transitionStart(s, b),
              r.transitionEnd(s, b)),
              !1;
          if (l.cssMode) {
              const e = r.isHorizontal()
                , s = u ? v : -v;
              if (0 === t) {
                  const t = r.virtual && r.params.virtual.enabled;
                  t && (r.wrapperEl.style.scrollSnapType = "none",
                  r._immediateVirtual = !0),
                  h[e ? "scrollLeft" : "scrollTop"] = s,
                  t && requestAnimationFrame((()=>{
                      r.wrapperEl.style.scrollSnapType = "",
                      r._swiperImmediateVirtual = !1
                  }
                  ))
              } else {
                  if (!r.support.smoothScroll)
                      return w({
                          swiper: r,
                          targetPosition: s,
                          side: e ? "left" : "top"
                      }),
                      !0;
                  h.scrollTo({
                      [e ? "left" : "top"]: s,
                      behavior: "smooth"
                  })
              }
              return !0
          }
          return r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(n),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, a),
          r.transitionStart(s, b),
          0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
          r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
              r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
              r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
              r.onSlideToWrapperTransitionEnd = null,
              delete r.onSlideToWrapperTransitionEnd,
              r.transitionEnd(s, b))
          }
          ),
          r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
          r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)),
          !0
      },
      slideToLoop: function(e, t, s, a) {
          void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
          const i = this;
          let r = e;
          return i.params.loop && (r += i.loopedSlides),
          i.slideTo(r, t, s, a)
      },
      slideNext: function(e, t, s) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
          const a = this
            , {animating: i, enabled: r, params: n} = a;
          if (!r)
              return a;
          let l = n.slidesPerGroup;
          "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
          const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
          if (n.loop) {
              if (i && n.loopPreventsSlide)
                  return !1;
              a.loopFix(),
              a._clientLeft = a.$wrapperEl[0].clientLeft
          }
          return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
      },
      slidePrev: function(e, t, s) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
          const a = this
            , {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
          if (!d)
              return a;
          if (i.loop) {
              if (r && i.loopPreventsSlide)
                  return !1;
              a.loopFix(),
              a._clientLeft = a.$wrapperEl[0].clientLeft
          }
          function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const p = c(o ? a.translate : -a.translate)
            , u = n.map((e=>c(e)));
          let h = n[u.indexOf(p) - 1];
          if (void 0 === h && i.cssMode) {
              let e;
              n.forEach(((t,s)=>{
                  p >= t && (e = s)
              }
              )),
              void 0 !== e && (h = n[e > 0 ? e - 1 : e])
          }
          let m = 0;
          if (void 0 !== h && (m = l.indexOf(h),
          m < 0 && (m = a.activeIndex - 1),
          "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1,
          m = Math.max(m, 0))),
          i.rewind && a.isBeginning) {
              const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
              return a.slideTo(i, e, t, s)
          }
          return a.slideTo(m, e, t, s)
      },
      slideReset: function(e, t, s) {
          return void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
      },
      slideToClosest: function(e, t, s, a) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === a && (a = .5);
          const i = this;
          let r = i.activeIndex;
          const n = Math.min(i.params.slidesPerGroupSkip, r)
            , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
            , o = i.rtlTranslate ? i.translate : -i.translate;
          if (o >= i.snapGrid[l]) {
              const e = i.snapGrid[l];
              o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
          } else {
              const e = i.snapGrid[l - 1];
              o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
          }
          return r = Math.max(r, 0),
          r = Math.min(r, i.slidesGrid.length - 1),
          i.slideTo(r, e, t, s)
      },
      slideToClickedSlide: function() {
          const e = this
            , {params: t, $wrapperEl: s} = e
            , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let i, r = e.clickedIndex;
          if (t.loop) {
              if (e.animating)
                  return;
              i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
              t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
              r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
              p((()=>{
                  e.slideTo(r)
              }
              ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
              r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
              p((()=>{
                  e.slideTo(r)
              }
              ))) : e.slideTo(r)
          } else
              e.slideTo(r)
      }
  };
  var z = {
      loopCreate: function() {
          const e = this
            , t = a()
            , {params: s, $wrapperEl: i} = e
            , r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
          r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let n = r.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
              const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
              if (e !== s.slidesPerGroup) {
                  for (let a = 0; a < e; a += 1) {
                      const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                      r.append(e)
                  }
                  n = r.children(`.${s.slideClass}`)
              }
          }
          "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
          e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
          e.loopedSlides += s.loopAdditionalSlides,
          e.loopedSlides > n.length && (e.loopedSlides = n.length);
          const l = []
            , o = [];
          n.each(((t,s)=>{
              const a = d(t);
              s < e.loopedSlides && o.push(t),
              s < n.length && s >= n.length - e.loopedSlides && l.push(t),
              a.attr("data-swiper-slide-index", s)
          }
          ));
          for (let e = 0; e < o.length; e += 1)
              r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = l.length - 1; e >= 0; e -= 1)
              r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
      },
      loopFix: function() {
          const e = this;
          e.emit("beforeLoopFix");
          const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
          let o;
          e.allowSlidePrev = !0,
          e.allowSlideNext = !0;
          const d = -n[t] - e.getTranslate();
          if (t < a) {
              o = s.length - 3 * a + t,
              o += a;
              e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
          } else if (t >= s.length - a) {
              o = -s.length + t + a,
              o += a;
              e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
          }
          e.allowSlidePrev = i,
          e.allowSlideNext = r,
          e.emit("loopFix")
      },
      loopDestroy: function() {
          const {$wrapperEl: e, params: t, slides: s} = this;
          e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
          s.removeAttr("data-swiper-slide-index")
      }
  };
  function O(e) {
      const t = this
        , s = a()
        , i = r()
        , n = t.touchEventsData
        , {params: l, touches: o, enabled: c} = t;
      if (!c)
          return;
      if (t.animating && l.preventInteractionOnTransition)
          return;
      !t.animating && l.cssMode && l.loop && t.loopFix();
      let p = e;
      p.originalEvent && (p = p.originalEvent);
      let h = d(p.target);
      if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
          return;
      if (n.isTouchEvent = "touchstart" === p.type,
      !n.isTouchEvent && "which"in p && 3 === p.which)
          return;
      if (!n.isTouchEvent && "button"in p && p.button > 0)
          return;
      if (n.isTouched && n.isMoved)
          return;
      !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
      const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
        , f = !(!p.target || !p.target.shadowRoot);
      if (l.noSwiping && (f ? function(e, t) {
          return void 0 === t && (t = this),
          function t(s) {
              return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot),
              s.closest(e) || t(s.getRootNode().host)) : null
          }(t)
      }(m, p.target) : h.closest(m)[0]))
          return void (t.allowClick = !0);
      if (l.swipeHandler && !h.closest(l.swipeHandler)[0])
          return;
      o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX,
      o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
      const g = o.currentX
        , v = o.currentY
        , w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
        , b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
      if (w && (g <= b || g >= i.innerWidth - b)) {
          if ("prevent" !== w)
              return;
          e.preventDefault()
      }
      if (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
      }),
      o.startX = g,
      o.startY = v,
      n.touchStartTime = u(),
      t.allowClick = !0,
      t.updateSize(),
      t.swipeDirection = void 0,
      l.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== p.type) {
          let e = !0;
          h.is(n.focusableElements) && (e = !1,
          "SELECT" === h[0].nodeName && (n.isTouched = !1)),
          s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
          const a = e && t.allowTouchMove && l.touchStartPreventDefault;
          !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
      }
      t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
      t.emit("touchStart", p)
  }
  function L(e) {
      const t = a()
        , s = this
        , i = s.touchEventsData
        , {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
      if (!o)
          return;
      let c = e;
      if (c.originalEvent && (c = c.originalEvent),
      !i.isTouched)
          return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
      if (i.isTouchEvent && "touchmove" !== c.type)
          return;
      const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0])
        , h = "touchmove" === c.type ? p.pageX : c.pageX
        , m = "touchmove" === c.type ? p.pageY : c.pageY;
      if (c.preventedByNestedSwiper)
          return n.startX = h,
          void (n.startY = m);
      if (!s.allowTouchMove)
          return d(c.target).is(i.focusableElements) || (s.allowClick = !1),
          void (i.isTouched && (Object.assign(n, {
              startX: h,
              startY: m,
              currentX: h,
              currentY: m
          }),
          i.touchStartTime = u()));
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (s.isVertical()) {
              if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                  return i.isTouched = !1,
                  void (i.isMoved = !1)
          } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate())
              return;
      if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements))
          return i.isMoved = !0,
          void (s.allowClick = !1);
      if (i.allowTouchCallbacks && s.emit("touchMove", c),
      c.targetTouches && c.targetTouches.length > 1)
          return;
      n.currentX = h,
      n.currentY = m;
      const f = n.currentX - n.startX
        , g = n.currentY - n.startY;
      if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
          return;
      if (void 0 === i.isScrolling) {
          let e;
          s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI,
          i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
      }
      if (i.isScrolling && s.emit("touchMoveOpposite", c),
      void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
      i.isScrolling)
          return void (i.isTouched = !1);
      if (!i.startMoving)
          return;
      s.allowClick = !1,
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
      i.isMoved || (r.loop && !r.cssMode && s.loopFix(),
      i.startTranslate = s.getTranslate(),
      s.setTransition(0),
      s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      i.allowMomentumBounce = !1,
      !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
      s.emit("sliderFirstMove", c)),
      s.emit("sliderMove", c),
      i.isMoved = !0;
      let v = s.isHorizontal() ? f : g;
      n.diff = v,
      v *= r.touchRatio,
      l && (v = -v),
      s.swipeDirection = v > 0 ? "prev" : "next",
      i.currentTranslate = v + i.startTranslate;
      let w = !0
        , b = r.resistanceRatio;
      if (r.touchReleaseOnEdges && (b = 0),
      v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1,
      r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1,
      r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
      w && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
      r.threshold > 0) {
          if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
              return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
              return i.allowThresholdMove = !0,
              n.startX = n.currentX,
              n.startY = n.currentY,
              i.currentTranslate = i.startTranslate,
              void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
      }
      r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
      s.updateSlidesClasses()),
      s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate))
  }
  function I(e) {
      const t = this
        , s = t.touchEventsData
        , {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
      if (!l)
          return;
      let o = e;
      if (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      s.allowTouchCallbacks = !1,
      !s.isTouched)
          return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
          s.isMoved = !1,
          void (s.startMoving = !1);
      a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      const d = u()
        , c = d - s.touchStartTime;
      if (t.allowClick) {
          const e = o.path || o.composedPath && o.composedPath();
          t.updateClickedSlide(e && e[0] || o.target),
          t.emit("tap click", o),
          c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
      }
      if (s.lastClickTime = u(),
      p((()=>{
          t.destroyed || (t.allowClick = !0)
      }
      )),
      !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
          return s.isTouched = !1,
          s.isMoved = !1,
          void (s.startMoving = !1);
      let h;
      if (s.isTouched = !1,
      s.isMoved = !1,
      s.startMoving = !1,
      h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate,
      a.cssMode)
          return;
      if (t.params.freeMode && a.freeMode.enabled)
          return void t.freeMode.onTouchEnd({
              currentPos: h
          });
      let m = 0
        , f = t.slidesSizesGrid[0];
      for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e,
          f = n[e + t] - n[e]) : h >= n[e] && (m = e,
          f = n[n.length - 1] - n[n.length - 2])
      }
      let g = null
        , v = null;
      a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
      const w = (h - n[m]) / f
        , b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      if (c > a.longSwipesMs) {
          if (!a.longSwipes)
              return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)),
          "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
      } else {
          if (!a.shortSwipes)
              return void t.slideTo(t.activeIndex);
          t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
          "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
      }
  }
  function A() {
      const e = this
        , {params: t, el: s} = e;
      if (s && 0 === s.offsetWidth)
          return;
      t.breakpoints && e.setBreakpoint();
      const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
      e.allowSlideNext = !0,
      e.allowSlidePrev = !0,
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      e.allowSlidePrev = i,
      e.allowSlideNext = a,
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
  }
  function D(e) {
      const t = this;
      t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
      e.stopImmediatePropagation())))
  }
  function G() {
      const e = this
        , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
      if (!a)
          return;
      let i;
      e.previousTranslate = e.translate,
      e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1)
  }
  let B = !1;
  function N() {}
  const H = (e,t)=>{
      const s = a()
        , {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e
        , c = !!i.nested
        , p = "on" === t ? "addEventListener" : "removeEventListener"
        , u = t;
      if (d.touch) {
          const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
              passive: !0,
              capture: !1
          };
          n[p](r.start, e.onTouchStart, t),
          n[p](r.move, e.onTouchMove, d.passiveListener ? {
              passive: !1,
              capture: c
          } : c),
          n[p](r.end, e.onTouchEnd, t),
          r.cancel && n[p](r.cancel, e.onTouchEnd, t)
      } else
          n[p](r.start, e.onTouchStart, !1),
          s[p](r.move, e.onTouchMove, c),
          s[p](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0),
      i.cssMode && l[p]("scroll", e.onScroll),
      i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
  }
  ;
  var X = {
      attachEvents: function() {
          const e = this
            , t = a()
            , {params: s, support: i} = e;
          e.onTouchStart = O.bind(e),
          e.onTouchMove = L.bind(e),
          e.onTouchEnd = I.bind(e),
          s.cssMode && (e.onScroll = G.bind(e)),
          e.onClick = D.bind(e),
          i.touch && !B && (t.addEventListener("touchstart", N),
          B = !0),
          H(e, "on")
      },
      detachEvents: function() {
          H(this, "off")
      }
  };
  const Y = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
  var R = {
      addClasses: function() {
          const e = this
            , {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e
            , l = function(e, t) {
              const s = [];
              return e.forEach((e=>{
                  "object" == typeof e ? Object.keys(e).forEach((a=>{
                      e[a] && s.push(t + a)
                  }
                  )) : "string" == typeof e && s.push(t + e)
              }
              )),
              s
          }(["initialized", s.direction, {
              "pointer-events": !n.touch
          }, {
              "free-mode": e.params.freeMode && s.freeMode.enabled
          }, {
              autoheight: s.autoHeight
          }, {
              rtl: a
          }, {
              grid: s.grid && s.grid.rows > 1
          }, {
              "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
          }, {
              android: r.android
          }, {
              ios: r.ios
          }, {
              "css-mode": s.cssMode
          }, {
              centered: s.cssMode && s.centeredSlides
          }, {
              "watch-progress": s.watchSlidesProgress
          }], s.containerModifierClass);
          t.push(...l),
          i.addClass([...t].join(" ")),
          e.emitContainerClasses()
      },
      removeClasses: function() {
          const {$el: e, classNames: t} = this;
          e.removeClass(t.join(" ")),
          this.emitContainerClasses()
      }
  };
  var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
  };
  function j(e, t) {
      return function(s) {
          void 0 === s && (s = {});
          const a = Object.keys(s)[0]
            , i = s[a];
          "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
              auto: !0
          }),
          a in e && "enabled"in i ? (!0 === e[a] && (e[a] = {
              enabled: !0
          }),
          "object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
          e[a] || (e[a] = {
              enabled: !1
          }),
          g(t, s)) : g(t, s)) : g(t, s)
      }
  }
  const _ = {
      eventsEmitter: $,
      update: S,
      translate: M,
      transition: {
          setTransition: function(e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t)
          },
          transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const s = this
                , {params: a} = s;
              a.cssMode || (a.autoHeight && s.updateAutoHeight(),
              P({
                  swiper: s,
                  runCallbacks: e,
                  direction: t,
                  step: "Start"
              }))
          },
          transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const s = this
                , {params: a} = s;
              s.animating = !1,
              a.cssMode || (s.setTransition(0),
              P({
                  swiper: s,
                  runCallbacks: e,
                  direction: t,
                  step: "End"
              }))
          }
      },
      slide: k,
      loop: z,
      grabCursor: {
          setGrabCursor: function(e) {
              const t = this;
              if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                  return;
              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              s.style.cursor = "move",
              s.style.cursor = e ? "grabbing" : "grab"
          },
          unsetGrabCursor: function() {
              const e = this;
              e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
          }
      },
      events: X,
      breakpoints: {
          setBreakpoint: function() {
              const e = this
                , {activeIndex: t, initialized: s, loopedSlides: a=0, params: i, $el: r} = e
                , n = i.breakpoints;
              if (!n || n && 0 === Object.keys(n).length)
                  return;
              const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l)
                  return;
              const o = (l in n ? n[l] : void 0) || e.originalParams
                , d = Y(e, i)
                , c = Y(e, o)
                , p = i.enabled;
              d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`),
              (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses());
              const u = o.direction && o.direction !== i.direction
                , h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
              u && s && e.changeDirection(),
              g(e.params, o);
              const m = e.params.enabled;
              Object.assign(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev
              }),
              p && !m ? e.disable() : !p && m && e.enable(),
              e.currentBreakpoint = l,
              e.emit("_beforeBreakpoint", o),
              h && s && (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - a + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", o)
          },
          getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"),
              !e || "container" === t && !s)
                  return;
              let a = !1;
              const i = r()
                , n = "window" === t ? i.innerHeight : s.clientHeight
                , l = Object.keys(e).map((e=>{
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                      const t = parseFloat(e.substr(1));
                      return {
                          value: n * t,
                          point: e
                      }
                  }
                  return {
                      value: e,
                      point: e
                  }
              }
              ));
              l.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < l.length; e += 1) {
                  const {point: r, value: n} = l[e];
                  "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
              }
              return a || "max"
          }
      },
      checkOverflow: {
          checkOverflow: function() {
              const e = this
                , {isLocked: t, params: s} = e
                , {slidesOffsetBefore: a} = s;
              if (a) {
                  const t = e.slides.length - 1
                    , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                  e.isLocked = e.size > s
              } else
                  e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
          }
      },
      classes: R,
      images: {
          loadImage: function(e, t, s, a, i, n) {
              const l = r();
              let o;
              function c() {
                  n && n()
              }
              d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image,
              o.onload = c,
              o.onerror = c,
              a && (o.sizes = a),
              s && (o.srcset = s),
              t && (o.src = t)) : c()
          },
          preloadImages: function() {
              const e = this;
              function t() {
                  null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")))
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                  const a = e.imagesToLoad[s];
                  e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
              }
          }
      }
  }
    , q = {};
  class V {
      constructor() {
          let e, t;
          for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
              a[i] = arguments[i];
          if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e,t] = a,
          t || (t = {}),
          t = g({}, t),
          e && !t.el && (t.el = e),
          t.el && d(t.el).length > 1) {
              const e = [];
              return d(t.el).each((s=>{
                  const a = g({}, t, {
                      el: s
                  });
                  e.push(new V(a))
              }
              )),
              e
          }
          const r = this;
          r.__swiper__ = !0,
          r.support = E(),
          r.device = T({
              userAgent: t.userAgent
          }),
          r.browser = C(),
          r.eventsListeners = {},
          r.eventsAnyListeners = [],
          r.modules = [...r.__modules__],
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
          const n = {};
          r.modules.forEach((e=>{
              e({
                  swiper: r,
                  extendParams: j(t, n),
                  on: r.on.bind(r),
                  once: r.once.bind(r),
                  off: r.off.bind(r),
                  emit: r.emit.bind(r)
              })
          }
          ));
          const l = g({}, W, n);
          return r.params = g({}, l, q, t),
          r.originalParams = g({}, r.params),
          r.passedParams = g({}, t),
          r.params && r.params.on && Object.keys(r.params.on).forEach((e=>{
              r.on(e, r.params.on[e])
          }
          )),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          r.$ = d,
          Object.assign(r, {
              enabled: r.params.enabled,
              el: e,
              classNames: [],
              slides: d(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: ()=>"horizontal" === r.params.direction,
              isVertical: ()=>"vertical" === r.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents: function() {
                  const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                    , t = ["pointerdown", "pointermove", "pointerup"];
                  return r.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3]
                  },
                  r.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2]
                  },
                  r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
              }(),
              touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: r.params.focusableElements,
                  lastClickTime: u(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
      }
      enable() {
          const e = this;
          e.enabled || (e.enabled = !0,
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"))
      }
      disable() {
          const e = this;
          e.enabled && (e.enabled = !1,
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"))
      }
      setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const a = s.minTranslate()
            , i = (s.maxTranslate() - a) * e + a;
          s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses()
      }
      emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el)
              return;
          const t = e.el.className.split(" ").filter((t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
      }
      getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
      }
      emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el)
              return;
          const t = [];
          e.slides.each((s=>{
              const a = e.getSlideClasses(s);
              t.push({
                  slideEl: s,
                  classNames: a
              }),
              e.emit("_slideClass", s, a)
          }
          )),
          e.emit("_slideClasses", t)
      }
      slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"),
          void 0 === t && (t = !1);
          const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
          let o = 1;
          if (s.centeredSlides) {
              let e, t = a[l].swiperSlideSize;
              for (let s = l + 1; s < a.length; s += 1)
                  a[s] && !e && (t += a[s].swiperSlideSize,
                  o += 1,
                  t > n && (e = !0));
              for (let s = l - 1; s >= 0; s -= 1)
                  a[s] && !e && (t += a[s].swiperSlideSize,
                  o += 1,
                  t > n && (e = !0))
          } else if ("current" === e)
              for (let e = l + 1; e < a.length; e += 1) {
                  (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
              }
          else
              for (let e = l - 1; e >= 0; e -= 1) {
                  i[l] - i[e] < n && (o += 1)
              }
          return o
      }
      update() {
          const e = this;
          if (!e || e.destroyed)
              return;
          const {snapGrid: t, params: s} = e;
          function a() {
              const t = e.rtlTranslate ? -1 * e.translate : e.translate
                , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(s),
              e.updateActiveIndex(),
              e.updateSlidesClasses()
          }
          let i;
          s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled ? (a(),
          e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
          i || a()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update")
      }
      changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this
            , a = s.params.direction;
          return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
          e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          s.params.direction = e,
          s.slides.each((t=>{
              "vertical" === e ? t.style.width = "" : t.style.height = ""
          }
          )),
          s.emit("changeDirection"),
          t && s.update()),
          s
      }
      mount(e) {
          const t = this;
          if (t.mounted)
              return !0;
          const s = d(e || t.params.el);
          if (!(e = s[0]))
              return !1;
          e.swiper = t;
          const i = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (()=>{
              if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                  const t = d(e.shadowRoot.querySelector(i()));
                  return t.children = e=>s.children(e),
                  t
              }
              return s.children(i())
          }
          )();
          if (0 === r.length && t.params.createElements) {
              const e = a().createElement("div");
              r = d(e),
              e.className = t.params.wrapperClass,
              s.append(e),
              s.children(`.${t.params.slideClass}`).each((e=>{
                  r.append(e)
              }
              ))
          }
          return Object.assign(t, {
              $el: s,
              el: e,
              $wrapperEl: r,
              wrapperEl: r[0],
              mounted: !0,
              rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
              rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
              wrongRTL: "-webkit-box" === r.css("display")
          }),
          !0
      }
      init(e) {
          const t = this;
          if (t.initialized)
              return t;
          return !1 === t.mount(e) || (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
          t.attachEvents(),
          t.initialized = !0,
          t.emit("init"),
          t.emit("afterInit")),
          t
      }
      destroy(e, t) {
          void 0 === e && (e = !0),
          void 0 === t && (t = !0);
          const s = this
            , {params: a, $el: i, $wrapperEl: r, slides: n} = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
          s.initialized = !1,
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t && (s.removeClasses(),
          i.removeAttr("style"),
          r.removeAttr("style"),
          n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e=>{
              s.off(e)
          }
          )),
          !1 !== e && (s.$el[0].swiper = null,
          function(e) {
              const t = e;
              Object.keys(t).forEach((e=>{
                  try {
                      t[e] = null
                  } catch (e) {}
                  try {
                      delete t[e]
                  } catch (e) {}
              }
              ))
          }(s)),
          s.destroyed = !0),
          null
      }
      static extendDefaults(e) {
          g(q, e)
      }
      static get extendedDefaults() {
          return q
      }
      static get defaults() {
          return W
      }
      static installModule(e) {
          V.prototype.__modules__ || (V.prototype.__modules__ = []);
          const t = V.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
      }
      static use(e) {
          return Array.isArray(e) ? (e.forEach((e=>V.installModule(e))),
          V) : (V.installModule(e),
          V)
      }
  }
  function F(e, t, s, i) {
      const r = a();
      return e.params.createElements && Object.keys(i).forEach((a=>{
          if (!s[a] && !0 === s.auto) {
              let n = e.$el.children(`.${i[a]}`)[0];
              n || (n = r.createElement("div"),
              n.className = i[a],
              e.$el.append(n)),
              s[a] = n,
              t[a] = n
          }
      }
      )),
      s
  }
  function U(e) {
      return void 0 === e && (e = ""),
      `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
  }
  function K(e) {
      const t = this
        , {$wrapperEl: s, params: a} = t;
      if (a.loop && t.loopDestroy(),
      "object" == typeof e && "length"in e)
          for (let t = 0; t < e.length; t += 1)
              e[t] && s.append(e[t]);
      else
          s.append(e);
      a.loop && t.loopCreate(),
      a.observer || t.update()
  }
  function Z(e) {
      const t = this
        , {params: s, $wrapperEl: a, activeIndex: i} = t;
      s.loop && t.loopDestroy();
      let r = i + 1;
      if ("object" == typeof e && "length"in e) {
          for (let t = 0; t < e.length; t += 1)
              e[t] && a.prepend(e[t]);
          r = i + e.length
      } else
          a.prepend(e);
      s.loop && t.loopCreate(),
      s.observer || t.update(),
      t.slideTo(r, 0, !1)
  }
  function J(e, t) {
      const s = this
        , {$wrapperEl: a, params: i, activeIndex: r} = s;
      let n = r;
      i.loop && (n -= s.loopedSlides,
      s.loopDestroy(),
      s.slides = a.children(`.${i.slideClass}`));
      const l = s.slides.length;
      if (e <= 0)
          return void s.prependSlide(t);
      if (e >= l)
          return void s.appendSlide(t);
      let o = n > e ? n + 1 : n;
      const d = [];
      for (let t = l - 1; t >= e; t -= 1) {
          const e = s.slides.eq(t);
          e.remove(),
          d.unshift(e)
      }
      if ("object" == typeof t && "length"in t) {
          for (let e = 0; e < t.length; e += 1)
              t[e] && a.append(t[e]);
          o = n > e ? n + t.length : n
      } else
          a.append(t);
      for (let e = 0; e < d.length; e += 1)
          a.append(d[e]);
      i.loop && s.loopCreate(),
      i.observer || s.update(),
      i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
  }
  function Q(e) {
      const t = this
        , {params: s, $wrapperEl: a, activeIndex: i} = t;
      let r = i;
      s.loop && (r -= t.loopedSlides,
      t.loopDestroy(),
      t.slides = a.children(`.${s.slideClass}`));
      let n, l = r;
      if ("object" == typeof e && "length"in e) {
          for (let s = 0; s < e.length; s += 1)
              n = e[s],
              t.slides[n] && t.slides.eq(n).remove(),
              n < l && (l -= 1);
          l = Math.max(l, 0)
      } else
          n = e,
          t.slides[n] && t.slides.eq(n).remove(),
          n < l && (l -= 1),
          l = Math.max(l, 0);
      s.loop && t.loopCreate(),
      s.observer || t.update(),
      s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
  }
  function ee() {
      const e = this
        , t = [];
      for (let s = 0; s < e.slides.length; s += 1)
          t.push(s);
      e.removeSlide(t)
  }
  function te(e) {
      const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d} = e;
      let c;
      a("beforeInit", (()=>{
          if (s.params.effect !== t)
              return;
          s.classNames.push(`${s.params.containerModifierClass}${t}`),
          l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
          const e = n ? n() : {};
          Object.assign(s.params, e),
          Object.assign(s.originalParams, e)
      }
      )),
      a("setTranslate", (()=>{
          s.params.effect === t && i()
      }
      )),
      a("setTransition", ((e,a)=>{
          s.params.effect === t && r(a)
      }
      )),
      a("transitionEnd", (()=>{
          if (s.params.effect === t && o) {
              if (!d || !d().slideShadows)
                  return;
              s.slides.each((e=>{
                  s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
              }
              )),
              o()
          }
      }
      )),
      a("virtualUpdate", (()=>{
          s.params.effect === t && (s.slides.length || (c = !0),
          requestAnimationFrame((()=>{
              c && s.slides && s.slides.length && (i(),
              c = !1)
          }
          )))
      }
      ))
  }
  function se(e, t) {
      return e.transformEl ? t.find(e.transformEl).css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden"
      }) : t
  }
  function ae(e) {
      let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
      const {slides: r, activeIndex: n, $wrapperEl: l} = t;
      if (t.params.virtualTranslate && 0 !== s) {
          let e, s = !1;
          e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n),
          e.transitionEnd((()=>{
              if (s)
                  return;
              if (!t || t.destroyed)
                  return;
              s = !0,
              t.animating = !1;
              const e = ["webkitTransitionEnd", "transitionend"];
              for (let t = 0; t < e.length; t += 1)
                  l.trigger(e[t])
          }
          ))
      }
  }
  function ie(e, t, s) {
      const a = "swiper-slide-shadow" + (s ? `-${s}` : "")
        , i = e.transformEl ? t.find(e.transformEl) : t;
      let r = i.children(`.${a}`);
      return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`),
      i.append(r)),
      r
  }
  Object.keys(_).forEach((e=>{
      Object.keys(_[e]).forEach((t=>{
          V.prototype[t] = _[e][t]
      }
      ))
  }
  )),
  V.use([function(e) {
      let {swiper: t, on: s, emit: a} = e;
      const i = r();
      let n = null
        , l = null;
      const o = ()=>{
          t && !t.destroyed && t.initialized && (a("beforeResize"),
          a("resize"))
      }
        , d = ()=>{
          t && !t.destroyed && t.initialized && a("orientationchange")
      }
      ;
      s("init", (()=>{
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e=>{
              l = i.requestAnimationFrame((()=>{
                  const {width: s, height: a} = t;
                  let i = s
                    , r = a;
                  e.forEach((e=>{
                      let {contentBoxSize: s, contentRect: a, target: n} = e;
                      n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize,
                      r = a ? a.height : (s[0] || s).blockSize)
                  }
                  )),
                  i === s && r === a || o()
              }
              ))
          }
          )),
          n.observe(t.el)) : (i.addEventListener("resize", o),
          i.addEventListener("orientationchange", d))
      }
      )),
      s("destroy", (()=>{
          l && i.cancelAnimationFrame(l),
          n && n.unobserve && t.el && (n.unobserve(t.el),
          n = null),
          i.removeEventListener("resize", o),
          i.removeEventListener("orientationchange", d)
      }
      ))
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a, emit: i} = e;
      const n = []
        , l = r()
        , o = function(e, t) {
          void 0 === t && (t = {});
          const s = new (l.MutationObserver || l.WebkitMutationObserver)((e=>{
              if (1 === e.length)
                  return void i("observerUpdate", e[0]);
              const t = function() {
                  i("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
          }
          ));
          s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
          }),
          n.push(s)
      };
      s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
      }),
      a("init", (()=>{
          if (t.params.observer) {
              if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1)
                      o(e[t])
              }
              o(t.$el[0], {
                  childList: t.params.observeSlideChildren
              }),
              o(t.$wrapperEl[0], {
                  attributes: !1
              })
          }
      }
      )),
      a("destroy", (()=>{
          n.forEach((e=>{
              e.disconnect()
          }
          )),
          n.splice(0, n.length)
      }
      ))
  }
  ]);
  const re = [function(e) {
      let t, {swiper: s, extendParams: a, on: i, emit: r} = e;
      function n(e, t) {
          const a = s.params.virtual;
          if (a.cache && s.virtual.cache[t])
              return s.virtual.cache[t];
          const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
          return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t),
          a.cache && (s.virtual.cache[t] = i),
          i
      }
      function l(e) {
          const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params
            , {addSlidesBefore: l, addSlidesAfter: o} = s.params.virtual
            , {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
          s.params.cssMode || s.updateActiveIndex();
          const m = s.activeIndex || 0;
          let f, g, v;
          f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top",
          i ? (g = Math.floor(t / 2) + a + o,
          v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o,
          v = a + l);
          const w = Math.max((m || 0) - v, 0)
            , b = Math.min((m || 0) + g, p.length - 1)
            , x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
          function y() {
              s.updateSlides(),
              s.updateProgress(),
              s.updateSlidesClasses(),
              s.lazy && s.params.lazy.enabled && s.lazy.load(),
              r("virtualUpdate")
          }
          if (Object.assign(s.virtual, {
              from: w,
              to: b,
              offset: x,
              slidesGrid: s.slidesGrid
          }),
          d === w && c === b && !e)
              return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
              s.updateProgress(),
              void r("virtualUpdate");
          if (s.params.virtual.renderExternal)
              return s.params.virtual.renderExternal.call(s, {
                  offset: x,
                  from: w,
                  to: b,
                  slides: function() {
                      const e = [];
                      for (let t = w; t <= b; t += 1)
                          e.push(p[t]);
                      return e
                  }()
              }),
              void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
          const E = []
            , T = [];
          if (e)
              s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
          else
              for (let e = d; e <= c; e += 1)
                  (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
          for (let t = 0; t < p.length; t += 1)
              t >= w && t <= b && (void 0 === c || e ? T.push(t) : (t > c && T.push(t),
              t < d && E.push(t)));
          T.forEach((e=>{
              s.$wrapperEl.append(n(p[e], e))
          }
          )),
          E.sort(((e,t)=>t - e)).forEach((e=>{
              s.$wrapperEl.prepend(n(p[e], e))
          }
          )),
          s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
          y()
      }
      a({
          virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0
          }
      }),
      s.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: []
      },
      i("beforeInit", (()=>{
          s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides,
          s.classNames.push(`${s.params.containerModifierClass}virtual`),
          s.params.watchSlidesProgress = !0,
          s.originalParams.watchSlidesProgress = !0,
          s.params.initialSlide || l())
      }
      )),
      i("setTranslate", (()=>{
          s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t),
          t = setTimeout((()=>{
              l()
          }
          ), 100)) : l())
      }
      )),
      i("init update resize", (()=>{
          s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
      }
      )),
      Object.assign(s.virtual, {
          appendSlide: function(e) {
              if ("object" == typeof e && "length"in e)
                  for (let t = 0; t < e.length; t += 1)
                      e[t] && s.virtual.slides.push(e[t]);
              else
                  s.virtual.slides.push(e);
              l(!0)
          },
          prependSlide: function(e) {
              const t = s.activeIndex;
              let a = t + 1
                , i = 1;
              if (Array.isArray(e)) {
                  for (let t = 0; t < e.length; t += 1)
                      e[t] && s.virtual.slides.unshift(e[t]);
                  a = t + e.length,
                  i = e.length
              } else
                  s.virtual.slides.unshift(e);
              if (s.params.virtual.cache) {
                  const e = s.virtual.cache
                    , t = {};
                  Object.keys(e).forEach((s=>{
                      const a = e[s]
                        , r = a.attr("data-swiper-slide-index");
                      r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                      t[parseInt(s, 10) + i] = a
                  }
                  )),
                  s.virtual.cache = t
              }
              l(!0),
              s.slideTo(a, 0)
          },
          removeSlide: function(e) {
              if (null == e)
                  return;
              let t = s.activeIndex;
              if (Array.isArray(e))
                  for (let a = e.length - 1; a >= 0; a -= 1)
                      s.virtual.slides.splice(e[a], 1),
                      s.params.virtual.cache && delete s.virtual.cache[e[a]],
                      e[a] < t && (t -= 1),
                      t = Math.max(t, 0);
              else
                  s.virtual.slides.splice(e, 1),
                  s.params.virtual.cache && delete s.virtual.cache[e],
                  e < t && (t -= 1),
                  t = Math.max(t, 0);
              l(!0),
              s.slideTo(t, 0)
          },
          removeAllSlides: function() {
              s.virtual.slides = [],
              s.params.virtual.cache && (s.virtual.cache = {}),
              l(!0),
              s.slideTo(0, 0)
          },
          update: l
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: i, emit: n} = e;
      const l = a()
        , o = r();
      function c(e) {
          if (!t.enabled)
              return;
          const {rtlTranslate: s} = t;
          let a = e;
          a.originalEvent && (a = a.originalEvent);
          const i = a.keyCode || a.charCode
            , r = t.params.keyboard.pageUpDown
            , d = r && 33 === i
            , c = r && 34 === i
            , p = 37 === i
            , u = 39 === i
            , h = 38 === i
            , m = 40 === i;
          if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c))
              return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d))
              return !1;
          if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
              if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                  let e = !1;
                  if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                      return;
                  const a = t.$el
                    , i = a[0].clientWidth
                    , r = a[0].clientHeight
                    , n = o.innerWidth
                    , l = o.innerHeight
                    , d = t.$el.offset();
                  s && (d.left -= t.$el[0].scrollLeft);
                  const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                  for (let t = 0; t < c.length; t += 1) {
                      const s = c[t];
                      if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                          if (0 === s[0] && 0 === s[1])
                              continue;
                          e = !0
                      }
                  }
                  if (!e)
                      return
              }
              t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
              ((c || u) && !s || (d || p) && s) && t.slideNext(),
              ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
              (c || m) && t.slideNext(),
              (d || h) && t.slidePrev()),
              n("keyPress", i)
          }
      }
      function p() {
          t.keyboard.enabled || (d(l).on("keydown", c),
          t.keyboard.enabled = !0)
      }
      function u() {
          t.keyboard.enabled && (d(l).off("keydown", c),
          t.keyboard.enabled = !1)
      }
      t.keyboard = {
          enabled: !1
      },
      s({
          keyboard: {
              enabled: !1,
              onlyInViewport: !0,
              pageUpDown: !0
          }
      }),
      i("init", (()=>{
          t.params.keyboard.enabled && p()
      }
      )),
      i("destroy", (()=>{
          t.keyboard.enabled && u()
      }
      )),
      Object.assign(t.keyboard, {
          enable: p,
          disable: u
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a, emit: i} = e;
      const n = r();
      let l;
      s({
          mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null
          }
      }),
      t.mousewheel = {
          enabled: !1
      };
      let o, c = u();
      const h = [];
      function m() {
          t.enabled && (t.mouseEntered = !0)
      }
      function f() {
          t.enabled && (t.mouseEntered = !1)
      }
      function g(e) {
          return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
          i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
          i("scroll", e.raw)),
          c = (new n.Date).getTime(),
          !1)))
      }
      function v(e) {
          let s = e
            , a = !0;
          if (!t.enabled)
              return;
          const r = t.params.mousewheel;
          t.params.cssMode && s.preventDefault();
          let n = t.$el;
          if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)),
          !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
              return !0;
          s.originalEvent && (s = s.originalEvent);
          let c = 0;
          const m = t.rtlTranslate ? -1 : 1
            , f = function(e) {
              let t = 0
                , s = 0
                , a = 0
                , i = 0;
              return "detail"in e && (s = e.detail),
              "wheelDelta"in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
              "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
              s = 0),
              a = 10 * t,
              i = 10 * s,
              "deltaY"in e && (i = e.deltaY),
              "deltaX"in e && (a = e.deltaX),
              e.shiftKey && !a && (a = i,
              i = 0),
              (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
              i *= 40) : (a *= 800,
              i *= 800)),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              {
                  spinX: t,
                  spinY: s,
                  pixelX: a,
                  pixelY: i
              }
          }(s);
          if (r.forceToAxis)
              if (t.isHorizontal()) {
                  if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY)))
                      return !0;
                  c = -f.pixelX * m
              } else {
                  if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX)))
                      return !0;
                  c = -f.pixelY
              }
          else
              c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
          if (0 === c)
              return !0;
          r.invert && (c = -c);
          let v = t.getTranslate() + c * r.sensitivity;
          if (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled) {
              const e = {
                  time: u(),
                  delta: Math.abs(c),
                  direction: Math.sign(c)
              }
                , a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
              if (!a) {
                  o = void 0,
                  t.params.loop && t.loopFix();
                  let n = t.getTranslate() + c * r.sensitivity;
                  const d = t.isBeginning
                    , u = t.isEnd;
                  if (n >= t.minTranslate() && (n = t.minTranslate()),
                  n <= t.maxTranslate() && (n = t.maxTranslate()),
                  t.setTransition(0),
                  t.setTranslate(n),
                  t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses(),
                  (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(),
                  t.params.freeMode.sticky) {
                      clearTimeout(l),
                      l = void 0,
                      h.length >= 15 && h.shift();
                      const s = h.length ? h[h.length - 1] : void 0
                        , a = h[0];
                      if (h.push(e),
                      s && (e.delta > s.delta || e.direction !== s.direction))
                          h.splice(0);
                      else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                          const s = c > 0 ? .8 : .2;
                          o = e,
                          h.splice(0),
                          l = p((()=>{
                              t.slideToClosest(t.params.speed, !0, void 0, s)
                          }
                          ), 0)
                      }
                      l || (l = p((()=>{
                          o = e,
                          h.splice(0),
                          t.slideToClosest(t.params.speed, !0, void 0, .5)
                      }
                      ), 500))
                  }
                  if (a || i("scroll", s),
                  t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                  n === t.minTranslate() || n === t.maxTranslate())
                      return !0
              }
          } else {
              const s = {
                  time: u(),
                  delta: Math.abs(c),
                  direction: Math.sign(c),
                  raw: e
              };
              h.length >= 2 && h.shift();
              const a = h.length ? h[h.length - 1] : void 0;
              if (h.push(s),
              a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s),
              function(e) {
                  const s = t.params.mousewheel;
                  if (e.direction < 0) {
                      if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                          return !0
                  } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                      return !0;
                  return !1
              }(s))
                  return !0
          }
          return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
          !1
      }
      function w(e) {
          let s = t.$el;
          "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", f),
          s[e]("wheel", v)
      }
      function b() {
          return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v),
          !0) : !t.mousewheel.enabled && (w("on"),
          t.mousewheel.enabled = !0,
          !0)
      }
      function x() {
          return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v),
          !0) : !!t.mousewheel.enabled && (w("off"),
          t.mousewheel.enabled = !1,
          !0)
      }
      a("init", (()=>{
          !t.params.mousewheel.enabled && t.params.cssMode && x(),
          t.params.mousewheel.enabled && b()
      }
      )),
      a("destroy", (()=>{
          t.params.cssMode && b(),
          t.mousewheel.enabled && x()
      }
      )),
      Object.assign(t.mousewheel, {
          enable: b,
          disable: x
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a, emit: i} = e;
      function r(e) {
          let s;
          return e && (s = d(e),
          t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))),
          s
      }
      function n(e, s) {
          const a = t.params.navigation;
          e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
      }
      function l() {
          if (t.params.loop)
              return;
          const {$nextEl: e, $prevEl: s} = t.navigation;
          n(s, t.isBeginning && !t.params.rewind),
          n(e, t.isEnd && !t.params.rewind)
      }
      function o(e) {
          e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev()
      }
      function c(e) {
          e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext()
      }
      function p() {
          const e = t.params.navigation;
          if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
          }),
          !e.nextEl && !e.prevEl)
              return;
          const s = r(e.nextEl)
            , a = r(e.prevEl);
          s && s.length > 0 && s.on("click", c),
          a && a.length > 0 && a.on("click", o),
          Object.assign(t.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: a,
              prevEl: a && a[0]
          }),
          t.enabled || (s && s.addClass(e.lockClass),
          a && a.addClass(e.lockClass))
      }
      function u() {
          const {$nextEl: e, $prevEl: s} = t.navigation;
          e && e.length && (e.off("click", c),
          e.removeClass(t.params.navigation.disabledClass)),
          s && s.length && (s.off("click", o),
          s.removeClass(t.params.navigation.disabledClass))
      }
      s({
          navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock"
          }
      }),
      t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null
      },
      a("init", (()=>{
          p(),
          l()
      }
      )),
      a("toEdge fromEdge lock unlock", (()=>{
          l()
      }
      )),
      a("destroy", (()=>{
          u()
      }
      )),
      a("enable disable", (()=>{
          const {$nextEl: e, $prevEl: s} = t.navigation;
          e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
          s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
      }
      )),
      a("click", ((e,s)=>{
          const {$nextEl: a, $prevEl: r} = t.navigation
            , n = s.target;
          if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
              if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n)))
                  return;
              let e;
              a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              a && a.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass)
          }
      }
      )),
      Object.assign(t.navigation, {
          update: l,
          init: p,
          destroy: u
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a, emit: i} = e;
      const r = "swiper-pagination";
      let n;
      s({
          pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: e=>e,
              formatFractionTotal: e=>e,
              bulletClass: `${r}-bullet`,
              bulletActiveClass: `${r}-bullet-active`,
              modifierClass: `${r}-`,
              currentClass: `${r}-current`,
              totalClass: `${r}-total`,
              hiddenClass: `${r}-hidden`,
              progressbarFillClass: `${r}-progressbar-fill`,
              progressbarOppositeClass: `${r}-progressbar-opposite`,
              clickableClass: `${r}-clickable`,
              lockClass: `${r}-lock`,
              horizontalClass: `${r}-horizontal`,
              verticalClass: `${r}-vertical`
          }
      }),
      t.pagination = {
          el: null,
          $el: null,
          bullets: []
      };
      let l = 0;
      function o() {
          return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
      }
      function c(e, s) {
          const {bulletActiveClass: a} = t.params.pagination;
          e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
      }
      function p() {
          const e = t.rtl
            , s = t.params.pagination;
          if (o())
              return;
          const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
            , r = t.pagination.$el;
          let p;
          const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup),
          p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
          p > u - 1 && (p -= u),
          p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
          "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
              const a = t.pagination.bullets;
              let i, o, u;
              if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
              r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"),
              s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0),
              l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)),
              i = Math.max(p - l, 0),
              o = i + (Math.min(a.length, s.dynamicMainBullets) - 1),
              u = (o + i) / 2),
              a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),
              r.length > 1)
                  a.each((e=>{
                      const t = d(e)
                        , a = t.index();
                      a === p && t.addClass(s.bulletActiveClass),
                      s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`),
                      a === i && c(t, "prev"),
                      a === o && c(t, "next"))
                  }
                  ));
              else {
                  const e = a.eq(p)
                    , r = e.index();
                  if (e.addClass(s.bulletActiveClass),
                  s.dynamicBullets) {
                      const e = a.eq(i)
                        , n = a.eq(o);
                      for (let e = i; e <= o; e += 1)
                          a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                      if (t.params.loop)
                          if (r >= a.length) {
                              for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                  a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                              a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                          } else
                              c(e, "prev"),
                              c(n, "next");
                      else
                          c(e, "prev"),
                          c(n, "next")
                  }
              }
              if (s.dynamicBullets) {
                  const i = Math.min(a.length, s.dynamicMainBullets + 4)
                    , r = (n * i - n) / 2 - u * n
                    , l = e ? "right" : "left";
                  a.css(t.isHorizontal() ? l : "top", `${r}px`)
              }
          }
          if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
          r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type) {
              let e;
              e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const a = (p + 1) / u;
              let i = 1
                , n = 1;
              "horizontal" === e ? i = a : n = a,
              r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
          }
          "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)),
          i("paginationRender", r[0])) : i("paginationUpdate", r[0]),
          t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
      }
      function u() {
          const e = t.params.pagination;
          if (o())
              return;
          const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
            , a = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
              let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
              t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
              for (let s = 0; s < i; s += 1)
                  e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
              a.html(r),
              t.pagination.bullets = a.find(U(e.bulletClass))
          }
          "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,
          a.html(r)),
          "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`,
          a.html(r)),
          "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
      }
      function h() {
          t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
              el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el)
              return;
          let s = d(e.el);
          0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el),
          s.length > 1 && (s = s.filter((e=>d(e).parents(".swiper")[0] === t.el)))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
          l = 0,
          e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass),
          e.clickable && s.on("click", U(e.bulletClass), (function(e) {
              e.preventDefault();
              let s = d(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides),
              t.slideTo(s)
          }
          )),
          Object.assign(t.pagination, {
              $el: s,
              el: s[0]
          }),
          t.enabled || s.addClass(e.lockClass))
      }
      function m() {
          const e = t.params.pagination;
          if (o())
              return;
          const s = t.pagination.$el;
          s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", U(e.bulletClass))
      }
      a("init", (()=>{
          h(),
          u(),
          p()
      }
      )),
      a("activeIndexChange", (()=>{
          (t.params.loop || void 0 === t.snapIndex) && p()
      }
      )),
      a("snapIndexChange", (()=>{
          t.params.loop || p()
      }
      )),
      a("slidesLengthChange", (()=>{
          t.params.loop && (u(),
          p())
      }
      )),
      a("snapGridLengthChange", (()=>{
          t.params.loop || (u(),
          p())
      }
      )),
      a("destroy", (()=>{
          m()
      }
      )),
      a("enable disable", (()=>{
          const {$el: e} = t.pagination;
          e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
      }
      )),
      a("lock unlock", (()=>{
          p()
      }
      )),
      a("click", ((e,s)=>{
          const a = s.target
            , {$el: r} = t.pagination;
          if (t.params.pagination.el && t.params.pagination.hideOnClick && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
              if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl))
                  return;
              const e = r.hasClass(t.params.pagination.hiddenClass);
              i(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass)
          }
      }
      )),
      Object.assign(t.pagination, {
          render: u,
          update: p,
          init: h,
          destroy: m
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: i, emit: r} = e;
      const n = a();
      let l, o, c, u, h = !1, m = null, f = null;
      function g() {
          if (!t.params.scrollbar.el || !t.scrollbar.el)
              return;
          const {scrollbar: e, rtlTranslate: s, progress: a} = t
            , {$dragEl: i, $el: r} = e
            , n = t.params.scrollbar;
          let l = o
            , d = (c - o) * a;
          s ? (d = -d,
          d > 0 ? (l = o - d,
          d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d,
          d = 0) : d + o > c && (l = c - d),
          t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`),
          i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`),
          i[0].style.height = `${l}px`),
          n.hide && (clearTimeout(m),
          r[0].style.opacity = 1,
          m = setTimeout((()=>{
              r[0].style.opacity = 0,
              r.transition(400)
          }
          ), 1e3))
      }
      function v() {
          if (!t.params.scrollbar.el || !t.scrollbar.el)
              return;
          const {scrollbar: e} = t
            , {$dragEl: s, $el: a} = e;
          s[0].style.width = "",
          s[0].style.height = "",
          c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
          u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
          o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10),
          t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`,
          a[0].style.display = u >= 1 ? "none" : "",
          t.params.scrollbar.hide && (a[0].style.opacity = 0),
          t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
      }
      function w(e) {
          return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
      }
      function b(e) {
          const {scrollbar: s, rtlTranslate: a} = t
            , {$el: i} = s;
          let r;
          r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o),
          r = Math.max(Math.min(r, 1), 0),
          a && (r = 1 - r);
          const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
          t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses()
      }
      function x(e) {
          const s = t.params.scrollbar
            , {scrollbar: a, $wrapperEl: i} = t
            , {$el: n, $dragEl: o} = a;
          h = !0,
          l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
          e.preventDefault(),
          e.stopPropagation(),
          i.transition(100),
          o.transition(100),
          b(e),
          clearTimeout(f),
          n.transition(0),
          s.hide && n.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          r("scrollbarDragStart", e)
      }
      function y(e) {
          const {scrollbar: s, $wrapperEl: a} = t
            , {$el: i, $dragEl: n} = s;
          h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
          b(e),
          a.transition(0),
          i.transition(0),
          n.transition(0),
          r("scrollbarDragMove", e))
      }
      function E(e) {
          const s = t.params.scrollbar
            , {scrollbar: a, $wrapperEl: i} = t
            , {$el: n} = a;
          h && (h = !1,
          t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
          i.transition("")),
          s.hide && (clearTimeout(f),
          f = p((()=>{
              n.css("opacity", 0),
              n.transition(400)
          }
          ), 1e3)),
          r("scrollbarDragEnd", e),
          s.snapOnRelease && t.slideToClosest())
      }
      function T(e) {
          const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t
            , o = s.$el[0]
            , d = !(!l.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1
          }
            , c = !(!l.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1
          };
          if (!o)
              return;
          const p = "on" === e ? "addEventListener" : "removeEventListener";
          l.touch ? (o[p](a.start, x, d),
          o[p](a.move, y, d),
          o[p](a.end, E, c)) : (o[p](i.start, x, d),
          n[p](i.move, y, d),
          n[p](i.end, E, c))
      }
      function C() {
          const {scrollbar: e, $el: s} = t;
          t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
              el: "swiper-scrollbar"
          });
          const a = t.params.scrollbar;
          if (!a.el)
              return;
          let i = d(a.el);
          t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
          let r = i.find(`.${t.params.scrollbar.dragClass}`);
          0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`),
          i.append(r)),
          Object.assign(e, {
              $el: i,
              el: i[0],
              $dragEl: r,
              dragEl: r[0]
          }),
          a.draggable && t.params.scrollbar.el && T("on"),
          i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
      }
      function $() {
          t.params.scrollbar.el && T("off")
      }
      s({
          scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag"
          }
      }),
      t.scrollbar = {
          el: null,
          dragEl: null,
          $el: null,
          $dragEl: null
      },
      i("init", (()=>{
          C(),
          v(),
          g()
      }
      )),
      i("update resize observerUpdate lock unlock", (()=>{
          v()
      }
      )),
      i("setTranslate", (()=>{
          g()
      }
      )),
      i("setTransition", ((e,s)=>{
          !function(e) {
              t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
          }(s)
      }
      )),
      i("enable disable", (()=>{
          const {$el: e} = t.scrollbar;
          e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
      }
      )),
      i("destroy", (()=>{
          $()
      }
      )),
      Object.assign(t.scrollbar, {
          updateSize: v,
          setTranslate: g,
          init: C,
          destroy: $
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          parallax: {
              enabled: !1
          }
      });
      const i = (e,s)=>{
          const {rtl: a} = t
            , i = d(e)
            , r = a ? -1 : 1
            , n = i.attr("data-swiper-parallax") || "0";
          let l = i.attr("data-swiper-parallax-x")
            , o = i.attr("data-swiper-parallax-y");
          const c = i.attr("data-swiper-parallax-scale")
            , p = i.attr("data-swiper-parallax-opacity");
          if (l || o ? (l = l || "0",
          o = o || "0") : t.isHorizontal() ? (l = n,
          o = "0") : (o = n,
          l = "0"),
          l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px",
          o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px",
          null != p) {
              const e = p - (p - 1) * (1 - Math.abs(s));
              i[0].style.opacity = e
          }
          if (null == c)
              i.transform(`translate3d(${l}, ${o}, 0px)`);
          else {
              const e = c - (c - 1) * (1 - Math.abs(s));
              i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
          }
      }
        , r = ()=>{
          const {$el: e, slides: s, progress: a, snapGrid: r} = t;
          e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
              i(e, a)
          }
          )),
          s.each(((e,s)=>{
              let n = e.progress;
              t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)),
              n = Math.min(Math.max(n, -1), 1),
              d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
                  i(e, n)
              }
              ))
          }
          ))
      }
      ;
      a("beforeInit", (()=>{
          t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
          t.originalParams.watchSlidesProgress = !0)
      }
      )),
      a("init", (()=>{
          t.params.parallax.enabled && r()
      }
      )),
      a("setTranslate", (()=>{
          t.params.parallax.enabled && r()
      }
      )),
      a("setTransition", ((e,s)=>{
          t.params.parallax.enabled && function(e) {
              void 0 === e && (e = t.params.speed);
              const {$el: s} = t;
              s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{
                  const s = d(t);
                  let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                  0 === e && (a = 0),
                  s.transition(a)
              }
              ))
          }(s)
      }
      ))
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a, emit: i} = e;
      const n = r();
      s({
          zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed"
          }
      }),
      t.zoom = {
          enabled: !1
      };
      let l, o, c, p = 1, u = !1;
      const m = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
      }
        , f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
      }
        , g = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
      };
      let v = 1;
      function w(e) {
          if (e.targetTouches.length < 2)
              return 1;
          const t = e.targetTouches[0].pageX
            , s = e.targetTouches[0].pageY
            , a = e.targetTouches[1].pageX
            , i = e.targetTouches[1].pageY;
          return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
      }
      function b(e) {
          const s = t.support
            , a = t.params.zoom;
          if (o = !1,
          c = !1,
          !s.gestures) {
              if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                  return;
              o = !0,
              m.scaleStart = w(e)
          }
          m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`),
          0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
          m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
          m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`),
          m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
          0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0),
          u = !0) : m.$imageEl = void 0
      }
      function x(e) {
          const s = t.support
            , a = t.params.zoom
            , i = t.zoom;
          if (!s.gestures) {
              if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                  return;
              c = !0,
              m.scaleMove = w(e)
          }
          m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p,
          i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5),
          i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5),
          m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
      }
      function y(e) {
          const s = t.device
            , a = t.support
            , i = t.params.zoom
            , r = t.zoom;
          if (!a.gestures) {
              if (!o || !c)
                  return;
              if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android)
                  return;
              o = !1,
              c = !1
          }
          m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio),
          m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
          p = r.scale,
          u = !1,
          1 === r.scale && (m.$slideEl = void 0))
      }
      function E(e) {
          const s = t.zoom;
          if (!m.$imageEl || 0 === m.$imageEl.length)
              return;
          if (t.allowClick = !1,
          !f.isTouched || !m.$slideEl)
              return;
          f.isMoved || (f.width = m.$imageEl[0].offsetWidth,
          f.height = m.$imageEl[0].offsetHeight,
          f.startX = h(m.$imageWrapEl[0], "x") || 0,
          f.startY = h(m.$imageWrapEl[0], "y") || 0,
          m.slideWidth = m.$slideEl[0].offsetWidth,
          m.slideHeight = m.$slideEl[0].offsetHeight,
          m.$imageWrapEl.transition(0));
          const a = f.width * s.scale
            , i = f.height * s.scale;
          if (!(a < m.slideWidth && i < m.slideHeight)) {
              if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0),
              f.maxX = -f.minX,
              f.minY = Math.min(m.slideHeight / 2 - i / 2, 0),
              f.maxY = -f.minY,
              f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
              f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
              !f.isMoved && !u) {
                  if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))
                      return void (f.isTouched = !1);
                  if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y))
                      return void (f.isTouched = !1)
              }
              e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              f.isMoved = !0,
              f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX,
              f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY,
              f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8),
              f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8),
              f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8),
              f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8),
              g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
              g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
              g.prevTime || (g.prevTime = Date.now()),
              g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2,
              g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2,
              Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
              Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
              g.prevPositionX = f.touchesCurrent.x,
              g.prevPositionY = f.touchesCurrent.y,
              g.prevTime = Date.now(),
              m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
          }
      }
      function T() {
          const e = t.zoom;
          m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
          e.scale = 1,
          p = 1,
          m.$slideEl = void 0,
          m.$imageEl = void 0,
          m.$imageWrapEl = void 0)
      }
      function C(e) {
          const s = t.zoom
            , a = t.params.zoom;
          if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
          m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)),
          m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
          m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
          !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length)
              return;
          let i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
          t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
          t.wrapperEl.style.touchAction = "none"),
          m.$slideEl.addClass(`${a.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
          r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x,
          r = f.touchesStart.y),
          s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
          p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
          e ? ($ = m.$slideEl[0].offsetWidth,
          S = m.$slideEl[0].offsetHeight,
          l = m.$slideEl.offset().left + n.scrollX,
          o = m.$slideEl.offset().top + n.scrollY,
          c = l + $ / 2 - i,
          u = o + S / 2 - r,
          v = m.$imageEl[0].offsetWidth,
          w = m.$imageEl[0].offsetHeight,
          b = v * s.scale,
          x = w * s.scale,
          y = Math.min($ / 2 - b / 2, 0),
          E = Math.min(S / 2 - x / 2, 0),
          T = -y,
          C = -E,
          h = c * s.scale,
          g = u * s.scale,
          h < y && (h = y),
          h > T && (h = T),
          g < E && (g = E),
          g > C && (g = C)) : (h = 0,
          g = 0),
          m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),
          m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
      }
      function $() {
          const e = t.zoom
            , s = t.params.zoom;
          m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex),
          m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
          m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)),
          m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "",
          t.wrapperEl.style.touchAction = ""),
          e.scale = 1,
          p = 1,
          m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
          m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
          m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
          m.$slideEl = void 0)
      }
      function S(e) {
          const s = t.zoom;
          s.scale && 1 !== s.scale ? $() : C(e)
      }
      function M() {
          const e = t.support;
          return {
              passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                  passive: !0,
                  capture: !1
              },
              activeListenerWithCapture: !e.passiveListener || {
                  passive: !1,
                  capture: !0
              }
          }
      }
      function P() {
          return `.${t.params.slideClass}`
      }
      function k(e) {
          const {passiveListener: s} = M()
            , a = P();
          t.$wrapperEl[e]("gesturestart", a, b, s),
          t.$wrapperEl[e]("gesturechange", a, x, s),
          t.$wrapperEl[e]("gestureend", a, y, s)
      }
      function z() {
          l || (l = !0,
          k("on"))
      }
      function O() {
          l && (l = !1,
          k("off"))
      }
      function L() {
          const e = t.zoom;
          if (e.enabled)
              return;
          e.enabled = !0;
          const s = t.support
            , {passiveListener: a, activeListenerWithCapture: i} = M()
            , r = P();
          s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
          t.$wrapperEl.on(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
          t.$wrapperEl.on(t.touchEvents.move, r, x, i),
          t.$wrapperEl.on(t.touchEvents.end, r, y, a),
          t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
      }
      function I() {
          const e = t.zoom;
          if (!e.enabled)
              return;
          const s = t.support;
          e.enabled = !1;
          const {passiveListener: a, activeListenerWithCapture: i} = M()
            , r = P();
          s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
          t.$wrapperEl.off(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
          t.$wrapperEl.off(t.touchEvents.move, r, x, i),
          t.$wrapperEl.off(t.touchEvents.end, r, y, a),
          t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
      }
      Object.defineProperty(t.zoom, "scale", {
          get: ()=>v,
          set(e) {
              if (v !== e) {
                  const t = m.$imageEl ? m.$imageEl[0] : void 0
                    , s = m.$slideEl ? m.$slideEl[0] : void 0;
                  i("zoomChange", e, t, s)
              }
              v = e
          }
      }),
      a("init", (()=>{
          t.params.zoom.enabled && L()
      }
      )),
      a("destroy", (()=>{
          I()
      }
      )),
      a("touchStart", ((e,s)=>{
          t.zoom.enabled && function(e) {
              const s = t.device;
              m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(),
              f.isTouched = !0,
              f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
              f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
          }(s)
      }
      )),
      a("touchEnd", ((e,s)=>{
          t.zoom.enabled && function() {
              const e = t.zoom;
              if (!m.$imageEl || 0 === m.$imageEl.length)
                  return;
              if (!f.isTouched || !f.isMoved)
                  return f.isTouched = !1,
                  void (f.isMoved = !1);
              f.isTouched = !1,
              f.isMoved = !1;
              let s = 300
                , a = 300;
              const i = g.x * s
                , r = f.currentX + i
                , n = g.y * a
                , l = f.currentY + n;
              0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
              0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
              const o = Math.max(s, a);
              f.currentX = r,
              f.currentY = l;
              const d = f.width * e.scale
                , c = f.height * e.scale;
              f.minX = Math.min(m.slideWidth / 2 - d / 2, 0),
              f.maxX = -f.minX,
              f.minY = Math.min(m.slideHeight / 2 - c / 2, 0),
              f.maxY = -f.minY,
              f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX),
              f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY),
              m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
          }()
      }
      )),
      a("doubleTap", ((e,s)=>{
          !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
      }
      )),
      a("transitionEnd", (()=>{
          t.zoom.enabled && t.params.zoom.enabled && T()
      }
      )),
      a("slideChange", (()=>{
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T()
      }
      )),
      Object.assign(t.zoom, {
          enable: L,
          disable: I,
          in: C,
          out: $,
          toggle: S
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a, emit: i} = e;
      s({
          lazy: {
              checkInView: !1,
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              scrollingElement: "",
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader"
          }
      }),
      t.lazy = {};
      let n = !1
        , l = !1;
      function o(e, s) {
          void 0 === s && (s = !0);
          const a = t.params.lazy;
          if (void 0 === e)
              return;
          if (0 === t.slides.length)
              return;
          const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e)
            , n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
          !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]),
          0 !== n.length && n.each((e=>{
              const n = d(e);
              n.addClass(a.loadingClass);
              const l = n.attr("data-background")
                , c = n.attr("data-src")
                , p = n.attr("data-srcset")
                , u = n.attr("data-sizes")
                , h = n.parent("picture");
              t.loadImage(n[0], c || l, p, u, !1, (()=>{
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                      if (l ? (n.css("background-image", `url("${l}")`),
                      n.removeAttr("data-background")) : (p && (n.attr("srcset", p),
                      n.removeAttr("data-srcset")),
                      u && (n.attr("sizes", u),
                      n.removeAttr("data-sizes")),
                      h.length && h.children("source").each((e=>{
                          const t = d(e);
                          t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                          t.removeAttr("data-srcset"))
                      }
                      )),
                      c && (n.attr("src", c),
                      n.removeAttr("data-src"))),
                      n.addClass(a.loadedClass).removeClass(a.loadingClass),
                      r.find(`.${a.preloaderClass}`).remove(),
                      t.params.loop && s) {
                          const e = r.attr("data-swiper-slide-index");
                          if (r.hasClass(t.params.slideDuplicateClass)) {
                              o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                          } else {
                              o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                          }
                      }
                      i("lazyImageReady", r[0], n[0]),
                      t.params.autoHeight && t.updateAutoHeight()
                  }
              }
              )),
              i("lazyImageLoad", r[0], n[0])
          }
          ))
      }
      function c() {
          const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t
            , r = t.virtual && s.virtual.enabled
            , n = s.lazy;
          let c = s.slidesPerView;
          function p(t) {
              if (r) {
                  if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)
                      return !0
              } else if (a[t])
                  return !0;
              return !1
          }
          function u(e) {
              return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
          }
          if ("auto" === c && (c = 0),
          l || (l = !0),
          t.params.watchSlidesProgress)
              e.children(`.${s.slideVisibleClass}`).each((e=>{
                  o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
              }
              ));
          else if (c > 1)
              for (let e = i; e < i + c; e += 1)
                  p(e) && o(e);
          else
              o(i);
          if (n.loadPrevNext)
              if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                  const e = n.loadPrevNextAmount
                    , t = c
                    , s = Math.min(i + t + Math.max(e, t), a.length)
                    , r = Math.max(i - Math.max(t, e), 0);
                  for (let e = i + c; e < s; e += 1)
                      p(e) && o(e);
                  for (let e = r; e < i; e += 1)
                      p(e) && o(e)
              } else {
                  const t = e.children(`.${s.slideNextClass}`);
                  t.length > 0 && o(u(t));
                  const a = e.children(`.${s.slidePrevClass}`);
                  a.length > 0 && o(u(a))
              }
      }
      function p() {
          const e = r();
          if (!t || t.destroyed)
              return;
          const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e)
            , a = s[0] === e
            , i = a ? e.innerWidth : s[0].offsetWidth
            , l = a ? e.innerHeight : s[0].offsetHeight
            , o = t.$el.offset()
            , {rtlTranslate: u} = t;
          let h = !1;
          u && (o.left -= t.$el[0].scrollLeft);
          const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
          for (let e = 0; e < m.length; e += 1) {
              const t = m[e];
              if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                  if (0 === t[0] && 0 === t[1])
                      continue;
                  h = !0
              }
          }
          const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
              passive: !0,
              capture: !1
          };
          h ? (c(),
          s.off("scroll", p, f)) : n || (n = !0,
          s.on("scroll", p, f))
      }
      a("beforeInit", (()=>{
          t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
      }
      )),
      a("init", (()=>{
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
      }
      )),
      a("scroll", (()=>{
          t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
      }
      )),
      a("scrollbarDragMove resize _freeModeNoMomentumRelease", (()=>{
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
      }
      )),
      a("transitionStart", (()=>{
          t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
      }
      )),
      a("transitionEnd", (()=>{
          t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
      }
      )),
      a("slideChange", (()=>{
          const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
          e.enabled && (s || a && (i || 0 === r)) && c()
      }
      )),
      Object.assign(t.lazy, {
          load: c,
          loadInSlide: o
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      function i(e, t) {
          const s = function() {
              let e, t, s;
              return (a,i)=>{
                  for (t = -1,
                  e = a.length; e - t > 1; )
                      s = e + t >> 1,
                      a[s] <= i ? t = s : e = s;
                  return e
              }
          }();
          let a, i;
          return this.x = e,
          this.y = t,
          this.lastIndex = e.length - 1,
          this.interpolate = function(e) {
              return e ? (i = s(this.x, e),
              a = i - 1,
              (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
          }
          ,
          this
      }
      function r() {
          t.controller.control && t.controller.spline && (t.controller.spline = void 0,
          delete t.controller.spline)
      }
      s({
          controller: {
              control: void 0,
              inverse: !1,
              by: "slide"
          }
      }),
      t.controller = {
          control: void 0
      },
      a("beforeInit", (()=>{
          t.controller.control = t.params.controller.control
      }
      )),
      a("update", (()=>{
          r()
      }
      )),
      a("resize", (()=>{
          r()
      }
      )),
      a("observerUpdate", (()=>{
          r()
      }
      )),
      a("setTranslate", ((e,s,a)=>{
          t.controller.control && t.controller.setTranslate(s, a)
      }
      )),
      a("setTransition", ((e,s,a)=>{
          t.controller.control && t.controller.setTransition(s, a)
      }
      )),
      Object.assign(t.controller, {
          setTranslate: function(e, s) {
              const a = t.controller.control;
              let r, n;
              const l = t.constructor;
              function o(e) {
                  const s = t.rtlTranslate ? -t.translate : t.translate;
                  "slide" === t.params.controller.by && (!function(e) {
                      t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid,e.slidesGrid) : new i(t.snapGrid,e.snapGrid))
                  }(e),
                  n = -t.controller.spline.interpolate(-s)),
                  n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()),
                  n = (s - t.minTranslate()) * r + e.minTranslate()),
                  t.params.controller.inverse && (n = e.maxTranslate() - n),
                  e.updateProgress(n),
                  e.setTranslate(n, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses()
              }
              if (Array.isArray(a))
                  for (let e = 0; e < a.length; e += 1)
                      a[e] !== s && a[e]instanceof l && o(a[e]);
              else
                  a instanceof l && s !== a && o(a)
          },
          setTransition: function(e, s) {
              const a = t.constructor
                , i = t.controller.control;
              let r;
              function n(s) {
                  s.setTransition(e, t),
                  0 !== e && (s.transitionStart(),
                  s.params.autoHeight && p((()=>{
                      s.updateAutoHeight()
                  }
                  )),
                  s.$wrapperEl.transitionEnd((()=>{
                      i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(),
                      s.transitionEnd())
                  }
                  )))
              }
              if (Array.isArray(i))
                  for (r = 0; r < i.length; r += 1)
                      i[r] !== s && i[r]instanceof a && n(i[r]);
              else
                  i instanceof a && s !== i && n(i)
          }
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              slideLabelMessage: "{{index}} / {{slidesLength}}",
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: "group",
              id: null
          }
      });
      let i = null;
      function r(e) {
          const t = i;
          0 !== t.length && (t.html(""),
          t.html(e))
      }
      function n(e) {
          e.attr("tabIndex", "0")
      }
      function l(e) {
          e.attr("tabIndex", "-1")
      }
      function o(e, t) {
          e.attr("role", t)
      }
      function c(e, t) {
          e.attr("aria-roledescription", t)
      }
      function p(e, t) {
          e.attr("aria-label", t)
      }
      function u(e) {
          e.attr("aria-disabled", !0)
      }
      function h(e) {
          e.attr("aria-disabled", !1)
      }
      function m(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode)
              return;
          const s = t.params.a11y
            , a = d(e.target);
          t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
          t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
          t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
          t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
          t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
      }
      function f() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
      }
      function g() {
          return f() && t.params.pagination.clickable
      }
      const v = (e,t,s)=>{
          n(e),
          "BUTTON" !== e[0].tagName && (o(e, "button"),
          e.on("keydown", m)),
          p(e, s),
          function(e, t) {
              e.attr("aria-controls", t)
          }(e, t)
      }
        , w = e=>{
          const s = e.target.closest(`.${t.params.slideClass}`);
          if (!s || !t.slides.includes(s))
              return;
          const a = t.slides.indexOf(s) === t.activeIndex
            , i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
          a || i || t.slideTo(t.slides.indexOf(s), 0)
      }
      ;
      function b() {
          const e = t.params.a11y;
          t.$el.append(i);
          const s = t.$el;
          e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
          e.containerMessage && p(s, e.containerMessage);
          const a = t.$wrapperEl
            , r = e.id || a.attr("id") || `swiper-wrapper-${n = 16,
          void 0 === n && (n = 16),
          "x".repeat(n).replace(/x/g, (()=>Math.round(16 * Math.random()).toString(16)))}`;
          var n;
          const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var u;
          u = r,
          a.attr("id", u),
          function(e, t) {
              e.attr("aria-live", t)
          }(a, l),
          e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage),
          o(d(t.slides), e.slideRole);
          const h = t.params.loop ? t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
          let f, b;
          t.slides.each(((s,a)=>{
              const i = d(s)
                , r = t.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
              p(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, h))
          }
          )),
          t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl),
          f && f.length && v(f, r, e.nextSlideMessage),
          b && b.length && v(b, r, e.prevSlideMessage),
          g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m),
          t.$el.on("focus", w, !0)
      }
      a("beforeInit", (()=>{
          i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
      }
      )),
      a("afterInit", (()=>{
          t.params.a11y.enabled && b()
      }
      )),
      a("fromEdge toEdge afterInit lock unlock", (()=>{
          t.params.a11y.enabled && function() {
              if (t.params.loop || t.params.rewind || !t.navigation)
                  return;
              const {$nextEl: e, $prevEl: s} = t.navigation;
              s && s.length > 0 && (t.isBeginning ? (u(s),
              l(s)) : (h(s),
              n(s))),
              e && e.length > 0 && (t.isEnd ? (u(e),
              l(e)) : (h(e),
              n(e)))
          }()
      }
      )),
      a("paginationUpdate", (()=>{
          t.params.a11y.enabled && function() {
              const e = t.params.a11y;
              f() && t.pagination.bullets.each((s=>{
                  const a = d(s);
                  t.params.pagination.clickable && (n(a),
                  t.params.pagination.renderBullet || (o(a, "button"),
                  p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                  a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
              }
              ))
          }()
      }
      )),
      a("destroy", (()=>{
          t.params.a11y.enabled && function() {
              let e, s;
              i && i.length > 0 && i.remove(),
              t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
              t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
              e && e.off("keydown", m),
              s && s.off("keydown", m),
              g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m),
              t.$el.off("focus", w, !0)
          }()
      }
      ))
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          history: {
              enabled: !1,
              root: "",
              replaceState: !1,
              key: "slides"
          }
      });
      let i = !1
        , n = {};
      const l = e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        , o = e=>{
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname.slice(1).split("/").filter((e=>"" !== e))
            , i = a.length;
          return {
              key: a[i - 2],
              value: a[i - 1]
          }
      }
        , d = (e,s)=>{
          const a = r();
          if (!i || !t.params.history.enabled)
              return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides.eq(s);
          let d = l(o.attr("data-history"));
          if (t.params.history.root.length > 0) {
              let s = t.params.history.root;
              "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              d = `${s}/${e}/${d}`
          } else
              n.pathname.includes(e) || (d = `${e}/${d}`);
          const c = a.history.state;
          c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
              value: d
          }, null, d) : a.history.pushState({
              value: d
          }, null, d))
      }
        , c = (e,s,a)=>{
          if (s)
              for (let i = 0, r = t.slides.length; i < r; i += 1) {
                  const r = t.slides.eq(i);
                  if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                      const s = r.index();
                      t.slideTo(s, e, a)
                  }
              }
          else
              t.slideTo(0, e, a)
      }
        , p = ()=>{
          n = o(t.params.url),
          c(t.params.speed, t.paths.value, !1)
      }
      ;
      a("init", (()=>{
          t.params.history.enabled && (()=>{
              const e = r();
              if (t.params.history) {
                  if (!e.history || !e.history.pushState)
                      return t.params.history.enabled = !1,
                      void (t.params.hashNavigation.enabled = !0);
                  i = !0,
                  n = o(t.params.url),
                  (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit),
                  t.params.history.replaceState || e.addEventListener("popstate", p))
              }
          }
          )()
      }
      )),
      a("destroy", (()=>{
          t.params.history.enabled && (()=>{
              const e = r();
              t.params.history.replaceState || e.removeEventListener("popstate", p)
          }
          )()
      }
      )),
      a("transitionEnd _freeModeNoMomentumRelease", (()=>{
          i && d(t.params.history.key, t.activeIndex)
      }
      )),
      a("slideChange", (()=>{
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
      }
      ))
  }
  , function(e) {
      let {swiper: t, extendParams: s, emit: i, on: n} = e
        , l = !1;
      const o = a()
        , c = r();
      s({
          hashNavigation: {
              enabled: !1,
              replaceState: !1,
              watchState: !1
          }
      });
      const p = ()=>{
          i("hashChange");
          const e = o.location.hash.replace("#", "");
          if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
              const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
              if (void 0 === s)
                  return;
              t.slideTo(s)
          }
      }
        , u = ()=>{
          if (l && t.params.hashNavigation.enabled)
              if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState)
                  c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""),
                  i("hashSet");
              else {
                  const e = t.slides.eq(t.activeIndex)
                    , s = e.attr("data-hash") || e.attr("data-history");
                  o.location.hash = s || "",
                  i("hashSet")
              }
      }
      ;
      n("init", (()=>{
          t.params.hashNavigation.enabled && (()=>{
              if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)
                  return;
              l = !0;
              const e = o.location.hash.replace("#", "");
              if (e) {
                  const s = 0;
                  for (let a = 0, i = t.slides.length; a < i; a += 1) {
                      const i = t.slides.eq(a);
                      if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                          const e = i.index();
                          t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                      }
                  }
              }
              t.params.hashNavigation.watchState && d(c).on("hashchange", p)
          }
          )()
      }
      )),
      n("destroy", (()=>{
          t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
      }
      )),
      n("transitionEnd _freeModeNoMomentumRelease", (()=>{
          l && u()
      }
      )),
      n("slideChange", (()=>{
          l && t.params.cssMode && u()
      }
      ))
  }
  , function(e) {
      let t, {swiper: s, extendParams: i, on: r, emit: n} = e;
      function l() {
          const e = s.slides.eq(s.activeIndex);
          let a = s.params.autoplay.delay;
          e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
          clearTimeout(t),
          t = p((()=>{
              let e;
              s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(),
              e = s.slidePrev(s.params.speed, !0, !0),
              n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0),
              n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0),
              n("autoplay")) : s.params.loop ? (s.loopFix(),
              e = s.slideNext(s.params.speed, !0, !0),
              n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0),
              n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0),
              n("autoplay")),
              (s.params.cssMode && s.autoplay.running || !1 === e) && l()
          }
          ), a)
      }
      function o() {
          return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0,
          n("autoplayStart"),
          l(),
          !0))
      }
      function d() {
          return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t),
          t = void 0),
          s.autoplay.running = !1,
          n("autoplayStop"),
          !0))
      }
      function c(e) {
          s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t),
          s.autoplay.paused = !0,
          0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e=>{
              s.$wrapperEl[0].addEventListener(e, h)
          }
          )) : (s.autoplay.paused = !1,
          l())))
      }
      function u() {
          const e = a();
          "hidden" === e.visibilityState && s.autoplay.running && c(),
          "visible" === e.visibilityState && s.autoplay.paused && (l(),
          s.autoplay.paused = !1)
      }
      function h(e) {
          s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e=>{
              s.$wrapperEl[0].removeEventListener(e, h)
          }
          )),
          s.autoplay.paused = !1,
          s.autoplay.running ? l() : d())
      }
      function m() {
          s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"),
          c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e=>{
              s.$wrapperEl[0].removeEventListener(e, h)
          }
          ))
      }
      function f() {
          s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1,
          n("autoplayResume"),
          l())
      }
      s.autoplay = {
          running: !1,
          paused: !1
      },
      i({
          autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1
          }
      }),
      r("init", (()=>{
          if (s.params.autoplay.enabled) {
              o();
              a().addEventListener("visibilitychange", u),
              s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m),
              s.$el.on("mouseleave", f))
          }
      }
      )),
      r("beforeTransitionStart", ((e,t,a)=>{
          s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
      }
      )),
      r("sliderFirstMove", (()=>{
          s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
      }
      )),
      r("touchEnd", (()=>{
          s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
      }
      )),
      r("destroy", (()=>{
          s.$el.off("mouseenter", m),
          s.$el.off("mouseleave", f),
          s.autoplay.running && d();
          a().removeEventListener("visibilitychange", u)
      }
      )),
      Object.assign(s.autoplay, {
          pause: c,
          run: l,
          start: o,
          stop: d
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-thumbs"
          }
      });
      let i = !1
        , r = !1;
      function n() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed)
              return;
          const s = e.clickedIndex
            , a = e.clickedSlide;
          if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass))
              return;
          if (null == s)
              return;
          let i;
          if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
          t.params.loop) {
              let e = t.activeIndex;
              t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
              t._clientLeft = t.$wrapperEl[0].clientLeft,
              e = t.activeIndex);
              const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index()
                , a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
              i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
          }
          t.slideTo(i)
      }
      function l() {
          const {thumbs: e} = t.params;
          if (i)
              return !1;
          i = !0;
          const s = t.constructor;
          if (e.swiper instanceof s)
              t.thumbs.swiper = e.swiper,
              Object.assign(t.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
              }),
              Object.assign(t.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
              });
          else if (m(e.swiper)) {
              const a = Object.assign({}, e.swiper);
              Object.assign(a, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
              }),
              t.thumbs.swiper = new s(a),
              r = !0
          }
          return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on("tap", n),
          !0
      }
      function o(e) {
          const s = t.thumbs.swiper;
          if (!s || s.destroyed)
              return;
          const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView
            , i = t.params.thumbs.autoScrollOffset
            , r = i && !s.params.loop;
          if (t.realIndex !== s.realIndex || r) {
              let n, l, o = s.activeIndex;
              if (s.params.loop) {
                  s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                  s._clientLeft = s.$wrapperEl[0].clientLeft,
                  o = s.activeIndex);
                  const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                    , a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                  n = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e,
                  l = t.activeIndex > t.previousIndex ? "next" : "prev"
              } else
                  n = t.realIndex,
                  l = n > t.previousIndex ? "next" : "prev";
              r && (n += "next" === l ? i : -1 * i),
              s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup,
              s.slideTo(n, e ? 0 : void 0))
          }
          let n = 1;
          const l = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (n = 1),
          n = Math.floor(n),
          s.slides.removeClass(l),
          s.params.loop || s.params.virtual && s.params.virtual.enabled)
              for (let e = 0; e < n; e += 1)
                  s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(l);
          else
              for (let e = 0; e < n; e += 1)
                  s.slides.eq(t.realIndex + e).addClass(l)
      }
      t.thumbs = {
          swiper: null
      },
      a("beforeInit", (()=>{
          const {thumbs: e} = t.params;
          e && e.swiper && (l(),
          o(!0))
      }
      )),
      a("slideChange update resize observerUpdate", (()=>{
          o()
      }
      )),
      a("setTransition", ((e,s)=>{
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s)
      }
      )),
      a("beforeDestroy", (()=>{
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy()
      }
      )),
      Object.assign(t.thumbs, {
          init: l,
          update: o
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, emit: a, once: i} = e;
      s({
          freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: .02
          }
      }),
      Object.assign(t, {
          freeMode: {
              onTouchStart: function() {
                  const e = t.getTranslate();
                  t.setTranslate(e),
                  t.setTransition(0),
                  t.touchEventsData.velocities.length = 0,
                  t.freeMode.onTouchEnd({
                      currentPos: t.rtl ? t.translate : -t.translate
                  })
              },
              onTouchMove: function() {
                  const {touchEventsData: e, touches: s} = t;
                  0 === e.velocities.length && e.velocities.push({
                      position: s[t.isHorizontal() ? "startX" : "startY"],
                      time: e.touchStartTime
                  }),
                  e.velocities.push({
                      position: s[t.isHorizontal() ? "currentX" : "currentY"],
                      time: u()
                  })
              },
              onTouchEnd: function(e) {
                  let {currentPos: s} = e;
                  const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t
                    , c = u() - d.touchStartTime;
                  if (s < -t.minTranslate())
                      t.slideTo(t.activeIndex);
                  else if (s > -t.maxTranslate())
                      t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                  else {
                      if (r.freeMode.momentum) {
                          if (d.velocities.length > 1) {
                              const e = d.velocities.pop()
                                , s = d.velocities.pop()
                                , a = e.position - s.position
                                , i = e.time - s.time;
                              t.velocity = a / i,
                              t.velocity /= 2,
                              Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                              (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                          } else
                              t.velocity = 0;
                          t.velocity *= r.freeMode.momentumVelocityRatio,
                          d.velocities.length = 0;
                          let e = 1e3 * r.freeMode.momentumRatio;
                          const s = t.velocity * e;
                          let c = t.translate + s;
                          l && (c = -c);
                          let p, h = !1;
                          const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                          let f;
                          if (c < t.maxTranslate())
                              r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m),
                              p = t.maxTranslate(),
                              h = !0,
                              d.allowMomentumBounce = !0) : c = t.maxTranslate(),
                              r.loop && r.centeredSlides && (f = !0);
                          else if (c > t.minTranslate())
                              r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                              p = t.minTranslate(),
                              h = !0,
                              d.allowMomentumBounce = !0) : c = t.minTranslate(),
                              r.loop && r.centeredSlides && (f = !0);
                          else if (r.freeMode.sticky) {
                              let e;
                              for (let t = 0; t < o.length; t += 1)
                                  if (o[t] > -c) {
                                      e = t;
                                      break
                                  }
                              c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1],
                              c = -c
                          }
                          if (f && i("transitionEnd", (()=>{
                              t.loopFix()
                          }
                          )),
                          0 !== t.velocity) {
                              if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity),
                              r.freeMode.sticky) {
                                  const s = Math.abs((l ? -c : c) - t.translate)
                                    , a = t.slidesSizesGrid[t.activeIndex];
                                  e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                              }
                          } else if (r.freeMode.sticky)
                              return void t.slideToClosest();
                          r.freeMode.momentumBounce && h ? (t.updateProgress(p),
                          t.setTransition(e),
                          t.setTranslate(c),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating = !0,
                          n.transitionEnd((()=>{
                              t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"),
                              t.setTransition(r.speed),
                              setTimeout((()=>{
                                  t.setTranslate(p),
                                  n.transitionEnd((()=>{
                                      t && !t.destroyed && t.transitionEnd()
                                  }
                                  ))
                              }
                              ), 0))
                          }
                          ))) : t.velocity ? (a("_freeModeNoMomentumRelease"),
                          t.updateProgress(c),
                          t.setTransition(e),
                          t.setTranslate(c),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating || (t.animating = !0,
                          n.transitionEnd((()=>{
                              t && !t.destroyed && t.transitionEnd()
                          }
                          )))) : t.updateProgress(c),
                          t.updateActiveIndex(),
                          t.updateSlidesClasses()
                      } else {
                          if (r.freeMode.sticky)
                              return void t.slideToClosest();
                          r.freeMode && a("_freeModeNoMomentumRelease")
                      }
                      (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses())
                  }
              }
          }
      })
  }
  , function(e) {
      let t, s, a, {swiper: i, extendParams: r} = e;
      r({
          grid: {
              rows: 1,
              fill: "column"
          }
      }),
      i.grid = {
          initSlides: e=>{
              const {slidesPerView: r} = i.params
                , {rows: n, fill: l} = i.params.grid;
              s = t / n,
              a = Math.floor(e / n),
              t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n,
              "auto" !== r && "row" === l && (t = Math.max(t, r * n))
          }
          ,
          updateSlide: (e,r,n,l)=>{
              const {slidesPerGroup: o, spaceBetween: d} = i.params
                , {rows: c, fill: p} = i.params.grid;
              let u, h, m;
              if ("row" === p && o > 1) {
                  const s = Math.floor(e / (o * c))
                    , a = e - c * o * s
                    , i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                  m = Math.floor(a / i),
                  h = a - m * i + s * o,
                  u = h + m * t / c,
                  r.css({
                      "-webkit-order": u,
                      order: u
                  })
              } else
                  "column" === p ? (h = Math.floor(e / c),
                  m = e - h * c,
                  (h > a || h === a && m === c - 1) && (m += 1,
                  m >= c && (m = 0,
                  h += 1))) : (m = Math.floor(e / s),
                  h = e - m * s);
              r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
          }
          ,
          updateWrapperSize: (e,s,a)=>{
              const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params
                , {rows: o} = i.params.grid;
              if (i.virtualSize = (e + r) * t,
              i.virtualSize = Math.ceil(i.virtualSize / o) - r,
              i.$wrapperEl.css({
                  [a("width")]: `${i.virtualSize + r}px`
              }),
              n) {
                  s.splice(0, s.length);
                  const e = [];
                  for (let t = 0; t < s.length; t += 1) {
                      let a = s[t];
                      l && (a = Math.floor(a)),
                      s[t] < i.virtualSize + s[0] && e.push(a)
                  }
                  s.push(...e)
              }
          }
      }
  }
  , function(e) {
      let {swiper: t} = e;
      Object.assign(t, {
          appendSlide: K.bind(t),
          prependSlide: Z.bind(t),
          addSlide: J.bind(t),
          removeSlide: Q.bind(t),
          removeAllSlides: ee.bind(t)
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          fadeEffect: {
              crossFade: !1,
              transformEl: null
          }
      }),
      te({
          effect: "fade",
          swiper: t,
          on: a,
          setTranslate: ()=>{
              const {slides: e} = t
                , s = t.params.fadeEffect;
              for (let a = 0; a < e.length; a += 1) {
                  const e = t.slides.eq(a);
                  let i = -e[0].swiperSlideOffset;
                  t.params.virtualTranslate || (i -= t.translate);
                  let r = 0;
                  t.isHorizontal() || (r = i,
                  i = 0);
                  const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                  se(s, e).css({
                      opacity: n
                  }).transform(`translate3d(${i}px, ${r}px, 0px)`)
              }
          }
          ,
          setTransition: e=>{
              const {transformEl: s} = t.params.fadeEffect;
              (s ? t.slides.find(s) : t.slides).transition(e),
              ae({
                  swiper: t,
                  duration: e,
                  transformEl: s,
                  allSlides: !0
              })
          }
          ,
          overwriteParams: ()=>({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode
          })
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: .94
          }
      });
      const i = (e,t,s)=>{
          let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
            , i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
          0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`),
          e.append(a)),
          0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`),
          e.append(i)),
          a.length && (a[0].style.opacity = Math.max(-t, 0)),
          i.length && (i[0].style.opacity = Math.max(t, 0))
      }
      ;
      te({
          effect: "cube",
          swiper: t,
          on: a,
          setTranslate: ()=>{
              const {$el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c} = t
                , p = t.params.cubeEffect
                , u = t.isHorizontal()
                , h = t.virtual && t.params.virtual.enabled;
              let m, f = 0;
              p.shadow && (u ? (m = s.find(".swiper-cube-shadow"),
              0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'),
              s.append(m)),
              m.css({
                  height: `${r}px`
              })) : (m = e.find(".swiper-cube-shadow"),
              0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'),
              e.append(m))));
              for (let e = 0; e < a.length; e += 1) {
                  const t = a.eq(e);
                  let s = e;
                  h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                  let r = 90 * s
                    , n = Math.floor(r / 360);
                  l && (r = -r,
                  n = Math.floor(-r / 360));
                  const d = Math.max(Math.min(t[0].progress, 1), -1);
                  let c = 0
                    , m = 0
                    , g = 0;
                  s % 4 == 0 ? (c = 4 * -n * o,
                  g = 0) : (s - 1) % 4 == 0 ? (c = 0,
                  g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o,
                  g = o) : (s - 3) % 4 == 0 && (c = -o,
                  g = 3 * o + 4 * o * n),
                  l && (c = -c),
                  u || (m = c,
                  c = 0);
                  const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                  d <= 1 && d > -1 && (f = 90 * s + 90 * d,
                  l && (f = 90 * -s - 90 * d)),
                  t.transform(v),
                  p.slideShadows && i(t, d, u)
              }
              if (s.css({
                  "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                  "transform-origin": `50% 50% -${o / 2}px`
              }),
              p.shadow)
                  if (u)
                      m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                  else {
                      const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90)
                        , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                        , s = p.shadowScale
                        , a = p.shadowScale / t
                        , i = p.shadowOffset;
                      m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                  }
              const g = c.isSafari || c.isWebView ? -o / 2 : 0;
              s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`),
              s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
          }
          ,
          setTransition: e=>{
              const {$el: s, slides: a} = t;
              a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
              t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
          }
          ,
          recreateShadows: ()=>{
              const e = t.isHorizontal();
              t.slides.each((t=>{
                  const s = Math.max(Math.min(t.progress, 1), -1);
                  i(d(t), s, e)
              }
              ))
          }
          ,
          getEffectParams: ()=>t.params.cubeEffect,
          perspective: ()=>!0,
          overwriteParams: ()=>({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
          })
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          flipEffect: {
              slideShadows: !0,
              limitRotation: !0,
              transformEl: null
          }
      });
      const i = (e,s,a)=>{
          let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
            , r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
          0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")),
          0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")),
          i.length && (i[0].style.opacity = Math.max(-s, 0)),
          r.length && (r[0].style.opacity = Math.max(s, 0))
      }
      ;
      te({
          effect: "flip",
          swiper: t,
          on: a,
          setTranslate: ()=>{
              const {slides: e, rtlTranslate: s} = t
                , a = t.params.flipEffect;
              for (let r = 0; r < e.length; r += 1) {
                  const n = e.eq(r);
                  let l = n[0].progress;
                  t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                  const o = n[0].swiperSlideOffset;
                  let d = -180 * l
                    , c = 0
                    , p = t.params.cssMode ? -o - t.translate : -o
                    , u = 0;
                  t.isHorizontal() ? s && (d = -d) : (u = p,
                  p = 0,
                  c = -d,
                  d = 0),
                  n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length,
                  a.slideShadows && i(n, l, a);
                  const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                  se(a, n).transform(h)
              }
          }
          ,
          setTransition: e=>{
              const {transformEl: s} = t.params.flipEffect;
              (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
              ae({
                  swiper: t,
                  duration: e,
                  transformEl: s
              })
          }
          ,
          recreateShadows: ()=>{
              const e = t.params.flipEffect;
              t.slides.each((s=>{
                  const a = d(s);
                  let r = a[0].progress;
                  t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)),
                  i(a, r, e)
              }
              ))
          }
          ,
          getEffectParams: ()=>t.params.flipEffect,
          perspective: ()=>!0,
          overwriteParams: ()=>({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode
          })
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
              transformEl: null
          }
      }),
      te({
          effect: "coverflow",
          swiper: t,
          on: a,
          setTranslate: ()=>{
              const {width: e, height: s, slides: a, slidesSizesGrid: i} = t
                , r = t.params.coverflowEffect
                , n = t.isHorizontal()
                , l = t.translate
                , o = n ? e / 2 - l : s / 2 - l
                , d = n ? r.rotate : -r.rotate
                , c = r.depth;
              for (let e = 0, t = a.length; e < t; e += 1) {
                  const t = a.eq(e)
                    , s = i[e]
                    , l = (o - t[0].swiperSlideOffset - s / 2) / s
                    , p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                  let u = n ? d * p : 0
                    , h = n ? 0 : d * p
                    , m = -c * Math.abs(p)
                    , f = r.stretch;
                  "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                  let g = n ? 0 : f * p
                    , v = n ? f * p : 0
                    , w = 1 - (1 - r.scale) * Math.abs(p);
                  Math.abs(v) < .001 && (v = 0),
                  Math.abs(g) < .001 && (g = 0),
                  Math.abs(m) < .001 && (m = 0),
                  Math.abs(u) < .001 && (u = 0),
                  Math.abs(h) < .001 && (h = 0),
                  Math.abs(w) < .001 && (w = 0);
                  const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                  if (se(r, t).transform(b),
                  t[0].style.zIndex = 1 - Math.abs(Math.round(p)),
                  r.slideShadows) {
                      let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                        , s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                      0 === e.length && (e = ie(r, t, n ? "left" : "top")),
                      0 === s.length && (s = ie(r, t, n ? "right" : "bottom")),
                      e.length && (e[0].style.opacity = p > 0 ? p : 0),
                      s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                  }
              }
          }
          ,
          setTransition: e=>{
              const {transformEl: s} = t.params.coverflowEffect;
              (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
          }
          ,
          perspective: ()=>!0,
          overwriteParams: ()=>({
              watchSlidesProgress: !0
          })
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          creativeEffect: {
              transformEl: null,
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1
              },
              next: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1
              }
          }
      });
      const i = e=>"string" == typeof e ? e : `${e}px`;
      te({
          effect: "creative",
          swiper: t,
          on: a,
          setTranslate: ()=>{
              const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t
                , r = t.params.creativeEffect
                , {progressMultiplier: n} = r
                , l = t.params.centeredSlides;
              if (l) {
                  const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                  s.transform(`translateX(calc(50% - ${e}px))`)
              }
              for (let s = 0; s < e.length; s += 1) {
                  const a = e.eq(s)
                    , o = a[0].progress
                    , d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                  let c = d;
                  l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                  const p = a[0].swiperSlideOffset
                    , u = [t.params.cssMode ? -p - t.translate : -p, 0, 0]
                    , h = [0, 0, 0];
                  let m = !1;
                  t.isHorizontal() || (u[1] = u[0],
                  u[0] = 0);
                  let f = {
                      translate: [0, 0, 0],
                      rotate: [0, 0, 0],
                      scale: 1,
                      opacity: 1
                  };
                  d < 0 ? (f = r.next,
                  m = !0) : d > 0 && (f = r.prev,
                  m = !0),
                  u.forEach(((e,t)=>{
                      u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                  }
                  )),
                  h.forEach(((e,t)=>{
                      h[t] = f.rotate[t] * Math.abs(d * n)
                  }
                  )),
                  a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                  const g = u.join(", ")
                    , v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`
                    , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                    , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                    , x = `translate3d(${g}) ${v} ${w}`;
                  if (m && f.shadow || !m) {
                      let e = a.children(".swiper-slide-shadow");
                      if (0 === e.length && f.shadow && (e = ie(r, a)),
                      e.length) {
                          const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                          e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                      }
                  }
                  const y = se(r, a);
                  y.transform(x).css({
                      opacity: b
                  }),
                  f.origin && y.css("transform-origin", f.origin)
              }
          }
          ,
          setTransition: e=>{
              const {transformEl: s} = t.params.creativeEffect;
              (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
              ae({
                  swiper: t,
                  duration: e,
                  transformEl: s,
                  allSlides: !0
              })
          }
          ,
          perspective: ()=>t.params.creativeEffect.perspective,
          overwriteParams: ()=>({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode
          })
      })
  }
  , function(e) {
      let {swiper: t, extendParams: s, on: a} = e;
      s({
          cardsEffect: {
              slideShadows: !0,
              transformEl: null,
              rotate: !0
          }
      }),
      te({
          effect: "cards",
          swiper: t,
          on: a,
          setTranslate: ()=>{
              const {slides: e, activeIndex: s} = t
                , a = t.params.cardsEffect
                , {startTranslate: i, isTouched: r} = t.touchEventsData
                , n = t.translate;
              for (let l = 0; l < e.length; l += 1) {
                  const o = e.eq(l)
                    , d = o[0].progress
                    , c = Math.min(Math.max(d, -4), 4);
                  let p = o[0].swiperSlideOffset;
                  t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                  let u = t.params.cssMode ? -p - t.translate : -p
                    , h = 0;
                  const m = -100 * Math.abs(c);
                  let f = 1
                    , g = -2 * c
                    , v = 8 - .75 * Math.abs(c);
                  const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l
                    , b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i
                    , x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                  if (b || x) {
                      const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                      g += -28 * c * e,
                      f += -.5 * e,
                      v += 96 * e,
                      h = -25 * e * Math.abs(c) + "%"
                  }
                  if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`,
                  !t.isHorizontal()) {
                      const e = h;
                      h = u,
                      u = e
                  }
                  const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)
                    , E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                  if (a.slideShadows) {
                      let e = o.find(".swiper-slide-shadow");
                      0 === e.length && (e = ie(a, o)),
                      e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                  }
                  o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                  se(a, o).transform(E)
              }
          }
          ,
          setTransition: e=>{
              const {transformEl: s} = t.params.cardsEffect;
              (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
              ae({
                  swiper: t,
                  duration: e,
                  transformEl: s
              })
          }
          ,
          perspective: ()=>!0,
          overwriteParams: ()=>({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode
          })
      })
  }
  ];
  return V.use(re),
  V
}
));
//# sourceMappingURL=swiper-bundle.min.js.map
/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
  "use strict";
  var _ = function() {};
  _.version = "2.0.7",
  window.addEventListener("mousewheel", function() {});
  var P = "data-scrollmagic-pin-spacer";
  _.Controller = function(e) {
      var n, r, i = "REVERSE", t = "PAUSED", o = z.defaults, s = this, a = R.extend({}, o, e), l = [], c = !1, f = 0, u = t, d = !0, h = 0, p = !0, g = function() {
          0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval))
      }, v = function() {
          return a.vertical ? R.get.scrollTop(a.container) : R.get.scrollLeft(a.container)
      }, m = function() {
          return a.vertical ? R.get.height(a.container) : R.get.width(a.container)
      }, w = this._setScrollPos = function(e) {
          a.vertical ? d ? window.scrollTo(R.get.scrollLeft(), e) : a.container.scrollTop = e : d ? window.scrollTo(e, R.get.scrollTop()) : a.container.scrollLeft = e
      }
      , y = function() {
          if (p && c) {
              var e = R.type.Array(c) ? c : l.slice(0);
              c = !1;
              var t = f
                , n = (f = s.scrollPos()) - t;
              0 !== n && (u = 0 < n ? "FORWARD" : i),
              u === i && e.reverse(),
              e.forEach(function(e, t) {
                  e.update(!0)
              })
          }
      }, S = function() {
          n = R.rAF(y)
      }, b = function(e) {
          "resize" == e.type && (h = m(),
          u = t),
          !0 !== c && (c = !0,
          S())
      }, E = function() {
          if (!d && h != m()) {
              var t;
              try {
                  t = new Event("resize",{
                      bubbles: !1,
                      cancelable: !1
                  })
              } catch (e) {
                  (t = document.createEvent("Event")).initEvent("resize", !1, !1)
              }
              a.container.dispatchEvent(t)
          }
          l.forEach(function(e, t) {
              e.refresh()
          }),
          g()
      };
      this._options = a;
      var x = function(e) {
          if (e.length <= 1)
              return e;
          var t = e.slice(0);
          return t.sort(function(e, t) {
              return e.scrollOffset() > t.scrollOffset() ? 1 : -1
          }),
          t
      };
      return this.addScene = function(e) {
          if (R.type.Array(e))
              e.forEach(function(e, t) {
                  s.addScene(e)
              });
          else if (e instanceof _.Scene)
              if (e.controller() !== s)
                  e.addTo(s);
              else if (l.indexOf(e) < 0)
                  for (var t in l.push(e),
                  l = x(l),
                  e.on("shift.controller_sort", function() {
                      l = x(l)
                  }),
                  a.globalSceneOptions)
                      e[t] && e[t].call(e, a.globalSceneOptions[t]);
          return s
      }
      ,
      this.removeScene = function(e) {
          if (R.type.Array(e))
              e.forEach(function(e, t) {
                  s.removeScene(e)
              });
          else {
              var t = l.indexOf(e);
              -1 < t && (e.off("shift.controller_sort"),
              l.splice(t, 1),
              e.remove())
          }
          return s
      }
      ,
      this.updateScene = function(e, n) {
          return R.type.Array(e) ? e.forEach(function(e, t) {
              s.updateScene(e, n)
          }) : n ? e.update(!0) : !0 !== c && e instanceof _.Scene && (-1 == (c = c || []).indexOf(e) && c.push(e),
          c = x(c),
          S()),
          s
      }
      ,
      this.update = function(e) {
          return b({
              type: "resize"
          }),
          e && y(),
          s
      }
      ,
      this.scrollTo = function(e, t) {
          if (R.type.Number(e))
              w.call(a.container, e, t);
          else if (e instanceof _.Scene)
              e.controller() === s && s.scrollTo(e.scrollOffset(), t);
          else if (R.type.Function(e))
              w = e;
          else {
              var n = R.get.elements(e)[0];
              if (n) {
                  for (; n.parentNode.hasAttribute(P); )
                      n = n.parentNode;
                  var r = a.vertical ? "top" : "left"
                    , i = R.get.offset(a.container)
                    , o = R.get.offset(n);
                  d || (i[r] -= s.scrollPos()),
                  s.scrollTo(o[r] - i[r], t)
              }
          }
          return s
      }
      ,
      this.scrollPos = function(e) {
          return arguments.length ? (R.type.Function(e) && (v = e),
          s) : v.call(s)
      }
      ,
      this.info = function(e) {
          var t = {
              size: h,
              vertical: a.vertical,
              scrollPos: f,
              scrollDirection: u,
              container: a.container,
              isDocument: d
          };
          return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
      }
      ,
      this.loglevel = function(e) {
          return s
      }
      ,
      this.enabled = function(e) {
          return arguments.length ? (p != e && (p = !!e,
          s.updateScene(l, !0)),
          s) : p
      }
      ,
      this.destroy = function(e) {
          window.clearTimeout(r);
          for (var t = l.length; t--; )
              l[t].destroy(e);
          return a.container.removeEventListener("resize", b),
          a.container.removeEventListener("scroll", b),
          R.cAF(n),
          null
      }
      ,
      function() {
          for (var e in a)
              o.hasOwnProperty(e) || delete a[e];
          if (a.container = R.get.elements(a.container)[0],
          !a.container)
              throw "ScrollMagic.Controller init failed.";
          (d = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window),
          h = m(),
          a.container.addEventListener("resize", b),
          a.container.addEventListener("scroll", b);
          var t = parseInt(a.refreshInterval, 10);
          a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval,
          g()
      }(),
      s
  }
  ;
  var z = {
      defaults: {
          container: window,
          vertical: !0,
          globalSceneOptions: {},
          loglevel: 2,
          refreshInterval: 100
      }
  };
  _.Controller.addOption = function(e, t) {
      z.defaults[e] = t
  }
  ,
  _.Controller.extend = function(e) {
      var t = this;
      _.Controller = function() {
          return t.apply(this, arguments),
          this.$super = R.extend({}, this),
          e.apply(this, arguments) || this
      }
      ,
      R.extend(_.Controller, t),
      _.Controller.prototype = t.prototype,
      _.Controller.prototype.constructor = _.Controller
  }
  ,
  _.Scene = function(e) {
      var n, l, c = "BEFORE", f = "DURING", u = "AFTER", r = D.defaults, d = this, h = R.extend({}, r, e), p = c, g = 0, a = {
          start: 0,
          end: 0
      }, v = 0, i = !0, s = {};
      this.on = function(e, i) {
          return R.type.Function(i) && (e = e.trim().split(" ")).forEach(function(e) {
              var t = e.split(".")
                , n = t[0]
                , r = t[1];
              "*" != n && (s[n] || (s[n] = []),
              s[n].push({
                  namespace: r || "",
                  callback: i
              }))
          }),
          d
      }
      ,
      this.off = function(e, o) {
          return e && (e = e.trim().split(" ")).forEach(function(e, t) {
              var n = e.split(".")
                , r = n[0]
                , i = n[1] || "";
              ("*" === r ? Object.keys(s) : [r]).forEach(function(e) {
                  for (var t = s[e] || [], n = t.length; n--; ) {
                      var r = t[n];
                      !r || i !== r.namespace && "*" !== i || o && o != r.callback || t.splice(n, 1)
                  }
                  t.length || delete s[e]
              })
          }),
          d
      }
      ,
      this.trigger = function(e, n) {
          if (e) {
              var t = e.trim().split(".")
                , r = t[0]
                , i = t[1]
                , o = s[r];
              o && o.forEach(function(e, t) {
                  i && i !== e.namespace || e.callback.call(d, new _.Event(r,e.namespace,d,n))
              })
          }
          return d
      }
      ,
      d.on("change.internal", function(e) {
          "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update())
      }).on("shift.internal", function(e) {
          t(),
          d.update()
      }),
      this.addTo = function(e) {
          return e instanceof _.Controller && l != e && (l && l.removeScene(d),
          l = e,
          E(),
          o(!0),
          y(!0),
          t(),
          l.info("container").addEventListener("resize", S),
          e.addScene(d),
          d.trigger("add", {
              controller: l
          }),
          d.update()),
          d
      }
      ,
      this.enabled = function(e) {
          return arguments.length ? (i != e && (i = !!e,
          d.update(!0)),
          d) : i
      }
      ,
      this.remove = function() {
          if (l) {
              l.info("container").removeEventListener("resize", S);
              var e = l;
              l = void 0,
              e.removeScene(d),
              d.trigger("remove")
          }
          return d
      }
      ,
      this.destroy = function(e) {
          return d.trigger("destroy", {
              reset: e
          }),
          d.remove(),
          d.off("*.*"),
          null
      }
      ,
      this.update = function(e) {
          if (l)
              if (e)
                  if (l.enabled() && i) {
                      var t, n = l.info("scrollPos");
                      t = 0 < h.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0,
                      d.trigger("update", {
                          startPos: a.start,
                          endPos: a.end,
                          scrollPos: n
                      }),
                      d.progress(t)
                  } else
                      m && p === f && C(!0);
              else
                  l.updateScene(d, !1);
          return d
      }
      ,
      this.refresh = function() {
          return o(),
          y(),
          d
      }
      ,
      this.progress = function(e) {
          if (arguments.length) {
              var t = !1
                , n = p
                , r = l ? l.info("scrollDirection") : "PAUSED"
                , i = h.reverse || g <= e;
              if (0 === h.duration ? (t = g != e,
              p = 0 === (g = e < 1 && i ? 0 : 1) ? c : f) : e < 0 && p !== c && i ? (p = c,
              t = !(g = 0)) : 0 <= e && e < 1 && i ? (g = e,
              p = f,
              t = !0) : 1 <= e && p !== u ? (g = 1,
              p = u,
              t = !0) : p !== f || i || C(),
              t) {
                  var o = {
                      progress: g,
                      state: p,
                      scrollDirection: r
                  }
                    , s = p != n
                    , a = function(e) {
                      d.trigger(e, o)
                  };
                  s && n !== f && (a("enter"),
                  a(n === c ? "start" : "end")),
                  a("progress"),
                  s && p !== f && (a(p === c ? "start" : "end"),
                  a("leave"))
              }
              return d
          }
          return g
      }
      ;
      var m, w, t = function() {
          a = {
              start: v + h.offset
          },
          l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook),
          a.end = a.start + h.duration
      }, o = function(e) {
          if (n) {
              var t = "duration";
              x(t, n.call(d)) && !e && (d.trigger("change", {
                  what: t,
                  newval: h[t]
              }),
              d.trigger("shift", {
                  reason: t
              }))
          }
      }, y = function(e) {
          var t = 0
            , n = h.triggerElement;
          if (l && (n || 0 < v)) {
              if (n)
                  if (n.parentNode) {
                      for (var r = l.info(), i = R.get.offset(r.container), o = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P); )
                          n = n.parentNode;
                      var s = R.get.offset(n);
                      r.isDocument || (i[o] -= l.scrollPos()),
                      t = s[o] - i[o]
                  } else
                      d.triggerElement(void 0);
              var a = t != v;
              v = t,
              a && !e && d.trigger("shift", {
                  reason: "triggerElementPosition"
              })
          }
      }, S = function(e) {
          0 < h.triggerHook && d.trigger("shift", {
              reason: "containerResize"
          })
      }, b = R.extend(D.validate, {
          duration: function(t) {
              if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                  var e = parseFloat(t) / 100;
                  t = function() {
                      return l ? l.info("size") * e : 0
                  }
              }
              if (R.type.Function(t)) {
                  n = t;
                  try {
                      t = parseFloat(n.call(d))
                  } catch (e) {
                      t = -1
                  }
              }
              if (t = parseFloat(t),
              !R.type.Number(t) || t < 0)
                  throw n && (n = void 0),
                  0;
              return t
          }
      }), E = function(e) {
          (e = arguments.length ? [e] : Object.keys(b)).forEach(function(t, e) {
              var n;
              if (b[t])
                  try {
                      n = b[t](h[t])
                  } catch (e) {
                      n = r[t]
                  } finally {
                      h[t] = n
                  }
          })
      }, x = function(e, t) {
          var n = !1
            , r = h[e];
          return h[e] != t && (h[e] = t,
          E(e),
          n = r != h[e]),
          n
      }, z = function(t) {
          d[t] || (d[t] = function(e) {
              return arguments.length ? ("duration" === t && (n = void 0),
              x(t, e) && (d.trigger("change", {
                  what: t,
                  newval: h[t]
              }),
              -1 < D.shifts.indexOf(t) && d.trigger("shift", {
                  reason: t
              })),
              d) : h[t]
          }
          )
      };
      this.controller = function() {
          return l
      }
      ,
      this.state = function() {
          return p
      }
      ,
      this.scrollOffset = function() {
          return a.start
      }
      ,
      this.triggerPosition = function() {
          var e = h.offset;
          return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()),
          e
      }
      ,
      d.on("shift.internal", function(e) {
          var t = "duration" === e.reason;
          (p === u && t || p === f && 0 === h.duration) && C(),
          t && F()
      }).on("progress.internal", function(e) {
          C()
      }).on("add.internal", function(e) {
          F()
      }).on("destroy.internal", function(e) {
          d.removePin(e.reset)
      });
      var C = function(e) {
          if (m && l) {
              var t = l.info()
                , n = w.spacer.firstChild;
              if (e || p !== f) {
                  var r = {
                      position: w.inFlow ? "relative" : "absolute",
                      top: 0,
                      left: 0
                  }
                    , i = R.css(n, "position") != r.position;
                  w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) ? i = !0 : p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom")) && (i = !0)) : r[t.vertical ? "top" : "left"] = h.duration * g,
                  R.css(n, r),
                  i && F()
              } else {
                  "fixed" != R.css(n, "position") && (R.css(n, {
                      position: "fixed"
                  }),
                  F());
                  var o = R.get.offset(w.spacer, !0)
                    , s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10;
                  o[t.vertical ? "top" : "left"] += s,
                  R.css(w.spacer.firstChild, {
                      top: o.top,
                      left: o.left
                  })
              }
          }
      }
        , F = function() {
          if (m && l && w.inFlow) {
              var e = p === f
                , t = l.info("vertical")
                , n = w.spacer.firstChild
                , r = R.isMarginCollapseType(R.css(w.spacer, "display"))
                , i = {};
              w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
                  width: R.get.width(w.spacer)
              }) : R.css(m, {
                  width: "100%"
              }) : (i["min-width"] = R.get.width(t ? m : n, !0, !0),
              i.width = e ? i["min-width"] : "auto"),
              w.relSize.height ? e ? R.css(m, {
                  height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
              }) : R.css(m, {
                  height: "100%"
              }) : (i["min-height"] = R.get.height(t ? n : m, !0, !r),
              i.height = e ? i["min-height"] : "auto"),
              w.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = h.duration * g,
              i["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)),
              R.css(w.spacer, i)
          }
      }
        , L = function() {
          l && m && p === f && !l.info("isDocument") && C()
      }
        , T = function() {
          l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && F()
      }
        , A = function(e) {
          l && m && p === f && !l.info("isDocument") && (e.preventDefault(),
          l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
      };
      this.setPin = function(e, t) {
          if (t = R.extend({}, {
              pushFollowers: !0,
              spacerClass: "scrollmagic-pin-spacer"
          }, t),
          !(e = R.get.elements(e)[0]))
              return d;
          if ("fixed" === R.css(e, "position"))
              return d;
          if (m) {
              if (m === e)
                  return d;
              d.removePin()
          }
          var n = (m = e).parentNode.style.display
            , r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
          m.parentNode.style.display = "none";
          var i = "absolute" != R.css(m, "position")
            , o = R.css(m, r.concat(["display"]))
            , s = R.css(m, ["width", "height"]);
          m.parentNode.style.display = n,
          !i && t.pushFollowers && (t.pushFollowers = !1);
          var a = m.parentNode.insertBefore(document.createElement("div"), m)
            , l = R.extend(o, {
              position: i ? "relative" : "absolute",
              boxSizing: "content-box",
              mozBoxSizing: "content-box",
              webkitBoxSizing: "content-box"
          });
          if (i || R.extend(l, R.css(m, ["width", "height"])),
          R.css(a, l),
          a.setAttribute(P, ""),
          R.addClass(a, t.spacerClass),
          w = {
              spacer: a,
              relSize: {
                  width: "%" === s.width.slice(-1),
                  height: "%" === s.height.slice(-1),
                  autoFullWidth: "auto" === s.width && i && R.isMarginCollapseType(o.display)
              },
              pushFollowers: t.pushFollowers,
              inFlow: i
          },
          !m.___origStyle) {
              m.___origStyle = {};
              var c = m.style;
              r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                  m.___origStyle[e] = c[e] || ""
              })
          }
          return w.relSize.width && R.css(a, {
              width: s.width
          }),
          w.relSize.height && R.css(a, {
              height: s.height
          }),
          a.appendChild(m),
          R.css(m, {
              position: i ? "relative" : "absolute",
              margin: "auto",
              top: "auto",
              left: "auto",
              bottom: "auto",
              right: "auto"
          }),
          (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
              boxSizing: "border-box",
              mozBoxSizing: "border-box",
              webkitBoxSizing: "border-box"
          }),
          window.addEventListener("scroll", L),
          window.addEventListener("resize", L),
          window.addEventListener("resize", T),
          m.addEventListener("mousewheel", A),
          m.addEventListener("DOMMouseScroll", A),
          C(),
          d
      }
      ,
      this.removePin = function(e) {
          if (m) {
              if (p === f && C(!0),
              e || !l) {
                  var t = w.spacer.firstChild;
                  if (t.hasAttribute(P)) {
                      var n = w.spacer.style
                        , r = {};
                      ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                          r[e] = n[e] || ""
                      }),
                      R.css(t, r)
                  }
                  w.spacer.parentNode.insertBefore(t, w.spacer),
                  w.spacer.parentNode.removeChild(w.spacer),
                  m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle),
                  delete m.___origStyle)
              }
              window.removeEventListener("scroll", L),
              window.removeEventListener("resize", L),
              window.removeEventListener("resize", T),
              m.removeEventListener("mousewheel", A),
              m.removeEventListener("DOMMouseScroll", A),
              m = void 0
          }
          return d
      }
      ;
      var N, O = [];
      return d.on("destroy.internal", function(e) {
          d.removeClassToggle(e.reset)
      }),
      this.setClassToggle = function(e, t) {
          var n = R.get.elements(e);
          return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(),
          N = t,
          O = n,
          d.on("enter.internal_class leave.internal_class", function(e) {
              var n = "enter" === e.type ? R.addClass : R.removeClass;
              O.forEach(function(e, t) {
                  n(e, N)
              })
          })),
          d
      }
      ,
      this.removeClassToggle = function(e) {
          return e && O.forEach(function(e, t) {
              R.removeClass(e, N)
          }),
          d.off("start.internal_class end.internal_class"),
          N = void 0,
          O = [],
          d
      }
      ,
      function() {
          for (var e in h)
              r.hasOwnProperty(e) || delete h[e];
          for (var t in r)
              z(t);
          E()
      }(),
      d
  }
  ;
  var D = {
      defaults: {
          duration: 0,
          offset: 0,
          triggerElement: void 0,
          triggerHook: .5,
          reverse: !0,
          loglevel: 2
      },
      validate: {
          offset: function(e) {
              if (e = parseFloat(e),
              !R.type.Number(e))
                  throw 0;
              return e
          },
          triggerElement: function(e) {
              if (e = e || void 0) {
                  var t = R.get.elements(e)[0];
                  if (!t || !t.parentNode)
                      throw 0;
                  e = t
              }
              return e
          },
          triggerHook: function(e) {
              var t = {
                  onCenter: .5,
                  onEnter: 1,
                  onLeave: 0
              };
              if (R.type.Number(e))
                  e = Math.max(0, Math.min(parseFloat(e), 1));
              else {
                  if (!(e in t))
                      throw 0;
                  e = t[e]
              }
              return e
          },
          reverse: function(e) {
              return !!e
          }
      },
      shifts: ["duration", "offset", "triggerHook"]
  };
  _.Scene.addOption = function(e, t, n, r) {
      e in D.defaults || (D.defaults[e] = t,
      D.validate[e] = n,
      r && D.shifts.push(e))
  }
  ,
  _.Scene.extend = function(e) {
      var t = this;
      _.Scene = function() {
          return t.apply(this, arguments),
          this.$super = R.extend({}, this),
          e.apply(this, arguments) || this
      }
      ,
      R.extend(_.Scene, t),
      _.Scene.prototype = t.prototype,
      _.Scene.prototype.constructor = _.Scene
  }
  ,
  _.Event = function(e, t, n, r) {
      for (var i in r = r || {})
          this[i] = r[i];
      return this.type = e,
      this.target = this.currentTarget = n,
      this.namespace = t || "",
      this.timeStamp = this.timestamp = Date.now(),
      this
  }
  ;
  var R = _._util = function(s) {
      var n, e = {}, a = function(e) {
          return parseFloat(e) || 0
      }, l = function(e) {
          return e.currentStyle ? e.currentStyle : s.getComputedStyle(e)
      }, r = function(e, t, n, r) {
          if ((t = t === document ? s : t) === s)
              r = !1;
          else if (!u.DomElement(t))
              return 0;
          e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
          var i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
          if (n && r) {
              var o = l(t);
              i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)
          }
          return i
      }, c = function(e) {
          return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
              return e[1].toUpperCase()
          })
      };
      e.extend = function(e) {
          for (e = e || {},
          n = 1; n < arguments.length; n++)
              if (arguments[n])
                  for (var t in arguments[n])
                      arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
          return e
      }
      ,
      e.isMarginCollapseType = function(e) {
          return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
      }
      ;
      var i = 0
        , t = ["ms", "moz", "webkit", "o"]
        , o = s.requestAnimationFrame
        , f = s.cancelAnimationFrame;
      for (n = 0; !o && n < 4; ++n)
          o = s[t[n] + "RequestAnimationFrame"],
          f = s[t[n] + "CancelAnimationFrame"] || s[t[n] + "CancelRequestAnimationFrame"];
      o || (o = function(e) {
          var t = (new Date).getTime()
            , n = Math.max(0, 16 - (t - i))
            , r = s.setTimeout(function() {
              e(t + n)
          }, n);
          return i = t + n,
          r
      }
      ),
      f || (f = function(e) {
          s.clearTimeout(e)
      }
      ),
      e.rAF = o.bind(s),
      e.cAF = f.bind(s);
      var u = e.type = function(e) {
          return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
      }
      ;
      u.String = function(e) {
          return "string" === u(e)
      }
      ,
      u.Function = function(e) {
          return "function" === u(e)
      }
      ,
      u.Array = function(e) {
          return Array.isArray(e)
      }
      ,
      u.Number = function(e) {
          return !u.Array(e) && 0 <= e - parseFloat(e) + 1
      }
      ,
      u.DomElement = function(e) {
          return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
      }
      ;
      var d = e.get = {};
      return d.elements = function(e) {
          var t = [];
          if (u.String(e))
              try {
                  e = document.querySelectorAll(e)
              } catch (e) {
                  return t
              }
          if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList)
              for (var n = 0, r = t.length = e.length; n < r; n++) {
                  var i = e[n];
                  t[n] = u.DomElement(i) ? i : d.elements(i)
              }
          else
              (u.DomElement(e) || e === document || e === s) && (t = [e]);
          return t
      }
      ,
      d.scrollTop = function(e) {
          return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0
      }
      ,
      d.scrollLeft = function(e) {
          return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0
      }
      ,
      d.width = function(e, t, n) {
          return r("width", e, t, n)
      }
      ,
      d.height = function(e, t, n) {
          return r("height", e, t, n)
      }
      ,
      d.offset = function(e, t) {
          var n = {
              top: 0,
              left: 0
          };
          if (e && e.getBoundingClientRect) {
              var r = e.getBoundingClientRect();
              n.top = r.top,
              n.left = r.left,
              t || (n.top += d.scrollTop(),
              n.left += d.scrollLeft())
          }
          return n
      }
      ,
      e.addClass = function(e, t) {
          t && (e.classList ? e.classList.add(t) : e.className += " " + t)
      }
      ,
      e.removeClass = function(e, t) {
          t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
      }
      ,
      e.css = function(e, t) {
          if (u.String(t))
              return l(e)[c(t)];
          if (u.Array(t)) {
              var n = {}
                , r = l(e);
              return t.forEach(function(e, t) {
                  n[e] = r[c(e)]
              }),
              n
          }
          for (var i in t) {
              var o = t[i];
              o == parseFloat(o) && (o += "px"),
              e.style[c(i)] = o
          }
      }
      ,
      e
  }(window || {});
  return _
});
!function(n, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).LazyLoad = t()
}(this, (function() {
  "use strict";
  function n() {
      return (n = Object.assign || function(n) {
          for (var t = 1; t < arguments.length; t++) {
              var e = arguments[t];
              for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
          }
          return n
      }
      ).apply(this, arguments)
  }
  var t = "undefined" != typeof window
    , e = t && !("onscroll"in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)
    , i = t && "IntersectionObserver"in window
    , a = t && "classList"in document.createElement("p")
    , o = t && window.devicePixelRatio > 1
    , r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1
  }
    , c = function(t) {
      return n({}, r, t)
  }
    , l = function(n, t) {
      var e, i = new n(t);
      try {
          e = new CustomEvent("LazyLoad::Initialized",{
              detail: {
                  instance: i
              }
          })
      } catch (n) {
          (e = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
              instance: i
          })
      }
      window.dispatchEvent(e)
  }
    , s = function(n, t) {
      return n.getAttribute("data-" + t)
  }
    , u = function(n, t, e) {
      var i = "data-" + t;
      null !== e ? n.setAttribute(i, e) : n.removeAttribute(i)
  }
    , d = function(n) {
      return s(n, "ll-status")
  }
    , f = function(n, t) {
      return u(n, "ll-status", t)
  }
    , _ = function(n) {
      return f(n, null)
  }
    , g = function(n) {
      return null === d(n)
  }
    , v = function(n) {
      return "native" === d(n)
  }
    , p = ["loading", "loaded", "applied", "error"]
    , b = function(n, t, e, i) {
      n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i))
  }
    , h = function(n, t) {
      a ? n.classList.add(t) : n.className += (n.className ? " " : "") + t
  }
    , m = function(n, t) {
      a ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
  }
    , E = function(n) {
      return n.llTempImage
  }
    , I = function(n, t) {
      if (t) {
          var e = t._observer;
          e && e.unobserve(n)
      }
  }
    , y = function(n, t) {
      n && (n.loadingCount += t)
  }
    , A = function(n, t) {
      n && (n.toLoadCount = t)
  }
    , L = function(n) {
      for (var t, e = [], i = 0; t = n.children[i]; i += 1)
          "SOURCE" === t.tagName && e.push(t);
      return e
  }
    , w = function(n, t, e) {
      e && n.setAttribute(t, e)
  }
    , z = function(n, t) {
      n.removeAttribute(t)
  }
    , k = function(n) {
      return !!n.llOriginalAttrs
  }
    , O = function(n) {
      if (!k(n)) {
          var t = {};
          t.src = n.getAttribute("src"),
          t.srcset = n.getAttribute("srcset"),
          t.sizes = n.getAttribute("sizes"),
          n.llOriginalAttrs = t
      }
  }
    , C = function(n) {
      if (k(n)) {
          var t = n.llOriginalAttrs;
          w(n, "src", t.src),
          w(n, "srcset", t.srcset),
          w(n, "sizes", t.sizes)
      }
  }
    , N = function(n, t) {
      w(n, "sizes", s(n, t.data_sizes)),
      w(n, "srcset", s(n, t.data_srcset)),
      w(n, "src", s(n, t.data_src))
  }
    , x = function(n) {
      z(n, "src"),
      z(n, "srcset"),
      z(n, "sizes")
  }
    , M = function(n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && L(e).forEach(t)
  }
    , R = function(n, t) {
      L(n).forEach(t)
  }
    , G = {
      IMG: function(n, t) {
          M(n, (function(n) {
              O(n),
              N(n, t)
          }
          )),
          O(n),
          N(n, t)
      },
      IFRAME: function(n, t) {
          w(n, "src", s(n, t.data_src))
      },
      VIDEO: function(n, t) {
          R(n, (function(n) {
              w(n, "src", s(n, t.data_src))
          }
          )),
          w(n, "poster", s(n, t.data_poster)),
          w(n, "src", s(n, t.data_src)),
          n.load()
      }
  }
    , T = function(n, t) {
      var e = G[n.tagName];
      e && e(n, t)
  }
    , D = function(n, t, e) {
      y(e, 1),
      h(n, t.class_loading),
      f(n, "loading"),
      b(t.callback_loading, n, e)
  }
    , F = {
      IMG: function(n, t) {
          u(n, t.data_src, null),
          u(n, t.data_srcset, null),
          u(n, t.data_sizes, null),
          M(n, (function(n) {
              u(n, t.data_srcset, null),
              u(n, t.data_sizes, null)
          }
          ))
      },
      IFRAME: function(n, t) {
          u(n, t.data_src, null)
      },
      VIDEO: function(n, t) {
          u(n, t.data_src, null),
          u(n, t.data_poster, null),
          R(n, (function(n) {
              u(n, t.data_src, null)
          }
          ))
      }
  }
    , V = function(n, t) {
      u(n, t.data_bg_multi, null),
      u(n, t.data_bg_multi_hidpi, null)
  }
    , j = function(n, t) {
      var e = F[n.tagName];
      e ? e(n, t) : function(n, t) {
          u(n, t.data_bg, null),
          u(n, t.data_bg_hidpi, null)
      }(n, t)
  }
    , P = ["IMG", "IFRAME", "VIDEO"]
    , S = function(n, t) {
      !t || function(n) {
          return n.loadingCount > 0
      }(t) || function(n) {
          return n.toLoadCount > 0
      }(t) || b(n.callback_finish, t)
  }
    , U = function(n, t, e) {
      n.addEventListener(t, e),
      n.llEvLisnrs[t] = e
  }
    , $ = function(n, t, e) {
      n.removeEventListener(t, e)
  }
    , q = function(n) {
      return !!n.llEvLisnrs
  }
    , H = function(n) {
      if (q(n)) {
          var t = n.llEvLisnrs;
          for (var e in t) {
              var i = t[e];
              $(n, e, i)
          }
          delete n.llEvLisnrs
      }
  }
    , B = function(n, t, e) {
      !function(n) {
          delete n.llTempImage
      }(n),
      y(e, -1),
      function(n) {
          n && (n.toLoadCount -= 1)
      }(e),
      m(n, t.class_loading),
      t.unobserve_completed && I(n, e)
  }
    , J = function(n, t, e) {
      var i = E(n) || n;
      q(i) || function(n, t, e) {
          q(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          U(n, i, t),
          U(n, "error", e)
      }(i, (function(a) {
          !function(n, t, e, i) {
              var a = v(t);
              B(t, e, i),
              h(t, e.class_loaded),
              f(t, "loaded"),
              j(t, e),
              b(e.callback_loaded, t, i),
              a || S(e, i)
          }(0, n, t, e),
          H(i)
      }
      ), (function(a) {
          !function(n, t, e, i) {
              var a = v(t);
              B(t, e, i),
              h(t, e.class_error),
              f(t, "error"),
              b(e.callback_error, t, i),
              a || S(e, i)
          }(0, n, t, e),
          H(i)
      }
      ))
  }
    , K = function(n, t, e) {
      !function(n) {
          n.llTempImage = document.createElement("IMG")
      }(n),
      J(n, t, e),
      function(n, t, e) {
          var i = s(n, t.data_bg)
            , a = s(n, t.data_bg_hidpi)
            , r = o && a ? a : i;
          r && (n.style.backgroundImage = 'url("'.concat(r, '")'),
          E(n).setAttribute("src", r),
          D(n, t, e))
      }(n, t, e),
      function(n, t, e) {
          var i = s(n, t.data_bg_multi)
            , a = s(n, t.data_bg_multi_hidpi)
            , r = o && a ? a : i;
          r && (n.style.backgroundImage = r,
          function(n, t, e) {
              h(n, t.class_applied),
              f(n, "applied"),
              V(n, t),
              t.unobserve_completed && I(n, t),
              b(t.callback_applied, n, e)
          }(n, t, e))
      }(n, t, e)
  }
    , Q = function(n, t, e) {
      !function(n) {
          return P.indexOf(n.tagName) > -1
      }(n) ? K(n, t, e) : function(n, t, e) {
          J(n, t, e),
          T(n, t),
          D(n, t, e)
      }(n, t, e)
  }
    , W = ["IMG", "IFRAME"]
    , X = function(n) {
      return n.use_native && "loading"in HTMLImageElement.prototype
  }
    , Y = function(n, t, e) {
      n.forEach((function(n) {
          return function(n) {
              return n.isIntersecting || n.intersectionRatio > 0
          }(n) ? function(n, t, e, i) {
              f(n, "entered"),
              function(n, t, e) {
                  t.unobserve_entered && I(n, e)
              }(n, e, i),
              b(e.callback_enter, n, t, i),
              function(n) {
                  return p.indexOf(d(n)) >= 0
              }(n) || Q(n, e, i)
          }(n.target, n, t, e) : function(n, t, e, i) {
              g(n) || (function(n, t, e, i) {
                  e.cancel_on_exit && function(n) {
                      return "loading" === d(n)
                  }(n) && "IMG" === n.tagName && (H(n),
                  function(n) {
                      M(n, (function(n) {
                          x(n)
                      }
                      )),
                      x(n)
                  }(n),
                  function(n) {
                      M(n, (function(n) {
                          C(n)
                      }
                      )),
                      C(n)
                  }(n),
                  m(n, e.class_loading),
                  y(i, -1),
                  _(n),
                  b(e.callback_cancel, n, t, i))
              }(n, t, e, i),
              b(e.callback_exit, n, t, i))
          }(n.target, n, t, e)
      }
      ))
  }
    , Z = function(n) {
      return Array.prototype.slice.call(n)
  }
    , nn = function(n) {
      return n.container.querySelectorAll(n.elements_selector)
  }
    , tn = function(n) {
      return function(n) {
          return "error" === d(n)
      }(n)
  }
    , en = function(n, t) {
      return function(n) {
          return Z(n).filter(g)
      }(n || nn(t))
  }
    , an = function(n, e) {
      var a = c(n);
      this._settings = a,
      this.loadingCount = 0,
      function(n, t) {
          i && !X(n) && (t._observer = new IntersectionObserver((function(e) {
              Y(e, n, t)
          }
          ),function(n) {
              return {
                  root: n.container === document ? null : n.container,
                  rootMargin: n.thresholds || n.threshold + "px"
              }
          }(n)))
      }(a, this),
      function(n, e) {
          t && window.addEventListener("online", (function() {
              !function(n, t) {
                  var e;
                  (e = nn(n),
                  Z(e).filter(tn)).forEach((function(t) {
                      m(t, n.class_error),
                      _(t)
                  }
                  )),
                  t.update()
              }(n, e)
          }
          ))
      }(a, this),
      this.update(e)
  };
  return an.prototype = {
      update: function(n) {
          var t, a, o = this._settings, r = en(n, o);
          A(this, r.length),
          !e && i ? X(o) ? function(n, t, e) {
              n.forEach((function(n) {
                  -1 !== W.indexOf(n.tagName) && (n.setAttribute("loading", "lazy"),
                  function(n, t, e) {
                      J(n, t, e),
                      T(n, t),
                      j(n, t),
                      f(n, "native")
                  }(n, t, e))
              }
              )),
              A(e, 0)
          }(r, o, this) : (a = r,
          function(n) {
              n.disconnect()
          }(t = this._observer),
          function(n, t) {
              t.forEach((function(t) {
                  n.observe(t)
              }
              ))
          }(t, a)) : this.loadAll(r)
      },
      destroy: function() {
          this._observer && this._observer.disconnect(),
          nn(this._settings).forEach((function(n) {
              delete n.llOriginalAttrs
          }
          )),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount
      },
      loadAll: function(n) {
          var t = this
            , e = this._settings;
          en(n, e).forEach((function(n) {
              I(n, t),
              Q(n, e, t)
          }
          ))
      }
  },
  an.load = function(n, t) {
      var e = c(t);
      Q(n, e)
  }
  ,
  an.resetStatus = function(n) {
      _(n)
  }
  ,
  t && function(n, t) {
      if (t)
          if (t.length)
              for (var e, i = 0; e = t[i]; i += 1)
                  l(n, e);
          else
              l(n, t)
  }(an, window.lazyLoadOptions),
  an
}
));

!function(e, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.feather = n() : e.feather = n()
}("undefined" != typeof self ? self : this, function() {
  return function(e) {
      var n = {};
      function i(t) {
          if (n[t])
              return n[t].exports;
          var l = n[t] = {
              i: t,
              l: !1,
              exports: {}
          };
          return e[t].call(l.exports, l, l.exports, i),
          l.l = !0,
          l.exports
      }
      return i.m = e,
      i.c = n,
      i.d = function(e, n, t) {
          i.o(e, n) || Object.defineProperty(e, n, {
              configurable: !1,
              enumerable: !0,
              get: t
          })
      }
      ,
      i.r = function(e) {
          Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }
      ,
      i.n = function(e) {
          var n = e && e.__esModule ? function() {
              return e.default
          }
          : function() {
              return e
          }
          ;
          return i.d(n, "a", n),
          n
      }
      ,
      i.o = function(e, n) {
          return Object.prototype.hasOwnProperty.call(e, n)
      }
      ,
      i.p = "",
      i(i.s = 80)
  }([function(e, n, i) {
      (function(n) {
          var i = "object"
            , t = function(e) {
              return e && e.Math == Math && e
          };
          e.exports = t(typeof globalThis == i && globalThis) || t(typeof window == i && window) || t(typeof self == i && self) || t(typeof n == i && n) || Function("return this")()
      }
      ).call(this, i(75))
  }
  , function(e, n) {
      var i = {}.hasOwnProperty;
      e.exports = function(e, n) {
          return i.call(e, n)
      }
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(11)
        , r = i(33)
        , o = i(62)
        , a = t.Symbol
        , c = l("wks");
      e.exports = function(e) {
          return c[e] || (c[e] = o && a[e] || (o ? a : r)("Symbol." + e))
      }
  }
  , function(e, n, i) {
      var t = i(6);
      e.exports = function(e) {
          if (!t(e))
              throw TypeError(String(e) + " is not an object");
          return e
      }
  }
  , function(e, n) {
      e.exports = function(e) {
          try {
              return !!e()
          } catch (e) {
              return !0
          }
      }
  }
  , function(e, n, i) {
      var t = i(8)
        , l = i(7)
        , r = i(10);
      e.exports = t ? function(e, n, i) {
          return l.f(e, n, r(1, i))
      }
      : function(e, n, i) {
          return e[n] = i,
          e
      }
  }
  , function(e, n) {
      e.exports = function(e) {
          return "object" == typeof e ? null !== e : "function" == typeof e
      }
  }
  , function(e, n, i) {
      var t = i(8)
        , l = i(35)
        , r = i(3)
        , o = i(18)
        , a = Object.defineProperty;
      n.f = t ? a : function(e, n, i) {
          if (r(e),
          n = o(n, !0),
          r(i),
          l)
              try {
                  return a(e, n, i)
              } catch (e) {}
          if ("get"in i || "set"in i)
              throw TypeError("Accessors not supported");
          return "value"in i && (e[n] = i.value),
          e
      }
  }
  , function(e, n, i) {
      var t = i(4);
      e.exports = !t(function() {
          return 7 != Object.defineProperty({}, "a", {
              get: function() {
                  return 7
              }
          }).a
      })
  }
  , function(e, n) {
      e.exports = {}
  }
  , function(e, n) {
      e.exports = function(e, n) {
          return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: n
          }
      }
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(19)
        , r = i(17)
        , o = t["__core-js_shared__"] || l("__core-js_shared__", {});
      (e.exports = function(e, n) {
          return o[e] || (o[e] = void 0 !== n ? n : {})
      }
      )("versions", []).push({
          version: "3.1.3",
          mode: r ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      })
  }
  , function(e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var t = o(i(43))
        , l = o(i(41))
        , r = o(i(40));
      function o(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      n.default = Object.keys(l.default).map(function(e) {
          return new t.default(e,l.default[e],r.default[e])
      }).reduce(function(e, n) {
          return e[n.name] = n,
          e
      }, {})
  }
  , function(e, n) {
      e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }
  , function(e, n, i) {
      var t = i(72)
        , l = i(20);
      e.exports = function(e) {
          return t(l(e))
      }
  }
  , function(e, n) {
      e.exports = {}
  }
  , function(e, n, i) {
      var t = i(11)
        , l = i(33)
        , r = t("keys");
      e.exports = function(e) {
          return r[e] || (r[e] = l(e))
      }
  }
  , function(e, n) {
      e.exports = !1
  }
  , function(e, n, i) {
      var t = i(6);
      e.exports = function(e, n) {
          if (!t(e))
              return e;
          var i, l;
          if (n && "function" == typeof (i = e.toString) && !t(l = i.call(e)))
              return l;
          if ("function" == typeof (i = e.valueOf) && !t(l = i.call(e)))
              return l;
          if (!n && "function" == typeof (i = e.toString) && !t(l = i.call(e)))
              return l;
          throw TypeError("Can't convert object to primitive value")
      }
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(5);
      e.exports = function(e, n) {
          try {
              l(t, e, n)
          } catch (i) {
              t[e] = n
          }
          return n
      }
  }
  , function(e, n) {
      e.exports = function(e) {
          if (void 0 == e)
              throw TypeError("Can't call method on " + e);
          return e
      }
  }
  , function(e, n) {
      var i = Math.ceil
        , t = Math.floor;
      e.exports = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? t : i)(e)
      }
  }
  , function(e, n, i) {
      var t;
      /*!
Copyright (c) 2016 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/
      /*!
Copyright (c) 2016 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/
      !function() {
          "use strict";
          var i = function() {
              function e() {}
              function n(e, n) {
                  for (var i = n.length, t = 0; t < i; ++t)
                      l(e, n[t])
              }
              e.prototype = Object.create(null);
              var i = {}.hasOwnProperty;
              var t = /\s+/;
              function l(e, l) {
                  if (l) {
                      var r = typeof l;
                      "string" === r ? function(e, n) {
                          for (var i = n.split(t), l = i.length, r = 0; r < l; ++r)
                              e[i[r]] = !0
                      }(e, l) : Array.isArray(l) ? n(e, l) : "object" === r ? function(e, n) {
                          for (var t in n)
                              i.call(n, t) && (e[t] = !!n[t])
                      }(e, l) : "number" === r && function(e, n) {
                          e[n] = !0
                      }(e, l)
                  }
              }
              return function() {
                  for (var i = arguments.length, t = Array(i), l = 0; l < i; l++)
                      t[l] = arguments[l];
                  var r = new e;
                  n(r, t);
                  var o = [];
                  for (var a in r)
                      r[a] && o.push(a);
                  return o.join(" ")
              }
          }();
          void 0 !== e && e.exports ? e.exports = i : void 0 === (t = function() {
              return i
          }
          .apply(n, [])) || (e.exports = t)
      }()
  }
  , function(e, n, i) {
      var t = i(7).f
        , l = i(1)
        , r = i(2)("toStringTag");
      e.exports = function(e, n, i) {
          e && !l(e = i ? e : e.prototype, r) && t(e, r, {
              configurable: !0,
              value: n
          })
      }
  }
  , function(e, n, i) {
      var t = i(20);
      e.exports = function(e) {
          return Object(t(e))
      }
  }
  , function(e, n, i) {
      var t = i(1)
        , l = i(24)
        , r = i(16)
        , o = i(63)
        , a = r("IE_PROTO")
        , c = Object.prototype;
      e.exports = o ? Object.getPrototypeOf : function(e) {
          return e = l(e),
          t(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
      }
  }
  , function(e, n, i) {
      "use strict";
      var t, l, r, o = i(25), a = i(5), c = i(1), p = i(2), y = i(17), h = p("iterator"), x = !1;
      [].keys && ("next"in (r = [].keys()) ? (l = o(o(r))) !== Object.prototype && (t = l) : x = !0),
      void 0 == t && (t = {}),
      y || c(t, h) || a(t, h, function() {
          return this
      }),
      e.exports = {
          IteratorPrototype: t,
          BUGGY_SAFARI_ITERATORS: x
      }
  }
  , function(e, n, i) {
      var t = i(21)
        , l = Math.min;
      e.exports = function(e) {
          return e > 0 ? l(t(e), 9007199254740991) : 0
      }
  }
  , function(e, n, i) {
      var t = i(1)
        , l = i(14)
        , r = i(68)
        , o = i(15)
        , a = r(!1);
      e.exports = function(e, n) {
          var i, r = l(e), c = 0, p = [];
          for (i in r)
              !t(o, i) && t(r, i) && p.push(i);
          for (; n.length > c; )
              t(r, i = n[c++]) && (~a(p, i) || p.push(i));
          return p
      }
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(11)
        , r = i(5)
        , o = i(1)
        , a = i(19)
        , c = i(36)
        , p = i(37)
        , y = p.get
        , h = p.enforce
        , x = String(c).split("toString");
      l("inspectSource", function(e) {
          return c.call(e)
      }),
      (e.exports = function(e, n, i, l) {
          var c = !!l && !!l.unsafe
            , p = !!l && !!l.enumerable
            , y = !!l && !!l.noTargetGet;
          "function" == typeof i && ("string" != typeof n || o(i, "name") || r(i, "name", n),
          h(i).source = x.join("string" == typeof n ? n : "")),
          e !== t ? (c ? !y && e[n] && (p = !0) : delete e[n],
          p ? e[n] = i : r(e, n, i)) : p ? e[n] = i : a(n, i)
      }
      )(Function.prototype, "toString", function() {
          return "function" == typeof this && y(this).source || c.call(this)
      })
  }
  , function(e, n) {
      var i = {}.toString;
      e.exports = function(e) {
          return i.call(e).slice(8, -1)
      }
  }
  , function(e, n, i) {
      var t = i(8)
        , l = i(73)
        , r = i(10)
        , o = i(14)
        , a = i(18)
        , c = i(1)
        , p = i(35)
        , y = Object.getOwnPropertyDescriptor;
      n.f = t ? y : function(e, n) {
          if (e = o(e),
          n = a(n, !0),
          p)
              try {
                  return y(e, n)
              } catch (e) {}
          if (c(e, n))
              return r(!l.f.call(e, n), e[n])
      }
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(31).f
        , r = i(5)
        , o = i(29)
        , a = i(19)
        , c = i(71)
        , p = i(65);
      e.exports = function(e, n) {
          var i, y, h, x, s, u = e.target, d = e.global, f = e.stat;
          if (i = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype)
              for (y in n) {
                  if (x = n[y],
                  h = e.noTargetGet ? (s = l(i, y)) && s.value : i[y],
                  !p(d ? y : u + (f ? "." : "#") + y, e.forced) && void 0 !== h) {
                      if (typeof x == typeof h)
                          continue;
                      c(x, h)
                  }
                  (e.sham || h && h.sham) && r(x, "sham", !0),
                  o(i, y, x, e)
              }
      }
  }
  , function(e, n) {
      var i = 0
        , t = Math.random();
      e.exports = function(e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + t).toString(36))
      }
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(6)
        , r = t.document
        , o = l(r) && l(r.createElement);
      e.exports = function(e) {
          return o ? r.createElement(e) : {}
      }
  }
  , function(e, n, i) {
      var t = i(8)
        , l = i(4)
        , r = i(34);
      e.exports = !t && !l(function() {
          return 7 != Object.defineProperty(r("div"), "a", {
              get: function() {
                  return 7
              }
          }).a
      })
  }
  , function(e, n, i) {
      var t = i(11);
      e.exports = t("native-function-to-string", Function.toString)
  }
  , function(e, n, i) {
      var t, l, r, o = i(76), a = i(0), c = i(6), p = i(5), y = i(1), h = i(16), x = i(15), s = a.WeakMap;
      if (o) {
          var u = new s
            , d = u.get
            , f = u.has
            , g = u.set;
          t = function(e, n) {
              return g.call(u, e, n),
              n
          }
          ,
          l = function(e) {
              return d.call(u, e) || {}
          }
          ,
          r = function(e) {
              return f.call(u, e)
          }
      } else {
          var v = h("state");
          x[v] = !0,
          t = function(e, n) {
              return p(e, v, n),
              n
          }
          ,
          l = function(e) {
              return y(e, v) ? e[v] : {}
          }
          ,
          r = function(e) {
              return y(e, v)
          }
      }
      e.exports = {
          set: t,
          get: l,
          has: r,
          enforce: function(e) {
              return r(e) ? l(e) : t(e, {})
          },
          getterFor: function(e) {
              return function(n) {
                  var i;
                  if (!c(n) || (i = l(n)).type !== e)
                      throw TypeError("Incompatible receiver, " + e + " required");
                  return i
              }
          }
      }
  }
  , function(e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var t = Object.assign || function(e) {
          for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                  Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
          }
          return e
      }
        , l = o(i(22))
        , r = o(i(12));
      function o(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      n.default = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("undefined" == typeof document)
              throw new Error("`feather.replace()` only works in a browser environment.");
          var n = document.querySelectorAll("[data-feather]");
          Array.from(n).forEach(function(n) {
              return function(e) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , i = function(e) {
                      return Array.from(e.attributes).reduce(function(e, n) {
                          return e[n.name] = n.value,
                          e
                      }, {})
                  }(e)
                    , o = i["data-feather"];
                  delete i["data-feather"];
                  var a = r.default[o].toSvg(t({}, n, i, {
                      class: (0,
                      l.default)(n.class, i.class)
                  }))
                    , c = (new DOMParser).parseFromString(a, "image/svg+xml").querySelector("svg");
                  e.parentNode.replaceChild(c, e)
              }(n, e)
          })
      }
  }
  , function(e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var t, l = i(12), r = (t = l) && t.__esModule ? t : {
          default: t
      };
      n.default = function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),
          !e)
              throw new Error("The required `key` (icon name) parameter is missing.");
          if (!r.default[e])
              throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
          return r.default[e].toSvg(n)
      }
  }
  , function(e) {
      e.exports = {
          activity: ["pulse", "health", "action", "motion"],
          airplay: ["stream", "cast", "mirroring"],
          "alert-circle": ["warning", "alert", "danger"],
          "alert-octagon": ["warning", "alert", "danger"],
          "alert-triangle": ["warning", "alert", "danger"],
          "align-center": ["text alignment", "center"],
          "align-justify": ["text alignment", "justified"],
          "align-left": ["text alignment", "left"],
          "align-right": ["text alignment", "right"],
          anchor: [],
          archive: ["index", "box"],
          "at-sign": ["mention", "at", "email", "message"],
          award: ["achievement", "badge"],
          aperture: ["camera", "photo"],
          "bar-chart": ["statistics", "diagram", "graph"],
          "bar-chart-2": ["statistics", "diagram", "graph"],
          battery: ["power", "electricity"],
          "battery-charging": ["power", "electricity"],
          bell: ["alarm", "notification", "sound"],
          "bell-off": ["alarm", "notification", "silent"],
          bluetooth: ["wireless"],
          "book-open": ["read", "library"],
          book: ["read", "dictionary", "booklet", "magazine", "library"],
          bookmark: ["read", "clip", "marker", "tag"],
          box: ["cube"],
          briefcase: ["work", "bag", "baggage", "folder"],
          calendar: ["date"],
          camera: ["photo"],
          cast: ["chromecast", "airplay"],
          circle: ["off", "zero", "record"],
          clipboard: ["copy"],
          clock: ["time", "watch", "alarm"],
          "cloud-drizzle": ["weather", "shower"],
          "cloud-lightning": ["weather", "bolt"],
          "cloud-rain": ["weather"],
          "cloud-snow": ["weather", "blizzard"],
          cloud: ["weather"],
          codepen: ["logo"],
          codesandbox: ["logo"],
          code: ["source", "programming"],
          coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
          columns: ["layout"],
          command: ["keyboard", "cmd", "terminal", "prompt"],
          compass: ["navigation", "safari", "travel", "direction"],
          copy: ["clone", "duplicate"],
          "corner-down-left": ["arrow", "return"],
          "corner-down-right": ["arrow"],
          "corner-left-down": ["arrow"],
          "corner-left-up": ["arrow"],
          "corner-right-down": ["arrow"],
          "corner-right-up": ["arrow"],
          "corner-up-left": ["arrow"],
          "corner-up-right": ["arrow"],
          cpu: ["processor", "technology"],
          "credit-card": ["purchase", "payment", "cc"],
          crop: ["photo", "image"],
          crosshair: ["aim", "target"],
          database: ["storage", "memory"],
          delete: ["remove"],
          disc: ["album", "cd", "dvd", "music"],
          "dollar-sign": ["currency", "money", "payment"],
          droplet: ["water"],
          edit: ["pencil", "change"],
          "edit-2": ["pencil", "change"],
          "edit-3": ["pencil", "change"],
          eye: ["view", "watch"],
          "eye-off": ["view", "watch", "hide", "hidden"],
          "external-link": ["outbound"],
          facebook: ["logo", "social"],
          "fast-forward": ["music"],
          figma: ["logo", "design", "tool"],
          "file-minus": ["delete", "remove", "erase"],
          "file-plus": ["add", "create", "new"],
          "file-text": ["data", "txt", "pdf"],
          film: ["movie", "video"],
          filter: ["funnel", "hopper"],
          flag: ["report"],
          "folder-minus": ["directory"],
          "folder-plus": ["directory"],
          folder: ["directory"],
          framer: ["logo", "design", "tool"],
          frown: ["emoji", "face", "bad", "sad", "emotion"],
          gift: ["present", "box", "birthday", "party"],
          "git-branch": ["code", "version control"],
          "git-commit": ["code", "version control"],
          "git-merge": ["code", "version control"],
          "git-pull-request": ["code", "version control"],
          github: ["logo", "version control"],
          gitlab: ["logo", "version control"],
          globe: ["world", "browser", "language", "translate"],
          "hard-drive": ["computer", "server", "memory", "data"],
          hash: ["hashtag", "number", "pound"],
          headphones: ["music", "audio", "sound"],
          heart: ["like", "love", "emotion"],
          "help-circle": ["question mark"],
          hexagon: ["shape", "node.js", "logo"],
          home: ["house", "living"],
          image: ["picture"],
          inbox: ["email"],
          instagram: ["logo", "camera"],
          key: ["password", "login", "authentication", "secure"],
          layers: ["stack"],
          layout: ["window", "webpage"],
          "life-bouy": ["help", "life ring", "support"],
          link: ["chain", "url"],
          "link-2": ["chain", "url"],
          linkedin: ["logo", "social media"],
          list: ["options"],
          lock: ["security", "password", "secure"],
          "log-in": ["sign in", "arrow", "enter"],
          "log-out": ["sign out", "arrow", "exit"],
          mail: ["email", "message"],
          "map-pin": ["location", "navigation", "travel", "marker"],
          map: ["location", "navigation", "travel"],
          maximize: ["fullscreen"],
          "maximize-2": ["fullscreen", "arrows", "expand"],
          meh: ["emoji", "face", "neutral", "emotion"],
          menu: ["bars", "navigation", "hamburger"],
          "message-circle": ["comment", "chat"],
          "message-square": ["comment", "chat"],
          "mic-off": ["record", "sound", "mute"],
          mic: ["record", "sound", "listen"],
          minimize: ["exit fullscreen", "close"],
          "minimize-2": ["exit fullscreen", "arrows", "close"],
          minus: ["subtract"],
          monitor: ["tv", "screen", "display"],
          moon: ["dark", "night"],
          "more-horizontal": ["ellipsis"],
          "more-vertical": ["ellipsis"],
          "mouse-pointer": ["arrow", "cursor"],
          move: ["arrows"],
          music: ["note"],
          navigation: ["location", "travel"],
          "navigation-2": ["location", "travel"],
          octagon: ["stop"],
          package: ["box", "container"],
          paperclip: ["attachment"],
          pause: ["music", "stop"],
          "pause-circle": ["music", "audio", "stop"],
          "pen-tool": ["vector", "drawing"],
          percent: ["discount"],
          "phone-call": ["ring"],
          "phone-forwarded": ["call"],
          "phone-incoming": ["call"],
          "phone-missed": ["call"],
          "phone-off": ["call", "mute"],
          "phone-outgoing": ["call"],
          phone: ["call"],
          play: ["music", "start"],
          "pie-chart": ["statistics", "diagram"],
          "play-circle": ["music", "start"],
          plus: ["add", "new"],
          "plus-circle": ["add", "new"],
          "plus-square": ["add", "new"],
          pocket: ["logo", "save"],
          power: ["on", "off"],
          printer: ["fax", "office", "device"],
          radio: ["signal"],
          "refresh-cw": ["synchronise", "arrows"],
          "refresh-ccw": ["arrows"],
          repeat: ["loop", "arrows"],
          rewind: ["music"],
          "rotate-ccw": ["arrow"],
          "rotate-cw": ["arrow"],
          rss: ["feed", "subscribe"],
          save: ["floppy disk"],
          scissors: ["cut"],
          search: ["find", "magnifier", "magnifying glass"],
          send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
          settings: ["cog", "edit", "gear", "preferences"],
          "share-2": ["network", "connections"],
          shield: ["security", "secure"],
          "shield-off": ["security", "insecure"],
          "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
          "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
          shuffle: ["music"],
          "skip-back": ["music"],
          "skip-forward": ["music"],
          slack: ["logo"],
          slash: ["ban", "no"],
          sliders: ["settings", "controls"],
          smartphone: ["cellphone", "device"],
          smile: ["emoji", "face", "happy", "good", "emotion"],
          speaker: ["audio", "music"],
          star: ["bookmark", "favorite", "like"],
          "stop-circle": ["media", "music"],
          sun: ["brightness", "weather", "light"],
          sunrise: ["weather", "time", "morning", "day"],
          sunset: ["weather", "time", "evening", "night"],
          tablet: ["device"],
          tag: ["label"],
          target: ["logo", "bullseye"],
          terminal: ["code", "command line", "prompt"],
          thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
          "thumbs-down": ["dislike", "bad", "emotion"],
          "thumbs-up": ["like", "good", "emotion"],
          "toggle-left": ["on", "off", "switch"],
          "toggle-right": ["on", "off", "switch"],
          tool: ["settings", "spanner"],
          trash: ["garbage", "delete", "remove", "bin"],
          "trash-2": ["garbage", "delete", "remove", "bin"],
          triangle: ["delta"],
          truck: ["delivery", "van", "shipping", "transport", "lorry"],
          tv: ["television", "stream"],
          twitch: ["logo"],
          twitter: ["logo", "social"],
          type: ["text"],
          umbrella: ["rain", "weather"],
          unlock: ["security"],
          "user-check": ["followed", "subscribed"],
          "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
          "user-plus": ["new", "add", "create", "follow", "subscribe"],
          "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
          user: ["person", "account"],
          users: ["group"],
          "video-off": ["camera", "movie", "film"],
          video: ["camera", "movie", "film"],
          voicemail: ["phone"],
          volume: ["music", "sound", "mute"],
          "volume-1": ["music", "sound"],
          "volume-2": ["music", "sound"],
          "volume-x": ["music", "sound", "mute"],
          watch: ["clock", "time"],
          "wifi-off": ["disabled"],
          wifi: ["connection", "signal", "wireless"],
          wind: ["weather", "air"],
          "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
          "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
          "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
          x: ["cancel", "close", "delete", "remove", "times", "clear"],
          youtube: ["logo", "video", "play"],
          "zap-off": ["flash", "camera", "lightning"],
          zap: ["flash", "camera", "lightning"],
          "zoom-in": ["magnifying glass"],
          "zoom-out": ["magnifying glass"]
      }
  }
  , function(e) {
      e.exports = {
          activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
          airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
          "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
          "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
          "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
          "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
          "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
          "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
          "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
          anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
          aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
          archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
          "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
          "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
          "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
          "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
          "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
          "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
          "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
          "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
          "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
          "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
          "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
          "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
          "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
          award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
          "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
          "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
          "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
          battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
          "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
          bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
          bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
          "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
          book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
          bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
          box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
          briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
          calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
          "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
          camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
          cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
          "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
          "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
          check: '<polyline points="20 6 9 17 4 12"></polyline>',
          "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
          "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
          "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
          "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
          "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
          "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
          "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
          "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
          chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
          circle: '<circle cx="12" cy="12" r="10"></circle>',
          clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
          clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
          "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
          "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
          "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
          "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
          cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
          code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
          codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
          codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
          coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
          columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
          command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
          compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
          copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
          "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
          "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
          "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
          "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
          "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
          "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
          "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
          "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
          cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
          "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
          crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
          crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
          database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
          delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
          disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
          "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
          "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
          divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
          "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
          "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
          download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
          dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
          droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
          "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
          "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
          edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
          "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
          "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
          facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
          "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
          feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
          figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
          "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
          "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
          "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
          file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
          film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
          filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
          flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
          "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
          "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
          folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
          framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
          frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
          gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
          "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
          "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
          "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
          "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
          github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
          gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
          globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
          grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
          "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
          hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
          headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
          heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
          "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
          hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
          home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
          image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
          inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
          info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
          instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
          italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
          key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
          layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
          layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
          "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
          "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
          link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
          linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
          list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
          loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
          lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
          "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
          "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
          mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
          "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
          map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
          "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
          maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
          meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
          menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
          "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
          "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
          "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
          mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
          "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
          minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
          "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
          "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
          minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
          monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
          moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
          "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
          "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
          "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
          move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
          music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
          "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
          navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
          octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
          package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
          paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
          "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
          pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
          "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
          percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
          "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
          "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
          "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
          play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
          "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
          "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
          plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
          pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
          power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
          printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
          radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
          "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
          "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
          repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
          rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
          "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
          "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
          rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
          save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
          scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
          search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
          send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
          server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
          settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
          "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
          share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
          "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
          "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
          "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
          shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
          sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
          "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
          "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
          slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
          slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
          sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
          smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
          smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
          speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
          square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
          star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
          "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
          sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
          sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
          sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
          tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
          tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
          target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
          terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
          thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
          "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
          "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
          "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
          "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
          tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
          "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
          trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
          trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
          "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
          "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
          triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
          truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
          tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
          twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
          twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
          type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
          umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
          underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
          unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
          "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
          upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
          "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
          "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
          "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
          "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
          user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
          users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
          "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
          voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
          "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
          "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
          "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
          volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
          watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
          "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
          wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
          wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
          "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
          "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
          "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
          x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
          youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
          "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
          zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
          "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
          "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
      }
  }
  , function(e) {
      e.exports = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": 2,
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
      }
  }
  , function(e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var t = Object.assign || function(e) {
          for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                  Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
          }
          return e
      }
        , l = function() {
          function e(e, n) {
              for (var i = 0; i < n.length; i++) {
                  var t = n[i];
                  t.enumerable = t.enumerable || !1,
                  t.configurable = !0,
                  "value"in t && (t.writable = !0),
                  Object.defineProperty(e, t.key, t)
              }
          }
          return function(n, i, t) {
              return i && e(n.prototype, i),
              t && e(n, t),
              n
          }
      }()
        , r = a(i(22))
        , o = a(i(42));
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var c = function() {
          function e(n, i) {
              var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
              !function(e, n) {
                  if (!(e instanceof n))
                      throw new TypeError("Cannot call a class as a function")
              }(this, e),
              this.name = n,
              this.contents = i,
              this.tags = l,
              this.attrs = t({}, o.default, {
                  class: "feather feather-" + n
              })
          }
          return l(e, [{
              key: "toSvg",
              value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return "<svg " + function(e) {
                      return Object.keys(e).map(function(n) {
                          return n + '="' + e[n] + '"'
                      }).join(" ")
                  }(t({}, this.attrs, e, {
                      class: (0,
                      r.default)(this.attrs.class, e.class)
                  })) + ">" + this.contents + "</svg>"
              }
          }, {
              key: "toString",
              value: function() {
                  return this.contents
              }
          }]),
          e
      }();
      n.default = c
  }
  , function(e, n, i) {
      "use strict";
      var t = o(i(12))
        , l = o(i(39))
        , r = o(i(38));
      function o(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      e.exports = {
          icons: t.default,
          toSvg: l.default,
          replace: r.default
      }
  }
  , function(e, n, i) {
      e.exports = i(0)
  }
  , function(e, n, i) {
      var t = i(2)("iterator")
        , l = !1;
      try {
          var r = 0
            , o = {
              next: function() {
                  return {
                      done: !!r++
                  }
              },
              return: function() {
                  l = !0
              }
          };
          o[t] = function() {
              return this
          }
          ,
          Array.from(o, function() {
              throw 2
          })
      } catch (e) {}
      e.exports = function(e, n) {
          if (!n && !l)
              return !1;
          var i = !1;
          try {
              var r = {};
              r[t] = function() {
                  return {
                      next: function() {
                          return {
                              done: i = !0
                          }
                      }
                  }
              }
              ,
              e(r)
          } catch (e) {}
          return i
      }
  }
  , function(e, n, i) {
      var t = i(30)
        , l = i(2)("toStringTag")
        , r = "Arguments" == t(function() {
          return arguments
      }());
      e.exports = function(e) {
          var n, i, o;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function(e, n) {
              try {
                  return e[n]
              } catch (e) {}
          }(n = Object(e), l)) ? i : r ? t(n) : "Object" == (o = t(n)) && "function" == typeof n.callee ? "Arguments" : o
      }
  }
  , function(e, n, i) {
      var t = i(47)
        , l = i(9)
        , r = i(2)("iterator");
      e.exports = function(e) {
          if (void 0 != e)
              return e[r] || e["@@iterator"] || l[t(e)]
      }
  }
  , function(e, n, i) {
      "use strict";
      var t = i(18)
        , l = i(7)
        , r = i(10);
      e.exports = function(e, n, i) {
          var o = t(n);
          o in e ? l.f(e, o, r(0, i)) : e[o] = i
      }
  }
  , function(e, n, i) {
      var t = i(2)
        , l = i(9)
        , r = t("iterator")
        , o = Array.prototype;
      e.exports = function(e) {
          return void 0 !== e && (l.Array === e || o[r] === e)
      }
  }
  , function(e, n, i) {
      var t = i(3);
      e.exports = function(e, n, i, l) {
          try {
              return l ? n(t(i)[0], i[1]) : n(i)
          } catch (n) {
              var r = e.return;
              throw void 0 !== r && t(r.call(e)),
              n
          }
      }
  }
  , function(e, n) {
      e.exports = function(e) {
          if ("function" != typeof e)
              throw TypeError(String(e) + " is not a function");
          return e
      }
  }
  , function(e, n, i) {
      var t = i(52);
      e.exports = function(e, n, i) {
          if (t(e),
          void 0 === n)
              return e;
          switch (i) {
          case 0:
              return function() {
                  return e.call(n)
              }
              ;
          case 1:
              return function(i) {
                  return e.call(n, i)
              }
              ;
          case 2:
              return function(i, t) {
                  return e.call(n, i, t)
              }
              ;
          case 3:
              return function(i, t, l) {
                  return e.call(n, i, t, l)
              }
          }
          return function() {
              return e.apply(n, arguments)
          }
      }
  }
  , function(e, n, i) {
      "use strict";
      var t = i(53)
        , l = i(24)
        , r = i(51)
        , o = i(50)
        , a = i(27)
        , c = i(49)
        , p = i(48);
      e.exports = function(e) {
          var n, i, y, h, x = l(e), s = "function" == typeof this ? this : Array, u = arguments.length, d = u > 1 ? arguments[1] : void 0, f = void 0 !== d, g = 0, v = p(x);
          if (f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)),
          void 0 == v || s == Array && o(v))
              for (i = new s(n = a(x.length)); n > g; g++)
                  c(i, g, f ? d(x[g], g) : x[g]);
          else
              for (h = v.call(x),
              i = new s; !(y = h.next()).done; g++)
                  c(i, g, f ? r(h, d, [y.value, g], !0) : y.value);
          return i.length = g,
          i
      }
  }
  , function(e, n, i) {
      var t = i(32)
        , l = i(54);
      t({
          target: "Array",
          stat: !0,
          forced: !i(46)(function(e) {
              Array.from(e)
          })
      }, {
          from: l
      })
  }
  , function(e, n, i) {
      var t = i(6)
        , l = i(3);
      e.exports = function(e, n) {
          if (l(e),
          !t(n) && null !== n)
              throw TypeError("Can't set " + String(n) + " as a prototype")
      }
  }
  , function(e, n, i) {
      var t = i(56);
      e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
          var e, n = !1, i = {};
          try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []),
              n = i instanceof Array
          } catch (e) {}
          return function(i, l) {
              return t(i, l),
              n ? e.call(i, l) : i.__proto__ = l,
              i
          }
      }() : void 0)
  }
  , function(e, n, i) {
      var t = i(0).document;
      e.exports = t && t.documentElement
  }
  , function(e, n, i) {
      var t = i(28)
        , l = i(13);
      e.exports = Object.keys || function(e) {
          return t(e, l)
      }
  }
  , function(e, n, i) {
      var t = i(8)
        , l = i(7)
        , r = i(3)
        , o = i(59);
      e.exports = t ? Object.defineProperties : function(e, n) {
          r(e);
          for (var i, t = o(n), a = t.length, c = 0; a > c; )
              l.f(e, i = t[c++], n[i]);
          return e
      }
  }
  , function(e, n, i) {
      var t = i(3)
        , l = i(60)
        , r = i(13)
        , o = i(15)
        , a = i(58)
        , c = i(34)
        , p = i(16)("IE_PROTO")
        , y = function() {}
        , h = function() {
          var e, n = c("iframe"), i = r.length;
          for (n.style.display = "none",
          a.appendChild(n),
          n.src = String("javascript:"),
          (e = n.contentWindow.document).open(),
          e.write("<script>document.F=Object<\/script>"),
          e.close(),
          h = e.F; i--; )
              delete h.prototype[r[i]];
          return h()
      };
      e.exports = Object.create || function(e, n) {
          var i;
          return null !== e ? (y.prototype = t(e),
          i = new y,
          y.prototype = null,
          i[p] = e) : i = h(),
          void 0 === n ? i : l(i, n)
      }
      ,
      o[p] = !0
  }
  , function(e, n, i) {
      var t = i(4);
      e.exports = !!Object.getOwnPropertySymbols && !t(function() {
          return !String(Symbol())
      })
  }
  , function(e, n, i) {
      var t = i(4);
      e.exports = !t(function() {
          function e() {}
          return e.prototype.constructor = null,
          Object.getPrototypeOf(new e) !== e.prototype
      })
  }
  , function(e, n, i) {
      "use strict";
      var t = i(26).IteratorPrototype
        , l = i(61)
        , r = i(10)
        , o = i(23)
        , a = i(9)
        , c = function() {
          return this
      };
      e.exports = function(e, n, i) {
          var p = n + " Iterator";
          return e.prototype = l(t, {
              next: r(1, i)
          }),
          o(e, p, !1, !0),
          a[p] = c,
          e
      }
  }
  , function(e, n, i) {
      var t = i(4)
        , l = /#|\.prototype\./
        , r = function(e, n) {
          var i = a[o(e)];
          return i == p || i != c && ("function" == typeof n ? t(n) : !!n)
      }
        , o = r.normalize = function(e) {
          return String(e).replace(l, ".").toLowerCase()
      }
        , a = r.data = {}
        , c = r.NATIVE = "N"
        , p = r.POLYFILL = "P";
      e.exports = r
  }
  , function(e, n) {
      n.f = Object.getOwnPropertySymbols
  }
  , function(e, n, i) {
      var t = i(21)
        , l = Math.max
        , r = Math.min;
      e.exports = function(e, n) {
          var i = t(e);
          return i < 0 ? l(i + n, 0) : r(i, n)
      }
  }
  , function(e, n, i) {
      var t = i(14)
        , l = i(27)
        , r = i(67);
      e.exports = function(e) {
          return function(n, i, o) {
              var a, c = t(n), p = l(c.length), y = r(o, p);
              if (e && i != i) {
                  for (; p > y; )
                      if ((a = c[y++]) != a)
                          return !0
              } else
                  for (; p > y; y++)
                      if ((e || y in c) && c[y] === i)
                          return e || y || 0;
              return !e && -1
          }
      }
  }
  , function(e, n, i) {
      var t = i(28)
        , l = i(13).concat("length", "prototype");
      n.f = Object.getOwnPropertyNames || function(e) {
          return t(e, l)
      }
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(69)
        , r = i(66)
        , o = i(3)
        , a = t.Reflect;
      e.exports = a && a.ownKeys || function(e) {
          var n = l.f(o(e))
            , i = r.f;
          return i ? n.concat(i(e)) : n
      }
  }
  , function(e, n, i) {
      var t = i(1)
        , l = i(70)
        , r = i(31)
        , o = i(7);
      e.exports = function(e, n) {
          for (var i = l(n), a = o.f, c = r.f, p = 0; p < i.length; p++) {
              var y = i[p];
              t(e, y) || a(e, y, c(n, y))
          }
      }
  }
  , function(e, n, i) {
      var t = i(4)
        , l = i(30)
        , r = "".split;
      e.exports = t(function() {
          return !Object("z").propertyIsEnumerable(0)
      }) ? function(e) {
          return "String" == l(e) ? r.call(e, "") : Object(e)
      }
      : Object
  }
  , function(e, n, i) {
      "use strict";
      var t = {}.propertyIsEnumerable
        , l = Object.getOwnPropertyDescriptor
        , r = l && !t.call({
          1: 2
      }, 1);
      n.f = r ? function(e) {
          var n = l(this, e);
          return !!n && n.enumerable
      }
      : t
  }
  , function(e, n, i) {
      "use strict";
      var t = i(32)
        , l = i(64)
        , r = i(25)
        , o = i(57)
        , a = i(23)
        , c = i(5)
        , p = i(29)
        , y = i(2)
        , h = i(17)
        , x = i(9)
        , s = i(26)
        , u = s.IteratorPrototype
        , d = s.BUGGY_SAFARI_ITERATORS
        , f = y("iterator")
        , g = function() {
          return this
      };
      e.exports = function(e, n, i, y, s, v, m) {
          l(i, n, y);
          var w, M, b, z = function(e) {
              if (e === s && O)
                  return O;
              if (!d && e in H)
                  return H[e];
              switch (e) {
              case "keys":
              case "values":
              case "entries":
                  return function() {
                      return new i(this,e)
                  }
              }
              return function() {
                  return new i(this)
              }
          }, A = n + " Iterator", k = !1, H = e.prototype, V = H[f] || H["@@iterator"] || s && H[s], O = !d && V || z(s), j = "Array" == n && H.entries || V;
          if (j && (w = r(j.call(new e)),
          u !== Object.prototype && w.next && (h || r(w) === u || (o ? o(w, u) : "function" != typeof w[f] && c(w, f, g)),
          a(w, A, !0, !0),
          h && (x[A] = g))),
          "values" == s && V && "values" !== V.name && (k = !0,
          O = function() {
              return V.call(this)
          }
          ),
          h && !m || H[f] === O || c(H, f, O),
          x[n] = O,
          s)
              if (M = {
                  values: z("values"),
                  keys: v ? O : z("keys"),
                  entries: z("entries")
              },
              m)
                  for (b in M)
                      !d && !k && b in H || p(H, b, M[b]);
              else
                  t({
                      target: n,
                      proto: !0,
                      forced: d || k
                  }, M);
          return M
      }
  }
  , function(e, n) {
      var i;
      i = function() {
          return this
      }();
      try {
          i = i || Function("return this")() || (0,
          eval)("this")
      } catch (e) {
          "object" == typeof window && (i = window)
      }
      e.exports = i
  }
  , function(e, n, i) {
      var t = i(0)
        , l = i(36)
        , r = t.WeakMap;
      e.exports = "function" == typeof r && /native code/.test(l.call(r))
  }
  , function(e, n, i) {
      var t = i(21)
        , l = i(20);
      e.exports = function(e, n, i) {
          var r, o, a = String(l(e)), c = t(n), p = a.length;
          return c < 0 || c >= p ? i ? "" : void 0 : (r = a.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === p || (o = a.charCodeAt(c + 1)) < 56320 || o > 57343 ? i ? a.charAt(c) : r : i ? a.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536
      }
  }
  , function(e, n, i) {
      "use strict";
      var t = i(77)
        , l = i(37)
        , r = i(74)
        , o = l.set
        , a = l.getterFor("String Iterator");
      r(String, "String", function(e) {
          o(this, {
              type: "String Iterator",
              string: String(e),
              index: 0
          })
      }, function() {
          var e, n = a(this), i = n.string, l = n.index;
          return l >= i.length ? {
              value: void 0,
              done: !0
          } : (e = t(i, l, !0),
          n.index += e.length,
          {
              value: e,
              done: !1
          })
      })
  }
  , function(e, n, i) {
      i(78),
      i(55);
      var t = i(45);
      e.exports = t.Array.from
  }
  , function(e, n, i) {
      i(79),
      e.exports = i(44)
  }
  ])
});

/*!
* Name    : Just Another Parallax [Jarallax]
* Version : 1.12.2
* Author  : nK <https://nkdev.info>
* GitHub  : https://github.com/nk-o/jarallax
*/
!function(n) {
  var o = {};
  function i(e) {
      if (o[e])
          return o[e].exports;
      var t = o[e] = {
          i: e,
          l: !1,
          exports: {}
      };
      return n[e].call(t.exports, t, t.exports, i),
      t.l = !0,
      t.exports
  }
  i.m = n,
  i.c = o,
  i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
      })
  }
  ,
  i.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  i.t = function(t, e) {
      if (1 & e && (t = i(t)),
      8 & e)
          return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
      var n = Object.create(null);
      if (i.r(n),
      Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
      }),
      2 & e && "string" != typeof t)
          for (var o in t)
              i.d(n, o, function(e) {
                  return t[e]
              }
              .bind(null, o));
      return n
  }
  ,
  i.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      }
      : function() {
          return e
      }
      ;
      return i.d(t, "a", t),
      t
  }
  ,
  i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }
  ,
  i.p = "",
  i(i.s = 10)
}([, , function(e, t) {
  e.exports = function(e) {
      "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
          "interactive" === document.readyState && e.call()
      }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
  }
}
, function(n, e, t) {
  (function(e) {
      var t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
      n.exports = t
  }
  ).call(this, t(4))
}
, function(e, t) {
  function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      )(e)
  }
  var o = function() {
      return this
  }();
  try {
      o = o || new Function("return this")()
  } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
  }
  e.exports = o
}
, , , , , , function(e, t, n) {
  e.exports = n(11)
}
, function(e, t, n) {
  "use strict";
  n.r(t);
  var o = n(2)
    , i = n.n(o)
    , a = n(3)
    , r = n(12);
  function l(e) {
      return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      )(e)
  }
  var s, c, u = a.window.jarallax;
  a.window.jarallax = r.default,
  a.window.jarallax.noConflict = function() {
      return a.window.jarallax = u,
      this
  }
  ,
  void 0 !== a.jQuery && ((s = function() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
      Array.prototype.unshift.call(t, this);
      var o = r.default.apply(a.window, t);
      return "object" !== l(o) ? o : this
  }
  ).constructor = r.default.constructor,
  c = a.jQuery.fn.jarallax,
  a.jQuery.fn.jarallax = s,
  a.jQuery.fn.jarallax.noConflict = function() {
      return a.jQuery.fn.jarallax = c,
      this
  }
  ),
  i()(function() {
      Object(r.default)(document.querySelectorAll("[data-jarallax]"))
  })
}
, function(e, t, n) {
  "use strict";
  n.r(t);
  var o = n(2)
    , i = n.n(o)
    , b = n(3);
  function c(e, t) {
      return function(e) {
          if (Array.isArray(e))
              return e
      }(e) || function(e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
          var n = []
            , o = !0
            , i = !1
            , a = void 0;
          try {
              for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value),
              !t || n.length !== t); o = !0)
                  ;
          } catch (e) {
              i = !0,
              a = e
          } finally {
              try {
                  o || null == l.return || l.return()
              } finally {
                  if (i)
                      throw a
              }
          }
          return n
      }(e, t) || function(e, t) {
          if (!e)
              return;
          if ("string" == typeof e)
              return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n)
              return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return a(e, t)
      }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }
  function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++)
          o[n] = e[n];
      return o
  }
  function u(e) {
      return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      )(e)
  }
  function r(e, t) {
      for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1,
          o.configurable = !0,
          "value"in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
  }
  var l, h, d = b.window.navigator, p = -1 < d.userAgent.indexOf("MSIE ") || -1 < d.userAgent.indexOf("Trident/") || -1 < d.userAgent.indexOf("Edge/"), s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.userAgent), m = function() {
      for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n += 1)
          if (t && void 0 !== t.style[e[n]])
              return e[n];
      return !1
  }();
  function f() {
      h = s ? (!l && document.body && ((l = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",
      document.body.appendChild(l)),
      (l ? l.clientHeight : 0) || b.window.innerHeight || document.documentElement.clientHeight) : b.window.innerHeight || document.documentElement.clientHeight
  }
  f(),
  b.window.addEventListener("resize", f),
  b.window.addEventListener("orientationchange", f),
  b.window.addEventListener("load", f),
  i()(function() {
      f()
  });
  var g = [];
  function y() {
      g.length && (g.forEach(function(e, t) {
          var n = e.instance
            , o = e.oldData
            , i = n.$item.getBoundingClientRect()
            , a = {
              width: i.width,
              height: i.height,
              top: i.top,
              bottom: i.bottom,
              wndW: b.window.innerWidth,
              wndH: h
          }
            , r = !o || o.wndW !== a.wndW || o.wndH !== a.wndH || o.width !== a.width || o.height !== a.height
            , l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
          g[t].oldData = a,
          r && n.onResize(),
          l && n.onScroll()
      }),
      b.window.requestAnimationFrame(y))
  }
  function v(e, t) {
      ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === u(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
      for (var n, o = e.length, i = 0, a = arguments.length, r = new Array(2 < a ? a - 2 : 0), l = 2; l < a; l++)
          r[l - 2] = arguments[l];
      for (; i < o; i += 1)
          if ("object" === u(t) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i],t)) : e[i].jarallax && (n = e[i].jarallax[t].apply(e[i].jarallax, r)),
          void 0 !== n)
              return n;
      return e
  }
  var x = 0
    , w = function() {
      function s(e, t) {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, s);
          var n = this;
          n.instanceID = x,
          x += 1,
          n.$item = e,
          n.defaults = {
              type: "scroll",
              speed: .5,
              imgSrc: null,
              imgElement: ".jarallax-img",
              imgSize: "cover",
              imgPosition: "50% 50%",
              imgRepeat: "no-repeat",
              keepImg: !1,
              elementInViewport: null,
              zIndex: -100,
              disableParallax: !1,
              disableVideo: !1,
              videoSrc: null,
              videoStartTime: 0,
              videoEndTime: 0,
              videoVolume: 0,
              videoLoop: !0,
              videoPlayOnlyVisible: !0,
              videoLazyLoading: !0,
              onScroll: null,
              onInit: null,
              onDestroy: null,
              onCoverImage: null
          };
          var o, i, a = n.$item.dataset || {}, r = {};
          Object.keys(a).forEach(function(e) {
              var t = e.substr(0, 1).toLowerCase() + e.substr(1);
              t && void 0 !== n.defaults[t] && (r[t] = a[e])
          }),
          n.options = n.extend({}, n.defaults, r, t),
          n.pureOptions = n.extend({}, n.options),
          Object.keys(n.options).forEach(function(e) {
              "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
          }),
          n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))),
          "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)),
          n.options.disableParallax instanceof RegExp && (o = n.options.disableParallax,
          n.options.disableParallax = function() {
              return o.test(d.userAgent)
          }
          ),
          "function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
              return !1
          }
          ),
          "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)),
          n.options.disableVideo instanceof RegExp && (i = n.options.disableVideo,
          n.options.disableVideo = function() {
              return i.test(d.userAgent)
          }
          ),
          "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
              return !1
          }
          );
          var l = n.options.elementInViewport;
          l && "object" === u(l) && void 0 !== l.length && (l = c(l, 1)[0]),
          l instanceof Element || (l = null),
          n.options.elementInViewport = l,
          n.image = {
              src: n.options.imgSrc || null,
              $container: null,
              useImgTag: !1,
              position: /iPad|iPhone|iPod|Android/.test(d.userAgent) ? "absolute" : "fixed"
          },
          n.initImg() && n.canInitParallax() && n.init()
      }
      var e, t, n;
      return e = s,
      (t = [{
          key: "css",
          value: function(t, n) {
              return "string" == typeof n ? b.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && m && (n[m] = n.transform),
              Object.keys(n).forEach(function(e) {
                  t.style[e] = n[e]
              }),
              t)
          }
      }, {
          key: "extend",
          value: function(n) {
              for (var e = arguments.length, o = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++)
                  o[t - 1] = arguments[t];
              return n = n || {},
              Object.keys(o).forEach(function(t) {
                  o[t] && Object.keys(o[t]).forEach(function(e) {
                      n[e] = o[t][e]
                  })
              }),
              n
          }
      }, {
          key: "getWindowData",
          value: function() {
              return {
                  width: b.window.innerWidth || document.documentElement.clientWidth,
                  height: h,
                  y: document.documentElement.scrollTop
              }
          }
      }, {
          key: "initImg",
          value: function() {
              var e = this
                , t = e.options.imgElement;
              return t && "string" == typeof t && (t = e.$item.querySelector(t)),
              t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null),
              t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t,
              e.image.$itemParent = t.parentNode),
              e.image.useImgTag = !0),
              !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
              e.image.bgImage = e.css(e.$item, "background-image")),
              !(!e.image.bgImage || "none" === e.image.bgImage))
          }
      }, {
          key: "canInitParallax",
          value: function() {
              return m && !this.options.disableParallax()
          }
      }, {
          key: "init",
          value: function() {
              var e, t, n, o = this, i = {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden"
              }, a = {
                  pointerEvents: "none",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  willChange: "transform,opacity"
              };
              o.options.keepImg || ((e = o.$item.getAttribute("style")) && o.$item.setAttribute("data-jarallax-original-styles", e),
              !o.image.useImgTag || (t = o.image.$item.getAttribute("style")) && o.image.$item.setAttribute("data-jarallax-original-styles", t)),
              "static" === o.css(o.$item, "position") && o.css(o.$item, {
                  position: "relative"
              }),
              "auto" === o.css(o.$item, "z-index") && o.css(o.$item, {
                  zIndex: 0
              }),
              o.image.$container = document.createElement("div"),
              o.css(o.image.$container, i),
              o.css(o.image.$container, {
                  "z-index": o.options.zIndex
              }),
              p && o.css(o.image.$container, {
                  opacity: .9999
              }),
              o.image.$container.setAttribute("id", "jarallax-container-".concat(o.instanceID)),
              o.$item.appendChild(o.image.$container),
              o.image.useImgTag ? a = o.extend({
                  "object-fit": o.options.imgSize,
                  "object-position": o.options.imgPosition,
                  "font-family": "object-fit: ".concat(o.options.imgSize, "; object-position: ").concat(o.options.imgPosition, ";"),
                  "max-width": "none"
              }, i, a) : (o.image.$item = document.createElement("div"),
              o.image.src && (a = o.extend({
                  "background-position": o.options.imgPosition,
                  "background-size": o.options.imgSize,
                  "background-repeat": o.options.imgRepeat,
                  "background-image": o.image.bgImage || 'url("'.concat(o.image.src, '")')
              }, i, a))),
              "opacity" !== o.options.type && "scale" !== o.options.type && "scale-opacity" !== o.options.type && 1 !== o.options.speed || (o.image.position = "absolute"),
              "fixed" === o.image.position && (n = function(e) {
                  for (var t = []; null !== e.parentElement; )
                      1 === (e = e.parentElement).nodeType && t.push(e);
                  return t
              }(o.$item).filter(function(e) {
                  var t = b.window.getComputedStyle(e)
                    , n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                  return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
              }),
              o.image.position = n.length ? "absolute" : "fixed"),
              a.position = o.image.position,
              o.css(o.image.$item, a),
              o.image.$container.appendChild(o.image.$item),
              o.onResize(),
              o.onScroll(!0),
              o.options.onInit && o.options.onInit.call(o),
              "none" !== o.css(o.$item, "background-image") && o.css(o.$item, {
                  "background-image": "none"
              }),
              o.addToParallaxList()
          }
      }, {
          key: "addToParallaxList",
          value: function() {
              g.push({
                  instance: this
              }),
              1 === g.length && b.window.requestAnimationFrame(y)
          }
      }, {
          key: "removeFromParallaxList",
          value: function() {
              var n = this;
              g.forEach(function(e, t) {
                  e.instance.instanceID === n.instanceID && g.splice(t, 1)
              })
          }
      }, {
          key: "destroy",
          value: function() {
              var e = this;
              e.removeFromParallaxList();
              var t, n = e.$item.getAttribute("data-jarallax-original-styles");
              e.$item.removeAttribute("data-jarallax-original-styles"),
              n ? e.$item.setAttribute("style", n) : e.$item.removeAttribute("style"),
              e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"),
              e.image.$item.removeAttribute("data-jarallax-original-styles"),
              t ? e.image.$item.setAttribute("style", n) : e.image.$item.removeAttribute("style"),
              e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)),
              e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles),
              e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container),
              e.options.onDestroy && e.options.onDestroy.call(e),
              delete e.$item.jarallax
          }
      }, {
          key: "clipContainer",
          value: function() {
              var e, t, n, o, i;
              "fixed" === this.image.position && (n = (t = (e = this).image.$container.getBoundingClientRect()).width,
              o = t.height,
              e.$clipStyles || (e.$clipStyles = document.createElement("style"),
              e.$clipStyles.setAttribute("type", "text/css"),
              e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)),
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),
              i = "#jarallax-container-".concat(e.instanceID, " {\n           clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n           clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n        }"),
              e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i)
          }
      }, {
          key: "coverImage",
          value: function() {
              var e = this
                , t = e.image.$container.getBoundingClientRect()
                , n = t.height
                , o = e.options.speed
                , i = "scroll" === e.options.type || "scroll-opacity" === e.options.type
                , a = 0
                , r = n
                , l = 0;
              return i && (o < 0 ? (a = o * Math.max(n, h),
              h < n && (a -= o * (n - h))) : a = o * (n + h),
              1 < o ? r = Math.abs(a - h) : o < 0 ? r = a / o + Math.abs(a) : r += (h - n) * (1 - o),
              a /= 2),
              e.parallaxScrollDistance = a,
              l = i ? (h - r) / 2 : (n - r) / 2,
              e.css(e.image.$item, {
                  height: "".concat(r, "px"),
                  marginTop: "".concat(l, "px"),
                  left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                  width: "".concat(t.width, "px")
              }),
              e.options.onCoverImage && e.options.onCoverImage.call(e),
              {
                  image: {
                      height: r,
                      marginTop: l
                  },
                  container: t
              }
          }
      }, {
          key: "isVisible",
          value: function() {
              return this.isElementInViewport || !1
          }
      }, {
          key: "onScroll",
          value: function(e) {
              var t, n, o, i, a, r, l, s, c, u, d = this, p = d.$item.getBoundingClientRect(), m = p.top, f = p.height, g = {}, y = p;
              d.options.elementInViewport && (y = d.options.elementInViewport.getBoundingClientRect()),
              d.isElementInViewport = 0 <= y.bottom && 0 <= y.right && y.top <= h && y.left <= b.window.innerWidth,
              (e || d.isElementInViewport) && (t = Math.max(0, m),
              n = Math.max(0, f + m),
              o = Math.max(0, -m),
              i = Math.max(0, m + f - h),
              a = Math.max(0, f - (m + f - h)),
              r = Math.max(0, -m + h - f),
              l = 1 - (h - m) / (h + f) * 2,
              s = 1,
              f < h ? s = 1 - (o || i) / f : n <= h ? s = n / h : a <= h && (s = a / h),
              "opacity" !== d.options.type && "scale-opacity" !== d.options.type && "scroll-opacity" !== d.options.type || (g.transform = "translate3d(0,0,0)",
              g.opacity = s),
              "scale" !== d.options.type && "scale-opacity" !== d.options.type || (c = 1,
              d.options.speed < 0 ? c -= d.options.speed * s : c += d.options.speed * (1 - s),
              g.transform = "scale(".concat(c, ") translate3d(0,0,0)")),
              "scroll" !== d.options.type && "scroll-opacity" !== d.options.type || (u = d.parallaxScrollDistance * l,
              "absolute" === d.image.position && (u -= m),
              g.transform = "translate3d(0,".concat(u, "px,0)")),
              d.css(d.image.$item, g),
              d.options.onScroll && d.options.onScroll.call(d, {
                  section: p,
                  beforeTop: t,
                  beforeTopEnd: n,
                  afterTop: o,
                  beforeBottom: i,
                  beforeBottomEnd: a,
                  afterBottom: r,
                  visiblePercent: s,
                  fromViewportCenter: l
              }))
          }
      }, {
          key: "onResize",
          value: function() {
              this.coverImage(),
              this.clipContainer()
          }
      }]) && r(e.prototype, t),
      n && r(e, n),
      s
  }();
  v.constructor = w,
  t.default = v
}
]);
//# sourceMappingURL=jarallax.min.js.map

/*!
* CustomEase 3.2.6
* https://greensock.com
* 
* @license Copyright 2020, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/

!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
  "use strict";
  function m(e) {
      return Math.round(1e5 * e) / 1e5 || 0
  }
  var b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
    , w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
    , Y = Math.PI / 180
    , k = Math.sin
    , B = Math.cos
    , F = Math.abs
    , J = Math.sqrt;
  function arcToSegment(e, t, n, s, a, r, i, o, h) {
      if (e !== o || t !== h) {
          n = F(n),
          s = F(s);
          var u = a % 360 * Y
            , f = B(u)
            , c = k(u)
            , l = Math.PI
            , g = 2 * l
            , d = (e - o) / 2
            , m = (t - h) / 2
            , x = f * d + c * m
            , p = -c * d + f * m
            , y = x * x
            , M = p * p
            , v = y / (n * n) + M / (s * s);
          1 < v && (n = J(v) * n,
          s = J(v) * s);
          var C = n * n
            , E = s * s
            , b = (C * E - C * M - E * y) / (C * M + E * y);
          b < 0 && (b = 0);
          var w = (r === i ? -1 : 1) * J(b)
            , P = n * p / s * w
            , S = -s * x / n * w
            , N = f * P - c * S + (e + o) / 2
            , D = c * P + f * S + (t + h) / 2
            , T = (x - P) / n
            , V = (p - S) / s
            , _ = (-x - P) / n
            , q = (-p - S) / s
            , A = T * T + V * V
            , R = (V < 0 ? -1 : 1) * Math.acos(T / J(A))
            , G = (T * q - V * _ < 0 ? -1 : 1) * Math.acos((T * _ + V * q) / J(A * (_ * _ + q * q)));
          isNaN(G) && (G = l),
          !i && 0 < G ? G -= g : i && G < 0 && (G += g),
          R %= g,
          G %= g;
          var L, O = Math.ceil(F(G) / (g / 4)), j = [], z = G / O, I = 4 / 3 * k(z / 2) / (1 + B(z / 2)), H = f * n, Q = c * n, Z = c * -s, U = f * s;
          for (L = 0; L < O; L++)
              x = B(a = R + L * z),
              p = k(a),
              T = B(a += z),
              V = k(a),
              j.push(x - I * p, p + I * x, T + I * V, V - I * T, T, V);
          for (L = 0; L < j.length; L += 2)
              x = j[L],
              p = j[L + 1],
              j[L] = x * H + p * Z + N,
              j[L + 1] = x * Q + p * U + D;
          return j[L - 2] = o,
          j[L - 1] = h,
          j
      }
  }
  function stringToRawPath(e) {
      function db(e, t, n, s) {
          f = (n - e) / 3,
          c = (s - t) / 3,
          o.push(e + f, t + c, n - f, s - c, n, s)
      }
      var t, n, s, a, r, i, o, h, u, f, c, l, g, d, m, x = (e + "").replace(w, function(e) {
          var t = +e;
          return t < 1e-4 && -1e-4 < t ? 0 : t
      }).match(b) || [], p = [], y = 0, M = 0, v = x.length, C = 0, E = "ERROR: malformed path: " + e;
      if (!e || !isNaN(x[0]) || isNaN(x[1]))
          return console.log(E),
          p;
      for (t = 0; t < v; t++)
          if (g = r,
          isNaN(x[t]) ? i = (r = x[t].toUpperCase()) !== x[t] : t--,
          s = +x[t + 1],
          a = +x[t + 2],
          i && (s += y,
          a += M),
          t || (h = s,
          u = a),
          "M" === r)
              o && (o.length < 8 ? --p.length : C += o.length),
              y = h = s,
              M = u = a,
              o = [s, a],
              p.push(o),
              t += 2,
              r = "L";
          else if ("C" === r)
              i || (y = M = 0),
              (o = o || [0, 0]).push(s, a, y + 1 * x[t + 3], M + 1 * x[t + 4], y += 1 * x[t + 5], M += 1 * x[t + 6]),
              t += 6;
          else if ("S" === r)
              f = y,
              c = M,
              "C" !== g && "S" !== g || (f += y - o[o.length - 4],
              c += M - o[o.length - 3]),
              i || (y = M = 0),
              o.push(f, c, s, a, y += 1 * x[t + 3], M += 1 * x[t + 4]),
              t += 4;
          else if ("Q" === r)
              f = y + 2 / 3 * (s - y),
              c = M + 2 / 3 * (a - M),
              i || (y = M = 0),
              y += 1 * x[t + 3],
              M += 1 * x[t + 4],
              o.push(f, c, y + 2 / 3 * (s - y), M + 2 / 3 * (a - M), y, M),
              t += 4;
          else if ("T" === r)
              f = y - o[o.length - 4],
              c = M - o[o.length - 3],
              o.push(y + f, M + c, s + 2 / 3 * (y + 1.5 * f - s), a + 2 / 3 * (M + 1.5 * c - a), y = s, M = a),
              t += 2;
          else if ("H" === r)
              db(y, M, y = s, M),
              t += 1;
          else if ("V" === r)
              db(y, M, y, M = s + (i ? M - y : 0)),
              t += 1;
          else if ("L" === r || "Z" === r)
              "Z" === r && (s = h,
              a = u,
              o.closed = !0),
              ("L" === r || .5 < F(y - s) || .5 < F(M - a)) && (db(y, M, s, a),
              "L" === r && (t += 2)),
              y = s,
              M = a;
          else if ("A" === r) {
              if (d = x[t + 4],
              m = x[t + 5],
              f = x[t + 6],
              c = x[t + 7],
              n = 7,
              1 < d.length && (d.length < 3 ? (c = f,
              f = m,
              n--) : (c = m,
              f = d.substr(2),
              n -= 2),
              m = d.charAt(1),
              d = d.charAt(0)),
              l = arcToSegment(y, M, +x[t + 1], +x[t + 2], +x[t + 3], +d, +m, (i ? y : 0) + 1 * f, (i ? M : 0) + 1 * c),
              t += n,
              l)
                  for (n = 0; n < l.length; n++)
                      o.push(l[n]);
              y = o[o.length - 2],
              M = o[o.length - 1]
          } else
              console.log(E);
      return (t = o.length) < 6 ? (p.pop(),
      t = 0) : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0),
      p.totalPoints = C + t,
      p
  }
  function p() {
      return M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M
  }
  function q() {
      (M = p()) ? (M.registerEase("_CE", n.create),
      a = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
  }
  function s(e) {
      return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3
  }
  function x(e, t, n, s, a, r, i, o, h, u, f) {
      var c, l = (e + n) / 2, g = (t + s) / 2, d = (n + a) / 2, m = (s + r) / 2, p = (a + i) / 2, y = (r + o) / 2, M = (l + d) / 2, v = (g + m) / 2, C = (d + p) / 2, E = (m + y) / 2, b = (M + C) / 2, w = (v + E) / 2, P = i - e, S = o - t, N = Math.abs((n - i) * S - (s - o) * P), D = Math.abs((a - i) * S - (r - o) * P);
      return u || (u = [{
          x: e,
          y: t
      }, {
          x: i,
          y: o
      }],
      f = 1),
      u.splice(f || u.length - 1, 0, {
          x: b,
          y: w
      }),
      h * (P * P + S * S) < (N + D) * (N + D) && (c = u.length,
      x(e, t, l, g, M, v, b, w, h, u, f),
      x(b, w, C, E, p, y, i, o, h, u, f + 1 + (u.length - c))),
      u
  }
  var M, a, t, y = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, v = /[cLlsSaAhHvVtTqQ]/g, n = ((t = CustomEase.prototype).setData = function setData(e, t) {
      t = t || {};
      var n, s, a, r, i, o, h, u, f, c = (e = e || "0,0,1,1").match(y), l = 1, g = [], d = [], m = t.precision || 1, p = m <= 1;
      if (this.data = e,
      (v.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (c = stringToRawPath(e)[0]),
      4 === (n = c.length))
          c.unshift(0, 0),
          c.push(1, 1),
          n = 8;
      else if ((n - 2) % 6)
          throw "Invalid CustomEase";
      for (0 == +c[0] && 1 == +c[n - 2] || function _normalize(e, t, n) {
          n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
          var s, a = -1 * e[0], r = -n, i = e.length, o = 1 / (+e[i - 2] + a), h = -t || (Math.abs(e[i - 1] - e[1]) < .01 * (e[i - 2] - e[0]) ? function _findMinimum(e) {
              var t, n = e.length, s = 1e20;
              for (t = 1; t < n; t += 6)
                  +e[t] < s && (s = +e[t]);
              return s
          }(e) + r : +e[i - 1] + r);
          for (h = h ? 1 / h : -o,
          s = 0; s < i; s += 2)
              e[s] = (+e[s] + a) * o,
              e[s + 1] = (+e[s + 1] + r) * h
      }(c, t.height, t.originY),
      this.segment = c,
      r = 2; r < n; r += 6)
          s = {
              x: +c[r - 2],
              y: +c[r - 1]
          },
          a = {
              x: +c[r + 4],
              y: +c[r + 5]
          },
          g.push(s, a),
          x(s.x, s.y, +c[r], +c[r + 1], +c[r + 2], +c[r + 3], a.x, a.y, 1 / (2e5 * m), g, g.length - 1);
      for (n = g.length,
      r = 0; r < n; r++)
          h = g[r],
          u = g[r - 1] || h,
          h.x > u.x || u.y !== h.y && u.x === h.x || h === u ? (u.cx = h.x - u.x,
          u.cy = h.y - u.y,
          u.n = h,
          u.nx = h.x,
          p && 1 < r && 2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) && (p = 0),
          u.cx < l && (u.cx ? l = u.cx : (u.cx = .001,
          r === n - 1 && (u.x -= .001,
          l = Math.min(l, .001),
          p = 0)))) : (g.splice(r--, 1),
          n--);
      if (i = 1 / (n = 1 / l + 1 | 0),
      h = g[o = 0],
      p) {
          for (r = 0; r < n; r++)
              f = r * i,
              h.nx < f && (h = g[++o]),
              s = h.y + (f - h.x) / h.cx * h.cy,
              d[r] = {
                  x: f,
                  cx: i,
                  y: s,
                  cy: 0,
                  nx: 9
              },
              r && (d[r - 1].cy = s - d[r - 1].y);
          d[n - 1].cy = g[g.length - 1].y - s
      } else {
          for (r = 0; r < n; r++)
              h.nx < r * i && (h = g[++o]),
              d[r] = h;
          o < g.length - 1 && (d[r - 1] = g[g.length - 2])
      }
      return this.ease = function(e) {
          var t = d[e * n | 0] || d[n - 1];
          return t.nx < e && (t = t.n),
          t.y + (e - t.x) / t.cx * t.cy
      }
      ,
      (this.ease.custom = this).id && M.registerEase(this.id, this.ease),
      this
  }
  ,
  t.getSVGData = function getSVGData(e) {
      return CustomEase.getSVGData(this, e)
  }
  ,
  CustomEase.create = function create(e, t, n) {
      return new CustomEase(e,t,n).ease
  }
  ,
  CustomEase.register = function register(e) {
      M = e,
      q()
  }
  ,
  CustomEase.get = function get(e) {
      return M.parseEase(e)
  }
  ,
  CustomEase.getSVGData = function getSVGData(e, t) {
      var n, a, r, i, o, h, u, f, c, l, g = (t = t || {}).width || 100, d = t.height || 100, x = t.x || 0, p = (t.y || 0) + d, y = M.utils.toArray(t.path)[0];
      if (t.invert && (d = -d,
      p = 0),
      "string" == typeof e && (e = M.parseEase(e)),
      e.custom && (e = e.custom),
      e instanceof CustomEase)
          n = function rawPathToString(e) {
              !function _isNumber(e) {
                  return "number" == typeof e
              }(e[0]) || (e = [e]);
              var t, n, s, a, r = "", i = e.length;
              for (n = 0; n < i; n++) {
                  for (a = e[n],
                  r += "M" + m(a[0]) + "," + m(a[1]) + " C",
                  t = a.length,
                  s = 2; s < t; s++)
                      r += m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s]) + " ";
                  a.closed && (r += "z")
              }
              return r
          }(function transformRawPath(e, t, n, s, a, r, i) {
              for (var o, h, u, f, c, l = e.length; -1 < --l; )
                  for (h = (o = e[l]).length,
                  u = 0; u < h; u += 2)
                      f = o[u],
                      c = o[u + 1],
                      o[u] = f * t + c * s + r,
                      o[u + 1] = f * n + c * a + i;
              return e._dirty = 1,
              e
          }([e.segment], g, 0, 0, -d, x, p));
      else {
          for (n = [x, p],
          i = 1 / (u = Math.max(5, 200 * (t.precision || 1))),
          f = 5 / (u += 2),
          c = s(x + i * g),
          a = ((l = s(p + e(i) * -d)) - p) / (c - x),
          r = 2; r < u; r++)
              o = s(x + r * i * g),
              h = s(p + e(r * i) * -d),
              (Math.abs((h - l) / (o - c) - a) > f || r === u - 1) && (n.push(c, l),
              a = (h - l) / (o - c)),
              c = o,
              l = h;
          n = "M" + n.join(",")
      }
      return y && y.setAttribute("d", n),
      n
  }
  ,
  CustomEase);
  function CustomEase(e, t, n) {
      a || q(),
      this.id = e,
      this.setData(t, n)
  }
  p() && M.registerPlugin(n),
  n.version = "3.2.6",
  e.CustomEase = n,
  e.default = n;
  if (typeof (window) === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  } else {
      delete e.default
  }
});

/*!
* GSAP 3.3.4
* https://greensock.com
* 
* @license Copyright 2020, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/

!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
  "use strict";
  function _inheritsLoose(t, e) {
      t.prototype = Object.create(e.prototype),
      (t.prototype.constructor = t).__proto__ = e
  }
  function _assertThisInitialized(t) {
      if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
  }
  function n(t) {
      return "string" == typeof t
  }
  function o(t) {
      return "function" == typeof t
  }
  function p(t) {
      return "number" == typeof t
  }
  function q(t) {
      return void 0 === t
  }
  function r(t) {
      return "object" == typeof t
  }
  function s(t) {
      return !1 !== t
  }
  function t() {
      return "undefined" != typeof window
  }
  function u(t) {
      return o(t) || n(t)
  }
  function K(t) {
      return (l = pt(t, at)) && ie
  }
  function L(t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
  }
  function M(t, e) {
      return !e && console.warn(t)
  }
  function N(t, e) {
      return t && (at[t] = e) && l && (l[t] = e) || at
  }
  function O() {
      return 0
  }
  function Y(t) {
      var e, i, n = t[0];
      if (r(n) || o(n) || (t = [t]),
      !(e = (n._gsap || {}).harness)) {
          for (i = dt.length; i-- && !dt[i].targetTest(n); )
              ;
          e = dt[i]
      }
      for (i = t.length; i--; )
          t[i] && (t[i]._gsap || (t[i]._gsap = new Ft(t[i],e))) || t.splice(i, 1);
      return t
  }
  function Z(t) {
      return t._gsap || Y(yt(t))[0]._gsap
  }
  function $(t, e) {
      var r = t[e];
      return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r
  }
  function _(t, e) {
      return (t = t.split(",")).forEach(e) || t
  }
  function aa(t) {
      return Math.round(1e5 * t) / 1e5 || 0
  }
  function ba(t, e) {
      for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
          ;
      return i < r
  }
  function ca(t, e, r) {
      var i, n = p(t[1]), a = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
      if (n && (o.duration = t[1]),
      o.parent = r,
      e) {
          for (i = o; r && !("immediateRender"in i); )
              i = r.vars.defaults || {},
              r = s(r.vars.inherit) && r.parent;
          o.immediateRender = s(i.immediateRender),
          e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
      }
      return o
  }
  function da() {
      var t, e, r = ot.length, i = ot.slice(0);
      for (ut = {},
      t = ot.length = 0; t < r; t++)
          (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
  }
  function ea(t, e, r, i) {
      ot.length && da(),
      t.render(e, r, i),
      ot.length && da()
  }
  function fa(t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t
  }
  function ga(t) {
      return t
  }
  function ha(t, e) {
      for (var r in e)
          r in t || (t[r] = e[r]);
      return t
  }
  function ia(t, e) {
      for (var r in e)
          r in t || "duration" === r || "ease" === r || (t[r] = e[r])
  }
  function ka(t, e) {
      for (var i in e)
          t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
      return t
  }
  function la(t, e) {
      var r, i = {};
      for (r in t)
          r in e || (i[r] = t[r]);
      return i
  }
  function ma(t) {
      var e = t.parent || F
        , r = t.keyframes ? ia : ha;
      if (s(t.inherit))
          for (; e; )
              r(t, e.vars.defaults),
              e = e.parent || e._dp;
      return t
  }
  function pa(t, e, r, i) {
      void 0 === r && (r = "_first"),
      void 0 === i && (i = "_last");
      var n = e._prev
        , a = e._next;
      n ? n._next = a : t[r] === e && (t[r] = a),
      a ? a._prev = n : t[i] === e && (t[i] = n),
      e._next = e._prev = e.parent = null
  }
  function qa(t, e) {
      !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
      t._act = 0
  }
  function ra(t) {
      for (var e = t; e; )
          e._dirty = 1,
          e = e.parent;
      return t
  }
  function ua(t) {
      return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0
  }
  function wa(t, e) {
      return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
  }
  function xa(t) {
      return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0))
  }
  function ya(t, e) {
      var r;
      if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e),
      (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)),
      ra(t)._dp && t._initted && t._time >= t._dur && t._ts) {
          if (t._dur < t.duration())
              for (r = t; r._dp; )
                  0 <= r.rawTime() && r.totalTime(r._tTime),
                  r = r._dp;
          t._zTime = -B
      }
  }
  function za(t, e, r, i) {
      return e.parent && qa(e),
      e._start = aa(r + e._delay),
      e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
      function _addLinkedListItem(t, e, r, i, n) {
          void 0 === r && (r = "_first"),
          void 0 === i && (i = "_last");
          var a, s = t[i];
          if (n)
              for (a = e[n]; s && s[n] > a; )
                  s = s._prev;
          s ? (e._next = s._next,
          s._next = e) : (e._next = t[r],
          t[r] = e),
          e._next ? e._next._prev = e : t[i] = e,
          e._prev = s,
          e.parent = e._dp = t
      }(t, e, "_first", "_last", t._sort ? "_start" : 0),
      t._recent = e,
      i || ya(t, e),
      t
  }
  function Aa(t, e) {
      return (at.ScrollTrigger || L("scrollTrigger", e)) && at.ScrollTrigger.create(e, t)
  }
  function Ba(t, e, r, i) {
      return qt(t, e),
      t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Mt.frame ? (ot.push(t),
      t._lazy = [e, i],
      1) : void 0 : 1
  }
  function Ea(t, e, r) {
      var i = t._repeat
        , n = aa(e) || 0;
      return t._dur = n,
      t._tDur = i ? i < 0 ? 1e10 : aa(n * (i + 1) + t._rDelay * i) : n,
      t._time > n && (t._time = n,
      t._tTime = Math.min(t._tTime, t._tDur)),
      r || ra(t.parent),
      t.parent && xa(t),
      t
  }
  function Fa(t) {
      return t instanceof Bt ? ra(t) : Ea(t, t._dur)
  }
  function Ha(t, e) {
      var r, i, a = t.labels, s = t._recent || mt, o = t.duration() >= E ? s.endTime(!1) : t._dur;
      return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o),
      a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)),
      1 < r ? Ha(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e
  }
  function Ia(t, e) {
      return t || 0 === t ? e(t) : e
  }
  function Ka(t) {
      return (t + "").substr((parseFloat(t) + "").length)
  }
  function Na(t, e) {
      return t && r(t) && "length"in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i
  }
  function Qa(t) {
      return t.sort(function() {
          return .5 - Math.random()
      })
  }
  function Ra(t) {
      if (o(t))
          return t;
      var p = r(t) ? t : {
          each: t
      }
        , _ = zt(p.ease)
        , m = p.from || 0
        , g = parseFloat(p.base) || 0
        , v = {}
        , e = 0 < m && m < 1
        , y = isNaN(m) || e
        , T = p.axis
        , b = m
        , w = m;
      return n(m) ? b = w = {
          center: .5,
          edges: .5,
          end: 1
      }[m] || 0 : !e && y && (b = m[0],
      w = m[1]),
      function(t, e, r) {
          var i, n, a, s, o, u, h, l, f, d = (r || p).length, c = v[d];
          if (!c) {
              if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, E])[1])) {
                  for (h = -E; h < (h = r[f++].getBoundingClientRect().left) && f < d; )
                      ;
                  f--
              }
              for (c = v[d] = [],
              i = y ? Math.min(f, d) * b - .5 : m % f,
              n = y ? d * w / f - .5 : m / f | 0,
              l = E,
              u = h = 0; u < d; u++)
                  a = u % f - i,
                  s = n - (u / f | 0),
                  c[u] = o = T ? Math.abs("y" === T ? s : a) : V(a * a + s * s),
                  h < o && (h = o),
                  o < l && (l = o);
              "random" === m && Qa(c),
              c.max = h - l,
              c.min = l,
              c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1),
              c.b = d < 0 ? g - d : g,
              c.u = Ka(p.amount || p.each) || 0,
              _ = _ && d < 0 ? At(_) : _
          }
          return d = (c[t] - c.min) / c.max || 0,
          aa(c.b + (_ ? _(d) : d) * c.v) + c.u
      }
  }
  function Sa(e) {
      var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
      return function(t) {
          return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Ka(t))
      }
  }
  function Ta(u, t) {
      var h, l, e = W(u);
      return !e && r(u) && (h = e = u.radius || E,
      u.values ? (u = yt(u.values),
      (l = !p(u[0])) && (h *= h)) : u = Sa(u.increment)),
      Ia(t, e ? o(u) ? function(t) {
          return l = u(t),
          Math.abs(l - t) <= h ? l : t
      }
      : function(t) {
          for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = E, s = 0, o = u.length; o--; )
              (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e,
              s = o);
          return s = !h || a <= h ? u[s] : t,
          l || s === t || p(t) ? s : s + Ka(t)
      }
      : Sa(u))
  }
  function Ua(t, e, r, i) {
      return Ia(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
          return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
      })
  }
  function Ya(e, r, t) {
      return Ia(t, function(t) {
          return e[~~r(t)]
      })
  }
  function _a(t) {
      for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
          i = t.indexOf(")", e),
          n = "[" === t.charAt(e + 7),
          r = t.substr(e + 7, i - e - 7).match(n ? nt : G),
          s += t.substr(a, e - a) + Ua(n ? r : +r[0], +r[1], +r[2] || 1e-5),
          a = i + 1;
      return s + t.substr(a, t.length - a)
  }
  function cb(t, e, r) {
      var i, n, a, s = t.labels, o = E;
      for (i in s)
          (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i,
          o = n);
      return a
  }
  function eb(t) {
      return qa(t),
      t.progress() < 1 && bt(t, "onInterrupt"),
      t
  }
  function jb(t, e, r) {
      return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0
  }
  function kb(t, e, r) {
      var i, n, a, s, o, u, h, l, f, d, c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : xt.black;
      if (!c) {
          if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
          xt[t])
              c = xt[t];
          else if ("#" === t.charAt(0))
              4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a),
              c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];
          else if ("hsl" === t.substr(0, 3))
              if (c = d = t.match(G),
              e) {
                  if (~t.indexOf("="))
                      return c = t.match(J),
                      r && c.length < 4 && (c[3] = 1),
                      c
              } else
                  s = +c[0] % 360 / 360,
                  o = c[1] / 100,
                  i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                  3 < c.length && (c[3] *= 1),
                  c[0] = jb(s + 1 / 3, i, n),
                  c[1] = jb(s, i, n),
                  c[2] = jb(s - 1 / 3, i, n);
          else
              c = t.match(G) || xt.transparent;
          c = c.map(Number)
      }
      return e && !d && (i = c[0] / wt,
      n = c[1] / wt,
      a = c[2] / wt,
      u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2,
      h === l ? s = o = 0 : (f = h - l,
      o = .5 < u ? f / (2 - h - l) : f / (h + l),
      s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4,
      s *= 60),
      c[0] = ~~(s + .5),
      c[1] = ~~(100 * o + .5),
      c[2] = ~~(100 * u + .5)),
      r && c.length < 4 && (c[3] = 1),
      c
  }
  function lb(t) {
      var r = []
        , i = []
        , n = -1;
      return t.split(kt).forEach(function(t) {
          var e = t.match(tt) || [];
          r.push.apply(r, e),
          i.push(n += e.length + 1)
      }),
      r.c = i,
      r
  }
  function mb(t, e, r) {
      var i, n, a, s, o = "", u = (t + o).match(kt), h = e ? "hsla(" : "rgba(", l = 0;
      if (!u)
          return t;
      if (u = u.map(function(t) {
          return (t = kb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
      }),
      r && (a = lb(t),
      (i = r.c).join(o) !== a.c.join(o)))
          for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++)
              o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
      if (!n)
          for (s = (n = t.split(kt)).length - 1; l < s; l++)
              o += n[l] + u[l];
      return o + n[s]
  }
  function pb(t) {
      var e, r = t.join(" ");
      if (kt.lastIndex = 0,
      kt.test(r))
          return e = Ot.test(r),
          t[1] = mb(t[1], e),
          t[0] = mb(t[0], e, lb(t[1])),
          !0
  }
  function xb(t) {
      var e = (t + "").split("(")
        , r = Ct[e[0]];
      return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
          for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
              r = a[o],
              e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
              i = r.substr(0, e),
              n[s] = isNaN(i) ? i.replace(Dt, "").trim() : +i,
              s = r.substr(e + 1).trim();
          return n
      }(e[1])] : rt.exec(t)[1].split(",").map(fa)) : Ct._CE && St.test(t) ? Ct._CE("", t) : r
  }
  function zb(t, e) {
      for (var r, i = t._first; i; )
          i instanceof Bt ? zb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? zb(i.timeline, e) : (r = i._ease,
          i._ease = i._yEase,
          i._yEase = r,
          i._yoyo = e)),
          i = i._next
  }
  function Bb(t, e, r, i) {
      void 0 === r && (r = function easeOut(t) {
          return 1 - e(1 - t)
      }
      ),
      void 0 === i && (i = function easeInOut(t) {
          return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
      }
      );
      var n, a = {
          easeIn: e,
          easeOut: r,
          easeInOut: i
      };
      return _(t, function(t) {
          for (var e in Ct[t] = at[t] = a,
          Ct[n = t.toLowerCase()] = r,
          a)
              Ct[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ct[t + "." + e] = a[e]
      }),
      a
  }
  function Cb(e) {
      return function(t) {
          return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
      }
  }
  function Db(r, t, e) {
      function el(t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * n) + 1
      }
      var i = 1 <= t ? t : 1
        , n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)
        , a = n / I * (Math.asin(1 / i) || 0)
        , s = "out" === r ? el : "in" === r ? function(t) {
          return 1 - el(1 - t)
      }
      : Cb(el);
      return n = I / n,
      s.config = function(t, e) {
          return Db(r, t, e)
      }
      ,
      s
  }
  function Eb(e, r) {
      function ml(t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0
      }
      void 0 === r && (r = 1.70158);
      var t = "out" === e ? ml : "in" === e ? function(t) {
          return 1 - ml(1 - t)
      }
      : Cb(ml);
      return t.config = function(t) {
          return Eb(e, t)
      }
      ,
      t
  }
  var F, i, a, h, l, f, d, c, m, g, v, y, T, b, w, x, k, P, C, S, D, A, z, U = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
          lineHeight: ""
      }
  }, R = {
      duration: .5,
      overwrite: !1,
      delay: 0
  }, E = 1e8, B = 1 / E, I = 2 * Math.PI, H = I / 4, X = 0, V = Math.sqrt, j = Math.cos, Q = Math.sin, W = Array.isArray, G = /(?:-?\.?\d|\.)+/gi, J = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, rt = /\(([^()]+)\)/i, it = /[+-]=-?[\.\d]+/, nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi, at = {}, st = {}, ot = [], ut = {}, ht = {}, lt = {}, ft = 30, dt = [], ct = "", pt = function _merge(t, e) {
      for (var r in e)
          t[r] = e[r];
      return t
  }, _t = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
  }, mt = {
      _start: 0,
      endTime: O
  }, gt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r
  }, vt = [].slice, yt = function toArray(t, e) {
      return !n(t) || e || !a && Pt() ? W(t) ? function _flatten(t, e, r) {
          return void 0 === r && (r = []),
          t.forEach(function(t) {
              return n(t) && !e || Na(t, 1) ? r.push.apply(r, yt(t)) : r.push(t)
          }) || r
      }(t, e) : Na(t) ? vt.call(t, 0) : t ? [t] : [] : vt.call(h.querySelectorAll(t), 0)
  }, Tt = function mapRange(e, t, r, i, n) {
      var a = t - e
        , s = i - r;
      return Ia(n, function(t) {
          return r + ((t - e) / a * s || 0)
      })
  }, bt = function _callback(t, e, r) {
      var i, n, a = t.vars, s = a[e];
      if (s)
          return i = a[e + "Params"],
          n = a.callbackScope || t,
          r && ot.length && da(),
          i ? s.apply(n, i) : s.call(n)
  }, wt = 255, xt = {
      aqua: [0, wt, wt],
      lime: [0, wt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, wt],
      navy: [0, 0, 128],
      white: [wt, wt, wt],
      olive: [128, 128, 0],
      yellow: [wt, wt, 0],
      orange: [wt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [wt, 0, 0],
      pink: [wt, 192, 203],
      cyan: [0, wt, wt],
      transparent: [wt, wt, wt, 0]
  }, kt = function() {
      var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in xt)
          e += "|" + t + "\\b";
      return new RegExp(e + ")","gi")
  }(), Ot = /hsl[a]?\(/, Mt = (b = Date.now,
  w = 500,
  x = 33,
  k = b(),
  P = k,
  S = C = 1 / 240,
  T = {
      time: 0,
      frame: 0,
      tick: function tick() {
          gk(!0)
      },
      wake: function wake() {
          f && (!a && t() && (i = a = window,
          h = i.document || {},
          at.gsap = ie,
          (i.gsapVersions || (i.gsapVersions = [])).push(ie.version),
          K(l || i.GreenSockGlobals || !i.gsap && i || {}),
          y = i.requestAnimationFrame),
          g && T.sleep(),
          v = y || function(t) {
              return setTimeout(t, 1e3 * (S - T.time) + 1 | 0)
          }
          ,
          m = 1,
          gk(2))
      },
      sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(g),
          m = 0,
          v = O
      },
      lagSmoothing: function lagSmoothing(t, e) {
          w = t || 1e8,
          x = Math.min(e, w, 0)
      },
      fps: function fps(t) {
          C = 1 / (t || 240),
          S = T.time + C
      },
      add: function add(t) {
          D.indexOf(t) < 0 && D.push(t),
          Pt()
      },
      remove: function remove(t) {
          var e;
          ~(e = D.indexOf(t)) && D.splice(e, 1)
      },
      _listeners: D = []
  }), Pt = function _wake() {
      return !m && Mt.wake()
  }, Ct = {}, St = /^[\d.\-M][\d.\-,\s]/, Dt = /["']/g, At = function _invertEase(e) {
      return function(t) {
          return 1 - e(1 - t)
      }
  }, zt = function _parseEase(t, e) {
      return t && (o(t) ? t : Ct[t] || xb(t)) || e
  };
  function gk(e) {
      var t, r, i = b() - P, n = !0 === e;
      w < i && (k += i - x),
      P += i,
      T.time = (P - k) / 1e3,
      (0 < (t = T.time - S) || n) && (T.frame++,
      S += t + (C <= t ? .004 : C - t),
      r = 1),
      n || (g = v(gk)),
      r && D.forEach(function(t) {
          return t(T.time, i, T.frame, e)
      })
  }
  function Dl(t) {
      return t < z ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / 2.75) * t + .9375 : A * Math.pow(t - 2.625 / 2.75, 2) + .984375
  }
  _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
      var r = e < 5 ? e + 1 : e;
      Bb(t + ",Power" + (r - 1), e ? function(t) {
          return Math.pow(t, r)
      }
      : function(t) {
          return t
      }
      , function(t) {
          return 1 - Math.pow(1 - t, r)
      }, function(t) {
          return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
      })
  }),
  Ct.Linear.easeNone = Ct.none = Ct.Linear.easeIn,
  Bb("Elastic", Db("in"), Db("out"), Db()),
  A = 7.5625,
  z = 1 / 2.75,
  Bb("Bounce", function(t) {
      return 1 - Dl(1 - t)
  }, Dl),
  Bb("Expo", function(t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0
  }),
  Bb("Circ", function(t) {
      return -(V(1 - t * t) - 1)
  }),
  Bb("Sine", function(t) {
      return 1 === t ? 1 : 1 - j(t * H)
  }),
  Bb("Back", Eb("in"), Eb("out"), Eb()),
  Ct.SteppedEase = Ct.steps = at.SteppedEase = {
      config: function config(t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t
            , i = t + (e ? 0 : 1)
            , n = e ? 1 : 0;
          return function(t) {
              return ((i * gt(0, .99999999, t) | 0) + n) * r
          }
      }
  },
  R.ease = Ct["quad.out"],
  _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
      return ct += t + "," + t + "Params,"
  });
  var Et, Ft = function GSCache(t, e) {
      this.id = X++,
      (t._gsap = this).target = t,
      this.harness = e,
      this.get = e ? e.get : $,
      this.set = e ? e.getSetter : Zt
  }, Rt = ((Et = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
      this._delay = t,
      this) : this._delay
  }
  ,
  Et.duration = function duration(t) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
  }
  ,
  Et.totalDuration = function totalDuration(t) {
      return arguments.length ? (this._dirty = 0,
      Ea(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
  }
  ,
  Et.totalTime = function totalTime(t, e) {
      if (Pt(),
      !arguments.length)
          return this._tTime;
      var r = this.parent || this._dp;
      if (r && r.smoothChildTiming && this._ts) {
          for (this._start = aa(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)),
          xa(this),
          r._dirty || ra(r); r.parent; )
              r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
              r = r.parent;
          !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && za(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B || !t && !this._initted) && (this._ts || (this._pTime = t),
      ea(this, t, e)),
      this
  }
  ,
  Et.time = function time(t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time
  }
  ,
  Et.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
  }
  ,
  Et.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
  }
  ,
  Et.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1
  }
  ,
  Et.timeScale = function timeScale(t) {
      if (!arguments.length)
          return this._rts === -B ? 0 : this._rts;
      if (this._rts === t)
          return this;
      var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0,
      this._ts = this._ps || t === -B ? 0 : this._rts,
      function _recacheAncestors(t) {
          for (var e = t.parent; e && e.parent; )
              e._dirty = 1,
              e.totalDuration(),
              e = e.parent;
          return t
      }(this.totalTime(gt(0, this._tDur, e), !0))
  }
  ,
  Et.paused = function paused(t) {
      return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
      this._ts = this._act = 0) : (Pt(),
      this._ts = this._rts,
      this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))),
      this) : this._ps
  }
  ,
  Et.startTime = function startTime(t) {
      if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return !e || !e._sort && this.parent || za(e, this, t - this._delay),
          this
      }
      return this._start
  }
  ,
  Et.endTime = function endTime(t) {
      return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
  }
  ,
  Et.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime
  }
  ,
  Et.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t,
      Fa(this)) : this._repeat
  }
  ,
  Et.repeatDelay = function repeatDelay(t) {
      return arguments.length ? (this._rDelay = t,
      Fa(this)) : this._rDelay
  }
  ,
  Et.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t,
      this) : this._yoyo
  }
  ,
  Et.seek = function seek(t, e) {
      return this.totalTime(Ha(this, t), s(e))
  }
  ,
  Et.restart = function restart(t, e) {
      return this.play().totalTime(t ? -this._delay : 0, s(e))
  }
  ,
  Et.play = function play(t, e) {
      return null != t && this.seek(t, e),
      this.reversed(!1).paused(!1)
  }
  ,
  Et.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e),
      this.reversed(!0).paused(!1)
  }
  ,
  Et.pause = function pause(t, e) {
      return null != t && this.seek(t, e),
      this.paused(!0)
  }
  ,
  Et.resume = function resume() {
      return this.paused(!1)
  }
  ,
  Et.reversed = function reversed(t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)),
      this) : this._rts < 0
  }
  ,
  Et.invalidate = function invalidate() {
      return this._initted = 0,
      this._zTime = -B,
      this
  }
  ,
  Et.isActive = function isActive(t) {
      var e, r = this.parent || this._dp, i = this._start;
      return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B))
  }
  ,
  Et.eventCallback = function eventCallback(t, e, r) {
      var i = this.vars;
      return 1 < arguments.length ? (e ? (i[t] = e,
      r && (i[t + "Params"] = r),
      "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
      this) : i[t]
  }
  ,
  Et.then = function then(t) {
      var i = this;
      return new Promise(function(e) {
          function Sm() {
              var t = i.then;
              i.then = null,
              o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              i.then = t
          }
          var r = o(t) ? t : ga;
          i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Sm() : i._prom = Sm
      }
      )
  }
  ,
  Et.kill = function kill() {
      eb(this)
  }
  ,
  Animation);
  function Animation(t, e) {
      var r = t.parent || F;
      this.vars = t,
      this._delay = +t.delay || 0,
      (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
      this._yoyo = !!t.yoyo || !!t.yoyoEase),
      this._ts = 1,
      Ea(this, +t.duration, 1),
      this.data = t.data,
      m || Mt.wake(),
      r && za(r, this, e || 0 === e ? e : r._time, 1),
      t.reversed && this.reverse(),
      t.paused && this.paused(!0)
  }
  ha(Rt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -B,
      _prom: 0,
      _ps: !1,
      _rts: 1
  });
  var Bt = function(i) {
      function Timeline(t, e) {
          var r;
          return void 0 === t && (t = {}),
          (r = i.call(this, t, e) || this).labels = {},
          r.smoothChildTiming = !!t.smoothChildTiming,
          r.autoRemoveChildren = !!t.autoRemoveChildren,
          r._sort = s(t.sortChildren),
          r.parent && ya(r.parent, _assertThisInitialized(r)),
          t.scrollTrigger && Aa(_assertThisInitialized(r), t.scrollTrigger),
          r
      }
      _inheritsLoose(Timeline, i);
      var t = Timeline.prototype;
      return t.to = function to(t, e, r, i) {
          return new Ht(t,ca(arguments, 0, this),Ha(this, p(e) ? i : r)),
          this
      }
      ,
      t.from = function from(t, e, r, i) {
          return new Ht(t,ca(arguments, 1, this),Ha(this, p(e) ? i : r)),
          this
      }
      ,
      t.fromTo = function fromTo(t, e, r, i, n) {
          return new Ht(t,ca(arguments, 2, this),Ha(this, p(e) ? n : i)),
          this
      }
      ,
      t.set = function set(t, e, r) {
          return e.duration = 0,
          e.parent = this,
          ma(e).repeatDelay || (e.repeat = 0),
          e.immediateRender = !!e.immediateRender,
          new Ht(t,e,Ha(this, r),1),
          this
      }
      ,
      t.call = function call(t, e, r) {
          return za(this, Ht.delayedCall(0, t, e), Ha(this, r))
      }
      ,
      t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
          return r.duration = e,
          r.stagger = r.stagger || i,
          r.onComplete = a,
          r.onCompleteParams = s,
          r.parent = this,
          new Ht(t,r,Ha(this, n)),
          this
      }
      ,
      t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
          return r.runBackwards = 1,
          ma(r).immediateRender = s(r.immediateRender),
          this.staggerTo(t, e, r, i, n, a, o)
      }
      ,
      t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
          return i.startAt = r,
          ma(i).immediateRender = s(i.immediateRender),
          this.staggerTo(t, e, i, n, a, o, u)
      }
      ,
      t.render = function render(t, e, r) {
          var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t, y = this._zTime < 0 != t < 0 && (this._initted || !g);
          if (v !== this._tTime || r || y) {
              if (_ !== this._time && g && (v += this._time - _,
              t += this._time - _),
              i = v,
              f = this._start,
              u = !(l = this._ts),
              y && (g || (_ = this._zTime),
              !t && e || (this._zTime = t)),
              this._repeat && (c = this._yoyo,
              o = g + this._rDelay,
              (g < (i = aa(v % o)) || m === v) && (i = g),
              (s = ~~(v / o)) && s === v / o && (i = g,
              s--),
              d = _t(this._tTime, o),
              !_ && this._tTime && d !== s && (d = s),
              c && 1 & s && (i = g - i,
              p = 1),
              s !== d && !this._lock)) {
                  var T = c && 1 & d
                    , b = T === (c && 1 & s);
                  if (s < d && (T = !T),
                  _ = T ? 0 : g,
                  this._lock = 1,
                  this.render(_ || (p ? 0 : aa(s * o)), e, !g)._lock = 0,
                  !e && this.parent && bt(this, "onRepeat"),
                  this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                  _ !== this._time || u != !this._ts)
                      return this;
                  if (b && (this._lock = 2,
                  _ = T ? g + 1e-4 : -1e-4,
                  this.render(_, !0),
                  this.vars.repeatRefresh && !p && this.invalidate()),
                  this._lock = 0,
                  !this._ts && !u)
                      return this;
                  zb(this, p)
              }
              if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                  var i;
                  if (e < r)
                      for (i = t._first; i && i._start <= r; ) {
                          if (!i._dur && "isPause" === i.data && i._start > e)
                              return i;
                          i = i._next
                      }
                  else
                      for (i = t._last; i && i._start >= r; ) {
                          if (!i._dur && "isPause" === i.data && i._start < e)
                              return i;
                          i = i._prev
                      }
              }(this, aa(_), aa(i))) && (v -= i - (i = h._start)),
              this._tTime = v,
              this._time = i,
              this._act = !l,
              this._initted || (this._onUpdate = this.vars.onUpdate,
              this._initted = 1,
              this._zTime = t),
              _ || !i || e || bt(this, "onStart"),
              _ <= i && 0 <= t)
                  for (n = this._first; n; ) {
                      if (a = n._next,
                      (n._act || i >= n._start) && n._ts && h !== n) {
                          if (n.parent !== this)
                              return this.render(t, e, r);
                          if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                          i !== this._time || !this._ts && !u) {
                              h = 0,
                              a && (v += this._zTime = -B);
                              break
                          }
                      }
                      n = a
                  }
              else {
                  n = this._last;
                  for (var w = t < 0 ? t : i; n; ) {
                      if (a = n._prev,
                      (n._act || w <= n._end) && n._ts && h !== n) {
                          if (n.parent !== this)
                              return this.render(t, e, r);
                          if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r),
                          i !== this._time || !this._ts && !u) {
                              h = 0,
                              a && (v += this._zTime = w ? -B : B);
                              break
                          }
                      }
                      n = a
                  }
              }
              if (h && !e && (this.pause(),
              h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1,
              this._ts))
                  return this._start = f,
                  xa(this),
                  this.render(t, e, r);
              this._onUpdate && !e && bt(this, "onUpdate", !0),
              (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1),
              e || t < 0 && !_ || !v && !_ || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0),
              !this._prom || v < m && 0 < this.timeScale() || this._prom())))
          }
          return this
      }
      ,
      t.add = function add(t, e) {
          var r = this;
          if (p(e) || (e = Ha(this, e)),
          !(t instanceof Rt)) {
              if (W(t))
                  return t.forEach(function(t) {
                      return r.add(t, e)
                  }),
                  ra(this);
              if (n(t))
                  return this.addLabel(t, e);
              if (!o(t))
                  return this;
              t = Ht.delayedCall(0, t)
          }
          return this !== t ? za(this, t, e) : this
      }
      ,
      t.getChildren = function getChildren(t, e, r, i) {
          void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -E);
          for (var n = [], a = this._first; a; )
              a._start >= i && (a instanceof Ht ? e && n.push(a) : (r && n.push(a),
              t && n.push.apply(n, a.getChildren(!0, e, r)))),
              a = a._next;
          return n
      }
      ,
      t.getById = function getById(t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t)
                  return e[r]
      }
      ,
      t.remove = function remove(t) {
          return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t),
          t === this._recent && (this._recent = this._last),
          ra(this))
      }
      ,
      t.totalTime = function totalTime(t, e) {
          return arguments.length ? (this._forcing = 1,
          this.parent || this._dp || !this._ts || (this._start = aa(Mt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
          i.prototype.totalTime.call(this, t, e),
          this._forcing = 0,
          this) : this._tTime
      }
      ,
      t.addLabel = function addLabel(t, e) {
          return this.labels[t] = Ha(this, e),
          this
      }
      ,
      t.removeLabel = function removeLabel(t) {
          return delete this.labels[t],
          this
      }
      ,
      t.addPause = function addPause(t, e, r) {
          var i = Ht.delayedCall(0, e || O, r);
          return i.data = "isPause",
          this._hasPause = 1,
          za(this, i, Ha(this, t))
      }
      ,
      t.removePause = function removePause(t) {
          var e = this._first;
          for (t = Ha(this, t); e; )
              e._start === t && "isPause" === e.data && qa(e),
              e = e._next
      }
      ,
      t.killTweensOf = function killTweensOf(t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--; )
              It !== i[n] && i[n].kill(t, e);
          return this
      }
      ,
      t.getTweensOf = function getTweensOf(t, e) {
          for (var r, i = [], n = yt(t), a = this._first; a; )
              a instanceof Ht ? !ba(a._targets, n) || e && !a.isActive("started" === e) || i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
              a = a._next;
          return i
      }
      ,
      t.tweenTo = function tweenTo(t, e) {
          e = e || {};
          var r = this
            , i = Ha(r, t)
            , n = e.startAt
            , a = e.onStart
            , s = e.onStartParams
            , o = Ht.to(r, ha(e, {
              ease: "none",
              lazy: !1,
              time: i,
              duration: e.duration || Math.abs((i - (n && "time"in n ? n.time : r._time)) / r.timeScale()) || B,
              onStart: function onStart() {
                  r.pause();
                  var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                  o._dur !== t && Ea(o, t).render(o._time, !0, !0),
                  a && a.apply(o, s || [])
              }
          }));
          return o
      }
      ,
      t.tweenFromTo = function tweenFromTo(t, e, r) {
          return this.tweenTo(e, ha({
              startAt: {
                  time: Ha(this, t)
              }
          }, r))
      }
      ,
      t.recent = function recent() {
          return this._recent
      }
      ,
      t.nextLabel = function nextLabel(t) {
          return void 0 === t && (t = this._time),
          cb(this, Ha(this, t))
      }
      ,
      t.previousLabel = function previousLabel(t) {
          return void 0 === t && (t = this._time),
          cb(this, Ha(this, t), 1)
      }
      ,
      t.currentLabel = function currentLabel(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B)
      }
      ,
      t.shiftChildren = function shiftChildren(t, e, r) {
          void 0 === r && (r = 0);
          for (var i, n = this._first, a = this.labels; n; )
              n._start >= r && (n._start += t),
              n = n._next;
          if (e)
              for (i in a)
                  a[i] >= r && (a[i] += t);
          return ra(this)
      }
      ,
      t.invalidate = function invalidate() {
          var t = this._first;
          for (this._lock = 0; t; )
              t.invalidate(),
              t = t._next;
          return i.prototype.invalidate.call(this)
      }
      ,
      t.clear = function clear(t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
              e = r._next,
              this.remove(r),
              r = e;
          return this._time = this._tTime = this._pTime = 0,
          t && (this.labels = {}),
          ra(this)
      }
      ,
      t.totalDuration = function totalDuration(t) {
          var e, r, i, n, a = 0, s = this, o = s._last, u = E;
          if (arguments.length)
              return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
          if (s._dirty) {
              for (n = s.parent; o; )
                  e = o._prev,
                  o._dirty && o.totalDuration(),
                  u < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1,
                  za(s, o, i - o._delay, 1)._lock = 0) : u = i,
                  i < 0 && o._ts && (a -= i,
                  (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts,
                  s._time -= i,
                  s._tTime -= i),
                  s.shiftChildren(-i, !1, -Infinity),
                  u = 0),
                  a < (r = xa(o)) && o._ts && (a = r),
                  o = e;
              Ea(s, s === F && s._time > a ? s._time : a, 1),
              s._dirty = 0
          }
          return s._tDur
      }
      ,
      Timeline.updateRoot = function updateRoot(t) {
          if (F._ts && (ea(F, wa(t, F)),
          d = Mt.frame),
          Mt.frame >= ft) {
              ft += U.autoSleep || 120;
              var e = F._first;
              if ((!e || !e._ts) && U.autoSleep && Mt._listeners.length < 2) {
                  for (; e && !e._ts; )
                      e = e._next;
                  e || Mt.sleep()
              }
          }
      }
      ,
      Timeline
  }(Rt);
  ha(Bt.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
  });
  function Lb(t, e, i, a, s, u) {
      var h, l, f, d;
      if (ht[t] && !1 !== (h = new ht[t]).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
          if (o(t) && (t = Yt(t, s, e, i, a)),
          !r(t) || t.style && t.nodeType || W(t))
              return n(t) ? Yt(t, s, e, i, a) : t;
          var u, h = {};
          for (u in t)
              h[u] = Yt(t[u], s, e, i, a);
          return h
      }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),
      i !== c))
          for (f = i._ptLookup[i._targets.indexOf(s)],
          d = h._props.length; d--; )
              f[h._props[d]] = l;
      return h
  }
  var It, Lt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f, d = t[e], c = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d, p = o(d) ? l ? jt : Vt : Xt;
      if (n(i) && (~i.indexOf("random(") && (i = _a(i)),
      "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ka(c) || 0))),
      c !== i)
          return isNaN(c + i) ? (d || e in t || L(e, i),
          function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o, u, h, l, f, d, c, p, _ = new ee(this._pt,t,e,0,1,Wt,null,n), m = 0, g = 0;
              for (_.b = r,
              _.e = i,
              r += "",
              (c = ~(i += "").indexOf("random(")) && (i = _a(i)),
              a && (a(p = [r, i], t, e),
              r = p[0],
              i = p[1]),
              u = r.match(et) || []; o = et.exec(i); )
                  l = o[0],
                  f = i.substring(m, o.index),
                  h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] && (d = parseFloat(u[g - 1]) || 0,
                  _._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ",",
                      s: d,
                      c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0
                  },
                  m = et.lastIndex);
              return _.c = m < i.length ? i.substring(m, i.length) : "",
              _.fp = s,
              (it.test(i) || c) && (_.e = 0),
              this._pt = _
          }
          .call(this, t, e, c, i, p, h || U.stringFilter, l)) : (f = new ee(this._pt,t,e,+c || 0,i - (c || 0),"boolean" == typeof d ? Qt : Kt,0,p),
          l && (f.fp = l),
          u && f.modifier(u, this, t),
          this._pt = f)
  }, qt = function _initTween(t, e) {
      var r, i, n, a, o, u, h, l, f, d, c, p, _ = t.vars, m = _.ease, g = _.startAt, v = _.immediateRender, y = _.lazy, T = _.onUpdate, b = _.onUpdateParams, w = _.callbackScope, x = _.runBackwards, k = _.yoyoEase, O = _.keyframes, M = _.autoRevert, P = t._dur, C = t._startAt, S = t._targets, D = t.parent, A = D && "nested" === D.data ? D.parent._targets : S, z = "auto" === t._overwrite, E = t.timeline;
      if (!E || O && m || (m = "none"),
      t._ease = zt(m, R.ease),
      t._yEase = k ? At(zt(!0 === k ? m : k, R.ease)) : 0,
      k && t._yoyo && !t._repeat && (k = t._yEase,
      t._yEase = t._ease,
      t._ease = k),
      !E) {
          if (p = (l = S[0] ? Z(S[0]).harness : 0) && _[l.prop],
          r = la(_, st),
          C && C.render(-1, !0).kill(),
          g) {
              if (qa(t._startAt = Ht.set(S, ha({
                  data: "isStart",
                  overwrite: !1,
                  parent: D,
                  immediateRender: !0,
                  lazy: s(y),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: b,
                  callbackScope: w,
                  stagger: 0
              }, g))),
              v)
                  if (0 < e)
                      M || (t._startAt = 0);
                  else if (P)
                      return
          } else if (x && P)
              if (C)
                  M || (t._startAt = 0);
              else if (e && (v = !1),
              n = ha({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: v && s(y),
                  immediateRender: v,
                  stagger: 0,
                  parent: D
              }, r),
              p && (n[l.prop] = p),
              qa(t._startAt = Ht.set(S, n)),
              v) {
                  if (!e)
                      return
              } else
                  _initTween(t._startAt, B);
          for (t._pt = 0,
          y = P && s(y) || y && !P,
          i = 0; i < S.length; i++) {
              if (h = (o = S[i])._gsap || Y(S)[i]._gsap,
              t._ptLookup[i] = d = {},
              ut[h.id] && da(),
              c = A === S ? i : A.indexOf(o),
              l && !1 !== (f = new l).init(o, p || r, t, c, A) && (t._pt = a = new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),
              f._props.forEach(function(t) {
                  d[t] = a
              }),
              f.priority && (u = 1)),
              !l || p)
                  for (n in r)
                      ht[n] && (f = Lb(n, r, t, c, o, A)) ? f.priority && (u = 1) : d[n] = a = Lt.call(t, o, n, "get", r[n], c, A, 0, _.stringFilter);
              t._op && t._op[i] && t.kill(o, t._op[i]),
              z && t._pt && (It = t,
              F.killTweensOf(o, d, "started"),
              It = 0),
              t._pt && y && (ut[h.id] = 1)
          }
          u && te(t),
          t._onInit && t._onInit(t)
      }
      t._from = !E && !!_.runBackwards,
      t._onUpdate = T,
      t._initted = !!t.parent
  }, Yt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? _a(t) : t
  }, Nt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ut = (Nt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Ht = function(A) {
      function Tween(t, e, i, n) {
          var a;
          "number" == typeof e && (i.duration = e,
          e = i,
          i = null);
          var o, h, l, f, d, c, _, m, g = (a = A.call(this, n ? e : ma(e), i) || this).vars, v = g.duration, y = g.delay, T = g.immediateRender, b = g.stagger, w = g.overwrite, x = g.keyframes, k = g.defaults, P = g.scrollTrigger, C = g.yoyoEase, S = a.parent, D = (W(t) ? p(t[0]) : "length"in e) ? [t] : yt(t);
          if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [],
          a._ptLookup = [],
          a._overwrite = w,
          x || b || u(v) || u(y)) {
              if (e = a.vars,
              (o = a.timeline = new Bt({
                  data: "nested",
                  defaults: k || {}
              })).kill(),
              o.parent = _assertThisInitialized(a),
              x)
                  ha(o.vars.defaults, {
                      ease: "none"
                  }),
                  x.forEach(function(t) {
                      return o.to(D, t, ">")
                  });
              else {
                  if (f = D.length,
                  _ = b ? Ra(b) : O,
                  r(b))
                      for (d in b)
                          ~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);
                  for (h = 0; h < f; h++) {
                      for (d in l = {},
                      e)
                          Ut.indexOf(d) < 0 && (l[d] = e[d]);
                      l.stagger = 0,
                      C && (l.yoyoEase = C),
                      m && pt(l, m),
                      c = D[h],
                      l.duration = +Yt(v, _assertThisInitialized(a), h, c, D),
                      l.delay = (+Yt(y, _assertThisInitialized(a), h, c, D) || 0) - a._delay,
                      !b && 1 === f && l.delay && (a._delay = y = l.delay,
                      a._start += y,
                      l.delay = 0),
                      o.to(c, l, _(h, c, D))
                  }
                  o.duration() ? v = y = 0 : a.timeline = 0
              }
              v || a.duration(v = o.duration())
          } else
              a.timeline = 0;
          return !0 === w && (It = _assertThisInitialized(a),
          F.killTweensOf(D),
          It = 0),
          S && ya(S, _assertThisInitialized(a)),
          (T || !v && !x && a._start === aa(S._time) && s(T) && function _hasNoPausedAncestors(t) {
              return !t || t._ts && _hasNoPausedAncestors(t.parent)
          }(_assertThisInitialized(a)) && "nested" !== S.data) && (a._tTime = -B,
          a.render(Math.max(0, -y))),
          P && Aa(_assertThisInitialized(a), P),
          a
      }
      _inheritsLoose(Tween, A);
      var t = Tween.prototype;
      return t.render = function render(t, e, r) {
          var i, n, a, s, o, u, h, l, f, d = this._time, c = this._tDur, p = this._dur, _ = c - B < t && 0 <= t ? c : t < B ? 0 : t;
          if (p) {
              if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                  if (i = _,
                  l = this.timeline,
                  this._repeat) {
                      if (s = p + this._rDelay,
                      (p < (i = aa(_ % s)) || c === _) && (i = p),
                      (a = ~~(_ / s)) && a === _ / s && (i = p,
                      a--),
                      (u = this._yoyo && 1 & a) && (f = this._yEase,
                      i = p - i),
                      o = _t(this._tTime, s),
                      i === d && !r && this._initted)
                          return this;
                      a !== o && (l && this._yEase && zb(l, u),
                      !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                      this.render(aa(s * a), !0).invalidate()._lock = 0))
                  }
                  if (!this._initted) {
                      if (Ba(this, i, r, e))
                          return this._tTime = 0,
                          this;
                      if (p !== this._dur)
                          return this.render(t, e, r)
                  }
                  for (this._tTime = _,
                  this._time = i,
                  !this._act && this._ts && (this._act = 1,
                  this._lazy = 0),
                  this.ratio = h = (f || this._ease)(i / p),
                  this._from && (this.ratio = h = 1 - h),
                  !i || d || e || bt(this, "onStart"),
                  n = this._pt; n; )
                      n.r(h, n.d),
                      n = n._next;
                  l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t),
                  this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  bt(this, "onUpdate")),
                  this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"),
                  _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                  !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || qa(this, 1),
                  e || t < 0 && !d || !_ && !d || (bt(this, _ === c ? "onComplete" : "onReverseComplete", !0),
                  !this._prom || _ < c && 0 < this.timeScale() || this._prom()))
              }
          } else
              !function _renderZeroDurationTween(t, e, r, i) {
                  var n, a, s = t.ratio, o = e < 0 || !e && s && !t._start && t._zTime > B && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1, u = t._rDelay, h = 0;
                  if (u && t._repeat && (h = gt(0, t._tDur, e),
                  _t(h, u) !== (a = _t(t._tTime, u)) && (s = 1 - o,
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
                  t._initted || !Ba(t, e, i, r))
                      if (o !== s || i || t._zTime === B || !e && t._zTime) {
                          for (a = t._zTime,
                          t._zTime = e || (r ? B : 0),
                          r = r || e && !a,
                          t.ratio = o,
                          t._from && (o = 1 - o),
                          t._time = 0,
                          t._tTime = h,
                          r || bt(t, "onStart"),
                          n = t._pt; n; )
                              n.r(o, n.d),
                              n = n._next;
                          t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                          t._onUpdate && !r && bt(t, "onUpdate"),
                          h && t._repeat && !r && t.parent && bt(t, "onRepeat"),
                          (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1),
                          r || (bt(t, o ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()))
                      } else
                          t._zTime || (t._zTime = e)
              }(this, t, e, r);
          return this
      }
      ,
      t.targets = function targets() {
          return this._targets
      }
      ,
      t.invalidate = function invalidate() {
          return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0,
          this._ptLookup = [],
          this.timeline && this.timeline.invalidate(),
          A.prototype.invalidate.call(this)
      }
      ,
      t.kill = function kill(t, e) {
          if (void 0 === e && (e = "all"),
          !(t || e && "all" !== e) && (this._lazy = 0,
          this.parent))
              return eb(this);
          if (this.timeline) {
              var r = this.timeline.totalDuration();
              return this.timeline.killTweensOf(t, e, It && !0 !== It.vars.overwrite)._first || eb(this),
              this.parent && r !== this.timeline.totalDuration() && Ea(this, this._dur * this.timeline._tDur / r),
              this
          }
          var i, a, s, o, u, h, l, f = this._targets, d = t ? yt(t) : f, c = this._ptLookup, p = this._pt;
          if ((!e || "all" === e) && function _arraysMatch(t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                  ;
              return r < 0
          }(f, d))
              return eb(this);
          for (i = this._op = this._op || [],
          "all" !== e && (n(e) && (u = {},
          _(e, function(t) {
              return u[t] = 1
          }),
          e = u),
          e = function _addAliasesToVars(t, e) {
              var r, i, n, a, s = t[0] ? Z(t[0]).harness : 0, o = s && s.aliases;
              if (!o)
                  return e;
              for (i in r = pt({}, e),
              o)
                  if (i in r)
                      for (n = (a = o[i].split(",")).length; n--; )
                          r[a[n]] = r[i];
              return r
          }(f, e)),
          l = f.length; l--; )
              if (~d.indexOf(f[l]))
                  for (u in a = c[l],
                  "all" === e ? (i[l] = e,
                  o = a,
                  s = {}) : (s = i[l] = i[l] || {},
                  o = e),
                  o)
                      (h = a && a[u]) && ("kill"in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"),
                      delete a[u]),
                      "all" !== s && (s[u] = 1);
          return this._initted && !this._pt && p && eb(this),
          this
      }
      ,
      Tween.to = function to(t, e, r) {
          return new Tween(t,e,r)
      }
      ,
      Tween.from = function from(t, e) {
          return new Tween(t,ca(arguments, 1))
      }
      ,
      Tween.delayedCall = function delayedCall(t, e, r, i) {
          return new Tween(e,0,{
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i
          })
      }
      ,
      Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t,ca(arguments, 2))
      }
      ,
      Tween.set = function set(t, e) {
          return e.duration = 0,
          e.repeatDelay || (e.repeat = 0),
          new Tween(t,e)
      }
      ,
      Tween.killTweensOf = function killTweensOf(t, e, r) {
          return F.killTweensOf(t, e, r)
      }
      ,
      Tween
  }(Rt);
  ha(Ht.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
  }),
  _("staggerTo,staggerFrom,staggerFromTo", function(r) {
      Ht[r] = function() {
          var t = new Bt
            , e = vt.call(arguments, 0);
          return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
          t[r].apply(t, e)
      }
  });
  function Wb(t, e, r) {
      return t.setAttribute(e, r)
  }
  function cc(t, e, r, i) {
      i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
  }
  var Xt = function _setterPlain(t, e, r) {
      return t[e] = r
  }
    , Vt = function _setterFunc(t, e, r) {
      return t[e](r)
  }
    , jt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r)
  }
    , Zt = function _getSetter(t, e) {
      return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Wb : Xt
  }
    , Kt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
  }
    , Qt = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
  }
    , Wt = function _renderComplexString(t, e) {
      var r = e._pt
        , i = "";
      if (!t && e.b)
          i = e.b;
      else if (1 === t && e.e)
          i = e.e;
      else {
          for (; r; )
              i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
              r = r._next;
          i += e.c
      }
      e.set(e.t, e.p, i, e)
  }
    , Gt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; )
          r.r(t, r.d),
          r = r._next
  }
    , $t = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
          n = a._next,
          a.p === i && a.modifier(t, e, r),
          a = n
  }
    , Jt = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
          r = i._next,
          i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1),
          i = r;
      return !e
  }
    , te = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
          for (e = a._next,
          r = i; r && r.pr > a.pr; )
              r = r._next;
          (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a,
          (a._next = r) ? r._prev = a : n = a,
          a = e
      }
      t._pt = i
  }
    , ee = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set,
      this.set = cc,
      this.m = t,
      this.mt = r,
      this.tween = e
  }
  ,
  PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
      this.t = e,
      this.s = i,
      this.c = n,
      this.p = r,
      this.r = a || Kt,
      this.d = s || this,
      this.set = o || Xt,
      this.pr = u || 0,
      (this._next = t) && (t._prev = this)
  }
  _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
      return st[t] = 1
  }),
  at.TweenMax = at.TweenLite = Ht,
  at.TimelineLite = at.TimelineMax = Bt,
  F = new Bt({
      sortChildren: !1,
      defaults: R,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0
  }),
  U.stringFilter = pb;
  var re = {
      registerPlugin: function registerPlugin() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
          e.forEach(function(t) {
              return function _createPlugin(t) {
                  var e = (t = !t.name && t.default || t).name
                    , r = o(t)
                    , i = e && !r && t.init ? function() {
                      this._props = []
                  }
                  : t
                    , n = {
                      init: O,
                      render: Gt,
                      add: Lt,
                      kill: Jt,
                      modifier: $t,
                      rawVars: 0
                  }
                    , a = {
                      targetTest: 0,
                      get: 0,
                      getSetter: Zt,
                      aliases: {},
                      register: 0
                  };
                  if (Pt(),
                  t !== i) {
                      if (ht[e])
                          return;
                      ha(i, ha(la(t, n), a)),
                      pt(i.prototype, pt(n, la(t, a))),
                      ht[i.prop = e] = i,
                      t.targetTest && (dt.push(i),
                      st[e] = 1),
                      e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                  }
                  N(e, i),
                  t.register && t.register(ie, i, ee)
              }(t)
          })
      },
      timeline: function timeline(t) {
          return new Bt(t)
      },
      getTweensOf: function getTweensOf(t, e) {
          return F.getTweensOf(t, e)
      },
      getProperty: function getProperty(i, t, e, r) {
          n(i) && (i = yt(i)[0]);
          var a = Z(i || {}).get
            , s = e ? ga : fa;
          return "native" === e && (e = ""),
          i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function(t, e, r) {
              return s((ht[t] && ht[t].get || a)(i, t, e, r))
          }
          : i
      },
      quickSetter: function quickSetter(r, e, i) {
          if (1 < (r = yt(r)).length) {
              var n = r.map(function(t) {
                  return ie.quickSetter(t, e, i)
              })
                , a = n.length;
              return function(t) {
                  for (var e = a; e--; )
                      n[e](t)
              }
          }
          r = r[0] || {};
          var s = ht[e]
            , o = Z(r)
            , u = o.harness && (o.harness.aliases || {})[e] || e
            , h = s ? function(t) {
              var e = new s;
              c._pt = 0,
              e.init(r, i ? t + i : t, c, 0, [r]),
              e.render(1, e),
              c._pt && Gt(1, c)
          }
          : o.set(r, u);
          return s ? h : function(t) {
              return h(r, u, i ? t + i : t, o, 1)
          }
      },
      isTweening: function isTweening(t) {
          return 0 < F.getTweensOf(t, !0).length
      },
      defaults: function defaults(t) {
          return t && t.ease && (t.ease = zt(t.ease, R.ease)),
          ka(R, t || {})
      },
      config: function config(t) {
          return ka(U, t || {})
      },
      registerEffect: function registerEffect(t) {
          var n = t.name
            , i = t.effect
            , e = t.plugins
            , a = t.defaults
            , s = t.extendTimeline;
          (e || "").split(",").forEach(function(t) {
              return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.")
          }),
          lt[n] = function(t, e, r) {
              return i(yt(t), ha(e || {}, a), r)
          }
          ,
          s && (Bt.prototype[n] = function(t, e, i) {
              return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i)
          }
          )
      },
      registerEase: function registerEase(t, e) {
          Ct[t] = zt(e)
      },
      parseEase: function parseEase(t, e) {
          return arguments.length ? zt(t, e) : Ct
      },
      getById: function getById(t) {
          return F.getById(t)
      },
      exportRoot: function exportRoot(t, e) {
          void 0 === t && (t = {});
          var r, i, n = new Bt(t);
          for (n.smoothChildTiming = s(t.smoothChildTiming),
          F.remove(n),
          n._dp = 0,
          n._time = n._tTime = F._time,
          r = F._first; r; )
              i = r._next,
              !e && !r._dur && r instanceof Ht && r.vars.onComplete === r._targets[0] || za(n, r, r._start - r._delay),
              r = i;
          return za(F, n, 0),
          n
      },
      utils: {
          wrap: function wrap(e, t, r) {
              var i = t - e;
              return W(e) ? Ya(e, wrap(0, e.length), t) : Ia(r, function(t) {
                  return (i + (t - e) % i) % i + e
              })
          },
          wrapYoyo: function wrapYoyo(e, t, r) {
              var i = t - e
                , n = 2 * i;
              return W(e) ? Ya(e, wrapYoyo(0, e.length - 1), t) : Ia(r, function(t) {
                  return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
              })
          },
          distribute: Ra,
          random: Ua,
          snap: Ta,
          normalize: function normalize(t, e, r) {
              return Tt(t, e, 0, 1, r)
          },
          getUnit: Ka,
          clamp: function clamp(e, r, t) {
              return Ia(t, function(t) {
                  return gt(e, r, t)
              })
          },
          splitColor: kb,
          toArray: yt,
          mapRange: Tt,
          pipe: function pipe() {
              for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                  e[r] = arguments[r];
              return function(t) {
                  return e.reduce(function(t, e) {
                      return e(t)
                  }, t)
              }
          },
          unitize: function unitize(e, r) {
              return function(t) {
                  return e(parseFloat(t)) + (r || Ka(t))
              }
          },
          interpolate: function interpolate(e, r, t, i) {
              var a = isNaN(e + r) ? 0 : function(t) {
                  return (1 - t) * e + t * r
              }
              ;
              if (!a) {
                  var s, o, u, h, l, f = n(e), d = {};
                  if (!0 === t && (i = 1) && (t = null),
                  f)
                      e = {
                          p: e
                      },
                      r = {
                          p: r
                      };
                  else if (W(e) && !W(r)) {
                      for (u = [],
                      h = e.length,
                      l = h - 2,
                      o = 1; o < h; o++)
                          u.push(interpolate(e[o - 1], e[o]));
                      h--,
                      a = function func(t) {
                          t *= h;
                          var e = Math.min(l, ~~t);
                          return u[e](t - e)
                      }
                      ,
                      t = r
                  } else
                      i || (e = pt(W(e) ? [] : {}, e));
                  if (!u) {
                      for (s in r)
                          Lt.call(d, e, s, "get", r[s]);
                      a = function func(t) {
                          return Gt(t, d) || (f ? e.p : e)
                      }
                  }
              }
              return Ia(t, a)
          },
          shuffle: Qa
      },
      install: K,
      effects: lt,
      ticker: Mt,
      updateRoot: Bt.updateRoot,
      plugins: ht,
      globalTimeline: F,
      core: {
          PropTween: ee,
          globals: N,
          Tween: Ht,
          Timeline: Bt,
          Animation: Rt,
          getCache: Z,
          _removeLinkedListItem: pa
      }
  };
  _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
      return re[t] = Ht[t]
  }),
  Mt.add(Bt.updateRoot),
  c = re.to({}, {
      duration: 0
  });
  function gc(t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
      return r
  }
  function ic(t, a) {
      return {
          name: t,
          rawVars: 1,
          init: function init(t, i, e) {
              e._onInit = function(t) {
                  var e, r;
                  if (n(i) && (e = {},
                  _(i, function(t) {
                      return e[t] = 1
                  }),
                  i = e),
                  a) {
                      for (r in e = {},
                      i)
                          e[r] = a(i[r]);
                      i = e
                  }
                  !function _addModifiers(t, e) {
                      var r, i, n, a = t._targets;
                      for (r in e)
                          for (i = a.length; i--; )
                              (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = gc(n, r)),
                              n && n.modifier && n.modifier(e[r], t, a[i], r))
                  }(t, i)
              }
          }
      }
  }
  var ie = re.registerPlugin({
      name: "attr",
      init: function init(t, e, r, i, n) {
          var a, s;
          for (a in e)
              (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a),
              this._props.push(a)
      }
  }, {
      name: "endArray",
      init: function init(t, e) {
          for (var r = e.length; r--; )
              this.add(t, r, t[r] || 0, e[r])
      }
  }, ic("roundProps", Sa), ic("modifiers"), ic("snap", Ta)) || re;
  Ht.version = Bt.version = ie.version = "3.3.4",
  f = 1,
  t() && Pt();
  function Tc(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }
  function Uc(t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }
  function Vc(t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
  }
  function Wc(t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
  }
  function Xc(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e)
  }
  function Yc(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
  }
  function Zc(t, e, r) {
      return t.style[e] = r
  }
  function $c(t, e, r) {
      return t.style.setProperty(e, r)
  }
  function _c(t, e, r) {
      return t._gsap[e] = r
  }
  function ad(t, e, r) {
      return t._gsap.scaleX = t._gsap.scaleY = r
  }
  function bd(t, e, r, i, n) {
      var a = t._gsap;
      a.scaleX = a.scaleY = r,
      a.renderTransform(n, a)
  }
  function cd(t, e, r, i, n) {
      var a = t._gsap;
      a[e] = r,
      a.renderTransform(n, a)
  }
  function gd(t, e) {
      var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
      return r.style ? r : ae.createElement(t)
  }
  function hd(t, e, r) {
      var i = getComputedStyle(t);
      return i[e] || i.getPropertyValue(e.replace(Fe, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && hd(t, Ne(e) || e, 1) || ""
  }
  function kd() {
      (function _windowExists() {
          return "undefined" != typeof window
      }
      )() && window.document && (ne = window,
      ae = ne.document,
      se = ae.documentElement,
      ue = gd("div") || {
          style: {}
      },
      he = gd("div"),
      Le = Ne(Le),
      qe = Ne(qe),
      ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
      fe = !!Ne("perspective"),
      oe = 1)
  }
  function ld(t) {
      var e, r = gd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
      if (se.appendChild(r),
      r.appendChild(this),
      this.style.display = "block",
      t)
          try {
              e = this.getBBox(),
              this._gsapBBox = this.getBBox,
              this.getBBox = ld
          } catch (t) {}
      else
          this._gsapBBox && (e = this._gsapBBox());
      return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      se.removeChild(r),
      this.style.cssText = a,
      e
  }
  function md(t, e) {
      for (var r = e.length; r--; )
          if (t.hasAttribute(e[r]))
              return t.getAttribute(e[r])
  }
  function nd(e) {
      var r;
      try {
          r = e.getBBox()
      } catch (t) {
          r = ld.call(e, !0)
      }
      return r && (r.width || r.height) || e.getBBox === ld || (r = ld.call(e, !0)),
      !r || r.width || r.x || r.y ? r : {
          x: +md(e, ["x", "cx", "x1"]) || 0,
          y: +md(e, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
      }
  }
  function od(t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !nd(t))
  }
  function pd(t, e) {
      if (e) {
          var r = t.style;
          e in De && (e = Le),
          r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
          r.removeProperty(e.replace(Fe, "-$1").toLowerCase())) : r.removeAttribute(e)
      }
  }
  function qd(t, e, r, i, n, a) {
      var s = new ee(t._pt,e,r,0,1,a ? Yc : Xc);
      return (t._pt = s).b = i,
      s.e = n,
      t._props.push(r),
      s
  }
  function sd(t, e, r, i) {
      var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = ue.style, f = Re.test(e), d = "svg" === t.tagName.toLowerCase(), c = (d ? "client" : "offset") + (f ? "Width" : "Height"), p = "px" === i, _ = "%" === i;
      return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || p || (u = sd(t, e, r, "px")),
      o = t.getCTM && od(t),
      _ && (De[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[c]) * 100) : (l[f ? "width" : "height"] = 100 + (p ? h : i),
      a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode,
      o && (a = (t.ownerSVGElement || {}).parentNode),
      a && a !== ae && a.appendChild || (a = ae.body),
      (s = a._gsap) && _ && s.width && f && s.time === Mt.time ? aa(u / s.width * 100) : (!_ && "%" !== h || (l.position = hd(t, "position")),
      a === t && (l.position = "static"),
      a.appendChild(ue),
      n = ue[c],
      a.removeChild(ue),
      l.position = "absolute",
      f && _ && ((s = Z(a)).time = Mt.time,
      s.width = a[c]),
      aa(p ? n * u / 100 : n && u ? 100 / n * u : 0))))
  }
  function td(t, e, r, i) {
      var n;
      return oe || kd(),
      e in Ie && "transform" !== e && ~(e = Ie[e]).indexOf(",") && (e = e.split(",")[0]),
      De[e] && "transform" !== e ? (n = Ze(t, i),
      n = "transformOrigin" !== e ? n[e] : Ke(hd(t, qe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Xe[e] && Xe[e](t, e, r) || hd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)),
      r && !~(n + "").indexOf(" ") ? sd(t, e, n, r) + r : n
  }
  function ud(t, e, r, i) {
      if (!r || "none" === r) {
          var n = Ne(e, t, 1)
            , a = n && hd(t, n, 1);
          a && a !== r && (e = n,
          r = a)
      }
      var s, o, u, h, l, f, d, c, p, _, m, g, v = new ee(this._pt,t.style,e,0,1,Wt), y = 0, T = 0;
      if (v.b = r,
      v.e = i,
      r += "",
      "auto" === (i += "") && (t.style[e] = i,
      i = hd(t, e) || i,
      t.style[e] = r),
      pb(s = [r, i]),
      i = s[1],
      u = (r = s[0]).match(tt) || [],
      (i.match(tt) || []).length) {
          for (; o = tt.exec(i); )
              d = o[0],
              p = i.substring(y, o.index),
              l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1),
              d !== (f = u[T++] || "") && (h = parseFloat(f) || 0,
              m = f.substr((h + "").length),
              (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
              c = parseFloat(d),
              _ = d.substr((c + "").length),
              y = tt.lastIndex - _.length,
              _ || (_ = _ || U.units[e] || m,
              y === i.length && (i += _,
              v.e += _)),
              m !== _ && (h = sd(t, e, f, _) || 0),
              v._pt = {
                  _next: v._pt,
                  p: p || 1 === T ? p : ",",
                  s: h,
                  c: g ? g * c : c - h,
                  m: l && l < 4 ? Math.round : 0
              });
          v.c = y < i.length ? i.substring(y, i.length) : ""
      } else
          v.r = "display" === e && "none" === i ? Yc : Xc;
      return it.test(i) && (v.e = 0),
      this._pt = v
  }
  function wd(t) {
      var e = t.split(" ")
        , r = e[0]
        , i = e[1] || "50%";
      return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r,
      r = i,
      i = t),
      e[0] = He[r] || r,
      e[1] = He[i] || i,
      e.join(" ")
  }
  function xd(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
          var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
          if ("all" === o || !0 === o)
              s.cssText = "",
              i = 1;
          else
              for (n = (o = o.split(",")).length; -1 < --n; )
                  r = o[n],
                  De[r] && (i = 1,
                  r = "transformOrigin" === r ? qe : Le),
                  pd(a, r);
          i && (pd(a, Le),
          u && (u.svg && a.removeAttribute("transform"),
          Ze(a, 1),
          u.uncache = 1))
      }
  }
  function Bd(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
  }
  function Cd(t) {
      var e = hd(t, Le);
      return Bd(e) ? Ve : e.substr(7).match(J).map(aa)
  }
  function Dd(t, e) {
      var r, i, n, a, s = t._gsap || Z(t), o = t.style, u = Cd(t);
      return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ve : u : (u !== Ve || t.offsetParent || t === se || s.svg || (n = o.display,
      o.display = "block",
      (r = t.parentNode) && t.offsetParent || (a = 1,
      i = t.nextSibling,
      se.appendChild(t)),
      u = Cd(t),
      n ? o.display = n : pd(t, "display"),
      a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))),
      e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
  }
  function Ed(t, e, r, i, n, a) {
      var s, o, u, h = t._gsap, l = n || Dd(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, c = h.xOffset || 0, p = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], T = l[5], b = e.split(" "), w = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0;
      r ? l !== Ve && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o,
      w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o,
      x = u) : (w = (s = nd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w),
      x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)),
      i || !1 !== i && h.smooth ? (y = w - f,
      T = x - d,
      h.xOffset = c + (y * _ + T * g) - y,
      h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0,
      h.xOrigin = w,
      h.yOrigin = x,
      h.smooth = !!i,
      h.origin = e,
      h.originIsAbsolute = !!r,
      t.style[qe] = "0px 0px",
      a && (qd(a, h, "xOrigin", f, w),
      qd(a, h, "yOrigin", d, x),
      qd(a, h, "xOffset", c, h.xOffset),
      qd(a, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x)
  }
  function Hd(t, e, r) {
      var i = Ka(e);
      return aa(parseFloat(e) + parseFloat(sd(t, "x", r + "px", i))) + i
  }
  function Od(t, e, r, i, a, s) {
      var o, u, h = 360, l = n(a), f = parseFloat(a) * (l && ~a.indexOf("rad") ? Ae : 1), d = s ? f * s : f - i, c = i + d + "deg";
      return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h),
      "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)),
      t._pt = u = new ee(t._pt,e,r,i,d,Uc),
      u.e = c,
      u.u = "deg",
      t._props.push(r),
      u
  }
  function Pd(t, e, r) {
      var i, n, a, s, o, u, h, l = he.style, f = r._gsap;
      for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;",
      l[Le] = e,
      ae.body.appendChild(he),
      i = Ze(he, 1),
      De)
          (a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ka(a) !== (h = Ka(s)) ? sd(r, n, a, h) : parseFloat(a),
          u = parseFloat(s),
          t._pt = new ee(t._pt,f,n,o,u - o,Tc),
          t._pt.u = h || 0,
          t._props.push(n));
      ae.body.removeChild(he)
  }
  var ne, ae, se, oe, ue, he, le, fe, de = Ct.Power0, ce = Ct.Power1, pe = Ct.Power2, _e = Ct.Power3, me = Ct.Power4, ge = Ct.Linear, ve = Ct.Quad, ye = Ct.Cubic, Te = Ct.Quart, be = Ct.Quint, we = Ct.Strong, xe = Ct.Elastic, ke = Ct.Back, Oe = Ct.SteppedEase, Me = Ct.Bounce, Pe = Ct.Sine, Ce = Ct.Expo, Se = Ct.Circ, De = {}, Ae = 180 / Math.PI, ze = Math.PI / 180, Ee = Math.atan2, Fe = /([A-Z])/g, Re = /(?:left|right|width|margin|padding|x)/i, Be = /[\s,\(]\S/, Ie = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
  }, Le = "transform", qe = Le + "Origin", Ye = "O,Moz,ms,Ms,Webkit".split(","), Ne = function _checkPropPrefix(t, e, r) {
      var i = (e || ue).style
        , n = 5;
      if (t in i && !r)
          return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i); )
          ;
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t
  }, Ue = {
      deg: 1,
      rad: 1,
      turn: 1
  }, He = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
  }, Xe = {
      clearProps: function clearProps(t, e, r, i, n) {
          if ("isFromStart" !== n.data) {
              var a = t._pt = new ee(t._pt,e,r,0,0,xd);
              return a.u = i,
              a.pr = -10,
              a.tween = n,
              t._props.push(r),
              1
          }
      }
  }, Ve = [1, 0, 0, 1, 0, 0], je = {}, Ze = function _parseTransform(t, e) {
      var r = t._gsap || new Ft(t);
      if ("x"in r && !e && !r.uncache)
          return r;
      var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w, x, k, O, M, P, C, S, D, A, z, E, F, R = t.style, B = r.scaleX < 0, I = "deg", L = hd(t, qe) || "0";
      return i = n = a = u = h = l = f = d = c = 0,
      s = o = 1,
      r.svg = !(!t.getCTM || !od(t)),
      m = Dd(t, r.svg),
      r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"),
      Ed(t, M || L, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
      p = r.xOrigin || 0,
      _ = r.yOrigin || 0,
      m !== Ve && (T = m[0],
      b = m[1],
      w = m[2],
      x = m[3],
      i = k = m[4],
      n = O = m[5],
      6 === m.length ? (s = Math.sqrt(T * T + b * b),
      o = Math.sqrt(x * x + w * w),
      u = T || b ? Ee(b, T) * Ae : 0,
      (f = w || x ? Ee(w, x) * Ae + u : 0) && (o *= Math.cos(f * ze)),
      r.svg && (i -= p - (p * T + _ * w),
      n -= _ - (p * b + _ * x))) : (F = m[6],
      z = m[7],
      S = m[8],
      D = m[9],
      A = m[10],
      E = m[11],
      i = m[12],
      n = m[13],
      a = m[14],
      h = (g = Ee(F, A)) * Ae,
      g && (M = k * (v = Math.cos(-g)) + S * (y = Math.sin(-g)),
      P = O * v + D * y,
      C = F * v + A * y,
      S = k * -y + S * v,
      D = O * -y + D * v,
      A = F * -y + A * v,
      E = z * -y + E * v,
      k = M,
      O = P,
      F = C),
      l = (g = Ee(-w, A)) * Ae,
      g && (v = Math.cos(-g),
      E = x * (y = Math.sin(-g)) + E * v,
      T = M = T * v - S * y,
      b = P = b * v - D * y,
      w = C = w * v - A * y),
      u = (g = Ee(b, T)) * Ae,
      g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)),
      P = k * v + O * y,
      b = b * v - T * y,
      O = O * v - k * y,
      T = M,
      k = P),
      h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
      l = 180 - l),
      s = aa(Math.sqrt(T * T + b * b + w * w)),
      o = aa(Math.sqrt(O * O + F * F)),
      g = Ee(k, O),
      f = 2e-4 < Math.abs(g) ? g * Ae : 0,
      c = E ? 1 / (E < 0 ? -E : E) : 0),
      r.svg && (M = t.getAttribute("transform"),
      r.forceCSS = t.setAttribute("transform", "") || !Bd(hd(t, Le)),
      M && t.setAttribute("transform", M))),
      90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1,
      f += u <= 0 ? 180 : -180,
      u += u <= 0 ? 180 : -180) : (o *= -1,
      f += f <= 0 ? 180 : -180)),
      r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px",
      r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px",
      r.z = a + "px",
      r.scaleX = aa(s),
      r.scaleY = aa(o),
      r.rotation = aa(u) + I,
      r.rotationX = aa(h) + I,
      r.rotationY = aa(l) + I,
      r.skewX = f + I,
      r.skewY = d + I,
      r.transformPerspective = c + "px",
      (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (R[qe] = Ke(L)),
      r.xOffset = r.yOffset = 0,
      r.force3D = U.force3D,
      r.renderTransform = r.svg ? tr : fe ? Je : Qe,
      r.uncache = 0,
      r
  }, Ke = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1]
  }, Qe = function _renderNon3DTransforms(t, e) {
      e.z = "0px",
      e.rotationY = e.rotationX = "0deg",
      e.force3D = 0,
      Je(t, e)
  }, We = "0deg", Ge = "0px", $e = ") ", Je = function _renderCSSTransforms(t, e) {
      var r = e || this
        , i = r.xPercent
        , n = r.yPercent
        , a = r.x
        , s = r.y
        , o = r.z
        , u = r.rotation
        , h = r.rotationY
        , l = r.rotationX
        , f = r.skewX
        , d = r.skewY
        , c = r.scaleX
        , p = r.scaleY
        , _ = r.transformPerspective
        , m = r.force3D
        , g = r.target
        , v = r.zOrigin
        , y = ""
        , T = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (l !== We || h !== We)) {
          var b, w = parseFloat(h) * ze, x = Math.sin(w), k = Math.cos(w);
          w = parseFloat(l) * ze,
          b = Math.cos(w),
          a = Hd(g, a, x * b * -v),
          s = Hd(g, s, -Math.sin(w) * -v),
          o = Hd(g, o, k * b * -v + v)
      }
      _ !== Ge && (y += "perspective(" + _ + $e),
      (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
      !T && a === Ge && s === Ge && o === Ge || (y += o !== Ge || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + $e),
      u !== We && (y += "rotate(" + u + $e),
      h !== We && (y += "rotateY(" + h + $e),
      l !== We && (y += "rotateX(" + l + $e),
      f === We && d === We || (y += "skew(" + f + ", " + d + $e),
      1 === c && 1 === p || (y += "scale(" + c + ", " + p + $e),
      g.style[Le] = y || "translate(0, 0)"
  }, tr = function _renderSVGTransforms(t, e) {
      var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, c = o.skewX, p = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset, b = o.yOffset, w = o.forceCSS, x = parseFloat(l), k = parseFloat(f);
      d = parseFloat(d),
      c = parseFloat(c),
      (p = parseFloat(p)) && (c += p = parseFloat(p),
      d += p),
      d || c ? (d *= ze,
      c *= ze,
      r = Math.cos(d) * _,
      i = Math.sin(d) * _,
      n = Math.sin(d - c) * -m,
      a = Math.cos(d - c) * m,
      c && (p *= ze,
      s = Math.tan(c - p),
      n *= s = Math.sqrt(1 + s * s),
      a *= s,
      p && (s = Math.tan(p),
      r *= s = Math.sqrt(1 + s * s),
      i *= s)),
      r = aa(r),
      i = aa(i),
      n = aa(n),
      a = aa(a)) : (r = _,
      a = m,
      i = n = 0),
      (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = sd(g, "x", l, "px"),
      k = sd(g, "y", f, "px")),
      (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T),
      k = aa(k + y - (v * i + y * a) + b)),
      (u || h) && (s = g.getBBox(),
      x = aa(x + u / 100 * s.width),
      k = aa(k + h / 100 * s.height)),
      s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")",
      g.setAttribute("transform", s),
      w && (g.style[Le] = s)
  };
  _("padding,margin,Width,Radius", function(e, r) {
      var t = "Right"
        , i = "Bottom"
        , n = "Left"
        , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
          return r < 2 ? e + t : "border" + t + e
      });
      Xe[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
          var a, s;
          if (arguments.length < 4)
              return a = o.map(function(t) {
                  return td(e, t, r)
              }),
              5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
          a = (i + "").split(" "),
          s = {},
          o.forEach(function(t, e) {
              return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
          }),
          e.init(t, s, n)
      }
  });
  var er, rr, ir, nr = {
      name: "css",
      register: kd,
      targetTest: function targetTest(t) {
          return t.style && t.nodeType
      },
      init: function init(t, e, r, i, n) {
          var a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, T = this._props, b = t.style;
          for (f in oe || kd(),
          e)
              if ("autoRound" !== f && (s = e[f],
              !ht[f] || !Lb(f, e, r, i, t, n)))
                  if (h = typeof s,
                  l = Xe[f],
                  "function" === h && (h = typeof (s = s.call(r, i, t, n))),
                  "string" === h && ~s.indexOf("random(") && (s = _a(s)),
                  l)
                      l(this, t, f, s, r) && (y = 1);
                  else if ("--" === f.substr(0, 2))
                      this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);
                  else {
                      if (a = td(t, f),
                      u = parseFloat(a),
                      (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                      o = parseFloat(s),
                      f in Ie && ("autoAlpha" === f && (1 === u && "hidden" === td(t, "visibility") && o && (u = 0),
                      qd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                      "scale" !== f && "transform" !== f && ~(f = Ie[f]).indexOf(",") && (f = f.split(",")[0])),
                      _ = f in De)
                          if (m || ((g = t._gsap).renderTransform || Ze(t),
                          v = !1 !== e.smoothOrigin && g.smooth,
                          (m = this._pt = new ee(this._pt,b,Le,0,1,g.renderTransform,g,0,-1)).dep = 1),
                          "scale" === f)
                              this._pt = new ee(this._pt,g,"scaleY",g.scaleY,p ? p * o : o - g.scaleY),
                              T.push("scaleY", f),
                              f += "X";
                          else {
                              if ("transformOrigin" === f) {
                                  s = wd(s),
                                  g.svg ? Ed(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && qd(this, g, "zOrigin", g.zOrigin, c),
                                  qd(this, b, f, Ke(a), Ke(s)));
                                  continue
                              }
                              if ("svgOrigin" === f) {
                                  Ed(t, s, 1, v, 0, this);
                                  continue
                              }
                              if (f in je) {
                                  Od(this, g, f, u, s, p);
                                  continue
                              }
                              if ("smoothOrigin" === f) {
                                  qd(this, g, "smooth", g.smooth, s);
                                  continue
                              }
                              if ("force3D" === f) {
                                  g[f] = s;
                                  continue
                              }
                              if ("transform" === f) {
                                  Pd(this, s, t);
                                  continue
                              }
                          }
                      else
                          f in b || (f = Ne(f) || f);
                      if (_ || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b)
                          (d = (a + "").substr((u + "").length)) !== (c = (s + "").substr(((o = o || 0) + "").length) || (f in U.units ? U.units[f] : d)) && (u = sd(t, f, a, c)),
                          this._pt = new ee(this._pt,_ ? g : b,f,u,p ? p * o : o - u,"px" !== c || !1 === e.autoRound || _ ? Tc : Wc),
                          this._pt.u = c || 0,
                          d !== c && (this._pt.b = a,
                          this._pt.r = Vc);
                      else if (f in b)
                          ud.call(this, t, f, a, s);
                      else {
                          if (!(f in t)) {
                              L(f, s);
                              continue
                          }
                          this.add(t, f, t[f], s, i, n)
                      }
                      T.push(f)
                  }
          y && te(this)
      },
      get: td,
      aliases: Ie,
      getSetter: function getSetter(t, e, r) {
          var i = Ie[e];
          return i && i.indexOf(",") < 0 && (e = i),
          e in De && e !== qe && (t._gsap.x || td(t, "x")) ? r && le === r ? "scale" === e ? ad : _c : (le = r || {}) && ("scale" === e ? bd : cd) : t.style && !q(t.style[e]) ? Zc : ~e.indexOf("-") ? $c : Zt(t, e)
      },
      core: {
          _removeProperty: pd,
          _getMatrix: Dd
      }
  };
  ie.utils.checkPrefix = Ne,
  ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
      De[t] = 1
  }),
  _(rr, function(t) {
      U.units[t] = "deg",
      je[t] = 1
  }),
  Ie[ir[13]] = er + "," + rr,
  _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
      var e = t.split(":");
      Ie[e[1]] = ir[e[0]]
  }),
  _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
      U.units[t] = "px"
  }),
  ie.registerPlugin(nr);
  var ar = ie.registerPlugin(nr) || ie
    , sr = ar.core.Tween;
  e.Back = ke,
  e.Bounce = Me,
  e.CSSPlugin = nr,
  e.Circ = Se,
  e.Cubic = ye,
  e.Elastic = xe,
  e.Expo = Ce,
  e.Linear = ge,
  e.Power0 = de,
  e.Power1 = ce,
  e.Power2 = pe,
  e.Power3 = _e,
  e.Power4 = me,
  e.Quad = ve,
  e.Quart = Te,
  e.Quint = be,
  e.Sine = Pe,
  e.SteppedEase = Oe,
  e.Strong = we,
  e.TimelineLite = Bt,
  e.TimelineMax = Bt,
  e.TweenLite = Ht,
  e.TweenMax = sr,
  e.default = ar,
  e.gsap = ar;
  if (typeof (window) === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  } else {
      delete e.default
  }
});

/*!
* SplitText 3.3.4
* https://greensock.com
* 
* @license Copyright 2020, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/

!function(D, u) {
  "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function(D) {
  "use strict";
  var b = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function k(D) {
      return e.getComputedStyle(D)
  }
  function n(D, u) {
      var e;
      return i(D) ? D : "string" == (e = typeof D) && !u && D ? E.call(Q.querySelectorAll(D), 0) : D && "object" == e && "length"in D ? E.call(D, 0) : D ? [D] : []
  }
  function o(D) {
      return "absolute" === D.position || !0 === D.absolute
  }
  function p(D, u) {
      for (var e, F = u.length; -1 < --F; )
          if (e = u[F],
          D.substr(0, e.length) === e)
              return e.length
  }
  function r(D, u) {
      void 0 === D && (D = "");
      var e = ~D.indexOf("++")
        , F = 1;
      return e && (D = D.split("++").join("")),
      function() {
          return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? F++ : "") + "'>" : ">")
      }
  }
  function s(D, u, e) {
      var F = D.nodeType;
      if (1 === F || 9 === F || 11 === F)
          for (D = D.firstChild; D; D = D.nextSibling)
              s(D, u, e);
      else
          3 !== F && 4 !== F || (D.nodeValue = D.nodeValue.split(u).join(e))
  }
  function t(D, u) {
      for (var e = u.length; -1 < --e; )
          D.push(u[e])
  }
  function u(D, u, e) {
      for (var F; D && D !== u; ) {
          if (F = D._next || D.nextSibling)
              return F.textContent.charAt(0) === e;
          D = D.parentNode || D._parent
      }
  }
  function v(D) {
      var u, e, F = n(D.childNodes), t = F.length;
      for (u = 0; u < t; u++)
          (e = F[u])._isSplit ? v(e) : (u && 3 === e.previousSibling.nodeType ? e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue : 3 !== e.nodeType && D.insertBefore(e.firstChild, e),
          D.removeChild(e))
  }
  function w(D, u) {
      return parseFloat(u[D]) || 0
  }
  function x(D, e, F, C, i, n, E) {
      var r, l, a, p, d, h, B, f, A, c, g, x, y = k(D), b = w("paddingLeft", y), _ = -999, S = w("borderBottomWidth", y) + w("borderTopWidth", y), T = w("borderLeftWidth", y) + w("borderRightWidth", y), N = w("paddingTop", y) + w("paddingBottom", y), m = w("paddingLeft", y) + w("paddingRight", y), L = .2 * w("fontSize", y), W = y.textAlign, H = [], O = [], V = [], j = e.wordDelimiter || " ", M = e.tag ? e.tag : e.span ? "span" : "div", R = e.type || e.split || "chars,words,lines", z = i && ~R.indexOf("lines") ? [] : null, P = ~R.indexOf("words"), q = ~R.indexOf("chars"), G = o(e), I = e.linesClass, J = ~(I || "").indexOf("++"), K = [];
      for (J && (I = I.split("++").join("")),
      a = (l = D.getElementsByTagName("*")).length,
      d = [],
      r = 0; r < a; r++)
          d[r] = l[r];
      if (z || G)
          for (r = 0; r < a; r++)
              ((h = (p = d[r]).parentNode === D) || G || q && !P) && (x = p.offsetTop,
              z && h && Math.abs(x - _) > L && ("BR" !== p.nodeName || 0 === r) && (B = [],
              z.push(B),
              _ = x),
              G && (p._x = p.offsetLeft,
              p._y = x,
              p._w = p.offsetWidth,
              p._h = p.offsetHeight),
              z && ((p._isSplit && h || !q && h || P && h || !P && p.parentNode.parentNode === D && !p.parentNode._isSplit) && (B.push(p),
              p._x -= b,
              u(p, D, j) && (p._wordEnd = !0)),
              "BR" === p.nodeName && (p.nextSibling && "BR" === p.nextSibling.nodeName || 0 === r) && z.push([])));
      for (r = 0; r < a; r++)
          h = (p = d[r]).parentNode === D,
          "BR" !== p.nodeName ? (G && (A = p.style,
          P || h || (p._x += p.parentNode._x,
          p._y += p.parentNode._y),
          A.left = p._x + "px",
          A.top = p._y + "px",
          A.position = "absolute",
          A.display = "block",
          A.width = p._w + 1 + "px",
          A.height = p._h + "px"),
          !P && q ? p._isSplit ? (p._next = p.nextSibling,
          p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode,
          !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0),
          p.nextSibling && " " === p.nextSibling.textContent && !p.nextSibling.nextSibling && K.push(p.nextSibling),
          p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling,
          p.parentNode.removeChild(p),
          d.splice(r--, 1),
          a--) : h || (x = !p.nextSibling && u(p.parentNode, D, j),
          p.parentNode._parent && p.parentNode._parent.appendChild(p),
          x && p.parentNode.appendChild(Q.createTextNode(" ")),
          "span" === M && (p.style.display = "inline"),
          H.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? O.push(p) : q && !p._isSplit && ("span" === M && (p.style.display = "inline"),
          H.push(p))) : z || G ? (p.parentNode && p.parentNode.removeChild(p),
          d.splice(r--, 1),
          a--) : P || D.appendChild(p);
      for (r = K.length; -1 < --r; )
          K[r].parentNode.removeChild(K[r]);
      if (z) {
          for (G && (c = Q.createElement(M),
          D.appendChild(c),
          g = c.offsetWidth + "px",
          x = c.offsetParent === D ? 0 : D.offsetLeft,
          D.removeChild(c)),
          A = D.style.cssText,
          D.style.cssText = "display:none;"; D.firstChild; )
              D.removeChild(D.firstChild);
          for (f = " " === j && (!G || !P && !q),
          r = 0; r < z.length; r++) {
              for (B = z[r],
              (c = Q.createElement(M)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"),
              I && (c.className = I + (J ? r + 1 : "")),
              V.push(c),
              a = B.length,
              l = 0; l < a; l++)
                  "BR" !== B[l].nodeName && (p = B[l],
                  c.appendChild(p),
                  f && p._wordEnd && c.appendChild(Q.createTextNode(" ")),
                  G && (0 === l && (c.style.top = p._y + "px",
                  c.style.left = b + x + "px"),
                  p.style.top = "0px",
                  x && (p.style.left = p._x - x + "px")));
              0 === a ? c.innerHTML = "&nbsp;" : P || q || (v(c),
              s(c, String.fromCharCode(160), " ")),
              G && (c.style.width = g,
              c.style.height = p._h + "px"),
              D.appendChild(c)
          }
          D.style.cssText = A
      }
      G && (E > D.clientHeight && (D.style.height = E - N + "px",
      D.clientHeight < E && (D.style.height = E + S + "px")),
      n > D.clientWidth && (D.style.width = n - m + "px",
      D.clientWidth < n && (D.style.width = n + T + "px"))),
      t(F, H),
      P && t(C, O),
      t(i, V)
  }
  function y(D, u, e, F) {
      var t, C, i, n, E, r, l, a, d = u.tag ? u.tag : u.span ? "span" : "div", h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"), B = o(u), f = u.wordDelimiter || " ", A = " " !== f ? "" : B ? "&#173; " : " ", c = "</" + d + ">", g = 1, x = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null, y = Q.createElement("div"), v = D.parentNode;
      for (v.insertBefore(y, D),
      y.textContent = D.nodeValue,
      v.removeChild(D),
      l = -1 !== (t = function getText(D) {
          var u = D.nodeType
            , e = "";
          if (1 === u || 9 === u || 11 === u) {
              if ("string" == typeof D.textContent)
                  return D.textContent;
              for (D = D.firstChild; D; D = D.nextSibling)
                  e += getText(D)
          } else if (3 === u || 4 === u)
              return D.nodeValue;
          return e
      }(D = y)).indexOf("<"),
      !1 !== u.reduceWhiteSpace && (t = t.replace(S, " ").replace(_, "")),
      l && (t = t.split("<").join("{{LT}}")),
      E = t.length,
      C = (" " === t.charAt(0) ? A : "") + e(),
      i = 0; i < E; i++)
          if (r = t.charAt(i),
          x && (a = x(t.substr(i), u.specialChars)))
              r = t.substr(i, a || 1),
              C += h && " " !== r ? F() + r + "</" + d + ">" : r,
              i += a - 1;
          else if (r === f && t.charAt(i - 1) !== f && i) {
              for (C += g ? c : "",
              g = 0; t.charAt(i + 1) === f; )
                  C += A,
                  i++;
              i === E - 1 ? C += A : ")" !== t.charAt(i + 1) && (C += A + e(),
              g = 1)
          } else
              "{" === r && "{{LT}}" === t.substr(i, 6) ? (C += h ? F() + "{{LT}}</" + d + ">" : "{{LT}}",
              i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= t.charCodeAt(i + 1) && t.charCodeAt(i + 1) <= 65039 ? (n = ((t.substr(i, 12).split(b) || [])[1] || "").length || 2,
              C += h && " " !== r ? F() + t.substr(i, n) + "</" + d + ">" : t.substr(i, n),
              i += n - 1) : C += h && " " !== r ? F() + r + "</" + d + ">" : r;
      D.outerHTML = C + (g ? c : ""),
      l && s(v, "{{LT}}", "<")
  }
  function z(D, u, e, F) {
      var t, C, i = n(D.childNodes), E = i.length, s = o(u);
      if (3 !== D.nodeType || 1 < E) {
          for (u.absolute = !1,
          t = 0; t < E; t++)
              3 === (C = i[t]).nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === k(C).display && (C.style.display = "inline-block",
              C.style.position = "relative"),
              C._isSplit = !0,
              z(C, u, e, F));
          return u.absolute = s,
          void (D._isSplit = !0)
      }
      y(D, u, e, F)
  }
  var Q, e, F, C, _ = /(?:\r|\n|\t\t)/g, S = /(?:\s\s+)/g, i = Array.isArray, E = [].slice, l = ((C = SplitText.prototype).split = function split(D) {
      this.isSplit && this.revert(),
      this.vars = D = D || this.vars,
      this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var u, e, F, t = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); -1 < --t; )
          F = this.elements[t],
          this._originals[t] = F.innerHTML,
          u = F.clientHeight,
          e = F.clientWidth,
          z(F, D, i, n),
          x(F, D, this.chars, this.words, this.lines, e, u);
      return this.chars.reverse(),
      this.words.reverse(),
      this.lines.reverse(),
      this.isSplit = !0,
      this
  }
  ,
  C.revert = function revert() {
      var e = this._originals;
      if (!e)
          throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function(D, u) {
          return D.innerHTML = e[u]
      }),
      this.chars = [],
      this.words = [],
      this.lines = [],
      this.isSplit = !1,
      this
  }
  ,
  SplitText.create = function create(D, u) {
      return new SplitText(D,u)
  }
  ,
  SplitText);
  function SplitText(D, u) {
      F || function _initCore() {
          Q = document,
          e = window,
          F = 1
      }(),
      this.elements = n(D),
      this.chars = [],
      this.words = [],
      this.lines = [],
      this._originals = [],
      this.vars = u || {},
      this.split(u)
  }
  l.version = "3.3.4",
  D.SplitText = l,
  D.default = l;
  if (typeof (window) === "undefined" || window !== D) {
      Object.defineProperty(D, "__esModule", {
          value: !0
      })
  } else {
      delete D.default
  }
});

!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, (function() {
  "use strict";
  function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      )(t)
  }
  function t(e, t) {
      if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
  }
  function i(e, t) {
      for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1,
          n.configurable = !0,
          "value"in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
  }
  function n(e, t, n) {
      return t && i(e.prototype, t),
      n && i(e, n),
      e
  }
  function s(e) {
      return function(e) {
          if (Array.isArray(e))
              return l(e)
      }(e) || function(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e)
      }(e) || function(e, t) {
          if (!e)
              return;
          if ("string" == typeof e)
              return l(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === i && e.constructor && (i = e.constructor.name);
          if ("Map" === i || "Set" === i)
              return Array.from(e);
          if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
              return l(e, t)
      }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }
  function l(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++)
          n[i] = e[i];
      return n
  }
  var o = Date.now();
  function r() {
      var e = {}
        , t = !0
        , i = 0
        , n = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0],
      i++);
      for (var s = function(i) {
          for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = r(!0, e[n], i[n]) : e[n] = i[n])
      }; i < n; i++) {
          var l = arguments[i];
          s(l)
      }
      return e
  }
  function a(e, t) {
      if ((A(e) || e === window || e === document) && (e = [e]),
      I(e) || O(e) || (e = [e]),
      0 != X(e))
          if (I(e) && !O(e))
              for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++)
                  ;
          else if (O(e))
              for (var s in e)
                  if (M(e, s) && !1 === t.call(e[s], e[s], s, e))
                      break
  }
  function h(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
        , n = e[o] = e[o] || []
        , s = {
          all: n,
          evt: null,
          found: null
      };
      return t && i && X(n) > 0 && a(n, (function(e, n) {
          if (e.eventName == t && e.fn.toString() == i.toString())
              return s.found = !0,
              s.evt = n,
              !1
      }
      )),
      s
  }
  function c(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , i = t.onElement
        , n = t.withCallback
        , s = t.avoidDuplicate
        , l = void 0 === s || s
        , o = t.once
        , r = void 0 !== o && o
        , c = t.useCapture
        , d = void 0 !== c && c
        , u = arguments.length > 2 ? arguments[2] : void 0
        , g = i || [];
      function v(e) {
          C(n) && n.call(u, e, this),
          r && v.destroy()
      }
      return E(g) && (g = document.querySelectorAll(g)),
      v.destroy = function() {
          a(g, (function(t) {
              var i = h(t, e, v);
              i.found && i.all.splice(i.evt, 1),
              t.removeEventListener && t.removeEventListener(e, v, d)
          }
          ))
      }
      ,
      a(g, (function(t) {
          var i = h(t, e, v);
          (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, d),
          i.all.push({
              eventName: e,
              fn: v
          }))
      }
      )),
      v
  }
  function d(e, t) {
      a(t.split(" "), (function(t) {
          return e.classList.add(t)
      }
      ))
  }
  function u(e, t) {
      a(t.split(" "), (function(t) {
          return e.classList.remove(t)
      }
      ))
  }
  function g(e, t) {
      return e.classList.contains(t)
  }
  function v(e, t) {
      for (; e !== document.body; ) {
          if (!(e = e.parentElement))
              return !1;
          if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t))
              return e
      }
  }
  function f(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
        , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!e || "" === t)
          return !1;
      if ("none" == t)
          return C(i) && i(),
          !1;
      var n = S()
        , s = t.split(" ");
      a(s, (function(t) {
          d(e, "g" + t)
      }
      )),
      c(n, {
          onElement: e,
          avoidDuplicate: !1,
          once: !0,
          withCallback: function(e, t) {
              a(s, (function(e) {
                  u(t, "g" + e)
              }
              )),
              C(i) && i()
          }
      })
  }
  function p(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if ("" == t)
          return e.style.webkitTransform = "",
          e.style.MozTransform = "",
          e.style.msTransform = "",
          e.style.OTransform = "",
          e.style.transform = "",
          !1;
      e.style.webkitTransform = t,
      e.style.MozTransform = t,
      e.style.msTransform = t,
      e.style.OTransform = t,
      e.style.transform = t
  }
  function m(e) {
      e.style.display = "block"
  }
  function y(e) {
      e.style.display = "none"
  }
  function x(e) {
      var t = document.createDocumentFragment()
        , i = document.createElement("div");
      for (i.innerHTML = e; i.firstChild; )
          t.appendChild(i.firstChild);
      return t
  }
  function b() {
      return {
          width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      }
  }
  function S() {
      var e, t = document.createElement("fakeelement"), i = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "animationend",
          WebkitAnimation: "webkitAnimationEnd"
      };
      for (e in i)
          if (void 0 !== t.style[e])
              return i[e]
  }
  function w(e, t, i, n) {
      if (e())
          t();
      else {
          var s;
          i || (i = 100);
          var l = setInterval((function() {
              e() && (clearInterval(l),
              s && clearTimeout(s),
              t())
          }
          ), i);
          n && (s = setTimeout((function() {
              clearInterval(l)
          }
          ), n))
      }
  }
  function T(e, t, i) {
      if (P(e))
          console.error("Inject assets error");
      else if (C(t) && (i = t,
      t = !1),
      E(t) && t in window)
          C(i) && i();
      else {
          var n;
          if (-1 !== e.indexOf(".css")) {
              if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0)
                  return void (C(i) && i());
              var s = document.getElementsByTagName("head")[0]
                , l = s.querySelectorAll('link[rel="stylesheet"]')
                , o = document.createElement("link");
              return o.rel = "stylesheet",
              o.type = "text/css",
              o.href = e,
              o.media = "all",
              l ? s.insertBefore(o, l[0]) : s.appendChild(o),
              void (C(i) && i())
          }
          if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
              if (C(i)) {
                  if (E(t))
                      return w((function() {
                          return void 0 !== window[t]
                      }
                      ), (function() {
                          i()
                      }
                      )),
                      !1;
                  i()
              }
          } else {
              var r = document.createElement("script");
              r.type = "text/javascript",
              r.src = e,
              r.onload = function() {
                  if (C(i)) {
                      if (E(t))
                          return w((function() {
                              return void 0 !== window[t]
                          }
                          ), (function() {
                              i()
                          }
                          )),
                          !1;
                      i()
                  }
              }
              ,
              document.body.appendChild(r)
          }
      }
  }
  function k() {
      return "navigator"in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
  }
  function C(e) {
      return "function" == typeof e
  }
  function E(e) {
      return "string" == typeof e
  }
  function A(e) {
      return !(!e || !e.nodeType || 1 != e.nodeType)
  }
  function L(e) {
      return Array.isArray(e)
  }
  function I(e) {
      return e && e.length && isFinite(e.length)
  }
  function O(t) {
      return "object" === e(t) && null != t && !C(t) && !L(t)
  }
  function P(e) {
      return null == e
  }
  function M(e, t) {
      return null !== e && hasOwnProperty.call(e, t)
  }
  function X(e) {
      if (O(e)) {
          if (e.keys)
              return e.keys().length;
          var t = 0;
          for (var i in e)
              M(e, i) && t++;
          return t
      }
      return e.length
  }
  function z(e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
  }
  function Y(e) {
      if (e.events.hasOwnProperty("keyboard"))
          return !1;
      e.events.keyboard = c("keydown", {
          onElement: window,
          withCallback: function(t, i) {
              var n = (t = t || window.event).keyCode;
              if (9 == n) {
                  var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                  if ("input" == l || "textarea" == l || "button" == l)
                      return;
                  t.preventDefault();
                  var o = document.querySelectorAll(".gbtn");
                  if (!o || o.length <= 0)
                      return;
                  var r = s(o).filter((function(e) {
                      return g(e, "focused")
                  }
                  ));
                  if (!r.length) {
                      var a = document.querySelector('.gbtn[tabindex="0"]');
                      return void (a && (a.focus(),
                      d(a, "focused")))
                  }
                  o.forEach((function(e) {
                      return u(e, "focused")
                  }
                  ));
                  var h = r[0].getAttribute("tabindex");
                  h = h || "0";
                  var c = parseInt(h) + 1;
                  c > o.length - 1 && (c = "0");
                  var v = document.querySelector('.gbtn[tabindex="'.concat(c, '"]'));
                  v && (v.focus(),
                  d(v, "focused"))
              }
              39 == n && e.nextSlide(),
              37 == n && e.prevSlide(),
              27 == n && e.close()
          }
      })
  }
  function q(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y)
  }
  function D(e, t) {
      var i = function(e, t) {
          var i = q(e) * q(t);
          if (0 === i)
              return 0;
          var n = function(e, t) {
              return e.x * t.x + e.y * t.y
          }(e, t) / i;
          return n > 1 && (n = 1),
          Math.acos(n)
      }(e, t);
      return function(e, t) {
          return e.x * t.y - t.x * e.y
      }(e, t) > 0 && (i *= -1),
      180 * i / Math.PI
  }
  var N = function() {
      function e(i) {
          t(this, e),
          this.handlers = [],
          this.el = i
      }
      return n(e, [{
          key: "add",
          value: function(e) {
              this.handlers.push(e)
          }
      }, {
          key: "del",
          value: function(e) {
              e || (this.handlers = []);
              for (var t = this.handlers.length; t >= 0; t--)
                  this.handlers[t] === e && this.handlers.splice(t, 1)
          }
      }, {
          key: "dispatch",
          value: function() {
              for (var e = 0, t = this.handlers.length; e < t; e++) {
                  var i = this.handlers[e];
                  "function" == typeof i && i.apply(this.el, arguments)
              }
          }
      }]),
      e
  }();
  function _(e, t) {
      var i = new N(e);
      return i.add(t),
      i
  }
  var B = function() {
      function e(i, n) {
          t(this, e),
          this.element = "string" == typeof i ? document.querySelector(i) : i,
          this.start = this.start.bind(this),
          this.move = this.move.bind(this),
          this.end = this.end.bind(this),
          this.cancel = this.cancel.bind(this),
          this.element.addEventListener("touchstart", this.start, !1),
          this.element.addEventListener("touchmove", this.move, !1),
          this.element.addEventListener("touchend", this.end, !1),
          this.element.addEventListener("touchcancel", this.cancel, !1),
          this.preV = {
              x: null,
              y: null
          },
          this.pinchStartLen = null,
          this.zoom = 1,
          this.isDoubleTap = !1;
          var s = function() {};
          this.rotate = _(this.element, n.rotate || s),
          this.touchStart = _(this.element, n.touchStart || s),
          this.multipointStart = _(this.element, n.multipointStart || s),
          this.multipointEnd = _(this.element, n.multipointEnd || s),
          this.pinch = _(this.element, n.pinch || s),
          this.swipe = _(this.element, n.swipe || s),
          this.tap = _(this.element, n.tap || s),
          this.doubleTap = _(this.element, n.doubleTap || s),
          this.longTap = _(this.element, n.longTap || s),
          this.singleTap = _(this.element, n.singleTap || s),
          this.pressMove = _(this.element, n.pressMove || s),
          this.twoFingerPressMove = _(this.element, n.twoFingerPressMove || s),
          this.touchMove = _(this.element, n.touchMove || s),
          this.touchEnd = _(this.element, n.touchEnd || s),
          this.touchCancel = _(this.element, n.touchCancel || s),
          this._cancelAllHandler = this.cancelAll.bind(this),
          window.addEventListener("scroll", this._cancelAllHandler),
          this.delta = null,
          this.last = null,
          this.now = null,
          this.tapTimeout = null,
          this.singleTapTimeout = null,
          this.longTapTimeout = null,
          this.swipeTimeout = null,
          this.x1 = this.x2 = this.y1 = this.y2 = null,
          this.preTapPosition = {
              x: null,
              y: null
          }
      }
      return n(e, [{
          key: "start",
          value: function(e) {
              if (e.touches) {
                  this.now = Date.now(),
                  this.x1 = e.touches[0].pageX,
                  this.y1 = e.touches[0].pageY,
                  this.delta = this.now - (this.last || this.now),
                  this.touchStart.dispatch(e, this.element),
                  null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30,
                  this.isDoubleTap && clearTimeout(this.singleTapTimeout)),
                  this.preTapPosition.x = this.x1,
                  this.preTapPosition.y = this.y1,
                  this.last = this.now;
                  var t = this.preV;
                  if (e.touches.length > 1) {
                      this._cancelLongTap(),
                      this._cancelSingleTap();
                      var i = {
                          x: e.touches[1].pageX - this.x1,
                          y: e.touches[1].pageY - this.y1
                      };
                      t.x = i.x,
                      t.y = i.y,
                      this.pinchStartLen = q(t),
                      this.multipointStart.dispatch(e, this.element)
                  }
                  this._preventTap = !1,
                  this.longTapTimeout = setTimeout(function() {
                      this.longTap.dispatch(e, this.element),
                      this._preventTap = !0
                  }
                  .bind(this), 750)
              }
          }
      }, {
          key: "move",
          value: function(e) {
              if (e.touches) {
                  var t = this.preV
                    , i = e.touches.length
                    , n = e.touches[0].pageX
                    , s = e.touches[0].pageY;
                  if (this.isDoubleTap = !1,
                  i > 1) {
                      var l = e.touches[1].pageX
                        , o = e.touches[1].pageY
                        , r = {
                          x: e.touches[1].pageX - n,
                          y: e.touches[1].pageY - s
                      };
                      null !== t.x && (this.pinchStartLen > 0 && (e.zoom = q(r) / this.pinchStartLen,
                      this.pinch.dispatch(e, this.element)),
                      e.angle = D(r, t),
                      this.rotate.dispatch(e, this.element)),
                      t.x = r.x,
                      t.y = r.y,
                      null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2,
                      e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0,
                      e.deltaY = 0),
                      this.twoFingerPressMove.dispatch(e, this.element),
                      this.sx2 = l,
                      this.sy2 = o
                  } else {
                      if (null !== this.x2) {
                          e.deltaX = n - this.x2,
                          e.deltaY = s - this.y2;
                          var a = Math.abs(this.x1 - this.x2)
                            , h = Math.abs(this.y1 - this.y2);
                          (a > 10 || h > 10) && (this._preventTap = !0)
                      } else
                          e.deltaX = 0,
                          e.deltaY = 0;
                      this.pressMove.dispatch(e, this.element)
                  }
                  this.touchMove.dispatch(e, this.element),
                  this._cancelLongTap(),
                  this.x2 = n,
                  this.y2 = s,
                  i > 1 && e.preventDefault()
              }
          }
      }, {
          key: "end",
          value: function(e) {
              if (e.changedTouches) {
                  this._cancelLongTap();
                  var t = this;
                  e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element),
                  this.sx2 = this.sy2 = null),
                  this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2),
                  this.swipeTimeout = setTimeout((function() {
                      t.swipe.dispatch(e, t.element)
                  }
                  ), 0)) : (this.tapTimeout = setTimeout((function() {
                      t._preventTap || t.tap.dispatch(e, t.element),
                      t.isDoubleTap && (t.doubleTap.dispatch(e, t.element),
                      t.isDoubleTap = !1)
                  }
                  ), 0),
                  t.isDoubleTap || (t.singleTapTimeout = setTimeout((function() {
                      t.singleTap.dispatch(e, t.element)
                  }
                  ), 250))),
                  this.touchEnd.dispatch(e, this.element),
                  this.preV.x = 0,
                  this.preV.y = 0,
                  this.zoom = 1,
                  this.pinchStartLen = null,
                  this.x1 = this.x2 = this.y1 = this.y2 = null
              }
          }
      }, {
          key: "cancelAll",
          value: function() {
              this._preventTap = !0,
              clearTimeout(this.singleTapTimeout),
              clearTimeout(this.tapTimeout),
              clearTimeout(this.longTapTimeout),
              clearTimeout(this.swipeTimeout)
          }
      }, {
          key: "cancel",
          value: function(e) {
              this.cancelAll(),
              this.touchCancel.dispatch(e, this.element)
          }
      }, {
          key: "_cancelLongTap",
          value: function() {
              clearTimeout(this.longTapTimeout)
          }
      }, {
          key: "_cancelSingleTap",
          value: function() {
              clearTimeout(this.singleTapTimeout)
          }
      }, {
          key: "_swipeDirection",
          value: function(e, t, i, n) {
              return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
          }
      }, {
          key: "on",
          value: function(e, t) {
              this[e] && this[e].add(t)
          }
      }, {
          key: "off",
          value: function(e, t) {
              this[e] && this[e].del(t)
          }
      }, {
          key: "destroy",
          value: function() {
              return this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
              this.tapTimeout && clearTimeout(this.tapTimeout),
              this.longTapTimeout && clearTimeout(this.longTapTimeout),
              this.swipeTimeout && clearTimeout(this.swipeTimeout),
              this.element.removeEventListener("touchstart", this.start),
              this.element.removeEventListener("touchmove", this.move),
              this.element.removeEventListener("touchend", this.end),
              this.element.removeEventListener("touchcancel", this.cancel),
              this.rotate.del(),
              this.touchStart.del(),
              this.multipointStart.del(),
              this.multipointEnd.del(),
              this.pinch.del(),
              this.swipe.del(),
              this.tap.del(),
              this.doubleTap.del(),
              this.longTap.del(),
              this.singleTap.del(),
              this.pressMove.del(),
              this.twoFingerPressMove.del(),
              this.touchMove.del(),
              this.touchEnd.del(),
              this.touchCancel.del(),
              this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null,
              window.removeEventListener("scroll", this._cancelAllHandler),
              null
          }
      }]),
      e
  }();
  function W(e) {
      var t = function() {
          var e, t = document.createElement("fakeelement"), i = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd"
          };
          for (e in i)
              if (void 0 !== t.style[e])
                  return i[e]
      }()
        , i = g(e, "gslide-media") ? e : e.querySelector(".gslide-media")
        , n = e.querySelector(".gslide-description");
      d(i, "greset"),
      p(i, "translate3d(0, 0, 0)"),
      c(t, {
          onElement: i,
          once: !0,
          withCallback: function(e, t) {
              u(i, "greset")
          }
      }),
      i.style.opacity = "",
      n && (n.style.opacity = "")
  }
  function H(e) {
      if (e.events.hasOwnProperty("touch"))
          return !1;
      var t, i, n, s = b(), l = s.width, o = s.height, r = !1, a = null, h = null, c = null, f = !1, m = 1, y = 1, x = !1, S = !1, w = null, T = null, k = null, C = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, X = 0, z = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new B(z,{
          touchStart: function(t) {
              if (r = !0,
              (g(t.targetTouches[0].target, "ginner-container") || v(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1),
              v(t.targetTouches[0].target, ".gslide-inline") && !g(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1),
              r) {
                  if (P = t.targetTouches[0],
                  O.pageX = t.targetTouches[0].pageX,
                  O.pageY = t.targetTouches[0].pageY,
                  M = t.targetTouches[0].clientX,
                  X = t.targetTouches[0].clientY,
                  a = e.activeSlide,
                  h = a.querySelector(".gslide-media"),
                  n = a.querySelector(".gslide-inline"),
                  c = null,
                  g(h, "gslide-image") && (c = h.querySelector("img")),
                  u(Y, "greset"),
                  t.pageX > 20 && t.pageX < window.innerWidth - 20)
                      return;
                  t.preventDefault()
              }
          },
          touchMove: function(s) {
              if (r && (P = s.targetTouches[0],
              !x && !S)) {
                  if (n && n.offsetHeight > o) {
                      var a = O.pageX - P.pageX;
                      if (Math.abs(a) <= 13)
                          return !1
                  }
                  f = !0;
                  var d, u = s.targetTouches[0].clientX, g = s.targetTouches[0].clientY, v = M - u, m = X - g;
                  if (Math.abs(v) > Math.abs(m) ? (L = !1,
                  I = !0) : (I = !1,
                  L = !0),
                  t = P.pageX - O.pageX,
                  E = 100 * t / l,
                  i = P.pageY - O.pageY,
                  A = 100 * i / o,
                  L && c && (d = 1 - Math.abs(i) / o,
                  Y.style.opacity = d,
                  e.settings.touchFollowAxis && (E = 0)),
                  I && (d = 1 - Math.abs(t) / l,
                  h.style.opacity = d,
                  e.settings.touchFollowAxis && (A = 0)),
                  !c)
                      return p(h, "translate3d(".concat(E, "%, 0, 0)"));
                  p(h, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"))
              }
          },
          touchEnd: function() {
              if (r) {
                  if (f = !1,
                  S || x)
                      return k = w,
                      void (C = T);
                  var t = Math.abs(parseInt(A))
                    , i = Math.abs(parseInt(E));
                  if (!(t > 29 && c))
                      return t < 29 && i < 25 ? (d(Y, "greset"),
                      Y.style.opacity = 1,
                      W(h)) : void 0;
                  e.close()
              }
          },
          multipointEnd: function() {
              setTimeout((function() {
                  x = !1
              }
              ), 50)
          },
          multipointStart: function() {
              x = !0,
              m = y || 1
          },
          pinch: function(e) {
              if (!c || f)
                  return !1;
              x = !0,
              c.scaleX = c.scaleY = m * e.zoom;
              var t = m * e.zoom;
              if (S = !0,
              t <= 1)
                  return S = !1,
                  t = 1,
                  C = null,
                  k = null,
                  w = null,
                  T = null,
                  void c.setAttribute("style", "");
              t > 4.5 && (t = 4.5),
              c.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"),
              y = t
          },
          pressMove: function(e) {
              if (S && !x) {
                  var t = P.pageX - O.pageX
                    , i = P.pageY - O.pageY;
                  k && (t += k),
                  C && (i += C),
                  w = t,
                  T = i;
                  var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                  y && (n += " scale3d(".concat(y, ", ").concat(y, ", 1)")),
                  p(c, n)
              }
          },
          swipe: function(t) {
              if (!S)
                  if (x)
                      x = !1;
                  else {
                      if ("Left" == t.direction) {
                          if (e.index == e.elements.length - 1)
                              return W(h);
                          e.nextSlide()
                      }
                      if ("Right" == t.direction) {
                          if (0 == e.index)
                              return W(h);
                          e.prevSlide()
                      }
                  }
          }
      });
      e.events.touch = q
  }
  var j = function() {
      function e(i, n) {
          var s = this
            , l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          if (t(this, e),
          this.img = i,
          this.slide = n,
          this.onclose = l,
          this.img.setZoomEvents)
              return !1;
          this.active = !1,
          this.zoomedIn = !1,
          this.dragging = !1,
          this.currentX = null,
          this.currentY = null,
          this.initialX = null,
          this.initialY = null,
          this.xOffset = 0,
          this.yOffset = 0,
          this.img.addEventListener("mousedown", (function(e) {
              return s.dragStart(e)
          }
          ), !1),
          this.img.addEventListener("mouseup", (function(e) {
              return s.dragEnd(e)
          }
          ), !1),
          this.img.addEventListener("mousemove", (function(e) {
              return s.drag(e)
          }
          ), !1),
          this.img.addEventListener("click", (function(e) {
              return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(),
              !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
          }
          ), !1),
          this.img.setZoomEvents = !0
      }
      return n(e, [{
          key: "zoomIn",
          value: function() {
              var e = this.widowWidth();
              if (!(this.zoomedIn || e <= 768)) {
                  var t = this.img;
                  if (t.setAttribute("data-style", t.getAttribute("style")),
                  t.style.maxWidth = t.naturalWidth + "px",
                  t.style.maxHeight = t.naturalHeight + "px",
                  t.naturalWidth > e) {
                      var i = e / 2 - t.naturalWidth / 2;
                      this.setTranslate(this.img.parentNode, i, 0)
                  }
                  this.slide.classList.add("zoomed"),
                  this.zoomedIn = !0
              }
          }
      }, {
          key: "zoomOut",
          value: function() {
              this.img.parentNode.setAttribute("style", ""),
              this.img.setAttribute("style", this.img.getAttribute("data-style")),
              this.slide.classList.remove("zoomed"),
              this.zoomedIn = !1,
              this.currentX = null,
              this.currentY = null,
              this.initialX = null,
              this.initialY = null,
              this.xOffset = 0,
              this.yOffset = 0,
              this.onclose && "function" == typeof this.onclose && this.onclose()
          }
      }, {
          key: "dragStart",
          value: function(e) {
              e.preventDefault(),
              this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset,
              this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset,
              this.initialY = e.clientY - this.yOffset),
              e.target === this.img && (this.active = !0,
              this.img.classList.add("dragging"))) : this.active = !1
          }
      }, {
          key: "dragEnd",
          value: function(e) {
              var t = this;
              e.preventDefault(),
              this.initialX = this.currentX,
              this.initialY = this.currentY,
              this.active = !1,
              setTimeout((function() {
                  t.dragging = !1,
                  t.img.isDragging = !1,
                  t.img.classList.remove("dragging")
              }
              ), 100)
          }
      }, {
          key: "drag",
          value: function(e) {
              this.active && (e.preventDefault(),
              "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX,
              this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX,
              this.currentY = e.clientY - this.initialY),
              this.xOffset = this.currentX,
              this.yOffset = this.currentY,
              this.img.isDragging = !0,
              this.dragging = !0,
              this.setTranslate(this.img, this.currentX, this.currentY))
          }
      }, {
          key: "onMove",
          value: function(e) {
              if (this.zoomedIn) {
                  var t = e.clientX - this.img.naturalWidth / 2
                    , i = e.clientY - this.img.naturalHeight / 2;
                  this.setTranslate(this.img, t, i)
              }
          }
      }, {
          key: "setTranslate",
          value: function(e, t, i) {
              e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
          }
      }, {
          key: "widowWidth",
          value: function() {
              return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          }
      }]),
      e
  }()
    , V = function() {
      function e() {
          var i = this
            , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e);
          var s = n.dragEl
            , l = n.toleranceX
            , o = void 0 === l ? 40 : l
            , r = n.toleranceY
            , a = void 0 === r ? 65 : r
            , h = n.slide
            , c = void 0 === h ? null : h
            , d = n.instance
            , u = void 0 === d ? null : d;
          this.el = s,
          this.active = !1,
          this.dragging = !1,
          this.currentX = null,
          this.currentY = null,
          this.initialX = null,
          this.initialY = null,
          this.xOffset = 0,
          this.yOffset = 0,
          this.direction = null,
          this.lastDirection = null,
          this.toleranceX = o,
          this.toleranceY = a,
          this.toleranceReached = !1,
          this.dragContainer = this.el,
          this.slide = c,
          this.instance = u,
          this.el.addEventListener("mousedown", (function(e) {
              return i.dragStart(e)
          }
          ), !1),
          this.el.addEventListener("mouseup", (function(e) {
              return i.dragEnd(e)
          }
          ), !1),
          this.el.addEventListener("mousemove", (function(e) {
              return i.drag(e)
          }
          ), !1)
      }
      return n(e, [{
          key: "dragStart",
          value: function(e) {
              if (this.slide.classList.contains("zoomed"))
                  this.active = !1;
              else {
                  "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset,
                  this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset,
                  this.initialY = e.clientY - this.yOffset);
                  var t = e.target.nodeName.toLowerCase();
                  e.target.classList.contains("nodrag") || v(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(),
                  (e.target === this.el || "img" !== t && v(e.target, ".gslide-inline")) && (this.active = !0,
                  this.el.classList.add("dragging"),
                  this.dragContainer = v(e.target, ".ginner-container")))
              }
          }
      }, {
          key: "dragEnd",
          value: function(e) {
              var t = this;
              e && e.preventDefault(),
              this.initialX = 0,
              this.initialY = 0,
              this.currentX = null,
              this.currentY = null,
              this.initialX = null,
              this.initialY = null,
              this.xOffset = 0,
              this.yOffset = 0,
              this.active = !1,
              this.doSlideChange && (this.instance.preventOutsideClick = !0,
              "right" == this.doSlideChange && this.instance.prevSlide(),
              "left" == this.doSlideChange && this.instance.nextSlide()),
              this.doSlideClose && this.instance.close(),
              this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0),
              setTimeout((function() {
                  t.instance.preventOutsideClick = !1,
                  t.toleranceReached = !1,
                  t.lastDirection = null,
                  t.dragging = !1,
                  t.el.isDragging = !1,
                  t.el.classList.remove("dragging"),
                  t.slide.classList.remove("dragging-nav"),
                  t.dragContainer.style.transform = "",
                  t.dragContainer.style.transition = ""
              }
              ), 100)
          }
      }, {
          key: "drag",
          value: function(e) {
              if (this.active) {
                  e.preventDefault(),
                  this.slide.classList.add("dragging-nav"),
                  "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX,
                  this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX,
                  this.currentY = e.clientY - this.initialY),
                  this.xOffset = this.currentX,
                  this.yOffset = this.currentY,
                  this.el.isDragging = !0,
                  this.dragging = !0,
                  this.doSlideChange = !1,
                  this.doSlideClose = !1;
                  var t = Math.abs(this.currentX)
                    , i = Math.abs(this.currentY);
                  if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                      this.yOffset = 0,
                      this.lastDirection = "x",
                      this.setTranslate(this.dragContainer, this.currentX, 0);
                      var n = this.shouldChange();
                      if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n),
                      this.instance.settings.dragAutoSnap && n)
                          return this.instance.preventOutsideClick = !0,
                          this.toleranceReached = !0,
                          this.active = !1,
                          this.instance.preventOutsideClick = !0,
                          this.dragEnd(null),
                          "right" == n && this.instance.prevSlide(),
                          void ("left" == n && this.instance.nextSlide())
                  }
                  if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                      this.xOffset = 0,
                      this.lastDirection = "y",
                      this.setTranslate(this.dragContainer, 0, this.currentY);
                      var s = this.shouldClose();
                      return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0),
                      void (this.instance.settings.dragAutoSnap && s && this.instance.close())
                  }
              }
          }
      }, {
          key: "shouldChange",
          value: function() {
              var e = !1;
              if (Math.abs(this.currentX) >= this.toleranceX) {
                  var t = this.currentX > 0 ? "right" : "left";
                  ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
              }
              return e
          }
      }, {
          key: "shouldClose",
          value: function() {
              var e = !1;
              return Math.abs(this.currentY) >= this.toleranceY && (e = !0),
              e
          }
      }, {
          key: "setTranslate",
          value: function(e, t, i) {
              var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              e.style.transition = n ? "all .2s ease" : "",
              e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
          }
      }]),
      e
  }();
  function F(e, t, i, n) {
      var s = e.querySelector(".gslide-media")
        , l = new Image
        , o = "gSlideTitle_" + i
        , r = "gSlideDesc_" + i;
      l.addEventListener("load", (function() {
          C(n) && n()
      }
      ), !1),
      l.src = t.href,
      l.alt = "",
      "" !== t.title && l.setAttribute("aria-labelledby", o),
      "" !== t.description && l.setAttribute("aria-describedby", r),
      s.insertBefore(l, s.firstChild)
  }
  function R(e, t, i, n) {
      var s = this
        , l = e.querySelector(".ginner-container")
        , o = "gvideo" + i
        , r = e.querySelector(".gslide-media")
        , a = this.getAllPlayers();
      d(l, "gvideo-container"),
      r.insertBefore(x('<div class="gvideo-wrapper"></div>'), r.firstChild);
      var h = e.querySelector(".gvideo-wrapper");
      T(this.settings.plyr.css, "Plyr");
      var c = t.href
        , u = location.protocol.replace(":", "")
        , g = ""
        , v = ""
        , f = !1;
      "file" == u && (u = "http"),
      r.style.maxWidth = t.width,
      T(this.settings.plyr.js, "Plyr", (function() {
          if (c.match(/vimeo\.com\/([0-9]*)/)) {
              var e = /vimeo.*\/(\d+)/i.exec(c);
              g = "vimeo",
              v = e[1]
          }
          if (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
              var l = function(e) {
                  var t = "";
                  t = void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (t = e[2].split(/[^0-9a-z_\-]/i))[0] : e;
                  return t
              }(c);
              g = "youtube",
              v = l
          }
          if (null !== c.match(/\.(mp4|ogg|webm|mov)$/)) {
              g = "local";
              var r = '<video id="' + o + '" ';
              r += 'style="background:#000; max-width: '.concat(t.width, ';" '),
              r += 'preload="metadata" ',
              r += 'x-webkit-airplay="allow" ',
              r += 'webkit-playsinline="" ',
              r += "controls ",
              r += 'class="gvideo-local">';
              var u = c.toLowerCase().split(".").pop()
                , p = {
                  mp4: "",
                  ogg: "",
                  webm: ""
              };
              for (var m in p[u = "mov" == u ? "mp4" : u] = c,
              p)
                  if (p.hasOwnProperty(m)) {
                      var y = p[m];
                      t.hasOwnProperty(m) && (y = t[m]),
                      "" !== y && (r += '<source src="'.concat(y, '" type="video/').concat(m, '">'))
                  }
              f = x(r += "</video>")
          }
          var b = f || x('<div id="'.concat(o, '" data-plyr-provider="').concat(g, '" data-plyr-embed-id="').concat(v, '"></div>'));
          d(h, "".concat(g, "-video gvideo")),
          h.appendChild(b),
          h.setAttribute("data-id", o),
          h.setAttribute("data-index", i);
          var S = M(s.settings.plyr, "config") ? s.settings.plyr.config : {}
            , w = new Plyr("#" + o,S);
          w.on("ready", (function(e) {
              var t = e.detail.plyr;
              a[o] = t,
              C(n) && n()
          }
          )),
          w.on("enterfullscreen", G),
          w.on("exitfullscreen", G)
      }
      ))
  }
  function G(e) {
      var t = v(e.target, ".gslide-media");
      "enterfullscreen" == e.type && d(t, "fullscreen"),
      "exitfullscreen" == e.type && u(t, "fullscreen")
  }
  function Z(e, t, i, n) {
      var s, l = this, o = e.querySelector(".gslide-media"), r = !(!M(t, "href") || !t.href) && t.href.split("#").pop().trim(), a = !(!M(t, "content") || !t.content) && t.content;
      if (a && (E(a) && (s = x('<div class="ginlined-content">'.concat(a, "</div>"))),
      A(a))) {
          "none" == a.style.display && (a.style.display = "block");
          var h = document.createElement("div");
          h.className = "ginlined-content",
          h.appendChild(a),
          s = h
      }
      if (r) {
          var u = document.getElementById(r);
          if (!u)
              return !1;
          var g = u.cloneNode(!0);
          g.style.height = t.height,
          g.style.maxWidth = t.width,
          d(g, "ginlined-content"),
          s = g
      }
      if (!s)
          return console.error("Unable to append inline slide content", t),
          !1;
      o.style.height = t.height,
      o.style.width = t.width,
      o.appendChild(s),
      this.events["inlineclose" + r] = c("click", {
          onElement: o.querySelectorAll(".gtrigger-close"),
          withCallback: function(e) {
              e.preventDefault(),
              l.close()
          }
      }),
      C(n) && n()
  }
  function $(e, t, i, n) {
      var s = e.querySelector(".gslide-media")
        , l = function(e) {
          var t = e.url
            , i = e.allow
            , n = e.callback
            , s = e.appendTo
            , l = document.createElement("iframe");
          return l.className = "vimeo-video gvideo",
          l.src = t,
          l.style.width = "100%",
          l.style.height = "100%",
          i && l.setAttribute("allow", i),
          l.onload = function() {
              d(l, "node-ready"),
              C(n) && n()
          }
          ,
          s && s.appendChild(l),
          l
      }({
          url: t.href,
          callback: n
      });
      s.parentNode.style.maxWidth = t.width,
      s.parentNode.style.height = t.height,
      s.appendChild(l)
  }
  var U = function() {
      function e() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e),
          this.defaults = {
              href: "",
              title: "",
              type: "",
              description: "",
              descPosition: "bottom",
              effect: "",
              width: "",
              height: "",
              content: !1,
              zoomable: !0,
              draggable: !0
          },
          O(i) && (this.defaults = r(this.defaults, i))
      }
      return n(e, [{
          key: "sourceType",
          value: function(e) {
              var t = e;
              if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/))
                  return "image";
              if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))
                  return "video";
              if (e.match(/vimeo\.com\/([0-9]*)/))
                  return "video";
              if (null !== e.match(/\.(mp4|ogg|webm|mov)$/))
                  return "video";
              if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)$/))
                  return "audio";
              if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim())
                  return "inline";
              return e.indexOf("goajax=true") > -1 ? "ajax" : "external"
          }
      }, {
          key: "parseConfig",
          value: function(e, t) {
              var i = this
                , n = r({
                  descPosition: t.descPosition
              }, this.defaults);
              if (O(e) && !A(e)) {
                  M(e, "type") || (M(e, "content") && e.content ? e.type = "inline" : M(e, "href") && (e.type = this.sourceType(e.href)));
                  var s = r(n, e);
                  return this.setSize(s, t),
                  s
              }
              var l = ""
                , o = e.getAttribute("data-glightbox")
                , h = e.nodeName.toLowerCase();
              if ("a" === h && (l = e.href),
              "img" === h && (l = e.src),
              n.href = l,
              a(n, (function(s, l) {
                  M(t, l) && "width" !== l && (n[l] = t[l]);
                  var o = e.dataset[l];
                  P(o) || (n[l] = i.sanitizeValue(o))
              }
              )),
              n.content && (n.type = "inline"),
              !n.type && l && (n.type = this.sourceType(l)),
              P(o)) {
                  if (!n.title && "a" == h) {
                      var c = e.title;
                      P(c) || "" === c || (n.title = c)
                  }
                  if (!n.title && "img" == h) {
                      var d = e.alt;
                      P(d) || "" === d || (n.title = d)
                  }
              } else {
                  var u = [];
                  a(n, (function(e, t) {
                      u.push(";\\s?" + t)
                  }
                  )),
                  u = u.join("\\s?:|"),
                  "" !== o.trim() && a(n, (function(e, t) {
                      var s = o
                        , l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)")
                        , r = s.match(l);
                      if (r && r.length && r[1]) {
                          var a = r[1].trim().replace(/;\s*$/, "");
                          n[t] = i.sanitizeValue(a)
                      }
                  }
                  ))
              }
              if (n.description && "." == n.description.substring(0, 1) && document.querySelector(n.description))
                  n.description = document.querySelector(n.description).innerHTML;
              else {
                  var g = e.querySelector(".glightbox-desc");
                  g && (n.description = g.innerHTML)
              }
              return this.setSize(n, t),
              this.slideConfig = n,
              n
          }
      }, {
          key: "setSize",
          value: function(e, t) {
              var i = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width)
                , n = this.checkSize(t.height);
              return e.width = M(e, "width") && "" !== e.width ? this.checkSize(e.width) : i,
              e.height = M(e, "height") && "" !== e.height ? this.checkSize(e.height) : n,
              e
          }
      }, {
          key: "checkSize",
          value: function(e) {
              return z(e) ? "".concat(e, "px") : e
          }
      }, {
          key: "sanitizeValue",
          value: function(e) {
              return "true" !== e && "false" !== e ? e : "true" === e
          }
      }]),
      e
  }()
    , J = function() {
      function e(i, n, s) {
          t(this, e),
          this.element = i,
          this.instance = n,
          this.index = s
      }
      return n(e, [{
          key: "setContent",
          value: function() {
              var e = this
                , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (g(t, "loaded"))
                  return !1;
              var n = this.instance.settings
                , s = this.slideConfig
                , l = k();
              C(n.beforeSlideLoad) && n.beforeSlideLoad({
                  index: this.index,
                  slide: t,
                  player: !1
              });
              var o = s.type
                , r = s.descPosition
                , a = t.querySelector(".gslide-media")
                , h = t.querySelector(".gslide-title")
                , c = t.querySelector(".gslide-desc")
                , u = t.querySelector(".gdesc-inner")
                , v = i
                , f = "gSlideTitle_" + this.index
                , p = "gSlideDesc_" + this.index;
              if (C(n.afterSlideLoad) && (v = function() {
                  C(i) && i(),
                  n.afterSlideLoad({
                      index: e.index,
                      slide: t,
                      player: e.instance.getSlidePlayerInstance(e.index)
                  })
              }
              ),
              "" == s.title && "" == s.description ? u && u.parentNode.parentNode.removeChild(u.parentNode) : (h && "" !== s.title ? (h.id = f,
              h.innerHTML = s.title) : h.parentNode.removeChild(h),
              c && "" !== s.description ? (c.id = p,
              l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText),
              c.innerHTML = s.smallDescription,
              this.descriptionEvents(c, s)) : c.innerHTML = s.description) : c.parentNode.removeChild(c),
              d(a.parentNode, "desc-".concat(r)),
              d(u.parentNode, "description-".concat(r))),
              d(a, "gslide-".concat(o)),
              d(t, "loaded"),
              "video" !== o) {
                  if ("external" !== o)
                      return "inline" === o ? (Z.apply(this.instance, [t, s, this.index, v]),
                      void (n.draggable && new V({
                          dragEl: t.querySelector(".gslide-inline"),
                          toleranceX: n.dragToleranceX,
                          toleranceY: n.dragToleranceY,
                          slide: t,
                          instance: this.instance
                      }))) : void ("image" !== o ? C(v) && v() : F(t, s, this.index, (function() {
                          var i = t.querySelector("img");
                          n.draggable && new V({
                              dragEl: i,
                              toleranceX: n.dragToleranceX,
                              toleranceY: n.dragToleranceY,
                              slide: t,
                              instance: e.instance
                          }),
                          s.zoomable && i.naturalWidth > i.offsetWidth && (d(i, "zoomable"),
                          new j(i,t,(function() {
                              e.instance.resize()
                          }
                          ))),
                          C(v) && v()
                      }
                      )));
                  $.apply(this, [t, s, this.index, v])
              } else
                  R.apply(this.instance, [t, s, this.index, v])
          }
      }, {
          key: "slideShortDesc",
          value: function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50
                , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                , n = document.createElement("div");
              n.innerHTML = e;
              var s = n.innerText
                , l = i;
              if ((e = s.trim()).length <= t)
                  return e;
              var o = e.substr(0, t - 1);
              return l ? (n = null,
              o + '... <a href="#" class="desc-more">' + i + "</a>") : o
          }
      }, {
          key: "descriptionEvents",
          value: function(e, t) {
              var i = this
                , n = e.querySelector(".desc-more");
              if (!n)
                  return !1;
              c("click", {
                  onElement: n,
                  withCallback: function(e, n) {
                      e.preventDefault();
                      var s = document.body
                        , l = v(n, ".gslide-desc");
                      if (!l)
                          return !1;
                      l.innerHTML = t.description,
                      d(s, "gdesc-open");
                      var o = c("click", {
                          onElement: [s, v(l, ".gslide-description")],
                          withCallback: function(e, n) {
                              "a" !== e.target.nodeName.toLowerCase() && (u(s, "gdesc-open"),
                              d(s, "gdesc-closed"),
                              l.innerHTML = t.smallDescription,
                              i.descriptionEvents(l, t),
                              setTimeout((function() {
                                  u(s, "gdesc-closed")
                              }
                              ), 400),
                              o.destroy())
                          }
                      })
                  }
              })
          }
      }, {
          key: "create",
          value: function() {
              return x(this.instance.settings.slideHTML)
          }
      }, {
          key: "getConfig",
          value: function() {
              var e = new U(this.instance.settings.slideExtraAttributes);
              return this.slideConfig = e.parseConfig(this.element, this.instance.settings),
              this.slideConfig
          }
      }]),
      e
  }()
    , K = k()
    , Q = null !== k() || void 0 !== document.createTouch || "ontouchstart"in window || "onmsgesturechange"in window || navigator.msMaxTouchPoints
    , ee = document.getElementsByTagName("html")[0]
    , te = {
      selector: ".glightbox",
      elements: null,
      skin: "clean",
      theme: "clean",
      closeButton: !0,
      startAt: null,
      autoplayVideos: !0,
      autofocusVideos: !0,
      descPosition: "bottom",
      width: "900px",
      height: "506px",
      videosWidth: "960px",
      beforeSlideChange: null,
      afterSlideChange: null,
      beforeSlideLoad: null,
      afterSlideLoad: null,
      slideInserted: null,
      slideRemoved: null,
      slideExtraAttributes: null,
      onOpen: null,
      onClose: null,
      loop: !1,
      zoomable: !0,
      draggable: !0,
      dragAutoSnap: !1,
      dragToleranceX: 40,
      dragToleranceY: 65,
      preload: !0,
      oneSlidePerOpen: !1,
      touchNavigation: !0,
      touchFollowAxis: !0,
      keyboardNavigation: !0,
      closeOnOutsideClick: !0,
      plugins: !1,
      plyr: {
          css: "https://cdn.plyr.io/3.6.3/plyr.css",
          js: "https://cdn.plyr.io/3.6.3/plyr.js",
          config: {
              ratio: "16:9",
              fullscreen: {
                  enabled: !0,
                  iosNative: !0
              },
              youtube: {
                  noCookie: !0,
                  rel: 0,
                  showinfo: 0,
                  iv_load_policy: 3
              },
              vimeo: {
                  byline: !1,
                  portrait: !1,
                  title: !1,
                  transparent: !1
              }
          }
      },
      openEffect: "zoom",
      closeEffect: "zoom",
      slideEffect: "slide",
      moreText: "See more",
      moreLength: 60,
      cssEfects: {
          fade: {
              in: "fadeIn",
              out: "fadeOut"
          },
          zoom: {
              in: "zoomIn",
              out: "zoomOut"
          },
          slide: {
              in: "slideInRight",
              out: "slideOutLeft"
          },
          slideBack: {
              in: "slideInLeft",
              out: "slideOutRight"
          },
          none: {
              in: "none",
              out: "none"
          }
      },
      svg: {
          close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
          next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
          prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
      },
      slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
      lightboxHTML: '<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'
  }
    , ie = function() {
      function e() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e),
          this.settings = r(te, i),
          this.effectsClasses = this.getAnimationClasses(),
          this.videoPlayers = {},
          this.apiEvents = [],
          this.fullElementsList = !1
      }
      return n(e, [{
          key: "init",
          value: function() {
              var e = this
                , t = this.getSelector();
              t && (this.baseEvents = c("click", {
                  onElement: t,
                  withCallback: function(t, i) {
                      t.preventDefault(),
                      e.open(i)
                  }
              })),
              this.elements = this.getElements()
          }
      }, {
          key: "open",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (0 == this.elements.length)
                  return !1;
              this.activeSlide = null,
              this.prevActiveSlideIndex = null,
              this.prevActiveSlide = null;
              var i = z(t) ? t : this.settings.startAt;
              if (A(e)) {
                  var n = e.getAttribute("data-gallery");
                  n && (this.fullElementsList = this.elements,
                  this.elements = this.getGalleryElements(this.elements, n)),
                  P(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
              }
              z(i) || (i = 0),
              this.build(),
              f(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
              var s = document.body
                , l = window.innerWidth - document.documentElement.clientWidth;
              if (l > 0) {
                  var o = document.createElement("style");
                  o.type = "text/css",
                  o.className = "gcss-styles",
                  o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"),
                  document.head.appendChild(o),
                  d(s, "gscrollbar-fixer")
              }
              d(s, "glightbox-open"),
              d(ee, "glightbox-open"),
              K && (d(document.body, "glightbox-mobile"),
              this.settings.slideEffect = "slide"),
              this.showSlide(i, !0),
              1 == this.elements.length ? (d(this.prevButton, "glightbox-button-hidden"),
              d(this.nextButton, "glightbox-button-hidden")) : (u(this.prevButton, "glightbox-button-hidden"),
              u(this.nextButton, "glightbox-button-hidden")),
              this.lightboxOpen = !0,
              this.trigger("open"),
              C(this.settings.onOpen) && this.settings.onOpen(),
              Q && this.settings.touchNavigation && H(this),
              this.settings.keyboardNavigation && Y(this)
          }
      }, {
          key: "openAt",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              this.open(null, e)
          }
      }, {
          key: "showSlide",
          value: function() {
              var e = this
                , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              m(this.loader),
              this.index = parseInt(t);
              var n = this.slidesContainer.querySelector(".current");
              n && u(n, "current"),
              this.slideAnimateOut();
              var s = this.slidesContainer.querySelectorAll(".gslide")[t];
              if (g(s, "loaded"))
                  this.slideAnimateIn(s, i),
                  y(this.loader);
              else {
                  m(this.loader);
                  var l = this.elements[t]
                    , o = {
                      index: this.index,
                      slide: s,
                      slideNode: s,
                      slideConfig: l.slideConfig,
                      slideIndex: this.index,
                      trigger: l.node,
                      player: null
                  };
                  this.trigger("slide_before_load", o),
                  l.instance.setContent(s, (function() {
                      y(e.loader),
                      e.resize(),
                      e.slideAnimateIn(s, i),
                      e.trigger("slide_after_load", o)
                  }
                  ))
              }
              this.slideDescription = s.querySelector(".gslide-description"),
              this.slideDescriptionContained = this.slideDescription && g(this.slideDescription.parentNode, "gslide-media"),
              this.settings.preload && (this.preloadSlide(t + 1),
              this.preloadSlide(t - 1)),
              this.updateNavigationClasses(),
              this.activeSlide = s
          }
      }, {
          key: "preloadSlide",
          value: function(e) {
              var t = this;
              if (e < 0 || e > this.elements.length - 1)
                  return !1;
              if (P(this.elements[e]))
                  return !1;
              var i = this.slidesContainer.querySelectorAll(".gslide")[e];
              if (g(i, "loaded"))
                  return !1;
              var n = this.elements[e]
                , s = n.type
                , l = {
                  index: e,
                  slide: i,
                  slideNode: i,
                  slideConfig: n.slideConfig,
                  slideIndex: e,
                  trigger: n.node,
                  player: null
              };
              this.trigger("slide_before_load", l),
              "video" == s || "external" == s ? setTimeout((function() {
                  n.instance.setContent(i, (function() {
                      t.trigger("slide_after_load", l)
                  }
                  ))
              }
              ), 200) : n.instance.setContent(i, (function() {
                  t.trigger("slide_after_load", l)
              }
              ))
          }
      }, {
          key: "prevSlide",
          value: function() {
              this.goToSlide(this.index - 1)
          }
      }, {
          key: "nextSlide",
          value: function() {
              this.goToSlide(this.index + 1)
          }
      }, {
          key: "goToSlide",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (this.prevActiveSlide = this.activeSlide,
              this.prevActiveSlideIndex = this.index,
              !this.loop() && (e < 0 || e > this.elements.length - 1))
                  return !1;
              e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0),
              this.showSlide(e)
          }
      }, {
          key: "insertSlide",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
              t < 0 && (t = this.elements.length);
              var i = new J(e,this,t)
                , n = i.getConfig()
                , s = r({}, n)
                , l = i.create()
                , o = this.elements.length - 1;
              s.index = t,
              s.node = !1,
              s.instance = i,
              s.slideConfig = n,
              this.elements.splice(t, 0, s);
              var a = null
                , h = null;
              if (this.slidesContainer) {
                  if (t > o)
                      this.slidesContainer.appendChild(l);
                  else {
                      var c = this.slidesContainer.querySelectorAll(".gslide")[t];
                      this.slidesContainer.insertBefore(l, c)
                  }
                  (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t),
                  0 == this.index && 0 == t && (this.index = 1),
                  this.updateNavigationClasses(),
                  a = this.slidesContainer.querySelectorAll(".gslide")[t],
                  h = this.getSlidePlayerInstance(t),
                  s.slideNode = a
              }
              this.trigger("slide_inserted", {
                  index: t,
                  slide: a,
                  slideNode: a,
                  slideConfig: n,
                  slideIndex: t,
                  trigger: null,
                  player: h
              }),
              C(this.settings.slideInserted) && this.settings.slideInserted({
                  index: t,
                  slide: a,
                  player: h
              })
          }
      }, {
          key: "removeSlide",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
              if (e < 0 || e > this.elements.length - 1)
                  return !1;
              var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
              t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()),
              t.parentNode.removeChild(t)),
              this.elements.splice(e, 1),
              this.trigger("slide_removed", e),
              C(this.settings.slideRemoved) && this.settings.slideRemoved(e)
          }
      }, {
          key: "slideAnimateIn",
          value: function(e, t) {
              var i = this
                , n = e.querySelector(".gslide-media")
                , s = e.querySelector(".gslide-description")
                , l = {
                  index: this.prevActiveSlideIndex,
                  slide: this.prevActiveSlide,
                  slideNode: this.prevActiveSlide,
                  slideIndex: this.prevActiveSlide,
                  slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                  trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                  player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
              }
                , o = {
                  index: this.index,
                  slide: this.activeSlide,
                  slideNode: this.activeSlide,
                  slideConfig: this.elements[this.index].slideConfig,
                  slideIndex: this.index,
                  trigger: this.elements[this.index].node,
                  player: this.getSlidePlayerInstance(this.index)
              };
              if (n.offsetWidth > 0 && s && (y(s),
              s.style.display = ""),
              u(e, this.effectsClasses),
              t)
                  f(e, this.settings.cssEfects[this.settings.openEffect].in, (function() {
                      i.settings.autoplayVideos && i.slidePlayerPlay(e),
                      i.trigger("slide_changed", {
                          prev: l,
                          current: o
                      }),
                      C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                  }
                  ));
              else {
                  var r = this.settings.slideEffect
                    , a = "none" !== r ? this.settings.cssEfects[r].in : r;
                  this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in),
                  f(e, a, (function() {
                      i.settings.autoplayVideos && i.slidePlayerPlay(e),
                      i.trigger("slide_changed", {
                          prev: l,
                          current: o
                      }),
                      C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                  }
                  ))
              }
              setTimeout((function() {
                  i.resize(e)
              }
              ), 100),
              d(e, "current")
          }
      }, {
          key: "slideAnimateOut",
          value: function() {
              if (!this.prevActiveSlide)
                  return !1;
              var e = this.prevActiveSlide;
              u(e, this.effectsClasses),
              d(e, "prev");
              var t = this.settings.slideEffect
                , i = "none" !== t ? this.settings.cssEfects[t].out : t;
              this.slidePlayerPause(e),
              this.trigger("slide_before_change", {
                  prev: {
                      index: this.prevActiveSlideIndex,
                      slide: this.prevActiveSlide,
                      slideNode: this.prevActiveSlide,
                      slideIndex: this.prevActiveSlideIndex,
                      slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                      trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                      player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                  },
                  current: {
                      index: this.index,
                      slide: this.activeSlide,
                      slideNode: this.activeSlide,
                      slideIndex: this.index,
                      slideConfig: this.elements[this.index].slideConfig,
                      trigger: this.elements[this.index].node,
                      player: this.getSlidePlayerInstance(this.index)
                  }
              }),
              C(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                  index: this.prevActiveSlideIndex,
                  slide: this.prevActiveSlide,
                  player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
              }, {
                  index: this.index,
                  slide: this.activeSlide,
                  player: this.getSlidePlayerInstance(this.index)
              }]),
              this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out),
              f(e, i, (function() {
                  var t = e.querySelector(".gslide-media")
                    , i = e.querySelector(".gslide-description");
                  t.style.transform = "",
                  u(t, "greset"),
                  t.style.opacity = "",
                  i && (i.style.opacity = ""),
                  u(e, "prev")
              }
              ))
          }
      }, {
          key: "getAllPlayers",
          value: function() {
              return this.videoPlayers
          }
      }, {
          key: "getSlidePlayerInstance",
          value: function(e) {
              var t = "gvideo" + e
                , i = this.getAllPlayers();
              return !(!M(i, t) || !i[t]) && i[t]
          }
      }, {
          key: "stopSlideVideo",
          value: function(e) {
              if (A(e)) {
                  var t = e.querySelector(".gvideo-wrapper");
                  t && (e = t.getAttribute("data-index"))
              }
              console.log("stopSlideVideo is deprecated, use slidePlayerPause");
              var i = this.getSlidePlayerInstance(e);
              i && i.playing && i.pause()
          }
      }, {
          key: "slidePlayerPause",
          value: function(e) {
              if (A(e)) {
                  var t = e.querySelector(".gvideo-wrapper");
                  t && (e = t.getAttribute("data-index"))
              }
              var i = this.getSlidePlayerInstance(e);
              i && i.playing && i.pause()
          }
      }, {
          key: "playSlideVideo",
          value: function(e) {
              if (A(e)) {
                  var t = e.querySelector(".gvideo-wrapper");
                  t && (e = t.getAttribute("data-index"))
              }
              console.log("playSlideVideo is deprecated, use slidePlayerPlay");
              var i = this.getSlidePlayerInstance(e);
              i && !i.playing && i.play()
          }
      }, {
          key: "slidePlayerPlay",
          value: function(e) {
              if (A(e)) {
                  var t = e.querySelector(".gvideo-wrapper");
                  t && (e = t.getAttribute("data-index"))
              }
              var i = this.getSlidePlayerInstance(e);
              console.log("Player is"),
              console.log(i),
              i && !i.playing && (i.play(),
              this.settings.autofocusVideos && i.elements.container.focus())
          }
      }, {
          key: "setElements",
          value: function(e) {
              var t = this;
              this.settings.elements = !1;
              var i = [];
              e && e.length && a(e, (function(e, n) {
                  var s = new J(e,t,n)
                    , l = s.getConfig()
                    , o = r({}, l);
                  o.slideConfig = l,
                  o.instance = s,
                  o.index = n,
                  i.push(o)
              }
              )),
              this.elements = i,
              this.lightboxOpen && (this.slidesContainer.innerHTML = "",
              this.elements.length && (a(this.elements, (function() {
                  var e = x(t.settings.slideHTML);
                  t.slidesContainer.appendChild(e)
              }
              )),
              this.showSlide(0, !0)))
          }
      }, {
          key: "getElementIndex",
          value: function(e) {
              var t = !1;
              return a(this.elements, (function(i, n) {
                  if (M(i, "node") && i.node == e)
                      return t = n,
                      !0
              }
              )),
              t
          }
      }, {
          key: "getElements",
          value: function() {
              var e = this
                , t = [];
              this.elements = this.elements ? this.elements : [],
              !P(this.settings.elements) && L(this.settings.elements) && this.settings.elements.length && a(this.settings.elements, (function(i, n) {
                  var s = new J(i,e,n)
                    , l = s.getConfig()
                    , o = r({}, l);
                  o.node = !1,
                  o.index = n,
                  o.instance = s,
                  o.slideConfig = l,
                  t.push(o)
              }
              ));
              var i = !1;
              return this.getSelector() && (i = document.querySelectorAll(this.getSelector())),
              i ? (a(i, (function(i, n) {
                  var s = new J(i,e,n)
                    , l = s.getConfig()
                    , o = r({}, l);
                  o.node = i,
                  o.index = n,
                  o.instance = s,
                  o.slideConfig = l,
                  o.gallery = i.getAttribute("data-gallery"),
                  t.push(o)
              }
              )),
              t) : t
          }
      }, {
          key: "getGalleryElements",
          value: function(e, t) {
              return e.filter((function(e) {
                  return e.gallery == t
              }
              ))
          }
      }, {
          key: "getSelector",
          value: function() {
              return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
          }
      }, {
          key: "getActiveSlide",
          value: function() {
              return this.slidesContainer.querySelectorAll(".gslide")[this.index]
          }
      }, {
          key: "getActiveSlideIndex",
          value: function() {
              return this.index
          }
      }, {
          key: "getAnimationClasses",
          value: function() {
              var e = [];
              for (var t in this.settings.cssEfects)
                  if (this.settings.cssEfects.hasOwnProperty(t)) {
                      var i = this.settings.cssEfects[t];
                      e.push("g".concat(i.in)),
                      e.push("g".concat(i.out))
                  }
              return e.join(" ")
          }
      }, {
          key: "build",
          value: function() {
              var e = this;
              if (this.built)
                  return !1;
              var t = M(this.settings.svg, "next") ? this.settings.svg.next : ""
                , i = M(this.settings.svg, "prev") ? this.settings.svg.prev : ""
                , n = M(this.settings.svg, "close") ? this.settings.svg.close : ""
                , s = this.settings.lightboxHTML;
              s = x(s = (s = (s = s.replace(/{nextSVG}/g, t)).replace(/{prevSVG}/g, i)).replace(/{closeSVG}/g, n)),
              document.body.appendChild(s);
              var l = document.getElementById("glightbox-body");
              this.modal = l;
              var o = l.querySelector(".gclose");
              this.prevButton = l.querySelector(".gprev"),
              this.nextButton = l.querySelector(".gnext"),
              this.overlay = l.querySelector(".goverlay"),
              this.loader = l.querySelector(".gloader"),
              this.slidesContainer = document.getElementById("glightbox-slider"),
              this.events = {},
              d(this.modal, "glightbox-" + this.settings.skin),
              this.settings.closeButton && o && (this.events.close = c("click", {
                  onElement: o,
                  withCallback: function(t, i) {
                      t.preventDefault(),
                      e.close()
                  }
              })),
              o && !this.settings.closeButton && o.parentNode.removeChild(o),
              this.nextButton && (this.events.next = c("click", {
                  onElement: this.nextButton,
                  withCallback: function(t, i) {
                      t.preventDefault(),
                      e.nextSlide()
                  }
              })),
              this.prevButton && (this.events.prev = c("click", {
                  onElement: this.prevButton,
                  withCallback: function(t, i) {
                      t.preventDefault(),
                      e.prevSlide()
                  }
              })),
              this.settings.closeOnOutsideClick && (this.events.outClose = c("click", {
                  onElement: l,
                  withCallback: function(t, i) {
                      e.preventOutsideClick || g(document.body, "glightbox-mobile") || v(t.target, ".ginner-container") || v(t.target, ".gbtn") || g(t.target, "gnext") || g(t.target, "gprev") || e.close()
                  }
              })),
              a(this.elements, (function(t, i) {
                  e.slidesContainer.appendChild(t.instance.create()),
                  t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
              }
              )),
              Q && d(document.body, "glightbox-touch"),
              this.events.resize = c("resize", {
                  onElement: window,
                  withCallback: function() {
                      e.resize()
                  }
              }),
              this.built = !0
          }
      }, {
          key: "resize",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              if ((e = e || this.activeSlide) && !g(e, "zoomed")) {
                  var t = b()
                    , i = e.querySelector(".gvideo-wrapper")
                    , n = e.querySelector(".gslide-image")
                    , s = this.slideDescription
                    , l = t.width
                    , o = t.height;
                  if (l <= 768 ? d(document.body, "glightbox-mobile") : u(document.body, "glightbox-mobile"),
                  i || n) {
                      var r = !1;
                      if (s && (g(s, "description-bottom") || g(s, "description-top")) && !g(s, "gabsolute") && (r = !0),
                      n)
                          if (l <= 768) {
                              var a = n.querySelector("img");
                              a.setAttribute("style", "")
                          } else if (r) {
                              var h = s.offsetHeight
                                , c = n.querySelector("img");
                              c.setAttribute("style", "max-height: calc(100vh - ".concat(h, "px)")),
                              s.setAttribute("style", "max-width: ".concat(c.offsetWidth, "px;"))
                          }
                      if (i) {
                          var v = M(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "16:9"
                            , f = v.split(":")
                            , p = 900
                            , m = p / (parseInt(f[0]) / parseInt(f[1]));
                          if (m = Math.floor(m),
                          r && (o -= s.offsetHeight),
                          o < m && l > p) {
                              var y = i.offsetWidth
                                , x = i.offsetHeight
                                , S = o / x
                                , w = {
                                  width: y * S,
                                  height: x * S
                              };
                              i.parentNode.setAttribute("style", "max-width: ".concat(w.width, "px")),
                              r && s.setAttribute("style", "max-width: ".concat(w.width, "px;"))
                          } else
                              i.parentNode.style.maxWidth = "".concat(p, "px"),
                              r && s.setAttribute("style", "max-width: ".concat(p, "px;"))
                      }
                  }
              }
          }
      }, {
          key: "reload",
          value: function() {
              this.init()
          }
      }, {
          key: "updateNavigationClasses",
          value: function() {
              var e = this.loop();
              u(this.nextButton, "disabled"),
              u(this.prevButton, "disabled"),
              0 == this.index && this.elements.length - 1 == 0 ? (d(this.prevButton, "disabled"),
              d(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || d(this.nextButton, "disabled") : d(this.prevButton, "disabled")
          }
      }, {
          key: "loop",
          value: function() {
              var e = M(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
              return e = M(this.settings, "loop") ? this.settings.loop : e,
              e
          }
      }, {
          key: "close",
          value: function() {
              var e = this;
              if (!this.lightboxOpen) {
                  if (this.events) {
                      for (var t in this.events)
                          this.events.hasOwnProperty(t) && this.events[t].destroy();
                      this.events = null
                  }
                  return !1
              }
              if (this.closing)
                  return !1;
              this.closing = !0,
              this.slidePlayerPause(this.activeSlide),
              this.fullElementsList && (this.elements = this.fullElementsList),
              d(this.modal, "glightbox-closing"),
              f(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out),
              f(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, (function() {
                  if (e.activeSlide = null,
                  e.prevActiveSlideIndex = null,
                  e.prevActiveSlide = null,
                  e.built = !1,
                  e.events) {
                      for (var t in e.events)
                          e.events.hasOwnProperty(t) && e.events[t].destroy();
                      e.events = null
                  }
                  var i = document.body;
                  u(ee, "glightbox-open"),
                  u(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),
                  e.modal.parentNode.removeChild(e.modal),
                  e.trigger("close"),
                  C(e.settings.onClose) && e.settings.onClose();
                  var n = document.querySelector(".gcss-styles");
                  n && n.parentNode.removeChild(n),
                  e.lightboxOpen = !1,
                  e.closing = null
              }
              ))
          }
      }, {
          key: "destroy",
          value: function() {
              this.close(),
              this.clearAllEvents(),
              this.baseEvents && this.baseEvents.destroy()
          }
      }, {
          key: "on",
          value: function(e, t) {
              var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (!e || !C(t))
                  throw new TypeError("Event name and callback must be defined");
              this.apiEvents.push({
                  evt: e,
                  once: i,
                  callback: t
              })
          }
      }, {
          key: "once",
          value: function(e, t) {
              this.on(e, t, !0)
          }
      }, {
          key: "trigger",
          value: function(e) {
              var t = this
                , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                , n = [];
              a(this.apiEvents, (function(t, s) {
                  var l = t.evt
                    , o = t.once
                    , r = t.callback;
                  l == e && (r(i),
                  o && n.push(s))
              }
              )),
              n.length && a(n, (function(e) {
                  return t.apiEvents.splice(e, 1)
              }
              ))
          }
      }, {
          key: "clearAllEvents",
          value: function() {
              this.apiEvents.splice(0, this.apiEvents.length)
          }
      }, {
          key: "version",
          value: function() {
              return "3.0.7"
          }
      }]),
      e
  }();
  return function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = new ie(e);
      return t.init(),
      t
  }
}
));
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function(e, a, t, i) {
      return a + a + t + t + i + i
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
      r: parseInt(t[1], 16),
      g: parseInt(t[2], 16),
      b: parseInt(t[3], 16)
  } : null
}
function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t)
}
function isInArray(e, a) {
  return a.indexOf(e) > -1
}
var pJS = function(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
      canvas: {
          el: t,
          w: t.offsetWidth,
          h: t.offsetHeight
      },
      particles: {
          number: {
              value: 400,
              density: {
                  enable: !0,
                  value_area: 800
              }
          },
          color: {
              value: "#fff"
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 0,
                  color: "#ff0000"
              },
              polygon: {
                  nb_sides: 5
              },
              image: {
                  src: "",
                  width: 100,
                  height: 100
              }
          },
          opacity: {
              value: 1,
              random: !1,
              anim: {
                  enable: !1,
                  speed: 2,
                  opacity_min: 0,
                  sync: !1
              }
          },
          size: {
              value: 20,
              random: !1,
              anim: {
                  enable: !1,
                  speed: 20,
                  size_min: 0,
                  sync: !1
              }
          },
          line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1
          },
          move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                  enable: !1,
                  rotateX: 3e3,
                  rotateY: 3e3
              }
          },
          array: []
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: !0,
                  mode: "grab"
              },
              onclick: {
                  enable: !0,
                  mode: "push"
              },
              resize: !0
          },
          modes: {
              grab: {
                  distance: 100,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 200,
                  size: 80,
                  duration: .4
              },
              repulse: {
                  distance: 200,
                  duration: .4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          },
          mouse: {}
      },
      retina_detect: !1,
      fn: {
          interact: {},
          modes: {},
          vendors: {}
      },
      tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a),
  i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance
  },
  i.fn.retinaInit = function() {
      i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio,
      i.tmp.retina = !0) : (i.canvas.pxratio = 1,
      i.tmp.retina = !1),
      i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio,
      i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio,
      i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio,
      i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio,
      i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio,
      i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio,
      i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio,
      i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio,
      i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio,
      i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio,
      i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
  }
  ,
  i.fn.canvasInit = function() {
      i.canvas.ctx = i.canvas.el.getContext("2d")
  }
  ,
  i.fn.canvasSize = function() {
      i.canvas.el.width = i.canvas.w,
      i.canvas.el.height = i.canvas.h,
      i && i.interactivity.events.resize && window.addEventListener("resize", function() {
          i.canvas.w = i.canvas.el.offsetWidth,
          i.canvas.h = i.canvas.el.offsetHeight,
          i.tmp.retina && (i.canvas.w *= i.canvas.pxratio,
          i.canvas.h *= i.canvas.pxratio),
          i.canvas.el.width = i.canvas.w,
          i.canvas.el.height = i.canvas.h,
          i.particles.move.enable || (i.fn.particlesEmpty(),
          i.fn.particlesCreate(),
          i.fn.particlesDraw(),
          i.fn.vendors.densityAutoParticles()),
          i.fn.vendors.densityAutoParticles()
      })
  }
  ,
  i.fn.canvasPaint = function() {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
  }
  ,
  i.fn.canvasClear = function() {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
  }
  ,
  i.fn.particle = function(e, a, t) {
      if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value,
      i.particles.size.anim.enable && (this.size_status = !1,
      this.vs = i.particles.size.anim.speed / 100,
      i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
      this.x = t ? t.x : Math.random() * i.canvas.w,
      this.y = t ? t.y : Math.random() * i.canvas.h,
      this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
      this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
      i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
      this.color = {},
      "object" == typeof e.value)
          if (e.value instanceof Array) {
              var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
              this.color.rgb = hexToRgb(s)
          } else
              void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                  r: e.value.r,
                  g: e.value.g,
                  b: e.value.b
              }),
              void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                  h: e.value.h,
                  s: e.value.s,
                  l: e.value.l
              });
      else
          "random" == e.value ? this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0
          } : "string" == typeof e.value && (this.color = e,
          this.color.rgb = hexToRgb(this.color.value));
      this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value,
      i.particles.opacity.anim.enable && (this.opacity_status = !1,
      this.vo = i.particles.opacity.anim.speed / 100,
      i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (i.particles.move.direction) {
      case "top":
          n = {
              x: 0,
              y: -1
          };
          break;
      case "top-right":
          n = {
              x: .5,
              y: -.5
          };
          break;
      case "right":
          n = {
              x: 1,
              y: -0
          };
          break;
      case "bottom-right":
          n = {
              x: .5,
              y: .5
          };
          break;
      case "bottom":
          n = {
              x: 0,
              y: 1
          };
          break;
      case "bottom-left":
          n = {
              x: -.5,
              y: 1
          };
          break;
      case "left":
          n = {
              x: -1,
              y: 0
          };
          break;
      case "top-left":
          n = {
              x: -.5,
              y: -.5
          };
          break;
      default:
          n = {
              x: 0,
              y: 0
          }
      }
      i.particles.move.straight ? (this.vx = n.x,
      this.vy = n.y,
      i.particles.move.random && (this.vx = this.vx * Math.random(),
      this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5,
      this.vy = n.y + Math.random() - .5),
      this.vx_i = this.vx,
      this.vy_i = this.vy;
      var r = i.particles.shape.type;
      if ("object" == typeof r) {
          if (r instanceof Array) {
              var c = r[Math.floor(Math.random() * r.length)];
              this.shape = c
          }
      } else
          this.shape = r;
      if ("image" == this.shape) {
          var o = i.particles.shape;
          this.img = {
              src: o.image.src,
              ratio: o.image.width / o.image.height
          },
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this),
          i.tmp.pushing && (this.img.loaded = !1))
      }
  }
  ,
  i.fn.particle.prototype.draw = function() {
      function e() {
          i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio)
      }
      var a = this;
      if (void 0 != a.radius_bubble)
          var t = a.radius_bubble;
      else
          var t = a.radius;
      if (void 0 != a.opacity_bubble)
          var s = a.opacity_bubble;
      else
          var s = a.opacity;
      if (a.color.rgb)
          var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
      else
          var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
      switch (i.canvas.ctx.fillStyle = n,
      i.canvas.ctx.beginPath(),
      a.shape) {
      case "circle":
          i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
          break;
      case "edge":
          i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
          break;
      case "triangle":
          i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
          break;
      case "polygon":
          i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
          break;
      case "star":
          i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
          break;
      case "image":
          if ("svg" == i.tmp.img_type)
              var r = a.img.obj;
          else
              var r = i.tmp.img_obj;
          r && e()
      }
      i.canvas.ctx.closePath(),
      i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color,
      i.canvas.ctx.lineWidth = i.particles.shape.stroke.width,
      i.canvas.ctx.stroke()),
      i.canvas.ctx.fill()
  }
  ,
  i.fn.particlesCreate = function() {
      for (var e = 0; e < i.particles.number.value; e++)
          i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))
  }
  ,
  i.fn.particlesUpdate = function() {
      for (var e = 0; e < i.particles.array.length; e++) {
          var a = i.particles.array[e];
          if (i.particles.move.enable) {
              var t = i.particles.move.speed / 2;
              a.x += a.vx * t,
              a.y += a.vy * t
          }
          if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1),
          a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0),
          a.opacity -= a.vo),
          a.opacity < 0 && (a.opacity = 0)),
          i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1),
          a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0),
          a.radius -= a.vs),
          a.radius < 0 && (a.radius = 0)),
          "bounce" == i.particles.move.out_mode)
              var s = {
                  x_left: a.radius,
                  x_right: i.canvas.w,
                  y_top: a.radius,
                  y_bottom: i.canvas.h
              };
          else
              var s = {
                  x_left: -a.radius,
                  x_right: i.canvas.w + a.radius,
                  y_top: -a.radius,
                  y_bottom: i.canvas.h + a.radius
              };
          switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left,
          a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right,
          a.y = Math.random() * i.canvas.h),
          a.y - a.radius > i.canvas.h ? (a.y = s.y_top,
          a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom,
          a.x = Math.random() * i.canvas.w),
          i.particles.move.out_mode) {
          case "bounce":
              a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx),
              a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy)
          }
          if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a),
          (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a),
          (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
              for (var n = e + 1; n < i.particles.array.length; n++) {
                  var r = i.particles.array[n];
                  i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r),
                  i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r),
                  i.particles.move.bounce && i.fn.interact.bounceParticles(a, r)
              }
      }
  }
  ,
  i.fn.particlesDraw = function() {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
      i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
          var a = i.particles.array[e];
          a.draw()
      }
  }
  ,
  i.fn.particlesEmpty = function() {
      i.particles.array = []
  }
  ,
  i.fn.particlesRefresh = function() {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
      cancelRequestAnimFrame(i.fn.drawAnimFrame),
      i.tmp.source_svg = void 0,
      i.tmp.img_obj = void 0,
      i.tmp.count_svg = 0,
      i.fn.particlesEmpty(),
      i.fn.canvasClear(),
      i.fn.vendors.start()
  }
  ,
  i.fn.interact.linkParticles = function(e, a) {
      var t = e.x - a.x
        , s = e.y - a.y
        , n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
          var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
          if (r > 0) {
              var c = i.particles.line_linked.color_rgb_line;
              i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")",
              i.canvas.ctx.lineWidth = i.particles.line_linked.width,
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(a.x, a.y),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath()
          }
      }
  }
  ,
  i.fn.interact.attractParticles = function(e, a) {
      var t = e.x - a.x
        , s = e.y - a.y
        , n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
          var r = t / (1e3 * i.particles.move.attract.rotateX)
            , c = s / (1e3 * i.particles.move.attract.rotateY);
          e.vx -= r,
          e.vy -= c,
          a.vx += r,
          a.vy += c
      }
  }
  ,
  i.fn.interact.bounceParticles = function(e, a) {
      var t = e.x - a.x
        , i = e.y - a.y
        , s = Math.sqrt(t * t + i * i)
        , n = e.radius + a.radius;
      n >= s && (e.vx = -e.vx,
      e.vy = -e.vy,
      a.vx = -a.vx,
      a.vy = -a.vy)
  }
  ,
  i.fn.modes.pushParticles = function(e, a) {
      i.tmp.pushing = !0;
      for (var t = 0; e > t; t++)
          i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{
              x: a ? a.pos_x : Math.random() * i.canvas.w,
              y: a ? a.pos_y : Math.random() * i.canvas.h
          })),
          t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(),
          i.tmp.pushing = !1)
  }
  ,
  i.fn.modes.removeParticles = function(e) {
      i.particles.array.splice(0, e),
      i.particles.move.enable || i.fn.particlesDraw()
  }
  ,
  i.fn.modes.bubbleParticle = function(e) {
      function a() {
          e.opacity_bubble = e.opacity,
          e.radius_bubble = e.radius
      }
      function t(a, t, s, n, c) {
          if (a != t)
              if (i.tmp.bubble_duration_end) {
                  if (void 0 != s) {
                      var o = n - p * (n - a) / i.interactivity.modes.bubble.duration
                        , l = a - o;
                      d = a + l,
                      "size" == c && (e.radius_bubble = d),
                      "opacity" == c && (e.opacity_bubble = d)
                  }
              } else if (r <= i.interactivity.modes.bubble.distance) {
                  if (void 0 != s)
                      var v = s;
                  else
                      var v = n;
                  if (v != a) {
                      var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
                      "size" == c && (e.radius_bubble = d),
                      "opacity" == c && (e.opacity_bubble = d)
                  }
              } else
                  "size" == c && (e.radius_bubble = void 0),
                  "opacity" == c && (e.opacity_bubble = void 0)
      }
      if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
          var s = e.x - i.interactivity.mouse.pos_x
            , n = e.y - i.interactivity.mouse.pos_y
            , r = Math.sqrt(s * s + n * n)
            , c = 1 - r / i.interactivity.modes.bubble.distance;
          if (r <= i.interactivity.modes.bubble.distance) {
              if (c >= 0 && "mousemove" == i.interactivity.status) {
                  if (i.interactivity.modes.bubble.size != i.particles.size.value)
                      if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                          var o = e.radius + i.interactivity.modes.bubble.size * c;
                          o >= 0 && (e.radius_bubble = o)
                      } else {
                          var l = e.radius - i.interactivity.modes.bubble.size
                            , o = e.radius - l * c;
                          o > 0 ? e.radius_bubble = o : e.radius_bubble = 0
                      }
                  if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                      if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                          var v = i.interactivity.modes.bubble.opacity * c;
                          v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                      } else {
                          var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                          v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                      }
              }
          } else
              a();
          "mouseleave" == i.interactivity.status && a()
      } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
          if (i.tmp.bubble_clicking) {
              var s = e.x - i.interactivity.mouse.click_pos_x
                , n = e.y - i.interactivity.mouse.click_pos_y
                , r = Math.sqrt(s * s + n * n)
                , p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
              p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0),
              p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1,
              i.tmp.bubble_duration_end = !1)
          }
          i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"),
          t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
      }
  }
  ,
  i.fn.modes.repulseParticle = function(e) {
      function a() {
          var a = Math.atan2(d, p);
          if (e.vx = u * Math.cos(a),
          e.vy = u * Math.sin(a),
          "bounce" == i.particles.move.out_mode) {
              var t = {
                  x: e.x + e.vx,
                  y: e.y + e.vy
              };
              t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx),
              t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy)
          }
      }
      if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
          var t = e.x - i.interactivity.mouse.pos_x
            , s = e.y - i.interactivity.mouse.pos_y
            , n = Math.sqrt(t * t + s * s)
            , r = {
              x: t / n,
              y: s / n
          }
            , c = i.interactivity.modes.repulse.distance
            , o = 100
            , l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50)
            , v = {
              x: e.x + r.x * l,
              y: e.y + r.y * l
          };
          "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x),
          v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x,
          e.y = v.y)
      } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
          if (i.tmp.repulse_finish || (i.tmp.repulse_count++,
          i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking) {
              var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3)
                , p = i.interactivity.mouse.click_pos_x - e.x
                , d = i.interactivity.mouse.click_pos_y - e.y
                , m = p * p + d * d
                , u = -c / m * 1;
              c >= m && a()
          } else
              0 == i.tmp.repulse_clicking && (e.vx = e.vx_i,
              e.vy = e.vy_i)
  }
  ,
  i.fn.modes.grabParticle = function(e) {
      if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
          var a = e.x - i.interactivity.mouse.pos_x
            , t = e.y - i.interactivity.mouse.pos_y
            , s = Math.sqrt(a * a + t * t);
          if (s <= i.interactivity.modes.grab.distance) {
              var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
              if (n > 0) {
                  var r = i.particles.line_linked.color_rgb_line;
                  i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")",
                  i.canvas.ctx.lineWidth = i.particles.line_linked.width,
                  i.canvas.ctx.beginPath(),
                  i.canvas.ctx.moveTo(e.x, e.y),
                  i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y),
                  i.canvas.ctx.stroke(),
                  i.canvas.ctx.closePath()
              }
          }
      }
  }
  ,
  i.fn.vendors.eventsListeners = function() {
      "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el,
      (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function(e) {
          if (i.interactivity.el == window)
              var a = e.clientX
                , t = e.clientY;
          else
              var a = e.offsetX || e.clientX
                , t = e.offsetY || e.clientY;
          i.interactivity.mouse.pos_x = a,
          i.interactivity.mouse.pos_y = t,
          i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio,
          i.interactivity.mouse.pos_y *= i.canvas.pxratio),
          i.interactivity.status = "mousemove"
      }),
      i.interactivity.el.addEventListener("mouseleave", function(e) {
          i.interactivity.mouse.pos_x = null,
          i.interactivity.mouse.pos_y = null,
          i.interactivity.status = "mouseleave"
      })),
      i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function() {
          if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x,
          i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y,
          i.interactivity.mouse.click_time = (new Date).getTime(),
          i.interactivity.events.onclick.enable)
              switch (i.interactivity.events.onclick.mode) {
              case "push":
                  i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                  break;
              case "remove":
                  i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                  break;
              case "bubble":
                  i.tmp.bubble_clicking = !0;
                  break;
              case "repulse":
                  i.tmp.repulse_clicking = !0,
                  i.tmp.repulse_count = 0,
                  i.tmp.repulse_finish = !1,
                  setTimeout(function() {
                      i.tmp.repulse_clicking = !1
                  }, 1e3 * i.interactivity.modes.repulse.duration)
              }
      })
  }
  ,
  i.fn.vendors.densityAutoParticles = function() {
      if (i.particles.number.density.enable) {
          var e = i.canvas.el.width * i.canvas.el.height / 1e3;
          i.tmp.retina && (e /= 2 * i.canvas.pxratio);
          var a = e * i.particles.number.value / i.particles.number.density.value_area
            , t = i.particles.array.length - a;
          0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t)
      }
  }
  ,
  i.fn.vendors.checkOverlap = function(e, a) {
      for (var t = 0; t < i.particles.array.length; t++) {
          var s = i.particles.array[t]
            , n = e.x - s.x
            , r = e.y - s.y
            , c = Math.sqrt(n * n + r * r);
          c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w,
          e.y = a ? a.y : Math.random() * i.canvas.h,
          i.fn.vendors.checkOverlap(e))
      }
  }
  ,
  i.fn.vendors.createSvgImg = function(e) {
      var a = i.tmp.source_svg
        , t = /#([0-9A-F]{3,6})/gi
        , s = a.replace(t, function(a, t, i, s) {
          if (e.color.rgb)
              var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
          else
              var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
          return n
      })
        , n = new Blob([s],{
          type: "image/svg+xml;charset=utf-8"
      })
        , r = window.URL || window.webkitURL || window
        , c = r.createObjectURL(n)
        , o = new Image;
      o.addEventListener("load", function() {
          e.img.obj = o,
          e.img.loaded = !0,
          r.revokeObjectURL(c),
          i.tmp.count_svg++
      }),
      o.src = c
  }
  ,
  i.fn.vendors.destroypJS = function() {
      cancelAnimationFrame(i.fn.drawAnimFrame),
      t.remove(),
      pJSDom = null
  }
  ,
  i.fn.vendors.drawShape = function(e, a, t, i, s, n) {
      var r = s * n
        , c = s / n
        , o = 180 * (c - 2) / c
        , l = Math.PI - Math.PI * o / 180;
      e.save(),
      e.beginPath(),
      e.translate(a, t),
      e.moveTo(0, 0);
      for (var v = 0; r > v; v++)
          e.lineTo(i, 0),
          e.translate(i, 0),
          e.rotate(l);
      e.fill(),
      e.restore()
  }
  ,
  i.fn.vendors.exportImg = function() {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank")
  }
  ,
  i.fn.vendors.loadImg = function(e) {
      if (i.tmp.img_error = void 0,
      "" != i.particles.shape.image.src)
          if ("svg" == e) {
              var a = new XMLHttpRequest;
              a.open("GET", i.particles.shape.image.src),
              a.onreadystatechange = function(e) {
                  4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response,
                  i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                  i.tmp.img_error = !0))
              }
              ,
              a.send()
          } else {
              var t = new Image;
              t.addEventListener("load", function() {
                  i.tmp.img_obj = t,
                  i.fn.vendors.checkBeforeDraw()
              }),
              t.src = i.particles.shape.image.src
          }
      else
          console.log("Error pJS - No image.src"),
          i.tmp.img_error = !0
  }
  ,
  i.fn.vendors.draw = function() {
      "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(),
      i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(),
      i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(),
      i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
  }
  ,
  i.fn.vendors.checkBeforeDraw = function() {
      "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
      i.tmp.img_error || (i.fn.vendors.init(),
      i.fn.vendors.draw())) : (i.fn.vendors.init(),
      i.fn.vendors.draw())
  }
  ,
  i.fn.vendors.init = function() {
      i.fn.retinaInit(),
      i.fn.canvasInit(),
      i.fn.canvasSize(),
      i.fn.canvasPaint(),
      i.fn.particlesCreate(),
      i.fn.vendors.densityAutoParticles(),
      i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
  }
  ,
  i.fn.vendors.start = function() {
      isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3),
      i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
  }
  ,
  i.fn.vendors.eventsListeners(),
  i.fn.vendors.start()
};
Object.deepExtend = function(e, a) {
  for (var t in a)
      a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {},
      arguments.callee(e[t], a[t])) : e[t] = a[t];
  return e
}
,
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
      window.setTimeout(e, 1e3 / 60)
  }
}(),
window.cancelRequestAnimFrame = function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(),
window.pJSDom = [],
window.particlesJS = function(e, a) {
  "string" != typeof e && (a = e,
  e = "particles-js"),
  e || (e = "particles-js");
  var t = document.getElementById(e)
    , i = "particles-js-canvas-el"
    , s = t.getElementsByClassName(i);
  if (s.length)
      for (; s.length > 0; )
          t.removeChild(s[0]);
  var n = document.createElement("canvas");
  n.className = i,
  n.style.width = "100%",
  n.style.height = "100%";
  var r = document.getElementById(e).appendChild(n);
  null != r && pJSDom.push(new pJS(e,a))
}
,
window.particlesJS.load = function(e, a, t) {
  var i = new XMLHttpRequest;
  i.open("GET", a),
  i.onreadystatechange = function(a) {
      if (4 == i.readyState)
          if (200 == i.status) {
              var s = JSON.parse(a.currentTarget.response);
              window.particlesJS(e, s),
              t && t()
          } else
              console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found")
  }
  ,
  i.send()
}
;
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).noUiSlider = {})
}(this, function(ot) {
  "use strict";
  function n(t) {
      return "object" == typeof t && "function" == typeof t.to
  }
  function st(t) {
      t.parentElement.removeChild(t)
  }
  function at(t) {
      return null != t
  }
  function lt(t) {
      t.preventDefault()
  }
  function i(t) {
      return "number" == typeof t && !isNaN(t) && isFinite(t)
  }
  function ut(t, e, r) {
      0 < r && (ft(t, e),
      setTimeout(function() {
          dt(t, e)
      }, r))
  }
  function ct(t) {
      return Math.max(Math.min(t, 100), 0)
  }
  function pt(t) {
      return Array.isArray(t) ? t : [t]
  }
  function e(t) {
      t = (t = String(t)).split(".");
      return 1 < t.length ? t[1].length : 0
  }
  function ft(t, e) {
      t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e
  }
  function dt(t, e) {
      t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ")
  }
  function ht(t) {
      var e = void 0 !== window.pageXOffset
        , r = "CSS1Compat" === (t.compatMode || "");
      return {
          x: e ? window.pageXOffset : (r ? t.documentElement : t.body).scrollLeft,
          y: e ? window.pageYOffset : (r ? t.documentElement : t.body).scrollTop
      }
  }
  function s(t, e) {
      return 100 / (e - t)
  }
  function a(t, e, r) {
      return 100 * e / (t[r + 1] - t[r])
  }
  function l(t, e) {
      for (var r = 1; t >= e[r]; )
          r += 1;
      return r
  }
  function r(t, e, r) {
      if (r >= t.slice(-1)[0])
          return 100;
      var n = l(r, t)
        , i = t[n - 1]
        , o = t[n]
        , t = e[n - 1]
        , n = e[n];
      return t + (r = r,
      a(o = [i, o], o[0] < 0 ? r + Math.abs(o[0]) : r - o[0], 0) / s(t, n))
  }
  function o(t, e, r, n) {
      if (100 === n)
          return n;
      var i = l(n, t)
        , o = t[i - 1]
        , s = t[i];
      return r ? (s - o) / 2 < n - o ? s : o : e[i - 1] ? t[i - 1] + (t = n - t[i - 1],
      i = e[i - 1],
      Math.round(t / i) * i) : n
  }
  ot.PipsMode = void 0,
  (H = ot.PipsMode || (ot.PipsMode = {})).Range = "range",
  H.Steps = "steps",
  H.Positions = "positions",
  H.Count = "count",
  H.Values = "values",
  ot.PipsType = void 0,
  (H = ot.PipsType || (ot.PipsType = {}))[H.None = -1] = "None",
  H[H.NoValue = 0] = "NoValue",
  H[H.LargeValue = 1] = "LargeValue",
  H[H.SmallValue = 2] = "SmallValue";
  var u = (t.prototype.getDistance = function(t) {
      for (var e = [], r = 0; r < this.xNumSteps.length - 1; r++)
          e[r] = a(this.xVal, t, r);
      return e
  }
  ,
  t.prototype.getAbsoluteDistance = function(t, e, r) {
      var n = 0;
      if (t < this.xPct[this.xPct.length - 1])
          for (; t > this.xPct[n + 1]; )
              n++;
      else
          t === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
      r || t !== this.xPct[n + 1] || n++;
      for (var i, o = 1, s = (e = null === e ? [] : e)[n], a = 0, l = 0, u = 0, c = r ? (t - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n]) : (this.xPct[n + 1] - t) / (this.xPct[n + 1] - this.xPct[n]); 0 < s; )
          i = this.xPct[n + 1 + u] - this.xPct[n + u],
          100 < e[n + u] * o + 100 - 100 * c ? (a = i * c,
          o = (s - 100 * c) / e[n + u],
          c = 1) : (a = e[n + u] * i / 100 * o,
          o = 0),
          r ? (l -= a,
          1 <= this.xPct.length + u && u--) : (l += a,
          1 <= this.xPct.length - u && u++),
          s = e[n + u] * o;
      return t + l
  }
  ,
  t.prototype.toStepping = function(t) {
      return t = r(this.xVal, this.xPct, t)
  }
  ,
  t.prototype.fromStepping = function(t) {
      return function(t, e, r) {
          if (100 <= r)
              return t.slice(-1)[0];
          var n = l(r, e)
            , i = t[n - 1]
            , o = t[n]
            , t = e[n - 1]
            , n = e[n];
          return (r - t) * s(t, n) * ((o = [i, o])[1] - o[0]) / 100 + o[0]
      }(this.xVal, this.xPct, t)
  }
  ,
  t.prototype.getStep = function(t) {
      return t = o(this.xPct, this.xSteps, this.snap, t)
  }
  ,
  t.prototype.getDefaultStep = function(t, e, r) {
      var n = l(t, this.xPct);
      return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)),
      (this.xVal[n] - this.xVal[n - 1]) / r
  }
  ,
  t.prototype.getNearbySteps = function(t) {
      t = l(t, this.xPct);
      return {
          stepBefore: {
              startValue: this.xVal[t - 2],
              step: this.xNumSteps[t - 2],
              highestStep: this.xHighestCompleteStep[t - 2]
          },
          thisStep: {
              startValue: this.xVal[t - 1],
              step: this.xNumSteps[t - 1],
              highestStep: this.xHighestCompleteStep[t - 1]
          },
          stepAfter: {
              startValue: this.xVal[t],
              step: this.xNumSteps[t],
              highestStep: this.xHighestCompleteStep[t]
          }
      }
  }
  ,
  t.prototype.countStepDecimals = function() {
      var t = this.xNumSteps.map(e);
      return Math.max.apply(null, t)
  }
  ,
  t.prototype.hasNoSize = function() {
      return this.xVal[0] === this.xVal[this.xVal.length - 1]
  }
  ,
  t.prototype.convert = function(t) {
      return this.getStep(this.toStepping(t))
  }
  ,
  t.prototype.handleEntryPoint = function(t, e) {
      t = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t);
      if (!i(t) || !i(e[0]))
          throw new Error("noUiSlider: 'range' value isn't numeric.");
      this.xPct.push(t),
      this.xVal.push(e[0]);
      e = Number(e[1]);
      t ? this.xSteps.push(!isNaN(e) && e) : isNaN(e) || (this.xSteps[0] = e),
      this.xHighestCompleteStep.push(0)
  }
  ,
  t.prototype.handleStepPoint = function(t, e) {
      e && (this.xVal[t] !== this.xVal[t + 1] ? (this.xSteps[t] = a([this.xVal[t], this.xVal[t + 1]], e, 0) / s(this.xPct[t], this.xPct[t + 1]),
      e = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t],
      e = Math.ceil(Number(e.toFixed(3)) - 1),
      e = this.xVal[t] + this.xNumSteps[t] * e,
      this.xHighestCompleteStep[t] = e) : this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t])
  }
  ,
  t);
  function t(e, t, r) {
      var n;
      this.xPct = [],
      this.xVal = [],
      this.xSteps = [],
      this.xNumSteps = [],
      this.xHighestCompleteStep = [],
      this.xSteps = [r || !1],
      this.xNumSteps = [!1],
      this.snap = t;
      var i = [];
      for (Object.keys(e).forEach(function(t) {
          i.push([pt(e[t]), t])
      }),
      i.sort(function(t, e) {
          return t[0][0] - e[0][0]
      }),
      n = 0; n < i.length; n++)
          this.handleEntryPoint(i[n][1], i[n][0]);
      for (this.xNumSteps = this.xSteps.slice(0),
      n = 0; n < this.xNumSteps.length; n++)
          this.handleStepPoint(n, this.xNumSteps[n])
  }
  var c = {
      to: function(t) {
          return void 0 === t ? "" : t.toFixed(2)
      },
      from: Number
  }
    , p = {
      target: "target",
      base: "base",
      origin: "origin",
      handle: "handle",
      handleLower: "handle-lower",
      handleUpper: "handle-upper",
      touchArea: "touch-area",
      horizontal: "horizontal",
      vertical: "vertical",
      background: "background",
      connect: "connect",
      connects: "connects",
      ltr: "ltr",
      rtl: "rtl",
      textDirectionLtr: "txt-dir-ltr",
      textDirectionRtl: "txt-dir-rtl",
      draggable: "draggable",
      drag: "state-drag",
      tap: "state-tap",
      active: "active",
      tooltip: "tooltip",
      pips: "pips",
      pipsHorizontal: "pips-horizontal",
      pipsVertical: "pips-vertical",
      marker: "marker",
      markerHorizontal: "marker-horizontal",
      markerVertical: "marker-vertical",
      markerNormal: "marker-normal",
      markerLarge: "marker-large",
      markerSub: "marker-sub",
      value: "value",
      valueHorizontal: "value-horizontal",
      valueVertical: "value-vertical",
      valueNormal: "value-normal",
      valueLarge: "value-large",
      valueSub: "value-sub"
  }
    , mt = {
      tooltips: ".__tooltips",
      aria: ".__aria"
  };
  function f(t, e) {
      if (!i(e))
          throw new Error("noUiSlider: 'step' is not numeric.");
      t.singleStep = e
  }
  function d(t, e) {
      if (!i(e))
          throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      t.keyboardPageMultiplier = e
  }
  function h(t, e) {
      if (!i(e))
          throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      t.keyboardMultiplier = e
  }
  function m(t, e) {
      if (!i(e))
          throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      t.keyboardDefaultStep = e
  }
  function g(t, e) {
      if ("object" != typeof e || Array.isArray(e))
          throw new Error("noUiSlider: 'range' is not an object.");
      if (void 0 === e.min || void 0 === e.max)
          throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      t.spectrum = new u(e,t.snap || !1,t.singleStep)
  }
  function v(t, e) {
      if (e = pt(e),
      !Array.isArray(e) || !e.length)
          throw new Error("noUiSlider: 'start' option is incorrect.");
      t.handles = e.length,
      t.start = e
  }
  function b(t, e) {
      if ("boolean" != typeof e)
          throw new Error("noUiSlider: 'snap' option must be a boolean.");
      t.snap = e
  }
  function S(t, e) {
      if ("boolean" != typeof e)
          throw new Error("noUiSlider: 'animate' option must be a boolean.");
      t.animate = e
  }
  function x(t, e) {
      if ("number" != typeof e)
          throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      t.animationDuration = e
  }
  function y(t, e) {
      var r, n = [!1];
      if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]),
      !0 === e || !1 === e) {
          for (r = 1; r < t.handles; r++)
              n.push(e);
          n.push(!1)
      } else {
          if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
              throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
          n = e
      }
      t.connect = n
  }
  function w(t, e) {
      switch (e) {
      case "horizontal":
          t.ort = 0;
          break;
      case "vertical":
          t.ort = 1;
          break;
      default:
          throw new Error("noUiSlider: 'orientation' option is invalid.")
      }
  }
  function E(t, e) {
      if (!i(e))
          throw new Error("noUiSlider: 'margin' option must be numeric.");
      0 !== e && (t.margin = t.spectrum.getDistance(e))
  }
  function P(t, e) {
      if (!i(e))
          throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (t.limit = t.spectrum.getDistance(e),
      !t.limit || t.handles < 2)
          throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
  }
  function C(t, e) {
      var r;
      if (!i(e) && !Array.isArray(e))
          throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1]))
          throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (0 !== e) {
          for (Array.isArray(e) || (e = [e, e]),
          t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])],
          r = 0; r < t.spectrum.xNumSteps.length - 1; r++)
              if (t.padding[0][r] < 0 || t.padding[1][r] < 0)
                  throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
          var n = e[0] + e[1]
            , e = t.spectrum.xVal[0];
          if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - e))
              throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")
      }
  }
  function N(t, e) {
      switch (e) {
      case "ltr":
          t.dir = 0;
          break;
      case "rtl":
          t.dir = 1;
          break;
      default:
          throw new Error("noUiSlider: 'direction' option was not recognized.")
      }
  }
  function V(t, e) {
      if ("string" != typeof e)
          throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var r = 0 <= e.indexOf("tap")
        , n = 0 <= e.indexOf("drag")
        , i = 0 <= e.indexOf("fixed")
        , o = 0 <= e.indexOf("snap")
        , s = 0 <= e.indexOf("hover")
        , a = 0 <= e.indexOf("unconstrained")
        , l = 0 <= e.indexOf("drag-all")
        , e = 0 <= e.indexOf("smooth-steps");
      if (i) {
          if (2 !== t.handles)
              throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
          E(t, t.start[1] - t.start[0])
      }
      if (a && (t.margin || t.limit))
          throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
      t.events = {
          tap: r || o,
          drag: n,
          dragAll: l,
          smoothSteps: e,
          fixed: i,
          snap: o,
          hover: s,
          unconstrained: a
      }
  }
  function k(t, e) {
      if (!1 !== e)
          if (!0 === e || n(e)) {
              t.tooltips = [];
              for (var r = 0; r < t.handles; r++)
                  t.tooltips.push(e)
          } else {
              if ((e = pt(e)).length !== t.handles)
                  throw new Error("noUiSlider: must pass a formatter for all handles.");
              e.forEach(function(t) {
                  if ("boolean" != typeof t && !n(t))
                      throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
              }),
              t.tooltips = e
          }
  }
  function M(t, e) {
      if (e.length !== t.handles)
          throw new Error("noUiSlider: must pass a attributes for all handles.");
      t.handleAttributes = e
  }
  function A(t, e) {
      if (!n(e))
          throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      t.ariaFormat = e
  }
  function U(t, e) {
      if (!n(r = e) || "function" != typeof r.from)
          throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      var r;
      t.format = e
  }
  function D(t, e) {
      if ("boolean" != typeof e)
          throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      t.keyboardSupport = e
  }
  function O(t, e) {
      t.documentElement = e
  }
  function L(t, e) {
      if ("string" != typeof e && !1 !== e)
          throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      t.cssPrefix = e
  }
  function T(e, r) {
      if ("object" != typeof r)
          throw new Error("noUiSlider: 'cssClasses' must be an object.");
      "string" == typeof e.cssPrefix ? (e.cssClasses = {},
      Object.keys(r).forEach(function(t) {
          e.cssClasses[t] = e.cssPrefix + r[t]
      })) : e.cssClasses = r
  }
  function gt(e) {
      var r = {
          margin: null,
          limit: null,
          padding: null,
          animate: !0,
          animationDuration: 300,
          ariaFormat: c,
          format: c
      }
        , n = {
          step: {
              r: !1,
              t: f
          },
          keyboardPageMultiplier: {
              r: !1,
              t: d
          },
          keyboardMultiplier: {
              r: !1,
              t: h
          },
          keyboardDefaultStep: {
              r: !1,
              t: m
          },
          start: {
              r: !0,
              t: v
          },
          connect: {
              r: !0,
              t: y
          },
          direction: {
              r: !0,
              t: N
          },
          snap: {
              r: !1,
              t: b
          },
          animate: {
              r: !1,
              t: S
          },
          animationDuration: {
              r: !1,
              t: x
          },
          range: {
              r: !0,
              t: g
          },
          orientation: {
              r: !1,
              t: w
          },
          margin: {
              r: !1,
              t: E
          },
          limit: {
              r: !1,
              t: P
          },
          padding: {
              r: !1,
              t: C
          },
          behaviour: {
              r: !0,
              t: V
          },
          ariaFormat: {
              r: !1,
              t: A
          },
          format: {
              r: !1,
              t: U
          },
          tooltips: {
              r: !1,
              t: k
          },
          keyboardSupport: {
              r: !0,
              t: D
          },
          documentElement: {
              r: !1,
              t: O
          },
          cssPrefix: {
              r: !0,
              t: L
          },
          cssClasses: {
              r: !0,
              t: T
          },
          handleAttributes: {
              r: !1,
              t: M
          }
      }
        , i = {
          connect: !1,
          direction: "ltr",
          behaviour: "tap",
          orientation: "horizontal",
          keyboardSupport: !0,
          cssPrefix: "noUi-",
          cssClasses: p,
          keyboardPageMultiplier: 5,
          keyboardMultiplier: 1,
          keyboardDefaultStep: 10
      };
      e.format && !e.ariaFormat && (e.ariaFormat = e.format),
      Object.keys(n).forEach(function(t) {
          if (at(e[t]) || void 0 !== i[t])
              n[t].t(r, (at(e[t]) ? e : i)[t]);
          else if (n[t].r)
              throw new Error("noUiSlider: '" + t + "' is required.")
      }),
      r.pips = e.pips;
      var t = document.createElement("div")
        , o = void 0 !== t.style.msTransform
        , t = void 0 !== t.style.transform;
      r.transformRule = t ? "transform" : o ? "msTransform" : "webkitTransform";
      return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort],
      r
  }
  function j(t, f, o) {
      var i, l, a, n, s, u, c = window.navigator.pointerEnabled ? {
          start: "pointerdown",
          move: "pointermove",
          end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
          start: "MSPointerDown",
          move: "MSPointerMove",
          end: "MSPointerUp"
      } : {
          start: "mousedown touchstart",
          move: "mousemove touchmove",
          end: "mouseup touchend"
      }, p = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
          var t = !1;
          try {
              var e = Object.defineProperty({}, "passive", {
                  get: function() {
                      t = !0
                  }
              });
              window.addEventListener("test", null, e)
          } catch (t) {}
          return t
      }(), d = t, S = f.spectrum, h = [], m = [], g = [], v = 0, b = {}, x = t.ownerDocument, y = f.documentElement || x.documentElement, w = x.body, E = "rtl" === x.dir || 1 === f.ort ? 0 : 100;
      function P(t, e) {
          var r = x.createElement("div");
          return e && ft(r, e),
          t.appendChild(r),
          r
      }
      function C(t, e) {
          var r, t = P(t, f.cssClasses.origin), n = P(t, f.cssClasses.handle);
          return P(n, f.cssClasses.touchArea),
          n.setAttribute("data-handle", String(e)),
          f.keyboardSupport && (n.setAttribute("tabindex", "0"),
          n.addEventListener("keydown", function(t) {
              return function(t, e) {
                  if (V() || k(e))
                      return !1;
                  var r = ["Left", "Right"]
                    , n = ["Down", "Up"]
                    , i = ["PageDown", "PageUp"]
                    , o = ["Home", "End"];
                  f.dir && !f.ort ? r.reverse() : f.ort && !f.dir && (n.reverse(),
                  i.reverse());
                  var s = t.key.replace("Arrow", "")
                    , a = s === i[0]
                    , l = s === i[1]
                    , i = s === n[0] || s === r[0] || a
                    , n = s === n[1] || s === r[1] || l
                    , r = s === o[0]
                    , o = s === o[1];
                  if (!(i || n || r || o))
                      return !0;
                  if (t.preventDefault(),
                  n || i) {
                      var u = i ? 0 : 1
                        , u = nt(e)[u];
                      if (null === u)
                          return !1;
                      !1 === u && (u = S.getDefaultStep(m[e], i, f.keyboardDefaultStep)),
                      u *= l || a ? f.keyboardPageMultiplier : f.keyboardMultiplier,
                      u = Math.max(u, 1e-7),
                      u *= i ? -1 : 1,
                      u = h[e] + u
                  } else
                      u = o ? f.spectrum.xVal[f.spectrum.xVal.length - 1] : f.spectrum.xVal[0];
                  return Q(e, S.toStepping(u), !0, !0),
                  I("slide", e),
                  I("update", e),
                  I("change", e),
                  I("set", e),
                  !1
              }(t, e)
          })),
          void 0 !== f.handleAttributes && (r = f.handleAttributes[e],
          Object.keys(r).forEach(function(t) {
              n.setAttribute(t, r[t])
          })),
          n.setAttribute("role", "slider"),
          n.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"),
          0 === e ? ft(n, f.cssClasses.handleLower) : e === f.handles - 1 && ft(n, f.cssClasses.handleUpper),
          t
      }
      function N(t, e) {
          return !!e && P(t, f.cssClasses.connect)
      }
      function e(t, e) {
          return !(!f.tooltips || !f.tooltips[e]) && P(t.firstChild, f.cssClasses.tooltip)
      }
      function V() {
          return d.hasAttribute("disabled")
      }
      function k(t) {
          return l[t].hasAttribute("disabled")
      }
      function M() {
          s && (Y("update" + mt.tooltips),
          s.forEach(function(t) {
              t && st(t)
          }),
          s = null)
      }
      function A() {
          M(),
          s = l.map(e),
          X("update" + mt.tooltips, function(t, e, r) {
              s && f.tooltips && !1 !== s[e] && (t = t[e],
              !0 !== f.tooltips[e] && (t = f.tooltips[e].to(r[e])),
              s[e].innerHTML = t)
          })
      }
      function U(t, e) {
          return t.map(function(t) {
              return S.fromStepping(e ? S.getStep(t) : t)
          })
      }
      function D(d) {
          var h = function(t) {
              if (t.mode === ot.PipsMode.Range || t.mode === ot.PipsMode.Steps)
                  return S.xVal;
              if (t.mode !== ot.PipsMode.Count)
                  return t.mode === ot.PipsMode.Positions ? U(t.values, t.stepped) : t.mode === ot.PipsMode.Values ? t.stepped ? t.values.map(function(t) {
                      return S.fromStepping(S.getStep(S.toStepping(t)))
                  }) : t.values : [];
              if (t.values < 2)
                  throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
              for (var e = t.values - 1, r = 100 / e, n = []; e--; )
                  n[e] = e * r;
              return n.push(100),
              U(n, t.stepped)
          }(d)
            , m = {}
            , t = S.xVal[0]
            , e = S.xVal[S.xVal.length - 1]
            , g = !1
            , v = !1
            , b = 0;
          return (h = h.slice().sort(function(t, e) {
              return t - e
          }).filter(function(t) {
              return !this[t] && (this[t] = !0)
          }, {}))[0] !== t && (h.unshift(t),
          g = !0),
          h[h.length - 1] !== e && (h.push(e),
          v = !0),
          h.forEach(function(t, e) {
              var r, n, i, o, s, a, l, u, t = t, c = h[e + 1], p = d.mode === ot.PipsMode.Steps, f = (f = p ? S.xNumSteps[e] : f) || c - t;
              for (void 0 === c && (c = t),
              f = Math.max(f, 1e-7),
              r = t; r <= c; r = Number((r + f).toFixed(7))) {
                  for (a = (o = (i = S.toStepping(r)) - b) / (d.density || 1),
                  u = o / (l = Math.round(a)),
                  n = 1; n <= l; n += 1)
                      m[(s = b + n * u).toFixed(5)] = [S.fromStepping(s), 0];
                  a = -1 < h.indexOf(r) ? ot.PipsType.LargeValue : p ? ot.PipsType.SmallValue : ot.PipsType.NoValue,
                  !e && g && r !== c && (a = 0),
                  r === c && v || (m[i.toFixed(5)] = [r, a]),
                  b = i
              }
          }),
          m
      }
      function O(i, o, s) {
          var t, a = x.createElement("div"), n = ((t = {})[ot.PipsType.None] = "",
          t[ot.PipsType.NoValue] = f.cssClasses.valueNormal,
          t[ot.PipsType.LargeValue] = f.cssClasses.valueLarge,
          t[ot.PipsType.SmallValue] = f.cssClasses.valueSub,
          t), l = ((t = {})[ot.PipsType.None] = "",
          t[ot.PipsType.NoValue] = f.cssClasses.markerNormal,
          t[ot.PipsType.LargeValue] = f.cssClasses.markerLarge,
          t[ot.PipsType.SmallValue] = f.cssClasses.markerSub,
          t), u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical], c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];
          function p(t, e) {
              var r = e === f.cssClasses.value;
              return e + " " + (r ? u : c)[f.ort] + " " + (r ? n : l)[t]
          }
          return ft(a, f.cssClasses.pips),
          ft(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical),
          Object.keys(i).forEach(function(t) {
              var e, r, n;
              r = i[e = t][0],
              n = i[t][1],
              (n = o ? o(r, n) : n) !== ot.PipsType.None && ((t = P(a, !1)).className = p(n, f.cssClasses.marker),
              t.style[f.style] = e + "%",
              n > ot.PipsType.NoValue && ((t = P(a, !1)).className = p(n, f.cssClasses.value),
              t.setAttribute("data-value", String(r)),
              t.style[f.style] = e + "%",
              t.innerHTML = String(s.to(r))))
          }),
          a
      }
      function L() {
          n && (st(n),
          n = null)
      }
      function T(t) {
          L();
          var e = D(t)
            , r = t.filter
            , t = t.format || {
              to: function(t) {
                  return String(Math.round(t))
              }
          };
          return n = d.appendChild(O(e, r, t))
      }
      function j() {
          var t = i.getBoundingClientRect()
            , e = "offset" + ["Width", "Height"][f.ort];
          return 0 === f.ort ? t.width || i[e] : t.height || i[e]
      }
      function z(n, i, o, s) {
          function e(t) {
              var e, r = function(e, t, r) {
                  var n = 0 === e.type.indexOf("touch")
                    , i = 0 === e.type.indexOf("mouse")
                    , o = 0 === e.type.indexOf("pointer")
                    , s = 0
                    , a = 0;
                  0 === e.type.indexOf("MSPointer") && (o = !0);
                  if ("mousedown" === e.type && !e.buttons && !e.touches)
                      return !1;
                  if (n) {
                      var l = function(t) {
                          t = t.target;
                          return t === r || r.contains(t) || e.composed && e.composedPath().shift() === r
                      };
                      if ("touchstart" === e.type) {
                          n = Array.prototype.filter.call(e.touches, l);
                          if (1 < n.length)
                              return !1;
                          s = n[0].pageX,
                          a = n[0].pageY
                      } else {
                          l = Array.prototype.find.call(e.changedTouches, l);
                          if (!l)
                              return !1;
                          s = l.pageX,
                          a = l.pageY
                      }
                  }
                  t = t || ht(x),
                  (i || o) && (s = e.clientX + t.x,
                  a = e.clientY + t.y);
                  return e.pageOffset = t,
                  e.points = [s, a],
                  e.cursor = i || o,
                  e
              }(t, s.pageOffset, s.target || i);
              return !!r && (!(V() && !s.doNotReject) && (e = d,
              t = f.cssClasses.tap,
              !((e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)) && !s.doNotReject) && (!(n === c.start && void 0 !== r.buttons && 1 < r.buttons) && ((!s.hover || !r.buttons) && (p || r.preventDefault(),
              r.calcPoint = r.points[f.ort],
              void o(r, s))))))
          }
          var r = [];
          return n.split(" ").forEach(function(t) {
              i.addEventListener(t, e, !!p && {
                  passive: !0
              }),
              r.push([t, e])
          }),
          r
      }
      function H(t) {
          var e, r, n = ct(n = 100 * (t - (n = i,
          e = f.ort,
          r = n.getBoundingClientRect(),
          n = (t = n.ownerDocument).documentElement,
          t = ht(t),
          /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (t.x = 0),
          e ? r.top + t.y - n.clientTop : r.left + t.x - n.clientLeft)) / j());
          return f.dir ? 100 - n : n
      }
      function F(t, e) {
          "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && _(t, e)
      }
      function R(t, e) {
          if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty)
              return _(t, e);
          t = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
          G(0 < t, 100 * t / e.baseSize, e.locations, e.handleNumbers, e.connect)
      }
      function _(t, e) {
          e.handle && (dt(e.handle, f.cssClasses.active),
          --v),
          e.listeners.forEach(function(t) {
              y.removeEventListener(t[0], t[1])
          }),
          0 === v && (dt(d, f.cssClasses.drag),
          K(),
          t.cursor && (w.style.cursor = "",
          w.removeEventListener("selectstart", lt))),
          f.events.smoothSteps && (e.handleNumbers.forEach(function(t) {
              Q(t, m[t], !0, !0, !1, !1)
          }),
          e.handleNumbers.forEach(function(t) {
              I("update", t)
          })),
          e.handleNumbers.forEach(function(t) {
              I("change", t),
              I("set", t),
              I("end", t)
          })
      }
      function B(t, e) {
          var r, n, i, o;
          e.handleNumbers.some(k) || (1 === e.handleNumbers.length && (o = l[e.handleNumbers[0]].children[0],
          v += 1,
          ft(o, f.cssClasses.active)),
          t.stopPropagation(),
          n = z(c.move, y, R, {
              target: t.target,
              handle: o,
              connect: e.connect,
              listeners: r = [],
              startCalcPoint: t.calcPoint,
              baseSize: j(),
              pageOffset: t.pageOffset,
              handleNumbers: e.handleNumbers,
              buttonsProperty: t.buttons,
              locations: m.slice()
          }),
          i = z(c.end, y, _, {
              target: t.target,
              handle: o,
              listeners: r,
              doNotReject: !0,
              handleNumbers: e.handleNumbers
          }),
          o = z("mouseout", y, F, {
              target: t.target,
              handle: o,
              listeners: r,
              doNotReject: !0,
              handleNumbers: e.handleNumbers
          }),
          r.push.apply(r, n.concat(i, o)),
          t.cursor && (w.style.cursor = getComputedStyle(t.target).cursor,
          1 < l.length && ft(d, f.cssClasses.drag),
          w.addEventListener("selectstart", lt, !1)),
          e.handleNumbers.forEach(function(t) {
              I("start", t)
          }))
      }
      function r(t) {
          t.stopPropagation();
          var i, o, s, e = H(t.calcPoint), r = (i = e,
          s = !(o = 100),
          l.forEach(function(t, e) {
              var r, n;
              k(e) || (r = m[e],
              ((n = Math.abs(r - i)) < o || n <= o && r < i || 100 === n && 100 === o) && (s = e,
              o = n))
          }),
          s);
          !1 !== r && (f.events.snap || ut(d, f.cssClasses.tap, f.animationDuration),
          Q(r, e, !0, !0),
          K(),
          I("slide", r, !0),
          I("update", r, !0),
          f.events.snap ? B(t, {
              handleNumbers: [r]
          }) : (I("change", r, !0),
          I("set", r, !0)))
      }
      function q(t) {
          var t = H(t.calcPoint)
            , t = S.getStep(t)
            , e = S.fromStepping(t);
          Object.keys(b).forEach(function(t) {
              "hover" === t.split(".")[0] && b[t].forEach(function(t) {
                  t.call(it, e)
              })
          })
      }
      function X(t, e) {
          b[t] = b[t] || [],
          b[t].push(e),
          "update" === t.split(".")[0] && l.forEach(function(t, e) {
              I("update", e)
          })
      }
      function Y(t) {
          var n = t && t.split(".")[0]
            , i = n ? t.substring(n.length) : t;
          Object.keys(b).forEach(function(t) {
              var e = t.split(".")[0]
                , r = t.substring(e.length);
              n && n !== e || i && i !== r || ((e = r) !== mt.aria && e !== mt.tooltips || i === r) && delete b[t]
          })
      }
      function I(r, n, i) {
          Object.keys(b).forEach(function(t) {
              var e = t.split(".")[0];
              r === e && b[t].forEach(function(t) {
                  t.call(it, h.map(f.format.to), n, h.slice(), i || !1, m.slice(), it)
              })
          })
      }
      function W(t, e, r, n, i, o, s) {
          var a;
          return 1 < l.length && !f.events.unconstrained && (n && 0 < e && (a = S.getAbsoluteDistance(t[e - 1], f.margin, !1),
          r = Math.max(r, a)),
          i && e < l.length - 1 && (a = S.getAbsoluteDistance(t[e + 1], f.margin, !0),
          r = Math.min(r, a))),
          1 < l.length && f.limit && (n && 0 < e && (a = S.getAbsoluteDistance(t[e - 1], f.limit, !1),
          r = Math.min(r, a)),
          i && e < l.length - 1 && (a = S.getAbsoluteDistance(t[e + 1], f.limit, !0),
          r = Math.max(r, a))),
          f.padding && (0 === e && (a = S.getAbsoluteDistance(0, f.padding[0], !1),
          r = Math.max(r, a)),
          e === l.length - 1 && (a = S.getAbsoluteDistance(100, f.padding[1], !0),
          r = Math.min(r, a))),
          !((r = ct(r = !s ? S.getStep(r) : r)) === t[e] && !o) && r
      }
      function $(t, e) {
          var r = f.ort;
          return (r ? e : t) + ", " + (r ? t : e)
      }
      function G(t, r, n, e, i) {
          var o = n.slice()
            , s = e[0]
            , a = f.events.smoothSteps
            , l = [!t, t]
            , u = [t, !t];
          e = e.slice(),
          t && e.reverse(),
          1 < e.length ? e.forEach(function(t, e) {
              e = W(o, t, o[t] + r, l[e], u[e], !1, a);
              !1 === e ? r = 0 : (r = e - o[t],
              o[t] = e)
          }) : l = u = [!0];
          var c = !1;
          e.forEach(function(t, e) {
              c = Q(t, n[t] + r, l[e], u[e], !1, a) || c
          }),
          c && (e.forEach(function(t) {
              I("update", t),
              I("slide", t)
          }),
          null != i && I("drag", s))
      }
      function J(t, e) {
          return f.dir ? 100 - t - e : t
      }
      function K() {
          g.forEach(function(t) {
              var e = 50 < m[t] ? -1 : 1
                , e = 3 + (l.length + e * t);
              l[t].style.zIndex = String(e)
          })
      }
      function Q(t, e, r, n, i, o) {
          return !1 !== (e = i ? e : W(m, t, e, r, n, !1, o)) && (e = e,
          m[t = t] = e,
          h[t] = S.fromStepping(e),
          e = "translate(" + $(J(e, 0) - E + "%", "0") + ")",
          l[t].style[f.transformRule] = e,
          Z(t),
          Z(t + 1),
          !0)
      }
      function Z(t) {
          var e, r;
          a[t] && (r = 100,
          e = "translate(" + $(J(e = (e = 0) !== t ? m[t - 1] : e, r = (r = t !== a.length - 1 ? m[t] : r) - e) + "%", "0") + ")",
          r = "scale(" + $(r / 100, "1") + ")",
          a[t].style[f.transformRule] = e + " " + r)
      }
      function tt(t, e) {
          return null === t || !1 === t || void 0 === t ? m[e] : ("number" == typeof t && (t = String(t)),
          !1 === (t = !1 !== (t = f.format.from(t)) ? S.toStepping(t) : t) || isNaN(t) ? m[e] : t)
      }
      function et(t, e, r) {
          var n = pt(t)
            , t = void 0 === m[0];
          e = void 0 === e || e,
          f.animate && !t && ut(d, f.cssClasses.tap, f.animationDuration),
          g.forEach(function(t) {
              Q(t, tt(n[t], t), !0, !1, r)
          });
          var i, o = 1 === g.length ? 0 : 1;
          for (t && S.hasNoSize() && (r = !0,
          m[0] = 0,
          1 < g.length && (i = 100 / (g.length - 1),
          g.forEach(function(t) {
              m[t] = t * i
          }))); o < g.length; ++o)
              g.forEach(function(t) {
                  Q(t, m[t], !0, !0, r)
              });
          K(),
          g.forEach(function(t) {
              I("update", t),
              null !== n[t] && e && I("set", t)
          })
      }
      function rt(t) {
          if (t = void 0 === t ? !1 : t)
              return 1 === h.length ? h[0] : h.slice(0);
          t = h.map(f.format.to);
          return 1 === t.length ? t[0] : t
      }
      function nt(t) {
          var e = m[t]
            , r = S.getNearbySteps(e)
            , n = h[t]
            , i = r.thisStep.step
            , t = null;
          if (f.snap)
              return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
          !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n),
          t = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep,
          100 === e ? i = null : 0 === e && (t = null);
          e = S.countStepDecimals();
          return null !== i && !1 !== i && (i = Number(i.toFixed(e))),
          [t = null !== t && !1 !== t ? Number(t.toFixed(e)) : t, i]
      }
      ft(t = d, f.cssClasses.target),
      0 === f.dir ? ft(t, f.cssClasses.ltr) : ft(t, f.cssClasses.rtl),
      0 === f.ort ? ft(t, f.cssClasses.horizontal) : ft(t, f.cssClasses.vertical),
      ft(t, "rtl" === getComputedStyle(t).direction ? f.cssClasses.textDirectionRtl : f.cssClasses.textDirectionLtr),
      i = P(t, f.cssClasses.base),
      function(t, e) {
          var r = P(e, f.cssClasses.connects);
          l = [],
          (a = []).push(N(r, t[0]));
          for (var n = 0; n < f.handles; n++)
              l.push(C(e, n)),
              g[n] = n,
              a.push(N(r, t[n + 1]))
      }(f.connect, i),
      (u = f.events).fixed || l.forEach(function(t, e) {
          z(c.start, t.children[0], B, {
              handleNumbers: [e]
          })
      }),
      u.tap && z(c.start, i, r, {}),
      u.hover && z(c.move, i, q, {
          hover: !0
      }),
      u.drag && a.forEach(function(e, t) {
          var r, n, i, o, s;
          !1 !== e && 0 !== t && t !== a.length - 1 && (r = l[t - 1],
          n = l[t],
          i = [e],
          o = [r, n],
          s = [t - 1, t],
          ft(e, f.cssClasses.draggable),
          u.fixed && (i.push(r.children[0]),
          i.push(n.children[0])),
          u.dragAll && (o = l,
          s = g),
          i.forEach(function(t) {
              z(c.start, t, B, {
                  handles: o,
                  handleNumbers: s,
                  connect: e
              })
          }))
      }),
      et(f.start),
      f.pips && T(f.pips),
      f.tooltips && A(),
      Y("update" + mt.aria),
      X("update" + mt.aria, function(t, e, o, r, s) {
          g.forEach(function(t) {
              var e = l[t]
                , r = W(m, t, 0, !0, !0, !0)
                , n = W(m, t, 100, !0, !0, !0)
                , i = s[t]
                , t = String(f.ariaFormat.to(o[t]))
                , r = S.fromStepping(r).toFixed(1)
                , n = S.fromStepping(n).toFixed(1)
                , i = S.fromStepping(i).toFixed(1);
              e.children[0].setAttribute("aria-valuemin", r),
              e.children[0].setAttribute("aria-valuemax", n),
              e.children[0].setAttribute("aria-valuenow", i),
              e.children[0].setAttribute("aria-valuetext", t)
          })
      });
      var it = {
          destroy: function() {
              for (Y(mt.aria),
              Y(mt.tooltips),
              Object.keys(f.cssClasses).forEach(function(t) {
                  dt(d, f.cssClasses[t])
              }); d.firstChild; )
                  d.removeChild(d.firstChild);
              delete d.noUiSlider
          },
          steps: function() {
              return g.map(nt)
          },
          on: X,
          off: Y,
          get: rt,
          set: et,
          setHandle: function(t, e, r, n) {
              if (!(0 <= (t = Number(t)) && t < g.length))
                  throw new Error("noUiSlider: invalid handle number, got: " + t);
              Q(t, tt(e, t), !0, !0, n),
              I("update", t),
              r && I("set", t)
          },
          reset: function(t) {
              et(f.start, t)
          },
          __moveHandles: function(t, e, r) {
              G(t, e, m, r)
          },
          options: o,
          updateOptions: function(e, t) {
              var r = rt()
                , n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
              n.forEach(function(t) {
                  void 0 !== e[t] && (o[t] = e[t])
              });
              var i = gt(o);
              n.forEach(function(t) {
                  void 0 !== e[t] && (f[t] = i[t])
              }),
              S = i.spectrum,
              f.margin = i.margin,
              f.limit = i.limit,
              f.padding = i.padding,
              f.pips ? T(f.pips) : L(),
              (f.tooltips ? A : M)(),
              m = [],
              et(at(e.start) ? e.start : r, t)
          },
          target: d,
          removePips: L,
          removeTooltips: M,
          getPositions: function() {
              return m.slice()
          },
          getTooltips: function() {
              return s
          },
          getOrigins: function() {
              return l
          },
          pips: T
      };
      return it
  }
  function z(t, e) {
      if (!t || !t.nodeName)
          throw new Error("noUiSlider: create requires a single element, got: " + t);
      if (t.noUiSlider)
          throw new Error("noUiSlider: Slider was already initialized.");
      e = j(t, gt(e), e);
      return t.noUiSlider = e
  }
  var H = {
      __spectrum: u,
      cssClasses: p,
      create: z
  };
  ot.create = z,
  ot.cssClasses = p,
  ot.default = H,
  Object.defineProperty(ot, "__esModule", {
      value: !0
  })
});
