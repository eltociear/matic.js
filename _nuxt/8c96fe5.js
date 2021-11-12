(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{173:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"API Architecture",url:"api-architecture"},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"isApproved",url:"is-approved"},{text:"isApprovedAll",url:"is-approved-all"},{text:"approve",url:"approve"},{text:"approveAll",url:"approve-all"},{text:"deposit",url:"deposit"},{text:"depositMany",url:"deposit-many"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawStartMany",url:"withdraw-start-many"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitMany",url:"withdraw-exit-many"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"withdrawExitFasterMany",url:"withdraw-exit-faster-many"},{text:"isWithdrawExited",url:"is-withdraw-exited"},{text:"isWithdrawExitedMany",url:"is-withdraw-exited-many"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"isDeposited",url:"is-deposited"},{text:"depositEther",url:"deposit-ether"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawConfirm",url:"withdraw-confirm"},{text:"withdrawConfirmFaster",url:"withdraw-confirm-faster"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"safeDeposit",url:"safe-deposit"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawConfirm",url:"withdraw-confirm"},{text:"withdrawConfirmFaster",url:"withdraw-confirm-faster"},{text:"withdrawExit",url:"withdraw-exit"},{text:"transfer",url:"transfer"}]},{text:"isDeposited",url:"is-deposited"},{text:"isCheckPointed",url:"is-check-pointed"},{text:"withdrawExit",url:"withdraw-exit"},{text:"depositEther",url:"deposit-ether"}]},{text:"setProofApi",url:"set-proof-api"},{text:"Advanced",url:"advanced",expand:!0,children:[{text:"ABIManager",url:"abi-manager"},{text:"Plugin",url:"plugin"}]}]},174:function(t,e,r){"use strict";var o={components:{Docs:r(175).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(173);this.savedLinks=t}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},209:function(t,e,r){"use strict";r.r(e);var o={components:{Layout:r(174).a}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"setProofApi",description:"Get started with maticjs",keywords:"setProofApi, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/set-proof-api.md"}},[r("h1",{attrs:{id:"setproofapi"}},[t._v("setProofApi")]),t._v(" "),r("p",[t._v("You will see some of APIS with "),r("strong",[t._v("faster")]),t._v(" suffix, which makes a process faster by using backend. It does so by using backend resources and faster rpc.")]),t._v(" "),r("p",[t._v("For making "),r("code",[t._v("faster apis")]),t._v(" to work - you will have to host a "),r("a",{attrs:{href:"https://github.com/maticnetwork/proof-generation-api"}},[t._v("proof api")]),t._v(" at your expenses.")]),t._v(" "),r("p",[t._v("After you have deployed the api, you can set the api url in matic.js by using "),r("code",[t._v("setProofApi")]),t._v(".")]),t._v(" "),r("pre",[r("code",[t._v("import { setProofApi } from '@maticnetwork/maticjs'\n\nsetProofApi(<api url>);\n")])]),t._v(" "),r("p",[t._v("e.g - if you have deployed the proof api and base url is - "),r("code",[t._v("https://abc.com/")]),t._v(", then you need to set base url in "),r("code",[t._v("setProofApi")])]),t._v(" "),r("pre",[r("code",[t._v("import { setProofApi } from '@maticnetwork/maticjs'\n\nsetProofApi(\"abc.com\");\n")])]),t._v(" "),r("div",{staticClass:"highlight"},[t._v("\nWe recommend to use faster apis, because some api particularly where proof is being generated does lots of RPC calls and so slow with public RPC.\n")])])}),[],!1,null,null,null);e.default=component.exports}}]);