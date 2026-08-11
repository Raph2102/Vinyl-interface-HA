var Tr = { exports: {} }, Bi = {};
var U0;
function op() {
  if (U0) return Bi;
  U0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(s, v, E) {
    var T = null;
    if (E !== void 0 && (T = "" + E), v.key !== void 0 && (T = "" + v.key), "key" in v) {
      E = {};
      for (var H in v)
        H !== "key" && (E[H] = v[H]);
    } else E = v;
    return v = E.ref, {
      $$typeof: f,
      type: s,
      key: T,
      ref: v !== void 0 ? v : null,
      props: E
    };
  }
  return Bi.Fragment = r, Bi.jsx = d, Bi.jsxs = d, Bi;
}
var C0;
function dp() {
  return C0 || (C0 = 1, Tr.exports = op()), Tr.exports;
}
var o = dp(), Mr = { exports: {} }, st = {};
var j0;
function hp() {
  if (j0) return st;
  j0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), Y = /* @__PURE__ */ Symbol.for("react.activity"), L = Symbol.iterator;
  function $(h) {
    return h === null || typeof h != "object" ? null : (h = L && h[L] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var G = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, lt = {};
  function tt(h, M, q) {
    this.props = h, this.context = M, this.refs = lt, this.updater = q || G;
  }
  tt.prototype.isReactComponent = {}, tt.prototype.setState = function(h, M) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, M, "setState");
  }, tt.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function ut() {
  }
  ut.prototype = tt.prototype;
  function nt(h, M, q) {
    this.props = h, this.context = M, this.refs = lt, this.updater = q || G;
  }
  var it = nt.prototype = new ut();
  it.constructor = nt, R(it, tt.prototype), it.isPureReactComponent = !0;
  var Yt = Array.isArray;
  function Ot() {
  }
  var I = { H: null, A: null, T: null, S: null }, ot = Object.prototype.hasOwnProperty;
  function ee(h, M, q) {
    var V = q.ref;
    return {
      $$typeof: f,
      type: h,
      key: M,
      ref: V !== void 0 ? V : null,
      props: q
    };
  }
  function ne(h, M) {
    return ee(h.type, M, h.props);
  }
  function Kt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === f;
  }
  function et(h) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(q) {
      return M[q];
    });
  }
  var Gt = /\/+/g;
  function Dt(h, M) {
    return typeof h == "object" && h !== null && h.key != null ? et("" + h.key) : M.toString(36);
  }
  function kt(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(Ot, Ot) : (h.status = "pending", h.then(
          function(M) {
            h.status === "pending" && (h.status = "fulfilled", h.value = M);
          },
          function(M) {
            h.status === "pending" && (h.status = "rejected", h.reason = M);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function z(h, M, q, V, K) {
    var F = typeof h;
    (F === "undefined" || F === "boolean") && (h = null);
    var at = !1;
    if (h === null) at = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case f:
            case r:
              at = !0;
              break;
            case k:
              return at = h._init, z(
                at(h._payload),
                M,
                q,
                V,
                K
              );
          }
      }
    if (at)
      return K = K(h), at = V === "" ? "." + Dt(h, 0) : V, Yt(K) ? (q = "", at != null && (q = at.replace(Gt, "$&/") + "/"), z(K, M, q, "", function(Xt) {
        return Xt;
      })) : K != null && (Kt(K) && (K = ne(
        K,
        q + (K.key == null || h && h.key === K.key ? "" : ("" + K.key).replace(
          Gt,
          "$&/"
        ) + "/") + at
      )), M.push(K)), 1;
    at = 0;
    var xt = V === "" ? "." : V + ":";
    if (Yt(h))
      for (var Et = 0; Et < h.length; Et++)
        V = h[Et], F = xt + Dt(V, Et), at += z(
          V,
          M,
          q,
          F,
          K
        );
    else if (Et = $(h), typeof Et == "function")
      for (h = Et.call(h), Et = 0; !(V = h.next()).done; )
        V = V.value, F = xt + Dt(V, Et++), at += z(
          V,
          M,
          q,
          F,
          K
        );
    else if (F === "object") {
      if (typeof h.then == "function")
        return z(
          kt(h),
          M,
          q,
          V,
          K
        );
      throw M = String(h), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return at;
  }
  function w(h, M, q) {
    if (h == null) return h;
    var V = [], K = 0;
    return z(h, V, "", "", function(F) {
      return M.call(q, F, K++);
    }), V;
  }
  function Q(h) {
    if (h._status === -1) {
      var M = h._result;
      M = M(), M.then(
        function(q) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = q);
        },
        function(q) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = q);
        }
      ), h._status === -1 && (h._status = 0, h._result = M);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var B = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, Z = {
    map: w,
    forEach: function(h, M, q) {
      w(
        h,
        function() {
          M.apply(this, arguments);
        },
        q
      );
    },
    count: function(h) {
      var M = 0;
      return w(h, function() {
        M++;
      }), M;
    },
    toArray: function(h) {
      return w(h, function(M) {
        return M;
      }) || [];
    },
    only: function(h) {
      if (!Kt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return st.Activity = Y, st.Children = Z, st.Component = tt, st.Fragment = d, st.Profiler = v, st.PureComponent = nt, st.StrictMode = s, st.Suspense = U, st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, st.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return I.H.useMemoCache(h);
    }
  }, st.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, st.cacheSignal = function() {
    return null;
  }, st.cloneElement = function(h, M, q) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var V = R({}, h.props), K = h.key;
    if (M != null)
      for (F in M.key !== void 0 && (K = "" + M.key), M)
        !ot.call(M, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && M.ref === void 0 || (V[F] = M[F]);
    var F = arguments.length - 2;
    if (F === 1) V.children = q;
    else if (1 < F) {
      for (var at = Array(F), xt = 0; xt < F; xt++)
        at[xt] = arguments[xt + 2];
      V.children = at;
    }
    return ee(h.type, K, V);
  }, st.createContext = function(h) {
    return h = {
      $$typeof: T,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: E,
      _context: h
    }, h;
  }, st.createElement = function(h, M, q) {
    var V, K = {}, F = null;
    if (M != null)
      for (V in M.key !== void 0 && (F = "" + M.key), M)
        ot.call(M, V) && V !== "key" && V !== "__self" && V !== "__source" && (K[V] = M[V]);
    var at = arguments.length - 2;
    if (at === 1) K.children = q;
    else if (1 < at) {
      for (var xt = Array(at), Et = 0; Et < at; Et++)
        xt[Et] = arguments[Et + 2];
      K.children = xt;
    }
    if (h && h.defaultProps)
      for (V in at = h.defaultProps, at)
        K[V] === void 0 && (K[V] = at[V]);
    return ee(h, F, K);
  }, st.createRef = function() {
    return { current: null };
  }, st.forwardRef = function(h) {
    return { $$typeof: H, render: h };
  }, st.isValidElement = Kt, st.lazy = function(h) {
    return {
      $$typeof: k,
      _payload: { _status: -1, _result: h },
      _init: Q
    };
  }, st.memo = function(h, M) {
    return {
      $$typeof: y,
      type: h,
      compare: M === void 0 ? null : M
    };
  }, st.startTransition = function(h) {
    var M = I.T, q = {};
    I.T = q;
    try {
      var V = h(), K = I.S;
      K !== null && K(q, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(Ot, B);
    } catch (F) {
      B(F);
    } finally {
      M !== null && q.types !== null && (M.types = q.types), I.T = M;
    }
  }, st.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, st.use = function(h) {
    return I.H.use(h);
  }, st.useActionState = function(h, M, q) {
    return I.H.useActionState(h, M, q);
  }, st.useCallback = function(h, M) {
    return I.H.useCallback(h, M);
  }, st.useContext = function(h) {
    return I.H.useContext(h);
  }, st.useDebugValue = function() {
  }, st.useDeferredValue = function(h, M) {
    return I.H.useDeferredValue(h, M);
  }, st.useEffect = function(h, M) {
    return I.H.useEffect(h, M);
  }, st.useEffectEvent = function(h) {
    return I.H.useEffectEvent(h);
  }, st.useId = function() {
    return I.H.useId();
  }, st.useImperativeHandle = function(h, M, q) {
    return I.H.useImperativeHandle(h, M, q);
  }, st.useInsertionEffect = function(h, M) {
    return I.H.useInsertionEffect(h, M);
  }, st.useLayoutEffect = function(h, M) {
    return I.H.useLayoutEffect(h, M);
  }, st.useMemo = function(h, M) {
    return I.H.useMemo(h, M);
  }, st.useOptimistic = function(h, M) {
    return I.H.useOptimistic(h, M);
  }, st.useReducer = function(h, M, q) {
    return I.H.useReducer(h, M, q);
  }, st.useRef = function(h) {
    return I.H.useRef(h);
  }, st.useState = function(h) {
    return I.H.useState(h);
  }, st.useSyncExternalStore = function(h, M, q) {
    return I.H.useSyncExternalStore(
      h,
      M,
      q
    );
  }, st.useTransition = function() {
    return I.H.useTransition();
  }, st.version = "19.2.8", st;
}
var O0;
function Zr() {
  return O0 || (O0 = 1, Mr.exports = hp()), Mr.exports;
}
var C = Zr(), Nr = { exports: {} }, ki = {}, Ur = { exports: {} }, Cr = {};
var D0;
function mp() {
  return D0 || (D0 = 1, (function(f) {
    function r(z, w) {
      var Q = z.length;
      z.push(w);
      t: for (; 0 < Q; ) {
        var B = Q - 1 >>> 1, Z = z[B];
        if (0 < v(Z, w))
          z[B] = w, z[Q] = Z, Q = B;
        else break t;
      }
    }
    function d(z) {
      return z.length === 0 ? null : z[0];
    }
    function s(z) {
      if (z.length === 0) return null;
      var w = z[0], Q = z.pop();
      if (Q !== w) {
        z[0] = Q;
        t: for (var B = 0, Z = z.length, h = Z >>> 1; B < h; ) {
          var M = 2 * (B + 1) - 1, q = z[M], V = M + 1, K = z[V];
          if (0 > v(q, Q))
            V < Z && 0 > v(K, q) ? (z[B] = K, z[V] = Q, B = V) : (z[B] = q, z[M] = Q, B = M);
          else if (V < Z && 0 > v(K, Q))
            z[B] = K, z[V] = Q, B = V;
          else break t;
        }
      }
      return w;
    }
    function v(z, w) {
      var Q = z.sortIndex - w.sortIndex;
      return Q !== 0 ? Q : z.id - w.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      f.unstable_now = function() {
        return E.now();
      };
    } else {
      var T = Date, H = T.now();
      f.unstable_now = function() {
        return T.now() - H;
      };
    }
    var U = [], y = [], k = 1, Y = null, L = 3, $ = !1, G = !1, R = !1, lt = !1, tt = typeof setTimeout == "function" ? setTimeout : null, ut = typeof clearTimeout == "function" ? clearTimeout : null, nt = typeof setImmediate < "u" ? setImmediate : null;
    function it(z) {
      for (var w = d(y); w !== null; ) {
        if (w.callback === null) s(y);
        else if (w.startTime <= z)
          s(y), w.sortIndex = w.expirationTime, r(U, w);
        else break;
        w = d(y);
      }
    }
    function Yt(z) {
      if (R = !1, it(z), !G)
        if (d(U) !== null)
          G = !0, Ot || (Ot = !0, et());
        else {
          var w = d(y);
          w !== null && kt(Yt, w.startTime - z);
        }
    }
    var Ot = !1, I = -1, ot = 5, ee = -1;
    function ne() {
      return lt ? !0 : !(f.unstable_now() - ee < ot);
    }
    function Kt() {
      if (lt = !1, Ot) {
        var z = f.unstable_now();
        ee = z;
        var w = !0;
        try {
          t: {
            G = !1, R && (R = !1, ut(I), I = -1), $ = !0;
            var Q = L;
            try {
              e: {
                for (it(z), Y = d(U); Y !== null && !(Y.expirationTime > z && ne()); ) {
                  var B = Y.callback;
                  if (typeof B == "function") {
                    Y.callback = null, L = Y.priorityLevel;
                    var Z = B(
                      Y.expirationTime <= z
                    );
                    if (z = f.unstable_now(), typeof Z == "function") {
                      Y.callback = Z, it(z), w = !0;
                      break e;
                    }
                    Y === d(U) && s(U), it(z);
                  } else s(U);
                  Y = d(U);
                }
                if (Y !== null) w = !0;
                else {
                  var h = d(y);
                  h !== null && kt(
                    Yt,
                    h.startTime - z
                  ), w = !1;
                }
              }
              break t;
            } finally {
              Y = null, L = Q, $ = !1;
            }
            w = void 0;
          }
        } finally {
          w ? et() : Ot = !1;
        }
      }
    }
    var et;
    if (typeof nt == "function")
      et = function() {
        nt(Kt);
      };
    else if (typeof MessageChannel < "u") {
      var Gt = new MessageChannel(), Dt = Gt.port2;
      Gt.port1.onmessage = Kt, et = function() {
        Dt.postMessage(null);
      };
    } else
      et = function() {
        tt(Kt, 0);
      };
    function kt(z, w) {
      I = tt(function() {
        z(f.unstable_now());
      }, w);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, f.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ot = 0 < z ? Math.floor(1e3 / z) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, f.unstable_next = function(z) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var w = 3;
          break;
        default:
          w = L;
      }
      var Q = L;
      L = w;
      try {
        return z();
      } finally {
        L = Q;
      }
    }, f.unstable_requestPaint = function() {
      lt = !0;
    }, f.unstable_runWithPriority = function(z, w) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var Q = L;
      L = z;
      try {
        return w();
      } finally {
        L = Q;
      }
    }, f.unstable_scheduleCallback = function(z, w, Q) {
      var B = f.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? B + Q : B) : Q = B, z) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return Z = Q + Z, z = {
        id: k++,
        callback: w,
        priorityLevel: z,
        startTime: Q,
        expirationTime: Z,
        sortIndex: -1
      }, Q > B ? (z.sortIndex = Q, r(y, z), d(U) === null && z === d(y) && (R ? (ut(I), I = -1) : R = !0, kt(Yt, Q - B))) : (z.sortIndex = Z, r(U, z), G || $ || (G = !0, Ot || (Ot = !0, et()))), z;
    }, f.unstable_shouldYield = ne, f.unstable_wrapCallback = function(z) {
      var w = L;
      return function() {
        var Q = L;
        L = w;
        try {
          return z.apply(this, arguments);
        } finally {
          L = Q;
        }
      };
    };
  })(Cr)), Cr;
}
var q0;
function pp() {
  return q0 || (q0 = 1, Ur.exports = mp()), Ur.exports;
}
var jr = { exports: {} }, me = {};
var R0;
function vp() {
  if (R0) return me;
  R0 = 1;
  var f = Zr();
  function r(U) {
    var y = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var k = 2; k < arguments.length; k++)
        y += "&args[]=" + encodeURIComponent(arguments[k]);
    }
    return "Minified React error #" + U + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var s = {
    d: {
      f: d,
      r: function() {
        throw Error(r(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, v = /* @__PURE__ */ Symbol.for("react.portal");
  function E(U, y, k) {
    var Y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: Y == null ? null : "" + Y,
      children: U,
      containerInfo: y,
      implementation: k
    };
  }
  var T = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(U, y) {
    if (U === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, me.createPortal = function(U, y) {
    var k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return E(U, y, null, k);
  }, me.flushSync = function(U) {
    var y = T.T, k = s.p;
    try {
      if (T.T = null, s.p = 2, U) return U();
    } finally {
      T.T = y, s.p = k, s.d.f();
    }
  }, me.preconnect = function(U, y) {
    typeof U == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(U, y));
  }, me.prefetchDNS = function(U) {
    typeof U == "string" && s.d.D(U);
  }, me.preinit = function(U, y) {
    if (typeof U == "string" && y && typeof y.as == "string") {
      var k = y.as, Y = H(k, y.crossOrigin), L = typeof y.integrity == "string" ? y.integrity : void 0, $ = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      k === "style" ? s.d.S(
        U,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: Y,
          integrity: L,
          fetchPriority: $
        }
      ) : k === "script" && s.d.X(U, {
        crossOrigin: Y,
        integrity: L,
        fetchPriority: $,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, me.preinitModule = function(U, y) {
    if (typeof U == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var k = H(
            y.as,
            y.crossOrigin
          );
          s.d.M(U, {
            crossOrigin: k,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && s.d.M(U);
  }, me.preload = function(U, y) {
    if (typeof U == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var k = y.as, Y = H(k, y.crossOrigin);
      s.d.L(U, k, {
        crossOrigin: Y,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, me.preloadModule = function(U, y) {
    if (typeof U == "string")
      if (y) {
        var k = H(y.as, y.crossOrigin);
        s.d.m(U, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: k,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else s.d.m(U);
  }, me.requestFormReset = function(U) {
    s.d.r(U);
  }, me.unstable_batchedUpdates = function(U, y) {
    return U(y);
  }, me.useFormState = function(U, y, k) {
    return T.H.useFormState(U, y, k);
  }, me.useFormStatus = function() {
    return T.H.useHostTransitionStatus();
  }, me.version = "19.2.8", me;
}
var w0;
function gp() {
  if (w0) return jr.exports;
  w0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (r) {
        console.error(r);
      }
  }
  return f(), jr.exports = vp(), jr.exports;
}
var B0;
function yp() {
  if (B0) return ki;
  B0 = 1;
  var f = pp(), r = Zr(), d = gp();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function E(t) {
    var e = t, a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function T(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function H(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function U(t) {
    if (E(t) !== t)
      throw Error(s(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = E(t), e === null) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
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
          if (i === a) return U(n), t;
          if (i === l) return U(n), e;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = n, l = i;
      else {
        for (var u = !1, c = n.child; c; ) {
          if (c === a) {
            u = !0, a = n, l = i;
            break;
          }
          if (c === l) {
            u = !0, l = n, a = i;
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = i.child; c; ) {
            if (c === a) {
              u = !0, a = i, l = n;
              break;
            }
            if (c === l) {
              u = !0, l = i, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? t : e;
  }
  function k(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = k(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var Y = Object.assign, L = /* @__PURE__ */ Symbol.for("react.element"), $ = /* @__PURE__ */ Symbol.for("react.transitional.element"), G = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), lt = /* @__PURE__ */ Symbol.for("react.strict_mode"), tt = /* @__PURE__ */ Symbol.for("react.profiler"), ut = /* @__PURE__ */ Symbol.for("react.consumer"), nt = /* @__PURE__ */ Symbol.for("react.context"), it = /* @__PURE__ */ Symbol.for("react.forward_ref"), Yt = /* @__PURE__ */ Symbol.for("react.suspense"), Ot = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), ot = /* @__PURE__ */ Symbol.for("react.lazy"), ee = /* @__PURE__ */ Symbol.for("react.activity"), ne = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Kt = Symbol.iterator;
  function et(t) {
    return t === null || typeof t != "object" ? null : (t = Kt && t[Kt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Gt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Dt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Gt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case tt:
        return "Profiler";
      case lt:
        return "StrictMode";
      case Yt:
        return "Suspense";
      case Ot:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case G:
          return "Portal";
        case nt:
          return t.displayName || "Context";
        case ut:
          return (t._context.displayName || "Context") + ".Consumer";
        case it:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return e = t.displayName || null, e !== null ? e : Dt(t.type) || "Memo";
        case ot:
          e = t._payload, t = t._init;
          try {
            return Dt(t(e));
          } catch {
          }
      }
    return null;
  }
  var kt = Array.isArray, z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, B = [], Z = -1;
  function h(t) {
    return { current: t };
  }
  function M(t) {
    0 > Z || (t.current = B[Z], B[Z] = null, Z--);
  }
  function q(t, e) {
    Z++, B[Z] = t.current, t.current = e;
  }
  var V = h(null), K = h(null), F = h(null), at = h(null);
  function xt(t, e) {
    switch (q(F, e), q(K, t), q(V, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Pd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Pd(e), t = _d(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    M(V), q(V, t);
  }
  function Et() {
    M(V), M(K), M(F);
  }
  function Xt(t) {
    t.memoizedState !== null && q(at, t);
    var e = V.current, a = _d(e, t.type);
    e !== a && (q(K, t), q(V, a));
  }
  function ha(t) {
    K.current === t && (M(V), M(K)), at.current === t && (M(at), Di._currentValue = Q);
  }
  var wa, Kl;
  function na(t) {
    if (wa === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        wa = e && e[1] || "", Kl = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wa + t + Kl;
  }
  var Yn = !1;
  function yl(t, e) {
    if (!t || Yn) return "";
    Yn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var O = function() {
                throw Error();
              };
              if (Object.defineProperty(O.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(O, []);
                } catch (A) {
                  var S = A;
                }
                Reflect.construct(t, [], O);
              } else {
                try {
                  O.call();
                } catch (A) {
                  S = A;
                }
                t.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                S = A;
              }
              (O = t()) && typeof O.catch == "function" && O.catch(function() {
              });
            }
          } catch (A) {
            if (A && S && typeof A.stack == "string")
              return [A.stack, S.stack];
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
      var i = l.DetermineComponentFrameRoot(), u = i[0], c = i[1];
      if (u && c) {
        var m = u.split(`
`), x = c.split(`
`);
        for (n = l = 0; l < m.length && !m[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < x.length && !x[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === m.length || n === x.length)
          for (l = m.length - 1, n = x.length - 1; 1 <= l && 0 <= n && m[l] !== x[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (m[l] !== x[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || m[l] !== x[n]) {
                  var N = `
` + m[l].replace(" at new ", " at ");
                  return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      Yn = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? na(a) : "";
  }
  function xc(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return na(t.type);
      case 16:
        return na("Lazy");
      case 13:
        return t.child !== e && e !== null ? na("Suspense Fallback") : na("Suspense");
      case 19:
        return na("SuspenseList");
      case 0:
      case 15:
        return yl(t.type, !1);
      case 11:
        return yl(t.type.render, !1);
      case 1:
        return yl(t.type, !0);
      case 31:
        return na("Activity");
      default:
        return "";
    }
  }
  function Li(t) {
    try {
      var e = "", a = null;
      do
        e += xc(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Hn = Object.prototype.hasOwnProperty, Xl = f.unstable_scheduleCallback, Vn = f.unstable_cancelCallback, Gn = f.unstable_shouldYield, Zi = f.unstable_requestPaint, ie = f.unstable_now, Ba = f.unstable_getCurrentPriorityLevel, Jl = f.unstable_ImmediatePriority, Ln = f.unstable_UserBlockingPriority, ka = f.unstable_NormalPriority, Zn = f.unstable_LowPriority, ma = f.unstable_IdlePriority, Ql = f.log, Kn = f.unstable_setDisableYieldValue, ue = null, Jt = null;
  function be(t) {
    if (typeof Ql == "function" && Kn(t), Jt && typeof Jt.setStrictMode == "function")
      try {
        Jt.setStrictMode(ue, t);
      } catch {
      }
  }
  var ae = Math.clz32 ? Math.clz32 : bl, Ie = Math.log, Ki = Math.LN2;
  function bl(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ie(t) / Ki | 0) | 0;
  }
  var Pe = 256, _e = 262144, ce = 4194304;
  function Re(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function $e(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var n = 0, i = t.suspendedLanes, u = t.pingedLanes;
    t = t.warmLanes;
    var c = l & 134217727;
    return c !== 0 ? (l = c & ~i, l !== 0 ? n = Re(l) : (u &= c, u !== 0 ? n = Re(u) : a || (a = c & ~t, a !== 0 && (n = Re(a))))) : (c = l & ~i, c !== 0 ? n = Re(c) : u !== 0 ? n = Re(u) : a || (a = l & ~t, a !== 0 && (n = Re(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, a = e & -e, i >= a || i === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function Ya(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function we(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function xl() {
    var t = ce;
    return ce <<= 1, (ce & 62914560) === 0 && (ce = 4194304), t;
  }
  function Wl(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Ha(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Fl(t, e, a, l, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var c = t.entanglements, m = t.expirationTimes, x = t.hiddenUpdates;
    for (a = u & ~a; 0 < a; ) {
      var N = 31 - ae(a), O = 1 << N;
      c[N] = 0, m[N] = -1;
      var S = x[N];
      if (S !== null)
        for (x[N] = null, N = 0; N < S.length; N++) {
          var A = S[N];
          A !== null && (A.lane &= -536870913);
        }
      a &= ~O;
    }
    l !== 0 && Xn(t, l, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e));
  }
  function Xn(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - ae(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function Il(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - ae(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function Xi(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : Jn(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function Jn(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Sl(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ji() {
    var t = w.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : S0(t.type));
  }
  function Qi(t, e) {
    var a = w.p;
    try {
      return w.p = t, e();
    } finally {
      w.p = a;
    }
  }
  var Tt = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + Tt, he = "__reactProps$" + Tt, Va = "__reactContainer$" + Tt, Ga = "__reactEvents$" + Tt, Pl = "__reactListeners$" + Tt, Sc = "__reactHandles$" + Tt, Wi = "__reactResources$" + Tt, ia = "__reactMarker$" + Tt;
  function La(t) {
    delete t[Qt], delete t[he], delete t[Ga], delete t[Pl], delete t[Sc];
  }
  function ua(t) {
    var e = t[Qt];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Va] || a[Qt]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = i0(t); t !== null; ) {
            if (a = t[Qt]) return a;
            t = i0(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Za(t) {
    if (t = t[Qt] || t[Va]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function El(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Ka(t) {
    var e = t[Wi];
    return e || (e = t[Wi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function $t(t) {
    t[ia] = !0;
  }
  var Fi = /* @__PURE__ */ new Set(), Ii = {};
  function pa(t, e) {
    va(t, e), va(t + "Capture", e);
  }
  function va(t, e) {
    for (Ii[t] = e, t = 0; t < e.length; t++)
      Fi.add(e[t]);
  }
  var Pi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _i = {}, _l = {};
  function D(t) {
    return Hn.call(_l, t) ? !0 : Hn.call(_i, t) ? !1 : Pi.test(t) ? _l[t] = !0 : (_i[t] = !0, !1);
  }
  function X(t, e, a) {
    if (D(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function ct(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function gt(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  function qt(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Be(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function ke(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, i = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(u) {
          a = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(u) {
          a = "" + u;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function ta(t) {
    if (!t._valueTracker) {
      var e = Be(t) ? "checked" : "value";
      t._valueTracker = ke(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function $l(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), l = "";
    return t && (l = Be(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1;
  }
  function ga(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Qn = /[\n"\\]/g;
  function Wt(t) {
    return t.replace(
      Qn,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ve(t, e, a, l, n, i, u, c) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), e != null ? u === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + qt(e)) : t.value !== "" + qt(e) && (t.value = "" + qt(e)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), e != null ? Al(t, u, qt(e)) : a != null ? Al(t, u, qt(a)) : l != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + qt(c) : t.removeAttribute("name");
  }
  function Xa(t, e, a, l, n, i, u, c) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        ta(t);
        return;
      }
      a = a != null ? "" + qt(a) : "", e = e != null ? "" + qt(e) : a, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = c ? t.checked : !!l, t.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), ta(t);
  }
  function Al(t, e, a) {
    e === "number" && ga(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function ca(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++)
        e["$" + a[n]] = !0;
      for (a = 0; a < t.length; a++)
        n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + qt(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = !0, l && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function tn(t, e, a) {
    if (e != null && (e = "" + qt(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + qt(a) : "";
  }
  function se(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (kt(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = qt(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), ta(t);
  }
  function Ye(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var zl = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tl(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || zl.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function He(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(s(62));
    if (t = t.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var n in e)
        l = e[n], e.hasOwnProperty(n) && a[n] !== l && Tl(t, n, l);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Tl(t, i, e[i]);
  }
  function Wn(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var ch = /* @__PURE__ */ new Map([
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
  ]), sh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $i(t) {
    return sh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ya() {
  }
  var Ec = null;
  function Ac(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var en = null, an = null;
  function Wr(t) {
    var e = Za(t);
    if (e && (t = e.stateNode)) {
      var a = t[he] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ve(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Wt(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var n = l[he] || null;
                if (!n) throw Error(s(90));
                ve(
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
            for (e = 0; e < a.length; e++)
              l = a[e], l.form === t.form && $l(l);
          }
          break t;
        case "textarea":
          tn(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && ca(t, !!a.multiple, e, !1);
      }
    }
  }
  var zc = !1;
  function Fr(t, e, a) {
    if (zc) return t(e, a);
    zc = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (zc = !1, (en !== null || an !== null) && (Vu(), en && (e = en, t = an, an = en = null, Wr(e), t)))
        for (e = 0; e < t.length; e++) Wr(t[e]);
    }
  }
  function Fn(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[he] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        s(231, e, typeof a)
      );
    return a;
  }
  var ba = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tc = !1;
  if (ba)
    try {
      var In = {};
      Object.defineProperty(In, "passive", {
        get: function() {
          Tc = !0;
        }
      }), window.addEventListener("test", In, In), window.removeEventListener("test", In, In);
    } catch {
      Tc = !1;
    }
  var Ja = null, Mc = null, tu = null;
  function Ir() {
    if (tu) return tu;
    var t, e = Mc, a = e.length, l, n = "value" in Ja ? Ja.value : Ja.textContent, i = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var u = a - t;
    for (l = 1; l <= u && e[a - l] === n[i - l]; l++) ;
    return tu = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function eu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function au() {
    return !0;
  }
  function Pr() {
    return !1;
  }
  function xe(t) {
    function e(a, l, n, i, u) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (a = t[c], this[c] = a ? a(i) : i[c]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? au : Pr, this.isPropagationStopped = Pr, this;
    }
    return Y(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = au);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = au);
      },
      persist: function() {
      },
      isPersistent: au
    }), e;
  }
  var Ml = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, lu = xe(Ml), Pn = Y({}, Ml, { view: 0, detail: 0 }), rh = xe(Pn), Nc, Uc, _n, nu = Y({}, Pn, {
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
    getModifierState: jc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== _n && (_n && t.type === "mousemove" ? (Nc = t.screenX - _n.screenX, Uc = t.screenY - _n.screenY) : Uc = Nc = 0, _n = t), Nc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Uc;
    }
  }), _r = xe(nu), fh = Y({}, nu, { dataTransfer: 0 }), oh = xe(fh), dh = Y({}, Pn, { relatedTarget: 0 }), Cc = xe(dh), hh = Y({}, Ml, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mh = xe(hh), ph = Y({}, Ml, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), vh = xe(ph), gh = Y({}, Ml, { data: 0 }), $r = xe(gh), yh = {
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
  }, bh = {
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
  }, xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Sh(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = xh[t]) ? !!e[t] : !1;
  }
  function jc() {
    return Sh;
  }
  var Eh = Y({}, Pn, {
    key: function(t) {
      if (t.key) {
        var e = yh[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = eu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jc,
    charCode: function(t) {
      return t.type === "keypress" ? eu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? eu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Ah = xe(Eh), zh = Y({}, nu, {
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
  }), tf = xe(zh), Th = Y({}, Pn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jc
  }), Mh = xe(Th), Nh = Y({}, Ml, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uh = xe(Nh), Ch = Y({}, nu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jh = xe(Ch), Oh = Y({}, Ml, {
    newState: 0,
    oldState: 0
  }), Dh = xe(Oh), qh = [9, 13, 27, 32], Oc = ba && "CompositionEvent" in window, $n = null;
  ba && "documentMode" in document && ($n = document.documentMode);
  var Rh = ba && "TextEvent" in window && !$n, ef = ba && (!Oc || $n && 8 < $n && 11 >= $n), af = " ", lf = !1;
  function nf(t, e) {
    switch (t) {
      case "keyup":
        return qh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function uf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ln = !1;
  function wh(t, e) {
    switch (t) {
      case "compositionend":
        return uf(e);
      case "keypress":
        return e.which !== 32 ? null : (lf = !0, af);
      case "textInput":
        return t = e.data, t === af && lf ? null : t;
      default:
        return null;
    }
  }
  function Bh(t, e) {
    if (ln)
      return t === "compositionend" || !Oc && nf(t, e) ? (t = Ir(), tu = Mc = Ja = null, ln = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ef && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var kh = {
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
  function cf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!kh[t.type] : e === "textarea";
  }
  function sf(t, e, a, l) {
    en ? an ? an.push(l) : an = [l] : en = l, e = Qu(e, "onChange"), 0 < e.length && (a = new lu(
      "onChange",
      "change",
      null,
      a,
      l
    ), t.push({ event: a, listeners: e }));
  }
  var ti = null, ei = null;
  function Yh(t) {
    Xd(t, 0);
  }
  function iu(t) {
    var e = El(t);
    if ($l(e)) return t;
  }
  function rf(t, e) {
    if (t === "change") return e;
  }
  var ff = !1;
  if (ba) {
    var Dc;
    if (ba) {
      var qc = "oninput" in document;
      if (!qc) {
        var of = document.createElement("div");
        of.setAttribute("oninput", "return;"), qc = typeof of.oninput == "function";
      }
      Dc = qc;
    } else Dc = !1;
    ff = Dc && (!document.documentMode || 9 < document.documentMode);
  }
  function df() {
    ti && (ti.detachEvent("onpropertychange", hf), ei = ti = null);
  }
  function hf(t) {
    if (t.propertyName === "value" && iu(ei)) {
      var e = [];
      sf(
        e,
        ei,
        t,
        Ac(t)
      ), Fr(Yh, e);
    }
  }
  function Hh(t, e, a) {
    t === "focusin" ? (df(), ti = e, ei = a, ti.attachEvent("onpropertychange", hf)) : t === "focusout" && df();
  }
  function Vh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return iu(ei);
  }
  function Gh(t, e) {
    if (t === "click") return iu(e);
  }
  function Lh(t, e) {
    if (t === "input" || t === "change")
      return iu(e);
  }
  function Zh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Me = typeof Object.is == "function" ? Object.is : Zh;
  function ai(t, e) {
    if (Me(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Hn.call(e, n) || !Me(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function mf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function pf(t, e) {
    var a = mf(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = t + a.textContent.length, t <= e && l >= e)
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = mf(a);
    }
  }
  function vf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? vf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function gf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ga(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = ga(t.document);
    }
    return e;
  }
  function Rc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Kh = ba && "documentMode" in document && 11 >= document.documentMode, nn = null, wc = null, li = null, Bc = !1;
  function yf(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Bc || nn == null || nn !== ga(l) || (l = nn, "selectionStart" in l && Rc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), li && ai(li, l) || (li = l, l = Qu(wc, "onSelect"), 0 < l.length && (e = new lu(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }), e.target = nn)));
  }
  function Nl(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var un = {
    animationend: Nl("Animation", "AnimationEnd"),
    animationiteration: Nl("Animation", "AnimationIteration"),
    animationstart: Nl("Animation", "AnimationStart"),
    transitionrun: Nl("Transition", "TransitionRun"),
    transitionstart: Nl("Transition", "TransitionStart"),
    transitioncancel: Nl("Transition", "TransitionCancel"),
    transitionend: Nl("Transition", "TransitionEnd")
  }, kc = {}, bf = {};
  ba && (bf = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
  function Ul(t) {
    if (kc[t]) return kc[t];
    if (!un[t]) return t;
    var e = un[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in bf)
        return kc[t] = e[a];
    return t;
  }
  var xf = Ul("animationend"), Sf = Ul("animationiteration"), Ef = Ul("animationstart"), Xh = Ul("transitionrun"), Jh = Ul("transitionstart"), Qh = Ul("transitioncancel"), Af = Ul("transitionend"), zf = /* @__PURE__ */ new Map(), Yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Yc.push("scrollEnd");
  function ea(t, e) {
    zf.set(t, e), pa(e, [t]);
  }
  var uu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ve = [], cn = 0, Hc = 0;
  function cu() {
    for (var t = cn, e = Hc = cn = 0; e < t; ) {
      var a = Ve[e];
      Ve[e++] = null;
      var l = Ve[e];
      Ve[e++] = null;
      var n = Ve[e];
      Ve[e++] = null;
      var i = Ve[e];
      if (Ve[e++] = null, l !== null && n !== null) {
        var u = l.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
      }
      i !== 0 && Tf(a, n, i);
    }
  }
  function su(t, e, a, l) {
    Ve[cn++] = t, Ve[cn++] = e, Ve[cn++] = a, Ve[cn++] = l, Hc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function Vc(t, e, a, l) {
    return su(t, e, a, l), ru(t);
  }
  function Cl(t, e) {
    return su(t, null, null, e), ru(t);
  }
  function Tf(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - ae(a), t = i.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), i) : null;
  }
  function ru(t) {
    if (50 < Ti)
      throw Ti = 0, Fs = null, Error(s(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var sn = {};
  function Wh(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ne(t, e, a, l) {
    return new Wh(t, e, a, l);
  }
  function Gc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function xa(t, e) {
    var a = t.alternate;
    return a === null ? (a = Ne(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function Mf(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function fu(t, e, a, l, n, i) {
    var u = 0;
    if (l = t, typeof t == "function") Gc(t) && (u = 1);
    else if (typeof t == "string")
      u = $m(
        t,
        a,
        V.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ee:
          return t = Ne(31, a, e, n), t.elementType = ee, t.lanes = i, t;
        case R:
          return jl(a.children, n, i, e);
        case lt:
          u = 8, n |= 24;
          break;
        case tt:
          return t = Ne(12, a, e, n | 2), t.elementType = tt, t.lanes = i, t;
        case Yt:
          return t = Ne(13, a, e, n), t.elementType = Yt, t.lanes = i, t;
        case Ot:
          return t = Ne(19, a, e, n), t.elementType = Ot, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case nt:
                u = 10;
                break t;
              case ut:
                u = 9;
                break t;
              case it:
                u = 11;
                break t;
              case I:
                u = 14;
                break t;
              case ot:
                u = 16, l = null;
                break t;
            }
          u = 29, a = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Ne(u, a, e, n), e.elementType = t, e.type = l, e.lanes = i, e;
  }
  function jl(t, e, a, l) {
    return t = Ne(7, t, l, e), t.lanes = a, t;
  }
  function Lc(t, e, a) {
    return t = Ne(6, t, null, e), t.lanes = a, t;
  }
  function Nf(t) {
    var e = Ne(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Zc(t, e, a) {
    return e = Ne(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Uf = /* @__PURE__ */ new WeakMap();
  function Ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Uf.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: Li(e)
      }, Uf.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Li(e)
    };
  }
  var rn = [], fn = 0, ou = null, ni = 0, Le = [], Ze = 0, Qa = null, sa = 1, ra = "";
  function Sa(t, e) {
    rn[fn++] = ni, rn[fn++] = ou, ou = t, ni = e;
  }
  function Cf(t, e, a) {
    Le[Ze++] = sa, Le[Ze++] = ra, Le[Ze++] = Qa, Qa = t;
    var l = sa;
    t = ra;
    var n = 32 - ae(l) - 1;
    l &= ~(1 << n), a += 1;
    var i = 32 - ae(e) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (l & (1 << u) - 1).toString(32), l >>= u, n -= u, sa = 1 << 32 - ae(e) + n | a << n | l, ra = i + t;
    } else
      sa = 1 << i | a << n | l, ra = t;
  }
  function Kc(t) {
    t.return !== null && (Sa(t, 1), Cf(t, 1, 0));
  }
  function Xc(t) {
    for (; t === ou; )
      ou = rn[--fn], rn[fn] = null, ni = rn[--fn], rn[fn] = null;
    for (; t === Qa; )
      Qa = Le[--Ze], Le[Ze] = null, ra = Le[--Ze], Le[Ze] = null, sa = Le[--Ze], Le[Ze] = null;
  }
  function jf(t, e) {
    Le[Ze++] = sa, Le[Ze++] = ra, Le[Ze++] = Qa, sa = e.id, ra = e.overflow, Qa = t;
  }
  var re = null, Rt = null, vt = !1, Wa = null, Ke = !1, Jc = Error(s(519));
  function Fa(t) {
    var e = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ii(Ge(e, t)), Jc;
  }
  function Of(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[Qt] = t, e[he] = l, a) {
      case "dialog":
        ht("cancel", e), ht("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ni.length; a++)
          ht(Ni[a], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ht("error", e), ht("load", e);
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        ht("invalid", e), Xa(
          e,
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
        ht("invalid", e);
        break;
      case "textarea":
        ht("invalid", e), se(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || Fd(e.textContent, a) ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)), l.onScroll != null && ht("scroll", e), l.onScrollEnd != null && ht("scrollend", e), l.onClick != null && (e.onclick = ya), e = !0) : e = !1, e || Fa(t, !0);
  }
  function Df(t) {
    for (re = t.return; re; )
      switch (re.tag) {
        case 5:
        case 31:
        case 13:
          Ke = !1;
          return;
        case 27:
        case 3:
          Ke = !0;
          return;
        default:
          re = re.return;
      }
  }
  function on(t) {
    if (t !== re) return !1;
    if (!vt) return Df(t), vt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || fr(t.type, t.memoizedProps)), a = !a), a && Rt && Fa(t), Df(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      Rt = n0(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      Rt = n0(t);
    } else
      e === 27 ? (e = Rt, rl(t.type) ? (t = pr, pr = null, Rt = t) : Rt = e) : Rt = re ? Je(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ol() {
    Rt = re = null, vt = !1;
  }
  function Qc() {
    var t = Wa;
    return t !== null && (ze === null ? ze = t : ze.push.apply(
      ze,
      t
    ), Wa = null), t;
  }
  function ii(t) {
    Wa === null ? Wa = [t] : Wa.push(t);
  }
  var Wc = h(null), Dl = null, Ea = null;
  function Ia(t, e, a) {
    q(Wc, e._currentValue), e._currentValue = a;
  }
  function Aa(t) {
    t._currentValue = Wc.current, M(Wc);
  }
  function Fc(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Ic(t, e, a, l) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var c = i;
          i = n;
          for (var m = 0; m < e.length; m++)
            if (c.context === e[m]) {
              i.lanes |= a, c = i.alternate, c !== null && (c.lanes |= a), Fc(
                i.return,
                a,
                t
              ), l || (u = null);
              break t;
            }
          i = c.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(s(341));
        u.lanes |= a, i = u.alternate, i !== null && (i.lanes |= a), Fc(u, a, t), u = null;
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === t) {
            u = null;
            break;
          }
          if (n = u.sibling, n !== null) {
            n.return = u.return, u = n;
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function dn(t, e, a, l) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(s(387));
        if (u = u.memoizedProps, u !== null) {
          var c = n.type;
          Me(n.pendingProps.value, u.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === at.current) {
        if (u = n.alternate, u === null) throw Error(s(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Di) : t = [Di]);
      }
      n = n.return;
    }
    t !== null && Ic(
      e,
      t,
      a,
      l
    ), e.flags |= 262144;
  }
  function du(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Me(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ql(t) {
    Dl = t, Ea = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function fe(t) {
    return qf(Dl, t);
  }
  function hu(t, e) {
    return Dl === null && ql(t), qf(t, e);
  }
  function qf(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, Ea === null) {
      if (t === null) throw Error(s(308));
      Ea = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ea = Ea.next = e;
    return a;
  }
  var Fh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, Ih = f.unstable_scheduleCallback, Ph = f.unstable_NormalPriority, Ft = {
    $$typeof: nt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Pc() {
    return {
      controller: new Fh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ui(t) {
    t.refCount--, t.refCount === 0 && Ih(Ph, function() {
      t.controller.abort();
    });
  }
  var ci = null, _c = 0, hn = 0, mn = null;
  function _h(t, e) {
    if (ci === null) {
      var a = ci = [];
      _c = 0, hn = er(), mn = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return _c++, e.then(Rf, Rf), e;
  }
  function Rf() {
    if (--_c === 0 && ci !== null) {
      mn !== null && (mn.status = "fulfilled");
      var t = ci;
      ci = null, hn = 0, mn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function $h(t, e) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var n = 0; n < a.length; n++) (0, a[n])(e);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var wf = z.S;
  z.S = function(t, e) {
    bd = ie(), typeof e == "object" && e !== null && typeof e.then == "function" && _h(t, e), wf !== null && wf(t, e);
  };
  var Rl = h(null);
  function $c() {
    var t = Rl.current;
    return t !== null ? t : Ct.pooledCache;
  }
  function mu(t, e) {
    e === null ? q(Rl, Rl.current) : q(Rl, e.pool);
  }
  function Bf() {
    var t = $c();
    return t === null ? null : { parent: Ft._currentValue, pool: t };
  }
  var pn = Error(s(460)), ts = Error(s(474)), pu = Error(s(542)), vu = { then: function() {
  } };
  function kf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Yf(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(ya, ya), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Vf(t), t;
      default:
        if (typeof e.status == "string") e.then(ya, ya);
        else {
          if (t = Ct, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Vf(t), t;
        }
        throw Bl = e, pn;
    }
  }
  function wl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Bl = a, pn) : a;
    }
  }
  var Bl = null;
  function Hf() {
    if (Bl === null) throw Error(s(459));
    var t = Bl;
    return Bl = null, t;
  }
  function Vf(t) {
    if (t === pn || t === pu)
      throw Error(s(483));
  }
  var vn = null, si = 0;
  function gu(t) {
    var e = si;
    return si += 1, vn === null && (vn = []), Yf(vn, t, e);
  }
  function ri(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function yu(t, e) {
    throw e.$$typeof === L ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Gf(t) {
    function e(g, p) {
      if (t) {
        var b = g.deletions;
        b === null ? (g.deletions = [p], g.flags |= 16) : b.push(p);
      }
    }
    function a(g, p) {
      if (!t) return null;
      for (; p !== null; )
        e(g, p), p = p.sibling;
      return null;
    }
    function l(g) {
      for (var p = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? p.set(g.key, g) : p.set(g.index, g), g = g.sibling;
      return p;
    }
    function n(g, p) {
      return g = xa(g, p), g.index = 0, g.sibling = null, g;
    }
    function i(g, p, b) {
      return g.index = b, t ? (b = g.alternate, b !== null ? (b = b.index, b < p ? (g.flags |= 67108866, p) : b) : (g.flags |= 67108866, p)) : (g.flags |= 1048576, p);
    }
    function u(g) {
      return t && g.alternate === null && (g.flags |= 67108866), g;
    }
    function c(g, p, b, j) {
      return p === null || p.tag !== 6 ? (p = Lc(b, g.mode, j), p.return = g, p) : (p = n(p, b), p.return = g, p);
    }
    function m(g, p, b, j) {
      var P = b.type;
      return P === R ? N(
        g,
        p,
        b.props.children,
        j,
        b.key
      ) : p !== null && (p.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ot && wl(P) === p.type) ? (p = n(p, b.props), ri(p, b), p.return = g, p) : (p = fu(
        b.type,
        b.key,
        b.props,
        null,
        g.mode,
        j
      ), ri(p, b), p.return = g, p);
    }
    function x(g, p, b, j) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== b.containerInfo || p.stateNode.implementation !== b.implementation ? (p = Zc(b, g.mode, j), p.return = g, p) : (p = n(p, b.children || []), p.return = g, p);
    }
    function N(g, p, b, j, P) {
      return p === null || p.tag !== 7 ? (p = jl(
        b,
        g.mode,
        j,
        P
      ), p.return = g, p) : (p = n(p, b), p.return = g, p);
    }
    function O(g, p, b) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = Lc(
          "" + p,
          g.mode,
          b
        ), p.return = g, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case $:
            return b = fu(
              p.type,
              p.key,
              p.props,
              null,
              g.mode,
              b
            ), ri(b, p), b.return = g, b;
          case G:
            return p = Zc(
              p,
              g.mode,
              b
            ), p.return = g, p;
          case ot:
            return p = wl(p), O(g, p, b);
        }
        if (kt(p) || et(p))
          return p = jl(
            p,
            g.mode,
            b,
            null
          ), p.return = g, p;
        if (typeof p.then == "function")
          return O(g, gu(p), b);
        if (p.$$typeof === nt)
          return O(
            g,
            hu(g, p),
            b
          );
        yu(g, p);
      }
      return null;
    }
    function S(g, p, b, j) {
      var P = p !== null ? p.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return P !== null ? null : c(g, p, "" + b, j);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $:
            return b.key === P ? m(g, p, b, j) : null;
          case G:
            return b.key === P ? x(g, p, b, j) : null;
          case ot:
            return b = wl(b), S(g, p, b, j);
        }
        if (kt(b) || et(b))
          return P !== null ? null : N(g, p, b, j, null);
        if (typeof b.then == "function")
          return S(
            g,
            p,
            gu(b),
            j
          );
        if (b.$$typeof === nt)
          return S(
            g,
            p,
            hu(g, b),
            j
          );
        yu(g, b);
      }
      return null;
    }
    function A(g, p, b, j, P) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return g = g.get(b) || null, c(p, g, "" + j, P);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case $:
            return g = g.get(
              j.key === null ? b : j.key
            ) || null, m(p, g, j, P);
          case G:
            return g = g.get(
              j.key === null ? b : j.key
            ) || null, x(p, g, j, P);
          case ot:
            return j = wl(j), A(
              g,
              p,
              b,
              j,
              P
            );
        }
        if (kt(j) || et(j))
          return g = g.get(b) || null, N(p, g, j, P, null);
        if (typeof j.then == "function")
          return A(
            g,
            p,
            b,
            gu(j),
            P
          );
        if (j.$$typeof === nt)
          return A(
            g,
            p,
            b,
            hu(p, j),
            P
          );
        yu(p, j);
      }
      return null;
    }
    function J(g, p, b, j) {
      for (var P = null, yt = null, W = p, ft = p = 0, pt = null; W !== null && ft < b.length; ft++) {
        W.index > ft ? (pt = W, W = null) : pt = W.sibling;
        var bt = S(
          g,
          W,
          b[ft],
          j
        );
        if (bt === null) {
          W === null && (W = pt);
          break;
        }
        t && W && bt.alternate === null && e(g, W), p = i(bt, p, ft), yt === null ? P = bt : yt.sibling = bt, yt = bt, W = pt;
      }
      if (ft === b.length)
        return a(g, W), vt && Sa(g, ft), P;
      if (W === null) {
        for (; ft < b.length; ft++)
          W = O(g, b[ft], j), W !== null && (p = i(
            W,
            p,
            ft
          ), yt === null ? P = W : yt.sibling = W, yt = W);
        return vt && Sa(g, ft), P;
      }
      for (W = l(W); ft < b.length; ft++)
        pt = A(
          W,
          g,
          ft,
          b[ft],
          j
        ), pt !== null && (t && pt.alternate !== null && W.delete(
          pt.key === null ? ft : pt.key
        ), p = i(
          pt,
          p,
          ft
        ), yt === null ? P = pt : yt.sibling = pt, yt = pt);
      return t && W.forEach(function(ml) {
        return e(g, ml);
      }), vt && Sa(g, ft), P;
    }
    function _(g, p, b, j) {
      if (b == null) throw Error(s(151));
      for (var P = null, yt = null, W = p, ft = p = 0, pt = null, bt = b.next(); W !== null && !bt.done; ft++, bt = b.next()) {
        W.index > ft ? (pt = W, W = null) : pt = W.sibling;
        var ml = S(g, W, bt.value, j);
        if (ml === null) {
          W === null && (W = pt);
          break;
        }
        t && W && ml.alternate === null && e(g, W), p = i(ml, p, ft), yt === null ? P = ml : yt.sibling = ml, yt = ml, W = pt;
      }
      if (bt.done)
        return a(g, W), vt && Sa(g, ft), P;
      if (W === null) {
        for (; !bt.done; ft++, bt = b.next())
          bt = O(g, bt.value, j), bt !== null && (p = i(bt, p, ft), yt === null ? P = bt : yt.sibling = bt, yt = bt);
        return vt && Sa(g, ft), P;
      }
      for (W = l(W); !bt.done; ft++, bt = b.next())
        bt = A(W, g, ft, bt.value, j), bt !== null && (t && bt.alternate !== null && W.delete(bt.key === null ? ft : bt.key), p = i(bt, p, ft), yt === null ? P = bt : yt.sibling = bt, yt = bt);
      return t && W.forEach(function(fp) {
        return e(g, fp);
      }), vt && Sa(g, ft), P;
    }
    function Ut(g, p, b, j) {
      if (typeof b == "object" && b !== null && b.type === R && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $:
            t: {
              for (var P = b.key; p !== null; ) {
                if (p.key === P) {
                  if (P = b.type, P === R) {
                    if (p.tag === 7) {
                      a(
                        g,
                        p.sibling
                      ), j = n(
                        p,
                        b.props.children
                      ), j.return = g, g = j;
                      break t;
                    }
                  } else if (p.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ot && wl(P) === p.type) {
                    a(
                      g,
                      p.sibling
                    ), j = n(p, b.props), ri(j, b), j.return = g, g = j;
                    break t;
                  }
                  a(g, p);
                  break;
                } else e(g, p);
                p = p.sibling;
              }
              b.type === R ? (j = jl(
                b.props.children,
                g.mode,
                j,
                b.key
              ), j.return = g, g = j) : (j = fu(
                b.type,
                b.key,
                b.props,
                null,
                g.mode,
                j
              ), ri(j, b), j.return = g, g = j);
            }
            return u(g);
          case G:
            t: {
              for (P = b.key; p !== null; ) {
                if (p.key === P)
                  if (p.tag === 4 && p.stateNode.containerInfo === b.containerInfo && p.stateNode.implementation === b.implementation) {
                    a(
                      g,
                      p.sibling
                    ), j = n(p, b.children || []), j.return = g, g = j;
                    break t;
                  } else {
                    a(g, p);
                    break;
                  }
                else e(g, p);
                p = p.sibling;
              }
              j = Zc(b, g.mode, j), j.return = g, g = j;
            }
            return u(g);
          case ot:
            return b = wl(b), Ut(
              g,
              p,
              b,
              j
            );
        }
        if (kt(b))
          return J(
            g,
            p,
            b,
            j
          );
        if (et(b)) {
          if (P = et(b), typeof P != "function") throw Error(s(150));
          return b = P.call(b), _(
            g,
            p,
            b,
            j
          );
        }
        if (typeof b.then == "function")
          return Ut(
            g,
            p,
            gu(b),
            j
          );
        if (b.$$typeof === nt)
          return Ut(
            g,
            p,
            hu(g, b),
            j
          );
        yu(g, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, p !== null && p.tag === 6 ? (a(g, p.sibling), j = n(p, b), j.return = g, g = j) : (a(g, p), j = Lc(b, g.mode, j), j.return = g, g = j), u(g)) : a(g, p);
    }
    return function(g, p, b, j) {
      try {
        si = 0;
        var P = Ut(
          g,
          p,
          b,
          j
        );
        return vn = null, P;
      } catch (W) {
        if (W === pn || W === pu) throw W;
        var yt = Ne(29, W, null, g.mode);
        return yt.lanes = j, yt.return = g, yt;
      }
    };
  }
  var kl = Gf(!0), Lf = Gf(!1), Pa = !1;
  function es(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function as(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function _a(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $a(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (St & 2) !== 0) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = ru(t), Tf(t, null, a), e;
    }
    return su(t, l, e, a), ru(t);
  }
  function fi(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, Il(t, a);
    }
  }
  function ls(t, e) {
    var a = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, i = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var u = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = u : i = i.next = u, a = a.next;
        } while (a !== null);
        i === null ? n = i = e : i = i.next = e;
      } else n = i = e;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var ns = !1;
  function oi() {
    if (ns) {
      var t = mn;
      if (t !== null) throw t;
    }
  }
  function di(t, e, a, l) {
    ns = !1;
    var n = t.updateQueue;
    Pa = !1;
    var i = n.firstBaseUpdate, u = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var m = c, x = m.next;
      m.next = null, u === null ? i = x : u.next = x, u = m;
      var N = t.alternate;
      N !== null && (N = N.updateQueue, c = N.lastBaseUpdate, c !== u && (c === null ? N.firstBaseUpdate = x : c.next = x, N.lastBaseUpdate = m));
    }
    if (i !== null) {
      var O = n.baseState;
      u = 0, N = x = m = null, c = i;
      do {
        var S = c.lane & -536870913, A = S !== c.lane;
        if (A ? (mt & S) === S : (l & S) === S) {
          S !== 0 && S === hn && (ns = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var J = t, _ = c;
            S = e;
            var Ut = a;
            switch (_.tag) {
              case 1:
                if (J = _.payload, typeof J == "function") {
                  O = J.call(Ut, O, S);
                  break t;
                }
                O = J;
                break t;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = _.payload, S = typeof J == "function" ? J.call(Ut, O, S) : J, S == null) break t;
                O = Y({}, O, S);
                break t;
              case 2:
                Pa = !0;
            }
          }
          S = c.callback, S !== null && (t.flags |= 64, A && (t.flags |= 8192), A = n.callbacks, A === null ? n.callbacks = [S] : A.push(S));
        } else
          A = {
            lane: S,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, N === null ? (x = N = A, m = O) : N = N.next = A, u |= S;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          A = c, c = A.next, A.next = null, n.lastBaseUpdate = A, n.shared.pending = null;
        }
      } while (!0);
      N === null && (m = O), n.baseState = m, n.firstBaseUpdate = x, n.lastBaseUpdate = N, i === null && (n.shared.lanes = 0), nl |= u, t.lanes = u, t.memoizedState = O;
    }
  }
  function Zf(t, e) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(e);
  }
  function Kf(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        Zf(a[t], e);
  }
  var gn = h(null), bu = h(0);
  function Xf(t, e) {
    t = Da, q(bu, t), q(gn, e), Da = t | e.baseLanes;
  }
  function is() {
    q(bu, Da), q(gn, gn.current);
  }
  function us() {
    Da = bu.current, M(gn), M(bu);
  }
  var Ue = h(null), Xe = null;
  function tl(t) {
    var e = t.alternate;
    q(Lt, Lt.current & 1), q(Ue, t), Xe === null && (e === null || gn.current !== null || e.memoizedState !== null) && (Xe = t);
  }
  function cs(t) {
    q(Lt, Lt.current), q(Ue, t), Xe === null && (Xe = t);
  }
  function Jf(t) {
    t.tag === 22 ? (q(Lt, Lt.current), q(Ue, t), Xe === null && (Xe = t)) : el();
  }
  function el() {
    q(Lt, Lt.current), q(Ue, Ue.current);
  }
  function Ce(t) {
    M(Ue), Xe === t && (Xe = null), M(Lt);
  }
  var Lt = h(0);
  function xu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || hr(a) || mr(a)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var za = 0, rt = null, Mt = null, It = null, Su = !1, yn = !1, Yl = !1, Eu = 0, hi = 0, bn = null, tm = 0;
  function Ht() {
    throw Error(s(321));
  }
  function ss(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Me(t[a], e[a])) return !1;
    return !0;
  }
  function rs(t, e, a, l, n, i) {
    return za = i, rt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, z.H = t === null || t.memoizedState === null ? jo : zs, Yl = !1, i = a(l, n), Yl = !1, yn && (i = Wf(
      e,
      a,
      l,
      n
    )), Qf(t), i;
  }
  function Qf(t) {
    z.H = vi;
    var e = Mt !== null && Mt.next !== null;
    if (za = 0, It = Mt = rt = null, Su = !1, hi = 0, bn = null, e) throw Error(s(300));
    t === null || Pt || (t = t.dependencies, t !== null && du(t) && (Pt = !0));
  }
  function Wf(t, e, a, l) {
    rt = t;
    var n = 0;
    do {
      if (yn && (bn = null), hi = 0, yn = !1, 25 <= n) throw Error(s(301));
      if (n += 1, It = Mt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      z.H = Oo, i = e(a, l);
    } while (yn);
    return i;
  }
  function em() {
    var t = z.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? mi(e) : e, t = t.useState()[0], (Mt !== null ? Mt.memoizedState : null) !== t && (rt.flags |= 1024), e;
  }
  function fs() {
    var t = Eu !== 0;
    return Eu = 0, t;
  }
  function os(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function ds(t) {
    if (Su) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Su = !1;
    }
    za = 0, It = Mt = rt = null, yn = !1, hi = Eu = 0, bn = null;
  }
  function ge() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? rt.memoizedState = It = t : It = It.next = t, It;
  }
  function Zt() {
    if (Mt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = It === null ? rt.memoizedState : It.next;
    if (e !== null)
      It = e, Mt = t;
    else {
      if (t === null)
        throw rt.alternate === null ? Error(s(467)) : Error(s(310));
      Mt = t, t = {
        memoizedState: Mt.memoizedState,
        baseState: Mt.baseState,
        baseQueue: Mt.baseQueue,
        queue: Mt.queue,
        next: null
      }, It === null ? rt.memoizedState = It = t : It = It.next = t;
    }
    return It;
  }
  function Au() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mi(t) {
    var e = hi;
    return hi += 1, bn === null && (bn = []), t = Yf(bn, t, e), e = rt, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, z.H = e === null || e.memoizedState === null ? jo : zs), t;
  }
  function zu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return mi(t);
      if (t.$$typeof === nt) return fe(t);
    }
    throw Error(s(438, String(t)));
  }
  function hs(t) {
    var e = null, a = rt.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = rt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = Au(), rt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++)
        a[l] = ne;
    return e.index++, a;
  }
  function Ta(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Tu(t) {
    var e = Zt();
    return ms(e, Mt, t);
  }
  function ms(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var n = t.baseQueue, i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        n.next = i.next, i.next = u;
      }
      e.baseQueue = n = i, l.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      e = n.next;
      var c = u = null, m = null, x = e, N = !1;
      do {
        var O = x.lane & -536870913;
        if (O !== x.lane ? (mt & O) === O : (za & O) === O) {
          var S = x.revertLane;
          if (S === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), O === hn && (N = !0);
          else if ((za & S) === S) {
            x = x.next, S === hn && (N = !0);
            continue;
          } else
            O = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, m === null ? (c = m = O, u = i) : m = m.next = O, rt.lanes |= S, nl |= S;
          O = x.action, Yl && a(i, O), i = x.hasEagerState ? x.eagerState : a(i, O);
        } else
          S = {
            lane: O,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, m === null ? (c = m = S, u = i) : m = m.next = S, rt.lanes |= O, nl |= O;
        x = x.next;
      } while (x !== null && x !== e);
      if (m === null ? u = i : m.next = c, !Me(i, t.memoizedState) && (Pt = !0, N && (a = mn, a !== null)))
        throw a;
      t.memoizedState = i, t.baseState = u, t.baseQueue = m, l.lastRenderedState = i;
    }
    return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function ps(t) {
    var e = Zt(), a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, i = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== n);
      Me(i, e.memoizedState) || (Pt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), a.lastRenderedState = i;
    }
    return [i, l];
  }
  function Ff(t, e, a) {
    var l = rt, n = Zt(), i = vt;
    if (i) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = e();
    var u = !Me(
      (Mt || n).memoizedState,
      a
    );
    if (u && (n.memoizedState = a, Pt = !0), n = n.queue, ys(_f.bind(null, l, n, t), [
      t
    ]), n.getSnapshot !== e || u || It !== null && It.memoizedState.tag & 1) {
      if (l.flags |= 2048, xn(
        9,
        { destroy: void 0 },
        Pf.bind(
          null,
          l,
          n,
          a,
          e
        ),
        null
      ), Ct === null) throw Error(s(349));
      i || (za & 127) !== 0 || If(l, e, a);
    }
    return a;
  }
  function If(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = rt.updateQueue, e === null ? (e = Au(), rt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function Pf(t, e, a, l) {
    e.value = a, e.getSnapshot = l, $f(e) && to(t);
  }
  function _f(t, e, a) {
    return a(function() {
      $f(e) && to(t);
    });
  }
  function $f(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Me(t, a);
    } catch {
      return !0;
    }
  }
  function to(t) {
    var e = Cl(t, 2);
    e !== null && Te(e, t, 2);
  }
  function vs(t) {
    var e = ge();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Yl) {
        be(!0);
        try {
          a();
        } finally {
          be(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ta,
      lastRenderedState: t
    }, e;
  }
  function eo(t, e, a, l) {
    return t.baseState = a, ms(
      t,
      Mt,
      typeof l == "function" ? l : Ta
    );
  }
  function am(t, e, a, l, n) {
    if (Uu(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          i.listeners.push(u);
        }
      };
      z.T !== null ? a(!0) : i.isTransition = !1, l(i), a = e.pending, a === null ? (i.next = e.pending = i, ao(e, i)) : (i.next = a.next, e.pending = a.next = i);
    }
  }
  function ao(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var i = z.T, u = {};
      z.T = u;
      try {
        var c = a(n, l), m = z.S;
        m !== null && m(u, c), lo(t, e, c);
      } catch (x) {
        gs(t, e, x);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), z.T = i;
      }
    } else
      try {
        i = a(n, l), lo(t, e, i);
      } catch (x) {
        gs(t, e, x);
      }
  }
  function lo(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        no(t, e, l);
      },
      function(l) {
        return gs(t, e, l);
      }
    ) : no(t, e, a);
  }
  function no(t, e, a) {
    e.status = "fulfilled", e.value = a, io(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, ao(t, a)));
  }
  function gs(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, io(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function io(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function uo(t, e) {
    return e;
  }
  function co(t, e) {
    if (vt) {
      var a = Ct.formState;
      if (a !== null) {
        t: {
          var l = rt;
          if (vt) {
            if (Rt) {
              e: {
                for (var n = Rt, i = Ke; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = Je(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Rt = Je(
                  n.nextSibling
                ), l = n.data === "F!";
                break t;
              }
            }
            Fa(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return a = ge(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: uo,
      lastRenderedState: e
    }, a.queue = l, a = No.bind(
      null,
      rt,
      l
    ), l.dispatch = a, l = vs(!1), i = As.bind(
      null,
      rt,
      !1,
      l.queue
    ), l = ge(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = am.bind(
      null,
      rt,
      n,
      i,
      a
    ), n.dispatch = a, l.memoizedState = t, [e, a, !1];
  }
  function so(t) {
    var e = Zt();
    return ro(e, Mt, t);
  }
  function ro(t, e, a) {
    if (e = ms(
      t,
      e,
      uo
    )[0], t = Tu(Ta)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = mi(e);
      } catch (u) {
        throw u === pn ? pu : u;
      }
    else l = e;
    e = Zt();
    var n = e.queue, i = n.dispatch;
    return a !== e.memoizedState && (rt.flags |= 2048, xn(
      9,
      { destroy: void 0 },
      lm.bind(null, n, a),
      null
    )), [l, i, t];
  }
  function lm(t, e) {
    t.action = e;
  }
  function fo(t) {
    var e = Zt(), a = Mt;
    if (a !== null)
      return ro(e, a, t);
    Zt(), e = e.memoizedState, a = Zt();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [e, l, !1];
  }
  function xn(t, e, a, l) {
    return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = rt.updateQueue, e === null && (e = Au(), rt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function oo() {
    return Zt().memoizedState;
  }
  function Mu(t, e, a, l) {
    var n = ge();
    rt.flags |= t, n.memoizedState = xn(
      1 | e,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Nu(t, e, a, l) {
    var n = Zt();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    Mt !== null && l !== null && ss(l, Mt.memoizedState.deps) ? n.memoizedState = xn(e, i, a, l) : (rt.flags |= t, n.memoizedState = xn(
      1 | e,
      i,
      a,
      l
    ));
  }
  function ho(t, e) {
    Mu(8390656, 8, t, e);
  }
  function ys(t, e) {
    Nu(2048, 8, t, e);
  }
  function nm(t) {
    rt.flags |= 4;
    var e = rt.updateQueue;
    if (e === null)
      e = Au(), rt.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function mo(t) {
    var e = Zt().memoizedState;
    return nm({ ref: e, nextImpl: t }), function() {
      if ((St & 2) !== 0) throw Error(s(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function po(t, e) {
    return Nu(4, 2, t, e);
  }
  function vo(t, e) {
    return Nu(4, 4, t, e);
  }
  function go(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function yo(t, e, a) {
    a = a != null ? a.concat([t]) : null, Nu(4, 4, go.bind(null, e, t), a);
  }
  function bs() {
  }
  function bo(t, e) {
    var a = Zt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && ss(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
  }
  function xo(t, e) {
    var a = Zt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && ss(e, l[1]))
      return l[0];
    if (l = t(), Yl) {
      be(!0);
      try {
        t();
      } finally {
        be(!1);
      }
    }
    return a.memoizedState = [l, e], l;
  }
  function xs(t, e, a) {
    return a === void 0 || (za & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Sd(), rt.lanes |= t, nl |= t, a);
  }
  function So(t, e, a, l) {
    return Me(a, e) ? a : gn.current !== null ? (t = xs(t, a, l), Me(t, e) || (Pt = !0), t) : (za & 42) === 0 || (za & 1073741824) !== 0 && (mt & 261930) === 0 ? (Pt = !0, t.memoizedState = a) : (t = Sd(), rt.lanes |= t, nl |= t, e);
  }
  function Eo(t, e, a, l, n) {
    var i = w.p;
    w.p = i !== 0 && 8 > i ? i : 8;
    var u = z.T, c = {};
    z.T = c, As(t, !1, e, a);
    try {
      var m = n(), x = z.S;
      if (x !== null && x(c, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var N = $h(
          m,
          l
        );
        pi(
          t,
          e,
          N,
          De(t)
        );
      } else
        pi(
          t,
          e,
          l,
          De(t)
        );
    } catch (O) {
      pi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: O },
        De()
      );
    } finally {
      w.p = i, u !== null && c.types !== null && (u.types = c.types), z.T = u;
    }
  }
  function im() {
  }
  function Ss(t, e, a, l) {
    if (t.tag !== 5) throw Error(s(476));
    var n = Ao(t).queue;
    Eo(
      t,
      n,
      e,
      Q,
      a === null ? im : function() {
        return zo(t), a(l);
      }
    );
  }
  function Ao(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ta,
        lastRenderedState: Q
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ta,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function zo(t) {
    var e = Ao(t);
    e.next === null && (e = t.alternate.memoizedState), pi(
      t,
      e.next.queue,
      {},
      De()
    );
  }
  function Es() {
    return fe(Di);
  }
  function To() {
    return Zt().memoizedState;
  }
  function Mo() {
    return Zt().memoizedState;
  }
  function um(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = De();
          t = _a(a);
          var l = $a(e, t, a);
          l !== null && (Te(l, e, a), fi(l, e, a)), e = { cache: Pc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function cm(t, e, a) {
    var l = De();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uu(t) ? Uo(e, a) : (a = Vc(t, e, a, l), a !== null && (Te(a, t, l), Co(a, e, l)));
  }
  function No(t, e, a) {
    var l = De();
    pi(t, e, a, l);
  }
  function pi(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Uu(t)) Uo(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var u = e.lastRenderedState, c = i(u, a);
          if (n.hasEagerState = !0, n.eagerState = c, Me(c, u))
            return su(t, e, n, 0), Ct === null && cu(), !1;
        } catch {
        }
      if (a = Vc(t, e, n, l), a !== null)
        return Te(a, t, l), Co(a, e, l), !0;
    }
    return !1;
  }
  function As(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: er(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uu(t)) {
      if (e) throw Error(s(479));
    } else
      e = Vc(
        t,
        a,
        l,
        2
      ), e !== null && Te(e, t, 2);
  }
  function Uu(t) {
    var e = t.alternate;
    return t === rt || e !== null && e === rt;
  }
  function Uo(t, e) {
    yn = Su = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function Co(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, Il(t, a);
    }
  }
  var vi = {
    readContext: fe,
    use: zu,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    useHostTransitionStatus: Ht,
    useFormState: Ht,
    useActionState: Ht,
    useOptimistic: Ht,
    useMemoCache: Ht,
    useCacheRefresh: Ht
  };
  vi.useEffectEvent = Ht;
  var jo = {
    readContext: fe,
    use: zu,
    useCallback: function(t, e) {
      return ge().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: fe,
    useEffect: ho,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Mu(
        4194308,
        4,
        go.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return Mu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Mu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = ge();
      e = e === void 0 ? null : e;
      var l = t();
      if (Yl) {
        be(!0);
        try {
          t();
        } finally {
          be(!1);
        }
      }
      return a.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, a) {
      var l = ge();
      if (a !== void 0) {
        var n = a(e);
        if (Yl) {
          be(!0);
          try {
            a(e);
          } finally {
            be(!1);
          }
        }
      } else n = e;
      return l.memoizedState = l.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, l.queue = t, t = t.dispatch = cm.bind(
        null,
        rt,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = ge();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vs(t);
      var e = t.queue, a = No.bind(null, rt, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: bs,
    useDeferredValue: function(t, e) {
      var a = ge();
      return xs(a, t, e);
    },
    useTransition: function() {
      var t = vs(!1);
      return t = Eo.bind(
        null,
        rt,
        t.queue,
        !0,
        !1
      ), ge().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = rt, n = ge();
      if (vt) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = e(), Ct === null)
          throw Error(s(349));
        (mt & 127) !== 0 || If(l, e, a);
      }
      n.memoizedState = a;
      var i = { value: a, getSnapshot: e };
      return n.queue = i, ho(_f.bind(null, l, i, t), [
        t
      ]), l.flags |= 2048, xn(
        9,
        { destroy: void 0 },
        Pf.bind(
          null,
          l,
          i,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = ge(), e = Ct.identifierPrefix;
      if (vt) {
        var a = ra, l = sa;
        a = (l & ~(1 << 32 - ae(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = Eu++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = tm++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Es,
    useFormState: co,
    useActionState: co,
    useOptimistic: function(t) {
      var e = ge();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = As.bind(
        null,
        rt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: hs,
    useCacheRefresh: function() {
      return ge().memoizedState = um.bind(
        null,
        rt
      );
    },
    useEffectEvent: function(t) {
      var e = ge(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((St & 2) !== 0)
          throw Error(s(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, zs = {
    readContext: fe,
    use: zu,
    useCallback: bo,
    useContext: fe,
    useEffect: ys,
    useImperativeHandle: yo,
    useInsertionEffect: po,
    useLayoutEffect: vo,
    useMemo: xo,
    useReducer: Tu,
    useRef: oo,
    useState: function() {
      return Tu(Ta);
    },
    useDebugValue: bs,
    useDeferredValue: function(t, e) {
      var a = Zt();
      return So(
        a,
        Mt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Tu(Ta)[0], e = Zt().memoizedState;
      return [
        typeof t == "boolean" ? t : mi(t),
        e
      ];
    },
    useSyncExternalStore: Ff,
    useId: To,
    useHostTransitionStatus: Es,
    useFormState: so,
    useActionState: so,
    useOptimistic: function(t, e) {
      var a = Zt();
      return eo(a, Mt, t, e);
    },
    useMemoCache: hs,
    useCacheRefresh: Mo
  };
  zs.useEffectEvent = mo;
  var Oo = {
    readContext: fe,
    use: zu,
    useCallback: bo,
    useContext: fe,
    useEffect: ys,
    useImperativeHandle: yo,
    useInsertionEffect: po,
    useLayoutEffect: vo,
    useMemo: xo,
    useReducer: ps,
    useRef: oo,
    useState: function() {
      return ps(Ta);
    },
    useDebugValue: bs,
    useDeferredValue: function(t, e) {
      var a = Zt();
      return Mt === null ? xs(a, t, e) : So(
        a,
        Mt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ps(Ta)[0], e = Zt().memoizedState;
      return [
        typeof t == "boolean" ? t : mi(t),
        e
      ];
    },
    useSyncExternalStore: Ff,
    useId: To,
    useHostTransitionStatus: Es,
    useFormState: fo,
    useActionState: fo,
    useOptimistic: function(t, e) {
      var a = Zt();
      return Mt !== null ? eo(a, Mt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: hs,
    useCacheRefresh: Mo
  };
  Oo.useEffectEvent = mo;
  function Ts(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : Y({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Ms = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = De(), n = _a(l);
      n.payload = e, a != null && (n.callback = a), e = $a(t, n, l), e !== null && (Te(e, t, l), fi(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = De(), n = _a(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = $a(t, n, l), e !== null && (Te(e, t, l), fi(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = De(), l = _a(a);
      l.tag = 2, e != null && (l.callback = e), e = $a(t, l, a), e !== null && (Te(e, t, a), fi(e, t, a));
    }
  };
  function Do(t, e, a, l, n, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, i, u) : e.prototype && e.prototype.isPureReactComponent ? !ai(a, l) || !ai(n, i) : !0;
  }
  function qo(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && Ms.enqueueReplaceState(e, e.state, null);
  }
  function Hl(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e)
        l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = Y({}, a));
      for (var n in t)
        a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function Ro(t) {
    uu(t);
  }
  function wo(t) {
    console.error(t);
  }
  function Bo(t) {
    uu(t);
  }
  function Cu(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function ko(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ns(t, e, a) {
    return a = _a(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Cu(t, e);
    }, a;
  }
  function Yo(t) {
    return t = _a(t), t.tag = 3, t;
  }
  function Ho(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        ko(e, a, l);
      };
    }
    var u = a.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      ko(e, a, l), typeof n != "function" && (il === null ? il = /* @__PURE__ */ new Set([this]) : il.add(this));
      var c = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function sm(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && dn(
        e,
        a,
        n,
        !0
      ), a = Ue.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Xe === null ? Gu() : a.alternate === null && Vt === 0 && (Vt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === vu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), _s(t, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === vu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), _s(t, l, n)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return _s(t, l, n), Gu(), !1;
    }
    if (vt)
      return e = Ue.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== Jc && (t = Error(s(422), { cause: l }), ii(Ge(t, a)))) : (l !== Jc && (e = Error(s(423), {
        cause: l
      }), ii(
        Ge(e, a)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = Ge(l, a), n = Ns(
        t.stateNode,
        l,
        n
      ), ls(t, n), Vt !== 4 && (Vt = 2)), !1;
    var i = Error(s(520), { cause: l });
    if (i = Ge(i, a), zi === null ? zi = [i] : zi.push(i), Vt !== 4 && (Vt = 2), e === null) return !0;
    l = Ge(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = Ns(a.stateNode, l, t), ls(a, t), !1;
        case 1:
          if (e = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (il === null || !il.has(i))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = Yo(n), Ho(
              n,
              t,
              a,
              l
            ), ls(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Us = Error(s(461)), Pt = !1;
  function oe(t, e, a, l) {
    e.child = t === null ? Lf(e, null, a, l) : kl(
      e,
      t.child,
      a,
      l
    );
  }
  function Vo(t, e, a, l, n) {
    a = a.render;
    var i = e.ref;
    if ("ref" in l) {
      var u = {};
      for (var c in l)
        c !== "ref" && (u[c] = l[c]);
    } else u = l;
    return ql(e), l = rs(
      t,
      e,
      a,
      u,
      i,
      n
    ), c = fs(), t !== null && !Pt ? (os(t, e, n), Ma(t, e, n)) : (vt && c && Kc(e), e.flags |= 1, oe(t, e, l, n), e.child);
  }
  function Go(t, e, a, l, n) {
    if (t === null) {
      var i = a.type;
      return typeof i == "function" && !Gc(i) && i.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = i, Lo(
        t,
        e,
        i,
        l,
        n
      )) : (t = fu(
        a.type,
        null,
        l,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !Bs(t, n)) {
      var u = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : ai, a(u, l) && t.ref === e.ref)
        return Ma(t, e, n);
    }
    return e.flags |= 1, t = xa(i, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Lo(t, e, a, l, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (ai(i, l) && t.ref === e.ref)
        if (Pt = !1, e.pendingProps = l = i, Bs(t, n))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return e.lanes = t.lanes, Ma(t, e, n);
    }
    return Cs(
      t,
      e,
      a,
      l,
      n
    );
  }
  function Zo(t, e, a, l) {
    var n = l.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | a : a, t !== null) {
          for (l = e.child = t.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~i;
        } else l = 0, e.child = null;
        return Ko(
          t,
          e,
          i,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && mu(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? Xf(e, i) : is(), Jf(e);
      else
        return l = e.lanes = 536870912, Ko(
          t,
          e,
          i !== null ? i.baseLanes | a : a,
          a,
          l
        );
    } else
      i !== null ? (mu(e, i.cachePool), Xf(e, i), el(), e.memoizedState = null) : (t !== null && mu(e, null), is(), el());
    return oe(t, e, n, a), e.child;
  }
  function gi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ko(t, e, a, l, n) {
    var i = $c();
    return i = i === null ? null : { parent: Ft._currentValue, pool: i }, e.memoizedState = {
      baseLanes: a,
      cachePool: i
    }, t !== null && mu(e, null), is(), Jf(e), t !== null && dn(t, e, l, !0), e.childLanes = n, null;
  }
  function ju(t, e) {
    return e = Du(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Xo(t, e, a) {
    return kl(e, t.child, null, a), t = ju(e, e.pendingProps), t.flags |= 2, Ce(e), e.memoizedState = null, t;
  }
  function rm(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (vt) {
        if (l.mode === "hidden")
          return t = ju(e, l), e.lanes = 536870912, gi(null, t);
        if (cs(e), (t = Rt) ? (t = l0(
          t,
          Ke
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Qa !== null ? { id: sa, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Nf(t), a.return = e, e.child = a, re = e, Rt = null)) : t = null, t === null) throw Fa(e);
        return e.lanes = 536870912, null;
      }
      return ju(e, l);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (cs(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Xo(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(s(558));
      else if (Pt || dn(t, e, a, !1), n = (a & t.childLanes) !== 0, Pt || n) {
        if (l = Ct, l !== null && (u = Xi(l, a), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, Cl(t, u), Te(l, t, u), Us;
        Gu(), e = Xo(
          t,
          e,
          a
        );
      } else
        t = i.treeContext, Rt = Je(u.nextSibling), re = e, vt = !0, Wa = null, Ke = !1, t !== null && jf(e, t), e = ju(e, l), e.flags |= 4096;
      return e;
    }
    return t = xa(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ou(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Cs(t, e, a, l, n) {
    return ql(e), a = rs(
      t,
      e,
      a,
      l,
      void 0,
      n
    ), l = fs(), t !== null && !Pt ? (os(t, e, n), Ma(t, e, n)) : (vt && l && Kc(e), e.flags |= 1, oe(t, e, a, n), e.child);
  }
  function Jo(t, e, a, l, n, i) {
    return ql(e), e.updateQueue = null, a = Wf(
      e,
      l,
      a,
      n
    ), Qf(t), l = fs(), t !== null && !Pt ? (os(t, e, i), Ma(t, e, i)) : (vt && l && Kc(e), e.flags |= 1, oe(t, e, a, i), e.child);
  }
  function Qo(t, e, a, l, n) {
    if (ql(e), e.stateNode === null) {
      var i = sn, u = a.contextType;
      typeof u == "object" && u !== null && (i = fe(u)), i = new a(l, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ms, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = l, i.state = e.memoizedState, i.refs = {}, es(e), u = a.contextType, i.context = typeof u == "object" && u !== null ? fe(u) : sn, i.state = e.memoizedState, u = a.getDerivedStateFromProps, typeof u == "function" && (Ts(
        e,
        a,
        u,
        l
      ), i.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Ms.enqueueReplaceState(i, i.state, null), di(e, l, i, n), oi(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      i = e.stateNode;
      var c = e.memoizedProps, m = Hl(a, c);
      i.props = m;
      var x = i.context, N = a.contextType;
      u = sn, typeof N == "object" && N !== null && (u = fe(N));
      var O = a.getDerivedStateFromProps;
      N = typeof O == "function" || typeof i.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c || x !== u) && qo(
        e,
        i,
        l,
        u
      ), Pa = !1;
      var S = e.memoizedState;
      i.state = S, di(e, l, i, n), oi(), x = e.memoizedState, c || S !== x || Pa ? (typeof O == "function" && (Ts(
        e,
        a,
        O,
        l
      ), x = e.memoizedState), (m = Pa || Do(
        e,
        a,
        m,
        l,
        S,
        x,
        u
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = x), i.props = l, i.state = x, i.context = u, l = m) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      i = e.stateNode, as(t, e), u = e.memoizedProps, N = Hl(a, u), i.props = N, O = e.pendingProps, S = i.context, x = a.contextType, m = sn, typeof x == "object" && x !== null && (m = fe(x)), c = a.getDerivedStateFromProps, (x = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== O || S !== m) && qo(
        e,
        i,
        l,
        m
      ), Pa = !1, S = e.memoizedState, i.state = S, di(e, l, i, n), oi();
      var A = e.memoizedState;
      u !== O || S !== A || Pa || t !== null && t.dependencies !== null && du(t.dependencies) ? (typeof c == "function" && (Ts(
        e,
        a,
        c,
        l
      ), A = e.memoizedState), (N = Pa || Do(
        e,
        a,
        N,
        l,
        S,
        A,
        m
      ) || t !== null && t.dependencies !== null && du(t.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, A, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        A,
        m
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = A), i.props = l, i.state = A, i.context = m, l = N) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return i = l, Ou(t, e), l = (e.flags & 128) !== 0, i || l ? (i = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && l ? (e.child = kl(
      e,
      t.child,
      null,
      n
    ), e.child = kl(
      e,
      null,
      a,
      n
    )) : oe(t, e, a, n), e.memoizedState = i.state, t = e.child) : t = Ma(
      t,
      e,
      n
    ), t;
  }
  function Wo(t, e, a, l) {
    return Ol(), e.flags |= 256, oe(t, e, a, l), e.child;
  }
  var js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Os(t) {
    return { baseLanes: t, cachePool: Bf() };
  }
  function Ds(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Oe), t;
  }
  function Fo(t, e, a) {
    var l = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (Lt.current & 2) !== 0), u && (n = !0, e.flags &= -129), u = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (vt) {
        if (n ? tl(e) : el(), (t = Rt) ? (t = l0(
          t,
          Ke
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Qa !== null ? { id: sa, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Nf(t), a.return = e, e.child = a, re = e, Rt = null)) : t = null, t === null) throw Fa(e);
        return mr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var c = l.children;
      return l = l.fallback, n ? (el(), n = e.mode, c = Du(
        { mode: "hidden", children: c },
        n
      ), l = jl(
        l,
        n,
        a,
        null
      ), c.return = e, l.return = e, c.sibling = l, e.child = c, l = e.child, l.memoizedState = Os(a), l.childLanes = Ds(
        t,
        u,
        a
      ), e.memoizedState = js, gi(null, l)) : (tl(e), qs(e, c));
    }
    var m = t.memoizedState;
    if (m !== null && (c = m.dehydrated, c !== null)) {
      if (i)
        e.flags & 256 ? (tl(e), e.flags &= -257, e = Rs(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (el(), e.child = t.child, e.flags |= 128, e = null) : (el(), c = l.fallback, n = e.mode, l = Du(
          { mode: "visible", children: l.children },
          n
        ), c = jl(
          c,
          n,
          a,
          null
        ), c.flags |= 2, l.return = e, c.return = e, l.sibling = c, e.child = l, kl(
          e,
          t.child,
          null,
          a
        ), l = e.child, l.memoizedState = Os(a), l.childLanes = Ds(
          t,
          u,
          a
        ), e.memoizedState = js, e = gi(null, l));
      else if (tl(e), mr(c)) {
        if (u = c.nextSibling && c.nextSibling.dataset, u) var x = u.dgst;
        u = x, l = Error(s(419)), l.stack = "", l.digest = u, ii({ value: l, source: null, stack: null }), e = Rs(
          t,
          e,
          a
        );
      } else if (Pt || dn(t, e, a, !1), u = (a & t.childLanes) !== 0, Pt || u) {
        if (u = Ct, u !== null && (l = Xi(u, a), l !== 0 && l !== m.retryLane))
          throw m.retryLane = l, Cl(t, l), Te(u, t, l), Us;
        hr(c) || Gu(), e = Rs(
          t,
          e,
          a
        );
      } else
        hr(c) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Rt = Je(
          c.nextSibling
        ), re = e, vt = !0, Wa = null, Ke = !1, t !== null && jf(e, t), e = qs(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (el(), c = l.fallback, n = e.mode, m = t.child, x = m.sibling, l = xa(m, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = m.subtreeFlags & 65011712, x !== null ? c = xa(
      x,
      c
    ) : (c = jl(
      c,
      n,
      a,
      null
    ), c.flags |= 2), c.return = e, l.return = e, l.sibling = c, e.child = l, gi(null, l), l = e.child, c = t.child.memoizedState, c === null ? c = Os(a) : (n = c.cachePool, n !== null ? (m = Ft._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = Bf(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: n
    }), l.memoizedState = c, l.childLanes = Ds(
      t,
      u,
      a
    ), e.memoizedState = js, gi(t.child, l)) : (tl(e), a = t.child, t = a.sibling, a = xa(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (u = e.deletions, u === null ? (e.deletions = [t], e.flags |= 16) : u.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function qs(t, e) {
    return e = Du(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Du(t, e) {
    return t = Ne(22, t, null, e), t.lanes = 0, t;
  }
  function Rs(t, e, a) {
    return kl(e, t.child, null, a), t = qs(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Io(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Fc(t.return, e, a);
  }
  function ws(t, e, a, l, n, i) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: i
    } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = a, u.tailMode = n, u.treeForkCount = i);
  }
  function Po(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, i = l.tail;
    l = l.children;
    var u = Lt.current, c = (u & 2) !== 0;
    if (c ? (u = u & 1 | 2, e.flags |= 128) : u &= 1, q(Lt, u), oe(t, e, l, a), l = vt ? ni : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Io(t, a, e);
        else if (t.tag === 19)
          Io(t, a, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (a = e.child, n = null; a !== null; )
          t = a.alternate, t !== null && xu(t) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), ws(
          e,
          !1,
          n,
          a,
          i,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && xu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        ws(
          e,
          !0,
          a,
          null,
          i,
          l
        );
        break;
      case "together":
        ws(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ma(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), nl |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (dn(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, a = xa(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = xa(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Bs(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && du(t)));
  }
  function fm(t, e, a) {
    switch (e.tag) {
      case 3:
        xt(e, e.stateNode.containerInfo), Ia(e, Ft, t.memoizedState.cache), Ol();
        break;
      case 27:
      case 5:
        Xt(e);
        break;
      case 4:
        xt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ia(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, cs(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (tl(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Fo(t, e, a) : (tl(e), t = Ma(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        tl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (l = (a & e.childLanes) !== 0, l || (dn(
          t,
          e,
          a,
          !1
        ), l = (a & e.childLanes) !== 0), n) {
          if (l)
            return Po(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), q(Lt, Lt.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, Zo(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        Ia(e, Ft, t.memoizedState.cache);
    }
    return Ma(t, e, a);
  }
  function _o(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Pt = !0;
      else {
        if (!Bs(t, a) && (e.flags & 128) === 0)
          return Pt = !1, fm(
            t,
            e,
            a
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, vt && (e.flags & 1048576) !== 0 && Cf(e, ni, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = wl(e.elementType), e.type = t, typeof t == "function")
            Gc(t) ? (l = Hl(t, l), e.tag = 1, e = Qo(
              null,
              e,
              t,
              l,
              a
            )) : (e.tag = 0, e = Cs(
              null,
              e,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === it) {
                e.tag = 11, e = Vo(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === I) {
                e.tag = 14, e = Go(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              }
            }
            throw e = Dt(t) || t, Error(s(306, e, ""));
          }
        }
        return e;
      case 0:
        return Cs(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return l = e.type, n = Hl(
          l,
          e.pendingProps
        ), Qo(
          t,
          e,
          l,
          n,
          a
        );
      case 3:
        t: {
          if (xt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          l = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, as(t, e), di(e, l, null, a);
          var u = e.memoizedState;
          if (l = u.cache, Ia(e, Ft, l), l !== i.cache && Ic(
            e,
            [Ft],
            a,
            !0
          ), oi(), l = u.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Wo(
                t,
                e,
                l,
                a
              );
              break t;
            } else if (l !== n) {
              n = Ge(
                Error(s(424)),
                e
              ), ii(n), e = Wo(
                t,
                e,
                l,
                a
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Rt = Je(t.firstChild), re = e, vt = !0, Wa = null, Ke = !0, a = Lf(
                e,
                null,
                l,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Ol(), l === n) {
              e = Ma(
                t,
                e,
                a
              );
              break t;
            }
            oe(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ou(t, e), t === null ? (a = r0(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : vt || (a = e.type, t = e.pendingProps, l = Wu(
          F.current
        ).createElement(a), l[Qt] = e, l[he] = t, de(l, a, t), $t(l), e.stateNode = l) : e.memoizedState = r0(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Xt(e), t === null && vt && (l = e.stateNode = u0(
          e.type,
          e.pendingProps,
          F.current
        ), re = e, Ke = !0, n = Rt, rl(e.type) ? (pr = n, Rt = Je(l.firstChild)) : Rt = n), oe(
          t,
          e,
          e.pendingProps.children,
          a
        ), Ou(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && vt && ((n = l = Rt) && (l = Vm(
          l,
          e.type,
          e.pendingProps,
          Ke
        ), l !== null ? (e.stateNode = l, re = e, Rt = Je(l.firstChild), Ke = !1, n = !0) : n = !1), n || Fa(e)), Xt(e), n = e.type, i = e.pendingProps, u = t !== null ? t.memoizedProps : null, l = i.children, fr(n, i) ? l = null : u !== null && fr(n, u) && (e.flags |= 32), e.memoizedState !== null && (n = rs(
          t,
          e,
          em,
          null,
          null,
          a
        ), Di._currentValue = n), Ou(t, e), oe(t, e, l, a), e.child;
      case 6:
        return t === null && vt && ((t = a = Rt) && (a = Gm(
          a,
          e.pendingProps,
          Ke
        ), a !== null ? (e.stateNode = a, re = e, Rt = null, t = !0) : t = !1), t || Fa(e)), null;
      case 13:
        return Fo(t, e, a);
      case 4:
        return xt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = kl(
          e,
          null,
          l,
          a
        ) : oe(t, e, l, a), e.child;
      case 11:
        return Vo(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return oe(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return oe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return oe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return l = e.pendingProps, Ia(e, e.type, l.value), oe(t, e, l.children, a), e.child;
      case 9:
        return n = e.type._context, l = e.pendingProps.children, ql(e), n = fe(n), l = l(n), e.flags |= 1, oe(t, e, l, a), e.child;
      case 14:
        return Go(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Lo(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return Po(t, e, a);
      case 31:
        return rm(t, e, a);
      case 22:
        return Zo(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return ql(e), l = fe(Ft), t === null ? (n = $c(), n === null && (n = Ct, i = Pc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), e.memoizedState = { parent: l, cache: n }, es(e), Ia(e, Ft, n)) : ((t.lanes & a) !== 0 && (as(t, e), di(e, null, null, a), oi()), n = t.memoizedState, i = e.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), Ia(e, Ft, l)) : (l = i.cache, Ia(e, Ft, l), l !== n.cache && Ic(
          e,
          [Ft],
          a,
          !0
        ))), oe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function Na(t) {
    t.flags |= 4;
  }
  function ks(t, e, a, l, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Td()) t.flags |= 8192;
        else
          throw Bl = vu, ts;
    } else t.flags &= -16777217;
  }
  function $o(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !m0(e))
      if (Td()) t.flags |= 8192;
      else
        throw Bl = vu, ts;
  }
  function qu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? xl() : 536870912, t.lanes |= e, zn |= e);
  }
  function yi(t, e) {
    if (!vt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function wt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
    if (e)
      for (var n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= l, t.childLanes = a, e;
  }
  function om(t, e, a) {
    var l = e.pendingProps;
    switch (Xc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return wt(e), null;
      case 1:
        return wt(e), null;
      case 3:
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Aa(Ft), Et(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (on(e) ? Na(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Qc())), wt(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (Na(e), i !== null ? (wt(e), $o(e, i)) : (wt(e), ks(
          e,
          n,
          null,
          l,
          a
        ))) : i ? i !== t.memoizedState ? (Na(e), wt(e), $o(e, i)) : (wt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && Na(e), wt(e), ks(
          e,
          n,
          t,
          l,
          a
        )), null;
      case 27:
        if (ha(e), a = F.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Na(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(s(166));
            return wt(e), null;
          }
          t = V.current, on(e) ? Of(e) : (t = u0(n, l, a), e.stateNode = t, Na(e));
        }
        return wt(e), null;
      case 5:
        if (ha(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Na(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(s(166));
            return wt(e), null;
          }
          if (i = V.current, on(e))
            Of(e);
          else {
            var u = Wu(
              F.current
            );
            switch (i) {
              case 1:
                i = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof l.is == "string" ? u.createElement("select", {
                      is: l.is
                    }) : u.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? u.createElement(n, { is: l.is }) : u.createElement(n);
                }
            }
            i[Qt] = e, i[he] = l;
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            e.stateNode = i;
            t: switch (de(i, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && Na(e);
          }
        }
        return wt(e), ks(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && Na(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(s(166));
          if (t = F.current, on(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = re, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            t[Qt] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Fd(t.nodeValue, a)), t || Fa(e, !0);
          } else
            t = Wu(t).createTextNode(
              l
            ), t[Qt] = e, e.stateNode = t;
        }
        return wt(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = on(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(s(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
              t[Qt] = e;
            } else
              Ol(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            wt(e), t = !1;
          } else
            a = Qc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (Ce(e), e) : (Ce(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(s(558));
        }
        return wt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = on(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(s(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[Qt] = e;
            } else
              Ol(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            wt(e), n = !1;
          } else
            n = Qc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (Ce(e), e) : (Ce(e), null);
        }
        return Ce(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), qu(e, e.updateQueue), wt(e), null);
      case 4:
        return Et(), t === null && ir(e.stateNode.containerInfo), wt(e), null;
      case 10:
        return Aa(e.type), wt(e), null;
      case 19:
        if (M(Lt), l = e.memoizedState, l === null) return wt(e), null;
        if (n = (e.flags & 128) !== 0, i = l.rendering, i === null)
          if (n) yi(l, !1);
          else {
            if (Vt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = xu(t), i !== null) {
                  for (e.flags |= 128, yi(l, !1), t = i.updateQueue, e.updateQueue = t, qu(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    Mf(a, t), a = a.sibling;
                  return q(
                    Lt,
                    Lt.current & 1 | 2
                  ), vt && Sa(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && ie() > Yu && (e.flags |= 128, n = !0, yi(l, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = xu(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, qu(e, t), yi(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !vt)
                return wt(e), null;
            } else
              2 * ie() - l.renderingStartTime > Yu && a !== 536870912 && (e.flags |= 128, n = !0, yi(l, !1), e.lanes = 4194304);
          l.isBackwards ? (i.sibling = e.child, e.child = i) : (t = l.last, t !== null ? t.sibling = i : e.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ie(), t.sibling = null, a = Lt.current, q(
          Lt,
          n ? a & 1 | 2 : a & 1
        ), vt && Sa(e, l.treeForkCount), t) : (wt(e), null);
      case 22:
      case 23:
        return Ce(e), us(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (wt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : wt(e), a = e.updateQueue, a !== null && qu(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && M(Rl), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Aa(Ft), wt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function dm(t, e) {
    switch (Xc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Aa(Ft), Et(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ha(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ce(e), e.alternate === null)
            throw Error(s(340));
          Ol();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ce(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(s(340));
          Ol();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return M(Lt), null;
      case 4:
        return Et(), null;
      case 10:
        return Aa(e.type), null;
      case 22:
      case 23:
        return Ce(e), us(), t !== null && M(Rl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Aa(Ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function td(t, e) {
    switch (Xc(e), e.tag) {
      case 3:
        Aa(Ft), Et();
        break;
      case 26:
      case 27:
      case 5:
        ha(e);
        break;
      case 4:
        Et();
        break;
      case 31:
        e.memoizedState !== null && Ce(e);
        break;
      case 13:
        Ce(e);
        break;
      case 19:
        M(Lt);
        break;
      case 10:
        Aa(e.type);
        break;
      case 22:
      case 23:
        Ce(e), us(), t !== null && M(Rl);
        break;
      case 24:
        Aa(Ft);
    }
  }
  function bi(t, e) {
    try {
      var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var i = a.create, u = a.inst;
            l = i(), u.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      zt(e, e.return, c);
    }
  }
  function al(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & t) === t) {
            var u = l.inst, c = u.destroy;
            if (c !== void 0) {
              u.destroy = void 0, n = e;
              var m = a, x = c;
              try {
                x();
              } catch (N) {
                zt(
                  n,
                  m,
                  N
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (N) {
      zt(e, e.return, N);
    }
  }
  function ed(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Kf(e, a);
      } catch (l) {
        zt(t, t.return, l);
      }
    }
  }
  function ad(t, e, a) {
    a.props = Hl(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      zt(t, e, l);
    }
  }
  function xi(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      zt(t, e, n);
    }
  }
  function fa(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          zt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          zt(t, e, n);
        }
      else a.current = null;
  }
  function ld(t) {
    var e = t.type, a = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      zt(t, t.return, n);
    }
  }
  function Ys(t, e, a) {
    try {
      var l = t.stateNode;
      Rm(l, t.type, a, e), l[he] = e;
    } catch (n) {
      zt(t, t.return, n);
    }
  }
  function nd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && rl(t.type) || t.tag === 4;
  }
  function Hs(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || nd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && rl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Vs(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ya));
    else if (l !== 4 && (l === 27 && rl(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (Vs(t, e, a), t = t.sibling; t !== null; )
        Vs(t, e, a), t = t.sibling;
  }
  function Ru(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (l !== 4 && (l === 27 && rl(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (Ru(t, e, a), t = t.sibling; t !== null; )
        Ru(t, e, a), t = t.sibling;
  }
  function id(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      de(e, l, a), e[Qt] = t, e[he] = a;
    } catch (i) {
      zt(t, t.return, i);
    }
  }
  var Ua = !1, _t = !1, Gs = !1, ud = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function hm(t, e) {
    if (t = t.containerInfo, sr = ec, t = gf(t), Rc(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break t;
            }
            var u = 0, c = -1, m = -1, x = 0, N = 0, O = t, S = null;
            e: for (; ; ) {
              for (var A; O !== a || n !== 0 && O.nodeType !== 3 || (c = u + n), O !== i || l !== 0 && O.nodeType !== 3 || (m = u + l), O.nodeType === 3 && (u += O.nodeValue.length), (A = O.firstChild) !== null; )
                S = O, O = A;
              for (; ; ) {
                if (O === t) break e;
                if (S === a && ++x === n && (c = u), S === i && ++N === l && (m = u), (A = O.nextSibling) !== null) break;
                O = S, S = O.parentNode;
              }
              O = A;
            }
            a = c === -1 || m === -1 ? null : { start: c, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (rr = { focusedElem: t, selectionRange: a }, ec = !1, le = e; le !== null; )
      if (e = le, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, le = t;
      else
        for (; le !== null; ) {
          switch (e = le, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (a = 0; a < t.length; a++)
                  n = t[a], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, a = e, n = i.memoizedProps, i = i.memoizedState, l = a.stateNode;
                try {
                  var J = Hl(
                    a.type,
                    n
                  );
                  t = l.getSnapshotBeforeUpdate(
                    J,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (_) {
                  zt(
                    a,
                    a.return,
                    _
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9)
                  dr(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      dr(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, le = t;
            break;
          }
          le = e.return;
        }
  }
  function cd(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ja(t, a), l & 4 && bi(5, a);
        break;
      case 1:
        if (ja(t, a), l & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (u) {
              zt(a, a.return, u);
            }
          else {
            var n = Hl(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              zt(
                a,
                a.return,
                u
              );
            }
          }
        l & 64 && ed(a), l & 512 && xi(a, a.return);
        break;
      case 3:
        if (ja(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Kf(t, e);
          } catch (u) {
            zt(a, a.return, u);
          }
        }
        break;
      case 27:
        e === null && l & 4 && id(a);
      case 26:
      case 5:
        ja(t, a), e === null && l & 4 && ld(a), l & 512 && xi(a, a.return);
        break;
      case 12:
        ja(t, a);
        break;
      case 31:
        ja(t, a), l & 4 && fd(t, a);
        break;
      case 13:
        ja(t, a), l & 4 && od(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = Em.bind(
          null,
          a
        ), Lm(t, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Ua, !l) {
          e = e !== null && e.memoizedState !== null || _t, n = Ua;
          var i = _t;
          Ua = l, (_t = e) && !i ? Oa(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : ja(t, a), Ua = n, _t = i;
        }
        break;
      case 30:
        break;
      default:
        ja(t, a);
    }
  }
  function sd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, sd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && La(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Bt = null, Se = !1;
  function Ca(t, e, a) {
    for (a = a.child; a !== null; )
      rd(t, e, a), a = a.sibling;
  }
  function rd(t, e, a) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(ue, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        _t || fa(a, e), Ca(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        _t || fa(a, e);
        var l = Bt, n = Se;
        rl(a.type) && (Bt = a.stateNode, Se = !1), Ca(
          t,
          e,
          a
        ), Ci(a.stateNode), Bt = l, Se = n;
        break;
      case 5:
        _t || fa(a, e);
      case 6:
        if (l = Bt, n = Se, Bt = null, Ca(
          t,
          e,
          a
        ), Bt = l, Se = n, Bt !== null)
          if (Se)
            try {
              (Bt.nodeType === 9 ? Bt.body : Bt.nodeName === "HTML" ? Bt.ownerDocument.body : Bt).removeChild(a.stateNode);
            } catch (i) {
              zt(
                a,
                e,
                i
              );
            }
          else
            try {
              Bt.removeChild(a.stateNode);
            } catch (i) {
              zt(
                a,
                e,
                i
              );
            }
        break;
      case 18:
        Bt !== null && (Se ? (t = Bt, e0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Dn(t)) : e0(Bt, a.stateNode));
        break;
      case 4:
        l = Bt, n = Se, Bt = a.stateNode.containerInfo, Se = !0, Ca(
          t,
          e,
          a
        ), Bt = l, Se = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        al(2, a, e), _t || al(4, a, e), Ca(
          t,
          e,
          a
        );
        break;
      case 1:
        _t || (fa(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && ad(
          a,
          e,
          l
        )), Ca(
          t,
          e,
          a
        );
        break;
      case 21:
        Ca(
          t,
          e,
          a
        );
        break;
      case 22:
        _t = (l = _t) || a.memoizedState !== null, Ca(
          t,
          e,
          a
        ), _t = l;
        break;
      default:
        Ca(
          t,
          e,
          a
        );
    }
  }
  function fd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Dn(t);
      } catch (a) {
        zt(e, e.return, a);
      }
    }
  }
  function od(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Dn(t);
      } catch (a) {
        zt(e, e.return, a);
      }
  }
  function mm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ud()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ud()), e;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function wu(t, e) {
    var a = mm(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = Am.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function Ee(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], i = t, u = e, c = u;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (rl(c.type)) {
                Bt = c.stateNode, Se = !1;
                break t;
              }
              break;
            case 5:
              Bt = c.stateNode, Se = !1;
              break t;
            case 3:
            case 4:
              Bt = c.stateNode.containerInfo, Se = !0;
              break t;
          }
          c = c.return;
        }
        if (Bt === null) throw Error(s(160));
        rd(i, u, n), Bt = null, Se = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        dd(e, t), e = e.sibling;
  }
  var aa = null;
  function dd(t, e) {
    var a = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ee(e, t), Ae(t), l & 4 && (al(3, t, t.return), bi(3, t), al(5, t, t.return));
        break;
      case 1:
        Ee(e, t), Ae(t), l & 512 && (_t || a === null || fa(a, a.return)), l & 64 && Ua && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = aa;
        if (Ee(e, t), Ae(t), l & 512 && (_t || a === null || fa(a, a.return)), l & 4) {
          var i = a !== null ? a.memoizedState : null;
          if (l = t.memoizedState, a === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, a = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (l) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[ia] || i[Qt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), de(i, l, a), i[Qt] = t, $t(i), l = i;
                      break t;
                    case "link":
                      var u = d0(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (u) {
                        for (var c = 0; c < u.length; c++)
                          if (i = u[c], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            u.splice(c, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), de(i, l, a), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = d0(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (c = 0; c < u.length; c++)
                          if (i = u[c], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            u.splice(c, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), de(i, l, a), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  i[Qt] = t, $t(i), l = i;
                }
                t.stateNode = l;
              } else
                h0(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = o0(
                n,
                l,
                t.memoizedProps
              );
          else
            i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? h0(
              n,
              t.type,
              t.stateNode
            ) : o0(
              n,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && Ys(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ee(e, t), Ae(t), l & 512 && (_t || a === null || fa(a, a.return)), a !== null && l & 4 && Ys(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ee(e, t), Ae(t), l & 512 && (_t || a === null || fa(a, a.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Ye(n, "");
          } catch (J) {
            zt(t, t.return, J);
          }
        }
        l & 4 && t.stateNode != null && (n = t.memoizedProps, Ys(
          t,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (Gs = !0);
        break;
      case 6:
        if (Ee(e, t), Ae(t), l & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          l = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = l;
          } catch (J) {
            zt(t, t.return, J);
          }
        }
        break;
      case 3:
        if (Pu = null, n = aa, aa = Fu(e.containerInfo), Ee(e, t), aa = n, Ae(t), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Dn(e.containerInfo);
          } catch (J) {
            zt(t, t.return, J);
          }
        Gs && (Gs = !1, hd(t));
        break;
      case 4:
        l = aa, aa = Fu(
          t.stateNode.containerInfo
        ), Ee(e, t), Ae(t), aa = l;
        break;
      case 12:
        Ee(e, t), Ae(t);
        break;
      case 31:
        Ee(e, t), Ae(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, wu(t, l)));
        break;
      case 13:
        Ee(e, t), Ae(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ku = ie()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, wu(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = a !== null && a.memoizedState !== null, x = Ua, N = _t;
        if (Ua = x || n, _t = N || m, Ee(e, t), _t = N, Ua = x, Ae(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (a === null || m || Ua || _t || Vl(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                m = a = e;
                try {
                  if (i = m.stateNode, n)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    c = m.stateNode;
                    var O = m.memoizedProps.style, S = O != null && O.hasOwnProperty("display") ? O.display : null;
                    c.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (J) {
                  zt(m, m.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (J) {
                  zt(m, m.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                m = e;
                try {
                  var A = m.stateNode;
                  n ? a0(A, !0) : a0(m.stateNode, !1);
                } catch (J) {
                  zt(m, m.return, J);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), e = e.return;
            }
            a === e && (a = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, wu(t, a))));
        break;
      case 19:
        Ee(e, t), Ae(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, wu(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ee(e, t), Ae(t);
    }
  }
  function Ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (nd(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, i = Hs(t);
            Ru(t, i, n);
            break;
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (Ye(u, ""), a.flags &= -33);
            var c = Hs(t);
            Ru(t, c, u);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, x = Hs(t);
            Vs(
              t,
              x,
              m
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (N) {
        zt(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function hd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        hd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ja(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        cd(t, e.alternate, e), e = e.sibling;
  }
  function Vl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          al(4, e, e.return), Vl(e);
          break;
        case 1:
          fa(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && ad(
            e,
            e.return,
            a
          ), Vl(e);
          break;
        case 27:
          Ci(e.stateNode);
        case 26:
        case 5:
          fa(e, e.return), Vl(e);
          break;
        case 22:
          e.memoizedState === null && Vl(e);
          break;
        case 30:
          Vl(e);
          break;
        default:
          Vl(e);
      }
      t = t.sibling;
    }
  }
  function Oa(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, n = t, i = e, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Oa(
            n,
            i,
            a
          ), bi(4, i);
          break;
        case 1:
          if (Oa(
            n,
            i,
            a
          ), l = i, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (x) {
              zt(l, l.return, x);
            }
          if (l = i, n = l.updateQueue, n !== null) {
            var c = l.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  Zf(m[n], c);
            } catch (x) {
              zt(l, l.return, x);
            }
          }
          a && u & 64 && ed(i), xi(i, i.return);
          break;
        case 27:
          id(i);
        case 26:
        case 5:
          Oa(
            n,
            i,
            a
          ), a && l === null && u & 4 && ld(i), xi(i, i.return);
          break;
        case 12:
          Oa(
            n,
            i,
            a
          );
          break;
        case 31:
          Oa(
            n,
            i,
            a
          ), a && u & 4 && fd(n, i);
          break;
        case 13:
          Oa(
            n,
            i,
            a
          ), a && u & 4 && od(n, i);
          break;
        case 22:
          i.memoizedState === null && Oa(
            n,
            i,
            a
          ), xi(i, i.return);
          break;
        case 30:
          break;
        default:
          Oa(
            n,
            i,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Ls(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && ui(a));
  }
  function Zs(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ui(t));
  }
  function la(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        md(
          t,
          e,
          a,
          l
        ), e = e.sibling;
  }
  function md(t, e, a, l) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        la(
          t,
          e,
          a,
          l
        ), n & 2048 && bi(9, e);
        break;
      case 1:
        la(
          t,
          e,
          a,
          l
        );
        break;
      case 3:
        la(
          t,
          e,
          a,
          l
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ui(t)));
        break;
      case 12:
        if (n & 2048) {
          la(
            t,
            e,
            a,
            l
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, u = i.id, c = i.onPostCommit;
            typeof c == "function" && c(
              u,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            zt(e, e.return, m);
          }
        } else
          la(
            t,
            e,
            a,
            l
          );
        break;
      case 31:
        la(
          t,
          e,
          a,
          l
        );
        break;
      case 13:
        la(
          t,
          e,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, u = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? la(
          t,
          e,
          a,
          l
        ) : Si(t, e) : i._visibility & 2 ? la(
          t,
          e,
          a,
          l
        ) : (i._visibility |= 2, Sn(
          t,
          e,
          a,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Ls(u, e);
        break;
      case 24:
        la(
          t,
          e,
          a,
          l
        ), n & 2048 && Zs(e.alternate, e);
        break;
      default:
        la(
          t,
          e,
          a,
          l
        );
    }
  }
  function Sn(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, u = e, c = a, m = l, x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Sn(
            i,
            u,
            c,
            m,
            n
          ), bi(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? Sn(
            i,
            u,
            c,
            m,
            n
          ) : Si(
            i,
            u
          ) : (N._visibility |= 2, Sn(
            i,
            u,
            c,
            m,
            n
          )), n && x & 2048 && Ls(
            u.alternate,
            u
          );
          break;
        case 24:
          Sn(
            i,
            u,
            c,
            m,
            n
          ), n && x & 2048 && Zs(u.alternate, u);
          break;
        default:
          Sn(
            i,
            u,
            c,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Si(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, l = e, n = l.flags;
        switch (l.tag) {
          case 22:
            Si(a, l), n & 2048 && Ls(
              l.alternate,
              l
            );
            break;
          case 24:
            Si(a, l), n & 2048 && Zs(l.alternate, l);
            break;
          default:
            Si(a, l);
        }
        e = e.sibling;
      }
  }
  var Ei = 8192;
  function En(t, e, a) {
    if (t.subtreeFlags & Ei)
      for (t = t.child; t !== null; )
        pd(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function pd(t, e, a) {
    switch (t.tag) {
      case 26:
        En(
          t,
          e,
          a
        ), t.flags & Ei && t.memoizedState !== null && tp(
          a,
          aa,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        En(
          t,
          e,
          a
        );
        break;
      case 3:
      case 4:
        var l = aa;
        aa = Fu(t.stateNode.containerInfo), En(
          t,
          e,
          a
        ), aa = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Ei, Ei = 16777216, En(
          t,
          e,
          a
        ), Ei = l) : En(
          t,
          e,
          a
        ));
        break;
      default:
        En(
          t,
          e,
          a
        );
    }
  }
  function vd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ai(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          le = l, yd(
            l,
            t
          );
        }
      vd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        gd(t), t = t.sibling;
  }
  function gd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ai(t), t.flags & 2048 && al(9, t, t.return);
        break;
      case 3:
        Ai(t);
        break;
      case 12:
        Ai(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Bu(t)) : Ai(t);
        break;
      default:
        Ai(t);
    }
  }
  function Bu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          le = l, yd(
            l,
            t
          );
        }
      vd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          al(8, e, e.return), Bu(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, Bu(e));
          break;
        default:
          Bu(e);
      }
      t = t.sibling;
    }
  }
  function yd(t, e) {
    for (; le !== null; ) {
      var a = le;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          al(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ui(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, le = l;
      else
        t: for (a = t; le !== null; ) {
          l = le;
          var n = l.sibling, i = l.return;
          if (sd(l), l === a) {
            le = null;
            break t;
          }
          if (n !== null) {
            n.return = i, le = n;
            break t;
          }
          le = i;
        }
    }
  }
  var pm = {
    getCacheForType: function(t) {
      var e = fe(Ft), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return fe(Ft).controller.signal;
    }
  }, vm = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Ct = null, dt = null, mt = 0, At = 0, je = null, ll = !1, An = !1, Ks = !1, Da = 0, Vt = 0, nl = 0, Gl = 0, Xs = 0, Oe = 0, zn = 0, zi = null, ze = null, Js = !1, ku = 0, bd = 0, Yu = 1 / 0, Hu = null, il = null, te = 0, ul = null, Tn = null, qa = 0, Qs = 0, Ws = null, xd = null, Ti = 0, Fs = null;
  function De() {
    return (St & 2) !== 0 && mt !== 0 ? mt & -mt : z.T !== null ? er() : Ji();
  }
  function Sd() {
    if (Oe === 0)
      if ((mt & 536870912) === 0 || vt) {
        var t = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), Oe = t;
      } else Oe = 536870912;
    return t = Ue.current, t !== null && (t.flags |= 32), Oe;
  }
  function Te(t, e, a) {
    (t === Ct && (At === 2 || At === 9) || t.cancelPendingCommit !== null) && (Mn(t, 0), cl(
      t,
      mt,
      Oe,
      !1
    )), Ha(t, a), ((St & 2) === 0 || t !== Ct) && (t === Ct && ((St & 2) === 0 && (Gl |= a), Vt === 4 && cl(
      t,
      mt,
      Oe,
      !1
    )), oa(t));
  }
  function Ed(t, e, a) {
    if ((St & 6) !== 0) throw Error(s(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ya(t, e), n = l ? bm(t, e) : Ps(t, e, !0), i = l;
    do {
      if (n === 0) {
        An && !l && cl(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, i && !gm(a)) {
          n = Ps(t, e, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = t.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            e = u;
            t: {
              var c = t;
              n = zi;
              var m = c.current.memoizedState.isDehydrated;
              if (m && (Mn(c, u).flags |= 256), u = Ps(
                c,
                u,
                !1
              ), u !== 2) {
                if (Ks && !m) {
                  c.errorRecoveryDisabledLanes |= i, Gl |= i, n = 4;
                  break t;
                }
                i = ze, ze = n, i !== null && (ze === null ? ze = i : ze.push.apply(
                  ze,
                  i
                ));
              }
              n = u;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Mn(t, 0), cl(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, i = n, i) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              cl(
                l,
                e,
                Oe,
                !ll
              );
              break t;
            case 2:
              ze = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && (n = ku + 300 - ie(), 10 < n)) {
            if (cl(
              l,
              e,
              Oe,
              !ll
            ), $e(l, 0, !0) !== 0) break t;
            qa = e, l.timeoutHandle = $d(
              Ad.bind(
                null,
                l,
                a,
                ze,
                Hu,
                Js,
                e,
                Oe,
                Gl,
                zn,
                ll,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Ad(
            l,
            a,
            ze,
            Hu,
            Js,
            e,
            Oe,
            Gl,
            zn,
            ll,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    oa(t);
  }
  function Ad(t, e, a, l, n, i, u, c, m, x, N, O, S, A) {
    if (t.timeoutHandle = -1, O = e.subtreeFlags, O & 8192 || (O & 16785408) === 16785408) {
      O = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ya
      }, pd(
        e,
        i,
        O
      );
      var J = (i & 62914560) === i ? ku - ie() : (i & 4194048) === i ? bd - ie() : 0;
      if (J = ep(
        O,
        J
      ), J !== null) {
        qa = i, t.cancelPendingCommit = J(
          Od.bind(
            null,
            t,
            e,
            i,
            a,
            l,
            n,
            u,
            c,
            m,
            N,
            O,
            null,
            S,
            A
          )
        ), cl(t, i, u, !x);
        return;
      }
    }
    Od(
      t,
      e,
      i,
      a,
      l,
      n,
      u,
      c,
      m
    );
  }
  function gm(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], i = n.getSnapshot;
          n = n.value;
          try {
            if (!Me(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function cl(t, e, a, l) {
    e &= ~Xs, e &= ~Gl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - ae(n), u = 1 << i;
      l[i] = -1, n &= ~u;
    }
    a !== 0 && Xn(t, a, e);
  }
  function Vu() {
    return (St & 6) === 0 ? (Mi(0), !1) : !0;
  }
  function Is() {
    if (dt !== null) {
      if (At === 0)
        var t = dt.return;
      else
        t = dt, Ea = Dl = null, ds(t), vn = null, si = 0, t = dt;
      for (; t !== null; )
        td(t.alternate, t), t = t.return;
      dt = null;
    }
  }
  function Mn(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, km(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), qa = 0, Is(), Ct = t, dt = a = xa(t.current, null), mt = e, At = 0, je = null, ll = !1, An = Ya(t, e), Ks = !1, zn = Oe = Xs = Gl = nl = Vt = 0, ze = zi = null, Js = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var n = 31 - ae(l), i = 1 << n;
        e |= t[n], l &= ~i;
      }
    return Da = e, cu(), a;
  }
  function zd(t, e) {
    rt = null, z.H = vi, e === pn || e === pu ? (e = Hf(), At = 3) : e === ts ? (e = Hf(), At = 4) : At = e === Us ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, je = e, dt === null && (Vt = 1, Cu(
      t,
      Ge(e, t.current)
    ));
  }
  function Td() {
    var t = Ue.current;
    return t === null ? !0 : (mt & 4194048) === mt ? Xe === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === Xe : !1;
  }
  function Md() {
    var t = z.H;
    return z.H = vi, t === null ? vi : t;
  }
  function Nd() {
    var t = z.A;
    return z.A = pm, t;
  }
  function Gu() {
    Vt = 4, ll || (mt & 4194048) !== mt && Ue.current !== null || (An = !0), (nl & 134217727) === 0 && (Gl & 134217727) === 0 || Ct === null || cl(
      Ct,
      mt,
      Oe,
      !1
    );
  }
  function Ps(t, e, a) {
    var l = St;
    St |= 2;
    var n = Md(), i = Nd();
    (Ct !== t || mt !== e) && (Hu = null, Mn(t, e)), e = !1;
    var u = Vt;
    t: do
      try {
        if (At !== 0 && dt !== null) {
          var c = dt, m = je;
          switch (At) {
            case 8:
              Is(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ue.current === null && (e = !0);
              var x = At;
              if (At = 0, je = null, Nn(t, c, m, x), a && An) {
                u = 0;
                break t;
              }
              break;
            default:
              x = At, At = 0, je = null, Nn(t, c, m, x);
          }
        }
        ym(), u = Vt;
        break;
      } catch (N) {
        zd(t, N);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ea = Dl = null, St = l, z.H = n, z.A = i, dt === null && (Ct = null, mt = 0, cu()), u;
  }
  function ym() {
    for (; dt !== null; ) Ud(dt);
  }
  function bm(t, e) {
    var a = St;
    St |= 2;
    var l = Md(), n = Nd();
    Ct !== t || mt !== e ? (Hu = null, Yu = ie() + 500, Mn(t, e)) : An = Ya(
      t,
      e
    );
    t: do
      try {
        if (At !== 0 && dt !== null) {
          e = dt;
          var i = je;
          e: switch (At) {
            case 1:
              At = 0, je = null, Nn(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (kf(i)) {
                At = 0, je = null, Cd(e);
                break;
              }
              e = function() {
                At !== 2 && At !== 9 || Ct !== t || (At = 7), oa(t);
              }, i.then(e, e);
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              kf(i) ? (At = 0, je = null, Cd(e)) : (At = 0, je = null, Nn(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (dt.tag) {
                case 26:
                  u = dt.memoizedState;
                case 5:
                case 27:
                  var c = dt;
                  if (u ? m0(u) : c.stateNode.complete) {
                    At = 0, je = null;
                    var m = c.sibling;
                    if (m !== null) dt = m;
                    else {
                      var x = c.return;
                      x !== null ? (dt = x, Lu(x)) : dt = null;
                    }
                    break e;
                  }
              }
              At = 0, je = null, Nn(t, e, i, 5);
              break;
            case 6:
              At = 0, je = null, Nn(t, e, i, 6);
              break;
            case 8:
              Is(), Vt = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        xm();
        break;
      } catch (N) {
        zd(t, N);
      }
    while (!0);
    return Ea = Dl = null, z.H = l, z.A = n, St = a, dt !== null ? 0 : (Ct = null, mt = 0, cu(), Vt);
  }
  function xm() {
    for (; dt !== null && !Gn(); )
      Ud(dt);
  }
  function Ud(t) {
    var e = _o(t.alternate, t, Da);
    t.memoizedProps = t.pendingProps, e === null ? Lu(t) : dt = e;
  }
  function Cd(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Jo(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          mt
        );
        break;
      case 11:
        e = Jo(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          mt
        );
        break;
      case 5:
        ds(e);
      default:
        td(a, e), e = dt = Mf(e, Da), e = _o(a, e, Da);
    }
    t.memoizedProps = t.pendingProps, e === null ? Lu(t) : dt = e;
  }
  function Nn(t, e, a, l) {
    Ea = Dl = null, ds(e), vn = null, si = 0;
    var n = e.return;
    try {
      if (sm(
        t,
        n,
        e,
        a,
        mt
      )) {
        Vt = 1, Cu(
          t,
          Ge(a, t.current)
        ), dt = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw dt = n, i;
      Vt = 1, Cu(
        t,
        Ge(a, t.current)
      ), dt = null;
      return;
    }
    e.flags & 32768 ? (vt || l === 1 ? t = !0 : An || (mt & 536870912) !== 0 ? t = !1 : (ll = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ue.current, l !== null && l.tag === 13 && (l.flags |= 16384))), jd(e, t)) : Lu(e);
  }
  function Lu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        jd(
          e,
          ll
        );
        return;
      }
      t = e.return;
      var a = om(
        e.alternate,
        e,
        Da
      );
      if (a !== null) {
        dt = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        dt = e;
        return;
      }
      dt = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function jd(t, e) {
    do {
      var a = dm(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, dt = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        dt = t;
        return;
      }
      dt = t = a;
    } while (t !== null);
    Vt = 6, dt = null;
  }
  function Od(t, e, a, l, n, i, u, c, m) {
    t.cancelPendingCommit = null;
    do
      Zu();
    while (te !== 0);
    if ((St & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (i = e.lanes | e.childLanes, i |= Hc, Fl(
        t,
        a,
        i,
        u,
        c,
        m
      ), t === Ct && (dt = Ct = null, mt = 0), Tn = e, ul = t, qa = a, Qs = i, Ws = n, xd = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, zm(ka, function() {
        return Bd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = z.T, z.T = null, n = w.p, w.p = 2, u = St, St |= 4;
        try {
          hm(t, e, a);
        } finally {
          St = u, w.p = n, z.T = l;
        }
      }
      te = 1, Dd(), qd(), Rd();
    }
  }
  function Dd() {
    if (te === 1) {
      te = 0;
      var t = ul, e = Tn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null;
        var l = w.p;
        w.p = 2;
        var n = St;
        St |= 4;
        try {
          dd(e, t);
          var i = rr, u = gf(t.containerInfo), c = i.focusedElem, m = i.selectionRange;
          if (u !== c && c && c.ownerDocument && vf(
            c.ownerDocument.documentElement,
            c
          )) {
            if (m !== null && Rc(c)) {
              var x = m.start, N = m.end;
              if (N === void 0 && (N = x), "selectionStart" in c)
                c.selectionStart = x, c.selectionEnd = Math.min(
                  N,
                  c.value.length
                );
              else {
                var O = c.ownerDocument || document, S = O && O.defaultView || window;
                if (S.getSelection) {
                  var A = S.getSelection(), J = c.textContent.length, _ = Math.min(m.start, J), Ut = m.end === void 0 ? _ : Math.min(m.end, J);
                  !A.extend && _ > Ut && (u = Ut, Ut = _, _ = u);
                  var g = pf(
                    c,
                    _
                  ), p = pf(
                    c,
                    Ut
                  );
                  if (g && p && (A.rangeCount !== 1 || A.anchorNode !== g.node || A.anchorOffset !== g.offset || A.focusNode !== p.node || A.focusOffset !== p.offset)) {
                    var b = O.createRange();
                    b.setStart(g.node, g.offset), A.removeAllRanges(), _ > Ut ? (A.addRange(b), A.extend(p.node, p.offset)) : (b.setEnd(p.node, p.offset), A.addRange(b));
                  }
                }
              }
            }
            for (O = [], A = c; A = A.parentNode; )
              A.nodeType === 1 && O.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < O.length; c++) {
              var j = O[c];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          ec = !!sr, rr = sr = null;
        } finally {
          St = n, w.p = l, z.T = a;
        }
      }
      t.current = e, te = 2;
    }
  }
  function qd() {
    if (te === 2) {
      te = 0;
      var t = ul, e = Tn, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = z.T, z.T = null;
        var l = w.p;
        w.p = 2;
        var n = St;
        St |= 4;
        try {
          cd(t, e.alternate, e);
        } finally {
          St = n, w.p = l, z.T = a;
        }
      }
      te = 3;
    }
  }
  function Rd() {
    if (te === 4 || te === 3) {
      te = 0, Zi();
      var t = ul, e = Tn, a = qa, l = xd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? te = 5 : (te = 0, Tn = ul = null, wd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (il = null), Sl(a), e = e.stateNode, Jt && typeof Jt.onCommitFiberRoot == "function")
        try {
          Jt.onCommitFiberRoot(
            ue,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = z.T, n = w.p, w.p = 2, z.T = null;
        try {
          for (var i = t.onRecoverableError, u = 0; u < l.length; u++) {
            var c = l[u];
            i(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          z.T = e, w.p = n;
        }
      }
      (qa & 3) !== 0 && Zu(), oa(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Fs ? Ti++ : (Ti = 0, Fs = t) : Ti = 0, Mi(0);
    }
  }
  function wd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ui(e)));
  }
  function Zu() {
    return Dd(), qd(), Rd(), Bd();
  }
  function Bd() {
    if (te !== 5) return !1;
    var t = ul, e = Qs;
    Qs = 0;
    var a = Sl(qa), l = z.T, n = w.p;
    try {
      w.p = 32 > a ? 32 : a, z.T = null, a = Ws, Ws = null;
      var i = ul, u = qa;
      if (te = 0, Tn = ul = null, qa = 0, (St & 6) !== 0) throw Error(s(331));
      var c = St;
      if (St |= 4, gd(i.current), md(
        i,
        i.current,
        u,
        a
      ), St = c, Mi(0, !1), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        try {
          Jt.onPostCommitFiberRoot(ue, i);
        } catch {
        }
      return !0;
    } finally {
      w.p = n, z.T = l, wd(t, e);
    }
  }
  function kd(t, e, a) {
    e = Ge(a, e), e = Ns(t.stateNode, e, 2), t = $a(t, e, 2), t !== null && (Ha(t, 2), oa(t));
  }
  function zt(t, e, a) {
    if (t.tag === 3)
      kd(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          kd(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (il === null || !il.has(l))) {
            t = Ge(a, t), a = Yo(2), l = $a(e, a, 2), l !== null && (Ho(
              a,
              l,
              e,
              t
            ), Ha(l, 2), oa(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function _s(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new vm();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else
      n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (Ks = !0, n.add(a), t = Sm.bind(null, t, e, a), e.then(t, t));
  }
  function Sm(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Ct === t && (mt & a) === a && (Vt === 4 || Vt === 3 && (mt & 62914560) === mt && 300 > ie() - ku ? (St & 2) === 0 && Mn(t, 0) : Xs |= a, zn === mt && (zn = 0)), oa(t);
  }
  function Yd(t, e) {
    e === 0 && (e = xl()), t = Cl(t, e), t !== null && (Ha(t, e), oa(t));
  }
  function Em(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Yd(t, a);
  }
  function Am(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, n = t.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(e), Yd(t, a);
  }
  function zm(t, e) {
    return Xl(t, e);
  }
  var Ku = null, Un = null, $s = !1, Xu = !1, tr = !1, sl = 0;
  function oa(t) {
    t !== Un && t.next === null && (Un === null ? Ku = Un = t : Un = Un.next = t), Xu = !0, $s || ($s = !0, Mm());
  }
  function Mi(t, e) {
    if (!tr && Xu) {
      tr = !0;
      do
        for (var a = !1, l = Ku; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = l.suspendedLanes, c = l.pingedLanes;
              i = (1 << 31 - ae(42 | t) + 1) - 1, i &= n & ~(u & ~c), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = !0, Ld(l, i));
          } else
            i = mt, i = $e(
              l,
              l === Ct ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Ya(l, i) || (a = !0, Ld(l, i));
          l = l.next;
        }
      while (a);
      tr = !1;
    }
  }
  function Tm() {
    Hd();
  }
  function Hd() {
    Xu = $s = !1;
    var t = 0;
    sl !== 0 && Bm() && (t = sl);
    for (var e = ie(), a = null, l = Ku; l !== null; ) {
      var n = l.next, i = Vd(l, e);
      i === 0 ? (l.next = null, a === null ? Ku = n : a.next = n, n === null && (Un = a)) : (a = l, (t !== 0 || (i & 3) !== 0) && (Xu = !0)), l = n;
    }
    te !== 0 && te !== 5 || Mi(t), sl !== 0 && (sl = 0);
  }
  function Vd(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - ae(i), c = 1 << u, m = n[u];
      m === -1 ? ((c & a) === 0 || (c & l) !== 0) && (n[u] = we(c, e)) : m <= e && (t.expiredLanes |= c), i &= ~c;
    }
    if (e = Ct, a = mt, a = $e(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, a === 0 || t === e && (At === 2 || At === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && Vn(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Ya(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && Vn(l), Sl(a)) {
        case 2:
        case 8:
          a = Ln;
          break;
        case 32:
          a = ka;
          break;
        case 268435456:
          a = ma;
          break;
        default:
          a = ka;
      }
      return l = Gd.bind(null, t), a = Xl(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && Vn(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Gd(t, e) {
    if (te !== 0 && te !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Zu() && t.callbackNode !== a)
      return null;
    var l = mt;
    return l = $e(
      t,
      t === Ct ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (Ed(t, l, e), Vd(t, ie()), t.callbackNode != null && t.callbackNode === a ? Gd.bind(null, t) : null);
  }
  function Ld(t, e) {
    if (Zu()) return null;
    Ed(t, e, !0);
  }
  function Mm() {
    Ym(function() {
      (St & 6) !== 0 ? Xl(
        Jl,
        Tm
      ) : Hd();
    });
  }
  function er() {
    if (sl === 0) {
      var t = hn;
      t === 0 && (t = Pe, Pe <<= 1, (Pe & 261888) === 0 && (Pe = 256)), sl = t;
    }
    return sl;
  }
  function Zd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : $i("" + t);
  }
  function Kd(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function Nm(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var i = Zd(
        (n[he] || null).action
      ), u = l.submitter;
      u && (e = (e = u[he] || null) ? Zd(e.formAction) : u.getAttribute("formAction"), e !== null && (i = e, u = null));
      var c = new lu(
        "action",
        "action",
        null,
        l,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (sl !== 0) {
                  var m = u ? Kd(n, u) : new FormData(n);
                  Ss(
                    a,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (c.preventDefault(), m = u ? Kd(n, u) : new FormData(n), Ss(
                  a,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var ar = 0; ar < Yc.length; ar++) {
    var lr = Yc[ar], Um = lr.toLowerCase(), Cm = lr[0].toUpperCase() + lr.slice(1);
    ea(
      Um,
      "on" + Cm
    );
  }
  ea(xf, "onAnimationEnd"), ea(Sf, "onAnimationIteration"), ea(Ef, "onAnimationStart"), ea("dblclick", "onDoubleClick"), ea("focusin", "onFocus"), ea("focusout", "onBlur"), ea(Xh, "onTransitionRun"), ea(Jh, "onTransitionStart"), ea(Qh, "onTransitionCancel"), ea(Af, "onTransitionEnd"), va("onMouseEnter", ["mouseout", "mouseover"]), va("onMouseLeave", ["mouseout", "mouseover"]), va("onPointerEnter", ["pointerout", "pointerover"]), va("onPointerLeave", ["pointerout", "pointerover"]), pa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), pa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), pa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), pa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), pa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), pa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), jm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ni)
  );
  function Xd(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = l.length - 1; 0 <= u; u--) {
            var c = l[u], m = c.instance, x = c.currentTarget;
            if (c = c.listener, m !== i && n.isPropagationStopped())
              break t;
            i = c, n.currentTarget = x;
            try {
              i(n);
            } catch (N) {
              uu(N);
            }
            n.currentTarget = null, i = m;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (c = l[u], m = c.instance, x = c.currentTarget, c = c.listener, m !== i && n.isPropagationStopped())
              break t;
            i = c, n.currentTarget = x;
            try {
              i(n);
            } catch (N) {
              uu(N);
            }
            n.currentTarget = null, i = m;
          }
      }
    }
  }
  function ht(t, e) {
    var a = e[Ga];
    a === void 0 && (a = e[Ga] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (Jd(e, t, 2, !1), a.add(l));
  }
  function nr(t, e, a) {
    var l = 0;
    e && (l |= 4), Jd(
      a,
      t,
      l,
      e
    );
  }
  var Ju = "_reactListening" + Math.random().toString(36).slice(2);
  function ir(t) {
    if (!t[Ju]) {
      t[Ju] = !0, Fi.forEach(function(a) {
        a !== "selectionchange" && (jm.has(a) || nr(a, !1, t), nr(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ju] || (e[Ju] = !0, nr("selectionchange", !1, e));
    }
  }
  function Jd(t, e, a, l) {
    switch (S0(e)) {
      case 2:
        var n = np;
        break;
      case 8:
        n = ip;
        break;
      default:
        n = xr;
    }
    a = n.bind(
      null,
      e,
      a,
      t
    ), n = void 0, !Tc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, !1);
  }
  function ur(t, e, a, l, n) {
    var i = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var u = l.tag;
        if (u === 3 || u === 4) {
          var c = l.stateNode.containerInfo;
          if (c === n) break;
          if (u === 4)
            for (u = l.return; u !== null; ) {
              var m = u.tag;
              if ((m === 3 || m === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (u = ua(c), u === null) return;
            if (m = u.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              l = i = u;
              continue t;
            }
            c = c.parentNode;
          }
        }
        l = l.return;
      }
    Fr(function() {
      var x = i, N = Ac(a), O = [];
      t: {
        var S = zf.get(t);
        if (S !== void 0) {
          var A = lu, J = t;
          switch (t) {
            case "keypress":
              if (eu(a) === 0) break t;
            case "keydown":
            case "keyup":
              A = Ah;
              break;
            case "focusin":
              J = "focus", A = Cc;
              break;
            case "focusout":
              J = "blur", A = Cc;
              break;
            case "beforeblur":
            case "afterblur":
              A = Cc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = _r;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = oh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Mh;
              break;
            case xf:
            case Sf:
            case Ef:
              A = mh;
              break;
            case Af:
              A = Uh;
              break;
            case "scroll":
            case "scrollend":
              A = rh;
              break;
            case "wheel":
              A = jh;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = vh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = tf;
              break;
            case "toggle":
            case "beforetoggle":
              A = Dh;
          }
          var _ = (e & 4) !== 0, Ut = !_ && (t === "scroll" || t === "scrollend"), g = _ ? S !== null ? S + "Capture" : null : S;
          _ = [];
          for (var p = x, b; p !== null; ) {
            var j = p;
            if (b = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || b === null || g === null || (j = Fn(p, g), j != null && _.push(
              Ui(p, j, b)
            )), Ut) break;
            p = p.return;
          }
          0 < _.length && (S = new A(
            S,
            J,
            null,
            a,
            N
          ), O.push({ event: S, listeners: _ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", S && a !== Ec && (J = a.relatedTarget || a.fromElement) && (ua(J) || J[Va]))
            break t;
          if ((A || S) && (S = N.window === N ? N : (S = N.ownerDocument) ? S.defaultView || S.parentWindow : window, A ? (J = a.relatedTarget || a.toElement, A = x, J = J ? ua(J) : null, J !== null && (Ut = E(J), _ = J.tag, J !== Ut || _ !== 5 && _ !== 27 && _ !== 6) && (J = null)) : (A = null, J = x), A !== J)) {
            if (_ = _r, j = "onMouseLeave", g = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (_ = tf, j = "onPointerLeave", g = "onPointerEnter", p = "pointer"), Ut = A == null ? S : El(A), b = J == null ? S : El(J), S = new _(
              j,
              p + "leave",
              A,
              a,
              N
            ), S.target = Ut, S.relatedTarget = b, j = null, ua(N) === x && (_ = new _(
              g,
              p + "enter",
              J,
              a,
              N
            ), _.target = b, _.relatedTarget = Ut, j = _), Ut = j, A && J)
              e: {
                for (_ = Om, g = A, p = J, b = 0, j = g; j; j = _(j))
                  b++;
                j = 0;
                for (var P = p; P; P = _(P))
                  j++;
                for (; 0 < b - j; )
                  g = _(g), b--;
                for (; 0 < j - b; )
                  p = _(p), j--;
                for (; b--; ) {
                  if (g === p || p !== null && g === p.alternate) {
                    _ = g;
                    break e;
                  }
                  g = _(g), p = _(p);
                }
                _ = null;
              }
            else _ = null;
            A !== null && Qd(
              O,
              S,
              A,
              _,
              !1
            ), J !== null && Ut !== null && Qd(
              O,
              Ut,
              J,
              _,
              !0
            );
          }
        }
        t: {
          if (S = x ? El(x) : window, A = S.nodeName && S.nodeName.toLowerCase(), A === "select" || A === "input" && S.type === "file")
            var yt = rf;
          else if (cf(S))
            if (ff)
              yt = Lh;
            else {
              yt = Vh;
              var W = Hh;
            }
          else
            A = S.nodeName, !A || A.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? x && Wn(x.elementType) && (yt = rf) : yt = Gh;
          if (yt && (yt = yt(t, x))) {
            sf(
              O,
              yt,
              a,
              N
            );
            break t;
          }
          W && W(t, S, x), t === "focusout" && x && S.type === "number" && x.memoizedProps.value != null && Al(S, "number", S.value);
        }
        switch (W = x ? El(x) : window, t) {
          case "focusin":
            (cf(W) || W.contentEditable === "true") && (nn = W, wc = x, li = null);
            break;
          case "focusout":
            li = wc = nn = null;
            break;
          case "mousedown":
            Bc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bc = !1, yf(O, a, N);
            break;
          case "selectionchange":
            if (Kh) break;
          case "keydown":
          case "keyup":
            yf(O, a, N);
        }
        var ft;
        if (Oc)
          t: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
        else
          ln ? nf(t, a) && (pt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (pt = "onCompositionStart");
        pt && (ef && a.locale !== "ko" && (ln || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && ln && (ft = Ir()) : (Ja = N, Mc = "value" in Ja ? Ja.value : Ja.textContent, ln = !0)), W = Qu(x, pt), 0 < W.length && (pt = new $r(
          pt,
          t,
          null,
          a,
          N
        ), O.push({ event: pt, listeners: W }), ft ? pt.data = ft : (ft = uf(a), ft !== null && (pt.data = ft)))), (ft = Rh ? wh(t, a) : Bh(t, a)) && (pt = Qu(x, "onBeforeInput"), 0 < pt.length && (W = new $r(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          N
        ), O.push({
          event: W,
          listeners: pt
        }), W.data = ft)), Nm(
          O,
          t,
          x,
          a,
          N
        );
      }
      Xd(O, e);
    });
  }
  function Ui(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function Qu(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Fn(t, a), n != null && l.unshift(
        Ui(t, n, i)
      ), n = Fn(t, e), n != null && l.push(
        Ui(t, n, i)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function Om(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Qd(t, e, a, l, n) {
    for (var i = e._reactName, u = []; a !== null && a !== l; ) {
      var c = a, m = c.alternate, x = c.stateNode;
      if (c = c.tag, m !== null && m === l) break;
      c !== 5 && c !== 26 && c !== 27 || x === null || (m = x, n ? (x = Fn(a, i), x != null && u.unshift(
        Ui(a, x, m)
      )) : n || (x = Fn(a, i), x != null && u.push(
        Ui(a, x, m)
      ))), a = a.return;
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var Dm = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function Wd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Dm, `
`).replace(qm, "");
  }
  function Fd(t, e) {
    return e = Wd(e), Wd(t) === e;
  }
  function Nt(t, e, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Ye(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Ye(t, "" + l);
        break;
      case "className":
        ct(t, "class", l);
        break;
      case "tabIndex":
        ct(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ct(t, a, l);
        break;
      case "style":
        He(t, l, i);
        break;
      case "data":
        if (e !== "object") {
          ct(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = $i("" + l), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (a === "formAction" ? (e !== "input" && Nt(t, e, "name", n.name, n, null), Nt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Nt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Nt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Nt(t, e, "encType", n.encType, n, null), Nt(t, e, "method", n.method, n, null), Nt(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = $i("" + l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = ya);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
          t.removeAttribute("xlink:href");
          break;
        }
        a = $i("" + l), t.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
        break;
      case "popover":
        ht("beforetoggle", t), ht("toggle", t), X(t, "popover", l);
        break;
      case "xlinkActuate":
        gt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        gt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        gt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        gt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        gt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        gt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        gt(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        gt(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        gt(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        X(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ch.get(a) || a, X(t, a, l));
    }
  }
  function cr(t, e, a, l, n, i) {
    switch (a) {
      case "style":
        He(t, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ye(t, l) : (typeof l == "number" || typeof l == "bigint") && Ye(t, "" + l);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = ya);
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
        if (!Ii.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), e = a.slice(2, n ? a.length - 7 : void 0), i = t[he] || null, i = i != null ? i[a] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof l == "function")) {
              typeof i != "function" && i !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, n);
              break t;
            }
            a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : X(t, a, l);
          }
    }
  }
  function de(t, e, a) {
    switch (e) {
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
        ht("error", t), ht("load", t);
        var l = !1, n = !1, i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var u = a[i];
            if (u != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Nt(t, e, i, u, a, null);
              }
          }
        n && Nt(t, e, "srcSet", a.srcSet, a, null), l && Nt(t, e, "src", a.src, a, null);
        return;
      case "input":
        ht("invalid", t);
        var c = i = u = n = null, m = null, x = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var N = a[l];
            if (N != null)
              switch (l) {
                case "name":
                  n = N;
                  break;
                case "type":
                  u = N;
                  break;
                case "checked":
                  m = N;
                  break;
                case "defaultChecked":
                  x = N;
                  break;
                case "value":
                  i = N;
                  break;
                case "defaultValue":
                  c = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(s(137, e));
                  break;
                default:
                  Nt(t, e, l, N, a, null);
              }
          }
        Xa(
          t,
          i,
          c,
          m,
          x,
          u,
          n,
          !1
        );
        return;
      case "select":
        ht("invalid", t), l = u = i = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (c = a[n], c != null))
            switch (n) {
              case "value":
                i = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "multiple":
                l = c;
              default:
                Nt(t, e, n, c, a, null);
            }
        e = i, a = u, t.multiple = !!l, e != null ? ca(t, !!l, e, !1) : a != null && ca(t, !!l, a, !0);
        return;
      case "textarea":
        ht("invalid", t), i = n = l = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (c = a[u], c != null))
            switch (u) {
              case "value":
                l = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                i = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                Nt(t, e, u, c, a, null);
            }
        se(t, l, n, i);
        return;
      case "option":
        for (m in a)
          a.hasOwnProperty(m) && (l = a[m], l != null) && (m === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Nt(t, e, m, l, a, null));
        return;
      case "dialog":
        ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ni.length; l++)
          ht(Ni[l], t);
        break;
      case "image":
        ht("error", t), ht("load", t);
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ht("error", t), ht("load", t);
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
        for (x in a)
          if (a.hasOwnProperty(x) && (l = a[x], l != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Nt(t, e, x, l, a, null);
            }
        return;
      default:
        if (Wn(e)) {
          for (N in a)
            a.hasOwnProperty(N) && (l = a[N], l !== void 0 && cr(
              t,
              e,
              N,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (l = a[c], l != null && Nt(t, e, c, l, a, null));
  }
  function Rm(t, e, a, l) {
    switch (e) {
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
        var n = null, i = null, u = null, c = null, m = null, x = null, N = null;
        for (A in a) {
          var O = a[A];
          if (a.hasOwnProperty(A) && O != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = O;
              default:
                l.hasOwnProperty(A) || Nt(t, e, A, null, l, O);
            }
        }
        for (var S in l) {
          var A = l[S];
          if (O = a[S], l.hasOwnProperty(S) && (A != null || O != null))
            switch (S) {
              case "type":
                i = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                x = A;
                break;
              case "defaultChecked":
                N = A;
                break;
              case "value":
                u = A;
                break;
              case "defaultValue":
                c = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(s(137, e));
                break;
              default:
                A !== O && Nt(
                  t,
                  e,
                  S,
                  A,
                  l,
                  O
                );
            }
        }
        ve(
          t,
          u,
          c,
          m,
          x,
          N,
          i,
          n
        );
        return;
      case "select":
        A = u = c = S = null;
        for (i in a)
          if (m = a[i], a.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                A = m;
              default:
                l.hasOwnProperty(i) || Nt(
                  t,
                  e,
                  i,
                  null,
                  l,
                  m
                );
            }
        for (n in l)
          if (i = l[n], m = a[n], l.hasOwnProperty(n) && (i != null || m != null))
            switch (n) {
              case "value":
                S = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== m && Nt(
                  t,
                  e,
                  n,
                  i,
                  l,
                  m
                );
            }
        e = c, a = u, l = A, S != null ? ca(t, !!a, S, !1) : !!l != !!a && (e != null ? ca(t, !!a, e, !0) : ca(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        A = S = null;
        for (c in a)
          if (n = a[c], a.hasOwnProperty(c) && n != null && !l.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, e, c, null, l, n);
            }
        for (u in l)
          if (n = l[u], i = a[u], l.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== i && Nt(t, e, u, n, l, i);
            }
        tn(t, S, A);
        return;
      case "option":
        for (var J in a)
          S = a[J], a.hasOwnProperty(J) && S != null && !l.hasOwnProperty(J) && (J === "selected" ? t.selected = !1 : Nt(
            t,
            e,
            J,
            null,
            l,
            S
          ));
        for (m in l)
          S = l[m], A = a[m], l.hasOwnProperty(m) && S !== A && (S != null || A != null) && (m === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : Nt(
            t,
            e,
            m,
            S,
            l,
            A
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
        for (var _ in a)
          S = a[_], a.hasOwnProperty(_) && S != null && !l.hasOwnProperty(_) && Nt(t, e, _, null, l, S);
        for (x in l)
          if (S = l[x], A = a[x], l.hasOwnProperty(x) && S !== A && (S != null || A != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(s(137, e));
                break;
              default:
                Nt(
                  t,
                  e,
                  x,
                  S,
                  l,
                  A
                );
            }
        return;
      default:
        if (Wn(e)) {
          for (var Ut in a)
            S = a[Ut], a.hasOwnProperty(Ut) && S !== void 0 && !l.hasOwnProperty(Ut) && cr(
              t,
              e,
              Ut,
              void 0,
              l,
              S
            );
          for (N in l)
            S = l[N], A = a[N], !l.hasOwnProperty(N) || S === A || S === void 0 && A === void 0 || cr(
              t,
              e,
              N,
              S,
              l,
              A
            );
          return;
        }
    }
    for (var g in a)
      S = a[g], a.hasOwnProperty(g) && S != null && !l.hasOwnProperty(g) && Nt(t, e, g, null, l, S);
    for (O in l)
      S = l[O], A = a[O], !l.hasOwnProperty(O) || S === A || S == null && A == null || Nt(t, e, O, S, l, A);
  }
  function Id(t) {
    switch (t) {
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
  function wm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], i = n.transferSize, u = n.initiatorType, c = n.duration;
        if (i && c && Id(u)) {
          for (u = 0, c = n.responseEnd, l += 1; l < a.length; l++) {
            var m = a[l], x = m.startTime;
            if (x > c) break;
            var N = m.transferSize, O = m.initiatorType;
            N && Id(O) && (m = m.responseEnd, u += N * (m < c ? 1 : (c - x) / (m - x)));
          }
          if (--l, e += 8 * (i + u) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var sr = null, rr = null;
  function Wu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Pd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _d(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function fr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var or = null;
  function Bm() {
    var t = window.event;
    return t && t.type === "popstate" ? t === or ? !1 : (or = t, !0) : (or = null, !1);
  }
  var $d = typeof setTimeout == "function" ? setTimeout : void 0, km = typeof clearTimeout == "function" ? clearTimeout : void 0, t0 = typeof Promise == "function" ? Promise : void 0, Ym = typeof queueMicrotask == "function" ? queueMicrotask : typeof t0 < "u" ? function(t) {
    return t0.resolve(null).then(t).catch(Hm);
  } : $d;
  function Hm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function rl(t) {
    return t === "head";
  }
  function e0(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(n), Dn(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Ci(t.ownerDocument.documentElement);
        else if (a === "head") {
          a = t.ownerDocument.head, Ci(a);
          for (var i = a.firstChild; i; ) {
            var u = i.nextSibling, c = i.nodeName;
            i[ia] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = u;
          }
        } else
          a === "body" && Ci(t.ownerDocument.body);
      a = n;
    } while (a);
    Dn(e);
  }
  function a0(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = l;
    } while (a);
  }
  function dr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          dr(a), La(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function Vm(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var n = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[ia])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Je(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Gm(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function l0(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function hr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function mr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Lm(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Je(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var pr = null;
  function n0(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return Je(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function i0(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function u0(t, e, a) {
    switch (e = Wu(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Ci(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    La(t);
  }
  var Qe = /* @__PURE__ */ new Map(), c0 = /* @__PURE__ */ new Set();
  function Fu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ra = w.d;
  w.d = {
    f: Zm,
    r: Km,
    D: Xm,
    C: Jm,
    L: Qm,
    m: Wm,
    X: Im,
    S: Fm,
    M: Pm
  };
  function Zm() {
    var t = Ra.f(), e = Vu();
    return t || e;
  }
  function Km(t) {
    var e = Za(t);
    e !== null && e.tag === 5 && e.type === "form" ? zo(e) : Ra.r(t);
  }
  var Cn = typeof document > "u" ? null : document;
  function s0(t, e, a) {
    var l = Cn;
    if (l && typeof e == "string" && e) {
      var n = Wt(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), c0.has(n) || (c0.add(n), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(n) === null && (e = l.createElement("link"), de(e, "link", t), $t(e), l.head.appendChild(e)));
    }
  }
  function Xm(t) {
    Ra.D(t), s0("dns-prefetch", t, null);
  }
  function Jm(t, e) {
    Ra.C(t, e), s0("preconnect", t, e);
  }
  function Qm(t, e, a) {
    Ra.L(t, e, a);
    var l = Cn;
    if (l && t && e) {
      var n = 'link[rel="preload"][as="' + Wt(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Wt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Wt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Wt(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = jn(t);
          break;
        case "script":
          i = On(t);
      }
      Qe.has(i) || (t = Y(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), Qe.set(i, t), l.querySelector(n) !== null || e === "style" && l.querySelector(ji(i)) || e === "script" && l.querySelector(Oi(i)) || (e = l.createElement("link"), de(e, "link", t), $t(e), l.head.appendChild(e)));
    }
  }
  function Wm(t, e) {
    Ra.m(t, e);
    var a = Cn;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Wt(l) + '"][href="' + Wt(t) + '"]', i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = On(t);
      }
      if (!Qe.has(i) && (t = Y({ rel: "modulepreload", href: t }, e), Qe.set(i, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Oi(i)))
              return;
        }
        l = a.createElement("link"), de(l, "link", t), $t(l), a.head.appendChild(l);
      }
    }
  }
  function Fm(t, e, a) {
    Ra.S(t, e, a);
    var l = Cn;
    if (l && t) {
      var n = Ka(l).hoistableStyles, i = jn(t);
      e = e || "default";
      var u = n.get(i);
      if (!u) {
        var c = { loading: 0, preload: null };
        if (u = l.querySelector(
          ji(i)
        ))
          c.loading = 5;
        else {
          t = Y(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = Qe.get(i)) && vr(t, a);
          var m = u = l.createElement("link");
          $t(m), de(m, "link", t), m._p = new Promise(function(x, N) {
            m.onload = x, m.onerror = N;
          }), m.addEventListener("load", function() {
            c.loading |= 1;
          }), m.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Iu(u, e, l);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: c
        }, n.set(i, u);
      }
    }
  }
  function Im(t, e) {
    Ra.X(t, e);
    var a = Cn;
    if (a && t) {
      var l = Ka(a).hoistableScripts, n = On(t), i = l.get(n);
      i || (i = a.querySelector(Oi(n)), i || (t = Y({ src: t, async: !0 }, e), (e = Qe.get(n)) && gr(t, e), i = a.createElement("script"), $t(i), de(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function Pm(t, e) {
    Ra.M(t, e);
    var a = Cn;
    if (a && t) {
      var l = Ka(a).hoistableScripts, n = On(t), i = l.get(n);
      i || (i = a.querySelector(Oi(n)), i || (t = Y({ src: t, async: !0, type: "module" }, e), (e = Qe.get(n)) && gr(t, e), i = a.createElement("script"), $t(i), de(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function r0(t, e, a, l) {
    var n = (n = F.current) ? Fu(n) : null;
    if (!n) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = jn(a.href), a = Ka(
          n
        ).hoistableStyles, l = a.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = jn(a.href);
          var i = Ka(
            n
          ).hoistableStyles, u = i.get(t);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, u), (i = n.querySelector(
            ji(t)
          )) && !i._p && (u.instance = i, u.state.loading = 5), Qe.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Qe.set(t, a), i || _m(
            n,
            t,
            a,
            u.state
          ))), e && l === null)
            throw Error(s(528, ""));
          return u;
        }
        if (e && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = On(a), a = Ka(
          n
        ).hoistableScripts, l = a.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function jn(t) {
    return 'href="' + Wt(t) + '"';
  }
  function ji(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function f0(t) {
    return Y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function _m(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), de(e, "link", a), $t(e), t.head.appendChild(e));
  }
  function On(t) {
    return '[src="' + Wt(t) + '"]';
  }
  function Oi(t) {
    return "script[async]" + t;
  }
  function o0(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Wt(a.href) + '"]'
          );
          if (l)
            return e.instance = l, $t(l), l;
          var n = Y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), $t(l), de(l, "style", n), Iu(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          n = jn(a.href);
          var i = t.querySelector(
            ji(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, $t(i), i;
          l = f0(a), (n = Qe.get(n)) && vr(l, n), i = (t.ownerDocument || t).createElement("link"), $t(i);
          var u = i;
          return u._p = new Promise(function(c, m) {
            u.onload = c, u.onerror = m;
          }), de(i, "link", l), e.state.loading |= 4, Iu(i, a.precedence, t), e.instance = i;
        case "script":
          return i = On(a.src), (n = t.querySelector(
            Oi(i)
          )) ? (e.instance = n, $t(n), n) : (l = a, (n = Qe.get(i)) && (l = Y({}, a), gr(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), $t(n), de(n, "link", l), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Iu(l, a.precedence, t));
    return e.instance;
  }
  function Iu(t, e, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, i = n, u = 0; u < l.length; u++) {
      var c = l[u];
      if (c.dataset.precedence === e) i = c;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function vr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function gr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Pu = null;
  function d0(t, e, a) {
    if (Pu === null) {
      var l = /* @__PURE__ */ new Map(), n = Pu = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = Pu, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var i = a[n];
      if (!(i[ia] || i[Qt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var c = l.get(u);
        c ? c.push(i) : l.set(u, [i]);
      }
    }
    return l;
  }
  function h0(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function $m(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function m0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function tp(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = jn(l.href), i = e.querySelector(
          ji(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = _u.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = i, $t(i);
          return;
        }
        i = e.ownerDocument || e, l = f0(l), (n = Qe.get(n)) && vr(l, n), i = i.createElement("link"), $t(i);
        var u = i;
        u._p = new Promise(function(c, m) {
          u.onload = c, u.onerror = m;
        }), de(i, "link", l), a.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = _u.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var yr = 0;
  function ep(t, e) {
    return t.stylesheets && t.count === 0 && tc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && tc(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && yr === 0 && (yr = 62500 * wm());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tc(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > yr ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function _u() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) tc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var $u = null;
  function tc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $u = /* @__PURE__ */ new Map(), e.forEach(ap, t), $u = null, _u.call(t));
  }
  function ap(t, e) {
    if (!(e.state.loading & 4)) {
      var a = $u.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), $u.set(t, a);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (a.set(u.dataset.precedence, u), l = u);
        }
        l && a.set(null, l);
      }
      n = e.instance, u = n.getAttribute("data-precedence"), i = a.get(u) || l, i === l && a.set(null, n), a.set(u, n), this.count++, l = _u.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Di = {
    $$typeof: nt,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function lp(t, e, a, l, n, i, u, c, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.hiddenUpdates = Wl(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function p0(t, e, a, l, n, i, u, c, m, x, N, O) {
    return t = new lp(
      t,
      e,
      a,
      u,
      m,
      x,
      N,
      O,
      c
    ), e = 1, i === !0 && (e |= 24), i = Ne(3, null, null, e), t.current = i, i.stateNode = t, e = Pc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, es(i), t;
  }
  function v0(t) {
    return t ? (t = sn, t) : sn;
  }
  function g0(t, e, a, l, n, i) {
    n = v0(n), l.context === null ? l.context = n : l.pendingContext = n, l = _a(e), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = $a(t, l, e), a !== null && (Te(a, t, e), fi(a, t, e));
  }
  function y0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function br(t, e) {
    y0(t, e), (t = t.alternate) && y0(t, e);
  }
  function b0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Cl(t, 67108864);
      e !== null && Te(e, t, 67108864), br(t, 67108864);
    }
  }
  function x0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = De();
      e = Jn(e);
      var a = Cl(t, e);
      a !== null && Te(a, t, e), br(t, e);
    }
  }
  var ec = !0;
  function np(t, e, a, l) {
    var n = z.T;
    z.T = null;
    var i = w.p;
    try {
      w.p = 2, xr(t, e, a, l);
    } finally {
      w.p = i, z.T = n;
    }
  }
  function ip(t, e, a, l) {
    var n = z.T;
    z.T = null;
    var i = w.p;
    try {
      w.p = 8, xr(t, e, a, l);
    } finally {
      w.p = i, z.T = n;
    }
  }
  function xr(t, e, a, l) {
    if (ec) {
      var n = Sr(l);
      if (n === null)
        ur(
          t,
          e,
          l,
          ac,
          a
        ), E0(t, l);
      else if (cp(
        n,
        t,
        e,
        a,
        l
      ))
        l.stopPropagation();
      else if (E0(t, l), e & 4 && -1 < up.indexOf(t)) {
        for (; n !== null; ) {
          var i = Za(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Re(i.pendingLanes);
                  if (u !== 0) {
                    var c = i;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; u; ) {
                      var m = 1 << 31 - ae(u);
                      c.entanglements[1] |= m, u &= ~m;
                    }
                    oa(i), (St & 6) === 0 && (Yu = ie() + 500, Mi(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Cl(i, 2), c !== null && Te(c, i, 2), Vu(), br(i, 2);
            }
          if (i = Sr(l), i === null && ur(
            t,
            e,
            l,
            ac,
            a
          ), i === n) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else
        ur(
          t,
          e,
          l,
          null,
          a
        );
    }
  }
  function Sr(t) {
    return t = Ac(t), Er(t);
  }
  var ac = null;
  function Er(t) {
    if (ac = null, t = ua(t), t !== null) {
      var e = E(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = T(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = H(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ac = t, null;
  }
  function S0(t) {
    switch (t) {
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
        switch (Ba()) {
          case Jl:
            return 2;
          case Ln:
            return 8;
          case ka:
          case Zn:
            return 32;
          case ma:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ar = !1, fl = null, ol = null, dl = null, qi = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), hl = [], up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function E0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        fl = null;
        break;
      case "dragenter":
      case "dragleave":
        ol = null;
        break;
      case "mouseover":
      case "mouseout":
        dl = null;
        break;
      case "pointerover":
      case "pointerout":
        qi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ri.delete(e.pointerId);
    }
  }
  function wi(t, e, a, l, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = Za(e), e !== null && b0(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function cp(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return fl = wi(
          fl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return ol = wi(
          ol,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return dl = wi(
          dl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return qi.set(
          i,
          wi(
            qi.get(i) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Ri.set(
          i,
          wi(
            Ri.get(i) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function A0(t) {
    var e = ua(t.target);
    if (e !== null) {
      var a = E(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = T(a), e !== null) {
            t.blockedOn = e, Qi(t.priority, function() {
              x0(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = H(a), e !== null) {
            t.blockedOn = e, Qi(t.priority, function() {
              x0(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function lc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Sr(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Ec = l, a.target.dispatchEvent(l), Ec = null;
      } else
        return e = Za(a), e !== null && b0(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function z0(t, e, a) {
    lc(t) && a.delete(e);
  }
  function sp() {
    Ar = !1, fl !== null && lc(fl) && (fl = null), ol !== null && lc(ol) && (ol = null), dl !== null && lc(dl) && (dl = null), qi.forEach(z0), Ri.forEach(z0);
  }
  function nc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ar || (Ar = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      sp
    )));
  }
  var ic = null;
  function T0(t) {
    ic !== t && (ic = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        ic === t && (ic = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], n = t[e + 2];
          if (typeof l != "function") {
            if (Er(l || a) === null)
              continue;
            break;
          }
          var i = Za(a);
          i !== null && (t.splice(e, 3), e -= 3, Ss(
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
  function Dn(t) {
    function e(m) {
      return nc(m, t);
    }
    fl !== null && nc(fl, t), ol !== null && nc(ol, t), dl !== null && nc(dl, t), qi.forEach(e), Ri.forEach(e);
    for (var a = 0; a < hl.length; a++) {
      var l = hl[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < hl.length && (a = hl[0], a.blockedOn === null); )
      A0(a), a.blockedOn === null && hl.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], i = a[l + 1], u = n[he] || null;
        if (typeof i == "function")
          u || T0(a);
        else if (u) {
          var c = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, u = i[he] || null)
              c = u.formAction;
            else if (Er(n) !== null) continue;
          } else c = u.action;
          typeof c == "function" ? a[l + 1] = c : (a.splice(l, 3), l -= 3), T0(a);
        }
      }
  }
  function M0() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(u) {
            return n = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
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
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function zr(t) {
    this._internalRoot = t;
  }
  uc.prototype.render = zr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var a = e.current, l = De();
    g0(a, l, t, e, null, null);
  }, uc.prototype.unmount = zr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      g0(t.current, 2, null, t, null, null), Vu(), e[Va] = null;
    }
  };
  function uc(t) {
    this._internalRoot = t;
  }
  uc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Ji();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < hl.length && e !== 0 && e < hl[a].priority; a++) ;
      hl.splice(a, 0, t), a === 0 && A0(t);
    }
  };
  var N0 = r.version;
  if (N0 !== "19.2.8")
    throw Error(
      s(
        527,
        N0,
        "19.2.8"
      )
    );
  w.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = y(e), t = t !== null ? k(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var rp = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cc.isDisabled && cc.supportsFiber)
      try {
        ue = cc.inject(
          rp
        ), Jt = cc;
      } catch {
      }
  }
  return ki.createRoot = function(t, e) {
    if (!v(t)) throw Error(s(299));
    var a = !1, l = "", n = Ro, i = wo, u = Bo;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (u = e.onRecoverableError)), e = p0(
      t,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      i,
      u,
      M0
    ), t[Va] = e.current, ir(t), new zr(e);
  }, ki.hydrateRoot = function(t, e, a) {
    if (!v(t)) throw Error(s(299));
    var l = !1, n = "", i = Ro, u = wo, c = Bo, m = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (u = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (m = a.formState)), e = p0(
      t,
      1,
      !0,
      e,
      a ?? null,
      l,
      n,
      m,
      i,
      u,
      c,
      M0
    ), e.context = v0(null), a = e.current, l = De(), l = Jn(l), n = _a(l), n.callback = null, $a(a, n, l), a = l, e.current.lanes = a, Ha(e, a), oa(e), t[Va] = e.current, ir(t), new uc(e);
  }, ki.version = "19.2.8", ki;
}
var k0;
function bp() {
  if (k0) return Nr.exports;
  k0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (r) {
        console.error(r);
      }
  }
  return f(), Nr.exports = yp(), Nr.exports;
}
var xp = bp();
const qe = {
  PAUSE: 1,
  SEEK: 2,
  VOLUME_SET: 4,
  PREVIOUS_TRACK: 16,
  NEXT_TRACK: 32,
  PLAY: 16384,
  SHUFFLE_SET: 32768,
  REPEAT_SET: 262144
};
function Gi(f, r) {
  return ((f?.attributes.supported_features ?? 0) & r) !== 0;
}
const Fe = {
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
function da({ d: f }) {
  return /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: f, fillRule: "evenodd" }) });
}
function Sp({
  entity: f,
  playing: r,
  showPlayButton: d,
  onPlayPause: s,
  onPrevious: v,
  onNext: E,
  onVolume: T
}) {
  const H = f?.attributes, U = H?.volume_level ?? 0, y = H?.is_volume_muted === !0, k = Gi(f, qe.VOLUME_SET), Y = Gi(f, qe.PREVIOUS_TRACK), L = Gi(f, qe.NEXT_TRACK);
  return /* @__PURE__ */ o.jsxs("div", { className: "controls", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau précédent",
        title: "Précédent",
        disabled: !Y,
        onClick: v,
        children: /* @__PURE__ */ o.jsx(da, { d: Fe.prev })
      }
    ),
    d && /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "iconbtn iconbtn--play",
        "aria-label": r ? "Pause" : "Lecture",
        title: r ? "Pause" : "Lecture",
        onClick: s,
        children: /* @__PURE__ */ o.jsx(da, { d: r ? Fe.pause : Fe.play })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau suivant",
        title: "Suivant",
        disabled: !L,
        onClick: E,
        children: /* @__PURE__ */ o.jsx(da, { d: Fe.next })
      }
    ),
    k && /* @__PURE__ */ o.jsxs("div", { className: "volume", children: [
      /* @__PURE__ */ o.jsx(da, { d: y || U === 0 ? Fe.muted : Fe.volume }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Math.round(U * 100),
          "aria-label": "Volume",
          onChange: ($) => T(Number($.target.value) / 100)
        }
      )
    ] })
  ] });
}
function Ep({
  entity: f,
  onLibrary: r,
  onQueue: d,
  onSpeakers: s,
  queueOn: v,
  onSettings: E,
  onLyrics: T,
  onShuffle: H,
  onRepeat: U,
  lyricsOn: y,
  lyricsAvailable: k,
  name: Y
}) {
  const L = f?.attributes, $ = L?.shuffle === !0, G = L?.repeat ?? "off", R = Gi(f, qe.SHUFFLE_SET), lt = Gi(f, qe.REPEAT_SET);
  return /* @__PURE__ */ o.jsxs("div", { className: "hud__top", children: [
    /* @__PURE__ */ o.jsxs("span", { className: "hud__left", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-label": "Bibliothèque",
          title: "Bibliothèque",
          onClick: r,
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.crate })
        }
      ),
      /* @__PURE__ */ o.jsxs("button", { className: "hud__room", onClick: s, title: "Changer d'enceinte", children: [
        /* @__PURE__ */ o.jsx("span", { className: "hud__name", children: Y }),
        /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "hud__chev", children: /* @__PURE__ */ o.jsx("path", { d: "M7 10l5 5 5-5z", fill: "currentColor" }) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("span", { className: "hud__tools", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": v,
          "aria-label": "File d'attente",
          title: "À suivre",
          onClick: d,
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.queue })
        }
      ),
      R && /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": $,
          "aria-label": "Lecture aléatoire",
          title: "Lecture aléatoire",
          onClick: () => H(!$),
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.shuffle })
        }
      ),
      lt && /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": G !== "off",
          "aria-label": "Répétition",
          title: G === "one" ? "Répéter ce morceau" : G === "all" ? "Répéter tout" : "Répétition",
          onClick: U,
          children: [
            /* @__PURE__ */ o.jsx(da, { d: Fe.repeat }),
            G === "one" && /* @__PURE__ */ o.jsx("span", { className: "badge-one", children: "1" })
          ]
        }
      ),
      k && /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": y,
          "aria-label": "Paroles",
          title: "Paroles",
          onClick: T,
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.lyrics })
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-label": "Réglages",
          title: "Réglages",
          onClick: E,
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.gear })
        }
      )
    ] })
  ] });
}
const vl = {
  a: "hsl(220 4% 46%)",
  b: "hsl(220 5% 34%)",
  deep: "hsl(220 6% 14%)",
  text: "hsl(0 0% 100%)",
  isDark: !0
}, qn = 40, Yi = /* @__PURE__ */ new Map();
async function W0(f) {
  const r = Yi.get(f);
  if (r) return r;
  try {
    const d = await Ap(f), s = zp(d);
    return Yi.set(f, s), Yi.size > 60 && Yi.delete(Yi.keys().next().value), s;
  } catch {
    return vl;
  }
}
function Ap(f) {
  return new Promise((r, d) => {
    const s = new Image();
    s.crossOrigin = "anonymous", s.decoding = "async", s.onload = () => r(s), s.onerror = () => d(new Error("image illisible")), s.src = f;
  });
}
function zp(f) {
  const r = document.createElement("canvas");
  r.width = qn, r.height = qn;
  const d = r.getContext("2d", { willReadFrequently: !0 });
  if (!d) return vl;
  d.drawImage(f, 0, 0, qn, qn);
  const { data: s } = d.getImageData(0, 0, qn, qn), v = /* @__PURE__ */ new Map();
  let E = 0, T = 0;
  for (let G = 0; G < s.length; G += 4) {
    if ((s[G + 3] ?? 0) < 200) continue;
    const lt = s[G] ?? 0, tt = s[G + 1] ?? 0, ut = s[G + 2] ?? 0;
    E += (0.2126 * lt + 0.7152 * tt + 0.0722 * ut) / 255, T++;
    const nt = lt >> 5 << 10 | tt >> 5 << 5 | ut >> 5, it = v.get(nt);
    it ? (it.count++, it.r += lt, it.g += tt, it.b += ut) : v.set(nt, { count: 1, r: lt, g: tt, b: ut });
  }
  if (T === 0) return vl;
  const H = [...v.values()].map((G) => {
    const R = G.r / G.count, lt = G.g / G.count, tt = G.b / G.count, [ut, nt, it] = Np(R, lt, tt);
    return { h: ut, s: nt, l: it, count: G.count, score: Tp(G.count, nt, it) };
  }).sort((G, R) => R.score - G.score), U = H[0];
  if (!U) return vl;
  const y = H.find((G) => Mp(G.h, U.h) > 35 && G.score > U.score * 0.12) ?? H.find((G) => Math.abs(G.l - U.l) > 0.18) ?? null, Y = E / T < 0.55, L = sc(U.h, Ll(U.s, 0.18, 0.85), Ll(U.l, 0.3, 0.62)), $ = y ? sc(y.h, Ll(y.s, 0.15, 0.8), Ll(y.l, 0.22, 0.55)) : sc((U.h + 28) % 360, Ll(U.s * 0.8, 0.12, 0.7), Ll(U.l - 0.14, 0.18, 0.5));
  return {
    a: L,
    b: $,
    deep: sc(U.h, Ll(U.s * 0.55, 0.08, 0.4), 0.13),
    text: "hsl(0 0% 100%)",
    isDark: Y
  };
}
function Tp(f, r, d) {
  const s = 0.25 + r * 1.75, v = 1 - Math.pow(Math.abs(d - 0.5) * 2, 1.6);
  return f * s * Math.max(v, 0.05);
}
function Mp(f, r) {
  const d = Math.abs(f - r) % 360;
  return d > 180 ? 360 - d : d;
}
function Ll(f, r, d) {
  return Math.min(d, Math.max(r, f));
}
function sc(f, r, d) {
  return `hsl(${Math.round(f)} ${Math.round(r * 100)}% ${Math.round(d * 100)}%)`;
}
function Np(f, r, d) {
  f /= 255, r /= 255, d /= 255;
  const s = Math.max(f, r, d), v = Math.min(f, r, d), E = (s + v) / 2, T = s - v;
  if (T === 0) return [0, 0, E];
  const H = E > 0.5 ? T / (2 - s - v) : T / (s + v);
  let U;
  return s === f ? U = ((r - d) / T + (r < d ? 6 : 0)) * 60 : s === r ? U = ((d - f) / T + 2) * 60 : U = ((f - r) / T + 4) * 60, [U, H, E];
}
const Y0 = 7, Or = 5, Dr = 8, qr = 1.6, Up = 0.5, Cp = 0.25, H0 = 0.5, rc = 2;
function jp({
  albums: f,
  loading: r,
  error: d,
  onPlay: s,
  onClose: v,
  resumeIndex: E,
  onFocusChange: T,
  query: H,
  onQuery: U,
  searching: y
}) {
  const [k, Y] = C.useState(E ?? 0), [, L] = C.useState(null), [$, G] = C.useState(!1), [R, lt] = C.useState({}), tt = C.useRef(null), ut = C.useRef(E ?? 0), nt = C.useRef(!1), it = C.useRef(0), Yt = C.useRef(!1), Ot = C.useRef(!1), I = f.length, ot = Math.max(0, I - 1), ee = C.useMemo(() => {
    const B = Math.max(0, k - Y0 - Or), Z = Math.min(ot, k + Y0 + Or);
    return f.slice(B, Z + 1).map((h, M) => ({ album: h, index: B + M }));
  }, [f, k, ot]);
  C.useEffect(() => {
    let B = !0;
    for (const { album: Z } of ee)
      !Z.image || Z.uri in R || W0(Z.image).then((h) => {
        B && lt((M) => Z.uri in M ? M : { ...M, [Z.uri]: h });
      });
    return () => {
      B = !1;
    };
  }, [ee, R]);
  const ne = C.useRef({ cover: 0, radius: 0 }), Kt = C.useCallback(() => {
    const Z = tt.current?.querySelector(".crate__item")?.offsetWidth ?? 0;
    ne.current = { cover: Z, radius: Z * qr };
  }, []), et = C.useCallback((B) => {
    ut.current = B;
    const Z = tt.current;
    if (!Z) return;
    Z.dataset.offset = B.toFixed(4);
    const { radius: h } = ne.current;
    if (h)
      for (const M of Z.children) {
        const q = M, V = Number(q.dataset.i);
        if (!Number.isFinite(V)) continue;
        const K = V - B, F = K * Dr, at = F * Math.PI / 180;
        q.style.transform = `translateX(${(Math.sin(at) * h).toFixed(2)}px) translateZ(${((Math.cos(at) - 1) * h).toFixed(2)}px) rotateY(${(90 + F).toFixed(3)}deg)`, q.style.zIndex = String(100 - Math.round(Math.abs(K)));
        const xt = Math.min(0.22, Math.abs(K) * 0.013).toFixed(3), Et = q.getElementsByClassName("crate__depth");
        for (const Xt of Et) Xt.style.opacity = xt;
      }
  }, []);
  C.useEffect(() => {
    Kt(), et(ut.current);
    const B = () => {
      Kt(), et(ut.current);
    };
    return window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, [Kt, et, I]), C.useEffect(() => {
    if (nt.current || I === 0) return;
    nt.current = !0;
    const B = E ?? Math.floor(I / 2);
    et(B), Y(B);
  }, [I, E, et]);
  const Gt = C.useRef(!1);
  C.useEffect(() => {
    const B = H.trim().length > 0;
    !B && !Gt.current || (Gt.current = B, it.current = 0, et(0), Y(0));
  }, [H, I, et]), C.useEffect(() => {
    let B = 0, Z = performance.now(), h = -1;
    const M = (q) => {
      const V = Math.min(0.05, (q - Z) / 1e3);
      Z = q;
      let K = ut.current;
      if (!Yt.current) {
        if (Math.abs(it.current) > Cp)
          K = ut.current + it.current * V, it.current *= Math.exp(-V / Up), (K < 0 || K > ot) && (K = Math.max(0, Math.min(ot, K)), it.current = 0);
        else if (I > 0) {
          it.current = 0;
          const at = Math.max(0, Math.min(ot, Math.round(ut.current))), xt = at - ut.current;
          K = Math.abs(xt) > 8e-4 ? ut.current + xt * (1 - Math.exp(-V / 0.16)) : at;
        }
      }
      et(K);
      const F = Math.round(ut.current);
      F !== h && (h !== -1 && navigator.vibrate?.(8), h = F, T(F), Y((at) => Math.abs(F - at) >= Or ? F : at)), B = requestAnimationFrame(M);
    };
    return B = requestAnimationFrame(M), () => cancelAnimationFrame(B);
  }, [I, ot, et, T]);
  const Dt = () => {
    const { cover: B } = ne.current;
    return B ? B * qr * (Dr * Math.PI / 180) : 1;
  }, kt = (B) => {
    const Z = B.clientX, h = ut.current, M = Dt();
    let q = Z, V = performance.now(), K = !1;
    Yt.current = !0, Ot.current = !1, it.current = 0;
    const F = (xt) => {
      const Et = xt.clientX - Z;
      if (!K && Math.abs(Et) < 4) return;
      K = !0, Ot.current = !0;
      let Xt = h - Et / M * H0;
      Xt < 0 ? Xt = Xt * 0.35 : Xt > ot && (Xt = ot + (Xt - ot) * 0.35), et(Xt);
      const ha = performance.now(), wa = (ha - V) / 1e3;
      if (wa > 8e-3) {
        const Kl = -((xt.clientX - q) / M * H0) / wa;
        it.current = Math.max(-rc, Math.min(rc, Kl)), q = xt.clientX, V = ha;
      }
    }, at = () => {
      Yt.current = !1, K ? window.setTimeout(() => Ot.current = !1, 0) : it.current = 0, window.removeEventListener("pointermove", F), window.removeEventListener("pointerup", at), window.removeEventListener("pointercancel", at);
    };
    window.addEventListener("pointermove", F), window.addEventListener("pointerup", at), window.addEventListener("pointercancel", at);
  }, z = C.useCallback(
    (B) => {
      it.current = 0;
      const Z = Math.max(0, Math.min(ot, B)), h = ut.current, M = performance.now(), q = (V) => {
        const K = Math.min(1, (V - M) / 420), F = 1 - Math.pow(1 - K, 3);
        et(h + (Z - h) * F), K < 1 && requestAnimationFrame(q);
      };
      requestAnimationFrame(q);
    },
    [ot, et]
  ), w = (B) => {
    const Z = Math.abs(B.deltaX) > Math.abs(B.deltaY) ? B.deltaX : B.deltaY;
    it.current = Math.max(-rc, Math.min(rc, it.current + Z * 5e-3));
  };
  C.useEffect(() => {
    const B = (Z) => {
      Z.key === "ArrowRight" ? z(Math.round(ut.current) + 1) : Z.key === "ArrowLeft" ? z(Math.round(ut.current) - 1) : Z.key === "Escape" && v();
    };
    return window.addEventListener("keydown", B), () => window.removeEventListener("keydown", B);
  }, [z, v]);
  const Q = (B, Z) => {
    if (Ot.current) return;
    const h = f[B];
    !h || $ || (G(!0), L(B), s(h, Z));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "library", children: [
    /* @__PURE__ */ o.jsxs("header", { className: "library__head", children: [
      /* @__PURE__ */ o.jsx("button", { className: "iconbtn iconbtn--small", onClick: v, "aria-label": "Retour à la platine", children: /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M14.6 5.4 8 12l6.6 6.6 1.6-1.6-5-5 5-5z", fill: "currentColor" }) }) }),
      /* @__PURE__ */ o.jsxs("label", { className: "library__search", children: [
        /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx(
          "path",
          {
            d: "M10.5 3a7.5 7.5 0 1 1-4.6 13.4l-3.2 3.2-1.4-1.4 3.2-3.2A7.5 7.5 0 0 1 10.5 3zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "search",
            value: H,
            placeholder: "Chercher un album, un artiste…",
            "aria-label": "Chercher dans Deezer",
            onChange: (B) => U(B.target.value)
          }
        ),
        H && /* @__PURE__ */ o.jsx("button", { type: "button", onClick: () => U(""), "aria-label": "Effacer la recherche", children: "×" })
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "library__count", children: r || y ? "recherche…" : `${I} album${I > 1 ? "s" : ""}` })
    ] }),
    d && /* @__PURE__ */ o.jsx("p", { className: "library__error", children: d }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "crate",
        ref: tt,
        onPointerDown: kt,
        onWheel: w,
        style: { "--arc": `${Dr}deg`, "--radius-k": qr },
        children: ee.map(({ album: B, index: Z }) => /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "crate__item",
            "data-i": Z,
            onClick: (h) => Q(Z, h.currentTarget),
            role: "button",
            tabIndex: 0,
            onKeyDown: (h) => h.key === "Enter" && Q(Z, h.currentTarget),
            children: [
              ["front", "back"].map((h) => /* @__PURE__ */ o.jsxs("div", { className: `crate__face crate__face--${h}`, children: [
                B.image ? /* @__PURE__ */ o.jsx("img", { className: "crate__art", src: B.image, alt: "", draggable: !1 }) : /* @__PURE__ */ o.jsx("div", { className: "crate__art crate__art--empty" }),
                /* @__PURE__ */ o.jsx("div", { className: "crate__shade" }),
                /* @__PURE__ */ o.jsx("div", { className: "crate__depth" })
              ] }, h)),
              /* @__PURE__ */ o.jsx("div", { className: "crate__spine", children: /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "crate__spineFace",
                  style: {
                    "--spine-a": (R[B.uri] ?? vl).b,
                    "--spine-b": (R[B.uri] ?? vl).deep
                  },
                  children: /* @__PURE__ */ o.jsxs(
                    "div",
                    {
                      className: "crate__label",
                      "data-ink": R[B.uri]?.isDark === !1 ? "dark" : "light",
                      children: [
                        /* @__PURE__ */ o.jsx("b", { children: B.name }),
                        /* @__PURE__ */ o.jsx("span", { children: B.artist })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ o.jsx("div", { className: "crate__opening" })
            ]
          },
          B.uri
        ))
      }
    )
  ] });
}
function Op({ lyrics: f, activeIndex: r, loading: d, onClose: s, onSeek: v }) {
  const E = C.useRef(null), T = C.useRef(null), H = C.useRef([]);
  C.useLayoutEffect(() => {
    const y = E.current, k = T.current;
    if (!y || !k) return;
    const Y = H.current[r] ?? H.current[0];
    if (!Y) return;
    const L = y.clientHeight / 2 - (Y.offsetTop + Y.offsetHeight / 2);
    k.style.transform = `translateY(${L}px)`;
  }, [r, f]), C.useEffect(() => {
    const y = (k) => k.key === "Escape" && s();
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [s]);
  const U = f.synced && f.lines.length > 0;
  return /* @__PURE__ */ o.jsxs("div", { className: "lyrics", onClick: s, children: [
    d && /* @__PURE__ */ o.jsx("p", { className: "lyrics__empty", children: "Recherche des paroles…" }),
    !d && f.instrumental && /* @__PURE__ */ o.jsx("p", { className: "lyrics__empty", children: "Morceau instrumental" }),
    !d && !f.instrumental && !U && !f.plain && /* @__PURE__ */ o.jsx("p", { className: "lyrics__empty", children: "Pas de paroles trouvées pour ce morceau" }),
    !d && !U && f.plain && /* @__PURE__ */ o.jsx("div", { className: "lyrics__scroll", ref: E, children: /* @__PURE__ */ o.jsx("div", { className: "lyrics__inner", ref: T, children: f.plain.split(`
`).map((y, k) => /* @__PURE__ */ o.jsx("p", { className: "lyrics__line", "data-active": "true", children: y || " " }, k)) }) }),
    !d && U && /* @__PURE__ */ o.jsx("div", { className: "lyrics__scroll", ref: E, children: /* @__PURE__ */ o.jsx("div", { className: "lyrics__inner", ref: T, children: f.lines.map((y, k) => /* @__PURE__ */ o.jsx(
      "p",
      {
        className: "lyrics__line",
        ref: (Y) => {
          H.current[k] = Y;
        },
        "data-active": k === r,
        "data-past": k < r,
        onClick: (Y) => {
          Y.stopPropagation(), v(y.time);
        },
        children: y.text || " "
      },
      k
    )) }) })
  ] });
}
const V0 = { service: "", entityId: "" };
function Dp(f) {
  return f.service.trim().includes(".");
}
const F0 = "mdvinyl.settings.v1", dc = {
  haUrl: typeof __DEV_URL__ == "string" ? __DEV_URL__ : "",
  token: typeof __DEV_TOKEN__ == "string" ? __DEV_TOKEN__ : "",
  entityId: typeof __DEV_ENTITY__ == "string" ? __DEV_ENTITY__ : "",
  vinyl: "tinted",
  background: "adaptive",
  playControl: "arm",
  counterRotateLabel: !1,
  rpm: 33.3333,
  vinylTint: "",
  labelText: "",
  lyrics: !0,
  idleMinutes: 5,
  onPlay: { ...V0 },
  onStop: { ...V0 }
};
function hc() {
  try {
    const f = localStorage.getItem(F0);
    return f ? { ...dc, ...JSON.parse(f) } : { ...dc };
  } catch {
    return { ...dc };
  }
}
function Hr(f) {
  try {
    localStorage.setItem(F0, JSON.stringify(f));
  } catch {
  }
}
function G0(f) {
  return f.token.trim().length > 0 && f.entityId.trim().length > 0;
}
function gc(f) {
  return (f.haUrl || window.location.origin).replace(/\/+$/, "");
}
let wn = 0;
async function qp(f) {
  try {
    const r = Date.now(), d = await fetch(`${gc(f)}/api/`, {
      headers: { Authorization: `Bearer ${f.token}` },
      cache: "no-store"
    }), s = Date.now(), v = d.headers.get("date");
    if (!v) return wn;
    const E = Date.parse(v);
    return Number.isNaN(E) || (wn = (r + s) / 2 - (E + 500)), wn;
  } catch {
    return wn;
  }
}
const Rp = { position: 0, duration: 0, progress: 0, playing: !1 };
function wp(f, r = Date.now()) {
  if (!f) return Rp;
  const d = f.attributes, s = Number(d.media_duration ?? 0) || 0, v = Number(d.media_position ?? 0) || 0, E = f.state === "playing";
  let T = v;
  if (E && d.media_position_updated_at) {
    const H = Date.parse(d.media_position_updated_at);
    if (!Number.isNaN(H)) {
      const U = r - wn - H;
      U > 0 && (T = v + U / 1e3);
    }
  }
  return s > 0 && (T = Math.min(T, s)), T = Math.max(0, T), {
    position: T,
    duration: s,
    progress: s > 0 ? T / s : 0,
    playing: E
  };
}
function mc(f) {
  (!Number.isFinite(f) || f < 0) && (f = 0);
  const r = Math.floor(f), d = Math.floor(r / 3600), s = Math.floor(r % 3600 / 60), v = r % 60;
  return d > 0 ? `${d}:${String(s).padStart(2, "0")}:${String(v).padStart(2, "0")}` : `${s}:${String(v).padStart(2, "0")}`;
}
function Bp({ items: f, loading: r, error: d, current: s, pending: v, onPick: E, onClose: T }) {
  return /* @__PURE__ */ o.jsxs("aside", { className: "queue sidepanel", role: "dialog", "aria-label": "File d'attente", children: [
    /* @__PURE__ */ o.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: "À suivre" }),
      /* @__PURE__ */ o.jsx("button", { className: "iconbtn iconbtn--small", onClick: T, "aria-label": "Fermer la file", children: /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx(
        "path",
        {
          d: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z",
          fill: "currentColor"
        }
      ) }) })
    ] }),
    d && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__error", children: d }),
    r && f.length === 0 && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__empty", children: "Lecture de la file…" }),
    !r && !d && f.length === 0 && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__empty", children: "La file est vide." }),
    /* @__PURE__ */ o.jsx("ol", { className: "sidepanel__list", children: f.map((H, U) => {
      const k = v !== null && H.id === v ? "now" : v !== null ? "next" : U === s ? "now" : s >= 0 && U < s ? "past" : "next";
      return /* @__PURE__ */ o.jsx("li", { className: "queue__item", "data-state": k, children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "queue__pick",
          onClick: () => E(H),
          disabled: !H.uri,
          title: H.uri ? `Aller à « ${H.name} »` : "Ce morceau n'est pas adressable",
          children: [
            /* @__PURE__ */ o.jsx(
              "span",
              {
                className: "queue__art",
                style: { backgroundImage: H.image ? `url("${H.image}")` : void 0 },
                children: /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M8 5.2v13.6L19 12z", fill: "currentColor" }) })
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "sidepanel__text", children: [
              /* @__PURE__ */ o.jsx("b", { children: H.name }),
              /* @__PURE__ */ o.jsx("span", { children: H.artist })
            ] }),
            /* @__PURE__ */ o.jsx("span", { className: "queue__time", children: H.duration > 0 ? mc(H.duration) : "" })
          ]
        }
      ) }, H.id);
    }) })
  ] });
}
function kp({ onWake: f }) {
  const [r, d] = C.useState(() => /* @__PURE__ */ new Date());
  C.useEffect(() => {
    let E;
    const T = () => {
      const H = /* @__PURE__ */ new Date();
      d(H), E = setTimeout(T, 6e4 - (H.getSeconds() * 1e3 + H.getMilliseconds()));
    };
    return T(), () => clearTimeout(E);
  }, []);
  const s = r.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }), v = r.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  return /* @__PURE__ */ o.jsxs("div", { className: "rest", onPointerDown: f, role: "button", tabIndex: 0, "aria-label": "Réveiller", children: [
    /* @__PURE__ */ o.jsx("div", { className: "rest__clock", children: s }),
    /* @__PURE__ */ o.jsx("div", { className: "rest__date", children: v }),
    /* @__PURE__ */ o.jsx("div", { className: "rest__hint", children: "Toucher pour revenir" })
  ] });
}
const Yp = {
  playing: "en lecture",
  paused: "en pause",
  idle: "au repos",
  off: "éteinte",
  standby: "en veille",
  unavailable: "indisponible"
};
function Hp({
  players: f,
  current: r,
  loading: d,
  error: s,
  onListen: v,
  onTransfer: E,
  onClose: T
}) {
  const H = f.filter((k) => k.attributes.mass_player_type !== void 0), U = f.filter((k) => k.attributes.mass_player_type === void 0), y = [
    {
      titre: "Pilotées par Music Assistant",
      note: "Celles qui savent recevoir un disque et un transfert de file.",
      membres: H
    },
    {
      titre: "Autres lecteurs",
      note: "Vus par Home Assistant, mais hors de portée de Music Assistant.",
      membres: U
    }
  ];
  return /* @__PURE__ */ o.jsxs("aside", { className: "speakers sidepanel", role: "dialog", "aria-label": "Enceintes", children: [
    /* @__PURE__ */ o.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: "Enceintes" }),
      /* @__PURE__ */ o.jsx("button", { className: "iconbtn iconbtn--small", onClick: T, "aria-label": "Fermer les enceintes", children: /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx(
        "path",
        {
          d: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z",
          fill: "currentColor"
        }
      ) }) })
    ] }),
    s && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__error", children: s }),
    d && f.length === 0 && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__empty", children: "Recherche des enceintes…" }),
    /* @__PURE__ */ o.jsx("ul", { className: "sidepanel__list", children: y.map(({ titre: k, note: Y, membres: L }) => /* @__PURE__ */ o.jsxs(C.Fragment, { children: [
      L.length > 0 && /* @__PURE__ */ o.jsxs("li", { className: "speakers__group", children: [
        /* @__PURE__ */ o.jsx("h3", { children: k }),
        /* @__PURE__ */ o.jsx("p", { children: Y })
      ] }),
      L.map(($) => {
        const G = $.entity_id === r, R = $.state === "unavailable";
        return /* @__PURE__ */ o.jsxs(
          "li",
          {
            className: "speakers__item",
            "data-here": G,
            "data-entity": $.entity_id,
            children: [
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: "speakers__pick",
                  onClick: () => v($.entity_id),
                  disabled: G || R,
                  title: G ? "C'est l'enceinte affichée" : "Afficher cette enceinte",
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "speakers__dot", "data-on": $.state === "playing" }),
                    /* @__PURE__ */ o.jsxs("span", { className: "sidepanel__text", children: [
                      /* @__PURE__ */ o.jsx("b", { children: $.attributes.friendly_name ?? $.entity_id }),
                      /* @__PURE__ */ o.jsxs("span", { children: [
                        G ? "affichée ici" : Yp[$.state] ?? $.state,
                        $.attributes.media_title ? ` · ${$.attributes.media_title}` : ""
                      ] })
                    ] })
                  ]
                }
              ),
              !G && !R && $.attributes.mass_player_type !== void 0 && /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: "speakers__move",
                  onClick: () => E($.entity_id),
                  title: "Reprendre la lecture dans cette pièce",
                  children: [
                    /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx(
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
          $.entity_id
        );
      })
    ] }, k)) })
  ] });
}
const Hi = 1e3, Vp = 15e3, Gp = 25e3, Lp = 1e4;
class Zp {
  settings;
  ws = null;
  nextId = 1;
  pending = /* @__PURE__ */ new Map();
  entityIds = [];
  subscriptionId = null;
  states = /* @__PURE__ */ new Map();
  closedByUs = !1;
  retryDelay = Hi;
  reconnectTimer = null;
  pingTimer = null;
  pongTimer = null;
  onState = () => {
  };
  onStatus = () => {
  };
  constructor(r) {
    this.settings = r;
  }
  // ---------------------------------------------------------------- cycle de vie
  connect(r) {
    this.entityIds = r, this.closedByUs = !1, this.open(), document.addEventListener("visibilitychange", this.handleVisibility), window.addEventListener("online", this.handleOnline);
  }
  close() {
    this.closedByUs = !0, document.removeEventListener("visibilitychange", this.handleVisibility), window.removeEventListener("online", this.handleOnline), this.clearTimers(), this.ws?.close(), this.ws = null, this.pending.clear(), this.subscriptionId = null;
  }
  handleVisibility = () => {
    document.visibilityState === "visible" && this.ws?.readyState !== WebSocket.OPEN && (this.retryDelay = Hi, this.open());
  };
  handleOnline = () => {
    this.retryDelay = Hi, this.open();
  };
  open() {
    if (this.closedByUs || this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING))
      return;
    this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = null);
    const r = gc(this.settings).replace(/^http/, "ws") + "/api/websocket";
    this.onStatus(this.retryDelay === Hi ? "connecting" : "reconnecting");
    let d;
    try {
      d = new WebSocket(r);
    } catch (s) {
      this.scheduleReconnect(String(s));
      return;
    }
    this.ws = d, d.onmessage = (s) => this.handleMessage(s), d.onerror = () => {
    }, d.onclose = () => {
      this.clearTimers(), this.subscriptionId = null;
      for (const s of this.pending.values()) s.reject(new Error("connexion fermée"));
      this.pending.clear(), this.closedByUs || this.scheduleReconnect();
    };
  }
  scheduleReconnect(r) {
    this.closedByUs || this.reconnectTimer || (this.onStatus("reconnecting", r), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.open();
    }, this.retryDelay), this.retryDelay = Math.min(this.retryDelay * 2, Vp));
  }
  clearTimers() {
    this.pingTimer && clearInterval(this.pingTimer), this.pongTimer && clearTimeout(this.pongTimer), this.pingTimer = null, this.pongTimer = null;
  }
  // ---------------------------------------------------------------- protocole
  send(r) {
    this.ws?.send(JSON.stringify(r));
  }
  request(r) {
    if (this.ws?.readyState !== WebSocket.OPEN)
      return Promise.reject(new Error("non connecté"));
    const d = this.nextId++;
    return new Promise((s, v) => {
      this.pending.set(d, { resolve: s, reject: v }), this.send({ ...r, id: d });
    });
  }
  handleMessage(r) {
    let d;
    try {
      d = JSON.parse(r.data);
    } catch {
      return;
    }
    switch (d.type) {
      case "auth_required":
        this.send({ type: "auth", access_token: this.settings.token });
        return;
      case "auth_invalid":
        this.closedByUs = !0, this.onStatus("unauthorized", d.message), this.ws?.close();
        return;
      case "auth_ok":
        this.retryDelay = Hi, this.onStatus("connected"), this.subscribe(), this.startHeartbeat();
        return;
      case "pong":
        this.pongTimer && clearTimeout(this.pongTimer), this.pongTimer = null;
        return;
      case "event":
        d.id === this.subscriptionId && this.applyEntitiesEvent(d.event);
        return;
      case "result": {
        const s = this.pending.get(d.id);
        if (!s) return;
        this.pending.delete(d.id), d.success ? s.resolve(d.result) : s.reject(new Error(d.error?.message ?? "erreur Home Assistant"));
        return;
      }
    }
  }
  startHeartbeat() {
    this.clearTimers(), this.pingTimer = setInterval(() => {
      this.ws?.readyState === WebSocket.OPEN && (this.send({ id: this.nextId++, type: "ping" }), this.pongTimer || (this.pongTimer = setTimeout(() => {
        this.pongTimer = null, this.ws?.close();
      }, Lp)));
    }, Gp);
  }
  async subscribe() {
    if (this.entityIds.length === 0) return;
    const r = this.nextId++;
    this.subscriptionId = r;
    try {
      await new Promise((d, s) => {
        this.pending.set(r, { resolve: () => d(), reject: s }), this.send({ id: r, type: "subscribe_entities", entity_ids: this.entityIds });
      });
    } catch (d) {
      this.subscriptionId = null, this.onStatus("error", String(d));
    }
  }
  /** Reconstitue les états complets à partir du format compressé de HA. */
  applyEntitiesEvent(r) {
    if (r.a)
      for (const [d, s] of Object.entries(r.a)) {
        const v = {
          entity_id: d,
          state: s.s ?? "unknown",
          attributes: s.a ?? {},
          last_changed: s.lc ? new Date(s.lc * 1e3).toISOString() : void 0,
          last_updated: s.lu ? new Date(s.lu * 1e3).toISOString() : void 0
        };
        this.states.set(d, v), this.onState(v);
      }
    if (r.c)
      for (const [d, s] of Object.entries(r.c)) {
        const v = this.states.get(d);
        if (!v) continue;
        const E = {
          ...v,
          attributes: { ...v.attributes }
        }, T = s["+"];
        T && (T.s !== void 0 && (E.state = T.s), T.lc !== void 0 && (E.last_changed = new Date(T.lc * 1e3).toISOString()), T.lu !== void 0 && (E.last_updated = new Date(T.lu * 1e3).toISOString()), T.a && Object.assign(E.attributes, T.a));
        const H = s["-"];
        if (H?.a) for (const U of H.a) delete E.attributes[U];
        this.states.set(d, E), this.onState(E);
      }
    if (r.r)
      for (const d of r.r) this.states.delete(d);
  }
  // ---------------------------------------------------------------- commandes
  /**
   * Appelle un service Home Assistant. Passe par le WebSocket déjà ouvert :
   * pas de poignée de main TLS ni de latence d'établissement de connexion,
   * la commande part immédiatement.
   */
  callService(r, d, s = {}, v) {
    return this.request({
      type: "call_service",
      domain: r,
      service: d,
      service_data: s,
      ...v ? { target: { entity_id: v } } : {}
    });
  }
  /**
   * Appelle une action qui RENVOIE des données (music_assistant.get_library,
   * .search, .get_queue). Home Assistant range le résultat sous `response`.
   */
  async callServiceWithResponse(r, d, s = {}, v) {
    const E = await this.request({
      type: "call_service",
      domain: r,
      service: d,
      service_data: s,
      // Certaines actions se ciblent par entité (get_queue), d'autres par entrée
      // de configuration (search, get_library) : les deux doivent être possibles.
      ...v ? { target: { entity_id: v } } : {},
      return_response: !0
    });
    return E?.response ?? E;
  }
  /**
   * Identifiant d'entrée de configuration d'une intégration.
   * Les actions de bibliothèque de Music Assistant se ciblent par là, et cette
   * information n'existe que sur le WebSocket — le REST ne l'expose pas.
   */
  async configEntry(r) {
    return (await this.request({
      type: "config_entries/get",
      domain: r
    }))?.[0]?.entry_id ?? null;
  }
}
function I0(f, r) {
  return new Promise((d, s) => {
    const v = gc(f).replace(/^http/, "ws") + "/api/websocket";
    let E;
    try {
      E = new WebSocket(v);
    } catch {
      s(new Error("Adresse invalide."));
      return;
    }
    const T = setTimeout(() => {
      E.close(), s(new Error("Home Assistant ne répond pas à cette adresse."));
    }, 12e3);
    let H = !1;
    const U = (y, k) => {
      H || (H = !0, clearTimeout(T), E.close(), y ? s(y) : d(k));
    };
    E.onerror = () => U(new Error("Home Assistant injoignable à cette adresse.")), E.onclose = () => U(new Error("Connexion interrompue.")), E.onmessage = (y) => {
      const k = JSON.parse(String(y.data));
      if (k.type === "auth_required") {
        E.send(JSON.stringify({ type: "auth", access_token: f.token }));
        return;
      }
      if (k.type === "auth_invalid") {
        U(new Error("Jeton refusé par Home Assistant."));
        return;
      }
      if (k.type === "auth_ok") {
        E.send(JSON.stringify({ ...r, id: 1 }));
        return;
      }
      k.type === "result" && (k.success ? U(null, k.result) : U(new Error(k.error?.message ?? "Commande refusée.")));
    };
  });
}
async function Kp(f) {
  try {
    const r = await I0(f, {
      type: "get_config"
    });
    return { ok: !0, message: `Connecté à ${r?.location_name ?? "Home Assistant"}${r?.version ? ` (${r.version})` : ""}` };
  } catch (r) {
    return { ok: !1, message: r instanceof Error ? r.message : String(r) };
  }
}
function Xp(f) {
  return f.filter((r) => r.entity_id.startsWith("media_player.")).sort((r, d) => {
    const s = r.attributes.mass_player_type ? 0 : 1, v = d.attributes.mass_player_type ? 0 : 1;
    return s !== v ? s - v : (r.attributes.friendly_name ?? r.entity_id).localeCompare(
      d.attributes.friendly_name ?? d.entity_id
    );
  });
}
async function P0(f) {
  const r = await I0(f, { type: "get_states" });
  return Xp(r);
}
function Jp(f, r) {
  return r ? r.startsWith("/") ? gc(f) + r : r : null;
}
const Qp = [
  ["clear", "Blanc"],
  ["glass", "Transparent"],
  ["black", "Noir"],
  ["tinted", "Teinté"],
  ["marble", "Marbré"],
  ["splatter", "Éclaboussé"]
], Wp = ["marble", "splatter", "tinted"], Fp = [
  ["adaptive", "Adaptatif"],
  ["subtle", "Discret"],
  ["neutral", "Gris"],
  ["dark", "Sombre"]
];
function Ip({
  settings: f,
  onSave: r,
  onCancel: d,
  requireConnection: s,
  embedded: v = !1,
  knownPlayers: E = null
}) {
  const [T, H] = C.useState(f), [U, y] = C.useState({ state: "idle", message: "" }), [k, Y] = C.useState(E), L = (R, lt) => H((tt) => ({ ...tt, [R]: lt }));
  C.useEffect(() => {
    f.token && $(f);
  }, []);
  async function $(R) {
    y({ state: "testing", message: "Connexion…" });
    const lt = await Kp(R);
    if (!lt.ok) {
      y({ state: "bad", message: lt.message }), Y(null);
      return;
    }
    try {
      const tt = await P0(R);
      Y(tt);
      const ut = tt.filter((nt) => nt.attributes.mass_player_type).length;
      if (y({
        state: "ok",
        message: tt.length === 0 ? "Connecté, mais aucune enceinte trouvée." : `Connecté. ${tt.length} enceinte${tt.length > 1 ? "s" : ""}` + (ut > 0 ? `, dont ${ut} via Music Assistant.` : ".")
      }), !R.entityId && tt.length > 0) {
        const nt = tt.find((it) => it.attributes.mass_player_type) ?? tt[0];
        nt && L("entityId", nt.entity_id);
      }
    } catch (tt) {
      y({ state: "bad", message: String(tt) });
    }
  }
  const G = v ? T.entityId.trim().length > 0 : !s || T.token.trim().length > 0 && T.entityId.trim().length > 0;
  return /* @__PURE__ */ o.jsx("div", { className: "setup", children: /* @__PURE__ */ o.jsxs("div", { className: "panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "panel__head", children: [
      /* @__PURE__ */ o.jsx("h1", { children: d ? "Réglages" : "Bienvenue" }),
      !d && /* @__PURE__ */ o.jsx("span", { style: { color: "var(--ink-faint)", fontSize: 13 }, children: "1 fois par appareil" })
    ] }),
    !d && v && /* @__PURE__ */ o.jsx("p", { className: "note", children: "Choisis l'enceinte sur laquelle poser les disques. Tu pourras en changer à tout moment depuis le nom de la pièce, en haut à gauche." }),
    !d && !v && /* @__PURE__ */ o.jsxs("p", { className: "note", children: [
      "Cette platine pilote une enceinte de ton Home Assistant. Il lui faut un jeton d'accès : dans Home Assistant, clique sur ton nom en bas à gauche, onglet ",
      /* @__PURE__ */ o.jsx("b", { children: "Sécurité" }),
      ", puis tout en bas ",
      /* @__PURE__ */ o.jsx("b", { children: "Jetons d'accès longue durée" }),
      "."
    ] }),
    !v && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("h2", { children: "Connexion" }),
      /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ o.jsx("label", { htmlFor: "url", children: "Adresse de Home Assistant" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            id: "url",
            type: "text",
            placeholder: window.location.origin,
            value: T.haUrl,
            onChange: (R) => L("haUrl", R.target.value.trim()),
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ o.jsx("small", { children: "À laisser vide si l'app est servie par Home Assistant lui-même — c'est le cas depuis /local/. Sinon : http://192.168.x.x:8123" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ o.jsx("label", { htmlFor: "token", children: "Jeton d'accès longue durée" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            id: "token",
            type: "password",
            value: T.token,
            onChange: (R) => L("token", R.target.value.trim()),
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ o.jsx("small", { children: "Reste sur cet appareil, dans le stockage local du navigateur." })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "actions", style: { justifyContent: "flex-start" }, children: /* @__PURE__ */ o.jsx("button", { className: "btn", onClick: () => {
        $(T);
      }, disabled: !T.token, children: "Tester la connexion" }) }),
      U.state !== "idle" && /* @__PURE__ */ o.jsx(
        "p",
        {
          className: U.state === "bad" ? "note note--bad" : U.state === "ok" ? "note note--good" : "note",
          children: U.message
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { htmlFor: "entity", children: "Enceinte" }),
      /* @__PURE__ */ o.jsxs("select", { id: "entity", value: T.entityId, onChange: (R) => L("entityId", R.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "", children: "— choisir —" }),
        k?.map((R) => /* @__PURE__ */ o.jsxs("option", { value: R.entity_id, children: [
          R.attributes.mass_player_type ? "♪ " : "",
          R.attributes.friendly_name ?? R.entity_id
        ] }, R.entity_id)),
        T.entityId && !k?.some((R) => R.entity_id === T.entityId) && /* @__PURE__ */ o.jsx("option", { value: T.entityId, children: T.entityId })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("h2", { children: "Apparence" }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { children: "Matière du disque" }),
      /* @__PURE__ */ o.jsx("div", { className: "segmented", children: Qp.map(([R, lt]) => /* @__PURE__ */ o.jsx(
        "button",
        {
          "aria-pressed": T.vinyl === R,
          onClick: () => L("vinyl", R),
          children: lt
        },
        R
      )) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { children: "Fond" }),
      /* @__PURE__ */ o.jsx("div", { className: "segmented", children: Fp.map(([R, lt]) => /* @__PURE__ */ o.jsx(
        "button",
        {
          "aria-pressed": T.background === R,
          onClick: () => L("background", R),
          children: lt
        },
        R
      )) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { children: "Lancer et arrêter la lecture" }),
      /* @__PURE__ */ o.jsxs("div", { className: "segmented", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "aria-pressed": T.playControl === "arm",
            onClick: () => L("playControl", "arm"),
            children: "En posant l'aiguille"
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "aria-pressed": T.playControl === "button",
            onClick: () => L("playControl", "button"),
            children: "Avec un bouton"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("small", { children: "Avec l'aiguille : on attrape le bras et on le pose sur le disque pour lancer, on le retire pour arrêter. Aucun bouton lecture à l'écran. Dans les deux cas, un balayage gauche/droite change de morceau." })
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "switch", children: [
      /* @__PURE__ */ o.jsxs("span", { children: [
        "Garder le titre lisible",
        /* @__PURE__ */ o.jsx("br", {}),
        /* @__PURE__ */ o.jsx("small", { style: { color: "var(--ink-faint)" }, children: "L'étiquette cesse de tourner avec le disque" })
      ] }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          checked: T.counterRotateLabel,
          onChange: (R) => L("counterRotateLabel", R.target.checked)
        }
      )
    ] }),
    Wp.includes(T.vinyl) && /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { htmlFor: "tint", children: "Couleur du disque" }),
      /* @__PURE__ */ o.jsxs("div", { className: "tint", children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            id: "tint",
            type: "color",
            value: T.vinylTint || "#8a5a3c",
            onChange: (R) => L("vinylTint", R.target.value)
          }
        ),
        /* @__PURE__ */ o.jsx("button", { className: "btn", onClick: () => L("vinylTint", ""), children: "Suivre la pochette" })
      ] }),
      /* @__PURE__ */ o.jsx("small", { children: T.vinylTint ? "Couleur fixe, quel que soit l'album." : "La couleur du disque suit la dominante de la pochette en cours." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { htmlFor: "label-text", children: "Texte de l'étiquette" }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: "label-text",
          type: "text",
          value: T.labelText,
          placeholder: "Le titre du morceau",
          maxLength: 30,
          onChange: (R) => L("labelText", R.target.value)
        }
      ),
      /* @__PURE__ */ o.jsx("small", { children: "Laissé vide, l'étiquette affiche le morceau en cours. Rempli, elle garde ce texte — comme une pastille de label pressée une fois pour toutes." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { htmlFor: "rpm", children: "Vitesse de rotation" }),
      /* @__PURE__ */ o.jsxs("select", { id: "rpm", value: String(T.rpm), onChange: (R) => L("rpm", Number(R.target.value)), children: [
        /* @__PURE__ */ o.jsx("option", { value: "33.3333", children: "33⅓ tours — album" }),
        /* @__PURE__ */ o.jsx("option", { value: "45", children: "45 tours — single" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("h2", { children: "Comportement" }),
    /* @__PURE__ */ o.jsxs("label", { className: "switch", children: [
      /* @__PURE__ */ o.jsx("span", { children: "Paroles synchronisées" }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          checked: T.lyrics,
          onChange: (R) => L("lyrics", R.target.checked)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { htmlFor: "idle", children: "Écran de repos" }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: "idle",
          value: String(T.idleMinutes),
          onChange: (R) => L("idleMinutes", Number(R.target.value)),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "0", children: "Jamais" }),
            /* @__PURE__ */ o.jsx("option", { value: "2", children: "Après 2 minutes sans musique" }),
            /* @__PURE__ */ o.jsx("option", { value: "5", children: "Après 5 minutes sans musique" }),
            /* @__PURE__ */ o.jsx("option", { value: "15", children: "Après 15 minutes sans musique" }),
            /* @__PURE__ */ o.jsx("option", { value: "30", children: "Après 30 minutes sans musique" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "actions", children: [
      d && /* @__PURE__ */ o.jsx("button", { className: "btn", onClick: d, children: "Annuler" }),
      d && /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "btn",
          onClick: () => H({
            ...dc,
            haUrl: T.haUrl,
            token: T.token,
            entityId: T.entityId
          }),
          children: "Réinitialiser l'apparence"
        }
      ),
      /* @__PURE__ */ o.jsx("button", { className: "btn btn--primary", disabled: !G, onClick: () => r(T), children: "Enregistrer" })
    ] })
  ] }) });
}
const pe = 100, fc = 86;
function oc(f, r, d) {
  const s = r * Math.PI / 180, v = f * Math.cos(s), E = f * Math.sin(s);
  return `M ${pe - v},${pe - E} A ${f},${f} 0 0,${d} ${pe + v},${pe + E}`;
}
const Rr = typeof document < "u" ? document.createElement("canvas").getContext("2d") : null, Vr = /* @__PURE__ */ new Map();
function Pp(f, r) {
  const d = `${r}|${f}`, s = Vr.get(d);
  if (s !== void 0) return s;
  if (!Rr) return 0.55 * f.length;
  Rr.font = `${r} 100px Inter, sans-serif`;
  const v = Rr.measureText(f).width / 100;
  return Vr.set(d, v), v;
}
function L0(f, r, d, s, v) {
  if (!f) return d;
  const E = Pp(f, v);
  return E <= 0 ? d : Math.max(s, Math.min(d, r / E));
}
function Rn(f, r) {
  return f.length > r ? `${f.slice(0, r - 1).trimEnd()}…` : f;
}
function _p(f) {
  let r = 2166136261;
  for (let s = 0; s < f.length; s++)
    r ^= f.charCodeAt(s), r = Math.imul(r, 16777619);
  const d = [];
  for (let s = 0; s < 20; s++)
    r = Math.imul(r ^ r >>> 15, 2246822507), d.push((r >>> 8 & 3) === 0 ? 1.3 : 0.6);
  return d;
}
function $p({ title: f, artist: r, album: d, footer: s, mark: v }) {
  const [, E] = C.useState(!1);
  C.useEffect(() => {
    let L = !0;
    return document.fonts?.ready.then(() => {
      L && (Vr.clear(), E(!0));
    }), () => {
      L = !1;
    };
  }, []);
  const T = Rn(f || "—", 30), H = Rn(r || "", 30), U = L0(T, 126, 30, 9, 800), y = L0(H, 112, 18, 7.5, 650), k = _p(`${f}${r}`);
  let Y = 0;
  return /* @__PURE__ */ o.jsxs("svg", { className: "label__svg", viewBox: "0 0 200 200", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsxs("defs", { children: [
      /* @__PURE__ */ o.jsx("path", { id: "ring-top", d: oc(fc, 0, 1), fill: "none" }),
      /* @__PURE__ */ o.jsx("path", { id: "ring-bottom", d: oc(fc, 0, 0), fill: "none" }),
      /* @__PURE__ */ o.jsx("path", { id: "ring-left", d: oc(fc, 90, 0), fill: "none" }),
      /* @__PURE__ */ o.jsx("path", { id: "ring-right", d: oc(fc, 90, 1), fill: "none" })
    ] }),
    /* @__PURE__ */ o.jsx("circle", { cx: pe, cy: pe, r: "94", fill: "none", stroke: "rgba(0,0,0,0.2)", strokeWidth: "0.7" }),
    /* @__PURE__ */ o.jsxs("g", { className: "label__micro", fill: "rgba(20,18,16,0.62)", fontSize: "7", textAnchor: "middle", children: [
      /* @__PURE__ */ o.jsx("text", { children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-top", startOffset: "50%", children: Rn(d || "", 42) }) }),
      /* @__PURE__ */ o.jsx("text", { children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-bottom", startOffset: "50%", children: Rn(s, 46) }) }),
      /* @__PURE__ */ o.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-left", startOffset: "50%", children: Rn(r || "", 34) }) }),
      /* @__PURE__ */ o.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-right", startOffset: "50%", children: Rn(v, 34) }) })
    ] }),
    /* @__PURE__ */ o.jsx(
      "text",
      {
        className: "label__title",
        x: pe,
        y: pe - 26,
        fontSize: U,
        textAnchor: "middle",
        fill: "#131211",
        children: T
      }
    ),
    /* @__PURE__ */ o.jsx("circle", { cx: pe, cy: pe, r: "15", fill: "none", stroke: "rgba(0,0,0,0.06)", strokeWidth: "1.2" }),
    /* @__PURE__ */ o.jsx("circle", { cx: pe, cy: pe, r: "4.6", fill: "#4a4b4e" }),
    /* @__PURE__ */ o.jsx("circle", { cx: pe, cy: pe, r: "4.6", fill: "none", stroke: "rgba(0,0,0,0.35)", strokeWidth: "0.9" }),
    /* @__PURE__ */ o.jsx(
      "text",
      {
        className: "label__artist",
        x: pe,
        y: pe + 34,
        fontSize: y,
        textAnchor: "middle",
        fill: "rgba(19,18,17,0.82)",
        children: H
      }
    ),
    /* @__PURE__ */ o.jsx("g", { transform: "rotate(38 100 100) translate(93 22)", opacity: "0.6", children: k.map((L, $) => {
      const G = Y;
      return Y += L + 0.55, /* @__PURE__ */ o.jsx("rect", { x: G, y: "0", width: L, height: "7.5", fill: "#131211" }, $);
    }) })
  ] });
}
const gl = 1.19, Kr = 1.39, yc = 141.6, vc = 1, _0 = 0.78, bc = 180 / Math.PI, kn = Kr * (1312.74 / 1372), $0 = 5.545;
function th(f) {
  return f < 0 ? 0 : f > 1 ? 1 : f;
}
function eh(f) {
  const r = (gl * gl + kn * kn - f * f) / (2 * gl * kn);
  return Math.acos(Math.min(1, Math.max(-1, r))) * bc + $0;
}
function t1(f) {
  const r = (f - $0) / bc, d = gl * gl + kn * kn - 2 * gl * kn * Math.cos(r);
  return Math.sqrt(Math.max(0, d));
}
function Xr(f) {
  const r = vc + (_0 - vc) * th(f);
  return yc - eh(r);
}
const Gr = yc - eh(1.36);
function e1(f) {
  const r = yc - f, d = t1(Math.max(0, r));
  return th((d - vc) / (_0 - vc));
}
const Z0 = (yc - 180) / bc, K0 = {
  x: gl * Math.cos(Z0),
  y: gl * Math.sin(Z0)
};
function a1(f, r) {
  return Math.atan2(r - K0.y, f - K0.x) * bc;
}
const Jr = Kr / 1372, jt = (f) => f * Jr, We = (f) => (f - 351.5) * Jr, Bn = (f) => (f - 168) * Jr, l1 = 30, wr = Bn(1340);
function n1({ wrapRef: f, armRef: r, onGrab: d }) {
  return /* @__PURE__ */ o.jsx("div", { className: "tonearm", ref: f, children: /* @__PURE__ */ o.jsxs("div", { className: "tonearm__arm", ref: r, children: [
    /* @__PURE__ */ o.jsxs(
      "svg",
      {
        className: "tonearm__svg",
        viewBox: "-0.42 -0.40 2.17 0.82",
        "aria-hidden": "true",
        preserveAspectRatio: "xMidYMid meet",
        children: [
          /* @__PURE__ */ o.jsxs("defs", { children: [
            /* @__PURE__ */ o.jsxs("linearGradient", { id: "tube", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ o.jsx("stop", { offset: "0%", stopColor: "#6e737b" }),
              /* @__PURE__ */ o.jsx("stop", { offset: "14%", stopColor: "#fbfcfd" }),
              /* @__PURE__ */ o.jsx("stop", { offset: "30%", stopColor: "#d3d8de" }),
              /* @__PURE__ */ o.jsx("stop", { offset: "56%", stopColor: "#9aa0a8" }),
              /* @__PURE__ */ o.jsx("stop", { offset: "82%", stopColor: "#5f646b" }),
              /* @__PURE__ */ o.jsx("stop", { offset: "100%", stopColor: "#a8adb5" })
            ] }),
            /* @__PURE__ */ o.jsxs(
              "linearGradient",
              {
                id: "shell",
                gradientUnits: "userSpaceOnUse",
                x1: "0",
                y1: We(150),
                x2: "0",
                y2: We(400),
                children: [
                  /* @__PURE__ */ o.jsx("stop", { offset: "0%", stopColor: "#454951" }),
                  /* @__PURE__ */ o.jsx("stop", { offset: "38%", stopColor: "#2e3138" }),
                  /* @__PURE__ */ o.jsx("stop", { offset: "72%", stopColor: "#1d1f24" }),
                  /* @__PURE__ */ o.jsx("stop", { offset: "100%", stopColor: "#101115" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "linearGradient",
              {
                id: "head",
                gradientUnits: "userSpaceOnUse",
                x1: "0",
                y1: We(230),
                x2: "0",
                y2: We(430),
                children: [
                  /* @__PURE__ */ o.jsx("stop", { offset: "0%", stopColor: "#41454e" }),
                  /* @__PURE__ */ o.jsx("stop", { offset: "45%", stopColor: "#26282e" }),
                  /* @__PURE__ */ o.jsx("stop", { offset: "100%", stopColor: "#121317" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: Bn(30),
              y: We(176),
              width: jt(70),
              height: jt(120),
              rx: jt(16),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: Bn(105),
              y: We(160),
              width: jt(127),
              height: jt(232),
              rx: jt(26),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ o.jsx("rect", { x: Bn(232), y: We(324), width: jt(66), height: jt(56), rx: jt(14), fill: "url(#shell)" }),
          /* @__PURE__ */ o.jsx("rect", { x: Bn(290), y: We(328), width: jt(985), height: jt(48), rx: jt(24), fill: "url(#tube)" }),
          /* @__PURE__ */ o.jsx("rect", { x: Bn(1272), y: We(316), width: jt(70), height: jt(72), rx: jt(18), fill: "url(#shell)" }),
          /* @__PURE__ */ o.jsxs("g", { transform: `rotate(${l1} ${wr} 0)`, children: [
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: wr - jt(14),
                y: We(291),
                width: jt(214),
                height: jt(121),
                rx: jt(30),
                fill: "url(#head)"
              }
            ),
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: wr + jt(120),
                y: We(345),
                width: jt(10),
                height: jt(34),
                rx: jt(5),
                fill: "#6a6f78",
                opacity: "0.75"
              }
            ),
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: Kr - jt(26),
                y: We(368),
                width: jt(12),
                height: jt(52),
                rx: jt(6),
                fill: "#0e0f12"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "tonearm__grip", onPointerDown: d })
  ] }) });
}
const X0 = Xr(0), i1 = Xr(1);
function u1({
  title: f,
  artist: r,
  album: d,
  footer: s,
  mark: v,
  coverUrl: E,
  settings: T,
  sleeveFront: H,
  onToggleSleeve: U,
  onTogglePlay: y,
  armOverride: k,
  onSeekProgress: Y,
  onPlay: L,
  onPause: $,
  onNext: G,
  onPrevious: R,
  seekable: lt,
  spinRef: tt,
  armRef: ut,
  swap: nt
}) {
  const it = C.useRef(null), Yt = C.useRef(null), Ot = C.useRef(!1), I = C.useRef(!1), ot = T.playControl === "arm", ee = (et) => {
    const Gt = it.current;
    if (!Gt) return;
    et.preventDefault(), et.stopPropagation(), et.target.setPointerCapture(et.pointerId);
    const Dt = Gt.getBoundingClientRect(), kt = Dt.left + Dt.width / 2, z = Dt.top + Dt.height / 2, w = Dt.width / 2, Q = et.clientX, B = et.clientY;
    let Z = !1;
    const h = (V, K) => {
      const F = a1((V - kt) / w, (K - z) / w), at = ot ? Gr - 2 : X0, xt = Math.min(i1, Math.max(at, F));
      return k.current = xt, xt;
    }, M = (V) => {
      !Z && Math.hypot(V.clientX - Q, V.clientY - B) > 6 && (Z = !0, Ot.current = !0, Yt.current?.setAttribute("data-dragging", "true")), Z && h(V.clientX, V.clientY);
    }, q = (V) => {
      if (window.removeEventListener("pointermove", M), window.removeEventListener("pointerup", q), window.removeEventListener("pointercancel", q), Yt.current?.removeAttribute("data-dragging"), Ot.current = !1, !Z) {
        k.current = null, ot && y();
        return;
      }
      const K = h(V.clientX, V.clientY);
      if (ot && K < X0 - 0.6) {
        k.current = null, $();
        return;
      }
      lt && Y(e1(K)), ot && L(), setTimeout(() => {
        Ot.current || (k.current = null);
      }, 900);
    };
    window.addEventListener("pointermove", M), window.addEventListener("pointerup", q), window.addEventListener("pointercancel", q);
  };
  C.useEffect(() => {
    const et = it.current;
    if (!et || nt.nonce === 0) return;
    const Gt = et.offsetWidth * 0.34 * (nt.dir >= 0 ? -1 : 1), Dt = `translateY(-50%) translateX(${Gt}px) scale(0.93)`, kt = `translateY(-50%) translateX(${-Gt}px) scale(0.93)`, z = "translateY(-50%) translateX(0) scale(1)", w = et.animate(
      [
        { transform: z, opacity: 1, offset: 0 },
        { transform: Dt, opacity: 0, offset: 0.42 },
        { transform: kt, opacity: 0, offset: 0.46 },
        { transform: z, opacity: 1, offset: 1 }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    ), B = et.parentElement?.querySelector(".sleeve")?.animate(
      [
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" },
        { transform: `translateY(-50%) rotate(-3deg) translateX(${Gt * 0.12}px)` },
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    );
    return () => {
      w.cancel(), B?.cancel();
    };
  }, [nt.nonce, nt.dir]);
  const ne = /* @__PURE__ */ o.jsx("div", { className: "label", children: /* @__PURE__ */ o.jsx($p, { title: f, artist: r, album: d, footer: s, mark: v }) }), Kt = (et) => {
    const Gt = et.clientX, Dt = et.clientY;
    let kt = !1;
    const z = (Q) => {
      if (kt) return;
      const B = Q.clientX - Gt, Z = Q.clientY - Dt;
      Math.abs(B) < 64 || Math.abs(B) < Math.abs(Z) * 1.8 || (kt = !0, I.current = !0, B < 0 ? G() : R());
    }, w = () => {
      window.removeEventListener("pointermove", z), window.removeEventListener("pointerup", w), window.removeEventListener("pointercancel", w), kt && setTimeout(() => I.current = !1, 0);
    };
    window.addEventListener("pointermove", z), window.addEventListener("pointerup", w), window.addEventListener("pointercancel", w);
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "deck",
      "data-sleeve": H ? "front" : "back",
      onPointerDown: Kt,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "tonearm-base" }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "sleeve",
            onClick: () => !I.current && U(),
            role: "button",
            tabIndex: 0,
            "aria-label": "Afficher la pochette",
            onKeyDown: (et) => et.key === "Enter" && U(),
            children: [
              E ? /* @__PURE__ */ o.jsx("img", { className: "sleeve__art", src: E, alt: "", draggable: !1 }) : /* @__PURE__ */ o.jsx("div", { className: "sleeve__placeholder", children: "Aucune pochette" }),
              /* @__PURE__ */ o.jsx("div", { className: "sleeve__edge" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "disc",
            ref: it,
            onClick: () => !ot && !I.current && y(),
            role: ot ? void 0 : "button",
            tabIndex: ot ? -1 : 0,
            "aria-label": ot ? void 0 : "Lecture ou pause",
            onKeyDown: (et) => !ot && et.key === "Enter" && y(),
            children: [
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__material" }),
              /* @__PURE__ */ o.jsxs("div", { className: "disc__spin", ref: tt, children: [
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__pattern" }),
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__grooves" }),
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__aniso" }),
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__flecks" }),
                !T.counterRotateLabel && ne
              ] }),
              T.counterRotateLabel && ne,
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__gloss" }),
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__light" }),
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__edge" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(n1, { wrapRef: Yt, armRef: ut, onGrab: ee })
      ]
    }
  );
}
const J0 = /* @__PURE__ */ new Map();
function c1(f) {
  let r = 2166136261;
  for (let d = 0; d < f.length; d++)
    r ^= f.charCodeAt(d), r = Math.imul(r, 16777619);
  return () => (r ^= r << 13, r ^= r >>> 17, r ^= r << 5, (r >>> 0) % 1e5 / 1e5);
}
function pc(f, r = 640) {
  const d = J0.get(f);
  if (d) return d;
  const s = document.createElement("canvas");
  s.width = r, s.height = r;
  const v = s.getContext("2d");
  if (!v) return "";
  const E = c1(f), T = Math.floor(E() * 360), H = (T + 140 + Math.floor(E() * 80)) % 360, U = E() > 0.45, y = U ? `hsl(${T} 42% 12%)` : `hsl(${T} 30% 88%)`, k = U ? `hsl(${H} 82% 60%)` : `hsl(${H} 68% 38%)`, Y = U ? `hsl(${T} 38% 22%)` : `hsl(${T} 26% 74%)`;
  switch (v.fillStyle = y, v.fillRect(0, 0, r, r), Math.floor(E() * 4)) {
    case 0: {
      const G = r * (0.3 + E() * 0.4), R = r * (0.28 + E() * 0.24), lt = r * (0.16 + E() * 0.12), tt = v.createRadialGradient(G, R, 0, G, R, lt);
      tt.addColorStop(0, `hsl(${H} 90% 68%)`), tt.addColorStop(1, k), v.fillStyle = tt, v.beginPath(), v.arc(G, R, lt, 0, Math.PI * 2), v.fill(), v.fillStyle = Y;
      for (let ut = r * 0.62, nt = 0; ut < r; ut += 10 + nt * 2.2, nt++)
        v.fillRect(0, ut, r, 4);
      break;
    }
    case 1: {
      v.save(), v.translate(r / 2, r / 2), v.rotate((E() - 0.5) * 1.1), v.translate(-r, -r);
      for (let G = 0; G < 22; G++)
        v.fillStyle = G % 3 === 0 ? k : G % 3 === 1 ? Y : y, v.fillRect(0, G * (r / 9), r * 3, r / 18);
      v.restore();
      break;
    }
    case 2: {
      const G = r * (0.35 + E() * 0.3), R = r * (0.35 + E() * 0.3);
      for (let lt = r * 0.62; lt > 4; lt -= r * 0.045)
        v.strokeStyle = lt % (r * 0.09) < r * 0.05 ? k : Y, v.lineWidth = r * 0.022, v.beginPath(), v.arc(G, R, lt, 0, Math.PI * 2), v.stroke();
      break;
    }
    default: {
      const G = 3 + Math.floor(E() * 3), R = r / G;
      for (let lt = 0; lt < G; lt++)
        for (let tt = 0; tt < G; tt++) {
          const ut = E();
          if (ut < 0.34) continue;
          v.fillStyle = ut < 0.68 ? Y : k;
          const nt = R * 0.06;
          v.fillRect(tt * R + nt, lt * R + nt, R - nt * 2, R - nt * 2);
        }
    }
  }
  const L = v.getImageData(0, 0, r, r);
  for (let G = 0; G < L.data.length; G += 4) {
    const R = (Math.random() - 0.5) * 9;
    L.data[G] = Br((L.data[G] ?? 0) + R), L.data[G + 1] = Br((L.data[G + 1] ?? 0) + R), L.data[G + 2] = Br((L.data[G + 2] ?? 0) + R);
  }
  v.putImageData(L, 0, 0);
  const $ = s.toDataURL("image/jpeg", 0.86);
  return J0.set(f, $), $;
}
function Br(f) {
  return f < 0 ? 0 : f > 255 ? 255 : f;
}
function s1(f, r) {
  let d = null;
  const s = async () => {
    if (d || (d = await f.configEntry("music_assistant")), !d) throw new Error("Intégration Music Assistant introuvable dans Home Assistant.");
    return d;
  };
  return {
    async albums() {
      const v = await f.callServiceWithResponse("music_assistant", "get_library", {
        config_entry_id: await s(),
        media_type: "album",
        limit: 300,
        order_by: "name"
      });
      return kr(v);
    },
    async play(v) {
      await f.callService(
        "music_assistant",
        "play_media",
        { media_id: v.uri, media_type: "album", enqueue: "replace" },
        r
      );
    },
    /*
     * Recherche : elle se cible par config_entry_id, PAS par entité — c'est une
     * interrogation du fournisseur, pas une commande d'enceinte. Elle porte donc
     * sur tout Deezer, et non sur la seule bibliothèque enregistrée.
     */
    async search(v) {
      const E = await f.callServiceWithResponse("music_assistant", "search", {
        config_entry_id: await s(),
        name: v,
        limit: 12
      });
      return {
        albums: kr({ items: E?.albums ?? [] }),
        tracks: kr({ items: E?.tracks ?? [] })
      };
    },
    /* La file, elle, appartient à une enceinte : ciblage par entité. */
    async queue() {
      const v = await f.callServiceWithResponse(
        "music_assistant",
        "get_queue",
        {},
        r
      ), E = v?.queue ?? v ?? {}, T = E.items ?? [];
      if (!Array.isArray(T)) return { items: [], current: -1 };
      const H = T.map((y, k) => {
        const Y = y.media_item ?? y;
        return {
          id: String(y.queue_item_id ?? y.item_id ?? k),
          uri: String(Y.uri ?? y.uri ?? ""),
          name: String(y.name ?? Y.name ?? "—"),
          artist: ah(Y),
          image: lh(Y),
          duration: Number(y.duration ?? Y.duration ?? 0) || 0
        };
      }), U = Number(E.current_index ?? E.index_in_buffer ?? -1);
      return { items: H, current: Number.isFinite(U) ? U : -1 };
    },
    /*
     * Transfert : la file passe d'une enceinte à l'autre sans repartir de zéro.
     * C'est ce que fait Music Assistant nativement — reprendre la lecture à la
     * même seconde dans une autre pièce.
     */
    async transferTo(v) {
      await f.callService(
        "music_assistant",
        "transfer_queue",
        { source_player: r, auto_play: !0 },
        v
      );
    },
    /*
     * Sauter sur un morceau de la file.
     *
     * Music Assistant n'expose pas d'action « lire l'élément numéro n » : la
     * seule prise depuis Home Assistant est play_media. Avec `enqueue: "play"`,
     * le morceau demandé passe en lecture immédiatement et LE RESTE DE LA FILE
     * EST CONSERVÉ — c'est bien un saut, pas un remplacement de file.
     */
    async jumpTo(v) {
      if (!v.uri) throw new Error("Ce morceau n'a pas d'URI : impossible d'y sauter.");
      await f.callService(
        "music_assistant",
        "play_media",
        { media_id: v.uri, media_type: "track", enqueue: "play" },
        r
      );
    }
  };
}
function kr(f) {
  const r = f, d = r?.items ?? r?.albums ?? r?.result ?? [];
  return Array.isArray(d) ? d.map((s) => {
    const v = s;
    return {
      uri: String(v.uri ?? v.media_id ?? v.item_id ?? ""),
      name: String(v.name ?? v.title ?? "—"),
      artist: ah(v),
      image: lh(v)
    };
  }).filter((s) => s.uri.length > 0) : [];
}
function ah(f) {
  if (typeof f.artist == "string") return f.artist;
  const r = f.artists?.[0] ?? f.album_artist ?? f.artist;
  return r ? typeof r == "string" ? r : String(r.name ?? "") : "";
}
function lh(f) {
  const r = f.image ?? f.images?.[0] ?? f.metadata?.images?.[0] ?? f.thumbnail ?? null;
  if (!r) return null;
  if (typeof r == "string") return r;
  const d = r.path ?? r.url ?? null;
  return typeof d == "string" ? d : null;
}
const Yr = [
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
];
function r1(f, r) {
  return {
    async albums() {
      return Yr.map(([d, s]) => ({
        uri: `demo://album/${encodeURIComponent(d)}/${encodeURIComponent(s)}`,
        name: d,
        artist: s,
        image: pc(`${d} ${s}`)
      }));
    },
    async play(d) {
      await f.callService(
        "music_assistant",
        "play_media",
        { media_id: d.uri, media_type: "album", enqueue: "replace" },
        r
      );
    },
    async search(d) {
      const s = d.trim().toLowerCase(), E = Yr.map(([T, H]) => ({
        uri: `demo://album/${encodeURIComponent(T)}/${encodeURIComponent(H)}`,
        name: T,
        artist: H,
        image: pc(`${T} ${H}`)
      })).filter(
        (T) => T.name.toLowerCase().includes(s) || T.artist.toLowerCase().includes(s)
      );
      return {
        albums: E.slice(0, 12),
        tracks: E.slice(0, 4).map((T) => ({ ...T, name: `${T.name} · piste 1` }))
      };
    },
    async queue() {
      return {
        items: Yr.slice(0, 7).map(([d, s], v) => ({
          id: `demo-${v}`,
          uri: `demo://album/${encodeURIComponent(d)}/${encodeURIComponent(s)}`,
          name: `${d} · piste ${v + 1}`,
          artist: s,
          image: pc(`${d} ${s}`),
          duration: 190 + v * 21
        })),
        current: 1
      };
    },
    async transferTo() {
    },
    async jumpTo(d) {
      await f.callService(
        "music_assistant",
        "play_media",
        { media_id: d.uri, media_type: "track", enqueue: "play" },
        r
      );
    }
  };
}
function f1(f) {
  const r = /^demo:\/\/album\/([^/]+)\/([^/]+)$/.exec(f);
  return !r || !r[1] || !r[2] ? null : { name: decodeURIComponent(r[1]), artist: decodeURIComponent(r[2]) };
}
const Zl = [
  { title: "Nuit américaine", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 214 },
  { title: "Le grand bleu tremble", artist: "Atelier Nord", album: "Vagues courtes", duration: 268 },
  { title: "Sillon 3", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 187 }
], o1 = qe.PAUSE | qe.SEEK | qe.VOLUME_SET | qe.PREVIOUS_TRACK | qe.NEXT_TRACK | qe.PLAY | qe.SHUFFLE_SET | qe.REPEAT_SET, Qr = [
  { entity_id: "media_player.salon", name: "Salon" },
  { entity_id: "media_player.cuisine", name: "Cuisine" },
  { entity_id: "media_player.chambre", name: "Chambre" }
], Lr = Qr[0].entity_id;
function d1(f) {
  return Qr.find((r) => r.entity_id === f)?.name ?? "Salon";
}
class h1 {
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
  entityId = Lr;
  connect(r) {
    this.entityId = r[0] || Lr, this.onStatus("connected"), this.publish(), this.timer = setInterval(() => {
      if (this.playing) {
        this.position += 1;
        const d = Zl[this.index];
        d && this.position >= d.duration && (this.index = (this.index + 1) % Zl.length, this.position = 0);
      }
      this.publish();
    }, 1e3);
  }
  close() {
    this.timer && clearInterval(this.timer), this.timer = null;
  }
  callService(r, d, s = {}) {
    switch (d) {
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
        this.index = (this.index + 1) % Zl.length, this.position = 0;
        break;
      case "media_previous_track":
        this.position > 3 ? this.position = 0 : (this.index = (this.index - 1 + Zl.length) % Zl.length, this.position = 0);
        break;
      case "media_seek":
        this.position = Number(s.seek_position ?? 0);
        break;
      case "volume_set":
        this.volume = Number(s.volume_level ?? this.volume);
        break;
      case "shuffle_set":
        this.shuffle = !!s.shuffle;
        break;
      case "repeat_set":
        this.repeat = s.repeat ?? "off";
        break;
      case "play_media": {
        const v = f1(String(s.media_id ?? ""));
        v && (this.album = v, this.cover = pc(`${v.name} ${v.artist}`), this.index = 0, this.position = 0, this.playing = !0);
        break;
      }
    }
    return this.publish(), Promise.resolve(null);
  }
  publish() {
    const r = Zl[this.index] ?? Zl[0];
    this.onState({
      entity_id: this.entityId,
      state: this.playing ? "playing" : "paused",
      attributes: {
        friendly_name: d1(this.entityId),
        supported_features: o1,
        media_title: this.album ? `${this.album.name} · piste ${this.index + 1}` : r.title,
        media_artist: this.album ? this.album.artist : r.artist,
        media_album_name: this.album ? this.album.name : r.album,
        media_duration: r.duration,
        media_position: this.position,
        media_position_updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        entity_picture: this.cover ?? "./demo-cover.png",
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
function m1() {
  return new URLSearchParams(window.location.search).has("demo");
}
function p1() {
  const f = new URLSearchParams(window.location.search), r = {}, d = f.get("vinyl"), s = f.get("bg");
  return d && (r.vinyl = d), s && (r.background = s), r;
}
const v1 = `[00:08.40] Le soir tombe sur les toits gris
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
[01:16.80] On y croit quand même, ce soir`, nh = "https://lrclib.net/api", pl = { lines: [], synced: !1, plain: null, instrumental: !1 }, Vi = /* @__PURE__ */ new Map();
function g1(f) {
  return `${f.artist}::${f.title}::${Math.round(f.duration ?? 0)}`;
}
async function y1(f, r) {
  if (!f.title || !f.artist) return pl;
  const d = g1(f), s = Vi.get(d);
  if (s) return s;
  let v = pl;
  try {
    v = await b1(f, r) ?? await x1(f, r) ?? pl;
  } catch (E) {
    if (E?.name === "AbortError") throw E;
    v = pl;
  }
  return Vi.set(d, v), Vi.size > 80 && Vi.delete(Vi.keys().next().value), v;
}
async function b1(f, r) {
  const d = new URLSearchParams({
    artist_name: f.artist,
    track_name: f.title,
    album_name: f.album ?? "",
    duration: String(Math.round(f.duration ?? 0))
  }), s = await fetch(`${nh}/get?${d}`, { signal: r });
  return s.ok ? ih(await s.json()) : null;
}
async function x1(f, r) {
  const d = new URLSearchParams({ track_name: f.title, artist_name: f.artist }), s = await fetch(`${nh}/search?${d}`, { signal: r });
  if (!s.ok) return null;
  const v = await s.json();
  if (!Array.isArray(v) || v.length === 0) return null;
  const E = f.duration ?? 0, T = [...v].filter((H) => H.syncedLyrics).sort((H, U) => Math.abs(H.duration - E) - Math.abs(U.duration - E))[0] ?? v[0];
  return T ? ih(T) : null;
}
function ih(f) {
  if (f.instrumental)
    return { lines: [], synced: !1, plain: null, instrumental: !0 };
  const r = f.syncedLyrics ? uh(f.syncedLyrics) : [];
  return {
    lines: r,
    synced: r.length > 0,
    plain: f.plainLyrics ?? null,
    instrumental: !1
  };
}
function uh(f) {
  const r = /\[(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g, d = [];
  for (const s of f.split(/\r?\n/)) {
    r.lastIndex = 0;
    const v = [];
    let E, T = 0;
    for (; (E = r.exec(s)) !== null && E.index === T; ) {
      T = r.lastIndex;
      const U = Number(E[1]), y = Number(E[2]), k = E[3] ? +`0.${E[3]}` : 0;
      v.push(U * 60 + y + k);
    }
    if (v.length === 0) continue;
    const H = s.slice(T).trim();
    for (const U of v) d.push({ time: U, text: H });
  }
  return d.sort((s, v) => s.time - v.time);
}
function S1(f, r) {
  let d = 0, s = f.length - 1, v = -1;
  for (; d <= s; ) {
    const E = d + s >> 1;
    f[E].time <= r ? (v = E, d = E + 1) : s = E - 1;
  }
  return v;
}
const E1 = 3800, A1 = 0.25, ye = m1();
function z1({ embedded: f } = {}) {
  const [r, d] = C.useState(() => {
    const D = hc();
    return ye && !D.entityId ? { ...D, entityId: Lr } : D;
  }), [s, v] = C.useState(
    () => f ? !hc().entityId : !ye && !G0(hc())
  ), [E, T] = C.useState(null), [H, U] = C.useState("idle"), [y, k] = C.useState(vl), [Y, L] = C.useState(pl), [$, G] = C.useState(!1), [R, lt] = C.useState(
    () => ye && new URLSearchParams(window.location.search).has("lyrics")
  ), [tt, ut] = C.useState(-1), [nt, it] = C.useState(!1), [Yt, Ot] = C.useState([]), [I, ot] = C.useState(!1), [ee, ne] = C.useState(null), [Kt, et] = C.useState(""), [Gt, Dt] = C.useState(null), [kt, z] = C.useState(!1), [w, Q] = C.useState(!1), [B, Z] = C.useState([]), [h, M] = C.useState(-1), [q, V] = C.useState(null), [K, F] = C.useState(!1), [at, xt] = C.useState(null), [Et, Xt] = C.useState(!1), [ha, wa] = C.useState([]), [Kl, na] = C.useState(!1), [Yn, yl] = C.useState(null), [xc, Li] = C.useState(!1), [Hn, Xl] = C.useState(!1), [Vn, Gn] = C.useState(
    () => ye && new URLSearchParams(window.location.search).has("rest")
  ), Zi = C.useRef(null), ie = C.useRef(null), Ba = C.useRef(null), Jl = C.useRef(null), Ln = C.useRef(null), ka = C.useRef(null), Zn = C.useRef(null), ma = C.useRef(null), Ql = C.useRef(pl), Kn = C.useRef(Date.now()), ue = E?.attributes, Jt = ue?.media_title ?? "", be = ue?.media_artist ?? "", ae = ue?.media_album_name ?? "", Ie = ue?.media_duration ?? 0, Ki = ue?.friendly_name ?? "", bl = E?.state === "playing", { haUrl: Pe, token: _e, entityId: ce } = r;
  C.useEffect(() => {
    if (f) {
      if (!ce) return;
      ma.current = null, T(null), Ba.current = f, f.onStatus = U, f.onState = (ct) => {
        ma.current = ct, T(ct);
      }, f.connect([ce]);
      return;
    }
    if (!ye && (!_e || !ce)) return;
    ma.current = null, T(null);
    const D = { haUrl: Pe, token: _e }, X = ye ? new h1() : new Zp(D);
    return Ba.current = X, X.onStatus = U, X.onState = (ct) => {
      ma.current = ct, T(ct);
    }, X.connect([ce]), ye || qp(D), () => {
      X.close(), Ba.current = null;
    };
  }, [f, Pe, _e, ce]);
  const Re = C.useMemo(
    () => Jp({ haUrl: Pe }, ue?.entity_picture),
    [Pe, _e, ue?.entity_picture]
  );
  C.useEffect(() => {
    if (!Re) {
      k(vl);
      return;
    }
    let D = !1;
    return W0(Re).then((X) => {
      D || k(X);
    }), () => {
      D = !0;
    };
  }, [Re]), C.useEffect(() => {
    if (!r.lyrics || !Jt || !be) {
      L(pl), Ql.current = pl;
      return;
    }
    if (ye) {
      const X = {
        lines: uh(v1),
        synced: !0,
        plain: null,
        instrumental: !1
      };
      Ql.current = X, L(X), G(!1);
      return;
    }
    const D = new AbortController();
    return G(!0), ut(-1), y1({ title: Jt, artist: be, album: ae, duration: Ie }, D.signal).then((X) => {
      Ql.current = X, L(X), G(!1);
    }).catch(() => {
    }), () => D.abort();
  }, [r.lyrics, Jt, be, ae, Ie]), C.useEffect(() => {
    let D = 0, X = performance.now(), ct = 0, gt = 0, qt = Gr, Be = 1, ke = "", ta = -1;
    const $l = 200 * (r.rpm / 45) ** 2, ga = (Qn) => {
      const Wt = Math.min(0.1, (Qn - X) / 1e3);
      X = Qn;
      const ve = wp(ma.current, Date.now()), Xa = ve.playing ? 1 : 0, Al = Xa > gt ? 0.45 : 1.1;
      gt += (Xa - gt) * (1 - Math.exp(-Wt / Al)), gt < 5e-4 && (gt = 0), ct = (ct + gt * $l * Wt) % 360;
      const ca = ve.duration > 0 && ve.playing, tn = Jl.current ?? (ca ? Xr(ve.progress) : Gr), se = Jl.current !== null ? 0.05 : 0.4;
      qt += (tn - qt) * (1 - Math.exp(-Wt / se));
      const Ye = ve.playing ? 0 : 1;
      Be += (Ye - Be) * (1 - Math.exp(-Wt / 0.4)), Ln.current?.style.setProperty("--spin", `${ct.toFixed(2)}deg`), ka.current?.style.setProperty("--arm", `${qt.toFixed(3)}deg`), ka.current?.style.setProperty("--lift", Be.toFixed(3)), Zn.current && (Zn.current.style.transform = `scaleX(${ve.progress.toFixed(4)})`);
      const zl = mc(ve.position);
      zl !== ke && (ke = zl, ie.current && (ie.current.textContent = zl));
      const Tl = Ql.current.lines;
      if (Tl.length > 0) {
        const He = S1(Tl, ve.position + A1);
        He !== ta && (ta = He, ut(He));
      }
      D = requestAnimationFrame(ga);
    };
    return D = requestAnimationFrame(ga), () => cancelAnimationFrame(D);
  }, [r.rpm]), C.useEffect(() => {
    const D = Zi.current;
    D && (D.style.setProperty("--pal-a", y.a), D.style.setProperty("--pal-b", y.b), D.style.setProperty("--pal-deep", y.deep), D.style.setProperty("--vinyl-tint", r.vinylTint || y.a));
  }, [y, r.vinylTint]), C.useEffect(() => {
    let D;
    const X = () => {
      clearTimeout(D), D = setTimeout(() => Xl(!0), E1);
    }, ct = () => {
      Kn.current = Date.now(), Xl(!1), Gn(!1), X();
    };
    X();
    for (const gt of ["pointerdown", "pointermove", "keydown", "wheel"])
      window.addEventListener(gt, ct, { passive: !0 });
    return () => {
      clearTimeout(D);
      for (const gt of ["pointerdown", "pointermove", "keydown", "wheel"])
        window.removeEventListener(gt, ct);
    };
  }, []), C.useEffect(() => {
    if (r.idleMinutes <= 0) return;
    const D = r.idleMinutes * 6e4, X = setInterval(() => {
      if (ma.current?.state === "playing") {
        Kn.current = Date.now();
        return;
      }
      Date.now() - Kn.current > D && Gn(!0);
    }, 15e3);
    return () => clearInterval(X);
  }, [r.idleMinutes]), C.useEffect(() => {
    const X = setInterval(async () => {
      try {
        const gt = await (await fetch(`./version.json?_=${Date.now()}`, { cache: "no-store" })).json();
        gt.build && gt.build !== "1786483719529" && window.location.reload();
      } catch {
      }
    }, 9e5);
    return () => clearInterval(X);
  }, []);
  const $e = C.useRef(null), Ya = C.useRef(null), we = C.useCallback(() => {
    const D = Ba.current;
    return D ? ($e.current = $e.current ?? (ye ? r1(D, ce) : s1(D, ce)), $e.current) : null;
  }, [ce]);
  C.useEffect(() => {
    $e.current = null, Z([]);
  }, [ce]);
  const xl = C.useCallback(async () => {
    if (!(Yt.length > 0 || I) && we()) {
      ot(!0), ne(null);
      try {
        Ot(await $e.current.albums());
      } catch (D) {
        ne(
          `Impossible de lire la bibliothèque : ${D instanceof Error ? D.message : String(D)}`
        );
      } finally {
        ot(!1);
      }
    }
  }, [Yt.length, I, we]), Wl = C.useCallback(() => {
    it(!0), xl();
  }, [xl]), Ha = C.useRef(!1);
  C.useEffect(() => {
    if (ye || Ha.current || !E) return;
    Ha.current = !0;
    const D = () => {
      xl();
    }, X = typeof window.requestIdleCallback == "function", ct = X ? window.requestIdleCallback(D, { timeout: 3e3 }) : window.setTimeout(D, 1200);
    return () => {
      X ? window.cancelIdleCallback(ct) : clearTimeout(ct);
    };
  }, [E, xl]), C.useEffect(() => {
    const D = Kt.trim();
    if (D.length < 2) {
      Dt(null), z(!1);
      return;
    }
    let X = !0;
    z(!0);
    const ct = setTimeout(async () => {
      const gt = we();
      if (gt)
        try {
          const qt = await gt.search(D);
          X && Dt([...qt.albums, ...qt.tracks]);
        } catch (qt) {
          X && (ne(
            `Recherche impossible : ${qt instanceof Error ? qt.message : String(qt)}`
          ), Dt([]));
        } finally {
          X && z(!1);
        }
    }, 320);
    return () => {
      X = !1, clearTimeout(ct);
    };
  }, [Kt, we]);
  const Fl = C.useCallback(async () => {
    const D = we();
    if (D) {
      F(!0), xt(null);
      try {
        const X = await D.queue();
        Z(X.items), M(X.current);
      } catch (X) {
        xt(
          `Impossible de lire la file : ${X instanceof Error ? X.message : String(X)}`
        );
      } finally {
        F(!1);
      }
    }
  }, [we]);
  C.useEffect(() => {
    w && Fl();
  }, [w, Jt, Fl]);
  const Xn = C.useRef(null);
  C.useEffect(() => {
    if (q === null) return;
    const D = B[h];
    D && D.uri === Xn.current && V(null);
  }, [B, h, q]), C.useEffect(() => {
    if (q === null) return;
    const D = setTimeout(() => V(null), 8e3);
    return () => clearTimeout(D);
  }, [q]);
  const Il = C.useRef(null), Xi = C.useCallback(
    async (D) => {
      const X = we();
      if (X) {
        Xn.current = D.uri, V(D.id);
        try {
          await X.jumpTo(D), Il.current && clearTimeout(Il.current), Il.current = setTimeout(() => {
            Fl();
          }, 1200);
        } catch (ct) {
          V(null), xt(
            `Impossible d'aller à ce morceau : ${ct instanceof Error ? ct.message : String(ct)}`
          );
        }
      }
    },
    [Fl, we]
  ), Jn = C.useCallback(async () => {
    na(!0), yl(null);
    try {
      wa(
        f ? f.players() : ye ? Qr.map((D) => ({
          entity_id: D.entity_id,
          state: D.entity_id === ce ? E?.state ?? "idle" : "idle",
          attributes: { friendly_name: D.name }
        })) : await P0({ haUrl: Pe, token: _e })
      );
    } catch (D) {
      yl(
        `Impossible de lister les enceintes : ${D instanceof Error ? D.message : String(D)}`
      );
    } finally {
      na(!1);
    }
  }, [f, E?.state, ce, Pe, _e]), Sl = C.useCallback((D) => {
    d((X) => {
      const ct = { ...X, entityId: D };
      return Hr(ct), ct;
    }), Xt(!1);
  }, []), Ji = C.useCallback(
    async (D) => {
      const X = we();
      if (X)
        try {
          await X.transferTo(D);
        } catch (ct) {
          yl(
            `Transfert refusé : ${ct instanceof Error ? ct.message : String(ct)}`
          );
          return;
        }
      Sl(D);
    },
    [Sl, we]
  ), Qi = C.useCallback((D, X) => {
    $e.current?.play(D);
    const ct = X.parentElement, gt = document.querySelector(".sleeve"), qt = document.querySelector(".library");
    if (!ct || !gt) {
      it(!1);
      return;
    }
    const Be = gt.getBoundingClientRect(), ke = X.offsetWidth, ta = X.getBoundingClientRect(), $l = parseFloat(ct.style.getPropertyValue("--arc")) || 8, ga = parseFloat(ct.dataset.offset ?? "") || 0, Wt = `${90 + ((parseFloat(X.dataset.i ?? "") || 0) - ga) * $l}deg`, ve = ta.left + ta.width / 2 - ke / 2, Xa = ta.top + ta.height / 2 - ke / 2, Al = Be.width / ke, ca = Be.left + Be.width / 2 - (ve + ke / 2), tn = Be.top + Be.height / 2 - (Xa + ke / 2), se = document.createElement("div");
    se.className = "flyer", se.style.transformOrigin = "50% 50%", se.style.left = `${ve}px`, se.style.top = `${Xa}px`, se.style.width = `${ke}px`, se.style.height = `${ke}px`, D.image && (se.style.backgroundImage = `url("${D.image}")`), document.body.appendChild(se);
    const Ye = (He, Wn) => document.querySelector(He)?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 260,
      delay: Wn,
      easing: "ease-out",
      fill: "forwards"
    }), zl = [Ye(".disc", 0), Ye(".tonearm", 0), Ye(".tonearm-base", 0)], Tl = se.animate(
      [
        { transform: `perspective(2400px) rotateY(${Wt}) scale(1)`, offset: 0 },
        // Elle se déhanche d'abord hors du bac, avant de partir.
        { transform: `perspective(2400px) rotateY(${Wt}) scale(1.06) translateY(-3%)`, offset: 0.22 },
        {
          transform: `perspective(2400px) rotate(-3deg) rotateY(0deg) translate(${ca}px, ${tn}px) scale(${Al})`,
          offset: 1
        }
      ],
      { duration: 880, easing: "cubic-bezier(0.32, 0.72, 0, 1)", fill: "forwards" }
    );
    qt?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 420,
      delay: 180,
      easing: "ease-out",
      fill: "forwards"
    }), window.setTimeout(() => it(!1), 620), Tl.finished.then(() => {
      for (const He of zl) He?.cancel();
      document.querySelector(".disc")?.animate(
        [
          { opacity: 0, transform: "translateY(-50%) translateX(-14%) scale(0.94)" },
          { opacity: 1, transform: "translateY(-50%) translateX(0) scale(1)" }
        ],
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
      for (const He of [".tonearm", ".tonearm-base"])
        document.querySelector(He)?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 520, delay: 180, easing: "ease-out" });
      se.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, delay: 120, fill: "forwards" }).finished.then(
        () => se.remove(),
        () => se.remove()
      );
    });
  }, []);
  C.useEffect(() => {
    ye && new URLSearchParams(window.location.search).has("lib") && Wl();
  }, []);
  const Tt = C.useCallback(
    (D, X = {}) => {
      Ba.current?.callService("media_player", D, X, r.entityId)?.catch(() => {
      });
    },
    [r.entityId]
  ), Qt = C.useRef(null);
  C.useEffect(() => {
    if (!E) return;
    const D = Qt.current;
    if (Qt.current = bl, D === null || D === bl) return;
    const X = bl ? r.onPlay : r.onStop;
    if (!Dp(X)) return;
    const [ct, gt] = X.service.trim().split(".");
    !ct || !gt || Ba.current?.callService(ct, gt, {}, X.entityId.trim() || void 0)?.catch(() => {
    });
  }, [E, bl, r.onPlay, r.onStop]);
  const [he, Va] = C.useState({ nonce: 0, dir: 1 }), Ga = C.useCallback(
    (D) => Va((X) => ({ nonce: X.nonce + 1, dir: D })),
    []
  ), Pl = C.useCallback(() => Tt("media_play_pause"), [Tt]), Sc = C.useCallback(() => Tt("media_play"), [Tt]), Wi = C.useCallback(() => Tt("media_pause"), [Tt]), ia = C.useCallback(() => {
    Ga(1), Tt("media_next_track");
  }, [Ga, Tt]), La = C.useCallback(() => {
    Ga(-1), Tt("media_previous_track");
  }, [Ga, Tt]), ua = C.useCallback(
    (D) => Tt("media_seek", { seek_position: Math.max(0, Math.round(D)) }),
    [Tt]
  ), Za = C.useCallback(
    (D) => {
      Ie > 0 && ua(D * Ie);
    },
    [Ie, ua]
  ), El = C.useCallback(() => {
    Tt("repeat_set", { repeat: { off: "all", all: "one", one: "off" }[ue?.repeat ?? "off"] });
  }, [ue?.repeat, Tt]);
  C.useEffect(() => {
    const D = (X) => {
      if (X.target?.tagName === "INPUT" || s) return;
      const ct = ue?.volume_level ?? 0;
      switch (X.key) {
        case " ":
          X.preventDefault(), Pl();
          break;
        case "ArrowRight":
          ia();
          break;
        case "ArrowLeft":
          La();
          break;
        case "ArrowUp":
          Tt("volume_set", { volume_level: Math.min(1, ct + 0.05) });
          break;
        case "ArrowDown":
          Tt("volume_set", { volume_level: Math.max(0, ct - 0.05) });
          break;
        case "l":
          Q(!1), Xt(!1), lt((gt) => !gt);
          break;
      }
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [ue?.volume_level, Tt, ia, La, s, Pl]);
  const Ka = (D) => {
    Hr(D), d(D), v(!1);
  }, Fi = `${r.rpm >= 45 ? "45 RPM" : "33⅓ RPM"} · STEREO`, Ii = [Ki.toUpperCase(), Ie > 0 ? mc(Ie) : ""].filter(Boolean).join(" · "), pa = r.lyrics && (Y.lines.length > 0 || !!Y.plain), va = {
    connecting: "Connexion à Home Assistant…",
    reconnecting: "Reconnexion…",
    unauthorized: "Jeton refusé — ouvre les réglages",
    error: "Erreur de connexion"
  }, Pi = { vinyl: r.vinyl, background: r.background, ...ye ? p1() : {} }, _i = w || Et, _l = (D) => {
    Q(D === "queue"), Xt(D === "speakers"), lt(D === "lyrics");
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "app",
      ref: Zi,
      "data-vinyl": Pi.vinyl,
      "data-bg": Pi.background,
      "data-panel": _i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "backdrop" }),
        /* @__PURE__ */ o.jsx("div", { className: "stage", children: /* @__PURE__ */ o.jsx(
          u1,
          {
            title: r.labelText || Jt,
            artist: be,
            album: ae,
            footer: Fi,
            mark: Ii,
            coverUrl: Re,
            settings: r,
            sleeveFront: xc,
            onToggleSleeve: () => Li((D) => !D),
            onTogglePlay: Pl,
            armOverride: Jl,
            onSeekProgress: Za,
            onPlay: Sc,
            onPause: Wi,
            onNext: ia,
            onPrevious: La,
            seekable: Ie > 0,
            spinRef: Ln,
            armRef: ka,
            swap: he
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "hud", "data-quiet": Hn && !s, children: [
          /* @__PURE__ */ o.jsx(
            Ep,
            {
              entity: E,
              name: Ki,
              onLibrary: Wl,
              onQueue: () => _l(w ? null : "queue"),
              onSpeakers: () => {
                _l("speakers"), Jn();
              },
              queueOn: w,
              onSettings: () => v(!0),
              onLyrics: () => _l(R ? null : "lyrics"),
              onShuffle: (D) => Tt("shuffle_set", { shuffle: D }),
              onRepeat: El,
              lyricsOn: R,
              lyricsAvailable: pa
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "hud__bottom", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "track", children: [
              /* @__PURE__ */ o.jsx("span", { className: "track__title", children: Jt || "Rien en lecture" }),
              /* @__PURE__ */ o.jsx("span", { className: "track__artist", children: [be, ae].filter(Boolean).join(" — ") })
            ] }),
            /* @__PURE__ */ o.jsx(
              Sp,
              {
                entity: E,
                playing: bl,
                showPlayButton: r.playControl === "button",
                onPlayPause: Pl,
                onPrevious: La,
                onNext: ia,
                onVolume: (D) => Tt("volume_set", { volume_level: D })
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "times", children: [
              /* @__PURE__ */ o.jsx("span", { ref: ie, children: "0:00" }),
              /* @__PURE__ */ o.jsx("span", { className: "times__bar", children: /* @__PURE__ */ o.jsx("span", { className: "times__fill", ref: Zn }) }),
              /* @__PURE__ */ o.jsx("span", { children: mc(Ie) })
            ] })
          ] })
        ] }),
        va[H] && /* @__PURE__ */ o.jsxs("div", { className: "status", children: [
          /* @__PURE__ */ o.jsx("span", { className: "status__dot" }),
          va[H]
        ] }),
        R && /* @__PURE__ */ o.jsx(
          Op,
          {
            lyrics: Y,
            activeIndex: tt,
            loading: $,
            onClose: () => lt(!1),
            onSeek: ua
          }
        ),
        w && /* @__PURE__ */ o.jsx(
          Bp,
          {
            items: B,
            loading: K,
            error: at,
            current: h,
            pending: q,
            onPick: (D) => {
              Xi(D);
            },
            onClose: () => Q(!1)
          }
        ),
        Et && /* @__PURE__ */ o.jsx(
          Hp,
          {
            players: ha,
            current: ce,
            loading: Kl,
            error: Yn,
            onListen: Sl,
            onTransfer: (D) => {
              Ji(D);
            },
            onClose: () => Xt(!1)
          }
        ),
        nt && /* @__PURE__ */ o.jsx(
          jp,
          {
            albums: Gt ?? Yt,
            loading: I,
            error: ee,
            onPlay: Qi,
            onClose: () => it(!1),
            resumeIndex: Ya.current,
            onFocusChange: (D) => Ya.current = D,
            query: Kt,
            onQuery: et,
            searching: kt
          }
        ),
        Vn && /* @__PURE__ */ o.jsx(kp, { onWake: () => Gn(!1) }),
        s && /* @__PURE__ */ o.jsx(
          Ip,
          {
            settings: r,
            onSave: Ka,
            onCancel: ye || (f ? r.entityId : G0(r)) ? () => v(!1) : null,
            requireConnection: !ye && !f,
            embedded: !!f,
            knownPlayers: f ? f.players() : null
          }
        )
      ]
    }
  );
}
class T1 {
  onState = () => {
  };
  onStatus = () => {
  };
  hass;
  watched = [];
  /** Dernier état publié, pour ne pas réémettre à chaque battement du frontend. */
  last = null;
  constructor(r) {
    this.hass = r;
  }
  connect(r) {
    this.watched = r, this.onStatus("connected"), this.publish();
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
  update(r) {
    this.hass = r, this.publish();
  }
  publish() {
    const r = this.watched[0];
    if (!r) return;
    const d = this.hass.states[r];
    if (!d) {
      this.onStatus("reconnecting", `Entité ${r} introuvable`);
      return;
    }
    const s = this.last;
    s !== null && s.state === d.state && s.attributes.media_title === d.attributes.media_title && s.attributes.media_position === d.attributes.media_position && s.attributes.media_position_updated_at === d.attributes.media_position_updated_at && s.attributes.volume_level === d.attributes.volume_level && s.attributes.shuffle === d.attributes.shuffle && s.attributes.repeat === d.attributes.repeat && s.attributes.entity_picture === d.attributes.entity_picture || (this.last = d, this.onStatus("connected"), this.onState(d));
  }
  callService(r, d, s = {}, v) {
    return this.hass.callService(
      r,
      d,
      s,
      v ? { entity_id: v } : void 0
    );
  }
  /**
   * Les actions qui RENVOIENT des données passent par le WebSocket brut :
   * `hass.callService` ne remonte pas la réponse, et c'est elle qui porte la
   * bibliothèque, la recherche et la file.
   */
  async callServiceWithResponse(r, d, s = {}, v) {
    const E = await this.hass.callWS({
      type: "call_service",
      domain: r,
      service: d,
      service_data: s,
      ...v ? { target: { entity_id: v } } : {},
      return_response: !0
    });
    return E?.response ?? E;
  }
  /** L'entrée de configuration de Music Assistant, que ciblent get_library et search. */
  async configEntry(r) {
    return (await this.hass.callWS({
      type: "config_entries/get"
    })).find((s) => s.domain === r)?.entry_id ?? null;
  }
  /** Toutes les enceintes visibles, sans passer par le REST. */
  players() {
    return Object.values(this.hass.states).filter((r) => !!r?.entity_id.startsWith("media_player.")).sort((r, d) => {
      const s = r.attributes.mass_player_type ? 0 : 1, v = d.attributes.mass_player_type ? 0 : 1;
      return s !== v ? s - v : (r.attributes.friendly_name ?? r.entity_id).localeCompare(
        d.attributes.friendly_name ?? d.entity_id
      );
    });
  }
}
function M1(f) {
  const r = Object.values(f.states).filter(
    (v) => !!v?.entity_id.startsWith("media_player.")
  ), d = r.filter((v) => v.attributes.mass_player_type !== void 0), s = d.length > 0 ? d : r;
  return s.find((v) => v.state === "playing")?.entity_id ?? s.find((v) => v.state === "paused")?.entity_id ?? s[0]?.entity_id ?? "";
}
const Q0 = `@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,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) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,d09GMgABAAAAAUxMABUAAAAC4JwAAUvQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGotjG4KKLByFFD9IVkFSlRE/TVZBUl4GYD9TVEFUgU4nJgCOSi9sEQgKg40MgtMqC41gADCE+wABNgIkA5s8BCAFhi4HwjQMB1tsu5KCMMZwEP2S1m+6iQiwvWqNVWPHEY8YGmO9MD6CTqdDjG0pMPXb7vMJB/CmK7NyO7BDk7o70f////+/KZnEmF5evSTJA4CiAlW1zrZtt4ElVYVRuCHSUZuAo+36CLhi8IrounHf7KOOe/LQ18ajm47ZVVSHns5tm23aaa4bk9tbikubLXrCCCUlJWmdGShmVZBgqLM0mnCTvq7+5tKLFzqu4mawOPVVRETcpc9opSIfJT0WGdt43+7JeOjqoZQb3XOQK+rBE898v/aJQMQfK5jcFx5I9UJjCBilVql6GRYQL/+gh6JSKqHPVVDoK3EjCO1KoSpb0JoGraIjpoPiAQu7jR0eOWdminN8OuZZuBdJioCpqRhEFieOlF9mPPojc6wFat0T9QLVTkfR1zgGAo7J/XYRMY5y3+PuBauKoFSfJ8fykZnR1Ckm5stP330iLw3meyBecjAE9pSzw2D4WJ+xronjUljEpEM1afIH3yd34Q1/rWAvXBAD5efhMFLaXy/ptoZNztv73uizNNadm5t2LPzu3FMuLCbFF0GWk2KQ9iZV6HbauHY4s40fWBj61JIus7gRdm3QUTCbUqsqO1BYw05W5phi/flsm1gu+Ce+pKpQSeTZ8oY+hRcoWGDZig8W5ha6w8/ys0j+35GXgDhunoIlouwebcTRrnhufdFC//y31KrOfd0zAktGZQmtABB/Ay8BfRGi7GR6iJ/b33tvzRgDxugRwhg9RqQ4YrRES7RISTlqpFiIiIWKBSh+LEQMLAxERCxEWkRaROVLSAzEzaJ7fruzM7v3fvADzNMgzTiJ8oA08Tc7QHPrHiVEMGgLAWmREWOMGotINhbFirGxZIweo1JaJARUMAijUN/IL4yvKL9v7T/rVuPMPNo/fxHVcsKqekKoyK2QUTmRU4vENgxCR8Xm9fA41f5JlklGyZZlWwbmEBWA1nX7t/FxZWdMHWDH0PtDLtG6pG3StYEG64Bj+wBd+v9nUl4wtw1YRU0jLkYLzxKzAGbVbfJkfvAJutTw/H/79f/OXVXnND7gMFiU974PJExGnKrVfQMkw8J+oX/iGGx4eIKG53m7/3ftyJiZ+N5Ped95Ebp0UKnuo4oqqHtVrFJn7av7lNrNPgYwvN8cEEZTpwFwI6AkBTpiOhgLNVz5/4cDd/59IMMJb+CLiySCAL37dNZXJclUJbDHRxBBjDlR2iAZcWlYrT6w9jL5XfYRyTM8RHP/vJmF0IUPDAUgJ0hV7rwUfKWrkdUVFjhneNrUfxAj0qZJTdJVpl7biLSdfxHd/n6/2OYlZKL/d+us7X7TNk1ST5wIEYIHOQ44juOAO+AOPw47JHAsWys2Qn9RQYbYjhMbnp/O3v9JmrSlinTg28GEGbeb2N1+ksLmt+PMuB0nzhTG7P8f+xHVxhprkiZNjYpRdWxDpXB0CObWESNSJcoXENoiFEUsYoREjx4jV9BjjBqwhA1ZFAyE3ihR2ABRidLmEQsxsPK1Xz7QsuXyjmDXSIxtk/ul1UkWeQ5dhVtjUIKgq/p4XFddghZeL88wYRr/vH+75y2GABNNW9gCptovgYE/3Xg7d/q/DZBAXhANBIkBNZeps93us/rt3VZdm2lgq37o1vf/3UuwIUzEIKzBrp9o5U1xTdGo/zS3Ggmhk0mW5obJv2H2TmAJqYbEq7Uh5qn9e2Q6iUQoidpu5UTNWqJvq6y00uvu3SA0NPRwp6DgANIAw0HpH9Pr+dYUBaECX7+LsiBJJellGJiW/p29Oxg4qO+Xv+/37pk5S4grLBgBCp+EDFkJhMcp6gv5lUlZ7cD/9/vt9+GRPRRSFSudSGj44lSmM5ROJBSJZv97Nr8/sa3/P3MGxgHEjhuV+ip+Za6jPzNe1N6I2lKxEQmwbLFL9v4t7QwBhyE4j3NgEE5CFdxSafZAwuSh0FNA7u8Bi4Vyk3p5oBvgGnA3VPw2s3QALuy/q/IGJZBKEdS0Dh9Kp7UhoTpnk0PrnyRUxwpRYu7ylzoNCCjQaYtdHo3L2ntJBlRPfpvnlyf6nxUGGIhthLv9/6Xq1/bdAsgGHLpBSkcudizbHR6/fU6X7e69UocUlp0nJKCKEAuBchGU/AsAqSlC0u8CINoPAPl/ERBtEhSD+PXVtJzVtpwyv37KDwDZ/xEU3QVAOoYzZefO0blTjLs5s9jNcpbTq93kuEths57lLJY9u+0sliFdmer36Q4WoJZ4jji9u4PeOfKsCyK6c07SORt9a3Z6djA7O1gSWBAkDCmBoPhEkDKgLMnnMLvAEgQhfsp++TPWkTxn9a2JfPQzY1zlPwtEXpC88Ex06Q+i8Pv/71RX7rsi5okURaRVlNb3Cf5Xg6+OnYIsu0+lKV1bJp8Me7Yp8P//0352TjY1UZdHiXAs5IAwsxAO535pL4f+KJkVWgufPgq6/EIjHEZ/RWkU4A14ZytJNACd9ViUxcH3ukx6O0/ybP9XAQOlxpfWYbQwiJiHx6XT9x8z6cJh0Qih7h+qcQ1zyEoc9Y4hFDw8f6/qPUknULkYK3CUkvu63v/dmxZ9LI6prViFKyBNCaRIyyrVLAXQCxmScoSMhzx1pSThZZSikd9QSSjtYLilWwxPzr912ceHjxaKEK4yfvbhw/9/e/tm677a9UNNrjcJXHoE45o+kB0Ph1Izuf8vUvIIy/K3anL3ZOGICsfy2CgcUuFASITEKDDWAs//T0up13p3vMceOR3wELoOIFlmHkK0+v/9bXrjac9Fs3KTS+uoFTQTlDELCwxPFpAQHsJYCACB/82k+r5se5mBESkiEoLkuP5vaFTel022XHEIg4iIiCfyCRK8rIiIU65V3+v76Pec7N77/lyjRIkoUaJFKa2NMgbyib2aRi/g/HzVds8BDBSITZZKaQTYcaqI1iGEYBDe7d929X4sex0M2X/lZ+lxb2nryyqXBJVVYkZFYm1vbVMi59zhB4fyyCMiDp2ekEE6Bu9nP632wZqphSSGIBJElKp9yv/efUUzjSlWG+hcqdeoKBA1yliyzc8/2c/iEVPP7jfjddyfW6mlij8aMUKESELyIClz9yMIEsibs5l7gYl6KUBQkX7IokgJOgYGDLFhhz0H3HkSIIjtdhAngWRp8ORRoIhSZVxymcvquOYG99ynxUvvdZo244df5i3Sn6yQoAXQCAGiklGWgio2qUlbC1a62CqdtyJhSkUpt12DZF0KbLDXvfZbptxjTnhOtZfVec99P+iyV7+BgPoyv+9LW96k1ZWzBm4oWAGNjio7bS56YiwlWavniswdlSe6QHyhSoWTi6EUTyuRQTKjPE32UTlFt88zp6SafV/mSkEdr2v86oU1imuS8lxBqyUdtN5Z9oFJF0gvm0GoIZhhuBEe0+isqRw4pe8FUsYJPCgROIGKwwCeA2AWCAw/z+2rGYaNgaj9IhCgjgANqJ0B+SfArQD2DopigcP/tS6HJlQOTlKG4Igc5KzkXEYvn9N3OUonMhAwEIBH72X3w9x6lDuvMvoqHPq0sffybz4Gi99T912fAh4EPA74MQjgCqDtAQSAD5fQwVFCU+6UryR7fv/C2OnoIfSwbBQ9ih0rO7v74uGLceOgq6ZX3a4FTtKnEq5HTXvPuM+gZ7VCcX1JOUGgXmXUJ9UKDV6XrbuuVyxrDEiDxkgyaow6o8FoNO027TMXmPeYNVCKpbest5AtGthkzbGusSF7Ze/tl5A4yvOtaazJppv5x38rcMEJl2AzbOuePgw+xND4D38AV+J6bCQXDSRJ00wrppxbl2uNa+JfBM/DMi6Z88CGR17J67ldzpGrhJBIuDQiRMsK/aYffTFfq0aa636bsjKdWZtsxaa78L9UkApTrS689d5Hn8ILHHEUUYfI/8GNmeWUq/LaUZ30bD9d90w4GK661JV3eq8fq4FofRHlVV1T7Y8MgY4HISBkO5MVNSQRaKn4IkW1Uts1siQ3vS9PCIREUGI1jAAFOTggAfWI6DDgECXYQXPy8CRn8jdbjiQqpVImAzKhPCqpGtVXT7Rep3SbMWZkBCZpUiZtsha1CedxCZd0Wdfoa/8Oy5CO+SStXSQkowxZ6HKjuYnKJPNiCos6Wv1nw/7Z4+pTDnFL+xv9UInO2g1DzaLUlvOcsK3k3QS+kUikR9FBli5lm5wkpfKleZsddpk1B43GNljZZj3o/SsHZo2EIhADAASgkkjl9IcbOwxmO4q5PYTPT9GhcDQWT3b7w5Fp2S6BqcR+VmZNYYlURqp1BpvdGU42mP3JGsriqGD3ITPKjb2Mq1iSKM+zAQj4MzgA2NPTH3rANJ6Ugdp3f70NJue0ylloXVCOZaB1KV/NQw4UAAYpAAFZIIe57FDGJeeV8zC6+xnNRoDyZZlcUg6A3oH4SYEByGYDkirdrb368hcDHVAEEcyPWyB8YYM2eAEIAVp4BxBBw4YJHSpEkIT2PtTPjWYCCRq9gLD6eMB0TQDlj65noWOUDBCreiqE1WsBDP1OAMWqCQuQcSFBf83hQQEc4HoX3uWn8xo7A2K0piYpq0+R/ChWfemV7GlAyjNIiFVWFLKR+rdKSy/WdYjEIukkC/+ZWHzprq37GfD9UWQkvljEapKwczSmqCO6TKYYuIvpyGThNlzOhBBX7C9fABuRFhdW65yJi1+Ojl5loqVDqhWR3S/eVodhIcyEKTExxhL//0yJxYPgEDAiWmSfbxALKtgcxYQUblZSiQwSqES6psNNqUvsJpXcFihady5fAdtqby39ml6BZVsaz4oWLn4kHvPvi7/wC7ZCyCEyYkK5UDFAkrQCIgSmH400PIZRjIzc7OuATXUZlD05bJDh63hldCMd7mAHMq4xjHx+q8cvKNEl7+xwvHRfPBi3NS1FS3x5RJBHJCCwZbUCksyO6A0PpYecFFUJn7jRsTzesOJapss63K42wAXwowHgh5Cw2l9b1MzGN6xDF3ckBV7O3t0oEfC+F0EJKUMpbLqsfGUpgsiR0nA+HdRCVz7PCF2lmBIX6zvFImwwJfiMsh6ayuxnDNN1PYvuisy9RMFp/W2NCbARIbaI7CoyPYMktEAyoFEmU/7u24YXZMY2I79qbRKJ4PQpTSeVfTkQfVC1WVnmdvxqoDOrf5hfZmXK25XMRDrPSp5MVpPSYgZGMv5SNhLElyNCBlFUE7MRDBP0ZitoJSKOhCb4QQ30RWDnAzbVZ1A2JsQg55X4YTeQgg8oTJhDGC4Y6JCBi89KBsjBR+CNEhQ2yHWgEIvCrDurF7zHIVbgqYcNrO/uNklk169KhGLu3+87513mR93kUuc63DNc6Qh66frTEjHCIFuwITOYwFA7ZGrjGtYKLWA20+z2dB/lKIFmNKCm1UDk6Xpv0jc1yXq5VcyMtb2N10xN3bgzMSB+bWEQrr0bGOqdAKooLWyhWC0DSRBaS6ReTSK1bOdM1LhTV+N0GwoQSpFdw9hXzH9LTh8BZZ5Na2Bj+rhCjWcx+firegcZAmMA06DZHTyNDyWffjIqhTI333QMSg+zkojdL95088LNmCfv2U2SrIRjrdK4d3jbDGnVveHp7v+P6iv2hfc07GngnV1YoEFGIPEzoMXtuFmqQXITLECWuG3619yrRDDlIjPxuEv56dw1HTHE45zCW+rnTfEBeDxOQalpgcZN3q0NEzARaKQ/OYkismPE61GryxJJL3wUjwQenGn1n8lUWnkNmwsWwL78j9eTIKAGrITBB55WEKQlvE88Tje7bBbOp6SuibJLx+XE6aJ23QtaQHL5jdCrxzyaG2i96v/0+Fa7p8KaJTcRY/ZnAwG02f0xdU37rc/tGD4j2zaLhAHy3lOVOgn7nayzrb0maB+B8/6FvU2AMctyHjyBNhvlKSkzFY0Nx9lybyH6PSz1MbdSPECk3sPXx+VgpfdVMrzUbwJOM5+ZKTDBfFuDvvT+C22GpS77+PaaZgmZzwR6MjrOlk3ZK/5ZnusWXn8UEWQWq8tC8ft5aKDO9GKgrdHmrx0kYTujM2ZmM9ebut5M6nPdE9RmMvMjF9Qr76SYCxVcWfnf1KczxfJ7QeqICPRmSuShKFCb5jv3EezaA55xF9exqWCLEG08xyVhXrNHgNn0s8Yk6pNwRW1aOUGn17lLNPWKn4r/b97oevCevgxTdzFtR0MD6+m8mIrR9BMb490JxRGDxyoEq7P790QxBdfL3oVU9ghQm5YRE+TFhSSyEoeK7yjbtVl0CPRgfav78fGbzlNjx8HoX8R+0poKvtPYWjOGH2me656smSmm5g+2sNW+/L3rOtwEFUwNLVenpv3xowhjpp4L3lOYJ2XTy98jfQtV1COU3bnejXHikiwHxdtcfc+VzwVFtfErO+/AD46r7seHFWHF4EJIGCMrPUbMoFZvrWovfJnoxqp/X6j4zc89Aijj6cYi3hgo4JHhvVh99iHo9bS2KUhuLLDmNXAbX20eU7Ed/1M3G7e+4HrQG3eYlUzGe2H2Usc/e7sDjOhlH+kX5dvLxHv8QdPIwmlMf1yK9bimZjS6UyRwDHeeWd9/uaz3J6bzgLlDNpyazx7/8qW5T2tu48R16NiKC0avssY6y7wLGKOOGW0006xRpu9JnatJ/2XsBlTZTYo962gCh2Totd+EHEzGR3yzF0iFD/w6H2yNeQ02tYmp8yJs41yFzS5J4t4BInmGtTXrEbb8G/XMgq3xXWbtSH/ewU9Rm91uRzyuGfHFQTIdV4PL2709e9jE5gCRPGJ91ltTspi7r1idSntiN2eQ9JrXTAj64ifoRMWUzmvwQuJnCMBPkNoIxcz0qrSqBw9l3wT2TaiJ77TM9PalVY80LzkJVivjTYDRxHRc0r7LYcqfdC/sBPhLwnynst5rw4cNvAbBodGtkdQbuofHKgGesEZ6DCe+9+UB/tLhXmndt+GjgBCAVsm8hMNHpff3Xj+YzvLwswPZ4lYR2dJ9rO07MIvfPDh8l8r81wdjweC7ewHpqp7I3JbOpnuZZ2EC0ABzW6PqHFVeV/e74XSrwVd+gcakVx2l2/s7vZgFO4wIXNHW8PSf3jt9jW6Oj9+/eo6Ho+Zdio9e5w/YToDe0i080z+7CREDzulTOHywepCm/EmdRWdb/rblxJBNk/XRSotaJ5ngOH8b6QTSZm+Cjt1hyWqtMu4aXghjYf4QXpeP9JmmcVjeUFHDKAO6OhZIuz6XnAUybWADYSGvXBiXIwRWXrY9Olr4g5RpEeR4dZC1yP092iTGz7O7gSH/x70b9vocahqP78R89vj2HZhUZJsv46Y9NPhztn9/uECGOp32z7Mwod7e6kre6K19ZKxMxzzW9CCCatmZTfHbJS/h8M7kPEPfGHpWVQSf1KvTmWnPo5w+j7woOXKEksWO8EEuGaHhy6tRWmx3+SzPSJ0Fj2x33csZs13Bai0NAoc/qvF0ryxTnbV3jpCIJC7FOxPmvbASaG9mncBMdaOEmSVoSt1tDLdlrKA7WhqDogXzgynz/E3m/HuJbRpZ80/tf1w6/zb0eotm6YHc/63wWEcc/ALpdvWOAtyC5ZLZ52WPMgFa1CksdnK4K8yyxiXFqKZzihMMuZr4+cLR+HymeMbt80m2JpPV+SjMx455vrun7ubzIW4eLXy4fyo/ZIm9oEEzf8IE7DLAErlPteduE569AeQRZFJiSyiEm24WK1T1nNZhNcB4UsNI75PugC35Obxw3vtAgQqz5+nrgDlTUs57ZWNuoWIhJ6udnrK3L044whei5lF8mDV3EUKfhOjc3FVf8aB0rhL7xpUb/pGp41wtfUMzCXIDUxDQCij4r6/2or+dl3ztKHMuC2TrtXVOdRoCJsRqAJBESnJJH1W0MMcSe9wIJIhw4kkiS+XpKkc4znmusKyH0WMAxsYf9DHGhGYOhOUXYpo/Hy9JEEyODXdsJtNcYJlV1tgDAwEiDDiIUfIPPuB/fMqZXJoWg/O8z6/s5SjH6ePP/Iv7cn/OAzyYR6fCeIwnOJZWgF/VXohzvZfmBq+ca7wu7AHvzs0+WFsmvrJ9yos2drIru6e22BPzdNYNbkqpj/WETdkiRT1CMBn04nsRVBhNb7KAU++/YzBZE43P8nu4+oGPZLEKrxIIKeMZK/84bdZBsW/sxJZHdzz/HRaJY+SP63vGF7RsJd9eDoEfCRHtXttVNuGjjkR3h7sfoaYrP4sn9CKSoWf545Hz5PH8bYUS3bo2ZY9PX0SXROcjSN49szt8b6ARW8pNDgBPGlORUKDbpw1ZxBe6rRPxEZKrTIEECbpmIZUaMFmM4hJoPDMC9fZNYDzSD03AE7u8Ay9xIS8h2OOPJH6v4pvwkPD4Ag/D0n2kN7IJFmbFCdwBQXwBPkFkyG0ZmaNUAjrUk3RrdIf/T2bUNo/hDynzylpmf1nEMKz5S31iSmMb2sCmMakhCPOkTZU6hi3HjjMYIIIjVPJX/i0wKj+Ob/VIHI+PFKIWlSkLx8qWghSl5/9ELfWfCRJas2Q1MUKu8iJF6KXE27ss+lvtc5Nusp3MXpRagYPK+yv3LE1MLRLPTSuq2JAqzDAFiBAo9Cw8RSOMN9hSGHoTTLL5AsoMIhVkbmIFgDgp70s55rnc6t75oXTn7ZcmpevMuXxKi4RXeas0uhDwImpk6zbXUhMaAaZ4nU/BE+6ujTk3m+piE7IOX1EKbYC93Am8tRUAtv1ebA1o8Zjr1JDjKRxvxlOxF/ZxYPsBIJOPorJVZuhPLhvQEPVVsLCFJocK/C0Q2/oYP7LBih00EtlSehafe+CjEB2m738enqxccgWhAuycLDlkiRxKayogzJNfw2q18X/V3ERS6s3R2GrPjg1V1tn+6iv+zCM+HoyD/8iHDkfxWHURE5u4SWdGYA6bvarTk9wJeGkCYbhUJ55PTHdBCq2kiaUhuQpzevrJ2mguxl3Y0dGc9PW7aURCS7+yqXdK6gQ3S9hX5BLZpYQrRGWRQD2JBBe6davS50hk74Acm9/B23mos81J03g9ngAFdiPaupRWBbd1X5TOBq7V48MGoiTZqAVU3IqO/5akNPt9ijQfJcfH4fkBRv5PKVFkHiVUJy2daVmM7Oe5r3A1JXaKpZZXtsCmuRXeBsqSaoiiKT7C11QUuvRivHRr/bxNhZ3Q45F9AW2u3IYq+20gkmqPfh8qvQZtbp1p7UKPMWY4PPp4JoorAyEyKKOPARa2HQVxx4dQIkh08RDIHh0e36jkHVRzkcc8oZU2PrgPTPQzpestc2XSMg+zyyygYZEX2Mx2QghlDwx00MUIM2xwxJ9kdpFJIWUc5jSN3KWZp3T0DxJI8dXBT68lqRs89bORr1qKrxfzPt/zU35+zXH45T7njzGPQlZGO0pDeV/BT4Kggay5WrITRjrjJcW5MOLgOBjR/l9FdKgeiFkW4sJGpolUM6h784C96rkRxNUsDvvaLWwovf0Qs65a8CsPphATGGlkkUcVbQyxxhZX7SwJYHBa/KVBv9C6NyJykJdY1SQ8LYAKzwbABMBGvBE2JwUTNwn6OcGgAg4EBwroOQIE6b2zTPUBAo71PSgBQzM8ZJBj+uKzJwHQl3UgYAy8zcWyrhP8CbtnsIlgL3ue5SLM51GOa4KuBnF5tzW+2PbgCd96Fwv1rTsj5N4Ozv1d6t04KXUt1h4jPzFb5CtnJaZ3z0T49pi9Ca0CPvWpFayYnc5vMD79NP39H9/ICK2NRNgxVJqV+UHEauW88XevBjKP+RfNXJgzv/HafTyMPd6Ygw9h84DwZev+p9hSKZ7gv02Xv/4OeRoTPsdQ/QX3d7Utd8KVhs92922L/P5jPxdddxlRv6W0bgPU62VbkDukfxW+KMRwLPN3zdFrqC8K4nJZRCNBvIIVv2niVYf0U2KLX3O9Hs3ZmQg/qN4jBuA+/qgue0ZuzbzfF/mLcs+a7ldXq+KGuptykQWavSHIb95nAaifaHBDwZIOxtV6hG+e3osS/KdfklviexWnlYeUt2xvkgmoTT4u4SnLyntBQgy3KwxYGBNuV+HswXVYHJIK26ZA4OIuxTB449zjGlp7FRlX7a16+1vkcwF+sLvG8L0WpixKdX4HQKsn8KUcikbX7PoOtR3qI7HlUwZfcxaUdhdbFnX0I7oG2+/FjIAE/5oBaQxVBZeGiKd+PNDPJK2L3Fx6tT3pnsoxUtBGnqhS4oF7P/IEDZJX8KmrzZdTsuGDMWIUOQRAGkBYBx1XLq5He3vjSFNVIOEMvO3nVqZwDpcMFFEDnleVyPvRvyakuXqlHF82U8bvtdOdwtpByLfjnkq9bm/BvqorTbVLhPJFrv9W+rNl2fmrg+ef5HGjJtReBuuKCwtprFbmF14J62t9jO9D/l+wIwT27DQ1cPGRGt/q16lZbV3/QLkEwvef3zyX6yyyX09TAxcf6/+xdV/phWBSy+ZdesHvkLr2Uapmjo63zt+j9jwN1tY+sjXZnv/1Ly/HNZBF4T//F+Kg2aeqnv/Wdnn1072MGnXbF2Rc0fezaT3mW1e3ZkZz0uqDEnl1Gw2Zi1ti/mt7ylofWfhUS9Y9fJn/fKtVT5Gvh909dCd06rR1lP9L3+7b7liPk3LWvq6inunVbNN6hI/Ix574gfv9K8xhdzABpT95knqJuRnYFWfzH6LqP+tRRNHVbdjIxceelcZjquZ+o9b+/Lth/ISfkTDflsUP3DW5CYA6/ZVdFEOwVJ5cfCOYzXvU+jPchNQfH0t7mWXnJ3HxVcBzhaLwsuvzYTZjPW+ly6Oru7hsVC/3fQPclhNIQ8vfm4u//Sd5TuLUjX0tzIwp/678dyQmsnD2WjS+aBbL+mcierZ8/FpZy2NGbEZiN+JOXE3OF2X+Mhe/n6fJc73TYRnih+aYUgzWV6qHDPciDXjDxqRocW9551mG/M7YMJbay//gWyq97fjMzPa1vWM7lXmlJtbuz65aExlc3AkN3njltutXebeV128V9SHtfXh2ziqhJtgK4VZWD8Gks+GlNboqvSx6Qrr+n797w0fI4xSKXwfy6kj1IeVWybaK62GtKDNmwxkKqb0Sy340HEcjf2KpXLksAXKjnN9usPOTjZ/OPrryzGEwbkNuBeGKuGES5LpWG4zrC+1x7r0Qa/GtcBFUbWFcNjS8JqeZlfriLNp8BkQnXuUe92OhHx8pfwMjv8vHVXJgYb2pvz2qNX5n/nJo1TZ/0jQaT2j2RiJff8dRnuHfeA3p/6mrAD9S5AaYdTkb89v1T6ftOL5zufM3MP/vH8rwH17Y2K5vox+jbfbMnPlY+JOUM3XSUBM3uUrEtETsODbW92fWPzZ+3k9O/mIn08OelzPi2js4/cQ7u/02ahfv6/838vL/ar/fY3n9HZ87EnH+83Lay3qP57LLwbkPF1tYeKIl5HdHdLDU5gjk8GoQDyG2a/VQi4JSihCiSCIFno6lax3XqfRCL1eZwIwlHLJypmPoDINMV7PLyvM9OFi4yMViMWhoODgXw2MuZ/VvV+qR2cmD5nk6sb3U+H7VxZMmz393e78TKnzIKrOXxyv6ZPD7wsibXFw2rvOFjo0Gh+FJe+APnYn4+pbof9Tk7f7W2u4f88v+tfO6/7yuy/vf0UJtE2q+/8kfzteIBu/DUw4fpFPldYsHfRAP+Tl22xt77J/e6w9eN+uP25yfvt20GU6Vzu13dU6cyTRw0lVChYiIREOoEeoGqEalX9wEGwAdMZNoYGLtUX64u2tmELWo0siQwRB+tpldW4Ky9UJGg4gDCWvBij8llUIupuAleQUehGElVzQOdK1ckZJxKjAQjOqUSgoOiFm+jaoHw1n9Ig1iDczZAs2GsMJd4CzzGyr4wqYK0xDlmyFcEl1HQuQEymyI4hUdSSZhYYQmJGOh/iSyyKz9CdI6BOOGTCMwq0E+omiSvfYso6DPKVKsDvTMAESkgaGbOVoNF0p0BBo0EChBwQbKdvsL9lkqRkkJSJI5hHko4TUiiIpoYi5sT1qR8ulTdCCX+G1pDqaugBJKV/M1dqKyV+ZkXmBIYpDAI4MC4ohK6okUWKkUEJXdxqqYwyJ4MAd2P61uGgvGalRMDwuj0gpsyzJZjsYZrRJMMstKFSiaqhkx0x2vs7u0LiIZOsxsRdEyB7Myz2qkzbMGjAXgbabYPaJ5LpEDHjLLLI1cqot5nCEw2S5fbzWINV4E5yUvg1jnVRCvMQ1pr3u3lt+3E9gusJV/shvEHqLA9kZB7I+C+HkOGIecBJFqGDEMMK3g5tJARynKENQaRj6MfCty3HRtmlkUdMwdCJoNQw0jMwdiXENFVrZhCM+gI2HRopEgQVWD07VSDZtSkHqUstujaKY4ilL2RNmUfdPQzv4cqGYJUdRyEG+zpTkks0xRdHI4im6ORGHkaBS9HIuin+N4MVmRSkSknYKUF4OkN78HtjDq1oB0j4JkJIpGRmlGjIXRuAZGVxQ661FINqj5ezYSZWcVM2Al/lwdGejkZP13m4kBEvwIuyQYoUAgiKWZsTQtluYEnChjDrLwmOMp9cBT9jVjDhOCGkqS1PPtFi3EC2SJLul7Jnw0Bse4bzSYvowjh02oQoWIIjD0Y3QVVreAOyjJ1B1MNaEgwQ/QRHdJLTQ9W2C9l+tTH0uQd/eXF9ORykCMUrEVYwUlooBRn8VLPTu1wpLUj7vAm9vh94tlrVCEVMAe26+UTqAkONeYLiIvONdtt656AUPUCHvDO7Z1Vy147z/E0geJSupe4QoaSj3BAbXADhaUGAOGMBFbooVxpaXkagsj/yG6a+w9Qd3KMIrpCdZy/Y5GyqBSfcEkW4klVjHve0TnLWormURr65O0kDL+mv1lq7cVSrlkgk9uscRbZ59VriJjhaVxuX/3H7b+6621dhYpxAJ1JqvKGm+W3y3kDPLtk3wHFFG8CE9i3SnHpmCELXa9UU54wZ7bjrRz1YjXiNZABQIQQwr0LDwrBgyBtF/Oqb8LFJNpLqzaPhz27tL7jHf0z1t9Lb8DjADl+rl+XBvfH2bQd6PL6pdVeZv7svzE7IZe2+zM7BC6tvcXg3PhGeGODzEVN3ZflT6LXcX6PCOfMbaeahYzusr9rF+R8WCjxlHp3P2hUSbGrPuZvgGhA3D6o1UfO93QOv3zGrqZrvy5+i69yn2iyFwnf/DpEnNRHMO6/Zf+esRTMcp8uq0yFs7COqsozHIb0bDtgDRGKVbpLHO5voZrGjBm2JgNEuX07Cnx7WBCIO48Jm07WdxSChLIoLqozkvvMPVqc7HaTqZ49H4e9J8Q4iH1CDVDY8Lh7XvIIlexcjIV2eW+qWr2FCpkd+IZyz3K2ffPccFqa7iitu7ay6qmvtCgMD2Y99DJ+wN012cn6dWTR8XkMSUx7l8y6mY19I4A3jz6woopot5UvS/s40U/dP7iKMwA1hPPbhKopRjJKc4oJVKSS0Wp+vn6E1ZHRBQ9B3WqEEwsbBxcKB4+ASERMQxOQkoWZFU0TGN23m5oPsjFvq31/AWlabgMHAjEcz1bqfmg9EX0/wBDKmB+palmXKTJkClLgWqX1LqszhVXXXdDvZsa3NLotjvu+qRbr35Dvhj21YhRY8ZNxGTN11j/ARFeXhrZ07Z4pd1rHd546128Lzn3AMLQ+8VswFwDSPZO5wKdfV/2VJ3TvwE47HiHRYmo8uQqtieulXS8AQHZ7nONhkajMficClj2IdNFy4N8xzPd8J708dmyFauNT9as+2vDP4IQ1gAQ2Aedpv2IjQ4YA3d7k+EsA6Br4NpktwI+5n32ywnWp5ysvGbfSjGSkKvYnrhW0rGBFPdj9rgpOEkFSGu7LI2LloGWCVktx64gzk48hmtH6+CjDsy8s7CeOOG2KsowR3ved0cDuwowJ58+gBA5+GsqXrNIkyFTVhRsAAlHMx8kqqnSZMiUhSdXgWJ74lpJx5TPFWDrxEhCrmJ74lpJRwfhvNLkf80wgcyCM0NEVSqAr1Y1XFLrsjpXXHXdDfVuanBLo9vuuOuTbr36Dfli2FcjRo0ZNxGTtX2N9Q76PYF270YWzrQROSi8PfbaJ1mKVAelOSQdSIZM2cByQOSCypOvQKEiMMXg0OgYmFjYOLh4+ESkZORUdPQMyhlVMKtkYWVj5+BUxcWtRq16DRo18Wjm1aJNu3kLjlu05JTTzjhr2YpVa3GzKvxhG3MWLAULAZcMIUUmJBQ0DKwsFHQ1ajEw1WNh4+DhExASadBIrCmWqmIstCzLsTa1vJMqiIQ77rrnvgceehSPR1JvPjZb29aIJ4CZd3fcdc99Dzz0KB4XeKQDH7It6+mwZA3biDFrHUuwd2Ljsh6fgyLScnJzu6rWCkkRmGJwCEioQF9EPCrThFjuidqIiJooBS4uLi4uLi4u7gM32OB35kd2G9ab8UGgV18fu9ev6gsQpEqt0eqQnjJgmmE5XhAl2WiKklkoYhGP6AkyuUKpUmuifQTMdCUG5loN9706tCnbayF2xP7U38AMTB4+fJCCohmW4wWxDbwebhx44anwAND0thhyIghumnccELb7eNC6ZmfRT/o2UBwO1zimD+4KTT7Ru4GloUXxcgeb5vzrt7WbI9LGdLfHXvskS5HqoDSHpAPJkCkbWA6IXFB58hUoVASmGBwaHQMTCxsHFw+fiJSMnIqOnkE5owpmlSysbOwcnKq4uNWoVa9BoyYezbxatGk3b8Fxi5acctoZZy1bsWotbo4kbGPOgqVgIeCSIaRIlSETEgoaBlYWAgq6GrUYmOqxcfDwCQiJNGgk1qRNeyxV+HkBglSpNVod0lMGTDMsxwuiJBtNilwJFC9Jd4z+ASYYwFyu9PWD5Uqz39EDXSdGtAUdU621lSDMC5KsHUc46CibufBHqhzSrpjRRYgAden2LhHq7W/OJ4xwiA6aqKFsiXCJRo5SWV6SV1OQ60oiPoI4GVpjcuvn41Bv1L0SPRTesm9WkENoRJU4xLChtrR4J7ToBLMsANXJM0RTNB4hj+pRwBb4tz7ZonKVmyZOiWeZhlnv621AfmDlG7aUTE53QR07YpMA37wGeqoJOVyInIhpygSHlJGwaPJ3FRFb9nEpAMPO7J2J044tMciBFlIEL1KJIhrpmdtclmxCCV4oU5pVGN9TZQbrPOVAF0MbT+HYgiteCjxVl21CNCeIMO98juGUp4FOncWJ+zMzeVq0U2S2LvY+keCAS6ZzOnyxnNitwpMc8YxnODaj43hUeI3TVHIxHjqgJ8Nnnk7keFY9L4qedyDQh8GLz/r0GG1MBmPPZn7O/tf/wJ9YmtpNUmCZg91hBQVWuY4ofL4aZY3vpFifuKt/Mxs8Iod/bzNcISHDjoFIcQORUcIbTXUYaZZSnXxzKNa093hfN9dcc80111xzzTXX7Foret+iENreFaOrYDTAc8PVJ9fg1ed0dAO8DQ/5gf/4r//5vyXrrPeUp01imA0UX/FVv/WHeKrUrZZTh7qIKXjpVFTtINptdDDgNGwicMBUOFbAfEXwikfjXuk2RKy/Vv/uBP5BW0Ar6diGGu+v25wVZcWjxDm2QqXZlqF4b0PkiN4Z+PK3wDduepXcwZr5UXaH+e1YGbXR5O8A+GTyEZgBdoH5YHfYY699kqVIdVCaQ9KBZMiUDSwHRC6oPPkKFCoCUwyeB63orHRhYGJh4+Di4RORkpFT0dEzKGdUwayShZWNnYNTFRe3GrXqNWjUxKOZV8tdK4ABbdR2zFtw3KIlp5x2xlnLVqxac3P+FkgCt91x1z33PfDQo3g8AP0BzIe2MWfBUrAQcMkQUmTIhISChoGVJSfPfqlIy4l/xRXrSjmsFNocEWAqZV7poUYtBqZ6LGwcPHwCQiINGok13fYyhuOrbIcPLcPJOUILeSsbmsn7Nyhjl+2SLRwcHBwcHBwcnEuOqkMO8xrmxYsXr0kvXsksmeD85QXMcm6o3cPz2kNzHJrVtg7Uhs7SCfpMmLPikhe+XsjVXs20dwuIsmO4Je79ghrYshNxwqeVdMOqmo7DFmw2bNmF/S7FUbjWEBdn2/MCBKlSa7Q6pKcMmGZYjhdESTaaoiS7pzzpypWRbGZtCzYbtuzC/l/RwPuJDfg4P0O3shZyNdCVuQYO90hGmm3ofZ3T3TbImhckW0iZ6Bw7tYVX2r3W4Y233sX7mdZUvEVEREREREREREQu3gIbHXAChsqVwL7zz0pxP18qgIXFn4/iS5NgAh92hH4WtKNNhlmQ0UJmqEp/lgpYT2V39Dnn5Iowu7QQyYJ1P0nnynwtB/q1Vg4zBqBBhHLWt7EWqMYXKzf9z0wh0OGCDg7mb+BcSq21weDMtFQK/hzhob/8C7V9w8sGoXlIOTFYQAaNGjRkkIAYBeBcjDxwaiIHXMaRBc6FyADnvCff8S3fsCN9jW+YwiQmmnEIF6mhmioufI7DChOYaAVY0scSQcJFNcigDyqCMTAaIxGk9PcdZH5GGZ11P+hM/R1mL2jTSqrNGuvB2BeTiMMBLcuFZ9zOQrlcx9qgZdQfwkXQuZo/EgvQTAJXBm2qR0FMjwKZGQU2Lwra3cAWYhAvs3KHb9EQ9Xb0/wVYjZzYoFI48vc0R+Ia9ELpr5hbhex52d1ly+5IOBqPy071QE/F3eW3e5JLzAv2BRATkSTrmcTK4gVFh7JHTCQFfwp6PPeTEnMS2EVCyy4qLBt8vyqJCHy2xw/3rUjcxERLZVRvr9Or8bDp1XbZWS3kQQ2Z0Wzhhq0ytXlRaS2p3SGsbVPmHPdZWGIn7LIF9ccIVkbC+7YKXsGF9sNjwXuwS7yAfP7jUuh4Ablj5P2xQXmyZOPpHTfof7CkCVwwcCI+YP7J2UMYtP6Y9c2GtRa73cALvGTMyK6LTDZqwaYs4p/5zbChs2hb92dRfS+3Wuee8KXMmgSCDQqNp5B/9dSEG/IHfU+W+5rkGX/p8MALN4B5TaL1BYZpR7CPtFmZhkfoskwzrWn6Q7l0hppTKRV7+ITs0lh3KmtGm0fvOKrGVp1C2RuI7hNX4T7zw/HdE34AfispIYhPjkw5VE4LINkBd5uIIiLbdgg7Hm0mwBIiU+z232nZz+Jl9Ag+hl4V0HlRDpI00tJpNHTdV8OpYZTkvXJatBntXt2iQ1xdzmRcy2X0p2vl9XYuZL+g+lNzLSOOeZKIs2XjspBGr2V7Rfl2zf7Wsyy69MTjoZsAcoDxGsvPNWcIC+Prb5OMGVJXBjnHyrQn8CURO/OusfAxcOKG4CZwAip4TNwlSzokWeGUogviqw2XoFCu3FTwyZJJmSJx4inEZ55UtHykobQQG6yf6z1gzotMPfmIAjG4+eXn1OnZEPFQ77sjLFGte8floalP667mXDF4J/n8C30nu8ziADWHl6GcEODbmYswHifI/0K5jw8E7M9moC/oAbgPeCIYAgMmaApOEJYJYpYVt2XdQ29WsmSVt5yrcHng+0KVL09Q4x+Uv/yhCwHqI5AbxImIZEdEWojyQqaJeN+2lTcbiELlzcYO7hbKqDJFjTRa+NGBjp7KMO3Iw03sw4Sx7uw+hh2279sRJZ1Wt0vJHjG7RyJdzRHiuFsxxKaQqlEq+CoV1SotbhbSNUlHtMrEtcrDvCrCtyqPG0mBaVWJZFWFc1XN8CqSyVUU8VUtc6sYTq5iuVvJsbiaz9xqMZxVJ9xVJz2rpbBXXWRX3Vyt9PCt1lFYrYscQICAgQABCsYwco4IR4angwgQoJtvWIAtkhbpEMlLyKQ4GhOaDj3MrTWhZzeYNYTs4jNi2+AOXIdRh2anK31AfXAfbgARMFCHHW7LbTpisLj2RPC9zmDK6VZEu2/7JIfy6YY7yjpGOkM7A58VnlWYVZijmWf6juA86Y1InELyXIDHYRCrFlZOoALo3P+nyw2r5BVSRiraoPhCoWK5yhWqJlu+UttAq9ZbvUH3EmvXWbcQMwAcBiD2/bDHjzN+xeNwbDyJKHq4SORoYIsrW+Qt1jZ7O6Nd127uQHbVSTW9B05UDvBPmU/ZTlWdcp2xyhQyraxcZpZZ5Eq5SV4pd44gRmgj2hH9KH7UNaYdKx8znoVejBxnjbPHtePV55jn5OfLzpsvYC5wL4gvaC5oJ+gTvAnpZPy676RoSjAlm/aZhk2jZoJnkmcyZ9Pn3s67zEfN4xbeLwRfdLkcdBlxNef68vUXN6IXgxYxf/os5dxxvZN8d/vdvffSVuxXPovdvwWifX3fMf6OMqxwJeG5cp0Rt2ilull3WG3LYJ47yje0TuwW+2qYT3klfk+Pvdhn8gP8lYD43TBb7m39P+Cf28ofgGb6etGOw48GuzZIm/xyf/ux8bopIfkDJT17pgpj0Bj9uwz6xJ8nT1oBgOsujxZA2YzdeGGi6pZDAs+6b5oFPpMrft2pXzzR463VevTeHnTbtA8AXqZa5SuUpbobdP3mgug1gTtWr4wdfYzB+gN9LX7zwH46CQHGP0kFwFcDoJ3ebQB4AUQgIHAgAFYjAmBT4CuurAgEFHDDBckq8QKALrqWzxJwYE5RSgHpROGPC9awoEMFAQbWBgAIQCCAO9Re/ZjtS/mY7fLkmG0T2LSNS1BSNHR0uN8xW6nzZ7ekg5ZtQcyJAdEckvztemwOF5z9ysy+Z54NJNDPv/iyXEPfCzmV8+09chQBUk2okUnmxbBBo5Wb3y9tqKGtmDrJ8FZ8Ux1PjuZyHudV3mcgc1ntEIJC8Mgpt8ASAAFsAgJQgA5M4IMQVDABNmiEAjMyK1uNdtGPKBIlo2xUiNeKu6Lui7qtSaSqG0Bb6yLbO/FPbbw5nro8yet05mvmG7//JuMAKjCB4w3CxwLaKyMW/+jPRN2Muh31MOrJkzhTPHwJRPg4OPKlzDPs+W76098pktoHwG8+HPBR9KHcX/8uQAZQ6igc88tPyPzlG/on9q5rf4Vtx0NyJi1mrWMwK51d5JKWp+rrWXXUEKCeGiQUmaWzja1h+tRZqzCNZnfoR9Od2lV29q62a4T+82hjxcFLAAQlUFYdFemoqsEmGWjKzBW1MXQzRlpj7BZMZGOqDU6ycZaDi1xc5eGlmgBVhFpBmBbCtRKhncictYAdNpJgS76S5mHSHWKXw7ljBdl2U+QNdltPsTc56BUO+4ByH3LER9zwC/UOc9Ov3PcHD/zJQ3/xyFle1l9ttdGaXPcxCKkaQOqAhQjA6oFVA7BpBFF74vjKDQjfIJg9H9hmlO1t++zeVh/6NtvamLqnW+flPeW7PC3y540VDm6yVAmrmHdS86aqEairOikJi/UYJGt6aa/qWTY9umstqoEdXOgHz9iwpdeFDbI4psLnHPKqagl/94l5p9J5xGOIpzkR8Os56pXtjiaAWAUcVgNUM3Bas9aCJgpWTQxsIO/IWJHHT7/WOBrjygkZmJQnJ5GenSC+y5GFUx2ljRSd15fOiKB55B5VKE9dijlTrqoB+fiaGjTfaQutasmltWkXWljZW2aKWJkre9r/O7ta2Ko1hGC/+g4rJNScSEsNWvvFvwfm2639w9di6beXsZd7vJBDPnWhrdHmOrbC/jh3J4wmN94G72S+srQdTu/OuX1vmcHTyKgoqx7T0/0Ew+39epJJV4m+uvVOMbmF9c4+6/zzLLH+mZD8cwgMHTbnAqMWpIXTrbBLWPCKMg2jmLiMX5nZYZxU+lz01ET+Gj3RzBuBQPfI4s6jlt88GxJYB/abKf0gm5J5FWGKMYZ5K4XPOFizlxTk5N5iSlOZyPv/av7k1JV5GVmZQ2JN+aZverzv4x3ZvIaI/BPNre1tLdMzJaWuG2wG1TW1dfUNjZ5kYmP99LB/q1OPiyAgJqGioaXLwxBXClmVkFMZeVVQUxMtDdCWhY6G6GqEnsZYysFKBzbriLVObNEZe2m4W4KPGnzV4qcOT8X4qydEE0EaSbKNnbaTbAdcR8hwlEzHyHKcPGfId5YCj7HXW+yzkf3e5oB3OONLztrGOV9x3nbq/MQVu2l0jNuOc8cJ7jpJs7954hxPnffMBc9d1F4Cr0sIIsQWAF8SANza3NblsT6vDRE2FtJW2M5i9hZ3c4xdJdwSy1aKszRXBYExYNtthu3mC9vPwAfWFJxknX5sUaqiUCvClUQqi/rcNV/I+FL2PNZT0BNRk+DTEipbvhWUVASkSonJ8XCxaXDoGMQDArAcGAgKeHA3XJCsIgbgA4C6FwAK6QM4F+CWAD4PuBXATQFuDfABgNsA/DfgtoCcCHA7QD4BcHtAvQDgDoBeImWo8AR0uCJM/9OCZhbd/HMEDtwN4JnnA8zvCOiCep3TyyB3UcCKWXIE2pgZwMlAQhsnyUGwGV6nAb4Fb8nmCYlBVTgFMj4QbC7HqDk7LLlAprw8qmICNw8ORjb9AfvG41Ax28mB/WXTzc+bWI7UorGljTrJzStPx1BJQEibZ23wBUAayNpx6MWPqJMZsprzFyh/MW9U4TfJS4A9eRnTn5i6FqZBixjWtCEp3jFtREwNyumbtz0NCf5FW0tWGXHedlMQxvSyKGuBzLeECFQ6jvip8k2FCYuJcrE9dWL/RGBM00EgS8k7TB0A42Iv7q2EceiIErAMbChdji6DxfQkH4SnHuU9BQKISWNKEIZgQlQ4UFQQdvtQFIgcuCJ9dAAHD9eAsHoyPwUk2ZC9eMW2F4X5QBaEt3q0DdkOk1AhWo88IIjRmEUovdKy5IX5uBooe5qBFiC5FCUpfH8qwbUt6ewTn3A6BZDX3XRqub3wJVtrA9NWcPJ14ZcEW6dgNFGKawLAFX34sNRUc406dAFBnXYMp6S2zcW0/api4QYK0BUncqtA2SmkLLMuuFw09Kknykd9hL+rX+PpA3oqqABW3eFUwIzddKC88e2GG18y7jCWmfW1k5BgoUoAz3BOO2sdYuvD8HsPoOgO+I44E7toX0GpdS2TmTDhiwtBrh2ZTtfjmcs4lcQ0YW7knW6aFX21HWQ1VkBEM6fQtqZSmQcKLmyeoun1lqh/HsBNqaxotGDy6TucFxDujyZR9r2nXXFhLOZ3epKYObN6l7D3MBbUOksnz1b6LyD+8Xy6rutkQ6gQd8hCOI+NgVGHGUKcheA+8nZ72Lv1MTBdzOelfrwVt+ZXvg9lG6QBslDOa5+qUhbrIRiGzWMukxPeyMtYFndFWtasXCInhEwchoZzBYUvlMVmSKUfNWTCYCQxiN17IcQiQAe8aWiM9OvONAKPmYwli0nINA3bo8o5NigckSQ4oKS3LfKlnkya4FpLhFskszUaXVGG5fdsZpdmQ/48/58H2IQ2SiFA0ugDt5zAFYRE0DfRHKFiOqBSkCUJ7gFolEEfvj62bCg7E4q/gUjbGIFN6e4K2DbVhNCJ3kbqRLRp0ZbbsLEMwG6rnI2CrcR8Z5b5eIJExz8dFnPJGagAgBGZbYrvL8ybfW7O2JI28TyjwA/YvGzOukQ0f1MgN5evk8wfrjOln76TCr0Dhi2n44fy7ecnbNTOwRLGwL3ALP7G/P2kS0TQufDU26DCtiHy6qYhW/PquHaybdgWdKsfpQ+2po6RG74xvl+GF+O9Bt/wRJedDVhRG4xa7DaJf/YxUuvnAxNTUfjl6+k1SmyoVPcsZGjShCmEg5iCROsub7ioqcTeBhaZ+skuFgKRYaNjjatem8RzIXrnfPSdrV1ZTiy96ESbQlQ+rRe128VH6JoYWgknUKWQ0wNzKxc+mm6XvsgiTJU867dNxLprKiyl7DZPoTsdKIvYj1bHwUpIW28lhOVuwmp5uzO9NZkDqIPjyufMmnnCbRQROwgE1jFt5bkk2MPTjnAbtKuKVgSJHIFV8eiXPNI3uoAKva6f3hKXjOmmbtt5b5MVCNdQkaVoxct1pdkOO32xMJjN6Qml1MG8aGJX0rwSsMlH6uW73QTkAY7i90b9/h15yAs6B8DDQnwDeknbb4LX7Pt4BBPUo42QscdPf2dr6ReAqsUm+C01rzGiQYXv7rJjm7xj0nK6SyLa+oYAi3XY3o0dQgcvnmYgTcebUfTM2JhAfzOlLadBChJI5N26tIPOsAUbSiLZ9LTZbk2godlbSyaHnwiFqklUgj09qTJ/TO8UGU54uc5I8dFlbOFRSSM3viyjzWb+0gILsQlpyolffTdorD1sRoamVvggui3H2o6tH4H+E66OrG4lwj007FBTT+lPCCNWmkr00O4R0iNcuSziNcGOc7BNkLDEbfA9uLw1U5IGVYYlBn68osmiAHC9FJ6ooICp3MWb4vyaibfkDql+GVKwF4eGgxq6ZXRk5xoiE9oNOWQm4zCuEtIDetfloQwBnEsh4AM7xxQ/TAAM2R3t7SfVgBSVUdzuGkOjGVfP1kuasLiNXojvC0fKt99lOZ2PzJI6M5QKf7ivbF6ilCmWO9PgCPFuXLVwCVamefi32kX0jqEQG+nCGFzzifm64Dl6nzRRWgygnEtgkhnzRYvacVkggpn7nnSbxLQeY44hNmABadgo8BKMKMmKkAGon08scqNgquDD2DgpITXEvdiAuu5nJq5mxWv2fipeXFcyW/waIURzM7FfjORr9IMEBG7BZjrMBGluasc0IHzfqcjMOVfSU0rs4G+f5sQ30l85lyZ/WSuWmA2S4jQ/POcTOZrruk3A1mucHLxc1AF4rfEwFsuaD9OM+MxoC1hAiOPO8m75+zAyXFUWBXQ2MwnCNyK+/u1blkvkAP2sH95f4RNIQz1hNLZmxJhOl+vXecFVe+/feegCI1fCkRFQmWEqqDkB+O/cYHNHIJGYLtwYnDNHnvMRLeLD86708R7acT82kuYLAU3olNeGbLgUJzY1msY1JHC3/VnpqgU9iLO7PMoJepNqMn5sUYYkyLVWhGfLe8BrXI5gtWXUQq+SiKRWQ8NnfzD32Cop9mb0KolRar2BjMvO6GbWkuXKwGrk9hy8twgbqkGrybJWM62Ri1mL0wW4YC01U9y1xeEqrQLRNHjGXpUXdQ/c71ztrQl6+5CPb1kRBy26/MMbvo0ieXp7COq4xBWepk31hLnk6QEwRhAeeSvxAz1BYmMFwUKI0/LWFnQepo0YKllb+fBdgtTH13RYWzzuiVnf/lrxSS5DpCHOlNbel0/mbhYzkfIRlUgfRH54vfVKZXJcyj8vK87BPNcCFYSMhmYSk+VoxlPdFnyDDBCUsd6cJ3mOoo0h+VOreArAgJRvrHEmBDXAy5VfN7ATxk74h87hVPlICHCmWsPLQsqiyF7pVySpn3S03nsAVtYxnWtzFaW4TZT3gAFMNG9SKZa7ffUcA48Xt07fqrreHhMjGOp6aaLC5ZVtofGpXe6CdaFLWnyx2HhtXsgqKBVyL85ajKmW8zgfp+7ve2unEOLhUhtetIBOlTyalNVVM+J1gD087ht3z7ibWin9cWuol71t6ZAN6FB9uzWWUusMCQce7wi16uOLZT8AJJe9a7FiiX+45gUuSX2cFIn+2YtOeRkGh+O0VykWr7dv6+78VpEiv65QR9OfEz9/eT95e4Ygvrh7ib3Wipe/I7XmBaONW0ncaxnZ6g9vgPnUwbC1r8ZGGknEry/ijgwt8oLfqaT5+Rnnr8vvqfCQcCpm2ISQMw0/ubP3lt1TmHwBq+inGepkP280lrZoZsnKEVACEODqAjviV+5N42tiRkYOTqaZMy82IFaiSHBI9PUAg6yKZOFAwTsKJ8gVkKzDijU/ZUAy29AZNrphUfACkHfqVW2g/LXhkOw7IWMqWZg10KZm3ieS3EHYvErzBqs6oOM4yqFFdxsWOM76IQZa+q37u8QdN1aphobx/5qwAMta5k1euxb6igC0cFRWrbv5FBhw3g1E5ZkCAsYsUDk4ySfoa9fIK4fjMM9JCmCNuMdZMRIF2jLtuwlX8KK+ig0xqnPVU6n7jiFaUdfmRBW4hzQXpRJL2FzjkrZVqkWwhy7kw7MN/v86dFW5Fc5KK2xCptzOEMB+qubW94TLp+ZEm+oNdpatnUKzJaWMEhrHz1W9M/kpWbK7g+wV2Ngu3FkxwwZ8t/qZKDTyCYBla90IYgLJtanXF1Wa3sOmo+JIJ0Y65RdK6CAfKXRJzXaLpfxiaylU5RmeS7wBKBW2xs8o19gYfC1awqGykXI3difR4lVALmA0bRJ7rBi4bFgYHct4DUjVefxj/4T4CQvTWzgYQc1fr+1K3sRYwIYFnagfoqD441kBubIGIKggTV9yfplscDrYVuT1Q5rU6nYCUHG5kFWp1shVOP3+ptiES2eV5wUUfs32f8jfsy47zHZ6XYpLz3delXF9vi1B+0YnfqgJRGDBR1MkZqi3LFP9BoQxv45OIKsle9RErsXzKSPjNOaOERGUUZ87tqf1w67VvKGO81aJvXg1Wpc4AGFH5PPFfeLiZrfBZwiJDDgYpNhuOSVLAFOI9yCPTdhcyiCgCvof36Kt3BxFYHKzP1rcNH8rF4VnofIOXzm8L51dLt/Dm8DRACFGIq/LkIgQX/tKNkwxZ02h9cHH9dhIhn6wJrLgEcDTPfIWHJnFcrYg6D3LiKFUUPB6xcUUvfLtOXUiPOLUz7liv+cKkMc8+c1YhctBS09tmSp745Iey2cZ3crf2OMx1knm8KqDFYadtRizj3Pa6waj5k97COP7Soq7lL5x5oNSh4bIGIDu8zeNXzbXzephO7lR4vXHSxvlfbN/Dj7aqNUoRQgvfZ6iFSdPPshtctu8sD2Wf9Tr1swOqZuEE8G32MuChJ3LWWviVZ5NDwcl9dEnakrqNZHDf9sy0dffvsFu9Yf+lGz8iSArhfOgpXwCAVhqd8B33Tuxbe7S4gT5EIZXlVQap4nsCU3/yDCHmmHBxXKrocMlv9D3WMBxAo1nNQzS8EU+gxHz799rbMJe4+b0NHai1VgbcFkdm3AEDm8bljfh0MM4i4VcIKvxpOM8dZjedbyN579cRfZZeHRkUu9afQJJI4+efKVR03jXtaW+R+5bltFoPueoIStwbFWbu2zbHVo29o0wiDzRwV6ggx7O/TDXIGegNyODmnq8+NvhPpNMxgZsjbOz2nqTy9BtnX9B77qs79UryzxK/e+DxnE/BwQkD3Y66EmZjYBUt5ixxEzeli6H5opUDOdTuBs3oGGvxeQI91M4Y+xa2iG3mSk2WXq6HWO6ITiA1JcugIh75qbltJUZQepp7gD8OvMYIfX1+YN4kkiU4bMRzSMOKE4kHrtcjCeGwwEnh67kEpIDy1vpReyE6D6V5E6Y2A4xuKm0StSGDgvg6sQ9HfaI4+zyDIvjOXlv8XpwvsjHGb9uISCCOv6v2QY5zIydou5IDwfMHrq8zHum7OlxFKWszqYHWpC11mcsg5XXD7ON6uGFLaTFeMbGxqsBO1pm/NhbPhSjr0h6HLdtE9gZl/5lV5GfYeP/7nd3DKPUgCs7RbgF6DKWzc4ExbM8g4XJRFR1ngn+sQZVjSSzKLFHpYZK7ebX8kuRj00jARdjyX69reQ2ujLifpcRTqORCiN8sOGQe8qA4/70G+DBdl+JPY2hkgQAZHa0bo/D1f8QgATi62gcEfI8nelji2NI7a8cEXXlDqAMKex44y/kNQWiWIIOsf7Jh6+Kk20poS4396a67LyxwVg15k2qHeU+tN7bkqGacMcWhB2rxg4qJkdT+xK3H7IA+btZJ2XJMv7iRnX7TmZWBt06HEc3ZBqDukxuWzbjjQ0M0PheVf9zh9oU0aj8q0B4r4cd+5SZVqDmwgADuxL0vSxAt8uVK0PbgEojWe3828xVPwJfvCwbzx0e0Xkqvg81AD72VZuTvxqxo8bl5PPMBYVyv34ZNoQtrwkMcbvStMIPIwLPnZOxr9acV+o/WQneaWDEPKaj8ROw/O3VLE2GWOOc8UEi5GVlXWASJDtUg5puU0LLlFltj7ZSm0VMvURSb//EO/zWBbVU2pkPqMbrUHxRQ4gUwb/zSP04sArUTZSvdLEL5ZmRrcpDfLGfQFqsGYWC7ntmALGeR8Z8/pLhlqDsXITCvgxI/CsI5tqPU556Pgqnf6/qVTgW55oCAQ5STBvIX/JL926DageMACwG1jKuBd0nuYjwv1T1SLn9oEolqN/V9T7M9YKKjw3wy7OWWZFpTBNvKjc5akA4uj/1K+wVipAEkBpEQ6Ju/ohy+Rg9Z/GSNTpsICUQeSESoFK+ut0HPpoVMCIhfDfal8u0dp59EDFQiMMBkyFGtl8RGewm0cWKvROhmsUTOAmGMyZ6pjbF8sbBsdPZP6ntNi9oxUli8RAG0wMcDu1ohPtXcDyG01aLl+Ga47iNAQxcdpYtTiTpNsftAPy1Q64IwB9KzTChGVoI8SKE2FXG/0WDluIkwTEMhiOUw301wuEExxqWUU9qXjYkkN99A5VD65l+FxUGcH0HRhJkyrdMYh8mCMd4pJbhOb0ayUZ2prWF+1YiRRhwDZlGyZ+BbkHNZTx2+LSnxjv+JURA7Kwce1eNcTmdbYUvromoKK8p5RBlODtMmmPbEx7O8lPgo+wDYb3g2+z9an29Tdrr3dpdaC5hmxMgZYXQFlOL+OXK8lS17N5DpG/uViZHn1hpSSpOUMfBSAoApth0rrSWZcZDJ4nyARCSsJEiiB2kwrrs8kfLVDlNqF3V+i0je5P+rHarzU4O2Ubm18x4uKqM0J6Y3xOnb3Afa9g3IxW17JCgThKumHRKT1qUzNu57yESeYUm1U5VdF7WNFzVppbSYAIwHfLo4Vn+fK+wBLll0QaCvh+capb2KeEu4C+i9lu3Q/1U7LMTlXyMk16w9JjJuDU1OOWQa79ZUwqei/H5sDJHKiv7GMF3aBM1umCLE5UTri74QpQaQxrsYVwGMjkUGBpPZI6rVd9HvhhrFY3vm0t42NT6LBvIXKfGQqocCv9tAyBL26KA1jO0vQQgov8EeaO7Mn/qeBOE1z5vPt5c+ZwQZs+WO9cWHv8v678Vv5B913/33iKXXZILkX15iHeuHy18M4VfvuyZ9bAWQ3hWX/8792z54XboxmW9OdxWBvkXk2vWOddDfsmSQrOtmKPz/88DOG63Q0uQZLpk7p/Vj/5zqcA77yyn9jz+0NLT8te9nhPANyAp6dMY6tGWwRawBvh2VzZfxaSulCNQbiMBvnMbRokRkzhty1Ovvo06I5eKB/upKYGkmnYSQjOFD2uAkSopMm8zJwRsavvN8ZFRgThRKvQuRuDwwS9+Q42S8Zly3fFiH+zDR/49hY6XpvIve7bWYtZCK9e3k4MsRlpzEsH7Or1CZWqSqHKPSw2gJhupZOv2wMkQs271aOVlL0By/jvq5jXWW3qeC768ph0VnAEetRncTDSFkU8pI8/jAow4Qag7TfCKwPvyoS/mvZOCrB/DFBFyl0tbHmrWHp5mTY9o9DtGkdKIDAc+qz2F72la3TvUFfT6bXfI4VVz1QaAdDdxfr7sk9RfgqZKyvCdTNSz+Opkz8nvr/cARD72XlBX7EKQ67Wesyc3bsgTf2A4PZc2yMfJFBDV3qr4YWnkk71W6zvcA00sC89E9zAlMyzs3o5xKez9R/3Fyu7SFP46tL0BMxyqv23oRzJrGE2ptKZntAqV6SYi5D6vljilw9ymMc5LDs2On9QNGQSka0KNmK+1IRuPHkn/2g7EKDqeyes3pkRnHpTWjozEWACP+nsa+kqqL1MGHueWv91xQWfo5j3i6wxO/8rx627xTpY2ory7jaR1Ulfpg9VsEGnDWIaF3p2/X98Nm6TXdNQXFujtqbFft3/+8zXY13vNBaqs01ZVX/1gvay3d9sthykH2PA5ppjo9tT0RwYvWdG+vjv1aItvQz68LatT7+0A5n5FiGDmhp1S5me/f7T0YMQW4Ku1IorKyw1/rr9hkRpvia284fjIMi/eGqu6adg5oNu6jxsjdwPXwdWKzTo7wtDp3Ts9duVP9G9FdocfYG3YYNIa9/Qa40MifRoUPAouZxa5qhZtno/jvC3UvgTmngCOarNC0+7+x/ouvWw5F3ac6JacxFYc2GxUPa/cYc/k/7jS2GuR8wzcpy4fSmAoE9gU6Of6ySmHS32wjx+U5nBx8jT1Lo2oMjlN7sRTaffo/NQkEfKjXpCxgCkvQPsGqdZC6raErPeNRkeyuUnIrcm6zZr+z76m99pLbzvQBqZiUGRMaed/yN4f/ICY9YxKzbq3VjmolUrxPfRjnfxYeHtvaDEEYGq74DFPCy1xK+aXrMR7rQOuL+gi5us86csJZicl8QYL117n1o2+obhZgl5ugUCmF5rjtSSdCM0FS2PNFVGO+sBovvoVqRsT1z1ALu9f69+Lz2AF37wi/Jiy3iZ81is1XFsrGDzcW4evR3vW8gSIxh7/F98KjSFbnme3AAehYTP6qs8n1N27a/oDknpZzT2nGpliGAHzVFOIJAcNTxc059HCV13iV5B7E3wi/eprJHvgKZK0omQ6F2QYsVOlbBjNgKVKxR6weDD5Ont/U2JUt6a09taXfNC7a+mLmXirFMXubkpk517n2xubwFIxFUsz9MBkzefwWlnnNpuqV54ieb2vkfSrRP69iZm+YFLDve50AZ5W6phCZPCHwXKDX+Scajnt8nskWEPO3b0+l9FW9lGX9TiVeLGxijj/OJf1reQjq6uOVN3FZZ3lCi13Mr/D5mn0XMBPPfV4Zs8TANEy3b0ACIqb8XeXpP8vNEE7oQ2EOf277gpZpz6WNNbWL+Pi5/POd+8QSPl9aY8UV6cX0e3+t7uemfFnVdpYnxrvTV7GwufPJJe6TkuS5vWXJ+81TmdRrgX4vyB715T9EiSEl6A/FSRMqVMyBTj3hDoRA/y4ZFYZzpRE/9f4kk3OeugLyw8tXy6DqyYZG7M6c4ot+Ngh8zFthtE2xoNtNbQFv12vf0Xn2/FQfNyQ5djboOnbL1+b8dtk3HkT6vKjTUpnjYWH3jA4YR/e7LCxFb39WyOQZ21BdMUpot+567EHUyjJEv4fXWUJYVIQ5i2Pe9sjIzqtQ/FvK5eczONn8r91WHWJzS9Z96sC/A/iUKZ3bJ84h5H7kyvIyWbKYDo54YMH00+v5cD033HxcV13VjpnAhwzGPUsjh/BMnMElrSrosObNqkAnJ1ThKgbgLArforMbWz0Osyu7fRSebMQFKHvuKJIs0er1WHTK0/76rrA6Csa/WSdHpBh85Z3TvafD6zuqf+9CYGtBVfBbHJLRa18ECaqaM785b/E41otLsrTwk19x4vESqmQWZqVs/eTGqsFxiR4boJZomWMGhEkRy16NJayJU2rQnvmMRWsq7Qsm0o3Z2KJEUsHUlV9ladBXGi3qScUNtH0dKhBK5HFbM4tnkyvpfi50eNLAfri7bEa3GOqebYoIjy/gFKWBDhwTuKVpGoSdaZ3q2BcZZpsCsOUgSP50cei7LMMgnjiJBbDmwubTGO8UTXmxJ5quTYoUvHmIyaYU4DJqesgSmOYbBYs2OB5qitDfhPdJw+eFGa4OYujcRkofQKVjD+dtotdXX/BH+e6EV7WFyaJBsczrI5JeLpgMb+DFHGnKfA8jZbMZMF5jfx0ZSvF142WYLJkagZ8QUUMxzVizHVxC/rbGBEWWJsVkDVqv32CoDQ8VKJ4V8jMqsSihPu2r8rgw6c2RWNLG3BBU2qmzu+auxx7sQOJ1HUZfC/binDrXXngWKSuAQ8VpYedGrTAv1Zkt+0QqqQOV975lElQHBouVrotlrSh60y+6zYc5nJnNqaso8z3orscd60TA7Y3uYtGMI2hn4bTiIxH6nFzD4UtdcH7VnTSXrm6ntWxzgwVK98RtzdiWZX+N4vx5tvVnZut7dL4X60lEm7UZ1X9rSgfbay3tH4sePpUK+iiKwBlzcgLVqXSwOlK5fTINYSzUuxUTmUEfinjsjMOCxbuzTX1WKHXTDmYqz2FedDSfXhIJunqolM4kWt1MPtSgfendy7gGHoB2rQR+rFgXGkv+gpsEd80vP2TWb7X7OZ9CYhIFO7x1kga4SpzNR13ThQrDQ8RFO8ImdmVOHTJvm1Jnu6VCZ/Sj8aK6vGhvH7GznLoZWsR9vtIxKX+eg65PGvFsBeXwQ56uiR8jjvRT2/ved61PLhUYpqEivi6BBtx/6IRamH7akU/10TGZgoYpUf6g2FrOn8GEZL9vbPjf9MGjxCNYSEV9i/eQqGn8BHumT4CfrrP+YX2O31f6CWS3axTELMtvd22yT7I3SZBRBH7tSIMKnXnU+uSSaUDRdxqEYPUvhDNsHOr32mR2goo41pBzZAnn5bdrqhsuPMyT+i6GVI/bKAT4O54H1lqZt6xiAoDA2WQZ8qGuIH8TlLknabA9JFNrP1G9MkWRIaqRx7ovISlsdhMJKJ8n+wUaBeruu48DjRP77mHY4AWcCltZLoPpNunf4L2l6k8VTa+rRrO4mgskmdX1174YeOLbynxDX2e4XBWGDRz9PY120gSm/EIOKaLx/rF2rf/0H/vpGbccpijLK0vqRJLcULk3qVKxgeb96B59cgs7zNi2c+3TpVsqC2zCgsVHtq5erqM3TD6MLpOfzilyO+0qxi71pH5BJwzFeLOdKWCvDQT+Isp2gad5YsDvbzhFaNS4YyMpPAxn1M6n1Q1v9lwMZ0sMmYRSgfE0eebKVFjQ/CU5slm6qWD3AvV9YTF5TxQ4PW31YltnMgeLKw0OX3thzmZUo9o713VIBhhmCc/GQmyedZY7btIZf5JEfxy98WRsWoapyisDkNoBrZMskP5YGgb/BSwTRbYTqwsp/15PtbzXPj0i1akvzm0KI819u3uOQcyB0Vt1scsytIetW40tbAIkQ2Y483S5T5EttuTBJMqUmW/MPlyj3atd6N018GSkalEbObQmDCxdvXTNeDGmX60ZaMXSEdf6XKE187qBQpmOoa2ZU9MVpb1Wu6CJcMwgZ6bZcOJP20q1icyyIfMxMMNdDsXlitpOQf8ADAsBcm78xxmpy/+HzJSTP0FUMj5bgaTYrkYbOn9w8hpoH1zuC80O37ekorjs4Bi8UXHi+KjYwuOC2LgfzG+GgN1EFkMZysi/LuOv5x+986J3cVQRbrmJPdoQiVBoMvOmKZVFCt/3/LRhzXlLWHlxE179EWv6N9eVxsyLcBpge/RPePrUC9e5vJ1Mj3hNhsdewdTJ3OzTWq/5w8exr0u7L98auBhDiYJV+XBJeHLDxJpCQZ45fnWPVBsUXTwyrZUZBH4t777F38K4/y5327lN22OtM5TVYN/bbm3alV+KjgEuu/JnJUID92ys+GL9vOPX9xPA3/2DEvkdk8B3jV02KAqKpSlrRpCxMmOsuAnGr+ufVtCL4snGWD55bi35L9LrVmCqCzEOAQ3QNSDi/KrRNYmimI0s1aMTRoIFI6mAsKQNmToxJsyNa7ho082OMj6I4zYt/yXWYw0vy7F22c6BjvAXUBDMvMxmNre8fWLIr0k+44FYM3VN92q2KDBXtrbOZJQXBL9X+w/nE/Enxzpl+Tw7WPUngvI1pwndfSyf3KaFH87XOsu4h9LZO+I2KRVKPCuWxX/xarykJQsJDB2+jCUOzKqY0+18WWOKZ8eqFR6+ejb8jkW6FVjLma9D5cf3/23VJDo+lvmTtamKEiU0o64uOc9F4MjyVzBLQhOh9TP3uruHbHBRn3gr7e7YWutT1yIjZ6E2NUbYLLr8PEyn6QIMwDrKOEHDlLYazzcLPU7fMJ65Y6R4vUhPj+8jZfo1fstazdpCcteLJw1tWOqrO0v8bDY5cuT1kesnhSvPHBkGviBhlX9hCJYl3FclW20/amZxeiW7FLaCrUg+G5A5zKA5pi1UJ1467lgA7IXU9jq4LZbd8KwcyD9KR6/QIT94fM9mhQPLmlFsyfV6WGyH5rMf6vRa5E4K/kqkBgl7nOEmgXTLzVGjcNGyn7QV3+CXN5/un8B3sPmYqmOqqPXEyd/G3uwRBZbkBD74zXpV8i89DQmb74XTH7DfjDOQBNjflxE9P4Ym5Avj+2j8r8ELeKJd+8uNDfdRSUxIhLLnSEqrSnr/eemhfOfb/avb+uym/+xK2qpqKH3kEQ8qzbR1GzXHpmlteHjw7zLyLKCLGwKlZxMjhR6OOm2dgU0n05mhlzaMWw1IMQj9P2XI4otU+h0ZxR1JkWvkxmUHqEvTECURRy3W0r0CQtTjSN3Y0DXAUScOw6ugJnhvxC2WDB6hzjK5qJ+8n/Y8G+A91QvhxWc3JdMANkQlh9SjxUUKyCcslT8s3zOK7OY/WuTbOzXhwcI/e4RVYofdbe+AF7awQhhkvOxHQqctp5vwFtKCBGbm1Z88E13Y3JGZfndw2Lr43ayCAERhvUI0/V6qQFISBePIcUL6mu+gYVo3E4cK3543Ffdqq+9oRZ82WEbv1srgHFDheGK5XD5/q626bMWHoPnkEv2t0O1va0k4Mv3scTPfanknajtp5+hcT8N83N4MUEM/FY77/T59lX5avw+rK8AaCRq8gW/VEnaX6H8XNlAmOSVHg3Wj7zoFauHkBT9qrBLNVX0C4PIdIQxCU3OTaPChIOyUCG5USUoZLFb0aEdOo+1g3wqElTck+CFwZP7Kk4WlrS11WNTjUNXIo8r3pllJ/ymnBDlMj/17Z2cy1vnDpG16Y1R2vEhkg+P2mLwwe1R74uBAqXPjsTHxT1vu1i+vAQxA9/RXwN0uJXxgeG2NIrxoakcvvBRaKMGP96ajLy7H6p15qtvoboFpLyA976JdVnOozfLfmSDtDwaDhZfb3ltllb8D+2o+b6Rw/8qaJs/nyZX5sss/EdxwmL/2JF/FDQtn0/ZLK32roeTU47aLehzk0M5yccdpg2IJxWgNdYRWQb7R+l9/KOge5/RY0dPREqZsl/Qa3ac1v+CgEg3grap9GXGyr5Ial8KSpyKwvZBWF1vLHZkUdeKbnb+A2aQO5PhkmQ4pjOHMfcX0DG4a9y6XBDkF7ibtl+0ey398Y8py370s6vfC+e3jUBi+eLKGggtAxMMzHzEGS1mZFiFrlAU93Ek+7WbWgc++3/ale6R8DOt11bbH0R7l2lKa7KJoS375jqRURDsG7hHFgwHVvbAg3XNckml+yf6tJXMarZ08qP7xZ3ig/vR5iNvTj8DRG5SduJWiRTHSgzdt9UmBSDT7z38IBqetOeF0LGODFRljP6pbIXevk+SrtIWCrIpBAIvguReqEO2HqwoRyqySTDKm6bmD6eONAgTjIGGSG6vRz/sv/f/2Ng7IDk3EBNGQg3RRcSjXNpLFA4vUMpN7PN5es2MXCxkVxURUTD6K5hMAXXPzw7KLYoaxAJQlX8qdepK0HJbMHoGt5vsTn5Z21jyq5/DZN7hlPw60wZ/ebIbbvfMSOoW1BUnzXp6uxfqeGGG/UUzdBOhCiDO8pI5bj6vJWY8qxZERZRX5/EaBiqL9+1A7KenqwuarFj7b0uWbDLE8WywdS91X9z3drY/qETvpmZb41kAp2bgMaHsk/bOsrXHOF4Qa1NdMgd6kJLDd1p/tFwVt8/m1e1C5hzc94HnDn0SJYwd3pqEaM0+g+6sfvGIwJtKZZADxm3FxMX2pBRZh+j4kgNPGOsIAtl6jYuh+F7Z7gOyEtax7IbmKBo1L6OICaYMSiro8hQI85szdmGlhrbl420Ha4+AWNRo8SGNof/F4Er7AgJdHcVfTI+gWPh6k1cSjLKzHF4zze84UVS1ja4LpvRKSipaNUdu0mXgkk5jRXzlDbp54NqLpNLegpdIsqIjq3Xp+PJGiBqsROrVrBCxbeGlZ5O+cYuQp9BrBluf58CFTHMG1ctubuhyLWEdkKXL7L0vhSYfnMinOfAsFKVZkq+38CMoi+lRfG31cURR/c3grH7Nrmgxi3oEBMxfO3//BFrjnIx+5GYtKsfVgxeO0qIramCLXi0bzq/+Dm2UZNs7lYdXgTXe6PFSKftiILGu+cOvrqWHEQmwNMM2H6lSHDqjxdnW7ybI2P0Sz8RxFb4lo+/zQ+RNbbiTx6BGBN488X1kruX9HXdUpq7RXbzryxMPrW7jL5uT/8+zYuozYv+kJ/6tlA5rPOzer/j1ldX3DOsQJDvE3lsDJsVXRu920FOLzIpQeADel+zkcfktx4ILlbMqmIyB5cokXNXwfpWZhcdWUlXRgEM5f/TGqz7JcJO58r52+w+MklYBWcr9bKRxJHt45RzTUbnt6u6251RTrkAkKQf2F20ASHdeA0B/3fnce/oVf8fWXtku7WarS935o8Kst1T0usfmD43OG4zOHx4DYBfB71d+01CxnjV0OsLdjEfSAF/tdeDbXSZdIWAelJbqHq7gT7VKPy8AiNF8l6Uzzkvm8eYdLUo1apn1+SQbv2mC32WUdfLF8AtczsNqfNqt+7hh389+rqWNWXYZeAtxngcgn9XVCRlHminFpuyHd+0C3tzCw/AzZLLrJ1gjad7J2YJ1m2Uy98/QoSX+AK1Nf517nxvMScNcgOfU97ARwPGZTPOE+g7syg7aWP73CHjkIfjxk/bsP1nJTZHA7ny/rdAC6F2WgsVt2XqAHMpe3ha6NrSsxx/aFApenjYp2pjX9+kPwue1uybRGyD7MEhAVvkg9BeVGrP+vEGorxwV4ud3mJb2hOg8NVhJNTmvQYGuf0IB6VrCzpXsZW8xcSwEpHMPwU7saS6neJ1iv6XuanZ5bRelfTMG3Dn2dXbQTBj3MTfki5nT4QWSF45GydNA6G1+pi+BjF8v3kZ1tk2FpI+avSAu6lJ2IUSQyXDIJnyzZ103eIl237j1XXbCy6Ou7Nquxt3SfFajpNw+KMU+qsJJNsKAxLnCTZwG6po5uDhfh4sND1Lu3geq+wl8gTncMUspRNnXGe+PRRz43LfLdSZvCpci5K5JE2n9nW27AHffeaX7gK7MLJy7uGYTXyNF9b9AUBp+Mzyh9atvkjUPkUaJsq9fVdRtUqgvRojNz3eys1DBiNqcZKTNPeETVqlfO1p+6VjeesqWCA6XJvMufYe4satAsQ9sYsGAv6AnXjDia916tT379/t/r7XMjNJhvnV1WI7My0BXqapqGULLeE/IejW9IuOlUsHrYT1FM9r3dxXFpY7irF5zHNdjPDDELt4K1mgLvkfw/krWV9bOynHz3EIWPIeAKi5AwiF4mLwAYIbLAV/TwvRavs6NpN+sXzpTqvBYKBQ9YpQqDJ0phtyWMrG3rqiC5ihEXW7Pxqq71P76O5oy3HonFuDVwAFo7fIBTm2Q18SFlYosnQhuxuIaS5rX4PLLWttZCY4CXFm/2YYduK1E2FzAEI9wE1baV0Yfw7xl8hSQydUNbLWHo8+fHZKxJ9ipYSKR5+JE8benFEpJmFD2/dSn4TNnRgELBS4B54EzmrcjuGLLBTvmy8Gx8bGHIo/AEwMy9RM8j3fM9RbgU2JQtGWizW1KLxsy7TZtodqQcCWHQcsgqJ5vf2lCoB84dGpY84jA6tFEB+rWKKrYdEGT9VoLD/XyKonXE76DAUQt0FScKoPaY/LZsZ8uqKJxU7+/go+1/WUcIShvyXVhqARzTSGd40aj3OzznpJLN3OozddzcFds4XkjnBkyExofdFoKojI2pNYLlgmfkf/MLFvZbD7riwguc+eTSjpZoQNiBGu4FwbHdB1cHjLgfbhJmueyovZM6ERRLxEqvdgRA6t+ba0KVK31Pk1inlVzz6oGwNTt2WxhXxG7qoRObJmNpLtEztGgBmkZ89lW85lNX2dXPayoarr4Kg88egzmvl0Ht77FvD8QQs1lFxRKQbnVAYHIeIzby01uAP8E/2DRE/fDgEXr+eHQCcyLCaw3W8x3D3d//dPBCxWiwGFQOmo+dmVz6y0fFV2CD40D+HqcWbzQaYff6mc0pkfctI1GFisBX6/22X4QWugoaytJgGOo1cl033gVxJb9/omY5OJ8Wtz/z2UlPHx1Monans4TwI9PJ6pOFbjFmogKdC5cIA+2Ivt7OcYk4JMAnatLrCEUBBp70xbd/feoGUq6BxnWYURTOzy+jKboWDWDyVdxmCUKNrNEBewpdJRP0mA94mRu92RoNrcxiyl40LS9pu4vHY5EyeNK1JxDiL312eLYB+GJjWCAlJVGNmODOzU59I5mr1CFmrHHP29p54kczWAULr4pMk7FZAsULA5PzWDw1cCeW8V50yRYtyKZ2z0RipGMYuM71DsMil30KHwJlw2lJx3EpGNoWja/kJYQPGy5Bz3OB4E+pA4UVQs/RNi2L6n61g990K0/BO0Y4mtEcLonhhTPRuzuttvGs8azJNBC185UJayU0VxIa9Ll0Du8XqEyLSV9i6NXFcY3jkPlNpZAxGLxFWwOX01nCMRAiPIPyf1pC7FqJmgHT0yxQOEqdPdSzgFmMQZXggD8fUj6fn301cS6uLi6xCT67QT4+30cYBz35joPMHY36OVkxnDetcv9+23Z8d3glW2q33Qc3d9rlpm2uDP6G62CEqQXCFE5XcgpPswnA2d0IkpqqSQwJT6HsQMVsQNFYqjjoWWNRsTsUrkrHpJXRMrLcs3XOmFy8wtp+dlOYE+awzBJh3WL4Z2fDMsy+KJz4PwAY+u5CToWNIVFBeXl0UAp7FymSA9YzbRep4aZKsdf2UixllDoz+qTnHgpU3/XKzWrJSILi4NvtQnn5brkNBxUCkTNFVfOigzZEzHrlzy3pMKJcXujoqtqwnUhCh5KeExJr+YyTQlD0ReIFfEQcsy+iB/PNBmU7VAyEDCmsDcT4FCrFwnmzz9Pz+ebuxa0QAycPxfm3CGKakFkoZtihRarUd2LOfuZcCxOgIAYl/Rtm4aUd2GrOEAYj6SnO9/m3bTftQMbtwO7393W6i0P1QE7ZKQVjIyxTo31avG3BLOsWgPi/qzmrZvEt2lztmxlmrc6Mv68/xbmTNnG03BmGLc3ul6fG868VrYBNkWT9rWBkZ1VF5koSrp0GmUeg0qA67matfAqYCimZTSzknJIMouxQMTRxco6QBbJrmIc7Jua8MmPKs8KbZdru5/VTnKcs7VXDztsCQElqVNwyYgggOnBk8vrfXW0PJ3a5kugAaG3P/OsNvdP2gxKbR6A7PNh+Iu1eCBw7+eOhAczNoDA/dAyQ0zdKf984hyPs3n7ofvjyQ54X96qd+wGyVTLpmHZ4O6f6wqlNxbyOt5HFV5vJBdeWsvtqOgyZXTQ/OtxmOnhhjwwljb1JBd3j0zCzaxh27kNy0N0bZXqJu6oR4Dxy3PXkNSAbW3/yxzy9VI49rA3Bb5Ny2zpOU3E6M/dz2U2raSRl5WsYz74KJUHQmbYCxHlRArR3ATjVc1V5YxhwlwMCsvWB0/itEM46s2+08pF5OVnaeDHuvl5VO8k/DGzkyXRaacVzF/CVLRt0PAqk1MVKrd5lBByipZOrozA39bD6lamq69D8TfsxqWwj+9bYdaXgIzxokpa7vDZKFTNmj31USWr+uZqAcva9PXfWlaL9h0a0duOqfxT3a19hh79/KRkNYE2DalveQ7CUZSqoO2FcmW7dzXh5Hz0c/ppls4/VbMq2wKjOxwXbYK+utVkZr1dUP4aqzL10Qi+THeWnTPspwDvhTWfdAkwy5oTu8sog/WMBGo+oQz9Bihjrb1JE/Q9Ta1er6XT3/49ST9hUU7Fc/a4jPAl11Dnf/8NCnCP7Qf6t28rPd+ecpFR5tMPUH/6wqE01Ih03jV34HNE+/lIhfbSu0pEiej9+fITQiH4VaUbpU4vf2sf3cfrulqc/MVA4b3CLq5it/wjXKSbzBlMqW0C/twloHLpU6x8vx0IljzfDPu3bTEu8PDYE2zp3ZoTJTee5DbFVN7/P4+68r7jrTXRQVUdyJTDQFvo8Jfyure6fz3/JTnVxOX0N0l6UyMolOD2W1KRl7pl29mx/t4u3oNv2cDv23+vrl69n/ZB+iId/2J9ZujsUCF639BEPzS9Ge1lJ9IL7R4ENgRgbnrr2FCZ5c+C59tdfyGAkMsD/y4CSHcb5O9gBVHkR3kNH9PGibs/aPKySSGkhgMCmV1q0DQHlvACOMX5OFbDz2rlwh4MmLxqUgiuYYHSpZW4/PIQJxDWvQxUuStAlatCo5+aNTdbGH8Xp005YAOdSMppBwstbVS/3u2y2tMd+23LAa1cw2d757gwFW3pIECon1oGkAu5IR1Dnlj95SI8+ATU+a53UfsPBv4bnfsYzwCkewBAuoGdrMj4yLqSc4cv5lxdTz8ZNbGu5D5o5LMv/pMhnzEePcvkcs5SGo1Hxyk89jhzbNhOeDhaIJVLRCph+LE8ZXk0eq5WONTzC8NN6v+FFp4QEjFza9E5m7uSDAXqUnmJdCga6LninOssS59L4PN3zxOwFeXuel/VVSVczqVbWNLCqjDr57FBTtaPIYHUaV52dfUqKN4U9qnrB4nl3LLt/EsT+cuPloLlbhDHcyhcIGy7xEfdo7BQy9cLGpxDsqLZvPuZ7tPuUR1Pf4ivWu5fJBgtIbMnsl+uIhEDl5yxKGYlsqBOWEEaccYD7zubrrb9ZZ+RGSkIQ72+tVOwA9MQ8+TB5h/TiGZh4oQ0WTQ+kYTQjCmij/AQpePjifBLMD6dyuDTYQg+nQFOxmIOALsj9Q04aGn6jlPDcNmq7iGksA5r6HzGLFEcGiYo3RZL29AnTH7rtiLs5c4srIbaPzVA2BV1ezoSYkkOsq5TP1FsfupTm9nniexxk08irhpbpRhFa+SaDD7WiM7KiBuHgtJv6lZPWqQTCmWTHP5BEqIxXh2/6w2bvkquG4nI7PVlPD+cZ7imZ1YFkfhtJQC1VtpuhkTMKyYTjt3KKJp/zkf9OP4VF/1zQNBFmkFlr/iY5iFJxFZDjtOUvpTwLn7XEiEXgHII19vHz/h40gmB7TVXt/Tqzxf8N1jfKF49Ufjvf2Eu3cMFSs3mF5a15hPCSxhMRvJmlFWYOW+lDKmUudT5KwX6NsNpzM5E6+6yRumRo2CzpPcmFqqulucSBjBhPZNXe+3FsUPeaAUUqWs8rNG3qXQ2Tejz/ntLvAesEoUB+5nyLxNU8HJaMKy/NqmwbZqDJ8z0lcOWiF6oL97m4UND1MzvoHd1HDO/d3VjEPGAr7U8aLM9Tomk9Ae9/oR0xStxwBfE1DIQ+1OOxfj4b+1lywa2YQDp7yYmEhCSzidNSOHlJuDJ0onSxCOCwzA+lUE9tfIpfhYVINYY/TzFdCHwpjGnDAtLZfgzucBo6FbVujOFxDTnNh9p1JBZahDH1OtCaT76BzKA6ogSJFfSEJUkOsnRiUqVHi2oYT2zeJ9G2P9NW0dsBpmTnw4iFTtjMI1HM/0HsaH0mh48vGskfyyoRmpn9D/USlY56ZNvLOqNiiee7q1fjAZu3vDrPPKdyjLH7T/x1b5BvQ+Y5dIqrbyxkRLaXMTxFno829lXJOS2gblqP/9Z1TLm2TU42KIm1tZDftxJsgbkb7F6YM1UWZEpjsTZFHAjPnP2HorbMBGO6pd6ZqqV9JFCVRh7pzRxdBdUXKxnbO2EVlwgZDRyfSFqNaEfLAyVhalzE+DADsIxdtQxJ2KtPjZByL9RxOBB8+nY+0pryW5AA3ve/rvhZCA7AlsbVRuGPYLdrREFJc1vvcgjyN2ggfFEm9FVkXEyfk+zvliSYxK3VqhFzSkjCMduphcsvM5Hfz8G6vtwz77VlBStdNu9ZQdCKdkztI4H3172BcjvHJsJRjBzRLlMEriClb7hcARMY0BKMxnFYClJqhtYj6gcuI/MPCb8UzHgOMd4IFdTwfTpjGnkNgKxeu87S5wW7gnQP4+Xss+9JmnlFLbZOKeaUGbKdZlBS7FJoqKU5m76+mf5G0A99Au/c1GN/jyWuR0eNGbavH85Wox1zthZC3FU0HbEJb1sB07eaOx3+Ka8dEoSp5BIEbJDOaz8l7PQR27AKBdujzYzxt4F9d27jEGaUq3XupVr9zizpi/u+pKbc7oqFd0ChFuLxWvi0pCK34um6j8BuVj4k5QYbgZ2KueN/Fgf37X5V7mnKOw+GgbPDarTOzSuStByoLpzpObYkojVs39QMERecNn+icZ+YrV3kc9ydNFOB779R1pbz50HWznLI8C3M6l86XylC620ixzWLUfQW7v84T0jeWNB1e/p/0kXWfvmx+jrjZzqlRcEoW3az7sQcHN2oyI/Ri01VmH9PEn0I88E2J9Hk6fQCiu67iBSog4ne/CnAm8hwDhDb68EXcDY25ALNXGgj68DFdD5c7VCQdULwFGG+dtPS+EbZJjNTAKaxnQNrl5gnfvrvMLZXLEwaST1XHwJ7aMBub72drdkQQ+9tBb6rCQ+9VxSw2hC7pmrCt9l68EV4IxDxAoTahNmYGTx8pNSUPqbW7HHSgxgjNZuyliMd5NnrxDytTZ7n79pTrkcc/0GljpzT4T5rxLSm/2zT9BEnM8oXACG90fNlWyMs5qan7AIG/9FzRE2xljNuHEGechn8U+eMTu+NyDLWEAglBcQ9PG90cYV8NVGTCrBWEQwxPdo/iINsMMWgWoYOHUK+HovAxXwLgQyrRSYsI3FMFNAgAewE32PXV2gLwBAyvmjVxsnlTcqo0GwfZgANGJuvsgArbJTs3rT8tIfA33p8Ny5Pgu4n0rA3F7mbpZcJnnke100NDfeZw73+4ntdsXs5koVpcDWtj/0RfNwdOpOFOvAKMEn0Kqlp7XKZDaIi+QurJkd/N8ueC7TxkadWv6975xh8YGGUsX+mLgTTjT35LV0MY6f5KaRXcx7usD9K6HEobMJxUaLkSnOD8tb3rMMbuYzSR9b51PYCMq5BPjRsgzx7DkE5U24/KKNok7D4tUZFAjge0ZvK8lXHsXBllJeL6XyfKEUDCfksv3E9u6mAoS+/0pEceVRVGZVFH02ia9RViiahb5wEUESvmAzaDlYh89Q9q2H0ItYdxqHnjeAJFme8cS6jH2bJ+Zc+5XWHDW+ruA8bBRw5n+lysaNx86xOJxzbLHxyAU2jz1xgiWJE6WIylV6sUUYN5arNJyCXmsQCod/UrhJfX9TBCtCElq+hsjeJI7fLrHolcLy4VQBUP4ROOwYZqONXZvMx6M74Fc0qw9vX0R+a2og18zUoTY+TekDVz63UoxW1rWdMHC/vbWs6QQpragse/nGo40lAOkuPDXXX0JttNbVkOXVyG+i/YcDG44+wDAH/RGtt9nojY9j+kbwchFS2dDUa1b9tl5Z28nKdIc2ZwVk508Bvro7Xh3Y8gqA6OWH3kjn0ogHFXvwOQ46rjKwU9fTK669dW8xL+TMchoP2rDbImo1FZQOG5EV3S7cn11zSwBWOS8xnnea3ZE+cDNHkH7rCjZu/rd5SqGenPVNrt/VzsHVa+qmIzwI4lsq1IQ+QtStxLmWH3aihNB9C1A5NS+q0jQxjm1T51yUulkBJ77u1yLgoq6LppDfcbju66DlAaGAo69Jh2YnBsxR/i9Luq0O7OaKFZL3PcRxYgBxyqXjbkd5q1Gf71GF5N7BdnKlkztj+R7S/aivSd/XDy42BPoNa/cdFxZfPLpeiRR3Csz1iIyEYWciEN0Ff/EoPmI1JlK5I8iXf5RHpzLwF1coFSp/J1x0KfmkKGlCkiweP5KUjKvJEYtz3LiG3MAZvabHr8327dhFFlgbi4Gb+zLL8xAlkfJUTKI1U5+oge7ZSYdT23Kq5iL/+bXHLbE0W5lYH388vR9HeOzfcuS6P64K1B8Qn1TvqkwqhYD+3jCeK6nNgdN20vZAEzXZ+kQrJjVSgRTU5AEu0UDZRCn2YVf3YnfhgRopqHBx4KgUBKmxVKMvp+0V5EZNblRtLZDzhVFdQRXH9Fcnk0AUuR746r0KIIJnMedTgreWe97Krh33Q7ZfZSDW/8uYyHpyvc3Kdj7rhTmprZ9HdLvNqSz/VClKzrVQUHVAovEa/ImJtfjWLcTvhH+nTZsqEhL6PZ6aBD5GGMUc9hMA0FmOJEOS+hguF5fQlz8wKdbZiC85oNotjOAvRY8ZcHeXHlC7/o7fIj6HdweuggoVijT1I/gpPa7d1vyfHVt+w1nzsrsdew35UT4+ZoVi4HwFD3iu5bX3t+dMABE2rwJIlwP4doEAtItdt1N1oLseBPw3vKq2ECtQGxm+nXT3OZu+A8D4moq/6txRuxMDidbMZ7fj7hg+t0DGXCGfiDxenHEIWUy81/QcJLOJUCcOS3B2EICMcw29cy8TVwWU7DEVnkalYSMUu5MGjUJ3w7F5e7UE+xWt/baIsIVOEAYLax3nBZjq0Pnw3fGRzX2cbv2olw0Vnnx09ExJGsfe3tPx35XXUX4sGBRbFFsGIDjXSrbuZRAcpa98m9FpmDDFByO48Zgu8HJJ5oIu9U0pTZpyW5KB0s6pEE+Phxux2o1GTUijB2blXTH1Yrig+5i8M4Gn90RMIMC+yMk57cfVejF1AVYxx7QP7azzf2cQGfb60bjUDHre9oqV80mrjU4uXjTpR8nwyIjIPyX3xYr2M9PsE/zbPVejNudl0EtSgUex0PCl2SHbN1j2bwz1zfoZACyku/yBvWxuYK7ygUNZJP5WH8ieqzdA3xmQPbB/MDq00GeArwY6sAO3oPo1iW+s2a+U+YWdnAPtXaxW1taPCpoqAczi1ZVyQnzmqr/zKs7a/XgFOPdcZF8Ek2mjTY3V5FZ2K4BV8zq5nWc0fMNqgDANwECi1NZQK3rFbGCC8t0KbHTfOwOtiw/myPxfMv97VunR6L8KpqizuzzKAdMvX9yxVip3Hf/tUcrfaSFArC4mvxCpLoZ192TCYEyFKDWsGDck2pyFRoDS8WXh4UoHYRDAmVmaJumgUV5YlI3ajW5PSREfaoWQ3M3KYlgqfPfgOzuHI2Bz21fkYbLwW08vC4TpL5eNk1k6aZYmatJPCN7cRGM/8iN44njtlk/TG5UDyiYlyPwSWhVbv8XX20gDOaABba8a/jBMLFNQPto17HRIiwOmT7JaWX/wx/kg4eUw8L2zpJdtlXRLft2L+q/E6Z5aTFd4135e4Gh/R7AN1ZKR0daelqbs9tSnIZu7gT9901iuT1C4gTESGrirz+LIhWOa2wl8VHb5PsCa3lceQyWKaBWlpXiD8sCovQKYoiSN24rE0zNRmfIpXLJHpK188d+LgG5wYnjun8nB8yJ4GbFoqKDDpnGr2Qw1P0Z9GNI6ALtNhe/A5aHAfMtfRYKE+hIxwPtgwL2AK3ylRsgoXFwoLL/03lmtKxOa9kKdhmBiwDv4Yr5nlzkyi/GqIErg83OOzrhOdw8PMhDZU5qAbEh4JgaT2RGaQ+8J8xwIYHuGQTbhw8gioLPBVrMyl9aAnUU+Q+pflfS/11BfPTEIduIjegYnTab+daF3TEAm6m8vEjG4nkZBx3IxmGKjPbSgukYSCNWf8y9GYc3YKKbS8AT7EkwOs12tyfmIg8F4fI563JdAAhCW/kMJtmZ2Vp+JZ8KoMdAAUi8wNo3G5y7ZJCzuZ+77NNmJK9sUH8TgGxlOAB+X1SrgOH4Tw21ZF7FLJS1OaHPc+6rjwfqlWAsAQc0Ru5Y/uVbpz1gA0MuxesfuGyKm3oMZPfDQnOSKJOpl3WIdqNoyz5LAcjpfrQPZyn+aaAOTI743EXfdUjf3vX+rUusfdscy30AK54beFaae3ufpPc13Fz+ZqvLjb1ccXvOxKj57iNbFEUlDXzs6zBjdZEcScgWZNmAxnpQ9uB4HU+F/v2aZ+oL4rbTQFg6FiBRhMKoRPZziB6gtFPhMTczar1OSl97uOYzILShAHQK9577/PbAZBhS9x8KiaHwa2bYyyJGNnpcFuASXe+TIOIfz5ZhVLcZmygvUd78zQqjvgsDitv736vzeGFCJ35P+yn6PfERaej68IC/dIhAU0+KSZ1cBATEH9zetGf75PKnGivd8aEh+CjaTnyjsm3O+qsnUCJ3yZ6in/HHRfIQD/Dkflcv6j7HK2svD1gwZt0ZenbUasWSRGeFupEqN69IHowkneS/Gy8eBLJtvu0SeQQxd1VBnICPcly+2jNgR63Njr+YysPRz09ml/SclZ+Dn3eeBHW67xprEYOeL2CjA9S+ewFXJkU517TnYvgOAfRrGG0DLoYa4Y5/ero4DSd00Gg10dFNoFHA1TScoOAZHCwJ4w7IonKtojcuYCjhR1ERxXdFFOcnFsNbruuHogeICx9v2DwyeoW5hd/DajfSx8NXGwG7sR5ykvYBJxyGwWFBjDziy/0AUE0ROYi+OzSIYCIfLApuYssYSDouEjiCCNxua/f0GV4Uh9yg5xfHHRn/462Cdt1f5jogPxybiwMQ/pF42gzFaaViwMPUURzTFfyBgBaUKqp1qEyrsBVNZFT24+XxSfWw+BkfMwcXumGXQGCCzSbxr7ANBvpmPTkMOToPIiTenJsC3AwFy94HAmKXqoynGQsG7WVB9mh7hzFkPeC0wgFHps13rxFj9zrWdGp7SC6pNz/tOxmZu9gFINZ/Xy9DNmEXVYUDKUt5KbUgAYfuylSqi7HIyus/MMpXxouexziXse2MfoJXKOSyOqs43U5UZ65ehOr3kwBhQiw0VOsz6WksLGUcGtMrAOEPrWvOs/18sk6CE2XFopCza5Gam3KNFSw52qin765wBAHljQK/lsmf/ra+EXwLgO2jRtRvCovDUE70LQFnB4RTASg1ZF8q0ZGaacsBHFoNWsz4oGdaQL5yZmAFIIznNlTnkItnoEnVqKAyLIZ2EpS2KwPkrLGcnD5gaGGWlhu7FUWYkuE7MNKQso/rnne+rVUbu8VtfJjNQ20yDFzxWLCXoQziGWns+1eecdd7Q7CUCth3cMml+DFv7y/vQv8oNrmY0SLwEoTQg1YOjLsOh+6++TD8MxlEmCi7xcDBE0KrJ3UNOQ8p7P+h8SRp73WxghfolNKEcQuPrRG0ZD1kTP/KNWDOm75ew76sZFKTq+XyaGgl3Zl2eHnchyHIwiztr0NRos0c2LXv3GNmuv/aVtPVfW39/JOh7ec0bf6IdAGjuRuBSm2v9kwr/TdFCJ0S18AL4roWlILTh0QvGOjRjXsXkyKRaBRwvA2PA5Z30/uMeh0OHqtUQWGXoIStnZNjFMv5ydEwALHbD5N6j0RwaagC14WHq7g6hzMhSdvb27Z39rehH5lVzaFnZsSzIBdOtMg66To0iDlyoXDMNoTXshR/YZP1vd3HS/CdKr1ttBWTVKDHXXzLFpjJom+tDvsvNTCvCbXHAIu/1mEvldTzVphQ4w7TLgB9qksk0dSw758xomSFeoqoJ6+WhjsdcWGwXnTvHtXUuDpetmCtbkVO2onqpwiUwrFTTcKoMWGk/rHPEioBUK2GXoZmXHXwIcNsfS1okJsF2sfRNbajl5i2bObtsZdU4Zz4M5eFLfaquEP2FXQYGp/b8hdql1s49jVFCLhhqlbHzviTt3Hpg4++noIg/qvDzkEFcBHYuxIecz7pd+lbczMx6+Id2AbUv5Vb6hOoSWjLEMkGyBXEnKNOWmy8oO325hJUiUF8u4Y4K7wwOQ9hnKsria27QcYbSCSvhGbVDrqp4ngDG4qkh146xOPBTn6qv/lGVzXclfGAKKdv81InSgEH1fsba9iRAauY56sq/SkaiSt+Z+DGq86kP8vgrbig4DIQHmV7j8bR6yUEqCDcA1SvnTQbYZcCzPtPaxZJDrx883mql2OPDFeqjZwu0GqYePGYIB8NONYnpOU3G3hhwd7fLQYs2bQiL5GzjLgFanOIR53OoGgyt5QKKq2G5Zkg/RZnG0NikT1nck4iFqvXUiQfHTPRZ6yvymtaYy1Wy5qXUqSE4LAb4bOfodf3Q1trfLuEJPFzJ3ZzKLpZs8EoAQL1OvINtQ5tgZsB9ADVkkDKNpclqtlljTO/kGotr29DTOvyllQ1EPkKfGwwUtZl1ExOoNn4Jm+pPzlmXDfn6L4LbEmTozrP700VA6tRMlr5fW8z0dM3v2XW4zO+11IHj60EMOGo4WN1Jvv34f659BvoA7z3KGph8lkdn1COCH8C7HDcwnDaLLupzOmI53ck48YfnLgiKLjOZALhwrxhu/LYeRvfdM2WIX5G39DzKffDSfWtAaDhczCjx36vD2V8jbZzZ+SDgmmSblZROOPuqnPuhfDLkexwYIxAHh30g26JhVuJheT7wqFVPJA6i6nNMuI/1936wRy/6b9O9HD0nW+6Eh5ULPOe75OE3muG3Fv9tGRyCAfnTpbxcNL+w6YaFW1u5AfGYMTlzm3+OvTq2I6VY7Aa5p6voyia8YCMpm2Xt2P287vOPppSteWTB/rx4Kxcib4N5dP894RW5wOu6jA1yCGl15U3/WlvhDucfncxd3FdM9LkbHUBg50vuWc2e+fZQsZq4SNXQVpXTqIn2451tnO/LMOFzju5/Op0TLFZ2GVBMTVTosSw75yR+yZSFyHiCXc52HnPhULvo3DmOpWDyWbRUGzyNxilNPdGpvv8yUZLA6b4lB7lkdB/sMhjefKc/eTT2PEjgVzUnQjupvta/ibxaM1IH38KZ646aJkpuoEdSNl07v2WeA9smdqHqaerEo7f6QP9AVJ0awvggEvDW56dJO7K7bhv9bLD4p8GjLmO9l4UoepVFwosoGsXOpSJcg4rM9PkBEAOr7VzwKjkfjxsVM/aOrIwitTzG1IzuYiP9b6ru9V+egW6F0QnGUabOjEhM6lzgkpuMGNWtA8ZGt9gFFr+F0nLZy6ZSGDGuLyZlsTc36DinBksO8vjmmw/5wc7yTeA7lxYFwfVquj17bvvsDCeGlzYXO6+ueBYyR8E9Hq6mjJCJkPk98mGe3wtY/2G5rzxUlhdH3IMjN6kAYw79me2XSf8SPEHovxG7ekacf6P+A0upL43srmKT2Kaqfc0rn4Yvn77/xWk6ItZ/lP8VTyeJsTklbal2F9NDcr/DcG4KcrmWkrprsjGNF6lcdJvCq2p1qCOOnU9/Hs9Vo8Ou/0Ug72Ifp58Gil2FhQXfGRYYFPsPp086KOdOe+JhGsku+nGwr4Par4NBtv0/ZQZ4elvONip34Lf2FpNvganbF7aRzIl+fR0AA9848NwPryssuHFatcPkDGOn3l/aV2p/Xnr8zd9U0JPfPzf3ze8VK+GA0nhF++dKreIdvVfeX9FpIP5Hq6+rl+tmK6dyHvrv5Uezo5Xa0aiZkTd/23a+Upu+MVnB/rVmTqCKwlsAxLPm3LSUKL9VS4CVVc/YDwDxGeDrrQhAxEcAeXWmhOK7KU1PX3WdY/89suqkun12vLjG2LVQsrT7CWOa6TLuzM54Im2l3Iuyo7M0s1Xdqm+mBCjxdlZxyMAwnXKb/J763UDidAxQhERFOyWAdoB/8LqLsKn3onM7hkpBIsoy1pep1Gq2mD04DQCbCp1Q7Lcx2/wa+VZNk2cjA+yEhepwqCN1Hst6ri4sGbSGCnI7VlFrMU9D5DQANfl5SllvhSWcpWTS2gjoYDQuCzONux0pazbtNU49RB7rrHR3+HZpnuQQyDfbvmup2jzkZxMxO8vnIrRf1B9ISgQArxk0k9gtnqIaTVFMtzoqQCc8ko0j4BgVHawAjECU+Jaab9KGkfHe36UgdehQxH3m6JK0DOLXMfJRIJB4bfLJGtBlgz2Uatawpr18wdoTTPGAtct9e4Ch6m4GsKqAEq+ZSV+yTd2QB2rlDd14qVn2TO3oC0aZwVp6X9EMAV0HmslzdzqWUbMt17TuLCirM+OzcKaaPrFzUbZnQDctgA7unQVlqdQVchWPeG9DYnd8yDFUWrcOzQoi2ekpXnoYkGNE7X6obDsyCHlMrVZXPCHiY3as+NLzLD2b4WnwllCmleXXwSjmCVl1g/S5tywEyHQIF3KI9nnIQhbYn0IAlou+QlmdSjWzVd1BvybAD0zQTteYqaHlRogO6mvqOcw9bipDP3he67LE/cSA03988FrTVAjCEAvUTdUPzU8dUzCq87j1+fQcgbpNuMEWH/bfQ3st0+bkpwlTreoOeUgQCAZPDyDmei930UE9uM5UBdGsyyqpL0Po52H2YEcTr1XohKKwsWJVAOQl3NJNUAL9RXdb8RoFl2VqwBdEF1NDSBNZ9hdRDyU2KmoDPAAIZ/L6br+GXOGoHaje4PaOimQNpK+Mfx1w7Oj0B4CCfo3LESoYr9ES5764VecBdZDQPXHMlHdEsm7Pk3sDGCTjFmvzHlrz+0raANAyKGM28Iy8MFRr5LVWLKeFgDJ5b5g7YoAqG0PWSq6FnPqqSNcfrJqWTIBcRxlrhQVyKkqk/vgYkik42+tkGbM/+6RlyDczG9NvWyCKdVQc9z1yA1s43jGmUkE0U6t0qD9VhjxCIa8pJmkZZMyw03aGMGLN3Hs7Zi/VGJlkP1EMwMMX0m+0jAaITnc0+rQhYxvFpmrmreSPz/Yway1DLIBA9iPTV8kC6muol2iUoMymQ5LzGBm2vs9CaicgL0c9JLqYtDN1X5lotuWVxM6CkE5MNwtCpw/2F6LYUKU4KJtCpSPsrsIWyWjRIMfsjkgb8CKVD8wQQRX3oqJ+DT65zhF1E/IeWRlRYQz+euJWcOEJXxx0T5MlVigGIY+JgxDv4QVHyzGYnD8m5y7uyI072+EOAdrBsPSGqiCayfzZ89hoRNGbWO4DTNyjswyk1aODCJZkw1yJkKedGKD+NwxVulGEkE5Ux/TDqP7pk3a2piuJe5uaY+2cHx4s0QD0beXsbE9NU1PnhkkvlVfFcGblJGeluc5O4R4urStBBqNNZoWl/Ngx0GaMSXZ1JmMFwzNl+m7MzIhzX7b84TuecB7xhb4mJUy/kIk10kENnuj+2KDBa6ovMuytukPa12+gkjLtgsc2JGYXaVuZ5HvKvApTsTqvz+5AWIBa07Q/rxJX0uoOO0NVbaRPaobxu5mipO4Ndw0JFKixwX8Pum+4N57R3TTsVIhralZohV2zl+4x30t7Kmb2Lpz8t/TwpLc2cb6C4qqjTRq14Tnm2hRc+7PbnI79RFt4Zgv7A+D3gP7ff2JT9H9Z/vtN9sSDMBLhUcoZrvKAdn2m/AEMiausvtbu87Ed9sc6bimJJlVkh/SoLyJKrpILUugKqDbpyaxv+mMII4ZR9EHnGWc/x7jYR13lej92hwf8zUt9NoRYMjRwIYWNqMMYTiEdv4jy+L8YXj7tGc2GZKUsa7MrjenPhjyW1iRZTfBnGW1soZpO1rPAfroYZq5qRMSrqTilqOOVrq5CK1T5PtgLWtKGrurW1revG7qrkQ6c/zmbT+VpP+9PE0lubBOZ+mGOdIzz0/rn8qyl/UuMuGlHh4ckbVjwEKOoCHvCTFgAy0lVpE6nXtXeTR3+HHbk2eiPO9Nom9pXrKFyZ+uRRS7K0B30i8POghM6rbPK2eHwHLVjc1rcIveaW+9KXbNb52bcTtfu+r093m2v3xvFd+PVeCfm4zJsw01Yjq04hBtxN0YxjTOEyQJhRJCVZAfhERWxkOvkms/+ov/QN/h+P+13+ogfDI4G3EAVjARLARtkqihQQVfRnVRAD9MzlAMHCFJQsAEuQTfbwT6zBGtlEPOwGCuGMfTCPNThhpAWfhRdjtJRR3xL/Cy2JNXJlySZtCWW9IH0ZfZ0tibblQmyssyRvZHR+Yv5D8WnZUDplnmpy40lvRSX5eXPlal+Vt38Vv6YG7mfN/Bj3MpJnuB83an9uqrHems9V081bY1oVjY7Gl7zppAKhbCJsMiJHoEKWmTaj9oPur2d7t713+/f9AvDkWFjIAZmKMlSYllIIzdJjlRIs2yScumU9bIg+yUuIzKvvOrVGrVPlSqj6lG3dNCOTrXW1/RtDWtCM7pkSrPa7DFCozUOc8bS7DXrsM1Wae02YlstZD3jhrEe304vT5/nDXM+m3nT3Dpv0PF9a/dH9y8/2HxwzQH98j0vP/nyay9/8vIP+w/v7z/gT976KrRHtEedcqbiqSbJEskmydWSna/e/eoTr7766sevfnfw4MHTB0cOVg/x9374w28OHXosnHn4NbDl5GvPvfY2cnfuP6S030pXUZ9Mf3QsFw4KatpBR+kyfb15qnmxebP5rXO57o2v3l7/ta4fd/2x68HD2JvYO9mw1LDXoFS4FF86ctu+jvJLR+VNIm9o8cPwIoUOPIKn8ZxmRAiEIwQF4UooJiZiQTTEjUQ6UUw0EF3E1qAJrhALzUSI6CHGiCu6GSmTKtJE2koykybSujSrD5MN+a2GNac9ZJRMkzOGikKnSCiLtceoD6jdNXMtWGus9VCd1BA1V+3ygNIqaUdpp2h/hWHol+mXwu6EPQ/74vm7OwznMjUiKCz1SArrt+CoGo569DQMAjvMHeN+CUjkrfE387X8Nn4j/22ck6C9RCM+vOTv4HThm4lBovXSiNJ6MUeinoyRnJZMSJ2lSOmLKWayFNmobP3Dv8wR5ShHyBlytdwmH5H3yG+kGShqFI/TjZVq5UXlx4wYVa9qRPU11koNVner7yJtyvhlV8u+xu3QcDSnNT/jD2vlWqPWpfVqudoW7Sx6Ef0U/SNBHeOgg+osugZdrY6ja9W9xvxMVMZG6t/Evs6CGa4bbmQfKD9fPp99M/tZ9udkkpFtfJPrXbFk2mGaNr3J55s/p+tVJlROWXQLzSweq6nVZou0OWxNtn8yT9gbHQ6OHAfK8Zjg5LxRElRVU9VW9bzU1zXlGqxWKcuofrnsYblmebX7Zz6l1r12uM68rrQ+pL6uWrshtfqPxiPkHAqK0kc5SblGjaAepnZRZ2lHvHJ6EP1czfZWdE1jrWabTZtzm3cto1ZZe6R2jeHWLmJcY5p1sJkjzFfto170sKiooofB4vCSic9OnBnNzM61WjJ3Namz2eGj30IH6VVaW82d6c8lO5H9hP13X2ifS184p4ZzinObq9vvz9VyW7kCbjt3kHuJ+4SnP3BwAMkb593gbx4M4ffy5fxHgs2HwwWDgtfCMOGg8LJwVfhK+M9w+PD+Yabotej7iO+Iw8i+Ed8GUUNFQ32DoKGzYabh96h740zjQ7HlWIG4SSwQS8Uz4vtN28bHZa62g2bHGyACFhAANgDwhQVa+FBDqDClITJGxVqfci4sgK/CZkQ58cODctbQyJQEJJwief4U/WaL9YX2WANflxMvjD1o6DLgw/2V6zWPo8DDmwgTYdOLqRKrR30+rF3ZaTqO2IsiVhF7R3rAAr7YztYLvgoHhXRA2JQcp31otTttGE4QwD/mI/t8gz4HHDjdEUQdR0qBIYLwY//OSmUjNNJdVdRPldj2xdWK2giTTEPXwLO3NYjl+8Y+2qCRD3bsWpDs9LUfWQuinbAW4nbBKnOAQTjpmIOI7yuQGgBC3tXi2DdWMQdz5KiDvPEtl+1i3aexa3DtiJc0+VoSfW2bI76DCKAhZlLABwh+9pNvf53hgV1PoQ7UT+sRWypTmkmshPe/B28G747Gtx8HzDxndQqY1GvS6SKsqsMZ9eCI/6YYjv3/Llgm3a7uYMHHZBQbtkkcTG6Go/Hf40ie/ctK4+ADKaQ9FJqwz6aDd1r0epNKhhdOrX9hEzkvXleIX3DtcdCS1m++3UfLYZWRFZgCuRBJtQP+ZIur1fslZC41uhLoB4GqJxYIoqO6PvgQsyPUyqfdCnWGimoOW0jgNfEVwxzFC79xvh38GduY6iTDejgMi5aqJ9hCs8rEsqRZyUW5wvW0CKkxMABxK0q3DbBCD6bLTi/1M0zDlIeqzWrAt6IFbANMB8atnKtP9wje23IcybPdyS3mgIOgO0pEh9bO2QMAY95j4MVswculQgnUqQJ58DOD2WydVVUql9tvhx+LpMeauFl6HAwv0FRy3pJ1lud03dan7Dr60jPrHw/AWmufoAgeNaeTUc9ZKlJyvC8ygZO6V81vyjzZQba4VRZ+bhbqKXKtOCtfBGQDwQThoBQqGcgQxiCGEq0IjMjtmOYrwOIpF5PwEY8QGbVsoOArl+vCycB1runuWnmY+Qxh8lgMAiHJMF7MaUqzeeWEAGoh0C/m+TXjF/EhqeqKzCS2tPhCwe/a493gcpSM5cD/lwgzdqJKiVUraeDk5CN6Edi+wbCnL66JMuKSQ95dhjY9hmrJkqzNWx0cJVb1umsEtAT+TSMO9+VSsC6qQhfo9tXn/YF8bBfspjHyahaaeIKySuvGk7q9lnlwWYlaaQMPN4Ajms3mJll26HQB/eVuhSAHjqnBeaaN9luXVCqFLN0OaVwUNPrIBmUZwYY/LI7sS+MaQ+YIwyIr8vxb1xtC883MokKQCdCDUdFkmW6OwGHvp/j7XmNJmmWjZtssEoAd34Pdnse0rEfnDjQUM5FB1JRQV3nFnBaUdqOI6tftQUGVUBACqTNiVa3486CFduOqGnk+VNn+tmF7DXwKccwN22CnYYVmKCRsqkguJoRK3X0ypXdcIM3zKk3fAx0ZUMnkO+QYI2zTEtbyIGLrsi79HBuPX1RkQDNPgjs2q6hvQhYZFl9EQj1lNFeD85DoBQ1yGjJa24lwL4XcJXys/xqspXmurLMspIFyC62fVONN59uWgPfDn7/Phc9E23QJBSQ8UgwRts1A/5xtGefwKnd9MulIzBIwBAcTdd7vzwZyoYiV09yBaMm4gKQ5yT7Xs0ZqqCX7wZwzQvsaoZYbFqLolj9sZc+H1//WZYeL6q1L4daLOmgyR9xlVfRD2/X6IIBpjFGZ/iPxfIX6lHHMebDCaslxPywERAJPulrIvsu5XMiuSZxpSSYY3UXTFSLF1C9/2wpOeJyzJQSEkJRlpfzm8gCx2bWPLvLwjrxBI7GmJcPEnM+H/WwyCgbwFFwos4tNHE+EBLJalaHfXhkQerrrsag5snXZUcvKATySZ3eBo6P1tEfERt7Ng8LAJrBfP/KS9tG1MEQPIz36bQq5mMDoawN2Afw+6Y95oXkejK+AwQNwflwe7vPKEOeiJPhssK8GMSSzkc0avFXBtnzV19133H2cxPv35/djUP3+FoHejhVndOfQzPnOZ6dKqbAShLnRDg94HnRZjbWshSd/w19yMeJj0FciFkdBLGVVYmkl2+6ALThL5o4773qgCUEJpjADhxFwfgKEOktzfm515HMzFwCHss6hoqNjLse70WeNvlL0ubp1PXTc/IsXoPKEf3/4vMnNXDYVI+PzDtXgMOuvItnqJ5vNpXFhwf2177+SPunLn/d/PrIvjqXuvXXyAogiqaNYzIrkLb/29fZdO868Hz6XqH/NDjhVLjs5jeGpsiak6GAOnibK6/UnUv5Q0Avh2WZD5vjVqPYudxO4lrboiEJl3N8poXyk6ueRBIUn/ND23JjjWgIIKIoEz21wJvYta/CY42rwzenCNs/MVkAFgooICUYzr2ebU8YHV42lxlCp/M7IpVfUgGsQCsmGfSjvV4YtmM2SuTC8/MsVMc3IhKFXKpqlM96aXeJYP2jTq8sZ7l8EDIe1f59pFqcEkLxujWB9fqMg8uqbDXvz3bjd6XwvvluJ310mMsYNdZDhRsIYb1LJ82JGq5m6yrlEHdBe8wEceauioUG6AmHjXWSODFHuqUALjZGFVd7HFkV/0/PBoOq/tcZpol6OVWdll+Fx3+WOHXY6vzNxgUC6HbDlUZYcW94COaEAzqjxttCGe01zzQvyeLzQq/EygdGHNlJTCA7ZFo/uW9M6pJUIwyCjPv/UicLiHLkh5xiynhhNlYO//7e3G1pL3mJNg0Dk30HhSc+Yz7tMmQDs2AiqPA+ybIAh77AUdwDStSoPkuzCfsGbErbvHO75fwp44a1Db7/y73HQCnhVAoJX4K3sgycSuPKd4D0oGuzicc0OC2ogBf9UDnnQPAeYplugfLx4dmPb7VH6U2743XizPCgsthbvUQrp0Mt2F0LRXpXLsfd5dv7Dbao7n3numTvbqzjfNoLU8Q3uxw4jenlMMu0X9Un07CptyAfAICYBtPWFVHv0955+NlTuSfmisV6m3lhvQf9fvTUN5ynaKLcI4mCqBLUqJPDY4ucM+5S5alqIHZoeV7Rcp/xQfy1CHqahkr9VdmvlQGWxd3yn+B/DJrUwv2c0jU1SDGygMbKk3fN2lAVt5A6gt5KFmBVej3gNXtkL3e0kusf2iNgFmIFjNhoeCSaIlTL29FSxCZsFAF0xCO4GIiJUAOA9ZMBWny1YbQ3tInghO4e1JTOH+qh93g3CI69rl040z4MjoxCXz/CQ2mjKViY3bRFFHoG+8BQKaEAbNFfY/6Nv2l4GBpjqEjaZCnqdn6yLbkQ/oOcgGKyE70MQ3xxPtKZlCTSRb1jNv5TyognGErg4O0mEAY+WbTvwAxqjUGzhsG4JDWX2Spf/RRrSIrpNxQXfj1fggeZs2Ff0g2+BKXDKsk4Y7B4fva0ghjTUtp5Z8d4+O6j9byH6h5hMl/wDk2pJI4EonCI8K1+RwP7rPUWhfqskueA/GpyiVFUfrP3bsHnWB6pe/qdLQPBsIsSD6G2n+Xh0wwA3sjhCU3n/XYLITzeMtR4fhGXI1hfw5QDzRIZqXOa3fOhFX8tal+U6nM9KAvkEiKtyEMXd85Be5+uRgeLiAEH7/vyG3w+ZumhZGTu+nFifx1/7cKscDAWnK21ffSNqD3DeFb8pC9+RQCxeNzQ0+fmz26Qg1QSePKkvkFAXAdar8loznzkRksHpmP0LHa8JAaPdKS9MxzGdCV29SFtGYoq4U83wWrekW16cLU4RNw1aQIdh7R6s9U/Lq+gIGRTzYPp8lDhBUperKkZtzyAYBuZFbCxC6Nz8ZBvfCyBwwhMSCeCz3U45+G/cgp3dKHTid20LaN2geMsLkbE7Vxmr+vsdRgFF1AeVGKdFYHhSoC2M38CtwQvy6Cjobfl9Cw5D7eu7gD5cDB4Dx35kgH1QUQcUCuXE+GWlZBrz8Qr4+Ws7WYH/1sfZ11NUyVKkrGDyBH3//swEEVmfScajkRCVgovBmd6My8pWMYmEzdTtauV2oUdtbIVIkKZyongCC7WhQkgZUtOcExogDgz4ChfIOldSyVWsI7GFF4wW1FrVnMFoD0QKIjc1WzieqdsWjMSiqcGw1453Ir5M0APvufVGVwkCVyMi0uMjNcG/c3ltTAs+h0JwwX8ru8lC4WqtI5oFx6XMEue7nlmuxnv0Q0zLts5KNS6piyogNJo1ga4KYVNnIq9/aaYB5v2AICloxoPJ0fpf/9Z+e4Wg50Xwh4ADcEOhnb9emk3Ey20GGGPWQrKC91gulro7hoMeZ0Jgl64pRnI69VCrxztWIXXB/MGMjRAOyqYrtcigzmq8AZG6pMJ+cNBa5/XZXGZlZX+6+W2fzbZGm30fFeETM/MED9L4m3GI6PFdEADHYNiKT56+U/DorQLxXU9mxghe6Sk3nX5+uidQWWTYOw6AmzwPaSkFXj7ATl7Fwx71DJzvuZI/fLAJ8VV6WcCgD2/DtKyw94FAMU67JpZq38LRjF/dBWgjumfOB5/Qcv7Qs/bcBKD6Wz4Nr26hgaPuYZztDFlQaFJcVap0epV60J//AOyYH62YwVR1gKcKFbwq0D//AC32mfp0kBePaFHvwI3WsAoE2Eg51OGBIxRDP5xVlMbQSYaGFRhMM62pDkyCDy+fk9Zm7QZ4MDJOhdV/CbeWg3o22KCupwe/AxsWjgad/mMIIY4RQpUwGCN4VRZqzdqSoRfOMIzQAc10tsH1z/vJ1+m5y2DDPEY/ET8s/R3u+b0dopkD9bM259IqnWBfHjzRHgPSoNAcGk12iVjCrQ/66ksMz3X/uScoDdUX8IuH6BWaatgRZl8F3HbVzHNVDbgUO9MXAx18qbrIn9aMzshL7UoSfQqU09Tp+Sj72K0VKY/0PqU4Ynb0wQbPQ1IarLewlq18k7exs+9thHJl99WchdX301noCyqLYCw0JN9aPMo3rEgC2pveLW3jxkte0xMOd9SbV8TBxMwn0IWSvISi/MJfE+v1M3nF6QNv13r7HdxoceU7ez4EfFDfXPPB1IseLzFTpI79iR+a08yNG4z92NNdzDCJfhK/udWMHOtxs40bIAuK0xQPhgZnDM+i7LmJ1PW4yM7ktLjvu0BTWNWiksWVMwv9FIs0WXKxlui4Xx/cY8sFiknVelQ9eRllWKNbClo3fWNAAzslrIqNgP6GxWr0TJ/0jH6UJV3ecKRZCjx7Pz6APUF93kq3QAqVOwlmeNw/z/mOVYyLzGfLPhmIPLUmr0+OnGldz/LU/WqUo6u4YzP1uTrc1mXjkGWstQyfKizY6F3T1dJkNldoOMplKn5N53dQL8OQTPDQY+cdj9o8VoqphGXKIuWESC9aPFs6x21xgBEwu3pVKPiX5i7fip4rbpTJDGazsQ6Mg9PH2tre6SR0dFcsDy4CZK+NDYHhkuRV3Fra8X89E6G5Cn4B2aDUYuWaWVL8cdhEeYMOkLn1HdfXX7/XYG5eVBsyErIsL84bDHd9519XNOTWX9zVyIInQgn2/brJI1+CPmN7KHOm1fJtAFUJvuZ7sBbRAqrOrHRvLEjrayXAZlZLSJ+qeD/064mVxhkvrf0viWhfTC3bMCiiUg33CR3iTsp5IR8Ik9VO6vD5oJ7jst4b9t7ToANWtSBvsEdzRl/CPCJDamPr8gNgfc7qiEQaMYRxnRYuPPX6ngPPSFgVgig86Q2AXulTnoenuLUD+NKEqO62hQB3Z0bA/XWaJ+UYkc9gy8OoyGbUrKXn+3L2u8P/e8a2xq178q94btz7Gan5wPDZU+ccd26vhgAKSEX0JhFneo/p5BXBsygwA8MBdyH9zXPaQ59U/Sj2sAZ0QbJK/aSvHdrGBQ9nnvRl9VO0p4nYuZucxz2oPC39nsF4LFOFiWmpkP19HQ5gOrRd7CkAKFRAK8Pi5lI2x0MqU3aukDIb8+mnqjmLGIImrhvUGh62oZct17WiIQpXLNnDRBSnxHIUQDvPwDgOoujyRUIMaycZFrmSqdyemWChMIlJ0vp/LUF0T6VlXjAqxhzOlkAkjyWyLv/kXIcYrDf917NmZfyVLywyAjFuBcO2kstsLGTfeX5V9YcMLLca+sjSeck+BSvRmuTCHhlgSUg4Hm1WgRuO13AL1EwcnGemYYU8YA93O5OCPKfp9+BMfZn6X6h3b5it82ezneycWLSICwEltyhYuJ0mPY8vS17GLVHymyLGR0EPfJfqqGzwyklz7pvt72zL4P/5FaZJ1p4SNUnHTtPBVwqflcAL77JdBQbUTIBQsMbgiAg+jRSDddprDNm4b9pk2e1SVUKOSYewXLPhgso6W7Av2GDzencZg/3XCdOMBBYvOBKtRm+NVhXb1AFbRSQmIYPFzbGcJOnizJKas4QIdy+KBgsYa5kDVI2oXxm/6gjOsCyELq4J5kGQ3WpXmDOJ6Nqisu1sOMiAxU/vj2P2Go+cHI38e6NnDrAkFTgOWwyikKXeKM/62WcnmfauhkNtuMfTmeguXXDqrtsD+Va4UGxRgbiOIm6aK6unOQ27CAihRGWFYorVv+XQm6r0ZFhNk/lquaGJxkbkoTUHKb7v3kz7OJKb7Xq4D2vAERSaTgsa777soN8xmllRUSK+hS0tdN372D+ES/t7tr8untlwQ2NHGd/cEWU3xx+OjMMn0obT6E2gh8hhkV/Cqp+AkS3UQXcj5hd/w/n70xTInRpkmbFunRi86LSFTgOi0B26UU8MRCTRy0QIMkUqvKh/rO04iQdnQ4ff6EBVz342dyx/qdZ0mSQeKmt+5qYMrO3iMS31ULTunnvHbP79u02IO/VV4VDQhx8LBQCnQ09HOF4CAOEJPj33A7Q4HnD/bPepksvdQAXDoY29SPt8gGnAgD5v+6RpaESOoKjcE7oO3pIBcLEJhY3Bk6U3Er8DtxSGLStL1CHIX7YJBybIzQCKz6/cFvQYVcHjy9VqpXcb7UXPyr0VA8pUhhSOsqPoqlOjgv6uAXidpKOttRf/0xEGKipu2cESDT5d1pJr/zHyxh7qp5V+IgZ+llVIYEjT20vtxHsk0HaT5vOV1D0zkuBhEFAClesKLJXer0Q4gyw5EF1b7qYCBzPwp8vkDeknrpLGvvagGOwNsq8clgZ1Y+4RKr+sGX2enRsAhpBhJN6cJP42f43q62E+zkhI/ypQqVO+O+T4z3Y9cvLcKNNiUK7OD7smaRnAIWMY9edpiLmYhVyCziEvvzWapMhnsJAHHCHCMGyKXlln9Mdzk49Wh2ylwQc9euVNGtPvSMUCe4daQUfzUfcNOY8H56r61EADbCdQTtOm5222ShO0WkFZBIZxFsCeh7VkQlhSFvGR/pWIyVEQ47XVQKBsZViWs/ovr8si/i1rBbUfJTvU8yx5wfCarw3vN4k+F46dwc4tw82c/+V3Nkv9ggOJmQYwOVJBa+iLyUopuPZhzmKcbZNcxA/fNekTgI1cKYB7FK1G/jURZdLRGeVH9m+hwjDYBbr/SaLxgenQiE9z3NpszMUOyieLS4nZCNFOmil59lbQldHrm0EHMy3bQJy0PKI6r325hYA26C8MyYU5sbGdTzgXrNNu/85DQxemPjijpNxWpT1SKYaqhXt1Bz6It8VbuOcYQjqSsc1gL/2hnbkikxy++eD0eAYoetLtjuTRWoGb02ieh7QUjpVx2OnniQgaemcfNhv0y6jDZtI3D8W7e/t8NploVyrkjdVy11W8UE9jDkTWEE1wgSg4w1nrXJVlNrOW4Dqn2XxJP+jYmtELDYbGAinqu4HmirdyzzuExGRUSzCfyJZPIWjZLxl+qYpltmKJZPaXdvo4x9CPRhkYEpyWIRRJTE+EjuCMeJ94Aiz05dL0chrNTM0FPWGQs45SuXGfxZLZzLB9Bu5Tsc3V/BSIgGDrGMm1r67FX/uPtdCyf1gLDTvSQORAx5b4B1/xHEPBTmmNdcKWDodx5ByYILXK4M5H8xXRduudSuUzxxTapaHvdctkpjf3zZ/2GjX68YZ4Q4cpqUFYUKhNdffRywLphaexxuM2LY9qT2h8ihVnhhzGg0SbNVg/Nsv3+sQNRDHusZCdmX5hy5KRwN5OWjGpX2oWN0cPpFu94UKdAY+a1rUpjAWF3N+rxbyWizKZaHdLGOD+28n7CS7TCi+vYsG5XHaqEScBCdvYSK69YxVdYADziwJsMAhzYvoW9KcabxR9rNvfvV0BYkHBgQxzYG0dc1clIQEH+hgiVgd3XKJaM6K1sMz5Wwd97OxzBLyIK1SlYEMkwqxqaeB6Akvk/FkNkIc1KtWyWHZTbcL/NYIqnHo9XQNDmXMDsco0gxiGSqhTv7gbLfPv3E4BRfhj0h/b1/Gww3TZAIj+8s2qkSiIlCAATqF4S0SCuDcNxFFeI/mLpYHz/1IUFP95swlJdsapLbf8CXQXtwuMuGpwjGvTyJ+s5mPBC+9rEKmOILWojZgfgoTc9nc0n3JE9F0ktHWMJEFcUZtRfghOc1eJgwwouFHWw5rrGVu/sEQoK2LyUXu33Wk6DxRpvd8ghT8Su1338gEKg8K0Iavr3FKvydPIzVk+TtMNyTabZfaghV3sek0kwGjQ4qt/mq5lCrVmKIMi8Dk7Io1SPleW2NBUQGx55baQFDJdd5F5GseQUVQIhvZmRWZ8VwA8SrUTgRsU/KYr+hRDF6o1JSKcHTDJd42bvOKtLLTMKGRev9UsAr0gtgZu0JRT567Fgn30HWdupLWPWHEQjQA3P3C3vTcbKUCEWsxA/Xg2r9VTbNCnr+75tkDezO3zkvbKXQGzm2hNyVZX3K6oSAd0dOaWgOEKXBv55yLtYdxs1B4h0hBIbDwoqAH6Yye2R+IB/7NGuN8biYd9Hs9mxZY5y4cpumXCXWCKtDl8ds18Y2P7AnBBwNeObBv4gFccD/uNwr30NurpaMcK3yiOUCyoZMJJiKLEYjMus7dDEyu7rDHdoMOH93xB6DMgiImKtWh8zlrwel5Ma+50T/+3MBArK4ERZn0i8sJFj4IL2oxkfMUvTetBna1utBRjztgUS8N65TrkgloTcI1JNLgKIzkLPpONa5rQbDCq/+WEGMvWJpDKDhhdznhovAXzugLJ3vpcsCy8luQWuRPhUsyTNfnBuFbtHBc/I09RXZx2C2fU0RegsfeGnLXue7UJVWv9TKqQCToqaDizOraDgoB6GZR7hzcvY/OIBMpo9z/J5MPO+t0TMx4XsXeWV7uz19Ewg/VeqMMbTORwL8t1bZXAeGGZQLt8SYD636PnmH48NNpNmjQHt9MbWKyV4VsTcq451awzwxYYzSQDixPjnYKG8zOj4Ik6wJPjmMtGFuUainISuec7tmQkbonmXxeBNQWVmgxKFiqyGerCPWtCDUwYPt1MwFGte+K+G8emHczccqYrq43PxSfYNuwS2jR4t9sa6bGGfAtNWtDIQuxv6u/22gmR01eZhSqPvFC0TW7Rm1Ui/dC8XQIu0kcncnJVj2tn56n7w9RU3n19QfvEhL8uHI0lmxYq7NfmF44SGNbgFVmkp4GYAp+UiYdak6+RB6Kzc/FDXYjYNxmrI3PZLsKHIUUhIQM3bdEWKUYDDqB4YQfXKYpz5EqFustuZ2Eqjzw1IA2jiWw7kh4UltYhvIeRNusyvKJfceZgZ4phgfmVvpXjTeSu3+P12Pmz5iv6DK7AvUg2VmyHhSuhxOrwdQmZBOpp+th6crHO1W61fE3vB3WTJMmYRzKnBajUpxRuOvD1MR4dcFdkmD67od1azZFD45OhQlAKw99sh9FOzjiWjTB8ObewihuHum/Ffvi4ovr2q4WzVUXwSifMJv57XvLtD2HMoXRjCsHF60Anrp8gu6zm27Wl6QsRRtAIAN/EtlyG68UTVgtKJZCFEtaJMr6UQldbL7drHaXtT+pucOlpWVaeVpuIvxYdjE/VH2vTa+KrpSJ6Vvi3N+OUY/DSxKwPU2W7gTpuIKHZRVLRv/tcLi+g2MnhHscNqMwEH+b/jYunV1oOV8/r4QXj1np6FGGe70Xsltc3JcUtgxievKikr1TMJxr/9MYzXcMTQXvxjvBGdiFR4iVsg/v7fuiAb0Ecb6XrwABF1JbKJzZWMmRcbNaiVj+q26KyKMcJG1XznmBcsWkvyUP3dmgtWAhWStDhz99RVqD3S2rWusTMCgMc/mLkBJ+eX1Mhx2wVvyRm7bjfjZA1l2FIq3T5rNYvd739qM+pNDwhWOxTbnN5zVoWVnl6ZywtDLXpCeo4jSpZkURS2wkpWUTrcGpUZ9+uq8DxpVXhZDPMg92Xk7uTzgpw3PR9pPGiweebhjQZXMdpWDfuCZbsjhVSXoycirlnXaHsNKGSoLWXZ46mnFSPCmDiwzSsQnGsf5YvLxXMY1X/Dfo+pOrEOFj4Wnd1aIPowhZ29cJUd7NSeSe0z/dd5OW6Tm5oZIGzkLuANXvUpiOog6TGq5PmEg0iQaGq4PGCTG+deAl4v3GcegLccU0+ezV3goUV66ALgqBohlxnbr1foXAI/OuLscv9/CYZ/lCpqR4Ra1+Oqw6GRxhBvaXY8ajjhisWe5TxetAVnmLPwvJwsPwwO0m64rJp9oqy1FqJW6FdkLk1Op1KKNA41AW6rHyCHdmj+RUqfpSBJvcTEZ7niwvypuhGqtSY6iFtYkzCaPKieQG25qqhtA+dpJwgn9iAVYf2KFFPUbBOozQLdKTVWUSCvZM718eOOU9tae/zA75c568uX3VGTWtIA+FPZOuh/gefh3RP8I5TmP38+pphnDNnKiYUWcxHsYtrJM9MWd/zO3Oi4b35Fdfzqbja2zU4eyWkPc7SMCjZhEfkSTj/BXrHg6eawbs3LXQPYCIVAaxxgVQZthRqFnonR2273EErtxmclqvq7Jm4yBpwm5+NT6ZMSGYXhwcCPqfUDacRDe1xWnpNEfw6+8wltYvHehWnUys36zj1ddRcIm5N3nI2s70n5D5w+VigUb+KhUWGWbPcCrmAXlq87PrHZiEpBTZ4lCQPZYnX7X+b+kRcHs60rQanbOGrtYoVLKSvlw9bc9t1/yaB1FsK6GbG2az8KqnGTKCPejxAlRl9YN0v0R+rs9tX0ACg0AAjczCkx9033lIQm4x6+ojLKPCxS77zjKxmJETyuRXRc1MRHPhrPbQvOKNe8goprzNL8922GkpuZiYWeiq9RPxHV5hj1aOYLVPgKzREZJW7xJKKOrs2NnVQZPeRKWRc0/sxAdqDU7w1ttq1nte2YiOjPP20V5SSTgOxszdv72HXbR1AMlgyZ9FowB6QW6hxj1qrioLA6VbjayDv/Bp0lPOC/QORcUijdHosFsqbD3rsCv1TtZd16K38uvU02N6ntYU3iq0xe7RxYZS4EK55xSDogkro1GOzF/cYPfNaZJBIdSaTwa+sv2KKbtqv+GU/4yC/TtbqG0yEAZuKerwp1KJA7Nt3XE6axT9ugm/ajHbRzwSYCSqhTY3tCK3nulEkkQgwVKTTOIVWU1b0R+Mw2FL3PFW0mZ2R9b1ewaEIdjS+g6/R3mJgG9chWXvUIpTPkMt9t+dRN/BBPHbLz+xOrEHRqWV/8h3j3ATkA0zDWQOPrXNYgp7hO2ItzRaesc+p6PptfYH7xA/+aMSX5dpNAwqbyTg+o1K2i9qmXycVZ22txdfgtRnKXyKq4vpndIdlzzldA4O+FG8UBsXhnl/68X6MH6Ms5ApqcPqcFeVpxFjrs3Gl6xg00t0s8CAU3Tm9Zdm3TXwhb8YM6vhxBJrUD+8LmwK6plGTBeOODEQez6po48tEjA8PjmqAlnk7pBo9vLElV/2zIYDbKo2pvacRPs0+sQvWF0WPIT06BpSR4kRawFuYJNg3ysGMugsBZg9RxThmPyyGIiyjhPHx/98avB+UVH9kQ3lggp6/WYLb3cyt/t73eleBRTvsTgeYHz/roqIiGgYFvyuIVXlESaqniCh292wzI/vFlpaTgBOF7adN5QUYhxtm6YdcQ5unono9JceU6mrkhfzfIyMxxqNS9P4XHrLw0pIc84XKUcp8SKZvPntDApa7UlrWav7ewD9fK5VEcfVfmQxB7BqmgLDcqMWK0qNSwdD+FcMyK7kLRraZzT9o/1ltNiM2CUHGD+yol07m5qvarzW21pT9ogRWbqjREOfkNte8zLvvpP3bk/cVr/VYreQW38ovyz6rmmiYzYtiUl5nB9hq2xpi/zS00MA5n7cMZqG2g9lzARtKI/ZM9eCRlLN7pcFVWwrJ0ltW+XaYPWpSQbfO2Z9Ox/Pk5+8NMyACtpMbYC6Pu5y+H+ZinSiN/Udza6y6uwYdk4hxCqw/sDLkWeSnaOWRPYmLm+sV4ArQMqyDNTZlHvb9boZ6DjAH/f2dMmNLYut9kL49Jg/yR8TkCNGi/Rg2vVq+1N+AyuwuvXj3i+tMoUTwmEWiIpB+oZPowX91HFckzBMj9K1FW3xtfDkf+qkzFQCBNEeBl3Y49uP/ieGRZFt3ikW9VypuODuGYI/nISMfwpRP2CZd+Ckf4yYPomsPetEy8WfgOwUPNtc7EEycT85XIvm9PU0Ik2AKkvaWMHt0vZ2Fff4M15XABpFh52gECg77c60skxUKBH77WJI4nZODy6iUaqoMDwcCz/jls45PlNMWgV2oCZtyUqm824MujIiEx+4/cpR59GqqSbpIJq30VFliXR7hulVq0g4hxA9d63noh9TbefTI4GUuyoSutsXW90kQS68j1HDl4xslyrDyNlVqMYtKupM4XL5LAFefuXR7+So+UB7vt5AZu91CEmSr+GNQDRX24FB0FIJcLhgyiUEuaLmKqFYRFPQdQk3waI47XeUchUXeHUI5HcgxIARp8Qn+kC18KPFtN/SPT+AItm60esLQNgMNVmArR5lE1ptcw4qOeLgP0cxuAi5XLmeYZ4/zEKPZQknZwatrCQ5aqP2pwl2xfelqEmjPLkYrDCRiIJrgn9nSre96igIYwDxe8AVwKmyYD/6e28cJjAsPgVNvTeLrwd8b8ZGCQER5FAMvjBKANPkYlufKELKgqJjORt0rYVL9UXoi6v58ulU97Ewl5JA4mzSQ5MOJJ8ZtvqpaArlq0wy+HRXsBHPBto4nSr+WcEqyZ+Vu3e3fMdVXolPJUVBvxkhoPwdE6LS0q3EoE5t3tj4xAZ1C7BxWtrIs622HAfG+q5Qj4/010KATalLHrAN8p8qtfM25ytGfafvQDcLNS5Y980vgqnPj6TP+0taFUDE1sJ9bUuJ4oAC8pmfmEnyyF+nfDVNccqFwhAlYVLmqyjp1VS8QiQj6lJ/2jds1TIxZ8t/sTJymVF9TrLldsY0UUOghzaXie5pw7e0I+jahJp0UcHp8IUss1mIFQN90EmRfKCu/wdzYB454HgqyByM5gH+ErlV5yMllPBey9IECOsOSLoeosAQ257Qc1p/yhvEJ22WNKIHhVGmhde9cEBbTw4AsGBktw1/fYuNgdKZFmutg5vHadKPAMbcn+7Om9RirsUbUekxieqiRMGQ7mBmaUvXqvbAtUw+uNBPhzQg71i42jI24yd1VtR9ogKQEWyMouT6WV6lV0jOh+VrrNFCkUjqqMnWQashm2VodQJAfuWdEZL4ZLDD4vYBoc87lZF00yguFXCyWGxodkcrkoBy9RHTiWgmx1FZK8RKO5GBCUfR78VsH6gSKL7CkM5PxM5tdYS0juymaOKMjirL7u9wtoqAzX39tFOd8yCSQBSS/PDXM3cmkp6mpWakL+iZzZAKfdIArgPc9KmndjxBYIneVjS4y7azHYpajdA88pTq0T2GKxX2M+FwCwiKZunRbq/F0XKqtsH9JExxOGj/DC8lj3fACI6Shp9J0k9fcmMLnDQMCybvtBoeRN8praJsaAKGvecWXUOnD4LxXM+iQqlAi7vD9HnVMwmdWMeYioswFFj3StaBapdyVSFPg4gqhZqfd7ubDTi7K15dIqOqMEq9IUPl1Ex8I9cclaz9S9aqvVDGVg2azh/NdhKHbQ9451gyNzCgXU2PyL6HhVCqceO+vhgggH5THFXH0+OPI+5nHEc0Nh7Om6vURi9lsEUzhHq3RKtEDRGYJzGQNBEUv+rMqrIiFew7dP1V/G2y1ew8plDW0OzcwzLBqOW74zIgWWnlFK6ey1As8HeMyu5Kcg4mNk4uRm1yjUs7cm3AXfny6AXn6CT5MJZNFk/JNVa8pwuNSeBiPd5PnGeHks4Oh44NHUQ/3BA3rxHStj2PrXaav6TopadsKBty2oGcT0+VYoougqD5OrrhoOI6ivRkRkG4MsaBPlvZmRtl/cZlxxmrSaYl04KZpa7pmadzS5NBul1hwlUssXO2xKzFq9PDtdz3wh4QCJI6DNbNc35gXbDWLSTa3/QKqO19rV4wSu7kZ5aPMcqcIJII+OE7yImnfnZEASyZTuPvvrVxfsFWxYJRbybCpnVkdJSNwCLhBQ3BpEjm5rqtCzIw0JedpRjY1g5bHPUJTUqu+HrBYcG2RLBauDm3caw5eftwvCUfwXRqSZkt5L91MIQtOXHPKl6db30dEHHpnWmxhEwRPZASp7LqPPUYFT8NK7nQ/DcJspY4QvL9jQWVok5iYZuS1UmhRWOUwMxEGU4Rlj6MuTqNLkO+93812Mf9Vlo8gOf4C//E8hl/UflRtsDe+O715VGB6SO9/sLo6W+x5/AnpoAsnbn0fARzJEx+4zLq7TduD6PuA6RU+Aj0bu70PHX3UA//bK7ksA/3apU3z6zwvWXjM5RHlAaC3nY+M7APHoHnB35/XK5zjV7aKR3S4FotW4cs/2KxSgeeBk0NsNY/2ZhKPbp0F+jfx+DU4VocKMtwXRt5AceEzHmigUbXQ+7LPG+hiEe7l13sBFAxu6Ga6yatfk2EW6H7qaYu599wF+KCNxHU6U/TBWtBEd/LQFZffRsmsfGSv4AKqrnanWMIGoKDg7I1DQMhrM583ULwRbxrKP6XgVHjj2x05NgYIs+EBZbLsxpAxTHMVKf++I53/Zfb4f8z9SeFhJ95JQopEsmvcl+CRopM7F4AoFBEC+ZUiWjPaYlK8bVf1hIcTVK7FOZ+iF9IuzeheLwNx1T5TrDW649AHIkj1CoWpx8LBH1I1znjmFIajr10ZVuueNlfyw4lFlxduJBzm+06Ea1ZvAnBMOC6cBy2oVlcdJ8kTUA7x5I+VEhgoEkFs80womkVEiwR9wSdNd8WjLXMq+gRyohJ6B8SeZoKRN6rsQ8Q3bx53R+IDUGQEHKuBJyM7UBcYNvyBAmIg1pqMZ+2KIhsxpTyjTX1l8qt2k1yD8MDM598IBimS3RDnDz374OGxXDoZddXJ6tAGq7/4B3/u4junJvgsxXp8Whvgja4HOv28uyAnJeaEQBJ6VVluw+pQSxKDBpc9crVVsaqbVU/B5fYc6N6GEfh3fJjX40gQpwrcW08yKH6p3U1w6N8SUdduugFpKTqfD8C9JFuxUzaK4bzoaWvEIiG21/KbtOzV1vXzOdpk+PM3b90LzyVQMb72sme5nTBrVBckpjAk75q1VDuCOiTUTKNa/NddtvKEQHAQ6AHCt4bHoFltfx8kLSrgBYWdbiEtZN6QeEQGFcJ90wuM8SGy25mudDxT55kCH4IxBo8RkQ8+Kf1w7+BYPqoi8KEDeICfKaf5+TmR2hHcyOwxT3is6BEB6UNlts6xwra/veCx6arseRaml9jV3CopiQ3uPNoG/UBmr0DwSGzs4+J3EO5uifM2vGisbYECKtMycqAeKIpG5zuCsXhMLS/g7kuo+cAOLeGOs3PtS1CsGxo6u5yeVOz5vNWj5DqOpgHq/X0IIGALPrzBpSO9i1nbal38yVufv0IN2nmUt/DDP5s9xnk6Bo02blOnxC2UuJ1hrTs6DRpn3+WGOSxosBim++W8i1yqoITWHI2tu6rhU9ctk52NP7z5JawI/ocii07Q0ZQv0dkX9ygIziIrT0wyEhTfPAKWW1K4/NPCP0IHldSqkiFbDtwCzF2BTvDf9+4XUPer/3XlKScUvXIkSLE1nflGTGT/3VjMXZxrsMYvg76QMMbsHQwIrqwtmEojl6wAUYkcfosPPZn1Ut6yLF+ln4ey5eGbNDBmOgdwLLMQsw8hImxiOtZ7XEWUbtkZXfHceKZIBHS12hT7fJIE+XUoQDnwdQKnzfaSx+UKNWQaR6xO1GaBUEgZ5an2TVYZGlVesr4gn3CMOSjgfPCqxZTl2ooPrwaYfDL1OnYtQKuuRgvvSxfOuQdrcO15uqEO7Xcg2ClpmRZUF3axauAUlNWsiXZqiqO6nE3Wrsw6BjJ1oC6jDGgJtDBAlwDSEATBK98b/DmLeP+Xl6cLqYTREWR91gIPIythimFAvNHQ2loKV5/fhmxooCU9BbPJZPX6zNqg/999JdVH3gEAeHy0QSu1Xa6SJMsV0NkKdkr9F5Z3dDQSCwCeMJNBAOw6KBudSuVhpVolDwV9coVESlIqQnUlG5nT2Vw86D1hJB+LtcruYQgDDCXiSk6Fc5KmByVrQqTcmqUjRqf4L1nC1w330JWqIQvP5nqtoJ+OWIMe8zKkUd5gywoRa5x+acabYIfExCbHRd58kiBwBSMUUnEZce1JlivspIZE3vKnEuS/1SR54ooxDujjjQbeVmmFbhEIhuyZ887jvgup9o7C1TEmA23CJHzH5+abTdwkB2I734EgH9duZJ8bZfzn3DjYCQbhwSgo5ugY2dhg7JjWGAG8IUu39W3sCvraq00x2dCiVCpgwbyDhpVKdkBQ3frdua98zziJxZWOInC+GPad2r+U8AYbK5VjVorLJhfZHHaXngv62lUThJocMDy1zl60A5AZ3xucoZXLdyBlxWayJy9Jzlslf2qd3Y8Ne4UiOLVFQqQX1peeWJ+4Kuy5alDORfS/EfjHD4pDeYLWruVkHXv40rDsCAqtp8nLlurorN24+G5+xo0FHV7H/EX1/25V9L9QwuY03Y3jpjkPui3Ka2wmAm9IncXG13ndbn884fVDu2MajwbSjuDPuXTxaZXKFitfS3cKeNin1L/uMoMZgzojty7krsDh/Fs7c6nNZ2DIrgKeZLMoJ9CRPZjZVBdBi2P2UgcJSw96bsKg0ayuB4ITNSVllP3Gi1uAwpntajwN5uDBgmy2nJi/bDM1+UxmuzPU78NiuPt+eMQU8FKPA6xkOW03n4XjbJEQY1ELaw1BaBT7x/1bxuG+XS4nh9zC/gnfbUeBU1kNFiqqTbDp5cFvBJ14DGITDiMOGSCd37AucPRGmb8P8123B+0if2LltQtgQHSqfjG85lDMBmtD4+l8/YbJsYj4+jKnAQK2latJVhFhtAoST4GuL7qnq11rapTwX0VOXxSzqlXVJe0Gn4svDjDAvq/680vGXESubmHbUhZGGXYdYwvAswkLEScUfFerQuqBI3SK1b7MiGDHAhdr1avJNk8Jaqg1AgwTi3c1vinoqasX67dEqv89GA7Jewj8L43aR9Gt7kQy3S6PuVhRzVODPmO1IzdBQWfucf2dJCllwZclIP0psEGyhj4jY8S1krizOeswPhODZ6sET7awWfYwJVsJM5s25rkK+2rOwsrm5MALKo+hIZ8jlEMsS3m0Nm0rb+MXl7ymAOcORvPOJlkwLPZXGsi7KCzM2rCdubPZdkBDj9KJ4ngWvhZYKePY4glUx9khN7t6HFgDeQc8Z2xUmPypCEGVijXr8sLa57PN5yukG86Pgd6w9OmiZoxEYtGo25UJh+1yxBFUVxjbbFCdT8qMTAGn8jrDJclMUaZzGuRmGY5YfvINv9wPQbaAlLk1oB+YPadpAp/zAxWUN9e8lfq84EtvHunDA8FfPdBMbhiMPaXtVGesBD1Zkf0MBxzMnEORi9nbVMrnk8qV+n76nukxBT1557YeIha7Sd+g+J/FKbTH9H0GsJBglNU8m6lhidJ04/7FmdpD5yQqBvVF2GST7zUPXz2gj3yyEoIEJUgInIrQooxwJNedf560HjIBypAuEdI1W9FeMfTDKDBbWLKzTFi1utUINJ098zxfE7f0aCYCeiIbfAekkoc4mztne9m3ylNO/TwnhyPV82x46QrPkFi36jO5xzpPsqbzmXx8oVVK/TQ9rcndGs/48lWdwTXGSs9jhNROVBk47oqY+6GiZ5qMD1I3S0nMnG+NVIW+z4OZ5D4k8HQbWEDHZXmdfiALGkjEbs5Kf004S50vFHJra/htyjVsi46YlxfSnzcqaiSC3jsNyVJaIu+ybF6/5BExb86n/Ln9ES0C8A57NznglLK1KMUY9+TkYng5Rv7impvL15pUt+xOaC57l5fCL0F1albgQEb+amuUkU8oLo3O5vO57eCeplY7FDTj3m0rpXxMhuObG/nljVNA07Pc16j5n5iF9JGDda6lcRXv6J9anOMymfXzazeGh+ho2BjVUNeLthsxCPIgcJeCSFq9gX5Gn8TGBltxHAX1VTozp6e4/GUGyrXNpk9zObUfybsZaHZuk+PG4W4wqTcJtq1uJsLpFRvgX8ACUy1vobGfuJjILqA6aw3frxyR9VDZkisYwDzYNgLCbmyw2vEiNemBHjqhQX3QBx1hJ33TMJhazjhtlixQRMvB7ZQHBG9DlHfEuE0H8xmBKNihIw925NNx77azg8vikoqq0Vcpd+15IuXFYi4OzFaE1MkhI6cSfZYUPakRRqlO9iZ68fxLhXbspT1KY2xKAQssNem7L8ay5tzsVA3fr3U019oWR2JgOhisGNzAWmYmHHuL5zK12K5RlhBct9vZLs5lc6xhM676FBpqLqTdkUooED5vRlASTHHh9V4FqvXJTQyXlsxZKDYYCtItOW82mewCzdjscXkQR2lyzIp9O5krt4ANF4FsUZvq7vKOuiXHxg3heKnTKcTzdQZyx/L9e1/TMBbXiFf5CoStI7EXISgzbWDhzTbkW6+nZ1rkp+d4kg1fjhAkb2Ipv2AdxzqzN8Mjr9X7r7OveB7i0pJPtwLeemQ8b596CwQFq3Zm0BzcdwLDGGY3+yL7PSf9vpe9oBBWOUXrigvt5Sva7xaIAWBsVKE9rW+Bs5JMhjhwzpjYnodwYCynlf/ZhF+zonTOtjQJ2p1WNvUzLMHWhIhmAQAHC0s2nndeTuwudZi5eyvReyj/vrNOw8uPFN9MCvzouxQ7GZOA+7M0IJHL0h+pj5wrfGR9JpOqb5n0ulft+WQ1fv1akJHwbRyCN7jHjZ5MkbkwGtyYvT4eRGDh3R6mnnjaVlj02bC0zAI6xsdNRcWjxNKgw7WR1O+V32XSmzWX9ND9XWAq2KPCx5NHZDJFcudE/1m4gs+g5MFYMCXxb8jVRY1UIb162ealsw27RXlWo21HTnw3yjq2V4I/M4MsJCzlZU305yEsYzRcWrt6N8ISlahWgEUjxFjiFoIvchSFJAM5Q6JeVnYk0/Dy0lwfluBFzSf1i7NizdUebHJGo+ncrp6XGAS7oVbPvntyG+jZp0kZhyOQyuUyjVtZf1V3dWTS6DLq6fhpQJ6cjnSAsdyWFM6x4LF+vPY1a5ZXP4PnLSSXriedfDq8dDWENlb+2tHYcJzWX/3xW9cTfhK1YqZFuF/dgueK2XnuESs5IxGmIT6N8RXzWDdpakw3rrHv+/twozzdoC8xkLHpc/2QLREeW1KiuiKCZqAlVMzTW50EWkbG4gNaC4wXT6qt/X6GzMwf8Grt5ckexO7o3mJMSGPkrK+b7Dt8cuDwqx6gpB8+h2xl7Ui9lfRntKh3g/4P3m8Hr0IwpKW5ZArmce2jMAxXY+d1Vej56Vxa9aQ51O1KhnQSJGMFrqZWMPiKDWRSI0XBomoZgy8cj/s5A3K5rKTG2KEj+suUFzGo9RCfzOe0AL9eIg9OVfn3tAhopCd3U+LRCloZ8cvsP+EO4hq57sasygdMCKH8ZnFv2o7OHgVF32zli8TJ4927BAnMMNe2DBei0evA7BvLFNMIVStFC7Jo1Mk/p/xIG+P5NgKbgePPp26ll5tc9yazrNaichqYNqSYhLsmOpTqglhjYpelG927BlSjUyvv1/KUFrIopWPhBAGnX6T9EK8QETNTMK9caoXRTwMxqtPWB3Byj+6QH6uv4eFfNoY84kAMJH1vhXMc89BBuS833KnJvjGBku3Hq2mMYJ+2O40riPv8h65UnhMPVLsw7Umu15/5f399joHZvVSou8c445g0RqVQ+G2tcOsyl3vLXSPndQTKgTU46Mg7PWm8AXr5IlSLmLZkmEWL/iaX1lF3YohcGvIkopWUXFKy9EaTgUyM7BjQv1urXwk62skxauF8FfRpCKHUlcQOElrNPRFEwSDiRhoy2FgdOd4iSZKB7TI2r0CQCWmXYX6ylKPGqszMr0/xn84LGfKWEHF8x6OiYxaDX7eI2X2Sq64PUXVyhBzi6uJCu8pBv47OGbGWn691mjTjJ0UmLp9I3uHaJa2cPg9TXZFgQ5EUgTf8blsaDqdeoITdTuEFs6WslHmyv0wqup5Fyj2qLtdZrr1dTvpodgjFz81Lv2Us53PFmOZWfC67eUI39GjI6NeZuOVEpQatSi0f4AL0GZKT4XTf5btXILnHaNmlxjhumOAzzFDyIshNZfM+YkevyPBEt/3lF6y+zx40EfXRRzstSsox43bokn5ms8UUZCLYY/946a6gcaqExMF1Ncw0ViWviQVTqpPbJkg5Q9GiaHRhHqt61sgTxG0Li6rkssbKAN3kvsswGS2ChVUSpTW+vFAMckGXV/QQSRouiNw2yoT2O+IliAIlo60ghZTQyZg0r1f361wTtpB+I8OphTkVltBA4riCUpFQXb7pRYit21DA8xgCCI/o9NnGL7PZQhxjy7IugLUraKhz4i53lzcARQg0SYWwSEso6ErlJTWB0zgduhuwMNQlxOXAEmxSoB6iQxdrvsuyzdN1iXGqMrjfsufq8gVHd3PwFSoc2honge0Tkunc0Ep2FHFkS9AKt2+DFj50lTksYg+F5Z0L4uWSCwent+ERECSblbWWGFlQnG+BqtpowETDnN/29H4hrkn38oN5/m8XPQ484bXoQr4HufND0UC30dqd2R4ORit9jgrMH1R99tslIjgJ2mMTyKfwVmvybPG3ZqOgt/dzWB2MYVSqqhS8gXaUw83HHgRg4OqW6PK37idZvztcla9yQSjPxU0onlxMMIvuyeHSjj2QjD01UCNRFikJ47S6W+Hi9zAPtKsTcOQVMI/zOoVDnhT8J3WdS1d5w5Rr0YpmDCyssMVhcIQQw0hRxs6gX54rVqvkk8cV8FaPHqdp8uFWbXV1VkAmdbCAs1zMTZi6+vbFJEYbQJzA7WaZzgGCUAVsYKuZ282+yXU7C8F4fr5LjLjrc6PFoL95fJig4eymMhArZHy6Se5TQbVE1tcNZS5CLf8iPl62q+4cLq2dXg+aZH6sGADsvptKMg0EolXjaMbx7Hub+SsRuDNtBNraCR4W8hnOchmuDGReTiHyn9jI8JZ3MbTxXqicvdFd0dsvbekfCdtX3id3/3ynaJgJ+jBwS0qZQGmzt2LyMk6He0wBuN6HUA7cAbSeRx+M50ECE217UWB504nVKC6CKZr2PyaRx/PYuBGCRagu3/SRS2AmOPWgayIadfTxudCjcTEN2yAbpzdpFfJT7WSMTgRpcDp60p6iUBQoSOg/ddFfeCPEOLJMU45YjMhXT+llvzfLu0gQ9pWN5ybGTW0HH0pk60iFliNR3/pnQPajJhSrvLFRTre0PAteTf7aVimNK8LwltSiLU7n3jKzJKULlHZ2SDsafP7Oj8xNlN/ErV32F/pHn6DhAhlIU6n6AXB+FxDR5aG+0hROp2Y8LSu/vrDMVGl16U8zcwUz/krQcdGnFRNloFj4Co/8Ma6kEcxbPxO7F3A6rYNiiK2rSkPL/QbqQDvNjPuzjbja5mnUOyMpErIJjuRyBMGSmchk8l348yNHTtqZbRc8v2ldgBtnI/pMrIR28nro5n8gtkIAXoJo/w6V75N+5/OefcNHmRK5z77ckOiyzHQG4tK1mAe2UhjjUcFM2GH+UcaIXxDPg6kK9dOIlf7KP8iX/QBMuBJl4PYXknJqOJcl5MJkYpp39ykfnlpJZ8jC9sRueyinNBjNJETb+bv83ki80eEn4a6HdQiq486El9NuuPWE6K9DlvUu0KvViu/580cOnsap4ridg4CdV33spW/EqX6FjeBmf5whNjMOXqoaPNmNrIQwtMmeL8kbBneOvtQshulCs9kFl/8XAWOWG40qBp76LFznvRRJeA686PN5X+uhk+avbmf7xUYHOYJCb++nqecaT2X612aMGGRxRELNsFwQCssLasemX62xivFsI+wWw4LZY+7tJComJrj9stdls3eYNVYSjomAB4UC369UV9UEi5Vp0g1w+y8ZmnJX6rmd2VtRpYUEl+yHwOsgF7oKCszA57NfNeOx+1c04WbP4+Nmq6WOrcmVjxx0pqdTjA9fQsV+TsWT2my3JeGgvd/tNvbyMbiHLn4ofqmx+KPUhM6nFGTI/Ug03NdFC2/sr/ff7iWp9O5dVXXx8lk8/JZCn8I6G5ekp6ESkp41sI1cWwRFpbEzlH537MnbfRHVhISLtBM0nkieWJIJaoJplKqXzoSS67I2QELJQG8SsfedBioU9tMzHaFdCxIMhOxIyFtWvHGHa2bMrPoUrEEYFC6tP90N8dlbLSipkmtEqByB7AFAgQ1hN0O3203v2uUmlRJeFL5ZLS0x3PbRfi9URzNEvi+TpURV9s5VJoHLVtZod0c5ycHM6+poq2bRyG9D1eU+jy4UN/reS8aTcVmTVPmiKDdz1qLvpfZSBMDfBbent8ymCMg4GEKOLOXqUasZOf3UlpgBOm83Z6K1P69qlfjQWVFWcNNoDK5t3Me6StYtdHIUPS0RatNwGrC47TlUsDkDfDBMIrb2yzJ99Y1eEsb5vtylZ8ypa2kUedNdSU/qKlcpkqKiG9fzVrJjxRbAAPUvYGir9kuqA547Rwq6OwdWnzCCNTRKt6U1aD1NmllPnJaA9SXKndjHG/8HESPfShKY6JF3luIhGiU9zYNCSG7/9eSdpMIZZA5VnUNHl83W6Vq1O5HHjaufUkLV7QbHBvirX29vJcNvrOGxfz9AP5r9J2FK+pmKqXL5JzNJAkDLDdfpV11RUBukv4ZLOGedONWKX+BZMAB7lR/I2Q2m19bnnRNyPLdtsMHM+qIAENzGuiP3lYp+qxT3japud9bLASh3O66QpiEvOsG7yS93mYvgVwNEcqPknXtGgi3N4/ElLwQJUNSuNlcr/Ym1boNG5ciMKF0XY6hU76lDU1O65qJy/I32owhyWCKVHmZCoCwny6pn8UA3fCBiRGGXtFhntS9AKTqZbEBojp4XfL5kzkDo9istCDtbgnj7VoA8H8h5uC8wadDoakHkduIREFNtp1YtdFV6Fgn47CJBzi++g5CU4pILiPLQZgMjUm0TXnUksAFvnfwyvTpo96tgUSrNNpslbH/vhHFj+YXJXHCHNEi4p7HN1Ouv80pLTaFOn09OWEZBjjbi3YnhSVVUgNwpUZ9a51Y3CP9wbGYdPFvleHKY3hc+5AOGrN+Xzzzb9DR7q8nZB4NdOvkfAzLRvnkBJAxUINrkcJs+X7CrkSt9x/Il8omCV3BOBc/NGdRuOynBT/rd1nRFoJ3gS3H6+ROvumoJJIKWnttNnaJDWyjBsPN36XMSrZd8MSlVNFisgQ15cYZ6QW0uqYCnfcpHc7u8YBe0LEKL79tMjVYK7k8UcJ7fybbTP/y5oZdXXwxbM6JajFDgkQq5JNYLNKpoFEG+E2HlgurDVwfDPrGRXUyVSK+1eG1sxFblbe/+cxcYovKqLKx9pye22QvigEfCGk0dBcl1b5THM8snXEvnlUqFZyBa769nFVv4TPEv9+hq0K7q9NedaseieU2uAfZQ5AKbW43GQJAvvLhifHggSKRB/e67uKU+3q6roR6XaUU2lQRahDGBZKm4s4/UEgOme7xtLAhxRoqODmNDl/Ck1H1bjbw48oN7WMMP0T6geU3BGcJM4AEaGh5hWtk7fwbxUkpX8SGhtx6oGDGjXR/e101Xd7QxmUdhrlKNzYbygjdS14oPpEBWEnzxopf9IYvuG2fkpujOy1wN7bp9vs51/qic8tZG/tcy6itPU+fbFvYoAeKtiTGctMRZha7ORDc8dEFZa3mEsWbY6SyfkWtVJiWBongsrG0v1um94cT7mCou2QctYKbHAE2+yZt0LXJN/Hozgh6FXEAN5hOFE5rJhciXWMcnOZH4cqCMwCE98HW3dNklRbJqNBRop6EoaagbKzdakXLq9R4GaA0Royvj29pnsEBbNFaqM6wk2fYLmYBOYrFmxHU9TJqYT4jO3RzkOHEfjvlYO9YQw5TnKv4RRR3xk4CjksP9uiL5dH0uziFO8VE8dI2ofqmHecpgdeOBJBxR/PwL6obz9aYWD1T1ZW5zUs3aYxPNIxJFm202/ZRuUJy/9zhPu1vhF1Kb9UrZYY5mRIxcuDRlJjd769YVLLQS9NB1LRjvo+WYsELLvE5HwgSKh/ysYDa0Lty+q0OpDkeQdXI+F4mxoEl5wMiWK8YG/TB6+c17dXOuSUKb+1BlRH3BalUooYYN9t8ahzT9ErEapnMxvflZZ2G2zpmNWMTGx/ymqzrNesEwsHDWbM4OXaSBFvAd06xfQ+GgmGCpjTWLSVe3twIFbDFYTg0lpKIcowc3rSzBay6WzXhr6REL75KW4it750L9203Jnli7Sk6Xwt/s5NR/qWNdVaga/1p7oUhBgDN6fUJbGw0OZS87tlf78S764ExRogwEC3RWSCdszSWrvHLbjkMQiFrxtMaTRfm/mNM2IhafmC9mJ6MmaZwjTERFwezPutn/bBqaFvn+zy0mQ2bzc/a6jjpHyqvWaARdn3Hc63DssognwktfqJWZobkmkAu2o5I1FKViv8Pci9P+Y9C3s8ZcWq9kSJOd6Ws2fHmzp2WMC73zxtYuN8ehodZ5P/W/Ne71yORrUjpa+EJh8zJdpfVdn/kRFvausiOweqLSp/81bTYNeiWDTnamXxj6ks+WhmtpfBcs4KJLvQGhWveELdQTbAyGrpxlGeuvUsTOa3e5ZTU/NV2EMUQmkwF8nY8FH7cT4x7TDaNYQlwDWsBqIOJ53/SJJTQuVixfRThJafhGoVYxU36Hzy1qKd0W74ZIZ6IICWSZTi1e2mBFLkKmv6W8yk2ZZWigTj7CvszIZfZaf7SDjg9aql9bswvMbZnWV5fcDabEdrpiEBvxKuU7wfQYFLGHG/mSBfWCbBxHtSlxA4VYRShZ+BnPmHju2KgzVhZFaE3rxYtHBGxQR5fg2TClfEQb7MXBvVDhed79gxSx+8YdNmmJwfHn6uer7FbLtFV3VaPdpCTYbWz5hsViFaOK94Jp93iENf7/ldjd2cX6Pf+YFUqukbVBDS/7QhOJ8SWDrC8dRBBdauKtNygvcR+ImAsttgeU6khXFKcDdvudpxZ0LtHSvYQkyuZyNlXKOhMbaTcZsFjaiJRnwOG3R+EuVtj/XRJOOqMLDHTdlwCgcA0e1poz1/lGo1Urfks7MysHC6UvlDftAMPz7niHvcpEXMsqi4RDbWDvMulzy3k+OLGb3QmOqYjJKIurWC03k9FiWcxK9DHZ656Dr8QQF+a4iusJJCppurjMvrNTF0HXPdWwbqVufX4tsjUx/Jbf8nXc8fskmED48w5NoD3gGp386NLNEXm66hO3uMVyvq6hzbWARUkf1XqyHmafnlrsDLGUSun90hBe+WZ2fl3hamVsbr9EK+pJ1lz48PcDlrEeWsa1U7jLE+M7t5Ihp2YHY1tYCyuYVR9ebsItEELefq0OeDAR5oKRKKHGPAW9WNZsTWileSOL7qeXtJlBosDXedo1HLsEXCBQMY1aOYFaIOgouogrrYErJ5vb8Uvi1+rW6K61eLV8hZbCKpE1WVB4krE4QmpVpeJ7S+EMOsQ3BRfXP/SjSbIQRgkioULwwWBrRjBWD2wIPsSa84Ni5H32jOl8B/LLYuW/ceauYgnerJvmLKPDp3O1IrO+wz3eLPrfcWBSC7GBelRgXy3Sq08WGxq7IAgeyg4LK6uTRJjOKsfrtwPLTSxSqPX3ly0MkU7L/9X8d/3eXY7gRwWEVY3zedbH86+9tQhj1fczwC88ppaae1z6eoDmBAOsiFH8u/lho9Esb/UslZrN9oNz/p8O7YxkOrjZmchNyXGLTyTW0SjpsPjtK7tr4SIGElHjdFs0DBpPiYjmn5AIszG5VEKBF3ilIa/VvWI5rVgontxQGSf2gCXdnDKrlZ9obNMsUIkBsf3OJNnA8tMIL/A3Z0ZQYz+cvWLPxqfG27WYi1eviy0cAcMqjduzaj9NQExTwJru0XEE7JC6Ua1jJ2TzGoCYQjCKODg8WL9UhAjhOlHh12uuzi3/vINowY+2QyhwO2wD37Sc3lj2OTbWo43vi4nPNMrr8tAb78bezHrWjVa2faMXJV5KOe/ZRchyjaRkV7DUmXrX6kaJY48PKpIWledlX8oDpdLgWV37hnAGIhBfSaFvKNin8s9epYLXGJsa5/2VDkJNpy4qbwjtpPpRhp1zWG5n2paA3N/5VffS1xLNbD1m2jSL3wiejJztp566avrhF/7JiTpdROf8qcf8N4R8T6O+wOyId9fnncIwXY+VgdjK/v8vrvoXEH+PUCpHF7dFN6KkO+xv8Fl4WoL8xvF4P25cN7zXKRgclUmfWKV03tTEfO52gUXGXayL3EsAdy8Hf0s3ORQ9AXpPJKSlw/A90EMksLaPIa974N3Qa3ltbSoJ1C+DffPxui3NUstx8JcOZmtzY/AqkkszoZfBLq7B7+97xdxp26tEDs/aqirmz1kFNZTmgGJ/7AAeJJCIRMaVgxEFLv1Pdpqqc0Y5/SG+SmxF7BehuRk4w9r475FrCkaPYbl0NLioNSf+rFj/5S2lrz8alSzmbVZLdnIHiP8tFFos7jaXfOtzoRC/aY0CZ+0AE4RsDu25W7q5MrALJxnmQ3jJtCOeXhsA2QMbsNHyjrZoTOVd0H5uBUW+SSTgxuMBJWIrcv0djpz6imUgLiXpwdP6H7EhFzeJcyXQa5Drr3oqSAS3TZo+5HfAoBqYL7MCGrLFWRb2tsVQo4mXoWbiV8Sx53s0/dSCyGQO1Fy622oNtsnW9RLnexekWEfxWuffDH0Rs8Z3STWmdJ7QDgJfzvgAazlpzU/q/i/7hM4eQHe+BfJJP+jcpOVTKdad5vMtKu/AsnOsDnDSAKeDUUKK4ChOzHm3WRNAHLWDN1BG9nv8TLGVp+mxkS/Ry/VTV9sAQ9kS+FUqcyxkMsjg0ahTq2gffG6ElBmtkeiI0OaXSie2ZIO+UV3FZWgqP6dDILuO8njB/ho22sYkwphYUKP5l+AfLAaZXQZ4ctUNL913pITq9kj2Hj9wbnVPNelHmRhuZbPW7FYKOGI876r1LGYh5N0bmmufR55a9PmEpw14ezDWDp4zG4G2eRp4PhscVznymGX54D+gOn2W3zyi9YSFVXj1+b1ocXwFl/qiYzJl9p1AMBJDIW6VppLKemG5kTeShmWckLLZ3zDP8356YgbpQ7U4iu53/aC900NosgENONqjtLUvdsRDY9lngRQqHyUCAZGQvKFCewU9jMNSoAEtuTBvGxmh/iSScb9eSaZwWEauMeo/ig3HdB7REIkE/dG+0Dtdn3Cuz7rPCWpkqeK/+xWjBAddnaKMKSfpIZ5IWk6rVzdMqa1k8VEk5ZGzcFrfHFnU9Hr/TK8WfkV/rwxX3vuTuGYmvnaEfgx/ftDbKrzOwYrrSOd7AWUQbS0LmJoss/35cpSZQoVd/vNSD3mB6Fo66MTUPj0N7tRsv7gsqVHcQRfJT4bYYGYlaPdehWqYbtu9PosKZxOJTcpiyTLHZ0rcxLmKDyImliXyXt9eaD1BF1Mwg1vbW6eMrqQhAHUE/atDZbMASiRLA1xhICSehzwer2cG/ZSP86FsrS2sf0TFsB9LeHxr8xWPzaynPbBNQsW9Jnt24P7Ab/5/JYpnQpEIYY0lEET37vPGI1Ff0G10ma92v++Lxd6sEigegawmsZmdYBhBiGOgBsdMudu0h+wBXs4sSbmH2BnUZWdVVCYmiEt5kxMTsiUowZpwGgxFez4+YfDuSwgleSesrtfEryITEA7vOxEfZJzt6ov4vxf2sP1kjuOnziqHjP/ued9ugvYRPDBMT+ky8yTtVlyPRp8J9HK+eLPFjejgn4X8mrFR934eIDqXzLQG+MD3sTRjdqwkGWZSZvUwkGJj7098jlB5H/u2I8fNGOZBDDrDCaqg5bv+FlELoG+oZ5J3YOc9yuKBsgDPWN3S9bxpeFGdXNWs1X7wfC+kVK5iDNSXFER/LNJoztHolmtohKK0sWt8wPr/DkfF7BxP6LC5VDMa2CTL7o8yWSTAMjXpD5KxtFwWe3aF6+tt10YsWZU7BhHp8Pr5NIA1xi+5kVVMH6QdtvjsXsqMbEHmcy5jCRih2H4HSZCyEQt8Hx7Oy1lpY0eUv8XE5M9DenGU+A44fja2zuPz+L6Ej2xXY2cQ2gv66wgoq+HpDAWxCWTeKhYoLdnr26j82KxCQbctOwuz41d4HMFOx3P6Tz8Imlis82cKTY2NPqX4cLs9665AgRnCrMw3uJRX+GMbIpS2YT57LkFFPls0GZCROxPeJoq5WK/blKSxCZ5ETw3RlLqpd3HCSJgXKXQmUfb/DwxtWVhs45VS8zS2iSHSQszuA2a5lBfKNscfXromLJUr2036vKD0SUoEXWLPGCRdhWOHvSwwVxa40TnyemRDtqp8LrQx3hpKxe3KRbjlKooJ6kgQm8SZs27j2hXCIJQaLP/VnphZRr18Lz0ZoOcwFBOozUtJaDL6bBrghGleHyOZyyBvSa7UUCii54ifEoeII8TfiYPEv0VizpWRaKBkUg2P6eKS24iDwHqdKJlCoqSGFVONviYHaaFCjwYB5n34qrnPOWMV42e1DFuql++yXtH/y7VCezG4WIZSAhF4jdUV+c4SbBskbCS17RINT/qToiMsRyLFrt9vs/MK1HvmjScFzqvbLU7gAMv7jvdh/T1Z5kB6acwsy1pFOp2ZaEhnciOIQatTq7QYLAftZRq3oZPTAKJZ4Ps0ler5j25D3mM5MhSpUlQkL5FknhbhlXKCLiKrF24qppHMj5wP5uFoxdbPTiwZC11HwxG1qjbld9DEVfyCFZ8tha1MHI1oiBNeUUnwjB6KszoQ3kjCOcFamgVuBP3ncRzuSolRWSVSWMBypUjWSadT6iKMGSESuHOQk2D61DX8GERkA0u9KDHrJqaWL0e6LObomlb78Ff30+ItMcTNTJynwtJ/+BN8b0pKRIIVC2VPTGbLbfWyfqMU1T9M8JMLQrgdeQu0vxJboHriD8QfkXcjadTOe8tNtN3jbcNVn6DaiUcgLjx8KD8K3oYOokhIMKxIeOq79UTf9QynP+D/eAdcGLi4TFVKeWOL53rjsKMpt66lEFCPedrIj7JujgBlUkcQPN4GKui1QRPbtqFqcXRPRNPEMZBQwE/5WxCi649IVOhocDLA2CRldR12enF1g4MFX5BL1fJAMxw3sYPRfszJ0BIrmsMS2mQgkrjiSMD/TmAe3Hvg3tgNMZDF1u6ukd4tWhUOPebzquEgzygz9MDqqwbDY5qKcfi6wAg/py0UoVjGmM6qXERPqaUVgabpOb17x60EmD+jMGyxOaO6iK07VNq8wu3ehI3l/xMEjqI4q9jUao1ustujj3J9Wxt7p1vPMk5WOxudHe+K5lm+eqpCjSYWbDH1msbt3spXbq8pBlihSUQgNVMcKA7rSpk1gYCOiwlPPHjYaTKJLspfznc7HPEtChB0inPImy1994BBhBxpzGmwgQXqzhy/19dPVyN/zS7GK8x5AzwrgYw6TjIC7xcSaDf0eN+eMtvlcjiEsm4xkWHQv6MrAQ8iktpjwjzpmFl2vkmrR2IvJ0xIz6sYUTTVgQ7vxa5XkoCbG2m08kL6RJPaEFnVoI6ALBikmMVikYxOa3D6aB6Pvb5DW3N+eU4LT4BN4dXl8vvPNp5bmxcYqGhrXkUe1OE6+iAywdv3yGfTL26z55VjVqa93fyu1jnBlkUsI/y/iM08H48x0DMy4rLzrx6BGG+qbSMegSDIseA67duh2UtUyBfvF6nig7EWcyrhncM06vnHNd+KxA06R6ChzqInur8FjAaFclo3akFJrlN9PMwzmc3UOQy5y0CXWf9fBeSmvD+W6o6cRlzKHEfu5/4+muJGE34nQbUh61+mmsiOTCHW+NIAHQw2fNLpYL8JoM/GRK8pksVuAfhztvQb4yEPTiLcafS3lPzkNmmPmlP3JVOB2JvCSWJcBkyxtfQj1QYTyZa/YStsZ5hOR6qUxnt4+lavUG+HOaVW1bFfnhgh3wzz+QKlQaH4qAWSqQrLsUuXr/HAkucLS9pssb+LYYdgVV/cfuZ+3sWZamaDzALwd8ztOJnv5ulWhXsvkdsEuxLQH1NDlgLav+1I5Blwa/819BwNDqaSFfJGY46FnJWRok00dXFAU7FbC2Ii9medcMjyTkfIoxNAymtQRYZe36d8VNh8U+aZUCX7m1/PAWvgnur7PrP5GAUAQrrtSlp9Dd8ROxRZe/kLRFiIP5s/i4Br6fzJDsKRFWHebdnBJqUbADEkWQgwpbruOJAEfHqPtBbZ3OMKhALS2PKBLmDSw9XGneWWCgYSkAowR3fe0gD8AT/jQq3rU/5iPL5HgxhNOqeEcPL6yWcJ/iNqwI6elZ8FKlKL1CBknw9KCuW+eWZWgHwaMRSjoJ5DCLKTStvF4ugNDCyP+TDh7fKWZd2ua3zS0EZGK9dwGlh4KdkNG4hkAeTRprsIeOZMZk92ZIPstA/k0wISTUHA6oD1YImGBRdFBHmrQ0GQ6YVvvp+M51z3T0CbtvV1C0XgFFKfDRWxKuwNpVZLIfkJ85DNFxh2In2ERYAlPmhtnuXHdQwX7JFDFUPw+d7W6syfyX30z5X6eoPoog1CNbBeSdm1dfZ0s15oFjqKB+2E3sLxAZNHk+34v2p1C1n+A/+saZYIP7ItsfzGwagYBznIdG+VP8ixVi6CZOhTLt1VRyXOaWOWcbNEFWJhAT2eTgsEeyA3GDmQzpO71BBnFIklEgwrqdNgHqteAbVvewGhCK7RqEUP60t5v9NuM2PVsF4KQXb37tp6xp4leo0+ttD3VLJZpc8u9Qg9IfTHa3jzQnCLqTFhhcFPWVDODWwJk0lxIadzVmFUNNUC628tw1v7t4xhzOY2B7ldnKDoMMepYEnoAt6CYbTBY7bZNlNPWy3ebCyT8CPE0mdqnTzzhvachU4wnR0CPW4w4HgfFQgwCVEDoQr2pOAPyTNg85NijYOpCeuhNdlsKpl8ovDKBxHNhEw6C4LRPFvFeb6Uj0co7G+rV5ovmzL9CC4WywhTjVrWIGndoR5ndTTaytRqm8sEwALG0NNFPwaDb9GEfiSwRa+sfXv9iSx2Unxar3490eMBU9kukYg5xEq1hbOhVNtWqJ4/B35O6+ozTrQnw5ISTJcwxGZG1BJtt1sfSHrydzsrsmhckFUY5psm9Q7wYfpkdgxFaJgQLhq5dTargS/5sMz+wuH8Cj6bPWocThdRJUxZFlEgdLtK9bR1k1JDMo/eROljtgkZwSRJxMS1maktc99TKaoVNxhIXnYSbEHTVuAlAVNsYdNuiJ2PRH7k/ls48ld7AB9KoLVtLGg7aESnz7RGwiKZWIzjE5m2B00zrJYrxZTyBMhAajYleYI3iXohrQuEQsJ0mjPnHNFSJYWLay2O/zUtAJSHxGKc5+XYGyXtcV9Snw3E6rNgltov+bkFw4VSNeI/DpqY3IZEDbEGhgJ3YeITrip9eGmOKmGnkDnqsNwPOMy6xPUtJozdKKhbNIy8WgE+gYXqpKONqW1WncjivkE6pLMIIeIVw5RGEagLhdwEVIvlWhqUWYvrKh4JdHBfPEYxiSLD7dS90vUV0aK24EIfS0nrLRkRHHeOAOGX9QknvwhBKT9oR/Yfrkxs3GfZaL8NCqqPXIlR5DvZcV8xRZpRCSkSz7kkbGGEKFQ/o/64nU07NGbPN3oKZPKUViuBRhG/DYxpNJnkIiwlheaoBCvm9zNMSZJqPy+cFFKtYk/As/Osah0Ffr8/Vb2tFRliXyLpDJCLmzhSL5psxeM/kaBbDWCDoTWBPKXb8TMWng/HCoooYceFXQqgdOJGBGzblccMDCNJNvbDD4Zkc2EVl4mXg6HWcsgqTJ61bqaed9rtMb/PA/S97Kpfexa0sF57ljZVMWRTDlkR3BjuhLlZqrks9UThReFcyhfkEzmhZ7Oz3qYU/srY8fOxiatwjS+xJ20OXXKHu0yBXShBbk3yUa6aZZ++2vr9QLbod6t478QNUIoSJISSuSVUx8+v67glf85Fhm+umSjZGxrYcHclJQCjvGnk5jaVMFLqLAe/Y0/NlxSGXNBcWv/T5UC+4neDRqv9uajexJq9E0NZAMr8H0TVTLJkmSlmfoOOI77oyy6lyUEEE0iS3w3GhB5IU6F2KaJ/W3VNf/NyAqRCajHkZZ++6nbEyqwVdtWs+1Ys1goBLCm3+9ydi8wmEj9Hs6OnWkvkEF/qlG5iYBVn5qeeJCFtXHxyMetlJzNCDjGZQnjZw7snpJal60pF6rc274El+oDwsid+PXRtEqhVAsuSbSv1hsPj8XsD8VQ4nQh6/T570DYeum68gDbylYD2bCGQy8P4MCPijFmKu1FJbSGR5jiCa2NdqDuaL6cuanmDwktbpwtPSwWi8Vjc5024Qpl8plAEEXzB35SK3wgy7ryj4R/Mm9hITmZ1KSnYXCDARxzJ0/uZ65AcdTyC85KlezKR4TZAAmKDNiiCjUnQppgrodUWrEn7jK/qVQUluoGZrWKxwAcCmJ4aA1UQ+l/jtxXhx/XMvyLygs0seJMYEhuhkDFcqBn0trFqAaMbjcm1le1VqGXqJc5C4VsUQxla3P6snG2TjZJXVPbJsiWWupUaN5m9jWXVCxlv8Fqs1ljTDjO8AevOFcT1em3s9lu/IpmIpl7IQDadSKXgOQY3ksJAHNy5smaysxBDGqSVl26lnnPYnOFs0mEyudv1E7nZZE+1XsPsxy2w/Wc7rNXJg3hp3XThpbFUwq0zubxekyw1/zQ1/ZMRvSYUv4BAYO9lC6cNuTkNREhCBy57KiF7yRdvM4ZbEMDSf0RNnXPLdKYieBTC5xwSGjrGHIrirlYwkN1icSXqMKu16ShFxWixmlVYhQETikqWQNK6mjP0YJjLE+K4uPSEP+UVtVJRu1YkS4hqcY5FDVlUePTyhFzvKHgk0PsdrgTDIQVxjC/n/qW+12rzKJvkuZmO0U65B8y8nITqHt+icGbNUImMMtg0Eo6dy0vIgPSQlHdIdv/UOdUqVJMfIXn3M/JraUBCO+t+2muYyOdzuTJJhVxIZ0oCFXpjzePWKCzGiGFBr4LI051A6YuSpCKQTSWyuaezC0zSikcjhaa+mVJRRk/zbZ7CYvc98YBKb8BjiljMcYotBtcPW+0jZ+5SKsZDpRo2gz/RK3nDrrbqJnEr1aqIHiiXOI/dk6Q+2GJ9VU6S3oowH24Q4iChTpFG8VC3SrfsIf3EhgelIJQyiWHmWn6+MD4/ExofmNbSmlX+TSoFJasjD+O895DAJjhKd2kj2c4uouryvH6ELIzABeojYt5JPTpsMcMo5rCtefNcKEDHkt32bc9ZtwxEQqEg6kDstvMgnwfwYaZbnBq1yeR45pBmnNNKSiueB46zpLoTd+UpsIp6q6W7BpIv3QoGPB6n11391oxWr9FSFPnXL8IPbFWpx8o8Hq/PvxLvM3tiI3m5ccdqTa3IOId235ld+2lOZD4pcuez2bxbJOFVgAPya/vON8MEGr6ZbkguQRanfc2DGq1m3T6Xl5Y1z3X3AE224N/sH2YWzBnGmoF0Cwzz6DeteH6V0060ePJ3l7aiip+92aA1c8vBaDQm+Xet3L47ErZZFrgU6gIQcbJl4sn/20iGnVWGEelcYZL89tmHM+eiO30++/miAzBAPSzqqsuYw+lLOTnFI91qCAoEaX/LvSzCUJhPSuBENsu/06mUy1hg9TBzrXEy0z8jC1lPrES0eTip0trqnVadxWPFp/k3KdjtUDQUCIsLwIiI1zzuMoVAHZOnD2U8VqtBMrWRbCcX+f4l2XZ0OQl+MIm1ykF7h9vcfDvJmlY992YYMRaxPE3i+FHVvXd/kjHk+E5I/Y82dJBwlqvz9PafNp7teBgRnsvaPhi5nMuv4QBnX8M/uZY1/JULNR6FfbCPxdhdQr8fsRBjmFjUjP6MiQySkpqQVTIZuNAgYa1N5hza/+lgMsbPp+QwqZS+zQ+qNYTYIAMEcUFMT/qjHilYldCq1Jz1//qSJdrcsXltCILtBkOqfzByLG02ckCwNXLMYTcbmkKa7M2Rwn2WkK5U5bCTHSAK9hjQV/Z2sWX56+0ddylY1ORt6ziic/FzQi2+97i45Jnavv5IDIzSYtsPIN9ewW+90MfbIgAD+IczMhnLwmpicDQKSBwTrBY4O+AM9LsJaY3TZ+s1fJMdWp0ZDPtEMRQq+DiSnNBSm2ILB8b3GpiMRaCWl5uDLodKcl2b3z+psfODgAiNM/xjDEOI/CMv9furHl6oK125Avw+mvW+C4fat3y/Afr/cwBBFCpQPhg6YO33PI8PEdES6yILrSGQRVF8Wgcr4MVZjXced0a7nUSqVnyQL5BGZ6ooMkqk+uBLcVWisb3eXl5GZE55WdXYd12yz1gbYlbfBwmf4J4dusHjlyOVndDv20Q1BnpKrDn6Q/V5ppaOe4prBxiIsY28BOBAJ/DLvi6Gt8l4ZHD/hJuKf/p/8v37mNoYq1wNPuALTl0knLrrZvvpSifjQNPQW8lknBkSYhjLqaq+br/GosDaLSTQ3gUlEglV31GgAvf7klEmaAdhE15KdsRbo5Va6C2HdjtyEK6/orHtyfayA0JvHkA56iNABA3VKo0ZnG63TszijQjrkEaxUUVM46ozbIkdQ5F3eGed10RLZMyNsSmn5UG9vx1MBlvzL9tk0g4DPsKIjC8erEGVlpY0hPk2VPA5PXocc7Hm7QO8YoGFkk2gRlVK3t+q2cvUsfspyS7JbKKHFC5tWT7Z8ssSy1ngdGwwtmyTrfbLLmebgRxkapegbWpANw6CO21FtCD8Ay1FAkmpgEnYJjypOvl/41TGwrSrcCXv7OgAszUQ9Hnu/LroEhZcVvIKJSPBaNwnum22cgE8BQJhQ8QctrNBApWEo9oXUVuKZrN9bjDUL1Q7F/Bic5craL+QJ39Yx+mz9uAKoq5A8QPYfFrYiMHxXvxxp2Ny8EPkvHXoLNj8fYuhywgh1/BYN3m9ADRWo0iYcoX2WJYt65R2TYIuJcL2yVnXJ/4AY3T1Qjnb2aSg573dc41wJsrM3pDa1nHQQmMlsJKxLbT+zIls/ieDaDxE1LYg33XZ4PoDxmZxezAYTU+Exfpc3hOHsA2SskSa21nmCaFKm85kGz6/WZFHspKdKushuonqN/PxSJgZqGMqehysoyvQ8uV+XNnawmwyX9Bqf1WGsHLbg972X9OU14mxyHC5RagugfFrAjwjY5l15OOwq5OG/z8+mnSyta0OQs+NscHsxY/RxvyAqwpRGYNAAw1zFDwDYasduS1gLs4petOxdfQfUjMs7XafH9hxm0aEuN5jJDRkejMClBU3QQmEQiKFf6nCvgT1mM5BpL5BKeHTulGoUqqmrFyn0Moaxldvcy6a2twsJ5h7rEnETSEKG5jTQ9Ge3+WZQcJ5++tTI+ipUXxei8PwLNeU1pgkg9LZ1FntrEJevrhW23Wx4UWzVtEsOeWPTX+j4WfUUbDJPPUZ3ZjQgEWXc7YkVd6VRAUbMZst6arn3dvZ1q3P2Oyt5UV1PeZ49BFWpKIgQwLsrQcdimdj0Q697uTcNMMOJ1dOX6Xd0IQromi7Z/tRw5hHPL1aPhS/a1WQK3sVDIa66YOGuZZUnYMGSpdyCV/k8bxK90QIt8dy+472J2JkKFdu1V4GPa8u5Qc3qpKlEllF2A4dZ0tzcAkdGFbWurHC9cHlnXNMInM6BSrlM2IzWvfzvH7MCe//Uude9CBZTA/EoKGO/2mDb2VId+2uj961Awl+isgLj9jReJlXxNa3U6ttJm3YDF8EHRBwrJGtH6u9e0WAdNz8+9ADv7KhXeuAjOLgBw8j2s9aZhrACOprwfXB/ql/lW6zOmhaoQK+C8VQofLoHdI9kQ0ZDcq0OYullR/xnYiulPR6GutJ4hKF9i5341t70ihiLqD5UhgURSB6ztHUhBgY6nk2Sfw8a4kazaHjS6fu+K7gGeLOVql/ufjMwlxZkq3js8Fa1g2PPyVAzBcRPBXwmx4ov0sC32YY5onZCEGg446MWXcnXWon+iyWQ3dPOuusocuWu/Fte2jBDJcViizQMmkO8MnmwvHKSCzQ8uIca0MigaAJeIl3zd+YuMrMbbHKdDA4Zm3t0Ha8rcut71qLrCsLwsmiV8JKSaSSd79C2tYsfuU3Auabjn83rOABvgnGY+Vqd5pnZHaEScwx7RC/TgmXi+E9iHS6TsuwU0q3UDcHIpnQ6JdQWyOSd2CxUqM4KOQmI5uTVZTgXU8yT+Ez4DM51wojOkiZWRMVydPEC/SCz5bU3vCiDmUpMjARzgR6JaIlAEfK8IbC7reIOjTVwB2CDeZv9iRP5CYxROPPPj4g6kIhm0pWf5iMaiSTF4iRGwHXQtooI7NOfXtcmf3gT5sYcMAK1vJPkgXF6nJQEUfqrHW1B/EaJRh3A2SWIyyAlLxJxu1OjulSFjyyOIHXEvB5Kky2emhIb3ue5PSElacFtVYAlWYZBBfJH88+pYEJdoiEmBB9XdHIHej4/14FpTijrBNECofcWO8z5WR6xgzaZN1KwoL7a//AyWKb9ZJtCbPO+zm1Mlxa8VRhyTOr/Rv7jIH9I4Da6Trm2SqG4e23+Rc3K6FVv2BGx+Ef+9EdqhEIIqHMDty4zDbvzNxEZNCjbgQ2NnL2aSB8tnTGRqDVlQEOfq9pQmwtkZNWbDa8XlQiUAhpUahWq7jRLivMSDbZV5kuSYneLEYps/KIZ1rel2B/f79hqKoGz6x7xnptDizMZUdYEBtLKivRrasupvlaxOGJcaU0dVwjfMzqpEz8RqExqSBn+vgPINRNWfZBzeBwyLgE77qwDvmLKbiTVtRdNSptVhmKTSfNRG/GRA+Zve7MKS+SSiDGGfD641ihJPC3+64+wx+H8hmhoY1SHct/nr5tLoxqSNfyTlar+E7daTYlrz/LzHLnVDjdKFOw1O9Z5kDS4ZkpjZ8cuBe1U8sMKXPKKtF9symXX9pc3tpVVAAFWqZUoE0EhdWLNrYHyR2Z3FGKEhz7ghCDyZQJkpFTkcE26PTilAfiUhDh41KwqJVikCzkiYq5oQyUhaQ7kSDMZg58DZd9yVs+rtN9WGtY9BJCaZy6PjLaTf1h3t/Kbmi7JnyBA5YV5bzWfjdDs7J3Tcto60tlmU5WCRyygmJs4XKRMZpHkirg/9KL6oVNQUxZFLwIw9fGeWt2/Ieyzzx8pe3uPqp5S8FPalthImHP0Wa5YeIHo9iJH1xZizC8/fwie0/BE4wU6oY8h6uolgSSj1oMIzLwQKGhbaovlKu52jJZa4ycqtXHVyrZzBj2WeO5jYa+mXjcfBrrwLTbWqaaGiZK9Bz+ZJ9BW8DOjEAIAPJlJcMbnd5oJ+LFerXO+FCT/rHqxz09wbQTV74nF+syn2SypzZbO0ngr887CwR3rTmZB+6LVqzoeBb+vlk9Lz87zVrrqAgmAuC8S6HasNhydc4GFQuhBaJ++I5jVXyvsVW3r+lPXcVOb1ZkV0fwQni//ZLcpjuaS6XzDe7opYpuDlGpHDMkfp9PXiqV9np8qYafqye/biufksfC2FoF+xUx+/y4PJjQwWOAq42lNa6JVAXtpUEEqvvr3Ob00kW88gl8U3jTUPjWpZxYQypzCXXffIcZI45TFiYZibW7Cp0Eq6s7TWAoRa2KxcnewtMHASfHZqzhP281YcVi7SXOJ7h8swv9rwS0nktHj5x5Yoli1M7GmOxVwHN7PaMH0vVhAZsjisM/9XYW7UsZ+GfGsEBwdYxM3vdx2cZqlm4dXRIFlnZIGEK97edJf2gB5JDSvQ+Y8f3cB9scoqmV+D4LREERuk8IvZ+GP3YNYpCmwyDUpzUHgRh2lBi+B935j8jMTPDdldUhpVc54EAH5+fOw95pr6NBXrxZ3lpctmFnsERok7hynXphmabftmLeiAsWLC6k2APTluAqNeTGa4kWPwKIZ5Pq9xMvEYiXpeLm5VxhvktzsUpTf5il2ZRBbXd/zFENoZMrzuKuo3e4VFcT+4lnIVdckAE9DDTOjjQjBnOoK1loCfEcfIv6onsgEdBDIGBWiwvQll4PFAWbmYnEkYE3By7c8FM1WkG9us8abbO1hR0b1COOTp9r6tTuK92v9F8yZMShkwK+AA1oWbbM4zedKtSdjbvzdzs6w7ZiXMIn4aUlpYuP+Jc7nev4DKw7HxCC1SCFkABq7tn4cYaEfXQHBcaWftTCtH35z+yYJ94Tr+IkY/PEmy64vrl4nQSxccBCUoc2nfO6uhP/zi2pXfyjI8oZaXTVdRh4KcG7477sNMM7Xe5Qwu8Gu6jA1kLhDIPoa7Ibps3LKSHULCJmLOuru1eYZ0Bep1lJ8L7BRKXR7tqHc8222hFhPuImwthvcLk+2vNOg3vwiGIalX3ysqtxBo5G1q0GvIvSEpAk6tmZ3vEy+Nxxk4kVbOmm0f5+3n1yU3OUzQbdrOYAjcPVC98dI2MYhlaGDH3YwZjRn5fKTWMBY4RQE3/DlZYFEvhb/mG5xPMN3e5Dcb2QDwKBKYdfwukm/trWe3Uz36LAxVt3aa5ig2CjpLxgVg8jLms1ruzBQoOUhLaX4+yaT7YRD2Y4YCa6spT/s2pQLJ10uyuE3GtdfWw2tuYbdA3PPtGhmYMRS6U9P5x3BdvnW6xcSKPCqq4jCsV1s8VsivQM6+2Z1kXvZL6p3R6scfHmSCnQ4eaLey2SJY1L6a7KaFPzzCgOpIHr7leKUSHi5Ztg886qZOs8s9RjYP3/uEwhtKC9368R3nrLtwc1mN6TmccNIlRSwqSQiKuL4L7LxCAoTGEV19deMvh7saI0gwOScduUQet+wTqCGP/H1EWsVukAOJeiEsI6Zjf4umumBNSfKxwG0wt2e5dQWWrhz61HTxGsTSH5IePzhSQn8cs5tHjSk2jiC6lv2Vt8ixWQiUGavAXiQ472oXG6lzStKFHWStpkNVuQkaZOd8U41NT1Q1nNu5V88wpCGISZeXOh1c9Fj9z520nEzCY5Lf0I/agRf2+9Lm3EKt9xxlJbxWLJVVxr3lxDL6lGrfvMUtKHb1/4jEWyXVwWsEM4lXxE3Na8lAIP+sElSxotBiMGc5RZOFrRRSktWRt55H5U05gXEGcV044A+atmnjlcKUm6wsiZxEvUtDvlzXa0SNeKg1zlpWFrwEAAZTh7lzlixQnVQKYMpRN6WsCI3TTy0lBhITocFFks+Eff9bub/NPBtvGuNHO76/ua3xa7FH+3MFw8T944GlWjOCxeRETxRRpLmsbux48fJY78MKs4xg6JdKbb2PHC+wR5IYwMMIIPgu3BNW1IrPMuGE/WNJRMk5yguOvYAaoe9lIT/WA02A6xZE+AEN67baYlu0kQn0k0LzwU5hCswEoaMZbbU+Xm9QReu5rbc1JWOuH1LqKBbvGcm+T8vUxiW2oLO9gMjMyN911G/CeVhL3ywxUG4dsPExi8+jzTVubJpV2Eqg9oPl45QfnDgpAQd4szztL4AcRBtkn0Tn2oNdqgDJs/W8dYe/NxMc43Zctl8LH/qqUj2hKlmM7h8lAytUD5T5tAXUrbVCERfNcHzUpdfdjD8dB1sarnH7+9y+ZFTy+eZQ+tqGZW11HT7ZlQbf6tOzPu0LarbkXYWcfKBXKMPr0dFYiHI7SY5V4B4/FaiFgltFoge3im4JDVNJ2BwIHj091z5/NqoBiWcHz/V9khBPeXVW1ee5iumnKdXQrGihQFgy93xcjUYbA0VnSDDPJaa+y8xByjJl71N6Bb6YCRK88UH4+eyS55vdMmnNGfFCtwgLiSCOInXu/YyymedadMsEfOvVtLqgOj0Y4wC654G8Jbom4r39/i1Nou1QM0ckEJfDSS2MRaGyALFIHmHdwrkBsigWO5unzRUBDUMGlyO1EnyOf7NbU8xaU2zU6fAUFLUCIslonERwNx6ul73l6WCZ/6SzCM7Wh72YU5vsS5K9J9FknM0KFShabXq8WE2vMGK1es1pd93NnGPVAExztCwYm9exyOdUGMFb/cYYeR3arbOVK9mq/NXe1xziqoFiDmUl+QcajKTPh7o2+9GCYxmQAvHWd3XRvcLF9Cnq8K2eOsTRHYsdRKq2z/gNFsUC9J5nuyJ3FUBDLGHdZ5PiZJkDn2UejURSLa4f+TZsvm3JnWE7PIaX4iLGYbCkk57BJvA3ELEXT2gutvuXb37NBq6+qGITuVF+OxbLcE1fcrNC1leGLyKFOpG8albzoUwzNziTUcbO4BYyvGwW8hF0oJwTEiHzZiQSOYtlz0tomtP74HTPw2eWZEWKTxuLmhMTT9zS1IposKnyPeihhFGzvmTGTNjNW3gFN5RCj+ZW9gCIJKFPLOTt6jbDMKN48p/s/D7EubE8sj1p94c3trUMU8ViaCOClBpoteqWuWVI2aVV1se8Jr8yXyGHNxyMoMhRgNESXvcn2e5TEHBbnlBQJ6SBcIHCEKcJMuKqw1A1o1awGCPTt/hI+NlMQKU+sQZZY7TraIkPMCHw+tLGCqMVFLpveV/VVEEplzZ1V0wk+6YO3SdKtDjQMM0BqCfYRAWTFrwe22xNXoKhr55Buhi7FZoYsp42NsxmW+Tx/tNDS2REPLdi1jkAj8boCcFgn2PeF+fR9Mf2UmPs6jBpdKto/VKDWgBgwafE7Vqlhc7ETpkKVED/aOrmPh0RjdSdXiv02eUy92oGYkb5E4mEoVCNDLWpvfr+r1RaAnlrKvVLSr0RFmc8AaD5SNJKORnMh1OAilRZmHr4VE56KdmC79dcn0jqfnawj5Lae5rPjoneGmGTb4FeOIqy/HTH9B9IWcv+/h2Y5WRFhao4p1MvZNF9s+SJsfwMDtjtDpl7b9blgUPH4qN5pJCBlt1G7WLi0qzAHOXRIS+ow6U5aV4QIjjZgZpYUGtcOQPJu8RSSnTR1ncpQj1roixQvGsKTy0T+SpgVpcAmhsQlZYOjqTafu/LbHQm8uG5NXYbODJ5hDyYlbnyTVT2O3d/LUPxCtXhZcuyDQwygyeEShsdjtNp2UZccxodtnk0wlZ5wmnc5EV+UzeMGzBb2/rcbtislkQkw3btQiFWKnE9bwrTbstS3NYIMOvfie7scWpajUkOkuzDZtYp4U8G4QI5hU6OtpUtI573aBTF6U9JlqZzDoHR7p0emVCyqIS5cv/QFHHrE4uqdUjpHCcacPbhZCxahZUnVHi4VDWwHIACnhlbGmEX5TJaMlQJBSJR6H7FHUCQE/iAreisL4mJyulGsoc6ZMz71AWlSDIK08MsTs90cL82qeQAAVpH5ZAZ9gbK6A39+ZH1Plp+HTb+f9vN9nPQEDmEYM1irRU4Pt+iOjfI3BoLXAJsbb5I0pgZjimhr3rWfW9OPi54+3LZTYNXhyTV1VIHZfKXUN++R0HLGQP1T52mZ/pfrgVKjfoVi8rQs7JLibTNWzW85xVBRrLrDezdu0juf/IgFnvNSqbviIXImmha11vjs5FPdtHPJyrM6TwpT2aRhJHoXB1NXNII0ozYDeS44bnr4KGauFjqkiwmIxVhqcl4uUbKqhgYEPlIBkxkS3C04Gsn2zS18fSH6fdbmngX12yyy2CzPQkRqKr98NeQIcYJoUzxp0SkqSCHpY0FscvkCivqnbz6uzlyohJr2pelfu/ZpOAMHZ7JyrlymUCkpbzmU4Hb+HCEbZCYI7Bcsa/Etk7sw81/+wdGMfdVQQhc0m07/rjYYgdJCV015Twf1MVaZcon2Cche9/nzqDBWs1CRqJtKSOS0KbjCQJKWW8TQm1ohEBm15s8NXsggOfzF0E37jG5DCm879jRgHGmINBuILfYbr/lAcmdnJkuPY1sh7UrbGu1XuhYhM/9beNGilXmYhlO1W6xuh8FwduP6tyDow1qTs3Pd/k0BVAN8/ZAOHt6+7su63xKN13nQqlfYqJB4c5lW4mXbRzEzvqZl3uS0PGVmfCYG/UU76p7nLxdAtdwuC/K81Gl0kMZt3cau8F8hYV8EFL+cDC8Q+YqhXyCKWLN49NhYNReJvDn1orG6vPS56B3tL5vpPff/+EIRS8iv6u1h0RxBbaFksUokpkuwMyHghYldgvef4bH8UBB97wLOOB5/b/Vu7lZWah+DW9WvPcDH+mXlNUf1ICJncdknApg9uajSX3keld/3xRK93YCUPZDd3A4hAUxTto+I7WlTs8Dn9iU755uwLfL9iejUX0xs4du+5pHqHz2jlVU2my8DN7Ejsm+2vcTS0hAdXBbrGcAEtTRBm11mz1WWjwH/7ojFVR3+wuVSijQM5t7nR39lrRyix/GYKSe82BiwWk1TyVwPUCjz5m/s8CvArajR0PfgX/eubvdSAbUoZWmA0kch5xS6qGdrI7h9odGC5dbBzr18kXncf4zxmeMIHvwn1vOnMr4lH4AAc8iO4YXfzCcRa79LKXqh/jygUH+iDTWL6TnkkkPEXPY7Ckl3EGrLbmnQ+X0FuB/LVCIH6K77t5q8H3hszvWl6kDXOc29tkr8efMqP4+Dbjiz74YFnzms9DvlWOPhk6YoJDPEcUcJ8h/Cjy4PveGzFw4kfgrzUlanGYg/0hV7ICZlfdivFJlMFTjIQkRqu/8zaxZPefIxf0eGjPpMOhzWeUsFMIcfzldlK4BJGeVxlIaiMKA2uKPktlw3ZMGK9LxyO5xibh0TtKmYK9eXF7BLI/fCC3Zqrqmx5u1QgEBk6538YxQDHheNvxFmVRLglj50RzVelA2pUzoMcwWbkvnAPGSAy9PIzam+Hyj+sT1DI3hOJC3Gafsq9CGPHT1lD1eLWbGx1XQwgZlKrN0o/3m8+oheKi0q1VGe+ajQGMeZMWUyFzQJBEdoo1E39v1Z++NXYDgngG5PLI42TvyKbz5dZeALDeDwG4lHIAandA9FC/IygE69BaUgPWJBxROUB4W4UcjeyYJM7N7teATk2MilRQjeBa6H06BZimp5uk4Kj/ZBfkBxl4L8ODutd6scSxb7odstwbRc6nlhqJtEBBmvfe11LhFvVfSRLm+tHDek0YnN0yi1J2s8RqejkMN56s5UuBR+54SEggkWpnPeLdz/eKlQeXxxqGbmxGqczz0DQTbaIhazWehxHASud/+237mqkyNZF6jsMWrn+pixnhvpSifUG6KWJgKuNPzoRR4r+RZxC4sNBl9NmHkFOS7RfLFJWi+qgEChgHw3Nxa8EVkwoqYUczhlHY1sjTsiqO6LnuABq4EmgOSC/+PXsYTqqU9ZGp/HrBxLtNBeTvU2b7NUtkKLTDL5jF89os2OL1JOMDSqxXbVIq5paV624xqDa0fiCx3MNcWJHL+XaC/A/hKphpOccgbUpOhZLOS4IJqKlbCSigv8xBOcmM1WJZggQ/K972EkjfTn2xY0dVeHo7cMWTxaPBCItSGT4apS5JSSqxB2IGF2wdCzZM3LZbAA6PXwvGjxrvLhkCxTkYk5IBXHgL4uLUVcZL89FYJbCKTLwq/rvcganZrnc7hPnTnC3lh0LLkFzDseSpSL1j58Ir7fJ+ykq4GVsxHnCnxaUrR6HZWnSlMF51D8r7hgejgiIQmDmfDRVb/ahQOKWpUm4li66lfccsh+fWYWVPcrxDDB6A+UwCqvZesy5cIYQru2rGd93lYDFrpidcrhkRDxeM8kJ6DcmBVfCdMuxwHyg6KH66Zuy224FTdz3ORj3xRp9KVokqFgxCkwXGNLSmMebc/Q5l7AlxaT5Sxll0W5doqpIwcmDzdB0N4RE1iEbDpUu1q+xN+3TO+8ECyB+gOX2q2cyC0cNQDyn6zmmuDCzNW7RRXtt/ud5p+XLIgWAJzmB+GwdiERiED8vsF6oAcsEjFF9Ndp3uYlPEMb8txKq6rJmsxFXjN9CghF3tEEi73wViM9ZmIHzlRx/S7wGL0IQEgVDoG8ZfLL6IWByGeDLN2iwBVcrMUMRVb4bO5H4YqCQmacI6cVoqAPuhr/M9krg+XVVhSHN99yoBKSHDs8ZJXyu+RZLe7C4P2Sh0P2K52Tk/NpkPqiWgsqfTIXxIrga8KMSuP+sWbnmaNPGDbYNpE7UZosrxUhH6tru/49iSHk0WMAhjxuG/TgBfphq2wH3nyMozGbRjNzaCDTdTXeEGTTCTS1fLtOaH2fN75aVw2B5pDnnzyD/EH+Iv8BfrXh59IrBbP5j+WHh3BFZuY//yPDt4Zvl5fJS+Uf5W/lnefFImspPlf2ovD9U8vfzj/In+YP8Mf4sf4K/wOnDKSn76JLqpJEd/OM8GumAoEZ23EgJnjXJ6ac9Pf6z2F2ULfTXzsxRSEjUyfFumqD0wVXsimnVLHoTV+rQJ1VpO5ZiYQIlolg4ZIP8ND8BlHp7skKaXju0BdpO/IuSRqgZ6vo/NTOPCMaELAQYPZKm0lMBmIIuCH4RfAJdjuZK6AS0BzoEFZSbW7guh705aIsOi0GF6NZky7kfF5X0UiKKMCXUMOhOpjGClW+s5BZNnZBASliRhuXv6TimCM4cadgJORvB2B3HWorSqGDaV+KSaPp4T6pbSdLnm1w3g3+//C0LQsIhHmBny/1ZMA/RmQqdJKZvfOHlexVK+f0antIyL4HfLkLo70lw+kUG4oO4jI1Djsu0pLDrFZoe1E+lTGfQ7m09Dfw6+OSTLMS82pXpXHMwiLGKhQCQRN8Q0amo4gNZ3aXhyfswhRTk9MtJRsdUb0eDd81bJcdl4Qum4rzTJm3xcasWfSpV+xo+b2fWhNqUoBy5YclUTans0QNxoSSQsZOmw8LavXRnup1WlpTzYoBiWvHwPJec/K3bNycSHFa5QzdIFJEXVEwETBD+yMnLFJ9EIQ1kZtZxEAe51Hm8y8USNBKEaZDelucoA/3wKA9EflxT8XiAxDcDzMUlpSfVF2gcc7iCyY6Q4zoZHcyS+cZYY2eNnfjCaj8445UBgQL0T4fx090L/v9JkRflZGIndYrGgrdDdOvRZpsotZde8pigTKnE6qKEesOibB+MxHpoJXx0GuwpWyJbHNb8pa+GRtwZY9NO+DwnNaXvLRBlGDA0uPvVeS35LlQIZFYCajohoUZ6gItcwKHG9hqLz4b4JG38CR4YvxDy+XKvoMRjL9S5u6IWDJPtRCQVmXDzGRZuplRbsF5y48ySWawaHLFb+kAQtsvMbM1N7jurDkMHQT89koffdsplu8yZWk8kHnGpTo4PpAj/ZhV8GrZpTDjN+fVvuLUX/1rR55eodnrKoaogEoLVKS0oGKOR2l9i2qjRy5x0uDdcorXp9OLolCX2XedFjqY5sdZA0R42ImnB+M9AIWQTXWmvL3POumBgNyzNdjWoHH9+Wp1vOPNqZzSe2wtoud7/tx0rGIOZmGTyFnB3TJLZ5tJ0P51c9fVbk7Xm0JRovfxl/JHtCDSe+Vkc06z71ecVOF1TveHrim2Wv2FbTozaqGOKWadEQDjUTlcEuegcKT0HjUI4ZNwXT4j/mifIUuH0quTXS7E2V2s7jZufUVdB7hbDk6OXhc1o/gU5Zlk9cExK15UJBkFissE5FAQGCkrPAuUhMHVI4A1CbK/EILYNIOhCkz8fxu4bGGSQ2LiQDqVADqb3h9DLy9HAyZUl2/ZAsDGDqppRjFxwfMz2Js3tsYngXNAd9Xtli0QBrbRoYJn1pxcDA7EHxsS8pDtZtTUNMEI/rPyF9CBfmAMRj0GVmFXdXKn+kldAQCe0+03hpN7xFjhftkrmyhkn8stsNPST8dwaD0ntu+Tv21Ctcc+foHRrtaX6QhIhl/5TekUyVkwmTk84Oc1m60SDkc7jWEYju6n0rD7WeOC4WqLq5NQxGl806wfYPEe6md5yymGPuV3HkCjuQc+d25SXdnNE5yXB3FEb+lG2Ho78fBLiXgZzVf8SkUVuYqRUuDkx+cGvUGOfZgffGwytn1lxy6X98BldTM1ESkhGuZKnSTGCatk8/HWcJAqrFzQZOGVcfeY1y7he+93/ThUv7wMJlUpNkbhGgSmVUtkik4cr1XXogntxcJflXkeHGaF3cYdCSOdEcAeDBJWilzCZsKOmQDckrBGndUu32pS/ma63k9oi5gI3QcI+fcqEtnz4cPRVJaCvez6+3eZ51bGRjXWncwi64W0aQ6uV3U6X1Xf7fPzHfIJl/xBmsowuJsAxR/txO7W2liWF/5ULBdiO9bhMONtEnFzb4ief9gEKTuXBWE8oquGWcuCeRvBFE6cGK8UkCE5Varu/lydyQdd3xWak+yM3cR4BJ7JRRMARQU5hmAz/ekmR2LVMUA23zIe8RfnNlFLuxR83mVrcAglsN+AoXHCZqAqvZqEb+MsAEgttAPwr+Vc4I8xcvjMSzo6e2++ZJVyttkaf84+LmVtqfBKUNqqBDuBBHEFb4jZxFd+PTcjbAzd/yEvf51vY4l2DUvJ79D5rX2GJ1KmSQzeSLDpsA/2XDqiJQPRm8BIYFhuKYPdmqKTcN8RiHTbH2UxJOuy+t/R6bWZYlSC1emnTEVS0k5JDCiwBnr8tLxWBB90YgU1B3wZ6wedC4ObnUPc/FbwFCoHPlHosp1ychISZCmU/fMFI5aUpR8bu06SopH5aytNuGnSfwJ4ieKYb7KHhl39oOCb/fOqNHTaYlMrp7ivFyWMneG/5vZGbllAhqFZClFSLFhrXmDW0fOdSNQIBvJ2d7lTuipPsg91VQlAefkbCW6KtQT5f7gosCMpzwOiLKfjei01V42nDHE4pXvtNLun+K+22cUf4AwNoF0A8n2wE30SCi2VxKskRyD9Etz37eR60zjfKb7LZeSzKv8red9hDoCueAz+IuwINvInYs+LYcO5IUBD2WIzN16x7LqnujWdOtihFlelqbpdLZ9adeCi5i8R0jWsllKlBq1Mcvysli4o0u1Q5Hf/ZRK1aSUn9hIsRPrXiLqXYu1yua4j3iMcgNWsFOCbG+DWcHssHw8HpVmWhNuIwwYJ2EC9AYsgAFLlW3Tkl1W6azKaWfzUIYV6tGFDsFtobAjfzSHiqFJH0bd8kt/UlHRDHvgRIgIxyOcffeURU2Y0XynrdFD7qRqPNm834Uq9iwmMaMoglK4nvPbdB6SiAgaCMEqusdDDolgdjtYUyZyguC9kQS/1e6cbSNZ3vxIFQXG+usCwhurUzXzPX28LluiApLxsp9p45e6fVaN7ucnsErxHZN1JgqM6R3c5Axof62eU6XEBOr76eSuGf2TLgXk7AaGdpXreci/M8yniu3B2w0rycVpuumNkNXP+hTb8lZ3dtYL9bp9AGYwTmwMBdz5XrUC/MXeJE7lefYlqrH9WZe3mnxh+oCyU7HTTnEpjGnelMNor304MYYWGLkGllxx6GhoVHwOVsuZVAufUn63U6a7qTmoXxna24za6RhqwUzkaxGWZhyhpKt9ht8QNyCC4XjFLrVTr36jAPJVhVDZNjpKdc4RyedUlH1OXyakCo4TtUVSMz/vBaj2JFymV2DX3wEH61x2PJpTS3VUkluwBL+hkqxVWcHG7OUrk2HLbvYugMk6SSVOESXXpYLHB02206hYbIN6pVr0ahs9l15wX7B8ZKN9VJJIxRpqhisc0kuLwB2yGCUH29hAh0QUVV4Flq3hWJA8syTlAkGF28vNcGnzC1WLAwQOwl4YH/pW9Iir+benHwWgnbQPAwaTZSsI6uu1ACI1YpaKTa95TdmGYclvYZCr2E+yThsEs8s9j4ooGoMZFhvyO4g4UFkuzmi0PGlN3wekL7HZGhSZ/GWvp6n86mJszizKq1guIihTiBqESRAyAJIvx5o1gtDiNTUZK/+btI29m3zd86bRRnhRtu5Exu3uuxepZkzMyHW8bZoZKzaHeJyUi1ERAcfGgAc8uxQI42G3eV2GMdNf4cHesFEpNw6D3TVUE5BeOt8Oluy59Tid1yhJ4SXCJWQEJ4LCgorgGfxKsSq1LU2/oTE0ESNvn0khWLd6+HOSq6cQ9K/up+ixxGrw/gTDcFggjgHH4jRks5sbOLtj1It0CY0kIGxDb7JDrXBDRBIWGNhnP8JlvSbrQAllnRSdr6x8CzLfgL7bEGRtejL0xRMMoOCbS4CRK3/ws35DQYqcxkRnu8H8NU7c4/+dv+Bxyl2qS2nfNO4vj/C+361PHo62f/EIQ/ZUPqK+gyt/94DbwezUdyBjLXl4fNZiH4foW9SpC+9GDUu+F65bVLz8ZaMOD36S2OeOvnZh5z1jc0+rxul1PWwVhwZil5akb1agyHzUwFnOm9eusNN+EujV0SrbaLhki3fBpu0/toeCgU3CK/RaZxHv1YF8dO3g7eFwi41IxSpzwoiL1pguOA1oKBsFSCy1nVlg74L3/Bp6awxUWUpCRkVHSfHpmJYA3OjDeJ9wgIyroyi1Wug7Rg8njizaNXSt69UeHpqnKbjcdw9sR5s9ZUjSsVZ71r1AimuIZOylsi7UwaR2UMyfDd+gujVz7Gx4kp0IFPa5eQ4D2YMq3YbXMNhcki2DCS+oj2V1cNKABh68LV05T9wcI3RcBEC90AXhlpBR9DkkJhCJ0xiDIhxc6WPvdAJ+IE9MB0G7xr86uOOmkkrrPVe1Ol1RBft/8gntfepepXTcE7gR+AnzzCN8FvHxEMhd5YqCzfRwslVeaRFinIVwG/1vYWkOZlbfNZEJMJ/A1sv/XfdjQFMM9h3flS1NfkV1Ntuvrjh0uVWBxl3Cm67JhLpZKxJGgICc7NFGt1Vz4D3xxva7T6MwwLZXrNtFeabH9qw9JFuXyxPa3ZkyhnndbIPMvKhP8Q/Dm713QRB9HmnfGEicKKNNMz+3EqJRyYhnUIHpYNOM4ZxnGR4qLHxVJ+5tPjiTX6UMwf5gsud3bEOJMH/aGqPmT0iKLg093VeuzsHgnGiZztDbl/d2Kl+JMNtfYbSr1VcfSnAqSfcHGDwdA4b0GovxRCkrPPqLmmyoW2MLtIsAYvXcDPcwauzeQQNsnDhDy1ReOBsIitnXeW9uLQxgavL7MQDd5yZ1p1ved+41mbqp+QuRPlQDmMFjyK/iNqdTCi4nKcWS2B9Zvm9R8QsQwnlLAh+MnMVBFGcc3iDPieyBo5+XJkuVgCbYDhp+oLVWE4eOTtmNNF8trtanB9jYwBG0tzFCH5o1BKmk7lDa5EtVbbiYQbJPF4Cvwrx9yB4QeKIQSMaeEzIUo0TdBgvG+uc5qDRe8C3erpB2sUEm8WOWUJGZeY2bzLsApGAfe6qWn1BfWDGbtTmE8KIxD/U/yAruXnXCuMETLhXLLj6oLHGYfBd7PGtZkdDsf0YfPjqR425Aqw48o/HFGha7XgdBOmKWGAcNfWZbJn54aZNuhSNOfIDZ8vC1OhwiijCbh/igl8DvKNhZ9Tjhdhz+XMdxkUf/Wp9jwX/lEn3RH1ExVqFfMFo4tygv0wmgwKgWjQn0xLJLcOeEdndRpY/ZhNYz6aPKBje4eEohLro7arswdOUFmDXrvTKQaVfUm49dH3TZeE/xugkqQPVMPwOx5ZE7G/y4zN3TiUd6wFJ6Rj/DWiOp3NZpkfIC4qU8NtpbjMMvPke2uysDLpXoSsvp1bRLF1Pz5fCGuq3mChJXebKF77yRACk+lJ/amGM/+xjay/vOiOlX1h8UWJOeSAoqZTUfx+POYTuQPYaos/W425pSC+xA6MguR58r17KqtpPGKyRlu5CQpI3BqK9mZo+KIBeWVNLFGsmkz4hbY9hQOwux7WtP2pb1wtnhWLhXpyDjQElOVERb+d1wXdk1meykql+nbp0iyxYa1SBnZSLHRuBEaTdNThJ0IMJFIYBgOqVkRPKZnJDxXAPxTT9ieOPdXs7Km/n/UmigiXY3Nnxf4MC6tvwP23L+bfy5uOx1Wg0VcCaZrgPYPh+BvMdmE4Qsmjzx67D26+v3jsDsy2Kl34oqgYefS4qdE3dC8P7sh7vAqn9UeFn/fG6j87OccHXI98GPlPQbF7dzjPQ/sag1GQRL1McLNS5Bcs+X9WvTtJ7nvw0HqAGnn9zpWpk8xnO38HNhrafYW8WfaHbao2Jp3MXhWYDaDSpF917PmnKy2VihbmSeN+u6bTi78n3YhRmswWqf4cPA4rZ+aG/bem8vVecCX+KF+MA0MvDAGQqRk/qL6x5i6Z/uVZnejKO/99/1Dg00+IYOPH3u0AuLPIR4gjhAMhHzIRDvShk2y5ig2c8ERbV5NImQQaUjGBnI3gOBijJ8YDNXSZrVi5M1HQdILwygf2EpfUXO1818bV/t9xJRDH3wdx4+ZKyW0nePv4qtMRiDGy2o/3HUZtX+KFvPHk7UO9e2AO+ZzRbGLSgwf6IiRny8xBE8TT86bt/pXGCA3ZT49MgRhL3afSqR7ukQFmUkzud2+XOaTDsZAJsnix3WC329+I+Fu2NDVRLz88K0KXxOq3zM1z2NBSxWKZ+g/69r9izDrV7x57eIN0cSwWkM2mS3tQzlkOOGwv6WesA2tx6LuDEkFCgkSQfNdXGdME/f9j2KKdywAU8636vupI87ZRconmosaw2mh1OKxGsFoAMJShhFIkRJbekY6mm/c7kfg7XecWml0KuCuHmTJFdZU4TWD93zX8DVcjmkNw+cHa073zcy4xOE1AGDMCxPJN+cBmWmUR8iF/Sag1H2Xa7QSOWg3qYacbrGZ9djIUCqc4Dpqy8SuDjU7HpZpTGIXAH7dW16xdUG+QtdlwWTru5ax6cidWp9EMkXiEUhi80ZBTDxJfNAKBiEWCS8QlrGSy6H11LqXO2LGRcdh56k5eqhBuFEWn/xaucXGQNoNI1crmnL7cPvvbdfMDyIvSSjtPl7+88qXmBe+dp2/0idM6cT2y9NJHf/AGN37yBfW6qUyhR/aA/KL2N2mHNgI7dtpRA6A2tboHi5fGiv5cuOZqDFBLSZfefnDq6tMVr7zjBY1cq31Td+/jvOiRiMFR8tzXl5xAEFxEQ+s9YUPxuqnPkIriQ6DZdkCWOsmXZEURXvu4DfEJDaJtiHcnaeAW6xEJeFUKBv1txiPIyEJJQgxWcILnAYwq6cVFMv1e88gdQHi+TZx8b/3FFQ/3Pg+Bk7Yn7f3iix88fPR/hj6edVkEddX2/YFfEztGPhgOlYDjbwjEXNPWy2Kw3Tfoi3XAzUwAfZebv3/3P6WvbksDEyJQxE9qgHt4W//5czuO94OmUFVODF1uG7s6JS1WHusoSod37MDvCAtt6zYu3r9mAv3y84pki+Y3vSvoJL2kwRYrRPQWP5ihKvrTaLptWa9Xax+rV6nUe05/ae1e261uXzAcD8Vb5QZRCzGpwBZJVe8zFcslNILD/9av7XH3JgCICFkEIDHvtOY0Qx0zP/p41m5vaOxFnW5UqpXXHaFLfidEVtMgLNXcm/K2xo5NQBbLwVQy6VOJqIAxmlKDNkzSYrI8tLDZp6tCDgZr3BfFfY1YkMUzjfKAf+OifSMOU87RJvHuMFjLKJJldEtVBYJi0Uo8IYRruFkw7JoLuntSCn8+z6o1osE5uHA1jHLDecLtIqMOw42rzKJhlOAVUIfYSd0OjfzykqliwraEGhWmFW+EUiMNiYamBFfoQcvJ1mwE9mI+UuJxQ0EIuVOuONMKcl5OMhHuVLeBgNZfrp6kDiKMYquzPhGuRiH6PFLMT/5T+cigwNHPCKBytmInB4QaB1lV2/rNvTRM8bAh2SGHUFzikonGmke1KZ7S99mfYrKngssztGEobowREYnoBnHrPGSKBpe7XKmTJWALrefRKDmZ2OeXFbcQvd58LF+AIpbDi/Zl62kY/hqAYej5WOwA+MPS4w5BPXVBKpNJHZOiXJsEdmiZuiDCQovsdtuWOI9lvtoSp3CcuTi8igmO3yWCepX4LCPng+fr823x1ESYMXlewDDGYrOgI2z1nULCWjCuxKTCCK5Xu9+G/hHgpYlDQddfSQdEbEK/l/EFdhy4tN35j9NUpz9MbZt7Wr2IMkV53EHGchB0sVbz+jM9pfXnogBIBySRjKuaIcUICT/fp8f307vMhGyb02kKQAxCJOnpe8LYUhLWpbmxZnO6t/CB/B3kfPaS+bIv/On87jEsGkTcGqYrgKS6qUQK/u+F3QXIBu+gLHcfxWnav0l+5rEnt3RtleY76lO/uisOQ2gS1uD/rmBNysFu9xtcNWRt0xcLqDJ6EDVtqxwnEKXyBC74tKG0f1YrZxK579g7E+s/LxT/zTVp84D3OB0HjSslwkH2VoXNyxcKNFq0qAGfe/+rOyoUi5U6nU4pFsNz7nRtqXL7jYtSUlSWKKGnb2J/n2FjyKMqa7pVpWgonAyqgyN3DFBMSuUSSlaSDvM9e2cqRYNDTV2FVQos/B0hTmqluFaOpmRziKmK+QZ1pQU/JaGMwHNhj49VJim54IKVJYo1xhoI1CkBN63jJSzHGL2rWOS9Bj8/uu4I2nRZZN7tE2IczPD5TI404hMaT2gsYVQYMV+/FK38lven4MHtz/hB4mkuTW/qOSbpZaBm7gm8YbtOHK/wWSl9YQ35bkUuvALnoS/PzEPpyGDuW3IJaOusu6J95FLOZ7QzUtDUgqIYW2npsjXRoyaghp/JTiD67Xmv3RSN7DSrltCq4WUJI/Jf3r92kENHbnhizu5eWsFhV/OAhCNdUKGTMh5CO6dzsjjAMEVCiqcITD4HTQzWFR6MUnmBs1kAQxJSWSvsZzISwtSi/O80KS5lgnSbM6vEiBUPt/dzXP4IXff69gpqNTvInaZem/pybLTapVTdMy/wLgyGw6UR7fD0lVxSvC5SRIEMtKoH2RqyPEhhoZhEAdaVV/yibOanKgcgTrWxDUy56kgcvC4lI53FVl3wjuzmXmWR/xp9sVoo9dgJrSKSPywGINK0dfuYOrCKLxjIMKJ9/svDEdt1ns7ONokI2HtYlV4oCFBhEdisOTZ7ZDoJ/NgJHhiYw2EZAiBfFDWnjiU4soi4KMgB1am/8paf7TkVB8Wc2U6KOPtylcaQiGyfFzbbUH9a25EWUheMgmfT7zsQ1Qzf3LJ5rOHBQb+3Ev2MQT8H1pudizfenE145ZqPxktom9lr6RdlyvcPf52u6Egj/W5VuC2jTX1imoyUqaqnLq1zjPuevXs+V6/MjZVj+2KmiU33RiQRaD9lYsGdFIti+X3kruq9GyfIJIDWyhXuEFJmyl2JN7pAEbrc6EtGCFAUc8blsWiSVpLMp3h9lzZjZup/zJcoHkZ+0tvR+Y2QydQaicutlSWdodCU/ozIh1s+/JhKM7fXwZlNp+//SPs8ebJ51lXrFO3SOt4dXgfe48vtU7kNYodhtLw03hkodMEsjLFmkIZIJJEHLyCEtrBEcUn718xN7O/TRTTf8pmClcYljr8uXmnZxHKLFgUB/y0lUxmSLPWVkNCIPlJDsinsl1F6D293ziK+8clsHzqlicliseHEdpAdwSE7Fyr2Xxo2wUsYr+2lGBcfIpQCspU/Ga/jQ7orQduHxW0Cbl59FDqqLETeVegyeU6VRHxEhu32Uzwe6S3Wd92h1ztoMHZsx0yL2XJjVeMjy33sxD29bARUzEkV9BqxQxMS+PRQvPmWmlKIkMzDRRtYt85lVMMMYq7SCK6A71jz4+moAB/XbSk6QhmHjAA6F9ry0M8uAPNVxHY51vIwYr2uv7Tp1ddDiIChlHJmHSkWk5+pVvYAcnPyDnyKSbfAaKfMLBboso2gy4xfqUUWT3ZwXdJa7o6yJYLwJS5MUb5Yg2LPt3koRDA5vWkEy2odybzRFzY3cZnNtf2+W9FIENErdxQqhOu2l946JY831V76deM6ztH7K7DNtSawfDVvywTAkPAI8TWTCT/qlJjY14UC3cCXtv4Cj1d+JJU2vDsTALTMRd3+jQ+XSiaQ5Qw0vPUbbvj/cJhAYONSuL80I4wQ4XjcCesnsrUHdsbzCpRI5lRuqw5T1/g6pKJ4UfGYrLG96feyp5Y9pCsWp14xu5yltu/YhMdmSogoSVpXEDzy5I5lJHfnt68N7NTMXCbFtux6+dwPIfgiLy/vNr6I71HQv3sR5fILkeizw5IOhteOUqEbiIcr/tIh6zETHplWMqwyoiizixJk11yrYPj9NmEfCs8F7F3MhRKUIlAgSEOjOYLzpG06dBcdEKSOVuv6BcbgbQaVfIr2MRZ8DwOYmcxnJ0GrhEd5mF6HgyFQiKBKIuuD103j/G3BDxZN+heJlShYsPiHG+3gF6lQQ3gTQAGKn5ssJjrjnUmKyAmg/15P8Sw2dpt760sQuQe8Py51kAeFe0sgk1mj4cDuungqHgdngpLQYQwpQSjWKOPnOs3k8OVz7Z7YK5RsSSuBEC9YWOYaM3AD99mQsVIL7q+1KsCqu2tHk53jGjgUiYRVxlmMaWciK/G6guyLHJWlpDBNZSxP/XnT9ohuFGNm8q978gWoc7fU2EtajGqWamdY/TPlRZNUdjgcLF2YpSBiGKTn+m/3GUqniuQQxEUnkROF1TaIqsUPShBze4mLhCKNXOsVk4HAD/xK5gy0UdN/McGbxthJEzqel3n8vd05ddVFz17euy911OpHe5sHxipslFJEfb7IXvF3ZrKbej+0zGj/8zMWaAhO3EKx/2tG969UQ8hwA4mDsCJ3TBNqDN1yRSNNV64uXxFb03pI1JJKb27FuibloJVex4V9vQovAgUYUyg6cocO7FMr77FoE2u7+edDF9o44FDROeR1lJ3+f6J7sd+U8VN3thfDYKxEakUsnxwZhmHpG5RHv1GxQSKVQGBbKbv2QfMah3NyJ3ZtVYCjjAyO8ED7rDMi/0ADZs9B5GUwH5JKr7etRLa9uKgKBE1IY5kCp7QpqnwxfYou2/QychdYyOtVPrXlRlAmxte8D/fd8TFOvLZu6EILR8IqnWRNuZR6SZLyDxxKgkfGKxMIYTcZs0V9WDC+/FhUgNxkypgjgM4GTy4DR72sLf5/4l0AUNjsNxhjOe8IA5m0MWFYLTl5EVYGF62IDGrL2RFNvXPmOzrlt/5CRDgiXf7+C/nqIjaNzO+O2C+C8HZYr2BZwCKmS6WcN1vtCcqA1Hk/xkSV48ZR5ajfX7sGTnrqLdxQjDfXBe2yP39PNBu2hfFK6VvVjQYJl9PlT9cq5/J9Y9YLay4Jo29XTQVhpWXKL2SdyRSJxNOFarOtIuWEz6C1qSbBby4gLjgC0YBVwYP2j6BhpdEVq177LCg46bxn24nKQTTjTpVA8MYSqOygAC8PN6suWOy9tiSF7WE1B6HZoqdvAOEhqGjachxS5W44bktrhYyxYgkuaYs3c1w0mqkrgRNTkTJC6CYjHsmFtsFvc0pFvzGTHRYDtWFUqw0Wm8MdOYDlVDqj5JVNKyLMgwcdC1Y57QzMRvy1lFmbM4S8Wbrng+0Bp8zLpsG5YCSKTo3TJRR9KJamJxyGoonAEaQHCXDKfHLYiUj4OTHIxUQzPpeiyP0151cUzMoS4itv3GsOfWOvPBixx6wQVqvc8VyRXZdeLErzL4EdhUoWHDY1bxC8J50/iCq/khzYANd5L3ZTfhxJ1KyWZzJvGKCRIPgJ5IFcJKrhrDtkr62evr44ihGRrIc0Lo8oiyLTtx0csqa4P93riedGebXO7PQ93n97rQRBv2cD2+tncyST8PzP4Pr5dTSigqN6AfTzo7rvPvqRY5MDf0VgannCk6H0PAyKKjEz9PS+03IDw5GuuhFRoEHwJ0VRh/TtU8g1d/zXl8W5txxwB7hf/kzeJ9z67UXifRgHuP04YkKz/2wqKEDhrWLl0s9+ABDAMhRulIxFXcqzpvOJzNXFk5LyhYpJzX6dAcDsoVAbnQztIa+S9qrX/R+lN7WlNRA9bM9yUKdQ2a2L+DEu9ZGopmt+1Nn8TISg0Th712JdLg1xXUcwWN7t8gIK6gyShSG649S1OCpjx9QS9U+QJjWbRy8dl7Je2FiZ6/sSTwexfyWCPfppOplcpr2o8jWQAASB7Xt7f9MXWf3JITgAW/9/ebJPZc3pnv+0fzh9BUQBGEB3AvA/Bq6+KFvj1vmNpgD0XxGVIvbKqRoB2ofR/s7m5w9Nhdz7U0NpNlZ6A152qtq51yNYqdFhjEN5ZCLhvY4fw/v5iOZHCV598SlF0yJykKxRHm8Tog4h0JESM+5AxZcFWOBR0okUOuUMDE+e0gcjqniMGDTwYSuCe2jnu8n9zwyvi1thcRpK2/cwFngPNzYkDMI5q3EavJbhnZK2BpkR7mdJgXvY3EZY2YA+ZqT4oaeHjOLg8vqzi9ciCjv1YQu+NOe/BWre0ePv41O8Uk1+hPvIhjk39vwaZqpq+sHjg0HjAE+RfUmzgKBM1QQQwxZOE4eqBAFiRK+gzceJQxd7Ot7DtNb0U1CDS7u80qdJ2Cj8zF0Xa8fgJzNYQR8eqhbQE32Fm/gFcY4iVLXoyMObrZFmqjIlfAxAmwtgKxMJUBQEriYe4FGZdJLrqwJucFWhnIcz44A0uGACAuBoyIIM7gEt0I1jlBojD0/ZgrtrCR5gEiYvUsUYuMljbkQhPWRgLJnlRKIC7IjKyCTG+I3hj4eKV2D7d0te2xI1zFM58BPxsaN1dVM0bK4Byb4+RxKl98SxnSfk+x7aMQGfoU4oZ4kCcdGcHrUJVGnCiTDQC6cFbATIiSfsEWnzKJ5PDyP0M4Wq57Q5SfeLzSQU5fxBZT/0dozZp2l3CoancIZfc0ygLBc7ChThB5o74VpsGc9SiMmL1ZfhcJ8mxgafpLvk8JoJAyUfKIkUVNg1sb9XgtdFQGn1xDUySc172ci+2KrFdf0pHc8ZI+ENDq25bNGgtRdEdRO4NQ4WrcI5uqx4UbI7jdHoEjptkuSa/vLFQHKfjF7H73kiz+GFFJiJIa5/n6q+lGO7qByvpndS2XqHcz3U5jbO2b3UKFHtN/lJBCzCYdSE6qj9mHOU10Bn3LvVOkD9lfR8M5wuExyqloxC4ZseIW5KslCuIpWuJsPDJDk0TE9HD2e0/6ac3o0zhPRovP2NMhhVgnGrh1XGmFQYzypTdobL5PUpWHzXy51YAJcHvKXhMfh24GP/subgBQ4grV6BD0x39nfTOgmy248rHmSP+IeijkcU5+4yxf0Da52SVoq06cqBnp/DaT0Jo05y8oVeJnmEoq6jkt5tB9kx6d34BNqT/bazI0MI6p6Q1J5mdW9IbzzCJpMOTUBQzpKk7XJS0ltAsfcBMTknu/hfrc1rHMK6z6lqvlTUeQinMaxswdC+RwXsj1eNEVWdKiadCvc6eRz6NpLdFXT7qMw0sa0Kek5CacErX+es2DpKRwK+oyJi91gTUFZuatcHVuehZ3JQ88ahaXA6iQd1UUTNC3GbiJJOgofNea804ew1o4+hlImhSksbkVTDK9qlkFTjROVTouoIZaFjm76wCAfWOJEJIiDpnkn2pYyRnGRYkMprQeNwlwG75jleZyl2Rz8kfS+GhpERVmwI3csfo18gNvG4taoJsms4OoZTzL3PUAL/VIl0DkszPLa6oXT9OsDVcnJzw/lwDmwM58LL4XTY0/Xt3tXSRnhS3QrP4JtvSG9npTg3LPKxFP1k1c3lBsAvpThy2ZZzYldCYJQVMZGiJdQGJPnlNB6M0GmP26PBfnFcSVXClVI9C4nE5UfSy7YJMOmHUVWUtTd4t22JH6NpElbg4YcZwk6SOoONCG4I9SPqGKyKZ9FnBQNA/vCnfRmnJFIHBKgr2A6BINBAyP1m/taCJIAANTwAPOBRfYIguH+CIZk9ITB1mlDIqTehMYF/GbM+yMguIHH1CxAEiJzHpA+OiokJhaLJAAKZN7DSvgfdkY+naft0skPJdBZgwXQRAj5dBYpMN1GiV3eSbPq5FWr/nwJ+FOTw8jSqOd7VslIi1oGZujB9A9+CIzuLVUuCGPrh/LKUodAc8LKytIL6o4pbZztzUiYyoCivGdfbmyQkVcMrbVmbZN2X5xQD7NgfsqjiAIhXGI9NeLyM5FV5g4VXXr6y5OVDoXHxWM1ew8xcQo05NuGw5itS4dlZ4BOe4aVMBcqMVw8EhPRNJJeCy6mI182sFI4ta2WIZg/Ty0aln2AOZrYKO3h+VlZcDhFkhsdS4sHpn2xBuomIdx6hli9RON55ZyXnjoInZ1NhKxQFIFa9eS7MVbHo/0PSLvIhf+lf1+l/RuwXHBO5jzplEexNQhhYOHgERBQoUaGDLnro0712wDLDSUgRZFmQzdlEUQ26oaiyUtPQ0tEzMDIxs2RjZWPn4OTi5uHl4xcQFBLOLiKaQ0xcoikHpKRlZHPKodAYLAUlFXU6Wmjp6BkYmVr3TWYW1nQtYk/PEk4ubh7e9K3iFxAUwgs30W9EY9osLpGBbVLSMrJy8gqKSsqxXKOqpq6hqUXQ1tHV03ddg0ZNPJp5tWjVpl1Hhu7UpVtPxu7Vp9+AQYcNGTZiNBO7jPe3QGccMemoKdNmzGbqBXPmLTjuhJMWLTmVmTedcdayFavWnHPeBRddctkVV12z7robFiksUVJRt8/3tO33I71lBkamDvgd1EH7wM14wsYO4YBydshxruhwbh5eBLKufs8vgEILCgmLiIqJY+r1PVaywz0oLSOLk+tIjyvEK1oBoP86GoH/8SoHgxAOhmEERsFoGANjYRyMhwmwCHhCECwKk2AxmAyDk5AiyJDkFJSonrSXmoa2p8TQM1RgZGJmYWVj72mpnFzcPLx8/AKCQsIiomI57JOQlJKWkZWDgISChoGFg0dAREJGQUWLio6BiYWNgxutj/0An0AJIZFSYhJSMnIKSqro1MpoaOnoYzAoZ1TBxKyShZWNnYNTFVdM1dxq1KpTD4NjYePg4iHwCQiJiElIycgpKIs0SE1DS1e0UQZGJmYWVjZ2Dk4ubh5evmBOCKgT7L8o14RFRNWLiRdjTVJKg7SMrEY5eU0Kmi0W60VLlFTUNLR09JYZGJmYQSxgVjZ2CAeUE1act+HcxXuPF4Hk4xdAleAzwRJ9ISwiKiaOkcAaNWa8n/nFpEvKpkwXVDSrYk5V7eUEpJNbEVExcYGEpPDwKJWWU0aWbIuWWQ5xuDwY4QvQ/7H/fuWnH/H8izK5QhmiocKjeJiCQX27NYRWpzeQFM2wRpPZio/GAgL473SNtdZZj0JjsBSUXZA7Sk1DS0fPULQXJhwzCysbOwcnFzcPLx+/gKAQXlhEVExcQlJKWkZWTl5BUUlZRVVNXUNTi6Cto6un7zoMjoWNg4uHwCcgJCImISUjp6CkoqahpaNnYGRiZmFlY+fg5OLm4eXjF1AnKCQsIqpeTFxCUkqDtIysRjl5TQqaLVJYoqSipqGlo7fMwMjEDGIBs7KxQzignDAuODcPLwLJxy+AQgsKCYuIioljJLAEgAiTFM2wHC+IQgoAXuAlAAGJCjUatOhA6KEwgKFhYOHgERCRkNsY4oN8WDtwOzZ8EMDFsLIBi83R8AF2YW0mXsXhBXOR7tp7dt2LVXA3tpXtqkLH9c7JxYtyNJgUG3GJA4Grxt9lcgWY7cdoxQeklbV0oxqJgOCW9ajmE81p0I56GV9IS7ZmM0dM2TnU45jHrF9VXgy8jnvh5o9PbJRNPlIT9dXEXEUjcKpVhBdqsI6oAxMaitusfd3y5LwcjRs3YN6204xBPDhNx8wgu2bx+NeIZbVEDlFwF2uBj465cOD5AWGDSYR2zNO8+F4ctF0e6+ltZlmUw+wbvrBYtYiqpQsL+5iSvqf2FxH0UqeK7xzIn7YN5lQJaFyOiZZ1dMX9RRrPur+UEkgC3Gb0yOpNtmzniqexbKX3WV6fs7GoM2Maup3nrQ5huk5ip+bwoLvK6bjyna2y3drttrb3PAZxX2bYsf0B5sQmJJCdozNtQ6qCTSQ7lyqYr4xCqny//iQ9dsUMW2+HH1Fw2jE9kTFSj93ofD38Ilb8Y3Y03n7SyrFBqNgwvyngTK1Py7OcpH1en+JY1FvFIEwz1VBD122LT7ycNRPZ+APucKbaZqGHExX16lxTtXm988W9Y3ZpEVyyS9Eqe+BPbxdfv3JpJb6IIHTMRomNwZo+hgDTUHHb6c6mkMrjZeskhzm1j5vRr2U3FeFoHsEdv5c3MTSr5iMi10ZQvJp1+OKg4+HA1Khb3eUhW8tjH4Qv+ynfZJen6s+p56jgVjGohjqNnJ4Be1M6exTqEG2TthtUBj/ACusND9iiC/VnkVadVqqo/U4d+9wYNwWZ9ubre3ATmHddKYHEutSxkuQdEvMlglg3j03+aT34CLCL6+2MXUQ0uvR8qWeYgSKGRgaLADQYLbRc8BK2ny2LLnQ9Ebh2Dmn6BUI9g48U6GYwXC4BhI4hdIxRrwyGHZrfwtIfvn9dSKob9GxRrbd78fkik1yBSBK0PN5qUvbpqJUNX6tG0WVUFHI7JEXOFyVn5VnpZqe2RtTkJ02y1nNTf2zOTtlUu+WmTpPW4/W6H5MorkoQugy3lp5EMR2N3vp6whuPhfsxJCbQzPglM5Wp5GZkKFrP9z1pfmdGZNxI/bAi4NJfLeVFf7s9oXCiv7gYSww5Xx72jGdtEYaZ/pJKf6xtZYM6iS5MByMFIth2vRMANC3ZzZRu8ZsPg7fCKz76e22I73NqzQVkfpawbBZPxxjXrOLJeYb19KheTtd2yCECw8cLLpEGzV4FdgayRZeo0YFrDN5Eco2+PagVmNklzjCWtRIxhI7ZMOJDk0RyvlCcXICCP4Ugg8UiGCwCYBEARE5JTfKz9wOfIMggUgRjN+Byn4h2F3NeL8nXLa+cN7fwERlDk5+VryVqYnP4bmaXfEKyrJccgDAGq46Ua3gyN+tBXi1mAFtRilnKvgsMgBA6ZopmBy+LqBoU7WEuq3uIlAPKXKNS1siGxERYEt0OrfVStaARreIn3C+qaRxl1YhW05el1dIKpqE4E6FDCB1j8EtOSV0nubaI3rOOxq2ZooxoEyYvN5MZabJGpyGqHnXTtA1iaypjHH6/Hkc3pYEsZMxY6aY2fPI9+c2dM+/qyPlC+p62HAICNPXSz6mrfuqzzx6A/onkk+kWEJdsG+awpmVG/3dPm3npz445UO1G4jKQNQEHk+Put3/fjrfdmO3lByV2b+dKIAY/jJgqIpS54knd6bQOJyzsvJYMtlHdrwDlvq5Y8iYeNQJjsJb+BJ9XyVw6b2WVWgnOHdkEkjSziVHbyMLPNmA0+eUvMILrehUY/XufESxWL27RUT4M/40zSs7//xtjfxeDIwAkCo3B4vAEkIycgpKKmoaWjt5MsFhyqli3QahSS9huoff8ap3ZlLFc7kSW1yBDvvUkgdEKgbjkZ40bKVj1e5m7q/h4QBnzGAAPN+M6CS/t/8yOJG9I973Tmd6CMD8tlje3z57WIuDjH/hltyDnWfeEr9eFev7YcDSXx1GEi58iDbhpQmqVCOYMqd2SWQFNxelKuUCXMjfkQq4NbeKg4Kuqq0XXy+YXmvoBGJhciVxodyj68+Z29ZiLgXjPRm6LtJAPQ5nvldUsoWqrOR7kL8oHRJjPD9t5C/FtvxzVXkTZPzbH/UUZVg4rrC6o12E7hCPezvtGxi3yWr2EHftOPk4u1sMAv+G/PSjcSgeGpoN+RWv6CV/Xhp3jMJ5vwhxLBz11fu5Liauw0+9valEnxWJdRrO0+wD1o9sCiTxyyq3aVNEZSjjmtbO1NHUQ2n1v6PedYaE8zqF13fWSpLM1d4PDaW9nRTQqb8i+I9SxsmH53UbXTbbc5y/h0KcqZ15M1qhVZD2To8EpBISEbbFT7PjqSJqHpo1AMN9TVh4VACEYodExnMFksZO+J2j4/nzL4+Xn04zNtBlVF79V5x/VbbZRusXk8fP/8qOAA4ww7rUjMyV0kEkb+rOPZsCG7tCxI9GxdKclT/g0hMvItx8cZRs2ZZkm63IPTTcogtJzrXMy/NIXzmFQ6B0TYx00ZDVw7BhFIrinJvKlnGQCScEOrGMx3aYIygghC8dE0IxQP1j2vfh2RrrCmktslYBL0Jj9MuKyl7cpwpS7lUkNkSvkIj2rMIYmbNERZz5hPSgUNTViChPLJJLRRaJzVAaZc5iALPSlr6kZDQuGAUP9zhB/AK0i9srvtOVXYZMsYd+32HP4sqRS5bSKZxUx6sYQ6HfjGA+XIOkGRcAc+mA6YqtD63A6so7qYEVAgb2tcDbdptipRVhPC2bz4DA7198BpSOjbcm2Djnm0hXGMLOer7DKrCq+8eIL/3MalbsAAAAA) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}:root,:host{--pal-a: hsl(220 4% 46%);--pal-b: hsl(220 5% 34%);--pal-deep: hsl(220 6% 12%);--spin: 0deg;--arm: 89deg;--lift: 1;--progress: 0;--disc: min(74vh, 44vw);--R: calc(var(--disc) / 2);--sleeve: calc(var(--disc) * 1.04);--overlap: calc(var(--disc) * .215);--ink: hsl(0 0% 100%);--ink-dim: hsl(0 0% 100% / .62);--ink-faint: hsl(0 0% 100% / .32);--panel-w: min(400px, 88vw);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-soft: cubic-bezier(.4, 0, .2, 1);color-scheme:dark;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-synthesis-weight:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}html,body,#root{height:100%}body{background:#0b0c0e;color:var(--ink);overflow:hidden;overscroll-behavior:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}.app{position:fixed;inset:0;display:grid;place-items:center;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);isolation:isolate}.backdrop{position:absolute;inset:0;z-index:0;background:var(--pal-deep);transition:background-color 1.4s var(--ease-soft)}.backdrop:before,.backdrop:after{content:"";position:absolute;inset:-20%;transition:background 1.4s var(--ease-soft),opacity 1.4s var(--ease-soft)}.backdrop:before{background:radial-gradient(60% 70% at 22% 30%,var(--pal-a) 0%,transparent 62%),radial-gradient(55% 65% at 82% 78%,var(--pal-b) 0%,transparent 60%);opacity:.55;filter:blur(40px)}.backdrop:after{background:radial-gradient(75% 75% at 50% 50%,transparent 30%,hsl(0 0% 0% / .55) 100%)}.app[data-bg=subtle] .backdrop:before{opacity:.22}.app[data-bg=neutral] .backdrop{background:linear-gradient(212deg,#b2b2b2,#9a9a9b 45%,#7e7f81)}.app[data-bg=neutral] .backdrop:before,.app[data-bg=neutral] .backdrop:after{opacity:0}.app[data-bg=dark] .backdrop{background:#0c0c0e}.app[data-bg=dark] .backdrop:before{opacity:.12}.stage{position:relative;z-index:1;display:grid;place-items:center;width:100%;height:100%;transition:transform .42s var(--ease-out)}.app[data-panel=true] .stage{transform:translate(calc(-.5 * var(--panel-w)))}@media(max-width:900px){.app[data-panel=true] .stage{transform:none}}.deck{position:relative;width:calc(var(--sleeve) + var(--disc) - var(--overlap));height:var(--sleeve);overflow:visible;transform:translateY(-1.5vh);touch-action:none}.sleeve{position:absolute;top:50%;left:0;width:var(--sleeve);height:var(--sleeve);transform:translateY(-50%) rotate(-3deg);transition:transform .62s var(--ease-out),filter .62s var(--ease-out);z-index:1;cursor:pointer}.sleeve__art{position:absolute;inset:0;object-fit:cover;width:100%;height:100%;border-radius:calc(var(--disc) * .007);background:#2c2d30;box-shadow:0 calc(var(--disc) * .004) calc(var(--disc) * .01) #0000002e,0 calc(var(--disc) * .03) calc(var(--disc) * .07) #00000047}.sleeve__edge{position:absolute;inset:0;pointer-events:none;background:linear-gradient(100deg,hsl(0 0% 0% / .16) 0%,transparent 14%,transparent 92%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 100% / .5) 100%)}.deck[data-sleeve=front] .sleeve{transform:translateY(-50%) translate(calc(var(--disc) * .2)) scale(1.03);z-index:4}.sleeve__placeholder{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(150deg,#3a3c41,#212327);color:var(--ink-faint);font-size:calc(var(--disc) * .07);letter-spacing:.16em;text-transform:uppercase}.disc{position:absolute;top:50%;right:0;width:var(--disc);height:var(--disc);transform:translateY(-50%);border-radius:50%;z-index:2;cursor:pointer;filter:drop-shadow(0 calc(var(--disc) * .028) calc(var(--disc) * .055) hsl(0 0% 0% / .3));transition:transform .62s var(--ease-out)}.deck[data-sleeve=front] .disc{transform:translateY(-50%) translate(calc(var(--disc) * .06))}.disc__layer{position:absolute;inset:0;border-radius:50%;pointer-events:none}.app[data-vinyl=clear] .disc__material{background:radial-gradient(circle at 34% 24%,#fff,#f4f4f3 34%,#e7e7e5 62%,#d8d8d6 84%,#cfcfcd)}.app[data-vinyl=glass] .disc__material{background:radial-gradient(circle at 34% 24%,#fff6,#ffffff45 46%,#ffffff54);-webkit-backdrop-filter:blur(5px) saturate(.25) brightness(1.18);backdrop-filter:blur(5px) saturate(.25) brightness(1.18)}.app[data-vinyl=glass] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff29,#00000008,#ffffff29 3.4px)}.app[data-vinyl=glass] .disc__light{background:linear-gradient(198deg,#ffffff57,#ffffff1a 20%,#fff0 38%,#0000000d 58%,#0000001f 82%,#00000029)}.app[data-vinyl=black] .disc__material{background:radial-gradient(circle at 34% 24%,#2a2c31,#191b1f 38%,#101216 68%,#0a0b0e)}.app[data-vinyl=tinted] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--pal-a) 30%,#ffffff),color-mix(in oklab,var(--pal-a) 62%,#ffffff) 46%,color-mix(in oklab,var(--pal-a) 88%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__material,.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,#fdfcfa,#f3efe9 46%,#e2ddd5)}.app[data-vinyl=marble] .disc__pattern:after,.app[data-vinyl=splatter] .disc__pattern:after{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 78%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 52%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 82%,#000000) 100%);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:before,.app[data-vinyl=splatter] .disc__pattern:before{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#000000);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:after{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='4' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0.4 0.8 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.014' numOctaves='3' seed='5' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0.2 0.6 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='4' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0.4 0.8 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.014' numOctaves='3' seed='5' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0.2 0.6 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");-webkit-mask-composite:source-in;mask-composite:intersect;opacity:.92}.app[data-vinyl=marble] .disc__pattern:before{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='4' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.5 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='4' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.5 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.5}.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#ffffff),color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 46%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 92%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=splatter] .disc__pattern:after{background:#f7f3ec;-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");-webkit-mask-composite:source-over;mask-composite:add;opacity:.9}.app[data-vinyl=splatter] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 45%,#000000);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.75}.app[data-vinyl=marble] .disc__grooves,.app[data-vinyl=splatter] .disc__grooves{opacity:.62}.disc__light{background:linear-gradient(198deg,#ffffff8c,#ffffff2e 18%,#fff0 34%,#0000000f 52%,#00000024 72%,#0000002e 90%,#00000038)}.app[data-vinyl=black] .disc__light{background:linear-gradient(196deg,#ffffff29,#ffffff0d 26%,#fff0 46%,#0000001f 78%,#0003)}.disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff38,#0000000e,#ffffff38 3.4px);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%)}.app[data-vinyl=black] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff1a,#00000073,#ffffff1a 3.4px)}.disc__aniso{background:conic-gradient(from 0deg,hsl(0 0% 100% / .075) 0deg,transparent 44deg,hsl(0 0% 0% / .05) 96deg,transparent 140deg,hsl(0 0% 100% / .06) 187deg,transparent 232deg,hsl(0 0% 0% / .038) 283deg,transparent 320deg,hsl(0 0% 100% / .075) 360deg);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%)}.disc__flecks{--fleck: hsl(0 0% 0% / .075);background:radial-gradient(ellipse 2.6% .9% at 71% 33%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.9% .7% at 30% 64%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.3% .8% at 57% 79%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.6% .6% at 25% 38%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.1% .8% at 79% 59%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.4% .6% at 46% 18%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.8% .7% at 63% 12%,var(--fleck),transparent 70%);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%)}.app[data-vinyl=black] .disc__flecks{--fleck: hsl(0 0% 100% / .13)}.app[data-vinyl=glass] .disc__flecks{--fleck: hsl(0 0% 100% / .16)}.disc__gloss{background:linear-gradient(112deg,transparent 24%,hsl(0 0% 100% / .09) 37%,hsl(0 0% 100% / .24) 44.5%,hsl(0 0% 100% / .05) 52%,transparent 66%);mix-blend-mode:screen;-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%)}.app[data-vinyl=black] .disc__gloss{opacity:.55}.disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .05) 95%,hsl(0 0% 100% / .16) 98%,hsl(0 0% 0% / .08) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .09) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff80,inset 0 2px 3px #ffffff73,inset 0 -2px 4px #0000001a}.app[data-vinyl=black] .disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .3) 95%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 0% / .35) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .07) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff29,inset 0 2px 3px #ffffff2e,inset 0 -2px 4px #0006}.disc__spin{position:absolute;inset:0;border-radius:50%;transform:rotate(var(--spin));will-change:transform;backface-visibility:hidden}.label{position:absolute;top:50%;left:50%;width:46.4%;height:46.4%;transform:translate(-50%,-50%);border-radius:50%;overflow:hidden;background:#f1f0ed;box-shadow:0 0 0 1px #3b3835d9}.label__svg{display:block;width:100%;height:100%}.label__title{font-weight:800;letter-spacing:-.028em}.label__artist{font-weight:650;letter-spacing:-.012em}.label__micro{font-family:Iowan Old Style,Palatino,Palatino Linotype,Georgia,Times New Roman,serif;font-weight:400;letter-spacing:.005em}.tonearm{position:absolute;top:calc(50% - .7392 * var(--R));right:calc(.0674 * var(--R));width:0;height:0;z-index:5;pointer-events:none}.tonearm-base{position:absolute;top:calc(50% - .7392 * var(--R) - .3655 * var(--R));right:calc(.0674 * var(--R) - .2225 * var(--R));width:calc(var(--R) * .425);height:calc(var(--R) * .641);border-radius:calc(var(--R) * .2125);transform:rotate(-6deg);z-index:0;pointer-events:none;background:#ffffff21;box-shadow:inset 0 0 0 1px #ffffff1f,0 calc(var(--R) * .01) calc(var(--R) * .03) #0000001a}.tonearm__arm{position:absolute;inset:0;transform:rotate(var(--arm));transform-origin:0 0;will-change:transform}.tonearm__svg{position:absolute;left:calc(var(--R) * -.42);top:calc(var(--R) * -.4);width:calc(var(--R) * 2.17);height:calc(var(--R) * .82);overflow:visible;filter:drop-shadow(calc(var(--R) * .006 * (1 + 2 * var(--lift))) calc(var(--R) * .016 * (1 + 2.4 * var(--lift))) calc(var(--R) * .012 * (1 + 2.2 * var(--lift))) hsl(0 0% 0% / .34));transform:scale(calc(1 + .014 * var(--lift)));transform-origin:19.35% 48.8%}.tonearm__grip{position:absolute;top:calc(var(--R) * -.22);left:calc(var(--R) * .86);width:calc(var(--R) * .82);height:calc(var(--R) * .46);pointer-events:auto;touch-action:none;cursor:grab;border-radius:calc(var(--R) * .22)}.tonearm[data-dragging=true] .tonearm__grip{cursor:grabbing}.tonearm[data-dragging=true] .tonearm__svg{filter:drop-shadow(0 0 calc(var(--R) * .05) hsl(0 0% 100% / .35))}.hud{position:absolute;inset:0;z-index:6;display:grid;grid-template-rows:auto 1fr;padding:clamp(14px,2.4vh,30px) clamp(18px,3vw,44px);pointer-events:none}.hud__top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;transition:opacity .45s var(--ease-soft)}.hud__bottom{align-self:end;display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:clamp(12px,2vw,32px)}.hud__tools,.controls,.volume,.hud .iconbtn{pointer-events:auto}.hud__name{padding-left:4px;font-size:clamp(11px,1.4vh,14px);font-weight:550;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint)}.hud__tools,.hud__left{display:flex;align-items:center;gap:2px}.iconbtn--small{width:clamp(30px,4vh,40px);height:clamp(30px,4vh,40px);color:var(--ink-dim)}.iconbtn--small:hover{color:var(--ink)}.iconbtn--small svg{width:52%;height:52%}.badge-one{position:absolute;transform:translateY(.5px);font-size:9px;font-weight:700;line-height:1;pointer-events:none}.iconbtn{position:relative}.track{min-width:0;display:grid;gap:2px}.track__title{font-size:clamp(15px,1.9vh,22px);font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.track__artist{font-size:clamp(12px,1.5vh,17px);color:var(--ink-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.times{justify-self:end;display:flex;align-items:center;gap:10px;font-size:clamp(11px,1.4vh,15px);font-variant-numeric:tabular-nums;color:var(--ink-dim)}.times__bar{position:relative;width:clamp(80px,12vw,190px);height:3px;border-radius:2px;background:#ffffff2e;overflow:hidden}.times__fill{position:absolute;inset:0;transform-origin:left center;transform:scaleX(var(--progress));background:#fffc}.controls{display:flex;align-items:center;gap:clamp(10px,1.6vw,22px);padding:8px 12px;border-radius:999px;background:#00000038;-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);box-shadow:inset 0 0 0 1px #ffffff1a;transition:opacity .45s var(--ease-soft),transform .45s var(--ease-out)}.iconbtn{display:grid;place-items:center;width:clamp(38px,5.2vh,52px);height:clamp(38px,5.2vh,52px);border-radius:50%;color:var(--ink);transition:background .18s var(--ease-soft),transform .18s var(--ease-out),opacity .2s var(--ease-soft)}.iconbtn:hover{background:#ffffff1f}.iconbtn:active{transform:scale(.9)}.iconbtn[aria-pressed=true]{color:var(--pal-a);background:#ffffff24}.iconbtn--play{width:clamp(46px,6.6vh,66px);height:clamp(46px,6.6vh,66px);background:#ffffff24}.iconbtn:disabled{opacity:.28;cursor:default}.iconbtn svg{width:45%;height:45%;fill:currentColor}.iconbtn--play svg{width:42%;height:42%}.volume{display:flex;align-items:center;gap:10px;padding:0 6px}.volume input[type=range]{width:clamp(70px,9vw,130px);height:22px;appearance:none;background:none;cursor:pointer}.volume input[type=range]::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-webkit-slider-thumb{appearance:none;width:13px;height:13px;margin-top:-5px;border-radius:50%;background:var(--ink);box-shadow:0 1px 4px #0006}.volume input[type=range]::-moz-range-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-moz-range-thumb{width:13px;height:13px;border:0;border-radius:50%;background:var(--ink)}.hud[data-quiet=true] .hud__top,.hud[data-quiet=true] .controls{opacity:0;pointer-events:none}.hud[data-quiet=true] .controls{transform:translateY(8px)}.lyrics{position:absolute;inset:0;z-index:7;display:grid;place-items:center;padding:2vh clamp(24px,6vw,90px) 22vh;background:#0006;-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);animation:fade-in .35s var(--ease-out)}.lyrics__scroll{width:min(760px,100%);height:100%;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent);mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent)}.lyrics__inner{display:grid;gap:clamp(10px,1.6vh,20px);transition:transform .55s var(--ease-out);padding:40vh 0}.lyrics__line{cursor:pointer;font-size:clamp(19px,3.1vh,34px);font-weight:600;line-height:1.24;letter-spacing:-.015em;text-align:center;color:#ffffff4d;transition:color .4s var(--ease-soft),transform .4s var(--ease-out);transform-origin:center;text-wrap:balance}.lyrics__line[data-active=true]{color:var(--ink)}.lyrics__line[data-past=true]{color:#ffffff29}.lyrics__empty{color:var(--ink-dim);font-size:clamp(14px,2vh,19px);text-align:center}.rest{position:absolute;inset:0;z-index:8;display:grid;place-content:center;justify-items:center;gap:clamp(10px,2vh,20px);background:#0b0c0eb8;-webkit-backdrop-filter:blur(30px) saturate(.7);backdrop-filter:blur(30px) saturate(.7);animation:fade-in 1.4s var(--ease-soft);cursor:pointer}.rest__clock{font-size:clamp(64px,17vh,170px);font-weight:200;line-height:1;letter-spacing:-.035em;font-variant-numeric:tabular-nums;color:#ffffffb8}.rest__date{font-size:clamp(13px,1.9vh,18px);font-weight:450;letter-spacing:.16em;text-transform:uppercase;color:#ffffff57}.rest__hint{position:absolute;bottom:7vh;left:50%;transform:translate(-50%);color:#ffffff38;font-size:12px;letter-spacing:.1em;text-transform:uppercase}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.library{position:absolute;inset:0;z-index:7;color:var(--ink);background:#1214166b;-webkit-backdrop-filter:blur(72px) saturate(1.35);backdrop-filter:blur(72px) saturate(1.35);animation:fade-in .32s var(--ease-out)}.library__head{position:absolute;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;gap:14px;padding:clamp(14px,2.4vh,26px) clamp(18px,3vw,40px);pointer-events:none}.library__head>*{pointer-events:auto}.library__head h1{font-size:clamp(15px,2vh,20px);font-weight:600;letter-spacing:-.01em}.library__count{margin-left:auto;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint)}.library__error{margin:0 clamp(18px,3vw,40px);padding:11px 14px;border-radius:10px;font-size:13px;background:#b8352e2e;color:#fbb5b1}.library__chosen{display:grid;justify-items:center;gap:10px;animation:fade-in .3s var(--ease-out)}.library__chosenText{display:flex;align-items:baseline;gap:9px;font-size:clamp(14px,2vh,18px)}.library__chosenText span{color:var(--ink-dim)}.crate{position:absolute;inset:0;--cover: min(84vh, 46vw);--thick: calc(var(--cover) * .032);--radius: calc(var(--cover) * var(--radius-k));overflow:hidden;perspective:2400px;perspective-origin:50% 46%;cursor:grab;touch-action:none}.crate:active{cursor:grabbing}.crate:after{content:"";position:absolute;left:50%;bottom:6%;width:58%;height:22%;transform:translate(-50%);pointer-events:none;background:radial-gradient(50% 60% at 50% 100%,hsl(0 0% 100% / .16),transparent 70%)}.crate__item{position:absolute;top:calc(50% - var(--cover) / 2);left:calc(50% - var(--cover) / 2);width:var(--cover);height:var(--cover);transform-style:preserve-3d;cursor:pointer;will-change:transform}.crate__face,.crate__spine,.crate__opening{position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.crate__face{inset:0;overflow:hidden;box-shadow:0 calc(var(--cover) * .02) calc(var(--cover) * .05) #0000004d}.crate__face--front{transform:translateZ(calc(var(--thick) / 2))}.crate__face--back{transform:rotateY(180deg) translateZ(calc(var(--thick) / 2))}.crate__spine,.crate__opening{top:0;left:calc(50% - var(--thick) / 2);width:var(--thick);height:100%}.crate__spine{transform:rotateY(-90deg) translateZ(calc(var(--cover) / 2))}.crate__opening{transform:rotateY(90deg) translateZ(calc(var(--cover) / 2));background-image:var(--art);background-size:auto 100%;background-position:right center;background-color:#e9e9e6;box-shadow:inset 0 0 0 1px #0000001f}.crate__opening:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0000004d,#ffffff59 42%,#00000038)}.crate__spineFace{position:absolute;inset:0;background:linear-gradient(100deg,var(--spine-a, hsl(220 5% 34%)),var(--spine-b, hsl(220 6% 12%)));box-shadow:inset 0 0 0 1px #ffffff24}.crate__spineFace:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#ffffff29,#0000001a 45%,#ffffff1f)}.crate__art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#d8d8d5}.crate__art--empty{background:linear-gradient(150deg,#d9d9d6,#b6b6b2)}.crate__shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,#0000,#0000000f 55%,#00000026)}.crate__depth{position:absolute;inset:0;pointer-events:none;background:#000;opacity:0}.crate__label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:.6em;writing-mode:vertical-rl;transform:rotate(180deg);padding:8% 0;overflow:hidden;white-space:nowrap;pointer-events:none;font-size:calc(var(--thick) * .56);letter-spacing:.015em;color:#fff;text-shadow:0 1px 2px hsl(0 0% 0% / .6);-webkit-mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent)}.crate__label[data-ink=dark]{color:#fff}.crate__label b{font-weight:700}.crate__label span{font-weight:450;opacity:.78}.flyer{position:fixed;z-index:40;pointer-events:none;background-size:cover;background-position:center;box-shadow:0 18px 60px #00000080;will-change:transform}.setup{position:absolute;inset:0;z-index:9;display:grid;place-items:center;padding:4vh 4vw;background:#0e0f11db;-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);overflow-y:auto;animation:fade-in .3s var(--ease-out)}.panel{width:min(560px,100%);display:grid;gap:22px;padding:clamp(22px,4vh,36px);border-radius:22px;background:#1a1b1e;box-shadow:0 30px 80px #0009,inset 0 0 0 1px #ffffff12}.panel__head{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.panel h1{font-size:21px;font-weight:650;letter-spacing:-.02em}.panel h2{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint)}.field{display:grid;gap:7px}.field label{font-size:13px;color:var(--ink-dim)}.field input[type=text],.field input[type=password],.field select{width:100%;padding:11px 13px;font-size:15px;color:var(--ink);background:#26282c;border:1px solid hsl(0 0% 100% / .09);border-radius:11px;outline:none;transition:border-color .18s var(--ease-soft)}.field input:focus,.field select:focus{border-color:#ffffff57}.field small{font-size:12px;line-height:1.45;color:var(--ink-faint)}.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:3px;background:#26282c;border-radius:11px}.segmented button{padding:9px 6px;font-size:13px;border-radius:8px;color:var(--ink-dim);transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.segmented button[aria-pressed=true]{background:#ffffff21;color:var(--ink)}.switch{display:flex;align-items:center;justify-content:space-between;gap:14px;font-size:14px;cursor:pointer}.switch input{appearance:none;position:relative;width:46px;height:28px;flex:none;border-radius:999px;background:#3e4146;transition:background .22s var(--ease-soft);cursor:pointer}.switch input:after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .22s var(--ease-out)}.switch input:checked{background:#2e9e5d}.switch input:checked:after{transform:translate(18px)}.actions{position:sticky;bottom:calc(-1*clamp(22px,4vh,36px));z-index:1;display:flex;gap:10px;justify-content:flex-end;margin:0 calc(-1*clamp(22px,4vh,36px)) calc(-1*clamp(22px,4vh,36px));padding:16px clamp(22px,4vh,36px);background:#1a1b1e;border-top:1px solid hsl(0 0% 100% / .08);border-radius:0 0 22px 22px}.btn{padding:11px 20px;font-size:14px;font-weight:550;border-radius:11px;background:#ffffff1a;transition:background .18s var(--ease-soft)}.btn:hover{background:#ffffff2b}.btn--primary{background:#f5f5f5;color:#121416}.btn--primary:hover{background:#fff}.btn:disabled{opacity:.4;cursor:default}.note{padding:11px 13px;font-size:13px;line-height:1.5;border-radius:10px;background:#ffffff0d;color:var(--ink-dim)}.note--bad{background:#b8352e2e;color:#fbb5b1}.note--good{background:#33995e29;color:#adebc7}.status{position:absolute;top:calc(env(safe-area-inset-top) + 12px);left:50%;transform:translate(-50%);z-index:10;display:flex;align-items:center;gap:8px;padding:7px 15px;font-size:13px;border-radius:999px;background:#00000080;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:var(--ink-dim);animation:fade-in .3s var(--ease-out)}.status__dot{width:7px;height:7px;border-radius:50%;background:#f4ae34;animation:pulse 1.6s ease-in-out infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.25}}@media(orientation:portrait){:root{--disc: min(52vh, 84vw);--overlap: calc(var(--disc) * .34)}.deck{transform:translateY(-4vh)}}@media(prefers-reduced-motion:reduce){.lyrics__inner,.sleeve,.disc{transition-duration:.01ms}}.library__search{display:flex;align-items:center;gap:9px;min-width:0;flex:0 1 clamp(220px,34vw,420px);padding:9px 13px;background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px;transition:border-color .18s var(--ease-soft),background .18s var(--ease-soft)}.library__search:focus-within{background:#ffffff1c;border-color:#ffffff4d}.library__search svg{flex:none;width:16px;height:16px;color:var(--ink-faint)}.library__search input{flex:1;min-width:0;font-size:clamp(13px,1.7vh,15px);color:var(--ink);background:none;border:none;outline:none}.library__search input::placeholder{color:var(--ink-faint)}.library__search input::-webkit-search-cancel-button{display:none}.library__search button{flex:none;width:22px;height:22px;font-size:17px;line-height:1;color:var(--ink-dim);background:#ffffff1a;border:none;border-radius:50%;cursor:pointer}.hud__room{display:inline-flex;align-items:center;gap:2px;padding:4px 6px 4px 2px;background:none;border:none;border-radius:8px;cursor:pointer;pointer-events:auto;transition:background .18s var(--ease-soft)}.hud__room:hover{background:#ffffff12}.hud__chev{width:14px;height:14px;color:var(--ink-faint)}.sidepanel{position:fixed;top:0;right:0;bottom:0;z-index:60;width:var(--panel-w);display:flex;flex-direction:column;background:#121416b8;-webkit-backdrop-filter:blur(40px) saturate(1.3);backdrop-filter:blur(40px) saturate(1.3);border-left:1px solid hsl(0 0% 100% / .08);animation:slide-from-right .34s var(--ease-out)}@keyframes slide-from-right{0%{opacity:0;transform:translate(16px)}}.sidepanel__head{display:flex;align-items:center;gap:12px;padding:clamp(16px,2.6vh,26px) 20px 14px;border-bottom:1px solid hsl(0 0% 100% / .07)}.sidepanel__head h2{flex:1;font-size:14px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.sidepanel__error{margin:14px 20px 0;padding:10px 13px;font-size:13px;line-height:1.45;color:#f6b4ac;background:#a3352929;border-radius:10px}.sidepanel__empty{padding:26px 20px;font-size:14px;color:var(--ink-faint)}.sidepanel__list{flex:1;overflow-y:auto;padding:8px 12px 22px;list-style:none;overscroll-behavior:contain}.queue__item{border-radius:12px}.queue__pick{display:flex;align-items:center;gap:12px;width:100%;padding:9px 8px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.queue__pick:hover:not(:disabled){background:#ffffff12}.queue__pick:disabled{cursor:default;opacity:.5}.queue__art svg{width:20px;height:20px;color:#ffffffeb;opacity:0;transition:opacity .16s var(--ease-soft);filter:drop-shadow(0 1px 3px hsl(0 0% 0% / .6))}.queue__pick:hover:not(:disabled) .queue__art svg{opacity:1}.queue__item[data-state=past]{opacity:.4}.queue__item[data-state=now]{background:#ffffff14}.queue__art{flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:6px;background-color:#2a2d32;background-size:cover;background-position:center;box-shadow:0 1px 3px #0006}.sidepanel__text{flex:1;min-width:0;display:grid;gap:2px}.sidepanel__text b{font-size:14px;font-weight:550;color:var(--ink)}.sidepanel__text span{font-size:12.5px;color:var(--ink-faint)}.sidepanel__text b,.sidepanel__text span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.queue__time{flex:none;font-size:12px;font-variant-numeric:tabular-nums;color:var(--ink-faint)}.speakers__item{display:grid;gap:2px;padding:4px 0}.speakers__pick{display:flex;align-items:center;gap:12px;width:100%;padding:11px 10px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.speakers__pick:hover:not(:disabled){background:#ffffff12}.speakers__pick:disabled{cursor:default}.speakers__item[data-here=true] .speakers__pick{background:#ffffff14}.speakers__dot{flex:none;width:8px;height:8px;border-radius:50%;background:#fff3}.speakers__dot[data-on=true]{background:#4eda88;box-shadow:0 0 0 3px #4eda882e}.speakers__move{display:inline-flex;align-items:center;gap:7px;margin-left:30px;padding:7px 12px;font-size:12.5px;color:var(--ink-dim);background:#ffffff0f;border:1px solid hsl(0 0% 100% / .08);border-radius:999px;cursor:pointer;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.speakers__move:hover{color:var(--ink);background:#ffffff1f}.speakers__move svg{width:15px;height:15px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:8px}.pair input{min-width:0}.speakers__group{padding:16px 10px 6px}.speakers__group h3{font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.speakers__group p{margin-top:3px;font-size:11.5px;line-height:1.4;color:var(--ink-faint)}.tint{display:flex;align-items:center;gap:12px}.tint input[type=color]{width:54px;height:38px;padding:0;background:none;border:1px solid hsl(0 0% 100% / .14);border-radius:10px;cursor:pointer}.tint input[type=color]::-webkit-color-swatch-wrapper{padding:4px}.tint input[type=color]::-webkit-color-swatch{border:none;border-radius:6px}`;
class N1 extends HTMLElement {
  root = null;
  client = null;
  mounted = !1;
  /** Home Assistant écrit ici, souvent. */
  set hass(r) {
    r && (this.client ? this.client.update(r) : (this.client = new T1(r), this.premierChoixDEnceinte(r), this.monter()));
  }
  /**
   * À la toute première ouverture, on choisit une enceinte plausible plutôt que
   * d'accueillir l'utilisateur par un formulaire vide. Il pourra en changer
   * d'un geste depuis le nom de la pièce.
   */
  premierChoixDEnceinte(r) {
    const d = hc();
    if (d.entityId) return;
    const s = M1(r);
    s && Hr({ ...d, entityId: s });
  }
  monter() {
    if (this.mounted || !this.client) return;
    this.mounted = !0;
    const r = this.attachShadow({ mode: "open" }), d = Q0.match(/@font-face\s*\{[^}]*\}/g) ?? [];
    if (d.length > 0 && !document.getElementById("md-vinyl-fonts")) {
      const E = document.createElement("style");
      E.id = "md-vinyl-fonts", E.textContent = d.join(`
`), document.head.appendChild(E);
    }
    const s = document.createElement("style");
    s.textContent = Q0, r.appendChild(s);
    const v = document.createElement("div");
    v.style.cssText = "position:absolute; inset:0; overflow:hidden;", r.appendChild(v), this.style.cssText = "display:block; position:relative; width:100%; height:100%;", this.root = xp.createRoot(v), this.root.render(
      /* @__PURE__ */ o.jsx(C.StrictMode, { children: /* @__PURE__ */ o.jsx(z1, { embedded: this.client }) })
    );
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = null, this.mounted = !1, this.client?.close(), this.client = null;
  }
}
customElements.get("md-vinyl-panel") || customElements.define("md-vinyl-panel", N1);
console.info("%c MD Vinyl %c panneau chargé ", "background:#c8542e;color:#fff", "");
