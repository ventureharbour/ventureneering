"use strict";(self.webpackChunkVentureneering=self.webpackChunkVentureneering||[]).push([[576],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3816:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},s=void 0,c={permalink:"/blog/2022/03/28/top-5-social-media-regex-for-web-developers-2022",source:"@site/blog/2022-03-28-top-5-social-media-regex-for-web-developers-2022.mdx",title:"top-5-social-media-regex-for-web-developers-2022",description:"---",date:"2022-03-28T00:00:00.000Z",formattedDate:"March 28, 2022",tags:[],readingTime:1.515,truncated:!0,authors:[],frontMatter:{},prevItem:{title:"\ud83d\udc1b GraphQL Object Caching Bug",permalink:"/blog/caching-bug"},nextItem:{title:"\ud83c\udf9b Static Exhaustive Switches in Typescript",permalink:"/blog/exhaustive-switch"}},u={authorsImageUrls:[]},p=[{value:"tags: regex",id:"tags-regex",children:[],level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"authors: dr-farr\ntitle: \ud83d\udd78 Top 5 social media regex for web developers 2022\ndescription:\nslug: top-5-social-media-regex-for-web-developers-2022"),(0,a.kt)("h2",{id:"tags-regex"},"tags: ","[regex]"),(0,a.kt)("p",null,"The year is 2022, you sit perched at your desk, your central nervous system is a delicate balance of coffee, vegan tortilla chips and whatever your local mini market promotes as 'pastries'."),(0,a.kt)("p",null,'The year is 2022, you sit perched at your desk, your central nervous system is a delicate balance of coffee, vegan tortilla chips and whatever your local mini market promotes as \'pastries\'.\nYou stare blankly at your monitor recovering from the latest adrenaline dump after bringing down production with your last commit, saliva goes un-noticed as is trickles from the corner of your mouth and down your slacked jaw.\n"Regex... how how hard can it it be?" You ask yourself. Your fingers begin to bash upon your keyboard in the a-rhythmic way you\'ve become accustomed to. You try to regain control of your thoughts from the dark cloud of self doubt, imposter syndrome and whether that last pastry was actually gluten free.\nLanguished you trawl the web in search of your liberator. "This is it..." you announce, "this is it...." as you click a link to an perlmonks.com forum post from 2004. Feverishly you scroll up and down the page copying and pasting into your IDE almost at random.\n"DAMN IT!" you scream as your hammer the table with a clenched fist, sending the 3 day old tower of unwashed coffee cups crashing to the floor, another dead end.\n"If only someone could write a blog post detailing and up-to-date way of obtaining user profiles from social media urls" you plead.... IF ONLY!"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instagram")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(?:https?:)?\\/\\/(?:www\\.)?(?:instagram\\.com|instagr\\.am)\\/(?P<username>[A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\\.(?!\\.))){0,28}(?:[A-Za-z0-9_]))?)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Youtube")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(?:https?:)?\\/\\/(?:[A-z]+\\.)?youtube.com\\/user\\/(?P<username>[A-z0-9]+)\\/?\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Facebook")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(?:https?:)?\\/\\/(?:www\\.)?(?:facebook|fb)\\.com\\/(?P<profile>(?![A-z]+\\.php)(?!marketplace|gaming|watch|me|messages|help|search|groups)[A-z0-9_\\-\\.]+)\\/?\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Twitter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(?:https?:)?\\/\\/(?:www\\.)?(?:facebook|fb)\\.com\\/(?P<profile>(?![A-z]+\\.php)(?!marketplace|gaming|watch|me|messages|help|search|groups)[A-z0-9_\\-\\.]+)\\/?\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(?:https?:)?\\/\\/(?:www\\.)?github\\.com\\/(?P<login>[A-z0-9_-]+)\\/?\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"small print: these may or not work")))}f.isMDXComponent=!0}}]);