(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f764a4ac"],{"092d":function(t,e,n){"use strict";function o(t){var e=t.parentNode;e&&e.removeChild(t)}n.d(e,"a",(function(){return o}))},1325:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l}));var o=n("a142"),i=!1;if(!o["f"])try{var a={};Object.defineProperty(a,"passive",{get:function(){i=!0}}),window.addEventListener("test-passive",null,a)}catch(u){}function r(t,e,n,a){void 0===a&&(a=!1),o["f"]||t.addEventListener(e,n,!!i&&{capture:!1,passive:a})}function s(t,e,n){o["f"]||t.removeEventListener(e,n)}function c(t){t.stopPropagation()}function l(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},1421:function(t,e,n){"use strict";function o(t){return"string"===typeof t?document.querySelector(t):t()}function i(t){var e=void 0===t?{}:t,n=e.ref,i=e.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,e=this.getContainer,a=n?this.$refs[n]:this.$el;e?t=o(e):this.$parent&&(t=this.$parent.$el),t&&t!==a.parentNode&&t.appendChild(a),i&&i.call(this)}}}}n.d(e,"a",(function(){return i}))},"1a04":function(t,e,n){},"3cb8":function(t,e,n){"use strict";n("ee6a")},"46b4":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"food_container"},[n("div",{staticClass:"clearfixed"},[n("head-top",{attrs:{goBack:"true",headTitle:t.$route.query.title}})],1),n("dropdown-menu",[n("dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),n("dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),n("section",{staticClass:"shop_list_container"},[t.latitude?n("shoplist",{attrs:{geohash:t.geohash,restaurantCategoryId:t.restaurant_category_id,restaurantCategoryIds:t.restaurant_category_ids,sortByType:t.sortByType,deliveryMode:t.delivery_mode,confirmSelect:t.confirmStatus,supportIds:t.support_ids}}):t._e()],1)],1)},i=[],a=(n("96cf"),n("1da1")),r=n("5530"),s=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("1a04"),n("4d75"),n("b2cc"),n("d282")),c=n("1325"),l=n("1421");function u(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.componentInstance&&n(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&n(t.children)}))}return n(t),e}function d(t,e){var n=e.$vnode.componentOptions;if(n&&n.children){var o=u(n.children);t.sort((function(t,e){return o.indexOf(t.$vnode)-o.indexOf(e.$vnode)}))}}function h(t,e){var n,o;void 0===e&&(e={});var i=e.indexKey||"index";return{inject:(n={},n[t]={default:null},n),computed:(o={parent:function(){return this.disableBindRelation?null:this[t]}},o[i]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},o),watch:{disableBindRelation:function(t){t||this.bindRelation()}},mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);d(t,this.parent),this.parent.children=t}}}}}function f(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}var p=n("7744"),v=n("ad06"),b=n("a142"),m=n("6605"),y=Object(s["a"])("popup"),O=y[0],g=y[1],w=O({mixins:[Object(m["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},methods:{onClickCloseIcon:function(t){this.$emit("click-close-icon",t),this.close()}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,o=this.position,i=this.duration,a="center"===o,r=this.transition||(a?"van-fade":"van-popup-slide-"+o),s={};if(Object(b["c"])(i)){var c=a?"animationDuration":"transitionDuration";s[c]=i+"s"}return e("transition",{attrs:{appear:this.transitionAppear,name:r},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:s,class:g((t={round:n},t[o]=o,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(v["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:g("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}}}),k=Object(s["a"])("dropdown-item"),S=k[0],C=k[1],x=S({mixins:[Object(l["a"])({ref:"wrapper"}),h("vanDropdownMenu")],props:{value:null,title:String,disabled:Boolean,titleClass:String,options:{type:Array,default:function(){return[]}},lazyRender:{type:Boolean,default:!0}},data:function(){return{transition:!0,showPopup:!1,showWrapper:!1}},computed:{displayTitle:function(){var t=this;if(this.title)return this.title;var e=this.options.filter((function(e){return e.value===t.value}));return e.length?e[0].text:""}},watch:{showPopup:function(t){this.bindScroll(t)}},beforeCreate:function(){var t=this,e=function(e){return function(){return t.$emit(e)}};this.onOpen=e("open"),this.onClose=e("close"),this.onOpened=e("opened")},methods:{toggle:function(t,e){void 0===t&&(t=!this.showPopup),void 0===e&&(e={}),t!==this.showPopup&&(this.transition=!e.immediate,this.showPopup=t,t&&(this.parent.updateOffset(),this.showWrapper=!0))},bindScroll:function(t){var e=this.parent.scroller,n=t?c["b"]:c["a"];n(e,"scroll",this.onScroll,!0)},onScroll:function(){this.parent.updateOffset()},onClickWrapper:function(t){this.getContainer&&t.stopPropagation()}},render:function(){var t=this,e=arguments[0],n=this.parent,o=n.zIndex,i=n.offset,a=n.overlay,r=n.duration,s=n.direction,c=n.activeColor,l=n.closeOnClickOverlay,u=this.options.map((function(n){var o=n.value===t.value;return e(p["a"],{attrs:{clickable:!0,icon:n.icon,title:n.text},key:n.value,class:C("option",{active:o}),style:{color:o?c:""},on:{click:function(){t.showPopup=!1,n.value!==t.value&&(t.$emit("input",n.value),t.$emit("change",n.value))}}},[o&&e(v["a"],{class:C("icon"),attrs:{color:c,name:"success"}})])})),d={zIndex:o};return"down"===s?d.top=i+"px":d.bottom=i+"px",e("div",[e("div",{directives:[{name:"show",value:this.showWrapper}],ref:"wrapper",style:d,class:C([s]),on:{click:this.onClickWrapper}},[e(w,{attrs:{overlay:a,position:"down"===s?"top":"bottom",duration:this.transition?r:0,lazyRender:this.lazyRender,overlayStyle:{position:"absolute"},closeOnClickOverlay:l},class:C("content"),on:{open:this.onOpen,close:this.onClose,opened:this.onOpened,closed:function(){t.showWrapper=!1,t.$emit("closed")}},model:{value:t.showPopup,callback:function(e){t.showPopup=e}}},[u,this.slots("default")])])])}}),j=(n("aec8"),n("a8c1")),$=function(t){return{props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var e=this,n=function(n){e.closeOnClickOutside&&!e.$el.contains(n.target)&&e[t.method]()};return{clickOutsideHandler:n}},mounted:function(){Object(c["b"])(document,t.event,this.clickOutsideHandler)},beforeDestroy:function(){Object(c["a"])(document,t.event,this.clickOutsideHandler)}}},I=Object(s["a"])("dropdown-menu"),B=I[0],P=I[1],z=B({mixins:[f("vanDropdownMenu"),$({event:"click",method:"onClickOutside"})],props:{zIndex:[Number,String],activeColor:String,overlay:{type:Boolean,default:!0},duration:{type:[Number,String],default:.2},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0}},data:function(){return{offset:0}},computed:{scroller:function(){return Object(j["a"])(this.$el)},opened:function(){return this.children.some((function(t){return t.showWrapper}))},barStyle:function(){if(this.opened&&Object(b["c"])(this.zIndex))return{zIndex:1+this.zIndex}}},methods:{updateOffset:function(){if(this.$refs.bar){var t=this.$refs.bar.getBoundingClientRect();"down"===this.direction?this.offset=t.bottom:this.offset=window.innerHeight-t.top}},toggleItem:function(t){this.children.forEach((function(e,n){n===t?e.toggle():e.showPopup&&e.toggle(!1,{immediate:!0})}))},onClickOutside:function(){this.children.forEach((function(t){t.toggle(!1)}))}},render:function(){var t=this,e=arguments[0],n=this.children.map((function(n,o){return e("div",{attrs:{role:"button",tabindex:n.disabled?-1:0},class:P("item",{disabled:n.disabled}),on:{click:function(){n.disabled||t.toggleItem(o)}}},[e("span",{class:[P("title",{active:n.showPopup,down:n.showPopup===("down"===t.direction)}),n.titleClass],style:{color:n.showPopup?t.activeColor:""}},[e("div",{class:"van-ellipsis"},[n.slots("title")||n.displayTitle])])])}));return e("div",{class:P()},[e("div",{ref:"bar",style:this.barStyle,class:P("bar",{opened:this.opened})},[n]),this.slots("default")])}}),D=n("2f62"),R=n("f392"),_=n("7387"),N=n("f96b"),T={name:"food",data:function(){return{geohash:"",foodTitle:"",restaurant_category_id:"",restaurant_category_ids:"",sortBy:"",category:null,categoryDetail:null,sortByType:null,Delivery:null,Activity:null,delivery_mode:null,support_ids:[],filterNum:0,confirmStatus:!1,value1:0,value2:"a",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"智能排序",value:"a"},{text:"距离最近",value:"b"},{text:"销量最高",value:"c"},{text:"起送价最低",value:"d"},{text:"配送速度最快",value:"e"},{text:"评价最高",value:"f"}]}},components:{headTop:R["a"],DropdownMenu:z,DropdownItem:x,Shoplist:_["a"]},created:function(){this.initData()},computed:Object(r["a"])({},Object(D["d"])(["latitude","longitude"])),methods:Object(r["a"])(Object(r["a"])({},Object(D["c"])(["RECORD_ADDRESS"])),{},{initData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.geohash=t.$route.query.geohash,t.restaurant_category_id=t.$route.query.restaurant_category_id,t.latitude){e.next=7;break}return e.next=5,Object(N["k"])(t.geohash);case 5:n=e.sent,t.RECORD_ADDRESS(n);case 7:case"end":return e.stop()}}),e)})))()}})},E=T,L=(n("3cb8"),n("2877")),M=Object(L["a"])(E,o,i,!1,null,"398b87fe",null);e["default"]=M.exports},"48f4":function(t,e,n){"use strict";function o(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function i(t,e){var n=e.to,i=e.url,a=e.replace;if(n&&t){var r=t[a?"replace":"push"](n);r&&r.catch&&r.catch((function(t){if(t&&!o(t))throw t}))}else i&&(a?location.replace(i):location.href=i)}function a(t){i(t.parent&&t.parent.$router,t.props)}n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var r={url:String,replace:Boolean,to:[String,Object]}},"4d75":function(t,e,n){},6605:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var o={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]}},i=n("c31d"),a=n("2638"),r=n.n(a),s=n("d282"),c=n("a142"),l=n("ba31"),u=n("1325"),d=Object(s["a"])("overlay"),h=d[0],f=d[1];function p(t){Object(u["c"])(t,!0)}function v(t,e,n,o){var a=Object(i["a"])({zIndex:e.zIndex},e.customStyle);return Object(c["c"])(e.duration)&&(a.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",r()([{directives:[{name:"show",value:e.show}],style:a,class:[f(),e.className],on:{touchmove:e.lockScroll?p:c["g"]}},Object(l["b"])(o,!0)]),[null==n.default?void 0:n.default()])])}v.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}};var b=h(v),m=n("092d"),y={className:"",customStyle:{}};function O(t){return Object(l["c"])(b,{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function g(t){var e=o.find(t);if(e){var n=t.$el,a=e.config,r=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(r.$el,n),Object(i["a"])(r,y,a,{show:!0})}}function w(t,e){var n=o.find(t);if(n)n.config=e;else{var i=O(t);o.stack.push({vm:t,config:e,overlay:i})}g(t)}function k(t){var e=o.find(t);e&&(e.overlay.show=!1)}function S(t){var e=o.find(t);e&&Object(m["a"])(e.overlay.$el)}var C=n("a8c1"),x=10;function j(t,e){return t>e&&t>x?"horizontal":e>t&&e>x?"vertical":""}var $={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||j(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},bindTouchEvent:function(t){var e=this.onTouchStart,n=this.onTouchMove,o=this.onTouchEnd;Object(u["b"])(t,"touchstart",e),Object(u["b"])(t,"touchmove",n),o&&(Object(u["b"])(t,"touchend",o),Object(u["b"])(t,"touchcancel",o))}}},I=n("1421"),B=0;function P(t){var e="binded_"+B++;function n(){this[e]||(t.call(this,u["b"],!0),this[e]=!0)}function o(){this[e]&&(t.call(this,u["a"],!1),this[e]=!1)}return{mounted:n,activated:n,deactivated:o,beforeDestroy:o}}var z={mixins:[P((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?u["b"]:u["a"];e(window,"popstate",this.onPopstate)}}}},D={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function R(t){return void 0===t&&(t={}),{mixins:[$,z,Object(I["a"])({afterPortal:function(){this.overlay&&g()}})],props:D,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){S(this),this.opened&&this.removeLock(),this.getContainer&&Object(m["a"])(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock())},addLock:function(){this.lockScroll&&(Object(u["b"])(document,"touchstart",this.touchStart),Object(u["b"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++)},removeLock:function(){this.lockScroll&&o.lockCount&&(o.lockCount--,Object(u["a"])(document,"touchstart",this.touchStart),Object(u["a"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(k(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(C["a"])(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,a=n.scrollTop,r="11";0===a?r=i>=o?"00":"01":a+i>=o&&(r="10"),"11"===r||"vertical"!==this.direction||parseInt(r,2)&parseInt(e,2)||Object(u["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?w(t,{zIndex:o.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):k(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++o.zIndex+t}}}}},7744:function(t,e,n){"use strict";var o=n("c31d"),i=n("2638"),a=n.n(i),r=n("d282"),s=n("a142"),c=n("ba31"),l=n("48f4"),u={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0},clickable:{type:Boolean,default:null}},d=n("ad06"),h=Object(r["a"])("cell"),f=h[0],p=h[1];function v(t,e,n,o){var i,r=e.icon,u=e.size,h=e.title,f=e.label,v=e.value,b=e.isLink,m=n.title||Object(s["c"])(h);function y(){var o=n.label||Object(s["c"])(f);if(o)return t("div",{class:[p("label"),e.labelClass]},[n.label?n.label():f])}function O(){if(m)return t("div",{class:[p("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[h]),y()])}function g(){var o=n.default||Object(s["c"])(v);if(o)return t("div",{class:[p("value",{alone:!m}),e.valueClass]},[n.default?n.default():t("span",[v])])}function w(){return n.icon?n.icon():r?t(d["a"],{class:p("left-icon"),attrs:{name:r,classPrefix:e.iconPrefix}}):void 0}function k(){var o=n["right-icon"];if(o)return o();if(b){var i=e.arrowDirection;return t(d["a"],{class:p("right-icon"),attrs:{name:i?"arrow-"+i:"arrow"}})}}function S(t){Object(c["a"])(o,"click",t),Object(l["a"])(o)}var C=null!=(i=e.clickable)?i:b,x={clickable:C,center:e.center,required:e.required,borderless:!e.border};return u&&(x[u]=u),t("div",a()([{class:p(x),attrs:{role:C?"button":null,tabindex:C?0:null},on:{click:S}},Object(c["b"])(o)]),[w(),O(),g(),k(),null==n.extra?void 0:n.extra()])}v.props=Object(o["a"])({},u,l["b"]);e["a"]=f(v)},a71a:function(t,e,n){},a8c1:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=/scroll|auto/i;function i(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==e){var i=window.getComputedStyle(n),a=i.overflowY;if(o.test(a))return n;n=n.parentNode}return e}},aec8:function(t,e,n){},b2cc:function(t,e,n){},ee6a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-f764a4ac.d97895d3.js.map