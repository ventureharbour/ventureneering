"use strict";(self.webpackChunkVentureneering=self.webpackChunkVentureneering||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"exhaustive-switch","metadata":{"permalink":"/blog/exhaustive-switch","source":"@site/blog/2022-03-07-exhaustive-switches.mdx","title":"Static Exhaustive Switches in Typescript","description":"Don\'t be afraid of the Typescript compiler - it only wants to be your friend.","date":"2022-03-07T00:00:00.000Z","formattedDate":"March 7, 2022","tags":[{"label":"Typescript","permalink":"/blog/tags/typescript"}],"readingTime":5.7,"truncated":true,"authors":[{"name":"James","title":"Engineer @ Venture Harbour","url":"https://github.com/sudo-jaa","imageURL":"https://github.com/sudo-jaa.png","key":"sudo-jaa"}],"frontMatter":{"authors":"sudo-jaa","title":"Static Exhaustive Switches in Typescript","description":"Don\'t be afraid of the Typescript compiler - it only wants to be your friend.","slug":"exhaustive-switch","tags":["Typescript"]},"nextItem":{"title":"\ud83e\udd3c\u200d\u2640\ufe0f Wrestly","permalink":"/blog/wrestly"}},"content":"**It\'s 2022, and we are in the golden age of web development**. But for all the advancements that tools like Typescript have made in making our lives easier,\\nthere are still things that it is missing that are staple features in other languages. Thankfully with a little work we are able to emulate some of these features\\nand make our lives easier, reduce the number of bugs we introduce, and make all our colleagues think we\'re awesome with our super esoteric programming skillz.\\n\\n\x3c!--truncate--\x3e\\n\\nOne of the features I miss dearly from languages like *Rust* and *ReScript* is **pattern matching**. And before anybody comes at me: [yes, there is a proposal for\\npattern matching in Typescript](https://github.com/tc39/proposal-pattern-matching). And yes, this proposal should make us all very happy.\\n\\nWhat _is_ pattern matching? To quote the almighty **[book](https://doc.rust-lang.org/book/ch06-02-match.html)**:\\n\\n>> Think of a match expression as being like a coin-sorting machine: coins slide down a track with variously sized holes along it, and each coin falls through the first hole it encounters that it fits into. In the same way, values go through each pattern in a match, and at the first pattern the value \u201cfits,\u201d the value falls into the associated code block to be used during execution.\\n\\nNow this sounds a lot like something that already exists in both Typescript and javascript: the `switch` statement. And for the most part, a `switch` does act in much the same\\nway as a fully-featured `match`, though with some drawbacks. The main one we\'re going to focus on here is that `switch` cases in Typescript\\nare **not exhaustive**. This means there is no guarantee that your `switch` is going to handle all possible values of your `switch` case.\\nIncidentally, in a `match` in a strongly typed language like *Rust*, this exhaustiveness is **guaranteed** statically by the compiler. You must handle **all possible** cases\\nbefore your code will even run.\\n\\nThis has some advantages. Primarily this aids development in larger teams where multiple engineers are working broadly in the same area.\\nI could create a `match` that handles some variant of a union type or enum, and we would never have to worry about a co-worker\\nadding a new value to the case and forgetting to handle it. Compiler says no. Your co-worker is forced to add the logic they missed. Bugs are avoided. Everyone is happy.\\n\\nYou don\'t get this advantage with a `switch`.\\n\\n\\"But James, you stupid human\\", you say. \\"You realise you can use \'default\' in a switch, right?\\".\\n\\nAbsolutely there is an option to use default, but also if you use it as a catch-all for things that you\'re willing to forget, then\\nyou probably deserve the bugs that are about to come swarming your way.\\nThe issue is that `default` really does just mean *default behaviour* that is non-specific to the value being passed to your switch. You\\nshould probably not rely on it to handle missing cases in types that have distinctly known possible values at the point of compilation.\\n\\n> NOTE: This does not apply to things like `string` and `number` where you really can have a functionally infinite set of values. Cases like this\\n> you should use `default` in a switch because you literally don\'t have any other choice. Though this is a problem that favours eliminating [primitive obsession](https://refactoring.guru/smells/primitive-obsession)\\n> in favour of using stronger types for your data (such as `enum` and `union`), we\'ll discuss that another time.\\n\\nSo what can we do about this? How can we ask the Typescript compiler to check this for us at compile-time?\\n\\nEnter **NEVER**!\\n\\nIf you haven\'t come across if before, `never` is a powerful Typescript type that tells the compiler that the value in question can never occur.\\nEverything is assignable to `never`, but `never` is not assignable to anything. `any` isn\'t even assignable to `never`. It is the ultimate\\nlast word in telling the compiler that this value must never occur.\\n\\nThings like functions that solely throw errors are inferred to return `never`, and that\'s how functions that throw can influence\\nthe control flow of a function.\\n\\nWe can also use `never` to force a `switch` case to be exhaustive, by telling it that the `default` case is `never`.\\n\\nLet\'s produce an example in literally the only context that has any meaning to me anymore: currency from A Song of Ice and Fire:\\n\\n\\n```\\nenum Coin {\\n    Halfpenny,\\n    Penny,\\n    Halfgroat,\\n    Groat,\\n    Star,\\n    Stag,\\n    Moon,\\n}\\n\\nfunction printValue(coin: Coin) {\\n  switch (coin) {\\n    case Coin.Halfpenny:\\n      console.log(\\"I am worth 23520 Golden Dragons\\")\\n      break;\\n    case Coin.Penny:\\n        console.log(\\"I am worth 11760 Golden Dragons\\")\\n      break;\\n    case Coin.Halfgroat:\\n        console.log(\\"I am worth 5880 Golden Dragons\\")\\n      break;\\n    case Coin.Groat:\\n        console.log(\\"I am worth 2940 Golden Dragons\\")\\n      break;\\n    case Coin.Star:\\n        console.log(\\"I am worth 1470 Golden Dragons\\")\\n      break;\\n    case Coin.Stag:\\n        console.log(\\"I am worth 210 Golden Dragons\\")\\n      break;\\n    case Coin.Moon:\\n      console.log(\\"I am worth 30 Golden Dragons\\")\\n      break;\\n  }\\n}\\n```\\n\\nI can stick any of these coins in that I like, and i\'ll get my value in Dragons.\\n\\nBut wait! I\'ve forgotten a value in my enum. I\'ve forgotten to put in Dragons.\\nIf I go and do that now:\\n\\n```\\nenum Coin {\\n    Halfpenny,\\n    Penny,\\n    Halfgroat,\\n    Groat,\\n    Star,\\n    Stag,\\n    Moon,\\n    Dragon\\n}\\n```\\n\\nand call the `printValue()` function, I don\'t get any print out. I\'ve got no default.\\n\\nI could add a default case that handles any unaccounted-for values:\\n\\n```\\nfunction printValue(coin: Coin) {\\n  switch (coin) {\\n    case Coin.Halfpenny:\\n      console.log(\\"23520 of me is worth 1 Golden Dragon\\")\\n      break;\\n    case Coin.Penny:\\n        console.log(\\"11760 of me is worth 1 Golden Dragon\\")\\n      break;\\n    case Coin.Halfgroat:\\n        console.log(\\"5880 of me is worth 1 Golden Dragon\\")\\n      break;\\n    case Coin.Groat:\\n        console.log(\\"2940 of me is worth 1 Golden Dragon\\")\\n      break;\\n    case Coin.Star:\\n        console.log(\\"1470 of me is worth 1 Golden Dragon\\")\\n      break;\\n    case Coin.Stag:\\n        console.log(\\"210 of me is worth 1 Golden Dragon\\")\\n      break;\\n    case Coin.Moon:\\n      console.log(\\"30 of me is worth 1 Golden Dragon\\")\\n      break;\\n    default:\\n      console.log(\\"I don\'t recognise this currency?\\")\\n  }\\n}\\n```\\n\\nBut my default needs to be generic no matter how many new coins I add. It can\'t ever be a handler for custom logic for new items I add to the enum.\\n\\nHowever, we can use the default case to **assign** the coin to `never`:\\n\\n```\\n    default:\\n      const exhaust: never = coin;\\n      throw new Error(exhaust);\\n  }\\n```\\n\\nAnd now the moment we try to compile our code with an enum case unaccounted for, we get the following:\\n\\n\\n```\\nindex.ts:36:13 - error TS2322: Type \'Coin\' is not assignable to type \'never\'.\\n\\n36       const exhaust: never = coin;\\n~~~~~~~\\n\\n\\nFound 1 error.\\n```\\n\\nThe Typescript compiler is now actively working for us to prevent any bugs that might arise from missing branches in this switch. It is\\nnow exhaustive, and no matter how many new items we add to our enum, we are forced by default to handle them, or we\'re not shipping.\\n\\nTake **THAT**, dynamic languages!"},{"id":"wrestly","metadata":{"permalink":"/blog/wrestly","source":"@site/blog/2022-02-28-wrestly.md","title":"\ud83e\udd3c\u200d\u2640\ufe0f Wrestly","description":"Wrestling with rest? Try Wrestly!","date":"2022-02-28T00:00:00.000Z","formattedDate":"February 28, 2022","tags":[{"label":"libraries","permalink":"/blog/tags/libraries"},{"label":"oss","permalink":"/blog/tags/oss"}],"readingTime":1.765,"truncated":true,"authors":[{"name":"Darren \ud83e\uddd9\u200d\u2642\ufe0f","title":"CTO @ Venture Harbour","url":"https://github.com/royletron","imageURL":"https://github.com/royletron.png","key":"royletron"}],"frontMatter":{"authors":"royletron","title":"\ud83e\udd3c\u200d\u2640\ufe0f Wrestly","description":"Wrestling with rest? Try Wrestly!","slug":"wrestly","tags":["libraries","oss"]},"prevItem":{"title":"Static Exhaustive Switches in Typescript","permalink":"/blog/exhaustive-switch"},"nextItem":{"title":"\ud83e\udddb\u200d\u2642\ufe0f Von Count","permalink":"/blog/count-voncount"}},"content":"**This week we have been working with remote APIs, Webhooks and OAuth**. Those alone will be blogged about plenty in the future, but in doing this task we have bourne another mini project that we have found really useful. Typically, when doing this sort of work, I\'ve always had this habit of running a dummy server that logs out requests and blindly responds to them. This helps me see what is going on, and what external things are either redirecting or posting directly to our APIs. Up to now I have never really done much more than run a server where all requests are `console.log`\'ed and `res.send(\'ok\')`\'ed, but this time around added an SQLite backed so I could see request history, and a nice front end so the payloads were readable. [So here is _wrestly_](https://npmjs.com/wrestly)\\n\\n\x3c!--truncate--\x3e\\n\\n<div style={{\\"textAlign\\": \\"center\\"}}>\\n\\n![Our Glorious Mascot](/blog/wrestly/logo.svg)\\n\\n</div>\\n\\n**Wrestly** is a simple http server that will accept any requests and store their `body`, `headers` and `cookies` as well as any `query` params into a SQLite DB. It allows you to list the requests already made, and look at each one in detail. We don\'t really focus on the response, it just gives you a nice `200` and whatever the contents of the original request was. Routes that go via `/api/**/*` paths will always respond with JSON - which was useful for us - otherwise it just shows Wrestly\'s own webpage with the contents of the original request. It\'ll parse any `JSON` or `x-www-form-urlencoded` bodies included with requests, and it\'ll also record the `method` and `url`.\\n\\n<figcaption align=\\"center\\">Lists of requests that have come in</figcaption>\\n\\n![Listing](/blog/wrestly/listing.png)\\n\\nYou can access the list view at `http://localhost:6789/_x` and it should show all recorded requests to date. _Note_ that by default requests are stored in memory, so if you quit `wrestly` and start again it\'ll clear saved requests. You can override this by setting a designated `sqlite` file with the `-d` eg.\\n\\n```bash\\nwrestly -d ./requests.sqlite\\n```\\n\\n<figcaption align=\\"center\\">View of a single request</figcaption>\\n\\n![Request](/blog/wrestly/request.png)\\n\\nCombine this with something like [`ngrok`](https://ngrok.com) and you have a pretty whizzy environment for working on external webhooked services etc."},{"id":"count-voncount","metadata":{"permalink":"/blog/count-voncount","source":"@site/blog/2022-02-18-count-voncount.mdx","title":"\ud83e\udddb\u200d\u2642\ufe0f Von Count","description":"Counting lines has never been so easy!","date":"2022-02-18T00:00:00.000Z","formattedDate":"February 18, 2022","tags":[{"label":"libraries","permalink":"/blog/tags/libraries"},{"label":"oss","permalink":"/blog/tags/oss"}],"readingTime":1.6,"truncated":true,"authors":[{"name":"Darren \ud83e\uddd9\u200d\u2642\ufe0f","title":"CTO @ Venture Harbour","url":"https://github.com/royletron","imageURL":"https://github.com/royletron.png","key":"royletron"}],"frontMatter":{"authors":"royletron","title":"\ud83e\udddb\u200d\u2642\ufe0f Von Count","description":"Counting lines has never been so easy!","slug":"count-voncount","tags":["libraries","oss"]},"prevItem":{"title":"\ud83e\udd3c\u200d\u2640\ufe0f Wrestly","permalink":"/blog/wrestly"},"nextItem":{"title":"\ud83d\udc4b Hello World","permalink":"/blog/hello-world"}},"content":"**We recently found need to count lines of our code**, but with added context that things like `cloc` can\'t give us. Basically at a glance we wanted to see the use of certain features/components/libraries so that we could phase them out slowly over time and see progress \ud83e\uddee. To that end [we produced _VonCount_](https://github.com/ventureharbour/voncount)\\n\\n\x3c!--truncate--\x3e\\n\\n<div style={{\\"textAlign\\": \\"center\\"}}>\\n<code>\\n\\n![Our Glorious Mascot](/blog/count-voncount/logo.svg)\\n<h2>I vant to count your lines...</h2>\\n\\n</code>\\n</div>\\n\\n**VonCount** produces tables of results for folders of source code, those results are determined by an optional configuration. The configuration can decide any number of `groups` which are named and are specified by patterns that match the start and end of a particular block of something. For example _documentation_ where you want to count lines between `/**` and `*/`:\\n\\n```json title=\\"count.json\\"\\n{\\n  \\"groups\\": [\\n    {\\n      \\"name\\": \\"documentation\\",\\n      \\"between\\": {\\n        \\"start\\": \\"^\\\\\\\\/\\\\\\\\*\\\\\\\\*\\",\\n        \\"end\\": \\"^ \\\\\\\\*/$\\"\\n      }\\n    }\\n  ]\\n}\\n```\\n\\nThese will then be matched and counted alongside the rest of the source, producing a table that shows total lines, number of lines in your groups and the representation as a % of those groups.\\n\\n```bash\\nnpm install -g voncount\\nvoncount run .\\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\\n\u2502 Path           \u2502 Lines \u2502 \'documentation\' \u2502     % \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502 test           \u2502   232 \u2502              19 \u2502  8.19 \u2502\\n\u2502   components   \u2502   207 \u2502              19 \u2502  9.18 \u2502\\n\u2502     Header.js  \u2502    18 \u2502               4 \u2502 22.22 \u2502\\n\u2502     Content.js \u2502   179 \u2502              15 \u2502  8.38 \u2502\\n\u2502     Footer.js  \u2502    10 \u2502               0 \u2502     0 \u2502\\n\u2502   pages        \u2502    25 \u2502               0 \u2502     0 \u2502\\n\u2502     index.js   \u2502    25 \u2502               0 \u2502     0 \u2502\\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\\n\\n```\\n\\nAnd you get a neat breakdown of it all \ud83d\ude80!\\n\\n_We are still pretty early_ with our build on this, but feel it\'s useful so will be investing more and more time into it. It\'s great for developer led metrics, and removing/adding certain facets to your code base [give it a try](https://www.npmjs.com/package/voncount)."},{"id":"hello-world","metadata":{"permalink":"/blog/hello-world","source":"@site/blog/2022-02-17-hello-world.mdx","title":"\ud83d\udc4b Hello World","description":"Welcome to the world of Venture Harbour Engineering!","date":"2022-02-17T00:00:00.000Z","formattedDate":"February 17, 2022","tags":[{"label":"hello","permalink":"/blog/tags/hello"}],"readingTime":1.545,"truncated":true,"authors":[{"name":"Darren \ud83e\uddd9\u200d\u2642\ufe0f","title":"CTO @ Venture Harbour","url":"https://github.com/royletron","imageURL":"https://github.com/royletron.png","key":"royletron"}],"frontMatter":{"authors":"royletron","title":"\ud83d\udc4b Hello World","description":"Welcome to the world of Venture Harbour Engineering!","slug":"hello-world","tags":["hello"]},"prevItem":{"title":"\ud83e\udddb\u200d\u2642\ufe0f Von Count","permalink":"/blog/count-voncount"}},"content":"**It seems to be a tradition** that every blog I start I start with a well wishing _hello world_ post. So here I am, saying it again, _hello world_. This time I have the might of the entire Ventureneering team behind me and we have a lot to share, both to one another and the rest of the wider community. So welcome, I\'m really glad you came along \u2764\ufe0f.\\n\\n#### Questions?\\n\\n\x3c!--truncate--\x3e\\n\\n##### How will this be different to ventureharbour.com?\\n\\nSo we are eager to get more mass appeal content from the engineers on the main site, and really this can act as the catalyst and breeding ground for that content. Not that content has to be editorially more or less significant. It\'s just tonally and demographically the main blog is very different, so this is a place without borders - albeit I hope we would all embody the Venture Harbour spirit! We can also experiment with interactive content a lot easier on this site, with [Docusaurus allowing MDX content](https://docusaurus.io/docs/markdown-features/react) you can embed experiments directly into the page!\\n\\n##### How do I get stuff on here?\\n\\nThe [repository exists publicly](https://github.com/ventureharbour/ventureneering) so internal or external collaborators can submit PRs and we would be delighted to review them. [Check out the Docusaurus docs](https://docusaurus.io/docs/blog#adding-posts) if you are having issues, we can always help get things looking just right if you struggle, so just open issues on our repo if you can\'t get something working.\\n\\n##### What can I write about?\\n\\nAnything you think is interesting. It\'s a great place to share _links_ to interesting articles, _libraries_ or _tech_ that you find whilst journeying through your life as a developer. You can also _teach_ us something, or give us a _TIL_ (today I learned) - short posts are totally totally fine, it doesn\'t need to be epic, but it can also be epic!!"}]}')}}]);