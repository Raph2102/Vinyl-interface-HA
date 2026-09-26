var Wc = { exports: {} }, du = {};
var lh;
function Wp() {
  if (lh) return du;
  lh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, h, p) {
    var b = null;
    if (p !== void 0 && (b = "" + p), h.key !== void 0 && (b = "" + h.key), "key" in h) {
      p = {};
      for (var k in h)
        k !== "key" && (p[k] = h[k]);
    } else p = h;
    return h = p.ref, {
      $$typeof: c,
      type: r,
      key: b,
      ref: h !== void 0 ? h : null,
      props: p
    };
  }
  return du.Fragment = u, du.jsx = o, du.jsxs = o, du;
}
var nh;
function Fp() {
  return nh || (nh = 1, Wc.exports = Wp()), Wc.exports;
}
var f = Fp(), Fc = { exports: {} }, de = {};
var ih;
function Ip() {
  if (ih) return de;
  ih = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), U = Symbol.iterator;
  function O(y) {
    return y === null || typeof y != "object" ? null : (y = U && y[U] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var K = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, D = Object.assign, Z = {};
  function ee(y, j, J) {
    this.props = y, this.context = j, this.refs = Z, this.updater = J || K;
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(y, j) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, j, "setState");
  }, ee.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function he() {
  }
  he.prototype = ee.prototype;
  function ce(y, j, J) {
    this.props = y, this.context = j, this.refs = Z, this.updater = J || K;
  }
  var P = ce.prototype = new he();
  P.constructor = ce, D(P, ee.prototype), P.isPureReactComponent = !0;
  var oe = Array.isArray;
  function be() {
  }
  var ne = { H: null, A: null, T: null, S: null }, ve = Object.prototype.hasOwnProperty;
  function je(y, j, J) {
    var G = J.ref;
    return {
      $$typeof: c,
      type: y,
      key: j,
      ref: G !== void 0 ? G : null,
      props: J
    };
  }
  function Ue(y, j) {
    return je(y.type, j, y.props);
  }
  function tt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === c;
  }
  function fe(y) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(J) {
      return j[J];
    });
  }
  var Pe = /\/+/g;
  function De(y, j) {
    return typeof y == "object" && y !== null && y.key != null ? fe("" + y.key) : j.toString(36);
  }
  function V(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(be, be) : (y.status = "pending", y.then(
          function(j) {
            y.status === "pending" && (y.status = "fulfilled", y.value = j);
          },
          function(j) {
            y.status === "pending" && (y.status = "rejected", y.reason = j);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function E(y, j, J, G, F) {
    var _ = typeof y;
    (_ === "undefined" || _ === "boolean") && (y = null);
    var ue = !1;
    if (y === null) ue = !0;
    else
      switch (_) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case c:
            case u:
              ue = !0;
              break;
            case S:
              return ue = y._init, E(
                ue(y._payload),
                j,
                J,
                G,
                F
              );
          }
      }
    if (ue)
      return F = F(y), ue = G === "" ? "." + De(y, 0) : G, oe(F) ? (J = "", ue != null && (J = ue.replace(Pe, "$&/") + "/"), E(F, j, J, "", function(Yt) {
        return Yt;
      })) : F != null && (tt(F) && (F = Ue(
        F,
        J + (F.key == null || y && y.key === F.key ? "" : ("" + F.key).replace(
          Pe,
          "$&/"
        ) + "/") + ue
      )), j.push(F)), 1;
    ue = 0;
    var Me = G === "" ? "." : G + ":";
    if (oe(y))
      for (var ze = 0; ze < y.length; ze++)
        G = y[ze], _ = Me + De(G, ze), ue += E(
          G,
          j,
          J,
          _,
          F
        );
    else if (ze = O(y), typeof ze == "function")
      for (y = ze.call(y), ze = 0; !(G = y.next()).done; )
        G = G.value, _ = Me + De(G, ze++), ue += E(
          G,
          j,
          J,
          _,
          F
        );
    else if (_ === "object") {
      if (typeof y.then == "function")
        return E(
          V(y),
          j,
          J,
          G,
          F
        );
      throw j = String(y), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function B(y, j, J) {
    if (y == null) return y;
    var G = [], F = 0;
    return E(y, G, "", "", function(_) {
      return j.call(J, _, F++);
    }), G;
  }
  function X(y) {
    if (y._status === -1) {
      var j = y._result;
      j = j(), j.then(
        function(J) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = J);
        },
        function(J) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = J);
        }
      ), y._status === -1 && (y._status = 0, y._result = j);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var ae = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, W = {
    map: B,
    forEach: function(y, j, J) {
      B(
        y,
        function() {
          j.apply(this, arguments);
        },
        J
      );
    },
    count: function(y) {
      var j = 0;
      return B(y, function() {
        j++;
      }), j;
    },
    toArray: function(y) {
      return B(y, function(j) {
        return j;
      }) || [];
    },
    only: function(y) {
      if (!tt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return de.Activity = C, de.Children = W, de.Component = ee, de.Fragment = o, de.Profiler = h, de.PureComponent = ce, de.StrictMode = r, de.Suspense = v, de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne, de.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return ne.H.useMemoCache(y);
    }
  }, de.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, de.cacheSignal = function() {
    return null;
  }, de.cloneElement = function(y, j, J) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var G = D({}, y.props), F = y.key;
    if (j != null)
      for (_ in j.key !== void 0 && (F = "" + j.key), j)
        !ve.call(j, _) || _ === "key" || _ === "__self" || _ === "__source" || _ === "ref" && j.ref === void 0 || (G[_] = j[_]);
    var _ = arguments.length - 2;
    if (_ === 1) G.children = J;
    else if (1 < _) {
      for (var ue = Array(_), Me = 0; Me < _; Me++)
        ue[Me] = arguments[Me + 2];
      G.children = ue;
    }
    return je(y.type, F, G);
  }, de.createContext = function(y) {
    return y = {
      $$typeof: b,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: p,
      _context: y
    }, y;
  }, de.createElement = function(y, j, J) {
    var G, F = {}, _ = null;
    if (j != null)
      for (G in j.key !== void 0 && (_ = "" + j.key), j)
        ve.call(j, G) && G !== "key" && G !== "__self" && G !== "__source" && (F[G] = j[G]);
    var ue = arguments.length - 2;
    if (ue === 1) F.children = J;
    else if (1 < ue) {
      for (var Me = Array(ue), ze = 0; ze < ue; ze++)
        Me[ze] = arguments[ze + 2];
      F.children = Me;
    }
    if (y && y.defaultProps)
      for (G in ue = y.defaultProps, ue)
        F[G] === void 0 && (F[G] = ue[G]);
    return je(y, _, F);
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(y) {
    return { $$typeof: k, render: y };
  }, de.isValidElement = tt, de.lazy = function(y) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: y },
      _init: X
    };
  }, de.memo = function(y, j) {
    return {
      $$typeof: m,
      type: y,
      compare: j === void 0 ? null : j
    };
  }, de.startTransition = function(y) {
    var j = ne.T, J = {};
    ne.T = J;
    try {
      var G = y(), F = ne.S;
      F !== null && F(J, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(be, ae);
    } catch (_) {
      ae(_);
    } finally {
      j !== null && J.types !== null && (j.types = J.types), ne.T = j;
    }
  }, de.unstable_useCacheRefresh = function() {
    return ne.H.useCacheRefresh();
  }, de.use = function(y) {
    return ne.H.use(y);
  }, de.useActionState = function(y, j, J) {
    return ne.H.useActionState(y, j, J);
  }, de.useCallback = function(y, j) {
    return ne.H.useCallback(y, j);
  }, de.useContext = function(y) {
    return ne.H.useContext(y);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(y, j) {
    return ne.H.useDeferredValue(y, j);
  }, de.useEffect = function(y, j) {
    return ne.H.useEffect(y, j);
  }, de.useEffectEvent = function(y) {
    return ne.H.useEffectEvent(y);
  }, de.useId = function() {
    return ne.H.useId();
  }, de.useImperativeHandle = function(y, j, J) {
    return ne.H.useImperativeHandle(y, j, J);
  }, de.useInsertionEffect = function(y, j) {
    return ne.H.useInsertionEffect(y, j);
  }, de.useLayoutEffect = function(y, j) {
    return ne.H.useLayoutEffect(y, j);
  }, de.useMemo = function(y, j) {
    return ne.H.useMemo(y, j);
  }, de.useOptimistic = function(y, j) {
    return ne.H.useOptimistic(y, j);
  }, de.useReducer = function(y, j, J) {
    return ne.H.useReducer(y, j, J);
  }, de.useRef = function(y) {
    return ne.H.useRef(y);
  }, de.useState = function(y) {
    return ne.H.useState(y);
  }, de.useSyncExternalStore = function(y, j, J) {
    return ne.H.useSyncExternalStore(
      y,
      j,
      J
    );
  }, de.useTransition = function() {
    return ne.H.useTransition();
  }, de.version = "19.2.8", de;
}
var uh;
function Eo() {
  return uh || (uh = 1, Fc.exports = Ip()), Fc.exports;
}
var z = Eo(), Ic = { exports: {} }, hu = {}, Pc = { exports: {} }, _c = {};
var sh;
function Pp() {
  return sh || (sh = 1, (function(c) {
    function u(E, B) {
      var X = E.length;
      E.push(B);
      e: for (; 0 < X; ) {
        var ae = X - 1 >>> 1, W = E[ae];
        if (0 < h(W, B))
          E[ae] = B, E[X] = W, X = ae;
        else break e;
      }
    }
    function o(E) {
      return E.length === 0 ? null : E[0];
    }
    function r(E) {
      if (E.length === 0) return null;
      var B = E[0], X = E.pop();
      if (X !== B) {
        E[0] = X;
        e: for (var ae = 0, W = E.length, y = W >>> 1; ae < y; ) {
          var j = 2 * (ae + 1) - 1, J = E[j], G = j + 1, F = E[G];
          if (0 > h(J, X))
            G < W && 0 > h(F, J) ? (E[ae] = F, E[G] = X, ae = G) : (E[ae] = J, E[j] = X, ae = j);
          else if (G < W && 0 > h(F, X))
            E[ae] = F, E[G] = X, ae = G;
          else break e;
        }
      }
      return B;
    }
    function h(E, B) {
      var X = E.sortIndex - B.sortIndex;
      return X !== 0 ? X : E.id - B.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      c.unstable_now = function() {
        return p.now();
      };
    } else {
      var b = Date, k = b.now();
      c.unstable_now = function() {
        return b.now() - k;
      };
    }
    var v = [], m = [], S = 1, C = null, U = 3, O = !1, K = !1, D = !1, Z = !1, ee = typeof setTimeout == "function" ? setTimeout : null, he = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    function P(E) {
      for (var B = o(m); B !== null; ) {
        if (B.callback === null) r(m);
        else if (B.startTime <= E)
          r(m), B.sortIndex = B.expirationTime, u(v, B);
        else break;
        B = o(m);
      }
    }
    function oe(E) {
      if (D = !1, P(E), !K)
        if (o(v) !== null)
          K = !0, be || (be = !0, fe());
        else {
          var B = o(m);
          B !== null && V(oe, B.startTime - E);
        }
    }
    var be = !1, ne = -1, ve = 5, je = -1;
    function Ue() {
      return Z ? !0 : !(c.unstable_now() - je < ve);
    }
    function tt() {
      if (Z = !1, be) {
        var E = c.unstable_now();
        je = E;
        var B = !0;
        try {
          e: {
            K = !1, D && (D = !1, he(ne), ne = -1), O = !0;
            var X = U;
            try {
              t: {
                for (P(E), C = o(v); C !== null && !(C.expirationTime > E && Ue()); ) {
                  var ae = C.callback;
                  if (typeof ae == "function") {
                    C.callback = null, U = C.priorityLevel;
                    var W = ae(
                      C.expirationTime <= E
                    );
                    if (E = c.unstable_now(), typeof W == "function") {
                      C.callback = W, P(E), B = !0;
                      break t;
                    }
                    C === o(v) && r(v), P(E);
                  } else r(v);
                  C = o(v);
                }
                if (C !== null) B = !0;
                else {
                  var y = o(m);
                  y !== null && V(
                    oe,
                    y.startTime - E
                  ), B = !1;
                }
              }
              break e;
            } finally {
              C = null, U = X, O = !1;
            }
            B = void 0;
          }
        } finally {
          B ? fe() : be = !1;
        }
      }
    }
    var fe;
    if (typeof ce == "function")
      fe = function() {
        ce(tt);
      };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), De = Pe.port2;
      Pe.port1.onmessage = tt, fe = function() {
        De.postMessage(null);
      };
    } else
      fe = function() {
        ee(tt, 0);
      };
    function V(E, B) {
      ne = ee(function() {
        E(c.unstable_now());
      }, B);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, c.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ve = 0 < E ? Math.floor(1e3 / E) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, c.unstable_next = function(E) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = U;
      }
      var X = U;
      U = B;
      try {
        return E();
      } finally {
        U = X;
      }
    }, c.unstable_requestPaint = function() {
      Z = !0;
    }, c.unstable_runWithPriority = function(E, B) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var X = U;
      U = E;
      try {
        return B();
      } finally {
        U = X;
      }
    }, c.unstable_scheduleCallback = function(E, B, X) {
      var ae = c.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ae + X : ae) : X = ae, E) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = X + W, E = {
        id: S++,
        callback: B,
        priorityLevel: E,
        startTime: X,
        expirationTime: W,
        sortIndex: -1
      }, X > ae ? (E.sortIndex = X, u(m, E), o(v) === null && E === o(m) && (D ? (he(ne), ne = -1) : D = !0, V(oe, X - ae))) : (E.sortIndex = W, u(v, E), K || O || (K = !0, be || (be = !0, fe()))), E;
    }, c.unstable_shouldYield = Ue, c.unstable_wrapCallback = function(E) {
      var B = U;
      return function() {
        var X = U;
        U = B;
        try {
          return E.apply(this, arguments);
        } finally {
          U = X;
        }
      };
    };
  })(_c)), _c;
}
var rh;
function _p() {
  return rh || (rh = 1, Pc.exports = Pp()), Pc.exports;
}
var $c = { exports: {} }, Ut = {};
var ch;
function $p() {
  if (ch) return Ut;
  ch = 1;
  var c = Eo();
  function u(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        m += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(u(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, h = /* @__PURE__ */ Symbol.for("react.portal");
  function p(v, m, S) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: C == null ? null : "" + C,
      children: v,
      containerInfo: m,
      implementation: S
    };
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(v, m) {
    if (v === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Ut.createPortal = function(v, m) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(u(299));
    return p(v, m, null, S);
  }, Ut.flushSync = function(v) {
    var m = b.T, S = r.p;
    try {
      if (b.T = null, r.p = 2, v) return v();
    } finally {
      b.T = m, r.p = S, r.d.f();
    }
  }, Ut.preconnect = function(v, m) {
    typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(v, m));
  }, Ut.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, Ut.preinit = function(v, m) {
    if (typeof v == "string" && m && typeof m.as == "string") {
      var S = m.as, C = k(S, m.crossOrigin), U = typeof m.integrity == "string" ? m.integrity : void 0, O = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      S === "style" ? r.d.S(
        v,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: C,
          integrity: U,
          fetchPriority: O
        }
      ) : S === "script" && r.d.X(v, {
        crossOrigin: C,
        integrity: U,
        fetchPriority: O,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Ut.preinitModule = function(v, m) {
    if (typeof v == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var S = k(
            m.as,
            m.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: S,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && r.d.M(v);
  }, Ut.preload = function(v, m) {
    if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var S = m.as, C = k(S, m.crossOrigin);
      r.d.L(v, S, {
        crossOrigin: C,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, Ut.preloadModule = function(v, m) {
    if (typeof v == "string")
      if (m) {
        var S = k(m.as, m.crossOrigin);
        r.d.m(v, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: S,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else r.d.m(v);
  }, Ut.requestFormReset = function(v) {
    r.d.r(v);
  }, Ut.unstable_batchedUpdates = function(v, m) {
    return v(m);
  }, Ut.useFormState = function(v, m, S) {
    return b.H.useFormState(v, m, S);
  }, Ut.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, Ut.version = "19.2.8", Ut;
}
var oh;
function Oh() {
  if (oh) return $c.exports;
  oh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (u) {
        console.error(u);
      }
  }
  return c(), $c.exports = $p(), $c.exports;
}
var fh;
function e1() {
  if (fh) return hu;
  fh = 1;
  var c = _p(), u = Eo(), o = Oh();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function p(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function b(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (p(e) !== e)
      throw Error(r(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (t = p(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === a) return v(n), e;
          if (i === l) return v(n), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) a = n, l = i;
      else {
        for (var s = !1, d = n.child; d; ) {
          if (d === a) {
            s = !0, a = n, l = i;
            break;
          }
          if (d === l) {
            s = !0, l = n, a = i;
            break;
          }
          d = d.sibling;
        }
        if (!s) {
          for (d = i.child; d; ) {
            if (d === a) {
              s = !0, a = i, l = n;
              break;
            }
            if (d === l) {
              s = !0, l = i, a = n;
              break;
            }
            d = d.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
  }
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = S(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign, U = /* @__PURE__ */ Symbol.for("react.element"), O = /* @__PURE__ */ Symbol.for("react.transitional.element"), K = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), he = /* @__PURE__ */ Symbol.for("react.consumer"), ce = /* @__PURE__ */ Symbol.for("react.context"), P = /* @__PURE__ */ Symbol.for("react.forward_ref"), oe = /* @__PURE__ */ Symbol.for("react.suspense"), be = /* @__PURE__ */ Symbol.for("react.suspense_list"), ne = /* @__PURE__ */ Symbol.for("react.memo"), ve = /* @__PURE__ */ Symbol.for("react.lazy"), je = /* @__PURE__ */ Symbol.for("react.activity"), Ue = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != "object" ? null : (e = tt && e[tt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Pe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function De(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case ee:
        return "Profiler";
      case Z:
        return "StrictMode";
      case oe:
        return "Suspense";
      case be:
        return "SuspenseList";
      case je:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case K:
          return "Portal";
        case ce:
          return e.displayName || "Context";
        case he:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ne:
          return t = e.displayName || null, t !== null ? t : De(e.type) || "Memo";
        case ve:
          t = e._payload, e = e._init;
          try {
            return De(e(t));
          } catch {
          }
      }
    return null;
  }
  var V = Array.isArray, E = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], W = -1;
  function y(e) {
    return { current: e };
  }
  function j(e) {
    0 > W || (e.current = ae[W], ae[W] = null, W--);
  }
  function J(e, t) {
    W++, ae[W] = e.current, e.current = t;
  }
  var G = y(null), F = y(null), _ = y(null), ue = y(null);
  function Me(e, t) {
    switch (J(_, t), J(F, e), J(G, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? M0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = M0(t), e = T0(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    j(G), J(G, e);
  }
  function ze() {
    j(G), j(F), j(_);
  }
  function Yt(e) {
    e.memoizedState !== null && J(ue, e);
    var t = G.current, a = T0(t, e.type);
    t !== a && (J(F, e), J(G, a));
  }
  function Xe(e) {
    F.current === e && (j(G), j(F)), ue.current === e && (j(ue), ru._currentValue = X);
  }
  var ia, Dt;
  function bt(e) {
    if (ia === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ia = t && t[1] || "", Dt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ia + e + Dt;
  }
  var jt = !1;
  function Sa(e, t) {
    if (!e || jt) return "";
    jt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Y = function() {
                throw Error();
              };
              if (Object.defineProperty(Y.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Y, []);
                } catch (q) {
                  var N = q;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (q) {
                  N = q;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                N = q;
              }
              (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {
              });
            }
          } catch (q) {
            if (q && N && typeof q.stack == "string")
              return [q.stack, N.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = l.DetermineComponentFrameRoot(), s = i[0], d = i[1];
      if (s && d) {
        var g = s.split(`
`), T = d.split(`
`);
        for (n = l = 0; l < g.length && !g[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < T.length && !T[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === g.length || n === T.length)
          for (l = g.length - 1, n = T.length - 1; 1 <= l && 0 <= n && g[l] !== T[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (g[l] !== T[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || g[l] !== T[n]) {
                  var R = `
` + g[l].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      jt = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? bt(a) : "";
  }
  function En(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return bt(e.type);
      case 16:
        return bt("Lazy");
      case 13:
        return e.child !== t && t !== null ? bt("Suspense Fallback") : bt("Suspense");
      case 19:
        return bt("SuspenseList");
      case 0:
      case 15:
        return Sa(e.type, !1);
      case 11:
        return Sa(e.type.render, !1);
      case 1:
        return Sa(e.type, !0);
      case 31:
        return bt("Activity");
      default:
        return "";
    }
  }
  function $(e) {
    try {
      var t = "", a = null;
      do
        t += En(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var re = Object.prototype.hasOwnProperty, Ee = c.unstable_scheduleCallback, Re = c.unstable_cancelCallback, xt = c.unstable_shouldYield, Ht = c.unstable_requestPaint, qe = c.unstable_now, st = c.unstable_getCurrentPriorityLevel, ht = c.unstable_ImmediatePriority, _e = c.unstable_UserBlockingPriority, Qe = c.unstable_NormalPriority, pt = c.unstable_LowPriority, ua = c.unstable_IdlePriority, sa = c.log, Fl = c.unstable_setDisableYieldValue, fl = null, St = null;
  function ra(e) {
    if (typeof sa == "function" && Fl(e), St && typeof St.setStrictMode == "function")
      try {
        St.setStrictMode(fl, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : Rt, An = Math.log, pi = Math.LN2;
  function Rt(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (An(e) / pi | 0) | 0;
  }
  var Et = 256, ja = 262144, Ha = 4194304;
  function At(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Il(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, i = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var d = l & 134217727;
    return d !== 0 ? (l = d & ~i, l !== 0 ? n = At(l) : (s &= d, s !== 0 ? n = At(s) : a || (a = d & ~e, a !== 0 && (n = At(a))))) : (d = l & ~i, d !== 0 ? n = At(d) : s !== 0 ? n = At(s) : a || (a = l & ~e, a !== 0 && (n = At(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, a = t & -t, i >= a || i === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function Ea(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function dl(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Va() {
    var e = Ha;
    return Ha <<= 1, (Ha & 62914560) === 0 && (Ha = 4194304), e;
  }
  function zt(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Pl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function vi(e, t, a, l, n, i) {
    var s = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var d = e.entanglements, g = e.expirationTimes, T = e.hiddenUpdates;
    for (a = s & ~a; 0 < a; ) {
      var R = 31 - rt(a), Y = 1 << R;
      d[R] = 0, g[R] = -1;
      var N = T[R];
      if (N !== null)
        for (T[R] = null, R = 0; R < N.length; R++) {
          var q = N[R];
          q !== null && (q.lane &= -536870913);
        }
      a &= ~Y;
    }
    l !== 0 && Su(e, l, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function Su(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Eu(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - rt(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function hl(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : gi(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function gi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function zn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function yi() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : I0(e.type));
  }
  function wn(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Aa = Math.random().toString(36).slice(2), at = "__reactFiber$" + Aa, vt = "__reactProps$" + Aa, qa = "__reactContainer$" + Aa, Mn = "__reactEvents$" + Aa, Au = "__reactListeners$" + Aa, Ws = "__reactHandles$" + Aa, zu = "__reactResources$" + Aa, _l = "__reactMarker$" + Aa;
  function Ua(e) {
    delete e[at], delete e[vt], delete e[Mn], delete e[Au], delete e[Ws];
  }
  function Ga(e) {
    var t = e[at];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[qa] || a[at]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = O0(e); e !== null; ) {
            if (a = e[at]) return a;
            e = O0(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function He(e) {
    if (e = e[at] || e[qa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ka(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Vt(e) {
    var t = e[zu];
    return t || (t = e[zu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function lt(e) {
    e[_l] = !0;
  }
  var wu = /* @__PURE__ */ new Set(), Tn = {};
  function Za(e, t) {
    ml(e, t), ml(e + "Capture", t);
  }
  function ml(e, t) {
    for (Tn[e] = t, e = 0; e < t.length; e++)
      wu.add(t[e]);
  }
  var bi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mu = {}, xi = {};
  function $l(e) {
    return re.call(xi, e) ? !0 : re.call(Mu, e) ? !1 : bi.test(e) ? xi[e] = !0 : (Mu[e] = !0, !1);
  }
  function pl(e, t, a) {
    if ($l(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Xa(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Gt(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function We(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Nn(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Tu(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, i = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          a = "" + s, i.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(s) {
          a = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Si(e) {
    if (!e._valueTracker) {
      var t = Nn(e) ? "checked" : "value";
      e._valueTracker = Tu(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Nu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Nn(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function vl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Fs = /[\n"\\]/g;
  function Zt(e) {
    return e.replace(
      Fs,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function en(e, t, a, l, n, i, s, d) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + We(t)) : e.value !== "" + We(t) && (e.value = "" + We(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Ei(e, s, We(t)) : a != null ? Ei(e, s, We(a)) : l != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + We(d) : e.removeAttribute("name");
  }
  function Cu(e, t, a, l, n, i, s, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Si(e);
        return;
      }
      a = a != null ? "" + We(a) : "", t = t != null ? "" + We(t) : a, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = d ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Si(e);
  }
  function Ei(e, t, a) {
    t === "number" && vl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ze(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++)
        t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + We(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = !0, l && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ai(e, t, a) {
    if (t != null && (t = "" + We(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + We(a) : "";
  }
  function ju(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (V(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = We(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Si(e);
  }
  function gl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cn = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function tn(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Cn.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function qu(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t)
        l = t[n], t.hasOwnProperty(n) && a[n] !== l && tn(e, n, l);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && tn(e, i, t[i]);
  }
  function zi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jn = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), qn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yl(e) {
    return qn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function za() {
  }
  var wi = null;
  function Mi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var an = null, bl = null;
  function Uu(e) {
    var t = He(e);
    if (t && (e = t.stateNode)) {
      var a = e[vt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (en(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Zt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[vt] || null;
                if (!n) throw Error(r(90));
                en(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && Nu(l);
          }
          break e;
        case "textarea":
          Ai(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ze(e, !!a.multiple, t, !1);
      }
    }
  }
  var Ti = !1;
  function Ni(e, t, a) {
    if (Ti) return e(t, a);
    Ti = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Ti = !1, (an !== null || bl !== null) && (ms(), an && (t = an, e = bl, bl = an = null, Uu(t), e)))
        for (t = 0; t < e.length; t++) Uu(e[t]);
    }
  }
  function Ka(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[vt] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        r(231, t, typeof a)
      );
    return a;
  }
  var wa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ln = !1;
  if (wa)
    try {
      var A = {};
      Object.defineProperty(A, "passive", {
        get: function() {
          ln = !0;
        }
      }), window.addEventListener("test", A, A), window.removeEventListener("test", A, A);
    } catch {
      ln = !1;
    }
  var H = null, Q = null, I = null;
  function we() {
    if (I) return I;
    var e, t = Q, a = t.length, l, n = "value" in H ? H.value : H.textContent, i = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var s = a - e;
    for (l = 1; l <= s && t[a - l] === n[i - l]; l++) ;
    return I = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function gt(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wt() {
    return !0;
  }
  function Bt() {
    return !1;
  }
  function nt(e) {
    function t(a, l, n, i, s) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (a = e[d], this[d] = a ? a(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wt : Bt, this.isPropagationStopped = Bt, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wt);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wt);
      },
      persist: function() {
      },
      isPersistent: wt
    }), t;
  }
  var ca = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ja = nt(ca), oa = C({}, ca, { view: 0, detail: 0 }), Ft = nt(oa), Qa, xl, Wa, Sl = C({}, oa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $s,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Wa && (Wa && e.type === "mousemove" ? (Qa = e.screenX - Wa.screenX, xl = e.screenY - Wa.screenY) : xl = Qa = 0, Wa = e), Qa);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : xl;
    }
  }), Un = nt(Sl), qt = C({}, Sl, { dataTransfer: 0 }), El = nt(qt), nn = C({}, oa, { relatedTarget: 0 }), Ma = nt(nn), Is = C({}, ca, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ps = nt(Is), Fa = C({}, ca, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), _s = nt(Fa), em = C({}, ca, { data: 0 }), Co = nt(em), tm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, am = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, lm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lm[e]) ? !!t[e] : !1;
  }
  function $s() {
    return nm;
  }
  var im = C({}, oa, {
    key: function(e) {
      if (e.key) {
        var t = tm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gt(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? am[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $s,
    charCode: function(e) {
      return e.type === "keypress" ? gt(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gt(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), um = nt(im), sm = C({}, Sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), jo = nt(sm), rm = C({}, oa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $s
  }), cm = nt(rm), om = C({}, ca, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fm = nt(om), dm = C({}, Sl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hm = nt(dm), mm = C({}, ca, {
    newState: 0,
    oldState: 0
  }), pm = nt(mm), vm = [9, 13, 27, 32], er = wa && "CompositionEvent" in window, Ci = null;
  wa && "documentMode" in document && (Ci = document.documentMode);
  var gm = wa && "TextEvent" in window && !Ci, qo = wa && (!er || Ci && 8 < Ci && 11 >= Ci), Uo = " ", ko = !1;
  function Oo(e, t) {
    switch (e) {
      case "keyup":
        return vm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Do(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var kn = !1;
  function ym(e, t) {
    switch (e) {
      case "compositionend":
        return Do(t);
      case "keypress":
        return t.which !== 32 ? null : (ko = !0, Uo);
      case "textInput":
        return e = t.data, e === Uo && ko ? null : e;
      default:
        return null;
    }
  }
  function bm(e, t) {
    if (kn)
      return e === "compositionend" || !er && Oo(e, t) ? (e = we(), I = Q = H = null, kn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xm[e.type] : t === "textarea";
  }
  function Bo(e, t, a, l) {
    an ? bl ? bl.push(l) : bl = [l] : an = l, t = Ss(t, "onChange"), 0 < t.length && (a = new Ja(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var ji = null, qi = null;
  function Sm(e) {
    x0(e, 0);
  }
  function ku(e) {
    var t = ka(e);
    if (Nu(t)) return e;
  }
  function Lo(e, t) {
    if (e === "change") return t;
  }
  var Yo = !1;
  if (wa) {
    var tr;
    if (wa) {
      var ar = "oninput" in document;
      if (!ar) {
        var Ho = document.createElement("div");
        Ho.setAttribute("oninput", "return;"), ar = typeof Ho.oninput == "function";
      }
      tr = ar;
    } else tr = !1;
    Yo = tr && (!document.documentMode || 9 < document.documentMode);
  }
  function Vo() {
    ji && (ji.detachEvent("onpropertychange", Go), qi = ji = null);
  }
  function Go(e) {
    if (e.propertyName === "value" && ku(qi)) {
      var t = [];
      Bo(
        t,
        qi,
        e,
        Mi(e)
      ), Ni(Sm, t);
    }
  }
  function Em(e, t, a) {
    e === "focusin" ? (Vo(), ji = t, qi = a, ji.attachEvent("onpropertychange", Go)) : e === "focusout" && Vo();
  }
  function Am(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ku(qi);
  }
  function zm(e, t) {
    if (e === "click") return ku(t);
  }
  function wm(e, t) {
    if (e === "input" || e === "change")
      return ku(t);
  }
  function Mm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var It = typeof Object.is == "function" ? Object.is : Mm;
  function Ui(e, t) {
    if (It(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!re.call(t, n) || !It(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Zo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xo(e, t) {
    var a = Zo(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Zo(a);
    }
  }
  function Ko(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ko(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Jo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = vl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = vl(e.document);
    }
    return t;
  }
  function lr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Tm = wa && "documentMode" in document && 11 >= document.documentMode, On = null, nr = null, ki = null, ir = !1;
  function Qo(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ir || On == null || On !== vl(l) || (l = On, "selectionStart" in l && lr(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ki && Ui(ki, l) || (ki = l, l = Ss(nr, "onSelect"), 0 < l.length && (t = new Ja(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = On)));
  }
  function un(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Dn = {
    animationend: un("Animation", "AnimationEnd"),
    animationiteration: un("Animation", "AnimationIteration"),
    animationstart: un("Animation", "AnimationStart"),
    transitionrun: un("Transition", "TransitionRun"),
    transitionstart: un("Transition", "TransitionStart"),
    transitioncancel: un("Transition", "TransitionCancel"),
    transitionend: un("Transition", "TransitionEnd")
  }, ur = {}, Wo = {};
  wa && (Wo = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
  function sn(e) {
    if (ur[e]) return ur[e];
    if (!Dn[e]) return e;
    var t = Dn[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Wo)
        return ur[e] = t[a];
    return e;
  }
  var Fo = sn("animationend"), Io = sn("animationiteration"), Po = sn("animationstart"), Nm = sn("transitionrun"), Cm = sn("transitionstart"), jm = sn("transitioncancel"), _o = sn("transitionend"), $o = /* @__PURE__ */ new Map(), sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  sr.push("scrollEnd");
  function Ta(e, t) {
    $o.set(e, t), Za(t, [e]);
  }
  var Ou = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, fa = [], Rn = 0, rr = 0;
  function Du() {
    for (var e = Rn, t = rr = Rn = 0; t < e; ) {
      var a = fa[t];
      fa[t++] = null;
      var l = fa[t];
      fa[t++] = null;
      var n = fa[t];
      fa[t++] = null;
      var i = fa[t];
      if (fa[t++] = null, l !== null && n !== null) {
        var s = l.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n;
      }
      i !== 0 && ef(a, n, i);
    }
  }
  function Ru(e, t, a, l) {
    fa[Rn++] = e, fa[Rn++] = t, fa[Rn++] = a, fa[Rn++] = l, rr |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function cr(e, t, a, l) {
    return Ru(e, t, a, l), Bu(e);
  }
  function rn(e, t) {
    return Ru(e, null, null, t), Bu(e);
  }
  function ef(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - rt(a), e = i.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), i) : null;
  }
  function Bu(e) {
    if (50 < tu)
      throw tu = 0, yc = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Bn = {};
  function qm(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, a, l) {
    return new qm(e, t, a, l);
  }
  function or(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ia(e, t) {
    var a = e.alternate;
    return a === null ? (a = Pt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function tf(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Lu(e, t, a, l, n, i) {
    var s = 0;
    if (l = e, typeof e == "function") or(e) && (s = 1);
    else if (typeof e == "string")
      s = Rp(
        e,
        a,
        G.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case je:
          return e = Pt(31, a, t, n), e.elementType = je, e.lanes = i, e;
        case D:
          return cn(a.children, n, i, t);
        case Z:
          s = 8, n |= 24;
          break;
        case ee:
          return e = Pt(12, a, t, n | 2), e.elementType = ee, e.lanes = i, e;
        case oe:
          return e = Pt(13, a, t, n), e.elementType = oe, e.lanes = i, e;
        case be:
          return e = Pt(19, a, t, n), e.elementType = be, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ce:
                s = 10;
                break e;
              case he:
                s = 9;
                break e;
              case P:
                s = 11;
                break e;
              case ne:
                s = 14;
                break e;
              case ve:
                s = 16, l = null;
                break e;
            }
          s = 29, a = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Pt(s, a, t, n), t.elementType = e, t.type = l, t.lanes = i, t;
  }
  function cn(e, t, a, l) {
    return e = Pt(7, e, l, t), e.lanes = a, e;
  }
  function fr(e, t, a) {
    return e = Pt(6, e, null, t), e.lanes = a, e;
  }
  function af(e) {
    var t = Pt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function dr(e, t, a) {
    return t = Pt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var lf = /* @__PURE__ */ new WeakMap();
  function da(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = lf.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: $(t)
      }, lf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: $(t)
    };
  }
  var Ln = [], Yn = 0, Yu = null, Oi = 0, ha = [], ma = 0, Al = null, Oa = 1, Da = "";
  function Pa(e, t) {
    Ln[Yn++] = Oi, Ln[Yn++] = Yu, Yu = e, Oi = t;
  }
  function nf(e, t, a) {
    ha[ma++] = Oa, ha[ma++] = Da, ha[ma++] = Al, Al = e;
    var l = Oa;
    e = Da;
    var n = 32 - rt(l) - 1;
    l &= ~(1 << n), a += 1;
    var i = 32 - rt(t) + n;
    if (30 < i) {
      var s = n - n % 5;
      i = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, Oa = 1 << 32 - rt(t) + n | a << n | l, Da = i + e;
    } else
      Oa = 1 << i | a << n | l, Da = e;
  }
  function hr(e) {
    e.return !== null && (Pa(e, 1), nf(e, 1, 0));
  }
  function mr(e) {
    for (; e === Yu; )
      Yu = Ln[--Yn], Ln[Yn] = null, Oi = Ln[--Yn], Ln[Yn] = null;
    for (; e === Al; )
      Al = ha[--ma], ha[ma] = null, Da = ha[--ma], ha[ma] = null, Oa = ha[--ma], ha[ma] = null;
  }
  function uf(e, t) {
    ha[ma++] = Oa, ha[ma++] = Da, ha[ma++] = Al, Oa = t.id, Da = t.overflow, Al = e;
  }
  var Mt = null, Ke = null, Ae = !1, zl = null, pa = !1, pr = Error(r(519));
  function wl(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Di(da(t, e)), pr;
  }
  function sf(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[at] = e, t[vt] = l, a) {
      case "dialog":
        ye("cancel", t), ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < lu.length; a++)
          ye(lu[a], t);
        break;
      case "source":
        ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", t), ye("load", t);
        break;
      case "details":
        ye("toggle", t);
        break;
      case "input":
        ye("invalid", t), Cu(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        ye("invalid", t);
        break;
      case "textarea":
        ye("invalid", t), ju(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || z0(t.textContent, a) ? (l.popover != null && (ye("beforetoggle", t), ye("toggle", t)), l.onScroll != null && ye("scroll", t), l.onScrollEnd != null && ye("scrollend", t), l.onClick != null && (t.onclick = za), t = !0) : t = !1, t || wl(e, !0);
  }
  function rf(e) {
    for (Mt = e.return; Mt; )
      switch (Mt.tag) {
        case 5:
        case 31:
        case 13:
          pa = !1;
          return;
        case 27:
        case 3:
          pa = !0;
          return;
        default:
          Mt = Mt.return;
      }
  }
  function Hn(e) {
    if (e !== Mt) return !1;
    if (!Ae) return rf(e), Ae = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || kc(e.type, e.memoizedProps)), a = !a), a && Ke && wl(e), rf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ke = k0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ke = k0(e);
    } else
      t === 27 ? (t = Ke, Yl(e.type) ? (e = Lc, Lc = null, Ke = e) : Ke = t) : Ke = Mt ? ga(e.stateNode.nextSibling) : null;
    return !0;
  }
  function on() {
    Ke = Mt = null, Ae = !1;
  }
  function vr() {
    var e = zl;
    return e !== null && (Qt === null ? Qt = e : Qt.push.apply(
      Qt,
      e
    ), zl = null), e;
  }
  function Di(e) {
    zl === null ? zl = [e] : zl.push(e);
  }
  var gr = y(null), fn = null, _a = null;
  function Ml(e, t, a) {
    J(gr, t._currentValue), t._currentValue = a;
  }
  function $a(e) {
    e._currentValue = gr.current, j(gr);
  }
  function yr(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function br(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var s = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var g = 0; g < t.length; g++)
            if (d.context === t[g]) {
              i.lanes |= a, d = i.alternate, d !== null && (d.lanes |= a), yr(
                i.return,
                a,
                e
              ), l || (s = null);
              break e;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(r(341));
        s.lanes |= a, i = s.alternate, i !== null && (i.lanes |= a), yr(s, a, e), s = null;
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (n = s.sibling, n !== null) {
            n.return = s.return, s = n;
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function Vn(e, t, a, l) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(r(387));
        if (s = s.memoizedProps, s !== null) {
          var d = n.type;
          It(n.pendingProps.value, s.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (n === ue.current) {
        if (s = n.alternate, s === null) throw Error(r(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(ru) : e = [ru]);
      }
      n = n.return;
    }
    e !== null && br(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Hu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!It(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function dn(e) {
    fn = e, _a = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Tt(e) {
    return cf(fn, e);
  }
  function Vu(e, t) {
    return fn === null && dn(e), cf(e, t);
  }
  function cf(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, _a === null) {
      if (e === null) throw Error(r(308));
      _a = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else _a = _a.next = t;
    return a;
  }
  var Um = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, km = c.unstable_scheduleCallback, Om = c.unstable_NormalPriority, ct = {
    $$typeof: ce,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xr() {
    return {
      controller: new Um(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ri(e) {
    e.refCount--, e.refCount === 0 && km(Om, function() {
      e.controller.abort();
    });
  }
  var Bi = null, Sr = 0, Gn = 0, Zn = null;
  function Dm(e, t) {
    if (Bi === null) {
      var a = Bi = [];
      Sr = 0, Gn = zc(), Zn = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Sr++, t.then(of, of), t;
  }
  function of() {
    if (--Sr === 0 && Bi !== null) {
      Zn !== null && (Zn.status = "fulfilled");
      var e = Bi;
      Bi = null, Gn = 0, Zn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Rm(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var n = 0; n < a.length; n++) (0, a[n])(t);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var ff = E.S;
  E.S = function(e, t) {
    Wd = qe(), typeof t == "object" && t !== null && typeof t.then == "function" && Dm(e, t), ff !== null && ff(e, t);
  };
  var hn = y(null);
  function Er() {
    var e = hn.current;
    return e !== null ? e : Ve.pooledCache;
  }
  function Gu(e, t) {
    t === null ? J(hn, hn.current) : J(hn, t.pool);
  }
  function df() {
    var e = Er();
    return e === null ? null : { parent: ct._currentValue, pool: e };
  }
  var Xn = Error(r(460)), Ar = Error(r(474)), Zu = Error(r(542)), Xu = { then: function() {
  } };
  function hf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function mf(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(za, za), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, vf(e), e;
      default:
        if (typeof t.status == "string") t.then(za, za);
        else {
          if (e = Ve, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, vf(e), e;
        }
        throw pn = t, Xn;
    }
  }
  function mn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (pn = a, Xn) : a;
    }
  }
  var pn = null;
  function pf() {
    if (pn === null) throw Error(r(459));
    var e = pn;
    return pn = null, e;
  }
  function vf(e) {
    if (e === Xn || e === Zu)
      throw Error(r(483));
  }
  var Kn = null, Li = 0;
  function Ku(e) {
    var t = Li;
    return Li += 1, Kn === null && (Kn = []), mf(Kn, e, t);
  }
  function Yi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ju(e, t) {
    throw t.$$typeof === U ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function gf(e) {
    function t(w, x) {
      if (e) {
        var M = w.deletions;
        M === null ? (w.deletions = [x], w.flags |= 16) : M.push(x);
      }
    }
    function a(w, x) {
      if (!e) return null;
      for (; x !== null; )
        t(w, x), x = x.sibling;
      return null;
    }
    function l(w) {
      for (var x = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? x.set(w.key, w) : x.set(w.index, w), w = w.sibling;
      return x;
    }
    function n(w, x) {
      return w = Ia(w, x), w.index = 0, w.sibling = null, w;
    }
    function i(w, x, M) {
      return w.index = M, e ? (M = w.alternate, M !== null ? (M = M.index, M < x ? (w.flags |= 67108866, x) : M) : (w.flags |= 67108866, x)) : (w.flags |= 1048576, x);
    }
    function s(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function d(w, x, M, L) {
      return x === null || x.tag !== 6 ? (x = fr(M, w.mode, L), x.return = w, x) : (x = n(x, M), x.return = w, x);
    }
    function g(w, x, M, L) {
      var ie = M.type;
      return ie === D ? R(
        w,
        x,
        M.props.children,
        L,
        M.key
      ) : x !== null && (x.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === ve && mn(ie) === x.type) ? (x = n(x, M.props), Yi(x, M), x.return = w, x) : (x = Lu(
        M.type,
        M.key,
        M.props,
        null,
        w.mode,
        L
      ), Yi(x, M), x.return = w, x);
    }
    function T(w, x, M, L) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = dr(M, w.mode, L), x.return = w, x) : (x = n(x, M.children || []), x.return = w, x);
    }
    function R(w, x, M, L, ie) {
      return x === null || x.tag !== 7 ? (x = cn(
        M,
        w.mode,
        L,
        ie
      ), x.return = w, x) : (x = n(x, M), x.return = w, x);
    }
    function Y(w, x, M) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = fr(
          "" + x,
          w.mode,
          M
        ), x.return = w, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case O:
            return M = Lu(
              x.type,
              x.key,
              x.props,
              null,
              w.mode,
              M
            ), Yi(M, x), M.return = w, M;
          case K:
            return x = dr(
              x,
              w.mode,
              M
            ), x.return = w, x;
          case ve:
            return x = mn(x), Y(w, x, M);
        }
        if (V(x) || fe(x))
          return x = cn(
            x,
            w.mode,
            M,
            null
          ), x.return = w, x;
        if (typeof x.then == "function")
          return Y(w, Ku(x), M);
        if (x.$$typeof === ce)
          return Y(
            w,
            Vu(w, x),
            M
          );
        Ju(w, x);
      }
      return null;
    }
    function N(w, x, M, L) {
      var ie = x !== null ? x.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return ie !== null ? null : d(w, x, "" + M, L);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case O:
            return M.key === ie ? g(w, x, M, L) : null;
          case K:
            return M.key === ie ? T(w, x, M, L) : null;
          case ve:
            return M = mn(M), N(w, x, M, L);
        }
        if (V(M) || fe(M))
          return ie !== null ? null : R(w, x, M, L, null);
        if (typeof M.then == "function")
          return N(
            w,
            x,
            Ku(M),
            L
          );
        if (M.$$typeof === ce)
          return N(
            w,
            x,
            Vu(w, M),
            L
          );
        Ju(w, M);
      }
      return null;
    }
    function q(w, x, M, L, ie) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return w = w.get(M) || null, d(x, w, "" + L, ie);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case O:
            return w = w.get(
              L.key === null ? M : L.key
            ) || null, g(x, w, L, ie);
          case K:
            return w = w.get(
              L.key === null ? M : L.key
            ) || null, T(x, w, L, ie);
          case ve:
            return L = mn(L), q(
              w,
              x,
              M,
              L,
              ie
            );
        }
        if (V(L) || fe(L))
          return w = w.get(M) || null, R(x, w, L, ie, null);
        if (typeof L.then == "function")
          return q(
            w,
            x,
            M,
            Ku(L),
            ie
          );
        if (L.$$typeof === ce)
          return q(
            w,
            x,
            M,
            Vu(x, L),
            ie
          );
        Ju(x, L);
      }
      return null;
    }
    function te(w, x, M, L) {
      for (var ie = null, Te = null, le = x, pe = x = 0, Se = null; le !== null && pe < M.length; pe++) {
        le.index > pe ? (Se = le, le = null) : Se = le.sibling;
        var Ne = N(
          w,
          le,
          M[pe],
          L
        );
        if (Ne === null) {
          le === null && (le = Se);
          break;
        }
        e && le && Ne.alternate === null && t(w, le), x = i(Ne, x, pe), Te === null ? ie = Ne : Te.sibling = Ne, Te = Ne, le = Se;
      }
      if (pe === M.length)
        return a(w, le), Ae && Pa(w, pe), ie;
      if (le === null) {
        for (; pe < M.length; pe++)
          le = Y(w, M[pe], L), le !== null && (x = i(
            le,
            x,
            pe
          ), Te === null ? ie = le : Te.sibling = le, Te = le);
        return Ae && Pa(w, pe), ie;
      }
      for (le = l(le); pe < M.length; pe++)
        Se = q(
          le,
          w,
          pe,
          M[pe],
          L
        ), Se !== null && (e && Se.alternate !== null && le.delete(
          Se.key === null ? pe : Se.key
        ), x = i(
          Se,
          x,
          pe
        ), Te === null ? ie = Se : Te.sibling = Se, Te = Se);
      return e && le.forEach(function(Xl) {
        return t(w, Xl);
      }), Ae && Pa(w, pe), ie;
    }
    function se(w, x, M, L) {
      if (M == null) throw Error(r(151));
      for (var ie = null, Te = null, le = x, pe = x = 0, Se = null, Ne = M.next(); le !== null && !Ne.done; pe++, Ne = M.next()) {
        le.index > pe ? (Se = le, le = null) : Se = le.sibling;
        var Xl = N(w, le, Ne.value, L);
        if (Xl === null) {
          le === null && (le = Se);
          break;
        }
        e && le && Xl.alternate === null && t(w, le), x = i(Xl, x, pe), Te === null ? ie = Xl : Te.sibling = Xl, Te = Xl, le = Se;
      }
      if (Ne.done)
        return a(w, le), Ae && Pa(w, pe), ie;
      if (le === null) {
        for (; !Ne.done; pe++, Ne = M.next())
          Ne = Y(w, Ne.value, L), Ne !== null && (x = i(Ne, x, pe), Te === null ? ie = Ne : Te.sibling = Ne, Te = Ne);
        return Ae && Pa(w, pe), ie;
      }
      for (le = l(le); !Ne.done; pe++, Ne = M.next())
        Ne = q(le, w, pe, Ne.value, L), Ne !== null && (e && Ne.alternate !== null && le.delete(Ne.key === null ? pe : Ne.key), x = i(Ne, x, pe), Te === null ? ie = Ne : Te.sibling = Ne, Te = Ne);
      return e && le.forEach(function(Qp) {
        return t(w, Qp);
      }), Ae && Pa(w, pe), ie;
    }
    function Ye(w, x, M, L) {
      if (typeof M == "object" && M !== null && M.type === D && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case O:
            e: {
              for (var ie = M.key; x !== null; ) {
                if (x.key === ie) {
                  if (ie = M.type, ie === D) {
                    if (x.tag === 7) {
                      a(
                        w,
                        x.sibling
                      ), L = n(
                        x,
                        M.props.children
                      ), L.return = w, w = L;
                      break e;
                    }
                  } else if (x.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === ve && mn(ie) === x.type) {
                    a(
                      w,
                      x.sibling
                    ), L = n(x, M.props), Yi(L, M), L.return = w, w = L;
                    break e;
                  }
                  a(w, x);
                  break;
                } else t(w, x);
                x = x.sibling;
              }
              M.type === D ? (L = cn(
                M.props.children,
                w.mode,
                L,
                M.key
              ), L.return = w, w = L) : (L = Lu(
                M.type,
                M.key,
                M.props,
                null,
                w.mode,
                L
              ), Yi(L, M), L.return = w, w = L);
            }
            return s(w);
          case K:
            e: {
              for (ie = M.key; x !== null; ) {
                if (x.key === ie)
                  if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                    a(
                      w,
                      x.sibling
                    ), L = n(x, M.children || []), L.return = w, w = L;
                    break e;
                  } else {
                    a(w, x);
                    break;
                  }
                else t(w, x);
                x = x.sibling;
              }
              L = dr(M, w.mode, L), L.return = w, w = L;
            }
            return s(w);
          case ve:
            return M = mn(M), Ye(
              w,
              x,
              M,
              L
            );
        }
        if (V(M))
          return te(
            w,
            x,
            M,
            L
          );
        if (fe(M)) {
          if (ie = fe(M), typeof ie != "function") throw Error(r(150));
          return M = ie.call(M), se(
            w,
            x,
            M,
            L
          );
        }
        if (typeof M.then == "function")
          return Ye(
            w,
            x,
            Ku(M),
            L
          );
        if (M.$$typeof === ce)
          return Ye(
            w,
            x,
            Vu(w, M),
            L
          );
        Ju(w, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, x !== null && x.tag === 6 ? (a(w, x.sibling), L = n(x, M), L.return = w, w = L) : (a(w, x), L = fr(M, w.mode, L), L.return = w, w = L), s(w)) : a(w, x);
    }
    return function(w, x, M, L) {
      try {
        Li = 0;
        var ie = Ye(
          w,
          x,
          M,
          L
        );
        return Kn = null, ie;
      } catch (le) {
        if (le === Xn || le === Zu) throw le;
        var Te = Pt(29, le, null, w.mode);
        return Te.lanes = L, Te.return = w, Te;
      }
    };
  }
  var vn = gf(!0), yf = gf(!1), Tl = !1;
  function zr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Nl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Cl(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ce & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Bu(e), ef(e, null, a), t;
    }
    return Ru(e, l, t, a), Bu(e);
  }
  function Hi(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Eu(e, a);
    }
  }
  function Mr(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, i = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var s = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = s : i = i.next = s, a = a.next;
        } while (a !== null);
        i === null ? n = i = t : i = i.next = t;
      } else n = i = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Tr = !1;
  function Vi() {
    if (Tr) {
      var e = Zn;
      if (e !== null) throw e;
    }
  }
  function Gi(e, t, a, l) {
    Tr = !1;
    var n = e.updateQueue;
    Tl = !1;
    var i = n.firstBaseUpdate, s = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var g = d, T = g.next;
      g.next = null, s === null ? i = T : s.next = T, s = g;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, d = R.lastBaseUpdate, d !== s && (d === null ? R.firstBaseUpdate = T : d.next = T, R.lastBaseUpdate = g));
    }
    if (i !== null) {
      var Y = n.baseState;
      s = 0, R = T = g = null, d = i;
      do {
        var N = d.lane & -536870913, q = N !== d.lane;
        if (q ? (xe & N) === N : (l & N) === N) {
          N !== 0 && N === Gn && (Tr = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var te = e, se = d;
            N = t;
            var Ye = a;
            switch (se.tag) {
              case 1:
                if (te = se.payload, typeof te == "function") {
                  Y = te.call(Ye, Y, N);
                  break e;
                }
                Y = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = se.payload, N = typeof te == "function" ? te.call(Ye, Y, N) : te, N == null) break e;
                Y = C({}, Y, N);
                break e;
              case 2:
                Tl = !0;
            }
          }
          N = d.callback, N !== null && (e.flags |= 64, q && (e.flags |= 8192), q = n.callbacks, q === null ? n.callbacks = [N] : q.push(N));
        } else
          q = {
            lane: N,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, R === null ? (T = R = q, g = Y) : R = R.next = q, s |= N;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          q = d, d = q.next, q.next = null, n.lastBaseUpdate = q, n.shared.pending = null;
        }
      } while (!0);
      R === null && (g = Y), n.baseState = g, n.firstBaseUpdate = T, n.lastBaseUpdate = R, i === null && (n.shared.lanes = 0), Ol |= s, e.lanes = s, e.memoizedState = Y;
    }
  }
  function bf(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function xf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        bf(a[e], t);
  }
  var Jn = y(null), Qu = y(0);
  function Sf(e, t) {
    e = rl, J(Qu, e), J(Jn, t), rl = e | t.baseLanes;
  }
  function Nr() {
    J(Qu, rl), J(Jn, Jn.current);
  }
  function Cr() {
    rl = Qu.current, j(Jn), j(Qu);
  }
  var _t = y(null), va = null;
  function jl(e) {
    var t = e.alternate;
    J(it, it.current & 1), J(_t, e), va === null && (t === null || Jn.current !== null || t.memoizedState !== null) && (va = e);
  }
  function jr(e) {
    J(it, it.current), J(_t, e), va === null && (va = e);
  }
  function Ef(e) {
    e.tag === 22 ? (J(it, it.current), J(_t, e), va === null && (va = e)) : ql();
  }
  function ql() {
    J(it, it.current), J(_t, _t.current);
  }
  function $t(e) {
    j(_t), va === e && (va = null), j(it);
  }
  var it = y(0);
  function Wu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Rc(a) || Bc(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var el = 0, me = null, Be = null, ot = null, Fu = !1, Qn = !1, gn = !1, Iu = 0, Zi = 0, Wn = null, Bm = 0;
  function $e() {
    throw Error(r(321));
  }
  function qr(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!It(e[a], t[a])) return !1;
    return !0;
  }
  function Ur(e, t, a, l, n, i) {
    return el = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = e === null || e.memoizedState === null ? id : Qr, gn = !1, i = a(l, n), gn = !1, Qn && (i = zf(
      t,
      a,
      l,
      n
    )), Af(e), i;
  }
  function Af(e) {
    E.H = Ji;
    var t = Be !== null && Be.next !== null;
    if (el = 0, ot = Be = me = null, Fu = !1, Zi = 0, Wn = null, t) throw Error(r(300));
    e === null || ft || (e = e.dependencies, e !== null && Hu(e) && (ft = !0));
  }
  function zf(e, t, a, l) {
    me = e;
    var n = 0;
    do {
      if (Qn && (Wn = null), Zi = 0, Qn = !1, 25 <= n) throw Error(r(301));
      if (n += 1, ot = Be = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      E.H = ud, i = t(a, l);
    } while (Qn);
    return i;
  }
  function Lm() {
    var e = E.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Xi(t) : t, e = e.useState()[0], (Be !== null ? Be.memoizedState : null) !== e && (me.flags |= 1024), t;
  }
  function kr() {
    var e = Iu !== 0;
    return Iu = 0, e;
  }
  function Or(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Dr(e) {
    if (Fu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Fu = !1;
    }
    el = 0, ot = Be = me = null, Qn = !1, Zi = Iu = 0, Wn = null;
  }
  function Lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ot === null ? me.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function ut() {
    if (Be === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = ot === null ? me.memoizedState : ot.next;
    if (t !== null)
      ot = t, Be = e;
    else {
      if (e === null)
        throw me.alternate === null ? Error(r(467)) : Error(r(310));
      Be = e, e = {
        memoizedState: Be.memoizedState,
        baseState: Be.baseState,
        baseQueue: Be.baseQueue,
        queue: Be.queue,
        next: null
      }, ot === null ? me.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function Pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xi(e) {
    var t = Zi;
    return Zi += 1, Wn === null && (Wn = []), e = mf(Wn, e, t), t = me, (ot === null ? t.memoizedState : ot.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? id : Qr), e;
  }
  function _u(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Xi(e);
      if (e.$$typeof === ce) return Tt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Rr(e) {
    var t = null, a = me.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = me.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Pu(), me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = Ue;
    return t.index++, a;
  }
  function tl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $u(e) {
    var t = ut();
    return Br(t, Be, e);
  }
  function Br(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue, i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = i.next, i.next = s;
      }
      t.baseQueue = n = i, l.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var d = s = null, g = null, T = t, R = !1;
      do {
        var Y = T.lane & -536870913;
        if (Y !== T.lane ? (xe & Y) === Y : (el & Y) === Y) {
          var N = T.revertLane;
          if (N === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), Y === Gn && (R = !0);
          else if ((el & N) === N) {
            T = T.next, N === Gn && (R = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, g === null ? (d = g = Y, s = i) : g = g.next = Y, me.lanes |= N, Ol |= N;
          Y = T.action, gn && a(i, Y), i = T.hasEagerState ? T.eagerState : a(i, Y);
        } else
          N = {
            lane: Y,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, g === null ? (d = g = N, s = i) : g = g.next = N, me.lanes |= Y, Ol |= Y;
        T = T.next;
      } while (T !== null && T !== t);
      if (g === null ? s = i : g.next = d, !It(i, e.memoizedState) && (ft = !0, R && (a = Zn, a !== null)))
        throw a;
      e.memoizedState = i, e.baseState = s, e.baseQueue = g, l.lastRenderedState = i;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Lr(e) {
    var t = ut(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, n = a.pending, i = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var s = n = n.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== n);
      It(i, t.memoizedState) || (ft = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), a.lastRenderedState = i;
    }
    return [i, l];
  }
  function wf(e, t, a) {
    var l = me, n = ut(), i = Ae;
    if (i) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var s = !It(
      (Be || n).memoizedState,
      a
    );
    if (s && (n.memoizedState = a, ft = !0), n = n.queue, Vr(Nf.bind(null, l, n, e), [
      e
    ]), n.getSnapshot !== t || s || ot !== null && ot.memoizedState.tag & 1) {
      if (l.flags |= 2048, Fn(
        9,
        { destroy: void 0 },
        Tf.bind(
          null,
          l,
          n,
          a,
          t
        ),
        null
      ), Ve === null) throw Error(r(349));
      i || (el & 127) !== 0 || Mf(l, t, a);
    }
    return a;
  }
  function Mf(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = me.updateQueue, t === null ? (t = Pu(), me.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Tf(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Cf(t) && jf(e);
  }
  function Nf(e, t, a) {
    return a(function() {
      Cf(t) && jf(e);
    });
  }
  function Cf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !It(e, a);
    } catch {
      return !0;
    }
  }
  function jf(e) {
    var t = rn(e, 2);
    t !== null && Wt(t, e, 2);
  }
  function Yr(e) {
    var t = Lt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), gn) {
        ra(!0);
        try {
          a();
        } finally {
          ra(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: e
    }, t;
  }
  function qf(e, t, a, l) {
    return e.baseState = a, Br(
      e,
      Be,
      typeof l == "function" ? l : tl
    );
  }
  function Ym(e, t, a, l, n) {
    if (as(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          i.listeners.push(s);
        }
      };
      E.T !== null ? a(!0) : i.isTransition = !1, l(i), a = t.pending, a === null ? (i.next = t.pending = i, Uf(t, i)) : (i.next = a.next, t.pending = a.next = i);
    }
  }
  function Uf(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var i = E.T, s = {};
      E.T = s;
      try {
        var d = a(n, l), g = E.S;
        g !== null && g(s, d), kf(e, t, d);
      } catch (T) {
        Hr(e, t, T);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), E.T = i;
      }
    } else
      try {
        i = a(n, l), kf(e, t, i);
      } catch (T) {
        Hr(e, t, T);
      }
  }
  function kf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Of(e, t, l);
      },
      function(l) {
        return Hr(e, t, l);
      }
    ) : Of(e, t, a);
  }
  function Of(e, t, a) {
    t.status = "fulfilled", t.value = a, Df(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Uf(e, a)));
  }
  function Hr(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Df(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Df(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Rf(e, t) {
    return t;
  }
  function Bf(e, t) {
    if (Ae) {
      var a = Ve.formState;
      if (a !== null) {
        e: {
          var l = me;
          if (Ae) {
            if (Ke) {
              t: {
                for (var n = Ke, i = pa; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (n = ga(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Ke = ga(
                  n.nextSibling
                ), l = n.data === "F!";
                break e;
              }
            }
            wl(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = Lt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rf,
      lastRenderedState: t
    }, a.queue = l, a = ad.bind(
      null,
      me,
      l
    ), l.dispatch = a, l = Yr(!1), i = Jr.bind(
      null,
      me,
      !1,
      l.queue
    ), l = Lt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = Ym.bind(
      null,
      me,
      n,
      i,
      a
    ), n.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Lf(e) {
    var t = ut();
    return Yf(t, Be, e);
  }
  function Yf(e, t, a) {
    if (t = Br(
      e,
      t,
      Rf
    )[0], e = $u(tl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Xi(t);
      } catch (s) {
        throw s === Xn ? Zu : s;
      }
    else l = t;
    t = ut();
    var n = t.queue, i = n.dispatch;
    return a !== t.memoizedState && (me.flags |= 2048, Fn(
      9,
      { destroy: void 0 },
      Hm.bind(null, n, a),
      null
    )), [l, i, e];
  }
  function Hm(e, t) {
    e.action = t;
  }
  function Hf(e) {
    var t = ut(), a = Be;
    if (a !== null)
      return Yf(t, a, e);
    ut(), t = t.memoizedState, a = ut();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function Fn(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = me.updateQueue, t === null && (t = Pu(), me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Vf() {
    return ut().memoizedState;
  }
  function es(e, t, a, l) {
    var n = Lt();
    me.flags |= e, n.memoizedState = Fn(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function ts(e, t, a, l) {
    var n = ut();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    Be !== null && l !== null && qr(l, Be.memoizedState.deps) ? n.memoizedState = Fn(t, i, a, l) : (me.flags |= e, n.memoizedState = Fn(
      1 | t,
      i,
      a,
      l
    ));
  }
  function Gf(e, t) {
    es(8390656, 8, e, t);
  }
  function Vr(e, t) {
    ts(2048, 8, e, t);
  }
  function Vm(e) {
    me.flags |= 4;
    var t = me.updateQueue;
    if (t === null)
      t = Pu(), me.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Zf(e) {
    var t = ut().memoizedState;
    return Vm({ ref: t, nextImpl: e }), function() {
      if ((Ce & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Xf(e, t) {
    return ts(4, 2, e, t);
  }
  function Kf(e, t) {
    return ts(4, 4, e, t);
  }
  function Jf(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Qf(e, t, a) {
    a = a != null ? a.concat([e]) : null, ts(4, 4, Jf.bind(null, t, e), a);
  }
  function Gr() {
  }
  function Wf(e, t) {
    var a = ut();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && qr(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Ff(e, t) {
    var a = ut();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && qr(t, l[1]))
      return l[0];
    if (l = e(), gn) {
      ra(!0);
      try {
        e();
      } finally {
        ra(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Zr(e, t, a) {
    return a === void 0 || (el & 1073741824) !== 0 && (xe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Id(), me.lanes |= e, Ol |= e, a);
  }
  function If(e, t, a, l) {
    return It(a, t) ? a : Jn.current !== null ? (e = Zr(e, a, l), It(e, t) || (ft = !0), e) : (el & 42) === 0 || (el & 1073741824) !== 0 && (xe & 261930) === 0 ? (ft = !0, e.memoizedState = a) : (e = Id(), me.lanes |= e, Ol |= e, t);
  }
  function Pf(e, t, a, l, n) {
    var i = B.p;
    B.p = i !== 0 && 8 > i ? i : 8;
    var s = E.T, d = {};
    E.T = d, Jr(e, !1, t, a);
    try {
      var g = n(), T = E.S;
      if (T !== null && T(d, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var R = Rm(
          g,
          l
        );
        Ki(
          e,
          t,
          R,
          aa(e)
        );
      } else
        Ki(
          e,
          t,
          l,
          aa(e)
        );
    } catch (Y) {
      Ki(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Y },
        aa()
      );
    } finally {
      B.p = i, s !== null && d.types !== null && (s.types = d.types), E.T = s;
    }
  }
  function Gm() {
  }
  function Xr(e, t, a, l) {
    if (e.tag !== 5) throw Error(r(476));
    var n = _f(e).queue;
    Pf(
      e,
      n,
      t,
      X,
      a === null ? Gm : function() {
        return $f(e), a(l);
      }
    );
  }
  function _f(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: X
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function $f(e) {
    var t = _f(e);
    t.next === null && (t = e.alternate.memoizedState), Ki(
      e,
      t.next.queue,
      {},
      aa()
    );
  }
  function Kr() {
    return Tt(ru);
  }
  function ed() {
    return ut().memoizedState;
  }
  function td() {
    return ut().memoizedState;
  }
  function Zm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = aa();
          e = Nl(a);
          var l = Cl(t, e, a);
          l !== null && (Wt(l, t, a), Hi(l, t, a)), t = { cache: xr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Xm(e, t, a) {
    var l = aa();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, as(e) ? ld(t, a) : (a = cr(e, t, a, l), a !== null && (Wt(a, e, l), nd(a, t, l)));
  }
  function ad(e, t, a) {
    var l = aa();
    Ki(e, t, a, l);
  }
  function Ki(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (as(e)) ld(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var s = t.lastRenderedState, d = i(s, a);
          if (n.hasEagerState = !0, n.eagerState = d, It(d, s))
            return Ru(e, t, n, 0), Ve === null && Du(), !1;
        } catch {
        }
      if (a = cr(e, t, n, l), a !== null)
        return Wt(a, e, l), nd(a, t, l), !0;
    }
    return !1;
  }
  function Jr(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: zc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, as(e)) {
      if (t) throw Error(r(479));
    } else
      t = cr(
        e,
        a,
        l,
        2
      ), t !== null && Wt(t, e, 2);
  }
  function as(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me;
  }
  function ld(e, t) {
    Qn = Fu = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function nd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Eu(e, a);
    }
  }
  var Ji = {
    readContext: Tt,
    use: _u,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useLayoutEffect: $e,
    useInsertionEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useSyncExternalStore: $e,
    useId: $e,
    useHostTransitionStatus: $e,
    useFormState: $e,
    useActionState: $e,
    useOptimistic: $e,
    useMemoCache: $e,
    useCacheRefresh: $e
  };
  Ji.useEffectEvent = $e;
  var id = {
    readContext: Tt,
    use: _u,
    useCallback: function(e, t) {
      return Lt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Tt,
    useEffect: Gf,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, es(
        4194308,
        4,
        Jf.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return es(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      es(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Lt();
      t = t === void 0 ? null : t;
      var l = e();
      if (gn) {
        ra(!0);
        try {
          e();
        } finally {
          ra(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = Lt();
      if (a !== void 0) {
        var n = a(t);
        if (gn) {
          ra(!0);
          try {
            a(t);
          } finally {
            ra(!1);
          }
        }
      } else n = t;
      return l.memoizedState = l.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, l.queue = e, e = e.dispatch = Xm.bind(
        null,
        me,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Lt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Yr(e);
      var t = e.queue, a = ad.bind(null, me, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Gr,
    useDeferredValue: function(e, t) {
      var a = Lt();
      return Zr(a, e, t);
    },
    useTransition: function() {
      var e = Yr(!1);
      return e = Pf.bind(
        null,
        me,
        e.queue,
        !0,
        !1
      ), Lt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = me, n = Lt();
      if (Ae) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), Ve === null)
          throw Error(r(349));
        (xe & 127) !== 0 || Mf(l, t, a);
      }
      n.memoizedState = a;
      var i = { value: a, getSnapshot: t };
      return n.queue = i, Gf(Nf.bind(null, l, i, e), [
        e
      ]), l.flags |= 2048, Fn(
        9,
        { destroy: void 0 },
        Tf.bind(
          null,
          l,
          i,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Lt(), t = Ve.identifierPrefix;
      if (Ae) {
        var a = Da, l = Oa;
        a = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Iu++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Bm++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Kr,
    useFormState: Bf,
    useActionState: Bf,
    useOptimistic: function(e) {
      var t = Lt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Jr.bind(
        null,
        me,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Rr,
    useCacheRefresh: function() {
      return Lt().memoizedState = Zm.bind(
        null,
        me
      );
    },
    useEffectEvent: function(e) {
      var t = Lt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Ce & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Qr = {
    readContext: Tt,
    use: _u,
    useCallback: Wf,
    useContext: Tt,
    useEffect: Vr,
    useImperativeHandle: Qf,
    useInsertionEffect: Xf,
    useLayoutEffect: Kf,
    useMemo: Ff,
    useReducer: $u,
    useRef: Vf,
    useState: function() {
      return $u(tl);
    },
    useDebugValue: Gr,
    useDeferredValue: function(e, t) {
      var a = ut();
      return If(
        a,
        Be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = $u(tl)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Xi(e),
        t
      ];
    },
    useSyncExternalStore: wf,
    useId: ed,
    useHostTransitionStatus: Kr,
    useFormState: Lf,
    useActionState: Lf,
    useOptimistic: function(e, t) {
      var a = ut();
      return qf(a, Be, e, t);
    },
    useMemoCache: Rr,
    useCacheRefresh: td
  };
  Qr.useEffectEvent = Zf;
  var ud = {
    readContext: Tt,
    use: _u,
    useCallback: Wf,
    useContext: Tt,
    useEffect: Vr,
    useImperativeHandle: Qf,
    useInsertionEffect: Xf,
    useLayoutEffect: Kf,
    useMemo: Ff,
    useReducer: Lr,
    useRef: Vf,
    useState: function() {
      return Lr(tl);
    },
    useDebugValue: Gr,
    useDeferredValue: function(e, t) {
      var a = ut();
      return Be === null ? Zr(a, e, t) : If(
        a,
        Be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Lr(tl)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Xi(e),
        t
      ];
    },
    useSyncExternalStore: wf,
    useId: ed,
    useHostTransitionStatus: Kr,
    useFormState: Hf,
    useActionState: Hf,
    useOptimistic: function(e, t) {
      var a = ut();
      return Be !== null ? qf(a, Be, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Rr,
    useCacheRefresh: td
  };
  ud.useEffectEvent = Zf;
  function Wr(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : C({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Fr = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = aa(), n = Nl(l);
      n.payload = t, a != null && (n.callback = a), t = Cl(e, n, l), t !== null && (Wt(t, e, l), Hi(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = aa(), n = Nl(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Cl(e, n, l), t !== null && (Wt(t, e, l), Hi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = aa(), l = Nl(a);
      l.tag = 2, t != null && (l.callback = t), t = Cl(e, l, a), t !== null && (Wt(t, e, a), Hi(t, e, a));
    }
  };
  function sd(e, t, a, l, n, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ui(a, l) || !Ui(n, i) : !0;
  }
  function rd(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Fr.enqueueReplaceState(t, t.state, null);
  }
  function yn(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = C({}, a));
      for (var n in e)
        a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  function cd(e) {
    Ou(e);
  }
  function od(e) {
    console.error(e);
  }
  function fd(e) {
    Ou(e);
  }
  function ls(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function dd(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ir(e, t, a) {
    return a = Nl(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      ls(e, t);
    }, a;
  }
  function hd(e) {
    return e = Nl(e), e.tag = 3, e;
  }
  function md(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        dd(t, a, l);
      };
    }
    var s = a.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      dd(t, a, l), typeof n != "function" && (Dl === null ? Dl = /* @__PURE__ */ new Set([this]) : Dl.add(this));
      var d = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Km(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Vn(
        t,
        a,
        n,
        !0
      ), a = _t.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return va === null ? ps() : a.alternate === null && et === 0 && (et = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Xu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Sc(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Xu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Sc(e, l, n)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return Sc(e, l, n), ps(), !1;
    }
    if (Ae)
      return t = _t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== pr && (e = Error(r(422), { cause: l }), Di(da(e, a)))) : (l !== pr && (t = Error(r(423), {
        cause: l
      }), Di(
        da(t, a)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = da(l, a), n = Ir(
        e.stateNode,
        l,
        n
      ), Mr(e, n), et !== 4 && (et = 2)), !1;
    var i = Error(r(520), { cause: l });
    if (i = da(i, a), eu === null ? eu = [i] : eu.push(i), et !== 4 && (et = 2), t === null) return !0;
    l = da(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = Ir(a.stateNode, l, e), Mr(a, e), !1;
        case 1:
          if (t = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Dl === null || !Dl.has(i))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = hd(n), md(
              n,
              e,
              a,
              l
            ), Mr(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Pr = Error(r(461)), ft = !1;
  function Nt(e, t, a, l) {
    t.child = e === null ? yf(t, null, a, l) : vn(
      t,
      e.child,
      a,
      l
    );
  }
  function pd(e, t, a, l, n) {
    a = a.render;
    var i = t.ref;
    if ("ref" in l) {
      var s = {};
      for (var d in l)
        d !== "ref" && (s[d] = l[d]);
    } else s = l;
    return dn(t), l = Ur(
      e,
      t,
      a,
      s,
      i,
      n
    ), d = kr(), e !== null && !ft ? (Or(e, t, n), al(e, t, n)) : (Ae && d && hr(t), t.flags |= 1, Nt(e, t, l, n), t.child);
  }
  function vd(e, t, a, l, n) {
    if (e === null) {
      var i = a.type;
      return typeof i == "function" && !or(i) && i.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = i, gd(
        e,
        t,
        i,
        l,
        n
      )) : (e = Lu(
        a.type,
        null,
        l,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !ic(e, n)) {
      var s = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ui, a(s, l) && e.ref === t.ref)
        return al(e, t, n);
    }
    return t.flags |= 1, e = Ia(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function gd(e, t, a, l, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Ui(i, l) && e.ref === t.ref)
        if (ft = !1, t.pendingProps = l = i, ic(e, n))
          (e.flags & 131072) !== 0 && (ft = !0);
        else
          return t.lanes = e.lanes, al(e, t, n);
    }
    return _r(
      e,
      t,
      a,
      l,
      n
    );
  }
  function yd(e, t, a, l) {
    var n = l.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~i;
        } else l = 0, t.child = null;
        return bd(
          e,
          t,
          i,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Gu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Sf(t, i) : Nr(), Ef(t);
      else
        return l = t.lanes = 536870912, bd(
          e,
          t,
          i !== null ? i.baseLanes | a : a,
          a,
          l
        );
    } else
      i !== null ? (Gu(t, i.cachePool), Sf(t, i), ql(), t.memoizedState = null) : (e !== null && Gu(t, null), Nr(), ql());
    return Nt(e, t, n, a), t.child;
  }
  function Qi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function bd(e, t, a, l, n) {
    var i = Er();
    return i = i === null ? null : { parent: ct._currentValue, pool: i }, t.memoizedState = {
      baseLanes: a,
      cachePool: i
    }, e !== null && Gu(t, null), Nr(), Ef(t), e !== null && Vn(e, t, l, !0), t.childLanes = n, null;
  }
  function ns(e, t) {
    return t = us(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function xd(e, t, a) {
    return vn(t, e.child, null, a), e = ns(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Jm(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (l.mode === "hidden")
          return e = ns(t, l), t.lanes = 536870912, Qi(null, e);
        if (jr(t), (e = Ke) ? (e = U0(
          e,
          pa
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Al !== null ? { id: Oa, overflow: Da } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = af(e), a.return = t, t.child = a, Mt = t, Ke = null)) : e = null, e === null) throw wl(t);
        return t.lanes = 536870912, null;
      }
      return ns(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (jr(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = xd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (ft || Vn(e, t, a, !1), n = (a & e.childLanes) !== 0, ft || n) {
        if (l = Ve, l !== null && (s = hl(l, a), s !== 0 && s !== i.retryLane))
          throw i.retryLane = s, rn(e, s), Wt(l, e, s), Pr;
        ps(), t = xd(
          e,
          t,
          a
        );
      } else
        e = i.treeContext, Ke = ga(s.nextSibling), Mt = t, Ae = !0, zl = null, pa = !1, e !== null && uf(t, e), t = ns(t, l), t.flags |= 4096;
      return t;
    }
    return e = Ia(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function is(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function _r(e, t, a, l, n) {
    return dn(t), a = Ur(
      e,
      t,
      a,
      l,
      void 0,
      n
    ), l = kr(), e !== null && !ft ? (Or(e, t, n), al(e, t, n)) : (Ae && l && hr(t), t.flags |= 1, Nt(e, t, a, n), t.child);
  }
  function Sd(e, t, a, l, n, i) {
    return dn(t), t.updateQueue = null, a = zf(
      t,
      l,
      a,
      n
    ), Af(e), l = kr(), e !== null && !ft ? (Or(e, t, i), al(e, t, i)) : (Ae && l && hr(t), t.flags |= 1, Nt(e, t, a, i), t.child);
  }
  function Ed(e, t, a, l, n) {
    if (dn(t), t.stateNode === null) {
      var i = Bn, s = a.contextType;
      typeof s == "object" && s !== null && (i = Tt(s)), i = new a(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Fr, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, zr(t), s = a.contextType, i.context = typeof s == "object" && s !== null ? Tt(s) : Bn, i.state = t.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (Wr(
        t,
        a,
        s,
        l
      ), i.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Fr.enqueueReplaceState(i, i.state, null), Gi(t, l, i, n), Vi(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps, g = yn(a, d);
      i.props = g;
      var T = i.context, R = a.contextType;
      s = Bn, typeof R == "object" && R !== null && (s = Tt(R));
      var Y = a.getDerivedStateFromProps;
      R = typeof Y == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, R || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || T !== s) && rd(
        t,
        i,
        l,
        s
      ), Tl = !1;
      var N = t.memoizedState;
      i.state = N, Gi(t, l, i, n), Vi(), T = t.memoizedState, d || N !== T || Tl ? (typeof Y == "function" && (Wr(
        t,
        a,
        Y,
        l
      ), T = t.memoizedState), (g = Tl || sd(
        t,
        a,
        g,
        l,
        N,
        T,
        s
      )) ? (R || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), i.props = l, i.state = T, i.context = s, l = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      i = t.stateNode, wr(e, t), s = t.memoizedProps, R = yn(a, s), i.props = R, Y = t.pendingProps, N = i.context, T = a.contextType, g = Bn, typeof T == "object" && T !== null && (g = Tt(T)), d = a.getDerivedStateFromProps, (T = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== Y || N !== g) && rd(
        t,
        i,
        l,
        g
      ), Tl = !1, N = t.memoizedState, i.state = N, Gi(t, l, i, n), Vi();
      var q = t.memoizedState;
      s !== Y || N !== q || Tl || e !== null && e.dependencies !== null && Hu(e.dependencies) ? (typeof d == "function" && (Wr(
        t,
        a,
        d,
        l
      ), q = t.memoizedState), (R = Tl || sd(
        t,
        a,
        R,
        l,
        N,
        q,
        g
      ) || e !== null && e.dependencies !== null && Hu(e.dependencies)) ? (T || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, q, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        q,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = q), i.props = l, i.state = q, i.context = g, l = R) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return i = l, is(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = vn(
      t,
      e.child,
      null,
      n
    ), t.child = vn(
      t,
      null,
      a,
      n
    )) : Nt(e, t, a, n), t.memoizedState = i.state, e = t.child) : e = al(
      e,
      t,
      n
    ), e;
  }
  function Ad(e, t, a, l) {
    return on(), t.flags |= 256, Nt(e, t, a, l), t.child;
  }
  var $r = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ec(e) {
    return { baseLanes: e, cachePool: df() };
  }
  function tc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= ta), e;
  }
  function zd(e, t, a) {
    var l = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (it.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (n ? jl(t) : ql(), (e = Ke) ? (e = U0(
          e,
          pa
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Al !== null ? { id: Oa, overflow: Da } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = af(e), a.return = t, t.child = a, Mt = t, Ke = null)) : e = null, e === null) throw wl(t);
        return Bc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = l.children;
      return l = l.fallback, n ? (ql(), n = t.mode, d = us(
        { mode: "hidden", children: d },
        n
      ), l = cn(
        l,
        n,
        a,
        null
      ), d.return = t, l.return = t, d.sibling = l, t.child = d, l = t.child, l.memoizedState = ec(a), l.childLanes = tc(
        e,
        s,
        a
      ), t.memoizedState = $r, Qi(null, l)) : (jl(t), ac(t, d));
    }
    var g = e.memoizedState;
    if (g !== null && (d = g.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (jl(t), t.flags &= -257, t = lc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (ql(), t.child = e.child, t.flags |= 128, t = null) : (ql(), d = l.fallback, n = t.mode, l = us(
          { mode: "visible", children: l.children },
          n
        ), d = cn(
          d,
          n,
          a,
          null
        ), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, vn(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = ec(a), l.childLanes = tc(
          e,
          s,
          a
        ), t.memoizedState = $r, t = Qi(null, l));
      else if (jl(t), Bc(d)) {
        if (s = d.nextSibling && d.nextSibling.dataset, s) var T = s.dgst;
        s = T, l = Error(r(419)), l.stack = "", l.digest = s, Di({ value: l, source: null, stack: null }), t = lc(
          e,
          t,
          a
        );
      } else if (ft || Vn(e, t, a, !1), s = (a & e.childLanes) !== 0, ft || s) {
        if (s = Ve, s !== null && (l = hl(s, a), l !== 0 && l !== g.retryLane))
          throw g.retryLane = l, rn(e, l), Wt(s, e, l), Pr;
        Rc(d) || ps(), t = lc(
          e,
          t,
          a
        );
      } else
        Rc(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Ke = ga(
          d.nextSibling
        ), Mt = t, Ae = !0, zl = null, pa = !1, e !== null && uf(t, e), t = ac(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (ql(), d = l.fallback, n = t.mode, g = e.child, T = g.sibling, l = Ia(g, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = g.subtreeFlags & 65011712, T !== null ? d = Ia(
      T,
      d
    ) : (d = cn(
      d,
      n,
      a,
      null
    ), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, Qi(null, l), l = t.child, d = e.child.memoizedState, d === null ? d = ec(a) : (n = d.cachePool, n !== null ? (g = ct._currentValue, n = n.parent !== g ? { parent: g, pool: g } : n) : n = df(), d = {
      baseLanes: d.baseLanes | a,
      cachePool: n
    }), l.memoizedState = d, l.childLanes = tc(
      e,
      s,
      a
    ), t.memoizedState = $r, Qi(e.child, l)) : (jl(t), a = e.child, e = a.sibling, a = Ia(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ac(e, t) {
    return t = us(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function us(e, t) {
    return e = Pt(22, e, null, t), e.lanes = 0, e;
  }
  function lc(e, t, a) {
    return vn(t, e.child, null, a), e = ac(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function wd(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), yr(e.return, t, a);
  }
  function nc(e, t, a, l, n, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = a, s.tailMode = n, s.treeForkCount = i);
  }
  function Md(e, t, a) {
    var l = t.pendingProps, n = l.revealOrder, i = l.tail;
    l = l.children;
    var s = it.current, d = (s & 2) !== 0;
    if (d ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, J(it, s), Nt(e, t, l, a), l = Ae ? Oi : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && wd(e, a, t);
        else if (e.tag === 19)
          wd(e, a, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (n) {
      case "forwards":
        for (a = t.child, n = null; a !== null; )
          e = a.alternate, e !== null && Wu(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), nc(
          t,
          !1,
          n,
          a,
          i,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Wu(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        nc(
          t,
          !0,
          a,
          null,
          i,
          l
        );
        break;
      case "together":
        nc(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function al(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Ol |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Vn(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, a = Ia(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Ia(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ic(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Hu(e)));
  }
  function Qm(e, t, a) {
    switch (t.tag) {
      case 3:
        Me(t, t.stateNode.containerInfo), Ml(t, ct, e.memoizedState.cache), on();
        break;
      case 27:
      case 5:
        Yt(t);
        break;
      case 4:
        Me(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ml(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, jr(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (jl(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? zd(e, t, a) : (jl(t), e = al(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        jl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Vn(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), n) {
          if (l)
            return Md(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), J(it, it.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, yd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Ml(t, ct, e.memoizedState.cache);
    }
    return al(e, t, a);
  }
  function Td(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ft = !0;
      else {
        if (!ic(e, a) && (t.flags & 128) === 0)
          return ft = !1, Qm(
            e,
            t,
            a
          );
        ft = (e.flags & 131072) !== 0;
      }
    else
      ft = !1, Ae && (t.flags & 1048576) !== 0 && nf(t, Oi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = mn(t.elementType), t.type = e, typeof e == "function")
            or(e) ? (l = yn(e, l), t.tag = 1, t = Ed(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = _r(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === P) {
                t.tag = 11, t = pd(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (n === ne) {
                t.tag = 14, t = vd(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = De(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return _r(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, n = yn(
          l,
          t.pendingProps
        ), Ed(
          e,
          t,
          l,
          n,
          a
        );
      case 3:
        e: {
          if (Me(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          l = t.pendingProps;
          var i = t.memoizedState;
          n = i.element, wr(e, t), Gi(t, l, null, a);
          var s = t.memoizedState;
          if (l = s.cache, Ml(t, ct, l), l !== i.cache && br(
            t,
            [ct],
            a,
            !0
          ), Vi(), l = s.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Ad(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== n) {
              n = da(
                Error(r(424)),
                t
              ), Di(n), t = Ad(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ke = ga(e.firstChild), Mt = t, Ae = !0, zl = null, pa = !0, a = yf(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (on(), l === n) {
              t = al(
                e,
                t,
                a
              );
              break e;
            }
            Nt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return is(e, t), e === null ? (a = L0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ae || (a = t.type, e = t.pendingProps, l = Es(
          _.current
        ).createElement(a), l[at] = t, l[vt] = e, Ct(l, a, e), lt(l), t.stateNode = l) : t.memoizedState = L0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Yt(t), e === null && Ae && (l = t.stateNode = D0(
          t.type,
          t.pendingProps,
          _.current
        ), Mt = t, pa = !0, n = Ke, Yl(t.type) ? (Lc = n, Ke = ga(l.firstChild)) : Ke = n), Nt(
          e,
          t,
          t.pendingProps.children,
          a
        ), is(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((n = l = Ke) && (l = Ap(
          l,
          t.type,
          t.pendingProps,
          pa
        ), l !== null ? (t.stateNode = l, Mt = t, Ke = ga(l.firstChild), pa = !1, n = !0) : n = !1), n || wl(t)), Yt(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = i.children, kc(n, i) ? l = null : s !== null && kc(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = Ur(
          e,
          t,
          Lm,
          null,
          null,
          a
        ), ru._currentValue = n), is(e, t), Nt(e, t, l, a), t.child;
      case 6:
        return e === null && Ae && ((e = a = Ke) && (a = zp(
          a,
          t.pendingProps,
          pa
        ), a !== null ? (t.stateNode = a, Mt = t, Ke = null, e = !0) : e = !1), e || wl(t)), null;
      case 13:
        return zd(e, t, a);
      case 4:
        return Me(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = vn(
          t,
          null,
          l,
          a
        ) : Nt(e, t, l, a), t.child;
      case 11:
        return pd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Nt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Nt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Nt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Ml(t, t.type, l.value), Nt(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, dn(t), n = Tt(n), l = l(n), t.flags |= 1, Nt(e, t, l, a), t.child;
      case 14:
        return vd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return gd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Md(e, t, a);
      case 31:
        return Jm(e, t, a);
      case 22:
        return yd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return dn(t), l = Tt(ct), e === null ? (n = Er(), n === null && (n = Ve, i = xr(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), t.memoizedState = { parent: l, cache: n }, zr(t), Ml(t, ct, n)) : ((e.lanes & a) !== 0 && (wr(e, t), Gi(t, null, null, a), Vi()), n = e.memoizedState, i = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Ml(t, ct, l)) : (l = i.cache, Ml(t, ct, l), l !== n.cache && br(
          t,
          [ct],
          a,
          !0
        ))), Nt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function ll(e) {
    e.flags |= 4;
  }
  function uc(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (e0()) e.flags |= 8192;
        else
          throw pn = Xu, Ar;
    } else e.flags &= -16777217;
  }
  function Nd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Z0(t))
      if (e0()) e.flags |= 8192;
      else
        throw pn = Xu, Ar;
  }
  function ss(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Va() : 536870912, e.lanes |= t, $n |= t);
  }
  function Wi(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function Wm(e, t, a) {
    var l = t.pendingProps;
    switch (mr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null;
      case 1:
        return Je(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), $a(ct), ze(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Hn(t) ? ll(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vr())), Je(t), null;
      case 26:
        var n = t.type, i = t.memoizedState;
        return e === null ? (ll(t), i !== null ? (Je(t), Nd(t, i)) : (Je(t), uc(
          t,
          n,
          null,
          l,
          a
        ))) : i ? i !== e.memoizedState ? (ll(t), Je(t), Nd(t, i)) : (Je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && ll(t), Je(t), uc(
          t,
          n,
          e,
          l,
          a
        )), null;
      case 27:
        if (Xe(t), a = _.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ll(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Je(t), null;
          }
          e = G.current, Hn(t) ? sf(t) : (e = D0(n, l, a), t.stateNode = e, ll(t));
        }
        return Je(t), null;
      case 5:
        if (Xe(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ll(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Je(t), null;
          }
          if (i = G.current, Hn(t))
            sf(t);
          else {
            var s = Es(
              _.current
            );
            switch (i) {
              case 1:
                i = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? s.createElement(n, { is: l.is }) : s.createElement(n);
                }
            }
            i[at] = t, i[vt] = l;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = i;
            e: switch (Ct(i, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && ll(t);
          }
        }
        return Je(t), uc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && ll(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = _.current, Hn(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = Mt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            e[at] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || z0(e.nodeValue, a)), e || wl(t, !0);
          } else
            e = Es(e).createTextNode(
              l
            ), e[at] = t, t.stateNode = e;
        }
        return Je(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Hn(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[at] = t;
            } else
              on(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), e = !1;
          } else
            a = vr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Je(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Hn(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[at] = t;
            } else
              on(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), n = !1;
          } else
            n = vr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return $t(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ss(t, t.updateQueue), Je(t), null);
      case 4:
        return ze(), e === null && Nc(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return $a(t.type), Je(t), null;
      case 19:
        if (j(it), l = t.memoizedState, l === null) return Je(t), null;
        if (n = (t.flags & 128) !== 0, i = l.rendering, i === null)
          if (n) Wi(l, !1);
          else {
            if (et !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Wu(e), i !== null) {
                  for (t.flags |= 128, Wi(l, !1), e = i.updateQueue, t.updateQueue = e, ss(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    tf(a, e), a = a.sibling;
                  return J(
                    it,
                    it.current & 1 | 2
                  ), Ae && Pa(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && qe() > ds && (t.flags |= 128, n = !0, Wi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Wu(i), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, ss(t, e), Wi(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Ae)
                return Je(t), null;
            } else
              2 * qe() - l.renderingStartTime > ds && a !== 536870912 && (t.flags |= 128, n = !0, Wi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = qe(), e.sibling = null, a = it.current, J(
          it,
          n ? a & 1 | 2 : a & 1
        ), Ae && Pa(t, l.treeForkCount), e) : (Je(t), null);
      case 22:
      case 23:
        return $t(t), Cr(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), a = t.updateQueue, a !== null && ss(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && j(hn), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), $a(ct), Je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Fm(e, t) {
    switch (mr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return $a(ct), ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Xe(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ($t(t), t.alternate === null)
            throw Error(r(340));
          on();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          on();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return j(it), null;
      case 4:
        return ze(), null;
      case 10:
        return $a(t.type), null;
      case 22:
      case 23:
        return $t(t), Cr(), e !== null && j(hn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return $a(ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cd(e, t) {
    switch (mr(t), t.tag) {
      case 3:
        $a(ct), ze();
        break;
      case 26:
      case 27:
      case 5:
        Xe(t);
        break;
      case 4:
        ze();
        break;
      case 31:
        t.memoizedState !== null && $t(t);
        break;
      case 13:
        $t(t);
        break;
      case 19:
        j(it);
        break;
      case 10:
        $a(t.type);
        break;
      case 22:
      case 23:
        $t(t), Cr(), e !== null && j(hn);
        break;
      case 24:
        $a(ct);
    }
  }
  function Fi(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var i = a.create, s = a.inst;
            l = i(), s.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (d) {
      Oe(t, t.return, d);
    }
  }
  function Ul(e, t, a) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var s = l.inst, d = s.destroy;
            if (d !== void 0) {
              s.destroy = void 0, n = t;
              var g = a, T = d;
              try {
                T();
              } catch (R) {
                Oe(
                  n,
                  g,
                  R
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (R) {
      Oe(t, t.return, R);
    }
  }
  function jd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        xf(t, a);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function qd(e, t, a) {
    a.props = yn(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Oe(e, t, l);
    }
  }
  function Ii(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      Oe(e, t, n);
    }
  }
  function Ra(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          Oe(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          Oe(e, t, n);
        }
      else a.current = null;
  }
  function Ud(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      Oe(e, e.return, n);
    }
  }
  function sc(e, t, a) {
    try {
      var l = e.stateNode;
      gp(l, e.type, a, t), l[vt] = t;
    } catch (n) {
      Oe(e, e.return, n);
    }
  }
  function kd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Yl(e.type) || e.tag === 4;
  }
  function rc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || kd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Yl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cc(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = za));
    else if (l !== 4 && (l === 27 && Yl(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (cc(e, t, a), e = e.sibling; e !== null; )
        cc(e, t, a), e = e.sibling;
  }
  function rs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Yl(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (rs(e, t, a), e = e.sibling; e !== null; )
        rs(e, t, a), e = e.sibling;
  }
  function Od(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Ct(t, l, a), t[at] = e, t[vt] = a;
    } catch (i) {
      Oe(e, e.return, i);
    }
  }
  var nl = !1, dt = !1, oc = !1, Dd = typeof WeakSet == "function" ? WeakSet : Set, yt = null;
  function Im(e, t) {
    if (e = e.containerInfo, qc = Cs, e = Jo(e), lr(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break e;
            }
            var s = 0, d = -1, g = -1, T = 0, R = 0, Y = e, N = null;
            t: for (; ; ) {
              for (var q; Y !== a || n !== 0 && Y.nodeType !== 3 || (d = s + n), Y !== i || l !== 0 && Y.nodeType !== 3 || (g = s + l), Y.nodeType === 3 && (s += Y.nodeValue.length), (q = Y.firstChild) !== null; )
                N = Y, Y = q;
              for (; ; ) {
                if (Y === e) break t;
                if (N === a && ++T === n && (d = s), N === i && ++R === l && (g = s), (q = Y.nextSibling) !== null) break;
                Y = N, N = Y.parentNode;
              }
              Y = q;
            }
            a = d === -1 || g === -1 ? null : { start: d, end: g };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Uc = { focusedElem: e, selectionRange: a }, Cs = !1, yt = t; yt !== null; )
      if (t = yt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, yt = e;
      else
        for (; yt !== null; ) {
          switch (t = yt, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  n = e[a], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, a = t, n = i.memoizedProps, i = i.memoizedState, l = a.stateNode;
                try {
                  var te = yn(
                    a.type,
                    n
                  );
                  e = l.getSnapshotBeforeUpdate(
                    te,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (se) {
                  Oe(
                    a,
                    a.return,
                    se
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Dc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Dc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, yt = e;
            break;
          }
          yt = t.return;
        }
  }
  function Rd(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ul(e, a), l & 4 && Fi(5, a);
        break;
      case 1:
        if (ul(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Oe(a, a.return, s);
            }
          else {
            var n = yn(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Oe(
                a,
                a.return,
                s
              );
            }
          }
        l & 64 && jd(a), l & 512 && Ii(a, a.return);
        break;
      case 3:
        if (ul(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            xf(e, t);
          } catch (s) {
            Oe(a, a.return, s);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Od(a);
      case 26:
      case 5:
        ul(e, a), t === null && l & 4 && Ud(a), l & 512 && Ii(a, a.return);
        break;
      case 12:
        ul(e, a);
        break;
      case 31:
        ul(e, a), l & 4 && Yd(e, a);
        break;
      case 13:
        ul(e, a), l & 4 && Hd(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = ip.bind(
          null,
          a
        ), wp(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || nl, !l) {
          t = t !== null && t.memoizedState !== null || dt, n = nl;
          var i = dt;
          nl = l, (dt = t) && !i ? sl(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : ul(e, a), nl = n, dt = i;
        }
        break;
      case 30:
        break;
      default:
        ul(e, a);
    }
  }
  function Bd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Bd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ua(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, Xt = !1;
  function il(e, t, a) {
    for (a = a.child; a !== null; )
      Ld(e, t, a), a = a.sibling;
  }
  function Ld(e, t, a) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(fl, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        dt || Ra(a, t), il(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        dt || Ra(a, t);
        var l = Fe, n = Xt;
        Yl(a.type) && (Fe = a.stateNode, Xt = !1), il(
          e,
          t,
          a
        ), iu(a.stateNode), Fe = l, Xt = n;
        break;
      case 5:
        dt || Ra(a, t);
      case 6:
        if (l = Fe, n = Xt, Fe = null, il(
          e,
          t,
          a
        ), Fe = l, Xt = n, Fe !== null)
          if (Xt)
            try {
              (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(a.stateNode);
            } catch (i) {
              Oe(
                a,
                t,
                i
              );
            }
          else
            try {
              Fe.removeChild(a.stateNode);
            } catch (i) {
              Oe(
                a,
                t,
                i
              );
            }
        break;
      case 18:
        Fe !== null && (Xt ? (e = Fe, j0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), si(e)) : j0(Fe, a.stateNode));
        break;
      case 4:
        l = Fe, n = Xt, Fe = a.stateNode.containerInfo, Xt = !0, il(
          e,
          t,
          a
        ), Fe = l, Xt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ul(2, a, t), dt || Ul(4, a, t), il(
          e,
          t,
          a
        );
        break;
      case 1:
        dt || (Ra(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && qd(
          a,
          t,
          l
        )), il(
          e,
          t,
          a
        );
        break;
      case 21:
        il(
          e,
          t,
          a
        );
        break;
      case 22:
        dt = (l = dt) || a.memoizedState !== null, il(
          e,
          t,
          a
        ), dt = l;
        break;
      default:
        il(
          e,
          t,
          a
        );
    }
  }
  function Yd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        si(e);
      } catch (a) {
        Oe(t, t.return, a);
      }
    }
  }
  function Hd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        si(e);
      } catch (a) {
        Oe(t, t.return, a);
      }
  }
  function Pm(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Dd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Dd()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function cs(e, t) {
    var a = Pm(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = up.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function Kt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], i = e, s = t, d = s;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Yl(d.type)) {
                Fe = d.stateNode, Xt = !1;
                break e;
              }
              break;
            case 5:
              Fe = d.stateNode, Xt = !1;
              break e;
            case 3:
            case 4:
              Fe = d.stateNode.containerInfo, Xt = !0;
              break e;
          }
          d = d.return;
        }
        if (Fe === null) throw Error(r(160));
        Ld(i, s, n), Fe = null, Xt = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Vd(t, e), t = t.sibling;
  }
  var Na = null;
  function Vd(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Kt(t, e), Jt(e), l & 4 && (Ul(3, e, e.return), Fi(3, e), Ul(5, e, e.return));
        break;
      case 1:
        Kt(t, e), Jt(e), l & 512 && (dt || a === null || Ra(a, a.return)), l & 64 && nl && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Na;
        if (Kt(t, e), Jt(e), l & 512 && (dt || a === null || Ra(a, a.return)), l & 4) {
          var i = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (l) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[_l] || i[at] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Ct(i, l, a), i[at] = e, lt(i), l = i;
                      break e;
                    case "link":
                      var s = V0(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (s) {
                        for (var d = 0; d < s.length; d++)
                          if (i = s[d], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      i = n.createElement(l), Ct(i, l, a), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (s = V0(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (d = 0; d < s.length; d++)
                          if (i = s[d], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      i = n.createElement(l), Ct(i, l, a), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  i[at] = e, lt(i), l = i;
                }
                e.stateNode = l;
              } else
                G0(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = H0(
                n,
                l,
                e.memoizedProps
              );
          else
            i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? G0(
              n,
              e.type,
              e.stateNode
            ) : H0(
              n,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && sc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Kt(t, e), Jt(e), l & 512 && (dt || a === null || Ra(a, a.return)), a !== null && l & 4 && sc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Kt(t, e), Jt(e), l & 512 && (dt || a === null || Ra(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            gl(n, "");
          } catch (te) {
            Oe(e, e.return, te);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, sc(
          e,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (oc = !0);
        break;
      case 6:
        if (Kt(t, e), Jt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (te) {
            Oe(e, e.return, te);
          }
        }
        break;
      case 3:
        if (ws = null, n = Na, Na = As(t.containerInfo), Kt(t, e), Na = n, Jt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            si(t.containerInfo);
          } catch (te) {
            Oe(e, e.return, te);
          }
        oc && (oc = !1, Gd(e));
        break;
      case 4:
        l = Na, Na = As(
          e.stateNode.containerInfo
        ), Kt(t, e), Jt(e), Na = l;
        break;
      case 12:
        Kt(t, e), Jt(e);
        break;
      case 31:
        Kt(t, e), Jt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cs(e, l)));
        break;
      case 13:
        Kt(t, e), Jt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (fs = qe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cs(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var g = a !== null && a.memoizedState !== null, T = nl, R = dt;
        if (nl = T || n, dt = R || g, Kt(t, e), dt = R, nl = T, Jt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || g || nl || dt || bn(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                g = a = t;
                try {
                  if (i = g.stateNode, n)
                    s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    d = g.stateNode;
                    var Y = g.memoizedProps.style, N = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    d.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (te) {
                  Oe(g, g.return, te);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = n ? "" : g.memoizedProps;
                } catch (te) {
                  Oe(g, g.return, te);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                g = t;
                try {
                  var q = g.stateNode;
                  n ? q0(q, !0) : q0(g.stateNode, !1);
                } catch (te) {
                  Oe(g, g.return, te);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, cs(e, a))));
        break;
      case 19:
        Kt(t, e), Jt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cs(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Kt(t, e), Jt(e);
    }
  }
  function Jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (kd(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, i = rc(e);
            rs(e, i, n);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (gl(s, ""), a.flags &= -33);
            var d = rc(e);
            rs(e, d, s);
            break;
          case 3:
          case 4:
            var g = a.stateNode.containerInfo, T = rc(e);
            cc(
              e,
              T,
              g
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        Oe(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Gd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Gd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ul(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Rd(e, t.alternate, t), t = t.sibling;
  }
  function bn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ul(4, t, t.return), bn(t);
          break;
        case 1:
          Ra(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && qd(
            t,
            t.return,
            a
          ), bn(t);
          break;
        case 27:
          iu(t.stateNode);
        case 26:
        case 5:
          Ra(t, t.return), bn(t);
          break;
        case 22:
          t.memoizedState === null && bn(t);
          break;
        case 30:
          bn(t);
          break;
        default:
          bn(t);
      }
      e = e.sibling;
    }
  }
  function sl(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, i = t, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          sl(
            n,
            i,
            a
          ), Fi(4, i);
          break;
        case 1:
          if (sl(
            n,
            i,
            a
          ), l = i, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (T) {
              Oe(l, l.return, T);
            }
          if (l = i, n = l.updateQueue, n !== null) {
            var d = l.stateNode;
            try {
              var g = n.shared.hiddenCallbacks;
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  bf(g[n], d);
            } catch (T) {
              Oe(l, l.return, T);
            }
          }
          a && s & 64 && jd(i), Ii(i, i.return);
          break;
        case 27:
          Od(i);
        case 26:
        case 5:
          sl(
            n,
            i,
            a
          ), a && l === null && s & 4 && Ud(i), Ii(i, i.return);
          break;
        case 12:
          sl(
            n,
            i,
            a
          );
          break;
        case 31:
          sl(
            n,
            i,
            a
          ), a && s & 4 && Yd(n, i);
          break;
        case 13:
          sl(
            n,
            i,
            a
          ), a && s & 4 && Hd(n, i);
          break;
        case 22:
          i.memoizedState === null && sl(
            n,
            i,
            a
          ), Ii(i, i.return);
          break;
        case 30:
          break;
        default:
          sl(
            n,
            i,
            a
          );
      }
      t = t.sibling;
    }
  }
  function fc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ri(a));
  }
  function dc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ri(e));
  }
  function Ca(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zd(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Zd(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ca(
          e,
          t,
          a,
          l
        ), n & 2048 && Fi(9, t);
        break;
      case 1:
        Ca(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Ca(
          e,
          t,
          a,
          l
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ri(e)));
        break;
      case 12:
        if (n & 2048) {
          Ca(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, s = i.id, d = i.onPostCommit;
            typeof d == "function" && d(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Oe(t, t.return, g);
          }
        } else
          Ca(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Ca(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Ca(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Ca(
          e,
          t,
          a,
          l
        ) : Pi(e, t) : i._visibility & 2 ? Ca(
          e,
          t,
          a,
          l
        ) : (i._visibility |= 2, In(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && fc(s, t);
        break;
      case 24:
        Ca(
          e,
          t,
          a,
          l
        ), n & 2048 && dc(t.alternate, t);
        break;
      default:
        Ca(
          e,
          t,
          a,
          l
        );
    }
  }
  function In(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, s = t, d = a, g = l, T = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          In(
            i,
            s,
            d,
            g,
            n
          ), Fi(8, s);
          break;
        case 23:
          break;
        case 22:
          var R = s.stateNode;
          s.memoizedState !== null ? R._visibility & 2 ? In(
            i,
            s,
            d,
            g,
            n
          ) : Pi(
            i,
            s
          ) : (R._visibility |= 2, In(
            i,
            s,
            d,
            g,
            n
          )), n && T & 2048 && fc(
            s.alternate,
            s
          );
          break;
        case 24:
          In(
            i,
            s,
            d,
            g,
            n
          ), n && T & 2048 && dc(s.alternate, s);
          break;
        default:
          In(
            i,
            s,
            d,
            g,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Pi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, n = l.flags;
        switch (l.tag) {
          case 22:
            Pi(a, l), n & 2048 && fc(
              l.alternate,
              l
            );
            break;
          case 24:
            Pi(a, l), n & 2048 && dc(l.alternate, l);
            break;
          default:
            Pi(a, l);
        }
        t = t.sibling;
      }
  }
  var _i = 8192;
  function Pn(e, t, a) {
    if (e.subtreeFlags & _i)
      for (e = e.child; e !== null; )
        Xd(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Xd(e, t, a) {
    switch (e.tag) {
      case 26:
        Pn(
          e,
          t,
          a
        ), e.flags & _i && e.memoizedState !== null && Bp(
          a,
          Na,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Pn(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Na;
        Na = As(e.stateNode.containerInfo), Pn(
          e,
          t,
          a
        ), Na = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = _i, _i = 16777216, Pn(
          e,
          t,
          a
        ), _i = l) : Pn(
          e,
          t,
          a
        ));
        break;
      default:
        Pn(
          e,
          t,
          a
        );
    }
  }
  function Kd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function $i(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          yt = l, Qd(
            l,
            e
          );
        }
      Kd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Jd(e), e = e.sibling;
  }
  function Jd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        $i(e), e.flags & 2048 && Ul(9, e, e.return);
        break;
      case 3:
        $i(e);
        break;
      case 12:
        $i(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, os(e)) : $i(e);
        break;
      default:
        $i(e);
    }
  }
  function os(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          yt = l, Qd(
            l,
            e
          );
        }
      Kd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ul(8, t, t.return), os(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, os(t));
          break;
        default:
          os(t);
      }
      e = e.sibling;
    }
  }
  function Qd(e, t) {
    for (; yt !== null; ) {
      var a = yt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ul(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ri(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, yt = l;
      else
        e: for (a = e; yt !== null; ) {
          l = yt;
          var n = l.sibling, i = l.return;
          if (Bd(l), l === a) {
            yt = null;
            break e;
          }
          if (n !== null) {
            n.return = i, yt = n;
            break e;
          }
          yt = i;
        }
    }
  }
  var _m = {
    getCacheForType: function(e) {
      var t = Tt(ct), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return Tt(ct).controller.signal;
    }
  }, $m = typeof WeakMap == "function" ? WeakMap : Map, Ce = 0, Ve = null, ge = null, xe = 0, ke = 0, ea = null, kl = !1, _n = !1, hc = !1, rl = 0, et = 0, Ol = 0, xn = 0, mc = 0, ta = 0, $n = 0, eu = null, Qt = null, pc = !1, fs = 0, Wd = 0, ds = 1 / 0, hs = null, Dl = null, mt = 0, Rl = null, ei = null, cl = 0, vc = 0, gc = null, Fd = null, tu = 0, yc = null;
  function aa() {
    return (Ce & 2) !== 0 && xe !== 0 ? xe & -xe : E.T !== null ? zc() : yi();
  }
  function Id() {
    if (ta === 0)
      if ((xe & 536870912) === 0 || Ae) {
        var e = ja;
        ja <<= 1, (ja & 3932160) === 0 && (ja = 262144), ta = e;
      } else ta = 536870912;
    return e = _t.current, e !== null && (e.flags |= 32), ta;
  }
  function Wt(e, t, a) {
    (e === Ve && (ke === 2 || ke === 9) || e.cancelPendingCommit !== null) && (ti(e, 0), Bl(
      e,
      xe,
      ta,
      !1
    )), Pl(e, a), ((Ce & 2) === 0 || e !== Ve) && (e === Ve && ((Ce & 2) === 0 && (xn |= a), et === 4 && Bl(
      e,
      xe,
      ta,
      !1
    )), Ba(e));
  }
  function Pd(e, t, a) {
    if ((Ce & 6) !== 0) throw Error(r(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ea(e, t), n = l ? ap(e, t) : xc(e, t, !0), i = l;
    do {
      if (n === 0) {
        _n && !l && Bl(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, i && !ep(a)) {
          n = xc(e, t, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var d = e;
              n = eu;
              var g = d.current.memoizedState.isDehydrated;
              if (g && (ti(d, s).flags |= 256), s = xc(
                d,
                s,
                !1
              ), s !== 2) {
                if (hc && !g) {
                  d.errorRecoveryDisabledLanes |= i, xn |= i, n = 4;
                  break e;
                }
                i = Qt, Qt = n, i !== null && (Qt === null ? Qt = i : Qt.push.apply(
                  Qt,
                  i
                ));
              }
              n = s;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          ti(e, 0), Bl(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, i = n, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Bl(
                l,
                t,
                ta,
                !kl
              );
              break e;
            case 2:
              Qt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (n = fs + 300 - qe(), 10 < n)) {
            if (Bl(
              l,
              t,
              ta,
              !kl
            ), Il(l, 0, !0) !== 0) break e;
            cl = t, l.timeoutHandle = N0(
              _d.bind(
                null,
                l,
                a,
                Qt,
                hs,
                pc,
                t,
                ta,
                xn,
                $n,
                kl,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          _d(
            l,
            a,
            Qt,
            hs,
            pc,
            t,
            ta,
            xn,
            $n,
            kl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ba(e);
  }
  function _d(e, t, a, l, n, i, s, d, g, T, R, Y, N, q) {
    if (e.timeoutHandle = -1, Y = t.subtreeFlags, Y & 8192 || (Y & 16785408) === 16785408) {
      Y = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: za
      }, Xd(
        t,
        i,
        Y
      );
      var te = (i & 62914560) === i ? fs - qe() : (i & 4194048) === i ? Wd - qe() : 0;
      if (te = Lp(
        Y,
        te
      ), te !== null) {
        cl = i, e.cancelPendingCommit = te(
          u0.bind(
            null,
            e,
            t,
            i,
            a,
            l,
            n,
            s,
            d,
            g,
            R,
            Y,
            null,
            N,
            q
          )
        ), Bl(e, i, s, !T);
        return;
      }
    }
    u0(
      e,
      t,
      i,
      a,
      l,
      n,
      s,
      d,
      g
    );
  }
  function ep(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], i = n.getSnapshot;
          n = n.value;
          try {
            if (!It(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Bl(e, t, a, l) {
    t &= ~mc, t &= ~xn, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var i = 31 - rt(n), s = 1 << i;
      l[i] = -1, n &= ~s;
    }
    a !== 0 && Su(e, a, t);
  }
  function ms() {
    return (Ce & 6) === 0 ? (au(0), !1) : !0;
  }
  function bc() {
    if (ge !== null) {
      if (ke === 0)
        var e = ge.return;
      else
        e = ge, _a = fn = null, Dr(e), Kn = null, Li = 0, e = ge;
      for (; e !== null; )
        Cd(e.alternate, e), e = e.return;
      ge = null;
    }
  }
  function ti(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, xp(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), cl = 0, bc(), Ve = e, ge = a = Ia(e.current, null), xe = t, ke = 0, ea = null, kl = !1, _n = Ea(e, t), hc = !1, $n = ta = mc = xn = Ol = et = 0, Qt = eu = null, pc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - rt(l), i = 1 << n;
        t |= e[n], l &= ~i;
      }
    return rl = t, Du(), a;
  }
  function $d(e, t) {
    me = null, E.H = Ji, t === Xn || t === Zu ? (t = pf(), ke = 3) : t === Ar ? (t = pf(), ke = 4) : ke = t === Pr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ea = t, ge === null && (et = 1, ls(
      e,
      da(t, e.current)
    ));
  }
  function e0() {
    var e = _t.current;
    return e === null ? !0 : (xe & 4194048) === xe ? va === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? e === va : !1;
  }
  function t0() {
    var e = E.H;
    return E.H = Ji, e === null ? Ji : e;
  }
  function a0() {
    var e = E.A;
    return E.A = _m, e;
  }
  function ps() {
    et = 4, kl || (xe & 4194048) !== xe && _t.current !== null || (_n = !0), (Ol & 134217727) === 0 && (xn & 134217727) === 0 || Ve === null || Bl(
      Ve,
      xe,
      ta,
      !1
    );
  }
  function xc(e, t, a) {
    var l = Ce;
    Ce |= 2;
    var n = t0(), i = a0();
    (Ve !== e || xe !== t) && (hs = null, ti(e, t)), t = !1;
    var s = et;
    e: do
      try {
        if (ke !== 0 && ge !== null) {
          var d = ge, g = ea;
          switch (ke) {
            case 8:
              bc(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _t.current === null && (t = !0);
              var T = ke;
              if (ke = 0, ea = null, ai(e, d, g, T), a && _n) {
                s = 0;
                break e;
              }
              break;
            default:
              T = ke, ke = 0, ea = null, ai(e, d, g, T);
          }
        }
        tp(), s = et;
        break;
      } catch (R) {
        $d(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, _a = fn = null, Ce = l, E.H = n, E.A = i, ge === null && (Ve = null, xe = 0, Du()), s;
  }
  function tp() {
    for (; ge !== null; ) l0(ge);
  }
  function ap(e, t) {
    var a = Ce;
    Ce |= 2;
    var l = t0(), n = a0();
    Ve !== e || xe !== t ? (hs = null, ds = qe() + 500, ti(e, t)) : _n = Ea(
      e,
      t
    );
    e: do
      try {
        if (ke !== 0 && ge !== null) {
          t = ge;
          var i = ea;
          t: switch (ke) {
            case 1:
              ke = 0, ea = null, ai(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (hf(i)) {
                ke = 0, ea = null, n0(t);
                break;
              }
              t = function() {
                ke !== 2 && ke !== 9 || Ve !== e || (ke = 7), Ba(e);
              }, i.then(t, t);
              break e;
            case 3:
              ke = 7;
              break e;
            case 4:
              ke = 5;
              break e;
            case 7:
              hf(i) ? (ke = 0, ea = null, n0(t)) : (ke = 0, ea = null, ai(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (ge.tag) {
                case 26:
                  s = ge.memoizedState;
                case 5:
                case 27:
                  var d = ge;
                  if (s ? Z0(s) : d.stateNode.complete) {
                    ke = 0, ea = null;
                    var g = d.sibling;
                    if (g !== null) ge = g;
                    else {
                      var T = d.return;
                      T !== null ? (ge = T, vs(T)) : ge = null;
                    }
                    break t;
                  }
              }
              ke = 0, ea = null, ai(e, t, i, 5);
              break;
            case 6:
              ke = 0, ea = null, ai(e, t, i, 6);
              break;
            case 8:
              bc(), et = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        lp();
        break;
      } catch (R) {
        $d(e, R);
      }
    while (!0);
    return _a = fn = null, E.H = l, E.A = n, Ce = a, ge !== null ? 0 : (Ve = null, xe = 0, Du(), et);
  }
  function lp() {
    for (; ge !== null && !xt(); )
      l0(ge);
  }
  function l0(e) {
    var t = Td(e.alternate, e, rl);
    e.memoizedProps = e.pendingProps, t === null ? vs(e) : ge = t;
  }
  function n0(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Sd(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          xe
        );
        break;
      case 11:
        t = Sd(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          xe
        );
        break;
      case 5:
        Dr(t);
      default:
        Cd(a, t), t = ge = tf(t, rl), t = Td(a, t, rl);
    }
    e.memoizedProps = e.pendingProps, t === null ? vs(e) : ge = t;
  }
  function ai(e, t, a, l) {
    _a = fn = null, Dr(t), Kn = null, Li = 0;
    var n = t.return;
    try {
      if (Km(
        e,
        n,
        t,
        a,
        xe
      )) {
        et = 1, ls(
          e,
          da(a, e.current)
        ), ge = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw ge = n, i;
      et = 1, ls(
        e,
        da(a, e.current)
      ), ge = null;
      return;
    }
    t.flags & 32768 ? (Ae || l === 1 ? e = !0 : _n || (xe & 536870912) !== 0 ? e = !1 : (kl = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = _t.current, l !== null && l.tag === 13 && (l.flags |= 16384))), i0(t, e)) : vs(t);
  }
  function vs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        i0(
          t,
          kl
        );
        return;
      }
      e = t.return;
      var a = Wm(
        t.alternate,
        t,
        rl
      );
      if (a !== null) {
        ge = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function i0(e, t) {
    do {
      var a = Fm(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ge = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        ge = e;
        return;
      }
      ge = e = a;
    } while (e !== null);
    et = 6, ge = null;
  }
  function u0(e, t, a, l, n, i, s, d, g) {
    e.cancelPendingCommit = null;
    do
      gs();
    while (mt !== 0);
    if ((Ce & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= rr, vi(
        e,
        a,
        i,
        s,
        d,
        g
      ), e === Ve && (ge = Ve = null, xe = 0), ei = t, Rl = e, cl = a, vc = i, gc = n, Fd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, sp(Qe, function() {
        return f0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = E.T, E.T = null, n = B.p, B.p = 2, s = Ce, Ce |= 4;
        try {
          Im(e, t, a);
        } finally {
          Ce = s, B.p = n, E.T = l;
        }
      }
      mt = 1, s0(), r0(), c0();
    }
  }
  function s0() {
    if (mt === 1) {
      mt = 0;
      var e = Rl, t = ei, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null;
        var l = B.p;
        B.p = 2;
        var n = Ce;
        Ce |= 4;
        try {
          Vd(t, e);
          var i = Uc, s = Jo(e.containerInfo), d = i.focusedElem, g = i.selectionRange;
          if (s !== d && d && d.ownerDocument && Ko(
            d.ownerDocument.documentElement,
            d
          )) {
            if (g !== null && lr(d)) {
              var T = g.start, R = g.end;
              if (R === void 0 && (R = T), "selectionStart" in d)
                d.selectionStart = T, d.selectionEnd = Math.min(
                  R,
                  d.value.length
                );
              else {
                var Y = d.ownerDocument || document, N = Y && Y.defaultView || window;
                if (N.getSelection) {
                  var q = N.getSelection(), te = d.textContent.length, se = Math.min(g.start, te), Ye = g.end === void 0 ? se : Math.min(g.end, te);
                  !q.extend && se > Ye && (s = Ye, Ye = se, se = s);
                  var w = Xo(
                    d,
                    se
                  ), x = Xo(
                    d,
                    Ye
                  );
                  if (w && x && (q.rangeCount !== 1 || q.anchorNode !== w.node || q.anchorOffset !== w.offset || q.focusNode !== x.node || q.focusOffset !== x.offset)) {
                    var M = Y.createRange();
                    M.setStart(w.node, w.offset), q.removeAllRanges(), se > Ye ? (q.addRange(M), q.extend(x.node, x.offset)) : (M.setEnd(x.node, x.offset), q.addRange(M));
                  }
                }
              }
            }
            for (Y = [], q = d; q = q.parentNode; )
              q.nodeType === 1 && Y.push({
                element: q,
                left: q.scrollLeft,
                top: q.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < Y.length; d++) {
              var L = Y[d];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          Cs = !!qc, Uc = qc = null;
        } finally {
          Ce = n, B.p = l, E.T = a;
        }
      }
      e.current = t, mt = 2;
    }
  }
  function r0() {
    if (mt === 2) {
      mt = 0;
      var e = Rl, t = ei, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = E.T, E.T = null;
        var l = B.p;
        B.p = 2;
        var n = Ce;
        Ce |= 4;
        try {
          Rd(e, t.alternate, t);
        } finally {
          Ce = n, B.p = l, E.T = a;
        }
      }
      mt = 3;
    }
  }
  function c0() {
    if (mt === 4 || mt === 3) {
      mt = 0, Ht();
      var e = Rl, t = ei, a = cl, l = Fd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? mt = 5 : (mt = 0, ei = Rl = null, o0(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Dl = null), zn(a), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function")
        try {
          St.onCommitFiberRoot(
            fl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = E.T, n = B.p, B.p = 2, E.T = null;
        try {
          for (var i = e.onRecoverableError, s = 0; s < l.length; s++) {
            var d = l[s];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          E.T = t, B.p = n;
        }
      }
      (cl & 3) !== 0 && gs(), Ba(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === yc ? tu++ : (tu = 0, yc = e) : tu = 0, au(0);
    }
  }
  function o0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ri(t)));
  }
  function gs() {
    return s0(), r0(), c0(), f0();
  }
  function f0() {
    if (mt !== 5) return !1;
    var e = Rl, t = vc;
    vc = 0;
    var a = zn(cl), l = E.T, n = B.p;
    try {
      B.p = 32 > a ? 32 : a, E.T = null, a = gc, gc = null;
      var i = Rl, s = cl;
      if (mt = 0, ei = Rl = null, cl = 0, (Ce & 6) !== 0) throw Error(r(331));
      var d = Ce;
      if (Ce |= 4, Jd(i.current), Zd(
        i,
        i.current,
        s,
        a
      ), Ce = d, au(0, !1), St && typeof St.onPostCommitFiberRoot == "function")
        try {
          St.onPostCommitFiberRoot(fl, i);
        } catch {
        }
      return !0;
    } finally {
      B.p = n, E.T = l, o0(e, t);
    }
  }
  function d0(e, t, a) {
    t = da(a, t), t = Ir(e.stateNode, t, 2), e = Cl(e, t, 2), e !== null && (Pl(e, 2), Ba(e));
  }
  function Oe(e, t, a) {
    if (e.tag === 3)
      d0(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          d0(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Dl === null || !Dl.has(l))) {
            e = da(a, e), a = hd(2), l = Cl(t, a, 2), l !== null && (md(
              a,
              l,
              t,
              e
            ), Pl(l, 2), Ba(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sc(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new $m();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else
      n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (hc = !0, n.add(a), e = np.bind(null, e, t, a), t.then(e, e));
  }
  function np(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ve === e && (xe & a) === a && (et === 4 || et === 3 && (xe & 62914560) === xe && 300 > qe() - fs ? (Ce & 2) === 0 && ti(e, 0) : mc |= a, $n === xe && ($n = 0)), Ba(e);
  }
  function h0(e, t) {
    t === 0 && (t = Va()), e = rn(e, t), e !== null && (Pl(e, t), Ba(e));
  }
  function ip(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), h0(e, a);
  }
  function up(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), h0(e, a);
  }
  function sp(e, t) {
    return Ee(e, t);
  }
  var ys = null, li = null, Ec = !1, bs = !1, Ac = !1, Ll = 0;
  function Ba(e) {
    e !== li && e.next === null && (li === null ? ys = li = e : li = li.next = e), bs = !0, Ec || (Ec = !0, cp());
  }
  function au(e, t) {
    if (!Ac && bs) {
      Ac = !0;
      do
        for (var a = !1, l = ys; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var s = l.suspendedLanes, d = l.pingedLanes;
              i = (1 << 31 - rt(42 | e) + 1) - 1, i &= n & ~(s & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = !0, g0(l, i));
          } else
            i = xe, i = Il(
              l,
              l === Ve ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Ea(l, i) || (a = !0, g0(l, i));
          l = l.next;
        }
      while (a);
      Ac = !1;
    }
  }
  function rp() {
    m0();
  }
  function m0() {
    bs = Ec = !1;
    var e = 0;
    Ll !== 0 && bp() && (e = Ll);
    for (var t = qe(), a = null, l = ys; l !== null; ) {
      var n = l.next, i = p0(l, t);
      i === 0 ? (l.next = null, a === null ? ys = n : a.next = n, n === null && (li = a)) : (a = l, (e !== 0 || (i & 3) !== 0) && (bs = !0)), l = n;
    }
    mt !== 0 && mt !== 5 || au(e), Ll !== 0 && (Ll = 0);
  }
  function p0(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - rt(i), d = 1 << s, g = n[s];
      g === -1 ? ((d & a) === 0 || (d & l) !== 0) && (n[s] = dl(d, t)) : g <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = Ve, a = xe, a = Il(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (ke === 2 || ke === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Re(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ea(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Re(l), zn(a)) {
        case 2:
        case 8:
          a = _e;
          break;
        case 32:
          a = Qe;
          break;
        case 268435456:
          a = ua;
          break;
        default:
          a = Qe;
      }
      return l = v0.bind(null, e), a = Ee(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Re(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function v0(e, t) {
    if (mt !== 0 && mt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (gs() && e.callbackNode !== a)
      return null;
    var l = xe;
    return l = Il(
      e,
      e === Ve ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Pd(e, l, t), p0(e, qe()), e.callbackNode != null && e.callbackNode === a ? v0.bind(null, e) : null);
  }
  function g0(e, t) {
    if (gs()) return null;
    Pd(e, t, !0);
  }
  function cp() {
    Sp(function() {
      (Ce & 6) !== 0 ? Ee(
        ht,
        rp
      ) : m0();
    });
  }
  function zc() {
    if (Ll === 0) {
      var e = Gn;
      e === 0 && (e = Et, Et <<= 1, (Et & 261888) === 0 && (Et = 256)), Ll = e;
    }
    return Ll;
  }
  function y0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yl("" + e);
  }
  function b0(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function op(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var i = y0(
        (n[vt] || null).action
      ), s = l.submitter;
      s && (t = (t = s[vt] || null) ? y0(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
      var d = new Ja(
        "action",
        "action",
        null,
        l,
        n
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ll !== 0) {
                  var g = s ? b0(n, s) : new FormData(n);
                  Xr(
                    a,
                    {
                      pending: !0,
                      data: g,
                      method: n.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), g = s ? b0(n, s) : new FormData(n), Xr(
                  a,
                  {
                    pending: !0,
                    data: g,
                    method: n.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var wc = 0; wc < sr.length; wc++) {
    var Mc = sr[wc], fp = Mc.toLowerCase(), dp = Mc[0].toUpperCase() + Mc.slice(1);
    Ta(
      fp,
      "on" + dp
    );
  }
  Ta(Fo, "onAnimationEnd"), Ta(Io, "onAnimationIteration"), Ta(Po, "onAnimationStart"), Ta("dblclick", "onDoubleClick"), Ta("focusin", "onFocus"), Ta("focusout", "onBlur"), Ta(Nm, "onTransitionRun"), Ta(Cm, "onTransitionStart"), Ta(jm, "onTransitionCancel"), Ta(_o, "onTransitionEnd"), ml("onMouseEnter", ["mouseout", "mouseover"]), ml("onMouseLeave", ["mouseout", "mouseover"]), ml("onPointerEnter", ["pointerout", "pointerover"]), ml("onPointerLeave", ["pointerout", "pointerover"]), Za(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Za(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Za("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Za(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Za(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Za(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var lu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), hp = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lu)
  );
  function x0(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], n = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = l.length - 1; 0 <= s; s--) {
            var d = l[s], g = d.instance, T = d.currentTarget;
            if (d = d.listener, g !== i && n.isPropagationStopped())
              break e;
            i = d, n.currentTarget = T;
            try {
              i(n);
            } catch (R) {
              Ou(R);
            }
            n.currentTarget = null, i = g;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (d = l[s], g = d.instance, T = d.currentTarget, d = d.listener, g !== i && n.isPropagationStopped())
              break e;
            i = d, n.currentTarget = T;
            try {
              i(n);
            } catch (R) {
              Ou(R);
            }
            n.currentTarget = null, i = g;
          }
      }
    }
  }
  function ye(e, t) {
    var a = t[Mn];
    a === void 0 && (a = t[Mn] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (S0(t, e, 2, !1), a.add(l));
  }
  function Tc(e, t, a) {
    var l = 0;
    t && (l |= 4), S0(
      a,
      e,
      l,
      t
    );
  }
  var xs = "_reactListening" + Math.random().toString(36).slice(2);
  function Nc(e) {
    if (!e[xs]) {
      e[xs] = !0, wu.forEach(function(a) {
        a !== "selectionchange" && (hp.has(a) || Tc(a, !1, e), Tc(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xs] || (t[xs] = !0, Tc("selectionchange", !1, t));
    }
  }
  function S0(e, t, a, l) {
    switch (I0(t)) {
      case 2:
        var n = Vp;
        break;
      case 8:
        n = Gp;
        break;
      default:
        n = Zc;
    }
    a = n.bind(
      null,
      t,
      a,
      e
    ), n = void 0, !ln || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1);
  }
  function Cc(e, t, a, l, n) {
    var i = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var d = l.stateNode.containerInfo;
          if (d === n) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var g = s.tag;
              if ((g === 3 || g === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; d !== null; ) {
            if (s = Ga(d), s === null) return;
            if (g = s.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              l = i = s;
              continue e;
            }
            d = d.parentNode;
          }
        }
        l = l.return;
      }
    Ni(function() {
      var T = i, R = Mi(a), Y = [];
      e: {
        var N = $o.get(e);
        if (N !== void 0) {
          var q = Ja, te = e;
          switch (e) {
            case "keypress":
              if (gt(a) === 0) break e;
            case "keydown":
            case "keyup":
              q = um;
              break;
            case "focusin":
              te = "focus", q = Ma;
              break;
            case "focusout":
              te = "blur", q = Ma;
              break;
            case "beforeblur":
            case "afterblur":
              q = Ma;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = Un;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = El;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = cm;
              break;
            case Fo:
            case Io:
            case Po:
              q = Ps;
              break;
            case _o:
              q = fm;
              break;
            case "scroll":
            case "scrollend":
              q = Ft;
              break;
            case "wheel":
              q = hm;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = _s;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = jo;
              break;
            case "toggle":
            case "beforetoggle":
              q = pm;
          }
          var se = (t & 4) !== 0, Ye = !se && (e === "scroll" || e === "scrollend"), w = se ? N !== null ? N + "Capture" : null : N;
          se = [];
          for (var x = T, M; x !== null; ) {
            var L = x;
            if (M = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || M === null || w === null || (L = Ka(x, w), L != null && se.push(
              nu(x, L, M)
            )), Ye) break;
            x = x.return;
          }
          0 < se.length && (N = new q(
            N,
            te,
            null,
            a,
            R
          ), Y.push({ event: N, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", N && a !== wi && (te = a.relatedTarget || a.fromElement) && (Ga(te) || te[qa]))
            break e;
          if ((q || N) && (N = R.window === R ? R : (N = R.ownerDocument) ? N.defaultView || N.parentWindow : window, q ? (te = a.relatedTarget || a.toElement, q = T, te = te ? Ga(te) : null, te !== null && (Ye = p(te), se = te.tag, te !== Ye || se !== 5 && se !== 27 && se !== 6) && (te = null)) : (q = null, te = T), q !== te)) {
            if (se = Un, L = "onMouseLeave", w = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (se = jo, L = "onPointerLeave", w = "onPointerEnter", x = "pointer"), Ye = q == null ? N : ka(q), M = te == null ? N : ka(te), N = new se(
              L,
              x + "leave",
              q,
              a,
              R
            ), N.target = Ye, N.relatedTarget = M, L = null, Ga(R) === T && (se = new se(
              w,
              x + "enter",
              te,
              a,
              R
            ), se.target = M, se.relatedTarget = Ye, L = se), Ye = L, q && te)
              t: {
                for (se = mp, w = q, x = te, M = 0, L = w; L; L = se(L))
                  M++;
                L = 0;
                for (var ie = x; ie; ie = se(ie))
                  L++;
                for (; 0 < M - L; )
                  w = se(w), M--;
                for (; 0 < L - M; )
                  x = se(x), L--;
                for (; M--; ) {
                  if (w === x || x !== null && w === x.alternate) {
                    se = w;
                    break t;
                  }
                  w = se(w), x = se(x);
                }
                se = null;
              }
            else se = null;
            q !== null && E0(
              Y,
              N,
              q,
              se,
              !1
            ), te !== null && Ye !== null && E0(
              Y,
              Ye,
              te,
              se,
              !0
            );
          }
        }
        e: {
          if (N = T ? ka(T) : window, q = N.nodeName && N.nodeName.toLowerCase(), q === "select" || q === "input" && N.type === "file")
            var Te = Lo;
          else if (Ro(N))
            if (Yo)
              Te = wm;
            else {
              Te = Am;
              var le = Em;
            }
          else
            q = N.nodeName, !q || q.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? T && zi(T.elementType) && (Te = Lo) : Te = zm;
          if (Te && (Te = Te(e, T))) {
            Bo(
              Y,
              Te,
              a,
              R
            );
            break e;
          }
          le && le(e, N, T), e === "focusout" && T && N.type === "number" && T.memoizedProps.value != null && Ei(N, "number", N.value);
        }
        switch (le = T ? ka(T) : window, e) {
          case "focusin":
            (Ro(le) || le.contentEditable === "true") && (On = le, nr = T, ki = null);
            break;
          case "focusout":
            ki = nr = On = null;
            break;
          case "mousedown":
            ir = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ir = !1, Qo(Y, a, R);
            break;
          case "selectionchange":
            if (Tm) break;
          case "keydown":
          case "keyup":
            Qo(Y, a, R);
        }
        var pe;
        if (er)
          e: {
            switch (e) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          kn ? Oo(e, a) && (Se = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Se = "onCompositionStart");
        Se && (qo && a.locale !== "ko" && (kn || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && kn && (pe = we()) : (H = R, Q = "value" in H ? H.value : H.textContent, kn = !0)), le = Ss(T, Se), 0 < le.length && (Se = new Co(
          Se,
          e,
          null,
          a,
          R
        ), Y.push({ event: Se, listeners: le }), pe ? Se.data = pe : (pe = Do(a), pe !== null && (Se.data = pe)))), (pe = gm ? ym(e, a) : bm(e, a)) && (Se = Ss(T, "onBeforeInput"), 0 < Se.length && (le = new Co(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          R
        ), Y.push({
          event: le,
          listeners: Se
        }), le.data = pe)), op(
          Y,
          e,
          T,
          a,
          R
        );
      }
      x0(Y, t);
    });
  }
  function nu(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Ss(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ka(e, a), n != null && l.unshift(
        nu(e, n, i)
      ), n = Ka(e, t), n != null && l.push(
        nu(e, n, i)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function mp(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function E0(e, t, a, l, n) {
    for (var i = t._reactName, s = []; a !== null && a !== l; ) {
      var d = a, g = d.alternate, T = d.stateNode;
      if (d = d.tag, g !== null && g === l) break;
      d !== 5 && d !== 26 && d !== 27 || T === null || (g = T, n ? (T = Ka(a, i), T != null && s.unshift(
        nu(a, T, g)
      )) : n || (T = Ka(a, i), T != null && s.push(
        nu(a, T, g)
      ))), a = a.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var pp = /\r\n?/g, vp = /\u0000|\uFFFD/g;
  function A0(e) {
    return (typeof e == "string" ? e : "" + e).replace(pp, `
`).replace(vp, "");
  }
  function z0(e, t) {
    return t = A0(t), A0(e) === t;
  }
  function Le(e, t, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || gl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && gl(e, "" + l);
        break;
      case "className":
        Xa(e, "class", l);
        break;
      case "tabIndex":
        Xa(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xa(e, a, l);
        break;
      case "style":
        qu(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          Xa(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = yl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (a === "formAction" ? (t !== "input" && Le(e, t, "name", n.name, n, null), Le(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Le(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Le(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Le(e, t, "encType", n.encType, n, null), Le(e, t, "method", n.method, n, null), Le(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = yl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = za);
        break;
      case "onScroll":
        l != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = yl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        ye("beforetoggle", e), ye("toggle", e), pl(e, "popover", l);
        break;
      case "xlinkActuate":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Gt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Gt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Gt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        pl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = jn.get(a) || a, pl(e, a, l));
    }
  }
  function jc(e, t, a, l, n, i) {
    switch (a) {
      case "style":
        qu(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? gl(e, l) : (typeof l == "number" || typeof l == "bigint") && gl(e, "" + l);
        break;
      case "onScroll":
        l != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ye("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = za);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Tn.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), i = e[vt] || null, i = i != null ? i[a] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof l == "function")) {
              typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : pl(e, a, l);
          }
    }
  }
  function Ct(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ye("error", e), ye("load", e);
        var l = !1, n = !1, i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var s = a[i];
            if (s != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Le(e, t, i, s, a, null);
              }
          }
        n && Le(e, t, "srcSet", a.srcSet, a, null), l && Le(e, t, "src", a.src, a, null);
        return;
      case "input":
        ye("invalid", e);
        var d = i = s = n = null, g = null, T = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var R = a[l];
            if (R != null)
              switch (l) {
                case "name":
                  n = R;
                  break;
                case "type":
                  s = R;
                  break;
                case "checked":
                  g = R;
                  break;
                case "defaultChecked":
                  T = R;
                  break;
                case "value":
                  i = R;
                  break;
                case "defaultValue":
                  d = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Le(e, t, l, R, a, null);
              }
          }
        Cu(
          e,
          i,
          d,
          g,
          T,
          s,
          n,
          !1
        );
        return;
      case "select":
        ye("invalid", e), l = s = i = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (d = a[n], d != null))
            switch (n) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                s = d;
                break;
              case "multiple":
                l = d;
              default:
                Le(e, t, n, d, a, null);
            }
        t = i, a = s, e.multiple = !!l, t != null ? Ze(e, !!l, t, !1) : a != null && Ze(e, !!l, a, !0);
        return;
      case "textarea":
        ye("invalid", e), i = n = l = null;
        for (s in a)
          if (a.hasOwnProperty(s) && (d = a[s], d != null))
            switch (s) {
              case "value":
                l = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(r(91));
                break;
              default:
                Le(e, t, s, d, a, null);
            }
        ju(e, l, n, i);
        return;
      case "option":
        for (g in a)
          a.hasOwnProperty(g) && (l = a[g], l != null) && (g === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Le(e, t, g, l, a, null));
        return;
      case "dialog":
        ye("beforetoggle", e), ye("toggle", e), ye("cancel", e), ye("close", e);
        break;
      case "iframe":
      case "object":
        ye("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < lu.length; l++)
          ye(lu[l], e);
        break;
      case "image":
        ye("error", e), ye("load", e);
        break;
      case "details":
        ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", e), ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in a)
          if (a.hasOwnProperty(T) && (l = a[T], l != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Le(e, t, T, l, a, null);
            }
        return;
      default:
        if (zi(t)) {
          for (R in a)
            a.hasOwnProperty(R) && (l = a[R], l !== void 0 && jc(
              e,
              t,
              R,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (d in a)
      a.hasOwnProperty(d) && (l = a[d], l != null && Le(e, t, d, l, a, null));
  }
  function gp(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, s = null, d = null, g = null, T = null, R = null;
        for (q in a) {
          var Y = a[q];
          if (a.hasOwnProperty(q) && Y != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = Y;
              default:
                l.hasOwnProperty(q) || Le(e, t, q, null, l, Y);
            }
        }
        for (var N in l) {
          var q = l[N];
          if (Y = a[N], l.hasOwnProperty(N) && (q != null || Y != null))
            switch (N) {
              case "type":
                i = q;
                break;
              case "name":
                n = q;
                break;
              case "checked":
                T = q;
                break;
              case "defaultChecked":
                R = q;
                break;
              case "value":
                s = q;
                break;
              case "defaultValue":
                d = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(r(137, t));
                break;
              default:
                q !== Y && Le(
                  e,
                  t,
                  N,
                  q,
                  l,
                  Y
                );
            }
        }
        en(
          e,
          s,
          d,
          g,
          T,
          R,
          i,
          n
        );
        return;
      case "select":
        q = s = d = N = null;
        for (i in a)
          if (g = a[i], a.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                q = g;
              default:
                l.hasOwnProperty(i) || Le(
                  e,
                  t,
                  i,
                  null,
                  l,
                  g
                );
            }
        for (n in l)
          if (i = l[n], g = a[n], l.hasOwnProperty(n) && (i != null || g != null))
            switch (n) {
              case "value":
                N = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== g && Le(
                  e,
                  t,
                  n,
                  i,
                  l,
                  g
                );
            }
        t = d, a = s, l = q, N != null ? Ze(e, !!a, N, !1) : !!l != !!a && (t != null ? Ze(e, !!a, t, !0) : Ze(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        q = N = null;
        for (d in a)
          if (n = a[d], a.hasOwnProperty(d) && n != null && !l.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Le(e, t, d, null, l, n);
            }
        for (s in l)
          if (n = l[s], i = a[s], l.hasOwnProperty(s) && (n != null || i != null))
            switch (s) {
              case "value":
                N = n;
                break;
              case "defaultValue":
                q = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && Le(e, t, s, n, l, i);
            }
        Ai(e, N, q);
        return;
      case "option":
        for (var te in a)
          N = a[te], a.hasOwnProperty(te) && N != null && !l.hasOwnProperty(te) && (te === "selected" ? e.selected = !1 : Le(
            e,
            t,
            te,
            null,
            l,
            N
          ));
        for (g in l)
          N = l[g], q = a[g], l.hasOwnProperty(g) && N !== q && (N != null || q != null) && (g === "selected" ? e.selected = N && typeof N != "function" && typeof N != "symbol" : Le(
            e,
            t,
            g,
            N,
            l,
            q
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in a)
          N = a[se], a.hasOwnProperty(se) && N != null && !l.hasOwnProperty(se) && Le(e, t, se, null, l, N);
        for (T in l)
          if (N = l[T], q = a[T], l.hasOwnProperty(T) && N !== q && (N != null || q != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, t));
                break;
              default:
                Le(
                  e,
                  t,
                  T,
                  N,
                  l,
                  q
                );
            }
        return;
      default:
        if (zi(t)) {
          for (var Ye in a)
            N = a[Ye], a.hasOwnProperty(Ye) && N !== void 0 && !l.hasOwnProperty(Ye) && jc(
              e,
              t,
              Ye,
              void 0,
              l,
              N
            );
          for (R in l)
            N = l[R], q = a[R], !l.hasOwnProperty(R) || N === q || N === void 0 && q === void 0 || jc(
              e,
              t,
              R,
              N,
              l,
              q
            );
          return;
        }
    }
    for (var w in a)
      N = a[w], a.hasOwnProperty(w) && N != null && !l.hasOwnProperty(w) && Le(e, t, w, null, l, N);
    for (Y in l)
      N = l[Y], q = a[Y], !l.hasOwnProperty(Y) || N === q || N == null && q == null || Le(e, t, Y, N, l, q);
  }
  function w0(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function yp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], i = n.transferSize, s = n.initiatorType, d = n.duration;
        if (i && d && w0(s)) {
          for (s = 0, d = n.responseEnd, l += 1; l < a.length; l++) {
            var g = a[l], T = g.startTime;
            if (T > d) break;
            var R = g.transferSize, Y = g.initiatorType;
            R && w0(Y) && (g = g.responseEnd, s += R * (g < d ? 1 : (d - T) / (g - T)));
          }
          if (--l, t += 8 * (i + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qc = null, Uc = null;
  function Es(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function M0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function T0(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function kc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Oc = null;
  function bp() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Oc ? !1 : (Oc = e, !0) : (Oc = null, !1);
  }
  var N0 = typeof setTimeout == "function" ? setTimeout : void 0, xp = typeof clearTimeout == "function" ? clearTimeout : void 0, C0 = typeof Promise == "function" ? Promise : void 0, Sp = typeof queueMicrotask == "function" ? queueMicrotask : typeof C0 < "u" ? function(e) {
    return C0.resolve(null).then(e).catch(Ep);
  } : N0;
  function Ep(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Yl(e) {
    return e === "head";
  }
  function j0(e, t) {
    var a = t, l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(n), si(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          iu(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, iu(a);
          for (var i = a.firstChild; i; ) {
            var s = i.nextSibling, d = i.nodeName;
            i[_l] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = s;
          }
        } else
          a === "body" && iu(e.ownerDocument.body);
      a = n;
    } while (a);
    si(t);
  }
  function q0(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function Dc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Dc(a), Ua(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Ap(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[_l])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = ga(e.nextSibling), e === null) break;
    }
    return null;
  }
  function zp(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ga(e.nextSibling), e === null)) return null;
    return e;
  }
  function U0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ga(e.nextSibling), e === null)) return null;
    return e;
  }
  function Rc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Bc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function wp(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function ga(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Lc = null;
  function k0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return ga(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function O0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function D0(e, t, a) {
    switch (t = Es(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function iu(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ua(e);
  }
  var ya = /* @__PURE__ */ new Map(), R0 = /* @__PURE__ */ new Set();
  function As(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ol = B.d;
  B.d = {
    f: Mp,
    r: Tp,
    D: Np,
    C: Cp,
    L: jp,
    m: qp,
    X: kp,
    S: Up,
    M: Op
  };
  function Mp() {
    var e = ol.f(), t = ms();
    return e || t;
  }
  function Tp(e) {
    var t = He(e);
    t !== null && t.tag === 5 && t.type === "form" ? $f(t) : ol.r(e);
  }
  var ni = typeof document > "u" ? null : document;
  function B0(e, t, a) {
    var l = ni;
    if (l && typeof t == "string" && t) {
      var n = Zt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), R0.has(n) || (R0.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), Ct(t, "link", e), lt(t), l.head.appendChild(t)));
    }
  }
  function Np(e) {
    ol.D(e), B0("dns-prefetch", e, null);
  }
  function Cp(e, t) {
    ol.C(e, t), B0("preconnect", e, t);
  }
  function jp(e, t, a) {
    ol.L(e, t, a);
    var l = ni;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + Zt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Zt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Zt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Zt(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = ii(e);
          break;
        case "script":
          i = ui(e);
      }
      ya.has(i) || (e = C(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), ya.set(i, e), l.querySelector(n) !== null || t === "style" && l.querySelector(uu(i)) || t === "script" && l.querySelector(su(i)) || (t = l.createElement("link"), Ct(t, "link", e), lt(t), l.head.appendChild(t)));
    }
  }
  function qp(e, t) {
    ol.m(e, t);
    var a = ni;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Zt(l) + '"][href="' + Zt(e) + '"]', i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ui(e);
      }
      if (!ya.has(i) && (e = C({ rel: "modulepreload", href: e }, t), ya.set(i, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(su(i)))
              return;
        }
        l = a.createElement("link"), Ct(l, "link", e), lt(l), a.head.appendChild(l);
      }
    }
  }
  function Up(e, t, a) {
    ol.S(e, t, a);
    var l = ni;
    if (l && e) {
      var n = Vt(l).hoistableStyles, i = ii(e);
      t = t || "default";
      var s = n.get(i);
      if (!s) {
        var d = { loading: 0, preload: null };
        if (s = l.querySelector(
          uu(i)
        ))
          d.loading = 5;
        else {
          e = C(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = ya.get(i)) && Yc(e, a);
          var g = s = l.createElement("link");
          lt(g), Ct(g, "link", e), g._p = new Promise(function(T, R) {
            g.onload = T, g.onerror = R;
          }), g.addEventListener("load", function() {
            d.loading |= 1;
          }), g.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, zs(s, t, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: d
        }, n.set(i, s);
      }
    }
  }
  function kp(e, t) {
    ol.X(e, t);
    var a = ni;
    if (a && e) {
      var l = Vt(a).hoistableScripts, n = ui(e), i = l.get(n);
      i || (i = a.querySelector(su(n)), i || (e = C({ src: e, async: !0 }, t), (t = ya.get(n)) && Hc(e, t), i = a.createElement("script"), lt(i), Ct(i, "link", e), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function Op(e, t) {
    ol.M(e, t);
    var a = ni;
    if (a && e) {
      var l = Vt(a).hoistableScripts, n = ui(e), i = l.get(n);
      i || (i = a.querySelector(su(n)), i || (e = C({ src: e, async: !0, type: "module" }, t), (t = ya.get(n)) && Hc(e, t), i = a.createElement("script"), lt(i), Ct(i, "link", e), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function L0(e, t, a, l) {
    var n = (n = _.current) ? As(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ii(a.href), a = Vt(
          n
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = ii(a.href);
          var i = Vt(
            n
          ).hoistableStyles, s = i.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, s), (i = n.querySelector(
            uu(e)
          )) && !i._p && (s.instance = i, s.state.loading = 5), ya.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, ya.set(e, a), i || Dp(
            n,
            e,
            a,
            s.state
          ))), t && l === null)
            throw Error(r(528, ""));
          return s;
        }
        if (t && l !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ui(a), a = Vt(
          n
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function ii(e) {
    return 'href="' + Zt(e) + '"';
  }
  function uu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Y0(e) {
    return C({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Dp(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Ct(t, "link", a), lt(t), e.head.appendChild(t));
  }
  function ui(e) {
    return '[src="' + Zt(e) + '"]';
  }
  function su(e) {
    return "script[async]" + e;
  }
  function H0(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Zt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, lt(l), l;
          var n = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), lt(l), Ct(l, "style", n), zs(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          n = ii(a.href);
          var i = e.querySelector(
            uu(n)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, lt(i), i;
          l = Y0(a), (n = ya.get(n)) && Yc(l, n), i = (e.ownerDocument || e).createElement("link"), lt(i);
          var s = i;
          return s._p = new Promise(function(d, g) {
            s.onload = d, s.onerror = g;
          }), Ct(i, "link", l), t.state.loading |= 4, zs(i, a.precedence, e), t.instance = i;
        case "script":
          return i = ui(a.src), (n = e.querySelector(
            su(i)
          )) ? (t.instance = n, lt(n), n) : (l = a, (n = ya.get(i)) && (l = C({}, a), Hc(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), lt(n), Ct(n, "link", l), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, zs(l, a.precedence, e));
    return t.instance;
  }
  function zs(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, i = n, s = 0; s < l.length; s++) {
      var d = l[s];
      if (d.dataset.precedence === t) i = d;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Yc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Hc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ws = null;
  function V0(e, t, a) {
    if (ws === null) {
      var l = /* @__PURE__ */ new Map(), n = ws = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = ws, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var i = a[n];
      if (!(i[_l] || i[at] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var d = l.get(s);
        d ? d.push(i) : l.set(s, [i]);
      }
    }
    return l;
  }
  function G0(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Rp(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Z0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Bp(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = ii(l.href), i = t.querySelector(
          uu(n)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ms.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = i, lt(i);
          return;
        }
        i = t.ownerDocument || t, l = Y0(l), (n = ya.get(n)) && Yc(l, n), i = i.createElement("link"), lt(i);
        var s = i;
        s._p = new Promise(function(d, g) {
          s.onload = d, s.onerror = g;
        }), Ct(i, "link", l), a.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Ms.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Vc = 0;
  function Lp(e, t) {
    return e.stylesheets && e.count === 0 && Ns(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ns(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Vc === 0 && (Vc = 62500 * yp());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ns(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Vc ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Ms() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ns(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ts = null;
  function Ns(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ts = /* @__PURE__ */ new Map(), t.forEach(Yp, e), Ts = null, Ms.call(e));
  }
  function Yp(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ts.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Ts.set(e, a);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var s = n[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s);
        }
        l && a.set(null, l);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), i = a.get(s) || l, i === l && a.set(null, n), a.set(s, n), this.count++, l = Ms.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ru = {
    $$typeof: ce,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function Hp(e, t, a, l, n, i, s, d, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zt(0), this.hiddenUpdates = zt(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function X0(e, t, a, l, n, i, s, d, g, T, R, Y) {
    return e = new Hp(
      e,
      t,
      a,
      s,
      g,
      T,
      R,
      Y,
      d
    ), t = 1, i === !0 && (t |= 24), i = Pt(3, null, null, t), e.current = i, i.stateNode = e, t = xr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, zr(i), e;
  }
  function K0(e) {
    return e ? (e = Bn, e) : Bn;
  }
  function J0(e, t, a, l, n, i) {
    n = K0(n), l.context === null ? l.context = n : l.pendingContext = n, l = Nl(t), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = Cl(e, l, t), a !== null && (Wt(a, e, t), Hi(a, e, t));
  }
  function Q0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Gc(e, t) {
    Q0(e, t), (e = e.alternate) && Q0(e, t);
  }
  function W0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = rn(e, 67108864);
      t !== null && Wt(t, e, 67108864), Gc(e, 67108864);
    }
  }
  function F0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa();
      t = gi(t);
      var a = rn(e, t);
      a !== null && Wt(a, e, t), Gc(e, t);
    }
  }
  var Cs = !0;
  function Vp(e, t, a, l) {
    var n = E.T;
    E.T = null;
    var i = B.p;
    try {
      B.p = 2, Zc(e, t, a, l);
    } finally {
      B.p = i, E.T = n;
    }
  }
  function Gp(e, t, a, l) {
    var n = E.T;
    E.T = null;
    var i = B.p;
    try {
      B.p = 8, Zc(e, t, a, l);
    } finally {
      B.p = i, E.T = n;
    }
  }
  function Zc(e, t, a, l) {
    if (Cs) {
      var n = Xc(l);
      if (n === null)
        Cc(
          e,
          t,
          l,
          js,
          a
        ), P0(e, l);
      else if (Xp(
        n,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (P0(e, l), t & 4 && -1 < Zp.indexOf(e)) {
        for (; n !== null; ) {
          var i = He(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = At(i.pendingLanes);
                  if (s !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                      var g = 1 << 31 - rt(s);
                      d.entanglements[1] |= g, s &= ~g;
                    }
                    Ba(i), (Ce & 6) === 0 && (ds = qe() + 500, au(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = rn(i, 2), d !== null && Wt(d, i, 2), ms(), Gc(i, 2);
            }
          if (i = Xc(l), i === null && Cc(
            e,
            t,
            l,
            js,
            a
          ), i === n) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else
        Cc(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Xc(e) {
    return e = Mi(e), Kc(e);
  }
  var js = null;
  function Kc(e) {
    if (js = null, e = Ga(e), e !== null) {
      var t = p(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = b(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = k(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return js = e, null;
  }
  function I0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (st()) {
          case ht:
            return 2;
          case _e:
            return 8;
          case Qe:
          case pt:
            return 32;
          case ua:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jc = !1, Hl = null, Vl = null, Gl = null, cu = /* @__PURE__ */ new Map(), ou = /* @__PURE__ */ new Map(), Zl = [], Zp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function P0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hl = null;
        break;
      case "dragenter":
      case "dragleave":
        Vl = null;
        break;
      case "mouseover":
      case "mouseout":
        Gl = null;
        break;
      case "pointerover":
      case "pointerout":
        cu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ou.delete(t.pointerId);
    }
  }
  function fu(e, t, a, l, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = He(t), t !== null && W0(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Xp(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return Hl = fu(
          Hl,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Vl = fu(
          Vl,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return Gl = fu(
          Gl,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return cu.set(
          i,
          fu(
            cu.get(i) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, ou.set(
          i,
          fu(
            ou.get(i) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function _0(e) {
    var t = Ga(e.target);
    if (t !== null) {
      var a = p(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = b(a), t !== null) {
            e.blockedOn = t, wn(e.priority, function() {
              F0(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = k(a), t !== null) {
            e.blockedOn = t, wn(e.priority, function() {
              F0(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Xc(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        wi = l, a.target.dispatchEvent(l), wi = null;
      } else
        return t = He(a), t !== null && W0(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function $0(e, t, a) {
    qs(e) && a.delete(t);
  }
  function Kp() {
    Jc = !1, Hl !== null && qs(Hl) && (Hl = null), Vl !== null && qs(Vl) && (Vl = null), Gl !== null && qs(Gl) && (Gl = null), cu.forEach($0), ou.forEach($0);
  }
  function Us(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jc || (Jc = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Kp
    )));
  }
  var ks = null;
  function eh(e) {
    ks !== e && (ks = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        ks === e && (ks = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], n = e[t + 2];
          if (typeof l != "function") {
            if (Kc(l || a) === null)
              continue;
            break;
          }
          var i = He(a);
          i !== null && (e.splice(t, 3), t -= 3, Xr(
            i,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function si(e) {
    function t(g) {
      return Us(g, e);
    }
    Hl !== null && Us(Hl, e), Vl !== null && Us(Vl, e), Gl !== null && Us(Gl, e), cu.forEach(t), ou.forEach(t);
    for (var a = 0; a < Zl.length; a++) {
      var l = Zl[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Zl.length && (a = Zl[0], a.blockedOn === null); )
      _0(a), a.blockedOn === null && Zl.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], i = a[l + 1], s = n[vt] || null;
        if (typeof i == "function")
          s || eh(a);
        else if (s) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, s = i[vt] || null)
              d = s.formAction;
            else if (Kc(n) !== null) continue;
          } else d = s.action;
          typeof d == "function" ? a[l + 1] = d : (a.splice(l, 3), l -= 3), eh(a);
        }
      }
  }
  function th() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(s) {
            return n = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Qc(e) {
    this._internalRoot = e;
  }
  Os.prototype.render = Qc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, l = aa();
    J0(a, l, e, t, null, null);
  }, Os.prototype.unmount = Qc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      J0(e.current, 2, null, e, null, null), ms(), t[qa] = null;
    }
  };
  function Os(e) {
    this._internalRoot = e;
  }
  Os.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = yi();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Zl.length && t !== 0 && t < Zl[a].priority; a++) ;
      Zl.splice(a, 0, e), a === 0 && _0(e);
    }
  };
  var ah = u.version;
  if (ah !== "19.2.8")
    throw Error(
      r(
        527,
        ah,
        "19.2.8"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = m(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Jp = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        fl = Ds.inject(
          Jp
        ), St = Ds;
      } catch {
      }
  }
  return hu.createRoot = function(e, t) {
    if (!h(e)) throw Error(r(299));
    var a = !1, l = "", n = cd, i = od, s = fd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = X0(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      i,
      s,
      th
    ), e[qa] = t.current, Nc(e), new Qc(t);
  }, hu.hydrateRoot = function(e, t, a) {
    if (!h(e)) throw Error(r(299));
    var l = !1, n = "", i = cd, s = od, d = fd, g = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (d = a.onRecoverableError), a.formState !== void 0 && (g = a.formState)), t = X0(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      n,
      g,
      i,
      s,
      d,
      th
    ), t.context = K0(null), a = t.current, l = aa(), l = gi(l), n = Nl(l), n.callback = null, Cl(a, n, l), a = l, t.current.lanes = a, Pl(t, a), Ba(t), e[qa] = t.current, Nc(e), new Os(t);
  }, hu.version = "19.2.8", hu;
}
var dh;
function t1() {
  if (dh) return Ic.exports;
  dh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (u) {
        console.error(u);
      }
  }
  return c(), Ic.exports = e1(), Ic.exports;
}
var a1 = t1();
function Dh({ image: c, className: u = "" }) {
  const [o, r] = z.useState([c, null]), [h, p] = z.useState(0), b = z.useRef(0), k = z.useRef(c);
  return z.useEffect(() => {
    if (c === k.current) return;
    let v = !0;
    const m = () => {
      if (!v) return;
      k.current = c;
      const C = 1 - b.current;
      b.current = C, r((U) => {
        const O = [U[0], U[1]];
        return O[C] = c, O;
      }), p(C);
    };
    if (!c) {
      m();
      return;
    }
    const S = new Image();
    return S.onload = m, S.onerror = m, S.src = c, () => {
      v = !1;
    };
  }, [c]), /* @__PURE__ */ f.jsx("div", { className: `ambient ${u}`, "aria-hidden": "true", children: o.map((v, m) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "ambient__layer",
      "data-on": m === h && !!v,
      style: { backgroundImage: v ? `url("${v}")` : void 0 }
    },
    m
  )) });
}
const na = {
  PAUSE: 1,
  SEEK: 2,
  VOLUME_SET: 4,
  PREVIOUS_TRACK: 16,
  NEXT_TRACK: 32,
  PLAY: 16384,
  SHUFFLE_SET: 32768,
  REPEAT_SET: 262144
};
function yu(c, u) {
  return ((c?.attributes.supported_features ?? 0) & u) !== 0;
}
const xa = {
  prev: "M7 6h2.5v12H7zm2.9 6 8.6 6V6z",
  next: "M14.5 6H17v12h-2.5zm-.4 6L5.5 18V6z",
  play: "M8 5.2v13.6L19 12z",
  pause: "M7 5h3.4v14H7zm6.6 0H17v14h-3.4z",
  shuffle: "M17 3.5 21.5 8 17 12.5V9.5h-2.2c-.9 0-1.5.4-2.1 1.2l-1 1.3-1.3-1.7.8-1.1c1-1.3 2.2-2 3.6-2H17zM2.5 8h3.4c1.4 0 2.6.7 3.6 2l4.2 5.6c.6.8 1.2 1.2 2.1 1.2H17v-3l4.5 4.5L17 22.8v-3h-1.8c-1.4 0-2.6-.7-3.6-2L7.4 12.2c-.6-.8-1.2-1.2-2.1-1.2H2.5zm0 8h3.4c.5 0 .9-.1 1.3-.4l1.3 1.7c-.8.5-1.7.7-2.6.7H2.5z",
  repeat: "M7.5 4h9A4.5 4.5 0 0 1 21 8.5v2h-2.2v-2A2.3 2.3 0 0 0 16.5 6.2h-9V9L3 5.6 7.5 2.2zm9 18h-9A4.5 4.5 0 0 1 3 17.5v-2h2.2v2c0 1.3 1 2.3 2.3 2.3h9V17l4.5 3.4-4.5 3.4z",
  volume: "M4 9.5h3.2L12 5.2v13.6L7.2 14.5H4zm11.6-1.3a5 5 0 0 1 0 7.6l-1.4-1.6a3 3 0 0 0 0-4.4z",
  muted: "M4 9.5h3.2L12 5.2v13.6L7.2 14.5H4zm11 1.1 1.5-1.5 1.9 1.9 1.9-1.9 1.5 1.5-1.9 1.9 1.9 1.9-1.5 1.5-1.9-1.9-1.9 1.9-1.5-1.5 1.9-1.9z",
  lyrics: "M4 5h11v2H4zm0 4h16v2H4zm0 4h11v2H4zm0 4h16v2H4z",
  // Trois pochettes penchées dans un bac : l'image de la bibliothèque.
  crate: "M4 4h2.6v16H4zm4 0h2.6l1.4 16H9.4zm4.9 0h2.6l2.4 16h-2.6zm5.6 0H21v16h-2.5z",
  // Une liste dont les dernières lignes portent une note : ce qui va suivre.
  queue: "M3 5h12v2H3zm0 4h12v2H3zm0 4h8v2H3zm0 4h8v2H3zm14.5-12L21 4.4v9.9a2.8 2.8 0 1 1-2-2.7V6.6l-1.5.4z",
  // Roue crantée : le second sous-tracé creuse le moyeu grâce à evenodd.
  gear: "M10.8 2.6a1 1 0 0 0-1 .9l-.2 1.9c-.6.2-1.1.5-1.6.9l-1.8-.8a1 1 0 0 0-1.3.3L3.4 8.4a1 1 0 0 0 .3 1.3l1.5 1.1a7.4 7.4 0 0 0 0 2.4l-1.5 1.1a1 1 0 0 0-.3 1.3l1.5 2.6a1 1 0 0 0 1.3.3l1.8-.8c.5.4 1 .7 1.6.9l.2 1.9a1 1 0 0 0 1 .9h2.4a1 1 0 0 0 1-.9l.2-1.9c.6-.2 1.1-.5 1.6-.9l1.8.8a1 1 0 0 0 1.3-.3l1.5-2.6a1 1 0 0 0-.3-1.3l-1.5-1.1a7.4 7.4 0 0 0 0-2.4l1.5-1.1a1 1 0 0 0 .3-1.3l-1.5-2.6a1 1 0 0 0-1.3-.3l-1.8.8a7.4 7.4 0 0 0-1.6-.9l-.2-1.9a1 1 0 0 0-1-.9zM12 8.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8z"
};
function Ya({ d: c }) {
  return /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: c, fillRule: "evenodd" }) });
}
function l1({
  entity: c,
  playing: u,
  showPlayButton: o,
  onPlayPause: r,
  onPrevious: h,
  onNext: p,
  onVolume: b
}) {
  const k = c?.attributes, v = k?.volume_level ?? 0, m = k?.is_volume_muted === !0, S = yu(c, na.VOLUME_SET), C = yu(c, na.PREVIOUS_TRACK), U = yu(c, na.NEXT_TRACK);
  return /* @__PURE__ */ f.jsxs("div", { className: "controls", children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau précédent",
        title: "Précédent",
        disabled: !C,
        onClick: h,
        children: /* @__PURE__ */ f.jsx(Ya, { d: xa.prev })
      }
    ),
    o && /* @__PURE__ */ f.jsx(
      "button",
      {
        className: "iconbtn iconbtn--play",
        "aria-label": u ? "Pause" : "Lecture",
        title: u ? "Pause" : "Lecture",
        onClick: r,
        children: /* @__PURE__ */ f.jsx(Ya, { d: u ? xa.pause : xa.play })
      }
    ),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau suivant",
        title: "Suivant",
        disabled: !U,
        onClick: p,
        children: /* @__PURE__ */ f.jsx(Ya, { d: xa.next })
      }
    ),
    S && /* @__PURE__ */ f.jsxs("div", { className: "volume", children: [
      /* @__PURE__ */ f.jsx(Ya, { d: m || v === 0 ? xa.muted : xa.volume }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Math.round(v * 100),
          "aria-label": "Volume",
          onChange: (O) => b(Number(O.target.value) / 100)
        }
      )
    ] })
  ] });
}
function n1({
  entity: c,
  onLibrary: u,
  onQueue: o,
  onSpeakers: r,
  queueOn: h,
  onSettings: p,
  onLyrics: b,
  onShuffle: k,
  onRepeat: v,
  lyricsOn: m,
  lyricsAvailable: S,
  name: C
}) {
  const U = c?.attributes, O = U?.shuffle === !0, K = U?.repeat ?? "off", D = yu(c, na.SHUFFLE_SET), Z = yu(c, na.REPEAT_SET);
  return /* @__PURE__ */ f.jsxs("div", { className: "hud__top", children: [
    /* @__PURE__ */ f.jsxs("span", { className: "hud__left", children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-label": "Bibliothèque",
          title: "Bibliothèque",
          onClick: u,
          children: /* @__PURE__ */ f.jsx(Ya, { d: xa.crate })
        }
      ),
      /* @__PURE__ */ f.jsxs("button", { className: "hud__room", onClick: r, title: "Changer d'enceinte", children: [
        /* @__PURE__ */ f.jsx("span", { className: "hud__name", children: C }),
        /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "hud__chev", children: /* @__PURE__ */ f.jsx("path", { d: "M7 10l5 5 5-5z", fill: "currentColor" }) })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("span", { className: "hud__tools", children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": h,
          "aria-label": "File d'attente",
          title: "À suivre",
          onClick: o,
          children: /* @__PURE__ */ f.jsx(Ya, { d: xa.queue })
        }
      ),
      D && /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": O,
          "aria-label": "Lecture aléatoire",
          title: "Lecture aléatoire",
          onClick: () => k(!O),
          children: /* @__PURE__ */ f.jsx(Ya, { d: xa.shuffle })
        }
      ),
      Z && /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": K !== "off",
          "aria-label": "Répétition",
          title: K === "one" ? "Répéter ce morceau" : K === "all" ? "Répéter tout" : "Répétition",
          onClick: v,
          children: [
            /* @__PURE__ */ f.jsx(Ya, { d: xa.repeat }),
            K === "one" && /* @__PURE__ */ f.jsx("span", { className: "badge-one", children: "1" })
          ]
        }
      ),
      S && /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": m,
          "aria-label": "Paroles",
          title: "Paroles",
          onClick: b,
          children: /* @__PURE__ */ f.jsx(Ya, { d: xa.lyrics })
        }
      ),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-label": "Réglages",
          title: "Réglages",
          onClick: p,
          children: /* @__PURE__ */ f.jsx(Ya, { d: xa.gear })
        }
      )
    ] })
  ] });
}
const Ql = {
  a: "hsl(220 4% 46%)",
  b: "hsl(220 5% 34%)",
  vivid: "hsl(24 55% 45%)",
  vivid2: "hsl(334 50% 52%)",
  deep: "hsl(220 6% 14%)",
  text: "hsl(0 0% 100%)",
  isDark: !0
}, ri = 40, mu = /* @__PURE__ */ new Map();
async function Rh(c) {
  const u = mu.get(c);
  if (u) return u;
  try {
    const o = await i1(c), r = u1(o);
    return mu.set(c, r), mu.size > 60 && mu.delete(mu.keys().next().value), r;
  } catch {
    return Ql;
  }
}
function i1(c) {
  return new Promise((u, o) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.decoding = "async", r.onload = () => u(r), r.onerror = () => o(new Error("image illisible")), r.src = c;
  });
}
function u1(c) {
  const u = document.createElement("canvas");
  u.width = ri, u.height = ri;
  const o = u.getContext("2d", { willReadFrequently: !0 });
  if (!o) return Ql;
  o.drawImage(c, 0, 0, ri, ri);
  const { data: r } = o.getImageData(0, 0, ri, ri), h = /* @__PURE__ */ new Map();
  let p = 0, b = 0;
  for (let P = 0; P < r.length; P += 4) {
    if ((r[P + 3] ?? 0) < 200) continue;
    const be = r[P] ?? 0, ne = r[P + 1] ?? 0, ve = r[P + 2] ?? 0;
    p += (0.2126 * be + 0.7152 * ne + 0.0722 * ve) / 255, b++;
    const je = be >> 5 << 10 | ne >> 5 << 5 | ve >> 5, Ue = h.get(je);
    Ue ? (Ue.count++, Ue.r += be, Ue.g += ne, Ue.b += ve) : h.set(je, { count: 1, r: be, g: ne, b: ve });
  }
  if (b === 0) return Ql;
  const k = [...h.values()].map((P) => {
    const oe = P.r / P.count, be = P.g / P.count, ne = P.b / P.count, [ve, je, Ue] = Bh(oe, be, ne);
    return { h: ve, s: je, l: Ue, count: P.count, score: s1(P.count, je, Ue) };
  }).sort((P, oe) => oe.score - P.score), v = k[0];
  if (!v) return Ql;
  const m = k.find((P) => hh(P.h, v.h) > 35 && P.score > v.score * 0.12) ?? k.find((P) => Math.abs(P.l - v.l) > 0.18) ?? null, C = p / b < 0.55, U = La(v.h, la(v.s, 0.18, 0.85), la(v.l, 0.3, 0.62)), O = m ? La(m.h, la(m.s, 0.15, 0.8), la(m.l, 0.22, 0.55)) : La((v.h + 28) % 360, la(v.s * 0.8, 0.12, 0.7), la(v.l - 0.14, 0.18, 0.5)), K = b * 0.015, D = (P) => P.s * P.s * (1 - Math.abs(P.l - 0.5)) * Math.pow(P.count, 0.35), Z = [...k].filter((P) => P.count >= K && P.l > 0.12 && P.l < 0.9).sort((P, oe) => D(oe) - D(P))[0] ?? v, ee = Z.s < 0.12 ? La(Z.h, Math.min(Z.s, 0.05), 0.2) : La(Z.h, la(Math.max(Z.s, 0.55), 0.55, 0.85), la(Z.l, 0.4, 0.56)), he = [...k].filter(
    (P) => P !== Z && P.count >= K && P.s >= 0.25 && P.l > 0.15 && P.l < 0.88 && hh(P.h, Z.h) > 45
  ).sort((P, oe) => D(oe) - D(P))[0], ce = he ? La(he.h, la(Math.max(he.s, 0.5), 0.5, 0.85), la(he.l, 0.42, 0.6)) : Z.s < 0.12 ? La(Z.h, 0.04, 0.55) : La((Z.h + 50) % 360, la(Math.max(Z.s, 0.5), 0.5, 0.8), la(Z.l + 0.06, 0.45, 0.6));
  return {
    a: U,
    b: O,
    vivid: ee,
    vivid2: ce,
    deep: La(v.h, la(v.s * 0.55, 0.08, 0.4), 0.13),
    text: "hsl(0 0% 100%)",
    isDark: C
  };
}
function s1(c, u, o) {
  const r = 0.25 + u * 1.75, h = 1 - Math.pow(Math.abs(o - 0.5) * 2, 1.6);
  return c * r * Math.max(h, 0.05);
}
function hh(c, u) {
  const o = Math.abs(c - u) % 360;
  return o > 180 ? 360 - o : o;
}
function la(c, u, o) {
  return Math.min(o, Math.max(u, c));
}
function La(c, u, o) {
  return `hsl(${Math.round(c)} ${Math.round(u * 100)}% ${Math.round(o * 100)}%)`;
}
function Bh(c, u, o) {
  c /= 255, u /= 255, o /= 255;
  const r = Math.max(c, u, o), h = Math.min(c, u, o), p = (r + h) / 2, b = r - h;
  if (b === 0) return [0, 0, p];
  const k = p > 0.5 ? b / (2 - r - h) : b / (r + h);
  let v;
  return r === c ? v = ((u - o) / b + (u < o ? 6 : 0)) * 60 : r === u ? v = ((o - c) / b + 2) * 60 : v = ((c - u) / b + 4) * 60, [v, k, p];
}
function r1(c, u) {
  const o = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(c.trim());
  if (o) {
    const [h, p, b] = Bh(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
    return La((h + u + 360) % 360, p, b);
  }
  const r = /^hsl\(\s*([\d.]+)(?:deg)?[\s,]+([\d.]+)%[\s,]+([\d.]+)%/i.exec(c.trim());
  return r ? `hsl(${(Number(r[1]) + u + 360) % 360} ${r[2]}% ${r[3]}%)` : c;
}
const Zs = /* @__PURE__ */ new Map(), Lh = /^(https:\/\/[^/]*dzcdn\.net\/images\/[a-z]+\/[0-9a-f-]+\/)\d+x\d+(-[0-9a-f]{6}-)\d+(-\d+-\d+\.(?:jpg|png))$/;
function c1(c) {
  return !!(c && Lh.test(c));
}
function Xs(c, u) {
  if (!c) return c;
  const o = Lh.exec(c);
  if (!o) return c;
  const h = [120, 264, 500, 1e3, 1400].find((p) => p >= u) ?? 1400;
  return `${o[1]}${h}x${h}${o[2]}80${o[3]}`;
}
function o1(c) {
  let u = 2166136261;
  for (let o = 0; o < c.length; o++)
    u ^= c.charCodeAt(o), u = Math.imul(u, 16777619);
  return () => (u ^= u << 13, u ^= u >>> 17, u ^= u << 5, (u >>> 0) % 1e5 / 1e5);
}
function Ao(c, u = 640) {
  const o = Zs.get(c);
  if (o) return o;
  const r = document.createElement("canvas");
  r.width = u, r.height = u;
  const h = r.getContext("2d");
  if (!h) return "";
  const p = o1(c), b = Math.floor(p() * 360), k = (b + 140 + Math.floor(p() * 80)) % 360, v = p() > 0.45, m = v ? `hsl(${b} 42% 12%)` : `hsl(${b} 30% 88%)`, S = v ? `hsl(${k} 82% 60%)` : `hsl(${k} 68% 38%)`, C = v ? `hsl(${b} 38% 22%)` : `hsl(${b} 26% 74%)`;
  switch (h.fillStyle = m, h.fillRect(0, 0, u, u), Math.floor(p() * 4)) {
    case 0: {
      const O = u * (0.3 + p() * 0.4), K = u * (0.28 + p() * 0.24), D = u * (0.16 + p() * 0.12), Z = h.createRadialGradient(O, K, 0, O, K, D);
      Z.addColorStop(0, `hsl(${k} 90% 68%)`), Z.addColorStop(1, S), h.fillStyle = Z, h.beginPath(), h.arc(O, K, D, 0, Math.PI * 2), h.fill(), h.fillStyle = C;
      for (let ee = u * 0.62, he = 0; ee < u; ee += 10 + he * 2.2, he++)
        h.fillRect(0, ee, u, 4);
      break;
    }
    case 1: {
      h.save(), h.translate(u / 2, u / 2), h.rotate((p() - 0.5) * 1.1), h.translate(-u, -u);
      for (let O = 0; O < 22; O++)
        h.fillStyle = O % 3 === 0 ? S : O % 3 === 1 ? C : m, h.fillRect(0, O * (u / 9), u * 3, u / 18);
      h.restore();
      break;
    }
    case 2: {
      const O = u * (0.35 + p() * 0.3), K = u * (0.35 + p() * 0.3);
      for (let D = u * 0.62; D > 4; D -= u * 0.045)
        h.strokeStyle = D % (u * 0.09) < u * 0.05 ? S : C, h.lineWidth = u * 0.022, h.beginPath(), h.arc(O, K, D, 0, Math.PI * 2), h.stroke();
      break;
    }
    default: {
      const O = 3 + Math.floor(p() * 3), K = u / O;
      for (let D = 0; D < O; D++)
        for (let Z = 0; Z < O; Z++) {
          const ee = p();
          if (ee < 0.34) continue;
          h.fillStyle = ee < 0.68 ? C : S;
          const he = K * 0.06;
          h.fillRect(Z * K + he, D * K + he, K - he * 2, K - he * 2);
        }
    }
  }
  Yh(h, u);
  const U = r.toDataURL("image/jpeg", 0.86);
  return Zs.set(c, U), U;
}
function f1(c = 640) {
  const u = `♥:${c}`, o = Zs.get(u);
  if (o) return o;
  const r = document.createElement("canvas");
  r.width = c, r.height = c;
  const h = r.getContext("2d");
  if (!h) return "";
  const p = h.createLinearGradient(0, 0, c, c);
  p.addColorStop(0, "hsl(346 68% 34%)"), p.addColorStop(1, "hsl(326 62% 15%)"), h.fillStyle = p, h.fillRect(0, 0, c, c), h.strokeStyle = "hsl(0 0% 100% / 0.05)", h.lineWidth = c * 6e-3;
  for (let C = c * 0.08; C < c * 0.95; C += c * 0.028)
    h.beginPath(), h.arc(c * 0.5, c * 0.54, C, 0, Math.PI * 2), h.stroke();
  const b = c * 0.36, k = c / 2, v = c * 0.47;
  h.save(), h.shadowColor = "hsl(330 80% 8% / 0.5)", h.shadowBlur = c * 0.05, h.shadowOffsetY = c * 0.015;
  const m = h.createLinearGradient(0, v - b, 0, v + b);
  m.addColorStop(0, "hsl(352 100% 76%)"), m.addColorStop(1, "hsl(340 88% 58%)"), h.fillStyle = m, h.beginPath(), h.moveTo(k, v + b * 0.95), h.bezierCurveTo(k - b * 1.35, v + b * 0.05, k - b * 0.85, v - b * 0.95, k, v - b * 0.38), h.bezierCurveTo(k + b * 0.85, v - b * 0.95, k + b * 1.35, v + b * 0.05, k, v + b * 0.95), h.fill(), h.restore(), Yh(h, c);
  const S = r.toDataURL("image/jpeg", 0.88);
  return Zs.set(u, S), S;
}
function Yh(c, u) {
  const o = c.getImageData(0, 0, u, u);
  for (let r = 0; r < o.data.length; r += 4) {
    const h = (Math.random() - 0.5) * 9;
    o.data[r] = eo((o.data[r] ?? 0) + h), o.data[r + 1] = eo((o.data[r + 1] ?? 0) + h), o.data[r + 2] = eo((o.data[r + 2] ?? 0) + h);
  }
  c.putImageData(o, 0, 0);
}
function eo(c) {
  return c < 0 ? 0 : c > 255 ? 255 : c;
}
function d1({
  tab: c,
  items: u,
  hidden: o,
  reversed: r,
  canReverse: h,
  onToggleHidden: p,
  onToggleReversed: b,
  onSetVisible: k,
  onClose: v
}) {
  const [m, S] = z.useState(""), C = z.useMemo(() => {
    const Z = m.trim().toLowerCase();
    return Z ? u.filter(
      (ee) => ee.name.toLowerCase().includes(Z) || ee.artist.toLowerCase().includes(Z)
    ) : u;
  }, [m, u]), U = u.filter((Z) => !o.has(Z.uri)).length, O = u.filter((Z) => r.has(Z.uri)).length, K = c === "playlists" ? "playlist" : "album", D = (Z, ee) => `${Z} ${ee}${Z > 1 ? "s" : ""}`;
  return /* @__PURE__ */ f.jsxs("aside", { className: "manage sidepanel", role: "dialog", "aria-label": "Choisir ce qui s'affiche", children: [
    /* @__PURE__ */ f.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ f.jsxs("h2", { children: [
        c === "playlists" ? "Playlists du bac" : "Albums du bac",
        /* @__PURE__ */ f.jsxs("small", { children: [
          U,
          " sur ",
          D(u.length, K),
          " affiché",
          c === "playlists" ? "e" : "",
          U > 1 ? "s" : "",
          O > 0 ? ` · ${O} à l'envers` : ""
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: v, "aria-label": "Fermer le choix", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z",
          fill: "currentColor"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "manage__tools", children: [
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "search",
          value: m,
          placeholder: c === "playlists" ? "Filtrer les playlists…" : "Filtrer les albums…",
          "aria-label": "Filtrer la liste",
          onChange: (Z) => S(Z.target.value)
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { className: "manage__bulk", children: [
        /* @__PURE__ */ f.jsx("button", { onClick: () => k(C.map((Z) => Z.uri), !0), children: m.trim() ? "Afficher ceux-ci" : "Tout afficher" }),
        /* @__PURE__ */ f.jsx("button", { onClick: () => k(C.map((Z) => Z.uri), !1), children: m.trim() ? "Masquer ceux-ci" : "Tout masquer" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "manage__legend", "aria-hidden": "true", children: [
      /* @__PURE__ */ f.jsx("span", { children: "Visible" }),
      /* @__PURE__ */ f.jsx("span", { children: "À l'envers" })
    ] }),
    /* @__PURE__ */ f.jsxs("ul", { className: "sidepanel__list manage__list", children: [
      C.map((Z) => {
        const ee = !o.has(Z.uri), he = r.has(Z.uri);
        return /* @__PURE__ */ f.jsxs("li", { className: "manage__item", "data-hidden": !ee, children: [
          /* @__PURE__ */ f.jsx(
            "span",
            {
              className: "queue__art",
              style: { backgroundImage: Z.image ? `url("${Xs(Z.image, 120)}")` : void 0 }
            }
          ),
          /* @__PURE__ */ f.jsxs("span", { className: "sidepanel__text", children: [
            /* @__PURE__ */ f.jsx("b", { children: Z.name }),
            /* @__PURE__ */ f.jsx("span", { children: Z.pinned ? "♥ Favoris" : Z.artist || "Playlist" })
          ] }),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: "manage__switch",
              role: "switch",
              "aria-checked": ee,
              "aria-label": `Afficher « ${Z.name} » dans le bac`,
              onClick: () => p(Z.uri),
              children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: ee ? /* @__PURE__ */ f.jsx(
                "path",
                {
                  d: "M12 5c5 0 8.6 3.6 10 7-1.4 3.4-5 7-10 7S3.4 15.4 2 12c1.4-3.4 5-7 10-7zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                  fill: "currentColor"
                }
              ) : /* @__PURE__ */ f.jsx(
                "path",
                {
                  d: "m3.3 2 18.7 18.7-1.3 1.3-3.5-3.5A10.8 10.8 0 0 1 12 19c-5 0-8.6-3.6-10-7a12 12 0 0 1 3.7-4.8L2 3.3 3.3 2zm4 6.6a6 6 0 0 0-3.1 3.4C5.4 14.7 8.4 17 12 17c1.1 0 2.2-.2 3.2-.6l-1.6-1.6a4 4 0 0 1-5.4-5.4L7.3 8.6zM12 5c5 0 8.6 3.6 10 7a11.6 11.6 0 0 1-2.9 4.2l-1.4-1.4c.8-.8 1.5-1.8 1.9-2.8C18.6 9.3 15.6 7 12 7c-.7 0-1.4.1-2 .2L8.4 5.6C9.5 5.2 10.7 5 12 5z",
                  fill: "currentColor"
                }
              ) })
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: "manage__switch",
              role: "switch",
              "aria-checked": he,
              "aria-label": `Lire « ${Z.name} » à l'envers`,
              title: h ? "Du dernier morceau au premier" : "Demande la liaison Music Assistant",
              disabled: !h,
              onClick: () => b(Z.uri),
              children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M7 3 3 7h3v10h2V7h3L7 3zm10 18 4-4h-3V7h-2v10h-3l4 4z", fill: "currentColor" }) })
            }
          )
        ] }, Z.uri);
      }),
      C.length === 0 && /* @__PURE__ */ f.jsx("li", { className: "sidepanel__empty", children: "Rien ne correspond." })
    ] }),
    !h && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__note", children: "La lecture à l'envers passe par le module Music Assistant de Home Assistant ; sans lui, on lit dans l'ordre." })
  ] });
}
const mh = 7, to = 5, ao = 8, lo = 1.6, h1 = 0.5, m1 = 0.25, ph = 0.5, Rs = 2;
function p1({
  items: c,
  tab: u,
  onTab: o,
  favorite: r,
  allItems: h,
  hidden: p,
  reversed: b,
  canReverse: k,
  onToggleHidden: v,
  onToggleReversed: m,
  onSetVisible: S,
  loading: C,
  error: U,
  onPlay: O,
  onClose: K,
  resumeIndex: D,
  onFocusChange: Z,
  query: ee,
  onQuery: he,
  searching: ce,
  zoom: P
}) {
  const [oe, be] = z.useState(D ?? 0), [, ne] = z.useState(null), [ve, je] = z.useState(!1), [Ue, tt] = z.useState(!1), [fe, Pe] = z.useState({}), [De, V] = z.useState(null), E = z.useRef(null), B = z.useRef(null), X = z.useRef(c);
  X.current = c;
  const ae = z.useRef(b);
  ae.current = b;
  const W = z.useRef(D ?? 0), y = z.useRef(null), j = z.useRef(0), J = z.useRef(!1), G = z.useRef(!1), F = c.length, _ = z.useMemo(
    () => h.filter(($) => p.has($.uri)).length,
    [h, p]
  ), ue = Math.max(0, F - 1), Me = z.useMemo(() => {
    const $ = Math.max(0, oe - mh - to), re = Math.min(ue, oe + mh + to);
    return c.slice($, re + 1).map((Ee, Re) => ({ album: Ee, index: $ + Re }));
  }, [c, oe, ue]);
  z.useEffect(() => {
    let $ = !0;
    for (const { album: re } of Me)
      !re.image || re.uri in fe || Rh(re.image).then((Ee) => {
        $ && Pe((Re) => re.uri in Re ? Re : { ...Re, [re.uri]: Ee });
      });
    return () => {
      $ = !1;
    };
  }, [Me, fe]);
  const ze = z.useRef({ cover: 0, radius: 0 }), Yt = z.useCallback(() => {
    const $ = E.current;
    if (!$) return;
    const re = $.getBoundingClientRect();
    if (re.width === 0 || re.height === 0) return;
    const Ee = Math.min(re.height * 0.72, re.width * 0.42), Re = Math.round(
      Math.max(90, Math.min(re.height * 0.94, re.width * 0.6, Ee * P))
    );
    $.style.setProperty("--cover", Re + "px"), ze.current = { cover: Re, radius: Re * lo };
  }, []), Xe = z.useCallback(($) => {
    W.current = $;
    const re = E.current;
    if (!re) return;
    re.dataset.offset = $.toFixed(4);
    const { radius: Ee } = ze.current;
    if (Ee)
      for (const Re of re.children) {
        const xt = Re, Ht = Number(xt.dataset.i);
        if (!Number.isFinite(Ht)) continue;
        const qe = Ht - $, st = qe * ao, ht = st * Math.PI / 180;
        xt.style.transform = `translateX(${(Math.sin(ht) * Ee).toFixed(2)}px) translateZ(${((Math.cos(ht) - 1) * Ee).toFixed(2)}px) rotateY(${(90 + st).toFixed(3)}deg)`, xt.style.zIndex = String(100 - Math.round(Math.abs(qe)));
        const _e = Math.min(0.22, Math.abs(qe) * 0.013).toFixed(3), Qe = xt.getElementsByClassName("crate__depth");
        for (const pt of Qe) pt.style.opacity = _e;
      }
  }, []);
  z.useEffect(() => {
    Yt(), Xe(W.current);
    const $ = () => {
      Yt(), Xe(W.current);
    };
    return window.addEventListener("resize", $), () => window.removeEventListener("resize", $);
  }, [Yt, Xe, F]), z.useEffect(() => {
    if (y.current === u || F === 0) return;
    y.current = u;
    const $ = Math.min(ue, D ?? Math.floor(F / 2));
    j.current = 0, Xe($), be($);
  }, [F, ue, D, u, Xe]);
  const ia = z.useRef(!1);
  z.useEffect(() => {
    const $ = ee.trim().length > 0;
    !$ && !ia.current || (ia.current = $, j.current = 0, Xe(0), be(0));
  }, [ee, F, Xe]), z.useEffect(() => {
    let $ = 0, re = performance.now(), Ee = -1, Re;
    const xt = (Ht) => {
      const qe = Math.min(0.05, (Ht - re) / 1e3);
      re = Ht;
      let st = W.current;
      if (!J.current) {
        if (Math.abs(j.current) > m1)
          st = W.current + j.current * qe, j.current *= Math.exp(-qe / h1), (st < 0 || st > ue) && (st = Math.max(0, Math.min(ue, st)), j.current = 0);
        else if (F > 0) {
          j.current = 0;
          const _e = Math.max(0, Math.min(ue, Math.round(W.current))), Qe = _e - W.current;
          st = Math.abs(Qe) > 8e-4 ? W.current + Qe * (1 - Math.exp(-qe / 0.16)) : _e;
        }
      }
      Xe(st);
      const ht = Math.round(W.current);
      if (ht !== Ee) {
        Ee !== -1 && navigator.vibrate?.(8), Ee = ht, Z(ht), be((pt) => Math.abs(ht - pt) >= to ? ht : pt);
        const _e = X.current[ht], Qe = B.current;
        Qe && (Qe.querySelector("b").textContent = _e?.name ?? "", Qe.querySelector("span").textContent = _e ? v1(_e) + (ae.current.has(_e.uri) ? " · lue à l'envers" : "") : "", Qe.dataset.pinned = String(!!_e?.pinned)), clearTimeout(Re), Re = setTimeout(() => V(_e?.image ?? null), 260);
      }
      $ = requestAnimationFrame(xt);
    };
    return $ = requestAnimationFrame(xt), () => {
      cancelAnimationFrame($), clearTimeout(Re);
    };
  }, [c, b, F, ue, Xe, Z]);
  const Dt = () => {
    const { cover: $ } = ze.current;
    return $ ? $ * lo * (ao * Math.PI / 180) : 1;
  }, bt = ($) => {
    const re = $.clientX, Ee = W.current, Re = Dt();
    let xt = re, Ht = performance.now(), qe = !1;
    J.current = !0, G.current = !1, j.current = 0;
    const st = (_e) => {
      const Qe = _e.clientX - re;
      if (!qe && Math.abs(Qe) < 4) return;
      qe = !0, G.current = !0;
      let pt = Ee - Qe / Re * ph;
      pt < 0 ? pt = pt * 0.35 : pt > ue && (pt = ue + (pt - ue) * 0.35), Xe(pt);
      const ua = performance.now(), sa = (ua - Ht) / 1e3;
      if (sa > 8e-3) {
        const Fl = -((_e.clientX - xt) / Re * ph) / sa;
        j.current = Math.max(-Rs, Math.min(Rs, Fl)), xt = _e.clientX, Ht = ua;
      }
    }, ht = () => {
      J.current = !1, qe ? window.setTimeout(() => G.current = !1, 0) : j.current = 0, window.removeEventListener("pointermove", st), window.removeEventListener("pointerup", ht), window.removeEventListener("pointercancel", ht);
    };
    window.addEventListener("pointermove", st), window.addEventListener("pointerup", ht), window.addEventListener("pointercancel", ht);
  }, jt = z.useCallback(
    ($) => {
      j.current = 0;
      const re = Math.max(0, Math.min(ue, $)), Ee = W.current, Re = performance.now(), xt = (Ht) => {
        const qe = Math.min(1, (Ht - Re) / 420), st = 1 - Math.pow(1 - qe, 3);
        Xe(Ee + (re - Ee) * st), qe < 1 && requestAnimationFrame(xt);
      };
      requestAnimationFrame(xt);
    },
    [ue, Xe]
  ), Sa = ($) => {
    const re = Math.abs($.deltaX) > Math.abs($.deltaY) ? $.deltaX : $.deltaY;
    j.current = Math.max(-Rs, Math.min(Rs, j.current + re * 5e-3));
  };
  z.useEffect(() => {
    const $ = (re) => {
      if (re.key === "Escape") {
        Ue ? tt(!1) : K();
        return;
      }
      Hh(re) || Ue || (re.key === "ArrowRight" ? jt(Math.round(W.current) + 1) : re.key === "ArrowLeft" && jt(Math.round(W.current) - 1));
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [jt, Ue, K]);
  const En = ($, re) => {
    if (G.current) return;
    const Ee = c[$];
    !Ee || ve || (je(!0), ne($), O(Ee, re));
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "library", children: [
    /* @__PURE__ */ f.jsx(Dh, { image: De, className: "library__ambient" }),
    /* @__PURE__ */ f.jsxs("header", { className: "library__head", children: [
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: K, "aria-label": "Retour à la platine", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M14.6 5.4 8 12l6.6 6.6 1.6-1.6-5-5 5-5z", fill: "currentColor" }) }) }),
      /* @__PURE__ */ f.jsxs("label", { className: "library__search", children: [
        /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
          "path",
          {
            d: "M10.5 3a7.5 7.5 0 1 1-4.6 13.4l-3.2 3.2-1.4-1.4 3.2-3.2A7.5 7.5 0 0 1 10.5 3zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ f.jsx(
          "input",
          {
            type: "search",
            value: ee,
            placeholder: u === "playlists" ? "Chercher une playlist…" : "Chercher un album, un artiste…",
            "aria-label": "Chercher dans Deezer",
            onChange: ($) => he($.target.value)
          }
        ),
        ee && /* @__PURE__ */ f.jsx("button", { type: "button", onClick: () => he(""), "aria-label": "Effacer la recherche", children: "×" })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "library__tabs", role: "tablist", "aria-label": "Contenu du bac", children: [
        ["albums", "Albums"],
        ["playlists", "Playlists"]
      ].map(([$, re]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          role: "tab",
          "aria-selected": u === $,
          "data-on": u === $,
          onClick: () => o($),
          children: re
        },
        $
      )) }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "library__manage",
          "data-on": Ue,
          "aria-label": "Choisir ce qui s'affiche",
          title: "Choisir ce qui s'affiche",
          onClick: () => tt(($) => !$),
          children: [
            /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
              "path",
              {
                d: "M4 6h9.2a3 3 0 0 1 5.6 0H20v2h-1.2a3 3 0 0 1-5.6 0H4V6zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4 16h1.2a3 3 0 0 1 5.6 0H20v2h-9.2a3 3 0 0 1-5.6 0H4v-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
                fill: "currentColor"
              }
            ) }),
            _ > 0 && /* @__PURE__ */ f.jsx("span", { className: "library__badge", children: _ })
          ]
        }
      ),
      r && /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "library__fav",
          title: `Écouter « ${r.name} »`,
          onClick: ($) => {
            ve || (je(!0), O(r, $.currentTarget));
          },
          children: [
            /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
              "path",
              {
                d: "M12 20.6 10.6 19.3C5.6 14.8 2.3 11.8 2.3 8.1 2.3 5.1 4.6 2.8 7.6 2.8c1.7 0 3.3.8 4.4 2 1.1-1.2 2.7-2 4.4-2 3 0 5.3 2.3 5.3 5.3 0 3.7-3.3 6.7-8.3 11.2L12 20.6z",
                fill: "currentColor"
              }
            ) }),
            /* @__PURE__ */ f.jsx("span", { children: r.name })
          ]
        }
      ),
      /* @__PURE__ */ f.jsx("span", { className: "library__count", children: C || ce ? "recherche…" : ee.trim() ? `${F} résultat${F > 1 ? "s" : ""}` : u === "playlists" ? `${F} playlist${F > 1 ? "s" : ""}` : `${F} album${F > 1 ? "s" : ""}` })
    ] }),
    U && /* @__PURE__ */ f.jsx("p", { className: "library__error", children: U }),
    F === 0 && !C && !ce && !ee.trim() && _ > 0 && /* @__PURE__ */ f.jsx("p", { className: "library__empty", children: "Tout est masqué dans ce bac. Le réglage à côté des onglets permet d'en réafficher." }),
    Ue && /* @__PURE__ */ f.jsx(
      d1,
      {
        tab: u,
        items: h,
        hidden: p,
        reversed: b,
        canReverse: k,
        onToggleHidden: v,
        onToggleReversed: m,
        onSetVisible: S,
        onClose: () => tt(!1)
      }
    ),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: "crate",
        ref: E,
        onPointerDown: bt,
        onWheel: Sa,
        style: { "--arc": `${ao}deg`, "--radius-k": lo },
        children: Me.map(({ album: $, index: re }) => /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: "crate__item",
            "data-i": re,
            onClick: (Ee) => En(re, Ee.currentTarget),
            role: "button",
            tabIndex: 0,
            onKeyDown: (Ee) => Ee.key === "Enter" && En(re, Ee.currentTarget),
            children: [
              ["front", "back"].map((Ee) => /* @__PURE__ */ f.jsxs("div", { className: `crate__face crate__face--${Ee}`, children: [
                $.image ? /* @__PURE__ */ f.jsx("img", { className: "crate__art", src: $.image, alt: "", draggable: !1 }) : /* @__PURE__ */ f.jsx("div", { className: "crate__art crate__art--empty" }),
                /* @__PURE__ */ f.jsx("div", { className: "crate__shade" }),
                /* @__PURE__ */ f.jsx("div", { className: "crate__depth" })
              ] }, Ee)),
              /* @__PURE__ */ f.jsx("div", { className: "crate__spine", children: /* @__PURE__ */ f.jsx(
                "div",
                {
                  className: "crate__spineFace",
                  style: {
                    "--spine-a": (fe[$.uri] ?? Ql).b,
                    "--spine-b": (fe[$.uri] ?? Ql).deep
                  },
                  children: /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: "crate__label",
                      "data-ink": fe[$.uri]?.isDark === !1 ? "dark" : "light",
                      children: [
                        /* @__PURE__ */ f.jsx("b", { children: $.name }),
                        /* @__PURE__ */ f.jsx("span", { children: $.artist })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ f.jsx("div", { className: "crate__opening" })
            ]
          },
          $.uri
        ))
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "library__caption", ref: B, children: [
      /* @__PURE__ */ f.jsx("b", {}),
      /* @__PURE__ */ f.jsx("span", {})
    ] })
  ] });
}
function v1(c) {
  return c.kind === "playlist" ? c.pinned ? "Vos coups de cœur" : "Playlist" : c.kind === "track" ? c.artist ? `${c.artist} · titre` : "Titre" : c.artist;
}
function Hh(c) {
  const u = c.composedPath()[0] ?? c.target, o = u?.tagName;
  return o === "INPUT" || o === "TEXTAREA" || o === "SELECT" || !!u?.isContentEditable;
}
function g1({ lyrics: c, activeIndex: u, loading: o, onClose: r, onSeek: h }) {
  const p = z.useRef(null), b = z.useRef(null), k = z.useRef([]);
  z.useLayoutEffect(() => {
    const m = p.current, S = b.current;
    if (!m || !S) return;
    const C = k.current[u] ?? k.current[0];
    if (!C) return;
    const U = m.clientHeight / 2 - (C.offsetTop + C.offsetHeight / 2);
    S.style.transform = `translateY(${U}px)`;
  }, [u, c]), z.useEffect(() => {
    const m = (S) => S.key === "Escape" && r();
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [r]);
  const v = c.synced && c.lines.length > 0;
  return /* @__PURE__ */ f.jsxs("div", { className: "lyrics", onClick: r, children: [
    o && /* @__PURE__ */ f.jsx("p", { className: "lyrics__empty", children: "Recherche des paroles…" }),
    !o && c.instrumental && /* @__PURE__ */ f.jsx("p", { className: "lyrics__empty", children: "Morceau instrumental" }),
    !o && !c.instrumental && !v && !c.plain && /* @__PURE__ */ f.jsx("p", { className: "lyrics__empty", children: "Pas de paroles trouvées pour ce morceau" }),
    !o && !v && c.plain && /* @__PURE__ */ f.jsx("div", { className: "lyrics__scroll", ref: p, children: /* @__PURE__ */ f.jsx("div", { className: "lyrics__inner", ref: b, children: c.plain.split(`
`).map((m, S) => /* @__PURE__ */ f.jsx("p", { className: "lyrics__line", "data-active": "true", children: m || " " }, S)) }) }),
    !o && v && /* @__PURE__ */ f.jsx("div", { className: "lyrics__scroll", ref: p, children: /* @__PURE__ */ f.jsx("div", { className: "lyrics__inner", ref: b, children: c.lines.map((m, S) => /* @__PURE__ */ f.jsx(
      "p",
      {
        className: "lyrics__line",
        ref: (C) => {
          k.current[S] = C;
        },
        "data-active": S === u,
        "data-past": S < u,
        onClick: (C) => {
          C.stopPropagation(), h(m.time);
        },
        children: m.text || " "
      },
      S
    )) }) })
  ] });
}
var y1 = Oh();
const b1 = ["coulee", "nebuleuse", "nuit", "brume", "aurore"], vh = { service: "", entityId: "" };
function x1(c) {
  return c.service.trim().includes(".");
}
const Vh = "mdvinyl.settings.v1", gu = {
  haUrl: typeof __DEV_URL__ == "string" ? __DEV_URL__ : "",
  token: typeof __DEV_TOKEN__ == "string" ? __DEV_TOKEN__ : "",
  entityId: typeof __DEV_ENTITY__ == "string" ? __DEV_ENTITY__ : "",
  /*
   * Réglages d'origine choisis pour que la platine soit à son avantage dès la
   * première ouverture, sans rien toucher : disque marbré prenant la couleur de
   * la pochette en cours, fond adaptatif, écran de repos après deux minutes.
   *
   * vinylTint vide ne veut pas dire « pas de couleur » : cela veut dire « suivre
   * la pochette ». Le disque change donc de teinte avec l'album.
   */
  vinyl: "marble",
  marbleMotif: "coulee",
  background: "adaptive",
  playControl: "arm",
  counterRotateLabel: !1,
  rpm: 33.3333,
  vinylTint: "",
  labelText: "",
  libraryZoom: 1,
  lyrics: !0,
  idleMinutes: 2,
  onPlay: { ...vh },
  onStop: { ...vh }
};
function Vs() {
  try {
    const c = localStorage.getItem(Vh);
    if (!c) return { ...gu };
    const u = { ...gu, ...JSON.parse(c) };
    return b1.includes(u.marbleMotif) || (u.marbleMotif = gu.marbleMotif), u;
  } catch {
    return { ...gu };
  }
}
function fo(c) {
  try {
    localStorage.setItem(Vh, JSON.stringify(c));
  } catch {
  }
}
function gh(c) {
  return c.token.trim().length > 0 && c.entityId.trim().length > 0;
}
function xu(c) {
  return (c.haUrl || window.location.origin).replace(/\/+$/, "");
}
let fi = 0;
async function yh(c) {
  try {
    const u = Date.now(), o = await fetch(`${xu(c)}/api/`, {
      headers: { Authorization: `Bearer ${c.token}` },
      cache: "no-store"
    }), r = Date.now(), h = o.headers.get("date");
    if (!h) return fi;
    const p = Date.parse(h);
    return Number.isNaN(p) || (fi = (u + r) / 2 - (p + 500)), fi;
  } catch {
    return fi;
  }
}
const S1 = { position: 0, duration: 0, progress: 0, playing: !1 };
function E1(c, u = Date.now()) {
  if (!c) return S1;
  const o = c.attributes, r = Number(o.media_duration ?? 0) || 0, h = Number(o.media_position ?? 0) || 0, p = c.state === "playing";
  let b = h;
  if (p && o.media_position_updated_at) {
    const k = Date.parse(o.media_position_updated_at);
    if (!Number.isNaN(k)) {
      const v = u - fi - k;
      v > 0 && (b = h + v / 1e3);
    }
  }
  return r > 0 && (b = Math.min(b, r)), b = Math.max(0, b), {
    position: b,
    duration: r,
    progress: r > 0 ? b / r : 0,
    playing: p
  };
}
function Gs(c) {
  (!Number.isFinite(c) || c < 0) && (c = 0);
  const u = Math.floor(c), o = Math.floor(u / 3600), r = Math.floor(u % 3600 / 60), h = u % 60;
  return o > 0 ? `${o}:${String(r).padStart(2, "0")}:${String(h).padStart(2, "0")}` : `${r}:${String(h).padStart(2, "0")}`;
}
const A1 = 380, z1 = 8, ci = 56, bh = 84;
function w1({
  items: c,
  loading: u,
  error: o,
  current: r,
  locked: h,
  full: p,
  total: b,
  note: k,
  pending: v,
  onPick: m,
  onMove: S,
  onPlayNext: C,
  onRemove: U,
  onSorting: O,
  onClose: K
}) {
  const D = z.useRef(null), Z = z.useRef(null), ee = z.useRef(!1), he = z.useRef(!1), ce = (V) => p && V > h && V < c.length, [P, oe] = z.useState(null), [be, ne] = z.useState(null), ve = (V) => {
    const E = c[V];
    if (!p || !E || V === r || E.id === v) return [];
    const B = [];
    return V !== h + 1 && B.push("next"), V > h && B.push("remove"), B;
  }, je = (V, E, B) => {
    oe(null), ne(B.id), window.setTimeout(() => ne((X) => X === B.id ? null : X), 1500), V === "next" ? C(E) : U(E), requestAnimationFrame(
      () => requestAnimationFrame(
        () => D.current?.querySelector(`[data-id="${CSS.escape(B.id)}"]`)?.scrollIntoView({ block: "nearest", behavior: "smooth" })
      )
    );
  }, Ue = (V) => {
    const E = D.current;
    if (!E) return;
    const B = V.lastY - V.startY + (E.scrollTop - V.startScroll), X = Math.max(V.min, Math.min(V.rows.length - 1, V.from + Math.round(B / V.pitch)));
    V.rows[V.from].style.transform = `translateY(${B}px) scale(1.02)`, X !== V.to && (V.to = X, V.rows.forEach((ae, W) => {
      if (W === V.from) return;
      const y = V.from < W && W <= X ? -V.pitch : X <= W && W < V.from ? V.pitch : 0;
      ae.style.transform = y ? `translateY(${y}px)` : "";
    }), navigator.vibrate?.(6));
  }, tt = (V, E) => {
    const B = D.current;
    if (!B || Z.current || !ce(V)) return;
    const X = [...B.querySelectorAll(":scope > .queue__item")], ae = X[V];
    if (!ae) return;
    const W = X.length > 1 ? X[1].offsetTop - X[0].offsetTop : ae.offsetHeight || 64, y = {
      from: V,
      to: V,
      pitch: W,
      startY: E,
      lastY: E,
      startScroll: B.scrollTop,
      rows: X,
      min: Math.max(0, h + 1),
      raf: 0
    };
    Z.current = y, oe(null), O?.(!0), B.dataset.sorting = "true", ae.dataset.lifted = "true", navigator.vibrate?.(12);
    const j = () => {
      const F = B.getBoundingClientRect();
      let _ = 0;
      y.lastY < F.top + ci ? _ = -((F.top + ci - y.lastY) / ci) * 14 : y.lastY > F.bottom - ci && (_ = (y.lastY - (F.bottom - ci)) / ci * 14), _ && (B.scrollTop += _, Ue(y)), y.raf = requestAnimationFrame(j);
    };
    y.raf = requestAnimationFrame(j);
    const J = (F) => {
      y.lastY = F.clientY, Ue(y);
    }, G = (F) => {
      window.removeEventListener("pointermove", J), window.removeEventListener("pointerup", G), window.removeEventListener("pointercancel", G), fe(F.type === "pointerup");
    };
    window.addEventListener("pointermove", J), window.addEventListener("pointerup", G), window.addEventListener("pointercancel", G);
  }, fe = (V) => {
    const E = Z.current, B = D.current;
    if (!E || !B) return;
    cancelAnimationFrame(E.raf), Z.current = null;
    const X = E.rows[E.from], ae = V && E.to !== E.from;
    if (X.style.transition = "transform 150ms cubic-bezier(0.22, 1, 0.36, 1)", X.style.transform = ae ? `translateY(${(E.to - E.from) * E.pitch}px)` : "", !ae)
      for (const W of E.rows) W !== X && (W.style.transform = "");
    window.setTimeout(() => {
      B.dataset.settling = "true", ae && y1.flushSync(() => S(E.from, E.to));
      for (const W of E.rows)
        W.style.transform = "", W.style.transition = "";
      delete X.dataset.lifted, delete B.dataset.sorting, O?.(!1), ee.current = !1, requestAnimationFrame(() => requestAnimationFrame(() => delete B.dataset.settling));
    }, 150);
  }, Pe = (V, E) => {
    if (E.pointerType === "mouse" && E.button !== 0) return;
    const B = c[V], X = E.currentTarget.closest(".queue__item"), ae = X?.querySelector(".queue__tray") ?? null, W = ve(V).length * bh, y = W > 0 && ae !== null, j = ce(V);
    if (!B || !y && !j) return;
    const J = E.clientX, G = E.clientY;
    let F = G, _ = !1;
    const ue = P === B.id ? -W : 0;
    let Me = ue;
    const ze = j ? window.setTimeout(() => {
      ia(), ee.current = !0, tt(V, F);
    }, A1) : void 0, Yt = (Dt) => {
      F = Dt.clientY;
      const bt = Dt.clientX - J, jt = Dt.clientY - G;
      if (!_)
        if (y && Math.abs(bt) > 10 && Math.abs(bt) > Math.abs(jt) * 1.4)
          _ = !0, clearTimeout(ze), ae.style.transition = "none", X && (X.dataset.swiping = "true");
        else if (Math.hypot(bt, jt) > z1) {
          ia();
          return;
        } else
          return;
      const Sa = ue + bt;
      Me = Sa < -W ? -W + (Sa + W) * 0.25 : Math.min(0, Sa), ae.style.transform = `translateX(${W + Me}px)`;
    }, Xe = () => {
      _ && ae && (ee.current = !0, window.setTimeout(() => ee.current = !1, 0), ae.style.transition = "", ae.style.transform = "", X && delete X.dataset.swiping, oe(Me < -W / 2 ? B.id : null)), ia();
    }, ia = () => {
      clearTimeout(ze), window.removeEventListener("pointermove", Yt), window.removeEventListener("pointerup", Xe), window.removeEventListener("pointercancel", Xe);
    };
    window.addEventListener("pointermove", Yt), window.addEventListener("pointerup", Xe), window.addEventListener("pointercancel", Xe);
  };
  z.useEffect(() => {
    const V = D.current;
    if (!V) return;
    const E = (X) => {
      Z.current && X.preventDefault();
    }, B = (X) => X.preventDefault();
    return V.addEventListener("touchmove", E, { passive: !1 }), V.addEventListener("contextmenu", B), () => {
      V.removeEventListener("touchmove", E), V.removeEventListener("contextmenu", B);
    };
  }, []), z.useLayoutEffect(() => {
    const V = D.current;
    if (!V || he.current || c.length === 0 || r < 0) return;
    he.current = !0;
    const E = V.children[r - 1];
    V.scrollTop = E ? Math.max(0, E.offsetTop - 8) : 0;
  }, [c.length, r]);
  const De = c.slice(Math.max(0, r)).reduce((V, E) => V + E.duration, 0);
  return /* @__PURE__ */ f.jsxs("aside", { className: "queue sidepanel", role: "dialog", "aria-label": "File d'attente", children: [
    /* @__PURE__ */ f.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ f.jsxs("h2", { children: [
        "À suivre",
        b > 0 && /* @__PURE__ */ f.jsxs("small", { children: [
          b,
          " titre",
          b > 1 ? "s" : "",
          p && De > 0 ? ` · ${M1(De)}` : ""
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: K, "aria-label": "Fermer la file", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z",
          fill: "currentColor"
        }
      ) }) })
    ] }),
    o && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__error", children: o }),
    u && c.length === 0 && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__empty", children: "Lecture de la file…" }),
    !u && !o && c.length === 0 && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__empty", children: "La file est vide." }),
    /* @__PURE__ */ f.jsx("ol", { className: "sidepanel__list queue__list", ref: D, children: c.map((V, E) => {
      const X = v !== null && V.id === v ? "now" : v !== null ? "next" : E === r ? "now" : r >= 0 && E < r ? "past" : "next", ae = ce(E), W = ve(E), y = P === V.id;
      return /* @__PURE__ */ f.jsxs(
        "li",
        {
          className: "queue__item",
          "data-id": V.id,
          "data-state": X,
          "data-movable": ae,
          "data-open": y,
          "data-flash": be === V.id,
          style: { "--tray": `${W.length * bh}px` },
          children: [
            W.length > 0 && /* @__PURE__ */ f.jsxs("div", { className: "queue__tray", children: [
              W.includes("next") && /* @__PURE__ */ f.jsxs(
                "button",
                {
                  className: "queue__action queue__action--next",
                  tabIndex: y ? 0 : -1,
                  onClick: () => je("next", E, V),
                  children: [
                    /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M3 5.5v9L10 10zM12 6h9v2h-9zm0 5h9v2h-9zm-9 5h18v2H3z", fill: "currentColor" }) }),
                    /* @__PURE__ */ f.jsx("span", { children: "Ensuite" })
                  ]
                }
              ),
              W.includes("remove") && /* @__PURE__ */ f.jsxs(
                "button",
                {
                  className: "queue__action queue__action--remove",
                  tabIndex: y ? 0 : -1,
                  onClick: () => je("remove", E, V),
                  children: [
                    /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
                      "path",
                      {
                        d: "M9 3h6l1 2h4v2H4V5h4zm-3 6h12l-1 12H7zm4 2v8h1.6v-8zm2.4 0v8H14v-8z",
                        fill: "currentColor"
                      }
                    ) }),
                    /* @__PURE__ */ f.jsx("span", { children: "Retirer" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "queue__row", children: [
              /* @__PURE__ */ f.jsxs(
                "button",
                {
                  className: "queue__pick",
                  onPointerDown: (j) => Pe(E, j),
                  onClick: () => {
                    if (ee.current) {
                      ee.current = !1;
                      return;
                    }
                    if (P !== null) {
                      oe(null);
                      return;
                    }
                    m(V);
                  },
                  disabled: !V.uri && !p,
                  title: `Aller à « ${V.name} »`,
                  children: [
                    /* @__PURE__ */ f.jsx(
                      "span",
                      {
                        className: "queue__art",
                        style: { backgroundImage: V.image ? `url("${Xs(V.image, 120)}")` : void 0 },
                        children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M8 5.2v13.6L19 12z", fill: "currentColor" }) })
                      }
                    ),
                    /* @__PURE__ */ f.jsxs("span", { className: "sidepanel__text", children: [
                      /* @__PURE__ */ f.jsx("b", { children: V.name }),
                      /* @__PURE__ */ f.jsx("span", { children: V.artist })
                    ] }),
                    /* @__PURE__ */ f.jsx("span", { className: "queue__time", children: V.duration > 0 ? Gs(V.duration) : "" })
                  ]
                }
              ),
              W.length > 0 && /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: "queue__more",
                  "aria-label": `Actions pour « ${V.name} »`,
                  "aria-expanded": y,
                  title: "Écouter ensuite, retirer…",
                  onClick: () => oe((j) => j === V.id ? null : V.id),
                  children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
                    "path",
                    {
                      d: "M6 10.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zm6 0a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zm6 0a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z",
                      fill: "currentColor"
                    }
                  ) })
                }
              ),
              ae && /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: "queue__grip",
                  "aria-label": `Déplacer « ${V.name} »`,
                  title: "Glisser pour déplacer",
                  onPointerDown: (j) => {
                    j.pointerType === "mouse" && j.button !== 0 || (j.preventDefault(), tt(E, j.clientY));
                  },
                  onKeyDown: (j) => {
                    j.key === "ArrowUp" && ce(E - 1) ? (j.preventDefault(), S(E, E - 1)) : j.key === "ArrowDown" && E + 1 < c.length && (j.preventDefault(), S(E, E + 1));
                  },
                  children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z", fill: "currentColor" }) })
                }
              )
            ] })
          ]
        },
        V.id
      );
    }) }),
    k && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__note", children: k })
  ] });
}
function M1(c) {
  const u = Math.round(c / 60);
  if (u < 60) return `${u} min`;
  const o = Math.floor(u / 60), r = u % 60;
  return r ? `${o} h ${String(r).padStart(2, "0")}` : `${o} h`;
}
function T1({ onWake: c }) {
  const [u, o] = z.useState(() => /* @__PURE__ */ new Date());
  z.useEffect(() => {
    let p;
    const b = () => {
      const k = /* @__PURE__ */ new Date();
      o(k), p = setTimeout(b, 6e4 - (k.getSeconds() * 1e3 + k.getMilliseconds()));
    };
    return b(), () => clearTimeout(p);
  }, []);
  const r = u.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }), h = u.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  return /* @__PURE__ */ f.jsxs("div", { className: "rest", onPointerDown: c, role: "button", tabIndex: 0, "aria-label": "Réveiller", children: [
    /* @__PURE__ */ f.jsx("div", { className: "rest__clock", children: r }),
    /* @__PURE__ */ f.jsx("div", { className: "rest__date", children: h }),
    /* @__PURE__ */ f.jsx("div", { className: "rest__hint", children: "Toucher pour revenir" })
  ] });
}
const N1 = {
  playing: "en lecture",
  paused: "en pause",
  idle: "au repos",
  off: "éteinte",
  standby: "en veille",
  unavailable: "indisponible"
};
function C1({
  players: c,
  current: u,
  loading: o,
  error: r,
  onListen: h,
  onTransfer: p,
  onClose: b
}) {
  const k = c.filter((S) => S.attributes.mass_player_type !== void 0), v = c.filter((S) => S.attributes.mass_player_type === void 0), m = [
    {
      titre: "Pilotées par Music Assistant",
      note: "Celles qui savent recevoir un disque et un transfert de file.",
      membres: k
    },
    {
      titre: "Autres lecteurs",
      note: "Vus par Home Assistant, mais hors de portée de Music Assistant.",
      membres: v
    }
  ];
  return /* @__PURE__ */ f.jsxs("aside", { className: "speakers sidepanel", role: "dialog", "aria-label": "Enceintes", children: [
    /* @__PURE__ */ f.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ f.jsx("h2", { children: "Enceintes" }),
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: b, "aria-label": "Fermer les enceintes", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z",
          fill: "currentColor"
        }
      ) }) })
    ] }),
    r && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__error", children: r }),
    o && c.length === 0 && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__empty", children: "Recherche des enceintes…" }),
    /* @__PURE__ */ f.jsx("ul", { className: "sidepanel__list", children: m.map(({ titre: S, note: C, membres: U }) => /* @__PURE__ */ f.jsxs(z.Fragment, { children: [
      U.length > 0 && /* @__PURE__ */ f.jsxs("li", { className: "speakers__group", children: [
        /* @__PURE__ */ f.jsx("h3", { children: S }),
        /* @__PURE__ */ f.jsx("p", { children: C })
      ] }),
      U.map((O) => {
        const K = O.entity_id === u, D = O.state === "unavailable";
        return /* @__PURE__ */ f.jsxs(
          "li",
          {
            className: "speakers__item",
            "data-here": K,
            "data-entity": O.entity_id,
            children: [
              /* @__PURE__ */ f.jsxs(
                "button",
                {
                  className: "speakers__pick",
                  onClick: () => h(O.entity_id),
                  disabled: K || D,
                  title: K ? "C'est l'enceinte affichée" : "Afficher cette enceinte",
                  children: [
                    /* @__PURE__ */ f.jsx("span", { className: "speakers__dot", "data-on": O.state === "playing" }),
                    /* @__PURE__ */ f.jsxs("span", { className: "sidepanel__text", children: [
                      /* @__PURE__ */ f.jsx("b", { children: O.attributes.friendly_name ?? O.entity_id }),
                      /* @__PURE__ */ f.jsxs("span", { children: [
                        K ? "affichée ici" : N1[O.state] ?? O.state,
                        O.attributes.media_title ? ` · ${O.attributes.media_title}` : ""
                      ] })
                    ] })
                  ]
                }
              ),
              !K && !D && O.attributes.mass_player_type !== void 0 && /* @__PURE__ */ f.jsxs(
                "button",
                {
                  className: "speakers__move",
                  onClick: () => p(O.entity_id),
                  title: "Reprendre la lecture dans cette pièce",
                  children: [
                    /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
                      "path",
                      {
                        d: "M4 12.5a5.5 5.5 0 0 1 5.5-5.5h6.8l-2.6-2.6L15.1 3l4.5 4.5-4.5 4.5-1.4-1.4 2.6-2.6H9.5A3.5 3.5 0 0 0 6 11.5v.9H4zm16 -.9a5.5 5.5 0 0 1-5.5 5.5H7.7l2.6 2.6L8.9 21l-4.5-4.5L8.9 12l1.4 1.4-2.6 2.6h6.8a3.5 3.5 0 0 0 3.5-3.5v-.9h2z",
                        fill: "currentColor"
                      }
                    ) }),
                    "Y emmener la musique"
                  ]
                }
              )
            ]
          },
          O.entity_id
        );
      })
    ] }, S)) })
  ] });
}
const pu = 1e3, j1 = 15e3, q1 = 25e3, U1 = 1e4;
class k1 {
  settings;
  ws = null;
  nextId = 1;
  pending = /* @__PURE__ */ new Map();
  entityIds = [];
  subscriptionId = null;
  states = /* @__PURE__ */ new Map();
  closedByUs = !1;
  retryDelay = pu;
  reconnectTimer = null;
  pingTimer = null;
  pongTimer = null;
  onState = () => {
  };
  onStatus = () => {
  };
  constructor(u) {
    this.settings = u;
  }
  // ---------------------------------------------------------------- cycle de vie
  connect(u) {
    this.entityIds = u, this.closedByUs = !1, this.open(), document.addEventListener("visibilitychange", this.handleVisibility), window.addEventListener("online", this.handleOnline);
  }
  close() {
    this.closedByUs = !0, document.removeEventListener("visibilitychange", this.handleVisibility), window.removeEventListener("online", this.handleOnline), this.clearTimers(), this.ws?.close(), this.ws = null, this.pending.clear(), this.subscriptionId = null;
  }
  handleVisibility = () => {
    document.visibilityState === "visible" && this.ws?.readyState !== WebSocket.OPEN && (this.retryDelay = pu, this.open());
  };
  handleOnline = () => {
    this.retryDelay = pu, this.open();
  };
  open() {
    if (this.closedByUs || this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING))
      return;
    this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = null);
    const u = xu(this.settings).replace(/^http/, "ws") + "/api/websocket";
    this.onStatus(this.retryDelay === pu ? "connecting" : "reconnecting");
    let o;
    try {
      o = new WebSocket(u);
    } catch (r) {
      this.scheduleReconnect(String(r));
      return;
    }
    this.ws = o, o.onmessage = (r) => this.handleMessage(r), o.onerror = () => {
    }, o.onclose = () => {
      this.clearTimers(), this.subscriptionId = null;
      for (const r of this.pending.values()) r.reject(new Error("connexion fermée"));
      this.pending.clear(), this.closedByUs || this.scheduleReconnect();
    };
  }
  scheduleReconnect(u) {
    this.closedByUs || this.reconnectTimer || (this.onStatus("reconnecting", u), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.open();
    }, this.retryDelay), this.retryDelay = Math.min(this.retryDelay * 2, j1));
  }
  clearTimers() {
    this.pingTimer && clearInterval(this.pingTimer), this.pongTimer && clearTimeout(this.pongTimer), this.pingTimer = null, this.pongTimer = null;
  }
  // ---------------------------------------------------------------- protocole
  send(u) {
    this.ws?.send(JSON.stringify(u));
  }
  request(u) {
    if (this.ws?.readyState !== WebSocket.OPEN)
      return Promise.reject(new Error("non connecté"));
    const o = this.nextId++;
    return new Promise((r, h) => {
      this.pending.set(o, { resolve: r, reject: h }), this.send({ ...u, id: o });
    });
  }
  handleMessage(u) {
    let o;
    try {
      o = JSON.parse(u.data);
    } catch {
      return;
    }
    switch (o.type) {
      case "auth_required":
        this.send({ type: "auth", access_token: this.settings.token });
        return;
      case "auth_invalid":
        this.closedByUs = !0, this.onStatus("unauthorized", o.message), this.ws?.close();
        return;
      case "auth_ok":
        this.retryDelay = pu, this.onStatus("connected"), this.subscribe(), this.startHeartbeat();
        return;
      case "pong":
        this.pongTimer && clearTimeout(this.pongTimer), this.pongTimer = null;
        return;
      case "event":
        o.id === this.subscriptionId && this.applyEntitiesEvent(o.event);
        return;
      case "result": {
        const r = this.pending.get(o.id);
        if (!r) return;
        this.pending.delete(o.id), o.success ? r.resolve(o.result) : r.reject(new Error(o.error?.message ?? "erreur Home Assistant"));
        return;
      }
    }
  }
  startHeartbeat() {
    this.clearTimers(), this.pingTimer = setInterval(() => {
      this.ws?.readyState === WebSocket.OPEN && (this.send({ id: this.nextId++, type: "ping" }), this.pongTimer || (this.pongTimer = setTimeout(() => {
        this.pongTimer = null, this.ws?.close();
      }, U1)));
    }, q1);
  }
  async subscribe() {
    if (this.entityIds.length === 0) return;
    const u = this.nextId++;
    this.subscriptionId = u;
    try {
      await new Promise((o, r) => {
        this.pending.set(u, { resolve: () => o(), reject: r }), this.send({ id: u, type: "subscribe_entities", entity_ids: this.entityIds });
      });
    } catch (o) {
      this.subscriptionId = null, this.onStatus("error", String(o));
    }
  }
  /** Reconstitue les états complets à partir du format compressé de HA. */
  applyEntitiesEvent(u) {
    if (u.a)
      for (const [o, r] of Object.entries(u.a)) {
        const h = {
          entity_id: o,
          state: r.s ?? "unknown",
          attributes: r.a ?? {},
          last_changed: r.lc ? new Date(r.lc * 1e3).toISOString() : void 0,
          last_updated: r.lu ? new Date(r.lu * 1e3).toISOString() : void 0
        };
        this.states.set(o, h), this.onState(h);
      }
    if (u.c)
      for (const [o, r] of Object.entries(u.c)) {
        const h = this.states.get(o);
        if (!h) continue;
        const p = {
          ...h,
          attributes: { ...h.attributes }
        }, b = r["+"];
        b && (b.s !== void 0 && (p.state = b.s), b.lc !== void 0 && (p.last_changed = new Date(b.lc * 1e3).toISOString()), b.lu !== void 0 && (p.last_updated = new Date(b.lu * 1e3).toISOString()), b.a && Object.assign(p.attributes, b.a));
        const k = r["-"];
        if (k?.a) for (const v of k.a) delete p.attributes[v];
        this.states.set(o, p), this.onState(p);
      }
    if (u.r)
      for (const o of u.r) this.states.delete(o);
  }
  // ---------------------------------------------------------------- commandes
  /**
   * Appelle un service Home Assistant. Passe par le WebSocket déjà ouvert :
   * pas de poignée de main TLS ni de latence d'établissement de connexion,
   * la commande part immédiatement.
   */
  callService(u, o, r = {}, h) {
    return this.request({
      type: "call_service",
      domain: u,
      service: o,
      service_data: r,
      ...h ? { target: { entity_id: h } } : {}
    });
  }
  /**
   * Appelle une action qui RENVOIE des données (music_assistant.get_library,
   * .search, .get_queue). Home Assistant range le résultat sous `response`.
   */
  async callServiceWithResponse(u, o, r = {}, h) {
    const p = await this.request({
      type: "call_service",
      domain: u,
      service: o,
      service_data: r,
      // Certaines actions se ciblent par entité (get_queue), d'autres par entrée
      // de configuration (search, get_library) : les deux doivent être possibles.
      ...h ? { target: { entity_id: h } } : {},
      return_response: !0
    });
    return p?.response ?? p;
  }
  /** Commande WebSocket brute : le superviseur, pour joindre Music Assistant. */
  callWS(u) {
    return this.request(u);
  }
  /**
   * Identifiant d'entrée de configuration d'une intégration.
   * Les actions de bibliothèque de Music Assistant se ciblent par là, et cette
   * information n'existe que sur le WebSocket — le REST ne l'expose pas.
   */
  async configEntry(u) {
    return (await this.request({
      type: "config_entries/get",
      domain: u
    }))?.[0]?.entry_id ?? null;
  }
}
function Gh(c, u) {
  return new Promise((o, r) => {
    const h = xu(c).replace(/^http/, "ws") + "/api/websocket";
    let p;
    try {
      p = new WebSocket(h);
    } catch {
      r(new Error("Adresse invalide."));
      return;
    }
    const b = setTimeout(() => {
      p.close(), r(new Error("Home Assistant ne répond pas à cette adresse."));
    }, 12e3);
    let k = !1;
    const v = (m, S) => {
      k || (k = !0, clearTimeout(b), p.close(), m ? r(m) : o(S));
    };
    p.onerror = () => v(new Error("Home Assistant injoignable à cette adresse.")), p.onclose = () => v(new Error("Connexion interrompue.")), p.onmessage = (m) => {
      const S = JSON.parse(String(m.data));
      if (S.type === "auth_required") {
        p.send(JSON.stringify({ type: "auth", access_token: c.token }));
        return;
      }
      if (S.type === "auth_invalid") {
        v(new Error("Jeton refusé par Home Assistant."));
        return;
      }
      if (S.type === "auth_ok") {
        p.send(JSON.stringify({ ...u, id: 1 }));
        return;
      }
      S.type === "result" && (S.success ? v(null, S.result) : v(new Error(S.error?.message ?? "Commande refusée.")));
    };
  });
}
async function O1(c) {
  try {
    const u = await Gh(c, {
      type: "get_config"
    });
    return { ok: !0, message: `Connecté à ${u?.location_name ?? "Home Assistant"}${u?.version ? ` (${u.version})` : ""}` };
  } catch (u) {
    return { ok: !1, message: u instanceof Error ? u.message : String(u) };
  }
}
function D1(c) {
  return c.filter((u) => u.entity_id.startsWith("media_player.")).sort((u, o) => {
    const r = u.attributes.mass_player_type ? 0 : 1, h = o.attributes.mass_player_type ? 0 : 1;
    return r !== h ? r - h : (u.attributes.friendly_name ?? u.entity_id).localeCompare(
      o.attributes.friendly_name ?? o.entity_id
    );
  });
}
async function Zh(c) {
  const u = await Gh(c, { type: "get_states" });
  return D1(u);
}
function R1(c, u) {
  return u ? u.startsWith("/") ? xu(c) + u : u : null;
}
const B1 = [
  ["clear", "Blanc"],
  ["glass", "Transparent"],
  ["black", "Noir"],
  ["tinted", "Teinté"],
  ["marble", "Marbré"],
  ["splatter", "Éclaboussé"]
], L1 = [
  ["coulee", "Coulée"],
  ["nebuleuse", "Nébuleuse"],
  ["nuit", "Nuit"],
  ["brume", "Brume"],
  ["aurore", "Aurore"]
], Y1 = ["marble", "splatter", "tinted"], H1 = [
  ["adaptive", "Adaptatif"],
  ["subtle", "Discret"],
  ["neutral", "Gris"],
  ["dark", "Sombre"]
];
function V1({
  settings: c,
  onSave: u,
  onCancel: o,
  requireConnection: r,
  embedded: h = !1,
  knownPlayers: p = null
}) {
  const [b, k] = z.useState(c), [v, m] = z.useState({ state: "idle", message: "" }), [S, C] = z.useState(p), U = (D, Z) => k((ee) => ({ ...ee, [D]: Z }));
  z.useEffect(() => {
    c.token && O(c);
  }, []);
  async function O(D) {
    m({ state: "testing", message: "Connexion…" });
    const Z = await O1(D);
    if (!Z.ok) {
      m({ state: "bad", message: Z.message }), C(null);
      return;
    }
    try {
      const ee = await Zh(D);
      C(ee);
      const he = ee.filter((ce) => ce.attributes.mass_player_type).length;
      if (m({
        state: "ok",
        message: ee.length === 0 ? "Connecté, mais aucune enceinte trouvée." : `Connecté. ${ee.length} enceinte${ee.length > 1 ? "s" : ""}` + (he > 0 ? `, dont ${he} via Music Assistant.` : ".")
      }), !D.entityId && ee.length > 0) {
        const ce = ee.find((P) => P.attributes.mass_player_type) ?? ee[0];
        ce && U("entityId", ce.entity_id);
      }
    } catch (ee) {
      m({ state: "bad", message: String(ee) });
    }
  }
  const K = h ? b.entityId.trim().length > 0 : !r || b.token.trim().length > 0 && b.entityId.trim().length > 0;
  return /* @__PURE__ */ f.jsx("div", { className: "setup", children: /* @__PURE__ */ f.jsxs("div", { className: "panel", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "panel__head", children: [
      /* @__PURE__ */ f.jsx("h1", { children: o ? "Réglages" : "Bienvenue" }),
      !o && /* @__PURE__ */ f.jsx("span", { style: { color: "var(--ink-faint)", fontSize: 13 }, children: "1 fois par appareil" })
    ] }),
    !o && h && /* @__PURE__ */ f.jsx("p", { className: "note", children: "Choisis l'enceinte sur laquelle poser les disques. Tu pourras en changer à tout moment depuis le nom de la pièce, en haut à gauche." }),
    !o && !h && /* @__PURE__ */ f.jsxs("p", { className: "note", children: [
      "Cette platine pilote une enceinte de ton Home Assistant. Il lui faut un jeton d'accès : dans Home Assistant, clique sur ton nom en bas à gauche, onglet ",
      /* @__PURE__ */ f.jsx("b", { children: "Sécurité" }),
      ", puis tout en bas ",
      /* @__PURE__ */ f.jsx("b", { children: "Jetons d'accès longue durée" }),
      "."
    ] }),
    !h && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx("h2", { children: "Connexion" }),
      /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ f.jsx("label", { htmlFor: "url", children: "Adresse de Home Assistant" }),
        /* @__PURE__ */ f.jsx(
          "input",
          {
            id: "url",
            type: "text",
            placeholder: window.location.origin,
            value: b.haUrl,
            onChange: (D) => U("haUrl", D.target.value.trim()),
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ f.jsx("small", { children: "À laisser vide si l'app est servie par Home Assistant lui-même — c'est le cas depuis /local/. Sinon : http://192.168.x.x:8123" })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ f.jsx("label", { htmlFor: "token", children: "Jeton d'accès longue durée" }),
        /* @__PURE__ */ f.jsx(
          "input",
          {
            id: "token",
            type: "password",
            value: b.token,
            onChange: (D) => U("token", D.target.value.trim()),
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ f.jsx("small", { children: "Reste sur cet appareil, dans le stockage local du navigateur." })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "actions", style: { justifyContent: "flex-start" }, children: /* @__PURE__ */ f.jsx("button", { className: "btn", onClick: () => {
        O(b);
      }, disabled: !b.token, children: "Tester la connexion" }) }),
      v.state !== "idle" && /* @__PURE__ */ f.jsx(
        "p",
        {
          className: v.state === "bad" ? "note note--bad" : v.state === "ok" ? "note note--good" : "note",
          children: v.message
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "entity", children: "Enceinte" }),
      /* @__PURE__ */ f.jsxs("select", { id: "entity", value: b.entityId, onChange: (D) => U("entityId", D.target.value), children: [
        /* @__PURE__ */ f.jsx("option", { value: "", children: "— choisir —" }),
        S?.map((D) => /* @__PURE__ */ f.jsxs("option", { value: D.entity_id, children: [
          D.attributes.mass_player_type ? "♪ " : "",
          D.attributes.friendly_name ?? D.entity_id
        ] }, D.entity_id)),
        b.entityId && !S?.some((D) => D.entity_id === b.entityId) && /* @__PURE__ */ f.jsx("option", { value: b.entityId, children: b.entityId })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("h2", { children: "Apparence" }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Matière du disque" }),
      /* @__PURE__ */ f.jsx("div", { className: "segmented", children: B1.map(([D, Z]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          "aria-pressed": b.vinyl === D,
          onClick: () => U("vinyl", D),
          children: Z
        },
        D
      )) })
    ] }),
    b.vinyl === "marble" && /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Motif du marbré" }),
      /* @__PURE__ */ f.jsx("div", { className: "segmented", children: L1.map(([D, Z]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          "aria-pressed": b.marbleMotif === D,
          onClick: () => U("marbleMotif", D),
          children: Z
        },
        D
      )) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Fond" }),
      /* @__PURE__ */ f.jsx("div", { className: "segmented", children: H1.map(([D, Z]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          "aria-pressed": b.background === D,
          onClick: () => U("background", D),
          children: Z
        },
        D
      )) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Lancer et arrêter la lecture" }),
      /* @__PURE__ */ f.jsxs("div", { className: "segmented", children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            "aria-pressed": b.playControl === "arm",
            onClick: () => U("playControl", "arm"),
            children: "En posant l'aiguille"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            "aria-pressed": b.playControl === "button",
            onClick: () => U("playControl", "button"),
            children: "Avec un bouton"
          }
        )
      ] }),
      /* @__PURE__ */ f.jsx("small", { children: "Avec l'aiguille : on attrape le bras et on le pose sur le disque pour lancer, on le retire pour arrêter. Aucun bouton lecture à l'écran. Dans les deux cas, un balayage gauche/droite change de morceau." })
    ] }),
    /* @__PURE__ */ f.jsxs("label", { className: "switch", children: [
      /* @__PURE__ */ f.jsxs("span", { children: [
        "Garder le titre lisible",
        /* @__PURE__ */ f.jsx("br", {}),
        /* @__PURE__ */ f.jsx("small", { style: { color: "var(--ink-faint)" }, children: "L'étiquette cesse de tourner avec le disque" })
      ] }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "checkbox",
          checked: b.counterRotateLabel,
          onChange: (D) => U("counterRotateLabel", D.target.checked)
        }
      )
    ] }),
    Y1.includes(b.vinyl) && /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "tint", children: "Couleur du disque" }),
      /* @__PURE__ */ f.jsxs("div", { className: "tint", children: [
        /* @__PURE__ */ f.jsx(
          "input",
          {
            id: "tint",
            type: "color",
            value: b.vinylTint || "#8a5a3c",
            onChange: (D) => U("vinylTint", D.target.value)
          }
        ),
        /* @__PURE__ */ f.jsx("button", { className: "btn", onClick: () => U("vinylTint", ""), children: "Suivre la pochette" })
      ] }),
      /* @__PURE__ */ f.jsx("small", { children: b.vinylTint ? "Couleur fixe, quel que soit l'album." : "La couleur du disque suit la dominante de la pochette en cours." })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsxs("label", { htmlFor: "zoom", children: [
        "Taille des pochettes",
        /* @__PURE__ */ f.jsx("span", { className: "field__value", children: b.libraryZoom === 1 ? "auto" : `${Math.round(b.libraryZoom * 100)} %` })
      ] }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          id: "zoom",
          type: "range",
          min: 0.7,
          max: 1.6,
          step: 0.05,
          value: b.libraryZoom,
          onChange: (D) => U("libraryZoom", Number(D.target.value))
        }
      ),
      /* @__PURE__ */ f.jsx("small", { children: "La taille s'ajuste déjà à l'écran ; ce curseur ne fait que la pondérer, et il reste propre à cet appareil. Une tablette tenue à bout de bras demande des pochettes plus grosses qu'un écran de bureau à cinquante centimètres." })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "label-text", children: "Texte de l'étiquette" }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          id: "label-text",
          type: "text",
          value: b.labelText,
          placeholder: "Le titre du morceau",
          maxLength: 30,
          onChange: (D) => U("labelText", D.target.value)
        }
      ),
      /* @__PURE__ */ f.jsx("small", { children: "Laissé vide, l'étiquette affiche le morceau en cours. Rempli, elle garde ce texte — comme une pastille de label pressée une fois pour toutes." })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "rpm", children: "Vitesse de rotation" }),
      /* @__PURE__ */ f.jsxs("select", { id: "rpm", value: String(b.rpm), onChange: (D) => U("rpm", Number(D.target.value)), children: [
        /* @__PURE__ */ f.jsx("option", { value: "33.3333", children: "33⅓ tours — album" }),
        /* @__PURE__ */ f.jsx("option", { value: "45", children: "45 tours — single" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("h2", { children: "Comportement" }),
    /* @__PURE__ */ f.jsxs("label", { className: "switch", children: [
      /* @__PURE__ */ f.jsx("span", { children: "Paroles synchronisées" }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "checkbox",
          checked: b.lyrics,
          onChange: (D) => U("lyrics", D.target.checked)
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "idle", children: "Écran de repos" }),
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          id: "idle",
          value: String(b.idleMinutes),
          onChange: (D) => U("idleMinutes", Number(D.target.value)),
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "0", children: "Jamais" }),
            /* @__PURE__ */ f.jsx("option", { value: "2", children: "Après 2 minutes sans musique" }),
            /* @__PURE__ */ f.jsx("option", { value: "5", children: "Après 5 minutes sans musique" }),
            /* @__PURE__ */ f.jsx("option", { value: "15", children: "Après 15 minutes sans musique" }),
            /* @__PURE__ */ f.jsx("option", { value: "30", children: "Après 30 minutes sans musique" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "actions", children: [
      o && /* @__PURE__ */ f.jsx("button", { className: "btn", onClick: o, children: "Annuler" }),
      o && /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "btn",
          onClick: () => k({
            ...gu,
            haUrl: b.haUrl,
            token: b.token,
            entityId: b.entityId
          }),
          children: "Réinitialiser l'apparence"
        }
      ),
      /* @__PURE__ */ f.jsx("button", { className: "btn btn--primary", disabled: !K, onClick: () => u(b), children: "Enregistrer" })
    ] })
  ] }) });
}
const kt = 100, Bs = 86;
function Ls(c, u, o) {
  const r = u * Math.PI / 180, h = c * Math.cos(r), p = c * Math.sin(r);
  return `M ${kt - h},${kt - p} A ${c},${c} 0 0,${o} ${kt + h},${kt + p}`;
}
const no = typeof document < "u" ? document.createElement("canvas").getContext("2d") : null, ho = /* @__PURE__ */ new Map();
function G1(c, u) {
  const o = `${u}|${c}`, r = ho.get(o);
  if (r !== void 0) return r;
  if (!no) return 0.55 * c.length;
  no.font = `${u} 100px Inter, sans-serif`;
  const h = no.measureText(c).width / 100;
  return ho.set(o, h), h;
}
function xh(c, u, o, r, h) {
  if (!c) return o;
  const p = G1(c, h);
  return p <= 0 ? o : Math.max(r, Math.min(o, u / p));
}
function oi(c, u) {
  return c.length > u ? `${c.slice(0, u - 1).trimEnd()}…` : c;
}
function Z1(c) {
  let u = 2166136261;
  for (let r = 0; r < c.length; r++)
    u ^= c.charCodeAt(r), u = Math.imul(u, 16777619);
  const o = [];
  for (let r = 0; r < 20; r++)
    u = Math.imul(u ^ u >>> 15, 2246822507), o.push((u >>> 8 & 3) === 0 ? 1.3 : 0.6);
  return o;
}
function X1({ title: c, artist: u, album: o, footer: r, mark: h }) {
  const [, p] = z.useState(!1);
  z.useEffect(() => {
    let U = !0;
    return document.fonts?.ready.then(() => {
      U && (ho.clear(), p(!0));
    }), () => {
      U = !1;
    };
  }, []);
  const b = oi(c || "—", 30), k = oi(u || "", 30), v = xh(b, 126, 30, 9, 800), m = xh(k, 112, 18, 7.5, 650), S = Z1(`${c}${u}`);
  let C = 0;
  return /* @__PURE__ */ f.jsxs("svg", { className: "label__svg", viewBox: "0 0 200 200", "aria-hidden": "true", children: [
    /* @__PURE__ */ f.jsxs("defs", { children: [
      /* @__PURE__ */ f.jsx("path", { id: "ring-top", d: Ls(Bs, 0, 1), fill: "none" }),
      /* @__PURE__ */ f.jsx("path", { id: "ring-bottom", d: Ls(Bs, 0, 0), fill: "none" }),
      /* @__PURE__ */ f.jsx("path", { id: "ring-left", d: Ls(Bs, 90, 0), fill: "none" }),
      /* @__PURE__ */ f.jsx("path", { id: "ring-right", d: Ls(Bs, 90, 1), fill: "none" })
    ] }),
    /* @__PURE__ */ f.jsx("circle", { cx: kt, cy: kt, r: "94", fill: "none", stroke: "rgba(0,0,0,0.2)", strokeWidth: "0.7" }),
    /* @__PURE__ */ f.jsxs("g", { className: "label__micro", fill: "rgba(20,18,16,0.62)", fontSize: "7", textAnchor: "middle", children: [
      /* @__PURE__ */ f.jsx("text", { children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-top", startOffset: "50%", children: oi(o || "", 42) }) }),
      /* @__PURE__ */ f.jsx("text", { children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-bottom", startOffset: "50%", children: oi(r, 46) }) }),
      /* @__PURE__ */ f.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-left", startOffset: "50%", children: oi(u || "", 34) }) }),
      /* @__PURE__ */ f.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-right", startOffset: "50%", children: oi(h, 34) }) })
    ] }),
    /* @__PURE__ */ f.jsx(
      "text",
      {
        className: "label__title",
        x: kt,
        y: kt - 26,
        fontSize: v,
        textAnchor: "middle",
        fill: "#131211",
        children: b
      }
    ),
    /* @__PURE__ */ f.jsx("circle", { cx: kt, cy: kt, r: "15", fill: "none", stroke: "rgba(0,0,0,0.06)", strokeWidth: "1.2" }),
    /* @__PURE__ */ f.jsx("circle", { cx: kt, cy: kt, r: "4.6", fill: "#4a4b4e" }),
    /* @__PURE__ */ f.jsx("circle", { cx: kt, cy: kt, r: "4.6", fill: "none", stroke: "rgba(0,0,0,0.35)", strokeWidth: "0.9" }),
    /* @__PURE__ */ f.jsx(
      "text",
      {
        className: "label__artist",
        x: kt,
        y: kt + 34,
        fontSize: m,
        textAnchor: "middle",
        fill: "rgba(19,18,17,0.82)",
        children: k
      }
    ),
    /* @__PURE__ */ f.jsx("g", { transform: "rotate(38 100 100) translate(93 22)", opacity: "0.6", children: S.map((U, O) => {
      const K = C;
      return C += U + 0.55, /* @__PURE__ */ f.jsx("rect", { x: K, y: "0", width: U, height: "7.5", fill: "#131211" }, O);
    }) })
  ] });
}
const Wl = 1.19, zo = 1.39, Js = 141.6, Ks = 1, Xh = 0.78, Qs = 180 / Math.PI, hi = zo * (1312.74 / 1372), Kh = 5.545;
function Jh(c) {
  return c < 0 ? 0 : c > 1 ? 1 : c;
}
function Qh(c) {
  const u = (Wl * Wl + hi * hi - c * c) / (2 * Wl * hi);
  return Math.acos(Math.min(1, Math.max(-1, u))) * Qs + Kh;
}
function K1(c) {
  const u = (c - Kh) / Qs, o = Wl * Wl + hi * hi - 2 * Wl * hi * Math.cos(u);
  return Math.sqrt(Math.max(0, o));
}
function wo(c) {
  const u = Ks + (Xh - Ks) * Jh(c);
  return Js - Qh(u);
}
const mo = Js - Qh(1.36);
function J1(c) {
  const u = Js - c, o = K1(Math.max(0, u));
  return Jh((o - Ks) / (Xh - Ks));
}
const Sh = (Js - 180) / Qs, Eh = {
  x: Wl * Math.cos(Sh),
  y: Wl * Math.sin(Sh)
};
function Q1(c, u) {
  return Math.atan2(u - Eh.y, c - Eh.x) * Qs;
}
const Mo = zo / 1372, Ge = (c) => c * Mo, ba = (c) => (c - 351.5) * Mo, di = (c) => (c - 168) * Mo, W1 = 30, io = di(1340);
function F1({ wrapRef: c, armRef: u, onGrab: o }) {
  return /* @__PURE__ */ f.jsx("div", { className: "tonearm", ref: c, children: /* @__PURE__ */ f.jsxs("div", { className: "tonearm__arm", ref: u, children: [
    /* @__PURE__ */ f.jsxs(
      "svg",
      {
        className: "tonearm__svg",
        viewBox: "-0.42 -0.40 2.17 0.82",
        "aria-hidden": "true",
        preserveAspectRatio: "xMidYMid meet",
        children: [
          /* @__PURE__ */ f.jsxs("defs", { children: [
            /* @__PURE__ */ f.jsxs("linearGradient", { id: "tube", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ f.jsx("stop", { offset: "0%", stopColor: "#6e737b" }),
              /* @__PURE__ */ f.jsx("stop", { offset: "14%", stopColor: "#fbfcfd" }),
              /* @__PURE__ */ f.jsx("stop", { offset: "30%", stopColor: "#d3d8de" }),
              /* @__PURE__ */ f.jsx("stop", { offset: "56%", stopColor: "#9aa0a8" }),
              /* @__PURE__ */ f.jsx("stop", { offset: "82%", stopColor: "#5f646b" }),
              /* @__PURE__ */ f.jsx("stop", { offset: "100%", stopColor: "#a8adb5" })
            ] }),
            /* @__PURE__ */ f.jsxs(
              "linearGradient",
              {
                id: "shell",
                gradientUnits: "userSpaceOnUse",
                x1: "0",
                y1: ba(150),
                x2: "0",
                y2: ba(400),
                children: [
                  /* @__PURE__ */ f.jsx("stop", { offset: "0%", stopColor: "#454951" }),
                  /* @__PURE__ */ f.jsx("stop", { offset: "38%", stopColor: "#2e3138" }),
                  /* @__PURE__ */ f.jsx("stop", { offset: "72%", stopColor: "#1d1f24" }),
                  /* @__PURE__ */ f.jsx("stop", { offset: "100%", stopColor: "#101115" })
                ]
              }
            ),
            /* @__PURE__ */ f.jsxs(
              "linearGradient",
              {
                id: "head",
                gradientUnits: "userSpaceOnUse",
                x1: "0",
                y1: ba(230),
                x2: "0",
                y2: ba(430),
                children: [
                  /* @__PURE__ */ f.jsx("stop", { offset: "0%", stopColor: "#41454e" }),
                  /* @__PURE__ */ f.jsx("stop", { offset: "45%", stopColor: "#26282e" }),
                  /* @__PURE__ */ f.jsx("stop", { offset: "100%", stopColor: "#121317" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsx(
            "rect",
            {
              x: di(30),
              y: ba(176),
              width: Ge(70),
              height: Ge(120),
              rx: Ge(16),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "rect",
            {
              x: di(105),
              y: ba(160),
              width: Ge(127),
              height: Ge(232),
              rx: Ge(26),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ f.jsx("rect", { x: di(232), y: ba(324), width: Ge(66), height: Ge(56), rx: Ge(14), fill: "url(#shell)" }),
          /* @__PURE__ */ f.jsx("rect", { x: di(290), y: ba(328), width: Ge(985), height: Ge(48), rx: Ge(24), fill: "url(#tube)" }),
          /* @__PURE__ */ f.jsx("rect", { x: di(1272), y: ba(316), width: Ge(70), height: Ge(72), rx: Ge(18), fill: "url(#shell)" }),
          /* @__PURE__ */ f.jsxs("g", { transform: `rotate(${W1} ${io} 0)`, children: [
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: io - Ge(14),
                y: ba(291),
                width: Ge(214),
                height: Ge(121),
                rx: Ge(30),
                fill: "url(#head)"
              }
            ),
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: io + Ge(120),
                y: ba(345),
                width: Ge(10),
                height: Ge(34),
                rx: Ge(5),
                fill: "#6a6f78",
                opacity: "0.75"
              }
            ),
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: zo - Ge(26),
                y: ba(368),
                width: Ge(12),
                height: Ge(52),
                rx: Ge(6),
                fill: "#0e0f12"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsx("div", { className: "tonearm__grip", onPointerDown: o })
  ] }) });
}
const Ah = wo(0), I1 = wo(1);
function P1({
  title: c,
  artist: u,
  album: o,
  footer: r,
  mark: h,
  coverUrl: p,
  settings: b,
  sleeveFront: k,
  onToggleSleeve: v,
  onTogglePlay: m,
  armOverride: S,
  onSeekProgress: C,
  onPlay: U,
  onPause: O,
  onNext: K,
  onPrevious: D,
  seekable: Z,
  spinRef: ee,
  armRef: he,
  swap: ce
}) {
  const P = z.useRef(null), oe = z.useRef(null), be = z.useRef(!1), ne = z.useRef(!1), ve = b.playControl === "arm", je = (fe) => {
    const Pe = P.current;
    if (!Pe) return;
    fe.preventDefault(), fe.stopPropagation(), fe.target.setPointerCapture(fe.pointerId);
    const De = Pe.getBoundingClientRect(), V = De.left + De.width / 2, E = De.top + De.height / 2, B = De.width / 2, X = fe.clientX, ae = fe.clientY;
    let W = !1;
    const y = (G, F) => {
      const _ = Q1((G - V) / B, (F - E) / B), ue = ve ? mo - 2 : Ah, Me = Math.min(I1, Math.max(ue, _));
      return S.current = Me, Me;
    }, j = (G) => {
      !W && Math.hypot(G.clientX - X, G.clientY - ae) > 6 && (W = !0, be.current = !0, oe.current?.setAttribute("data-dragging", "true")), W && y(G.clientX, G.clientY);
    }, J = (G) => {
      if (window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", J), window.removeEventListener("pointercancel", J), oe.current?.removeAttribute("data-dragging"), be.current = !1, !W) {
        S.current = null, ve && m();
        return;
      }
      const F = y(G.clientX, G.clientY);
      if (ve && F < Ah - 0.6) {
        S.current = null, O();
        return;
      }
      Z && C(J1(F)), ve && U(), setTimeout(() => {
        be.current || (S.current = null);
      }, 900);
    };
    window.addEventListener("pointermove", j), window.addEventListener("pointerup", J), window.addEventListener("pointercancel", J);
  };
  z.useEffect(() => {
    const fe = P.current;
    if (!fe || ce.nonce === 0) return;
    const Pe = fe.offsetWidth * 0.34 * (ce.dir >= 0 ? -1 : 1), De = `translateY(-50%) translateX(${Pe}px) scale(0.93)`, V = `translateY(-50%) translateX(${-Pe}px) scale(0.93)`, E = "translateY(-50%) translateX(0) scale(1)", B = fe.animate(
      [
        { transform: E, opacity: 1, offset: 0 },
        { transform: De, opacity: 0, offset: 0.42 },
        { transform: V, opacity: 0, offset: 0.46 },
        { transform: E, opacity: 1, offset: 1 }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    ), ae = fe.parentElement?.querySelector(".sleeve")?.animate(
      [
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" },
        { transform: `translateY(-50%) rotate(-3deg) translateX(${Pe * 0.12}px)` },
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    );
    return () => {
      B.cancel(), ae?.cancel();
    };
  }, [ce.nonce, ce.dir]);
  const Ue = /* @__PURE__ */ f.jsx("div", { className: "label", children: /* @__PURE__ */ f.jsx(X1, { title: c, artist: u, album: o, footer: r, mark: h }) }), tt = (fe) => {
    const Pe = fe.clientX, De = fe.clientY;
    let V = !1;
    const E = (X) => {
      if (V) return;
      const ae = X.clientX - Pe, W = X.clientY - De;
      Math.abs(ae) < 64 || Math.abs(ae) < Math.abs(W) * 1.8 || (V = !0, ne.current = !0, ae < 0 ? K() : D());
    }, B = () => {
      window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", B), window.removeEventListener("pointercancel", B), V && setTimeout(() => ne.current = !1, 0);
    };
    window.addEventListener("pointermove", E), window.addEventListener("pointerup", B), window.addEventListener("pointercancel", B);
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "deck",
      "data-sleeve": k ? "front" : "back",
      onPointerDown: tt,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "tonearm-base" }),
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: "sleeve",
            onClick: () => !ne.current && v(),
            role: "button",
            tabIndex: 0,
            "aria-label": "Afficher la pochette",
            onKeyDown: (fe) => fe.key === "Enter" && v(),
            children: [
              p ? /* @__PURE__ */ f.jsx("img", { className: "sleeve__art", src: p, alt: "", draggable: !1 }) : /* @__PURE__ */ f.jsx("div", { className: "sleeve__placeholder", children: "Aucune pochette" }),
              /* @__PURE__ */ f.jsx("div", { className: "sleeve__edge" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: "disc",
            ref: P,
            onClick: () => !ve && !ne.current && m(),
            role: ve ? void 0 : "button",
            tabIndex: ve ? -1 : 0,
            "aria-label": ve ? void 0 : "Lecture ou pause",
            onKeyDown: (fe) => !ve && fe.key === "Enter" && m(),
            children: [
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__material" }),
              /* @__PURE__ */ f.jsxs("div", { className: "disc__spin", ref: ee, children: [
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__pattern" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__veins" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__grooves" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__aniso" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__flecks" }),
                !b.counterRotateLabel && Ue
              ] }),
              b.counterRotateLabel && Ue,
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__gloss" }),
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__light" }),
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__edge" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(F1, { wrapRef: oe, armRef: he, onGrab: je })
      ]
    }
  );
}
const zh = 20, _1 = 400, uo = 500;
function $1(c, u, o) {
  let r = null, h = null;
  const p = async () => {
    if (r || (r = await c.configEntry("music_assistant")), !r) throw new Error("Intégration Music Assistant introuvable dans Home Assistant.");
    return r;
  }, b = (S) => sv(o ? o.imageUrl(S) : S), k = async () => {
    const S = await c.callServiceWithResponse("music_assistant", "get_queue", {}, u), C = av(S, u);
    return C?.queue_id && (h = String(C.queue_id)), C;
  }, v = async (S, C) => {
    const U = [];
    for (let O = 0; O < C; O += uo) {
      const K = await c.callServiceWithResponse("music_assistant", "get_library", {
        config_entry_id: await p(),
        media_type: S,
        limit: uo,
        offset: O,
        order_by: "sort_name"
      }), D = wh(K, S);
      if (U.push(...D), D.length < uo) break;
    }
    return o && await o.ready(), U.map((O) => ({ ...O, image: b(O.image) }));
  }, m = async (S) => {
    const C = lv(S.uri);
    if (!C || !o) throw new Error("URI illisible");
    const U = S.kind === "playlist" ? "music/playlists/playlist_tracks" : "music/albums/album_tracks", O = await o.command(U, {
      item_id: C.id,
      provider_instance_id_or_domain: C.provider
    }), K = nv(Array.isArray(O) ? O : []).map((D) => typeof D.uri == "string" ? D.uri : "").filter(Boolean).reverse();
    if (K.length === 0) throw new Error("liste vide");
    if (h || await k(), !h) throw new Error("file introuvable");
    await o.command("player_queues/play_media", {
      queue_id: h,
      media: K,
      option: "replace"
    });
  };
  return {
    albums: () => v("album", 5e3),
    canReverse: () => !!o && !o?.unavailable,
    async playlists() {
      return Wh(await v("playlist", 2e3));
    },
    async play(S, C) {
      if (C?.reversed && S.kind !== "track" && o && await o.ready())
        try {
          await m(S);
          return;
        } catch {
        }
      await c.callService(
        "music_assistant",
        "play_media",
        {
          media_id: S.uri,
          media_type: S.kind,
          enqueue: S.kind === "track" ? "play" : "replace"
        },
        u
      );
    },
    /*
     * Recherche : elle se cible par config_entry_id, PAS par entité — c'est une
     * interrogation du fournisseur, pas une commande d'enceinte. Elle porte donc
     * sur tout Deezer, et non sur la seule bibliothèque enregistrée.
     */
    async search(S) {
      const C = await c.callServiceWithResponse("music_assistant", "search", {
        config_entry_id: await p(),
        name: S,
        limit: 12
      }), U = (O, K) => wh({ items: C?.[O] ?? [] }, K).map((D) => ({ ...D, image: b(D.image) }));
      return {
        albums: U("albums", "album"),
        playlists: U("playlists", "playlist"),
        tracks: U("tracks", "track")
      };
    },
    async queue() {
      const S = await k();
      if (o && h && await o.ready())
        try {
          return await ev(o, h, b);
        } catch {
        }
      return tv(S, b, o?.unavailable ?? null);
    },
    /*
     * Transfert : la file passe d'une enceinte à l'autre sans repartir de zéro.
     * C'est ce que fait Music Assistant nativement — reprendre la lecture à la
     * même seconde dans une autre pièce.
     */
    async transferTo(S) {
      await c.callService(
        "music_assistant",
        "transfer_queue",
        { source_player: u, auto_play: !0 },
        S
      );
    },
    /*
     * Sauter sur un morceau de la file.
     *
     * Par Music Assistant, `play_index` joue la ligne touchée, telle qu'elle est
     * dans la file. Le repli par Home Assistant, `play_media` en mode « play »,
     * marche aussi mais INSÈRE une copie du morceau : sauter trois fois
     * laissait trois doublons dans la file.
     */
    async jumpTo(S) {
      if (o?.connected && h) {
        await o.command("player_queues/play_index", { queue_id: h, index: S.id });
        return;
      }
      if (!S.uri) throw new Error("Ce morceau n'a pas d'URI : impossible d'y sauter.");
      await c.callService(
        "music_assistant",
        "play_media",
        { media_id: S.uri, media_type: "track", enqueue: "play" },
        u
      );
    },
    async move(S, C) {
      if (C) {
        if (!o || !h) throw new Error("Réordonner la file demande la liaison Music Assistant.");
        await o.command("player_queues/move_item", {
          queue_id: h,
          queue_item_id: S.id,
          pos_shift: C
        });
      }
    },
    async playNext(S) {
      if (!S.uri) throw new Error("Ce morceau n'a pas d'URI.");
      if (o?.connected && h) {
        await o.command("player_queues/play_media", {
          queue_id: h,
          media: [S.uri],
          option: "next"
        });
        return;
      }
      await c.callService(
        "music_assistant",
        "play_media",
        { media_id: S.uri, media_type: "track", enqueue: "next" },
        u
      );
    },
    async remove(S) {
      if (!o || !h) throw new Error("Retirer un morceau demande la liaison Music Assistant.");
      await o.command("player_queues/delete_item", {
        queue_id: h,
        item_id_or_index: S.id
      });
    },
    watchQueue(S) {
      return o ? o.onEvent((C) => {
        !h || C.object_id !== h || (C.event === "queue_items_updated" || C.event === "queue_updated") && S();
      }) : () => {
      };
    },
    /*
     * Le résumé de Home Assistant suffit : il donne l'image du morceau en cours
     * — pas besoin du module Music Assistant.
     */
    async currentCover(S) {
      if (!S) return null;
      const U = (await k())?.current_item?.media_item;
      return !U || Ys(String(U.name ?? "")) !== Ys(S) ? null : b(mi(U) ?? mi(U.album ?? {}));
    },
    async currentLyrics(S) {
      if (!o || !S || !await o.ready() || (h || await k(), !h)) return null;
      const U = (await o.command("player_queues/get", {
        queue_id: h
      }))?.current_item?.media_item;
      if (!U || Ys(String(U.name ?? "")) !== Ys(S)) return null;
      const O = U.metadata?.lrc_lyrics;
      return typeof O == "string" && O.trim() ? O : null;
    }
  };
}
async function ev(c, u, o) {
  const r = await c.command("player_queues/get", {
    queue_id: u
  });
  if (!r) throw new Error("file introuvable");
  const h = vo(r.current_index), p = vo(r.index_in_buffer), b = Math.max(0, h - zh), k = await c.command("player_queues/items", {
    queue_id: u,
    limit: zh + _1,
    offset: b
  }), v = (Array.isArray(k) ? k : []).map((S) => po(S, o)), m = Math.max(h, p);
  return {
    items: v,
    current: h >= 0 ? h - b : -1,
    locked: m >= 0 ? m - b : -1,
    full: !0,
    total: Number(r.items) || v.length,
    note: null
  };
}
function tv(c, u, o) {
  if (!c)
    return { items: [], current: -1, locked: 1 / 0, full: !1, total: 0, note: o };
  if (Array.isArray(c.items)) {
    const p = c.items.map((b) => po(b, u));
    return {
      items: p,
      current: vo(c.current_index),
      locked: 1 / 0,
      full: !1,
      total: p.length,
      note: o
    };
  }
  const r = [c.current_item, c.next_item].filter(Boolean).map((p) => po(p, u)), h = Number(c.items) || r.length;
  return {
    items: r,
    current: c.current_item ? 0 : -1,
    locked: 1 / 0,
    full: !1,
    total: h,
    note: h > r.length ? o ?? "Home Assistant ne transmet que le morceau en cours et le suivant." : null
  };
}
function av(c, u) {
  const o = c;
  if (!o || typeof o != "object") return null;
  if (o[u] && typeof o[u] == "object") return o[u];
  if ("queue_id" in o || "current_item" in o) return o;
  const r = Object.values(o).filter(
    (h) => !!h && typeof h == "object" && ("queue_id" in h || "current_item" in h)
  );
  return r.length === 1 ? r[0] : null;
}
function po(c, u) {
  const o = c ?? {}, r = o.media_item ?? {}, h = r.name ?? o.name ?? "—", p = typeof r.version == "string" && r.version.trim() ? r.version : "";
  return {
    id: String(o.queue_item_id ?? o.item_id ?? r.uri ?? h),
    uri: String(r.uri ?? o.uri ?? ""),
    name: p ? `${h} (${p})` : String(h),
    artist: go(r) || go(o),
    image: u(mi(o) ?? mi(r) ?? mi(r.album ?? {})),
    duration: Number(o.duration ?? r.duration ?? 0) || 0
  };
}
function lv(c) {
  const u = /^([^:/]+):\/\/[^/]+\/(.+)$/.exec(c);
  return u?.[1] && u[2] ? { provider: u[1], id: u[2] } : null;
}
function nv(c) {
  const u = (r, h) => {
    if (typeof r.position == "number") return [r.position, h];
    const p = Number(r.disc_number ?? 0) || 0, b = Number(r.track_number ?? NaN);
    return Number.isFinite(b) ? [p, b, h] : [1 / 0, h];
  }, o = c.map(u);
  return c.map((r, h) => ({ t: r, k: o[h] })).sort((r, h) => {
    for (let p = 0; p < Math.max(r.k.length, h.k.length); p++) {
      const b = (r.k[p] ?? 0) - (h.k[p] ?? 0);
      if (b) return b;
    }
    return 0;
  }).map(({ t: r }) => r);
}
function vo(c) {
  const u = typeof c == "number" ? c : c == null ? NaN : Number(c);
  return Number.isFinite(u) ? u : -1;
}
function Wh(c) {
  const u = /* @__PURE__ */ new Map();
  for (const p of c) p.image && u.set(p.image, (u.get(p.image) ?? 0) + 1);
  const o = c.map((p) => {
    const b = p.name.trim(), k = iv.test(b), v = p.image !== null && (u.get(p.image) ?? 0) >= 3, m = p.image && !v ? p.image : k ? f1() : Ao(`playlist ${b}`);
    return { ...p, name: uv[b] ?? b, pinned: k, image: m };
  }), r = (p) => p.pinned ? /c(œ|oe)ur/i.test(p.name) ? 0 : 1 : 2, h = new Intl.Collator("fr", { sensitivity: "base", numeric: !0 });
  return [...o].sort((p, b) => r(p) - r(b) || (r(p) === 2 ? h.compare(p.name, b.name) : 0));
}
const iv = /^(mes )?(coups? de c(œ|oe)ur|titres (favoris|aimés|likés)|tous mes favoris|all favou?rited tracks|favou?rite tracks|loved tracks|liked songs)$/i, uv = {
  "All favorited tracks": "Tous mes favoris",
  "Random Artist (from library)": "Un artiste au hasard",
  "Random Album (from library)": "Un album au hasard",
  "500 Random tracks (from library)": "500 titres au hasard",
  "Recently played tracks": "Écoutés récemment",
  "Recently added tracks": "Ajoutés récemment",
  "Infinite Mix (library)": "Mix sans fin · bibliothèque",
  "Infinite Mix (favorites)": "Mix sans fin · favoris"
};
function wh(c, u = "album") {
  const o = c, r = o?.items ?? o?.albums ?? o?.result ?? [];
  return Array.isArray(r) ? r.map((h) => {
    const p = h, b = p.media_type;
    return {
      uri: String(p.uri ?? p.media_id ?? p.item_id ?? ""),
      name: String(p.name ?? p.title ?? "—"),
      artist: go(p),
      image: mi(p),
      kind: b === "album" || b === "playlist" || b === "track" ? b : u
    };
  }).filter((h) => h.uri.length > 0) : [];
}
function go(c) {
  if (typeof c.artist == "string") return c.artist;
  const u = c.artists?.[0] ?? c.album_artist ?? c.artist;
  return u ? typeof u == "string" ? u : String(u.name ?? "") : "";
}
function mi(c) {
  const u = c.image ?? c.images?.[0] ?? c.metadata?.images?.[0] ?? c.thumbnail ?? null;
  if (!u) return null;
  if (typeof u == "string") return u;
  const o = u.path ?? u.url ?? null;
  return typeof o == "string" ? o : null;
}
function sv(c) {
  return !c || window.location.protocol === "https:" && c.startsWith("http:") ? null : c;
}
function Ys(c) {
  return c.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}
const rv = [
  ["Vagues courtes", "Léonie Ferrand"],
  ["Le bruit du jour", "Atelier Nord"],
  ["Sillons", "Marta Vieira"],
  ["Cinq heures du matin", "Le Bureau des Ondes"],
  ["Nord magnétique", "Hélios Quartet"],
  ["Papier calque", "Jonas Brenner"],
  ["Terrasse en hiver", "Claire Vasseur"],
  ["Sable et néon", "Kimiko Arata"],
  ["Longue exposition", "Atelier Nord"],
  ["Les heures creuses", "Léonie Ferrand"],
  ["Rivage", "Ensemble Pluie"],
  ["Tout près du sol", "Marta Vieira"],
  ["Chambre 214", "Jonas Brenner"],
  ["Marée basse", "Ensemble Pluie"],
  ["格子 · Treillis", "Kimiko Arata"],
  ["Le dernier métro", "Hélios Quartet"],
  ["Aube blanche", "Claire Vasseur"],
  ["Contretemps", "Le Bureau des Ondes"],
  ["Feux de position", "Atelier Nord"],
  ["Sept nuits", "Léonie Ferrand"],
  ["Poussière d'or", "Marta Vieira"],
  ["Le fil du jour", "Jonas Brenner"],
  ["Horizon bas", "Ensemble Pluie"],
  ["Ville morte, ville vive", "Kimiko Arata"],
  ["Deux degrés au sud", "Hélios Quartet"],
  ["Radio nuit", "Claire Vasseur"],
  ["Lisière", "Le Bureau des Ondes"],
  ["Retour de plage", "Atelier Nord"]
], cv = [
  "Coups de cœur",
  "Dimanche matin",
  "Route de nuit",
  "Cuisine et radio",
  "Jazz de minuit",
  "Pluie sur la ville",
  "Énergie",
  "Années 80",
  "Concentration",
  "Été indien"
], Hs = (c, u, o) => `demo://${c}/${encodeURIComponent(u)}/${encodeURIComponent(o)}`;
function ov(c, u) {
  const o = () => {
    const v = Fh();
    return v ? v.map((m) => ({
      uri: Hs("album", m.name, m.artist),
      name: m.name,
      artist: m.artist,
      image: m.image,
      kind: "album"
    })) : rv.map(([m, S]) => ({
      uri: Hs("album", m, S),
      name: m,
      artist: S,
      image: Ao(`${m} ${S}`),
      kind: "album"
    }));
  };
  let r = o().slice(0, 14).map((v, m) => ({
    id: `demo-${m}`,
    uri: v.uri,
    name: `${v.name} · piste ${m + 1}`,
    artist: v.artist,
    image: v.image,
    duration: 190 + m * 37 % 140
  })), h = 2;
  const p = /* @__PURE__ */ new Set(), b = () => setTimeout(() => p.forEach((v) => v()), 60), k = (v) => c.callService(
    "music_assistant",
    "play_media",
    { media_id: v.uri, media_type: v.kind, enqueue: "replace" },
    u
  );
  return {
    async albums() {
      return o();
    },
    async playlists() {
      const v = dv(), m = v ? v.map((S) => ({
        uri: Hs("playlist", S.name, ""),
        name: S.name,
        artist: "",
        image: S.image,
        kind: "playlist"
      })) : cv.map((S) => ({
        uri: Hs("playlist", S, ""),
        name: S,
        artist: "",
        image: null,
        kind: "playlist"
      }));
      return Wh(m);
    },
    async play(v, m) {
      const S = Array.from({ length: 8 }, (C, U) => ({
        id: `demo-${v.name}-${U}`,
        uri: v.uri,
        name: `${v.name} · piste ${U + 1}`,
        artist: v.artist || "Artistes variés",
        image: v.image,
        duration: 180 + U * 29 % 120
      }));
      r = m?.reversed ? S.reverse() : S, h = 0, b(), await k(v);
    },
    canReverse: () => !0,
    async search(v) {
      const m = v.trim().toLowerCase(), S = o().filter(
        (U) => U.name.toLowerCase().includes(m) || U.artist.toLowerCase().includes(m)
      ), C = (await this.playlists()).filter((U) => U.name.toLowerCase().includes(m));
      return {
        albums: S.slice(0, 12),
        playlists: C,
        tracks: S.slice(0, 4).map((U) => ({ ...U, name: `${U.name} · piste 1`, kind: "track" }))
      };
    },
    async queue() {
      return {
        items: [...r],
        current: h,
        locked: h,
        full: !0,
        total: r.length,
        note: null
      };
    },
    async transferTo() {
    },
    async jumpTo(v) {
      const m = r.findIndex((S) => S.id === v.id);
      m >= 0 && (h = m), await c.callService(
        "music_assistant",
        "play_media",
        { media_id: v.uri, media_type: "track", enqueue: "play" },
        u
      ), b();
    },
    async move(v, m) {
      const S = r.findIndex((K) => K.id === v.id), C = S + m;
      if (S < 0 || !m || C <= h || C >= r.length) return;
      const U = [...r], [O] = U.splice(S, 1);
      U.splice(C, 0, O), r = U, b();
    },
    async playNext(v) {
      const m = { ...v, id: `${v.id}-ensuite-${Date.now()}` };
      r = [...r.slice(0, h + 1), m, ...r.slice(h + 1)], b();
    },
    async remove(v) {
      r.findIndex((S) => S.id === v.id) <= h || (r = r.filter((S) => S.id !== v.id), b());
    },
    watchQueue(v) {
      return p.add(v), () => p.delete(v);
    },
    async currentLyrics() {
      return null;
    },
    async currentCover() {
      return null;
    }
  };
}
function fv(c) {
  const u = /^demo:\/\/(?:album|playlist|track)\/([^/]+)\/([^/]*)$/.exec(c);
  return !u || !u[1] ? null : { name: decodeURIComponent(u[1]), artist: decodeURIComponent(u[2] ?? "") };
}
const Sn = [
  { title: "Nuit américaine", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 214 },
  { title: "Le grand bleu tremble", artist: "Atelier Nord", album: "Vagues courtes", duration: 268 },
  { title: "Sillon 3", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 187 }
];
function Fh() {
  if (!No()) return null;
  const c = window.__MD_VINYL_ALBUMS__;
  return Array.isArray(c) && c.length > 0 ? c : null;
}
function dv() {
  if (!No()) return null;
  const c = window.__MD_VINYL_PLAYLISTS__;
  return Array.isArray(c) && c.length > 0 ? c : null;
}
const hv = na.PAUSE | na.SEEK | na.VOLUME_SET | na.PREVIOUS_TRACK | na.NEXT_TRACK | na.PLAY | na.SHUFFLE_SET | na.REPEAT_SET, To = [
  { entity_id: "media_player.salon", name: "Salon" },
  { entity_id: "media_player.cuisine", name: "Cuisine" },
  { entity_id: "media_player.chambre", name: "Chambre" }
], yo = To[0].entity_id;
function mv(c) {
  return To.find((u) => u.entity_id === c)?.name ?? "Salon";
}
class pv {
  onState = () => {
  };
  onStatus = () => {
  };
  index = 0;
  position = 12;
  // ?demo=1&paused=1 pour observer le bras au repos sans avoir à cliquer.
  playing = !new URLSearchParams(window.location.search).has("paused");
  volume = 0.42;
  shuffle = !1;
  repeat = "off";
  timer = null;
  /** Album choisi dans la bibliothèque, qui remplace la liste par défaut. */
  album = null;
  cover = null;
  /**
   * L'enceinte qu'on nous a demandé de suivre. Le faux client publiait jadis
   * « Salon » en dur : changer de pièce ne changeait donc rien à l'écran, et on
   * croyait à un bug du sélecteur alors que c'était la démonstration qui mentait.
   */
  entityId = yo;
  connect(u) {
    this.entityId = u[0] || yo, this.onStatus("connected"), this.publish(), this.timer = setInterval(() => {
      if (this.playing) {
        this.position += 1;
        const o = Sn[this.index];
        o && this.position >= o.duration && (this.index = (this.index + 1) % Sn.length, this.position = 0);
      }
      this.publish();
    }, 1e3);
  }
  close() {
    this.timer && clearInterval(this.timer), this.timer = null;
  }
  callService(u, o, r = {}) {
    switch (o) {
      case "media_play_pause":
        this.playing = !this.playing;
        break;
      case "media_play":
        this.playing = !0;
        break;
      case "media_pause":
        this.playing = !1;
        break;
      case "media_next_track":
        this.index = (this.index + 1) % Sn.length, this.position = 0;
        break;
      case "media_previous_track":
        this.position > 3 ? this.position = 0 : (this.index = (this.index - 1 + Sn.length) % Sn.length, this.position = 0);
        break;
      case "media_seek":
        this.position = Number(r.seek_position ?? 0);
        break;
      case "volume_set":
        this.volume = Number(r.volume_level ?? this.volume);
        break;
      case "shuffle_set":
        this.shuffle = !!r.shuffle;
        break;
      case "repeat_set":
        this.repeat = r.repeat ?? "off";
        break;
      case "play_media": {
        const h = fv(String(r.media_id ?? ""));
        h && (this.album = h, this.cover = Ao(`${h.name} ${h.artist}`), this.index = 0, this.position = 0, this.playing = !0);
        break;
      }
    }
    return this.publish(), Promise.resolve(null);
  }
  publish() {
    const u = Sn[this.index] ?? Sn[0], o = Fh(), r = o ? o[this.index % o.length] : null;
    this.onState({
      entity_id: this.entityId,
      state: this.playing ? "playing" : "paused",
      attributes: {
        friendly_name: mv(this.entityId),
        supported_features: hv,
        media_title: r ? r.name : this.album ? `${this.album.name} · piste ${this.index + 1}` : u.title,
        media_artist: r ? r.artist : this.album ? this.album.artist : u.artist,
        media_album_name: r ? r.name : this.album ? this.album.name : u.album,
        media_duration: u.duration,
        media_position: this.position,
        media_position_updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        entity_picture: this.cover ?? r?.image ?? "./demo-cover.png",
        volume_level: this.volume,
        is_volume_muted: !1,
        shuffle: this.shuffle,
        repeat: this.repeat,
        mass_player_type: "player"
      },
      last_updated: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
}
function No() {
  return new URLSearchParams(window.location.search).has("demo");
}
function so() {
  const c = new URLSearchParams(window.location.search), u = {}, o = c.get("vinyl"), r = c.get("bg");
  o && (u.vinyl = o);
  const h = c.get("motif");
  return h && (u.marbleMotif = h), r && (u.background = r), u;
}
const vv = `[00:08.40] Le soir tombe sur les toits gris
[00:13.10] Et la ville allume ses fenêtres
[00:18.60] On ne sait plus très bien qui parle
[00:23.90] Ni depuis quand la nuit s'installe
[00:29.50]
[00:33.20] Tu poses l'aiguille et tout revient
[00:38.80] Le grain, le souffle, le refrain
[00:44.20] Rien ne presse, rien ne s'efface
[00:49.70] La chanson tourne et prend sa place
[00:55.30]
[01:00.10] Nuit américaine
[01:05.60] Le jour filmé dans le noir
[01:11.20] Nuit américaine
[01:16.80] On y croit quand même, ce soir`, Ot = 640, gv = 10, bo = "mdvinyl.marble.v2.";
try {
  for (const c of Object.keys(localStorage))
    c.startsWith("mdvinyl.marble.") && !c.startsWith(bo) && localStorage.removeItem(c);
} catch {
}
const Mh = /* @__PURE__ */ new Map();
function yv(c) {
  if (c === "coulee") return null;
  let u = Mh.get(c);
  return u || (u = bv(c), Mh.set(c, u)), u;
}
async function bv(c) {
  try {
    const o = localStorage.getItem(bo + c);
    if (o) return JSON.parse(o);
  } catch {
  }
  const u = await xv(c);
  try {
    localStorage.setItem(bo + c, JSON.stringify(u));
  } catch {
  }
  return u;
}
async function xv(c) {
  const u = co(7), o = co(31), r = co(53), h = new Uint8ClampedArray(Ot * Ot * 4), p = new Uint8ClampedArray(Ot * Ot * 4), b = new Uint8ClampedArray(Ot * Ot * 4);
  let k = 0;
  for (; k < Ot; ) {
    const v = performance.now();
    for (; k < Ot && performance.now() - v < gv; ) {
      for (let m = 0; m < Ot; m++) {
        const S = m / Ot * 2 - 1, C = k / Ot * 2 - 1, [U, O, K] = Sv(c, S, C, m, k, u, o, r), D = (k * Ot + m) * 4 + 3;
        h[D] = U * 255, p[D] = O * 255, b[D] = K * 255;
      }
      k++;
    }
    await new Promise((m) => setTimeout(m, 0));
  }
  return {
    color: ro(h),
    dark: ro(p),
    light: ro(b)
  };
}
function Sv(c, u, o, r, h, p, b, k) {
  const v = Math.hypot(u, o), m = Math.atan2(o, u), S = Th(b, u * 1.7 + 3.1, o * 1.7 - 2.2, 0.5, 4), C = (O, K, D, Z, ee, he) => {
    const ce = m + v * Z + S * ee;
    return Th(O, v * K + S * 0.9, Math.cos(ce) * D, Math.sin(ce) * D + he, 6);
  }, U = (O) => {
    const K = Math.sin(r * 12.9898 + h * 78.233) * 43758.5453;
    return K - Math.floor(K) > O ? 1 : 0;
  };
  switch (c) {
    // Des volutes douces, piquées de quelques paillettes. Le motif préféré :
    // on n'y touche pas.
    case "nebuleuse": {
      const O = C(p, 3, 0.5, 1.8, 0.8, 9.1);
      return [Kl(-0.22, 0.28, O) * 0.95, Kl(0.12, 0.4, O) * 0.7, U(0.997)];
    }
    // La même, sur fond de nuit : la couleur luit, ses cœurs s'éclairent, et
    // la poussière d'étoiles est plus dense.
    case "nuit": {
      const O = C(p, 3, 0.5, 2.2, 0.9, 9.1);
      return [Kl(-0.3, 0.3, O), Kl(0.1, 0.42, O) * 0.85, U(0.994)];
    }
    // Plus large, plus pâle, presque sans paillettes : une brume de couleur.
    case "brume": {
      const O = C(p, 1.8, 0.35, 1.2, 0.6, 9.1);
      return [Kl(-0.35, 0.35, O) * 0.75, Kl(0.2, 0.5, O) * 0.35, U(0.9985)];
    }
    // Deux nébuleuses qui s'entremêlent, chacune de sa couleur.
    case "aurore": {
      const O = C(p, 3, 0.5, 1.8, 0.8, 9.1), K = C(k, 3.3, 0.5, 2.4, 1, 3.3);
      return [Kl(-0.2, 0.25, O) * 0.95, Kl(-0.05, 0.3, K) * 0.9, U(0.997)];
    }
  }
}
function ro(c) {
  const u = document.createElement("canvas");
  u.width = Ot, u.height = Ot;
  const o = u.getContext("2d");
  if (!o) return "";
  for (let r = 0; r < c.length; r += 4)
    c[r] = 255, c[r + 1] = 255, c[r + 2] = 255;
  return o.putImageData(new ImageData(c, Ot, Ot), 0, 0), u.toDataURL("image/png");
}
function Kl(c, u, o) {
  const r = Math.min(1, Math.max(0, (o - c) / (u - c)));
  return r * r * (3 - 2 * r);
}
function Th(c, u, o, r, h) {
  let p = 0.5, b = 1, k = 0;
  for (let v = 0; v < h; v++)
    k += p * c(u * b, o * b, r * b), p *= 0.5, b *= 2.03;
  return k;
}
function co(c) {
  let u = c >>> 0 || 1;
  const o = () => (u = Math.imul(u, 1664525) + 1013904223 >>> 0) / 4294967296, r = Array.from({ length: 256 }, (v, m) => m);
  for (let v = 255; v > 0; v--) {
    const m = Math.floor(o() * (v + 1));
    [r[v], r[m]] = [r[m], r[v]];
  }
  const h = new Uint8Array(512);
  for (let v = 0; v < 512; v++) h[v] = r[v & 255];
  const p = (v) => v * v * v * (v * (v * 6 - 15) + 10), b = (v, m, S) => v + S * (m - v), k = (v, m, S, C) => {
    const U = v & 15, O = U < 8 ? m : S, K = U < 4 ? S : U === 12 || U === 14 ? m : C;
    return (U & 1 ? -O : O) + (U & 2 ? -K : K);
  };
  return (v, m, S) => {
    const C = Math.floor(v) & 255, U = Math.floor(m) & 255, O = Math.floor(S) & 255;
    v -= Math.floor(v), m -= Math.floor(m), S -= Math.floor(S);
    const K = p(v), D = p(m), Z = p(S), ee = h[C] + U, he = h[ee] + O, ce = h[ee + 1] + O, P = h[C + 1] + U, oe = h[P] + O, be = h[P + 1] + O;
    return b(
      b(
        b(k(h[he], v, m, S), k(h[oe], v - 1, m, S), K),
        b(k(h[ce], v, m - 1, S), k(h[be], v - 1, m - 1, S), K),
        D
      ),
      b(
        b(k(h[he + 1], v, m, S - 1), k(h[oe + 1], v - 1, m, S - 1), K),
        b(k(h[ce + 1], v, m - 1, S - 1), k(h[be + 1], v - 1, m - 1, S - 1), K),
        D
      ),
      Z
    );
  };
}
const Ev = 15e3, Av = 8e3, zv = 6e4, wv = 1e4;
class Nh {
  constructor(u, o = window.location.origin) {
    this.ha = u, this.origin = o;
  }
  ha;
  origin;
  ws = null;
  opening = null;
  waiting = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  nextId = 1;
  ingress = null;
  session = null;
  keepAlive = null;
  reconnect = null;
  failedAt = 0;
  closed = !1;
  /** Adresse que Music Assistant donne à ses propres images (son base_url). */
  serverBase = null;
  /**
   * Raison pour laquelle la liaison est impossible sur cette installation, et
   * le restera : pas de superviseur, pas de module, compte non administrateur.
   * null tant qu'on n'en sait rien, ou si la liaison marche.
   */
  unavailable = null;
  get connected() {
    return this.ws?.readyState === WebSocket.OPEN;
  }
  /** Établit la liaison si besoin. Vrai si elle est utilisable. */
  ready() {
    return this.closed || this.unavailable ? Promise.resolve(!1) : this.connected ? Promise.resolve(!0) : Date.now() - this.failedAt < wv ? Promise.resolve(!1) : (this.opening ??= this.open().finally(() => {
      this.opening = null;
    }), this.opening);
  }
  /** Envoie une commande à Music Assistant et attend sa réponse. */
  async command(u, o = {}) {
    if (!await this.ready() || !this.ws)
      throw new Error(this.unavailable ?? "Music Assistant injoignable");
    const r = this.ws, h = String(this.nextId++);
    return new Promise((p, b) => {
      const k = setTimeout(() => {
        this.waiting.delete(h), b(new Error(`Music Assistant ne répond pas (${u})`));
      }, Ev);
      this.waiting.set(h, { resolve: p, reject: b, timer: k, parts: [] }), r.send(JSON.stringify({ message_id: h, command: u, args: o }));
    });
  }
  /**
   * Écoute les événements de Music Assistant. Il les envoie d'office à tout
   * client connecté : c'est ce qui permet à la file de se remplir sous nos yeux
   * quand on lance un album, sans relire en boucle.
   */
  onEvent(u) {
    return this.listeners.add(u), this.ready(), () => this.listeners.delete(u);
  }
  /**
   * Les images des playlists générées par Music Assistant pointent vers son
   * propre serveur (http://192.168.x.x:8095/imageproxy/…). Depuis une page en
   * https, le navigateur les bloque ; depuis l'extérieur, l'adresse n'existe
   * pas. L'ingress sert les mêmes chemins, sur notre origine : on y réécrit.
   */
  imageUrl(u) {
    if (!u || !this.ingress || !this.serverBase || !u.startsWith(this.serverBase)) return u;
    const o = u.slice(this.serverBase.length).replace(/^\/+/, "");
    return this.origin + this.ingress + o;
  }
  close() {
    this.closed = !0, this.keepAlive && clearInterval(this.keepAlive), this.reconnect && clearTimeout(this.reconnect), this.keepAlive = null, this.reconnect = null, this.listeners.clear(), this.ws?.close(), this.ws = null;
  }
  // ------------------------------------------------------------ établissement
  async open() {
    try {
      return this.ingress || (this.ingress = await this.findIngress()), this.ingress ? (await this.ensureSession(), await this.openSocket()) : !1;
    } catch (u) {
      this.failedAt = Date.now();
      const o = u instanceof Error ? u.message : String(u);
      return /unauthori|admin|forbidden|401/i.test(o) && (this.unavailable = "La file complète demande un compte administrateur de Home Assistant."), !1;
    }
  }
  /** Adresse d'ingress du module Music Assistant, ou null s'il n'y en a pas. */
  async findIngress() {
    let u;
    try {
      u = (await this.ha.callWS({
        type: "supervisor/api",
        endpoint: "/addons",
        method: "get"
      }))?.addons ?? [];
    } catch (p) {
      const b = p instanceof Error ? p.message : String(p);
      return this.unavailable = /unauthori|admin/i.test(b) ? "La file complète demande un compte administrateur de Home Assistant." : "La file complète passe par le module Music Assistant de Home Assistant, absent de cette installation.", null;
    }
    const o = u.filter((p) => /music_assistant/i.test(p.slug)), r = o.find((p) => p.state === "started") ?? o[0];
    if (!r)
      return this.unavailable = "La file complète passe par le module Music Assistant de Home Assistant, absent de cette installation.", null;
    const h = await this.ha.callWS({
      type: "supervisor/api",
      endpoint: `/addons/${r.slug}/info`,
      method: "get"
    });
    return !h?.ingress || !h.ingress_url ? (this.unavailable = "Le module Music Assistant n'expose pas d'ingress.", null) : h.ingress_url.endsWith("/") ? h.ingress_url : h.ingress_url + "/";
  }
  /**
   * Une session d'ingress valide, posée en cookie.
   *
   * Le cookie est PARTAGÉ avec le frontend : le panneau Music Assistant de la
   * barre latérale pose le sien au même endroit, et on ne peut pas le lire
   * pour le réutiliser — un cookie restreint à /api/hassio_ingress/ est
   * invisible depuis la page. On fait donc comme le frontend : chacun tient sa
   * propre session en vie et réaffirme son cookie à chaque validation. Les deux
   * sessions restent valides tant que leurs onglets vivent, et le cookie
   * présent, quel qu'il soit, ouvre la porte à tout le monde.
   */
  async ensureSession() {
    if (!this.session || !await this.validate(this.session)) {
      const u = await this.ha.callWS({
        type: "supervisor/api",
        endpoint: "/ingress/session",
        method: "post"
      });
      this.session = u.session;
    }
    Ch(this.session), this.keepAlive || (this.keepAlive = setInterval(() => {
      if (!this.session || this.closed) return;
      const u = this.session;
      this.validate(u).then((o) => {
        o ? Ch(u) : (this.session = null, this.ensureSession().catch(() => {
        }));
      });
    }, zv));
  }
  async validate(u) {
    try {
      return await this.ha.callWS({
        type: "supervisor/api",
        endpoint: "/ingress/validate_session",
        method: "post",
        data: { session: u }
      }), !0;
    } catch {
      return !1;
    }
  }
  openSocket() {
    return new Promise((u) => {
      const o = this.origin.replace(/^http/, "ws") + this.ingress + "ws";
      let r;
      try {
        r = new WebSocket(o);
      } catch {
        this.failedAt = Date.now(), u(!1);
        return;
      }
      let h = !1;
      const p = (k) => {
        h || (h = !0, clearTimeout(b), k || (this.failedAt = Date.now(), r.close()), u(k));
      }, b = setTimeout(() => p(!1), Av);
      r.onmessage = (k) => {
        let v;
        try {
          v = JSON.parse(String(k.data));
        } catch {
          return;
        }
        if (!h && v.server_version) {
          this.serverBase = typeof v.base_url == "string" ? v.base_url.replace(/\/+$/, "") : null, this.ws = r, p(!0);
          return;
        }
        this.handle(v);
      }, r.onerror = () => p(!1), r.onclose = () => {
        if (p(!1), this.ws === r) {
          this.ws = null;
          for (const k of this.waiting.values())
            clearTimeout(k.timer), k.reject(new Error("liaison Music Assistant fermée"));
          this.waiting.clear(), !this.closed && this.listeners.size > 0 && (this.reconnect = setTimeout(() => {
            this.reconnect = null, this.failedAt = 0, this.ready();
          }, 3e3));
        }
      };
    });
  }
  handle(u) {
    if (u.message_id !== void 0) {
      const o = String(u.message_id), r = this.waiting.get(o);
      if (!r) return;
      if (u.error_code !== void 0) {
        clearTimeout(r.timer), this.waiting.delete(o), r.reject(new Error(String(u.details ?? u.error_code)));
        return;
      }
      if (u.partial) {
        Array.isArray(u.result) && r.parts.push(...u.result);
        return;
      }
      clearTimeout(r.timer), this.waiting.delete(o), r.resolve(
        r.parts.length > 0 && Array.isArray(u.result) ? [...r.parts, ...u.result] : u.result
      );
      return;
    }
    if (typeof u.event == "string")
      for (const o of this.listeners) o(u);
  }
}
function Ch(c) {
  const u = window.location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `ingress_session=${c};path=/api/hassio_ingress/;SameSite=Strict${u}`;
}
const Mv = { hidden: [], reversed: [] }, jh = "md_vinyl_library", Ih = "mdvinyl.library.v1";
function Ph(c) {
  const u = c ?? {}, o = (r) => Array.isArray(r) ? [...new Set(r.filter((h) => typeof h == "string"))] : [];
  return { hidden: o(u.hidden), reversed: o(u.reversed) };
}
function bu() {
  try {
    return Ph(JSON.parse(localStorage.getItem(Ih) ?? "null"));
  } catch {
    return { ...Mv };
  }
}
function xo(c) {
  try {
    localStorage.setItem(Ih, JSON.stringify(c));
  } catch {
  }
}
function qh(c) {
  return {
    cached: bu,
    async load() {
      try {
        const u = await c.callWS({
          type: "frontend/get_user_data",
          key: jh
        });
        if (u?.value === null || u?.value === void 0) return bu();
        const o = Ph(u.value);
        return xo(o), o;
      } catch {
        return bu();
      }
    },
    async save(u) {
      xo(u), await c.callWS({ type: "frontend/set_user_data", key: jh, value: u });
    }
  };
}
function oo() {
  return {
    cached: bu,
    async load() {
      return bu();
    },
    async save(c) {
      xo(c);
    }
  };
}
const _h = "https://lrclib.net/api", Jl = { lines: [], synced: !1, plain: null, instrumental: !1 }, vu = /* @__PURE__ */ new Map();
function Tv(c) {
  return `${c.artist}::${c.title}::${Math.round(c.duration ?? 0)}`;
}
async function Nv(c, u) {
  if (!c.title || !c.artist) return Jl;
  const o = Tv(c), r = vu.get(o);
  if (r) return r;
  let h = Jl;
  try {
    h = await Cv(c, u) ?? await jv(c, u) ?? Jl;
  } catch (p) {
    if (p?.name === "AbortError") throw p;
    h = Jl;
  }
  return vu.set(o, h), vu.size > 80 && vu.delete(vu.keys().next().value), h;
}
async function Cv(c, u) {
  const o = new URLSearchParams({
    artist_name: c.artist,
    track_name: c.title,
    album_name: c.album ?? "",
    duration: String(Math.round(c.duration ?? 0))
  }), r = await fetch(`${_h}/get?${o}`, { signal: u });
  return r.ok ? $h(await r.json()) : null;
}
async function jv(c, u) {
  const o = new URLSearchParams({ track_name: c.title, artist_name: c.artist }), r = await fetch(`${_h}/search?${o}`, { signal: u });
  if (!r.ok) return null;
  const h = await r.json();
  if (!Array.isArray(h) || h.length === 0) return null;
  const p = c.duration ?? 0, b = (O) => O.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim(), k = b(c.title), v = b(c.artist), m = (O) => {
    const K = p > 0 ? Math.abs(O.duration - p) : 0;
    let D = Math.min(K, 60);
    return p > 0 && K > 10 && (D += 40), O.trackName && b(O.trackName) !== k && (D += 25), O.artistName && b(O.artistName) !== v && (D += 60), D;
  }, C = [...h.filter((O) => O.syncedLyrics)].sort((O, K) => m(O) - m(K))[0] ?? [...h].sort((O, K) => m(O) - m(K))[0];
  if (!C) return null;
  const U = p > 0 ? Math.abs(C.duration - p) : 0;
  return p > 0 && U > 25 ? {
    lines: [],
    synced: !1,
    plain: C.plainLyrics ?? (C.syncedLyrics ? Uv(C.syncedLyrics) : null),
    instrumental: !!C.instrumental
  } : $h(C);
}
function $h(c) {
  if (c.instrumental)
    return { lines: [], synced: !1, plain: null, instrumental: !0 };
  const u = c.syncedLyrics ? So(c.syncedLyrics) : [];
  return {
    lines: u,
    synced: u.length > 0,
    plain: c.plainLyrics ?? null,
    instrumental: !1
  };
}
function So(c) {
  const u = /\[(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g, o = [];
  for (const r of c.split(/\r?\n/)) {
    u.lastIndex = 0;
    const h = [];
    let p, b = 0;
    for (; (p = u.exec(r)) !== null && p.index === b; ) {
      b = u.lastIndex;
      const v = Number(p[1]), m = Number(p[2]), S = p[3] ? +`0.${p[3]}` : 0;
      h.push(v * 60 + m + S);
    }
    if (h.length === 0) continue;
    const k = r.slice(b).trim();
    for (const v of h) o.push({ time: v, text: k });
  }
  return o.sort((r, h) => r.time - h.time);
}
function qv(c, u) {
  let o = 0, r = c.length - 1, h = -1;
  for (; o <= r; ) {
    const p = o + r >> 1;
    c[p].time <= u ? (h = p, o = p + 1) : r = p - 1;
  }
  return h;
}
function Uv(c) {
  return c.split(`
`).map((u) => u.replace(/\[\d+:\d+(?:[.:]\d+)?\]/g, "").trim()).filter((u) => u.length > 0).join(`
`);
}
const kv = 3800, Ov = 0.25, Ie = No(), Uh = {
  items: [],
  current: -1,
  locked: 1 / 0,
  full: !1,
  total: 0,
  note: null
};
function Dv({ embedded: c } = {}) {
  const [u, o] = z.useState(() => {
    const A = Vs();
    return Ie && !A.entityId ? { ...A, entityId: yo } : A;
  }), [r, h] = z.useState(
    () => c ? !Vs().entityId : !Ie && !gh(Vs())
  ), [p, b] = z.useState(null), [k, v] = z.useState("idle"), [m, S] = z.useState(Ql), [C, U] = z.useState(Jl), [O, K] = z.useState(!1), [D, Z] = z.useState(
    () => Ie && new URLSearchParams(window.location.search).has("lyrics")
  ), [ee, he] = z.useState(-1), [ce, P] = z.useState(!1), [oe, be] = z.useState(
    () => Ie && new URLSearchParams(window.location.search).has("playlists") ? "playlists" : "albums"
  ), [ne, ve] = z.useState([]), [je, Ue] = z.useState([]), [tt, fe] = z.useState(!1), [Pe, De] = z.useState(null), [V, E] = z.useState(() => oo().cached()), B = z.useRef(oo()), [X, ae] = z.useState(""), [W, y] = z.useState(null), [j, J] = z.useState(!1), [G, F] = z.useState(!1), [_, ue] = z.useState(Uh), [Me, ze] = z.useState(null), [Yt, Xe] = z.useState(!1), [ia, Dt] = z.useState(null), [bt, jt] = z.useState(!1), [Sa, En] = z.useState([]), [$, re] = z.useState(!1), [Ee, Re] = z.useState(null), [xt, Ht] = z.useState(!1), [qe, st] = z.useState(!1), [ht, _e] = z.useState(
    () => Ie && new URLSearchParams(window.location.search).has("rest")
  ), Qe = z.useRef(null), pt = z.useRef(null), ua = z.useRef(null), sa = z.useRef(null), Fl = z.useRef(null), fl = z.useRef(null), St = z.useRef(null), ra = z.useRef(null), rt = z.useRef(null), An = z.useRef(Jl), pi = z.useRef(Date.now()), Rt = p?.attributes, Et = Rt?.media_title ?? "", ja = Rt?.media_artist ?? "", Ha = Rt?.media_album_name ?? "", At = Rt?.media_duration ?? 0, Il = Rt?.friendly_name ?? "", Ea = p?.state === "playing", { haUrl: dl, token: Va, entityId: zt } = u;
  z.useEffect(() => {
    if (c) {
      if (!zt) return;
      rt.current = null, b(null), ua.current = c, c.onStatus = v, c.onState = (we) => {
        rt.current = we, b(we);
      }, c.connect([zt]);
      const I = new Nh(c);
      return sa.current = I, B.current = qh(c), yh({ haUrl: "", token: "" }), () => {
        I.close(), sa.current === I && (sa.current = null);
      };
    }
    if (!Ie && (!Va || !zt)) return;
    rt.current = null, b(null);
    const A = { haUrl: dl, token: Va }, H = Ie ? new pv() : new k1(A);
    ua.current = H, H.onStatus = v, H.onState = (I) => {
      rt.current = I, b(I);
    }, H.connect([zt]), Ie || yh(A);
    const Q = Ie ? null : new Nh(H, xu(A));
    return sa.current = Q, B.current = Ie ? oo() : qh(H), () => {
      H.close(), Q?.close(), ua.current = null, sa.current === Q && (sa.current = null);
    };
  }, [c, dl, Va, zt]);
  const Pl = z.useMemo(
    () => R1(
      { haUrl: dl },
      Rt?.entity_picture_local || Rt?.entity_picture
    ),
    [dl, Va, Rt?.entity_picture, Rt?.entity_picture_local]
  ), [vi, Su] = z.useState(null);
  z.useEffect(() => {
    if (Ie || !Et) return;
    let A = !0;
    const H = async (Q) => {
      try {
        const I = await He()?.currentCover(Et);
        if (!A) return;
        I && c1(I) ? Su({ title: Et, url: I }) : Q > 0 && setTimeout(() => A && void H(Q - 1), 1500);
      } catch {
      }
    };
    return H(2), () => {
      A = !1;
    };
  }, [Et, zt]);
  const Eu = z.useMemo(
    () => Math.min(window.innerHeight * 0.74, window.innerWidth * 0.44) * 1.04 * (window.devicePixelRatio || 1),
    []
  ), hl = vi && vi.title === Et ? Xs(vi.url, Eu) : Pl;
  z.useEffect(() => {
    if (!hl) {
      S(Ql);
      return;
    }
    let A = !1;
    return Rh(hl).then((H) => {
      A || S(H);
    }), () => {
      A = !0;
    };
  }, [hl]), z.useEffect(() => {
    if (!u.lyrics || !Et || !ja) {
      U(Jl), An.current = Jl;
      return;
    }
    if (Ie) {
      const Q = {
        lines: So(vv),
        synced: !0,
        plain: null,
        instrumental: !1
      };
      An.current = Q, U(Q), K(!1);
      return;
    }
    const A = new AbortController();
    K(!0), he(-1);
    const H = async () => {
      try {
        const Q = await He()?.currentLyrics(Et), I = Q ? So(Q) : [];
        return I.length > 0 ? { lines: I, synced: !0, plain: null, instrumental: !1 } : null;
      } catch {
        return null;
      }
    };
    return (async () => {
      try {
        const Q = await H() ?? await Nv({ title: Et, artist: ja, album: Ha, duration: At }, A.signal);
        if (A.signal.aborted) return;
        An.current = Q, U(Q), K(!1);
      } catch {
      }
    })(), () => A.abort();
  }, [u.lyrics, Et, ja, Ha, At]), z.useEffect(() => {
    let A = 0, H = performance.now(), Q = 0, I = 0, we = mo, gt = 1, wt = "", Bt = -1;
    const nt = 200 * (u.rpm / 45) ** 2, ca = (Ja) => {
      const oa = Math.min(0.1, (Ja - H) / 1e3);
      H = Ja;
      const Ft = E1(rt.current, Date.now()), Qa = Ft.playing ? 1 : 0, xl = Qa > I ? 0.45 : 1.1;
      I += (Qa - I) * (1 - Math.exp(-oa / xl)), I < 5e-4 && (I = 0), Q = (Q + I * nt * oa) % 360;
      const Wa = Ft.duration > 0 && Ft.playing, Sl = Fl.current ?? (Wa ? wo(Ft.progress) : mo), Un = Fl.current !== null ? 0.05 : 0.4;
      we += (Sl - we) * (1 - Math.exp(-oa / Un));
      const qt = Ft.playing ? 0 : 1;
      gt += (qt - gt) * (1 - Math.exp(-oa / 0.4)), fl.current?.style.setProperty("--spin", `${Q.toFixed(2)}deg`), St.current?.style.setProperty("--arm", `${we.toFixed(3)}deg`), St.current?.style.setProperty("--lift", gt.toFixed(3)), ra.current && (ra.current.style.transform = `scaleX(${Ft.progress.toFixed(4)})`);
      const El = Gs(Ft.position);
      El !== wt && (wt = El, pt.current && (pt.current.textContent = El));
      const nn = An.current.lines;
      if (nn.length > 0) {
        const Ma = qv(nn, Ft.position + Ov);
        Ma !== Bt && (Bt = Ma, he(Ma));
      }
      A = requestAnimationFrame(ca);
    };
    return A = requestAnimationFrame(ca), () => cancelAnimationFrame(A);
  }, [u.rpm]), z.useEffect(() => {
    const A = Qe.current;
    A && (A.style.setProperty("--pal-a", m.a), A.style.setProperty("--pal-b", m.b), A.style.setProperty("--pal-deep", m.deep), A.style.setProperty("--vinyl-tint", u.vinylTint || m.vivid), A.style.setProperty(
      "--vinyl-tint-2",
      u.vinylTint ? r1(u.vinylTint, 50) : m.vivid2
    ));
  }, [m, u.vinylTint]), z.useEffect(() => {
    const A = Qe.current;
    if (!A) return;
    const H = () => {
      const I = A.querySelector(".disc");
      if (!I) return;
      const we = A.clientWidth, gt = Math.min(400, we * 0.88), wt = I.offsetWidth * 1.96 + 48, Bt = Math.max(0.55, Math.min(1, (we - gt) / wt));
      A.style.setProperty("--stage-fit", Bt.toFixed(3));
    };
    H();
    const Q = new ResizeObserver(H);
    return Q.observe(A), () => Q.disconnect();
  }, []);
  const [gi, zn] = z.useState(null), yi = Ie && so().vinyl || u.vinyl, wn = Ie && so().marbleMotif || u.marbleMotif;
  z.useEffect(() => {
    const A = yi === "marble" ? yv(wn) : null;
    if (!A) {
      zn(null);
      return;
    }
    let H = !0;
    return A.then((Q) => {
      const I = Qe.current;
      !H || !I || (I.style.setProperty("--marble-color", `url("${Q.color}")`), I.style.setProperty("--marble-dark", `url("${Q.dark}")`), I.style.setProperty("--marble-light", `url("${Q.light}")`), zn(wn));
    }), () => {
      H = !1;
    };
  }, [wn, yi]), z.useEffect(() => {
    let A;
    const H = () => {
      clearTimeout(A), A = setTimeout(() => st(!0), kv);
    }, Q = () => {
      pi.current = Date.now(), st(!1), _e(!1), H();
    };
    H();
    for (const I of ["pointerdown", "pointermove", "keydown", "wheel"])
      window.addEventListener(I, Q, { passive: !0 });
    return () => {
      clearTimeout(A);
      for (const I of ["pointerdown", "pointermove", "keydown", "wheel"])
        window.removeEventListener(I, Q);
    };
  }, []), z.useEffect(() => {
    if (u.idleMinutes <= 0) return;
    const A = u.idleMinutes * 6e4, H = setInterval(() => {
      if (rt.current?.state === "playing") {
        pi.current = Date.now();
        return;
      }
      Date.now() - pi.current > A && _e(!0);
    }, 15e3);
    return () => clearInterval(H);
  }, [u.idleMinutes]), z.useEffect(() => {
    const H = setInterval(async () => {
      try {
        const I = await (await fetch(`./version.json?_=${Date.now()}`, { cache: "no-store" })).json();
        I.build && I.build !== "1790421297388" && window.location.reload();
      } catch {
      }
    }, 9e5);
    return () => clearInterval(H);
  }, []);
  const Aa = z.useRef(!1);
  z.useEffect(() => {
    k !== "connected" || Aa.current || (Aa.current = !0, B.current.load().then((A) => {
      at.current = JSON.stringify(A), E(A);
    }));
  }, [k]);
  const at = z.useRef(JSON.stringify(V));
  z.useEffect(() => {
    const A = JSON.stringify(V);
    if (A === at.current) return;
    const H = setTimeout(() => {
      at.current = A, B.current.save(V).catch(() => {
      });
    }, 500);
    return () => clearTimeout(H);
  }, [V]);
  const vt = z.useMemo(() => new Set(V.hidden), [V.hidden]), qa = z.useMemo(() => new Set(V.reversed), [V.reversed]), Mn = z.useRef(qa);
  Mn.current = qa;
  const Au = (A, H) => A.includes(H) ? A.filter((Q) => Q !== H) : [...A, H], Ws = z.useCallback(
    (A) => E((H) => ({ ...H, hidden: Au(H.hidden, A) })),
    []
  ), zu = z.useCallback(
    (A) => E((H) => ({ ...H, reversed: Au(H.reversed, A) })),
    []
  ), _l = z.useCallback(
    (A, H) => E((Q) => {
      const I = new Set(A), we = Q.hidden.filter((gt) => !I.has(gt));
      return { ...Q, hidden: H ? we : [...we, ...A] };
    }),
    []
  ), Ua = z.useRef(null), Ga = z.useRef({ albums: null, playlists: null }), He = z.useCallback(() => {
    const A = ua.current;
    return A ? (Ua.current = Ua.current ?? (Ie ? ov(A, zt) : $1(A, zt, sa.current)), Ua.current) : null;
  }, [zt]);
  z.useEffect(() => {
    Ua.current = null, ue(Uh);
  }, [zt]);
  const ka = z.useRef(/* @__PURE__ */ new Set()), Vt = z.useCallback(
    async (A) => {
      if ((A === "albums" ? ne.length > 0 : je.length > 0) || ka.current.has(A)) return;
      const Q = He();
      if (Q) {
        ka.current.add(A), fe(!0), De(null);
        try {
          A === "albums" ? ve(await Q.albums()) : Ue(await Q.playlists());
        } catch (I) {
          De(
            `Impossible de lire la bibliothèque : ${I instanceof Error ? I.message : String(I)}`
          );
        } finally {
          ka.current.delete(A), fe(ka.current.size > 0);
        }
      }
    },
    [ne.length, je.length, He]
  ), lt = z.useCallback(() => {
    F(!1), jt(!1), Z(!1), P(!0), Vt(oe);
  }, [oe, Vt]), wu = z.useCallback(
    (A) => {
      be(A), Vt(A);
    },
    [Vt]
  ), Tn = oe === "albums" ? ne : je, Za = z.useMemo(() => {
    const A = W ? (
      // Une recherche montre tout : on cherche justement ce qu'on ne voit pas.
      oe === "albums" ? [...W.albums, ...W.tracks] : W.playlists
    ) : Tn.filter((Q) => !vt.has(Q.uri)), H = Math.min(window.innerHeight * 0.72, window.innerWidth * 0.42) * u.libraryZoom * (window.devicePixelRatio || 1);
    return A.map((Q) => ({ ...Q, image: Xs(Q.image, H) }));
  }, [vt, oe, W, u.libraryZoom, Tn]), ml = z.useMemo(() => je.find((A) => A.pinned) ?? null, [je]), bi = z.useRef({ tab: oe, searching: !1 });
  bi.current = { tab: oe, searching: W !== null };
  const Mu = z.useCallback((A) => {
    bi.current.searching || (Ga.current[bi.current.tab] = A);
  }, []), xi = z.useRef(!1);
  z.useEffect(() => {
    if (Ie || xi.current || !p) return;
    xi.current = !0;
    const A = () => {
      Vt("albums"), Vt("playlists");
    }, H = typeof window.requestIdleCallback == "function", Q = H ? window.requestIdleCallback(A, { timeout: 3e3 }) : window.setTimeout(A, 1200);
    return () => {
      H ? window.cancelIdleCallback(Q) : clearTimeout(Q);
    };
  }, [p, Vt]), z.useEffect(() => {
    const A = X.trim();
    if (A.length < 2) {
      y(null), J(!1);
      return;
    }
    let H = !0;
    J(!0);
    const Q = setTimeout(async () => {
      const I = He();
      if (I)
        try {
          const we = await I.search(A);
          H && y(we);
        } catch (we) {
          H && (De(
            `Recherche impossible : ${we instanceof Error ? we.message : String(we)}`
          ), y({ albums: [], playlists: [], tracks: [] }));
        } finally {
          H && J(!1);
        }
    }, 320);
    return () => {
      H = !1, clearTimeout(Q);
    };
  }, [X, He]);
  const $l = z.useRef(0), pl = z.useRef(0), Xa = z.useRef(!1), Gt = z.useRef(!1), We = z.useCallback(async () => {
    const A = He();
    if (!A) return;
    if (Xa.current) {
      Gt.current = !0;
      return;
    }
    const H = ++pl.current, Q = performance.now();
    Xe(!0), Dt(null);
    try {
      const I = await A.queue();
      if (H !== pl.current || Q < $l.current) return;
      if (Xa.current) {
        Gt.current = !0;
        return;
      }
      ue(I);
    } catch (I) {
      Dt(
        `Impossible de lire la file : ${I instanceof Error ? I.message : String(I)}`
      );
    } finally {
      H === pl.current && Xe(!1);
    }
  }, [He]);
  z.useEffect(() => {
    G || (Xa.current = !1), G && We();
  }, [G, Et, We]), z.useEffect(() => {
    if (!G) return;
    const A = He();
    if (!A) return;
    let H;
    const Q = A.watchQueue(() => {
      clearTimeout(H), H = setTimeout(() => {
        We();
      }, 180);
    });
    return () => {
      Q(), clearTimeout(H);
    };
  }, [G, We, He]);
  const Nn = z.useCallback(
    async (A, H) => {
      const Q = He(), I = _.items[A];
      if (!(!Q || !I || A === H)) {
        $l.current = performance.now(), ue((we) => {
          const gt = [...we.items], [wt] = gt.splice(A, 1);
          return gt.splice(H, 0, wt), { ...we, items: gt };
        });
        try {
          await Q.move(I, H - A);
        } catch (we) {
          Dt(
            `Déplacement refusé : ${we instanceof Error ? we.message : String(we)}`
          ), $l.current = 0, We();
        }
      }
    },
    [_.items, We, He]
  ), Tu = z.useRef(null), Si = z.useCallback(
    async (A) => {
      const H = _.items[A];
      if (!H || A === _.current) return;
      const Q = _.locked + 1;
      if (A > _.locked) {
        A !== Q && await Nn(A, Q);
        return;
      }
      try {
        await He()?.playNext(H);
      } catch (I) {
        Dt(`Impossible : ${I instanceof Error ? I.message : String(I)}`);
      }
    },
    [Nn, _, He]
  ), Nu = z.useCallback(
    async (A) => {
      const H = He(), Q = _.items[A];
      if (!(!H || !Q || A <= _.locked)) {
        $l.current = performance.now(), ue((I) => ({
          ...I,
          items: I.items.filter((we) => we.id !== Q.id),
          total: Math.max(0, I.total - 1)
        }));
        try {
          await H.remove(Q);
        } catch (I) {
          Dt(`Impossible de retirer ce morceau : ${I instanceof Error ? I.message : String(I)}`), $l.current = 0, We();
        }
      }
    },
    [_.items, _.locked, We, He]
  );
  z.useEffect(() => {
    if (Me === null) return;
    const A = _.items[_.current];
    A && A.uri === Tu.current && ze(null);
  }, [_, Me]), z.useEffect(() => {
    if (Me === null) return;
    const A = setTimeout(() => ze(null), 8e3);
    return () => clearTimeout(A);
  }, [Me]);
  const vl = z.useRef(null), Fs = z.useCallback(
    async (A) => {
      const H = He();
      if (H) {
        Tu.current = A.uri, ze(A.id);
        try {
          await H.jumpTo(A), vl.current && clearTimeout(vl.current), vl.current = setTimeout(() => {
            We();
          }, 1200);
        } catch (Q) {
          ze(null), Dt(
            `Impossible d'aller à ce morceau : ${Q instanceof Error ? Q.message : String(Q)}`
          );
        }
      }
    },
    [We, He]
  ), Zt = z.useCallback(async () => {
    re(!0), Re(null);
    try {
      En(
        c ? c.players() : Ie ? To.map((A) => ({
          entity_id: A.entity_id,
          state: A.entity_id === zt ? p?.state ?? "idle" : "idle",
          attributes: { friendly_name: A.name }
        })) : await Zh({ haUrl: dl, token: Va })
      );
    } catch (A) {
      Re(
        `Impossible de lister les enceintes : ${A instanceof Error ? A.message : String(A)}`
      );
    } finally {
      re(!1);
    }
  }, [c, p?.state, zt, dl, Va]), en = z.useCallback((A) => {
    o((H) => {
      const Q = { ...H, entityId: A };
      return fo(Q), Q;
    }), jt(!1);
  }, []), Cu = z.useCallback(
    async (A) => {
      const H = He();
      if (H)
        try {
          await H.transferTo(A);
        } catch (Q) {
          Re(
            `Transfert refusé : ${Q instanceof Error ? Q.message : String(Q)}`
          );
          return;
        }
      en(A);
    },
    [en, He]
  ), Ei = z.useCallback((A, H) => {
    Ua.current?.play(A, { reversed: Mn.current.has(A.uri) });
    const Q = H.parentElement, I = (Fa) => Qe.current?.querySelector(Fa) ?? null, we = I(".sleeve"), gt = I(".library");
    if (!Q || !we) {
      P(!1);
      return;
    }
    const wt = we.getBoundingClientRect(), Bt = H.dataset.i === void 0 ? Math.max(H.offsetHeight, 48) : H.offsetWidth, nt = H.getBoundingClientRect(), ca = parseFloat(Q.style.getPropertyValue("--arc")) || 8, Ja = parseFloat(Q.dataset.offset ?? "") || 0, oa = parseFloat(H.dataset.i ?? "") || 0, Ft = H.dataset.i === void 0 ? "0deg" : `${90 + (oa - Ja) * ca}deg`, Qa = nt.left + nt.width / 2 - Bt / 2, xl = nt.top + nt.height / 2 - Bt / 2, Wa = wt.width / Bt, Sl = wt.left + wt.width / 2 - (Qa + Bt / 2), Un = wt.top + wt.height / 2 - (xl + Bt / 2), qt = document.createElement("div"), El = Qe.current ?? document.body, nn = El.getBoundingClientRect();
    qt.className = "flyer", qt.style.transformOrigin = "50% 50%", qt.style.left = `${Qa - nn.left}px`, qt.style.top = `${xl - nn.top}px`, qt.style.width = `${Bt}px`, qt.style.height = `${Bt}px`, A.image && (qt.style.backgroundImage = `url("${A.image}")`), El.appendChild(qt);
    const Ma = (Fa, _s) => I(Fa)?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 260,
      delay: _s,
      easing: "ease-out",
      fill: "forwards"
    }), Is = [Ma(".disc", 0), Ma(".tonearm", 0), Ma(".tonearm-base", 0)], Ps = qt.animate(
      [
        { transform: `perspective(2400px) rotateY(${Ft}) scale(1)`, offset: 0 },
        // Elle se déhanche d'abord hors du bac, avant de partir.
        { transform: `perspective(2400px) rotateY(${Ft}) scale(1.06) translateY(-3%)`, offset: 0.22 },
        {
          transform: `perspective(2400px) rotate(-3deg) rotateY(0deg) translate(${Sl}px, ${Un}px) scale(${Wa})`,
          offset: 1
        }
      ],
      { duration: 880, easing: "cubic-bezier(0.32, 0.72, 0, 1)", fill: "forwards" }
    );
    gt?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 420,
      delay: 180,
      easing: "ease-out",
      fill: "forwards"
    }), window.setTimeout(() => P(!1), 620), Ps.finished.then(() => {
      for (const Fa of Is) Fa?.cancel();
      I(".disc")?.animate(
        [
          { opacity: 0, transform: "translateY(-50%) translateX(-14%) scale(0.94)" },
          { opacity: 1, transform: "translateY(-50%) translateX(0) scale(1)" }
        ],
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
      for (const Fa of [".tonearm", ".tonearm-base"])
        I(Fa)?.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 520,
          delay: 180,
          easing: "ease-out"
        });
      qt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, delay: 120, fill: "forwards" }).finished.then(
        () => qt.remove(),
        () => qt.remove()
      );
    });
  }, []);
  z.useEffect(() => {
    const A = new URLSearchParams(window.location.search);
    Ie && (A.has("lib") || A.has("playlists")) && lt(), Ie && A.has("queue") && F(!0);
  }, []);
  const Ze = z.useCallback(
    (A, H = {}) => {
      ua.current?.callService("media_player", A, H, u.entityId)?.catch(() => {
      });
    },
    [u.entityId]
  ), Ai = z.useRef(null);
  z.useEffect(() => {
    if (!p) return;
    const A = Ai.current;
    if (Ai.current = Ea, A === null || A === Ea) return;
    const H = Ea ? u.onPlay : u.onStop;
    if (!x1(H)) return;
    const [Q, I] = H.service.trim().split(".");
    !Q || !I || ua.current?.callService(Q, I, {}, H.entityId.trim() || void 0)?.catch(() => {
    });
  }, [p, Ea, u.onPlay, u.onStop]);
  const [ju, gl] = z.useState({ nonce: 0, dir: 1 }), Cn = z.useCallback(
    (A) => gl((H) => ({ nonce: H.nonce + 1, dir: A })),
    []
  ), tn = z.useCallback(() => Ze("media_play_pause"), [Ze]), qu = z.useCallback(() => Ze("media_play"), [Ze]), zi = z.useCallback(() => Ze("media_pause"), [Ze]), jn = z.useCallback(() => {
    Cn(1), Ze("media_next_track");
  }, [Cn, Ze]), qn = z.useCallback(() => {
    Cn(-1), Ze("media_previous_track");
  }, [Cn, Ze]), yl = z.useCallback(
    (A) => Ze("media_seek", { seek_position: Math.max(0, Math.round(A)) }),
    [Ze]
  ), za = z.useCallback(
    (A) => {
      At > 0 && yl(A * At);
    },
    [At, yl]
  ), wi = z.useCallback(() => {
    Ze("repeat_set", { repeat: { off: "all", all: "one", one: "off" }[Rt?.repeat ?? "off"] });
  }, [Rt?.repeat, Ze]);
  z.useEffect(() => {
    const A = (H) => {
      if (Hh(H) || r || ce) return;
      const Q = Rt?.volume_level ?? 0;
      switch (H.key) {
        case " ":
          H.preventDefault(), tn();
          break;
        case "ArrowRight":
          jn();
          break;
        case "ArrowLeft":
          qn();
          break;
        case "ArrowUp":
          Ze("volume_set", { volume_level: Math.min(1, Q + 0.05) });
          break;
        case "ArrowDown":
          Ze("volume_set", { volume_level: Math.max(0, Q - 0.05) });
          break;
        case "l":
          F(!1), jt(!1), Z((I) => !I);
          break;
      }
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [Rt?.volume_level, Ze, jn, qn, ce, r, tn]);
  const Mi = (A) => {
    fo(A), o(A), h(!1);
  }, bl = `${u.rpm >= 45 ? "45 RPM" : "33⅓ RPM"} · STEREO`, Uu = [Il.toUpperCase(), At > 0 ? Gs(At) : ""].filter(Boolean).join(" · "), Ti = u.lyrics && (C.lines.length > 0 || !!C.plain), Ni = {
    connecting: "Connexion à Home Assistant…",
    reconnecting: "Reconnexion…",
    unauthorized: "Jeton refusé — ouvre les réglages",
    error: "Erreur de connexion"
  }, Ka = {
    vinyl: u.vinyl,
    background: u.background,
    marbleMotif: u.marbleMotif,
    ...Ie ? so() : {}
  }, wa = G || bt, ln = (A) => {
    F(A === "queue"), jt(A === "speakers"), Z(A === "lyrics");
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "app",
      ref: Qe,
      "data-vinyl": Ka.vinyl,
      "data-marble": gi ?? void 0,
      "data-bg": Ka.background,
      "data-panel": wa,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "backdrop", children: Ka.background === "adaptive" && /* @__PURE__ */ f.jsx(Dh, { image: hl, className: "backdrop__art" }) }),
        /* @__PURE__ */ f.jsx("div", { className: "stage", children: /* @__PURE__ */ f.jsx(
          P1,
          {
            title: u.labelText || Et,
            artist: ja,
            album: Ha,
            footer: bl,
            mark: Uu,
            coverUrl: hl,
            settings: u,
            sleeveFront: xt,
            onToggleSleeve: () => Ht((A) => !A),
            onTogglePlay: tn,
            armOverride: Fl,
            onSeekProgress: za,
            onPlay: qu,
            onPause: zi,
            onNext: jn,
            onPrevious: qn,
            seekable: At > 0,
            spinRef: fl,
            armRef: St,
            swap: ju
          }
        ) }),
        /* @__PURE__ */ f.jsxs("div", { className: "hud", "data-quiet": qe && !r, children: [
          /* @__PURE__ */ f.jsx(
            n1,
            {
              entity: p,
              name: Il,
              onLibrary: lt,
              onQueue: () => ln(G ? null : "queue"),
              onSpeakers: () => {
                ln("speakers"), Zt();
              },
              queueOn: G,
              onSettings: () => h(!0),
              onLyrics: () => ln(D ? null : "lyrics"),
              onShuffle: (A) => Ze("shuffle_set", { shuffle: A }),
              onRepeat: wi,
              lyricsOn: D,
              lyricsAvailable: Ti
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "hud__bottom", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "track", children: [
              /* @__PURE__ */ f.jsx("span", { className: "track__title", children: Et || "Rien en lecture" }),
              /* @__PURE__ */ f.jsx("span", { className: "track__artist", children: [ja, Ha].filter(Boolean).join(" — ") })
            ] }),
            /* @__PURE__ */ f.jsx(
              l1,
              {
                entity: p,
                playing: Ea,
                showPlayButton: u.playControl === "button",
                onPlayPause: tn,
                onPrevious: qn,
                onNext: jn,
                onVolume: (A) => Ze("volume_set", { volume_level: A })
              }
            ),
            /* @__PURE__ */ f.jsxs("div", { className: "times", children: [
              /* @__PURE__ */ f.jsx("span", { ref: pt, children: "0:00" }),
              /* @__PURE__ */ f.jsx("span", { className: "times__bar", children: /* @__PURE__ */ f.jsx("span", { className: "times__fill", ref: ra }) }),
              /* @__PURE__ */ f.jsx("span", { children: Gs(At) })
            ] })
          ] })
        ] }),
        Ni[k] && /* @__PURE__ */ f.jsxs("div", { className: "status", children: [
          /* @__PURE__ */ f.jsx("span", { className: "status__dot" }),
          Ni[k]
        ] }),
        D && /* @__PURE__ */ f.jsx(
          g1,
          {
            lyrics: C,
            activeIndex: ee,
            loading: O,
            onClose: () => Z(!1),
            onSeek: yl
          }
        ),
        G && /* @__PURE__ */ f.jsx(
          w1,
          {
            items: _.items,
            loading: Yt,
            error: ia,
            current: _.current,
            locked: _.locked,
            full: _.full,
            total: _.total,
            note: _.note,
            pending: Me,
            onPick: (A) => {
              Fs(A);
            },
            onMove: (A, H) => {
              Nn(A, H);
            },
            onPlayNext: (A) => {
              Si(A);
            },
            onRemove: (A) => {
              Nu(A);
            },
            onSorting: (A) => {
              Xa.current = A, !A && Gt.current && (Gt.current = !1, We());
            },
            onClose: () => F(!1)
          }
        ),
        bt && /* @__PURE__ */ f.jsx(
          C1,
          {
            players: Sa,
            current: zt,
            loading: $,
            error: Ee,
            onListen: en,
            onTransfer: (A) => {
              Cu(A);
            },
            onClose: () => jt(!1)
          }
        ),
        ce && /* @__PURE__ */ f.jsx(
          p1,
          {
            items: Za,
            tab: oe,
            onTab: wu,
            favorite: ml,
            allItems: Tn,
            hidden: vt,
            reversed: qa,
            canReverse: Ua.current?.canReverse() ?? Ie,
            onToggleHidden: Ws,
            onToggleReversed: zu,
            onSetVisible: _l,
            loading: tt,
            error: Pe,
            onPlay: Ei,
            onClose: () => P(!1),
            resumeIndex: W ? null : Ga.current[oe],
            onFocusChange: Mu,
            query: X,
            onQuery: ae,
            searching: j,
            zoom: u.libraryZoom
          }
        ),
        ht && /* @__PURE__ */ f.jsx(T1, { onWake: () => _e(!1) }),
        r && /* @__PURE__ */ f.jsx(
          V1,
          {
            settings: u,
            onSave: Mi,
            onCancel: Ie || (c ? u.entityId : gh(u)) ? () => h(!1) : null,
            requireConnection: !Ie && !c,
            embedded: !!c,
            knownPlayers: c ? c.players() : null
          }
        )
      ]
    }
  );
}
class Rv {
  onState = () => {
  };
  onStatus = () => {
  };
  hass;
  watched = [];
  /** Dernier état publié, pour ne pas réémettre à chaque battement du frontend. */
  last = null;
  constructor(u) {
    this.hass = u;
  }
  connect(u) {
    this.watched = u, this.onStatus("connected"), this.publish();
  }
  close() {
    this.watched = [], this.last = null;
  }
  /**
   * Home Assistant redonne un `hass` neuf à chaque changement, quel qu'il soit —
   * une lampe allumée à l'autre bout de la maison en produit un. On ne prévient
   * l'interface que si NOTRE entité a réellement bougé, sinon l'app se
   * redessinerait plusieurs fois par seconde pour rien.
   */
  update(u) {
    this.hass = u, this.publish();
  }
  publish() {
    const u = this.watched[0];
    if (!u) return;
    const o = this.hass.states[u];
    if (!o) {
      this.onStatus("reconnecting", `Entité ${u} introuvable`);
      return;
    }
    const r = this.last;
    r !== null && r.state === o.state && r.attributes.media_title === o.attributes.media_title && r.attributes.media_position === o.attributes.media_position && r.attributes.media_position_updated_at === o.attributes.media_position_updated_at && r.attributes.volume_level === o.attributes.volume_level && r.attributes.shuffle === o.attributes.shuffle && r.attributes.repeat === o.attributes.repeat && r.attributes.entity_picture === o.attributes.entity_picture || (this.last = o, this.onStatus("connected"), this.onState(o));
  }
  callService(u, o, r = {}, h) {
    return this.hass.callService(
      u,
      o,
      r,
      h ? { entity_id: h } : void 0
    );
  }
  /**
   * Les actions qui RENVOIENT des données passent par le WebSocket brut :
   * `hass.callService` ne remonte pas la réponse, et c'est elle qui porte la
   * bibliothèque, la recherche et la file.
   */
  async callServiceWithResponse(u, o, r = {}, h) {
    const p = await this.hass.callWS({
      type: "call_service",
      domain: u,
      service: o,
      service_data: r,
      ...h ? { target: { entity_id: h } } : {},
      return_response: !0
    });
    return p?.response ?? p;
  }
  /** Commande WebSocket brute : le superviseur, pour joindre Music Assistant. */
  callWS(u) {
    return this.hass.callWS(u);
  }
  /** L'entrée de configuration de Music Assistant, que ciblent get_library et search. */
  async configEntry(u) {
    return (await this.hass.callWS({
      type: "config_entries/get"
    })).find((r) => r.domain === u)?.entry_id ?? null;
  }
  /** Toutes les enceintes visibles, sans passer par le REST. */
  players() {
    return Object.values(this.hass.states).filter((u) => !!u?.entity_id.startsWith("media_player.")).sort((u, o) => {
      const r = u.attributes.mass_player_type ? 0 : 1, h = o.attributes.mass_player_type ? 0 : 1;
      return r !== h ? r - h : (u.attributes.friendly_name ?? u.entity_id).localeCompare(
        o.attributes.friendly_name ?? o.entity_id
      );
    });
  }
}
function Bv(c) {
  const u = Object.values(c.states).filter(
    (h) => !!h?.entity_id.startsWith("media_player.")
  ), o = u.filter((h) => h.attributes.mass_player_type !== void 0), r = o.length > 0 ? o : u;
  return r.find((h) => h.state === "playing")?.entity_id ?? r.find((h) => h.state === "paused")?.entity_id ?? r[0]?.entity_id ?? "";
}
const kh = `@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,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) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,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) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}:root,:host{--pal-a: hsl(220 4% 46%);--pal-b: hsl(220 5% 34%);--pal-deep: hsl(220 6% 12%);--spin: 0deg;--arm: 89deg;--lift: 1;--progress: 0;--ink: hsl(0 0% 100%);--ink-dim: hsl(0 0% 100% / .62);--ink-faint: hsl(0 0% 100% / .32);--panel-w: min(400px, 88cqw);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-soft: cubic-bezier(.4, 0, .2, 1);color-scheme:dark;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-synthesis-weight:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}html,body,#root{height:100%}body{background:#0b0c0e;color:var(--ink);overflow:hidden;overscroll-behavior:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}.app{position:fixed;inset:0;container:platine / size;display:grid;place-items:center;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);isolation:isolate}.backdrop{position:absolute;inset:0;z-index:0;background:var(--pal-deep);transition:background-color 1.4s var(--ease-soft)}.backdrop:before,.backdrop:after{content:"";position:absolute;inset:-20%;transition:background 1.4s var(--ease-soft),opacity 1.4s var(--ease-soft)}.backdrop:before{background:radial-gradient(60% 70% at 22% 30%,var(--pal-a) 0%,transparent 62%),radial-gradient(55% 65% at 82% 78%,var(--pal-b) 0%,transparent 60%);opacity:.55;filter:blur(40px)}.backdrop:after{background:radial-gradient(75% 75% at 50% 50%,transparent 30%,hsl(0 0% 0% / .55) 100%)}.backdrop__art{opacity:.7}.backdrop__art .ambient__layer{filter:blur(18px) saturate(1.35) brightness(.58)}.app[data-bg=subtle] .backdrop:before{opacity:.22}.app[data-bg=neutral] .backdrop{background:linear-gradient(212deg,#b2b2b2,#9a9a9b 45%,#7e7f81)}.app[data-bg=neutral] .backdrop:before,.app[data-bg=neutral] .backdrop:after{opacity:0}.app[data-bg=dark] .backdrop{background:#0c0c0e}.app[data-bg=dark] .backdrop:before{opacity:.12}.stage{--disc: min(calc((100cqh - 190px) / 1.1), calc((100cqw - 80px) / 1.96));--R: calc(var(--disc) / 2);--sleeve: calc(var(--disc) * 1.04);--overlap: calc(var(--disc) * .215);position:relative;z-index:1;display:grid;place-items:center;width:100%;height:100%;transition:transform .42s var(--ease-out)}.app[data-panel=true] .stage{transform:translate(calc(-.5 * var(--panel-w))) scale(var(--stage-fit, 1))}@container platine (max-width: 900px){.app[data-panel=true] .stage{transform:none}}.deck{position:relative;width:calc(var(--sleeve) + var(--disc) - var(--overlap));height:var(--sleeve);overflow:visible;transform:translate(calc(var(--disc) * -.026),-1.5cqh);touch-action:none}.sleeve{position:absolute;top:calc(50% + var(--sleeve-dy, 0px));left:0;width:var(--sleeve);height:var(--sleeve);transform:translateY(-50%) rotate(-3deg);transition:transform .62s var(--ease-out),filter .62s var(--ease-out);z-index:1;cursor:pointer}.sleeve__art{position:absolute;inset:0;object-fit:cover;width:100%;height:100%;border-radius:calc(var(--disc) * .007);background:#2c2d30;box-shadow:0 calc(var(--disc) * .004) calc(var(--disc) * .01) #0000002e,0 calc(var(--disc) * .03) calc(var(--disc) * .07) #00000047}.sleeve__edge{position:absolute;inset:0;pointer-events:none;background:linear-gradient(100deg,hsl(0 0% 0% / .16) 0%,transparent 14%,transparent 92%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 100% / .5) 100%)}.deck[data-sleeve=front] .sleeve{transform:translateY(-50%) translate(calc(var(--disc) * .2)) scale(1.03);z-index:4}.sleeve__placeholder{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(150deg,#3a3c41,#212327);color:var(--ink-faint);font-size:calc(var(--disc) * .07);letter-spacing:.16em;text-transform:uppercase}.disc{position:absolute;top:calc(50% + var(--disc-dy, 0px));right:0;width:var(--disc);height:var(--disc);transform:translateY(-50%);border-radius:50%;z-index:2;cursor:pointer;filter:drop-shadow(0 calc(var(--disc) * .028) calc(var(--disc) * .055) hsl(0 0% 0% / .3));transition:transform .62s var(--ease-out)}.deck[data-sleeve=front] .disc{transform:translateY(-50%) translate(calc(var(--disc) * .06))}.disc__layer{position:absolute;inset:0;border-radius:50%;pointer-events:none}.app[data-vinyl=clear] .disc__material{background:radial-gradient(circle at 34% 24%,#fff,#f4f4f3 34%,#e7e7e5 62%,#d8d8d6 84%,#cfcfcd)}.app[data-vinyl=glass] .disc__material{background:radial-gradient(circle at 34% 24%,#fff6,#ffffff45 46%,#ffffff54);-webkit-backdrop-filter:blur(5px) saturate(.25) brightness(1.18);backdrop-filter:blur(5px) saturate(.25) brightness(1.18)}.app[data-vinyl=glass] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff29,#00000008,#ffffff29 3.4px)}.app[data-vinyl=glass] .disc__light{background:linear-gradient(198deg,#ffffff57,#ffffff1a 20%,#fff0 38%,#0000000d 58%,#0000001f 82%,#00000029)}.app[data-vinyl=black] .disc__material{background:radial-gradient(circle at 34% 24%,#2a2c31,#191b1f 38%,#101216 68%,#0a0b0e)}.app[data-vinyl=tinted] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--pal-a) 30%,#ffffff),color-mix(in oklab,var(--pal-a) 62%,#ffffff) 46%,color-mix(in oklab,var(--pal-a) 88%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__material,.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,#fdfcfa,#f3efe9 46%,#e2ddd5)}.app[data-vinyl=marble] .disc__pattern:after,.app[data-vinyl=splatter] .disc__pattern:after{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 78%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 52%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 82%,#000000) 100%);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:before,.app[data-vinyl=splatter] .disc__pattern:before{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#000000);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:after{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 55%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 80%,#000000) 100%);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.004 0.009' numOctaves='5' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.15 0.95 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.004 0.009' numOctaves='5' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.15 0.95 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>")}.app[data-vinyl=marble] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 72%,#000000);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='5' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0.3 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='5' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0.3 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.55}.app[data-vinyl=marble][data-marble] .disc__pattern:before{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 55%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 80%,#000000) 100%);-webkit-mask-image:var(--marble-color);mask-image:var(--marble-color);-webkit-mask-size:100% 100%;mask-size:100% 100%;opacity:1}.app[data-vinyl=marble][data-marble] .disc__pattern:after{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 55%,#000000);-webkit-mask-image:var(--marble-dark);mask-image:var(--marble-dark);-webkit-mask-size:100% 100%;mask-size:100% 100%;opacity:.75}.app[data-vinyl=marble][data-marble] .disc__veins{background:#fffdf8;-webkit-mask-image:var(--marble-light);mask-image:var(--marble-light);-webkit-mask-size:100% 100%;mask-size:100% 100%;opacity:.85}.app[data-vinyl=marble][data-marble=nuit] .disc__material{background:radial-gradient(circle at 34% 24%,#26272c,#141519,#0b0b0e)}.app[data-vinyl=marble][data-marble=nuit] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 85%,#000000);opacity:.95}.app[data-vinyl=marble][data-marble=nuit] .disc__pattern:after{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 55%,#ffffff);opacity:.8}.app[data-vinyl=marble][data-marble=nuit] .disc__veins{background:#fff;opacity:.95}.app[data-vinyl=marble][data-marble=brume] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 60%,#ffffff)}.app[data-vinyl=marble][data-marble=brume] .disc__pattern:after{background:var(--vinyl-tint, hsl(24 55% 45%));opacity:.6}.app[data-vinyl=marble][data-marble=brume] .disc__veins{background:#fff;opacity:.7}.app[data-vinyl=marble][data-marble=aurore] .disc__pattern:after{background:color-mix(in oklab,var(--vinyl-tint-2, hsl(334 50% 52%)) 92%,#ffffff);opacity:.85}.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#ffffff),color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 46%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 92%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=splatter] .disc__pattern:after{background:#f7f3ec;-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");-webkit-mask-composite:source-over;mask-composite:add;opacity:.9}.app[data-vinyl=splatter] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 45%,#000000);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.75}.app[data-vinyl=marble] .disc__grooves,.app[data-vinyl=splatter] .disc__grooves{opacity:.62}.disc__light{background:linear-gradient(198deg,#ffffff8c,#ffffff2e 18%,#fff0 34%,#0000000f 52%,#00000024 72%,#0000002e 90%,#00000038)}.app[data-vinyl=black] .disc__light{background:linear-gradient(196deg,#ffffff29,#ffffff0d 26%,#fff0 46%,#0000001f 78%,#0003)}.disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff38,#0000000e,#ffffff38 3.4px);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%)}.app[data-vinyl=black] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff1a,#00000073,#ffffff1a 3.4px)}.disc__aniso{background:conic-gradient(from 0deg,hsl(0 0% 100% / .075) 0deg,transparent 44deg,hsl(0 0% 0% / .05) 96deg,transparent 140deg,hsl(0 0% 100% / .06) 187deg,transparent 232deg,hsl(0 0% 0% / .038) 283deg,transparent 320deg,hsl(0 0% 100% / .075) 360deg);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%)}.disc__flecks{--fleck: hsl(0 0% 0% / .075);background:radial-gradient(ellipse 2.6% .9% at 71% 33%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.9% .7% at 30% 64%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.3% .8% at 57% 79%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.6% .6% at 25% 38%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.1% .8% at 79% 59%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.4% .6% at 46% 18%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.8% .7% at 63% 12%,var(--fleck),transparent 70%);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%)}.app[data-vinyl=black] .disc__flecks{--fleck: hsl(0 0% 100% / .13)}.app[data-vinyl=glass] .disc__flecks{--fleck: hsl(0 0% 100% / .16)}.disc__gloss{background:linear-gradient(112deg,transparent 24%,hsl(0 0% 100% / .09) 37%,hsl(0 0% 100% / .24) 44.5%,hsl(0 0% 100% / .05) 52%,transparent 66%);mix-blend-mode:screen;-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%)}.app[data-vinyl=black] .disc__gloss{opacity:.55}.disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .05) 95%,hsl(0 0% 100% / .16) 98%,hsl(0 0% 0% / .08) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .09) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff80,inset 0 2px 3px #ffffff73,inset 0 -2px 4px #0000001a}.app[data-vinyl=black] .disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .3) 95%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 0% / .35) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .07) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff29,inset 0 2px 3px #ffffff2e,inset 0 -2px 4px #0006}.disc__spin{position:absolute;inset:0;border-radius:50%;transform:rotate(var(--spin));will-change:transform;backface-visibility:hidden}.label{position:absolute;top:50%;left:50%;width:46.4%;height:46.4%;transform:translate(-50%,-50%);border-radius:50%;overflow:hidden;background:#f1f0ed;box-shadow:0 0 0 1px #3b3835d9}.label__svg{display:block;width:100%;height:100%}.label__title{font-weight:800;letter-spacing:-.028em}.label__artist{font-weight:650;letter-spacing:-.012em}.label__micro{font-family:Iowan Old Style,Palatino,Palatino Linotype,Georgia,Times New Roman,serif;font-weight:400;letter-spacing:.005em}.tonearm{position:absolute;top:calc(50% + var(--disc-dy, 0px) - .7392 * var(--R));right:calc(.0674 * var(--R));width:0;height:0;z-index:5;pointer-events:none}.tonearm-base{position:absolute;top:calc(50% + var(--disc-dy, 0px) - .7392 * var(--R) - .3655 * var(--R));right:calc(.0674 * var(--R) - .2225 * var(--R));width:calc(var(--R) * .425);height:calc(var(--R) * .641);border-radius:calc(var(--R) * .2125);transform:rotate(-6deg);z-index:0;pointer-events:none;background:#ffffff21;box-shadow:inset 0 0 0 1px #ffffff1f,0 calc(var(--R) * .01) calc(var(--R) * .03) #0000001a}.tonearm__arm{position:absolute;inset:0;transform:rotate(var(--arm));transform-origin:0 0;will-change:transform}.tonearm__svg{position:absolute;left:calc(var(--R) * -.42);top:calc(var(--R) * -.4);width:calc(var(--R) * 2.17);height:calc(var(--R) * .82);overflow:visible;filter:drop-shadow(calc(var(--R) * .006 * (1 + 2 * var(--lift))) calc(var(--R) * .016 * (1 + 2.4 * var(--lift))) calc(var(--R) * .012 * (1 + 2.2 * var(--lift))) hsl(0 0% 0% / .34));transform:scale(calc(1 + .014 * var(--lift)));transform-origin:19.35% 48.8%}.tonearm__grip{position:absolute;top:calc(var(--R) * -.22);left:calc(var(--R) * .86);width:calc(var(--R) * .82);height:calc(var(--R) * .46);pointer-events:auto;touch-action:none;cursor:grab;border-radius:calc(var(--R) * .22)}.tonearm[data-dragging=true] .tonearm__grip{cursor:grabbing}.tonearm[data-dragging=true] .tonearm__svg{filter:drop-shadow(0 0 calc(var(--R) * .05) hsl(0 0% 100% / .35))}.hud{position:absolute;inset:0;z-index:6;display:grid;grid-template-rows:auto 1fr;padding:clamp(14px,2.4cqh,30px) clamp(18px,3cqw,44px);pointer-events:none}.hud__top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;transition:opacity .45s var(--ease-soft)}.hud__bottom{align-self:end;display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:clamp(12px,2cqw,32px)}.hud__tools,.controls,.volume,.hud .iconbtn{pointer-events:auto}.hud__name{padding-left:4px;font-size:clamp(11px,1.4cqh,14px);font-weight:550;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint)}.hud__tools,.hud__left{display:flex;align-items:center;gap:2px}.iconbtn--small{width:clamp(30px,4cqh,40px);height:clamp(30px,4cqh,40px);color:var(--ink-dim)}.iconbtn--small:hover{color:var(--ink)}.iconbtn--small svg{width:52%;height:52%}.badge-one{position:absolute;transform:translateY(.5px);font-size:9px;font-weight:700;line-height:1;pointer-events:none}.iconbtn{position:relative}.track{min-width:0;display:grid;gap:2px}.track__title{font-size:clamp(15px,1.9cqh,22px);font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.track__artist{font-size:clamp(12px,1.5cqh,17px);color:var(--ink-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.times{justify-self:end;display:flex;align-items:center;gap:10px;font-size:clamp(11px,1.4cqh,15px);font-variant-numeric:tabular-nums;color:var(--ink-dim)}.times__bar{position:relative;width:clamp(80px,12cqw,190px);height:3px;border-radius:2px;background:#ffffff2e;overflow:hidden}.times__fill{position:absolute;inset:0;transform-origin:left center;transform:scaleX(var(--progress));background:#fffc}.controls{display:flex;align-items:center;gap:clamp(10px,1.6cqw,22px);padding:8px 12px;border-radius:999px;background:#00000038;-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);box-shadow:inset 0 0 0 1px #ffffff1a;transition:opacity .45s var(--ease-soft),transform .45s var(--ease-out)}.iconbtn{display:grid;place-items:center;width:clamp(38px,5.2cqh,52px);height:clamp(38px,5.2cqh,52px);border-radius:50%;color:var(--ink);transition:background .18s var(--ease-soft),transform .18s var(--ease-out),opacity .2s var(--ease-soft)}.iconbtn:hover{background:#ffffff1f}.iconbtn:active{transform:scale(.9)}.iconbtn[aria-pressed=true]{color:var(--pal-a);background:#ffffff24}.iconbtn--play{width:clamp(46px,6.6cqh,66px);height:clamp(46px,6.6cqh,66px);background:#ffffff24}.iconbtn:disabled{opacity:.28;cursor:default}.iconbtn svg{width:45%;height:45%;fill:currentColor}.iconbtn--play svg{width:42%;height:42%}.volume{display:flex;align-items:center;gap:10px;padding:0 6px}.volume input[type=range]{width:clamp(70px,9cqw,130px);height:22px;appearance:none;background:none;cursor:pointer}.volume input[type=range]::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-webkit-slider-thumb{appearance:none;width:13px;height:13px;margin-top:-5px;border-radius:50%;background:var(--ink);box-shadow:0 1px 4px #0006}.volume input[type=range]::-moz-range-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-moz-range-thumb{width:13px;height:13px;border:0;border-radius:50%;background:var(--ink)}.hud[data-quiet=true] .hud__top,.hud[data-quiet=true] .controls{opacity:0;pointer-events:none}.hud[data-quiet=true] .controls{transform:translateY(8px)}.lyrics{position:absolute;inset:0;z-index:7;display:grid;place-items:center;padding:2cqh clamp(24px,6cqw,90px) 22cqh;background:#0006;-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);animation:fade-in .35s var(--ease-out)}.lyrics__scroll{width:min(760px,100%);height:100%;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent);mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent)}.lyrics__inner{display:grid;gap:clamp(10px,1.6cqh,20px);transition:transform .55s var(--ease-out);padding:40cqh 0}.lyrics__line{cursor:pointer;font-size:clamp(19px,3.1cqh,34px);font-weight:600;line-height:1.24;letter-spacing:-.015em;text-align:center;color:#ffffff4d;transition:color .4s var(--ease-soft),transform .4s var(--ease-out);transform-origin:center;text-wrap:balance}.lyrics__line[data-active=true]{color:var(--ink)}.lyrics__line[data-past=true]{color:#ffffff29}.lyrics__empty{color:var(--ink-dim);font-size:clamp(14px,2cqh,19px);text-align:center}.rest{position:absolute;inset:0;z-index:8;display:grid;place-content:center;justify-items:center;gap:clamp(10px,2cqh,20px);background:#0b0c0eb8;-webkit-backdrop-filter:blur(30px) saturate(.7);backdrop-filter:blur(30px) saturate(.7);animation:fade-in 1.4s var(--ease-soft);cursor:pointer}.rest__clock{font-size:clamp(64px,17cqh,170px);font-weight:200;line-height:1;letter-spacing:-.035em;font-variant-numeric:tabular-nums;color:#ffffffb8}.rest__date{font-size:clamp(13px,1.9cqh,18px);font-weight:450;letter-spacing:.16em;text-transform:uppercase;color:#ffffff57}.rest__hint{position:absolute;bottom:7cqh;left:50%;transform:translate(-50%);color:#ffffff38;font-size:12px;letter-spacing:.1em;text-transform:uppercase}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.library{position:absolute;inset:0;z-index:7;color:var(--ink);background:#0e0f11;animation:fade-in .32s var(--ease-out)}.library__ambient .ambient__layer{filter:blur(16px) saturate(1.5) brightness(.62)}.library__ambient:after{content:"";position:absolute;inset:0;background:radial-gradient(90% 70% at 50% 45%,transparent 40%,hsl(0 0% 0% / .55) 100%),linear-gradient(180deg,hsl(0 0% 0% / .45) 0%,transparent 20%,transparent 68%,hsl(0 0% 0% / .6) 100%)}.library__caption{position:absolute;left:50%;bottom:clamp(12px,3.6cqh,38px);z-index:2;display:grid;justify-items:center;gap:3px;max-width:min(70cqw,720px);transform:translate(-50%);text-align:center;pointer-events:none;text-shadow:0 1px 12px hsl(0 0% 0% / .5)}.library__caption b{max-width:100%;overflow:hidden;font-size:clamp(15px,2.2cqh,20px);font-weight:650;letter-spacing:-.01em;white-space:nowrap;text-overflow:ellipsis}.library__caption span{font-size:clamp(12px,1.6cqh,14px);color:var(--ink-dim)}.library__caption[data-pinned=true] span:before{content:"♥ ";color:#f25f77}.ambient{position:absolute;inset:0;overflow:hidden;pointer-events:none}.ambient__layer{position:absolute;left:50%;top:50%;width:30%;height:30%;background-position:center;background-size:cover;transform:translate(-50%,-50%) scale(4);filter:blur(16px) saturate(1.45);opacity:0;transition:opacity 1.1s var(--ease-soft)}.ambient__layer[data-on=true]{opacity:1}.library__head{position:absolute;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;gap:14px;padding:clamp(14px,2.4cqh,26px) clamp(18px,3cqw,40px);pointer-events:none}.library__head>*{pointer-events:auto}.library__head h1{font-size:clamp(15px,2cqh,20px);font-weight:600;letter-spacing:-.01em}.library__count{margin-left:auto;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint)}.library__error{margin:0 clamp(18px,3cqw,40px);padding:11px 14px;border-radius:10px;font-size:13px;background:#b8352e2e;color:#fbb5b1}.library__chosen{display:grid;justify-items:center;gap:10px;animation:fade-in .3s var(--ease-out)}.library__chosenText{display:flex;align-items:baseline;gap:9px;font-size:clamp(14px,2cqh,18px)}.library__chosenText span{color:var(--ink-dim)}.crate{position:absolute;inset:0;--cover: min(84cqh, 46cqw);--thick: calc(var(--cover) * .032);--radius: calc(var(--cover) * var(--radius-k));overflow:hidden;perspective:2400px;perspective-origin:50% 46%;cursor:grab;touch-action:none}.crate:active{cursor:grabbing}.crate:after{content:"";position:absolute;left:50%;bottom:6%;width:58%;height:22%;transform:translate(-50%);pointer-events:none;background:radial-gradient(50% 50% at 50% 50%,hsl(0 0% 100% / .12),transparent 100%)}.crate__item{position:absolute;top:calc(50% - var(--cover) / 2);left:calc(50% - var(--cover) / 2);width:var(--cover);height:var(--cover);transform-style:preserve-3d;cursor:pointer;will-change:transform}.crate__face,.crate__spine,.crate__opening{position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.crate__face{inset:0;overflow:hidden;box-shadow:0 calc(var(--cover) * .02) calc(var(--cover) * .05) #0000004d}.crate__face--front{transform:translateZ(calc(var(--thick) / 2))}.crate__face--back{transform:rotateY(180deg) translateZ(calc(var(--thick) / 2))}.crate__spine,.crate__opening{top:0;left:calc(50% - var(--thick) / 2);width:var(--thick);height:100%}.crate__spine{transform:rotateY(-90deg) translateZ(calc(var(--cover) / 2))}.crate__opening{transform:rotateY(90deg) translateZ(calc(var(--cover) / 2));background-image:var(--art);background-size:auto 100%;background-position:right center;background-color:#e9e9e6;box-shadow:inset 0 0 0 1px #0000001f}.crate__opening:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0000004d,#ffffff59 42%,#00000038)}.crate__spineFace{position:absolute;inset:0;background:linear-gradient(100deg,var(--spine-a, hsl(220 5% 34%)),var(--spine-b, hsl(220 6% 12%)));box-shadow:inset 0 0 0 1px #ffffff24}.crate__spineFace:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#ffffff29,#0000001a 45%,#ffffff1f)}.crate__art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#d8d8d5}.crate__art--empty{background:linear-gradient(150deg,#d9d9d6,#b6b6b2)}.crate__shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,#0000,#0000000f 55%,#00000026)}.crate__depth{position:absolute;inset:0;pointer-events:none;background:#000;opacity:0}.crate__label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:.6em;writing-mode:vertical-rl;transform:rotate(180deg);padding:8% 0;overflow:hidden;white-space:nowrap;pointer-events:none;font-size:calc(var(--thick) * .56);letter-spacing:.015em;color:#fff;text-shadow:0 1px 2px hsl(0 0% 0% / .6);-webkit-mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent)}.crate__label[data-ink=dark]{color:#fff}.crate__label b{font-weight:700}.crate__label span{font-weight:450;opacity:.78}.flyer{position:absolute;z-index:40;pointer-events:none;background-size:cover;background-position:center;box-shadow:0 18px 60px #00000080;will-change:transform}.setup{position:absolute;inset:0;z-index:9;display:grid;place-items:center;padding:4cqh 4cqw;background:#0e0f11db;-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);overflow-y:auto;animation:fade-in .3s var(--ease-out)}.panel{width:min(560px,100%);display:grid;gap:22px;padding:clamp(22px,4cqh,36px);border-radius:22px;background:#1a1b1e;box-shadow:0 30px 80px #0009,inset 0 0 0 1px #ffffff12}.panel__head{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.panel h1{font-size:21px;font-weight:650;letter-spacing:-.02em}.panel h2{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint)}.field{display:grid;gap:7px}.field label{font-size:13px;color:var(--ink-dim)}.field input[type=text],.field input[type=password],.field select{width:100%;padding:11px 13px;font-size:15px;color:var(--ink);background:#26282c;border:1px solid hsl(0 0% 100% / .09);border-radius:11px;outline:none;transition:border-color .18s var(--ease-soft)}.field input:focus,.field select:focus{border-color:#ffffff57}.field small{font-size:12px;line-height:1.45;color:var(--ink-faint)}.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:3px;background:#26282c;border-radius:11px}.segmented button{padding:9px 6px;font-size:13px;border-radius:8px;color:var(--ink-dim);transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.segmented button[aria-pressed=true]{background:#ffffff21;color:var(--ink)}.switch{display:flex;align-items:center;justify-content:space-between;gap:14px;font-size:14px;cursor:pointer}.switch input{appearance:none;position:relative;width:46px;height:28px;flex:none;border-radius:999px;background:#3e4146;transition:background .22s var(--ease-soft);cursor:pointer}.switch input:after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .22s var(--ease-out)}.switch input:checked{background:#2e9e5d}.switch input:checked:after{transform:translate(18px)}.actions{position:sticky;bottom:calc(-1*clamp(22px,4cqh,36px));z-index:1;display:flex;gap:10px;justify-content:flex-end;margin:0 calc(-1*clamp(22px,4cqh,36px)) calc(-1*clamp(22px,4cqh,36px));padding:16px clamp(22px,4cqh,36px);background:#1a1b1e;border-top:1px solid hsl(0 0% 100% / .08);border-radius:0 0 22px 22px}.btn{padding:11px 20px;font-size:14px;font-weight:550;border-radius:11px;background:#ffffff1a;transition:background .18s var(--ease-soft)}.btn:hover{background:#ffffff2b}.btn--primary{background:#f5f5f5;color:#121416}.btn--primary:hover{background:#fff}.btn:disabled{opacity:.4;cursor:default}.note{padding:11px 13px;font-size:13px;line-height:1.5;border-radius:10px;background:#ffffff0d;color:var(--ink-dim)}.note--bad{background:#b8352e2e;color:#fbb5b1}.note--good{background:#33995e29;color:#adebc7}.status{position:absolute;top:calc(env(safe-area-inset-top) + 12px);left:50%;transform:translate(-50%);z-index:10;display:flex;align-items:center;gap:8px;padding:7px 15px;font-size:13px;border-radius:999px;background:#00000080;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:var(--ink-dim);animation:fade-in .3s var(--ease-out)}.status__dot{width:7px;height:7px;border-radius:50%;background:#f4ae34;animation:pulse 1.6s ease-in-out infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.25}}@container platine (orientation: portrait){.stage{--overlap: calc(var(--disc) * .46);--disc: min(calc((100cqh - 190px) / 1.4), calc((100cqw - 56px) / 1.69));--sleeve-dy: calc(var(--disc) * -.18);--disc-dy: calc(var(--disc) * .18)}.deck{transform:translate(calc(var(--disc) * -.026),-1cqh)}}@media(any-pointer:coarse){.track__title{font-size:clamp(17px,2.5cqh,28px)}.track__artist{font-size:clamp(13px,1.9cqh,21px)}.times{font-size:clamp(12px,1.7cqh,18px)}.times__bar{height:4px}.hud__name{font-size:clamp(12px,1.7cqh,17px)}.iconbtn--small{width:clamp(44px,4.8cqh,52px);height:clamp(44px,4.8cqh,52px)}.sidepanel__text b{font-size:15.5px}.sidepanel__text span{font-size:13.5px}.queue__art{width:48px;height:48px}.library__caption b{font-size:clamp(17px,2.5cqh,26px)}.library__caption span{font-size:clamp(13px,1.8cqh,17px)}}@media(prefers-reduced-motion:reduce){.lyrics__inner,.sleeve,.disc{transition-duration:.01ms}}.library__search{display:flex;align-items:center;gap:9px;min-width:0;flex:0 1 clamp(220px,34cqw,420px);padding:9px 13px;background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px;transition:border-color .18s var(--ease-soft),background .18s var(--ease-soft)}.library__search:focus-within{background:#ffffff1c;border-color:#ffffff4d}.library__search svg{flex:none;width:16px;height:16px;color:var(--ink-faint)}.library__search input{flex:1;min-width:0;font-size:clamp(13px,1.7cqh,15px);color:var(--ink);background:none;border:none;outline:none}.library__search input::placeholder{color:var(--ink-faint)}.library__tabs{flex:none;display:flex;gap:2px;padding:3px;background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px}.library__tabs button{padding:6px 15px;font-size:clamp(12.5px,1.6cqh,14px);font-weight:550;color:var(--ink-dim);border-radius:999px;transition:background .2s var(--ease-soft),color .2s var(--ease-soft)}.library__tabs button[data-on=true]{color:#16181d;background:#ffffffeb}.library__manage{position:relative;flex:none;display:grid;place-items:center;width:38px;height:38px;color:var(--ink-dim);background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:50%;transition:background .2s var(--ease-soft),color .2s var(--ease-soft)}.library__manage:hover,.library__manage[data-on=true]{color:var(--ink);background:#ffffff29}.library__manage svg{width:18px;height:18px}.library__badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;font-size:11px;font-weight:650;line-height:18px;color:#16181d;background:#ffffffe6;border-radius:999px}.library__empty{position:absolute;top:50%;left:50%;z-index:2;max-width:min(80cqw,420px);transform:translate(-50%,-50%);font-size:15px;line-height:1.5;text-align:center;color:var(--ink-dim)}.manage__tools{display:grid;gap:10px;padding:14px 20px 6px}.manage__tools input{width:100%;padding:9px 13px;font:inherit;font-size:14px;color:var(--ink);background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px;outline:none}.manage__tools input:focus{border-color:#ffffff4d}.manage__bulk{display:flex;gap:8px}.manage__bulk button{flex:1;padding:8px 10px;font-size:13px;font-weight:550;color:var(--ink-dim);background:#ffffff0f;border-radius:10px;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.manage__bulk button:hover{color:var(--ink);background:#ffffff1f}.manage__legend{display:flex;justify-content:flex-end;gap:6px;padding:8px 20px 2px;font-size:11px;color:var(--ink-faint)}.manage__legend span{width:50px;white-space:nowrap;text-align:center}.manage__item{display:flex;align-items:center;gap:12px;padding:7px 8px;border-radius:12px;transition:opacity .2s var(--ease-soft)}.manage__item[data-hidden=true] .queue__art,.manage__item[data-hidden=true] .sidepanel__text{opacity:.38}.manage__switch{flex:none;display:grid;place-items:center;width:50px;height:32px;color:var(--ink-faint);background:#ffffff0f;border-radius:999px;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.manage__switch+.manage__switch{margin-left:-6px}.manage__switch svg{width:18px;height:18px}.manage__switch[aria-checked=true]{color:#16181d;background:#ffffffe0}.manage__switch:disabled{cursor:default;opacity:.35}.library__fav{flex:none;display:inline-flex;align-items:center;gap:7px;max-width:34cqw;padding:7px 14px 7px 11px;font-size:clamp(12.5px,1.6cqh,14px);font-weight:550;color:var(--ink);background:#d9265333;border:1px solid hsl(345 80% 70% / .28);border-radius:999px;transition:background .2s var(--ease-soft)}.library__fav:hover{background:#d9265352}.library__fav svg{flex:none;width:15px;height:15px;color:#f7647c}.library__fav span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.library__search input::-webkit-search-cancel-button{display:none}.library__search button{flex:none;width:22px;height:22px;font-size:17px;line-height:1;color:var(--ink-dim);background:#ffffff1a;border:none;border-radius:50%;cursor:pointer}.hud__room{display:inline-flex;align-items:center;gap:2px;padding:4px 6px 4px 2px;background:none;border:none;border-radius:8px;cursor:pointer;pointer-events:auto;transition:background .18s var(--ease-soft)}.hud__room:hover{background:#ffffff12}.hud__chev{width:14px;height:14px;color:var(--ink-faint)}.sidepanel{position:fixed;top:0;right:0;bottom:0;z-index:60;width:var(--panel-w);display:flex;flex-direction:column;background:#121416b8;-webkit-backdrop-filter:blur(40px) saturate(1.3);backdrop-filter:blur(40px) saturate(1.3);border-left:1px solid hsl(0 0% 100% / .08);animation:slide-from-right .34s var(--ease-out)}@keyframes slide-from-right{0%{opacity:0;transform:translate(16px)}}.sidepanel__head{display:flex;align-items:center;gap:12px;padding:clamp(16px,2.6cqh,26px) 20px 14px;border-bottom:1px solid hsl(0 0% 100% / .07)}.sidepanel__head h2{flex:1;font-size:14px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.sidepanel__error{margin:14px 20px 0;padding:10px 13px;font-size:13px;line-height:1.45;color:#f6b4ac;background:#a3352929;border-radius:10px}.sidepanel__empty{padding:26px 20px;font-size:14px;color:var(--ink-faint)}.sidepanel__list{position:relative;flex:1;overflow-y:auto;padding:8px 12px 22px;list-style:none;overscroll-behavior:contain}.queue__item{position:relative;overflow:hidden;border-radius:12px;-webkit-touch-callout:none}.queue__row{display:flex;align-items:center}.queue__tray{position:absolute;top:0;right:0;bottom:0;z-index:2;display:flex;width:var(--tray, 0px);border-radius:0 12px 12px 0;overflow:hidden;box-shadow:-10px 0 18px #0e0f118c;transform:translate(100%);transition:transform .26s var(--ease-out)}.queue__item[data-open=true] .queue__tray{transform:none}.queue__action{flex:1;display:grid;place-content:center;justify-items:center;gap:3px;font-size:11.5px;font-weight:600;color:#fff}.queue__action svg{width:20px;height:20px}.queue__action--next{background:#2370c7}.queue__action--remove{background:#c9342c}.queue__more{flex:none;display:grid;place-items:center;width:30px;height:44px;color:var(--ink-faint);border-radius:10px;transition:color .16s var(--ease-soft),background .16s var(--ease-soft)}.queue__more:hover,.queue__more[aria-expanded=true]{color:var(--ink);background:#ffffff0f}.queue__more svg{width:20px;height:20px}@keyframes queue-flash{0%{background:#4794eb52}}.queue__item[data-flash=true]{animation:queue-flash 1.4s var(--ease-soft)}.queue__pick{display:flex;align-items:center;gap:12px;flex:1;min-width:0;padding:9px 8px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.queue__pick:hover:not(:disabled){background:#ffffff12}.queue__pick:disabled{cursor:default;opacity:.5}.queue__art svg{width:20px;height:20px;color:#ffffffeb;opacity:0;transition:opacity .16s var(--ease-soft);filter:drop-shadow(0 1px 3px hsl(0 0% 0% / .6))}.queue__pick:hover:not(:disabled) .queue__art svg{opacity:1}.queue__item[data-state=past]{opacity:.4}.queue__item[data-state=now]{background:#ffffff14}.queue__art{flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:6px;background-color:#2a2d32;background-size:cover;background-position:center;box-shadow:0 1px 3px #0006}.sidepanel__text{flex:1;min-width:0;display:grid;gap:2px}.sidepanel__text b{font-size:14px;font-weight:550;color:var(--ink)}.sidepanel__text span{font-size:12.5px;color:var(--ink-faint)}.sidepanel__text b,.sidepanel__text span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.queue__time{flex:none;font-size:12px;font-variant-numeric:tabular-nums;color:var(--ink-faint)}.queue__grip{flex:none;display:grid;place-items:center;width:40px;height:48px;margin-left:2px;color:var(--ink-faint);border-radius:10px;cursor:grab;touch-action:none;transition:color .16s var(--ease-soft),background .16s var(--ease-soft)}.queue__grip:hover,.queue__grip:focus-visible{color:var(--ink);background:#ffffff0f}.queue__grip svg{width:20px;height:20px}.queue__list[data-sorting=true]{cursor:grabbing}.queue__list[data-sorting=true] .queue__item{transition:transform .18s var(--ease-out)}.queue__list[data-sorting=true] .queue__pick:hover{background:none}.queue__list .queue__item[data-lifted=true]{z-index:2;transition:none;background:#2c2f35;box-shadow:0 12px 30px #00000080,0 0 0 1px #ffffff1a}.queue__item[data-lifted=true] .queue__grip{color:var(--ink)}.queue__list[data-settling=true] .queue__item{transition:none!important}.sidepanel__head h2 small{display:block;margin-top:4px;font-size:12px;font-weight:450;letter-spacing:.01em;text-transform:none;color:var(--ink-faint)}.sidepanel__note{margin:0 20px 18px;padding:11px 13px;font-size:12.5px;line-height:1.5;color:var(--ink-dim);background:#ffffff0d;border-radius:10px}.speakers__item{display:grid;gap:2px;padding:4px 0}.speakers__pick{display:flex;align-items:center;gap:12px;width:100%;padding:11px 10px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.speakers__pick:hover:not(:disabled){background:#ffffff12}.speakers__pick:disabled{cursor:default}.speakers__item[data-here=true] .speakers__pick{background:#ffffff14}.speakers__dot{flex:none;width:8px;height:8px;border-radius:50%;background:#fff3}.speakers__dot[data-on=true]{background:#4eda88;box-shadow:0 0 0 3px #4eda882e}.speakers__move{display:inline-flex;align-items:center;gap:7px;margin-left:30px;padding:7px 12px;font-size:12.5px;color:var(--ink-dim);background:#ffffff0f;border:1px solid hsl(0 0% 100% / .08);border-radius:999px;cursor:pointer;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.speakers__move:hover{color:var(--ink);background:#ffffff1f}.speakers__move svg{width:15px;height:15px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:8px}.pair input{min-width:0}.speakers__group{padding:16px 10px 6px}.speakers__group h3{font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.speakers__group p{margin-top:3px;font-size:11.5px;line-height:1.4;color:var(--ink-faint)}.tint{display:flex;align-items:center;gap:12px}.tint input[type=color]{width:54px;height:38px;padding:0;background:none;border:1px solid hsl(0 0% 100% / .14);border-radius:10px;cursor:pointer}.tint input[type=color]::-webkit-color-swatch-wrapper{padding:4px}.tint input[type=color]::-webkit-color-swatch{border:none;border-radius:6px}:host,.app{overscroll-behavior:none;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.sidepanel__list,.setup,.lyrics{touch-action:pan-y;overscroll-behavior:contain}:host .app{position:absolute}.field__value{float:right;font-variant-numeric:tabular-nums;color:var(--ink-faint)}.field input[type=range]{width:100%;height:26px;margin:0;background:none;-webkit-appearance:none;appearance:none;cursor:pointer}.field input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:2px;background:#ffffff29}.field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;margin-top:-7px;border-radius:50%;background:var(--ink);box-shadow:0 1px 4px #00000080}.field input[type=range]::-moz-range-track{height:4px;border-radius:2px;background:#ffffff29}.field input[type=range]::-moz-range-thumb{width:18px;height:18px;border:none;border-radius:50%;background:var(--ink)}`;
class Lv {
  rendus = [];
  /** Pose une propriété CSS sur un élément et retient de quoi la défaire. */
  poser(u, o, r) {
    const h = u.style.getPropertyValue(o), p = u.style.getPropertyPriority(o);
    u.style.setProperty(o, r, "important"), this.rendus.push(() => {
      h ? u.style.setProperty(o, h, p) : u.style.removeProperty(o);
    });
  }
  /** Enregistre une restitution qui n'est pas un style : un écouteur, par exemple. */
  aussi(u) {
    this.rendus.push(u);
  }
  rendre() {
    for (const u of this.rendus.splice(0).reverse())
      try {
        u();
      } catch {
      }
  }
}
class Yv extends HTMLElement {
  root = null;
  client = null;
  mounted = !1;
  /** Tout ce qu on a modifié hors de notre arbre, et de quoi le défaire. */
  emprise = new Lv();
  /** Home Assistant écrit ici, souvent. */
  set hass(u) {
    u && (this.client ? this.client.update(u) : (this.client = new Rv(u), this.premierChoixDEnceinte(u), this.prendreLaPlace(), this.monter()));
  }
  /**
   * À la toute première ouverture, on choisit une enceinte plausible plutôt que
   * d'accueillir l'utilisateur par un formulaire vide. Il pourra en changer
   * d'un geste depuis le nom de la pièce.
   */
  premierChoixDEnceinte(u) {
    const o = Vs();
    if (o.entityId) return;
    const r = Bv(u);
    r && fo({ ...o, entityId: r });
  }
  /**
   * Bloque le rebond du document, le temps de la visite.
   *
   * C'est lui qui déclenche le tirage-pour-rafraîchir. Le blocage posé dans
   * notre arbre ne suffisait pas : le geste commence chez nous, mais la chaîne
   * de défilement remonte jusqu'au document de Home Assistant, et c'est tout en
   * haut que le navigateur décide de rafraîchir. Il faut donc le dire là aussi.
   *
   * CE QU'ON NE FAIT PLUS : masquer la barre latérale. J'ai essayé deux voies —
   * l'événement `hass-dock-sidebar`, qui enregistre une préférence globale et
   * l'a laissée cachée partout, puis la largeur du tiroir par variable CSS, sans
   * effet visible. Une barre qu'on masque doit pouvoir se rouvrir d'un geste, et
   * rien dans le frontend ne le garantit depuis un panneau. On préfère donc
   * décaler notre propre contenu : voir --ha-rail dans la feuille de style.
   */
  prendreLaPlace() {
    for (const u of [document.documentElement, document.body])
      this.emprise.poser(u, "overscroll-behavior", "none"), this.emprise.poser(u, "overscroll-behavior-y", "none");
  }
  /**
   * Cale la platine sur la boîte que Home Assistant nous donne, en la MESURANT.
   *
   * Trois tentatives ont échoué avant celle-ci, et chacune pour une raison
   * différente :
   *
   *  - `position: fixed` s'ancre à la fenêtre du navigateur, donc passe sous le
   *    rail de la barre latérale et sous la barre du haut ;
   *  - une réserve en pixels compense ce décalage, mais il faut la redeviner sur
   *    chaque appareil, et elle ne suit pas l'état de la barre ;
   *  - `position: absolute` remplirait la bonne boîte… si l'hôte avait une
   *    hauteur. Or `height: 100%` ne vaut rien tant que le parent n'a pas de
   *    hauteur définie : la boîte s'effondre à zéro, et l'écran devient noir.
   *
   * On mesure donc l'hôte et on écrit ses coordonnées réelles. `fixed` garantit
   * qu'on occupe toujours quelque chose de visible ; les coordonnées mesurées
   * garantissent qu'on occupe exactement la bonne zone. Et si la mesure ne donne
   * rien — hôte pas encore disposé — on retombe sur l'écran entier : mal placé
   * vaut mieux qu'invisible.
   */
  suivreLaBoite(u) {
    const o = () => {
      const h = this.getBoundingClientRect(), p = h.width > 0 ? h.width : window.innerWidth - h.left, b = h.height > 0 ? h.height : window.innerHeight - h.top;
      u.style.position = "fixed", p > 0 && b > 0 ? (u.style.inset = "", u.style.left = `${h.left}px`, u.style.top = `${h.top}px`, u.style.width = `${p}px`, u.style.height = `${b}px`) : (u.style.inset = "0", u.style.width = "", u.style.height = "");
    };
    o();
    const r = new ResizeObserver(o);
    r.observe(this), window.addEventListener("resize", o), this.emprise.aussi(() => {
      r.disconnect(), window.removeEventListener("resize", o);
    });
  }
  monter() {
    if (this.mounted || !this.client) return;
    this.mounted = !0;
    const u = this.attachShadow({ mode: "open" }), o = kh.match(/@font-face\s*\{[^}]*\}/g) ?? [];
    if (o.length > 0 && !document.getElementById("md-vinyl-fonts")) {
      const p = document.createElement("style");
      p.id = "md-vinyl-fonts", p.textContent = o.join(`
`), document.head.appendChild(p);
    }
    const r = document.createElement("style");
    r.textContent = kh, u.appendChild(r);
    const h = document.createElement("div");
    h.style.cssText = "overflow:hidden; overscroll-behavior:none; touch-action:none;", u.appendChild(h), this.style.cssText = "display:block; position:relative; width:100%; height:100%; overscroll-behavior:none;", this.suivreLaBoite(h), this.root = a1.createRoot(h), this.root.render(
      /* @__PURE__ */ f.jsx(z.StrictMode, { children: /* @__PURE__ */ f.jsx(Dv, { embedded: this.client }) })
    );
  }
  disconnectedCallback() {
    this.emprise.rendre(), this.root?.unmount(), this.root = null, this.mounted = !1, this.client?.close(), this.client = null;
  }
}
customElements.get("md-vinyl-panel") || customElements.define("md-vinyl-panel", Yv);
console.info("%c MD Vinyl %c panneau chargé ", "background:#c8542e;color:#fff", "");
