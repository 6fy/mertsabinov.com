(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,l=n(r(7294)),u=r(1003),i=r(7795),c=r(4465),a=r(2692),s=r(8245),f=r(9246),p=r(227),d=r(3468);let h=new Set;function v(e,t,r,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let r,n;let{href:i,as:h,children:m,prefetch:b,passHref:g,replace:w,shallow:O,scroll:C,locale:E,onClick:T,onMouseEnter:x,onTouchStart:_,legacyBehavior:j=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,j&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let M=!1!==b,P=l.default.useContext(a.RouterContext),L=l.default.useContext(s.AppRouterContext),N=null!=P?P:L,S=!P,{href:I,as:R}=l.default.useMemo(()=>{if(!P){let e=y(i);return{href:e,as:h?y(h):e}}let[e,t]=u.resolveHref(P,i,!0);return{href:e,as:h?u.resolveHref(P,h):t||e}},[P,i,h]),z=l.default.useRef(I),A=l.default.useRef(R);j&&(n=l.default.Children.only(r));let D=j?n&&"object"==typeof n&&n.ref:t,[K,U,H]=f.useIntersection({rootMargin:"200px"}),B=l.default.useCallback(e=>{(A.current!==R||z.current!==I)&&(H(),A.current=R,z.current=I),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[R,D,I,H,K]);l.default.useEffect(()=>{N&&U&&M&&v(N,I,R,{locale:E})},[R,I,U,E,M,null==P?void 0:P.locale,N]);let Z={ref:B,onClick(e){j||"function"!=typeof T||T(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,o,i,c,a,s,f){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:a,scroll:c}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?l.default.startTransition(h):h()}(e,N,I,R,w,O,C,E,S,M)},onMouseEnter(e){j||"function"!=typeof x||x(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(M||!S)&&v(N,I,R,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){j||"function"!=typeof _||_(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(M||!S)&&v(N,I,R,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!j||g||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&p.getDomainLocale(R,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);Z.href=t||d.addBasePath(c.addLocale(R,e,null==P?void 0:P.defaultLocale))}return j?l.default.cloneElement(n,Z):l.default.createElement("a",Object.assign({},k,Z),r)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,a=c||!l,[s,f]=n.useState(!1),p=n.useRef(null),d=n.useCallback(e=>{p.current=e},[]);n.useEffect(()=>{if(l){if(a||s)return;let e=p.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},i.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[a,r,t,s,p.current]);let h=n.useCallback(()=>{f(!1)},[]);return[d,s,h]};var n=r(7294),o=r(4686);let l="function"==typeof IntersectionObserver,u=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function l(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c=[],a=!1,s=-1;function f(){a&&n&&(a=!1,n.length?c=n.concat(c):s=-1,c.length&&p())}function p(){if(!a){var e=i(f);a=!0;for(var t=c.length;t;){for(n=c,c=[];++s<t;)n&&n[s].run();s=-1,t=c.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||a||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}},u=!0;try{t[e](l,l.exports,n),u=!1}finally{u&&delete r[e]}return l.exports}n.ab="//";var o=n(229);e.exports=o}()},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function c(e){return function(t){return n.createElement(a,u({attr:u({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,u({key:r},t.attr),e(t.child))})}(e.child))}}function a(e){var t=function(t){var r,o=e.attr,l=e.size,c=e.title,a=i(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,a,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}}]);