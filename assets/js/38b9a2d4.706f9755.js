"use strict";(self.webpackChunkVentureneering=self.webpackChunkVentureneering||[]).push([[515],{3905:function(M,N,e){e.d(N,{Zo:function(){return i},kt:function(){return y}});var D=e(7294);function j(M,N,e){return N in M?Object.defineProperty(M,N,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[N]=e,M}function I(M,N){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);N&&(D=D.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),e.push.apply(e,D)}return e}function t(M){for(var N=1;N<arguments.length;N++){var e=null!=arguments[N]?arguments[N]:{};N%2?I(Object(e),!0).forEach((function(N){j(M,N,e[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(e,N))}))}return M}function n(M,N){if(null==M)return{};var e,D,j=function(M,N){if(null==M)return{};var e,D,j={},I=Object.keys(M);for(D=0;D<I.length;D++)e=I[D],N.indexOf(e)>=0||(j[e]=M[e]);return j}(M,N);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);for(D=0;D<I.length;D++)e=I[D],N.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(M,e)&&(j[e]=M[e])}return j}var g=D.createContext({}),u=function(M){var N=D.useContext(g),e=N;return M&&(e="function"==typeof M?M(N):t(t({},N),M)),e},i=function(M){var N=u(M.components);return D.createElement(g.Provider,{value:N},M.children)},o={inlineCode:"code",wrapper:function(M){var N=M.children;return D.createElement(D.Fragment,{},N)}},r=D.forwardRef((function(M,N){var e=M.components,j=M.mdxType,I=M.originalType,g=M.parentName,i=n(M,["components","mdxType","originalType","parentName"]),r=u(e),y=j,T=r["".concat(g,".").concat(y)]||r[y]||o[y]||I;return e?D.createElement(T,t(t({ref:N},i),{},{components:e})):D.createElement(T,t({ref:N},i))}));function y(M,N){var e=arguments,j=N&&N.mdxType;if("string"==typeof M||j){var I=e.length,t=new Array(I);t[0]=r;var n={};for(var g in N)hasOwnProperty.call(N,g)&&(n[g]=N[g]);n.originalType=M,n.mdxType="string"==typeof M?M:j,t[1]=n;for(var u=2;u<I;u++)t[u]=e[u];return D.createElement.apply(null,t)}return D.createElement.apply(null,e)}r.displayName="MDXCreateElement"},1958:function(M,N,e){e.r(N),e.d(N,{frontMatter:function(){return n},contentTitle:function(){return g},metadata:function(){return u},assets:function(){return i},toc:function(){return o},default:function(){return y}});var D=e(7462),j=e(3366),I=(e(7294),e(3905)),t=["components"],n={authors:"royletron",title:"\ud83e\udddb\u200d\u2642\ufe0f Von Count",description:"Counting lines has never been so easy!",slug:"count-voncount",tags:["libraries","oss"]},g=void 0,u={permalink:"/blog/count-voncount",source:"@site/blog/2022-02-18-count-voncount.mdx",title:"\ud83e\udddb\u200d\u2642\ufe0f Von Count",description:"Counting lines has never been so easy!",date:"2022-02-18T00:00:00.000Z",formattedDate:"February 18, 2022",tags:[{label:"libraries",permalink:"/blog/tags/libraries"},{label:"oss",permalink:"/blog/tags/oss"}],readingTime:1.6,truncated:!0,authors:[{name:"Darren \ud83e\uddd9\u200d\u2642\ufe0f",title:"CTO @ Venture Harbour",url:"https://github.com/royletron",imageURL:"https://github.com/royletron.png",key:"royletron"}],frontMatter:{authors:"royletron",title:"\ud83e\udddb\u200d\u2642\ufe0f Von Count",description:"Counting lines has never been so easy!",slug:"count-voncount",tags:["libraries","oss"]},prevItem:{title:"\ud83e\udd3c\u200d\u2640\ufe0f Wrestly",permalink:"/blog/wrestly"},nextItem:{title:"\ud83d\udc4b Hello World",permalink:"/blog/hello-world"}},i={authorsImageUrls:[void 0]},o=[],r={toc:o};function y(M){var N=M.components,n=(0,j.Z)(M,t);return(0,I.kt)("wrapper",(0,D.Z)({},r,n,{components:N,mdxType:"MDXLayout"}),(0,I.kt)("p",null,(0,I.kt)("strong",{parentName:"p"},"We recently found need to count lines of our code"),", but with added context that things like ",(0,I.kt)("inlineCode",{parentName:"p"},"cloc")," can't give us. Basically at a glance we wanted to see the use of certain features/components/libraries so that we could phase them out slowly over time and see progress \ud83e\uddee. To that end ",(0,I.kt)("a",{parentName:"p",href:"https://github.com/ventureharbour/voncount"},"we produced ",(0,I.kt)("em",{parentName:"a"},"VonCount"))),(0,I.kt)("div",{style:{textAlign:"center"}},(0,I.kt)("code",null,(0,I.kt)("p",null,(0,I.kt)("img",{alt:"Our Glorious Mascot",src:e(3678).Z,width:"341",height:"288"})),(0,I.kt)("h2",null,"I vant to count your lines..."))),(0,I.kt)("p",null,(0,I.kt)("strong",{parentName:"p"},"VonCount")," produces tables of results for folders of source code, those results are determined by an optional configuration. The configuration can decide any number of ",(0,I.kt)("inlineCode",{parentName:"p"},"groups")," which are named and are specified by patterns that match the start and end of a particular block of something. For example ",(0,I.kt)("em",{parentName:"p"},"documentation")," where you want to count lines between ",(0,I.kt)("inlineCode",{parentName:"p"},"/**")," and ",(0,I.kt)("inlineCode",{parentName:"p"},"*/"),":"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="count.json"',title:'"count.json"'},'{\n  "groups": [\n    {\n      "name": "documentation",\n      "between": {\n        "start": "^\\\\/\\\\*\\\\*",\n        "end": "^ \\\\*/$"\n      }\n    }\n  ]\n}\n')),(0,I.kt)("p",null,"These will then be matched and counted alongside the rest of the source, producing a table that shows total lines, number of lines in your groups and the representation as a % of those groups."),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g voncount\nvoncount run .\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Path           \u2502 Lines \u2502 'documentation' \u2502     % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 test           \u2502   232 \u2502              19 \u2502  8.19 \u2502\n\u2502   components   \u2502   207 \u2502              19 \u2502  9.18 \u2502\n\u2502     Header.js  \u2502    18 \u2502               4 \u2502 22.22 \u2502\n\u2502     Content.js \u2502   179 \u2502              15 \u2502  8.38 \u2502\n\u2502     Footer.js  \u2502    10 \u2502               0 \u2502     0 \u2502\n\u2502   pages        \u2502    25 \u2502               0 \u2502     0 \u2502\n\u2502     index.js   \u2502    25 \u2502               0 \u2502     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,I.kt)("p",null,"And you get a neat breakdown of it all \ud83d\ude80!"),(0,I.kt)("p",null,(0,I.kt)("em",{parentName:"p"},"We are still pretty early")," with our build on this, but feel it's useful so will be investing more and more time into it. It's great for developer led metrics, and removing/adding certain facets to your code base ",(0,I.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/voncount"},"give it a try"),"."))}y.isMDXComponent=!0},3678:function(M,N){N.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQxIiBoZWlnaHQ9IjI4OCIgdmlld0JveD0iMCAwIDM0MSAyODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02IDIyNy44MTlDMTEuNzA2MiAxOTQuODkgMTE3LjAxNSA2Ny4wMTYxIDE2OC45NTYgNUMyNDcuNDE2IDkzLjkwODEgMzM3LjM5OCAyMDYuNDE1IDMzNy4zOTggMjI3LjgxOUMyOTAuODcxIDIwNS44NjYgMjQ5LjYxMSAyMTAuODA2IDE2OC45NTYgMjMzLjg1NkM1OC42NzI2IDIwNi45NjQgMzcuODIzIDIyMC42ODQgNiAyMjcuODE5WiIgZmlsbD0iIzUwRkE3QiIvPgo8cGF0aCBkPSJNMjY4LjY2MiAxNDQuODNDMjY4LjY2MiAxOTguNzM3IDIyNC45NjIgMjQyLjQzOCAxNzEuMDU1IDI0Mi40MzhDMTE3LjE0OCAyNDIuNDM4IDczLjQ0NzggMTk4LjczNyA3My40NDc4IDE0NC44M0M5Mi42NDAyIDk0LjkzMDEgOTYuNjIzNSA1MS4zMzU5IDE3MS4wNTUgNTEuMzM1OUMyNDEuNzkzIDUxLjMzNiAyNDkuNzQ0IDg4Ljg5ODMgMjY4LjY2MiAxNDQuODNaIiBmaWxsPSIjRThCOEZGIi8+CjxwYXRoIGQ9Ik0zNy40Mzc5IDk5Ljg2NTRDNDUuNjYzMyA4My45NjMxIDc2LjE4ODQgMTAwLjk2MiA4NS42OTMyIDEwOS4xODdWMTU3Ljk5MUM4MC45NDA4IDE2MC41NSA2OC4yNTU1IDE2NC4xMzMgNTUuNTMzNiAxNTcuOTkxQzQ0LjAxODIgMTQ0LjQ2NSAzNS45MjY0IDEwMi43ODggMzcuNDM3OSA5OS44NjU0WiIgZmlsbD0iI0U4QjhGRiIvPgo8cGF0aCBkPSJNMzA1LjAzNSA5OS44MzkzQzI5Ni44MSA4My45MzcgMjY2LjI4NSAxMDAuOTM2IDI1Ni43OCAxMDkuMTYxVjE1Ny45NjVDMjYxLjUzMiAxNjAuNTI0IDI3NC4yMTggMTY0LjEwNiAyODYuOTQgMTU3Ljk2NUMyOTguNDU1IDE0NC40MzkgMzA2LjU0NyAxMDIuNzYyIDMwNS4wMzUgOTkuODM5M1oiIGZpbGw9IiNFOEI4RkYiLz4KPHBhdGggZD0iTTE3MS4wNTUgNDguODY4NEM5My40NjI3IDQ4Ljg2ODQgOTcuODQ5NSA4NS4zMzQgODQuNjg5IDEwNi45OTRINzMuNzIxOUM3My4zNDQzIDExMS4yMjMgNzMuNTkwOCAxMTguNzk4IDc2Ljc4MjUgMTIwLjgwNkM3My45MDkzIDEyMC44ODggNzAuMDEzNiAxMjEuMDg1IDY3LjE0MTYgMTIxLjI1MUM2Ni43NzYxIDEyNS42MzggNjcuNTgwMyAxMzQuNDY3IDczLjcyMTkgMTM0LjY4NkM3OS44NjM1IDEzNC45MDUgNzAuNDMxOCAxMzUuNjkxIDY0Ljk0ODIgMTM2LjA1N0M2Ni4wNDUgMTQyLjE4IDY5Ljg4MzUgMTU0LjIwNyA3Ni40NjM3IDE1My4zM0M3Ni41NTUxIDE0Ny42NjQgODEuMjg5MiAxMzEuMDY3IDk5LjQ5NDYgMTEwLjAxQzk5LjIyMDQgODYuMjQ3OSAxMTMuMTQ5IDQ3LjQ0MjYgMTcxLjA1NSA4Mi4zMThDMjI4Ljk2MSA0Ny40NDI2IDI0Mi44ODkgODYuMjQ3OCAyNDIuNjE1IDExMC4wMUMyNjAuODIxIDEzMS4wNjcgMjY1LjU1NSAxNDcuNjY0IDI2NS42NDYgMTUzLjMzQzI3Mi4yMjYgMTU0LjIwNyAyNzYuMDY1IDE0Mi4xOCAyNzcuMTYyIDEzNi4wNTdDMjcxLjY3OCAxMzUuNjkxIDI2Mi4yNDYgMTM0LjkwNSAyNjguMzg4IDEzNC42ODZDMjc0LjUzIDEzNC40NjcgMjc1LjMzNCAxMjUuNjM4IDI3NC45NjggMTIxLjI1MUMyNzIuMDk2IDEyMS4wODUgMjY4LjIwMSAxMjAuODg4IDI2NS4zMjcgMTIwLjgwNkMyNjguNTE5IDExOC43OTggMjY4Ljc2NiAxMTEuMjIzIDI2OC4zODggMTA2Ljk5NEgyNTcuNDIxQzI0NC4yNiA4NS4zMzM5IDI0OC42NDcgNDguODY4NCAxNzEuMDU1IDQ4Ljg2ODRaIiBmaWxsPSIjMjgyQTM2Ii8+CjxwYXRoIGQ9Ik0xMjAuMDU4IDcwLjI1NDJDMTE1LjM5NyA3Ny42NTY5IDExMy43NTIgODEuNzY5NiAxMDEuOTYyIDkyLjczNjdDMTEzLjU4NyA4OS44ODUzIDEyMS40MjkgODYuNDMwNiAxMjMuODk2IDg1LjA1OTdDMTU0LjA1NiAxMTEuMTA3IDE2Ny4yNDYgMTAxLjg2OSAxNjMuOTI2IDk5Ljg2NTNDMTQ4LjAyNCA5MC4yNjkxIDEzMi45NDQgODAuMzk4NyAxMjAuMDU4IDcwLjI1NDJaIiBmaWxsPSIjMjgyQTM2Ii8+CjxwYXRoIGQ9Ik0yMjIuNTUyIDcxLjg5OTNDMjI3LjIxMyA3OS4zMDIxIDIyOC44NTggODMuNDE0NyAyNDAuNjQ4IDk0LjM4MTlDMjI5LjAyMyA5MS41MzA0IDIyMS4xODEgODguMDc1OCAyMTguNzE0IDg2LjcwNDlDMTg4LjU1NCAxMTIuNzUyIDE3NS4zNjQgMTAzLjUxNCAxNzguNjg0IDEwMS41MUMxOTQuNTg2IDkxLjkxNDMgMjA5LjY2NiA4Mi4wNDM5IDIyMi41NTIgNzEuODk5M1oiIGZpbGw9IiMyODJBMzYiLz4KPHBhdGggZD0iTTE1NC4xMTEgMTIxLjgyN0MxNTAuNjM4IDEyOC42ODEgMTM3LjMzMSAxMzkuOTc3IDExMS44ODggMTMwLjMyNkMxMTguMTAyIDExNy43MTQgMTM1LjI0OCA5OC4zNTY5IDE1NC4xMTEgMTIxLjgyN1oiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjEzNS40NjciIGN5PSIxMjAuNzMiIHI9IjkuODcwMzkiIGZpbGw9IiM0NDQ3NUEiLz4KPHBhdGggZD0iTTEzMy41NDggMTA4LjY2NkMxMTYuNjU4IDEwOS4xMDUgMTEzLjI1OSAxMjguNjgxIDEwMi4wMTcgMTI5Ljc3OEMxMDAuMjYzIDEzMi44NDggMTAyLjc0OCAxMzQuMzQ3IDEwNC4yMTEgMTM0LjcxM0MxMTguMjQ5IDEyOS42NjggMTE1LjcyNiAxMTYuODkxIDEzMy41NDggMTEyLjIzQzE0Ni40ODkgMTEwLjI1NiAxNTIuNDY2IDEyMC43MyAxNTQuMzg1IDEyMy40NzJDMTU2LjM1OSAxMjQuMTMgMTU3LjMwNiAxMjMuNDcyIDE1Ni41NzkgMTIxLjgyNkMxNTEuNTM0IDExMC40MjEgMTQ1LjA2MyAxMDguMzY3IDEzMy41NDggMTA4LjY2NloiIGZpbGw9IiMyODJBMzYiLz4KPHBhdGggZD0iTTE4OC4wNzkgMTIxLjgyN0MxOTEuNTUyIDEyOC42ODEgMjA0Ljg1OSAxMzkuOTc3IDIzMC4zMDIgMTMwLjMyNkMyMjQuMDg4IDExNy43MTQgMjA2Ljk0MyA5OC4zNTY5IDE4OC4wNzkgMTIxLjgyN1oiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgcj0iOS44NzAzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjA2LjcyMyAxMjAuNzMpIiBmaWxsPSIjNDQ0NzVBIi8+CjxwYXRoIGQ9Ik0yMDguNjQyIDEwOC42NjZDMjI1LjUzMiAxMDkuMTA1IDIyOC45MzIgMTI4LjY4MSAyNDAuMTczIDEyOS43NzhDMjQxLjkyOCAxMzIuODQ4IDIzOS40NDIgMTM0LjM0NyAyMzcuOTc5IDEzNC43MTNDMjIzLjk0MiAxMjkuNjY4IDIyNi40NjQgMTE2Ljg5MSAyMDguNjQyIDExMi4yM0MxOTUuNzAxIDExMC4yNTYgMTg5LjcyNCAxMjAuNzMgMTg3LjgwNSAxMjMuNDcyQzE4NS44MzEgMTI0LjEzIDE4NC44ODQgMTIzLjQ3MiAxODUuNjEyIDEyMS44MjZDMTkwLjY1NiAxMTAuNDIxIDE5Ny4xMjcgMTA4LjM2NyAyMDguNjQyIDEwOC42NjZaIiBmaWxsPSIjMjgyQTM2Ii8+CjxwYXRoIGQ9Ik05NC4yODUyIDE2OC45NThDMTA5LjkxMyAxODEuMjk2IDIyNy41MzUgMTg0LjAzOCAyNDguMzczIDE2OC45NThNOTcuODQ5NSAxNTkuNjM2Qzk1Ljc0NzQgMTYyLjE5NSA5Mi41MzA0IDE2OS41NjEgOTYuNDc4NiAxNzguNTU0TTI0NC44NiAxNTkuNjM2QzI0Ni45NjIgMTYyLjE5NSAyNTAuMTc5IDE2OS41NjEgMjQ2LjIzMSAxNzguNTU0IiBzdHJva2U9IiMyODJBMzYiIHN0cm9rZS13aWR0aD0iOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMTUuNjcxIDE3NC45OUMxNDcuNzUgMTgxLjg0NCAyMDAuNjY2IDE4MS4yOTYgMjI2Ljk4NyAxNzYuNjM1QzE5NC42MzQgMjM4LjA1MSAxNDkuNjY5IDIzOC41OTkgMTE1LjY3MSAxNzQuOTlaIiBmaWxsPSIjMjgyQTM2Ii8+CjxwYXRoIGQ9Ik0xNDEuOTkyIDE5Ny43NDdDMTM4LjkyMSAxOTUuOTkyIDEzNC44NjMgMTg2LjA0OSAxMzMuMjE4IDE4MS4yOTZMMTQ1LjI4MiAxODIuNjY3QzE0NS40NjUgMTg4LjQyNSAxNDUuMDYzIDE5OS41MDIgMTQxLjk5MiAxOTcuNzQ3WiIgZmlsbD0iI0ZFRkVGRSIvPgo8cGF0aCBkPSJNMjAwLjcwMyAxOTguMDIxQzIwMy43NzQgMTk2LjI2NiAyMDcuODMyIDE4Ni4zMjMgMjA5LjQ3NyAxODEuNTdMMTk3LjQxMyAxODIuOTQxQzE5Ny4yMyAxODguNjk5IDE5Ny42MzIgMTk5Ljc3NiAyMDAuNzAzIDE5OC4wMjFaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGQ9Ik0xNTMuODE2IDE4MS4yOTZDMTM3LjM2NSAxODcuMjE4IDE2NC4yMzUgMjEwLjYzMyAxNzEuMzYzIDIxNC40NzJDMTc4LjQ5MiAyMTAuNjMzIDIwNS4zNjEgMTg3LjIxOCAxODguOTExIDE4MS4yOTZDMTg1Ljg5NSAxNzkuNjUxIDE3OC4xNjMgMTc4LjI4IDE3MS4zNjMgMTg1Ljk1N0MxNjQuNTY0IDE3OC4yOCAxNTYuODMyIDE3OS42NTEgMTUzLjgxNiAxODEuMjk2WiIgZmlsbD0iI0ZGOEI4QiIvPgo8cGF0aCBkPSJNMTY4LjE5OSAxMDAuODgyQzE2OC45MDQgOTcuNzg3NSAxNzMuMzA0IDk3Ljc2NDUgMTc0LjA0MiAxMDAuODUyTDE4OS42MzYgMTY2LjEyQzE4OS44NTkgMTY3LjA1MyAxODkuNjIyIDE2OC4wMzYgMTg5IDE2OC43NjVMMTczLjM5MSAxODcuMDU3QzE3Mi4xNzUgMTg4LjQ4MiAxNjkuOTY1IDE4OC40NTcgMTY4Ljc4MyAxODcuMDA0TDE1My45MTcgMTY4LjczOUMxNTMuMzM0IDE2OC4wMjMgMTUzLjExMyAxNjcuMDc4IDE1My4zMTkgMTY2LjE3OEwxNjguMTk5IDEwMC44ODJaIiBmaWxsPSIjQ0M5RUUxIi8+CjxjaXJjbGUgY3g9IjIxMS42MzMiIGN5PSIxMjYuMTg2IiByPSIyOC4zNTI5IiBzdHJva2U9IiM0NDQ3NUEiIHN0cm9rZS13aWR0aD0iOCIvPgo8cGF0aCBkPSJNMTQzLjYzNyAyMzcuNTAzQzE2Mi4wNjIgMjQ0Ljk2IDE2NS4wMjMgMjM0Ljc2MSAxNzEuMDU1IDIzNC43NjFDMTc3LjA4NyAyMzQuNzYxIDE4MC4wNDggMjQ0Ljk2IDE5OC40NzMgMjM3LjUwM0MyMDIuMDM3IDI0NC4wODMgMjAwLjg4NSAyNDcuODEyIDE5NC4wODYgMjU4LjM0QzE5My45MDMgMjU1LjUwNyAxOTMuMTU0IDI1MC42MDggMTkxLjYxOCAyNTMuNjc5QzE4OS45NzMgMjU4Ljg4OCAxODguMzI4IDI2NC4wOTggMTg1Ljg2MSAyNjYuMDE3QzE4NS42NzggMjY0LjE4OSAxODUuMDM4IDI2MS4wODIgMTgzLjk0MSAyNjMuMjc1QzE4MC41MTQgMjcwLjEzIDE3NC43ODQgMjc2LjcxIDE3MS4wNTUgMjgwQzE2Ny4zMjYgMjc2LjcxIDE2MS41OTYgMjcwLjEzIDE1OC4xNjkgMjYzLjI3NUMxNTcuMDcyIDI2MS4wODIgMTU2LjQzMiAyNjQuMTg5IDE1Ni4yNDkgMjY2LjAxN0MxNTMuNzgyIDI2NC4wOTggMTUyLjEzNyAyNTguODg4IDE1MC40OTIgMjUzLjY3OUwxNTAuNDkyIDI1My42NzlDMTQ4Ljk1NiAyNTAuNjA4IDE0OC4yMDcgMjU1LjUwNyAxNDguMDI0IDI1OC4zNEMxNDEuMjI0IDI0Ny44MTIgMTQwLjA3MyAyNDQuMDgzIDE0My42MzcgMjM3LjUwM1oiIGZpbGw9IiMyODJBMzYiLz4KPC9zdmc+Cg=="}}]);