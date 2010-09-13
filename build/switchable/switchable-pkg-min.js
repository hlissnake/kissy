/*
Copyright 2010, KISSY UI Library v1.1.3
MIT Licensed
build time: Sep 13 10:15
*/
KISSY.add("switchable",function(c,j){function i(a,b){b=b||{};if(!("markupType"in b))if(b.panelCls)b.markupType=1;else if(b.panels)b.markupType=2;b=c.merge(i.Config,b);this.container=c.get(a);this.config=b;this.activeIndex=b.activeIndex;this._init()}var l=c.DOM,g=c.Event;i.Config={markupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:0,
activeTriggerCls:"ks-active",steps:1,viewSize:[]};i.Plugins=[];c.augment(i,c.EventTarget,{_init:function(){var a=this,b=a.config;a._parseMarkup();b.switchTo&&a.switchTo(b.switchTo);b.hasTriggers&&a._bindTriggers();c.each(i.Plugins,function(d){d.init&&d.init(a)});a.fire("init")},_parseMarkup:function(){var a=this.container,b=this.config,d,e=[],h=[];switch(b.markupType){case 0:if(d=c.get("."+b.navCls,a))e=l.children(d);d=c.get("."+b.contentCls,a);h=l.children(d);break;case 1:e=c.query("."+b.triggerCls,
a);h=c.query("."+b.panelCls,a);break;case 2:e=b.triggers;h=b.panels;break}a=h.length;this.length=a/b.steps;if(b.hasTriggers&&a>0&&e.length===0)e=this._generateTriggersMarkup(this.length);this.triggers=c.makeArray(e);this.panels=c.makeArray(h);this.content=d||h[0].parentNode},_generateTriggersMarkup:function(a){var b=this.config,d=l.create("<ul>"),e,h;d.className=b.navCls;for(h=0;h<a;h++){e=l.create("<li>");if(h===this.activeIndex)e.className=b.activeTriggerCls;e.innerHTML=h+1;d.appendChild(e)}this.container.appendChild(d);
return l.children(d)},_bindTriggers:function(){var a=this,b=a.config,d=a.triggers,e,h,f=d.length;for(h=0;h<f;h++)(function(k){e=d[k];g.on(e,"click",function(){a._onFocusTrigger(k)});if(b.triggerType==="mouse"){g.on(e,"mouseenter",function(){a._onMouseEnterTrigger(k)});g.on(e,"mouseleave",function(){a._onMouseLeaveTrigger(k)})}})(h)},_onFocusTrigger:function(a){if(this._triggerIsValid(a)){this._cancelSwitchTimer();this.switchTo(a)}},_onMouseEnterTrigger:function(a){var b=this;if(b._triggerIsValid(a))b.switchTimer=
c.later(function(){b.switchTo(a)},b.config.delay*1E3)},_onMouseLeaveTrigger:function(){this._cancelSwitchTimer()},_triggerIsValid:function(a){return this.activeIndex!==a},_cancelSwitchTimer:function(){if(this.switchTimer){this.switchTimer.cancel();this.switchTimer=j}},switchTo:function(a,b){var d=this.config,e=this.triggers,h=this.panels,f=this.activeIndex,k=d.steps,o=f*k,p=a*k;if(!this._triggerIsValid(a))return this;if(this.fire("beforeSwitch",{toIndex:a})===false)return this;if(d.hasTriggers)this._switchTrigger(f>
-1?e[f]:null,e[a]);if(b===j)b=a>f?"forward":"backward";this._switchView(h.slice(o,o+k),h.slice(p,p+k),a,b);this.activeIndex=a;return this},_switchTrigger:function(a,b){var d=this.config.activeTriggerCls;a&&l.removeClass(a,d);l.addClass(b,d)},_switchView:function(a,b,d){l.css(a,"display","none");l.css(b,"display","block");this._fireOnSwitch(d)},_fireOnSwitch:function(a){this.fire("switch",{currentIndex:a})},prev:function(){var a=this.activeIndex;this.switchTo(a>0?a-1:this.length-1,"backward")},next:function(){var a=
this.activeIndex;this.switchTo(a<this.length-1?a+1:0,"forward")}});c.Switchable=i},{requires:["core"]});
KISSY.add("autoplay",function(c,j){var i=c.Event,l=c.Switchable;c.mix(l.Config,{autoplay:false,interval:5,pauseOnHover:true});l.Plugins.push({name:"autoplay",init:function(g){function a(){e=c.later(function(){g.paused||g.switchTo(g.activeIndex<g.length-1?g.activeIndex+1:0,"forward")},d,true)}var b=g.config,d=b.interval*1E3,e;if(b.autoplay){if(b.pauseOnHover){i.on(g.container,"mouseenter",function(){if(e){e.cancel();e=j}g.paused=true});i.on(g.container,"mouseleave",function(){g.paused=false;a()})}a()}}})},
{host:"switchable"});
KISSY.add("effect",function(c,j){var i=c.DOM,l=c.Anim,g=c.Switchable,a;c.mix(g.Config,{effect:"none",duration:0.5,easing:"easeNone"});g.Effects={none:function(b,d,e){i.css(b,"display","none");i.css(d,"display","block");e()},fade:function(b,d,e){b.length!==1&&c.error("fade effect only supports steps == 1.");var h=this,f=h.config,k=b[0],o=d[0];h.anim&&h.anim.stop(true);i.css(o,"opacity",1);h.anim=(new l(k,{opacity:0},f.duration,f.easing,function(){h.anim=j;i.css(o,"z-index",9);i.css(k,"z-index",1);
e()})).run()},scroll:function(b,d,e,h){var f=this;b=f.config;d=b.effect==="scrollx";var k={};k[d?"left":"top"]=-(f.viewSize[d?0:1]*h)+"px";f.anim&&f.anim.stop();f.anim=(new l(f.content,k,b.duration,b.easing,function(){f.anim=j;e()})).run()}};a=g.Effects;a.scrollx=a.scrolly=a.scroll;g.Plugins.push({name:"effect",init:function(b){var d=b.config,e=d.effect,h=b.panels,f=b.content,k=d.steps,o=b.activeIndex,p=h.length;b.viewSize=[d.viewSize[0]||h[0].offsetWidth*k,d.viewSize[1]||h[0].offsetHeight*k];if(e!==
"none"){c.each(h,function(r){i.css(r,"display","block")});switch(e){case "scrollx":case "scrolly":i.css(f,"position","absolute");i.css(f.parentNode,"position","relative");if(e==="scrollx"){i.css(h,"float","left");i.width(f,b.viewSize[0]*(p/k))}break;case "fade":var q=o*k,s=q+k-1,n;c.each(h,function(r,t){n=t>=q&&t<=s;i.css(r,{opacity:n?1:0,position:"absolute",zIndex:n?9:1})});break}}}});c.augment(g,{_switchView:function(b,d,e,h){var f=this,k=f.config.effect;(c.isFunction(k)?k:a[k]).call(f,b,d,function(){f._fireOnSwitch(e)},
e,h)}})},{host:"switchable"});
KISSY.add("circular",function(c,j){function i(n,r,t,u,w){var m=this;n=m.config;r=m.length;var x=m.activeIndex,v=n.scrollType===q,y=v?e:h,z=m.viewSize[v?0:1];v=-z*u;var B={},C,A=w===p;if(C=A&&x===0&&u===r-1||w===o&&x===r-1&&u===0)v=l.call(m,m.panels,u,A,y,z);B[y]=v+k;m.anim&&m.anim.stop();m.anim=(new c.Anim(m.content,B,n.duration,n.easing,function(){C&&g.call(m,m.panels,u,A,y,z);m.anim=j;t()})).run()}function l(n,r,t,u,w){var m=this.config.steps;r=this.length;var x=t?r-1:0,v=(x+1)*m;for(m=x*m;m<v;m++){a.css(n[m],
b,d);a.css(n[m],u,(t?-1:1)*w*r)}return t?w:-w*r}function g(n,r,t,u,w){var m=this.config.steps;r=this.length;var x=t?r-1:0,v=(x+1)*m;for(m=x*m;m<v;m++){a.css(n[m],b,f);a.css(n[m],u,f)}a.css(this.content,u,t?-w*(r-1):f)}var a=c.DOM,b="position",d="relative",e="left",h="top",f="",k="px",o="forward",p="backward",q="scrollx",s=c.Switchable;c.mix(s.Config,{circular:false});s.Plugins.push({name:"circular",init:function(n){n=n.config;if(n.circular&&(n.effect===q||n.effect==="scrolly")){n.scrollType=n.effect;
n.effect=i}}})},{host:"switchable"});
KISSY.add("lazyload",function(c){var j=c.DOM,i="beforeSwitch",l="img-src",g="area-data",a={},b=c.Switchable;a[l]="data-ks-lazyload-custom";a[g]="ks-datalazyload-custom";c.mix(b.Config,{lazyDataType:g});b.Plugins.push({name:"lazyload",init:function(d){function e(q){var s=k.steps;q=q.toIndex*s;f.loadCustomLazyData(d.panels.slice(q,q+s),o);h()&&d.detach(i,e)}function h(){var q,s,n,r=o===l;if(q=r?"img":o===g?"textarea":""){q=c.query(q,d.container);s=0;for(n=q.length;s<n;s++)if(r?j.attr(q[s],p):j.hasClass(q[s],
p))return false}return true}var f=c.DataLazyload,k=d.config,o=k.lazyDataType,p=a[o];!f||!o||!p||d.on(i,e)}})},{host:"switchable"});KISSY.add("autorender",function(c){c.Switchable.autoRender=function(j,i){j="."+(j||"KS_Widget");c.query(j,i).each(function(l){var g=l.getAttribute("data-widget-type"),a;if(g&&"Switchable Tabs Slide Carousel Accordion".indexOf(g)>-1)try{if(a=l.getAttribute("data-widget-config"))a=a.replace(/'/g,'"');new c[g](l,c.JSON.parse(a))}catch(b){}})}},{host:"switchable"});
KISSY.add("tabs",function(c){function j(i,l){if(!(this instanceof j))return new j(i,l);j.superclass.constructor.call(this,i,l)}c.extend(j,c.Switchable);c.Tabs=j},{host:"switchable"});KISSY.add("slide",function(c){function j(l,g){if(!(this instanceof j))return new j(l,g);j.superclass.constructor.call(this,l,c.merge(i,g))}var i={autoplay:true,circular:true};c.extend(j,c.Switchable);c.Slide=j},{host:"switchable"});
KISSY.add("carousel",function(c,j){function i(f,k){var o=this;if(!(o instanceof i))return new i(f,k);o.on("init",function(){l(o)});i.superclass.constructor.call(o,f,c.merge(h,k))}function l(f){var k=f.config,o=k.disableBtnCls;c.each(["prev","next"],function(p){var q=f[p+"Btn"]=c.get(b+k[p+"BtnCls"],f.container);a.on(q,"click",function(s){s.preventDefault();g.hasClass(q,o)||f[p]()})});k.circular||f.on("switch",function(p){p=p.currentIndex;p=p===0?f[d]:p===f.length-1?f[e]:j;g.removeClass([f[d],f[e]],
o);p&&g.addClass(p,o)});a.on(f.panels,"click focus",function(){f.fire("itemSelected",{item:this})})}var g=c.DOM,a=c.Event,b=".",d="prevBtn",e="nextBtn",h={circular:true,prevBtnCls:"ks-switchable-prev-btn",nextBtnCls:"ks-switchable-next-btn",disableBtnCls:"ks-switchable-disable-btn"};c.extend(i,c.Switchable);c.Carousel=i},{host:"switchable"});
KISSY.add("accordion",function(c){function j(g,a){if(!(this instanceof j))return new j(g,a);j.superclass.constructor.call(this,g,c.merge(l,a));if(this.config.multiple)this._switchTrigger=function(){}}var i=c.DOM,l={markupType:1,triggerType:"click",multiple:false};c.extend(j,c.Switchable);c.Accordion=j;c.augment(j,{_triggerIsValid:function(g){return this.activeIndex!==g||this.config.multiple},_switchView:function(g,a,b){var d=this.config,e=a[0];if(d.multiple){i.toggleClass(this.triggers[b],d.activeTriggerCls);
i.css(e,"display",e.style.display=="none"?"block":"none");this._fireOnSwitch(b)}else j.superclass._switchView.call(this,g,a,b)}})},{host:"switchable"});
