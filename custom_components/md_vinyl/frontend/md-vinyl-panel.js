var Vc = { exports: {} }, cu = {};
var F0;
function Zp() {
  if (F0) return cu;
  F0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, h, v) {
    var y = null;
    if (v !== void 0 && (y = "" + v), h.key !== void 0 && (y = "" + h.key), "key" in h) {
      v = {};
      for (var O in h)
        O !== "key" && (v[O] = h[O]);
    } else v = h;
    return h = v.ref, {
      $$typeof: c,
      type: r,
      key: y,
      ref: h !== void 0 ? h : null,
      props: v
    };
  }
  return cu.Fragment = s, cu.jsx = o, cu.jsxs = o, cu;
}
var I0;
function Xp() {
  return I0 || (I0 = 1, Vc.exports = Zp()), Vc.exports;
}
var f = Xp(), Gc = { exports: {} }, ot = {};
var P0;
function Kp() {
  if (P0) return ot;
  P0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), y = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), U = Symbol.iterator;
  function q(b) {
    return b === null || typeof b != "object" ? null : (b = U && b[U] || b["@@iterator"], typeof b == "function" ? b : null);
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
  }, R = Object.assign, K = {};
  function _(b, D, X) {
    this.props = b, this.context = D, this.refs = K, this.updater = X || G;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(b, D) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, D, "setState");
  }, _.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = _.prototype;
  function ct(b, D, X) {
    this.props = b, this.context = D, this.refs = K, this.updater = X || G;
  }
  var gt = ct.prototype = new Q();
  gt.constructor = ct, R(gt, _.prototype), gt.isPureReactComponent = !0;
  var vt = Array.isArray;
  function yt() {
  }
  var Y = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function ft(b, D, X) {
    var Z = X.ref;
    return {
      $$typeof: c,
      type: b,
      key: D,
      ref: Z !== void 0 ? Z : null,
      props: X
    };
  }
  function dt(b, D) {
    return ft(b.type, D, b.props);
  }
  function Ct(b) {
    return typeof b == "object" && b !== null && b.$$typeof === c;
  }
  function F(b) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(X) {
      return D[X];
    });
  }
  var bt = /\/+/g;
  function Mt(b, D) {
    return typeof b == "object" && b !== null && b.key != null ? F("" + b.key) : D.toString(36);
  }
  function xt(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(yt, yt) : (b.status = "pending", b.then(
          function(D) {
            b.status === "pending" && (b.status = "fulfilled", b.value = D);
          },
          function(D) {
            b.status === "pending" && (b.status = "rejected", b.reason = D);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function C(b, D, X, Z, I) {
    var nt = typeof b;
    (nt === "undefined" || nt === "boolean") && (b = null);
    var st = !1;
    if (b === null) st = !0;
    else
      switch (nt) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case c:
            case s:
              st = !0;
              break;
            case S:
              return st = b._init, C(
                st(b._payload),
                D,
                X,
                Z,
                I
              );
          }
      }
    if (st)
      return I = I(b), st = Z === "" ? "." + Mt(b, 0) : Z, vt(I) ? (X = "", st != null && (X = st.replace(bt, "$&/") + "/"), C(I, D, X, "", function(pa) {
        return pa;
      })) : I != null && (Ct(I) && (I = dt(
        I,
        X + (I.key == null || b && b.key === I.key ? "" : ("" + I.key).replace(
          bt,
          "$&/"
        ) + "/") + st
      )), D.push(I)), 1;
    st = 0;
    var Bt = Z === "" ? "." : Z + ":";
    if (vt(b))
      for (var Ot = 0; Ot < b.length; Ot++)
        Z = b[Ot], nt = Bt + Mt(Z, Ot), st += C(
          Z,
          D,
          X,
          nt,
          I
        );
    else if (Ot = q(b), typeof Ot == "function")
      for (b = Ot.call(b), Ot = 0; !(Z = b.next()).done; )
        Z = Z.value, nt = Bt + Mt(Z, Ot++), st += C(
          Z,
          D,
          X,
          nt,
          I
        );
    else if (nt === "object") {
      if (typeof b.then == "function")
        return C(
          xt(b),
          D,
          X,
          Z,
          I
        );
      throw D = String(b), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return st;
  }
  function H(b, D, X) {
    if (b == null) return b;
    var Z = [], I = 0;
    return C(b, Z, "", "", function(nt) {
      return D.call(X, nt, I++);
    }), Z;
  }
  function $(b) {
    if (b._status === -1) {
      var D = b._result;
      D = D(), D.then(
        function(X) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = X);
        },
        function(X) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = X);
        }
      ), b._status === -1 && (b._status = 0, b._result = D);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var mt = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, lt = {
    map: H,
    forEach: function(b, D, X) {
      H(
        b,
        function() {
          D.apply(this, arguments);
        },
        X
      );
    },
    count: function(b) {
      var D = 0;
      return H(b, function() {
        D++;
      }), D;
    },
    toArray: function(b) {
      return H(b, function(D) {
        return D;
      }) || [];
    },
    only: function(b) {
      if (!Ct(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ot.Activity = T, ot.Children = lt, ot.Component = _, ot.Fragment = o, ot.Profiler = h, ot.PureComponent = ct, ot.StrictMode = r, ot.Suspense = p, ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, ot.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return Y.H.useMemoCache(b);
    }
  }, ot.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ot.cacheSignal = function() {
    return null;
  }, ot.cloneElement = function(b, D, X) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var Z = R({}, b.props), I = b.key;
    if (D != null)
      for (nt in D.key !== void 0 && (I = "" + D.key), D)
        !J.call(D, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && D.ref === void 0 || (Z[nt] = D[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) Z.children = X;
    else if (1 < nt) {
      for (var st = Array(nt), Bt = 0; Bt < nt; Bt++)
        st[Bt] = arguments[Bt + 2];
      Z.children = st;
    }
    return ft(b.type, I, Z);
  }, ot.createContext = function(b) {
    return b = {
      $$typeof: y,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: v,
      _context: b
    }, b;
  }, ot.createElement = function(b, D, X) {
    var Z, I = {}, nt = null;
    if (D != null)
      for (Z in D.key !== void 0 && (nt = "" + D.key), D)
        J.call(D, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (I[Z] = D[Z]);
    var st = arguments.length - 2;
    if (st === 1) I.children = X;
    else if (1 < st) {
      for (var Bt = Array(st), Ot = 0; Ot < st; Ot++)
        Bt[Ot] = arguments[Ot + 2];
      I.children = Bt;
    }
    if (b && b.defaultProps)
      for (Z in st = b.defaultProps, st)
        I[Z] === void 0 && (I[Z] = st[Z]);
    return ft(b, nt, I);
  }, ot.createRef = function() {
    return { current: null };
  }, ot.forwardRef = function(b) {
    return { $$typeof: O, render: b };
  }, ot.isValidElement = Ct, ot.lazy = function(b) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: b },
      _init: $
    };
  }, ot.memo = function(b, D) {
    return {
      $$typeof: m,
      type: b,
      compare: D === void 0 ? null : D
    };
  }, ot.startTransition = function(b) {
    var D = Y.T, X = {};
    Y.T = X;
    try {
      var Z = b(), I = Y.S;
      I !== null && I(X, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(yt, mt);
    } catch (nt) {
      mt(nt);
    } finally {
      D !== null && X.types !== null && (D.types = X.types), Y.T = D;
    }
  }, ot.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, ot.use = function(b) {
    return Y.H.use(b);
  }, ot.useActionState = function(b, D, X) {
    return Y.H.useActionState(b, D, X);
  }, ot.useCallback = function(b, D) {
    return Y.H.useCallback(b, D);
  }, ot.useContext = function(b) {
    return Y.H.useContext(b);
  }, ot.useDebugValue = function() {
  }, ot.useDeferredValue = function(b, D) {
    return Y.H.useDeferredValue(b, D);
  }, ot.useEffect = function(b, D) {
    return Y.H.useEffect(b, D);
  }, ot.useEffectEvent = function(b) {
    return Y.H.useEffectEvent(b);
  }, ot.useId = function() {
    return Y.H.useId();
  }, ot.useImperativeHandle = function(b, D, X) {
    return Y.H.useImperativeHandle(b, D, X);
  }, ot.useInsertionEffect = function(b, D) {
    return Y.H.useInsertionEffect(b, D);
  }, ot.useLayoutEffect = function(b, D) {
    return Y.H.useLayoutEffect(b, D);
  }, ot.useMemo = function(b, D) {
    return Y.H.useMemo(b, D);
  }, ot.useOptimistic = function(b, D) {
    return Y.H.useOptimistic(b, D);
  }, ot.useReducer = function(b, D, X) {
    return Y.H.useReducer(b, D, X);
  }, ot.useRef = function(b) {
    return Y.H.useRef(b);
  }, ot.useState = function(b) {
    return Y.H.useState(b);
  }, ot.useSyncExternalStore = function(b, D, X) {
    return Y.H.useSyncExternalStore(
      b,
      D,
      X
    );
  }, ot.useTransition = function() {
    return Y.H.useTransition();
  }, ot.version = "19.2.8", ot;
}
var _0;
function ho() {
  return _0 || (_0 = 1, Gc.exports = Kp()), Gc.exports;
}
var A = ho(), Zc = { exports: {} }, ou = {}, Xc = { exports: {} }, Kc = {};
var $0;
function Jp() {
  return $0 || ($0 = 1, (function(c) {
    function s(C, H) {
      var $ = C.length;
      C.push(H);
      t: for (; 0 < $; ) {
        var mt = $ - 1 >>> 1, lt = C[mt];
        if (0 < h(lt, H))
          C[mt] = H, C[$] = lt, $ = mt;
        else break t;
      }
    }
    function o(C) {
      return C.length === 0 ? null : C[0];
    }
    function r(C) {
      if (C.length === 0) return null;
      var H = C[0], $ = C.pop();
      if ($ !== H) {
        C[0] = $;
        t: for (var mt = 0, lt = C.length, b = lt >>> 1; mt < b; ) {
          var D = 2 * (mt + 1) - 1, X = C[D], Z = D + 1, I = C[Z];
          if (0 > h(X, $))
            Z < lt && 0 > h(I, X) ? (C[mt] = I, C[Z] = $, mt = Z) : (C[mt] = X, C[D] = $, mt = D);
          else if (Z < lt && 0 > h(I, $))
            C[mt] = I, C[Z] = $, mt = Z;
          else break t;
        }
      }
      return H;
    }
    function h(C, H) {
      var $ = C.sortIndex - H.sortIndex;
      return $ !== 0 ? $ : C.id - H.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      c.unstable_now = function() {
        return v.now();
      };
    } else {
      var y = Date, O = y.now();
      c.unstable_now = function() {
        return y.now() - O;
      };
    }
    var p = [], m = [], S = 1, T = null, U = 3, q = !1, G = !1, R = !1, K = !1, _ = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    function gt(C) {
      for (var H = o(m); H !== null; ) {
        if (H.callback === null) r(m);
        else if (H.startTime <= C)
          r(m), H.sortIndex = H.expirationTime, s(p, H);
        else break;
        H = o(m);
      }
    }
    function vt(C) {
      if (R = !1, gt(C), !G)
        if (o(p) !== null)
          G = !0, yt || (yt = !0, F());
        else {
          var H = o(m);
          H !== null && xt(vt, H.startTime - C);
        }
    }
    var yt = !1, Y = -1, J = 5, ft = -1;
    function dt() {
      return K ? !0 : !(c.unstable_now() - ft < J);
    }
    function Ct() {
      if (K = !1, yt) {
        var C = c.unstable_now();
        ft = C;
        var H = !0;
        try {
          t: {
            G = !1, R && (R = !1, Q(Y), Y = -1), q = !0;
            var $ = U;
            try {
              e: {
                for (gt(C), T = o(p); T !== null && !(T.expirationTime > C && dt()); ) {
                  var mt = T.callback;
                  if (typeof mt == "function") {
                    T.callback = null, U = T.priorityLevel;
                    var lt = mt(
                      T.expirationTime <= C
                    );
                    if (C = c.unstable_now(), typeof lt == "function") {
                      T.callback = lt, gt(C), H = !0;
                      break e;
                    }
                    T === o(p) && r(p), gt(C);
                  } else r(p);
                  T = o(p);
                }
                if (T !== null) H = !0;
                else {
                  var b = o(m);
                  b !== null && xt(
                    vt,
                    b.startTime - C
                  ), H = !1;
                }
              }
              break t;
            } finally {
              T = null, U = $, q = !1;
            }
            H = void 0;
          }
        } finally {
          H ? F() : yt = !1;
        }
      }
    }
    var F;
    if (typeof ct == "function")
      F = function() {
        ct(Ct);
      };
    else if (typeof MessageChannel < "u") {
      var bt = new MessageChannel(), Mt = bt.port2;
      bt.port1.onmessage = Ct, F = function() {
        Mt.postMessage(null);
      };
    } else
      F = function() {
        _(Ct, 0);
      };
    function xt(C, H) {
      Y = _(function() {
        C(c.unstable_now());
      }, H);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, c.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < C ? Math.floor(1e3 / C) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, c.unstable_next = function(C) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = U;
      }
      var $ = U;
      U = H;
      try {
        return C();
      } finally {
        U = $;
      }
    }, c.unstable_requestPaint = function() {
      K = !0;
    }, c.unstable_runWithPriority = function(C, H) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var $ = U;
      U = C;
      try {
        return H();
      } finally {
        U = $;
      }
    }, c.unstable_scheduleCallback = function(C, H, $) {
      var mt = c.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? mt + $ : mt) : $ = mt, C) {
        case 1:
          var lt = -1;
          break;
        case 2:
          lt = 250;
          break;
        case 5:
          lt = 1073741823;
          break;
        case 4:
          lt = 1e4;
          break;
        default:
          lt = 5e3;
      }
      return lt = $ + lt, C = {
        id: S++,
        callback: H,
        priorityLevel: C,
        startTime: $,
        expirationTime: lt,
        sortIndex: -1
      }, $ > mt ? (C.sortIndex = $, s(m, C), o(p) === null && C === o(m) && (R ? (Q(Y), Y = -1) : R = !0, xt(vt, $ - mt))) : (C.sortIndex = lt, s(p, C), G || q || (G = !0, yt || (yt = !0, F()))), C;
    }, c.unstable_shouldYield = dt, c.unstable_wrapCallback = function(C) {
      var H = U;
      return function() {
        var $ = U;
        U = H;
        try {
          return C.apply(this, arguments);
        } finally {
          U = $;
        }
      };
    };
  })(Kc)), Kc;
}
var th;
function Qp() {
  return th || (th = 1, Xc.exports = Jp()), Xc.exports;
}
var Jc = { exports: {} }, Ce = {};
var eh;
function Wp() {
  if (eh) return Ce;
  eh = 1;
  var c = ho();
  function s(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        m += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(s(522));
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
  function v(p, m, S) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: m,
      implementation: S
    };
  }
  var y = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(p, m) {
    if (p === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return Ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Ce.createPortal = function(p, m) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(s(299));
    return v(p, m, null, S);
  }, Ce.flushSync = function(p) {
    var m = y.T, S = r.p;
    try {
      if (y.T = null, r.p = 2, p) return p();
    } finally {
      y.T = m, r.p = S, r.d.f();
    }
  }, Ce.preconnect = function(p, m) {
    typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(p, m));
  }, Ce.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p);
  }, Ce.preinit = function(p, m) {
    if (typeof p == "string" && m && typeof m.as == "string") {
      var S = m.as, T = O(S, m.crossOrigin), U = typeof m.integrity == "string" ? m.integrity : void 0, q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      S === "style" ? r.d.S(
        p,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: T,
          integrity: U,
          fetchPriority: q
        }
      ) : S === "script" && r.d.X(p, {
        crossOrigin: T,
        integrity: U,
        fetchPriority: q,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Ce.preinitModule = function(p, m) {
    if (typeof p == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var S = O(
            m.as,
            m.crossOrigin
          );
          r.d.M(p, {
            crossOrigin: S,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && r.d.M(p);
  }, Ce.preload = function(p, m) {
    if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var S = m.as, T = O(S, m.crossOrigin);
      r.d.L(p, S, {
        crossOrigin: T,
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
  }, Ce.preloadModule = function(p, m) {
    if (typeof p == "string")
      if (m) {
        var S = O(m.as, m.crossOrigin);
        r.d.m(p, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: S,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else r.d.m(p);
  }, Ce.requestFormReset = function(p) {
    r.d.r(p);
  }, Ce.unstable_batchedUpdates = function(p, m) {
    return p(m);
  }, Ce.useFormState = function(p, m, S) {
    return y.H.useFormState(p, m, S);
  }, Ce.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, Ce.version = "19.2.8", Ce;
}
var ah;
function wh() {
  if (ah) return Jc.exports;
  ah = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), Jc.exports = Wp(), Jc.exports;
}
var lh;
function Fp() {
  if (lh) return ou;
  lh = 1;
  var c = Qp(), s = ho(), o = wh();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function v(t) {
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
  function y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function O(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (v(t) !== t)
      throw Error(r(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (e = v(t), e === null) throw Error(r(188));
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
          if (i === a) return p(n), t;
          if (i === l) return p(n), e;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) a = n, l = i;
      else {
        for (var u = !1, d = n.child; d; ) {
          if (d === a) {
            u = !0, a = n, l = i;
            break;
          }
          if (d === l) {
            u = !0, l = n, a = i;
            break;
          }
          d = d.sibling;
        }
        if (!u) {
          for (d = i.child; d; ) {
            if (d === a) {
              u = !0, a = i, l = n;
              break;
            }
            if (d === l) {
              u = !0, l = i, a = n;
              break;
            }
            d = d.sibling;
          }
          if (!u) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = S(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var T = Object.assign, U = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), G = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), ct = /* @__PURE__ */ Symbol.for("react.context"), gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), yt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), ft = /* @__PURE__ */ Symbol.for("react.activity"), dt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ct = Symbol.iterator;
  function F(t) {
    return t === null || typeof t != "object" ? null : (t = Ct && t[Ct] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var bt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Mt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case _:
        return "Profiler";
      case K:
        return "StrictMode";
      case vt:
        return "Suspense";
      case yt:
        return "SuspenseList";
      case ft:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case G:
          return "Portal";
        case ct:
          return t.displayName || "Context";
        case Q:
          return (t._context.displayName || "Context") + ".Consumer";
        case gt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Y:
          return e = t.displayName || null, e !== null ? e : Mt(t.type) || "Memo";
        case J:
          e = t._payload, t = t._init;
          try {
            return Mt(t(e));
          } catch {
          }
      }
    return null;
  }
  var xt = Array.isArray, C = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, mt = [], lt = -1;
  function b(t) {
    return { current: t };
  }
  function D(t) {
    0 > lt || (t.current = mt[lt], mt[lt] = null, lt--);
  }
  function X(t, e) {
    lt++, mt[lt] = t.current, t.current = e;
  }
  var Z = b(null), I = b(null), nt = b(null), st = b(null);
  function Bt(t, e) {
    switch (X(nt, e), X(I, t), X(Z, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? y0(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = y0(e), t = b0(e, t);
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
    D(Z), X(Z, t);
  }
  function Ot() {
    D(Z), D(I), D(nt);
  }
  function pa(t) {
    t.memoizedState !== null && X(st, t);
    var e = Z.current, a = b0(e, t.type);
    e !== a && (X(I, t), X(Z, a));
  }
  function ee(t) {
    I.current === t && (D(Z), D(I)), st.current === t && (D(st), iu._currentValue = $);
  }
  var dl, Ha;
  function ta(t) {
    if (dl === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        dl = e && e[1] || "", Ha = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + dl + t + Ha;
  }
  var Ge = !1;
  function Fl(t, e) {
    if (!t || Ge) return "";
    Ge = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var L = function() {
                throw Error();
              };
              if (Object.defineProperty(L.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(L, []);
                } catch (j) {
                  var N = j;
                }
                Reflect.construct(t, [], L);
              } else {
                try {
                  L.call();
                } catch (j) {
                  N = j;
                }
                t.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                N = j;
              }
              (L = t()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch (j) {
            if (j && N && typeof j.stack == "string")
              return [j.stack, N.stack];
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
      var i = l.DetermineComponentFrameRoot(), u = i[0], d = i[1];
      if (u && d) {
        var g = u.split(`
`), w = d.split(`
`);
        for (n = l = 0; l < g.length && !g[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < w.length && !w[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === g.length || n === w.length)
          for (l = g.length - 1, n = w.length - 1; 1 <= l && 0 <= n && g[l] !== w[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (g[l] !== w[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || g[l] !== w[n]) {
                  var k = `
` + g[l].replace(" at new ", " at ");
                  return t.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", t.displayName)), k;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      Ge = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? ta(a) : "";
  }
  function An(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ta(t.type);
      case 16:
        return ta("Lazy");
      case 13:
        return t.child !== e && e !== null ? ta("Suspense Fallback") : ta("Suspense");
      case 19:
        return ta("SuspenseList");
      case 0:
      case 15:
        return Fl(t.type, !1);
      case 11:
        return Fl(t.type.render, !1);
      case 1:
        return Fl(t.type, !0);
      case 31:
        return ta("Activity");
      default:
        return "";
    }
  }
  function W(t) {
    try {
      var e = "", a = null;
      do
        e += An(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var rt = Object.prototype.hasOwnProperty, wt = c.unstable_scheduleCallback, Lt = c.unstable_cancelCallback, ge = c.unstable_shouldYield, ke = c.unstable_requestPaint, kt = c.unstable_now, ae = c.unstable_getCurrentPriorityLevel, oe = c.unstable_ImmediatePriority, Ft = c.unstable_UserBlockingPriority, Wt = c.unstable_NormalPriority, me = c.unstable_LowPriority, ea = c.unstable_IdlePriority, aa = c.log, Il = c.unstable_setDisableYieldValue, hl = null, ye = null;
  function la(t) {
    if (typeof aa == "function" && Il(t), ye && typeof ye.setStrictMode == "function")
      try {
        ye.setStrictMode(hl, t);
      } catch {
      }
  }
  var le = Math.clz32 ? Math.clz32 : Ze, zn = Math.log, vi = Math.LN2;
  function Ze(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (zn(t) / vi | 0) | 0;
  }
  var na = 256, Na = 262144, Va = 4194304;
  function be(t) {
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
  function Pl(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var n = 0, i = t.suspendedLanes, u = t.pingedLanes;
    t = t.warmLanes;
    var d = l & 134217727;
    return d !== 0 ? (l = d & ~i, l !== 0 ? n = be(l) : (u &= d, u !== 0 ? n = be(u) : a || (a = d & ~t, a !== 0 && (n = be(a))))) : (d = l & ~i, d !== 0 ? n = be(d) : u !== 0 ? n = be(u) : a || (a = l & ~t, a !== 0 && (n = be(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, a = e & -e, i >= a || i === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function va(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ml(t, e) {
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
  function Ga() {
    var t = Va;
    return Va <<= 1, (Va & 62914560) === 0 && (Va = 4194304), t;
  }
  function ze(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function ga(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Gs(t, e, a, l, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var d = t.entanglements, g = t.expirationTimes, w = t.hiddenUpdates;
    for (a = u & ~a; 0 < a; ) {
      var k = 31 - le(a), L = 1 << k;
      d[k] = 0, g[k] = -1;
      var N = w[k];
      if (N !== null)
        for (w[k] = null, k = 0; k < N.length; k++) {
          var j = N[k];
          j !== null && (j.lane &= -536870913);
        }
      a &= ~L;
    }
    l !== 0 && gi(t, l, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e));
  }
  function gi(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - le(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function yi(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - le(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function Mn(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : wn(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function wn(t) {
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
  function _l(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Tn() {
    var t = H.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : G0(t.type));
  }
  function Nn(t, e) {
    var a = H.p;
    try {
      return H.p = t, e();
    } finally {
      H.p = a;
    }
  }
  var ya = Math.random().toString(36).slice(2), ne = "__reactFiber$" + ya, Me = "__reactProps$" + ya, pl = "__reactContainer$" + ya, bi = "__reactEvents$" + ya, vl = "__reactListeners$" + ya, gu = "__reactHandles$" + ya, pe = "__reactResources$" + ya, Ca = "__reactMarker$" + ya;
  function ba(t) {
    delete t[ne], delete t[Me], delete t[bi], delete t[vl], delete t[gu];
  }
  function Za(t) {
    var e = t[ne];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[pl] || a[ne]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = w0(t); t !== null; ) {
            if (a = t[ne]) return a;
            t = w0(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function gl(t) {
    if (t = t[ne] || t[pl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Xa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function yl(t) {
    var e = t[pe];
    return e || (e = t[pe] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ie(t) {
    t[Ca] = !0;
  }
  var Cn = /* @__PURE__ */ new Set(), yu = {};
  function ja(t, e) {
    Ua(t, e), Ua(t + "Capture", e);
  }
  function Ua(t, e) {
    for (yu[t] = e, t = 0; t < e.length; t++)
      Cn.add(e[t]);
  }
  var xi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), $l = {}, tn = {};
  function xa(t) {
    return rt.call(tn, t) ? !0 : rt.call($l, t) ? !1 : xi.test(t) ? tn[t] = !0 : ($l[t] = !0, !1);
  }
  function jn(t, e, a) {
    if (xa(e))
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
  function en(t, e, a) {
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
  function Xe(t, e, a, l) {
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
  function qe(t) {
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
  function bu(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Si(t, e, a) {
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
  function Ei(t) {
    if (!t._valueTracker) {
      var e = bu(t) ? "checked" : "value";
      t._valueTracker = Si(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function xu(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), l = "";
    return t && (l = bu(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1;
  }
  function Jt(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Su = /[\n"\\]/g;
  function Re(t) {
    return t.replace(
      Su,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ai(t, e, a, l, n, i, u, d) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), e != null ? u === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + qe(e)) : t.value !== "" + qe(e) && (t.value = "" + qe(e)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), e != null ? bl(t, u, qe(e)) : a != null ? bl(t, u, qe(a)) : l != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.name = "" + qe(d) : t.removeAttribute("name");
  }
  function an(t, e, a, l, n, i, u, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        Ei(t);
        return;
      }
      a = a != null ? "" + qe(a) : "", e = e != null ? "" + qe(e) : a, d || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = d ? t.checked : !!l, t.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), Ei(t);
  }
  function bl(t, e, a) {
    e === "number" && Jt(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function xl(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++)
        e["$" + a[n]] = !0;
      for (a = 0; a < t.length; a++)
        n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + qe(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = !0, l && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Eu(t, e, a) {
    if (e != null && (e = "" + qe(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + qe(a) : "";
  }
  function ln(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (xt(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = qe(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), Ei(t);
  }
  function Sa(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var zi = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Au(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || zi.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function zu(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var n in e)
        l = e[n], e.hasOwnProperty(n) && a[n] !== l && Au(t, n, l);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Au(t, i, e[i]);
  }
  function Mi(t) {
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
  var xo = /* @__PURE__ */ new Map([
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
  ]), Zs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Un(t) {
    return Zs.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ea() {
  }
  var Dn = null;
  function nn(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Sl = null, Da = null;
  function M(t) {
    var e = gl(t);
    if (e && (t = e.stateNode)) {
      var a = t[Me] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Ai(
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
              'input[name="' + Re(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var n = l[Me] || null;
                if (!n) throw Error(r(90));
                Ai(
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
              l = a[e], l.form === t.form && xu(l);
          }
          break t;
        case "textarea":
          Eu(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && xl(t, !!a.multiple, e, !1);
      }
    }
  }
  var V = !1;
  function P(t, e, a) {
    if (V) return t(e, a);
    V = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (V = !1, (Sl !== null || Da !== null) && (ss(), Sl && (e = Sl, t = Da, Da = Sl = null, M(e), t)))
        for (e = 0; e < t.length; e++) M(t[e]);
    }
  }
  function et(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Me] || null;
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
  var Tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), De = !1;
  if (Tt)
    try {
      var we = {};
      Object.defineProperty(we, "passive", {
        get: function() {
          De = !0;
        }
      }), window.addEventListener("test", we, we), window.removeEventListener("test", we, we);
    } catch {
      De = !1;
    }
  var fe = null, Oa = null, Ka = null;
  function un() {
    if (Ka) return Ka;
    var t, e = Oa, a = e.length, l, n = "value" in fe ? fe.value : fe.textContent, i = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var u = a - t;
    for (l = 1; l <= u && e[a - l] === n[i - l]; l++) ;
    return Ka = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Aa(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Te() {
    return !0;
  }
  function El() {
    return !1;
  }
  function de(t) {
    function e(a, l, n, i, u) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var d in t)
        t.hasOwnProperty(d) && (a = t[d], this[d] = a ? a(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Te : El, this.isPropagationStopped = El, this;
    }
    return T(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Te);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Te);
      },
      persist: function() {
      },
      isPersistent: Te
    }), e;
  }
  var za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Al = de(za), Ja = T({}, za, { view: 0, detail: 0 }), Ne = de(Ja), ka, Qa, Ke, On = T({}, Ja, {
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
    getModifierState: Js,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ke && (Ke && t.type === "mousemove" ? (ka = t.screenX - Ke.screenX, Qa = t.screenY - Ke.screenY) : Qa = ka = 0, Ke = t), ka);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Qa;
    }
  }), Mu = de(On), Wa = T({}, On, { dataTransfer: 0 }), Xs = de(Wa), Xh = T({}, Ja, { relatedTarget: 0 }), Ks = de(Xh), Kh = T({}, za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jh = de(Kh), Qh = T({}, za, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Wh = de(Qh), Fh = T({}, za, { data: 0 }), So = de(Fh), Ih = {
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
  }, Ph = {
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
  }, _h = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $h(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = _h[t]) ? !!e[t] : !1;
  }
  function Js() {
    return $h;
  }
  var tm = T({}, Ja, {
    key: function(t) {
      if (t.key) {
        var e = Ih[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Aa(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Ph[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Js,
    charCode: function(t) {
      return t.type === "keypress" ? Aa(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Aa(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), em = de(tm), am = T({}, On, {
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
  }), Eo = de(am), lm = T({}, Ja, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Js
  }), nm = de(lm), im = T({}, za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), um = de(im), sm = T({}, On, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rm = de(sm), cm = T({}, za, {
    newState: 0,
    oldState: 0
  }), om = de(cm), fm = [9, 13, 27, 32], Qs = Tt && "CompositionEvent" in window, wi = null;
  Tt && "documentMode" in document && (wi = document.documentMode);
  var dm = Tt && "TextEvent" in window && !wi, Ao = Tt && (!Qs || wi && 8 < wi && 11 >= wi), zo = " ", Mo = !1;
  function wo(t, e) {
    switch (t) {
      case "keyup":
        return fm.indexOf(e.keyCode) !== -1;
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
  function To(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var kn = !1;
  function hm(t, e) {
    switch (t) {
      case "compositionend":
        return To(e);
      case "keypress":
        return e.which !== 32 ? null : (Mo = !0, zo);
      case "textInput":
        return t = e.data, t === zo && Mo ? null : t;
      default:
        return null;
    }
  }
  function mm(t, e) {
    if (kn)
      return t === "compositionend" || !Qs && wo(t, e) ? (t = un(), Ka = Oa = fe = null, kn = !1, t) : null;
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
        return Ao && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var pm = {
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
  function No(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!pm[t.type] : e === "textarea";
  }
  function Co(t, e, a, l) {
    Sl ? Da ? Da.push(l) : Da = [l] : Sl = l, e = ms(e, "onChange"), 0 < e.length && (a = new Al(
      "onChange",
      "change",
      null,
      a,
      l
    ), t.push({ event: a, listeners: e }));
  }
  var Ti = null, Ni = null;
  function vm(t) {
    d0(t, 0);
  }
  function wu(t) {
    var e = Xa(t);
    if (xu(e)) return t;
  }
  function jo(t, e) {
    if (t === "change") return e;
  }
  var Uo = !1;
  if (Tt) {
    var Ws;
    if (Tt) {
      var Fs = "oninput" in document;
      if (!Fs) {
        var Do = document.createElement("div");
        Do.setAttribute("oninput", "return;"), Fs = typeof Do.oninput == "function";
      }
      Ws = Fs;
    } else Ws = !1;
    Uo = Ws && (!document.documentMode || 9 < document.documentMode);
  }
  function Oo() {
    Ti && (Ti.detachEvent("onpropertychange", ko), Ni = Ti = null);
  }
  function ko(t) {
    if (t.propertyName === "value" && wu(Ni)) {
      var e = [];
      Co(
        e,
        Ni,
        t,
        nn(t)
      ), P(vm, e);
    }
  }
  function gm(t, e, a) {
    t === "focusin" ? (Oo(), Ti = e, Ni = a, Ti.attachEvent("onpropertychange", ko)) : t === "focusout" && Oo();
  }
  function ym(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return wu(Ni);
  }
  function bm(t, e) {
    if (t === "click") return wu(e);
  }
  function xm(t, e) {
    if (t === "input" || t === "change")
      return wu(e);
  }
  function Sm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Je = typeof Object.is == "function" ? Object.is : Sm;
  function Ci(t, e) {
    if (Je(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!rt.call(e, n) || !Je(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function qo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ro(t, e) {
    var a = qo(t);
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
      a = qo(a);
    }
  }
  function Bo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Bo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Lo(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Jt(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Jt(t.document);
    }
    return e;
  }
  function Is(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Em = Tt && "documentMode" in document && 11 >= document.documentMode, qn = null, Ps = null, ji = null, _s = !1;
  function Yo(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    _s || qn == null || qn !== Jt(l) || (l = qn, "selectionStart" in l && Is(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ji && Ci(ji, l) || (ji = l, l = ms(Ps, "onSelect"), 0 < l.length && (e = new Al(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }), e.target = qn)));
  }
  function sn(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Rn = {
    animationend: sn("Animation", "AnimationEnd"),
    animationiteration: sn("Animation", "AnimationIteration"),
    animationstart: sn("Animation", "AnimationStart"),
    transitionrun: sn("Transition", "TransitionRun"),
    transitionstart: sn("Transition", "TransitionStart"),
    transitioncancel: sn("Transition", "TransitionCancel"),
    transitionend: sn("Transition", "TransitionEnd")
  }, $s = {}, Ho = {};
  Tt && (Ho = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
  function rn(t) {
    if ($s[t]) return $s[t];
    if (!Rn[t]) return t;
    var e = Rn[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in Ho)
        return $s[t] = e[a];
    return t;
  }
  var Vo = rn("animationend"), Go = rn("animationiteration"), Zo = rn("animationstart"), Am = rn("transitionrun"), zm = rn("transitionstart"), Mm = rn("transitioncancel"), Xo = rn("transitionend"), Ko = /* @__PURE__ */ new Map(), tr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  tr.push("scrollEnd");
  function Ma(t, e) {
    Ko.set(t, e), ja(e, [t]);
  }
  var Tu = typeof reportError == "function" ? reportError : function(t) {
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
  }, ia = [], Bn = 0, er = 0;
  function Nu() {
    for (var t = Bn, e = er = Bn = 0; e < t; ) {
      var a = ia[e];
      ia[e++] = null;
      var l = ia[e];
      ia[e++] = null;
      var n = ia[e];
      ia[e++] = null;
      var i = ia[e];
      if (ia[e++] = null, l !== null && n !== null) {
        var u = l.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
      }
      i !== 0 && Jo(a, n, i);
    }
  }
  function Cu(t, e, a, l) {
    ia[Bn++] = t, ia[Bn++] = e, ia[Bn++] = a, ia[Bn++] = l, er |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function ar(t, e, a, l) {
    return Cu(t, e, a, l), ju(t);
  }
  function cn(t, e) {
    return Cu(t, null, null, e), ju(t);
  }
  function Jo(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - le(a), t = i.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), i) : null;
  }
  function ju(t) {
    if (50 < _i)
      throw _i = 0, fc = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ln = {};
  function wm(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qe(t, e, a, l) {
    return new wm(t, e, a, l);
  }
  function lr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Fa(t, e) {
    var a = t.alternate;
    return a === null ? (a = Qe(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function Qo(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Uu(t, e, a, l, n, i) {
    var u = 0;
    if (l = t, typeof t == "function") lr(t) && (u = 1);
    else if (typeof t == "string")
      u = Up(
        t,
        a,
        Z.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ft:
          return t = Qe(31, a, e, n), t.elementType = ft, t.lanes = i, t;
        case R:
          return on(a.children, n, i, e);
        case K:
          u = 8, n |= 24;
          break;
        case _:
          return t = Qe(12, a, e, n | 2), t.elementType = _, t.lanes = i, t;
        case vt:
          return t = Qe(13, a, e, n), t.elementType = vt, t.lanes = i, t;
        case yt:
          return t = Qe(19, a, e, n), t.elementType = yt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ct:
                u = 10;
                break t;
              case Q:
                u = 9;
                break t;
              case gt:
                u = 11;
                break t;
              case Y:
                u = 14;
                break t;
              case J:
                u = 16, l = null;
                break t;
            }
          u = 29, a = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Qe(u, a, e, n), e.elementType = t, e.type = l, e.lanes = i, e;
  }
  function on(t, e, a, l) {
    return t = Qe(7, t, l, e), t.lanes = a, t;
  }
  function nr(t, e, a) {
    return t = Qe(6, t, null, e), t.lanes = a, t;
  }
  function Wo(t) {
    var e = Qe(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function ir(t, e, a) {
    return e = Qe(
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
  var Fo = /* @__PURE__ */ new WeakMap();
  function ua(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Fo.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: W(e)
      }, Fo.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: W(e)
    };
  }
  var Yn = [], Hn = 0, Du = null, Ui = 0, sa = [], ra = 0, zl = null, qa = 1, Ra = "";
  function Ia(t, e) {
    Yn[Hn++] = Ui, Yn[Hn++] = Du, Du = t, Ui = e;
  }
  function Io(t, e, a) {
    sa[ra++] = qa, sa[ra++] = Ra, sa[ra++] = zl, zl = t;
    var l = qa;
    t = Ra;
    var n = 32 - le(l) - 1;
    l &= ~(1 << n), a += 1;
    var i = 32 - le(e) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (l & (1 << u) - 1).toString(32), l >>= u, n -= u, qa = 1 << 32 - le(e) + n | a << n | l, Ra = i + t;
    } else
      qa = 1 << i | a << n | l, Ra = t;
  }
  function ur(t) {
    t.return !== null && (Ia(t, 1), Io(t, 1, 0));
  }
  function sr(t) {
    for (; t === Du; )
      Du = Yn[--Hn], Yn[Hn] = null, Ui = Yn[--Hn], Yn[Hn] = null;
    for (; t === zl; )
      zl = sa[--ra], sa[ra] = null, Ra = sa[--ra], sa[ra] = null, qa = sa[--ra], sa[ra] = null;
  }
  function Po(t, e) {
    sa[ra++] = qa, sa[ra++] = Ra, sa[ra++] = zl, qa = e.id, Ra = e.overflow, zl = t;
  }
  var xe = null, Xt = null, Nt = !1, Ml = null, ca = !1, rr = Error(r(519));
  function wl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Di(ua(e, t)), rr;
  }
  function _o(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[ne] = t, e[Me] = l, a) {
      case "dialog":
        Et("cancel", e), Et("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Et("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < tu.length; a++)
          Et(tu[a], e);
        break;
      case "source":
        Et("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Et("error", e), Et("load", e);
        break;
      case "details":
        Et("toggle", e);
        break;
      case "input":
        Et("invalid", e), an(
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
        Et("invalid", e);
        break;
      case "textarea":
        Et("invalid", e), ln(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || v0(e.textContent, a) ? (l.popover != null && (Et("beforetoggle", e), Et("toggle", e)), l.onScroll != null && Et("scroll", e), l.onScrollEnd != null && Et("scrollend", e), l.onClick != null && (e.onclick = Ea), e = !0) : e = !1, e || wl(t, !0);
  }
  function $o(t) {
    for (xe = t.return; xe; )
      switch (xe.tag) {
        case 5:
        case 31:
        case 13:
          ca = !1;
          return;
        case 27:
        case 3:
          ca = !0;
          return;
        default:
          xe = xe.return;
      }
  }
  function Vn(t) {
    if (t !== xe) return !1;
    if (!Nt) return $o(t), Nt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || wc(t.type, t.memoizedProps)), a = !a), a && Xt && wl(t), $o(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Xt = M0(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Xt = M0(t);
    } else
      e === 27 ? (e = Xt, Hl(t.type) ? (t = Uc, Uc = null, Xt = t) : Xt = e) : Xt = xe ? fa(t.stateNode.nextSibling) : null;
    return !0;
  }
  function fn() {
    Xt = xe = null, Nt = !1;
  }
  function cr() {
    var t = Ml;
    return t !== null && (He === null ? He = t : He.push.apply(
      He,
      t
    ), Ml = null), t;
  }
  function Di(t) {
    Ml === null ? Ml = [t] : Ml.push(t);
  }
  var or = b(null), dn = null, Pa = null;
  function Tl(t, e, a) {
    X(or, e._currentValue), e._currentValue = a;
  }
  function _a(t) {
    t._currentValue = or.current, D(or);
  }
  function fr(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function dr(t, e, a, l) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var g = 0; g < e.length; g++)
            if (d.context === e[g]) {
              i.lanes |= a, d = i.alternate, d !== null && (d.lanes |= a), fr(
                i.return,
                a,
                t
              ), l || (u = null);
              break t;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(r(341));
        u.lanes |= a, i = u.alternate, i !== null && (i.lanes |= a), fr(u, a, t), u = null;
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
  function Gn(t, e, a, l) {
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
          var d = n.type;
          Je(n.pendingProps.value, u.value) || (t !== null ? t.push(d) : t = [d]);
        }
      } else if (n === st.current) {
        if (u = n.alternate, u === null) throw Error(r(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(iu) : t = [iu]);
      }
      n = n.return;
    }
    t !== null && dr(
      e,
      t,
      a,
      l
    ), e.flags |= 262144;
  }
  function Ou(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Je(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function hn(t) {
    dn = t, Pa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Se(t) {
    return tf(dn, t);
  }
  function ku(t, e) {
    return dn === null && hn(t), tf(t, e);
  }
  function tf(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, Pa === null) {
      if (t === null) throw Error(r(308));
      Pa = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Pa = Pa.next = e;
    return a;
  }
  var Tm = typeof AbortController < "u" ? AbortController : function() {
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
  }, Nm = c.unstable_scheduleCallback, Cm = c.unstable_NormalPriority, ue = {
    $$typeof: ct,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hr() {
    return {
      controller: new Tm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Oi(t) {
    t.refCount--, t.refCount === 0 && Nm(Cm, function() {
      t.controller.abort();
    });
  }
  var ki = null, mr = 0, Zn = 0, Xn = null;
  function jm(t, e) {
    if (ki === null) {
      var a = ki = [];
      mr = 0, Zn = gc(), Xn = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return mr++, e.then(ef, ef), e;
  }
  function ef() {
    if (--mr === 0 && ki !== null) {
      Xn !== null && (Xn.status = "fulfilled");
      var t = ki;
      ki = null, Zn = 0, Xn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Um(t, e) {
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
  var af = C.S;
  C.S = function(t, e) {
    Hd = kt(), typeof e == "object" && e !== null && typeof e.then == "function" && jm(t, e), af !== null && af(t, e);
  };
  var mn = b(null);
  function pr() {
    var t = mn.current;
    return t !== null ? t : Gt.pooledCache;
  }
  function qu(t, e) {
    e === null ? X(mn, mn.current) : X(mn, e.pool);
  }
  function lf() {
    var t = pr();
    return t === null ? null : { parent: ue._currentValue, pool: t };
  }
  var Kn = Error(r(460)), vr = Error(r(474)), Ru = Error(r(542)), Bu = { then: function() {
  } };
  function nf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function uf(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(Ea, Ea), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, rf(t), t;
      default:
        if (typeof e.status == "string") e.then(Ea, Ea);
        else {
          if (t = Gt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, rf(t), t;
        }
        throw vn = e, Kn;
    }
  }
  function pn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (vn = a, Kn) : a;
    }
  }
  var vn = null;
  function sf() {
    if (vn === null) throw Error(r(459));
    var t = vn;
    return vn = null, t;
  }
  function rf(t) {
    if (t === Kn || t === Ru)
      throw Error(r(483));
  }
  var Jn = null, qi = 0;
  function Lu(t) {
    var e = qi;
    return qi += 1, Jn === null && (Jn = []), uf(Jn, t, e);
  }
  function Ri(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Yu(t, e) {
    throw e.$$typeof === U ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function cf(t) {
    function e(E, x) {
      if (t) {
        var z = E.deletions;
        z === null ? (E.deletions = [x], E.flags |= 16) : z.push(x);
      }
    }
    function a(E, x) {
      if (!t) return null;
      for (; x !== null; )
        e(E, x), x = x.sibling;
      return null;
    }
    function l(E) {
      for (var x = /* @__PURE__ */ new Map(); E !== null; )
        E.key !== null ? x.set(E.key, E) : x.set(E.index, E), E = E.sibling;
      return x;
    }
    function n(E, x) {
      return E = Fa(E, x), E.index = 0, E.sibling = null, E;
    }
    function i(E, x, z) {
      return E.index = z, t ? (z = E.alternate, z !== null ? (z = z.index, z < x ? (E.flags |= 67108866, x) : z) : (E.flags |= 67108866, x)) : (E.flags |= 1048576, x);
    }
    function u(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function d(E, x, z, B) {
      return x === null || x.tag !== 6 ? (x = nr(z, E.mode, B), x.return = E, x) : (x = n(x, z), x.return = E, x);
    }
    function g(E, x, z, B) {
      var it = z.type;
      return it === R ? k(
        E,
        x,
        z.props.children,
        B,
        z.key
      ) : x !== null && (x.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && pn(it) === x.type) ? (x = n(x, z.props), Ri(x, z), x.return = E, x) : (x = Uu(
        z.type,
        z.key,
        z.props,
        null,
        E.mode,
        B
      ), Ri(x, z), x.return = E, x);
    }
    function w(E, x, z, B) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== z.containerInfo || x.stateNode.implementation !== z.implementation ? (x = ir(z, E.mode, B), x.return = E, x) : (x = n(x, z.children || []), x.return = E, x);
    }
    function k(E, x, z, B, it) {
      return x === null || x.tag !== 7 ? (x = on(
        z,
        E.mode,
        B,
        it
      ), x.return = E, x) : (x = n(x, z), x.return = E, x);
    }
    function L(E, x, z) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = nr(
          "" + x,
          E.mode,
          z
        ), x.return = E, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case q:
            return z = Uu(
              x.type,
              x.key,
              x.props,
              null,
              E.mode,
              z
            ), Ri(z, x), z.return = E, z;
          case G:
            return x = ir(
              x,
              E.mode,
              z
            ), x.return = E, x;
          case J:
            return x = pn(x), L(E, x, z);
        }
        if (xt(x) || F(x))
          return x = on(
            x,
            E.mode,
            z,
            null
          ), x.return = E, x;
        if (typeof x.then == "function")
          return L(E, Lu(x), z);
        if (x.$$typeof === ct)
          return L(
            E,
            ku(E, x),
            z
          );
        Yu(E, x);
      }
      return null;
    }
    function N(E, x, z, B) {
      var it = x !== null ? x.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return it !== null ? null : d(E, x, "" + z, B);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            return z.key === it ? g(E, x, z, B) : null;
          case G:
            return z.key === it ? w(E, x, z, B) : null;
          case J:
            return z = pn(z), N(E, x, z, B);
        }
        if (xt(z) || F(z))
          return it !== null ? null : k(E, x, z, B, null);
        if (typeof z.then == "function")
          return N(
            E,
            x,
            Lu(z),
            B
          );
        if (z.$$typeof === ct)
          return N(
            E,
            x,
            ku(E, z),
            B
          );
        Yu(E, z);
      }
      return null;
    }
    function j(E, x, z, B, it) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return E = E.get(z) || null, d(x, E, "" + B, it);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case q:
            return E = E.get(
              B.key === null ? z : B.key
            ) || null, g(x, E, B, it);
          case G:
            return E = E.get(
              B.key === null ? z : B.key
            ) || null, w(x, E, B, it);
          case J:
            return B = pn(B), j(
              E,
              x,
              z,
              B,
              it
            );
        }
        if (xt(B) || F(B))
          return E = E.get(z) || null, k(x, E, B, it, null);
        if (typeof B.then == "function")
          return j(
            E,
            x,
            z,
            Lu(B),
            it
          );
        if (B.$$typeof === ct)
          return j(
            E,
            x,
            z,
            ku(x, B),
            it
          );
        Yu(x, B);
      }
      return null;
    }
    function tt(E, x, z, B) {
      for (var it = null, jt = null, at = x, pt = x = 0, zt = null; at !== null && pt < z.length; pt++) {
        at.index > pt ? (zt = at, at = null) : zt = at.sibling;
        var Ut = N(
          E,
          at,
          z[pt],
          B
        );
        if (Ut === null) {
          at === null && (at = zt);
          break;
        }
        t && at && Ut.alternate === null && e(E, at), x = i(Ut, x, pt), jt === null ? it = Ut : jt.sibling = Ut, jt = Ut, at = zt;
      }
      if (pt === z.length)
        return a(E, at), Nt && Ia(E, pt), it;
      if (at === null) {
        for (; pt < z.length; pt++)
          at = L(E, z[pt], B), at !== null && (x = i(
            at,
            x,
            pt
          ), jt === null ? it = at : jt.sibling = at, jt = at);
        return Nt && Ia(E, pt), it;
      }
      for (at = l(at); pt < z.length; pt++)
        zt = j(
          at,
          E,
          pt,
          z[pt],
          B
        ), zt !== null && (t && zt.alternate !== null && at.delete(
          zt.key === null ? pt : zt.key
        ), x = i(
          zt,
          x,
          pt
        ), jt === null ? it = zt : jt.sibling = zt, jt = zt);
      return t && at.forEach(function(Kl) {
        return e(E, Kl);
      }), Nt && Ia(E, pt), it;
    }
    function ut(E, x, z, B) {
      if (z == null) throw Error(r(151));
      for (var it = null, jt = null, at = x, pt = x = 0, zt = null, Ut = z.next(); at !== null && !Ut.done; pt++, Ut = z.next()) {
        at.index > pt ? (zt = at, at = null) : zt = at.sibling;
        var Kl = N(E, at, Ut.value, B);
        if (Kl === null) {
          at === null && (at = zt);
          break;
        }
        t && at && Kl.alternate === null && e(E, at), x = i(Kl, x, pt), jt === null ? it = Kl : jt.sibling = Kl, jt = Kl, at = zt;
      }
      if (Ut.done)
        return a(E, at), Nt && Ia(E, pt), it;
      if (at === null) {
        for (; !Ut.done; pt++, Ut = z.next())
          Ut = L(E, Ut.value, B), Ut !== null && (x = i(Ut, x, pt), jt === null ? it = Ut : jt.sibling = Ut, jt = Ut);
        return Nt && Ia(E, pt), it;
      }
      for (at = l(at); !Ut.done; pt++, Ut = z.next())
        Ut = j(at, E, pt, Ut.value, B), Ut !== null && (t && Ut.alternate !== null && at.delete(Ut.key === null ? pt : Ut.key), x = i(Ut, x, pt), jt === null ? it = Ut : jt.sibling = Ut, jt = Ut);
      return t && at.forEach(function(Gp) {
        return e(E, Gp);
      }), Nt && Ia(E, pt), it;
    }
    function Vt(E, x, z, B) {
      if (typeof z == "object" && z !== null && z.type === R && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            t: {
              for (var it = z.key; x !== null; ) {
                if (x.key === it) {
                  if (it = z.type, it === R) {
                    if (x.tag === 7) {
                      a(
                        E,
                        x.sibling
                      ), B = n(
                        x,
                        z.props.children
                      ), B.return = E, E = B;
                      break t;
                    }
                  } else if (x.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && pn(it) === x.type) {
                    a(
                      E,
                      x.sibling
                    ), B = n(x, z.props), Ri(B, z), B.return = E, E = B;
                    break t;
                  }
                  a(E, x);
                  break;
                } else e(E, x);
                x = x.sibling;
              }
              z.type === R ? (B = on(
                z.props.children,
                E.mode,
                B,
                z.key
              ), B.return = E, E = B) : (B = Uu(
                z.type,
                z.key,
                z.props,
                null,
                E.mode,
                B
              ), Ri(B, z), B.return = E, E = B);
            }
            return u(E);
          case G:
            t: {
              for (it = z.key; x !== null; ) {
                if (x.key === it)
                  if (x.tag === 4 && x.stateNode.containerInfo === z.containerInfo && x.stateNode.implementation === z.implementation) {
                    a(
                      E,
                      x.sibling
                    ), B = n(x, z.children || []), B.return = E, E = B;
                    break t;
                  } else {
                    a(E, x);
                    break;
                  }
                else e(E, x);
                x = x.sibling;
              }
              B = ir(z, E.mode, B), B.return = E, E = B;
            }
            return u(E);
          case J:
            return z = pn(z), Vt(
              E,
              x,
              z,
              B
            );
        }
        if (xt(z))
          return tt(
            E,
            x,
            z,
            B
          );
        if (F(z)) {
          if (it = F(z), typeof it != "function") throw Error(r(150));
          return z = it.call(z), ut(
            E,
            x,
            z,
            B
          );
        }
        if (typeof z.then == "function")
          return Vt(
            E,
            x,
            Lu(z),
            B
          );
        if (z.$$typeof === ct)
          return Vt(
            E,
            x,
            ku(E, z),
            B
          );
        Yu(E, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, x !== null && x.tag === 6 ? (a(E, x.sibling), B = n(x, z), B.return = E, E = B) : (a(E, x), B = nr(z, E.mode, B), B.return = E, E = B), u(E)) : a(E, x);
    }
    return function(E, x, z, B) {
      try {
        qi = 0;
        var it = Vt(
          E,
          x,
          z,
          B
        );
        return Jn = null, it;
      } catch (at) {
        if (at === Kn || at === Ru) throw at;
        var jt = Qe(29, at, null, E.mode);
        return jt.lanes = B, jt.return = E, jt;
      }
    };
  }
  var gn = cf(!0), of = cf(!1), Nl = !1;
  function gr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function yr(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Cl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function jl(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Dt & 2) !== 0) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = ju(t), Jo(t, null, a), e;
    }
    return Cu(t, l, e, a), ju(t);
  }
  function Bi(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, yi(t, a);
    }
  }
  function br(t, e) {
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
  var xr = !1;
  function Li() {
    if (xr) {
      var t = Xn;
      if (t !== null) throw t;
    }
  }
  function Yi(t, e, a, l) {
    xr = !1;
    var n = t.updateQueue;
    Nl = !1;
    var i = n.firstBaseUpdate, u = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var g = d, w = g.next;
      g.next = null, u === null ? i = w : u.next = w, u = g;
      var k = t.alternate;
      k !== null && (k = k.updateQueue, d = k.lastBaseUpdate, d !== u && (d === null ? k.firstBaseUpdate = w : d.next = w, k.lastBaseUpdate = g));
    }
    if (i !== null) {
      var L = n.baseState;
      u = 0, k = w = g = null, d = i;
      do {
        var N = d.lane & -536870913, j = N !== d.lane;
        if (j ? (At & N) === N : (l & N) === N) {
          N !== 0 && N === Zn && (xr = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          t: {
            var tt = t, ut = d;
            N = e;
            var Vt = a;
            switch (ut.tag) {
              case 1:
                if (tt = ut.payload, typeof tt == "function") {
                  L = tt.call(Vt, L, N);
                  break t;
                }
                L = tt;
                break t;
              case 3:
                tt.flags = tt.flags & -65537 | 128;
              case 0:
                if (tt = ut.payload, N = typeof tt == "function" ? tt.call(Vt, L, N) : tt, N == null) break t;
                L = T({}, L, N);
                break t;
              case 2:
                Nl = !0;
            }
          }
          N = d.callback, N !== null && (t.flags |= 64, j && (t.flags |= 8192), j = n.callbacks, j === null ? n.callbacks = [N] : j.push(N));
        } else
          j = {
            lane: N,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, k === null ? (w = k = j, g = L) : k = k.next = j, u |= N;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          j = d, d = j.next, j.next = null, n.lastBaseUpdate = j, n.shared.pending = null;
        }
      } while (!0);
      k === null && (g = L), n.baseState = g, n.firstBaseUpdate = w, n.lastBaseUpdate = k, i === null && (n.shared.lanes = 0), ql |= u, t.lanes = u, t.memoizedState = L;
    }
  }
  function ff(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function df(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        ff(a[t], e);
  }
  var Qn = b(null), Hu = b(0);
  function hf(t, e) {
    t = sl, X(Hu, t), X(Qn, e), sl = t | e.baseLanes;
  }
  function Sr() {
    X(Hu, sl), X(Qn, Qn.current);
  }
  function Er() {
    sl = Hu.current, D(Qn), D(Hu);
  }
  var We = b(null), oa = null;
  function Ul(t) {
    var e = t.alternate;
    X($t, $t.current & 1), X(We, t), oa === null && (e === null || Qn.current !== null || e.memoizedState !== null) && (oa = t);
  }
  function Ar(t) {
    X($t, $t.current), X(We, t), oa === null && (oa = t);
  }
  function mf(t) {
    t.tag === 22 ? (X($t, $t.current), X(We, t), oa === null && (oa = t)) : Dl();
  }
  function Dl() {
    X($t, $t.current), X(We, We.current);
  }
  function Fe(t) {
    D(We), oa === t && (oa = null), D($t);
  }
  var $t = b(0);
  function Vu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Cc(a) || jc(a)))
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
  var $a = 0, ht = null, Yt = null, se = null, Gu = !1, Wn = !1, yn = !1, Zu = 0, Hi = 0, Fn = null, Dm = 0;
  function It() {
    throw Error(r(321));
  }
  function zr(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Je(t[a], e[a])) return !1;
    return !0;
  }
  function Mr(t, e, a, l, n, i) {
    return $a = i, ht = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? Pf : Hr, yn = !1, i = a(l, n), yn = !1, Wn && (i = vf(
      e,
      a,
      l,
      n
    )), pf(t), i;
  }
  function pf(t) {
    C.H = Zi;
    var e = Yt !== null && Yt.next !== null;
    if ($a = 0, se = Yt = ht = null, Gu = !1, Hi = 0, Fn = null, e) throw Error(r(300));
    t === null || re || (t = t.dependencies, t !== null && Ou(t) && (re = !0));
  }
  function vf(t, e, a, l) {
    ht = t;
    var n = 0;
    do {
      if (Wn && (Fn = null), Hi = 0, Wn = !1, 25 <= n) throw Error(r(301));
      if (n += 1, se = Yt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      C.H = _f, i = e(a, l);
    } while (Wn);
    return i;
  }
  function Om() {
    var t = C.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Vi(e) : e, t = t.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== t && (ht.flags |= 1024), e;
  }
  function wr() {
    var t = Zu !== 0;
    return Zu = 0, t;
  }
  function Tr(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function Nr(t) {
    if (Gu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Gu = !1;
    }
    $a = 0, se = Yt = ht = null, Wn = !1, Hi = Zu = 0, Fn = null;
  }
  function Oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return se === null ? ht.memoizedState = se = t : se = se.next = t, se;
  }
  function te() {
    if (Yt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Yt.next;
    var e = se === null ? ht.memoizedState : se.next;
    if (e !== null)
      se = e, Yt = t;
    else {
      if (t === null)
        throw ht.alternate === null ? Error(r(467)) : Error(r(310));
      Yt = t, t = {
        memoizedState: Yt.memoizedState,
        baseState: Yt.baseState,
        baseQueue: Yt.baseQueue,
        queue: Yt.queue,
        next: null
      }, se === null ? ht.memoizedState = se = t : se = se.next = t;
    }
    return se;
  }
  function Xu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vi(t) {
    var e = Hi;
    return Hi += 1, Fn === null && (Fn = []), t = uf(Fn, t, e), e = ht, (se === null ? e.memoizedState : se.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? Pf : Hr), t;
  }
  function Ku(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Vi(t);
      if (t.$$typeof === ct) return Se(t);
    }
    throw Error(r(438, String(t)));
  }
  function Cr(t) {
    var e = null, a = ht.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = ht.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = Xu(), ht.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++)
        a[l] = dt;
    return e.index++, a;
  }
  function tl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ju(t) {
    var e = te();
    return jr(e, Yt, t);
  }
  function jr(t, e, a) {
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
      var d = u = null, g = null, w = e, k = !1;
      do {
        var L = w.lane & -536870913;
        if (L !== w.lane ? (At & L) === L : ($a & L) === L) {
          var N = w.revertLane;
          if (N === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), L === Zn && (k = !0);
          else if (($a & N) === N) {
            w = w.next, N === Zn && (k = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, g === null ? (d = g = L, u = i) : g = g.next = L, ht.lanes |= N, ql |= N;
          L = w.action, yn && a(i, L), i = w.hasEagerState ? w.eagerState : a(i, L);
        } else
          N = {
            lane: L,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, g === null ? (d = g = N, u = i) : g = g.next = N, ht.lanes |= L, ql |= L;
        w = w.next;
      } while (w !== null && w !== e);
      if (g === null ? u = i : g.next = d, !Je(i, t.memoizedState) && (re = !0, k && (a = Xn, a !== null)))
        throw a;
      t.memoizedState = i, t.baseState = u, t.baseQueue = g, l.lastRenderedState = i;
    }
    return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Ur(t) {
    var e = te(), a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, i = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== n);
      Je(i, e.memoizedState) || (re = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), a.lastRenderedState = i;
    }
    return [i, l];
  }
  function gf(t, e, a) {
    var l = ht, n = te(), i = Nt;
    if (i) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var u = !Je(
      (Yt || n).memoizedState,
      a
    );
    if (u && (n.memoizedState = a, re = !0), n = n.queue, kr(xf.bind(null, l, n, t), [
      t
    ]), n.getSnapshot !== e || u || se !== null && se.memoizedState.tag & 1) {
      if (l.flags |= 2048, In(
        9,
        { destroy: void 0 },
        bf.bind(
          null,
          l,
          n,
          a,
          e
        ),
        null
      ), Gt === null) throw Error(r(349));
      i || ($a & 127) !== 0 || yf(l, e, a);
    }
    return a;
  }
  function yf(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = ht.updateQueue, e === null ? (e = Xu(), ht.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function bf(t, e, a, l) {
    e.value = a, e.getSnapshot = l, Sf(e) && Ef(t);
  }
  function xf(t, e, a) {
    return a(function() {
      Sf(e) && Ef(t);
    });
  }
  function Sf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Je(t, a);
    } catch {
      return !0;
    }
  }
  function Ef(t) {
    var e = cn(t, 2);
    e !== null && Ve(e, t, 2);
  }
  function Dr(t) {
    var e = Oe();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), yn) {
        la(!0);
        try {
          a();
        } finally {
          la(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: t
    }, e;
  }
  function Af(t, e, a, l) {
    return t.baseState = a, jr(
      t,
      Yt,
      typeof l == "function" ? l : tl
    );
  }
  function km(t, e, a, l, n) {
    if (Fu(t)) throw Error(r(485));
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
      C.T !== null ? a(!0) : i.isTransition = !1, l(i), a = e.pending, a === null ? (i.next = e.pending = i, zf(e, i)) : (i.next = a.next, e.pending = a.next = i);
    }
  }
  function zf(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var i = C.T, u = {};
      C.T = u;
      try {
        var d = a(n, l), g = C.S;
        g !== null && g(u, d), Mf(t, e, d);
      } catch (w) {
        Or(t, e, w);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), C.T = i;
      }
    } else
      try {
        i = a(n, l), Mf(t, e, i);
      } catch (w) {
        Or(t, e, w);
      }
  }
  function Mf(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        wf(t, e, l);
      },
      function(l) {
        return Or(t, e, l);
      }
    ) : wf(t, e, a);
  }
  function wf(t, e, a) {
    e.status = "fulfilled", e.value = a, Tf(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, zf(t, a)));
  }
  function Or(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, Tf(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Tf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Nf(t, e) {
    return e;
  }
  function Cf(t, e) {
    if (Nt) {
      var a = Gt.formState;
      if (a !== null) {
        t: {
          var l = ht;
          if (Nt) {
            if (Xt) {
              e: {
                for (var n = Xt, i = ca; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = fa(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Xt = fa(
                  n.nextSibling
                ), l = n.data === "F!";
                break t;
              }
            }
            wl(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return a = Oe(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nf,
      lastRenderedState: e
    }, a.queue = l, a = Wf.bind(
      null,
      ht,
      l
    ), l.dispatch = a, l = Dr(!1), i = Yr.bind(
      null,
      ht,
      !1,
      l.queue
    ), l = Oe(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = km.bind(
      null,
      ht,
      n,
      i,
      a
    ), n.dispatch = a, l.memoizedState = t, [e, a, !1];
  }
  function jf(t) {
    var e = te();
    return Uf(e, Yt, t);
  }
  function Uf(t, e, a) {
    if (e = jr(
      t,
      e,
      Nf
    )[0], t = Ju(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Vi(e);
      } catch (u) {
        throw u === Kn ? Ru : u;
      }
    else l = e;
    e = te();
    var n = e.queue, i = n.dispatch;
    return a !== e.memoizedState && (ht.flags |= 2048, In(
      9,
      { destroy: void 0 },
      qm.bind(null, n, a),
      null
    )), [l, i, t];
  }
  function qm(t, e) {
    t.action = e;
  }
  function Df(t) {
    var e = te(), a = Yt;
    if (a !== null)
      return Uf(e, a, t);
    te(), e = e.memoizedState, a = te();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [e, l, !1];
  }
  function In(t, e, a, l) {
    return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = ht.updateQueue, e === null && (e = Xu(), ht.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function Of() {
    return te().memoizedState;
  }
  function Qu(t, e, a, l) {
    var n = Oe();
    ht.flags |= t, n.memoizedState = In(
      1 | e,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Wu(t, e, a, l) {
    var n = te();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    Yt !== null && l !== null && zr(l, Yt.memoizedState.deps) ? n.memoizedState = In(e, i, a, l) : (ht.flags |= t, n.memoizedState = In(
      1 | e,
      i,
      a,
      l
    ));
  }
  function kf(t, e) {
    Qu(8390656, 8, t, e);
  }
  function kr(t, e) {
    Wu(2048, 8, t, e);
  }
  function Rm(t) {
    ht.flags |= 4;
    var e = ht.updateQueue;
    if (e === null)
      e = Xu(), ht.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function qf(t) {
    var e = te().memoizedState;
    return Rm({ ref: e, nextImpl: t }), function() {
      if ((Dt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Rf(t, e) {
    return Wu(4, 2, t, e);
  }
  function Bf(t, e) {
    return Wu(4, 4, t, e);
  }
  function Lf(t, e) {
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
  function Yf(t, e, a) {
    a = a != null ? a.concat([t]) : null, Wu(4, 4, Lf.bind(null, e, t), a);
  }
  function qr() {
  }
  function Hf(t, e) {
    var a = te();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && zr(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
  }
  function Vf(t, e) {
    var a = te();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && zr(e, l[1]))
      return l[0];
    if (l = t(), yn) {
      la(!0);
      try {
        t();
      } finally {
        la(!1);
      }
    }
    return a.memoizedState = [l, e], l;
  }
  function Rr(t, e, a) {
    return a === void 0 || ($a & 1073741824) !== 0 && (At & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Gd(), ht.lanes |= t, ql |= t, a);
  }
  function Gf(t, e, a, l) {
    return Je(a, e) ? a : Qn.current !== null ? (t = Rr(t, a, l), Je(t, e) || (re = !0), t) : ($a & 42) === 0 || ($a & 1073741824) !== 0 && (At & 261930) === 0 ? (re = !0, t.memoizedState = a) : (t = Gd(), ht.lanes |= t, ql |= t, e);
  }
  function Zf(t, e, a, l, n) {
    var i = H.p;
    H.p = i !== 0 && 8 > i ? i : 8;
    var u = C.T, d = {};
    C.T = d, Yr(t, !1, e, a);
    try {
      var g = n(), w = C.S;
      if (w !== null && w(d, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var k = Um(
          g,
          l
        );
        Gi(
          t,
          e,
          k,
          _e(t)
        );
      } else
        Gi(
          t,
          e,
          l,
          _e(t)
        );
    } catch (L) {
      Gi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: L },
        _e()
      );
    } finally {
      H.p = i, u !== null && d.types !== null && (u.types = d.types), C.T = u;
    }
  }
  function Bm() {
  }
  function Br(t, e, a, l) {
    if (t.tag !== 5) throw Error(r(476));
    var n = Xf(t).queue;
    Zf(
      t,
      n,
      e,
      $,
      a === null ? Bm : function() {
        return Kf(t), a(l);
      }
    );
  }
  function Xf(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: $
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
        lastRenderedReducer: tl,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Kf(t) {
    var e = Xf(t);
    e.next === null && (e = t.alternate.memoizedState), Gi(
      t,
      e.next.queue,
      {},
      _e()
    );
  }
  function Lr() {
    return Se(iu);
  }
  function Jf() {
    return te().memoizedState;
  }
  function Qf() {
    return te().memoizedState;
  }
  function Lm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = _e();
          t = Cl(a);
          var l = jl(e, t, a);
          l !== null && (Ve(l, e, a), Bi(l, e, a)), e = { cache: hr() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Ym(t, e, a) {
    var l = _e();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fu(t) ? Ff(e, a) : (a = ar(t, e, a, l), a !== null && (Ve(a, t, l), If(a, e, l)));
  }
  function Wf(t, e, a) {
    var l = _e();
    Gi(t, e, a, l);
  }
  function Gi(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fu(t)) Ff(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var u = e.lastRenderedState, d = i(u, a);
          if (n.hasEagerState = !0, n.eagerState = d, Je(d, u))
            return Cu(t, e, n, 0), Gt === null && Nu(), !1;
        } catch {
        }
      if (a = ar(t, e, n, l), a !== null)
        return Ve(a, t, l), If(a, e, l), !0;
    }
    return !1;
  }
  function Yr(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: gc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fu(t)) {
      if (e) throw Error(r(479));
    } else
      e = ar(
        t,
        a,
        l,
        2
      ), e !== null && Ve(e, t, 2);
  }
  function Fu(t) {
    var e = t.alternate;
    return t === ht || e !== null && e === ht;
  }
  function Ff(t, e) {
    Wn = Gu = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function If(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, yi(t, a);
    }
  }
  var Zi = {
    readContext: Se,
    use: Ku,
    useCallback: It,
    useContext: It,
    useEffect: It,
    useImperativeHandle: It,
    useLayoutEffect: It,
    useInsertionEffect: It,
    useMemo: It,
    useReducer: It,
    useRef: It,
    useState: It,
    useDebugValue: It,
    useDeferredValue: It,
    useTransition: It,
    useSyncExternalStore: It,
    useId: It,
    useHostTransitionStatus: It,
    useFormState: It,
    useActionState: It,
    useOptimistic: It,
    useMemoCache: It,
    useCacheRefresh: It
  };
  Zi.useEffectEvent = It;
  var Pf = {
    readContext: Se,
    use: Ku,
    useCallback: function(t, e) {
      return Oe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Se,
    useEffect: kf,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Qu(
        4194308,
        4,
        Lf.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return Qu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Qu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Oe();
      e = e === void 0 ? null : e;
      var l = t();
      if (yn) {
        la(!0);
        try {
          t();
        } finally {
          la(!1);
        }
      }
      return a.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, a) {
      var l = Oe();
      if (a !== void 0) {
        var n = a(e);
        if (yn) {
          la(!0);
          try {
            a(e);
          } finally {
            la(!1);
          }
        }
      } else n = e;
      return l.memoizedState = l.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, l.queue = t, t = t.dispatch = Ym.bind(
        null,
        ht,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = Oe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Dr(t);
      var e = t.queue, a = Wf.bind(null, ht, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: qr,
    useDeferredValue: function(t, e) {
      var a = Oe();
      return Rr(a, t, e);
    },
    useTransition: function() {
      var t = Dr(!1);
      return t = Zf.bind(
        null,
        ht,
        t.queue,
        !0,
        !1
      ), Oe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = ht, n = Oe();
      if (Nt) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = e(), Gt === null)
          throw Error(r(349));
        (At & 127) !== 0 || yf(l, e, a);
      }
      n.memoizedState = a;
      var i = { value: a, getSnapshot: e };
      return n.queue = i, kf(xf.bind(null, l, i, t), [
        t
      ]), l.flags |= 2048, In(
        9,
        { destroy: void 0 },
        bf.bind(
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
      var t = Oe(), e = Gt.identifierPrefix;
      if (Nt) {
        var a = Ra, l = qa;
        a = (l & ~(1 << 32 - le(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = Zu++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = Dm++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Lr,
    useFormState: Cf,
    useActionState: Cf,
    useOptimistic: function(t) {
      var e = Oe();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Yr.bind(
        null,
        ht,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: Cr,
    useCacheRefresh: function() {
      return Oe().memoizedState = Lm.bind(
        null,
        ht
      );
    },
    useEffectEvent: function(t) {
      var e = Oe(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Dt & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Hr = {
    readContext: Se,
    use: Ku,
    useCallback: Hf,
    useContext: Se,
    useEffect: kr,
    useImperativeHandle: Yf,
    useInsertionEffect: Rf,
    useLayoutEffect: Bf,
    useMemo: Vf,
    useReducer: Ju,
    useRef: Of,
    useState: function() {
      return Ju(tl);
    },
    useDebugValue: qr,
    useDeferredValue: function(t, e) {
      var a = te();
      return Gf(
        a,
        Yt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ju(tl)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : Vi(t),
        e
      ];
    },
    useSyncExternalStore: gf,
    useId: Jf,
    useHostTransitionStatus: Lr,
    useFormState: jf,
    useActionState: jf,
    useOptimistic: function(t, e) {
      var a = te();
      return Af(a, Yt, t, e);
    },
    useMemoCache: Cr,
    useCacheRefresh: Qf
  };
  Hr.useEffectEvent = qf;
  var _f = {
    readContext: Se,
    use: Ku,
    useCallback: Hf,
    useContext: Se,
    useEffect: kr,
    useImperativeHandle: Yf,
    useInsertionEffect: Rf,
    useLayoutEffect: Bf,
    useMemo: Vf,
    useReducer: Ur,
    useRef: Of,
    useState: function() {
      return Ur(tl);
    },
    useDebugValue: qr,
    useDeferredValue: function(t, e) {
      var a = te();
      return Yt === null ? Rr(a, t, e) : Gf(
        a,
        Yt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ur(tl)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : Vi(t),
        e
      ];
    },
    useSyncExternalStore: gf,
    useId: Jf,
    useHostTransitionStatus: Lr,
    useFormState: Df,
    useActionState: Df,
    useOptimistic: function(t, e) {
      var a = te();
      return Yt !== null ? Af(a, Yt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: Cr,
    useCacheRefresh: Qf
  };
  _f.useEffectEvent = qf;
  function Vr(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : T({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Gr = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = _e(), n = Cl(l);
      n.payload = e, a != null && (n.callback = a), e = jl(t, n, l), e !== null && (Ve(e, t, l), Bi(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = _e(), n = Cl(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = jl(t, n, l), e !== null && (Ve(e, t, l), Bi(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = _e(), l = Cl(a);
      l.tag = 2, e != null && (l.callback = e), e = jl(t, l, a), e !== null && (Ve(e, t, a), Bi(e, t, a));
    }
  };
  function $f(t, e, a, l, n, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, i, u) : e.prototype && e.prototype.isPureReactComponent ? !Ci(a, l) || !Ci(n, i) : !0;
  }
  function td(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && Gr.enqueueReplaceState(e, e.state, null);
  }
  function bn(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e)
        l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = T({}, a));
      for (var n in t)
        a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function ed(t) {
    Tu(t);
  }
  function ad(t) {
    console.error(t);
  }
  function ld(t) {
    Tu(t);
  }
  function Iu(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function nd(t, e, a) {
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
  function Zr(t, e, a) {
    return a = Cl(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Iu(t, e);
    }, a;
  }
  function id(t) {
    return t = Cl(t), t.tag = 3, t;
  }
  function ud(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        nd(e, a, l);
      };
    }
    var u = a.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      nd(e, a, l), typeof n != "function" && (Rl === null ? Rl = /* @__PURE__ */ new Set([this]) : Rl.add(this));
      var d = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Hm(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && Gn(
        e,
        a,
        n,
        !0
      ), a = We.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return oa === null ? rs() : a.alternate === null && Pt === 0 && (Pt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Bu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), mc(t, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Bu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), mc(t, l, n)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return mc(t, l, n), rs(), !1;
    }
    if (Nt)
      return e = We.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== rr && (t = Error(r(422), { cause: l }), Di(ua(t, a)))) : (l !== rr && (e = Error(r(423), {
        cause: l
      }), Di(
        ua(e, a)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = ua(l, a), n = Zr(
        t.stateNode,
        l,
        n
      ), br(t, n), Pt !== 4 && (Pt = 2)), !1;
    var i = Error(r(520), { cause: l });
    if (i = ua(i, a), Pi === null ? Pi = [i] : Pi.push(i), Pt !== 4 && (Pt = 2), e === null) return !0;
    l = ua(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = Zr(a.stateNode, l, t), br(a, t), !1;
        case 1:
          if (e = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Rl === null || !Rl.has(i))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = id(n), ud(
              n,
              t,
              a,
              l
            ), br(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Xr = Error(r(461)), re = !1;
  function Ee(t, e, a, l) {
    e.child = t === null ? of(e, null, a, l) : gn(
      e,
      t.child,
      a,
      l
    );
  }
  function sd(t, e, a, l, n) {
    a = a.render;
    var i = e.ref;
    if ("ref" in l) {
      var u = {};
      for (var d in l)
        d !== "ref" && (u[d] = l[d]);
    } else u = l;
    return hn(e), l = Mr(
      t,
      e,
      a,
      u,
      i,
      n
    ), d = wr(), t !== null && !re ? (Tr(t, e, n), el(t, e, n)) : (Nt && d && ur(e), e.flags |= 1, Ee(t, e, l, n), e.child);
  }
  function rd(t, e, a, l, n) {
    if (t === null) {
      var i = a.type;
      return typeof i == "function" && !lr(i) && i.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = i, cd(
        t,
        e,
        i,
        l,
        n
      )) : (t = Uu(
        a.type,
        null,
        l,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !_r(t, n)) {
      var u = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ci, a(u, l) && t.ref === e.ref)
        return el(t, e, n);
    }
    return e.flags |= 1, t = Fa(i, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function cd(t, e, a, l, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Ci(i, l) && t.ref === e.ref)
        if (re = !1, e.pendingProps = l = i, _r(t, n))
          (t.flags & 131072) !== 0 && (re = !0);
        else
          return e.lanes = t.lanes, el(t, e, n);
    }
    return Kr(
      t,
      e,
      a,
      l,
      n
    );
  }
  function od(t, e, a, l) {
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
        return fd(
          t,
          e,
          i,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && qu(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? hf(e, i) : Sr(), mf(e);
      else
        return l = e.lanes = 536870912, fd(
          t,
          e,
          i !== null ? i.baseLanes | a : a,
          a,
          l
        );
    } else
      i !== null ? (qu(e, i.cachePool), hf(e, i), Dl(), e.memoizedState = null) : (t !== null && qu(e, null), Sr(), Dl());
    return Ee(t, e, n, a), e.child;
  }
  function Xi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function fd(t, e, a, l, n) {
    var i = pr();
    return i = i === null ? null : { parent: ue._currentValue, pool: i }, e.memoizedState = {
      baseLanes: a,
      cachePool: i
    }, t !== null && qu(e, null), Sr(), mf(e), t !== null && Gn(t, e, l, !0), e.childLanes = n, null;
  }
  function Pu(t, e) {
    return e = $u(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function dd(t, e, a) {
    return gn(e, t.child, null, a), t = Pu(e, e.pendingProps), t.flags |= 2, Fe(e), e.memoizedState = null, t;
  }
  function Vm(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Nt) {
        if (l.mode === "hidden")
          return t = Pu(e, l), e.lanes = 536870912, Xi(null, t);
        if (Ar(e), (t = Xt) ? (t = z0(
          t,
          ca
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: zl !== null ? { id: qa, overflow: Ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Wo(t), a.return = e, e.child = a, xe = e, Xt = null)) : t = null, t === null) throw wl(e);
        return e.lanes = 536870912, null;
      }
      return Pu(e, l);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (Ar(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = dd(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (re || Gn(t, e, a, !1), n = (a & t.childLanes) !== 0, re || n) {
        if (l = Gt, l !== null && (u = Mn(l, a), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, cn(t, u), Ve(l, t, u), Xr;
        rs(), e = dd(
          t,
          e,
          a
        );
      } else
        t = i.treeContext, Xt = fa(u.nextSibling), xe = e, Nt = !0, Ml = null, ca = !1, t !== null && Po(e, t), e = Pu(e, l), e.flags |= 4096;
      return e;
    }
    return t = Fa(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function _u(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Kr(t, e, a, l, n) {
    return hn(e), a = Mr(
      t,
      e,
      a,
      l,
      void 0,
      n
    ), l = wr(), t !== null && !re ? (Tr(t, e, n), el(t, e, n)) : (Nt && l && ur(e), e.flags |= 1, Ee(t, e, a, n), e.child);
  }
  function hd(t, e, a, l, n, i) {
    return hn(e), e.updateQueue = null, a = vf(
      e,
      l,
      a,
      n
    ), pf(t), l = wr(), t !== null && !re ? (Tr(t, e, i), el(t, e, i)) : (Nt && l && ur(e), e.flags |= 1, Ee(t, e, a, i), e.child);
  }
  function md(t, e, a, l, n) {
    if (hn(e), e.stateNode === null) {
      var i = Ln, u = a.contextType;
      typeof u == "object" && u !== null && (i = Se(u)), i = new a(l, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Gr, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = l, i.state = e.memoizedState, i.refs = {}, gr(e), u = a.contextType, i.context = typeof u == "object" && u !== null ? Se(u) : Ln, i.state = e.memoizedState, u = a.getDerivedStateFromProps, typeof u == "function" && (Vr(
        e,
        a,
        u,
        l
      ), i.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Gr.enqueueReplaceState(i, i.state, null), Yi(e, l, i, n), Li(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      i = e.stateNode;
      var d = e.memoizedProps, g = bn(a, d);
      i.props = g;
      var w = i.context, k = a.contextType;
      u = Ln, typeof k == "object" && k !== null && (u = Se(k));
      var L = a.getDerivedStateFromProps;
      k = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = e.pendingProps !== d, k || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || w !== u) && td(
        e,
        i,
        l,
        u
      ), Nl = !1;
      var N = e.memoizedState;
      i.state = N, Yi(e, l, i, n), Li(), w = e.memoizedState, d || N !== w || Nl ? (typeof L == "function" && (Vr(
        e,
        a,
        L,
        l
      ), w = e.memoizedState), (g = Nl || $f(
        e,
        a,
        g,
        l,
        N,
        w,
        u
      )) ? (k || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = w), i.props = l, i.state = w, i.context = u, l = g) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      i = e.stateNode, yr(t, e), u = e.memoizedProps, k = bn(a, u), i.props = k, L = e.pendingProps, N = i.context, w = a.contextType, g = Ln, typeof w == "object" && w !== null && (g = Se(w)), d = a.getDerivedStateFromProps, (w = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== L || N !== g) && td(
        e,
        i,
        l,
        g
      ), Nl = !1, N = e.memoizedState, i.state = N, Yi(e, l, i, n), Li();
      var j = e.memoizedState;
      u !== L || N !== j || Nl || t !== null && t.dependencies !== null && Ou(t.dependencies) ? (typeof d == "function" && (Vr(
        e,
        a,
        d,
        l
      ), j = e.memoizedState), (k = Nl || $f(
        e,
        a,
        k,
        l,
        N,
        j,
        g
      ) || t !== null && t.dependencies !== null && Ou(t.dependencies)) ? (w || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, j, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        j,
        g
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = j), i.props = l, i.state = j, i.context = g, l = k) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return i = l, _u(t, e), l = (e.flags & 128) !== 0, i || l ? (i = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && l ? (e.child = gn(
      e,
      t.child,
      null,
      n
    ), e.child = gn(
      e,
      null,
      a,
      n
    )) : Ee(t, e, a, n), e.memoizedState = i.state, t = e.child) : t = el(
      t,
      e,
      n
    ), t;
  }
  function pd(t, e, a, l) {
    return fn(), e.flags |= 256, Ee(t, e, a, l), e.child;
  }
  var Jr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qr(t) {
    return { baseLanes: t, cachePool: lf() };
  }
  function Wr(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Pe), t;
  }
  function vd(t, e, a) {
    var l = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : ($t.current & 2) !== 0), u && (n = !0, e.flags &= -129), u = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Nt) {
        if (n ? Ul(e) : Dl(), (t = Xt) ? (t = z0(
          t,
          ca
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: zl !== null ? { id: qa, overflow: Ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Wo(t), a.return = e, e.child = a, xe = e, Xt = null)) : t = null, t === null) throw wl(e);
        return jc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var d = l.children;
      return l = l.fallback, n ? (Dl(), n = e.mode, d = $u(
        { mode: "hidden", children: d },
        n
      ), l = on(
        l,
        n,
        a,
        null
      ), d.return = e, l.return = e, d.sibling = l, e.child = d, l = e.child, l.memoizedState = Qr(a), l.childLanes = Wr(
        t,
        u,
        a
      ), e.memoizedState = Jr, Xi(null, l)) : (Ul(e), Fr(e, d));
    }
    var g = t.memoizedState;
    if (g !== null && (d = g.dehydrated, d !== null)) {
      if (i)
        e.flags & 256 ? (Ul(e), e.flags &= -257, e = Ir(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (Dl(), e.child = t.child, e.flags |= 128, e = null) : (Dl(), d = l.fallback, n = e.mode, l = $u(
          { mode: "visible", children: l.children },
          n
        ), d = on(
          d,
          n,
          a,
          null
        ), d.flags |= 2, l.return = e, d.return = e, l.sibling = d, e.child = l, gn(
          e,
          t.child,
          null,
          a
        ), l = e.child, l.memoizedState = Qr(a), l.childLanes = Wr(
          t,
          u,
          a
        ), e.memoizedState = Jr, e = Xi(null, l));
      else if (Ul(e), jc(d)) {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var w = u.dgst;
        u = w, l = Error(r(419)), l.stack = "", l.digest = u, Di({ value: l, source: null, stack: null }), e = Ir(
          t,
          e,
          a
        );
      } else if (re || Gn(t, e, a, !1), u = (a & t.childLanes) !== 0, re || u) {
        if (u = Gt, u !== null && (l = Mn(u, a), l !== 0 && l !== g.retryLane))
          throw g.retryLane = l, cn(t, l), Ve(u, t, l), Xr;
        Cc(d) || rs(), e = Ir(
          t,
          e,
          a
        );
      } else
        Cc(d) ? (e.flags |= 192, e.child = t.child, e = null) : (t = g.treeContext, Xt = fa(
          d.nextSibling
        ), xe = e, Nt = !0, Ml = null, ca = !1, t !== null && Po(e, t), e = Fr(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (Dl(), d = l.fallback, n = e.mode, g = t.child, w = g.sibling, l = Fa(g, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = g.subtreeFlags & 65011712, w !== null ? d = Fa(
      w,
      d
    ) : (d = on(
      d,
      n,
      a,
      null
    ), d.flags |= 2), d.return = e, l.return = e, l.sibling = d, e.child = l, Xi(null, l), l = e.child, d = t.child.memoizedState, d === null ? d = Qr(a) : (n = d.cachePool, n !== null ? (g = ue._currentValue, n = n.parent !== g ? { parent: g, pool: g } : n) : n = lf(), d = {
      baseLanes: d.baseLanes | a,
      cachePool: n
    }), l.memoizedState = d, l.childLanes = Wr(
      t,
      u,
      a
    ), e.memoizedState = Jr, Xi(t.child, l)) : (Ul(e), a = t.child, t = a.sibling, a = Fa(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (u = e.deletions, u === null ? (e.deletions = [t], e.flags |= 16) : u.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function Fr(t, e) {
    return e = $u(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function $u(t, e) {
    return t = Qe(22, t, null, e), t.lanes = 0, t;
  }
  function Ir(t, e, a) {
    return gn(e, t.child, null, a), t = Fr(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function gd(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), fr(t.return, e, a);
  }
  function Pr(t, e, a, l, n, i) {
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
  function yd(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, i = l.tail;
    l = l.children;
    var u = $t.current, d = (u & 2) !== 0;
    if (d ? (u = u & 1 | 2, e.flags |= 128) : u &= 1, X($t, u), Ee(t, e, l, a), l = Nt ? Ui : 0, !d && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && gd(t, a, e);
        else if (t.tag === 19)
          gd(t, a, e);
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
          t = a.alternate, t !== null && Vu(t) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), Pr(
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
          if (t = n.alternate, t !== null && Vu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        Pr(
          e,
          !0,
          a,
          null,
          i,
          l
        );
        break;
      case "together":
        Pr(
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
  function el(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), ql |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (Gn(
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
      for (t = e.child, a = Fa(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = Fa(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function _r(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ou(t)));
  }
  function Gm(t, e, a) {
    switch (e.tag) {
      case 3:
        Bt(e, e.stateNode.containerInfo), Tl(e, ue, t.memoizedState.cache), fn();
        break;
      case 27:
      case 5:
        pa(e);
        break;
      case 4:
        Bt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Tl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Ar(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Ul(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? vd(t, e, a) : (Ul(e), t = el(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        Ul(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (l = (a & e.childLanes) !== 0, l || (Gn(
          t,
          e,
          a,
          !1
        ), l = (a & e.childLanes) !== 0), n) {
          if (l)
            return yd(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), X($t, $t.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, od(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        Tl(e, ue, t.memoizedState.cache);
    }
    return el(t, e, a);
  }
  function bd(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        re = !0;
      else {
        if (!_r(t, a) && (e.flags & 128) === 0)
          return re = !1, Gm(
            t,
            e,
            a
          );
        re = (t.flags & 131072) !== 0;
      }
    else
      re = !1, Nt && (e.flags & 1048576) !== 0 && Io(e, Ui, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = pn(e.elementType), e.type = t, typeof t == "function")
            lr(t) ? (l = bn(t, l), e.tag = 1, e = md(
              null,
              e,
              t,
              l,
              a
            )) : (e.tag = 0, e = Kr(
              null,
              e,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === gt) {
                e.tag = 11, e = sd(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === Y) {
                e.tag = 14, e = rd(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              }
            }
            throw e = Mt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Kr(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return l = e.type, n = bn(
          l,
          e.pendingProps
        ), md(
          t,
          e,
          l,
          n,
          a
        );
      case 3:
        t: {
          if (Bt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          l = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, yr(t, e), Yi(e, l, null, a);
          var u = e.memoizedState;
          if (l = u.cache, Tl(e, ue, l), l !== i.cache && dr(
            e,
            [ue],
            a,
            !0
          ), Li(), l = u.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = pd(
                t,
                e,
                l,
                a
              );
              break t;
            } else if (l !== n) {
              n = ua(
                Error(r(424)),
                e
              ), Di(n), e = pd(
                t,
                e,
                l,
                a
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Xt = fa(t.firstChild), xe = e, Nt = !0, Ml = null, ca = !0, a = of(
                e,
                null,
                l,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (fn(), l === n) {
              e = el(
                t,
                e,
                a
              );
              break t;
            }
            Ee(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return _u(t, e), t === null ? (a = j0(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : Nt || (a = e.type, t = e.pendingProps, l = ps(
          nt.current
        ).createElement(a), l[ne] = e, l[Me] = t, Ae(l, a, t), ie(l), e.stateNode = l) : e.memoizedState = j0(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return pa(e), t === null && Nt && (l = e.stateNode = T0(
          e.type,
          e.pendingProps,
          nt.current
        ), xe = e, ca = !0, n = Xt, Hl(e.type) ? (Uc = n, Xt = fa(l.firstChild)) : Xt = n), Ee(
          t,
          e,
          e.pendingProps.children,
          a
        ), _u(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Nt && ((n = l = Xt) && (l = yp(
          l,
          e.type,
          e.pendingProps,
          ca
        ), l !== null ? (e.stateNode = l, xe = e, Xt = fa(l.firstChild), ca = !1, n = !0) : n = !1), n || wl(e)), pa(e), n = e.type, i = e.pendingProps, u = t !== null ? t.memoizedProps : null, l = i.children, wc(n, i) ? l = null : u !== null && wc(n, u) && (e.flags |= 32), e.memoizedState !== null && (n = Mr(
          t,
          e,
          Om,
          null,
          null,
          a
        ), iu._currentValue = n), _u(t, e), Ee(t, e, l, a), e.child;
      case 6:
        return t === null && Nt && ((t = a = Xt) && (a = bp(
          a,
          e.pendingProps,
          ca
        ), a !== null ? (e.stateNode = a, xe = e, Xt = null, t = !0) : t = !1), t || wl(e)), null;
      case 13:
        return vd(t, e, a);
      case 4:
        return Bt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = gn(
          e,
          null,
          l,
          a
        ) : Ee(t, e, l, a), e.child;
      case 11:
        return sd(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return Ee(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return Ee(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return Ee(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return l = e.pendingProps, Tl(e, e.type, l.value), Ee(t, e, l.children, a), e.child;
      case 9:
        return n = e.type._context, l = e.pendingProps.children, hn(e), n = Se(n), l = l(n), e.flags |= 1, Ee(t, e, l, a), e.child;
      case 14:
        return rd(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return cd(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return yd(t, e, a);
      case 31:
        return Vm(t, e, a);
      case 22:
        return od(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return hn(e), l = Se(ue), t === null ? (n = pr(), n === null && (n = Gt, i = hr(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), e.memoizedState = { parent: l, cache: n }, gr(e), Tl(e, ue, n)) : ((t.lanes & a) !== 0 && (yr(t, e), Yi(e, null, null, a), Li()), n = t.memoizedState, i = e.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), Tl(e, ue, l)) : (l = i.cache, Tl(e, ue, l), l !== n.cache && dr(
          e,
          [ue],
          a,
          !0
        ))), Ee(
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
  function al(t) {
    t.flags |= 4;
  }
  function $r(t, e, a, l, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Jd()) t.flags |= 8192;
        else
          throw vn = Bu, vr;
    } else t.flags &= -16777217;
  }
  function xd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !q0(e))
      if (Jd()) t.flags |= 8192;
      else
        throw vn = Bu, vr;
  }
  function ts(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ga() : 536870912, t.lanes |= e, ti |= e);
  }
  function Ki(t, e) {
    if (!Nt)
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
  function Kt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
    if (e)
      for (var n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= l, t.childLanes = a, e;
  }
  function Zm(t, e, a) {
    var l = e.pendingProps;
    switch (sr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Kt(e), null;
      case 1:
        return Kt(e), null;
      case 3:
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), _a(ue), Ot(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Vn(e) ? al(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, cr())), Kt(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (al(e), i !== null ? (Kt(e), xd(e, i)) : (Kt(e), $r(
          e,
          n,
          null,
          l,
          a
        ))) : i ? i !== t.memoizedState ? (al(e), Kt(e), xd(e, i)) : (Kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && al(e), Kt(e), $r(
          e,
          n,
          t,
          l,
          a
        )), null;
      case 27:
        if (ee(e), a = nt.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && al(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), null;
          }
          t = Z.current, Vn(e) ? _o(e) : (t = T0(n, l, a), e.stateNode = t, al(e));
        }
        return Kt(e), null;
      case 5:
        if (ee(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && al(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), null;
          }
          if (i = Z.current, Vn(e))
            _o(e);
          else {
            var u = ps(
              nt.current
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
            i[ne] = e, i[Me] = l;
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
            t: switch (Ae(i, n, l), n) {
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
            l && al(e);
          }
        }
        return Kt(e), $r(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && al(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = nt.current, Vn(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = xe, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            t[ne] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || v0(t.nodeValue, a)), t || wl(e, !0);
          } else
            t = ps(t).createTextNode(
              l
            ), t[ne] = e, e.stateNode = t;
        }
        return Kt(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = Vn(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[ne] = e;
            } else
              fn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), t = !1;
          } else
            a = cr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (Fe(e), e) : (Fe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Kt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Vn(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[ne] = e;
            } else
              fn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), n = !1;
          } else
            n = cr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (Fe(e), e) : (Fe(e), null);
        }
        return Fe(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), ts(e, e.updateQueue), Kt(e), null);
      case 4:
        return Ot(), t === null && Sc(e.stateNode.containerInfo), Kt(e), null;
      case 10:
        return _a(e.type), Kt(e), null;
      case 19:
        if (D($t), l = e.memoizedState, l === null) return Kt(e), null;
        if (n = (e.flags & 128) !== 0, i = l.rendering, i === null)
          if (n) Ki(l, !1);
          else {
            if (Pt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Vu(t), i !== null) {
                  for (e.flags |= 128, Ki(l, !1), t = i.updateQueue, e.updateQueue = t, ts(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    Qo(a, t), a = a.sibling;
                  return X(
                    $t,
                    $t.current & 1 | 2
                  ), Nt && Ia(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && kt() > is && (e.flags |= 128, n = !0, Ki(l, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Vu(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, ts(e, t), Ki(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Nt)
                return Kt(e), null;
            } else
              2 * kt() - l.renderingStartTime > is && a !== 536870912 && (e.flags |= 128, n = !0, Ki(l, !1), e.lanes = 4194304);
          l.isBackwards ? (i.sibling = e.child, e.child = i) : (t = l.last, t !== null ? t.sibling = i : e.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = kt(), t.sibling = null, a = $t.current, X(
          $t,
          n ? a & 1 | 2 : a & 1
        ), Nt && Ia(e, l.treeForkCount), t) : (Kt(e), null);
      case 22:
      case 23:
        return Fe(e), Er(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Kt(e), a = e.updateQueue, a !== null && ts(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && D(mn), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), _a(ue), Kt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Xm(t, e) {
    switch (sr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return _a(ue), Ot(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ee(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Fe(e), e.alternate === null)
            throw Error(r(340));
          fn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Fe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          fn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return D($t), null;
      case 4:
        return Ot(), null;
      case 10:
        return _a(e.type), null;
      case 22:
      case 23:
        return Fe(e), Er(), t !== null && D(mn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return _a(ue), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sd(t, e) {
    switch (sr(e), e.tag) {
      case 3:
        _a(ue), Ot();
        break;
      case 26:
      case 27:
      case 5:
        ee(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && Fe(e);
        break;
      case 13:
        Fe(e);
        break;
      case 19:
        D($t);
        break;
      case 10:
        _a(e.type);
        break;
      case 22:
      case 23:
        Fe(e), Er(), t !== null && D(mn);
        break;
      case 24:
        _a(ue);
    }
  }
  function Ji(t, e) {
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
    } catch (d) {
      Rt(e, e.return, d);
    }
  }
  function Ol(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & t) === t) {
            var u = l.inst, d = u.destroy;
            if (d !== void 0) {
              u.destroy = void 0, n = e;
              var g = a, w = d;
              try {
                w();
              } catch (k) {
                Rt(
                  n,
                  g,
                  k
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (k) {
      Rt(e, e.return, k);
    }
  }
  function Ed(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        df(e, a);
      } catch (l) {
        Rt(t, t.return, l);
      }
    }
  }
  function Ad(t, e, a) {
    a.props = bn(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Rt(t, e, l);
    }
  }
  function Qi(t, e) {
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
      Rt(t, e, n);
    }
  }
  function Ba(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          Rt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          Rt(t, e, n);
        }
      else a.current = null;
  }
  function zd(t) {
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
      Rt(t, t.return, n);
    }
  }
  function tc(t, e, a) {
    try {
      var l = t.stateNode;
      dp(l, t.type, a, e), l[Me] = e;
    } catch (n) {
      Rt(t, t.return, n);
    }
  }
  function Md(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hl(t.type) || t.tag === 4;
  }
  function ec(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Md(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Hl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ac(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = Ea));
    else if (l !== 4 && (l === 27 && Hl(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (ac(t, e, a), t = t.sibling; t !== null; )
        ac(t, e, a), t = t.sibling;
  }
  function es(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (l !== 4 && (l === 27 && Hl(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (es(t, e, a), t = t.sibling; t !== null; )
        es(t, e, a), t = t.sibling;
  }
  function wd(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Ae(e, l, a), e[ne] = t, e[Me] = a;
    } catch (i) {
      Rt(t, t.return, i);
    }
  }
  var ll = !1, ce = !1, lc = !1, Td = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Km(t, e) {
    if (t = t.containerInfo, zc = Es, t = Lo(t), Is(t)) {
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
            var u = 0, d = -1, g = -1, w = 0, k = 0, L = t, N = null;
            e: for (; ; ) {
              for (var j; L !== a || n !== 0 && L.nodeType !== 3 || (d = u + n), L !== i || l !== 0 && L.nodeType !== 3 || (g = u + l), L.nodeType === 3 && (u += L.nodeValue.length), (j = L.firstChild) !== null; )
                N = L, L = j;
              for (; ; ) {
                if (L === t) break e;
                if (N === a && ++w === n && (d = u), N === i && ++k === l && (g = u), (j = L.nextSibling) !== null) break;
                L = N, N = L.parentNode;
              }
              L = j;
            }
            a = d === -1 || g === -1 ? null : { start: d, end: g };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Mc = { focusedElem: t, selectionRange: a }, Es = !1, ve = e; ve !== null; )
      if (e = ve, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ve = t;
      else
        for (; ve !== null; ) {
          switch (e = ve, i = e.alternate, t = e.flags, e.tag) {
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
                  var tt = bn(
                    a.type,
                    n
                  );
                  t = l.getSnapshotBeforeUpdate(
                    tt,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (ut) {
                  Rt(
                    a,
                    a.return,
                    ut
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9)
                  Nc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Nc(t);
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
            t.return = e.return, ve = t;
            break;
          }
          ve = e.return;
        }
  }
  function Nd(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        il(t, a), l & 4 && Ji(5, a);
        break;
      case 1:
        if (il(t, a), l & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (u) {
              Rt(a, a.return, u);
            }
          else {
            var n = bn(
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
              Rt(
                a,
                a.return,
                u
              );
            }
          }
        l & 64 && Ed(a), l & 512 && Qi(a, a.return);
        break;
      case 3:
        if (il(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
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
            df(t, e);
          } catch (u) {
            Rt(a, a.return, u);
          }
        }
        break;
      case 27:
        e === null && l & 4 && wd(a);
      case 26:
      case 5:
        il(t, a), e === null && l & 4 && zd(a), l & 512 && Qi(a, a.return);
        break;
      case 12:
        il(t, a);
        break;
      case 31:
        il(t, a), l & 4 && Ud(t, a);
        break;
      case 13:
        il(t, a), l & 4 && Dd(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = tp.bind(
          null,
          a
        ), xp(t, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || ll, !l) {
          e = e !== null && e.memoizedState !== null || ce, n = ll;
          var i = ce;
          ll = l, (ce = e) && !i ? ul(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : il(t, a), ll = n, ce = i;
        }
        break;
      case 30:
        break;
      default:
        il(t, a);
    }
  }
  function Cd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Cd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ba(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Qt = null, Be = !1;
  function nl(t, e, a) {
    for (a = a.child; a !== null; )
      jd(t, e, a), a = a.sibling;
  }
  function jd(t, e, a) {
    if (ye && typeof ye.onCommitFiberUnmount == "function")
      try {
        ye.onCommitFiberUnmount(hl, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        ce || Ba(a, e), nl(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        ce || Ba(a, e);
        var l = Qt, n = Be;
        Hl(a.type) && (Qt = a.stateNode, Be = !1), nl(
          t,
          e,
          a
        ), au(a.stateNode), Qt = l, Be = n;
        break;
      case 5:
        ce || Ba(a, e);
      case 6:
        if (l = Qt, n = Be, Qt = null, nl(
          t,
          e,
          a
        ), Qt = l, Be = n, Qt !== null)
          if (Be)
            try {
              (Qt.nodeType === 9 ? Qt.body : Qt.nodeName === "HTML" ? Qt.ownerDocument.body : Qt).removeChild(a.stateNode);
            } catch (i) {
              Rt(
                a,
                e,
                i
              );
            }
          else
            try {
              Qt.removeChild(a.stateNode);
            } catch (i) {
              Rt(
                a,
                e,
                i
              );
            }
        break;
      case 18:
        Qt !== null && (Be ? (t = Qt, E0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), ri(t)) : E0(Qt, a.stateNode));
        break;
      case 4:
        l = Qt, n = Be, Qt = a.stateNode.containerInfo, Be = !0, nl(
          t,
          e,
          a
        ), Qt = l, Be = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, a, e), ce || Ol(4, a, e), nl(
          t,
          e,
          a
        );
        break;
      case 1:
        ce || (Ba(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && Ad(
          a,
          e,
          l
        )), nl(
          t,
          e,
          a
        );
        break;
      case 21:
        nl(
          t,
          e,
          a
        );
        break;
      case 22:
        ce = (l = ce) || a.memoizedState !== null, nl(
          t,
          e,
          a
        ), ce = l;
        break;
      default:
        nl(
          t,
          e,
          a
        );
    }
  }
  function Ud(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ri(t);
      } catch (a) {
        Rt(e, e.return, a);
      }
    }
  }
  function Dd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ri(t);
      } catch (a) {
        Rt(e, e.return, a);
      }
  }
  function Jm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Td()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Td()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function as(t, e) {
    var a = Jm(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = ep.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function Le(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], i = t, u = e, d = u;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Hl(d.type)) {
                Qt = d.stateNode, Be = !1;
                break t;
              }
              break;
            case 5:
              Qt = d.stateNode, Be = !1;
              break t;
            case 3:
            case 4:
              Qt = d.stateNode.containerInfo, Be = !0;
              break t;
          }
          d = d.return;
        }
        if (Qt === null) throw Error(r(160));
        jd(i, u, n), Qt = null, Be = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Od(e, t), e = e.sibling;
  }
  var wa = null;
  function Od(t, e) {
    var a = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Le(e, t), Ye(t), l & 4 && (Ol(3, t, t.return), Ji(3, t), Ol(5, t, t.return));
        break;
      case 1:
        Le(e, t), Ye(t), l & 512 && (ce || a === null || Ba(a, a.return)), l & 64 && ll && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = wa;
        if (Le(e, t), Ye(t), l & 512 && (ce || a === null || Ba(a, a.return)), l & 4) {
          var i = a !== null ? a.memoizedState : null;
          if (l = t.memoizedState, a === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, a = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (l) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Ca] || i[ne] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Ae(i, l, a), i[ne] = t, ie(i), l = i;
                      break t;
                    case "link":
                      var u = O0(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (u) {
                        for (var d = 0; d < u.length; d++)
                          if (i = u[d], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            u.splice(d, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), Ae(i, l, a), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = O0(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (d = 0; d < u.length; d++)
                          if (i = u[d], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            u.splice(d, 1);
                            break e;
                          }
                      }
                      i = n.createElement(l), Ae(i, l, a), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  i[ne] = t, ie(i), l = i;
                }
                t.stateNode = l;
              } else
                k0(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = D0(
                n,
                l,
                t.memoizedProps
              );
          else
            i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? k0(
              n,
              t.type,
              t.stateNode
            ) : D0(
              n,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && tc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Le(e, t), Ye(t), l & 512 && (ce || a === null || Ba(a, a.return)), a !== null && l & 4 && tc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Le(e, t), Ye(t), l & 512 && (ce || a === null || Ba(a, a.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Sa(n, "");
          } catch (tt) {
            Rt(t, t.return, tt);
          }
        }
        l & 4 && t.stateNode != null && (n = t.memoizedProps, tc(
          t,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (lc = !0);
        break;
      case 6:
        if (Le(e, t), Ye(t), l & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          l = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = l;
          } catch (tt) {
            Rt(t, t.return, tt);
          }
        }
        break;
      case 3:
        if (ys = null, n = wa, wa = vs(e.containerInfo), Le(e, t), wa = n, Ye(t), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ri(e.containerInfo);
          } catch (tt) {
            Rt(t, t.return, tt);
          }
        lc && (lc = !1, kd(t));
        break;
      case 4:
        l = wa, wa = vs(
          t.stateNode.containerInfo
        ), Le(e, t), Ye(t), wa = l;
        break;
      case 12:
        Le(e, t), Ye(t);
        break;
      case 31:
        Le(e, t), Ye(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, as(t, l)));
        break;
      case 13:
        Le(e, t), Ye(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ns = kt()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, as(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var g = a !== null && a.memoizedState !== null, w = ll, k = ce;
        if (ll = w || n, ce = k || g, Le(e, t), ce = k, ll = w, Ye(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (a === null || g || ll || ce || xn(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                g = a = e;
                try {
                  if (i = g.stateNode, n)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    d = g.stateNode;
                    var L = g.memoizedProps.style, N = L != null && L.hasOwnProperty("display") ? L.display : null;
                    d.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (tt) {
                  Rt(g, g.return, tt);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                g = e;
                try {
                  g.stateNode.nodeValue = n ? "" : g.memoizedProps;
                } catch (tt) {
                  Rt(g, g.return, tt);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                g = e;
                try {
                  var j = g.stateNode;
                  n ? A0(j, !0) : A0(g.stateNode, !1);
                } catch (tt) {
                  Rt(g, g.return, tt);
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
        l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, as(t, a))));
        break;
      case 19:
        Le(e, t), Ye(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, as(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Le(e, t), Ye(t);
    }
  }
  function Ye(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Md(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, i = ec(t);
            es(t, i, n);
            break;
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (Sa(u, ""), a.flags &= -33);
            var d = ec(t);
            es(t, d, u);
            break;
          case 3:
          case 4:
            var g = a.stateNode.containerInfo, w = ec(t);
            ac(
              t,
              w,
              g
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (k) {
        Rt(t, t.return, k);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function kd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        kd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function il(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Nd(t, e.alternate, e), e = e.sibling;
  }
  function xn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(4, e, e.return), xn(e);
          break;
        case 1:
          Ba(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Ad(
            e,
            e.return,
            a
          ), xn(e);
          break;
        case 27:
          au(e.stateNode);
        case 26:
        case 5:
          Ba(e, e.return), xn(e);
          break;
        case 22:
          e.memoizedState === null && xn(e);
          break;
        case 30:
          xn(e);
          break;
        default:
          xn(e);
      }
      t = t.sibling;
    }
  }
  function ul(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, n = t, i = e, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ul(
            n,
            i,
            a
          ), Ji(4, i);
          break;
        case 1:
          if (ul(
            n,
            i,
            a
          ), l = i, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (w) {
              Rt(l, l.return, w);
            }
          if (l = i, n = l.updateQueue, n !== null) {
            var d = l.stateNode;
            try {
              var g = n.shared.hiddenCallbacks;
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  ff(g[n], d);
            } catch (w) {
              Rt(l, l.return, w);
            }
          }
          a && u & 64 && Ed(i), Qi(i, i.return);
          break;
        case 27:
          wd(i);
        case 26:
        case 5:
          ul(
            n,
            i,
            a
          ), a && l === null && u & 4 && zd(i), Qi(i, i.return);
          break;
        case 12:
          ul(
            n,
            i,
            a
          );
          break;
        case 31:
          ul(
            n,
            i,
            a
          ), a && u & 4 && Ud(n, i);
          break;
        case 13:
          ul(
            n,
            i,
            a
          ), a && u & 4 && Dd(n, i);
          break;
        case 22:
          i.memoizedState === null && ul(
            n,
            i,
            a
          ), Qi(i, i.return);
          break;
        case 30:
          break;
        default:
          ul(
            n,
            i,
            a
          );
      }
      e = e.sibling;
    }
  }
  function nc(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Oi(a));
  }
  function ic(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Oi(t));
  }
  function Ta(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        qd(
          t,
          e,
          a,
          l
        ), e = e.sibling;
  }
  function qd(t, e, a, l) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ta(
          t,
          e,
          a,
          l
        ), n & 2048 && Ji(9, e);
        break;
      case 1:
        Ta(
          t,
          e,
          a,
          l
        );
        break;
      case 3:
        Ta(
          t,
          e,
          a,
          l
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Oi(t)));
        break;
      case 12:
        if (n & 2048) {
          Ta(
            t,
            e,
            a,
            l
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, u = i.id, d = i.onPostCommit;
            typeof d == "function" && d(
              u,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Rt(e, e.return, g);
          }
        } else
          Ta(
            t,
            e,
            a,
            l
          );
        break;
      case 31:
        Ta(
          t,
          e,
          a,
          l
        );
        break;
      case 13:
        Ta(
          t,
          e,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, u = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Ta(
          t,
          e,
          a,
          l
        ) : Wi(t, e) : i._visibility & 2 ? Ta(
          t,
          e,
          a,
          l
        ) : (i._visibility |= 2, Pn(
          t,
          e,
          a,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && nc(u, e);
        break;
      case 24:
        Ta(
          t,
          e,
          a,
          l
        ), n & 2048 && ic(e.alternate, e);
        break;
      default:
        Ta(
          t,
          e,
          a,
          l
        );
    }
  }
  function Pn(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, u = e, d = a, g = l, w = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pn(
            i,
            u,
            d,
            g,
            n
          ), Ji(8, u);
          break;
        case 23:
          break;
        case 22:
          var k = u.stateNode;
          u.memoizedState !== null ? k._visibility & 2 ? Pn(
            i,
            u,
            d,
            g,
            n
          ) : Wi(
            i,
            u
          ) : (k._visibility |= 2, Pn(
            i,
            u,
            d,
            g,
            n
          )), n && w & 2048 && nc(
            u.alternate,
            u
          );
          break;
        case 24:
          Pn(
            i,
            u,
            d,
            g,
            n
          ), n && w & 2048 && ic(u.alternate, u);
          break;
        default:
          Pn(
            i,
            u,
            d,
            g,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Wi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, l = e, n = l.flags;
        switch (l.tag) {
          case 22:
            Wi(a, l), n & 2048 && nc(
              l.alternate,
              l
            );
            break;
          case 24:
            Wi(a, l), n & 2048 && ic(l.alternate, l);
            break;
          default:
            Wi(a, l);
        }
        e = e.sibling;
      }
  }
  var Fi = 8192;
  function _n(t, e, a) {
    if (t.subtreeFlags & Fi)
      for (t = t.child; t !== null; )
        Rd(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function Rd(t, e, a) {
    switch (t.tag) {
      case 26:
        _n(
          t,
          e,
          a
        ), t.flags & Fi && t.memoizedState !== null && Dp(
          a,
          wa,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        _n(
          t,
          e,
          a
        );
        break;
      case 3:
      case 4:
        var l = wa;
        wa = vs(t.stateNode.containerInfo), _n(
          t,
          e,
          a
        ), wa = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Fi, Fi = 16777216, _n(
          t,
          e,
          a
        ), Fi = l) : _n(
          t,
          e,
          a
        ));
        break;
      default:
        _n(
          t,
          e,
          a
        );
    }
  }
  function Bd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ii(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ve = l, Yd(
            l,
            t
          );
        }
      Bd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ld(t), t = t.sibling;
  }
  function Ld(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ii(t), t.flags & 2048 && Ol(9, t, t.return);
        break;
      case 3:
        Ii(t);
        break;
      case 12:
        Ii(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ls(t)) : Ii(t);
        break;
      default:
        Ii(t);
    }
  }
  function ls(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ve = l, Yd(
            l,
            t
          );
        }
      Bd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, e, e.return), ls(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, ls(e));
          break;
        default:
          ls(e);
      }
      t = t.sibling;
    }
  }
  function Yd(t, e) {
    for (; ve !== null; ) {
      var a = ve;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Oi(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ve = l;
      else
        t: for (a = t; ve !== null; ) {
          l = ve;
          var n = l.sibling, i = l.return;
          if (Cd(l), l === a) {
            ve = null;
            break t;
          }
          if (n !== null) {
            n.return = i, ve = n;
            break t;
          }
          ve = i;
        }
    }
  }
  var Qm = {
    getCacheForType: function(t) {
      var e = Se(ue), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return Se(ue).controller.signal;
    }
  }, Wm = typeof WeakMap == "function" ? WeakMap : Map, Dt = 0, Gt = null, St = null, At = 0, qt = 0, Ie = null, kl = !1, $n = !1, uc = !1, sl = 0, Pt = 0, ql = 0, Sn = 0, sc = 0, Pe = 0, ti = 0, Pi = null, He = null, rc = !1, ns = 0, Hd = 0, is = 1 / 0, us = null, Rl = null, he = 0, Bl = null, ei = null, rl = 0, cc = 0, oc = null, Vd = null, _i = 0, fc = null;
  function _e() {
    return (Dt & 2) !== 0 && At !== 0 ? At & -At : C.T !== null ? gc() : Tn();
  }
  function Gd() {
    if (Pe === 0)
      if ((At & 536870912) === 0 || Nt) {
        var t = Na;
        Na <<= 1, (Na & 3932160) === 0 && (Na = 262144), Pe = t;
      } else Pe = 536870912;
    return t = We.current, t !== null && (t.flags |= 32), Pe;
  }
  function Ve(t, e, a) {
    (t === Gt && (qt === 2 || qt === 9) || t.cancelPendingCommit !== null) && (ai(t, 0), Ll(
      t,
      At,
      Pe,
      !1
    )), ga(t, a), ((Dt & 2) === 0 || t !== Gt) && (t === Gt && ((Dt & 2) === 0 && (Sn |= a), Pt === 4 && Ll(
      t,
      At,
      Pe,
      !1
    )), La(t));
  }
  function Zd(t, e, a) {
    if ((Dt & 6) !== 0) throw Error(r(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || va(t, e), n = l ? Pm(t, e) : hc(t, e, !0), i = l;
    do {
      if (n === 0) {
        $n && !l && Ll(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, i && !Fm(a)) {
          n = hc(t, e, !1), i = !1;
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
              var d = t;
              n = Pi;
              var g = d.current.memoizedState.isDehydrated;
              if (g && (ai(d, u).flags |= 256), u = hc(
                d,
                u,
                !1
              ), u !== 2) {
                if (uc && !g) {
                  d.errorRecoveryDisabledLanes |= i, Sn |= i, n = 4;
                  break t;
                }
                i = He, He = n, i !== null && (He === null ? He = i : He.push.apply(
                  He,
                  i
                ));
              }
              n = u;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          ai(t, 0), Ll(t, e, 0, !0);
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
              Ll(
                l,
                e,
                Pe,
                !kl
              );
              break t;
            case 2:
              He = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (n = ns + 300 - kt(), 10 < n)) {
            if (Ll(
              l,
              e,
              Pe,
              !kl
            ), Pl(l, 0, !0) !== 0) break t;
            rl = e, l.timeoutHandle = x0(
              Xd.bind(
                null,
                l,
                a,
                He,
                us,
                rc,
                e,
                Pe,
                Sn,
                ti,
                kl,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Xd(
            l,
            a,
            He,
            us,
            rc,
            e,
            Pe,
            Sn,
            ti,
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
    La(t);
  }
  function Xd(t, e, a, l, n, i, u, d, g, w, k, L, N, j) {
    if (t.timeoutHandle = -1, L = e.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ea
      }, Rd(
        e,
        i,
        L
      );
      var tt = (i & 62914560) === i ? ns - kt() : (i & 4194048) === i ? Hd - kt() : 0;
      if (tt = Op(
        L,
        tt
      ), tt !== null) {
        rl = i, t.cancelPendingCommit = tt(
          _d.bind(
            null,
            t,
            e,
            i,
            a,
            l,
            n,
            u,
            d,
            g,
            k,
            L,
            null,
            N,
            j
          )
        ), Ll(t, i, u, !w);
        return;
      }
    }
    _d(
      t,
      e,
      i,
      a,
      l,
      n,
      u,
      d,
      g
    );
  }
  function Fm(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], i = n.getSnapshot;
          n = n.value;
          try {
            if (!Je(i(), n)) return !1;
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
  function Ll(t, e, a, l) {
    e &= ~sc, e &= ~Sn, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - le(n), u = 1 << i;
      l[i] = -1, n &= ~u;
    }
    a !== 0 && gi(t, a, e);
  }
  function ss() {
    return (Dt & 6) === 0 ? ($i(0), !1) : !0;
  }
  function dc() {
    if (St !== null) {
      if (qt === 0)
        var t = St.return;
      else
        t = St, Pa = dn = null, Nr(t), Jn = null, qi = 0, t = St;
      for (; t !== null; )
        Sd(t.alternate, t), t = t.return;
      St = null;
    }
  }
  function ai(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, pp(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), rl = 0, dc(), Gt = t, St = a = Fa(t.current, null), At = e, qt = 0, Ie = null, kl = !1, $n = va(t, e), uc = !1, ti = Pe = sc = Sn = ql = Pt = 0, He = Pi = null, rc = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var n = 31 - le(l), i = 1 << n;
        e |= t[n], l &= ~i;
      }
    return sl = e, Nu(), a;
  }
  function Kd(t, e) {
    ht = null, C.H = Zi, e === Kn || e === Ru ? (e = sf(), qt = 3) : e === vr ? (e = sf(), qt = 4) : qt = e === Xr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ie = e, St === null && (Pt = 1, Iu(
      t,
      ua(e, t.current)
    ));
  }
  function Jd() {
    var t = We.current;
    return t === null ? !0 : (At & 4194048) === At ? oa === null : (At & 62914560) === At || (At & 536870912) !== 0 ? t === oa : !1;
  }
  function Qd() {
    var t = C.H;
    return C.H = Zi, t === null ? Zi : t;
  }
  function Wd() {
    var t = C.A;
    return C.A = Qm, t;
  }
  function rs() {
    Pt = 4, kl || (At & 4194048) !== At && We.current !== null || ($n = !0), (ql & 134217727) === 0 && (Sn & 134217727) === 0 || Gt === null || Ll(
      Gt,
      At,
      Pe,
      !1
    );
  }
  function hc(t, e, a) {
    var l = Dt;
    Dt |= 2;
    var n = Qd(), i = Wd();
    (Gt !== t || At !== e) && (us = null, ai(t, e)), e = !1;
    var u = Pt;
    t: do
      try {
        if (qt !== 0 && St !== null) {
          var d = St, g = Ie;
          switch (qt) {
            case 8:
              dc(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              We.current === null && (e = !0);
              var w = qt;
              if (qt = 0, Ie = null, li(t, d, g, w), a && $n) {
                u = 0;
                break t;
              }
              break;
            default:
              w = qt, qt = 0, Ie = null, li(t, d, g, w);
          }
        }
        Im(), u = Pt;
        break;
      } catch (k) {
        Kd(t, k);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Pa = dn = null, Dt = l, C.H = n, C.A = i, St === null && (Gt = null, At = 0, Nu()), u;
  }
  function Im() {
    for (; St !== null; ) Fd(St);
  }
  function Pm(t, e) {
    var a = Dt;
    Dt |= 2;
    var l = Qd(), n = Wd();
    Gt !== t || At !== e ? (us = null, is = kt() + 500, ai(t, e)) : $n = va(
      t,
      e
    );
    t: do
      try {
        if (qt !== 0 && St !== null) {
          e = St;
          var i = Ie;
          e: switch (qt) {
            case 1:
              qt = 0, Ie = null, li(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (nf(i)) {
                qt = 0, Ie = null, Id(e);
                break;
              }
              e = function() {
                qt !== 2 && qt !== 9 || Gt !== t || (qt = 7), La(t);
              }, i.then(e, e);
              break t;
            case 3:
              qt = 7;
              break t;
            case 4:
              qt = 5;
              break t;
            case 7:
              nf(i) ? (qt = 0, Ie = null, Id(e)) : (qt = 0, Ie = null, li(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (St.tag) {
                case 26:
                  u = St.memoizedState;
                case 5:
                case 27:
                  var d = St;
                  if (u ? q0(u) : d.stateNode.complete) {
                    qt = 0, Ie = null;
                    var g = d.sibling;
                    if (g !== null) St = g;
                    else {
                      var w = d.return;
                      w !== null ? (St = w, cs(w)) : St = null;
                    }
                    break e;
                  }
              }
              qt = 0, Ie = null, li(t, e, i, 5);
              break;
            case 6:
              qt = 0, Ie = null, li(t, e, i, 6);
              break;
            case 8:
              dc(), Pt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        _m();
        break;
      } catch (k) {
        Kd(t, k);
      }
    while (!0);
    return Pa = dn = null, C.H = l, C.A = n, Dt = a, St !== null ? 0 : (Gt = null, At = 0, Nu(), Pt);
  }
  function _m() {
    for (; St !== null && !ge(); )
      Fd(St);
  }
  function Fd(t) {
    var e = bd(t.alternate, t, sl);
    t.memoizedProps = t.pendingProps, e === null ? cs(t) : St = e;
  }
  function Id(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = hd(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          At
        );
        break;
      case 11:
        e = hd(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          At
        );
        break;
      case 5:
        Nr(e);
      default:
        Sd(a, e), e = St = Qo(e, sl), e = bd(a, e, sl);
    }
    t.memoizedProps = t.pendingProps, e === null ? cs(t) : St = e;
  }
  function li(t, e, a, l) {
    Pa = dn = null, Nr(e), Jn = null, qi = 0;
    var n = e.return;
    try {
      if (Hm(
        t,
        n,
        e,
        a,
        At
      )) {
        Pt = 1, Iu(
          t,
          ua(a, t.current)
        ), St = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw St = n, i;
      Pt = 1, Iu(
        t,
        ua(a, t.current)
      ), St = null;
      return;
    }
    e.flags & 32768 ? (Nt || l === 1 ? t = !0 : $n || (At & 536870912) !== 0 ? t = !1 : (kl = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = We.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Pd(e, t)) : cs(e);
  }
  function cs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Pd(
          e,
          kl
        );
        return;
      }
      t = e.return;
      var a = Zm(
        e.alternate,
        e,
        sl
      );
      if (a !== null) {
        St = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        St = e;
        return;
      }
      St = e = t;
    } while (e !== null);
    Pt === 0 && (Pt = 5);
  }
  function Pd(t, e) {
    do {
      var a = Xm(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, St = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        St = t;
        return;
      }
      St = t = a;
    } while (t !== null);
    Pt = 6, St = null;
  }
  function _d(t, e, a, l, n, i, u, d, g) {
    t.cancelPendingCommit = null;
    do
      os();
    while (he !== 0);
    if ((Dt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (i = e.lanes | e.childLanes, i |= er, Gs(
        t,
        a,
        i,
        u,
        d,
        g
      ), t === Gt && (St = Gt = null, At = 0), ei = e, Bl = t, rl = a, cc = i, oc = n, Vd = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ap(Wt, function() {
        return l0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null, n = H.p, H.p = 2, u = Dt, Dt |= 4;
        try {
          Km(t, e, a);
        } finally {
          Dt = u, H.p = n, C.T = l;
        }
      }
      he = 1, $d(), t0(), e0();
    }
  }
  function $d() {
    if (he === 1) {
      he = 0;
      var t = Bl, e = ei, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = C.T, C.T = null;
        var l = H.p;
        H.p = 2;
        var n = Dt;
        Dt |= 4;
        try {
          Od(e, t);
          var i = Mc, u = Lo(t.containerInfo), d = i.focusedElem, g = i.selectionRange;
          if (u !== d && d && d.ownerDocument && Bo(
            d.ownerDocument.documentElement,
            d
          )) {
            if (g !== null && Is(d)) {
              var w = g.start, k = g.end;
              if (k === void 0 && (k = w), "selectionStart" in d)
                d.selectionStart = w, d.selectionEnd = Math.min(
                  k,
                  d.value.length
                );
              else {
                var L = d.ownerDocument || document, N = L && L.defaultView || window;
                if (N.getSelection) {
                  var j = N.getSelection(), tt = d.textContent.length, ut = Math.min(g.start, tt), Vt = g.end === void 0 ? ut : Math.min(g.end, tt);
                  !j.extend && ut > Vt && (u = Vt, Vt = ut, ut = u);
                  var E = Ro(
                    d,
                    ut
                  ), x = Ro(
                    d,
                    Vt
                  );
                  if (E && x && (j.rangeCount !== 1 || j.anchorNode !== E.node || j.anchorOffset !== E.offset || j.focusNode !== x.node || j.focusOffset !== x.offset)) {
                    var z = L.createRange();
                    z.setStart(E.node, E.offset), j.removeAllRanges(), ut > Vt ? (j.addRange(z), j.extend(x.node, x.offset)) : (z.setEnd(x.node, x.offset), j.addRange(z));
                  }
                }
              }
            }
            for (L = [], j = d; j = j.parentNode; )
              j.nodeType === 1 && L.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < L.length; d++) {
              var B = L[d];
              B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
            }
          }
          Es = !!zc, Mc = zc = null;
        } finally {
          Dt = n, H.p = l, C.T = a;
        }
      }
      t.current = e, he = 2;
    }
  }
  function t0() {
    if (he === 2) {
      he = 0;
      var t = Bl, e = ei, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = C.T, C.T = null;
        var l = H.p;
        H.p = 2;
        var n = Dt;
        Dt |= 4;
        try {
          Nd(t, e.alternate, e);
        } finally {
          Dt = n, H.p = l, C.T = a;
        }
      }
      he = 3;
    }
  }
  function e0() {
    if (he === 4 || he === 3) {
      he = 0, ke();
      var t = Bl, e = ei, a = rl, l = Vd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? he = 5 : (he = 0, ei = Bl = null, a0(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Rl = null), _l(a), e = e.stateNode, ye && typeof ye.onCommitFiberRoot == "function")
        try {
          ye.onCommitFiberRoot(
            hl,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = C.T, n = H.p, H.p = 2, C.T = null;
        try {
          for (var i = t.onRecoverableError, u = 0; u < l.length; u++) {
            var d = l[u];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          C.T = e, H.p = n;
        }
      }
      (rl & 3) !== 0 && os(), La(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === fc ? _i++ : (_i = 0, fc = t) : _i = 0, $i(0);
    }
  }
  function a0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Oi(e)));
  }
  function os() {
    return $d(), t0(), e0(), l0();
  }
  function l0() {
    if (he !== 5) return !1;
    var t = Bl, e = cc;
    cc = 0;
    var a = _l(rl), l = C.T, n = H.p;
    try {
      H.p = 32 > a ? 32 : a, C.T = null, a = oc, oc = null;
      var i = Bl, u = rl;
      if (he = 0, ei = Bl = null, rl = 0, (Dt & 6) !== 0) throw Error(r(331));
      var d = Dt;
      if (Dt |= 4, Ld(i.current), qd(
        i,
        i.current,
        u,
        a
      ), Dt = d, $i(0, !1), ye && typeof ye.onPostCommitFiberRoot == "function")
        try {
          ye.onPostCommitFiberRoot(hl, i);
        } catch {
        }
      return !0;
    } finally {
      H.p = n, C.T = l, a0(t, e);
    }
  }
  function n0(t, e, a) {
    e = ua(a, e), e = Zr(t.stateNode, e, 2), t = jl(t, e, 2), t !== null && (ga(t, 2), La(t));
  }
  function Rt(t, e, a) {
    if (t.tag === 3)
      n0(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          n0(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Rl === null || !Rl.has(l))) {
            t = ua(a, t), a = id(2), l = jl(e, a, 2), l !== null && (ud(
              a,
              l,
              e,
              t
            ), ga(l, 2), La(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function mc(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Wm();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else
      n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (uc = !0, n.add(a), t = $m.bind(null, t, e, a), e.then(t, t));
  }
  function $m(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Gt === t && (At & a) === a && (Pt === 4 || Pt === 3 && (At & 62914560) === At && 300 > kt() - ns ? (Dt & 2) === 0 && ai(t, 0) : sc |= a, ti === At && (ti = 0)), La(t);
  }
  function i0(t, e) {
    e === 0 && (e = Ga()), t = cn(t, e), t !== null && (ga(t, e), La(t));
  }
  function tp(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), i0(t, a);
  }
  function ep(t, e) {
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
    l !== null && l.delete(e), i0(t, a);
  }
  function ap(t, e) {
    return wt(t, e);
  }
  var fs = null, ni = null, pc = !1, ds = !1, vc = !1, Yl = 0;
  function La(t) {
    t !== ni && t.next === null && (ni === null ? fs = ni = t : ni = ni.next = t), ds = !0, pc || (pc = !0, np());
  }
  function $i(t, e) {
    if (!vc && ds) {
      vc = !0;
      do
        for (var a = !1, l = fs; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = l.suspendedLanes, d = l.pingedLanes;
              i = (1 << 31 - le(42 | t) + 1) - 1, i &= n & ~(u & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = !0, c0(l, i));
          } else
            i = At, i = Pl(
              l,
              l === Gt ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || va(l, i) || (a = !0, c0(l, i));
          l = l.next;
        }
      while (a);
      vc = !1;
    }
  }
  function lp() {
    u0();
  }
  function u0() {
    ds = pc = !1;
    var t = 0;
    Yl !== 0 && mp() && (t = Yl);
    for (var e = kt(), a = null, l = fs; l !== null; ) {
      var n = l.next, i = s0(l, e);
      i === 0 ? (l.next = null, a === null ? fs = n : a.next = n, n === null && (ni = a)) : (a = l, (t !== 0 || (i & 3) !== 0) && (ds = !0)), l = n;
    }
    he !== 0 && he !== 5 || $i(t), Yl !== 0 && (Yl = 0);
  }
  function s0(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - le(i), d = 1 << u, g = n[u];
      g === -1 ? ((d & a) === 0 || (d & l) !== 0) && (n[u] = ml(d, e)) : g <= e && (t.expiredLanes |= d), i &= ~d;
    }
    if (e = Gt, a = At, a = Pl(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, a === 0 || t === e && (qt === 2 || qt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && Lt(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || va(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && Lt(l), _l(a)) {
        case 2:
        case 8:
          a = Ft;
          break;
        case 32:
          a = Wt;
          break;
        case 268435456:
          a = ea;
          break;
        default:
          a = Wt;
      }
      return l = r0.bind(null, t), a = wt(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && Lt(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function r0(t, e) {
    if (he !== 0 && he !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (os() && t.callbackNode !== a)
      return null;
    var l = At;
    return l = Pl(
      t,
      t === Gt ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (Zd(t, l, e), s0(t, kt()), t.callbackNode != null && t.callbackNode === a ? r0.bind(null, t) : null);
  }
  function c0(t, e) {
    if (os()) return null;
    Zd(t, e, !0);
  }
  function np() {
    vp(function() {
      (Dt & 6) !== 0 ? wt(
        oe,
        lp
      ) : u0();
    });
  }
  function gc() {
    if (Yl === 0) {
      var t = Zn;
      t === 0 && (t = na, na <<= 1, (na & 261888) === 0 && (na = 256)), Yl = t;
    }
    return Yl;
  }
  function o0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Un("" + t);
  }
  function f0(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function ip(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var i = o0(
        (n[Me] || null).action
      ), u = l.submitter;
      u && (e = (e = u[Me] || null) ? o0(e.formAction) : u.getAttribute("formAction"), e !== null && (i = e, u = null));
      var d = new Al(
        "action",
        "action",
        null,
        l,
        n
      );
      t.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Yl !== 0) {
                  var g = u ? f0(n, u) : new FormData(n);
                  Br(
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
                typeof i == "function" && (d.preventDefault(), g = u ? f0(n, u) : new FormData(n), Br(
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
  for (var yc = 0; yc < tr.length; yc++) {
    var bc = tr[yc], up = bc.toLowerCase(), sp = bc[0].toUpperCase() + bc.slice(1);
    Ma(
      up,
      "on" + sp
    );
  }
  Ma(Vo, "onAnimationEnd"), Ma(Go, "onAnimationIteration"), Ma(Zo, "onAnimationStart"), Ma("dblclick", "onDoubleClick"), Ma("focusin", "onFocus"), Ma("focusout", "onBlur"), Ma(Am, "onTransitionRun"), Ma(zm, "onTransitionStart"), Ma(Mm, "onTransitionCancel"), Ma(Xo, "onTransitionEnd"), Ua("onMouseEnter", ["mouseout", "mouseover"]), Ua("onMouseLeave", ["mouseout", "mouseover"]), Ua("onPointerEnter", ["pointerout", "pointerover"]), Ua("onPointerLeave", ["pointerout", "pointerover"]), ja(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ja(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ja("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ja(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ja(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ja(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var tu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), rp = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tu)
  );
  function d0(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = l.length - 1; 0 <= u; u--) {
            var d = l[u], g = d.instance, w = d.currentTarget;
            if (d = d.listener, g !== i && n.isPropagationStopped())
              break t;
            i = d, n.currentTarget = w;
            try {
              i(n);
            } catch (k) {
              Tu(k);
            }
            n.currentTarget = null, i = g;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (d = l[u], g = d.instance, w = d.currentTarget, d = d.listener, g !== i && n.isPropagationStopped())
              break t;
            i = d, n.currentTarget = w;
            try {
              i(n);
            } catch (k) {
              Tu(k);
            }
            n.currentTarget = null, i = g;
          }
      }
    }
  }
  function Et(t, e) {
    var a = e[bi];
    a === void 0 && (a = e[bi] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (h0(e, t, 2, !1), a.add(l));
  }
  function xc(t, e, a) {
    var l = 0;
    e && (l |= 4), h0(
      a,
      t,
      l,
      e
    );
  }
  var hs = "_reactListening" + Math.random().toString(36).slice(2);
  function Sc(t) {
    if (!t[hs]) {
      t[hs] = !0, Cn.forEach(function(a) {
        a !== "selectionchange" && (rp.has(a) || xc(a, !1, t), xc(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[hs] || (e[hs] = !0, xc("selectionchange", !1, e));
    }
  }
  function h0(t, e, a, l) {
    switch (G0(e)) {
      case 2:
        var n = Rp;
        break;
      case 8:
        n = Bp;
        break;
      default:
        n = Rc;
    }
    a = n.bind(
      null,
      e,
      a,
      t
    ), n = void 0, !De || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, !1);
  }
  function Ec(t, e, a, l, n) {
    var i = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var u = l.tag;
        if (u === 3 || u === 4) {
          var d = l.stateNode.containerInfo;
          if (d === n) break;
          if (u === 4)
            for (u = l.return; u !== null; ) {
              var g = u.tag;
              if ((g === 3 || g === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; d !== null; ) {
            if (u = Za(d), u === null) return;
            if (g = u.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              l = i = u;
              continue t;
            }
            d = d.parentNode;
          }
        }
        l = l.return;
      }
    P(function() {
      var w = i, k = nn(a), L = [];
      t: {
        var N = Ko.get(t);
        if (N !== void 0) {
          var j = Al, tt = t;
          switch (t) {
            case "keypress":
              if (Aa(a) === 0) break t;
            case "keydown":
            case "keyup":
              j = em;
              break;
            case "focusin":
              tt = "focus", j = Ks;
              break;
            case "focusout":
              tt = "blur", j = Ks;
              break;
            case "beforeblur":
            case "afterblur":
              j = Ks;
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
              j = Mu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Xs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = nm;
              break;
            case Vo:
            case Go:
            case Zo:
              j = Jh;
              break;
            case Xo:
              j = um;
              break;
            case "scroll":
            case "scrollend":
              j = Ne;
              break;
            case "wheel":
              j = rm;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Wh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Eo;
              break;
            case "toggle":
            case "beforetoggle":
              j = om;
          }
          var ut = (e & 4) !== 0, Vt = !ut && (t === "scroll" || t === "scrollend"), E = ut ? N !== null ? N + "Capture" : null : N;
          ut = [];
          for (var x = w, z; x !== null; ) {
            var B = x;
            if (z = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || z === null || E === null || (B = et(x, E), B != null && ut.push(
              eu(x, B, z)
            )), Vt) break;
            x = x.return;
          }
          0 < ut.length && (N = new j(
            N,
            tt,
            null,
            a,
            k
          ), L.push({ event: N, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", j = t === "mouseout" || t === "pointerout", N && a !== Dn && (tt = a.relatedTarget || a.fromElement) && (Za(tt) || tt[pl]))
            break t;
          if ((j || N) && (N = k.window === k ? k : (N = k.ownerDocument) ? N.defaultView || N.parentWindow : window, j ? (tt = a.relatedTarget || a.toElement, j = w, tt = tt ? Za(tt) : null, tt !== null && (Vt = v(tt), ut = tt.tag, tt !== Vt || ut !== 5 && ut !== 27 && ut !== 6) && (tt = null)) : (j = null, tt = w), j !== tt)) {
            if (ut = Mu, B = "onMouseLeave", E = "onMouseEnter", x = "mouse", (t === "pointerout" || t === "pointerover") && (ut = Eo, B = "onPointerLeave", E = "onPointerEnter", x = "pointer"), Vt = j == null ? N : Xa(j), z = tt == null ? N : Xa(tt), N = new ut(
              B,
              x + "leave",
              j,
              a,
              k
            ), N.target = Vt, N.relatedTarget = z, B = null, Za(k) === w && (ut = new ut(
              E,
              x + "enter",
              tt,
              a,
              k
            ), ut.target = z, ut.relatedTarget = Vt, B = ut), Vt = B, j && tt)
              e: {
                for (ut = cp, E = j, x = tt, z = 0, B = E; B; B = ut(B))
                  z++;
                B = 0;
                for (var it = x; it; it = ut(it))
                  B++;
                for (; 0 < z - B; )
                  E = ut(E), z--;
                for (; 0 < B - z; )
                  x = ut(x), B--;
                for (; z--; ) {
                  if (E === x || x !== null && E === x.alternate) {
                    ut = E;
                    break e;
                  }
                  E = ut(E), x = ut(x);
                }
                ut = null;
              }
            else ut = null;
            j !== null && m0(
              L,
              N,
              j,
              ut,
              !1
            ), tt !== null && Vt !== null && m0(
              L,
              Vt,
              tt,
              ut,
              !0
            );
          }
        }
        t: {
          if (N = w ? Xa(w) : window, j = N.nodeName && N.nodeName.toLowerCase(), j === "select" || j === "input" && N.type === "file")
            var jt = jo;
          else if (No(N))
            if (Uo)
              jt = xm;
            else {
              jt = ym;
              var at = gm;
            }
          else
            j = N.nodeName, !j || j.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? w && Mi(w.elementType) && (jt = jo) : jt = bm;
          if (jt && (jt = jt(t, w))) {
            Co(
              L,
              jt,
              a,
              k
            );
            break t;
          }
          at && at(t, N, w), t === "focusout" && w && N.type === "number" && w.memoizedProps.value != null && bl(N, "number", N.value);
        }
        switch (at = w ? Xa(w) : window, t) {
          case "focusin":
            (No(at) || at.contentEditable === "true") && (qn = at, Ps = w, ji = null);
            break;
          case "focusout":
            ji = Ps = qn = null;
            break;
          case "mousedown":
            _s = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            _s = !1, Yo(L, a, k);
            break;
          case "selectionchange":
            if (Em) break;
          case "keydown":
          case "keyup":
            Yo(L, a, k);
        }
        var pt;
        if (Qs)
          t: {
            switch (t) {
              case "compositionstart":
                var zt = "onCompositionStart";
                break t;
              case "compositionend":
                zt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                zt = "onCompositionUpdate";
                break t;
            }
            zt = void 0;
          }
        else
          kn ? wo(t, a) && (zt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (zt = "onCompositionStart");
        zt && (Ao && a.locale !== "ko" && (kn || zt !== "onCompositionStart" ? zt === "onCompositionEnd" && kn && (pt = un()) : (fe = k, Oa = "value" in fe ? fe.value : fe.textContent, kn = !0)), at = ms(w, zt), 0 < at.length && (zt = new So(
          zt,
          t,
          null,
          a,
          k
        ), L.push({ event: zt, listeners: at }), pt ? zt.data = pt : (pt = To(a), pt !== null && (zt.data = pt)))), (pt = dm ? hm(t, a) : mm(t, a)) && (zt = ms(w, "onBeforeInput"), 0 < zt.length && (at = new So(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          k
        ), L.push({
          event: at,
          listeners: zt
        }), at.data = pt)), ip(
          L,
          t,
          w,
          a,
          k
        );
      }
      d0(L, e);
    });
  }
  function eu(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function ms(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = et(t, a), n != null && l.unshift(
        eu(t, n, i)
      ), n = et(t, e), n != null && l.push(
        eu(t, n, i)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function cp(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function m0(t, e, a, l, n) {
    for (var i = e._reactName, u = []; a !== null && a !== l; ) {
      var d = a, g = d.alternate, w = d.stateNode;
      if (d = d.tag, g !== null && g === l) break;
      d !== 5 && d !== 26 && d !== 27 || w === null || (g = w, n ? (w = et(a, i), w != null && u.unshift(
        eu(a, w, g)
      )) : n || (w = et(a, i), w != null && u.push(
        eu(a, w, g)
      ))), a = a.return;
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var op = /\r\n?/g, fp = /\u0000|\uFFFD/g;
  function p0(t) {
    return (typeof t == "string" ? t : "" + t).replace(op, `
`).replace(fp, "");
  }
  function v0(t, e) {
    return e = p0(e), p0(t) === e;
  }
  function Ht(t, e, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Sa(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Sa(t, "" + l);
        break;
      case "className":
        en(t, "class", l);
        break;
      case "tabIndex":
        en(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        en(t, a, l);
        break;
      case "style":
        zu(t, l, i);
        break;
      case "data":
        if (e !== "object") {
          en(t, "data", l);
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
        l = Un("" + l), t.setAttribute(a, l);
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
          typeof i == "function" && (a === "formAction" ? (e !== "input" && Ht(t, e, "name", n.name, n, null), Ht(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Ht(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Ht(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Ht(t, e, "encType", n.encType, n, null), Ht(t, e, "method", n.method, n, null), Ht(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = Un("" + l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = Ea);
        break;
      case "onScroll":
        l != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Et("scrollend", t);
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
        a = Un("" + l), t.setAttributeNS(
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
        Et("beforetoggle", t), Et("toggle", t), jn(t, "popover", l);
        break;
      case "xlinkActuate":
        Xe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Xe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Xe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Xe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Xe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Xe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Xe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Xe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Xe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        jn(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = xo.get(a) || a, jn(t, a, l));
    }
  }
  function Ac(t, e, a, l, n, i) {
    switch (a) {
      case "style":
        zu(t, l, i);
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
        typeof l == "string" ? Sa(t, l) : (typeof l == "number" || typeof l == "bigint") && Sa(t, "" + l);
        break;
      case "onScroll":
        l != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Et("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Ea);
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
        if (!yu.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), e = a.slice(2, n ? a.length - 7 : void 0), i = t[Me] || null, i = i != null ? i[a] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof l == "function")) {
              typeof i != "function" && i !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, n);
              break t;
            }
            a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : jn(t, a, l);
          }
    }
  }
  function Ae(t, e, a) {
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
        Et("error", t), Et("load", t);
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
                  Ht(t, e, i, u, a, null);
              }
          }
        n && Ht(t, e, "srcSet", a.srcSet, a, null), l && Ht(t, e, "src", a.src, a, null);
        return;
      case "input":
        Et("invalid", t);
        var d = i = u = n = null, g = null, w = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var k = a[l];
            if (k != null)
              switch (l) {
                case "name":
                  n = k;
                  break;
                case "type":
                  u = k;
                  break;
                case "checked":
                  g = k;
                  break;
                case "defaultChecked":
                  w = k;
                  break;
                case "value":
                  i = k;
                  break;
                case "defaultValue":
                  d = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ht(t, e, l, k, a, null);
              }
          }
        an(
          t,
          i,
          d,
          g,
          w,
          u,
          n,
          !1
        );
        return;
      case "select":
        Et("invalid", t), l = u = i = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (d = a[n], d != null))
            switch (n) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                u = d;
                break;
              case "multiple":
                l = d;
              default:
                Ht(t, e, n, d, a, null);
            }
        e = i, a = u, t.multiple = !!l, e != null ? xl(t, !!l, e, !1) : a != null && xl(t, !!l, a, !0);
        return;
      case "textarea":
        Et("invalid", t), i = n = l = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (d = a[u], d != null))
            switch (u) {
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
                Ht(t, e, u, d, a, null);
            }
        ln(t, l, n, i);
        return;
      case "option":
        for (g in a)
          a.hasOwnProperty(g) && (l = a[g], l != null) && (g === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Ht(t, e, g, l, a, null));
        return;
      case "dialog":
        Et("beforetoggle", t), Et("toggle", t), Et("cancel", t), Et("close", t);
        break;
      case "iframe":
      case "object":
        Et("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < tu.length; l++)
          Et(tu[l], t);
        break;
      case "image":
        Et("error", t), Et("load", t);
        break;
      case "details":
        Et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Et("error", t), Et("load", t);
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
        for (w in a)
          if (a.hasOwnProperty(w) && (l = a[w], l != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ht(t, e, w, l, a, null);
            }
        return;
      default:
        if (Mi(e)) {
          for (k in a)
            a.hasOwnProperty(k) && (l = a[k], l !== void 0 && Ac(
              t,
              e,
              k,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (d in a)
      a.hasOwnProperty(d) && (l = a[d], l != null && Ht(t, e, d, l, a, null));
  }
  function dp(t, e, a, l) {
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
        var n = null, i = null, u = null, d = null, g = null, w = null, k = null;
        for (j in a) {
          var L = a[j];
          if (a.hasOwnProperty(j) && L != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = L;
              default:
                l.hasOwnProperty(j) || Ht(t, e, j, null, l, L);
            }
        }
        for (var N in l) {
          var j = l[N];
          if (L = a[N], l.hasOwnProperty(N) && (j != null || L != null))
            switch (N) {
              case "type":
                i = j;
                break;
              case "name":
                n = j;
                break;
              case "checked":
                w = j;
                break;
              case "defaultChecked":
                k = j;
                break;
              case "value":
                u = j;
                break;
              case "defaultValue":
                d = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(r(137, e));
                break;
              default:
                j !== L && Ht(
                  t,
                  e,
                  N,
                  j,
                  l,
                  L
                );
            }
        }
        Ai(
          t,
          u,
          d,
          g,
          w,
          k,
          i,
          n
        );
        return;
      case "select":
        j = u = d = N = null;
        for (i in a)
          if (g = a[i], a.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                j = g;
              default:
                l.hasOwnProperty(i) || Ht(
                  t,
                  e,
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
                u = i;
              default:
                i !== g && Ht(
                  t,
                  e,
                  n,
                  i,
                  l,
                  g
                );
            }
        e = d, a = u, l = j, N != null ? xl(t, !!a, N, !1) : !!l != !!a && (e != null ? xl(t, !!a, e, !0) : xl(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        j = N = null;
        for (d in a)
          if (n = a[d], a.hasOwnProperty(d) && n != null && !l.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(t, e, d, null, l, n);
            }
        for (u in l)
          if (n = l[u], i = a[u], l.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                N = n;
                break;
              case "defaultValue":
                j = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && Ht(t, e, u, n, l, i);
            }
        Eu(t, N, j);
        return;
      case "option":
        for (var tt in a)
          N = a[tt], a.hasOwnProperty(tt) && N != null && !l.hasOwnProperty(tt) && (tt === "selected" ? t.selected = !1 : Ht(
            t,
            e,
            tt,
            null,
            l,
            N
          ));
        for (g in l)
          N = l[g], j = a[g], l.hasOwnProperty(g) && N !== j && (N != null || j != null) && (g === "selected" ? t.selected = N && typeof N != "function" && typeof N != "symbol" : Ht(
            t,
            e,
            g,
            N,
            l,
            j
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
        for (var ut in a)
          N = a[ut], a.hasOwnProperty(ut) && N != null && !l.hasOwnProperty(ut) && Ht(t, e, ut, null, l, N);
        for (w in l)
          if (N = l[w], j = a[w], l.hasOwnProperty(w) && N !== j && (N != null || j != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                Ht(
                  t,
                  e,
                  w,
                  N,
                  l,
                  j
                );
            }
        return;
      default:
        if (Mi(e)) {
          for (var Vt in a)
            N = a[Vt], a.hasOwnProperty(Vt) && N !== void 0 && !l.hasOwnProperty(Vt) && Ac(
              t,
              e,
              Vt,
              void 0,
              l,
              N
            );
          for (k in l)
            N = l[k], j = a[k], !l.hasOwnProperty(k) || N === j || N === void 0 && j === void 0 || Ac(
              t,
              e,
              k,
              N,
              l,
              j
            );
          return;
        }
    }
    for (var E in a)
      N = a[E], a.hasOwnProperty(E) && N != null && !l.hasOwnProperty(E) && Ht(t, e, E, null, l, N);
    for (L in l)
      N = l[L], j = a[L], !l.hasOwnProperty(L) || N === j || N == null && j == null || Ht(t, e, L, N, l, j);
  }
  function g0(t) {
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
  function hp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], i = n.transferSize, u = n.initiatorType, d = n.duration;
        if (i && d && g0(u)) {
          for (u = 0, d = n.responseEnd, l += 1; l < a.length; l++) {
            var g = a[l], w = g.startTime;
            if (w > d) break;
            var k = g.transferSize, L = g.initiatorType;
            k && g0(L) && (g = g.responseEnd, u += k * (g < d ? 1 : (d - w) / (g - w)));
          }
          if (--l, e += 8 * (i + u) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var zc = null, Mc = null;
  function ps(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function y0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function b0(t, e) {
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
  function wc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Tc = null;
  function mp() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Tc ? !1 : (Tc = t, !0) : (Tc = null, !1);
  }
  var x0 = typeof setTimeout == "function" ? setTimeout : void 0, pp = typeof clearTimeout == "function" ? clearTimeout : void 0, S0 = typeof Promise == "function" ? Promise : void 0, vp = typeof queueMicrotask == "function" ? queueMicrotask : typeof S0 < "u" ? function(t) {
    return S0.resolve(null).then(t).catch(gp);
  } : x0;
  function gp(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hl(t) {
    return t === "head";
  }
  function E0(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(n), ri(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          au(t.ownerDocument.documentElement);
        else if (a === "head") {
          a = t.ownerDocument.head, au(a);
          for (var i = a.firstChild; i; ) {
            var u = i.nextSibling, d = i.nodeName;
            i[Ca] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = u;
          }
        } else
          a === "body" && au(t.ownerDocument.body);
      a = n;
    } while (a);
    ri(e);
  }
  function A0(t, e) {
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
  function Nc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Nc(a), ba(a);
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
  function yp(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var n = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[Ca])
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
      if (t = fa(t.nextSibling), t === null) break;
    }
    return null;
  }
  function bp(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = fa(t.nextSibling), t === null)) return null;
    return t;
  }
  function z0(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = fa(t.nextSibling), t === null)) return null;
    return t;
  }
  function Cc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function jc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function xp(t, e) {
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
  function fa(t) {
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
  var Uc = null;
  function M0(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return fa(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function w0(t) {
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
  function T0(t, e, a) {
    switch (e = ps(a), t) {
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
  function au(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ba(t);
  }
  var da = /* @__PURE__ */ new Map(), N0 = /* @__PURE__ */ new Set();
  function vs(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var cl = H.d;
  H.d = {
    f: Sp,
    r: Ep,
    D: Ap,
    C: zp,
    L: Mp,
    m: wp,
    X: Np,
    S: Tp,
    M: Cp
  };
  function Sp() {
    var t = cl.f(), e = ss();
    return t || e;
  }
  function Ep(t) {
    var e = gl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Kf(e) : cl.r(t);
  }
  var ii = typeof document > "u" ? null : document;
  function C0(t, e, a) {
    var l = ii;
    if (l && typeof e == "string" && e) {
      var n = Re(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), N0.has(n) || (N0.add(n), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(n) === null && (e = l.createElement("link"), Ae(e, "link", t), ie(e), l.head.appendChild(e)));
    }
  }
  function Ap(t) {
    cl.D(t), C0("dns-prefetch", t, null);
  }
  function zp(t, e) {
    cl.C(t, e), C0("preconnect", t, e);
  }
  function Mp(t, e, a) {
    cl.L(t, e, a);
    var l = ii;
    if (l && t && e) {
      var n = 'link[rel="preload"][as="' + Re(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Re(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Re(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Re(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = ui(t);
          break;
        case "script":
          i = si(t);
      }
      da.has(i) || (t = T(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), da.set(i, t), l.querySelector(n) !== null || e === "style" && l.querySelector(lu(i)) || e === "script" && l.querySelector(nu(i)) || (e = l.createElement("link"), Ae(e, "link", t), ie(e), l.head.appendChild(e)));
    }
  }
  function wp(t, e) {
    cl.m(t, e);
    var a = ii;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Re(l) + '"][href="' + Re(t) + '"]', i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = si(t);
      }
      if (!da.has(i) && (t = T({ rel: "modulepreload", href: t }, e), da.set(i, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(nu(i)))
              return;
        }
        l = a.createElement("link"), Ae(l, "link", t), ie(l), a.head.appendChild(l);
      }
    }
  }
  function Tp(t, e, a) {
    cl.S(t, e, a);
    var l = ii;
    if (l && t) {
      var n = yl(l).hoistableStyles, i = ui(t);
      e = e || "default";
      var u = n.get(i);
      if (!u) {
        var d = { loading: 0, preload: null };
        if (u = l.querySelector(
          lu(i)
        ))
          d.loading = 5;
        else {
          t = T(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = da.get(i)) && Dc(t, a);
          var g = u = l.createElement("link");
          ie(g), Ae(g, "link", t), g._p = new Promise(function(w, k) {
            g.onload = w, g.onerror = k;
          }), g.addEventListener("load", function() {
            d.loading |= 1;
          }), g.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, gs(u, e, l);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: d
        }, n.set(i, u);
      }
    }
  }
  function Np(t, e) {
    cl.X(t, e);
    var a = ii;
    if (a && t) {
      var l = yl(a).hoistableScripts, n = si(t), i = l.get(n);
      i || (i = a.querySelector(nu(n)), i || (t = T({ src: t, async: !0 }, e), (e = da.get(n)) && Oc(t, e), i = a.createElement("script"), ie(i), Ae(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function Cp(t, e) {
    cl.M(t, e);
    var a = ii;
    if (a && t) {
      var l = yl(a).hoistableScripts, n = si(t), i = l.get(n);
      i || (i = a.querySelector(nu(n)), i || (t = T({ src: t, async: !0, type: "module" }, e), (e = da.get(n)) && Oc(t, e), i = a.createElement("script"), ie(i), Ae(i, "link", t), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(n, i));
    }
  }
  function j0(t, e, a, l) {
    var n = (n = nt.current) ? vs(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = ui(a.href), a = yl(
          n
        ).hoistableStyles, l = a.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = ui(a.href);
          var i = yl(
            n
          ).hoistableStyles, u = i.get(t);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, u), (i = n.querySelector(
            lu(t)
          )) && !i._p && (u.instance = i, u.state.loading = 5), da.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, da.set(t, a), i || jp(
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
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = si(a), a = yl(
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
  function ui(t) {
    return 'href="' + Re(t) + '"';
  }
  function lu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function U0(t) {
    return T({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function jp(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), Ae(e, "link", a), ie(e), t.head.appendChild(e));
  }
  function si(t) {
    return '[src="' + Re(t) + '"]';
  }
  function nu(t) {
    return "script[async]" + t;
  }
  function D0(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Re(a.href) + '"]'
          );
          if (l)
            return e.instance = l, ie(l), l;
          var n = T({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), ie(l), Ae(l, "style", n), gs(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          n = ui(a.href);
          var i = t.querySelector(
            lu(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, ie(i), i;
          l = U0(a), (n = da.get(n)) && Dc(l, n), i = (t.ownerDocument || t).createElement("link"), ie(i);
          var u = i;
          return u._p = new Promise(function(d, g) {
            u.onload = d, u.onerror = g;
          }), Ae(i, "link", l), e.state.loading |= 4, gs(i, a.precedence, t), e.instance = i;
        case "script":
          return i = si(a.src), (n = t.querySelector(
            nu(i)
          )) ? (e.instance = n, ie(n), n) : (l = a, (n = da.get(i)) && (l = T({}, a), Oc(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), ie(n), Ae(n, "link", l), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, gs(l, a.precedence, t));
    return e.instance;
  }
  function gs(t, e, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, i = n, u = 0; u < l.length; u++) {
      var d = l[u];
      if (d.dataset.precedence === e) i = d;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function Dc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Oc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var ys = null;
  function O0(t, e, a) {
    if (ys === null) {
      var l = /* @__PURE__ */ new Map(), n = ys = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = ys, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var i = a[n];
      if (!(i[Ca] || i[ne] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var d = l.get(u);
        d ? d.push(i) : l.set(u, [i]);
      }
    }
    return l;
  }
  function k0(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Up(t, e, a) {
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
  function q0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Dp(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = ui(l.href), i = e.querySelector(
          lu(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = bs.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = i, ie(i);
          return;
        }
        i = e.ownerDocument || e, l = U0(l), (n = da.get(n)) && Dc(l, n), i = i.createElement("link"), ie(i);
        var u = i;
        u._p = new Promise(function(d, g) {
          u.onload = d, u.onerror = g;
        }), Ae(i, "link", l), a.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = bs.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var kc = 0;
  function Op(t, e) {
    return t.stylesheets && t.count === 0 && Ss(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && Ss(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && kc === 0 && (kc = 62500 * hp());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ss(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > kc ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function bs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ss(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var xs = null;
  function Ss(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, xs = /* @__PURE__ */ new Map(), e.forEach(kp, t), xs = null, bs.call(t));
  }
  function kp(t, e) {
    if (!(e.state.loading & 4)) {
      var a = xs.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), xs.set(t, a);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (a.set(u.dataset.precedence, u), l = u);
        }
        l && a.set(null, l);
      }
      n = e.instance, u = n.getAttribute("data-precedence"), i = a.get(u) || l, i === l && a.set(null, n), a.set(u, n), this.count++, l = bs.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var iu = {
    $$typeof: ct,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function qp(t, e, a, l, n, i, u, d, g) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ze(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ze(0), this.hiddenUpdates = ze(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function R0(t, e, a, l, n, i, u, d, g, w, k, L) {
    return t = new qp(
      t,
      e,
      a,
      u,
      g,
      w,
      k,
      L,
      d
    ), e = 1, i === !0 && (e |= 24), i = Qe(3, null, null, e), t.current = i, i.stateNode = t, e = hr(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, gr(i), t;
  }
  function B0(t) {
    return t ? (t = Ln, t) : Ln;
  }
  function L0(t, e, a, l, n, i) {
    n = B0(n), l.context === null ? l.context = n : l.pendingContext = n, l = Cl(e), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = jl(t, l, e), a !== null && (Ve(a, t, e), Bi(a, t, e));
  }
  function Y0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function qc(t, e) {
    Y0(t, e), (t = t.alternate) && Y0(t, e);
  }
  function H0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = cn(t, 67108864);
      e !== null && Ve(e, t, 67108864), qc(t, 67108864);
    }
  }
  function V0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = _e();
      e = wn(e);
      var a = cn(t, e);
      a !== null && Ve(a, t, e), qc(t, e);
    }
  }
  var Es = !0;
  function Rp(t, e, a, l) {
    var n = C.T;
    C.T = null;
    var i = H.p;
    try {
      H.p = 2, Rc(t, e, a, l);
    } finally {
      H.p = i, C.T = n;
    }
  }
  function Bp(t, e, a, l) {
    var n = C.T;
    C.T = null;
    var i = H.p;
    try {
      H.p = 8, Rc(t, e, a, l);
    } finally {
      H.p = i, C.T = n;
    }
  }
  function Rc(t, e, a, l) {
    if (Es) {
      var n = Bc(l);
      if (n === null)
        Ec(
          t,
          e,
          l,
          As,
          a
        ), Z0(t, l);
      else if (Yp(
        n,
        t,
        e,
        a,
        l
      ))
        l.stopPropagation();
      else if (Z0(t, l), e & 4 && -1 < Lp.indexOf(t)) {
        for (; n !== null; ) {
          var i = gl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = be(i.pendingLanes);
                  if (u !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; u; ) {
                      var g = 1 << 31 - le(u);
                      d.entanglements[1] |= g, u &= ~g;
                    }
                    La(i), (Dt & 6) === 0 && (is = kt() + 500, $i(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = cn(i, 2), d !== null && Ve(d, i, 2), ss(), qc(i, 2);
            }
          if (i = Bc(l), i === null && Ec(
            t,
            e,
            l,
            As,
            a
          ), i === n) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else
        Ec(
          t,
          e,
          l,
          null,
          a
        );
    }
  }
  function Bc(t) {
    return t = nn(t), Lc(t);
  }
  var As = null;
  function Lc(t) {
    if (As = null, t = Za(t), t !== null) {
      var e = v(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = O(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return As = t, null;
  }
  function G0(t) {
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
        switch (ae()) {
          case oe:
            return 2;
          case Ft:
            return 8;
          case Wt:
          case me:
            return 32;
          case ea:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yc = !1, Vl = null, Gl = null, Zl = null, uu = /* @__PURE__ */ new Map(), su = /* @__PURE__ */ new Map(), Xl = [], Lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Z0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Vl = null;
        break;
      case "dragenter":
      case "dragleave":
        Gl = null;
        break;
      case "mouseover":
      case "mouseout":
        Zl = null;
        break;
      case "pointerover":
      case "pointerout":
        uu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        su.delete(e.pointerId);
    }
  }
  function ru(t, e, a, l, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = gl(e), e !== null && H0(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function Yp(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return Vl = ru(
          Vl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Gl = ru(
          Gl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return Zl = ru(
          Zl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return uu.set(
          i,
          ru(
            uu.get(i) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, su.set(
          i,
          ru(
            su.get(i) || null,
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
  function X0(t) {
    var e = Za(t.target);
    if (e !== null) {
      var a = v(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = y(a), e !== null) {
            t.blockedOn = e, Nn(t.priority, function() {
              V0(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = O(a), e !== null) {
            t.blockedOn = e, Nn(t.priority, function() {
              V0(a);
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
  function zs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Bc(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Dn = l, a.target.dispatchEvent(l), Dn = null;
      } else
        return e = gl(a), e !== null && H0(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function K0(t, e, a) {
    zs(t) && a.delete(e);
  }
  function Hp() {
    Yc = !1, Vl !== null && zs(Vl) && (Vl = null), Gl !== null && zs(Gl) && (Gl = null), Zl !== null && zs(Zl) && (Zl = null), uu.forEach(K0), su.forEach(K0);
  }
  function Ms(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Yc || (Yc = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Hp
    )));
  }
  var ws = null;
  function J0(t) {
    ws !== t && (ws = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        ws === t && (ws = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], n = t[e + 2];
          if (typeof l != "function") {
            if (Lc(l || a) === null)
              continue;
            break;
          }
          var i = gl(a);
          i !== null && (t.splice(e, 3), e -= 3, Br(
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
  function ri(t) {
    function e(g) {
      return Ms(g, t);
    }
    Vl !== null && Ms(Vl, t), Gl !== null && Ms(Gl, t), Zl !== null && Ms(Zl, t), uu.forEach(e), su.forEach(e);
    for (var a = 0; a < Xl.length; a++) {
      var l = Xl[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Xl.length && (a = Xl[0], a.blockedOn === null); )
      X0(a), a.blockedOn === null && Xl.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], i = a[l + 1], u = n[Me] || null;
        if (typeof i == "function")
          u || J0(a);
        else if (u) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, u = i[Me] || null)
              d = u.formAction;
            else if (Lc(n) !== null) continue;
          } else d = u.action;
          typeof d == "function" ? a[l + 1] = d : (a.splice(l, 3), l -= 3), J0(a);
        }
      }
  }
  function Q0() {
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
  function Hc(t) {
    this._internalRoot = t;
  }
  Ts.prototype.render = Hc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var a = e.current, l = _e();
    L0(a, l, t, e, null, null);
  }, Ts.prototype.unmount = Hc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      L0(t.current, 2, null, t, null, null), ss(), e[pl] = null;
    }
  };
  function Ts(t) {
    this._internalRoot = t;
  }
  Ts.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Tn();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < Xl.length && e !== 0 && e < Xl[a].priority; a++) ;
      Xl.splice(a, 0, t), a === 0 && X0(t);
    }
  };
  var W0 = s.version;
  if (W0 !== "19.2.8")
    throw Error(
      r(
        527,
        W0,
        "19.2.8"
      )
    );
  H.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = m(e), t = t !== null ? S(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Vp = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ns.isDisabled && Ns.supportsFiber)
      try {
        hl = Ns.inject(
          Vp
        ), ye = Ns;
      } catch {
      }
  }
  return ou.createRoot = function(t, e) {
    if (!h(t)) throw Error(r(299));
    var a = !1, l = "", n = ed, i = ad, u = ld;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (u = e.onRecoverableError)), e = R0(
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
      Q0
    ), t[pl] = e.current, Sc(t), new Hc(e);
  }, ou.hydrateRoot = function(t, e, a) {
    if (!h(t)) throw Error(r(299));
    var l = !1, n = "", i = ed, u = ad, d = ld, g = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (u = a.onCaughtError), a.onRecoverableError !== void 0 && (d = a.onRecoverableError), a.formState !== void 0 && (g = a.formState)), e = R0(
      t,
      1,
      !0,
      e,
      a ?? null,
      l,
      n,
      g,
      i,
      u,
      d,
      Q0
    ), e.context = B0(null), a = e.current, l = _e(), l = wn(l), n = Cl(l), n.callback = null, jl(a, n, l), a = l, e.current.lanes = a, ga(e, a), La(e), t[pl] = e.current, Sc(t), new Ts(e);
  }, ou.version = "19.2.8", ou;
}
var nh;
function Ip() {
  if (nh) return Zc.exports;
  nh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), Zc.exports = Fp(), Zc.exports;
}
var Pp = Ip();
function Th({ image: c, className: s = "" }) {
  const [o, r] = A.useState([c, null]), [h, v] = A.useState(0), y = A.useRef(0), O = A.useRef(c);
  return A.useEffect(() => {
    if (c === O.current) return;
    let p = !0;
    const m = () => {
      if (!p) return;
      O.current = c;
      const T = 1 - y.current;
      y.current = T, r((U) => {
        const q = [U[0], U[1]];
        return q[T] = c, q;
      }), v(T);
    };
    if (!c) {
      m();
      return;
    }
    const S = new Image();
    return S.onload = m, S.onerror = m, S.src = c, () => {
      p = !1;
    };
  }, [c]), /* @__PURE__ */ f.jsx("div", { className: `ambient ${s}`, "aria-hidden": "true", children: o.map((p, m) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "ambient__layer",
      "data-on": m === h && !!p,
      style: { backgroundImage: p ? `url("${p}")` : void 0 }
    },
    m
  )) });
}
const $e = {
  PAUSE: 1,
  SEEK: 2,
  VOLUME_SET: 4,
  PREVIOUS_TRACK: 16,
  NEXT_TRACK: 32,
  PLAY: 16384,
  SHUFFLE_SET: 32768,
  REPEAT_SET: 262144
};
function mu(c, s) {
  return ((c?.attributes.supported_features ?? 0) & s) !== 0;
}
const ma = {
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
function _p({
  entity: c,
  playing: s,
  showPlayButton: o,
  onPlayPause: r,
  onPrevious: h,
  onNext: v,
  onVolume: y
}) {
  const O = c?.attributes, p = O?.volume_level ?? 0, m = O?.is_volume_muted === !0, S = mu(c, $e.VOLUME_SET), T = mu(c, $e.PREVIOUS_TRACK), U = mu(c, $e.NEXT_TRACK);
  return /* @__PURE__ */ f.jsxs("div", { className: "controls", children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau précédent",
        title: "Précédent",
        disabled: !T,
        onClick: h,
        children: /* @__PURE__ */ f.jsx(Ya, { d: ma.prev })
      }
    ),
    o && /* @__PURE__ */ f.jsx(
      "button",
      {
        className: "iconbtn iconbtn--play",
        "aria-label": s ? "Pause" : "Lecture",
        title: s ? "Pause" : "Lecture",
        onClick: r,
        children: /* @__PURE__ */ f.jsx(Ya, { d: s ? ma.pause : ma.play })
      }
    ),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: "iconbtn",
        "aria-label": "Morceau suivant",
        title: "Suivant",
        disabled: !U,
        onClick: v,
        children: /* @__PURE__ */ f.jsx(Ya, { d: ma.next })
      }
    ),
    S && /* @__PURE__ */ f.jsxs("div", { className: "volume", children: [
      /* @__PURE__ */ f.jsx(Ya, { d: m || p === 0 ? ma.muted : ma.volume }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Math.round(p * 100),
          "aria-label": "Volume",
          onChange: (q) => y(Number(q.target.value) / 100)
        }
      )
    ] })
  ] });
}
function $p({
  entity: c,
  onLibrary: s,
  onQueue: o,
  onSpeakers: r,
  queueOn: h,
  onSettings: v,
  onLyrics: y,
  onShuffle: O,
  onRepeat: p,
  lyricsOn: m,
  lyricsAvailable: S,
  name: T
}) {
  const U = c?.attributes, q = U?.shuffle === !0, G = U?.repeat ?? "off", R = mu(c, $e.SHUFFLE_SET), K = mu(c, $e.REPEAT_SET);
  return /* @__PURE__ */ f.jsxs("div", { className: "hud__top", children: [
    /* @__PURE__ */ f.jsxs("span", { className: "hud__left", children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-label": "Bibliothèque",
          title: "Bibliothèque",
          onClick: s,
          children: /* @__PURE__ */ f.jsx(Ya, { d: ma.crate })
        }
      ),
      /* @__PURE__ */ f.jsxs("button", { className: "hud__room", onClick: r, title: "Changer d'enceinte", children: [
        /* @__PURE__ */ f.jsx("span", { className: "hud__name", children: T }),
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
          children: /* @__PURE__ */ f.jsx(Ya, { d: ma.queue })
        }
      ),
      R && /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": q,
          "aria-label": "Lecture aléatoire",
          title: "Lecture aléatoire",
          onClick: () => O(!q),
          children: /* @__PURE__ */ f.jsx(Ya, { d: ma.shuffle })
        }
      ),
      K && /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-pressed": G !== "off",
          "aria-label": "Répétition",
          title: G === "one" ? "Répéter ce morceau" : G === "all" ? "Répéter tout" : "Répétition",
          onClick: p,
          children: [
            /* @__PURE__ */ f.jsx(Ya, { d: ma.repeat }),
            G === "one" && /* @__PURE__ */ f.jsx("span", { className: "badge-one", children: "1" })
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
          onClick: y,
          children: /* @__PURE__ */ f.jsx(Ya, { d: ma.lyrics })
        }
      ),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: "iconbtn iconbtn--small",
          "aria-label": "Réglages",
          title: "Réglages",
          onClick: v,
          children: /* @__PURE__ */ f.jsx(Ya, { d: ma.gear })
        }
      )
    ] })
  ] });
}
const Ql = {
  a: "hsl(220 4% 46%)",
  b: "hsl(220 5% 34%)",
  vivid: "hsl(24 55% 45%)",
  deep: "hsl(220 6% 14%)",
  text: "hsl(0 0% 100%)",
  isDark: !0
}, ci = 40, fu = /* @__PURE__ */ new Map();
async function Nh(c) {
  const s = fu.get(c);
  if (s) return s;
  try {
    const o = await t1(c), r = e1(o);
    return fu.set(c, r), fu.size > 60 && fu.delete(fu.keys().next().value), r;
  } catch {
    return Ql;
  }
}
function t1(c) {
  return new Promise((s, o) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.decoding = "async", r.onload = () => s(r), r.onerror = () => o(new Error("image illisible")), r.src = c;
  });
}
function e1(c) {
  const s = document.createElement("canvas");
  s.width = ci, s.height = ci;
  const o = s.getContext("2d", { willReadFrequently: !0 });
  if (!o) return Ql;
  o.drawImage(c, 0, 0, ci, ci);
  const { data: r } = o.getImageData(0, 0, ci, ci), h = /* @__PURE__ */ new Map();
  let v = 0, y = 0;
  for (let Q = 0; Q < r.length; Q += 4) {
    if ((r[Q + 3] ?? 0) < 200) continue;
    const gt = r[Q] ?? 0, vt = r[Q + 1] ?? 0, yt = r[Q + 2] ?? 0;
    v += (0.2126 * gt + 0.7152 * vt + 0.0722 * yt) / 255, y++;
    const Y = gt >> 5 << 10 | vt >> 5 << 5 | yt >> 5, J = h.get(Y);
    J ? (J.count++, J.r += gt, J.g += vt, J.b += yt) : h.set(Y, { count: 1, r: gt, g: vt, b: yt });
  }
  if (y === 0) return Ql;
  const O = [...h.values()].map((Q) => {
    const ct = Q.r / Q.count, gt = Q.g / Q.count, vt = Q.b / Q.count, [yt, Y, J] = n1(ct, gt, vt);
    return { h: yt, s: Y, l: J, count: Q.count, score: a1(Q.count, Y, J) };
  }).sort((Q, ct) => ct.score - Q.score), p = O[0];
  if (!p) return Ql;
  const m = O.find((Q) => l1(Q.h, p.h) > 35 && Q.score > p.score * 0.12) ?? O.find((Q) => Math.abs(Q.l - p.l) > 0.18) ?? null, T = v / y < 0.55, U = oi(p.h, ol(p.s, 0.18, 0.85), ol(p.l, 0.3, 0.62)), q = m ? oi(m.h, ol(m.s, 0.15, 0.8), ol(m.l, 0.22, 0.55)) : oi((p.h + 28) % 360, ol(p.s * 0.8, 0.12, 0.7), ol(p.l - 0.14, 0.18, 0.5)), G = y * 0.015, R = (Q) => Q.s * Q.s * (1 - Math.abs(Q.l - 0.5)) * Math.pow(Q.count, 0.35), K = [...O].filter((Q) => Q.count >= G && Q.l > 0.12 && Q.l < 0.9).sort((Q, ct) => R(ct) - R(Q))[0] ?? p, _ = K.s < 0.12 ? oi(K.h, Math.min(K.s, 0.05), 0.2) : oi(K.h, ol(Math.max(K.s, 0.55), 0.55, 0.85), ol(K.l, 0.4, 0.56));
  return {
    a: U,
    b: q,
    vivid: _,
    deep: oi(p.h, ol(p.s * 0.55, 0.08, 0.4), 0.13),
    text: "hsl(0 0% 100%)",
    isDark: T
  };
}
function a1(c, s, o) {
  const r = 0.25 + s * 1.75, h = 1 - Math.pow(Math.abs(o - 0.5) * 2, 1.6);
  return c * r * Math.max(h, 0.05);
}
function l1(c, s) {
  const o = Math.abs(c - s) % 360;
  return o > 180 ? 360 - o : o;
}
function ol(c, s, o) {
  return Math.min(o, Math.max(s, c));
}
function oi(c, s, o) {
  return `hsl(${Math.round(c)} ${Math.round(s * 100)}% ${Math.round(o * 100)}%)`;
}
function n1(c, s, o) {
  c /= 255, s /= 255, o /= 255;
  const r = Math.max(c, s, o), h = Math.min(c, s, o), v = (r + h) / 2, y = r - h;
  if (y === 0) return [0, 0, v];
  const O = v > 0.5 ? y / (2 - r - h) : y / (r + h);
  let p;
  return r === c ? p = ((s - o) / y + (s < o ? 6 : 0)) * 60 : r === s ? p = ((o - c) / y + 2) * 60 : p = ((c - s) / y + 4) * 60, [p, O, v];
}
function i1({
  tab: c,
  items: s,
  hidden: o,
  reversed: r,
  canReverse: h,
  onToggleHidden: v,
  onToggleReversed: y,
  onSetVisible: O,
  onClose: p
}) {
  const [m, S] = A.useState(""), T = A.useMemo(() => {
    const K = m.trim().toLowerCase();
    return K ? s.filter(
      (_) => _.name.toLowerCase().includes(K) || _.artist.toLowerCase().includes(K)
    ) : s;
  }, [m, s]), U = s.filter((K) => !o.has(K.uri)).length, q = s.filter((K) => r.has(K.uri)).length, G = c === "playlists" ? "playlist" : "album", R = (K, _) => `${K} ${_}${K > 1 ? "s" : ""}`;
  return /* @__PURE__ */ f.jsxs("aside", { className: "manage sidepanel", role: "dialog", "aria-label": "Choisir ce qui s'affiche", children: [
    /* @__PURE__ */ f.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ f.jsxs("h2", { children: [
        c === "playlists" ? "Playlists du bac" : "Albums du bac",
        /* @__PURE__ */ f.jsxs("small", { children: [
          U,
          " sur ",
          R(s.length, G),
          " affiché",
          c === "playlists" ? "e" : "",
          U > 1 ? "s" : "",
          q > 0 ? ` · ${q} à l'envers` : ""
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: p, "aria-label": "Fermer le choix", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
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
          onChange: (K) => S(K.target.value)
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { className: "manage__bulk", children: [
        /* @__PURE__ */ f.jsx("button", { onClick: () => O(T.map((K) => K.uri), !0), children: m.trim() ? "Afficher ceux-ci" : "Tout afficher" }),
        /* @__PURE__ */ f.jsx("button", { onClick: () => O(T.map((K) => K.uri), !1), children: m.trim() ? "Masquer ceux-ci" : "Tout masquer" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "manage__legend", "aria-hidden": "true", children: [
      /* @__PURE__ */ f.jsx("span", { children: "Visible" }),
      /* @__PURE__ */ f.jsx("span", { children: "À l'envers" })
    ] }),
    /* @__PURE__ */ f.jsxs("ul", { className: "sidepanel__list manage__list", children: [
      T.map((K) => {
        const _ = !o.has(K.uri), Q = r.has(K.uri);
        return /* @__PURE__ */ f.jsxs("li", { className: "manage__item", "data-hidden": !_, children: [
          /* @__PURE__ */ f.jsx(
            "span",
            {
              className: "queue__art",
              style: { backgroundImage: K.image ? `url("${K.image}")` : void 0 }
            }
          ),
          /* @__PURE__ */ f.jsxs("span", { className: "sidepanel__text", children: [
            /* @__PURE__ */ f.jsx("b", { children: K.name }),
            /* @__PURE__ */ f.jsx("span", { children: K.pinned ? "♥ Favoris" : K.artist || "Playlist" })
          ] }),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: "manage__switch",
              role: "switch",
              "aria-checked": _,
              "aria-label": `Afficher « ${K.name} » dans le bac`,
              onClick: () => v(K.uri),
              children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: _ ? /* @__PURE__ */ f.jsx(
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
              "aria-checked": Q,
              "aria-label": `Lire « ${K.name} » à l'envers`,
              title: h ? "Du dernier morceau au premier" : "Demande la liaison Music Assistant",
              disabled: !h,
              onClick: () => y(K.uri),
              children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M7 3 3 7h3v10h2V7h3L7 3zm10 18 4-4h-3V7h-2v10h-3l4 4z", fill: "currentColor" }) })
            }
          )
        ] }, K.uri);
      }),
      T.length === 0 && /* @__PURE__ */ f.jsx("li", { className: "sidepanel__empty", children: "Rien ne correspond." })
    ] }),
    !h && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__note", children: "La lecture à l'envers passe par le module Music Assistant de Home Assistant ; sans lui, on lit dans l'ordre." })
  ] });
}
const ih = 7, Qc = 5, Wc = 8, Fc = 1.6, u1 = 0.5, s1 = 0.25, uh = 0.5, Cs = 2;
function r1({
  items: c,
  tab: s,
  onTab: o,
  favorite: r,
  allItems: h,
  hidden: v,
  reversed: y,
  canReverse: O,
  onToggleHidden: p,
  onToggleReversed: m,
  onSetVisible: S,
  loading: T,
  error: U,
  onPlay: q,
  onClose: G,
  resumeIndex: R,
  onFocusChange: K,
  query: _,
  onQuery: Q,
  searching: ct,
  zoom: gt
}) {
  const [vt, yt] = A.useState(R ?? 0), [, Y] = A.useState(null), [J, ft] = A.useState(!1), [dt, Ct] = A.useState(!1), [F, bt] = A.useState({}), [Mt, xt] = A.useState(null), C = A.useRef(null), H = A.useRef(null), $ = A.useRef(c);
  $.current = c;
  const mt = A.useRef(y);
  mt.current = y;
  const lt = A.useRef(R ?? 0), b = A.useRef(null), D = A.useRef(0), X = A.useRef(!1), Z = A.useRef(!1), I = c.length, nt = A.useMemo(
    () => h.filter((W) => v.has(W.uri)).length,
    [h, v]
  ), st = Math.max(0, I - 1), Bt = A.useMemo(() => {
    const W = Math.max(0, vt - ih - Qc), rt = Math.min(st, vt + ih + Qc);
    return c.slice(W, rt + 1).map((wt, Lt) => ({ album: wt, index: W + Lt }));
  }, [c, vt, st]);
  A.useEffect(() => {
    let W = !0;
    for (const { album: rt } of Bt)
      !rt.image || rt.uri in F || Nh(rt.image).then((wt) => {
        W && bt((Lt) => rt.uri in Lt ? Lt : { ...Lt, [rt.uri]: wt });
      });
    return () => {
      W = !1;
    };
  }, [Bt, F]);
  const Ot = A.useRef({ cover: 0, radius: 0 }), pa = A.useCallback(() => {
    const W = C.current;
    if (!W) return;
    const rt = W.getBoundingClientRect();
    if (rt.width === 0 || rt.height === 0) return;
    const wt = Math.min(rt.height * 0.72, rt.width * 0.42), Lt = Math.round(
      Math.max(90, Math.min(rt.height * 0.94, rt.width * 0.6, wt * gt))
    );
    W.style.setProperty("--cover", Lt + "px"), Ot.current = { cover: Lt, radius: Lt * Fc };
  }, []), ee = A.useCallback((W) => {
    lt.current = W;
    const rt = C.current;
    if (!rt) return;
    rt.dataset.offset = W.toFixed(4);
    const { radius: wt } = Ot.current;
    if (wt)
      for (const Lt of rt.children) {
        const ge = Lt, ke = Number(ge.dataset.i);
        if (!Number.isFinite(ke)) continue;
        const kt = ke - W, ae = kt * Wc, oe = ae * Math.PI / 180;
        ge.style.transform = `translateX(${(Math.sin(oe) * wt).toFixed(2)}px) translateZ(${((Math.cos(oe) - 1) * wt).toFixed(2)}px) rotateY(${(90 + ae).toFixed(3)}deg)`, ge.style.zIndex = String(100 - Math.round(Math.abs(kt)));
        const Ft = Math.min(0.22, Math.abs(kt) * 0.013).toFixed(3), Wt = ge.getElementsByClassName("crate__depth");
        for (const me of Wt) me.style.opacity = Ft;
      }
  }, []);
  A.useEffect(() => {
    pa(), ee(lt.current);
    const W = () => {
      pa(), ee(lt.current);
    };
    return window.addEventListener("resize", W), () => window.removeEventListener("resize", W);
  }, [pa, ee, I]), A.useEffect(() => {
    if (b.current === s || I === 0) return;
    b.current = s;
    const W = Math.min(st, R ?? Math.floor(I / 2));
    D.current = 0, ee(W), yt(W);
  }, [I, st, R, s, ee]);
  const dl = A.useRef(!1);
  A.useEffect(() => {
    const W = _.trim().length > 0;
    !W && !dl.current || (dl.current = W, D.current = 0, ee(0), yt(0));
  }, [_, I, ee]), A.useEffect(() => {
    let W = 0, rt = performance.now(), wt = -1, Lt;
    const ge = (ke) => {
      const kt = Math.min(0.05, (ke - rt) / 1e3);
      rt = ke;
      let ae = lt.current;
      if (!X.current) {
        if (Math.abs(D.current) > s1)
          ae = lt.current + D.current * kt, D.current *= Math.exp(-kt / u1), (ae < 0 || ae > st) && (ae = Math.max(0, Math.min(st, ae)), D.current = 0);
        else if (I > 0) {
          D.current = 0;
          const Ft = Math.max(0, Math.min(st, Math.round(lt.current))), Wt = Ft - lt.current;
          ae = Math.abs(Wt) > 8e-4 ? lt.current + Wt * (1 - Math.exp(-kt / 0.16)) : Ft;
        }
      }
      ee(ae);
      const oe = Math.round(lt.current);
      if (oe !== wt) {
        wt !== -1 && navigator.vibrate?.(8), wt = oe, K(oe), yt((me) => Math.abs(oe - me) >= Qc ? oe : me);
        const Ft = $.current[oe], Wt = H.current;
        Wt && (Wt.querySelector("b").textContent = Ft?.name ?? "", Wt.querySelector("span").textContent = Ft ? c1(Ft) + (mt.current.has(Ft.uri) ? " · lue à l'envers" : "") : "", Wt.dataset.pinned = String(!!Ft?.pinned)), clearTimeout(Lt), Lt = setTimeout(() => xt(Ft?.image ?? null), 260);
      }
      W = requestAnimationFrame(ge);
    };
    return W = requestAnimationFrame(ge), () => {
      cancelAnimationFrame(W), clearTimeout(Lt);
    };
  }, [c, y, I, st, ee, K]);
  const Ha = () => {
    const { cover: W } = Ot.current;
    return W ? W * Fc * (Wc * Math.PI / 180) : 1;
  }, ta = (W) => {
    const rt = W.clientX, wt = lt.current, Lt = Ha();
    let ge = rt, ke = performance.now(), kt = !1;
    X.current = !0, Z.current = !1, D.current = 0;
    const ae = (Ft) => {
      const Wt = Ft.clientX - rt;
      if (!kt && Math.abs(Wt) < 4) return;
      kt = !0, Z.current = !0;
      let me = wt - Wt / Lt * uh;
      me < 0 ? me = me * 0.35 : me > st && (me = st + (me - st) * 0.35), ee(me);
      const ea = performance.now(), aa = (ea - ke) / 1e3;
      if (aa > 8e-3) {
        const Il = -((Ft.clientX - ge) / Lt * uh) / aa;
        D.current = Math.max(-Cs, Math.min(Cs, Il)), ge = Ft.clientX, ke = ea;
      }
    }, oe = () => {
      X.current = !1, kt ? window.setTimeout(() => Z.current = !1, 0) : D.current = 0, window.removeEventListener("pointermove", ae), window.removeEventListener("pointerup", oe), window.removeEventListener("pointercancel", oe);
    };
    window.addEventListener("pointermove", ae), window.addEventListener("pointerup", oe), window.addEventListener("pointercancel", oe);
  }, Ge = A.useCallback(
    (W) => {
      D.current = 0;
      const rt = Math.max(0, Math.min(st, W)), wt = lt.current, Lt = performance.now(), ge = (ke) => {
        const kt = Math.min(1, (ke - Lt) / 420), ae = 1 - Math.pow(1 - kt, 3);
        ee(wt + (rt - wt) * ae), kt < 1 && requestAnimationFrame(ge);
      };
      requestAnimationFrame(ge);
    },
    [st, ee]
  ), Fl = (W) => {
    const rt = Math.abs(W.deltaX) > Math.abs(W.deltaY) ? W.deltaX : W.deltaY;
    D.current = Math.max(-Cs, Math.min(Cs, D.current + rt * 5e-3));
  };
  A.useEffect(() => {
    const W = (rt) => {
      if (rt.key === "Escape") {
        dt ? Ct(!1) : G();
        return;
      }
      Ch(rt) || dt || (rt.key === "ArrowRight" ? Ge(Math.round(lt.current) + 1) : rt.key === "ArrowLeft" && Ge(Math.round(lt.current) - 1));
    };
    return window.addEventListener("keydown", W), () => window.removeEventListener("keydown", W);
  }, [Ge, dt, G]);
  const An = (W, rt) => {
    if (Z.current) return;
    const wt = c[W];
    !wt || J || (ft(!0), Y(W), q(wt, rt));
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "library", children: [
    /* @__PURE__ */ f.jsx(Th, { image: Mt, className: "library__ambient" }),
    /* @__PURE__ */ f.jsxs("header", { className: "library__head", children: [
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: G, "aria-label": "Retour à la platine", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M14.6 5.4 8 12l6.6 6.6 1.6-1.6-5-5 5-5z", fill: "currentColor" }) }) }),
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
            value: _,
            placeholder: s === "playlists" ? "Chercher une playlist…" : "Chercher un album, un artiste…",
            "aria-label": "Chercher dans Deezer",
            onChange: (W) => Q(W.target.value)
          }
        ),
        _ && /* @__PURE__ */ f.jsx("button", { type: "button", onClick: () => Q(""), "aria-label": "Effacer la recherche", children: "×" })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "library__tabs", role: "tablist", "aria-label": "Contenu du bac", children: [
        ["albums", "Albums"],
        ["playlists", "Playlists"]
      ].map(([W, rt]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          role: "tab",
          "aria-selected": s === W,
          "data-on": s === W,
          onClick: () => o(W),
          children: rt
        },
        W
      )) }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "library__manage",
          "data-on": dt,
          "aria-label": "Choisir ce qui s'affiche",
          title: "Choisir ce qui s'affiche",
          onClick: () => Ct((W) => !W),
          children: [
            /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
              "path",
              {
                d: "M4 6h9.2a3 3 0 0 1 5.6 0H20v2h-1.2a3 3 0 0 1-5.6 0H4V6zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4 16h1.2a3 3 0 0 1 5.6 0H20v2h-9.2a3 3 0 0 1-5.6 0H4v-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
                fill: "currentColor"
              }
            ) }),
            nt > 0 && /* @__PURE__ */ f.jsx("span", { className: "library__badge", children: nt })
          ]
        }
      ),
      r && /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "library__fav",
          title: `Écouter « ${r.name} »`,
          onClick: (W) => {
            J || (ft(!0), q(r, W.currentTarget));
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
      /* @__PURE__ */ f.jsx("span", { className: "library__count", children: T || ct ? "recherche…" : _.trim() ? `${I} résultat${I > 1 ? "s" : ""}` : s === "playlists" ? `${I} playlist${I > 1 ? "s" : ""}` : `${I} album${I > 1 ? "s" : ""}` })
    ] }),
    U && /* @__PURE__ */ f.jsx("p", { className: "library__error", children: U }),
    I === 0 && !T && !ct && !_.trim() && nt > 0 && /* @__PURE__ */ f.jsx("p", { className: "library__empty", children: "Tout est masqué dans ce bac. Le réglage à côté des onglets permet d'en réafficher." }),
    dt && /* @__PURE__ */ f.jsx(
      i1,
      {
        tab: s,
        items: h,
        hidden: v,
        reversed: y,
        canReverse: O,
        onToggleHidden: p,
        onToggleReversed: m,
        onSetVisible: S,
        onClose: () => Ct(!1)
      }
    ),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: "crate",
        ref: C,
        onPointerDown: ta,
        onWheel: Fl,
        style: { "--arc": `${Wc}deg`, "--radius-k": Fc },
        children: Bt.map(({ album: W, index: rt }) => /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: "crate__item",
            "data-i": rt,
            onClick: (wt) => An(rt, wt.currentTarget),
            role: "button",
            tabIndex: 0,
            onKeyDown: (wt) => wt.key === "Enter" && An(rt, wt.currentTarget),
            children: [
              ["front", "back"].map((wt) => /* @__PURE__ */ f.jsxs("div", { className: `crate__face crate__face--${wt}`, children: [
                W.image ? /* @__PURE__ */ f.jsx("img", { className: "crate__art", src: W.image, alt: "", draggable: !1 }) : /* @__PURE__ */ f.jsx("div", { className: "crate__art crate__art--empty" }),
                /* @__PURE__ */ f.jsx("div", { className: "crate__shade" }),
                /* @__PURE__ */ f.jsx("div", { className: "crate__depth" })
              ] }, wt)),
              /* @__PURE__ */ f.jsx("div", { className: "crate__spine", children: /* @__PURE__ */ f.jsx(
                "div",
                {
                  className: "crate__spineFace",
                  style: {
                    "--spine-a": (F[W.uri] ?? Ql).b,
                    "--spine-b": (F[W.uri] ?? Ql).deep
                  },
                  children: /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: "crate__label",
                      "data-ink": F[W.uri]?.isDark === !1 ? "dark" : "light",
                      children: [
                        /* @__PURE__ */ f.jsx("b", { children: W.name }),
                        /* @__PURE__ */ f.jsx("span", { children: W.artist })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ f.jsx("div", { className: "crate__opening" })
            ]
          },
          W.uri
        ))
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "library__caption", ref: H, children: [
      /* @__PURE__ */ f.jsx("b", {}),
      /* @__PURE__ */ f.jsx("span", {})
    ] })
  ] });
}
function c1(c) {
  return c.kind === "playlist" ? c.pinned ? "Vos coups de cœur" : "Playlist" : c.kind === "track" ? c.artist ? `${c.artist} · titre` : "Titre" : c.artist;
}
function Ch(c) {
  const s = c.composedPath()[0] ?? c.target, o = s?.tagName;
  return o === "INPUT" || o === "TEXTAREA" || o === "SELECT" || !!s?.isContentEditable;
}
function o1({ lyrics: c, activeIndex: s, loading: o, onClose: r, onSeek: h }) {
  const v = A.useRef(null), y = A.useRef(null), O = A.useRef([]);
  A.useLayoutEffect(() => {
    const m = v.current, S = y.current;
    if (!m || !S) return;
    const T = O.current[s] ?? O.current[0];
    if (!T) return;
    const U = m.clientHeight / 2 - (T.offsetTop + T.offsetHeight / 2);
    S.style.transform = `translateY(${U}px)`;
  }, [s, c]), A.useEffect(() => {
    const m = (S) => S.key === "Escape" && r();
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [r]);
  const p = c.synced && c.lines.length > 0;
  return /* @__PURE__ */ f.jsxs("div", { className: "lyrics", onClick: r, children: [
    o && /* @__PURE__ */ f.jsx("p", { className: "lyrics__empty", children: "Recherche des paroles…" }),
    !o && c.instrumental && /* @__PURE__ */ f.jsx("p", { className: "lyrics__empty", children: "Morceau instrumental" }),
    !o && !c.instrumental && !p && !c.plain && /* @__PURE__ */ f.jsx("p", { className: "lyrics__empty", children: "Pas de paroles trouvées pour ce morceau" }),
    !o && !p && c.plain && /* @__PURE__ */ f.jsx("div", { className: "lyrics__scroll", ref: v, children: /* @__PURE__ */ f.jsx("div", { className: "lyrics__inner", ref: y, children: c.plain.split(`
`).map((m, S) => /* @__PURE__ */ f.jsx("p", { className: "lyrics__line", "data-active": "true", children: m || " " }, S)) }) }),
    !o && p && /* @__PURE__ */ f.jsx("div", { className: "lyrics__scroll", ref: v, children: /* @__PURE__ */ f.jsx("div", { className: "lyrics__inner", ref: y, children: c.lines.map((m, S) => /* @__PURE__ */ f.jsx(
      "p",
      {
        className: "lyrics__line",
        ref: (T) => {
          O.current[S] = T;
        },
        "data-active": S === s,
        "data-past": S < s,
        onClick: (T) => {
          T.stopPropagation(), h(m.time);
        },
        children: m.text || " "
      },
      S
    )) }) })
  ] });
}
var f1 = wh();
const sh = { service: "", entityId: "" };
function d1(c) {
  return c.service.trim().includes(".");
}
const jh = "mdvinyl.settings.v1", ks = {
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
  onPlay: { ...sh },
  onStop: { ...sh }
};
function qs() {
  try {
    const c = localStorage.getItem(jh);
    return c ? { ...ks, ...JSON.parse(c) } : { ...ks };
  } catch {
    return { ...ks };
  }
}
function lo(c) {
  try {
    localStorage.setItem(jh, JSON.stringify(c));
  } catch {
  }
}
function rh(c) {
  return c.token.trim().length > 0 && c.entityId.trim().length > 0;
}
function vu(c) {
  return (c.haUrl || window.location.origin).replace(/\/+$/, "");
}
let hi = 0;
async function ch(c) {
  try {
    const s = Date.now(), o = await fetch(`${vu(c)}/api/`, {
      headers: { Authorization: `Bearer ${c.token}` },
      cache: "no-store"
    }), r = Date.now(), h = o.headers.get("date");
    if (!h) return hi;
    const v = Date.parse(h);
    return Number.isNaN(v) || (hi = (s + r) / 2 - (v + 500)), hi;
  } catch {
    return hi;
  }
}
const h1 = { position: 0, duration: 0, progress: 0, playing: !1 };
function m1(c, s = Date.now()) {
  if (!c) return h1;
  const o = c.attributes, r = Number(o.media_duration ?? 0) || 0, h = Number(o.media_position ?? 0) || 0, v = c.state === "playing";
  let y = h;
  if (v && o.media_position_updated_at) {
    const O = Date.parse(o.media_position_updated_at);
    if (!Number.isNaN(O)) {
      const p = s - hi - O;
      p > 0 && (y = h + p / 1e3);
    }
  }
  return r > 0 && (y = Math.min(y, r)), y = Math.max(0, y), {
    position: y,
    duration: r,
    progress: r > 0 ? y / r : 0,
    playing: v
  };
}
function Rs(c) {
  (!Number.isFinite(c) || c < 0) && (c = 0);
  const s = Math.floor(c), o = Math.floor(s / 3600), r = Math.floor(s % 3600 / 60), h = s % 60;
  return o > 0 ? `${o}:${String(r).padStart(2, "0")}:${String(h).padStart(2, "0")}` : `${r}:${String(h).padStart(2, "0")}`;
}
const p1 = 380, v1 = 8, fi = 56;
function g1({
  items: c,
  loading: s,
  error: o,
  current: r,
  locked: h,
  full: v,
  total: y,
  note: O,
  pending: p,
  onPick: m,
  onMove: S,
  onSorting: T,
  onClose: U
}) {
  const q = A.useRef(null), G = A.useRef(null), R = A.useRef(!1), K = A.useRef(!1), _ = (Y) => v && Y > h && Y < c.length, Q = (Y) => {
    const J = q.current;
    if (!J) return;
    const ft = Y.lastY - Y.startY + (J.scrollTop - Y.startScroll), dt = Math.max(Y.min, Math.min(Y.rows.length - 1, Y.from + Math.round(ft / Y.pitch)));
    Y.rows[Y.from].style.transform = `translateY(${ft}px) scale(1.02)`, dt !== Y.to && (Y.to = dt, Y.rows.forEach((Ct, F) => {
      if (F === Y.from) return;
      const bt = Y.from < F && F <= dt ? -Y.pitch : dt <= F && F < Y.from ? Y.pitch : 0;
      Ct.style.transform = bt ? `translateY(${bt}px)` : "";
    }), navigator.vibrate?.(6));
  }, ct = (Y, J) => {
    const ft = q.current;
    if (!ft || G.current || !_(Y)) return;
    const dt = [...ft.querySelectorAll(":scope > .queue__item")], Ct = dt[Y];
    if (!Ct) return;
    const F = dt.length > 1 ? dt[1].offsetTop - dt[0].offsetTop : Ct.offsetHeight || 64, bt = {
      from: Y,
      to: Y,
      pitch: F,
      startY: J,
      lastY: J,
      startScroll: ft.scrollTop,
      rows: dt,
      min: Math.max(0, h + 1),
      raf: 0
    };
    G.current = bt, T?.(!0), ft.dataset.sorting = "true", Ct.dataset.lifted = "true", navigator.vibrate?.(12);
    const Mt = () => {
      const H = ft.getBoundingClientRect();
      let $ = 0;
      bt.lastY < H.top + fi ? $ = -((H.top + fi - bt.lastY) / fi) * 14 : bt.lastY > H.bottom - fi && ($ = (bt.lastY - (H.bottom - fi)) / fi * 14), $ && (ft.scrollTop += $, Q(bt)), bt.raf = requestAnimationFrame(Mt);
    };
    bt.raf = requestAnimationFrame(Mt);
    const xt = (H) => {
      bt.lastY = H.clientY, Q(bt);
    }, C = (H) => {
      window.removeEventListener("pointermove", xt), window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", C), gt(H.type === "pointerup");
    };
    window.addEventListener("pointermove", xt), window.addEventListener("pointerup", C), window.addEventListener("pointercancel", C);
  }, gt = (Y) => {
    const J = G.current, ft = q.current;
    if (!J || !ft) return;
    cancelAnimationFrame(J.raf), G.current = null;
    const dt = J.rows[J.from], Ct = Y && J.to !== J.from;
    if (dt.style.transition = "transform 150ms cubic-bezier(0.22, 1, 0.36, 1)", dt.style.transform = Ct ? `translateY(${(J.to - J.from) * J.pitch}px)` : "", !Ct)
      for (const F of J.rows) F !== dt && (F.style.transform = "");
    window.setTimeout(() => {
      ft.dataset.settling = "true", Ct && f1.flushSync(() => S(J.from, J.to));
      for (const F of J.rows)
        F.style.transform = "", F.style.transition = "";
      delete dt.dataset.lifted, delete ft.dataset.sorting, T?.(!1), requestAnimationFrame(() => requestAnimationFrame(() => delete ft.dataset.settling));
    }, 150);
  }, vt = (Y, J) => {
    if (!_(Y) || J.pointerType === "mouse" && J.button !== 0) return;
    const ft = J.clientX, dt = J.clientY;
    let Ct = dt;
    const F = window.setTimeout(() => {
      Mt(), R.current = !0, ct(Y, Ct);
    }, p1), bt = (xt) => {
      Ct = xt.clientY, Math.hypot(xt.clientX - ft, xt.clientY - dt) > v1 && Mt();
    }, Mt = () => {
      clearTimeout(F), window.removeEventListener("pointermove", bt), window.removeEventListener("pointerup", Mt), window.removeEventListener("pointercancel", Mt);
    };
    window.addEventListener("pointermove", bt), window.addEventListener("pointerup", Mt), window.addEventListener("pointercancel", Mt);
  };
  A.useEffect(() => {
    const Y = q.current;
    if (!Y) return;
    const J = (dt) => {
      G.current && dt.preventDefault();
    }, ft = (dt) => dt.preventDefault();
    return Y.addEventListener("touchmove", J, { passive: !1 }), Y.addEventListener("contextmenu", ft), () => {
      Y.removeEventListener("touchmove", J), Y.removeEventListener("contextmenu", ft);
    };
  }, []), A.useLayoutEffect(() => {
    const Y = q.current;
    if (!Y || K.current || c.length === 0 || r < 0) return;
    K.current = !0;
    const J = Y.children[r - 1];
    Y.scrollTop = J ? Math.max(0, J.offsetTop - 8) : 0;
  }, [c.length, r]);
  const yt = c.slice(Math.max(0, r)).reduce((Y, J) => Y + J.duration, 0);
  return /* @__PURE__ */ f.jsxs("aside", { className: "queue sidepanel", role: "dialog", "aria-label": "File d'attente", children: [
    /* @__PURE__ */ f.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ f.jsxs("h2", { children: [
        "À suivre",
        y > 0 && /* @__PURE__ */ f.jsxs("small", { children: [
          y,
          " titre",
          y > 1 ? "s" : "",
          v && yt > 0 ? ` · ${y1(yt)}` : ""
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: U, "aria-label": "Fermer la file", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z",
          fill: "currentColor"
        }
      ) }) })
    ] }),
    o && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__error", children: o }),
    s && c.length === 0 && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__empty", children: "Lecture de la file…" }),
    !s && !o && c.length === 0 && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__empty", children: "La file est vide." }),
    /* @__PURE__ */ f.jsx("ol", { className: "sidepanel__list queue__list", ref: q, children: c.map((Y, J) => {
      const dt = p !== null && Y.id === p ? "now" : p !== null ? "next" : J === r ? "now" : r >= 0 && J < r ? "past" : "next", Ct = _(J);
      return /* @__PURE__ */ f.jsxs("li", { className: "queue__item", "data-state": dt, "data-movable": Ct, children: [
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            className: "queue__pick",
            onPointerDown: (F) => vt(J, F),
            onClick: () => {
              if (R.current) {
                R.current = !1;
                return;
              }
              m(Y);
            },
            disabled: !Y.uri && !v,
            title: `Aller à « ${Y.name} »`,
            children: [
              /* @__PURE__ */ f.jsx(
                "span",
                {
                  className: "queue__art",
                  style: { backgroundImage: Y.image ? `url("${Y.image}")` : void 0 },
                  children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M8 5.2v13.6L19 12z", fill: "currentColor" }) })
                }
              ),
              /* @__PURE__ */ f.jsxs("span", { className: "sidepanel__text", children: [
                /* @__PURE__ */ f.jsx("b", { children: Y.name }),
                /* @__PURE__ */ f.jsx("span", { children: Y.artist })
              ] }),
              /* @__PURE__ */ f.jsx("span", { className: "queue__time", children: Y.duration > 0 ? Rs(Y.duration) : "" })
            ]
          }
        ),
        Ct && /* @__PURE__ */ f.jsx(
          "button",
          {
            className: "queue__grip",
            "aria-label": `Déplacer « ${Y.name} »`,
            title: "Glisser pour déplacer",
            onPointerDown: (F) => {
              F.pointerType === "mouse" && F.button !== 0 || (F.preventDefault(), ct(J, F.clientY));
            },
            onKeyDown: (F) => {
              F.key === "ArrowUp" && _(J - 1) ? (F.preventDefault(), S(J, J - 1)) : F.key === "ArrowDown" && J + 1 < c.length && (F.preventDefault(), S(J, J + 1));
            },
            children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z", fill: "currentColor" }) })
          }
        )
      ] }, Y.id);
    }) }),
    O && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__note", children: O })
  ] });
}
function y1(c) {
  const s = Math.round(c / 60);
  if (s < 60) return `${s} min`;
  const o = Math.floor(s / 60), r = s % 60;
  return r ? `${o} h ${String(r).padStart(2, "0")}` : `${o} h`;
}
function b1({ onWake: c }) {
  const [s, o] = A.useState(() => /* @__PURE__ */ new Date());
  A.useEffect(() => {
    let v;
    const y = () => {
      const O = /* @__PURE__ */ new Date();
      o(O), v = setTimeout(y, 6e4 - (O.getSeconds() * 1e3 + O.getMilliseconds()));
    };
    return y(), () => clearTimeout(v);
  }, []);
  const r = s.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }), h = s.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  return /* @__PURE__ */ f.jsxs("div", { className: "rest", onPointerDown: c, role: "button", tabIndex: 0, "aria-label": "Réveiller", children: [
    /* @__PURE__ */ f.jsx("div", { className: "rest__clock", children: r }),
    /* @__PURE__ */ f.jsx("div", { className: "rest__date", children: h }),
    /* @__PURE__ */ f.jsx("div", { className: "rest__hint", children: "Toucher pour revenir" })
  ] });
}
const x1 = {
  playing: "en lecture",
  paused: "en pause",
  idle: "au repos",
  off: "éteinte",
  standby: "en veille",
  unavailable: "indisponible"
};
function S1({
  players: c,
  current: s,
  loading: o,
  error: r,
  onListen: h,
  onTransfer: v,
  onClose: y
}) {
  const O = c.filter((S) => S.attributes.mass_player_type !== void 0), p = c.filter((S) => S.attributes.mass_player_type === void 0), m = [
    {
      titre: "Pilotées par Music Assistant",
      note: "Celles qui savent recevoir un disque et un transfert de file.",
      membres: O
    },
    {
      titre: "Autres lecteurs",
      note: "Vus par Home Assistant, mais hors de portée de Music Assistant.",
      membres: p
    }
  ];
  return /* @__PURE__ */ f.jsxs("aside", { className: "speakers sidepanel", role: "dialog", "aria-label": "Enceintes", children: [
    /* @__PURE__ */ f.jsxs("header", { className: "sidepanel__head", children: [
      /* @__PURE__ */ f.jsx("h2", { children: "Enceintes" }),
      /* @__PURE__ */ f.jsx("button", { className: "iconbtn iconbtn--small", onClick: y, "aria-label": "Fermer les enceintes", children: /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z",
          fill: "currentColor"
        }
      ) }) })
    ] }),
    r && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__error", children: r }),
    o && c.length === 0 && /* @__PURE__ */ f.jsx("p", { className: "sidepanel__empty", children: "Recherche des enceintes…" }),
    /* @__PURE__ */ f.jsx("ul", { className: "sidepanel__list", children: m.map(({ titre: S, note: T, membres: U }) => /* @__PURE__ */ f.jsxs(A.Fragment, { children: [
      U.length > 0 && /* @__PURE__ */ f.jsxs("li", { className: "speakers__group", children: [
        /* @__PURE__ */ f.jsx("h3", { children: S }),
        /* @__PURE__ */ f.jsx("p", { children: T })
      ] }),
      U.map((q) => {
        const G = q.entity_id === s, R = q.state === "unavailable";
        return /* @__PURE__ */ f.jsxs(
          "li",
          {
            className: "speakers__item",
            "data-here": G,
            "data-entity": q.entity_id,
            children: [
              /* @__PURE__ */ f.jsxs(
                "button",
                {
                  className: "speakers__pick",
                  onClick: () => h(q.entity_id),
                  disabled: G || R,
                  title: G ? "C'est l'enceinte affichée" : "Afficher cette enceinte",
                  children: [
                    /* @__PURE__ */ f.jsx("span", { className: "speakers__dot", "data-on": q.state === "playing" }),
                    /* @__PURE__ */ f.jsxs("span", { className: "sidepanel__text", children: [
                      /* @__PURE__ */ f.jsx("b", { children: q.attributes.friendly_name ?? q.entity_id }),
                      /* @__PURE__ */ f.jsxs("span", { children: [
                        G ? "affichée ici" : x1[q.state] ?? q.state,
                        q.attributes.media_title ? ` · ${q.attributes.media_title}` : ""
                      ] })
                    ] })
                  ]
                }
              ),
              !G && !R && q.attributes.mass_player_type !== void 0 && /* @__PURE__ */ f.jsxs(
                "button",
                {
                  className: "speakers__move",
                  onClick: () => v(q.entity_id),
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
          q.entity_id
        );
      })
    ] }, S)) })
  ] });
}
const du = 1e3, E1 = 15e3, A1 = 25e3, z1 = 1e4;
class M1 {
  settings;
  ws = null;
  nextId = 1;
  pending = /* @__PURE__ */ new Map();
  entityIds = [];
  subscriptionId = null;
  states = /* @__PURE__ */ new Map();
  closedByUs = !1;
  retryDelay = du;
  reconnectTimer = null;
  pingTimer = null;
  pongTimer = null;
  onState = () => {
  };
  onStatus = () => {
  };
  constructor(s) {
    this.settings = s;
  }
  // ---------------------------------------------------------------- cycle de vie
  connect(s) {
    this.entityIds = s, this.closedByUs = !1, this.open(), document.addEventListener("visibilitychange", this.handleVisibility), window.addEventListener("online", this.handleOnline);
  }
  close() {
    this.closedByUs = !0, document.removeEventListener("visibilitychange", this.handleVisibility), window.removeEventListener("online", this.handleOnline), this.clearTimers(), this.ws?.close(), this.ws = null, this.pending.clear(), this.subscriptionId = null;
  }
  handleVisibility = () => {
    document.visibilityState === "visible" && this.ws?.readyState !== WebSocket.OPEN && (this.retryDelay = du, this.open());
  };
  handleOnline = () => {
    this.retryDelay = du, this.open();
  };
  open() {
    if (this.closedByUs || this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING))
      return;
    this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = null);
    const s = vu(this.settings).replace(/^http/, "ws") + "/api/websocket";
    this.onStatus(this.retryDelay === du ? "connecting" : "reconnecting");
    let o;
    try {
      o = new WebSocket(s);
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
  scheduleReconnect(s) {
    this.closedByUs || this.reconnectTimer || (this.onStatus("reconnecting", s), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.open();
    }, this.retryDelay), this.retryDelay = Math.min(this.retryDelay * 2, E1));
  }
  clearTimers() {
    this.pingTimer && clearInterval(this.pingTimer), this.pongTimer && clearTimeout(this.pongTimer), this.pingTimer = null, this.pongTimer = null;
  }
  // ---------------------------------------------------------------- protocole
  send(s) {
    this.ws?.send(JSON.stringify(s));
  }
  request(s) {
    if (this.ws?.readyState !== WebSocket.OPEN)
      return Promise.reject(new Error("non connecté"));
    const o = this.nextId++;
    return new Promise((r, h) => {
      this.pending.set(o, { resolve: r, reject: h }), this.send({ ...s, id: o });
    });
  }
  handleMessage(s) {
    let o;
    try {
      o = JSON.parse(s.data);
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
        this.retryDelay = du, this.onStatus("connected"), this.subscribe(), this.startHeartbeat();
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
      }, z1)));
    }, A1);
  }
  async subscribe() {
    if (this.entityIds.length === 0) return;
    const s = this.nextId++;
    this.subscriptionId = s;
    try {
      await new Promise((o, r) => {
        this.pending.set(s, { resolve: () => o(), reject: r }), this.send({ id: s, type: "subscribe_entities", entity_ids: this.entityIds });
      });
    } catch (o) {
      this.subscriptionId = null, this.onStatus("error", String(o));
    }
  }
  /** Reconstitue les états complets à partir du format compressé de HA. */
  applyEntitiesEvent(s) {
    if (s.a)
      for (const [o, r] of Object.entries(s.a)) {
        const h = {
          entity_id: o,
          state: r.s ?? "unknown",
          attributes: r.a ?? {},
          last_changed: r.lc ? new Date(r.lc * 1e3).toISOString() : void 0,
          last_updated: r.lu ? new Date(r.lu * 1e3).toISOString() : void 0
        };
        this.states.set(o, h), this.onState(h);
      }
    if (s.c)
      for (const [o, r] of Object.entries(s.c)) {
        const h = this.states.get(o);
        if (!h) continue;
        const v = {
          ...h,
          attributes: { ...h.attributes }
        }, y = r["+"];
        y && (y.s !== void 0 && (v.state = y.s), y.lc !== void 0 && (v.last_changed = new Date(y.lc * 1e3).toISOString()), y.lu !== void 0 && (v.last_updated = new Date(y.lu * 1e3).toISOString()), y.a && Object.assign(v.attributes, y.a));
        const O = r["-"];
        if (O?.a) for (const p of O.a) delete v.attributes[p];
        this.states.set(o, v), this.onState(v);
      }
    if (s.r)
      for (const o of s.r) this.states.delete(o);
  }
  // ---------------------------------------------------------------- commandes
  /**
   * Appelle un service Home Assistant. Passe par le WebSocket déjà ouvert :
   * pas de poignée de main TLS ni de latence d'établissement de connexion,
   * la commande part immédiatement.
   */
  callService(s, o, r = {}, h) {
    return this.request({
      type: "call_service",
      domain: s,
      service: o,
      service_data: r,
      ...h ? { target: { entity_id: h } } : {}
    });
  }
  /**
   * Appelle une action qui RENVOIE des données (music_assistant.get_library,
   * .search, .get_queue). Home Assistant range le résultat sous `response`.
   */
  async callServiceWithResponse(s, o, r = {}, h) {
    const v = await this.request({
      type: "call_service",
      domain: s,
      service: o,
      service_data: r,
      // Certaines actions se ciblent par entité (get_queue), d'autres par entrée
      // de configuration (search, get_library) : les deux doivent être possibles.
      ...h ? { target: { entity_id: h } } : {},
      return_response: !0
    });
    return v?.response ?? v;
  }
  /** Commande WebSocket brute : le superviseur, pour joindre Music Assistant. */
  callWS(s) {
    return this.request(s);
  }
  /**
   * Identifiant d'entrée de configuration d'une intégration.
   * Les actions de bibliothèque de Music Assistant se ciblent par là, et cette
   * information n'existe que sur le WebSocket — le REST ne l'expose pas.
   */
  async configEntry(s) {
    return (await this.request({
      type: "config_entries/get",
      domain: s
    }))?.[0]?.entry_id ?? null;
  }
}
function Uh(c, s) {
  return new Promise((o, r) => {
    const h = vu(c).replace(/^http/, "ws") + "/api/websocket";
    let v;
    try {
      v = new WebSocket(h);
    } catch {
      r(new Error("Adresse invalide."));
      return;
    }
    const y = setTimeout(() => {
      v.close(), r(new Error("Home Assistant ne répond pas à cette adresse."));
    }, 12e3);
    let O = !1;
    const p = (m, S) => {
      O || (O = !0, clearTimeout(y), v.close(), m ? r(m) : o(S));
    };
    v.onerror = () => p(new Error("Home Assistant injoignable à cette adresse.")), v.onclose = () => p(new Error("Connexion interrompue.")), v.onmessage = (m) => {
      const S = JSON.parse(String(m.data));
      if (S.type === "auth_required") {
        v.send(JSON.stringify({ type: "auth", access_token: c.token }));
        return;
      }
      if (S.type === "auth_invalid") {
        p(new Error("Jeton refusé par Home Assistant."));
        return;
      }
      if (S.type === "auth_ok") {
        v.send(JSON.stringify({ ...s, id: 1 }));
        return;
      }
      S.type === "result" && (S.success ? p(null, S.result) : p(new Error(S.error?.message ?? "Commande refusée.")));
    };
  });
}
async function w1(c) {
  try {
    const s = await Uh(c, {
      type: "get_config"
    });
    return { ok: !0, message: `Connecté à ${s?.location_name ?? "Home Assistant"}${s?.version ? ` (${s.version})` : ""}` };
  } catch (s) {
    return { ok: !1, message: s instanceof Error ? s.message : String(s) };
  }
}
function T1(c) {
  return c.filter((s) => s.entity_id.startsWith("media_player.")).sort((s, o) => {
    const r = s.attributes.mass_player_type ? 0 : 1, h = o.attributes.mass_player_type ? 0 : 1;
    return r !== h ? r - h : (s.attributes.friendly_name ?? s.entity_id).localeCompare(
      o.attributes.friendly_name ?? o.entity_id
    );
  });
}
async function Dh(c) {
  const s = await Uh(c, { type: "get_states" });
  return T1(s);
}
function N1(c, s) {
  return s ? s.startsWith("/") ? vu(c) + s : s : null;
}
const C1 = [
  ["clear", "Blanc"],
  ["glass", "Transparent"],
  ["black", "Noir"],
  ["tinted", "Teinté"],
  ["marble", "Marbré"],
  ["splatter", "Éclaboussé"]
], j1 = [
  ["coulee", "Coulée"],
  ["tourbillon", "Tourbillon"],
  ["remous", "Remous"],
  ["agate", "Agate"],
  ["nebuleuse", "Nébuleuse"]
], U1 = ["marble", "splatter", "tinted"], D1 = [
  ["adaptive", "Adaptatif"],
  ["subtle", "Discret"],
  ["neutral", "Gris"],
  ["dark", "Sombre"]
];
function O1({
  settings: c,
  onSave: s,
  onCancel: o,
  requireConnection: r,
  embedded: h = !1,
  knownPlayers: v = null
}) {
  const [y, O] = A.useState(c), [p, m] = A.useState({ state: "idle", message: "" }), [S, T] = A.useState(v), U = (R, K) => O((_) => ({ ..._, [R]: K }));
  A.useEffect(() => {
    c.token && q(c);
  }, []);
  async function q(R) {
    m({ state: "testing", message: "Connexion…" });
    const K = await w1(R);
    if (!K.ok) {
      m({ state: "bad", message: K.message }), T(null);
      return;
    }
    try {
      const _ = await Dh(R);
      T(_);
      const Q = _.filter((ct) => ct.attributes.mass_player_type).length;
      if (m({
        state: "ok",
        message: _.length === 0 ? "Connecté, mais aucune enceinte trouvée." : `Connecté. ${_.length} enceinte${_.length > 1 ? "s" : ""}` + (Q > 0 ? `, dont ${Q} via Music Assistant.` : ".")
      }), !R.entityId && _.length > 0) {
        const ct = _.find((gt) => gt.attributes.mass_player_type) ?? _[0];
        ct && U("entityId", ct.entity_id);
      }
    } catch (_) {
      m({ state: "bad", message: String(_) });
    }
  }
  const G = h ? y.entityId.trim().length > 0 : !r || y.token.trim().length > 0 && y.entityId.trim().length > 0;
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
            value: y.haUrl,
            onChange: (R) => U("haUrl", R.target.value.trim()),
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
            value: y.token,
            onChange: (R) => U("token", R.target.value.trim()),
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ f.jsx("small", { children: "Reste sur cet appareil, dans le stockage local du navigateur." })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "actions", style: { justifyContent: "flex-start" }, children: /* @__PURE__ */ f.jsx("button", { className: "btn", onClick: () => {
        q(y);
      }, disabled: !y.token, children: "Tester la connexion" }) }),
      p.state !== "idle" && /* @__PURE__ */ f.jsx(
        "p",
        {
          className: p.state === "bad" ? "note note--bad" : p.state === "ok" ? "note note--good" : "note",
          children: p.message
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "entity", children: "Enceinte" }),
      /* @__PURE__ */ f.jsxs("select", { id: "entity", value: y.entityId, onChange: (R) => U("entityId", R.target.value), children: [
        /* @__PURE__ */ f.jsx("option", { value: "", children: "— choisir —" }),
        S?.map((R) => /* @__PURE__ */ f.jsxs("option", { value: R.entity_id, children: [
          R.attributes.mass_player_type ? "♪ " : "",
          R.attributes.friendly_name ?? R.entity_id
        ] }, R.entity_id)),
        y.entityId && !S?.some((R) => R.entity_id === y.entityId) && /* @__PURE__ */ f.jsx("option", { value: y.entityId, children: y.entityId })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("h2", { children: "Apparence" }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Matière du disque" }),
      /* @__PURE__ */ f.jsx("div", { className: "segmented", children: C1.map(([R, K]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          "aria-pressed": y.vinyl === R,
          onClick: () => U("vinyl", R),
          children: K
        },
        R
      )) })
    ] }),
    y.vinyl === "marble" && /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Motif du marbré" }),
      /* @__PURE__ */ f.jsx("div", { className: "segmented", children: j1.map(([R, K]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          "aria-pressed": y.marbleMotif === R,
          onClick: () => U("marbleMotif", R),
          children: K
        },
        R
      )) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Fond" }),
      /* @__PURE__ */ f.jsx("div", { className: "segmented", children: D1.map(([R, K]) => /* @__PURE__ */ f.jsx(
        "button",
        {
          "aria-pressed": y.background === R,
          onClick: () => U("background", R),
          children: K
        },
        R
      )) })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { children: "Lancer et arrêter la lecture" }),
      /* @__PURE__ */ f.jsxs("div", { className: "segmented", children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            "aria-pressed": y.playControl === "arm",
            onClick: () => U("playControl", "arm"),
            children: "En posant l'aiguille"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            "aria-pressed": y.playControl === "button",
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
          checked: y.counterRotateLabel,
          onChange: (R) => U("counterRotateLabel", R.target.checked)
        }
      )
    ] }),
    U1.includes(y.vinyl) && /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "tint", children: "Couleur du disque" }),
      /* @__PURE__ */ f.jsxs("div", { className: "tint", children: [
        /* @__PURE__ */ f.jsx(
          "input",
          {
            id: "tint",
            type: "color",
            value: y.vinylTint || "#8a5a3c",
            onChange: (R) => U("vinylTint", R.target.value)
          }
        ),
        /* @__PURE__ */ f.jsx("button", { className: "btn", onClick: () => U("vinylTint", ""), children: "Suivre la pochette" })
      ] }),
      /* @__PURE__ */ f.jsx("small", { children: y.vinylTint ? "Couleur fixe, quel que soit l'album." : "La couleur du disque suit la dominante de la pochette en cours." })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsxs("label", { htmlFor: "zoom", children: [
        "Taille des pochettes",
        /* @__PURE__ */ f.jsx("span", { className: "field__value", children: y.libraryZoom === 1 ? "auto" : `${Math.round(y.libraryZoom * 100)} %` })
      ] }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          id: "zoom",
          type: "range",
          min: 0.7,
          max: 1.6,
          step: 0.05,
          value: y.libraryZoom,
          onChange: (R) => U("libraryZoom", Number(R.target.value))
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
          value: y.labelText,
          placeholder: "Le titre du morceau",
          maxLength: 30,
          onChange: (R) => U("labelText", R.target.value)
        }
      ),
      /* @__PURE__ */ f.jsx("small", { children: "Laissé vide, l'étiquette affiche le morceau en cours. Rempli, elle garde ce texte — comme une pastille de label pressée une fois pour toutes." })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "rpm", children: "Vitesse de rotation" }),
      /* @__PURE__ */ f.jsxs("select", { id: "rpm", value: String(y.rpm), onChange: (R) => U("rpm", Number(R.target.value)), children: [
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
          checked: y.lyrics,
          onChange: (R) => U("lyrics", R.target.checked)
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "idle", children: "Écran de repos" }),
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          id: "idle",
          value: String(y.idleMinutes),
          onChange: (R) => U("idleMinutes", Number(R.target.value)),
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
          onClick: () => O({
            ...ks,
            haUrl: y.haUrl,
            token: y.token,
            entityId: y.entityId
          }),
          children: "Réinitialiser l'apparence"
        }
      ),
      /* @__PURE__ */ f.jsx("button", { className: "btn btn--primary", disabled: !G, onClick: () => s(y), children: "Enregistrer" })
    ] })
  ] }) });
}
const je = 100, js = 86;
function Us(c, s, o) {
  const r = s * Math.PI / 180, h = c * Math.cos(r), v = c * Math.sin(r);
  return `M ${je - h},${je - v} A ${c},${c} 0 0,${o} ${je + h},${je + v}`;
}
const Ic = typeof document < "u" ? document.createElement("canvas").getContext("2d") : null, no = /* @__PURE__ */ new Map();
function k1(c, s) {
  const o = `${s}|${c}`, r = no.get(o);
  if (r !== void 0) return r;
  if (!Ic) return 0.55 * c.length;
  Ic.font = `${s} 100px Inter, sans-serif`;
  const h = Ic.measureText(c).width / 100;
  return no.set(o, h), h;
}
function oh(c, s, o, r, h) {
  if (!c) return o;
  const v = k1(c, h);
  return v <= 0 ? o : Math.max(r, Math.min(o, s / v));
}
function di(c, s) {
  return c.length > s ? `${c.slice(0, s - 1).trimEnd()}…` : c;
}
function q1(c) {
  let s = 2166136261;
  for (let r = 0; r < c.length; r++)
    s ^= c.charCodeAt(r), s = Math.imul(s, 16777619);
  const o = [];
  for (let r = 0; r < 20; r++)
    s = Math.imul(s ^ s >>> 15, 2246822507), o.push((s >>> 8 & 3) === 0 ? 1.3 : 0.6);
  return o;
}
function R1({ title: c, artist: s, album: o, footer: r, mark: h }) {
  const [, v] = A.useState(!1);
  A.useEffect(() => {
    let U = !0;
    return document.fonts?.ready.then(() => {
      U && (no.clear(), v(!0));
    }), () => {
      U = !1;
    };
  }, []);
  const y = di(c || "—", 30), O = di(s || "", 30), p = oh(y, 126, 30, 9, 800), m = oh(O, 112, 18, 7.5, 650), S = q1(`${c}${s}`);
  let T = 0;
  return /* @__PURE__ */ f.jsxs("svg", { className: "label__svg", viewBox: "0 0 200 200", "aria-hidden": "true", children: [
    /* @__PURE__ */ f.jsxs("defs", { children: [
      /* @__PURE__ */ f.jsx("path", { id: "ring-top", d: Us(js, 0, 1), fill: "none" }),
      /* @__PURE__ */ f.jsx("path", { id: "ring-bottom", d: Us(js, 0, 0), fill: "none" }),
      /* @__PURE__ */ f.jsx("path", { id: "ring-left", d: Us(js, 90, 0), fill: "none" }),
      /* @__PURE__ */ f.jsx("path", { id: "ring-right", d: Us(js, 90, 1), fill: "none" })
    ] }),
    /* @__PURE__ */ f.jsx("circle", { cx: je, cy: je, r: "94", fill: "none", stroke: "rgba(0,0,0,0.2)", strokeWidth: "0.7" }),
    /* @__PURE__ */ f.jsxs("g", { className: "label__micro", fill: "rgba(20,18,16,0.62)", fontSize: "7", textAnchor: "middle", children: [
      /* @__PURE__ */ f.jsx("text", { children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-top", startOffset: "50%", children: di(o || "", 42) }) }),
      /* @__PURE__ */ f.jsx("text", { children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-bottom", startOffset: "50%", children: di(r, 46) }) }),
      /* @__PURE__ */ f.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-left", startOffset: "50%", children: di(s || "", 34) }) }),
      /* @__PURE__ */ f.jsx("text", { fill: "rgba(20,18,16,0.45)", children: /* @__PURE__ */ f.jsx("textPath", { href: "#ring-right", startOffset: "50%", children: di(h, 34) }) })
    ] }),
    /* @__PURE__ */ f.jsx(
      "text",
      {
        className: "label__title",
        x: je,
        y: je - 26,
        fontSize: p,
        textAnchor: "middle",
        fill: "#131211",
        children: y
      }
    ),
    /* @__PURE__ */ f.jsx("circle", { cx: je, cy: je, r: "15", fill: "none", stroke: "rgba(0,0,0,0.06)", strokeWidth: "1.2" }),
    /* @__PURE__ */ f.jsx("circle", { cx: je, cy: je, r: "4.6", fill: "#4a4b4e" }),
    /* @__PURE__ */ f.jsx("circle", { cx: je, cy: je, r: "4.6", fill: "none", stroke: "rgba(0,0,0,0.35)", strokeWidth: "0.9" }),
    /* @__PURE__ */ f.jsx(
      "text",
      {
        className: "label__artist",
        x: je,
        y: je + 34,
        fontSize: m,
        textAnchor: "middle",
        fill: "rgba(19,18,17,0.82)",
        children: O
      }
    ),
    /* @__PURE__ */ f.jsx("g", { transform: "rotate(38 100 100) translate(93 22)", opacity: "0.6", children: S.map((U, q) => {
      const G = T;
      return T += U + 0.55, /* @__PURE__ */ f.jsx("rect", { x: G, y: "0", width: U, height: "7.5", fill: "#131211" }, q);
    }) })
  ] });
}
const Wl = 1.19, mo = 1.39, Hs = 141.6, Ls = 1, Oh = 0.78, Vs = 180 / Math.PI, pi = mo * (1312.74 / 1372), kh = 5.545;
function qh(c) {
  return c < 0 ? 0 : c > 1 ? 1 : c;
}
function Rh(c) {
  const s = (Wl * Wl + pi * pi - c * c) / (2 * Wl * pi);
  return Math.acos(Math.min(1, Math.max(-1, s))) * Vs + kh;
}
function B1(c) {
  const s = (c - kh) / Vs, o = Wl * Wl + pi * pi - 2 * Wl * pi * Math.cos(s);
  return Math.sqrt(Math.max(0, o));
}
function po(c) {
  const s = Ls + (Oh - Ls) * qh(c);
  return Hs - Rh(s);
}
const io = Hs - Rh(1.36);
function L1(c) {
  const s = Hs - c, o = B1(Math.max(0, s));
  return qh((o - Ls) / (Oh - Ls));
}
const fh = (Hs - 180) / Vs, dh = {
  x: Wl * Math.cos(fh),
  y: Wl * Math.sin(fh)
};
function Y1(c, s) {
  return Math.atan2(s - dh.y, c - dh.x) * Vs;
}
const vo = mo / 1372, Zt = (c) => c * vo, ha = (c) => (c - 351.5) * vo, mi = (c) => (c - 168) * vo, H1 = 30, Pc = mi(1340);
function V1({ wrapRef: c, armRef: s, onGrab: o }) {
  return /* @__PURE__ */ f.jsx("div", { className: "tonearm", ref: c, children: /* @__PURE__ */ f.jsxs("div", { className: "tonearm__arm", ref: s, children: [
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
                y1: ha(150),
                x2: "0",
                y2: ha(400),
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
                y1: ha(230),
                x2: "0",
                y2: ha(430),
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
              x: mi(30),
              y: ha(176),
              width: Zt(70),
              height: Zt(120),
              rx: Zt(16),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "rect",
            {
              x: mi(105),
              y: ha(160),
              width: Zt(127),
              height: Zt(232),
              rx: Zt(26),
              fill: "url(#shell)"
            }
          ),
          /* @__PURE__ */ f.jsx("rect", { x: mi(232), y: ha(324), width: Zt(66), height: Zt(56), rx: Zt(14), fill: "url(#shell)" }),
          /* @__PURE__ */ f.jsx("rect", { x: mi(290), y: ha(328), width: Zt(985), height: Zt(48), rx: Zt(24), fill: "url(#tube)" }),
          /* @__PURE__ */ f.jsx("rect", { x: mi(1272), y: ha(316), width: Zt(70), height: Zt(72), rx: Zt(18), fill: "url(#shell)" }),
          /* @__PURE__ */ f.jsxs("g", { transform: `rotate(${H1} ${Pc} 0)`, children: [
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: Pc - Zt(14),
                y: ha(291),
                width: Zt(214),
                height: Zt(121),
                rx: Zt(30),
                fill: "url(#head)"
              }
            ),
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: Pc + Zt(120),
                y: ha(345),
                width: Zt(10),
                height: Zt(34),
                rx: Zt(5),
                fill: "#6a6f78",
                opacity: "0.75"
              }
            ),
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: mo - Zt(26),
                y: ha(368),
                width: Zt(12),
                height: Zt(52),
                rx: Zt(6),
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
const hh = po(0), G1 = po(1);
function Z1({
  title: c,
  artist: s,
  album: o,
  footer: r,
  mark: h,
  coverUrl: v,
  settings: y,
  sleeveFront: O,
  onToggleSleeve: p,
  onTogglePlay: m,
  armOverride: S,
  onSeekProgress: T,
  onPlay: U,
  onPause: q,
  onNext: G,
  onPrevious: R,
  seekable: K,
  spinRef: _,
  armRef: Q,
  swap: ct
}) {
  const gt = A.useRef(null), vt = A.useRef(null), yt = A.useRef(!1), Y = A.useRef(!1), J = y.playControl === "arm", ft = (F) => {
    const bt = gt.current;
    if (!bt) return;
    F.preventDefault(), F.stopPropagation(), F.target.setPointerCapture(F.pointerId);
    const Mt = bt.getBoundingClientRect(), xt = Mt.left + Mt.width / 2, C = Mt.top + Mt.height / 2, H = Mt.width / 2, $ = F.clientX, mt = F.clientY;
    let lt = !1;
    const b = (Z, I) => {
      const nt = Y1((Z - xt) / H, (I - C) / H), st = J ? io - 2 : hh, Bt = Math.min(G1, Math.max(st, nt));
      return S.current = Bt, Bt;
    }, D = (Z) => {
      !lt && Math.hypot(Z.clientX - $, Z.clientY - mt) > 6 && (lt = !0, yt.current = !0, vt.current?.setAttribute("data-dragging", "true")), lt && b(Z.clientX, Z.clientY);
    }, X = (Z) => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", X), window.removeEventListener("pointercancel", X), vt.current?.removeAttribute("data-dragging"), yt.current = !1, !lt) {
        S.current = null, J && m();
        return;
      }
      const I = b(Z.clientX, Z.clientY);
      if (J && I < hh - 0.6) {
        S.current = null, q();
        return;
      }
      K && T(L1(I)), J && U(), setTimeout(() => {
        yt.current || (S.current = null);
      }, 900);
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", X), window.addEventListener("pointercancel", X);
  };
  A.useEffect(() => {
    const F = gt.current;
    if (!F || ct.nonce === 0) return;
    const bt = F.offsetWidth * 0.34 * (ct.dir >= 0 ? -1 : 1), Mt = `translateY(-50%) translateX(${bt}px) scale(0.93)`, xt = `translateY(-50%) translateX(${-bt}px) scale(0.93)`, C = "translateY(-50%) translateX(0) scale(1)", H = F.animate(
      [
        { transform: C, opacity: 1, offset: 0 },
        { transform: Mt, opacity: 0, offset: 0.42 },
        { transform: xt, opacity: 0, offset: 0.46 },
        { transform: C, opacity: 1, offset: 1 }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    ), mt = F.parentElement?.querySelector(".sleeve")?.animate(
      [
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" },
        { transform: `translateY(-50%) rotate(-3deg) translateX(${bt * 0.12}px)` },
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" }
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" }
    );
    return () => {
      H.cancel(), mt?.cancel();
    };
  }, [ct.nonce, ct.dir]);
  const dt = /* @__PURE__ */ f.jsx("div", { className: "label", children: /* @__PURE__ */ f.jsx(R1, { title: c, artist: s, album: o, footer: r, mark: h }) }), Ct = (F) => {
    const bt = F.clientX, Mt = F.clientY;
    let xt = !1;
    const C = ($) => {
      if (xt) return;
      const mt = $.clientX - bt, lt = $.clientY - Mt;
      Math.abs(mt) < 64 || Math.abs(mt) < Math.abs(lt) * 1.8 || (xt = !0, Y.current = !0, mt < 0 ? G() : R());
    }, H = () => {
      window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), xt && setTimeout(() => Y.current = !1, 0);
    };
    window.addEventListener("pointermove", C), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "deck",
      "data-sleeve": O ? "front" : "back",
      onPointerDown: Ct,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "tonearm-base" }),
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: "sleeve",
            onClick: () => !Y.current && p(),
            role: "button",
            tabIndex: 0,
            "aria-label": "Afficher la pochette",
            onKeyDown: (F) => F.key === "Enter" && p(),
            children: [
              v ? /* @__PURE__ */ f.jsx("img", { className: "sleeve__art", src: v, alt: "", draggable: !1 }) : /* @__PURE__ */ f.jsx("div", { className: "sleeve__placeholder", children: "Aucune pochette" }),
              /* @__PURE__ */ f.jsx("div", { className: "sleeve__edge" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: "disc",
            ref: gt,
            onClick: () => !J && !Y.current && m(),
            role: J ? void 0 : "button",
            tabIndex: J ? -1 : 0,
            "aria-label": J ? void 0 : "Lecture ou pause",
            onKeyDown: (F) => !J && F.key === "Enter" && m(),
            children: [
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__material" }),
              /* @__PURE__ */ f.jsxs("div", { className: "disc__spin", ref: _, children: [
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__pattern" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__veins" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__grooves" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__aniso" }),
                /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__flecks" }),
                !y.counterRotateLabel && dt
              ] }),
              y.counterRotateLabel && dt,
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__gloss" }),
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__light" }),
              /* @__PURE__ */ f.jsx("div", { className: "disc__layer disc__edge" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(V1, { wrapRef: vt, armRef: Q, onGrab: ft })
      ]
    }
  );
}
const Ys = /* @__PURE__ */ new Map();
function X1(c) {
  let s = 2166136261;
  for (let o = 0; o < c.length; o++)
    s ^= c.charCodeAt(o), s = Math.imul(s, 16777619);
  return () => (s ^= s << 13, s ^= s >>> 17, s ^= s << 5, (s >>> 0) % 1e5 / 1e5);
}
function go(c, s = 640) {
  const o = Ys.get(c);
  if (o) return o;
  const r = document.createElement("canvas");
  r.width = s, r.height = s;
  const h = r.getContext("2d");
  if (!h) return "";
  const v = X1(c), y = Math.floor(v() * 360), O = (y + 140 + Math.floor(v() * 80)) % 360, p = v() > 0.45, m = p ? `hsl(${y} 42% 12%)` : `hsl(${y} 30% 88%)`, S = p ? `hsl(${O} 82% 60%)` : `hsl(${O} 68% 38%)`, T = p ? `hsl(${y} 38% 22%)` : `hsl(${y} 26% 74%)`;
  switch (h.fillStyle = m, h.fillRect(0, 0, s, s), Math.floor(v() * 4)) {
    case 0: {
      const q = s * (0.3 + v() * 0.4), G = s * (0.28 + v() * 0.24), R = s * (0.16 + v() * 0.12), K = h.createRadialGradient(q, G, 0, q, G, R);
      K.addColorStop(0, `hsl(${O} 90% 68%)`), K.addColorStop(1, S), h.fillStyle = K, h.beginPath(), h.arc(q, G, R, 0, Math.PI * 2), h.fill(), h.fillStyle = T;
      for (let _ = s * 0.62, Q = 0; _ < s; _ += 10 + Q * 2.2, Q++)
        h.fillRect(0, _, s, 4);
      break;
    }
    case 1: {
      h.save(), h.translate(s / 2, s / 2), h.rotate((v() - 0.5) * 1.1), h.translate(-s, -s);
      for (let q = 0; q < 22; q++)
        h.fillStyle = q % 3 === 0 ? S : q % 3 === 1 ? T : m, h.fillRect(0, q * (s / 9), s * 3, s / 18);
      h.restore();
      break;
    }
    case 2: {
      const q = s * (0.35 + v() * 0.3), G = s * (0.35 + v() * 0.3);
      for (let R = s * 0.62; R > 4; R -= s * 0.045)
        h.strokeStyle = R % (s * 0.09) < s * 0.05 ? S : T, h.lineWidth = s * 0.022, h.beginPath(), h.arc(q, G, R, 0, Math.PI * 2), h.stroke();
      break;
    }
    default: {
      const q = 3 + Math.floor(v() * 3), G = s / q;
      for (let R = 0; R < q; R++)
        for (let K = 0; K < q; K++) {
          const _ = v();
          if (_ < 0.34) continue;
          h.fillStyle = _ < 0.68 ? T : S;
          const Q = G * 0.06;
          h.fillRect(K * G + Q, R * G + Q, G - Q * 2, G - Q * 2);
        }
    }
  }
  Bh(h, s);
  const U = r.toDataURL("image/jpeg", 0.86);
  return Ys.set(c, U), U;
}
function K1(c = 640) {
  const s = `♥:${c}`, o = Ys.get(s);
  if (o) return o;
  const r = document.createElement("canvas");
  r.width = c, r.height = c;
  const h = r.getContext("2d");
  if (!h) return "";
  const v = h.createLinearGradient(0, 0, c, c);
  v.addColorStop(0, "hsl(346 68% 34%)"), v.addColorStop(1, "hsl(326 62% 15%)"), h.fillStyle = v, h.fillRect(0, 0, c, c), h.strokeStyle = "hsl(0 0% 100% / 0.05)", h.lineWidth = c * 6e-3;
  for (let T = c * 0.08; T < c * 0.95; T += c * 0.028)
    h.beginPath(), h.arc(c * 0.5, c * 0.54, T, 0, Math.PI * 2), h.stroke();
  const y = c * 0.36, O = c / 2, p = c * 0.47;
  h.save(), h.shadowColor = "hsl(330 80% 8% / 0.5)", h.shadowBlur = c * 0.05, h.shadowOffsetY = c * 0.015;
  const m = h.createLinearGradient(0, p - y, 0, p + y);
  m.addColorStop(0, "hsl(352 100% 76%)"), m.addColorStop(1, "hsl(340 88% 58%)"), h.fillStyle = m, h.beginPath(), h.moveTo(O, p + y * 0.95), h.bezierCurveTo(O - y * 1.35, p + y * 0.05, O - y * 0.85, p - y * 0.95, O, p - y * 0.38), h.bezierCurveTo(O + y * 0.85, p - y * 0.95, O + y * 1.35, p + y * 0.05, O, p + y * 0.95), h.fill(), h.restore(), Bh(h, c);
  const S = r.toDataURL("image/jpeg", 0.88);
  return Ys.set(s, S), S;
}
function Bh(c, s) {
  const o = c.getImageData(0, 0, s, s);
  for (let r = 0; r < o.data.length; r += 4) {
    const h = (Math.random() - 0.5) * 9;
    o.data[r] = _c((o.data[r] ?? 0) + h), o.data[r + 1] = _c((o.data[r + 1] ?? 0) + h), o.data[r + 2] = _c((o.data[r + 2] ?? 0) + h);
  }
  c.putImageData(o, 0, 0);
}
function _c(c) {
  return c < 0 ? 0 : c > 255 ? 255 : c;
}
const mh = 20, J1 = 400, $c = 500;
function Q1(c, s, o) {
  let r = null, h = null;
  const v = async () => {
    if (r || (r = await c.configEntry("music_assistant")), !r) throw new Error("Intégration Music Assistant introuvable dans Home Assistant.");
    return r;
  }, y = (S) => ev(o ? o.imageUrl(S) : S), O = async () => {
    const S = await c.callServiceWithResponse("music_assistant", "get_queue", {}, s), T = I1(S, s);
    return T?.queue_id && (h = String(T.queue_id)), T;
  }, p = async (S, T) => {
    const U = [];
    for (let q = 0; q < T; q += $c) {
      const G = await c.callServiceWithResponse("music_assistant", "get_library", {
        config_entry_id: await v(),
        media_type: S,
        limit: $c,
        offset: q,
        order_by: "sort_name"
      }), R = ph(G, S);
      if (U.push(...R), R.length < $c) break;
    }
    return o && await o.ready(), U.map((q) => ({ ...q, image: y(q.image) }));
  }, m = async (S) => {
    const T = P1(S.uri);
    if (!T || !o) throw new Error("URI illisible");
    const U = S.kind === "playlist" ? "music/playlists/playlist_tracks" : "music/albums/album_tracks", q = await o.command(U, {
      item_id: T.id,
      provider_instance_id_or_domain: T.provider
    }), G = _1(Array.isArray(q) ? q : []).map((R) => typeof R.uri == "string" ? R.uri : "").filter(Boolean).reverse();
    if (G.length === 0) throw new Error("liste vide");
    if (h || await O(), !h) throw new Error("file introuvable");
    await o.command("player_queues/play_media", {
      queue_id: h,
      media: G,
      option: "replace"
    });
  };
  return {
    albums: () => p("album", 5e3),
    canReverse: () => !!o && !o?.unavailable,
    async playlists() {
      return Lh(await p("playlist", 2e3));
    },
    async play(S, T) {
      if (T?.reversed && S.kind !== "track" && o && await o.ready())
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
        s
      );
    },
    /*
     * Recherche : elle se cible par config_entry_id, PAS par entité — c'est une
     * interrogation du fournisseur, pas une commande d'enceinte. Elle porte donc
     * sur tout Deezer, et non sur la seule bibliothèque enregistrée.
     */
    async search(S) {
      const T = await c.callServiceWithResponse("music_assistant", "search", {
        config_entry_id: await v(),
        name: S,
        limit: 12
      }), U = (q, G) => ph({ items: T?.[q] ?? [] }, G).map((R) => ({ ...R, image: y(R.image) }));
      return {
        albums: U("albums", "album"),
        playlists: U("playlists", "playlist"),
        tracks: U("tracks", "track")
      };
    },
    async queue() {
      const S = await O();
      if (o && h && await o.ready())
        try {
          return await W1(o, h, y);
        } catch {
        }
      return F1(S, y, o?.unavailable ?? null);
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
        { source_player: s, auto_play: !0 },
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
        s
      );
    },
    async move(S, T) {
      if (T) {
        if (!o || !h) throw new Error("Réordonner la file demande la liaison Music Assistant.");
        await o.command("player_queues/move_item", {
          queue_id: h,
          queue_item_id: S.id,
          pos_shift: T
        });
      }
    },
    watchQueue(S) {
      return o ? o.onEvent((T) => {
        !h || T.object_id !== h || (T.event === "queue_items_updated" || T.event === "queue_updated") && S();
      }) : () => {
      };
    },
    async currentLyrics(S) {
      if (!o || !S || !await o.ready() || (h || await O(), !h)) return null;
      const U = (await o.command("player_queues/get", {
        queue_id: h
      }))?.current_item?.media_item;
      if (!U || vh(String(U.name ?? "")) !== vh(S)) return null;
      const q = U.metadata?.lrc_lyrics;
      return typeof q == "string" && q.trim() ? q : null;
    }
  };
}
async function W1(c, s, o) {
  const r = await c.command("player_queues/get", {
    queue_id: s
  });
  if (!r) throw new Error("file introuvable");
  const h = so(r.current_index), v = so(r.index_in_buffer), y = Math.max(0, h - mh), O = await c.command("player_queues/items", {
    queue_id: s,
    limit: mh + J1,
    offset: y
  }), p = (Array.isArray(O) ? O : []).map((S) => uo(S, o)), m = Math.max(h, v);
  return {
    items: p,
    current: h >= 0 ? h - y : -1,
    locked: m >= 0 ? m - y : -1,
    full: !0,
    total: Number(r.items) || p.length,
    note: null
  };
}
function F1(c, s, o) {
  if (!c)
    return { items: [], current: -1, locked: 1 / 0, full: !1, total: 0, note: o };
  if (Array.isArray(c.items)) {
    const v = c.items.map((y) => uo(y, s));
    return {
      items: v,
      current: so(c.current_index),
      locked: 1 / 0,
      full: !1,
      total: v.length,
      note: o
    };
  }
  const r = [c.current_item, c.next_item].filter(Boolean).map((v) => uo(v, s)), h = Number(c.items) || r.length;
  return {
    items: r,
    current: c.current_item ? 0 : -1,
    locked: 1 / 0,
    full: !1,
    total: h,
    note: h > r.length ? o ?? "Home Assistant ne transmet que le morceau en cours et le suivant." : null
  };
}
function I1(c, s) {
  const o = c;
  if (!o || typeof o != "object") return null;
  if (o[s] && typeof o[s] == "object") return o[s];
  if ("queue_id" in o || "current_item" in o) return o;
  const r = Object.values(o).filter(
    (h) => !!h && typeof h == "object" && ("queue_id" in h || "current_item" in h)
  );
  return r.length === 1 ? r[0] : null;
}
function uo(c, s) {
  const o = c ?? {}, r = o.media_item ?? {}, h = r.name ?? o.name ?? "—", v = typeof r.version == "string" && r.version.trim() ? r.version : "";
  return {
    id: String(o.queue_item_id ?? o.item_id ?? r.uri ?? h),
    uri: String(r.uri ?? o.uri ?? ""),
    name: v ? `${h} (${v})` : String(h),
    artist: ro(r) || ro(o),
    image: s(Bs(o) ?? Bs(r) ?? Bs(r.album ?? {})),
    duration: Number(o.duration ?? r.duration ?? 0) || 0
  };
}
function P1(c) {
  const s = /^([^:/]+):\/\/[^/]+\/(.+)$/.exec(c);
  return s?.[1] && s[2] ? { provider: s[1], id: s[2] } : null;
}
function _1(c) {
  const s = (r, h) => {
    if (typeof r.position == "number") return [r.position, h];
    const v = Number(r.disc_number ?? 0) || 0, y = Number(r.track_number ?? NaN);
    return Number.isFinite(y) ? [v, y, h] : [1 / 0, h];
  }, o = c.map(s);
  return c.map((r, h) => ({ t: r, k: o[h] })).sort((r, h) => {
    for (let v = 0; v < Math.max(r.k.length, h.k.length); v++) {
      const y = (r.k[v] ?? 0) - (h.k[v] ?? 0);
      if (y) return y;
    }
    return 0;
  }).map(({ t: r }) => r);
}
function so(c) {
  const s = typeof c == "number" ? c : c == null ? NaN : Number(c);
  return Number.isFinite(s) ? s : -1;
}
function Lh(c) {
  const s = /* @__PURE__ */ new Map();
  for (const v of c) v.image && s.set(v.image, (s.get(v.image) ?? 0) + 1);
  const o = c.map((v) => {
    const y = v.name.trim(), O = $1.test(y), p = v.image !== null && (s.get(v.image) ?? 0) >= 3, m = v.image && !p ? v.image : O ? K1() : go(`playlist ${y}`);
    return { ...v, name: tv[y] ?? y, pinned: O, image: m };
  }), r = (v) => v.pinned ? /c(œ|oe)ur/i.test(v.name) ? 0 : 1 : 2, h = new Intl.Collator("fr", { sensitivity: "base", numeric: !0 });
  return [...o].sort((v, y) => r(v) - r(y) || (r(v) === 2 ? h.compare(v.name, y.name) : 0));
}
const $1 = /^(mes )?(coups? de c(œ|oe)ur|titres (favoris|aimés|likés)|tous mes favoris|all favou?rited tracks|favou?rite tracks|loved tracks|liked songs)$/i, tv = {
  "All favorited tracks": "Tous mes favoris",
  "Random Artist (from library)": "Un artiste au hasard",
  "Random Album (from library)": "Un album au hasard",
  "500 Random tracks (from library)": "500 titres au hasard",
  "Recently played tracks": "Écoutés récemment",
  "Recently added tracks": "Ajoutés récemment",
  "Infinite Mix (library)": "Mix sans fin · bibliothèque",
  "Infinite Mix (favorites)": "Mix sans fin · favoris"
};
function ph(c, s = "album") {
  const o = c, r = o?.items ?? o?.albums ?? o?.result ?? [];
  return Array.isArray(r) ? r.map((h) => {
    const v = h, y = v.media_type;
    return {
      uri: String(v.uri ?? v.media_id ?? v.item_id ?? ""),
      name: String(v.name ?? v.title ?? "—"),
      artist: ro(v),
      image: Bs(v),
      kind: y === "album" || y === "playlist" || y === "track" ? y : s
    };
  }).filter((h) => h.uri.length > 0) : [];
}
function ro(c) {
  if (typeof c.artist == "string") return c.artist;
  const s = c.artists?.[0] ?? c.album_artist ?? c.artist;
  return s ? typeof s == "string" ? s : String(s.name ?? "") : "";
}
function Bs(c) {
  const s = c.image ?? c.images?.[0] ?? c.metadata?.images?.[0] ?? c.thumbnail ?? null;
  if (!s) return null;
  if (typeof s == "string") return s;
  const o = s.path ?? s.url ?? null;
  return typeof o == "string" ? o : null;
}
function ev(c) {
  return !c || window.location.protocol === "https:" && c.startsWith("http:") ? null : c;
}
function vh(c) {
  return c.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}
const av = [
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
], lv = [
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
], Ds = (c, s, o) => `demo://${c}/${encodeURIComponent(s)}/${encodeURIComponent(o)}`;
function nv(c, s) {
  const o = () => {
    const p = Yh();
    return p ? p.map((m) => ({
      uri: Ds("album", m.name, m.artist),
      name: m.name,
      artist: m.artist,
      image: m.image,
      kind: "album"
    })) : av.map(([m, S]) => ({
      uri: Ds("album", m, S),
      name: m,
      artist: S,
      image: go(`${m} ${S}`),
      kind: "album"
    }));
  };
  let r = o().slice(0, 14).map((p, m) => ({
    id: `demo-${m}`,
    uri: p.uri,
    name: `${p.name} · piste ${m + 1}`,
    artist: p.artist,
    image: p.image,
    duration: 190 + m * 37 % 140
  })), h = 2;
  const v = /* @__PURE__ */ new Set(), y = () => setTimeout(() => v.forEach((p) => p()), 60), O = (p) => c.callService(
    "music_assistant",
    "play_media",
    { media_id: p.uri, media_type: p.kind, enqueue: "replace" },
    s
  );
  return {
    async albums() {
      return o();
    },
    async playlists() {
      const p = uv(), m = p ? p.map((S) => ({
        uri: Ds("playlist", S.name, ""),
        name: S.name,
        artist: "",
        image: S.image,
        kind: "playlist"
      })) : lv.map((S) => ({
        uri: Ds("playlist", S, ""),
        name: S,
        artist: "",
        image: null,
        kind: "playlist"
      }));
      return Lh(m);
    },
    async play(p, m) {
      const S = Array.from({ length: 8 }, (T, U) => ({
        id: `demo-${p.name}-${U}`,
        uri: p.uri,
        name: `${p.name} · piste ${U + 1}`,
        artist: p.artist || "Artistes variés",
        image: p.image,
        duration: 180 + U * 29 % 120
      }));
      r = m?.reversed ? S.reverse() : S, h = 0, y(), await O(p);
    },
    canReverse: () => !0,
    async search(p) {
      const m = p.trim().toLowerCase(), S = o().filter(
        (U) => U.name.toLowerCase().includes(m) || U.artist.toLowerCase().includes(m)
      ), T = (await this.playlists()).filter((U) => U.name.toLowerCase().includes(m));
      return {
        albums: S.slice(0, 12),
        playlists: T,
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
    async jumpTo(p) {
      const m = r.findIndex((S) => S.id === p.id);
      m >= 0 && (h = m), await c.callService(
        "music_assistant",
        "play_media",
        { media_id: p.uri, media_type: "track", enqueue: "play" },
        s
      ), y();
    },
    async move(p, m) {
      const S = r.findIndex((G) => G.id === p.id), T = S + m;
      if (S < 0 || !m || T <= h || T >= r.length) return;
      const U = [...r], [q] = U.splice(S, 1);
      U.splice(T, 0, q), r = U, y();
    },
    watchQueue(p) {
      return v.add(p), () => v.delete(p);
    },
    async currentLyrics() {
      return null;
    }
  };
}
function iv(c) {
  const s = /^demo:\/\/(?:album|playlist|track)\/([^/]+)\/([^/]*)$/.exec(c);
  return !s || !s[1] ? null : { name: decodeURIComponent(s[1]), artist: decodeURIComponent(s[2] ?? "") };
}
const En = [
  { title: "Nuit américaine", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 214 },
  { title: "Le grand bleu tremble", artist: "Atelier Nord", album: "Vagues courtes", duration: 268 },
  { title: "Sillon 3", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 187 }
];
function Yh() {
  if (!bo()) return null;
  const c = window.__MD_VINYL_ALBUMS__;
  return Array.isArray(c) && c.length > 0 ? c : null;
}
function uv() {
  if (!bo()) return null;
  const c = window.__MD_VINYL_PLAYLISTS__;
  return Array.isArray(c) && c.length > 0 ? c : null;
}
const sv = $e.PAUSE | $e.SEEK | $e.VOLUME_SET | $e.PREVIOUS_TRACK | $e.NEXT_TRACK | $e.PLAY | $e.SHUFFLE_SET | $e.REPEAT_SET, yo = [
  { entity_id: "media_player.salon", name: "Salon" },
  { entity_id: "media_player.cuisine", name: "Cuisine" },
  { entity_id: "media_player.chambre", name: "Chambre" }
], co = yo[0].entity_id;
function rv(c) {
  return yo.find((s) => s.entity_id === c)?.name ?? "Salon";
}
class cv {
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
  entityId = co;
  connect(s) {
    this.entityId = s[0] || co, this.onStatus("connected"), this.publish(), this.timer = setInterval(() => {
      if (this.playing) {
        this.position += 1;
        const o = En[this.index];
        o && this.position >= o.duration && (this.index = (this.index + 1) % En.length, this.position = 0);
      }
      this.publish();
    }, 1e3);
  }
  close() {
    this.timer && clearInterval(this.timer), this.timer = null;
  }
  callService(s, o, r = {}) {
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
        this.index = (this.index + 1) % En.length, this.position = 0;
        break;
      case "media_previous_track":
        this.position > 3 ? this.position = 0 : (this.index = (this.index - 1 + En.length) % En.length, this.position = 0);
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
        const h = iv(String(r.media_id ?? ""));
        h && (this.album = h, this.cover = go(`${h.name} ${h.artist}`), this.index = 0, this.position = 0, this.playing = !0);
        break;
      }
    }
    return this.publish(), Promise.resolve(null);
  }
  publish() {
    const s = En[this.index] ?? En[0], o = Yh(), r = o ? o[this.index % o.length] : null;
    this.onState({
      entity_id: this.entityId,
      state: this.playing ? "playing" : "paused",
      attributes: {
        friendly_name: rv(this.entityId),
        supported_features: sv,
        media_title: r ? r.name : this.album ? `${this.album.name} · piste ${this.index + 1}` : s.title,
        media_artist: r ? r.artist : this.album ? this.album.artist : s.artist,
        media_album_name: r ? r.name : this.album ? this.album.name : s.album,
        media_duration: s.duration,
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
function bo() {
  return new URLSearchParams(window.location.search).has("demo");
}
function to() {
  const c = new URLSearchParams(window.location.search), s = {}, o = c.get("vinyl"), r = c.get("bg");
  o && (s.vinyl = o);
  const h = c.get("motif");
  return h && (s.marbleMotif = h), r && (s.background = r), s;
}
const ov = `[00:08.40] Le soir tombe sur les toits gris
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
[01:16.80] On y croit quand même, ce soir`, Ue = 640, fv = 10, gh = "mdvinyl.marble.v1.", yh = /* @__PURE__ */ new Map();
function dv(c) {
  if (c === "coulee") return null;
  let s = yh.get(c);
  return s || (s = hv(c), yh.set(c, s)), s;
}
async function hv(c) {
  try {
    const o = localStorage.getItem(gh + c);
    if (o) return JSON.parse(o);
  } catch {
  }
  const s = await mv(c);
  try {
    localStorage.setItem(gh + c, JSON.stringify(s));
  } catch {
  }
  return s;
}
async function mv(c) {
  const s = bh(7), o = bh(31), r = new Uint8ClampedArray(Ue * Ue * 4), h = new Uint8ClampedArray(Ue * Ue * 4), v = new Uint8ClampedArray(Ue * Ue * 4);
  let y = 0;
  for (; y < Ue; ) {
    const O = performance.now();
    for (; y < Ue && performance.now() - O < fv; ) {
      for (let p = 0; p < Ue; p++) {
        const m = p / Ue * 2 - 1, S = y / Ue * 2 - 1, [T, U, q] = pv(c, m, S, p, y, s, o), G = (y * Ue + p) * 4 + 3;
        r[G] = T * 255, h[G] = U * 255, v[G] = q * 255;
      }
      y++;
    }
    await new Promise((p) => setTimeout(p, 0));
  }
  return {
    color: eo(r),
    dark: eo(h),
    light: eo(v)
  };
}
function pv(c, s, o, r, h, v, y) {
  const O = Math.hypot(s, o), p = Math.atan2(o, s), m = Os(y, s * 1.7 + 3.1, o * 1.7 - 2.2, 0.5, 4), S = (T, U, q, G, R, K) => {
    const _ = p + O * q + m * G, Q = Os(v, O * T + m * 1.3, Math.cos(_) * U, Math.sin(_) * U + 4.4, 6);
    return [
      fl(R - K, R + K, Q),
      (1 - fl(0, 0.022, Math.abs(Q - (R + 0.16)))) * 0.9,
      1 - fl(0, 0.02, Math.abs(Q - (R - 0.18)))
    ];
  };
  switch (c) {
    // Fines traînées serrées, comme un « swirl » de pressage.
    case "tourbillon":
      return S(9, 0.4, 4, 1.6, 0.02, 0.02);
    // Les mêmes pâtes, en masses plus larges et plus tordues.
    case "remous":
      return S(5, 0.35, 2, 2.4, -0.02, 0.03);
    // Des bandes concentriques ondulées, comme une pierre d'agate tranchée.
    case "agate": {
      const T = O * 5.5 + m * 1.6 + Os(v, s * 2.5, o * 2.5, 1.3, 4) * 0.6, U = T - Math.floor(T);
      return [
        fl(0.08, 0.14, U) * (1 - fl(0.52, 0.58, U)),
        (1 - fl(0, 0.035, Math.abs(U - 0.6))) * 0.8,
        (1 - fl(0, 0.03, Math.abs(U - 0.8))) * 0.9
      ];
    }
    // Des volutes douces, piquées de quelques paillettes.
    case "nebuleuse": {
      const T = p + O * 1.8 + m * 0.8, U = Os(v, O * 3 + m * 0.9, Math.cos(T) * 0.5, Math.sin(T) * 0.5 + 9.1, 6), q = Math.sin(r * 12.9898 + h * 78.233) * 43758.5453;
      return [fl(-0.22, 0.28, U) * 0.95, fl(0.12, 0.4, U) * 0.7, q - Math.floor(q) > 0.997 ? 1 : 0];
    }
  }
}
function eo(c) {
  const s = document.createElement("canvas");
  s.width = Ue, s.height = Ue;
  const o = s.getContext("2d");
  if (!o) return "";
  for (let r = 0; r < c.length; r += 4)
    c[r] = 255, c[r + 1] = 255, c[r + 2] = 255;
  return o.putImageData(new ImageData(c, Ue, Ue), 0, 0), s.toDataURL("image/png");
}
function fl(c, s, o) {
  const r = Math.min(1, Math.max(0, (o - c) / (s - c)));
  return r * r * (3 - 2 * r);
}
function Os(c, s, o, r, h) {
  let v = 0.5, y = 1, O = 0;
  for (let p = 0; p < h; p++)
    O += v * c(s * y, o * y, r * y), v *= 0.5, y *= 2.03;
  return O;
}
function bh(c) {
  let s = c >>> 0 || 1;
  const o = () => (s = Math.imul(s, 1664525) + 1013904223 >>> 0) / 4294967296, r = Array.from({ length: 256 }, (p, m) => m);
  for (let p = 255; p > 0; p--) {
    const m = Math.floor(o() * (p + 1));
    [r[p], r[m]] = [r[m], r[p]];
  }
  const h = new Uint8Array(512);
  for (let p = 0; p < 512; p++) h[p] = r[p & 255];
  const v = (p) => p * p * p * (p * (p * 6 - 15) + 10), y = (p, m, S) => p + S * (m - p), O = (p, m, S, T) => {
    const U = p & 15, q = U < 8 ? m : S, G = U < 4 ? S : U === 12 || U === 14 ? m : T;
    return (U & 1 ? -q : q) + (U & 2 ? -G : G);
  };
  return (p, m, S) => {
    const T = Math.floor(p) & 255, U = Math.floor(m) & 255, q = Math.floor(S) & 255;
    p -= Math.floor(p), m -= Math.floor(m), S -= Math.floor(S);
    const G = v(p), R = v(m), K = v(S), _ = h[T] + U, Q = h[_] + q, ct = h[_ + 1] + q, gt = h[T + 1] + U, vt = h[gt] + q, yt = h[gt + 1] + q;
    return y(
      y(
        y(O(h[Q], p, m, S), O(h[vt], p - 1, m, S), G),
        y(O(h[ct], p, m - 1, S), O(h[yt], p - 1, m - 1, S), G),
        R
      ),
      y(
        y(O(h[Q + 1], p, m, S - 1), O(h[vt + 1], p - 1, m, S - 1), G),
        y(O(h[ct + 1], p, m - 1, S - 1), O(h[yt + 1], p - 1, m - 1, S - 1), G),
        R
      ),
      K
    );
  };
}
const vv = 15e3, gv = 8e3, yv = 6e4, bv = 1e4;
class xh {
  constructor(s, o = window.location.origin) {
    this.ha = s, this.origin = o;
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
    return this.closed || this.unavailable ? Promise.resolve(!1) : this.connected ? Promise.resolve(!0) : Date.now() - this.failedAt < bv ? Promise.resolve(!1) : (this.opening ??= this.open().finally(() => {
      this.opening = null;
    }), this.opening);
  }
  /** Envoie une commande à Music Assistant et attend sa réponse. */
  async command(s, o = {}) {
    if (!await this.ready() || !this.ws)
      throw new Error(this.unavailable ?? "Music Assistant injoignable");
    const r = this.ws, h = String(this.nextId++);
    return new Promise((v, y) => {
      const O = setTimeout(() => {
        this.waiting.delete(h), y(new Error(`Music Assistant ne répond pas (${s})`));
      }, vv);
      this.waiting.set(h, { resolve: v, reject: y, timer: O, parts: [] }), r.send(JSON.stringify({ message_id: h, command: s, args: o }));
    });
  }
  /**
   * Écoute les événements de Music Assistant. Il les envoie d'office à tout
   * client connecté : c'est ce qui permet à la file de se remplir sous nos yeux
   * quand on lance un album, sans relire en boucle.
   */
  onEvent(s) {
    return this.listeners.add(s), this.ready(), () => this.listeners.delete(s);
  }
  /**
   * Les images des playlists générées par Music Assistant pointent vers son
   * propre serveur (http://192.168.x.x:8095/imageproxy/…). Depuis une page en
   * https, le navigateur les bloque ; depuis l'extérieur, l'adresse n'existe
   * pas. L'ingress sert les mêmes chemins, sur notre origine : on y réécrit.
   */
  imageUrl(s) {
    if (!s || !this.ingress || !this.serverBase || !s.startsWith(this.serverBase)) return s;
    const o = s.slice(this.serverBase.length).replace(/^\/+/, "");
    return this.origin + this.ingress + o;
  }
  close() {
    this.closed = !0, this.keepAlive && clearInterval(this.keepAlive), this.reconnect && clearTimeout(this.reconnect), this.keepAlive = null, this.reconnect = null, this.listeners.clear(), this.ws?.close(), this.ws = null;
  }
  // ------------------------------------------------------------ établissement
  async open() {
    try {
      return this.ingress || (this.ingress = await this.findIngress()), this.ingress ? (await this.ensureSession(), await this.openSocket()) : !1;
    } catch (s) {
      this.failedAt = Date.now();
      const o = s instanceof Error ? s.message : String(s);
      return /unauthori|admin|forbidden|401/i.test(o) && (this.unavailable = "La file complète demande un compte administrateur de Home Assistant."), !1;
    }
  }
  /** Adresse d'ingress du module Music Assistant, ou null s'il n'y en a pas. */
  async findIngress() {
    let s;
    try {
      s = (await this.ha.callWS({
        type: "supervisor/api",
        endpoint: "/addons",
        method: "get"
      }))?.addons ?? [];
    } catch (v) {
      const y = v instanceof Error ? v.message : String(v);
      return this.unavailable = /unauthori|admin/i.test(y) ? "La file complète demande un compte administrateur de Home Assistant." : "La file complète passe par le module Music Assistant de Home Assistant, absent de cette installation.", null;
    }
    const o = s.filter((v) => /music_assistant/i.test(v.slug)), r = o.find((v) => v.state === "started") ?? o[0];
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
      const s = await this.ha.callWS({
        type: "supervisor/api",
        endpoint: "/ingress/session",
        method: "post"
      });
      this.session = s.session;
    }
    Sh(this.session), this.keepAlive || (this.keepAlive = setInterval(() => {
      if (!this.session || this.closed) return;
      const s = this.session;
      this.validate(s).then((o) => {
        o ? Sh(s) : (this.session = null, this.ensureSession().catch(() => {
        }));
      });
    }, yv));
  }
  async validate(s) {
    try {
      return await this.ha.callWS({
        type: "supervisor/api",
        endpoint: "/ingress/validate_session",
        method: "post",
        data: { session: s }
      }), !0;
    } catch {
      return !1;
    }
  }
  openSocket() {
    return new Promise((s) => {
      const o = this.origin.replace(/^http/, "ws") + this.ingress + "ws";
      let r;
      try {
        r = new WebSocket(o);
      } catch {
        this.failedAt = Date.now(), s(!1);
        return;
      }
      let h = !1;
      const v = (O) => {
        h || (h = !0, clearTimeout(y), O || (this.failedAt = Date.now(), r.close()), s(O));
      }, y = setTimeout(() => v(!1), gv);
      r.onmessage = (O) => {
        let p;
        try {
          p = JSON.parse(String(O.data));
        } catch {
          return;
        }
        if (!h && p.server_version) {
          this.serverBase = typeof p.base_url == "string" ? p.base_url.replace(/\/+$/, "") : null, this.ws = r, v(!0);
          return;
        }
        this.handle(p);
      }, r.onerror = () => v(!1), r.onclose = () => {
        if (v(!1), this.ws === r) {
          this.ws = null;
          for (const O of this.waiting.values())
            clearTimeout(O.timer), O.reject(new Error("liaison Music Assistant fermée"));
          this.waiting.clear(), !this.closed && this.listeners.size > 0 && (this.reconnect = setTimeout(() => {
            this.reconnect = null, this.failedAt = 0, this.ready();
          }, 3e3));
        }
      };
    });
  }
  handle(s) {
    if (s.message_id !== void 0) {
      const o = String(s.message_id), r = this.waiting.get(o);
      if (!r) return;
      if (s.error_code !== void 0) {
        clearTimeout(r.timer), this.waiting.delete(o), r.reject(new Error(String(s.details ?? s.error_code)));
        return;
      }
      if (s.partial) {
        Array.isArray(s.result) && r.parts.push(...s.result);
        return;
      }
      clearTimeout(r.timer), this.waiting.delete(o), r.resolve(
        r.parts.length > 0 && Array.isArray(s.result) ? [...r.parts, ...s.result] : s.result
      );
      return;
    }
    if (typeof s.event == "string")
      for (const o of this.listeners) o(s);
  }
}
function Sh(c) {
  const s = window.location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `ingress_session=${c};path=/api/hassio_ingress/;SameSite=Strict${s}`;
}
const xv = { hidden: [], reversed: [] }, Eh = "md_vinyl_library", Hh = "mdvinyl.library.v1";
function Vh(c) {
  const s = c ?? {}, o = (r) => Array.isArray(r) ? [...new Set(r.filter((h) => typeof h == "string"))] : [];
  return { hidden: o(s.hidden), reversed: o(s.reversed) };
}
function pu() {
  try {
    return Vh(JSON.parse(localStorage.getItem(Hh) ?? "null"));
  } catch {
    return { ...xv };
  }
}
function oo(c) {
  try {
    localStorage.setItem(Hh, JSON.stringify(c));
  } catch {
  }
}
function Ah(c) {
  return {
    cached: pu,
    async load() {
      try {
        const s = await c.callWS({
          type: "frontend/get_user_data",
          key: Eh
        });
        if (s?.value === null || s?.value === void 0) return pu();
        const o = Vh(s.value);
        return oo(o), o;
      } catch {
        return pu();
      }
    },
    async save(s) {
      oo(s), await c.callWS({ type: "frontend/set_user_data", key: Eh, value: s });
    }
  };
}
function ao() {
  return {
    cached: pu,
    async load() {
      return pu();
    },
    async save(c) {
      oo(c);
    }
  };
}
const Gh = "https://lrclib.net/api", Jl = { lines: [], synced: !1, plain: null, instrumental: !1 }, hu = /* @__PURE__ */ new Map();
function Sv(c) {
  return `${c.artist}::${c.title}::${Math.round(c.duration ?? 0)}`;
}
async function Ev(c, s) {
  if (!c.title || !c.artist) return Jl;
  const o = Sv(c), r = hu.get(o);
  if (r) return r;
  let h = Jl;
  try {
    h = await Av(c, s) ?? await zv(c, s) ?? Jl;
  } catch (v) {
    if (v?.name === "AbortError") throw v;
    h = Jl;
  }
  return hu.set(o, h), hu.size > 80 && hu.delete(hu.keys().next().value), h;
}
async function Av(c, s) {
  const o = new URLSearchParams({
    artist_name: c.artist,
    track_name: c.title,
    album_name: c.album ?? "",
    duration: String(Math.round(c.duration ?? 0))
  }), r = await fetch(`${Gh}/get?${o}`, { signal: s });
  return r.ok ? Zh(await r.json()) : null;
}
async function zv(c, s) {
  const o = new URLSearchParams({ track_name: c.title, artist_name: c.artist }), r = await fetch(`${Gh}/search?${o}`, { signal: s });
  if (!r.ok) return null;
  const h = await r.json();
  if (!Array.isArray(h) || h.length === 0) return null;
  const v = c.duration ?? 0, y = (q) => q.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim(), O = y(c.title), p = y(c.artist), m = (q) => {
    const G = v > 0 ? Math.abs(q.duration - v) : 0;
    let R = Math.min(G, 60);
    return v > 0 && G > 10 && (R += 40), q.trackName && y(q.trackName) !== O && (R += 25), q.artistName && y(q.artistName) !== p && (R += 60), R;
  }, T = [...h.filter((q) => q.syncedLyrics)].sort((q, G) => m(q) - m(G))[0] ?? [...h].sort((q, G) => m(q) - m(G))[0];
  if (!T) return null;
  const U = v > 0 ? Math.abs(T.duration - v) : 0;
  return v > 0 && U > 25 ? {
    lines: [],
    synced: !1,
    plain: T.plainLyrics ?? (T.syncedLyrics ? wv(T.syncedLyrics) : null),
    instrumental: !!T.instrumental
  } : Zh(T);
}
function Zh(c) {
  if (c.instrumental)
    return { lines: [], synced: !1, plain: null, instrumental: !0 };
  const s = c.syncedLyrics ? fo(c.syncedLyrics) : [];
  return {
    lines: s,
    synced: s.length > 0,
    plain: c.plainLyrics ?? null,
    instrumental: !1
  };
}
function fo(c) {
  const s = /\[(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g, o = [];
  for (const r of c.split(/\r?\n/)) {
    s.lastIndex = 0;
    const h = [];
    let v, y = 0;
    for (; (v = s.exec(r)) !== null && v.index === y; ) {
      y = s.lastIndex;
      const p = Number(v[1]), m = Number(v[2]), S = v[3] ? +`0.${v[3]}` : 0;
      h.push(p * 60 + m + S);
    }
    if (h.length === 0) continue;
    const O = r.slice(y).trim();
    for (const p of h) o.push({ time: p, text: O });
  }
  return o.sort((r, h) => r.time - h.time);
}
function Mv(c, s) {
  let o = 0, r = c.length - 1, h = -1;
  for (; o <= r; ) {
    const v = o + r >> 1;
    c[v].time <= s ? (h = v, o = v + 1) : r = v - 1;
  }
  return h;
}
function wv(c) {
  return c.split(`
`).map((s) => s.replace(/\[\d+:\d+(?:[.:]\d+)?\]/g, "").trim()).filter((s) => s.length > 0).join(`
`);
}
const Tv = 3800, Nv = 0.25, _t = bo(), zh = {
  items: [],
  current: -1,
  locked: 1 / 0,
  full: !1,
  total: 0,
  note: null
};
function Cv({ embedded: c } = {}) {
  const [s, o] = A.useState(() => {
    const M = qs();
    return _t && !M.entityId ? { ...M, entityId: co } : M;
  }), [r, h] = A.useState(
    () => c ? !qs().entityId : !_t && !rh(qs())
  ), [v, y] = A.useState(null), [O, p] = A.useState("idle"), [m, S] = A.useState(Ql), [T, U] = A.useState(Jl), [q, G] = A.useState(!1), [R, K] = A.useState(
    () => _t && new URLSearchParams(window.location.search).has("lyrics")
  ), [_, Q] = A.useState(-1), [ct, gt] = A.useState(!1), [vt, yt] = A.useState(
    () => _t && new URLSearchParams(window.location.search).has("playlists") ? "playlists" : "albums"
  ), [Y, J] = A.useState([]), [ft, dt] = A.useState([]), [Ct, F] = A.useState(!1), [bt, Mt] = A.useState(null), [xt, C] = A.useState(() => ao().cached()), H = A.useRef(ao()), [$, mt] = A.useState(""), [lt, b] = A.useState(null), [D, X] = A.useState(!1), [Z, I] = A.useState(!1), [nt, st] = A.useState(zh), [Bt, Ot] = A.useState(null), [pa, ee] = A.useState(!1), [dl, Ha] = A.useState(null), [ta, Ge] = A.useState(!1), [Fl, An] = A.useState([]), [W, rt] = A.useState(!1), [wt, Lt] = A.useState(null), [ge, ke] = A.useState(!1), [kt, ae] = A.useState(!1), [oe, Ft] = A.useState(
    () => _t && new URLSearchParams(window.location.search).has("rest")
  ), Wt = A.useRef(null), me = A.useRef(null), ea = A.useRef(null), aa = A.useRef(null), Il = A.useRef(null), hl = A.useRef(null), ye = A.useRef(null), la = A.useRef(null), le = A.useRef(null), zn = A.useRef(Jl), vi = A.useRef(Date.now()), Ze = v?.attributes, na = Ze?.media_title ?? "", Na = Ze?.media_artist ?? "", Va = Ze?.media_album_name ?? "", be = Ze?.media_duration ?? 0, Pl = Ze?.friendly_name ?? "", va = v?.state === "playing", { haUrl: ml, token: Ga, entityId: ze } = s;
  A.useEffect(() => {
    if (c) {
      if (!ze) return;
      le.current = null, y(null), ea.current = c, c.onStatus = p, c.onState = (Tt) => {
        le.current = Tt, y(Tt);
      }, c.connect([ze]);
      const et = new xh(c);
      return aa.current = et, H.current = Ah(c), ch({ haUrl: "", token: "" }), () => {
        et.close(), aa.current === et && (aa.current = null);
      };
    }
    if (!_t && (!Ga || !ze)) return;
    le.current = null, y(null);
    const M = { haUrl: ml, token: Ga }, V = _t ? new cv() : new M1(M);
    ea.current = V, V.onStatus = p, V.onState = (et) => {
      le.current = et, y(et);
    }, V.connect([ze]), _t || ch(M);
    const P = _t ? null : new xh(V, vu(M));
    return aa.current = P, H.current = _t ? ao() : Ah(V), () => {
      V.close(), P?.close(), ea.current = null, aa.current === P && (aa.current = null);
    };
  }, [c, ml, Ga, ze]);
  const ga = A.useMemo(
    () => N1({ haUrl: ml }, Ze?.entity_picture),
    [ml, Ga, Ze?.entity_picture]
  );
  A.useEffect(() => {
    if (!ga) {
      S(Ql);
      return;
    }
    let M = !1;
    return Nh(ga).then((V) => {
      M || S(V);
    }), () => {
      M = !0;
    };
  }, [ga]), A.useEffect(() => {
    if (!s.lyrics || !na || !Na) {
      U(Jl), zn.current = Jl;
      return;
    }
    if (_t) {
      const P = {
        lines: fo(ov),
        synced: !0,
        plain: null,
        instrumental: !1
      };
      zn.current = P, U(P), G(!1);
      return;
    }
    const M = new AbortController();
    G(!0), Q(-1);
    const V = async () => {
      try {
        const P = await pe()?.currentLyrics(na), et = P ? fo(P) : [];
        return et.length > 0 ? { lines: et, synced: !0, plain: null, instrumental: !1 } : null;
      } catch {
        return null;
      }
    };
    return (async () => {
      try {
        const P = await V() ?? await Ev({ title: na, artist: Na, album: Va, duration: be }, M.signal);
        if (M.signal.aborted) return;
        zn.current = P, U(P), G(!1);
      } catch {
      }
    })(), () => M.abort();
  }, [s.lyrics, na, Na, Va, be]), A.useEffect(() => {
    let M = 0, V = performance.now(), P = 0, et = 0, Tt = io, De = 1, we = "", fe = -1;
    const Oa = 200 * (s.rpm / 45) ** 2, Ka = (un) => {
      const Aa = Math.min(0.1, (un - V) / 1e3);
      V = un;
      const Te = m1(le.current, Date.now()), El = Te.playing ? 1 : 0, de = El > et ? 0.45 : 1.1;
      et += (El - et) * (1 - Math.exp(-Aa / de)), et < 5e-4 && (et = 0), P = (P + et * Oa * Aa) % 360;
      const za = Te.duration > 0 && Te.playing, Al = Il.current ?? (za ? po(Te.progress) : io), Ja = Il.current !== null ? 0.05 : 0.4;
      Tt += (Al - Tt) * (1 - Math.exp(-Aa / Ja));
      const Ne = Te.playing ? 0 : 1;
      De += (Ne - De) * (1 - Math.exp(-Aa / 0.4)), hl.current?.style.setProperty("--spin", `${P.toFixed(2)}deg`), ye.current?.style.setProperty("--arm", `${Tt.toFixed(3)}deg`), ye.current?.style.setProperty("--lift", De.toFixed(3)), la.current && (la.current.style.transform = `scaleX(${Te.progress.toFixed(4)})`);
      const ka = Rs(Te.position);
      ka !== we && (we = ka, me.current && (me.current.textContent = ka));
      const Qa = zn.current.lines;
      if (Qa.length > 0) {
        const Ke = Mv(Qa, Te.position + Nv);
        Ke !== fe && (fe = Ke, Q(Ke));
      }
      M = requestAnimationFrame(Ka);
    };
    return M = requestAnimationFrame(Ka), () => cancelAnimationFrame(M);
  }, [s.rpm]), A.useEffect(() => {
    const M = Wt.current;
    M && (M.style.setProperty("--pal-a", m.a), M.style.setProperty("--pal-b", m.b), M.style.setProperty("--pal-deep", m.deep), M.style.setProperty("--vinyl-tint", s.vinylTint || m.vivid));
  }, [m, s.vinylTint]);
  const [Gs, gi] = A.useState(null), yi = _t && to().vinyl || s.vinyl, Mn = _t && to().marbleMotif || s.marbleMotif;
  A.useEffect(() => {
    const M = yi === "marble" ? dv(Mn) : null;
    if (!M) {
      gi(null);
      return;
    }
    let V = !0;
    return M.then((P) => {
      const et = Wt.current;
      !V || !et || (et.style.setProperty("--marble-color", `url("${P.color}")`), et.style.setProperty("--marble-dark", `url("${P.dark}")`), et.style.setProperty("--marble-light", `url("${P.light}")`), gi(Mn));
    }), () => {
      V = !1;
    };
  }, [Mn, yi]), A.useEffect(() => {
    let M;
    const V = () => {
      clearTimeout(M), M = setTimeout(() => ae(!0), Tv);
    }, P = () => {
      vi.current = Date.now(), ae(!1), Ft(!1), V();
    };
    V();
    for (const et of ["pointerdown", "pointermove", "keydown", "wheel"])
      window.addEventListener(et, P, { passive: !0 });
    return () => {
      clearTimeout(M);
      for (const et of ["pointerdown", "pointermove", "keydown", "wheel"])
        window.removeEventListener(et, P);
    };
  }, []), A.useEffect(() => {
    if (s.idleMinutes <= 0) return;
    const M = s.idleMinutes * 6e4, V = setInterval(() => {
      if (le.current?.state === "playing") {
        vi.current = Date.now();
        return;
      }
      Date.now() - vi.current > M && Ft(!0);
    }, 15e3);
    return () => clearInterval(V);
  }, [s.idleMinutes]), A.useEffect(() => {
    const V = setInterval(async () => {
      try {
        const et = await (await fetch(`./version.json?_=${Date.now()}`, { cache: "no-store" })).json();
        et.build && et.build !== "1790416313692" && window.location.reload();
      } catch {
      }
    }, 9e5);
    return () => clearInterval(V);
  }, []);
  const wn = A.useRef(!1);
  A.useEffect(() => {
    O !== "connected" || wn.current || (wn.current = !0, H.current.load().then((M) => {
      _l.current = JSON.stringify(M), C(M);
    }));
  }, [O]);
  const _l = A.useRef(JSON.stringify(xt));
  A.useEffect(() => {
    const M = JSON.stringify(xt);
    if (M === _l.current) return;
    const V = setTimeout(() => {
      _l.current = M, H.current.save(xt).catch(() => {
      });
    }, 500);
    return () => clearTimeout(V);
  }, [xt]);
  const Tn = A.useMemo(() => new Set(xt.hidden), [xt.hidden]), Nn = A.useMemo(() => new Set(xt.reversed), [xt.reversed]), ya = A.useRef(Nn);
  ya.current = Nn;
  const ne = (M, V) => M.includes(V) ? M.filter((P) => P !== V) : [...M, V], Me = A.useCallback(
    (M) => C((V) => ({ ...V, hidden: ne(V.hidden, M) })),
    []
  ), pl = A.useCallback(
    (M) => C((V) => ({ ...V, reversed: ne(V.reversed, M) })),
    []
  ), bi = A.useCallback(
    (M, V) => C((P) => {
      const et = new Set(M), Tt = P.hidden.filter((De) => !et.has(De));
      return { ...P, hidden: V ? Tt : [...Tt, ...M] };
    }),
    []
  ), vl = A.useRef(null), gu = A.useRef({ albums: null, playlists: null }), pe = A.useCallback(() => {
    const M = ea.current;
    return M ? (vl.current = vl.current ?? (_t ? nv(M, ze) : Q1(M, ze, aa.current)), vl.current) : null;
  }, [ze]);
  A.useEffect(() => {
    vl.current = null, st(zh);
  }, [ze]);
  const Ca = A.useRef(/* @__PURE__ */ new Set()), ba = A.useCallback(
    async (M) => {
      if ((M === "albums" ? Y.length > 0 : ft.length > 0) || Ca.current.has(M)) return;
      const P = pe();
      if (P) {
        Ca.current.add(M), F(!0), Mt(null);
        try {
          M === "albums" ? J(await P.albums()) : dt(await P.playlists());
        } catch (et) {
          Mt(
            `Impossible de lire la bibliothèque : ${et instanceof Error ? et.message : String(et)}`
          );
        } finally {
          Ca.current.delete(M), F(Ca.current.size > 0);
        }
      }
    },
    [Y.length, ft.length, pe]
  ), Za = A.useCallback(() => {
    I(!1), Ge(!1), K(!1), gt(!0), ba(vt);
  }, [vt, ba]), gl = A.useCallback(
    (M) => {
      yt(M), ba(M);
    },
    [ba]
  ), Xa = vt === "albums" ? Y : ft, yl = A.useMemo(
    () => lt ? (
      // Une recherche montre tout : on cherche justement ce qu'on ne voit pas.
      vt === "albums" ? [...lt.albums, ...lt.tracks] : lt.playlists
    ) : Xa.filter((M) => !Tn.has(M.uri)),
    [Tn, vt, lt, Xa]
  ), ie = A.useMemo(() => ft.find((M) => M.pinned) ?? null, [ft]), Cn = A.useRef({ tab: vt, searching: !1 });
  Cn.current = { tab: vt, searching: lt !== null };
  const yu = A.useCallback((M) => {
    Cn.current.searching || (gu.current[Cn.current.tab] = M);
  }, []), ja = A.useRef(!1);
  A.useEffect(() => {
    if (_t || ja.current || !v) return;
    ja.current = !0;
    const M = () => {
      ba("albums"), ba("playlists");
    }, V = typeof window.requestIdleCallback == "function", P = V ? window.requestIdleCallback(M, { timeout: 3e3 }) : window.setTimeout(M, 1200);
    return () => {
      V ? window.cancelIdleCallback(P) : clearTimeout(P);
    };
  }, [v, ba]), A.useEffect(() => {
    const M = $.trim();
    if (M.length < 2) {
      b(null), X(!1);
      return;
    }
    let V = !0;
    X(!0);
    const P = setTimeout(async () => {
      const et = pe();
      if (et)
        try {
          const Tt = await et.search(M);
          V && b(Tt);
        } catch (Tt) {
          V && (Mt(
            `Recherche impossible : ${Tt instanceof Error ? Tt.message : String(Tt)}`
          ), b({ albums: [], playlists: [], tracks: [] }));
        } finally {
          V && X(!1);
        }
    }, 320);
    return () => {
      V = !1, clearTimeout(P);
    };
  }, [$, pe]);
  const Ua = A.useRef(0), xi = A.useRef(0), $l = A.useRef(!1), tn = A.useRef(!1), xa = A.useCallback(async () => {
    const M = pe();
    if (!M) return;
    if ($l.current) {
      tn.current = !0;
      return;
    }
    const V = ++xi.current, P = performance.now();
    ee(!0), Ha(null);
    try {
      const et = await M.queue();
      if (V !== xi.current || P < Ua.current) return;
      if ($l.current) {
        tn.current = !0;
        return;
      }
      st(et);
    } catch (et) {
      Ha(
        `Impossible de lire la file : ${et instanceof Error ? et.message : String(et)}`
      );
    } finally {
      V === xi.current && ee(!1);
    }
  }, [pe]);
  A.useEffect(() => {
    Z || ($l.current = !1), Z && xa();
  }, [Z, na, xa]), A.useEffect(() => {
    if (!Z) return;
    const M = pe();
    if (!M) return;
    let V;
    const P = M.watchQueue(() => {
      clearTimeout(V), V = setTimeout(() => {
        xa();
      }, 180);
    });
    return () => {
      P(), clearTimeout(V);
    };
  }, [Z, xa, pe]);
  const jn = A.useCallback(
    async (M, V) => {
      const P = pe(), et = nt.items[M];
      if (!(!P || !et || M === V)) {
        Ua.current = performance.now(), st((Tt) => {
          const De = [...Tt.items], [we] = De.splice(M, 1);
          return De.splice(V, 0, we), { ...Tt, items: De };
        });
        try {
          await P.move(et, V - M);
        } catch (Tt) {
          Ha(
            `Déplacement refusé : ${Tt instanceof Error ? Tt.message : String(Tt)}`
          ), Ua.current = 0, xa();
        }
      }
    },
    [nt.items, xa, pe]
  ), en = A.useRef(null);
  A.useEffect(() => {
    if (Bt === null) return;
    const M = nt.items[nt.current];
    M && M.uri === en.current && Ot(null);
  }, [nt, Bt]), A.useEffect(() => {
    if (Bt === null) return;
    const M = setTimeout(() => Ot(null), 8e3);
    return () => clearTimeout(M);
  }, [Bt]);
  const Xe = A.useRef(null), qe = A.useCallback(
    async (M) => {
      const V = pe();
      if (V) {
        en.current = M.uri, Ot(M.id);
        try {
          await V.jumpTo(M), Xe.current && clearTimeout(Xe.current), Xe.current = setTimeout(() => {
            xa();
          }, 1200);
        } catch (P) {
          Ot(null), Ha(
            `Impossible d'aller à ce morceau : ${P instanceof Error ? P.message : String(P)}`
          );
        }
      }
    },
    [xa, pe]
  ), bu = A.useCallback(async () => {
    rt(!0), Lt(null);
    try {
      An(
        c ? c.players() : _t ? yo.map((M) => ({
          entity_id: M.entity_id,
          state: M.entity_id === ze ? v?.state ?? "idle" : "idle",
          attributes: { friendly_name: M.name }
        })) : await Dh({ haUrl: ml, token: Ga })
      );
    } catch (M) {
      Lt(
        `Impossible de lister les enceintes : ${M instanceof Error ? M.message : String(M)}`
      );
    } finally {
      rt(!1);
    }
  }, [c, v?.state, ze, ml, Ga]), Si = A.useCallback((M) => {
    o((V) => {
      const P = { ...V, entityId: M };
      return lo(P), P;
    }), Ge(!1);
  }, []), Ei = A.useCallback(
    async (M) => {
      const V = pe();
      if (V)
        try {
          await V.transferTo(M);
        } catch (P) {
          Lt(
            `Transfert refusé : ${P instanceof Error ? P.message : String(P)}`
          );
          return;
        }
      Si(M);
    },
    [Si, pe]
  ), xu = A.useCallback((M, V) => {
    vl.current?.play(M, { reversed: ya.current.has(M.uri) });
    const P = V.parentElement, et = (Wa) => Wt.current?.querySelector(Wa) ?? null, Tt = et(".sleeve"), De = et(".library");
    if (!P || !Tt) {
      gt(!1);
      return;
    }
    const we = Tt.getBoundingClientRect(), fe = V.dataset.i === void 0 ? Math.max(V.offsetHeight, 48) : V.offsetWidth, Oa = V.getBoundingClientRect(), Ka = parseFloat(P.style.getPropertyValue("--arc")) || 8, un = parseFloat(P.dataset.offset ?? "") || 0, Aa = parseFloat(V.dataset.i ?? "") || 0, Te = V.dataset.i === void 0 ? "0deg" : `${90 + (Aa - un) * Ka}deg`, El = Oa.left + Oa.width / 2 - fe / 2, de = Oa.top + Oa.height / 2 - fe / 2, za = we.width / fe, Al = we.left + we.width / 2 - (El + fe / 2), Ja = we.top + we.height / 2 - (de + fe / 2), Ne = document.createElement("div"), ka = Wt.current ?? document.body, Qa = ka.getBoundingClientRect();
    Ne.className = "flyer", Ne.style.transformOrigin = "50% 50%", Ne.style.left = `${El - Qa.left}px`, Ne.style.top = `${de - Qa.top}px`, Ne.style.width = `${fe}px`, Ne.style.height = `${fe}px`, M.image && (Ne.style.backgroundImage = `url("${M.image}")`), ka.appendChild(Ne);
    const Ke = (Wa, Xs) => et(Wa)?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 260,
      delay: Xs,
      easing: "ease-out",
      fill: "forwards"
    }), On = [Ke(".disc", 0), Ke(".tonearm", 0), Ke(".tonearm-base", 0)], Mu = Ne.animate(
      [
        { transform: `perspective(2400px) rotateY(${Te}) scale(1)`, offset: 0 },
        // Elle se déhanche d'abord hors du bac, avant de partir.
        { transform: `perspective(2400px) rotateY(${Te}) scale(1.06) translateY(-3%)`, offset: 0.22 },
        {
          transform: `perspective(2400px) rotate(-3deg) rotateY(0deg) translate(${Al}px, ${Ja}px) scale(${za})`,
          offset: 1
        }
      ],
      { duration: 880, easing: "cubic-bezier(0.32, 0.72, 0, 1)", fill: "forwards" }
    );
    De?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 420,
      delay: 180,
      easing: "ease-out",
      fill: "forwards"
    }), window.setTimeout(() => gt(!1), 620), Mu.finished.then(() => {
      for (const Wa of On) Wa?.cancel();
      et(".disc")?.animate(
        [
          { opacity: 0, transform: "translateY(-50%) translateX(-14%) scale(0.94)" },
          { opacity: 1, transform: "translateY(-50%) translateX(0) scale(1)" }
        ],
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
      for (const Wa of [".tonearm", ".tonearm-base"])
        et(Wa)?.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 520,
          delay: 180,
          easing: "ease-out"
        });
      Ne.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, delay: 120, fill: "forwards" }).finished.then(
        () => Ne.remove(),
        () => Ne.remove()
      );
    });
  }, []);
  A.useEffect(() => {
    const M = new URLSearchParams(window.location.search);
    _t && (M.has("lib") || M.has("playlists")) && Za(), _t && M.has("queue") && I(!0);
  }, []);
  const Jt = A.useCallback(
    (M, V = {}) => {
      ea.current?.callService("media_player", M, V, s.entityId)?.catch(() => {
      });
    },
    [s.entityId]
  ), Su = A.useRef(null);
  A.useEffect(() => {
    if (!v) return;
    const M = Su.current;
    if (Su.current = va, M === null || M === va) return;
    const V = va ? s.onPlay : s.onStop;
    if (!d1(V)) return;
    const [P, et] = V.service.trim().split(".");
    !P || !et || ea.current?.callService(P, et, {}, V.entityId.trim() || void 0)?.catch(() => {
    });
  }, [v, va, s.onPlay, s.onStop]);
  const [Re, Ai] = A.useState({ nonce: 0, dir: 1 }), an = A.useCallback(
    (M) => Ai((V) => ({ nonce: V.nonce + 1, dir: M })),
    []
  ), bl = A.useCallback(() => Jt("media_play_pause"), [Jt]), xl = A.useCallback(() => Jt("media_play"), [Jt]), Eu = A.useCallback(() => Jt("media_pause"), [Jt]), ln = A.useCallback(() => {
    an(1), Jt("media_next_track");
  }, [an, Jt]), Sa = A.useCallback(() => {
    an(-1), Jt("media_previous_track");
  }, [an, Jt]), zi = A.useCallback(
    (M) => Jt("media_seek", { seek_position: Math.max(0, Math.round(M)) }),
    [Jt]
  ), Au = A.useCallback(
    (M) => {
      be > 0 && zi(M * be);
    },
    [be, zi]
  ), zu = A.useCallback(() => {
    Jt("repeat_set", { repeat: { off: "all", all: "one", one: "off" }[Ze?.repeat ?? "off"] });
  }, [Ze?.repeat, Jt]);
  A.useEffect(() => {
    const M = (V) => {
      if (Ch(V) || r || ct) return;
      const P = Ze?.volume_level ?? 0;
      switch (V.key) {
        case " ":
          V.preventDefault(), bl();
          break;
        case "ArrowRight":
          ln();
          break;
        case "ArrowLeft":
          Sa();
          break;
        case "ArrowUp":
          Jt("volume_set", { volume_level: Math.min(1, P + 0.05) });
          break;
        case "ArrowDown":
          Jt("volume_set", { volume_level: Math.max(0, P - 0.05) });
          break;
        case "l":
          I(!1), Ge(!1), K((et) => !et);
          break;
      }
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [Ze?.volume_level, Jt, ln, Sa, ct, r, bl]);
  const Mi = (M) => {
    lo(M), o(M), h(!1);
  }, Zs = `${s.rpm >= 45 ? "45 RPM" : "33⅓ RPM"} · STEREO`, Un = [Pl.toUpperCase(), be > 0 ? Rs(be) : ""].filter(Boolean).join(" · "), Ea = s.lyrics && (T.lines.length > 0 || !!T.plain), Dn = {
    connecting: "Connexion à Home Assistant…",
    reconnecting: "Reconnexion…",
    unauthorized: "Jeton refusé — ouvre les réglages",
    error: "Erreur de connexion"
  }, nn = {
    vinyl: s.vinyl,
    background: s.background,
    marbleMotif: s.marbleMotif,
    ..._t ? to() : {}
  }, Sl = Z || ta, Da = (M) => {
    I(M === "queue"), Ge(M === "speakers"), K(M === "lyrics");
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "app",
      ref: Wt,
      "data-vinyl": nn.vinyl,
      "data-marble": Gs ?? void 0,
      "data-bg": nn.background,
      "data-panel": Sl,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "backdrop", children: nn.background === "adaptive" && /* @__PURE__ */ f.jsx(Th, { image: ga, className: "backdrop__art" }) }),
        /* @__PURE__ */ f.jsx("div", { className: "stage", children: /* @__PURE__ */ f.jsx(
          Z1,
          {
            title: s.labelText || na,
            artist: Na,
            album: Va,
            footer: Zs,
            mark: Un,
            coverUrl: ga,
            settings: s,
            sleeveFront: ge,
            onToggleSleeve: () => ke((M) => !M),
            onTogglePlay: bl,
            armOverride: Il,
            onSeekProgress: Au,
            onPlay: xl,
            onPause: Eu,
            onNext: ln,
            onPrevious: Sa,
            seekable: be > 0,
            spinRef: hl,
            armRef: ye,
            swap: Re
          }
        ) }),
        /* @__PURE__ */ f.jsxs("div", { className: "hud", "data-quiet": kt && !r, children: [
          /* @__PURE__ */ f.jsx(
            $p,
            {
              entity: v,
              name: Pl,
              onLibrary: Za,
              onQueue: () => Da(Z ? null : "queue"),
              onSpeakers: () => {
                Da("speakers"), bu();
              },
              queueOn: Z,
              onSettings: () => h(!0),
              onLyrics: () => Da(R ? null : "lyrics"),
              onShuffle: (M) => Jt("shuffle_set", { shuffle: M }),
              onRepeat: zu,
              lyricsOn: R,
              lyricsAvailable: Ea
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "hud__bottom", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "track", children: [
              /* @__PURE__ */ f.jsx("span", { className: "track__title", children: na || "Rien en lecture" }),
              /* @__PURE__ */ f.jsx("span", { className: "track__artist", children: [Na, Va].filter(Boolean).join(" — ") })
            ] }),
            /* @__PURE__ */ f.jsx(
              _p,
              {
                entity: v,
                playing: va,
                showPlayButton: s.playControl === "button",
                onPlayPause: bl,
                onPrevious: Sa,
                onNext: ln,
                onVolume: (M) => Jt("volume_set", { volume_level: M })
              }
            ),
            /* @__PURE__ */ f.jsxs("div", { className: "times", children: [
              /* @__PURE__ */ f.jsx("span", { ref: me, children: "0:00" }),
              /* @__PURE__ */ f.jsx("span", { className: "times__bar", children: /* @__PURE__ */ f.jsx("span", { className: "times__fill", ref: la }) }),
              /* @__PURE__ */ f.jsx("span", { children: Rs(be) })
            ] })
          ] })
        ] }),
        Dn[O] && /* @__PURE__ */ f.jsxs("div", { className: "status", children: [
          /* @__PURE__ */ f.jsx("span", { className: "status__dot" }),
          Dn[O]
        ] }),
        R && /* @__PURE__ */ f.jsx(
          o1,
          {
            lyrics: T,
            activeIndex: _,
            loading: q,
            onClose: () => K(!1),
            onSeek: zi
          }
        ),
        Z && /* @__PURE__ */ f.jsx(
          g1,
          {
            items: nt.items,
            loading: pa,
            error: dl,
            current: nt.current,
            locked: nt.locked,
            full: nt.full,
            total: nt.total,
            note: nt.note,
            pending: Bt,
            onPick: (M) => {
              qe(M);
            },
            onMove: (M, V) => {
              jn(M, V);
            },
            onSorting: (M) => {
              $l.current = M, !M && tn.current && (tn.current = !1, xa());
            },
            onClose: () => I(!1)
          }
        ),
        ta && /* @__PURE__ */ f.jsx(
          S1,
          {
            players: Fl,
            current: ze,
            loading: W,
            error: wt,
            onListen: Si,
            onTransfer: (M) => {
              Ei(M);
            },
            onClose: () => Ge(!1)
          }
        ),
        ct && /* @__PURE__ */ f.jsx(
          r1,
          {
            items: yl,
            tab: vt,
            onTab: gl,
            favorite: ie,
            allItems: Xa,
            hidden: Tn,
            reversed: Nn,
            canReverse: vl.current?.canReverse() ?? _t,
            onToggleHidden: Me,
            onToggleReversed: pl,
            onSetVisible: bi,
            loading: Ct,
            error: bt,
            onPlay: xu,
            onClose: () => gt(!1),
            resumeIndex: lt ? null : gu.current[vt],
            onFocusChange: yu,
            query: $,
            onQuery: mt,
            searching: D,
            zoom: s.libraryZoom
          }
        ),
        oe && /* @__PURE__ */ f.jsx(b1, { onWake: () => Ft(!1) }),
        r && /* @__PURE__ */ f.jsx(
          O1,
          {
            settings: s,
            onSave: Mi,
            onCancel: _t || (c ? s.entityId : rh(s)) ? () => h(!1) : null,
            requireConnection: !_t && !c,
            embedded: !!c,
            knownPlayers: c ? c.players() : null
          }
        )
      ]
    }
  );
}
class jv {
  onState = () => {
  };
  onStatus = () => {
  };
  hass;
  watched = [];
  /** Dernier état publié, pour ne pas réémettre à chaque battement du frontend. */
  last = null;
  constructor(s) {
    this.hass = s;
  }
  connect(s) {
    this.watched = s, this.onStatus("connected"), this.publish();
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
  update(s) {
    this.hass = s, this.publish();
  }
  publish() {
    const s = this.watched[0];
    if (!s) return;
    const o = this.hass.states[s];
    if (!o) {
      this.onStatus("reconnecting", `Entité ${s} introuvable`);
      return;
    }
    const r = this.last;
    r !== null && r.state === o.state && r.attributes.media_title === o.attributes.media_title && r.attributes.media_position === o.attributes.media_position && r.attributes.media_position_updated_at === o.attributes.media_position_updated_at && r.attributes.volume_level === o.attributes.volume_level && r.attributes.shuffle === o.attributes.shuffle && r.attributes.repeat === o.attributes.repeat && r.attributes.entity_picture === o.attributes.entity_picture || (this.last = o, this.onStatus("connected"), this.onState(o));
  }
  callService(s, o, r = {}, h) {
    return this.hass.callService(
      s,
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
  async callServiceWithResponse(s, o, r = {}, h) {
    const v = await this.hass.callWS({
      type: "call_service",
      domain: s,
      service: o,
      service_data: r,
      ...h ? { target: { entity_id: h } } : {},
      return_response: !0
    });
    return v?.response ?? v;
  }
  /** Commande WebSocket brute : le superviseur, pour joindre Music Assistant. */
  callWS(s) {
    return this.hass.callWS(s);
  }
  /** L'entrée de configuration de Music Assistant, que ciblent get_library et search. */
  async configEntry(s) {
    return (await this.hass.callWS({
      type: "config_entries/get"
    })).find((r) => r.domain === s)?.entry_id ?? null;
  }
  /** Toutes les enceintes visibles, sans passer par le REST. */
  players() {
    return Object.values(this.hass.states).filter((s) => !!s?.entity_id.startsWith("media_player.")).sort((s, o) => {
      const r = s.attributes.mass_player_type ? 0 : 1, h = o.attributes.mass_player_type ? 0 : 1;
      return r !== h ? r - h : (s.attributes.friendly_name ?? s.entity_id).localeCompare(
        o.attributes.friendly_name ?? o.entity_id
      );
    });
  }
}
function Uv(c) {
  const s = Object.values(c.states).filter(
    (h) => !!h?.entity_id.startsWith("media_player.")
  ), o = s.filter((h) => h.attributes.mass_player_type !== void 0), r = o.length > 0 ? o : s;
  return r.find((h) => h.state === "playing")?.entity_id ?? r.find((h) => h.state === "paused")?.entity_id ?? r[0]?.entity_id ?? "";
}
const Mh = `@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,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) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400 700;font-display:swap;src:url(data:font/woff2;base64,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) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}:root,:host{--pal-a: hsl(220 4% 46%);--pal-b: hsl(220 5% 34%);--pal-deep: hsl(220 6% 12%);--spin: 0deg;--arm: 89deg;--lift: 1;--progress: 0;--disc: min(74vh, 44vw);--R: calc(var(--disc) / 2);--sleeve: calc(var(--disc) * 1.04);--overlap: calc(var(--disc) * .215);--ink: hsl(0 0% 100%);--ink-dim: hsl(0 0% 100% / .62);--ink-faint: hsl(0 0% 100% / .32);--panel-w: min(400px, 88vw);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-soft: cubic-bezier(.4, 0, .2, 1);color-scheme:dark;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-synthesis-weight:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}html,body,#root{height:100%}body{background:#0b0c0e;color:var(--ink);overflow:hidden;overscroll-behavior:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;touch-action:manipulation}button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}.app{position:fixed;inset:0;display:grid;place-items:center;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);isolation:isolate}.backdrop{position:absolute;inset:0;z-index:0;background:var(--pal-deep);transition:background-color 1.4s var(--ease-soft)}.backdrop:before,.backdrop:after{content:"";position:absolute;inset:-20%;transition:background 1.4s var(--ease-soft),opacity 1.4s var(--ease-soft)}.backdrop:before{background:radial-gradient(60% 70% at 22% 30%,var(--pal-a) 0%,transparent 62%),radial-gradient(55% 65% at 82% 78%,var(--pal-b) 0%,transparent 60%);opacity:.55;filter:blur(40px)}.backdrop:after{background:radial-gradient(75% 75% at 50% 50%,transparent 30%,hsl(0 0% 0% / .55) 100%)}.backdrop__art{opacity:.7}.backdrop__art .ambient__layer{filter:blur(18px) saturate(1.35) brightness(.58)}.app[data-bg=subtle] .backdrop:before{opacity:.22}.app[data-bg=neutral] .backdrop{background:linear-gradient(212deg,#b2b2b2,#9a9a9b 45%,#7e7f81)}.app[data-bg=neutral] .backdrop:before,.app[data-bg=neutral] .backdrop:after{opacity:0}.app[data-bg=dark] .backdrop{background:#0c0c0e}.app[data-bg=dark] .backdrop:before{opacity:.12}.stage{position:relative;z-index:1;display:grid;place-items:center;width:100%;height:100%;transition:transform .42s var(--ease-out)}.app[data-panel=true] .stage{transform:translate(calc(-.5 * var(--panel-w)))}@media(max-width:900px){.app[data-panel=true] .stage{transform:none}}.deck{position:relative;width:calc(var(--sleeve) + var(--disc) - var(--overlap));height:var(--sleeve);overflow:visible;transform:translateY(-1.5vh);touch-action:none}.sleeve{position:absolute;top:50%;left:0;width:var(--sleeve);height:var(--sleeve);transform:translateY(-50%) rotate(-3deg);transition:transform .62s var(--ease-out),filter .62s var(--ease-out);z-index:1;cursor:pointer}.sleeve__art{position:absolute;inset:0;object-fit:cover;width:100%;height:100%;border-radius:calc(var(--disc) * .007);background:#2c2d30;box-shadow:0 calc(var(--disc) * .004) calc(var(--disc) * .01) #0000002e,0 calc(var(--disc) * .03) calc(var(--disc) * .07) #00000047}.sleeve__edge{position:absolute;inset:0;pointer-events:none;background:linear-gradient(100deg,hsl(0 0% 0% / .16) 0%,transparent 14%,transparent 92%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 100% / .5) 100%)}.deck[data-sleeve=front] .sleeve{transform:translateY(-50%) translate(calc(var(--disc) * .2)) scale(1.03);z-index:4}.sleeve__placeholder{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(150deg,#3a3c41,#212327);color:var(--ink-faint);font-size:calc(var(--disc) * .07);letter-spacing:.16em;text-transform:uppercase}.disc{position:absolute;top:50%;right:0;width:var(--disc);height:var(--disc);transform:translateY(-50%);border-radius:50%;z-index:2;cursor:pointer;filter:drop-shadow(0 calc(var(--disc) * .028) calc(var(--disc) * .055) hsl(0 0% 0% / .3));transition:transform .62s var(--ease-out)}.deck[data-sleeve=front] .disc{transform:translateY(-50%) translate(calc(var(--disc) * .06))}.disc__layer{position:absolute;inset:0;border-radius:50%;pointer-events:none}.app[data-vinyl=clear] .disc__material{background:radial-gradient(circle at 34% 24%,#fff,#f4f4f3 34%,#e7e7e5 62%,#d8d8d6 84%,#cfcfcd)}.app[data-vinyl=glass] .disc__material{background:radial-gradient(circle at 34% 24%,#fff6,#ffffff45 46%,#ffffff54);-webkit-backdrop-filter:blur(5px) saturate(.25) brightness(1.18);backdrop-filter:blur(5px) saturate(.25) brightness(1.18)}.app[data-vinyl=glass] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff29,#00000008,#ffffff29 3.4px)}.app[data-vinyl=glass] .disc__light{background:linear-gradient(198deg,#ffffff57,#ffffff1a 20%,#fff0 38%,#0000000d 58%,#0000001f 82%,#00000029)}.app[data-vinyl=black] .disc__material{background:radial-gradient(circle at 34% 24%,#2a2c31,#191b1f 38%,#101216 68%,#0a0b0e)}.app[data-vinyl=tinted] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--pal-a) 30%,#ffffff),color-mix(in oklab,var(--pal-a) 62%,#ffffff) 46%,color-mix(in oklab,var(--pal-a) 88%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__material,.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,#fdfcfa,#f3efe9 46%,#e2ddd5)}.app[data-vinyl=marble] .disc__pattern:after,.app[data-vinyl=splatter] .disc__pattern:after{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 78%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 52%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 82%,#000000) 100%);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:before,.app[data-vinyl=splatter] .disc__pattern:before{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#000000);transition:background 1.4s var(--ease-soft)}.app[data-vinyl=marble] .disc__pattern:after{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 55%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 80%,#000000) 100%);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.004 0.009' numOctaves='5' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.15 0.95 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.004 0.009' numOctaves='5' seed='11' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0.15 0.95 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>")}.app[data-vinyl=marble] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 72%,#000000);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='5' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0.3 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='5' seed='29' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0.3 1 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.55}.app[data-vinyl=marble][data-marble] .disc__pattern:before{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 0%,var(--vinyl-tint, hsl(24 55% 45%)) 55%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 80%,#000000) 100%);-webkit-mask-image:var(--marble-color);mask-image:var(--marble-color);-webkit-mask-size:100% 100%;mask-size:100% 100%;opacity:1}.app[data-vinyl=marble][data-marble] .disc__pattern:after{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 55%,#000000);-webkit-mask-image:var(--marble-dark);mask-image:var(--marble-dark);-webkit-mask-size:100% 100%;mask-size:100% 100%;opacity:.75}.app[data-vinyl=marble][data-marble] .disc__veins{background:#fffdf8;-webkit-mask-image:var(--marble-light);mask-image:var(--marble-light);-webkit-mask-size:100% 100%;mask-size:100% 100%;opacity:.85}.app[data-vinyl=splatter] .disc__material{background:radial-gradient(circle at 34% 24%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 62%,#ffffff),color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 88%,#ffffff) 46%,color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 92%,#000000));transition:background 1.4s var(--ease-soft)}.app[data-vinyl=splatter] .disc__pattern:after{background:#f7f3ec;-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.026' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>"),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='1' seed='17' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");-webkit-mask-composite:source-over;mask-composite:add;opacity:.9}.app[data-vinyl=splatter] .disc__pattern:before{background:color-mix(in oklab,var(--vinyl-tint, hsl(24 55% 45%)) 45%,#000000);-webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'><filter id='n' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2' seed='41' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1'/></feComponentTransfer></filter><rect width='700' height='700' filter='url(%23n)'/></svg>");opacity:.75}.app[data-vinyl=marble] .disc__grooves,.app[data-vinyl=splatter] .disc__grooves{opacity:.62}.disc__light{background:linear-gradient(198deg,#ffffff8c,#ffffff2e 18%,#fff0 34%,#0000000f 52%,#00000024 72%,#0000002e 90%,#00000038)}.app[data-vinyl=black] .disc__light{background:linear-gradient(196deg,#ffffff29,#ffffff0d 26%,#fff0 46%,#0000001f 78%,#0003)}.disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff38,#0000000e,#ffffff38 3.4px);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45.9%,#000 48.4%,#000 95.5%,transparent 98%)}.app[data-vinyl=black] .disc__grooves{background:repeating-radial-gradient(circle at 50% 50%,#ffffff1a,#00000073,#ffffff1a 3.4px)}.disc__aniso{background:conic-gradient(from 0deg,hsl(0 0% 100% / .075) 0deg,transparent 44deg,hsl(0 0% 0% / .05) 96deg,transparent 140deg,hsl(0 0% 100% / .06) 187deg,transparent 232deg,hsl(0 0% 0% / .038) 283deg,transparent 320deg,hsl(0 0% 100% / .075) 360deg);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 44%,#000 50%,#000 96%,transparent 99%)}.disc__flecks{--fleck: hsl(0 0% 0% / .075);background:radial-gradient(ellipse 2.6% .9% at 71% 33%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.9% .7% at 30% 64%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.3% .8% at 57% 79%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.6% .6% at 25% 38%,var(--fleck),transparent 70%),radial-gradient(ellipse 2.1% .8% at 79% 59%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.4% .6% at 46% 18%,var(--fleck),transparent 70%),radial-gradient(ellipse 1.8% .7% at 63% 12%,var(--fleck),transparent 70%);-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 50%,#000 95%,transparent 98%)}.app[data-vinyl=black] .disc__flecks{--fleck: hsl(0 0% 100% / .13)}.app[data-vinyl=glass] .disc__flecks{--fleck: hsl(0 0% 100% / .16)}.disc__gloss{background:linear-gradient(112deg,transparent 24%,hsl(0 0% 100% / .09) 37%,hsl(0 0% 100% / .24) 44.5%,hsl(0 0% 100% / .05) 52%,transparent 66%);mix-blend-mode:screen;-webkit-mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%);mask-image:radial-gradient(circle at 50% 50%,transparent 45%,#000 49%,#000 95%,transparent 99%)}.app[data-vinyl=black] .disc__gloss{opacity:.55}.disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .05) 95%,hsl(0 0% 100% / .16) 98%,hsl(0 0% 0% / .08) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .09) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff80,inset 0 2px 3px #ffffff73,inset 0 -2px 4px #0000001a}.app[data-vinyl=black] .disc__edge{background:radial-gradient(circle at 50% 50%,transparent 91%,hsl(0 0% 0% / .3) 95%,hsl(0 0% 100% / .14) 98%,hsl(0 0% 0% / .35) 100%),radial-gradient(circle at 50% 50%,transparent 43.5%,hsl(0 0% 100% / .07) 45.5%,transparent 48.5%);box-shadow:inset 0 0 0 1px #ffffff29,inset 0 2px 3px #ffffff2e,inset 0 -2px 4px #0006}.disc__spin{position:absolute;inset:0;border-radius:50%;transform:rotate(var(--spin));will-change:transform;backface-visibility:hidden}.label{position:absolute;top:50%;left:50%;width:46.4%;height:46.4%;transform:translate(-50%,-50%);border-radius:50%;overflow:hidden;background:#f1f0ed;box-shadow:0 0 0 1px #3b3835d9}.label__svg{display:block;width:100%;height:100%}.label__title{font-weight:800;letter-spacing:-.028em}.label__artist{font-weight:650;letter-spacing:-.012em}.label__micro{font-family:Iowan Old Style,Palatino,Palatino Linotype,Georgia,Times New Roman,serif;font-weight:400;letter-spacing:.005em}.tonearm{position:absolute;top:calc(50% - .7392 * var(--R));right:calc(.0674 * var(--R));width:0;height:0;z-index:5;pointer-events:none}.tonearm-base{position:absolute;top:calc(50% - .7392 * var(--R) - .3655 * var(--R));right:calc(.0674 * var(--R) - .2225 * var(--R));width:calc(var(--R) * .425);height:calc(var(--R) * .641);border-radius:calc(var(--R) * .2125);transform:rotate(-6deg);z-index:0;pointer-events:none;background:#ffffff21;box-shadow:inset 0 0 0 1px #ffffff1f,0 calc(var(--R) * .01) calc(var(--R) * .03) #0000001a}.tonearm__arm{position:absolute;inset:0;transform:rotate(var(--arm));transform-origin:0 0;will-change:transform}.tonearm__svg{position:absolute;left:calc(var(--R) * -.42);top:calc(var(--R) * -.4);width:calc(var(--R) * 2.17);height:calc(var(--R) * .82);overflow:visible;filter:drop-shadow(calc(var(--R) * .006 * (1 + 2 * var(--lift))) calc(var(--R) * .016 * (1 + 2.4 * var(--lift))) calc(var(--R) * .012 * (1 + 2.2 * var(--lift))) hsl(0 0% 0% / .34));transform:scale(calc(1 + .014 * var(--lift)));transform-origin:19.35% 48.8%}.tonearm__grip{position:absolute;top:calc(var(--R) * -.22);left:calc(var(--R) * .86);width:calc(var(--R) * .82);height:calc(var(--R) * .46);pointer-events:auto;touch-action:none;cursor:grab;border-radius:calc(var(--R) * .22)}.tonearm[data-dragging=true] .tonearm__grip{cursor:grabbing}.tonearm[data-dragging=true] .tonearm__svg{filter:drop-shadow(0 0 calc(var(--R) * .05) hsl(0 0% 100% / .35))}.hud{position:absolute;inset:0;z-index:6;display:grid;grid-template-rows:auto 1fr;padding:clamp(14px,2.4vh,30px) clamp(18px,3vw,44px);pointer-events:none}.hud__top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;transition:opacity .45s var(--ease-soft)}.hud__bottom{align-self:end;display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:clamp(12px,2vw,32px)}.hud__tools,.controls,.volume,.hud .iconbtn{pointer-events:auto}.hud__name{padding-left:4px;font-size:clamp(11px,1.4vh,14px);font-weight:550;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint)}.hud__tools,.hud__left{display:flex;align-items:center;gap:2px}.iconbtn--small{width:clamp(30px,4vh,40px);height:clamp(30px,4vh,40px);color:var(--ink-dim)}.iconbtn--small:hover{color:var(--ink)}.iconbtn--small svg{width:52%;height:52%}.badge-one{position:absolute;transform:translateY(.5px);font-size:9px;font-weight:700;line-height:1;pointer-events:none}.iconbtn{position:relative}.track{min-width:0;display:grid;gap:2px}.track__title{font-size:clamp(15px,1.9vh,22px);font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.track__artist{font-size:clamp(12px,1.5vh,17px);color:var(--ink-dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.times{justify-self:end;display:flex;align-items:center;gap:10px;font-size:clamp(11px,1.4vh,15px);font-variant-numeric:tabular-nums;color:var(--ink-dim)}.times__bar{position:relative;width:clamp(80px,12vw,190px);height:3px;border-radius:2px;background:#ffffff2e;overflow:hidden}.times__fill{position:absolute;inset:0;transform-origin:left center;transform:scaleX(var(--progress));background:#fffc}.controls{display:flex;align-items:center;gap:clamp(10px,1.6vw,22px);padding:8px 12px;border-radius:999px;background:#00000038;-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);box-shadow:inset 0 0 0 1px #ffffff1a;transition:opacity .45s var(--ease-soft),transform .45s var(--ease-out)}.iconbtn{display:grid;place-items:center;width:clamp(38px,5.2vh,52px);height:clamp(38px,5.2vh,52px);border-radius:50%;color:var(--ink);transition:background .18s var(--ease-soft),transform .18s var(--ease-out),opacity .2s var(--ease-soft)}.iconbtn:hover{background:#ffffff1f}.iconbtn:active{transform:scale(.9)}.iconbtn[aria-pressed=true]{color:var(--pal-a);background:#ffffff24}.iconbtn--play{width:clamp(46px,6.6vh,66px);height:clamp(46px,6.6vh,66px);background:#ffffff24}.iconbtn:disabled{opacity:.28;cursor:default}.iconbtn svg{width:45%;height:45%;fill:currentColor}.iconbtn--play svg{width:42%;height:42%}.volume{display:flex;align-items:center;gap:10px;padding:0 6px}.volume input[type=range]{width:clamp(70px,9vw,130px);height:22px;appearance:none;background:none;cursor:pointer}.volume input[type=range]::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-webkit-slider-thumb{appearance:none;width:13px;height:13px;margin-top:-5px;border-radius:50%;background:var(--ink);box-shadow:0 1px 4px #0006}.volume input[type=range]::-moz-range-track{height:3px;border-radius:2px;background:#ffffff3d}.volume input[type=range]::-moz-range-thumb{width:13px;height:13px;border:0;border-radius:50%;background:var(--ink)}.hud[data-quiet=true] .hud__top,.hud[data-quiet=true] .controls{opacity:0;pointer-events:none}.hud[data-quiet=true] .controls{transform:translateY(8px)}.lyrics{position:absolute;inset:0;z-index:7;display:grid;place-items:center;padding:2vh clamp(24px,6vw,90px) 22vh;background:#0006;-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);animation:fade-in .35s var(--ease-out)}.lyrics__scroll{width:min(760px,100%);height:100%;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent);mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent)}.lyrics__inner{display:grid;gap:clamp(10px,1.6vh,20px);transition:transform .55s var(--ease-out);padding:40vh 0}.lyrics__line{cursor:pointer;font-size:clamp(19px,3.1vh,34px);font-weight:600;line-height:1.24;letter-spacing:-.015em;text-align:center;color:#ffffff4d;transition:color .4s var(--ease-soft),transform .4s var(--ease-out);transform-origin:center;text-wrap:balance}.lyrics__line[data-active=true]{color:var(--ink)}.lyrics__line[data-past=true]{color:#ffffff29}.lyrics__empty{color:var(--ink-dim);font-size:clamp(14px,2vh,19px);text-align:center}.rest{position:absolute;inset:0;z-index:8;display:grid;place-content:center;justify-items:center;gap:clamp(10px,2vh,20px);background:#0b0c0eb8;-webkit-backdrop-filter:blur(30px) saturate(.7);backdrop-filter:blur(30px) saturate(.7);animation:fade-in 1.4s var(--ease-soft);cursor:pointer}.rest__clock{font-size:clamp(64px,17vh,170px);font-weight:200;line-height:1;letter-spacing:-.035em;font-variant-numeric:tabular-nums;color:#ffffffb8}.rest__date{font-size:clamp(13px,1.9vh,18px);font-weight:450;letter-spacing:.16em;text-transform:uppercase;color:#ffffff57}.rest__hint{position:absolute;bottom:7vh;left:50%;transform:translate(-50%);color:#ffffff38;font-size:12px;letter-spacing:.1em;text-transform:uppercase}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.library{position:absolute;inset:0;z-index:7;color:var(--ink);background:#0e0f11;animation:fade-in .32s var(--ease-out)}.library__ambient .ambient__layer{filter:blur(16px) saturate(1.5) brightness(.62)}.library__ambient:after{content:"";position:absolute;inset:0;background:radial-gradient(90% 70% at 50% 45%,transparent 40%,hsl(0 0% 0% / .55) 100%),linear-gradient(180deg,hsl(0 0% 0% / .45) 0%,transparent 20%,transparent 68%,hsl(0 0% 0% / .6) 100%)}.library__caption{position:absolute;left:50%;bottom:clamp(12px,3.6vh,38px);z-index:2;display:grid;justify-items:center;gap:3px;max-width:min(70vw,720px);transform:translate(-50%);text-align:center;pointer-events:none;text-shadow:0 1px 12px hsl(0 0% 0% / .5)}.library__caption b{max-width:100%;overflow:hidden;font-size:clamp(15px,2.2vh,20px);font-weight:650;letter-spacing:-.01em;white-space:nowrap;text-overflow:ellipsis}.library__caption span{font-size:clamp(12px,1.6vh,14px);color:var(--ink-dim)}.library__caption[data-pinned=true] span:before{content:"♥ ";color:#f25f77}.ambient{position:absolute;inset:0;overflow:hidden;pointer-events:none}.ambient__layer{position:absolute;left:50%;top:50%;width:30%;height:30%;background-position:center;background-size:cover;transform:translate(-50%,-50%) scale(4);filter:blur(16px) saturate(1.45);opacity:0;transition:opacity 1.1s var(--ease-soft)}.ambient__layer[data-on=true]{opacity:1}.library__head{position:absolute;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;gap:14px;padding:clamp(14px,2.4vh,26px) clamp(18px,3vw,40px);pointer-events:none}.library__head>*{pointer-events:auto}.library__head h1{font-size:clamp(15px,2vh,20px);font-weight:600;letter-spacing:-.01em}.library__count{margin-left:auto;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint)}.library__error{margin:0 clamp(18px,3vw,40px);padding:11px 14px;border-radius:10px;font-size:13px;background:#b8352e2e;color:#fbb5b1}.library__chosen{display:grid;justify-items:center;gap:10px;animation:fade-in .3s var(--ease-out)}.library__chosenText{display:flex;align-items:baseline;gap:9px;font-size:clamp(14px,2vh,18px)}.library__chosenText span{color:var(--ink-dim)}.crate{position:absolute;inset:0;--cover: min(84vh, 46vw);--thick: calc(var(--cover) * .032);--radius: calc(var(--cover) * var(--radius-k));overflow:hidden;perspective:2400px;perspective-origin:50% 46%;cursor:grab;touch-action:none}.crate:active{cursor:grabbing}.crate:after{content:"";position:absolute;left:50%;bottom:6%;width:58%;height:22%;transform:translate(-50%);pointer-events:none;background:radial-gradient(50% 50% at 50% 50%,hsl(0 0% 100% / .12),transparent 100%)}.crate__item{position:absolute;top:calc(50% - var(--cover) / 2);left:calc(50% - var(--cover) / 2);width:var(--cover);height:var(--cover);transform-style:preserve-3d;cursor:pointer;will-change:transform}.crate__face,.crate__spine,.crate__opening{position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.crate__face{inset:0;overflow:hidden;box-shadow:0 calc(var(--cover) * .02) calc(var(--cover) * .05) #0000004d}.crate__face--front{transform:translateZ(calc(var(--thick) / 2))}.crate__face--back{transform:rotateY(180deg) translateZ(calc(var(--thick) / 2))}.crate__spine,.crate__opening{top:0;left:calc(50% - var(--thick) / 2);width:var(--thick);height:100%}.crate__spine{transform:rotateY(-90deg) translateZ(calc(var(--cover) / 2))}.crate__opening{transform:rotateY(90deg) translateZ(calc(var(--cover) / 2));background-image:var(--art);background-size:auto 100%;background-position:right center;background-color:#e9e9e6;box-shadow:inset 0 0 0 1px #0000001f}.crate__opening:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0000004d,#ffffff59 42%,#00000038)}.crate__spineFace{position:absolute;inset:0;background:linear-gradient(100deg,var(--spine-a, hsl(220 5% 34%)),var(--spine-b, hsl(220 6% 12%)));box-shadow:inset 0 0 0 1px #ffffff24}.crate__spineFace:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#ffffff29,#0000001a 45%,#ffffff1f)}.crate__art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#d8d8d5}.crate__art--empty{background:linear-gradient(150deg,#d9d9d6,#b6b6b2)}.crate__shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,#0000,#0000000f 55%,#00000026)}.crate__depth{position:absolute;inset:0;pointer-events:none;background:#000;opacity:0}.crate__label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:.6em;writing-mode:vertical-rl;transform:rotate(180deg);padding:8% 0;overflow:hidden;white-space:nowrap;pointer-events:none;font-size:calc(var(--thick) * .56);letter-spacing:.015em;color:#fff;text-shadow:0 1px 2px hsl(0 0% 0% / .6);-webkit-mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent)}.crate__label[data-ink=dark]{color:#fff}.crate__label b{font-weight:700}.crate__label span{font-weight:450;opacity:.78}.flyer{position:absolute;z-index:40;pointer-events:none;background-size:cover;background-position:center;box-shadow:0 18px 60px #00000080;will-change:transform}.setup{position:absolute;inset:0;z-index:9;display:grid;place-items:center;padding:4vh 4vw;background:#0e0f11db;-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);overflow-y:auto;animation:fade-in .3s var(--ease-out)}.panel{width:min(560px,100%);display:grid;gap:22px;padding:clamp(22px,4vh,36px);border-radius:22px;background:#1a1b1e;box-shadow:0 30px 80px #0009,inset 0 0 0 1px #ffffff12}.panel__head{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.panel h1{font-size:21px;font-weight:650;letter-spacing:-.02em}.panel h2{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint)}.field{display:grid;gap:7px}.field label{font-size:13px;color:var(--ink-dim)}.field input[type=text],.field input[type=password],.field select{width:100%;padding:11px 13px;font-size:15px;color:var(--ink);background:#26282c;border:1px solid hsl(0 0% 100% / .09);border-radius:11px;outline:none;transition:border-color .18s var(--ease-soft)}.field input:focus,.field select:focus{border-color:#ffffff57}.field small{font-size:12px;line-height:1.45;color:var(--ink-faint)}.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:3px;background:#26282c;border-radius:11px}.segmented button{padding:9px 6px;font-size:13px;border-radius:8px;color:var(--ink-dim);transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.segmented button[aria-pressed=true]{background:#ffffff21;color:var(--ink)}.switch{display:flex;align-items:center;justify-content:space-between;gap:14px;font-size:14px;cursor:pointer}.switch input{appearance:none;position:relative;width:46px;height:28px;flex:none;border-radius:999px;background:#3e4146;transition:background .22s var(--ease-soft);cursor:pointer}.switch input:after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .22s var(--ease-out)}.switch input:checked{background:#2e9e5d}.switch input:checked:after{transform:translate(18px)}.actions{position:sticky;bottom:calc(-1*clamp(22px,4vh,36px));z-index:1;display:flex;gap:10px;justify-content:flex-end;margin:0 calc(-1*clamp(22px,4vh,36px)) calc(-1*clamp(22px,4vh,36px));padding:16px clamp(22px,4vh,36px);background:#1a1b1e;border-top:1px solid hsl(0 0% 100% / .08);border-radius:0 0 22px 22px}.btn{padding:11px 20px;font-size:14px;font-weight:550;border-radius:11px;background:#ffffff1a;transition:background .18s var(--ease-soft)}.btn:hover{background:#ffffff2b}.btn--primary{background:#f5f5f5;color:#121416}.btn--primary:hover{background:#fff}.btn:disabled{opacity:.4;cursor:default}.note{padding:11px 13px;font-size:13px;line-height:1.5;border-radius:10px;background:#ffffff0d;color:var(--ink-dim)}.note--bad{background:#b8352e2e;color:#fbb5b1}.note--good{background:#33995e29;color:#adebc7}.status{position:absolute;top:calc(env(safe-area-inset-top) + 12px);left:50%;transform:translate(-50%);z-index:10;display:flex;align-items:center;gap:8px;padding:7px 15px;font-size:13px;border-radius:999px;background:#00000080;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:var(--ink-dim);animation:fade-in .3s var(--ease-out)}.status__dot{width:7px;height:7px;border-radius:50%;background:#f4ae34;animation:pulse 1.6s ease-in-out infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.25}}@media(orientation:portrait){:root{--disc: min(52vh, 84vw);--overlap: calc(var(--disc) * .34)}.deck{transform:translateY(-4vh)}}@media(prefers-reduced-motion:reduce){.lyrics__inner,.sleeve,.disc{transition-duration:.01ms}}.library__search{display:flex;align-items:center;gap:9px;min-width:0;flex:0 1 clamp(220px,34vw,420px);padding:9px 13px;background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px;transition:border-color .18s var(--ease-soft),background .18s var(--ease-soft)}.library__search:focus-within{background:#ffffff1c;border-color:#ffffff4d}.library__search svg{flex:none;width:16px;height:16px;color:var(--ink-faint)}.library__search input{flex:1;min-width:0;font-size:clamp(13px,1.7vh,15px);color:var(--ink);background:none;border:none;outline:none}.library__search input::placeholder{color:var(--ink-faint)}.library__tabs{flex:none;display:flex;gap:2px;padding:3px;background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px}.library__tabs button{padding:6px 15px;font-size:clamp(12.5px,1.6vh,14px);font-weight:550;color:var(--ink-dim);border-radius:999px;transition:background .2s var(--ease-soft),color .2s var(--ease-soft)}.library__tabs button[data-on=true]{color:#16181d;background:#ffffffeb}.library__manage{position:relative;flex:none;display:grid;place-items:center;width:38px;height:38px;color:var(--ink-dim);background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:50%;transition:background .2s var(--ease-soft),color .2s var(--ease-soft)}.library__manage:hover,.library__manage[data-on=true]{color:var(--ink);background:#ffffff29}.library__manage svg{width:18px;height:18px}.library__badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;font-size:11px;font-weight:650;line-height:18px;color:#16181d;background:#ffffffe6;border-radius:999px}.library__empty{position:absolute;top:50%;left:50%;z-index:2;max-width:min(80vw,420px);transform:translate(-50%,-50%);font-size:15px;line-height:1.5;text-align:center;color:var(--ink-dim)}.manage__tools{display:grid;gap:10px;padding:14px 20px 6px}.manage__tools input{width:100%;padding:9px 13px;font:inherit;font-size:14px;color:var(--ink);background:#ffffff12;border:1px solid hsl(0 0% 100% / .09);border-radius:999px;outline:none}.manage__tools input:focus{border-color:#ffffff4d}.manage__bulk{display:flex;gap:8px}.manage__bulk button{flex:1;padding:8px 10px;font-size:13px;font-weight:550;color:var(--ink-dim);background:#ffffff0f;border-radius:10px;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.manage__bulk button:hover{color:var(--ink);background:#ffffff1f}.manage__legend{display:flex;justify-content:flex-end;gap:6px;padding:8px 20px 2px;font-size:11px;color:var(--ink-faint)}.manage__legend span{width:50px;white-space:nowrap;text-align:center}.manage__item{display:flex;align-items:center;gap:12px;padding:7px 8px;border-radius:12px;transition:opacity .2s var(--ease-soft)}.manage__item[data-hidden=true] .queue__art,.manage__item[data-hidden=true] .sidepanel__text{opacity:.38}.manage__switch{flex:none;display:grid;place-items:center;width:50px;height:32px;color:var(--ink-faint);background:#ffffff0f;border-radius:999px;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.manage__switch+.manage__switch{margin-left:-6px}.manage__switch svg{width:18px;height:18px}.manage__switch[aria-checked=true]{color:#16181d;background:#ffffffe0}.manage__switch:disabled{cursor:default;opacity:.35}.library__fav{flex:none;display:inline-flex;align-items:center;gap:7px;max-width:34vw;padding:7px 14px 7px 11px;font-size:clamp(12.5px,1.6vh,14px);font-weight:550;color:var(--ink);background:#d9265333;border:1px solid hsl(345 80% 70% / .28);border-radius:999px;transition:background .2s var(--ease-soft)}.library__fav:hover{background:#d9265352}.library__fav svg{flex:none;width:15px;height:15px;color:#f7647c}.library__fav span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.library__search input::-webkit-search-cancel-button{display:none}.library__search button{flex:none;width:22px;height:22px;font-size:17px;line-height:1;color:var(--ink-dim);background:#ffffff1a;border:none;border-radius:50%;cursor:pointer}.hud__room{display:inline-flex;align-items:center;gap:2px;padding:4px 6px 4px 2px;background:none;border:none;border-radius:8px;cursor:pointer;pointer-events:auto;transition:background .18s var(--ease-soft)}.hud__room:hover{background:#ffffff12}.hud__chev{width:14px;height:14px;color:var(--ink-faint)}.sidepanel{position:fixed;top:0;right:0;bottom:0;z-index:60;width:var(--panel-w);display:flex;flex-direction:column;background:#121416b8;-webkit-backdrop-filter:blur(40px) saturate(1.3);backdrop-filter:blur(40px) saturate(1.3);border-left:1px solid hsl(0 0% 100% / .08);animation:slide-from-right .34s var(--ease-out)}@keyframes slide-from-right{0%{opacity:0;transform:translate(16px)}}.sidepanel__head{display:flex;align-items:center;gap:12px;padding:clamp(16px,2.6vh,26px) 20px 14px;border-bottom:1px solid hsl(0 0% 100% / .07)}.sidepanel__head h2{flex:1;font-size:14px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.sidepanel__error{margin:14px 20px 0;padding:10px 13px;font-size:13px;line-height:1.45;color:#f6b4ac;background:#a3352929;border-radius:10px}.sidepanel__empty{padding:26px 20px;font-size:14px;color:var(--ink-faint)}.sidepanel__list{position:relative;flex:1;overflow-y:auto;padding:8px 12px 22px;list-style:none;overscroll-behavior:contain}.queue__item{position:relative;display:flex;align-items:center;border-radius:12px;-webkit-touch-callout:none}.queue__pick{display:flex;align-items:center;gap:12px;flex:1;min-width:0;padding:9px 8px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.queue__pick:hover:not(:disabled){background:#ffffff12}.queue__pick:disabled{cursor:default;opacity:.5}.queue__art svg{width:20px;height:20px;color:#ffffffeb;opacity:0;transition:opacity .16s var(--ease-soft);filter:drop-shadow(0 1px 3px hsl(0 0% 0% / .6))}.queue__pick:hover:not(:disabled) .queue__art svg{opacity:1}.queue__item[data-state=past]{opacity:.4}.queue__item[data-state=now]{background:#ffffff14}.queue__art{flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:6px;background-color:#2a2d32;background-size:cover;background-position:center;box-shadow:0 1px 3px #0006}.sidepanel__text{flex:1;min-width:0;display:grid;gap:2px}.sidepanel__text b{font-size:14px;font-weight:550;color:var(--ink)}.sidepanel__text span{font-size:12.5px;color:var(--ink-faint)}.sidepanel__text b,.sidepanel__text span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.queue__time{flex:none;font-size:12px;font-variant-numeric:tabular-nums;color:var(--ink-faint)}.queue__grip{flex:none;display:grid;place-items:center;width:40px;height:48px;margin-left:2px;color:var(--ink-faint);border-radius:10px;cursor:grab;touch-action:none;transition:color .16s var(--ease-soft),background .16s var(--ease-soft)}.queue__grip:hover,.queue__grip:focus-visible{color:var(--ink);background:#ffffff0f}.queue__grip svg{width:20px;height:20px}.queue__list[data-sorting=true]{cursor:grabbing}.queue__list[data-sorting=true] .queue__item{transition:transform .18s var(--ease-out)}.queue__list[data-sorting=true] .queue__pick:hover{background:none}.queue__list .queue__item[data-lifted=true]{z-index:2;transition:none;background:#2c2f35;box-shadow:0 12px 30px #00000080,0 0 0 1px #ffffff1a}.queue__item[data-lifted=true] .queue__grip{color:var(--ink)}.queue__list[data-settling=true] .queue__item{transition:none!important}.sidepanel__head h2 small{display:block;margin-top:4px;font-size:12px;font-weight:450;letter-spacing:.01em;text-transform:none;color:var(--ink-faint)}.sidepanel__note{margin:0 20px 18px;padding:11px 13px;font-size:12.5px;line-height:1.5;color:var(--ink-dim);background:#ffffff0d;border-radius:10px}.speakers__item{display:grid;gap:2px;padding:4px 0}.speakers__pick{display:flex;align-items:center;gap:12px;width:100%;padding:11px 10px;text-align:left;color:inherit;background:none;border:none;border-radius:12px;cursor:pointer;transition:background .18s var(--ease-soft)}.speakers__pick:hover:not(:disabled){background:#ffffff12}.speakers__pick:disabled{cursor:default}.speakers__item[data-here=true] .speakers__pick{background:#ffffff14}.speakers__dot{flex:none;width:8px;height:8px;border-radius:50%;background:#fff3}.speakers__dot[data-on=true]{background:#4eda88;box-shadow:0 0 0 3px #4eda882e}.speakers__move{display:inline-flex;align-items:center;gap:7px;margin-left:30px;padding:7px 12px;font-size:12.5px;color:var(--ink-dim);background:#ffffff0f;border:1px solid hsl(0 0% 100% / .08);border-radius:999px;cursor:pointer;transition:background .18s var(--ease-soft),color .18s var(--ease-soft)}.speakers__move:hover{color:var(--ink);background:#ffffff1f}.speakers__move svg{width:15px;height:15px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:8px}.pair input{min-width:0}.speakers__group{padding:16px 10px 6px}.speakers__group h3{font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-dim)}.speakers__group p{margin-top:3px;font-size:11.5px;line-height:1.4;color:var(--ink-faint)}.tint{display:flex;align-items:center;gap:12px}.tint input[type=color]{width:54px;height:38px;padding:0;background:none;border:1px solid hsl(0 0% 100% / .14);border-radius:10px;cursor:pointer}.tint input[type=color]::-webkit-color-swatch-wrapper{padding:4px}.tint input[type=color]::-webkit-color-swatch{border:none;border-radius:6px}:host,.app{overscroll-behavior:none;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.sidepanel__list,.setup,.lyrics{touch-action:pan-y;overscroll-behavior:contain}:host .app{position:absolute}.field__value{float:right;font-variant-numeric:tabular-nums;color:var(--ink-faint)}.field input[type=range]{width:100%;height:26px;margin:0;background:none;-webkit-appearance:none;appearance:none;cursor:pointer}.field input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:2px;background:#ffffff29}.field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;margin-top:-7px;border-radius:50%;background:var(--ink);box-shadow:0 1px 4px #00000080}.field input[type=range]::-moz-range-track{height:4px;border-radius:2px;background:#ffffff29}.field input[type=range]::-moz-range-thumb{width:18px;height:18px;border:none;border-radius:50%;background:var(--ink)}`;
class Dv {
  rendus = [];
  /** Pose une propriété CSS sur un élément et retient de quoi la défaire. */
  poser(s, o, r) {
    const h = s.style.getPropertyValue(o), v = s.style.getPropertyPriority(o);
    s.style.setProperty(o, r, "important"), this.rendus.push(() => {
      h ? s.style.setProperty(o, h, v) : s.style.removeProperty(o);
    });
  }
  /** Enregistre une restitution qui n'est pas un style : un écouteur, par exemple. */
  aussi(s) {
    this.rendus.push(s);
  }
  rendre() {
    for (const s of this.rendus.splice(0).reverse())
      try {
        s();
      } catch {
      }
  }
}
class Ov extends HTMLElement {
  root = null;
  client = null;
  mounted = !1;
  /** Tout ce qu on a modifié hors de notre arbre, et de quoi le défaire. */
  emprise = new Dv();
  /** Home Assistant écrit ici, souvent. */
  set hass(s) {
    s && (this.client ? this.client.update(s) : (this.client = new jv(s), this.premierChoixDEnceinte(s), this.prendreLaPlace(), this.monter()));
  }
  /**
   * À la toute première ouverture, on choisit une enceinte plausible plutôt que
   * d'accueillir l'utilisateur par un formulaire vide. Il pourra en changer
   * d'un geste depuis le nom de la pièce.
   */
  premierChoixDEnceinte(s) {
    const o = qs();
    if (o.entityId) return;
    const r = Uv(s);
    r && lo({ ...o, entityId: r });
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
    for (const s of [document.documentElement, document.body])
      this.emprise.poser(s, "overscroll-behavior", "none"), this.emprise.poser(s, "overscroll-behavior-y", "none");
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
  suivreLaBoite(s) {
    const o = () => {
      const h = this.getBoundingClientRect(), v = h.width > 0 ? h.width : window.innerWidth - h.left, y = h.height > 0 ? h.height : window.innerHeight - h.top;
      s.style.position = "fixed", v > 0 && y > 0 ? (s.style.inset = "", s.style.left = `${h.left}px`, s.style.top = `${h.top}px`, s.style.width = `${v}px`, s.style.height = `${y}px`) : (s.style.inset = "0", s.style.width = "", s.style.height = "");
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
    const s = this.attachShadow({ mode: "open" }), o = Mh.match(/@font-face\s*\{[^}]*\}/g) ?? [];
    if (o.length > 0 && !document.getElementById("md-vinyl-fonts")) {
      const v = document.createElement("style");
      v.id = "md-vinyl-fonts", v.textContent = o.join(`
`), document.head.appendChild(v);
    }
    const r = document.createElement("style");
    r.textContent = Mh, s.appendChild(r);
    const h = document.createElement("div");
    h.style.cssText = "overflow:hidden; overscroll-behavior:none; touch-action:none;", s.appendChild(h), this.style.cssText = "display:block; position:relative; width:100%; height:100%; overscroll-behavior:none;", this.suivreLaBoite(h), this.root = Pp.createRoot(h), this.root.render(
      /* @__PURE__ */ f.jsx(A.StrictMode, { children: /* @__PURE__ */ f.jsx(Cv, { embedded: this.client }) })
    );
  }
  disconnectedCallback() {
    this.emprise.rendre(), this.root?.unmount(), this.root = null, this.mounted = !1, this.client?.close(), this.client = null;
  }
}
customElements.get("md-vinyl-panel") || customElements.define("md-vinyl-panel", Ov);
console.info("%c MD Vinyl %c panneau chargé ", "background:#c8542e;color:#fff", "");
