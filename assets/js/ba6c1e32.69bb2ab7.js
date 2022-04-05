"use strict";(self.webpackChunkVentureneering=self.webpackChunkVentureneering||[]).push([[5108],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,g=h["".concat(u,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={authors:"paulkennethkent",title:"\ud83d\udc1b GraphQL Object Caching Bug",description:"The reason why your apollo graph may be broken",slug:"caching-bug",tags:["graphql","apollo"]},u=void 0,p={permalink:"/blog/caching-bug",source:"@site/blog/2022-03-28-caching-bug.mdx",title:"\ud83d\udc1b GraphQL Object Caching Bug",description:"The reason why your apollo graph may be broken",date:"2022-03-28T00:00:00.000Z",formattedDate:"March 28, 2022",tags:[{label:"graphql",permalink:"/blog/tags/graphql"},{label:"apollo",permalink:"/blog/tags/apollo"}],readingTime:1.29,truncated:!0,authors:[{name:"Paul \ud83d\udc68\u200d\ud83d\ude80",title:"Engineer @ Venture Harbour",url:"https://github.com/paulkennethkent",imageURL:"https://github.com/paulkennethkent.png",key:"paulkennethkent"}],frontMatter:{authors:"paulkennethkent",title:"\ud83d\udc1b GraphQL Object Caching Bug",description:"The reason why your apollo graph may be broken",slug:"caching-bug",tags:["graphql","apollo"]},prevItem:{title:"\ud83d\udd78 Top 5 social media regex for web developers 2022",permalink:"/blog/top-5-social-media-regex-for-web-developers-2022"},nextItem:{title:"\ud83c\udf9b Static Exhaustive Switches in Typescript",permalink:"/blog/exhaustive-switch"}},s={authorsImageUrls:[void 0]},c=[],h={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TLDR - make sure the nested objects in the request have unique ids")),(0,o.kt)("p",null,"I am a huge fan of GraphQL and all of its typed goodness. On our most recent project we have been using Apollo Client to manage the graph layer, which for the most part has been good but one thing that has caused us headaches is the cache."),(0,o.kt)("p",null,"In this simple example to recreate the issue we are requesting all teams and their respective players. Knowing that some teams could have players with the same name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    teams {\n      id\n      name\n      players{\n        id\n        name\n        poistion\n      }\n    }\n\n")),(0,o.kt)("p",null,"Let's say the ids are a simple dot notation of the full team name and the player's full name. I am making a request for all players that match \u201crobinson\u201d."),(0,o.kt)("p",null,"In the grahpql playground I would see the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {\n        "id": "blackburn.rovers",\n        "name": "blackburn.rovers",\n        "players": {\n            "id": "paul.robsinson",\n            "name": "paul.robinson",\n            "position": "goalkeeper"\n        }\n    },\n    {\n        "id": "birmingham",\n        "name": "birmingham",\n        "players": {\n            "id": "paul.robsinson",\n            "name": "paul.robinson",\n            "position": "defender"\n        }\n    }\n]\n\n')),(0,o.kt)("p",null,"Nice! That is exactly what I want. In the browser I would see Paul Robinson the Goalkeeper playing for Birmingham. What! Ludicrous."),(0,o.kt)("p",null,"After banging my head against the wall for an hour it turns out that it was caching the nested player object based on the ID. Here are a few solutions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unique IDs (of course)"),(0,o.kt)("li",{parentName:"ol"},"Ask yourself do you really need that id? Removing the ID from the gql Player object."),(0,o.kt)("li",{parentName:"ol"},"Alias a different field to be the ID.")))}m.isMDXComponent=!0}}]);