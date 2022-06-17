"use strict";(self.webpackChunkVentureneering=self.webpackChunkVentureneering||[]).push([[4355],{2271:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(7294);function r(e){var t=e.id,n=e.width,r=void 0===n?"100%":n,a=e.height,s=void 0===a?"500px":a;return i.createElement("iframe",{src:"https://codesandbox.io/embed/"+t+"?codemirror=1",style:{width:r,height:s,border:0,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},5076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),s=n(2271),o=["components"],l={authors:"bigandy",title:"New pseudo selectors for CSS in 2022",description:"CSS is getting more powerful in 2022",slug:"is-where-has-css",date:new Date("2022-06-17T00:00:00.000Z"),tags:["css","css-new-2022"]},p=void 0,c={permalink:"/blog/is-where-has-css",source:"@site/blog/2022-06-17-is-where-has-css/index.mdx",title:"New pseudo selectors for CSS in 2022",description:"CSS is getting more powerful in 2022",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"css-new-2022",permalink:"/blog/tags/css-new-2022"}],readingTime:4.425,truncated:!0,authors:[{name:"Andrew Hudson",title:"Engineer @ Venture Harbour",url:"https://github.com/bigandy",imageURL:"https://github.com/bigandy.png",key:"bigandy"}],frontMatter:{authors:"bigandy",title:"New pseudo selectors for CSS in 2022",description:"CSS is getting more powerful in 2022",slug:"is-where-has-css",date:"2022-06-17T00:00:00.000Z",tags:["css","css-new-2022"]},nextItem:{title:"\ud83e\uddb9\u200d\u2640\ufe0f How to hire better engineers",permalink:"/blog/hiring-better"}},u={authorsImageUrls:[void 0]},d=[{value:":has() pseudo selector",id:"has-pseudo-selector",level:2},{value:"What is it?",id:"what-is-it",level:3},{value:"How can you use it?",id:"how-can-you-use-it",level:3},{value:"Simple",id:"simple",level:4},{value:"Complex",id:"complex",level:4},{value:"Demos",id:"demos",level:3},{value:"Test for support",id:"test-for-support",level:3},{value:"Further information",id:"further-information",level:3},{value:":is() pseudo selector",id:"is-pseudo-selector",level:2},{value:"What is it?",id:"what-is-it-1",level:3},{value:"Further information",id:"further-information-1",level:3},{value:":where() pseudo selector",id:"where-pseudo-selector",level:2},{value:"Links",id:"links",level:3},{value:"The difference between :is() and :where()",id:"the-difference-between-is-and-where",level:3}],h={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CSS is getting even more powerful in 2022. Here are three new pseudo selectors that'll help you. :is(), :where(), and :has(). Without further ado, I'll explain what they are and how you can use them."),(0,a.kt)("h2",{id:"has-pseudo-selector"},":has() pseudo selector"),(0,a.kt)("h3",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"Have you ever wanted to style a parent element based on its content? Previously the only way to style a parent dependent on its children would be to use JavaScript. Now with the :has() pseudo selector you can style a parent based its children."),(0,a.kt)("h3",{id:"how-can-you-use-it"},"How can you use it?"),(0,a.kt)("h4",{id:"simple"},"Simple"),(0,a.kt)("div",{class:"grid grid--half"},(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",null,"HTML")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--this div will be styled--\x3e\n<div class="parent">\n  <img\n    src="https://www.placecage.com/c/460/300"\n    alt="nick cage"\n  />\n\n  <p>paragraph content</p>\n</div>\n\n\x3c!--this div won\'t be styled--\x3e\n<div class="parent">\n  <p>paragraph content</p>\n</div>\n'))),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",null,"CSS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".parent {\n    border: 1em solid black;\n    padding: 1em;\n    margin-bottom: 1em;\n}\n\n.parent:has(img) {\n    border-color: orange;\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codepen.io/bigandy/pen/MWrvjQZ"},"Result (in a Browser that supports it)"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6001).Z,width:"768",height:"550"})),(0,a.kt)("h4",{id:"complex"},"Complex"),(0,a.kt)("p",null,"We can get even more complex. You can style the parent based on the number of list items a list has:"),(0,a.kt)("div",{class:"grid grid--half"},(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",null,"HTML")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="block">\n  <h2>List with 1 item</h2>\n\n  <ol>\n    <li>item 1</li>\n  </ol>\n</div>\n\n<div class="block">\n  <h2>List with 3 items</h2>\n\n  <ol>\n    <li>item 1</li>\n    <li>item 2</li>\n    <li>item 3</li>\n  </ol>\n</div>\n\n<div class="block">\n  <h2>List with 5 items</h2>\n\n  <ol>\n    <li>item 1</li>\n    <li>item 2</li>\n    <li>item 3</li>\n    <li>item 4</li>\n    <li>item 5</li>\n  </ol>\n</div>\n\n<div class="block">\n  <h2>No List</h2>\n</div>\n'))),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",null,"HTML")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".block {\n  border: 1em solid var(--border-color, black);\n  margin-bottom: 1em;\n  padding: 1em;\n}\n.block:has(li) {\n  --border-color: red;\n}\n.block:has(li:nth-child(2)) {\n  --border-color: orange;\n}\n.block:has(li:nth-child(3)) {\n  --border-color: yellow;\n}\n.block:has(li:nth-child(5)) {\n  --border-color: green;\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codepen.io/bigandy/pen/VwyzaXQ?editors=0100"},"Result (in a Browser that supports it)"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4823).Z,width:"412",height:"790"})),(0,a.kt)(s.Z,{id:"css-has-70i051",height:"400px",mdxType:"CodesandboxEmbed"}),(0,a.kt)("h3",{id:"demos"},"Demos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/crazy-pike-70i051?file=/src/styles.scss"},"https://codesandbox.io/s/crazy-pike-70i051?file=/src/styles.scss")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codepen.io/bigandy/pen/VwyzaXQ?editors=0100"},"https://codepen.io/bigandy/pen/VwyzaXQ?editors=0100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codepen.io/bigandy/pen/MWrvjQZ"},"https://codepen.io/bigandy/pen/MWrvjQZ"))),(0,a.kt)("h3",{id:"test-for-support"},"Test for support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to test for :has() support in CSS you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"@supports(selector(:has(p))) { /* Supported! */ }")),(0,a.kt)("li",{parentName:"ul"},"to test for :has support in JS you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"if (CSS.supports(\"selector(:has(p))\")) { console.log('css :has() is supported'); }"))),(0,a.kt)("h3",{id:"further-information"},"Further information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"specificity is the same as for :is() where the most speficic argument within the the :has() group is taken. For example .block :has(p, #nav, .inline-list) the specificity would be calulated as being the same as .block #nav for all of the matching items in the :has() selector."),(0,a.kt)("li",{parentName:"ul"},"Browser support: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/safari-release-notes/safari-15_4-release-notes"},"Safari 15.4+"),", Chrome 101+ with the Experimental Web Platform features flag enabled (type chrome://flags/#enable-container-queries into the url bar in Chrome 101+ and enable it if is not already enabled)"),(0,a.kt)("li",{parentName:"ul"},"Support Link: ",(0,a.kt)("a",{parentName:"li",href:"https://caniuse.com/css-has"},"https://caniuse.com/css-has")),(0,a.kt)("li",{parentName:"ul"},"Spec Link: ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/selectors-4/#relational"},"https://www.w3.org/TR/selectors-4/#relational"))),(0,a.kt)("h2",{id:"is-pseudo-selector"},":is() pseudo selector"),(0,a.kt)("h3",{id:"what-is-it-1"},"What is it?"),(0,a.kt)("p",null,"Both :is() and :where() allow you to group selectors."),(0,a.kt)("div",{class:"grid grid--half"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Previously if you wanted to select every heading element you would have to write"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"previously")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: serif;\n}\n"))),(0,a.kt)("div",null,(0,a.kt)("p",null,"but now you can use the :is() pseudo selector to write in much less lines of code:"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"now")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},":is(h1, h2, h3, h4, h5, h6) {\n  font-family: serif;\n}\n\n")))),(0,a.kt)("h3",{id:"further-information-1"},"Further information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser Support: Edge, Chrome, Safari, Firefox. All the good ones!"),(0,a.kt)("li",{parentName:"ul"},"Support Links: ",(0,a.kt)("a",{parentName:"li",href:"https://caniuse.com/css-matches-pseudo"},"https://caniuse.com/css-matches-pseudo")),(0,a.kt)("li",{parentName:"ul"},"Spec Link: ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/selectors-4/#matches"},"https://www.w3.org/TR/selectors-4/#matches"))),(0,a.kt)("h2",{id:"where-pseudo-selector"},":where() pseudo selector"),(0,a.kt)("p",null,"The :where() pseudo selector allows you to select a number of different elements, but it (the :where()) has no extra specificity."),(0,a.kt)("div",{class:"grid grid--half"},(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",null,"HTML")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="block">\n\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus voluptatem nihil dolorum maxime, perferendis animi minus nisi hic assumenda fugiat fuga corporis eaque sint mollitia impedit, corrupti ea! Voluptatum.</p>\n\n    <p class="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto perspiciatis dignissimos saepe iure libero tempora molestias eum ut magni maxime, sapiente delectus consequuntur labore nulla exercitationem tenetur reprehenderit alias quo?</p>\n\n    <p id="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus quae impedit nemo corporis optio sequi. Expedita nisi cupiditate totam beatae soluta, repudiandae nulla amet doloremque sed optio voluptatibus odio.</p>\n</div>\n\n'))),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",null,"CSS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* specificity of (1,0,0) */\n#lead {\n    color: red;\n}\n\n/* specificity of (0,1,0) */\n.intro {\n    color: orange;\n}\n\n/* specificity of (0,0,1) */\np {\n    color: black;\n}\n\n/* The :where() has a specificity reset for the elements inside so only the specificty of `body` is taken into consideration\n  as this rule is after the rule for the `p` it overrules due to location rather than specificity. */\n  /* this gives a specicity of (0,0,1) */\nbody :where(#lead, .intro, p) {\n    color: green;\n}\n\n\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codepen.io/bigandy/pen/jOYLVPd"},"Result (in a Browser that supports it)"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3726).Z,width:"1232",height:"486"})),(0,a.kt)("h3",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://web.dev/css-is-and-where/"},"https://web.dev/css-is-and-where/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stuffandnonsense.co.uk/archives/css_specificity_wars.html"},"https://stuffandnonsense.co.uk/archives/css_specificity_wars.html")),(0,a.kt)("li",{parentName:"ul"},"Browser Support: Edge, Chrome, Safari, Firefox. All the good ones!"),(0,a.kt)("li",{parentName:"ul"},"Support Links: ",(0,a.kt)("a",{parentName:"li",href:"https://caniuse.com/mdn-css_selectors_where"},"https://caniuse.com/mdn-css_selectors_where")),(0,a.kt)("li",{parentName:"ul"},"Spec Link: ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/selectors-4/#zero-matches"},"https://www.w3.org/TR/selectors-4/#zero-matches"))),(0,a.kt)("h3",{id:"the-difference-between-is-and-where"},"The difference between :is() and :where()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},":where() has no specificity so that the specificity of ",(0,a.kt)("inlineCode",{parentName:"li"},"body :where(p) {} ")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"body {}")," are the same."),(0,a.kt)("li",{parentName:"ul"},":where() squashes specificity to no specificity for the list passed to where. For example ",(0,a.kt)("inlineCode",{parentName:"li"},"body :where(p, .lead, #introText) {}")," would all have the same specicity and be the same as ",(0,a.kt)("inlineCode",{parentName:"li"},"body {}")),(0,a.kt)("li",{parentName:"ul"},":is() takes the specificity of its most specific selector so that if ",(0,a.kt)("inlineCode",{parentName:"li"},"body nav:is(.top-nav, #topNav) {}")," the rule would have the equivalent specificity of ",(0,a.kt)("inlineCode",{parentName:"li"},"body nav#topNav")," (not body nav.top-nav as you might normally expect)")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4823:function(e,t,n){t.Z=n.p+"assets/images/has-complex-8d2464e63beb31a496307822342a99fe.png"},6001:function(e,t,n){t.Z=n.p+"assets/images/has-simple-36814841ecf701e56c1af50e0e995815.png"},3726:function(e,t,n){t.Z=n.p+"assets/images/where-7431de365cfa987a4348309a21865661.png"}}]);