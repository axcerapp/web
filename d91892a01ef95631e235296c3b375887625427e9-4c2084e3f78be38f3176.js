(self.webpackChunkfastland_react_app=self.webpackChunkfastland_react_app||[]).push([[5563],{8327:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a,i=n(1788),o=n(7294),r=n(5513),l=n(5777),u=n(8120),s=function(e){var t=(0,r.Ch)(e,{activeKey:"onSelect"}),n=t.id,a=t.generateChildId,i=t.onSelect,s=t.activeKey,c=t.transition,d=t.mountOnEnter,m=t.unmountOnExit,g=t.children,p=(0,o.useMemo)((function(){return a||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,a]),y=(0,o.useMemo)((function(){return{onSelect:i,activeKey:s,transition:c,mountOnEnter:d||!1,unmountOnExit:m||!1,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[i,s,c,d,m,p]);return o.createElement(l.Z.Provider,{value:y},o.createElement(u.Z.Provider,{value:i||null},g))},c=n(2122),d=n(9756),m=n(5900),g=n.n(m),p=n(9541),y=o.forwardRef((function(e,t){var n=e.bsPrefix,a=e.as,i=void 0===a?"div":a,r=e.className,l=(0,d.Z)(e,["bsPrefix","as","className"]),u=(0,p.vE)(n,"tab-content");return o.createElement(i,(0,c.Z)({ref:t},l,{className:g()(r,u)}))})),f=n(9604),b=n(8817),v=n(9059),h=((a={})[f.d0]="show",a[f.cn]="show",a),E=o.forwardRef((function(e,t){var n=e.className,a=e.children,i=(0,d.Z)(e,["className","children"]),r=(0,o.useCallback)((function(e){(0,v.Z)(e),i.onEnter&&i.onEnter(e)}),[i]);return o.createElement(f.ZP,(0,c.Z)({ref:t,addEndListener:b.Z},i,{onEnter:r}),(function(e,t){return o.cloneElement(a,(0,c.Z)({},t,{className:g()("fade",n,a.props.className,h[e])}))}))}));E.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},E.displayName="Fade";var x=E;var w=o.forwardRef((function(e,t){var n=function(e){var t=(0,o.useContext)(l.Z);if(!t)return e;var n=t.activeKey,a=t.getControlledId,i=t.getControllerId,r=(0,d.Z)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==r.transition,m=(0,u.h)(e.eventKey);return(0,c.Z)({},e,{active:null==e.active&&null!=m?(0,u.h)(n)===m:e.active,id:a(e.eventKey),"aria-labelledby":i(e.eventKey),transition:s&&(e.transition||r.transition||x),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:r.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:r.unmountOnExit})}(e),a=n.bsPrefix,i=n.className,r=n.active,s=n.onEnter,m=n.onEntering,y=n.onEntered,f=n.onExit,b=n.onExiting,v=n.onExited,h=n.mountOnEnter,E=n.unmountOnExit,w=n.transition,q=n.as,K=void 0===q?"div":q,Z=(n.eventKey,(0,d.Z)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),I=(0,p.vE)(a,"tab-pane");if(!r&&!w&&E)return null;var k=o.createElement(K,(0,c.Z)({},Z,{ref:t,role:"tabpanel","aria-hidden":!r,className:g()(i,I,{active:r})}));return w&&(k=o.createElement(w,{in:r,onEnter:s,onEntering:m,onEntered:y,onExit:f,onExiting:b,onExited:v,mountOnEnter:h,unmountOnExit:E},k)),o.createElement(l.Z.Provider,{value:null},o.createElement(u.Z.Provider,{value:null},k))}));w.displayName="TabPane";var q=w,K=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.Component);K.Container=s,K.Content=y,K.Pane=q;var Z=K},3303:function(e,t,n){"use strict";n.d(t,{l0:function(){return a.l0},rU:function(){return a.rU},Hq:function(){return a.Hq}});var a=n(3653)},109:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var a=n(7294),i=n(6187),o=n(994),r=n(8327),l=n(7408),u=n(5746),s=n(2122),c=n(9756),d=n(5900),m=n.n(d),g=n(5513),p=n(9541),y=n(8120),f=a.createContext(null);f.displayName="AccordionContext";var b=f;function v(e,t){var n=(0,a.useContext)(b),i=(0,a.useContext)(y.Z);return function(a){i&&i(e===n?null:e,a),t&&t(a)}}var h=a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"button":n,o=e.children,r=e.eventKey,l=e.onClick,u=(0,c.Z)(e,["as","children","eventKey","onClick"]),d=v(r,l);return"button"===i&&(u.type="button"),a.createElement(i,(0,s.Z)({ref:t,onClick:d},u),o)})),E=n(9220),x=a.forwardRef((function(e,t){var n=e.children,i=e.eventKey,o=(0,c.Z)(e,["children","eventKey"]),r=(0,a.useContext)(b);return a.createElement(y.Z.Provider,{value:null},a.createElement(E.Z,(0,s.Z)({ref:t,in:r===i},o),a.createElement("div",null,a.Children.only(n))))}));x.displayName="AccordionCollapse";var w=x,q=a.forwardRef((function(e,t){var n=(0,g.Ch)(e,{activeKey:"onSelect"}),i=n.as,o=void 0===i?"div":i,r=n.activeKey,l=n.bsPrefix,u=n.children,d=n.className,f=n.onSelect,v=(0,c.Z)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),h=m()(d,(0,p.vE)(l,"accordion"));return a.createElement(b.Provider,{value:r||null},a.createElement(y.Z.Provider,{value:f||null},a.createElement(o,(0,s.Z)({ref:t},v,{className:h}),u)))}));q.displayName="Accordion",q.Toggle=h,q.Collapse=w;var K=q;function Z(e){var t=e.className,n=e.children,i=e.eventKey,o=e.callback,r=(0,a.useContext)(b),l=v(i,(function(){return o&&o(i)})),u=r===i;return a.createElement("div",{className:t+" "+(u?"active":""),onClick:l,onKeyDown:l,role:"button",tabIndex:u?1:0},n)}n(3653);var I=function(e){var t=e.question,n=e.answer,i=e.accKey;return a.createElement(Z,{className:"accordion-item",eventKey:i},a.createElement("span",{variant:"link",className:"accordion-trigger text-start"},t),a.createElement(K.Collapse,{eventKey:i},a.createElement("p",null,n)))},k=n(3587),C=n(7662),A=(0,k.ZP)(C.xu).withConfig({displayName:"style__Tab",componentId:"sc-1i6w6x6-0"})(["border:1px solid rgba(181,181,181,0.2);background-color:#fff;margin-right:8px;padding-top:20px;padding-bottom:25px;"]);A.List=(0,k.ZP)(C.xu).withConfig({displayName:"style__List",componentId:"sc-1i6w6x6-1"})(["display:flex;flex-direction:column;a{color:rgba(38,39,41,0.7);font-size:18px;font-weight:500;letter-spacing:normal;line-height:25px;padding:14px 25px;&.active{color:#0abfbc;}}"]),A.Box=(0,k.ZP)(C.xu).withConfig({displayName:"style__Box",componentId:"sc-1i6w6x6-2"})([""]);var N=A;function O(e){var t=e.children;(0,c.Z)(e,["children"]);return a.createElement(N,null,a.createElement(N.List,null,t))}var W=(0,k.ZP)(C.xu).withConfig({displayName:"style__Faq",componentId:"samr1n-0"})(["padding-top:50px;padding-bottom:40px;@media (min-width:768px){padding-top:70px;padding-bottom:60px;}@media (min-width:992px){padding-top:105px;padding-bottom:120px;}*:focus{outline:none;}"]);W.Title=(0,k.ZP)(C.X6).withConfig({displayName:"style__Title",componentId:"samr1n-1"})(["font-size:32px;font-weight:500;letter-spacing:normal;line-height:1.3;text-align:center;@media (min-width:768px){font-size:38px;}@media (min-width:992px){font-size:48px;}"]),W.Body=(0,k.ZP)(C.xu).withConfig({displayName:"style__Body",componentId:"samr1n-2"})([""]),W.Accordion=(0,k.ZP)(C.xu).withConfig({displayName:"style__Accordion",componentId:"samr1n-3"})(['.accordion{&-item{border:none;box-shadow:0 1px 4px rgb(0 0 0 / 10%);background-color:#fff;margin-bottom:20px;padding:0 40px;.accordion-trigger{width:100%;display:block;cursor:pointer;font-size:21px;font-weight:500;letter-spacing:normal;line-height:1.2;color:#262729;padding-top:47px;padding-bottom:24px;position:relative;&:before{content:"\f067";font-family:"Font Awesome 5 Free";position:absolute;right:0;top:50%;transform:translateY(-50%);font-weight:700;background-image:none;color:#0abfbc;}}&.active{.accordion-trigger:before{content:"\f068";font-family:"Font Awesome 5 Free";position:absolute;right:0;font-size:16px;top:50%;transform:translateY(-50%);font-weight:700;background-image:none;color:#0abfbc;}}}p{margin:0;font-size:16px;font-weight:400;letter-spacing:normal;line-height:2;color:rgba(38,39,41,0.7);padding:0 20px;padding-bottom:43px;position:relative;margin:0;&:before{content:"";position:absolute;left:0;top:0;width:4px;height:93px;background-color:#0abfbc;}}}']),W.Box=(0,k.ZP)(C.xu).withConfig({displayName:"style__Box",componentId:"samr1n-4"})([""]),W.TabWrapper=(0,k.ZP)(C.xu).withConfig({displayName:"style__TabWrapper",componentId:"samr1n-5"})([""]),W.ButtonGroup=(0,k.ZP)(C.xu).withConfig({displayName:"style__ButtonGroup",componentId:"samr1n-6"})(["p{font-size:18px;font-weight:400;letter-spacing:normal;line-height:32px;color:#262729;a{color:#fd346e;&:hover{color:#fd346e;}}}"]);var P=W;function B(){return a.createElement(P,null,a.createElement(i.Z,null,a.createElement(o.Z,{className:"justify-content-center"},a.createElement(P.Box,null,a.createElement(P.Title,{as:"h3",mb:"61px"},"Frequently Asked Question"))),a.createElement(P.Body,null,a.createElement(P.TabWrapper,{as:r.Z.Container,id:"left-tabs-example",defaultActiveKey:"first"},a.createElement(o.Z,{className:"justify-content-center"},a.createElement(l.Z,{className:"col-xl-10"},a.createElement(o.Z,{className:"justify-content-center justify-md-content-start"},a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-5 col-xs-8 mb-6 mb-lg-0"},a.createElement(O,{as:u.Z},a.createElement(u.Z.Link,{eventKey:"first",className:"nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"},"General"),a.createElement(u.Z.Link,{eventKey:"second",className:"col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"},"Accounts"),a.createElement(u.Z.Link,{eventKey:"third",className:"widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"},"Sales"),a.createElement(u.Z.Link,{eventKey:"fourth",className:"widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"},"Support"),a.createElement(u.Z.Link,{eventKey:"fifth",className:"widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"},"License"),a.createElement(u.Z.Link,{eventKey:"sixth",className:"widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"},"Refund"))),a.createElement(l.Z,{className:"col-xl-9 col-lg-8 col-md-11"},a.createElement(r.Z.Content,{className:"tab-content tab-content--feature"},a.createElement(r.Z.Pane,{eventKey:"first"},a.createElement(P.Accordion,null,a.createElement(K,{defaultActiveKey:"1a"},a.createElement(I,{question:"Can I use Fastland for my clients?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"1a"}),a.createElement(I,{question:"Does it work with WordPress?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"2a"}),a.createElement(I,{question:"Do I get free updates?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"3a"}),a.createElement(I,{question:"Will you provide support?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"4a"})))),a.createElement(r.Z.Pane,{eventKey:"second"},a.createElement(P.Accordion,null,a.createElement(K,{defaultActiveKey:"1b"},a.createElement(I,{question:"Where do I find my fastland product key?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"1b"}),a.createElement(I,{question:"Does it work with WordPress?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"2b"}),a.createElement(I,{question:" What happens after I download?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"3b"}),a.createElement(I,{question:"Will you provide support?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"4b"})))),a.createElement(r.Z.Pane,{eventKey:"third"},a.createElement(P.Accordion,null,a.createElement(K,{defaultActiveKey:"1c"},a.createElement(I,{question:"I am having trouble downloading, what else should I do?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"1c"}),a.createElement(I,{question:"How long does it take to download?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"2c"}),a.createElement(I,{question:"Do I get free updates?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"3c"}),a.createElement(I,{question:"Will you provide support?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"4c"})))),a.createElement(r.Z.Pane,{eventKey:"fourth"},a.createElement(P.Accordion,null,a.createElement(K,{defaultActiveKey:"1d"},a.createElement(I,{question:"Will you provide support?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"1d"}),a.createElement(I,{question:"Does it work with WordPress?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"2d"}),a.createElement(I,{question:"Do I get free updates?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"3d"}),a.createElement(I,{question:"Can I use Fastland for my clients?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"4d"})))),a.createElement(r.Z.Pane,{eventKey:"fifth"},a.createElement(P.Accordion,null,a.createElement(K,{defaultActiveKey:"1e"},a.createElement(I,{question:"Where do I find my fastland license key?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"1e"}),a.createElement(I,{question:"How do I activate my fastland?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"2e"}),a.createElement(I,{question:"Can I purchase backup file?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"3e"}),a.createElement(I,{question:"Will you provide support?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"4e"})))),a.createElement(r.Z.Pane,{eventKey:"sixth"},a.createElement(P.Accordion,null,a.createElement(K,{defaultActiveKey:"1f"},a.createElement(I,{question:"How do I request a refund?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"1f"}),a.createElement(I,{question:"My refund request was denied. Can I contest this decision?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"2f"}),a.createElement(I,{question:"Do I get free updates?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"3f"}),a.createElement(I,{question:"Will you provide support?",answer:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",accKey:"4f"}))))),a.createElement(P.ButtonGroup,{mt:"50px"},a.createElement("p",null,"Haven’t got your answer?",a.createElement("a",{className:"btn-link text-readical-red ms-2",href:"#"},"Contact our support now")))))))))))}}}]);
//# sourceMappingURL=d91892a01ef95631e235296c3b375887625427e9-4c2084e3f78be38f3176.js.map