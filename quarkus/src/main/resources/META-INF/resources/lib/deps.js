// https://npm.reversehttp.com/preact/hooks,preact,htm

var e,n,t,_,o,r,u,l={},i=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function a(e){var n=e.parentNode;n&&n.removeChild(e)}function f(e,n,t){var _,o,r,u=arguments,l={};for(r in n)"key"==r?_=n[r]:"ref"==r?o=n[r]:l[r]=n[r];if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(u[r]);if(null!=t&&(l.children=t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===l[r]&&(l[r]=e.defaultProps[r]);return p(e,l,_,o,null)}function p(n,t,_,o,r){var u={type:n,props:t,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(u.__v=u),null!=e.vnode&&e.vnode(u),u}function h(){return{current:null}}function d(e){return e.children}function v(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function m(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return m(e)}}function g(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!k.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||_)(k)}function k(){for(var e;k.__r=t.length;)e=t.sort((function(e,n){return e.__v.__b-n.__v.__b})),t=[],e.some((function(e){var n,t,_,o,r,u,l;e.__d&&(u=(r=(n=e).__v).__e,(l=n.__P)&&(t=[],(_=s({},r)).__v=_,o=A(l,r,_,n.__n,void 0!==l.ownerSVGElement,null,t,null==u?y(r):u),D(t,r),o!=u&&m(r)))}))}function b(e,n,t,_,o,r,u,c,s,f){var h,v,m,g,k,b,C,x=_&&_.__k||i,E=x.length;for(s==l&&(s=null!=u?u[0]:E?y(_,0):null),t.__k=[],h=0;h<n.length;h++)if(null!=(g=t.__k[h]=null==(g=n[h])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?p(null,g,null,null,g):Array.isArray(g)?p(d,{children:g},null,null,null):null!=g.__e||null!=g.__c?p(g.type,g.props,g.key,null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(m=x[h])||m&&g.key==m.key&&g.type===m.type)x[h]=void 0;else for(v=0;v<E;v++){if((m=x[v])&&g.key==m.key&&g.type===m.type){x[v]=void 0;break}m=null}k=A(e,g,m=m||l,o,r,u,c,s,f),(v=g.ref)&&m.ref!=v&&(C||(C=[]),m.ref&&C.push(m.ref,null,g),C.push(v,g.__c||k,g)),null!=k?(null==b&&(b=k),s=w(e,g,m,x,u,k,s),f||"option"!=t.type?"function"==typeof t.type&&(t.__d=s):e.value=""):s&&m.__e==s&&s.parentNode!=e&&(s=y(m))}if(t.__e=b,null!=u&&"function"!=typeof t.type)for(h=u.length;h--;)null!=u[h]&&a(u[h]);for(h=E;h--;)null!=x[h]&&F(x[h],x[h]);if(C)for(h=0;h<C.length;h++)U(C[h],C[++h],C[++h])}function C(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){C(e,n)})):n.push(e)),n}function w(e,n,t,_,o,r,u){var l,i,c;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(o==t||r!=u||null==r.parentNode)e:if(null==u||u.parentNode!==e)e.appendChild(r),l=null;else{for(i=u,c=0;(i=i.nextSibling)&&c<_.length;c+=2)if(i==r)break e;e.insertBefore(r,u),l=u}return void 0!==l?l:r.nextSibling}function x(e,n,t,_,o){var r;for(r in t)"children"===r||"key"===r||r in n||H(e,r,null,t[r],_);for(r in n)o&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||H(e,r,n[r],t[r],_)}function E(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||c.test(n)?t:t+"px"}function H(e,n,t,_,o){var r,u;if(o&&"className"==n&&(n="class"),"style"===n)if("string"==typeof t)e.style=t;else{if("string"==typeof _&&(e.style=_=""),_)for(n in _)t&&n in t||E(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||E(e.style,n,t[n])}else"o"===n[0]&&"n"===n[1]?(r=n!==(n=n.replace(/Capture$/,"")),(u=n.toLowerCase())in e&&(n=u),n=n.slice(2),e.l||(e.l={}),e.l[n]=t,t?_||e.addEventListener(n,S,r):e.removeEventListener(n,S,r)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!o&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function S(n){this.l[n.type](e.event?e.event(n):n)}function P(e,n,t){var _,o;for(_=0;_<e.__k.length;_++)(o=e.__k[_])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&P(o,n,t),n=w(t,o,o,e.__k,null,o.__e,n),"function"==typeof e.type&&(e.__d=n)))}function A(n,t,_,o,r,u,l,i,c){var a,f,p,h,y,m,g,k,C,w,x,E=t.type;if(void 0!==t.constructor)return null;(a=e.__b)&&a(t);try{e:if("function"==typeof E){if(k=t.props,C=(a=E.contextType)&&o[a.__c],w=a?C?C.props.value:a.__:o,_.__c?g=(f=t.__c=_.__c).__=f.__E:("prototype"in E&&E.prototype.render?t.__c=f=new E(k,w):(t.__c=f=new v(k,w),f.constructor=E,f.render=T),C&&C.sub(f),f.props=k,f.state||(f.state={}),f.context=w,f.__n=o,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,E.getDerivedStateFromProps(k,f.__s))),h=f.props,y=f.state,p)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,w)||t.__v===_.__v){f.props=k,f.state=f.__s,t.__v!==_.__v&&(f.__d=!1),f.__v=t,t.__e=_.__e,t.__k=_.__k,f.__h.length&&l.push(f),P(t,i,n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,y,m)}))}f.context=w,f.props=k,f.state=f.__s,(a=e.__r)&&a(t),f.__d=!1,f.__v=t,f.__P=n,a=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=s(s({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(h,y)),x=null!=a&&a.type==d&&null==a.key?a.props.children:a,b(n,Array.isArray(x)?x:[x],t,_,o,r,u,l,i,c),f.base=t.__e,f.__h.length&&l.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==u&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=N(_.__e,t,_,o,r,u,l,c);(a=e.diffed)&&a(t)}catch(n){t.__v=null,e.__e(n,t,_)}return t.__e}function D(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function N(e,n,t,_,o,r,u,c){var s,a,f,p,h,d=t.props,v=n.props;if(o="svg"===n.type||o,null!=r)for(s=0;s<r.length;s++)if(null!=(a=r[s])&&((null===n.type?3===a.nodeType:a.localName===n.type)||e==a)){e=a,r[s]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),r=null,c=!1}if(null===n.type)d!==v&&e.data!==v&&(e.data=v);else{if(null!=r&&(r=i.slice.call(e.childNodes)),f=(d=t.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=r)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}x(e,v,d,o,c),p?n.__k=[]:(s=n.props.children,b(e,Array.isArray(s)?s:[s],n,t,_,"foreignObject"!==n.type&&o,r,u,l,c)),c||("value"in v&&void 0!==(s=v.value)&&s!==e.value&&H(e,"value",s,d.value,!1),"checked"in v&&void 0!==(s=v.checked)&&s!==e.checked&&H(e,"checked",s,d.checked,!1))}return e}function U(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function F(n,t,_){var o,r,u;if(e.unmount&&e.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||U(o,null,t)),_||"function"==typeof n.type||(_=null!=(r=n.__e)),n.__e=n.__d=void 0,null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){e.__e(n,t)}o.base=o.__P=null}if(o=n.__k)for(u=0;u<o.length;u++)o[u]&&F(o[u],t,_);null!=r&&a(r)}function T(e,n,t){return this.constructor(e,t)}function M(n,t,_){var o,u,c;e.__&&e.__(n,t),u=(o=_===r)?null:_&&_.__k||t.__k,n=f(d,null,[n]),c=[],A(t,(o?t:_||t).__k=n,u||l,l,void 0!==t.ownerSVGElement,_&&!o?[_]:u?null:t.childNodes.length?i.slice.call(t.childNodes):null,c,_||l,o),D(c,n)}function L(e,n){M(e,n,r)}function W(e,n,t){var _,o,r,u=arguments,l=s({},e.props);for(r in n)"key"==r?_=n[r]:"ref"==r?o=n[r]:l[r]=n[r];if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(u[r]);return null!=t&&(l.children=t),p(e.type,l,_||e.key,o||e.ref,null)}function R(e,n){var t={__c:n="__cC"+u++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e,t,_){return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(g)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}e={__e:function(e,n){for(var t,_;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(_=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(_=!0,t.componentDidCatch(e)),_)return g(t.__E=t)}catch(n){e=n}throw e}},n=function(e){return null!=e&&void 0===e.constructor},v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},t),this.props)),e&&s(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=d,t=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,r=l,u=0;var V,q,B,I=0,O=[],$=e.__r,j=e.diffed,z=e.__c,G=e.unmount;function J(n,t){e.__h&&e.__h(q,n,I||t),I=0;var _=q.__H||(q.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function K(e){return I=1,Q(ae,e)}function Q(e,n,t){var _=J(V++,2);return _.t=e,_.__c||(_.__c=q,_.__=[t?t(n):ae(void 0,n),function(e){var n=_.t(_.__[0],e);_.__[0]!==n&&(_.__=[n,_.__[1]],_.__c.setState({}))}]),_.__}function X(n,t){var _=J(V++,3);!e.__s&&se(_.__H,t)&&(_.__=n,_.__H=t,q.__H.__h.push(_))}function Y(n,t){var _=J(V++,4);!e.__s&&se(_.__H,t)&&(_.__=n,_.__H=t,q.__h.push(_))}function Z(e){return I=5,ne((function(){return{current:e}}),[])}function ee(e,n,t){I=6,Y((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))}function ne(e,n){var t=J(V++,7);return se(t.__H,n)?(t.__H=n,t.__h=e,t.__=e()):t.__}function te(e,n){return I=8,ne((function(){return e}),n)}function _e(e){var n=q.context[e.__c],t=J(V++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(q)),n.props.value):e.__}function oe(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)}function re(e){var n=J(V++,10),t=K();return n.__=e,q.componentDidCatch||(q.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}function ue(){O.some((function(n){if(n.__P)try{n.__H.__h.forEach(ie),n.__H.__h.forEach(ce),n.__H.__h=[]}catch(t){return n.__H.__h=[],e.__e(t,n.__v),!0}})),O=[]}e.__r=function(e){$&&$(e),V=0;var n=(q=e.__c).__H;n&&(n.__h.forEach(ie),n.__h.forEach(ce),n.__h=[])},e.diffed=function(n){j&&j(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==O.push(t)&&B===e.requestAnimationFrame||((B=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),le&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);le&&(n=requestAnimationFrame(t))})(ue))},e.__c=function(n,t){t.some((function(n){try{n.__h.forEach(ie),n.__h=n.__h.filter((function(e){return!e.__||ce(e)}))}catch(u){t.some((function(e){e.__h&&(e.__h=[])})),t=[],e.__e(u,n.__v)}})),z&&z(n,t)},e.unmount=function(n){G&&G(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(ie)}catch(n){e.__e(n,t.__v)}};var le="function"==typeof requestAnimationFrame;function ie(e){"function"==typeof e.u&&e.u()}function ce(e){e.u=e.__()}function se(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function ae(e,n){return"function"==typeof n?n(e):n}var fe=function(e,n,t,_){var o;n[0]=0;for(var r=1;r<n.length;r++){var u=n[r++],l=n[r]?(n[0]|=u?1:2,t[n[r++]]):n[++r];3===u?_[0]=l:4===u?_[1]=Object.assign(_[1]||{},l):5===u?(_[1]=_[1]||{})[n[++r]]=l:6===u?_[1][n[++r]]+=l+"":u?(o=e.apply(l,fe(e,l,t,["",null])),_.push(o),l[0]?n[0]|=2:(n[r-2]=0,n[r]=o)):_.push(l)}return _},pe=new Map;function he(e){var n=pe.get(this);return n||(n=new Map,pe.set(this,n)),(n=fe(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,_=1,o="",r="",u=[0],l=function(e){1===_&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===_&&(e||o)?(u.push(3,e,o),_=2):2===_&&"..."===o&&e?u.push(4,e,0):2===_&&o&&!e?u.push(5,0,!0,o):_>=5&&((o||!e&&5===_)&&(u.push(_,0,o,t),_=6),e&&(u.push(_,e,0,t),_=6)),o=""},i=0;i<e.length;i++){i&&(1===_&&l(),l(i));for(var c=0;c<e[i].length;c++)n=e[i][c],1===_?"<"===n?(l(),u=[u],_=3):o+=n:4===_?"--"===o&&">"===n?(_=1,o=""):o=n+o[0]:r?n===r?r="":o+=n:'"'===n||"'"===n?r=n:">"===n?(l(),_=1):_&&("="===n?(_=5,t=o,o=""):"/"===n&&(_<5||">"===e[i][c+1])?(l(),3===_&&(u=u[0]),_=u,(u=u[0]).push(2,0,_),_=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(l(),_=2):o+=n),3===_&&"!--"===o&&(_=4,u=u[0])}return l(),u}(e)),n),arguments,[])).length>1?n:n[0]}export{v as Component,d as Fragment,F as __u,W as cloneElement,R as createContext,f as createElement,h as createRef,f as h,he as htm,L as hydrate,n as isValidElement,e as options,M as render,C as toChildArray,te as useCallback,_e as useContext,oe as useDebugValue,X as useEffect,re as useErrorBoundary,ee as useImperativeHandle,Y as useLayoutEffect,ne as useMemo,Q as useReducer,Z as useRef,K as useState};