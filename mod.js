// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,g=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,g,"e"),n=s.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var A=String.fromCharCode,E=isNaN,O=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,f,l,p,s;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(c(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function k(r){var t,e,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var N,U=Object.prototype,B=U.toString,G=U.__defineGetter__,I=U.__defineSetter__,C=U.__lookupGetter__,L=U.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=U,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var M=N;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=X()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[D]=e:delete r[D],n}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return H(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",H),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!H(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,pr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var yr,vr=/^\s*function\s*([^(]*)/i;R(sr,"REGEXP",vr),yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=yr;function dr(r){return null!==r&&"object"==typeof r}var _r=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(dr);function gr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=vr.exec(n.toString()))return t[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(dr,"isObjectLikeArray",_r);var wr="function"==typeof $||"object"==typeof pr||"function"==typeof lr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t};function hr(r){return"function"===wr(r)}var mr=/./,jr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ar,Er=Object.defineProperty,Or=Object.prototype,Fr=Or.toString,Sr=Or.__defineGetter__,Tr=Or.__defineSetter__,Pr=Or.__lookupGetter__,xr=Or.__lookupSetter__;Ar=function(){try{return jr({},"x",{}),!0}catch(r){return!1}}()?Er:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Fr.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Fr.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Pr.call(r,t)||xr.call(r,t)?(n=r.__proto__,r.__proto__=Or,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Sr&&Sr.call(r,t,e.get),a&&Tr&&Tr.call(r,t,e.set),r};var Vr=Ar;function kr(r,t,e){Vr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Nr(r){return"boolean"==typeof r}var Ur=Boolean.prototype.toString;var Br=X();function Gr(r){return"object"==typeof r&&(r instanceof K||(Br?function(r){try{return Ur.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Ir(r){return Nr(r)||Gr(r)}function Cr(){return new Function("return this;")()}kr(Ir,"isPrimitive",Nr),kr(Ir,"isObject",Gr);var Lr="object"==typeof self?self:null,Mr="object"==typeof window?window:null,Rr="object"==typeof ar?ar:null,$r="object"==typeof globalThis?globalThis:null;var Hr=function(r){if(arguments.length){if(!Nr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Cr()}if($r)return $r;if(Lr)return Lr;if(Mr)return Mr;if(Rr)return Rr;throw new Error("unexpected error. Unable to resolve global object.")}(),Wr=Hr.document&&Hr.document.childNodes,Xr=Int8Array;function Zr(){return/^\s*function\s*([^(]*)/i}var Yr=/^\s*function\s*([^(]*)/i;function qr(r){return null!==r&&"object"==typeof r}kr(Zr,"REGEXP",Yr);var zr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(qr);function Dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Yr.exec(n.toString()))return t[1]}return qr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}kr(qr,"isObjectLikeArray",zr);var Jr="function"==typeof mr||"object"==typeof Xr||"function"==typeof Wr?function(r){return Dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Dr(r).toLowerCase():t};function Kr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Jr(r)}(r.next)}var Qr="function"==typeof Object.defineProperty?Object.defineProperty:null;var rt,tt=Object.defineProperty,et=Object.prototype,nt=et.toString,ot=et.__defineGetter__,it=et.__defineSetter__,at=et.__lookupGetter__,ut=et.__lookupSetter__;rt=function(){try{return Qr({},"x",{}),!0}catch(r){return!1}}()?tt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===nt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===nt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(at.call(r,t)||ut.call(r,t)?(n=r.__proto__,r.__proto__=et,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ot&&ot.call(r,t,e.get),a&&it&&it.call(r,t,e.set),r};var ct=rt;function ft(r,t,e){ct(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function lt(r){return"number"==typeof r}var pt=Number,st=pt.prototype.toString;var yt=X();function vt(r){return"object"==typeof r&&(r instanceof pt||(yt?function(r){try{return st.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function bt(r){return lt(r)||vt(r)}ft(bt,"isPrimitive",lt),ft(bt,"isObject",vt);var dt="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var _t=/./,gt="function"==typeof Object.defineProperty?Object.defineProperty:null;var wt,ht=Object.defineProperty,mt=Object.prototype,jt=mt.toString,At=mt.__defineGetter__,Et=mt.__defineSetter__,Ot=mt.__lookupGetter__,Ft=mt.__lookupSetter__;wt=function(){try{return gt({},"x",{}),!0}catch(r){return!1}}()?ht:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===jt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===jt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ot.call(r,t)||Ft.call(r,t)?(n=r.__proto__,r.__proto__=mt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&At&&At.call(r,t,e.get),a&&Et&&Et.call(r,t,e.set),r};var St=wt;function Tt(r,t,e){St(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Pt(r){return"boolean"==typeof r}var xt=Boolean.prototype.toString;var Vt=X();function kt(r){return"object"==typeof r&&(r instanceof K||(Vt?function(r){try{return xt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Nt(r){return Pt(r)||kt(r)}function Ut(){return new Function("return this;")()}Tt(Nt,"isPrimitive",Pt),Tt(Nt,"isObject",kt);var Bt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,It="object"==typeof ar?ar:null,Ct="object"==typeof globalThis?globalThis:null;var Lt=function(r){if(arguments.length){if(!Pt(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ut()}if(Ct)return Ct;if(Bt)return Bt;if(Gt)return Gt;if(It)return It;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Lt.document&&Lt.document.childNodes,Rt=Int8Array;function $t(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function Wt(r){return null!==r&&"object"==typeof r}Tt($t,"REGEXP",Ht);var Xt=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Wt);function Zt(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ht.exec(n.toString()))return t[1]}return Wt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Tt(Wt,"isObjectLikeArray",Xt);var Yt="function"==typeof _t||"object"==typeof Rt||"function"==typeof Mt?function(r){return Zt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Zt(r).toLowerCase():t};function qt(r){return"function"===Yt(r)}var zt=Object,Dt=/./,Jt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Kt,Qt=Object.defineProperty,re=Object.prototype,te=re.toString,ee=re.__defineGetter__,ne=re.__defineSetter__,oe=re.__lookupGetter__,ie=re.__lookupSetter__;Kt=function(){try{return Jt({},"x",{}),!0}catch(r){return!1}}()?Qt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===te.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===te.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(oe.call(r,t)||ie.call(r,t)?(n=r.__proto__,r.__proto__=re,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ee&&ee.call(r,t,e.get),a&&ne&&ne.call(r,t,e.set),r};var ae=Kt;function ue(r,t,e){ae(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ce(r){return"boolean"==typeof r}var fe=Boolean.prototype.toString;var le=X();function pe(r){return"object"==typeof r&&(r instanceof K||(le?function(r){try{return fe.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function se(r){return ce(r)||pe(r)}function ye(){return new Function("return this;")()}ue(se,"isPrimitive",ce),ue(se,"isObject",pe);var ve="object"==typeof self?self:null,be="object"==typeof window?window:null,de="object"==typeof ar?ar:null,_e="object"==typeof globalThis?globalThis:null;var ge=function(r){if(arguments.length){if(!ce(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ye()}if(_e)return _e;if(ve)return ve;if(be)return be;if(de)return de;throw new Error("unexpected error. Unable to resolve global object.")}(),we=ge.document&&ge.document.childNodes,he=Int8Array;function me(){return/^\s*function\s*([^(]*)/i}var je=/^\s*function\s*([^(]*)/i;function Ae(r){return null!==r&&"object"==typeof r}ue(me,"REGEXP",je);var Ee=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ae);function Oe(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=je.exec(n.toString()))return t[1]}return Ae(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ue(Ae,"isObjectLikeArray",Ee);var Fe="function"==typeof Dt||"object"==typeof he||"function"==typeof we?function(r){return Oe(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Oe(r).toLowerCase():t};var Se,Te,Pe=Object.getPrototypeOf;Te=Object.getPrototypeOf,Se="function"===Fe(Te)?Pe:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var xe=Se;var Ve=Object.prototype;function ke(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(t=function(r){return null==r?null:(r=zt(r),xe(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&qt(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&qt(t.isPrototypeOf)&&(t===Ve||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Ne(r,t){return ke(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ue(r,t,e){var n,o,i,a;if(!Kr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!hr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Ne(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),dt&&hr(r[dt])&&R(o,dt,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:lt(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Ue(r[dt](),t,n)}}function Be(r){return r!=r}var Ge=Number.POSITIVE_INFINITY,Ie=pt.NEGATIVE_INFINITY;function Ce(r){return r===Ge||r===Ie}var Le=Math.floor;function Me(r){return function(r){return Le(r)===r}(r/2)}function Re(r){return Me(r>0?r-1:r+1)}var $e=Math.floor;var He=Math.sqrt;function We(r){return Math.abs(r)}var Xe="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ze,Ye=Object.defineProperty,qe=Object.prototype,ze=qe.toString,De=qe.__defineGetter__,Je=qe.__defineSetter__,Ke=qe.__lookupGetter__,Qe=qe.__lookupSetter__;Ze=function(){try{return Xe({},"x",{}),!0}catch(r){return!1}}()?Ye:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ze.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ze.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ke.call(r,t)||Qe.call(r,t)?(n=r.__proto__,r.__proto__=qe,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&De&&De.call(r,t,e.get),a&&Je&&Je.call(r,t,e.set),r};var rn=Ze;var tn="function"==typeof Uint32Array;var en="function"==typeof Uint32Array?Uint32Array:null;var nn,on="function"==typeof Uint32Array?Uint32Array:void 0;nn=function(){var r,t;if("function"!=typeof en)return!1;try{r=function(r){return tn&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new en(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var an=nn,un="function"==typeof Float64Array;var cn="function"==typeof Float64Array?Float64Array:null;var fn,ln="function"==typeof Float64Array?Float64Array:void 0;fn=function(){var r,t;if("function"!=typeof cn)return!1;try{r=function(r){return un&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new cn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var pn=fn,sn="function"==typeof Uint8Array;var yn="function"==typeof Uint8Array?Uint8Array:null;var vn,bn="function"==typeof Uint8Array?Uint8Array:void 0;vn=function(){var r,t;if("function"!=typeof yn)return!1;try{r=function(r){return sn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new yn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var dn=vn,_n="function"==typeof Uint16Array;var gn="function"==typeof Uint16Array?Uint16Array:null;var wn,hn="function"==typeof Uint16Array?Uint16Array:void 0;wn=function(){var r,t;if("function"!=typeof gn)return!1;try{r=function(r){return _n&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new gn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hn:function(){throw new Error("not implemented")};var mn,jn={uint16:wn,uint8:dn};(mn=new jn.uint16(1))[0]=4660;var An,En,On=52===new jn.uint8(mn.buffer)[0];!0===On?(An=1,En=0):(An=0,En=1);var Fn={HIGH:An,LOW:En},Sn=new pn(1),Tn=new an(Sn.buffer),Pn=Fn.HIGH,xn=Fn.LOW;function Vn(r,t,e,n){return Sn[0]=r,t[n]=Tn[Pn],t[n+e]=Tn[xn],t}function kn(r){return Vn(r,[0,0],1,0)}!function(r,t,e){rn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(kn,"assign",Vn);var Nn="function"==typeof Float64Array;var Un="function"==typeof Float64Array?Float64Array:null;var Bn,Gn="function"==typeof Float64Array?Float64Array:void 0;Bn=function(){var r,t;if("function"!=typeof Un)return!1;try{r=function(r){return Nn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Un([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gn:function(){throw new Error("not implemented")};var In=!0===On?0:1,Cn=new Bn(1),Ln=new an(Cn.buffer);function Mn(r,t){return Cn[0]=r,Ln[In]=t>>>0,Cn[0]}function Rn(r){return 0|r}var $n="function"==typeof Float64Array;var Hn="function"==typeof Float64Array?Float64Array:null;var Wn,Xn="function"==typeof Float64Array?Float64Array:void 0;Wn=function(){var r,t;if("function"!=typeof Hn)return!1;try{r=function(r){return $n&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Hn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xn:function(){throw new Error("not implemented")};var Zn=!0===On?1:0,Yn=new Wn(1),qn=new an(Yn.buffer);function zn(r){return Yn[0]=r,qn[Zn]}var Dn="function"==typeof Float64Array;var Jn="function"==typeof Float64Array?Float64Array:null;var Kn,Qn,ro,to="function"==typeof Float64Array?Float64Array:void 0;Kn=function(){var r,t;if("function"!=typeof Jn)return!1;try{r=function(r){return Dn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Jn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?to:function(){throw new Error("not implemented")},!0===On?(Qn=1,ro=0):(Qn=0,ro=1);var eo={HIGH:Qn,LOW:ro},no=new Kn(1),oo=new an(no.buffer),io=eo.HIGH,ao=eo.LOW;function uo(r,t){return oo[io]=r,oo[ao]=t,no[0]}var co=[0,0];function fo(r,t){var e,n;return kn.assign(r,co,1,0),e=co[0],e&=2147483647,n=zn(t),uo(e|=n&=2147483648,co[1])}var lo="function"==typeof Float64Array;var po="function"==typeof Float64Array?Float64Array:null;var so,yo="function"==typeof Float64Array?Float64Array:void 0;so=function(){var r,t;if("function"!=typeof po)return!1;try{r=function(r){return lo&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new po([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yo:function(){throw new Error("not implemented")};var vo=!0===On?1:0,bo=new so(1),_o=new an(bo.buffer);function go(r,t){return bo[0]=r,_o[vo]=t>>>0,bo[0]}var wo=[1,1.5],ho=[0,.5849624872207642],mo=[0,1.350039202129749e-8];var jo="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ao,Eo=Object.defineProperty,Oo=Object.prototype,Fo=Oo.toString,So=Oo.__defineGetter__,To=Oo.__defineSetter__,Po=Oo.__lookupGetter__,xo=Oo.__lookupSetter__;Ao=function(){try{return jo({},"x",{}),!0}catch(r){return!1}}()?Eo:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Fo.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Fo.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Po.call(r,t)||xo.call(r,t)?(n=r.__proto__,r.__proto__=Oo,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&So&&So.call(r,t,e.get),a&&To&&To.call(r,t,e.set),r};var Vo=Ao;function ko(r,t,e,n){return Be(r)||Ce(r)?(t[n]=r,t[n+e]=0,t):0!==r&&We(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){Vo(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return ko(r,[0,0],1,0)}),"assign",ko);var No=[0,0],Uo=[0,0];function Bo(r,t){var e,n;return 0===t||0===r||Be(r)||Ce(r)?r:(ko(r,No,1,0),t+=No[1],t+=function(r){var t=zn(r);return(t=(2146435072&t)>>>20)-1023|0}(r=No[0]),t<-1074?fo(0,r):t>1023?r<0?Ie:Ge:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,kn.assign(r,Uo,1,0),e=Uo[0],e&=2148532223,n*uo(e|=t+1023<<20,Uo[1])))}var Go=1e300,Io=1e-300,Co=[0,0],Lo=[0,0];function Mo(r,t){var e,n,o,i,a,u,c,f,l,p,s,y,v,b;if(Be(r)||Be(t))return NaN;if(kn.assign(t,Co,1,0),a=Co[0],0===Co[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return He(r);if(-.5===t)return 1/He(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Ce(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:We(r)<1==(t===Ge)?0:Ge}(r,t)}if(kn.assign(r,Co,1,0),i=Co[0],0===Co[1]){if(0===i)return function(r,t){return t===Ie?Ge:t===Ge?0:t>0?Re(t)?r:0:Re(t)?fo(Ge,r):Ge}(r,t);if(1===r)return 1;if(-1===r&&Re(t))return-1;if(Ce(r))return r===Ie?Mo(-0,-t):t<0?0:Ge}if(r<0&&!1===function(r){return $e(r)===r}(t))return(r-r)/(r-r);if(o=We(r),e=2147483647&i|0,n=2147483647&a|0,c=a>>>31|0,u=(u=i>>>31|0)&&Re(t)?-1:1,n>1105199104){if(n>1139802112)return function(r,t){return(2147483647&zn(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===c?u*Go*Go:u*Io*Io;if(e>1072693248)return 0===c?u*Go*Go:u*Io*Io;s=function(r,t){var e,n,o,i,a,u;return e=(a=1.9259629911266175e-8*(o=t-1)-o*o*(0===(u=o)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Mn(n=(i=1.4426950216293335*o)+a,0))-i),r[0]=n,r[1]=e,r}(Lo,o)}else s=function(r,t,e){var n,o,i,a,u,c,f,l,p,s,y,v,b,d,_,g,w,h,m,j,A;return h=0,e<1048576&&(h-=53,e=zn(t*=9007199254740992)),h+=(e>>20)-1023|0,e=1072693248|(m=1048575&e|0),m<=235662?j=0:m<767610?j=1:(j=0,h+=1,e-=1048576),a=Mn(o=(g=(t=go(t,e))-(f=wo[j]))*(w=1/(t+f)),0),n=524288+(e>>1|536870912),c=go(0,n+=j<<18),_=(i=o*o)*i*(0===(A=i)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=Mn(c=3+(i=a*a)+(_+=(u=w*(g-a*c-a*(t-(c-f))))*(a+o)),0),b=(y=-7.028461650952758e-9*(p=Mn(p=(g=a*c)+(w=u*c+(_-(c-3-i))*o),0))+.9617966939259756*(w-(p-g))+mo[j])-((v=Mn(v=(s=.9617967009544373*p)+y+(l=ho[j])+(d=h),0))-d-l-s),r[0]=v,r[1]=b,r}(Lo,o,e);if(y=(p=(t-(f=Mn(t,0)))*s[0]+t*s[1])+(l=f*s[0]),kn.assign(y,Co,1,0),v=Rn(Co[0]),b=Rn(Co[1]),v>=1083179008){if(0!=(v-1083179008|b))return u*Go*Go;if(p+8008566259537294e-32>y-l)return u*Go*Go}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|b))return u*Io*Io;if(p<=y-l)return u*Io*Io}return y=function(r,t,e){var n,o,i,a,u,c,f,l,p,s,y;return s=((p=2147483647&r|0)>>20)-1023|0,l=0,p>1071644672&&(n=((l=r+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-s>>>0,r<0&&(l=-l),t-=i=go(0,n)),r=Rn(r=zn(f=1-((f=(a=.6931471824645996*(i=Mn(i=e+t,0)))+(u=.6931471805599453*(e-(i-t))+-1.904654299957768e-9*i))*(o=f-(i=f*f)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((c=u-(f-a))+f*c)-f))),(r+=l<<20>>>0)>>20<=0?Bo(f,l):go(f,r)}(v,l,p),u*y}var Ro=Math.floor,$o=Math.ceil;function Ho(r){var t,e,n,o,i,a,u;return Be(r)||r<0?NaN:0===r?Ie:(i=0,(e=zn(r))<1048576&&(i-=54,e=zn(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,a=i+=(o=(e&=1048575)+614244&1048576|0)>>20|0,n=function(r){var t,e,n,o,i,a,u,c,f,l,p;return i=r-1,(1048575&2+(o=zn(r)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=1048575)-398458|0,p=440401-o|0,e=(f=(u=(a=i/(2+i))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),n=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=n+e,(l|=p)>0?a*((t=.5*i*i)+c)-t:a*(c-i))}(r=go(r,e|1072693248^o)),u=3694239077158931e-28*a+25082946711645275e-27*((r-=1)+n),(u+=.4342944818781689*(r-(t=Mn(r,0))+n)+.4342944818781689*t)+.30102999566361177*a))}function Wo(r){var t,e;return Be(r)||Ce(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,e=Ho(r),(e=1===t?Ro(e):$o(e))<=-324?0*t:e>308?Ie:t*Mo(10,e))}function Xo(r){return Ue(r,Wo)}export{Xo as default};
//# sourceMappingURL=mod.js.map
