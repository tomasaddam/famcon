// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


    /*!
     * jQuery JavaScript Library v1.4.4
     * http://jquery.com/
     *
     * Copyright 2010, John Resig
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://jquery.org/license
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     * Copyright 2010, The Dojo Foundation
     * Released under the MIT, BSD, and GPL Licenses.
     *
     * Date: Thu Nov 11 19:04:53 2010 -0500
     */
    (function(E,B){function ka(a,b,d){if(d===B&&a.nodeType===1){d=a.getAttribute("data-"+b);if(typeof d==="string"){try{d=d==="true"?true:d==="false"?false:d==="null"?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=B}return d}function U(){return false}function ca(){return true}function la(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ka(a){var b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.data(this,this.nodeType?"events":"__events__");if(typeof h==="function")h=
        h.events;if(!(a.liveFired===this||!h||!h.live||a.button&&a.type==="click")){if(a.namespace)A=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");a.liveFired=this;var J=h.live.slice(0);for(k=0;k<J.length;k++){h=J[k];h.origType.replace(X,"")===a.type?f.push(h.selector):J.splice(k--,1)}f=c(a.target).closest(f,a.currentTarget);o=0;for(x=f.length;o<x;o++){r=f[o];for(k=0;k<J.length;k++){h=J[k];if(r.selector===h.selector&&(!A||A.test(h.namespace))){l=r.elem;e=null;if(h.preType==="mouseenter"||
        h.preType==="mouseleave"){a.type=h.preType;e=c(a.relatedTarget).closest(h.selector)[0]}if(!e||e!==l)C.push({elem:l,handleObj:h,level:r.level})}}}o=0;for(x=C.length;o<x;o++){f=C[o];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;A=f.handleObj.origHandler.apply(f.elem,arguments);if(A===false||a.isPropagationStopped()){d=f.level;if(A===false)b=false;if(a.isImmediatePropagationStopped())break}}return b}}function Y(a,b){return(a&&a!=="*"?a+".":"")+b.replace(La,
        "`").replace(Ma,"&")}function ma(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b==="string"){var e=c.grep(a,function(f){return f.nodeType===1});if(Na.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)>=0===d})}function na(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,
        e);if(e=e&&e.events){delete f.handle;f.events={};for(var h in e)for(var l in e[h])c.event.add(this,h,e[h][l],e[h][l].data)}}})}function Oa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function oa(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return e;c.each(b==="width"?Pa:Qa,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);if(d==="margin")e+=parseFloat(c.css(a,
        "margin"+this))||0;else e-=parseFloat(c.css(a,"border"+this+"Width"))||0});return e}function da(a,b,d,e){if(c.isArray(b)&&b.length)c.each(b,function(f,h){d||Ra.test(a)?e(a,h):da(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e)});else if(!d&&b!=null&&typeof b==="object")c.isEmptyObject(b)?e(a,""):c.each(b,function(f,h){da(a+"["+f+"]",h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(pa.concat.apply([],pa.slice(0,b)),function(){d[this]=a});return d}function qa(a){if(!ea[a]){var b=c("<"+
        a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d==="")d="block";ea[a]=d}return ea[a]}function fa(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var t=E.document,c=function(){function a(){if(!b.isReady){try{t.documentElement.doScroll("left")}catch(j){setTimeout(a,1);return}b.ready()}}var b=function(j,s){return new b.fn.init(j,s)},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        C=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};b.fn=b.prototype={init:function(j,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                s){var v,z,H;if(!j)return this;if(j.nodeType){this.context=this[0]=j;this.length=1;return this}if(j==="body"&&!s&&t.body){this.context=t;this[0]=t.body;this.selector="body";this.length=1;return this}if(typeof j==="string")if((v=h.exec(j))&&(v[1]||!s))if(v[1]){H=s?s.ownerDocument||s:t;if(z=A.exec(j))if(b.isPlainObject(s)){j=[t.createElement(z[1])];b.fn.attr.call(j,s,true)}else j=[H.createElement(z[1])];else{z=b.buildFragment([v[1]],[H]);j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,
        j)}else{if((z=t.getElementById(v[2]))&&z.parentNode){if(z.id!==v[2])return f.find(j);this.length=1;this[0]=z}this.context=t;this.selector=j;return this}else if(!s&&!x.test(j)){this.selector=j;this.context=t;j=t.getElementsByTagName(j);return b.merge(this,j)}else return!s||s.jquery?(s||f).find(j):b(s).find(j);else if(b.isFunction(j))return f.ready(j);if(j.selector!==B){this.selector=j.selector;this.context=j.context}return b.makeArray(j,this)},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},
        toArray:function(){return N.call(this,0)},get:function(j){return j==null?this.toArray():j<0?this.slice(j)[0]:this[j]},pushStack:function(j,s,v){var z=b();b.isArray(j)?M.apply(z,j):b.merge(z,j);z.prevObject=this;z.context=this.context;if(s==="find")z.selector=this.selector+(this.selector?" ":"")+v;else if(s)z.selector=this.selector+"."+s+"("+v+")";return z},each:function(j,s){return b.each(this,j,s)},ready:function(j){b.bindReady();if(b.isReady)j.call(t,b);else q&&q.push(j);return this},eq:function(j){return j===
            -1?this.slice(j):this.slice(j,+j+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(j){return this.pushStack(b.map(this,function(s,v){return j.call(s,v,s)}))},end:function(){return this.prevObject||b(null)},push:M,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;
        if(typeof G==="boolean"){ga=G;G=arguments[1]||{};K=2}if(typeof G!=="object"&&!b.isFunction(G))G={};if(Q===K){G=this;--K}for(;K<Q;K++)if((j=arguments[K])!=null)for(s in j){v=G[s];z=j[s];if(G!==z)if(ga&&z&&(b.isPlainObject(z)||(H=b.isArray(z)))){if(H){H=false;v=v&&b.isArray(v)?v:[]}else v=v&&b.isPlainObject(v)?v:{};G[s]=b.extend(ga,v,z)}else if(z!==B)G[s]=z}return G};b.extend({noConflict:function(j){E.$=e;if(j)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(j){j===true&&b.readyWait--;
        if(!b.readyWait||j!==true&&!b.isReady){if(!t.body)return setTimeout(b.ready,1);b.isReady=true;if(!(j!==true&&--b.readyWait>0))if(q){var s=0,v=q;for(q=null;j=v[s++];)j.call(t,b);b.fn.trigger&&b(t).trigger("ready").unbind("ready")}}},bindReady:function(){if(!p){p=true;if(t.readyState==="complete")return setTimeout(b.ready,1);if(t.addEventListener){t.addEventListener("DOMContentLoaded",u,false);E.addEventListener("load",b.ready,false)}else if(t.attachEvent){t.attachEvent("onreadystatechange",u);E.attachEvent("onload",
        b.ready);var j=false;try{j=E.frameElement==null}catch(s){}t.documentElement.doScroll&&j&&a()}}},isFunction:function(j){return b.type(j)==="function"},isArray:Array.isArray||function(j){return b.type(j)==="array"},isWindow:function(j){return j&&typeof j==="object"&&"setInterval"in j},isNaN:function(j){return j==null||!r.test(j)||isNaN(j)},type:function(j){return j==null?String(j):R[y.call(j)]||"object"},isPlainObject:function(j){if(!j||b.type(j)!=="object"||j.nodeType||b.isWindow(j))return false;if(j.constructor&&
        !F.call(j,"constructor")&&!F.call(j.constructor.prototype,"isPrototypeOf"))return false;for(var s in j);return s===B||F.call(j,s)},isEmptyObject:function(j){for(var s in j)return false;return true},error:function(j){throw j;},parseJSON:function(j){if(typeof j!=="string"||!j)return null;j=b.trim(j);if(C.test(j.replace(J,"@").replace(w,"]").replace(I,"")))return E.JSON&&E.JSON.parse?E.JSON.parse(j):(new Function("return "+j))();else b.error("Invalid JSON: "+j)},noop:function(){},globalEval:function(j){if(j&&
        l.test(j)){var s=t.getElementsByTagName("head")[0]||t.documentElement,v=t.createElement("script");v.type="text/javascript";if(b.support.scriptEval)v.appendChild(t.createTextNode(j));else v.text=j;s.insertBefore(v,s.firstChild);s.removeChild(v)}},nodeName:function(j,s){return j.nodeName&&j.nodeName.toUpperCase()===s.toUpperCase()},each:function(j,s,v){var z,H=0,G=j.length,K=G===B||b.isFunction(j);if(v)if(K)for(z in j){if(s.apply(j[z],v)===false)break}else for(;H<G;){if(s.apply(j[H++],v)===false)break}else if(K)for(z in j){if(s.call(j[z],
        z,j[z])===false)break}else for(v=j[0];H<G&&s.call(v,H,v)!==false;v=j[++H]);return j},trim:O?function(j){return j==null?"":O.call(j)}:function(j){return j==null?"":j.toString().replace(k,"").replace(o,"")},makeArray:function(j,s){var v=s||[];if(j!=null){var z=b.type(j);j.length==null||z==="string"||z==="function"||z==="regexp"||b.isWindow(j)?M.call(v,j):b.merge(v,j)}return v},inArray:function(j,s){if(s.indexOf)return s.indexOf(j);for(var v=0,z=s.length;v<z;v++)if(s[v]===j)return v;return-1},merge:function(j,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      s){var v=j.length,z=0;if(typeof s.length==="number")for(var H=s.length;z<H;z++)j[v++]=s[z];else for(;s[z]!==B;)j[v++]=s[z++];j.length=v;return j},grep:function(j,s,v){var z=[],H;v=!!v;for(var G=0,K=j.length;G<K;G++){H=!!s(j[G],G);v!==H&&z.push(j[G])}return z},map:function(j,s,v){for(var z=[],H,G=0,K=j.length;G<K;G++){H=s(j[G],G,v);if(H!=null)z[z.length]=H}return z.concat.apply([],z)},guid:1,proxy:function(j,s,v){if(arguments.length===2)if(typeof s==="string"){v=j;j=v[s];s=B}else if(s&&!b.isFunction(s)){v=
        s;s=B}if(!s&&j)s=function(){return j.apply(v||this,arguments)};if(j)s.guid=j.guid=j.guid||s.guid||b.guid++;return s},access:function(j,s,v,z,H,G){var K=j.length;if(typeof s==="object"){for(var Q in s)b.access(j,Q,s[Q],z,H,v);return j}if(v!==B){z=!G&&z&&b.isFunction(v);for(Q=0;Q<K;Q++)H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);return j}return K?H(j[0],s):B},now:function(){return(new Date).getTime()},uaMatch:function(j){j=j.toLowerCase();j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf("compatible")<0&&n.exec(j)||
        [];return{browser:j[1]||"",version:j[2]||"0"}},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(j,s){R["[object "+s+"]"]=s.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=m.version}if(b.browser.webkit)b.browser.safari=true;if(D)b.inArray=function(j,s){return D.call(s,j)};if(!/\s/.test("\u00a0")){k=/^[\s\xA0]+/;o=/[\s\xA0]+$/}f=b(t);if(t.addEventListener)u=function(){t.removeEventListener("DOMContentLoaded",u,
        false);b.ready()};else if(t.attachEvent)u=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",u);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=t.documentElement,b=t.createElement("script"),d=t.createElement("div"),e="script"+c.now();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],l=t.createElement("select"),
        k=l.appendChild(t.createElement("option"));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,
        scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};l.disabled=true;c.support.optDisabled=!k.disabled;b.type="text/javascript";try{b.appendChild(t.createTextNode("window."+e+"=1;"))}catch(o){}a.insertBefore(b,a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}try{delete b.test}catch(x){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function r(){c.support.noCloneEvent=
        false;d.detachEvent("onclick",r)});d.cloneNode(true).fireEvent("onclick")}d=t.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=t.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var r=t.createElement("div");r.style.width=r.style.paddingLeft="1px";t.body.appendChild(r);c.boxModel=c.support.boxModel=r.offsetWidth===2;if("zoom"in r.style){r.style.display="inline";r.style.zoom=
        1;c.support.inlineBlockNeedsLayout=r.offsetWidth===2;r.style.display="";r.innerHTML="<div style='width:4px;'></div>";c.support.shrinkWrapBlocks=r.offsetWidth!==2}r.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var A=r.getElementsByTagName("td");c.support.reliableHiddenOffsets=A[0].offsetHeight===0;A[0].style.display="";A[1].style.display="none";c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&A[0].offsetHeight===0;r.innerHTML="";t.body.removeChild(r).style.display=
        "none"});a=function(r){var A=t.createElement("div");r="on"+r;var C=r in A;if(!C){A.setAttribute(r,"return;");C=typeof A[r]==="function"}return C};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=f=h=null}})();var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?ra:a;var e=a.nodeType,f=e?a[c.expando]:null,h=
        c.cache;if(!(e&&!f&&typeof b==="string"&&d===B)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b==="object")if(e)h[f]=c.extend(h[f],b);else c.extend(h,b);else if(e&&!h[f])h[f]={};a=e?h[f]:h;if(d!==B)a[b]=d;return typeof b==="string"?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?ra:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&&c.isEmptyObject(h)&&c.removeData(a)}}else if(d&&c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);
    else if(d)delete f[e];else for(var l in a)delete a[l]}},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});c.fn.extend({data:function(a,b){var d=null;if(typeof a==="undefined"){if(this.length){var e=this[0].attributes,f;d=c.data(this[0]);for(var h=0,l=e.length;h<l;h++){f=e[h].name;if(f.indexOf("data-")===0){f=f.substr(5);ka(this[0],f,d[f])}}}return d}else if(typeof a==="object")return this.each(function(){c.data(this,
        a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(b===B){d=this.triggerHandler("getData"+k[1]+"!",[k[0]]);if(d===B&&this.length){d=c.data(this[0],a);d=ka(this[0],a,d)}return d===B&&k[1]?this.data(k[0]):d}else return this.each(function(){var o=c(this),x=[k[0],b];o.triggerHandler("setData"+k[1]+"!",x);c.data(this,a,b);o.triggerHandler("changeData"+k[1]+"!",x)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=
        c.data(a,b);if(!d)return e||[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift();if(e==="inprogress")e=d.shift();if(e){b==="fx"&&d.unshift("inprogress");e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===B)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
        a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",
        colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(x){var r=c(this);r.addClass(a.call(this,x,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===
        1)if(f.className){for(var h=" "+f.className+" ",l=f.className,k=0,o=b.length;k<o;k++)if(h.indexOf(" "+b[k]+" ")<0)l+=" "+b[k];f.className=c.trim(l)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(o){var x=c(this);x.removeClass(a.call(this,o,x.attr("class")))});if(a&&typeof a==="string"||a===B)for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1&&f.className)if(a){for(var h=(" "+f.className+" ").replace(sa," "),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     l=0,k=b.length;l<k;l++)h=h.replace(" "+b[l]+" "," ");f.className=c.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,f,h.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){k=e?k:!l.hasClass(f);l[k?"addClass":"removeClass"](f)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,
        "__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(sa," ").indexOf(a)>-1)return true;return false},val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,"option")){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,"select")){var e=b.selectedIndex;d=[];var f=b.options;b=b.type==="select-one";
        if(e<0)return null;var h=b?e:0;for(e=b?e+1:f.length;h<e;h++){var l=f[h];if(l.selected&&(c.support.optDisabled?!l.disabled:l.getAttribute("disabled")===null)&&(!l.parentNode.disabled||!c.nodeName(l.parentNode,"optgroup"))){a=c(l).val();if(b)return a;d.push(a)}}return d}if(ta.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Sa,"")}return B}var k=c.isFunction(a);return this.each(function(o){var x=c(this),r=a;if(this.nodeType===1){if(k)r=
        a.call(this,o,x.val());if(r==null)r="";else if(typeof r==="number")r+="";else if(c.isArray(r))r=c.map(r,function(C){return C==null?"":C+""});if(c.isArray(r)&&ta.test(this.type))this.checked=c.inArray(x.val(),r)>=0;else if(c.nodeName(this,"select")){var A=c.makeArray(r);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),A)>=0});if(!A.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},
        attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return B;if(e&&b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==B;b=e&&c.props[b]||b;var h=Ta.test(b);if((b in a||a[b]!==B)&&e&&!h){if(f){b==="type"&&Ua.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");if(d===null)a.nodeType===1&&a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&
            b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&&a.href?0:B;return a[b]}if(!c.support.style&&e&&b==="style"){if(f)a.style.cssText=""+d;return a.style.cssText}f&&a.setAttribute(b,""+d);if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b))return B;a=!c.support.hrefNormalized&&e&&h?a.getAttribute(b,2):a.getAttribute(b);return a===null?B:a}});var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){return a.replace(Xa,"\\$&")},ua={focusin:0,focusout:0};
        c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&&a!==E&&!a.frameElement)a=E;if(d===false)d=U;else if(!d)return;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var l=a.nodeType?"events":"__events__",k=h[l],o=h.handle;if(typeof k==="function"){o=k.handle;k=k.events}else if(!k){a.nodeType||(h[l]=h=function(){});h.events=k={}}if(!o)h.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,
            arguments):B};o.elem=a;b=b.split(" ");for(var x=0,r;l=b[x++];){h=f?c.extend({},f):{handler:d,data:e};if(l.indexOf(".")>-1){r=l.split(".");l=r.shift();h.namespace=r.slice(0).sort().join(".")}else{r=[];h.namespace=""}h.type=l;if(!h.guid)h.guid=d.guid;var A=k[l],C=c.event.special[l]||{};if(!A){A=k[l]=[];if(!C.setup||C.setup.call(a,e,r,o)===false)if(a.addEventListener)a.addEventListener(l,o,false);else a.attachEvent&&a.attachEvent("on"+l,o)}if(C.add){C.add.call(a,h);if(!h.handler.guid)h.handler.guid=
            d.guid}A.push(h);c.event.global[l]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?"events":"__events__",w=c.data(a),I=w&&w[J];if(w&&I){if(typeof I==="function"){w=I;I=I.events}if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(f in I)c.event.remove(a,f+b)}else{for(b=b.split(" ");f=b[l++];){r=f;k=f.indexOf(".")<0;o=[];if(!k){o=f.split(".");f=o.shift();x=RegExp("(^|\\.)"+
            c.map(o.slice(0).sort(),Ya).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(A=I[f])if(d){r=c.event.special[f]||{};for(h=e||0;h<A.length;h++){C=A[h];if(d.guid===C.guid){if(k||x.test(C.namespace)){e==null&&A.splice(h--,1);r.remove&&r.remove.call(a,C)}if(e!=null)break}}if(A.length===0||e!=null&&A.length===1){if(!r.teardown||r.teardown.call(a,o)===false)c.removeEvent(a,f,w.handle);delete I[f]}}else for(h=0;h<A.length;h++){C=A[h];if(k||x.test(C.namespace)){c.event.remove(a,r,C.handler,h);A.splice(h--,1)}}}if(c.isEmptyObject(I)){if(b=
            w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w==="function")c.removeData(a,J);else c.isEmptyObject(w)&&c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf("!")>=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&&c.each(c.cache,function(){this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===
            8)return B;a.result=B;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+f]&&d["on"+f].apply(d,b)===false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&&e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){var l;e=a.target;var k=f.replace(X,""),o=c.nodeName(e,"a")&&k===
            "click",x=c.event.special[k]||{};if((!x._default||x._default.call(d,a)===false)&&!o&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){try{if(e[k]){if(l=e["on"+k])e["on"+k]=null;c.event.triggered=true;e[k]()}}catch(r){}if(l)e["on"+k]=l;c.event.triggered=false}}},handle:function(a){var b,d,e,f;d=[];var h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){e=a.type.split(".");a.type=e.shift();d=e.slice(0).sort();e=RegExp("(^|\\.)"+
            d.join("\\.(?:.*\\.)?")+"(\\.|$)")}a.namespace=a.namespace||d.join(".");f=c.data(this,this.nodeType?"events":"__events__");if(typeof f==="function")f=f.events;d=(f||{})[a.type];if(f&&d){d=d.slice(0);f=0;for(var l=d.length;f<l;f++){var k=d[f];if(b||e.test(k.namespace)){a.handler=k.handler;a.data=k.data;a.handleObj=k;k=k.handler.apply(this,h);if(k!==B){a.result=k;if(k===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||t;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=t.documentElement;d=t.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
                d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(a.which==null&&(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==B)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,
                Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=t.removeEventListener?function(a,b,d){a.removeEventListener&&a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=
            c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ca;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ca;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ca;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
        var va=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},wa=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?wa:va,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?wa:va)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==
            "form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length){a.liveFired=B;return la("submit",this,arguments)}});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){a.liveFired=B;return la("submit",this,arguments)}})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};if(!c.support.changeBubbles){var V,
            xa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(e){return e.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ia.test(d.nodeName)||d.readOnly)){e=c.data(d,"_change_data");f=xa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",f);if(!(e===B||f===e))if(e!=null||f){a.type="change";a.liveFired=
                B;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,"_change_data",xa(a))}},setup:function(){if(this.type===
            "file")return false;for(var a in V)c.event.add(this,a+".specialChange",V[a]);return ia.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ia.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}t.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){ua[b]++===0&&t.addEventListener(a,d,true)},teardown:function(){--ua[b]===
            0&&t.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,e,f){if(typeof d==="object"){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=B}var l=b==="one"?c.proxy(f,function(o){c(this).unbind(o,l);return f.apply(this,arguments)}):f;if(d==="unload"&&b!=="one")this.one(d,e,f);else{h=0;for(var k=this.length;h<k;h++)c.event.add(this[h],d,l,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
            a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=
            1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var ya={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,e,f,h){var l,k=0,o,x,r=h||this.selector;h=h?this:c(this.context);if(typeof d===
            "object"&&!d.preventDefault){for(l in d)h[b](l,e,d[l],r);return this}if(c.isFunction(e)){f=e;e=B}for(d=(d||"").split(" ");(l=d[k++])!=null;){o=X.exec(l);x="";if(o){x=o[0];l=l.replace(X,"")}if(l==="hover")d.push("mouseenter"+x,"mouseleave"+x);else{o=l;if(l==="focus"||l==="blur"){d.push(ya[l]+x);l+=x}else l=(ya[l]||l)+x;if(b==="live"){x=0;for(var A=h.length;x<A;x++)c.event.add(h[x],"live."+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o})}else h.unbind("live."+Y(l,r),f)}}return this}});
        c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length>0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});
        (function(){function a(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1&&!q){y.sizcache=n;y.sizset=p}if(y.nodeName.toLowerCase()===i){F=y;break}y=y[g]}m[p]=F}}}function b(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1){if(!q){y.sizcache=n;y.sizset=p}if(typeof i!=="string"){if(y===i){F=true;break}}else if(k.filter(i,
            [y]).length>0){F=y;break}}y=y[g]}m[p]=F}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;[0,0].sort(function(){l=false;return 0});var k=function(g,i,n,m){n=n||[];var p=i=i||t;if(i.nodeType!==1&&i.nodeType!==9)return[];if(!g||typeof g!=="string")return n;var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;do{d.exec("");if(q=d.exec(R)){R=q[3];D.push(q[1]);if(q[2]){F=q[3];
            break}}}while(q);if(D.length>1&&x.exec(g))if(D.length===2&&o.relative[D[0]])u=L(D[0]+D[1],i);else for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){g=D.shift();if(o.relative[g])g+=D.shift();u=L(g,u)}else{if(!m&&D.length>1&&i.nodeType===9&&!O&&o.match.ID.test(D[0])&&!o.match.ID.test(D[D.length-1])){q=k.find(D.shift(),i,O);i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]}if(i){q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&i.parentNode?i.parentNode:i,O);u=q.expr?k.filter(q.expr,
            q.set):q.set;if(D.length>0)y=C(u);else N=false;for(;D.length;){q=M=D.pop();if(o.relative[M])q=D.pop();else M="";if(q==null)q=i;o.relative[M](y,q,O)}}else y=[]}y||(y=u);y||k.error(M||g);if(f.call(y)==="[object Array]")if(N)if(i&&i.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&k.contains(i,y[g])))n.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&n.push(u[g]);else n.push.apply(n,y);else C(y,n);if(F){k(F,p,n,m);k.uniqueSort(n)}return n};k.uniqueSort=function(g){if(w){h=
            l;g.sort(w);if(h)for(var i=1;i<g.length;i++)g[i]===g[i-1]&&g.splice(i--,1)}return g};k.matches=function(g,i){return k(g,null,null,i)};k.matchesSelector=function(g,i){return k(i,null,null,[g]).length>0};k.find=function(g,i,n){var m;if(!g)return[];for(var p=0,q=o.order.length;p<q;p++){var u,y=o.order[p];if(u=o.leftMatch[y].exec(g)){var F=u[1];u.splice(1,1);if(F.substr(F.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");m=o.find[y](u,i,n);if(m!=null){g=g.replace(o.match[y],"");break}}}}m||(m=i.getElementsByTagName("*"));
            return{set:m,expr:g}};k.filter=function(g,i,n,m){for(var p,q,u=g,y=[],F=i,M=i&&i[0]&&k.isXML(i[0]);g&&i.length;){for(var N in o.filter)if((p=o.leftMatch[N].exec(g))!=null&&p[2]){var O,D,R=o.filter[N];D=p[1];q=false;p.splice(1,1);if(D.substr(D.length-1)!=="\\"){if(F===y)y=[];if(o.preFilter[N])if(p=o.preFilter[N](p,F,n,y,m,M)){if(p===true)continue}else q=O=true;if(p)for(var j=0;(D=F[j])!=null;j++)if(D){O=R(D,p,j,F);var s=m^!!O;if(n&&O!=null)if(s)q=true;else F[j]=false;else if(s){y.push(D);q=true}}if(O!==
            B){n||(F=y);g=g.replace(o.match[N],"");if(!q)return[];break}}}if(g===u)if(q==null)k.error(g);else break;u=g}return F};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var o=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
            POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},relative:{"+":function(g,i){var n=typeof i==="string",m=n&&!/\W/.test(i);n=n&&!m;if(m)i=i.toLowerCase();m=0;for(var p=g.length,q;m<p;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=n||q&&q.nodeName.toLowerCase()===
            i?q||false:q===i}n&&k.filter(i,g,true)},">":function(g,i){var n,m=typeof i==="string",p=0,q=g.length;if(m&&!/\W/.test(i))for(i=i.toLowerCase();p<q;p++){if(n=g[p]){n=n.parentNode;g[p]=n.nodeName.toLowerCase()===i?n:false}}else{for(;p<q;p++)if(n=g[p])g[p]=m?n.parentNode:n.parentNode===i;m&&k.filter(i,g,true)}},"":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=i=i.toLowerCase();q=a}q("parentNode",i,p,g,m,n)},"~":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=
            i=i.toLowerCase();q=a}q("previousSibling",i,p,g,m,n)}},find:{ID:function(g,i,n){if(typeof i.getElementById!=="undefined"&&!n)return(g=i.getElementById(g[1]))&&g.parentNode?[g]:[]},NAME:function(g,i){if(typeof i.getElementsByName!=="undefined"){for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p<q;p++)m[p].getAttribute("name")===g[1]&&n.push(m[p]);return n.length===0?null:n}},TAG:function(g,i){return i.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,i,n,m,p,q){g=" "+g[1].replace(/\\/g,
            "")+" ";if(q)return g;q=0;for(var u;(u=i[q])!=null;q++)if(u)if(p^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))n||m.push(u);else if(n)i[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]==="nth"){var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;return g},ATTR:function(g,i,n,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           m,p,q){i=g[1].replace(/\\/g,"");if(!q&&o.attrMap[i])g[1]=o.attrMap[i];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,i,n,m,p){if(g[1]==="not")if((d.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,i);else{g=k.filter(g[3],i,n,true^p);n||m.push.apply(m,g);return false}else if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===
            true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,i,n){return!!k(n[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===
            g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,i){return i===0},last:function(g,i,n,m){return i===m.length-1},even:function(g,i){return i%2===0},odd:function(g,i){return i%2===1},lt:function(g,i,n){return i<n[3]-0},gt:function(g,i,n){return i>n[3]-0},nth:function(g,i,n){return n[3]-
            0===i},eq:function(g,i,n){return n[3]-0===i}},filter:{PSEUDO:function(g,i,n,m){var p=i[1],q=o.filters[p];if(q)return q(g,n,i,m);else if(p==="contains")return(g.textContent||g.innerText||k.getText([g])||"").indexOf(i[3])>=0;else if(p==="not"){i=i[3];n=0;for(m=i.length;n<m;n++)if(i[n]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+p)},CHILD:function(g,i){var n=i[1],m=g;switch(n){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(n===
            "first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":n=i[2];var p=i[3];if(n===1&&p===0)return true;var q=i[0],u=g.parentNode;if(u&&(u.sizcache!==q||!g.nodeIndex)){var y=0;for(m=u.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++y;u.sizcache=q}m=g.nodeIndex-p;return n===0?m===0:m%n===0&&m/n>=0}},ID:function(g,i){return g.nodeType===1&&g.getAttribute("id")===i},TAG:function(g,i){return i==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===
            i},CLASS:function(g,i){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(i)>-1},ATTR:function(g,i){var n=i[1];n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);var m=n+"",p=i[2],q=i[4];return n==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&n!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false},POS:function(g,i,n,m){var p=o.setFilters[i[2]];
            if(p)return p(g,n,i,m)}}},x=o.match.POS,r=function(g,i){return"\\"+(i-0+1)},A;for(A in o.match){o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r))}var C=function(g,i){g=Array.prototype.slice.call(g,0);if(i){i.push.apply(i,g);return i}return g};try{Array.prototype.slice.call(t.documentElement.childNodes,0)}catch(J){C=function(g,i){var n=0,m=i||[];if(f.call(g)==="[object Array]")Array.prototype.push.apply(m,
            g);else if(typeof g.length==="number")for(var p=g.length;n<p;n++)m.push(g[n]);else for(;g[n];n++)m.push(g[n]);return m}}var w,I;if(t.documentElement.compareDocumentPosition)w=function(g,i){if(g===i){h=true;return 0}if(!g.compareDocumentPosition||!i.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(i)&4?-1:1};else{w=function(g,i){var n,m,p=[],q=[];n=g.parentNode;m=i.parentNode;var u=n;if(g===i){h=true;return 0}else if(n===m)return I(g,i);else if(n){if(!m)return 1}else return-1;
            for(;u;){p.unshift(u);u=u.parentNode}for(u=m;u;){q.unshift(u);u=u.parentNode}n=p.length;m=q.length;for(u=0;u<n&&u<m;u++)if(p[u]!==q[u])return I(p[u],q[u]);return u===n?I(g,q[u],-1):I(p[u],i,1)};I=function(g,i,n){if(g===i)return n;for(g=g.nextSibling;g;){if(g===i)return-1;g=g.nextSibling}return 1}}k.getText=function(g){for(var i="",n,m=0;g[m];m++){n=g[m];if(n.nodeType===3||n.nodeType===4)i+=n.nodeValue;else if(n.nodeType!==8)i+=k.getText(n.childNodes)}return i};(function(){var g=t.createElement("div"),
            i="script"+(new Date).getTime(),n=t.documentElement;g.innerHTML="<a name='"+i+"'/>";n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}n.removeChild(g);
            n=g=null})();(function(){var g=t.createElement("div");g.appendChild(t.createComment(""));if(g.getElementsByTagName("*").length>0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="<a href='#'></a>";if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")o.attrHandle.href=function(i){return i.getAttribute("href",2)};g=null})();t.querySelectorAll&&
        function(){var g=k,i=t.createElement("div");i.innerHTML="<p class='TEST'></p>";if(!(i.querySelectorAll&&i.querySelectorAll(".TEST").length===0)){k=function(m,p,q,u){p=p||t;m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!u&&!k.isXML(p))if(p.nodeType===9)try{return C(p.querySelectorAll(m),q)}catch(y){}else if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){var F=p.getAttribute("id"),M=F||"__sizzle__";F||p.setAttribute("id",M);try{return C(p.querySelectorAll("#"+M+" "+m),q)}catch(N){}finally{F||
        p.removeAttribute("id")}}return g(m,p,q,u)};for(var n in g)k[n]=g[n];i=null}}();(function(){var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;try{i.call(t.documentElement,"[test!='']:sizzle")}catch(m){n=true}if(i)k.matchesSelector=function(p,q){q=q.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(p))try{if(n||!o.match.PSEUDO.test(q)&&!/!=/.test(q))return i.call(p,q)}catch(u){}return k(q,null,null,[p]).length>0}})();(function(){var g=
            t.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){o.order.splice(1,0,"CLASS");o.find.CLASS=function(i,n,m){if(typeof n.getElementsByClassName!=="undefined"&&!m)return n.getElementsByClassName(i[1])};g=null}}})();k.contains=t.documentElement.contains?function(g,i){return g!==i&&(g.contains?g.contains(i):true)}:t.documentElement.compareDocumentPosition?
            function(g,i){return!!(g.compareDocumentPosition(i)&16)}:function(){return false};k.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false};var L=function(g,i){for(var n,m=[],p="",q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){p+=n[0];g=g.replace(o.match.PSEUDO,"")}g=o.relative[g]?g+"*":g;n=0;for(var u=q.length;n<u;n++)k(g,q[n],m);return k.filter(p,m)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=k.getText;c.isXMLDoc=k.isXML;
            c.contains=k.contains})();var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,e=0,f=this.length;e<f;e++){d=b.length;c.find(a,this[e],b);if(e>0)for(var h=d;h<b.length;h++)for(var l=0;l<d;l++)if(b[l]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d<e;d++)if(c.contains(this,b[d]))return true})},
            not:function(a){return this.pushStack(ma(this,a,false),"not",a)},filter:function(a){return this.pushStack(ma(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){var d=[],e,f,h=this[0];if(c.isArray(a)){var l,k={},o=1;if(h&&a.length){e=0;for(f=a.length;e<f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&&h.ownerDocument&&h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)>-1:c(h).is(e))d.push({selector:l,elem:h,level:o})}h=
                h.parentNode;o++}}return d}l=cb.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e<f;e++)for(h=this[e];h;)if(l?l.index(h)>-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||!h.ownerDocument||h===b)break}d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a||typeof a==="string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b||this.context):
                c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,
            2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Za.test(a)||(e=d);if(e&&typeof e==="string")f=c.filter(e,f);f=this.length>1?c.unique(f):f;if((this.length>1||ab.test(e))&&$a.test(a))f=f.reverse();return this.pushStack(f,a,bb.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&a.nodeType!==9&&(d===B||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&&
        e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var za=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,Aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ba=/<([\w:]+)/,db=/<tbody/i,eb=/<|&#?\w+;/,Ca=/<(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^="'>\s]+\/)>/g,P={option:[1,
            "<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};P.optgroup=P.option;P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;P.th=P.td;if(!c.support.htmlSerialize)P._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
            c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==B)return this.empty().append((this[0]&&this[0].ownerDocument||t).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
            wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
            prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
                this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&&e.nodeType===1){c.cleanData(e.getElementsByTagName("*"));c.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
                return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(za,"").replace(fb,'="$1">').replace($,"")],e)[0]}else return this.cloneNode(true)});if(a===true){na(this,b);na(this.find("*"),b.find("*"))}return b},html:function(a){if(a===B)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(za,""):null;
            else if(typeof a==="string"&&!Ca.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!P[(Ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Aa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=
                c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var e,f,h,l=a[0],k=[];if(!c.support.checkClone&&arguments.length===3&&typeof l==="string"&&Da.test(l))return this.each(function(){c(this).domManip(a,
                b,d,true)});if(c.isFunction(l))return this.each(function(x){var r=c(this);a[0]=l.call(this,x,b?r.html():B);r.domManip(a,b,d)});if(this[0]){e=l&&l.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);h=e.fragment;if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var o=this.length;f<o;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
                this[f]:this[f],f>0||e.cacheable||this.length>1?h.cloneNode(true):h)}k.length&&c.each(k,Oa)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&&b[0]?b[0].ownerDocument||b[0]:t;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===t&&!Ca.test(a[0])&&(c.support.checkClone||!Da.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",
            prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){d[b](this[0]);return this}else{f=0;for(var h=d.length;f<h;f++){var l=(f>0?this.clone(true):this).get();c(d[f])[b](l);e=e.concat(l)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||t;if(typeof b.createElement==="undefined")b=b.ownerDocument||
            b[0]&&b[0].ownerDocument||t;for(var f=[],h=0,l;(l=a[h])!=null;h++){if(typeof l==="number")l+="";if(l){if(typeof l==="string"&&!eb.test(l))l=b.createTextNode(l);else if(typeof l==="string"){l=l.replace(Aa,"<$1></$2>");var k=(Ba.exec(l)||["",""])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement("div");for(r.innerHTML=o[1]+l+o[2];x--;)r=r.lastChild;if(!c.support.tbody){x=db.test(l);k=k==="table"&&!x?r.firstChild&&r.firstChild.childNodes:o[1]==="<table>"&&!x?r.childNodes:[];for(o=k.length-
            1;o>=0;--o)c.nodeName(k[o],"tbody")&&!k[o].childNodes.length&&k[o].parentNode.removeChild(k[o])}!c.support.leadingWhitespace&&$.test(l)&&r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);l=r.childNodes}if(l.nodeType)f.push(l);else f=c.merge(f,l)}}if(d)for(h=0;f[h];h++)if(e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
            d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++)if(!(k.nodeName&&c.noData[k.nodeName.toLowerCase()]))if(d=k[c.expando]){if((b=e[d])&&b.events)for(var o in b.events)f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);if(h)delete k[c.expando];else k.removeAttribute&&k.removeAttribute(c.expando);delete e[d]}}});var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,
            jb=/^-?\d/,kb={position:"absolute",visibility:"hidden",display:"block"},Pa=["Left","Right"],Qa=["Top","Bottom"],W,Ga,aa,lb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&&b===B)return this;return c.access(this,a,b,true,function(d,e,f){return f!==B?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,"opacity","opacity");return d===""?"1":d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,
            zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];b=c.cssProps[h]||h;if(d!==B){if(!(typeof d==="number"&&isNaN(d)||d==null)){if(typeof d==="number"&&!c.cssNumber[h])d+="px";if(!k||!("set"in k)||(d=k.set(a,d))!==B)try{l[b]=d}catch(o){}}}else{if(k&&"get"in k&&(f=k.get(a,false,e))!==B)return f;return l[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),
            h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&&"get"in h&&(e=h.get(a,true,d))!==B)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=e[f]},camelCase:function(a){return a.replace(hb,lb)}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=oa(d,b,f);else c.swap(d,kb,function(){h=oa(d,b,f)});if(h<=0){h=W(d,b,b);if(h==="0px"&&aa)h=aa(d,b,b);
            if(h!=null)return h===""||h==="auto"?"0px":h}if(h<0||h==null){h=d.style[b];return h===""||h==="auto"?"0px":h}return typeof h==="string"?h:h+"px"}},set:function(d,e){if(Fa.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=
            d.filter||"";d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+" "+e}};if(t.defaultView&&t.defaultView.getComputedStyle)Ga=function(a,b,d){var e;d=d.replace(ib,"-$1").toLowerCase();if(!(b=a.ownerDocument.defaultView))return B;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===""&&!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};if(t.documentElement.currentStyle)aa=function(a,b){var d,e,f=a.currentStyle&&a.currentStyle[b],h=a.style;if(!Fa.test(f)&&jb.test(f)){d=h.left;
            e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.left=d;a.runtimeStyle.left=e}return f===""?"auto":f};W=Ga||aa;if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var mb=c.now(),nb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&|$)/,ja=/\?/,rb=/([?&])_=[^&]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Ha)return Ha.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b===
            "object"){b=c.param(b,c.ajaxSettings.traditional);e="POST"}var h=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(l,k){if(k==="success"||k==="notmodified")h.html(f?c("<div>").append(l.responseText.replace(nb,"")).find(f):l.responseText);d&&h.each(d,[l.responseText,k,l])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&
            !this.disabled&&(this.checked||ob.test(this.nodeName)||pb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e})},
            getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",
                script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);b.url=b.url.replace(ub,"");b.context=a&&a.context!=null?a.context:b;if(b.data&&b.processData&&typeof b.data!=="string")b.data=c.param(b.data,b.traditional);if(b.dataType==="jsonp"){if(h==="GET")T.test(b.url)||(b.url+=(ja.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");else if(!b.data||
                !T.test(b.data))b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";b.dataType="json"}if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||"jsonp"+mb++;if(b.data)b.data=(b.data+"").replace(T,"="+d+"$1");b.url=b.url.replace(T,"="+d+"$1");b.dataType="script";var k=E[d];E[d]=function(m){if(c.isFunction(k))k(m);else{E[d]=B;try{delete E[d]}catch(p){}}f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);r&&r.removeChild(A)}}if(b.dataType==="script"&&b.cache===null)b.cache=
                false;if(b.cache===false&&l){var o=c.now(),x=b.url.replace(rb,"$1_="+o);b.url=x+(x===b.url?(ja.test(b.url)?"&":"?")+"_="+o:"")}if(b.data&&l)b.url+=(ja.test(b.url)?"&":"?")+b.data;b.global&&c.active++===0&&c.event.trigger("ajaxStart");o=(o=sb.exec(b.url))&&(o[1]&&o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);if(b.dataType==="script"&&h==="GET"&&o){var r=t.getElementsByTagName("head")[0]||t.documentElement,A=t.createElement("script");if(b.scriptCharset)A.charset=b.scriptCharset;
                A.src=b.url;if(!d){var C=false;A.onload=A.onreadystatechange=function(){if(!C&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){C=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);A.onload=A.onreadystatechange=null;r&&A.parentNode&&r.removeChild(A)}}}r.insertBefore(A,r.firstChild);return B}var J=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&&!l||a&&a.contentType)w.setRequestHeader("Content-Type",
                b.contentType);if(b.ifModified){c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url])}o||w.setRequestHeader("X-Requested-With","XMLHttpRequest");w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default)}catch(I){}if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){b.global&&c.active--===1&&c.event.trigger("ajaxStop");w.abort();return false}b.global&&
            c.triggerGlobal(b,"ajaxSend",[w,b]);var L=w.onreadystatechange=function(m){if(!w||w.readyState===0||m==="abort"){J||c.handleComplete(b,w,e,f);J=true;if(w)w.onreadystatechange=c.noop}else if(!J&&w&&(w.readyState===4||m==="timeout")){J=true;w.onreadystatechange=c.noop;e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";var p;if(e==="success")try{f=c.httpData(w,b.dataType,b)}catch(q){e="parsererror";p=q}if(e==="success"||e==="notmodified")d||
            c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m==="timeout"&&w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&&Function.prototype.call.call(g,w);L("abort")}}catch(i){}b.async&&b.timeout>0&&setTimeout(function(){w&&!J&&L("timeout")},b.timeout);try{w.send(l||b.data==null?null:b.data)}catch(n){c.handleError(b,w,null,n);c.handleComplete(b,w,e,f)}b.async||L();return w}},param:function(a,b){var d=[],e=function(h,l){l=c.isFunction(l)?l():l;d[d.length]=
                encodeURIComponent(h)+"="+encodeURIComponent(l)};if(b===B)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)da(f,a[f],b,e);return d.join("&").replace(tb,"+")}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&&a.error.call(a.context,b,d,e);a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e])},handleSuccess:function(a,b,d,e){a.success&&a.success.call(a.context,e,d,b);a.global&&c.triggerGlobal(a,"ajaxSuccess",
            [b,a])},handleComplete:function(a,b,d){a.complete&&a.complete.call(a.context,b,d);a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);a.global&&c.active--===1&&c.event.trigger("ajaxStop")},triggerGlobal:function(a,b,d){(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),
            e=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&e.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&e.indexOf("javascript")>=0)c.globalEval(a);return a}});
        if(E.ActiveXObject)c.ajaxSettings.xhr=function(){if(E.location.protocol!=="file:")try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S("show",
            3),a,b,d);else{d=0;for(var e=this.length;d<e;d++){a=this[d];b=a.style.display;if(!c.data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&c.css(a,"display")==="none"&&c.data(a,"olddisplay",qa(a.nodeName))}for(d=0;d<e;d++){a=this[d];b=a.style.display;if(b===""||b==="none")a.style.display=c.data(a,"olddisplay")||""}return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S("hide",3),a,b,d);else{a=0;for(b=this.length;a<b;a++){d=c.css(this[a],"display");d!=="none"&&c.data(this[a],"olddisplay",
            d)}for(a=0;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(S("toggle",3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,
            d,e);if(c.isEmptyObject(a))return this.each(f.complete);return this[f.queue===false?"each":"queue"](function(){var h=c.extend({},f),l,k=this.nodeType===1,o=k&&c(this).is(":hidden"),x=this;for(l in a){var r=c.camelCase(l);if(l!==r){a[r]=a[l];delete a[l];l=r}if(a[l]==="hide"&&o||a[l]==="show"&&!o)return h.complete.call(this);if(k&&(l==="height"||l==="width")){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none")if(c.support.inlineBlockNeedsLayout)if(qa(this.nodeName)===
            "inline")this.style.display="inline-block";else{this.style.display="inline";this.style.zoom=1}else this.style.display="inline-block"}if(c.isArray(a[l])){(h.specialEasing=h.specialEasing||{})[l]=a[l][1];a[l]=a[l][0]}}if(h.overflow!=null)this.style.overflow="hidden";h.curAnim=c.extend({},a);c.each(a,function(A,C){var J=new c.fx(x,h,A);if(vb.test(C))J[C==="toggle"?o?"show":"hide":C](a);else{var w=wb.exec(C),I=J.cur()||0;if(w){var L=parseFloat(w[2]),g=w[3]||"px";if(g!=="px"){c.style(x,A,(L||1)+g);I=(L||
            1)/J.cur()*I;c.style(x,A,I+g)}if(w[1])L=(w[1]==="-="?-1:1)*L+I;J.custom(I,L,g)}else J.custom(I,C,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var e=d.length-1;e>=0;e--)if(d[e].elem===this){b&&d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,
            d,e,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&&c(this).dequeue();c.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*
            Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&&a>-1E4?a:0},custom:function(a,b,d){function e(l){return f.step(l)}
            var f=this,h=c.fx;this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;e.elem=this.elem;if(e()&&c.timers.push(e)&&!ba)ba=setInterval(h.tick,h.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;
            this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each(["","X","Y"],function(k,o){f.style["overflow"+o]=h.overflow[k]})}this.options.hide&&c(this.elem).hide();if(this.options.hide||
            this.options.show)for(var l in this.options.curAnim)c.style(this.elem,l,this.options.orig[l]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=
            c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===
            b.elem}).length};var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in t.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(l){c.offset.setOffset(this,a,l)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=fa(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
            h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(x){c.offset.setOffset(this,a,x)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
            for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==h;){if(c.offset.supportsFixedPosition&&d.position==="fixed")break;d=f?f.getComputedStyle(b,null):b.currentStyle;k-=b.scrollTop;o-=b.scrollLeft;if(b===e){k+=b.offsetTop;o+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&xb.test(b.nodeName))){k+=parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}e=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"){k+=
                parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}d=d}if(d.position==="relative"||d.position==="static"){k+=l.offsetTop;o+=l.offsetLeft}if(c.offset.supportsFixedPosition&&d.position==="fixed"){k+=Math.max(h.scrollTop,l.scrollTop);o+=Math.max(h.scrollLeft,l.scrollLeft)}return{top:k,left:o}};c.offset={initialize:function(){var a=t.body,b=t.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",
            height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=
            f.offsetTop===5;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,
            "marginTop"))||0;d+=parseFloat(c.css(a,"marginLeft"))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),h=f.offset(),l=c.css(a,"top"),k=c.css(a,"left"),o=e==="absolute"&&c.inArray("auto",[l,k])>-1;e={};var x={};if(o)x=f.position();l=o?x.top:parseInt(l,10)||0;k=o?x.left:parseInt(k,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+l;if(b.left!=null)e.left=b.left-h.left+k;"using"in b?b.using.call(a,
            e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||t.body;a&&!Ia.test(a.nodeName)&&
            c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==B)return this.each(function(){if(h=fa(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=fa(f))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();
            c.fn["inner"+b]=function(){return this[0]?parseFloat(c.css(this[0],d,"padding")):null};c.fn["outer"+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(l){var k=c(this);k[d](e.call(this,l,k[d]()))});if(c.isWindow(f))return f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b];else if(f.nodeType===9)return Math.max(f.documentElement["client"+
                b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);else if(e===B){f=c.css(f,d);var h=parseFloat(f);return c.isNaN(h)?f:h}else return this.css(d,typeof e==="string"?e:e+"px")}})})(window);
;

/**
 * jQuery Once Plugin v1.2
 * http://plugins.jquery.com/project/once
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function ($) {
    var cache = {}, uuid = 0;

    /**
     * Filters elements by whether they have not yet been processed.
     *
     * @param id
     *   (Optional) If this is a string, then it will be used as the CSS class
     *   name that is applied to the elements for determining whether it has
     *   already been processed. The elements will get a class in the form of
     *   "id-processed".
     *
     *   If the id parameter is a function, it will be passed off to the fn
     *   parameter and the id will become a unique identifier, represented as a
     *   number.
     *
     *   When the id is neither a string or a function, it becomes a unique
     *   identifier, depicted as a number. The element's class will then be
     *   represented in the form of "jquery-once-#-processed".
     *
     *   Take note that the id must be valid for usage as an element's class name.
     * @param fn
     *   (Optional) If given, this function will be called for each element that
     *   has not yet been processed. The function's return value follows the same
     *   logic as $.each(). Returning true will continue to the next matched
     *   element in the set, while returning false will entirely break the
     *   iteration.
     */
    $.fn.once = function (id, fn) {
        if (typeof id != 'string') {
            // Generate a numeric ID if the id passed can't be used as a CSS class.
            if (!(id in cache)) {
                cache[id] = ++uuid;
            }
            // When the fn parameter is not passed, we interpret it from the id.
            if (!fn) {
                fn = id;
            }
            id = 'jquery-once-' + cache[id];
        }
        // Remove elements from the set that have already been processed.
        var name = id + '-processed';
        var elements = this.not('.' + name).addClass(name);

        return $.isFunction(fn) ? elements.each(fn) : elements;
    };

    /**
     * Filters elements that have been processed once already.
     *
     * @param id
     *   A required string representing the name of the class which should be used
     *   when filtering the elements. This only filters elements that have already
     *   been processed by the once function. The id should be the same id that
     *   was originally passed to the once() function.
     * @param fn
     *   (Optional) If given, this function will be called for each element that
     *   has not yet been processed. The function's return value follows the same
     *   logic as $.each(). Returning true will continue to the next matched
     *   element in the set, while returning false will entirely break the
     *   iteration.
     */
    $.fn.removeOnce = function (id, fn) {
        var name = id + '-processed';
        var elements = this.filter('.' + name).removeClass(name);

        return $.isFunction(fn) ? elements.each(fn) : elements;
    };
})(jQuery);
;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };

// Allow other JavaScript libraries to use $.
jQuery.noConflict();

(function ($) {

    /**
     * Attach all registered behaviors to a page element.
     *
     * Behaviors are event-triggered actions that attach to page elements, enhancing
     * default non-JavaScript UIs. Behaviors are registered in the Drupal.behaviors
     * object using the method 'attach' and optionally also 'detach' as follows:
     * @code
     *    Drupal.behaviors.behaviorName = {
 *      attach: function (context, settings) {
 *        ...
 *      },
 *      detach: function (context, settings, trigger) {
 *        ...
 *      }
 *    };
     * @endcode
     *
     * Drupal.attachBehaviors is added below to the jQuery ready event and so
     * runs on initial page load. Developers implementing AHAH/Ajax in their
     * solutions should also call this function after new page content has been
     * loaded, feeding in an element to be processed, in order to attach all
     * behaviors to the new content.
     *
     * Behaviors should use
     * @code
     *   $(selector).once('behavior-name', function () {
 *     ...
 *   });
     * @endcode
     * to ensure the behavior is attached only once to a given element. (Doing so
     * enables the reprocessing of given elements, which may be needed on occasion
     * despite the ability to limit behavior attachment to a particular element.)
     *
     * @param context
     *   An element to attach behaviors to. If none is given, the document element
     *   is used.
     * @param settings
     *   An object containing settings for the current context. If none given, the
     *   global Drupal.settings object is used.
     */
    Drupal.attachBehaviors = function (context, settings) {
        context = context || document;
        settings = settings || Drupal.settings;
        // Execute all of them.
        $.each(Drupal.behaviors, function () {
            if ($.isFunction(this.attach)) {
                this.attach(context, settings);
            }
        });
    };

    /**
     * Detach registered behaviors from a page element.
     *
     * Developers implementing AHAH/Ajax in their solutions should call this
     * function before page content is about to be removed, feeding in an element
     * to be processed, in order to allow special behaviors to detach from the
     * content.
     *
     * Such implementations should look for the class name that was added in their
     * corresponding Drupal.behaviors.behaviorName.attach implementation, i.e.
     * behaviorName-processed, to ensure the behavior is detached only from
     * previously processed elements.
     *
     * @param context
     *   An element to detach behaviors from. If none is given, the document element
     *   is used.
     * @param settings
     *   An object containing settings for the current context. If none given, the
     *   global Drupal.settings object is used.
     * @param trigger
     *   A string containing what's causing the behaviors to be detached. The
     *   possible triggers are:
     *   - unload: (default) The context element is being removed from the DOM.
     *   - move: The element is about to be moved within the DOM (for example,
     *     during a tabledrag row swap). After the move is completed,
     *     Drupal.attachBehaviors() is called, so that the behavior can undo
     *     whatever it did in response to the move. Many behaviors won't need to
     *     do anything simply in response to the element being moved, but because
     *     IFRAME elements reload their "src" when being moved within the DOM,
     *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
     *     take some action.
     *   - serialize: When an Ajax form is submitted, this is called with the
     *     form as the context. This provides every behavior within the form an
     *     opportunity to ensure that the field elements have correct content
     *     in them before the form is serialized. The canonical use-case is so
     *     that WYSIWYG editors can update the hidden textarea to which they are
     *     bound.
     *
     * @see Drupal.attachBehaviors
     */
    Drupal.detachBehaviors = function (context, settings, trigger) {
        context = context || document;
        settings = settings || Drupal.settings;
        trigger = trigger || 'unload';
        // Execute all of them.
        $.each(Drupal.behaviors, function () {
            if ($.isFunction(this.detach)) {
                this.detach(context, settings, trigger);
            }
        });
    };

    /**
     * Encode special characters in a plain-text string for display as HTML.
     *
     * @ingroup sanitization
     */
    Drupal.checkPlain = function (str) {
        var character, regex,
            replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
        str = String(str);
        for (character in replace) {
            if (replace.hasOwnProperty(character)) {
                regex = new RegExp(character, 'g');
                str = str.replace(regex, replace[character]);
            }
        }
        return str;
    };

    /**
     * Replace placeholders with sanitized values in a string.
     *
     * @param str
     *   A string with placeholders.
     * @param args
     *   An object of replacements pairs to make. Incidences of any key in this
     *   array are replaced with the corresponding value. Based on the first
     *   character of the key, the value is escaped and/or themed:
     *    - !variable: inserted as is
     *    - @variable: escape plain text to HTML (Drupal.checkPlain)
     *    - %variable: escape text and theme as a placeholder for user-submitted
     *      content (checkPlain + Drupal.theme('placeholder'))
     *
     * @see Drupal.t()
     * @ingroup sanitization
     */
    Drupal.formatString = function(str, args) {
        // Transform arguments before inserting them.
        for (var key in args) {
            switch (key.charAt(0)) {
                // Escaped only.
                case '@':
                    args[key] = Drupal.checkPlain(args[key]);
                    break;
                // Pass-through.
                case '!':
                    break;
                // Escaped and placeholder.
                case '%':
                default:
                    args[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
            str = str.replace(key, args[key]);
        }
        return str;
    };

    /**
     * Translate strings to the page language or a given language.
     *
     * See the documentation of the server-side t() function for further details.
     *
     * @param str
     *   A string containing the English string to translate.
     * @param args
     *   An object of replacements pairs to make after translation. Incidences
     *   of any key in this array are replaced with the corresponding value.
     *   See Drupal.formatString().
     *
     * @param options
     *   - 'context' (defaults to the empty context): The context the source string
     *     belongs to.
     *
     * @return
     *   The translated string.
     */
    Drupal.t = function (str, args, options) {
        options = options || {};
        options.context = options.context || '';

        // Fetch the localized version of the string.
        if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) {
            str = Drupal.locale.strings[options.context][str];
        }

        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    };

    /**
     * Format a string containing a count of items.
     *
     * This function ensures that the string is pluralized correctly. Since Drupal.t() is
     * called by this function, make sure not to pass already-localized strings to it.
     *
     * See the documentation of the server-side format_plural() function for further details.
     *
     * @param count
     *   The item count to display.
     * @param singular
     *   The string for the singular case. Please make sure it is clear this is
     *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
     *   Do not use @count in the singular string.
     * @param plural
     *   The string for the plural case. Please make sure it is clear this is plural,
     *   to ease translation. Use @count in place of the item count, as in "@count
     *   new comments".
     * @param args
     *   An object of replacements pairs to make after translation. Incidences
     *   of any key in this array are replaced with the corresponding value.
     *   See Drupal.formatString().
     *   Note that you do not need to include @count in this array.
     *   This replacement is done automatically for the plural case.
     * @param options
     *   The options to pass to the Drupal.t() function.
     * @return
     *   A translated string.
     */
    Drupal.formatPlural = function (count, singular, plural, args, options) {
        var args = args || {};
        args['@count'] = count;
        // Determine the index of the plural form.
        var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

        if (index == 0) {
            return Drupal.t(singular, args, options);
        }
        else if (index == 1) {
            return Drupal.t(plural, args, options);
        }
        else {
            args['@count[' + index + ']'] = args['@count'];
            delete args['@count'];
            return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options);
        }
    };

    /**
     * Generate the themed representation of a Drupal object.
     *
     * All requests for themed output must go through this function. It examines
     * the request and routes it to the appropriate theme function. If the current
     * theme does not provide an override function, the generic theme function is
     * called.
     *
     * For example, to retrieve the HTML for text that should be emphasized and
     * displayed as a placeholder inside a sentence, call
     * Drupal.theme('placeholder', text).
     *
     * @param func
     *   The name of the theme function to call.
     * @param ...
     *   Additional arguments to pass along to the theme function.
     * @return
     *   Any data the theme function returns. This could be a plain HTML string,
     *   but also a complex object.
     */
    Drupal.theme = function (func) {
        var args = Array.prototype.slice.apply(arguments, [1]);

        return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
    };

    /**
     * Freeze the current body height (as minimum height). Used to prevent
     * unnecessary upwards scrolling when doing DOM manipulations.
     */
    Drupal.freezeHeight = function () {
        Drupal.unfreezeHeight();
        $('<div id="freeze-height"></div>').css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '1px',
            height: $('body').css('height')
        }).appendTo('body');
    };

    /**
     * Unfreeze the body height.
     */
    Drupal.unfreezeHeight = function () {
        $('#freeze-height').remove();
    };

    /**
     * Encodes a Drupal path for use in a URL.
     *
     * For aesthetic reasons slashes are not escaped.
     */
    Drupal.encodePath = function (item, uri) {
        uri = uri || location.href;
        return encodeURIComponent(item).replace(/%2F/g, '/');
    };

    /**
     * Get the text selection in a textarea.
     */
    Drupal.getSelection = function (element) {
        if (typeof element.selectionStart != 'number' && document.selection) {
            // The current selection.
            var range1 = document.selection.createRange();
            var range2 = range1.duplicate();
            // Select all text.
            range2.moveToElementText(element);
            // Now move 'dummy' end point to end point of original range.
            range2.setEndPoint('EndToEnd', range1);
            // Now we can calculate start and end points.
            var start = range2.text.length - range1.text.length;
            var end = start + range1.text.length;
            return { 'start': start, 'end': end };
        }
        return { 'start': element.selectionStart, 'end': element.selectionEnd };
    };

    /**
     * Build an error message from an Ajax response.
     */
    Drupal.ajaxError = function (xmlhttp, uri) {
        var statusCode, statusText, pathText, responseText, readyStateText, message;
        if (xmlhttp.status) {
            statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") +  "\n" + Drupal.t("HTTP Result Code: !status", {'!status': xmlhttp.status});
        }
        else {
            statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
        }
        statusCode += "\n" + Drupal.t("Debugging information follows.");
        pathText = "\n" + Drupal.t("Path: !uri", {'!uri': uri} );
        statusText = '';
        // In some cases, when statusCode == 0, xmlhttp.statusText may not be defined.
        // Unfortunately, testing for it with typeof, etc, doesn't seem to catch that
        // and the test causes an exception. So we need to catch the exception here.
        try {
            statusText = "\n" + Drupal.t("StatusText: !statusText", {'!statusText': $.trim(xmlhttp.statusText)});
        }
        catch (e) {}

        responseText = '';
        // Again, we don't have a way to know for sure whether accessing
        // xmlhttp.responseText is going to throw an exception. So we'll catch it.
        try {
            responseText = "\n" + Drupal.t("ResponseText: !responseText", {'!responseText': $.trim(xmlhttp.responseText) } );
        } catch (e) {}

        // Make the responseText more readable by stripping HTML tags and newlines.
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");
        responseText = responseText.replace(/[\n]+\s+/g,"\n");

        // We don't need readyState except for status == 0.
        readyStateText = xmlhttp.status == 0 ? ("\n" + Drupal.t("ReadyState: !readyState", {'!readyState': xmlhttp.readyState})) : "";

        message = statusCode + pathText + statusText + responseText + readyStateText;
        return message;
    };

// Class indicating that JS is enabled; used for styling purpose.
    $('html').addClass('js');

// 'js enabled' cookie.
    document.cookie = 'has_js=1; path=/';

    /**
     * Additions to jQuery.support.
     */
    $(function () {
        /**
         * Boolean indicating whether or not position:fixed is supported.
         */
        if (jQuery.support.positionFixed === undefined) {
            var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
            jQuery.support.positionFixed = el[0].offsetTop === 10;
            el.remove();
        }
    });

//Attach all behaviors.
    $(function () {
        Drupal.attachBehaviors(document, Drupal.settings);
    });

    /**
     * The default themes.
     */
    Drupal.theme.prototype = {

        /**
         * Formats text for emphasized display in a placeholder inside a sentence.
         *
         * @param str
         *   The text to format (plain-text).
         * @return
         *   The formatted text (html).
         */
        placeholder: function (str) {
            return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
        }
    };

})(jQuery);
;






/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-borderimage-cssclasses-testprop-testallprops-domprefixes-cssclassprefix:mod!
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.borderimage=function(){return D("borderImage")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" mod-"+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" mod-js mod-"+s.join(" mod-"):""),e}(this,this.document);;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
    $.fn.superfish = function(op){

        var sf = $.fn.superfish,
            c = sf.c,
            $arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
            over = function(){
                var $$ = $(this), menu = getMenu($$);
                clearTimeout(menu.sfTimer);
                $$.showSuperfishUl().siblings().hideSuperfishUl();
            },
            out = function(){
                var $$ = $(this), menu = getMenu($$), o = sf.op;
                clearTimeout(menu.sfTimer);
                menu.sfTimer=setTimeout(function(){
                    o.retainPath=($.inArray($$[0],o.$path)>-1);
                    $$.hideSuperfishUl();
                    if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
                },o.delay);
            },
            getMenu = function($menu){
                var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
                sf.op = sf.o[menu.serial];
                return menu;
            },
            addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };

        return this.each(function() {
            var s = this.serial = sf.o.length;
            var o = $.extend({},sf.defaults,op);
            o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
                $(this).addClass([o.hoverClass,c.bcClass].join(' '))
                    .filter('li:has(ul)').removeClass(o.pathClass);
            });
            sf.o[s] = sf.op = o;

            $('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
                if (o.autoArrows) addArrow( $('>a:first-child',this) );
            })
                .not('.'+c.bcClass)
                .hideSuperfishUl();

            var $a = $('a',this);
            $a.each(function(i){
                var $li = $a.eq(i).parents('li');
                $a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
            });
            o.onInit.call(this);

        }).each(function() {
                var menuClasses = [c.menuClass];
                if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
                $(this).addClass(menuClasses.join(' '));
            });
    };

    var sf = $.fn.superfish;
    sf.o = [];
    sf.op = {};
    sf.IE7fix = function(){
        var o = sf.op;
        if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
            this.toggleClass(sf.c.shadowClass+'-off');
    };
    sf.c = {
        bcClass     : 'sf-breadcrumb',
        menuClass   : 'sf-js-enabled',
        anchorClass : 'sf-with-ul',
        arrowClass  : 'sf-sub-indicator',
        shadowClass : 'sf-shadow'
    };
    sf.defaults = {
        hoverClass	: 'sfHover',
        pathClass	: 'overideThisToUse',
        pathLevels	: 1,
        delay		: 800,
        animation	: {opacity:'show'},
        speed		: 'normal',
        autoArrows	: true,
        dropShadows : true,
        disableHI	: false,		// true disables hoverIntent detection
        onInit		: function(){}, // callback functions
        onBeforeShow: function(){},
        onShow		: function(){},
        onHide		: function(){}
    };
    $.fn.extend({
        hideSuperfishUl : function(){
            var o = sf.op,
                not = (o.retainPath===true) ? o.$path : '';
            o.retainPath = false;
            var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
                .find('>ul').hide().css('visibility','hidden');
            o.onHide.call($ul);
            return this;
        },
        showSuperfishUl : function(){
            var o = sf.op,
                sh = sf.c.shadowClass+'-off',
                $ul = this.addClass(o.hoverClass)
                    .find('>ul:hidden').css('visibility','visible');
            sf.IE7fix.call($ul);
            o.onBeforeShow.call($ul);
            $ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
            return this;
        }
    });

})(jQuery);
;
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);;
ï»¿/**
 * hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 *
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne <brian@cherne.net>
 */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;

// This uses Superfish 1.4.8
// (http://users.tpg.com.au/j_birch/plugins/superfish)

// Add Superfish to all Nice menus with some basic options.
(function ($) {
    $(document).ready(function() {
        $('ul.nice-menu').superfish({
            // Apply a generic hover class.
            hoverClass: 'over',
            // Disable generation of arrow mark-up.
            autoArrows: false,
            // Disable drop shadows.
            dropShadows: false,
            // Mouse delay.
            delay: Drupal.settings.nice_menus_options.delay,
            // Animation speed.
            speed: Drupal.settings.nice_menus_options.speed
            // Add in Brandon Aaronâ€™s bgIframe plugin for IE select issues.
            // http://plugins.jquery.com/node/46/release
        }).find('ul').bgIframe({opacity:false});
        $('ul.nice-menu ul').css('display', 'none');
    });
})(jQuery);
;
(function ($) {

    $(document).ready(function() {

        // Accepts a string; returns the string with regex metacharacters escaped. The returned string
        // can safely be used at any point within a regex to match the provided literal string. Escaped
        // characters are [ ] { } ( ) * + ? - . , \ ^ $ # and whitespace. The character | is excluded
        // in this function as it's used to separate the domains names.
        RegExp.escapeDomains = function(text) {
            return (text) ? text.replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&") : '';
        }

        // Attach onclick event to document only and catch clicks on all elements.
        $(document.body).click(function(event) {
            // Catch the closest surrounding link of a clicked element.
            $(event.target).closest("a,area").each(function() {

                var ga = Drupal.settings.googleanalytics;
                // Expression to check for absolute internal links.
                var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
                // Expression to check for special links like gotwo.module /go/* links.
                var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
                // Expression to check for download links.
                var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");
                // Expression to check for the sites cross domains.
                var isCrossDomain = new RegExp("^(https?|ftp|news|nntp|telnet|irc|ssh|sftp|webcal):\/\/.*(" + RegExp.escapeDomains(ga.trackCrossDomains) + ")", "i");

                // Is the clicked URL internal?
                if (isInternal.test(this.href)) {
                    // Is download tracking activated and the file extension configured for download tracking?
                    if (ga.trackDownload && isDownload.test(this.href)) {
                        // Download link clicked.
                        var extension = isDownload.exec(this.href);
                        _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
                    }
                    else if (isInternalSpecial.test(this.href)) {
                        // Keep the internal URL for Google Analytics website overlay intact.
                        _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
                    }
                }
                else {
                    if (ga.trackMailto && $(this).is("a[href^=mailto:],area[href^=mailto:]")) {
                        // Mailto link clicked.
                        _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
                    }
                    else if (ga.trackOutbound && this.href) {
                        if (ga.trackDomainMode == 2 && isCrossDomain.test(this.href)) {
                            // Top-level cross domain clicked. document.location is handled by _link internally.
                            _gaq.push(["_link", this.href]);
                        }
                        else if (ga.trackOutboundAsPageview) {
                            // Track all external links as page views after URL cleanup.
                            // Currently required, if click should be tracked as goal.
                            _gaq.push(["_trackPageview", '/outbound/' + this.href.replace(/^(https?|ftp|news|nntp|telnet|irc|ssh|sftp|webcal):\/\//i, '').split('/').join('--')]);
                        }
                        else {
                            // External link clicked.
                            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
                        }
                    }
                }
            });
        });
    });

})(jQuery);
;




/*!
 * jQuery UI 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.7",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
    NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
    "position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
    if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
    "border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
    d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
    c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
    b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;

/*!
 * jQuery UI Widget 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
    a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
    e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
    this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
    widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
    enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;

/*
 * jQuery UI Accordion 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
    a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
    if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var f=d.closest(".ui-accordion-header");a.active=f.length?f:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
        function(g){return a._keydown(g)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(g){a._clickHandler.call(a,g,this);g.preventDefault()})},_createIcons:function(){var a=this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+
    a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex");
    this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
    b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,f=this.headers.index(a.target),g=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:g=this.headers[(f+1)%d];break;case b.LEFT:case b.UP:g=this.headers[(f-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
    a.preventDefault()}if(g){c(a.target).attr("tabIndex",-1);c(g).attr("tabIndex",0);g.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
    c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
    if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);
        a.next().addClass("ui-accordion-content-active")}h=a.next();f=this.active.next();g={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):h,oldContent:f};d=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(h,f,g,b,d)}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
        this.active.next().addClass("ui-accordion-content-active");var f=this.active.next(),g={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:f},h=this.active=c([]);this._toggle(h,f,g)}},_toggle:function(a,b,d,f,g){var h=this,e=h.options;h.toShow=a;h.toHide=b;h.data=d;var j=function(){if(h)return h._completed.apply(h,arguments)};h._trigger("changestart",null,h.data);h.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&f?{toShow:c([]),toHide:b,complete:j,
    down:g,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:g,autoHeight:e.autoHeight||e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;f=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!f[k]&&!c.easing[k])k="slide";f[k]||(f[k]=function(l){this.slide(l,{easing:k,duration:i||700})});
    f[k](d)}else{if(e.collapsible&&f)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.7",animations:{slide:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),f=0,g={},h={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){h[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);g[i]={value:j[1],
    unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(h,{step:function(j,i){if(i.prop=="height")f=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=f*g[i.prop].value+g[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",paddingTop:"hide",
    paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */

(function($) {

    var types = ['DOMMouseScroll', 'mousewheel'];

    if ($.event.fixHooks) {
        for ( var i=types.length; i; ) {
            $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i=types.length; i; ) {
                    this.addEventListener( types[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i=types.length; i; ) {
                    this.removeEventListener( types[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
        if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaY = 0;
            deltaX = -1*delta;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

})(jQuery);
;
/*!
 * jScrollPane - v2.0.0beta12 - 2012-06-21
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta12, Last updated: 2012-06-21*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2012 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue.
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta12 - (In progress)
// 2.0.0beta11 - (2012-05-14)
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($,window,undefined){

    $.fn.jScrollPane = function(settings)
    {
        // JScrollPane "class" - public methods are available through $('selector').data('jsp')
        function JScrollPane(elem, s)
        {
            var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
                percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
                verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
                verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
                horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
                reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
                wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
                originalElement = elem.clone(false, false).empty(),
                mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

            originalPadding = elem.css('paddingTop') + ' ' +
                elem.css('paddingRight') + ' ' +
                elem.css('paddingBottom') + ' ' +
                elem.css('paddingLeft');
            originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
                (parseInt(elem.css('paddingRight'), 10) || 0);

            function initialise(s)
            {

                var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
                    hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
                    maintainAtBottom = false, maintainAtRight = false;

                settings = s;

                if (pane === undefined) {
                    originalScrollTop = elem.scrollTop();
                    originalScrollLeft = elem.scrollLeft();

                    elem.css(
                        {
                            overflow: 'hidden',
                            padding: 0
                        }
                    );
                    // TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
                    // come back to it later and check once it is unhidden...
                    paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
                    paneHeight = elem.innerHeight();

                    elem.width(paneWidth);

                    pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
                    container = $('<div class="jspContainer" />')
                        .css({
                            'width': paneWidth + 'px',
                            'height': paneHeight + 'px'
                        }
                    ).append(pane).appendTo(elem);

                    /*
                     // Move any margins from the first and last children up to the container so they can still
                     // collapse with neighbouring elements as they would before jScrollPane
                     firstChild = pane.find(':first-child');
                     lastChild = pane.find(':last-child');
                     elem.css(
                     {
                     'margin-top': firstChild.css('margin-top'),
                     'margin-bottom': lastChild.css('margin-bottom')
                     }
                     );
                     firstChild.css('margin-top', 0);
                     lastChild.css('margin-bottom', 0);
                     */
                } else {
                    elem.css('width', '');

                    maintainAtBottom = settings.stickToBottom && isCloseToBottom();
                    maintainAtRight  = settings.stickToRight  && isCloseToRight();

                    hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

                    if (hasContainingSpaceChanged) {
                        paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
                        paneHeight = elem.innerHeight();
                        container.css({
                            width: paneWidth + 'px',
                            height: paneHeight + 'px'
                        });
                    }

                    // If nothing changed since last check...
                    if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
                        elem.width(paneWidth);
                        return;
                    }
                    previousContentWidth = contentWidth;

                    pane.css('width', '');
                    elem.width(paneWidth);

                    container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
                }

                pane.css('overflow', 'auto');
                if (s.contentWidth) {
                    contentWidth = s.contentWidth;
                } else {
                    contentWidth = pane[0].scrollWidth;
                }
                contentHeight = pane[0].scrollHeight;
                pane.css('overflow', '');

                percentInViewH = contentWidth / paneWidth;
                percentInViewV = contentHeight / paneHeight;
                isScrollableV = percentInViewV > 1;

                isScrollableH = percentInViewH > 1;

                //console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

                if (!(isScrollableH || isScrollableV)) {
                    elem.removeClass('jspScrollable');
                    pane.css({
                        top: 0,
                        width: container.width() - originalPaddingTotalWidth
                    });
                    removeMousewheel();
                    removeFocusHandler();
                    removeKeyboardNav();
                    removeClickOnTrack();
                } else {
                    elem.addClass('jspScrollable');

                    isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
                    if (isMaintainingPositon) {
                        lastContentX = contentPositionX();
                        lastContentY = contentPositionY();
                    }

                    initialiseVerticalScroll();
                    initialiseHorizontalScroll();
                    resizeScrollbars();

                    if (isMaintainingPositon) {
                        scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
                        scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
                    }

                    initFocusHandler();
                    initMousewheel();
                    initTouch();

                    if (settings.enableKeyboardNavigation) {
                        initKeyboardNav();
                    }
                    if (settings.clickOnTrack) {
                        initClickOnTrack();
                    }

                    observeHash();
                    if (settings.hijackInternalLinks) {
                        hijackInternalLinks();
                    }
                }

                if (settings.autoReinitialise && !reinitialiseInterval) {
                    reinitialiseInterval = setInterval(
                        function()
                        {
                            initialise(settings);
                        },
                        settings.autoReinitialiseDelay
                    );
                } else if (!settings.autoReinitialise && reinitialiseInterval) {
                    clearInterval(reinitialiseInterval);
                }

                originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
                originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

                elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
            }

            function initialiseVerticalScroll()
            {
                if (isScrollableV) {

                    container.append(
                        $('<div class="jspVerticalBar" />').append(
                            $('<div class="jspCap jspCapTop" />'),
                            $('<div class="jspTrack" />').append(
                                $('<div class="jspDrag" />').append(
                                    $('<div class="jspDragTop" />'),
                                    $('<div class="jspDragBottom" />')
                                )
                            ),
                            $('<div class="jspCap jspCapBottom" />')
                        )
                    );

                    verticalBar = container.find('>.jspVerticalBar');
                    verticalTrack = verticalBar.find('>.jspTrack');
                    verticalDrag = verticalTrack.find('>.jspDrag');

                    if (settings.showArrows) {
                        arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
                            'mousedown.jsp', getArrowScroll(0, -1)
                        ).bind('click.jsp', nil);
                        arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
                            'mousedown.jsp', getArrowScroll(0, 1)
                        ).bind('click.jsp', nil);
                        if (settings.arrowScrollOnHover) {
                            arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
                            arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
                        }

                        appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
                    }

                    verticalTrackHeight = paneHeight;
                    container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
                        function()
                        {
                            verticalTrackHeight -= $(this).outerHeight();
                        }
                    );


                    verticalDrag.hover(
                        function()
                        {
                            verticalDrag.addClass('jspHover');
                        },
                        function()
                        {
                            verticalDrag.removeClass('jspHover');
                        }
                    ).bind(
                        'mousedown.jsp',
                        function(e)
                        {
                            // Stop IE from allowing text selection
                            $('html').bind('dragstart.jsp selectstart.jsp', nil);

                            verticalDrag.addClass('jspActive');

                            var startY = e.pageY - verticalDrag.position().top;

                            $('html').bind(
                                'mousemove.jsp',
                                function(e)
                                {
                                    positionDragY(e.pageY - startY, false);
                                }
                            ).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
                            return false;
                        }
                    );
                    sizeVerticalScrollbar();
                }
            }

            function sizeVerticalScrollbar()
            {
                verticalTrack.height(verticalTrackHeight + 'px');
                verticalDragPosition = 0;
                scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

                // Make the pane thinner to allow for the vertical scrollbar
                pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

                // Add margin to the left of the pane if scrollbars are on that side (to position
                // the scrollbar on the left or right set it's left or right property in CSS)
                try {
                    if (verticalBar.position().left === 0) {
                        pane.css('margin-left', scrollbarWidth + 'px');
                    }
                } catch (err) {
                }
            }

            function initialiseHorizontalScroll()
            {
                if (isScrollableH) {

                    container.append(
                        $('<div class="jspHorizontalBar" />').append(
                            $('<div class="jspCap jspCapLeft" />'),
                            $('<div class="jspTrack" />').append(
                                $('<div class="jspDrag" />').append(
                                    $('<div class="jspDragLeft" />'),
                                    $('<div class="jspDragRight" />')
                                )
                            ),
                            $('<div class="jspCap jspCapRight" />')
                        )
                    );

                    horizontalBar = container.find('>.jspHorizontalBar');
                    horizontalTrack = horizontalBar.find('>.jspTrack');
                    horizontalDrag = horizontalTrack.find('>.jspDrag');

                    if (settings.showArrows) {
                        arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
                            'mousedown.jsp', getArrowScroll(-1, 0)
                        ).bind('click.jsp', nil);
                        arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
                            'mousedown.jsp', getArrowScroll(1, 0)
                        ).bind('click.jsp', nil);
                        if (settings.arrowScrollOnHover) {
                            arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
                            arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
                        }
                        appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
                    }

                    horizontalDrag.hover(
                        function()
                        {
                            horizontalDrag.addClass('jspHover');
                        },
                        function()
                        {
                            horizontalDrag.removeClass('jspHover');
                        }
                    ).bind(
                        'mousedown.jsp',
                        function(e)
                        {
                            // Stop IE from allowing text selection
                            $('html').bind('dragstart.jsp selectstart.jsp', nil);

                            horizontalDrag.addClass('jspActive');

                            var startX = e.pageX - horizontalDrag.position().left;

                            $('html').bind(
                                'mousemove.jsp',
                                function(e)
                                {
                                    positionDragX(e.pageX - startX, false);
                                }
                            ).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
                            return false;
                        }
                    );
                    horizontalTrackWidth = container.innerWidth();
                    sizeHorizontalScrollbar();
                }
            }

            function sizeHorizontalScrollbar()
            {
                container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
                    function()
                    {
                        horizontalTrackWidth -= $(this).outerWidth();
                    }
                );

                horizontalTrack.width(horizontalTrackWidth + 'px');
                horizontalDragPosition = 0;
            }

            function resizeScrollbars()
            {
                if (isScrollableH && isScrollableV) {
                    var horizontalTrackHeight = horizontalTrack.outerHeight(),
                        verticalTrackWidth = verticalTrack.outerWidth();
                    verticalTrackHeight -= horizontalTrackHeight;
                    $(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
                        function()
                        {
                            horizontalTrackWidth += $(this).outerWidth();
                        }
                    );
                    horizontalTrackWidth -= verticalTrackWidth;
                    paneHeight -= verticalTrackWidth;
                    paneWidth -= horizontalTrackHeight;
                    horizontalTrack.parent().append(
                        $('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
                    );
                    sizeVerticalScrollbar();
                    sizeHorizontalScrollbar();
                }
                // reflow content
                if (isScrollableH) {
                    pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
                }
                contentHeight = pane.outerHeight();
                percentInViewV = contentHeight / paneHeight;

                if (isScrollableH) {
                    horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
                    if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
                        horizontalDragWidth = settings.horizontalDragMaxWidth;
                    } else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
                        horizontalDragWidth = settings.horizontalDragMinWidth;
                    }
                    horizontalDrag.width(horizontalDragWidth + 'px');
                    dragMaxX = horizontalTrackWidth - horizontalDragWidth;
                    _positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
                }
                if (isScrollableV) {
                    verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
                    if (verticalDragHeight > settings.verticalDragMaxHeight) {
                        verticalDragHeight = settings.verticalDragMaxHeight;
                    } else if (verticalDragHeight < settings.verticalDragMinHeight) {
                        verticalDragHeight = settings.verticalDragMinHeight;
                    }
                    verticalDrag.height(verticalDragHeight + 'px');
                    dragMaxY = verticalTrackHeight - verticalDragHeight;
                    _positionDragY(verticalDragPosition); // To update the state for the arrow buttons
                }
            }

            function appendArrows(ele, p, a1, a2)
            {
                var p1 = "before", p2 = "after", aTemp;

                // Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
                // at the top or the bottom of the bar?
                if (p == "os") {
                    p = /Mac/.test(navigator.platform) ? "after" : "split";
                }
                if (p == p1) {
                    p2 = p;
                } else if (p == p2) {
                    p1 = p;
                    aTemp = a1;
                    a1 = a2;
                    a2 = aTemp;
                }

                ele[p1](a1)[p2](a2);
            }

            function getArrowScroll(dirX, dirY, ele)
            {
                return function()
                {
                    arrowScroll(dirX, dirY, this, ele);
                    this.blur();
                    return false;
                };
            }

            function arrowScroll(dirX, dirY, arrow, ele)
            {
                arrow = $(arrow).addClass('jspActive');

                var eve,
                    scrollTimeout,
                    isFirst = true,
                    doScroll = function()
                    {
                        if (dirX !== 0) {
                            jsp.scrollByX(dirX * settings.arrowButtonSpeed);
                        }
                        if (dirY !== 0) {
                            jsp.scrollByY(dirY * settings.arrowButtonSpeed);
                        }
                        scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
                        isFirst = false;
                    };

                doScroll();

                eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
                ele = ele || $('html');
                ele.bind(
                    eve,
                    function()
                    {
                        arrow.removeClass('jspActive');
                        scrollTimeout && clearTimeout(scrollTimeout);
                        scrollTimeout = null;
                        ele.unbind(eve);
                    }
                );
            }

            function initClickOnTrack()
            {
                removeClickOnTrack();
                if (isScrollableV) {
                    verticalTrack.bind(
                        'mousedown.jsp',
                        function(e)
                        {
                            if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                                var clickedTrack = $(this),
                                    offset = clickedTrack.offset(),
                                    direction = e.pageY - offset.top - verticalDragPosition,
                                    scrollTimeout,
                                    isFirst = true,
                                    doScroll = function()
                                    {
                                        var offset = clickedTrack.offset(),
                                            pos = e.pageY - offset.top - verticalDragHeight / 2,
                                            contentDragY = paneHeight * settings.scrollPagePercent,
                                            dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
                                        if (direction < 0) {
                                            if (verticalDragPosition - dragY > pos) {
                                                jsp.scrollByY(-contentDragY);
                                            } else {
                                                positionDragY(pos);
                                            }
                                        } else if (direction > 0) {
                                            if (verticalDragPosition + dragY < pos) {
                                                jsp.scrollByY(contentDragY);
                                            } else {
                                                positionDragY(pos);
                                            }
                                        } else {
                                            cancelClick();
                                            return;
                                        }
                                        scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                                        isFirst = false;
                                    },
                                    cancelClick = function()
                                    {
                                        scrollTimeout && clearTimeout(scrollTimeout);
                                        scrollTimeout = null;
                                        $(document).unbind('mouseup.jsp', cancelClick);
                                    };
                                doScroll();
                                $(document).bind('mouseup.jsp', cancelClick);
                                return false;
                            }
                        }
                    );
                }

                if (isScrollableH) {
                    horizontalTrack.bind(
                        'mousedown.jsp',
                        function(e)
                        {
                            if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                                var clickedTrack = $(this),
                                    offset = clickedTrack.offset(),
                                    direction = e.pageX - offset.left - horizontalDragPosition,
                                    scrollTimeout,
                                    isFirst = true,
                                    doScroll = function()
                                    {
                                        var offset = clickedTrack.offset(),
                                            pos = e.pageX - offset.left - horizontalDragWidth / 2,
                                            contentDragX = paneWidth * settings.scrollPagePercent,
                                            dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
                                        if (direction < 0) {
                                            if (horizontalDragPosition - dragX > pos) {
                                                jsp.scrollByX(-contentDragX);
                                            } else {
                                                positionDragX(pos);
                                            }
                                        } else if (direction > 0) {
                                            if (horizontalDragPosition + dragX < pos) {
                                                jsp.scrollByX(contentDragX);
                                            } else {
                                                positionDragX(pos);
                                            }
                                        } else {
                                            cancelClick();
                                            return;
                                        }
                                        scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                                        isFirst = false;
                                    },
                                    cancelClick = function()
                                    {
                                        scrollTimeout && clearTimeout(scrollTimeout);
                                        scrollTimeout = null;
                                        $(document).unbind('mouseup.jsp', cancelClick);
                                    };
                                doScroll();
                                $(document).bind('mouseup.jsp', cancelClick);
                                return false;
                            }
                        }
                    );
                }
            }

            function removeClickOnTrack()
            {
                if (horizontalTrack) {
                    horizontalTrack.unbind('mousedown.jsp');
                }
                if (verticalTrack) {
                    verticalTrack.unbind('mousedown.jsp');
                }
            }

            function cancelDrag()
            {
                $('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

                if (verticalDrag) {
                    verticalDrag.removeClass('jspActive');
                }
                if (horizontalDrag) {
                    horizontalDrag.removeClass('jspActive');
                }
            }

            function positionDragY(destY, animate)
            {
                if (!isScrollableV) {
                    return;
                }
                if (destY < 0) {
                    destY = 0;
                } else if (destY > dragMaxY) {
                    destY = dragMaxY;
                }

                // can't just check if(animate) because false is a valid value that could be passed in...
                if (animate === undefined) {
                    animate = settings.animateScroll;
                }
                if (animate) {
                    jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
                } else {
                    verticalDrag.css('top', destY);
                    _positionDragY(destY);
                }

            }

            function _positionDragY(destY)
            {
                if (destY === undefined) {
                    destY = verticalDrag.position().top;
                }

                container.scrollTop(0);
                verticalDragPosition = destY;

                var isAtTop = verticalDragPosition === 0,
                    isAtBottom = verticalDragPosition == dragMaxY,
                    percentScrolled = destY/ dragMaxY,
                    destTop = -percentScrolled * (contentHeight - paneHeight);

                if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
                    wasAtTop = isAtTop;
                    wasAtBottom = isAtBottom;
                    elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
                }

                updateVerticalArrows(isAtTop, isAtBottom);
                pane.css('top', destTop);
                elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
            }

            function positionDragX(destX, animate)
            {
                if (!isScrollableH) {
                    return;
                }
                if (destX < 0) {
                    destX = 0;
                } else if (destX > dragMaxX) {
                    destX = dragMaxX;
                }

                if (animate === undefined) {
                    animate = settings.animateScroll;
                }
                if (animate) {
                    jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
                } else {
                    horizontalDrag.css('left', destX);
                    _positionDragX(destX);
                }
            }

            function _positionDragX(destX)
            {
                if (destX === undefined) {
                    destX = horizontalDrag.position().left;
                }

                container.scrollTop(0);
                horizontalDragPosition = destX;

                var isAtLeft = horizontalDragPosition === 0,
                    isAtRight = horizontalDragPosition == dragMaxX,
                    percentScrolled = destX / dragMaxX,
                    destLeft = -percentScrolled * (contentWidth - paneWidth);

                if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
                    wasAtLeft = isAtLeft;
                    wasAtRight = isAtRight;
                    elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
                }

                updateHorizontalArrows(isAtLeft, isAtRight);
                pane.css('left', destLeft);
                elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
            }

            function updateVerticalArrows(isAtTop, isAtBottom)
            {
                if (settings.showArrows) {
                    arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
                    arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
                }
            }

            function updateHorizontalArrows(isAtLeft, isAtRight)
            {
                if (settings.showArrows) {
                    arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
                    arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
                }
            }

            function scrollToY(destY, animate)
            {
                var percentScrolled = destY / (contentHeight - paneHeight);
                positionDragY(percentScrolled * dragMaxY, animate);
            }

            function scrollToX(destX, animate)
            {
                var percentScrolled = destX / (contentWidth - paneWidth);
                positionDragX(percentScrolled * dragMaxX, animate);
            }

            function scrollToElement(ele, stickToTop, animate)
            {
                var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

                // Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
                // errors from the lookup...
                try {
                    e = $(ele);
                } catch (err) {
                    return;
                }
                eleHeight = e.outerHeight();
                eleWidth= e.outerWidth();

                container.scrollTop(0);
                container.scrollLeft(0);

                // loop through parents adding the offset top of any elements that are relatively positioned between
                // the focused element and the jspPane so we can get the true distance from the top
                // of the focused element to the top of the scrollpane...
                while (!e.is('.jspPane')) {
                    eleTop += e.position().top;
                    eleLeft += e.position().left;
                    e = e.offsetParent();
                    if (/^body|html$/i.test(e[0].nodeName)) {
                        // we ended up too high in the document structure. Quit!
                        return;
                    }
                }

                viewportTop = contentPositionY();
                maxVisibleEleTop = viewportTop + paneHeight;
                if (eleTop < viewportTop || stickToTop) { // element is above viewport
                    destY = eleTop - settings.verticalGutter;
                } else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
                    destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
                }
                if (destY) {
                    scrollToY(destY, animate);
                }

                viewportLeft = contentPositionX();
                maxVisibleEleLeft = viewportLeft + paneWidth;
                if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
                    destX = eleLeft - settings.horizontalGutter;
                } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
                    destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
                }
                if (destX) {
                    scrollToX(destX, animate);
                }

            }

            function contentPositionX()
            {
                return -pane.position().left;
            }

            function contentPositionY()
            {
                return -pane.position().top;
            }

            function isCloseToBottom()
            {
                var scrollableHeight = contentHeight - paneHeight;
                return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
            }

            function isCloseToRight()
            {
                var scrollableWidth = contentWidth - paneWidth;
                return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
            }

            function initMousewheel()
            {
                container.unbind(mwEvent).bind(
                    mwEvent,
                    function (event, delta, deltaX, deltaY) {
                        var dX = horizontalDragPosition, dY = verticalDragPosition;
                        jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
                        // return true if there was no movement so rest of screen can scroll
                        return dX == horizontalDragPosition && dY == verticalDragPosition;
                    }
                );
            }

            function removeMousewheel()
            {
                container.unbind(mwEvent);
            }

            function nil()
            {
                return false;
            }

            function initFocusHandler()
            {
                pane.find(':input,a').unbind('focus.jsp').bind(
                    'focus.jsp',
                    function(e)
                    {
                        scrollToElement(e.target, false);
                    }
                );
            }

            function removeFocusHandler()
            {
                pane.find(':input,a').unbind('focus.jsp');
            }

            function initKeyboardNav()
            {
                var keyDown, elementHasScrolled, validParents = [];
                isScrollableH && validParents.push(horizontalBar[0]);
                isScrollableV && validParents.push(verticalBar[0]);

                // IE also focuses elements that don't have tabindex set.
                pane.focus(
                    function()
                    {
                        elem.focus();
                    }
                );

                elem.attr('tabindex', 0)
                    .unbind('keydown.jsp keypress.jsp')
                    .bind(
                    'keydown.jsp',
                    function(e)
                    {
                        if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
                            return;
                        }
                        var dX = horizontalDragPosition, dY = verticalDragPosition;
                        switch(e.keyCode) {
                            case 40: // down
                            case 38: // up
                            case 34: // page down
                            case 32: // space
                            case 33: // page up
                            case 39: // right
                            case 37: // left
                                keyDown = e.keyCode;
                                keyDownHandler();
                                break;
                            case 35: // end
                                scrollToY(contentHeight - paneHeight);
                                keyDown = null;
                                break;
                            case 36: // home
                                scrollToY(0);
                                keyDown = null;
                                break;
                        }

                        elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
                        return !elementHasScrolled;
                    }
                ).bind(
                    'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
                    function(e)
                    {
                        if (e.keyCode == keyDown) {
                            keyDownHandler();
                        }
                        return !elementHasScrolled;
                    }
                );

                if (settings.hideFocus) {
                    elem.css('outline', 'none');
                    if ('hideFocus' in container[0]){
                        elem.attr('hideFocus', true);
                    }
                } else {
                    elem.css('outline', '');
                    if ('hideFocus' in container[0]){
                        elem.attr('hideFocus', false);
                    }
                }

                function keyDownHandler()
                {
                    var dX = horizontalDragPosition, dY = verticalDragPosition;
                    switch(keyDown) {
                        case 40: // down
                            jsp.scrollByY(settings.keyboardSpeed, false);
                            break;
                        case 38: // up
                            jsp.scrollByY(-settings.keyboardSpeed, false);
                            break;
                        case 34: // page down
                        case 32: // space
                            jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
                            break;
                        case 33: // page up
                            jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
                            break;
                        case 39: // right
                            jsp.scrollByX(settings.keyboardSpeed, false);
                            break;
                        case 37: // left
                            jsp.scrollByX(-settings.keyboardSpeed, false);
                            break;
                    }

                    elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
                    return elementHasScrolled;
                }
            }

            function removeKeyboardNav()
            {
                elem.attr('tabindex', '-1')
                    .removeAttr('tabindex')
                    .unbind('keydown.jsp keypress.jsp');
            }

            function observeHash()
            {
                if (location.hash && location.hash.length > 1) {
                    var e,
                        retryInt,
                        hash = escape(location.hash.substr(1)) // hash must be escaped to prevent XSS
                        ;
                    try {
                        e = $('#' + hash + ', a[name="' + hash + '"]');
                    } catch (err) {
                        return;
                    }

                    if (e.length && pane.find(hash)) {
                        // nasty workaround but it appears to take a little while before the hash has done its thing
                        // to the rendered page so we just wait until the container's scrollTop has been messed up.
                        if (container.scrollTop() === 0) {
                            retryInt = setInterval(
                                function()
                                {
                                    if (container.scrollTop() > 0) {
                                        scrollToElement(e, true);
                                        $(document).scrollTop(container.position().top);
                                        clearInterval(retryInt);
                                    }
                                },
                                50
                            );
                        } else {
                            scrollToElement(e, true);
                            $(document).scrollTop(container.position().top);
                        }
                    }
                }
            }

            function hijackInternalLinks()
            {
                // only register the link handler once
                if ($(document.body).data('jspHijack')) {
                    return;
                }

                // remember that the handler was bound
                $(document.body).data('jspHijack', true);

                // use live handler to also capture newly created links
                $(document.body).delegate('a[href*=#]', 'click', function(event) {
                    // does the link point to the same page?
                    // this also takes care of cases with a <base>-Tag or Links not starting with the hash #
                    // e.g. <a href="index.html#test"> when the current url already is index.html
                    var href = this.href.substr(0, this.href.indexOf('#')),
                        locationHref = location.href,
                        hash,
                        element,
                        container,
                        jsp,
                        scrollTop,
                        elementTop;
                    if (location.href.indexOf('#') !== -1) {
                        locationHref = location.href.substr(0, location.href.indexOf('#'));
                    }
                    if (href !== locationHref) {
                        // the link points to another page
                        return;
                    }

                    // check if jScrollPane should handle this click event
                    hash = escape(this.href.substr(this.href.indexOf('#') + 1));

                    // find the element on the page
                    element;
                    try {
                        element = $('#' + hash + ', a[name="' + hash + '"]');
                    } catch (e) {
                        // hash is not a valid jQuery identifier
                        return;
                    }

                    if (!element.length) {
                        // this link does not point to an element on this page
                        return;
                    }

                    container = element.closest('.jspScrollable');
                    jsp = container.data('jsp');

                    // jsp might be another jsp instance than the one, that bound this event
                    // remember: this event is only bound once for all instances.
                    jsp.scrollToElement(element, true);

                    if (container[0].scrollIntoView) {
                        // also scroll to the top of the container (if it is not visible)
                        scrollTop = $(window).scrollTop();
                        elementTop = element.offset().top;
                        if (elementTop < scrollTop || elementTop > scrollTop + $(window).height()) {
                            container[0].scrollIntoView();
                        }
                    }

                    // jsp handled this event, prevent the browser default (scrolling :P)
                    event.preventDefault();
                });
            }

            // Init touch on iPad, iPhone, iPod, Android
            function initTouch()
            {
                var startX,
                    startY,
                    touchStartX,
                    touchStartY,
                    moved,
                    moving = false;

                container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
                    'touchstart.jsp',
                    function(e)
                    {
                        var touch = e.originalEvent.touches[0];
                        startX = contentPositionX();
                        startY = contentPositionY();
                        touchStartX = touch.pageX;
                        touchStartY = touch.pageY;
                        moved = false;
                        moving = true;
                    }
                ).bind(
                    'touchmove.jsp',
                    function(ev)
                    {
                        if(!moving) {
                            return;
                        }

                        var touchPos = ev.originalEvent.touches[0],
                            dX = horizontalDragPosition, dY = verticalDragPosition;

                        jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);

                        moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;

                        // return true if there was no movement so rest of screen can scroll
                        return dX == horizontalDragPosition && dY == verticalDragPosition;
                    }
                ).bind(
                    'touchend.jsp',
                    function(e)
                    {
                        moving = false;
                        /*if(moved) {
                         return false;
                         }*/
                    }
                ).bind(
                    'click.jsp-touchclick',
                    function(e)
                    {
                        if(moved) {
                            moved = false;
                            return false;
                        }
                    }
                );
            }

            function destroy(){
                var currentY = contentPositionY(),
                    currentX = contentPositionX();
                elem.removeClass('jspScrollable').unbind('.jsp');
                elem.replaceWith(originalElement.append(pane.children()));
                originalElement.scrollTop(currentY);
                originalElement.scrollLeft(currentX);

                // clear reinitialize timer if active
                if (reinitialiseInterval) {
                    clearInterval(reinitialiseInterval);
                }
            }

            // Public API
            $.extend(
                jsp,
                {
                    // Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
                    // was initialised). The settings object which is passed in will override any settings from the
                    // previous time it was initialised - if you don't pass any settings then the ones from the previous
                    // initialisation will be used.
                    reinitialise: function(s)
                    {
                        s = $.extend({}, settings, s);
                        initialise(s);
                    },
                    // Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
                    // that it can be seen within the viewport. If stickToTop is true then the element will appear at
                    // the top of the viewport, if it is false then the viewport will scroll as little as possible to
                    // show the element. You can also specify if you want animation to occur. If you don't provide this
                    // argument then the animateScroll value from the settings object is used instead.
                    scrollToElement: function(ele, stickToTop, animate)
                    {
                        scrollToElement(ele, stickToTop, animate);
                    },
                    // Scrolls the pane so that the specified co-ordinates within the content are at the top left
                    // of the viewport. animate is optional and if not passed then the value of animateScroll from
                    // the settings object this jScrollPane was initialised with is used.
                    scrollTo: function(destX, destY, animate)
                    {
                        scrollToX(destX, animate);
                        scrollToY(destY, animate);
                    },
                    // Scrolls the pane so that the specified co-ordinate within the content is at the left of the
                    // viewport. animate is optional and if not passed then the value of animateScroll from the settings
                    // object this jScrollPane was initialised with is used.
                    scrollToX: function(destX, animate)
                    {
                        scrollToX(destX, animate);
                    },
                    // Scrolls the pane so that the specified co-ordinate within the content is at the top of the
                    // viewport. animate is optional and if not passed then the value of animateScroll from the settings
                    // object this jScrollPane was initialised with is used.
                    scrollToY: function(destY, animate)
                    {
                        scrollToY(destY, animate);
                    },
                    // Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
                    // is optional and if not passed then the value of animateScroll from the settings object this
                    // jScrollPane was initialised with is used.
                    scrollToPercentX: function(destPercentX, animate)
                    {
                        scrollToX(destPercentX * (contentWidth - paneWidth), animate);
                    },
                    // Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
                    // is optional and if not passed then the value of animateScroll from the settings object this
                    // jScrollPane was initialised with is used.
                    scrollToPercentY: function(destPercentY, animate)
                    {
                        scrollToY(destPercentY * (contentHeight - paneHeight), animate);
                    },
                    // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
                    // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
                    scrollBy: function(deltaX, deltaY, animate)
                    {
                        jsp.scrollByX(deltaX, animate);
                        jsp.scrollByY(deltaY, animate);
                    },
                    // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
                    // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
                    scrollByX: function(deltaX, animate)
                    {
                        var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
                            percentScrolled = destX / (contentWidth - paneWidth);
                        positionDragX(percentScrolled * dragMaxX, animate);
                    },
                    // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
                    // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
                    scrollByY: function(deltaY, animate)
                    {
                        var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
                            percentScrolled = destY / (contentHeight - paneHeight);
                        positionDragY(percentScrolled * dragMaxY, animate);
                    },
                    // Positions the horizontal drag at the specified x position (and updates the viewport to reflect
                    // this). animate is optional and if not passed then the value of animateScroll from the settings
                    // object this jScrollPane was initialised with is used.
                    positionDragX: function(x, animate)
                    {
                        positionDragX(x, animate);
                    },
                    // Positions the vertical drag at the specified y position (and updates the viewport to reflect
                    // this). animate is optional and if not passed then the value of animateScroll from the settings
                    // object this jScrollPane was initialised with is used.
                    positionDragY: function(y, animate)
                    {
                        positionDragY(y, animate);
                    },
                    // This method is called when jScrollPane is trying to animate to a new position. You can override
                    // it if you want to provide advanced animation functionality. It is passed the following arguments:
                    //  * ele          - the element whose position is being animated
                    //  * prop         - the property that is being animated
                    //  * value        - the value it's being animated to
                    //  * stepCallback - a function that you must execute each time you update the value of the property
                    // You can use the default implementation (below) as a starting point for your own implementation.
                    animate: function(ele, prop, value, stepCallback)
                    {
                        var params = {};
                        params[prop] = value;
                        ele.animate(
                            params,
                            {
                                'duration'	: settings.animateDuration,
                                'easing'	: settings.animateEase,
                                'queue'		: false,
                                'step'		: stepCallback
                            }
                        );
                    },
                    // Returns the current x position of the viewport with regards to the content pane.
                    getContentPositionX: function()
                    {
                        return contentPositionX();
                    },
                    // Returns the current y position of the viewport with regards to the content pane.
                    getContentPositionY: function()
                    {
                        return contentPositionY();
                    },
                    // Returns the width of the content within the scroll pane.
                    getContentWidth: function()
                    {
                        return contentWidth;
                    },
                    // Returns the height of the content within the scroll pane.
                    getContentHeight: function()
                    {
                        return contentHeight;
                    },
                    // Returns the horizontal position of the viewport within the pane content.
                    getPercentScrolledX: function()
                    {
                        return contentPositionX() / (contentWidth - paneWidth);
                    },
                    // Returns the vertical position of the viewport within the pane content.
                    getPercentScrolledY: function()
                    {
                        return contentPositionY() / (contentHeight - paneHeight);
                    },
                    // Returns whether or not this scrollpane has a horizontal scrollbar.
                    getIsScrollableH: function()
                    {
                        return isScrollableH;
                    },
                    // Returns whether or not this scrollpane has a vertical scrollbar.
                    getIsScrollableV: function()
                    {
                        return isScrollableV;
                    },
                    // Gets a reference to the content pane. It is important that you use this method if you want to
                    // edit the content of your jScrollPane as if you access the element directly then you may have some
                    // problems (as your original element has had additional elements for the scrollbars etc added into
                    // it).
                    getContentPane: function()
                    {
                        return pane;
                    },
                    // Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
                    // animateScroll value from settings is used instead.
                    scrollToBottom: function(animate)
                    {
                        positionDragY(dragMaxY, animate);
                    },
                    // Hijacks the links on the page which link to content inside the scrollpane. If you have changed
                    // the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
                    // contents of your scroll pane will work then call this function.
                    hijackInternalLinks: $.noop,
                    // Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
                    // initialised.
                    destroy: function()
                    {
                        destroy();
                    }
                }
            );

            initialise(s);
        }

        // Pluginifying code...
        settings = $.extend({}, $.fn.jScrollPane.defaults, settings);

        // Apply default speed
        $.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
            settings[this] = settings[this] || settings.speed;
        });

        return this.each(
            function()
            {
                var elem = $(this), jspApi = elem.data('jsp');
                if (jspApi) {
                    jspApi.reinitialise(settings);
                } else {
                    $("script",elem).filter('[type=text/javascript],not([type])').remove();
                    jspApi = new JScrollPane(elem, settings);
                    elem.data('jsp', jspApi);
                }
            }
        );
    };

    $.fn.jScrollPane.defaults = {
        showArrows					: false,
        maintainPosition			: true,
        stickToBottom				: false,
        stickToRight				: false,
        clickOnTrack				: true,
        autoReinitialise			: false,
        autoReinitialiseDelay		: 500,
        verticalDragMinHeight		: 0,
        verticalDragMaxHeight		: 99999,
        horizontalDragMinWidth		: 0,
        horizontalDragMaxWidth		: 99999,
        contentWidth				: undefined,
        animateScroll				: false,
        animateDuration				: 300,
        animateEase					: 'linear',
        hijackInternalLinks			: false,
        verticalGutter				: 4,
        horizontalGutter			: 4,
        mouseWheelSpeed				: 0,
        arrowButtonSpeed			: 0,
        arrowRepeatFreq				: 50,
        arrowScrollOnHover			: false,
        trackClickSpeed				: 0,
        trackClickRepeatFreq		: 70,
        verticalArrowPositions		: 'split',
        horizontalArrowPositions	: 'split',
        enableKeyboardNavigation	: true,
        hideFocus					: false,
        keyboardSpeed				: 0,
        initialDelay                : 300,        // Delay before starting repeating
        speed						: 30,		// Default speed when others falsey
        scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
    };

})(jQuery,this);

;
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 *
 * overlay/overlay.js
 * overlay/overlay.apple.js
 * tooltip/tooltip.js
 * tooltip/tooltip.dynamic.js
 * tooltip/tooltip.slide.js
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/
 *
 */
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.overlay={addEffect:function(a,b,d){c[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var b=[],c={};a.tools.overlay.addEffect("default",function(b,c){var d=this.getConf(),e=a(window);d.fixed||(b.top+=e.scrollTop(),b.left+=e.scrollLeft()),b.position=d.fixed?"fixed":"absolute",this.getOverlay().css(b).fadeIn(d.speed,c)},function(a){this.getOverlay().fadeOut(this.getConf().closeSpeed,a)});function d(d,e){var f=this,g=d.add(f),h=a(window),i,j,k,l=a.tools.expose&&(e.mask||e.expose),m=Math.random().toString().slice(10);l&&(typeof l=="string"&&(l={color:l}),l.closeOnClick=l.closeOnEsc=!1);var n=e.target||d.attr("rel");j=n?a(n):null||d;if(!j.length)throw"Could not find Overlay: "+n;d&&d.index(j)==-1&&d.click(function(a){f.load(a);return a.preventDefault()}),a.extend(f,{load:function(d){if(f.isOpened())return f;var i=c[e.effect];if(!i)throw"Overlay: cannot find effect : \""+e.effect+"\"";e.oneInstance&&a.each(b,function(){this.close(d)}),d=d||a.Event(),d.type="onBeforeLoad",g.trigger(d);if(d.isDefaultPrevented())return f;k=!0,l&&a(j).expose(l);var n=e.top,o=e.left,p=j.outerWidth({margin:!0}),q=j.outerHeight({margin:!0});typeof n=="string"&&(n=n=="center"?Math.max((h.height()-q)/2,0):parseInt(n,10)/100*h.height()),o=="center"&&(o=Math.max((h.width()-p)/2,0)),i[0].call(f,{top:n,left:o},function(){k&&(d.type="onLoad",g.trigger(d))}),l&&e.closeOnClick&&a.mask.getMask().one("click",f.close),e.closeOnClick&&a(document).on("click."+m,function(b){a(b.target).parents(j).length||f.close(b)}),e.closeOnEsc&&a(document).on("keydown."+m,function(a){a.keyCode==27&&f.close(a)});return f},close:function(b){if(!f.isOpened())return f;b=b||a.Event(),b.type="onBeforeClose",g.trigger(b);if(!b.isDefaultPrevented()){k=!1,c[e.effect][1].call(f,function(){b.type="onClose",g.trigger(b)}),a(document).off("click."+m+" keydown."+m),l&&a.mask.close();return f}},getOverlay:function(){return j},getTrigger:function(){return d},getClosers:function(){return i},isOpened:function(){return k},getConf:function(){return e}}),a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}}),i=j.find(e.close||".close"),!i.length&&!e.close&&(i=a("<a class=\"close\"></a>"),j.prepend(i)),i.click(function(a){f.close(a)}),e.load&&f.load()}a.fn.overlay=function(c){var e=this.data("overlay");if(e)return e;a.isFunction(c)&&(c={onBeforeLoad:c}),c=a.extend(!0,{},a.tools.overlay.conf,c),this.each(function(){e=new d(a(this),c),b.push(e),a(this).data("overlay",e)});return c.api?e:this}})(jQuery);
(function(a){var b=a.tools.overlay,c=a(window);a.extend(b.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});function d(a){var b=a.offset();return{top:b.top+a.height()/2,left:b.left+a.width()/2}}var e=function(b,e){var f=this.getOverlay(),g=this.getConf(),h=this.getTrigger(),i=this,j=f.outerWidth({margin:!0}),k=f.data("img"),l=g.fixed?"fixed":"absolute";if(!k){var m=f.css("backgroundImage");if(!m)throw"background-image CSS property not set for overlay";m=m.slice(m.indexOf("(")+1,m.indexOf(")")).replace(/\"/g,""),f.css("backgroundImage","none"),k=a("<img src=\""+m+"\"/>"),k.css({border:0,display:"none"}).width(j),a("body").append(k),f.data("img",k)}var n=g.start.top||Math.round(c.height()/2),o=g.start.left||Math.round(c.width()/2);if(h){var p=d(h);n=p.top,o=p.left}g.fixed?(n-=c.scrollTop(),o-=c.scrollLeft()):(b.top+=c.scrollTop(),b.left+=c.scrollLeft()),k.css({position:"absolute",top:n,left:o,width:0,zIndex:g.zIndex}).show(),b.position=l,f.css(b),k.animate({top:b.top,left:b.left,width:j},g.speed,function(){f.css("zIndex",g.zIndex+1).fadeIn(g.fadeInSpeed,function(){i.isOpened()&&!a(this).index(f)?e.call():f.hide()})}).css("position",l)},f=function(b){var e=this.getOverlay().hide(),f=this.getConf(),g=this.getTrigger(),h=e.data("img"),i={top:f.start.top,left:f.start.left,width:0};g&&a.extend(i,d(g)),f.fixed&&h.css({position:"absolute"}).animate({top:"+="+c.scrollTop(),left:"+="+c.scrollLeft()},0),h.animate(i,f.closeSpeed,b)};b.addEffect("apple",e,f)})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.on(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).on(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.off(p[0]).on(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.off(p[1]).on(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);
(function(a){var b=a.tools.tooltip;b.dynamic={conf:{classNames:"top right bottom left"}};function c(b){var c=a(window),d=c.width()+c.scrollLeft(),e=c.height()+c.scrollTop();return[b.offset().top<=c.scrollTop(),d<=b.offset().left+b.width(),e<=b.offset().top+b.height(),c.scrollLeft()>=b.offset().left]}function d(a){var b=a.length;while(b--)if(a[b])return!1;return!0}a.fn.dynamic=function(e){typeof e=="number"&&(e={speed:e}),e=a.extend({},b.dynamic.conf,e);var f=a.extend(!0,{},e),g=e.classNames.split(/\s/),h;this.each(function(){var b=a(this).tooltip().onBeforeShow(function(b,e){var i=this.getTip(),j=this.getConf();h||(h=[j.position[0],j.position[1],j.offset[0],j.offset[1],a.extend({},j)]),a.extend(j,h[4]),j.position=[h[0],h[1]],j.offset=[h[2],h[3]],i.css({visibility:"hidden",position:"absolute",top:e.top,left:e.left}).show();var k=a.extend(!0,{},f),l=c(i);if(!d(l)){l[2]&&(a.extend(j,k.top),j.position[0]="top",i.addClass(g[0])),l[3]&&(a.extend(j,k.right),j.position[1]="right",i.addClass(g[1])),l[0]&&(a.extend(j,k.bottom),j.position[0]="bottom",i.addClass(g[2])),l[1]&&(a.extend(j,k.left),j.position[1]="left",i.addClass(g[3]));if(l[0]||l[2])j.offset[0]*=-1;if(l[1]||l[3])j.offset[1]*=-1}i.css({visibility:"visible"}).hide()});b.onBeforeShow(function(){var a=this.getConf(),b=this.getTip();setTimeout(function(){a.position=[h[0],h[1]],a.offset=[h[2],h[3]]},0)}),b.onHide(function(){var a=this.getTip();a.removeClass(e.classNames)}),ret=b});return e.api?ret:this}})(jQuery);
(function(a){var b=a.tools.tooltip;a.extend(b.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!a.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.addEffect("slide",function(a){var b=this.getConf(),d=this.getTip(),e=b.slideFade?{opacity:b.opacity}:{},f=c[b.direction]||c.up;e[f[1]]=f[0]+"="+b.slideOffset,b.slideFade&&d.css({opacity:0}),d.show().animate(e,b.slideInSpeed,a)},function(b){var d=this.getConf(),e=d.slideOffset,f=d.slideFade?{opacity:0}:{},g=c[d.direction]||c.up,h=""+g[0];d.bounce&&(h=h=="+"?"-":"+"),f[g[1]]=h+"="+e,this.getTip().animate(f,d.slideOutSpeed,function(){a(this).hide(),b.call()})})})(jQuery);
;
/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function(a){a.fn.bxSlider=function(b){function H(){I(b.startingSlide);if(b.mode=="horizontal"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+l+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+l+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+(b.infiniteLoop?y:0)+"px"});e.children(b.childSelector).css({width:j,"float":"left",listStyle:"none"});h=e.parent().parent();g.addClass("bx-child")}else if(b.mode=="vertical"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+v+"px; height:"+m+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+z+"px"});e.children(b.childSelector).css({listStyle:"none",height:w});h=e.parent().parent();g.addClass("bx-child")}else if(b.mode=="fade"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+w+"px; width:"+v+'px; position:relative; overflow:hidden;"></div>');e.children(b.childSelector).css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98});h=e.parent().parent();g.not(":eq("+x+")").fadeTo(0,0);g.eq(x).css("zIndex",99)}if(b.captions&&b.captionsSelector==null){h.append('<div class="bx-captions"></div>')}}function I(){if((b.mode=="horizontal"||b.mode=="vertical")&&b.infiniteLoop){var c=Z(g,0,b.moveSlideQty,"backward");a.each(c,function(b){e.prepend(a(this))});var d=g.length+b.moveSlideQty-1;var f=g.length-b.displaySlideQty;var h=d-f;var i=Z(g,0,h,"forward");if(b.infiniteLoop){a.each(i,function(b){e.append(a(this))})}}}function J(){if(b.nextImage!=""){nextContent=b.nextImage;nextType="image"}else{nextContent=b.nextText;nextType="text"}if(b.prevImage!=""){prevContent=b.prevImage;prevType="image"}else{prevContent=b.prevText;prevType="text"}R(nextType,nextContent,prevType,prevContent)}function K(){if(b.auto){clearInterval(o);if(!b.infiniteLoop){if(b.autoDirection=="next"){o=setInterval(function(){x+=b.moveSlideQty;if(x>G){x=x%g.length}d.goToSlide(x,false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){x-=b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}}d.goToSlide(x,false)},b.pause)}}else{if(b.autoDirection=="next"){o=setInterval(function(){d.goToNextSlide(false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){d.goToPreviousSlide(false)},b.pause)}}}else if(b.ticker){b.tickerSpeed*=10;a(".bx-child",h).each(function(b){A+=a(this).width();B+=a(this).height()});if(b.tickerDirection=="prev"&&b.mode=="horizontal"){e.css("left","-"+(A+y)+"px")}else if(b.tickerDirection=="prev"&&b.mode=="vertical"){e.css("top","-"+(B+z)+"px")}if(b.mode=="horizontal"){C=parseInt(e.css("left"));L(C,A,b.tickerSpeed)}else if(b.mode=="vertical"){D=parseInt(e.css("top"));L(D,B,b.tickerSpeed)}if(b.tickerHover){O()}}}function L(a,c,d){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){e.animate({left:"-="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({left:"+="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){e.animate({top:"-="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({top:"+="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}}}function M(){if(b.startImage!=""){startContent=b.startImage;startType="image"}else{startContent=b.startText;startType="text"}if(b.stopImage!=""){stopContent=b.stopImage;stopType="image"}else{stopContent=b.stopText;stopType="text"}U(startType,startContent,stopType,stopContent)}function N(){h.children(".bx-window").hover(function(){if(t){d.suspendShow(false)}},function(){if(t){d.restartShow(false)}})}function O(){e.hover(function(){if(t){d.stopTicker(false)}},function(){if(t){d.startTicker(false)}})}function P(){g.not(":eq("+x+")").fadeTo(b.speed,0).css("zIndex",98);g.eq(x).css("zIndex",99).fadeTo(b.speed,1,function(){E=false;if(jQuery.browser.msie){g.eq(x).get(0).style.removeAttribute("filter")}b.onAfterSlide(x,g.length,g.eq(x))})}function Q(c){if(b.pagerType=="full"&&b.pager){a("a",n).removeClass(b.pagerActiveClass);a("a",n).eq(c).addClass(b.pagerActiveClass)}else if(b.pagerType=="short"&&b.pager){a(".bx-pager-current",n).html(x+1)}}function R(c,e,f,g){var i=a('<a href="" class="bx-next"></a>');var j=a('<a href="" class="bx-prev"></a>');if(c=="text"){i.html(e)}else{i.html('<img src="'+e+'" />')}if(f=="text"){j.html(g)}else{j.html('<img src="'+g+'" />')}if(b.prevSelector){a(b.prevSelector).append(j)}else{h.append(j)}if(b.nextSelector){a(b.nextSelector).append(i)}else{h.append(i)}i.click(function(){d.goToNextSlide();return false});j.click(function(){d.goToPreviousSlide();return false})}function S(c){var e=g.length;if(b.moveSlideQty>1){if(g.length%b.moveSlideQty!=0){e=Math.ceil(g.length/b.moveSlideQty)}else{e=g.length/b.moveSlideQty}}var f="";if(b.buildPager){for(var i=0;i<e;i++){f+=b.buildPager(i,g.eq(i*b.moveSlideQty))}}else if(c=="full"){for(var i=1;i<=e;i++){f+='<a href="" class="pager-link pager-'+i+'">'+i+"</a>"}}else if(c=="short"){f='<span class="bx-pager-current">'+(b.startingSlide+1)+"</span> "+b.pagerShortSeparator+' <span class="bx-pager-total">'+g.length+"</span>"}if(b.pagerSelector){a(b.pagerSelector).append(f);n=a(b.pagerSelector)}else{var j=a('<div class="bx-pager"></div>');j.append(f);if(b.pagerLocation=="top"){h.prepend(j)}else if(b.pagerLocation=="bottom"){h.append(j)}n=h.children(".bx-pager")}n.children().click(function(){if(b.pagerType=="full"){var a=n.children().index(this);if(b.moveSlideQty>1){a*=b.moveSlideQty}d.goToSlide(a)}return false})}function T(){var c=a("img",g.eq(x)).attr("title");if(c!=""){if(b.captionsSelector){a(b.captionsSelector).html(c)}else{h.children(".bx-captions").html(c)}}else{if(b.captionsSelector){a(b.captionsSelector).html("Â ")}else{h.children(".bx-captions").html("Â ")}}}function U(c,e,f,g){p=a('<a href="" class="bx-start"></a>');if(c=="text"){r=e}else{r='<img src="'+e+'" />'}if(f=="text"){s=g}else{s='<img src="'+g+'" />'}if(b.autoControlsSelector){a(b.autoControlsSelector).append(p)}else{h.append('<div class="bx-auto"></div>');h.children(".bx-auto").html(p)}p.click(function(){if(b.ticker){if(a(this).hasClass("stop")){d.stopTicker()}else if(a(this).hasClass("start")){d.startTicker()}}else{if(a(this).hasClass("stop")){d.stopShow(true)}else if(a(this).hasClass("start")){d.startShow(true)}}return false})}function V(){if(!b.infiniteLoop&&b.hideControlOnEnd){if(x==F){h.children(".bx-prev").hide()}else{h.children(".bx-prev").show()}var a=Math.floor(G/b.displaySlideQty)*b.displaySlideQty;if(x>=a){h.children(".bx-next").hide()}else{h.children(".bx-next").show()}}}function W(a,b){var c=e.find(" > .bx-child").eq(a).position();return b=="left"?c.left:c.top}function X(){var a=i.outerWidth()*b.displaySlideQty;return a}function Y(){var a=i.outerHeight()*b.displaySlideQty;return a}function Z(b,c,d,e){var f=[];var g=d;var h=false;if(e=="backward"){b=a.makeArray(b);b.reverse()}while(g>0){a.each(b,function(b,d){if(g>0){if(!h){if(b==c){h=true;f.push(a(this).clone());g--}}else{f.push(a(this).clone());g--}}else{return false}})}return f}var c={mode:"horizontal",childSelector:"",infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:"swing",pager:false,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:"next",autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:false,tickerSpeed:5e3,tickerDirection:"next",tickerHover:false,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null};var b=a.extend(c,b);var d=this;var e="";var f="";var g="";var h="";var i="";var j="";var k="";var l="";var m="";var n="";var o="";var p="";var q="";var r="";var s="";var t=true;var u=false;var v=0;var w=0;var x=0;var y=0;var z=0;var A=0;var B=0;var C=0;var D=0;var E=false;var F=0;var G=g.length-1;this.goToSlide=function(a,c){if(!E){E=true;x=a;b.onBeforeSlide(x,g.length,g.eq(x));if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}slide=a;if(slide==F){b.onFirstSlide(x,g.length,g.eq(x))}if(slide==G){b.onLastSlide(x,g.length,g.eq(x))}if(b.mode=="horizontal"){e.animate({left:"-"+W(slide,"left")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){e.animate({top:"-"+W(slide,"top")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}V();if(b.moveSlideQty>1){a=Math.floor(a/b.moveSlideQty)}Q(a);T()}};this.goToNextSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x+b.moveSlideQty;if(x<=G){V();b.onNextSlide(x,g.length,g.eq(x));d.goToSlide(x)}else{x-=b.moveSlideQty}}}else{if(!E){E=true;var c=false;x=x+b.moveSlideQty;if(x>G){x=x%g.length;c=true}b.onNextSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"-="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var h=b.moveSlideQty*w;e.animate({top:"-="+h+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToPreviousSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x-b.moveSlideQty;if(x<0){x=0;if(b.hideControlOnEnd){h.children(".bx-prev").hide()}}V();b.onPrevSlide(x,g.length,g.eq(x));d.goToSlide(x)}}else{if(!E){E=true;var c=false;x=x-b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}c=true}b.onPrevSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"+="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var i=b.moveSlideQty*w;e.animate({top:"+="+i+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToFirstSlide=function(a){if(typeof a=="undefined"){var a=true}d.goToSlide(F,a)};this.goToLastSlide=function(){if(typeof a=="undefined"){var a=true}d.goToSlide(G,a)};this.getCurrentSlide=function(){return x};this.getSlideCount=function(){return g.length};this.suspendShow=function(a){clearInterval(o);if(typeof a=="undefined"){var a=true}if(a&&b.autoControls){p.html(r).removeClass("stop").addClass("start")}};this.restartShow=function(a){if(typeof a=="undefined"){var a=true}if(t){K()}if(a&&b.autoControls){p.html(s).removeClass("start").addClass("stop")}};this.stopShow=function(a){t=false;this.suspendShow(a)};this.startShow=function(a){t=true;this.restartShow(a)};this.stopTicker=function(a){e.stop();if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(r).removeClass("stop").addClass("start");t=false}};this.startTicker=function(a){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){var c=parseInt(e.css("left"));var d=A+c+g.eq(0).width()}else if(b.tickerDirection=="prev"){var c=-parseInt(e.css("left"));var d=c-g.eq(0).width()}var f=d*b.tickerSpeed/A;L(C,d,f)}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){var h=parseInt(e.css("top"));var d=B+h+g.eq(0).height()}else if(b.tickerDirection=="prev"){var h=-parseInt(e.css("top"));var d=h-g.eq(0).height()}var f=d*b.tickerSpeed/B;L(D,d,f);if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(s).removeClass("start").addClass("stop");t=true}}};this.initShow=function(){e=a(this);f=e.clone();g=e.children(b.childSelector);h="";i=e.children(b.childSelector+":first");j=i.width();v=0;k=i.outerWidth();w=0;l=X();m=Y();E=false;n="";x=0;y=0;z=0;o="";p="";q="";r="";s="";t=true;u=false;A=0;B=0;C=0;D=0;F=0;G=g.length-1;g.each(function(b){if(a(this).outerHeight()>w){w=a(this).outerHeight()}if(a(this).outerWidth()>v){v=a(this).outerWidth()}});if(b.randomStart){var c=Math.floor(Math.random()*g.length);x=c;y=k*(b.moveSlideQty+c);z=w*(b.moveSlideQty+c)}else{x=b.startingSlide;y=k*(b.moveSlideQty+b.startingSlide);z=w*(b.moveSlideQty+b.startingSlide)}H();if(b.pager&&!b.ticker){if(b.pagerType=="full"){S("full")}else if(b.pagerType=="short"){S("short")}}if(b.controls&&!b.ticker&&g.length>1){J()}if(b.auto||b.ticker){if(b.autoControls){M()}if(b.autoStart){t=false;setTimeout(function(){d.startShow(true)},b.autoDelay)}else{d.stopShow(true)}if(b.autoHover&&!b.ticker){N()}}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}V();if(b.captions){T()}b.onAfterSlide(x,g.length,g.eq(x))};this.destroyShow=function(){clearInterval(o);h.children(".bx-next, .bx-prev, .bx-pager, .bx-auto").remove();e.unwrap().unwrap().removeAttr("style");e.children(b.childSelector).removeAttr("style").not(".bx-child").remove();g.removeClass("bx-child")};this.reloadShow=function(){d.destroyShow();d.initShow()};this.each(function(){if(a(this).children().length>0){d.initShow()}});return this};jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a=parseFloat(jQuery.css(this.elem,this.prop));return a}})(jQuery);

jQuery.noConflict();

function getJobsList(file, categories) {
    var result;
    jQuery.ajax({
        type: 'GET',
        url: file,
        data: { 'categories': categories },
        async: false,
        dataType: 'json',
        success: function(data) {
            result = data;
        }
    });
    return result;
}

function removeSpecialChars(value) {
    return value.toLowerCase().replace(/,|\ |\(|\)|\\|\/|&/g, '');
}

function initJobsCategoriesDropdown(jobsCategoriesId, box) {
    var jobsCategoriesHeadline = 'Category';

    // create the categories dropdown
    box.append(
        jQuery('<select />', {
            id: jobsCategoriesId
        }).append(
                jQuery('<option />', {
                    value: 'default',
                    html: jobsCategoriesHeadline
                })
            )
    );

    return jQuery('#' + jobsCategoriesId);
}

function initJobsPlacesDropdown(jobsPlacesId, box) {
    var jobsPlacesHeadline = 'Country';

    // create the places dropdown
    box.append(
        jQuery('<select />', {
            id: jobsPlacesId
        }).attr('disabled', 'disabled')
            .append(
                jQuery('<option />', {
                    value: 'default',
                    html: jobsPlacesHeadline
                })
            )
    );

    return jQuery('#' + jobsPlacesId);
}

function fillJobsPlacesDropdown(placesId, jobPlaces) {
    var placesDropdown = jQuery('#' + placesId),
        tempJobPlaces = [];

    // fille the places dropdown
    for (place in jobPlaces) {
        // create only a new option element when it's not already there
        if (tempJobPlaces.indexOf(place) == -1) {
            tempJobPlaces.push(place);

            placesDropdown.append(jQuery('<option />', {
                value: place,
                html: place
            }));
        }
    }
}

function resetJobsPlacesDropdown(placesId, box, status) {
    // remove all option inside the select box
    jQuery('#' + placesId).remove();
    initJobsPlacesDropdown(placesId, box);
    // change status disabled|enable
    if (status == 'enable') {
        jQuery('#' + placesId).removeAttr('disabled');
    } else if (status == 'disable') {
        jQuery('#' + placesId).attr('disabled', 'disabled');
    }
}

function createDropdowns(categoriesId, dropdownPlacesId, box, jobList) {
    var categoriesDropdown = initJobsCategoriesDropdown(categoriesId, box);

    // just init the places dropdown, but does't fill it with data yet
    initJobsPlacesDropdown(dropdownPlacesId, box);

    // fille the categories dropdown
    for (jobCategory in jobList) {
        categoriesDropdown.append(jQuery('<option />', {
            value: jobCategory,
            html: jobCategory
        }));
    }
}


function displayJobCategory(category, box) {
    var categoryListId = removeSpecialChars('jobslist-' + category),
        categoryListClass = 'jobslist-category',
        categoryListElementClass = categoryListClass + '-headline';

    // create a new list for all of the jobs
    box.append(jQuery('<ul />', {
        id: categoryListId,
        "class": categoryListClass,
        // append the headline as first list item
        html: '<li class="' + categoryListElementClass + '">' + category + '</li>'
    }));

    return categoryListId;
}

function displayJobPlace(place, parentListId) {
    var placeListId = removeSpecialChars(parentListId + '-' + place),
        placeListClass = 'jobslist-place',
        placeListElementClass = placeListClass + '-headline',
        jobListClass = 'jobslist-jobs';

    // create a new sub list for all of the places
    jQuery('#' + parentListId).children('li').append(jQuery('<ul />', {
        id: placeListId,
        "class": placeListClass,
        // append the headline as first list item
        html: '<li class="' + placeListElementClass + '">' + place + '</li>'
    }));

    // create a new sub list for all of the jobs in that place
    jQuery('#' + placeListId).children('li').append(jQuery('<ul />', {
        id: placeListId + '-jobs',
        "class": jobListClass
    }));

    return placeListId;
}

function displayJobName(job, parentListId) {
    var jobListId = removeSpecialChars(parentListId + '-' + job['name']);

    // create a new sub list for all of the job links
    jQuery('#' + parentListId).append(jQuery('<li />', {
        id: jobListId,
        html: '<a href="' + job['link'] + '" target="_blank">' + job['name'] + '</a>'
    }));

    return jobListId;
}


function printJobsAll(resultBox, jobsList) {
    var jobCategory, jobPlace, jobName, jobLink,
        jobListCategory,
        textNojobs = '<em>No current vacancies. Please sign up for a <a href="http://hire.jobvite.com/CompanyJobs/Careers.aspx?c=qEe9VfwG&v=1&k=Notify">job notification</a>.</em>';

    // reset result box
    resultBox.html('');

    // all jobs for one category
    for (jobCategory in jobsList) {
        // create a <ul> for each category
        jobListCategory = displayJobCategory(jobCategory, resultBox);
        // if it's an empty array, there are no open jobs at the moment
        if (jobsList[jobCategory].length == 0) {
            jQuery('#' + jobListCategory).append(jQuery('<li />', {
                html: textNojobs
            }));
        } else {
            // all jobs for one category in that place
            for (jobPlace in jobsList[jobCategory]) {
                // create a <ul> for each place in each category
                jobListCategoryPlace = displayJobPlace(jobPlace, jobListCategory);
                // one single job
                for (jobName in jobsList[jobCategory][jobPlace]) {
                    jobLink = jobsList[jobCategory][jobPlace][jobName];
                    // create a <ul> for the jobs in each places and categories
                    displayJobName({
                        name: jobName,
                        link: jobLink
                    }, jobListCategoryPlace + '-jobs');
                }
            }
        }
    }
}

function printJobsByCategory(jobCategory, resultBox, jobsList) {
    var jobPlace, jobName, jobLink,
        jobListCategory,
        textNojobs = '<em>No current vacancies. Please sign up for a <a href="http://hire.jobvite.com/CompanyJobs/Careers.aspx?c=qEe9VfwG&v=1&k=Notify">job notification</a>.</em>';

    // reset result box
    resultBox.html('');

    // create a <ul> for each category
    jobListCategory = displayJobCategory(jobCategory, resultBox);

    // if it's an empty array, there are no open jobs at the moment
    if (jobsList[jobCategory].length == 0) {
        jQuery('#' + jobListCategory).append(jQuery('<li />', {
            html: textNojobs
        }));
    } else{
        // all jobs for one category in that place
        for (jobPlace in jobsList[jobCategory]) {
            // create a <ul> for each place in each category
            jobListCategoryPlace = displayJobPlace(jobPlace, jobListCategory);
            // one single job
            for (jobName in jobsList[jobCategory][jobPlace]) {
                jobLink = jobsList[jobCategory][jobPlace][jobName];
                // create a <ul> for the jobs in each places and categories
                displayJobName({
                    name: jobName,
                    link: jobLink
                }, jobListCategoryPlace + '-jobs');
            }
        }
    }
}

function printJobsByCategoryAndPlace(jobCategory, jobPlace, resultBox, jobsList) {
    var jobName, jobLink,
        jobListCategory;

    // reset result box
    resultBox.html('');

    // create a <ul> for each category
    jobListCategory = displayJobCategory(jobCategory, resultBox);
    // create a <ul> for each place in each category
    jobListCategoryPlace = displayJobPlace(jobPlace, jobListCategory);
    // one single job
    for (jobName in jobsList[jobCategory][jobPlace]) {
        jobLink = jobsList[jobCategory][jobPlace][jobName];
        // create a <ul> for the jobs in each places and categories
        displayJobName({
            name: jobName,
            link: jobLink
        }, jobListCategoryPlace + '-jobs');
    }
}


function jobsFilter(categories) {
    // get all jobs
    var jobsList = getJobsList('../../../helper/jobs_filter.php', categories.join()),
        dropdownsBox = jQuery('#jobslist-container #jobslist-dropdown'),
        resultBox = jQuery('#jobslist-container #jobslist-result'),
        dropdownCategoriesId = 'jobslist-categories',
        dropdownPlacesId = 'jobslist-places';

    // create "categories" dropdown
    createDropdowns(dropdownCategoriesId, dropdownPlacesId, dropdownsBox, jobsList);

    // default view: all jobs in all (selectable) categories
    printJobsAll(resultBox, jobsList);

    // display only jobs from the selected category
    jQuery('#' + dropdownCategoriesId).live('change', function(){
        var category = jQuery(this).val();

        // reset places dropdown if any
        resetJobsPlacesDropdown(dropdownPlacesId, dropdownsBox, 'enable');

        if (category == 'default') {
            printJobsAll(resultBox, jobsList);
            // reset places dropdown if any
            resetJobsPlacesDropdown(dropdownPlacesId, dropdownsBox, 'disable');
        } else {
            // create no dropdown if there're no open positions (= no places)
            if (jobsList[category].length != 0) {
                fillJobsPlacesDropdown(dropdownPlacesId, jobsList[category]);
            } else {
                // reset places dropdown if any
                resetJobsPlacesDropdown(dropdownPlacesId, dropdownsBox, 'disable');
            }
            printJobsByCategory(category, resultBox, jobsList);
        }
    });

    jQuery('#' + dropdownPlacesId).live('change', function(){
        var category = jQuery('#' + dropdownCategoriesId).val(),
            place = jQuery(this).val();

        if (place == 'default') {
            printJobsByCategory(category, resultBox, jobsList);
        } else {
            printJobsByCategoryAndPlace(category, place, resultBox, jobsList);
        }
    });
};
/*
 * DC jQuery Social Stream
 * Copyright (c) 2013 Design Chemical
 * http://www.designchemical.com/blog/index.php/premium-jquery-plugins/jquery-social-stream-plugin/
 * Version 1.5.1 (12-3-2013)
 *
 */

(function($){SocialStreamObject=function(el,options){this.create(el,options)};$.extend(SocialStreamObject.prototype,{version:"1.5",create:function(el,options){this.defaults={feeds:{facebook:{id:"",intro:"Posted",out:"intro,thumb,title,text,user,share",text:"content",comments:3,image_width:6,icon:"facebook.png"},twitter:{id:"",intro:"Tweeted",search:"Tweeted",out:"intro,thumb,text,share",retweets:false,replies:false,images:"",url:"twitter.php",icon:"twitter.png"},google:{id:"",intro:"Shared",out:"intro,thumb,title,text,share",
    api_key:"",image_height:75,image_width:75,shares:true,icon:"google.png"},youtube:{id:"",intro:"Uploaded,Favorite,New Video",search:"Search",out:"intro,thumb,title,text,user,share",feed:"uploads,favorites,newsubscriptionvideos",thumb:"default",icon:"youtube.png"},flickr:{id:"",intro:"Uploaded",out:"intro,thumb,title,text,share",lang:"en-us",icon:"flickr.png"},delicious:{id:"",intro:"Bookmarked",out:"intro,thumb,title,text,user,share",icon:"delicious.png"},pinterest:{id:"",intro:"Pinned",out:"intro,thumb,text,user,share",
    icon:"pinterest.png"},rss:{id:"",intro:"Posted",out:"intro,title,text,share",text:"contentSnippet",icon:"rss.png"},lastfm:{id:"",intro:"Listened to,Loved,Replied",out:"intro,thumb,title,text,user,share",feed:"recenttracks,lovedtracks,replytracker",icon:"lastfm.png"},dribbble:{id:"",intro:"Posted,Liked",out:"intro,thumb,title,text,user,share",feed:"shots,likes",icon:"dribbble.png"},vimeo:{id:"",intro:"Liked,Video,Appeared In,Video,Album,Channel,Group",out:"intro,thumb,title,text,user,share",feed:"likes,videos,appears_in,all_videos,albums,channels,groups",
    thumb:"medium",stats:true,icon:"vimeo.png"},stumbleupon:{id:"",intro:"Shared,Reviewed",out:"intro,thumb,title,text,user,share",feed:"favorites,reviews",icon:"stumbleupon.png"},deviantart:{id:"",intro:"Deviation",out:"intro,thumb,title,text,user,share",icon:"deviantart.png"},tumblr:{id:"",intro:"Posted",out:"intro,title,text,user,share",thumb:100,video:250,icon:"tumblr.png"},instagram:{id:"",intro:"Posted",search:"Search",out:"intro,thumb,text,user,share,meta",accessToken:"",redirectUrl:"",clientId:"",
    thumb:"low_resolution",comments:3,likes:8,icon:"instagram.png"}},twitterId:"",days:10,limit:50,max:"days",external:true,speed:600,height:550,wall:false,order:"date",filter:true,controls:true,rotate:{direction:"up",delay:8E3},cache:true,container:"dcsns",cstream:"stream",content:"dcsns-content",iconPath:"images/dcsns-dark/",imagePath:"images/dcsns-dark/",debug:false};this.o={},this.timer_on=0,this.id="dcsns-"+$(el).index(),this.timerId="",this.o=$.extend(true,this.defaults,options),opt=this.o,$load=
    $('<div class="dcsns-loading">creating stream ...</div>');$(el).addClass(this.o.container).append('<div class="'+this.o.content+'"><ul class="'+this.o.cstream+'"></ul></div>');var $c=$("."+this.o.content,el),$a=$("."+this.o.cstream,el),$l=$("li",$a);if(opt.height>0&&opt.wall==false)$c.css({height:opt.height+"px"});if(this.o.filter==true||this.o.controls==true){var x='<div class="dcsns-toolbar">';if(this.o.filter==true){x+='<ul id="dcsns-filter" class="option-set filter">';x+=this.o.wall==true?'<li><a href="#filter" data-group="dc-filter"  data-filter="*" class="selected link-all">all</a></li>':
    "";var $f=$(".filter",el);$.each(opt.feeds,function(k,v){x+=v.id!=""?'<li class="active f-'+k+'"><a href="#filter" rel="'+k+'" data-group="dc-filter" data-filter=".dcsns-'+k+'"><img src="'+opt.imagePath+opt.feeds[k].icon+'" alt="" /></a></li>':""});x+="</ul>"}if(this.o.controls==true&&opt.wall==false){var play=this.o.rotate.delay<=0?"":'<li><a href="#" class="play"></a></li>';x+='<div class="controls"><ul>'+play+'<li><a href="#" class="prev"></a></li><li><a href="#" class="next"></a></li></ul></div>'}x+=
    "</div>";if(opt.wall==false)$(el).append(x);else $(el).before(x)}if(this.o.wall==true){$(".dcsns-toolbar").append($load);this.createwall($a)}else $c.append($load);this.createstream(el,$a,0,opt.days);this.addevents(el,$a);if(this.o.rotate.delay>0)this.rotate(el);$load.remove()},createstream:function(obj,s,f1,f2){$.each(opt.feeds,function(k,v){if(opt.feeds[k].id!=""){var txt=[];$.each(opt.feeds[k].intro.split(","),function(i,v){v=$.trim(v);txt.push(v)});$.each(opt.feeds[k].id.split(","),function(i,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       v){v=$.trim(v);if(opt.feeds[k].feed&&v.split("#").length<2)if(k=="youtube"&&v.split("/").length>1)getFeed(k,v,opt.iconPath,opt.feeds[k],obj,opt,f1,f2,"posted","",i);else $.each(opt.feeds[k].feed.split(","),function(i,feed){getFeed(k,v,opt.iconPath,opt.feeds[k],obj,opt,f1,f2,txt[i],feed,i)});else{intro=v.split("#").length<2?opt.feeds[k].intro:opt.feeds[k].search;getFeed(k,v,opt.iconPath,opt.feeds[k],obj,opt,f1,f2,intro,"",i)}})}})},createwall:function(obj){obj.imagesLoaded(function(){obj.isotope({itemSelector:"li.dcsns-li",
    getSortData:{postDate:function($elem){return parseInt($elem.attr("rel"),10)}},sortBy:"postDate"})})},addevents:function(obj,$a){var self=this,speed=this.o.speed;var $container=$(".stream",obj),filters={};$(".controls",obj).delegate("a","click",function(){var x=$(this).attr("class");switch(x){case "prev":self.pauseTimer();ticker($a,"prev",speed);break;case "next":self.pauseTimer();ticker($a,"next",speed);break;case "play":self.rotate(obj);$(".controls .play").removeClass("play").addClass("pause");
    break;case "pause":self.pauseTimer();break}return false});$(".filter",obj).delegate("a","click",function(){if(opt.wall==false){var rel=$(this).attr("rel");if($(this).parent().hasClass("active")){$(".dcsns-"+rel,$a).slideUp().addClass("inactive");$(this).parent().animate({opacity:0.3},400)}else{$(".dcsns-"+rel,$a).slideDown().removeClass("inactive");$(this).parent().animate({opacity:1},400)}$(this).parent().toggleClass("active")}return false});if(this.o.external)$a.delegate("a","click",function(){if(!$(this).parent().hasClass("section-share"))this.target=
    "_blank"})},rotate:function(a){var self=this,stream=$("."+this.o.cstream,a),speed=this.o.speed,delay=this.o.rotate.delay,r=this.o.rotate.direction=="up"?"prev":"next";this.timer_on=1;$(".controls .play").removeClass("play").addClass("pause");this.timerId=setTimeout(function(){ticker(stream,r,speed);self.rotate(a)},delay)},pauseTimer:function(){clearTimeout(this.timerId);this.timer_on=0;$(".controls .pause").removeClass("pause").addClass("play")}});$.fn.dcSocialStream=function(options,callback){var d=
{};this.each(function(){var s=$(this);d=s.data("socialtabs");if(!d){d=new SocialStreamObject(this,options,callback);s.data("socialtabs",d)}});return d};function getFeed(type,id,path,o,obj,opt,f1,f2,intro,feed,fn){var stream=$(".stream",obj),list=[],d="",px=300,c=[],data,href,url,n=opt.limit,txt=[],src;frl="https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num="+n+"&callback=?&q=";switch(type){case "facebook":var cp=id.split("/");url=url=cp.length>1?"https://graph.facebook.com/"+cp[1]+"/photos?limit="+
    n:frl+encodeURIComponent("https://www.facebook.com/feeds/page.php?id="+id+"&format=rss20");break;case "twitter":var curl=o.url.replace(/\&#038;/gi,"&");var cp=id.split("/"),cq=id.split("#"),cu=o.url.split("?"),replies=o.replies==true?"&exclude_replies=false":"&exclude_replies=true";var param="&include_entities=true&include_rts="+o.retweets+replies;url1=cu.length>1?curl+"&":curl+"?";url=cp.length>1?url1+"url=list&list_id="+cp[1]+"&per_page="+n+param:url1+"url=timeline&screen_name="+id+"&count="+n+
    param;if(cq.length>1){var rts=o.retweets==false?"+exclude:retweets":"";url=url1+"url=search&q="+encodeURIComponent(cq[1])+"&count="+n}break;case "google":n=n>100?100:n;href="https://plus.google.com/"+id;url="https://www.googleapis.com/plus/v1/people/"+id+"/activities/public";data={key:o.api_key,maxResults:n,prettyprint:false,fields:"items(id,kind,object(attachments(displayName,fullImage,id,image,objectType,url),id,objectType,plusoners,replies,resharers,url),published,title,url,verb)"};break;case "youtube":var cp=
    id.split("/"),cq=id.split("#");n=n>50?50:n;href="https://www.youtube.com/";href+=cq.length>1?"results?search_query="+encodeURIComponent(cq[1]):"user/"+id;href=cp.length>1?"https://www.youtube.com/playlist?list="+cp[1]:href;url="https://gdata.youtube.com/feeds/";if(cp.length>1)url+="api/playlists/"+cp[1]+"?v=2&orderby=published";else url+=cq.length>1?"api/videos?alt=rss&orderby=published&max-results="+n+"&racy=include&q="+encodeURIComponent(cq[1]):"base/users/"+id+"/"+feed+"?alt=rss&v=2&orderby=published&client=ytapi-youtube-profile";
    url=frl+encodeURIComponent(url);break;case "flickr":var cq=id.split("/"),fd=cq.length>1?"groups_pool":"photos_public";id=cq.length>1?cq[1]:id;href="https://www.flickr.com/photos/"+id;url="http://api.flickr.com/services/feeds/"+fd+".gne?id="+id+"&lang="+o.lang+"&format=json&jsoncallback=?";break;case "delicious":href="https://www.delicious.com/"+id;url="http://feeds.delicious.com/v2/json/"+id;break;case "pinterest":var cp=id.split("/");url="https://www.pinterest.com/"+id+"/";url+=cp.length>1?"rss":
    "feed.rss";href="http://www.pinterest.com/"+id;url=frl+encodeURIComponent(url);break;case "rss":href=id;url=frl+encodeURIComponent(id);break;case "lastfm":href="https://www.last.fm/user/"+id;var ver=feed=="lovedtracks"?"2.0":"1.0";url=frl+encodeURIComponent("https://ws.audioscrobbler.com/"+ver+"/user/"+id+"/"+feed+".rss");break;case "dribbble":href="https://www.dribbble.com/"+id;url=feed=="likes"?"http://api.dribbble.com/players/"+id+"/shots/likes":"http://api.dribbble.com/players/"+id+"/shots";break;
    case "vimeo":href="https://www.vimeo.com/"+id;url="https://vimeo.com/api/v2/"+id+"/"+feed+".json";break;case "stumbleupon":href="https://www.stumbleupon.com/stumbler/"+id;url=frl+encodeURIComponent("http://rss.stumbleupon.com/user/"+id+"/"+feed);break;case "deviantart":href="https://"+id+".deviantart.com";url=frl+encodeURIComponent("https://backend.deviantart.com/rss.xml?type=deviation&q=by%3A"+id+"+sort%3Atime+meta%3Aall");break;case "tumblr":href="https://"+id+".tumblr.com";url="http://"+id+".tumblr.com/api/read/json?callback=?";
        break;case "instagram":href="#";url="https://api.instagram.com/v1";var cp=id.substr(0,1),cq=id.split(cp),url1=encodeURIComponent(cq[1]),qs="",ts=0;switch(cp){case "?":var p=cq[1].split("/");qs="&lat="+p[0]+"&lng="+p[1]+"&distance="+p[2];url+="/media/search";break;case "#":url+="/tags/"+url1+"/media/recent";ts=1;break;case "!":url+="/users/"+url1+"/media/recent";break;case "@":url+="/locations/"+url1+"/media/recent";break}if(o.accessToken==""&&ts==0)if(location.hash)o.accessToken=location.hash.split("=")[1];
    else location.href="https://instagram.com/oauth/authorize/?client_id="+o.clientId+"&redirect_uri="+o.redirectUrl+"&response_type=token";url+="?access_token="+o.accessToken+"&client_id="+o.clientId+"&count="+n+qs;break}var dataType=type=="twitter"?"json":"jsonp";jQuery.ajax({url:url,data:data,cache:opt.cache,dataType:dataType,success:function(a){var error="";switch(type){case "facebook":if(cp.length>1)a=a.data;else if(a.responseStatus==200)a=a.responseData.feed.entries;else error=a.responseDetails;
    break;case "google":error=a.error?a.error:"";a=a.items;break;case "flickr":a=a.items;break;case "instagram":a=a.data;break;case "twitter":error=a.errors?a.errors:"";if(cq.length>1)a=a.statuses;break;case "youtube":if(a.responseStatus==200){a=a.responseData.feed.entries;if(cp.length>1)var pl=cp[0]}else error=a.responseDetails;break;case "dribbble":a=a.shots;break;case "tumblr":a=a.posts;break;case "delicious":break;case "vimeo":break;default:if(a.responseStatus==200)a=a.responseData.feed.entries;else error=
    a.responseDetails;break}if(error=="")$.each(a,function(i,item){if(i<n){var html=[],q=item.link,u='<a href="'+href+'">'+id+"</a>",w="",x='<a href="'+q+'">'+item.title+"</a>",y="",z="",zz="",m="",d=item.publishedDate,sq=q,st=item.title,s="";switch(type){case "facebook":if(cp.length>1){id=item.from.id;var d=new Date;d=d.setFbAlbum(item.updated_time);var set=parseQ(item.link);st=cp[0]!=""?cp[0]:item.from.name;u='<a href="http://www.facebook.com/media/set/?set='+set[1]+'">'+st+"</a>";x="";z='<a href="'+
    item.link+'"><img src="'+item.images[o.image_width].source+'" alt="" /></a>';if(o.comments>0&&item.comments){i=0;m+='<span class="meta"><span class="comments">comments</span></span>';$.each(item.comments.data,function(i,cmt){if(o.comments>i){m+='<span class="meta item-comments"><a href="http://facebook.com/'+cmt.from.id+'">'+cmt.from.name+"</a>"+cmt.message+"</span>";i++}else return false})}z+=m}else z=item[o.text];break;case "twitter":d=parseTwitterDate(item.created_at);var un=item.user.screen_name,
    ua=item.user.profile_image_url_https;href="https://www.twitter.com/"+un;q=href;y='<a href="'+q+'" class="thumb"><img src="'+ua+'" alt="" /></a>';z='<span class="twitter-user"><a href="https://www.twitter.com/'+un+'"><strong>'+item.user.name+" </strong>@"+un+"</a></span><br />";z+=linkify(item.text);if(o.images!=""&&item.entities.media)$.each(item.entities.media,function(i,media){z+='<a href="'+media.media_url_https+'"><img src="'+media.media_url_https+":"+o.images+'" alt="" /></a>'});sq=item.id_str;
    break;case "delicious":var d=new Date;d=d.setRFC3339(item.dt);x='<a href="'+item.u+'">'+item.d+"</a>";q=item.u;z=item.n;sq=item.u;st=item.d;break;case "rss":z=item[o.text];break;case "pinterest":var src=$("img",item.content).attr("src");y=src?'<a href="'+q+'"><img src="'+src+'" alt="" /></a>':"";z=item.contentSnippet;st=z;break;case "youtube":var v=[];v=parseQ(item.link);y='<a href="'+q+'"><img src="http://img.youtube.com/vi/'+v["v"]+"/"+o.thumb+'.jpg" alt="" /></a>';z=item.contentSnippet;if(cp.length>
    1)u='<a href="'+href+'">'+pl+"</a>";break;case "flickr":d=parseTwitterDate(item.published);x=item.title;y='<a href="'+q+'" title="'+item.title+'"><img src="'+item.media.m+'" alt="" /></a>';break;case "lastfm":q=item.content;break;case "dribbble":q=item.url;d=item.created_at;y='<a href="'+q+'"><img src="'+item.image_teaser_url+'" alt="'+item.title+'" /></a>';z='<span class="meta"><span class="views">'+num(item.views_count)+'</span><span class="likes">'+num(item.likes_count)+'</span><span class="comments">'+
    num(item.comments_count)+"</span></span>";sq=item.url;break;case "instagram":d=parseInt(item.created_time*1E3,10);x="";y='<a href="'+item.images[o.thumb].url+'"><img src="'+item.images[o.thumb].url+'" alt="" /></a>';z=item.caption!=null?htmlEncode(item.caption.text):"";if(item.comments.count>0&&o.comments>0){i=0;m+='<span class="meta"><span class="comments">'+num(item.comments.count)+" comments</span></span>";$.each(item.comments.data,function(i,cmt){if(o.comments>i){m+='<span class="meta item-comments"><img src="'+
    cmt.from.profile_picture+'" />';m+=cmt.from.full_name+" - "+cmt.text+"</span>";i++}else return false})}if(item.likes.count>0&&o.likes>0){i=0;m+='<span class="meta"><span class="likes">'+num(item.likes.count)+" likes</span></span>";m+='<span class="meta item-likes">';$.each(item.likes.data,function(i,lk){if(o.likes>i){m+='<img src="'+lk.profile_picture+'" />';i++}else return false});m+="</span>"}u='<a href="'+q+'">'+item.user.username+"</a>";st=item.caption!=null?item.caption.text:"";break;case "vimeo":f=
    feed,at=item.name,tx=item.description,q=item.url;if(f=="channels")y=item.logo!=""?'<a href="'+q+'" class="logo"><img src="'+item.logo+'" alt="" width="'+px+'" /></a>':"";else if(f=="groups")y='<a href="'+q+'"><img src="'+item.thumbnail+'" alt="" /></a>';else{var thumb="thumbnail_"+o.thumb,at=item.title,tx=f!="albums"?item.duration+" secs":item.description;y='<a href="'+item.url+'"><img src="'+item[thumb]+'" alt="" /></a>'}x='<a href="'+q+'">'+at+"</a>";z=tx;if(o.stats==true){var m="";m+=f=="albums"||
    f=="channels"||f=="groups"?'<span class="videos">'+num(item.total_videos)+"</span>":"";if(f=="channels")m+='<span class="users">'+num(item.total_subscribers)+"</span>";else if(f=="groups")m+='<span class="users">'+num(item.total_members)+"</span>";else if(f!="albums")m+='<span class="likes">'+num(item.stats_number_of_likes)+'</span><span class="views">'+num(item.stats_number_of_plays)+'</span><span class="comments">'+num(item.stats_number_of_comments)+"</span>";z+='<span class="meta">'+m+"</span>"}var dt=
    item.upload_date;if(f=="likes")dt=item.liked_on;else if(f=="albums"||f=="channels"||f=="groups")dt=item.created_on;var d=new Date;d=d.setVimeo(dt);sq=q;st=at;break;case "stumbleupon":var src=$("img",item.content).attr("src");y=src!=""&&feed=="favorites"?'<a href="'+q+'"><img src="'+src+'" alt="" /></a>':"";z=item.contentSnippet;break;case "deviantart":var src=$("img",item.content).attr("src");y=src?'<a href="'+q+'"><img src="'+src+'" alt="" /></a>':"";z=item.contentSnippet;break;case "tumblr":q=item["url-with-slug"];
    d=item.date;x='<a href="'+q+'">';switch(item.type){case "photo":x=item["photo-caption"];z='<a href="'+q+'"><img src="'+item["photo-url-"+o.thumb]+'" alt="" /></a>';st=x;break;case "video":x+=item["video-caption"];z=o.video!="400"?item["video-player-"+o.video]:item["video-player"];st=x;break;case "regular":x+=item["regular-title"];z=item["regular-body"];st=x;break;case "quote":x+=item["quote-source"];z=item["quote-text"];st=x;break;case "audio":x=item["id3-artist"]?'<a href="'+q+'">'+item["id3-artist"]+
        " - "+item["id3-album"]+"</a>":"";x+=item["id3-title"]?'<a href="'+q+'" class="track">'+item["id3-title"]+"</a>":"";z=item["audio-caption"];z+=item["audio-player"];st=item["id3-artist"]+" - "+item["id3-album"]+" - "+item["id3-title"];break;case "conversation":x+=item["conversation-title"];z=item["conversation-text"];st=x;break;case "link":var ltxt=item["link-text"].replace(/:/g,"").replace(/\?/g,"").replace(/\!/g,"").replace(/\./g,"");x='<a href="'+item["link-url"]+'">'+ltxt+"</a>";z=item["link-description"];
        st=ltxt;break}x+=item.type!="photo"||item.type!="audio"?"</a>":"";st=stripHtml(st);sq=q;break;case "google":var g=item.object.replies?num(item.object.replies.totalItems):0,m=item.object.plusoners?num(item.object.plusoners.totalItems):0,p=item.object.resharers?num(item.object.resharers.totalItems):0,dl;var d=new Date;d=d.setRFC3339(item.published);dl={src:"",imgLink:"",useLink:"",useTitle:""};var k=item.object.attachments;if(k)if(k.length){for(var l=0;l<k.length;l++){var h=k[l];if(h.image){dl.src=
    h.image.url;dl.imgLink=h.url;if(h.fullImage){dl.w=h.fullImage.width||0;dl.h=h.fullImage.height||0}}if(h.objectType=="article")dl.useLink=h.url;if(h.displayName)dl.useTitle=h.displayName}if(!dl.useLink)dl.useLink=dl.imgLink;var img_h=o.image_height?o.image_height:75;var img_w=o.image_width?o.image_width:75;if(dl.src.indexOf("resize_h")>=0)dl.src=dl.w>=dl.h?dl.src.replace(/resize_h=\d+/i,"resize_h="+img_h):dl.src.replace(/resize_h=\d+/i,"resize_w="+img_w)}dl=dl;q=dl.useLink;y=dl.src?(dl.useLink?'<a href="'+
    dl.useLink+'">':"")+'<img src="'+dl.src+'" />'+(dl.useLink?"</a>":""):"";var t1=px/(dl.w/dl.h)<px/3?' class="clear"':"";x=(dl.useLink?'<a href="'+dl.useLink+'"'+t1+">":"")+(item.title?item.title:dl.useTitle)+(dl.useLink?"</a>":"");if(o.shares)z='<span class="meta"><span class="plusones">+1s '+m+'</span><span class="shares">'+p+'</span><span class="comments">'+g+"</span></span>";sq=q;st=dl.useTitle;break}icon='<a href="'+href+'"><img src="'+path+o.icon+'" alt="" class="icon" /></a>';if(type=="twitter"){var intent=
    "https://twitter.com/intent/";s='<a href="'+intent+"tweet?in_reply_to="+sq+"&via="+opt.twitterId+'" class="share-reply"></a>';s+='<a href="'+intent+"retweet?tweet_id="+sq+"&via="+opt.twitterId+'" class="share-retweet"></a>';s+='<a href="'+intent+"favorite?tweet_id="+sq+'" class="share-favorite"></a>'}else s=share(st,sq,opt.twitterId);$.each(o.out.split(","),function(i,v){zz+=v!="intro"?'<span class="section-'+v+'">':"";switch(v){case "intro":if(type=="twitter")zintro='<span class="section-'+v+'"><a href="'+
    q+'">'+decodeURIComponent(intro)+'</a> <span><a href="https://twitter.com/'+un+"/status/"+item.id_str+'">'+nicetime((new Date(d)).getTime(),0)+"</a></span></span>";else zintro='<span class="section-'+v+'"><a href="'+q+'">'+decodeURIComponent(intro)+"</a> <span>"+nicetime((new Date(d)).getTime(),0)+"</span></span>";break;case "title":zz+=x;break;case "thumb":if(type=="rss"){var src=item.content.indexOf("img")>=0?$("img",item.content).attr("src"):"";y=src?'<a href="'+q+'" class="thumb"><img src="'+
    src+'" alt="" /></a>':""}zz+=y;break;case "text":zz+=z;break;case "user":zz+=u;break;case "meta":zz+=m;break;case "share":zz+=s;break}zz+=v!="intro"?"</span>":""});var df=type=="instagram"?nicetime(d,1):nicetime((new Date(d)).getTime(),1);var ob=df;switch(opt.order){case "random":ob=randomish(6);break;case "none":ob=1;break}var out='<li rel="'+ob+'" class="dcsns-li dcsns-'+type+" dcsns-feed-"+fn+'">'+w+'<div class="inner">'+zz+'<span class="clear"></span></div>'+zintro+icon+"</li>";if(opt.max=="days")if(df<=
    f2*86400&&df>=f1*86400)list.push(out);else{if(df>f2*86400)return false}else list.push(out)}});else if(opt.debug==true)list.push('<li class="dcsns-li dcsns-error">Error. '+error+"</li>")},complete:function(){var $newItems=$(list.join(""));if(opt.wall==true)stream.isotope("insert",$newItems);else{stream.append($newItems);sortstream(stream,"asc")}if(type=="facebook"&&cp.length<2)fbHrefLink(id,$newItems);else if(type=="flickr"&&cq.length>1)flickrHrefLink(cq[1],$newItems)}});return}function linkify(text){text=
    text.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,function(url){var full_url=!url.match("^https?://")?"http://"+url:url;return'<a href="'+full_url+'">'+url+"</a>"});text=text.replace(/(^|\s)@(\w+)/g,'$1@<a href="http://www.twitter.com/$2">$2</a>');text=text.replace(/(^|\s)#(\w+)/g,'$1#<a href="http://twitter.com/search/%23$2">$2</a>');return text}function htmlEncode(v){return $("<div/>").text(v).html()}function stripHtml(v){var $html=$(v);return $html.text()}
    Date.prototype.setRFC3339=function(dString){var utcOffset,offsetSplitChar;var offsetMultiplier=1;var dateTime=dString.split("T");var date=dateTime[0].split("-");var time=dateTime[1].split(":");var offsetField=time[time.length-1];var offsetString;offsetFieldIdentifier=offsetField.charAt(offsetField.length-1);if(offsetFieldIdentifier=="Z"){utcOffset=0;time[time.length-1]=offsetField.substr(0,offsetField.length-2)}else{if(offsetField[offsetField.length-1].indexOf("+")!=-1){offsetSplitChar="+";offsetMultiplier=
        1}else{offsetSplitChar="-";offsetMultiplier=-1}offsetString=offsetField.split(offsetSplitChar);time[time.length-1]==offsetString[0];offsetString=offsetString[1].split(":");utcOffset=offsetString[0]*60+offsetString[1];utcOffset=utcOffset*60*1E3}this.setTime(Date.UTC(date[0],date[1]-1,date[2],time[0],time[1],time[2])+utcOffset*offsetMultiplier);return this};Date.prototype.setFbAlbum=function(dString){var utcOffset,offsetSplitChar="+",offsetMultiplier=1,dateTime=dString.split("T"),date=dateTime[0].split("-"),
        time=dateTime[1].split(":"),offsetField=time[time.length-1],offsetString;if(offsetField[offsetField.length-1].indexOf("+")!=-1){offsetSplitChar="-";offsetMultiplier=-1}offsetTime=offsetField.split(offsetSplitChar);utcOffset=parseInt(offsetTime[1]/100,10)*60*1E3;this.setTime(Date.UTC(date[0],date[1]-1,date[2],time[0],time[1],offsetTime[0])+utcOffset*offsetMultiplier);return this};Date.prototype.setVimeo=function(dString){var utcOffset=0,offsetSplitChar,offsetMultiplier=1;var dateTime=dString.split(" ");
        var date=dateTime[0].split("-");var time=dateTime[1].split(":");this.setTime(Date.UTC(date[0],date[1]-1,date[2],time[0],time[1],time[2])+utcOffset*offsetMultiplier);return this};function parseTwitterDate(a){var out=$.browser.msie?a.replace(/(\+\S+) (.*)/,"$2 $1"):a;return out}function nicetime(a,out){var d=Math.round((+new Date-a)/1E3),fuzzy="";if(out==1)return d;else if(out==0){var chunks=new Array;chunks[0]=[60*60*24*365,"year","years"];chunks[1]=[60*60*24*30,"month","months"];chunks[2]=[60*60*
        24*7,"week","weeks"];chunks[3]=[60*60*24,"day","days"];chunks[4]=[60*60,"hr","hrs"];chunks[5]=[60,"min","mins"];var i=0,j=chunks.length;for(i=0;i<j;i++){s=chunks[i][0];if((xj=Math.floor(d/s))!=0){n=xj==1?chunks[i][1]:chunks[i][2];break}}fuzzy+=xj==1?"1 "+n:xj+" "+n;if(i+1<j){s2=chunks[i+1][0];if((xj2=Math.floor((d-s*xj)/s2))!=0){n2=xj2==1?chunks[i+1][1]:chunks[i+1][2];fuzzy+=xj2==1?" + 1 "+n2:" + "+xj2+" "+n2}}fuzzy+=" ago";return fuzzy}}function num(a){var b=a;if(a>999999)b=Math.floor(a/1E6)+"M";
    else if(a>9999)b=Math.floor(a/1E3)+"K";else if(a>999)b=Math.floor(a/1E3)+","+a%1E3;return b}function parseQ(url){var v=[],hash,q=url.split("?")[1];if(q!=undefined){q=q.split("&");for(var i=0;i<q.length;i++){hash=q[i].split("=");v.push(hash[1]);v[hash[0]]=hash[1]}}return v}function sortstream(obj,d){var $l=$("li",obj);$l.sort(function(a,b){var keyA=parseInt($(a).attr("rel"),10),keyB=parseInt($(b).attr("rel"),10);if(d=="asc")return keyA>keyB?1:-1;else return keyA<keyB?1:-1;return 0});$.each($l,function(index,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              row){obj.append(row)});$(".dcsns-loading").slideUp().remove();return}function randomish(l){var i=0,out="";while(i<l){out+=Math.floor(Math.random()*10+1)+"";i++}return out}function ticker(s,b,speed){var $a=$("li:last",s),$b=$("li:first",s),$gx,bh=$b.outerHeight(true);if($("li",s).not(".inactive").length>2)if(b=="next"){$gx=$a.clone().hide();$b.before($gx);$a.remove();if($a.hasClass("inactive"))ticker(s,b,speed);else{$(".inner",$gx).css({opacity:0});$gx.slideDown(speed,"linear",function(){$(".inner",
        this).animate({opacity:1},speed)});return}}else{$gx=$b.clone();if($b.hasClass("inactive")){$a.after($gx);$b.remove();ticker(s,b,speed)}else{$b.animate({marginTop:-bh+"px"},speed,"linear",function(){$a.after($gx);$b.remove()});$(".inner",$b).animate({opacity:0},speed)}}}function fbHrefLink(id,obj){jQuery.ajax({url:"https://graph.facebook.com/"+id,dataType:"jsonp",success:function(a){$(".icon",obj).each(function(){$(this).parent().attr("href",a.link)});$(".section-user a",obj).each(function(){$(this).attr("href",
        a.link);$(this).text(a.name)})}})}function flickrHrefLink(id,obj){jQuery.ajax({url:"http://api.flickr.com/services/feeds/groups_pool.gne?id="+id+"&format=json&jsoncallback=?",dataType:"jsonp",success:function(a){$(".icon",obj).each(function(){$(this).parent().attr("href",a.link)})}})}function share(st,sq,twitterId){var s="",sq=encodeURIComponent(sq),st=encodeURIComponent(st);s='<a href="http://www.facebook.com/sharer.php?u='+sq+"&t="+st+'" class="share-facebook"></a>';s+='<a href="https://twitter.com/share?url='+
        sq+"&text="+st+"&via="+twitterId+'" class="share-twitter"></a>';s+='<a href="https://plus.google.com/share?url='+sq+'" class="share-google"></a>';s+='<a href="http://www.linkedin.com/shareArticle?mini=true&url='+sq+"&title="+st+'" class="share-linkedin"></a>';return s}})(jQuery);
jQuery(window).load(function(){jQuery.getScript("//platform.twitter.com/widgets.js",function(){});jQuery(".section-share a").click(function(){var u=jQuery(this).attr("href");window.open(u,"sharer","toolbar=0,status=0,width=626,height=436");return false});jQuery(".dcsns-facebook .section-text a").each(function(i){var txt=jQuery(this).attr("href");var href=decodeURIComponent(txt.replace("http://www.facebook.com/l.php?u=","")).split("&");jQuery(this).attr("href",href[0])})});
;
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);


jQuery(window).load(function(){

    var filters = {}, $container = jQuery('.stream');

    jQuery('.filter a').click(function(){
        var $i = jQuery(this), isoFilters = [], prop, selector, $a = $i.parents('.dcsns-toolbar'), $b = $a.next(), $c = jQuery('.stream',$b);

        jQuery('.filter a',$a).removeClass('iso-active');
        $i.addClass('iso-active');
        filters[ $i.data('group') ] = $i.data('filter');
        for (prop in filters){
            isoFilters.push(filters[ prop ])
        }
        selector = isoFilters.join('');
        $c.isotope({filter: selector, sortBy : 'postDate'});

        return false;
    });
    $container.isotope('reLayout');
});;
/**
 * Rocket Internet GUI - Javascript Controller
 *
 * built: Sebastian Nitzsche <sebastian.nitzsche@rocket-internet.de>
 */
jQuery(document).ready(function($) {
    // fix the header height
    var headerImgHeight = $(".header-img img").height();
    $("#page-header").height($(".header-img img").height());

    /**
     * created: Luigi Aron
     */
    var careerJobsScrollCont = function(){
        //load defalut counrty
        var firstContinent = $('#menu-list-continent').children('span:first');
        if (firstContinent.length > 0) {
            var firstContinentId = $(firstContinent).attr('id').split('-');
            var defaultShowId = firstContinentId[1];
            $('#contry-' + defaultShowId).show();
            $('#contry-' + defaultShowId).jScrollPane();

            // click load
            $('#menu-list-continent').jScrollPane();
            $('.country-lnk').jScrollPane();
            $('.continent-lnk').click(function(){
                var objId = $(this).attr('id').split('-');
                var showId = objId[1];

                $('.country-lnk').hide();
                $('#contry-' + showId).show();
                $('#contry-' + showId).jScrollPane();
            });
        }
    };
    careerJobsScrollCont();

    /**
     * created: Luigi Aron
     */
    var rightMenus = function(){
        var activeMenuKey = $('#active-menu-key').val();
        if (activeMenuKey === undefined) {
            activeMenuKey = false;
        } else {
            activeMenuKey = Math.round(activeMenuKey);
        }
        $(".menu-acordion").accordion({
            autoHeight: false,
            active: activeMenuKey
        });

        $('.right-js-menu').click(function(){
            $(".header-scroll-menu").jScrollPane({contentWidth: 140});
        });
        $(".header-scroll-menu").jScrollPane({contentWidth: 140});
    };
    rightMenus();

    /**
     * created: Luigi Aron
     */
    var currentDocumentHeight = Math.round($(document).height() + 100);
    var firstTimeResize = false;
    var repositionFooter = function(method){
        if($('#frm_karriere_1').length != 0) {
            return true;
        }

        if(method == true) {
            if($(document).height() > currentDocumentHeight){
                $('body').height(currentDocumentHeight);
            }
            if(Math.round($(document).height()) != $('body').height()){
                $('body').height(Math.round($(document).height()) + 50);
            }
        } else {
            $('body').height(currentDocumentHeight);
        }
    };
    repositionFooter(false);

    /**
     * created: Luigi Aron
     */
    var jobsCustomAcordion = function(){
        $('.jobs-menu').accordion({autoHeight: false});
    }
    jobsCustomAcordion();

    /**
     * created: Luigi Aron
     */
    var documentRemovePopUps = function(){
        $(document).click(function(event){
            if($('#block-views-venture-logos-block').length != 0 || $('#block-views-venture-logos-block-1').length != 0 || $('.team-card').length !=0) {
                if($(event.target).parent().parent().parent().hasClass('view-venture-logos') == false &&
                    $(event.target).hasClass('team-card') == false &&
                    $(event.target).parent().parent().parent().hasClass('team-card') == false &&
                    $(event.target).parent().parent().hasClass('team-card') == false &&
                    $(event.target).parent().hasClass('team-card') == false
                    ){
                    $('.team-card').removeClass('active');
                    $('#wrap .overlay').hide('fast');
                    $('#wrap .team-replace-container').remove();
                    repositionFooter(false);
                }
            }
        });
    };
    documentRemovePopUps();

    /**
     * The functionality for who we are team cv popup
     * created: Luigi Aron
     */
    var whoWeAreTeamCv = function(){
        $('.team-card').click(function(){
            $('.team-card').removeClass('active');
            $('#wrap .overlay').hide('fast');
            $('#wrap .team-replace-container').remove();

            var cvId = $(this).children('.card').attr('rel');
            var clonContainer = '<div class="' + cvId + '" rel="' + cvId + '">' + $(this).children('.overlay').html() + '</div>';
            $('#wrap').append(clonContainer);

            $('#wrap').children('.' + cvId).first().css({
                'position': 'absolute',
                'cursor': 'pointer',
                'top': Math.round($(this).offset().top + 170) + 'px',
                'left': Math.round($(this).offset().left) + 'px'
            });
            $('#wrap .' + cvId).addClass('team-replace-container overlay active');
            $('#wrap .' + cvId).fadeIn('fast');

            $(this).addClass('active');

            $('#wrap .' + cvId).click(function(){
                $('.team-card').removeClass('active');

                $(this).fadeOut('fast');
                $(this).remove();
            });
            repositionFooter(true);
        });
    };
    whoWeAreTeamCv();

    /**
     * The functionality for the "test yourself popup"
     * mainly the whoWeAreTeamCv function with some small modifications
     */
    var testYourselfPopup = function(){
        $('.test-yourself-popup-link').click(function(evt){
            evt.preventDefault();
            $('.test-yourself-popup-link').removeClass('active');
            $('#wrap .overlay').hide('fast');
            $('#wrap .test-yourself-replace-container').remove();

            var cvId = 'test-yourself-overlay';
            var clonContainer = '<div class="' + cvId + '" rel="' + cvId + '">' + $(this).next('.overlay').html() + '</div>';
            $('#wrap').append(clonContainer);

            $('#wrap').children('.' + cvId).first().css({
                'position': 'absolute',
                'cursor': 'pointer',
                'width': 'auto',
                'min-height': '0',
                'top': Math.round($(this).offset().top - 50) + 'px',
                'left': Math.round($(this).offset().left) + 'px'
            });
            $('#wrap .' + cvId).addClass('test-yourself-replace-container overlay active');
            $('#wrap .' + cvId).fadeIn('fast');

            $(this).addClass('active');

            $('#wrap .' + cvId).click(function(){
                $('.test-yourself-popup-link').removeClass('active');

                $(this).fadeOut('fast');
                $(this).remove();
            });
            repositionFooter(true);
        });
    };
    testYourselfPopup();

    /**
     * The functionality for logo extra data
     * created: Luigi Aron
     */
    var venturesDetail = function(){
        // stop if div not found
        if($('#block-views-venture-logos-block').length == 0 && $('#block-views-venture-logos-block-1').length == 0){
            return false;
        }

        $('#block-views-venture-logos-block img, #block-views-venture-logos-block-1 img').click(function(){
            $('.team-card').removeClass('active');
            $('#wrap .overlay').hide('fast');
            $('#wrap .team-replace-container').remove();

            var cvId = $(this).attr('rel').replace('#','');
            var clonContainer = '<div class="' + cvId + ' vetures-popup" rel="' + cvId + '">' + $(this).parent().children('.overlay').html() + '</div>';
            $('#wrap').append(clonContainer);

            $('#wrap').children('.' + cvId).first().css({
                'position': 'absolute',
                'cursor': 'pointer',
                'top': Math.round($(this).offset().top - 17) + 'px',
                'left': Math.round($(this).offset().left - 11) + 'px'
            });
            $('#wrap .' + cvId).addClass('team-replace-container overlay active');
            $('#wrap .' + cvId).fadeIn('fast');

            // $(this).addClass('active');

            $('#wrap .' + cvId).click(function(){
                $('.team-card').removeClass('active');

                $(this).fadeOut('fast');
                $(this).remove();
            });
            repositionFooter(true);
        });
    };
    venturesDetail();

    var headerEditor = function(){
        if($('.career-1').length != 0){
            var data = $('.career-1').parent().html();
            $('.header-text > span').remove();
            $('<div class="career-home">' + data + '</div>').appendTo('.header-text');

            $('.header-red-title').addClass('career-red-title');
        }
    };
    headerEditor();
    /**
     * The functionality for the VentureCards
     * created: Sebastian Nitzsche <sebastian.nitzsche@rocket-internet.de>
     */
    // var hideVetureDetails = function() {
    // $('.view-venture-logos img[rel]').each(function(){
    // var overlay = $(this).overlay({
    // left: $(this).offset().left-10,
    // fixed: false,
    // left: 0
    // });
    // });
    // };
    //hideVetureDetails();

    /**
     * The functionality for the ProfileCards
     * created: Sebastian Nitzsche <sebastian.nitzsche@rocket-internet.de>
     */
    // var hideTeamMemberDetails = function() {
    // $('.view-id-team div[rel]').each(function(){
    // var overlay = $(this).overlay({
    // left: $(this).offset().left-10,
    // fixed: false,
    // left: 0,
    // });
    // });
    // };
    // hideTeamMemberDetails();

    /**
     * Collapse the FAQ's
     * created: Sebastian Nitzsche <sebastian.nitzsche@rocket-internet.de>
     */
    var faqCollaps = function() {
        $('.view-id-career .views-field-field-ask a').click(function(e){
            e.preventDefault();
            $('#block-views-career-block-3 .views-field-field-awnser').hide();
            $(this).parent().parent().next().toggle();
        });
    };
    faqCollaps();


    /**
     * toggle view of a "show more" box
     * created: Jonas Hantelmann <jonas.hantelmann@rocket-internet.de>
     */
    var toggleMore = function() {
        $('.toggle-more').click(function(){
            var relBox = $(this).attr('rel');
            $('#' + relBox).fadeToggle();
            return false;
        });
    };
    toggleMore();
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: 'RocketBerlin',
                url: '/misc/twitter.php'
            },
            facebook: {
                id: '112620915465990'
            }
        },
        rotate: {
            delay: 0
        },
        twitterId: 'RocketBerlin',
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/',
        control: false,
        filter: true,
        wall: true,
        cache: false,
        max: 'limit',
        limit: 10
    });

});
;