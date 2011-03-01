/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
(function(f,n,z){var A={mix:function(i,l,q,o){if(!l||!i)return i;if(q===z)q=true;var d,h,k;if(o&&(k=o.length))for(d=0;d<k;d++){h=o[d];if(h in l)if(q||!(h in i))i[h]=l[h]}else for(h in l)if(q||!(h in i))i[h]=l[h];return i}},x=f&&f[n]||{},v=0;f=x.__HOST||(x.__HOST=f||{});n=f[n]=A.mix(x,A,false);n.mix(n,{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.20dev",merge:function(){var i={},l,q=arguments.length;for(l=0;l<q;l++)n.mix(i,arguments[l]);return i},augment:function(){var i=arguments,
l=i.length-2,q=i[0],o=i[l],d=i[l+1],h=1;if(!n.isArray(d)){o=d;d=z;l++}if(!n.isBoolean(o)){o=z;l++}for(;h<l;h++)n.mix(q.prototype,i[h].prototype||i[h],o,d);return q},extend:function(i,l,q,o){if(!l||!i)return i;var d=Object.create?function(r,t){return Object.create(r,{constructor:{value:t}})}:function(r,t){function g(){}g.prototype=r;var m=new g;m.constructor=t;return m},h=l.prototype,k;k=d(h,i);i.prototype=n.mix(k,i.prototype);i.superclass=d(h,l);q&&n.mix(k,q);o&&n.mix(i,o);return i},__init:function(){this.Config=
this.Config||{};this.Env=this.Env||{};this.Config.debug=""},namespace:function(){var i=arguments,l=i.length,q=null,o,d,h,k=i[l-1]===true&&l--;for(o=0;o<l;o++){h=(""+i[o]).split(".");q=k?f:this;for(d=f[h[0]]===q?1:0;d<h.length;++d)q=q[h[d]]=q[h[d]]||{}}return q},app:function(i,l){var q=n.isString(i),o=q?f[i]||{}:i,d=0,h=n.__APP_INIT_METHODS.length;for(n.mix(o,this,true,n.__APP_MEMBERS);d<h;d++)n[n.__APP_INIT_METHODS[d]].call(o);n.mix(o,n.isFunction(l)?l():l);q&&(f[i]=o);return o},config:function(i){for(var l in i)this["_"+
l]&&this["_"+l](i[l])},log:function(i,l,q){if(n.Config.debug){if(q)i=q+": "+i;if(f.console!==z&&console.log)console[l&&console[l]?l:"log"](i)}},error:function(i){if(n.Config.debug)throw i;},guid:function(i){return(i||"")+v++}});n.__init();return n})(this,"KISSY");
(function(f,n){var z=f.__HOST,A=Object.prototype.toString,x=Array.prototype.indexOf,v=Array.prototype.lastIndexOf,i=Array.prototype.filter,l=String.prototype.trim,q=/^\s+|\s+$/g,o={};f.mix(f,{type:function(d){return d==null?String(d):o[A.call(d)]||"object"},isNull:function(d){return d===null},isUndefined:function(d){return d===n},isEmptyObject:function(d){for(var h in d)return false;return true},isPlainObject:function(d){return d&&A.call(d)==="[object Object]"&&"isPrototypeOf"in d},clone:function(d,
h,k){var r=d,t,g,m=k||{};if(d&&((t=f.isArray(d))||f.isPlainObject(d))){if(d["__~ks_cloned"])return m[d["__~ks_cloned"]];d["__~ks_cloned"]=r=f.guid();m[r]=d;if(t)r=h?f.filter(d,h):d.concat();else{r={};for(g in d)if(g!=="__~ks_cloned"&&d.hasOwnProperty(g)&&(!h||h.call(d,d[g],g,d)!==false))r[g]=f.clone(d[g],h,m)}}if(!k){f.each(m,function(p){if(p["__~ks_cloned"])try{delete p["__~ks_cloned"]}catch(u){p["__~ks_cloned"]=n}});m=n}return r},trim:l?function(d){return d==n?"":l.call(d)}:function(d){return d==
n?"":d.toString().replace(q,"")},substitute:function(d,h,k){if(!f.isString(d)||!f.isPlainObject(h))return d;return d.replace(k||/\\?\{([^{}]+)\}/g,function(r,t){if(r.charAt(0)==="\\")return r.slice(1);return h[t]!==n?h[t]:""})},each:function(d,h,k){var r,t=0,g=d.length,m=g===n||f.type(d)==="function";k=k||z;if(m)for(r in d){if(h.call(k,d[r],r,d)===false)break}else for(r=d[0];t<g&&h.call(k,r,t,d)!==false;r=d[++t]);return d},indexOf:x?function(d,h){return x.call(h,d)}:function(d,h){for(var k=0,r=h.length;k<
r;++k)if(h[k]===d)return k;return-1},lastIndexOf:v?function(d,h){return v.call(h,d)}:function(d,h){for(var k=h.length-1;k>=0;k--)if(h[k]===d)break;return k},unique:function(d,h){h&&d.reverse();for(var k=d.slice(),r=0,t,g;r<k.length;){for(g=k[r];(t=f.lastIndexOf(g,k))!==r;)k.splice(t,1);r+=1}h&&k.reverse();return k},inArray:function(d,h){return f.indexOf(d,h)>-1},filter:i?function(d,h,k){return i.call(d,h,k||this)}:function(d,h,k){var r=[];f.each(d,function(t,g,m){if(h.call(k||this,t,g,m))r.push(t)});
return r},now:function(){return(new Date).getTime()}});f.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(d,h){o["[object "+d+"]"]=h=d.toLowerCase();f["is"+d]=function(k){return f.type(k)==h}})})(KISSY);
(function(f,n){function z(a){a=a.split("/");for(var b=[],c=0;c<a.length;c++){var e=a[c];if(e!=".")e==".."?b.pop():b.push(e)}return b.join("/")}function A(a,b){if(b.lastIndexOf("../",0)==0||b.lastIndexOf("./",0)==0){var c=h,e;if((e=a.lastIndexOf("/"))!=-1)c=a.substring(0,e+1);return z(c+b)}else return b.indexOf("./")!=-1||b.indexOf("../")!=-1?z(b):b}function x(a){return a.replace(/(-min)?\.js[^/]*$/i,h)}function v(a){if(a.charAt(a.length-1)!="/")a+="/";a=f.trim(a);if(!a.match(/^http(s)?:/i)&&a.lastIndexOf("/",
0)!=0)a=p+a;return z(a)}function i(a){return a.replace(/\?.*$/,"")}var l=f.__HOST,q=!l.getSelection&&l.ActiveXObject,o=l.document,d=o.getElementsByTagName("head")[0]||o.documentElement,h="",k=2,r=3,t=4,g=f.mix,m=o.createElement("script").readyState?function(a,b){var c=a.onreadystatechange;a.onreadystatechange=function(){var e=a.readyState;if(e==="loaded"||e==="complete"){a.onreadystatechange=null;c&&c();b.call(this)}}}:function(a,b){a.addEventListener("load",b,false)},p=location.href.replace(/[^/]*$/i,
h);l={__currentModule:null,__startLoadTime:0,__startLoadModuleName:null,add:function(a,b,c){var e=this.Env.mods,j;if(f.isString(a)&&!c&&f.isPlainObject(b)){j={};j[a]=b;a=j}if(f.isPlainObject(a)){f.each(a,function(y,B){y.name=B;e[B]&&g(y,e[B],false)});g(e,a);return this}if(f.isString(a)){var s;if(c&&(s=c.host)){a=e[s];if(!a){f.error("module "+s+" can not be found !");return this}this.__isAttached(s)?b.apply(this):a.fns.push(b);return this}this.__registerModule(a,b,c);b=e[a];this.__isAttached(b.requires)&&
this.__attachMod(b);return this}if(f.isFunction(a)){c=b;b=a;if(q){if(+new Date-this.__startLoadTime<15)(a=this.__startLoadModuleName)?this.__registerModule(a,b,c):f.error("\u4ece\u7f13\u5b58\u8bfb\u53d6\uff1f\uff1f\u4f46\u662f\u8bf7\u6c42\u524d\u8bb0\u5f55\u6ca1\u6709\u6a21\u5757\u540d");else{a=this.__findModuleNameByInteractive();this.__registerModule(a,b,c)}this.__startLoadModuleName=null;this.__startLoadTime=0}else this.__currentModule={def:b,config:c};return this}f.error("invalid format for KISSY.add !");return this},__findModuleNameByInteractive:function(){for(var a=document.getElementsByTagName("script"),
b,c=0;c<a.length;c++){var e=a[c];if(e.readyState=="interactive"){b=e;break}}b||f.error("\u627e\u4e0d\u5230 interactive \u72b6\u6001\u7684 script");a=b.src;if(a.lastIndexOf(this.Config.base,0)==0)return x(a.substring(this.Config.base.length));b=this.__packages;for(var j in b)if(b.hasOwnProperty(j))if(a.lastIndexOf(b[j].path,0)==0)return x(a.substring(b[j].path.length));f.error("interactive \u72b6\u6001\u7684 script \u6ca1\u6709\u5bf9\u5e94\u5305 \uff1a"+a)},__registerModule:function(a,b,c){c=c||{};var e=this.Env.mods,j=e[a]||{};g(j,{name:a,status:k});j.fns&&j.fns.length&&
f.error(a+" is defined more than once");j.fns=j.fns||[];j.fns.push(b);g(e[a]=j,c)},_packages:function(a){var b;b=this.__packages=this.__packages||{};for(var c=0;c<a.length;c++){var e=a[c];b[e.name]=e;if(e.path)e.path=v(e.path)}},_combine:function(a,b){var c=this,e;if(f.isObject(a))f.each(a,function(j,s){f.each(j,function(y){c._combine(y,s)})});else{e=c.__combines=c.__combines||{};if(b)e[a]=b;else return e[a]||a}},use:function(a,b){a=a.replace(/\s+/g,h).split(",");var c=this,e,j,s=a.length,y;if(c.__isAttached(a)){e=
c.__getModules(a);b&&b.apply(c,e)}else{for(j=0;j<s&&(e=a[j]);j++)c.__attachModByName(e,function(){if(!y&&c.__isAttached(a)){y=true;var B=c.__getModules(a);b&&b.apply(c,B)}});return c}},__getModules:function(a){var b=[this];a=a||[];for(var c=0;c<a.length;c++)b.push(this.require(a[c]));return b},require:function(a){return(a=this.Env.mods[i(a)])&&a.value},__getPackagePath:function(a){var b=this._combine(a.name),c,e=this.__packages||{};if((c=b.indexOf("/"))!=-1)b=b.substring(0,c);if(b=e[b]){c=b.path||
p;if(c.charAt(c.length-1)!=="/")c+="/";if(b.charset)a.charset=b.charset;return c}},__attachModByName:function(a,b){var c=this.Env.mods;/^([^?]+)(\?.*)?$/.test(a);var e=RegExp.$2;a=RegExp.$1;var j=c[a];if(!j){j=this.Config.componentJsName||function(s){return i(s)+"-min.js"+(e?e:"")};j={path:f.isFunction(j)?j(this._combine(a)):j,charset:"utf-8"};c[a]=j}j.name=a;j&&j.status===t||this.__attach(j,b)},__attach:function(a,b){function c(){if(!I&&e.__isAttached(a.requires)){a.status===k&&e.__attachMod(a);
if(a.status===t){I=true;b()}}}var e=this,j=e.Env.mods,s=(a.requires||[]).concat(),y=0,B=s.length;for(a.requires=s;y<B;y++){s[y]=A(a.name,s[y]);var C=j[i(s[y])];C&&C.status===t||e.__attachModByName(s[y],c)}e.__buildPath(a,e.__getPackagePath(a));e.__load(a,function(){if(e.__currentModule){e.__registerModule(a.name,e.__currentModule.def,e.__currentModule.config);e.__currentModule=null}var D=a.requires||[],H=[];a.requires=D;for(var E=D.length-1;E>=0;E--){D[E]=A(a.name,D[E]);var F=D[E],G=j[i(F)],J=f.inArray(F,
s);G&&G.status===t||J||e.__attachModByName(F,c);if(!J&&(!G||G.status<k))H.push(F)}H.length!=0&&H.unshift(a.name);c()});var I=false},__attachMod:function(a){var b=this,c=a.fns;c&&f.each(c,function(e){e=f.isFunction(e)?e.apply(b,b.__getModules(a.requires)):e;a.value=a.value||e});a.status=t},__isAttached:function(a){for(var b=this.Env.mods,c,e=(a=f.makeArray(a)).length-1;e>=0;e--){c=i(a[e]);c=b[c]||{};if(c.status!==t)return false}return true},__load:function(a,b){function c(){j[e]=k;if(a.status!==r){if(a.status!==
t)a.status=k;b()}}var e=a.fullpath,j=f.Env._loadQueue,s=j[e];a.status=a.status||0;if(a.status<1&&s)a.status=s.nodeName?1:k;if(a.status<1&&e){a.status=1;if(q){this.__startLoadModuleName=a.name;this.__startLoadTime=Number(+new Date)}s=this.getScript(e,{success:function(){c()},error:function(){a.status=r;j[e]=k},charset:a.charset});j[e]=s}else a.status===1?m(s,c):b()},__buildPath:function(a,b){var c=this.Config;if(!a.fullpath&&a.path)a.fullpath=(b||c.base)+a.path;if(a.fullpath&&c.debug)a.fullpath=a.fullpath.replace(/-min/ig,
h)},getScript:function(a,b,c){var e=/\.css(?:\?|$)/i.test(a),j=o.createElement(e?"link":"script"),s=b,y,B,C;if(f.isPlainObject(s)){b=s.success;y=s.error;B=s.timeout;c=s.charset}if(e){j.href=a;j.rel="stylesheet"}else{j.src=a;j.async=true}if(c)j.charset=c;if(e)f.isFunction(b)&&b.call(j);else m(j,function(){if(C){C.cancel();C=n}f.isFunction(b)&&b.call(j)});if(f.isFunction(y))C=f.later(function(){C=n;y()},(B||this.Config.timeout)*1E3);d.insertBefore(j,d.firstChild);return j}};g(f,l);var u=/^(.*)(seed|kissy)(-min)?\.js[^/]*/i,
w=/(seed|kissy)(-min)?\.js/i;f.__initLoader=function(){var a=o.getElementsByTagName("script");a=a[a.length-1];var b=a.src,c=a.getAttribute("data-combo-prefix")||"??";a=a.getAttribute("data-combo-sep")||",";a=b.split(a);var e=a[0];c=e.indexOf(c);if(c==-1)b=b.replace(u,"$1");else{b=e.substring(0,c);c=e.substring(c+2,e.length);if(c.match(w))b+=c.replace(u,"$1");else for(c=1;c<a.length;c++){e=a[c];if(e.match(w)){b+=e.replace(u,"$1");break}}}if(b.lastIndexOf("/",0)!=0&&b.lastIndexOf("http://",0)!=0&&b.lastIndexOf("https://",
0)!=0)b=p+b;a=b;this.Env.mods={};this.Env._loadQueue={};if(!this.Config.base)this.Config.base=v(a);if(!this.Config.timeout)this.Config.timeout=10};f.__initLoader();f.each(l,function(a,b){f.__APP_MEMBERS.push(b)});f.__APP_INIT_METHODS.push("__initLoader")})(KISSY);(function(f){f.config({combine:{core:["dom","ua","event","node","json","ajax","anim","base","cookie"]}})})(KISSY);
(function(f,n){function z(g){var m=typeof g;return g===null||m!=="object"&&m!=="function"}function A(g){return Array.prototype.slice.call(g)}var x=f.__HOST,v=x.document,i=v.documentElement,l=encodeURIComponent("[]"),q=false,o=[],d=false,h=/^#?([\w-]+)$/,k=/^(\w+)\[\]$/,r=/\S/;f.mix(f,{isWindow:function(g){return f.type(g)==="object"&&"setInterval"in g},makeArray:function(g){if(g===null||g===n)return[];if(f.isArray(g))return g;if(typeof g.length!=="number"||f.isString(g)||f.isFunction(g))return[g];
return A(g)},param:function(g,m){if(!f.isPlainObject(g))return"";m=m||"&";var p=[],u,w;for(u in g){w=g[u];u=encodeURIComponent(u);if(z(w))p.push(u,"=",encodeURIComponent(w+""),m);else if(f.isArray(w)&&w.length)for(var a=0,b=w.length;a<b;++a)z(w[a])&&p.push(u,l+"=",encodeURIComponent(w[a]+""),m)}p.pop();return p.join("")},unparam:function(g,m){if(typeof g!=="string"||(g=f.trim(g)).length===0)return{};for(var p={},u=g.split(m||"&"),w,a,b,c,e=0,j=u.length;e<j;++e){w=u[e].split("=");a=decodeURIComponent(w[0]);
try{b=decodeURIComponent(w[1]||"")}catch(s){b=w[1]||""}if((c=a.match(k))&&c[1]){p[c[1]]=p[c[1]]||[];p[c[1]].push(b)}else p[a]=b}return p},globalEval:function(g){if(g&&r.test(g)){var m=v.getElementsByTagName("head")[0]||i,p=v.createElement("script");p.text=g;m.insertBefore(p,m.firstChild);m.removeChild(p)}},later:function(g,m,p,u,w){m=m||0;u=u||{};var a=g,b=f.makeArray(w),c;if(f.isString(g))a=u[g];a||f.error("method undefined");g=function(){a.apply(u,b)};c=p?setInterval(g,m):setTimeout(g,m);return{id:c,
interval:p,cancel:function(){this.interval?clearInterval(c):clearTimeout(c)}}},ready:function(g){d||this._bindReady();q?g.call(x,this):o.push(g);return this},_bindReady:function(){var g=this,m=v.documentElement.doScroll,p=m?"onreadystatechange":"DOMContentLoaded",u=function(){g._fireReady()};d=true;if(v.readyState==="complete")return u();if(v.addEventListener){var w=function(){v.removeEventListener(p,w,false);u()};v.addEventListener(p,w,false);x.addEventListener("load",u,false)}else{var a=function(){if(v.readyState===
"complete"){v.detachEvent(p,a);u()}};v.attachEvent(p,a);x.attachEvent("onload",u);var b=false;try{b=x.frameElement==null}catch(c){}if(m&&b){var e=function(){try{m("left");u()}catch(j){setTimeout(e,1)}};e()}}},_fireReady:function(){if(!q){q=true;if(o){for(var g,m=0;g=o[m++];)g.call(x,this);o=null}}},available:function(g,m){if((g=(g+"").match(h)[1])&&f.isFunction(m))var p=1,u=f.later(function(){if(v.getElementById(g)&&(m()||1)||++p>500)u.cancel()},40,true)}});try{A(i.childNodes)}catch(t){A=function(g){for(var m=
[],p=g.length-1;p>=0;p--)m[p]=g[p];return m}}if(location&&(location.search||"").indexOf("ks-debug")!==-1)f.Config.debug=true})(KISSY);KISSY.add("core",function(f,n,z,A,x,v,i,l,q,o){n={UA:n,DOM:z,Event:A,Node:x,JSON:v,Ajax:i,Anim:l,Base:q,Cookie:o,one:x.one,all:x.List.all,get:z.get,query:z.query};f.mix(f,n);return n},{requires:["ua","dom","event","node","json","ajax","anim","base","cookie"]});KISSY.use("core");
