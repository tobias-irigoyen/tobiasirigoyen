;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const i = {}
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const i = n(r)
    fetch(r.href, i)
  }
})()
/**
 * @vue/shared v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Zr(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const ye = {},
  gn = [],
  Et = () => {},
  Ec = () => !1,
  Ds = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ei = (e) => e.startsWith('onUpdate:'),
  Ue = Object.assign,
  ti = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Tc = Object.prototype.hasOwnProperty,
  pe = (e, t) => Tc.call(e, t),
  ne = Array.isArray,
  vn = (e) => Fs(e) === '[object Map]',
  bl = (e) => Fs(e) === '[object Set]',
  se = (e) => typeof e == 'function',
  Oe = (e) => typeof e == 'string',
  Kt = (e) => typeof e == 'symbol',
  Ee = (e) => e !== null && typeof e == 'object',
  _l = (e) => (Ee(e) || se(e)) && se(e.then) && se(e.catch),
  yl = Object.prototype.toString,
  Fs = (e) => yl.call(e),
  xc = (e) => Fs(e).slice(8, -1),
  wl = (e) => Fs(e) === '[object Object]',
  ni = (e) => Oe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Dn = Zr(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  $s = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Cc = /-(\w)/g,
  ct = $s((e) => e.replace(Cc, (t, n) => (n ? n.toUpperCase() : ''))),
  Pc = /\B([A-Z])/g,
  cn = $s((e) => e.replace(Pc, '-$1').toLowerCase()),
  Bs = $s((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Js = $s((e) => (e ? `on${Bs(e)}` : '')),
  zt = (e, t) => !Object.is(e, t),
  Qs = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  xr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  Ic = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Bi
const js = () =>
  Bi ||
  (Bi =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function si(e) {
  if (ne(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = Oe(s) ? Ac(s) : si(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (Oe(e) || Ee(e)) return e
}
const kc = /;(?![^(]*\))/g,
  Lc = /:([^]+)/,
  Oc = /\/\*[^]*?\*\//g
function Ac(e) {
  const t = {}
  return (
    e
      .replace(Oc, '')
      .split(kc)
      .forEach((n) => {
        if (n) {
          const s = n.split(Lc)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function tt(e) {
  let t = ''
  if (Oe(e)) t = e
  else if (ne(e))
    for (let n = 0; n < e.length; n++) {
      const s = tt(e[n])
      s && (t += s + ' ')
    }
  else if (Ee(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Mc = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Rc = Zr(Mc)
function Sl(e) {
  return !!e || e === ''
}
const El = (e) => !!(e && e.__v_isRef === !0),
  we = (e) =>
    Oe(e)
      ? e
      : e == null
        ? ''
        : ne(e) || (Ee(e) && (e.toString === yl || !se(e.toString)))
          ? El(e)
            ? we(e.value)
            : JSON.stringify(e, Tl, 2)
          : String(e),
  Tl = (e, t) =>
    El(t)
      ? Tl(e, t.value)
      : vn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Zs(s, i) + ' =>'] = r), n),
              {},
            ),
          }
        : bl(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Zs(n)) }
          : Kt(t)
            ? Zs(t)
            : Ee(t) && !ne(t) && !wl(t)
              ? String(t)
              : t,
  Zs = (e, t = '') => {
    var n
    return Kt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Xe
class xl {
  constructor(t = !1) {
    ;((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Xe),
      !t && Xe && (this.index = (Xe.scopes || (Xe.scopes = [])).push(this) - 1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Xe
      try {
        return ((Xe = this), t())
      } finally {
        Xe = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = Xe), (Xe = this))
  }
  off() {
    this._on > 0 && --this._on === 0 && ((Xe = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function Nc(e) {
  return new xl(e)
}
function Dc() {
  return Xe
}
let _e
const er = new WeakSet()
class Cl {
  constructor(t) {
    ;((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Xe && Xe.active && Xe.effects.push(this))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), er.has(this) && (er.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Il(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), ji(this), kl(this))
    const t = _e,
      n = pt
    ;((_e = this), (pt = !0))
    try {
      return this.fn()
    } finally {
      ;(Ll(this), (_e = t), (pt = n), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) oi(t)
      ;((this.deps = this.depsTail = void 0),
        ji(this),
        this.onStop && this.onStop(),
        (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64 ? er.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Cr(this) && this.run()
  }
  get dirty() {
    return Cr(this)
  }
}
let Pl = 0,
  Fn,
  $n
function Il(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;((e.next = $n), ($n = e))
    return
  }
  ;((e.next = Fn), (Fn = e))
}
function ri() {
  Pl++
}
function ii() {
  if (--Pl > 0) return
  if ($n) {
    let t = $n
    for ($n = void 0; t; ) {
      const n = t.next
      ;((t.next = void 0), (t.flags &= -9), (t = n))
    }
  }
  let e
  for (; Fn; ) {
    let t = Fn
    for (Fn = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function kl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t))
}
function Ll(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    ;(s.version === -1 ? (s === n && (n = r), oi(s), Fc(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r))
  }
  ;((e.deps = t), (e.depsTail = n))
}
function Cr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Ol(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function Ol(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Gn) ||
    ((e.globalVersion = Gn), !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Cr(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = _e,
    s = pt
  ;((_e = e), (pt = !0))
  try {
    kl(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || zt(r, e._value)) && ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;((_e = n), (pt = s), Ll(e), (e.flags &= -3))
  }
}
function oi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) oi(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Fc(e) {
  const { prevDep: t, nextDep: n } = e
  ;(t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0)))
}
let pt = !0
const Al = []
function Dt() {
  ;(Al.push(pt), (pt = !1))
}
function Ft() {
  const e = Al.pop()
  pt = e === void 0 ? !0 : e
}
function ji(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = _e
    _e = void 0
    try {
      t()
    } finally {
      _e = n
    }
  }
}
let Gn = 0
class $c {
  constructor(t, n) {
    ;((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0))
  }
}
class li {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {
    if (!_e || !pt || _e === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== _e)
      ((n = this.activeLink = new $c(_e, this)),
        _e.deps
          ? ((n.prevDep = _e.depsTail), (_e.depsTail.nextDep = n), (_e.depsTail = n))
          : (_e.deps = _e.depsTail = n),
        Ml(n))
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = _e.depsTail),
        (n.nextDep = void 0),
        (_e.depsTail.nextDep = n),
        (_e.depsTail = n),
        _e.deps === n && (_e.deps = s))
    }
    return n
  }
  trigger(t) {
    ;(this.version++, Gn++, this.notify(t))
  }
  notify(t) {
    ri()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      ii()
    }
  }
}
function Ml(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) Ml(s)
    }
    const n = e.dep.subs
    ;(n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e))
  }
}
const Pr = new WeakMap(),
  ln = Symbol(''),
  Ir = Symbol(''),
  zn = Symbol('')
function Ve(e, t, n) {
  if (pt && _e) {
    let s = Pr.get(e)
    s || Pr.set(e, (s = new Map()))
    let r = s.get(n)
    ;(r || (s.set(n, (r = new li())), (r.map = s), (r.key = n)), r.track())
  }
}
function Mt(e, t, n, s, r, i) {
  const o = Pr.get(e)
  if (!o) {
    Gn++
    return
  }
  const l = (a) => {
    a && a.trigger()
  }
  if ((ri(), t === 'clear')) o.forEach(l)
  else {
    const a = ne(e),
      c = a && ni(n)
    if (a && n === 'length') {
      const u = Number(s)
      o.forEach((f, d) => {
        ;(d === 'length' || d === zn || (!Kt(d) && d >= u)) && l(f)
      })
    } else
      switch (((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(zn)), t)) {
        case 'add':
          a ? c && l(o.get('length')) : (l(o.get(ln)), vn(e) && l(o.get(Ir)))
          break
        case 'delete':
          a || (l(o.get(ln)), vn(e) && l(o.get(Ir)))
          break
        case 'set':
          vn(e) && l(o.get(ln))
          break
      }
  }
  ii()
}
function dn(e) {
  const t = de(e)
  return t === e ? t : (Ve(t, 'iterate', zn), lt(e) ? t : t.map(Fe))
}
function Vs(e) {
  return (Ve((e = de(e)), 'iterate', zn), e)
}
const Bc = {
  __proto__: null,
  [Symbol.iterator]() {
    return tr(this, Symbol.iterator, Fe)
  },
  concat(...e) {
    return dn(this).concat(...e.map((t) => (ne(t) ? dn(t) : t)))
  },
  entries() {
    return tr(this, 'entries', (e) => ((e[1] = Fe(e[1])), e))
  },
  every(e, t) {
    return Pt(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Pt(this, 'filter', e, t, (n) => n.map(Fe), arguments)
  },
  find(e, t) {
    return Pt(this, 'find', e, t, Fe, arguments)
  },
  findIndex(e, t) {
    return Pt(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Pt(this, 'findLast', e, t, Fe, arguments)
  },
  findLastIndex(e, t) {
    return Pt(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Pt(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return nr(this, 'includes', e)
  },
  indexOf(...e) {
    return nr(this, 'indexOf', e)
  },
  join(e) {
    return dn(this).join(e)
  },
  lastIndexOf(...e) {
    return nr(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Pt(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Ln(this, 'pop')
  },
  push(...e) {
    return Ln(this, 'push', e)
  },
  reduce(e, ...t) {
    return Vi(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return Vi(this, 'reduceRight', e, t)
  },
  shift() {
    return Ln(this, 'shift')
  },
  some(e, t) {
    return Pt(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Ln(this, 'splice', e)
  },
  toReversed() {
    return dn(this).toReversed()
  },
  toSorted(e) {
    return dn(this).toSorted(e)
  },
  toSpliced(...e) {
    return dn(this).toSpliced(...e)
  },
  unshift(...e) {
    return Ln(this, 'unshift', e)
  },
  values() {
    return tr(this, 'values', Fe)
  },
}
function tr(e, t, n) {
  const s = Vs(e),
    r = s[t]()
  return (
    s !== e &&
      !lt(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return (i.value && (i.value = n(i.value)), i)
      })),
    r
  )
}
const jc = Array.prototype
function Pt(e, t, n, s, r, i) {
  const o = Vs(e),
    l = o !== e && !lt(e),
    a = o[t]
  if (a !== jc[t]) {
    const f = a.apply(e, i)
    return l ? Fe(f) : f
  }
  let c = n
  o !== e &&
    (l
      ? (c = function (f, d) {
          return n.call(this, Fe(f), d, e)
        })
      : n.length > 2 &&
        (c = function (f, d) {
          return n.call(this, f, d, e)
        }))
  const u = a.call(o, c, s)
  return l && r ? r(u) : u
}
function Vi(e, t, n, s) {
  const r = Vs(e)
  let i = n
  return (
    r !== e &&
      (lt(e)
        ? n.length > 3 &&
          (i = function (o, l, a) {
            return n.call(this, o, l, a, e)
          })
        : (i = function (o, l, a) {
            return n.call(this, o, Fe(l), a, e)
          })),
    r[t](i, ...s)
  )
}
function nr(e, t, n) {
  const s = de(e)
  Ve(s, 'iterate', zn)
  const r = s[t](...n)
  return (r === -1 || r === !1) && ui(n[0]) ? ((n[0] = de(n[0])), s[t](...n)) : r
}
function Ln(e, t, n = []) {
  ;(Dt(), ri())
  const s = de(e)[t].apply(e, n)
  return (ii(), Ft(), s)
}
const Vc = Zr('__proto__,__v_isRef,__isVue'),
  Rl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Kt),
  )
function Hc(e) {
  Kt(e) || (e = String(e))
  const t = de(this)
  return (Ve(t, 'has', e), t.hasOwnProperty(e))
}
class Nl {
  constructor(t = !1, n = !1) {
    ;((this._isReadonly = t), (this._isShallow = n))
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? Qc : Bl) : i ? $l : Fl).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = ne(t)
    if (!r) {
      let a
      if (o && (a = Bc[n])) return a
      if (n === 'hasOwnProperty') return Hc
    }
    const l = Reflect.get(t, n, $e(t) ? t : s)
    return (Kt(n) ? Rl.has(n) : Vc(n)) || (r || Ve(t, 'get', n), i)
      ? l
      : $e(l)
        ? o && ni(n)
          ? l
          : l.value
        : Ee(l)
          ? r
            ? Vl(l)
            : Hs(l)
          : l
  }
}
class Dl extends Nl {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const a = Yt(i)
      if ((!lt(s) && !Yt(s) && ((i = de(i)), (s = de(s))), !ne(t) && $e(i) && !$e(s)))
        return a ? !1 : ((i.value = s), !0)
    }
    const o = ne(t) && ni(n) ? Number(n) < t.length : pe(t, n),
      l = Reflect.set(t, n, s, $e(t) ? t : r)
    return (t === de(r) && (o ? zt(s, i) && Mt(t, 'set', n, s) : Mt(t, 'add', n, s)), l)
  }
  deleteProperty(t, n) {
    const s = pe(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return (r && s && Mt(t, 'delete', n, void 0), r)
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return ((!Kt(n) || !Rl.has(n)) && Ve(t, 'has', n), s)
  }
  ownKeys(t) {
    return (Ve(t, 'iterate', ne(t) ? 'length' : ln), Reflect.ownKeys(t))
  }
}
class Wc extends Nl {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Uc = new Dl(),
  Gc = new Wc(),
  zc = new Dl(!0)
const kr = (e) => e,
  as = (e) => Reflect.getPrototypeOf(e)
function Yc(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = de(r),
      o = vn(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      a = e === 'keys' && o,
      c = r[e](...s),
      u = n ? kr : t ? Es : Fe
    return (
      !t && Ve(i, 'iterate', a ? Ir : ln),
      {
        next() {
          const { value: f, done: d } = c.next()
          return d ? { value: f, done: d } : { value: l ? [u(f[0]), u(f[1])] : u(f), done: d }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function cs(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function qc(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = de(i),
        l = de(r)
      e || (zt(r, l) && Ve(o, 'get', r), Ve(o, 'get', l))
      const { has: a } = as(o),
        c = t ? kr : e ? Es : Fe
      if (a.call(o, r)) return c(i.get(r))
      if (a.call(o, l)) return c(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return (!e && Ve(de(r), 'iterate', ln), Reflect.get(r, 'size', r))
    },
    has(r) {
      const i = this.__v_raw,
        o = de(i),
        l = de(r)
      return (
        e || (zt(r, l) && Ve(o, 'has', r), Ve(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        a = de(l),
        c = t ? kr : e ? Es : Fe
      return (!e && Ve(a, 'iterate', ln), l.forEach((u, f) => r.call(i, c(u), c(f), o)))
    },
  }
  return (
    Ue(
      n,
      e
        ? { add: cs('add'), set: cs('set'), delete: cs('delete'), clear: cs('clear') }
        : {
            add(r) {
              !t && !lt(r) && !Yt(r) && (r = de(r))
              const i = de(this)
              return (as(i).has.call(i, r) || (i.add(r), Mt(i, 'add', r, r)), this)
            },
            set(r, i) {
              !t && !lt(i) && !Yt(i) && (i = de(i))
              const o = de(this),
                { has: l, get: a } = as(o)
              let c = l.call(o, r)
              c || ((r = de(r)), (c = l.call(o, r)))
              const u = a.call(o, r)
              return (o.set(r, i), c ? zt(i, u) && Mt(o, 'set', r, i) : Mt(o, 'add', r, i), this)
            },
            delete(r) {
              const i = de(this),
                { has: o, get: l } = as(i)
              let a = o.call(i, r)
              ;(a || ((r = de(r)), (a = o.call(i, r))), l && l.call(i, r))
              const c = i.delete(r)
              return (a && Mt(i, 'delete', r, void 0), c)
            },
            clear() {
              const r = de(this),
                i = r.size !== 0,
                o = r.clear()
              return (i && Mt(r, 'clear', void 0, void 0), o)
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = Yc(r, e, t)
    }),
    n
  )
}
function ai(e, t) {
  const n = qc(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(pe(n, r) && r in s ? n : s, r, i)
}
const Kc = { get: ai(!1, !1) },
  Xc = { get: ai(!1, !0) },
  Jc = { get: ai(!0, !1) }
const Fl = new WeakMap(),
  $l = new WeakMap(),
  Bl = new WeakMap(),
  Qc = new WeakMap()
function Zc(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function eu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zc(xc(e))
}
function Hs(e) {
  return Yt(e) ? e : ci(e, !1, Uc, Kc, Fl)
}
function jl(e) {
  return ci(e, !1, zc, Xc, $l)
}
function Vl(e) {
  return ci(e, !0, Gc, Jc, Bl)
}
function ci(e, t, n, s, r) {
  if (!Ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = eu(e)
  if (i === 0) return e
  const o = r.get(e)
  if (o) return o
  const l = new Proxy(e, i === 2 ? s : n)
  return (r.set(e, l), l)
}
function bn(e) {
  return Yt(e) ? bn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Yt(e) {
  return !!(e && e.__v_isReadonly)
}
function lt(e) {
  return !!(e && e.__v_isShallow)
}
function ui(e) {
  return e ? !!e.__v_raw : !1
}
function de(e) {
  const t = e && e.__v_raw
  return t ? de(t) : e
}
function tu(e) {
  return (!pe(e, '__v_skip') && Object.isExtensible(e) && xr(e, '__v_skip', !0), e)
}
const Fe = (e) => (Ee(e) ? Hs(e) : e),
  Es = (e) => (Ee(e) ? Vl(e) : e)
function $e(e) {
  return e ? e.__v_isRef === !0 : !1
}
function xe(e) {
  return Wl(e, !1)
}
function Hl(e) {
  return Wl(e, !0)
}
function Wl(e, t) {
  return $e(e) ? e : new nu(e, t)
}
class nu {
  constructor(t, n) {
    ;((this.dep = new li()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : de(t)),
      (this._value = n ? t : Fe(t)),
      (this.__v_isShallow = n))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || lt(t) || Yt(t)
    ;((t = s ? t : de(t)),
      zt(t, n) && ((this._rawValue = t), (this._value = s ? t : Fe(t)), this.dep.trigger()))
  }
}
function te(e) {
  return $e(e) ? e.value : e
}
const su = {
  get: (e, t, n) => (t === '__v_raw' ? e : te(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return $e(r) && !$e(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Ul(e) {
  return bn(e) ? e : new Proxy(e, su)
}
class ru {
  constructor(t, n, s) {
    ;((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new li(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Gn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && _e !== this)) return (Il(this, !0), !0)
  }
  get value() {
    const t = this.dep.track()
    return (Ol(this), t && (t.version = this.dep.version), this._value)
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function iu(e, t, n = !1) {
  let s, r
  return (se(e) ? (s = e) : ((s = e.get), (r = e.set)), new ru(s, r, n))
}
const us = {},
  Ts = new WeakMap()
let sn
function ou(e, t = !1, n = sn) {
  if (n) {
    let s = Ts.get(n)
    ;(s || Ts.set(n, (s = [])), s.push(e))
  }
}
function lu(e, t, n = ye) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n,
    c = (_) => (r ? _ : lt(_) || r === !1 || r === 0 ? Ut(_, 1) : Ut(_))
  let u,
    f,
    d,
    p,
    v = !1,
    S = !1
  if (
    ($e(e)
      ? ((f = () => e.value), (v = lt(e)))
      : bn(e)
        ? ((f = () => c(e)), (v = !0))
        : ne(e)
          ? ((S = !0),
            (v = e.some((_) => bn(_) || lt(_))),
            (f = () =>
              e.map((_) => {
                if ($e(_)) return _.value
                if (bn(_)) return c(_)
                if (se(_)) return a ? a(_, 2) : _()
              })))
          : se(e)
            ? t
              ? (f = a ? () => a(e, 2) : e)
              : (f = () => {
                  if (d) {
                    Dt()
                    try {
                      d()
                    } finally {
                      Ft()
                    }
                  }
                  const _ = sn
                  sn = u
                  try {
                    return a ? a(e, 3, [p]) : e(p)
                  } finally {
                    sn = _
                  }
                })
            : (f = Et),
    t && r)
  ) {
    const _ = f,
      T = r === !0 ? 1 / 0 : r
    f = () => Ut(_(), T)
  }
  const P = Dc(),
    m = () => {
      ;(u.stop(), P && P.active && ti(P.effects, u))
    }
  if (i && t) {
    const _ = t
    t = (...T) => {
      ;(_(...T), m())
    }
  }
  let h = S ? new Array(e.length).fill(us) : us
  const g = (_) => {
    if (!(!(u.flags & 1) || (!u.dirty && !_)))
      if (t) {
        const T = u.run()
        if (r || v || (S ? T.some((O, k) => zt(O, h[k])) : zt(T, h))) {
          d && d()
          const O = sn
          sn = u
          try {
            const k = [T, h === us ? void 0 : S && h[0] === us ? [] : h, p]
            ;((h = T), a ? a(t, 3, k) : t(...k))
          } finally {
            sn = O
          }
        }
      } else u.run()
  }
  return (
    l && l(g),
    (u = new Cl(f)),
    (u.scheduler = o ? () => o(g, !1) : g),
    (p = (_) => ou(_, !1, u)),
    (d = u.onStop =
      () => {
        const _ = Ts.get(u)
        if (_) {
          if (a) a(_, 4)
          else for (const T of _) T()
          Ts.delete(u)
        }
      }),
    t ? (s ? g(!0) : (h = u.run())) : o ? o(g.bind(null, !0), !0) : u.run(),
    (m.pause = u.pause.bind(u)),
    (m.resume = u.resume.bind(u)),
    (m.stop = m),
    m
  )
}
function Ut(e, t = 1 / 0, n) {
  if (t <= 0 || !Ee(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, $e(e))) Ut(e.value, t, n)
  else if (ne(e)) for (let s = 0; s < e.length; s++) Ut(e[s], t, n)
  else if (bl(e) || vn(e))
    e.forEach((s) => {
      Ut(s, t, n)
    })
  else if (wl(e)) {
    for (const s in e) Ut(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ut(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ns(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Ws(r, t, n)
  }
}
function Ct(e, t, n, s) {
  if (se(e)) {
    const r = ns(e, t, n, s)
    return (
      r &&
        _l(r) &&
        r.catch((i) => {
          Ws(i, t, n)
        }),
      r
    )
  }
  if (ne(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(Ct(e[i], t, n, s))
    return r
  }
}
function Ws(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || ye
  if (t) {
    let l = t.parent
    const a = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const u = l.ec
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, a, c) === !1) return
      }
      l = l.parent
    }
    if (i) {
      ;(Dt(), ns(i, null, 10, [e, a, c]), Ft())
      return
    }
  }
  au(e, n, r, s, o)
}
function au(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const Ye = []
let yt = -1
const _n = []
let Vt = null,
  pn = 0
const Gl = Promise.resolve()
let xs = null
function fi(e) {
  const t = xs || Gl
  return e ? t.then(this ? e.bind(this) : e) : t
}
function cu(e) {
  let t = yt + 1,
    n = Ye.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ye[s],
      i = Yn(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function di(e) {
  if (!(e.flags & 1)) {
    const t = Yn(e),
      n = Ye[Ye.length - 1]
    ;(!n || (!(e.flags & 2) && t >= Yn(n)) ? Ye.push(e) : Ye.splice(cu(t), 0, e),
      (e.flags |= 1),
      zl())
  }
}
function zl() {
  xs || (xs = Gl.then(ql))
}
function uu(e) {
  ;(ne(e)
    ? _n.push(...e)
    : Vt && e.id === -1
      ? Vt.splice(pn + 1, 0, e)
      : e.flags & 1 || (_n.push(e), (e.flags |= 1)),
    zl())
}
function Hi(e, t, n = yt + 1) {
  for (; n < Ye.length; n++) {
    const s = Ye[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      ;(Ye.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2))
    }
  }
}
function Yl(e) {
  if (_n.length) {
    const t = [...new Set(_n)].sort((n, s) => Yn(n) - Yn(s))
    if (((_n.length = 0), Vt)) {
      Vt.push(...t)
      return
    }
    for (Vt = t, pn = 0; pn < Vt.length; pn++) {
      const n = Vt[pn]
      ;(n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2))
    }
    ;((Vt = null), (pn = 0))
  }
}
const Yn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function ql(e) {
  try {
    for (yt = 0; yt < Ye.length; yt++) {
      const t = Ye[yt]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), ns(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; yt < Ye.length; yt++) {
      const t = Ye[yt]
      t && (t.flags &= -2)
    }
    ;((yt = -1), (Ye.length = 0), Yl(), (xs = null), (Ye.length || _n.length) && ql())
  }
}
let ft = null,
  Kl = null
function Cs(e) {
  const t = ft
  return ((ft = e), (Kl = (e && e.type.__scopeId) || null), t)
}
function Ot(e, t = ft, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Qi(-1)
    const i = Cs(t)
    let o
    try {
      o = e(...r)
    } finally {
      ;(Cs(i), s._d && Qi(1))
    }
    return o
  }
  return ((s._n = !0), (s._c = !0), (s._d = !0), s)
}
function tn(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let a = l.dir[s]
    a && (Dt(), Ct(a, n, 8, [e.el, l, e, t]), Ft())
  }
}
const fu = Symbol('_vte'),
  du = (e) => e.__isTeleport
function pi(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), pi(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
/*! #__NO_SIDE_EFFECTS__ */ function qe(e, t) {
  return se(e) ? Ue({ name: e.name }, t, { setup: e }) : e
}
function Xl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function Bn(e, t, n, s, r = !1) {
  if (ne(e)) {
    e.forEach((v, S) => Bn(v, t && (ne(t) ? t[S] : t), n, s, r))
    return
  }
  if (jn(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Bn(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? yi(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === ye ? (l.refs = {}) : l.refs,
    f = l.setupState,
    d = de(f),
    p = f === ye ? () => !1 : (v) => pe(d, v)
  if (
    (c != null &&
      c !== a &&
      (Oe(c) ? ((u[c] = null), p(c) && (f[c] = null)) : $e(c) && (c.value = null)),
    se(a))
  )
    ns(a, l, 12, [o, u])
  else {
    const v = Oe(a),
      S = $e(a)
    if (v || S) {
      const P = () => {
        if (e.f) {
          const m = v ? (p(a) ? f[a] : u[a]) : a.value
          r
            ? ne(m) && ti(m, i)
            : ne(m)
              ? m.includes(i) || m.push(i)
              : v
                ? ((u[a] = [i]), p(a) && (f[a] = u[a]))
                : ((a.value = [i]), e.k && (u[e.k] = a.value))
        } else v ? ((u[a] = o), p(a) && (f[a] = o)) : S && ((a.value = o), e.k && (u[e.k] = o))
      }
      o ? ((P.id = -1), Ze(P, n)) : P()
    }
  }
}
js().requestIdleCallback
js().cancelIdleCallback
const jn = (e) => !!e.type.__asyncLoader,
  Jl = (e) => e.type.__isKeepAlive
function pu(e, t) {
  Ql(e, 'a', t)
}
function hu(e, t) {
  Ql(e, 'da', t)
}
function Ql(e, t, n = We) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Us(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) (Jl(r.parent.vnode) && mu(s, t, n, r), (r = r.parent))
  }
}
function mu(e, t, n, s) {
  const r = Us(t, e, s, !0)
  ss(() => {
    ti(s[t], r)
  }, n)
}
function Us(e, t, n = We, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Dt()
          const l = is(n),
            a = Ct(t, n, e, o)
          return (l(), Ft(), a)
        })
    return (s ? r.unshift(i) : r.push(i), i)
  }
}
const $t =
    (e) =>
    (t, n = We) => {
      ;(!Kn || e === 'sp') && Us(e, (...s) => t(...s), n)
    },
  gu = $t('bm'),
  un = $t('m'),
  Zl = $t('bu'),
  hi = $t('u'),
  mi = $t('bum'),
  ss = $t('um'),
  vu = $t('sp'),
  bu = $t('rtg'),
  _u = $t('rtc')
function yu(e, t = We) {
  Us('ec', e, t)
}
const wu = 'components'
function gi(e, t) {
  return Eu(wu, e, !0, t) || e
}
const Su = Symbol.for('v-ndc')
function Eu(e, t, n = !0, s = !1) {
  const r = ft || We
  if (r) {
    const i = r.type
    {
      const l = df(i, !1)
      if (l && (l === t || l === ct(t) || l === Bs(ct(t)))) return i
    }
    const o = Wi(r[e] || i[e], t) || Wi(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function Wi(e, t) {
  return e && (e[t] || e[ct(t)] || e[Bs(ct(t))])
}
function rn(e, t, n, s) {
  let r
  const i = n,
    o = ne(e)
  if (o || Oe(e)) {
    const l = o && bn(e)
    let a = !1,
      c = !1
    ;(l && ((a = !lt(e)), (c = Yt(e)), (e = Vs(e))), (r = new Array(e.length)))
    for (let u = 0, f = e.length; u < f; u++)
      r[u] = t(a ? (c ? Es(Fe(e[u])) : Fe(e[u])) : e[u], u, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
  } else if (Ee(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, i))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a]
        r[a] = t(e[u], u, a, i)
      }
    }
  else r = []
  return r
}
const Lr = (e) => (e ? (_a(e) ? yi(e) : Lr(e.parent)) : null),
  Vn = Ue(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Lr(e.parent),
    $root: (e) => Lr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ta(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        di(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = fi.bind(e.proxy)),
    $watch: (e) => Uu.bind(e),
  }),
  sr = (e, t) => e !== ye && !e.__isScriptSetup && pe(e, t),
  Tu = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e
      let c
      if (t[0] !== '$') {
        const p = o[t]
        if (p !== void 0)
          switch (p) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (sr(s, t)) return ((o[t] = 1), s[t])
          if (r !== ye && pe(r, t)) return ((o[t] = 2), r[t])
          if ((c = e.propsOptions[0]) && pe(c, t)) return ((o[t] = 3), i[t])
          if (n !== ye && pe(n, t)) return ((o[t] = 4), n[t])
          Or && (o[t] = 0)
        }
      }
      const u = Vn[t]
      let f, d
      if (u) return (t === '$attrs' && Ve(e.attrs, 'get', ''), u(e))
      if ((f = l.__cssModules) && (f = f[t])) return f
      if (n !== ye && pe(n, t)) return ((o[t] = 4), n[t])
      if (((d = a.config.globalProperties), pe(d, t))) return d[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return sr(r, t)
        ? ((r[t] = n), !0)
        : s !== ye && pe(s, t)
          ? ((s[t] = n), !0)
          : pe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } },
      o,
    ) {
      let l
      return (
        !!n[o] ||
        (e !== ye && pe(e, o)) ||
        sr(t, o) ||
        ((l = i[0]) && pe(l, o)) ||
        pe(s, o) ||
        pe(Vn, o) ||
        pe(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : pe(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Ui(e) {
  return ne(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Or = !0
function xu(e) {
  const t = ta(e),
    n = e.proxy,
    s = e.ctx
  ;((Or = !1), t.beforeCreate && Gi(t.beforeCreate, e, 'bc'))
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: v,
    activated: S,
    deactivated: P,
    beforeDestroy: m,
    beforeUnmount: h,
    destroyed: g,
    unmounted: _,
    render: T,
    renderTracked: O,
    renderTriggered: k,
    errorCaptured: j,
    serverPrefetch: M,
    expose: B,
    inheritAttrs: V,
    components: G,
    directives: J,
    filters: oe,
  } = t
  if ((c && Cu(c, s, null), o))
    for (const Q in o) {
      const Z = o[Q]
      se(Z) && (s[Q] = Z.bind(n))
    }
  if (r) {
    const Q = r.call(n, n)
    Ee(Q) && (e.data = Hs(Q))
  }
  if (((Or = !0), i))
    for (const Q in i) {
      const Z = i[Q],
        he = se(Z) ? Z.bind(n, n) : se(Z.get) ? Z.get.bind(n, n) : Et,
        Be = !se(Z) && se(Z.set) ? Z.set.bind(n) : Et,
        De = Ie({ get: he, set: Be })
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (ke) => (De.value = ke),
      })
    }
  if (l) for (const Q in l) ea(l[Q], s, n, Q)
  if (a) {
    const Q = se(a) ? a.call(n) : a
    Reflect.ownKeys(Q).forEach((Z) => {
      wn(Z, Q[Z])
    })
  }
  u && Gi(u, e, 'c')
  function Y(Q, Z) {
    ne(Z) ? Z.forEach((he) => Q(he.bind(n))) : Z && Q(Z.bind(n))
  }
  if (
    (Y(gu, f),
    Y(un, d),
    Y(Zl, p),
    Y(hi, v),
    Y(pu, S),
    Y(hu, P),
    Y(yu, j),
    Y(_u, O),
    Y(bu, k),
    Y(mi, h),
    Y(ss, _),
    Y(vu, M),
    ne(B))
  )
    if (B.length) {
      const Q = e.exposed || (e.exposed = {})
      B.forEach((Z) => {
        Object.defineProperty(Q, Z, { get: () => n[Z], set: (he) => (n[Z] = he), enumerable: !0 })
      })
    } else e.exposed || (e.exposed = {})
  ;(T && e.render === Et && (e.render = T),
    V != null && (e.inheritAttrs = V),
    G && (e.components = G),
    J && (e.directives = J),
    M && Xl(e))
}
function Cu(e, t, n = Et) {
  ne(e) && (e = Ar(e))
  for (const s in e) {
    const r = e[s]
    let i
    ;(Ee(r)
      ? 'default' in r
        ? (i = at(r.from || s, r.default, !0))
        : (i = at(r.from || s))
      : (i = at(r)),
      $e(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i))
  }
}
function Gi(e, t, n) {
  Ct(ne(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function ea(e, t, n, s) {
  let r = s.includes('.') ? ha(n, s) : () => n[s]
  if (Oe(e)) {
    const i = t[e]
    se(i) && Tt(r, i)
  } else if (se(e)) Tt(r, e.bind(n))
  else if (Ee(e))
    if (ne(e)) e.forEach((i) => ea(i, t, n, s))
    else {
      const i = se(e.handler) ? e.handler.bind(n) : t[e.handler]
      se(i) && Tt(r, i, e)
    }
}
function ta(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let a
  return (
    l
      ? (a = l)
      : !r.length && !n && !s
        ? (a = t)
        : ((a = {}), r.length && r.forEach((c) => Ps(a, c, o, !0)), Ps(a, t, o)),
    Ee(t) && i.set(t, a),
    a
  )
}
function Ps(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  ;(i && Ps(e, i, n, !0), r && r.forEach((o) => Ps(e, o, n, !0)))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Pu[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Pu = {
  data: zi,
  props: Yi,
  emits: Yi,
  methods: Nn,
  computed: Nn,
  beforeCreate: Ge,
  created: Ge,
  beforeMount: Ge,
  mounted: Ge,
  beforeUpdate: Ge,
  updated: Ge,
  beforeDestroy: Ge,
  beforeUnmount: Ge,
  destroyed: Ge,
  unmounted: Ge,
  activated: Ge,
  deactivated: Ge,
  errorCaptured: Ge,
  serverPrefetch: Ge,
  components: Nn,
  directives: Nn,
  watch: ku,
  provide: zi,
  inject: Iu,
}
function zi(e, t) {
  return t
    ? e
      ? function () {
          return Ue(se(e) ? e.call(this, this) : e, se(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Iu(e, t) {
  return Nn(Ar(e), Ar(t))
}
function Ar(e) {
  if (ne(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Nn(e, t) {
  return e ? Ue(Object.create(null), e, t) : t
}
function Yi(e, t) {
  return e
    ? ne(e) && ne(t)
      ? [...new Set([...e, ...t])]
      : Ue(Object.create(null), Ui(e), Ui(t ?? {}))
    : t
}
function ku(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Ue(Object.create(null), e)
  for (const s in t) n[s] = Ge(e[s], t[s])
  return n
}
function na() {
  return {
    app: null,
    config: {
      isNativeTag: Ec,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Lu = 0
function Ou(e, t) {
  return function (s, r = null) {
    ;(se(s) || (s = Ue({}, s)), r != null && !Ee(r) && (r = null))
    const i = na(),
      o = new WeakSet(),
      l = []
    let a = !1
    const c = (i.app = {
      _uid: Lu++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: hf,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...f) {
        return (
          o.has(u) ||
            (u && se(u.install) ? (o.add(u), u.install(c, ...f)) : se(u) && (o.add(u), u(c, ...f))),
          c
        )
      },
      mixin(u) {
        return (i.mixins.includes(u) || i.mixins.push(u), c)
      },
      component(u, f) {
        return f ? ((i.components[u] = f), c) : i.components[u]
      },
      directive(u, f) {
        return f ? ((i.directives[u] = f), c) : i.directives[u]
      },
      mount(u, f, d) {
        if (!a) {
          const p = c._ceVNode || ge(s, r)
          return (
            (p.appContext = i),
            d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
            e(p, u, d),
            (a = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            yi(p.component)
          )
        }
      },
      onUnmount(u) {
        l.push(u)
      },
      unmount() {
        a && (Ct(l, c._instance, 16), e(null, c._container), delete c._container.__vue_app__)
      },
      provide(u, f) {
        return ((i.provides[u] = f), c)
      },
      runWithContext(u) {
        const f = yn
        yn = c
        try {
          return u()
        } finally {
          yn = f
        }
      },
    })
    return c
  }
}
let yn = null
function wn(e, t) {
  if (We) {
    let n = We.provides
    const s = We.parent && We.parent.provides
    ;(s === n && (n = We.provides = Object.create(s)), (n[e] = t))
  }
}
function at(e, t, n = !1) {
  const s = Tn()
  if (s || yn) {
    let r = yn
      ? yn._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && se(t) ? t.call(s && s.proxy) : t
  }
}
const sa = {},
  ra = () => Object.create(sa),
  ia = (e) => Object.getPrototypeOf(e) === sa
function Au(e, t, n, s = !1) {
  const r = {},
    i = ra()
  ;((e.propsDefaults = Object.create(null)), oa(e, t, r, i))
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  ;(n ? (e.props = s ? r : jl(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i))
}
function Mu(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = de(r),
    [a] = e.propsOptions
  let c = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let f = 0; f < u.length; f++) {
        let d = u[f]
        if (Gs(e.emitsOptions, d)) continue
        const p = t[d]
        if (a)
          if (pe(i, d)) p !== i[d] && ((i[d] = p), (c = !0))
          else {
            const v = ct(d)
            r[v] = Mr(a, l, v, p, e, !1)
          }
        else p !== i[d] && ((i[d] = p), (c = !0))
      }
    }
  } else {
    oa(e, t, r, i) && (c = !0)
    let u
    for (const f in l)
      (!t || (!pe(t, f) && ((u = cn(f)) === f || !pe(t, u)))) &&
        (a
          ? n && (n[f] !== void 0 || n[u] !== void 0) && (r[f] = Mr(a, l, f, void 0, e, !0))
          : delete r[f])
    if (i !== l) for (const f in i) (!t || !pe(t, f)) && (delete i[f], (c = !0))
  }
  c && Mt(e.attrs, 'set', '')
}
function oa(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let a in t) {
      if (Dn(a)) continue
      const c = t[a]
      let u
      r && pe(r, (u = ct(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : Gs(e.emitsOptions, a) || ((!(a in s) || c !== s[a]) && ((s[a] = c), (o = !0)))
    }
  if (i) {
    const a = de(n),
      c = l || ye
    for (let u = 0; u < i.length; u++) {
      const f = i[u]
      n[f] = Mr(r, a, f, c[f], e, !pe(c, f))
    }
  }
  return o
}
function Mr(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = pe(o, 'default')
    if (l && s === void 0) {
      const a = o.default
      if (o.type !== Function && !o.skipFactory && se(a)) {
        const { propsDefaults: c } = r
        if (n in c) s = c[n]
        else {
          const u = is(r)
          ;((s = c[n] = a.call(null, t)), u())
        }
      } else s = a
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === cn(n)) && (s = !0))
  }
  return s
}
const Ru = new WeakMap()
function la(e, t, n = !1) {
  const s = n ? Ru : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let a = !1
  if (!se(e)) {
    const u = (f) => {
      a = !0
      const [d, p] = la(f, t, !0)
      ;(Ue(o, d), p && l.push(...p))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u))
  }
  if (!i && !a) return (Ee(e) && s.set(e, gn), gn)
  if (ne(i))
    for (let u = 0; u < i.length; u++) {
      const f = ct(i[u])
      qi(f) && (o[f] = ye)
    }
  else if (i)
    for (const u in i) {
      const f = ct(u)
      if (qi(f)) {
        const d = i[u],
          p = (o[f] = ne(d) || se(d) ? { type: d } : Ue({}, d)),
          v = p.type
        let S = !1,
          P = !0
        if (ne(v))
          for (let m = 0; m < v.length; ++m) {
            const h = v[m],
              g = se(h) && h.name
            if (g === 'Boolean') {
              S = !0
              break
            } else g === 'String' && (P = !1)
          }
        else S = se(v) && v.name === 'Boolean'
        ;((p[0] = S), (p[1] = P), (S || pe(p, 'default')) && l.push(f))
      }
    }
  const c = [o, l]
  return (Ee(e) && s.set(e, c), c)
}
function qi(e) {
  return e[0] !== '$' && !Dn(e)
}
const vi = (e) => e === '_' || e === '__' || e === '_ctx' || e === '$stable',
  bi = (e) => (ne(e) ? e.map(wt) : [wt(e)]),
  Nu = (e, t, n) => {
    if (t._n) return t
    const s = Ot((...r) => bi(t(...r)), n)
    return ((s._c = !1), s)
  },
  aa = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (vi(r)) continue
      const i = e[r]
      if (se(i)) t[r] = Nu(r, i, s)
      else if (i != null) {
        const o = bi(i)
        t[r] = () => o
      }
    }
  },
  ca = (e, t) => {
    const n = bi(t)
    e.slots.default = () => n
  },
  ua = (e, t, n) => {
    for (const s in t) (n || !vi(s)) && (e[s] = t[s])
  },
  Du = (e, t, n) => {
    const s = (e.slots = ra())
    if (e.vnode.shapeFlag & 32) {
      const r = t.__
      r && xr(s, '__', r, !0)
      const i = t._
      i ? (ua(s, t, n), n && xr(s, '_', i, !0)) : aa(t, s)
    } else t && ca(e, t)
  },
  Fu = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ye
    if (s.shapeFlag & 32) {
      const l = t._
      ;(l ? (n && l === 1 ? (i = !1) : ua(r, t, n)) : ((i = !t.$stable), aa(t, r)), (o = t))
    } else t && (ca(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !vi(l) && o[l] == null && delete r[l]
  },
  Ze = Ju
function $u(e) {
  return Bu(e)
}
function Bu(e, t) {
  const n = js()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = Et,
      insertStaticContent: v,
    } = e,
    S = (w, E, I, R = null, F = null, D = null, b = void 0, y = null, C = !!E.dynamicChildren) => {
      if (w === E) return
      ;(w && !On(w, E) && ((R = N(w)), ke(w, F, D, !0), (w = null)),
        E.patchFlag === -2 && ((C = !1), (E.dynamicChildren = null)))
      const { type: L, ref: W, shapeFlag: $ } = E
      switch (L) {
        case rs:
          P(w, E, I, R)
          break
        case qt:
          m(w, E, I, R)
          break
        case vs:
          w == null && h(E, I, R, b)
          break
        case Me:
          G(w, E, I, R, F, D, b, y, C)
          break
        default:
          $ & 1
            ? T(w, E, I, R, F, D, b, y, C)
            : $ & 6
              ? J(w, E, I, R, F, D, b, y, C)
              : ($ & 64 || $ & 128) && L.process(w, E, I, R, F, D, b, y, C, X)
      }
      W != null && F
        ? Bn(W, w && w.ref, D, E || w, !E)
        : W == null && w && w.ref != null && Bn(w.ref, null, D, w, !0)
    },
    P = (w, E, I, R) => {
      if (w == null) s((E.el = l(E.children)), I, R)
      else {
        const F = (E.el = w.el)
        E.children !== w.children && c(F, E.children)
      }
    },
    m = (w, E, I, R) => {
      w == null ? s((E.el = a(E.children || '')), I, R) : (E.el = w.el)
    },
    h = (w, E, I, R) => {
      ;[w.el, w.anchor] = v(w.children, E, I, R, w.el, w.anchor)
    },
    g = ({ el: w, anchor: E }, I, R) => {
      let F
      for (; w && w !== E; ) ((F = d(w)), s(w, I, R), (w = F))
      s(E, I, R)
    },
    _ = ({ el: w, anchor: E }) => {
      let I
      for (; w && w !== E; ) ((I = d(w)), r(w), (w = I))
      r(E)
    },
    T = (w, E, I, R, F, D, b, y, C) => {
      ;(E.type === 'svg' ? (b = 'svg') : E.type === 'math' && (b = 'mathml'),
        w == null ? O(E, I, R, F, D, b, y, C) : M(w, E, F, D, b, y, C))
    },
    O = (w, E, I, R, F, D, b, y) => {
      let C, L
      const { props: W, shapeFlag: $, transition: x, dirs: A } = w
      if (
        ((C = w.el = o(w.type, D, W && W.is, W)),
        $ & 8 ? u(C, w.children) : $ & 16 && j(w.children, C, null, R, F, rr(w, D), b, y),
        A && tn(w, null, R, 'created'),
        k(C, w, w.scopeId, b, R),
        W)
      ) {
        for (const ee in W) ee !== 'value' && !Dn(ee) && i(C, ee, null, W[ee], D, R)
        ;('value' in W && i(C, 'value', null, W.value, D),
          (L = W.onVnodeBeforeMount) && bt(L, R, w))
      }
      A && tn(w, null, R, 'beforeMount')
      const q = ju(F, x)
      ;(q && x.beforeEnter(C),
        s(C, E, I),
        ((L = W && W.onVnodeMounted) || q || A) &&
          Ze(() => {
            ;(L && bt(L, R, w), q && x.enter(C), A && tn(w, null, R, 'mounted'))
          }, F))
    },
    k = (w, E, I, R, F) => {
      if ((I && p(w, I), R)) for (let D = 0; D < R.length; D++) p(w, R[D])
      if (F) {
        let D = F.subTree
        if (E === D || (ga(D.type) && (D.ssContent === E || D.ssFallback === E))) {
          const b = F.vnode
          k(w, b, b.scopeId, b.slotScopeIds, F.parent)
        }
      }
    },
    j = (w, E, I, R, F, D, b, y, C = 0) => {
      for (let L = C; L < w.length; L++) {
        const W = (w[L] = y ? Ht(w[L]) : wt(w[L]))
        S(null, W, E, I, R, F, D, b, y)
      }
    },
    M = (w, E, I, R, F, D, b) => {
      const y = (E.el = w.el)
      let { patchFlag: C, dynamicChildren: L, dirs: W } = E
      C |= w.patchFlag & 16
      const $ = w.props || ye,
        x = E.props || ye
      let A
      if (
        (I && nn(I, !1),
        (A = x.onVnodeBeforeUpdate) && bt(A, I, E, w),
        W && tn(E, w, I, 'beforeUpdate'),
        I && nn(I, !0),
        (($.innerHTML && x.innerHTML == null) || ($.textContent && x.textContent == null)) &&
          u(y, ''),
        L
          ? B(w.dynamicChildren, L, y, I, R, rr(E, F), D)
          : b || Z(w, E, y, null, I, R, rr(E, F), D, !1),
        C > 0)
      ) {
        if (C & 16) V(y, $, x, I, F)
        else if (
          (C & 2 && $.class !== x.class && i(y, 'class', null, x.class, F),
          C & 4 && i(y, 'style', $.style, x.style, F),
          C & 8)
        ) {
          const q = E.dynamicProps
          for (let ee = 0; ee < q.length; ee++) {
            const re = q[ee],
              Ae = $[re],
              Pe = x[re]
            ;(Pe !== Ae || re === 'value') && i(y, re, Ae, Pe, F, I)
          }
        }
        C & 1 && w.children !== E.children && u(y, E.children)
      } else !b && L == null && V(y, $, x, I, F)
      ;((A = x.onVnodeUpdated) || W) &&
        Ze(() => {
          ;(A && bt(A, I, E, w), W && tn(E, w, I, 'updated'))
        }, R)
    },
    B = (w, E, I, R, F, D, b) => {
      for (let y = 0; y < E.length; y++) {
        const C = w[y],
          L = E[y],
          W = C.el && (C.type === Me || !On(C, L) || C.shapeFlag & 198) ? f(C.el) : I
        S(C, L, W, null, R, F, D, b, !0)
      }
    },
    V = (w, E, I, R, F) => {
      if (E !== I) {
        if (E !== ye) for (const D in E) !Dn(D) && !(D in I) && i(w, D, E[D], null, F, R)
        for (const D in I) {
          if (Dn(D)) continue
          const b = I[D],
            y = E[D]
          b !== y && D !== 'value' && i(w, D, y, b, F, R)
        }
        'value' in I && i(w, 'value', E.value, I.value, F)
      }
    },
    G = (w, E, I, R, F, D, b, y, C) => {
      const L = (E.el = w ? w.el : l('')),
        W = (E.anchor = w ? w.anchor : l(''))
      let { patchFlag: $, dynamicChildren: x, slotScopeIds: A } = E
      ;(A && (y = y ? y.concat(A) : A),
        w == null
          ? (s(L, I, R), s(W, I, R), j(E.children || [], I, W, F, D, b, y, C))
          : $ > 0 && $ & 64 && x && w.dynamicChildren
            ? (B(w.dynamicChildren, x, I, F, D, b, y),
              (E.key != null || (F && E === F.subTree)) && fa(w, E, !0))
            : Z(w, E, I, W, F, D, b, y, C))
    },
    J = (w, E, I, R, F, D, b, y, C) => {
      ;((E.slotScopeIds = y),
        w == null
          ? E.shapeFlag & 512
            ? F.ctx.activate(E, I, R, b, C)
            : oe(E, I, R, F, D, b, C)
          : le(w, E, C))
    },
    oe = (w, E, I, R, F, D, b) => {
      const y = (w.component = lf(w, R, F))
      if ((Jl(w) && (y.ctx.renderer = X), af(y, !1, b), y.asyncDep)) {
        if ((F && F.registerDep(y, Y, b), !w.el)) {
          const C = (y.subTree = ge(qt))
          ;(m(null, C, E, I), (w.placeholder = C.el))
        }
      } else Y(y, w, E, I, F, D, b)
    },
    le = (w, E, I) => {
      const R = (E.component = w.component)
      if (Ku(w, E, I))
        if (R.asyncDep && !R.asyncResolved) {
          Q(R, E, I)
          return
        } else ((R.next = E), R.update())
      else ((E.el = w.el), (R.vnode = E))
    },
    Y = (w, E, I, R, F, D, b) => {
      const y = () => {
        if (w.isMounted) {
          let { next: $, bu: x, u: A, parent: q, vnode: ee } = w
          {
            const ut = da(w)
            if (ut) {
              ;($ && (($.el = ee.el), Q(w, $, b)),
                ut.asyncDep.then(() => {
                  w.isUnmounted || y()
                }))
              return
            }
          }
          let re = $,
            Ae
          ;(nn(w, !1),
            $ ? (($.el = ee.el), Q(w, $, b)) : ($ = ee),
            x && Qs(x),
            (Ae = $.props && $.props.onVnodeBeforeUpdate) && bt(Ae, q, $, ee),
            nn(w, !0))
          const Pe = Xi(w),
            it = w.subTree
          ;((w.subTree = Pe),
            S(it, Pe, f(it.el), N(it), w, F, D),
            ($.el = Pe.el),
            re === null && Xu(w, Pe.el),
            A && Ze(A, F),
            (Ae = $.props && $.props.onVnodeUpdated) && Ze(() => bt(Ae, q, $, ee), F))
        } else {
          let $
          const { el: x, props: A } = E,
            { bm: q, m: ee, parent: re, root: Ae, type: Pe } = w,
            it = jn(E)
          ;(nn(w, !1),
            q && Qs(q),
            !it && ($ = A && A.onVnodeBeforeMount) && bt($, re, E),
            nn(w, !0))
          {
            Ae.ce && Ae.ce._def.shadowRoot !== !1 && Ae.ce._injectChildStyle(Pe)
            const ut = (w.subTree = Xi(w))
            ;(S(null, ut, I, R, w, F, D), (E.el = ut.el))
          }
          if ((ee && Ze(ee, F), !it && ($ = A && A.onVnodeMounted))) {
            const ut = E
            Ze(() => bt($, re, ut), F)
          }
          ;((E.shapeFlag & 256 || (re && jn(re.vnode) && re.vnode.shapeFlag & 256)) &&
            w.a &&
            Ze(w.a, F),
            (w.isMounted = !0),
            (E = I = R = null))
        }
      }
      w.scope.on()
      const C = (w.effect = new Cl(y))
      w.scope.off()
      const L = (w.update = C.run.bind(C)),
        W = (w.job = C.runIfDirty.bind(C))
      ;((W.i = w), (W.id = w.uid), (C.scheduler = () => di(W)), nn(w, !0), L())
    },
    Q = (w, E, I) => {
      E.component = w
      const R = w.vnode.props
      ;((w.vnode = E),
        (w.next = null),
        Mu(w, E.props, R, I),
        Fu(w, E.children, I),
        Dt(),
        Hi(w),
        Ft())
    },
    Z = (w, E, I, R, F, D, b, y, C = !1) => {
      const L = w && w.children,
        W = w ? w.shapeFlag : 0,
        $ = E.children,
        { patchFlag: x, shapeFlag: A } = E
      if (x > 0) {
        if (x & 128) {
          Be(L, $, I, R, F, D, b, y, C)
          return
        } else if (x & 256) {
          he(L, $, I, R, F, D, b, y, C)
          return
        }
      }
      A & 8
        ? (W & 16 && je(L, F, D), $ !== L && u(I, $))
        : W & 16
          ? A & 16
            ? Be(L, $, I, R, F, D, b, y, C)
            : je(L, F, D, !0)
          : (W & 8 && u(I, ''), A & 16 && j($, I, R, F, D, b, y, C))
    },
    he = (w, E, I, R, F, D, b, y, C) => {
      ;((w = w || gn), (E = E || gn))
      const L = w.length,
        W = E.length,
        $ = Math.min(L, W)
      let x
      for (x = 0; x < $; x++) {
        const A = (E[x] = C ? Ht(E[x]) : wt(E[x]))
        S(w[x], A, I, null, F, D, b, y, C)
      }
      L > W ? je(w, F, D, !0, !1, $) : j(E, I, R, F, D, b, y, C, $)
    },
    Be = (w, E, I, R, F, D, b, y, C) => {
      let L = 0
      const W = E.length
      let $ = w.length - 1,
        x = W - 1
      for (; L <= $ && L <= x; ) {
        const A = w[L],
          q = (E[L] = C ? Ht(E[L]) : wt(E[L]))
        if (On(A, q)) S(A, q, I, null, F, D, b, y, C)
        else break
        L++
      }
      for (; L <= $ && L <= x; ) {
        const A = w[$],
          q = (E[x] = C ? Ht(E[x]) : wt(E[x]))
        if (On(A, q)) S(A, q, I, null, F, D, b, y, C)
        else break
        ;($--, x--)
      }
      if (L > $) {
        if (L <= x) {
          const A = x + 1,
            q = A < W ? E[A].el : R
          for (; L <= x; ) (S(null, (E[L] = C ? Ht(E[L]) : wt(E[L])), I, q, F, D, b, y, C), L++)
        }
      } else if (L > x) for (; L <= $; ) (ke(w[L], F, D, !0), L++)
      else {
        const A = L,
          q = L,
          ee = new Map()
        for (L = q; L <= x; L++) {
          const Qe = (E[L] = C ? Ht(E[L]) : wt(E[L]))
          Qe.key != null && ee.set(Qe.key, L)
        }
        let re,
          Ae = 0
        const Pe = x - q + 1
        let it = !1,
          ut = 0
        const kn = new Array(Pe)
        for (L = 0; L < Pe; L++) kn[L] = 0
        for (L = A; L <= $; L++) {
          const Qe = w[L]
          if (Ae >= Pe) {
            ke(Qe, F, D, !0)
            continue
          }
          let vt
          if (Qe.key != null) vt = ee.get(Qe.key)
          else
            for (re = q; re <= x; re++)
              if (kn[re - q] === 0 && On(Qe, E[re])) {
                vt = re
                break
              }
          vt === void 0
            ? ke(Qe, F, D, !0)
            : ((kn[vt - q] = L + 1),
              vt >= ut ? (ut = vt) : (it = !0),
              S(Qe, E[vt], I, null, F, D, b, y, C),
              Ae++)
        }
        const Di = it ? Vu(kn) : gn
        for (re = Di.length - 1, L = Pe - 1; L >= 0; L--) {
          const Qe = q + L,
            vt = E[Qe],
            Fi = E[Qe + 1],
            $i = Qe + 1 < W ? Fi.el || Fi.placeholder : R
          kn[L] === 0
            ? S(null, vt, I, $i, F, D, b, y, C)
            : it && (re < 0 || L !== Di[re] ? De(vt, I, $i, 2) : re--)
        }
      }
    },
    De = (w, E, I, R, F = null) => {
      const { el: D, type: b, transition: y, children: C, shapeFlag: L } = w
      if (L & 6) {
        De(w.component.subTree, E, I, R)
        return
      }
      if (L & 128) {
        w.suspense.move(E, I, R)
        return
      }
      if (L & 64) {
        b.move(w, E, I, X)
        return
      }
      if (b === Me) {
        s(D, E, I)
        for (let $ = 0; $ < C.length; $++) De(C[$], E, I, R)
        s(w.anchor, E, I)
        return
      }
      if (b === vs) {
        g(w, E, I)
        return
      }
      if (R !== 2 && L & 1 && y)
        if (R === 0) (y.beforeEnter(D), s(D, E, I), Ze(() => y.enter(D), F))
        else {
          const { leave: $, delayLeave: x, afterLeave: A } = y,
            q = () => {
              w.ctx.isUnmounted ? r(D) : s(D, E, I)
            },
            ee = () => {
              $(D, () => {
                ;(q(), A && A())
              })
            }
          x ? x(D, q, ee) : ee()
        }
      else s(D, E, I)
    },
    ke = (w, E, I, R = !1, F = !1) => {
      const {
        type: D,
        props: b,
        ref: y,
        children: C,
        dynamicChildren: L,
        shapeFlag: W,
        patchFlag: $,
        dirs: x,
        cacheIndex: A,
      } = w
      if (
        ($ === -2 && (F = !1),
        y != null && (Dt(), Bn(y, null, I, w, !0), Ft()),
        A != null && (E.renderCache[A] = void 0),
        W & 256)
      ) {
        E.ctx.deactivate(w)
        return
      }
      const q = W & 1 && x,
        ee = !jn(w)
      let re
      if ((ee && (re = b && b.onVnodeBeforeUnmount) && bt(re, E, w), W & 6)) en(w.component, I, R)
      else {
        if (W & 128) {
          w.suspense.unmount(I, R)
          return
        }
        ;(q && tn(w, null, E, 'beforeUnmount'),
          W & 64
            ? w.type.remove(w, E, I, X, R)
            : L && !L.hasOnce && (D !== Me || ($ > 0 && $ & 64))
              ? je(L, E, I, !1, !0)
              : ((D === Me && $ & 384) || (!F && W & 16)) && je(C, E, I),
          R && mt(w))
      }
      ;((ee && (re = b && b.onVnodeUnmounted)) || q) &&
        Ze(() => {
          ;(re && bt(re, E, w), q && tn(w, null, E, 'unmounted'))
        }, I)
    },
    mt = (w) => {
      const { type: E, el: I, anchor: R, transition: F } = w
      if (E === Me) {
        gt(I, R)
        return
      }
      if (E === vs) {
        _(w)
        return
      }
      const D = () => {
        ;(r(I), F && !F.persisted && F.afterLeave && F.afterLeave())
      }
      if (w.shapeFlag & 1 && F && !F.persisted) {
        const { leave: b, delayLeave: y } = F,
          C = () => b(I, D)
        y ? y(w.el, D, C) : C()
      } else D()
    },
    gt = (w, E) => {
      let I
      for (; w !== E; ) ((I = d(w)), r(w), (w = I))
      r(E)
    },
    en = (w, E, I) => {
      const {
        bum: R,
        scope: F,
        job: D,
        subTree: b,
        um: y,
        m: C,
        a: L,
        parent: W,
        slots: { __: $ },
      } = w
      ;(Ki(C),
        Ki(L),
        R && Qs(R),
        W &&
          ne($) &&
          $.forEach((x) => {
            W.renderCache[x] = void 0
          }),
        F.stop(),
        D && ((D.flags |= 8), ke(b, w, E, I)),
        y && Ze(y, E),
        Ze(() => {
          w.isUnmounted = !0
        }, E),
        E &&
          E.pendingBranch &&
          !E.isUnmounted &&
          w.asyncDep &&
          !w.asyncResolved &&
          w.suspenseId === E.pendingId &&
          (E.deps--, E.deps === 0 && E.resolve()))
    },
    je = (w, E, I, R = !1, F = !1, D = 0) => {
      for (let b = D; b < w.length; b++) ke(w[b], E, I, R, F)
    },
    N = (w) => {
      if (w.shapeFlag & 6) return N(w.component.subTree)
      if (w.shapeFlag & 128) return w.suspense.next()
      const E = d(w.anchor || w.el),
        I = E && E[fu]
      return I ? d(I) : E
    }
  let U = !1
  const H = (w, E, I) => {
      ;(w == null
        ? E._vnode && ke(E._vnode, null, null, !0)
        : S(E._vnode || null, w, E, null, null, null, I),
        (E._vnode = w),
        U || ((U = !0), Hi(), Yl(), (U = !1)))
    },
    X = { p: S, um: ke, m: De, r: mt, mt: oe, mc: j, pc: Z, pbc: B, n: N, o: e }
  return { render: H, hydrate: void 0, createApp: Ou(H) }
}
function rr({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function nn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function ju(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function fa(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (ne(s) && ne(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      ;(l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[i] = Ht(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && fa(o, l)),
        l.type === rs && (l.el = o.el),
        l.type === qt && !l.el && (l.el = o.el))
    }
}
function Vu(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const a = e.length
  for (s = 0; s < a; s++) {
    const c = e[s]
    if (c !== 0) {
      if (((r = n[n.length - 1]), e[r] < c)) {
        ;((t[s] = r), n.push(s))
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        ((l = (i + o) >> 1), e[n[l]] < c ? (i = l + 1) : (o = l))
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) ((n[i] = o), (o = t[o]))
  return n
}
function da(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : da(t)
}
function Ki(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Hu = Symbol.for('v-scx'),
  Wu = () => at(Hu)
function Tt(e, t, n) {
  return pa(e, t, n)
}
function pa(e, t, n = ye) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = Ue({}, n),
    a = (t && s) || (!t && i !== 'post')
  let c
  if (Kn) {
    if (i === 'sync') {
      const p = Wu()
      c = p.__watcherHandles || (p.__watcherHandles = [])
    } else if (!a) {
      const p = () => {}
      return ((p.stop = Et), (p.resume = Et), (p.pause = Et), p)
    }
  }
  const u = We
  l.call = (p, v, S) => Ct(p, u, v, S)
  let f = !1
  ;(i === 'post'
    ? (l.scheduler = (p) => {
        Ze(p, u && u.suspense)
      })
    : i !== 'sync' &&
      ((f = !0),
      (l.scheduler = (p, v) => {
        v ? p() : di(p)
      })),
    (l.augmentJob = (p) => {
      ;(t && (p.flags |= 4), f && ((p.flags |= 2), u && ((p.id = u.uid), (p.i = u))))
    }))
  const d = lu(e, t, l)
  return (Kn && (c ? c.push(d) : a && d()), d)
}
function Uu(e, t, n) {
  const s = this.proxy,
    r = Oe(e) ? (e.includes('.') ? ha(s, e) : () => s[e]) : e.bind(s, s)
  let i
  se(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = is(this),
    l = pa(r, i.bind(s), n)
  return (o(), l)
}
function ha(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const Gu = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${cn(t)}Modifiers`]
function zu(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ye
  let r = n
  const i = t.startsWith('update:'),
    o = i && Gu(s, t.slice(7))
  o && (o.trim && (r = n.map((u) => (Oe(u) ? u.trim() : u))), o.number && (r = n.map(Ic)))
  let l,
    a = s[(l = Js(t))] || s[(l = Js(ct(t)))]
  ;(!a && i && (a = s[(l = Js(cn(t)))]), a && Ct(a, e, 6, r))
  const c = s[l + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;((e.emitted[l] = !0), Ct(c, e, 6, r))
  }
}
function ma(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!se(e)) {
    const a = (c) => {
      const u = ma(c, t, !0)
      u && ((l = !0), Ue(o, u))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a))
  }
  return !i && !l
    ? (Ee(e) && s.set(e, null), null)
    : (ne(i) ? i.forEach((a) => (o[a] = null)) : Ue(o, i), Ee(e) && s.set(e, o), o)
}
function Gs(e, t) {
  return !e || !Ds(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, cn(t)) || pe(e, t))
}
function Xi(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: a,
      render: c,
      renderCache: u,
      props: f,
      data: d,
      setupState: p,
      ctx: v,
      inheritAttrs: S,
    } = e,
    P = Cs(e)
  let m, h
  try {
    if (n.shapeFlag & 4) {
      const _ = r || s,
        T = _
      ;((m = wt(c.call(T, _, u, f, p, d, v))), (h = l))
    } else {
      const _ = t
      ;((m = wt(_.length > 1 ? _(f, { attrs: l, slots: o, emit: a }) : _(f, null))),
        (h = t.props ? l : Yu(l)))
    }
  } catch (_) {
    ;((Hn.length = 0), Ws(_, e, 1), (m = ge(qt)))
  }
  let g = m
  if (h && S !== !1) {
    const _ = Object.keys(h),
      { shapeFlag: T } = g
    _.length && T & 7 && (i && _.some(ei) && (h = qu(h, i)), (g = En(g, h, !1, !0)))
  }
  return (
    n.dirs && ((g = En(g, null, !1, !0)), (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && pi(g, n.transition),
    (m = g),
    Cs(P),
    m
  )
}
const Yu = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Ds(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  qu = (e, t) => {
    const n = {}
    for (const s in e) (!ei(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Ku(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: a } = t,
    c = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return s ? Ji(s, o, c) : !!o
    if (a & 8) {
      const u = t.dynamicProps
      for (let f = 0; f < u.length; f++) {
        const d = u[f]
        if (o[d] !== s[d] && !Gs(c, d)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? Ji(s, o, c) : !0) : !!o
  return !1
}
function Ji(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Gs(n, i)) return !0
  }
  return !1
}
function Xu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      (((e = t.vnode).el = n), (t = t.parent))
    else break
  }
}
const ga = (e) => e.__isSuspense
function Ju(e, t) {
  t && t.pendingBranch ? (ne(e) ? t.effects.push(...e) : t.effects.push(e)) : uu(e)
}
const Me = Symbol.for('v-fgt'),
  rs = Symbol.for('v-txt'),
  qt = Symbol.for('v-cmt'),
  vs = Symbol.for('v-stc'),
  Hn = []
let nt = null
function be(e = !1) {
  Hn.push((nt = e ? null : []))
}
function Qu() {
  ;(Hn.pop(), (nt = Hn[Hn.length - 1] || null))
}
let qn = 1
function Qi(e, t = !1) {
  ;((qn += e), e < 0 && nt && t && (nt.hasOnce = !0))
}
function va(e) {
  return ((e.dynamicChildren = qn > 0 ? nt || gn : null), Qu(), qn > 0 && nt && nt.push(e), e)
}
function Te(e, t, n, s, r, i) {
  return va(K(e, t, n, s, r, i, !0))
}
function bs(e, t, n, s, r) {
  return va(ge(e, t, n, s, r, !0))
}
function Is(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function On(e, t) {
  return e.type === t.type && e.key === t.key
}
const ba = ({ key: e }) => e ?? null,
  _s = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (Oe(e) || $e(e) || se(e) ? { i: ft, r: e, k: t, f: !!n } : e) : null
  )
function K(e, t = null, n = null, s = 0, r = null, i = e === Me ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ba(t),
    ref: t && _s(t),
    scopeId: Kl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ft,
  }
  return (
    l ? (_i(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= Oe(n) ? 8 : 16),
    qn > 0 && !o && nt && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && nt.push(a),
    a
  )
}
const ge = Zu
function Zu(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Su) && (e = qt), Is(e))) {
    const l = En(e, t, !0)
    return (
      n && _i(l, n),
      qn > 0 && !i && nt && (l.shapeFlag & 6 ? (nt[nt.indexOf(e)] = l) : nt.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((pf(e) && (e = e.__vccOpts), t)) {
    t = ef(t)
    let { class: l, style: a } = t
    ;(l && !Oe(l) && (t.class = tt(l)),
      Ee(a) && (ui(a) && !ne(a) && (a = Ue({}, a)), (t.style = si(a))))
  }
  const o = Oe(e) ? 1 : ga(e) ? 128 : du(e) ? 64 : Ee(e) ? 4 : se(e) ? 2 : 0
  return K(e, t, n, s, r, o, i, !0)
}
function ef(e) {
  return e ? (ui(e) || ia(e) ? Ue({}, e) : e) : null
}
function En(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e,
    c = t ? sf(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && ba(c),
      ref: t && t.ref ? (n && i ? (ne(i) ? i.concat(_s(t)) : [i, _s(t)]) : _s(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Me ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && En(e.ssContent),
      ssFallback: e.ssFallback && En(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return (a && s && pi(u, a.clone(u)), u)
}
function tf(e = ' ', t = 0) {
  return ge(rs, null, e, t)
}
function nf(e, t) {
  const n = ge(vs, null, e)
  return ((n.staticCount = t), n)
}
function Zi(e = '', t = !1) {
  return t ? (be(), bs(qt, null, e)) : ge(qt, null, e)
}
function wt(e) {
  return e == null || typeof e == 'boolean'
    ? ge(qt)
    : ne(e)
      ? ge(Me, null, e.slice())
      : Is(e)
        ? Ht(e)
        : ge(rs, null, String(e))
}
function Ht(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : En(e)
}
function _i(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (ne(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), _i(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !ia(t)
        ? (t._ctx = ft)
        : r === 3 && ft && (ft.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    se(t)
      ? ((t = { default: t, _ctx: ft }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [tf(t)])) : (n = 8))
  ;((e.children = t), (e.shapeFlag |= n))
}
function sf(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = tt([t.class, s.class]))
      else if (r === 'style') t.style = si([t.style, s.style])
      else if (Ds(r)) {
        const i = t[r],
          o = s[r]
        o && i !== o && !(ne(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function bt(e, t, n, s = null) {
  Ct(e, t, 7, [n, s])
}
const rf = na()
let of = 0
function lf(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || rf,
    i = {
      uid: of++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new xl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: la(s, r),
      emitsOptions: ma(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ye,
      inheritAttrs: s.inheritAttrs,
      ctx: ye,
      data: ye,
      props: ye,
      attrs: ye,
      slots: ye,
      refs: ye,
      setupState: ye,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = zu.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let We = null
const Tn = () => We || ft
let ks, Rr
{
  const e = js(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;((ks = t('__VUE_INSTANCE_SETTERS__', (n) => (We = n))),
    (Rr = t('__VUE_SSR_SETTERS__', (n) => (Kn = n))))
}
const is = (e) => {
    const t = We
    return (
      ks(e),
      e.scope.on(),
      () => {
        ;(e.scope.off(), ks(t))
      }
    )
  },
  eo = () => {
    ;(We && We.scope.off(), ks(null))
  }
function _a(e) {
  return e.vnode.shapeFlag & 4
}
let Kn = !1
function af(e, t = !1, n = !1) {
  t && Rr(t)
  const { props: s, children: r } = e.vnode,
    i = _a(e)
  ;(Au(e, s, i, t), Du(e, r, n || t))
  const o = i ? cf(e, t) : void 0
  return (t && Rr(!1), o)
}
function cf(e, t) {
  const n = e.type
  ;((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Tu)))
  const { setup: s } = n
  if (s) {
    Dt()
    const r = (e.setupContext = s.length > 1 ? ff(e) : null),
      i = is(e),
      o = ns(s, e, 0, [e.props, r]),
      l = _l(o)
    if ((Ft(), i(), (l || e.sp) && !jn(e) && Xl(e), l)) {
      if ((o.then(eo, eo), t))
        return o
          .then((a) => {
            to(e, a)
          })
          .catch((a) => {
            Ws(a, e, 0)
          })
      e.asyncDep = o
    } else to(e, o)
  } else ya(e)
}
function to(e, t, n) {
  ;(se(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ee(t) && (e.setupState = Ul(t)),
    ya(e))
}
function ya(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || Et)
  {
    const r = is(e)
    Dt()
    try {
      xu(e)
    } finally {
      ;(Ft(), r())
    }
  }
}
const uf = {
  get(e, t) {
    return (Ve(e, 'get', ''), e[t])
  },
}
function ff(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, uf), slots: e.slots, emit: e.emit, expose: t }
}
function yi(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ul(tu(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Vn) return Vn[n](e)
          },
          has(t, n) {
            return n in t || n in Vn
          },
        }))
    : e.proxy
}
function df(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function pf(e) {
  return se(e) && '__vccOpts' in e
}
const Ie = (e, t) => iu(e, t, Kn)
function He(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Ee(t) && !ne(t)
      ? Is(t)
        ? ge(e, null, [t])
        : ge(e, t)
      : ge(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && Is(n) && (n = [n]),
      ge(e, t, n))
}
const hf = '3.5.18'
/**
 * @vue/runtime-dom v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Nr
const no = typeof window < 'u' && window.trustedTypes
if (no)
  try {
    Nr = no.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const wa = Nr ? (e) => Nr.createHTML(e) : (e) => e,
  mf = 'http://www.w3.org/2000/svg',
  gf = 'http://www.w3.org/1998/Math/MathML',
  At = typeof document < 'u' ? document : null,
  so = At && At.createElement('template'),
  vf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? At.createElementNS(mf, e)
          : t === 'mathml'
            ? At.createElementNS(gf, e)
            : n
              ? At.createElement(e, { is: n })
              : At.createElement(e)
      return (
        e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => At.createTextNode(e),
    createComment: (e) => At.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => At.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        so.innerHTML = wa(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e,
        )
        const l = so.content
        if (s === 'svg' || s === 'mathml') {
          const a = l.firstChild
          for (; a.firstChild; ) l.appendChild(a.firstChild)
          l.removeChild(a)
        }
        t.insertBefore(l, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  bf = Symbol('_vtc')
function _f(e, t, n) {
  const s = e[bf]
  ;(s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t))
}
const ro = Symbol('_vod'),
  yf = Symbol('_vsh'),
  wf = Symbol(''),
  Sf = /(^|;)\s*display\s*:/
function Ef(e, t, n) {
  const s = e.style,
    r = Oe(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (Oe(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && ys(s, l, '')
        }
      else for (const o in t) n[o] == null && ys(s, o, '')
    for (const o in n) (o === 'display' && (i = !0), ys(s, o, n[o]))
  } else if (r) {
    if (t !== n) {
      const o = s[wf]
      ;(o && (n += ';' + o), (s.cssText = n), (i = Sf.test(n)))
    }
  } else t && e.removeAttribute('style')
  ro in e && ((e[ro] = i ? s.display : ''), e[yf] && (s.display = 'none'))
}
const io = /\s*!important$/
function ys(e, t, n) {
  if (ne(n)) n.forEach((s) => ys(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Tf(e, t)
    io.test(n) ? e.setProperty(cn(s), n.replace(io, ''), 'important') : (e[s] = n)
  }
}
const oo = ['Webkit', 'Moz', 'ms'],
  ir = {}
function Tf(e, t) {
  const n = ir[t]
  if (n) return n
  let s = ct(t)
  if (s !== 'filter' && s in e) return (ir[t] = s)
  s = Bs(s)
  for (let r = 0; r < oo.length; r++) {
    const i = oo[r] + s
    if (i in e) return (ir[t] = i)
  }
  return t
}
const lo = 'http://www.w3.org/1999/xlink'
function ao(e, t, n, s, r, i = Rc(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(lo, t.slice(6, t.length))
      : e.setAttributeNS(lo, t, n)
    : n == null || (i && !Sl(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : Kt(n) ? String(n) : n)
}
function co(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? wa(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      a = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;((l !== a || !('_value' in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n))
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = Sl(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function xf(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Cf(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const uo = Symbol('_vei')
function Pf(e, t, n, s, r = null) {
  const i = e[uo] || (e[uo] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, a] = If(t)
    if (s) {
      const c = (i[t] = Of(s, r))
      xf(e, l, c, a)
    } else o && (Cf(e, l, o, a), (i[t] = void 0))
  }
}
const fo = /(?:Once|Passive|Capture)$/
function If(e) {
  let t
  if (fo.test(e)) {
    t = {}
    let s
    for (; (s = e.match(fo)); )
      ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0))
  }
  return [e[2] === ':' ? e.slice(3) : cn(e.slice(2)), t]
}
let or = 0
const kf = Promise.resolve(),
  Lf = () => or || (kf.then(() => (or = 0)), (or = Date.now()))
function Of(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ct(Af(s, n.value), t, 5, [s])
  }
  return ((n.value = e), (n.attached = Lf()), n)
}
function Af(e, t) {
  if (ne(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        ;(n.call(e), (e._stopped = !0))
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const po = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Mf = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? _f(e, s, o)
      : t === 'style'
        ? Ef(e, n, s)
        : Ds(t)
          ? ei(t) || Pf(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Rf(e, t, s, o)
              )
            ? (co(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                ao(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Oe(s))
              ? co(e, ct(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                ao(e, t, s, o))
  }
function Rf(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && po(t) && se(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return po(t) && Oe(n) ? !1 : t in e
}
const Nf = ['ctrl', 'shift', 'alt', 'meta'],
  Df = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => Nf.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Sa = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = Df[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  Ff = Ue({ patchProp: Mf }, vf)
let ho
function $f() {
  return ho || (ho = $u(Ff))
}
const Bf = (...e) => {
  const t = $f().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Vf(s)
      if (!r) return
      const i = t._component
      ;(!se(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ''))
      const o = n(r, !1, jf(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        o
      )
    }),
    t
  )
}
function jf(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Vf(e) {
  return Oe(e) ? document.querySelector(e) : e
}
/*!
 * shared v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function Hf(e, t) {
  typeof console < 'u' && (console.warn('[intlify] ' + e), t && console.warn(t.stack))
}
const Ls = typeof window < 'u',
  Xt = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Wf = (e, t, n) => Uf({ l: e, k: t, s: n }),
  Uf = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  Le = (e) => typeof e == 'number' && isFinite(e),
  Gf = (e) => wi(e) === '[object Date]',
  xn = (e) => wi(e) === '[object RegExp]',
  zs = (e) => ie(e) && Object.keys(e).length === 0,
  Re = Object.assign,
  zf = Object.create,
  ve = (e = null) => zf(e)
let mo
const on = () =>
  mo ||
  (mo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : ve())
function go(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\//g, '&#x2F;')
    .replace(/=/g, '&#x3D;')
}
function vo(e) {
  return e
    .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
function Yf(e) {
  return (
    (e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (s, r, i) => `${r}="${vo(i)}"`)),
    (e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (s, r, i) => `${r}='${vo(i)}'`)),
    /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) &&
      (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, '$1&#111;n$3')),
    [
      /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
      /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi,
    ].forEach((s) => {
      e = e.replace(s, '$1javascript&#58;')
    }),
    e
  )
}
const qf = Object.prototype.hasOwnProperty
function dt(e, t) {
  return qf.call(e, t)
}
const Ce = Array.isArray,
  Se = (e) => typeof e == 'function',
  z = (e) => typeof e == 'string',
  ae = (e) => typeof e == 'boolean',
  ue = (e) => e !== null && typeof e == 'object',
  Kf = (e) => ue(e) && Se(e.then) && Se(e.catch),
  Ea = Object.prototype.toString,
  wi = (e) => Ea.call(e),
  ie = (e) => wi(e) === '[object Object]',
  Xf = (e) =>
    e == null ? '' : Ce(e) || (ie(e) && e.toString === Ea) ? JSON.stringify(e, null, 2) : String(e)
function Si(e, t = '') {
  return e.reduce((n, s, r) => (r === 0 ? n + s : n + t + s), '')
}
const fs = (e) => !ue(e) || Ce(e)
function ws(e, t) {
  if (fs(e) || fs(t)) throw new Error('Invalid value')
  const n = [{ src: e, des: t }]
  for (; n.length; ) {
    const { src: s, des: r } = n.pop()
    Object.keys(s).forEach((i) => {
      i !== '__proto__' &&
        (ue(s[i]) && !ue(r[i]) && (r[i] = Array.isArray(s[i]) ? [] : ve()),
        fs(r[i]) || fs(s[i]) ? (r[i] = s[i]) : n.push({ src: s[i], des: r[i] }))
    })
  }
}
/*!
 * message-compiler v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function Jf(e, t, n) {
  return { line: e, column: t, offset: n }
}
function Dr(e, t, n) {
  return { start: e, end: t }
}
const me = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
  },
  Qf = 17
function Ys(e, t, n = {}) {
  const { domain: s, messages: r, args: i } = n,
    o = e,
    l = new SyntaxError(String(o))
  return ((l.code = e), t && (l.location = t), (l.domain = s), l)
}
function Zf(e) {
  throw e
}
const It = ' ',
  ed = '\r',
  ze = `
`,
  td = '\u2028',
  nd = '\u2029'
function sd(e) {
  const t = e
  let n = 0,
    s = 1,
    r = 1,
    i = 0
  const o = (k) => t[k] === ed && t[k + 1] === ze,
    l = (k) => t[k] === ze,
    a = (k) => t[k] === nd,
    c = (k) => t[k] === td,
    u = (k) => o(k) || l(k) || a(k) || c(k),
    f = () => n,
    d = () => s,
    p = () => r,
    v = () => i,
    S = (k) => (o(k) || a(k) || c(k) ? ze : t[k]),
    P = () => S(n),
    m = () => S(n + i)
  function h() {
    return ((i = 0), u(n) && (s++, (r = 0)), o(n) && n++, n++, r++, t[n])
  }
  function g() {
    return (o(n + i) && i++, i++, t[n + i])
  }
  function _() {
    ;((n = 0), (s = 1), (r = 1), (i = 0))
  }
  function T(k = 0) {
    i = k
  }
  function O() {
    const k = n + i
    for (; k !== n; ) h()
    i = 0
  }
  return {
    index: f,
    line: d,
    column: p,
    peekOffset: v,
    charAt: S,
    currentChar: P,
    currentPeek: m,
    next: h,
    peek: g,
    reset: _,
    resetPeek: T,
    skipToPeek: O,
  }
}
const Bt = void 0,
  rd = '.',
  bo = "'",
  id = 'tokenizer'
function od(e, t = {}) {
  const n = t.location !== !1,
    s = sd(e),
    r = () => s.index(),
    i = () => Jf(s.line(), s.column(), s.index()),
    o = i(),
    l = r(),
    a = {
      currentType: 13,
      offset: l,
      startLoc: o,
      endLoc: o,
      lastType: 13,
      lastOffset: l,
      lastStartLoc: o,
      lastEndLoc: o,
      braceNest: 0,
      inLinked: !1,
      text: '',
    },
    c = () => a,
    { onError: u } = t
  function f(b, y, C, ...L) {
    const W = c()
    if (((y.column += C), (y.offset += C), u)) {
      const $ = n ? Dr(W.startLoc, y) : null,
        x = Ys(b, $, { domain: id, args: L })
      u(x)
    }
  }
  function d(b, y, C) {
    ;((b.endLoc = i()), (b.currentType = y))
    const L = { type: y }
    return (n && (L.loc = Dr(b.startLoc, b.endLoc)), C != null && (L.value = C), L)
  }
  const p = (b) => d(b, 13)
  function v(b, y) {
    return b.currentChar() === y ? (b.next(), y) : (f(me.EXPECTED_TOKEN, i(), 0, y), '')
  }
  function S(b) {
    let y = ''
    for (; b.currentPeek() === It || b.currentPeek() === ze; ) ((y += b.currentPeek()), b.peek())
    return y
  }
  function P(b) {
    const y = S(b)
    return (b.skipToPeek(), y)
  }
  function m(b) {
    if (b === Bt) return !1
    const y = b.charCodeAt(0)
    return (y >= 97 && y <= 122) || (y >= 65 && y <= 90) || y === 95
  }
  function h(b) {
    if (b === Bt) return !1
    const y = b.charCodeAt(0)
    return y >= 48 && y <= 57
  }
  function g(b, y) {
    const { currentType: C } = y
    if (C !== 2) return !1
    S(b)
    const L = m(b.currentPeek())
    return (b.resetPeek(), L)
  }
  function _(b, y) {
    const { currentType: C } = y
    if (C !== 2) return !1
    S(b)
    const L = b.currentPeek() === '-' ? b.peek() : b.currentPeek(),
      W = h(L)
    return (b.resetPeek(), W)
  }
  function T(b, y) {
    const { currentType: C } = y
    if (C !== 2) return !1
    S(b)
    const L = b.currentPeek() === bo
    return (b.resetPeek(), L)
  }
  function O(b, y) {
    const { currentType: C } = y
    if (C !== 7) return !1
    S(b)
    const L = b.currentPeek() === '.'
    return (b.resetPeek(), L)
  }
  function k(b, y) {
    const { currentType: C } = y
    if (C !== 8) return !1
    S(b)
    const L = m(b.currentPeek())
    return (b.resetPeek(), L)
  }
  function j(b, y) {
    const { currentType: C } = y
    if (!(C === 7 || C === 11)) return !1
    S(b)
    const L = b.currentPeek() === ':'
    return (b.resetPeek(), L)
  }
  function M(b, y) {
    const { currentType: C } = y
    if (C !== 9) return !1
    const L = () => {
        const $ = b.currentPeek()
        return $ === '{'
          ? m(b.peek())
          : $ === '@' || $ === '|' || $ === ':' || $ === '.' || $ === It || !$
            ? !1
            : $ === ze
              ? (b.peek(), L())
              : V(b, !1)
      },
      W = L()
    return (b.resetPeek(), W)
  }
  function B(b) {
    S(b)
    const y = b.currentPeek() === '|'
    return (b.resetPeek(), y)
  }
  function V(b, y = !0) {
    const C = (W = !1, $ = '') => {
        const x = b.currentPeek()
        return x === '{' || x === '@' || !x
          ? W
          : x === '|'
            ? !($ === It || $ === ze)
            : x === It
              ? (b.peek(), C(!0, It))
              : x === ze
                ? (b.peek(), C(!0, ze))
                : !0
      },
      L = C()
    return (y && b.resetPeek(), L)
  }
  function G(b, y) {
    const C = b.currentChar()
    return C === Bt ? Bt : y(C) ? (b.next(), C) : null
  }
  function J(b) {
    const y = b.charCodeAt(0)
    return (
      (y >= 97 && y <= 122) || (y >= 65 && y <= 90) || (y >= 48 && y <= 57) || y === 95 || y === 36
    )
  }
  function oe(b) {
    return G(b, J)
  }
  function le(b) {
    const y = b.charCodeAt(0)
    return (
      (y >= 97 && y <= 122) ||
      (y >= 65 && y <= 90) ||
      (y >= 48 && y <= 57) ||
      y === 95 ||
      y === 36 ||
      y === 45
    )
  }
  function Y(b) {
    return G(b, le)
  }
  function Q(b) {
    const y = b.charCodeAt(0)
    return y >= 48 && y <= 57
  }
  function Z(b) {
    return G(b, Q)
  }
  function he(b) {
    const y = b.charCodeAt(0)
    return (y >= 48 && y <= 57) || (y >= 65 && y <= 70) || (y >= 97 && y <= 102)
  }
  function Be(b) {
    return G(b, he)
  }
  function De(b) {
    let y = '',
      C = ''
    for (; (y = Z(b)); ) C += y
    return C
  }
  function ke(b) {
    let y = ''
    for (;;) {
      const C = b.currentChar()
      if (C === '{' || C === '}' || C === '@' || C === '|' || !C) break
      if (C === It || C === ze)
        if (V(b)) ((y += C), b.next())
        else {
          if (B(b)) break
          ;((y += C), b.next())
        }
      else ((y += C), b.next())
    }
    return y
  }
  function mt(b) {
    P(b)
    let y = '',
      C = ''
    for (; (y = Y(b)); ) C += y
    return (b.currentChar() === Bt && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0), C)
  }
  function gt(b) {
    P(b)
    let y = ''
    return (
      b.currentChar() === '-' ? (b.next(), (y += `-${De(b)}`)) : (y += De(b)),
      b.currentChar() === Bt && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
      y
    )
  }
  function en(b) {
    return b !== bo && b !== ze
  }
  function je(b) {
    ;(P(b), v(b, "'"))
    let y = '',
      C = ''
    for (; (y = G(b, en)); ) y === '\\' ? (C += N(b)) : (C += y)
    const L = b.currentChar()
    return L === ze || L === Bt
      ? (f(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        L === ze && (b.next(), v(b, "'")),
        C)
      : (v(b, "'"), C)
  }
  function N(b) {
    const y = b.currentChar()
    switch (y) {
      case '\\':
      case "'":
        return (b.next(), `\\${y}`)
      case 'u':
        return U(b, y, 4)
      case 'U':
        return U(b, y, 6)
      default:
        return (f(me.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, y), '')
    }
  }
  function U(b, y, C) {
    v(b, y)
    let L = ''
    for (let W = 0; W < C; W++) {
      const $ = Be(b)
      if (!$) {
        f(me.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${y}${L}${b.currentChar()}`)
        break
      }
      L += $
    }
    return `\\${y}${L}`
  }
  function H(b) {
    return b !== '{' && b !== '}' && b !== It && b !== ze
  }
  function X(b) {
    P(b)
    let y = '',
      C = ''
    for (; (y = G(b, H)); ) C += y
    return C
  }
  function ce(b) {
    let y = '',
      C = ''
    for (; (y = oe(b)); ) C += y
    return C
  }
  function w(b) {
    const y = (C) => {
      const L = b.currentChar()
      return L === '{' || L === '@' || L === '|' || L === '(' || L === ')' || !L || L === It
        ? C
        : ((C += L), b.next(), y(C))
    }
    return y('')
  }
  function E(b) {
    P(b)
    const y = v(b, '|')
    return (P(b), y)
  }
  function I(b, y) {
    let C = null
    switch (b.currentChar()) {
      case '{':
        return (
          y.braceNest >= 1 && f(me.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
          b.next(),
          (C = d(y, 2, '{')),
          P(b),
          y.braceNest++,
          C
        )
      case '}':
        return (
          y.braceNest > 0 && y.currentType === 2 && f(me.EMPTY_PLACEHOLDER, i(), 0),
          b.next(),
          (C = d(y, 3, '}')),
          y.braceNest--,
          y.braceNest > 0 && P(b),
          y.inLinked && y.braceNest === 0 && (y.inLinked = !1),
          C
        )
      case '@':
        return (
          y.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
          (C = R(b, y) || p(y)),
          (y.braceNest = 0),
          C
        )
      default: {
        let W = !0,
          $ = !0,
          x = !0
        if (B(b))
          return (
            y.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
            (C = d(y, 1, E(b))),
            (y.braceNest = 0),
            (y.inLinked = !1),
            C
          )
        if (y.braceNest > 0 && (y.currentType === 4 || y.currentType === 5 || y.currentType === 6))
          return (f(me.UNTERMINATED_CLOSING_BRACE, i(), 0), (y.braceNest = 0), F(b, y))
        if ((W = g(b, y))) return ((C = d(y, 4, mt(b))), P(b), C)
        if (($ = _(b, y))) return ((C = d(y, 5, gt(b))), P(b), C)
        if ((x = T(b, y))) return ((C = d(y, 6, je(b))), P(b), C)
        if (!W && !$ && !x)
          return (
            (C = d(y, 12, X(b))),
            f(me.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, C.value),
            P(b),
            C
          )
        break
      }
    }
    return C
  }
  function R(b, y) {
    const { currentType: C } = y
    let L = null
    const W = b.currentChar()
    switch (
      ((C === 7 || C === 8 || C === 11 || C === 9) &&
        (W === ze || W === It) &&
        f(me.INVALID_LINKED_FORMAT, i(), 0),
      W)
    ) {
      case '@':
        return (b.next(), (L = d(y, 7, '@')), (y.inLinked = !0), L)
      case '.':
        return (P(b), b.next(), d(y, 8, '.'))
      case ':':
        return (P(b), b.next(), d(y, 9, ':'))
      default:
        return B(b)
          ? ((L = d(y, 1, E(b))), (y.braceNest = 0), (y.inLinked = !1), L)
          : O(b, y) || j(b, y)
            ? (P(b), R(b, y))
            : k(b, y)
              ? (P(b), d(y, 11, ce(b)))
              : M(b, y)
                ? (P(b), W === '{' ? I(b, y) || L : d(y, 10, w(b)))
                : (C === 7 && f(me.INVALID_LINKED_FORMAT, i(), 0),
                  (y.braceNest = 0),
                  (y.inLinked = !1),
                  F(b, y))
    }
  }
  function F(b, y) {
    let C = { type: 13 }
    if (y.braceNest > 0) return I(b, y) || p(y)
    if (y.inLinked) return R(b, y) || p(y)
    switch (b.currentChar()) {
      case '{':
        return I(b, y) || p(y)
      case '}':
        return (f(me.UNBALANCED_CLOSING_BRACE, i(), 0), b.next(), d(y, 3, '}'))
      case '@':
        return R(b, y) || p(y)
      default: {
        if (B(b)) return ((C = d(y, 1, E(b))), (y.braceNest = 0), (y.inLinked = !1), C)
        if (V(b)) return d(y, 0, ke(b))
        break
      }
    }
    return C
  }
  function D() {
    const { currentType: b, offset: y, startLoc: C, endLoc: L } = a
    return (
      (a.lastType = b),
      (a.lastOffset = y),
      (a.lastStartLoc = C),
      (a.lastEndLoc = L),
      (a.offset = r()),
      (a.startLoc = i()),
      s.currentChar() === Bt ? d(a, 13) : F(s, a)
    )
  }
  return { nextToken: D, currentOffset: r, currentPosition: i, context: c }
}
const ld = 'parser',
  ad = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g
function cd(e, t, n) {
  switch (e) {
    case '\\\\':
      return '\\'
    case "\\'":
      return "'"
    default: {
      const s = parseInt(t || n, 16)
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : '�'
    }
  }
}
function ud(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e
  function s(m, h, g, _, ...T) {
    const O = m.currentPosition()
    if (((O.offset += _), (O.column += _), n)) {
      const k = t ? Dr(g, O) : null,
        j = Ys(h, k, { domain: ld, args: T })
      n(j)
    }
  }
  function r(m, h, g) {
    const _ = { type: m }
    return (t && ((_.start = h), (_.end = h), (_.loc = { start: g, end: g })), _)
  }
  function i(m, h, g, _) {
    t && ((m.end = h), m.loc && (m.loc.end = g))
  }
  function o(m, h) {
    const g = m.context(),
      _ = r(3, g.offset, g.startLoc)
    return ((_.value = h), i(_, m.currentOffset(), m.currentPosition()), _)
  }
  function l(m, h) {
    const g = m.context(),
      { lastOffset: _, lastStartLoc: T } = g,
      O = r(5, _, T)
    return (
      (O.index = parseInt(h, 10)),
      m.nextToken(),
      i(O, m.currentOffset(), m.currentPosition()),
      O
    )
  }
  function a(m, h) {
    const g = m.context(),
      { lastOffset: _, lastStartLoc: T } = g,
      O = r(4, _, T)
    return ((O.key = h), m.nextToken(), i(O, m.currentOffset(), m.currentPosition()), O)
  }
  function c(m, h) {
    const g = m.context(),
      { lastOffset: _, lastStartLoc: T } = g,
      O = r(9, _, T)
    return (
      (O.value = h.replace(ad, cd)),
      m.nextToken(),
      i(O, m.currentOffset(), m.currentPosition()),
      O
    )
  }
  function u(m) {
    const h = m.nextToken(),
      g = m.context(),
      { lastOffset: _, lastStartLoc: T } = g,
      O = r(8, _, T)
    return h.type !== 11
      ? (s(m, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, g.lastStartLoc, 0),
        (O.value = ''),
        i(O, _, T),
        { nextConsumeToken: h, node: O })
      : (h.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, _t(h)),
        (O.value = h.value || ''),
        i(O, m.currentOffset(), m.currentPosition()),
        { node: O })
  }
  function f(m, h) {
    const g = m.context(),
      _ = r(7, g.offset, g.startLoc)
    return ((_.value = h), i(_, m.currentOffset(), m.currentPosition()), _)
  }
  function d(m) {
    const h = m.context(),
      g = r(6, h.offset, h.startLoc)
    let _ = m.nextToken()
    if (_.type === 8) {
      const T = u(m)
      ;((g.modifier = T.node), (_ = T.nextConsumeToken || m.nextToken()))
    }
    switch (
      (_.type !== 9 && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(_)),
      (_ = m.nextToken()),
      _.type === 2 && (_ = m.nextToken()),
      _.type)
    ) {
      case 10:
        ;(_.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(_)),
          (g.key = f(m, _.value || '')))
        break
      case 4:
        ;(_.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(_)),
          (g.key = a(m, _.value || '')))
        break
      case 5:
        ;(_.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(_)),
          (g.key = l(m, _.value || '')))
        break
      case 6:
        ;(_.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(_)),
          (g.key = c(m, _.value || '')))
        break
      default: {
        s(m, me.UNEXPECTED_EMPTY_LINKED_KEY, h.lastStartLoc, 0)
        const T = m.context(),
          O = r(7, T.offset, T.startLoc)
        return (
          (O.value = ''),
          i(O, T.offset, T.startLoc),
          (g.key = O),
          i(g, T.offset, T.startLoc),
          { nextConsumeToken: _, node: g }
        )
      }
    }
    return (i(g, m.currentOffset(), m.currentPosition()), { node: g })
  }
  function p(m) {
    const h = m.context(),
      g = h.currentType === 1 ? m.currentOffset() : h.offset,
      _ = h.currentType === 1 ? h.endLoc : h.startLoc,
      T = r(2, g, _)
    T.items = []
    let O = null
    do {
      const M = O || m.nextToken()
      switch (((O = null), M.type)) {
        case 0:
          ;(M.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(M)),
            T.items.push(o(m, M.value || '')))
          break
        case 5:
          ;(M.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(M)),
            T.items.push(l(m, M.value || '')))
          break
        case 4:
          ;(M.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(M)),
            T.items.push(a(m, M.value || '')))
          break
        case 6:
          ;(M.value == null && s(m, me.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, _t(M)),
            T.items.push(c(m, M.value || '')))
          break
        case 7: {
          const B = d(m)
          ;(T.items.push(B.node), (O = B.nextConsumeToken || null))
          break
        }
      }
    } while (h.currentType !== 13 && h.currentType !== 1)
    const k = h.currentType === 1 ? h.lastOffset : m.currentOffset(),
      j = h.currentType === 1 ? h.lastEndLoc : m.currentPosition()
    return (i(T, k, j), T)
  }
  function v(m, h, g, _) {
    const T = m.context()
    let O = _.items.length === 0
    const k = r(1, h, g)
    ;((k.cases = []), k.cases.push(_))
    do {
      const j = p(m)
      ;(O || (O = j.items.length === 0), k.cases.push(j))
    } while (T.currentType !== 13)
    return (
      O && s(m, me.MUST_HAVE_MESSAGES_IN_PLURAL, g, 0),
      i(k, m.currentOffset(), m.currentPosition()),
      k
    )
  }
  function S(m) {
    const h = m.context(),
      { offset: g, startLoc: _ } = h,
      T = p(m)
    return h.currentType === 13 ? T : v(m, g, _, T)
  }
  function P(m) {
    const h = od(m, Re({}, e)),
      g = h.context(),
      _ = r(0, g.offset, g.startLoc)
    return (
      t && _.loc && (_.loc.source = m),
      (_.body = S(h)),
      e.onCacheKey && (_.cacheKey = e.onCacheKey(m)),
      g.currentType !== 13 &&
        s(h, me.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, m[g.offset] || ''),
      i(_, h.currentOffset(), h.currentPosition()),
      _
    )
  }
  return { parse: P }
}
function _t(e) {
  if (e.type === 13) return 'EOF'
  const t = (e.value || '').replace(/\r?\n/gu, '\\n')
  return t.length > 10 ? t.slice(0, 9) + '…' : t
}
function fd(e, t = {}) {
  const n = { ast: e, helpers: new Set() }
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) }
}
function _o(e, t) {
  for (let n = 0; n < e.length; n++) Ei(e[n], t)
}
function Ei(e, t) {
  switch (e.type) {
    case 1:
      ;(_o(e.cases, t), t.helper('plural'))
      break
    case 2:
      _o(e.items, t)
      break
    case 6: {
      ;(Ei(e.key, t), t.helper('linked'), t.helper('type'))
      break
    }
    case 5:
      ;(t.helper('interpolate'), t.helper('list'))
      break
    case 4:
      ;(t.helper('interpolate'), t.helper('named'))
      break
  }
}
function dd(e, t = {}) {
  const n = fd(e)
  ;(n.helper('normalize'), e.body && Ei(e.body, n))
  const s = n.context()
  e.helpers = Array.from(s.helpers)
}
function pd(e) {
  const t = e.body
  return (t.type === 2 ? yo(t) : t.cases.forEach((n) => yo(n)), e)
}
function yo(e) {
  if (e.items.length === 1) {
    const t = e.items[0]
    ;(t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value)
  } else {
    const t = []
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n]
      if (!(s.type === 3 || s.type === 9) || s.value == null) break
      t.push(s.value)
    }
    if (t.length === e.items.length) {
      e.static = Si(t)
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n]
        ;(s.type === 3 || s.type === 9) && delete s.value
      }
    }
  }
}
function hn(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e
      ;(hn(t.body), (t.b = t.body), delete t.body)
      break
    }
    case 1: {
      const t = e,
        n = t.cases
      for (let s = 0; s < n.length; s++) hn(n[s])
      ;((t.c = n), delete t.cases)
      break
    }
    case 2: {
      const t = e,
        n = t.items
      for (let s = 0; s < n.length; s++) hn(n[s])
      ;((t.i = n), delete t.items, t.static && ((t.s = t.static), delete t.static))
      break
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e
      t.value && ((t.v = t.value), delete t.value)
      break
    }
    case 6: {
      const t = e
      ;(hn(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (hn(t.modifier), (t.m = t.modifier), delete t.modifier))
      break
    }
    case 5: {
      const t = e
      ;((t.i = t.index), delete t.index)
      break
    }
    case 4: {
      const t = e
      ;((t.k = t.key), delete t.key)
      break
    }
  }
  delete e.type
}
function hd(e, t) {
  const { filename: n, breakLineCode: s, needIndent: r } = t,
    i = t.location !== !1,
    o = {
      filename: n,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: s,
      needIndent: r,
      indentLevel: 0,
    }
  i && e.loc && (o.source = e.loc.source)
  const l = () => o
  function a(S, P) {
    o.code += S
  }
  function c(S, P = !0) {
    const m = P ? s : ''
    a(r ? m + '  '.repeat(S) : m)
  }
  function u(S = !0) {
    const P = ++o.indentLevel
    S && c(P)
  }
  function f(S = !0) {
    const P = --o.indentLevel
    S && c(P)
  }
  function d() {
    c(o.indentLevel)
  }
  return {
    context: l,
    push: a,
    indent: u,
    deindent: f,
    newline: d,
    helper: (S) => `_${S}`,
    needIndent: () => o.needIndent,
  }
}
function md(e, t) {
  const { helper: n } = e
  ;(e.push(`${n('linked')}(`),
    Cn(e, t.key),
    t.modifier
      ? (e.push(', '), Cn(e, t.modifier), e.push(', _type'))
      : e.push(', undefined, _type'),
    e.push(')'))
}
function gd(e, t) {
  const { helper: n, needIndent: s } = e
  ;(e.push(`${n('normalize')}([`), e.indent(s()))
  const r = t.items.length
  for (let i = 0; i < r && (Cn(e, t.items[i]), i !== r - 1); i++) e.push(', ')
  ;(e.deindent(s()), e.push('])'))
}
function vd(e, t) {
  const { helper: n, needIndent: s } = e
  if (t.cases.length > 1) {
    ;(e.push(`${n('plural')}([`), e.indent(s()))
    const r = t.cases.length
    for (let i = 0; i < r && (Cn(e, t.cases[i]), i !== r - 1); i++) e.push(', ')
    ;(e.deindent(s()), e.push('])'))
  }
}
function bd(e, t) {
  t.body ? Cn(e, t.body) : e.push('null')
}
function Cn(e, t) {
  const { helper: n } = e
  switch (t.type) {
    case 0:
      bd(e, t)
      break
    case 1:
      vd(e, t)
      break
    case 2:
      gd(e, t)
      break
    case 6:
      md(e, t)
      break
    case 8:
      e.push(JSON.stringify(t.value), t)
      break
    case 7:
      e.push(JSON.stringify(t.value), t)
      break
    case 5:
      e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t)
      break
    case 4:
      e.push(`${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`, t)
      break
    case 9:
      e.push(JSON.stringify(t.value), t)
      break
    case 3:
      e.push(JSON.stringify(t.value), t)
      break
  }
}
const _d = (e, t = {}) => {
  const n = z(t.mode) ? t.mode : 'normal',
    s = z(t.filename) ? t.filename : 'message.intl'
  t.sourceMap
  const r =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === 'arrow'
          ? ';'
          : `
`,
    i = t.needIndent ? t.needIndent : n !== 'arrow',
    o = e.helpers || [],
    l = hd(e, { filename: s, breakLineCode: r, needIndent: i })
  ;(l.push(n === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {'),
    l.indent(i),
    o.length > 0 &&
      (l.push(
        `const { ${Si(
          o.map((u) => `${u}: _${u}`),
          ', ',
        )} } = ctx`,
      ),
      l.newline()),
    l.push('return '),
    Cn(l, e),
    l.deindent(i),
    l.push('}'),
    delete e.helpers)
  const { code: a, map: c } = l.context()
  return { ast: e, code: a, map: c ? c.toJSON() : void 0 }
}
function yd(e, t = {}) {
  const n = Re({}, t),
    s = !!n.jit,
    r = !!n.minify,
    i = n.optimize == null ? !0 : n.optimize,
    l = ud(n).parse(e)
  return s ? (i && pd(l), r && hn(l), { ast: l, code: '' }) : (dd(l, n), _d(l, n))
}
/*!
 * core-base v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function wd() {
  ;(typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' && (on().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != 'boolean' &&
      (on().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1))
}
function xt(e) {
  return ue(e) && Ti(e) === 0 && (dt(e, 'b') || dt(e, 'body'))
}
const Ta = ['b', 'body']
function Sd(e) {
  return Jt(e, Ta)
}
const xa = ['c', 'cases']
function Ed(e) {
  return Jt(e, xa, [])
}
const Ca = ['s', 'static']
function Td(e) {
  return Jt(e, Ca)
}
const Pa = ['i', 'items']
function xd(e) {
  return Jt(e, Pa, [])
}
const Ia = ['t', 'type']
function Ti(e) {
  return Jt(e, Ia)
}
const ka = ['v', 'value']
function ds(e, t) {
  const n = Jt(e, ka)
  if (n != null) return n
  throw Xn(t)
}
const La = ['m', 'modifier']
function Cd(e) {
  return Jt(e, La)
}
const Oa = ['k', 'key']
function Pd(e) {
  const t = Jt(e, Oa)
  if (t) return t
  throw Xn(6)
}
function Jt(e, t, n) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s]
    if (dt(e, r) && e[r] != null) return e[r]
  }
  return n
}
const Aa = [...Ta, ...xa, ...Ca, ...Pa, ...Oa, ...La, ...ka, ...Ia]
function Xn(e) {
  return new Error(`unhandled node type: ${e}`)
}
function lr(e) {
  return (n) => Id(n, e)
}
function Id(e, t) {
  const n = Sd(t)
  if (n == null) throw Xn(0)
  if (Ti(n) === 1) {
    const i = Ed(n)
    return e.plural(i.reduce((o, l) => [...o, wo(e, l)], []))
  } else return wo(e, n)
}
function wo(e, t) {
  const n = Td(t)
  if (n != null) return e.type === 'text' ? n : e.normalize([n])
  {
    const s = xd(t).reduce((r, i) => [...r, Fr(e, i)], [])
    return e.normalize(s)
  }
}
function Fr(e, t) {
  const n = Ti(t)
  switch (n) {
    case 3:
      return ds(t, n)
    case 9:
      return ds(t, n)
    case 4: {
      const s = t
      if (dt(s, 'k') && s.k) return e.interpolate(e.named(s.k))
      if (dt(s, 'key') && s.key) return e.interpolate(e.named(s.key))
      throw Xn(n)
    }
    case 5: {
      const s = t
      if (dt(s, 'i') && Le(s.i)) return e.interpolate(e.list(s.i))
      if (dt(s, 'index') && Le(s.index)) return e.interpolate(e.list(s.index))
      throw Xn(n)
    }
    case 6: {
      const s = t,
        r = Cd(s),
        i = Pd(s)
      return e.linked(Fr(e, i), r ? Fr(e, r) : void 0, e.type)
    }
    case 7:
      return ds(t, n)
    case 8:
      return ds(t, n)
    default:
      throw new Error(`unhandled node on format message part: ${n}`)
  }
}
const kd = (e) => e
let ps = ve()
function Ld(e, t = {}) {
  let n = !1
  const s = t.onError || Zf
  return (
    (t.onError = (r) => {
      ;((n = !0), s(r))
    }),
    { ...yd(e, t), detectError: n }
  )
}
function Od(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && z(e)) {
    ae(t.warnHtmlMessage) && t.warnHtmlMessage
    const s = (t.onCacheKey || kd)(e),
      r = ps[s]
    if (r) return r
    const { ast: i, detectError: o } = Ld(e, { ...t, location: !1, jit: !0 }),
      l = lr(i)
    return o ? l : (ps[s] = l)
  } else {
    const n = e.cacheKey
    if (n) {
      const s = ps[n]
      return s || (ps[n] = lr(e))
    } else return lr(e)
  }
}
let Jn = null
function Ad(e) {
  Jn = e
}
function Md(e, t, n) {
  Jn && Jn.emit('i18n:init', { timestamp: Date.now(), i18n: e, version: t, meta: n })
}
const Rd = Nd('function:translate')
function Nd(e) {
  return (t) => Jn && Jn.emit(e, t)
}
const Rt = {
    INVALID_ARGUMENT: Qf,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  Dd = 24
function Nt(e) {
  return Ys(e, null, void 0)
}
function xi(e, t) {
  return t.locale != null ? So(t.locale) : So(e.locale)
}
let ar
function So(e) {
  if (z(e)) return e
  if (Se(e)) {
    if (e.resolvedOnce && ar != null) return ar
    if (e.constructor.name === 'Function') {
      const t = e()
      if (Kf(t)) throw Nt(Rt.NOT_SUPPORT_LOCALE_PROMISE_VALUE)
      return (ar = t)
    } else throw Nt(Rt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw Nt(Rt.NOT_SUPPORT_LOCALE_TYPE)
}
function Fd(e, t, n) {
  return [...new Set([n, ...(Ce(t) ? t : ue(t) ? Object.keys(t) : z(t) ? [t] : [n])])]
}
function Ma(e, t, n) {
  const s = z(n) ? n : Qn,
    r = e
  r.__localeChainCache || (r.__localeChainCache = new Map())
  let i = r.__localeChainCache.get(s)
  if (!i) {
    i = []
    let o = [n]
    for (; Ce(o); ) o = Eo(i, o, t)
    const l = Ce(t) || !ie(t) ? t : t.default ? t.default : null
    ;((o = z(l) ? [l] : l), Ce(o) && Eo(i, o, !1), r.__localeChainCache.set(s, i))
  }
  return i
}
function Eo(e, t, n) {
  let s = !0
  for (let r = 0; r < t.length && ae(s); r++) {
    const i = t[r]
    z(i) && (s = $d(e, t[r], n))
  }
  return s
}
function $d(e, t, n) {
  let s
  const r = t.split('-')
  do {
    const i = r.join('-')
    ;((s = Bd(e, i, n)), r.splice(-1, 1))
  } while (r.length && s === !0)
  return s
}
function Bd(e, t, n) {
  let s = !1
  if (!e.includes(t) && ((s = !0), t)) {
    s = t[t.length - 1] !== '!'
    const r = t.replace(/!/g, '')
    ;(e.push(r), (Ce(n) || ie(n)) && n[r] && (s = n[r]))
  }
  return s
}
const Qt = []
Qt[0] = { w: [0], i: [3, 0], '[': [4], o: [7] }
Qt[1] = { w: [1], '.': [2], '[': [4], o: [7] }
Qt[2] = { w: [2], i: [3, 0], 0: [3, 0] }
Qt[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], '.': [2, 1], '[': [4, 1], o: [7, 1] }
Qt[4] = { "'": [5, 0], '"': [6, 0], '[': [4, 2], ']': [1, 3], o: 8, l: [4, 0] }
Qt[5] = { "'": [4, 0], o: 8, l: [5, 0] }
Qt[6] = { '"': [4, 0], o: 8, l: [6, 0] }
const jd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/
function Vd(e) {
  return jd.test(e)
}
function Hd(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1)
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Wd(e) {
  if (e == null) return 'o'
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e
    case 95:
    case 36:
    case 45:
      return 'i'
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w'
  }
  return 'i'
}
function Ud(e) {
  const t = e.trim()
  return e.charAt(0) === '0' && isNaN(parseInt(e)) ? !1 : Vd(t) ? Hd(t) : '*' + t
}
function Gd(e) {
  const t = []
  let n = -1,
    s = 0,
    r = 0,
    i,
    o,
    l,
    a,
    c,
    u,
    f
  const d = []
  ;((d[0] = () => {
    o === void 0 ? (o = l) : (o += l)
  }),
    (d[1] = () => {
      o !== void 0 && (t.push(o), (o = void 0))
    }),
    (d[2] = () => {
      ;(d[0](), r++)
    }),
    (d[3] = () => {
      if (r > 0) (r--, (s = 4), d[0]())
      else {
        if (((r = 0), o === void 0 || ((o = Ud(o)), o === !1))) return !1
        d[1]()
      }
    }))
  function p() {
    const v = e[n + 1]
    if ((s === 5 && v === "'") || (s === 6 && v === '"')) return (n++, (l = '\\' + v), d[0](), !0)
  }
  for (; s !== null; )
    if ((n++, (i = e[n]), !(i === '\\' && p()))) {
      if (
        ((a = Wd(i)),
        (f = Qt[s]),
        (c = f[a] || f.l || 8),
        c === 8 || ((s = c[0]), c[1] !== void 0 && ((u = d[c[1]]), u && ((l = i), u() === !1))))
      )
        return
      if (s === 7) return t
    }
}
const To = new Map()
function zd(e, t) {
  return ue(e) ? e[t] : null
}
function Yd(e, t) {
  if (!ue(e)) return null
  let n = To.get(t)
  if ((n || ((n = Gd(t)), n && To.set(t, n)), !n)) return null
  const s = n.length
  let r = e,
    i = 0
  for (; i < s; ) {
    const o = n[i]
    if (Aa.includes(o) && xt(r)) return null
    const l = r[o]
    if (l === void 0 || Se(r)) return null
    ;((r = l), i++)
  }
  return r
}
const qd = '11.1.11',
  qs = -1,
  Qn = 'en-US',
  xo = '',
  Co = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`
function Kd() {
  return {
    upper: (e, t) =>
      t === 'text' && z(e)
        ? e.toUpperCase()
        : t === 'vnode' && ue(e) && '__v_isVNode' in e
          ? e.children.toUpperCase()
          : e,
    lower: (e, t) =>
      t === 'text' && z(e)
        ? e.toLowerCase()
        : t === 'vnode' && ue(e) && '__v_isVNode' in e
          ? e.children.toLowerCase()
          : e,
    capitalize: (e, t) =>
      t === 'text' && z(e)
        ? Co(e)
        : t === 'vnode' && ue(e) && '__v_isVNode' in e
          ? Co(e.children)
          : e,
  }
}
let Ra
function Xd(e) {
  Ra = e
}
let Na
function Jd(e) {
  Na = e
}
let Da
function Qd(e) {
  Da = e
}
let Fa = null
const Zd = (e) => {
    Fa = e
  },
  ep = () => Fa
let $a = null
const Po = (e) => {
    $a = e
  },
  tp = () => $a
let Io = 0
function np(e = {}) {
  const t = Se(e.onWarn) ? e.onWarn : Hf,
    n = z(e.version) ? e.version : qd,
    s = z(e.locale) || Se(e.locale) ? e.locale : Qn,
    r = Se(s) ? Qn : s,
    i =
      Ce(e.fallbackLocale) || ie(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1
        ? e.fallbackLocale
        : r,
    o = ie(e.messages) ? e.messages : cr(r),
    l = ie(e.datetimeFormats) ? e.datetimeFormats : cr(r),
    a = ie(e.numberFormats) ? e.numberFormats : cr(r),
    c = Re(ve(), e.modifiers, Kd()),
    u = e.pluralRules || ve(),
    f = Se(e.missing) ? e.missing : null,
    d = ae(e.missingWarn) || xn(e.missingWarn) ? e.missingWarn : !0,
    p = ae(e.fallbackWarn) || xn(e.fallbackWarn) ? e.fallbackWarn : !0,
    v = !!e.fallbackFormat,
    S = !!e.unresolving,
    P = Se(e.postTranslation) ? e.postTranslation : null,
    m = ie(e.processor) ? e.processor : null,
    h = ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    g = !!e.escapeParameter,
    _ = Se(e.messageCompiler) ? e.messageCompiler : Ra,
    T = Se(e.messageResolver) ? e.messageResolver : Na || zd,
    O = Se(e.localeFallbacker) ? e.localeFallbacker : Da || Fd,
    k = ue(e.fallbackContext) ? e.fallbackContext : void 0,
    j = e,
    M = ue(j.__datetimeFormatters) ? j.__datetimeFormatters : new Map(),
    B = ue(j.__numberFormatters) ? j.__numberFormatters : new Map(),
    V = ue(j.__meta) ? j.__meta : {}
  Io++
  const G = {
    version: n,
    cid: Io,
    locale: s,
    fallbackLocale: i,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: d,
    fallbackWarn: p,
    fallbackFormat: v,
    unresolving: S,
    postTranslation: P,
    processor: m,
    warnHtmlMessage: h,
    escapeParameter: g,
    messageCompiler: _,
    messageResolver: T,
    localeFallbacker: O,
    fallbackContext: k,
    onWarn: t,
    __meta: V,
  }
  return (
    (G.datetimeFormats = l),
    (G.numberFormats = a),
    (G.__datetimeFormatters = M),
    (G.__numberFormatters = B),
    __INTLIFY_PROD_DEVTOOLS__ && Md(G, n, V),
    G
  )
}
const cr = (e) => ({ [e]: ve() })
function Ci(e, t, n, s, r) {
  const { missing: i, onWarn: o } = e
  if (i !== null) {
    const l = i(e, n, t, r)
    return z(l) ? l : t
  } else return t
}
function An(e, t, n) {
  const s = e
  ;((s.__localeChainCache = new Map()), e.localeFallbacker(e, n, t))
}
function sp(e, t) {
  return e === t ? !1 : e.split('-')[0] === t.split('-')[0]
}
function rp(e, t) {
  const n = t.indexOf(e)
  if (n === -1) return !1
  for (let s = n + 1; s < t.length; s++) if (sp(e, t[s])) return !0
  return !1
}
function ko(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: s,
      fallbackLocale: r,
      onWarn: i,
      localeFallbacker: o,
    } = e,
    { __datetimeFormatters: l } = e,
    [a, c, u, f] = $r(...t),
    d = ae(u.missingWarn) ? u.missingWarn : e.missingWarn
  ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn
  const p = !!u.part,
    v = xi(e, u),
    S = o(e, r, v)
  if (!z(a) || a === '') return new Intl.DateTimeFormat(v, f).format(c)
  let P = {},
    m,
    h = null
  const g = 'datetime format'
  for (let O = 0; O < S.length && ((m = S[O]), (P = n[m] || {}), (h = P[a]), !ie(h)); O++)
    Ci(e, a, m, d, g)
  if (!ie(h) || !z(m)) return s ? qs : a
  let _ = `${m}__${a}`
  zs(f) || (_ = `${_}__${JSON.stringify(f)}`)
  let T = l.get(_)
  return (
    T || ((T = new Intl.DateTimeFormat(m, Re({}, h, f))), l.set(_, T)),
    p ? T.formatToParts(c) : T.format(c)
  )
}
const Ba = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
]
function $r(...e) {
  const [t, n, s, r] = e,
    i = ve()
  let o = ve(),
    l
  if (z(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/)
    if (!a) throw Nt(Rt.INVALID_ISO_DATE_ARGUMENT)
    const c = a[3]
      ? a[3].trim().startsWith('T')
        ? `${a[1].trim()}${a[3].trim()}`
        : `${a[1].trim()}T${a[3].trim()}`
      : a[1].trim()
    l = new Date(c)
    try {
      l.toISOString()
    } catch {
      throw Nt(Rt.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (Gf(t)) {
    if (isNaN(t.getTime())) throw Nt(Rt.INVALID_DATE_ARGUMENT)
    l = t
  } else if (Le(t)) l = t
  else throw Nt(Rt.INVALID_ARGUMENT)
  return (
    z(n)
      ? (i.key = n)
      : ie(n) &&
        Object.keys(n).forEach((a) => {
          Ba.includes(a) ? (o[a] = n[a]) : (i[a] = n[a])
        }),
    z(s) ? (i.locale = s) : ie(s) && (o = s),
    ie(r) && (o = r),
    [i.key || '', l, i, o]
  )
}
function Lo(e, t, n) {
  const s = e
  for (const r in n) {
    const i = `${t}__${r}`
    s.__datetimeFormatters.has(i) && s.__datetimeFormatters.delete(i)
  }
}
function Oo(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: r, onWarn: i, localeFallbacker: o } = e,
    { __numberFormatters: l } = e,
    [a, c, u, f] = Br(...t),
    d = ae(u.missingWarn) ? u.missingWarn : e.missingWarn
  ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn
  const p = !!u.part,
    v = xi(e, u),
    S = o(e, r, v)
  if (!z(a) || a === '') return new Intl.NumberFormat(v, f).format(c)
  let P = {},
    m,
    h = null
  const g = 'number format'
  for (let O = 0; O < S.length && ((m = S[O]), (P = n[m] || {}), (h = P[a]), !ie(h)); O++)
    Ci(e, a, m, d, g)
  if (!ie(h) || !z(m)) return s ? qs : a
  let _ = `${m}__${a}`
  zs(f) || (_ = `${_}__${JSON.stringify(f)}`)
  let T = l.get(_)
  return (
    T || ((T = new Intl.NumberFormat(m, Re({}, h, f))), l.set(_, T)),
    p ? T.formatToParts(c) : T.format(c)
  )
}
const ja = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
]
function Br(...e) {
  const [t, n, s, r] = e,
    i = ve()
  let o = ve()
  if (!Le(t)) throw Nt(Rt.INVALID_ARGUMENT)
  const l = t
  return (
    z(n)
      ? (i.key = n)
      : ie(n) &&
        Object.keys(n).forEach((a) => {
          ja.includes(a) ? (o[a] = n[a]) : (i[a] = n[a])
        }),
    z(s) ? (i.locale = s) : ie(s) && (o = s),
    ie(r) && (o = r),
    [i.key || '', l, i, o]
  )
}
function Ao(e, t, n) {
  const s = e
  for (const r in n) {
    const i = `${t}__${r}`
    s.__numberFormatters.has(i) && s.__numberFormatters.delete(i)
  }
}
const ip = (e) => e,
  op = (e) => '',
  lp = 'text',
  ap = (e) => (e.length === 0 ? '' : Si(e)),
  cp = Xf
function Mo(e, t) {
  return ((e = Math.abs(e)), t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0)
}
function up(e) {
  const t = Le(e.pluralIndex) ? e.pluralIndex : -1
  return e.named && (Le(e.named.count) || Le(e.named.n))
    ? Le(e.named.count)
      ? e.named.count
      : Le(e.named.n)
        ? e.named.n
        : t
    : t
}
function fp(e, t) {
  ;(t.count || (t.count = e), t.n || (t.n = e))
}
function dp(e = {}) {
  const t = e.locale,
    n = up(e),
    s = ue(e.pluralRules) && z(t) && Se(e.pluralRules[t]) ? e.pluralRules[t] : Mo,
    r = ue(e.pluralRules) && z(t) && Se(e.pluralRules[t]) ? Mo : void 0,
    i = (m) => m[s(n, m.length, r)],
    o = e.list || [],
    l = (m) => o[m],
    a = e.named || ve()
  Le(e.pluralIndex) && fp(n, a)
  const c = (m) => a[m]
  function u(m, h) {
    const g = Se(e.messages) ? e.messages(m, !!h) : ue(e.messages) ? e.messages[m] : !1
    return g || (e.parent ? e.parent.message(m) : op)
  }
  const f = (m) => (e.modifiers ? e.modifiers[m] : ip),
    d = ie(e.processor) && Se(e.processor.normalize) ? e.processor.normalize : ap,
    p = ie(e.processor) && Se(e.processor.interpolate) ? e.processor.interpolate : cp,
    v = ie(e.processor) && z(e.processor.type) ? e.processor.type : lp,
    P = {
      list: l,
      named: c,
      plural: i,
      linked: (m, ...h) => {
        const [g, _] = h
        let T = 'text',
          O = ''
        h.length === 1
          ? ue(g)
            ? ((O = g.modifier || O), (T = g.type || T))
            : z(g) && (O = g || O)
          : h.length === 2 && (z(g) && (O = g || O), z(_) && (T = _ || T))
        const k = u(m, !0)(P),
          j = T === 'vnode' && Ce(k) && O ? k[0] : k
        return O ? f(O)(j, T) : j
      },
      message: u,
      type: v,
      interpolate: p,
      normalize: d,
      values: Re(ve(), o, a),
    }
  return P
}
const Ro = () => '',
  ot = (e) => Se(e)
function No(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: s,
      unresolving: r,
      messageCompiler: i,
      fallbackLocale: o,
      messages: l,
    } = e,
    [a, c] = jr(...t),
    u = ae(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    d = ae(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    p = !!c.resolvedMessage,
    v =
      z(c.default) || ae(c.default)
        ? ae(c.default)
          ? i
            ? a
            : () => a
          : c.default
        : n
          ? i
            ? a
            : () => a
          : null,
    S = n || (v != null && (z(v) || Se(v))),
    P = xi(e, c)
  d && pp(c)
  let [m, h, g] = p ? [a, P, l[P] || ve()] : Va(e, a, P, o, f, u),
    _ = m,
    T = a
  if (
    (!p && !(z(_) || xt(_) || ot(_)) && S && ((_ = v), (T = _)),
    !p && (!(z(_) || xt(_) || ot(_)) || !z(h)))
  )
    return r ? qs : a
  let O = !1
  const k = () => {
      O = !0
    },
    j = ot(_) ? _ : Ha(e, a, h, _, T, k)
  if (O) return _
  const M = gp(e, h, g, c),
    B = dp(M),
    V = hp(e, j, B)
  let G = s ? s(V, a) : V
  if ((d && z(G) && (G = Yf(G)), __INTLIFY_PROD_DEVTOOLS__)) {
    const J = {
      timestamp: Date.now(),
      key: z(a) ? a : ot(_) ? _.key : '',
      locale: h || (ot(_) ? _.locale : ''),
      format: z(_) ? _ : ot(_) ? _.source : '',
      message: G,
    }
    ;((J.meta = Re({}, e.__meta, ep() || {})), Rd(J))
  }
  return G
}
function pp(e) {
  Ce(e.list)
    ? (e.list = e.list.map((t) => (z(t) ? go(t) : t)))
    : ue(e.named) &&
      Object.keys(e.named).forEach((t) => {
        z(e.named[t]) && (e.named[t] = go(e.named[t]))
      })
}
function Va(e, t, n, s, r, i) {
  const { messages: o, onWarn: l, messageResolver: a, localeFallbacker: c } = e,
    u = c(e, s, n)
  let f = ve(),
    d,
    p = null
  const v = 'translate'
  for (
    let S = 0;
    S < u.length &&
    ((d = u[S]),
    (f = o[d] || ve()),
    (p = a(f, t)) === null && (p = f[t]),
    !(z(p) || xt(p) || ot(p)));
    S++
  )
    if (!rp(d, u)) {
      const P = Ci(e, t, d, i, v)
      P !== t && (p = P)
    }
  return [p, d, f]
}
function Ha(e, t, n, s, r, i) {
  const { messageCompiler: o, warnHtmlMessage: l } = e
  if (ot(s)) {
    const c = s
    return ((c.locale = c.locale || n), (c.key = c.key || t), c)
  }
  if (o == null) {
    const c = () => s
    return ((c.locale = n), (c.key = t), c)
  }
  const a = o(s, mp(e, n, r, s, l, i))
  return ((a.locale = n), (a.key = t), (a.source = s), a)
}
function hp(e, t, n) {
  return t(n)
}
function jr(...e) {
  const [t, n, s] = e,
    r = ve()
  if (!z(t) && !Le(t) && !ot(t) && !xt(t)) throw Nt(Rt.INVALID_ARGUMENT)
  const i = Le(t) ? String(t) : (ot(t), t)
  return (
    Le(n)
      ? (r.plural = n)
      : z(n)
        ? (r.default = n)
        : ie(n) && !zs(n)
          ? (r.named = n)
          : Ce(n) && (r.list = n),
    Le(s) ? (r.plural = s) : z(s) ? (r.default = s) : ie(s) && Re(r, s),
    [i, r]
  )
}
function mp(e, t, n, s, r, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      throw (i && i(o), o)
    },
    onCacheKey: (o) => Wf(t, n, o),
  }
}
function gp(e, t, n, s) {
  const {
      modifiers: r,
      pluralRules: i,
      messageResolver: o,
      fallbackLocale: l,
      fallbackWarn: a,
      missingWarn: c,
      fallbackContext: u,
    } = e,
    d = {
      locale: t,
      modifiers: r,
      pluralRules: i,
      messages: (p, v) => {
        let S = o(n, p)
        if (S == null && (u || v)) {
          const [, , P] = Va(u || e, p, t, l, a, c)
          S = o(P, p)
        }
        if (z(S) || xt(S)) {
          let P = !1
          const h = Ha(e, p, t, S, p, () => {
            P = !0
          })
          return P ? Ro : h
        } else return ot(S) ? S : Ro
      },
    }
  return (
    e.processor && (d.processor = e.processor),
    s.list && (d.list = s.list),
    s.named && (d.named = s.named),
    Le(s.plural) && (d.pluralIndex = s.plural),
    d
  )
}
wd()
/*!
 * vue-i18n v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ const vp = '11.1.11'
function bp() {
  ;(typeof __VUE_I18N_FULL_INSTALL__ != 'boolean' && (on().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != 'boolean' && (on().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != 'boolean' &&
      (on().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' && (on().__INTLIFY_PROD_DEVTOOLS__ = !1))
}
const Je = {
  UNEXPECTED_RETURN_TYPE: Dd,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
}
function st(e, ...t) {
  return Ys(e, null, void 0)
}
const Vr = Xt('__translateVNode'),
  Hr = Xt('__datetimeParts'),
  Wr = Xt('__numberParts'),
  Wa = Xt('__setPluralRules'),
  Ua = Xt('__injectWithOption'),
  Ur = Xt('__dispose')
function Zn(e) {
  if (!ue(e) || xt(e)) return e
  for (const t in e)
    if (dt(e, t))
      if (!t.includes('.')) ue(e[t]) && Zn(e[t])
      else {
        const n = t.split('.'),
          s = n.length - 1
        let r = e,
          i = !1
        for (let o = 0; o < s; o++) {
          if (n[o] === '__proto__') throw new Error(`unsafe key: ${n[o]}`)
          if ((n[o] in r || (r[n[o]] = ve()), !ue(r[n[o]]))) {
            i = !0
            break
          }
          r = r[n[o]]
        }
        if (
          (i || (xt(r) ? Aa.includes(n[s]) || delete e[t] : ((r[n[s]] = e[t]), delete e[t])),
          !xt(r))
        ) {
          const o = r[n[s]]
          ue(o) && Zn(o)
        }
      }
  return e
}
function Pi(e, t) {
  const { messages: n, __i18n: s, messageResolver: r, flatJson: i } = t,
    o = ie(n) ? n : Ce(s) ? ve() : { [e]: ve() }
  if (
    (Ce(s) &&
      s.forEach((l) => {
        if ('locale' in l && 'resource' in l) {
          const { locale: a, resource: c } = l
          a ? ((o[a] = o[a] || ve()), ws(c, o[a])) : ws(c, o)
        } else z(l) && ws(JSON.parse(l), o)
      }),
    r == null && i)
  )
    for (const l in o) dt(o, l) && Zn(o[l])
  return o
}
function Ga(e) {
  return e.type
}
function za(e, t, n) {
  let s = ue(t.messages) ? t.messages : ve()
  '__i18nGlobal' in n && (s = Pi(e.locale.value, { messages: s, __i18n: n.__i18nGlobal }))
  const r = Object.keys(s)
  r.length &&
    r.forEach((i) => {
      e.mergeLocaleMessage(i, s[i])
    })
  {
    if (ue(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats)
      i.length &&
        i.forEach((o) => {
          e.mergeDateTimeFormat(o, t.datetimeFormats[o])
        })
    }
    if (ue(t.numberFormats)) {
      const i = Object.keys(t.numberFormats)
      i.length &&
        i.forEach((o) => {
          e.mergeNumberFormat(o, t.numberFormats[o])
        })
    }
  }
}
function Do(e) {
  return ge(rs, null, e, 0)
}
const Fo = '__INTLIFY_META__',
  $o = () => [],
  _p = () => !1
let Bo = 0
function jo(e) {
  return (t, n, s, r) => e(n, s, Tn() || void 0, r)
}
const yp = () => {
  const e = Tn()
  let t = null
  return e && (t = Ga(e)[Fo]) ? { [Fo]: t } : null
}
function Ii(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    s = t === void 0,
    r = e.flatJson,
    i = Ls ? xe : Hl
  let o = ae(e.inheritLocale) ? e.inheritLocale : !0
  const l = i(t && o ? t.locale.value : z(e.locale) ? e.locale : Qn),
    a = i(
      t && o
        ? t.fallbackLocale.value
        : z(e.fallbackLocale) ||
            Ce(e.fallbackLocale) ||
            ie(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : l.value,
    ),
    c = i(Pi(l.value, e)),
    u = i(ie(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }),
    f = i(ie(e.numberFormats) ? e.numberFormats : { [l.value]: {} })
  let d = t ? t.missingWarn : ae(e.missingWarn) || xn(e.missingWarn) ? e.missingWarn : !0,
    p = t ? t.fallbackWarn : ae(e.fallbackWarn) || xn(e.fallbackWarn) ? e.fallbackWarn : !0,
    v = t ? t.fallbackRoot : ae(e.fallbackRoot) ? e.fallbackRoot : !0,
    S = !!e.fallbackFormat,
    P = Se(e.missing) ? e.missing : null,
    m = Se(e.missing) ? jo(e.missing) : null,
    h = Se(e.postTranslation) ? e.postTranslation : null,
    g = t ? t.warnHtmlMessage : ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    _ = !!e.escapeParameter
  const T = t ? t.modifiers : ie(e.modifiers) ? e.modifiers : {}
  let O = e.pluralRules || (t && t.pluralRules),
    k
  ;((k = (() => {
    s && Po(null)
    const x = {
      version: vp,
      locale: l.value,
      fallbackLocale: a.value,
      messages: c.value,
      modifiers: T,
      pluralRules: O,
      missing: m === null ? void 0 : m,
      missingWarn: d,
      fallbackWarn: p,
      fallbackFormat: S,
      unresolving: !0,
      postTranslation: h === null ? void 0 : h,
      warnHtmlMessage: g,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: 'vue' },
    }
    ;((x.datetimeFormats = u.value),
      (x.numberFormats = f.value),
      (x.__datetimeFormatters = ie(k) ? k.__datetimeFormatters : void 0),
      (x.__numberFormatters = ie(k) ? k.__numberFormatters : void 0))
    const A = np(x)
    return (s && Po(A), A)
  })()),
    An(k, l.value, a.value))
  function M() {
    return [l.value, a.value, c.value, u.value, f.value]
  }
  const B = Ie({
      get: () => l.value,
      set: (x) => {
        ;((k.locale = x), (l.value = x))
      },
    }),
    V = Ie({
      get: () => a.value,
      set: (x) => {
        ;((k.fallbackLocale = x), (a.value = x), An(k, l.value, x))
      },
    }),
    G = Ie(() => c.value),
    J = Ie(() => u.value),
    oe = Ie(() => f.value)
  function le() {
    return Se(h) ? h : null
  }
  function Y(x) {
    ;((h = x), (k.postTranslation = x))
  }
  function Q() {
    return P
  }
  function Z(x) {
    ;(x !== null && (m = jo(x)), (P = x), (k.missing = m))
  }
  const he = (x, A, q, ee, re, Ae) => {
    M()
    let Pe
    try {
      ;(__INTLIFY_PROD_DEVTOOLS__, s || (k.fallbackContext = t ? tp() : void 0), (Pe = x(k)))
    } finally {
      ;(__INTLIFY_PROD_DEVTOOLS__, s || (k.fallbackContext = void 0))
    }
    if ((q !== 'translate exists' && Le(Pe) && Pe === qs) || (q === 'translate exists' && !Pe)) {
      const [it, ut] = A()
      return t && v ? ee(t) : re(it)
    } else {
      if (Ae(Pe)) return Pe
      throw st(Je.UNEXPECTED_RETURN_TYPE)
    }
  }
  function Be(...x) {
    return he(
      (A) => Reflect.apply(No, null, [A, ...x]),
      () => jr(...x),
      'translate',
      (A) => Reflect.apply(A.t, A, [...x]),
      (A) => A,
      (A) => z(A),
    )
  }
  function De(...x) {
    const [A, q, ee] = x
    if (ee && !ue(ee)) throw st(Je.INVALID_ARGUMENT)
    return Be(A, q, Re({ resolvedMessage: !0 }, ee || {}))
  }
  function ke(...x) {
    return he(
      (A) => Reflect.apply(ko, null, [A, ...x]),
      () => $r(...x),
      'datetime format',
      (A) => Reflect.apply(A.d, A, [...x]),
      () => xo,
      (A) => z(A) || Ce(A),
    )
  }
  function mt(...x) {
    return he(
      (A) => Reflect.apply(Oo, null, [A, ...x]),
      () => Br(...x),
      'number format',
      (A) => Reflect.apply(A.n, A, [...x]),
      () => xo,
      (A) => z(A) || Ce(A),
    )
  }
  function gt(x) {
    return x.map((A) => (z(A) || Le(A) || ae(A) ? Do(String(A)) : A))
  }
  const je = { normalize: gt, interpolate: (x) => x, type: 'vnode' }
  function N(...x) {
    return he(
      (A) => {
        let q
        const ee = A
        try {
          ;((ee.processor = je), (q = Reflect.apply(No, null, [ee, ...x])))
        } finally {
          ee.processor = null
        }
        return q
      },
      () => jr(...x),
      'translate',
      (A) => A[Vr](...x),
      (A) => [Do(A)],
      (A) => Ce(A),
    )
  }
  function U(...x) {
    return he(
      (A) => Reflect.apply(Oo, null, [A, ...x]),
      () => Br(...x),
      'number format',
      (A) => A[Wr](...x),
      $o,
      (A) => z(A) || Ce(A),
    )
  }
  function H(...x) {
    return he(
      (A) => Reflect.apply(ko, null, [A, ...x]),
      () => $r(...x),
      'datetime format',
      (A) => A[Hr](...x),
      $o,
      (A) => z(A) || Ce(A),
    )
  }
  function X(x) {
    ;((O = x), (k.pluralRules = O))
  }
  function ce(x, A) {
    return he(
      () => {
        if (!x) return !1
        const q = z(A) ? A : l.value,
          ee = I(q),
          re = k.messageResolver(ee, x)
        return xt(re) || ot(re) || z(re)
      },
      () => [x],
      'translate exists',
      (q) => Reflect.apply(q.te, q, [x, A]),
      _p,
      (q) => ae(q),
    )
  }
  function w(x) {
    let A = null
    const q = Ma(k, a.value, l.value)
    for (let ee = 0; ee < q.length; ee++) {
      const re = c.value[q[ee]] || {},
        Ae = k.messageResolver(re, x)
      if (Ae != null) {
        A = Ae
        break
      }
    }
    return A
  }
  function E(x) {
    const A = w(x)
    return A ?? (t ? t.tm(x) || {} : {})
  }
  function I(x) {
    return c.value[x] || {}
  }
  function R(x, A) {
    if (r) {
      const q = { [x]: A }
      for (const ee in q) dt(q, ee) && Zn(q[ee])
      A = q[x]
    }
    ;((c.value[x] = A), (k.messages = c.value))
  }
  function F(x, A) {
    c.value[x] = c.value[x] || {}
    const q = { [x]: A }
    if (r) for (const ee in q) dt(q, ee) && Zn(q[ee])
    ;((A = q[x]), ws(A, c.value[x]), (k.messages = c.value))
  }
  function D(x) {
    return u.value[x] || {}
  }
  function b(x, A) {
    ;((u.value[x] = A), (k.datetimeFormats = u.value), Lo(k, x, A))
  }
  function y(x, A) {
    ;((u.value[x] = Re(u.value[x] || {}, A)), (k.datetimeFormats = u.value), Lo(k, x, A))
  }
  function C(x) {
    return f.value[x] || {}
  }
  function L(x, A) {
    ;((f.value[x] = A), (k.numberFormats = f.value), Ao(k, x, A))
  }
  function W(x, A) {
    ;((f.value[x] = Re(f.value[x] || {}, A)), (k.numberFormats = f.value), Ao(k, x, A))
  }
  ;(Bo++,
    t &&
      Ls &&
      (Tt(t.locale, (x) => {
        o && ((l.value = x), (k.locale = x), An(k, l.value, a.value))
      }),
      Tt(t.fallbackLocale, (x) => {
        o && ((a.value = x), (k.fallbackLocale = x), An(k, l.value, a.value))
      })))
  const $ = {
    id: Bo,
    locale: B,
    fallbackLocale: V,
    get inheritLocale() {
      return o
    },
    set inheritLocale(x) {
      ;((o = x),
        x &&
          t &&
          ((l.value = t.locale.value), (a.value = t.fallbackLocale.value), An(k, l.value, a.value)))
    },
    get availableLocales() {
      return Object.keys(c.value).sort()
    },
    messages: G,
    get modifiers() {
      return T
    },
    get pluralRules() {
      return O || {}
    },
    get isGlobal() {
      return s
    },
    get missingWarn() {
      return d
    },
    set missingWarn(x) {
      ;((d = x), (k.missingWarn = d))
    },
    get fallbackWarn() {
      return p
    },
    set fallbackWarn(x) {
      ;((p = x), (k.fallbackWarn = p))
    },
    get fallbackRoot() {
      return v
    },
    set fallbackRoot(x) {
      v = x
    },
    get fallbackFormat() {
      return S
    },
    set fallbackFormat(x) {
      ;((S = x), (k.fallbackFormat = S))
    },
    get warnHtmlMessage() {
      return g
    },
    set warnHtmlMessage(x) {
      ;((g = x), (k.warnHtmlMessage = x))
    },
    get escapeParameter() {
      return _
    },
    set escapeParameter(x) {
      ;((_ = x), (k.escapeParameter = x))
    },
    t: Be,
    getLocaleMessage: I,
    setLocaleMessage: R,
    mergeLocaleMessage: F,
    getPostTranslationHandler: le,
    setPostTranslationHandler: Y,
    getMissingHandler: Q,
    setMissingHandler: Z,
    [Wa]: X,
  }
  return (
    ($.datetimeFormats = J),
    ($.numberFormats = oe),
    ($.rt = De),
    ($.te = ce),
    ($.tm = E),
    ($.d = ke),
    ($.n = mt),
    ($.getDateTimeFormat = D),
    ($.setDateTimeFormat = b),
    ($.mergeDateTimeFormat = y),
    ($.getNumberFormat = C),
    ($.setNumberFormat = L),
    ($.mergeNumberFormat = W),
    ($[Ua] = n),
    ($[Vr] = N),
    ($[Hr] = H),
    ($[Wr] = U),
    $
  )
}
function wp(e) {
  const t = z(e.locale) ? e.locale : Qn,
    n =
      z(e.fallbackLocale) || Ce(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1
        ? e.fallbackLocale
        : t,
    s = Se(e.missing) ? e.missing : void 0,
    r = ae(e.silentTranslationWarn) || xn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
    i = ae(e.silentFallbackWarn) || xn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
    o = ae(e.fallbackRoot) ? e.fallbackRoot : !0,
    l = !!e.formatFallbackMessages,
    a = ie(e.modifiers) ? e.modifiers : {},
    c = e.pluralizationRules,
    u = Se(e.postTranslation) ? e.postTranslation : void 0,
    f = z(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== 'off' : !0,
    d = !!e.escapeParameterHtml,
    p = ae(e.sync) ? e.sync : !0
  let v = e.messages
  if (ie(e.sharedMessages)) {
    const T = e.sharedMessages
    v = Object.keys(T).reduce((k, j) => {
      const M = k[j] || (k[j] = {})
      return (Re(M, T[j]), k)
    }, v || {})
  }
  const { __i18n: S, __root: P, __injectWithOption: m } = e,
    h = e.datetimeFormats,
    g = e.numberFormats,
    _ = e.flatJson
  return {
    locale: t,
    fallbackLocale: n,
    messages: v,
    flatJson: _,
    datetimeFormats: h,
    numberFormats: g,
    missing: s,
    missingWarn: r,
    fallbackWarn: i,
    fallbackRoot: o,
    fallbackFormat: l,
    modifiers: a,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: f,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: S,
    __root: P,
    __injectWithOption: m,
  }
}
function Gr(e = {}) {
  const t = Ii(wp(e)),
    { __extender: n } = e,
    s = {
      id: t.id,
      get locale() {
        return t.locale.value
      },
      set locale(r) {
        t.locale.value = r
      },
      get fallbackLocale() {
        return t.fallbackLocale.value
      },
      set fallbackLocale(r) {
        t.fallbackLocale.value = r
      },
      get messages() {
        return t.messages.value
      },
      get datetimeFormats() {
        return t.datetimeFormats.value
      },
      get numberFormats() {
        return t.numberFormats.value
      },
      get availableLocales() {
        return t.availableLocales
      },
      get missing() {
        return t.getMissingHandler()
      },
      set missing(r) {
        t.setMissingHandler(r)
      },
      get silentTranslationWarn() {
        return ae(t.missingWarn) ? !t.missingWarn : t.missingWarn
      },
      set silentTranslationWarn(r) {
        t.missingWarn = ae(r) ? !r : r
      },
      get silentFallbackWarn() {
        return ae(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn
      },
      set silentFallbackWarn(r) {
        t.fallbackWarn = ae(r) ? !r : r
      },
      get modifiers() {
        return t.modifiers
      },
      get formatFallbackMessages() {
        return t.fallbackFormat
      },
      set formatFallbackMessages(r) {
        t.fallbackFormat = r
      },
      get postTranslation() {
        return t.getPostTranslationHandler()
      },
      set postTranslation(r) {
        t.setPostTranslationHandler(r)
      },
      get sync() {
        return t.inheritLocale
      },
      set sync(r) {
        t.inheritLocale = r
      },
      get warnHtmlInMessage() {
        return t.warnHtmlMessage ? 'warn' : 'off'
      },
      set warnHtmlInMessage(r) {
        t.warnHtmlMessage = r !== 'off'
      },
      get escapeParameterHtml() {
        return t.escapeParameter
      },
      set escapeParameterHtml(r) {
        t.escapeParameter = r
      },
      get pluralizationRules() {
        return t.pluralRules || {}
      },
      __composer: t,
      t(...r) {
        return Reflect.apply(t.t, t, [...r])
      },
      rt(...r) {
        return Reflect.apply(t.rt, t, [...r])
      },
      te(r, i) {
        return t.te(r, i)
      },
      tm(r) {
        return t.tm(r)
      },
      getLocaleMessage(r) {
        return t.getLocaleMessage(r)
      },
      setLocaleMessage(r, i) {
        t.setLocaleMessage(r, i)
      },
      mergeLocaleMessage(r, i) {
        t.mergeLocaleMessage(r, i)
      },
      d(...r) {
        return Reflect.apply(t.d, t, [...r])
      },
      getDateTimeFormat(r) {
        return t.getDateTimeFormat(r)
      },
      setDateTimeFormat(r, i) {
        t.setDateTimeFormat(r, i)
      },
      mergeDateTimeFormat(r, i) {
        t.mergeDateTimeFormat(r, i)
      },
      n(...r) {
        return Reflect.apply(t.n, t, [...r])
      },
      getNumberFormat(r) {
        return t.getNumberFormat(r)
      },
      setNumberFormat(r, i) {
        t.setNumberFormat(r, i)
      },
      mergeNumberFormat(r, i) {
        t.mergeNumberFormat(r, i)
      },
    }
  return ((s.__extender = n), s)
}
function Sp(e, t, n) {
  return {
    beforeCreate() {
      const s = Tn()
      if (!s) throw st(Je.UNEXPECTED_ERROR)
      const r = this.$options
      if (r.i18n) {
        const i = r.i18n
        if ((r.__i18n && (i.__i18n = r.__i18n), (i.__root = t), this === this.$root))
          this.$i18n = Vo(e, i)
        else {
          ;((i.__injectWithOption = !0), (i.__extender = n.__vueI18nExtend), (this.$i18n = Gr(i)))
          const o = this.$i18n
          o.__extender && (o.__disposer = o.__extender(this.$i18n))
        }
      } else if (r.__i18n)
        if (this === this.$root) this.$i18n = Vo(e, r)
        else {
          this.$i18n = Gr({
            __i18n: r.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t,
          })
          const i = this.$i18n
          i.__extender && (i.__disposer = i.__extender(this.$i18n))
        }
      else this.$i18n = e
      ;(r.__i18nGlobal && za(t, r, r),
        (this.$t = (...i) => this.$i18n.t(...i)),
        (this.$rt = (...i) => this.$i18n.rt(...i)),
        (this.$te = (i, o) => this.$i18n.te(i, o)),
        (this.$d = (...i) => this.$i18n.d(...i)),
        (this.$n = (...i) => this.$i18n.n(...i)),
        (this.$tm = (i) => this.$i18n.tm(i)),
        n.__setInstance(s, this.$i18n))
    },
    mounted() {},
    unmounted() {
      const s = Tn()
      if (!s) throw st(Je.UNEXPECTED_ERROR)
      const r = this.$i18n
      ;(delete this.$t,
        delete this.$rt,
        delete this.$te,
        delete this.$d,
        delete this.$n,
        delete this.$tm,
        r.__disposer && (r.__disposer(), delete r.__disposer, delete r.__extender),
        n.__deleteInstance(s),
        delete this.$i18n)
    },
  }
}
function Vo(e, t) {
  ;((e.locale = t.locale || e.locale),
    (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
    (e.missing = t.missing || e.missing),
    (e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = t.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = t.sync || e.sync),
    e.__composer[Wa](t.pluralizationRules || e.pluralizationRules))
  const n = Pi(e.locale, { messages: t.messages, __i18n: t.__i18n })
  return (
    Object.keys(n).forEach((s) => e.mergeLocaleMessage(s, n[s])),
    t.datetimeFormats &&
      Object.keys(t.datetimeFormats).forEach((s) => e.mergeDateTimeFormat(s, t.datetimeFormats[s])),
    t.numberFormats &&
      Object.keys(t.numberFormats).forEach((s) => e.mergeNumberFormat(s, t.numberFormats[s])),
    e
  )
}
const ki = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: { type: String, validator: (e) => e === 'parent' || e === 'global', default: 'parent' },
  i18n: { type: Object },
}
function Ep({ slots: e }, t) {
  return t.length === 1 && t[0] === 'default'
    ? (e.default ? e.default() : []).reduce(
        (s, r) => [...s, ...(r.type === Me ? r.children : [r])],
        [],
      )
    : t.reduce((n, s) => {
        const r = e[s]
        return (r && (n[s] = r()), n)
      }, ve())
}
function Ya() {
  return Me
}
const Tp = qe({
    name: 'i18n-t',
    props: Re(
      {
        keypath: { type: String, required: !0 },
        plural: { type: [Number, String], validator: (e) => Le(e) || !isNaN(e) },
      },
      ki,
    ),
    setup(e, t) {
      const { slots: n, attrs: s } = t,
        r = e.i18n || rt({ useScope: e.scope, __useComponent: !0 })
      return () => {
        const i = Object.keys(n).filter((f) => f[0] !== '_'),
          o = ve()
        ;(e.locale && (o.locale = e.locale),
          e.plural !== void 0 && (o.plural = z(e.plural) ? +e.plural : e.plural))
        const l = Ep(t, i),
          a = r[Vr](e.keypath, l, o),
          c = Re(ve(), s),
          u = z(e.tag) || ue(e.tag) ? e.tag : Ya()
        return He(u, c, a)
      }
    },
  }),
  Ho = Tp
function xp(e) {
  return Ce(e) && !z(e[0])
}
function qa(e, t, n, s) {
  const { slots: r, attrs: i } = t
  return () => {
    const o = { part: !0 }
    let l = ve()
    ;(e.locale && (o.locale = e.locale),
      z(e.format)
        ? (o.key = e.format)
        : ue(e.format) &&
          (z(e.format.key) && (o.key = e.format.key),
          (l = Object.keys(e.format).reduce(
            (d, p) => (n.includes(p) ? Re(ve(), d, { [p]: e.format[p] }) : d),
            ve(),
          ))))
    const a = s(e.value, o, l)
    let c = [o.key]
    Ce(a)
      ? (c = a.map((d, p) => {
          const v = r[d.type],
            S = v ? v({ [d.type]: d.value, index: p, parts: a }) : [d.value]
          return (xp(S) && (S[0].key = `${d.type}-${p}`), S)
        }))
      : z(a) && (c = [a])
    const u = Re(ve(), i),
      f = z(e.tag) || ue(e.tag) ? e.tag : Ya()
    return He(f, u, c)
  }
}
const Cp = qe({
    name: 'i18n-n',
    props: Re({ value: { type: Number, required: !0 }, format: { type: [String, Object] } }, ki),
    setup(e, t) {
      const n = e.i18n || rt({ useScope: e.scope, __useComponent: !0 })
      return qa(e, t, ja, (...s) => n[Wr](...s))
    },
  }),
  Wo = Cp
function Pp(e, t) {
  const n = e
  if (e.mode === 'composition') return n.__getInstance(t) || e.global
  {
    const s = n.__getInstance(t)
    return s != null ? s.__composer : e.global.__composer
  }
}
function Ip(e) {
  const t = (o) => {
    const { instance: l, value: a } = o
    if (!l || !l.$) throw st(Je.UNEXPECTED_ERROR)
    const c = Pp(e, l.$),
      u = Uo(a)
    return [Reflect.apply(c.t, c, [...Go(u)]), c]
  }
  return {
    created: (o, l) => {
      const [a, c] = t(l)
      ;(Ls &&
        e.global === c &&
        (o.__i18nWatcher = Tt(c.locale, () => {
          l.instance && l.instance.$forceUpdate()
        })),
        (o.__composer = c),
        (o.textContent = a))
    },
    unmounted: (o) => {
      ;(Ls &&
        o.__i18nWatcher &&
        (o.__i18nWatcher(), (o.__i18nWatcher = void 0), delete o.__i18nWatcher),
        o.__composer && ((o.__composer = void 0), delete o.__composer))
    },
    beforeUpdate: (o, { value: l }) => {
      if (o.__composer) {
        const a = o.__composer,
          c = Uo(l)
        o.textContent = Reflect.apply(a.t, a, [...Go(c)])
      }
    },
    getSSRProps: (o) => {
      const [l] = t(o)
      return { textContent: l }
    },
  }
}
function Uo(e) {
  if (z(e)) return { path: e }
  if (ie(e)) {
    if (!('path' in e)) throw st(Je.REQUIRED_VALUE, 'path')
    return e
  } else throw st(Je.INVALID_VALUE)
}
function Go(e) {
  const { path: t, locale: n, args: s, choice: r, plural: i } = e,
    o = {},
    l = s || {}
  return (z(n) && (o.locale = n), Le(r) && (o.plural = r), Le(i) && (o.plural = i), [t, l, o])
}
function kp(e, t, ...n) {
  const s = ie(n[0]) ? n[0] : {}
  ;((ae(s.globalInstall) ? s.globalInstall : !0) &&
    ([Ho.name, 'I18nT'].forEach((i) => e.component(i, Ho)),
    [Wo.name, 'I18nN'].forEach((i) => e.component(i, Wo)),
    [Yo.name, 'I18nD'].forEach((i) => e.component(i, Yo))),
    e.directive('t', Ip(t)))
}
const Lp = Xt('global-vue-i18n')
function Op(e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && ae(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    n = ae(e.globalInjection) ? e.globalInjection : !0,
    s = new Map(),
    [r, i] = Ap(e, t),
    o = Xt('')
  function l(f) {
    return s.get(f) || null
  }
  function a(f, d) {
    s.set(f, d)
  }
  function c(f) {
    s.delete(f)
  }
  const u = {
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? 'legacy' : 'composition'
    },
    async install(f, ...d) {
      if (((f.__VUE_I18N_SYMBOL__ = o), f.provide(f.__VUE_I18N_SYMBOL__, u), ie(d[0]))) {
        const S = d[0]
        ;((u.__composerExtend = S.__composerExtend), (u.__vueI18nExtend = S.__vueI18nExtend))
      }
      let p = null
      ;(!t && n && (p = jp(f, u.global)),
        __VUE_I18N_FULL_INSTALL__ && kp(f, u, ...d),
        __VUE_I18N_LEGACY_API__ && t && f.mixin(Sp(i, i.__composer, u)))
      const v = f.unmount
      f.unmount = () => {
        ;(p && p(), u.dispose(), v())
      }
    },
    get global() {
      return i
    },
    dispose() {
      r.stop()
    },
    __instances: s,
    __getInstance: l,
    __setInstance: a,
    __deleteInstance: c,
  }
  return u
}
function rt(e = {}) {
  const t = Tn()
  if (t == null) throw st(Je.MUST_BE_CALL_SETUP_TOP)
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw st(Je.NOT_INSTALLED)
  const n = Mp(t),
    s = Np(n),
    r = Ga(t),
    i = Rp(e, r)
  if (i === 'global') return (za(s, e, r), s)
  if (i === 'parent') {
    let a = Dp(n, t, e.__useComponent)
    return (a == null && (a = s), a)
  }
  const o = n
  let l = o.__getInstance(t)
  if (l == null) {
    const a = Re({}, e)
    ;('__i18n' in r && (a.__i18n = r.__i18n),
      s && (a.__root = s),
      (l = Ii(a)),
      o.__composerExtend && (l[Ur] = o.__composerExtend(l)),
      $p(o, t, l),
      o.__setInstance(t, l))
  }
  return l
}
function Ap(e, t) {
  const n = Nc(),
    s = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Gr(e)) : n.run(() => Ii(e))
  if (s == null) throw st(Je.UNEXPECTED_ERROR)
  return [n, s]
}
function Mp(e) {
  const t = at(e.isCE ? Lp : e.appContext.app.__VUE_I18N_SYMBOL__)
  if (!t) throw st(e.isCE ? Je.NOT_INSTALLED_WITH_PROVIDE : Je.UNEXPECTED_ERROR)
  return t
}
function Rp(e, t) {
  return zs(e) ? ('__i18n' in t ? 'local' : 'global') : e.useScope ? e.useScope : 'local'
}
function Np(e) {
  return e.mode === 'composition' ? e.global : e.global.__composer
}
function Dp(e, t, n = !1) {
  let s = null
  const r = t.root
  let i = Fp(t, n)
  for (; i != null; ) {
    const o = e
    if (e.mode === 'composition') s = o.__getInstance(i)
    else if (__VUE_I18N_LEGACY_API__) {
      const l = o.__getInstance(i)
      l != null && ((s = l.__composer), n && s && !s[Ua] && (s = null))
    }
    if (s != null || r === i) break
    i = i.parent
  }
  return s
}
function Fp(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent
}
function $p(e, t, n) {
  ;(un(() => {}, t),
    ss(() => {
      const s = n
      e.__deleteInstance(t)
      const r = s[Ur]
      r && (r(), delete s[Ur])
    }, t))
}
const Bp = ['locale', 'fallbackLocale', 'availableLocales'],
  zo = ['t', 'rt', 'd', 'n', 'tm', 'te']
function jp(e, t) {
  const n = Object.create(null)
  return (
    Bp.forEach((r) => {
      const i = Object.getOwnPropertyDescriptor(t, r)
      if (!i) throw st(Je.UNEXPECTED_ERROR)
      const o = $e(i.value)
        ? {
            get() {
              return i.value.value
            },
            set(l) {
              i.value.value = l
            },
          }
        : {
            get() {
              return i.get && i.get()
            },
          }
      Object.defineProperty(n, r, o)
    }),
    (e.config.globalProperties.$i18n = n),
    zo.forEach((r) => {
      const i = Object.getOwnPropertyDescriptor(t, r)
      if (!i || !i.value) throw st(Je.UNEXPECTED_ERROR)
      Object.defineProperty(e.config.globalProperties, `$${r}`, i)
    }),
    () => {
      ;(delete e.config.globalProperties.$i18n,
        zo.forEach((r) => {
          delete e.config.globalProperties[`$${r}`]
        }))
    }
  )
}
const Vp = qe({
    name: 'i18n-d',
    props: Re(
      { value: { type: [Number, Date], required: !0 }, format: { type: [String, Object] } },
      ki,
    ),
    setup(e, t) {
      const n = e.i18n || rt({ useScope: e.scope, __useComponent: !0 })
      return qa(e, t, Ba, (...s) => n[Hr](...s))
    },
  }),
  Yo = Vp
bp()
Xd(Od)
Jd(Yd)
Qd(Ma)
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = on()
  ;((e.__INTLIFY__ = !0), Ad(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__))
}
const Hp = 'assets/logo-DmCWwoUo.svg'
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const mn = typeof document < 'u'
function Ka(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function Wp(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Ka(e.default))
}
const fe = Object.assign
function ur(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = ht(r) ? r.map(e) : e(r)
  }
  return n
}
const Wn = () => {},
  ht = Array.isArray,
  Xa = /#/g,
  Up = /&/g,
  Gp = /\//g,
  zp = /=/g,
  Yp = /\?/g,
  Ja = /\+/g,
  qp = /%5B/g,
  Kp = /%5D/g,
  Qa = /%5E/g,
  Xp = /%60/g,
  Za = /%7B/g,
  Jp = /%7C/g,
  ec = /%7D/g,
  Qp = /%20/g
function Li(e) {
  return encodeURI('' + e)
    .replace(Jp, '|')
    .replace(qp, '[')
    .replace(Kp, ']')
}
function Zp(e) {
  return Li(e).replace(Za, '{').replace(ec, '}').replace(Qa, '^')
}
function zr(e) {
  return Li(e)
    .replace(Ja, '%2B')
    .replace(Qp, '+')
    .replace(Xa, '%23')
    .replace(Up, '%26')
    .replace(Xp, '`')
    .replace(Za, '{')
    .replace(ec, '}')
    .replace(Qa, '^')
}
function eh(e) {
  return zr(e).replace(zp, '%3D')
}
function th(e) {
  return Li(e).replace(Xa, '%23').replace(Yp, '%3F')
}
function nh(e) {
  return e == null ? '' : th(e).replace(Gp, '%2F')
}
function es(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const sh = /\/$/,
  rh = (e) => e.replace(sh, '')
function fr(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const l = t.indexOf('#')
  let a = t.indexOf('?')
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 && ((s = t.slice(0, a)), (i = t.slice(a + 1, l > -1 ? l : t.length)), (r = e(i))),
    l > -1 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = ah(s ?? t, n)),
    { fullPath: s + (i && '?') + i + o, path: s, query: r, hash: es(o) }
  )
}
function ih(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function qo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function oh(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Pn(t.matched[s], n.matched[r]) &&
    tc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Pn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function tc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!lh(e[n], t[n])) return !1
  return !0
}
function lh(e, t) {
  return ht(e) ? Ko(e, t) : ht(t) ? Ko(t, e) : e === t
}
function Ko(e, t) {
  return ht(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function ah(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let i = n.length - 1,
    o,
    l
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== '.'))
      if (l === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + s.slice(o).join('/')
}
const jt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var ts
;(function (e) {
  ;((e.pop = 'pop'), (e.push = 'push'))
})(ts || (ts = {}))
var Un
;(function (e) {
  ;((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''))
})(Un || (Un = {}))
function ch(e) {
  if (!e)
    if (mn) {
      const t = document.querySelector('base')
      ;((e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, '')))
    } else e = '/'
  return (e[0] !== '/' && e[0] !== '#' && (e = '/' + e), rh(e))
}
const uh = /^[^#]+#/
function fh(e, t) {
  return e.replace(uh, '#') + t
}
function dh(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const Ks = () => ({ left: window.scrollX, top: window.scrollY })
function ph(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = dh(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function Xo(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Yr = new Map()
function hh(e, t) {
  Yr.set(e, t)
}
function mh(e) {
  const t = Yr.get(e)
  return (Yr.delete(e), t)
}
let gh = () => location.protocol + '//' + location.host
function nc(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = r.slice(l)
    return (a[0] !== '/' && (a = '/' + a), qo(a, ''))
  }
  return qo(n, e) + s + r
}
function vh(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const l = ({ state: d }) => {
    const p = nc(e, location),
      v = n.value,
      S = t.value
    let P = 0
    if (d) {
      if (((n.value = p), (t.value = d), o && o === v)) {
        o = null
        return
      }
      P = S ? d.position - S.position : 0
    } else s(p)
    r.forEach((m) => {
      m(n.value, v, {
        delta: P,
        type: ts.pop,
        direction: P ? (P > 0 ? Un.forward : Un.back) : Un.unknown,
      })
    })
  }
  function a() {
    o = n.value
  }
  function c(d) {
    r.push(d)
    const p = () => {
      const v = r.indexOf(d)
      v > -1 && r.splice(v, 1)
    }
    return (i.push(p), p)
  }
  function u() {
    const { history: d } = window
    d.state && d.replaceState(fe({}, d.state, { scroll: Ks() }), '')
  }
  function f() {
    for (const d of i) d()
    ;((i = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', u))
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: f }
  )
}
function Jo(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Ks() : null,
  }
}
function bh(e) {
  const { history: t, location: n } = window,
    s = { value: nc(e, n) },
    r = { value: t.state }
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function i(a, c, u) {
    const f = e.indexOf('#'),
      d = f > -1 ? (n.host && document.querySelector('base') ? e : e.slice(f)) + a : gh() + e + a
    try {
      ;(t[u ? 'replaceState' : 'pushState'](c, '', d), (r.value = c))
    } catch (p) {
      ;(console.error(p), n[u ? 'replace' : 'assign'](d))
    }
  }
  function o(a, c) {
    const u = fe({}, t.state, Jo(r.value.back, a, r.value.forward, !0), c, {
      position: r.value.position,
    })
    ;(i(a, u, !0), (s.value = a))
  }
  function l(a, c) {
    const u = fe({}, r.value, t.state, { forward: a, scroll: Ks() })
    i(u.current, u, !0)
    const f = fe({}, Jo(s.value, a, null), { position: u.position + 1 }, c)
    ;(i(a, f, !1), (s.value = a))
  }
  return { location: s, state: r, push: l, replace: o }
}
function _h(e) {
  e = ch(e)
  const t = bh(e),
    n = vh(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    ;(o || n.pauseListeners(), history.go(i))
  }
  const r = fe({ location: '', base: e, go: s, createHref: fh.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function yh(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function sc(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const rc = Symbol('')
var Qo
;(function (e) {
  ;((e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated'))
})(Qo || (Qo = {}))
function In(e, t) {
  return fe(new Error(), { type: e, [rc]: !0 }, t)
}
function kt(e, t) {
  return e instanceof Error && rc in e && (t == null || !!(e.type & t))
}
const Zo = '[^/]+?',
  wh = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Sh = /[.+*?^${}()[\]/\\]/g
function Eh(e, t) {
  const n = fe({}, wh, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const c of e) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (r += '/')
    for (let f = 0; f < c.length; f++) {
      const d = c[f]
      let p = 40 + (n.sensitive ? 0.25 : 0)
      if (d.type === 0) (f || (r += '/'), (r += d.value.replace(Sh, '\\$&')), (p += 40))
      else if (d.type === 1) {
        const { value: v, repeatable: S, optional: P, regexp: m } = d
        i.push({ name: v, repeatable: S, optional: P })
        const h = m || Zo
        if (h !== Zo) {
          p += 10
          try {
            new RegExp(`(${h})`)
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${v}" (${h}): ` + _.message)
          }
        }
        let g = S ? `((?:${h})(?:/(?:${h}))*)` : `(${h})`
        ;(f || (g = P && c.length < 2 ? `(?:/${g})` : '/' + g),
          P && (g += '?'),
          (r += g),
          (p += 20),
          P && (p += -8),
          S && (p += -20),
          h === '.*' && (p += -50))
      }
      u.push(p)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const c = s.length - 1
    s[c][s[c].length - 1] += 0.7000000000000001
  }
  ;(n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)'))
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function l(c) {
    const u = c.match(o),
      f = {}
    if (!u) return null
    for (let d = 1; d < u.length; d++) {
      const p = u[d] || '',
        v = i[d - 1]
      f[v.name] = p && v.repeatable ? p.split('/') : p
    }
    return f
  }
  function a(c) {
    let u = '',
      f = !1
    for (const d of e) {
      ;((!f || !u.endsWith('/')) && (u += '/'), (f = !1))
      for (const p of d)
        if (p.type === 0) u += p.value
        else if (p.type === 1) {
          const { value: v, repeatable: S, optional: P } = p,
            m = v in c ? c[v] : ''
          if (ht(m) && !S)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const h = ht(m) ? m.join('/') : m
          if (!h)
            if (P) d.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${v}"`)
          u += h
        }
    }
    return u || '/'
  }
  return { re: o, score: s, keys: i, parse: l, stringify: a }
}
function Th(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function ic(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = Th(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (el(s)) return 1
    if (el(r)) return -1
  }
  return r.length - s.length
}
function el(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const xh = { type: 0, value: '' },
  Ch = /[a-zA-Z0-9_]/
function Ph(e) {
  if (!e) return [[]]
  if (e === '/') return [[xh]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(p) {
    throw new Error(`ERR (${n})/"${c}": ${p}`)
  }
  let n = 0,
    s = n
  const r = []
  let i
  function o() {
    ;(i && r.push(i), (i = []))
  }
  let l = 0,
    a,
    c = '',
    u = ''
  function f() {
    c &&
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (a === '*' || a === '+') &&
              t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: a === '*' || a === '+',
              optional: a === '*' || a === '?',
            }))
          : t('Invalid state to consume buffer'),
      (c = ''))
  }
  function d() {
    c += a
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && n !== 2)) {
      ;((s = n), (n = 4))
      continue
    }
    switch (n) {
      case 0:
        a === '/' ? (c && f(), o()) : a === ':' ? (f(), (n = 1)) : d()
        break
      case 4:
        ;(d(), (n = s))
        break
      case 1:
        a === '('
          ? (n = 2)
          : Ch.test(a)
            ? d()
            : (f(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--)
        break
      case 2:
        a === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + a) : (n = 3)) : (u += a)
        break
      case 3:
        ;(f(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--, (u = ''))
        break
      default:
        t('Unknown state')
        break
    }
  }
  return (n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), r)
}
function Ih(e, t, n) {
  const s = Eh(Ph(e.path), n),
    r = fe(s, { record: e, parent: t, children: [], alias: [] })
  return (t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r)
}
function kh(e, t) {
  const n = [],
    s = new Map()
  t = rl({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(f) {
    return s.get(f)
  }
  function i(f, d, p) {
    const v = !p,
      S = nl(f)
    S.aliasOf = p && p.record
    const P = rl(t, f),
      m = [S]
    if ('alias' in f) {
      const _ = typeof f.alias == 'string' ? [f.alias] : f.alias
      for (const T of _)
        m.push(
          nl(
            fe({}, S, {
              components: p ? p.record.components : S.components,
              path: T,
              aliasOf: p ? p.record : S,
            }),
          ),
        )
    }
    let h, g
    for (const _ of m) {
      const { path: T } = _
      if (d && T[0] !== '/') {
        const O = d.record.path,
          k = O[O.length - 1] === '/' ? '' : '/'
        _.path = d.record.path + (T && k + T)
      }
      if (
        ((h = Ih(_, d, P)),
        p
          ? p.alias.push(h)
          : ((g = g || h), g !== h && g.alias.push(h), v && f.name && !sl(h) && o(f.name)),
        oc(h) && a(h),
        S.children)
      ) {
        const O = S.children
        for (let k = 0; k < O.length; k++) i(O[k], h, p && p.children[k])
      }
      p = p || h
    }
    return g
      ? () => {
          o(g)
        }
      : Wn
  }
  function o(f) {
    if (sc(f)) {
      const d = s.get(f)
      d && (s.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
    } else {
      const d = n.indexOf(f)
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(o),
        f.alias.forEach(o))
    }
  }
  function l() {
    return n
  }
  function a(f) {
    const d = Ah(f, n)
    ;(n.splice(d, 0, f), f.record.name && !sl(f) && s.set(f.record.name, f))
  }
  function c(f, d) {
    let p,
      v = {},
      S,
      P
    if ('name' in f && f.name) {
      if (((p = s.get(f.name)), !p)) throw In(1, { location: f })
      ;((P = p.record.name),
        (v = fe(
          tl(
            d.params,
            p.keys
              .filter((g) => !g.optional)
              .concat(p.parent ? p.parent.keys.filter((g) => g.optional) : [])
              .map((g) => g.name),
          ),
          f.params &&
            tl(
              f.params,
              p.keys.map((g) => g.name),
            ),
        )),
        (S = p.stringify(v)))
    } else if (f.path != null)
      ((S = f.path),
        (p = n.find((g) => g.re.test(S))),
        p && ((v = p.parse(S)), (P = p.record.name)))
    else {
      if (((p = d.name ? s.get(d.name) : n.find((g) => g.re.test(d.path))), !p))
        throw In(1, { location: f, currentLocation: d })
      ;((P = p.record.name), (v = fe({}, d.params, f.params)), (S = p.stringify(v)))
    }
    const m = []
    let h = p
    for (; h; ) (m.unshift(h.record), (h = h.parent))
    return { name: P, path: S, params: v, matched: m, meta: Oh(m) }
  }
  e.forEach((f) => i(f))
  function u() {
    ;((n.length = 0), s.clear())
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: l,
    getRecordMatcher: r,
  }
}
function tl(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function nl(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Lh(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return (Object.defineProperty(t, 'mods', { value: {} }), t)
}
function Lh(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function sl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Oh(e) {
  return e.reduce((t, n) => fe(t, n.meta), {})
}
function rl(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Ah(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    ic(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = Mh(e)
  return (r && (s = t.lastIndexOf(r, s - 1)), s)
}
function Mh(e) {
  let t = e
  for (; (t = t.parent); ) if (oc(t) && ic(e, t) === 0) return t
}
function oc({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function Rh(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(Ja, ' '),
      o = i.indexOf('='),
      l = es(o < 0 ? i : i.slice(0, o)),
      a = o < 0 ? null : es(i.slice(o + 1))
    if (l in t) {
      let c = t[l]
      ;(ht(c) || (c = t[l] = [c]), c.push(a))
    } else t[l] = a
  }
  return t
}
function il(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = eh(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(ht(s) ? s.map((i) => i && zr(i)) : [s && zr(s)]).forEach((i) => {
      i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function Nh(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = ht(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const Dh = Symbol(''),
  ol = Symbol(''),
  Xs = Symbol(''),
  Oi = Symbol(''),
  qr = Symbol('')
function Mn() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function Wt(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((l, a) => {
      const c = (d) => {
          d === !1
            ? a(In(4, { from: n, to: t }))
            : d instanceof Error
              ? a(d)
              : yh(d)
                ? a(In(2, { from: t, to: d }))
                : (o && s.enterCallbacks[r] === o && typeof d == 'function' && o.push(d), l())
        },
        u = i(() => e.call(s && s.instances[r], t, n, c))
      let f = Promise.resolve(u)
      ;(e.length < 3 && (f = f.then(c)), f.catch((d) => a(d)))
    })
}
function dr(e, t, n, s, r = (i) => i()) {
  const i = []
  for (const o of e)
    for (const l in o.components) {
      let a = o.components[l]
      if (!(t !== 'beforeRouteEnter' && !o.instances[l]))
        if (Ka(a)) {
          const u = (a.__vccOpts || a)[t]
          u && i.push(Wt(u, n, s, o, l, r))
        } else {
          let c = a()
          i.push(() =>
            c.then((u) => {
              if (!u) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`)
              const f = Wp(u) ? u.default : u
              ;((o.mods[l] = u), (o.components[l] = f))
              const p = (f.__vccOpts || f)[t]
              return p && Wt(p, n, s, o, l, r)()
            }),
          )
        }
    }
  return i
}
function ll(e) {
  const t = at(Xs),
    n = at(Oi),
    s = Ie(() => {
      const a = te(e.to)
      return t.resolve(a)
    }),
    r = Ie(() => {
      const { matched: a } = s.value,
        { length: c } = a,
        u = a[c - 1],
        f = n.matched
      if (!u || !f.length) return -1
      const d = f.findIndex(Pn.bind(null, u))
      if (d > -1) return d
      const p = al(a[c - 2])
      return c > 1 && al(u) === p && f[f.length - 1].path !== p
        ? f.findIndex(Pn.bind(null, a[c - 2]))
        : d
    }),
    i = Ie(() => r.value > -1 && Vh(n.params, s.value.params)),
    o = Ie(() => r.value > -1 && r.value === n.matched.length - 1 && tc(n.params, s.value.params))
  function l(a = {}) {
    if (jh(a)) {
      const c = t[te(e.replace) ? 'replace' : 'push'](te(e.to)).catch(Wn)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => c),
        c
      )
    }
    return Promise.resolve()
  }
  return { route: s, href: Ie(() => s.value.href), isActive: i, isExactActive: o, navigate: l }
}
function Fh(e) {
  return e.length === 1 ? e[0] : e
}
const $h = qe({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: ll,
    setup(e, { slots: t }) {
      const n = Hs(ll(e)),
        { options: s } = at(Xs),
        r = Ie(() => ({
          [cl(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [cl(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const i = t.default && Fh(t.default(n))
        return e.custom
          ? i
          : He(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i,
            )
      }
    },
  }),
  Bh = $h
function jh(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return (e.preventDefault && e.preventDefault(), !0)
  }
}
function Vh(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!ht(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
  }
  return !0
}
function al(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const cl = (e, t, n) => e ?? t ?? n,
  Hh = qe({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = at(qr),
        r = Ie(() => e.route || s.value),
        i = at(ol, 0),
        o = Ie(() => {
          let c = te(i)
          const { matched: u } = r.value
          let f
          for (; (f = u[c]) && !f.components; ) c++
          return c
        }),
        l = Ie(() => r.value.matched[o.value])
      ;(wn(
        ol,
        Ie(() => o.value + 1),
      ),
        wn(Dh, l),
        wn(qr, r))
      const a = xe()
      return (
        Tt(
          () => [a.value, l.value, e.name],
          ([c, u, f], [d, p, v]) => {
            ;(u &&
              ((u.instances[f] = c),
              p &&
                p !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                u.updateGuards.size || (u.updateGuards = p.updateGuards))),
              c && u && (!p || !Pn(u, p) || !d) && (u.enterCallbacks[f] || []).forEach((S) => S(c)))
          },
          { flush: 'post' },
        ),
        () => {
          const c = r.value,
            u = e.name,
            f = l.value,
            d = f && f.components[u]
          if (!d) return ul(n.default, { Component: d, route: c })
          const p = f.props[u],
            v = p ? (p === !0 ? c.params : typeof p == 'function' ? p(c) : p) : null,
            P = He(
              d,
              fe({}, v, t, {
                onVnodeUnmounted: (m) => {
                  m.component.isUnmounted && (f.instances[u] = null)
                },
                ref: a,
              }),
            )
          return ul(n.default, { Component: P, route: c }) || P
        }
      )
    },
  })
function ul(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Wh = Hh
function Uh(e) {
  const t = kh(e.routes, e),
    n = e.parseQuery || Rh,
    s = e.stringifyQuery || il,
    r = e.history,
    i = Mn(),
    o = Mn(),
    l = Mn(),
    a = Hl(jt)
  let c = jt
  mn && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const u = ur.bind(null, (N) => '' + N),
    f = ur.bind(null, nh),
    d = ur.bind(null, es)
  function p(N, U) {
    let H, X
    return (sc(N) ? ((H = t.getRecordMatcher(N)), (X = U)) : (X = N), t.addRoute(X, H))
  }
  function v(N) {
    const U = t.getRecordMatcher(N)
    U && t.removeRoute(U)
  }
  function S() {
    return t.getRoutes().map((N) => N.record)
  }
  function P(N) {
    return !!t.getRecordMatcher(N)
  }
  function m(N, U) {
    if (((U = fe({}, U || a.value)), typeof N == 'string')) {
      const I = fr(n, N, U.path),
        R = t.resolve({ path: I.path }, U),
        F = r.createHref(I.fullPath)
      return fe(I, R, { params: d(R.params), hash: es(I.hash), redirectedFrom: void 0, href: F })
    }
    let H
    if (N.path != null) H = fe({}, N, { path: fr(n, N.path, U.path).path })
    else {
      const I = fe({}, N.params)
      for (const R in I) I[R] == null && delete I[R]
      ;((H = fe({}, N, { params: f(I) })), (U.params = f(U.params)))
    }
    const X = t.resolve(H, U),
      ce = N.hash || ''
    X.params = u(d(X.params))
    const w = ih(s, fe({}, N, { hash: Zp(ce), path: X.path })),
      E = r.createHref(w)
    return fe({ fullPath: w, hash: ce, query: s === il ? Nh(N.query) : N.query || {} }, X, {
      redirectedFrom: void 0,
      href: E,
    })
  }
  function h(N) {
    return typeof N == 'string' ? fr(n, N, a.value.path) : fe({}, N)
  }
  function g(N, U) {
    if (c !== N) return In(8, { from: U, to: N })
  }
  function _(N) {
    return k(N)
  }
  function T(N) {
    return _(fe(h(N), { replace: !0 }))
  }
  function O(N) {
    const U = N.matched[N.matched.length - 1]
    if (U && U.redirect) {
      const { redirect: H } = U
      let X = typeof H == 'function' ? H(N) : H
      return (
        typeof X == 'string' &&
          ((X = X.includes('?') || X.includes('#') ? (X = h(X)) : { path: X }), (X.params = {})),
        fe({ query: N.query, hash: N.hash, params: X.path != null ? {} : N.params }, X)
      )
    }
  }
  function k(N, U) {
    const H = (c = m(N)),
      X = a.value,
      ce = N.state,
      w = N.force,
      E = N.replace === !0,
      I = O(H)
    if (I)
      return k(
        fe(h(I), { state: typeof I == 'object' ? fe({}, ce, I.state) : ce, force: w, replace: E }),
        U || H,
      )
    const R = H
    R.redirectedFrom = U
    let F
    return (
      !w && oh(s, X, H) && ((F = In(16, { to: R, from: X })), De(X, X, !0, !1)),
      (F ? Promise.resolve(F) : B(R, X))
        .catch((D) => (kt(D) ? (kt(D, 2) ? D : Be(D)) : Z(D, R, X)))
        .then((D) => {
          if (D) {
            if (kt(D, 2))
              return k(
                fe({ replace: E }, h(D.to), {
                  state: typeof D.to == 'object' ? fe({}, ce, D.to.state) : ce,
                  force: w,
                }),
                U || R,
              )
          } else D = G(R, X, !0, E, ce)
          return (V(R, X, D), D)
        })
    )
  }
  function j(N, U) {
    const H = g(N, U)
    return H ? Promise.reject(H) : Promise.resolve()
  }
  function M(N) {
    const U = gt.values().next().value
    return U && typeof U.runWithContext == 'function' ? U.runWithContext(N) : N()
  }
  function B(N, U) {
    let H
    const [X, ce, w] = Gh(N, U)
    H = dr(X.reverse(), 'beforeRouteLeave', N, U)
    for (const I of X)
      I.leaveGuards.forEach((R) => {
        H.push(Wt(R, N, U))
      })
    const E = j.bind(null, N, U)
    return (
      H.push(E),
      je(H)
        .then(() => {
          H = []
          for (const I of i.list()) H.push(Wt(I, N, U))
          return (H.push(E), je(H))
        })
        .then(() => {
          H = dr(ce, 'beforeRouteUpdate', N, U)
          for (const I of ce)
            I.updateGuards.forEach((R) => {
              H.push(Wt(R, N, U))
            })
          return (H.push(E), je(H))
        })
        .then(() => {
          H = []
          for (const I of w)
            if (I.beforeEnter)
              if (ht(I.beforeEnter)) for (const R of I.beforeEnter) H.push(Wt(R, N, U))
              else H.push(Wt(I.beforeEnter, N, U))
          return (H.push(E), je(H))
        })
        .then(
          () => (
            N.matched.forEach((I) => (I.enterCallbacks = {})),
            (H = dr(w, 'beforeRouteEnter', N, U, M)),
            H.push(E),
            je(H)
          ),
        )
        .then(() => {
          H = []
          for (const I of o.list()) H.push(Wt(I, N, U))
          return (H.push(E), je(H))
        })
        .catch((I) => (kt(I, 8) ? I : Promise.reject(I)))
    )
  }
  function V(N, U, H) {
    l.list().forEach((X) => M(() => X(N, U, H)))
  }
  function G(N, U, H, X, ce) {
    const w = g(N, U)
    if (w) return w
    const E = U === jt,
      I = mn ? history.state : {}
    ;(H &&
      (X || E
        ? r.replace(N.fullPath, fe({ scroll: E && I && I.scroll }, ce))
        : r.push(N.fullPath, ce)),
      (a.value = N),
      De(N, U, H, E),
      Be())
  }
  let J
  function oe() {
    J ||
      (J = r.listen((N, U, H) => {
        if (!en.listening) return
        const X = m(N),
          ce = O(X)
        if (ce) {
          k(fe(ce, { replace: !0, force: !0 }), X).catch(Wn)
          return
        }
        c = X
        const w = a.value
        ;(mn && hh(Xo(w.fullPath, H.delta), Ks()),
          B(X, w)
            .catch((E) =>
              kt(E, 12)
                ? E
                : kt(E, 2)
                  ? (k(fe(h(E.to), { force: !0 }), X)
                      .then((I) => {
                        kt(I, 20) && !H.delta && H.type === ts.pop && r.go(-1, !1)
                      })
                      .catch(Wn),
                    Promise.reject())
                  : (H.delta && r.go(-H.delta, !1), Z(E, X, w)),
            )
            .then((E) => {
              ;((E = E || G(X, w, !1)),
                E &&
                  (H.delta && !kt(E, 8)
                    ? r.go(-H.delta, !1)
                    : H.type === ts.pop && kt(E, 20) && r.go(-1, !1)),
                V(X, w, E))
            })
            .catch(Wn))
      }))
  }
  let le = Mn(),
    Y = Mn(),
    Q
  function Z(N, U, H) {
    Be(N)
    const X = Y.list()
    return (X.length ? X.forEach((ce) => ce(N, U, H)) : console.error(N), Promise.reject(N))
  }
  function he() {
    return Q && a.value !== jt
      ? Promise.resolve()
      : new Promise((N, U) => {
          le.add([N, U])
        })
  }
  function Be(N) {
    return (Q || ((Q = !N), oe(), le.list().forEach(([U, H]) => (N ? H(N) : U())), le.reset()), N)
  }
  function De(N, U, H, X) {
    const { scrollBehavior: ce } = e
    if (!mn || !ce) return Promise.resolve()
    const w =
      (!H && mh(Xo(N.fullPath, 0))) || ((X || !H) && history.state && history.state.scroll) || null
    return fi()
      .then(() => ce(N, U, w))
      .then((E) => E && ph(E))
      .catch((E) => Z(E, N, U))
  }
  const ke = (N) => r.go(N)
  let mt
  const gt = new Set(),
    en = {
      currentRoute: a,
      listening: !0,
      addRoute: p,
      removeRoute: v,
      clearRoutes: t.clearRoutes,
      hasRoute: P,
      getRoutes: S,
      resolve: m,
      options: e,
      push: _,
      replace: T,
      go: ke,
      back: () => ke(-1),
      forward: () => ke(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: Y.add,
      isReady: he,
      install(N) {
        const U = this
        ;(N.component('RouterLink', Bh),
          N.component('RouterView', Wh),
          (N.config.globalProperties.$router = U),
          Object.defineProperty(N.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => te(a),
          }),
          mn && !mt && a.value === jt && ((mt = !0), _(r.location).catch((ce) => {})))
        const H = {}
        for (const ce in jt)
          Object.defineProperty(H, ce, { get: () => a.value[ce], enumerable: !0 })
        ;(N.provide(Xs, U), N.provide(Oi, jl(H)), N.provide(qr, a))
        const X = N.unmount
        ;(gt.add(N),
          (N.unmount = function () {
            ;(gt.delete(N),
              gt.size < 1 && ((c = jt), J && J(), (J = null), (a.value = jt), (mt = !1), (Q = !1)),
              X())
          }))
      },
    }
  function je(N) {
    return N.reduce((U, H) => U.then(() => M(H)), Promise.resolve())
  }
  return en
}
function Gh(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const l = t.matched[o]
    l && (e.matched.find((c) => Pn(c, l)) ? s.push(l) : n.push(l))
    const a = e.matched[o]
    a && (t.matched.find((c) => Pn(c, a)) || r.push(a))
  }
  return [n, s, r]
}
function os() {
  return at(Xs)
}
function ls(e) {
  return at(Oi)
}
const zh = { class: 'flex items-center gap-2 language-selector' },
  Yh = qe({
    __name: 'languageSelector',
    setup(e) {
      const t = os(),
        n = ls(),
        { locale: s } = rt()
      function r() {
        const i = s.value === 'en' ? 'es' : 'en'
        ;((s.value = i), t.replace({ path: `/${i}${n.path.replace(/^\/[a-z]{2}/, '')}` }))
      }
      return (i, o) => (
        be(),
        Te('div', zh, [
          K(
            'span',
            {
              class: tt(['text-xl', 'hover:cursor-pointer', te(s) === 'es' ? 'border-b-1' : '']),
              onClick: r,
            },
            'ES',
            2,
          ),
          K(
            'button',
            {
              onClick: r,
              class: tt([
                'w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 border border-white hover:cursor-pointer',
              ]),
            },
            [
              K(
                'div',
                {
                  class: tt([
                    'w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 circle-selector',
                    te(s) === 'en' ? 'translate-x-6' : 'translate-x-0',
                  ]),
                },
                null,
                2,
              ),
            ],
          ),
          K(
            'span',
            {
              class: tt(['text-xl', 'hover:cursor-pointer', te(s) === 'en' ? 'border-b-1' : '']),
              onClick: r,
            },
            'EN',
            2,
          ),
        ])
      )
    },
  }),
  Zt = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  qh = Zt(Yh, [['__scopeId', 'data-v-47448175']]),
  Kh = { class: 'flex justify-between items-center pt-8 pb-8 container' },
  Xh = { class: 'ml-16 language-selector-list-item' },
  Jh = qe({
    __name: 'headerNav',
    setup(e) {
      const { locale: t, t: n } = rt(),
        s = os(),
        r = ls(),
        i = xe(!1),
        o = () => {
          i.value = !i.value
        },
        l = () => {
          i.value = !1
        }
      Tt(i, (v) => {
        v ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '')
      })
      const a = () => {
        window.innerWidth > 576 && (i.value = !1)
      }
      ;(un(() => {
        ;(window.addEventListener('resize', a),
          r.meta?.section &&
            setTimeout(() => {
              const v = n(`anchors.${r.meta.section}`)
              f(v)
            }, 100))
      }),
        ss(() => {
          ;(window.removeEventListener('resize', a), (document.body.style.overflow = ''))
        }))
      const c = (v) =>
          v === 'work'
            ? t.value === 'en'
              ? 'work'
              : 'proyectos'
            : v === 'contact'
              ? t.value === 'en'
                ? 'contact'
                : 'contacto'
              : v,
        u = async (v) => {
          l()
          const S = c(v)
          ;(await s.push(`/${t.value}/${S}`),
            setTimeout(() => {
              const P = n(`anchors.${v}`)
              f(P)
            }, 50))
        },
        f = (v) => {
          const S = document.getElementById(v)
          S && S.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        d = () => {
          const v = document.createElement('a')
          ;((v.href = '/Tobías Irigoyen - Resume.pdf'),
            (v.download = 'Tobías Irigoyen - Resume.pdf'),
            document.body.appendChild(v),
            v.click(),
            document.body.removeChild(v),
            l())
        },
        p = () => {
          r.name !== 'Home'
            ? s.push(`/${t.value}/`)
            : window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      return (v, S) => (
        be(),
        Te('nav', Kh, [
          K(
            'button',
            { class: 'hover:cursor-pointer button-logo', onClick: p },
            S[2] ||
              (S[2] = [
                K('h1', { class: 'invisible sr-only' }, 'Tobías Irigoyen', -1),
                K('img', { src: Hp, class: 'h-8 logo' }, null, -1),
              ]),
          ),
          K(
            'button',
            {
              onClick: o,
              class: tt(['mobile-toggle', { active: i.value }]),
              'aria-label': 'Toggle navigation',
            },
            [
              K('span', { class: tt({ active: i.value }) }, null, 2),
              K('span', { class: tt({ active: i.value }) }, null, 2),
              K('span', { class: tt({ active: i.value }) }, null, 2),
            ],
            2,
          ),
          K(
            'ul',
            { class: tt(['nav-menu', { active: i.value }]) },
            [
              K('li', null, [
                K(
                  'a',
                  {
                    class: 'text-2xl ml-16 hover:underline hover:cursor-pointer',
                    onClick: S[0] || (S[0] = (P) => u('work')),
                  },
                  we(te(n)('my-work')),
                  1,
                ),
              ]),
              K('li', null, [
                K(
                  'a',
                  {
                    class: 'text-2xl ml-16 hover:underline hover:cursor-pointer',
                    onClick: S[1] || (S[1] = (P) => u('contact')),
                  },
                  we(te(n)('contact')),
                  1,
                ),
              ]),
              K('li', null, [
                K(
                  'button',
                  {
                    onClick: d,
                    class:
                      'border border-white py-2 px-3 ml-16 bg-transparent !text-white text-2xl hover:bg-white hover:!text-black hover:cursor-pointer w-[165px]',
                  },
                  we(te(n)('my-resume')),
                  1,
                ),
              ]),
              K('li', Xh, [ge(qh)]),
            ],
            2,
          ),
        ])
      )
    },
  }),
  Qh = Zt(Jh, [['__scopeId', 'data-v-674fd0c5']]),
  Zh = { class: 'footer pt-[60px] pb-[60px]' },
  em = { class: 'flex justify-between items-center container' },
  tm = { class: 'flex items-center justify-center' },
  nm = qe({
    __name: 'footerNav',
    setup(e) {
      const { t, locale: n } = rt(),
        s = os(),
        r = (a) =>
          a === 'work'
            ? n.value === 'en'
              ? 'work'
              : 'proyectos'
            : a === 'contact'
              ? n.value === 'en'
                ? 'contact'
                : 'contacto'
              : a,
        i = async (a) => {
          const c = r(a)
          ;(await s.push(`/${n.value}/${c}`),
            setTimeout(() => {
              const u = t(`anchors.${a}`)
              o(u)
            }, 50))
        },
        o = (a) => {
          const c = document.getElementById(a)
          c && c.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        l = () => {
          const a = document.createElement('a')
          ;((a.href = '/Tobías Irigoyen - Resume.pdf'),
            (a.download = 'Tobías Irigoyen - Resume.pdf'),
            document.body.appendChild(a),
            a.click(),
            document.body.removeChild(a))
        }
      return (a, c) => (
        be(),
        Te('footer', Zh, [
          K('nav', em, [
            c[2] || (c[2] = K('span', null, '© tobias irigoyen 2025', -1)),
            K('ul', tm, [
              K('li', null, [
                K(
                  'a',
                  {
                    class: 'text-2xl ml-16 hover:underline hover:cursor-pointer',
                    onClick: c[0] || (c[0] = (u) => i('work')),
                  },
                  we(te(t)('my-work')),
                  1,
                ),
              ]),
              K('li', null, [
                K(
                  'a',
                  {
                    class: 'text-2xl ml-16 hover:underline hover:cursor-pointer',
                    onClick: c[1] || (c[1] = (u) => i('contact')),
                  },
                  we(te(t)('contact')),
                  1,
                ),
              ]),
              K('li', null, [
                K(
                  'button',
                  {
                    onClick: l,
                    class:
                      'border border-white py-2 px-3 ml-16 bg-transparent !text-white text-2xl hover:bg-white hover:!text-black hover:cursor-pointer w-[165px]',
                  },
                  we(te(t)('my-resume')),
                  1,
                ),
              ]),
            ]),
          ]),
        ])
      )
    },
  }),
  sm = Zt(nm, [['__scopeId', 'data-v-2c0d4fc0']]),
  rm = qe({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const s = gi('router-view')
        return (be(), Te(Me, null, [ge(Qh), ge(s), ge(sm)], 64))
      }
    },
  }),
  hs = [
    {
      id: 1,
      title: 'works.api-covid.title',
      slug: 'api-covid',
      description: 'works.api-covid.description',
      link: 'https://tobias-irigoyen.github.io/landing-api-covid/',
      skills: ['skills.uiux', 'skills.html5', 'skills.css3'],
      images: [
        './assets/api-covid/logo.jpg',
        './assets/api-covid/1.png',
        './assets/api-covid/2.png',
        './assets/api-covid/3.png',
      ],
    },
    {
      id: 2,
      title: 'works.fit.title',
      slug: 'fit',
      description: 'works.fit.description',
      link: 'https://facttic.org.ar/fit/',
      skills: ['skills.uiux', 'skills.vue', 'skills.html5', 'skills.css3'],
      images: [
        './assets/fit/logo.jpg',
        './assets/fit/1.png',
        './assets/fit/2.png',
        './assets/fit/3.png',
        './assets/fit/4.png',
        './assets/fit/5.png',
        './assets/fit/6.png',
        './assets/fit/7.png',
      ],
    },
    {
      id: 3,
      title: 'works.aurora.title',
      slug: 'proyecto-aurora',
      description: 'works.aurora.description',
      link: 'https://www.phaurora.com/',
      skills: ['skills.uiux', 'skills.uiux-improvements', 'skills.uiux-system'],
      images: [
        './assets/ph-aurora/logo.png',
        './assets/ph-aurora/1.png',
        './assets/ph-aurora/2.png',
        './assets/ph-aurora/3.png',
        './assets/ph-aurora/4.png',
        './assets/ph-aurora/5.png',
        './assets/ph-aurora/6.png',
        './assets/ph-aurora/7.png',
      ],
    },
    {
      id: 4,
      title: 'works.nayra.title',
      slug: 'nayra',
      description: 'works.nayra.description',
      link: 'https://nayra.coop/',
      skills: ['skills.uiux', 'skills.vue', 'skills.html5', 'skills.css3'],
      images: ['nayra/logo.jpg', 'nayra/1.png', 'nayra/2.png', 'nayra/3.png', 'nayra/4.png'],
    },
    {
      id: 5,
      title: 'works.pokedex.title',
      slug: 'pokedex',
      description: 'works.pokedex.description',
      link: 'https://tobias-irigoyen.github.io/pokedex/',
      skills: ['skills.uiux', 'skills.vue', 'skills.html5', 'skills.css3'],
      images: [
        './assets/pokedex/logo.jpg',
        './assets/pokedex/1.png',
        './assets/pokedex/2.png',
        './assets/pokedex/3.png',
        './assets/pokedex/4.png',
        './assets/pokedex/5.png',
        './assets/pokedex/6.png',
        './assets/pokedex/7.png',
      ],
    },
    {
      id: 6,
      title: 'works.naranjax.title',
      description: 'works.naranjax.description',
      slug: 'naranja-x-wallet',
      link: 'https://bit.ly/naranjax_wallet',
      skills: ['skills.uiux-refactor', 'skills.figma'],
      images: [
        './assets/naranja-x/logo.jpg',
        './assets/naranja-x/1.jpg',
        './assets/naranja-x/2.jpg',
        './assets/naranja-x/3.jpg',
        './assets/naranja-x/4.jpg',
        './assets/naranja-x/5.jpg',
        './assets/naranja-x/6.jpg',
        './assets/naranja-x/7.jpg',
      ],
    },
    {
      id: 7,
      title: 'works.icbc.title',
      description: 'works.icbc.description',
      slug: 'icbc-home-banking',
      link: 'https://bit.ly/icbc_hb',
      skills: ['skills.uiux-refactor', 'skills.figma'],
      images: [
        './assets/icbc/logo.jpg',
        './assets/icbc/1.jpg',
        './assets/icbc/2.jpg',
        './assets/icbc/3.jpg',
        './assets/icbc/4.jpg',
        './assets/icbc/5.jpg',
        './assets/icbc/6.jpg',
        './assets/icbc/7.jpg',
        './assets/icbc/8.jpg',
        './assets/icbc/9.jpg',
        './assets/icbc/10.jpg',
        './assets/icbc/11.jpg',
      ],
    },
  ]
function fl(e) {
  return e !== null && typeof e == 'object' && 'constructor' in e && e.constructor === Object
}
function Ai(e, t) {
  ;(e === void 0 && (e = {}), t === void 0 && (t = {}))
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > 'u'
        ? (e[s] = t[s])
        : fl(t[s]) && fl(e[s]) && Object.keys(t[s]).length > 0 && Ai(e[s], t[s])
    })
}
const lc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      },
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
}
function fn() {
  const e = typeof document < 'u' ? document : {}
  return (Ai(e, lc), e)
}
const im = {
  document: lc,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      },
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e)
  },
}
function Ke() {
  const e = typeof window < 'u' ? window : {}
  return (Ai(e, im), e)
}
function om(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  )
}
function lm(e) {
  const t = e
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null
    } catch {}
    try {
      delete t[n]
    } catch {}
  })
}
function ac(e, t) {
  return (t === void 0 && (t = 0), setTimeout(e, t))
}
function Os() {
  return Date.now()
}
function am(e) {
  const t = Ke()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function cm(e, t) {
  t === void 0 && (t = 'x')
  const n = Ke()
  let s, r, i
  const o = am(e)
  return (
    n.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(',').length > 6 &&
          (r = r
            .split(', ')
            .map((l) => l.replace(',', '.'))
            .join(', ')),
        (i = new n.WebKitCSSMatrix(r === 'none' ? '' : r)))
      : ((i =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (s = i.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (r = i.m41)
        : s.length === 16
          ? (r = parseFloat(s[12]))
          : (r = parseFloat(s[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (r = i.m42)
        : s.length === 16
          ? (r = parseFloat(s[13]))
          : (r = parseFloat(s[5]))),
    r || 0
  )
}
function ms(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function um(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function et() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (s != null && !um(s)) {
      const r = Object.keys(Object(s)).filter((i) => t.indexOf(i) < 0)
      for (let i = 0, o = r.length; i < o; i += 1) {
        const l = r[i],
          a = Object.getOwnPropertyDescriptor(s, l)
        a !== void 0 &&
          a.enumerable &&
          (ms(e[l]) && ms(s[l])
            ? s[l].__swiper__
              ? (e[l] = s[l])
              : et(e[l], s[l])
            : !ms(e[l]) && ms(s[l])
              ? ((e[l] = {}), s[l].__swiper__ ? (e[l] = s[l]) : et(e[l], s[l]))
              : (e[l] = s[l]))
      }
    }
  }
  return e
}
function gs(e, t, n) {
  e.style.setProperty(t, n)
}
function cc(e) {
  let { swiper: t, targetPosition: n, side: s } = e
  const r = Ke(),
    i = -t.translate
  let o = null,
    l
  const a = t.params.speed
  ;((t.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(t.cssModeFrameID))
  const c = n > i ? 'next' : 'prev',
    u = (d, p) => (c === 'next' && d >= p) || (c === 'prev' && d <= p),
    f = () => {
      ;((l = new Date().getTime()), o === null && (o = l))
      const d = Math.max(Math.min((l - o) / a, 1), 0),
        p = 0.5 - Math.cos(d * Math.PI) / 2
      let v = i + p * (n - i)
      if ((u(v, n) && (v = n), t.wrapperEl.scrollTo({ [s]: v }), u(v, n))) {
        ;((t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;((t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [s]: v }))
          }),
          r.cancelAnimationFrame(t.cssModeFrameID))
        return
      }
      t.cssModeFrameID = r.requestAnimationFrame(f)
    }
  f()
}
function St(e, t) {
  t === void 0 && (t = '')
  const n = Ke(),
    s = [...e.children]
  return (
    n.HTMLSlotElement && e instanceof HTMLSlotElement && s.push(...e.assignedElements()),
    t ? s.filter((r) => r.matches(t)) : s
  )
}
function fm(e, t) {
  const n = [t]
  for (; n.length > 0; ) {
    const s = n.shift()
    if (e === s) return !0
    n.push(
      ...s.children,
      ...(s.shadowRoot ? s.shadowRoot.children : []),
      ...(s.assignedElements ? s.assignedElements() : []),
    )
  }
}
function dm(e, t) {
  const n = Ke()
  let s = t.contains(e)
  return (
    !s &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = fm(e, t))),
    s
  )
}
function As(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function Ms(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return (n.classList.add(...(Array.isArray(t) ? t : om(t))), n)
}
function pm(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling
    ;(t ? s.matches(t) && n.push(s) : n.push(s), (e = s))
  }
  return n
}
function hm(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling
    ;(t ? s.matches(t) && n.push(s) : n.push(s), (e = s))
  }
  return n
}
function Gt(e, t) {
  return Ke().getComputedStyle(e, null).getPropertyValue(t)
}
function Rs(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function uc(e, t) {
  const n = []
  let s = e.parentElement
  for (; s; ) (t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement))
  return n
}
function Kr(e, t, n) {
  const s = Ke()
  return (
    e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      s.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top'),
    ) +
    parseFloat(
      s.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'),
    )
  )
}
function Ne(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t)
}
function Ns(e, t) {
  ;(t === void 0 && (t = ''),
    typeof trustedTypes < 'u'
      ? (e.innerHTML = trustedTypes.createPolicy('html', { createHTML: (n) => n }).createHTML(t))
      : (e.innerHTML = t))
}
let pr
function mm() {
  const e = Ke(),
    t = fn()
  return {
    smoothScroll:
      t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
    touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
  }
}
function fc() {
  return (pr || (pr = mm()), pr)
}
let hr
function gm(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = fc(),
    s = Ke(),
    r = s.navigator.platform,
    i = t || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    c = i.match(/(Android);?[\s\/]+([\d.]+)?/)
  let u = i.match(/(iPad).*OS\s([\d_]+)/)
  const f = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = r === 'Win32'
  let v = r === 'MacIntel'
  const S = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ]
  return (
    !u &&
      v &&
      n.touch &&
      S.indexOf(`${l}x${a}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)), u || (u = [0, 1, '13_0_0']), (v = !1)),
    c && !p && ((o.os = 'android'), (o.android = !0)),
    (u || d || f) && ((o.os = 'ios'), (o.ios = !0)),
    o
  )
}
function dc(e) {
  return (e === void 0 && (e = {}), hr || (hr = gm(e)), hr)
}
let mr
function vm() {
  const e = Ke(),
    t = dc()
  let n = !1
  function s() {
    const l = e.navigator.userAgent.toLowerCase()
    return l.indexOf('safari') >= 0 && l.indexOf('chrome') < 0 && l.indexOf('android') < 0
  }
  if (s()) {
    const l = String(e.navigator.userAgent)
    if (l.includes('Version/')) {
      const [a, c] = l
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((u) => Number(u))
      n = a < 16 || (a === 16 && c < 2)
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
    i = s(),
    o = i || (r && t.ios)
  return { isSafari: n || i, needPerspectiveFix: n, need3dFix: o, isWebView: r }
}
function pc() {
  return (mr || (mr = vm()), mr)
}
function bm(e) {
  let { swiper: t, on: n, emit: s } = e
  const r = Ke()
  let i = null,
    o = null
  const l = () => {
      !t || t.destroyed || !t.initialized || (s('beforeResize'), s('resize'))
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((i = new ResizeObserver((f) => {
          o = r.requestAnimationFrame(() => {
            const { width: d, height: p } = t
            let v = d,
              S = p
            ;(f.forEach((P) => {
              let { contentBoxSize: m, contentRect: h, target: g } = P
              ;(g && g !== t.el) ||
                ((v = h ? h.width : (m[0] || m).inlineSize),
                (S = h ? h.height : (m[0] || m).blockSize))
            }),
              (v !== d || S !== p) && l())
          })
        })),
        i.observe(t.el))
    },
    c = () => {
      ;(o && r.cancelAnimationFrame(o), i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)))
    },
    u = () => {
      !t || t.destroyed || !t.initialized || s('orientationchange')
    }
  ;(n('init', () => {
    if (t.params.resizeObserver && typeof r.ResizeObserver < 'u') {
      a()
      return
    }
    ;(r.addEventListener('resize', l), r.addEventListener('orientationchange', u))
  }),
    n('destroy', () => {
      ;(c(), r.removeEventListener('resize', l), r.removeEventListener('orientationchange', u))
    }))
}
function _m(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
  const i = [],
    o = Ke(),
    l = function (u, f) {
      f === void 0 && (f = {})
      const d = o.MutationObserver || o.WebkitMutationObserver,
        p = new d((v) => {
          if (t.__preventObserver__) return
          if (v.length === 1) {
            r('observerUpdate', v[0])
            return
          }
          const S = function () {
            r('observerUpdate', v[0])
          }
          o.requestAnimationFrame ? o.requestAnimationFrame(S) : o.setTimeout(S, 0)
        })
      ;(p.observe(u, {
        attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
        childList: t.isElement || (typeof f.childList > 'u' ? !0 : f).childList,
        characterData: typeof f.characterData > 'u' ? !0 : f.characterData,
      }),
        i.push(p))
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = uc(t.hostEl)
          for (let f = 0; f < u.length; f += 1) l(u[f])
        }
        ;(l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 }))
      }
    },
    c = () => {
      ;(i.forEach((u) => {
        u.disconnect()
      }),
        i.splice(0, i.length))
    }
  ;(n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', a),
    s('destroy', c))
}
var ym = {
  on(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s
    const r = n ? 'unshift' : 'push'
    return (
      e.split(' ').forEach((i) => {
        ;(s.eventsListeners[i] || (s.eventsListeners[i] = []), s.eventsListeners[i][r](t))
      }),
      s
    )
  },
  once(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s
    function r() {
      ;(s.off(e, r), r.__emitterProxy && delete r.__emitterProxy)
      for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l]
      t.apply(s, o)
    }
    return ((r.__emitterProxy = t), s.on(e, r, n))
  },
  onAny(e, t) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n
    const s = t ? 'unshift' : 'push'
    return (n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n)
  },
  offAny(e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
    const n = t.eventsAnyListeners.indexOf(e)
    return (n >= 0 && t.eventsAnyListeners.splice(n, 1), t)
  },
  off(e, t) {
    const n = this
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach((s) => {
          typeof t > 'u'
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((r, i) => {
                ;(r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(i, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, s
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
    return (
      typeof i[0] == 'string' || Array.isArray(i[0])
        ? ((t = i[0]), (n = i.slice(1, i.length)), (s = e))
        : ((t = i[0].events), (n = i[0].data), (s = i[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(' ')).forEach((a) => {
        ;(e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(s, [a, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((c) => {
              c.apply(s, n)
            }))
      }),
      e
    )
  },
}
function wm() {
  const e = this
  let t, n
  const s = e.el
  ;(typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t - parseInt(Gt(s, 'padding-left') || 0, 10) - parseInt(Gt(s, 'padding-right') || 0, 10)),
      (n =
        n - parseInt(Gt(s, 'padding-top') || 0, 10) - parseInt(Gt(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n })))
}
function Sm() {
  const e = this
  function t(B, V) {
    return parseFloat(B.getPropertyValue(e.getDirectionLabel(V)) || 0)
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: r, size: i, rtlTranslate: o, wrongRTL: l } = e,
    a = e.virtual && n.virtual.enabled,
    c = a ? e.virtual.slides.length : e.slides.length,
    u = St(r, `.${e.params.slideClass}, swiper-slide`),
    f = a ? e.virtual.slides.length : u.length
  let d = []
  const p = [],
    v = []
  let S = n.slidesOffsetBefore
  typeof S == 'function' && (S = n.slidesOffsetBefore.call(e))
  let P = n.slidesOffsetAfter
  typeof P == 'function' && (P = n.slidesOffsetAfter.call(e))
  const m = e.snapGrid.length,
    h = e.slidesGrid.length
  let g = n.spaceBetween,
    _ = -S,
    T = 0,
    O = 0
  if (typeof i > 'u') return
  ;(typeof g == 'string' && g.indexOf('%') >= 0
    ? (g = (parseFloat(g.replace('%', '')) / 100) * i)
    : typeof g == 'string' && (g = parseFloat(g)),
    (e.virtualSize = -g),
    u.forEach((B) => {
      ;(o ? (B.style.marginLeft = '') : (B.style.marginRight = ''),
        (B.style.marginBottom = ''),
        (B.style.marginTop = ''))
    }),
    n.centeredSlides &&
      n.cssMode &&
      (gs(s, '--swiper-centered-offset-before', ''), gs(s, '--swiper-centered-offset-after', '')))
  const k = n.grid && n.grid.rows > 1 && e.grid
  k ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides()
  let j
  const M =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter((B) => typeof n.breakpoints[B].slidesPerView < 'u').length > 0
  for (let B = 0; B < f; B += 1) {
    j = 0
    let V
    if (
      (u[B] && (V = u[B]), k && e.grid.updateSlide(B, V, u), !(u[B] && Gt(V, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        M && (u[B].style[e.getDirectionLabel('width')] = '')
        const G = getComputedStyle(V),
          J = V.style.transform,
          oe = V.style.webkitTransform
        if (
          (J && (V.style.transform = 'none'),
          oe && (V.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          j = e.isHorizontal() ? Kr(V, 'width') : Kr(V, 'height')
        else {
          const le = t(G, 'width'),
            Y = t(G, 'padding-left'),
            Q = t(G, 'padding-right'),
            Z = t(G, 'margin-left'),
            he = t(G, 'margin-right'),
            Be = G.getPropertyValue('box-sizing')
          if (Be && Be === 'border-box') j = le + Z + he
          else {
            const { clientWidth: De, offsetWidth: ke } = V
            j = le + Y + Q + Z + he + (ke - De)
          }
        }
        ;(J && (V.style.transform = J),
          oe && (V.style.webkitTransform = oe),
          n.roundLengths && (j = Math.floor(j)))
      } else
        ((j = (i - (n.slidesPerView - 1) * g) / n.slidesPerView),
          n.roundLengths && (j = Math.floor(j)),
          u[B] && (u[B].style[e.getDirectionLabel('width')] = `${j}px`))
      ;(u[B] && (u[B].swiperSlideSize = j),
        v.push(j),
        n.centeredSlides
          ? ((_ = _ + j / 2 + T / 2 + g),
            T === 0 && B !== 0 && (_ = _ - i / 2 - g),
            B === 0 && (_ = _ - i / 2 - g),
            Math.abs(_) < 1 / 1e3 && (_ = 0),
            n.roundLengths && (_ = Math.floor(_)),
            O % n.slidesPerGroup === 0 && d.push(_),
            p.push(_))
          : (n.roundLengths && (_ = Math.floor(_)),
            (O - Math.min(e.params.slidesPerGroupSkip, O)) % e.params.slidesPerGroup === 0 &&
              d.push(_),
            p.push(_),
            (_ = _ + j + g)),
        (e.virtualSize += j + g),
        (T = j),
        (O += 1))
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, i) + P),
    o &&
      l &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (s.style.width = `${e.virtualSize + g}px`),
    n.setWrapperSize && (s.style[e.getDirectionLabel('width')] = `${e.virtualSize + g}px`),
    k && e.grid.updateWrapperSize(j, d),
    !n.centeredSlides)
  ) {
    const B = []
    for (let V = 0; V < d.length; V += 1) {
      let G = d[V]
      ;(n.roundLengths && (G = Math.floor(G)), d[V] <= e.virtualSize - i && B.push(G))
    }
    ;((d = B),
      Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i))
  }
  if (a && n.loop) {
    const B = v[0] + g
    if (n.slidesPerGroup > 1) {
      const V = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
        G = B * n.slidesPerGroup
      for (let J = 0; J < V; J += 1) d.push(d[d.length - 1] + G)
    }
    for (let V = 0; V < e.virtual.slidesBefore + e.virtual.slidesAfter; V += 1)
      (n.slidesPerGroup === 1 && d.push(d[d.length - 1] + B),
        p.push(p[p.length - 1] + B),
        (e.virtualSize += B))
  }
  if ((d.length === 0 && (d = [0]), g !== 0)) {
    const B = e.isHorizontal() && o ? 'marginLeft' : e.getDirectionLabel('marginRight')
    u.filter((V, G) => (!n.cssMode || n.loop ? !0 : G !== u.length - 1)).forEach((V) => {
      V.style[B] = `${g}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let B = 0
    ;(v.forEach((G) => {
      B += G + (g || 0)
    }),
      (B -= g))
    const V = B > i ? B - i : 0
    d = d.map((G) => (G <= 0 ? -S : G > V ? V + P : G))
  }
  if (n.centerInsufficientSlides) {
    let B = 0
    ;(v.forEach((G) => {
      B += G + (g || 0)
    }),
      (B -= g))
    const V = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (B + V < i) {
      const G = (i - B - V) / 2
      ;(d.forEach((J, oe) => {
        d[oe] = J - G
      }),
        p.forEach((J, oe) => {
          p[oe] = J + G
        }))
    }
  }
  if (
    (Object.assign(e, { slides: u, snapGrid: d, slidesGrid: p, slidesSizesGrid: v }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ;(gs(s, '--swiper-centered-offset-before', `${-d[0]}px`),
      gs(s, '--swiper-centered-offset-after', `${e.size / 2 - v[v.length - 1] / 2}px`))
    const B = -e.snapGrid[0],
      V = -e.slidesGrid[0]
    ;((e.snapGrid = e.snapGrid.map((G) => G + B)), (e.slidesGrid = e.slidesGrid.map((G) => G + V)))
  }
  if (
    (f !== c && e.emit('slidesLengthChange'),
    d.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
    p.length !== h && e.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !a && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const B = `${n.containerModifierClass}backface-hidden`,
      V = e.el.classList.contains(B)
    f <= n.maxBackfaceHiddenSlides ? V || e.el.classList.add(B) : V && e.el.classList.remove(B)
  }
}
function Em(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled
  let r = 0,
    i
  typeof e == 'number' ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed)
  const o = (l) => (s ? t.slides[t.getSlideIndexByData(l)] : t.slides[l])
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l)
      })
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const l = t.activeIndex + i
        if (l > t.slides.length && !s) break
        n.push(o(l))
      }
  else n.push(o(t.activeIndex))
  for (i = 0; i < n.length; i += 1)
    if (typeof n[i] < 'u') {
      const l = n[i].offsetHeight
      r = l > r ? l : r
    }
  ;(r || r === 0) && (t.wrapperEl.style.height = `${r}px`)
}
function Tm() {
  const e = this,
    t = e.slides,
    n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - n - e.cssOverflowAdjustment()
}
const dl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function xm(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: r, snapGrid: i } = t
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
  let o = -e
  ;(r && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []))
  let l = n.spaceBetween
  typeof l == 'string' && l.indexOf('%') >= 0
    ? (l = (parseFloat(l.replace('%', '')) / 100) * t.size)
    : typeof l == 'string' && (l = parseFloat(l))
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a]
    let u = c.swiperSlideOffset
    n.cssMode && n.centeredSlides && (u -= s[0].swiperSlideOffset)
    const f = (o + (n.centeredSlides ? t.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
      d = (o - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) / (c.swiperSlideSize + l),
      p = -(o - u),
      v = p + t.slidesSizesGrid[a],
      S = p >= 0 && p <= t.size - t.slidesSizesGrid[a],
      P = (p >= 0 && p < t.size - 1) || (v > 1 && v <= t.size) || (p <= 0 && v >= t.size)
    ;(P && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(a)),
      dl(c, P, n.slideVisibleClass),
      dl(c, S, n.slideFullyVisibleClass),
      (c.progress = r ? -f : f),
      (c.originalProgress = r ? -d : d))
  }
}
function Cm(e) {
  const t = this
  if (typeof e > 'u') {
    const u = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * u) || 0
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate()
  let { progress: r, isBeginning: i, isEnd: o, progressLoop: l } = t
  const a = i,
    c = o
  if (s === 0) ((r = 0), (i = !0), (o = !0))
  else {
    r = (e - t.minTranslate()) / s
    const u = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1
    ;((i = u || r <= 0), (o = f || r >= 1), u && (r = 0), f && (r = 1))
  }
  if (n.loop) {
    const u = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      d = t.slidesGrid[u],
      p = t.slidesGrid[f],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      S = Math.abs(e)
    ;(S >= d ? (l = (S - d) / v) : (l = (S + v - p) / v), l > 1 && (l -= 1))
  }
  ;(Object.assign(t, { progress: r, progressLoop: l, isBeginning: i, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
    i && !a && t.emit('reachBeginning toEdge'),
    o && !c && t.emit('reachEnd toEdge'),
    ((a && !i) || (c && !o)) && t.emit('fromEdge'),
    t.emit('progress', r))
}
const gr = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function Pm() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: r } = e,
    i = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (f) => St(s, `.${n.slideClass}${f}, swiper-slide${f}`)[0]
  let a, c, u
  if (i)
    if (n.loop) {
      let f = r - e.virtual.slidesBefore
      ;(f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${f}"]`)))
    } else a = l(`[data-swiper-slide-index="${r}"]`)
  else
    o
      ? ((a = t.find((f) => f.column === r)),
        (u = t.find((f) => f.column === r + 1)),
        (c = t.find((f) => f.column === r - 1)))
      : (a = t[r])
  ;(a &&
    (o ||
      ((u = hm(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = t[0]),
      (c = pm(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((f) => {
      ;(gr(f, f === a, n.slideActiveClass),
        gr(f, f === u, n.slideNextClass),
        gr(f, f === c, n.slidePrevClass))
    }),
    e.emitSlidesClasses())
}
const Ss = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      s = t.closest(n())
    if (s) {
      let r = s.querySelector(`.${e.params.lazyPreloaderClass}`)
      ;(!r &&
        e.isElement &&
        (s.shadowRoot
          ? (r = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((r = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
                r && r.remove())
            })),
        r && r.remove())
    }
  },
  vr = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute('loading')
  },
  Xr = (e) => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const s =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      r = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = r,
        l = [o - t]
      ;(l.push(...Array.from({ length: t }).map((a, c) => o + s + c)),
        e.slides.forEach((a, c) => {
          l.includes(a.column) && vr(e, c)
        }))
      return
    }
    const i = r + s - 1
    if (e.params.rewind || e.params.loop)
      for (let o = r - t; o <= i + t; o += 1) {
        const l = ((o % n) + n) % n
        ;(l < r || l > i) && vr(e, l)
      }
    else
      for (let o = Math.max(r - t, 0); o <= Math.min(i + t, n - 1); o += 1)
        o !== r && (o > i || o < r) && vr(e, o)
  }
function Im(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate
  let r
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < 'u'
      ? s >= t[i] && s < t[i + 1] - (t[i + 1] - t[i]) / 2
        ? (r = i)
        : s >= t[i] && s < t[i + 1] && (r = i + 1)
      : s >= t[i] && (r = i)
  return (n.normalizeSlideIndex && (r < 0 || typeof r > 'u') && (r = 0), r)
}
function km(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: r, activeIndex: i, realIndex: o, snapIndex: l } = t
  let a = e,
    c
  const u = (p) => {
    let v = p - t.virtual.slidesBefore
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    )
  }
  if ((typeof a > 'u' && (a = Im(t)), s.indexOf(n) >= 0)) c = s.indexOf(n)
  else {
    const p = Math.min(r.slidesPerGroupSkip, a)
    c = p + Math.floor((a - p) / r.slidesPerGroup)
  }
  if ((c >= s.length && (c = s.length - 1), a === i && !t.params.loop)) {
    c !== l && ((t.snapIndex = c), t.emit('snapIndexChange'))
    return
  }
  if (a === i && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(a)
    return
  }
  const f = t.grid && r.grid && r.grid.rows > 1
  let d
  if (t.virtual && r.virtual.enabled && r.loop) d = u(a)
  else if (f) {
    const p = t.slides.find((S) => S.column === a)
    let v = parseInt(p.getAttribute('data-swiper-slide-index'), 10)
    ;(Number.isNaN(v) && (v = Math.max(t.slides.indexOf(p), 0)), (d = Math.floor(v / r.grid.rows)))
  } else if (t.slides[a]) {
    const p = t.slides[a].getAttribute('data-swiper-slide-index')
    p ? (d = parseInt(p, 10)) : (d = a)
  } else d = a
  ;(Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: d,
    previousIndex: i,
    activeIndex: a,
  }),
    t.initialized && Xr(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== d && t.emit('realIndexChange'), t.emit('slideChange')))
}
function Lm(e, t) {
  const n = this,
    s = n.params
  let r = e.closest(`.${s.slideClass}, swiper-slide`)
  !r &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !r && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (r = l)
    })
  let i = !1,
    o
  if (r) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === r) {
        ;((i = !0), (o = l))
        break
      }
  }
  if (r && i)
    ((n.clickedSlide = r),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10))
        : (n.clickedIndex = o))
  else {
    ;((n.clickedSlide = void 0), (n.clickedIndex = void 0))
    return
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var Om = {
  updateSize: wm,
  updateSlides: Sm,
  updateAutoHeight: Em,
  updateSlidesOffset: Tm,
  updateSlidesProgress: xm,
  updateProgress: Cm,
  updateSlidesClasses: Pm,
  updateActiveIndex: km,
  updateClickedSlide: Lm,
}
function Am(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
  const t = this,
    { params: n, rtlTranslate: s, translate: r, wrapperEl: i } = t
  if (n.virtualTranslate) return s ? -r : r
  if (n.cssMode) return r
  let o = cm(i, e)
  return ((o += t.cssOverflowAdjustment()), s && (o = -o), o || 0)
}
function Mm(e, t) {
  const n = this,
    { rtlTranslate: s, params: r, wrapperEl: i, progress: o } = n
  let l = 0,
    a = 0
  const c = 0
  ;(n.isHorizontal() ? (l = s ? -e : e) : (a = e),
    r.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    r.cssMode
      ? (i[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -l : -a)
      : r.virtualTranslate ||
        (n.isHorizontal() ? (l -= n.cssOverflowAdjustment()) : (a -= n.cssOverflowAdjustment()),
        (i.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`)))
  let u
  const f = n.maxTranslate() - n.minTranslate()
  ;(f === 0 ? (u = 0) : (u = (e - n.minTranslate()) / f),
    u !== o && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t))
}
function Rm() {
  return -this.snapGrid[0]
}
function Nm() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function Dm(e, t, n, s, r) {
  ;(e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0))
  const i = this,
    { params: o, wrapperEl: l } = i
  if (i.animating && o.preventInteractionOnTransition) return !1
  const a = i.minTranslate(),
    c = i.maxTranslate()
  let u
  if ((s && e > a ? (u = a) : s && e < c ? (u = c) : (u = e), i.updateProgress(u), o.cssMode)) {
    const f = i.isHorizontal()
    if (t === 0) l[f ? 'scrollLeft' : 'scrollTop'] = -u
    else {
      if (!i.support.smoothScroll)
        return (cc({ swiper: i, targetPosition: -u, side: f ? 'left' : 'top' }), !0)
      l.scrollTo({ [f ? 'left' : 'top']: -u, behavior: 'smooth' })
    }
    return !0
  }
  return (
    t === 0
      ? (i.setTransition(0),
        i.setTranslate(u),
        n && (i.emit('beforeTransitionStart', t, r), i.emit('transitionEnd')))
      : (i.setTransition(t),
        i.setTranslate(u),
        n && (i.emit('beforeTransitionStart', t, r), i.emit('transitionStart')),
        i.animating ||
          ((i.animating = !0),
          i.onTranslateToWrapperTransitionEnd ||
            (i.onTranslateToWrapperTransitionEnd = function (d) {
              !i ||
                i.destroyed ||
                (d.target === this &&
                  (i.wrapperEl.removeEventListener(
                    'transitionend',
                    i.onTranslateToWrapperTransitionEnd,
                  ),
                  (i.onTranslateToWrapperTransitionEnd = null),
                  delete i.onTranslateToWrapperTransitionEnd,
                  (i.animating = !1),
                  n && i.emit('transitionEnd')))
            }),
          i.wrapperEl.addEventListener('transitionend', i.onTranslateToWrapperTransitionEnd))),
    !0
  )
}
var Fm = { getTranslate: Am, setTranslate: Mm, minTranslate: Rm, maxTranslate: Nm, translateTo: Dm }
function $m(e, t) {
  const n = this
  ;(n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t))
}
function hc(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: r } = e
  const { activeIndex: i, previousIndex: o } = t
  let l = s
  ;(l || (i > o ? (l = 'next') : i < o ? (l = 'prev') : (l = 'reset')),
    t.emit(`transition${r}`),
    n && l === 'reset'
      ? t.emit(`slideResetTransition${r}`)
      : n &&
        i !== o &&
        (t.emit(`slideChangeTransition${r}`),
        l === 'next' ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)))
}
function Bm(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    hc({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function jm(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  ;((n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0), hc({ swiper: n, runCallbacks: e, direction: t, step: 'End' })))
}
var Vm = { setTransition: $m, transitionStart: Bm, transitionEnd: jm }
function Hm(e, t, n, s, r) {
  ;(e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10)))
  const i = this
  let o = e
  o < 0 && (o = 0)
  const {
    params: l,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: f,
    rtlTranslate: d,
    wrapperEl: p,
    enabled: v,
  } = i
  if ((!v && !s && !r) || i.destroyed || (i.animating && l.preventInteractionOnTransition))
    return !1
  typeof t > 'u' && (t = i.params.speed)
  const S = Math.min(i.params.slidesPerGroupSkip, o)
  let P = S + Math.floor((o - S) / i.params.slidesPerGroup)
  P >= a.length && (P = a.length - 1)
  const m = -a[P]
  if (l.normalizeSlideIndex)
    for (let k = 0; k < c.length; k += 1) {
      const j = -Math.floor(m * 100),
        M = Math.floor(c[k] * 100),
        B = Math.floor(c[k + 1] * 100)
      typeof c[k + 1] < 'u'
        ? j >= M && j < B - (B - M) / 2
          ? (o = k)
          : j >= M && j < B && (o = k + 1)
        : j >= M && (o = k)
    }
  if (
    i.initialized &&
    o !== f &&
    ((!i.allowSlideNext &&
      (d ? m > i.translate && m > i.minTranslate() : m < i.translate && m < i.minTranslate())) ||
      (!i.allowSlidePrev && m > i.translate && m > i.maxTranslate() && (f || 0) !== o))
  )
    return !1
  ;(o !== (u || 0) && n && i.emit('beforeSlideChangeStart'), i.updateProgress(m))
  let h
  o > f ? (h = 'next') : o < f ? (h = 'prev') : (h = 'reset')
  const g = i.virtual && i.params.virtual.enabled
  if (!(g && r) && ((d && -m === i.translate) || (!d && m === i.translate)))
    return (
      i.updateActiveIndex(o),
      l.autoHeight && i.updateAutoHeight(),
      i.updateSlidesClasses(),
      l.effect !== 'slide' && i.setTranslate(m),
      h !== 'reset' && (i.transitionStart(n, h), i.transitionEnd(n, h)),
      !1
    )
  if (l.cssMode) {
    const k = i.isHorizontal(),
      j = d ? m : -m
    if (t === 0)
      (g && ((i.wrapperEl.style.scrollSnapType = 'none'), (i._immediateVirtual = !0)),
        g && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0
          ? ((i._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[k ? 'scrollLeft' : 'scrollTop'] = j
            }))
          : (p[k ? 'scrollLeft' : 'scrollTop'] = j),
        g &&
          requestAnimationFrame(() => {
            ;((i.wrapperEl.style.scrollSnapType = ''), (i._immediateVirtual = !1))
          }))
    else {
      if (!i.support.smoothScroll)
        return (cc({ swiper: i, targetPosition: j, side: k ? 'left' : 'top' }), !0)
      p.scrollTo({ [k ? 'left' : 'top']: j, behavior: 'smooth' })
    }
    return !0
  }
  const O = pc().isSafari
  return (
    g && !r && O && i.isElement && i.virtual.update(!1, !1, o),
    i.setTransition(t),
    i.setTranslate(m),
    i.updateActiveIndex(o),
    i.updateSlidesClasses(),
    i.emit('beforeTransitionStart', t, s),
    i.transitionStart(n, h),
    t === 0
      ? i.transitionEnd(n, h)
      : i.animating ||
        ((i.animating = !0),
        i.onSlideToWrapperTransitionEnd ||
          (i.onSlideToWrapperTransitionEnd = function (j) {
            !i ||
              i.destroyed ||
              (j.target === this &&
                (i.wrapperEl.removeEventListener('transitionend', i.onSlideToWrapperTransitionEnd),
                (i.onSlideToWrapperTransitionEnd = null),
                delete i.onSlideToWrapperTransitionEnd,
                i.transitionEnd(n, h)))
          }),
        i.wrapperEl.addEventListener('transitionend', i.onSlideToWrapperTransitionEnd)),
    !0
  )
}
function Wm(e, t, n, s) {
  ;(e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10)))
  const r = this
  if (r.destroyed) return
  typeof t > 'u' && (t = r.params.speed)
  const i = r.grid && r.params.grid && r.params.grid.rows > 1
  let o = e
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore
    else {
      let l
      if (i) {
        const d = o * r.params.grid.rows
        l = r.slides.find((p) => p.getAttribute('data-swiper-slide-index') * 1 === d).column
      } else l = r.getSlideIndexByData(o)
      const a = i ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
        { centeredSlides: c } = r.params
      let u = r.params.slidesPerView
      u === 'auto'
        ? (u = r.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))), c && u % 2 === 0 && (u = u + 1))
      let f = a - l < u
      if (
        (c && (f = f || l < Math.ceil(u / 2)),
        s && c && r.params.slidesPerView !== 'auto' && !i && (f = !1),
        f)
      ) {
        const d = c
          ? l < r.activeIndex
            ? 'prev'
            : 'next'
          : l - r.activeIndex - 1 < r.params.slidesPerView
            ? 'next'
            : 'prev'
        r.loopFix({
          direction: d,
          slideTo: !0,
          activeSlideIndex: d === 'next' ? l + 1 : l - a + 1,
          slideRealIndex: d === 'next' ? r.realIndex : void 0,
        })
      }
      if (i) {
        const d = o * r.params.grid.rows
        o = r.slides.find((p) => p.getAttribute('data-swiper-slide-index') * 1 === d).column
      } else o = r.getSlideIndexByData(o)
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(o, t, n, s)
    }),
    r
  )
}
function Um(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    { enabled: r, params: i, animating: o } = s
  if (!r || s.destroyed) return s
  typeof e > 'u' && (e = s.params.speed)
  let l = i.slidesPerGroup
  i.slidesPerView === 'auto' &&
    i.slidesPerGroup === 1 &&
    i.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic('current', !0), 1))
  const a = s.activeIndex < i.slidesPerGroupSkip ? 1 : l,
    c = s.virtual && i.virtual.enabled
  if (i.loop) {
    if (o && !c && i.loopPreventsSliding) return !1
    if (
      (s.loopFix({ direction: 'next' }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && i.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, e, t, n)
        }),
        !0
      )
  }
  return i.rewind && s.isEnd ? s.slideTo(0, e, t, n) : s.slideTo(s.activeIndex + a, e, t, n)
}
function Gm(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    { params: r, snapGrid: i, slidesGrid: o, rtlTranslate: l, enabled: a, animating: c } = s
  if (!a || s.destroyed) return s
  typeof e > 'u' && (e = s.params.speed)
  const u = s.virtual && r.virtual.enabled
  if (r.loop) {
    if (c && !u && r.loopPreventsSliding) return !1
    ;(s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft))
  }
  const f = l ? s.translate : -s.translate
  function d(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
  }
  const p = d(f),
    v = i.map((h) => d(h)),
    S = r.freeMode && r.freeMode.enabled
  let P = i[v.indexOf(p) - 1]
  if (typeof P > 'u' && (r.cssMode || S)) {
    let h
    ;(i.forEach((g, _) => {
      p >= g && (h = _)
    }),
      typeof h < 'u' && (P = S ? i[h] : i[h > 0 ? h - 1 : h]))
  }
  let m = 0
  if (
    (typeof P < 'u' &&
      ((m = o.indexOf(P)),
      m < 0 && (m = s.activeIndex - 1),
      r.slidesPerView === 'auto' &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((m = m - s.slidesPerViewDynamic('previous', !0) + 1), (m = Math.max(m, 0)))),
    r.rewind && s.isBeginning)
  ) {
    const h =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1
    return s.slideTo(h, e, t, n)
  } else if (r.loop && s.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(m, e, t, n)
      }),
      !0
    )
  return s.slideTo(m, e, t, n)
}
function zm(e, t, n) {
  t === void 0 && (t = !0)
  const s = this
  if (!s.destroyed)
    return (typeof e > 'u' && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, n))
}
function Ym(e, t, n, s) {
  ;(t === void 0 && (t = !0), s === void 0 && (s = 0.5))
  const r = this
  if (r.destroyed) return
  typeof e > 'u' && (e = r.params.speed)
  let i = r.activeIndex
  const o = Math.min(r.params.slidesPerGroupSkip, i),
    l = o + Math.floor((i - o) / r.params.slidesPerGroup),
    a = r.rtlTranslate ? r.translate : -r.translate
  if (a >= r.snapGrid[l]) {
    const c = r.snapGrid[l],
      u = r.snapGrid[l + 1]
    a - c > (u - c) * s && (i += r.params.slidesPerGroup)
  } else {
    const c = r.snapGrid[l - 1],
      u = r.snapGrid[l]
    a - c <= (u - c) * s && (i -= r.params.slidesPerGroup)
  }
  return ((i = Math.max(i, 0)), (i = Math.min(i, r.slidesGrid.length - 1)), r.slideTo(i, e, t, n))
}
function qm() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    s = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
  let r = e.getSlideIndexWhenGrid(e.clickedIndex),
    i
  const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`,
    l = e.grid && e.params.grid && e.params.grid.rows > 1
  if (t.loop) {
    if (e.animating) return
    ;((i = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? e.slideToLoop(i)
        : r > (l ? (e.slides.length - s) / 2 - (e.params.grid.rows - 1) : e.slides.length - s)
          ? (e.loopFix(),
            (r = e.getSlideIndex(St(n, `${o}[data-swiper-slide-index="${i}"]`)[0])),
            ac(() => {
              e.slideTo(r)
            }))
          : e.slideTo(r))
  } else e.slideTo(r)
}
var Km = {
  slideTo: Hm,
  slideToLoop: Wm,
  slideNext: Um,
  slidePrev: Gm,
  slideReset: zm,
  slideToClosest: Ym,
  slideToClickedSlide: qm,
}
function Xm(e, t) {
  const n = this,
    { params: s, slidesEl: r } = n
  if (!s.loop || (n.virtual && n.params.virtual.enabled)) return
  const i = () => {
      St(r, `.${s.slideClass}, swiper-slide`).forEach((p, v) => {
        p.setAttribute('data-swiper-slide-index', v)
      })
    },
    o = () => {
      const d = St(r, `.${s.slideBlankClass}`)
      ;(d.forEach((p) => {
        p.remove()
      }),
        d.length > 0 && (n.recalcSlides(), n.updateSlides()))
    },
    l = n.grid && s.grid && s.grid.rows > 1
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || l) && o()
  const a = s.slidesPerGroup * (l ? s.grid.rows : 1),
    c = n.slides.length % a !== 0,
    u = l && n.slides.length % s.grid.rows !== 0,
    f = (d) => {
      for (let p = 0; p < d; p += 1) {
        const v = n.isElement
          ? Ms('swiper-slide', [s.slideBlankClass])
          : Ms('div', [s.slideClass, s.slideBlankClass])
        n.slidesEl.append(v)
      }
    }
  if (c) {
    if (s.loopAddBlankSlides) {
      const d = a - (n.slides.length % a)
      ;(f(d), n.recalcSlides(), n.updateSlides())
    } else
      As(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      )
    i()
  } else if (u) {
    if (s.loopAddBlankSlides) {
      const d = s.grid.rows - (n.slides.length % s.grid.rows)
      ;(f(d), n.recalcSlides(), n.updateSlides())
    } else
      As(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      )
    i()
  } else i()
  n.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : 'next', initial: t })
}
function Jm(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: r,
    activeSlideIndex: i,
    initial: o,
    byController: l,
    byMousewheel: a,
  } = e === void 0 ? {} : e
  const c = this
  if (!c.params.loop) return
  c.emit('beforeLoopFix')
  const { slides: u, allowSlidePrev: f, allowSlideNext: d, slidesEl: p, params: v } = c,
    { centeredSlides: S, initialSlide: P } = v
  if (((c.allowSlidePrev = !0), (c.allowSlideNext = !0), c.virtual && v.virtual.enabled)) {
    ;(n &&
      (!v.centeredSlides && c.snapIndex === 0
        ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && c.snapIndex < v.slidesPerView
          ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
          : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
      (c.allowSlidePrev = f),
      (c.allowSlideNext = d),
      c.emit('loopFix'))
    return
  }
  let m = v.slidesPerView
  m === 'auto'
    ? (m = c.slidesPerViewDynamic())
    : ((m = Math.ceil(parseFloat(v.slidesPerView, 10))), S && m % 2 === 0 && (m = m + 1))
  const h = v.slidesPerGroupAuto ? m : v.slidesPerGroup
  let g = S ? Math.max(h, Math.ceil(m / 2)) : h
  ;(g % h !== 0 && (g += h - (g % h)), (g += v.loopAdditionalSlides), (c.loopedSlides = g))
  const _ = c.grid && v.grid && v.grid.rows > 1
  u.length < m + g || (c.params.effect === 'cards' && u.length < m + g * 2)
    ? As(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
      )
    : _ &&
      v.grid.fill === 'row' &&
      As('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`')
  const T = [],
    O = [],
    k = _ ? Math.ceil(u.length / v.grid.rows) : u.length,
    j = o && k - P < m && !S
  let M = j ? P : c.activeIndex
  typeof i > 'u'
    ? (i = c.getSlideIndex(u.find((Y) => Y.classList.contains(v.slideActiveClass))))
    : (M = i)
  const B = s === 'next' || !s,
    V = s === 'prev' || !s
  let G = 0,
    J = 0
  const le = (_ ? u[i].column : i) + (S && typeof r > 'u' ? -m / 2 + 0.5 : 0)
  if (le < g) {
    G = Math.max(g - le, h)
    for (let Y = 0; Y < g - le; Y += 1) {
      const Q = Y - Math.floor(Y / k) * k
      if (_) {
        const Z = k - Q - 1
        for (let he = u.length - 1; he >= 0; he -= 1) u[he].column === Z && T.push(he)
      } else T.push(k - Q - 1)
    }
  } else if (le + m > k - g) {
    ;((J = Math.max(le - (k - g * 2), h)), j && (J = Math.max(J, m - k + P + 1)))
    for (let Y = 0; Y < J; Y += 1) {
      const Q = Y - Math.floor(Y / k) * k
      _
        ? u.forEach((Z, he) => {
            Z.column === Q && O.push(he)
          })
        : O.push(Q)
    }
  }
  if (
    ((c.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      c.__preventObserver__ = !1
    }),
    c.params.effect === 'cards' &&
      u.length < m + g * 2 &&
      (O.includes(i) && O.splice(O.indexOf(i), 1), T.includes(i) && T.splice(T.indexOf(i), 1)),
    V &&
      T.forEach((Y) => {
        ;((u[Y].swiperLoopMoveDOM = !0), p.prepend(u[Y]), (u[Y].swiperLoopMoveDOM = !1))
      }),
    B &&
      O.forEach((Y) => {
        ;((u[Y].swiperLoopMoveDOM = !0), p.append(u[Y]), (u[Y].swiperLoopMoveDOM = !1))
      }),
    c.recalcSlides(),
    v.slidesPerView === 'auto'
      ? c.updateSlides()
      : _ &&
        ((T.length > 0 && V) || (O.length > 0 && B)) &&
        c.slides.forEach((Y, Q) => {
          c.grid.updateSlide(Q, Y, c.slides)
        }),
    v.watchSlidesProgress && c.updateSlidesOffset(),
    n)
  ) {
    if (T.length > 0 && V) {
      if (typeof t > 'u') {
        const Y = c.slidesGrid[M],
          Z = c.slidesGrid[M + G] - Y
        a
          ? c.setTranslate(c.translate - Z)
          : (c.slideTo(M + Math.ceil(G), 0, !1, !0),
            r &&
              ((c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - Z),
              (c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - Z)))
      } else if (r) {
        const Y = _ ? T.length / v.grid.rows : T.length
        ;(c.slideTo(c.activeIndex + Y, 0, !1, !0),
          (c.touchEventsData.currentTranslate = c.translate))
      }
    } else if (O.length > 0 && B)
      if (typeof t > 'u') {
        const Y = c.slidesGrid[M],
          Z = c.slidesGrid[M - J] - Y
        a
          ? c.setTranslate(c.translate - Z)
          : (c.slideTo(M - J, 0, !1, !0),
            r &&
              ((c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - Z),
              (c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - Z)))
      } else {
        const Y = _ ? O.length / v.grid.rows : O.length
        c.slideTo(c.activeIndex - Y, 0, !1, !0)
      }
  }
  if (
    ((c.allowSlidePrev = f), (c.allowSlideNext = d), c.controller && c.controller.control && !l)
  ) {
    const Y = {
      slideRealIndex: t,
      direction: s,
      setTranslate: r,
      activeSlideIndex: i,
      byController: !0,
    }
    Array.isArray(c.controller.control)
      ? c.controller.control.forEach((Q) => {
          !Q.destroyed &&
            Q.params.loop &&
            Q.loopFix({ ...Y, slideTo: Q.params.slidesPerView === v.slidesPerView ? n : !1 })
        })
      : c.controller.control instanceof c.constructor &&
        c.controller.control.params.loop &&
        c.controller.control.loopFix({
          ...Y,
          slideTo: c.controller.control.params.slidesPerView === v.slidesPerView ? n : !1,
        })
  }
  c.emit('loopFix')
}
function Qm() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const s = []
  ;(e.slides.forEach((r) => {
    const i =
      typeof r.swiperSlideIndex > 'u'
        ? r.getAttribute('data-swiper-slide-index') * 1
        : r.swiperSlideIndex
    s[i] = r
  }),
    e.slides.forEach((r) => {
      r.removeAttribute('data-swiper-slide-index')
    }),
    s.forEach((r) => {
      n.append(r)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0))
}
var Zm = { loopCreate: Xm, loopFix: Jm, loopDestroy: Qm }
function eg(e) {
  const t = this
  if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
  ;(t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      }))
}
function tg() {
  const e = this
  ;(e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      }))
}
var ng = { setGrabCursor: eg, unsetGrabCursor: tg }
function sg(e, t) {
  t === void 0 && (t = this)
  function n(s) {
    if (!s || s === fn() || s === Ke()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const r = s.closest(e)
    return !r && !s.getRootNode ? null : r || n(s.getRootNode().host)
  }
  return n(t)
}
function pl(e, t, n) {
  const s = Ke(),
    { params: r } = e,
    i = r.edgeSwipeDetection,
    o = r.edgeSwipeThreshold
  return i && (n <= o || n >= s.innerWidth - o)
    ? i === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function rg(e) {
  const t = this,
    n = fn()
  let s = e
  s.originalEvent && (s = s.originalEvent)
  const r = t.touchEventsData
  if (s.type === 'pointerdown') {
    if (r.pointerId !== null && r.pointerId !== s.pointerId) return
    r.pointerId = s.pointerId
  } else
    s.type === 'touchstart' &&
      s.targetTouches.length === 1 &&
      (r.touchId = s.targetTouches[0].identifier)
  if (s.type === 'touchstart') {
    pl(t, s, s.targetTouches[0].pageX)
    return
  }
  const { params: i, touches: o, enabled: l } = t
  if (
    !l ||
    (!i.simulateTouch && s.pointerType === 'mouse') ||
    (t.animating && i.preventInteractionOnTransition)
  )
    return
  !t.animating && i.cssMode && i.loop && t.loopFix()
  let a = s.target
  if (
    (i.touchEventsTarget === 'wrapper' && !dm(a, t.wrapperEl)) ||
    ('which' in s && s.which === 3) ||
    ('button' in s && s.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return
  const c = !!i.noSwipingClass && i.noSwipingClass !== '',
    u = s.composedPath ? s.composedPath() : s.path
  c && s.target && s.target.shadowRoot && u && (a = u[0])
  const f = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
    d = !!(s.target && s.target.shadowRoot)
  if (i.noSwiping && (d ? sg(f, a) : a.closest(f))) {
    t.allowClick = !0
    return
  }
  if (i.swipeHandler && !a.closest(i.swipeHandler)) return
  ;((o.currentX = s.pageX), (o.currentY = s.pageY))
  const p = o.currentX,
    v = o.currentY
  if (!pl(t, s, p)) return
  ;(Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = p),
    (o.startY = v),
    (r.touchStartTime = Os()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    i.threshold > 0 && (r.allowThresholdMove = !1))
  let S = !0
  ;(a.matches(r.focusableElements) && ((S = !1), a.nodeName === 'SELECT' && (r.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(r.focusableElements) &&
      n.activeElement !== a &&
      (s.pointerType === 'mouse' ||
        (s.pointerType !== 'mouse' && !a.matches(r.focusableElements))) &&
      n.activeElement.blur())
  const P = S && t.allowTouchMove && i.touchStartPreventDefault
  ;((i.touchStartForcePreventDefault || P) && !a.isContentEditable && s.preventDefault(),
    i.freeMode &&
      i.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !i.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', s))
}
function ig(e) {
  const t = fn(),
    n = this,
    s = n.touchEventsData,
    { params: r, touches: i, rtlTranslate: o, enabled: l } = n
  if (!l || (!r.simulateTouch && e.pointerType === 'mouse')) return
  let a = e
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === 'pointermove' && (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return
  let c
  if (a.type === 'touchmove') {
    if (
      ((c = [...a.changedTouches].find((T) => T.identifier === s.touchId)),
      !c || c.identifier !== s.touchId)
    )
      return
  } else c = a
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit('touchMoveOpposite', a)
    return
  }
  const u = c.pageX,
    f = c.pageY
  if (a.preventedByNestedSwiper) {
    ;((i.startX = u), (i.startY = f))
    return
  }
  if (!n.allowTouchMove) {
    ;(a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(i, { startX: u, startY: f, currentX: u, currentY: f }),
        (s.touchStartTime = Os())))
    return
  }
  if (r.touchReleaseOnEdges && !r.loop)
    if (n.isVertical()) {
      if (
        (f < i.startY && n.translate <= n.maxTranslate()) ||
        (f > i.startY && n.translate >= n.minTranslate())
      ) {
        ;((s.isTouched = !1), (s.isMoved = !1))
        return
      }
    } else {
      if (
        o &&
        ((u > i.startX && -n.translate <= n.maxTranslate()) ||
          (u < i.startX && -n.translate >= n.minTranslate()))
      )
        return
      if (
        !o &&
        ((u < i.startX && n.translate <= n.maxTranslate()) ||
          (u > i.startX && n.translate >= n.minTranslate()))
      )
        return
    }
  if (
    (t.activeElement &&
      t.activeElement.matches(s.focusableElements) &&
      t.activeElement !== a.target &&
      a.pointerType !== 'mouse' &&
      t.activeElement.blur(),
    t.activeElement && a.target === t.activeElement && a.target.matches(s.focusableElements))
  ) {
    ;((s.isMoved = !0), (n.allowClick = !1))
    return
  }
  ;(s.allowTouchCallbacks && n.emit('touchMove', a),
    (i.previousX = i.currentX),
    (i.previousY = i.currentY),
    (i.currentX = u),
    (i.currentY = f))
  const d = i.currentX - i.startX,
    p = i.currentY - i.startY
  if (n.params.threshold && Math.sqrt(d ** 2 + p ** 2) < n.params.threshold) return
  if (typeof s.isScrolling > 'u') {
    let T
    ;(n.isHorizontal() && i.currentY === i.startY) || (n.isVertical() && i.currentX === i.startX)
      ? (s.isScrolling = !1)
      : d * d + p * p >= 25 &&
        ((T = (Math.atan2(Math.abs(p), Math.abs(d)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal() ? T > r.touchAngle : 90 - T > r.touchAngle))
  }
  if (
    (s.isScrolling && n.emit('touchMoveOpposite', a),
    typeof s.startMoving > 'u' &&
      (i.currentX !== i.startX || i.currentY !== i.startY) &&
      (s.startMoving = !0),
    s.isScrolling || (a.type === 'touchmove' && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;((n.allowClick = !1),
    !r.cssMode && a.cancelable && a.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && a.stopPropagation())
  let v = n.isHorizontal() ? d : p,
    S = n.isHorizontal() ? i.currentX - i.previousX : i.currentY - i.previousY
  ;(r.oneWayMovement && ((v = Math.abs(v) * (o ? 1 : -1)), (S = Math.abs(S) * (o ? 1 : -1))),
    (i.diff = v),
    (v *= r.touchRatio),
    o && ((v = -v), (S = -S)))
  const P = n.touchesDirection
  ;((n.swipeDirection = v > 0 ? 'prev' : 'next'), (n.touchesDirection = S > 0 ? 'prev' : 'next'))
  const m = n.params.loop && !r.cssMode,
    h =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev)
  if (!s.isMoved) {
    if (
      (m && h && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const T = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      })
      n.wrapperEl.dispatchEvent(T)
    }
    ;((s.allowMomentumBounce = !1),
      r.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
      n.emit('sliderFirstMove', a))
  }
  if (
    (new Date().getTime(),
    r._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      P !== n.touchesDirection &&
      m &&
      h &&
      Math.abs(v) >= 1)
  ) {
    ;(Object.assign(i, {
      startX: u,
      startY: f,
      currentX: u,
      currentY: f,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate))
    return
  }
  ;(n.emit('sliderMove', a), (s.isMoved = !0), (s.currentTranslate = v + s.startTranslate))
  let g = !0,
    _ = r.resistanceRatio
  if (
    (r.touchReleaseOnEdges && (_ = 0),
    v > 0
      ? (m &&
          h &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (r.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (r.slidesPerView !== 'auto' && n.slides.length - r.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
        s.currentTranslate > n.minTranslate() &&
          ((g = !1),
          r.resistance &&
            (s.currentTranslate =
              n.minTranslate() - 1 + (-n.minTranslate() + s.startTranslate + v) ** _)))
      : v < 0 &&
        (m &&
          h &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (r.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (r.slidesPerView !== 'auto' && n.slides.length - r.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (r.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((g = !1),
          r.resistance &&
            (s.currentTranslate =
              n.maxTranslate() + 1 - (n.maxTranslate() - s.startTranslate - v) ** _))),
    g && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(v) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ;((s.allowThresholdMove = !0),
          (i.startX = i.currentX),
          (i.startY = i.currentY),
          (s.currentTranslate = s.startTranslate),
          (i.diff = n.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY))
        return
      }
    } else {
      s.currentTranslate = s.startTranslate
      return
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && n.freeMode) || r.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate))
}
function og(e) {
  const t = this,
    n = t.touchEventsData
  let s = e
  s.originalEvent && (s = s.originalEvent)
  let r
  if (s.type === 'touchend' || s.type === 'touchcancel') {
    if (
      ((r = [...s.changedTouches].find((T) => T.identifier === n.touchId)),
      !r || r.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return
    r = s
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(s.type) &&
    !(
      ['pointercancel', 'contextmenu'].includes(s.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return
  ;((n.pointerId = null), (n.touchId = null))
  const { params: o, touches: l, rtlTranslate: a, slidesGrid: c, enabled: u } = t
  if (!u || (!o.simulateTouch && s.pointerType === 'mouse')) return
  if (
    (n.allowTouchCallbacks && t.emit('touchEnd', s), (n.allowTouchCallbacks = !1), !n.isTouched)
  ) {
    ;(n.isMoved && o.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1))
    return
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const f = Os(),
    d = f - n.touchStartTime
  if (t.allowClick) {
    const T = s.path || (s.composedPath && s.composedPath())
    ;(t.updateClickedSlide((T && T[0]) || s.target, T),
      t.emit('tap click', s),
      d < 300 && f - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', s))
  }
  if (
    ((n.lastClickTime = Os()),
    ac(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1))
    return
  }
  ;((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1))
  let p
  if (
    (o.followFinger ? (p = a ? t.translate : -t.translate) : (p = -n.currentTranslate), o.cssMode)
  )
    return
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p })
    return
  }
  const v = p >= -t.maxTranslate() && !t.params.loop
  let S = 0,
    P = t.slidesSizesGrid[0]
  for (let T = 0; T < c.length; T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const O = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
    typeof c[T + O] < 'u'
      ? (v || (p >= c[T] && p < c[T + O])) && ((S = T), (P = c[T + O] - c[T]))
      : (v || p >= c[T]) && ((S = T), (P = c[c.length - 1] - c[c.length - 2]))
  }
  let m = null,
    h = null
  o.rewind &&
    (t.isBeginning
      ? (h =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (m = 0))
  const g = (p - c[S]) / P,
    _ = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
  if (d > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    ;(t.swipeDirection === 'next' &&
      (g >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? m : S + _) : t.slideTo(S)),
      t.swipeDirection === 'prev' &&
        (g > 1 - o.longSwipesRatio
          ? t.slideTo(S + _)
          : h !== null && g < 0 && Math.abs(g) > o.longSwipesRatio
            ? t.slideTo(h)
            : t.slideTo(S)))
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation && (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(S + _)
        : t.slideTo(S)
      : (t.swipeDirection === 'next' && t.slideTo(m !== null ? m : S + _),
        t.swipeDirection === 'prev' && t.slideTo(h !== null ? h : S))
  }
}
function hl() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: i } = e,
    o = e.virtual && e.params.virtual.enabled
  ;((e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses())
  const l = o && t.loop
  ;((t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
      }, 500))),
    (e.allowSlidePrev = r),
    (e.allowSlideNext = s),
    e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow())
}
function lg(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function ag() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: s } = e
  if (!s) return
  ;((e.previousTranslate = e.translate),
    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses())
  let r
  const i = e.maxTranslate() - e.minTranslate()
  ;(i === 0 ? (r = 0) : (r = (e.translate - e.minTranslate()) / i),
    r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1))
}
function cg(e) {
  const t = this
  ;(Ss(t, e.target),
    !(t.params.cssMode || (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)) &&
      t.update())
}
function ug() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const mc = (e, t) => {
  const n = fn(),
    { params: s, el: r, wrapperEl: i, device: o } = e,
    l = !!s.nested,
    a = t === 'on' ? 'addEventListener' : 'removeEventListener',
    c = t
  !r ||
    typeof r == 'string' ||
    (n[a]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: l }),
    r[a]('touchstart', e.onTouchStart, { passive: !1 }),
    r[a]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[a]('touchmove', e.onTouchMove, { passive: !1, capture: l }),
    n[a]('pointermove', e.onTouchMove, { passive: !1, capture: l }),
    n[a]('touchend', e.onTouchEnd, { passive: !0 }),
    n[a]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[a]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[a]('touchcancel', e.onTouchEnd, { passive: !0 }),
    n[a]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[a]('pointerleave', e.onTouchEnd, { passive: !0 }),
    n[a]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) && r[a]('click', e.onClick, !0),
    s.cssMode && i[a]('scroll', e.onScroll),
    s.updateOnWindowResize
      ? e[c](
          o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
          hl,
          !0,
        )
      : e[c]('observerUpdate', hl, !0),
    r[a]('load', e.onLoad, { capture: !0 }))
}
function fg() {
  const e = this,
    { params: t } = e
  ;((e.onTouchStart = rg.bind(e)),
    (e.onTouchMove = ig.bind(e)),
    (e.onTouchEnd = og.bind(e)),
    (e.onDocumentTouchStart = ug.bind(e)),
    t.cssMode && (e.onScroll = ag.bind(e)),
    (e.onClick = lg.bind(e)),
    (e.onLoad = cg.bind(e)),
    mc(e, 'on'))
}
function dg() {
  mc(this, 'off')
}
var pg = { attachEvents: fg, detachEvents: dg }
const ml = (e, t) => e.grid && t.grid && t.grid.rows > 1
function hg() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: r } = e,
    i = s.breakpoints
  if (!i || (i && Object.keys(i).length === 0)) return
  const o = fn(),
    l = s.breakpointsBase === 'window' || !s.breakpointsBase ? s.breakpointsBase : 'container',
    a =
      ['window', 'container'].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : o.querySelector(s.breakpointsBase),
    c = e.getBreakpoint(i, l, a)
  if (!c || e.currentBreakpoint === c) return
  const f = (c in i ? i[c] : void 0) || e.originalParams,
    d = ml(e, s),
    p = ml(e, f),
    v = e.params.grabCursor,
    S = f.grabCursor,
    P = s.enabled
  ;(d && !p
    ? (r.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !d &&
      p &&
      (r.classList.add(`${s.containerModifierClass}grid`),
      ((f.grid.fill && f.grid.fill === 'column') || (!f.grid.fill && s.grid.fill === 'column')) &&
        r.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    v && !S ? e.unsetGrabCursor() : !v && S && e.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((O) => {
      if (typeof f[O] > 'u') return
      const k = s[O] && s[O].enabled,
        j = f[O] && f[O].enabled
      ;(k && !j && e[O].disable(), !k && j && e[O].enable())
    }))
  const m = f.direction && f.direction !== s.direction,
    h = s.loop && (f.slidesPerView !== s.slidesPerView || m),
    g = s.loop
  ;(m && n && e.changeDirection(), et(e.params, f))
  const _ = e.params.enabled,
    T = e.params.loop
  ;(Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    P && !_ ? e.disable() : !P && _ && e.enable(),
    (e.currentBreakpoint = c),
    e.emit('_beforeBreakpoint', f),
    n &&
      (h
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !g && T
          ? (e.loopCreate(t), e.updateSlides())
          : g && !T && e.loopDestroy()),
    e.emit('breakpoint', f))
}
function mg(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return
  let s = !1
  const r = Ke(),
    i = t === 'window' ? r.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == 'string' && l.indexOf('@') === 0) {
        const a = parseFloat(l.substr(1))
        return { value: i * a, point: l }
      }
      return { value: l, point: l }
    })
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10))
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: c } = o[l]
    t === 'window'
      ? r.matchMedia(`(min-width: ${c}px)`).matches && (s = a)
      : c <= n.clientWidth && (s = a)
  }
  return s || 'max'
}
var gg = { setBreakpoint: hg, getBreakpoint: mg }
function vg(e, t) {
  const n = []
  return (
    e.forEach((s) => {
      typeof s == 'object'
        ? Object.keys(s).forEach((r) => {
            s[r] && n.push(t + r)
          })
        : typeof s == 'string' && n.push(t + s)
    }),
    n
  )
}
function bg() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: r, device: i } = e,
    o = vg(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        { 'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column' },
        { android: i.android },
        { ios: i.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    )
  ;(t.push(...o), r.classList.add(...t), e.emitContainerClasses())
}
function _g() {
  const e = this,
    { el: t, classNames: n } = e
  !t || typeof t == 'string' || (t.classList.remove(...n), e.emitContainerClasses())
}
var yg = { addClasses: bg, removeClasses: _g }
function wg() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n
  if (s) {
    const r = e.slides.length - 1,
      i = e.slidesGrid[r] + e.slidesSizesGrid[r] + s * 2
    e.isLocked = e.size > i
  } else e.isLocked = e.snapGrid.length === 1
  ;(n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'))
}
var Sg = { checkOverflow: wg },
  Jr = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
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
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
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
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  }
function Eg(e, t) {
  return function (s) {
    s === void 0 && (s = {})
    const r = Object.keys(s)[0],
      i = s[r]
    if (typeof i != 'object' || i === null) {
      et(t, s)
      return
    }
    if (
      (e[r] === !0 && (e[r] = { enabled: !0 }),
      r === 'navigation' &&
        e[r] &&
        e[r].enabled &&
        !e[r].prevEl &&
        !e[r].nextEl &&
        (e[r].auto = !0),
      ['pagination', 'scrollbar'].indexOf(r) >= 0 &&
        e[r] &&
        e[r].enabled &&
        !e[r].el &&
        (e[r].auto = !0),
      !(r in e && 'enabled' in i))
    ) {
      et(t, s)
      return
    }
    ;(typeof e[r] == 'object' && !('enabled' in e[r]) && (e[r].enabled = !0),
      e[r] || (e[r] = { enabled: !1 }),
      et(t, s))
  }
}
const br = {
    eventsEmitter: ym,
    update: Om,
    translate: Fm,
    transition: Vm,
    slide: Km,
    loop: Zm,
    grabCursor: ng,
    events: pg,
    breakpoints: gg,
    checkOverflow: Sg,
    classes: yg,
  },
  _r = {}
let Mi = class Lt {
  constructor() {
    let t, n
    for (var s = arguments.length, r = new Array(s), i = 0; i < s; i++) r[i] = arguments[i]
    ;(r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === 'Object'
      ? (n = r[0])
      : ([t, n] = r),
      n || (n = {}),
      (n = et({}, n)),
      t && !n.el && (n.el = t))
    const o = fn()
    if (n.el && typeof n.el == 'string' && o.querySelectorAll(n.el).length > 1) {
      const u = []
      return (
        o.querySelectorAll(n.el).forEach((f) => {
          const d = et({}, n, { el: f })
          u.push(new Lt(d))
        }),
        u
      )
    }
    const l = this
    ;((l.__swiper__ = !0),
      (l.support = fc()),
      (l.device = dc({ userAgent: n.userAgent })),
      (l.browser = pc()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules))
    const a = {}
    l.modules.forEach((u) => {
      u({
        params: n,
        swiper: l,
        extendParams: Eg(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const c = et({}, Jr, a)
    return (
      (l.params = et({}, c, _r, n)),
      (l.originalParams = et({}, l.params)),
      (l.passedParams = et({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((u) => {
          l.on(u, l.params.on[u])
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === 'horizontal'
        },
        isVertical() {
          return l.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit('_swiper'),
      l.params.init && l.init(),
      l
    )
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[t]
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: s } = this,
      r = St(n, `.${s.slideClass}, swiper-slide`),
      i = Rs(r[0])
    return Rs(t) - i
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.find((n) => n.getAttribute('data-swiper-slide-index') * 1 === t),
    )
  }
  getSlideIndexWhenGrid(t) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === 'column'
          ? (t = Math.floor(t / this.params.grid.rows))
          : this.params.grid.fill === 'row' &&
            (t = t % Math.ceil(this.slides.length / this.params.grid.rows))),
      t
    )
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: s } = t
    t.slides = St(n, `.${s.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this
    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'))
  }
  disable() {
    const t = this
    t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'))
  }
  setProgress(t, n) {
    const s = this
    t = Math.min(Math.max(t, 0), 1)
    const r = s.minTranslate(),
      o = (s.maxTranslate() - r) * t + r
    ;(s.translateTo(o, typeof n > 'u' ? 0 : n), s.updateActiveIndex(), s.updateSlidesClasses())
  }
  emitContainerClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = t.el.className
      .split(' ')
      .filter((s) => s.indexOf('swiper') === 0 || s.indexOf(t.params.containerModifierClass) === 0)
    t.emit('_containerClasses', n.join(' '))
  }
  getSlideClasses(t) {
    const n = this
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter((s) => s.indexOf('swiper-slide') === 0 || s.indexOf(n.params.slideClass) === 0)
          .join(' ')
  }
  emitSlidesClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = []
    ;(t.slides.forEach((s) => {
      const r = t.getSlideClasses(s)
      ;(n.push({ slideEl: s, classNames: r }), t.emit('_slideClass', s, r))
    }),
      t.emit('_slideClasses', n))
  }
  slidesPerViewDynamic(t, n) {
    ;(t === void 0 && (t = 'current'), n === void 0 && (n = !1))
    const s = this,
      { params: r, slides: i, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: c } = s
    let u = 1
    if (typeof r.slidesPerView == 'number') return r.slidesPerView
    if (r.centeredSlides) {
      let f = i[c] ? Math.ceil(i[c].swiperSlideSize) : 0,
        d
      for (let p = c + 1; p < i.length; p += 1)
        i[p] && !d && ((f += Math.ceil(i[p].swiperSlideSize)), (u += 1), f > a && (d = !0))
      for (let p = c - 1; p >= 0; p -= 1)
        i[p] && !d && ((f += i[p].swiperSlideSize), (u += 1), f > a && (d = !0))
    } else if (t === 'current')
      for (let f = c + 1; f < i.length; f += 1)
        (n ? o[f] + l[f] - o[c] < a : o[f] - o[c] < a) && (u += 1)
    else for (let f = c - 1; f >= 0; f -= 1) o[c] - o[f] < a && (u += 1)
    return u
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: s } = t
    ;(s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Ss(t, o)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses())
    function r() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate())
      ;(t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses())
    }
    let i
    if (s.freeMode && s.freeMode.enabled && !s.cssMode) (r(), s.autoHeight && t.updateAutoHeight())
    else {
      if ((s.slidesPerView === 'auto' || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
        const o = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides
        i = t.slideTo(o.length - 1, 0, !1, !0)
      } else i = t.slideTo(t.activeIndex, 0, !1, !0)
      i || r()
    }
    ;(s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update'))
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const s = this,
      r = s.params.direction
    return (
      t || (t = r === 'horizontal' ? 'vertical' : 'horizontal'),
      t === r ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((i) => {
          t === 'vertical' ? (i.style.width = '') : (i.style.height = '')
        }),
        s.emit('changeDirection'),
        n && s.update()),
      s
    )
  }
  changeLanguageDirection(t) {
    const n = this
    ;(n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'ltr')),
      n.update())
  }
  mount(t) {
    const n = this
    if (n.mounted) return !0
    let s = t || n.params.el
    if ((typeof s == 'string' && (s = document.querySelector(s)), !s)) return !1
    ;((s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName === n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0))
    const r = () => `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
    let o =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(r())
        : St(s, r())[0]
    return (
      !o &&
        n.params.createElements &&
        ((o = Ms('div', n.params.wrapperClass)),
        s.append(o),
        St(s, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l)
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: o,
        slidesEl: n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || Gt(s, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (s.dir.toLowerCase() === 'rtl' || Gt(s, 'direction') === 'rtl'),
        wrongRTL: Gt(o, 'display') === '-webkit-box',
      }),
      !0
    )
  }
  init(t) {
    const n = this
    if (n.initialized || n.mount(t) === !1) return n
    ;(n.emit('beforeInit'),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
      n.params.loop && n.loopCreate(void 0, !0),
      n.attachEvents())
    const r = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((i) => {
        i.complete
          ? Ss(n, i)
          : i.addEventListener('load', (o) => {
              Ss(n, o.target)
            })
      }),
      Xr(n),
      (n.initialized = !0),
      Xr(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    )
  }
  destroy(t, n) {
    ;(t === void 0 && (t = !0), n === void 0 && (n = !0))
    const s = this,
      { params: r, el: i, wrapperEl: o, slides: l } = s
    return (
      typeof s.params > 'u' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          i && typeof i != 'string' && i.removeAttribute('style'),
          o && o.removeAttribute('style'),
          l &&
            l.length &&
            l.forEach((a) => {
              ;(a.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass,
              ),
                a.removeAttribute('style'),
                a.removeAttribute('data-swiper-slide-index'))
            })),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a)
        }),
        t !== !1 && (s.el && typeof s.el != 'string' && (s.el.swiper = null), lm(s)),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    et(_r, t)
  }
  static get extendedDefaults() {
    return _r
  }
  static get defaults() {
    return Jr
  }
  static installModule(t) {
    Lt.prototype.__modules__ || (Lt.prototype.__modules__ = [])
    const n = Lt.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Lt.installModule(n)), Lt)
      : (Lt.installModule(t), Lt)
  }
}
Object.keys(br).forEach((e) => {
  Object.keys(br[e]).forEach((t) => {
    Mi.prototype[t] = br[e][t]
  })
})
Mi.use([bm, _m])
const gc = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
]
function an(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  )
}
function Sn(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > 'u'
        ? (e[s] = t[s])
        : an(t[s]) && an(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : Sn(e[s], t[s])
          : (e[s] = t[s])
    })
}
function vc(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation && typeof e.navigation.nextEl > 'u' && typeof e.navigation.prevEl > 'u'
  )
}
function bc(e) {
  return (e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u')
}
function _c(e) {
  return (e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u')
}
function yc(e) {
  e === void 0 && (e = '')
  const t = e
      .split(' ')
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = []
  return (
    t.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s)
    }),
    n.join(' ')
  )
}
function Tg(e) {
  return (
    e === void 0 && (e = ''),
    e ? (e.includes('swiper-wrapper') ? e : `swiper-wrapper ${e}`) : 'swiper-wrapper'
  )
}
function xg(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: r,
    nextEl: i,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = e
  const c = r.filter((M) => M !== 'children' && M !== 'direction' && M !== 'wrapperClass'),
    { params: u, pagination: f, navigation: d, scrollbar: p, virtual: v, thumbs: S } = t
  let P, m, h, g, _, T, O, k
  ;(r.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    u.thumbs &&
    (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
    (P = !0),
    r.includes('controller') &&
      s.controller &&
      s.controller.control &&
      u.controller &&
      !u.controller.control &&
      (m = !0),
    r.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      f &&
      !f.el &&
      (h = !0),
    r.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || l) &&
      (u.scrollbar || u.scrollbar === !1) &&
      p &&
      !p.el &&
      (g = !0),
    r.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (_ = !0))
  const j = (M) => {
    t[M] &&
      (t[M].destroy(),
      M === 'navigation'
        ? (t.isElement && (t[M].prevEl.remove(), t[M].nextEl.remove()),
          (u[M].prevEl = void 0),
          (u[M].nextEl = void 0),
          (t[M].prevEl = void 0),
          (t[M].nextEl = void 0))
        : (t.isElement && t[M].el.remove(), (u[M].el = void 0), (t[M].el = void 0)))
  }
  ;(r.includes('loop') &&
    t.isElement &&
    (u.loop && !s.loop ? (T = !0) : !u.loop && s.loop ? (O = !0) : (k = !0)),
    c.forEach((M) => {
      if (an(u[M]) && an(s[M]))
        (Object.assign(u[M], s[M]),
          (M === 'navigation' || M === 'pagination' || M === 'scrollbar') &&
            'enabled' in s[M] &&
            !s[M].enabled &&
            j(M))
      else {
        const B = s[M]
        ;(B === !0 || B === !1) && (M === 'navigation' || M === 'pagination' || M === 'scrollbar')
          ? B === !1 && j(M)
          : (u[M] = s[M])
      }
    }),
    c.includes('controller') &&
      !m &&
      t.controller &&
      t.controller.control &&
      u.controller &&
      u.controller.control &&
      (t.controller.control = u.controller.control),
    r.includes('children') && n && v && u.virtual.enabled
      ? ((v.slides = n), v.update(!0))
      : r.includes('virtual') && v && u.virtual.enabled && (n && (v.slides = n), v.update(!0)),
    r.includes('children') && n && u.loop && (k = !0),
    P && S.init() && S.update(!0),
    m && (t.controller.control = u.controller.control),
    h &&
      (t.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')),
        a.classList.add('swiper-pagination'),
        a.part.add('pagination'),
        t.el.appendChild(a)),
      a && (u.pagination.el = a),
      f.init(),
      f.render(),
      f.update()),
    g &&
      (t.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-scrollbar'),
        l.part.add('scrollbar'),
        t.el.appendChild(l)),
      l && (u.scrollbar.el = l),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    _ &&
      (t.isElement &&
        ((!i || typeof i == 'string') &&
          ((i = document.createElement('div')),
          i.classList.add('swiper-button-next'),
          Ns(i, t.hostEl.constructor.nextButtonSvg),
          i.part.add('button-next'),
          t.el.appendChild(i)),
        (!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-prev'),
          Ns(o, t.hostEl.constructor.prevButtonSvg),
          o.part.add('button-prev'),
          t.el.appendChild(o))),
      i && (u.navigation.nextEl = i),
      o && (u.navigation.prevEl = o),
      d.init(),
      d.update()),
    r.includes('allowSlideNext') && (t.allowSlideNext = s.allowSlideNext),
    r.includes('allowSlidePrev') && (t.allowSlidePrev = s.allowSlidePrev),
    r.includes('direction') && t.changeDirection(s.direction, !1),
    (T || k) && t.loopDestroy(),
    (O || k) && t.loopCreate(),
    t.update())
}
function gl(e, t) {
  e === void 0 && (e = {})
  const n = { on: {} },
    s = {},
    r = {}
  ;(Sn(n, Jr), (n._emitClasses = !0), (n.init = !1))
  const i = {},
    o = gc.map((a) => a.replace(/_/, '')),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > 'u' ||
        (o.indexOf(a) >= 0
          ? an(e[a])
            ? ((n[a] = {}), (r[a] = {}), Sn(n[a], e[a]), Sn(r[a], e[a]))
            : ((n[a] = e[a]), (r[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == 'function'
            ? (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (i[a] = e[a]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((a) => {
      ;(n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a])
    }),
    { params: n, passedParams: r, rest: i, events: s }
  )
}
function Cg(e, t) {
  let { el: n, nextEl: s, prevEl: r, paginationEl: i, scrollbarEl: o, swiper: l } = e
  ;(vc(t) &&
    s &&
    r &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = r),
    (l.originalParams.navigation.prevEl = r)),
    bc(t) && i && ((l.params.pagination.el = i), (l.originalParams.pagination.el = i)),
    _c(t) && o && ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n))
}
function Pg(e, t, n, s, r) {
  const i = []
  if (!t) return i
  const o = (a) => {
    i.indexOf(a) < 0 && i.push(a)
  }
  if (n && s) {
    const a = s.map(r),
      c = n.map(r)
    ;(a.join('') !== c.join('') && o('children'), s.length !== n.length && o('children'))
  }
  return (
    gc
      .filter((a) => a[0] === '_')
      .map((a) => a.replace(/_/, ''))
      .forEach((a) => {
        if (a in e && a in t)
          if (an(e[a]) && an(t[a])) {
            const c = Object.keys(e[a]),
              u = Object.keys(t[a])
            c.length !== u.length
              ? o(a)
              : (c.forEach((f) => {
                  e[a][f] !== t[a][f] && o(a)
                }),
                u.forEach((f) => {
                  e[a][f] !== t[a][f] && o(a)
                }))
          } else e[a] !== t[a] && o(a)
      }),
    i
  )
}
const Ig = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.emit('_virtualUpdated'),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
function yr(e, t, n) {
  e === void 0 && (e = {})
  const s = [],
    r = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] },
    i = (o, l) => {
      Array.isArray(o) &&
        o.forEach((a) => {
          const c = typeof a.type == 'symbol'
          ;(l === 'default' && (l = 'container-end'),
            c && a.children
              ? i(a.children, l)
              : (a.type &&
                    (a.type.name === 'SwiperSlide' || a.type.name === 'AsyncComponentWrapper')) ||
                  (a.componentOptions && a.componentOptions.tag === 'SwiperSlide')
                ? s.push(a)
                : r[l] && r[l].push(a))
        })
    }
  return (
    Object.keys(e).forEach((o) => {
      if (typeof e[o] != 'function') return
      const l = e[o]()
      i(l, o)
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: r }
  )
}
function kg(e, t, n) {
  if (!n) return null
  const s = (u) => {
      let f = u
      return (u < 0 ? (f = t.length + u) : f >= t.length && (f = f - t.length), f)
    },
    r = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: i, to: o } = n,
    l = e.value.params.loop ? -t.length : 0,
    a = e.value.params.loop ? t.length * 2 : t.length,
    c = []
  for (let u = l; u < a; u += 1) u >= i && u <= o && c.length < t.length && c.push(t[s(u)])
  return c.map((u) => {
    if (
      (u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = e),
      (u.props.style = r),
      u.type)
    )
      return He(u.type, { ...u.props }, u.children)
    if (u.componentOptions)
      return He(u.componentOptions.Ctor, { ...u.props }, u.componentOptions.children)
  })
}
const wr = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: 'SWIPER-CONTAINER' },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      breakpointsBase: { type: String, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopAddBlankSlides: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      '_freeModeNoMomentumRelease',
      '_virtualUpdated',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'autoplayTimeLeft',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'init',
      'keyPress',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'navigationPrev',
      'navigationNext',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slidesUpdated',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'virtualUpdate',
      'zoomChange',
    ],
    setup(e, t) {
      let { slots: n, emit: s } = t
      const { tag: r, wrapperTag: i } = e,
        o = xe('swiper'),
        l = xe(null),
        a = xe(!1),
        c = xe(!1),
        u = xe(null),
        f = xe(null),
        d = xe(null),
        p = { value: [] },
        v = { value: [] },
        S = xe(null),
        P = xe(null),
        m = xe(null),
        h = xe(null),
        { params: g, passedParams: _ } = gl(e)
      ;(yr(n, p, v), (d.value = _), (v.value = p.value))
      const T = () => {
        ;(yr(n, p, v), (a.value = !0))
      }
      ;((g.onAny = function (j) {
        for (var M = arguments.length, B = new Array(M > 1 ? M - 1 : 0), V = 1; V < M; V++)
          B[V - 1] = arguments[V]
        s(j, ...B)
      }),
        Object.assign(g.on, {
          _beforeBreakpoint: T,
          _containerClasses(j, M) {
            o.value = M
          },
        }))
      const O = { ...g }
      if (
        (delete O.wrapperClass,
        (f.value = new Mi(O)),
        f.value.virtual && f.value.params.virtual.enabled)
      ) {
        f.value.virtual.slides = p.value
        const j = {
          cache: !1,
          slides: p.value,
          renderExternal: (M) => {
            l.value = M
          },
          renderExternalUpdate: !1,
        }
        ;(Sn(f.value.params.virtual, j), Sn(f.value.originalParams.virtual, j))
      }
      ;(hi(() => {
        !c.value && f.value && (f.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: j } = gl(e),
          M = Pg(j, d.value, p.value, v.value, (B) => B.props && B.props.key)
        ;((d.value = j),
          (M.length || a.value) &&
            f.value &&
            !f.value.destroyed &&
            xg({
              swiper: f.value,
              slides: p.value,
              passedParams: j,
              changedParams: M,
              nextEl: S.value,
              prevEl: P.value,
              scrollbarEl: h.value,
              paginationEl: m.value,
            }),
          (a.value = !1))
      }),
        wn('swiper', f),
        Tt(l, () => {
          fi(() => {
            Ig(f.value)
          })
        }),
        un(() => {
          u.value &&
            (Cg(
              {
                el: u.value,
                nextEl: S.value,
                prevEl: P.value,
                paginationEl: m.value,
                scrollbarEl: h.value,
                swiper: f.value,
              },
              g,
            ),
            s('swiper', f.value))
        }),
        mi(() => {
          f.value && !f.value.destroyed && f.value.destroy(!0, !1)
        }))
      function k(j) {
        return g.virtual
          ? kg(f, j, l.value)
          : (j.forEach((M, B) => {
              ;(M.props || (M.props = {}), (M.props.swiperRef = f), (M.props.swiperSlideIndex = B))
            }),
            j)
      }
      return () => {
        const { slides: j, slots: M } = yr(n, p, v)
        return He(r, { ref: u, class: yc(o.value) }, [
          M['container-start'],
          He(i, { class: Tg(g.wrapperClass) }, [M['wrapper-start'], k(j), M['wrapper-end']]),
          vc(e) && [
            He('div', { ref: P, class: 'swiper-button-prev' }),
            He('div', { ref: S, class: 'swiper-button-next' }),
          ],
          _c(e) && He('div', { ref: h, class: 'swiper-scrollbar' }),
          bc(e) && He('div', { ref: m, class: 'swiper-pagination' }),
          M['container-end'],
        ])
      }
    },
  },
  Sr = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        s = !1
      const { swiperRef: r } = e,
        i = xe(null),
        o = xe('swiper-slide'),
        l = xe(!1)
      function a(f, d, p) {
        d === i.value && (o.value = p)
      }
      ;(un(() => {
        !r || !r.value || (r.value.on('_slideClass', a), (s = !0))
      }),
        Zl(() => {
          s || !r || !r.value || (r.value.on('_slideClass', a), (s = !0))
        }),
        hi(() => {
          !i.value ||
            !r ||
            !r.value ||
            (typeof e.swiperSlideIndex < 'u' && (i.value.swiperSlideIndex = e.swiperSlideIndex),
            r.value.destroyed && o.value !== 'swiper-slide' && (o.value = 'swiper-slide'))
        }),
        mi(() => {
          !r || !r.value || r.value.off('_slideClass', a)
        }))
      const c = Ie(() => ({
        isActive: o.value.indexOf('swiper-slide-active') >= 0,
        isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
        isPrev: o.value.indexOf('swiper-slide-prev') >= 0,
        isNext: o.value.indexOf('swiper-slide-next') >= 0,
      }))
      wn('swiperSlide', c)
      const u = () => {
        l.value = !0
      }
      return () =>
        He(
          e.tag,
          {
            class: yc(`${o.value}`),
            ref: i,
            'data-swiper-slide-index':
              typeof e.virtualIndex > 'u' && r && r.value && r.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: u,
          },
          e.zoom
            ? He(
                'div',
                {
                  class: 'swiper-zoom-container',
                  'data-swiper-zoom': typeof e.zoom == 'number' ? e.zoom : void 0,
                },
                [
                  n.default && n.default(c.value),
                  e.lazy && !l.value && He('div', { class: 'swiper-lazy-preloader' }),
                ],
              )
            : [
                n.default && n.default(c.value),
                e.lazy && !l.value && He('div', { class: 'swiper-lazy-preloader' }),
              ],
        )
    },
  }
function wc(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((r) => {
        if (!n[r] && n.auto === !0) {
          let i = St(e.el, `.${s[r]}`)[0]
          ;(i || ((i = Ms('div', s[r])), (i.className = s[r]), e.el.append(i)),
            (n[r] = i),
            (t[r] = i))
        }
      }),
    n
  )
}
function Er(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
  ;(n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null }))
  function i(v) {
    let S
    return v &&
      typeof v == 'string' &&
      t.isElement &&
      ((S = t.el.querySelector(v) || t.hostEl.querySelector(v)), S)
      ? S
      : (v &&
          (typeof v == 'string' && (S = [...document.querySelectorAll(v)]),
          t.params.uniqueNavElements &&
          typeof v == 'string' &&
          S &&
          S.length > 1 &&
          t.el.querySelectorAll(v).length === 1
            ? (S = t.el.querySelector(v))
            : S && S.length === 1 && (S = S[0])),
        v && !S ? v : S)
  }
  function o(v, S) {
    const P = t.params.navigation
    ;((v = Ne(v)),
      v.forEach((m) => {
        m &&
          (m.classList[S ? 'add' : 'remove'](...P.disabledClass.split(' ')),
          m.tagName === 'BUTTON' && (m.disabled = S),
          t.params.watchOverflow &&
            t.enabled &&
            m.classList[t.isLocked ? 'add' : 'remove'](P.lockClass))
      }))
  }
  function l() {
    const { nextEl: v, prevEl: S } = t.navigation
    if (t.params.loop) {
      ;(o(S, !1), o(v, !1))
      return
    }
    ;(o(S, t.isBeginning && !t.params.rewind), o(v, t.isEnd && !t.params.rewind))
  }
  function a(v) {
    ;(v.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), r('navigationPrev')))
  }
  function c(v) {
    ;(v.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), r('navigationNext')))
  }
  function u() {
    const v = t.params.navigation
    if (
      ((t.params.navigation = wc(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
      })),
      !(v.nextEl || v.prevEl))
    )
      return
    let S = i(v.nextEl),
      P = i(v.prevEl)
    ;(Object.assign(t.navigation, { nextEl: S, prevEl: P }), (S = Ne(S)), (P = Ne(P)))
    const m = (h, g) => {
      ;(h && h.addEventListener('click', g === 'next' ? c : a),
        !t.enabled && h && h.classList.add(...v.lockClass.split(' ')))
    }
    ;(S.forEach((h) => m(h, 'next')), P.forEach((h) => m(h, 'prev')))
  }
  function f() {
    let { nextEl: v, prevEl: S } = t.navigation
    ;((v = Ne(v)), (S = Ne(S)))
    const P = (m, h) => {
      ;(m.removeEventListener('click', h === 'next' ? c : a),
        m.classList.remove(...t.params.navigation.disabledClass.split(' ')))
    }
    ;(v.forEach((m) => P(m, 'next')), S.forEach((m) => P(m, 'prev')))
  }
  ;(s('init', () => {
    t.params.navigation.enabled === !1 ? p() : (u(), l())
  }),
    s('toEdge fromEdge lock unlock', () => {
      l()
    }),
    s('destroy', () => {
      f()
    }),
    s('enable disable', () => {
      let { nextEl: v, prevEl: S } = t.navigation
      if (((v = Ne(v)), (S = Ne(S)), t.enabled)) {
        l()
        return
      }
      ;[...v, ...S]
        .filter((P) => !!P)
        .forEach((P) => P.classList.add(t.params.navigation.lockClass))
    }),
    s('click', (v, S) => {
      let { nextEl: P, prevEl: m } = t.navigation
      ;((P = Ne(P)), (m = Ne(m)))
      const h = S.target
      let g = m.includes(h) || P.includes(h)
      if (t.isElement && !g) {
        const _ = S.path || (S.composedPath && S.composedPath())
        _ && (g = _.find((T) => P.includes(T) || m.includes(T)))
      }
      if (t.params.navigation.hideOnClick && !g) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === h || t.pagination.el.contains(h))
        )
          return
        let _
        ;(P.length
          ? (_ = P[0].classList.contains(t.params.navigation.hiddenClass))
          : m.length && (_ = m[0].classList.contains(t.params.navigation.hiddenClass)),
          r(_ === !0 ? 'navigationShow' : 'navigationHide'),
          [...P, ...m]
            .filter((T) => !!T)
            .forEach((T) => T.classList.toggle(t.params.navigation.hiddenClass)))
      }
    }))
  const d = () => {
      ;(t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')), u(), l())
    },
    p = () => {
      ;(t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), f())
    }
  Object.assign(t.navigation, { enable: d, disable: p, update: l, init: u, destroy: f })
}
function Rn(e) {
  return (
    e === void 0 && (e = ''),
    `.${e
      .trim()
      .replace(/([\.:!+\/()[\]])/g, '\\$1')
      .replace(/ /g, '.')}`
  )
}
function vl(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
  const i = 'swiper-pagination'
  ;(n({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
      paginationDisabledClass: `${i}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] }))
  let o,
    l = 0
  function a() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    )
  }
  function c(h, g) {
    const { bulletActiveClass: _ } = t.params.pagination
    h &&
      ((h = h[`${g === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      h &&
        (h.classList.add(`${_}-${g}`),
        (h = h[`${g === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        h && h.classList.add(`${_}-${g}-${g}`)))
  }
  function u(h, g, _) {
    if (((h = h % _), (g = g % _), g === h + 1)) return 'next'
    if (g === h - 1) return 'previous'
  }
  function f(h) {
    const g = h.target.closest(Rn(t.params.pagination.bulletClass))
    if (!g) return
    h.preventDefault()
    const _ = Rs(g) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === _) return
      const T = u(t.realIndex, _, t.slides.length)
      T === 'next' ? t.slideNext() : T === 'previous' ? t.slidePrev() : t.slideToLoop(_)
    } else t.slideTo(_)
  }
  function d() {
    const h = t.rtl,
      g = t.params.pagination
    if (a()) return
    let _ = t.pagination.el
    _ = Ne(_)
    let T, O
    const k = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
      j = t.params.loop ? Math.ceil(k / t.params.slidesPerGroup) : t.snapGrid.length
    if (
      (t.params.loop
        ? ((O = t.previousRealIndex || 0),
          (T =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < 'u'
          ? ((T = t.snapIndex), (O = t.previousSnapIndex))
          : ((O = t.previousIndex || 0), (T = t.activeIndex || 0)),
      g.type === 'bullets' && t.pagination.bullets && t.pagination.bullets.length > 0)
    ) {
      const M = t.pagination.bullets
      let B, V, G
      if (
        (g.dynamicBullets &&
          ((o = Kr(M[0], t.isHorizontal() ? 'width' : 'height')),
          _.forEach((J) => {
            J.style[t.isHorizontal() ? 'width' : 'height'] = `${o * (g.dynamicMainBullets + 4)}px`
          }),
          g.dynamicMainBullets > 1 &&
            O !== void 0 &&
            ((l += T - (O || 0)),
            l > g.dynamicMainBullets - 1 ? (l = g.dynamicMainBullets - 1) : l < 0 && (l = 0)),
          (B = Math.max(T - l, 0)),
          (V = B + (Math.min(M.length, g.dynamicMainBullets) - 1)),
          (G = (V + B) / 2)),
        M.forEach((J) => {
          const oe = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (le) => `${g.bulletActiveClass}${le}`,
            ),
          ]
            .map((le) => (typeof le == 'string' && le.includes(' ') ? le.split(' ') : le))
            .flat()
          J.classList.remove(...oe)
        }),
        _.length > 1)
      )
        M.forEach((J) => {
          const oe = Rs(J)
          ;(oe === T
            ? J.classList.add(...g.bulletActiveClass.split(' '))
            : t.isElement && J.setAttribute('part', 'bullet'),
            g.dynamicBullets &&
              (oe >= B && oe <= V && J.classList.add(...`${g.bulletActiveClass}-main`.split(' ')),
              oe === B && c(J, 'prev'),
              oe === V && c(J, 'next')))
        })
      else {
        const J = M[T]
        if (
          (J && J.classList.add(...g.bulletActiveClass.split(' ')),
          t.isElement &&
            M.forEach((oe, le) => {
              oe.setAttribute('part', le === T ? 'bullet-active' : 'bullet')
            }),
          g.dynamicBullets)
        ) {
          const oe = M[B],
            le = M[V]
          for (let Y = B; Y <= V; Y += 1)
            M[Y] && M[Y].classList.add(...`${g.bulletActiveClass}-main`.split(' '))
          ;(c(oe, 'prev'), c(le, 'next'))
        }
      }
      if (g.dynamicBullets) {
        const J = Math.min(M.length, g.dynamicMainBullets + 4),
          oe = (o * J - o) / 2 - G * o,
          le = h ? 'right' : 'left'
        M.forEach((Y) => {
          Y.style[t.isHorizontal() ? le : 'top'] = `${oe}px`
        })
      }
    }
    _.forEach((M, B) => {
      if (
        (g.type === 'fraction' &&
          (M.querySelectorAll(Rn(g.currentClass)).forEach((V) => {
            V.textContent = g.formatFractionCurrent(T + 1)
          }),
          M.querySelectorAll(Rn(g.totalClass)).forEach((V) => {
            V.textContent = g.formatFractionTotal(j)
          })),
        g.type === 'progressbar')
      ) {
        let V
        g.progressbarOpposite
          ? (V = t.isHorizontal() ? 'vertical' : 'horizontal')
          : (V = t.isHorizontal() ? 'horizontal' : 'vertical')
        const G = (T + 1) / j
        let J = 1,
          oe = 1
        ;(V === 'horizontal' ? (J = G) : (oe = G),
          M.querySelectorAll(Rn(g.progressbarFillClass)).forEach((le) => {
            ;((le.style.transform = `translate3d(0,0,0) scaleX(${J}) scaleY(${oe})`),
              (le.style.transitionDuration = `${t.params.speed}ms`))
          }))
      }
      ;(g.type === 'custom' && g.renderCustom
        ? (Ns(M, g.renderCustom(t, T + 1, j)), B === 0 && r('paginationRender', M))
        : (B === 0 && r('paginationRender', M), r('paginationUpdate', M)),
        t.params.watchOverflow &&
          t.enabled &&
          M.classList[t.isLocked ? 'add' : 'remove'](g.lockClass))
    })
  }
  function p() {
    const h = t.params.pagination
    if (a()) return
    const g =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length
    let _ = t.pagination.el
    _ = Ne(_)
    let T = ''
    if (h.type === 'bullets') {
      let O = t.params.loop ? Math.ceil(g / t.params.slidesPerGroup) : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && O > g && (O = g)
      for (let k = 0; k < O; k += 1)
        h.renderBullet
          ? (T += h.renderBullet.call(t, k, h.bulletClass))
          : (T += `<${h.bulletElement} ${t.isElement ? 'part="bullet"' : ''} class="${h.bulletClass}"></${h.bulletElement}>`)
    }
    ;(h.type === 'fraction' &&
      (h.renderFraction
        ? (T = h.renderFraction.call(t, h.currentClass, h.totalClass))
        : (T = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
      h.type === 'progressbar' &&
        (h.renderProgressbar
          ? (T = h.renderProgressbar.call(t, h.progressbarFillClass))
          : (T = `<span class="${h.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      _.forEach((O) => {
        ;(h.type !== 'custom' && Ns(O, T || ''),
          h.type === 'bullets' &&
            t.pagination.bullets.push(...O.querySelectorAll(Rn(h.bulletClass))))
      }),
      h.type !== 'custom' && r('paginationRender', _[0]))
  }
  function v() {
    t.params.pagination = wc(t, t.originalParams.pagination, t.params.pagination, {
      el: 'swiper-pagination',
    })
    const h = t.params.pagination
    if (!h.el) return
    let g
    ;(typeof h.el == 'string' && t.isElement && (g = t.el.querySelector(h.el)),
      !g && typeof h.el == 'string' && (g = [...document.querySelectorAll(h.el)]),
      g || (g = h.el),
      !(!g || g.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof h.el == 'string' &&
          Array.isArray(g) &&
          g.length > 1 &&
          ((g = [...t.el.querySelectorAll(h.el)]),
          g.length > 1 && (g = g.find((_) => uc(_, '.swiper')[0] === t.el))),
        Array.isArray(g) && g.length === 1 && (g = g[0]),
        Object.assign(t.pagination, { el: g }),
        (g = Ne(g)),
        g.forEach((_) => {
          ;(h.type === 'bullets' &&
            h.clickable &&
            _.classList.add(...(h.clickableClass || '').split(' ')),
            _.classList.add(h.modifierClass + h.type),
            _.classList.add(t.isHorizontal() ? h.horizontalClass : h.verticalClass),
            h.type === 'bullets' &&
              h.dynamicBullets &&
              (_.classList.add(`${h.modifierClass}${h.type}-dynamic`),
              (l = 0),
              h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === 'progressbar' &&
              h.progressbarOpposite &&
              _.classList.add(h.progressbarOppositeClass),
            h.clickable && _.addEventListener('click', f),
            t.enabled || _.classList.add(h.lockClass))
        })))
  }
  function S() {
    const h = t.params.pagination
    if (a()) return
    let g = t.pagination.el
    ;(g &&
      ((g = Ne(g)),
      g.forEach((_) => {
        ;(_.classList.remove(h.hiddenClass),
          _.classList.remove(h.modifierClass + h.type),
          _.classList.remove(t.isHorizontal() ? h.horizontalClass : h.verticalClass),
          h.clickable &&
            (_.classList.remove(...(h.clickableClass || '').split(' ')),
            _.removeEventListener('click', f)))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((_) => _.classList.remove(...h.bulletActiveClass.split(' '))))
  }
  ;(s('changeDirection', () => {
    if (!t.pagination || !t.pagination.el) return
    const h = t.params.pagination
    let { el: g } = t.pagination
    ;((g = Ne(g)),
      g.forEach((_) => {
        ;(_.classList.remove(h.horizontalClass, h.verticalClass),
          _.classList.add(t.isHorizontal() ? h.horizontalClass : h.verticalClass))
      }))
  }),
    s('init', () => {
      t.params.pagination.enabled === !1 ? m() : (v(), p(), d())
    }),
    s('activeIndexChange', () => {
      typeof t.snapIndex > 'u' && d()
    }),
    s('snapIndexChange', () => {
      d()
    }),
    s('snapGridLengthChange', () => {
      ;(p(), d())
    }),
    s('destroy', () => {
      S()
    }),
    s('enable disable', () => {
      let { el: h } = t.pagination
      h &&
        ((h = Ne(h)),
        h.forEach((g) => g.classList[t.enabled ? 'remove' : 'add'](t.params.pagination.lockClass)))
    }),
    s('lock unlock', () => {
      d()
    }),
    s('click', (h, g) => {
      const _ = g.target,
        T = Ne(t.pagination.el)
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        T &&
        T.length > 0 &&
        !_.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && _ === t.navigation.nextEl) ||
            (t.navigation.prevEl && _ === t.navigation.prevEl))
        )
          return
        const O = T[0].classList.contains(t.params.pagination.hiddenClass)
        ;(r(O === !0 ? 'paginationShow' : 'paginationHide'),
          T.forEach((k) => k.classList.toggle(t.params.pagination.hiddenClass)))
      }
    }))
  const P = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: h } = t.pagination
      ;(h &&
        ((h = Ne(h)),
        h.forEach((g) => g.classList.remove(t.params.pagination.paginationDisabledClass))),
        v(),
        p(),
        d())
    },
    m = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass)
      let { el: h } = t.pagination
      ;(h &&
        ((h = Ne(h)),
        h.forEach((g) => g.classList.add(t.params.pagination.paginationDisabledClass))),
        S())
    }
  Object.assign(t.pagination, { enable: P, disable: m, render: p, update: d, init: v, destroy: S })
}
const Sc = [
    {
      id: 1,
      title: 'works.api-covid.title',
      slug: 'api-covid',
      link: 'https://tobias-irigoyen.github.io/landing-api-covid/',
      skills: ['skills.uiux', 'skills.html5', 'skills.css3'],
    },
    {
      id: 2,
      title: 'works.fit.title',
      slug: 'fit',
      link: 'https://facttic.org.ar/fit/',
      skills: ['skills.uiux', 'skills.vue', 'skills.html5', 'skills.css3'],
    },
    {
      id: 3,
      title: 'works.aurora.title',
      slug: 'proyecto-aurora',
      link: 'https://www.phaurora.com/',
      skills: ['skills.uiux', 'skills.uiux-improvements', 'skills.uiux-system'],
    },
    {
      id: 4,
      title: 'works.nayra.title',
      slug: 'nayra',
      link: 'https://nayra.coop/',
      skills: ['skills.uiux', 'skills.vue', 'skills.html5', 'skills.css3'],
    },
    {
      id: 5,
      title: 'works.pokedex.title',
      slug: 'pokedex',
      link: 'https://tobias-irigoyen.github.io/pokedex/',
      skills: ['skills.uiux', 'skills.vue', 'skills.html5', 'skills.css3'],
    },
    {
      id: 6,
      title: 'works.naranjax.title',
      slug: 'naranja-x-wallet',
      link: 'https://bit.ly/naranjax_wallet',
      skills: ['skills.uiux-refactor', 'skills.figma'],
    },
    {
      id: 7,
      title: 'works.icbc.title',
      slug: 'icbc-home-banking',
      link: 'https://bit.ly/icbc_hb',
      skills: ['skills.uiux-refactor', 'skills.figma'],
    },
  ],
  Lg = { class: 'container pb-[100px]' },
  Og = { class: 'section-title text-center mt-8' },
  Ag = { key: 0, class: 'slider-container mb-6' },
  Mg = ['src', 'alt', 'onClick'],
  Rg = ['src', 'alt'],
  Ng = { class: 'text-3xl mb-6' },
  Dg = { class: 'text-[20px] mb-8 whitespace-pre-line' },
  Fg = { class: 'text-3xl mb-6' },
  $g = { class: 'skills mb-8' },
  Bg = { class: 'text-3xl mb-6' },
  jg = ['href'],
  Vg = { class: 'text-3xl mt-8 mb-8' },
  Hg = { class: 'border border-white w-100 h-[144px] work p-4 rounded-lg shadow-md' },
  Wg = { class: 'related-project-title text-xl font-semibold mb-2' },
  Ug = qe({
    __name: 'workDetail',
    setup(e) {
      const { locale: t } = rt()
      xe(Sc)
      const { t: n } = rt(),
        s = ls(),
        r = Ie(() => {
          const p = s.params.slug
          return Array.isArray(p) ? p[0] : String(p ?? '')
        }),
        i = Array.isArray(hs) && Array.isArray(hs[0]) ? hs.flat() : hs,
        o = Ie(() => i.filter((p) => p.slug !== r.value)),
        l = Ie(() => i.find((p) => String(p.slug) === r.value)),
        a = xe(0),
        c = xe(!1)
      function u(p) {
        ;((a.value = p), (c.value = !0))
      }
      function f() {
        c.value = !1
      }
      const d = (p) => ({
        name: 'workDetail',
        params: { lang: t.value, section: t.value === 'en' ? 'projects' : 'proyectos', slug: p },
      })
      return (p, v) => {
        const S = gi('router-link')
        return (
          be(),
          Te('section', Lg, [
            K('h2', Og, we(l.value ? te(n)(l.value.title) : ''), 1),
            l.value?.images && l.value.images.length > 0
              ? (be(),
                Te('div', Ag, [
                  ge(
                    te(wr),
                    {
                      modules: [te(vl), te(Er)],
                      keyboard: { enabled: !0 },
                      loop: !0,
                      pagination: { clickable: !0, dynamicBullets: !1 },
                      navigation: '',
                      'slides-per-view': 1,
                      'space-between': 30,
                    },
                    {
                      default: Ot(() => [
                        (be(!0),
                        Te(
                          Me,
                          null,
                          rn(
                            l.value?.images,
                            (P, m) => (
                              be(),
                              bs(
                                te(Sr),
                                { key: m },
                                {
                                  default: Ot(() => [
                                    K(
                                      'img',
                                      {
                                        src: P,
                                        alt: te(n)('project-image') + ' ' + (m + 1),
                                        class: 'w-full h-auto rounded-lg shadow-lg cursor-pointer',
                                        onClick: (h) => u(m),
                                      },
                                      null,
                                      8,
                                      Mg,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    },
                    8,
                    ['modules'],
                  ),
                ]))
              : Zi('', !0),
            c.value
              ? (be(),
                Te(
                  'div',
                  {
                    key: 1,
                    class:
                      'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50',
                    onClick: Sa(f, ['self']),
                  },
                  [
                    ge(
                      te(wr),
                      {
                        modules: [te(vl), te(Er)],
                        loop: !0,
                        navigation: '',
                        'initial-slide': a.value,
                        class: 'lightboxSwiper w-[80vw] max-h-[90vh]',
                      },
                      {
                        default: Ot(() => [
                          (be(!0),
                          Te(
                            Me,
                            null,
                            rn(
                              l.value?.images,
                              (P, m) => (
                                be(),
                                bs(
                                  te(Sr),
                                  { key: 'light-' + m },
                                  {
                                    default: Ot(() => [
                                      K(
                                        'img',
                                        {
                                          src: P,
                                          class: 'max-h-[90vh] w-auto rounded-lg shadow-lg',
                                          alt: te(n)('project-image') + ' ' + (m + 1),
                                        },
                                        null,
                                        8,
                                        Rg,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ['modules', 'initial-slide'],
                    ),
                    K(
                      'button',
                      {
                        class: 'absolute top-6 right-6 text-white text-3xl cursor-pointer',
                        onClick: f,
                      },
                      v[0] || (v[0] = [K('i', { class: 'bi bi-x-lg' }, null, -1)]),
                    ),
                  ],
                ))
              : Zi('', !0),
            K('h3', Ng, we(te(n)('description')), 1),
            K('p', Dg, we(te(n)(l.value?.description ?? '')), 1),
            K('h3', Fg, we(te(n)('technologies')), 1),
            K('ul', $g, [
              (be(!0),
              Te(
                Me,
                null,
                rn(
                  l.value?.skills,
                  (P) => (be(), Te('li', { class: 'text-[20px]', key: P }, we(te(n)(P)), 1)),
                ),
                128,
              )),
            ]),
            K('h3', Bg, we(te(n)('link')), 1),
            K(
              'a',
              { href: l.value?.link, class: 'project-link text-[20px] hover:underline' },
              we(l.value?.link),
              9,
              jg,
            ),
            K('h3', Vg, we(te(n)('related-works')), 1),
            ge(
              te(wr),
              {
                modules: [te(Er)],
                'space-between': 32,
                loop: !0,
                navigation: '',
                breakpoints: {
                  0: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 32 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                  1440: { slidesPerView: 4, spaceBetween: 32 },
                },
                class: 'relatedWorksSwiper',
              },
              {
                default: Ot(() => [
                  (be(!0),
                  Te(
                    Me,
                    null,
                    rn(
                      o.value,
                      (P) => (
                        be(),
                        bs(
                          te(Sr),
                          { key: P.id },
                          {
                            default: Ot(() => [
                              K('article', Hg, [
                                ge(
                                  S,
                                  { to: d(P.slug) },
                                  {
                                    default: Ot(() => [
                                      K('h3', Wg, we(te(n)(P.title)), 1),
                                      v[1] ||
                                        (v[1] = K(
                                          'svg',
                                          {
                                            class: 'ms-auto right-arrow',
                                            width: '48',
                                            height: '46',
                                            viewBox: '0 0 48 46',
                                            fill: 'none',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                          },
                                          [
                                            K('path', {
                                              d: 'M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10',
                                              stroke: 'white',
                                              'stroke-width': '4',
                                              'stroke-linecap': 'round',
                                              'stroke-linejoin': 'round',
                                            }),
                                          ],
                                          -1,
                                        )),
                                    ]),
                                    _: 2,
                                    __: [1],
                                  },
                                  1032,
                                  ['to'],
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
              8,
              ['modules'],
            ),
          ])
        )
      }
    },
  }),
  Gg = Zt(Ug, [['__scopeId', 'data-v-5f634a71']]),
  zg = './assets/hero-image-D99yJiHz.svg',
  Yg = ['id'],
  qg = { class: 'mb-16 w-1/2 hero-blocks' },
  Kg = { class: 'text-5xl mb-8 leading-16 intro-title' },
  Xg = { class: 'lead' },
  Jg = { class: 'flex flex-start mt-8 btns-container' },
  Qg = qe({
    __name: 'heroSection',
    setup(e) {
      const { locale: t, t: n } = rt(),
        s = os()
      ls()
      const r = () => {
          const a = document.createElement('a')
          ;((a.href = '/Tobías Irigoyen - Resume.pdf'),
            (a.download = 'Tobías Irigoyen - Resume.pdf'),
            document.body.appendChild(a),
            a.click(),
            document.body.removeChild(a))
        },
        i = (a) => (t.value === 'en' ? 'work' : 'proyectos'),
        o = (a) => {
          const c = document.getElementById(a)
          c && c.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        l = async (a) => {
          const c = i()
          ;(await s.push(`/${t.value}/${c}`),
            setTimeout(() => {
              const u = n(`anchors.${a}`)
              o(u)
            }, 50))
        }
      return (a, c) => (
        be(),
        Te(
          'section',
          { class: 'flex justify-center container', id: te(n)('anchors.home-section') },
          [
            K('div', qg, [
              K('h2', Kg, we(te(n)('intro')), 1),
              K('p', Xg, we(te(n)('lead')), 1),
              K('div', Jg, [
                K(
                  'a',
                  {
                    onClick: c[0] || (c[0] = (u) => l('work')),
                    class:
                      'border border-white py-2 px-3 bg-white !text-black text-[18px] hover:bg-black hover:!text-white hover:cursor-pointer w-[140px] text-center my-work-btn',
                  },
                  we(te(n)('my-work')),
                  1,
                ),
                K(
                  'button',
                  {
                    onClick: r,
                    class:
                      'border border-white py-2 px-3 ml-8 bg-transparent !text-white text-[18px] hover:bg-white hover:!text-black hover:cursor-pointer w-[140px] text-center',
                  },
                  we(te(n)('my-resume')),
                  1,
                ),
              ]),
            ]),
            c[1] ||
              (c[1] = K(
                'div',
                { class: 'w-1/2 flex justify-end hero-blocks hero-image-container' },
                [K('img', { src: zg, alt: 'hero image', class: 'w-130 hero-image' })],
                -1,
              )),
          ],
          8,
          Yg,
        )
      )
    },
  }),
  Zg = Zt(Qg, [['__scopeId', 'data-v-a29f150a']]),
  ev = ['id'],
  tv = { class: 'section-title' },
  nv = { class: 'articles' },
  sv = { class: 'flex skills gap-1 justify-start' },
  rv = qe({
    __name: 'myWorkSection',
    setup(e) {
      const { t, locale: n } = rt(),
        s = xe(Sc),
        r = (i) => ({
          name: 'workDetail',
          params: { lang: n.value, section: n.value === 'en' ? 'projects' : 'proyectos', slug: i },
        })
      return (i, o) => {
        const l = gi('router-link')
        return (
          be(),
          Te(
            'section',
            { class: 'container', id: te(t)('anchors.work') },
            [
              K('h2', tv, we(te(t)('my-work')), 1),
              K('div', nv, [
                (be(!0),
                Te(
                  Me,
                  null,
                  rn(
                    s.value,
                    (a) => (
                      be(),
                      Te('article', { key: a.id, class: 'border border-white work mb-4' }, [
                        ge(
                          l,
                          { to: r(a.slug) },
                          {
                            default: Ot(() => [
                              K('h3', null, we(te(t)(a.title)), 1),
                              K('ul', sv, [
                                (be(!0),
                                Te(
                                  Me,
                                  null,
                                  rn(
                                    a.skills,
                                    (c) => (be(), Te('li', { key: c }, we(te(t)(c)), 1)),
                                  ),
                                  128,
                                )),
                              ]),
                              o[0] ||
                                (o[0] = K(
                                  'svg',
                                  {
                                    class: 'ms-auto right-arrow',
                                    width: '48',
                                    height: '46',
                                    viewBox: '0 0 48 46',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                  },
                                  [
                                    K('path', {
                                      d: 'M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10',
                                      stroke: 'white',
                                      'stroke-width': '4',
                                      'stroke-linecap': 'round',
                                      'stroke-linejoin': 'round',
                                    }),
                                  ],
                                  -1,
                                )),
                            ]),
                            _: 2,
                            __: [0],
                          },
                          1032,
                          ['to'],
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ],
            8,
            ev,
          )
        )
      }
    },
  }),
  iv = Zt(rv, [['__scopeId', 'data-v-35b36cf8']]),
  ov = ['id'],
  lv = { class: 'section-title mb-[60px]' },
  av = qe({
    __name: 'contactSection',
    setup(e) {
      const { t } = rt()
      return (n, s) => (
        be(),
        Te(
          'section',
          {
            class:
              'flex flex-col items-center justify-start !mt-[40px] !mb-[40px] pt-[80px] pb-[80px] container',
            id: te(t)('anchors.contact'),
          },
          [
            K('h2', lv, we(te(t)('contact')), 1),
            s[0] ||
              (s[0] = nf(
                '<div data-v-feedd1b3><ul class="flex flex-row contact-links" data-v-feedd1b3><li class="me-8" data-v-feedd1b3><a class="text-2xl hover:underline w-[101px] h-[35px]" target="_blank" href="mailto:tobias.irigoyen@gmail.com" data-v-feedd1b3>Email <svg class="ms-auto right-arrow hidden" width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-feedd1b3><path d="M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-feedd1b3></path></svg></a></li><li class="me-8" data-v-feedd1b3><a class="text-2xl hover:underline w-[116px] h-[35px]" target="_blank" href="https://github.com/tobias-irigoyen" data-v-feedd1b3>Github <svg class="ms-auto right-arrow hidden" width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-feedd1b3><path d="M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-feedd1b3></path></svg></a></li><li data-v-feedd1b3><a class="text-2xl hover:underline w-[132px] h-[35px]" target="_blank" href="https://linkedin.com/inassets" data-v-feedd1b3>Linkedin <svg class="ms-auto right-arrow hidden" width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-feedd1b3><path d="M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-feedd1b3></path></svg></a></li></ul></div>',
                1,
              )),
          ],
          8,
          ov,
        )
      )
    },
  }),
  cv = Zt(av, [['__scopeId', 'data-v-feedd1b3']]),
  uv = { class: 'scroll-indicator' },
  fv = ['onClick'],
  dv = { class: 'section-label' },
  pv = qe({
    __name: 'scrollIndicator',
    setup(e) {
      const { t, locale: n } = rt(),
        s = os(),
        r = Ie(() => [
          { key: 'home-section', title: t('home') },
          { key: 'work', title: t('my-work') },
          { key: 'contact', title: t('contact') },
        ]),
        i = xe(0)
      let o
      ;(un(() => {
        ;((o = new IntersectionObserver(
          (u) => {
            u.forEach((f) => {
              if (f.isIntersecting) {
                const d = r.value.findIndex(
                  (p) => p.key === f.target.id || t(`anchors.${p.key}`) === f.target.id,
                )
                d !== -1 && (i.value = d)
              }
            })
          },
          { threshold: 0.5 },
        )),
          r.value.forEach((u) => {
            const f = document.getElementById(t(`anchors.${u.key}`))
            f && o.observe(f)
          }))
      }),
        ss(() => {
          o && o.disconnect()
        }))
      const l = (u) =>
          u === 'work'
            ? n.value === 'en'
              ? 'work'
              : 'proyectos'
            : u === 'contact'
              ? n.value === 'en'
                ? 'contact'
                : 'contacto'
              : u,
        a = (u) => {
          const f = document.getElementById(u)
          f && f.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        c = async (u) => {
          if (u === 'home-section') {
            const d = t(`anchors.${u}`)
            a(d)
            return
          }
          const f = l(u)
          ;(await s.push(`/${n.value}/${f}`),
            setTimeout(() => {
              const d = t(`anchors.${u}`)
              a(d)
            }, 50))
        }
      return (u, f) => (
        be(),
        Te('div', uv, [
          (be(!0),
          Te(
            Me,
            null,
            rn(
              r.value,
              (d, p) => (
                be(),
                Te(
                  'a',
                  {
                    key: d.key,
                    class: tt(['square', { active: p === i.value }]),
                    onClick: Sa((v) => c(d.key), ['prevent']),
                  },
                  [K('span', dv, we(d.title), 1)],
                  10,
                  fv,
                )
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  hv = Zt(pv, [['__scopeId', 'data-v-fe9f642f']]),
  Tr = qe({
    __name: 'homeSection',
    setup(e) {
      const t = ls(),
        { t: n } = rt(),
        s = (i) => {
          const o = document.getElementById(i)
          o && o.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        r = () => {
          t.meta?.section &&
            setTimeout(() => {
              const i = n(`anchors.${t.meta.section}`)
              s(i)
            }, 150)
        }
      return (
        un(() => {
          r()
        }),
        Tt(
          () => t.meta?.section,
          () => {
            r()
          },
        ),
        (i, o) => (be(), Te('div', null, [ge(Zg), ge(hv), ge(iv), ge(cv)]))
      )
    },
  }),
  Ri = Uh({
    history: _h('/'),
    routes: [
      { path: '/:lang(en|es)/', name: 'Home', component: Tr },
      {
        path: '/:lang(en|es)/:workSection(work|proyectos)',
        name: 'Work',
        component: Tr,
        meta: { section: 'work' },
      },
      {
        path: '/:lang(en|es)/:contactSection(contact|contacto)',
        name: 'Contact',
        component: Tr,
        meta: { section: 'contact' },
      },
      {
        path: '/:lang(en|es)/:section(projects|proyectos)/:slug',
        name: 'workDetail',
        component: Gg,
        props: !0,
      },
    ],
    scrollBehavior(e, t, n) {
      return e.meta?.section ? !1 : n || { top: 0 }
    },
  })
Ri.beforeEach((e, t, n) => {
  const s = e.params.lang,
    r = e.params.section,
    i = e.params.workSection,
    o = e.params.contactSection
  ;(s &&
    r &&
    r !== (s === 'en' ? 'projects' : 'proyectos') &&
    (e.name, { ...e.params }, e.query, e.hash),
    s &&
      i &&
      i !== (s === 'en' ? 'work' : 'proyectos') &&
      (e.name, { ...e.params }, e.query, e.hash),
    s &&
      o &&
      o !== (s === 'en' ? 'contact' : 'contacto') &&
      (e.name, { ...e.params }, e.query, e.hash),
    n())
})
const mv = 'Soy Diseñador UI/UX y Desarrollador Front-End',
  gv =
    'Soy un apasionado por crear interfaces que combinan estética y funcionalidad. Transformo ideas en experiencias digitales intuitivas que conectan con los usuarios.',
  vv = 'Inicio',
  bv = 'Contacto',
  _v = 'Tecnologías',
  yv = 'Descripción del proyecto',
  wv = 'Link',
  Sv = {
    'api-covid': {
      title: 'API Covid 19',
      description: `Este proyecto se desarrolló en el marco de la pandemia por el COVID 19 en el año 2020.
 Contó con un equipo formado por desarrolladores Back-end, Front-end y Diseñadores UI/UX.
 Los desarrolladores Back-end se encargaron de la API REST que consumía datos de la API de la Organización Mundial de la Salud (OMS) y la API de la Organización Mundial de la Salud (OMS). 
 Los desarrolladores Front-end se encargaron de la interfaz de usuario y la experiencia del usuario. `,
    },
    fit: {
      title: 'FIT - Flujo Intercooperativo de Trabajo',
      description: `El proyecto del FIT consistió en el diseño y desarrollo en Vue.js del sitio institucional del FIT - Flujo Intercooperativo de Trabajo. Este espacio es una red intercooperativa conformada por empresas tecnológicas pertenecientes a la Federación Argentina de Cooperativas de Trabajo de Tecnología, Innovación y Conocimiento. 
 El sitio posee un diseño y maquetado responsive y muestra la descripción y funcionamiento del espacio, las tecnologías utilizadas, casos de éxito y un formulario de contacto.`,
    },
    aurora: {
      title: 'Proyecto Aurora',
      description: `Proyecto Aurora es un proyecto del segmento Real Estate, en el cual trabajé en el desarrollo del sistema de diseño, creando átomos, componentes y layouts. 
 Estos elementos los apliqué en las vistas de Inicio, Edificio, Unidades y Contacto.`,
    },
    nayra: {
      title: 'Nayra',
      description: `Trabajé en el diseño y desarrollo en Vue.js del sitio institucional de Nayra, una empresa cooperativa de tecnología. 
 El sitio consta de una sección de Inicio, Sobre nosotros, Trabajos y Contacto. Además cuenta con un selector de idiomas.`,
    },
    pokedex: {
      title: 'Pokedex',
      description: `En el proyecto Pokedex trabajé en el diseño y desarrollo en Vue.js. Consiste en un buscador de pokemons, los cuales se pueden encontrar según su nombre, número o tipo. 
 Cada Pokemon posee su información detallada, como su tipo, habilidades, movimientos y más. Presionando una tarjeta de Pokemon se puede ver su información detallada. 
 El sitio consta de una sección de Inicio, Buscador y Listado de Pokemons. El buscador cuenta con un filtro por tipo y un buscador por nombre y número. El listado cuenta con un paginador y una selección de cantidad de Pokemons a mostrar. 
 También tiene un indicador de carga de Pokemons y un indicador de error en caso de que no se encuentre el Pokemon.`,
    },
    naranjax: {
      title: 'Naranja X - Soft refactor',
      description: `En el proyecto Naranja X - Soft refactor trabajé en el rediseño de los elementos gráficos y layouts de la app existente 'Naranja X' y además hice un prototipo interactivo y animado utilizando Figma. 
 Los flujos hechos fueron: Alias y CBU, Ingresar Dinero y Transferir.`,
    },
    icbc: {
      title: 'ICBC Home Banking - Soft refactor',
      description: `En el proyecto ICBC Home Banking - Soft refactor trabajé en el rediseño de múltiples layouts y elementos gráficos del Home Banking en su versión Desktop. 
 Los flujos hechos fueron: Transferencias, Cuentas, Consulta de CBU y Alias, Movimientos, Plazos fijos y simulación de Plazos fijos. 
 También hice un prototipo interactivo y animado utilizando Figma.`,
    },
  },
  Ev = {
    uiux: 'Diseño UI/UX',
    'uiux-improvements': 'Mejoras UI/UX',
    'uiux-system': 'Sistema de diseño UI/UX',
    'uiux-refactor': 'Refactor de UI/UX',
    html5: 'HTML5',
    css3: 'CSS3',
    vue: 'Vue.js',
    figma: 'Prototipo en Figma',
  },
  Tv = { 'home-section': 'inicio', work: 'proyectos', contact: 'contacto' },
  xv = {
    intro: mv,
    lead: gv,
    home: vv,
    'my-work': 'Proyectos',
    contact: bv,
    'my-resume': 'Mi CV',
    technologies: _v,
    description: yv,
    link: wv,
    'related-works': 'Trabajos Relacionados',
    'project-image': 'Imagen del proyecto',
    works: Sv,
    skills: Ev,
    anchors: Tv,
  },
  Cv = "I'm UI/UX Designer and Front-End Developer",
  Pv =
    'I am passionate about creating interfaces that combine aesthetics and functionality. I turn ideas into intuitive digital experiences that connect with users.',
  Iv = 'Home',
  kv = 'Contact',
  Lv = 'Project description',
  Ov = 'Technologies',
  Av = 'Link',
  Mv = {
    'api-covid': {
      title: 'API Covid 19',
      description: `This project was developed in the context of the COVID-19 pandemic in 2020.
 It had a team composed of Back-end developers, Front-end developers, and UI/UX Designers.
 The Back-end developers were in charge of the REST API that consumed data from the World Health Organization (WHO) API.
 The Front-end developers were responsible for the user interface and the user experience.`,
    },
    fit: {
      title: 'FIT - Flujo Intercooperativo de Trabajo',
      description: `The FIT project involved the design and development in Vue.js of the institutional website for FIT – Flujo Intercooperativo de Trabajo. This platform is an intercooperative network composed of technology companies belonging to the Argentine Federation of Technology, Innovation, and Knowledge Worker Cooperatives. 
 The site features a responsive design and layout, and it presents the description and operation of the platform, the technologies used, success stories, and a contact form.`,
    },
    aurora: {
      title: 'Proyecto Aurora',
      description: `Aurora Project is a Real Estate segment project, in which I worked on developing the design system by creating atoms, components, and layouts. 
 I applied these elements in the Home, Building, Apartment, and Contact views.`,
    },
    nayra: {
      title: 'Nayra',
      description: `I worked on the design and development in Vue.js of Nayra's corporate website, a technology cooperative company. 
 The site includes a Home section, About us, Projects, and Contact. It also features a language selector.`,
    },
    pokedex: {
      title: 'Pokedex',
      description: `In Pokedex project, I worked on the design and development using Vue.js. It consists of a Pokémon searcher, where Pokémon can be found by their name, number, or type. 
 Each Pokémon has detailed information, such as its type, abilities, moves, and more. Clicking on a Pokémon card displays its detailed information. 
 The site includes a Home section, a Search section, and a Pokémon List section. The searcher features a type filter and a search by name or number. The  list includes a paginator and an option to select the number of Pokémon to display. It also includes a loading indicator for Pokémon and an error indicator in case a Pokémon is not found.`,
    },
    naranjax: {
      title: 'Naranja X - Soft refactor',
      description: `In the Naranja X - Soft Refactor project, I worked on redesigning the graphic elements and layouts of the existing Naranja X app, and I also created an interactive animated prototype using Figma. 
 The completed flows were: Alias and CBU, Add Money, and Transfer.`,
    },
    icbc: {
      title: 'ICBC Home Banking - Soft refactor',
      description: `In the ICBC Home Banking - Soft Refactor project, I worked on redesigning multiple layouts and graphic elements of the Home Banking Desktop version. 
 The user flows developed were: Transfers, Accounts, CBU and Alias inquiry, Transactions, Fixed-term deposits, and Fixed-term deposit simulation. I also created an interactive and animated prototype using Figma.`,
    },
  },
  Rv = {
    uiux: 'UI/UX Design',
    'uiux-improvements': 'UI/UX Improvements',
    'uiux-system': 'UI/UX Design System',
    'uiux-refactor': 'UI/UX Refactor',
    html5: 'HTML5',
    css3: 'CSS3',
    vue: 'Vue.js',
    figma: 'Figma Prototype',
  },
  Nv = { 'home-section': 'home', work: 'my-work', contact: 'contact' },
  Dv = {
    intro: Cv,
    lead: Pv,
    home: Iv,
    'my-work': 'Work',
    contact: kv,
    'my-resume': 'My Resume',
    description: Lv,
    technologies: Ov,
    link: Av,
    'related-works': 'Related Works',
    'project-image': 'Project Image',
    works: Mv,
    skills: Rv,
    anchors: Nv,
  },
  Fv = { es: xv, en: Dv },
  Qr = Op({ legacy: !1, locale: 'en', fallbackLocale: 'es', messages: Fv }),
  Ni = Bf(rm)
Ni.use(Ri)
Ni.use(Qr)
Ri.beforeEach((e, t, n) => {
  const s = e.params.lang
  if (!['en', 'es'].includes(s)) return n('/' + Qr.global.locale.value + '/')
  ;((Qr.global.locale.value = s), n())
})
Ni.mount('#app')
setTimeout(() => {
  const e = document.getElementById('app-loader')
  e && (e.classList.add('hidden'), setTimeout(() => e.remove(), 600))
}, 2500)
