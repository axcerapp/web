"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2||[]).push([[869],{8676:function(t){t.exports=function(t,e){e=e||JSON.stringify;for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],l=e(i);r[l]||(n.push(i),r[l]=!0)}return n}},6349:function(t,e,n){n.r(e);var r=n(5791);e.default=r.Z},5791:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(5773),o=n(808),i=(n(7378),n(7814)),l=n(1421),a=n(6196),s=n(7425),c=n(4459),u=n(9341),d=n(6495),f=["data"],p=function(t){var e=t.data,n=e.posts,p=e.collectionInfo,g=(0,o.Z)(t,f);return(0,d.tZ)(i.Ar,g,(0,d.tZ)(u.Z,{title:p.name,description:p.description}),(0,d.tZ)(c.Z,null),(0,d.tZ)(i.Kq,{effectProps:{effect:"fadeInDown"}},(0,d.tZ)(l.Z,{header:p.name,subheader:p.title,running:p.description,totalCount:n.totalCount})),(0,d.tZ)(c.Z,null),(0,d.tZ)(i.Kq,null,(0,d.tZ)(i.or,null,n.nodes&&(0,d.tZ)(s.Z,{nodes:n.nodes,variant:["horizontal-md","vertical"],columns:[1,2,3,3],omitCategory:g.pageContext&&"category"===g.pageContext.collectionType}))),(0,d.tZ)(c.Z,null),(0,d.tZ)(i.jS,null,(0,d.tZ)(a.Z,(0,r.Z)({},n.pageInfo,p))))}},7425:function(t,e,n){n.d(e,{Z:function(){return S}});var r=n(5773),o=n(808),i=n(7378),l=n(8945),a=n(6741),s=n(8175),c=n(8676),u=n.n(c),d=n(7619),f=n(4649),p=n(5987),g=n(1025),b=n(7566),v={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},h=n(72),m=n(6495);function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){(0,f.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=(0,h.ZP)((function(){return n.e(636).then(n.bind(n,2324))})),x=i.forwardRef((function(t,e){var n=t.columns,o=t.slidesToScroll,i=t.smoothAutoScroll,a=t.autoPlay,s=t.autoplaySpeed,c=t.fade,u=t.dots,d=t.arrows,f=t.centerMode,h=t.centerPadding,Z=t.controlPosition,x=t.beforeChange,w=t.children,O=(0,p.B7)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},j={centerMode:!c,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!c)},S=O.theme.breakpoints.map((function(t,e){var r=n[e>=n.length?n.length-1:e],i=o[e>=o.length?o.length-1:e];return{breakpoint:parseInt(t),settings:k({slidesToShow:r,slidesToScroll:i},0===e?j:{})}})),C={ref:e,beforeChange:x,slidesToShow:n[n.length-1],slidesToScroll:o[o.length-1],speed:800,dots:u,arrows:d,centerMode:f,centerPadding:h,infinite:!0,cssEase:c?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:c,responsive:S,css:(0,g.i)(k(k(k(k({},c?v.fade:v.slide),"bottom"===Z&&v.controlBottom),"center"===Z&&v.controlCenter),"over"===Z&&v.controlOver)),prevArrow:(0,m.tZ)(l.hU,{sx:v.arrowPrev},(0,m.tZ)(b.bUI,null)),nextArrow:(0,m.tZ)(l.hU,{sx:v.arrowNext},(0,m.tZ)(b.Dli,null))};i&&(C=k(k(k({},C),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!i&&a&&(C=k(k(k({},C),P),{},{speed:300,autoplaySpeed:s}));var D=w.slice(0,n[n.length-1]);return(0,m.tZ)(y,(0,r.Z)({},C,{fallback:D}),w)})),w=x;x.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var O=n(2040),P=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],j=i.forwardRef((function(t,e){var n=t.nodes,i=t.variant,c=t.title,f=t.withTitleLink,p=t.limit,g=t.skip,b=t.distinct,v=t.slider,h=t.aside,Z=t.asNavFor,k=t.loading,y=(0,o.Z)(t,P),x=function(t,e){var n=e.limit,r=e.skip,o=e.distinct;if(!t)return null;if(!n&&!r&&!o)return t;var i=t;return o&&(i=u()(i,(function(t){return t.id}))),r&&(i=i.slice(r)),n&&(i=i.slice(0,n)),i}(n,{distinct:b,limit:p,skip:g});if(!x||!x.length)return null;var j=f?x[0].category&&x[0].category.slug:"",S=c&&""+(0,s.Z)(x.map((function(t){return t.id})).join()),C=(0,a.Z)(v?"lists.cards.slider":"lists.cards.fixed",i),D=function(t){Z&&Z.current&&(Z.current.slickPause(),Z.current.slickGoTo(t))},T=x.map((function(e,n){return(0,m.tZ)(O.Z,(0,r.Z)({key:e.id,variant:i,onMouseOver:function(){return D(n)},onFocus:function(){return D(n)},loading:t.fade?0===n?k:void 0:k},e,y))})),_=function(){return(0,m.tZ)(l.xu,{sx:{variant:C}},v?(0,m.tZ)(w,(0,r.Z)({ref:e},y),T):T)};return c?(0,m.tZ)(d.Z,{title:c,titleLink:j,key:S,aside:h},(0,m.tZ)(_,null)):(0,m.tZ)(_,null)})),S=j;j.defaultProps={variant:"vertical",columns:[1],aside:!1}},1421:function(t,e,n){n.d(e,{Z:function(){return l}});n(7378);var r=n(8945),o=n(6495),i={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},l=function(t){var e=t.header,n=t.subheader,l=t.running,a=t.totalCount;return(0,o.tZ)("div",null,(0,o.tZ)(r.X6,{variant:"h1",as:"h1"},e," ",a&&(0,o.tZ)(r.Ct,{variant:"tag-white",sx:i.count}," ",a)),n&&(0,o.tZ)(r.xv,{variant:"h3",sx:i.subheader},n),l&&(0,o.tZ)(r.xv,{variant:"h4",sx:i.runninghead},l))}},6196:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(4649),o=(n(7378),n(5414)),i=n(8945),l=n(7566),a=function(t){return t.replace(/\/*$/,"/")},s=n(6495);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},f=function(t){var e=t.currentPage,n=t.pageCount,r=t.hasPreviousPage,c=t.hasNextPage,f=t.basePath,p=void 0===f?"":f,g=t.slug;if(!c&&!r)return"";var b=a(p+(void 0===g?"":g)),v=a(b+"page"),h=e>=3?""+v+(e-1):b,m=""+v+(e+1);return(0,s.tZ)(i.kC,{sx:d.wrapper},(0,s.tZ)(i.xu,{sx:d.item},r&&(0,s.tZ)(i.zx,{variant:"mute",as:o.Link,to:h,sx:d.button},(0,s.tZ)(l.bUI,null),"Previous")),(0,s.tZ)(i.xu,{sx:u(u({},d.item),d.number)},"Page ",(0,s.tZ)("strong",null,e)," of ",(0,s.tZ)("strong",null,n)),(0,s.tZ)(i.xu,{sx:d.item},c&&(0,s.tZ)(i.zx,{variant:"dark",as:o.Link,to:m,sx:d.button},"Next",(0,s.tZ)(l.Dli,null))))}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-collection-tag-js-888f89e24b12a775089d.js.map