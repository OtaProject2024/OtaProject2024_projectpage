const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-Bb5c9SFv.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/about-DcxAKBUO.js","assets/part-C_Ix-38-.js","assets/contents-gngPVEXU.js","assets/notFound-B3bWx5cy.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qa(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const st={},cr=[],en=()=>{},Md=()=>!1,so=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),el=n=>n.startsWith("onUpdate:"),dt=Object.assign,tl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ed=Object.prototype.hasOwnProperty,$e=(n,e)=>Ed.call(n,e),De=Array.isArray,ur=n=>oo(n)==="[object Map]",vf=n=>oo(n)==="[object Set]",Ne=n=>typeof n=="function",ft=n=>typeof n=="string",br=n=>typeof n=="symbol",ot=n=>n!==null&&typeof n=="object",xf=n=>(ot(n)||Ne(n))&&Ne(n.then)&&Ne(n.catch),Sf=Object.prototype.toString,oo=n=>Sf.call(n),yd=n=>oo(n).slice(8,-1),Gr=n=>oo(n)==="[object Object]",nl=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=Qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Td=/-(\w)/g,Mn=ao(n=>n.replace(Td,(e,t)=>t?t.toUpperCase():"")),bd=/\B([A-Z])/g,Ar=ao(n=>n.replace(bd,"-$1").toLowerCase()),lo=ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),Lo=ao(n=>n?`on${lo(n)}`:""),li=(n,e)=>!Object.is(n,e),Do=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},qs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Ad=n=>{const e=parseFloat(n);return isNaN(e)?n:e},wd=n=>{const e=ft(n)?Number(n):NaN;return isNaN(e)?n:e};let Hl;const Mf=()=>Hl||(Hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function il(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?Ld(i):il(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ft(n)||ot(n))return n}const Rd=/;(?![^(]*\))/g,Cd=/:([^]+)/,Pd=/\/\*[^]*?\*\//g;function Ld(n){const e={};return n.replace(Pd,"").split(Rd).forEach(t=>{if(t){const i=t.split(Cd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function At(n){let e="";if(ft(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=At(n[t]);i&&(e+=i+" ")}else if(ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ud=Qa(Dd);function Ef(n){return!!n||n===""}const Id=n=>ft(n)?n:n==null?"":De(n)||ot(n)&&(n.toString===Sf||!Ne(n.toString))?JSON.stringify(n,yf,2):String(n),yf=(n,e)=>e&&e.__v_isRef?yf(n,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Uo(i,s)+" =>"]=r,t),{})}:vf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Uo(t))}:br(e)?Uo(e):ot(e)&&!De(e)&&!Gr(e)?String(e):e,Uo=(n,e="")=>{var t;return br(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class Nd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Od(n,e=an){e&&e.active&&e.effects.push(n)}function Fd(){return an}let Ui;class rl{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Od(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Hi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Bd(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Gi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ii,t=Ui;try{return ii=!0,Ui=this,this._runnings++,Gl(this),this.fn()}finally{Vl(this),this._runnings--,Ui=t,ii=e}}stop(){var e;this.active&&(Gl(this),Vl(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Bd(n){return n.value}function Gl(n){n._trackId++,n._depsLength=0}function Vl(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Tf(n.deps[e],n);n.deps.length=n._depsLength}}function Tf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let ii=!0,Ea=0;const bf=[];function Hi(){bf.push(ii),ii=!1}function Gi(){const n=bf.pop();ii=n===void 0?!0:n}function sl(){Ea++}function ol(){for(Ea--;!Ea&&ya.length;)ya.shift()()}function Af(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Tf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const ya=[];function wf(n,e,t){sl();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&ya.push(i.scheduler)))}ol()}const Rf=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ta=new WeakMap,Ii=Symbol(""),ba=Symbol("");function Ht(n,e,t){if(ii&&Ui){let i=Ta.get(n);i||Ta.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Rf(()=>i.delete(t))),Af(Ui,r)}}function On(n,e,t,i,r,s){const a=Ta.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&De(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!br(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":De(n)?nl(t)&&o.push(a.get("length")):(o.push(a.get(Ii)),ur(n)&&o.push(a.get(ba)));break;case"delete":De(n)||(o.push(a.get(Ii)),ur(n)&&o.push(a.get(ba)));break;case"set":ur(n)&&o.push(a.get(Ii));break}sl();for(const l of o)l&&wf(l,4);ol()}const zd=Qa("__proto__,__v_isRef,__isVue"),Cf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(br)),kl=Hd();function Hd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ye(this);for(let s=0,a=this.length;s<a;s++)Ht(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Hi(),sl();const i=Ye(this)[e].apply(this,t);return ol(),Gi(),i}}),n}function Gd(n){const e=Ye(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class Pf{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?ep:If:s?Uf:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=De(e);if(!r){if(a&&$e(kl,t))return Reflect.get(kl,t,i);if(t==="hasOwnProperty")return Gd}const o=Reflect.get(e,t,i);return(br(t)?Cf.has(t):zd(t))||(r||Ht(e,"get",t),s)?o:Gt(o)?a&&nl(t)?o:o.value:ot(o)?r?Of(o):uo(o):o}}class Lf extends Pf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._shallow){const l=_r(s);if(!$s(i)&&!_r(i)&&(s=Ye(s),i=Ye(i)),!De(e)&&Gt(s)&&!Gt(i))return l?!1:(s.value=i,!0)}const a=De(e)&&nl(t)?Number(t)<e.length:$e(e,t),o=Reflect.set(e,t,i,r);return e===Ye(r)&&(a?li(i,s)&&On(e,"set",t,i):On(e,"add",t,i)),o}deleteProperty(e,t){const i=$e(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&On(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!br(t)||!Cf.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",De(e)?"length":Ii),Reflect.ownKeys(e)}}class Vd extends Pf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const kd=new Lf,Wd=new Vd,Xd=new Lf(!0),al=n=>n,co=n=>Reflect.getPrototypeOf(n);function us(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ye(n),s=Ye(e);t||(li(e,s)&&Ht(r,"get",e),Ht(r,"get",s));const{has:a}=co(r),o=i?al:t?ul:jr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function fs(n,e=!1){const t=this.__v_raw,i=Ye(t),r=Ye(n);return e||(li(n,r)&&Ht(i,"has",n),Ht(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function hs(n,e=!1){return n=n.__v_raw,!e&&Ht(Ye(n),"iterate",Ii),Reflect.get(n,"size",n)}function Wl(n){n=Ye(n);const e=Ye(this);return co(e).has.call(e,n)||(e.add(n),On(e,"add",n,n)),this}function Xl(n,e){e=Ye(e);const t=Ye(this),{has:i,get:r}=co(t);let s=i.call(t,n);s||(n=Ye(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?li(e,a)&&On(t,"set",n,e):On(t,"add",n,e),this}function ql(n){const e=Ye(this),{has:t,get:i}=co(e);let r=t.call(e,n);r||(n=Ye(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&On(e,"delete",n,void 0),s}function $l(){const n=Ye(this),e=n.size!==0,t=n.clear();return e&&On(n,"clear",void 0,void 0),t}function ds(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Ye(a),l=e?al:n?ul:jr;return!n&&Ht(o,"iterate",Ii),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ps(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),a=ur(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?al:e?ul:jr;return!e&&Ht(s,"iterate",l?ba:Ii),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Gn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function qd(){const n={get(s){return us(this,s)},get size(){return hs(this)},has:fs,add:Wl,set:Xl,delete:ql,clear:$l,forEach:ds(!1,!1)},e={get(s){return us(this,s,!1,!0)},get size(){return hs(this)},has:fs,add:Wl,set:Xl,delete:ql,clear:$l,forEach:ds(!1,!0)},t={get(s){return us(this,s,!0)},get size(){return hs(this,!0)},has(s){return fs.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:ds(!0,!1)},i={get(s){return us(this,s,!0,!0)},get size(){return hs(this,!0)},has(s){return fs.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:ds(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ps(s,!1,!1),t[s]=ps(s,!0,!1),e[s]=ps(s,!1,!0),i[s]=ps(s,!0,!0)}),[n,t,e,i]}const[$d,jd,Yd,Kd]=qd();function ll(n,e){const t=e?n?Kd:Yd:n?jd:$d;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get($e(t,r)&&r in i?t:i,r,s)}const Zd={get:ll(!1,!1)},Jd={get:ll(!1,!0)},Qd={get:ll(!0,!1)},Df=new WeakMap,Uf=new WeakMap,If=new WeakMap,ep=new WeakMap;function tp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function np(n){return n.__v_skip||!Object.isExtensible(n)?0:tp(yd(n))}function uo(n){return _r(n)?n:cl(n,!1,kd,Zd,Df)}function Nf(n){return cl(n,!1,Xd,Jd,Uf)}function Of(n){return cl(n,!0,Wd,Qd,If)}function cl(n,e,t,i,r){if(!ot(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=np(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function fr(n){return _r(n)?fr(n.__v_raw):!!(n&&n.__v_isReactive)}function _r(n){return!!(n&&n.__v_isReadonly)}function $s(n){return!!(n&&n.__v_isShallow)}function Ff(n){return fr(n)||_r(n)}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Bf(n){return Object.isExtensible(n)&&qs(n,"__v_skip",!0),n}const jr=n=>ot(n)?uo(n):n,ul=n=>ot(n)?Of(n):n;class zf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rl(()=>e(this._value),()=>zs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ye(this);return(!e._cacheable||e.effect.dirty)&&li(e._value,e._value=e.effect.run())&&zs(e,4),Hf(e),e.effect._dirtyLevel>=2&&zs(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ip(n,e,t=!1){let i,r;const s=Ne(n);return s?(i=n,r=en):(i=n.get,r=n.set),new zf(i,r,s||!r,t)}function Hf(n){var e;ii&&Ui&&(n=Ye(n),Af(Ui,(e=n.dep)!=null?e:n.dep=Rf(()=>n.dep=void 0,n instanceof zf?n:void 0)))}function zs(n,e=4,t){n=Ye(n);const i=n.dep;i&&wf(i,e)}function Gt(n){return!!(n&&n.__v_isRef===!0)}function Ai(n){return Gf(n,!1)}function rp(n){return Gf(n,!0)}function Gf(n,e){return Gt(n)?n:new sp(n,e)}class sp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ye(e),this._value=t?e:jr(e)}get value(){return Hf(this),this._value}set value(e){const t=this.__v_isShallow||$s(e)||_r(e);e=t?e:Ye(e),li(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:jr(e),zs(this,4))}}function hr(n){return Gt(n)?n.value:n}const op={get:(n,e,t)=>hr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Gt(r)&&!Gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Vf(n){return fr(n)?n:new Proxy(n,op)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ri(n,e,t,i){try{return i?n(...i):n()}catch(r){fo(r,e,t)}}function tn(n,e,t,i){if(Ne(n)){const s=ri(n,e,t,i);return s&&xf(s)&&s.catch(a=>{fo(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(tn(n[s],e,t,i));return r}function fo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ri(l,null,10,[n,a,o]);return}}ap(n,t,r,i)}function ap(n,e,t,i=!0){console.error(n)}let Yr=!1,Aa=!1;const wt=[];let vn=0;const dr=[];let Zn=null,wi=0;const kf=Promise.resolve();let fl=null;function js(n){const e=fl||kf;return n?e.then(this?n.bind(this):n):e}function lp(n){let e=vn+1,t=wt.length;for(;e<t;){const i=e+t>>>1,r=wt[i],s=Kr(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function hl(n){(!wt.length||!wt.includes(n,Yr&&n.allowRecurse?vn+1:vn))&&(n.id==null?wt.push(n):wt.splice(lp(n.id),0,n),Wf())}function Wf(){!Yr&&!Aa&&(Aa=!0,fl=kf.then(qf))}function cp(n){const e=wt.indexOf(n);e>vn&&wt.splice(e,1)}function up(n){De(n)?dr.push(...n):(!Zn||!Zn.includes(n,n.allowRecurse?wi+1:wi))&&dr.push(n),Wf()}function jl(n,e,t=Yr?vn+1:0){for(;t<wt.length;t++){const i=wt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;wt.splice(t,1),t--,i()}}}function Xf(n){if(dr.length){const e=[...new Set(dr)].sort((t,i)=>Kr(t)-Kr(i));if(dr.length=0,Zn){Zn.push(...e);return}for(Zn=e,wi=0;wi<Zn.length;wi++)Zn[wi]();Zn=null,wi=0}}const Kr=n=>n.id==null?1/0:n.id,fp=(n,e)=>{const t=Kr(n)-Kr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function qf(n){Aa=!1,Yr=!0,wt.sort(fp);try{for(vn=0;vn<wt.length;vn++){const e=wt[vn];e&&e.active!==!1&&ri(e,null,14)}}finally{vn=0,wt.length=0,Xf(),Yr=!1,fl=null,(wt.length||dr.length)&&qf()}}function hp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||st;h&&(r=t.map(m=>ft(m)?m.trim():m)),f&&(r=t.map(Ad))}let o,l=i[o=Lo(e)]||i[o=Lo(Mn(e))];!l&&s&&(l=i[o=Lo(Ar(e))]),l&&tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,tn(c,n,6,r)}}function $f(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ne(n)){const l=c=>{const u=$f(c,e,!0);u&&(o=!0,dt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(ot(n)&&i.set(n,null),null):(De(s)?s.forEach(l=>a[l]=null):dt(a,s),ot(n)&&i.set(n,a),a)}function ho(n,e){return!n||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,Ar(e))||$e(n,e))}let Ut=null,jf=null;function Ys(n){const e=Ut;return Ut=n,jf=n&&n.type.__scopeId||null,e}function Lt(n,e=Ut,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&oc(-1);const s=Ys(e);let a;try{a=n(...r)}finally{Ys(s),i._d&&oc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Io(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:v}=n;let p,d;const y=Ys(n);try{if(t.shapeFlag&4){const R=r||i,U=R;p=gn(u.call(U,R,f,s,m,h,_)),d=l}else{const R=e;p=gn(R.length>1?R(s,{attrs:l,slots:o,emit:c}):R(s,null)),d=e.props?l:dp(l)}}catch(R){Xr.length=0,fo(R,n,1),p=Ke(Fn)}let S=p;if(d&&v!==!1){const R=Object.keys(d),{shapeFlag:U}=S;R.length&&U&7&&(a&&R.some(el)&&(d=pp(d,a)),S=ci(S,d))}return t.dirs&&(S=ci(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,Ys(y),p}const dp=n=>{let e;for(const t in n)(t==="class"||t==="style"||so(t))&&((e||(e={}))[t]=n[t]);return e},pp=(n,e)=>{const t={};for(const i in n)(!el(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function mp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Yl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!ho(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Yl(i,a,c):!0:!!a;return!1}function Yl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ho(t,s))return!0}return!1}function gp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const _p="components";function Yf(n,e){return xp(_p,n,!0,e)||n}const vp=Symbol.for("v-ndc");function xp(n,e,t=!0,i=!1){const r=Ut||Mt;if(r){const s=r.type;{const o=gm(s,!1);if(o&&(o===e||o===Mn(e)||o===lo(Mn(e))))return s}const a=Kl(r[n]||s[n],e)||Kl(r.appContext[n],e);return!a&&i?s:a}}function Kl(n,e){return n&&(n[e]||n[Mn(e)]||n[lo(Mn(e))])}const Sp=n=>n.__isSuspense;function Mp(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):up(n)}const Ep=Symbol.for("v-scx"),yp=()=>Sn(Ep),ms={};function Hs(n,e,t){return Kf(n,e,t)}function Kf(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:a,onTrigger:o}=st){if(e&&s){const w=e;e=(...P)=>{w(...P),U()}}const l=Mt,c=w=>i===!0?w:Li(w,i===!1?1:void 0);let u,f=!1,h=!1;if(Gt(n)?(u=()=>n.value,f=$s(n)):fr(n)?(u=()=>c(n),f=!0):De(n)?(h=!0,f=n.some(w=>fr(w)||$s(w)),u=()=>n.map(w=>{if(Gt(w))return w.value;if(fr(w))return c(w);if(Ne(w))return ri(w,l,2)})):Ne(n)?e?u=()=>ri(n,l,2):u=()=>(m&&m(),tn(n,l,3,[_])):u=en,e&&i){const w=u;u=()=>Li(w())}let m,_=w=>{m=S.onStop=()=>{ri(w,l,4),m=S.onStop=void 0}},v;if(xo)if(_=en,e?t&&tn(e,l,3,[u(),h?[]:void 0,_]):u(),r==="sync"){const w=yp();v=w.__watcherHandles||(w.__watcherHandles=[])}else return en;let p=h?new Array(n.length).fill(ms):ms;const d=()=>{if(!(!S.active||!S.dirty))if(e){const w=S.run();(i||f||(h?w.some((P,k)=>li(P,p[k])):li(w,p)))&&(m&&m(),tn(e,l,3,[w,p===ms?void 0:h&&p[0]===ms?[]:p,_]),p=w)}else S.run()};d.allowRecurse=!!e;let y;r==="sync"?y=d:r==="post"?y=()=>Nt(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),y=()=>hl(d));const S=new rl(u,en,y),R=Fd(),U=()=>{S.stop(),R&&tl(R.effects,S)};return e?t?d():p=S.run():r==="post"?Nt(S.run.bind(S),l&&l.suspense):S.run(),v&&v.push(U),U}function Tp(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?Zf(i,n):()=>i[n]:n.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,t=e);const a=ns(this),o=Kf(r,s.bind(i),t);return a(),o}function Zf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Li(n,e,t=0,i){if(!ot(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),Gt(n))Li(n.value,e,t,i);else if(De(n))for(let r=0;r<n.length;r++)Li(n[r],e,t,i);else if(vf(n)||ur(n))n.forEach(r=>{Li(r,e,t,i)});else if(Gr(n))for(const r in n)Li(n[r],e,t,i);return n}function sr(n,e){if(Ut===null)return n;const t=So(Ut)||Ut.proxy,i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=st]=e[r];s&&(Ne(s)&&(s={mounted:s,updated:s}),s.deep&&Li(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function pi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Hi(),tn(l,t,8,[n.el,o,n,e]),Gi())}}const Jn=Symbol("_leaveCb"),gs=Symbol("_enterCb");function bp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dl(()=>{n.isMounted=!0}),ih(()=>{n.isUnmounting=!0}),n}const Yt=[Function,Array],Jf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},Ap={name:"BaseTransition",props:Jf,setup(n,{slots:e}){const t=fm(),i=bp();let r;return()=>{const s=e.default&&eh(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const v of s)if(v.type!==Fn){a=v;break}}const o=Ye(n),{mode:l}=o;if(i.isLeaving)return No(a);const c=Zl(a);if(!c)return No(a);const u=wa(c,o,i,t);Ra(c,u);const f=t.subTree,h=f&&Zl(f);let m=!1;const{getTransitionKey:_}=c.type;if(_){const v=_();r===void 0?r=v:v!==r&&(r=v,m=!0)}if(h&&h.type!==Fn&&(!Ri(c,h)||m)){const v=wa(h,o,i,t);if(Ra(h,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},No(a);l==="in-out"&&c.type!==Fn&&(v.delayLeave=(p,d,y)=>{const S=Qf(i,h);S[String(h.key)]=h,p[Jn]=()=>{d(),p[Jn]=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},wp=Ap;function Qf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function wa(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:v,onAppear:p,onAfterAppear:d,onAppearCancelled:y}=e,S=String(n.key),R=Qf(t,n),U=(k,le)=>{k&&tn(k,i,9,le)},w=(k,le)=>{const x=le[1];U(k,le),De(k)?k.every(A=>A.length<=1)&&x():k.length<=1&&x()},P={mode:s,persisted:a,beforeEnter(k){let le=o;if(!t.isMounted)if(r)le=v||o;else return;k[Jn]&&k[Jn](!0);const x=R[S];x&&Ri(n,x)&&x.el[Jn]&&x.el[Jn](),U(le,[k])},enter(k){let le=l,x=c,A=u;if(!t.isMounted)if(r)le=p||l,x=d||c,A=y||u;else return;let B=!1;const ie=k[gs]=D=>{B||(B=!0,D?U(A,[k]):U(x,[k]),P.delayedLeave&&P.delayedLeave(),k[gs]=void 0)};le?w(le,[k,ie]):ie()},leave(k,le){const x=String(n.key);if(k[gs]&&k[gs](!0),t.isUnmounting)return le();U(f,[k]);let A=!1;const B=k[Jn]=ie=>{A||(A=!0,le(),ie?U(_,[k]):U(m,[k]),k[Jn]=void 0,R[x]===n&&delete R[x])};R[x]=n,h?w(h,[k,B]):B()},clone(k){return wa(k,e,t,i)}};return P}function No(n){if(po(n))return n=ci(n),n.children=null,n}function Zl(n){return po(n)?n.children?n.children[0]:void 0:n}function Ra(n,e){n.shapeFlag&6&&n.component?Ra(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function eh(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===ln?(a.patchFlag&128&&r++,i=i.concat(eh(a.children,e,o))):(e||a.type!==Fn)&&i.push(o!=null?ci(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function th(n,e){return Ne(n)?dt({name:n.name},e,{setup:n}):n}const Gs=n=>!!n.type.__asyncLoader,po=n=>n.type.__isKeepAlive;function Rp(n,e){nh(n,"a",e)}function Cp(n,e){nh(n,"da",e)}function nh(n,e,t=Mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(mo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)po(r.parent.vnode)&&Pp(i,e,t,r),r=r.parent}}function Pp(n,e,t,i){const r=mo(e,n,i,!0);rh(()=>{tl(i[e],r)},t)}function mo(n,e,t=Mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Hi();const o=ns(t),l=tn(e,t,n,a);return o(),Gi(),l});return i?r.unshift(s):r.push(s),s}}const Hn=n=>(e,t=Mt)=>(!xo||n==="sp")&&mo(n,(...i)=>e(...i),t),Lp=Hn("bm"),dl=Hn("m"),Dp=Hn("bu"),Up=Hn("u"),ih=Hn("bum"),rh=Hn("um"),Ip=Hn("sp"),Np=Hn("rtg"),Op=Hn("rtc");function Fp(n,e=Mt){mo("ec",n,e)}function tT(n,e,t,i){let r;const s=t;if(De(n)||ft(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ot(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s)}}else r=[];return r}const Ca=n=>n?gh(n)?So(n)||n.proxy:Ca(n.parent):null,kr=dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ca(n.parent),$root:n=>Ca(n.root),$emit:n=>n.emit,$options:n=>pl(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,hl(n.update)}),$nextTick:n=>n.n||(n.n=js.bind(n.proxy)),$watch:n=>Tp.bind(n)}),Oo=(n,e)=>n!==st&&!n.__isScriptSetup&&$e(n,e),Bp={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Oo(i,e))return a[e]=1,i[e];if(r!==st&&$e(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&$e(c,e))return a[e]=3,s[e];if(t!==st&&$e(t,e))return a[e]=4,t[e];Pa&&(a[e]=0)}}const u=kr[e];let f,h;if(u)return e==="$attrs"&&Ht(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==st&&$e(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,$e(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Oo(r,e)?(r[e]=t,!0):i!==st&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==st&&$e(n,a)||Oo(e,a)||(o=s[0])&&$e(o,a)||$e(i,a)||$e(kr,a)||$e(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Jl(n){return De(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pa=!0;function zp(n){const e=pl(n),t=n.proxy,i=n.ctx;Pa=!1,e.beforeCreate&&Ql(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:y,destroyed:S,unmounted:R,render:U,renderTracked:w,renderTriggered:P,errorCaptured:k,serverPrefetch:le,expose:x,inheritAttrs:A,components:B,directives:ie,filters:D}=e;if(c&&Hp(c,i,null),a)for(const ee in a){const W=a[ee];Ne(W)&&(i[ee]=W.bind(t))}if(r){const ee=r.call(t,t);ot(ee)&&(n.data=uo(ee))}if(Pa=!0,s)for(const ee in s){const W=s[ee],ne=Ne(W)?W.bind(t,t):Ne(W.get)?W.get.bind(t,t):en,ue=!Ne(W)&&Ne(W.set)?W.set.bind(t):en,ce=Jt({get:ne,set:ue});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ce.value,set:Se=>ce.value=Se})}if(o)for(const ee in o)sh(o[ee],i,t,ee);if(l){const ee=Ne(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(W=>{Vs(W,ee[W])})}u&&Ql(u,n,"c");function V(ee,W){De(W)?W.forEach(ne=>ee(ne.bind(t))):W&&ee(W.bind(t))}if(V(Lp,f),V(dl,h),V(Dp,m),V(Up,_),V(Rp,v),V(Cp,p),V(Fp,k),V(Op,w),V(Np,P),V(ih,y),V(rh,R),V(Ip,le),De(x))if(x.length){const ee=n.exposed||(n.exposed={});x.forEach(W=>{Object.defineProperty(ee,W,{get:()=>t[W],set:ne=>t[W]=ne})})}else n.exposed||(n.exposed={});U&&n.render===en&&(n.render=U),A!=null&&(n.inheritAttrs=A),B&&(n.components=B),ie&&(n.directives=ie)}function Hp(n,e,t=en){De(n)&&(n=La(n));for(const i in n){const r=n[i];let s;ot(r)?"default"in r?s=Sn(r.from||i,r.default,!0):s=Sn(r.from||i):s=Sn(r),Gt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ql(n,e,t){tn(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function sh(n,e,t,i){const r=i.includes(".")?Zf(t,i):()=>t[i];if(ft(n)){const s=e[n];Ne(s)&&Hs(r,s)}else if(Ne(n))Hs(r,n.bind(t));else if(ot(n))if(De(n))n.forEach(s=>sh(s,e,t,i));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&Hs(r,s,n)}}function pl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ks(l,c,a,!0)),Ks(l,e,a)),ot(e)&&s.set(e,l),l}function Ks(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ks(n,s,t,!0),r&&r.forEach(a=>Ks(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Gp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Gp={data:ec,props:tc,emits:tc,methods:Hr,computed:Hr,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Hr,directives:Hr,watch:kp,provide:ec,inject:Vp};function ec(n,e){return e?n?function(){return dt(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function Vp(n,e){return Hr(La(n),La(e))}function La(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function Hr(n,e){return n?dt(Object.create(null),n,e):e}function tc(n,e){return n?De(n)&&De(e)?[...new Set([...n,...e])]:dt(Object.create(null),Jl(n),Jl(e??{})):e}function kp(n,e){if(!n)return e;if(!e)return n;const t=dt(Object.create(null),n);for(const i in e)t[i]=Ct(n[i],e[i]);return t}function oh(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wp=0;function Xp(n,e){return function(i,r=null){Ne(i)||(i=dt({},i)),r!=null&&!ot(r)&&(r=null);const s=oh(),a=new WeakSet;let o=!1;const l=s.app={_uid:Wp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:vm,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ne(c.install)?(a.add(c),c.install(l,...u)):Ne(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Ke(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,So(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Wr;Wr=l;try{return c()}finally{Wr=u}}};return l}}let Wr=null;function Vs(n,e){if(Mt){let t=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===t&&(t=Mt.provides=Object.create(i)),t[n]=e}}function Sn(n,e,t=!1){const i=Mt||Ut;if(i||Wr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Wr._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ne(e)?e.call(i&&i.proxy):e}}function qp(n,e,t,i=!1){const r={},s={};qs(s,vo,1),n.propsDefaults=Object.create(null),ah(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Nf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function $p(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ye(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ho(n.emitsOptions,h))continue;const m=e[h];if(l)if($e(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=Mn(h);r[_]=Da(l,o,_,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{ah(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!$e(e,f)&&((u=Ar(f))===f||!$e(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Da(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!$e(e,f))&&(delete s[f],c=!0)}c&&On(n,"set","$attrs")}function ah(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Vr(l))continue;const c=e[l];let u;r&&$e(r,u=Mn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ho(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ye(t),c=o||st;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Da(r,l,f,c[f],n,!$e(c,f))}}return a}function Da(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=$e(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ne(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ns(r);i=c[t]=l.call(null,e),u()}}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ar(t))&&(i=!0))}return i}function lh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ne(n)){const u=f=>{l=!0;const[h,m]=lh(f,e,!0);dt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ot(n)&&i.set(n,cr),cr;if(De(s))for(let u=0;u<s.length;u++){const f=Mn(s[u]);nc(f)&&(a[f]=st)}else if(s)for(const u in s){const f=Mn(u);if(nc(f)){const h=s[u],m=a[f]=De(h)||Ne(h)?{type:h}:dt({},h);if(m){const _=sc(Boolean,m.type),v=sc(String,m.type);m[0]=_>-1,m[1]=v<0||_<v,(_>-1||$e(m,"default"))&&o.push(f)}}}const c=[a,o];return ot(n)&&i.set(n,c),c}function nc(n){return n[0]!=="$"&&!Vr(n)}function ic(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function rc(n,e){return ic(n)===ic(e)}function sc(n,e){return De(e)?e.findIndex(t=>rc(t,n)):Ne(e)&&rc(e,n)?0:-1}const ch=n=>n[0]==="_"||n==="$stable",ml=n=>De(n)?n.map(gn):[gn(n)],jp=(n,e,t)=>{if(e._n)return e;const i=Lt((...r)=>ml(e(...r)),t);return i._c=!1,i},uh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ch(r))continue;const s=n[r];if(Ne(s))e[r]=jp(r,s,i);else if(s!=null){const a=ml(s);e[r]=()=>a}}},fh=(n,e)=>{const t=ml(e);n.slots.default=()=>t},Yp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ye(e),qs(e,"_",t)):uh(e,n.slots={})}else n.slots={},e&&fh(n,e);qs(n.slots,vo,1)},Kp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=st;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(dt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,uh(e,r)),a=e}else e&&(fh(n,e),a={default:1});if(s)for(const o in r)!ch(o)&&a[o]==null&&delete r[o]};function Ua(n,e,t,i,r=!1){if(De(n)){n.forEach((h,m)=>Ua(h,e&&(De(e)?e[m]:e),t,i,r));return}if(Gs(i)&&!r)return;const s=i.shapeFlag&4?So(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===st?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,$e(f,c)&&(f[c]=null)):Gt(c)&&(c.value=null)),Ne(l))ri(l,o,12,[a,u]);else{const h=ft(l),m=Gt(l);if(h||m){const _=()=>{if(n.f){const v=h?$e(f,l)?f[l]:u[l]:l.value;r?De(v)&&tl(v,s):De(v)?v.includes(s)||v.push(s):h?(u[l]=[s],$e(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,$e(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,Nt(_,t)):_()}}}const Nt=Mp;function Zp(n){return Jp(n)}function Jp(n,e){const t=Mf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=en,insertStaticContent:_}=n,v=(T,b,I,H=null,Y=null,te=null,M=void 0,g=null,L=!!b.dynamicChildren)=>{if(T===b)return;T&&!Ri(T,b)&&(H=z(T),Se(T,Y,te,!0),T=null),b.patchFlag===-2&&(L=!1,b.dynamicChildren=null);const{type:N,ref:F,shapeFlag:X}=b;switch(N){case go:p(T,b,I,H);break;case Fn:d(T,b,I,H);break;case ks:T==null&&y(b,I,H,M);break;case ln:B(T,b,I,H,Y,te,M,g,L);break;default:X&1?U(T,b,I,H,Y,te,M,g,L):X&6?ie(T,b,I,H,Y,te,M,g,L):(X&64||X&128)&&N.process(T,b,I,H,Y,te,M,g,L,pe)}F!=null&&Y&&Ua(F,T&&T.ref,te,b||T,!b)},p=(T,b,I,H)=>{if(T==null)i(b.el=o(b.children),I,H);else{const Y=b.el=T.el;b.children!==T.children&&c(Y,b.children)}},d=(T,b,I,H)=>{T==null?i(b.el=l(b.children||""),I,H):b.el=T.el},y=(T,b,I,H)=>{[T.el,T.anchor]=_(T.children,b,I,H,T.el,T.anchor)},S=({el:T,anchor:b},I,H)=>{let Y;for(;T&&T!==b;)Y=h(T),i(T,I,H),T=Y;i(b,I,H)},R=({el:T,anchor:b})=>{let I;for(;T&&T!==b;)I=h(T),r(T),T=I;r(b)},U=(T,b,I,H,Y,te,M,g,L)=>{b.type==="svg"?M="svg":b.type==="math"&&(M="mathml"),T==null?w(b,I,H,Y,te,M,g,L):le(T,b,Y,te,M,g,L)},w=(T,b,I,H,Y,te,M,g)=>{let L,N;const{props:F,shapeFlag:X,transition:ae,dirs:re}=T;if(L=T.el=a(T.type,te,F&&F.is,F),X&8?u(L,T.children):X&16&&k(T.children,L,null,H,Y,Fo(T,te),M,g),re&&pi(T,null,H,"created"),P(L,T,T.scopeId,M,H),F){for(const xe in F)xe!=="value"&&!Vr(xe)&&s(L,xe,null,F[xe],te,T.children,H,Y,_e);"value"in F&&s(L,"value",null,F.value,te),(N=F.onVnodeBeforeMount)&&mn(N,H,T)}re&&pi(T,null,H,"beforeMount");const fe=Qp(Y,ae);fe&&ae.beforeEnter(L),i(L,b,I),((N=F&&F.onVnodeMounted)||fe||re)&&Nt(()=>{N&&mn(N,H,T),fe&&ae.enter(L),re&&pi(T,null,H,"mounted")},Y)},P=(T,b,I,H,Y)=>{if(I&&m(T,I),H)for(let te=0;te<H.length;te++)m(T,H[te]);if(Y){let te=Y.subTree;if(b===te){const M=Y.vnode;P(T,M,M.scopeId,M.slotScopeIds,Y.parent)}}},k=(T,b,I,H,Y,te,M,g,L=0)=>{for(let N=L;N<T.length;N++){const F=T[N]=g?Qn(T[N]):gn(T[N]);v(null,F,b,I,H,Y,te,M,g)}},le=(T,b,I,H,Y,te,M)=>{const g=b.el=T.el;let{patchFlag:L,dynamicChildren:N,dirs:F}=b;L|=T.patchFlag&16;const X=T.props||st,ae=b.props||st;let re;if(I&&mi(I,!1),(re=ae.onVnodeBeforeUpdate)&&mn(re,I,b,T),F&&pi(b,T,I,"beforeUpdate"),I&&mi(I,!0),N?x(T.dynamicChildren,N,g,I,H,Fo(b,Y),te):M||W(T,b,g,null,I,H,Fo(b,Y),te,!1),L>0){if(L&16)A(g,b,X,ae,I,H,Y);else if(L&2&&X.class!==ae.class&&s(g,"class",null,ae.class,Y),L&4&&s(g,"style",X.style,ae.style,Y),L&8){const fe=b.dynamicProps;for(let xe=0;xe<fe.length;xe++){const ye=fe[xe],oe=X[ye],ze=ae[ye];(ze!==oe||ye==="value")&&s(g,ye,oe,ze,Y,T.children,I,H,_e)}}L&1&&T.children!==b.children&&u(g,b.children)}else!M&&N==null&&A(g,b,X,ae,I,H,Y);((re=ae.onVnodeUpdated)||F)&&Nt(()=>{re&&mn(re,I,b,T),F&&pi(b,T,I,"updated")},H)},x=(T,b,I,H,Y,te,M)=>{for(let g=0;g<b.length;g++){const L=T[g],N=b[g],F=L.el&&(L.type===ln||!Ri(L,N)||L.shapeFlag&70)?f(L.el):I;v(L,N,F,null,H,Y,te,M,!0)}},A=(T,b,I,H,Y,te,M)=>{if(I!==H){if(I!==st)for(const g in I)!Vr(g)&&!(g in H)&&s(T,g,I[g],null,M,b.children,Y,te,_e);for(const g in H){if(Vr(g))continue;const L=H[g],N=I[g];L!==N&&g!=="value"&&s(T,g,N,L,M,b.children,Y,te,_e)}"value"in H&&s(T,"value",I.value,H.value,M)}},B=(T,b,I,H,Y,te,M,g,L)=>{const N=b.el=T?T.el:o(""),F=b.anchor=T?T.anchor:o("");let{patchFlag:X,dynamicChildren:ae,slotScopeIds:re}=b;re&&(g=g?g.concat(re):re),T==null?(i(N,I,H),i(F,I,H),k(b.children||[],I,F,Y,te,M,g,L)):X>0&&X&64&&ae&&T.dynamicChildren?(x(T.dynamicChildren,ae,I,Y,te,M,g),(b.key!=null||Y&&b===Y.subTree)&&hh(T,b,!0)):W(T,b,I,F,Y,te,M,g,L)},ie=(T,b,I,H,Y,te,M,g,L)=>{b.slotScopeIds=g,T==null?b.shapeFlag&512?Y.ctx.activate(b,I,H,M,L):D(b,I,H,Y,te,M,L):j(T,b,L)},D=(T,b,I,H,Y,te,M)=>{const g=T.component=um(T,H,Y);if(po(T)&&(g.ctx.renderer=pe),hm(g),g.asyncDep){if(Y&&Y.registerDep(g,V),!T.el){const L=g.subTree=Ke(Fn);d(null,L,b,I)}}else V(g,T,b,I,Y,te,M)},j=(T,b,I)=>{const H=b.component=T.component;if(mp(T,b,I))if(H.asyncDep&&!H.asyncResolved){ee(H,b,I);return}else H.next=b,cp(H.update),H.effect.dirty=!0,H.update();else b.el=T.el,H.vnode=b},V=(T,b,I,H,Y,te,M)=>{const g=()=>{if(T.isMounted){let{next:F,bu:X,u:ae,parent:re,vnode:fe}=T;{const Oe=dh(T);if(Oe){F&&(F.el=fe.el,ee(T,F,M)),Oe.asyncDep.then(()=>{T.isUnmounted||g()});return}}let xe=F,ye;mi(T,!1),F?(F.el=fe.el,ee(T,F,M)):F=fe,X&&Do(X),(ye=F.props&&F.props.onVnodeBeforeUpdate)&&mn(ye,re,F,fe),mi(T,!0);const oe=Io(T),ze=T.subTree;T.subTree=oe,v(ze,oe,f(ze.el),z(ze),T,Y,te),F.el=oe.el,xe===null&&gp(T,oe.el),ae&&Nt(ae,Y),(ye=F.props&&F.props.onVnodeUpdated)&&Nt(()=>mn(ye,re,F,fe),Y)}else{let F;const{el:X,props:ae}=b,{bm:re,m:fe,parent:xe}=T,ye=Gs(b);if(mi(T,!1),re&&Do(re),!ye&&(F=ae&&ae.onVnodeBeforeMount)&&mn(F,xe,b),mi(T,!0),X&&O){const oe=()=>{T.subTree=Io(T),O(X,T.subTree,T,Y,null)};ye?b.type.__asyncLoader().then(()=>!T.isUnmounted&&oe()):oe()}else{const oe=T.subTree=Io(T);v(null,oe,I,H,T,Y,te),b.el=oe.el}if(fe&&Nt(fe,Y),!ye&&(F=ae&&ae.onVnodeMounted)){const oe=b;Nt(()=>mn(F,xe,oe),Y)}(b.shapeFlag&256||xe&&Gs(xe.vnode)&&xe.vnode.shapeFlag&256)&&T.a&&Nt(T.a,Y),T.isMounted=!0,b=I=H=null}},L=T.effect=new rl(g,en,()=>hl(N),T.scope),N=T.update=()=>{L.dirty&&L.run()};N.id=T.uid,mi(T,!0),N()},ee=(T,b,I)=>{b.component=T;const H=T.vnode.props;T.vnode=b,T.next=null,$p(T,b.props,H,I),Kp(T,b.children,I),Hi(),jl(T),Gi()},W=(T,b,I,H,Y,te,M,g,L=!1)=>{const N=T&&T.children,F=T?T.shapeFlag:0,X=b.children,{patchFlag:ae,shapeFlag:re}=b;if(ae>0){if(ae&128){ue(N,X,I,H,Y,te,M,g,L);return}else if(ae&256){ne(N,X,I,H,Y,te,M,g,L);return}}re&8?(F&16&&_e(N,Y,te),X!==N&&u(I,X)):F&16?re&16?ue(N,X,I,H,Y,te,M,g,L):_e(N,Y,te,!0):(F&8&&u(I,""),re&16&&k(X,I,H,Y,te,M,g,L))},ne=(T,b,I,H,Y,te,M,g,L)=>{T=T||cr,b=b||cr;const N=T.length,F=b.length,X=Math.min(N,F);let ae;for(ae=0;ae<X;ae++){const re=b[ae]=L?Qn(b[ae]):gn(b[ae]);v(T[ae],re,I,null,Y,te,M,g,L)}N>F?_e(T,Y,te,!0,!1,X):k(b,I,H,Y,te,M,g,L,X)},ue=(T,b,I,H,Y,te,M,g,L)=>{let N=0;const F=b.length;let X=T.length-1,ae=F-1;for(;N<=X&&N<=ae;){const re=T[N],fe=b[N]=L?Qn(b[N]):gn(b[N]);if(Ri(re,fe))v(re,fe,I,null,Y,te,M,g,L);else break;N++}for(;N<=X&&N<=ae;){const re=T[X],fe=b[ae]=L?Qn(b[ae]):gn(b[ae]);if(Ri(re,fe))v(re,fe,I,null,Y,te,M,g,L);else break;X--,ae--}if(N>X){if(N<=ae){const re=ae+1,fe=re<F?b[re].el:H;for(;N<=ae;)v(null,b[N]=L?Qn(b[N]):gn(b[N]),I,fe,Y,te,M,g,L),N++}}else if(N>ae)for(;N<=X;)Se(T[N],Y,te,!0),N++;else{const re=N,fe=N,xe=new Map;for(N=fe;N<=ae;N++){const Re=b[N]=L?Qn(b[N]):gn(b[N]);Re.key!=null&&xe.set(Re.key,N)}let ye,oe=0;const ze=ae-fe+1;let Oe=!1,Ue=0;const Ae=new Array(ze);for(N=0;N<ze;N++)Ae[N]=0;for(N=re;N<=X;N++){const Re=T[N];if(oe>=ze){Se(Re,Y,te,!0);continue}let He;if(Re.key!=null)He=xe.get(Re.key);else for(ye=fe;ye<=ae;ye++)if(Ae[ye-fe]===0&&Ri(Re,b[ye])){He=ye;break}He===void 0?Se(Re,Y,te,!0):(Ae[He-fe]=N+1,He>=Ue?Ue=He:Oe=!0,v(Re,b[He],I,null,Y,te,M,g,L),oe++)}const Te=Oe?em(Ae):cr;for(ye=Te.length-1,N=ze-1;N>=0;N--){const Re=fe+N,He=b[Re],Qe=Re+1<F?b[Re+1].el:H;Ae[N]===0?v(null,He,I,Qe,Y,te,M,g,L):Oe&&(ye<0||N!==Te[ye]?ce(He,I,Qe,2):ye--)}}},ce=(T,b,I,H,Y=null)=>{const{el:te,type:M,transition:g,children:L,shapeFlag:N}=T;if(N&6){ce(T.component.subTree,b,I,H);return}if(N&128){T.suspense.move(b,I,H);return}if(N&64){M.move(T,b,I,pe);return}if(M===ln){i(te,b,I);for(let X=0;X<L.length;X++)ce(L[X],b,I,H);i(T.anchor,b,I);return}if(M===ks){S(T,b,I);return}if(H!==2&&N&1&&g)if(H===0)g.beforeEnter(te),i(te,b,I),Nt(()=>g.enter(te),Y);else{const{leave:X,delayLeave:ae,afterLeave:re}=g,fe=()=>i(te,b,I),xe=()=>{X(te,()=>{fe(),re&&re()})};ae?ae(te,fe,xe):xe()}else i(te,b,I)},Se=(T,b,I,H=!1,Y=!1)=>{const{type:te,props:M,ref:g,children:L,dynamicChildren:N,shapeFlag:F,patchFlag:X,dirs:ae}=T;if(g!=null&&Ua(g,null,I,T,!0),F&256){b.ctx.deactivate(T);return}const re=F&1&&ae,fe=!Gs(T);let xe;if(fe&&(xe=M&&M.onVnodeBeforeUnmount)&&mn(xe,b,T),F&6)he(T.component,I,H);else{if(F&128){T.suspense.unmount(I,H);return}re&&pi(T,null,b,"beforeUnmount"),F&64?T.type.remove(T,b,I,Y,pe,H):N&&(te!==ln||X>0&&X&64)?_e(N,b,I,!1,!0):(te===ln&&X&384||!Y&&F&16)&&_e(L,b,I),H&&Ce(T)}(fe&&(xe=M&&M.onVnodeUnmounted)||re)&&Nt(()=>{xe&&mn(xe,b,T),re&&pi(T,null,b,"unmounted")},I)},Ce=T=>{const{type:b,el:I,anchor:H,transition:Y}=T;if(b===ln){J(I,H);return}if(b===ks){R(T);return}const te=()=>{r(I),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(T.shapeFlag&1&&Y&&!Y.persisted){const{leave:M,delayLeave:g}=Y,L=()=>M(I,te);g?g(T.el,te,L):L()}else te()},J=(T,b)=>{let I;for(;T!==b;)I=h(T),r(T),T=I;r(b)},he=(T,b,I)=>{const{bum:H,scope:Y,update:te,subTree:M,um:g}=T;H&&Do(H),Y.stop(),te&&(te.active=!1,Se(M,T,b,I)),g&&Nt(g,b),Nt(()=>{T.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},_e=(T,b,I,H=!1,Y=!1,te=0)=>{for(let M=te;M<T.length;M++)Se(T[M],b,I,H,Y)},z=T=>T.shapeFlag&6?z(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let se=!1;const Q=(T,b,I)=>{T==null?b._vnode&&Se(b._vnode,null,null,!0):v(b._vnode||null,T,b,null,null,null,I),se||(se=!0,jl(),Xf(),se=!1),b._vnode=T},pe={p:v,um:Se,m:ce,r:Ce,mt:D,mc:k,pc:W,pbc:x,n:z,o:n};let Me,O;return{render:Q,hydrate:Me,createApp:Xp(Q,Me)}}function Fo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function mi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Qp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hh(n,e,t=!1){const i=n.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Qn(r[s]),o.el=a.el),t||hh(a,o)),o.type===go&&(o.el=a.el)}}function em(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function dh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dh(e)}const tm=n=>n.__isTeleport,ln=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),Xr=[];let fn=null;function _o(n=!1){Xr.push(fn=n?null:[])}function nm(){Xr.pop(),fn=Xr[Xr.length-1]||null}let Zr=1;function oc(n){Zr+=n}function ph(n){return n.dynamicChildren=Zr>0?fn||cr:null,nm(),Zr>0&&fn&&fn.push(n),n}function gl(n,e,t,i,r,s){return ph(de(n,e,t,i,r,s,!0))}function im(n,e,t,i,r){return ph(Ke(n,e,t,i,r,!0))}function Ia(n){return n?n.__v_isVNode===!0:!1}function Ri(n,e){return n.type===e.type&&n.key===e.key}const vo="__vInternal",mh=({key:n})=>n??null,Ws=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ft(n)||Gt(n)||Ne(n)?{i:Ut,r:n,k:e,f:!!t}:n:null);function de(n,e=null,t=null,i=0,r=null,s=n===ln?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mh(e),ref:e&&Ws(e),scopeId:jf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ut};return o?(_l(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),Zr>0&&!a&&fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fn.push(l),l}const Ke=rm;function rm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===vp)&&(n=Fn),Ia(n)){const o=ci(n,e,!0);return t&&_l(o,t),Zr>0&&!s&&fn&&(o.shapeFlag&6?fn[fn.indexOf(n)]=o:fn.push(o)),o.patchFlag|=-2,o}if(_m(n)&&(n=n.__vccOpts),e){e=sm(e);let{class:o,style:l}=e;o&&!ft(o)&&(e.class=At(o)),ot(l)&&(Ff(l)&&!De(l)&&(l=dt({},l)),e.style=il(l))}const a=ft(n)?1:Sp(n)?128:tm(n)?64:ot(n)?4:Ne(n)?2:0;return de(n,e,t,i,r,a,s,!0)}function sm(n){return n?Ff(n)||vo in n?dt({},n):n:null}function ci(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?am(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&mh(o),ref:e&&e.ref?t&&r?De(r)?r.concat(Ws(e)):[r,Ws(e)]:Ws(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ci(n.ssContent),ssFallback:n.ssFallback&&ci(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Dn(n=" ",e=0){return Ke(go,null,n,e)}function om(n,e){const t=Ke(ks,null,n);return t.staticCount=e,t}function gn(n){return n==null||typeof n=="boolean"?Ke(Fn):De(n)?Ke(ln,null,n.slice()):typeof n=="object"?Qn(n):Ke(go,null,String(n))}function Qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ci(n)}function _l(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),_l(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(vo in e)?e._ctx=Ut:r===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),i&64?(t=16,e=[Dn(e)]):t=8);n.children=e,n.shapeFlag|=t}function am(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=At([e.class,i.class]));else if(r==="style")e.style=il([e.style,i.style]);else if(so(r)){const s=e[r],a=i[r];a&&s!==a&&!(De(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){tn(n,e,7,[t,i])}const lm=oh();let cm=0;function um(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||lm,s={uid:cm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lh(i,r),emitsOptions:$f(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=hp.bind(null,s),n.ce&&n.ce(s),s}let Mt=null;const fm=()=>Mt||Ut;let Zs,Na;{const n=Mf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Zs=e("__VUE_INSTANCE_SETTERS__",t=>Mt=t),Na=e("__VUE_SSR_SETTERS__",t=>xo=t)}const ns=n=>{const e=Mt;return Zs(n),n.scope.on(),()=>{n.scope.off(),Zs(e)}},ac=()=>{Mt&&Mt.scope.off(),Zs(null)};function gh(n){return n.vnode.shapeFlag&4}let xo=!1;function hm(n,e=!1){e&&Na(e);const{props:t,children:i}=n.vnode,r=gh(n);qp(n,t,r,e),Yp(n,i);const s=r?dm(n,e):void 0;return e&&Na(!1),s}function dm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Bf(new Proxy(n.ctx,Bp));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?mm(n):null,s=ns(n);Hi();const a=ri(i,n,0,[n.props,r]);if(Gi(),s(),xf(a)){if(a.then(ac,ac),e)return a.then(o=>{lc(n,o,e)}).catch(o=>{fo(o,n,0)});n.asyncDep=a}else lc(n,a,e)}else _h(n,e)}function lc(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ot(e)&&(n.setupState=Vf(e)),_h(n,t)}let cc;function _h(n,e,t){const i=n.type;if(!n.render){if(!e&&cc&&!i.render){const r=i.template||pl(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=dt(dt({isCustomElement:s,delimiters:o},a),l);i.render=cc(r,c)}}n.render=i.render||en}{const r=ns(n);Hi();try{zp(n)}finally{Gi(),r()}}}function pm(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ht(n,"get","$attrs"),e[t]}}))}function mm(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return pm(n)},slots:n.slots,emit:n.emit,expose:e}}function So(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Vf(Bf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in kr)return kr[t](n)},has(e,t){return t in e||t in kr}}))}function gm(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function _m(n){return Ne(n)&&"__vccOpts"in n}const Jt=(n,e)=>ip(n,e,xo);function vl(n,e,t){const i=arguments.length;return i===2?ot(e)&&!De(e)?Ia(e)?Ke(n,null,[e]):Ke(n,e):Ke(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ia(t)&&(t=[t]),Ke(n,e,t))}const vm="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xm="http://www.w3.org/2000/svg",Sm="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,uc=ei&&ei.createElement("template"),Mm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ei.createElementNS(xm,n):e==="mathml"?ei.createElementNS(Sm,n):ei.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{uc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const o=uc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vn="transition",Lr="animation",Jr=Symbol("_vtc"),vr=(n,{slots:e})=>vl(wp,Em(n),e);vr.displayName="Transition";const vh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};vr.props=dt({},Jf,vh);const gi=(n,e=[])=>{De(n)?n.forEach(t=>t(...e)):n&&n(...e)},fc=n=>n?De(n)?n.some(e=>e.length>1):n.length>1:!1;function Em(n){const e={};for(const B in n)B in vh||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,_=ym(r),v=_&&_[0],p=_&&_[1],{onBeforeEnter:d,onEnter:y,onEnterCancelled:S,onLeave:R,onLeaveCancelled:U,onBeforeAppear:w=d,onAppear:P=y,onAppearCancelled:k=S}=e,le=(B,ie,D)=>{_i(B,ie?u:o),_i(B,ie?c:a),D&&D()},x=(B,ie)=>{B._isLeaving=!1,_i(B,f),_i(B,m),_i(B,h),ie&&ie()},A=B=>(ie,D)=>{const j=B?P:y,V=()=>le(ie,B,D);gi(j,[ie,V]),hc(()=>{_i(ie,B?l:s),kn(ie,B?u:o),fc(j)||dc(ie,i,v,V)})};return dt(e,{onBeforeEnter(B){gi(d,[B]),kn(B,s),kn(B,a)},onBeforeAppear(B){gi(w,[B]),kn(B,l),kn(B,c)},onEnter:A(!1),onAppear:A(!0),onLeave(B,ie){B._isLeaving=!0;const D=()=>x(B,ie);kn(B,f),Am(),kn(B,h),hc(()=>{B._isLeaving&&(_i(B,f),kn(B,m),fc(R)||dc(B,i,p,D))}),gi(R,[B,D])},onEnterCancelled(B){le(B,!1),gi(S,[B])},onAppearCancelled(B){le(B,!0),gi(k,[B])},onLeaveCancelled(B){x(B),gi(U,[B])}})}function ym(n){if(n==null)return null;if(ot(n))return[Bo(n.enter),Bo(n.leave)];{const e=Bo(n);return[e,e]}}function Bo(n){return wd(n)}function kn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Jr]||(n[Jr]=new Set)).add(e)}function _i(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Jr];t&&(t.delete(e),t.size||(n[Jr]=void 0))}function hc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Tm=0;function dc(n,e,t,i){const r=n._endId=++Tm,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=bm(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function bm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${Vn}Delay`),s=i(`${Vn}Duration`),a=pc(r,s),o=i(`${Lr}Delay`),l=i(`${Lr}Duration`),c=pc(o,l);let u=null,f=0,h=0;e===Vn?a>0&&(u=Vn,f=a,h=s.length):e===Lr?c>0&&(u=Lr,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?Vn:Lr:null,h=u?u===Vn?s.length:l.length:0);const m=u===Vn&&/\b(transform|all)(,|$)/.test(i(`${Vn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function pc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>mc(t)+mc(n[i])))}function mc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Am(){return document.body.offsetHeight}function wm(n,e,t){const i=n[Jr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Qr=Symbol("_vod"),or={beforeMount(n,{value:e},{transition:t}){n[Qr]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Dr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e==!t&&(n.style.display===n[Qr]||!e)||(i?e?(i.beforeEnter(n),Dr(n,!0),i.enter(n)):i.leave(n,()=>{Dr(n,!1)}):Dr(n,e))},beforeUnmount(n,{value:e}){Dr(n,e)}};function Dr(n,e){n.style.display=e?n[Qr]:"none"}const Rm=Symbol(""),Cm=/(^|;)\s*display\s*:/;function Pm(n,e,t){const i=n.style,r=ft(t),s=i.display;let a=!1;if(t&&!r){if(e&&!ft(e))for(const o in e)t[o]==null&&Oa(i,o,"");for(const o in t)o==="display"&&(a=!0),Oa(i,o,t[o])}else if(r){if(e!==t){const o=i[Rm];o&&(t+=";"+o),i.cssText=t,a=Cm.test(t)}}else e&&n.removeAttribute("style");Qr in n&&(n[Qr]=a?i.display:"",i.display=s)}const gc=/\s*!important$/;function Oa(n,e,t){if(De(t))t.forEach(i=>Oa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Lm(n,e);gc.test(t)?n.setProperty(Ar(i),t.replace(gc,""),"important"):n[i]=t}}const _c=["Webkit","Moz","ms"],zo={};function Lm(n,e){const t=zo[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return zo[e]=i;i=lo(i);for(let r=0;r<_c.length;r++){const s=_c[r]+i;if(s in n)return zo[e]=s}return e}const vc="http://www.w3.org/1999/xlink";function Dm(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(vc,e.slice(6,e.length)):n.setAttributeNS(vc,e,t);else{const s=Ud(e);t==null||s&&!Ef(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Um(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ef(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Im(n,e,t,i){n.addEventListener(e,t,i)}function Nm(n,e,t,i){n.removeEventListener(e,t,i)}const xc=Symbol("_vei");function Om(n,e,t,i,r=null){const s=n[xc]||(n[xc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Fm(e);if(i){const c=s[e]=Hm(i,r);Im(n,o,c,l)}else a&&(Nm(n,o,a,l),s[e]=void 0)}}const Sc=/(?:Once|Passive|Capture)$/;function Fm(n){let e;if(Sc.test(n)){e={};let i;for(;i=n.match(Sc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ar(n.slice(2)),e]}let Ho=0;const Bm=Promise.resolve(),zm=()=>Ho||(Bm.then(()=>Ho=0),Ho=Date.now());function Hm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;tn(Gm(i,t.value),e,5,[i])};return t.value=n,t.attached=zm(),t}function Gm(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Mc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Vm=(n,e,t,i,r,s,a,o,l)=>{const c=r==="svg";e==="class"?wm(n,i,c):e==="style"?Pm(n,t,i):so(e)?el(e)||Om(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):km(n,e,i,c))?Um(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Dm(n,e,i,c))};function km(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Mc(e)&&Ne(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Mc(e)&&ft(t)?!1:e in n}const Wm=dt({patchProp:Vm},Mm);let Ec;function Xm(){return Ec||(Ec=Zp(Wm))}const qm=(...n)=>{const e=Xm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=jm(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,$m(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function $m(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function jm(n){return ft(n)?document.querySelector(n):n}const Ym="/2024/05/assets/general/logo_tr.png";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const rr=typeof window<"u";function Km(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function Go(n,e){const t={};for(const i in e){const r=e[i];t[i]=dn(r)?r.map(n):n(r)}return t}const qr=()=>{},dn=Array.isArray,Zm=/\/$/,Jm=n=>n.replace(Zm,"");function Vo(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=ng(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function Qm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function yc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function eg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&xr(e.matched[i],t.matched[r])&&xh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function xr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function xh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!tg(n[t],e[t]))return!1;return!0}function tg(n,e){return dn(n)?Tc(n,e):dn(e)?Tc(e,n):n===e}function Tc(n,e){return dn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function ng(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a-(a===i.length?1:0)).join("/")}var es;(function(n){n.pop="pop",n.push="push"})(es||(es={}));var $r;(function(n){n.back="back",n.forward="forward",n.unknown=""})($r||($r={}));function ig(n){if(!n)if(rr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Jm(n)}const rg=/^[^#]+#/;function sg(n,e){return n.replace(rg,"#")+e}function og(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Mo=()=>({left:window.pageXOffset,top:window.pageYOffset});function ag(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=og(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bc(n,e){return(history.state?history.state.position-e:-1)+n}const Fa=new Map;function lg(n,e){Fa.set(n,e)}function cg(n){const e=Fa.get(n);return Fa.delete(n),e}let ug=()=>location.protocol+"//"+location.host;function Sh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),yc(l,"")}return yc(t,n)+i+r}function fg(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Sh(n,location),_=t.value,v=e.value;let p=0;if(h){if(t.value=m,e.value=h,a&&a===_){a=null;return}p=v?h.position-v.position:0}else i(m);r.forEach(d=>{d(t.value,_,{delta:p,type:es.pop,direction:p?p>0?$r.forward:$r.back:$r.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Je({},h.state,{scroll:Mo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Ac(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Mo():null}}function hg(n){const{history:e,location:t}=window,i={value:Sh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ug()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Je({},e.state,Ac(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Je({},r.value,e.state,{forward:l,scroll:Mo()});s(u.current,u,!0);const f=Je({},Ac(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function dg(n){n=ig(n);const e=hg(n),t=fg(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Je({location:"",base:n,go:i,createHref:sg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function pg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),dg(n)}function mg(n){return typeof n=="string"||n&&typeof n=="object"}function Mh(n){return typeof n=="string"||typeof n=="symbol"}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Eh=Symbol("");var wc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(wc||(wc={}));function Sr(n,e){return Je(new Error,{type:n,[Eh]:!0},e)}function Tn(n,e){return n instanceof Error&&Eh in n&&(e==null||!!(n.type&e))}const Rc="[^/]+?",gg={sensitive:!1,strict:!1,start:!0,end:!0},_g=/[.+*?^${}()[\]/\\]/g;function vg(n,e){const t=Je({},gg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(_g,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:v,optional:p,regexp:d}=h;s.push({name:_,repeatable:v,optional:p});const y=d||Rc;if(y!==Rc){m+=10;try{new RegExp(`(${y})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+R.message)}}let S=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(S=p&&c.length<2?`(?:/${S})`:"/"+S),p&&(S+="?"),r+=S,m+=20,p&&(m+=-8),v&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=s[h-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:v,optional:p}=m,d=_ in c?c[_]:"";if(dn(d)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=dn(d)?d.join("/"):d;if(!y)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function xg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Sg(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=xg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Cc(i))return 1;if(Cc(r))return-1}return r.length-i.length}function Cc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Mg={type:0,value:""},Eg=/[a-zA-Z0-9_]/;function yg(n){if(!n)return[[]];if(n==="/")return[[Mg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Eg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Tg(n,e,t){const i=vg(yg(n.path),t),r=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function bg(n,e){const t=[],i=new Map;e=Dc({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,_=Ag(u);_.aliasOf=h&&h.record;const v=Dc(e,u),p=[_];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of S)p.push(Je({},_,{components:h?h.record.components:_.components,path:R,aliasOf:h?h.record:_}))}let d,y;for(const S of p){const{path:R}=S;if(f&&R[0]!=="/"){const U=f.record.path,w=U[U.length-1]==="/"?"":"/";S.path=f.record.path+(R&&w+R)}if(d=Tg(S,f,v),h?h.alias.push(d):(y=y||d,y!==d&&y.alias.push(d),m&&u.name&&!Lc(d)&&a(u.name)),_.children){const U=_.children;for(let w=0;w<U.length;w++)s(U[w],d,h&&h.children[w])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return y?()=>{a(y)}:qr}function a(u){if(Mh(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&Sg(u,t[f])>=0&&(u.record.path!==t[f].record.path||!yh(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Lc(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},_,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Sr(1,{location:u});v=h.record.name,m=Je(Pc(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Pc(u.params,h.keys.map(y=>y.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=t.find(y=>y.re.test(_)),h&&(m=h.parse(_),v=h.record.name);else{if(h=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw Sr(1,{location:u,currentLocation:f});v=h.record.name,m=Je({},f.params,u.params),_=h.stringify(m)}const p=[];let d=h;for(;d;)p.unshift(d.record),d=d.parent;return{name:v,path:_,params:m,matched:p,meta:Rg(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function Pc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Ag(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:wg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function wg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Lc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Rg(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function Dc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function yh(n,e){return e.children.some(t=>t===n||yh(n,t))}const Th=/#/g,Cg=/&/g,Pg=/\//g,Lg=/=/g,Dg=/\?/g,bh=/\+/g,Ug=/%5B/g,Ig=/%5D/g,Ah=/%5E/g,Ng=/%60/g,wh=/%7B/g,Og=/%7C/g,Rh=/%7D/g,Fg=/%20/g;function xl(n){return encodeURI(""+n).replace(Og,"|").replace(Ug,"[").replace(Ig,"]")}function Bg(n){return xl(n).replace(wh,"{").replace(Rh,"}").replace(Ah,"^")}function Ba(n){return xl(n).replace(bh,"%2B").replace(Fg,"+").replace(Th,"%23").replace(Cg,"%26").replace(Ng,"`").replace(wh,"{").replace(Rh,"}").replace(Ah,"^")}function zg(n){return Ba(n).replace(Lg,"%3D")}function Hg(n){return xl(n).replace(Th,"%23").replace(Dg,"%3F")}function Gg(n){return n==null?"":Hg(n).replace(Pg,"%2F")}function Js(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Vg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(bh," "),a=s.indexOf("="),o=Js(a<0?s:s.slice(0,a)),l=a<0?null:Js(s.slice(a+1));if(o in e){let c=e[o];dn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Uc(n){let e="";for(let t in n){const i=n[t];if(t=zg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(dn(i)?i.map(s=>s&&Ba(s)):[i&&Ba(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function kg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Wg=Symbol(""),Ic=Symbol(""),Sl=Symbol(""),Ml=Symbol(""),za=Symbol("");function Ur(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ti(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(Sr(4,{from:t,to:e})):f instanceof Error?o(f):mg(f)?o(Sr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function ko(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(Xg(o)){const c=(o.__vccOpts||o)[e];c&&r.push(ti(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Km(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&ti(h,t,i,s,a)()}))}}return r}function Xg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Nc(n){const e=Sn(Sl),t=Sn(Ml),i=Jt(()=>e.resolve(hr(n.to))),r=Jt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(xr.bind(null,u));if(h>-1)return h;const m=Oc(l[c-2]);return c>1&&Oc(u)===m&&f[f.length-1].path!==m?f.findIndex(xr.bind(null,l[c-2])):h}),s=Jt(()=>r.value>-1&&Yg(t.params,i.value.params)),a=Jt(()=>r.value>-1&&r.value===t.matched.length-1&&xh(t.params,i.value.params));function o(l={}){return jg(l)?e[hr(n.replace)?"replace":"push"](hr(n.to)).catch(qr):Promise.resolve()}return{route:i,href:Jt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const qg=th({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nc,setup(n,{slots:e}){const t=uo(Nc(n)),{options:i}=Sn(Sl),r=Jt(()=>({[Fc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Fc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:vl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),$g=qg;function jg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Yg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!dn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Oc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Fc=(n,e,t)=>n??e??t,Kg=th({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Sn(za),r=Jt(()=>n.route||i.value),s=Sn(Ic,0),a=Jt(()=>{let c=hr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Jt(()=>r.value.matched[a.value]);Vs(Ic,Jt(()=>a.value+1)),Vs(Wg,o),Vs(za,r);const l=Ai();return Hs(()=>[l.value,o.value,n.name],([c,u,f],[h,m,_])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!xr(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Bc(t.default,{Component:h,route:c});const m=f.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=vl(h,Je({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Bc(t.default,{Component:p,route:c})||p}}});function Bc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Zg=Kg;function Jg(n){const e=bg(n.routes,n),t=n.parseQuery||Vg,i=n.stringifyQuery||Uc,r=n.history,s=Ur(),a=Ur(),o=Ur(),l=rp(Wn);let c=Wn;rr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Go.bind(null,z=>""+z),f=Go.bind(null,Gg),h=Go.bind(null,Js);function m(z,se){let Q,pe;return Mh(z)?(Q=e.getRecordMatcher(z),pe=se):pe=z,e.addRoute(pe,Q)}function _(z){const se=e.getRecordMatcher(z);se&&e.removeRoute(se)}function v(){return e.getRoutes().map(z=>z.record)}function p(z){return!!e.getRecordMatcher(z)}function d(z,se){if(se=Je({},se||l.value),typeof z=="string"){const b=Vo(t,z,se.path),I=e.resolve({path:b.path},se),H=r.createHref(b.fullPath);return Je(b,I,{params:h(I.params),hash:Js(b.hash),redirectedFrom:void 0,href:H})}let Q;if("path"in z)Q=Je({},z,{path:Vo(t,z.path,se.path).path});else{const b=Je({},z.params);for(const I in b)b[I]==null&&delete b[I];Q=Je({},z,{params:f(b)}),se.params=f(se.params)}const pe=e.resolve(Q,se),Me=z.hash||"";pe.params=u(h(pe.params));const O=Qm(i,Je({},z,{hash:Bg(Me),path:pe.path})),T=r.createHref(O);return Je({fullPath:O,hash:Me,query:i===Uc?kg(z.query):z.query||{}},pe,{redirectedFrom:void 0,href:T})}function y(z){return typeof z=="string"?Vo(t,z,l.value.path):Je({},z)}function S(z,se){if(c!==z)return Sr(8,{from:se,to:z})}function R(z){return P(z)}function U(z){return R(Je(y(z),{replace:!0}))}function w(z){const se=z.matched[z.matched.length-1];if(se&&se.redirect){const{redirect:Q}=se;let pe=typeof Q=="function"?Q(z):Q;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=y(pe):{path:pe},pe.params={}),Je({query:z.query,hash:z.hash,params:"path"in pe?{}:z.params},pe)}}function P(z,se){const Q=c=d(z),pe=l.value,Me=z.state,O=z.force,T=z.replace===!0,b=w(Q);if(b)return P(Je(y(b),{state:typeof b=="object"?Je({},Me,b.state):Me,force:O,replace:T}),se||Q);const I=Q;I.redirectedFrom=se;let H;return!O&&eg(i,pe,Q)&&(H=Sr(16,{to:I,from:pe}),ce(pe,pe,!0,!1)),(H?Promise.resolve(H):x(I,pe)).catch(Y=>Tn(Y)?Tn(Y,2)?Y:ue(Y):W(Y,I,pe)).then(Y=>{if(Y){if(Tn(Y,2))return P(Je({replace:T},y(Y.to),{state:typeof Y.to=="object"?Je({},Me,Y.to.state):Me,force:O}),se||I)}else Y=B(I,pe,!0,T,Me);return A(I,pe,Y),Y})}function k(z,se){const Q=S(z,se);return Q?Promise.reject(Q):Promise.resolve()}function le(z){const se=J.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(z):z()}function x(z,se){let Q;const[pe,Me,O]=Qg(z,se);Q=ko(pe.reverse(),"beforeRouteLeave",z,se);for(const b of pe)b.leaveGuards.forEach(I=>{Q.push(ti(I,z,se))});const T=k.bind(null,z,se);return Q.push(T),_e(Q).then(()=>{Q=[];for(const b of s.list())Q.push(ti(b,z,se));return Q.push(T),_e(Q)}).then(()=>{Q=ko(Me,"beforeRouteUpdate",z,se);for(const b of Me)b.updateGuards.forEach(I=>{Q.push(ti(I,z,se))});return Q.push(T),_e(Q)}).then(()=>{Q=[];for(const b of O)if(b.beforeEnter)if(dn(b.beforeEnter))for(const I of b.beforeEnter)Q.push(ti(I,z,se));else Q.push(ti(b.beforeEnter,z,se));return Q.push(T),_e(Q)}).then(()=>(z.matched.forEach(b=>b.enterCallbacks={}),Q=ko(O,"beforeRouteEnter",z,se),Q.push(T),_e(Q))).then(()=>{Q=[];for(const b of a.list())Q.push(ti(b,z,se));return Q.push(T),_e(Q)}).catch(b=>Tn(b,8)?b:Promise.reject(b))}function A(z,se,Q){o.list().forEach(pe=>le(()=>pe(z,se,Q)))}function B(z,se,Q,pe,Me){const O=S(z,se);if(O)return O;const T=se===Wn,b=rr?history.state:{};Q&&(pe||T?r.replace(z.fullPath,Je({scroll:T&&b&&b.scroll},Me)):r.push(z.fullPath,Me)),l.value=z,ce(z,se,Q,T),ue()}let ie;function D(){ie||(ie=r.listen((z,se,Q)=>{const pe=d(z),Me=w(pe);if(Me){P(Je(Me,{replace:!0}),pe).catch(qr);return}c=pe;const O=l.value;rr&&lg(bc(O.fullPath,Q.delta),Mo()),x(pe,O).catch(T=>Tn(T,12)?T:Tn(T,2)?(P(T.to,pe).then(b=>{Tn(b,20)&&!Q.delta&&Q.type===es.pop&&r.go(-1,!1)}).catch(qr),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),W(T,pe,O))).then(T=>{T=T||B(pe,O,!1),T&&(Q.delta&&!Tn(T,8)?r.go(-Q.delta,!1):Q.type===es.pop&&Tn(T,20)&&r.go(-1,!1)),A(pe,O,T)}).catch(qr)}))}let j=Ur(),V=Ur(),ee;function W(z,se,Q){ue(z);const pe=V.list();return pe.length?pe.forEach(Me=>Me(z,se,Q)):console.error(z),Promise.reject(z)}function ne(){return ee&&l.value!==Wn?Promise.resolve():new Promise((z,se)=>{j.add([z,se])})}function ue(z){return ee||(ee=!z,D(),j.list().forEach(([se,Q])=>z?Q(z):se()),j.reset()),z}function ce(z,se,Q,pe){const{scrollBehavior:Me}=n;if(!rr||!Me)return Promise.resolve();const O=!Q&&cg(bc(z.fullPath,0))||(pe||!Q)&&history.state&&history.state.scroll||null;return js().then(()=>Me(z,se,O)).then(T=>T&&ag(T)).catch(T=>W(T,z,se))}const Se=z=>r.go(z);let Ce;const J=new Set,he={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:p,getRoutes:v,resolve:d,options:n,push:R,replace:U,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:V.add,isReady:ne,install(z){const se=this;z.component("RouterLink",$g),z.component("RouterView",Zg),z.config.globalProperties.$router=se,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>hr(l)}),rr&&!Ce&&l.value===Wn&&(Ce=!0,R(r.location).catch(Me=>{}));const Q={};for(const Me in Wn)Object.defineProperty(Q,Me,{get:()=>l.value[Me],enumerable:!0});z.provide(Sl,se),z.provide(Ml,Nf(Q)),z.provide(za,l);const pe=z.unmount;J.add(z),z.unmount=function(){J.delete(z),J.size<1&&(c=Wn,ie&&ie(),ie=null,l.value=Wn,Ce=!1,ee=!1),pe()}}};function _e(z){return z.reduce((se,Q)=>se.then(()=>le(Q)),Promise.resolve())}return he}function Qg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>xr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>xr(c,l))||r.push(l))}return[t,i,r]}function Ch(){return Sn(Ml)}const e_={class:"absolute w-screen z-20 p-3 bg-zinc-900 bg-opacity-80"},t_={class:"flex justify-between font-Default text-white text-3xl md:text-4xl"},n_={class:"animate-nav-title-in font-bold pl-1"},i_={class:"hidden lg:flex justify-end ml-1 mr-1 pt-3 w-full"},r_={class:"flex flex-row font-light text-base"},s_=de("span",{class:"mov-li"},null,-1),o_=de("span",{class:"mov-li"},null,-1),a_=de("span",{class:"mov-li"},null,-1),l_=de("span",{class:"mov-li"},null,-1),c_=om('<li class="animate-nav-in5 w-min whitespace-nowrap pr-5"><a href="https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide" target="_blank" rel="noreferrer" class="group transition"> Fishing Guide<span class="mov-li"></span></a></li><li class="animate-nav-in6 w-min whitespace-nowrap pr-5"><a href="https://sites.google.com/senshu-u.jp/24otaproject" target="_blank" rel="noreferrer" class="group transition"> Journal<span class="mov-li"></span></a></li><li class="animate-nav-in7 w-min whitespace-nowrap"><a href="https://github.com/OtaProject2024" target="_blank" rel="noreferrer" class="group transition"> GitHub<span class="mov-li"></span></a></li>',3),u_={class:"animate-nav-in1 fixed top-0 right-0 lg:hidden flex items-center mt-3 md:mt-3.5 mr-2 z-50"},f_={class:"fixed top-0 right-0 h-full w-52 bg-zinc-800 z-40"},h_={class:"relative h-full font-Default text-white text-3xl md:text-4xl p-5 mt-14"},d_={class:"flex flex-col font-light text-base space-y-4"},p_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"home"),de("a",{class:"pl-2"},"Home")],-1),m_=de("span",{class:"mov-li"},null,-1),g_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"help"),de("a",{class:"pl-2"},"About")],-1),__=de("span",{class:"mov-li"},null,-1),v_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"group"),de("a",{class:"pl-2"},"Members")],-1),x_=de("span",{class:"mov-li"},null,-1),S_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"directions_run"),de("a",{class:"pl-2"},"Activities")],-1),M_=de("span",{class:"mov-li"},null,-1),E_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"library_books"),de("a",{class:"pl-2"},"Contents")],-1),y_=de("span",{class:"mov-li"},null,-1),T_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"school"),de("a",{class:"pl-2"},"Fishing Guide")],-1),b_=de("span",{class:"mov-li"},null,-1),A_=[T_,b_],w_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"edit_calendar"),de("a",{class:"pl-2"},"Journal")],-1),R_=de("span",{class:"mov-li"},null,-1),C_=[w_,R_],P_=de("div",{class:"flex items-end pr-1"},[de("span",{class:"material-icons text-xl md:text-2xl"},"code"),de("a",{class:"pl-2"},"GitHub")],-1),L_=de("span",{class:"mov-li"},null,-1),D_=[P_,L_],U_=de("div",{class:"absolute right-3 bottom-10"},[de("img",{class:"grayscale opacity-50 size-32",src:Ym,alt:"logo"})],-1),I_={__name:"header",setup(n){const e=Ch(),t=s=>e.path===s,i=Ai(!1),r=()=>{i.value=!i.value};return(s,a)=>{const o=Yf("router-link");return _o(),gl(ln,null,[de("header",e_,[de("div",t_,[de("div",null,[de("h1",n_,[Ke(o,{to:"/"},{default:Lt(()=>[Dn("OtaProject2024")]),_:1})])]),de("div",i_,[de("ul",r_,[de("li",{class:At(["animate-nav-in1 w-min whitespace-nowrap pr-5",{active:t("/about")}])},[Ke(o,{to:"/about",class:"group transition"},{default:Lt(()=>[Dn(" About"),s_]),_:1})],2),de("li",{class:At(["animate-nav-in2 w-min whitespace-nowrap pr-5",{active:t("/members")}])},[Ke(o,{to:"/members",class:"group transition"},{default:Lt(()=>[Dn(" Members"),o_]),_:1})],2),de("li",{class:At(["animate-nav-in3 w-min whitespace-nowrap pr-5",{active:t("/activities")}])},[Ke(o,{to:"/activities",class:"group transition"},{default:Lt(()=>[Dn(" Activities"),a_]),_:1})],2),de("li",{class:At(["animate-nav-in4 w-min whitespace-nowrap pr-5",{active:t("/contents")}])},[Ke(o,{to:"/contents",class:"group transition"},{default:Lt(()=>[Dn(" Contents"),l_]),_:1})],2),c_])])])]),de("div",u_,[de("button",{onClick:r,class:"flex flex-col justify-center items-center w-10 h-10 focus:outline-none"},[de("div",{class:At(["w-5 h-0.5 bg-white mb-1 transition duration-700",{"transform rotate-45 translate-y-1.5":i.value}])},null,2),de("div",{class:At(["w-5 h-0.5 bg-white mb-1 transition duration-700",{"transform opacity-0":i.value}])},null,2),de("div",{class:At(["w-5 h-0.5 bg-white mb-1 transition duration-700",{"transform -rotate-45 -translate-y-1.5":i.value}])},null,2)])]),Ke(vr,{"enter-from-class":"opacity-0","enter-active-class":"transition duration-700","leave-to-class":"opacity-0","leave-active-class":"transition duration-700"},{default:Lt(()=>[sr(de("div",{class:"fixed inset-0 bg-black bg-opacity-50 z-30",onClick:r},null,512),[[or,i.value]])]),_:1}),Ke(vr,{"enter-from-class":"translate-x-full opacity-0","enter-active-class":"transition duration-700","leave-to-class":"translate-x-full opacity-0","leave-active-class":"transition duration-700"},{default:Lt(()=>[sr(de("aside",f_,[de("div",h_,[de("ul",d_,[de("li",{class:At(["animate-nav-in1 w-min whitespace-nowrap",{active:t("/")}])},[Ke(o,{to:"/",class:"group transition",onClick:r},{default:Lt(()=>[p_,m_]),_:1})],2),de("li",{class:At(["animate-nav-in1 w-min whitespace-nowrap",{active:t("/about")}])},[Ke(o,{to:"/about",class:"group transition",onClick:r},{default:Lt(()=>[g_,__]),_:1})],2),de("li",{class:At(["animate-nav-in2 w-min whitespace-nowrap",{active:t("/members")}])},[Ke(o,{to:"/members",class:"group transition",onClick:r},{default:Lt(()=>[v_,x_]),_:1})],2),de("li",{class:At(["animate-nav-in3 w-min whitespace-nowrap",{active:t("/activities")}])},[Ke(o,{to:"/activities",class:"group transition",onClick:r},{default:Lt(()=>[S_,M_]),_:1})],2),de("li",{class:At(["animate-nav-in4 w-min whitespace-nowrap",{active:t("/contents")}])},[Ke(o,{to:"/contents",class:"group transition",onClick:r},{default:Lt(()=>[E_,y_]),_:1})],2),de("li",{class:"animate-nav-in5 w-min whitespace-nowrap"},[de("a",{href:"https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide",target:"_blank",rel:"noreferrer",class:"group transition",onClick:r},A_)]),de("li",{class:"animate-nav-in6 w-min whitespace-nowrap"},[de("a",{href:"https://sites.google.com/senshu-u.jp/24otaproject",target:"_blank",rel:"noreferrer",class:"group transition",onClick:r},C_)]),de("li",{class:"animate-nav-in7 w-min whitespace-nowrap"},[de("a",{href:"https://github.com/OtaProject2024",target:"_blank",rel:"noreferrer",class:"group transition",onClick:r},D_)])]),U_])],512),[[or,i.value]])]),_:1})],64)}}},N_="/2024/05/assets/sns/X_logo.png",O_="/2024/05/assets/sns/Facebook_logo.png";function Ha(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ga(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zc(Object(t),!0).forEach(function(i){Ha(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zc(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var F_=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(i,r){if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");if(a.async=!0,a.src=e,a.defer=t.defer,t.preconnectOrigin){var o=document.createElement("link");o.href=t.preconnectOrigin,o.rel="preconnect",s.appendChild(o)}s.appendChild(a),a.onload=i,a.onerror=r}})},B_=function n(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];if(!i.length)return e;var s=i.shift();if(!(!Gr(e)||!Gr(s))){for(var a in s)Gr(s[a])?(e[a]||Object.assign(e,Ha({},a,{})),n(e[a],s[a])):Object.assign(e,Ha({},a,s[a]));return n.apply(void 0,[e].concat(i))}},is=function(){return!(typeof window>"u"||typeof document>"u")},Hc=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;is()},z_=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Hc('Missing "appName" property inside the plugin options.',e.app_name==null),Hc('Missing "name" property in the route.',e.screen_name==null),e};function H_(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=n.split("/"),i=e.split("/");return t[0]===""&&e[e.length-1]==="/"&&t.shift(),i.join("/")+t.join("/")}var G_=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},Ph={},V_=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=G_();Ph=B_(t,e)},qt=function(){return Ph},Bi=function(){var n,e=qt(),t=e.globalObjectName;!is()||typeof window[t]>"u"||(n=window)[t].apply(n,arguments)},El=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=qt(),r=i.config,s=i.includes;Bi.apply(void 0,["config",r.id].concat(e)),Array.isArray(s)&&s.forEach(function(a){Bi.apply(void 0,["config",a.id].concat(e))})},Gc=function(e,t){is()&&(window["ga-disable-".concat(e)]=t)},Lh=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=qt(),t=e.config,i=e.includes;Gc(t.id,n),Array.isArray(i)&&i.forEach(function(r){return Gc(r.id,n)})},Dh=function(){Lh(!0)},k_=function(){Lh(!1)},Uh,W_=function(e){Uh=e},yl=function(){return Uh},Bn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=qt(),i=t.includes,r=t.defaultGroupName;e.send_to==null&&Array.isArray(i)&&i.length&&(e.send_to=i.map(function(s){return s.id}).concat(r)),Bi("event",n,e)},Ih=function(n){if(is()){var e;if(typeof n=="string")e={page_path:n};else if(n.path||n.fullPath){var t=qt(),i=t.pageTrackerUseFullPath,r=t.pageTrackerPrependBase,s=yl(),a=s&&s.options.base,o=i?n.fullPath:n.path;e=Ga(Ga({},n.name&&{page_title:n.name}),{},{page_path:r?H_(o,a):o})}else e=n;e.page_location==null&&(e.page_location=window.location.href),e.send_page_view==null&&(e.send_page_view=!0),Bn("page_view",e)}},Nh=function(n){var e=qt(),t=e.appName;if(n){var i;typeof n=="string"?i={screen_name:n}:i=n,i.app_name=i.app_name||t,Bn("screen_view",i)}},X_=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];Bn.apply(void 0,["exception"].concat(e))},q_=function(n){El("linker",n)},$_=function(n){Bn("timing_complete",n)},j_=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];Bi.apply(void 0,["set"].concat(e))},Y_=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];Bn.apply(void 0,["refund"].concat(e))},K_=function(n){Bn("purchase",n)},Z_=function(n){El({custom_map:n})},J_=Object.freeze({__proto__:null,query:Bi,config:El,optOut:Dh,optIn:k_,pageview:Ih,screenview:Nh,exception:X_,linker:q_,time:$_,set:j_,refund:Y_,purchase:K_,customMap:Z_,event:Bn}),Q_=function(e){e.config.globalProperties.$gtag=J_},ev=function(){if(is()){var n=qt(),e=n.enabled,t=n.globalObjectName,i=n.globalDataLayerName;return window[t]==null&&(window[i]=window[i]||[],window[t]=function(){window[i].push(arguments)}),window[t]("js",new Date),e||Dh(),window[t]}},Vc=function(e){return Ga({send_page_view:!1},e)},Oh=function(){var n=qt(),e=n.config,t=n.includes;Bi("config",e.id,Vc(e.params)),Array.isArray(t)&&t.forEach(function(i){Bi("config",i.id,Vc(i.params))})},kc=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=qt(),i=t.appName,r=t.pageTrackerTemplate,s=t.pageTrackerScreenviewEnabled,a=t.pageTrackerSkipSamePath;if(!(a&&n.path===e.path)){var o=n;if(Ne(r)?o=r(n,e):s&&(o=z_({app_name:i,screen_name:n.name})),s){Nh(o);return}Ih(o)}},Wc=function(e){var t=qt(),i=t.pageTrackerExcludedRoutes;return i.includes(e.path)||i.includes(e.name)},tv=function(){var n=qt(),e=n.onBeforeTrack,t=n.onAfterTrack,i=yl();i.isReady().then(function(){js().then(function(){var r=i.currentRoute;Oh(),!Wc(r.value)&&kc(r.value)}),i.afterEach(function(r,s){js().then(function(){Wc(r)||(Ne(e)&&e(r,s),kc(r,s),Ne(t)&&t(r,s))})})})},nv=function(){var n=qt(),e=n.onReady,t=n.onError,i=n.globalObjectName,r=n.globalDataLayerName,s=n.config,a=n.customResourceURL,o=n.customPreconnectOrigin,l=n.deferScriptLoad,c=n.pageTrackerEnabled,u=n.disableScriptLoad,f=!!(c&&yl());if(ev(),f?tv():Oh(),!u)return F_("".concat(a,"?id=").concat(s.id,"&l=").concat(r),{preconnectOrigin:o,defer:l}).then(function(){e&&e(window[i])}).catch(function(h){return t&&t(h),h})},iv=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;Q_(e),V_(t),W_(i),qt().bootstrap&&nv()};const rv={class:"absolute right-0 z-20 bottom-24 sm:bottom-12 md:bottom-6 lg:bottom-3 xl:bottom-0"},sv={class:"flex flex-col font-Default font-light text-white"},ov={class:"self-end rounded-lg bg-zinc-900 bg-opacity-80 p-5 mb-3 mr-5 md:mb-5 md:mr-10"},av=de("p",{id:"notice",class:"text-lg md:text-xl"},"Copy completed.",-1),lv=[av],cv={class:"self-end rounded-lg bg-zinc-900 bg-opacity-80 mb-7 p-5 mr-5 md:mr-10"},uv={class:"flex flex-row justify-start"},fv={class:"animate-footer-in flex justify-end ml-16"},hv=de("div",{class:"flex items-end"},[de("span",{class:"material-icons text-lg md:text-xl"},"content_copy"),de("a",{class:"text-lg md:text-xl pl-1"},"copy")],-1),dv=[hv],pv={class:"cursor-pointer mr-7"},mv=["href"],gv=de("img",{class:"h-7 w-7",src:N_,alt:"X"},null,-1),_v=[gv],vv={class:"cursor-pointer"},xv=["href"],Sv=de("img",{class:"h-7 w-7",src:O_,alt:"Facebook"},null,-1),Mv=[Sv],Ev={class:"animate-footer-in mt-4"},yv=de("a",{href:"https://github.com/OtaProject2024/OtaProject2024_projectpage",target:"_blank",rel:"noreferrer"},"OtaProject2024. ",-1),Tv={__name:"footer",setup(n){const e=Ch(),t=Jt(()=>e.meta.title!=="OtaProject2024 | 404 not found"),i=Ai(!1),r=Ai("share"),s=()=>{i.value=!i.value,r.value=r.value==="share"?"return":"share"},a=Ai(!1),o=location.href,l=Ai(`https://x.com/intent/post?text=OtaProject2024%0A&url=${o}`),c=Ai(`https://www.facebook.com/share.php?u=${o}`),u=async()=>{try{await navigator.clipboard.writeText(o),Bn("clicked share btn")}catch{const m=document.getElementById("notice");m&&(m.innerHTML="Copy failed.<br/>Your device is not supported.")}finally{a.value=!0,setTimeout(()=>{a.value=!1},5e3)}},f=()=>{Bn("clicked share btn")};return(h,m)=>(_o(),im(vr,{"enter-from-class":"translate-x-full opacity-0","enter-active-class":"transition duration-700","leave-to-class":"translate-x-full opacity-0","leave-active-class":"transition duration-700"},{default:Lt(()=>[sr(de("footer",rv,[de("div",sv,[Ke(vr,{"enter-from-class":"translate-x-full opacity-0","enter-active-class":"transition duration-700","leave-to-class":"translate-x-full opacity-0","leave-active-class":"transition duration-700"},{default:Lt(()=>[sr(de("div",ov,lv,512),[[or,a.value]])]),_:1}),de("div",cv,[de("div",uv,[de("p",{class:"cursor-pointer text-lg md:text-xl",onClick:s},[de("span",{class:At(["inline-block duration-500",{"rotate-180 duration-500":i.value}])}," >",2),Dn(" "+Id(r.value),1)]),sr(de("ul",fv,[de("li",{class:"cursor-pointer mr-7",onClick:u},dv),de("li",pv,[de("a",{href:l.value,target:"_blank",rel:"noreferrer",onClick:f},_v,8,mv)]),de("li",vv,[de("a",{href:c.value,target:"_blank",rel:"noreferrer",onClick:f},Mv,8,xv)])],512),[[or,i.value]])]),sr(de("p",Ev,[Dn(" © 2024 "),yv,Dn(" All Rights Reserved. ")],512),[[or,i.value]])])])],512),[[or,t.value]])]),_:1}))}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="161",bv=0,Xc=1,Av=2,Fh=1,wv=2,Ln=3,ui=0,Bt=1,Un=2,si=0,pr=1,qc=2,$c=3,jc=4,Rv=5,Ci=100,Cv=101,Pv=102,Yc=103,Kc=104,Lv=200,Dv=201,Uv=202,Iv=203,Va=204,ka=205,Nv=206,Ov=207,Fv=208,Bv=209,zv=210,Hv=211,Gv=212,Vv=213,kv=214,Wv=0,Xv=1,qv=2,Qs=3,$v=4,jv=5,Yv=6,Kv=7,Bh=0,Zv=1,Jv=2,oi=0,Qv=1,e0=2,t0=3,n0=4,i0=5,r0=6,zh=300,Mr=301,Er=302,Wa=303,Xa=304,Eo=306,qa=1e3,cn=1001,$a=1002,Dt=1003,Zc=1004,Ir=1005,Ot=1006,Wo=1007,Di=1008,ai=1009,s0=1010,o0=1011,bl=1012,Hh=1013,ni=1014,In=1015,ts=1016,Gh=1017,Vh=1018,Ni=1020,a0=1021,un=1023,l0=1024,c0=1025,Oi=1026,yr=1027,u0=1028,kh=1029,f0=1030,Wh=1031,Xh=1033,Xo=33776,qo=33777,$o=33778,jo=33779,Jc=35840,Qc=35841,eu=35842,tu=35843,qh=36196,nu=37492,iu=37496,ru=37808,su=37809,ou=37810,au=37811,lu=37812,cu=37813,uu=37814,fu=37815,hu=37816,du=37817,pu=37818,mu=37819,gu=37820,_u=37821,Yo=36492,vu=36494,xu=36495,h0=36283,Su=36284,Mu=36285,Eu=36286,$h=3e3,Fi=3001,d0=3200,p0=3201,Al=0,m0=1,Qt="",St="srgb",zn="srgb-linear",wl="display-p3",yo="display-p3-linear",eo="linear",rt="srgb",to="rec709",no="p3",Vi=7680,yu=519,g0=512,_0=513,v0=514,jh=515,x0=516,S0=517,M0=518,E0=519,Tu=35044,bu="300 es",ja=1035,Nn=2e3,io=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,Ya=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function y0(n,e){return(n%e+e)%e}function Zo(n,e,t){return(1-t)*n+t*e}function Au(n){return(n&n-1)===0&&n!==0}function Ka(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],v=r[0],p=r[3],d=r[6],y=r[1],S=r[4],R=r[7],U=r[2],w=r[5],P=r[8];return s[0]=a*v+o*y+l*U,s[3]=a*p+o*S+l*w,s[6]=a*d+o*R+l*P,s[1]=c*v+u*y+f*U,s[4]=c*p+u*S+f*w,s[7]=c*d+u*R+f*P,s[2]=h*v+m*y+_*U,s[5]=h*p+m*S+_*w,s[8]=h*d+m*R+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new We;function Yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T0(){const n=ro("canvas");return n.style.display="block",n}const wu={};function mr(n){n in wu||(wu[n]=!0,console.warn(n))}const Ru=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_s={[zn]:{transfer:eo,primaries:to,toReference:n=>n,fromReference:n=>n},[St]:{transfer:rt,primaries:to,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[yo]:{transfer:eo,primaries:no,toReference:n=>n.applyMatrix3(Cu),fromReference:n=>n.applyMatrix3(Ru)},[wl]:{transfer:rt,primaries:no,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Cu),fromReference:n=>n.applyMatrix3(Ru).convertLinearToSRGB()}},b0=new Set([zn,yo]),et={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!b0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=_s[e].toReference,r=_s[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return _s[n].primaries},getTransfer:function(n){return n===Qt?eo:_s[n].transfer}};function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class Kh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=ro("canvas")),ki.width=e.width,ki.height=e.height;const i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gr(t[i]/255)*255):t[i]=gr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ea(r[a].image)):s.push(ea(r[a]))}else s=ea(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w0=0;class zt extends wr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=cn,r=cn,s=Ot,a=Di,o=un,l=ai,c=zt.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=rs(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fi?St:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Fi:$h}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fi?St:Qt}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=zh;zt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,R=(m+1)/2,U=(d+1)/2,w=(u+h)/4,P=(f+v)/4,k=(_+p)/4;return S>R&&S>U?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=P/i):R>U?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=w/r,s=k/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=P/s,r=k/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fi?St:Qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends R0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jh extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C0 extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==m||u!==_){let p=1-o;const d=l*h+c*m+u*_+f*v,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const U=Math.sqrt(S),w=Math.atan2(U,d*y);p=Math.sin(p*w)/U,o=Math.sin(o*w)/U}const R=o*y;if(l=l*p+h*R,c=c*p+m*R,u=u*p+_*R,f=f*p+v*R,p===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new q,Pu=new ss;class os{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),xs.subVectors(this.max,Or),Wi.subVectors(e.a,Or),Xi.subVectors(e.b,Or),qi.subVectors(e.c,Or),Xn.subVectors(Xi,Wi),qn.subVectors(qi,Xi),vi.subVectors(Wi,qi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-vi.z,vi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,vi.z,0,-vi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-vi.y,vi.x,0];return!na(t,Wi,Xi,qi,xs)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Wi,Xi,qi,xs))?!1:(Ss.crossVectors(Xn,qn),t=[Ss.x,Ss.y,Ss.z],na(t,Wi,Xi,qi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new q,new q,new q,new q,new q,new q,new q,new q],rn=new q,vs=new os,Wi=new q,Xi=new q,qi=new q,Xn=new q,qn=new q,vi=new q,Or=new q,xs=new q,Ss=new q,xi=new q;function na(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){xi.fromArray(n,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const P0=new os,Fr=new q,ia=new q;class Rl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):P0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(ia)),this.expandByPoint(Fr.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new q,ra=new q,Ms=new q,$n=new q,sa=new q,Es=new q,oa=new q;class L0{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ra.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(ra);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=$n.dot(this.direction),l=-$n.dot(Ms),c=$n.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ra).addScaledVector(Ms,h),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){sa.subVectors(t,e),Es.subVectors(i,e),oa.crossVectors(sa,Es);let a=this.direction.dot(oa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const l=o*this.direction.dot(Es.crossVectors($n,Es));if(l<0)return null;const c=o*this.direction.dot(sa.cross($n));if(c<0||l+c>a)return null;const u=-o*$n.dot(oa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,_,v,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,v=c*f;t[0]=h+v*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,U0)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),jn.crossVectors(i,kt),jn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),jn.crossVectors(i,kt)),jn.normalize(),ys.crossVectors(kt,jn),r[0]=jn.x,r[4]=ys.x,r[8]=kt.x,r[1]=jn.y,r[5]=ys.y,r[9]=kt.y,r[2]=jn.z,r[6]=ys.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],y=i[3],S=i[7],R=i[11],U=i[15],w=r[0],P=r[4],k=r[8],le=r[12],x=r[1],A=r[5],B=r[9],ie=r[13],D=r[2],j=r[6],V=r[10],ee=r[14],W=r[3],ne=r[7],ue=r[11],ce=r[15];return s[0]=a*w+o*x+l*D+c*W,s[4]=a*P+o*A+l*j+c*ne,s[8]=a*k+o*B+l*V+c*ue,s[12]=a*le+o*ie+l*ee+c*ce,s[1]=u*w+f*x+h*D+m*W,s[5]=u*P+f*A+h*j+m*ne,s[9]=u*k+f*B+h*V+m*ue,s[13]=u*le+f*ie+h*ee+m*ce,s[2]=_*w+v*x+p*D+d*W,s[6]=_*P+v*A+p*j+d*ne,s[10]=_*k+v*B+p*V+d*ue,s[14]=_*le+v*ie+p*ee+d*ce,s[3]=y*w+S*x+R*D+U*W,s[7]=y*P+S*A+R*j+U*ne,s[11]=y*k+S*B+R*V+U*ue,s[15]=y*le+S*ie+R*ee+U*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+v*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],y=f*p*c-v*h*c+v*l*m-o*p*m-f*l*d+o*h*d,S=_*h*c-u*p*c-_*l*m+a*p*m+u*l*d-a*h*d,R=u*v*c-_*f*c+_*o*m-a*v*m-u*o*d+a*f*d,U=_*f*l-u*v*l-_*o*h+a*v*h+u*o*p-a*f*p,w=t*y+i*S+r*R+s*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=y*P,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*d-i*h*d)*P,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*d+i*l*d)*P,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*P,e[4]=S*P,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*d+t*h*d)*P,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*d-t*l*d)*P,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*P,e[8]=R*P,e[9]=(_*f*s-u*v*s-_*i*m+t*v*m+u*i*d-t*f*d)*P,e[10]=(a*v*s-_*o*s+_*i*c-t*v*c-a*i*d+t*o*d)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*P,e[12]=U*P,e[13]=(u*v*r-_*f*r+_*i*h-t*v*h-u*i*p+t*f*p)*P,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*p-t*o*p)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,v=a*u,p=a*f,d=o*f,y=l*c,S=l*u,R=l*f,U=i.x,w=i.y,P=i.z;return r[0]=(1-(v+d))*U,r[1]=(m+R)*U,r[2]=(_-S)*U,r[3]=0,r[4]=(m-R)*w,r[5]=(1-(h+d))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(_+S)*P,r[9]=(p-y)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const a=$i.set(r[4],r[5],r[6]).length(),o=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Nn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(o===Nn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===io)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Nn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,m=(i+r)*u;let _,v;if(o===Nn)_=(a+s)*f,v=-2*f;else if(o===io)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new q,sn=new ht,D0=new q(0,0,0),U0=new q(1,1,1),jn=new q,ys=new q,kt=new q,Lu=new ht,Du=new ss;class To{constructor(e=0,t=0,i=0,r=To.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}To.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const Uu=new q,ji=new ss,wn=new ht,Ts=new q,Br=new q,N0=new q,O0=new ss,Iu=new q(1,0,0),Nu=new q(0,1,0),Ou=new q(0,0,1),F0={type:"added"},B0={type:"removed"};class Et extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new q,t=new To,i=new ss,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ts.copy(e):Ts.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Br,Ts,this.up):wn.lookAt(Ts,Br,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(wn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(F0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,N0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new q(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new q,Rn=new q,aa=new q,Cn=new q,Yi=new q,Ki=new q,Fu=new q,la=new q,ca=new q,ua=new q;class xn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Rn.subVectors(i,t),aa.subVectors(e,t);const a=on.dot(on),o=on.dot(Rn),l=on.dot(aa),c=Rn.dot(Rn),u=Rn.dot(aa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Rn.subVectors(e,t),on.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Yi.subVectors(r,i),Ki.subVectors(s,i),la.subVectors(e,i);const l=Yi.dot(la),c=Ki.dot(la);if(l<=0&&c<=0)return t.copy(i);ca.subVectors(e,r);const u=Yi.dot(ca),f=Ki.dot(ca);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Yi,a);ua.subVectors(e,s);const m=Yi.dot(ua),_=Ki.dot(ua);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ki,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Fu.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(Fu,o);const d=1/(p+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector(Yi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=y0(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fa(a,s,e+1/3),this.g=fa(a,s,e),this.b=fa(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return et.fromWorkingColorSpace(bt.copy(this),e),Math.round(Ft(bt.r*255,0,255))*65536+Math.round(Ft(bt.g*255,0,255))*256+Math.round(Ft(bt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,s=bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=St){et.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(bs);const i=Zo(Yn.h,bs.h,t),r=Zo(Yn.s,bs.s,t),s=Zo(Yn.l,bs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new je;je.NAMES=ed;let z0=0;class Rr extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=pr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=ka,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class td extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new q,As=new qe;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tu&&(e.usage=this.usage),e}}class nd extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class id extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let H0=0;const Kt=new ht,ha=new Et,Zi=new q,Wt=new os,zr=new os,_t=new q;class En extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?id:nd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Wt.min,zr.min),Wt.expandByPoint(_t),_t.addVectors(Wt.max,zr.max),Wt.expandByPoint(_t)):(Wt.expandByPoint(zr.min),Wt.expandByPoint(zr.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),_t.add(Zi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<o;x++)c[x]=new q,u[x]=new q;const f=new q,h=new q,m=new q,_=new qe,v=new qe,p=new qe,d=new q,y=new q;function S(x,A,B){f.fromArray(r,x*3),h.fromArray(r,A*3),m.fromArray(r,B*3),_.fromArray(a,x*2),v.fromArray(a,A*2),p.fromArray(a,B*2),h.sub(f),m.sub(f),v.sub(_),p.sub(_);const ie=1/(v.x*p.y-p.x*v.y);isFinite(ie)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ie),y.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(ie),c[x].add(d),c[A].add(d),c[B].add(d),u[x].add(y),u[A].add(y),u[B].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let x=0,A=R.length;x<A;++x){const B=R[x],ie=B.start,D=B.count;for(let j=ie,V=ie+D;j<V;j+=3)S(i[j+0],i[j+1],i[j+2])}const U=new q,w=new q,P=new q,k=new q;function le(x){P.fromArray(s,x*3),k.copy(P);const A=c[x];U.copy(A),U.sub(P.multiplyScalar(P.dot(A))).normalize(),w.crossVectors(k,A);const ie=w.dot(u[x])<0?-1:1;l[x*4]=U.x,l[x*4+1]=U.y,l[x*4+2]=U.z,l[x*4+3]=ie}for(let x=0,A=R.length;x<A;++x){const B=R[x],ie=B.start,D=B.count;for(let j=ie,V=ie+D;j<V;j+=3)le(i[j+0]),le(i[j+1]),le(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new Xt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bu=new ht,Si=new L0,ws=new Rl,zu=new q,Ji=new q,Qi=new q,er=new q,da=new q,Rs=new q,Cs=new qe,Ps=new qe,Ls=new qe,Hu=new q,Gu=new q,Vu=new q,Ds=new q,Us=new q;class hn extends Et{constructor(e=new En,t=new td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(da.fromBufferAttribute(f,e),a?Rs.addScaledVector(da,u):Rs.addScaledVector(da.sub(t),u))}t.add(Rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(ws.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ws,zu)===null||Si.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(Bu.copy(s).invert(),Si.copy(e.ray).applyMatrix4(Bu),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let R=y,U=S;R<U;R+=3){const w=o.getX(R),P=o.getX(R+1),k=o.getX(R+2);r=Is(this,d,e,i,c,u,f,w,P,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=o.getX(p),S=o.getX(p+1),R=o.getX(p+2);r=Is(this,a,e,i,c,u,f,y,S,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let R=y,U=S;R<U;R+=3){const w=R,P=R+1,k=R+2;r=Is(this,d,e,i,c,u,f,w,P,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=p,S=p+1,R=p+2;r=Is(this,a,e,i,c,u,f,y,S,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function G0(n,e,t,i,r,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ui,o),l===null)return null;Us.copy(o),Us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:n}}function Is(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ji),n.getVertexPosition(l,Qi),n.getVertexPosition(c,er);const u=G0(n,e,t,i,Ji,Qi,er,Ds);if(u){r&&(Cs.fromBufferAttribute(r,o),Ps.fromBufferAttribute(r,l),Ls.fromBufferAttribute(r,c),u.uv=xn.getInterpolation(Ds,Ji,Qi,er,Cs,Ps,Ls,new qe)),s&&(Cs.fromBufferAttribute(s,o),Ps.fromBufferAttribute(s,l),Ls.fromBufferAttribute(s,c),u.uv1=xn.getInterpolation(Ds,Ji,Qi,er,Cs,Ps,Ls,new qe),u.uv2=u.uv1),a&&(Hu.fromBufferAttribute(a,o),Gu.fromBufferAttribute(a,l),Vu.fromBufferAttribute(a,c),u.normal=xn.getInterpolation(Ds,Ji,Qi,er,Hu,Gu,Vu,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};xn.getNormal(Ji,Qi,er,f.normal),u.face=f}return u}class as extends En{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(f,2));function _(v,p,d,y,S,R,U,w,P,k,le){const x=R/P,A=U/k,B=R/2,ie=U/2,D=w/2,j=P+1,V=k+1;let ee=0,W=0;const ne=new q;for(let ue=0;ue<V;ue++){const ce=ue*A-ie;for(let Se=0;Se<j;Se++){const Ce=Se*x-B;ne[v]=Ce*y,ne[p]=ce*S,ne[d]=D,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[p]=0,ne[d]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Se/P),f.push(1-ue/k),ee+=1}}for(let ue=0;ue<k;ue++)for(let ce=0;ce<P;ce++){const Se=h+ce+j*ue,Ce=h+ce+j*(ue+1),J=h+(ce+1)+j*(ue+1),he=h+(ce+1)+j*ue;l.push(Se,Ce,he),l.push(Ce,J,he),W+=6}o.addGroup(m,W,le),m+=W,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const r in i)e[r]=i[r]}return e}function V0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rd(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const k0={clone:Tr,merge:Pt};var W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=V0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sd extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new q,ku=new qe,Wu=new qe;class Zt extends sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Wu),t.subVectors(Wu,ku)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class q0 extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new Zt(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new Zt(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new Zt(tr,nr,e,t);o.layers=this.layers,this.add(o);const l=new Zt(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new Zt(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class od extends zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fi?St:Qt),this.texture=new od(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:si});s.uniforms.tEquirect.value=t;const a=new hn(r,s),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Ot),new q0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const pa=new q,j0=new q,Y0=new We;class Ti{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pa.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Y0.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Rl,Ns=new q;class Cl{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],y=r[13],S=r[14],R=r[15];if(i[0].setComponents(l-s,h-c,p-m,R-d).normalize(),i[1].setComponents(l+s,h+c,p+m,R+d).normalize(),i[2].setComponents(l+a,h+u,p+_,R+y).normalize(),i[3].setComponents(l-a,h-u,p-_,R-y).normalize(),i[4].setComponents(l-o,h-f,p-v,R-S).normalize(),t===Nn)i[5].setComponents(l+o,h+f,p+v,R+S).normalize();else if(t===io)i[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function K0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=f.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const h=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&_.length===0&&n.bufferSubData(f,0,h),_.length!==0){for(let v=0,p=_.length;v<p;v++){const d=_[v];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class bo extends En{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const y=d*h-a;for(let S=0;S<c;S++){const R=S*f-s;_.push(R,-y,0),v.push(0,0,1),p.push(S/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const S=y+c*d,R=y+c*(d+1),U=y+1+c*(d+1),w=y+1+c*d;m.push(S,R,w),m.push(R,U,w)}this.setIndex(m),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ux=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:rx,batching_pars_vertex:sx,batching_vertex:ox,begin_vertex:ax,beginnormal_vertex:lx,bsdfs:cx,iridescence_fragment:ux,bumpmap_pars_fragment:fx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:xx,common:Sx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:yx,displacementmap_vertex:Tx,emissivemap_fragment:bx,emissivemap_pars_fragment:Ax,colorspace_fragment:wx,colorspace_pars_fragment:Rx,envmap_fragment:Cx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Lx,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Wx,envmap_vertex:Ux,fog_vertex:Ix,fog_pars_vertex:Nx,fog_fragment:Ox,fog_pars_fragment:Fx,gradientmap_pars_fragment:Bx,lightmap_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Vx,lights_pars_begin:kx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:$x,lights_phong_pars_fragment:jx,lights_physical_fragment:Yx,lights_physical_pars_fragment:Kx,lights_fragment_begin:Zx,lights_fragment_maps:Jx,lights_fragment_end:Qx,logdepthbuf_fragment:eS,logdepthbuf_pars_fragment:tS,logdepthbuf_pars_vertex:nS,logdepthbuf_vertex:iS,map_fragment:rS,map_pars_fragment:sS,map_particle_fragment:oS,map_particle_pars_fragment:aS,metalnessmap_fragment:lS,metalnessmap_pars_fragment:cS,morphcolor_vertex:uS,morphnormal_vertex:fS,morphtarget_pars_vertex:hS,morphtarget_vertex:dS,normal_fragment_begin:pS,normal_fragment_maps:mS,normal_pars_fragment:gS,normal_pars_vertex:_S,normal_vertex:vS,normalmap_pars_fragment:xS,clearcoat_normal_fragment_begin:SS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:yS,opaque_fragment:TS,packing:bS,premultiplied_alpha_fragment:AS,project_vertex:wS,dithering_fragment:RS,dithering_pars_fragment:CS,roughnessmap_fragment:PS,roughnessmap_pars_fragment:LS,shadowmap_pars_fragment:DS,shadowmap_pars_vertex:US,shadowmap_vertex:IS,shadowmask_pars_fragment:NS,skinbase_vertex:OS,skinning_pars_vertex:FS,skinning_vertex:BS,skinnormal_vertex:zS,specularmap_fragment:HS,specularmap_pars_fragment:GS,tonemapping_fragment:VS,tonemapping_pars_fragment:kS,transmission_fragment:WS,transmission_pars_fragment:XS,uv_pars_fragment:qS,uv_pars_vertex:$S,uv_vertex:jS,worldpos_vertex:YS,background_vert:KS,background_frag:ZS,backgroundCube_vert:JS,backgroundCube_frag:QS,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distanceRGBA_vert:rM,distanceRGBA_frag:sM,equirect_vert:oM,equirect_frag:aM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:uM,meshbasic_frag:fM,meshlambert_vert:hM,meshlambert_frag:dM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:_M,meshphong_vert:vM,meshphong_frag:xM,meshphysical_vert:SM,meshphysical_frag:MM,meshtoon_vert:EM,meshtoon_frag:yM,points_vert:TM,points_frag:bM,shadow_vert:AM,shadow_frag:wM,sprite_vert:RM,sprite_frag:CM},ve={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_n={basic:{uniforms:Pt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Pt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Pt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Pt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Pt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Pt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Pt([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Pt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Pt([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Pt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Pt([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Pt([ve.common,ve.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Pt([ve.lights,ve.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};_n.physical={uniforms:Pt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Os={r:0,b:0,g:0};function PM(n,e,t,i,r,s,a){const o=new je(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(p,d){let y=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?v(o,l):S&&S.isColor&&(v(S,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Eo)?(u===void 0&&(u=new hn(new as(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Tr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,(f!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new hn(new bo(2,2),new fi({name:"BackgroundMaterial",uniforms:Tr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(Os,rd(n)),i.buffers.color.setClear(Os.r,Os.g,Os.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:_}}function LM(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(D,j,V,ee,W){let ne=!1;if(a){const ue=v(ee,V,j);c!==ue&&(c=ue,m(c.object)),ne=d(D,ee,V,W),ne&&y(D,ee,V,W)}else{const ue=j.wireframe===!0;(c.geometry!==ee.id||c.program!==V.id||c.wireframe!==ue)&&(c.geometry=ee.id,c.program=V.id,c.wireframe=ue,ne=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,k(D,j,V,ee),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,j,V){const ee=V.wireframe===!0;let W=o[D.id];W===void 0&&(W={},o[D.id]=W);let ne=W[j.id];ne===void 0&&(ne={},W[j.id]=ne);let ue=ne[ee];return ue===void 0&&(ue=p(h()),ne[ee]=ue),ue}function p(D){const j=[],V=[],ee=[];for(let W=0;W<r;W++)j[W]=0,V[W]=0,ee[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:V,attributeDivisors:ee,object:D,attributes:{},index:null}}function d(D,j,V,ee){const W=c.attributes,ne=j.attributes;let ue=0;const ce=V.getAttributes();for(const Se in ce)if(ce[Se].location>=0){const J=W[Se];let he=ne[Se];if(he===void 0&&(Se==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),Se==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;ue++}return c.attributesNum!==ue||c.index!==ee}function y(D,j,V,ee){const W={},ne=j.attributes;let ue=0;const ce=V.getAttributes();for(const Se in ce)if(ce[Se].location>=0){let J=ne[Se];J===void 0&&(Se==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),Se==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),W[Se]=he,ue++}c.attributes=W,c.attributesNum=ue,c.index=ee}function S(){const D=c.newAttributes;for(let j=0,V=D.length;j<V;j++)D[j]=0}function R(D){U(D,0)}function U(D,j){const V=c.newAttributes,ee=c.enabledAttributes,W=c.attributeDivisors;V[D]=1,ee[D]===0&&(n.enableVertexAttribArray(D),ee[D]=1),W[D]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,j),W[D]=j)}function w(){const D=c.newAttributes,j=c.enabledAttributes;for(let V=0,ee=j.length;V<ee;V++)j[V]!==D[V]&&(n.disableVertexAttribArray(V),j[V]=0)}function P(D,j,V,ee,W,ne,ue){ue===!0?n.vertexAttribIPointer(D,j,V,W,ne):n.vertexAttribPointer(D,j,V,ee,W,ne)}function k(D,j,V,ee){if(i.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=ee.attributes,ne=V.getAttributes(),ue=j.defaultAttributeValues;for(const ce in ne){const Se=ne[ce];if(Se.location>=0){let Ce=W[ce];if(Ce===void 0&&(ce==="instanceMatrix"&&D.instanceMatrix&&(Ce=D.instanceMatrix),ce==="instanceColor"&&D.instanceColor&&(Ce=D.instanceColor)),Ce!==void 0){const J=Ce.normalized,he=Ce.itemSize,_e=t.get(Ce);if(_e===void 0)continue;const z=_e.buffer,se=_e.type,Q=_e.bytesPerElement,pe=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||Ce.gpuType===Hh);if(Ce.isInterleavedBufferAttribute){const Me=Ce.data,O=Me.stride,T=Ce.offset;if(Me.isInstancedInterleavedBuffer){for(let b=0;b<Se.locationSize;b++)U(Se.location+b,Me.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let b=0;b<Se.locationSize;b++)R(Se.location+b);n.bindBuffer(n.ARRAY_BUFFER,z);for(let b=0;b<Se.locationSize;b++)P(Se.location+b,he/Se.locationSize,se,J,O*Q,(T+he/Se.locationSize*b)*Q,pe)}else{if(Ce.isInstancedBufferAttribute){for(let Me=0;Me<Se.locationSize;Me++)U(Se.location+Me,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Me=0;Me<Se.locationSize;Me++)R(Se.location+Me);n.bindBuffer(n.ARRAY_BUFFER,z);for(let Me=0;Me<Se.locationSize;Me++)P(Se.location+Me,he/Se.locationSize,se,J,he*Q,he/Se.locationSize*Me*Q,pe)}}else if(ue!==void 0){const J=ue[ce];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(Se.location,J);break;case 3:n.vertexAttrib3fv(Se.location,J);break;case 4:n.vertexAttrib4fv(Se.location,J);break;default:n.vertexAttrib1fv(Se.location,J)}}}}w()}function le(){B();for(const D in o){const j=o[D];for(const V in j){const ee=j[V];for(const W in ee)_(ee[W].object),delete ee[W];delete j[V]}delete o[D]}}function x(D){if(o[D.id]===void 0)return;const j=o[D.id];for(const V in j){const ee=j[V];for(const W in ee)_(ee[W].object),delete ee[W];delete j[V]}delete o[D.id]}function A(D){for(const j in o){const V=o[j];if(V[D.id]===void 0)continue;const ee=V[D.id];for(const W in ee)_(ee[W].object),delete ee[W];delete V[D.id]}}function B(){ie(),u=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:ie,dispose:le,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:R,disableUnusedAttributes:w}}function DM(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let m,_;if(r)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(u[_],f[_]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=f[v];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function UM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,R=a||e.has("OES_texture_float"),U=S&&R,w=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:R,floatVertexTextures:U,maxSamples:w}}function IM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ti,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,S=y*4;let R=d.clippingState||null;l.value=R,R=u(_,h,S,m);for(let U=0;U!==S;++U)R[U]=t[U];d.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,R=m;S!==v;++S,R+=4)a.copy(f[S]).applyMatrix4(y,o),a.normal.toArray(p,R),p[R+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function NM(n){let e=new WeakMap;function t(a,o){return o===Wa?a.mapping=Mr:o===Xa&&(a.mapping=Er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wa||o===Xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ld extends sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ar=4,Xu=[.125,.215,.35,.446,.526,.582],Pi=20,ma=new ld,qu=new je;let ga=null,_a=0,va=0;const bi=(1+Math.sqrt(5))/2,ir=1/bi,$u=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,bi,ir),new q(0,bi,-ir),new q(ir,0,bi),new q(-ir,0,bi),new q(bi,ir,0),new q(-bi,ir,0)];class ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,va),e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ts,format:un,colorSpace:zn,depthBuffer:!1},r=Yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OM(s)),this._blurMaterial=FM(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,i,r){const o=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(qu),u.toneMapping=oi,u.autoClear=!1;const m=new td({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new hn(new as,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(qu),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;Fs(r,y*S,d>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$u[(r-1)%$u.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):Pi;p>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const d=[];let y=0;for(let P=0;P<Pi;++P){const k=P/v,le=Math.exp(-k*k/2);d.push(le),P===0?y+=le:P<p&&(y+=2*le)}for(let P=0;P<d.length;P++)d[P]=d[P]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-i;const R=this._sizeLods[r],U=3*R*(r>S-ar?r-S+ar:0),w=4*(this._cubeSize-R);Fs(t,U,w,3*R,2*R),l.setRenderTarget(t),l.render(f,ma)}}function OM(n){const e=[],t=[],i=[];let r=n;const s=n-ar+1+Xu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ar?l=Xu[a-n+ar-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,v=3,p=2,d=1,y=new Float32Array(v*_*m),S=new Float32Array(p*_*m),R=new Float32Array(d*_*m);for(let w=0;w<m;w++){const P=w%3*2/3-1,k=w>2?0:-1,le=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];y.set(le,v*_*w),S.set(h,p*_*w);const x=[w,w,w,w,w,w];R.set(x,d*_*w)}const U=new En;U.setAttribute("position",new Xt(y,v)),U.setAttribute("uv",new Xt(S,p)),U.setAttribute("faceIndex",new Xt(R,d)),e.push(U),r>ar&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yu(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function FM(n,e,t){const i=new Float32Array(Pi),r=new q(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ku(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Zu(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wa||l===Xa,u=l===Mr||l===Er;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ju(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new ju(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function zM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HM(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let S=0,R=y.length;S<R;S+=3){const U=y[S+0],w=y[S+1],P=y[S+2];h.push(U,w,w,P,P,U)}}else if(_!==void 0){const y=_.array;v=_.version;for(let S=0,R=y.length/3-1;S<R;S+=3){const U=S+0,w=S+1,P=S+2;h.push(U,w,w,P,P,U)}}else return;const p=new(Yh(h)?id:nd)(h,1);p.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function GM(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(s,_,o,m*l),t.update(_,s,1)}function f(m,_,v){if(v===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,_,o,m*l,v),t.update(_,s,v)}function h(m,_,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,v);let d=0;for(let y=0;y<v;y++)d+=_[y];t.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function VM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kM(n,e){return n[0]-e[0]}function WM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function XM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==_){let D=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let k=0;y===!0&&(k=1),S===!0&&(k=2),R===!0&&(k=3);let le=u.attributes.position.count*k,x=1;le>e.maxTextureSize&&(x=Math.ceil(le/e.maxTextureSize),le=e.maxTextureSize);const A=new Float32Array(le*x*4*_),B=new Jh(A,le,x,_);B.type=In,B.needsUpdate=!0;const ie=k*4;for(let j=0;j<_;j++){const V=U[j],ee=w[j],W=P[j],ne=le*x*4*j;for(let ue=0;ue<V.count;ue++){const ce=ue*ie;y===!0&&(a.fromBufferAttribute(V,ue),A[ne+ce+0]=a.x,A[ne+ce+1]=a.y,A[ne+ce+2]=a.z,A[ne+ce+3]=0),S===!0&&(a.fromBufferAttribute(ee,ue),A[ne+ce+4]=a.x,A[ne+ce+5]=a.y,A[ne+ce+6]=a.z,A[ne+ce+7]=0),R===!0&&(a.fromBufferAttribute(W,ue),A[ne+ce+8]=a.x,A[ne+ce+9]=a.y,A[ne+ce+10]=a.z,A[ne+ce+11]=W.itemSize===4?a.w:1)}}v={count:_,texture:B,size:new qe(le,x)},s.set(u,v),u.addEventListener("dispose",D)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const d=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==m){_=[];for(let S=0;S<m;S++)_[S]=[S,0];i[u.id]=_}for(let S=0;S<m;S++){const R=_[S];R[0]=S,R[1]=h[S]}_.sort(WM);for(let S=0;S<8;S++)S<m&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(kM);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let S=0;S<8;S++){const R=o[S],U=R[0],w=R[1];U!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+S)!==v[U]&&u.setAttribute("morphTarget"+S,v[U]),p&&u.getAttribute("morphNormal"+S)!==p[U]&&u.setAttribute("morphNormal"+S,p[U]),r[S]=w,d+=w):(v&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function qM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class cd extends zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Oi,u!==Oi&&u!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Oi&&(i=ni),i===void 0&&u===yr&&(i=Ni),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ud=new zt,fd=new cd(1,1);fd.compareFunction=jh;const hd=new Jh,dd=new C0,pd=new od,Ju=[],Qu=[],ef=new Float32Array(16),tf=new Float32Array(9),nf=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ju[r];if(s===void 0&&(s=new Float32Array(r),Ju[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ao(n,e){let t=Qu[e];t===void 0&&(t=new Int32Array(e),Qu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;nf.set(i),n.uniformMatrix2fv(this.addr,!1,nf),mt(t,i)}}function JM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;tf.set(i),n.uniformMatrix3fv(this.addr,!1,tf),mt(t,i)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;ef.set(i),n.uniformMatrix4fv(this.addr,!1,ef),mt(t,i)}}function eE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function nE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function iE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function rE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function oE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function aE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function lE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?fd:ud;t.setTexture2D(e||s,r)}function cE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dd,r)}function uE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pd,r)}function fE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hd,r)}function hE(n){switch(n){case 5126:return $M;case 35664:return jM;case 35665:return YM;case 35666:return KM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return rE;case 36294:return sE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return cE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return fE}}function dE(n,e){n.uniform1fv(this.addr,e)}function pE(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function mE(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function gE(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function _E(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vE(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xE(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function SE(n,e){n.uniform1iv(this.addr,e)}function ME(n,e){n.uniform2iv(this.addr,e)}function EE(n,e){n.uniform3iv(this.addr,e)}function yE(n,e){n.uniform4iv(this.addr,e)}function TE(n,e){n.uniform1uiv(this.addr,e)}function bE(n,e){n.uniform2uiv(this.addr,e)}function AE(n,e){n.uniform3uiv(this.addr,e)}function wE(n,e){n.uniform4uiv(this.addr,e)}function RE(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ud,s[a])}function CE(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||dd,s[a])}function PE(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||pd,s[a])}function LE(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hd,s[a])}function DE(n){switch(n){case 5126:return dE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return _E;case 35675:return vE;case 35676:return xE;case 5124:case 35670:return SE;case 35667:case 35671:return ME;case 35668:case 35672:return EE;case 35669:case 35673:return yE;case 5125:return TE;case 36294:return bE;case 36295:return AE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return RE;case 35679:case 36299:case 36307:return CE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return LE}}class UE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hE(t.type)}}class IE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DE(t.type)}}class NE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function rf(n,e){n.seq.push(e),n.map[e.id]=e}function OE(n,e,t){const i=n.name,r=i.length;for(xa.lastIndex=0;;){const s=xa.exec(i),a=xa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){rf(t,c===void 0?new UE(o,n,e):new IE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new NE(o),rf(t,f)),t=f}}}class Xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);OE(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FE=37297;let BE=0;function zE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function HE(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===no&&t===to?i="LinearDisplayP3ToLinearSRGB":e===to&&t===no&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case yo:return[i,"LinearTransferOETF"];case St:case wl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function of(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zE(n.getShaderSource(e),a)}else return r}function GE(n,e){const t=HE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function VE(n,e){let t;switch(e){case Qv:t="Linear";break;case e0:t="Reinhard";break;case t0:t="OptimizedCineon";break;case n0:t="ACESFilmic";break;case r0:t="AgX";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function WE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function XE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function lr(n){return n!==""}function af(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $E=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(n){return n.replace($E,YE)}const jE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YE(n,e){let t=Ge[e];if(t===void 0){const i=jE.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Za(t)}const KE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(KE,ZE)}function ZE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function QE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case Er:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ey(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function ty(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Zv:e="ENVMAP_BLENDING_MIX";break;case Jv:e="ENVMAP_BLENDING_ADD";break}return e}function ny(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=JE(t),c=QE(t),u=ey(t),f=ty(t),h=ny(t),m=t.isWebGL2?"":kE(t),_=WE(t),v=XE(s),p=r.createProgram();let d,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(lr).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(lr).join(`
`),y.length>0&&(y+=`
`)):(d=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),y=[m,uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==oi?VE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,GE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Za(a),a=af(a,t),a=lf(a,t),o=Za(o),o=af(o,t),o=lf(o,t),a=cf(a),o=cf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=S+d+a,U=S+y+o,w=sf(r,r.VERTEX_SHADER,R),P=sf(r,r.FRAGMENT_SHADER,U);r.attachShader(p,w),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function k(B){if(n.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(w).trim(),j=r.getShaderInfoLog(P).trim();let V=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,w,P);else{const W=of(r,w,"vertex"),ne=of(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+W+`
`+ne)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||j==="")&&(ee=!1);ee&&(B.diagnostics={runnable:V,programLog:ie,vertexShader:{log:D,prefix:d},fragmentShader:{log:j,prefix:y}})}r.deleteShader(w),r.deleteShader(P),le=new Xs(r,p),x=qE(r,p)}let le;this.getUniforms=function(){return le===void 0&&k(this),le};let x;this.getAttributes=function(){return x===void 0&&k(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,FE)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=P,this}let ry=0;class sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oy(e),t.set(e,i)),i}}class oy{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function ay(n,e,t,i,r,s,a){const o=new Qh,l=new sy,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,A,B,ie,D){const j=ie.fog,V=D.geometry,ee=x.isMeshStandardMaterial?ie.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||ee),ne=W&&W.mapping===Eo?W.image.height:null,ue=v[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Ce=0;V.morphAttributes.position!==void 0&&(Ce=1),V.morphAttributes.normal!==void 0&&(Ce=2),V.morphAttributes.color!==void 0&&(Ce=3);let J,he,_e,z;if(ue){const nt=_n[ue];J=nt.vertexShader,he=nt.fragmentShader}else J=x.vertexShader,he=x.fragmentShader,l.update(x),_e=l.getVertexShaderID(x),z=l.getFragmentShaderID(x);const se=n.getRenderTarget(),Q=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,Me=!!x.map,O=!!x.matcap,T=!!W,b=!!x.aoMap,I=!!x.lightMap,H=!!x.bumpMap,Y=!!x.normalMap,te=!!x.displacementMap,M=!!x.emissiveMap,g=!!x.metalnessMap,L=!!x.roughnessMap,N=x.anisotropy>0,F=x.clearcoat>0,X=x.iridescence>0,ae=x.sheen>0,re=x.transmission>0,fe=N&&!!x.anisotropyMap,xe=F&&!!x.clearcoatMap,ye=F&&!!x.clearcoatNormalMap,oe=F&&!!x.clearcoatRoughnessMap,ze=X&&!!x.iridescenceMap,Oe=X&&!!x.iridescenceThicknessMap,Ue=ae&&!!x.sheenColorMap,Ae=ae&&!!x.sheenRoughnessMap,Te=!!x.specularMap,Re=!!x.specularColorMap,He=!!x.specularIntensityMap,Qe=re&&!!x.transmissionMap,Xe=re&&!!x.thicknessMap,tt=!!x.gradientMap,C=!!x.alphaMap,me=x.alphaTest>0,ge=!!x.alphaHash,be=!!x.extensions;let Pe=oi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const Ze={isWebGL2:f,shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:he,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:pe,instancing:Q,instancingColor:Q&&D.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:zn,alphaToCoverage:!!x.alphaToCoverage,map:Me,matcap:O,envMap:T,envMapMode:T&&W.mapping,envMapCubeUVHeight:ne,aoMap:b,lightMap:I,bumpMap:H,normalMap:Y,displacementMap:m&&te,emissiveMap:M,normalMapObjectSpace:Y&&x.normalMapType===m0,normalMapTangentSpace:Y&&x.normalMapType===Al,metalnessMap:g,roughnessMap:L,anisotropy:N,anisotropyMap:fe,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:ye,clearcoatRoughnessMap:oe,iridescence:X,iridescenceMap:ze,iridescenceThicknessMap:Oe,sheen:ae,sheenColorMap:Ue,sheenRoughnessMap:Ae,specularMap:Te,specularColorMap:Re,specularIntensityMap:He,transmission:re,transmissionMap:Qe,thicknessMap:Xe,gradientMap:tt,opaque:x.transparent===!1&&x.blending===pr&&x.alphaToCoverage===!1,alphaMap:C,alphaTest:me,alphaHash:ge,combine:x.combine,mapUv:Me&&p(x.map.channel),aoMapUv:b&&p(x.aoMap.channel),lightMapUv:I&&p(x.lightMap.channel),bumpMapUv:H&&p(x.bumpMap.channel),normalMapUv:Y&&p(x.normalMap.channel),displacementMapUv:te&&p(x.displacementMap.channel),emissiveMapUv:M&&p(x.emissiveMap.channel),metalnessMapUv:g&&p(x.metalnessMap.channel),roughnessMapUv:L&&p(x.roughnessMap.channel),anisotropyMapUv:fe&&p(x.anisotropyMap.channel),clearcoatMapUv:xe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ye&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(x.sheenRoughnessMap.channel),specularMapUv:Te&&p(x.specularMap.channel),specularColorMapUv:Re&&p(x.specularColorMap.channel),specularIntensityMapUv:He&&p(x.specularIntensityMap.channel),transmissionMapUv:Qe&&p(x.transmissionMap.channel),thicknessMapUv:Xe&&p(x.thicknessMap.channel),alphaMapUv:C&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Y||N),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Me||C),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:be&&x.extensions.derivatives===!0,extensionFragDepth:be&&x.extensions.fragDepth===!0,extensionDrawBuffers:be&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:be&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function y(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)A.push(B),A.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(S(A,x),R(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function S(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function R(x,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),x.push(o.mask)}function U(x){const A=v[x.type];let B;if(A){const ie=_n[A];B=k0.clone(ie.uniforms)}else B=x.uniforms;return B}function w(x,A){let B;for(let ie=0,D=u.length;ie<D;ie++){const j=u[ie];if(j.cacheKey===A){B=j,++B.usedTimes;break}}return B===void 0&&(B=new iy(n,A,x,s),u.push(B)),B}function P(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),x.destroy()}}function k(x){l.remove(x)}function le(){l.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:U,acquireProgram:w,releaseProgram:P,releaseShaderCache:k,programs:u,dispose:le}}function ly(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function cy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ff(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,_,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function o(f,h,m,_,v,p){const d=a(f,h,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,_,v,p){const d=a(f,h,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||cy),i.length>1&&i.sort(h||ff),r.length>1&&r.sort(h||ff)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function uy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new hf,n.set(i,[a])):r>=s.length?(a=new hf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new je};break;case"SpotLight":t={position:new q,direction:new q,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function hy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dy=0;function py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function my(n,e){const t=new fy,i=hy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,a=new ht,o=new ht;function l(u,f){let h=0,m=0,_=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let v=0,p=0,d=0,y=0,S=0,R=0,U=0,w=0,P=0,k=0,le=0;u.sort(py);const x=f===!0?Math.PI:1;for(let B=0,ie=u.length;B<ie;B++){const D=u[B],j=D.color,V=D.intensity,ee=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=j.r*V*x,m+=j.g*V*x,_+=j.b*V*x;else if(D.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(D.sh.coefficients[ne],V);le++}else if(D.isDirectionalLight){const ne=t.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const ue=D.shadow,ce=i.get(D);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,r.directionalShadow[v]=ce,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=D.shadow.matrix,R++}r.directional[v]=ne,v++}else if(D.isSpotLight){const ne=t.get(D);ne.position.setFromMatrixPosition(D.matrixWorld),ne.color.copy(j).multiplyScalar(V*x),ne.distance=ee,ne.coneCos=Math.cos(D.angle),ne.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ne.decay=D.decay,r.spot[d]=ne;const ue=D.shadow;if(D.map&&(r.spotLightMap[P]=D.map,P++,ue.updateMatrices(D),D.castShadow&&k++),r.spotLightMatrix[d]=ue.matrix,D.castShadow){const ce=i.get(D);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,r.spotShadow[d]=ce,r.spotShadowMap[d]=W,w++}d++}else if(D.isRectAreaLight){const ne=t.get(D);ne.color.copy(j).multiplyScalar(V),ne.halfWidth.set(D.width*.5,0,0),ne.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=ne,y++}else if(D.isPointLight){const ne=t.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity*x),ne.distance=D.distance,ne.decay=D.decay,D.castShadow){const ue=D.shadow,ce=i.get(D);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,ce.shadowCameraNear=ue.camera.near,ce.shadowCameraFar=ue.camera.far,r.pointShadow[p]=ce,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=D.shadow.matrix,U++}r.point[p]=ne,p++}else if(D.isHemisphereLight){const ne=t.get(D);ne.skyColor.copy(D.color).multiplyScalar(V*x),ne.groundColor.copy(D.groundColor).multiplyScalar(V*x),r.hemi[S]=ne,S++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==v||A.pointLength!==p||A.spotLength!==d||A.rectAreaLength!==y||A.hemiLength!==S||A.numDirectionalShadows!==R||A.numPointShadows!==U||A.numSpotShadows!==w||A.numSpotMaps!==P||A.numLightProbes!==le)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=y,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+P-k,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=le,A.directionalLength=v,A.pointLength=p,A.spotLength=d,A.rectAreaLength=y,A.hemiLength=S,A.numDirectionalShadows=R,A.numPointShadows=U,A.numSpotShadows=w,A.numSpotMaps=P,A.numLightProbes=le,r.version=dy++)}function c(u,f){let h=0,m=0,_=0,v=0,p=0;const d=f.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const R=u[y];if(R.isDirectionalLight){const U=r.directional[h];U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(d),h++}else if(R.isSpotLight){const U=r.spot[_];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(d),U.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(d),_++}else if(R.isRectAreaLight){const U=r.rectArea[v];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(d),o.identity(),a.copy(R.matrixWorld),a.premultiply(d),o.extractRotation(a),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){const U=r.point[m];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(d),m++}else if(R.isHemisphereLight){const U=r.hemi[p];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function df(n,e){const t=new my(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gy(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new df(n,e),t.set(s,[l])):a>=o.length?(l=new df(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class _y extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vy extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function My(n,e,t){let i=new Cl;const r=new qe,s=new qe,a=new vt,o=new _y({depthPacking:p0}),l=new vy,c={},u=t.maxTextureSize,f={[ui]:Bt,[Bt]:ui,[Un]:Un},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:xy,fragmentShader:Sy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new hn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let d=this.type;this.render=function(w,P,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const le=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),B=n.state;B.setBlending(si),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ie=d!==Ln&&this.type===Ln,D=d===Ln&&this.type!==Ln;for(let j=0,V=w.length;j<V;j++){const ee=w[j],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ne=W.getFrameExtents();if(r.multiply(ne),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,W.mapSize.y=s.y)),W.map===null||ie===!0||D===!0){const ce=this.type!==Ln?{minFilter:Dt,magFilter:Dt}:{};W.map!==null&&W.map.dispose(),W.map=new zi(r.x,r.y,ce),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ue=W.getViewportCount();for(let ce=0;ce<ue;ce++){const Se=W.getViewport(ce);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(a),W.updateMatrices(ee,ce),i=W.getFrustum(),R(P,k,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Ln&&y(W,k),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(le,x,A)};function y(w,P){const k=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,k,h,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,k,m,v,null)}function S(w,P,k,le){let x=null;const A=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)x=A;else if(x=k.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const B=x.uuid,ie=P.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let j=D[ie];j===void 0&&(j=x.clone(),D[ie]=j,P.addEventListener("dispose",U)),x=j}if(x.visible=P.visible,x.wireframe=P.wireframe,le===Ln?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:f[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,k.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=n.properties.get(x);B.light=k}return x}function R(w,P,k,le,x){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ln)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const ie=e.update(w),D=w.material;if(Array.isArray(D)){const j=ie.groups;for(let V=0,ee=j.length;V<ee;V++){const W=j[V],ne=D[W.materialIndex];if(ne&&ne.visible){const ue=S(w,ne,le,x);w.onBeforeShadow(n,w,P,k,ie,ue,W),n.renderBufferDirect(k,null,ie,ue,w,W),w.onAfterShadow(n,w,P,k,ie,ue,W)}}}else if(D.visible){const j=S(w,D,le,x);w.onBeforeShadow(n,w,P,k,ie,j,null),n.renderBufferDirect(k,null,ie,j,w,null),w.onAfterShadow(n,w,P,k,ie,j,null)}}const B=w.children;for(let ie=0,D=B.length;ie<D;ie++)R(B[ie],P,k,le,x)}function U(w){w.target.removeEventListener("dispose",U);for(const k in c){const le=c[k],x=w.target.uuid;x in le&&(le[x].dispose(),delete le[x])}}}function Ey(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const me=new vt;let ge=null;const be=new vt(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!C&&(n.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){C=Pe},setClear:function(Pe,Ze,nt,xt,$t){$t===!0&&(Pe*=xt,Ze*=xt,nt*=xt),me.set(Pe,Ze,nt,xt),be.equals(me)===!1&&(n.clearColor(Pe,Ze,nt,xt),be.copy(me))},reset:function(){C=!1,ge=null,be.set(-1,0,0,0)}}}function s(){let C=!1,me=null,ge=null,be=null;return{setTest:function(Pe){Pe?Q(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(Pe){me!==Pe&&!C&&(n.depthMask(Pe),me=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case Wv:n.depthFunc(n.NEVER);break;case Xv:n.depthFunc(n.ALWAYS);break;case qv:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case $v:n.depthFunc(n.EQUAL);break;case jv:n.depthFunc(n.GEQUAL);break;case Yv:n.depthFunc(n.GREATER);break;case Kv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Pe}},setLocked:function(Pe){C=Pe},setClear:function(Pe){be!==Pe&&(n.clearDepth(Pe),be=Pe)},reset:function(){C=!1,me=null,ge=null,be=null}}}function a(){let C=!1,me=null,ge=null,be=null,Pe=null,Ze=null,nt=null,xt=null,$t=null;return{setTest:function(it){C||(it?Q(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(it){me!==it&&!C&&(n.stencilMask(it),me=it)},setFunc:function(it,Rt,pn){(ge!==it||be!==Rt||Pe!==pn)&&(n.stencilFunc(it,Rt,pn),ge=it,be=Rt,Pe=pn)},setOp:function(it,Rt,pn){(Ze!==it||nt!==Rt||xt!==pn)&&(n.stencilOp(it,Rt,pn),Ze=it,nt=Rt,xt=pn)},setLocked:function(it){C=it},setClear:function(it){$t!==it&&(n.clearStencil(it),$t=it)},reset:function(){C=!1,me=null,ge=null,be=null,Pe=null,Ze=null,nt=null,xt=null,$t=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,v=[],p=null,d=!1,y=null,S=null,R=null,U=null,w=null,P=null,k=null,le=new je(0,0,0),x=0,A=!1,B=null,ie=null,D=null,j=null,V=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ue)[1]),W=ne>=1):ue.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),W=ne>=2);let ce=null,Se={};const Ce=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),he=new vt().fromArray(Ce),_e=new vt().fromArray(J);function z(C,me,ge,be){const Pe=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(C,Ze),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ge;nt++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(me+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Ze}const se={};se[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(n.DEPTH_TEST),l.setFunc(Qs),te(!1),M(Xc),Q(n.CULL_FACE),H(si);function Q(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function pe(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function Me(C,me){return m[C]!==me?(n.bindFramebuffer(C,me),m[C]=me,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function O(C,me){let ge=v,be=!1;if(C)if(ge=_.get(me),ge===void 0&&(ge=[],_.set(me,ge)),C.isWebGLMultipleRenderTargets){const Pe=C.texture;if(ge.length!==Pe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,nt=Pe.length;Ze<nt;Ze++)ge[Ze]=n.COLOR_ATTACHMENT0+Ze;ge.length=Pe.length,be=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,be=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function T(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const b={[Ci]:n.FUNC_ADD,[Cv]:n.FUNC_SUBTRACT,[Pv]:n.FUNC_REVERSE_SUBTRACT};if(i)b[Yc]=n.MIN,b[Kc]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(b[Yc]=C.MIN_EXT,b[Kc]=C.MAX_EXT)}const I={[Lv]:n.ZERO,[Dv]:n.ONE,[Uv]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[zv]:n.SRC_ALPHA_SATURATE,[Fv]:n.DST_COLOR,[Nv]:n.DST_ALPHA,[Iv]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[Bv]:n.ONE_MINUS_DST_COLOR,[Ov]:n.ONE_MINUS_DST_ALPHA,[Hv]:n.CONSTANT_COLOR,[Gv]:n.ONE_MINUS_CONSTANT_COLOR,[Vv]:n.CONSTANT_ALPHA,[kv]:n.ONE_MINUS_CONSTANT_ALPHA};function H(C,me,ge,be,Pe,Ze,nt,xt,$t,it){if(C===si){d===!0&&(pe(n.BLEND),d=!1);return}if(d===!1&&(Q(n.BLEND),d=!0),C!==Rv){if(C!==y||it!==A){if((S!==Ci||w!==Ci)&&(n.blendEquation(n.FUNC_ADD),S=Ci,w=Ci),it)switch(C){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,U=null,P=null,k=null,le.set(0,0,0),x=0,y=C,A=it}return}Pe=Pe||me,Ze=Ze||ge,nt=nt||be,(me!==S||Pe!==w)&&(n.blendEquationSeparate(b[me],b[Pe]),S=me,w=Pe),(ge!==R||be!==U||Ze!==P||nt!==k)&&(n.blendFuncSeparate(I[ge],I[be],I[Ze],I[nt]),R=ge,U=be,P=Ze,k=nt),(xt.equals(le)===!1||$t!==x)&&(n.blendColor(xt.r,xt.g,xt.b,$t),le.copy(xt),x=$t),y=C,A=!1}function Y(C,me){C.side===Un?pe(n.CULL_FACE):Q(n.CULL_FACE);let ge=C.side===Bt;me&&(ge=!ge),te(ge),C.blending===pr&&C.transparent===!1?H(si):H(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const be=C.stencilWrite;c.setTest(be),be&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),L(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(C){B!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),B=C)}function M(C){C!==bv?(Q(n.CULL_FACE),C!==ie&&(C===Xc?n.cullFace(n.BACK):C===Av?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),ie=C}function g(C){C!==D&&(W&&n.lineWidth(C),D=C)}function L(C,me,ge){C?(Q(n.POLYGON_OFFSET_FILL),(j!==me||V!==ge)&&(n.polygonOffset(me,ge),j=me,V=ge)):pe(n.POLYGON_OFFSET_FILL)}function N(C){C?Q(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function F(C){C===void 0&&(C=n.TEXTURE0+ee-1),ce!==C&&(n.activeTexture(C),ce=C)}function X(C,me,ge){ge===void 0&&(ce===null?ge=n.TEXTURE0+ee-1:ge=ce);let be=Se[ge];be===void 0&&(be={type:void 0,texture:void 0},Se[ge]=be),(be.type!==C||be.texture!==me)&&(ce!==ge&&(n.activeTexture(ge),ce=ge),n.bindTexture(C,me||se[C]),be.type=C,be.texture=me)}function ae(){const C=Se[ce];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(C){he.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),he.copy(C))}function He(C){_e.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),_e.copy(C))}function Qe(C,me){let ge=f.get(me);ge===void 0&&(ge=new WeakMap,f.set(me,ge));let be=ge.get(C);be===void 0&&(be=n.getUniformBlockIndex(me,C.name),ge.set(C,be))}function Xe(C,me){const be=f.get(me).get(C);u.get(me)!==be&&(n.uniformBlockBinding(me,be,C.__bindingPointIndex),u.set(me,be))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,Se={},m={},_=new WeakMap,v=[],p=null,d=!1,y=null,S=null,R=null,U=null,w=null,P=null,k=null,le=new je(0,0,0),x=0,A=!1,B=null,ie=null,D=null,j=null,V=null,he.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Q,disable:pe,bindFramebuffer:Me,drawBuffers:O,useProgram:T,setBlending:H,setMaterial:Y,setFlipSided:te,setCullFace:M,setLineWidth:g,setPolygonOffset:L,setScissorTest:N,activeTexture:F,bindTexture:X,unbindTexture:ae,compressedTexImage2D:re,compressedTexImage3D:fe,texImage2D:Ae,texImage3D:Te,updateUBOMapping:Qe,uniformBlockBinding:Xe,texStorage2D:Oe,texStorage3D:Ue,texSubImage2D:xe,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:ze,scissor:Re,viewport:He,reset:tt}}function yy(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return m?new OffscreenCanvas(M,g):ro("canvas")}function v(M,g,L,N){let F=1;if((M.width>N||M.height>N)&&(F=N/Math.max(M.width,M.height)),F<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const X=g?Ka:Math.floor,ae=X(F*M.width),re=X(F*M.height);f===void 0&&(f=_(ae,re));const fe=L?_(ae,re):f;return fe.width=ae,fe.height=re,fe.getContext("2d").drawImage(M,0,0,ae,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ae+"x"+re+")."),fe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Au(M.width)&&Au(M.height)}function d(M){return o?!1:M.wrapS!==cn||M.wrapT!==cn||M.minFilter!==Dt&&M.minFilter!==Ot}function y(M,g){return M.generateMipmaps&&g&&M.minFilter!==Dt&&M.minFilter!==Ot}function S(M){n.generateMipmap(M)}function R(M,g,L,N,F=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===n.RED&&(L===n.FLOAT&&(X=n.R32F),L===n.HALF_FLOAT&&(X=n.R16F),L===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.R8UI),L===n.UNSIGNED_SHORT&&(X=n.R16UI),L===n.UNSIGNED_INT&&(X=n.R32UI),L===n.BYTE&&(X=n.R8I),L===n.SHORT&&(X=n.R16I),L===n.INT&&(X=n.R32I)),g===n.RG&&(L===n.FLOAT&&(X=n.RG32F),L===n.HALF_FLOAT&&(X=n.RG16F),L===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RGBA){const ae=F?eo:et.getTransfer(N);L===n.FLOAT&&(X=n.RGBA32F),L===n.HALF_FLOAT&&(X=n.RGBA16F),L===n.UNSIGNED_BYTE&&(X=ae===rt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function U(M,g,L){return y(M,L)===!0||M.isFramebufferTexture&&M.minFilter!==Dt&&M.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function w(M){return M===Dt||M===Zc||M===Ir?n.NEAREST:n.LINEAR}function P(M){const g=M.target;g.removeEventListener("dispose",P),le(g),g.isVideoTexture&&u.delete(g)}function k(M){const g=M.target;g.removeEventListener("dispose",k),A(g)}function le(M){const g=i.get(M);if(g.__webglInit===void 0)return;const L=M.source,N=h.get(L);if(N){const F=N[g.__cacheKey];F.usedTimes--,F.usedTimes===0&&x(M),Object.keys(N).length===0&&h.delete(L)}i.remove(M)}function x(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const L=M.source,N=h.get(L);delete N[g.__cacheKey],a.memory.textures--}function A(M){const g=M.texture,L=i.get(M),N=i.get(g);if(N.__webglTexture!==void 0&&(n.deleteTexture(N.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(L.__webglFramebuffer[F]))for(let X=0;X<L.__webglFramebuffer[F].length;X++)n.deleteFramebuffer(L.__webglFramebuffer[F][X]);else n.deleteFramebuffer(L.__webglFramebuffer[F]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[F])}else{if(Array.isArray(L.__webglFramebuffer))for(let F=0;F<L.__webglFramebuffer.length;F++)n.deleteFramebuffer(L.__webglFramebuffer[F]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let F=0;F<L.__webglColorRenderbuffer.length;F++)L.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[F]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let F=0,X=g.length;F<X;F++){const ae=i.get(g[F]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(g[F])}i.remove(g),i.remove(M)}let B=0;function ie(){B=0}function D(){const M=B;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),B+=1,M}function j(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function V(M,g){const L=i.get(M);if(M.isVideoTexture&&Y(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){const N=M.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(L,M,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function ee(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){he(L,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function W(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){he(L,M,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function ne(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){_e(L,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const ue={[qa]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[$a]:n.MIRRORED_REPEAT},ce={[Dt]:n.NEAREST,[Zc]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Wo]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},Se={[g0]:n.NEVER,[E0]:n.ALWAYS,[_0]:n.LESS,[jh]:n.LEQUAL,[v0]:n.EQUAL,[M0]:n.GEQUAL,[x0]:n.GREATER,[S0]:n.NOTEQUAL};function Ce(M,g,L){if(g.type===In&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===Wo||g.magFilter===Ir||g.magFilter===Di||g.minFilter===Ot||g.minFilter===Wo||g.minFilter===Ir||g.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),L?(n.texParameteri(M,n.TEXTURE_WRAP_S,ue[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ue[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ue[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ce[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ce[g.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==cn||g.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,w(g.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,w(g.minFilter)),g.minFilter!==Dt&&g.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Dt||g.minFilter!==Ir&&g.minFilter!==Di||g.type===In&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function J(M,g){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",P));const N=g.source;let F=h.get(N);F===void 0&&(F={},h.set(N,F));const X=j(g);if(X!==M.__cacheKey){F[X]===void 0&&(F[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),F[X].usedTimes++;const ae=F[M.__cacheKey];ae!==void 0&&(F[M.__cacheKey].usedTimes--,ae.usedTimes===0&&x(g)),M.__cacheKey=X,M.__webglTexture=F[X].texture}return L}function he(M,g,L){let N=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(N=n.TEXTURE_3D);const F=J(M,g),X=g.source;t.bindTexture(N,M.__webglTexture,n.TEXTURE0+L);const ae=i.get(X);if(X.version!==ae.__version||F===!0){t.activeTexture(n.TEXTURE0+L);const re=et.getPrimaries(et.workingColorSpace),fe=g.colorSpace===Qt?null:et.getPrimaries(g.colorSpace),xe=g.colorSpace===Qt||re===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ye=d(g)&&p(g.image)===!1;let oe=v(g.image,ye,!1,r.maxTextureSize);oe=te(g,oe);const ze=p(oe)||o,Oe=s.convert(g.format,g.colorSpace);let Ue=s.convert(g.type),Ae=R(g.internalFormat,Oe,Ue,g.colorSpace,g.isVideoTexture);Ce(N,g,ze);let Te;const Re=g.mipmaps,He=o&&g.isVideoTexture!==!0&&Ae!==qh,Qe=ae.__version===void 0||F===!0,Xe=X.dataReady,tt=U(g,oe,ze);if(g.isDepthTexture)Ae=n.DEPTH_COMPONENT,o?g.type===In?Ae=n.DEPTH_COMPONENT32F:g.type===ni?Ae=n.DEPTH_COMPONENT24:g.type===Ni?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:g.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Oi&&Ae===n.DEPTH_COMPONENT&&g.type!==bl&&g.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ni,Ue=s.convert(g.type)),g.format===yr&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,g.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ni,Ue=s.convert(g.type))),Qe&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,Oe,Ue,null));else if(g.isDataTexture)if(Re.length>0&&ze){He&&Qe&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,Re[0].width,Re[0].height);for(let C=0,me=Re.length;C<me;C++)Te=Re[C],He?Xe&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,Te.width,Te.height,Oe,Ue,Te.data):t.texImage2D(n.TEXTURE_2D,C,Ae,Te.width,Te.height,0,Oe,Ue,Te.data);g.generateMipmaps=!1}else He?(Qe&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,oe.width,oe.height),Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Oe,Ue,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,Oe,Ue,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){He&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Ae,Re[0].width,Re[0].height,oe.depth);for(let C=0,me=Re.length;C<me;C++)Te=Re[C],g.format!==un?Oe!==null?He?Xe&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,Te.width,Te.height,oe.depth,Oe,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,C,Ae,Te.width,Te.height,oe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,Te.width,Te.height,oe.depth,Oe,Ue,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,C,Ae,Te.width,Te.height,oe.depth,0,Oe,Ue,Te.data)}else{He&&Qe&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,Re[0].width,Re[0].height);for(let C=0,me=Re.length;C<me;C++)Te=Re[C],g.format!==un?Oe!==null?He?Xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,C,0,0,Te.width,Te.height,Oe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,C,Ae,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Xe&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,Te.width,Te.height,Oe,Ue,Te.data):t.texImage2D(n.TEXTURE_2D,C,Ae,Te.width,Te.height,0,Oe,Ue,Te.data)}else if(g.isDataArrayTexture)He?(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Ae,oe.width,oe.height,oe.depth),Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Oe,Ue,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,Oe,Ue,oe.data);else if(g.isData3DTexture)He?(Qe&&t.texStorage3D(n.TEXTURE_3D,tt,Ae,oe.width,oe.height,oe.depth),Xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Oe,Ue,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,Oe,Ue,oe.data);else if(g.isFramebufferTexture){if(Qe)if(He)t.texStorage2D(n.TEXTURE_2D,tt,Ae,oe.width,oe.height);else{let C=oe.width,me=oe.height;for(let ge=0;ge<tt;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ae,C,me,0,Oe,Ue,null),C>>=1,me>>=1}}else if(Re.length>0&&ze){He&&Qe&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,Re[0].width,Re[0].height);for(let C=0,me=Re.length;C<me;C++)Te=Re[C],He?Xe&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,Oe,Ue,Te):t.texImage2D(n.TEXTURE_2D,C,Ae,Oe,Ue,Te);g.generateMipmaps=!1}else He?(Qe&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,oe.width,oe.height),Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Ue,oe)):t.texImage2D(n.TEXTURE_2D,0,Ae,Oe,Ue,oe);y(g,ze)&&S(N),ae.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function _e(M,g,L){if(g.image.length!==6)return;const N=J(M,g),F=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+L);const X=i.get(F);if(F.version!==X.__version||N===!0){t.activeTexture(n.TEXTURE0+L);const ae=et.getPrimaries(et.workingColorSpace),re=g.colorSpace===Qt?null:et.getPrimaries(g.colorSpace),fe=g.colorSpace===Qt||ae===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,ye=g.image[0]&&g.image[0].isDataTexture,oe=[];for(let C=0;C<6;C++)!xe&&!ye?oe[C]=v(g.image[C],!1,!0,r.maxCubemapSize):oe[C]=ye?g.image[C].image:g.image[C],oe[C]=te(g,oe[C]);const ze=oe[0],Oe=p(ze)||o,Ue=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type),Te=R(g.internalFormat,Ue,Ae,g.colorSpace),Re=o&&g.isVideoTexture!==!0,He=X.__version===void 0||N===!0,Qe=F.dataReady;let Xe=U(g,ze,Oe);Ce(n.TEXTURE_CUBE_MAP,g,Oe);let tt;if(xe){Re&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,Te,ze.width,ze.height);for(let C=0;C<6;C++){tt=oe[C].mipmaps;for(let me=0;me<tt.length;me++){const ge=tt[me];g.format!==un?Ue!==null?Re?Qe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me,0,0,ge.width,ge.height,Ue,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me,0,0,ge.width,ge.height,Ue,Ae,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me,Te,ge.width,ge.height,0,Ue,Ae,ge.data)}}}else{tt=g.mipmaps,Re&&He&&(tt.length>0&&Xe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,Te,oe[0].width,oe[0].height));for(let C=0;C<6;C++)if(ye){Re?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,oe[C].width,oe[C].height,Ue,Ae,oe[C].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Te,oe[C].width,oe[C].height,0,Ue,Ae,oe[C].data);for(let me=0;me<tt.length;me++){const be=tt[me].image[C].image;Re?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me+1,0,0,be.width,be.height,Ue,Ae,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me+1,Te,be.width,be.height,0,Ue,Ae,be.data)}}else{Re?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Ue,Ae,oe[C]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Te,Ue,Ae,oe[C]);for(let me=0;me<tt.length;me++){const ge=tt[me];Re?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me+1,0,0,Ue,Ae,ge.image[C]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,me+1,Te,Ue,Ae,ge.image[C])}}}y(g,Oe)&&S(n.TEXTURE_CUBE_MAP),X.__version=F.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function z(M,g,L,N,F,X){const ae=s.convert(L.format,L.colorSpace),re=s.convert(L.type),fe=R(L.internalFormat,ae,re,L.colorSpace);if(!i.get(g).__hasExternalTextures){const ye=Math.max(1,g.width>>X),oe=Math.max(1,g.height>>X);F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?t.texImage3D(F,X,fe,ye,oe,g.depth,0,ae,re,null):t.texImage2D(F,X,fe,ye,oe,0,ae,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),H(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,F,i.get(L).__webglTexture,0,I(g)):(F===n.TEXTURE_2D||F>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,F,i.get(L).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(M,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let N=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(L||H(g)){const F=g.depthTexture;F&&F.isDepthTexture&&(F.type===In?N=n.DEPTH_COMPONENT32F:F.type===ni&&(N=n.DEPTH_COMPONENT24));const X=I(g);H(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,N,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,N,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const N=I(g);L&&H(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,g.width,g.height):H(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const N=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let F=0;F<N.length;F++){const X=N[F],ae=s.convert(X.format,X.colorSpace),re=s.convert(X.type),fe=R(X.internalFormat,ae,re,X.colorSpace),xe=I(g);L&&H(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,fe,g.width,g.height):H(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,fe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,fe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V(g.depthTexture,0);const N=i.get(g.depthTexture).__webglTexture,F=I(g);if(g.depthTexture.format===Oi)H(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(g.depthTexture.format===yr)H(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function pe(M){const g=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Q(g.__webglFramebuffer,M)}else if(L){g.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[N]),g.__webglDepthbuffer[N]=n.createRenderbuffer(),se(g.__webglDepthbuffer[N],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),se(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(M,g,L){const N=i.get(M);g!==void 0&&z(N.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&pe(M)}function O(M){const g=M.texture,L=i.get(M),N=i.get(g);M.addEventListener("dispose",k),M.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=g.version,a.memory.textures++);const F=M.isWebGLCubeRenderTarget===!0,X=M.isWebGLMultipleRenderTargets===!0,ae=p(M)||o;if(F){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let fe=0;fe<g.mipmaps.length;fe++)L.__webglFramebuffer[re][fe]=n.createFramebuffer()}else L.__webglFramebuffer[re]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)L.__webglFramebuffer[re]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(X)if(r.drawBuffers){const re=M.texture;for(let fe=0,xe=re.length;fe<xe;fe++){const ye=i.get(re[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&H(M)===!1){const re=X?g:[g];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const xe=re[fe];L.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[fe]);const ye=s.convert(xe.format,xe.colorSpace),oe=s.convert(xe.type),ze=R(xe.internalFormat,ye,oe,xe.colorSpace,M.isXRRenderTarget===!0),Oe=I(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ze,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,L.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),se(L.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,g,ae);for(let re=0;re<6;re++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)z(L.__webglFramebuffer[re][fe],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe);else z(L.__webglFramebuffer[re],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);y(g,ae)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const re=M.texture;for(let fe=0,xe=re.length;fe<xe;fe++){const ye=re[fe],oe=i.get(ye);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Ce(n.TEXTURE_2D,ye,ae),z(L.__webglFramebuffer,M,ye,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),y(ye,ae)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?re=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,N.__webglTexture),Ce(re,g,ae),o&&g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)z(L.__webglFramebuffer[fe],M,g,n.COLOR_ATTACHMENT0,re,fe);else z(L.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,re,0);y(g,ae)&&S(re),t.unbindTexture()}M.depthBuffer&&pe(M)}function T(M){const g=p(M)||o,L=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let N=0,F=L.length;N<F;N++){const X=L[N];if(y(X,g)){const ae=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,re=i.get(X).__webglTexture;t.bindTexture(ae,re),S(ae),t.unbindTexture()}}}function b(M){if(o&&M.samples>0&&H(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],L=M.width,N=M.height;let F=n.COLOR_BUFFER_BIT;const X=[],ae=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(M),fe=M.isWebGLMultipleRenderTargets===!0;if(fe)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){X.push(n.COLOR_ATTACHMENT0+xe),M.depthBuffer&&X.push(ae);const ye=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ye===!1&&(M.depthBuffer&&(F|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(F|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[xe]),ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ae])),fe){const oe=i.get(g[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,L,N,0,0,L,N,F,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const ye=i.get(g[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function I(M){return Math.min(r.maxSamples,M.samples)}function H(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Y(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function te(M,g){const L=M.colorSpace,N=M.format,F=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ja||L!==zn&&L!==Qt&&(et.getTransfer(L)===rt?o===!1?e.has("EXT_sRGB")===!0&&N===un?(M.format=ja,M.minFilter=Ot,M.generateMipmaps=!1):g=Kh.sRGBToLinear(g):(N!==un||F!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=V,this.setTexture2DArray=ee,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=Me,this.setupRenderTarget=O,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=b,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=z,this.useMultisampledRTT=H}function Ty(n,e,t){const i=t.isWebGL2;function r(s,a=Qt){let o;const l=et.getTransfer(a);if(s===ai)return n.UNSIGNED_BYTE;if(s===Gh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Vh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===s0)return n.BYTE;if(s===o0)return n.SHORT;if(s===bl)return n.UNSIGNED_SHORT;if(s===Hh)return n.INT;if(s===ni)return n.UNSIGNED_INT;if(s===In)return n.FLOAT;if(s===ts)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===a0)return n.ALPHA;if(s===un)return n.RGBA;if(s===l0)return n.LUMINANCE;if(s===c0)return n.LUMINANCE_ALPHA;if(s===Oi)return n.DEPTH_COMPONENT;if(s===yr)return n.DEPTH_STENCIL;if(s===ja)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===u0)return n.RED;if(s===kh)return n.RED_INTEGER;if(s===f0)return n.RG;if(s===Wh)return n.RG_INTEGER;if(s===Xh)return n.RGBA_INTEGER;if(s===Xo||s===qo||s===$o||s===jo)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jc||s===Qc||s===eu||s===tu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Jc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nu||s===iu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===nu)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===iu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ru||s===su||s===ou||s===au||s===lu||s===cu||s===uu||s===fu||s===hu||s===du||s===pu||s===mu||s===gu||s===_u)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ru)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===su)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ou)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===au)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===du)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_u)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yo||s===vu||s===xu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Yo)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===h0||s===Su||s===Mu||s===Eu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Yo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Su)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Eu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ni?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class by extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bs extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ay={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ry=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new fi({extensions:{fragDepth:!0},vertexShader:wy,fragmentShader:Ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hn(new bo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Py extends wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const v=new Cy,p=t.getContextAttributes();let d=null,y=null;const S=[],R=[],U=new qe;let w=null;const P=new Zt;P.layers.enable(1),P.viewport=new vt;const k=new Zt;k.layers.enable(2),k.viewport=new vt;const le=[P,k],x=new by;x.layers.enable(1),x.layers.enable(2);let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=S[J];return he===void 0&&(he=new Sa,S[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=S[J];return he===void 0&&(he=new Sa,S[J]=he),he.getGripSpace()},this.getHand=function(J){let he=S[J];return he===void 0&&(he=new Sa,S[J]=he),he.getHandSpace()};function ie(J){const he=R.indexOf(J.inputSource);if(he===-1)return;const _e=S[he];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",j);for(let J=0;J<S.length;J++){const he=R[J];he!==null&&(R[J]=null,S[J].disconnect(he))}A=null,B=null,v.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",D),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new zi(m.framebufferWidth,m.framebufferHeight,{format:un,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,_e=null,z=null;p.depth&&(z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?yr:Oi,_e=p.stencil?Ni:ni);const se={colorFormat:t.RGBA8,depthFormat:z,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new zi(h.textureWidth,h.textureHeight,{format:un,type:ai,depthTexture:new cd(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Q=e.properties.get(y);Q.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(J){for(let he=0;he<J.removed.length;he++){const _e=J.removed[he],z=R.indexOf(_e);z>=0&&(R[z]=null,S[z].disconnect(_e))}for(let he=0;he<J.added.length;he++){const _e=J.added[he];let z=R.indexOf(_e);if(z===-1){for(let Q=0;Q<S.length;Q++)if(Q>=R.length){R.push(_e),z=Q;break}else if(R[Q]===null){R[Q]=_e,z=Q;break}if(z===-1)break}const se=S[z];se&&se.connect(_e)}}const V=new q,ee=new q;function W(J,he,_e){V.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const z=V.distanceTo(ee),se=he.projectionMatrix.elements,Q=_e.projectionMatrix.elements,pe=se[14]/(se[10]-1),Me=se[14]/(se[10]+1),O=(se[9]+1)/se[5],T=(se[9]-1)/se[5],b=(se[8]-1)/se[0],I=(Q[8]+1)/Q[0],H=pe*b,Y=pe*I,te=z/(-b+I),M=te*-b;he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(M),J.translateZ(te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const g=pe+te,L=Me+te,N=H-M,F=Y+(z-M),X=O*Me/L*g,ae=T*Me/L*g;J.projectionMatrix.makePerspective(N,F,X,ae,g,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ne(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;v.texture!==null&&(J.near=v.depthNear,J.far=v.depthFar),x.near=k.near=P.near=J.near,x.far=k.far=P.far=J.far,(A!==x.near||B!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,B=x.far,P.near=A,P.far=B,k.near=A,k.far=B,P.updateProjectionMatrix(),k.updateProjectionMatrix(),J.updateProjectionMatrix());const he=J.parent,_e=x.cameras;ne(x,he);for(let z=0;z<_e.length;z++)ne(_e[z],he);_e.length===2?W(x,P,k):x.projectionMatrix.copy(P.projectionMatrix),ue(J,x,he)};function ue(J,he,_e){_e===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ya*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null};let ce=null;function Se(J,he){if(u=he.getViewerPose(c||a),_=he,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let z=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,z=!0);for(let Q=0;Q<_e.length;Q++){const pe=_e[Q];let Me=null;if(m!==null)Me=m.getViewport(pe);else{const T=f.getViewSubImage(h,pe);Me=T.viewport,Q===0&&(e.setRenderTargetTextures(y,T.colorTexture,h.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(y))}let O=le[Q];O===void 0&&(O=new Zt,O.layers.enable(Q),O.viewport=new vt,le[Q]=O),O.matrix.fromArray(pe.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(pe.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Me.x,Me.y,Me.width,Me.height),Q===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),z===!0&&x.cameras.push(O)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const Q=f.getDepthInformation(_e[0]);Q&&Q.isValid&&Q.texture&&v.init(e,Q,r.renderState)}}for(let _e=0;_e<S.length;_e++){const z=R[_e],se=S[_e];z!==null&&se!==void 0&&se.update(z,he,c||a)}v.render(e,x),ce&&ce(J,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Ce=new ad;Ce.setAnimationLoop(Se),this.setAnimationLoop=function(J){ce=J},this.dispose=function(){}}}function Ly(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,rd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,S,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,R)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Bt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Bt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dy(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,S){const R=S.program;i.uniformBlockBinding(y,R)}function c(y,S){let R=r[y.id];R===void 0&&(_(y),R=u(y),r[y.id]=R,y.addEventListener("dispose",p));const U=S.program;i.updateUBOMapping(y,U);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const S=f();y.__bindingPointIndex=S;const R=n.createBuffer(),U=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,U,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,R),R}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=r[y.id],R=y.uniforms,U=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,P=R.length;w<P;w++){const k=Array.isArray(R[w])?R[w]:[R[w]];for(let le=0,x=k.length;le<x;le++){const A=k[le];if(m(A,w,le,U)===!0){const B=A.__offset,ie=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let j=0;j<ie.length;j++){const V=ie[j],ee=v(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+D,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,D),D+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,S,R,U){const w=y.value,P=S+"_"+R;if(U[P]===void 0)return typeof w=="number"||typeof w=="boolean"?U[P]=w:U[P]=w.clone(),!0;{const k=U[P];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return U[P]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function _(y){const S=y.uniforms;let R=0;const U=16;for(let P=0,k=S.length;P<k;P++){const le=Array.isArray(S[P])?S[P]:[S[P]];for(let x=0,A=le.length;x<A;x++){const B=le[x],ie=Array.isArray(B.value)?B.value:[B.value];for(let D=0,j=ie.length;D<j;D++){const V=ie[D],ee=v(V),W=R%U;W!==0&&U-W<ee.boundary&&(R+=U-W),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=ee.storage}}}const w=R%U;return w>0&&(R+=U-w),y.__size=R,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const R=a.indexOf(S.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class md{constructor(e={}){const{canvas:t=T0(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const S=this;let R=!1,U=0,w=0,P=null,k=-1,le=null;const x=new vt,A=new vt;let B=null;const ie=new je(0);let D=0,j=t.width,V=t.height,ee=1,W=null,ne=null;const ue=new vt(0,0,j,V),ce=new vt(0,0,j,V);let Se=!1;const Ce=new Cl;let J=!1,he=!1,_e=null;const z=new ht,se=new qe,Q=new q,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return P===null?ee:1}let O=i;function T(E,G){for(let K=0;K<E.length;K++){const Z=E[K],$=t.getContext(Z,G);if($!==null)return $}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){const G=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&G.shift(),O=T(G,E),O===null)throw T(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let b,I,H,Y,te,M,g,L,N,F,X,ae,re,fe,xe,ye,oe,ze,Oe,Ue,Ae,Te,Re,He;function Qe(){b=new zM(O),I=new UM(O,b,e),b.init(I),Te=new Ty(O,b,I),H=new Ey(O,b,I),Y=new VM(O),te=new ly,M=new yy(O,b,H,te,I,Te,Y),g=new NM(S),L=new BM(S),N=new K0(O,I),Re=new LM(O,b,N,I),F=new HM(O,N,Y,Re),X=new qM(O,F,N,Y),Oe=new XM(O,I,M),ye=new IM(te),ae=new ay(S,g,L,b,I,Re,ye),re=new Ly(S,te),fe=new uy,xe=new gy(b,I),ze=new PM(S,g,L,H,X,h,l),oe=new My(S,X,I),He=new Dy(O,Y,I,H),Ue=new DM(O,b,Y,I),Ae=new GM(O,b,Y,I),Y.programs=ae.programs,S.capabilities=I,S.extensions=b,S.properties=te,S.renderLists=fe,S.shadowMap=oe,S.state=H,S.info=Y}Qe();const Xe=new Py(S,O);this.xr=Xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=b.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=b.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(j,V,!1))},this.getSize=function(E){return E.set(j,V)},this.setSize=function(E,G,K=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,V=G,t.width=Math.floor(E*ee),t.height=Math.floor(G*ee),K===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(j*ee,V*ee).floor()},this.setDrawingBufferSize=function(E,G,K){j=E,V=G,ee=K,t.width=Math.floor(E*K),t.height=Math.floor(G*K),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,G,K,Z){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,G,K,Z),H.viewport(x.copy(ue).multiplyScalar(ee).floor())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,G,K,Z){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,G,K,Z),H.scissor(A.copy(ce).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){H.setScissorTest(Se=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(E=!0,G=!0,K=!0){let Z=0;if(E){let $=!1;if(P!==null){const Ee=P.texture.format;$=Ee===Xh||Ee===Wh||Ee===kh}if($){const Ee=P.texture.type,we=Ee===ai||Ee===ni||Ee===bl||Ee===Ni||Ee===Gh||Ee===Vh,Le=ze.getClearColor(),Ie=ze.getClearAlpha(),Ve=Le.r,Fe=Le.g,Be=Le.b;we?(m[0]=Ve,m[1]=Fe,m[2]=Be,m[3]=Ie,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=Ve,_[1]=Fe,_[2]=Be,_[3]=Ie,O.clearBufferiv(O.COLOR,0,_))}else Z|=O.COLOR_BUFFER_BIT}G&&(Z|=O.DEPTH_BUFFER_BIT),K&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",me,!1),fe.dispose(),xe.dispose(),te.dispose(),g.dispose(),L.dispose(),X.dispose(),Re.dispose(),He.dispose(),ae.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",$t),Xe.removeEventListener("sessionend",it),_e&&(_e.dispose(),_e=null),Rt.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Y.autoReset,G=oe.enabled,K=oe.autoUpdate,Z=oe.needsUpdate,$=oe.type;Qe(),Y.autoReset=E,oe.enabled=G,oe.autoUpdate=K,oe.needsUpdate=Z,oe.type=$}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ge(E){const G=E.target;G.removeEventListener("dispose",ge),be(G)}function be(E){Pe(E),te.remove(E)}function Pe(E){const G=te.get(E).programs;G!==void 0&&(G.forEach(function(K){ae.releaseProgram(K)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,K,Z,$,Ee){G===null&&(G=pe);const we=$.isMesh&&$.matrixWorld.determinant()<0,Le=_d(E,G,K,Z,$);H.setMaterial(Z,we);let Ie=K.index,Ve=1;if(Z.wireframe===!0){if(Ie=F.getWireframeAttribute(K),Ie===void 0)return;Ve=2}const Fe=K.drawRange,Be=K.attributes.position;let ct=Fe.start*Ve,Vt=(Fe.start+Fe.count)*Ve;Ee!==null&&(ct=Math.max(ct,Ee.start*Ve),Vt=Math.min(Vt,(Ee.start+Ee.count)*Ve)),Ie!==null?(ct=Math.max(ct,0),Vt=Math.min(Vt,Ie.count)):Be!=null&&(ct=Math.max(ct,0),Vt=Math.min(Vt,Be.count));const gt=Vt-ct;if(gt<0||gt===1/0)return;Re.setup($,Z,Le,K,Ie);let yn,at=Ue;if(Ie!==null&&(yn=N.get(Ie),at=Ae,at.setIndex(yn)),$.isMesh)Z.wireframe===!0?(H.setLineWidth(Z.wireframeLinewidth*Me()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if($.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),H.setLineWidth(ke*Me()),$.isLineSegments?at.setMode(O.LINES):$.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else $.isPoints?at.setMode(O.POINTS):$.isSprite&&at.setMode(O.TRIANGLES);if($.isBatchedMesh)at.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)at.renderInstances(ct,gt,$.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,wo=Math.min(K.instanceCount,ke);at.renderInstances(ct,gt,wo)}else at.render(ct,gt)};function Ze(E,G,K){E.transparent===!0&&E.side===Un&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,cs(E,G,K),E.side=ui,E.needsUpdate=!0,cs(E,G,K),E.side=Un):cs(E,G,K)}this.compile=function(E,G,K=null){K===null&&(K=E),p=xe.get(K),p.init(),y.push(p),K.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),E!==K&&E.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(S._useLegacyLights);const Z=new Set;return E.traverse(function($){const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){const Le=Ee[we];Ze(Le,K,$),Z.add(Le)}else Ze(Ee,K,$),Z.add(Ee)}),y.pop(),p=null,Z},this.compileAsync=function(E,G,K=null){const Z=this.compile(E,G,K);return new Promise($=>{function Ee(){if(Z.forEach(function(we){te.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){$(E);return}setTimeout(Ee,10)}b.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let nt=null;function xt(E){nt&&nt(E)}function $t(){Rt.stop()}function it(){Rt.start()}const Rt=new ad;Rt.setAnimationLoop(xt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(E){nt=E,Xe.setAnimationLoop(E),E===null?Rt.stop():Rt.start()},Xe.addEventListener("sessionstart",$t),Xe.addEventListener("sessionend",it),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(G),G=Xe.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,G,P),p=xe.get(E,y.length),p.init(),y.push(p),z.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ce.setFromProjectionMatrix(z),he=this.localClippingEnabled,J=ye.init(this.clippingPlanes,he),v=fe.get(E,d.length),v.init(),d.push(v),pn(E,G,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(W,ne),this.info.render.frame++,J===!0&&ye.beginShadows();const K=p.state.shadowsArray;if(oe.render(K,E,G),J===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1)&&ze.render(v,E),p.setupLights(S._useLegacyLights),G.isArrayCamera){const Z=G.cameras;for(let $=0,Ee=Z.length;$<Ee;$++){const we=Z[$];Il(v,E,we,we.viewport)}}else Il(v,E,G);P!==null&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(S,E,G),Re.resetDefaultState(),k=-1,le=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function pn(E,G,K,Z){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ce.intersectsSprite(E)){Z&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);const we=X.update(E),Le=E.material;Le.visible&&v.push(E,we,Le,K,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ce.intersectsObject(E))){const we=X.update(E),Le=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Q.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Q.copy(we.boundingSphere.center)),Q.applyMatrix4(E.matrixWorld).applyMatrix4(z)),Array.isArray(Le)){const Ie=we.groups;for(let Ve=0,Fe=Ie.length;Ve<Fe;Ve++){const Be=Ie[Ve],ct=Le[Be.materialIndex];ct&&ct.visible&&v.push(E,we,ct,K,Q.z,Be)}}else Le.visible&&v.push(E,we,Le,K,Q.z,null)}}const Ee=E.children;for(let we=0,Le=Ee.length;we<Le;we++)pn(Ee[we],G,K,Z)}function Il(E,G,K,Z){const $=E.opaque,Ee=E.transmissive,we=E.transparent;p.setupLightsView(K),J===!0&&ye.setGlobalState(S.clippingPlanes,K),Ee.length>0&&gd($,Ee,G,K),Z&&H.viewport(x.copy(Z)),$.length>0&&ls($,G,K),Ee.length>0&&ls(Ee,G,K),we.length>0&&ls(we,G,K),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function gd(E,G,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Ee=I.isWebGL2;_e===null&&(_e=new zi(1,1,{generateMipmaps:!0,type:b.has("EXT_color_buffer_half_float")?ts:ai,minFilter:Di,samples:Ee?4:0})),S.getDrawingBufferSize(se),Ee?_e.setSize(se.x,se.y):_e.setSize(Ka(se.x),Ka(se.y));const we=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor(ie),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear();const Le=S.toneMapping;S.toneMapping=oi,ls(E,K,Z),M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e);let Ie=!1;for(let Ve=0,Fe=G.length;Ve<Fe;Ve++){const Be=G[Ve],ct=Be.object,Vt=Be.geometry,gt=Be.material,yn=Be.group;if(gt.side===Un&&ct.layers.test(Z.layers)){const at=gt.side;gt.side=Bt,gt.needsUpdate=!0,Nl(ct,K,Z,Vt,gt,yn),gt.side=at,gt.needsUpdate=!0,Ie=!0}}Ie===!0&&(M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e)),S.setRenderTarget(we),S.setClearColor(ie,D),S.toneMapping=Le}function ls(E,G,K){const Z=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Ee=E.length;$<Ee;$++){const we=E[$],Le=we.object,Ie=we.geometry,Ve=Z===null?we.material:Z,Fe=we.group;Le.layers.test(K.layers)&&Nl(Le,G,K,Ie,Ve,Fe)}}function Nl(E,G,K,Z,$,Ee){E.onBeforeRender(S,G,K,Z,$,Ee),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(S,G,K,Z,E,Ee),$.transparent===!0&&$.side===Un&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,S.renderBufferDirect(K,G,Z,$,E,Ee),$.side=ui,$.needsUpdate=!0,S.renderBufferDirect(K,G,Z,$,E,Ee),$.side=Un):S.renderBufferDirect(K,G,Z,$,E,Ee),E.onAfterRender(S,G,K,Z,$,Ee)}function cs(E,G,K){G.isScene!==!0&&(G=pe);const Z=te.get(E),$=p.state.lights,Ee=p.state.shadowsArray,we=$.state.version,Le=ae.getParameters(E,$.state,Ee,G,K),Ie=ae.getProgramCacheKey(Le);let Ve=Z.programs;Z.environment=E.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(E.isMeshStandardMaterial?L:g).get(E.envMap||Z.environment),Ve===void 0&&(E.addEventListener("dispose",ge),Ve=new Map,Z.programs=Ve);let Fe=Ve.get(Ie);if(Fe!==void 0){if(Z.currentProgram===Fe&&Z.lightsStateVersion===we)return Fl(E,Le),Fe}else Le.uniforms=ae.getUniforms(E),E.onBuild(K,Le,S),E.onBeforeCompile(Le,S),Fe=ae.acquireProgram(Le,Ie),Ve.set(Ie,Fe),Z.uniforms=Le.uniforms;const Be=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=ye.uniform),Fl(E,Le),Z.needsLights=xd(E),Z.lightsStateVersion=we,Z.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=Fe,Z.uniformsList=null,Fe}function Ol(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Fl(E,G){const K=te.get(E);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function _d(E,G,K,Z,$){G.isScene!==!0&&(G=pe),M.resetTextureUnits();const Ee=G.fog,we=Z.isMeshStandardMaterial?G.environment:null,Le=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:zn,Ie=(Z.isMeshStandardMaterial?L:g).get(Z.envMap||we),Ve=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Be=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,Vt=!!K.morphAttributes.color;let gt=oi;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=S.toneMapping);const yn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,at=yn!==void 0?yn.length:0,ke=te.get(Z),wo=p.state.lights;if(J===!0&&(he===!0||E!==le)){const jt=E===le&&Z.id===k;ye.setState(Z,E,jt)}let lt=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==wo.state.version||ke.outputColorSpace!==Le||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||ke.envMap!==Ie||Z.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ye.numPlanes||ke.numIntersection!==ye.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Fe||ke.morphTargets!==Be||ke.morphNormals!==ct||ke.morphColors!==Vt||ke.toneMapping!==gt||I.isWebGL2===!0&&ke.morphTargetsCount!==at)&&(lt=!0):(lt=!0,ke.__version=Z.version);let hi=ke.currentProgram;lt===!0&&(hi=cs(Z,G,$));let Bl=!1,Pr=!1,Ro=!1;const yt=hi.getUniforms(),di=ke.uniforms;if(H.useProgram(hi.program)&&(Bl=!0,Pr=!0,Ro=!0),Z.id!==k&&(k=Z.id,Pr=!0),Bl||le!==E){yt.setValue(O,"projectionMatrix",E.projectionMatrix),yt.setValue(O,"viewMatrix",E.matrixWorldInverse);const jt=yt.map.cameraPosition;jt!==void 0&&jt.setValue(O,Q.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&yt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),le!==E&&(le=E,Pr=!0,Ro=!0)}if($.isSkinnedMesh){yt.setOptional(O,$,"bindMatrix"),yt.setOptional(O,$,"bindMatrixInverse");const jt=$.skeleton;jt&&(I.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),yt.setValue(O,"boneTexture",jt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(yt.setOptional(O,$,"batchingTexture"),yt.setValue(O,"batchingTexture",$._matricesTexture,M));const Co=K.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0&&I.isWebGL2===!0)&&Oe.update($,K,hi),(Pr||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,yt.setValue(O,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(di.envMap.value=Ie,di.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Pr&&(yt.setValue(O,"toneMappingExposure",S.toneMappingExposure),ke.needsLights&&vd(di,Ro),Ee&&Z.fog===!0&&re.refreshFogUniforms(di,Ee),re.refreshMaterialUniforms(di,Z,ee,V,_e),Xs.upload(O,Ol(ke),di,M)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Xs.upload(O,Ol(ke),di,M),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&yt.setValue(O,"center",$.center),yt.setValue(O,"modelViewMatrix",$.modelViewMatrix),yt.setValue(O,"normalMatrix",$.normalMatrix),yt.setValue(O,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const jt=Z.uniformsGroups;for(let Po=0,Sd=jt.length;Po<Sd;Po++)if(I.isWebGL2){const zl=jt[Po];He.update(zl,hi),He.bind(zl,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function vd(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function xd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,G,K){te.get(E.texture).__webglTexture=G,te.get(E.depthTexture).__webglTexture=K;const Z=te.get(E);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||b.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const K=te.get(E);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,K=0){P=E,U=G,w=K;let Z=!0,$=null,Ee=!1,we=!1;if(E){const Ie=te.get(E);Ie.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1):Ie.__webglFramebuffer===void 0?M.setupRenderTarget(E):Ie.__hasExternalTextures&&M.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Fe=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[G])?$=Fe[G][K]:$=Fe[G],Ee=!0):I.isWebGL2&&E.samples>0&&M.useMultisampledRTT(E)===!1?$=te.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?$=Fe[K]:$=Fe,x.copy(E.viewport),A.copy(E.scissor),B=E.scissorTest}else x.copy(ue).multiplyScalar(ee).floor(),A.copy(ce).multiplyScalar(ee).floor(),B=Se;if(H.bindFramebuffer(O.FRAMEBUFFER,$)&&I.drawBuffers&&Z&&H.drawBuffers(E,$),H.viewport(x),H.scissor(A),H.setScissorTest(B),Ee){const Ie=te.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,K)}else if(we){const Ie=te.get(E.texture),Ve=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,K||0,Ve)}k=-1},this.readRenderTargetPixels=function(E,G,K,Z,$,Ee,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){H.bindFramebuffer(O.FRAMEBUFFER,Le);try{const Ie=E.texture,Ve=Ie.format,Fe=Ie.type;if(Ve!==un&&Te.convert(Ve)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===ts&&(b.has("EXT_color_buffer_half_float")||I.isWebGL2&&b.has("EXT_color_buffer_float"));if(Fe!==ai&&Te.convert(Fe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===In&&(I.isWebGL2||b.has("OES_texture_float")||b.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-Z&&K>=0&&K<=E.height-$&&O.readPixels(G,K,Z,$,Te.convert(Ve),Te.convert(Fe),Ee)}finally{const Ie=P!==null?te.get(P).__webglFramebuffer:null;H.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,G,K=0){const Z=Math.pow(2,-K),$=Math.floor(G.image.width*Z),Ee=Math.floor(G.image.height*Z);M.setTexture2D(G,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,E.x,E.y,$,Ee),H.unbindTexture()},this.copyTextureToTexture=function(E,G,K,Z=0){const $=G.image.width,Ee=G.image.height,we=Te.convert(K.format),Le=Te.convert(K.type);M.setTexture2D(K,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,K.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Z,E.x,E.y,$,Ee,we,Le,G.image.data):G.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Z,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Z,E.x,E.y,we,Le,G.image),Z===0&&K.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(E,G,K,Z,$=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Le=E.max.z-E.min.z+1,Ie=Te.convert(Z.format),Ve=Te.convert(Z.type);let Fe;if(Z.isData3DTexture)M.setTexture3D(Z,0),Fe=O.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)M.setTexture2DArray(Z,0),Fe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment);const Be=O.getParameter(O.UNPACK_ROW_LENGTH),ct=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Vt=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),yn=O.getParameter(O.UNPACK_SKIP_IMAGES),at=K.isCompressedTexture?K.mipmaps[$]:K.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),K.isDataTexture||K.isData3DTexture?O.texSubImage3D(Fe,$,G.x,G.y,G.z,Ee,we,Le,Ie,Ve,at.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Fe,$,G.x,G.y,G.z,Ee,we,Le,Ie,at.data)):O.texSubImage3D(Fe,$,G.x,G.y,G.z,Ee,we,Le,Ie,Ve,at),O.pixelStorei(O.UNPACK_ROW_LENGTH,Be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Vt),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,yn),$===0&&Z.generateMipmaps&&O.generateMipmap(Fe),H.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),H.unbindTexture()},this.resetState=function(){U=0,w=0,P=null,H.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wl?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===yo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Fi:$h}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fi?St:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Uy extends md{}Uy.prototype.isWebGL1Renderer=!0;class Iy extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ll extends En{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new q,u=new qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const m=i+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(o,3)),this.setAttribute("uv",new nn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ny extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oy extends Rr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const pf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Fy{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const By=new Fy;class Dl{constructor(e){this.manager=e!==void 0?e:By,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class zy extends Error{constructor(e,t){super(e),this.response=t}}class Hy extends Dl{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:i,onError:r});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,_=m!==0;let v=0;const p=new ReadableStream({start(d){y();function y(){f.read().then(({done:S,value:R})=>{if(S)d.close();else{v+=R.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let w=0,P=u.length;w<P;w++){const k=u[w];k.onProgress&&k.onProgress(U)}d.enqueue(R),y()}})}}});return new Response(p)}else throw new zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{pf.add(e,c);const u=Pn[e];delete Pn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ul extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Gy extends Ul{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ma=new ht,mf=new q,gf=new q;class Vy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ky extends Vy{constructor(){super(new ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wy extends Ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xy extends Ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);class qy extends Dl{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new Hy(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function t(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const _=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(_,u,v))return!1;return!0}function i(c,u,f){for(let h=0,m=c.length;h<m;h++)if(c[h]!==u.getUint8(f+h))return!1;return!0}function r(c){const u=new DataView(c),f=u.getUint32(80,!0);let h,m,_,v=!1,p,d,y,S,R;for(let A=0;A<70;A++)u.getUint32(A,!1)==1129270351&&u.getUint8(A+4)==82&&u.getUint8(A+5)==61&&(v=!0,p=new Float32Array(f*3*3),d=u.getUint8(A+6)/255,y=u.getUint8(A+7)/255,S=u.getUint8(A+8)/255,R=u.getUint8(A+9)/255);const U=84,w=12*4+2,P=new En,k=new Float32Array(f*3*3),le=new Float32Array(f*3*3),x=new je;for(let A=0;A<f;A++){const B=U+A*w,ie=u.getFloat32(B,!0),D=u.getFloat32(B+4,!0),j=u.getFloat32(B+8,!0);if(v){const V=u.getUint16(B+48,!0);V&32768?(h=d,m=y,_=S):(h=(V&31)/31,m=(V>>5&31)/31,_=(V>>10&31)/31)}for(let V=1;V<=3;V++){const ee=B+V*12,W=A*3*3+(V-1)*3;k[W]=u.getFloat32(ee,!0),k[W+1]=u.getFloat32(ee+4,!0),k[W+2]=u.getFloat32(ee+8,!0),le[W]=ie,le[W+1]=D,le[W+2]=j,v&&(x.set(h,m,_).convertSRGBToLinear(),p[W]=x.r,p[W+1]=x.g,p[W+2]=x.b)}}return P.setAttribute("position",new Xt(k,3)),P.setAttribute("normal",new Xt(le,3)),v&&(P.setAttribute("color",new Xt(p,3)),P.hasColors=!0,P.alpha=R),P}function s(c){const u=new En,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let _=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+v+v+v,"g"),d=new RegExp("normal"+v+v+v,"g"),y=[],S=[],R=[],U=new q;let w,P=0,k=0,le=0;for(;(w=f.exec(c))!==null;){k=le;const x=w[0],A=(w=m.exec(x))!==null?w[1]:"";for(R.push(A);(w=h.exec(x))!==null;){let D=0,j=0;const V=w[0];for(;(w=d.exec(V))!==null;)U.x=parseFloat(w[1]),U.y=parseFloat(w[2]),U.z=parseFloat(w[3]),j++;for(;(w=p.exec(V))!==null;)y.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),S.push(U.x,U.y,U.z),D++,le++;j!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),D!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const B=k,ie=le-k;u.userData.groupNames=R,u.addGroup(B,ie,P),P++}return u.setAttribute("position",new nn(y,3)),u.setAttribute("normal",new nn(S,3)),u}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?r(l):s(a(e))}}const $y={class:"absolute font-Default",id:"three"},jy={__name:"background",setup(n){const e=new Iy,t=new qy,i=`#${Array.from({length:6},()=>(16*Math.random()|0).toString(16)).join("")}`;t.load("./assets/model/murdock.stl",d=>{const y=new Ny({color:i,roughness:0}),S=new hn(d,y);S.geometry.center(),S.scale.set(.0015,.0015,.0015),S.rotation.x=-Math.PI/2,S.rotation.z=-Math.PI/2,e.add(S)});const s=(d=>{const y=[];for(let S=0;S<d;S++){const R=new hn(new Ll(.05,3),new Oy);R.position.set((Math.random()-.5)*128,(Math.random()-.5)*128,(Math.random()-.5)*128),R.rotation.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14),e.add(R),y.push(R)}return y})(3e3),a=new Xy(4210752),o=new Gy(4210752),l=new Wy(16777215,5);l.position.set(5,0,2),[a,o,l].forEach(d=>e.add(d));const c=new md;c.setSize(window.innerWidth,window.innerHeight),dl(()=>{document.getElementById("three").appendChild(c.domElement)});const u=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3);u.position.z=5;let f=!0,h=!0;function m(){u.rotation.x+=1e-5,u.rotation.z-=.001,h?(u.rotation.x+=1e-4,u.rotation.x>.5&&(h=!1)):(u.rotation.x-=1e-4,u.rotation.x<-.5&&(h=!0)),f?(u.position.z+=.001,u.position.z>7&&(f=!1)):(u.position.z-=.001,u.position.z<2&&(f=!0))}function _(){s.forEach(d=>{d.position.x+=.01,d.position.y+=.01,d.position.x>64&&(d.position.x=(Math.random()-.5)*128),d.position.y>64&&(d.position.y=(Math.random()-.5)*128)})}function v(){requestAnimationFrame(v),m(),_(),c.render(e,u)}v();function p(){const d=window.innerWidth,y=window.innerHeight;c.setPixelRatio(window.devicePixelRatio),c.setSize(d,y),u.aspect=d/y,u.updateProjectionMatrix()}return p(),window.addEventListener("resize",p),(d,y)=>(_o(),gl("div",$y))}},Yy={class:"relative h-screen overflow-hidden overscroll-none bg-black"},Ky={__name:"App",setup(n){return(e,t)=>{const i=Yf("router-view");return _o(),gl("div",Yy,[Ke(I_),Ke(jy),Ke(i),Ke(Tv)])}}},Zy="modulepreload",Jy=function(n){return"/2024/05/"+n},_f={},Ei=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Jy(l),l in _f)return;_f[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Zy,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},yi="OtaProject2024 | ",Qy=[{path:"/",component:()=>Ei(()=>import("./home-Bb5c9SFv.js"),__vite__mapDeps([0,1])),meta:{title:yi+"home"}},{path:"/about",component:()=>Ei(()=>import("./about-DcxAKBUO.js"),__vite__mapDeps([2,3,1])),meta:{title:yi+"about"}},{path:"/members",component:()=>Ei(()=>import("./members-Bavx7qCb.js"),[]),meta:{title:yi+"members"}},{path:"/activities",component:()=>Ei(()=>import("./activities-NXKR4BgP.js"),[]),meta:{title:yi+"active"}},{path:"/contents",component:()=>Ei(()=>import("./contents-gngPVEXU.js"),__vite__mapDeps([4,3])),meta:{title:yi+"content"}},{path:"/:pathMatch(.*)*",component:()=>Ei(()=>import("./notFound-B3bWx5cy.js"),__vite__mapDeps([5,1])),meta:{title:yi+"404 not found"}},{path:"/:pathMatch(.*)",component:()=>Ei(()=>import("./notFound-B3bWx5cy.js"),__vite__mapDeps([5,1])),meta:{title:yi+"404 not found"}}],Ja=new Jg({history:pg(),routes:Qy}),eT="OtaProject2024";Ja.afterEach((n,e)=>{document.title=n.meta.title||eT});qm(Ky).use(Ja).use(iv,{config:{id:"G-WN7JS0WP86"}},Ja).mount("#app");export{Xy as A,Wy as D,ln as F,Gy as H,Ny as M,Zt as P,Iy as S,vr as T,md as W,om as a,de as b,gl as c,Dn as d,Ke as e,Ai as f,sr as g,qy as h,hn as i,dl as j,rh as k,Yf as l,At as n,_o as o,tT as r,Id as t,or as v,Lt as w};