(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(0),i=n.n(a),s=n(154),r=n(153),c=n(160),l=n(188);function o(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return i.a.createElement(c.a,{title:"About",description:t.tagline,keywords:t.customFields.keywords,metaImage:Object(r.a)("img/"+t.customFields.image)},i.a.createElement(l.a,null))}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),i=n.n(a);function s(e){var t=e.componentClass,n=e.size,s=void 0===n?"default":n,r=e.children;return i.a.createElement(a.Fragment,null,r&&i.a.createElement("div",{className:"\n          shift-container\n          shift-container__size--"+s+"\n          "+t+"__shift-container\n        "},r))}},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),i=n.n(a);function s(e){var t="shift-heading",n=e.componentClass,s=e.title,r=e.subtitle,c=e.align,l=void 0===c?"center":c,o=e.titleSize,u=void 0===o?"default":o;return i.a.createElement(a.Fragment,null,s&&i.a.createElement("div",{className:"\n          "+t+"\n          "+n+"__"+t+"\n          "+t+"__align--"+l+"\n        "},s&&i.a.createElement("div",{className:t+"__title "+t+"__title-size--"+u},s),r&&i.a.createElement("div",{className:t+"__subtitle",dangerouslySetInnerHTML:{__html:r}})))}},161:function(e,t,n){"use strict";n(171)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a),s=n(153);function r(e){var t=e.componentClass;return i.a.createElement("img",{className:" shift-arrow "+t+"__shift-arrow",src:Object(s.a)("img/ic-arrow.svg")})}},171:function(e,t,n){var a=n(12),i=n(13),s=n(26),r=/"/g,c=function(e,t,n,a){var i=String(s(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(161);var a=n(0),i=n.n(a),s=n(153),r=n(157),c=n(155),l=n(162);function o(){var e="shift-get-started",t=[{bg:Object(s.a)("img/ic-theme-bg.svg"),icon:Object(s.a)("img/ic-theme.svg"),type:"theme",label:'I want a new WordPress <span class="'+e+'__label-highlight">theme</span>',link:Object(s.a)("/docs/theme")},{bg:Object(s.a)("img/ic-plugin-bg.svg"),icon:Object(s.a)("img/ic-plugin.svg"),type:"plugin",label:'I want a new WordPress <span class="'+e+'__label-highlight">plugin</span>',link:Object(s.a)("/docs/plugin")}].map((function(t,n){var a=t.bg,s=t.icon,r=t.type,c=t.label,o=t.link;return i.a.createElement("div",{className:e+"__item "+e+"__item--"+r,key:n},i.a.createElement("a",{className:e+"__link",href:o},i.a.createElement("div",{className:e+"__icon"},i.a.createElement("img",{className:e+"__icon-bg",src:a}),i.a.createElement("img",{className:e+"__icon-img",src:s})),i.a.createElement("div",{className:e+"__label",dangerouslySetInnerHTML:{__html:c}}),i.a.createElement(l.a,{componentClass:e})))}));return i.a.createElement("div",{className:e},i.a.createElement(c.a,{componentClass:e,size:"small"},i.a.createElement(r.a,{componentClass:e,title:"Choose one of the options to get started",subtitle:"We've built a bot to automate the tedious process of setting up a new project, so you can focus on your code. Just choose where you want to start."}),i.a.createElement("div",{className:e+"__content"},t)))}}}]);