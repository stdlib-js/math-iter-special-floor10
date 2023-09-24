// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFloor10=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,_=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,_,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var A=String.fromCharCode,E=isNaN,O=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,f,l,p,s;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(c(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function k(r){var t,e,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var N,U=Object.prototype,B=U.toString,G=U.__defineGetter__,I=U.__defineSetter__,C=U.__lookupGetter__,L=U.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=U,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var M=N;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=X()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[D]=e:delete r[D],n}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return H(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",H),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!H(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var sr,yr=/^\s*function\s*([^(]*)/i;R(pr,"REGEXP",yr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=sr;function vr(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vr);function gr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(vr,"isObjectLikeArray",dr);var _r="function"==typeof $||"object"==typeof lr||"function"==typeof fr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t};function wr(r){return"function"===_r(r)}var hr=/./,mr="function"==typeof Object.defineProperty?Object.defineProperty:null;var jr,Ar=Object.defineProperty,Er=Object.prototype,Or=Er.toString,Fr=Er.__defineGetter__,Sr=Er.__defineSetter__,Tr=Er.__lookupGetter__,Pr=Er.__lookupSetter__;jr=function(){try{return mr({},"x",{}),!0}catch(r){return!1}}()?Ar:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Or.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Or.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Tr.call(r,t)||Pr.call(r,t)?(n=r.__proto__,r.__proto__=Er,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Fr&&Fr.call(r,t,e.get),a&&Sr&&Sr.call(r,t,e.set),r};var xr=jr;function Vr(r,t,e){xr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function kr(r){return"boolean"==typeof r}var Nr=Boolean.prototype.toString;var Ur=X();function Br(r){return"object"==typeof r&&(r instanceof K||(Ur?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Gr(r){return kr(r)||Br(r)}function Ir(){return new Function("return this;")()}Vr(Gr,"isPrimitive",kr),Vr(Gr,"isObject",Br);var Cr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Mr="object"==typeof global?global:null,Rr="object"==typeof globalThis?globalThis:null;var $r=function(r){if(arguments.length){if(!kr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ir()}if(Rr)return Rr;if(Cr)return Cr;if(Lr)return Lr;if(Mr)return Mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Hr=$r.document&&$r.document.childNodes,Wr=Int8Array;function Xr(){return/^\s*function\s*([^(]*)/i}var Zr=/^\s*function\s*([^(]*)/i;function Yr(r){return null!==r&&"object"==typeof r}Vr(Xr,"REGEXP",Zr);var qr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Yr);function zr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Zr.exec(n.toString()))return t[1]}return Yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Vr(Yr,"isObjectLikeArray",qr);var Dr="function"==typeof hr||"object"==typeof Wr||"function"==typeof Hr?function(r){return zr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?zr(r).toLowerCase():t};function Jr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Dr(r)}(r.next)}var Kr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Qr,rt=Object.defineProperty,tt=Object.prototype,et=tt.toString,nt=tt.__defineGetter__,ot=tt.__defineSetter__,it=tt.__lookupGetter__,at=tt.__lookupSetter__;Qr=function(){try{return Kr({},"x",{}),!0}catch(r){return!1}}()?rt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===et.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===et.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(it.call(r,t)||at.call(r,t)?(n=r.__proto__,r.__proto__=tt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&nt&&nt.call(r,t,e.get),a&&ot&&ot.call(r,t,e.set),r};var ut=Qr;function ct(r,t,e){ut(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ft(r){return"number"==typeof r}var lt=Number,pt=lt.prototype.toString;var st=X();function yt(r){return"object"==typeof r&&(r instanceof lt||(st?function(r){try{return pt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function bt(r){return ft(r)||yt(r)}ct(bt,"isPrimitive",ft),ct(bt,"isObject",yt);var vt="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var dt=/./,gt="function"==typeof Object.defineProperty?Object.defineProperty:null;var _t,wt=Object.defineProperty,ht=Object.prototype,mt=ht.toString,jt=ht.__defineGetter__,At=ht.__defineSetter__,Et=ht.__lookupGetter__,Ot=ht.__lookupSetter__;_t=function(){try{return gt({},"x",{}),!0}catch(r){return!1}}()?wt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===mt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===mt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Et.call(r,t)||Ot.call(r,t)?(n=r.__proto__,r.__proto__=ht,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jt&&jt.call(r,t,e.get),a&&At&&At.call(r,t,e.set),r};var Ft=_t;function St(r,t,e){Ft(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Tt(r){return"boolean"==typeof r}var Pt=Boolean.prototype.toString;var xt=X();function Vt(r){return"object"==typeof r&&(r instanceof K||(xt?function(r){try{return Pt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function kt(r){return Tt(r)||Vt(r)}function Nt(){return new Function("return this;")()}St(kt,"isPrimitive",Tt),St(kt,"isObject",Vt);var Ut="object"==typeof self?self:null,Bt="object"==typeof window?window:null,Gt="object"==typeof global?global:null,It="object"==typeof globalThis?globalThis:null;var Ct=function(r){if(arguments.length){if(!Tt(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Nt()}if(It)return It;if(Ut)return Ut;if(Bt)return Bt;if(Gt)return Gt;throw new Error("unexpected error. Unable to resolve global object.")}(),Lt=Ct.document&&Ct.document.childNodes,Mt=Int8Array;function Rt(){return/^\s*function\s*([^(]*)/i}var $t=/^\s*function\s*([^(]*)/i;function Ht(r){return null!==r&&"object"==typeof r}St(Rt,"REGEXP",$t);var Wt=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ht);function Xt(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=$t.exec(n.toString()))return t[1]}return Ht(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}St(Ht,"isObjectLikeArray",Wt);var Zt="function"==typeof dt||"object"==typeof Mt||"function"==typeof Lt?function(r){return Xt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Xt(r).toLowerCase():t};function Yt(r){return"function"===Zt(r)}var qt=Object,zt=/./,Dt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Jt,Kt=Object.defineProperty,Qt=Object.prototype,re=Qt.toString,te=Qt.__defineGetter__,ee=Qt.__defineSetter__,ne=Qt.__lookupGetter__,oe=Qt.__lookupSetter__;Jt=function(){try{return Dt({},"x",{}),!0}catch(r){return!1}}()?Kt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===re.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===re.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ne.call(r,t)||oe.call(r,t)?(n=r.__proto__,r.__proto__=Qt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&te&&te.call(r,t,e.get),a&&ee&&ee.call(r,t,e.set),r};var ie=Jt;function ae(r,t,e){ie(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ue(r){return"boolean"==typeof r}var ce=Boolean.prototype.toString;var fe=X();function le(r){return"object"==typeof r&&(r instanceof K||(fe?function(r){try{return ce.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function pe(r){return ue(r)||le(r)}function se(){return new Function("return this;")()}ae(pe,"isPrimitive",ue),ae(pe,"isObject",le);var ye="object"==typeof self?self:null,be="object"==typeof window?window:null,ve="object"==typeof global?global:null,de="object"==typeof globalThis?globalThis:null;var ge=function(r){if(arguments.length){if(!ue(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return se()}if(de)return de;if(ye)return ye;if(be)return be;if(ve)return ve;throw new Error("unexpected error. Unable to resolve global object.")}(),_e=ge.document&&ge.document.childNodes,we=Int8Array;function he(){return/^\s*function\s*([^(]*)/i}var me=/^\s*function\s*([^(]*)/i;function je(r){return null!==r&&"object"==typeof r}ae(he,"REGEXP",me);var Ae=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(je);function Ee(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=me.exec(n.toString()))return t[1]}return je(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ae(je,"isObjectLikeArray",Ae);var Oe="function"==typeof zt||"object"==typeof we||"function"==typeof _e?function(r){return Ee(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ee(r).toLowerCase():t};var Fe,Se,Te=Object.getPrototypeOf;Se=Object.getPrototypeOf,Fe="function"===Oe(Se)?Te:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Pe=Fe;var xe=Object.prototype;function Ve(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(t=function(r){return null==r?null:(r=qt(r),Pe(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&Yt(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&Yt(t.isPrototypeOf)&&(t===xe||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function ke(r,t){return Ve(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ne(r,t,e){var n,o,i,a;if(!Jr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=ke(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),vt&&wr(r[vt])&&R(o,vt,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:ft(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Ne(r[vt](),t,n)}}function Ue(r){return r!=r}var Be=Number.POSITIVE_INFINITY,Ge=lt.NEGATIVE_INFINITY;function Ie(r){return r===Be||r===Ge}var Ce=Math.floor;function Le(r){return function(r){return Ce(r)===r}(r/2)}function Me(r){return Le(r>0?r-1:r+1)}var Re=Math.floor;var $e=Math.sqrt;function He(r){return Math.abs(r)}var We="function"==typeof Object.defineProperty?Object.defineProperty:null;var Xe,Ze=Object.defineProperty,Ye=Object.prototype,qe=Ye.toString,ze=Ye.__defineGetter__,De=Ye.__defineSetter__,Je=Ye.__lookupGetter__,Ke=Ye.__lookupSetter__;Xe=function(){try{return We({},"x",{}),!0}catch(r){return!1}}()?Ze:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===qe.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===qe.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Je.call(r,t)||Ke.call(r,t)?(n=r.__proto__,r.__proto__=Ye,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ze&&ze.call(r,t,e.get),a&&De&&De.call(r,t,e.set),r};var Qe=Xe;var rn="function"==typeof Uint32Array;var tn="function"==typeof Uint32Array?Uint32Array:null;var en,nn="function"==typeof Uint32Array?Uint32Array:void 0;en=function(){var r,t;if("function"!=typeof tn)return!1;try{r=function(r){return rn&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new tn(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nn:function(){throw new Error("not implemented")};var on=en,an="function"==typeof Float64Array;var un="function"==typeof Float64Array?Float64Array:null;var cn,fn="function"==typeof Float64Array?Float64Array:void 0;cn=function(){var r,t;if("function"!=typeof un)return!1;try{r=function(r){return an&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new un([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fn:function(){throw new Error("not implemented")};var ln=cn,pn="function"==typeof Uint8Array;var sn="function"==typeof Uint8Array?Uint8Array:null;var yn,bn="function"==typeof Uint8Array?Uint8Array:void 0;yn=function(){var r,t;if("function"!=typeof sn)return!1;try{r=function(r){return pn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new sn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var vn=yn,dn="function"==typeof Uint16Array;var gn="function"==typeof Uint16Array?Uint16Array:null;var _n,wn="function"==typeof Uint16Array?Uint16Array:void 0;_n=function(){var r,t;if("function"!=typeof gn)return!1;try{r=function(r){return dn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new gn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wn:function(){throw new Error("not implemented")};var hn,mn={uint16:_n,uint8:vn};(hn=new mn.uint16(1))[0]=4660;var jn,An,En=52===new mn.uint8(hn.buffer)[0];!0===En?(jn=1,An=0):(jn=0,An=1);var On={HIGH:jn,LOW:An},Fn=new ln(1),Sn=new on(Fn.buffer),Tn=On.HIGH,Pn=On.LOW;function xn(r,t,e,n){return Fn[0]=r,t[n]=Sn[Tn],t[n+e]=Sn[Pn],t}function Vn(r){return xn(r,[0,0],1,0)}!function(r,t,e){Qe(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Vn,"assign",xn);var kn="function"==typeof Float64Array;var Nn="function"==typeof Float64Array?Float64Array:null;var Un,Bn="function"==typeof Float64Array?Float64Array:void 0;Un=function(){var r,t;if("function"!=typeof Nn)return!1;try{r=function(r){return kn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Nn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Bn:function(){throw new Error("not implemented")};var Gn=!0===En?0:1,In=new Un(1),Cn=new on(In.buffer);function Ln(r,t){return In[0]=r,Cn[Gn]=t>>>0,In[0]}function Mn(r){return 0|r}var Rn=2147483647,$n="function"==typeof Float64Array;var Hn="function"==typeof Float64Array?Float64Array:null;var Wn,Xn="function"==typeof Float64Array?Float64Array:void 0;Wn=function(){var r,t;if("function"!=typeof Hn)return!1;try{r=function(r){return $n&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Hn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xn:function(){throw new Error("not implemented")};var Zn=!0===En?1:0,Yn=new Wn(1),qn=new on(Yn.buffer);function zn(r){return Yn[0]=r,qn[Zn]}var Dn="function"==typeof Float64Array;var Jn="function"==typeof Float64Array?Float64Array:null;var Kn,Qn,ro,to="function"==typeof Float64Array?Float64Array:void 0;Kn=function(){var r,t;if("function"!=typeof Jn)return!1;try{r=function(r){return Dn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Jn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?to:function(){throw new Error("not implemented")},!0===En?(Qn=1,ro=0):(Qn=0,ro=1);var eo={HIGH:Qn,LOW:ro},no=new Kn(1),oo=new on(no.buffer),io=eo.HIGH,ao=eo.LOW;function uo(r,t){return oo[io]=r,oo[ao]=t,no[0]}var co=[0,0];function fo(r,t){var e,n;return Vn.assign(r,co,1,0),e=co[0],e&=Rn,n=zn(t),uo(e|=n&=2147483648,co[1])}var lo="function"==typeof Float64Array;var po="function"==typeof Float64Array?Float64Array:null;var so,yo="function"==typeof Float64Array?Float64Array:void 0;so=function(){var r,t;if("function"!=typeof po)return!1;try{r=function(r){return lo&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new po([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yo:function(){throw new Error("not implemented")};var bo=!0===En?1:0,vo=new so(1),go=new on(vo.buffer);function _o(r,t){return vo[0]=r,go[bo]=t>>>0,vo[0]}var wo=1023;var ho=1048576,mo=[1,1.5],jo=[0,.5849624872207642],Ao=[0,1.350039202129749e-8];var Eo="function"==typeof Object.defineProperty?Object.defineProperty:null;var Oo,Fo=Object.defineProperty,So=Object.prototype,To=So.toString,Po=So.__defineGetter__,xo=So.__defineSetter__,Vo=So.__lookupGetter__,ko=So.__lookupSetter__;Oo=function(){try{return Eo({},"x",{}),!0}catch(r){return!1}}()?Fo:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===To.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===To.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Vo.call(r,t)||ko.call(r,t)?(n=r.__proto__,r.__proto__=So,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Po&&Po.call(r,t,e.get),a&&xo&&xo.call(r,t,e.set),r};var No=Oo;function Uo(r,t,e,n){return Ue(r)||Ie(r)?(t[n]=r,t[n+e]=0,t):0!==r&&He(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){No(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return Uo(r,[0,0],1,0)}),"assign",Uo);var Bo=[0,0],Go=[0,0];function Io(r,t){var e,n;return 0===t||0===r||Ue(r)||Ie(r)?r:(Uo(r,Bo,1,0),t+=Bo[1],t+=function(r){var t=zn(r);return(t=(2146435072&t)>>>20)-wo|0}(r=Bo[0]),t<-1074?fo(0,r):t>1023?r<0?Ge:Be:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Vn.assign(r,Go,1,0),e=Go[0],e&=2148532223,n*uo(e|=t+wo<<20,Go[1])))}var Co=1048575;var Lo=1048576;var Mo=1083179008,Ro=1e300,$o=1e-300,Ho=[0,0],Wo=[0,0];function Xo(r,t){var e,n,o,i,a,u,c,f,l,p,s,y,b,v;if(Ue(r)||Ue(t))return NaN;if(Vn.assign(t,Ho,1,0),a=Ho[0],0===Ho[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return $e(r);if(-.5===t)return 1/$e(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Ie(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:He(r)<1==(t===Be)?0:Be}(r,t)}if(Vn.assign(r,Ho,1,0),i=Ho[0],0===Ho[1]){if(0===i)return function(r,t){return t===Ge?Be:t===Be?0:t>0?Me(t)?r:0:Me(t)?fo(Be,r):Be}(r,t);if(1===r)return 1;if(-1===r&&Me(t))return-1;if(Ie(r))return r===Ge?Xo(-0,-t):t<0?0:Be}if(r<0&&!1===function(r){return Re(r)===r}(t))return(r-r)/(r-r);if(o=He(r),e=i&Rn|0,n=a&Rn|0,c=a>>>31|0,u=(u=i>>>31|0)&&Me(t)?-1:1,n>1105199104){if(n>1139802112)return function(r,t){return(zn(r)&Rn)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===c?u*Ro*Ro:u*$o*$o;if(e>1072693248)return 0===c?u*Ro*Ro:u*$o*$o;s=function(r,t){var e,n,o,i,a,u;return e=(a=1.9259629911266175e-8*(o=t-1)-o*o*(0===(u=o)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Ln(n=(i=1.4426950216293335*o)+a,0))-i),r[0]=n,r[1]=e,r}(Wo,o)}else s=function(r,t,e){var n,o,i,a,u,c,f,l,p,s,y,b,v,d,g,_,w,h,m,j,A;return h=0,e<ho&&(h-=53,e=zn(t*=9007199254740992)),h+=(e>>20)-wo|0,e=1072693248|(m=1048575&e|0),m<=235662?j=0:m<767610?j=1:(j=0,h+=1,e-=ho),a=Ln(o=(_=(t=_o(t,e))-(f=mo[j]))*(w=1/(t+f)),0),n=524288+(e>>1|536870912),c=_o(0,n+=j<<18),g=(i=o*o)*i*(0===(A=i)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=Ln(c=3+(i=a*a)+(g+=(u=w*(_-a*c-a*(t-(c-f))))*(a+o)),0),v=(y=-7.028461650952758e-9*(p=Ln(p=(_=a*c)+(w=u*c+(g-(c-3-i))*o),0))+.9617966939259756*(w-(p-_))+Ao[j])-((b=Ln(b=(s=.9617967009544373*p)+y+(l=jo[j])+(d=h),0))-d-l-s),r[0]=b,r[1]=v,r}(Wo,o,e);if(y=(p=(t-(f=Ln(t,0)))*s[0]+t*s[1])+(l=f*s[0]),Vn.assign(y,Ho,1,0),b=Mn(Ho[0]),v=Mn(Ho[1]),b>=Mo){if(0!=(b-Mo|v))return u*Ro*Ro;if(p+8008566259537294e-32>y-l)return u*Ro*Ro}else if((b&Rn)>=1083231232){if(0!=(b-3230714880|v))return u*$o*$o;if(p<=y-l)return u*$o*$o}return y=function(r,t,e){var n,o,i,a,u,c,f,l,p,s;return p=((l=r&Rn|0)>>20)-wo|0,f=0,l>1071644672&&(o=_o(0,((f=r+(Lo>>p+1)>>>0)&~(Co>>(p=((f&Rn)>>20)-wo|0)))>>>0),f=(f&Co|Lo)>>20-p>>>0,r<0&&(f=-f),t-=o),r=Mn(r=zn(c=1-((c=(i=.6931471824645996*(o=Ln(o=e+t,0)))+(a=.6931471805599453*(e-(o-t))+-1.904654299957768e-9*o))*(n=c-(o=c*c)*(0===(s=o)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-i))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Io(c,f):_o(c,r)}(b,l,p),u*y}var Zo=Math.floor,Yo=Math.ceil;var qo=1048575;var zo=.4342944818781689;function Do(r){var t,e,n,o,i,a,u;return Ue(r)||r<0?NaN:0===r?Ge:(i=0,(e=zn(r))<1048576&&(i-=54,e=zn(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-wo|0,a=i+=(o=(e&=1048575)+614244&1048576|0)>>20|0,n=function(r){var t,e,n,o,i,a,u,c,f,l,p;return o=zn(r),i=r-1,(qo&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=qo)-398458|0,p=440401-o|0,e=(f=(u=(a=i/(2+i))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),n=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=n+e,(l|=p)>0?a*((t=.5*i*i)+c)-t:a*(c-i))}(r=_o(r,e|1072693248^o)),u=3694239077158931e-28*a+25082946711645275e-27*((r-=1)+n),(u+=(r-(t=Ln(r,0))+n)*zo+t*zo)+.30102999566361177*a))}function Jo(r){var t,e;return Ue(r)||Ie(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,e=Do(r),(e=1===t?Zo(e):Yo(e))<=-324?0*t:e>308?Ge:t*Xo(10,e))}return function(r){return Ne(r,Jo)}}));
//# sourceMappingURL=index.js.map
