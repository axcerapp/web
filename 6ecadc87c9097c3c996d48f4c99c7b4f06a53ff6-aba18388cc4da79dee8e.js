(self.webpackChunkfastland_react_app=self.webpackChunkfastland_react_app||[]).push([[6639],{7992:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=r(n(67294)),s=r(n(18090));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return a.default.createElement(s.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?a.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},a.default.createElement("div",{className:e.props.classNames.modalVideoBody},a.default.createElement("div",{className:e.props.classNames.modalVideoInner},a.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},a.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||a.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(a.default.Component);t.Z=i,i.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},18090:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}t.default=e}(n(45697));var o=i(n(33971)),a=i(n(25641)),s=i(n(67294)),r=i(n(88532));n(30279);function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},p=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).onEnter=function(e,n){var o=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,o),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,o),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.getClassNames("appear").doneClassName,a=t.getClassNames("enter").doneClassName,s=n?o+" "+a:a;t.removeClasses(e,n?"appear":"enter"),u(e,s),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,o="string"==typeof n,a=o?(o&&n?n+"-":"")+e:n[e];return{className:a,activeClassName:o?a+"-active":n[e+"Active"],doneClassName:o?a+"-done":n[e+"Done"]}},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;return a.removeClasses=function(e,t){var n=this.getClassNames(t),o=n.className,a=n.activeClassName,s=n.doneClassName;o&&c(e,o),a&&c(e,a),s&&c(e,s)},a.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},a.render=function(){var e=l({},this.props);return delete e.classNames,s.default.createElement(r.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(s.default.Component);p.defaultProps={classNames:""},p.propTypes={};var d=p;t.default=d,e.exports=t.default},88532:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(45697)),a=i(n(67294)),s=i(n(73935)),r=n(63639);n(30279);function i(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var u="exited";t.EXITED=u;var c="entering";t.ENTERING=c;var p="entered";t.ENTERED=p;var d="exiting";t.EXITING=d;var f=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var a,s=n.transitionGroup,r=s&&!s.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?r?(a=u,o.appearStatus=c):a=p:a=t.unmountOnExit||t.mountOnEnter?l:u,o.state={status:a},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:u}:null},r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(t=c):n!==c&&n!==p||(t=d)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=s.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},r.performEnter=function(e,t){var n=this,o=this.props.enter,a=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,s=this.getTimeouts(),r=a?s.appear:s.enter;t||o?(this.props.onEnter(e,a),this.safeSetState({status:c},(function(){n.props.onEntering(e,a),n.onTransitionEnd(e,r,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(e,a)}))}))}))):this.safeSetState({status:p},(function(){n.props.onEntered(e)}))},r.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:d},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:u},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:u},(function(){t.props.onExited(e)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},r.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(e,o);var s=a.default.Children.only(n);return a.default.cloneElement(s,o)},o}(a.default.Component);function m(){}f.contextTypes={transitionGroup:o.object},f.childContextTypes={transitionGroup:function(){}},f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},f.UNMOUNTED=0,f.EXITED=1,f.ENTERING=2,f.ENTERED=3,f.EXITING=4;var h=(0,r.polyfill)(f);t.default=h},30279:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var o;(o=n(45697))&&o.__esModule;t.timeoutsShape=null;t.classNamesShape=null},25103:function(e,t,n){"use strict";var o=n(67294),a=n(7992);t.Z=function(e){var t=e.id,n=e.className,s=e.children,r=(0,o.useState)(!1),i=r[0],l=r[1];return o.createElement(o.Fragment,null,o.createElement(a.Z,{channel:"youtube",autoplay:!0,isOpen:i,videoId:t,onClose:function(){return l(!1)}}),o.createElement("button",{className:"btn-reset"+(n?" "+n:""),onClick:function(){return l(!0)}},s))}},33971:function(e,t,n){"use strict";var o=n(95318);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,a.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var a=o(n(65962));e.exports=t.default},65962:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},25641:function(e){"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}}}]);
//# sourceMappingURL=6ecadc87c9097c3c996d48f4c99c7b4f06a53ff6-aba18388cc4da79dee8e.js.map