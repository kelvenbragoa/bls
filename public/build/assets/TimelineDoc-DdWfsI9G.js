import{s as w}from"./index-yC7VgUO7.js";import{s as z}from"./index-kJG44KYi.js";import{I as P,J as T,c as u,b as f,F as S,m as O,M as v,d as i,L as b,s as x,K as C,a7 as A,ad as B,_ as K,r as y,e as m,w as s,l as d,t as p,af as $,v as q}from"./app-Dg6_If3w.js";import"./index-B5-4kyNr.js";var j=P`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,D={root:function(t){var r=t.props;return["p-timeline p-component","p-timeline-"+r.align,"p-timeline-"+r.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},F=T.extend({name:"timeline",style:j,classes:D}),N={name:"BaseTimeline",extends:C,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:F,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function g(e){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(e)}function _(e,t,r){return(t=I(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){var t=L(e,"string");return g(t)=="symbol"?t:t+""}function L(e,t){if(g(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var h=r.call(e,t);if(g(h)!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var k={name:"Timeline",extends:N,inheritAttrs:!1,methods:{getKey:function(t,r){return this.dataKey?B(t,this.dataKey):r},getPTOptions:function(t,r){return this.ptm(t,{context:{index:r,count:this.value.length}})}},computed:{dataP:function(){return A(_(_({},this.layout,this.layout),this.align,this.align))}}},M=["data-p"],V=["data-p"],E=["data-p"],R=["data-p"],H=["data-p"],J=["data-p"],G=["data-p"];function Q(e,t,r,h,l,o){return f(),u("div",v({class:e.cx("root")},e.ptmi("root"),{"data-p":o.dataP}),[(f(!0),u(S,null,O(e.value,function(c,a){return f(),u("div",v({key:o.getKey(c,a),class:e.cx("event"),ref_for:!0},o.getPTOptions("event",a),{"data-p":o.dataP}),[i("div",v({class:e.cx("eventOpposite",{index:a}),ref_for:!0},o.getPTOptions("eventOpposite",a),{"data-p":o.dataP}),[b(e.$slots,"opposite",{item:c,index:a})],16,E),i("div",v({class:e.cx("eventSeparator"),ref_for:!0},o.getPTOptions("eventSeparator",a),{"data-p":o.dataP}),[b(e.$slots,"marker",{item:c,index:a},function(){return[i("div",v({class:e.cx("eventMarker"),ref_for:!0},o.getPTOptions("eventMarker",a),{"data-p":o.dataP}),null,16,H)]}),a!==e.value.length-1?b(e.$slots,"connector",{key:0,item:c,index:a},function(){return[i("div",v({class:e.cx("eventConnector"),ref_for:!0},o.getPTOptions("eventConnector",a),{"data-p":o.dataP}),null,16,J)]}):x("",!0)],16,R),i("div",v({class:e.cx("eventContent"),ref_for:!0},o.getPTOptions("eventContent",a),{"data-p":o.dataP}),[b(e.$slots,"content",{item:c,index:a})],16,G)],16,V)}),128))],16,M)}k.render=Q;const U={class:"grid grid-cols-12 gap-8"},W={class:"col-span-6"},X={class:"card"},Y={class:"col-span-6"},Z={class:"card"},ee={class:"col-span-6"},te={class:"card"},ie={class:"col-span-6"},ne={class:"card"},le={class:"text-muted-color"},oe={class:"col-span-full"},re={class:"card"},ae=["src","alt"],se={class:"col-span-full"},me={class:"card"},de={__name:"TimelineDoc",setup(e){const t=y([{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),r=y(["2020","2021","2022","2023"]);return(h,l)=>{const o=k,c=z,a=w;return f(),u("div",U,[i("div",W,[i("div",X,[l[0]||(l[0]=i("div",{class:"font-semibold text-xl mb-4"},"Left Align",-1)),m(o,{value:t.value},{content:s(n=>[d(p(n.item.status),1)]),_:1},8,["value"])])]),i("div",Y,[i("div",Z,[l[1]||(l[1]=i("div",{class:"font-semibold text-xl mb-4"},"Right Align",-1)),m(o,{value:t.value,align:"right"},{content:s(n=>[d(p(n.item.status),1)]),_:1},8,["value"])])]),i("div",ee,[i("div",te,[l[2]||(l[2]=i("div",{class:"font-semibold text-xl mb-4"},"Alternate Align",-1)),m(o,{value:t.value,align:"alternate"},{content:s(n=>[d(p(n.item.status),1)]),_:1},8,["value"])])]),i("div",ie,[i("div",ne,[l[3]||(l[3]=i("div",{class:"font-semibold text-xl mb-4"},"Opposite Content",-1)),m(o,{value:t.value},{opposite:s(n=>[i("small",le,p(n.item.date),1)]),content:s(n=>[d(p(n.item.status),1)]),_:1},8,["value"])])]),i("div",oe,[i("div",re,[l[5]||(l[5]=i("div",{class:"font-semibold text-xl mb-4"},"Templating",-1)),m(o,{value:t.value,align:"alternate",class:"customized-timeline"},{marker:s(n=>[i("span",{class:"flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm",style:$({backgroundColor:n.item.color})},[i("i",{class:q(n.item.icon)},null,2)],4)]),content:s(n=>[m(a,{class:"mt-4"},{title:s(()=>[d(p(n.item.status),1)]),subtitle:s(()=>[d(p(n.item.date),1)]),content:s(()=>[n.item.image?(f(),u("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${n.item.image}`,alt:n.item.name,width:"200",class:"shadow-sm"},null,8,ae)):x("",!0),l[4]||(l[4]=i("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1)),m(c,{label:"Read more",text:""})]),_:2},1024)]),_:1},8,["value"])])]),i("div",se,[i("div",me,[l[7]||(l[7]=i("div",{class:"font-semibold text-xl mb-4"},"Horizontal",-1)),l[8]||(l[8]=i("div",{class:"font-semibold mb-2"},"Top Align",-1)),m(o,{value:r.value,layout:"horizontal",align:"top"},{content:s(n=>[d(p(n.item),1)]),_:1},8,["value"]),l[9]||(l[9]=i("div",{class:"font-semibold mt-4 mb-2"},"Bottom Align",-1)),m(o,{value:r.value,layout:"horizontal",align:"bottom"},{content:s(n=>[d(p(n.item),1)]),_:1},8,["value"]),l[10]||(l[10]=i("div",{class:"font-semibold mt-4 mb-2"},"Alternate Align",-1)),m(o,{value:r.value,layout:"horizontal",align:"alternate"},{opposite:s(()=>l[6]||(l[6]=[d("   ")])),content:s(n=>[d(p(n.item),1)]),_:1},8,["value"])])])])}}},fe=K(de,[["__scopeId","data-v-8e8f9d90"]]);export{fe as default};
