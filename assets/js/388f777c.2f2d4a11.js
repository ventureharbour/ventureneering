"use strict";(self.webpackChunkVentureneering=self.webpackChunkVentureneering||[]).push([[746],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,b=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2312:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={authors:"royletron",title:"\ud83e\udddb\u200d\u2642\ufe0f Von Count",description:"Counting lines has never been so easy!",slug:"count-voncount",tags:["libraries","oss"]},c=void 0,l={permalink:"/blog/count-voncount",source:"@site/blog/2022-02-18-count-voncount.mdx",title:"\ud83e\udddb\u200d\u2642\ufe0f Von Count",description:"Counting lines has never been so easy!",date:"2022-02-18T00:00:00.000Z",formattedDate:"February 18, 2022",tags:[{label:"libraries",permalink:"/blog/tags/libraries"},{label:"oss",permalink:"/blog/tags/oss"}],readingTime:1.6,truncated:!0,authors:[{name:"Darren \ud83e\uddd9\u200d\u2642\ufe0f",title:"CTO @ Venture Harbour",url:"https://github.com/royletron",imageURL:"https://github.com/royletron.png",key:"royletron"}],frontMatter:{authors:"royletron",title:"\ud83e\udddb\u200d\u2642\ufe0f Von Count",description:"Counting lines has never been so easy!",slug:"count-voncount",tags:["libraries","oss"]},nextItem:{title:"\ud83d\udc4b Hello World",permalink:"/blog/hello-world"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We recently found need to count lines of our code"),", but with added context that things like ",(0,a.kt)("inlineCode",{parentName:"p"},"cloc")," can't give us. Basically at a glance we wanted to see the use of certain features/components/libraries so that we could phase them out slowly over time and see progress \ud83e\uddee. To that end ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ventureharbour/voncount"},"we produced ",(0,a.kt)("em",{parentName:"a"},"VonCount"))))}m.isMDXComponent=!0}}]);