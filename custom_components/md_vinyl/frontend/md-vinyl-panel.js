var Nr = { exports: {} }, Yi = {};
var j0;
function op() {
  if (j0) return Yi;
  j0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(r, p, E) {
    var T = null;
    if (E !== void 0 && (T = "" + E), p.key !== void 0 && (T = "" + p.key), "key" in p) {
      E = {};
      for (var L in p)
        L !== "key" && (E[L] = p[L]);
    } else E = p;
    return p = E.ref, {
      $$typeof: f,
      type: r,
      key: T,
      ref: p !== void 0 ? p : null,
      props: E
    };
  }
  return Yi.Fragment = c, Yi.jsx = d, Yi.jsxs = d, Yi;
}
var O0;
function dp() {
  return O0 || (O0 = 1, Nr.exports = op()), Nr.exports;
}
var o = dp(), Ur = { exports: {} }, nt = {};
var D0;
function hp() {
  if (D0) return nt;
  D0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), G = Symbol.iterator;
  function $(h) {
    return h === null || typeof h != "object" ? null : (h = G && h[G] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, k = Object.assign, P = {};
  function at(h, A, w) {
    this.props = h, this.context = A, this.refs = P, this.updater = w || V;
  }
  at.prototype.isReactComponent = {}, at.prototype.setState = function(h, A) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, A, "setState");
  }, at.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function gt() {
  }
  gt.prototype = at.prototype;
  function F(h, A, w) {
    this.props = h, this.context = A, this.refs = P, this.updater = w || V;
  }
  var pt = F.prototype = new gt();
  pt.constructor = F, k(pt, at.prototype), pt.isPureReactComponent = !0;
  var Et = Array.isArray;
  function Yt() {
  }
  var tt = { H: null, A: null, T: null, S: null }, rt = Object.prototype.hasOwnProperty;
  function wt(h, A, w) {
    var Y = w.ref;
    return {
      $$typeof: f,
      type: h,
      key: A,
      ref: Y !== void 0 ? Y : null,
      props: w
    };
  }
  function le(h, A) {
    return wt(h.type, A, h.props);
  }
  function Xt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === f;
  }
  function st(h) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(w) {
      return A[w];
    });
  }
  var At = /\/+/g;
  function qt(h, A) {
    return typeof h == "object" && h !== null && h.key != null ? st("" + h.key) : A.toString(36);
  }
  function Ht(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(Yt, Yt) : (h.status = "pending", h.then(
          function(A) {
            h.status === "pending" && (h.status = "fulfilled", h.value = A);
          },
          function(A) {
            h.status === "pending" && (h.status = "rejected", h.reason = A);
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
  function M(h, A, w, Y, X) {
    var J = typeof h;
    (J === "undefined" || J === "boolean") && (h = null);
    var et = !1;
    if (h === null) et = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          et = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case f:
            case c:
              et = !0;
              break;
            case H:
              return et = h._init, M(
                et(h._payload),
                A,
                w,
                Y,
                X
              );
          }
      }
    if (et)
      return X = X(h), et = Y === "" ? "." + qt(h, 0) : Y, Et(X) ? (w = "", et != null && (w = et.replace(At, "$&/") + "/"), M(X, A, w, "", function(ve) {
        return ve;
      })) : X != null && (Xt(X) && (X = le(
        X,
        w + (X.key == null || h && h.key === X.key ? "" : ("" + X.key).replace(
          At,
          "$&/"
        ) + "/") + et
      )), A.push(X)), 1;
    et = 0;
    var dt = Y === "" ? "." : Y + ":";
    if (Et(h))
      for (var bt = 0; bt < h.length; bt++)
        Y = h[bt], J = dt + qt(Y, bt), et += M(
          Y,
          A,
          w,
          J,
          X
        );
    else if (bt = $(h), typeof bt == "function")
      for (h = bt.call(h), bt = 0; !(Y = h.next()).done; )
        Y = Y.value, J = dt + qt(Y, bt++), et += M(
          Y,
          A,
          w,
          J,
          X
        );
    else if (J === "object") {
      if (typeof h.then == "function")
        return M(
          Ht(h),
          A,
          w,
          Y,
          X
        );
      throw A = String(h), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return et;
  }
  function q(h, A, w) {
    if (h == null) return h;
    var Y = [], X = 0;
    return M(h, Y, "", "", function(J) {
      return A.call(w, J, X++);
    }), Y;
  }
  function W(h) {
    if (h._status === -1) {
      var A = h._result;
      A = A(), A.then(
        function(w) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = w);
        },
        function(w) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = w);
        }
      ), h._status === -1 && (h._status = 0, h._result = A);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var it = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, R = {
    map: q,
    forEach: function(h, A, w) {
      q(
        h,
        function() {
          A.apply(this, arguments);
        },
        w
      );
    },
    count: function(h) {
      var A = 0;
      return q(h, function() {
        A++;
      }), A;
    },
    toArray: function(h) {
      return q(h, function(A) {
        return A;
      }) || [];
    },
    only: function(h) {
      if (!Xt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return nt.Activity = B, nt.Children = R, nt.Component = at, nt.Fragment = d, nt.Profiler = p, nt.PureComponent = F, nt.StrictMode = r, nt.Suspense = U, nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt, nt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return tt.H.useMemoCache(h);
    }
  }, nt.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, nt.cacheSignal = function() {
    return null;
  }, nt.cloneElement = function(h, A, w) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var Y = k({}, h.props), X = h.key;
    if (A != null)
      for (J in A.key !== void 0 && (X = "" + A.key), A)
        !rt.call(A, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && A.ref === void 0 || (Y[J] = A[J]);
    var J = arguments.length - 2;
    if (J === 1) Y.children = w;
    else if (1 < J) {
      for (var et = Array(J), dt = 0; dt < J; dt++)
        et[dt] = arguments[dt + 2];
      Y.children = et;
    }
    return wt(h.type, X, Y);
  }, nt.createContext = function(h) {
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
  }, nt.createElement = function(h, A, w) {
    var Y, X = {}, J = null;
    if (A != null)
      for (Y in A.key !== void 0 && (J = "" + A.key), A)
        rt.call(A, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (X[Y] = A[Y]);
    var et = arguments.length - 2;
    if (et === 1) X.children = w;
    else if (1 < et) {
      for (var dt = Array(et), bt = 0; bt < et; bt++)
        dt[bt] = arguments[bt + 2];
      X.children = dt;
    }
    if (h && h.defaultProps)
      for (Y in et = h.defaultProps, et)
        X[Y] === void 0 && (X[Y] = et[Y]);
    return wt(h, J, X);
  }, nt.createRef = function() {
    return { current: null };
  }, nt.forwardRef = function(h) {
    return { $$typeof: L, render: h };
  }, nt.isValidElement = Xt, nt.lazy = function(h) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: h },
      _init: W
    };
  }, nt.memo = function(h, A) {
    return {
      $$typeof: y,
      type: h,
      compare: A === void 0 ? null : A
    };
  }, nt.startTransition = function(h) {
    var A = tt.T, w = {};
    tt.T = w;
    try {
      var Y = h(), X = tt.S;
      X !== null && X(w, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Yt, it);
    } catch (J) {
      it(J);
    } finally {
      A !== null && w.types !== null && (A.types = w.types), tt.T = A;
    }
  }, nt.unstable_useCacheRefresh = function() {
    return tt.H.useCacheRefresh();
  }, nt.use = function(h) {
    return tt.H.use(h);
  }, nt.useActionState = function(h, A, w) {
    return tt.H.useActionState(h, A, w);
  }, nt.useCallback = function(h, A) {
    return tt.H.useCallback(h, A);
  }, nt.useContext = function(h) {
    return tt.H.useContext(h);
  }, nt.useDebugValue = function() {
  }, nt.useDeferredValue = function(h, A) {
    return tt.H.useDeferredValue(h, A);
  }, nt.useEffect = function(h, A) {
    return tt.H.useEffect(h, A);
  }, nt.useEffectEvent = function(h) {
    return tt.H.useEffectEvent(h);
  }, nt.useId = function() {
    return tt.H.useId();
  }, nt.useImperativeHandle = function(h, A, w) {
    return tt.H.useImperativeHandle(h, A, w);
  }, nt.useInsertionEffect = function(h, A) {
    return tt.H.useInsertionEffect(h, A);
  }, nt.useLayoutEffect = function(h, A) {
    return tt.H.useLayoutEffect(h, A);
  }, nt.useMemo = function(h, A) {
    return tt.H.useMemo(h, A);
  }, nt.useOptimistic = function(h, A) {
    return tt.H.useOptimistic(h, A);
  }, nt.useReducer = function(h, A, w) {
    return tt.H.useReducer(h, A, w);
  }, nt.useRef = function(h) {
    return tt.H.useRef(h);
  }, nt.useState = function(h) {
    return tt.H.useState(h);
  }, nt.useSyncExternalStore = function(h, A, w) {
    return tt.H.useSyncExternalStore(
      h,
      A,
      w
    );
  }, nt.useTransition = function() {
    return tt.H.useTransition();
  }, nt.version = "19.2.8", nt;
}
var w0;
function Xr() {
  return w0 || (w0 = 1, Ur.exports = hp()), Ur.exports;
}
var C = Xr(), Cr = { exports: {} }, Li = {}, jr = { exports: {} }, Or = {};
var q0;
function mp() {
  return q0 || (q0 = 1, (function(f) {
    function c(M, q) {
      var W = M.length;
      M.push(q);
      t: for (; 0 < W; ) {
        var it = W - 1 >>> 1, R = M[it];
        if (0 < p(R, q))
          M[it] = q, M[W] = R, W = it;
        else break t;
      }
    }
    function d(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var q = M[0], W = M.pop();
      if (W !== q) {
        M[0] = W;
        t: for (var it = 0, R = M.length, h = R >>> 1; it < h; ) {
          var A = 2 * (it + 1) - 1, w = M[A], Y = A + 1, X = M[Y];
          if (0 > p(w, W))
            Y < R && 0 > p(X, w) ? (M[it] = X, M[Y] = W, it = Y) : (M[it] = w, M[A] = W, it = A);
          else if (Y < R && 0 > p(X, W))
            M[it] = X, M[Y] = W, it = Y;
          else break t;
        }
      }
      return q;
    }
    function p(M, q) {
      var W = M.sortIndex - q.sortIndex;
      return W !== 0 ? W : M.id - q.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      f.unstable_now = function() {
        return E.now();
      };
    } else {
      var T = Date, L = T.now();
      f.unstable_now = function() {
        return T.now() - L;
      };
    }
    var U = [], y = [], H = 1, B = null, G = 3, $ = !1, V = !1, k = !1, P = !1, at = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    function pt(M) {
      for (var q = d(y); q !== null; ) {
        if (q.callback === null) r(y);
        else if (q.startTime <= M)
          r(y), q.sortIndex = q.expirationTime, c(U, q);
        else break;
        q = d(y);
      }
    }
    function Et(M) {
      if (k = !1, pt(M), !V)
        if (d(U) !== null)
          V = !0, Yt || (Yt = !0, st());
        else {
          var q = d(y);
          q !== null && Ht(Et, q.startTime - M);
        }
    }
    var Yt = !1, tt = -1, rt = 5, wt = -1;
    function le() {
      return P ? !0 : !(f.unstable_now() - wt < rt);
    }
    function Xt() {
      if (P = !1, Yt) {
        var M = f.unstable_now();
        wt = M;
        var q = !0;
        try {
          t: {
            V = !1, k && (k = !1, gt(tt), tt = -1), $ = !0;
            var W = G;
            try {
              e: {
                for (pt(M), B = d(U); B !== null && !(B.expirationTime > M && le()); ) {
                  var it = B.callback;
                  if (typeof it == "function") {
                    B.callback = null, G = B.priorityLevel;
                    var R = it(
                      B.expirationTime <= M
                    );
                    if (M = f.unstable_now(), typeof R == "function") {
                      B.callback = R, pt(M), q = !0;
                      break e;
                    }
                    B === d(U) && r(U), pt(M);
                  } else r(U);
                  B = d(U);
                }
                if (B !== null) q = !0;
                else {
                  var h = d(y);
                  h !== null && Ht(
                    Et,
                    h.startTime - M
                  ), q = !1;
                }
              }
              break t;
            } finally {
              B = null, G = W, $ = !1;
            }
            q = void 0;
          }
        } finally {
          q ? st() : Yt = !1;
        }
      }
    }
    var st;
    if (typeof F == "function")
      st = function() {
        F(Xt);
      };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), qt = At.port2;
      At.port1.onmessage = Xt, st = function() {
        qt.postMessage(null);
      };
    } else
      st = function() {
        at(Xt, 0);
      };
    function Ht(M, q) {
      tt = at(function() {
        M(f.unstable_now());
      }, q);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, f.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : rt = 0 < M ? Math.floor(1e3 / M) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, f.unstable_next = function(M) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = G;
      }
      var W = G;
      G = q;
      try {
        return M();
      } finally {
        G = W;
      }
    }, f.unstable_requestPaint = function() {
      P = !0;
    }, f.unstable_runWithPriority = function(M, q) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var W = G;
      G = M;
      try {
        return q();
      } finally {
        G = W;
      }
    }, f.unstable_scheduleCallback = function(M, q, W) {
      var it = f.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? it + W : it) : W = it, M) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return R = W + R, M = {
        id: H++,
        callback: q,
        priorityLevel: M,
        startTime: W,
        expirationTime: R,
        sortIndex: -1
      }, W > it ? (M.sortIndex = W, c(y, M), d(U) === null && M === d(y) && (k ? (gt(tt), tt = -1) : k = !0, Ht(Et, W - it))) : (M.sortIndex = R, c(U, M), V || $ || (V = !0, Yt || (Yt = !0, st()))), M;
    }, f.unstable_shouldYield = le, f.unstable_wrapCallback = function(M) {
      var q = G;
      return function() {
        var W = G;
        G = q;
        try {
          return M.apply(this, arguments);
        } finally {
          G = W;
        }
      };
    };
  })(Or)), Or;
}
var R0;
function pp() {
  return R0 || (R0 = 1, jr.exports = mp()), jr.exports;
}
var Dr = { exports: {} }, me = {};
var B0;
function vp() {
  if (B0) return me;
  B0 = 1;
  var f = Xr();
  function c(U) {
    var y = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        y += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + U + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var r = {
    d: {
      f: d,
      r: function() {
        throw Error(c(522));
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
  }, p = /* @__PURE__ */ Symbol.for("react.portal");
  function E(U, y, H) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: p,
      key: B == null ? null : "" + B,
      children: U,
      containerInfo: y,
      implementation: H
    };
  }
  var T = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function L(U, y) {
    if (U === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, me.createPortal = function(U, y) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(c(299));
    return E(U, y, null, H);
  }, me.flushSync = function(U) {
    var y = T.T, H = r.p;
    try {
      if (T.T = null, r.p = 2, U) return U();
    } finally {
      T.T = y, r.p = H, r.d.f();
    }
  }, me.preconnect = function(U, y) {
    typeof U == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(U, y));
  }, me.prefetchDNS = function(U) {
    typeof U == "string" && r.d.D(U);
  }, me.preinit = function(U, y) {
    if (typeof U == "string" && y && typeof y.as == "string") {
      var H = y.as, B = L(H, y.crossOrigin), G = typeof y.integrity == "string" ? y.integrity : void 0, $ = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      H === "style" ? r.d.S(
        U,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: B,
          integrity: G,
          fetchPriority: $
        }
      ) : H === "script" && r.d.X(U, {
        crossOrigin: B,
        integrity: G,
        fetchPriority: $,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, me.preinitModule = function(U, y) {
    if (typeof U == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var H = L(
            y.as,
            y.crossOrigin
          );
          r.d.M(U, {
            crossOrigin: H,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(U);
  }, me.preload = function(U, y) {
    if (typeof U == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var H = y.as, B = L(H, y.crossOrigin);
      r.d.L(U, H, {
        crossOrigin: B,
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
        var H = L(y.as, y.crossOrigin);
        r.d.m(U, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: H,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(U);
  }, me.requestFormReset = function(U) {
    r.d.r(U);
  }, me.unstable_batchedUpdates = function(U, y) {
    return U(y);
  }, me.useFormState = function(U, y, H) {
    return T.H.useFormState(U, y, H);
  }, me.useFormStatus = function() {
    return T.H.useHostTransitionStatus();
  }, me.version = "19.2.8", me;
}
var k0;
function gp() {
  if (k0) return Dr.exports;
  k0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (c) {
        console.error(c);
      }
  }
  return f(), Dr.exports = vp(), Dr.exports;
}
var Y0;
function yp() {
  if (Y0) return Li;
  Y0 = 1;
  var f = pp(), c = Xr(), d = gp();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p(t) {
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
  function L(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function U(t) {
    if (E(t) !== t)
      throw Error(r(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = E(t), e === null) throw Error(r(188));
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
        throw Error(r(188));
      }
      if (a.return !== l.return) a = n, l = i;
      else {
        for (var u = !1, s = n.child; s; ) {
          if (s === a) {
            u = !0, a = n, l = i;
            break;
          }
          if (s === l) {
            u = !0, l = n, a = i;
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = i.child; s; ) {
            if (s === a) {
              u = !0, a = i, l = n;
              break;
            }
            if (s === l) {
              u = !0, l = i, a = n;
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function H(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = H(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var B = Object.assign, G = /* @__PURE__ */ Symbol.for("react.element"), $ = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), P = /* @__PURE__ */ Symbol.for("react.strict_mode"), at = /* @__PURE__ */ Symbol.for("react.profiler"), gt = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), pt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Et = /* @__PURE__ */ Symbol.for("react.suspense"), Yt = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), rt = /* @__PURE__ */ Symbol.for("react.lazy"), wt = /* @__PURE__ */ Symbol.for("react.activity"), le = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Xt = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object" ? null : (t = Xt && t[Xt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var At = /* @__PURE__ */ Symbol.for("react.client.reference");
  function qt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === At ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case k:
        return "Fragment";
      case at:
        return "Profiler";
      case P:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Yt:
        return "SuspenseList";
      case wt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return "Portal";
        case F:
          return t.displayName || "Context";
        case gt:
          return (t._context.displayName || "Context") + ".Consumer";
        case pt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case tt:
          return e = t.displayName || null, e !== null ? e : qt(t.type) || "Memo";
        case rt:
          e = t._payload, t = t._init;
          try {
            return qt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Ht = Array.isArray, M = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, it = [], R = -1;
  function h(t) {
    return { current: t };
  }
  function A(t) {
    0 > R || (t.current = it[R], it[R] = null, R--);
  }
  function w(t, e) {
    R++, it[R] = t.current, t.current = e;
  }
  var Y = h(null), X = h(null), J = h(null), et = h(null);
  function dt(t, e) {
    switch (w(J, e), w(X, t), w(Y, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? $d(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = $d(e), t = t0(e, t);
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
    A(Y), w(Y, t);
  }
  function bt() {
    A(Y), A(X), A(J);
  }
  function ve(t) {
    t.memoizedState !== null && w(et, t);
    var e = Y.current, a = t0(e, t.type);
    e !== a && (w(X, t), w(Y, a));
  }
  function de(t) {
    X.current === t && (A(Y), A(X)), et.current === t && (A(et), qi._currentValue = W);
  }
  var Ra, xl;
  function Re(t) {
    if (Ra === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        Ra = e && e[1] || "", xl = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ra + t + xl;
  }
  var Ln = !1;
  function Sl(t, e) {
    if (!t || Ln) return "";
    Ln = !0;
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
                } catch (z) {
                  var S = z;
                }
                Reflect.construct(t, [], O);
              } else {
                try {
                  O.call();
                } catch (z) {
                  S = z;
                }
                t.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                S = z;
              }
              (O = t()) && typeof O.catch == "function" && O.catch(function() {
              });
            }
          } catch (z) {
            if (z && S && typeof z.stack == "string")
              return [z.stack, S.stack];
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
      var i = l.DetermineComponentFrameRoot(), u = i[0], s = i[1];
      if (u && s) {
        var m = u.split(`
`), x = s.split(`
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
      Ln = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Re(a) : "";
  }
  function Sc(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Re(t.type);
      case 16:
        return Re("Lazy");
      case 13:
        return t.child !== e && e !== null ? Re("Suspense Fallback") : Re("Suspense");
      case 19:
        return Re("SuspenseList");
      case 0:
      case 15:
        return Sl(t.type, !1);
      case 11:
        return Sl(t.type.render, !1);
      case 1:
        return Sl(t.type, !0);
      case 31:
        return Re("Activity");
      default:
        return "";
    }
  }
  function Ki(t) {
    try {
      var e = "", a = null;
      do
        e += Sc(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Hn = Object.prototype.hasOwnProperty, Jl = f.unstable_scheduleCallback, Vn = f.unstable_cancelCallback, Gn = f.unstable_shouldYield, Zn = f.unstable_requestPaint, ne = f.unstable_now, Ba = f.unstable_getCurrentPriorityLevel, Ql = f.unstable_ImmediatePriority, Kn = f.unstable_UserBlockingPriority, ka = f.unstable_NormalPriority, Xn = f.unstable_LowPriority, ha = f.unstable_IdlePriority, Wl = f.log, Jn = f.unstable_setDisableYieldValue, ie = null, Jt = null;
  function xe(t) {
    if (typeof Wl == "function" && Jn(t), Jt && typeof Jt.setStrictMode == "function")
      try {
        Jt.setStrictMode(ie, t);
      } catch {
      }
  }
  var ee = Math.clz32 ? Math.clz32 : El, Ie = Math.log, Xi = Math.LN2;
  function El(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ie(t) / Xi | 0) | 0;
  }
  var Pe = 256, _e = 262144, ue = 4194304;
  function Be(t) {
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
    var s = l & 134217727;
    return s !== 0 ? (l = s & ~i, l !== 0 ? n = Be(l) : (u &= s, u !== 0 ? n = Be(u) : a || (a = s & ~t, a !== 0 && (n = Be(a))))) : (s = l & ~i, s !== 0 ? n = Be(s) : u !== 0 ? n = Be(u) : a || (a = l & ~t, a !== 0 && (n = Be(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, a = e & -e, i >= a || i === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function Ya(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ke(t, e) {
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
  function Al() {
    var t = ue;
    return ue <<= 1, (ue & 62914560) === 0 && (ue = 4194304), t;
  }
  function Fl(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function La(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Il(t, e, a, l, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var s = t.entanglements, m = t.expirationTimes, x = t.hiddenUpdates;
    for (a = u & ~a; 0 < a; ) {
      var N = 31 - ee(a), O = 1 << N;
      s[N] = 0, m[N] = -1;
      var S = x[N];
      if (S !== null)
        for (x[N] = null, N = 0; N < S.length; N++) {
          var z = S[N];
          z !== null && (z.lane &= -536870913);
        }
      a &= ~O;
    }
    l !== 0 && Qn(t, l, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e));
  }
  function Qn(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - ee(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function Pl(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - ee(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function Ji(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : Wn(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function Wn(t) {
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
  function zl(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qi() {
    var t = q.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : A0(t.type));
  }
  function Wi(t, e) {
    var a = q.p;
    try {
      return q.p = t, e();
    } finally {
      q.p = a;
    }
  }
  var Nt = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + Nt, he = "__reactProps$" + Nt, Ha = "__reactContainer$" + Nt, Va = "__reactEvents$" + Nt, _l = "__reactListeners$" + Nt, Ec = "__reactHandles$" + Nt, Fi = "__reactResources$" + Nt, ia = "__reactMarker$" + Nt;
  function Ga(t) {
    delete t[Qt], delete t[he], delete t[Va], delete t[_l], delete t[Ec];
  }
  function ua(t) {
    var e = t[Qt];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Ha] || a[Qt]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = c0(t); t !== null; ) {
            if (a = t[Qt]) return a;
            t = c0(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Za(t) {
    if (t = t[Qt] || t[Ha]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Tl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Ka(t) {
    var e = t[Fi];
    return e || (e = t[Fi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function $t(t) {
    t[ia] = !0;
  }
  var Ii = /* @__PURE__ */ new Set(), Pi = {};
  function ma(t, e) {
    pa(t, e), pa(t + "Capture", e);
  }
  function pa(t, e) {
    for (Pi[t] = e, t = 0; t < e.length; t++)
      Ii.add(e[t]);
  }
  var _i = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), $i = {}, $l = {};
  function D(t) {
    return Hn.call($l, t) ? !0 : Hn.call($i, t) ? !1 : _i.test(t) ? $l[t] = !0 : ($i[t] = !0, !1);
  }
  function Z(t, e, a) {
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
  function lt(t, e, a) {
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
  function yt(t, e, a, l) {
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
  function Rt(t) {
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
  function Ye(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Le(t, e, a) {
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
      var e = Ye(t) ? "checked" : "value";
      t._valueTracker = Le(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function tn(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), l = "";
    return t && (l = Ye(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1;
  }
  function va(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Fn = /[\n"\\]/g;
  function Wt(t) {
    return t.replace(
      Fn,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ge(t, e, a, l, n, i, u, s) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), e != null ? u === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Rt(e)) : t.value !== "" + Rt(e) && (t.value = "" + Rt(e)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), e != null ? Ml(t, u, Rt(e)) : a != null ? Ml(t, u, Rt(a)) : l != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + Rt(s) : t.removeAttribute("name");
  }
  function Xa(t, e, a, l, n, i, u, s) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        ta(t);
        return;
      }
      a = a != null ? "" + Rt(a) : "", e = e != null ? "" + Rt(e) : a, s || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = s ? t.checked : !!l, t.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), ta(t);
  }
  function Ml(t, e, a) {
    e === "number" && va(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function ca(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++)
        e["$" + a[n]] = !0;
      for (a = 0; a < t.length; a++)
        n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Rt(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = !0, l && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function en(t, e, a) {
    if (e != null && (e = "" + Rt(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Rt(a) : "";
  }
  function ce(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (Ht(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = Rt(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), ta(t);
  }
  function ea(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Ja = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ga(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || Ja.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function Qa(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var n in e)
        l = e[n], e.hasOwnProperty(n) && a[n] !== l && ga(t, n, l);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && ga(t, i, e[i]);
  }
  function In(t) {
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
  var Nl = /* @__PURE__ */ new Map([
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
  ]), Ac = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function tu(t) {
    return Ac.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ya() {
  }
  var zc = null;
  function Tc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var an = null, ln = null;
  function Ir(t) {
    var e = Za(t);
    if (e && (t = e.stateNode)) {
      var a = t[he] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ge(
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
                if (!n) throw Error(r(90));
                ge(
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
              l = a[e], l.form === t.form && tn(l);
          }
          break t;
        case "textarea":
          en(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && ca(t, !!a.multiple, e, !1);
      }
    }
  }
  var Mc = !1;
  function Pr(t, e, a) {
    if (Mc) return t(e, a);
    Mc = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Mc = !1, (an !== null || ln !== null) && (Vu(), an && (e = an, t = ln, ln = an = null, Ir(e), t)))
        for (e = 0; e < t.length; e++) Ir(t[e]);
    }
  }
  function Pn(t, e) {
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
        r(231, e, typeof a)
      );
    return a;
  }
  var ba = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nc = !1;
  if (ba)
    try {
      var _n = {};
      Object.defineProperty(_n, "passive", {
        get: function() {
          Nc = !0;
        }
      }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
    } catch {
      Nc = !1;
    }
  var Wa = null, Uc = null, eu = null;
  function _r() {
    if (eu) return eu;
    var t, e = Uc, a = e.length, l, n = "value" in Wa ? Wa.value : Wa.textContent, i = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var u = a - t;
    for (l = 1; l <= u && e[a - l] === n[i - l]; l++) ;
    return eu = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function au(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function lu() {
    return !0;
  }
  function $r() {
    return !1;
  }
  function Se(t) {
    function e(a, l, n, i, u) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (a = t[s], this[s] = a ? a(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? lu : $r, this.isPropagationStopped = $r, this;
    }
    return B(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = lu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = lu);
      },
      persist: function() {
      },
      isPersistent: lu
    }), e;
  }
  var Ul = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, nu = Se(Ul), $n = B({}, Ul, { view: 0, detail: 0 }), rh = Se($n), Cc, jc, ti, iu = B({}, $n, {
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
    getModifierState: Dc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ti && (ti && t.type === "mousemove" ? (Cc = t.screenX - ti.screenX, jc = t.screenY - ti.screenY) : jc = Cc = 0, ti = t), Cc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : jc;
    }
  }), tf = Se(iu), fh = B({}, iu, { dataTransfer: 0 }), oh = Se(fh), dh = B({}, $n, { relatedTarget: 0 }), Oc = Se(dh), hh = B({}, Ul, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mh = Se(hh), ph = B({}, Ul, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), vh = Se(ph), gh = B({}, Ul, { data: 0 }), ef = Se(gh), yh = {
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
  function Dc() {
    return Sh;
  }
  var Eh = B({}, $n, {
    key: function(t) {
      if (t.key) {
        var e = yh[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = au(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dc,
    charCode: function(t) {
      return t.type === "keypress" ? au(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? au(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Ah = Se(Eh), zh = B({}, iu, {
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
  }), af = Se(zh), Th = B({}, $n, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dc
  }), Mh = Se(Th), Nh = B({}, Ul, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uh = Se(Nh), Ch = B({}, iu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jh = Se(Ch), Oh = B({}, Ul, {
    newState: 0,
    oldState: 0
  }), Dh = Se(Oh), wh = [9, 13, 27, 32], wc = ba && "CompositionEvent" in window, ei = null;
  ba && "documentMode" in document && (ei = document.documentMode);
  var qh = ba && "TextEvent" in window && !ei, lf = ba && (!wc || ei && 8 < ei && 11 >= ei), nf = " ", uf = !1;
  function cf(t, e) {
    switch (t) {
      case "keyup":
        return wh.indexOf(e.keyCode) !== -1;
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
  function sf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var nn = !1;
  function Rh(t, e) {
    switch (t) {
      case "compositionend":
        return sf(e);
      case "keypress":
        return e.which !== 32 ? null : (uf = !0, nf);
      case "textInput":
        return t = e.data, t === nf && uf ? null : t;
      default:
        return null;
    }
  }
  function Bh(t, e) {
    if (nn)
      return t === "compositionend" || !wc && cf(t, e) ? (t = _r(), eu = Uc = Wa = null, nn = !1, t) : null;
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
        return lf && e.locale !== "ko" ? null : e.data;
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
  function rf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!kh[t.type] : e === "textarea";
  }
  function ff(t, e, a, l) {
    an ? ln ? ln.push(l) : ln = [l] : an = l, e = Wu(e, "onChange"), 0 < e.length && (a = new nu(
      "onChange",
      "change",
      null,
      a,
      l
    ), t.push({ event: a, listeners: e }));
  }
  var ai = null, li = null;
  function Yh(t) {
    Qd(t, 0);
  }
  function uu(t) {
    var e = Tl(t);
    if (tn(e)) return t;
  }
  function of(t, e) {
    if (t === "change") return e;
  }
  var df = !1;
  if (ba) {
    var qc;
    if (ba) {
      var Rc = "oninput" in document;
      if (!Rc) {
        var hf = document.createElement("div");
        hf.setAttribute("oninput", "return;"), Rc = typeof hf.oninput == "function";
      }
      qc = Rc;
    } else qc = !1;
    df = qc && (!document.documentMode || 9 < document.documentMode);
  }
  function mf() {
    ai && (ai.detachEvent("onpropertychange", pf), li = ai = null);
  }
  function pf(t) {
    if (t.propertyName === "value" && uu(li)) {
      var e = [];
      ff(
        e,
        li,
        t,
        Tc(t)
      ), Pr(Yh, e);
    }
  }
  function Lh(t, e, a) {
    t === "focusin" ? (mf(), ai = e, li = a, ai.attachEvent("onpropertychange", pf)) : t === "focusout" && mf();
  }
  function Hh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return uu(li);
  }
  function Vh(t, e) {
    if (t === "click") return uu(e);
  }
  function Gh(t, e) {
    if (t === "input" || t === "change")
      return uu(e);
  }
  function Zh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ne = typeof Object.is == "function" ? Object.is : Zh;
  function ni(t, e) {
    if (Ne(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Hn.call(e, n) || !Ne(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function vf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function gf(t, e) {
    var a = vf(t);
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
      a = vf(a);
    }
  }
  function yf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? yf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function bf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = va(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = va(t.document);
    }
    return e;
  }
  function Bc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Kh = ba && "documentMode" in document && 11 >= document.documentMode, un = null, kc = null, ii = null, Yc = !1;
  function xf(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Yc || un == null || un !== va(l) || (l = un, "selectionStart" in l && Bc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ii && ni(ii, l) || (ii = l, l = Wu(kc, "onSelect"), 0 < l.length && (e = new nu(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }), e.target = un)));
  }
  function Cl(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var cn = {
    animationend: Cl("Animation", "AnimationEnd"),
    animationiteration: Cl("Animation", "AnimationIteration"),
    animationstart: Cl("Animation", "AnimationStart"),
    transitionrun: Cl("Transition", "TransitionRun"),
    transitionstart: Cl("Transition", "TransitionStart"),
    transitioncancel: Cl("Transition", "TransitionCancel"),
    transitionend: Cl("Transition", "TransitionEnd")
  }, Lc = {}, Sf = {};
  ba && (Sf = document.createElement("div").style, "AnimationEvent" in window || (delete cn.animationend.animation, delete cn.animationiteration.animation, delete cn.animationstart.animation), "TransitionEvent" in window || delete cn.transitionend.transition);
  function jl(t) {
    if (Lc[t]) return Lc[t];
    if (!cn[t]) return t;
    var e = cn[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in Sf)
        return Lc[t] = e[a];
    return t;
  }
  var Ef = jl("animationend"), Af = jl("animationiteration"), zf = jl("animationstart"), Xh = jl("transitionrun"), Jh = jl("transitionstart"), Qh = jl("transitioncancel"), Tf = jl("transitionend"), Mf = /* @__PURE__ */ new Map(), Hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hc.push("scrollEnd");
  function aa(t, e) {
    Mf.set(t, e), ma(e, [t]);
  }
  var cu = typeof reportError == "function" ? reportError : function(t) {
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
  }, He = [], sn = 0, Vc = 0;
  function su() {
    for (var t = sn, e = Vc = sn = 0; e < t; ) {
      var a = He[e];
      He[e++] = null;
      var l = He[e];
      He[e++] = null;
      var n = He[e];
      He[e++] = null;
      var i = He[e];
      if (He[e++] = null, l !== null && n !== null) {
        var u = l.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
      }
      i !== 0 && Nf(a, n, i);
    }
  }
  function ru(t, e, a, l) {
    He[sn++] = t, He[sn++] = e, He[sn++] = a, He[sn++] = l, Vc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function Gc(t, e, a, l) {
    return ru(t, e, a, l), fu(t);
  }
  function Ol(t, e) {
    return ru(t, null, null, e), fu(t);
  }
  function Nf(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - ee(a), t = i.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), i) : null;
  }
  function fu(t) {
    if (50 < Ni)
      throw Ni = 0, Ps = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var rn = {};
  function Wh(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ue(t, e, a, l) {
    return new Wh(t, e, a, l);
  }
  function Zc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function xa(t, e) {
    var a = t.alternate;
    return a === null ? (a = Ue(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function Uf(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ou(t, e, a, l, n, i) {
    var u = 0;
    if (l = t, typeof t == "function") Zc(t) && (u = 1);
    else if (typeof t == "string")
      u = $m(
        t,
        a,
        Y.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case wt:
          return t = Ue(31, a, e, n), t.elementType = wt, t.lanes = i, t;
        case k:
          return Dl(a.children, n, i, e);
        case P:
          u = 8, n |= 24;
          break;
        case at:
          return t = Ue(12, a, e, n | 2), t.elementType = at, t.lanes = i, t;
        case Et:
          return t = Ue(13, a, e, n), t.elementType = Et, t.lanes = i, t;
        case Yt:
          return t = Ue(19, a, e, n), t.elementType = Yt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case F:
                u = 10;
                break t;
              case gt:
                u = 9;
                break t;
              case pt:
                u = 11;
                break t;
              case tt:
                u = 14;
                break t;
              case rt:
                u = 16, l = null;
                break t;
            }
          u = 29, a = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Ue(u, a, e, n), e.elementType = t, e.type = l, e.lanes = i, e;
  }
  function Dl(t, e, a, l) {
    return t = Ue(7, t, l, e), t.lanes = a, t;
  }
  function Kc(t, e, a) {
    return t = Ue(6, t, null, e), t.lanes = a, t;
  }
  function Cf(t) {
    var e = Ue(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Xc(t, e, a) {
    return e = Ue(
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
  var jf = /* @__PURE__ */ new WeakMap();
  function Ve(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = jf.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: Ki(e)
      }, jf.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Ki(e)
    };
  }
  var fn = [], on = 0, du = null, ui = 0, Ge = [], Ze = 0, Fa = null, sa = 1, ra = "";
  function Sa(t, e) {
    fn[on++] = ui, fn[on++] = du, du = t, ui = e;
  }
  function Of(t, e, a) {
    Ge[Ze++] = sa, Ge[Ze++] = ra, Ge[Ze++] = Fa, Fa = t;
    var l = sa;
    t = ra;
    var n = 32 - ee(l) - 1;
    l &= ~(1 << n), a += 1;
    var i = 32 - ee(e) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (l & (1 << u) - 1).toString(32), l >>= u, n -= u, sa = 1 << 32 - ee(e) + n | a << n | l, ra = i + t;
    } else
      sa = 1 << i | a << n | l, ra = t;
  }
  function Jc(t) {
    t.return !== null && (Sa(t, 1), Of(t, 1, 0));
  }
  function Qc(t) {
    for (; t === du; )
      du = fn[--on], fn[on] = null, ui = fn[--on], fn[on] = null;
    for (; t === Fa; )
      Fa = Ge[--Ze], Ge[Ze] = null, ra = Ge[--Ze], Ge[Ze] = null, sa = Ge[--Ze], Ge[Ze] = null;
  }
  function Df(t, e) {
    Ge[Ze++] = sa, Ge[Ze++] = ra, Ge[Ze++] = Fa, sa = e.id, ra = e.overflow, Fa = t;
  }
  var se = null, Bt = null, vt = !1, Ia = null, Ke = !1, Wc = Error(r(519));
  function Pa(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ci(Ve(e, t)), Wc;
  }
  function wf(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[Qt] = t, e[he] = l, a) {
      case "dialog":
        ot("cancel", e), ot("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ot("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ci.length; a++)
          ot(Ci[a], e);
        break;
      case "source":
        ot("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ot("error", e), ot("load", e);
        break;
      case "details":
        ot("toggle", e);
        break;
      case "input":
        ot("invalid", e), Xa(
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
        ot("invalid", e);
        break;
      case "textarea":
        ot("invalid", e), ce(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || Pd(e.textContent, a) ? (l.popover != null && (ot("beforetoggle", e), ot("toggle", e)), l.onScroll != null && ot("scroll", e), l.onScrollEnd != null && ot("scrollend", e), l.onClick != null && (e.onclick = ya), e = !0) : e = !1, e || Pa(t, !0);
  }
  function qf(t) {
    for (se = t.return; se; )
      switch (se.tag) {
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
          se = se.return;
      }
  }
  function dn(t) {
    if (t !== se) return !1;
    if (!vt) return qf(t), vt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || dr(t.type, t.memoizedProps)), a = !a), a && Bt && Pa(t), qf(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Bt = u0(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Bt = u0(t);
    } else
      e === 27 ? (e = Bt, ol(t.type) ? (t = gr, gr = null, Bt = t) : Bt = e) : Bt = se ? Je(t.stateNode.nextSibling) : null;
    return !0;
  }
  function wl() {
    Bt = se = null, vt = !1;
  }
  function Fc() {
    var t = Ia;
    return t !== null && (Te === null ? Te = t : Te.push.apply(
      Te,
      t
    ), Ia = null), t;
  }
  function ci(t) {
    Ia === null ? Ia = [t] : Ia.push(t);
  }
  var Ic = h(null), ql = null, Ea = null;
  function _a(t, e, a) {
    w(Ic, e._currentValue), e._currentValue = a;
  }
  function Aa(t) {
    t._currentValue = Ic.current, A(Ic);
  }
  function Pc(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function _c(t, e, a, l) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var s = i;
          i = n;
          for (var m = 0; m < e.length; m++)
            if (s.context === e[m]) {
              i.lanes |= a, s = i.alternate, s !== null && (s.lanes |= a), Pc(
                i.return,
                a,
                t
              ), l || (u = null);
              break t;
            }
          i = s.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(r(341));
        u.lanes |= a, i = u.alternate, i !== null && (i.lanes |= a), Pc(u, a, t), u = null;
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
  function hn(t, e, a, l) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(r(387));
        if (u = u.memoizedProps, u !== null) {
          var s = n.type;
          Ne(n.pendingProps.value, u.value) || (t !== null ? t.push(s) : t = [s]);
        }
      } else if (n === et.current) {
        if (u = n.alternate, u === null) throw Error(r(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(qi) : t = [qi]);
      }
      n = n.return;
    }
    t !== null && _c(
      e,
      t,
      a,
      l
    ), e.flags |= 262144;
  }
  function hu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ne(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Rl(t) {
    ql = t, Ea = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function re(t) {
    return Rf(ql, t);
  }
  function mu(t, e) {
    return ql === null && Rl(t), Rf(t, e);
  }
  function Rf(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, Ea === null) {
      if (t === null) throw Error(r(308));
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
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function $c() {
    return {
      controller: new Fh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function si(t) {
    t.refCount--, t.refCount === 0 && Ih(Ph, function() {
      t.controller.abort();
    });
  }
  var ri = null, ts = 0, mn = 0, pn = null;
  function _h(t, e) {
    if (ri === null) {
      var a = ri = [];
      ts = 0, mn = lr(), pn = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return ts++, e.then(Bf, Bf), e;
  }
  function Bf() {
    if (--ts === 0 && ri !== null) {
      pn !== null && (pn.status = "fulfilled");
      var t = ri;
      ri = null, mn = 0, pn = null;
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
  var kf = M.S;
  M.S = function(t, e) {
    Sd = ne(), typeof e == "object" && e !== null && typeof e.then == "function" && _h(t, e), kf !== null && kf(t, e);
  };
  var Bl = h(null);
  function es() {
    var t = Bl.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function pu(t, e) {
    e === null ? w(Bl, Bl.current) : w(Bl, e.pool);
  }
  function Yf() {
    var t = es();
    return t === null ? null : { parent: Ft._currentValue, pool: t };
  }
  var vn = Error(r(460)), as = Error(r(474)), vu = Error(r(542)), gu = { then: function() {
  } };
  function Lf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Hf(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(ya, ya), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Gf(t), t;
      default:
        if (typeof e.status == "string") e.then(ya, ya);
        else {
          if (t = Ot, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
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
            throw t = e.reason, Gf(t), t;
        }
        throw Yl = e, vn;
    }
  }
  function kl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Yl = a, vn) : a;
    }
  }
  var Yl = null;
  function Vf() {
    if (Yl === null) throw Error(r(459));
    var t = Yl;
    return Yl = null, t;
  }
  function Gf(t) {
    if (t === vn || t === vu)
      throw Error(r(483));
  }
  var gn = null, fi = 0;
  function yu(t) {
    var e = fi;
    return fi += 1, gn === null && (gn = []), Hf(gn, t, e);
  }
  function oi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function bu(t, e) {
    throw e.$$typeof === G ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Zf(t) {
    function e(g, v) {
      if (t) {
        var b = g.deletions;
        b === null ? (g.deletions = [v], g.flags |= 16) : b.push(v);
      }
    }
    function a(g, v) {
      if (!t) return null;
      for (; v !== null; )
        e(g, v), v = v.sibling;
      return null;
    }
    function l(g) {
      for (var v = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? v.set(g.key, g) : v.set(g.index, g), g = g.sibling;
      return v;
    }
    function n(g, v) {
      return g = xa(g, v), g.index = 0, g.sibling = null, g;
    }
    function i(g, v, b) {
      return g.index = b, t ? (b = g.alternate, b !== null ? (b = b.index, b < v ? (g.flags |= 67108866, v) : b) : (g.flags |= 67108866, v)) : (g.flags |= 1048576, v);
    }
    function u(g) {
      return t && g.alternate === null && (g.flags |= 67108866), g;
    }
    function s(g, v, b, j) {
      return v === null || v.tag !== 6 ? (v = Kc(b, g.mode, j), v.return = g, v) : (v = n(v, b), v.return = g, v);
    }
    function m(g, v, b, j) {
      var I = b.type;
      return I === k ? N(
        g,
        v,
        b.props.children,
        j,
        b.key
      ) : v !== null && (v.elementType === I || typeof I == "object" && I !== null && I.$$typeof === rt && kl(I) === v.type) ? (v = n(v, b.props), oi(v, b), v.return = g, v) : (v = ou(
        b.type,
        b.key,
        b.props,
        null,
        g.mode,
        j
      ), oi(v, b), v.return = g, v);
    }
    function x(g, v, b, j) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== b.containerInfo || v.stateNode.implementation !== b.implementation ? (v = Xc(b, g.mode, j), v.return = g, v) : (v = n(v, b.children || []), v.return = g, v);
    }
    function N(g, v, b, j, I) {
      return v === null || v.tag !== 7 ? (v = Dl(
        b,
        g.mode,
        j,
        I
      ), v.return = g, v) : (v = n(v, b), v.return = g, v);
    }
    function O(g, v, b) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = Kc(
          "" + v,
          g.mode,
          b
        ), v.return = g, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case $:
            return b = ou(
              v.type,
              v.key,
              v.props,
              null,
              g.mode,
              b
            ), oi(b, v), b.return = g, b;
          case V:
            return v = Xc(
              v,
              g.mode,
              b
            ), v.return = g, v;
          case rt:
            return v = kl(v), O(g, v, b);
        }
        if (Ht(v) || st(v))
          return v = Dl(
            v,
            g.mode,
            b,
            null
          ), v.return = g, v;
        if (typeof v.then == "function")
          return O(g, yu(v), b);
        if (v.$$typeof === F)
          return O(
            g,
            mu(g, v),
            b
          );
        bu(g, v);
      }
      return null;
    }
    function S(g, v, b, j) {
      var I = v !== null ? v.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return I !== null ? null : s(g, v, "" + b, j);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $:
            return b.key === I ? m(g, v, b, j) : null;
          case V:
            return b.key === I ? x(g, v, b, j) : null;
          case rt:
            return b = kl(b), S(g, v, b, j);
        }
        if (Ht(b) || st(b))
          return I !== null ? null : N(g, v, b, j, null);
        if (typeof b.then == "function")
          return S(
            g,
            v,
            yu(b),
            j
          );
        if (b.$$typeof === F)
          return S(
            g,
            v,
            mu(g, b),
            j
          );
        bu(g, b);
      }
      return null;
    }
    function z(g, v, b, j, I) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return g = g.get(b) || null, s(v, g, "" + j, I);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case $:
            return g = g.get(
              j.key === null ? b : j.key
            ) || null, m(v, g, j, I);
          case V:
            return g = g.get(
              j.key === null ? b : j.key
            ) || null, x(v, g, j, I);
          case rt:
            return j = kl(j), z(
              g,
              v,
              b,
              j,
              I
            );
        }
        if (Ht(j) || st(j))
          return g = g.get(b) || null, N(v, g, j, I, null);
        if (typeof j.then == "function")
          return z(
            g,
            v,
            b,
            yu(j),
            I
          );
        if (j.$$typeof === F)
          return z(
            g,
            v,
            b,
            mu(v, j),
            I
          );
        bu(v, j);
      }
      return null;
    }
    function K(g, v, b, j) {
      for (var I = null, xt = null, Q = v, ct = v = 0, mt = null; Q !== null && ct < b.length; ct++) {
        Q.index > ct ? (mt = Q, Q = null) : mt = Q.sibling;
        var St = S(
          g,
          Q,
          b[ct],
          j
        );
        if (St === null) {
          Q === null && (Q = mt);
          break;
        }
        t && Q && St.alternate === null && e(g, Q), v = i(St, v, ct), xt === null ? I = St : xt.sibling = St, xt = St, Q = mt;
      }
      if (ct === b.length)
        return a(g, Q), vt && Sa(g, ct), I;
      if (Q === null) {
        for (; ct < b.length; ct++)
          Q = O(g, b[ct], j), Q !== null && (v = i(
            Q,
            v,
            ct
          ), xt === null ? I = Q : xt.sibling = Q, xt = Q);
        return vt && Sa(g, ct), I;
      }
      for (Q = l(Q); ct < b.length; ct++)
        mt = z(
          Q,
          g,
          ct,
          b[ct],
          j
        ), mt !== null && (t && mt.alternate !== null && Q.delete(
          mt.key === null ? ct : mt.key
        ), v = i(
          mt,
          v,
          ct
        ), xt === null ? I = mt : xt.sibling = mt, xt = mt);
      return t && Q.forEach(function(vl) {
        return e(g, vl);
      }), vt && Sa(g, ct), I;
    }
    function _(g, v, b, j) {
      if (b == null) throw Error(r(151));
      for (var I = null, xt = null, Q = v, ct = v = 0, mt = null, St = b.next(); Q !== null && !St.done; ct++, St = b.next()) {
        Q.index > ct ? (mt = Q, Q = null) : mt = Q.sibling;
        var vl = S(g, Q, St.value, j);
        if (vl === null) {
          Q === null && (Q = mt);
          break;
        }
        t && Q && vl.alternate === null && e(g, Q), v = i(vl, v, ct), xt === null ? I = vl : xt.sibling = vl, xt = vl, Q = mt;
      }
      if (St.done)
        return a(g, Q), vt && Sa(g, ct), I;
      if (Q === null) {
        for (; !St.done; ct++, St = b.next())
          St = O(g, St.value, j), St !== null && (v = i(St, v, ct), xt === null ? I = St : xt.sibling = St, xt = St);
        return vt && Sa(g, ct), I;
      }
      for (Q = l(Q); !St.done; ct++, St = b.next())
        St = z(Q, g, ct, St.value, j), St !== null && (t && St.alternate !== null && Q.delete(St.key === null ? ct : St.key), v = i(St, v, ct), xt === null ? I = St : xt.sibling = St, xt = St);
      return t && Q.forEach(function(fp) {
        return e(g, fp);
      }), vt && Sa(g, ct), I;
    }
    function jt(g, v, b, j) {
      if (typeof b == "object" && b !== null && b.type === k && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $:
            t: {
              for (var I = b.key; v !== null; ) {
                if (v.key === I) {
                  if (I = b.type, I === k) {
                    if (v.tag === 7) {
                      a(
                        g,
                        v.sibling
                      ), j = n(
                        v,
                        b.props.children
                      ), j.return = g, g = j;
                      break t;
                    }
                  } else if (v.elementType === I || typeof I == "object" && I !== null && I.$$typeof === rt && kl(I) === v.type) {
                    a(
                      g,
                      v.sibling
                    ), j = n(v, b.props), oi(j, b), j.return = g, g = j;
                    break t;
                  }
                  a(g, v);
                  break;
                } else e(g, v);
                v = v.sibling;
              }
              b.type === k ? (j = Dl(
                b.props.children,
                g.mode,
                j,
                b.key
              ), j.return = g, g = j) : (j = ou(
                b.type,
                b.key,
                b.props,
                null,
                g.mode,
                j
              ), oi(j, b), j.return = g, g = j);
            }
            return u(g);
          case V:
            t: {
              for (I = b.key; v !== null; ) {
                if (v.key === I)
                  if (v.tag === 4 && v.stateNode.containerInfo === b.containerInfo && v.stateNode.implementation === b.implementation) {
                    a(
                      g,
                      v.sibling
                    ), j = n(v, b.children || []), j.return = g, g = j;
                    break t;
                  } else {
                    a(g, v);
                    break;
                  }
                else e(g, v);
                v = v.sibling;
              }
              j = Xc(b, g.mode, j), j.return = g, g = j;
            }
            return u(g);
          case rt:
            return b = kl(b), jt(
              g,
              v,
              b,
              j
            );
        }
        if (Ht(b))
          return K(
            g,
            v,
            b,
            j
          );
        if (st(b)) {
          if (I = st(b), typeof I != "function") throw Error(r(150));
          return b = I.call(b), _(
            g,
            v,
            b,
            j
          );
        }
        if (typeof b.then == "function")
          return jt(
            g,
            v,
            yu(b),
            j
          );
        if (b.$$typeof === F)
          return jt(
            g,
            v,
            mu(g, b),
            j
          );
        bu(g, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, v !== null && v.tag === 6 ? (a(g, v.sibling), j = n(v, b), j.return = g, g = j) : (a(g, v), j = Kc(b, g.mode, j), j.return = g, g = j), u(g)) : a(g, v);
    }
    return function(g, v, b, j) {
      try {
        fi = 0;
        var I = jt(
          g,
          v,
          b,
          j
        );
        return gn = null, I;
      } catch (Q) {
        if (Q === vn || Q === vu) throw Q;
        var xt = Ue(29, Q, null, g.mode);
        return xt.lanes = j, xt.return = g, xt;
      }
    };
  }
  var Ll = Zf(!0), Kf = Zf(!1), $a = !1;
  function ls(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ns(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function tl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function el(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (zt & 2) !== 0) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = fu(t), Nf(t, null, a), e;
    }
    return ru(t, l, e, a), fu(t);
  }
  function di(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, Pl(t, a);
    }
  }
  function is(t, e) {
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
  var us = !1;
  function hi() {
    if (us) {
      var t = pn;
      if (t !== null) throw t;
    }
  }
  function mi(t, e, a, l) {
    us = !1;
    var n = t.updateQueue;
    $a = !1;
    var i = n.firstBaseUpdate, u = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s, x = m.next;
      m.next = null, u === null ? i = x : u.next = x, u = m;
      var N = t.alternate;
      N !== null && (N = N.updateQueue, s = N.lastBaseUpdate, s !== u && (s === null ? N.firstBaseUpdate = x : s.next = x, N.lastBaseUpdate = m));
    }
    if (i !== null) {
      var O = n.baseState;
      u = 0, N = x = m = null, s = i;
      do {
        var S = s.lane & -536870913, z = S !== s.lane;
        if (z ? (ht & S) === S : (l & S) === S) {
          S !== 0 && S === mn && (us = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var K = t, _ = s;
            S = e;
            var jt = a;
            switch (_.tag) {
              case 1:
                if (K = _.payload, typeof K == "function") {
                  O = K.call(jt, O, S);
                  break t;
                }
                O = K;
                break t;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = _.payload, S = typeof K == "function" ? K.call(jt, O, S) : K, S == null) break t;
                O = B({}, O, S);
                break t;
              case 2:
                $a = !0;
            }
          }
          S = s.callback, S !== null && (t.flags |= 64, z && (t.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [S] : z.push(S));
        } else
          z = {
            lane: S,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, N === null ? (x = N = z, m = O) : N = N.next = z, u |= S;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          z = s, s = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
        }
      } while (!0);
      N === null && (m = O), n.baseState = m, n.firstBaseUpdate = x, n.lastBaseUpdate = N, i === null && (n.shared.lanes = 0), ul |= u, t.lanes = u, t.memoizedState = O;
    }
  }
  function Xf(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Jf(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        Xf(a[t], e);
  }
  var yn = h(null), xu = h(0);
  function Qf(t, e) {
    t = Da, w(xu, t), w(yn, e), Da = t | e.baseLanes;
  }
  function cs() {
    w(xu, Da), w(yn, yn.current);
  }
  function ss() {
    Da = xu.current, A(yn), A(xu);
  }
  var Ce = h(null), Xe = null;
  function al(t) {
    var e = t.alternate;
    w(Zt, Zt.current & 1), w(Ce, t), Xe === null && (e === null || yn.current !== null || e.memoizedState !== null) && (Xe = t);
  }
  function rs(t) {
    w(Zt, Zt.current), w(Ce, t), Xe === null && (Xe = t);
  }
  function Wf(t) {
    t.tag === 22 ? (w(Zt, Zt.current), w(Ce, t), Xe === null && (Xe = t)) : ll();
  }
  function ll() {
    w(Zt, Zt.current), w(Ce, Ce.current);
  }
  function je(t) {
    A(Ce), Xe === t && (Xe = null), A(Zt);
  }
  var Zt = h(0);
  function Su(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || pr(a) || vr(a)))
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
  var za = 0, ut = null, Ut = null, It = null, Eu = !1, bn = !1, Hl = !1, Au = 0, pi = 0, xn = null, tm = 0;
  function Vt() {
    throw Error(r(321));
  }
  function fs(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Ne(t[a], e[a])) return !1;
    return !0;
  }
  function os(t, e, a, l, n, i) {
    return za = i, ut = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? Do : Ms, Hl = !1, i = a(l, n), Hl = !1, bn && (i = If(
      e,
      a,
      l,
      n
    )), Ff(t), i;
  }
  function Ff(t) {
    M.H = yi;
    var e = Ut !== null && Ut.next !== null;
    if (za = 0, It = Ut = ut = null, Eu = !1, pi = 0, xn = null, e) throw Error(r(300));
    t === null || Pt || (t = t.dependencies, t !== null && hu(t) && (Pt = !0));
  }
  function If(t, e, a, l) {
    ut = t;
    var n = 0;
    do {
      if (bn && (xn = null), pi = 0, bn = !1, 25 <= n) throw Error(r(301));
      if (n += 1, It = Ut = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      M.H = wo, i = e(a, l);
    } while (bn);
    return i;
  }
  function em() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? vi(e) : e, t = t.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== t && (ut.flags |= 1024), e;
  }
  function ds() {
    var t = Au !== 0;
    return Au = 0, t;
  }
  function hs(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function ms(t) {
    if (Eu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Eu = !1;
    }
    za = 0, It = Ut = ut = null, bn = !1, pi = Au = 0, xn = null;
  }
  function ye() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? ut.memoizedState = It = t : It = It.next = t, It;
  }
  function Kt() {
    if (Ut === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ut.next;
    var e = It === null ? ut.memoizedState : It.next;
    if (e !== null)
      It = e, Ut = t;
    else {
      if (t === null)
        throw ut.alternate === null ? Error(r(467)) : Error(r(310));
      Ut = t, t = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null
      }, It === null ? ut.memoizedState = It = t : It = It.next = t;
    }
    return It;
  }
  function zu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function vi(t) {
    var e = pi;
    return pi += 1, xn === null && (xn = []), t = Hf(xn, t, e), e = ut, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? Do : Ms), t;
  }
  function Tu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return vi(t);
      if (t.$$typeof === F) return re(t);
    }
    throw Error(r(438, String(t)));
  }
  function ps(t) {
    var e = null, a = ut.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = ut.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = zu(), ut.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++)
        a[l] = le;
    return e.index++, a;
  }
  function Ta(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Mu(t) {
    var e = Kt();
    return vs(e, Ut, t);
  }
  function vs(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(r(311));
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
      var s = u = null, m = null, x = e, N = !1;
      do {
        var O = x.lane & -536870913;
        if (O !== x.lane ? (ht & O) === O : (za & O) === O) {
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
            }), O === mn && (N = !0);
          else if ((za & S) === S) {
            x = x.next, S === mn && (N = !0);
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
            }, m === null ? (s = m = O, u = i) : m = m.next = O, ut.lanes |= S, ul |= S;
          O = x.action, Hl && a(i, O), i = x.hasEagerState ? x.eagerState : a(i, O);
        } else
          S = {
            lane: O,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, m === null ? (s = m = S, u = i) : m = m.next = S, ut.lanes |= O, ul |= O;
        x = x.next;
      } while (x !== null && x !== e);
      if (m === null ? u = i : m.next = s, !Ne(i, t.memoizedState) && (Pt = !0, N && (a = pn, a !== null)))
        throw a;
      t.memoizedState = i, t.baseState = u, t.baseQueue = m, l.lastRenderedState = i;
    }
    return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function gs(t) {
    var e = Kt(), a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, i = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== n);
      Ne(i, e.memoizedState) || (Pt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), a.lastRenderedState = i;
    }
    return [i, l];
  }
  function Pf(t, e, a) {
    var l = ut, n = Kt(), i = vt;
    if (i) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var u = !Ne(
      (Ut || n).memoizedState,
      a
    );
    if (u && (n.memoizedState = a, Pt = !0), n = n.queue, xs(to.bind(null, l, n, t), [
      t
    ]), n.getSnapshot !== e || u || It !== null && It.memoizedState.tag & 1) {
      if (l.flags |= 2048, Sn(
        9,
        { destroy: void 0 },
        $f.bind(
          null,
          l,
          n,
          a,
          e
        ),
        null
      ), Ot === null) throw Error(r(349));
      i || (za & 127) !== 0 || _f(l, e, a);
    }
    return a;
  }
  function _f(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = ut.updateQueue, e === null ? (e = zu(), ut.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function $f(t, e, a, l) {
    e.value = a, e.getSnapshot = l, eo(e) && ao(t);
  }
  function to(t, e, a) {
    return a(function() {
      eo(e) && ao(t);
    });
  }
  function eo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Ne(t, a);
    } catch {
      return !0;
    }
  }
  function ao(t) {
    var e = Ol(t, 2);
    e !== null && Me(e, t, 2);
  }
  function ys(t) {
    var e = ye();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Hl) {
        xe(!0);
        try {
          a();
        } finally {
          xe(!1);
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
  function lo(t, e, a, l) {
    return t.baseState = a, vs(
      t,
      Ut,
      typeof l == "function" ? l : Ta
    );
  }
  function am(t, e, a, l, n) {
    if (Cu(t)) throw Error(r(485));
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
      M.T !== null ? a(!0) : i.isTransition = !1, l(i), a = e.pending, a === null ? (i.next = e.pending = i, no(e, i)) : (i.next = a.next, e.pending = a.next = i);
    }
  }
  function no(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var i = M.T, u = {};
      M.T = u;
      try {
        var s = a(n, l), m = M.S;
        m !== null && m(u, s), io(t, e, s);
      } catch (x) {
        bs(t, e, x);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), M.T = i;
      }
    } else
      try {
        i = a(n, l), io(t, e, i);
      } catch (x) {
        bs(t, e, x);
      }
  }
  function io(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        uo(t, e, l);
      },
      function(l) {
        return bs(t, e, l);
      }
    ) : uo(t, e, a);
  }
  function uo(t, e, a) {
    e.status = "fulfilled", e.value = a, co(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, no(t, a)));
  }
  function bs(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, co(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function co(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function so(t, e) {
    return e;
  }
  function ro(t, e) {
    if (vt) {
      var a = Ot.formState;
      if (a !== null) {
        t: {
          var l = ut;
          if (vt) {
            if (Bt) {
              e: {
                for (var n = Bt, i = Ke; n.nodeType !== 8; ) {
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
                Bt = Je(
                  n.nextSibling
                ), l = n.data === "F!";
                break t;
              }
            }
            Pa(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return a = ye(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e
    }, a.queue = l, a = Co.bind(
      null,
      ut,
      l
    ), l.dispatch = a, l = ys(!1), i = Ts.bind(
      null,
      ut,
      !1,
      l.queue
    ), l = ye(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = am.bind(
      null,
      ut,
      n,
      i,
      a
    ), n.dispatch = a, l.memoizedState = t, [e, a, !1];
  }
  function fo(t) {
    var e = Kt();
    return oo(e, Ut, t);
  }
  function oo(t, e, a) {
    if (e = vs(
      t,
      e,
      so
    )[0], t = Mu(Ta)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = vi(e);
      } catch (u) {
        throw u === vn ? vu : u;
      }
    else l = e;
    e = Kt();
    var n = e.queue, i = n.dispatch;
    return a !== e.memoizedState && (ut.flags |= 2048, Sn(
      9,
      { destroy: void 0 },
      lm.bind(null, n, a),
      null
    )), [l, i, t];
  }
  function lm(t, e) {
    t.action = e;
  }
  function ho(t) {
    var e = Kt(), a = Ut;
    if (a !== null)
      return oo(e, a, t);
    Kt(), e = e.memoizedState, a = Kt();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [e, l, !1];
  }
  function Sn(t, e, a, l) {
    return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = ut.updateQueue, e === null && (e = zu(), ut.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function mo() {
    return Kt().memoizedState;
  }
  function Nu(t, e, a, l) {
    var n = ye();
    ut.flags |= t, n.memoizedState = Sn(
      1 | e,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Uu(t, e, a, l) {
    var n = Kt();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    Ut !== null && l !== null && fs(l, Ut.memoizedState.deps) ? n.memoizedState = Sn(e, i, a, l) : (ut.flags |= t, n.memoizedState = Sn(
      1 | e,
      i,
      a,
      l
    ));
  }
  function po(t, e) {
    Nu(8390656, 8, t, e);
  }
  function xs(t, e) {
    Uu(2048, 8, t, e);
  }
  function nm(t) {
    ut.flags |= 4;
    var e = ut.updateQueue;
    if (e === null)
      e = zu(), ut.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function vo(t) {
    var e = Kt().memoizedState;
    return nm({ ref: e, nextImpl: t }), function() {
      if ((zt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function go(t, e) {
    return Uu(4, 2, t, e);
  }
  function yo(t, e) {
    return Uu(4, 4, t, e);
  }
  function bo(t, e) {
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
  function xo(t, e, a) {
    a = a != null ? a.concat([t]) : null, Uu(4, 4, bo.bind(null, e, t), a);
  }
  function Ss() {
  }
  function So(t, e) {
    var a = Kt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && fs(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
  }
  function Eo(t, e) {
    var a = Kt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && fs(e, l[1]))
      return l[0];
    if (l = t(), Hl) {
      xe(!0);
      try {
        t();
      } finally {
        xe(!1);
      }
    }
    return a.memoizedState = [l, e], l;
  }
  function Es(t, e, a) {
    return a === void 0 || (za & 1073741824) !== 0 && (ht & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Ad(), ut.lanes |= t, ul |= t, a);
  }
  function Ao(t, e, a, l) {
    return Ne(a, e) ? a : yn.current !== null ? (t = Es(t, a, l), Ne(t, e) || (Pt = !0), t) : (za & 42) === 0 || (za & 1073741824) !== 0 && (ht & 261930) === 0 ? (Pt = !0, t.memoizedState = a) : (t = Ad(), ut.lanes |= t, ul |= t, e);
  }
  function zo(t, e, a, l, n) {
    var i = q.p;
    q.p = i !== 0 && 8 > i ? i : 8;
    var u = M.T, s = {};
    M.T = s, Ts(t, !1, e, a);
    try {
      var m = n(), x = M.S;
      if (x !== null && x(s, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var N = $h(
          m,
          l
        );
        gi(
          t,
          e,
          N,
          we(t)
        );
      } else
        gi(
          t,
          e,
          l,
          we(t)
        );
    } catch (O) {
      gi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: O },
        we()
      );
    } finally {
      q.p = i, u !== null && s.types !== null && (u.types = s.types), M.T = u;
    }
  }
  function im() {
  }
  function As(t, e, a, l) {
    if (t.tag !== 5) throw Error(r(476));
    var n = To(t).queue;
    zo(
      t,
      n,
      e,
      W,
      a === null ? im : function() {
        return Mo(t), a(l);
      }
    );
  }
  function To(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ta,
        lastRenderedState: W
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
  function Mo(t) {
    var e = To(t);
    e.next === null && (e = t.alternate.memoizedState), gi(
      t,
      e.next.queue,
      {},
      we()
    );
  }
  function zs() {
    return re(qi);
  }
  function No() {
    return Kt().memoizedState;
  }
  function Uo() {
    return Kt().memoizedState;
  }
  function um(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = we();
          t = tl(a);
          var l = el(e, t, a);
          l !== null && (Me(l, e, a), di(l, e, a)), e = { cache: $c() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function cm(t, e, a) {
    var l = we();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cu(t) ? jo(e, a) : (a = Gc(t, e, a, l), a !== null && (Me(a, t, l), Oo(a, e, l)));
  }
  function Co(t, e, a) {
    var l = we();
    gi(t, e, a, l);
  }
  function gi(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cu(t)) jo(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var u = e.lastRenderedState, s = i(u, a);
          if (n.hasEagerState = !0, n.eagerState = s, Ne(s, u))
            return ru(t, e, n, 0), Ot === null && su(), !1;
        } catch {
        }
      if (a = Gc(t, e, n, l), a !== null)
        return Me(a, t, l), Oo(a, e, l), !0;
    }
    return !1;
  }
  function Ts(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: lr(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cu(t)) {
      if (e) throw Error(r(479));
    } else
      e = Gc(
        t,
        a,
        l,
        2
      ), e !== null && Me(e, t, 2);
  }
  function Cu(t) {
    var e = t.alternate;
    return t === ut || e !== null && e === ut;
  }
  function jo(t, e) {
    bn = Eu = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function Oo(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, Pl(t, a);
    }
  }
  var yi = {
    readContext: re,
    use: Tu,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    useHostTransitionStatus: Vt,
    useFormState: Vt,
    useActionState: Vt,
    useOptimistic: Vt,
    useMemoCache: Vt,
    useCacheRefresh: Vt
  };
  yi.useEffectEvent = Vt;
  var Do = {
    readContext: re,
    use: Tu,
    useCallback: function(t, e) {
      return ye().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: re,
    useEffect: po,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Nu(
        4194308,
        4,
        bo.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return Nu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Nu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = ye();
      e = e === void 0 ? null : e;
      var l = t();
      if (Hl) {
        xe(!0);
        try {
          t();
        } finally {
          xe(!1);
        }
      }
      return a.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, a) {
      var l = ye();
      if (a !== void 0) {
        var n = a(e);
        if (Hl) {
          xe(!0);
          try {
            a(e);
          } finally {
            xe(!1);
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
        ut,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = ye();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = ys(t);
      var e = t.queue, a = Co.bind(null, ut, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: Ss,
    useDeferredValue: function(t, e) {
      var a = ye();
      return Es(a, t, e);
    },
    useTransition: function() {
      var t = ys(!1);
      return t = zo.bind(
        null,
        ut,
        t.queue,
        !0,
        !1
      ), ye().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = ut, n = ye();
      if (vt) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = e(), Ot === null)
          throw Error(r(349));
        (ht & 127) !== 0 || _f(l, e, a);
      }
      n.memoizedState = a;
      var i = { value: a, getSnapshot: e };
      return n.queue = i, po(to.bind(null, l, i, t), [
        t
      ]), l.flags |= 2048, Sn(
        9,
        { destroy: void 0 },
        $f.bind(
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
      var t = ye(), e = Ot.identifierPrefix;
      if (vt) {
        var a = ra, l = sa;
        a = (l & ~(1 << 32 - ee(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = Au++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = tm++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: zs,
    useFormState: ro,
    useActionState: ro,
    useOptimistic: function(t) {
      var e = ye();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Ts.bind(
        null,
        ut,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: ps,
    useCacheRefresh: function() {
      return ye().memoizedState = um.bind(
        null,
        ut
      );
    },
    useEffectEvent: function(t) {
      var e = ye(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((zt & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ms = {
    readContext: re,
    use: Tu,
    useCallback: So,
    useContext: re,
    useEffect: xs,
    useImperativeHandle: xo,
    useInsertionEffect: go,
    useLayoutEffect: yo,
    useMemo: Eo,
    useReducer: Mu,
    useRef: mo,
    useState: function() {
      return Mu(Ta);
    },
    useDebugValue: Ss,
    useDeferredValue: function(t, e) {
      var a = Kt();
      return Ao(
        a,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Mu(Ta)[0], e = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : vi(t),
        e
      ];
    },
    useSyncExternalStore: Pf,
    useId: No,
    useHostTransitionStatus: zs,
    useFormState: fo,
    useActionState: fo,
    useOptimistic: function(t, e) {
      var a = Kt();
      return lo(a, Ut, t, e);
    },
    useMemoCache: ps,
    useCacheRefresh: Uo
  };
  Ms.useEffectEvent = vo;
  var wo = {
    readContext: re,
    use: Tu,
    useCallback: So,
    useContext: re,
    useEffect: xs,
    useImperativeHandle: xo,
    useInsertionEffect: go,
    useLayoutEffect: yo,
    useMemo: Eo,
    useReducer: gs,
    useRef: mo,
    useState: function() {
      return gs(Ta);
    },
    useDebugValue: Ss,
    useDeferredValue: function(t, e) {
      var a = Kt();
      return Ut === null ? Es(a, t, e) : Ao(
        a,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = gs(Ta)[0], e = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : vi(t),
        e
      ];
    },
    useSyncExternalStore: Pf,
    useId: No,
    useHostTransitionStatus: zs,
    useFormState: ho,
    useActionState: ho,
    useOptimistic: function(t, e) {
      var a = Kt();
      return Ut !== null ? lo(a, Ut, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: ps,
    useCacheRefresh: Uo
  };
  wo.useEffectEvent = vo;
  function Ns(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : B({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Us = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = we(), n = tl(l);
      n.payload = e, a != null && (n.callback = a), e = el(t, n, l), e !== null && (Me(e, t, l), di(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = we(), n = tl(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = el(t, n, l), e !== null && (Me(e, t, l), di(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = we(), l = tl(a);
      l.tag = 2, e != null && (l.callback = e), e = el(t, l, a), e !== null && (Me(e, t, a), di(e, t, a));
    }
  };
  function qo(t, e, a, l, n, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, i, u) : e.prototype && e.prototype.isPureReactComponent ? !ni(a, l) || !ni(n, i) : !0;
  }
  function Ro(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && Us.enqueueReplaceState(e, e.state, null);
  }
  function Vl(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e)
        l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = B({}, a));
      for (var n in t)
        a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function Bo(t) {
    cu(t);
  }
  function ko(t) {
    console.error(t);
  }
  function Yo(t) {
    cu(t);
  }
  function ju(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Lo(t, e, a) {
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
  function Cs(t, e, a) {
    return a = tl(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      ju(t, e);
    }, a;
  }
  function Ho(t) {
    return t = tl(t), t.tag = 3, t;
  }
  function Vo(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        Lo(e, a, l);
      };
    }
    var u = a.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Lo(e, a, l), typeof n != "function" && (cl === null ? cl = /* @__PURE__ */ new Set([this]) : cl.add(this));
      var s = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function sm(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && hn(
        e,
        a,
        n,
        !0
      ), a = Ce.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Xe === null ? Gu() : a.alternate === null && Gt === 0 && (Gt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === gu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), tr(t, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === gu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), tr(t, l, n)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return tr(t, l, n), Gu(), !1;
    }
    if (vt)
      return e = Ce.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== Wc && (t = Error(r(422), { cause: l }), ci(Ve(t, a)))) : (l !== Wc && (e = Error(r(423), {
        cause: l
      }), ci(
        Ve(e, a)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = Ve(l, a), n = Cs(
        t.stateNode,
        l,
        n
      ), is(t, n), Gt !== 4 && (Gt = 2)), !1;
    var i = Error(r(520), { cause: l });
    if (i = Ve(i, a), Mi === null ? Mi = [i] : Mi.push(i), Gt !== 4 && (Gt = 2), e === null) return !0;
    l = Ve(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = Cs(a.stateNode, l, t), is(a, t), !1;
        case 1:
          if (e = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (cl === null || !cl.has(i))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = Ho(n), Vo(
              n,
              t,
              a,
              l
            ), is(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var js = Error(r(461)), Pt = !1;
  function fe(t, e, a, l) {
    e.child = t === null ? Kf(e, null, a, l) : Ll(
      e,
      t.child,
      a,
      l
    );
  }
  function Go(t, e, a, l, n) {
    a = a.render;
    var i = e.ref;
    if ("ref" in l) {
      var u = {};
      for (var s in l)
        s !== "ref" && (u[s] = l[s]);
    } else u = l;
    return Rl(e), l = os(
      t,
      e,
      a,
      u,
      i,
      n
    ), s = ds(), t !== null && !Pt ? (hs(t, e, n), Ma(t, e, n)) : (vt && s && Jc(e), e.flags |= 1, fe(t, e, l, n), e.child);
  }
  function Zo(t, e, a, l, n) {
    if (t === null) {
      var i = a.type;
      return typeof i == "function" && !Zc(i) && i.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = i, Ko(
        t,
        e,
        i,
        l,
        n
      )) : (t = ou(
        a.type,
        null,
        l,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !Ys(t, n)) {
      var u = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : ni, a(u, l) && t.ref === e.ref)
        return Ma(t, e, n);
    }
    return e.flags |= 1, t = xa(i, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ko(t, e, a, l, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (ni(i, l) && t.ref === e.ref)
        if (Pt = !1, e.pendingProps = l = i, Ys(t, n))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return e.lanes = t.lanes, Ma(t, e, n);
    }
    return Os(
      t,
      e,
      a,
      l,
      n
    );
  }
  function Xo(t, e, a, l) {
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
        return Jo(
          t,
          e,
          i,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && pu(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? Qf(e, i) : cs(), Wf(e);
      else
        return l = e.lanes = 536870912, Jo(
          t,
          e,
          i !== null ? i.baseLanes | a : a,
          a,
          l
        );
    } else
      i !== null ? (pu(e, i.cachePool), Qf(e, i), ll(), e.memoizedState = null) : (t !== null && pu(e, null), cs(), ll());
    return fe(t, e, n, a), e.child;
  }
  function bi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Jo(t, e, a, l, n) {
    var i = es();
    return i = i === null ? null : { parent: Ft._currentValue, pool: i }, e.memoizedState = {
      baseLanes: a,
      cachePool: i
    }, t !== null && pu(e, null), cs(), Wf(e), t !== null && hn(t, e, l, !0), e.childLanes = n, null;
  }
  function Ou(t, e) {
    return e = wu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Qo(t, e, a) {
    return Ll(e, t.child, null, a), t = Ou(e, e.pendingProps), t.flags |= 2, je(e), e.memoizedState = null, t;
  }
  function rm(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (vt) {
        if (l.mode === "hidden")
          return t = Ou(e, l), e.lanes = 536870912, bi(null, t);
        if (rs(e), (t = Bt) ? (t = i0(
          t,
          Ke
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Fa !== null ? { id: sa, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Cf(t), a.return = e, e.child = a, se = e, Bt = null)) : t = null, t === null) throw Pa(e);
        return e.lanes = 536870912, null;
      }
      return Ou(e, l);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (rs(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Qo(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Pt || hn(t, e, a, !1), n = (a & t.childLanes) !== 0, Pt || n) {
        if (l = Ot, l !== null && (u = Ji(l, a), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, Ol(t, u), Me(l, t, u), js;
        Gu(), e = Qo(
          t,
          e,
          a
        );
      } else
        t = i.treeContext, Bt = Je(u.nextSibling), se = e, vt = !0, Ia = null, Ke = !1, t !== null && Df(e, t), e = Ou(e, l), e.flags |= 4096;
      return e;
    }
    return t = xa(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Du(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Os(t, e, a, l, n) {
    return Rl(e), a = os(
      t,
      e,
      a,
      l,
      void 0,
      n
    ), l = ds(), t !== null && !Pt ? (hs(t, e, n), Ma(t, e, n)) : (vt && l && Jc(e), e.flags |= 1, fe(t, e, a, n), e.child);
  }
  function Wo(t, e, a, l, n, i) {
    return Rl(e), e.updateQueue = null, a = If(
      e,
      l,
      a,
      n
    ), Ff(t), l = ds(), t !== null && !Pt ? (hs(t, e, i), Ma(t, e, i)) : (vt && l && Jc(e), e.flags |= 1, fe(t, e, a, i), e.child);
  }
  function Fo(t, e, a, l, n) {
    if (Rl(e), e.stateNode === null) {
      var i = rn, u = a.contextType;
      typeof u == "object" && u !== null && (i = re(u)), i = new a(l, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Us, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = l, i.state = e.memoizedState, i.refs = {}, ls(e), u = a.contextType, i.context = typeof u == "object" && u !== null ? re(u) : rn, i.state = e.memoizedState, u = a.getDerivedStateFromProps, typeof u == "function" && (Ns(
        e,
        a,
        u,
        l
      ), i.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Us.enqueueReplaceState(i, i.state, null), mi(e, l, i, n), hi(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      i = e.stateNode;
      var s = e.memoizedProps, m = Vl(a, s);
      i.props = m;
      var x = i.context, N = a.contextType;
      u = rn, typeof N == "object" && N !== null && (u = re(N));
      var O = a.getDerivedStateFromProps;
      N = typeof O == "function" || typeof i.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || x !== u) && Ro(
        e,
        i,
        l,
        u
      ), $a = !1;
      var S = e.memoizedState;
      i.state = S, mi(e, l, i, n), hi(), x = e.memoizedState, s || S !== x || $a ? (typeof O == "function" && (Ns(
        e,
        a,
        O,
        l
      ), x = e.memoizedState), (m = $a || qo(
        e,
        a,
        m,
        l,
        S,
        x,
        u
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = x), i.props = l, i.state = x, i.context = u, l = m) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      i = e.stateNode, ns(t, e), u = e.memoizedProps, N = Vl(a, u), i.props = N, O = e.pendingProps, S = i.context, x = a.contextType, m = rn, typeof x == "object" && x !== null && (m = re(x)), s = a.getDerivedStateFromProps, (x = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== O || S !== m) && Ro(
        e,
        i,
        l,
        m
      ), $a = !1, S = e.memoizedState, i.state = S, mi(e, l, i, n), hi();
      var z = e.memoizedState;
      u !== O || S !== z || $a || t !== null && t.dependencies !== null && hu(t.dependencies) ? (typeof s == "function" && (Ns(
        e,
        a,
        s,
        l
      ), z = e.memoizedState), (N = $a || qo(
        e,
        a,
        N,
        l,
        S,
        z,
        m
      ) || t !== null && t.dependencies !== null && hu(t.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, z, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        z,
        m
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = z), i.props = l, i.state = z, i.context = m, l = N) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return i = l, Du(t, e), l = (e.flags & 128) !== 0, i || l ? (i = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && l ? (e.child = Ll(
      e,
      t.child,
      null,
      n
    ), e.child = Ll(
      e,
      null,
      a,
      n
    )) : fe(t, e, a, n), e.memoizedState = i.state, t = e.child) : t = Ma(
      t,
      e,
      n
    ), t;
  }
  function Io(t, e, a, l) {
    return wl(), e.flags |= 256, fe(t, e, a, l), e.child;
  }
  var Ds = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ws(t) {
    return { baseLanes: t, cachePool: Yf() };
  }
  function qs(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= De), t;
  }
  function Po(t, e, a) {
    var l = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0), u && (n = !0, e.flags &= -129), u = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (vt) {
        if (n ? al(e) : ll(), (t = Bt) ? (t = i0(
          t,
          Ke
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Fa !== null ? { id: sa, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Cf(t), a.return = e, e.child = a, se = e, Bt = null)) : t = null, t === null) throw Pa(e);
        return vr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = l.children;
      return l = l.fallback, n ? (ll(), n = e.mode, s = wu(
        { mode: "hidden", children: s },
        n
      ), l = Dl(
        l,
        n,
        a,
        null
      ), s.return = e, l.return = e, s.sibling = l, e.child = s, l = e.child, l.memoizedState = ws(a), l.childLanes = qs(
        t,
        u,
        a
      ), e.memoizedState = Ds, bi(null, l)) : (al(e), Rs(e, s));
    }
    var m = t.memoizedState;
    if (m !== null && (s = m.dehydrated, s !== null)) {
      if (i)
        e.flags & 256 ? (al(e), e.flags &= -257, e = Bs(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (ll(), e.child = t.child, e.flags |= 128, e = null) : (ll(), s = l.fallback, n = e.mode, l = wu(
          { mode: "visible", children: l.children },
          n
        ), s = Dl(
          s,
          n,
          a,
          null
        ), s.flags |= 2, l.return = e, s.return = e, l.sibling = s, e.child = l, Ll(
          e,
          t.child,
          null,
          a
        ), l = e.child, l.memoizedState = ws(a), l.childLanes = qs(
          t,
          u,
          a
        ), e.memoizedState = Ds, e = bi(null, l));
      else if (al(e), vr(s)) {
        if (u = s.nextSibling && s.nextSibling.dataset, u) var x = u.dgst;
        u = x, l = Error(r(419)), l.stack = "", l.digest = u, ci({ value: l, source: null, stack: null }), e = Bs(
          t,
          e,
          a
        );
      } else if (Pt || hn(t, e, a, !1), u = (a & t.childLanes) !== 0, Pt || u) {
        if (u = Ot, u !== null && (l = Ji(u, a), l !== 0 && l !== m.retryLane))
          throw m.retryLane = l, Ol(t, l), Me(u, t, l), js;
        pr(s) || Gu(), e = Bs(
          t,
          e,
          a
        );
      } else
        pr(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Bt = Je(
          s.nextSibling
        ), se = e, vt = !0, Ia = null, Ke = !1, t !== null && Df(e, t), e = Rs(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (ll(), s = l.fallback, n = e.mode, m = t.child, x = m.sibling, l = xa(m, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = m.subtreeFlags & 65011712, x !== null ? s = xa(
      x,
      s
    ) : (s = Dl(
      s,
      n,
      a,
      null
    ), s.flags |= 2), s.return = e, l.return = e, l.sibling = s, e.child = l, bi(null, l), l = e.child, s = t.child.memoizedState, s === null ? s = ws(a) : (n = s.cachePool, n !== null ? (m = Ft._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = Yf(), s = {
      baseLanes: s.baseLanes | a,
      cachePool: n
    }), l.memoizedState = s, l.childLanes = qs(
      t,
      u,
      a
    ), e.memoizedState = Ds, bi(t.child, l)) : (al(e), a = t.child, t = a.sibling, a = xa(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (u = e.deletions, u === null ? (e.deletions = [t], e.flags |= 16) : u.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function Rs(t, e) {
    return e = wu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function wu(t, e) {
    return t = Ue(22, t, null, e), t.lanes = 0, t;
  }
  function Bs(t, e, a) {
    return Ll(e, t.child, null, a), t = Rs(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function _o(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Pc(t.return, e, a);
  }
  function ks(t, e, a, l, n, i) {
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
  function $o(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, i = l.tail;
    l = l.children;
    var u = Zt.current, s = (u & 2) !== 0;
    if (s ? (u = u & 1 | 2, e.flags |= 128) : u &= 1, w(Zt, u), fe(t, e, l, a), l = vt ? ui : 0, !s && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && _o(t, a, e);
        else if (t.tag === 19)
          _o(t, a, e);
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
          t = a.alternate, t !== null && Su(t) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), ks(
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
          if (t = n.alternate, t !== null && Su(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        ks(
          e,
          !0,
          a,
          null,
          i,
          l
        );
        break;
      case "together":
        ks(
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
    if (t !== null && (e.dependencies = t.dependencies), ul |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (hn(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, a = xa(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = xa(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Ys(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && hu(t)));
  }
  function fm(t, e, a) {
    switch (e.tag) {
      case 3:
        dt(e, e.stateNode.containerInfo), _a(e, Ft, t.memoizedState.cache), wl();
        break;
      case 27:
      case 5:
        ve(e);
        break;
      case 4:
        dt(e, e.stateNode.containerInfo);
        break;
      case 10:
        _a(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, rs(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (al(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Po(t, e, a) : (al(e), t = Ma(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        al(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (l = (a & e.childLanes) !== 0, l || (hn(
          t,
          e,
          a,
          !1
        ), l = (a & e.childLanes) !== 0), n) {
          if (l)
            return $o(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), w(Zt, Zt.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, Xo(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        _a(e, Ft, t.memoizedState.cache);
    }
    return Ma(t, e, a);
  }
  function td(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Pt = !0;
      else {
        if (!Ys(t, a) && (e.flags & 128) === 0)
          return Pt = !1, fm(
            t,
            e,
            a
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, vt && (e.flags & 1048576) !== 0 && Of(e, ui, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = kl(e.elementType), e.type = t, typeof t == "function")
            Zc(t) ? (l = Vl(t, l), e.tag = 1, e = Fo(
              null,
              e,
              t,
              l,
              a
            )) : (e.tag = 0, e = Os(
              null,
              e,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === pt) {
                e.tag = 11, e = Go(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === tt) {
                e.tag = 14, e = Zo(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              }
            }
            throw e = qt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Os(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return l = e.type, n = Vl(
          l,
          e.pendingProps
        ), Fo(
          t,
          e,
          l,
          n,
          a
        );
      case 3:
        t: {
          if (dt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          l = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, ns(t, e), mi(e, l, null, a);
          var u = e.memoizedState;
          if (l = u.cache, _a(e, Ft, l), l !== i.cache && _c(
            e,
            [Ft],
            a,
            !0
          ), hi(), l = u.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Io(
                t,
                e,
                l,
                a
              );
              break t;
            } else if (l !== n) {
              n = Ve(
                Error(r(424)),
                e
              ), ci(n), e = Io(
                t,
                e,
                l,
                a
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Bt = Je(t.firstChild), se = e, vt = !0, Ia = null, Ke = !0, a = Kf(
                e,
                null,
                l,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (wl(), l === n) {
              e = Ma(
                t,
                e,
                a
              );
              break t;
            }
            fe(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Du(t, e), t === null ? (a = o0(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : vt || (a = e.type, t = e.pendingProps, l = Fu(
          J.current
        ).createElement(a), l[Qt] = e, l[he] = t, oe(l, a, t), $t(l), e.stateNode = l) : e.memoizedState = o0(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ve(e), t === null && vt && (l = e.stateNode = s0(
          e.type,
          e.pendingProps,
          J.current
        ), se = e, Ke = !0, n = Bt, ol(e.type) ? (gr = n, Bt = Je(l.firstChild)) : Bt = n), fe(
          t,
          e,
          e.pendingProps.children,
          a
        ), Du(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && vt && ((n = l = Bt) && (l = Hm(
          l,
          e.type,
          e.pendingProps,
          Ke
        ), l !== null ? (e.stateNode = l, se = e, Bt = Je(l.firstChild), Ke = !1, n = !0) : n = !1), n || Pa(e)), ve(e), n = e.type, i = e.pendingProps, u = t !== null ? t.memoizedProps : null, l = i.children, dr(n, i) ? l = null : u !== null && dr(n, u) && (e.flags |= 32), e.memoizedState !== null && (n = os(
          t,
          e,
          em,
          null,
          null,
          a
        ), qi._currentValue = n), Du(t, e), fe(t, e, l, a), e.child;
      case 6:
        return t === null && vt && ((t = a = Bt) && (a = Vm(
          a,
          e.pendingProps,
          Ke
        ), a !== null ? (e.stateNode = a, se = e, Bt = null, t = !0) : t = !1), t || Pa(e)), null;
      case 13:
        return Po(t, e, a);
      case 4:
        return dt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = Ll(
          e,
          null,
          l,
          a
        ) : fe(t, e, l, a), e.child;
      case 11:
        return Go(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return fe(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return fe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return fe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return l = e.pendingProps, _a(e, e.type, l.value), fe(t, e, l.children, a), e.child;
      case 9:
        return n = e.type._context, l = e.pendingProps.children, Rl(e), n = re(n), l = l(n), e.flags |= 1, fe(t, e, l, a), e.child;
      case 14:
        return Zo(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Ko(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return $o(t, e, a);
      case 31:
        return rm(t, e, a);
      case 22:
        return Xo(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return Rl(e), l = re(Ft), t === null ? (n = es(), n === null && (n = Ot, i = $c(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), e.memoizedState = { parent: l, cache: n }, ls(e), _a(e, Ft, n)) : ((t.lanes & a) !== 0 && (ns(t, e), mi(e, null, null, a), hi()), n = t.memoizedState, i = e.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), _a(e, Ft, l)) : (l = i.cache, _a(e, Ft, l), l !== n.cache && _c(
          e,
          [Ft],
          a,
          !0
        ))), fe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Na(t) {
    t.flags |= 4;
  }
  function Ls(t, e, a, l, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Nd()) t.flags |= 8192;
        else
          throw Yl = gu, as;
    } else t.flags &= -16777217;
  }
  function ed(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !v0(e))
      if (Nd()) t.flags |= 8192;
      else
        throw Yl = gu, as;
  }
  function qu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Al() : 536870912, t.lanes |= e, Tn |= e);
  }
  function xi(t, e) {
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
  function kt(t) {
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
    switch (Qc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kt(e), null;
      case 1:
        return kt(e), null;
      case 3:
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Aa(Ft), bt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (dn(e) ? Na(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Fc())), kt(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (Na(e), i !== null ? (kt(e), ed(e, i)) : (kt(e), Ls(
          e,
          n,
          null,
          l,
          a
        ))) : i ? i !== t.memoizedState ? (Na(e), kt(e), ed(e, i)) : (kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && Na(e), kt(e), Ls(
          e,
          n,
          t,
          l,
          a
        )), null;
      case 27:
        if (de(e), a = J.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Na(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(r(166));
            return kt(e), null;
          }
          t = Y.current, dn(e) ? wf(e) : (t = s0(n, l, a), e.stateNode = t, Na(e));
        }
        return kt(e), null;
      case 5:
        if (de(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Na(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(r(166));
            return kt(e), null;
          }
          if (i = Y.current, dn(e))
            wf(e);
          else {
            var u = Fu(
              J.current
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
            t: switch (oe(i, n, l), n) {
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
        return kt(e), Ls(
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
            throw Error(r(166));
          if (t = J.current, dn(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = se, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            t[Qt] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Pd(t.nodeValue, a)), t || Pa(e, !0);
          } else
            t = Fu(t).createTextNode(
              l
            ), t[Qt] = e, e.stateNode = t;
        }
        return kt(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = dn(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Qt] = e;
            } else
              wl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), t = !1;
          } else
            a = Fc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (je(e), e) : (je(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return kt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = dn(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Qt] = e;
            } else
              wl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), n = !1;
          } else
            n = Fc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (je(e), e) : (je(e), null);
        }
        return je(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), qu(e, e.updateQueue), kt(e), null);
      case 4:
        return bt(), t === null && cr(e.stateNode.containerInfo), kt(e), null;
      case 10:
        return Aa(e.type), kt(e), null;
      case 19:
        if (A(Zt), l = e.memoizedState, l === null) return kt(e), null;
        if (n = (e.flags & 128) !== 0, i = l.rendering, i === null)
          if (n) xi(l, !1);
          else {
            if (Gt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Su(t), i !== null) {
                  for (e.flags |= 128, xi(l, !1), t = i.updateQueue, e.updateQueue = t, qu(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    Uf(a, t), a = a.sibling;
                  return w(
                    Zt,
                    Zt.current & 1 | 2
                  ), vt && Sa(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && ne() > Lu && (e.flags |= 128, n = !0, xi(l, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Su(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, qu(e, t), xi(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !vt)
                return kt(e), null;
            } else
              2 * ne() - l.renderingStartTime > Lu && a !== 536870912 && (e.flags |= 128, n = !0, xi(l, !1), e.lanes = 4194304);
          l.isBackwards ? (i.sibling = e.child, e.child = i) : (t = l.last, t !== null ? t.sibling = i : e.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ne(), t.sibling = null, a = Zt.current, w(
          Zt,
          n ? a & 1 | 2 : a & 1
        ), vt && Sa(e, l.treeForkCount), t) : (kt(e), null);
      case 22:
      case 23:
        return je(e), ss(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), a = e.updateQueue, a !== null && qu(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && A(Bl), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Aa(Ft), kt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function dm(t, e) {
    switch (Qc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Aa(Ft), bt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return de(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (je(e), e.alternate === null)
            throw Error(r(340));
          wl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (je(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          wl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return A(Zt), null;
      case 4:
        return bt(), null;
      case 10:
        return Aa(e.type), null;
      case 22:
      case 23:
        return je(e), ss(), t !== null && A(Bl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Aa(Ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ad(t, e) {
    switch (Qc(e), e.tag) {
      case 3:
        Aa(Ft), bt();
        break;
      case 26:
      case 27:
      case 5:
        de(e);
        break;
      case 4:
        bt();
        break;
      case 31:
        e.memoizedState !== null && je(e);
        break;
      case 13:
        je(e);
        break;
      case 19:
        A(Zt);
        break;
      case 10:
        Aa(e.type);
        break;
      case 22:
      case 23:
        je(e), ss(), t !== null && A(Bl);
        break;
      case 24:
        Aa(Ft);
    }
  }
  function Si(t, e) {
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
    } catch (s) {
      Mt(e, e.return, s);
    }
  }
  function nl(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & t) === t) {
            var u = l.inst, s = u.destroy;
            if (s !== void 0) {
              u.destroy = void 0, n = e;
              var m = a, x = s;
              try {
                x();
              } catch (N) {
                Mt(
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
      Mt(e, e.return, N);
    }
  }
  function ld(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Jf(e, a);
      } catch (l) {
        Mt(t, t.return, l);
      }
    }
  }
  function nd(t, e, a) {
    a.props = Vl(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Mt(t, e, l);
    }
  }
  function Ei(t, e) {
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
      Mt(t, e, n);
    }
  }
  function fa(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          Mt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          Mt(t, e, n);
        }
      else a.current = null;
  }
  function id(t) {
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
      Mt(t, t.return, n);
    }
  }
  function Hs(t, e, a) {
    try {
      var l = t.stateNode;
      qm(l, t.type, a, e), l[he] = e;
    } catch (n) {
      Mt(t, t.return, n);
    }
  }
  function ud(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ol(t.type) || t.tag === 4;
  }
  function Vs(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ud(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ol(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Gs(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ya));
    else if (l !== 4 && (l === 27 && ol(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (Gs(t, e, a), t = t.sibling; t !== null; )
        Gs(t, e, a), t = t.sibling;
  }
  function Ru(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (l !== 4 && (l === 27 && ol(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (Ru(t, e, a), t = t.sibling; t !== null; )
        Ru(t, e, a), t = t.sibling;
  }
  function cd(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      oe(e, l, a), e[Qt] = t, e[he] = a;
    } catch (i) {
      Mt(t, t.return, i);
    }
  }
  var Ua = !1, _t = !1, Zs = !1, sd = typeof WeakSet == "function" ? WeakSet : Set, ae = null;
  function hm(t, e) {
    if (t = t.containerInfo, fr = ac, t = bf(t), Bc(t)) {
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
            var u = 0, s = -1, m = -1, x = 0, N = 0, O = t, S = null;
            e: for (; ; ) {
              for (var z; O !== a || n !== 0 && O.nodeType !== 3 || (s = u + n), O !== i || l !== 0 && O.nodeType !== 3 || (m = u + l), O.nodeType === 3 && (u += O.nodeValue.length), (z = O.firstChild) !== null; )
                S = O, O = z;
              for (; ; ) {
                if (O === t) break e;
                if (S === a && ++x === n && (s = u), S === i && ++N === l && (m = u), (z = O.nextSibling) !== null) break;
                O = S, S = O.parentNode;
              }
              O = z;
            }
            a = s === -1 || m === -1 ? null : { start: s, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (or = { focusedElem: t, selectionRange: a }, ac = !1, ae = e; ae !== null; )
      if (e = ae, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ae = t;
      else
        for (; ae !== null; ) {
          switch (e = ae, i = e.alternate, t = e.flags, e.tag) {
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
                  var K = Vl(
                    a.type,
                    n
                  );
                  t = l.getSnapshotBeforeUpdate(
                    K,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (_) {
                  Mt(
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
                  mr(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mr(t);
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, ae = t;
            break;
          }
          ae = e.return;
        }
  }
  function rd(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ja(t, a), l & 4 && Si(5, a);
        break;
      case 1:
        if (ja(t, a), l & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (u) {
              Mt(a, a.return, u);
            }
          else {
            var n = Vl(
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
              Mt(
                a,
                a.return,
                u
              );
            }
          }
        l & 64 && ld(a), l & 512 && Ei(a, a.return);
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
            Jf(t, e);
          } catch (u) {
            Mt(a, a.return, u);
          }
        }
        break;
      case 27:
        e === null && l & 4 && cd(a);
      case 26:
      case 5:
        ja(t, a), e === null && l & 4 && id(a), l & 512 && Ei(a, a.return);
        break;
      case 12:
        ja(t, a);
        break;
      case 31:
        ja(t, a), l & 4 && dd(t, a);
        break;
      case 13:
        ja(t, a), l & 4 && hd(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = Em.bind(
          null,
          a
        ), Gm(t, a))));
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
  function fd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, fd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ga(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Lt = null, Ee = !1;
  function Ca(t, e, a) {
    for (a = a.child; a !== null; )
      od(t, e, a), a = a.sibling;
  }
  function od(t, e, a) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(ie, a);
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
        var l = Lt, n = Ee;
        ol(a.type) && (Lt = a.stateNode, Ee = !1), Ca(
          t,
          e,
          a
        ), Oi(a.stateNode), Lt = l, Ee = n;
        break;
      case 5:
        _t || fa(a, e);
      case 6:
        if (l = Lt, n = Ee, Lt = null, Ca(
          t,
          e,
          a
        ), Lt = l, Ee = n, Lt !== null)
          if (Ee)
            try {
              (Lt.nodeType === 9 ? Lt.body : Lt.nodeName === "HTML" ? Lt.ownerDocument.body : Lt).removeChild(a.stateNode);
            } catch (i) {
              Mt(
                a,
                e,
                i
              );
            }
          else
            try {
              Lt.removeChild(a.stateNode);
            } catch (i) {
              Mt(
                a,
                e,
                i
              );
            }
        break;
      case 18:
        Lt !== null && (Ee ? (t = Lt, l0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), wn(t)) : l0(Lt, a.stateNode));
        break;
      case 4:
        l = Lt, n = Ee, Lt = a.stateNode.containerInfo, Ee = !0, Ca(
          t,
          e,
          a
        ), Lt = l, Ee = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        nl(2, a, e), _t || nl(4, a, e), Ca(
          t,
          e,
          a
        );
        break;
      case 1:
        _t || (fa(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && nd(
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
  function dd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        wn(t);
      } catch (a) {
        Mt(e, e.return, a);
      }
    }
  }
  function hd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        wn(t);
      } catch (a) {
        Mt(e, e.return, a);
      }
  }
  function mm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new sd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new sd()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Bu(t, e) {
    var a = mm(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = Am.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function Ae(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], i = t, u = e, s = u;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (ol(s.type)) {
                Lt = s.stateNode, Ee = !1;
                break t;
              }
              break;
            case 5:
              Lt = s.stateNode, Ee = !1;
              break t;
            case 3:
            case 4:
              Lt = s.stateNode.containerInfo, Ee = !0;
              break t;
          }
          s = s.return;
        }
        if (Lt === null) throw Error(r(160));
        od(i, u, n), Lt = null, Ee = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        md(e, t), e = e.sibling;
  }
  var la = null;
  function md(t, e) {
    var a = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ae(e, t), ze(t), l & 4 && (nl(3, t, t.return), Si(3, t), nl(5, t, t.return));
        break;
      case 1:
        Ae(e, t), ze(t), l & 512 && (_t || a === null || fa(a, a.return)), l & 64 && Ua && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = la;
        if (Ae(e, t), ze(t), l & 512 && (_t || a === null || fa(a, a.return)), l & 4) {
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
                      )), oe(i, l, a), i[Qt] = t, $t(i), l = i;
                      break t;
                    case "link":
                      var u = m0(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (i = u[s], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            u.splice(s, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), oe(i, l, a), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = m0(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (s = 0; s < u.length; s++)
                          if (i = u[s], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            u.splice(s, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), oe(i, l, a), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  i[Qt] = t, $t(i), l = i;
                }
                t.stateNode = l;
              } else
                p0(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = h0(
                n,
                l,
                t.memoizedProps
              );
          else
            i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? p0(
              n,
              t.type,
              t.stateNode
            ) : h0(
              n,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && Hs(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ae(e, t), ze(t), l & 512 && (_t || a === null || fa(a, a.return)), a !== null && l & 4 && Hs(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ae(e, t), ze(t), l & 512 && (_t || a === null || fa(a, a.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            ea(n, "");
          } catch (K) {
            Mt(t, t.return, K);
          }
        }
        l & 4 && t.stateNode != null && (n = t.memoizedProps, Hs(
          t,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (Zs = !0);
        break;
      case 6:
        if (Ae(e, t), ze(t), l & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          l = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = l;
          } catch (K) {
            Mt(t, t.return, K);
          }
        }
        break;
      case 3:
        if (_u = null, n = la, la = Iu(e.containerInfo), Ae(e, t), la = n, ze(t), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            wn(e.containerInfo);
          } catch (K) {
            Mt(t, t.return, K);
          }
        Zs && (Zs = !1, pd(t));
        break;
      case 4:
        l = la, la = Iu(
          t.stateNode.containerInfo
        ), Ae(e, t), ze(t), la = l;
        break;
      case 12:
        Ae(e, t), ze(t);
        break;
      case 31:
        Ae(e, t), ze(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Bu(t, l)));
        break;
      case 13:
        Ae(e, t), ze(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Yu = ne()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Bu(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = a !== null && a.memoizedState !== null, x = Ua, N = _t;
        if (Ua = x || n, _t = N || m, Ae(e, t), _t = N, Ua = x, ze(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (a === null || m || Ua || _t || Gl(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                m = a = e;
                try {
                  if (i = m.stateNode, n)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    s = m.stateNode;
                    var O = m.memoizedProps.style, S = O != null && O.hasOwnProperty("display") ? O.display : null;
                    s.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (K) {
                  Mt(m, m.return, K);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (K) {
                  Mt(m, m.return, K);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                m = e;
                try {
                  var z = m.stateNode;
                  n ? n0(z, !0) : n0(m.stateNode, !1);
                } catch (K) {
                  Mt(m, m.return, K);
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
        l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Bu(t, a))));
        break;
      case 19:
        Ae(e, t), ze(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Bu(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ae(e, t), ze(t);
    }
  }
  function ze(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (ud(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, i = Vs(t);
            Ru(t, i, n);
            break;
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (ea(u, ""), a.flags &= -33);
            var s = Vs(t);
            Ru(t, s, u);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, x = Vs(t);
            Gs(
              t,
              x,
              m
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (N) {
        Mt(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function pd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        pd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ja(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        rd(t, e.alternate, e), e = e.sibling;
  }
  function Gl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          nl(4, e, e.return), Gl(e);
          break;
        case 1:
          fa(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && nd(
            e,
            e.return,
            a
          ), Gl(e);
          break;
        case 27:
          Oi(e.stateNode);
        case 26:
        case 5:
          fa(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
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
          ), Si(4, i);
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
              Mt(l, l.return, x);
            }
          if (l = i, n = l.updateQueue, n !== null) {
            var s = l.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  Xf(m[n], s);
            } catch (x) {
              Mt(l, l.return, x);
            }
          }
          a && u & 64 && ld(i), Ei(i, i.return);
          break;
        case 27:
          cd(i);
        case 26:
        case 5:
          Oa(
            n,
            i,
            a
          ), a && l === null && u & 4 && id(i), Ei(i, i.return);
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
          ), a && u & 4 && dd(n, i);
          break;
        case 13:
          Oa(
            n,
            i,
            a
          ), a && u & 4 && hd(n, i);
          break;
        case 22:
          i.memoizedState === null && Oa(
            n,
            i,
            a
          ), Ei(i, i.return);
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
  function Ks(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && si(a));
  }
  function Xs(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && si(t));
  }
  function na(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        vd(
          t,
          e,
          a,
          l
        ), e = e.sibling;
  }
  function vd(t, e, a, l) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        na(
          t,
          e,
          a,
          l
        ), n & 2048 && Si(9, e);
        break;
      case 1:
        na(
          t,
          e,
          a,
          l
        );
        break;
      case 3:
        na(
          t,
          e,
          a,
          l
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && si(t)));
        break;
      case 12:
        if (n & 2048) {
          na(
            t,
            e,
            a,
            l
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, u = i.id, s = i.onPostCommit;
            typeof s == "function" && s(
              u,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            Mt(e, e.return, m);
          }
        } else
          na(
            t,
            e,
            a,
            l
          );
        break;
      case 31:
        na(
          t,
          e,
          a,
          l
        );
        break;
      case 13:
        na(
          t,
          e,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, u = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? na(
          t,
          e,
          a,
          l
        ) : Ai(t, e) : i._visibility & 2 ? na(
          t,
          e,
          a,
          l
        ) : (i._visibility |= 2, En(
          t,
          e,
          a,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Ks(u, e);
        break;
      case 24:
        na(
          t,
          e,
          a,
          l
        ), n & 2048 && Xs(e.alternate, e);
        break;
      default:
        na(
          t,
          e,
          a,
          l
        );
    }
  }
  function En(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, u = e, s = a, m = l, x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          En(
            i,
            u,
            s,
            m,
            n
          ), Si(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? En(
            i,
            u,
            s,
            m,
            n
          ) : Ai(
            i,
            u
          ) : (N._visibility |= 2, En(
            i,
            u,
            s,
            m,
            n
          )), n && x & 2048 && Ks(
            u.alternate,
            u
          );
          break;
        case 24:
          En(
            i,
            u,
            s,
            m,
            n
          ), n && x & 2048 && Xs(u.alternate, u);
          break;
        default:
          En(
            i,
            u,
            s,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Ai(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, l = e, n = l.flags;
        switch (l.tag) {
          case 22:
            Ai(a, l), n & 2048 && Ks(
              l.alternate,
              l
            );
            break;
          case 24:
            Ai(a, l), n & 2048 && Xs(l.alternate, l);
            break;
          default:
            Ai(a, l);
        }
        e = e.sibling;
      }
  }
  var zi = 8192;
  function An(t, e, a) {
    if (t.subtreeFlags & zi)
      for (t = t.child; t !== null; )
        gd(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function gd(t, e, a) {
    switch (t.tag) {
      case 26:
        An(
          t,
          e,
          a
        ), t.flags & zi && t.memoizedState !== null && tp(
          a,
          la,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        An(
          t,
          e,
          a
        );
        break;
      case 3:
      case 4:
        var l = la;
        la = Iu(t.stateNode.containerInfo), An(
          t,
          e,
          a
        ), la = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = zi, zi = 16777216, An(
          t,
          e,
          a
        ), zi = l) : An(
          t,
          e,
          a
        ));
        break;
      default:
        An(
          t,
          e,
          a
        );
    }
  }
  function yd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ti(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ae = l, xd(
            l,
            t
          );
        }
      yd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bd(t), t = t.sibling;
  }
  function bd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ti(t), t.flags & 2048 && nl(9, t, t.return);
        break;
      case 3:
        Ti(t);
        break;
      case 12:
        Ti(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ku(t)) : Ti(t);
        break;
      default:
        Ti(t);
    }
  }
  function ku(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ae = l, xd(
            l,
            t
          );
        }
      yd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          nl(8, e, e.return), ku(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, ku(e));
          break;
        default:
          ku(e);
      }
      t = t.sibling;
    }
  }
  function xd(t, e) {
    for (; ae !== null; ) {
      var a = ae;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          nl(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          si(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ae = l;
      else
        t: for (a = t; ae !== null; ) {
          l = ae;
          var n = l.sibling, i = l.return;
          if (fd(l), l === a) {
            ae = null;
            break t;
          }
          if (n !== null) {
            n.return = i, ae = n;
            break t;
          }
          ae = i;
        }
    }
  }
  var pm = {
    getCacheForType: function(t) {
      var e = re(Ft), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return re(Ft).controller.signal;
    }
  }, vm = typeof WeakMap == "function" ? WeakMap : Map, zt = 0, Ot = null, ft = null, ht = 0, Tt = 0, Oe = null, il = !1, zn = !1, Js = !1, Da = 0, Gt = 0, ul = 0, Zl = 0, Qs = 0, De = 0, Tn = 0, Mi = null, Te = null, Ws = !1, Yu = 0, Sd = 0, Lu = 1 / 0, Hu = null, cl = null, te = 0, sl = null, Mn = null, wa = 0, Fs = 0, Is = null, Ed = null, Ni = 0, Ps = null;
  function we() {
    return (zt & 2) !== 0 && ht !== 0 ? ht & -ht : M.T !== null ? lr() : Qi();
  }
  function Ad() {
    if (De === 0)
      if ((ht & 536870912) === 0 || vt) {
        var t = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), De = t;
      } else De = 536870912;
    return t = Ce.current, t !== null && (t.flags |= 32), De;
  }
  function Me(t, e, a) {
    (t === Ot && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null) && (Nn(t, 0), rl(
      t,
      ht,
      De,
      !1
    )), La(t, a), ((zt & 2) === 0 || t !== Ot) && (t === Ot && ((zt & 2) === 0 && (Zl |= a), Gt === 4 && rl(
      t,
      ht,
      De,
      !1
    )), oa(t));
  }
  function zd(t, e, a) {
    if ((zt & 6) !== 0) throw Error(r(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ya(t, e), n = l ? bm(t, e) : $s(t, e, !0), i = l;
    do {
      if (n === 0) {
        zn && !l && rl(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, i && !gm(a)) {
          n = $s(t, e, !1), i = !1;
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
              var s = t;
              n = Mi;
              var m = s.current.memoizedState.isDehydrated;
              if (m && (Nn(s, u).flags |= 256), u = $s(
                s,
                u,
                !1
              ), u !== 2) {
                if (Js && !m) {
                  s.errorRecoveryDisabledLanes |= i, Zl |= i, n = 4;
                  break t;
                }
                i = Te, Te = n, i !== null && (Te === null ? Te = i : Te.push.apply(
                  Te,
                  i
                ));
              }
              n = u;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Nn(t, 0), rl(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, i = n, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              rl(
                l,
                e,
                De,
                !il
              );
              break t;
            case 2:
              Te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (n = Yu + 300 - ne(), 10 < n)) {
            if (rl(
              l,
              e,
              De,
              !il
            ), $e(l, 0, !0) !== 0) break t;
            wa = e, l.timeoutHandle = e0(
              Td.bind(
                null,
                l,
                a,
                Te,
                Hu,
                Ws,
                e,
                De,
                Zl,
                Tn,
                il,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Td(
            l,
            a,
            Te,
            Hu,
            Ws,
            e,
            De,
            Zl,
            Tn,
            il,
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
  function Td(t, e, a, l, n, i, u, s, m, x, N, O, S, z) {
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
      }, gd(
        e,
        i,
        O
      );
      var K = (i & 62914560) === i ? Yu - ne() : (i & 4194048) === i ? Sd - ne() : 0;
      if (K = ep(
        O,
        K
      ), K !== null) {
        wa = i, t.cancelPendingCommit = K(
          wd.bind(
            null,
            t,
            e,
            i,
            a,
            l,
            n,
            u,
            s,
            m,
            N,
            O,
            null,
            S,
            z
          )
        ), rl(t, i, u, !x);
        return;
      }
    }
    wd(
      t,
      e,
      i,
      a,
      l,
      n,
      u,
      s,
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
            if (!Ne(i(), n)) return !1;
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
  function rl(t, e, a, l) {
    e &= ~Qs, e &= ~Zl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - ee(n), u = 1 << i;
      l[i] = -1, n &= ~u;
    }
    a !== 0 && Qn(t, a, e);
  }
  function Vu() {
    return (zt & 6) === 0 ? (Ui(0), !1) : !0;
  }
  function _s() {
    if (ft !== null) {
      if (Tt === 0)
        var t = ft.return;
      else
        t = ft, Ea = ql = null, ms(t), gn = null, fi = 0, t = ft;
      for (; t !== null; )
        ad(t.alternate, t), t = t.return;
      ft = null;
    }
  }
  function Nn(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, km(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), wa = 0, _s(), Ot = t, ft = a = xa(t.current, null), ht = e, Tt = 0, Oe = null, il = !1, zn = Ya(t, e), Js = !1, Tn = De = Qs = Zl = ul = Gt = 0, Te = Mi = null, Ws = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var n = 31 - ee(l), i = 1 << n;
        e |= t[n], l &= ~i;
      }
    return Da = e, su(), a;
  }
  function Md(t, e) {
    ut = null, M.H = yi, e === vn || e === vu ? (e = Vf(), Tt = 3) : e === as ? (e = Vf(), Tt = 4) : Tt = e === js ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Oe = e, ft === null && (Gt = 1, ju(
      t,
      Ve(e, t.current)
    ));
  }
  function Nd() {
    var t = Ce.current;
    return t === null ? !0 : (ht & 4194048) === ht ? Xe === null : (ht & 62914560) === ht || (ht & 536870912) !== 0 ? t === Xe : !1;
  }
  function Ud() {
    var t = M.H;
    return M.H = yi, t === null ? yi : t;
  }
  function Cd() {
    var t = M.A;
    return M.A = pm, t;
  }
  function Gu() {
    Gt = 4, il || (ht & 4194048) !== ht && Ce.current !== null || (zn = !0), (ul & 134217727) === 0 && (Zl & 134217727) === 0 || Ot === null || rl(
      Ot,
      ht,
      De,
      !1
    );
  }
  function $s(t, e, a) {
    var l = zt;
    zt |= 2;
    var n = Ud(), i = Cd();
    (Ot !== t || ht !== e) && (Hu = null, Nn(t, e)), e = !1;
    var u = Gt;
    t: do
      try {
        if (Tt !== 0 && ft !== null) {
          var s = ft, m = Oe;
          switch (Tt) {
            case 8:
              _s(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ce.current === null && (e = !0);
              var x = Tt;
              if (Tt = 0, Oe = null, Un(t, s, m, x), a && zn) {
                u = 0;
                break t;
              }
              break;
            default:
              x = Tt, Tt = 0, Oe = null, Un(t, s, m, x);
          }
        }
        ym(), u = Gt;
        break;
      } catch (N) {
        Md(t, N);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ea = ql = null, zt = l, M.H = n, M.A = i, ft === null && (Ot = null, ht = 0, su()), u;
  }
  function ym() {
    for (; ft !== null; ) jd(ft);
  }
  function bm(t, e) {
    var a = zt;
    zt |= 2;
    var l = Ud(), n = Cd();
    Ot !== t || ht !== e ? (Hu = null, Lu = ne() + 500, Nn(t, e)) : zn = Ya(
      t,
      e
    );
    t: do
      try {
        if (Tt !== 0 && ft !== null) {
          e = ft;
          var i = Oe;
          e: switch (Tt) {
            case 1:
              Tt = 0, Oe = null, Un(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Lf(i)) {
                Tt = 0, Oe = null, Od(e);
                break;
              }
              e = function() {
                Tt !== 2 && Tt !== 9 || Ot !== t || (Tt = 7), oa(t);
              }, i.then(e, e);
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              Lf(i) ? (Tt = 0, Oe = null, Od(e)) : (Tt = 0, Oe = null, Un(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (ft.tag) {
                case 26:
                  u = ft.memoizedState;
                case 5:
                case 27:
                  var s = ft;
                  if (u ? v0(u) : s.stateNode.complete) {
                    Tt = 0, Oe = null;
                    var m = s.sibling;
                    if (m !== null) ft = m;
                    else {
                      var x = s.return;
                      x !== null ? (ft = x, Zu(x)) : ft = null;
                    }
                    break e;
                  }
              }
              Tt = 0, Oe = null, Un(t, e, i, 5);
              break;
            case 6:
              Tt = 0, Oe = null, Un(t, e, i, 6);
              break;
            case 8:
              _s(), Gt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        xm();
        break;
      } catch (N) {
        Md(t, N);
      }
    while (!0);
    return Ea = ql = null, M.H = l, M.A = n, zt = a, ft !== null ? 0 : (Ot = null, ht = 0, su(), Gt);
  }
  function xm() {
    for (; ft !== null && !Gn(); )
      jd(ft);
  }
  function jd(t) {
    var e = td(t.alternate, t, Da);
    t.memoizedProps = t.pendingProps, e === null ? Zu(t) : ft = e;
  }
  function Od(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Wo(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ht
        );
        break;
      case 11:
        e = Wo(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ht
        );
        break;
      case 5:
        ms(e);
      default:
        ad(a, e), e = ft = Uf(e, Da), e = td(a, e, Da);
    }
    t.memoizedProps = t.pendingProps, e === null ? Zu(t) : ft = e;
  }
  function Un(t, e, a, l) {
    Ea = ql = null, ms(e), gn = null, fi = 0;
    var n = e.return;
    try {
      if (sm(
        t,
        n,
        e,
        a,
        ht
      )) {
        Gt = 1, ju(
          t,
          Ve(a, t.current)
        ), ft = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw ft = n, i;
      Gt = 1, ju(
        t,
        Ve(a, t.current)
      ), ft = null;
      return;
    }
    e.flags & 32768 ? (vt || l === 1 ? t = !0 : zn || (ht & 536870912) !== 0 ? t = !1 : (il = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ce.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Dd(e, t)) : Zu(e);
  }
  function Zu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Dd(
          e,
          il
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
        ft = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function Dd(t, e) {
    do {
      var a = dm(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, ft = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        ft = t;
        return;
      }
      ft = t = a;
    } while (t !== null);
    Gt = 6, ft = null;
  }
  function wd(t, e, a, l, n, i, u, s, m) {
    t.cancelPendingCommit = null;
    do
      Ku();
    while (te !== 0);
    if ((zt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (i = e.lanes | e.childLanes, i |= Vc, Il(
        t,
        a,
        i,
        u,
        s,
        m
      ), t === Ot && (ft = Ot = null, ht = 0), Mn = e, sl = t, wa = a, Fs = i, Is = n, Ed = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, zm(ka, function() {
        return Yd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, n = q.p, q.p = 2, u = zt, zt |= 4;
        try {
          hm(t, e, a);
        } finally {
          zt = u, q.p = n, M.T = l;
        }
      }
      te = 1, qd(), Rd(), Bd();
    }
  }
  function qd() {
    if (te === 1) {
      te = 0;
      var t = sl, e = Mn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var l = q.p;
        q.p = 2;
        var n = zt;
        zt |= 4;
        try {
          md(e, t);
          var i = or, u = bf(t.containerInfo), s = i.focusedElem, m = i.selectionRange;
          if (u !== s && s && s.ownerDocument && yf(
            s.ownerDocument.documentElement,
            s
          )) {
            if (m !== null && Bc(s)) {
              var x = m.start, N = m.end;
              if (N === void 0 && (N = x), "selectionStart" in s)
                s.selectionStart = x, s.selectionEnd = Math.min(
                  N,
                  s.value.length
                );
              else {
                var O = s.ownerDocument || document, S = O && O.defaultView || window;
                if (S.getSelection) {
                  var z = S.getSelection(), K = s.textContent.length, _ = Math.min(m.start, K), jt = m.end === void 0 ? _ : Math.min(m.end, K);
                  !z.extend && _ > jt && (u = jt, jt = _, _ = u);
                  var g = gf(
                    s,
                    _
                  ), v = gf(
                    s,
                    jt
                  );
                  if (g && v && (z.rangeCount !== 1 || z.anchorNode !== g.node || z.anchorOffset !== g.offset || z.focusNode !== v.node || z.focusOffset !== v.offset)) {
                    var b = O.createRange();
                    b.setStart(g.node, g.offset), z.removeAllRanges(), _ > jt ? (z.addRange(b), z.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), z.addRange(b));
                  }
                }
              }
            }
            for (O = [], z = s; z = z.parentNode; )
              z.nodeType === 1 && O.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < O.length; s++) {
              var j = O[s];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          ac = !!fr, or = fr = null;
        } finally {
          zt = n, q.p = l, M.T = a;
        }
      }
      t.current = e, te = 2;
    }
  }
  function Rd() {
    if (te === 2) {
      te = 0;
      var t = sl, e = Mn, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var l = q.p;
        q.p = 2;
        var n = zt;
        zt |= 4;
        try {
          rd(t, e.alternate, e);
        } finally {
          zt = n, q.p = l, M.T = a;
        }
      }
      te = 3;
    }
  }
  function Bd() {
    if (te === 4 || te === 3) {
      te = 0, Zn();
      var t = sl, e = Mn, a = wa, l = Ed;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? te = 5 : (te = 0, Mn = sl = null, kd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (cl = null), zl(a), e = e.stateNode, Jt && typeof Jt.onCommitFiberRoot == "function")
        try {
          Jt.onCommitFiberRoot(
            ie,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = M.T, n = q.p, q.p = 2, M.T = null;
        try {
          for (var i = t.onRecoverableError, u = 0; u < l.length; u++) {
            var s = l[u];
            i(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          M.T = e, q.p = n;
        }
      }
      (wa & 3) !== 0 && Ku(), oa(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Ps ? Ni++ : (Ni = 0, Ps = t) : Ni = 0, Ui(0);
    }
  }
  function kd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, si(e)));
  }
  function Ku() {
    return qd(), Rd(), Bd(), Yd();
  }
  function Yd() {
    if (te !== 5) return !1;
    var t = sl, e = Fs;
    Fs = 0;
    var a = zl(wa), l = M.T, n = q.p;
    try {
      q.p = 32 > a ? 32 : a, M.T = null, a = Is, Is = null;
      var i = sl, u = wa;
      if (te = 0, Mn = sl = null, wa = 0, (zt & 6) !== 0) throw Error(r(331));
      var s = zt;
      if (zt |= 4, bd(i.current), vd(
        i,
        i.current,
        u,
        a
      ), zt = s, Ui(0, !1), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        try {
          Jt.onPostCommitFiberRoot(ie, i);
        } catch {
        }
      return !0;
    } finally {
      q.p = n, M.T = l, kd(t, e);
    }
  }
  function Ld(t, e, a) {
    e = Ve(a, e), e = Cs(t.stateNode, e, 2), t = el(t, e, 2), t !== null && (La(t, 2), oa(t));
  }
  function Mt(t, e, a) {
    if (t.tag === 3)
      Ld(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ld(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (cl === null || !cl.has(l))) {
            t = Ve(a, t), a = Ho(2), l = el(e, a, 2), l !== null && (Vo(
              a,
              l,
              e,
              t
            ), La(l, 2), oa(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function tr(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new vm();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else
      n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (Js = !0, n.add(a), t = Sm.bind(null, t, e, a), e.then(t, t));
  }
  function Sm(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Ot === t && (ht & a) === a && (Gt === 4 || Gt === 3 && (ht & 62914560) === ht && 300 > ne() - Yu ? (zt & 2) === 0 && Nn(t, 0) : Qs |= a, Tn === ht && (Tn = 0)), oa(t);
  }
  function Hd(t, e) {
    e === 0 && (e = Al()), t = Ol(t, e), t !== null && (La(t, e), oa(t));
  }
  function Em(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Hd(t, a);
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
        throw Error(r(314));
    }
    l !== null && l.delete(e), Hd(t, a);
  }
  function zm(t, e) {
    return Jl(t, e);
  }
  var Xu = null, Cn = null, er = !1, Ju = !1, ar = !1, fl = 0;
  function oa(t) {
    t !== Cn && t.next === null && (Cn === null ? Xu = Cn = t : Cn = Cn.next = t), Ju = !0, er || (er = !0, Mm());
  }
  function Ui(t, e) {
    if (!ar && Ju) {
      ar = !0;
      do
        for (var a = !1, l = Xu; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = l.suspendedLanes, s = l.pingedLanes;
              i = (1 << 31 - ee(42 | t) + 1) - 1, i &= n & ~(u & ~s), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = !0, Kd(l, i));
          } else
            i = ht, i = $e(
              l,
              l === Ot ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Ya(l, i) || (a = !0, Kd(l, i));
          l = l.next;
        }
      while (a);
      ar = !1;
    }
  }
  function Tm() {
    Vd();
  }
  function Vd() {
    Ju = er = !1;
    var t = 0;
    fl !== 0 && Bm() && (t = fl);
    for (var e = ne(), a = null, l = Xu; l !== null; ) {
      var n = l.next, i = Gd(l, e);
      i === 0 ? (l.next = null, a === null ? Xu = n : a.next = n, n === null && (Cn = a)) : (a = l, (t !== 0 || (i & 3) !== 0) && (Ju = !0)), l = n;
    }
    te !== 0 && te !== 5 || Ui(t), fl !== 0 && (fl = 0);
  }
  function Gd(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - ee(i), s = 1 << u, m = n[u];
      m === -1 ? ((s & a) === 0 || (s & l) !== 0) && (n[u] = ke(s, e)) : m <= e && (t.expiredLanes |= s), i &= ~s;
    }
    if (e = Ot, a = ht, a = $e(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, a === 0 || t === e && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && Vn(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Ya(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && Vn(l), zl(a)) {
        case 2:
        case 8:
          a = Kn;
          break;
        case 32:
          a = ka;
          break;
        case 268435456:
          a = ha;
          break;
        default:
          a = ka;
      }
      return l = Zd.bind(null, t), a = Jl(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && Vn(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Zd(t, e) {
    if (te !== 0 && te !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Ku() && t.callbackNode !== a)
      return null;
    var l = ht;
    return l = $e(
      t,
      t === Ot ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (zd(t, l, e), Gd(t, ne()), t.callbackNode != null && t.callbackNode === a ? Zd.bind(null, t) : null);
  }
  function Kd(t, e) {
    if (Ku()) return null;
    zd(t, e, !0);
  }
  function Mm() {
    Ym(function() {
      (zt & 6) !== 0 ? Jl(
        Ql,
        Tm
      ) : Vd();
    });
  }
  function lr() {
    if (fl === 0) {
      var t = mn;
      t === 0 && (t = Pe, Pe <<= 1, (Pe & 261888) === 0 && (Pe = 256)), fl = t;
    }
    return fl;
  }
  function Xd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : tu("" + t);
  }
  function Jd(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function Nm(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var i = Xd(
        (n[he] || null).action
      ), u = l.submitter;
      u && (e = (e = u[he] || null) ? Xd(e.formAction) : u.getAttribute("formAction"), e !== null && (i = e, u = null));
      var s = new nu(
        "action",
        "action",
        null,
        l,
        n
      );
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (fl !== 0) {
                  var m = u ? Jd(n, u) : new FormData(n);
                  As(
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
                typeof i == "function" && (s.preventDefault(), m = u ? Jd(n, u) : new FormData(n), As(
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
  for (var nr = 0; nr < Hc.length; nr++) {
    var ir = Hc[nr], Um = ir.toLowerCase(), Cm = ir[0].toUpperCase() + ir.slice(1);
    aa(
      Um,
      "on" + Cm
    );
  }
  aa(Ef, "onAnimationEnd"), aa(Af, "onAnimationIteration"), aa(zf, "onAnimationStart"), aa("dblclick", "onDoubleClick"), aa("focusin", "onFocus"), aa("focusout", "onBlur"), aa(Xh, "onTransitionRun"), aa(Jh, "onTransitionStart"), aa(Qh, "onTransitionCancel"), aa(Tf, "onTransitionEnd"), pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]), ma(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ma(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ma("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ma(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ma(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ma(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), jm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci)
  );
  function Qd(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = l.length - 1; 0 <= u; u--) {
            var s = l[u], m = s.instance, x = s.currentTarget;
            if (s = s.listener, m !== i && n.isPropagationStopped())
              break t;
            i = s, n.currentTarget = x;
            try {
              i(n);
            } catch (N) {
              cu(N);
            }
            n.currentTarget = null, i = m;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (s = l[u], m = s.instance, x = s.currentTarget, s = s.listener, m !== i && n.isPropagationStopped())
              break t;
            i = s, n.currentTarget = x;
            try {
              i(n);
            } catch (N) {
              cu(N);
            }
            n.currentTarget = null, i = m;
          }
      }
    }
  }
  function ot(t, e) {
    var a = e[Va];
    a === void 0 && (a = e[Va] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (Wd(e, t, 2, !1), a.add(l));
  }
  function ur(t, e, a) {
    var l = 0;
    e && (l |= 4), Wd(
      a,
      t,
      l,
      e
    );
  }
  var Qu = "_reactListening" + Math.random().toString(36).slice(2);
  function cr(t) {
    if (!t[Qu]) {
      t[Qu] = !0, Ii.forEach(function(a) {
        a !== "selectionchange" && (jm.has(a) || ur(a, !1, t), ur(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Qu] || (e[Qu] = !0, ur("selectionchange", !1, e));
    }
  }
  function Wd(t, e, a, l) {
    switch (A0(e)) {
      case 2:
        var n = np;
        break;
      case 8:
        n = ip;
        break;
      default:
        n = Er;
    }
    a = n.bind(
      null,
      e,
      a,
      t
    ), n = void 0, !Nc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, !1);
  }
  function sr(t, e, a, l, n) {
    var i = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var u = l.tag;
        if (u === 3 || u === 4) {
          var s = l.stateNode.containerInfo;
          if (s === n) break;
          if (u === 4)
            for (u = l.return; u !== null; ) {
              var m = u.tag;
              if ((m === 3 || m === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (u = ua(s), u === null) return;
            if (m = u.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              l = i = u;
              continue t;
            }
            s = s.parentNode;
          }
        }
        l = l.return;
      }
    Pr(function() {
      var x = i, N = Tc(a), O = [];
      t: {
        var S = Mf.get(t);
        if (S !== void 0) {
          var z = nu, K = t;
          switch (t) {
            case "keypress":
              if (au(a) === 0) break t;
            case "keydown":
            case "keyup":
              z = Ah;
              break;
            case "focusin":
              K = "focus", z = Oc;
              break;
            case "focusout":
              K = "blur", z = Oc;
              break;
            case "beforeblur":
            case "afterblur":
              z = Oc;
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
              z = tf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = oh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Mh;
              break;
            case Ef:
            case Af:
            case zf:
              z = mh;
              break;
            case Tf:
              z = Uh;
              break;
            case "scroll":
            case "scrollend":
              z = rh;
              break;
            case "wheel":
              z = jh;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = vh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = af;
              break;
            case "toggle":
            case "beforetoggle":
              z = Dh;
          }
          var _ = (e & 4) !== 0, jt = !_ && (t === "scroll" || t === "scrollend"), g = _ ? S !== null ? S + "Capture" : null : S;
          _ = [];
          for (var v = x, b; v !== null; ) {
            var j = v;
            if (b = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || b === null || g === null || (j = Pn(v, g), j != null && _.push(
              ji(v, j, b)
            )), jt) break;
            v = v.return;
          }
          0 < _.length && (S = new z(
            S,
            K,
            null,
            a,
            N
          ), O.push({ event: S, listeners: _ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", S && a !== zc && (K = a.relatedTarget || a.fromElement) && (ua(K) || K[Ha]))
            break t;
          if ((z || S) && (S = N.window === N ? N : (S = N.ownerDocument) ? S.defaultView || S.parentWindow : window, z ? (K = a.relatedTarget || a.toElement, z = x, K = K ? ua(K) : null, K !== null && (jt = E(K), _ = K.tag, K !== jt || _ !== 5 && _ !== 27 && _ !== 6) && (K = null)) : (z = null, K = x), z !== K)) {
            if (_ = tf, j = "onMouseLeave", g = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (_ = af, j = "onPointerLeave", g = "onPointerEnter", v = "pointer"), jt = z == null ? S : Tl(z), b = K == null ? S : Tl(K), S = new _(
              j,
              v + "leave",
              z,
              a,
              N
            ), S.target = jt, S.relatedTarget = b, j = null, ua(N) === x && (_ = new _(
              g,
              v + "enter",
              K,
              a,
              N
            ), _.target = b, _.relatedTarget = jt, j = _), jt = j, z && K)
              e: {
                for (_ = Om, g = z, v = K, b = 0, j = g; j; j = _(j))
                  b++;
                j = 0;
                for (var I = v; I; I = _(I))
                  j++;
                for (; 0 < b - j; )
                  g = _(g), b--;
                for (; 0 < j - b; )
                  v = _(v), j--;
                for (; b--; ) {
                  if (g === v || v !== null && g === v.alternate) {
                    _ = g;
                    break e;
                  }
                  g = _(g), v = _(v);
                }
                _ = null;
              }
            else _ = null;
            z !== null && Fd(
              O,
              S,
              z,
              _,
              !1
            ), K !== null && jt !== null && Fd(
              O,
              jt,
              K,
              _,
              !0
            );
          }
        }
        t: {
          if (S = x ? Tl(x) : window, z = S.nodeName && S.nodeName.toLowerCase(), z === "select" || z === "input" && S.type === "file")
            var xt = of;
          else if (rf(S))
            if (df)
              xt = Gh;
            else {
              xt = Hh;
              var Q = Lh;
            }
          else
            z = S.nodeName, !z || z.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? x && In(x.elementType) && (xt = of) : xt = Vh;
          if (xt && (xt = xt(t, x))) {
            ff(
              O,
              xt,
              a,
              N
            );
            break t;
          }
          Q && Q(t, S, x), t === "focusout" && x && S.type === "number" && x.memoizedProps.value != null && Ml(S, "number", S.value);
        }
        switch (Q = x ? Tl(x) : window, t) {
          case "focusin":
            (rf(Q) || Q.contentEditable === "true") && (un = Q, kc = x, ii = null);
            break;
          case "focusout":
            ii = kc = un = null;
            break;
          case "mousedown":
            Yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yc = !1, xf(O, a, N);
            break;
          case "selectionchange":
            if (Kh) break;
          case "keydown":
          case "keyup":
            xf(O, a, N);
        }
        var ct;
        if (wc)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          nn ? cf(t, a) && (mt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (mt = "onCompositionStart");
        mt && (lf && a.locale !== "ko" && (nn || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && nn && (ct = _r()) : (Wa = N, Uc = "value" in Wa ? Wa.value : Wa.textContent, nn = !0)), Q = Wu(x, mt), 0 < Q.length && (mt = new ef(
          mt,
          t,
          null,
          a,
          N
        ), O.push({ event: mt, listeners: Q }), ct ? mt.data = ct : (ct = sf(a), ct !== null && (mt.data = ct)))), (ct = qh ? Rh(t, a) : Bh(t, a)) && (mt = Wu(x, "onBeforeInput"), 0 < mt.length && (Q = new ef(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          N
        ), O.push({
          event: Q,
          listeners: mt
        }), Q.data = ct)), Nm(
          O,
          t,
          x,
          a,
          N
        );
      }
      Qd(O, e);
    });
  }
  function ji(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function Wu(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Pn(t, a), n != null && l.unshift(
        ji(t, n, i)
      ), n = Pn(t, e), n != null && l.push(
        ji(t, n, i)
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
  function Fd(t, e, a, l, n) {
    for (var i = e._reactName, u = []; a !== null && a !== l; ) {
      var s = a, m = s.alternate, x = s.stateNode;
      if (s = s.tag, m !== null && m === l) break;
      s !== 5 && s !== 26 && s !== 27 || x === null || (m = x, n ? (x = Pn(a, i), x != null && u.unshift(
        ji(a, x, m)
      )) : n || (x = Pn(a, i), x != null && u.push(
        ji(a, x, m)
      ))), a = a.return;
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var Dm = /\r\n?/g, wm = /\u0000|\uFFFD/g;
  function Id(t) {
    return (typeof t == "string" ? t : "" + t).replace(Dm, `
`).replace(wm, "");
  }
  function Pd(t, e) {
    return e = Id(e), Id(t) === e;
  }
  function Ct(t, e, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || ea(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && ea(t, "" + l);
        break;
      case "className":
        lt(t, "class", l);
        break;
      case "tabIndex":
        lt(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        lt(t, a, l);
        break;
      case "style":
        Qa(t, l, i);
        break;
      case "data":
        if (e !== "object") {
          lt(t, "data", l);
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
        l = tu("" + l), t.setAttribute(a, l);
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
          typeof i == "function" && (a === "formAction" ? (e !== "input" && Ct(t, e, "name", n.name, n, null), Ct(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Ct(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Ct(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Ct(t, e, "encType", n.encType, n, null), Ct(t, e, "method", n.method, n, null), Ct(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = tu("" + l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = ya);
        break;
      case "onScroll":
        l != null && ot("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ot("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(r(60));
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
        a = tu("" + l), t.setAttributeNS(
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
        ot("beforetoggle", t), ot("toggle", t), Z(t, "popover", l);
        break;
      case "xlinkActuate":
        yt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        yt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        yt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        yt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        yt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        yt(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        yt(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        yt(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        yt(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Z(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Nl.get(a) || a, Z(t, a, l));
    }
  }
  function rr(t, e, a, l, n, i) {
    switch (a) {
      case "style":
        Qa(t, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? ea(t, l) : (typeof l == "number" || typeof l == "bigint") && ea(t, "" + l);
        break;
      case "onScroll":
        l != null && ot("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ot("scrollend", t);
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
        if (!Pi.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), e = a.slice(2, n ? a.length - 7 : void 0), i = t[he] || null, i = i != null ? i[a] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof l == "function")) {
              typeof i != "function" && i !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, n);
              break t;
            }
            a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : Z(t, a, l);
          }
    }
  }
  function oe(t, e, a) {
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
        ot("error", t), ot("load", t);
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
                  throw Error(r(137, e));
                default:
                  Ct(t, e, i, u, a, null);
              }
          }
        n && Ct(t, e, "srcSet", a.srcSet, a, null), l && Ct(t, e, "src", a.src, a, null);
        return;
      case "input":
        ot("invalid", t);
        var s = i = u = n = null, m = null, x = null;
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
                  s = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ct(t, e, l, N, a, null);
              }
          }
        Xa(
          t,
          i,
          s,
          m,
          x,
          u,
          n,
          !1
        );
        return;
      case "select":
        ot("invalid", t), l = u = i = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (s = a[n], s != null))
            switch (n) {
              case "value":
                i = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                l = s;
              default:
                Ct(t, e, n, s, a, null);
            }
        e = i, a = u, t.multiple = !!l, e != null ? ca(t, !!l, e, !1) : a != null && ca(t, !!l, a, !0);
        return;
      case "textarea":
        ot("invalid", t), i = n = l = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (s = a[u], s != null))
            switch (u) {
              case "value":
                l = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                i = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                Ct(t, e, u, s, a, null);
            }
        ce(t, l, n, i);
        return;
      case "option":
        for (m in a)
          a.hasOwnProperty(m) && (l = a[m], l != null) && (m === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Ct(t, e, m, l, a, null));
        return;
      case "dialog":
        ot("beforetoggle", t), ot("toggle", t), ot("cancel", t), ot("close", t);
        break;
      case "iframe":
      case "object":
        ot("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ci.length; l++)
          ot(Ci[l], t);
        break;
      case "image":
        ot("error", t), ot("load", t);
        break;
      case "details":
        ot("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ot("error", t), ot("load", t);
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
                throw Error(r(137, e));
              default:
                Ct(t, e, x, l, a, null);
            }
        return;
      default:
        if (In(e)) {
          for (N in a)
            a.hasOwnProperty(N) && (l = a[N], l !== void 0 && rr(
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
    for (s in a)
      a.hasOwnProperty(s) && (l = a[s], l != null && Ct(t, e, s, l, a, null));
  }
  function qm(t, e, a, l) {
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
        var n = null, i = null, u = null, s = null, m = null, x = null, N = null;
        for (z in a) {
          var O = a[z];
          if (a.hasOwnProperty(z) && O != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = O;
              default:
                l.hasOwnProperty(z) || Ct(t, e, z, null, l, O);
            }
        }
        for (var S in l) {
          var z = l[S];
          if (O = a[S], l.hasOwnProperty(S) && (z != null || O != null))
            switch (S) {
              case "type":
                i = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                x = z;
                break;
              case "defaultChecked":
                N = z;
                break;
              case "value":
                u = z;
                break;
              case "defaultValue":
                s = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(r(137, e));
                break;
              default:
                z !== O && Ct(
                  t,
                  e,
                  S,
                  z,
                  l,
                  O
                );
            }
        }
        ge(
          t,
          u,
          s,
          m,
          x,
          N,
          i,
          n
        );
        return;
      case "select":
        z = u = s = S = null;
        for (i in a)
          if (m = a[i], a.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                z = m;
              default:
                l.hasOwnProperty(i) || Ct(
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
                s = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== m && Ct(
                  t,
                  e,
                  n,
                  i,
                  l,
                  m
                );
            }
        e = s, a = u, l = z, S != null ? ca(t, !!a, S, !1) : !!l != !!a && (e != null ? ca(t, !!a, e, !0) : ca(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        z = S = null;
        for (s in a)
          if (n = a[s], a.hasOwnProperty(s) && n != null && !l.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, s, null, l, n);
            }
        for (u in l)
          if (n = l[u], i = a[u], l.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                z = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && Ct(t, e, u, n, l, i);
            }
        en(t, S, z);
        return;
      case "option":
        for (var K in a)
          S = a[K], a.hasOwnProperty(K) && S != null && !l.hasOwnProperty(K) && (K === "selected" ? t.selected = !1 : Ct(
            t,
            e,
            K,
            null,
            l,
            S
          ));
        for (m in l)
          S = l[m], z = a[m], l.hasOwnProperty(m) && S !== z && (S != null || z != null) && (m === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : Ct(
            t,
            e,
            m,
            S,
            l,
            z
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
          S = a[_], a.hasOwnProperty(_) && S != null && !l.hasOwnProperty(_) && Ct(t, e, _, null, l, S);
        for (x in l)
          if (S = l[x], z = a[x], l.hasOwnProperty(x) && S !== z && (S != null || z != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(r(137, e));
                break;
              default:
                Ct(
                  t,
                  e,
                  x,
                  S,
                  l,
                  z
                );
            }
        return;
      default:
        if (In(e)) {
          for (var jt in a)
            S = a[jt], a.hasOwnProperty(jt) && S !== void 0 && !l.hasOwnProperty(jt) && rr(
              t,
              e,
              jt,
              void 0,
              l,
              S
            );
          for (N in l)
            S = l[N], z = a[N], !l.hasOwnProperty(N) || S === z || S === void 0 && z === void 0 || rr(
              t,
              e,
              N,
              S,
              l,
              z
            );
          return;
        }
    }
    for (var g in a)
      S = a[g], a.hasOwnProperty(g) && S != null && !l.hasOwnProperty(g) && Ct(t, e, g, null, l, S);
    for (O in l)
      S = l[O], z = a[O], !l.hasOwnProperty(O) || S === z || S == null && z == null || Ct(t, e, O, S, l, z);
  }
  function _d(t) {
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
  function Rm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], i = n.transferSize, u = n.initiatorType, s = n.duration;
        if (i && s && _d(u)) {
          for (u = 0, s = n.responseEnd, l += 1; l < a.length; l++) {
            var m = a[l], x = m.startTime;
            if (x > s) break;
            var N = m.transferSize, O = m.initiatorType;
            N && _d(O) && (m = m.responseEnd, u += N * (m < s ? 1 : (s - x) / (m - x)));
          }
          if (--l, e += 8 * (i + u) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var fr = null, or = null;
  function Fu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function $d(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function t0(t, e) {
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
  function dr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var hr = null;
  function Bm() {
    var t = window.event;
    return t && t.type === "popstate" ? t === hr ? !1 : (hr = t, !0) : (hr = null, !1);
  }
  var e0 = typeof setTimeout == "function" ? setTimeout : void 0, km = typeof clearTimeout == "function" ? clearTimeout : void 0, a0 = typeof Promise == "function" ? Promise : void 0, Ym = typeof queueMicrotask == "function" ? queueMicrotask : typeof a0 < "u" ? function(t) {
    return a0.resolve(null).then(t).catch(Lm);
  } : e0;
  function Lm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ol(t) {
    return t === "head";
  }
  function l0(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(n), wn(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Oi(t.ownerDocument.documentElement);
        else if (a === "head") {
          a = t.ownerDocument.head, Oi(a);
          for (var i = a.firstChild; i; ) {
            var u = i.nextSibling, s = i.nodeName;
            i[ia] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = u;
          }
        } else
          a === "body" && Oi(t.ownerDocument.body);
      a = n;
    } while (a);
    wn(e);
  }
  function n0(t, e) {
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
  function mr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mr(a), Ga(a);
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
  function Hm(t, e, a, l) {
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
  function Vm(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function i0(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function pr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function vr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Gm(t, e) {
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
  var gr = null;
  function u0(t) {
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
  function c0(t) {
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
  function s0(t, e, a) {
    switch (e = Fu(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Oi(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ga(t);
  }
  var Qe = /* @__PURE__ */ new Map(), r0 = /* @__PURE__ */ new Set();
  function Iu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var qa = q.d;
  q.d = {
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
    var t = qa.f(), e = Vu();
    return t || e;
  }
  function Km(t) {
    var e = Za(t);
    e !== null && e.tag === 5 && e.type === "form" ? Mo(e) : qa.r(t);
  }
  var jn = typeof document > "u" ? null : document;
  function f0(t, e, a) {
    var l = jn;
    if (l && typeof e == "string" && e) {
      var n = Wt(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), r0.has(n) || (r0.add(n), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(n) === null && (e = l.createElement("link"), oe(e, "link", t), $t(e), l.head.appendChild(e)));
    }
  }
  function Xm(t) {
    qa.D(t), f0("dns-prefetch", t, null);
  }
  function Jm(t, e) {
    qa.C(t, e), f0("preconnect", t, e);
  }
  function Qm(t, e, a) {
    qa.L(t, e, a);
    var l = jn;
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
          i = On(t);
          break;
        case "script":
          i = Dn(t);
      }
      Qe.has(i) || (t = B(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), Qe.set(i, t), l.querySelector(n) !== null || e === "style" && l.querySelector(Di(i)) || e === "script" && l.querySelector(wi(i)) || (e = l.createElement("link"), oe(e, "link", t), $t(e), l.head.appendChild(e)));
    }
  }
  function Wm(t, e) {
    qa.m(t, e);
    var a = jn;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Wt(l) + '"][href="' + Wt(t) + '"]', i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Dn(t);
      }
      if (!Qe.has(i) && (t = B({ rel: "modulepreload", href: t }, e), Qe.set(i, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(wi(i)))
              return;
        }
        l = a.createElement("link"), oe(l, "link", t), $t(l), a.head.appendChild(l);
      }
    }
  }
  function Fm(t, e, a) {
    qa.S(t, e, a);
    var l = jn;
    if (l && t) {
      var n = Ka(l).hoistableStyles, i = On(t);
      e = e || "default";
      var u = n.get(i);
      if (!u) {
        var s = { loading: 0, preload: null };
        if (u = l.querySelector(
          Di(i)
        ))
          s.loading = 5;
        else {
          t = B(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = Qe.get(i)) && yr(t, a);
          var m = u = l.createElement("link");
          $t(m), oe(m, "link", t), m._p = new Promise(function(x, N) {
            m.onload = x, m.onerror = N;
          }), m.addEventListener("load", function() {
            s.loading |= 1;
          }), m.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Pu(u, e, l);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: s
        }, n.set(i, u);
      }
    }
  }
  function Im(t, e) {
    qa.X(t, e);
    var a = jn;
    if (a && t) {
      var l = Ka(a).hoistableScripts, n = Dn(t), i = l.get(n);
      i || (i = a.querySelector(wi(n)), i || (t = B({ src: t, async: !0 }, e), (e = Qe.get(n)) && br(t, e), i = a.createElement("script"), $t(i), oe(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function Pm(t, e) {
    qa.M(t, e);
    var a = jn;
    if (a && t) {
      var l = Ka(a).hoistableScripts, n = Dn(t), i = l.get(n);
      i || (i = a.querySelector(wi(n)), i || (t = B({ src: t, async: !0, type: "module" }, e), (e = Qe.get(n)) && br(t, e), i = a.createElement("script"), $t(i), oe(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function o0(t, e, a, l) {
    var n = (n = J.current) ? Iu(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = On(a.href), a = Ka(
          n
        ).hoistableStyles, l = a.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = On(a.href);
          var i = Ka(
            n
          ).hoistableStyles, u = i.get(t);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, u), (i = n.querySelector(
            Di(t)
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
            throw Error(r(528, ""));
          return u;
        }
        if (e && l !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Dn(a), a = Ka(
          n
        ).hoistableScripts, l = a.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function On(t) {
    return 'href="' + Wt(t) + '"';
  }
  function Di(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function d0(t) {
    return B({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function _m(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), oe(e, "link", a), $t(e), t.head.appendChild(e));
  }
  function Dn(t) {
    return '[src="' + Wt(t) + '"]';
  }
  function wi(t) {
    return "script[async]" + t;
  }
  function h0(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Wt(a.href) + '"]'
          );
          if (l)
            return e.instance = l, $t(l), l;
          var n = B({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), $t(l), oe(l, "style", n), Pu(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          n = On(a.href);
          var i = t.querySelector(
            Di(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, $t(i), i;
          l = d0(a), (n = Qe.get(n)) && yr(l, n), i = (t.ownerDocument || t).createElement("link"), $t(i);
          var u = i;
          return u._p = new Promise(function(s, m) {
            u.onload = s, u.onerror = m;
          }), oe(i, "link", l), e.state.loading |= 4, Pu(i, a.precedence, t), e.instance = i;
        case "script":
          return i = Dn(a.src), (n = t.querySelector(
            wi(i)
          )) ? (e.instance = n, $t(n), n) : (l = a, (n = Qe.get(i)) && (l = B({}, a), br(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), $t(n), oe(n, "link", l), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Pu(l, a.precedence, t));
    return e.instance;
  }
  function Pu(t, e, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, i = n, u = 0; u < l.length; u++) {
      var s = l[u];
      if (s.dataset.precedence === e) i = s;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function yr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function br(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var _u = null;
  function m0(t, e, a) {
    if (_u === null) {
      var l = /* @__PURE__ */ new Map(), n = _u = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = _u, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var i = a[n];
      if (!(i[ia] || i[Qt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var s = l.get(u);
        s ? s.push(i) : l.set(u, [i]);
      }
    }
    return l;
  }
  function p0(t, e, a) {
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
  function v0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function tp(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = On(l.href), i = e.querySelector(
          Di(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = $u.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = i, $t(i);
          return;
        }
        i = e.ownerDocument || e, l = d0(l), (n = Qe.get(n)) && yr(l, n), i = i.createElement("link"), $t(i);
        var u = i;
        u._p = new Promise(function(s, m) {
          u.onload = s, u.onerror = m;
        }), oe(i, "link", l), a.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = $u.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var xr = 0;
  function ep(t, e) {
    return t.stylesheets && t.count === 0 && ec(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && ec(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && xr === 0 && (xr = 62500 * Rm());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ec(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > xr ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function $u() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ec(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var tc = null;
  function ec(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, tc = /* @__PURE__ */ new Map(), e.forEach(ap, t), tc = null, $u.call(t));
  }
  function ap(t, e) {
    if (!(e.state.loading & 4)) {
      var a = tc.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), tc.set(t, a);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (a.set(u.dataset.precedence, u), l = u);
        }
        l && a.set(null, l);
      }
      n = e.instance, u = n.getAttribute("data-precedence"), i = a.get(u) || l, i === l && a.set(null, n), a.set(u, n), this.count++, l = $u.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var qi = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function lp(t, e, a, l, n, i, u, s, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.hiddenUpdates = Fl(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function g0(t, e, a, l, n, i, u, s, m, x, N, O) {
    return t = new lp(
      t,
      e,
      a,
      u,
      m,
      x,
      N,
      O,
      s
    ), e = 1, i === !0 && (e |= 24), i = Ue(3, null, null, e), t.current = i, i.stateNode = t, e = $c(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, ls(i), t;
  }
  function y0(t) {
    return t ? (t = rn, t) : rn;
  }
  function b0(t, e, a, l, n, i) {
    n = y0(n), l.context === null ? l.context = n : l.pendingContext = n, l = tl(e), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = el(t, l, e), a !== null && (Me(a, t, e), di(a, t, e));
  }
  function x0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Sr(t, e) {
    x0(t, e), (t = t.alternate) && x0(t, e);
  }
  function S0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ol(t, 67108864);
      e !== null && Me(e, t, 67108864), Sr(t, 67108864);
    }
  }
  function E0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = we();
      e = Wn(e);
      var a = Ol(t, e);
      a !== null && Me(a, t, e), Sr(t, e);
    }
  }
  var ac = !0;
  function np(t, e, a, l) {
    var n = M.T;
    M.T = null;
    var i = q.p;
    try {
      q.p = 2, Er(t, e, a, l);
    } finally {
      q.p = i, M.T = n;
    }
  }
  function ip(t, e, a, l) {
    var n = M.T;
    M.T = null;
    var i = q.p;
    try {
      q.p = 8, Er(t, e, a, l);
    } finally {
      q.p = i, M.T = n;
    }
  }
  function Er(t, e, a, l) {
    if (ac) {
      var n = Ar(l);
      if (n === null)
        sr(
          t,
          e,
          l,
          lc,
          a
        ), z0(t, l);
      else if (cp(
        n,
        t,
        e,
        a,
        l
      ))
        l.stopPropagation();
      else if (z0(t, l), e & 4 && -1 < up.indexOf(t)) {
        for (; n !== null; ) {
          var i = Za(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Be(i.pendingLanes);
                  if (u !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var m = 1 << 31 - ee(u);
                      s.entanglements[1] |= m, u &= ~m;
                    }
                    oa(i), (zt & 6) === 0 && (Lu = ne() + 500, Ui(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Ol(i, 2), s !== null && Me(s, i, 2), Vu(), Sr(i, 2);
            }
          if (i = Ar(l), i === null && sr(
            t,
            e,
            l,
            lc,
            a
          ), i === n) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else
        sr(
          t,
          e,
          l,
          null,
          a
        );
    }
  }
  function Ar(t) {
    return t = Tc(t), zr(t);
  }
  var lc = null;
  function zr(t) {
    if (lc = null, t = ua(t), t !== null) {
      var e = E(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = T(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = L(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return lc = t, null;
  }
  function A0(t) {
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
          case Ql:
            return 2;
          case Kn:
            return 8;
          case ka:
          case Xn:
            return 32;
          case ha:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Tr = !1, dl = null, hl = null, ml = null, Ri = /* @__PURE__ */ new Map(), Bi = /* @__PURE__ */ new Map(), pl = [], up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function z0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        dl = null;
        break;
      case "dragenter":
      case "dragleave":
        hl = null;
        break;
      case "mouseover":
      case "mouseout":
        ml = null;
        break;
      case "pointerover":
      case "pointerout":
        Ri.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bi.delete(e.pointerId);
    }
  }
  function ki(t, e, a, l, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = Za(e), e !== null && S0(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function cp(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return dl = ki(
          dl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return hl = ki(
          hl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return ml = ki(
          ml,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Ri.set(
          i,
          ki(
            Ri.get(i) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Bi.set(
          i,
          ki(
            Bi.get(i) || null,
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
  function T0(t) {
    var e = ua(t.target);
    if (e !== null) {
      var a = E(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = T(a), e !== null) {
            t.blockedOn = e, Wi(t.priority, function() {
              E0(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = L(a), e !== null) {
            t.blockedOn = e, Wi(t.priority, function() {
              E0(a);
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
  function nc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Ar(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        zc = l, a.target.dispatchEvent(l), zc = null;
      } else
        return e = Za(a), e !== null && S0(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function M0(t, e, a) {
    nc(t) && a.delete(e);
  }
  function sp() {
    Tr = !1, dl !== null && nc(dl) && (dl = null), hl !== null && nc(hl) && (hl = null), ml !== null && nc(ml) && (ml = null), Ri.forEach(M0), Bi.forEach(M0);
  }
  function ic(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Tr || (Tr = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      sp
    )));
  }
  var uc = null;
  function N0(t) {
    uc !== t && (uc = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        uc === t && (uc = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], n = t[e + 2];
          if (typeof l != "function") {
            if (zr(l || a) === null)
              continue;
            break;
          }
          var i = Za(a);
          i !== null && (t.splice(e, 3), e -= 3, As(
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
  function wn(t) {
    function e(m) {
      return ic(m, t);
    }
    dl !== null && ic(dl, t), hl !== null && ic(hl, t), ml !== null && ic(ml, t), Ri.forEach(e), Bi.forEach(e);
    for (var a = 0; a < pl.length; a++) {
      var l = pl[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < pl.length && (a = pl[0], a.blockedOn === null); )
      T0(a), a.blockedOn === null && pl.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], i = a[l + 1], u = n[he] || null;
        if (typeof i == "function")
          u || N0(a);
        else if (u) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, u = i[he] || null)
              s = u.formAction;
            else if (zr(n) !== null) continue;
          } else s = u.action;
          typeof s == "function" ? a[l + 1] = s : (a.splice(l, 3), l -= 3), N0(a);
        }
      }
  }
  function U0() {
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
  function Mr(t) {
    this._internalRoot = t;
  }
  cc.prototype.render = Mr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var a = e.current, l = we();
    b0(a, l, t, e, null, null);
  }, cc.prototype.unmount = Mr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      b0(t.current, 2, null, t, null, null), Vu(), e[Ha] = null;
    }
  };
  function cc(t) {
    this._internalRoot = t;
  }
  cc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Qi();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < pl.length && e !== 0 && e < pl[a].priority; a++) ;
      pl.splice(a, 0, t), a === 0 && T0(t);
    }
  };
  var C0 = c.version;
  if (C0 !== "19.2.8")
    throw Error(
      r(
        527,
        C0,
        "19.2.8"
      )
    );
  q.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = y(e), t = t !== null ? H(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var rp = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sc.isDisabled && sc.supportsFiber)
      try {
        ie = sc.inject(
          rp
        ), Jt = sc;
      } catch {
      }
  }
  return Li.createRoot = function(t, e) {
    if (!p(t)) throw Error(r(299));
    var a = !1, l = "", n = Bo, i = ko, u = Yo;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (u = e.onRecoverableError)), e = g0(
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
      U0
    ), t[Ha] = e.current, cr(t), new Mr(e);
  }, Li.hydrateRoot = function(t, e, a) {
    if (!p(t)) throw Error(r(299));
    var l = !1, n = "", i = Bo, u = ko, s = Yo, m = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (u = a.onCaughtError), a.onRecoverableError !== void 0 && (s = a.onRecoverableError), a.formState !== void 0 && (m = a.formState)), e = g0(
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
      s,
      U0
    ), e.context = y0(null), a = e.current, l = we(), l = Wn(l), n = tl(l), n.callback = null, el(a, n, l), a = l, e.current.lanes = a, La(e, a), oa(e), t[Ha] = e.current, cr(t), new cc(e);
  }, Li.version = "19.2.8", Li;
}
var L0;
function bp() {
  if (L0) return Cr.exports;
  L0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (c) {
        console.error(c);
      }
  }
  return f(), Cr.exports = yp(), Cr.exports;
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
function Zi(f, c) {
  return ((f?.attributes.supported_features ?? 0) & c) !== 0;
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
  playing: c,
  showPlayButton: d,
  onPlayPause: r,
  onPrevious: p,
  onNext: E,
  onVolume: T
}) {
  const L = f?.attributes, U = L?.volume_level ?? 0, y = L?.is_volume_muted === !0, H = Zi(f, qe.VOLUME_SET), B = Zi(f, qe.PREVIOUS_TRACK), G = Zi(f, qe.NEXT_TRACK);
  return /* @__PURE__ */ o.jsxs("div", { className: "controls", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau précédent",
        title: "Précédent",
        disabled: !B,
        onClick: p,
        children: /* @__PURE__ */ o.jsx(da, { d: Fe.prev })
      }
    ),
    d && /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "iconbtn iconbtn--play",
        "aria-label": c ? "Pause" : "Lecture",
        title: c ? "Pause" : "Lecture",
        onClick: r,
        children: /* @__PURE__ */ o.jsx(da, { d: c ? Fe.pause : Fe.play })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau suivant",
        title: "Suivant",
        disabled: !G,
        onClick: E,
        children: /* @__PURE__ */ o.jsx(da, { d: Fe.next })
      }
    ),
    H && /* @__PURE__ */ o.jsxs("div", { className: "volume", children: [
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
  onLibrary: c,
  onQueue: d,
  onSpeakers: r,
  queueOn: p,
  onSettings: E,
  onLyrics: T,
  onShuffle: L,
  onRepeat: U,
  lyricsOn: y,
  lyricsAvailable: H,
  name: B
}) {
  const G = f?.attributes, $ = G?.shuffle === !0, V = G?.repeat ?? "off", k = Zi(f, qe.SHUFFLE_SET), P = Zi(f, qe.REPEAT_SET);
  return /* @__PURE__ */ o.jsxs("div", { className: "hud__top", children: [
    /* @__PURE__ */ o.jsxs("span", { className: "hud__left", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-label": "Bibliothèque",
          title: "Bibliothèque",
          onClick: c,
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.crate })
        }
      ),
      /* @__PURE__ */ o.jsxs("button", { className: "hud__room", onClick: r, title: "Changer d'enceinte", children: [
        /* @__PURE__ */ o.jsx("span", { className: "hud__name", children: B }),
        /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "hud__chev", children: /* @__PURE__ */ o.jsx("path", { d: "M7 10l5 5 5-5z", fill: "currentColor" }) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("span", { className: "hud__tools", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": p,
          "aria-label": "File d'attente",
          title: "À suivre",
          onClick: d,
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.queue })
        }
      ),
      k && /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": $,
          "aria-label": "Lecture aléatoire",
          title: "Lecture aléatoire",
          onClick: () => L(!$),
          children: /* @__PURE__ */ o.jsx(da, { d: Fe.shuffle })
        }
      ),
      P && /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": V !== "off",
          "aria-label": "Répétition",
          title: V === "one" ? "Répéter ce morceau" : V === "all" ? "Répéter tout" : "Répétition",
          onClick: U,
          children: [
            /* @__PURE__ */ o.jsx(da, { d: Fe.repeat }),
            V === "one" && /* @__PURE__ */ o.jsx("span", { className: "badge-one", children: "1" })
          ]
        }
      ),
      H && /* @__PURE__ */ o.jsx(
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
const yl = {
  a: "hsl(220 4% 46%)",
  b: "hsl(220 5% 34%)",
  deep: "hsl(220 6% 14%)",
  text: "hsl(0 0% 100%)",
  isDark: !0
}, qn = 40, Hi = /* @__PURE__ */ new Map();
async function I0(f) {
  const c = Hi.get(f);
  if (c) return c;
  try {
    const d = await Ap(f), r = zp(d);
    return Hi.set(f, r), Hi.size > 60 && Hi.delete(Hi.keys().next().value), r;
  } catch {
    return yl;
  }
}
function Ap(f) {
  return new Promise((c, d) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.decoding = "async", r.onload = () => c(r), r.onerror = () => d(new Error("image illisible")), r.src = f;
  });
}
function zp(f) {
  const c = document.createElement("canvas");
  c.width = qn, c.height = qn;
  const d = c.getContext("2d", { willReadFrequently: !0 });
  if (!d) return yl;
  d.drawImage(f, 0, 0, qn, qn);
  const { data: r } = d.getImageData(0, 0, qn, qn), p = /* @__PURE__ */ new Map();
  let E = 0, T = 0;
  for (let V = 0; V < r.length; V += 4) {
    if ((r[V + 3] ?? 0) < 200) continue;
    const P = r[V] ?? 0, at = r[V + 1] ?? 0, gt = r[V + 2] ?? 0;
    E += (0.2126 * P + 0.7152 * at + 0.0722 * gt) / 255, T++;
    const F = P >> 5 << 10 | at >> 5 << 5 | gt >> 5, pt = p.get(F);
    pt ? (pt.count++, pt.r += P, pt.g += at, pt.b += gt) : p.set(F, { count: 1, r: P, g: at, b: gt });
  }
  if (T === 0) return yl;
  const L = [...p.values()].map((V) => {
    const k = V.r / V.count, P = V.g / V.count, at = V.b / V.count, [gt, F, pt] = Np(k, P, at);
    return { h: gt, s: F, l: pt, count: V.count, score: Tp(V.count, F, pt) };
  }).sort((V, k) => k.score - V.score), U = L[0];
  if (!U) return yl;
  const y = L.find((V) => Mp(V.h, U.h) > 35 && V.score > U.score * 0.12) ?? L.find((V) => Math.abs(V.l - U.l) > 0.18) ?? null, B = E / T < 0.55, G = rc(U.h, Kl(U.s, 0.18, 0.85), Kl(U.l, 0.3, 0.62)), $ = y ? rc(y.h, Kl(y.s, 0.15, 0.8), Kl(y.l, 0.22, 0.55)) : rc((U.h + 28) % 360, Kl(U.s * 0.8, 0.12, 0.7), Kl(U.l - 0.14, 0.18, 0.5));
  return {
    a: G,
    b: $,
    deep: rc(U.h, Kl(U.s * 0.55, 0.08, 0.4), 0.13),
    text: "hsl(0 0% 100%)",
    isDark: B
  };
}
function Tp(f, c, d) {
  const r = 0.25 + c * 1.75, p = 1 - Math.pow(Math.abs(d - 0.5) * 2, 1.6);
  return f * r * Math.max(p, 0.05);
}
function Mp(f, c) {
  const d = Math.abs(f - c) % 360;
  return d > 180 ? 360 - d : d;
}
function Kl(f, c, d) {
  return Math.min(d, Math.max(c, f));
}
function rc(f, c, d) {
  return `hsl(${Math.round(f)} ${Math.round(c * 100)}% ${Math.round(d * 100)}%)`;
}
function Np(f, c, d) {
  f /= 255, c /= 255, d /= 255;
  const r = Math.max(f, c, d), p = Math.min(f, c, d), E = (r + p) / 2, T = r - p;
  if (T === 0) return [0, 0, E];
  const L = E > 0.5 ? T / (2 - r - p) : T / (r + p);
  let U;
  return r === f ? U = ((c - d) / T + (c < d ? 6 : 0)) * 60 : r === c ? U = ((d - f) / T + 2) * 60 : U = ((f - c) / T + 4) * 60, [U, L, E];
}
const H0 = 7, wr = 5, qr = 8, Rr = 1.6, Up = 0.5, Cp = 0.25, V0 = 0.5, fc = 2;
function jp({
  albums: f,
  loading: c,
  error: d,
  onPlay: r,
  onClose: p,
  resumeIndex: E,
  onFocusChange: T,
  query: L,
  onQuery: U,
  searching: y,
  zoom: H
}) {
  const [B, G] = C.useState(E ?? 0), [, $] = C.useState(null), [V, k] = C.useState(!1), [P, at] = C.useState({}), gt = C.useRef(null), F = C.useRef(E ?? 0), pt = C.useRef(!1), Et = C.useRef(0), Yt = C.useRef(!1), tt = C.useRef(!1), rt = f.length, wt = Math.max(0, rt - 1), le = C.useMemo(() => {
    const R = Math.max(0, B - H0 - wr), h = Math.min(wt, B + H0 + wr);
    return f.slice(R, h + 1).map((A, w) => ({ album: A, index: R + w }));
  }, [f, B, wt]);
  C.useEffect(() => {
    let R = !0;
    for (const { album: h } of le)
      !h.image || h.uri in P || I0(h.image).then((A) => {
        R && at((w) => h.uri in w ? w : { ...w, [h.uri]: A });
      });
    return () => {
      R = !1;
    };
  }, [le, P]);
  const Xt = C.useRef({ cover: 0, radius: 0 }), st = C.useCallback(() => {
    const R = gt.current;
    if (!R) return;
    const h = R.getBoundingClientRect();
    if (h.width === 0 || h.height === 0) return;
    const A = Math.min(h.height * 0.72, h.width * 0.42), w = Math.round(
      Math.max(90, Math.min(h.height * 0.94, h.width * 0.6, A * H))
    );
    R.style.setProperty("--cover", w + "px"), Xt.current = { cover: w, radius: w * Rr };
  }, []), At = C.useCallback((R) => {
    F.current = R;
    const h = gt.current;
    if (!h) return;
    h.dataset.offset = R.toFixed(4);
    const { radius: A } = Xt.current;
    if (A)
      for (const w of h.children) {
        const Y = w, X = Number(Y.dataset.i);
        if (!Number.isFinite(X)) continue;
        const J = X - R, et = J * qr, dt = et * Math.PI / 180;
        Y.style.transform = `translateX(${(Math.sin(dt) * A).toFixed(2)}px) translateZ(${((Math.cos(dt) - 1) * A).toFixed(2)}px) rotateY(${(90 + et).toFixed(3)}deg)`, Y.style.zIndex = String(100 - Math.round(Math.abs(J)));
        const bt = Math.min(0.22, Math.abs(J) * 0.013).toFixed(3), ve = Y.getElementsByClassName("crate__depth");
        for (const de of ve) de.style.opacity = bt;
      }
  }, []);
  C.useEffect(() => {
    st(), At(F.current);
    const R = () => {
      st(), At(F.current);
    };
    return window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, [st, At, rt]), C.useEffect(() => {
    if (pt.current || rt === 0) return;
    pt.current = !0;
    const R = E ?? Math.floor(rt / 2);
    At(R), G(R);
  }, [rt, E, At]);
  const qt = C.useRef(!1);
  C.useEffect(() => {
    const R = L.trim().length > 0;
    !R && !qt.current || (qt.current = R, Et.current = 0, At(0), G(0));
  }, [L, rt, At]), C.useEffect(() => {
    let R = 0, h = performance.now(), A = -1;
    const w = (Y) => {
      const X = Math.min(0.05, (Y - h) / 1e3);
      h = Y;
      let J = F.current;
      if (!Yt.current) {
        if (Math.abs(Et.current) > Cp)
          J = F.current + Et.current * X, Et.current *= Math.exp(-X / Up), (J < 0 || J > wt) && (J = Math.max(0, Math.min(wt, J)), Et.current = 0);
        else if (rt > 0) {
          Et.current = 0;
          const dt = Math.max(0, Math.min(wt, Math.round(F.current))), bt = dt - F.current;
          J = Math.abs(bt) > 8e-4 ? F.current + bt * (1 - Math.exp(-X / 0.16)) : dt;
        }
      }
      At(J);
      const et = Math.round(F.current);
      et !== A && (A !== -1 && navigator.vibrate?.(8), A = et, T(et), G((dt) => Math.abs(et - dt) >= wr ? et : dt)), R = requestAnimationFrame(w);
    };
    return R = requestAnimationFrame(w), () => cancelAnimationFrame(R);
  }, [rt, wt, At, T]);
  const Ht = () => {
    const { cover: R } = Xt.current;
    return R ? R * Rr * (qr * Math.PI / 180) : 1;
  }, M = (R) => {
    const h = R.clientX, A = F.current, w = Ht();
    let Y = h, X = performance.now(), J = !1;
    Yt.current = !0, tt.current = !1, Et.current = 0;
    const et = (bt) => {
      const ve = bt.clientX - h;
      if (!J && Math.abs(ve) < 4) return;
      J = !0, tt.current = !0;
      let de = A - ve / w * V0;
      de < 0 ? de = de * 0.35 : de > wt && (de = wt + (de - wt) * 0.35), At(de);
      const Ra = performance.now(), xl = (Ra - X) / 1e3;
      if (xl > 8e-3) {
        const Re = -((bt.clientX - Y) / w * V0) / xl;
        Et.current = Math.max(-fc, Math.min(fc, Re)), Y = bt.clientX, X = Ra;
      }
    }, dt = () => {
      Yt.current = !1, J ? window.setTimeout(() => tt.current = !1, 0) : Et.current = 0, window.removeEventListener("pointermove", et), window.removeEventListener("pointerup", dt), window.removeEventListener("pointercancel", dt);
    };
    window.addEventListener("pointermove", et), window.addEventListener("pointerup", dt), window.addEventListener("pointercancel", dt);
  }, q = C.useCallback(
    (R) => {
      Et.current = 0;
      const h = Math.max(0, Math.min(wt, R)), A = F.current, w = performance.now(), Y = (X) => {
        const J = Math.min(1, (X - w) / 420), et = 1 - Math.pow(1 - J, 3);
        At(A + (h - A) * et), J < 1 && requestAnimationFrame(Y);
      };
      requestAnimationFrame(Y);
    },
    [wt, At]
  ), W = (R) => {
    const h = Math.abs(R.deltaX) > Math.abs(R.deltaY) ? R.deltaX : R.deltaY;
    Et.current = Math.max(-fc, Math.min(fc, Et.current + h * 5e-3));
  };
  C.useEffect(() => {
    const R = (h) => {
      h.key === "ArrowRight" ? q(Math.round(F.current) + 1) : h.key === "ArrowLeft" ? q(Math.round(F.current) - 1) : h.key === "Escape" && p();
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [q, p]);
  const it = (R, h) => {
    if (tt.current) return;
    const A = f[R];
    !A || V || (k(!0), $(R), r(A, h));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "library", children: [
    /* @__PURE__ */ o.jsxs("header", { className: "library__head", children: [
      /* @__PURE__ */ o.jsx("button", { className: "iconbtn iconbtn--small", onClick: p, "aria-label": "Retour à la platine", children: /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M14.6 5.4 8 12l6.6 6.6 1.6-1.6-5-5 5-5z", fill: "currentColor" }) }) }),
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
            value: L,
            placeholder: "Chercher un album, un artiste…",
            "aria-label": "Chercher dans Deezer",
            onChange: (R) => U(R.target.value)
          }
        ),
        L && /* @__PURE__ */ o.jsx("button", { type: "button", onClick: () => U(""), "aria-label": "Effacer la recherche", children: "×" })
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "library__count", children: c || y ? "recherche…" : `${rt} album${rt > 1 ? "s" : ""}` })
    ] }),
    d && /* @__PURE__ */ o.jsx("p", { className: "library__error", children: d }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "crate",
        ref: gt,
        onPointerDown: M,
        onWheel: W,
        style: { "--arc": `${qr}deg`, "--radius-k": Rr },
        children: le.map(({ album: R, index: h }) => /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "crate__item",
            "data-i": h,
            onClick: (A) => it(h, A.currentTarget),
            role: "button",
            tabIndex: 0,
            onKeyDown: (A) => A.key === "Enter" && it(h, A.currentTarget),
            children: [
              ["front", "back"].map((A) => /* @__PURE__ */ o.jsxs("div", { className: `crate__face crate__face--${A}`, children: [
                R.image ? /* @__PURE__ */ o.jsx("img", { className: "crate__art", src: R.image, alt: "", draggable: !1 }) : /* @__PURE__ */ o.jsx("div", { className: "crate__art crate__art--empty" }),
                /* @__PURE__ */ o.jsx("div", { className: "crate__shade" }),
                /* @__PURE__ */ o.jsx("div", { className: "crate__depth" })
              ] }, A)),
              /* @__PURE__ */ o.jsx("div", { className: "crate__spine", children: /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "crate__spineFace",
                  style: {
                    "--spine-a": (P[R.uri] ?? yl).b,
                    "--spine-b": (P[R.uri] ?? yl).deep
                  },
                  children: /* @__PURE__ */ o.jsxs(
                    "div",
                    {
                      className: "crate__label",
                      "data-ink": P[R.uri]?.isDark === !1 ? "dark" : "light",
                      children: [
                        /* @__PURE__ */ o.jsx("b", { children: R.name }),
                        /* @__PURE__ */ o.jsx("span", { children: R.artist })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ o.jsx("div", { className: "crate__opening" })
            ]
          },
          R.uri
        ))
      }
    )
  ] });
}
function Op({ lyrics: f, activeIndex: c, loading: d, onClose: r, onSeek: p }) {
  const E = C.useRef(null), T = C.useRef(null), L = C.useRef([]);
  C.useLayoutEffect(() => {
    const y = E.current, H = T.current;
    if (!y || !H) return;
    const B = L.current[c] ?? L.current[0];
    if (!B) return;
    const G = y.clientHeight / 2 - (B.offsetTop + B.offsetHeight / 2);
    H.style.transform = `translateY(${G}px)`;
  }, [c, f]), C.useEffect(() => {
    const y = (H) => H.key === "Escape" && r();
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [r]);
  const U = f.synced && f.lines.length > 0;
  return /* @__PURE__ */ o.jsxs("div", { className: "lyrics", onClick: r, children: [
    d && /* @__PURE__ */ o.jsx("p", { className: "lyrics__empty", children: "Recherche des paroles…" }),
    !d && f.instrumental && /* @__PURE__ */ o.jsx("p", { className: "lyrics__empty", children: "Morceau instrumental" }),
    !d && !f.instrumental && !U && !f.plain && /* @__PURE__ */ o.jsx("p", { className: "lyrics__empty", children: "Pas de paroles trouvées pour ce morceau" }),
    !d && !U && f.plain && /* @__PURE__ */ o.jsx("div", { className: "lyrics__scroll", ref: E, children: /* @__PURE__ */ o.jsx("div", { className: "lyrics__inner", ref: T, children: f.plain.split(`
`).map((y, H) => /* @__PURE__ */ o.jsx("p", { className: "lyrics__line", "data-active": "true", children: y || " " }, H)) }) }),
    !d && U && /* @__PURE__ */ o.jsx("div", { className: "lyrics__scroll", ref: E, children: /* @__PURE__ */ o.jsx("div", { className: "lyrics__inner", ref: T, children: f.lines.map((y, H) => /* @__PURE__ */ o.jsx(
      "p",
      {
        className: "lyrics__line",
        ref: (B) => {
          L.current[H] = B;
        },
        "data-active": H === c,
        "data-past": H < c,
        onClick: (B) => {
          B.stopPropagation(), p(y.time);
        },
        children: y.text || " "
      },
      H
    )) }) })
  ] });
}
const G0 = { service: "", entityId: "" };
function Dp(f) {
  return f.service.trim().includes(".");
}
const P0 = "mdvinyl.settings.v1", hc = {
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
  background: "adaptive",
  playControl: "arm",
  counterRotateLabel: !1,
  rpm: 33.3333,
  vinylTint: "",
  labelText: "",
  libraryZoom: 1,
  lyrics: !0,
  idleMinutes: 2,
  onPlay: { ...G0 },
  onStop: { ...G0 }
};
function mc() {
  try {
    const f = localStorage.getItem(P0);
    return f ? { ...hc, ...JSON.parse(f) } : { ...hc };
  } catch {
    return { ...hc };
  }
}
function Vr(f) {
  try {
    localStorage.setItem(P0, JSON.stringify(f));
  } catch {
  }
}
function Z0(f) {
  return f.token.trim().length > 0 && f.entityId.trim().length > 0;
}
function yc(f) {
  return (f.haUrl || window.location.origin).replace(/\/+$/, "");
}
let Bn = 0;
async function wp(f) {
  try {
    const c = Date.now(), d = await fetch(`${yc(f)}/api/`, {
      headers: { Authorization: `Bearer ${f.token}` },
      cache: "no-store"
    }), r = Date.now(), p = d.headers.get("date");
    if (!p) return Bn;
    const E = Date.parse(p);
    return Number.isNaN(E) || (Bn = (c + r) / 2 - (E + 500)), Bn;
  } catch {
    return Bn;
  }
}
const qp = { position: 0, duration: 0, progress: 0, playing: !1 };
function Rp(f, c = Date.now()) {
  if (!f) return qp;
  const d = f.attributes, r = Number(d.media_duration ?? 0) || 0, p = Number(d.media_position ?? 0) || 0, E = f.state === "playing";
  let T = p;
  if (E && d.media_position_updated_at) {
    const L = Date.parse(d.media_position_updated_at);
    if (!Number.isNaN(L)) {
      const U = c - Bn - L;
      U > 0 && (T = p + U / 1e3);
    }
  }
  return r > 0 && (T = Math.min(T, r)), T = Math.max(0, T), {
    position: T,
    duration: r,
    progress: r > 0 ? T / r : 0,
    playing: E
  };
}
function pc(f) {
  (!Number.isFinite(f) || f < 0) && (f = 0);
  const c = Math.floor(f), d = Math.floor(c / 3600), r = Math.floor(c % 3600 / 60), p = c % 60;
  return d > 0 ? `${d}:${String(r).padStart(2, "0")}:${String(p).padStart(2, "0")}` : `${r}:${String(p).padStart(2, "0")}`;
}
function Bp({ items: f, loading: c, error: d, current: r, pending: p, onPick: E, onClose: T }) {
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
    c && f.length === 0 && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__empty", children: "Lecture de la file…" }),
    !c && !d && f.length === 0 && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__empty", children: "La file est vide." }),
    /* @__PURE__ */ o.jsx("ol", { className: "sidepanel__list", children: f.map((L, U) => {
      const H = p !== null && L.id === p ? "now" : p !== null ? "next" : U === r ? "now" : r >= 0 && U < r ? "past" : "next";
      return /* @__PURE__ */ o.jsx("li", { className: "queue__item", "data-state": H, children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "queue__pick",
          onClick: () => E(L),
          disabled: !L.uri,
          title: L.uri ? `Aller à « ${L.name} »` : "Ce morceau n'est pas adressable",
          children: [
            /* @__PURE__ */ o.jsx(
              "span",
              {
                className: "queue__art",
                style: { backgroundImage: L.image ? `url("${L.image}")` : void 0 },
                children: /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M8 5.2v13.6L19 12z", fill: "currentColor" }) })
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "sidepanel__text", children: [
              /* @__PURE__ */ o.jsx("b", { children: L.name }),
              /* @__PURE__ */ o.jsx("span", { children: L.artist })
            ] }),
            /* @__PURE__ */ o.jsx("span", { className: "queue__time", children: L.duration > 0 ? pc(L.duration) : "" })
          ]
        }
      ) }, L.id);
    }) })
  ] });
}
function kp({ onWake: f }) {
  const [c, d] = C.useState(() => /* @__PURE__ */ new Date());
  C.useEffect(() => {
    let E;
    const T = () => {
      const L = /* @__PURE__ */ new Date();
      d(L), E = setTimeout(T, 6e4 - (L.getSeconds() * 1e3 + L.getMilliseconds()));
    };
    return T(), () => clearTimeout(E);
  }, []);
  const r = c.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }), p = c.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  return /* @__PURE__ */ o.jsxs("div", { className: "rest", onPointerDown: f, role: "button", tabIndex: 0, "aria-label": "Réveiller", children: [
    /* @__PURE__ */ o.jsx("div", { className: "rest__clock", children: r }),
    /* @__PURE__ */ o.jsx("div", { className: "rest__date", children: p }),
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
function Lp({
  players: f,
  current: c,
  loading: d,
  error: r,
  onListen: p,
  onTransfer: E,
  onClose: T
}) {
  const L = f.filter((H) => H.attributes.mass_player_type !== void 0), U = f.filter((H) => H.attributes.mass_player_type === void 0), y = [
    {
      titre: "Pilotées par Music Assistant",
      note: "Celles qui savent recevoir un disque et un transfert de file.",
      membres: L
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
    r && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__error", children: r }),
    d && f.length === 0 && /* @__PURE__ */ o.jsx("p", { className: "sidepanel__empty", children: "Recherche des enceintes…" }),
    /* @__PURE__ */ o.jsx("ul", { className: "sidepanel__list", children: y.map(({ titre: H, note: B, membres: G }) => /* @__PURE__ */ o.jsxs(C.Fragment, { children: [
      G.length > 0 && /* @__PURE__ */ o.jsxs("li", { className: "speakers__group", children: [
        /* @__PURE__ */ o.jsx("h3", { children: H }),
        /* @__PURE__ */ o.jsx("p", { children: B })
      ] }),
      G.map(($) => {
        const V = $.entity_id === c, k = $.state === "unavailable";
        return /* @__PURE__ */ o.jsxs(
          "li",
          {
            className: "speakers__item",
            "data-here": V,
            "data-entity": $.entity_id,
            children: [
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  className: "speakers__pick",
                  onClick: () => p($.entity_id),
                  disabled: V || k,
                  title: V ? "C'est l'enceinte affichée" : "Afficher cette enceinte",
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "speakers__dot", "data-on": $.state === "playing" }),
                    /* @__PURE__ */ o.jsxs("span", { className: "sidepanel__text", children: [
                      /* @__PURE__ */ o.jsx("b", { children: $.attributes.friendly_name ?? $.entity_id }),
                      /* @__PURE__ */ o.jsxs("span", { children: [
                        V ? "affichée ici" : Yp[$.state] ?? $.state,
                        $.attributes.media_title ? ` · ${$.attributes.media_title}` : ""
                      ] })
                    ] })
                  ]
                }
              ),
              !V && !k && $.attributes.mass_player_type !== void 0 && /* @__PURE__ */ o.jsxs(
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
    ] }, H)) })
  ] });
}
const Vi = 1e3, Hp = 15e3, Vp = 25e3, Gp = 1e4;
class Zp {
  settings;
  ws = null;
  nextId = 1;
  pending = /* @__PURE__ */ new Map();
  entityIds = [];
  subscriptionId = null;
  states = /* @__PURE__ */ new Map();
  closedByUs = !1;
  retryDelay = Vi;
  reconnectTimer = null;
  pingTimer = null;
  pongTimer = null;
  onState = () => {
  };
  onStatus = () => {
  };
  constructor(c) {
    this.settings = c;
  }
  // ---------------------------------------------------------------- cycle de vie
  connect(c) {
    this.entityIds = c, this.closedByUs = !1, this.open(), document.addEventListener("visibilitychange", this.handleVisibility), window.addEventListener("online", this.handleOnline);
  }
  close() {
    this.closedByUs = !0, document.removeEventListener("visibilitychange", this.handleVisibility), window.removeEventListener("online", this.handleOnline), this.clearTimers(), this.ws?.close(), this.ws = null, this.pending.clear(), this.subscriptionId = null;
  }
  handleVisibility = () => {
    document.visibilityState === "visible" && this.ws?.readyState !== WebSocket.OPEN && (this.retryDelay = Vi, this.open());
  };
  handleOnline = () => {
    this.retryDelay = Vi, this.open();
  };
  open() {
    if (this.closedByUs || this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING))
      return;
    this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = null);
    const c = yc(this.settings).replace(/^http/, "ws") + "/api/websocket";
    this.onStatus(this.retryDelay === Vi ? "connecting" : "reconnecting");
    let d;
    try {
      d = new WebSocket(c);
    } catch (r) {
      this.scheduleReconnect(String(r));
      return;
    }
    this.ws = d, d.onmessage = (r) => this.handleMessage(r), d.onerror = () => {
    }, d.onclose = () => {
      this.clearTimers(), this.subscriptionId = null;
      for (const r of this.pending.values()) r.reject(new Error("connexion fermée"));
      this.pending.clear(), this.closedByUs || this.scheduleReconnect();
    };
  }
  scheduleReconnect(c) {
    this.closedByUs || this.reconnectTimer || (this.onStatus("reconnecting", c), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.open();
    }, this.retryDelay), this.retryDelay = Math.min(this.retryDelay * 2, Hp));
  }
  clearTimers() {
    this.pingTimer && clearInterval(this.pingTimer), this.pongTimer && clearTimeout(this.pongTimer), this.pingTimer = null, this.pongTimer = null;
  }
  // ---------------------------------------------------------------- protocole
  send(c) {
    this.ws?.send(JSON.stringify(c));
  }
  request(c) {
    if (this.ws?.readyState !== WebSocket.OPEN)
      return Promise.reject(new Error("non connecté"));
    const d = this.nextId++;
    return new Promise((r, p) => {
      this.pending.set(d, { resolve: r, reject: p }), this.send({ ...c, id: d });
    });
  }
  handleMessage(c) {
    let d;
    try {
      d = JSON.parse(c.data);
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
        this.retryDelay = Vi, this.onStatus("connected"), this.subscribe(), this.startHeartbeat();
        return;
      case "pong":
        this.pongTimer && clearTimeout(this.pongTimer), this.pongTimer = null;
        return;
      case "event":
        d.id === this.subscriptionId && this.applyEntitiesEvent(d.event);
        return;
      case "result": {
        const r = this.pending.get(d.id);
        if (!r) return;
        this.pending.delete(d.id), d.success ? r.resolve(d.result) : r.reject(new Error(d.error?.message ?? "erreur Home Assistant"));
        return;
      }
    }
  }
  startHeartbeat() {
    this.clearTimers(), this.pingTimer = setInterval(() => {
      this.ws?.readyState === WebSocket.OPEN && (this.send({ id: this.nextId++, type: "ping" }), this.pongTimer || (this.pongTimer = setTimeout(() => {
        this.pongTimer = null, this.ws?.close();
      }, Gp)));
    }, Vp);
  }
  async subscribe() {
    if (this.entityIds.length === 0) return;
    const c = this.nextId++;
    this.subscriptionId = c;
    try {
      await new Promise((d, r) => {
        this.pending.set(c, { resolve: () => d(), reject: r }), this.send({ id: c, type: "subscribe_entities", entity_ids: this.entityIds });
      });
    } catch (d) {
      this.subscriptionId = null, this.onStatus("error", String(d));
    }
  }
  /** Reconstitue les états complets à partir du format compressé de HA. */
  applyEntitiesEvent(c) {
    if (c.a)
      for (const [d, r] of Object.entries(c.a)) {
        const p = {
          entity_id: d,
          state: r.s ?? "unknown",
          attributes: r.a ?? {},
          last_changed: r.lc ? new Date(r.lc * 1e3).toISOString() : void 0,
          last_updated: r.lu ? new Date(r.lu * 1e3).toISOString() : void 0
        };
        this.states.set(d, p), this.onState(p);
      }
    if (c.c)
      for (const [d, r] of Object.entries(c.c)) {
        const p = this.states.get(d);
        if (!p) continue;
        const E = {
          ...p,
          attributes: { ...p.attributes }
        }, T = r["+"];
        T && (T.s !== void 0 && (E.state = T.s), T.lc !== void 0 && (E.last_changed = new Date(T.lc * 1e3).toISOString()), T.lu !== void 0 && (E.last_updated = new Date(T.lu * 1e3).toISOString()), T.a && Object.assign(E.attributes, T.a));
        const L = r["-"];
        if (L?.a) for (const U of L.a) delete E.attributes[U];
        this.states.set(d, E), this.onState(E);
      }
    if (c.r)
      for (const d of c.r) this.states.delete(d);
  }
  // ---------------------------------------------------------------- commandes
  /**
   * Appelle un service Home Assistant. Passe par le WebSocket déjà ouvert :
   * pas de poignée de main TLS ni de latence d'établissement de connexion,
   * la commande part immédiatement.
   */
  callService(c, d, r = {}, p) {
    return this.request({
      type: "call_service",
      domain: c,
      service: d,
      service_data: r,
      ...p ? { target: { entity_id: p } } : {}
    });
  }
  /**
   * Appelle une action qui RENVOIE des données (music_assistant.get_library,
   * .search, .get_queue). Home Assistant range le résultat sous `response`.
   */
  async callServiceWithResponse(c, d, r = {}, p) {
    const E = await this.request({
      type: "call_service",
      domain: c,
      service: d,
      service_data: r,
      // Certaines actions se ciblent par entité (get_queue), d'autres par entrée
      // de configuration (search, get_library) : les deux doivent être possibles.
      ...p ? { target: { entity_id: p } } : {},
      return_response: !0
    });
    return E?.response ?? E;
  }
  /**
   * Identifiant d'entrée de configuration d'une intégration.
   * Les actions de bibliothèque de Music Assistant se ciblent par là, et cette
   * information n'existe que sur le WebSocket — le REST ne l'expose pas.
   */
  async configEntry(c) {
    return (await this.request({
      type: "config_entries/get",
      domain: c
    }))?.[0]?.entry_id ?? null;
  }
}
function _0(f, c) {
  return new Promise((d, r) => {
    const p = yc(f).replace(/^http/, "ws") + "/api/websocket";
    let E;
    try {
      E = new WebSocket(p);
    } catch {
      r(new Error("Adresse invalide."));
      return;
    }
    const T = setTimeout(() => {
      E.close(), r(new Error("Home Assistant ne répond pas à cette adresse."));
    }, 12e3);
    let L = !1;
    const U = (y, H) => {
      L || (L = !0, clearTimeout(T), E.close(), y ? r(y) : d(H));
    };
    E.onerror = () => U(new Error("Home Assistant injoignable à cette adresse.")), E.onclose = () => U(new Error("Connexion interrompue.")), E.onmessage = (y) => {
      const H = JSON.parse(String(y.data));
      if (H.type === "auth_required") {
        E.send(JSON.stringify({ type: "auth", access_token: f.token }));
        return;
      }
      if (H.type === "auth_invalid") {
        U(new Error("Jeton refusé par Home Assistant."));
        return;
      }
      if (H.type === "auth_ok") {
        E.send(JSON.stringify({ ...c, id: 1 }));
        return;
      }
      H.type === "result" && (H.success ? U(null, H.result) : U(new Error(H.error?.message ?? "Commande refusée.")));
    };
  });
}
async function Kp(f) {
  try {
    const c = await _0(f, {
      type: "get_config"
    });
    return { ok: !0, message: `Connecté à ${c?.location_name ?? "Home Assistant"}${c?.version ? ` (${c.version})` : ""}` };
  } catch (c) {
    return { ok: !1, message: c instanceof Error ? c.message : String(c) };
  }
}
function Xp(f) {
  return f.filter((c) => c.entity_id.startsWith("media_player.")).sort((c, d) => {
    const r = c.attributes.mass_player_type ? 0 : 1, p = d.attributes.mass_player_type ? 0 : 1;
    return r !== p ? r - p : (c.attributes.friendly_name ?? c.entity_id).localeCompare(
      d.attributes.friendly_name ?? d.entity_id
    );
  });
}
async function $0(f) {
  const c = await _0(f, { type: "get_states" });
  return Xp(c);
}
function Jp(f, c) {
  return c ? c.startsWith("/") ? yc(f) + c : c : null;
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
  onSave: c,
  onCancel: d,
  requireConnection: r,
  embedded: p = !1,
  knownPlayers: E = null
}) {
  const [T, L] = C.useState(f), [U, y] = C.useState({ state: "idle", message: "" }), [H, B] = C.useState(E), G = (k, P) => L((at) => ({ ...at, [k]: P }));
  C.useEffect(() => {
    f.token && $(f);
  }, []);
  async function $(k) {
    y({ state: "testing", message: "Connexion…" });
    const P = await Kp(k);
    if (!P.ok) {
      y({ state: "bad", message: P.message }), B(null);
      return;
    }
    try {
      const at = await $0(k);
      B(at);
      const gt = at.filter((F) => F.attributes.mass_player_type).length;
      if (y({
        state: "ok",
        message: at.length === 0 ? "Connecté, mais aucune enceinte trouvée." : `Connecté. ${at.length} enceinte${at.length > 1 ? "s" : ""}` + (gt > 0 ? `, dont ${gt} via Music Assistant.` : ".")
      }), !k.entityId && at.length > 0) {
        const F = at.find((pt) => pt.attributes.mass_player_type) ?? at[0];
        F && G("entityId", F.entity_id);
      }
    } catch (at) {
      y({ state: "bad", message: String(at) });
    }
  }
  const V = p ? T.entityId.trim().length > 0 : !r || T.token.trim().length > 0 && T.entityId.trim().length > 0;
  return /* @__PURE__ */ o.jsx("div", { className: "setup", children: /* @__PURE__ */ o.jsxs("div", { className: "panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "panel__head", children: [
      /* @__PURE__ */ o.jsx("h1", { children: d ? "Réglages" : "Bienvenue" }),
      !d && /* @__PURE__ */ o.jsx("span", { style: { color: "var(--ink-faint)", fontSize: 13 }, children: "1 fois par appareil" })
    ] }),
    !d && p && /* @__PURE__ */ o.jsx("p", { className: "note", children: "Choisis l'enceinte sur laquelle poser les disques. Tu pourras en changer à tout moment depuis le nom de la pièce, en haut à gauche." }),
    !d && !p && /* @__PURE__ */ o.jsxs("p", { className: "note", children: [
      "Cette platine pilote une enceinte de ton Home Assistant. Il lui faut un jeton d'accès : dans Home Assistant, clique sur ton nom en bas à gauche, onglet ",
      /* @__PURE__ */ o.jsx("b", { children: "Sécurité" }),
      ", puis tout en bas ",
      /* @__PURE__ */ o.jsx("b", { children: "Jetons d'accès longue durée" }),
      "."
    ] }),
    !p && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
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
            onChange: (k) => G("haUrl", k.target.value.trim()),
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
            onChange: (k) => G("token", k.target.value.trim()),
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
      /* @__PURE__ */ o.jsxs("select", { id: "entity", value: T.entityId, onChange: (k) => G("entityId", k.target.value), children: [
        /* @__PURE__ */ o.jsx("option", { value: "", children: "— choisir —" }),
        H?.map((k) => /* @__PURE__ */ o.jsxs("option", { value: k.entity_id, children: [
          k.attributes.mass_player_type ? "♪ " : "",
          k.attributes.friendly_name ?? k.entity_id
        ] }, k.entity_id)),
        T.entityId && !H?.some((k) => k.entity_id === T.entityId) && /* @__PURE__ */ o.jsx("option", { value: T.entityId, children: T.entityId })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("h2", { children: "Apparence" }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { children: "Matière du disque" }),
      /* @__PURE__ */ o.jsx("div", { className: "segmented", children: Qp.map(([k, P]) => /* @__PURE__ */ o.jsx(
        "button",
        {
          "aria-pressed": T.vinyl === k,
          onClick: () => G("vinyl", k),
          children: P
        },
        k
      )) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { children: "Fond" }),
      /* @__PURE__ */ o.jsx("div", { className: "segmented", children: Fp.map(([k, P]) => /* @__PURE__ */ o.jsx(
        "button",
        {
          "aria-pressed": T.background === k,
          onClick: () => G("background", k),
          children: P
        },
        k
      )) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { children: "Lancer et arrêter la lecture" }),
      /* @__PURE__ */ o.jsxs("div", { className: "segmented", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "aria-pressed": T.playControl === "arm",
            onClick: () => G("playControl", "arm"),
            children: "En posant l'aiguille"
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "aria-pressed": T.playControl === "button",
            onClick: () => G("playControl", "button"),
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
          onChange: (k) => G("counterRotateLabel", k.target.checked)
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
            onChange: (k) => G("vinylTint", k.target.value)
          }
        ),
        /* @__PURE__ */ o.jsx("button", { className: "btn", onClick: () => G("vinylTint", ""), children: "Suivre la pochette" })
      ] }),
      /* @__PURE__ */ o.jsx("small", { children: T.vinylTint ? "Couleur fixe, quel que soit l'album." : "La couleur du disque suit la dominante de la pochette en cours." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "zoom", children: [
        "Taille des pochettes",
        /* @__PURE__ */ o.jsx("span", { className: "field__value", children: T.libraryZoom === 1 ? "auto" : `${Math.round(T.libraryZoom * 100)} %` })
      ] }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: "zoom",
          type: "range",
          min: 0.7,
          max: 1.6,
          step: 0.05,
          value: T.libraryZoom,
          onChange: (k) => G("libraryZoom", Number(k.target.value))
        }
      ),
      /* @__PURE__ */ o.jsx("small", { children: "La taille s'ajuste déjà à l'écran ; ce curseur ne fait que la pondérer, et il reste propre à cet appareil. Une tablette tenue à bout de bras demande des pochettes plus grosses qu'un écran de bureau à cinquante centimètres." })
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
          onChange: (k) => G("labelText", k.target.value)
        }
      ),
      /* @__PURE__ */ o.jsx("small", { children: "Laissé vide, l'étiquette affiche le morceau en cours. Rempli, elle garde ce texte — comme une pastille de label pressée une fois pour toutes." })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ o.jsx("label", { htmlFor: "rpm", children: "Vitesse de rotation" }),
      /* @__PURE__ */ o.jsxs("select", { id: "rpm", value: String(T.rpm), onChange: (k) => G("rpm", Number(k.target.value)), children: [
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
          onChange: (k) => G("lyrics", k.target.checked)
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
          onChange: (k) => G("idleMinutes", Number(k.target.value)),
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
          onClick: () => L({
            ...hc,
            haUrl: T.haUrl,
            token: T.token,
            entityId: T.entityId
          }),
          children: "Réinitialiser l'apparence"
        }
      ),
      /* @__PURE__ */ o.jsx("button", { className: "btn btn--primary", disabled: !V, onClick: () => c(T), children: "Enregistrer" })
    ] })
  ] }) });
}
const pe = 100, oc = 86;
function dc(f, c, d) {
  const r = c * Math.PI / 180, p = f * Math.cos(r), E = f * Math.sin(r);
  return `M ${pe - p},${pe - E} A ${f},${f} 0 0,${d} ${pe + p},${pe + E}`;
}
const Br = typeof document < "u" ? document.createElement("canvas").getContext("2d") : null, Gr = /* @__PURE__ */ new Map();
function Pp(f, c) {
  const d = `${c}|${f}`, r = Gr.get(d);
  if (r !== void 0) return r;
  if (!Br) return 0.55 * f.length;
  Br.font = `${c} 100px Inter, sans-serif`;
  const p = Br.measureText(f).width / 100;
  return Gr.set(d, p), p;
}
function K0(f, c, d, r, p) {
  if (!f) return d;
  const E = Pp(f, p);
  return E <= 0 ? d : Math.max(r, Math.min(d, c / E));
}
function Rn(f, c) {
  return f.length > c ? `${f.slice(0, c - 1).trimEnd()}…` : f;
}
function _p(f) {
  let c = 2166136261;
  for (let r = 0; r < f.length; r++)
    c ^= f.charCodeAt(r), c = Math.imul(c, 16777619);
  const d = [];
  for (let r = 0; r < 20; r++)
    c = Math.imul(c ^ c >>> 15, 2246822507), d.push((c >>> 8 & 3) === 0 ? 1.3 : 0.6);
  return d;
}
function $p({ title: f, artist: c, album: d, footer: r, mark: p }) {
  const [, E] = C.useState(!1);
  C.useEffect(() => {
    let G = !0;
    return document.fonts?.ready.then(() => {
      G && (Gr.clear(), E(!0));
    }), () => {
      G = !1;
    };
  }, []);
  const T = Rn(f || "—", 30), L = Rn(c || "", 30), U = K0(T, 126, 30, 9, 800), y = K0(L, 112, 18, 7.5, 650), H = _p(`${f}${c}`);
  let B = 0;
  return /* @__PURE__ */ o.jsxs("svg", { className: "label__svg", viewBox: "0 0 200 200", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsxs("defs", { children: [
      /* @__PURE__ */ o.jsx("path", { id: "ring-top", d: dc(oc, 0, 1), fill: "none" }),
      /* @__PURE__ */ o.jsx("path", { id: "ring-bottom", d: dc(oc, 0, 0), fill: "none" }),
      /* @__PURE__ */ o.jsx("path", { id: "ring-left", d: dc(oc, 90, 0), fill: "none" }),
      /* @__PURE__ */ o.jsx("path", { id: "ring-right", d: dc(oc, 90, 1), fill: "none" })
    ] }),
    /* @__PURE__ */ o.jsx("circle", { cx: pe, cy: pe, r: "94", fill: "none", stroke: "rgba(0,0,0,0.2)", strokeWidth: "0.7" }),
    /* @__PURE__ */ o.jsxs("g", { className: "label__micro", fill: "rgba(20,18,16,0.62)", fontSize: "7", textAnchor: "middle", children: [
      /* @__PURE__ */ o.jsx("text", { children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-top", startOffset: "50%", children: Rn(d || "", 42) }) }),
      /* @__PURE__ */ o.jsx("text", { children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-bottom", startOffset: "50%", children: Rn(r, 46) }) }),
      /* @__PURE__ */ o.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-left", startOffset: "50%", children: Rn(c || "", 34) }) }),
      /* @__PURE__ */ o.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ o.jsx("textPath", { href: "#ring-right", startOffset: "50%", children: Rn(p, 34) }) })
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
        children: L
      }
    ),
    /* @__PURE__ */ o.jsx("g", { transform: "rotate(38 100 100) translate(93 22)", opacity: "0.6", children: H.map((G, $) => {
      const V = B;
      return B += G + 0.55, /* @__PURE__ */ o.jsx("rect", { x: V, y: "0", width: G, height: "7.5", fill: "#131211" }, $);
    }) })
  ] });
}
const bl = 1.19, Jr = 1.39, bc = 141.6, gc = 1, th = 0.78, xc = 180 / Math.PI, Yn = Jr * (1312.74 / 1372), eh = 5.545;
function ah(f) {
  return f < 0 ? 0 : f > 1 ? 1 : f;
}
function lh(f) {
  const c = (bl * bl + Yn * Yn - f * f) / (2 * bl * Yn);
  return Math.acos(Math.min(1, Math.max(-1, c))) * xc + eh;
}
function t1(f) {
  const c = (f - eh) / xc, d = bl * bl + Yn * Yn - 2 * bl * Yn * Math.cos(c);
  return Math.sqrt(Math.max(0, d));
}
function Qr(f) {
  const c = gc + (th - gc) * ah(f);
  return bc - lh(c);
}
const Zr = bc - lh(1.36);
function e1(f) {
  const c = bc - f, d = t1(Math.max(0, c));
  return ah((d - gc) / (th - gc));
}
const X0 = (bc - 180) / xc, J0 = {
  x: bl * Math.cos(X0),
  y: bl * Math.sin(X0)
};
function a1(f, c) {
  return Math.atan2(c - J0.y, f - J0.x) * xc;
}
const Wr = Jr / 1372, Dt = (f) => f * Wr, We = (f) => (f - 351.5) * Wr, kn = (f) => (f - 168) * Wr, l1 = 30, kr = kn(1340);
function n1({ wrapRef: f, armRef: c, onGrab: d }) {
  return /* @__PURE__ */ o.jsx("div", { className: "tonearm", ref: f, children: /* @__PURE__ */ o.jsxs("div", { className: "tonearm__arm", ref: c, children: [
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
              x: kn(30),
              y: We(176),
              width: Dt(70),
              height: Dt(120),
              rx: Dt(16),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: kn(105),
              y: We(160),
              width: Dt(127),
              height: Dt(232),
              rx: Dt(26),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ o.jsx("rect", { x: kn(232), y: We(324), width: Dt(66), height: Dt(56), rx: Dt(14), fill: "url(#shell)" }),
          /* @__PURE__ */ o.jsx("rect", { x: kn(290), y: We(328), width: Dt(985), height: Dt(48), rx: Dt(24), fill: "url(#tube)" }),
          /* @__PURE__ */ o.jsx("rect", { x: kn(1272), y: We(316), width: Dt(70), height: Dt(72), rx: Dt(18), fill: "url(#shell)" }),
          /* @__PURE__ */ o.jsxs("g", { transform: `rotate(${l1} ${kr} 0)`, children: [
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: kr - Dt(14),
                y: We(291),
                width: Dt(214),
                height: Dt(121),
                rx: Dt(30),
                fill: "url(#head)"
              }
            ),
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: kr + Dt(120),
                y: We(345),
                width: Dt(10),
                height: Dt(34),
                rx: Dt(5),
                fill: "#6a6f78",
                opacity: "0.75"
              }
            ),
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: Jr - Dt(26),
                y: We(368),
                width: Dt(12),
                height: Dt(52),
                rx: Dt(6),
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
const Q0 = Qr(0), i1 = Qr(1);
function u1({
  title: f,
  artist: c,
  album: d,
  footer: r,
  mark: p,
  coverUrl: E,
  settings: T,
  sleeveFront: L,
  onToggleSleeve: U,
  onTogglePlay: y,
  armOverride: H,
  onSeekProgress: B,
  onPlay: G,
  onPause: $,
  onNext: V,
  onPrevious: k,
  seekable: P,
  spinRef: at,
  armRef: gt,
  swap: F
}) {
  const pt = C.useRef(null), Et = C.useRef(null), Yt = C.useRef(!1), tt = C.useRef(!1), rt = T.playControl === "arm", wt = (st) => {
    const At = pt.current;
    if (!At) return;
    st.preventDefault(), st.stopPropagation(), st.target.setPointerCapture(st.pointerId);
    const qt = At.getBoundingClientRect(), Ht = qt.left + qt.width / 2, M = qt.top + qt.height / 2, q = qt.width / 2, W = st.clientX, it = st.clientY;
    let R = !1;
    const h = (Y, X) => {
      const J = a1((Y - Ht) / q, (X - M) / q), et = rt ? Zr - 2 : Q0, dt = Math.min(i1, Math.max(et, J));
      return H.current = dt, dt;
    }, A = (Y) => {
      !R && Math.hypot(Y.clientX - W, Y.clientY - it) > 6 && (R = !0, Yt.current = !0, Et.current?.setAttribute("data-dragging", "true")), R && h(Y.clientX, Y.clientY);
    }, w = (Y) => {
      if (window.removeEventListener("pointermove", A), window.removeEventListener("pointerup", w), window.removeEventListener("pointercancel", w), Et.current?.removeAttribute("data-dragging"), Yt.current = !1, !R) {
        H.current = null, rt && y();
        return;
      }
      const X = h(Y.clientX, Y.clientY);
      if (rt && X < Q0 - 0.6) {
        H.current = null, $();
        return;
      }
      P && B(e1(X)), rt && G(), setTimeout(() => {
        Yt.current || (H.current = null);
      }, 900);
    };
    window.addEventListener("pointermove", A), window.addEventListener("pointerup", w), window.addEventListener("pointercancel", w);
  };
  C.useEffect(() => {
    const st = pt.current;
    if (!st || F.nonce === 0) return;
    const At = st.offsetWidth * 0.34 * (F.dir >= 0 ? -1 : 1), qt = `translateY(-50%) translateX(${At}px) scale(0.93)`, Ht = `translateY(-50%) translateX(${-At}px) scale(0.93)`, M = "translateY(-50%) translateX(0) scale(1)", q = st.animate(
      [
        { transform: M, opacity: 1, offset: 0 },
        { transform: qt, opacity: 0, offset: 0.42 },
        { transform: Ht, opacity: 0, offset: 0.46 },
        { transform: M, opacity: 1, offset: 1 }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    ), it = st.parentElement?.querySelector(".sleeve")?.animate(
      [
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" },
        { transform: `translateY(-50%) rotate(-3deg) translateX(${At * 0.12}px)` },
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    );
    return () => {
      q.cancel(), it?.cancel();
    };
  }, [F.nonce, F.dir]);
  const le = /* @__PURE__ */ o.jsx("div", { className: "label", children: /* @__PURE__ */ o.jsx($p, { title: f, artist: c, album: d, footer: r, mark: p }) }), Xt = (st) => {
    const At = st.clientX, qt = st.clientY;
    let Ht = !1;
    const M = (W) => {
      if (Ht) return;
      const it = W.clientX - At, R = W.clientY - qt;
      Math.abs(it) < 64 || Math.abs(it) < Math.abs(R) * 1.8 || (Ht = !0, tt.current = !0, it < 0 ? V() : k());
    }, q = () => {
      window.removeEventListener("pointermove", M), window.removeEventListener("pointerup", q), window.removeEventListener("pointercancel", q), Ht && setTimeout(() => tt.current = !1, 0);
    };
    window.addEventListener("pointermove", M), window.addEventListener("pointerup", q), window.addEventListener("pointercancel", q);
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "deck",
      "data-sleeve": L ? "front" : "back",
      onPointerDown: Xt,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "tonearm-base" }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "sleeve",
            onClick: () => !tt.current && U(),
            role: "button",
            tabIndex: 0,
            "aria-label": "Afficher la pochette",
            onKeyDown: (st) => st.key === "Enter" && U(),
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
            ref: pt,
            onClick: () => !rt && !tt.current && y(),
            role: rt ? void 0 : "button",
            tabIndex: rt ? -1 : 0,
            "aria-label": rt ? void 0 : "Lecture ou pause",
            onKeyDown: (st) => !rt && st.key === "Enter" && y(),
            children: [
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__material" }),
              /* @__PURE__ */ o.jsxs("div", { className: "disc__spin", ref: at, children: [
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__pattern" }),
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__grooves" }),
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__aniso" }),
                /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__flecks" }),
                !T.counterRotateLabel && le
              ] }),
              T.counterRotateLabel && le,
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__gloss" }),
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__light" }),
              /* @__PURE__ */ o.jsx("div", { className: "disc__layer disc__edge" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(n1, { wrapRef: Et, armRef: gt, onGrab: wt })
      ]
    }
  );
}
const W0 = /* @__PURE__ */ new Map();
function c1(f) {
  let c = 2166136261;
  for (let d = 0; d < f.length; d++)
    c ^= f.charCodeAt(d), c = Math.imul(c, 16777619);
  return () => (c ^= c << 13, c ^= c >>> 17, c ^= c << 5, (c >>> 0) % 1e5 / 1e5);
}
function vc(f, c = 640) {
  const d = W0.get(f);
  if (d) return d;
  const r = document.createElement("canvas");
  r.width = c, r.height = c;
  const p = r.getContext("2d");
  if (!p) return "";
  const E = c1(f), T = Math.floor(E() * 360), L = (T + 140 + Math.floor(E() * 80)) % 360, U = E() > 0.45, y = U ? `hsl(${T} 42% 12%)` : `hsl(${T} 30% 88%)`, H = U ? `hsl(${L} 82% 60%)` : `hsl(${L} 68% 38%)`, B = U ? `hsl(${T} 38% 22%)` : `hsl(${T} 26% 74%)`;
  switch (p.fillStyle = y, p.fillRect(0, 0, c, c), Math.floor(E() * 4)) {
    case 0: {
      const V = c * (0.3 + E() * 0.4), k = c * (0.28 + E() * 0.24), P = c * (0.16 + E() * 0.12), at = p.createRadialGradient(V, k, 0, V, k, P);
      at.addColorStop(0, `hsl(${L} 90% 68%)`), at.addColorStop(1, H), p.fillStyle = at, p.beginPath(), p.arc(V, k, P, 0, Math.PI * 2), p.fill(), p.fillStyle = B;
      for (let gt = c * 0.62, F = 0; gt < c; gt += 10 + F * 2.2, F++)
        p.fillRect(0, gt, c, 4);
      break;
    }
    case 1: {
      p.save(), p.translate(c / 2, c / 2), p.rotate((E() - 0.5) * 1.1), p.translate(-c, -c);
      for (let V = 0; V < 22; V++)
        p.fillStyle = V % 3 === 0 ? H : V % 3 === 1 ? B : y, p.fillRect(0, V * (c / 9), c * 3, c / 18);
      p.restore();
      break;
    }
    case 2: {
      const V = c * (0.35 + E() * 0.3), k = c * (0.35 + E() * 0.3);
      for (let P = c * 0.62; P > 4; P -= c * 0.045)
        p.strokeStyle = P % (c * 0.09) < c * 0.05 ? H : B, p.lineWidth = c * 0.022, p.beginPath(), p.arc(V, k, P, 0, Math.PI * 2), p.stroke();
      break;
    }
    default: {
      const V = 3 + Math.floor(E() * 3), k = c / V;
      for (let P = 0; P < V; P++)
        for (let at = 0; at < V; at++) {
          const gt = E();
          if (gt < 0.34) continue;
          p.fillStyle = gt < 0.68 ? B : H;
          const F = k * 0.06;
          p.fillRect(at * k + F, P * k + F, k - F * 2, k - F * 2);
        }
    }
  }
  const G = p.getImageData(0, 0, c, c);
  for (let V = 0; V < G.data.length; V += 4) {
    const k = (Math.random() - 0.5) * 9;
    G.data[V] = Yr((G.data[V] ?? 0) + k), G.data[V + 1] = Yr((G.data[V + 1] ?? 0) + k), G.data[V + 2] = Yr((G.data[V + 2] ?? 0) + k);
  }
  p.putImageData(G, 0, 0);
  const $ = r.toDataURL("image/jpeg", 0.86);
  return W0.set(f, $), $;
}
function Yr(f) {
  return f < 0 ? 0 : f > 255 ? 255 : f;
}
function s1(f, c) {
  let d = null;
  const r = async () => {
    if (d || (d = await f.configEntry("music_assistant")), !d) throw new Error("Intégration Music Assistant introuvable dans Home Assistant.");
    return d;
  };
  return {
    async albums() {
      const p = await f.callServiceWithResponse("music_assistant", "get_library", {
        config_entry_id: await r(),
        media_type: "album",
        limit: 300,
        order_by: "name"
      });
      return Lr(p);
    },
    async play(p) {
      await f.callService(
        "music_assistant",
        "play_media",
        { media_id: p.uri, media_type: "album", enqueue: "replace" },
        c
      );
    },
    /*
     * Recherche : elle se cible par config_entry_id, PAS par entité — c'est une
     * interrogation du fournisseur, pas une commande d'enceinte. Elle porte donc
     * sur tout Deezer, et non sur la seule bibliothèque enregistrée.
     */
    async search(p) {
      const E = await f.callServiceWithResponse("music_assistant", "search", {
        config_entry_id: await r(),
        name: p,
        limit: 12
      });
      return {
        albums: Lr({ items: E?.albums ?? [] }),
        tracks: Lr({ items: E?.tracks ?? [] })
      };
    },
    /* La file, elle, appartient à une enceinte : ciblage par entité. */
    async queue() {
      const p = await f.callServiceWithResponse(
        "music_assistant",
        "get_queue",
        {},
        c
      ), E = p?.queue ?? p ?? {}, T = E.items ?? [];
      if (!Array.isArray(T)) return { items: [], current: -1 };
      const L = T.map((y, H) => {
        const B = y.media_item ?? y;
        return {
          id: String(y.queue_item_id ?? y.item_id ?? H),
          uri: String(B.uri ?? y.uri ?? ""),
          name: String(y.name ?? B.name ?? "—"),
          artist: nh(B),
          image: ih(B),
          duration: Number(y.duration ?? B.duration ?? 0) || 0
        };
      }), U = Number(E.current_index ?? E.index_in_buffer ?? -1);
      return { items: L, current: Number.isFinite(U) ? U : -1 };
    },
    /*
     * Transfert : la file passe d'une enceinte à l'autre sans repartir de zéro.
     * C'est ce que fait Music Assistant nativement — reprendre la lecture à la
     * même seconde dans une autre pièce.
     */
    async transferTo(p) {
      await f.callService(
        "music_assistant",
        "transfer_queue",
        { source_player: c, auto_play: !0 },
        p
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
    async jumpTo(p) {
      if (!p.uri) throw new Error("Ce morceau n'a pas d'URI : impossible d'y sauter.");
      await f.callService(
        "music_assistant",
        "play_media",
        { media_id: p.uri, media_type: "track", enqueue: "play" },
        c
      );
    }
  };
}
function Lr(f) {
  const c = f, d = c?.items ?? c?.albums ?? c?.result ?? [];
  return Array.isArray(d) ? d.map((r) => {
    const p = r;
    return {
      uri: String(p.uri ?? p.media_id ?? p.item_id ?? ""),
      name: String(p.name ?? p.title ?? "—"),
      artist: nh(p),
      image: ih(p)
    };
  }).filter((r) => r.uri.length > 0) : [];
}
function nh(f) {
  if (typeof f.artist == "string") return f.artist;
  const c = f.artists?.[0] ?? f.album_artist ?? f.artist;
  return c ? typeof c == "string" ? c : String(c.name ?? "") : "";
}
function ih(f) {
  const c = f.image ?? f.images?.[0] ?? f.metadata?.images?.[0] ?? f.thumbnail ?? null;
  if (!c) return null;
  if (typeof c == "string") return c;
  const d = c.path ?? c.url ?? null;
  return typeof d == "string" ? d : null;
}
const Hr = [
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
function r1(f, c) {
  return {
    async albums() {
      return Hr.map(([d, r]) => ({
        uri: `demo://album/${encodeURIComponent(d)}/${encodeURIComponent(r)}`,
        name: d,
        artist: r,
        image: vc(`${d} ${r}`)
      }));
    },
    async play(d) {
      await f.callService(
        "music_assistant",
        "play_media",
        { media_id: d.uri, media_type: "album", enqueue: "replace" },
        c
      );
    },
    async search(d) {
      const r = d.trim().toLowerCase(), E = Hr.map(([T, L]) => ({
        uri: `demo://album/${encodeURIComponent(T)}/${encodeURIComponent(L)}`,
        name: T,
        artist: L,
        image: vc(`${T} ${L}`)
      })).filter(
        (T) => T.name.toLowerCase().includes(r) || T.artist.toLowerCase().includes(r)
      );
      return {
        albums: E.slice(0, 12),
        tracks: E.slice(0, 4).map((T) => ({ ...T, name: `${T.name} · piste 1` }))
      };
    },
    async queue() {
      return {
        items: Hr.slice(0, 7).map(([d, r], p) => ({
          id: `demo-${p}`,
          uri: `demo://album/${encodeURIComponent(d)}/${encodeURIComponent(r)}`,
          name: `${d} · piste ${p + 1}`,
          artist: r,
          image: vc(`${d} ${r}`),
          duration: 190 + p * 21
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
        c
      );
    }
  };
}
function f1(f) {
  const c = /^demo:\/\/album\/([^/]+)\/([^/]+)$/.exec(f);
  return !c || !c[1] || !c[2] ? null : { name: decodeURIComponent(c[1]), artist: decodeURIComponent(c[2]) };
}
const Xl = [
  { title: "Nuit américaine", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 214 },
  { title: "Le grand bleu tremble", artist: "Atelier Nord", album: "Vagues courtes", duration: 268 },
  { title: "Sillon 3", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 187 }
], o1 = qe.PAUSE | qe.SEEK | qe.VOLUME_SET | qe.PREVIOUS_TRACK | qe.NEXT_TRACK | qe.PLAY | qe.SHUFFLE_SET | qe.REPEAT_SET, Fr = [
  { entity_id: "media_player.salon", name: "Salon" },
  { entity_id: "media_player.cuisine", name: "Cuisine" },
  { entity_id: "media_player.chambre", name: "Chambre" }
], Kr = Fr[0].entity_id;
function d1(f) {
  return Fr.find((c) => c.entity_id === f)?.name ?? "Salon";
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
  entityId = Kr;
  connect(c) {
    this.entityId = c[0] || Kr, this.onStatus("connected"), this.publish(), this.timer = setInterval(() => {
      if (this.playing) {
        this.position += 1;
        const d = Xl[this.index];
        d && this.position >= d.duration && (this.index = (this.index + 1) % Xl.length, this.position = 0);
      }
      this.publish();
    }, 1e3);
  }
  close() {
    this.timer && clearInterval(this.timer), this.timer = null;
  }
  callService(c, d, r = {}) {
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
        this.index = (this.index + 1) % Xl.length, this.position = 0;
        break;
      case "media_previous_track":
        this.position > 3 ? this.position = 0 : (this.index = (this.index - 1 + Xl.length) % Xl.length, this.position = 0);
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
        const p = f1(String(r.media_id ?? ""));
        p && (this.album = p, this.cover = vc(`${p.name} ${p.artist}`), this.index = 0, this.position = 0, this.playing = !0);
        break;
      }
    }
    return this.publish(), Promise.resolve(null);
  }
  publish() {
    const c = Xl[this.index] ?? Xl[0];
    this.onState({
      entity_id: this.entityId,
      state: this.playing ? "playing" : "paused",
      attributes: {
        friendly_name: d1(this.entityId),
        supported_features: o1,
        media_title: this.album ? `${this.album.name} · piste ${this.index + 1}` : c.title,
        media_artist: this.album ? this.album.artist : c.artist,
        media_album_name: this.album ? this.album.name : c.album,
        media_duration: c.duration,
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
  const f = new URLSearchParams(window.location.search), c = {}, d = f.get("vinyl"), r = f.get("bg");
  return d && (c.vinyl = d), r && (c.background = r), c;
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
[01:16.80] On y croit quand même, ce soir`, uh = "https://lrclib.net/api", gl = { lines: [], synced: !1, plain: null, instrumental: !1 }, Gi = /* @__PURE__ */ new Map();
function g1(f) {
  return `${f.artist}::${f.title}::${Math.round(f.duration ?? 0)}`;
}
async function y1(f, c) {
  if (!f.title || !f.artist) return gl;
  const d = g1(f), r = Gi.get(d);
  if (r) return r;
  let p = gl;
  try {
    p = await b1(f, c) ?? await x1(f, c) ?? gl;
  } catch (E) {
    if (E?.name === "AbortError") throw E;
    p = gl;
  }
  return Gi.set(d, p), Gi.size > 80 && Gi.delete(Gi.keys().next().value), p;
}
async function b1(f, c) {
  const d = new URLSearchParams({
    artist_name: f.artist,
    track_name: f.title,
    album_name: f.album ?? "",
    duration: String(Math.round(f.duration ?? 0))
  }), r = await fetch(`${uh}/get?${d}`, { signal: c });
  return r.ok ? ch(await r.json()) : null;
}
async function x1(f, c) {
  const d = new URLSearchParams({ track_name: f.title, artist_name: f.artist }), r = await fetch(`${uh}/search?${d}`, { signal: c });
  if (!r.ok) return null;
  const p = await r.json();
  if (!Array.isArray(p) || p.length === 0) return null;
  const E = f.duration ?? 0, T = [...p].filter((L) => L.syncedLyrics).sort((L, U) => Math.abs(L.duration - E) - Math.abs(U.duration - E))[0] ?? p[0];
  return T ? ch(T) : null;
}
function ch(f) {
  if (f.instrumental)
    return { lines: [], synced: !1, plain: null, instrumental: !0 };
  const c = f.syncedLyrics ? sh(f.syncedLyrics) : [];
  return {
    lines: c,
    synced: c.length > 0,
    plain: f.plainLyrics ?? null,
    instrumental: !1
  };
}
function sh(f) {
  const c = /\[(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g, d = [];
  for (const r of f.split(/\r?\n/)) {
    c.lastIndex = 0;
    const p = [];
    let E, T = 0;
    for (; (E = c.exec(r)) !== null && E.index === T; ) {
      T = c.lastIndex;
      const U = Number(E[1]), y = Number(E[2]), H = E[3] ? +`0.${E[3]}` : 0;
      p.push(U * 60 + y + H);
    }
    if (p.length === 0) continue;
    const L = r.slice(T).trim();
    for (const U of p) d.push({ time: U, text: L });
  }
  return d.sort((r, p) => r.time - p.time);
}
function S1(f, c) {
  let d = 0, r = f.length - 1, p = -1;
  for (; d <= r; ) {
    const E = d + r >> 1;
    f[E].time <= c ? (p = E, d = E + 1) : r = E - 1;
  }
  return p;
}
const E1 = 3800, A1 = 0.25, be = m1();
function z1({ embedded: f } = {}) {
  const [c, d] = C.useState(() => {
    const D = mc();
    return be && !D.entityId ? { ...D, entityId: Kr } : D;
  }), [r, p] = C.useState(
    () => f ? !mc().entityId : !be && !Z0(mc())
  ), [E, T] = C.useState(null), [L, U] = C.useState("idle"), [y, H] = C.useState(yl), [B, G] = C.useState(gl), [$, V] = C.useState(!1), [k, P] = C.useState(
    () => be && new URLSearchParams(window.location.search).has("lyrics")
  ), [at, gt] = C.useState(-1), [F, pt] = C.useState(!1), [Et, Yt] = C.useState([]), [tt, rt] = C.useState(!1), [wt, le] = C.useState(null), [Xt, st] = C.useState(""), [At, qt] = C.useState(null), [Ht, M] = C.useState(!1), [q, W] = C.useState(!1), [it, R] = C.useState([]), [h, A] = C.useState(-1), [w, Y] = C.useState(null), [X, J] = C.useState(!1), [et, dt] = C.useState(null), [bt, ve] = C.useState(!1), [de, Ra] = C.useState([]), [xl, Re] = C.useState(!1), [Ln, Sl] = C.useState(null), [Sc, Ki] = C.useState(!1), [Hn, Jl] = C.useState(!1), [Vn, Gn] = C.useState(
    () => be && new URLSearchParams(window.location.search).has("rest")
  ), Zn = C.useRef(null), ne = C.useRef(null), Ba = C.useRef(null), Ql = C.useRef(null), Kn = C.useRef(null), ka = C.useRef(null), Xn = C.useRef(null), ha = C.useRef(null), Wl = C.useRef(gl), Jn = C.useRef(Date.now()), ie = E?.attributes, Jt = ie?.media_title ?? "", xe = ie?.media_artist ?? "", ee = ie?.media_album_name ?? "", Ie = ie?.media_duration ?? 0, Xi = ie?.friendly_name ?? "", El = E?.state === "playing", { haUrl: Pe, token: _e, entityId: ue } = c;
  C.useEffect(() => {
    if (f) {
      if (!ue) return;
      ha.current = null, T(null), Ba.current = f, f.onStatus = U, f.onState = (lt) => {
        ha.current = lt, T(lt);
      }, f.connect([ue]);
      return;
    }
    if (!be && (!_e || !ue)) return;
    ha.current = null, T(null);
    const D = { haUrl: Pe, token: _e }, Z = be ? new h1() : new Zp(D);
    return Ba.current = Z, Z.onStatus = U, Z.onState = (lt) => {
      ha.current = lt, T(lt);
    }, Z.connect([ue]), be || wp(D), () => {
      Z.close(), Ba.current = null;
    };
  }, [f, Pe, _e, ue]);
  const Be = C.useMemo(
    () => Jp({ haUrl: Pe }, ie?.entity_picture),
    [Pe, _e, ie?.entity_picture]
  );
  C.useEffect(() => {
    if (!Be) {
      H(yl);
      return;
    }
    let D = !1;
    return I0(Be).then((Z) => {
      D || H(Z);
    }), () => {
      D = !0;
    };
  }, [Be]), C.useEffect(() => {
    if (!c.lyrics || !Jt || !xe) {
      G(gl), Wl.current = gl;
      return;
    }
    if (be) {
      const Z = {
        lines: sh(v1),
        synced: !0,
        plain: null,
        instrumental: !1
      };
      Wl.current = Z, G(Z), V(!1);
      return;
    }
    const D = new AbortController();
    return V(!0), gt(-1), y1({ title: Jt, artist: xe, album: ee, duration: Ie }, D.signal).then((Z) => {
      Wl.current = Z, G(Z), V(!1);
    }).catch(() => {
    }), () => D.abort();
  }, [c.lyrics, Jt, xe, ee, Ie]), C.useEffect(() => {
    let D = 0, Z = performance.now(), lt = 0, yt = 0, Rt = Zr, Ye = 1, Le = "", ta = -1;
    const tn = 200 * (c.rpm / 45) ** 2, va = (Fn) => {
      const Wt = Math.min(0.1, (Fn - Z) / 1e3);
      Z = Fn;
      const ge = Rp(ha.current, Date.now()), Xa = ge.playing ? 1 : 0, Ml = Xa > yt ? 0.45 : 1.1;
      yt += (Xa - yt) * (1 - Math.exp(-Wt / Ml)), yt < 5e-4 && (yt = 0), lt = (lt + yt * tn * Wt) % 360;
      const ca = ge.duration > 0 && ge.playing, en = Ql.current ?? (ca ? Qr(ge.progress) : Zr), ce = Ql.current !== null ? 0.05 : 0.4;
      Rt += (en - Rt) * (1 - Math.exp(-Wt / ce));
      const ea = ge.playing ? 0 : 1;
      Ye += (ea - Ye) * (1 - Math.exp(-Wt / 0.4)), Kn.current?.style.setProperty("--spin", `${lt.toFixed(2)}deg`), ka.current?.style.setProperty("--arm", `${Rt.toFixed(3)}deg`), ka.current?.style.setProperty("--lift", Ye.toFixed(3)), Xn.current && (Xn.current.style.transform = `scaleX(${ge.progress.toFixed(4)})`);
      const Ja = pc(ge.position);
      Ja !== Le && (Le = Ja, ne.current && (ne.current.textContent = Ja));
      const ga = Wl.current.lines;
      if (ga.length > 0) {
        const Qa = S1(ga, ge.position + A1);
        Qa !== ta && (ta = Qa, gt(Qa));
      }
      D = requestAnimationFrame(va);
    };
    return D = requestAnimationFrame(va), () => cancelAnimationFrame(D);
  }, [c.rpm]), C.useEffect(() => {
    const D = Zn.current;
    D && (D.style.setProperty("--pal-a", y.a), D.style.setProperty("--pal-b", y.b), D.style.setProperty("--pal-deep", y.deep), D.style.setProperty("--vinyl-tint", c.vinylTint || y.a));
  }, [y, c.vinylTint]), C.useEffect(() => {
    let D;
    const Z = () => {
      clearTimeout(D), D = setTimeout(() => Jl(!0), E1);
    }, lt = () => {
      Jn.current = Date.now(), Jl(!1), Gn(!1), Z();
    };
    Z();
    for (const yt of ["pointerdown", "pointermove", "keydown", "wheel"])
      window.addEventListener(yt, lt, { passive: !0 });
    return () => {
      clearTimeout(D);
      for (const yt of ["pointerdown", "pointermove", "keydown", "wheel"])
        window.removeEventListener(yt, lt);
    };
  }, []), C.useEffect(() => {
    if (c.idleMinutes <= 0) return;
    const D = c.idleMinutes * 6e4, Z = setInterval(() => {
      if (ha.current?.state === "playing") {
        Jn.current = Date.now();
        return;
      }
      Date.now() - Jn.current > D && Gn(!0);
    }, 15e3);
    return () => clearInterval(Z);
  }, [c.idleMinutes]), C.useEffect(() => {
    const Z = setInterval(async () => {
      try {
        const yt = await (await fetch(`./version.json?_=${Date.now()}`, { cache: "no-store" })).json();
        yt.build && yt.build !== "1786560035553" && window.location.reload();
      } catch {
      }
    }, 9e5);
    return () => clearInterval(Z);
  }, []);
  const $e = C.useRef(null), Ya = C.useRef(null), ke = C.useCallback(() => {
    const D = Ba.current;
    return D ? ($e.current = $e.current ?? (be ? r1(D, ue) : s1(D, ue)), $e.current) : null;
  }, [ue]);
  C.useEffect(() => {
    $e.current = null, R([]);
  }, [ue]);
  const Al = C.useCallback(async () => {
    if (!(Et.length > 0 || tt) && ke()) {
      rt(!0), le(null);
      try {
        Yt(await $e.current.albums());
      } catch (D) {
        le(
          `Impossible de lire la bibliothèque : ${D instanceof Error ? D.message : String(D)}`
        );
      } finally {
        rt(!1);
      }
    }
  }, [Et.length, tt, ke]), Fl = C.useCallback(() => {
    pt(!0), Al();
  }, [Al]), La = C.useRef(!1);
  C.useEffect(() => {
    if (be || La.current || !E) return;
    La.current = !0;
    const D = () => {
      Al();
    }, Z = typeof window.requestIdleCallback == "function", lt = Z ? window.requestIdleCallback(D, { timeout: 3e3 }) : window.setTimeout(D, 1200);
    return () => {
      Z ? window.cancelIdleCallback(lt) : clearTimeout(lt);
    };
  }, [E, Al]), C.useEffect(() => {
    const D = Xt.trim();
    if (D.length < 2) {
      qt(null), M(!1);
      return;
    }
    let Z = !0;
    M(!0);
    const lt = setTimeout(async () => {
      const yt = ke();
      if (yt)
        try {
          const Rt = await yt.search(D);
          Z && qt([...Rt.albums, ...Rt.tracks]);
        } catch (Rt) {
          Z && (le(
            `Recherche impossible : ${Rt instanceof Error ? Rt.message : String(Rt)}`
          ), qt([]));
        } finally {
          Z && M(!1);
        }
    }, 320);
    return () => {
      Z = !1, clearTimeout(lt);
    };
  }, [Xt, ke]);
  const Il = C.useCallback(async () => {
    const D = ke();
    if (D) {
      J(!0), dt(null);
      try {
        const Z = await D.queue();
        R(Z.items), A(Z.current);
      } catch (Z) {
        dt(
          `Impossible de lire la file : ${Z instanceof Error ? Z.message : String(Z)}`
        );
      } finally {
        J(!1);
      }
    }
  }, [ke]);
  C.useEffect(() => {
    q && Il();
  }, [q, Jt, Il]);
  const Qn = C.useRef(null);
  C.useEffect(() => {
    if (w === null) return;
    const D = it[h];
    D && D.uri === Qn.current && Y(null);
  }, [it, h, w]), C.useEffect(() => {
    if (w === null) return;
    const D = setTimeout(() => Y(null), 8e3);
    return () => clearTimeout(D);
  }, [w]);
  const Pl = C.useRef(null), Ji = C.useCallback(
    async (D) => {
      const Z = ke();
      if (Z) {
        Qn.current = D.uri, Y(D.id);
        try {
          await Z.jumpTo(D), Pl.current && clearTimeout(Pl.current), Pl.current = setTimeout(() => {
            Il();
          }, 1200);
        } catch (lt) {
          Y(null), dt(
            `Impossible d'aller à ce morceau : ${lt instanceof Error ? lt.message : String(lt)}`
          );
        }
      }
    },
    [Il, ke]
  ), Wn = C.useCallback(async () => {
    Re(!0), Sl(null);
    try {
      Ra(
        f ? f.players() : be ? Fr.map((D) => ({
          entity_id: D.entity_id,
          state: D.entity_id === ue ? E?.state ?? "idle" : "idle",
          attributes: { friendly_name: D.name }
        })) : await $0({ haUrl: Pe, token: _e })
      );
    } catch (D) {
      Sl(
        `Impossible de lister les enceintes : ${D instanceof Error ? D.message : String(D)}`
      );
    } finally {
      Re(!1);
    }
  }, [f, E?.state, ue, Pe, _e]), zl = C.useCallback((D) => {
    d((Z) => {
      const lt = { ...Z, entityId: D };
      return Vr(lt), lt;
    }), ve(!1);
  }, []), Qi = C.useCallback(
    async (D) => {
      const Z = ke();
      if (Z)
        try {
          await Z.transferTo(D);
        } catch (lt) {
          Sl(
            `Transfert refusé : ${lt instanceof Error ? lt.message : String(lt)}`
          );
          return;
        }
      zl(D);
    },
    [zl, ke]
  ), Wi = C.useCallback((D, Z) => {
    $e.current?.play(D);
    const lt = Z.parentElement, yt = document.querySelector(".sleeve"), Rt = document.querySelector(".library");
    if (!lt || !yt) {
      pt(!1);
      return;
    }
    const Ye = yt.getBoundingClientRect(), Le = Z.offsetWidth, ta = Z.getBoundingClientRect(), tn = parseFloat(lt.style.getPropertyValue("--arc")) || 8, va = parseFloat(lt.dataset.offset ?? "") || 0, Wt = `${90 + ((parseFloat(Z.dataset.i ?? "") || 0) - va) * tn}deg`, ge = ta.left + ta.width / 2 - Le / 2, Xa = ta.top + ta.height / 2 - Le / 2, Ml = Ye.width / Le, ca = Ye.left + Ye.width / 2 - (ge + Le / 2), en = Ye.top + Ye.height / 2 - (Xa + Le / 2), ce = document.createElement("div"), ea = Zn.current ?? document.body, Ja = ea.getBoundingClientRect();
    ce.className = "flyer", ce.style.transformOrigin = "50% 50%", ce.style.left = `${ge - Ja.left}px`, ce.style.top = `${Xa - Ja.top}px`, ce.style.width = `${Le}px`, ce.style.height = `${Le}px`, D.image && (ce.style.backgroundImage = `url("${D.image}")`), ea.appendChild(ce);
    const ga = (Nl, Ac) => document.querySelector(Nl)?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 260,
      delay: Ac,
      easing: "ease-out",
      fill: "forwards"
    }), Qa = [ga(".disc", 0), ga(".tonearm", 0), ga(".tonearm-base", 0)], In = ce.animate(
      [
        { transform: `perspective(2400px) rotateY(${Wt}) scale(1)`, offset: 0 },
        // Elle se déhanche d'abord hors du bac, avant de partir.
        { transform: `perspective(2400px) rotateY(${Wt}) scale(1.06) translateY(-3%)`, offset: 0.22 },
        {
          transform: `perspective(2400px) rotate(-3deg) rotateY(0deg) translate(${ca}px, ${en}px) scale(${Ml})`,
          offset: 1
        }
      ],
      { duration: 880, easing: "cubic-bezier(0.32, 0.72, 0, 1)", fill: "forwards" }
    );
    Rt?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 420,
      delay: 180,
      easing: "ease-out",
      fill: "forwards"
    }), window.setTimeout(() => pt(!1), 620), In.finished.then(() => {
      for (const Nl of Qa) Nl?.cancel();
      document.querySelector(".disc")?.animate(
        [
          { opacity: 0, transform: "translateY(-50%) translateX(-14%) scale(0.94)" },
          { opacity: 1, transform: "translateY(-50%) translateX(0) scale(1)" }
        ],
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
      for (const Nl of [".tonearm", ".tonearm-base"])
        document.querySelector(Nl)?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 520, delay: 180, easing: "ease-out" });
      ce.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, delay: 120, fill: "forwards" }).finished.then(
        () => ce.remove(),
        () => ce.remove()
      );
    });
  }, []);
  C.useEffect(() => {
    be && new URLSearchParams(window.location.search).has("lib") && Fl();
  }, []);
  const Nt = C.useCallback(
    (D, Z = {}) => {
      Ba.current?.callService("media_player", D, Z, c.entityId)?.catch(() => {
      });
    },
    [c.entityId]
  ), Qt = C.useRef(null);
  C.useEffect(() => {
    if (!E) return;
    const D = Qt.current;
    if (Qt.current = El, D === null || D === El) return;
    const Z = El ? c.onPlay : c.onStop;
    if (!Dp(Z)) return;
    const [lt, yt] = Z.service.trim().split(".");
    !lt || !yt || Ba.current?.callService(lt, yt, {}, Z.entityId.trim() || void 0)?.catch(() => {
    });
  }, [E, El, c.onPlay, c.onStop]);
  const [he, Ha] = C.useState({ nonce: 0, dir: 1 }), Va = C.useCallback(
    (D) => Ha((Z) => ({ nonce: Z.nonce + 1, dir: D })),
    []
  ), _l = C.useCallback(() => Nt("media_play_pause"), [Nt]), Ec = C.useCallback(() => Nt("media_play"), [Nt]), Fi = C.useCallback(() => Nt("media_pause"), [Nt]), ia = C.useCallback(() => {
    Va(1), Nt("media_next_track");
  }, [Va, Nt]), Ga = C.useCallback(() => {
    Va(-1), Nt("media_previous_track");
  }, [Va, Nt]), ua = C.useCallback(
    (D) => Nt("media_seek", { seek_position: Math.max(0, Math.round(D)) }),
    [Nt]
  ), Za = C.useCallback(
    (D) => {
      Ie > 0 && ua(D * Ie);
    },
    [Ie, ua]
  ), Tl = C.useCallback(() => {
    Nt("repeat_set", { repeat: { off: "all", all: "one", one: "off" }[ie?.repeat ?? "off"] });
  }, [ie?.repeat, Nt]);
  C.useEffect(() => {
    const D = (Z) => {
      if (Z.target?.tagName === "INPUT" || r) return;
      const lt = ie?.volume_level ?? 0;
      switch (Z.key) {
        case " ":
          Z.preventDefault(), _l();
          break;
        case "ArrowRight":
          ia();
          break;
        case "ArrowLeft":
          Ga();
          break;
        case "ArrowUp":
          Nt("volume_set", { volume_level: Math.min(1, lt + 0.05) });
          break;
        case "ArrowDown":
          Nt("volume_set", { volume_level: Math.max(0, lt - 0.05) });
          break;
        case "l":
          W(!1), ve(!1), P((yt) => !yt);
          break;
      }
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [ie?.volume_level, Nt, ia, Ga, r, _l]);
  const Ka = (D) => {
    Vr(D), d(D), p(!1);
  }, Ii = `${c.rpm >= 45 ? "45 RPM" : "33⅓ RPM"} · STEREO`, Pi = [Xi.toUpperCase(), Ie > 0 ? pc(Ie) : ""].filter(Boolean).join(" · "), ma = c.lyrics && (B.lines.length > 0 || !!B.plain), pa = {
    connecting: "Connexion à Home Assistant…",
    reconnecting: "Reconnexion…",
    unauthorized: "Jeton refusé — ouvre les réglages",
    error: "Erreur de connexion"
  }, _i = { vinyl: c.vinyl, background: c.background, ...be ? p1() : {} }, $i = q || bt, $l = (D) => {
    W(D === "queue"), ve(D === "speakers"), P(D === "lyrics");
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "app",
      ref: Zn,
      "data-vinyl": _i.vinyl,
      "data-bg": _i.background,
      "data-panel": $i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "backdrop" }),
        /* @__PURE__ */ o.jsx("div", { className: "stage", children: /* @__PURE__ */ o.jsx(
          u1,
          {
            title: c.labelText || Jt,
            artist: xe,
            album: ee,
            footer: Ii,
            mark: Pi,
            coverUrl: Be,
            settings: c,
            sleeveFront: Sc,
            onToggleSleeve: () => Ki((D) => !D),
            onTogglePlay: _l,
            armOverride: Ql,
            onSeekProgress: Za,
            onPlay: Ec,
            onPause: Fi,
            onNext: ia,
            onPrevious: Ga,
            seekable: Ie > 0,
            spinRef: Kn,
            armRef: ka,
            swap: he
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "hud", "data-quiet": Hn && !r, children: [
          /* @__PURE__ */ o.jsx(
            Ep,
            {
              entity: E,
              name: Xi,
              onLibrary: Fl,
              onQueue: () => $l(q ? null : "queue"),
              onSpeakers: () => {
                $l("speakers"), Wn();
              },
              queueOn: q,
              onSettings: () => p(!0),
              onLyrics: () => $l(k ? null : "lyrics"),
              onShuffle: (D) => Nt("shuffle_set", { shuffle: D }),
              onRepeat: Tl,
              lyricsOn: k,
              lyricsAvailable: ma
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "hud__bottom", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "track", children: [
              /* @__PURE__ */ o.jsx("span", { className: "track__title", children: Jt || "Rien en lecture" }),
              /* @__PURE__ */ o.jsx("span", { className: "track__artist", children: [xe, ee].filter(Boolean).join(" — ") })
            ] }),
            /* @__PURE__ */ o.jsx(
              Sp,
              {
                entity: E,
                playing: El,
                showPlayButton: c.playControl === "button",
                onPlayPause: _l,
                onPrevious: Ga,
                onNext: ia,
                onVolume: (D) => Nt("volume_set", { volume_level: D })
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { className: "times", children: [
              /* @__PURE__ */ o.jsx("span", { ref: ne, children: "0:00" }),
              /* @__PURE__ */ o.jsx("span", { className: "times__bar", children: /* @__PURE__ */ o.jsx("span", { className: "times__fill", ref: Xn }) }),
              /* @__PURE__ */ o.jsx("span", { children: pc(Ie) })
            ] })
          ] })
        ] }),
        pa[L] && /* @__PURE__ */ o.jsxs("div", { className: "status", children: [
          /* @__PURE__ */ o.jsx("span", { className: "status__dot" }),
          pa[L]
        ] }),
        k && /* @__PURE__ */ o.jsx(
          Op,
          {
            lyrics: B,
            activeIndex: at,
            loading: $,
            onClose: () => P(!1),
            onSeek: ua
          }
        ),
        q && /* @__PURE__ */ o.jsx(
          Bp,
          {
            items: it,
            loading: X,
            error: et,
            current: h,
            pending: w,
            onPick: (D) => {
              Ji(D);
            },
            onClose: () => W(!1)
          }
        ),
        bt && /* @__PURE__ */ o.jsx(
          Lp,
          {
            players: de,
            current: ue,
            loading: xl,
            error: Ln,
            onListen: zl,
            onTransfer: (D) => {
              Qi(D);
            },
            onClose: () => ve(!1)
          }
        ),
        F && /* @__PURE__ */ o.jsx(
          jp,
          {
            albums: At ?? Et,
            loading: tt,
            error: wt,
            onPlay: Wi,
            onClose: () => pt(!1),
            resumeIndex: Ya.current,
            onFocusChange: (D) => Ya.current = D,
            query: Xt,
            onQuery: st,
            searching: Ht,
            zoom: c.libraryZoom
          }
        ),
        Vn && /* @__PURE__ */ o.jsx(kp, { onWake: () => Gn(!1) }),
        r && /* @__PURE__ */ o.jsx(
          Ip,
          {
            settings: c,
            onSave: Ka,
            onCancel: be || (f ? c.entityId : Z0(c)) ? () => p(!1) : null,
            requireConnection: !be && !f,
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
  constructor(c) {
    this.hass = c;
  }
  connect(c) {
    this.watched = c, this.onStatus("connected"), this.publish();
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
  update(c) {
    this.hass = c, this.publish();
  }
  publish() {
    const c = this.watched[0];
    if (!c) return;
    const d = this.hass.states[c];
    if (!d) {
      this.onStatus("reconnecting", `Entité ${c} introuvable`);
      return;
    }
    const r = this.last;
    r !== null && r.state === d.state && r.attributes.media_title === d.attributes.media_title && r.attributes.media_position === d.attributes.media_position && r.attributes.media_position_updated_at === d.attributes.media_position_updated_at && r.attributes.volume_level === d.attributes.volume_level && r.attributes.shuffle === d.attributes.shuffle && r.attributes.repeat === d.attributes.repeat && r.attributes.entity_picture === d.attributes.entity_picture || (this.last = d, this.onStatus("connected"), this.onState(d));
  }
  callService(c, d, r = {}, p) {
    return this.hass.callService(
      c,
      d,
      r,
      p ? { entity_id: p } : void 0
    );
  }
  /**
   * Les actions qui RENVOIENT des données passent par le WebSocket brut :
   * `hass.callService` ne remonte pas la réponse, et c'est elle qui porte la
   * bibliothèque, la recherche et la file.
   */
  async callServiceWithResponse(c, d, r = {}, p) {
    const E = await this.hass.callWS({
      type: "call_service",
      domain: c,
      service: d,
      service_data: r,
      ...p ? { target: { entity_id: p } } : {},
      return_response: !0
    });
    return E?.response ?? E;
  }
  /** L'entrée de configuration de Music Assistant, que ciblent get_library et search. */
  async configEntry(c) {
    return (await this.hass.callWS({
      type: "config_entries/get"
    })).find((r) => r.domain === c)?.entry_id ?? null;
  }
  /** Toutes les enceintes visibles, sans passer par le REST. */
  players() {
    return Object.values(this.hass.states).filter((c) => !!c?.entity_id.startsWith("media_player.")).sort((c, d) => {
      const r = c.attributes.mass_player_type ? 0 : 1, p = d.attributes.mass_player_type ? 0 : 1;
      return r !== p ? r - p : (c.attributes.friendly_name ?? c.entity_id).localeCompare(
        d.attributes.friendly_name ?? d.entity_id
      );
    });
  }
}
function M1(f) {
  const c = Object.values(f.states).filter(
    (p) => !!p?.entity_id.startsWith("media_player.")
  ), d = c.filter((p) => p.attributes.mass_player_type !== void 0), r = d.length > 0 ? d : c;
  return r.find((p) => p.state === "playing")?.entity_id ?? r.find((p) => p.state === "paused")?.entity_id ?? r[0]?.entity_id ?? "";
}
const F0 = `@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,d09GMgABAAAAALyAABUAAAAB4CAAALwFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoZeG4KyRBzVcD9IVkFSi2k/TVZBUl4GYD9TVEFUgU4nJgCFNi9sEQgKgbtAgaEUC4gOADCCnD4BNgIkA5AYBCAFhi4HoQQMB1tzzZFCvBvP7u3DbGpQpdsQgMqps1L7r3ADN3ekcLpSd3VjDvdRxlSwXT24HeDivrPV7P/////PTiZjjG6zbhuAgIaVWf//oFG6m0fKpZa1GtEM3hHeiRiGTOHDNEtW1uphm9xD8Yfsc845xSOllI6MZ0bgBa6OXQbsGPkQKYlQqD3X9YVVvH2KntB6YJwvZMXkp+C5yraOrUrG4lPZsKGIy79I0v3UzBZt9SM6yqcJLyKfWogpGCTMhFHtxxQ74e+iXfmlkqJiNbeKZ4KLcfByGbnFit+pfrn4okou/l1zuyzDbEtoImSSXDLgSfrNakEiSjNkyuNXIhj2Rtg8HXFaJ1HMmcuGV+Se8CUCw/bq3NAqMQ78EUkhmkVBNNkIe66aFY24EF5FxJKmvYhLeZu+817KeHDRANVOdSZTE0mx05wGy3iIsAUf0f92lq9M9/vv/v/fb8Oa8yVqT0nuI2nTGlyeDouviNs9inRBSSqDf7jIJKu0nX6r99J6jx/12cSUdscJp/KxG3QT7RY/9SEwOBbgQ6oeY7Wz9aQv/8DXVf25LyKzMVb1gPyyV/Vl7QRt6Yojsq2qemYjy5LWBREQDCugh4gIihyuKEEw4qrLEgyHmBCRJ4m6LkFU2IMVOZKIiIiYOEQeMxhxWTBhSKjoeZiRLHLKDI9u9i8BQgghYQQIEEKYUxQFUXDWDq/aau0aNzrutm2vd78V8cbevb39PbuWZ+c8x6yKiPAv2cH/SXIzsw/6FFq5J1BCrkRshmBunSgGwlBJAxEEpGLApFwUq2DBGCNGjNwYg41Bb8RokWEBgmRpAypG/w8j8yOHxzn7l6YGDJgwUT8nKWxnYvunm0dKKkBbSk3TVKjTFqliMpggPjnuPrMz5WTD46b9o6Xicz8RK9tuu7tvrowTla6+VY2ikiAhJBCHQEhQ+fE36//kJECQUp/ObldcunvvM5Mvk9KrX8/F1mREaYECwcJRbVYVmlQxSMieub9uWxgmi8RIlphMT53AF76nKsiZ0PP9fv+5+lz6NKMTYVIxFkhYYhkun/JxgkCrUW8HgAHfZv5wV/Vceo2IEwFWEZPFfBFfSpOnX/qnojXxvfbOns7sUMptOJJCQsyoiP+evOentnLVv/qvc+q3CjpUOcAOsAPo0KMDOG0kq58AOljNltFOGB3g1Wk39AQ+xS8O8/f2tb0KFOBgKOMZL1U4wNeMYxxsv9E/WGcJZSGtFOEB7fTCvnubsV0HO3elSVt20/zFnBLJeSx2SYRDOIxGqPU8RgJPuF85+HmvCAoloAW0qpnN1ZoqVyeaB86JTwag9vO2+U4T8Oqd45RC8P1TgDARxX5JhfAg1M6n8RC/Vvnq03CY1Bm5s2EdFWWiq64nQELabXh/W6ELYrD0KGN/dy8Pnu/Hfp2LS/+ZITNElUYJRCp+/sOmQ9KI727UZhKaaVN7/e7eDp/n+d+v37nET/Jmln+chL03c1EfaZBcszZCIc/qeKRSqXhopLsRZGxnVCgYOdkLjTA1U75J7ShGrq85AEUWC04hNRKJJLmkXTYEEomQ8r+0uDorErLq35tqlf7X/UE2WrcsAJTp9U2t+1gLaU0MqaVZ41x+cQMQBkADJJuQWQAUZ5qUa1DDuQ+InAHJZa0akKHIcZY6Z9YY8wFKdS1K2mqRMqDWUVqrUnbWcM6a7C6zNrq66C4zNr4ssjYyPojyi6Pjefzlp9RXxx159GynISsw0ICMHEp2x2Pw96b1UZBRSilwUsStMGYtS6mEg8D//99rmnf3+uukV5OABjjgrdyfaZX/GqqAo8FB7AajPvD/7zSjunpyTr4H5QwKTbZUzt32yPZI6ZV5thZAFtEQuADh/f911tvqzrOO7GXtnH/GIfAnLBpDCGY3XSO9J83T05VsztrWeHDh27OzhAFr7M2RvfsBePIrxNn5wHj6cAVUp0pR5vRY/roO9m3aOvn/177VnXUPkU5IYt5onA5zd7hriHv0O/Lfmgs9U/Obh31IYl9QSfDwdtNuh0l/yQPCLsqCk7aAsgDwYxiG8fBxpbpvArSA3xLRKu3+nj/HSTuhYmYplrUe1IK1ZgUs8T+3urfPITbBbEhpWMR1wRYNLUqgLqa70lw8win+AxOkGc4hlEASFBLH+49zadu+ZpCODzJQKCd86ya/PCUX6OUgf4wKWKid69xkIaJpe8B9qYqXCivJzm0ubT+U1oRC5aKSEw4lgX+3l0fPDZgfC5PyJkVCCRLKvuc7UfJ5cruT7hDMYYIwRgghjAhp8O20fw2wgOmSf4buq3WCi1asL3tb8RLoYXGaTkRUytALu8f1t7tllNFh3+45Z+eWItkgUkSCpEEkc96Gae8EDyDdH9wnQUTEfiJHkJK653clm/QYm6mDz3L/exsG6IGkubz2yz5bg5njsnzHHhc5yjCOQwi22FGChFCOu19raU01dtpuYNXfAVGAH//IzvUXirFP/zv0Q8D3EOZgGihbNVTjCfTMK6jNIPTLEIwgAYxGFmACFAAmRAPARuKCGssWlDdc2DyUMI2KsDy6sEKGsCLmsBN8YacEwy5JhdXJhGnZouoghXXxouoTRkEEOBywO8ROy8zCKiUMYc0hGE+IBuOEgNsD1wcOJoEIBF76FNWvW8a/lWR8cpnwualV31D+g2XPb5YWzMFgE7wQfBUMiAAtzk8QD+7nLDCA3lr4ji7Q0qn9RVPfxlPKpM8205pLNKVuzXBniJpTlqg1ZdfZU/aMPWcvOFOuBXdyD+4UPAq33uSd+lb9t8irUghIFrgw8DAwDcQDKXQVA6xiA76MZ3wdZ3wa3iH+iPoCy31ii6hEQwzkY+RO0pNIrpNMfZQeJVCdlEEt0/+7SXv0Ns2MY4CpgemcrGjJK78i7vGxxvmOODaaYWbamPJQnJtgIt/rscV78eCP0M1GjQYdDqZhIlT0WSxeGk/pWQTGRLq5+prRdZ7EK3o6H/HJP8evCCaCIlCCYqAMR8LTUXtpI4gcpSOKxiNzFIqiMRoXY18ci6sEKq5NYklxEk9K02jmy6JZLItnVXm2SAtSnC+F5TtDRXQUU8xxchFpgJhMk5PSKJJ8aL2HUzy/nXlm2SqXxJZqrCGVy6mfFiVVRSGVVMuyZ9nHwjaTLVjWQfh/hK6gxvV3VUAXZJKUlpW3vMpRFQwnG7V6g83hhLwIiocIima5KB8TEqnBcRiJNC8IzFTdMC27WqfUes5ktjndvmisUmmtDVyBVLUGRD7VFYArSUHATgtlo6/1tt4Ol3u2+Bzs78vHs7B/UKRagDk+YCkBDFQJthOPcYcHfsUXMHXRbL/LZVg/OJt/7eaAsMTJdXMrUCuaLVhf/OXV7+irnJ6SCbEZgvAh3KOsYL642IdjkXJko4KjRshppO/9pI0aLFZX/N3DQxmbYOrjAT/79NOaeBWf88J2dwlitElg8r0ECXjeIqwTKkUDwaLg1SoH/uKvY/3gQ1Jj/KofmAvXXbL1+8nCn5e5j892isPgkDd8ZkN5u5fmmZMfahGqutcXnayYN6Xlw7NN46XUvlhu/lkVUl4w6XzysiO8fH1cuNCuSZWVv9ZVTS+k+kVz5S7r51DS4q660uy2speX4DLhin0E4kVJOLZoghXZU45b4SfhYo16VZcnHEuoYBwSe8U/L7TkdFxRq3AynWlNrRJqQDY4PozgA4ujA+sl2EOsrGNGbbHa8ztEtUG3WmuF0y1o9gyHOWSHaaOsAYlirvCmQIek0+zdqluzo9oDXSOVJOIzZTZrtuAKki0Ey0Jyq6qC6W5ShKjhtLwfszlR1u3ymUIhKYygjxZqQ4jMGiI2CNcgAINtsTVYRD/aUY8KyD1kZiJYQNsZWkIoN7igBUYGO9Zou9rQk93ZNa1qSYs6qkkd1s6WZ6sKE2/c3KwZwlBgE8R4k8A00o6++ED2lLdfLdw8l8oR0FH2KW0rQ6JMDtnNrdmNj9qDjG5iirnc7F7sBrIQbhOS1MFtX25g2/amFoBFyeuvIjZPbtqe1M32bnRTf937nIaxN4kJ5TOiRLYrigtKw+H1am3avnke0G78iZN8myoQtVa5xM5H+Y3Ss2tTnuRoW1HluNqHxXKYBEt4KHvBRmA5ra0eV8rpJ7Ku1z4/dxP/WD84MxS8hdi6vlhiVlQ1SmM4NbDTp/Y+P0MDWzmXZsbp6MnxvBiixZJn8AVb1/yMN2qWBjceS2pDo+krl0JvY7aXv1IL3nzP7UIcPB0/pF3dBK/eaL/t9Fgl+MJOxLV8FidqeKb5sgUXi2Ot2sTGU2edj3EKowZ2/CXvfrUN7TX56J6+XVybPM3erX/zkdzIzXeU6Fbfrw+u/mgcvhq6kPeVjfTS/UssNRSqoytJDzOtCE0aQuuJWz+4D1UrijRM/6Rw1XK8lao/8nSKlKSaeCgTB60KK5/2W/0puNbqSX7BuypUrxpl008XHRNfAtSUojuQPnMTOGmMap1HB/82N59DGUNsnD38aynt8URUd5jmY9TUGKH8q79vOzz69ttFvtdEbrzpfgc5ISzXY1pc7RCRT2y9SpMIrprR4vbHskEuxmTEa9Pt+TkKl7f2V0+8ZXu2/YeS2z02tq9o1pcn9upFSdPGO0Atn+Ewl1J8+ZkWS8R7c9OH7c+evtcOvo0VCnUOd+VLBrVyEpIX+5ph8Oaz12NYUkcWaK0ylwpZS00NzpJtp8Yt0enZiE/YZ7eSGujCfomrOdrze0U1VNUNbSEg6sn18wtRzG8QqEpthNNA1/v8GxBqhJS6NbEkO6yu696019d8GTJlPVxLtf75fzk/C7g+t3XWw2xo868ziOzl09OJDeBpHJXQlViH8EnQ/LVoO7cLwUZNk3V/ik2xJooyeCyJyzjrbxct1CyXtGtbLfLaUaHo9JeGqR58x+eNhyeib2qFKF1lLIksUriemEI5rZ9lJJGe04GUa0G346ZLHWFfLLIax3C1/iSXCgBNDwWpF9RQZmK1k1orduRjd8YVu7tbYluu6376eFLW00N8dlUnT5Yac6uSqE752qObLFAqqSuJLEIfrk/Uw0mbnh+4XnPxZTOgz3/F4/hkVd5Ivx7gEiVatx2fVLvY4QvjfA5L3OXfL3lTcbkiHtVcy/qh/sgdXe6IulA5HYYzG21vsPCN+5NBEzlJnWLNb9sbKbCnfOwD91cOrYRlDqbqRCw5ikQ/f+06f47Hz2Y0f/q0rdS9edC0PQIddCYbMMVPtLoQzf96srbYp9LOs7a3QXQ9AZL11duq3PWE7pLCA8/06vfdjw5eRvhJrR8qASnBJXaJu4d3DfGLdmADD7i5AzfgYk6eDsVLbyDak1/S8EVIyZ3KPMue9MKnzxrxj3wlVDFvedMZfOd5nNQy5UUHfxIVZZWnU5iluWj4MsWfJSRC96du732sBlKbqpzkkjQSp4R/dkuFt6ELiA1UnyEyl+pX2uFxsgZSm6occkla8rje8FhIpKkdF2sDO+sXyKB9KoXU0i7Ir7F1VZwunWqzy4sB6fCjSMQPhGEh5vpwty1uYThoAXqeC0G4NIlRVnVCJX1db50yVyJcX4AiFK9XV9ehnx/1HI/VMsvSJI/xYf26hnnkXUuhZnhiqVArLcVqi3MhO3PMwPew1GNQ38blrmMJO7ElUR2F3APuZfyiF6niEsEaBMvLrBKofzlTkSa/SvrBPIXY4QGJGn2oN34J/aAUxJ/Hq0Gc9uF3/FvJEinZqrPY24VM9FXO61tdJiyRawzTfx4A5TJD2fjoiHkUWBfuHdBKhp4A0TSrwI9BG7imK2ZdQhPfWNOAH4JYh7a3EqkdfhaKYbwyDqVEE0z+grfBACEA9iYjNkyIhLM5xmuUwV8WjSTZcqTIUy1NjfFCKZe4SZO3jxH/MKn+7RME1ii9eEF/MZc+Inz9CUN8YGL+858LQrVemvSwxts8whDvuDvz30QIjCNfMBvs+plhgPF84nj7hGD8/P6Duj0ji0M/6Dq9t8LeRCMlKnwXNiSPbxNsk4tzvGycPaA4m31YBvc5jKOextkmH+doQRz0MXvI5kovrqX/pLhi/L5n5lbGvHy6uSQWf9YsLqg7lPnZxfEGQqlVfcvbhvPibczl4byyl6TURW9rMWy5oujdtXpaMkkgF83nwXtO17Z9uw7BpYVugztrH3TFcRgZaFSQ+K2zvey4ncSllPDIzbmQeAb7ONvzZJzIt/C7lLHjozQDPIPlJVFUC0kXh+9GYTGkFTVb8QsODq1sKZdtc6VU2md8xJxEbxP8OzJOh6XGdzAGHpYjOy215rT2s5E45nUrWoPgN5iuFtUfU3CvGmc2NnY+8b+v67tw6J8MYC+TQC6LNDgfOK6OyuubEglkg1TDwtvR5heOPe0HnjbpldAWCI6kPGGliT/KOuBFgBptoXqfhzPwhTV38B8KWXf/rTZfhuOobHTWj6N54UTtyV7+8a+bhR1shsosivZ4HkFbUl7IMGxxznXMP4H1Tz7iN87iKYfT3/ez4LET6FTAOP/NfbkQ29XmFZac6wtaUq0mnX0365eqUrs0Ky07Nd9vWpPylCSmNqaYEczVZK5FOV8r38b6pcdxd9AfJlDMSDXFt9P5T/Ij2439IaPu7E+t7+EEBl82Wb0mArDXy62Jjlk9zknVr29ymnQNNk65Hd5vlrGBiod6wM1GiRstvLGSZPsY0RTFkXkiZtosZNN190Y1F7ud5uH250KCxrVUcnatkZFTt5Ln0gaFudeCalbV5PnVYtKiWhkKaB9aVrvkHVBg3UmKBngLahiFNPWh0I5JtjwDbyt7imk1dGfzZdRWZs+oO+qq7l6ujAn/HBaWXmyXitFykyACjOMB8/hgQgIwMgSIQoFxImAX1mFMTQqU5QfnIhLUVMVvmqDcBDddUO7i5ymjymVWpYT5SNgcCfMTO5nG1yCqZRpVk7Ag0QULWy66FdJrZRKvVRLiF0YrYjXxm3DJcVsvPU4bZcUqSmGbJe4OmXanxN0l0zYkkRIowxIR3VZh20TaLkzVrOxIQmwpiC5V2M6WRRrRfQ9p+mUgOrWsekzsMmXYEz193ofhC7LsBf3Wi7LpJY3rZZn0ikb0mqx7XcN6s9k6Ng773lZvLNiVAYv7S+qEhD2DRuhcfo1hQ8gUxdawDmfW2FeGJdbzYJoJUGhRrleWC/O7Mgsm/qhlFdAZwoeNqoLNUBzvaRr8wjWjVwT5z+fj5hJuuezPx5XDewnjCH18evTx8cJ+IyO6TZQGI1gYwWLluoTl2/zeYbaE05VNBghrAiIGKCPZYxldswxnx5yEGWNWRqVSNemwir0DvHcHFcC+Vbz3co1y+te4D7SX4sre/pwyuaIs5cGRcRBSyEEu8nAJzqd/ZlVFRc8nIBKQvkXZ6zql4MaC232q6cD+gH02CcwVzBRcn88N5v002Q1LSi7jwGVDBgqsCjNmBYVaNmG4WhLqNgZl4w3tYKIbvAhbktftnKDjMP/c8EGS1Uw38xLBDb6VPbjhwYAN+QtbNqdv51BzcPujQdUHt9vAa/3wDa1aSz3rRgmjcjF39ZkJlMi6gz4U3Gj3Jek9WeMAnKdbSDEBuO13ascxQZ5o4PBep6Mk9J6z7xHyydttY4KG/DnDKEECnY4rQY1q3nGHy56D59JQQhZO1RRwbT2cIYmAQyTuUIZ6sVg2harDcwhlysnI2QU1MHjFQK+OLXGhN8MxMqZCOjixT9+DkGYMJ06H/MsomDkczIxOYMFl1PGKL9lypvcN9fToRNQbhGRsNVW3yV9azlfoeMw6Z4hBgMKUsL1efIVcGJPYo/P6XyzxKExW4NJ1zvWlO5H7YfV388YBN4BBFq/Z6/+T1U7o+aGi47HjMF/q0ssDuuqxcX1+PFbdDLn1KrxYvY3Fj+qJ8PbCasXgtbBuoETciI94trWeFn3bB9ov+O7TMbcj131VxT1Thgd8/SbkOkBC8bVLso1aWNbM4+q/42eexXayLcW7JYNQAWM/0WxL2ZNk5d7jvizh5Vm1uNavGZ1tHFcu4q9H/xHsv9373c48He9WxN6+q81XeHVdzi6faj05BekBdmYnHlfacjnwjM06bdiXVtxqz8u9vVIo9cLKAqwcKQ9gsY9oW5HQNsnpYDVrdKRqH8DW4NqijLmjLdYr+8UHlqZP5L4c9g/AfiwtrpRJ97GcR2pj66rv7ppbelejasQvprfl8T3IvnxjqmhUMsoEWueXGs3gU2mPsGtEdhruwya4VD113lVXWOd2MfY575o7AxVwnGq2OW9ZNUphWrABT7HIBel7cLuemC2461UD68/EX/QQ0+Le7Z/vV9cFr7Qvn3PUN7pz1mbHH01Xaq+X//evdcxWJxc29wVUq76mtCisUVSaAZZw4kvrjYO2N4XH9rUmDeyt7zzXINmz0TqDamwmShmz/noFCj2jy/b04TRARoMvN8sN143FM72G3hxTHC2FE9Kx110GZ+wWJ6wvUeek+2k6+WDSYLTeF9Ed8yqnaHJabcEWCch5+yZmLW81aK3/AP9m0eofK2aOYyexOHo8FpetDeUjYHa9d8yM1vtxFu237B69CZ2s6eino4899Fq4kZvXhY+H30ThjKZOfKwZQeekgMzwmCO3u6/JAE6rJfAxuzuZ99geWK9b6yvHqfeA6tEv0iR2kGQM6oanpTN/OsPJdj/pvYTjHL/P8EV6pb/5EN7pP4enOU1l+I7fR6s9TYBWPuyKFG5Bj5bB2u5Y07xj1gHNb4ljZyHVti6UUFIChVU9ZT62ABu9kUauB7R/KYZCmTxzd20z1FfYvhRosdvqpKuzd7YTNI2n035NzpwgurhwNQJAaqdiL0VnH5lWOnbcywyZN9n6jOhw3ID7CPMec9p12dNijrHbd62B7T597sW/oWLBY1m+gt0bxzgWokWBJbZ+uUBnDbAlLxH7zhWUY5xkQZemKknXL5E2znFYWxJ02LMpGKeXL8Fnr2ZawR48atBP6znhZ4XZPJ6H6deUoBMUKQDYMA4sPOIRxzgt7b11QcGQ5I0bps1fKAE92AojHt5OFHw9BqwHgNqlFtYHaXaE1SdaIXUiCtgPKYWnPOz9hhEyYplTyN8Dl6KtTd5HAe19MYPESDnqpuZOi66CaLG7Yf9cvPkhDauxC7k9Hv2QO1V+igGnCxgsysGOdiSFWEfBFU/3+60WH+DGBZj+ou5BQGyOJDDrNZtVzOU2LzmKPKQkH4zd5lB1HOaIF4KdUbJdnqHVGtUFIAUBVxu4XgGI/3YsKD9wFla7TBYt7aikZxLpxKoeU0c5pf7R7dLrO6rGQGZi1hPqTzExEFqctwBYAjQ+d2HGtcFasJ+Smbk6PSZKi/vyZUtEtBzX3XtF69BSEUcc5ekkm8Zyvo+pdQbWbeNiXWWcMBEJtTz6aOksndQtT6Mb2DrpvWRHYhvOHEu0gVpVtlVPLSuvqZVjTlvZ+9vCcP9IJ8gheY1P0ohuxhaQmidOuP2jMbtLryEgtvb+pKelZpHI7tn5TivyTZAvp3Qyz61ErFUurSif0uI5YEtGdYsTJvZiyu9WppgDtSB5OZUg5KW814eZfQTGN07bvAQ20bmj415h8GeLld2VgLwexfLF7xnZsfwBMwDMckKBQgIAgOggakRH10zM4Q6HAtqSEKWchT+f6RkoueEGNP/wcHaP/Y3y4aHX80sN4JIn3gQcD4prQhotLX6AQvZhu/7c/nF+ntxY7Z8ajOx8hR5sEzZJfj7jCyxxskXc4Oh/bqune+EaObNalUUToDfMPI5eYGbFvVu2XtapW2z2y3zu7LmFRPO/h8X8n9t1TNettsibDAxLDj7f+wQpYLWHVJ7i97KBEeBEMBKEDdTqIHxw9kDcgDoxmEz3UQWWGASt2e8zNBHKh98PYN64re7VCwZ86E3mq8WViqo9G7e4FhN6XHxsqls/H/rvUTvmnQBa0Vyirxb6PQIY8mIApGF2ETA5gwfY9y5ov8eOzoClzkzB0WmOw88+ECVYzHpA1gd63otmLSSZJvAOg9nh9/FaDWIu1WwrCo1SsL/CG0aADR77/wz5ESIFP1OQDUPpqIeAu1wxvTwc7eXjWK8AbTWk6p1IKDIXrRdtEG0U2YnsRQ4id5G3COp2e15FoBXvQ6a0h6vYiT7f7cs+oTQPXyevpglnxDuHbxnTuxXfjcudIhhc377ZuzHApT3C5NkaIm8GJ+eSLZsDhR4TXq7VCUbuuk7HgqfdDxziuNx70tb1+IEXbpBrD040ucqcRnJy3RG5PKdxEZG9B+dmyhbX7Y3e4CJXeO6GC13csyCHjlzvHuC1PR3sgOw1kuWYHD2x/8hjNzsLvFyZcZBHzulO4OUE2+3LSSNPNPR04fyeCQ60y9oZtuWCLfmQ+/9PDakIAyyGZCDGKHzDmEBGs+KTcILYc6N4eEEcBFCCQiCT5TELS0KeFqPJLIGWWoq2TCCkEMzIYqH0LReBZ6NNhrtNDEvN4hjbQElghyRirTJxZNkLZTuIKFFijLccRpQph46qYOCY46x84hQDlSpZ+dxpBqqdYeYbF6CLrqFcdwdx1z2U++4jWjxEeeQJPU89hZ55ga3VK1yvvebhtH9xtfuA76OvLPT6xly/7/gGDDI14T/op5+IX35xkzPELhgJTIyHFExJgCxwDUE2OIYiFyYmQh7MCEM+TM/E1EGXmk5DSrZjSVlbc9sRWUOSoAmSoM27qTJoYmpiamL6Su5rPqj04/g3/erdgp76PdWZJGiCNtSyhlqVQkxYWVtZkwRNkARJ0ARJGNP2crPPj9n2pMrG9aw9mHMvPdjvff187lUiCU8M97r/oalguxACLPoMcLKDPJr7qfCZMhIaZfVmSvU5UlqUzougXyygFFFESwIOiw1nPvbWIlxjjJqbxuqQod9WyzTOE3KgPAdhphjJAsEjwYvkSOGNWuKQ7R7MDu1/iWx589lgRWA5VlpBXIUAScoTZVbYWEaoaGGlTVFu7rpxTiLp5iSSzq3ustc+e+2z177uqMBps802O2B1N4F8i+VbbJdttttlmy3dWI3Thm7IDvnucKc75nfKt3ieP8+Xb/GF/HE/yLfHYogd9ttjZwh7dVkyBxRGgMA7BPIrcGqq3JSd29bUNDMlw648uBgCb180mFnxDiZ77nKRc2OcVsNW57527j3nIgC7kkCeP+iSO+ciuLWvP82eew7bGQ6EKJz+He66vfkLeOPp904X8ABij2cPOJ3WUDyhITmVbSwjKyLJJP+2t3IbJWsPzY0nek4uxxwSTn3nM5x97wKP/Kh4YmzRpq0ogPe4QB8my74pVGgOM2W/qpg1fwsYqpyFnVm3JyrNFzBCkVgilckVShVrYGhkamZlbWtn7+Do5Ozi6ubu4enlnyywcXDxNGjU5KAevWf6HlnyAPQbMmzEmHETnfboDDjksCOOOua4E06aNWfeKadd9wuDRTdUQp/6r1BgfnWIXXJCcfAGOGqT+EcJmO4UBWgsbBxcPHx6BPQJGdxMhCx6rGvJzaiNy+nBhkibHhu1OE5ud4c73fUEOHr3Rc/u9rWegxflpt6RHFnASaf8rcrpkpqkpeg0Kn1HQY+rAqdjvByfTgAnnWqlyd+qnD5h4HlV8FW+oxbl2ofgE1t96nNf+NJXvj7hr/2uTyrhCgOXe/J2jNMi9xZwwkmn/K3K6RMqhucVB/C6vo6DyfBdxCu0nfxnEzy0XCDxyNLC2tblMXPAYSV3WrcJ6yGjTqvtk+MCp9KvRQ1zx9OxAJG+/vi9ZOkGXO33/pcLMpep3DHG/MyRB+bPBzbBdvFsLRJ6WyTaapvtlBUPlSj5akkbBqW1D+x3q9s94wWHHHbEMTiCEEVkyDBde0bGgLMjY9tBRCCi6EEgKd7uIEXkGozVVAqXTzzR+ECvsrlt3+UnHZfpotY5M+fcaXntEoTPX/RfefNp+alN/MAxePxGWQa/IiPvEOFRWQfhgB8hR6DXdXC9qkOaFJ5L9ypusuxRX73d2j7c3tsEd+ayOtb6sUIXaDF+3e6LVzZUOZU4mo0FJiuCFJ+z65NZyspiSWwKRfQuC1Ufp3BOKVjxc26q89Q/kfluuGmBp15ZpM1X8tIOw5/3lCPboWi3higUNfHh5sIGo6c/Eotx5UolvkowobTAxKP3u8pxOgmkTJkyZcqUKafYjCHTyH9l0omMtiNOm0GhMVhKKmoaWjp6BkYmZhZWNs4IMC7BCu0KI4ITFROXkJSSlpGVizyjU1CM7/0x0ZqiHsPjnveCF73kZa941Wu7U2uvoYfuFHnGpKCopIxXUY0a41KPBiPT1NLW0dUjRJ+B3GiweGnyDKWgGDXGpx4NBtPU0tbR1SN8Pc1Je2kCFaQezesxPO55L3jRS172ile9lh5sR+QZTkGxGrGaaGnr6OoRdrMp6T4A0ClKDKWMV1GNBmPS1NLW0dUjxKM4j3ncE570lKc943kveNFLXvaKV5vXFpRwiqEqKJvKVyPBXhRoLGwcXDx8egT0CRmY/CYiCFu0g2qVVL8ccp3irUnsvvGASVvbrLvPi4FR+2zKrQf+U6OqgxeG8THSiqrqKzu6YGHaduQVsaOqnKLjFiGqk+UZyCn/5NTdfKVFVU2V01JfvgU8usVVSFahT5myj6cDHNM2jR/wO05Dp7tFUS9+5YozaUbt1tCzcyE38/v0233D+qhMfQW9fsNt/Kw6M6+MO/IXdMPNaF3YS6+81uaNt/7xzr/1qabLgB/NYAa+74msv7gWT5VpdPV1VeMYmIhXsfZ6SVXaFCLFGj3WBWHyszg0xAnqotsreP8Q0luS59BJp990ZbfqKaGBiIldhO0uoSxQHRC6zdC/n6y3BUGHfzPZUxMaA7rmNfs4DCxlAPqXjwFL5aApq3Tj1WvEvednuSri7hnNlxB5r0Ixj7X34SNR+D2oGM1h9kNqeR4eD/tbxdRHvUAnKdqD2BE2ULPtgYtPQMjw8mU2FZoWg8XVgeOOr6/ObBQzGzv3SSdHudU7U2mVXK2aXBv/z7Pz1Dxs7NyRwhax6oR7UAnpEAbuknHEst26Vv0fgrQkzcZHHu89qh/ff2ATIaabAXIIhIuIMDkc9VGIBmhIRk6BoqTDMODosYxMrGzMLOwcVNRoGlpOLm4eXj5+AUF5wvIViChUJCompFhcSTB+BPUAupbI+PmjZVgTbuIWEWTaGmmZdbOszGumzbKHlTax3RxN8kt/zjEHafNvaqjyUU8alSHz+UHDwIuEhUNEQkVDRsElcGdu511C6H3vBdQK1TipWMmlg943FipBKTWUyBUmQI+AcWO+MaUVqRpTFXRd/RhCsTJVXvhXKDQGixMRxYuJEyQiODp0xLEzIUwuOu6Fyj9iQbEK0y+dNHEHhDL1grELsGlm05WqZIaVkCDsbmPWedS1zne8Cfa1XDlF5dK8vCVnjgIxWjjPTlZRwUTSsiY3mYRSvdOraIiqyA9lhMfccPRr47lf8wpXe6QHuJtzzq+WgO0spukcJwTFQqHTc9dU0KCQHUX3ptA5ZM7JdwROxEPN2+4rJrvGs8lNM1tedS8xnXIaXHxaH8VAkcU+v3uGFlTnlgi5+jvfF6sWVU2Twh1jKLtDONnps6GVq4L5pAi0feDVHwKCOhAkCvUA2gOHJULhrK58/q6S4dwQaAyxV6XIFZbHVwyyVmnI5Tvi1VV6FYFcDiMuWiO8kuUSD0UxAcHmeQhMJYbEc2lzMCQUFuchMCQo8/M7MCSEZedmGBLn9iw43lwFhoS2b87ZYEi85sSBIbHcDgZDotqaDUNiDPhfATIGDcf3DmPnjx50J7FxitS3pZeSNsG1eeOMRGLF/dVrvB67bNjfcLP99RSybl8+hEAmzn68TmYtGa03XPxoRStf7JFao8x4zVlV7Xr6GvFJjWEoHw8Xn2bCLoXlRBU6gycSlDW2RfLOPEGmHb7ySYDKAbFu81Wnii1PjS9Gncu4snU86eqcxpT5QHQCdJquUD/M6vSAtvwO0XjdAHeNbss0Vgt1pQ4Cj3YBXjH8uZX6FmhA2dhuqCO1GXiE5rSjZnAgGMCqSSVUXkLu6SOBB0itB6NIpptogKidfRHGPMCwrt3m5kE2MQHE8NUnaMmqZvuQVyY6bVDwtb6IF7KHLwHCIXpEQIZ5YvDw95LAk8bZVX7VLlWh8gov1fHghfPGJaU0dOjJoX3kDB2vtZ/NEYfgbojdfMqn8Gpyg6xcKFfZkN2rdNZg3biSbZlKoAKYnQ8ErzzMZ7G9TY+v47MfyzyEHyWX4EdBOfzIymYqkDnENxgDEYlSllGA7k0mnVxPEu4o0TgBwoYSLMwQchRfnL2365O6gv6uRaMFUfzzogXsPmpqiW2dosGS8TpyIAoqWRIk+8aHEYXsEO9HAiVRZOQojjZ5QGKeqit2ArNA8Q/lhRTiJcfDF/0wwlMq0wts/HdbPYGUcXOHw1LzzebGcRh3FmD3OdKOxY3bkE/k3VpE15rJixdCeeUxHWNblcqXKVWiKOFCtZ+aNw8FfGzB0N9UVCrYSr5040uIxw+ce4rIF248QXz5Y7RolefQF7SBg80Li1filfie+I1iscXtv4f3ocueu0VvPbAV4sm9B1bEMVWAgwlDRRoStseBT4D/zrXHvL24Dz1nHpnVEbfYZ8MiJfrA6JRzTaxIqDKSDm8wuAvKrSSZph5bjMB+KrOFnHAIFDC4C49M97jBPgv5ycd6ZqQjD8G4UeUENUxpGbam3dNlsat3WADlfSB2W7L7vMLInsXPV8zos45nv3+Cj/OJA4vK/MRpruyIO3yFi513/pRP5ehC5zj2qMNMMKIJ2ySVT8U105QT7+Sqyyw85/SL+7ZMO+kQPW+60U6F9sZZfddfurrKKuzRlpqov9aqK2+4rnJVFdeRi5lS/mvoUiWIlkg8sUQVabB8kVy4uGMMk4MEYgsTedBsyxlKNrEQ8cUWTRYzmoPZk8Zoo44sKRGGFULgCYonptAhODR70ElzxgzZ5HVPe9CdbnWty5zvTCeab5qxc6R8YNaUMTYY/5cgSogcr5r+rIyrV/vUrCoVSS6JRIoSSUjB5JNFWkmF0D+ZZpQhemihmvMcZhfbWM8KqpjNJArIIJ4RDNNFjiriNKEGIIIBChcMWMXk7CjvrQU1KIEC6YgHFxTXhwhJmGTJPUcRF2kXb+7Nl/m3kXAoIrxoBkpShKN+vj7i5enhbm2sElHEcTuO61/w7muVOMqUU5kKizlXMzNTVVUVEREhSRIAEJ7/KF3atst5Zyos1vzMzExVVVVERIQkSQBAsZZiMzMzs9wVJ5qqqqqIiAhJkgCAGwquqqqqqqqqqqoKAAAAAAAAAAAgcwAAAAAAAAAAAOEAAAAAAAAAAAAAAAAAGPykWXyfiZLYSVUZYU56FCkfCy0p5FL15yZIrPdzvFcNSilxFC+D42Vn7P9FXv4//r9Fuqupp7s1lWVRBOvmfYCb3Xy6eVp4eLi5y70MSpIkCQAAMPigdcmHuf6pn/yFn+txT/VwiigUPeY0/A+aET1aVCkV8wtzcro1ynhgQJuMclEiyeIhw0Mjhp9V30TGpJyDzecn9hlFft+mxjIJD1swplezSo8M6ZCVEkMgEQIbQoGHQngcHfk4VXLE8GNH/YWypo06CSZavvVLq1Om0KOWTOjXqlq5YV1yqsQRiUDkoKMiQCOCBwsqpM/g38/B4cYIwxFhPFhgoMAJg/x19R5djNuevtBmq/M7flDGI/u0qFUqQnLSRJkAEize+KHRIUPIUUok8GNFjZwwLjhU4ARBuEclw3P3NKhTq1K5YrkypVGuOV/eb71+EK8iNF51iKrgUlRgyOP2WUFRgSHv18V9Fy/FEODjFXeF+AkRIkSIEMGCBQsWLJiCgoKCgkKgQIECBQokJycnJ09539miViBeci9Mi0CB5ORDnp2iIS71NEvZtbmKwldzJkfhYWurKTh7vu4XKbkCdnEG7LY1zHh8tg4gHvXqjFrAy+1UXeXpZ/zcL/FJj25HuF3evXgZIq7qkh0myp+Odix0t0uyQ6Yp46iDQrO7ZAetlceWD/ilS3bApHMCMYDaLtl+E8bxBQCWd0n2WW90R3EC7++S7YUPPwONN3W4RyLVE5JydTIqM3qjf26uv38hYdUiomLqxSUl1KlRG9BRchQFdqPsNLEdHbZV8sB/zObGjIgIsDdlfxkg9gEGGA4K3Vpp1SiloRJlFRlf7jygSw/sWCJZAhD0ABNQBsE0BRHaIJinJMIaIFi1IGD7CNYtiXB8RLa1JJnrI2V7C1J4PlJ2tCTgtyTY2TYRvZak7NaSaiXTkfUJBkAbY9AdyacWGlg8pZ2KphEYYeu9zDhb3BdmYWVjR3Nw8/Cq4sJwRtAhCSA/GBEEhWGu3QkUPa1yRAvi4uhUwScQwxJCBEQYNKTf5bRiDLPTN4zqYreutYVwru8s9gQfCEgaBPmCZ5sI0FeAndoS10Cqv0S2lN2r7OpTtuXjbE5lRqQixcmnu+c21V2PvlCTpEKowtgd4REco0LqnX7DL3iVl3uEKx6OfDuOg32wx1bzcODBZeZpjvTzwjXnKOWDS/oIDKrN/LgiLRxw5vDTgYgeVcd3tYl+r8/PRuj1Gun6KRN+E9F+8FvpLpN5fPja5kD9xPRDQz9LVksf8v7WTf3Xxov+Y+9VX+p4Om/rCy73nmze5MnUzONzWg+ffuD06Xv5p2/33WZ7l+l6wyBntya0cOt73bqWq6ORK6k/1+Ty/pIfF/bnN2r9v+yf9i0/yXhLRAh/e8nopuO4Yo8hw5OWE23sZF8VQMur+55ND0t/urTbHlRssUX2T80UDR359ly4Y7u1LjktLuwbZ3WPX98H9WlV01Rn3nJSueq0dP7pEnSTtEWiFmpSt4CqxNP57n5McTzJ5ZDNpcp6k8i/FggTTGau2TwUCu1M1xna0NWzMH9YacUb61Hp3od160YTU2sPXVnX4CgK759c7kNjbPDNPuiICHxa3tPTS7KAe/VF/gTzXim3wFrn1UJzMmvrarbj+oC3BZup+etRzLxDU+nJud7rT69b8vP8vUjNjHQ0NiMe55q476f3Ytp+6oaLKa9yuffTA1wsWDS5UCWTtr4c/Wfi1FSvbhoe8NqSzU97inXU9vZYYx1/Amt+KQtU7etGAaNmV5jEMP0FLBl/AotpLMiy/KlL1/WEXFBdoOYyxM/J77D4TCwLjI+LQ6xM9qH5W5mnNsH0GZJTUjOzcQqLiIor40VmGYUQy20UJVa8HZKpZcn2lzyHlDmqQo2zLqpzXYO7WjzyTKt2H3XoNHBXXIlBV6edVj3gB4UPIpSCBwcBcOBn807PDeavMV2RlvX/q0GQvkL6LruCqqZKObOILjsS8UC1SpUzr7tGwHxswP4AfeLAgYAs9R4ihgTxhzmpp/fW8iPeqaYsLm/d3OqIjxL4WU37QCRY9UbZiQWsn6mLPKTsBFWyLJKTSkTqiTVRAJe04kOtzUBmprYDPwHeSaHAV6HMS+3sNlojAjJ88WPNMK2cUsjKRJKreEF6sjwiea4iy4yh4JCkkEmf3DACeiiugmN3C+Gzk32uFoJMRYWgkTmwt1u5NvsSGYy1lgtGQj6ZYiXS7L73NZMQ2ciD3ZIC8MqGuzopO9dcJOirhwnvjS9Fr6EdImNhDhuFtExQvyF5EiLM6F1nBJwpzHgB1p+hWAkp5/A5ZdZinE8k50Cte5rnCN9WQ2oFSaykOMjZlylJtThMm5alTxYv55t37a8cWESm6+WP9gqXCJBlAgj6aBTwd+AxwP5U+5HntPVrstsdnbp95MjW4zRbT9mxjJVaxrVQ9373TG3uTI8+8/gv85c97QBylqUZv9LUWWbSsj7MbLZ+2e7M0mL6cqSMOabauGdN/5f//SfeeMpfT/X3Uw09TcNzLj9vZOd05hWevDL5TdRvc+gdit6j7H0aPnT240o/rehLcr4u7XsyfiLrp/J+KvlnKn+m/udyfyH9d1q3ZBVmB8xNmF/AG+CeAM8eoHpf+G0DFgID6ElbuK5J61T1pV1ZfUVf27tGv8gIgzO+/PBoKDAWnShMvhHJTGdmyEPqw+nDhSOKuP5o5xh3fChZPDmZmW4/vx38cva3p/786e9/8Ieb27/8x8/86eaOz/7tt/+AbI3din+BMxP/+e3/7jj4r5sPHf7erbd2XX/kjiP3HDtwfNfx60/sObH35N2n95zZc/bA+V88evaxW67e2P33Z3t7f/18foT9W/uPD/ztxb+/lIntsWIKE29qJABQTPCfnaXqGTNGZ+UfQ9myDsd2LM6tbRfiH30dsQLg0Q+JFSGmjz3ufsmqjbnjof3Q7kgqLvxNH94/PfCDz/NbL8YCq3P23YFXqQOMr6ceVg9r8r0LejO4L/AAF+/YLW5psOEK2Frywa0Btv98vRr0+oD5LochsAGHL6386O1PDJwKfuh3lbYEFnjsfVNVyRLA+/8UyUngEbnSKUVbZSk/HkJsVHgI0swAAUHQBVvbQ9/5G9d33vql79zVpJ5jGCYaSNI0u/SdxTN8Zh3Ye0arDglG0yLoMs1J3wPu/vXHx14uDPi2ryefv5nsWJZOlmozXo8HlcofpbVrkT7h/cE8Q5HNTmLsZHPWidW+0IVtMoqmxppHjV4A5iZwk7hZOC3HcibOxuVxUa7C+uRKk/Gplc+skueYhgQswJGbEpUxyer9YoD9gKIo7qdm5miOWXqIKwIDv1PYc+jBxn9DX+SHex2PX9hJI2kgzwE+/unjabbuxy4vpC8cH82dIz6a/9G8D9fI1vjqDVd//C7aDS3vdWyi0GseOJy9XtHF/fZ1/RIw+tXPFVrxQsWoGofd4noe60sheqcfyVuLRIgc5LkmCubRN5BZavfDBt+NU02sqeRDPreE4s7o7OY+/Ij0YGyRCl2jaCjAW8aYsUuz5yh8qlKZNi84Tk+nsde96pDzXlfhMyelZBR94einn8KlzwRNQ0vHw8vHVW8eqvjwNdusVHlZYaVV/pDgP0/tkiJVhp3Sqe1ToNB++U446ZRjfqp3i1ajm270rxq0eeOtl7rt1WWxOwPg3V089IywVELPhhdFMnsHe4MhERHuydwJYaAXBOdsY4UTA9sLDmcuvuTOsk7lbF7AOfzNnWvjdpzHx9z5Nm1wQXoK/e8WxjTAWAMw7w7QzYP9nk7gqCsBe14v2DkDYCcwlk8dsyr2WZa3k2bTRqviogUvCkFN9H/azrspHogU5ZqgBtiqXXdzPWyeee9ZuB+d0zpIstBraq0sKv0z6TZm5G/FWhKVgJAhEeAN7Ygsyqzlk6uDIS89UKLUTE8TtjeFNhAttCMJZIqRhLKB9i4hmtIoLGfEn3ZUxJuRrrE6XXmXOIlPSii4ulHlpdE2iTjCZSP1uRqBjEH14+SwkwMg5UBRgATFufWjPR8ieLwLdJ5I6aNhZmdgw3xhC2mG3v9AWtzuX3DGEFz7NMDpgujjYD9cZqjpFLoprWiSGMGHWMIGLGw8CUK8qBjMih2ng9plSQ1qkwemFNjMa1YmqLpcl+XTH3vvpanv2CayuSdSynkaUTCiWeaZuqV+oVRXHdzN+2DUDjw8ls4/GCyecVrnDivSxtKBFx1hEjyRF0Mzm5ok6VGAb72rbrf0leUtlEZPolCdmc+ai6IBSe+db5dnSZ6Yy0ouBA/JYga4HPPiijDdkYCRgdA05MFkaH0O4h0tmpXm832zsKNoQIZ7oMIAc8VEEbKx3GctL/S8Xq6Lfcj9IvS369Kk12Vsn6pQBp8Ua5jBdbbfsN3/z92KiqaBbEsd+AWy7bPXoFruYY5a+t3p9rzn9VdI+SdyJCyFbvnumCQENvDyDOaYLW7uIFFIsqNkPiFhR1nsECJDi2JbHOWRFjRwKOvsbPDGHmHdDrGSTuS2rFOftjXiuXuRowfT/SwOzCqUbj/xULgb7BdSdB/pyH6w7/aid58Fkse0/uyPMKvmUE2lHNNPLm+60FTzIJPXX52ktuvpukmzFN8666wv9slcooS3xbpZbjfPL3ZAulyVNUaz2E7UsBTpjdTTuHa5/tTOE4JFyJjS3hQtplp7sr8N4J9cxO5F+9KwwqGXYZhh3y4QhliZBWrAV0+ml61g/Wh0NPtRXz6FX3AjF03nknBnOEqN0QSjPLc9ueehLBYhbLLqlHyCc1DvyK2vbzLk7xHbz7njTME8ZR0YhPQMbAO1jLeAFA/r9YwzLeeiGt6VgFK5U/UBm0yUqXIp8nTClO4abyWvJ+7snll3PoaAhBP8dCW1jdFxoG1Ug+SzTVAHO0OfD6v7eDkbSHMO1D6K/NEc+GWkJ9A+p6sLJBZUW+WDCmTRjbY/fri67U0jcFztHPMusU+SIPJ2SHdmhzaOqxPrVV6w2TskRJ1QSLbLszxaaUkv9atEyG2HBnKDN2huCFZ3281Rq+9Tt1MmM/Ux+56tZqvVge+r9xuktVkv4AuD2R2yR7cmieco2VNDEI+7hXGERyla7e+A2wJQbIzZFlHkRxH1EkVFre9c1jb9l1fwwzVTbNMzxcwN1DqjAY+0MBYeqR+5sbGbFZjkhG/uL8kjFOe8L/kBvHGqpfMFaD50W979bQPklBfxrmEmVfVM9oPB73hI5cHA1d3mJW6q3ayrN7c8h/NkRnVD+fbwTyv8HI2O9soomMUChJCDFeckpT5BTZcVsx4G1uDxPNDiRf36K2RIX8rCzkxnmNtnl8fW0eJU5CrvLbQpSi9CHh3k0aKvmcqAe0hV9a4+7YTCQtdccmYCirAAovLWqRa7vLdk5S/UBuGrWqtg9c/ndEisT9M4xdhsufqBc9Bo7kKnIQdzuxk6nLpP0ZAv5L9zgMJAIRRgOm5H2XHgTDufZ6oFyJb4fUb2QkkY4CmMvOzysXC/qxh22QPcRfcWLKZ+OC2t3K2aNeEZ6Hj0wXRkacuMxx78ya6Zd5KxAJGJ81Wc59jqkIUB2W24EEdHIaL6O7cW8hYybFcpcWCHrKG41OuxShTqPlfs0/9fjKMx7WhLQLMrj39dLRDZgM0edR6vF0QcljoNpclDjvDjuyiLDcHtWNv+BoaPEbe9hndBj864Hm3bZgEDGiT60Wq7/33XFkPt8KumQecPe+N5vxkem/+FFOWLB+QYfGQh9JwOB11ncyM9AKLPJuQzHEIvLEze8YxTovFEsbPY2f43fxZH6jeWLCvXbBZGtqjClFqLYR7yLTxzUozV4SdUxiQkGazlgBPDHSUouRixE8giwdhwhOvSmUdXXpUnEqeSBuvOef5Tsw2enrGNWZ6ZrqLAyp6wxypIiOvjuGMNXXUk6dxYTnNqbbI5GvIoUT8WGtG74LyYYCW2rafrunolyYlgHqvqb/P1psB9M1bMd4WfRUs8i4VYAfLzw31ON3meylxqBjUzNWnrrxmmdK2uJv3l4OqvApy4yolrnEB3Tq/11013g9awziS97rInlVJxwlhzCuchylHX+RCoSu8fwQw3zTgz96XCfsATmSQnPL2hfJxjs+iBWKF1km6O1A8N+W1THlkGXkB42M0xafK7g2qaU1Gnwfb/MmMNWUmM0gz88kBvMN7CsGRSAXylXijsVg8lVgzOmfwOlL1nStnMNYjyL51d1/KgGn93W6g+CcD66Qw+9fiQP54tKUqSQivYeP//8pFF+uwZdBkX8K9hEyzcy49CTNRlvyWEIStjO8KgdQwhk2egLYnNKS9TPZgI6ks7hO8kjfJw6LIHtdhkoBJ4oPDQJKf25FLeU8c7wgQeZBTfbgV923dIAPexdcpEXNINP9jvAeQmnlCm504RvDPxs5QDwFdjv3rBYOfUtcZXJo7cV50iypfSgQ9T7jiV5MQk5mD9uE6PYkVFwHSaLUJ6PupwppOsYe6g9p/pfsClahYCFtQcmxhQB8AxcU106rNFhFdmf9rSarPffbXuXffa67rffsndy4HH6xS2trX6IVavO/b1E6ksjNHRgzOO+aGcyPm6ur9ABK4xfTPcNLMd3dicNeM2VqBo7PvM5XOPer5zBzSGxS72Tz+6MNb1ayfYlOolIpR1bzSNm/Dm2ceIM9tb3Y2EKCrCos50E1n8rB0bYn0yfs/pzQ4HlALVuriObG8q89OZRZccfW8VjnQKkD/w2LPIkfOUbBzN6h+XVl98zH00uHIx2tvvqEtrXXiqeYAFM7sEuYmEAftAZnrzj8hxsnefR1kdP+wd58ejVSyFVjwGoLTJ7o71pdbt7WlQLRrn2mMxfWpPppK2fA1nu2qzN22xHJtBF3YgN33J7tSzDcB/I/pzXFKU1ke1zP6ie4eDnvFEWxhw225f/iCQyshtj/+7YbjX25/8D0QKP9n4/8bG70il1Ze1VFY/sEwj90uvK1v4TUkeaYP2WC9dQfQVba/sdQ2nLtkP7fE6/B2pFMaeXYf/hx0bbNFuv1GdZ9Hcl10ur8m/n2DnKH+sJ1oEyDEdvf/2Aqjn2QPx/Vc+tPe3f7rdXweMOTHbXs7TdLSPtoNpYGxYs++SJH4yQ4RSZ0bC10IwS2s4ggO52UlT91PG4/uEo82aOCKxsIYoSunE00ojiDJynFbTRAG+X6g59yODUR8+Dka5H52TXkB0FEmmLWSz5iRSTiZVsy1Se7uycPncbNHy21pNpMY1k0KSmxNn10klUx3FF5BA806/4NCnmtylM1Ny8OqhEUV/+T3oxEHS67c9lPApe7EBGBtmgbFBwklq+6+92t+//8ftiv+mpv/8f2QtswL40SzPu4/2Rb3/qOdh29E5xRXMgVLJpEXagjWOKE2hl7tTy29qC5fPzxYZ362sLpqTSBa0Ncd7w7qP7jdf1yKmd7YCUjGbXq4X0gtsnNu02WJxdvTKY9osrUpXnyPj06lynXW9de0KBA5c9sckFqcqC048+fPYQOPmM07yI/xnRBgJgm5ofzbvdE2oEboZGLtPgv1iBLH+vnV+S7xTjoNs3v2hMdtJ7iA+Zd09bA6MDceZ3qDZqNRIA1ljifau96zYlrFouTinx2or0+As8SzzabTFr7MxKl1SsUTlx4yn9cT5+Y9yVA6lyZmxcSV7xb4l5d7NgKf7zOHMbAJBHTuILdy6LHPF8WU6VwbwA06CIW6InnM7Ohj18YOy3I7MjmluaYuWz84bNUoa7e1KaW62yLgU2Cx4jw1SHj0F2+vowpb+LY1365RGE6Mmc7e+cT4O3hk/0ftf8ElR+k2NJv324+LR1D6RooEGr+Vy4TWN1LwgIPAA+/ef67m7+/fIcwfu6k/uBhMV71WkX5/B5cey0V0DtYp6NKKIw0OUNeCjudqT3H4rox00LjzwIVlzbKX6zApmXHoblCPuRMTkUfE0nmY71WrKf/pqcP7XlqLKE6+TG3c+TS6bXJp9zDR9RqERNUZQ07EUkbACKmxxnWsMLhew6lNURWe+/g8sd3bvT+pfBMbus8DYHWTU48urGz7vvj17IU3YOxarUo3GxvSmXZi9vbvh87JqwB2OB5ySbyDS/g086hw4S40cX3J4eQBc0ogNpyFnmtfhHVrt95jRbSD0u761dc42t2i+A/mutMA7tjrsWUhtuP/KtRYPmWpeWK8xPFyzdNw22uuOss7VSuNmYFLNv4fBdqccRJ1jwuYHnaE+mLBY/+j/jS0UHSHywdwLvW1iWtc6WeDvL1Pu38714350uxfihvBnlysBN94Rlf3A5UmQRmp2zSK5Sskt3iTnJ8eaWceDMsqt+7EnUqz1R5CjjY8aCVb3m1a5Lb3ug5XUQdEdOvTVAdIPbmkkw1Tx7kwRMa8IvduBvCrBtNDslNtybIAoOYBCk/phCdbDMHdxk2zMJwpWv6GCGrWv/OlEm6kLk6EJ3tGeWE3GqdF7hyMtheZck2b4imwXFAEeEkpO3gb+1UhGxNqyi3WEvi0MFjPCLB0xUieWX0E3xZPbo8Vq9tBunhiV5kwh4Uc917MKSg7j5ap5ekGTZexmqBNdntcOT+QNhejKGDf3Eo9Tta4MJpxTxk1MrCJj1ehYjH9cEsAvXwi9Y5nEXuLYZwmhM3IiqreCd+dLSvEYgbflyCgwNkxvg3ih+MW4jNobunyjicm8pTfqejtTa7Oxs7lyzLHaDEmyLhl7RK3GnayVsH0yhFCnwQo5K9Gm7UVD8dLhseJl8c+mNnqDm4LCllnjh32P+eGw0OhNwdkNcszJ7EzMiYacbFiMHT7Ij3hiyNeKECXPYzS5g4SN7mZd3tLJiXyjmzpdRjEOzbeDbJsGxobREcvNWEEJntqZpJPgTqrV2CO65GRJbQbmmDwXO1uXDXJsut41FC0ZHi4wfrazjTccUlvGvLmXmNi2lBmciR6sFInFDfFE88vDe7hJSET+Kj3is55ZUHwIB9wThXua95gtCL/H8UubEHQ40xLmt/vGZRcmkUW/DOKPqqcj8pI9m2KKseT8oHjtcHHNk7U+aE4JMl17s6jg+9iI8r9bGbr0Eiwm2mvt1FhBY+mhB+zatCSdADeqysNO65KSJXXp2JnsHNxYXTyg729X6UvhdLm9/54TpcXSQYHwWP25mcOl2qZcWjEmUgPaX5oWglU3hDOjIDVS30TNcOp1oOC4TIBteuzwsPvxsnWWGQRgbJgGxgbzIcfionUHgJWzoRB69/yNgT+J6/jxiopQvKp1l5XS1oKZqmxF8OI6mMKBsm/TH5WVyXxiekRIBu7e9P8BkcYiZGGYPN48sEuEIwCyHvEDQdPlXKzvfpmIZWPDxUtffsM7pU05mBOZWZjZJrnU0W8/2G8Hy8Fo1DKQ2mp97QYFu/vUDujSrmkqxPXjpHnHG8lyanTzmcM+8ad7+0ujw6abWe1JiZZxX2akvzvRipA4OekEWG+TM4nMKbeIHXS1ia5gJ+bWJGBCaCTGuqMe+q07WxWitOZjjLycTnRivi2lyy1NEpeeWBGNjeAR4qz7t+m3NrXmxGe2neOA6ccLM6cXRCVF5wQ5Q/nqolGJE6TRbGJhjyLt6EJqRU9fj7ymOk26u6m8dDAan4KHyZHJlfWK7OYKCQ04Jwr3IPf0rZrGEsPQuLU4ppP+KHbV1qYDbdXA1ixKH6/TO1SiogNqY9tnhKPmtgH7Zov1OUfTrhR8uSqMSFKEo8tSeqfjgv8qttvrpKsuLhC7Z4XXi2iSLV5e6jCWFl6f5WoEnmqnhWc/tjonQa8wsUirjrolaZ44u+Ic7J4LFc5Vvt6YsOMftsPeri38XyZV83q+fDxUUtg/+n1b7PdE/MOkVL6eq3E01finFcmtY1ufZZSrBdu13+2AFWH4IgEQR8pAtS3RUHMnkElpckMJ3VHYpiBm3Z1rXema6dxfu/+C0km1rvBYVzimNpDe8xfQqbz2OmXwTHHEDVR7wYbpRGBLkgMu/7/JPrcubJ4xduAKZYVBVF+MGSjSbgtwWR3bh2twsbBbndsHTDSGeWBsmDeePlAMOsflslOKPNnp+zmdJb0lSbXhuBwGA5dXC08qAWG5lfyt3hm8rZYuZq0Pq/O/7mvP+3Jpl5ql3s5mqdZsiS7/9dG1ATZerQ77/uetZQr0/LTq/+OVzR0pujhcT5IQPlOTn51aI0GPJcfvGKqRANZdsEKbD1ZoQ+dW7rw9EBgUejP69MyoZ4D42WeaA2tAbCxXbd4KsymHGXQ7VWAm7yQEOFfhqqDSLdc/DkBGng+PJDYSWQ4tLUu/fjW/XnYoWtG7Jnt44zpJRWFabAFpe+kSmuXAEmQAnxUcu4m1an1e30rvKK+IAR+NukLr69je6tEKkM/PoBoPQRuhcVuRzTBoM85xBN9+ODFM6ghXndJmGZ+ay1p+SqNCZDvEbS8l7CPiLuOzp6yO7Iv68JHqszo6Jb1IApo5vW+nCljfv3XZb2d6et7NFLC/fWsnu6nengx9HdXk5CzVVF+XYch66urZk1STHHC9Oeuh4//s4WiSbHIF9QnskXyyZfAyKoNVGEqktDCMxlajUWrWoQrl+V8zNZormfLjufTtbU2nynUYvulYH1BZND9NqJhYljtvjGUl1QSxhY1wZi6ZTlPtxmQpe5SciohIKZkAz8gLo5MqglhiI/zhpfLyiTsJ5boLWWkzkqKKMamDqRCijcPuEqrK515mgjzvva4LaM4n8uYcI1NZX7F3DMB7zgBjA2BalF9PKphcJj1ijCAnq0OI/FomdadQxNQ3RgkxdR4TE1acp2v6sv0nV97U+ZKThiOLtdiZ9IaSx49LgGZOzFFUW0f02mv/J/jWGy6mFxeeTSicWCs/ZivSlcplBzWcf6ZMC7O41d7kksXCokeNuoJnT7X6Xn4Dj9kaE01rqePw0XIoR+CrQHDprQ0CcMEptjf9x31mwo3tADZa6F9JSo4rhcTO8jQGZGX6xuKjClnu5NUkTTnNiWJSpig5mrpxJQ1SnkbuFCrLjr+S7DqY0ACnyKlMZlETXiA0TplFTCpZ3gRPmKUqI7BSIhGVoQqjM4yOyqAvymhpQQRYYFF8NqFwaq3ihHW8rlwh69Zw/502VWdxq3wpJTeLih416ApfPNO2GUWDw8X6/dHm184R/OoMF9MzZtG5gRyBnwIZxWipFwj49VxmqyCa1qLjAL3f+CvZ37512G+8b2dU8RYisVlLWX1yTiNxvI7dcyffrlrw9M3dnZY/fWdu6ZpYVWyi4lWS606+sMUrTV8EhPLizdvtBHRUq9Nm5v60Fk++0HVn8ou8WHGVQ2WrMx1tFwPbVCzMLY6ZODR1CFy9T2nVUT1cY/vmohh5iT5tp1fETHqlECWqnJ9n1SUxfupNMLsYOrrVWRmrArFixYvktv4E2OlpH4CfAoeiABRZ7LyZLjuSE0+tq1VyEQ+6un/3JENxwmg6jO3lTQuC+Ys5GcEo9+eJu9AeqqioDb+Ll8DTH2RnZh+I4jTy0P453Lg9bg8WoghyTCQmszCcwevGl1YS5/JHWlAnozIuh+Ep98jg8klwZqgHFoeefg+jUILVA4ORUXAWzN+0lIhu9XCrhuDHDgp5QGQ1/cwJiuZXV0NbEqLQrohtPBUHC0/MCEaHpvviko0Zs8sKFWOnBIqy2cTUCZkydUgU8lst3jGZt5pzVfwketPqKuiuBDbaTYQfBi7ODEZ58cnLvGrF+N1L58Sp4zvCt5FxjilcLJJhUVBzB+4u6UYm5hAIqjHSvmxmKKFZAzXP9GZPjBXdKTsFYq25hzJ8/c1KmlfNLCZ531jNByInIMRdjytOqW+ApyogRNfvfgaWr3v2ElBZ/ybqV25e0OALD/U7f8KhCN1jjvLdu7yoBzeV9DcfyOob14Iqfn2WateWZnWrYrIqXQ5V2gsi61Z2aERSzWQ5/0mdVrJ4TJUnKsH0mLDad4YhefBIcoLd9XfUjDd9R//PPTtslnL8fNzmQ0fiNp9q3yg+Rmuzy3O66NIZGp0P2u7HxynIQfsU+aFaRRCHkcMKr2UJ/A5kxYPzpNigN8cYAp6+YrtLYLsrbO3eLFxwZNbdYavnW+vBU4X6dmzXYPRzjUardQ3cFqoL7gi7BwTeELzoHkylqgP5p4tki8WlxDitzs9bUMsXS4uNzUKRw3eyVnD+qrJgxUFVX5irvHwZW6Iu9MtKSTy8VCu4fBV4YG03L//DpcuADcGTYFXz/vcG5pQDQwMmre/6BvqA2ePaUr9ne3vrP2Nvg4wRAawjtazCAp1nuEcJPyVZQy8euCZL9+4NquEExRIn6NorJFG+1yrotLIWknA4YMOlezYAm2nQ7fxpgh9PNN5uPNeqb+cAteFVu5ZjgxFeUeiSBwtXWdGbeD5/GkQaVubU6Wus1E1pSCykweDprt6qXljp5FAPoCWcGzgXtLPjbAfATe4fHhgG8M7sgHJYTi4VhASUyHNyojoLbTjYNzgwaGAGk8nBQWRScDCJFKQZctDPLwIJBmSV47CFweBqRf94f6gROZxLD+efH/0EfbVLChi7tEgCQRlOw5J/ukRgeZyDS1TMXRokgVQAJyGFL1xCiHQgBMEToeZ7O9CjoFeYYJOGBiVCc295ys+39hOvfuQ//AMcKTUNWz2IK1zfNOm44qeaGY2rw0x6vjheSCo5ApX/mfwkUfGVXFV/OaTuOrUy50cixdv7uPyhzlQOCKm/TK5SfJUzwcCz+QZ+RwffkJ+valRTOl+ZBR7mldSqzisU51UqVrlLpbywUfEJ/zFS9m9Zxb9XzdY4kp2CCCGhMAbNzfnM/I71mb6+MuvMU+D/SH7OmYWcvJRRrkxvJhqHRFbEsvB5WFxeJB6nMPZ4llwIIYybitJ293JT8hbklay+yg4rxeKiwqqjQ1VS01gdWVb7SMGt6O7u6FsFBayyymMVbD4hIDDg2Hub+C5ttzburY2/baxttm2cbdObuDdGZ1g9LGCHCo9p40W3CWKid7fxYwR6Pn93yPDb9GXJrgCmnx8zAOp1pj/pLP9WhwbQVxCWH7hdy64KoUkZsUni/Z7MldSV8Sbv7JahOcQoThI6tNPFnigTNLqRAvNsJREoKd+rN2dVaSkDryEkQ4NYvpJjzLUxJmcoq1JhESGiMNDzQOHx9KRTpeVJp4+nFRYeS0s+XV5qVBxKXc+UUKBlVGpAeRqVyUiZcho1V+mLB4h7bXvAdtn3Ey5sp60sFyf0VhcUMP8x1NFhu7tk+X55JF1a31Rs3vGDzObicIJogGB7Ji1jddxXSm9UaqWG+6qOY6vPU7njf/Pz95IdiIyvsRJ1utnyUySZMVIaNdgvEhewbn33T5EYmhsWHpwtJmKWOiFhKCm1/vLB3u6JA+6telcHUXRSkiiVHRnoR8AHOK3vQbgIk/ylITtCMpNwCGOX78VkO46/MK56hGCme8qzRdORbpsxJy7YdX9jbgxnIFztsI//BvZBo54ju1feK2m7VgBWJJQVME1//vWwVVBMBAbHjQjqlR2qatRPV6Q4WCADieJoemhb5ooZHdjUnR/fsV2YsgQzbpPqH0mJD/fxk4QLSAUkckKYrxcbhsbGB23qAxh+aluoMK4xjJqMQIv5DJPlElNpHBkjSOsKA08ixoYBrQtU8tsOGC5f6rqp13fdunipc7FNSyI0VFYTmkj0L7nNVVWEerAxwdPzwMFV8y2dXWogSTd3wYewvH0IAT7+P4N7M9rVOapd5THO9jReXlRsqtwEWwnq+cxyb0oUoTuFZu8bQoV5Q3FoMquIFYyOgHpW+HlwnP33hNGjSwNIbNmO0MRgLD7moQl7FSOJkjBUDvjqUpRX6jzqQszqa9p/1N3uFL0naM0m5wdhYjz2+qHdPUKpxPAINgu1ZlpaZ79dea4Ss+HQigdYG2eSAoNWkikklQYH6vnemRsTaDv2lbby5lujeSRlKEVsAu94gfALIMaq1audxMFwbA4Kk0dVdB/Ule1gsXeEUdlwF7jTKDY1Kg4URe1ZXa+F1XI7QClfUBNCSkL6bWNitx9Z1Y5MDNuBi1MH02mFMFxcRDgqoWiVHrPdnemPpCTVhPDVaEI4FEZHh++goWHQyHBMKhQd4u+PgAXD4DB/f2QIWL+KrAwlp5ggOm/CA6D+pGCPLKYJOjk0ApuLxuRTmJSymkieUYlkfSIZua+ijXdqZzR7pyfCfRvKEc0SoeGMqIhwMhuQil1LXJm3lNuUoK2/wrkCaM4XQ4rNlpZASkCFkuNyvuKYB7J5h5a4JRe1SRfe65vWjM+l/AChlICssP4NVfBcwha4ttkDgTq27XxTLukHIQ+8F3l98j6UAPFm7EKPemFlxS24hr1lakdsGQNZzaAwUFWPAqGohIGomnmQ1SU/MMpI4SkoCjI0lUKEpyIpqIgUBOox6ZNayoBftGNNUoiyTSq+6Jwv/ukMlPIv84weOYP+lwfr3euBq8bBGWv7ZJrFhtJNRUY8Si5tG2J9Y+T69bsIBUYxDCmI0smPTXJyDL86lmWVpgTNtTHMGCvdjHqN3BgrGRD9XLogMoEhYIgNv5J1SztBr1Yg7Q6cR5pYvRZfvrQuGwDXl/raqczO3s7eftemgz1lNNBL0IVeyAdpQOLOFAsYCQxBZPpcJQPS5t2Neo3cfalZ1ZxLWUppln+jHniDdDqggAPCqCwViT+7dbYAeVDnqqcAumR5jtTpdnaZbUNTTOnSXtoT0OPElgp7U+5ZkPtkR7e3d2E6vWEJkWU0cNCZv6QjHzx2RSfjctoPSSVpEWePaPqmqQUCH1ktsPZjglRksxMy+Z3gpmU+JhN7dc1BhPIR7e9yjwB314TYJtpo2i2EwfrVsDWrNKUs/u8qs86P4W7Za+m+nZH/97k58OJRm1uB0FFOuKxjdllyacLfSgi4IbfHM2NU0wHGVn4YjJ8iNIe+LsytLAXMc60CInvTPxIdACXd3y85B2tzjSZWvTMZem+yaqpuFFhY9uDzUFgpVuLZMYOPVBBkC1KFXhjY56FQPD5QQ/zzn0hgmfilClvVfdpSp9BFULbAVhIHwB57qiJ42Nl5KJhh93Kpb1TcUj6Jzs2k5wOfl9/Xu9df1essLv5pAfKW/Qn0JmGwCa3pVZ34u8S95NVAMnve4uIjFi5u1HttUJ96V83ygbDOEe8up7A2jkiQYoxsBTJyx5ELoIjFxMViSuNwzPB6p6lxsKM86lMQb+2K5/ePIj3q6RXZcpIXGqqPPg4qt5by4C9vlPLAiS0SXuhBYSoPrGUzHY47hFE06KN5RsG9e4z3zLsIIoEA0LGLWGOK/k1c7t9oY/prral/TyP2+9Ve4PQ6nvGn/0GC/bq787f3E3nV11lAv64LLzS0cmVDCfJg/Nk/aGYEV1o3Aw9rgiqY+s94I0yruxPtcYd2cSQ6cjsIDXmz+N1Z5TNoXzGNJhJ5tMeqMTV0Zh0kCtmgWeIDe4Mdbd+qpQNbF2ljNVMtFrRn+TVtKoLqyqX6rNRk7Nk5LjSyc6do/utqxa484tmNUMpuveEI/x4JGPF7Vb9QjRZuAEPhiSkH0mR6WwjCNWAUEO1AtT6c9rSO6mwc/eEIZaCm4s/CUAeh0XYWvzv/eQvVN1jDxR2PuAuyJO2vaZaN55iAcZoVPAqEAsUcQijl5WEgRCwHLZZXZaBd2mkT/VRnxvSH7uJAcZD+9Lf6LxMTDTjp8qzOvY3DyJMfHIhqNPpiB6r1QdVVjlHHL47tDTGIr2vtCtEufKrjjmq04cYHrnO8Y5wU8ajmHerhz1RKkM7J/J0rQKpH5VPDrm+/KgX5abQRDe1rtNJtSr3Xv6xsWhLqhs4uuNTQ+knOssFBZM/3F2RhvSKS/2rC8pCHZIvz3OEy5wmqYYXqMa1teACVWuNrTE9YiDzZtB0fAsLDIXFykCjDOi4bmtg/rIDsHlzB/iuioE1jb6OxFjpBXkt7li/WdSVtmen7w2AxEztCYYyKbhFX9xvvQCTUvAKKmmhRBM6ubjAnv9WQbzKwaljKF/cPe9KL2VCHutiSHcbrfiXSSL2f4+tRO9sO02zTHg1CsJTGt0zyB8Oj1WPW7lBylLiOzQ6bfSkA/cX+sVcRrEBeX8J3DXAotKRpakbiSB9l5pQ+ypoSnmGWxhyF+fPBD61dJ9LW4Q43Pig/+xAdVI9D3eMoWrGeWztFQGhXHq51U7bAHx8HXasvVKNVmH3GAvERAeiQXd8JnRN+WzrFHMcq3faoRkqNEsK4kzAl7UzW5oEZzjzgO5r0Ahfp0S2HrOGLZKPkOEmupeTJJN/qUM+SnlfWlX+GwsSGn4aLUdR/1JewY9zrE06WcbttMziAf3pm4+xF4Se9pkvvDa58fgcOoROh5NASRFa2juAOVzyUH3a39jckh7Ez6DDu5UXG/yITfjZni0Rbbcv2D3VMJ0e6Ecssh0dc/Tri69tIqK/ntpxLPLc126LP9s/tw8aMAEJn+60XePPhmzkf5KAfgI/Cq3LeR2AUR2mC3rqUpBWu3lhlMoBZNlZYlOVWLpHmzjLXd11wYApumtbatfSUpCd0f6IAFi/6/NGEGqGUYbsigYLbC+ed14tEAZMxiCWnJbvwcT8+1O3vZst1VHdc0cXlcTaQdq7ik5Ar55ZyJsLWbMul2Z6rWuHq5fYrckCxg0ocUuqwMkeUO9orDsb1yvuSz+tpK4rHX9xeHH7Lazrvr3c9YzGmUZceTXR6n+wfaQFvsLGFEDzw0COPPfHUM8+90OplkehVXtYZdtiQCest4HL90nbnf+3aP4q6+thUMNw4/05j4ojxdVSY7/j9+KtU3981eXl5BpgZr4b/2H/q8pH75scQAPMvdwoFjgUEwCogF/W41bVuVdJdg9hHGNYJW0HXypaWdN9Yi1AmnRrc0tKJY3GuzXYEPqzh3Dm3twZoTlmZXHHYp2l4EpY+Ys1JrtOGhDWU9LHAHipSX1+X3B4M1+WVwxP01lm0VPfhuAsCGSRbXPrq+i9v26v5oAIVOWiy4CWwHC13XA/yOGdMqS0D81qahtlaW9zXQUmnUlhMvdbKehzBOslQalDuSTpCPl9qWCc/yRwER3gE0T3gGmggSnKl+6EH+ODF8IoTMVFUfnFX7WW2Zj/YUmq9ynHyupDP/GHdZ/IED0YBUkb8yPmP2Jxe6V/tuJqGjjStlO5HWbjBEi/lanxYC9z8LTTyEQHKNBqRtvTTVVPwKtqaGBLR0DgZikApH5RyUU9fvvVwNOmVeyt+CaTMFtaOUDloHWHe6AZrwZeWNe9G6DMQF/JBK3pLfRz0aV34GVv1ChSva5kH6nOAaF/P8f1ZfKOYLw7gno0wnZbFlwMsKYAFiGIkJlznIu4G7+pC1gMCEJmnHbeNIEtsFOygbRRar8ZQi4s0jci3p8vogaait1HOhjJp+zxLKLawCDQVFC0ZtMgR6MYRfgnM3rSqQ0jX5kwWFa8Mbg/EZEZDwhgZEqOW6/u12vJSkdIq4o+k7fvzR4rkg2w8QFvhERRVBAWH89hcW1drMNoFUPxhWTZ4Xo7o1dYYiH6ZlnB1F6A5X0QQMGf0oID2vzbXOLFmGjoqKkCCw1tLOULiE+SDkmlNUTtgnyIB8dVSEomvkN4+OtvJ3QVpltgSP1GbLVSLeCBPFGRQC1sgX+TJwIN/JGIURDb3aPaMFRumsOwjqvB9TdTa9sz4NVa134iSZHM8MyFMhj4AU0MpQwdsggGQ7nyBjYro0Prz3S6O+12knBnDjXoT5lu1ikyDWx7tQIzQovgfMWGxRfZcj645wg+0nKiKsMLytZx8voDX3leiDY1yQ4Bsoh7ZeibdHU0W1C1+1iCSfhh1CpZYNsGht+g211uOIkIKESa6VVd1n6OfPlGvdTYD9G2Cno8KGjCa0QOe79WW0TJYARjBW4iCrcADTWsH4Jl9IuxZ2pQoWk5YRRTgkwQw1DaAx0IlO1r6fh/N8RIeNlz8E0ZBqRDuVSuMYu4L97MhyZDKHeXFJXum+RlCskrZC26vTbqm6Uqh/V41/HlDFCNQUh4ReC0bdHeEJgu+wgGnb6NO6yXmOkabuklLy9HWkDYiTLRZV3Wf8dMn7mid5oDeNkHvRQXz7YBfyxf4W7kdtfgf6nCNEmEZ1KMgt+vMGNvvJxVphTrks94rwKkEdaoS+7Izcaktk8t683iomOm39cH9aGnTZ6tl/6Od42lj51O5A0n36Q/W9zkMsD+EhTUGV8w/Ks6JngctHgJ1KLf3TxaEr4zIBzvds6ujm+MY6eHqwfXf8e/s5/fWLeer7d8K2p853kXUtNyZRSdk3XV8Tgt2HFu6bP9HnVsQitljwAndcQPoixtIvouD20ZSiHBrpBZO4h5BsZRYFlVdKgJW932ooRL7w7m7YD76zyVcd3yf/mPGlRYItUGiPfIdVeumh3WgKavHGDl0mpi40Vd5tGu82E/6Bdf6Y3/n3RNQQsoiIvFOnI76aI1PMTDzaFNZlaekFihEG7RFu3Q5Ccs4TVmYlSnL99m3ptgrWmTb1tJbfuvbRnGMuqF7e6zX9GU9rEd3Vc/sRf14P9cb+qPtFe5EH6Nhf4gXii4a3YdiXCxJY9gcdj/pilfHjbyK1/E2CZZISZJqMr+F4osTXNq9lLNKHD18EX9FJbYpHoVW0io6UjIriZInR+5c0naICwQKQUJoECEkHaKCVEP0kB7zDPMC82rzbzOBNHXNZek96RtZ5FrO2kNrF2QG2RPZJ9k/cpN1tuuc16Wt+yj/W7HKgmIhsJBY5FvUWLRZ9FpMW5xW/KJ4pPig+I8ytQy0RFnmWWosd1oetJy2PE39osRasa0SrQasDludVS4qn6pg1lhrlnWCtdS62LrOeq/1gPVh6wuqW2q4DcVmzOaL+j9q6lCbVKVS62xdr+O1TE/ojO4xN5rOnBu+STV5RmPCpsGcsXfbYxtlE63Mztkzbp/zrrgjF+XETu7KXdil3elRz6htJm+meYbmmP02+132r7jlW2K3PDfaOJQ4mjv6OF40k7d2bb1gvml+Zv5s/seyysnaaauTr1O4E96J45TilO9U7lTn9N3Kc050znJWOWuc6531zl3OI87HnC9ab1mfW79YhfsPG6hhCVahg1PgQQoooAKUYIcQZKAX0Jd/4x3/ezwyvjz59uSu7/NlXuBz/ceVHwZoGAI58II4SENh0IUoLseMuyjATCzGOjRiAjsRxhDy1EQayjQQjUQkpwoyk4+SdJEkasRcNMUcD6Mgpkd17Is9kY2VdCRPekg16WzCUzwVc2Z5nsuUJZ9kQU7PO3PPat/q7asXCQT/CmH9jwYsD/ANSAwohuKgYuh44PpA18DEwNLAswUeQZygwWBIsHtwLwwCc4IFwrg5K/mlp7SVYOFLgZMVPM+JWz5jHidzLpdzBVs5wL1Mc6Eelau/lahCLUqIVEbiZUtORSgZ0i+1kpH2huzntLm2eWtCzcX23va9TbXfdge6z/6X/WQ/PdTDFxEkWEIiiP+JWIowQ9ggHBAeCCgiHIFD0BGxiOz252oLYhxxHfF/2RHIOGQJchr5FGWFwqF0qKvoILQKvR89hb6AfoD+C9P7XIKgEawBHIQABBIAgBNrUqWrPgs0jBqJbH9PrOVoQK0G+hIKSh6x4Puo0VCIhxyy3wbPvh35/DGUUSskM+BE+bFfmg4qezQkCG/xa8w2kxARJZJhhWhzNAr9AkWhClE+HP9HCMpVe6LQrUEIolot7RDQVwkGeYBkzJIKPrrSm3mEyyWJN+UI9zf6rYTbV4HEhOsKBwSUEzGOsxWyIILnUO3lZPiUyx4hQBAabh9EtA9CFgAIJgoUEs6uUAQsCmyX4ADBnzSy/hLD7ROvYzRWxT/YL5Zt1LiAZ2/6XQ1emkbm3Rgfbgf+c+3qdNxTJZ7aX7b9G9Akr5AFnvCRCE4f+wUSS6J69Bor9zzwwAu9MvD9JtZKfPTKyuNjQWdgDtxKO8PhYe9q/eUYssNtsTj0i2TD/3e+u0iaDNzQSN9ldlRpCecX/TkAJiVzpRqZhr8QS/cxdKo3n5pzP3L8hy5PFHXIbIeyvh1wPGerf1VgVtjPr90O14Zrag5rCBBx9i2BPCNNkryoAHHv7bT+VYF6Vg2X96edYEmKzCW7aqtWZHCdV1aQrC+IAajbCt0OONro1mLVWe2gQAZGdU25EPfOsxdBXy/JoQnWmea+gljb9uJYkkGuz/W9cEBzfR82Kaeu0Li0r8YfDv3Hm7gAfhRnCzmM/XJ4l71EM707FlIgsuXHygVwaEdAMGZmuGbgOhfdlisQIdt0yarAkLQ5zaRYRUimH8wK/Y9CFD6cc/MGKV2foPrUp8eChfgeMKdw9mgOcLHDGeXMczW6A3i8mJNJatYC9lWiRDi5LZxk80adLqifbsPlvK7vl4khmdWyGqrr3CcH/Yt3gdWQB1Uluis0nSMS4Q5UjooW49X+676iADnA7Al/ej37fgnHeJNzSXsmN7EhirJ2H1tzhd+556zYxc2M1t7wx0UGmGEtqLV2jS7NvtUPWBemBE3uP9Zel2VfEcjzdp/ZU7JayPs0Jbb6mw41AYno9UKk20xDPfTXQNfAWfz/8KZf7Lsfh7Y+pgl0f09UnmnpFO4HfjRWSe0LgRPNT4MFVj62KP6JxxTfwqjib3iBYjmev/plVrWIJ08seHOBtQoOuHZaU0wETYEEKdchAnVWVQ7tHjg98EsLa9PNn+3cheWoKL7/iAtuNsvMqXYOi+EW09lTxLWxl2Q5MslD1u9n4pqhYduHcliWjsS20kbnxiGPhbUBvtsgRBj//RDdGCuDlD1L7tFwBlw9Y62e31xu99fRTQZ89ooTLIDvUpqLqlWKA2ZphamzxkTLgTFq3LtGLg8bbx+qraLvxXNKpZQBsvHoU7KuCR3uRGYxEtG/UCyxepC6tclLy1E676d7hjsDgS/Z5pX8u5TE9TfvA7OsfFwRVA/kvkpU/ijw7n3v7nv7/f9Bs+COFPA/hWiPvvYcDSGvBTwkCJc+xQO9j+SzPN8UuN5dII8DAsYJOJcUmOSQLkUwTBBpdKKt21or+oZA135OgG1ypHJ8xS6sV/wSk4qn8TnFP/C4IosrFVdgXeNVq9LELV1NP28DB0QMhbBTHLRVGmmLrET/ZxfAJfHsMcrno9ZFsDKTSuhssY3tvKwjOpCYs2lhYsGcICI2ZbsRu1M4h3Lk53ONFCqT/tE4mYJcSrxABCqdIcds3hDFHSgTwzSorXvC7zLu2/PB63wMEWiIVHFu+b9DrzUqIQp1WN1r0ymo4m+PchcHbEex+l8K4hCmiq3+YpPQTrzOPv7+GymB4LdEEi2EL6bqysiKAfRJgkCSifonF7oi8hvtt4msjmyMg58VfoaRhugodFjoAOlm2GpBhyCaBAhejoNAxgE+bzg99P5EuQVQ1arSsLXdpje1jDJiWuEFXinI3BKMJVQiYeRJvOPNPgCBZ6RwHzxbBxQOJ8TEPl0Vo8VEA2Rfh6kEJF/+lLg7TpUMScjLTN6Q/xe7h/JFtc5RHa+JhkMBHICOIoqYZFG2I/Okc2TCL1keHsVpYWmTYmlqejhrbyQewUDtftBoY/rjufdpMhSeKCClLvgcovpOgk7ejBSLSXmrl/lqVbOjzM5QQRlDk0ZXrv/07CIxIZ7u6+/5tnyG8p0iVXLfekijp4RYmubUsvK6EkTUCcXludVbMN/JioTDGCh1xwq7suFQP1UVtUR9sLSS92i3ZbIIz/ZoTAnlNaABym6aHkPjMsfIkMpSkI8FvfuFYB3mxcO9Tad/DY0w7wiicLjl2Qu5ZILv0MAL2xhI9eC+Pl4ud7ZP+V2OpMHaY8kwokBHXdXq6X2rIGOCuV5UFkINMMlPcVuJhs/N2Ah1jhUzwncfsvrcHhtjruyhn9/89KGxLdbs4zUnUV6UJliZIu4thyRzfi0E4AjMgcDJk35UPb63ueqDpYoxhvD6jnChpOt7pPUZgLVZCYxWPs5X/BeXN35oVZL48Jmm71bCdbDYNPbmRNoQWChykIaAOHFb8SziSN5r/Ug+PWsXmBBnowaM/nI44wUQCSF5lrpM+K+BeXPOX+7GYYRQfTYmCVsRRB1ThacP2VZhC+8KRNmAMF3v9Nwz5nupfs8yUNl4/cQWDH+HkdGDiFsR2DYgNueVlnWAW5MQCW/S+kbA8eY9YJ6VjycUSZxV/B0bFN/GMsX9+ILil7g6aI5LkGrNx91eAV/7TYOluGr1663YEbcdX/DFPGsVrIdjFooNZ+mePV5x6k37/dFHASA0FiZZWQC0GkAQwTLC2vBtttpsBtNqxUGkX+xNVxyDcjlz5bzY45uMYASKjkuNs2AIi3qft7HZ8kycHqZw+5cCMxQjPltN6i9qbi+vTWdAqmIlxKFiam32j/rOkDDaGatiP3v7kiB2YrAvD6jQGY0PCO0NMOfGcbqxobhDgD+g/1EtGsuoh68BSos04XD3iuFNT9w4a/za0+7UFnXz7zIgU+Rscp3Nk7CAbidi3bZEvBVwkr/Vv8ORCNaS6Y2YcWEUE6ixYsN8YwoQTh5aQ+dnGcuExVpoVx91zjJDGlBZovApwW+Ld4M1sBQ2vKudN9x5gn/pp/qccb95QS93KiFu2Mi/5WLtOX0ZCobrfSQaNfjv8X0pqNFJgO7wGlaeAGX+EIWa0XrFCxQFHZzI7qHRl1ygXXK2ZLXJGUkE/ZEItZuKV7Y+6wASahoQCgoacIRzZxzsB6n7Q07sSpH5uTi04PaKbu/TXoGWKLk+24IkFV34MNi235NglwGJ3W1NP++CW+FBG9uJPO1wPacyJS6UaGsTAeOYHN1gI1nGzMNawzoHdst9WQsL0T7wmm4xpnkbO7oBtLoLxiSCINaLYqpbO0i+3RMrTkitSmSkmMrY3nudg5iUMQiu2zWztKOJiRXhNNuLX1hv7wf52Rbvup33IwlEqN8l4pqpPRWmZGUx9znvzTFfaZQIMfbYoPMRfRJWZWud1b1yEErBKG9OU4HC3TScvDMWX2rGxiHNmtce7AqkWtl9xkEXUcSf/AASLuom2oKlpbXMrJTcIAI0rTafENpX4Zy4qr1xG+BIvlbAJ43psTXv6ze2/x/ehKNAnf8loIrfnrgAjpQVBPHdpr1fhhCqoID6Qk1GBbURzn62aJuGfmKfOgN6ZMNIykLJ73W+h2FnPisq4ckGhAPOJf+an2jneLG+/IZLM0VKqNWndTUjahQckI2o1FqdggINDCrE2DxXRMN6CtbjVPUfelVg1xuI6DfQ52hzu8b9jI+PKz6OuxU/wYOK3bhEMYBHf9O8n+AexUs43ui3alRcu2vBY33WKpgK+gHcyP/FA0A00RMb67dSQA0vO6vWPILoNqAvQtDS0m3M1NpaAdUQ64P3QBh1/8zmHzKlVL7MEbito/zQTC6EqX/4uw6BFieu9enLeguS0BxOp/h9r8RmP2rwTLBRS2weWLHVW8uLNosV8Xsclr6xduF247FETaxVp1lLzibpurJ3zvN3/L7FunCMAuoiBLYwCbmnXG0mV+Ben3X9ndXR2JT0HdsaGndIWd8D+vaPF/9QKcOfNHJm0J7JHH+ulKbz0vFnq3h2e2o0VrqLpMez8XXHbQwyQBMoac3tEoGxFSTtEoLyiGQL+KN0viw+n0JjeKBHD1K7Y7RN/NePabNZoDOY+7GEqvKNgkdhgm+3bsFXVsGFd7vsHGgV+QsSrZ6BgTVpFkQQRN6tPVAAUA/LzjFPtBgvJkT76fRSbTrepjFpJ1e3KRSI5rb419N2o2WuLlrX3i+mG8ALg9pvSiEys0hjjUZtWlH6tWdB9l/xrPVhp/EgOsMWqp/AIzcGpJWSLPiIk52ZfibksYLQvjNoJirqcmXXPfHpPq5YpyGipvXLCpJBMaj2S3jWppabNJkoT6s9gL67/ynrfjFVpIIPHyUjKEoou68D4OCFwZhHAAJfBGCTieiJmZO/qjb5W0ZDHvQFpRJECgOvyOsDc8rpK7OSEryyyoJIehp/8RHVao7VOLl7z2n0MMigjkO1iAkw5FVGo/SaYWym/k9tFnylnSWnQaRCQGJxCHz1BP3aU1g1fqIS3K75lUJ7CoXGsHULvrjCTVAMC+dWQtPLPDK/hb2vauGs5Id6lIj00FzvtwgRCq+5GzwsLKtizzNaulhrhjGYID/5wlBSLqF4n4TQu8/6S7akPUGyvmXf9+KnoJWG2GBoaA01zvsYAJfJT3toGhhQfBIFZGv+LcVSSSC+mEZRcY/T3vCoWm1joGVmScoajE8Mh4Acl1KLuO0Q6m+gYBM8ZMZ6KjgV/26zp22g2rLNeDTaKX1lAf+6wcgEZ2UMniVTo0uUw5PfKcG6eRHjrpfKdWzNgNpaAaPMj/4414SGg0xqaG8ixEPWUuYFUdY0F4tkS3Iwb7p2VoTvrKjlTXc5rGajjpqAkvBEBVnwj8GB4G9ZqW2I++lp113pLVxHQko9u9bcfXubGEjJYIz1zo/xdNBRvWl4xWUNe0fN7S1tpmAG532LDve4EOVlmPdzQykT11US89aI1B8ZXW2WucDABficM3IwNQ9R3Sx6Y1IhEkuNZifkhpCsOtSQtEZ8PPiuGYJpVj7+V/EMvgS5igMU990jOfhQSlbFdcCaYnIlYl7EF32OSMh8xsZxfwbcE1QKP8M/udLuMhKqZ6NSb35zUq6AAuOAOK+53OaZabP+1UID3ghJis7p+JQMY2OWbPfB9y758Bm8ocI1J3Yhx2kBOjw3Ei2RFAwTLocxT835rXZIqcbMqZLGU11XyjqeP6bq1vGG682t4PZymA3/Hypjz76DuYBwXcXKHrHneullY+zpa0lkOfrbJyFB4RMA7SU3TMODrLOwG/FYXG62qVyUY0dJ+LCdzkeXmfr2R8wTFCpJ8Lbeory86Rcp/WCkxWJM9FIkXduCa1pSwXXh4vCqB2MlWmIdGwhoTsvJ2JNUMBgG/3cNyssoH1KVRSkf/zFF1k/LOuWzBbJo3F5OneHbXvsQ0bO7txStS7pRLHWa7VTVkEy2v2t2nWudtwX/zydKfxtZkqpo2gbjJp6IB1xIofygj6EO7nLk2E/aLxo8ng2Ot2kDc5aDzHOuEDVdQon2E+oxAV9lHCTGQKM4DO1emz1e8px6QAZjE2VAgsFj/1dN1I3zajiyDOfoiXLyYOR8ImgWntEvOkzn4KpuYVctSPXWhnQBcue6CxdFw5lvdlUxIFjgtPBWgWI5mBGmTPEA7pM6SYejYuCgZCSP+ICxdgqc2gmE0qEeBpvvJDbG3sxHXP2H8GVxRUn/0NF0EpbwNwhAPbqeAvYeGaWNPQUtl4YuzNjWevPsouXIcgXTTlxJtNtDXutb0ZH0GHxba1Fu21pR7SxFROfMBCWTgYpsCC+PqKt25LTmndppG4cOCnST4cwZhWu6kjVCO//VYBvTZVzEwCJeOLPcFk1gNzdHmXdvtlMykJTLZ8o4JSkddq9joIwSEUU61OCBI/gzolnAQD5vEvi6p1MPbCn5A3LyseBbQVwB9UnBt6PO8qEOVrY5gtJORDTF2Fj2Rd0C2qYbCnnYViYE/7bHPFKR9rTrks7BKjD0Ha1C/vOamixYm12B0BL6uq6pk10TOWyke8W3XT44C9onNZUOl8Vy/MEnTC67Ur9t6veDDG+u+5YzsEmzD8DalqJYLmYkGWRUrTBpDCUVW2x6uVN3zzuXwL/bS42XwOq1Fche7PzRdOoszIXFOeewXK80LQyq4ZQn1Rbrlyzy7woCdkFpTs3Rm9EUJYmfxPtEcF18jchWZZ0ILz0A5ala2sTbS5sFedt8LCF9RbJgbmxh2HuU25HGC3mx7/dWsKB42RTkpUQ25pzyvHBWPQsCJ7d/UVOFzFnaM/WdsPj436MwsX3uSxu2/AZco7xwYwZc9UUr7EhZ+IqfYJXiUXxV8Sc8s3GRVcHi7qsLftxhrYJNrvNW72uEG0RDMZRFJr6M5ff8OPSFaReFSozLh5SiKioECnYNESsMWpcb5BnJMlfWsde1a5RXc4KmxEzxOp0G3nC8u4MA1jeWYhUaMhEISPCeGKo+tFiPxK5egCbrnq5Uq0N1qaHFjoYN0FIrcqIiU+u/rx+O423+Uru+N5D26NFYUm1Sq59PPjbkoZrLXv6UxzjcITwdIFO4dEiqfiEryenuygzdZdfEJqq8sVSMbDi0rcZhgcUhmbsjfRjPZ6nZNetwnh12vY3odrYma108rYCB+NXtyqGhQYoNulJNbRtsPKW2Sa3K6bFaT0rkqeXc5oDRWPMsfXBZ7SxtCQ6KzyMONi776sqSqmuHMpfp6gkvRcu0qhUmjKGkzK4+0IBNc96xa9Cr3ej1TcNoXj2njTSfFvz2REZAVWo2P2gDhGBGij4T0DWuTKZRZw76vO3QMLZAg58EjyS+wcBHAmSPI8WN1Na3xK3HaC+ffQSmqbaHkQTDKyiU6PNAZVp8s3Yg4Ukl+FIwlFgDqf9eYA2ITSnoV7mvaz8NCQ5Z4sEB4czfKnhmuJ+eyBDY4OPAjludBB+FvjlJWK71oBvS0NHs6/moaE5c9xMZB7ek+vmKUUwp7saIYhYfVTyOixU3Y3kQAmJOnO2c3hk4WJNebn8yDD4aj0+yC1bvaPgtsGCfNuH/0OP2diZhOCju9YN94qzPusQL7CnT3iAJuvr0XZPzfNc8H+TQayRmNgvvY9nb8JMm9SaMJSth0WfLvVFtDQVbcKoZh65XcmdWKrJJdXLY7JsbVgrcRnKxHGsSHLKcvQ3y+jT1YHj9gMW7gzO6aQnt87j7YXB27524pjBBXG1AobEHD6zxhUehvNXabL5UspOhqBANkoVHh5SLmAibwwaggzDSk/uAJTwevupxW0RoLahoQma3asU6xUzRY239jvYTOoB58EDcfefgAxfDBOriyX44gHjcLsSlC3pE3kJi1wy6VaaH/bM0A3wrMWswncqcfDTFiMVYEnh5nwftuMMMt0/du/tuPatuqa8N6jB9CWJ2lbRMaG4MqzoOfgmNJLTSTnOhl5+vIcdKltFQ8IE+Tzlka6iGBsYFzEQiLWLmLhtdyJgffy04VoqTjDwHWL9TxJvSFTVFcFD+zdX67MvK9Hg/fFrQDZJxpW64uL8bdYO0AmEt+Mij6y2JwWr+/LgqxlQohFUGVu+wVcvcYHMCh62QYvmKMPbwByuQID/Y8HeohEXtRls349eshmhBEhl9xbobBke87PgUGBJfKjJZWkZt0hIT6/DY/84xuWdJjUkCS/xLF8vJ2UxufGvWmaKGoEMc+8ypNwXabITrLh2Yx8A40n0pY5uHPdZtjjVFQDtnyw4ci0eQ4ajghfB+36pfTJRVjG8YdD6RU2BPKsMP4hox6OuBYBx0HxQuV8AuzLq+tnosVTyLzyv+hasaV1mPQtzaueDPW617MBPU3Y4vd7W+/yTNgktIwzkyK6V8OiBY/C4YgDpojjtyrQ89J7Sobquk065F5Ci0tFOg2ir4yMnscTw8rlVOwV3B00ktRSg0PGONarvC4CvY1LhfeIVQEVNxsLLH8eIyVrdYzzP7pekXdYwGK5d9HTVzPXj+SSZ376csJxernvlUmkzH/Vo85+xiPc9cYaWPXIAfVaWB8rBq076GM9qXS0tlrWH7NEcjrcnLlHOZQICSEKPm5lxGvcnInQ/D9nOwVYmjYE7EkSX9VneAp1HJtTr4fDB5nb5iLgOF90DRjIdPX+8UgkgfmiL1wshRbuZeaDrzF1gEdzK9J8UOhnnD1nC5amsZ8+ttC1s6QGiHaWYhMRNeM/F7kasbjSN6dlUniBe+Yer11L8XFeRSN9r/z2rlgEkrRqI6qQiuyNdFDuVcFoPVE+ZybexS7XmjSYEK5W+tsA3vQ6azl33qXnfNVk31tiNYxim+6l0cXTdJrFWzIGkECrvytgjHLOCzTihhSNbbya5iHLJq13tQqd46Z4y0bK6WM3+tkW53JBJP7BnFbOC+cHHvELingtvJ/djU+S9YCZt0cbgI/Xg0MKvtFgmkXbZ2IkAKRe2GJ5o6za8gfFdWQxmdNihBtzf8zoG/MJbXgDk5SEMn9NK5NxuNF1oLHkCqn9pXi/4lYx2RlS3Zs97G3Tq8UxaoM0DvdOad5Ebz91xmdVFF/+4Kjp7JqW+b8W7oFidoi7YXNVAQZyeeSEyFsXqyWSeHF5NpnkzS4sN/Hy7chGhe563zf17o1mLqhPZ9gUi6UaUMXiCerHTipAIF6/HPi7nUkakchiIN0pjgUhM+nx6Ee954+JtyvzZgGp268j9ErLu+TdUNHzsUmBpBa3qCPmXKmSmZ113kKm+GAwgqR27rGarMT4TEFWUsEUxmPzVfOvYQjXJGNACqcrGL8B1nBA2orPEmJp0X8joavS2P1ZSx2c7+an5YI5slBQOyc3UcQpS87dNSaGMgTMJnyO/UgHPQYTaZOt3ZqHWHZmkYUlM4MjNb5zFXKA02iLPIek4JlZdpMMU8SaJ+Mc0iq7vbkMb9NC7koqQQflAZzIDbktamUjXjObLwuqC/ksEIRYkHZ7BYdt8ijFjTtMt1kiYJ/g+NY3IDvI2LOHv75UobgnvaukWqlKEOG60rP8KEcuHHo4VrjlTfB3fnOYSYbEOyGbcxgbZqaoA7KjS6aJ+GCog5TCKxFQFx9QzEjElNUdSPp8Dn/SinTozXeZakEnEQDmTC0cRSlnpSLvlch618zCjycf9KzvMivr4HCZXrSlHR3MAjGfhbyiEwiAA9uH+lTPp8Lw3ZXVA7VlHOfzMAxiV4DzHD8bh/QEJBPw71o+64wG7Wm7Ss4qQCcQMrSORFoNGT91tZtkhCRh/A9k2AYzBLUS5uO5boZQvZwE1ny4o009+xptXzphn/vq/uKrLoghZR+ZJ/3Df+jfAl6L8Mj9I/A74NugeM/rejUa0OR8Y43F80/G/NexrTPfrhtCWLylsSFN9TGatiNJQficC5P4E+qEdiPjaYGGnI7bZ390N8nKHSUIqgSXdQgUZ6a853yfUOX5XeFU0TUCQ4LIFEOtcns9lCD1r9Sbg74851qm73qhPEg5nNKWGiePhHWTz4JkH3E8mBjSk7X/EA1jRCVo2L+7qbuv4O5TD9/xR5E/k47onBW78Ffe4fYlLonvc9HnfhQS419vXaRG+/GGuALgzacXOK90ry/9nh6RUjDkX/VfKarROEvb6+dgJ3GoxwP1zHZQ6rYd7qs545g7CICP/x2EmPwznLorERoBMJURjU9BWcN0N1FlFXVusG0JdvPuV9m/pJJPJWawKPvi5AA7+BgEI050sBYDIhL10REwd9rww5YXeb0FR63zQ56sfSCA7H5AnfrRLJbbY/U7yH7L04bv9QgrMOcuUH+MdabMGIbtiM17NJE/sFkfwLZ9HEJS7RjbzXHWVBAm2BWeWoJCUiabdS5+It2SPrt6Mykr+dxUoqDK2A65lODeEZFLzWugWTvKp8kDpRiSg8QR1tSl+Nv1QJxAtB1KSgTemgkbNCanyLay4HBBMneLihQo6brt0teMUYnv4ZL+xOJ2gTgz88ebc1gJfeJBIJs1CghUgIIqGw92/SSrXOO+5MSAADt70R+SdRRW6j4B5KRhI/d3O/g8hoFfVvNv2zLbiClDH3yS/qNl15yDThilF9muYXsjh8gsejulYEyoqcu/NC2+jvE4wt9CmRvlz23VyRV9FzDBL3c+iA8dNiQ7I8HjDfup0c033NYJeWWx/rXGzAZsm5kcLCPE4cMaSBP4rGfLviW6uRNRqGG2FTKSnZU7ch7nJa6zL6i4pmZAlgX27MqOSNI5GwOlPJRGHo6roQ2quxTPuag84GaKe2+a+7/DsACS2OWhXnzazfv7XGZZZ8Z9cEAVdA3qGo/m5b6eoaTnyLwmvDChJc6RHDV5+YrxbO+3Bmd5KGMXcwqCmiQ8EJI66lfvqrKuHbM42ohwemfzbNYICfiZxIWyMKU8v+e6bpMICyFeh7H3fq3sJK1iM9N/rD9sLkrsuhgE5JCXVdJXXout7xxbra9K6FBChJYQM8+ZpxSSq/1kYUvtr3caeJI1GFHXw37+3IQo337r8uogthHqx59bil0g5TIO0qIdmrdYHT6XZfT7t6SAYBKJhOIpdvdpwgoPGyw2Ta7P6udo6iPDugQwy+fDW4LOR6H+e/H5mBf2vFpvZ4GklLRe3tgPvwQ1fJTlR8+b7uqZN/1IMOHtpPszbfCRDEs3BU3svfcTJ0dRq1WmEJapsL4GUYa2HYYlLBXjxg0ijYa/vJRaM1FO5vcgQpanhfaVC7HiyvdpkynHftkyKRv7dFiLm9TGmO1ntnGIvwH9y2RbsCiPT4+rRnhlTC4V22W9M552hEFDA4qbOX3kiCIB6/d7b6GhiUcju2A3O+lzj3MkU1nbWZOw0dZA6zx77JtUlYbYZml75usH5tArC7L6Wd09o4XTsTVacPRKvECSjqXUIWRbKDS8facNi8loK7rnR0yQrXwxqaPNkpH9Gn70dktlmU/ML92kQQ6/Zz52s8mdExkC7ClerrCcEYzlT2qdPUfesrjb/9ta5BA79hmqi7GvRcKooUjvsuNWShDltcgeHvDphOedEw3rHK50nnXbKu2mFrMmjlD2C0t2+02ZgZ/Anm3zLkrDrHbUvaPA4cEMxPcdXgwhuwvK0Yhz598BAO1c0bWERmYEPFlWwreywvVcQBeWngY2spQFBX8HYlcUo8RDY/VhVhbxiJdejzogXEcBGSsx0EHbIFGmT/OXMnq4AI4MG/3BfB6qaGM/BMgZOHYrJAARGCjBBKqD9Jv82Ybe+x2f5Nod4IdeueTf5iXH4nA5sRvH9WTPJgLKHMCAnovnF93xOIUIjP3bhR8aABTSaZOwenM58bB0IW8HkR0GaBgBGvDU01+qFrYJQzDCyWQNntUjLf9wrTYBGts1hkvnhh2TlxwRmmI7dFLfwgrJmms7YdCeXZ+08pUKewma/Vf92tNxUsalhHUJ6XpxM4WeKVnMHkDqREIuHcDlPLFes6hx8GC/IX8/xXPMkb25NtGirmL4rlB+X4FT0yVYL7xZDo58zxK7pZ6wnX8nCiWeJv2kSzrdzJmMe5EY0IomdkbCzcDI/ZFJzKSljzU2W2DqrCuBOIXbPfGNjN7ciz0w4FN2ijZa0JmfJvjrshtFJpudpsU30O1BW+EiJ59fqoCMI9GG/1lKIdPXgTE5JnzpzjPEpKR4BPyAkEZDLjJnKTd7G95A2LUwEn64ebTdvEvy4Z2FF349ZO6SX3SXBb/eVlEmq6tdOItLgr2zdY9W/muA4D1Z9mgmz1eFecrSyqNWYYyFgLmnqjcY86udFoVz9dr2NSWHQUTpBeWOLx3oQqZzBESE18tdJSE3QFrrUBYLsQJVf4HS9o443Dh2XOrVjWvSKgLcj/HY5GRra+qK3dDshDj3OOY8OPHnn7TH1xhwF9KJPn59BEr4BPhX58Zq9Oqz49kJf6KbjReb83jruzVgdSIKmHhWW+TqblHwvvOrSRqVtt/MDtUyoMdMihqYBkjwOfNicEkbk4IArhGslpy50shceUyt3Q+J3GheOcFtKDcXEXu1hxZK1RAaWy612WI67fS82sY5q+SACPvVMoPo7aF1eraTUkArxcHL3Q1LK2HB+Kc+T5tcZAi0JpQR/XSXWThoEeokQIEiy0JzP3Mw5hu/3UepNFLbS+4V54lsI7DGGwyLOQcS82VCtQZRLLz7KTG1U6lUqGEBxXmZVF+lQZfYgCnWg65xzMmxdcUkRnwiu8TUYgK5wrZ2WDupXxC+shpPTEJkj2jsepykCjjc6NCxXwwJ/WDrzIRbCxCm+YPxCKyJyqiQG/jRPBS2xwPoVyDMvY4asFaw23HRzcxcjMLyop4r7T4ssSambQU73SkXhDP3CcrC5MdVuJQ86AS6xzO2iUOOwLuqW4rogZSvhT8vdruYJlB3vSgBXgqNK3mzZkQ+tmR0aGwBzf9QRKqRxUwMxOZJ5lGGV/TpaBUTHWllZrgAR/cDufFA/5flI7NJjg9hQmkFSwur1eHpNwH7xlll6RqbQhDM5g0K0iyJz36zeIAE37a+NEwwBfsVcTy/A8PFxOhMb4hucXsTDJ+8fK5tY7KAMHxWfARXaYyGYEkzQwdLbyzAZBRTl0pewkgof+9o4KNVMMG9OkEBiVtOqYXi60sE413yZHTOlUs+JcD+exHI/nxe7YofjS/8SowkaWxsYmCxHbZAitOC+SUSc2M5zaH1/JwCTNaPq8Wma8hjs8Y4gvZiBhg7rEbSGOic8Q6FyVRZGGvsikszVXFl442wmporoCt8+GZCb4Xwtl099sii8rrwd0Q75lFcYAVWIowwTUDXfAQw6Z3aEG++JlWXUvnRsTsoonqayqtb/gukY/IRO0Qrtbz2WG/FG5QlIwdr1+dmePTOZof6J3QjD57/ePN5nasKmdt5JOZEGbml8AaIBJEvGqGbD9Hnpj5K/otqw/cmTFbppV7Dh9zg4pwDC+d6eMu6LTmTxuzUos08MIbottlsBA3/JKK2/rLVvMgGvNvvEe78zu5Ozh+xYLDsnNVlfEyukEDX9RUvZlxQV8InJ1wqNZIg9DTIkp2BcpZPPnRHRzk7zrnbFB/9SeSXQlIrYaVECTaZzcGYwX4acmOdMK0cHUSF85sUoWcctcT3cc/DnUrqgiD7dKcE+iI3N2Fp5gJAJ9VdsMe592Jht4Z4GQy4RxtMotnoGSXjwuyBaGCUwl1lQJBIYk9GH5cfMkOLklEBoZqotg1c0EaG0BC9ypSbTaryJq9SqTZaZeDsbEoMdl5Jm3JPdDz8G+Wv14cul0x5bIQcfahl9AAOmAB7ezQtaZUJbL65V28kGlX3mX0nY+X6mdlyqd4hVX2e+CTBBNg84npEUrIgB84L92QKSFwLnNQweUBRH2AENi3KD3tjdhQLilgLVizzrIG/mqPvB3j9gX2IZV3R6Vp0Enk1+wkhBXrka4vqEOYOBvbXuARX+HRbAy755tthvFn13KQFDYV4wkjhwouysf781uNo/3IHoYWuZ8vyi9uW89E40/OtCJCHlpOmJ/mQ1zUmNKcMaJew8xzNUKvYUlvmLT6Q58TB/Y2f2aWS1n/8xfJoaxFhUHZAcOmMbXs7j6RK5vawB0K7Oo54w0v+fLsdM8tC+PTaEq8JM8smOdEW9ZmX/OETn4Y8Dvn6PIMS7os/w12Nejf/r4sW+ScuS/uLzd4WJ/zucT/m81qvvDi8b99d4citOT4UBhaqjti07TJNclcWE2O5fLZCSQ3o3W/TSaydzEfJs/j7XoB0YFa9Z8u4MrTlXM8UzlV6z0ugzijzJMqK2c1zPcoqF/vTeXeN0KLpulz7/Y1vrhMa8n0czmBb5SSJGpFH81tOcetieJj+3gvTuM/3MxdYViayAYX3rJQYP3CR4/fqw9WMC3WzggbsyprOkG/i3cTGuANTgNSaW/7dl6Y+bAU0H9gLah3E5wM60nAlvTVXiDa5sl5UmlYV6ldJxX/1Y4kVzpk/u7BMnUinu6jGo4A4K4bXDVusVFrjDMI1YlXBtce7I+7z40otHa9kYldIE7Of4PW1phkY0/Wgk96B94Aj40lWcb6vshJ0IM3WPWy31ezftCukgPgQ++UC90/3enxRLqCN2wawirQTR8WT4XgRGpmbA7rk/smUvBNCyB+wqfl80NXUv16YZLHayhuoKjwL7F6rFRKTRK4m9Wy61aXMWmaTA6fWZq1goWhiYrmEqlqSyjxg8y2BZP24Jcqm+kdaO2uQw8rdznLF3VZFbLZQLqd47PjQgRiLLGF6t19w8E3UYaIjeo6mGLZk6DUcQ7UDm9j3b4jA+QKbDavGyVCLVEJJz1qWFosqxIMnHQTWtti92DKucdHdGH0z1Sex1WhJwO7UKsbnK3c1qHhR5ORadSSayvE5DMee/67FQ17e1FeWFfbvguJPXwAyVvBmYm/vHeBdAv66D8KUREBwCA+H7RZ0ivpbtS0wVLLb5kqLCXJJKGAr84YygX1gsW1Oty3l3ZiAoIX0mhdDrwiRX9s2pz9ipnth/Gbh/7lREGmu6W1FuxDC1zSXlpCTzSBIcKsV9Dzdjw9QXWuQ3j2S6ygjWQ0glnZA1eLylyYsoQi1JUE+ExoYsIYZ4LIdfTZhvj+aa1QEKmNK9M2QzSNWf8y5d9Fc1qWJV3XozpiV7No2HeyRe29NGGw4CtYO4bcv5/ZiquDhd6RXRAns4lWdJeJDjTkmdmmIKUV3hmclakNqWFRRNLum7/zIUEwVgLN/He8cBCBiV8EA7YvZe6ypY51DIpVrvqmsBO6/drNUxt+kijVYypQ5qj4xmRQ3ZsIzLDamjTBc8mgIn4Ef0XbXbGFrwlXKH4PNbmx7Mogax0DXqN58iCSKobLbu0zANT+JWfDGp8lorBI3Kp+Pe1SRPzyOMCbRhrc6HmcV62unNWkbocH95vNSxlVffHWzxw3ACTXGJCy0yBOXCv4NodSGvGB7+tNg1fi1zXkVzf8nQGlLSd1Fp0BDTwqY+S1YdEJSnfPxGoY4DhlC4bqw5jNHQ75UilrtfqKTxCpC6xaxmc4bKxW+wCCIDPhk8pecOYQszDB1EeTTLlc9bycR3MBa/UTLdtMiqDtE35bsUVujGlrk5z33c5na43L9PASArzsDkf/1KdGNiewlgCrvS5fIMDTyZPQcN5+gE7BE25Ty8lJFc4fV/6taLTMFcDY2F5p+g+T4EVRZyvOzwm8V38HeogRUmo0XIeEtJjNI+XquV7HJUrMSRAMdbnCLgKmZ9UBrJ26Wz0QmDLxSaf4Zl+nIZe/rGbCfnsqR0QR+NaC6ompfUMZDu5fyFunDieFHuN59n3ChOPDI0qgNueROk46uyHxfd1cFrxl40a3rf46GWY+LfvtxdkWn+OYbqXGFr3WZZXo0CBP7Xm8rzxkiQ06EQtKK10uUVtnM+3oCMoeluhjtE98rKUnFeN7S0vRhtdoXbuQuo1lEjosvdgCWwp8L432K43iL/SbM5apzy63bloyr/emx7970UnXVh9uvpeOu38W/egxTcISdV1+UWX3DISCwTCB1ezoJnBqDp917B/Lgh3Lleiitqcr91t9cipc9kQ6SEi5V6yBuF36KJKj7Y57NoEWB2yPsgdb7WbtXvKwztW81XvpCHoVBKo0SidN/Q7nYvlMK9WNAL01/Tlxm+u2eX0+P4LMCPeBy+Q9B5meg3COK6A/jZsO7YVcKl1U2LzCT1OBfkyAd7FcUqW+llLWOL11plJIouGUi5r/BjFj9RLRP3/cFKyZVKYyivzB8jpbB0vrpnsrIlLD86JyndlJ76JRE9dD5u55IrlopLMMSnHcBuTQpEd0VolynTxM9hvQ/7B6rIn1heErkVNLqidjPElGF8oHKaRAEr24c0+m8sAh8Of8PuiWWdxj0ZRLq/0UbDQEp4bSg5CxvAqX7bBQqwSkqqvaGVnqvBvrcXPSVlZ3swKsGvPnFhJjJYJgMZL03GCIKR2zh5gE2rbnfj6ZaRscPZC1DE5KHk+yVcV1g2XUzhs4YdQq/abXvbqy6umZUVe6iu+FFgQbwUCM8VYwme0fc3TaCGvC9xM60p7737KI9AURtMVFwIIeVRbMfLScBWsA79nYARjFVkkf5ete7LA8yO7fTzHAJQi4bzd9lsmu/yd1tvSs474f8w92dxw9K+FsUcbcz6C2Kb0493Dn8Z/rtafUyisgeUUe8iHkWwCSMzn8ThNWt3kfK+dMcaKi42DngWpQLk4tkNa23MC+1q2Zddlw49d/WLXRpIvewcNuAqHpsq3j3y0zD0O1jSWes6d0xcHjn1QS/15f4r5T/OM+cz+n9TA+yMklIQLC/D28Q4Iw5Fo3Lik5KQ4Lo2Ex6AhMHgSic45QTopk8BQMAiZCvgmF7zLJjgewCEpO3hJIMCiMPbcZS2iCFA20Ncn65O+6VvJOYQ1KgIR4E4Eb9oKKPBNidCUKesnQ+C9tcxci/t5pHQ6A/fd73k07B+Ael8p9W+/U8zzeFmrwX4A+aniXGJd8hJTFAnIMD4WqJXTJ0SzvG4B1Z3Qqw/uk5lbbOtIbd9R5MI8h07NeA5k7N9W5Kk5l7k1Tu231j9hHovg4ecPq57mIDUugmE7l4NIFTkcu9dCDrlV7xYPwK3tvyNEt+LNeSAIRlcx3FGl0I3He4j3divHz+qWXpmTOEA49vIPHGlVCgEIxhsfPpMNAC76/ASR38gsEFvEdlGAhCDfY0Ood7kf4ADY22Xw0ilaoC16V4iIBPie1kx1uSAjNXYIgcD9WC73Rhjczhl2+7LS+zLmrgMc+GzfdA/8yx8X+5AiWix5ovA6fhtUNAQ96anYss0SQcdHU4Mw6/xqaPC5Ht9GFejvQZVIWXS8WS/gZnF8Dx/yS7Qb1A8u0dk1EozAZLgJBNJS2HH6leFg4pMhi/mSwMxs6G4tcPmzwsyZeZlZnqNKNN2ReXxNzSJaoR0FkTUHgngjPWYD7QlKjos23KC5aEJGazYg0ofwuIiELUu7TpdGNsyC5RsUL8Fj36Hy7T339X3ygMDBcb31fpBTFIYmGMHHbbCEv1qjIiNLpUU8aRrxEcKPa7YF83WAIzZtg1h7TlQsCPqF6Dtoy5dWyGr/AUjF5PmTLCSKWrlZKPiiGxuuwJA64VkaKcfwF/N01ulsc8zDl2dSU2u1QsCIMxgOiBQhotmpC55vz6UoIBTB/n/MpF01pqKK/27EH8/6QBUxICo5vmQbhwkSQ0cDwnaJZ1VLDiXkk57t62zB7WJJ3oJUZP3H/5ElLZn8k0q7/7LtKBoGJdALu0cGWpQ/hToE3z67nlQf06IqsAaLkklH1ixaEOjxvtT5HrhdkOQ/acmchb/+LUWW4OmWs+CZm8MOh4dv++fwcwMq//2+/w6Rq9VfvLADFBZHEfYwmp3pyiNHFv+Uf7r2yBfA3vHX6a2RBOR94L7XgJ5ie5ts00erP/6j9Ne92+64rQ787omvk+c8dO8P/gZIkfh+we6mkj9ev+vvVJzq+hGCPtOXVH8aT+dLfgh65bkcB5Cru6Ar0yzB92+lt2zR95z7wROg8r6Yvnf9ix33vqlHCKOKNEkIjzQmfDqrU7S/X4AeK7z0hvZKe6iz3d4Z//O/K5JrPbXjhs8RfQstB0B/ffxO9Ch8IVKTsWR1Vm7kJW+zsdROAZIWNN3s+fpn7Kfj7SFHoovWj6bHt5RzV/0u11fQs+OqIWUfxcK6+uQ3B5tVH/S27j7/rQ2TKOAe/TEH/s9vSMn/nugH1pGjtU9QgkrmCOhpMw3lVdesdhPSHue3TLA3wMpMHjJELtOg18XBgXlXJG8/G55zzLIOJaxWu3KcXKllFO700u4oltglqZNF2r+BeL/i4cxLAbevuNbky+SAXmj8iR6eqxQKFfMo6GHFv0ka9VxkwniTapBAvQAh9Mpe5QcLksL8gr9WuZY9XgFfGPeHDMOuH0GEsOhCsuRezze9sqKOt3UweRt5OnjgK6gcRa/+N3CQD8uaiXXiegIz6IsF7eP+1l5RxMIsInFxJiUHSC4Wt6Bgjg03cx/rLCe5rDAuZ6bZnj/M1OD2E+QOy+YmmK9e/3uDXQlOiJ0Lhd90cVfVdReP+fcG91xevLrnmBP8J8aNuzrBlkNaJfdvz7WgsyPeBiX1BIStcbbxzoiZpBp6cs+sfmoJPZPTJ9Ijq7sz6CnwRMZT3LjtKGjV1gbFUPy1lYQTl3B8KLPhiqsEP21sG0dUlKYRfFa1vaME6ppfMeqpez62C//KALWamvSMz1BdTdYtsxXH+b3N0dDVTmzu+ijP/XdyI54AGcsjBPBZFLyxi/edv5c2j6wxnwx8ZU8fDOojDXeEjls+6qKdBgwL0BIKPPtKVxUKoTwLLl53MFNTd0WvxrdIL1YyiwRUQe8rekuk5BCFxO8MqsqNb9mTU2BR5WGBvb7omp0zXlKAIKy6ymZFGckk274DCwbLWZihphBCma2RIEjSn+GSQlwzVhZ1doJ5uk4ekDrGpHAVBWiOrvYULrDF/7YOqhap1dIM3ybIKoenZBF5lHtJOS8ILc2HJjRzq07LI5BEFgVhUnCeOoSdB92hb9JzxHdUqliefU7mWYKuEiABlgB7PUtX4ffn2m3v1MkhilLRdHJKCbVsSS9Qf8SIwNshzSFZsTrDJjoXJ7G3bf9Vc6p30Unvt8lROffsgruGrrFYmIlGTe/WL50ei+2rVDqb7a7V2DxY8HxpJA6TUwP5f9zx+HLie3EliUO77Up4rxMkiwCBf2GaBpYUWJOGKrME5HPBdE2epklQqO7z3VocQOX0AC6n8bEEKHwcnBOc0yhUoaoulRKoIUXKiLGdD6TtXJuK41S5/CyOR/K5A5WbOdtST005Q09vm+Uob5jD5fpHColQObQ8ClRK6C0qv5dQDN2MdlZgShJaTe7334RE1mArHa48Q7a/bTiLMplsMIU6N+aqjl4yGgM3duEd1sE6MzwuJ1v6XcZ7Jtt0Nt1uy6ClAPNQD+lZMBM4T6UVe35SpiVknE36rcFZA2hy12gh8l27IRDCKF7YGWiEMOwYREnRcGMN9oyx1Y7GF06d/MtZXJgfCtihoeM9cs9Z0rktwH0hzOtgm2i7rdryVNDB9fqn61kC7wribnhPJugibOJ2pb3R2RawpXbhloq01FsyokGR9rIJgokTqNR+4olYoVFumml3gljA6S0uIYpSUelKUBtUoSoKGHvBHFpCAbmYWUuYMbFsKiMmxkV6SWdTPwnGXX4tn8nEDwQ2vp/IPHp3pW+sRFf4YNJD4+hYJbmSkBIPIdUJgy+P8BkI17xIdIq9vvrovVtXAZNajnm4xtUj0zBM4wmOA1pcXlrztY3WxXS04ZguwVwi47hPfFMVrdIEB81U6wOJInPMFv4QO86ekFot6VknQw+yl/1HKFUJa2V2BqzYps6QFdKcdMsMWZDiwAvejOrTwJz4mqRYKBhAK5xOPWK/BJoEW9IslCsOhFT7HFd8EaYsPa9G81iiIFUsodKqLL03hIP5nul464+oz5MpF0JWyhy3jNvaXgfI0xLgaQ91oaEUsScWc7XZ8qRNzGE6/Ofgiw1+7JTZYA6Gz70IWv+sAF+hfWxAjvdppdj7HNdzdFMYSebNfug+W7akhQiUHRTmy1njEf9qZJk5R2tehaXwjihEKcXb78QgnepKla/LRwT5yxe32tKiny83aNwq+sOw1bt3NeKMeOF4mV24dMpZd/ZqvC9+vo2kxjo6IyWisUp/rjyuuKI3faLmoSL9v+V5w1K5/yqWRSQKYlYrwcIjqHegYjKlayTLjcIs7p8tIwupqf8tpN8+eUB6akgv4cpc8NgIJBKLLMhY9Ve3zJC2mpNTPcWQbntMZfCGSS9H6xLR3AfpXBvf0r1hdflTLasFxkqvVctSh2kujE1vrCx1c2jdd7sOGRF+WIKq01BCWayDHQMa2BVzD8gtnkNcgwI8+yk+q/2NaDyzrK6BjEKJY0g5uAVEVMwbfNQw/DoC1NqompTD48hpsUKcVvrPeIkcGmvEaWb2oJgjUA2Dw5fFu7BNXqNRP8aqFviNH77QZEdNg1v8MIezP0o03u8UKwIVNK3VTm43mpIRegGpnUHCMw9Je6q7KYVYGm29wwimXCL/6Vy8jdLYS5U5uXyUc1IS4y2DJ/xVLDY7vWCs2MGTJCxD55+pf5ipaxJBNoWdm/hN9ba93opilwyfWWQEIxbRKVOZIU1+MCRMz2Ao/bBK9bI0sAJWMP3H4y0q9Yu65GiJkxzytgn/m6TZI8g67VioQeYQw7gV2eXzmfQ2vi4Qqq1yuThPjv47hTQQb7WhLiktNiWJSZEuJa6ORIUvwKyahDGRNNLbbUahl3lhTGrGpiF3JC7g98YG2XVjuMn7QlJ2rHmzgsgmlSoYsbHugZVuHc5SncMRrkRaZPAI6dKY8a/nR0SxjPmquMxEBQUwaqIga3SGXcvIPlMOSkuEw9Uq3P0WASiAfENzoqyKNI6rP5EyFzIKaQg3DrI6QLzmT4lpLOiFgcdKUx8c7Y21uQlEF+xD5EIbuSz12kqXSjKbfFJq2GLXMfbBTPG5kmqThaEgLYjHObIg+ZQaaYynUcOp6n5By+ZrDbkG/FqgX7bTGT0Mq7KqVW+UhIHVgGkDLes7S2X0rCxQCjFKpVDw19qaJR0NqdVXOoQBskZnE8S5n3Z+mQB/iC34sW5MyKEOZdhPX/bYcsmeDMq8W1UlXHICl0EzsIpZlaJ22YJ5fYTBBXTvOaW0EBDvFZQyZCyIkCs8Xo0llRAMPHbdHrX2YBksYfqORSoi/GP61HhJLXkJakf/lVOzB7zzjDsXi0Lw5nQAzevBV2W3gWRtmRKRIV4cQuplKhS5Ta8hk0InkQ0GEa/HeYjnBSGa4Lh4birtMF65bXOf0CNSsEH6c71i7lKIzWcH25q9VohJjbddyDIYOy6mFKhT+EZh1+8vKkUK2RUZtE6ST73EEgzPl+XswXR4CoQS21ypEckBVrCec5mksusM2fFRldnMESB+3Ar8lWfaAcMPlG6z2Y4B0RkYfjTrPENf6xEejVQpBxyUP0SDZam8y4dZdr/7ZlwG001jVCTMhJlMyyEizxN81FgzIHXHwVzQsJHI5n/ZF6Jt4WjU66ApCrWD+loVXDGi6H/jSoOJLutQij+E4atde5236zgJRWOpDEmvcdOjnHBfUcDFimVtKXT78jPcedWwCXlGjY9YbfSHoDS1CsaaLRj0BJFMWtko68rqlUPspYhaze7kteo4vQLBiH9usXnAyYB5OhuwQ4YxtXwa7vEuBwNui8tN61VIsX62Oq2r1mW7qSrdC7y1eUo07BRbTnULk+P5jqDC0BpqZZkgNNH45EQ3npXBzBHOKR+5lRaGYgJnaUAa84vyz8bKGnONht2cGwnppEgmtdCdRpNC4y5OKOeBNYVvFLX1Okm7o8gsOx7alY3hsNDOMhs0BF4vLSbLXJLKKnKvOYGSU8bxEx8dqfSXlBH0iHH8LtdB+Lq2rEs2G8ft1eSBKVWcfkE4xHZrCNZDs1l0pUKomlBrGEZPEWLBo8Z1or6mJpFOyW0I3/BIgnnnoDTAyxzS1BOeUWf9oM/9U2KWXeYjUZ7luQiBeFmLUn9iRyJ8IjtRfnm6n80qZAyz8FSLls0hVhhIyGpVt+qUU89AFHJ5DgNEqXhgKZpGSGOxaJl204FFx+vV9WCNklQnySVD5y925AWRFL5XaBncsMyKUaeUGhaGhqLkWMU0dW2jRAOr1aASRjI0FWfVaBSCOMVmoVAaVbUtp3lHh6magv7UneqPFCayUqygVlMVyZ+Gw65JFTMxHoo3i6HviU83DrMHeAvfPC7FYpZPIJpySqVK7pBgeRyBPF7dyrmCTgPab8KJBvcCQywo3Y0jBW/IJ+4vtIvoUiCApfZp9GhCko+lMXt+ITPPLBf4HB0uSrh8MhZgtSRbrRjtdt8sCZtRFverHVISzahpjVY9gaSO5zeHrEqFdIBXqMr1obQ36Qdpp6PvACn/fd7/twJ+9zVDJ2n+psGrexLiL1tPNNF/EfbBvbB7ZUVB+tYfD9Rl+Wc3i5vUz9+q6p1PTR46BTZkYwAZYStJ7n1aJnPiMGt+AwT4qvJFdAYKBJg2EQz8rEkJYzDrAAR7vDvUDgyDkjr85QcW+Mt8gUoJIYAIuG0RAry0UIORS+wiJplf4wEmHU4DLR2OVUXi+WsajspF3KppXKAQdy+l2BM2u2YBJqQbqqICBAEsUEciBwQFN8roz7Vlmzrnx+TQtyu/AgCvWpaUtKsqJLBDQCitnNFC21sVY7NyRTmqaCCQdEZAoI20ewArBY+k/XDAHs68xbH7y4d37NPu8J2gOGxFD4w9ycdpxVX4D8U8nFScj/2Ky3C9YiH2Kq7FPYo3cd9Vul8c/kpxAb6guPCKXq6CI1fmr3SXsfDMwxcNO3r/MbI11X9B+KmZZI3wdKiicOkHPvqD2H6A0y2iT+Tt2LNTYOvXnb61O4GAF5hc26eBQNsLGtEJtiSuAo/hfOZxlISjVFSYW31HkAK+g3fz2q96CEr8wtZprZBsKdFF4t8PWIhUvaHBHvzrzASsJEhl41iKi0e4ELJmuQZdCqqQkGUb10YNnJdB/W41ioBqSIsrC/1+K2uCOYqEAmsDa/UfRfMmeN9MbdbhDdfQHgnNwem3hI8QWOCfUskP6gfA5QaX1YgbYOCyaPkV32rQ+KVH+JrG0aLJ8oHN2wf4snKZXD+Ua0vcddCEDjgllybOs2wzziJL9DWUVYFIXQ6ZzKF7MszKKE7Je8Pqb3Y4sEwrdwh7I9RjVnzzBX3R1vGaGxYLOIKGIxwu8yTUPdS9xyYTxHVvJouoarcnnJF4X2Cb94B9t3i8AH6+HnA4QM7PHjuyL/djw+8NSO6JkV2PghCe4v+zPnK9pvIh4ED+UOBRxmdDJKyYEpsdgiGB3JcJHttDj6n2uQt/zVOWnJdKzvaxwD5o8G3SDv+XBfbJ9nwI7b1qDWEI160eEHJg6gMyEwYwKsDUr3xuu0MXcUI1X6OxBIsj5zEMMu8JQybTQ1ElzaZjXCSj1JtD0ZeV56MlIcqUCYNuVXwe8x8jRArKrNXal+dxMYqX7wgGR4xhMFTCrUEhxA9zbmshB0DLE3eR4M8ccgtMzbyFBXW0Cvzc1PWuBgtHEz9mZCwxXvcdQzEh44R/baok+5yWcP1P4N8I8MRkd6lw/bur2RM+qy7o3i8qYbsRa4aXkBDTC2xIxHkwEl+TUMOolDbuqVPw+zFA6rkA0M/WWN9RQktGxyclYTJdT7ZBIv7Ixy+jEnW7IuWin89jBwyXYV6ZVv7VcBR8ymzWj6xu0BV8yotNrhYFWjBSvAzIHCFTotSJfLjxEchM/V57T+wbEgmRAggTTIvqHP8xhNCQYNMhLDUiAqwNHqaAn68wWoYFw3e54J/cfBLU/vqD/sbYB+7lr3xxola12HDXtz+B2O8H/QadHeDowULNG1d+EHlMvTBv1i2eGJMUQrvBJP+gJ8YIaWKAy96bywykWYcwxCwmwwH18PgaBgL36InfWbKtwNbbwz7enjNm9eHZy/MogYQ8sXa3JqMoYXCQgietJRIBG5eX6IBoPk4lJQe3CqgSR1vVPULjkpl3D1QyJQ9TGDauJITvoD2Xm5fkS/6eBMQP0OwL6LEWO3QW1P9mCyZP1ihNFwU0sIUQ8lQCk2r1WHCekId85/bY39rPvllB301zQR9VfRsiLQ+EkCMH6phPZDvZoElvdfRk2hVN5xFgUwPzhTE2pXOR74GHfoN2UVhMYBq9LiOcQXePqK+sdCfkbAwc8kXJe6wgmmfQRqCfMG2jF2DPSCtIS0PXqnbBu6nXTFvxl13Q2+eiCB6b1vTuEUHjlTIvrUUkNL5dvqdoYfmAv9KSYzbWDoIP5Jt2HvTdy2EHH9gVWnnt4m33QbD1EKXE2s1L/ec6cLCzTVmo5ncddikSou01uEdrNOh7S9SBnqzeD8HdP/eTINcnzzECSz9sMYWJtIU+uSRcX6CLL/vnULAaRyWK3vtNiZk+53c1N4BA2LTbZ1kdHsgXJb8tJa5m4LlcKkWOOq/Z07ovI5qdd1QRlb3q9cVYi+DXj3sw4hBCLbVdlILLcEa1ek1Mn7McZPL5WBDSVxO74plKCQWICpNcNag25cJ8GGSgRqp/ni8QjQ1cN7LSmEG69+yDd4NQkU0MpKqLXTqQiI8+8Ml7DFLeqRkuMC+ZPzAMsSHh/Ne/fIz2LLo8VnFuHNZu2Rrlm9LGekrqx3DBEICt6jEUE155InGN/h0IVv//6a73E2o3tAghLYH8Kwi7ZMmUMoN2NtE0rf9U0yuoetXOUEuVYhe1DDWbeX3vgmr5T+W5aqfskyKrT7+hUOaDATtgIP6AKOujH5XIkkbjsBrVnj95XmLI/RGIT+7vuz6Pbg+KgQYJQdjJu3D432P6LC8KXl4QFrBD8TKd4KQY6EkwOgZRtD7jgAODDG5UGHmbQrOPHRxZXvPwMm/aQ0vLytB6N6JCMTUeUxcmIO2k27f8/O6q/1KykyOPaA+fxz5eI4todCNKTne8vX/ZNDYLkEKk6WVrCAu3l8I6Lz40Px4/g5AEjJjboW7Noqbzbwe+PKQMiEMr1lCoLg+k4YW/UR8vg8LPDMZ8zzH/Ikfvoc+9pPAIN3AhlyDGwu95tqjCKKGXjgo/I9AgQMPrm/WazrJz/Gp//zX/sWIaExFKdgh/mg/t9ek0hRJq6thSJUGSnLC22kDJDTQ2GasGnEPBp7xrW+UnlZyT0HrQ5SFzFYqre2uCRCbltj3gzLuwQDxhO0fYriuVIj5zrBjP+EV7LuIv4p4QcEEJpThLOfwZA/9vDEVnY0alkfD0qrCZ/5foNDBWPUeDHz5dzfDuezwat9TNQB2K4M7adWBpSq2eUEqkT8a1kTRysTFCFCFbx1Ol/kHbpl7w5CPp/TDGK0Q/jc7bd2Ngn2yqJAP2HseHNjWioc1eFc97EL5OBmNdueBGgQ0SHBuRKIg2q4VcZrnnjcREN0rCgsK7RdtKBKJ44Q41hyfOeQgQ1z1g939l+D3WAsDAihxuMRZlG9C429q0d7AzTwu+vUP0KYToE7e2uhY2XiT287x9FkDjn0PLCj+pf1ZGApsCo7w4bMNnrafsjCn92Ftv1EabX+8QQ4zbjn0nfldPl2t2vFCOEvVvH4ZkIeh+p4grNdIvFrb+63I3rjybjQJRd1zxLrnr1HXRTzvBtCZNmwOxyCGdTjDnCbmN22GSLNK6vkKLHXfjxEa2/oy5w+JlpJajDse2Ao/XoOp1h8NjFjlxGjxoRlVcDBCfUEIZxVvRz8ePCj+DGp0U6XiDk65G5+ObY017EFlOKUC3lFPpHpEq95WQ0aCZ1pAdtvR548JLJ4WygnUqLRZqWFSzyK8aUZYXKGzIofwK9JZClsjrh1VoucAZQvQIkcROQHLtkaqwqnGw+sHFbU0vmcuGdaU0doouNrBAYBnx3YiM6ag1yrSuXnLUV6j516UzR9j7Mquew6XLFeWe0OyzbLUeNz+LX3ME334WafpqTPrM1YpZHNbKxLXquCmE0WTZfllcB2gxWzhVzATZFoNgri09g7Crqy10XSyHjle350cfKi6XR0IlFev6NPDNEqfv5X8BXJSMZ8KHb182ObeKNE97OsuiQNCC7BkkjJoxnCH30ZxJEI+ByHTnXBMsQdwqDqGEv37rVJ5tNDRoXJogpV9+rDvO9AAIL1gkIOnHFSPj+mexRf/9586yPEJEvKHaEHmGz4+e6VZDFf5bn5r4MgADQOD59/OPD00vd/+dS3EBgE9+O/U8NfLq/1ZGa9HH/Cdt0PACpOAfNOqzPurg/k8xBlx8D+JsltR8VQXkTpyvl2wbcsdVMTVLnpLoa6DmMTXuovN3nQNUi7tNi03iLh26ux49HVoSnaAhNxEPWTD2EpYriC0ZaSw5uPHIFuepakWisPDvkBbUqIQ2ksRwyShimu1Z9RTvNW3lYZyzcMdVM7c+6bewZzEKic92KHluybyMu0Y7xUuyWetqX83jlPWznC9bDBZepNivJqyTGrW7l0nwtaZ0WETMegw7FGsc3kVhWMJu6damIpgpnAkXwiMbFx63mbVjLdatZmFmdo69b61TUCzutT2mEXHfHdS0YkTpsscVA6halYuLd7DvGa4fxfuOEQoase8qLF7LSSrFVIxjFh5/EY7OdjjL5nNE5hL2rHBI9Jm8Em8oHF0KczwJUY9q9FPFLlZFD9VDdzqSecMbuAy5sAWqIQ9qtXyI5uNoDbZEuDUMRKUClGimXTJtTkerRTf1UAcPoabx+hpzIq9yASBFNDQJgMvlONbaPGy3H6YEtITbZ57DCnjbstXXoXilj80XSMRppRGjVrtIqCyPZzmMj3CJXX88fIdOn6WZAdgOzJuAvokc2Jui5a1apuXmxytpeamEPskXCp9qpEFJJVWyvq4qCqn3ht3TnFbRMnseKKxl4YpYJXyFt3A9uAXuXBXl9kO1TYPB9PkCZiOIXrlVzv2XC9tGq2L+uoCpp+TJ3qzpQfPblXwqaMVsKHKuLXFk9cdUXdTU1Jqqb6VYU+3Y2IzxNatuBmGTQwvHX8VMpm3wuXwmY5g/mVp+fXdPZhRu6P5utJMW97pSXe3h/sT6fP7rtKrbIBC27X7t47UqoHPnhIKt9uRgNoG3E9TD8cPsh7VXQBNACPje8r9JKnHAA2HW2aO6oLa9Kd3OZdYdEKPUKAACsEECHsKmrXsC+IpYtx6/3uN+w1dkormlGhen2f4BTwDuA5wMuBfwauB786SCuMJqyHagshnAb+whtI89TDlOtnneF3tuLKC0FO7fP9MvcgKBsQYFPgUWdJGc9NyBEXcjZh6AF6QgXGOIX1qMEJYQozg2LUYzzxdjcTEWYzN3Ugiz0IebIYJAEcQmhsqJOUZpiU0KExdwWmcOJ3+T18eck1oQmxIqIOaSXCLmGsYlNjUaK6Yhi2PSBPgw877ALfw42T5vn/N1fzta2m7H30o6YMaK8XHXL3XsIk/qW3I6il6VmClTKfGxMrynOryGSowmXtm0dcN9m4eVT81e236tgV5r/YDd8GQlmNXr9rrXWr7NdCCGnzCTRr9+btap948/uLcet1oz/CK8gfqub7imNev21VqCl9FHLVWDUhQ0hUpi+H3rHz6+vvf0at1+rdmFfskkqovPfdSdBgrZ6RtJSdTLsg2JdyPLNiFZOnbiMVVJFtuExr20RWF4MxZmyX5y5ZjY3/GVYoE33b+lUF28sK23UDupsQaQMVaodEqjW/5oRU8aNPRBwdhQkFjll3GJwNZOq2np6kS9Rvv0gB1Xs33SuekIeexpR3s1u93O5vrUyMuXhjZ/I37SBeSmgm5oyc/hjYXc6G97PXDP/Y415qe/lY2dA2r0hcl5CstfpiugeJrfYIU6PfTI2vxb9dNRkfuKi/4qpVSi6SVz95+LCaCgYWD7vWr4Zltng4giWx8BsUgblfQAcl5R6uBtkyE+UfP1P5tFiY6GjoHZHH6xsPMvCqe5noiPW6wYcQ1wyTQPlwjFtuDkC6RbSDu0SELiBoSd9wDbbHdIoi22liKVRFqnLS49mSVlyGxpWbLbY1lSsuSS+pS8HZRUNQEoXSBtSEFCQa+lYBd8aeJPuhA65b76hCNVrp1RmaAoqaj/u20X0wOnhaC9lDoVKv6s/3YVNc0/wh1f3wiA7QwnVzsAElXOQi3/2v9/ihq16tSLx0M7bJS36RHwkBBqhdH9JCklLaNBY2yXGVvqgxmkvnLGrppoaOmqdRYfS43/u+lGeoYMGPmEZf9k5W916h1z3EhGHMI3nc7ZZ+Up5fpToI2dg5OrMp5m0u9+6TKopTiguD5wu6U1wMvXpYYhAlBBGFxIGNEUIXbyvP4+J3l8gbFQJCbq1acf159myfTUM8+99KqSVCZXRDWkJED6myErqqYbpmU7rufzc3n6FM0XMEKRWCKNLqxcoVSpNVrWwNDI2MTUzNzC0sraRrLoBu/zsmctHFtq2SlRH7EJthxkyhJUkcjgyGsoWa6oJZD4MgSbYcifH4cydpJQbiZKyELZlf2fg4DnnO6qGj7/+6ouJSFCeL5jnR6BVz0rOT5CxHK3yBuz4VBouUeCbwdeQwibbpI2gBCZ71khND9JbpDIb4ddPjTNX8BzwQdvfww+lnwkBhPweYidn4+A6wk5cGJRCkKE8Hzihvz5QbINAV/XfX6oLWvw+8WvFa1XqI7xVwpDaRyJCeQg8D2vsZMzyJg8fQh+dFyOStjGGRyY7wXJO+rzRPaWSGFdiiMpx266NCGvhGzI3mAA6ER10vNBjkqxImzzYzeZo3KDs8C15Q06d3YV42DXN54eyi7gOqA9U+RIGztZm3J65pnMjvwSHuiXiMEgO2bp8SgA46CYiFixrxHtXdN0A+mmGMrE4zEtguOxJkfzyLqRdNN5OIMDzkdY9uRgiQhcftpHzh11YBfw67O44NeAi9o44kdfKSh0Xf4KqOdFzGN6SFsP9IQ+G2WPchplv25puxHW+UiCStT7ogvu7lhbqRDVLiacKeFsT6MrZUWZiAoXJQ8e62s9UgpNM6YSkWKo3W5r/me6N+XOtEJtr57V6oPltLYwA6EQNq81YFuEQ/4Wm3PXzIpptkYWUEuOSWOSeiFlTtDoo8Svu934LOxpa21kFbwX59qcBh+Zn+RImvyj5kNJLxXJvJ8d8VrfkJKFVrRJ05tK/aXanhx8bT7aVauoJ81roNL64KfMd8Sj0Rtfge+SohT0+ShTwFVwhK1KW45QTKfoZNrjU4poyxfT6QTmZlc+GpmMrLLWuHv26eonGfHyrlIqK1kXkTsd6eStxRnuKdSRqBapI1Ffpa5MEY1iOvVVugLU/LBXx6A1CuG6/RzGbhBarFJiuBQvbvkwWJIFSwAUwqV4kWPD5BEGsHNgl0kYMExsoHumATSWF28A8Zt8m6AE9w5Ar/3gsARAIUyvsQEQsFPAAABsAIDuAWgAbwDxK3AV1Mg9NsmPCvFmjM39+cmxXPF4EnoWKsaVX2nwQhAzQ84QJtFHLOZ9XyEdIPQUZJ7mEWV4FzjWEB2HUia6pvsjX/c196Wa/Kcqdtsqql2UbjmGZ4HCzYgVhidjl1XUbVlr3XLXgfYNROYdDBJHYa13NSw58stFXNu+N+t5WGAU1doYgvhRsJmWa/0f4Ys7r6o1nW1LF8pCcxJM0H9YbRjb5gVb1go9Y9/SxF08sf0p8GbuymWEe+zrfrqQc8Rnc8lptIpSPWmoLslM6sWzOZaLyLaco1nYjntDeIpj5e/663Cvs+oZM4Z+HNgvV5U0ktw/VU411pkVh8q/32PH77H8z9qVLwAAAA==) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,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) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}:root,:host{--pal-a: hsl(220 4% 46%);--pal-b: hsl(220 5% 34%);--pal-deep: hsl(220 6% 12%);--spin: 0deg;--arm: 89deg;--lift: 1;--progress: 0;--disc: min(74vh, 44vw);--R: calc(var(--disc) / 2);--sleeve: calc(var(--disc) * 1.04);--overlap: calc(var(--disc) * .215);--ink: hsl(0 0% 100%);--ink-dim: hsl(0 0% 100% / .62);--ink-faint: hsl(0 0% 100% / .32);--panel-w: min(400px, 88vw);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-soft: cubic-bezier(.4, 0, .2, 1);color-scheme:dark;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-synthesis-weight:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}html,body,#root{height:100%}body{background:#0b0c0e;color:var(--ink);overflow:hidden;overscroll-behavior:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}.app{position:fixed;inset:0;display:grid;place-items:center;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);isolation:isolate}.backdrop{position:absolute;inset:0;z-index:0;background:var(--pal-deep);transition:background-color 1.4s var(--ease-soft)}.backdrop:before,.backdrop:after{content:"";position:absolute;inset:-20%;transition:background 1.4s var(--ease-soft),opacity 1.4s var(--ease-soft)}.backdrop:before{background:radial-gradient(60% 70% at 22% 30%,var(--pal-a) 0%,transparent 62%),radial-gradient(55% 65% at 82% 78%,var(--pal-b) 0%,transparent 60%);opacity:.55;filter:blur(40px)}.backdrop:after{background:radial-gradient(75% 75% at 50% 50%,transparent 30%,hsl(0 0% 0% / .55) 100%)}.app[data-bg=subtle] .backdrop:before{opacity:.22}.app[data-bg=neutral] .backdrop{background:linear-gradient(212deg,#b2b2b2,#9a9a9b 45%,#7e7f81)}.app[data-bg=neutral] .backdrop:before,.app[data-bg=neutral] .backdrop:after{opacity:0}.app[data-bg=dark] .backdrop{background:#0c0c0e}.app[data-bg=dark] .backdrop:before{opacity:.12}.stage{position:relative;z-index:1;display:grid;place-items:center;width:100%;height:100%;transition:transform .42s var(--ease-out)}.app[data-panel=true] .stage{transform:translate(calc(-.5 * var(--panel-w)))}@media(max-width:900px){.app[data-panel=true] .stage{transform:none}}.deck{position:relative;width:calc(var(--sleeve) + var(--disc) - var(--overlap));height:var(--sleeve);overflow:visible;transform:translateY(-1.5vh);touch-action:none}.sleeve{position:absolute;top:50%;left:0;width:var(--sleeve);height:var(--sleeve);transform:translateY(-50%) rotate(-3deg);transition:transform .62s var(--ease-out),filter .62s var(--ease-out);z-index:1;cursor:pointer}.sleeve__art{position:absolute;inset:0;object-fit:cover;width:100%;height:100%;border-radius:calc(var(--disc) * .007);background:#2c2d30;box-shadow:0 calc(var(--disc) * .004) calc(var(--disc) * .01) #0000002e,0 calc(var(--disc) * .03) calc(var(--disc) * .07) #00000047}.sleeve__edge{position:absolute;inset:0;pointer-events:none;background:linear-gradient(100deg,hsl(0 0% 0% / .16) 0%,transparent 14%,transparent 92%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 100% / .5) 100%)}.deck[data-sleeve=front] .sleeve{transform:translateY(-50%) translate(calc(var(--disc) * .2)) scale(1.03);z-index:4}.sleeve__placeholder{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(150deg,#3a3c41,#212327);color:var(--ink-faint);font-size:calc(var(--disc) * .07);letter-spacing:.16em;text-transform:uppercase}.disc{position:absolute;top:50%;right:0;width:var(--disc);height:var(--disc);transform:translateY(-50%);border-radius:50%;z-index:2;cursor:pointer;filter:drop-shadow(0 calc(var(--disc) * .028) calc(var(--disc) * .055) hsl(0 0% 0% / .3));transition:transform .62s var(--ease-out)}.deck[data-sleeve=front] .disc{transform:translateY(-50%) translate(calc(var(--disc) * .06))}.disc__layer{position:absolute;inset:0;border-radius:50%;pointer-events:none}.app[data-vinyl=clear] .disc__material{background:radial-gradient(circle at 34% 24%,#fff,#f4f4f3 34%,#e7e7e5 62%,#d8d8d6 84%,#cfcfcd)}.app[data-vinyl=glass] .disc__material{background:radial-gradient(circle at 34% 24%,#fff6,#ffffff45 46%,#ffffff54);-webkit-backdrop-filter:blur(5px) saturate(.25) brightness(1.18);backdrop-filter:blur(5px) saturate(.25) brightness(1.18)}.app[data-vinyl=glass] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff29,#00000008,#ffffff29 3.4px)}.app[data-vinyl=glass] .disc__light{background:linear-gradient(198deg,#ffffff57,#ffffff1a 20%,#fff0 38%,#0000000d 58%,#0000001f 82%,#00000029)}.app[data-vinyl=black] .disc__material{background:radial-gradient(circle at 34% 24%,#2a2c31,#191b1f 38%,#101216 68%,#0a0b0e)}.app[data-vinyl=tinted] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--pal-a) 30%,#ffffff),color-mix(in oklab,var(--pal-a) 62%,#ffffff) 46%,color-mix(in oklab,var(--pal-a) 88%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__material,.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,#fdfcfa,#f3efe9 46%,#e2ddd5)}.app[data-vinyl=marble] .disc__pattern:after,.app[data-vinyl=splatter] .disc__pattern:after{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 78%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 52%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 82%,#000000) 100%);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:before,.app[data-vinyl=splatter] .disc__pattern:before{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#000000);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:after{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='4' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0.4 0.8 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.014' numOctaves='3' seed='5' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0.2 0.6 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='4' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0.4 0.8 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.014' numOctaves='3' seed='5' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0.2 0.6 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");-webkit-mask-composite:source-in;mask-composite:intersect;opacity:.92}.app[data-vinyl=marble] .disc__pattern:before{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='4' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.5 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='4' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.5 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.5}.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#ffffff),color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 46%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 92%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=splatter] .disc__pattern:after{background:#f7f3ec;-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");-webkit-mask-composite:source-over;mask-composite:add;opacity:.9}.app[data-vinyl=splatter] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 45%,#000000);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.75}.app[data-vinyl=marble] .disc__grooves,.app[data-vinyl=splatter] .disc__grooves{opacity:.62}.disc__light{background:linear-gradient(198deg,#ffffff8c,#ffffff2e 18%,#fff0 34%,#0000000f 52%,#00000024 72%,#0000002e 90%,#00000038)}.app[data-vinyl=black] .disc__light{background:linear-gradient(196deg,#ffffff29,#ffffff0d 26%,#fff0 46%,#0000001f 78%,#0003)}.disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff38,#0000000e,#ffffff38 3.4px);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%)}.app[data-vinyl=black] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff1a,#00000073,#ffffff1a 3.4px)}.disc__aniso{background:conic-gradient(from 0deg,hsl(0 0% 100% / .075) 0deg,transparent 44deg,hsl(0 0% 0% / .05) 96deg,transparent 140deg,hsl(0 0% 100% / .06) 187deg,transparent 232deg,hsl(0 0% 0% / .038) 283deg,transparent 320deg,hsl(0 0% 100% / .075) 360deg);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%)}.disc__flecks{--fleck: hsl(0 0% 0% / .075);background:radial-gradient(ellipse 2.6% .9% at 71% 33%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.9% .7% at 30% 64%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.3% .8% at 57% 79%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.6% .6% at 25% 38%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.1% .8% at 79% 59%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.4% .6% at 46% 18%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.8% .7% at 63% 12%,var(--fleck),transparent 70%);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%)}.app[data-vinyl=black] .disc__flecks{--fleck: hsl(0 0% 100% / .13)}.app[data-vinyl=glass] .disc__flecks{--fleck: hsl(0 0% 100% / .16)}.disc__gloss{background:linear-gradient(112deg,transparent 24%,hsl(0 0% 100% / .09) 37%,hsl(0 0% 100% / .24) 44.5%,hsl(0 0% 100% / .05) 52%,transparent 66%);mix-blend-mode:screen;-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%)}.app[data-vinyl=black] .disc__gloss{opacity:.55}.disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .05) 95%,hsl(0 0% 100% / .16) 98%,hsl(0 0% 0% / .08) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .09) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff80,inset 0 2px 3px #ffffff73,inset 0 -2px 4px #0000001a}.app[data-vinyl=black] .disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .3) 95%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 0% / .35) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .07) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff29,inset 0 2px 3px #ffffff2e,inset 0 -2px 4px #0006}.disc__spin{position:absolute;inset:0;border-radius:50%;transform:rotate(var(--spin));will-change:transform;backface-visibility:hidden}.label{position:absolute;top:50%;left:50%;width:46.4%;height:46.4%;transform:translate(-50%,-50%);border-radius:50%;overflow:hidden;background:#f1f0ed;box-shadow:0 0 0 1px #3b3835d9}.label__svg{display:block;width:100%;height:100%}.label__title{font-weight:800;letter-spacing:-.028em}.label__artist{font-weight:650;letter-spacing:-.012em}.label__micro{font-family:Iowan Old Style,Palatino,Palatino Linotype,Georgia,Times New Roman,serif;font-weight:400;letter-spacing:.005em}.tonearm{position:absolute;top:calc(50% - .7392 * var(--R));right:calc(.0674 * var(--R));width:0;height:0;z-index:5;pointer-events:none}.tonearm-base{position:absolute;top:calc(50% - .7392 * var(--R) - .3655 * var(--R));right:calc(.0674 * var(--R) - .2225 * var(--R));width:calc(var(--R) * .425);height:calc(var(--R) * .641);border-radius:calc(var(--R) * .2125);transform:rotate(-6deg);z-index:0;pointer-events:none;background:#ffffff21;box-shadow:inset 0 0 0 1px #ffffff1f,0 calc(var(--R) * .01) calc(var(--R) * .03) #0000001a}.tonearm__arm{position:absolute;inset:0;transform:rotate(var(--arm));transform-origin:0 0;will-change:transform}.tonearm__svg{position:absolute;left:calc(var(--R) * -.42);top:calc(var(--R) * -.4);width:calc(var(--R) * 2.17);height:calc(var(--R) * .82);overflow:visible;filter:drop-shadow(calc(var(--R) * .006 * (1 + 2 * var(--lift))) calc(var(--R) * .016 * (1 + 2.4 * var(--lift))) calc(var(--R) * .012 * (1 + 2.2 * var(--lift))) hsl(0 0% 0% / .34));transform:scale(calc(1 + .014 * var(--lift)));transform-origin:19.35% 48.8%}.tonearm__grip{position:absolute;top:calc(var(--R) * -.22);left:calc(var(--R) * .86);width:calc(var(--R) * .82);height:calc(var(--R) * .46);pointer-events:auto;touch-action:none;cursor:grab;border-radius:calc(var(--R) * .22)}.tonearm[data-dragging=true] .tonearm__grip{cursor:grabbing}.tonearm[data-dragging=true] .tonearm__svg{filter:drop-shadow(0 0 calc(var(--R) * .05) hsl(0 0% 100% / .35))}.hud{position:absolute;inset:0;z-index:6;display:grid;grid-template-rows:auto 1fr;padding:clamp(14px,2.4vh,30px) clamp(18px,3vw,44px);pointer-events:none}.hud__top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;transition:opacity .45s var(--ease-soft)}.hud__bottom{align-self:end;display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:clamp(12px,2vw,32px)}.hud__tools,.controls,.volume,.hud .iconbtn{pointer-events:auto}.hud__name{padding-left:4px;font-size:clamp(11px,1.4vh,14px);font-weight:550;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint)}.hud__tools,.hud__left{display:flex;align-items:center;gap:2px}.iconbtn--small{width:clamp(30px,4vh,40px);height:clamp(30px,4vh,40px);color:var(--ink-dim)}.iconbtn--small:hover{color:var(--ink)}.iconbtn--small svg{width:52%;height:52%}.badge-one{position:absolute;transform:translateY(.5px);font-size:9px;font-weight:700;line-height:1;pointer-events:none}.iconbtn{position:relative}.track{min-width:0;display:grid;gap:2px}.track__title{font-size:clamp(15px,1.9vh,22px);font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.track__artist{font-size:clamp(12px,1.5vh,17px);color:var(--ink-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.times{justify-self:end;display:flex;align-items:center;gap:10px;font-size:clamp(11px,1.4vh,15px);font-variant-numeric:tabular-nums;color:var(--ink-dim)}.times__bar{position:relative;width:clamp(80px,12vw,190px);height:3px;border-radius:2px;background:#ffffff2e;overflow:hidden}.times__fill{position:absolute;inset:0;transform-origin:left center;transform:scaleX(var(--progress));background:#fffc}.controls{display:flex;align-items:center;gap:clamp(10px,1.6vw,22px);padding:8px 12px;border-radius:999px;background:#00000038;-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);box-shadow:inset 0 0 0 1px #ffffff1a;transition:opacity .45s var(--ease-soft),transform .45s var(--ease-out)}.iconbtn{display:grid;place-items:center;width:clamp(38px,5.2vh,52px);height:clamp(38px,5.2vh,52px);border-radius:50%;color:var(--ink);transition:background .18s var(--ease-soft),transform .18s var(--ease-out),opacity .2s var(--ease-soft)}.iconbtn:hover{background:#ffffff1f}.iconbtn:active{transform:scale(.9)}.iconbtn[aria-pressed=true]{color:var(--pal-a);background:#ffffff24}.iconbtn--play{width:clamp(46px,6.6vh,66px);height:clamp(46px,6.6vh,66px);background:#ffffff24}.iconbtn:disabled{opacity:.28;cursor:default}.iconbtn svg{width:45%;height:45%;fill:currentColor}.iconbtn--play svg{width:42%;height:42%}.volume{display:flex;align-items:center;gap:10px;padding:0 6px}.volume input[type=range]{width:clamp(70px,9vw,130px);height:22px;appearance:none;background:none;cursor:pointer}.volume input[type=range]::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-webkit-slider-thumb{appearance:none;width:13px;height:13px;margin-top:-5px;border-radius:50%;background:var(--ink);box-shadow:0 1px 4px #0006}.volume input[type=range]::-moz-range-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-moz-range-thumb{width:13px;height:13px;border:0;border-radius:50%;background:var(--ink)}.hud[data-quiet=true] .hud__top,.hud[data-quiet=true] .controls{opacity:0;pointer-events:none}.hud[data-quiet=true] .controls{transform:translateY(8px)}.lyrics{position:absolute;inset:0;z-index:7;display:grid;place-items:center;padding:2vh clamp(24px,6vw,90px) 22vh;background:#0006;-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);animation:fade-in .35s var(--ease-out)}.lyrics__scroll{width:min(760px,100%);height:100%;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent);mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent)}.lyrics__inner{display:grid;gap:clamp(10px,1.6vh,20px);transition:transform .55s var(--ease-out);padding:40vh 0}.lyrics__line{cursor:pointer;font-size:clamp(19px,3.1vh,34px);font-weight:600;line-height:1.24;letter-spacing:-.015em;text-align:center;color:#ffffff4d;transition:color .4s var(--ease-soft),transform .4s var(--ease-out);transform-origin:center;text-wrap:balance}.lyrics__line[data-active=true]{color:var(--ink)}.lyrics__line[data-past=true]{color:#ffffff29}.lyrics__empty{color:var(--ink-dim);font-size:clamp(14px,2vh,19px);text-align:center}.rest{position:absolute;inset:0;z-index:8;display:grid;place-content:center;justify-items:center;gap:clamp(10px,2vh,20px);background:#0b0c0eb8;-webkit-backdrop-filter:blur(30px) saturate(.7);backdrop-filter:blur(30px) saturate(.7);animation:fade-in 1.4s var(--ease-soft);cursor:pointer}.rest__clock{font-size:clamp(64px,17vh,170px);font-weight:200;line-height:1;letter-spacing:-.035em;font-variant-numeric:tabular-nums;color:#ffffffb8}.rest__date{font-size:clamp(13px,1.9vh,18px);font-weight:450;letter-spacing:.16em;text-transform:uppercase;color:#ffffff57}.rest__hint{position:absolute;bottom:7vh;left:50%;transform:translate(-50%);color:#ffffff38;font-size:12px;letter-spacing:.1em;text-transform:uppercase}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.library{position:absolute;inset:0;z-index:7;color:var(--ink);background:#1214166b;-webkit-backdrop-filter:blur(72px) saturate(1.35);backdrop-filter:blur(72px) saturate(1.35);animation:fade-in .32s var(--ease-out)}.library__head{position:absolute;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;gap:14px;padding:clamp(14px,2.4vh,26px) clamp(18px,3vw,40px);pointer-events:none}.library__head>*{pointer-events:auto}.library__head h1{font-size:clamp(15px,2vh,20px);font-weight:600;letter-spacing:-.01em}.library__count{margin-left:auto;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint)}.library__error{margin:0 clamp(18px,3vw,40px);padding:11px 14px;border-radius:10px;font-size:13px;background:#b8352e2e;color:#fbb5b1}.library__chosen{display:grid;justify-items:center;gap:10px;animation:fade-in .3s var(--ease-out)}.library__chosenText{display:flex;align-items:baseline;gap:9px;font-size:clamp(14px,2vh,18px)}.library__chosenText span{color:var(--ink-dim)}.crate{position:absolute;inset:0;--cover: min(84vh, 46vw);--thick: calc(var(--cover) * .032);--radius: calc(var(--cover) * var(--radius-k));overflow:hidden;perspective:2400px;perspective-origin:50% 46%;cursor:grab;touch-action:none}.crate:active{cursor:grabbing}.crate:after{content:"";position:absolute;left:50%;bottom:6%;width:58%;height:22%;transform:translate(-50%);pointer-events:none;background:radial-gradient(50% 60% at 50% 100%,hsl(0 0% 100% / .16),transparent 70%)}.crate__item{position:absolute;top:calc(50% - var(--cover) / 2);left:calc(50% - var(--cover) / 2);width:var(--cover);height:var(--cover);transform-style:preserve-3d;cursor:pointer;will-change:transform}.crate__face,.crate__spine,.crate__opening{position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.crate__face{inset:0;overflow:hidden;box-shadow:0 calc(var(--cover) * .02) calc(var(--cover) * .05) #0000004d}.crate__face--front{transform:translateZ(calc(var(--thick) / 2))}.crate__face--back{transform:rotateY(180deg) translateZ(calc(var(--thick) / 2))}.crate__spine,.crate__opening{top:0;left:calc(50% - var(--thick) / 2);width:var(--thick);height:100%}.crate__spine{transform:rotateY(-90deg) translateZ(calc(var(--cover) / 2))}.crate__opening{transform:rotateY(90deg) translateZ(calc(var(--cover) / 2));background-image:var(--art);background-size:auto 100%;background-position:right center;background-color:#e9e9e6;box-shadow:inset 0 0 0 1px #0000001f}.crate__opening:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0000004d,#ffffff59 42%,#00000038)}.crate__spineFace{position:absolute;inset:0;background:linear-gradient(100deg,var(--spine-a, hsl(220 5% 34%)),var(--spine-b, hsl(220 6% 12%)));box-shadow:inset 0 0 0 1px #ffffff24}.crate__spineFace:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#ffffff29,#0000001a 45%,#ffffff1f)}.crate__art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#d8d8d5}.crate__art--empty{background:linear-gradient(150deg,#d9d9d6,#b6b6b2)}.crate__shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,#0000,#0000000f 55%,#00000026)}.crate__depth{position:absolute;inset:0;pointer-events:none;background:#000;opacity:0}.crate__label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:.6em;writing-mode:vertical-rl;transform:rotate(180deg);padding:8% 0;overflow:hidden;white-space:nowrap;pointer-events:none;font-size:calc(var(--thick) * .56);letter-spacing:.015em;color:#fff;text-shadow:0 1px 2px hsl(0 0% 0% / .6);-webkit-mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent)}.crate__label[data-ink=dark]{color:#fff}.crate__label b{font-weight:700}.crate__label span{font-weight:450;opacity:.78}.flyer{position:absolute;z-index:40;pointer-events:none;background-size:cover;background-position:center;box-shadow:0 18px 60px #00000080;will-change:transform}.setup{position:absolute;inset:0;z-index:9;display:grid;place-items:center;padding:4vh 4vw;background:#0e0f11db;-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);overflow-y:auto;animation:fade-in .3s var(--ease-out)}.panel{width:min(560px,100%);display:grid;gap:22px;padding:clamp(22px,4vh,36px);border-radius:22px;background:#1a1b1e;box-shadow:0 30px 80px #0009,inset 0 0 0 1px #ffffff12}.panel__head{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.panel h1{font-size:21px;font-weight:650;letter-spacing:-.02em}.panel h2{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint)}.field{display:grid;gap:7px}.field label{font-size:13px;color:var(--ink-dim)}.field input[type=text],.field input[type=password],.field select{width:100%;padding:11px 13px;font-size:15px;color:var(--ink);background:#26282c;border:1px solid hsl(0 0% 100% / .09);border-radius:11px;outline:none;transition:border-color .18s var(--ease-soft)}.field input:focus,.field select:focus{border-color:#ffffff57}.field small{font-size:12px;line-height:1.45;color:var(--ink-faint)}.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:3px;background:#26282c;border-radius:11px}.segmented button{padding:9px 6px;font-size:13px;border-radius:8px;color:var(--ink-dim);transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.segmented button[aria-pressed=true]{background:#ffffff21;color:var(--ink)}.switch{display:flex;align-items:center;justify-content:space-between;gap:14px;font-size:14px;cursor:pointer}.switch input{appearance:none;position:relative;width:46px;height:28px;flex:none;border-radius:999px;background:#3e4146;transition:background .22s var(--ease-soft);cursor:pointer}.switch input:after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .22s var(--ease-out)}.switch input:checked{background:#2e9e5d}.switch input:checked:after{transform:translate(18px)}.actions{position:sticky;bottom:calc(-1*clamp(22px,4vh,36px));z-index:1;display:flex;gap:10px;justify-content:flex-end;margin:0 calc(-1*clamp(22px,4vh,36px)) calc(-1*clamp(22px,4vh,36px));padding:16px clamp(22px,4vh,36px);background:#1a1b1e;border-top:1px solid hsl(0 0% 100% / .08);border-radius:0 0 22px 22px}.btn{padding:11px 20px;font-size:14px;font-weight:550;border-radius:11px;background:#ffffff1a;transition:background .18s var(--ease-soft)}.btn:hover{background:#ffffff2b}.btn--primary{background:#f5f5f5;color:#121416}.btn--primary:hover{background:#fff}.btn:disabled{opacity:.4;cursor:default}.note{padding:11px 13px;font-size:13px;line-height:1.5;border-radius:10px;background:#ffffff0d;color:var(--ink-dim)}.note--bad{background:#b8352e2e;color:#fbb5b1}.note--good{background:#33995e29;color:#adebc7}.status{position:absolute;top:calc(env(safe-area-inset-top) + 12px);left:50%;transform:translate(-50%);z-index:10;display:flex;align-items:center;gap:8px;padding:7px 15px;font-size:13px;border-radius:999px;background:#00000080;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:var(--ink-dim);animation:fade-in .3s var(--ease-out)}.status__dot{width:7px;height:7px;border-radius:50%;background:#f4ae34;animation:pulse 1.6s ease-in-out infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.25}}@media(orientation:portrait){:root{--disc: min(52vh, 84vw);--overlap: calc(var(--disc) * .34)}.deck{transform:translateY(-4vh)}}@media(prefers-reduced-motion:reduce){.lyrics__inner,.sleeve,.disc{transition-duration:.01ms}}.library__search{display:flex;align-items:center;gap:9px;min-width:0;flex:0 1 clamp(220px,34vw,420px);padding:9px 13px;background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px;transition:border-color .18s var(--ease-soft),background .18s var(--ease-soft)}.library__search:focus-within{background:#ffffff1c;border-color:#ffffff4d}.library__search svg{flex:none;width:16px;height:16px;color:var(--ink-faint)}.library__search input{flex:1;min-width:0;font-size:clamp(13px,1.7vh,15px);color:var(--ink);background:none;border:none;outline:none}.library__search input::placeholder{color:var(--ink-faint)}.library__search input::-webkit-search-cancel-button{display:none}.library__search button{flex:none;width:22px;height:22px;font-size:17px;line-height:1;color:var(--ink-dim);background:#ffffff1a;border:none;border-radius:50%;cursor:pointer}.hud__room{display:inline-flex;align-items:center;gap:2px;padding:4px 6px 4px 2px;background:none;border:none;border-radius:8px;cursor:pointer;pointer-events:auto;transition:background .18s var(--ease-soft)}.hud__room:hover{background:#ffffff12}.hud__chev{width:14px;height:14px;color:var(--ink-faint)}.sidepanel{position:fixed;top:0;right:0;bottom:0;z-index:60;width:var(--panel-w);display:flex;flex-direction:column;background:#121416b8;-webkit-backdrop-filter:blur(40px) saturate(1.3);backdrop-filter:blur(40px) saturate(1.3);border-left:1px solid hsl(0 0% 100% / .08);animation:slide-from-right .34s var(--ease-out)}@keyframes slide-from-right{0%{opacity:0;transform:translate(16px)}}.sidepanel__head{display:flex;align-items:center;gap:12px;padding:clamp(16px,2.6vh,26px) 20px 14px;border-bottom:1px solid hsl(0 0% 100% / .07)}.sidepanel__head h2{flex:1;font-size:14px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.sidepanel__error{margin:14px 20px 0;padding:10px 13px;font-size:13px;line-height:1.45;color:#f6b4ac;background:#a3352929;border-radius:10px}.sidepanel__empty{padding:26px 20px;font-size:14px;color:var(--ink-faint)}.sidepanel__list{flex:1;overflow-y:auto;padding:8px 12px 22px;list-style:none;overscroll-behavior:contain}.queue__item{border-radius:12px}.queue__pick{display:flex;align-items:center;gap:12px;width:100%;padding:9px 8px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.queue__pick:hover:not(:disabled){background:#ffffff12}.queue__pick:disabled{cursor:default;opacity:.5}.queue__art svg{width:20px;height:20px;color:#ffffffeb;opacity:0;transition:opacity .16s var(--ease-soft);filter:drop-shadow(0 1px 3px hsl(0 0% 0% / .6))}.queue__pick:hover:not(:disabled) .queue__art svg{opacity:1}.queue__item[data-state=past]{opacity:.4}.queue__item[data-state=now]{background:#ffffff14}.queue__art{flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:6px;background-color:#2a2d32;background-size:cover;background-position:center;box-shadow:0 1px 3px #0006}.sidepanel__text{flex:1;min-width:0;display:grid;gap:2px}.sidepanel__text b{font-size:14px;font-weight:550;color:var(--ink)}.sidepanel__text span{font-size:12.5px;color:var(--ink-faint)}.sidepanel__text b,.sidepanel__text span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.queue__time{flex:none;font-size:12px;font-variant-numeric:tabular-nums;color:var(--ink-faint)}.speakers__item{display:grid;gap:2px;padding:4px 0}.speakers__pick{display:flex;align-items:center;gap:12px;width:100%;padding:11px 10px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.speakers__pick:hover:not(:disabled){background:#ffffff12}.speakers__pick:disabled{cursor:default}.speakers__item[data-here=true] .speakers__pick{background:#ffffff14}.speakers__dot{flex:none;width:8px;height:8px;border-radius:50%;background:#fff3}.speakers__dot[data-on=true]{background:#4eda88;box-shadow:0 0 0 3px #4eda882e}.speakers__move{display:inline-flex;align-items:center;gap:7px;margin-left:30px;padding:7px 12px;font-size:12.5px;color:var(--ink-dim);background:#ffffff0f;border:1px solid hsl(0 0% 100% / .08);border-radius:999px;cursor:pointer;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.speakers__move:hover{color:var(--ink);background:#ffffff1f}.speakers__move svg{width:15px;height:15px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:8px}.pair input{min-width:0}.speakers__group{padding:16px 10px 6px}.speakers__group h3{font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.speakers__group p{margin-top:3px;font-size:11.5px;line-height:1.4;color:var(--ink-faint)}.tint{display:flex;align-items:center;gap:12px}.tint input[type=color]{width:54px;height:38px;padding:0;background:none;border:1px solid hsl(0 0% 100% / .14);border-radius:10px;cursor:pointer}.tint input[type=color]::-webkit-color-swatch-wrapper{padding:4px}.tint input[type=color]::-webkit-color-swatch{border:none;border-radius:6px}:host,.app{overscroll-behavior:none;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.sidepanel__list,.setup,.lyrics{touch-action:pan-y;overscroll-behavior:contain}:host .app{position:absolute}.field__value{float:right;font-variant-numeric:tabular-nums;color:var(--ink-faint)}.field input[type=range]{width:100%;height:26px;margin:0;background:none;-webkit-appearance:none;appearance:none;cursor:pointer}.field input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:2px;background:#ffffff29}.field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;margin-top:-7px;border-radius:50%;background:var(--ink);box-shadow:0 1px 4px #00000080}.field input[type=range]::-moz-range-track{height:4px;border-radius:2px;background:#ffffff29}.field input[type=range]::-moz-range-thumb{width:18px;height:18px;border:none;border-radius:50%;background:var(--ink)}`;
class N1 {
  rendus = [];
  /** Pose une propriété CSS sur un élément et retient de quoi la défaire. */
  poser(c, d, r) {
    const p = c.style.getPropertyValue(d), E = c.style.getPropertyPriority(d);
    c.style.setProperty(d, r, "important"), this.rendus.push(() => {
      p ? c.style.setProperty(d, p, E) : c.style.removeProperty(d);
    });
  }
  /** Enregistre une restitution qui n'est pas un style : un écouteur, par exemple. */
  aussi(c) {
    this.rendus.push(c);
  }
  rendre() {
    for (const c of this.rendus.splice(0).reverse())
      try {
        c();
      } catch {
      }
  }
}
class U1 extends HTMLElement {
  root = null;
  client = null;
  mounted = !1;
  /** Tout ce qu on a modifié hors de notre arbre, et de quoi le défaire. */
  emprise = new N1();
  /** Home Assistant écrit ici, souvent. */
  set hass(c) {
    c && (this.client ? this.client.update(c) : (this.client = new T1(c), this.premierChoixDEnceinte(c), this.prendreLaPlace(), this.monter()));
  }
  /**
   * À la toute première ouverture, on choisit une enceinte plausible plutôt que
   * d'accueillir l'utilisateur par un formulaire vide. Il pourra en changer
   * d'un geste depuis le nom de la pièce.
   */
  premierChoixDEnceinte(c) {
    const d = mc();
    if (d.entityId) return;
    const r = M1(c);
    r && Vr({ ...d, entityId: r });
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
    for (const c of [document.documentElement, document.body])
      this.emprise.poser(c, "overscroll-behavior", "none"), this.emprise.poser(c, "overscroll-behavior-y", "none");
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
  suivreLaBoite(c) {
    const d = () => {
      const p = this.getBoundingClientRect(), E = p.width > 0 ? p.width : window.innerWidth - p.left, T = p.height > 0 ? p.height : window.innerHeight - p.top;
      c.style.position = "fixed", E > 0 && T > 0 ? (c.style.inset = "", c.style.left = `${p.left}px`, c.style.top = `${p.top}px`, c.style.width = `${E}px`, c.style.height = `${T}px`) : (c.style.inset = "0", c.style.width = "", c.style.height = "");
    };
    d();
    const r = new ResizeObserver(d);
    r.observe(this), window.addEventListener("resize", d), this.emprise.aussi(() => {
      r.disconnect(), window.removeEventListener("resize", d);
    });
  }
  monter() {
    if (this.mounted || !this.client) return;
    this.mounted = !0;
    const c = this.attachShadow({ mode: "open" }), d = F0.match(/@font-face\s*\{[^}]*\}/g) ?? [];
    if (d.length > 0 && !document.getElementById("md-vinyl-fonts")) {
      const E = document.createElement("style");
      E.id = "md-vinyl-fonts", E.textContent = d.join(`
`), document.head.appendChild(E);
    }
    const r = document.createElement("style");
    r.textContent = F0, c.appendChild(r);
    const p = document.createElement("div");
    p.style.cssText = "overflow:hidden; overscroll-behavior:none; touch-action:none;", c.appendChild(p), this.style.cssText = "display:block; position:relative; width:100%; height:100%; overscroll-behavior:none;", this.suivreLaBoite(p), this.root = xp.createRoot(p), this.root.render(
      /* @__PURE__ */ o.jsx(C.StrictMode, { children: /* @__PURE__ */ o.jsx(z1, { embedded: this.client }) })
    );
  }
  disconnectedCallback() {
    this.emprise.rendre(), this.root?.unmount(), this.root = null, this.mounted = !1, this.client?.close(), this.client = null;
  }
}
customElements.get("md-vinyl-panel") || customElements.define("md-vinyl-panel", U1);
console.info("%c MD Vinyl %c panneau chargé ", "background:#c8542e;color:#fff", "");
