import{I as G,J as V,a as K,ae as J,c as d,b as c,F as L,m as D,s as I,M as m,d as p,e as g,j as R,k as y,a4 as P,v as E,t as T,w as x,av as oe,a5 as Z,L as C,N as $,K as M,Q as b,aX as z,T as k,S as O,bh as ae,a0 as S,al as ee,ac as H,an as U,af as ue,am as He,bb as _e,ab as W,U as le,Z as B,P as Be,bd as Re,aZ as Ne,a_ as Ge,aQ as je,$ as Ue,a7 as qe,ay as q,a1 as _,r as A,l as F}from"./app-BlaQt3nh.js";import{s as me}from"./index-BLvHuV3p.js";import{s as te}from"./index-Cs2pO2_a.js";import{s as We}from"./index-B3g_Q6Sj.js";import{s as Ze}from"./index-DCLBVkeV.js";import{s as ce}from"./index-BbJ7k9Al.js";import{s as Xe}from"./index-B4-Nx9Ph.js";import{s as Ye}from"./index-CRMlNijh.js";import{s as Qe}from"./index-BYDG-mb6.js";import{s as Je,a as $e,b as et}from"./index-GIWSX92O.js";import{s as tt}from"./index-BWg59r2T.js";import{s as nt,a as it}from"./index-BwL6jjMB.js";import{s as at}from"./index-CSh4kwL1.js";import"./index-Ghx-akHS.js";import"./index-BqcKIzOL.js";import"./index-DceSIrGu.js";import"./index-DwNcPbH1.js";import"./index-BKWIAAx0.js";import"./index-BuptCOd5.js";var st=G`
    .p-panelmenu {
        display: flex;
        flex-direction: column;
        gap: dt('panelmenu.gap');
    }

    .p-panelmenu-panel {
        background: dt('panelmenu.panel.background');
        border-width: dt('panelmenu.panel.border.width');
        border-style: solid;
        border-color: dt('panelmenu.panel.border.color');
        color: dt('panelmenu.panel.color');
        border-radius: dt('panelmenu.panel.border.radius');
        padding: dt('panelmenu.panel.padding');
    }

    .p-panelmenu-panel:first-child {
        border-width: dt('panelmenu.panel.first.border.width');
        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');
        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');
    }

    .p-panelmenu-panel:last-child {
        border-width: dt('panelmenu.panel.last.border.width');
        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');
        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');
    }

    .p-panelmenu-header {
        outline: 0 none;
    }

    .p-panelmenu-header-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        outline-color: transparent;
        color: dt('panelmenu.item.color');
    }

    .p-panelmenu-header-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .p-panelmenu-header-icon,
    .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.color');
    }

    .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.color');
    }

    .p-panelmenu-submenu-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-submenu {
        margin: 0;
        padding: 0 0 0 dt('panelmenu.submenu.indent');
        outline: 0;
        list-style: none;
    }

    .p-panelmenu-submenu:dir(rtl) {
        padding: 0 dt('panelmenu.submenu.indent') 0 0;
    }

    .p-panelmenu-item-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu-item-label {
        line-height: 1;
    }

    .p-panelmenu-item-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        color: dt('panelmenu.item.color');
        outline-color: transparent;
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }
`,rt={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var n=e.instance,a=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":n.isItemActive(a)&&!!a.items,"p-disabled":n.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var n=e.instance,a=e.processedItem;return["p-panelmenu-item",{"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},ot=V.extend({name:"panelmenu",style:st,classes:rt}),ut={name:"BasePanelMenu",extends:M,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:ot,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},de={name:"PanelMenuSub",hostName:"PanelMenu",extends:M,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?z(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{item:n.item,index:a,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-toggle",{processedItem:n,expanded:!this.isItemActive(n)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:m({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,n)),icon:m({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,n)),label:m({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n)),submenuicon:m({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,n))}}},components:{ChevronRightIcon:te,ChevronDownIcon:me},directives:{ripple:$}},lt=["tabindex"],mt=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],ct=["onClick","onMousemove"],dt=["href","target"];function pt(t,e,n,a,s,i){var l=K("PanelMenuSub",!0),u=J("ripple");return c(),d("ul",{class:E(t.cx("submenu")),tabindex:n.tabindex},[(c(!0),d(L,null,D(n.items,function(r,o){return c(),d(L,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(c(),d("li",m({key:0,id:i.getItemId(r),class:[t.cx("item",{processedItem:r}),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"treeitem","aria-label":i.getItemLabel(r),"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(o),ref_for:!0},i.getPTOptions("item",r,o),{"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",m({class:t.cx("itemContent"),onClick:function(v){return i.onItemClick(v,r)},onMousemove:function(v){return i.onItemMouseMove(v,r)},ref_for:!0},i.getPTOptions("itemContent",r,o)),[n.templates.item?(c(),y(P(n.templates.item),{key:1,item:r.item,root:!1,active:i.isItemActive(r),hasSubmenu:i.isItemGroup(r),label:i.getItemLabel(r),props:i.getMenuItemProps(r,o)},null,8,["item","active","hasSubmenu","label","props"])):R((c(),d("a",m({key:0,href:i.getItemProp(r,"url"),class:t.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",r,o)),[i.isItemGroup(r)?(c(),d(L,{key:0},[n.templates.submenuicon?(c(),y(P(n.templates.submenuicon),m({key:0,class:t.cx("submenuIcon"),active:i.isItemActive(r),ref_for:!0},i.getPTOptions("submenuIcon",r,o)),null,16,["class","active"])):(c(),y(P(i.isItemActive(r)?"ChevronDownIcon":"ChevronRightIcon"),m({key:1,class:t.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",r,o)),null,16,["class"]))],64)):I("",!0),n.templates.itemicon?(c(),y(P(n.templates.itemicon),{key:1,item:r.item,class:E(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(c(),d("span",m({key:2,class:[t.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions("itemIcon",r,o)),null,16)):I("",!0),p("span",m({class:t.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",r,o)),T(i.getItemLabel(r)),17)],16,dt)),[[u]])],16,ct),g(Z,m({name:"p-toggleable-content",ref_for:!0},t.ptm("transition")),{default:x(function(){return[R(p("div",m({class:t.cx("contentContainer"),ref_for:!0},t.ptm("contentContainer")),[i.isItemVisible(r)&&i.isItemGroup(r)?(c(),y(l,m({key:0,id:i.getItemId(r)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:r.items,level:n.level+1,templates:n.templates,activeItemPath:n.activeItemPath,onItemToggle:i.onItemToggle,onItemMousemove:e[0]||(e[0]=function(f){return t.$emit("item-mousemove",f)}),pt:t.pt,unstyled:t.unstyled,ref_for:!0},t.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):I("",!0)],16),[[oe,i.isItemActive(r)]])]}),_:2},1040)],16,mt)):I("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(c(),d("li",m({key:1,style:i.getItemProp(r,"style"),class:[t.cx("separator"),i.getItemProp(r,"class")],role:"separator",ref_for:!0},t.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,lt)}de.render=pt;function ft(t,e){return gt(t)||It(t,e)||bt(t,e)||ht()}function ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(t,e){if(t){if(typeof t=="string")return se(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(t,e):void 0}}function se(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function It(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,s,i,l,u=[],r=!0,o=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(r=(a=i.call(n)).done)&&(u.push(a.value),u.length!==e);r=!0);}catch(f){o=!0,s=f}finally{try{if(!r&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(o)throw s}}return u}}function gt(t){if(Array.isArray(t))return t}var pe={name:"PanelMenuList",hostName:"PanelMenu",extends:M,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},created:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,n){return e&&e.item?z(e.item[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.parentKey})},isItemGroup:function(e){return b(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ee(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var n=b(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:n,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var n=b(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:n,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var n=this;if(b(this.focusedItem)){var a=this.activeItemPath.some(function(s){return s.key===n.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(s){return s.key!==n.focusedItem.key}):this.focusedItem=b(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var n=this;if(b(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var s=this.activeItemPath.some(function(i){return i.key===n.focusedItem.key});s?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==n.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(b(this.focusedItem)){var n=k(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&(k(n,'[data-pc-section="itemlink"]')||k(n,"a,button"));a?a.click():n&&n.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var n=e.processedItem,a=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:n.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==n.parentKey}),a&&this.activeItemPath.push(n)),this.focusedItem=n,S(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,n){var a=e.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(n)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(n){return e.isValidItem(n)})},findLastItem:function(){var e=this;return ae(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItem:function(e){var n=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),s=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(i){return n.isValidItem(i)}):void 0;return s||e},findPrevItem:function(e){var n=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),s=a>0?ae(this.visibleItems.slice(0,a),function(i){return n.isValidItem(i)}):void 0;return s||e},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=null,i=!1;if(b(this.focusedItem)){var l=this.visibleItems.findIndex(function(u){return u.key===a.focusedItem.key});s=this.visibleItems.slice(l).find(function(u){return a.isItemMatched(u)}),s=O(s)?this.visibleItems.slice(0,l).find(function(u){return a.isItemMatched(u)}):s}else s=this.visibleItems.find(function(u){return a.isItemMatched(u)});return b(s)&&(i=!0),O(s)&&O(this.focusedItem)&&(s=this.findFirstItem()),b(s)&&this.changeFocusedItem({originalEvent:e,processedItem:s,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItem:function(e){var n=e.originalEvent,a=e.processedItem,s=e.focusOnNext,i=e.selfCheck,l=e.allowHeaderFocus,u=l===void 0?!0:l;b(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):u&&this.$emit("header-focus",{originalEvent:n,focusOnNext:s,selfCheck:i})},scrollInView:function(){var e=k(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var n=this;this.activeItemPath=Object.entries(e||{}).reduce(function(a,s){var i=ft(s,2),l=i[0],u=i[1];if(u){var r=n.findProcessedItemByItemKey(l);r&&a.push(r)}return a},[])},findProcessedItemByItemKey:function(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||a===0&&this.processedItems,!n)return null;for(var s=0;s<n.length;s++){var i=n[s];if(this.getItemProp(i,"key")===e)return i;var l=this.findProcessedItemByItemKey(e,i.items,a+1);if(l)return l}},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(u,r){var o=(i!==""?i+"_":"")+r,f={item:u,index:r,level:a,key:o,parent:s,parentKey:i};f.items=n.createProcessedItems(u.items,a+1,f,o),l.push(f)}),l},flatItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(s){n.isVisibleItem(s)&&(a.push(s),n.flatItems(s.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return b(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:de}};function vt(t,e,n,a,s,i){var l=K("PanelMenuSub");return c(),y(l,m({id:n.panelId+"_list",class:t.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":s.focused?i.focusedItemId:void 0,panelId:n.panelId,focusedItemId:s.focused?i.focusedItemId:void 0,items:i.processedItems,templates:n.templates,activeItemPath:s.activeItemPath,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,onItemMousemove:i.onItemMouseMove,pt:t.pt,unstyled:t.unstyled},t.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}pe.render=vt;function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function yt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?re(Object(n),!0).forEach(function(a){xt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function xt(t,e,n){return(e=kt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kt(t){var e=Pt(t,"string");return N(e)=="symbol"?e:e+""}function Pt(t,e){if(N(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(N(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var fe={name:"PanelMenu",extends:ut,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(e,n){return e?z(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{index:a,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(n){return H(e,n)}):H(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return H(e,this.activeItem)},isItemGroup:function(e){return b(e.items)},getPanelId:function(e){return"".concat(this.$id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,n){if(this.isItemDisabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),this.changeActiveItem(e,n),S(e.currentTarget)},onHeaderKeyDown:function(e,n){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,n);break}},onHeaderArrowDownKey:function(e){var n=U(e.currentTarget,"data-p-active")===!0?k(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;n?S(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var n=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=U(n,"data-p-active")===!0?k(n.nextElementSibling,'[data-pc-section="rootlist"]'):null;a?S(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,n){var a=k(e.currentTarget,'[data-pc-section="headerlink"]');a?a.click():this.onHeaderClick(e,n),e.preventDefault()},findNextHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling,s=k(a,'[data-pc-section="header"]');return s?U(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling,s=k(a,'[data-pc-section="header"]');return s?U(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var n=e.originalEvent,a=e.focusOnNext,s=e.selfCheck,i=n.currentTarget.closest('[data-pc-section="panel"]'),l=s?k(i,'[data-pc-section="header"]'):a?this.findNextHeader(i):this.findPrevHeader(i);l?this.changeFocusedHeader(n,l):a?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)},changeActiveItem:function(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(n)){var s=this.isItemActive(n),i=s?"panel-close":"panel-open";this.activeItem=a?n:this.activeItem&&H(n,this.activeItem)?null:n,this.multiple&&(this.activeItems.some(function(l){return H(n,l)})?this.activeItems=this.activeItems.filter(function(l){return!H(n,l)}):this.activeItems.push(n)),this.changeExpandedKeys({item:n,expanded:!s}),this.$emit(i,{originalEvent:e,item:n})}},changeExpandedKeys:function(e){var n=e.item,a=e.expanded,s=a===void 0?!1:a;if(this.expandedKeys){var i=yt({},this.expandedKeys);s?i[n.key]=!0:delete i[n.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(e,n){n&&S(n)},getMenuItemProps:function(e,n){return{icon:m({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,n)),label:m({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,n))}}},components:{PanelMenuList:pe,ChevronRightIcon:te,ChevronDownIcon:me}},wt=["id"],Lt=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],St=["href"],Kt=["id","aria-labelledby"];function Mt(t,e,n,a,s,i){var l=K("PanelMenuList");return c(),d("div",m({id:t.$id,class:t.cx("root")},t.ptmi("root")),[(c(!0),d(L,null,D(t.model,function(u,r){return c(),d(L,{key:i.getPanelKey(r)},[i.isItemVisible(u)?(c(),d("div",m({key:0,style:i.getItemProp(u,"style"),class:[t.cx("panel"),i.getItemProp(u,"class")],ref_for:!0},t.ptm("panel")),[p("div",m({id:i.getHeaderId(r),class:[t.cx("header",{item:u}),i.getItemProp(u,"headerClass")],tabindex:i.isItemDisabled(u)?-1:t.tabindex,role:"button","aria-label":i.getItemLabel(u),"aria-expanded":i.isItemActive(u),"aria-controls":i.getContentId(r),"aria-disabled":i.isItemDisabled(u),onClick:function(f){return i.onHeaderClick(f,u)},onKeydown:function(f){return i.onHeaderKeyDown(f,u)},ref_for:!0},i.getPTOptions("header",u,r),{"data-p-active":i.isItemActive(u),"data-p-disabled":i.isItemDisabled(u)}),[p("div",m({class:t.cx("headerContent"),ref_for:!0},i.getPTOptions("headerContent",u,r)),[t.$slots.item?(c(),y(P(t.$slots.item),{key:1,item:u,root:!0,active:i.isItemActive(u),hasSubmenu:i.isItemGroup(u),label:i.getItemLabel(u),props:i.getMenuItemProps(u,r)},null,8,["item","active","hasSubmenu","label","props"])):(c(),d("a",m({key:0,href:i.getItemProp(u,"url"),class:t.cx("headerLink"),tabindex:-1,ref_for:!0},i.getPTOptions("headerLink",u,r)),[i.getItemProp(u,"items")?C(t.$slots,"submenuicon",{key:0,active:i.isItemActive(u)},function(){return[(c(),y(P(i.isItemActive(u)?"ChevronDownIcon":"ChevronRightIcon"),m({class:t.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",u,r)),null,16,["class"]))]}):I("",!0),t.$slots.headericon?(c(),y(P(t.$slots.headericon),{key:1,item:u,class:E([t.cx("headerIcon"),i.getItemProp(u,"icon")])},null,8,["item","class"])):i.getItemProp(u,"icon")?(c(),d("span",m({key:2,class:[t.cx("headerIcon"),i.getItemProp(u,"icon")],ref_for:!0},i.getPTOptions("headerIcon",u,r)),null,16)):I("",!0),p("span",m({class:t.cx("headerLabel"),ref_for:!0},i.getPTOptions("headerLabel",u,r)),T(i.getItemLabel(u)),17)],16,St))],16)],16,Lt),g(Z,m({name:"p-toggleable-content",ref_for:!0},t.ptm("transition")),{default:x(function(){return[R(p("div",m({id:i.getContentId(r),class:t.cx("contentContainer"),role:"region","aria-labelledby":i.getHeaderId(r),ref_for:!0},t.ptm("contentContainer")),[i.getItemProp(u,"items")?(c(),d("div",m({key:0,class:t.cx("content"),ref_for:!0},t.ptm("content")),[g(l,{panelId:i.getPanelId(r),items:i.getItemProp(u,"items"),templates:t.$slots,expandedKeys:t.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,pt:t.pt,unstyled:t.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):I("",!0)],16,Kt),[[oe,i.isItemActive(u)]])]}),_:2},1040)],16)):I("",!0)],64)}),128))],16,wt)}fe.render=Mt;var Ct=G`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`,At={rootList:function(e){var n=e.props;return{"max-height":n.scrollHeight,overflow:"auto"}}},Et={root:function(e){var n=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":n.queryMatches,"p-megamenu-mobile-active":n.mobileActive,"p-megamenu-horizontal":n.horizontal,"p-megamenu-vertical":n.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(e){var n=e.instance,a=e.processedItem;return["p-megamenu-submenu-label",{"p-disabled":n.isItemDisabled(a)}]},item:function(e){var n=e.instance,a=e.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(e){var n=e.instance,a=e.processedItem,s=n.isItemGroup(a)?a.items.length:0,i;if(n.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(s){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},Ft=V.extend({name:"megamenu",style:Ct,classes:Et,inlineStyles:At}),Dt={name:"BaseMegaMenu",extends:M,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:"20rem"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ft,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},he={name:"MegaMenuSub",hostName:"MegaMenu",extends:M,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?z(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(a,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return b(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:m({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:m({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:m({class:this.cx("label")},this.getPTOptions(e,n,"label")),submenuicon:m({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},components:{AngleRightIcon:ce,AngleDownIcon:Ze},directives:{ripple:$}},Ot=["tabindex"],Tt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Vt=["onClick","onMouseenter"],zt=["href","target"],Ht=["id"];function _t(t,e,n,a,s,i){var l=K("MegaMenuSub",!0),u=J("ripple");return c(),d("ul",m({class:n.level===0?t.cx("rootList"):t.cx("submenu"),tabindex:n.tabindex},n.level===0?t.ptm("rootList"):t.ptm("submenu")),[n.submenu?(c(),d("li",m({key:0,class:[t.cx("submenuLabel",{submenu:n.submenu}),i.getItemProp(n.submenu,"class")],style:i.getItemProp(n.submenu,"style"),role:"presentation"},t.ptm("submenuLabel")),T(i.getItemLabel(n.submenu)),17)):I("",!0),(c(!0),d(L,null,D(n.items,function(r,o){return c(),d(L,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(c(),d("li",m({key:0,id:i.getItemId(r),style:i.getItemProp(r,"style"),class:[t.cx("item",{processedItem:r}),i.getItemProp(r,"class")],role:"menuitem","aria-label":i.getItemLabel(r),"aria-disabled":i.isItemDisabled(r)||void 0,"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-haspopup":i.isItemGroup(r)&&!i.getItemProp(r,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(o),ref_for:!0},i.getPTOptions(r,o,"item"),{"data-p-active":i.isItemActive(r),"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",m({class:t.cx("itemContent"),onClick:function(v){return i.onItemClick(v,r)},onMouseenter:function(v){return i.onItemMouseEnter(v,r)},ref_for:!0},i.getPTOptions(r,o,"itemContent")),[n.templates.item?(c(),y(P(n.templates.item),{key:1,item:r.item,hasSubmenu:i.isItemGroup(r),label:i.getItemLabel(r),props:i.getMenuItemProps(r,o)},null,8,["item","hasSubmenu","label","props"])):R((c(),d("a",m({key:0,href:i.getItemProp(r,"url"),class:t.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(r,o,"itemLink")),[n.templates.itemicon?(c(),y(P(n.templates.itemicon),{key:0,item:r.item,class:E(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(c(),d("span",m({key:1,class:[t.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions(r,o,"itemIcon")),null,16)):I("",!0),p("span",m({class:t.cx("itemLabel"),ref_for:!0},i.getPTOptions(r,o,"itemLabel")),T(i.getItemLabel(r)),17),i.isItemGroup(r)?(c(),d(L,{key:2},[n.templates.submenuicon?(c(),y(P(n.templates.submenuicon),m({key:0,active:i.isItemActive(r),class:t.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,o,"submenuIcon")),null,16,["active","class"])):(c(),y(P(n.horizontal||n.mobileActive?"AngleDownIcon":"AngleRightIcon"),m({key:1,class:t.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,o,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,zt)),[[u]])],16,Vt),i.isItemVisible(r)&&i.isItemGroup(r)?(c(),d("div",m({key:0,class:t.cx("overlay"),ref_for:!0},t.ptm("overlay")),[p("div",m({class:t.cx("grid"),ref_for:!0},t.ptm("grid")),[(c(!0),d(L,null,D(r.items,function(f){return c(),d("div",m({key:i.getItemKey(f),class:t.cx("column",{processedItem:r}),ref_for:!0},t.ptm("column")),[(c(!0),d(L,null,D(f,function(v){return c(),y(l,{key:i.getSubListKey(v),id:i.getSubListId(v),style:ue(t.sx("submenu",!0,{processedItem:r})),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,submenu:v,items:v.items,templates:n.templates,level:n.level+1,mobileActive:n.mobileActive,pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(w){return t.$emit("item-click",w)}),onItemMouseenter:e[1]||(e[1]=function(w){return t.$emit("item-mouseenter",w)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):I("",!0)],16,Tt)):I("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(c(),d("li",m({key:1,id:i.getItemId(r),class:[t.cx("separator"),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"separator",ref_for:!0},t.ptm("separator")),null,16,Ht)):I("",!0)],64)}),128))],16,Ot)}he.render=_t;var be={name:"MegaMenu",extends:Dt,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{activeItem:function(e){b(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,n){return e?z(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return b(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&b(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,B.clear(this.menubar),this.hide()):(this.mobileActive=!0,B.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},S(this.menubar)},hide:function(e,n){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){S(a.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},n&&S(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var n=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(n);this.focusedItemInfo={index:n,key:a.key,parentKey:a.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ee(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var n=e.processedItem,a=e.isFocus;if(!O(n)){var s=n.index,i=n.key,l=n.parentKey,u=n.items,r=b(u);r&&(this.activeItem=n),this.focusedItemInfo={index:s,key:i,parentKey:l},r&&(this.dirty=!0),a&&S(this.menubar)}},onItemClick:function(e){var n=e.originalEvent,a=e.processedItem,s=this.isProccessedItemGroup(a),i=O(a.parent),l=this.isSelected(a);if(l){var u=a.index,r=a.key,o=a.parentKey;this.activeItem=null,this.focusedItemInfo={index:u,key:r,parentKey:o},this.dirty=!i,this.mobileActive||S(this.menubar,{preventScroll:!0})}else s?this.onItemChange(e):this.hide(n)},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(b(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue="")}var s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,s),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&b(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,s),e.preventDefault()}},onArrowLeftKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.horizontal){var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,s)}}else{this.vertical&&b(this.activeItem)&&n.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=n.columnIndex-1,l=this.visibleItems.findIndex(function(u){return u.columnIndex===i});l!==-1&&this.changeFocusedItemInfo(e,l)}e.preventDefault()},onArrowRightKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.vertical)if(b(this.activeItem)&&this.activeItem.key===n.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var s=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(s);i&&(this.onItemChange({originalEvent:e,processedItem:s}),this.focusedItemInfo={index:-1,key:s.key,parentKey:s.parentKey},this.searchValue="")}var l=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,l)}else{var u=n.columnIndex+1,r=this.visibleItems.findIndex(function(o){return o.columnIndex===u});r!==-1&&this.changeFocusedItemInfo(e,r)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=k(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&k(n,'a[data-pc-section="itemlink"]');a?a.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(s);!i&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){b(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));a&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){le()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return b(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return W(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var n=this,a=e>0?W(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return b(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(l){return a.isItemMatched(l)}),s!==-1&&(i=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemInfo(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,n){var a=this.findVisibleItem(n);this.focusedItemInfo.index=n,this.focusedItemInfo.key=b(a)?a.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,a;n===null&&this.queryMatches?a=this.$refs.menubutton:a=k(this.menubar,'li[id="'.concat(n,'"]')),a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=arguments.length>4?arguments[4]:void 0,u=[];return e&&e.forEach(function(r,o){var f=(i!==""?i+"_":"")+(l!==void 0?l+"_":"")+o,v={item:r,index:o,level:a,key:f,parent:s,parentKey:i,columnIndex:l!==void 0?l:s.columnIndex!==void 0?s.columnIndex:o};v.items=a===0&&r.items&&r.items.length>0?r.items.map(function(w,X){return n.createProcessedItems(w,a+1,v,f,X)}):n.createProcessedItems(r.items,a+1,v,f),u.push(v)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=b(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(n,a){return a.forEach(function(s){s.items.forEach(function(i){n.push(i)})}),n},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return b(this.focusedItemInfo.key)?"".concat(this.$id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:he,BarsIcon:We}},Bt=["id"],Rt=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Nt(t,e,n,a,s,i){var l=K("BarsIcon"),u=K("MegaMenuSub");return c(),d("div",m({ref:i.containerRef,id:t.$id,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(c(),d("div",m({key:0,class:t.cx("start")},t.ptm("start")),[C(t.$slots,"start")],16)):I("",!0),C(t.$slots,t.$slots.button?"button":"menubutton",{id:t.$id,class:E(t.cx("button")),toggleCallback:function(o){return i.menuButtonClick(o)}},function(){var r;return[t.model&&t.model.length>0?(c(),d("a",m({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":t.$id,"aria-label":(r=t.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:e[0]||(e[0]=function(o){return i.menuButtonClick(o)}),onKeydown:e[1]||(e[1]=function(o){return i.menuButtonKeydown(o)})},t.ptm("button")),[C(t.$slots,t.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(l,He(_e(t.ptm("buttonIcon"))),null,16)]})],16,Rt)):I("",!0)]}),g(u,{ref:i.menubarRef,id:t.$id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":t.orientation,"aria-activedescendant":s.focused?i.focusedItemId:void 0,menuId:t.$id,focusedItemId:s.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:t.$slots,activeItem:s.activeItem,mobileActive:s.mobileActive,level:0,style:ue(t.sx("rootList")),pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","style","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(c(),d("div",m({key:1,class:t.cx("end")},t.ptm("end")),[C(t.$slots,"end")],16)):I("",!0)],16,Bt)}be.render=Nt;var Gt=G`
    .p-contextmenu {
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        min-width: 12.5rem;
    }

    .p-contextmenu-root-list,
    .p-contextmenu-submenu {
        margin: 0;
        padding: dt('contextmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('contextmenu.list.gap');
    }

    .p-contextmenu-submenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        z-index: 1;
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
    }

    .p-contextmenu-item {
        position: relative;
    }

    .p-contextmenu-item-content {
        transition:
            background dt('contextmenu.transition.duration'),
            color dt('contextmenu.transition.duration');
        border-radius: dt('contextmenu.item.border.radius');
        color: dt('contextmenu.item.color');
    }

    .p-contextmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('contextmenu.item.padding');
        gap: dt('contextmenu.item.gap');
        user-select: none;
    }

    .p-contextmenu-item-label {
        line-height: 1;
    }

    .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.color');
    }

    .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('contextmenu.submenu.icon.size');
        width: dt('contextmenu.submenu.icon.size');
        height: dt('contextmenu.submenu.icon.size');
    }

    .p-contextmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content {
        color: dt('contextmenu.item.active.color');
        background: dt('contextmenu.item.active.background');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.active.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.active.color');
    }

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('contextmenu.separator.border.color');
    }

    .p-contextmenu-enter-from,
    .p-contextmenu-leave-active {
        opacity: 0;
    }

    .p-contextmenu-enter-active {
        transition: opacity 250ms;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,jt={root:function(e){var n=e.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":n.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(e){var n=e.instance,a=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},Ut=V.extend({name:"contextmenu",style:Gt,classes:jt}),qt={name:"BaseContextMenu",extends:M,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ut,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},Ie={name:"ContextMenuSub",hostName:"ContextMenu",extends:M,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?z(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{item:n.item,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n),index:a}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},onEnter:function(){Re(this.$refs.container,this.level)},getMenuItemProps:function(e,n){return{action:m({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,n)),icon:m({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,n)),label:m({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n)),submenuicon:m({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,n))}}},components:{AngleRightIcon:ce},directives:{ripple:$}},Wt=["tabindex"],Zt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Xt=["onClick","onMouseenter","onMousemove"],Yt=["href","target"],Qt=["id"],Jt=["id"];function $t(t,e,n,a,s,i){var l=K("AngleRightIcon"),u=K("ContextMenuSub",!0),r=J("ripple");return c(),y(Z,m({name:"p-contextmenusub",onEnter:i.onEnter},t.ptm("menu.transition")),{default:x(function(){return[n.root||n.visible?(c(),d("ul",m({key:0,ref:"container",tabindex:n.tabindex},t.ptm("rootList")),[(c(!0),d(L,null,D(n.items,function(o,f){return c(),d(L,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(c(),d("li",m({key:0,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[t.cx("item",{processedItem:o}),i.getItemProp(o,"class")],role:"menuitem","aria-label":i.getItemLabel(o),"aria-disabled":i.isItemDisabled(o)||void 0,"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-haspopup":i.isItemGroup(o)&&!i.getItemProp(o,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(f),ref_for:!0},i.getPTOptions("item",o,f),{"data-p-active":i.isItemActive(o),"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[p("div",m({class:t.cx("itemContent"),onClick:function(w){return i.onItemClick(w,o)},onMouseenter:function(w){return i.onItemMouseEnter(w,o)},onMousemove:function(w){return i.onItemMouseMove(w,o)},ref_for:!0},i.getPTOptions("itemContent",o,f)),[n.templates.item?(c(),y(P(n.templates.item),{key:1,item:o.item,hasSubmenu:i.getItemProp(o,"items"),label:i.getItemLabel(o),props:i.getMenuItemProps(o,f)},null,8,["item","hasSubmenu","label","props"])):R((c(),d("a",m({key:0,href:i.getItemProp(o,"url"),class:t.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",o,f)),[n.templates.itemicon?(c(),y(P(n.templates.itemicon),{key:0,item:o.item,class:E(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(c(),d("span",m({key:1,class:[t.cx("itemIcon"),i.getItemProp(o,"icon")],ref_for:!0},i.getPTOptions("itemIcon",o,f)),null,16)):I("",!0),p("span",m({id:i.getItemLabelId(o),class:t.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",o,f)),T(i.getItemLabel(o)),17,Qt),i.getItemProp(o,"items")?(c(),d(L,{key:2},[n.templates.submenuicon?(c(),y(P(n.templates.submenuicon),{key:0,active:i.isItemActive(o),class:E(t.cx("submenuIcon"))},null,8,["active","class"])):(c(),y(l,m({key:1,class:t.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuicon",o,f)),null,16,["class"]))],64)):I("",!0)],16,Yt)),[[r]])],16,Xt),i.isItemVisible(o)&&i.isItemGroup(o)?(c(),y(u,m({key:0,id:i.getItemId(o)+"_list",role:"menu",class:t.cx("submenu"),menuId:n.menuId,focusedItemId:n.focusedItemId,items:o.items,templates:n.templates,activeItemPath:n.activeItemPath,level:n.level+1,visible:i.isItemActive(o)&&i.isItemGroup(o),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(v){return t.$emit("item-click",v)}),onItemMouseenter:e[1]||(e[1]=function(v){return t.$emit("item-mouseenter",v)}),onItemMousemove:e[2]||(e[2]=function(v){return t.$emit("item-mousemove",v)}),"aria-labelledby":i.getItemLabelId(o),ref_for:!0},t.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):I("",!0)],16,Zt)):I("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(c(),d("li",m({key:1,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[t.cx("separator"),i.getItemProp(o,"class")],role:"separator",ref_for:!0},t.ptm("separator")),null,16,Jt)):I("",!0)],64)}),128))],16,Wt)):I("",!0)]}),_:1},16,["onEnter"])}Ie.render=$t;var ge={name:"ContextMenu",extends:qt,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){b(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&B.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,n){return e?z(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return b(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&b(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},S(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ee(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var a=e.processedItem,s=e.isFocus;if(!O(a)){var i=a.index,l=a.key,u=a.level,r=a.parentKey,o=a.items,f=b(o),v=this.activeItemPath.filter(function(w){return w.parentKey!==r&&w.parentKey!==l});f&&(v.push(a),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:u,parentKey:r},s&&S(this.list),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=v)}},onItemClick:function(e){var n=e.processedItem,a=this.isProccessedItemGroup(n),s=this.isSelected(n);if(s){var i=n.index,l=n.key,u=n.level,r=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(o){return l!==o.key&&l.startsWith(o.key)}),this.focusedItemInfo={index:i,level:u,parentKey:r},S(this.list)}else a?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.popup&&this.hide(),e.preventDefault()}else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowLeftKey:function(e){var n=this,a=this.visibleItems[this.focusedItemInfo.index],s=this.activeItemPath.find(function(l){return l.key===a.parentKey}),i=O(a.parent);i||(this.focusedItemInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(l){return l.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=k(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),a=n&&k(n,'[data-pc-section="itemlink"]');a?a.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(s);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},onEnter:function(e){Ue(e,{position:"absolute"}),this.position(),this.autoZIndex&&B.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),S(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&B.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,n=this.pageY+1,a=this.container.offsetParent?this.container.offsetWidth:Ne(this.container),s=this.container.offsetParent?this.container.offsetHeight:Ge(this.container),i=je(),l=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+a-u>i.width&&(e-=a),n+s-l>i.height&&(n-=s),e<u&&(e=u),n<l&&(n=l),this.container.style.left=e+"px",this.container.style.top=n+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=e.container&&!e.container.contains(n.target),s=e.visible?!(e.target&&(e.target===n.target||e.target.contains(n.target))):!0;a&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!le()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(n){n.button===2&&e.show(n)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return W(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var n=this,a=e>0?W(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(l){return a.isItemMatched(l)}),s!==-1&&(i=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemIdx,a=k(this.list,'li[id="'.concat(n,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(u,r){var o=(i!==""?i+"_":"")+r,f={item:u,index:r,level:a,key:o,parent:s,parentKey:i};f.items=n.createProcessedItems(u.items,a+1,f,o),l.push(f)}),l},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(b(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:Ie,Portal:Be}};function en(t,e,n,a,s,i){var l=K("ContextMenuSub"),u=K("Portal");return c(),y(u,{appendTo:t.appendTo},{default:x(function(){return[g(Z,m({name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:x(function(){return[s.visible?(c(),d("div",m({key:0,ref:i.containerRef,class:t.cx("root")},t.ptmi("root")),[g(l,{ref:i.listRef,id:t.$id+"_list",class:E(t.cx("rootList")),role:"menubar",root:!0,tabindex:t.tabindex,"aria-orientation":"vertical","aria-activedescendant":s.focused?i.focusedItemIdx:void 0,menuId:t.$id,focusedItemId:s.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:t.$slots,activeItemPath:s.activeItemPath,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,level:0,visible:s.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):I("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}ge.render=en;var tn=G`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }

    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-steppanel {
        display: flex;
        flex: 1 1 auto;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`,nn={root:function(e){var n=e.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},an=V.extend({name:"stepper",style:tn,classes:nn}),sn={name:"BaseStepper",extends:M,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:an,provide:function(){return{$pcStepper:this,$parentInstance:this}}},ve={name:"Stepper",extends:sn,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function rn(t,e,n,a,s,i){return c(),d("div",m({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[t.$slots.start?C(t.$slots,"start",{key:0}):I("",!0),C(t.$slots,"default"),t.$slots.end?C(t.$slots,"end",{key:1}):I("",!0)],16)}ve.render=rn;var on={root:"p-steplist"},un=V.extend({name:"steplist",classes:on}),ln={name:"BaseStepList",extends:M,style:un,provide:function(){return{$pcStepList:this,$parentInstance:this}}},ye={name:"StepList",extends:ln,inheritAttrs:!1};function mn(t,e,n,a,s,i){return c(),d("div",m({class:t.cx("root")},t.ptmi("root")),[C(t.$slots,"default")],16)}ye.render=mn;var cn={root:function(e){var n=e.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},dn=V.extend({name:"step",classes:cn}),xe={name:"StepperSeparator",hostName:"Stepper",extends:M,inject:{$pcStepper:{default:null}}};function pn(t,e,n,a,s,i){return c(),d("span",m({class:t.cx("separator")},t.ptmo(i.$pcStepper.pt,"separator")),null,16)}xe.render=pn;var fn={name:"BaseStep",extends:M,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:dn,provide:function(){return{$pcStep:this,$parentInstance:this}}},ke={name:"Step",extends:fn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1,isCompleted:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=q(this.$el,_(this.$pcStepper.$el,'[data-pc-name="step"]')),n=q(k(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),_(this.$pcStepper.$el,'[data-pc-name="step"]')),a=_(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==a-1,this.isCompleted=e<n}},updated:function(){var e=q(this.$el,_(this.$pcStepper.$el,'[data-pc-name="step"]')),n=q(k(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),_(this.$pcStepper.$el,'[data-pc-name="step"]'));this.isCompleted=e<n},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}},dataP:function(){return qe({disabled:this.isStepDisabled,readonly:this.$pcStepper.linear,active:this.active,completed:this.isCompleted,vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:xe}},hn=["id","tabindex","aria-controls","disabled","data-p"],bn=["data-p"],In=["data-p"];function gn(t,e,n,a,s,i){var l=K("StepperSeparator");return t.asChild?C(t.$slots,"default",{key:1,class:E(t.cx("root")),active:i.active,value:t.value,a11yAttrs:i.a11yAttrs,activateCallback:i.onStepClick}):(c(),y(P(t.as),m({key:0,class:t.cx("root"),"aria-current":i.active?"step":void 0,role:"presentation","data-p-active":i.active,"data-p-disabled":i.isStepDisabled,"data-p":i.dataP},i.getPTOptions("root")),{default:x(function(){return[p("button",m({id:i.id,class:t.cx("header"),role:"tab",type:"button",tabindex:i.isStepDisabled?-1:void 0,"aria-controls":i.ariaControls,disabled:i.isStepDisabled,onClick:e[0]||(e[0]=function(){return i.onStepClick&&i.onStepClick.apply(i,arguments)}),"data-p":i.dataP},i.getPTOptions("header")),[p("span",m({class:t.cx("number"),"data-p":i.dataP},i.getPTOptions("number")),T(i.activeValue),17,bn),p("span",m({class:t.cx("title"),"data-p":i.dataP},i.getPTOptions("title")),[C(t.$slots,"default")],16,In)],16,hn),s.isSeparatorVisible?(c(),y(l,{key:0,"data-p":i.dataP},null,8,["data-p"])):I("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled","data-p"]))}ke.render=gn;var vn=G`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,yn={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(e){var n=e.instance;return["p-breadcrumb-item",{"p-disabled":n.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},xn=V.extend({name:"breadcrumb",style:vn,classes:yn}),kn={name:"BaseBreadcrumb",extends:M,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:xn,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},Pe={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:M,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,n=e.to,a=e.url,s=typeof window<"u"?window.location.pathname:"";return n===s||a===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:m({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(a){return e.onClick(a)}},this.ptm("itemLink",this.ptmOptions)),icon:m({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:m({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},Pn=["href","target","aria-current"];function wn(t,e,n,a,s,i){return i.visible()?(c(),d("li",m({key:0,class:[t.cx("item"),n.item.class]},t.ptm("item",i.ptmOptions)),[n.templates.item?(c(),y(P(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(c(),d("a",m({key:0,href:n.item.url||"#",class:t.cx("itemLink"),target:n.item.target,"aria-current":i.isCurrentUrl(),onClick:e[0]||(e[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},t.ptm("itemLink",i.ptmOptions)),[n.templates&&n.templates.itemicon?(c(),y(P(n.templates.itemicon),{key:0,item:n.item,class:E(t.cx("itemIcon",i.ptmOptions))},null,8,["item","class"])):n.item.icon?(c(),d("span",m({key:1,class:[t.cx("itemIcon"),n.item.icon]},t.ptm("itemIcon",i.ptmOptions)),null,16)):I("",!0),n.item.label?(c(),d("span",m({key:2,class:t.cx("itemLabel")},t.ptm("itemLabel",i.ptmOptions)),T(i.label()),17)):I("",!0)],16,Pn))],16)):I("",!0)}Pe.render=wn;var we={name:"Breadcrumb",extends:kn,inheritAttrs:!1,components:{BreadcrumbItem:Pe,ChevronRightIcon:te}};function Ln(t,e,n,a,s,i){var l=K("BreadcrumbItem"),u=K("ChevronRightIcon");return c(),d("nav",m({class:t.cx("root")},t.ptmi("root")),[p("ol",m({class:t.cx("list")},t.ptm("list")),[t.home?(c(),y(l,m({key:0,item:t.home,class:t.cx("homeItem"),templates:t.$slots,pt:t.pt,unstyled:t.unstyled},t.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):I("",!0),(c(!0),d(L,null,D(t.model,function(r,o){return c(),d(L,{key:r.label+"_"+o},[t.home||o!==0?(c(),d("li",m({key:0,class:t.cx("separator"),ref_for:!0},t.ptm("separator")),[C(t.$slots,"separator",{},function(){return[g(u,m({"aria-hidden":"true",class:t.cx("separatorIcon"),ref_for:!0},t.ptm("separatorIcon")),null,16,["class"])]})],16)):I("",!0),g(l,{item:r,index:o,templates:t.$slots,pt:t.pt,unstyled:t.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}we.render=Ln;const Sn={class:"card"},Kn={class:"card"},Mn={class:"flex flex-col md:flex-row gap-8"},Cn={class:"md:w-1/2"},An={class:"card"},En={class:"md:w-1/2"},Fn={class:"card"},Dn={class:"flex flex-col md:flex-row gap-8 mt-6"},On={class:"md:w-1/3"},Tn={class:"card"},Vn={class:"md:w-1/3"},zn={class:"card"},Hn={class:"md:w-1/3"},_n={class:"card"},Bn={class:"flex flex-col md:flex-row gap-8 mt-8"},Rn={class:"md:w-1/2"},Nn={class:"card"},Gn={class:"md:w-1/2"},jn={class:"card"},mi={__name:"MenuDoc",setup(t){const e=A(null),n=A(null),a=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),s=A({icon:"pi pi-home",to:"/"}),i=A([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),l=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),u=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),r=A([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),o=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),f=A([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),v=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]);function w(j){e.value.toggle(j)}function X(j){n.value.show(j)}return(j,h)=>{const Le=it,Se=at,Ke=nt,Me=tt,Ce=we,Y=ke,Ae=ye,Ee=ve,Q=$e,Fe=Je,De=et,Oe=Qe,ne=Ye,Te=Xe,Ve=ge,ie=be,ze=fe;return c(),d(L,null,[p("div",Sn,[h[0]||(h[0]=p("div",{class:"font-semibold text-xl mb-4"},"Menubar",-1)),g(Me,{model:a.value},{end:x(()=>[g(Ke,{iconPosition:"left"},{default:x(()=>[g(Le,{class:"pi pi-search"}),g(Se,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])]),p("div",Kn,[h[1]||(h[1]=p("div",{class:"font-semibold text-xl mb-4"},"Breadcrumb",-1)),g(Ce,{home:s.value,model:i.value},null,8,["home","model"])]),p("div",Mn,[p("div",Cn,[p("div",An,[h[5]||(h[5]=p("div",{class:"font-semibold text-xl mb-4"},"Steps",-1)),g(Ee,{value:"1"},{default:x(()=>[g(Ae,null,{default:x(()=>[g(Y,{value:"1"},{default:x(()=>h[2]||(h[2]=[F("Header I")])),_:1}),g(Y,{value:"2"},{default:x(()=>h[3]||(h[3]=[F("Header II")])),_:1}),g(Y,{value:"3"},{default:x(()=>h[4]||(h[4]=[F("Header III")])),_:1})]),_:1})]),_:1})])]),p("div",En,[p("div",Fn,[h[9]||(h[9]=p("div",{class:"font-semibold text-xl mb-4"},"TabMenu",-1)),g(De,{value:"0"},{default:x(()=>[g(Fe,null,{default:x(()=>[g(Q,{value:"0"},{default:x(()=>h[6]||(h[6]=[F("Header I")])),_:1}),g(Q,{value:"1"},{default:x(()=>h[7]||(h[7]=[F("Header II")])),_:1}),g(Q,{value:"2"},{default:x(()=>h[8]||(h[8]=[F("Header III")])),_:1})]),_:1})]),_:1})])])]),p("div",Dn,[p("div",On,[p("div",Tn,[h[10]||(h[10]=p("div",{class:"font-semibold text-xl mb-4"},"Tiered Menu",-1)),g(Oe,{model:l.value},null,8,["model"])])]),p("div",Vn,[p("div",zn,[h[11]||(h[11]=p("div",{class:"font-semibold text-xl mb-4"},"Plain Menu",-1)),g(ne,{model:r.value},null,8,["model"])])]),p("div",Hn,[p("div",_n,[h[12]||(h[12]=p("div",{class:"font-semibold text-xl mb-4"},"Overlay Menu",-1)),g(ne,{ref_key:"menu",ref:e,model:u.value,popup:!0},null,8,["model"]),g(Te,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:w,style:{width:"auto"}})]),p("div",{class:"card",onContextmenu:X},[h[13]||(h[13]=p("div",{class:"font-semibold text-xl mb-4"},"Context Menu",-1)),h[14]||(h[14]=F(" Right click to display. ")),g(Ve,{ref_key:"contextMenu",ref:n,model:o.value},null,8,["model"])],32)])]),p("div",Bn,[p("div",Rn,[p("div",Nn,[h[15]||(h[15]=p("div",{class:"font-semibold text-xl mb-4"},"MegaMenu | Horizontal",-1)),g(ie,{model:f.value},null,8,["model"]),h[16]||(h[16]=p("div",{class:"font-semibold text-xl mb-4 mt-8"},"MegaMenu | Vertical",-1)),g(ie,{model:f.value,orientation:"vertical"},null,8,["model"])])]),p("div",Gn,[p("div",jn,[h[17]||(h[17]=p("div",{class:"font-semibold text-xl mb-4"},"PanelMenu",-1)),g(ze,{model:v.value},null,8,["model"])])])])],64)}}};export{mi as default};
