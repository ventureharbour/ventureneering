(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),r=a.n(n),i=a(155),s=a(154),o=a(173),l=(a(169),a(159)),c=a(157),m=a(170);function u(){var e="showcase-grid";var t=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}([{image:Object(s.a)("img/showcase/leadformly.png"),label:"Leadformly",desc:"LeadForms incorporate 58+ form design best practices, proven to increase usability and completion rates \u2013 from asking questions over multiple steps, to sizing fields to the average adult finger pad size.",link:"https://leadformly.com/"},{image:Object(s.a)("img/showcase/truenorth.png"),label:"TrueNorth",desc:"TrueNorth is the Growth Marketing Platform to focus, align, and track marketing in one place, with everything and everyone working towards your goal.",link:"https://truenorth.io/"},{image:Object(s.a)("img/showcase/serene.png"),label:"Serene",desc:"Serene is a macOS app that gives you productivity superpowers by layering three proven techniques to boost focus.",link:"https://sereneapp.com/"}]).map((function(t,a){var n=t.image,i=t.label,s=t.link,o=t.desc,l=["yellow","blue","green","red","purple"],c=Math.floor(Math.random()*l.length);return r.a.createElement("div",{className:e+"__item",key:a},r.a.createElement("a",{className:e+"__link",href:s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:e+"__icon"},r.a.createElement("img",{className:e+"__img",src:n,alt:i,title:i})),r.a.createElement("div",{className:e+"__label "+e+"__label--"+l[c]},i),r.a.createElement("div",{className:e+"__desc"},o),r.a.createElement(m.a,{componentClass:e})))}));return r.a.createElement("div",{className:e},r.a.createElement(c.a,{componentClass:e},r.a.createElement(l.a,{componentClass:e,title:"Showcase",subtitle:"See some of the awesome projects our engineers have built."}),r.a.createElement("div",{className:e+"__content"},t)))}function d(){var e=Object(i.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(o.a,{title:"Showcase",description:t.tagline,keywords:t.customFields.keywords,metaImage:Object(s.a)("img/"+t.customFields.image)},r.a.createElement(u,null))}},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);function i(e){var t=e.componentClass,a=e.size,i=void 0===a?"default":a,s=e.children;return r.a.createElement(n.Fragment,null,s&&r.a.createElement("div",{className:"\n          shift-container\n          shift-container__size--"+i+"\n          "+t+"__shift-container\n        "},s))}},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);function i(e){var t="shift-heading",a=e.componentClass,i=e.title,s=e.subtitle,o=e.align,l=void 0===o?"center":o,c=e.titleSize,m=void 0===c?"default":c;return r.a.createElement(n.Fragment,null,i&&r.a.createElement("div",{className:"\n          "+t+"\n          "+a+"__"+t+"\n          "+t+"__align--"+l+"\n        "},i&&r.a.createElement("div",{className:t+"__title "+t+"__title-size--"+m},i),s&&r.a.createElement("div",{className:t+"__subtitle",dangerouslySetInnerHTML:{__html:s}})))}},169:function(e,t,a){"use strict";a(178)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),i=a(154);function s(e){var t=e.componentClass;return r.a.createElement("img",{className:" shift-arrow "+t+"__shift-arrow",src:Object(i.a)("img/ic-arrow.svg")})}},178:function(e,t,a){var n=a(13),r=a(12),i=a(28),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);