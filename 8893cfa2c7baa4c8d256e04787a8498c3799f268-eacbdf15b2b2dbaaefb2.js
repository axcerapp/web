(self.webpackChunkfastland_react_app=self.webpackChunkfastland_react_app||[]).push([[5642],{8327:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var o,a=n(1788),i=n(7294),r=n(5513),l=n(5777),s=n(8120),c=function(e){var t=(0,r.Ch)(e,{activeKey:"onSelect"}),n=t.id,o=t.generateChildId,a=t.onSelect,c=t.activeKey,m=t.transition,d=t.mountOnEnter,p=t.unmountOnExit,u=t.children,g=(0,i.useMemo)((function(){return o||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,o]),x=(0,i.useMemo)((function(){return{onSelect:a,activeKey:c,transition:m,mountOnEnter:d||!1,unmountOnExit:p||!1,getControlledId:function(e){return g(e,"tabpane")},getControllerId:function(e){return g(e,"tab")}}}),[a,c,m,d,p,g]);return i.createElement(l.Z.Provider,{value:x},i.createElement(s.Z.Provider,{value:a||null},u))},m=n(2122),d=n(9756),p=n(5900),u=n.n(p),g=n(9541),x=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,a=void 0===o?"div":o,r=e.className,l=(0,d.Z)(e,["bsPrefix","as","className"]),s=(0,g.vE)(n,"tab-content");return i.createElement(a,(0,m.Z)({ref:t},l,{className:u()(r,s)}))})),f=n(9604),h=n(8817),b=n(9059),y=((o={})[f.d0]="show",o[f.cn]="show",o),E=i.forwardRef((function(e,t){var n=e.className,o=e.children,a=(0,d.Z)(e,["className","children"]),r=(0,i.useCallback)((function(e){(0,b.Z)(e),a.onEnter&&a.onEnter(e)}),[a]);return i.createElement(f.ZP,(0,m.Z)({ref:t,addEndListener:h.Z},a,{onEnter:r}),(function(e,t){return i.cloneElement(o,(0,m.Z)({},t,{className:u()("fade",n,o.props.className,y[e])}))}))}));E.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},E.displayName="Fade";var w=E;var v=i.forwardRef((function(e,t){var n=function(e){var t=(0,i.useContext)(l.Z);if(!t)return e;var n=t.activeKey,o=t.getControlledId,a=t.getControllerId,r=(0,d.Z)(t,["activeKey","getControlledId","getControllerId"]),c=!1!==e.transition&&!1!==r.transition,p=(0,s.h)(e.eventKey);return(0,m.Z)({},e,{active:null==e.active&&null!=p?(0,s.h)(n)===p:e.active,id:o(e.eventKey),"aria-labelledby":a(e.eventKey),transition:c&&(e.transition||r.transition||w),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:r.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:r.unmountOnExit})}(e),o=n.bsPrefix,a=n.className,r=n.active,c=n.onEnter,p=n.onEntering,x=n.onEntered,f=n.onExit,h=n.onExiting,b=n.onExited,y=n.mountOnEnter,E=n.unmountOnExit,v=n.transition,C=n.as,_=void 0===C?"div":C,N=(n.eventKey,(0,d.Z)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),Z=(0,g.vE)(o,"tab-pane");if(!r&&!v&&E)return null;var k=i.createElement(_,(0,m.Z)({},N,{ref:t,role:"tabpanel","aria-hidden":!r,className:u()(a,Z,{active:r})}));return v&&(k=i.createElement(v,{in:r,onEnter:c,onEntering:p,onEntered:x,onExit:f,onExiting:h,onExited:b,mountOnEnter:y,unmountOnExit:E},k)),i.createElement(l.Z.Provider,{value:null},i.createElement(s.Z.Provider,{value:null},k))}));v.displayName="TabPane";var C=v,_=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.Component);_.Container=c,_.Content=x,_.Pane=C;var N=_},3303:function(e,t,n){"use strict";n.d(t,{l0:function(){return o.l0},rU:function(){return o.rU},Hq:function(){return o.Hq}});var o=n(3653)},9444:function(e,t,n){"use strict";var o=n(553),a={featureTabTitle1:"Best features<br className='d-none d-xs-block' />for your project<br className='d-none d-xs-block' /> management.",featureTabTitle2:"Manage your<br className='d-none d-xs-block' />tasks easily with<br className='d-none d-xs-block' /> FastLand.",featureTabTitle3:"Make Schedules<br className='d-none d-xs-block' />ffor Any Meeting<br className='d-none d-xs-block' /> on Calendar.",tabWidget1:[{icon:o.rU.projectManagement.featureTwoIcon1,iconBackground:"#ff8d52",title:"Manage Smartly",text:"Stay on top of your task lists and stay <br class='d-none d-xs-block'> in touch with what's happening"},{icon:o.rU.projectManagement.featureTwoIcon2,iconBackground:"#15cda8",title:"Communicate Fast",text:"Stay on top of your task lists and stay <br class='d-none d-xs-block'> in touch with what's happening"}]};t.Z=a},1582:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(3303),a=n(7294),i=n(6187),r=n(994),l=n(7408),s=n(553),c=n(3587),m=n(7662),d=(0,c.ZP)(m.xu).withConfig({displayName:"style__Footer",componentId:"sc-1gl7hgp-0"})(["padding-top:80px;padding-bottom:40px;"]);d.Widgets=(0,c.ZP)(m.xu).withConfig({displayName:"style__Widgets",componentId:"sc-1gl7hgp-1"})([""]),d.Logo=(0,c.ZP)(m.xu).withConfig({displayName:"style__Logo",componentId:"sc-1gl7hgp-2"})(["text-align:center;"]),d.Link=(0,c.ZP)(m.xu).withConfig({displayName:"style__Link",componentId:"sc-1gl7hgp-3"})([""]),d.Text=(0,c.ZP)(m.xu).withConfig({displayName:"style__Text",componentId:"sc-1gl7hgp-4"})(["font-size:15px;font-weight:400;letter-spacing:normal;line-height:28px;color:rgba(38,39,41,0.7);margin-bottom:16px;text-align:center;"]),d.SocialShare=(0,c.ZP)(m.xu).attrs({className:"footer-social-share list-unstyled",as:"ul"}).withConfig({displayName:"style__SocialShare",componentId:"sc-1gl7hgp-5"})(["padding:0;margin:0 -10px;margin-bottom:60px;"]),d.SocialShareItem=(0,c.ZP)(m.xu).attrs({className:"list-items",as:"li"}).withConfig({displayName:"style__SocialShareItem",componentId:"sc-1gl7hgp-6"})(["display:inline-flex;align-items:center;padding:0 10px;a{min-width:36px;max-width:36px;min-height:36px;max-height:36px;box-shadow:0 2px 2px rgb(0 0 0 / 10%);background-color:#fff;color:#262729;font-size:15px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:0.4s;&:hover{box-shadow:0 10px 20px rgba(253 52 110,0.25);background-color:#8a55df;color:#fff;}}&:first-child{a:before{display:none;}}"]),d.Copyright=(0,c.ZP)(m.xu).withConfig({displayName:"style__Copyright",componentId:"sc-1gl7hgp-7"})(["text-align:center;padding-bottom:40px;display:block;"]),d.CopyrightText=(0,c.ZP)(m.xu).withConfig({displayName:"style__CopyrightText",componentId:"sc-1gl7hgp-8"})(["font-size:13px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:22px;"]),d.Menu=(0,c.ZP)(m.xu).attrs({className:"footer-menu list-unstyled",as:"ul"}).withConfig({displayName:"style__Menu",componentId:"sc-1gl7hgp-9"})(["padding:0;margin:0;text-align:center;margin-bottom:0;"]),d.MenuItems=(0,c.ZP)(m.xu).attrs({className:"footer-menu__li",as:"li"}).withConfig({displayName:"style__MenuItems",componentId:"sc-1gl7hgp-10"})(["display:inline-block;a{font-size:16px;font-weight:400;letter-spacing:normal;line-height:30px;display:inline-flex;align-items:center;padding:5px 20px;color:#262729;transition:0.4s;&:hover{color:#8a55df;}}"]),d.Box=(0,c.ZP)(m.xu).withConfig({displayName:"style__Box",componentId:"sc-1gl7hgp-11"})([""]);var p=d;function u(){return a.createElement(p,{backgroundColor:"#f3f4f6"},a.createElement(i.Z,null,a.createElement(p.Box,{pb:"25px"},a.createElement(r.Z,{className:"justify-content-center justify-content-lg-between"},a.createElement(l.Z,{xs:"12"},a.createElement(p.Logo,null,a.createElement(p.Box,{mb:"30px"},a.createElement(o.rU,{to:"#"},a.createElement("img",{src:s.rU.FooterSix.LogoBlack,alt:"logo"})))),a.createElement(p.Text,{as:"p"},"Bring your idea into finger tips."),a.createElement(p.Menu,null,a.createElement(p.MenuItems,null,a.createElement("a",{href:"/"},"Home")),a.createElement(p.MenuItems,null,a.createElement("a",{href:"/portfolio"},"Portfolio")),a.createElement(p.MenuItems,null,a.createElement("a",{href:"/career"},"Career")),a.createElement(p.MenuItems,null,a.createElement("a",{href:"/contact"},"Contact Us")))))),a.createElement(p.Copyright,null,a.createElement(p.SocialShare,null,a.createElement(p.SocialShareItem,null,a.createElement("a",{href:"https://www.linkedin.com/company/axcer/"},a.createElement("i",{className:"fab fa-linkedin"}))),a.createElement(p.SocialShareItem,null,a.createElement("a",{href:"https://www.facebook.com/AxcerInnovations"},a.createElement("i",{className:"fab fa-facebook-square"}))),a.createElement(p.SocialShareItem,null,a.createElement("a",{href:"https://github.com/organizations/Axcer-io"},a.createElement("i",{className:"fab fa-github"}))),a.createElement(p.SocialShareItem,null,a.createElement("a",{href:"https://www.instagram.com/axcer.io/"},a.createElement("i",{className:"fab fa-instagram"})))),a.createElement(p.CopyrightText,null,"© 2021 Axcer Innovations, All Rights Reserved"))))}},9655:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(7294),a=n(6187),i=n(994),r=n(7408),l=n(553),s=n(3587),c=n(7662),m=(0,s.ZP)(c.xu).withConfig({displayName:"style__Cta",componentId:"sc-1mkj2nb-0"})(['padding-top:60px;padding-bottom:20px;background-position:center;background-size:cover;background-repeat:no-repeat;z-index:1;@media (min-width:768px){padding-top:60px;padding-bottom:60px;}@media (min-width:992px){padding-top:100px;padding-bottom:110px;}&::before{content:"";background-color:rgba(80,52,252,0.9);mix-blend-mode:multiply;position:absolute;width:100%;height:100%;left:0;top:0;z-index:-1;}']);m.Title=(0,s.ZP)(c.X6).withConfig({displayName:"style__Title",componentId:"sc-1mkj2nb-1"})(["font-size:32px;font-weight:500;letter-spacing:normal;line-height:1.3;@media (min-width:768px){font-size:38px;}@media (min-width:992px){font-size:48px;}"]),m.Text=(0,s.ZP)(c.nv).withConfig({displayName:"style__Text",componentId:"sc-1mkj2nb-2"})(["font-size:16px;font-weight:500;letter-spacing:normal;line-height:1.75;"]),m.Button=(0,s.ZP)(c.zx).withConfig({displayName:"style__Button",componentId:"sc-1mkj2nb-3"})(["color:#fff !important;background-color:#8a55df;border-color:#8a55df;box-shadow:-12px 12px 50px rgb(253 52 110 / 30%);border-radius:500px;&:hover{box-shadow:0 20px 20px rgb(255 75 96 / 0%);color:#fff !important;}"]),m.Box=(0,s.ZP)(c.xu).withConfig({displayName:"style__Box",componentId:"sc-1mkj2nb-4"})([""]);var d=m,p=n(6595),u=function(){return(0,p.Bz)({url:"https://calendly.com/axcer/30min"})};function g(){return o.createElement(d,{backgroundImage:l.rU.itServices.promoBg},o.createElement(a.Z,null,o.createElement(i.Z,{className:"justify-content-center"},o.createElement(r.Z,{xs:"12",className:"col-xl-7 text-center"},o.createElement(d.Title,{as:"h2",fontColor:"#fff",mb:"10px"},"Let's talk about how Axcer can help you build your business"),o.createElement(d.Button,{onClick:u,sizeX:"180px",sizeY:"56px",mt:"20px"},"Get Started")))))}},8458:function(e,t,n){"use strict";n(7294),n(8538);var o=n(3587),a=n(7662),i=(0,o.ZP)(a.xu).withConfig({displayName:"style__PortfolioDetails",componentId:"gbramo-0"})(["padding:45px 0;@media (min-width:768px){padding:80px 0;}@media (min-width:992px){padding:115px 0;}"]);i.Image=(0,o.ZP)(a.xu).withConfig({displayName:"style__Image",componentId:"gbramo-1"})(["img{border-radius:10px;}"]),i.Content=(0,o.ZP)(a.xu).withConfig({displayName:"style__Content",componentId:"gbramo-2"})([""]),i.Title=(0,o.ZP)(a.X6).withConfig({displayName:"style__Title",componentId:"gbramo-3"})(["font-size:32px;font-weight:500;letter-spacing:normal;line-height:54px;text-transform:uppercase;margin-bottom:25px;@media (min-width:768px){font-size:35px;}@media (min-width:992px){font-size:45px;}"]),i.Text=(0,o.ZP)(a.nv).withConfig({displayName:"style__Text",componentId:"gbramo-4"})(["font-size:18px;font-weight:400;letter-spacing:normal;line-height:32px;margin-bottom:20px;margin-right:10px;"]),i.List=(0,o.ZP)(a.xu).withConfig({displayName:"style__List",componentId:"gbramo-5"})(['padding:0;margin:0;li{font-size:18px;font-weight:500;letter-spacing:normal;line-height:25px;position:relative;padding-left:30px;margin-bottom:20px;list-style:none;&::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:11px;height:11px;border-radius:50%;background-color:#8a55df;}span{color:#262729;margin-right:15px;}}']),i.Box=(0,o.ZP)(a.xu).withConfig({displayName:"style__Box",componentId:"gbramo-6"})([""]),i.SliderWrapper=(0,o.ZP)(a.xu).withConfig({displayName:"style__SliderWrapper",componentId:"gbramo-7"})([".slick-list{margin:0 -12px;@media (min-width:992px){width:150%;}}.slick-slide{padding:0 12px;&:focus{outline:none!important;box-shadow:none;}}.single-slide{border-radius:10px;overflow:hidden;img{width:100%;}}.slick-dots{background:rgba(0,0,0,0.07);border-radius:10px;position:relative;height:6px;margin-top:40px;li{position:absolute;width:100%;height:100%;margin:0;list-style:none;overflow:hidden;border-radius:500px;button{position:absolute;padding:0;width:0;height:100%;margin:0;border:none;background:transparent;font-size:0;transition:width 6s linear;border-radius:500px;}&.slick-active{display:block;width:100%;top:0;left:0;button{background:var(--bs-electric-violet-2);width:100%;}}}}"]),i.Slide=(0,o.ZP)(a.xu).attrs({className:"single-slide"}).withConfig({displayName:"style__Slide",componentId:"gbramo-8"})([""]);n.p,n.p,n.p,n.p}}]);
//# sourceMappingURL=8893cfa2c7baa4c8d256e04787a8498c3799f268-eacbdf15b2b2dbaaefb2.js.map