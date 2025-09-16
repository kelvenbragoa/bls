import{I as x,J as w,c as f,b as u,M as l,K as L,a7 as C,d as n,L as k,aa as $,a9 as y,aJ as O,Z as A,aq as W,a as U,k as M,w as h,s as F,v as E,a4 as R,a5 as G,t as J,e as r,r as Z,o as Q,bi as ee,F as te}from"./app-Dg6_If3w.js";import{s as re}from"./index-2UPZD8Yz.js";import{s as ae}from"./index-B0Bzvg-l.js";import{s as se}from"./index-D9M6F0mg.js";import{s as X}from"./index-kJG44KYi.js";import{a as D}from"./index-B5-4kyNr.js";import{s as ie}from"./index-BuOmVI7m.js";var ne=x`
    .p-skeleton {
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,oe={root:{position:"relative"}},le={root:function(e){var s=e.props;return["p-skeleton p-component",{"p-skeleton-circle":s.shape==="circle","p-skeleton-animation-none":s.animation==="none"}]}},ce=w.extend({name:"skeleton",style:ne,classes:le,inlineStyles:oe}),ue={name:"BaseSkeleton",extends:L,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:ce,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function B(t){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}function de(t,e,s){return(e=pe(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function pe(t){var e=me(t,"string");return B(e)=="symbol"?e:e+""}function me(t,e){if(B(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var o=s.call(t,e);if(B(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var I={name:"Skeleton",extends:ue,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return C(de({},this.shape,this.shape))}}},fe=["data-p"];function ve(t,e,s,o,d,a){return u(),f("div",l({class:t.cx("root"),style:[t.sx("root"),a.containerStyle],"aria-hidden":"true"},t.ptmi("root"),{"data-p":a.dataP}),null,16,fe)}I.render=ve;var he=x`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`,be={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ge=w.extend({name:"scrollpanel",style:he,classes:be}),ye={name:"BaseScrollPanel",extends:L,props:{step:{type:Number,default:5}},style:ge,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},Y={name:"ScrollPanel",extends:ye,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),s=getComputedStyle(this.$refs.xBar),o=O(this.$el)-parseInt(s.height,10);e["max-height"]!=="none"&&o===0&&(this.$refs.content.offsetHeight+parseInt(s.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var s=this.$refs.content.scrollWidth,o=this.$refs.content.clientWidth,d=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=o/s;var a=this.$refs.content.scrollHeight,i=this.$refs.content.clientHeight,g=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=i/a,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&$(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/s*100+"%;bottom:"+d+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&$(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/a*100+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+g+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,s){this.$refs.content[e]+=s,this.moveBar()},setTimer:function(e,s){var o=this;this.clearTimer(),this.timer=setTimeout(function(){o.repeat(e,s)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var s=this,o=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){s.$refs.content.scrollLeft+=o/s.scrollXRatio})},onMouseMoveForYBar:function(e){var s=this,o=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){s.$refs.content.scrollTop+=o/s.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&$(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&$(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&$(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var s=window.requestAnimationFrame||this.timeoutFrame;return s(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var s=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>s?s:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(s){e.onDocumentMouseMove(s)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(s){e.onDocumentMouseUp(s)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},we=["id"],$e=["aria-controls","aria-valuenow"],Be=["aria-controls","aria-valuenow"];function Se(t,e,s,o,d,a){return u(),f("div",l({class:t.cx("root")},t.ptmi("root")),[n("div",l({class:t.cx("contentContainer")},t.ptm("contentContainer")),[n("div",l({ref:"content",id:a.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),onMouseenter:e[1]||(e[1]=function(){return a.moveBar&&a.moveBar.apply(a,arguments)})},t.ptm("content")),[k(t.$slots,"default")],16,we)],16),n("div",l({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":a.contentId,"aria-valuenow":d.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return a.onXBarMouseDown&&a.onXBarMouseDown.apply(a,arguments)}),onKeydown:e[3]||(e[3]=function(i){return a.onKeyDown(i)}),onKeyup:e[4]||(e[4]=function(){return a.onKeyUp&&a.onKeyUp.apply(a,arguments)}),onFocus:e[5]||(e[5]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:e[6]||(e[6]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,$e),n("div",l({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":a.contentId,"aria-valuenow":d.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return a.onYBarMouseDown&&a.onYBarMouseDown.apply(a,arguments)}),onKeydown:e[8]||(e[8]=function(i){return a.onKeyDown(i)}),onKeyup:e[9]||(e[9]=function(){return a.onKeyUp&&a.onKeyUp.apply(a,arguments)}),onFocus:e[10]||(e[10]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,Be)],16)}Y.render=Se;var xe=x`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 0.15s;
    }

    .p-scrolltop.p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 0.15s;
    }
`,Le={root:function(e){var s=e.props;return["p-scrolltop",{"p-scrolltop-sticky":s.target!=="window"}]},icon:"p-scrolltop-icon"},ke=w.extend({name:"scrolltop",style:xe,classes:Le}),ze={name:"BaseScrollTop",extends:L,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:ke,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},q={name:"ScrollTop",extends:ze,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(A.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(W())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){A.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){A.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:se,Button:X}};function Me(t,e,s,o,d,a){var i=U("Button");return u(),M(G,l({name:"p-scrolltop",appear:"",onEnter:a.onEnter,onAfterLeave:a.onAfterLeave},t.ptm("transition")),{default:h(function(){return[d.visible?(u(),M(i,l({key:0,ref:a.containerRef,class:t.cx("root"),onClick:a.onClick,"aria-label":a.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:t.ptm("root")}),{icon:h(function(g){return[k(t.$slots,"icon",{class:E(t.cx("icon"))},function(){return[(u(),M(R(t.icon?"span":"ChevronUpIcon"),l({class:[t.cx("icon"),t.icon,g.class]},t.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):F("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}q.render=Me;var Ae={root:"p-avatar-group p-component"},De=w.extend({name:"avatargroup",classes:Ae}),Pe={name:"BaseAvatarGroup",extends:L,style:De,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},K={name:"AvatarGroup",extends:Pe,inheritAttrs:!1};function Te(t,e,s,o,d,a){return u(),f("div",l({class:t.cx("root")},t.ptmi("root")),[k(t.$slots,"default")],16)}K.render=Te;var Ce=x`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,Ue={root:function(e){var s=e.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Fe=w.extend({name:"avatar",style:Ce,classes:Ue}),Ee={name:"BaseAvatar",extends:L,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Fe,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function T(t,e,s){return(e=Re(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Re(t){var e=Xe(t,"string");return S(e)=="symbol"?e:e+""}function Xe(t,e){if(S(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var o=s.call(t,e);if(S(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var H={name:"Avatar",extends:Ee,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return C(T(T({},this.shape,this.shape),this.size,this.size))}}},Ie=["aria-labelledby","aria-label","data-p"],Ye=["data-p"],qe=["data-p"],Ke=["src","alt","data-p"];function He(t,e,s,o,d,a){return u(),f("div",l({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":a.dataP}),[k(t.$slots,"default",{},function(){return[t.label?(u(),f("span",l({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":a.dataP}),J(t.label),17,Ye)):t.$slots.icon?(u(),M(R(t.$slots.icon),{key:1,class:E(t.cx("icon"))},null,8,["class"])):t.icon?(u(),f("span",l({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":a.dataP}),null,16,qe)):t.image?(u(),f("img",l({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return a.onError&&a.onError.apply(a,arguments)})},t.ptm("image"),{"data-p":a.dataP}),null,16,Ke)):F("",!0)]})],16,Ie)}H.render=He;var _e=x`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,je={root:"p-overlaybadge"},Ve=w.extend({name:"overlaybadge",style:_e,classes:je}),Ne={name:"OverlayBadge",extends:D,style:Ve,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},_={name:"OverlayBadge",extends:Ne,inheritAttrs:!1,components:{Badge:D}};function Oe(t,e,s,o,d,a){var i=U("Badge");return u(),f("div",l({class:t.cx("root")},t.ptmi("root")),[k(t.$slots,"default"),r(i,l(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}_.render=Oe;const We={class:"card"},Ge={class:"flex flex-col md:flex-row gap-4"},Je={class:"md:w-1/2"},Ze={class:"md:w-1/2"},Qe={class:"flex flex-col md:flex-row gap-8"},et={class:"md:w-1/2"},tt={class:"card"},rt={class:"flex gap-2"},at={class:"flex gap-6"},st={class:"flex gap-2"},it={class:"flex items-start gap-2"},nt={class:"card"},ot={class:"card"},lt={class:"md:w-1/2"},ct={class:"card"},ut={class:"flex gap-2"},dt={class:"flex gap-2"},pt={class:"flex gap-2"},mt={class:"card"},ft={class:"flex items-center flex-col sm:flex-row"},vt={class:"flex items-center flex-col sm:flex-row"},ht={class:"flex items-center flex-col sm:flex-row"},bt={class:"card"},gt={class:"rounded-border border border-surface p-6"},yt={class:"flex mb-4"},wt={class:"flex justify-between mt-4"},Mt={__name:"MiscDoc",setup(t){const e=Z(0);let s=null;function o(){s=setInterval(()=>{let a=e.value+Math.floor(Math.random()*10)+1;a>=100&&(a=100),e.value=a},2e3)}function d(){clearInterval(s),s=null}return Q(()=>{o()}),ee(()=>{d()}),(a,i)=>{const g=ie,v=D,z=_,P=X,m=H,j=K,V=q,N=Y,c=ae,p=re,b=I;return u(),f(te,null,[n("div",We,[i[0]||(i[0]=n("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1)),n("div",Ge,[n("div",Je,[r(g,{value:e.value},null,8,["value"])]),n("div",Ze,[r(g,{value:50,showValue:!1})])])]),n("div",Qe,[n("div",et,[n("div",tt,[i[4]||(i[4]=n("div",{class:"font-semibold text-xl mb-4"},"Badge",-1)),n("div",rt,[r(v,{value:2}),r(v,{value:8,severity:"success"}),r(v,{value:4,severity:"info"}),r(v,{value:12,severity:"Warn"}),r(v,{value:3,severity:"danger"})]),i[5]||(i[5]=n("div",{class:"font-semibold my-4"},"Overlay",-1)),n("div",at,[r(z,{value:"2"},{default:h(()=>i[1]||(i[1]=[n("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1)])),_:1}),r(z,{value:"4",severity:"danger"},{default:h(()=>i[2]||(i[2]=[n("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1)])),_:1}),r(z,{severity:"danger"},{default:h(()=>i[3]||(i[3]=[n("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1)])),_:1})]),i[6]||(i[6]=n("div",{class:"font-semibold my-4"},"Button",-1)),n("div",st,[r(P,{label:"Emails",badge:"8",class:"mr-2"}),r(P,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),i[7]||(i[7]=n("div",{class:"font-semibold my-4"},"Sizes",-1)),n("div",it,[r(v,{value:2}),r(v,{value:4,size:"large",severity:"warn"}),r(v,{value:6,size:"xlarge",severity:"success"})])]),n("div",nt,[i[8]||(i[8]=n("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1)),i[9]||(i[9]=n("div",{class:"font-semibold mb-4"},"Group",-1)),r(j,null,{default:h(()=>[r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),r(m,{image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),r(m,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),i[10]||(i[10]=n("div",{class:"font-semibold my-4"},"Label - Circle",-1)),r(m,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),r(m,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),r(m,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),i[11]||(i[11]=n("div",{class:"font-semibold my-4"},"Icon - Badge",-1)),r(z,{value:"4",severity:"danger",class:"inline-flex"},{default:h(()=>[r(m,{label:"U",size:"xlarge"})]),_:1})]),n("div",ot,[i[13]||(i[13]=n("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1)),r(N,{style:{width:"250px",height:"200px"}},{default:h(()=>[i[12]||(i[12]=n("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1)),r(V,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),n("div",lt,[n("div",ct,[i[14]||(i[14]=n("div",{class:"font-semibold text-xl mb-4"},"Tag",-1)),i[15]||(i[15]=n("div",{class:"font-semibold mb-4"},"Default",-1)),n("div",ut,[r(c,{value:"Primary"}),r(c,{severity:"success",value:"Success"}),r(c,{severity:"info",value:"Info"}),r(c,{severity:"warn",value:"Warn"}),r(c,{severity:"danger",value:"Danger"})]),i[16]||(i[16]=n("div",{class:"font-semibold my-4"},"Pills",-1)),n("div",dt,[r(c,{value:"Primary",rounded:!0}),r(c,{severity:"success",value:"Success",rounded:!0}),r(c,{severity:"info",value:"Info",rounded:!0}),r(c,{severity:"warn",value:"Warn",rounded:!0}),r(c,{severity:"danger",value:"Danger",rounded:!0})]),i[17]||(i[17]=n("div",{class:"font-semibold my-4"},"Icons",-1)),n("div",pt,[r(c,{icon:"pi pi-user",value:"Primary"}),r(c,{icon:"pi pi-check",severity:"success",value:"Success"}),r(c,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),r(c,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),r(c,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),n("div",mt,[i[18]||(i[18]=n("div",{class:"font-semibold text-xl mb-4"},"Chip",-1)),i[19]||(i[19]=n("div",{class:"font-semibold mb-4"},"Basic",-1)),n("div",ft,[r(p,{label:"Action",class:"mr-2 mb-2"}),r(p,{label:"Comedy",class:"mr-2 mb-2"}),r(p,{label:"Mystery",class:"mr-2 mb-2"}),r(p,{label:"Thriller",removable:!0,class:"mb-2"})]),i[20]||(i[20]=n("div",{class:"font-semibold my-4"},"Icon",-1)),n("div",vt,[r(p,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),r(p,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),r(p,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),r(p,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),i[21]||(i[21]=n("div",{class:"font-semibold my-4"},"Image",-1)),n("div",ht,[r(p,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),r(p,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),r(p,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),n("div",bt,[i[22]||(i[22]=n("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1)),n("div",gt,[n("div",yt,[r(b,{shape:"circle",size:"4rem",class:"mr-2"}),n("div",null,[r(b,{width:"10rem",class:"mb-2"}),r(b,{width:"5rem",class:"mb-2"}),r(b,{height:".5rem"})])]),r(b,{width:"100%",height:"150px"}),n("div",wt,[r(b,{width:"4rem",height:"2rem"}),r(b,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{Mt as default};
