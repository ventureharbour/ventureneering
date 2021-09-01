"use strict";(self.webpackChunkventureneering=self.webpackChunkventureneering||[]).push([[913],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},404:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return b},metadata:function(){return w},toc:function(){return k}});var r=n(7462),a=n(3366),o=n(7294),i=n(3905);var l=function(e){var t,n=e.text;return o.createElement("span",{dangerouslySetInnerHTML:(t=n,{__html:t.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/^\> (.*$)/gim,"<blockquote>$1</blockquote>").replace(/\*\*(.*)\*\*/gim,"<b>$1</b>").replace(/\*(.*)\*/gim,"<i>$1</i>").replace(/!\[(.*?)\]\((.*?)\)/gim,"<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/gim,"<a href='$2'>$1</a>").replace(/\n$/gim,"<br />").trim()})})};function s(e){var t=e.ownership,n=e.reach,r=e.levers;return o.createElement("table",{style:{width:"100%"}},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{style:{textAlign:"left",width:"33%"}},o.createElement("b",null,"Scope"),o.createElement("br",null),o.createElement("em",null,"Area of ownership and level of autonomy / ambiguity")),o.createElement("th",{style:{textAlign:"left",width:"33%"}},o.createElement("b",null,"Collaborative Reach"),o.createElement("br",null),o.createElement("em",null,"Organizational reach and extent of influence")),o.createElement("th",{style:{textAlign:"left",width:"33%"}},o.createElement("b",null,"Impact Levers"),o.createElement("br",null),o.createElement("em",null,"Technical levers typically exercised to achieve business impact")))),o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,o.createElement("ul",null,t.map((function(e,t){return o.createElement("li",{key:"ownership_"+t},o.createElement(l,{text:e}))})))),o.createElement("td",null,o.createElement("ul",null,n.map((function(e,t){return o.createElement("li",{key:"ownership_"+t},o.createElement(l,{text:e}))})))),o.createElement("td",null,o.createElement("ul",null,r.map((function(e,t){return o.createElement("li",{key:"ownership_"+t},o.createElement(l,{text:e}))})))))))}function c(e){var t=e.content;return o.createElement("table",{style:{width:"100%"}},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{style:{textAlign:"left"}},"Responsibility"),o.createElement("th",{style:{textAlign:"left",width:"100%"}},"Behaviours"))),o.createElement("tbody",null,Object.keys(t).map((function(e,n){return o.createElement("tr",{key:"row_"+n},o.createElement("td",null,e),o.createElement("td",null,o.createElement("ul",null,t[e].map((function(e,t){return o.createElement("li",{key:"li_"+n+"_"+t},o.createElement(l,{text:e}))})))))}))))}var u={modal:"modal_27vb",content:"content_3S0i",header:"header_woVM",footer:"footer_3f7L",middle:"middle_1J0o",leftButton:"leftButton_39py",open:"open_2627",option:"option_Ojcq",selected:"selected_Twdv",poor:"poor_1Hsq",issues:"issues_3X-N",fine:"fine_I8I4",great:"great_3_n1",levelUp:"levelUp_dOUC"},d=n(6010),m={Results:"\ud83c\udfc6 Results",Direction:"\u2b50 Direction",Talent:"\ud83c\udf32 Talent",Culture:"\ud83c\udf08 Culture",Craft:"\ud83e\udd89 Craft"},p={"\ud83d\udc4e":"-2","\u270b":"-1","\ud83d\udc4d":"0","\ud83d\udcaa":"1","\ud83d\ude4c":"2"},h=function(e){var t=e.options,n=e.setOption,r=e.selectedOption;return o.createElement("div",{className:u.selector},t.map((function(e,t){return o.createElement("div",{onClick:function(){return n(e.value)},className:(0,d.Z)(u.option,r===e.value&&u.selected),key:"option_"+t},e.text)})))},f=function(e){var t=e.score,n=e.children,r=(0,o.useMemo)((function(){switch(parseInt(t)){case-2:return u.poor;case-1:return u.issues;case 1:return u.great;case 2:return u.levelUp;default:return u.fine}}),[t]);return o.createElement("span",{className:r},n)};function g(e){var t=e.content,n=(0,o.useState)(!1),r=n[0],a=n[1],i=(0,o.useState)(void 0),l=i[0],s=i[1],c=(0,o.useState)(void 0),g=c[0],y=c[1],b=(0,o.useState)(!1),v=b[0],w=b[1],k=(0,o.useMemo)((function(){if(g)return Object.keys(m).map((function(e){return{name:e,scores:Object.keys(g).filter((function(t){return t.includes(e+"/")})).map((function(e){return{value:parseInt(g[e]),key:e}}))}}))}),[g]),E=(0,o.useMemo)((function(){if(k){var e,t=k.map((function(e){return Math.floor(e.scores.reduce((function(e,t){return e+t.value}),0)/e.scores.length)})),n=Math.floor(t.reduce((function(e,t){return e+t}),0));switch(Math.floor(n/t.length)){case-2:return"There is a considerable amount of work to do to get up to standard";case-1:return n<-3?"There is a lot to improve on to get up to par. Make sure you set some plans for easy wins":"You're really close to being where we need you, check above for the areas you should look to improve";case 0:return e="If you did want to level up consider making some of the above scores blue",n>1&&(e="Continue to make progress on the blue areas, or look to pull more into the blue!"),"You are bang on par for your job - this is great. "+e;case 1:return"You're showing a lot more than your role is responsible for, continue to progress your blue areas and we should look at a more appropriate role!";case 2:return"Book in a chat with your manager, it's time to look at roles that match the impact and resposibility you are driving to the company"}}}),[k]);return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,d.Z)(u.modal,r&&u.open)},o.createElement("div",{className:u.content},o.createElement("div",{className:u.header},o.createElement("h2",null,"Scorecard",o.createElement("br",null),o.createElement("h4",null,null==l?void 0:l.top," > ",null==l?void 0:l.bottom)),o.createElement("div",{className:u.leftButton},o.createElement("div",{onClick:function(){a(!1)},className:"button button--secondary"},"Close"))),v?o.createElement("div",{className:u.middle},o.createElement("h4",null,"Your Scores"),o.createElement("table",{style:{width:"100%"}},o.createElement("thead",null,o.createElement("th",null,"Responsibility"),o.createElement("th",{style:{width:"100%"}},"Score")),o.createElement("tbody",null,k.map((function(e){var t=Math.floor(e.scores.reduce((function(e,t){return e+t.value}),0)/e.scores.length);return o.createElement("tr",{key:"score_"+e.name},o.createElement("td",null,m[e.name]),o.createElement("td",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"-1px 0 -1px -1px"}},o.createElement("div",{style:{padding:"10px 0",textAlign:"center"}},o.createElement("h3",{style:{margin:0}},o.createElement(f,{score:t},t))),o.createElement("div",{style:{display:"flex"}},e.scores.map((function(e){return o.createElement("div",{style:{margin:"0 5px"},key:"value_"+e.key},o.createElement(f,{score:e.value},e.key.split("/")[1],": ",e.value))})))))}))),o.createElement("tfoot",null,o.createElement("tr",null,o.createElement("td",{colSpan:2,style:{textAlign:"center"}},o.createElement("b",null,E))),o.createElement("tr",null,o.createElement("td",{colSpan:2,style:{padding:0,width:"100%"}},o.createElement("table",{style:{padding:0,margin:"-1px",width:"calc(100% + 2px)"}},o.createElement("thead",{style:{width:"100%"}},o.createElement("tr",{style:{width:"100%"}},o.createElement("th",{colSpan:5,style:{width:"100%"}},"Copy the scores below to your own record!"))),o.createElement("tbody",{style:{width:"100%"}},o.createElement("tr",{style:{width:"100%"}},k.map((function(e){return o.createElement("td",{style:{width:"20%"}},Math.floor(e.scores.reduce((function(e,t){return e+t.value}),0)/e.scores.length))})))))))))):o.createElement("div",{className:u.middle},o.createElement("h4",null,"Which of the following best describes you:"),(null==l?void 0:l.top)&&(null==l?void 0:l.bottom)&&o.createElement(h,{setOption:function(e){y((function(t){var n;return Object.assign({},t,((n={})[l.top+"/"+l.bottom]=e,n))}))},selectedOption:g[l.top+"/"+l.bottom],options:Object.keys(t[l.top][l.bottom]).map((function(e){return{text:t[l.top][l.bottom][e],value:e}})).sort((function(e,t){return parseInt(e.value)-parseInt(t.value)}))})),o.createElement("div",{className:u.footer},o.createElement("div",null),o.createElement("div",{className:u.leftButton},o.createElement("div",{onClick:function(){var e=l.top,n=Object.keys(t[e]),r=n.indexOf(l.bottom);if(r+1>n.length-1){var a=Object.keys(t).indexOf(e),o=Object.keys(t)[a+1];void 0===o?w(!0):s({top:o,bottom:Object.keys(t[o])[0]})}else s({top:e,bottom:n[r+1]})},className:(0,d.Z)("button button--primary",g&&void 0===g[(null==l?void 0:l.top)+"/"+(null==l?void 0:l.bottom)]&&"disabled")},"Next"))))),o.createElement("table",{style:{width:"100%"}},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{style:{textAlign:"left"}},"Responsibility"),o.createElement("th",{style:{textAlign:"left",width:"100%",position:"relative"}},"Behaviours",o.createElement("div",{style:{right:"10px",top:"0px",bottom:"0px",position:"absolute",display:"flex",alignItems:"center"}},o.createElement("div",{onClick:function(){a(!0),w(!1),s({top:"Results",bottom:Object.keys(t.Results)[0]}),y({})},className:"button button--primary"},"Check"))))),o.createElement("tbody",null,Object.keys(m).map((function(e){return o.createElement("tr",{key:"row_"+e},o.createElement("td",null,m[e]),o.createElement("td",{style:{padding:0}},o.createElement("table",{style:{padding:0,margin:"-1px",width:"calc(100% + 2px)"}},o.createElement("tbody",null,Object.keys(p).map((function(n,r){return o.createElement("tr",{key:"rating_"+e+"_"+r},o.createElement("td",null,n),o.createElement("td",{style:{width:"100%"}},o.createElement("ul",null,Object.keys(t[e]).filter((function(r){return void 0!==t[e][r][p[n]]})).map((function(a,i){return o.createElement("li",{key:"rating_"+e+"_"+r+"_"+i},t[e][a][p[n]])})))))}))))))})))))}var y=["components"],b={sidebar_position:1},v="ENG1 Engineer",w={unversionedId:"eng/eng1",id:"eng/eng1",isDocsHomePage:!1,title:"ENG1 Engineer",description:"I deliver lots of high quality production-ready code with direction from the team.",source:"@site/careers/eng/eng1.mdx",sourceDirName:"eng",slug:"/eng/eng1",permalink:"/careers/eng/eng1",version:"current",lastUpdatedBy:"Darren Royle",lastUpdatedAt:1630515339,formattedLastUpdatedAt:"9/1/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"careers",previous:{title:"Scoring",permalink:"/careers/scoring"},next:{title:"ENG2 Engineer",permalink:"/careers/eng/eng2"}},k=[{value:"\ud83c\udf14  Anti-Patterns",id:"--anti-patterns",children:[]},{value:"\ud83c\udfc6  Results",id:"--results",children:[]},{value:"\u2b50 Direction",id:"-direction",children:[]},{value:"\ud83c\udf32 Talent",id:"-talent",children:[]},{value:"\ud83c\udf08 Culture",id:"-culture",children:[]},{value:"\ud83e\udd89 Craft",id:"\ud83e\udd89-craft",children:[]},{value:"\ud83c\udfc1 Scoring",id:"-scoring",children:[]}],E={toc:k};function x(e){var t=e.components,n=(0,a.Z)(e,y);return(0,i.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eng1-engineer"},"ENG1 Engineer"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I deliver lots of high quality production-ready code with direction from the team.")),(0,i.kt)(s,{ownership:["I execute on defined tasks and contribute to solving problems with defined solutions."],reach:["I work within the scope of my team with specific guidance from my manager/senior engineers"],levers:["**Craft** - I primarily focus on improviding my craft as an engineer"],mdxType:"Reach"}),(0,i.kt)("h2",{id:"--anti-patterns"},"\ud83c\udf14  Anti-Patterns"),(0,i.kt)("p",null,"Poor code quality. No clear improvement in craft/ability. Not self-motivated; needs someone to constantly prod, won't active seek work. Constantly veers into the weeds. More inclined to blame-complain than roll up sleeves. General helplessness. Disregards team process."),(0,i.kt)("h2",{id:"--results"},"\ud83c\udfc6  Results"),(0,i.kt)(c,{content:{Impact:["I work with the team to prioritize tasks that add the most value and deliver high-quality results for our customers.","I understand and effective participate in the core processes of my team (planning, bug triage, review etc.)"],Ownership:["I follow through on my commitments, take responsibility for my work, and deliver my work on times","I ask questions to clarify expectations","I own my failures and learn from them","I speak up when under-utilised"],"Decision Making":["I escalate to my manager when I get stuck, and reflect on ways that I can improve from my mistakes","I raise questions when specifications are vague","I act pragmatically in review, to ensure that maximum impact/code excellence is maintained"]},mdxType:"Responsibilities"}),(0,i.kt)("h2",{id:"-direction"},"\u2b50 Direction"),(0,i.kt)(c,{content:{Agility:["I'm open to change and enthusiastic about new initiatives","I work with my manager/team to navigate complex and ambiguous situations"],Innovation:["I ask questions and contribute to new ideas/approaches","I experiment with new approaches and share what I learn"]},mdxType:"Responsibilities"}),(0,i.kt)("h2",{id:"-talent"},"\ud83c\udf32 Talent"),(0,i.kt)(c,{content:{"Personal Growth":["I'm open to and act upon feedback from my manager and peers","I'm gaining self-awareness about my strengths and areas for development","I have a high standard of excellence for my work"],Hiring:["I am learning to interview and assess candidates to help us build a diverse and talented team. I provide timely, detailed, and evidence-based interview feedback."]},mdxType:"Responsibilities"}),(0,i.kt)("h2",{id:"-culture"},"\ud83c\udf08 Culture"),(0,i.kt)(c,{content:{Collaboration:["I can effectively collaborate to get work done","I work with my manager/team to manage conflict with empathy and cooperation in mind"],"Organizational Health":["I listen to different perspectives and I cut biases from my words and actions","I practise the Venture Harbour values on a regular basis"]},mdxType:"Responsibilities"}),(0,i.kt)("h2",{id:"\ud83e\udd89-craft"},"\ud83e\udd89 Craft"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"My primary craft focus is consistently and reliably delivering high quality code that matches specification, gaining familiarity with the technologies in my area of work, and learning to work against plans and schedules.")),(0,i.kt)(c,{content:{"Code Fluency":["I translate ideas into clear code, written to be read as well as executed","My code is free of glaring errors - bugs are in edge cases or design, not mainline paths","I'm capable of reading and navigating functions and classes/modules that I didn't write","I follow the engineering guidelines for code hygene, review etiquette and testing","I am learning to tackle coding tasks with high throughput while maintaining appropriatly high quality; I optimize for either speed or quality, depending on the explicitly stated needs of my team"],"Software Design":["Code modules I write exhibit good separation of concerns","I can identify potential technical debt ahead of time"]},mdxType:"Responsibilities"}),(0,i.kt)("h2",{id:"-scoring"},"\ud83c\udfc1 Scoring"),(0,i.kt)("p",null,"Scoring is done across the five core areas"),(0,i.kt)(g,{content:{Results:{Delivery:{"-2":"Regularly missed deliveries","-1":"Missed some deliveries",0:"Delivers on target regularly",1:"Always delivers on target/adds some value to spec",2:"Always delivers ahead of target/adds consistent value to spec"},Reviews:{"-2":"Lengthy/misled reviews","-1":"Reviews slow/not useful, non-existent",0:"Reviews are consistent and useful",1:"Reviews excel, capturing bugs and tech debt where appropriate",2:"Brings consistent improvement from review process"}},Direction:{Initiatives:{"-2":"Shoots down initiatives or fails to implement them","-1":"Doesn't engage with new initiatives",0:"Takes on change enthusiastically",1:"Always takes on change and actively contributes to success",2:"Champions changes and helps other team members"},Experiments:{"-2":"Never experiments with new approaches, or fails to share","-1":"Rarely experiments or shares findings",0:"Experiments with new approaches and shares findings",1:"Experiments regularly and presents consistently back to the team",2:"Experiments often lead to new ideas on the roadmap"},Feedback:{"-2":"No questions of others suggestions/experiments, or actively discourages",0:"Raises good questions on new ideas, listens and gives constructive feedback",1:"Helps others crystalise ideas, bringing new perspectives out"}},Talent:{Feedback:{"-2":"Refuses to accept or respond to feedback","-1":"Fails to act on feedback regularly",0:"Listens and tries to act on feedback",1:"Takes on feedback and active pushes themself",2:"Has considerable and actionable plan for self improvement based on feedback"},Excellence:{"-2":"Standard of excellence for work is considerably below that of the team","-1":"Work standard is sometimes below that of the team",0:"Average standard of excellence for work",1:"Excellent standard of work",2:"Leads the team in their standard of work"},Hiring:{"-2":"Refuses to engage with hiring peers","-1":"Little interest in hiring better candidates",0:"Provides interview feedback sometimes",1:"Actively contributes to assessing interview candidates",2:"Pushes new methods for rating and assessing interview candidates"}},Culture:{Collaboration:{"-2":"Refuses to collaborate with team","-1":"Does not use collaboration effectively",0:"Collaborates regularly with team",1:"Actively seeks to collaborate with team members",2:"Pushes new methods of collaboration and raises whole team"},Conflict:{"-2":"Creates conflict in team","-1":"Is unable to settle conflict",0:"Works to resolve conflict cooperatively",1:"Proactively cuts out any source of conflict with team members",2:"Constantly shows empathy with team members, looks to help everyone in team"},Values:{"-2":"Opposes the Venture Harbour values","-1":"Doesn't practise values regularly",0:"Embodies the Venture Harbour values",1:"Represents the Venture Harbour values publicly"}},Craft:{Readability:{"-2":"Code is mostly unreadable by other members","-1":"Code is sometimes hard to read",0:"Writes clear readable code mostly",1:"Documents where possible, and ensures code is readable"},Bugs:{"-2":"Regularly introduces bugs","-1":"Some bugs in mainline paths",0:"Bugs are in edge cases not mainline paths",1:"Find edge case bugs and resolves prior to merge"},Debt:{"-2":"Contributes lots of technical debt",1:"Not actively aware of technical debt",0:"Aware of technical debt",2:"Actively contributes to reducing tech debt"},Process:{"-2":"Disregards coding guidelines/CI",0:"Follows coding guidelines",1:"Follows and contributes to coding guidelines"},Knowledge:{"-2":"Will code only on familiar areas",0:"Works on code/modules they didn't write",2:"Just as effective on unknown code as own code"}}},mdxType:"Scoring"}),(0,i.kt)("h4",{id:"good-examples"},"Good Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"A ticket to implement a key feature was delivered on time and spec by the employee"),". ",(0,i.kt)("strong",{parentName:"li"},"Areas: Results")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Employee managed to find a really tricky bug case in a pull request review"),", this was brought up to the author and resolved before hitting staging/production. ",(0,i.kt)("strong",{parentName:"li"},"Areas: Results & Craft")),(0,i.kt)("li",{parentName:"ul"},"*A colleague mentioned that they're sometimes unsure about my meaning in PR comments, so I h")))}x.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);