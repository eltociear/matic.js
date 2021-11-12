(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{173:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"API Architecture",url:"api-architecture"},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"isApproved",url:"is-approved"},{text:"isApprovedAll",url:"is-approved-all"},{text:"approve",url:"approve"},{text:"approveAll",url:"approve-all"},{text:"deposit",url:"deposit"},{text:"depositMany",url:"deposit-many"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawStartMany",url:"withdraw-start-many"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitMany",url:"withdraw-exit-many"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"withdrawExitFasterMany",url:"withdraw-exit-faster-many"},{text:"isWithdrawExited",url:"is-withdraw-exited"},{text:"isWithdrawExitedMany",url:"is-withdraw-exited-many"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"isDeposited",url:"is-deposited"},{text:"depositEther",url:"deposit-ether"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawConfirm",url:"withdraw-confirm"},{text:"withdrawConfirmFaster",url:"withdraw-confirm-faster"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"safeDeposit",url:"safe-deposit"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawConfirm",url:"withdraw-confirm"},{text:"withdrawConfirmFaster",url:"withdraw-confirm-faster"},{text:"withdrawExit",url:"withdraw-exit"},{text:"transfer",url:"transfer"}]},{text:"isDeposited",url:"is-deposited"},{text:"isCheckPointed",url:"is-check-pointed"},{text:"withdrawExit",url:"withdraw-exit"},{text:"depositEther",url:"deposit-ether"}]},{text:"setProofApi",url:"set-proof-api"},{text:"Advanced",url:"advanced",expand:!0,children:[{text:"ABIManager",url:"abi-manager"},{text:"Plugin",url:"plugin"}]}]},174:function(t,e,r){"use strict";var n={components:{Docs:r(175).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(173);this.savedLinks=t}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},239:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(174).a}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"ABIManager",description:"matic.js internally use `ABIManager` for handling abi management for you",keywords:"abi manager, api type, read, write, polygon",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/advanced/abi-manager.md"}},[r("h1",{attrs:{id:"abimanager"}},[t._v("ABIManager")]),t._v(" "),r("p",[r("code",[t._v("matic.js")]),t._v(" internally use "),r("code",[t._v("ABIManager")]),t._v(" for handling abi management for you.")]),t._v(" "),r("p",[t._v("Sometimes you required to change the ABI particularly when you are developing a contract. You can do so by using "),r("code",[t._v("ABIManager")]),t._v(".")]),t._v(" "),r("p",[r("strong",[t._v("Syntax")])]),t._v(" "),r("pre",[r("code",[t._v("import { ABIManager } from '@maticnetwork/maticjs'\n\n\nconst manager = new ABIManager(<network name>,<version>);\nawait manager.init();\n\n// set abi\n\nmanager.setABI(<contract name>,<bridge type>, <abi value>);\n\n// get abi\n\nmanager.getABI(<contract name>,<bridge type>);\n")])]),t._v(" "),r("p",[t._v("The network name, contract name, bridge name etc can be get from our "),r("a",{attrs:{href:"https://github.com/maticnetwork/static/tree/master/network"}},[t._v("official static repo")]),t._v(".")]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("pre",[r("code",[t._v("import { ABIManager } from '@maticnetwork/maticjs'\n\n\nconst manager = new ABIManager('testnet','mumbai');\nawait manager.init();\n\n// set abi\n\nmanager.setABI('ERC20PredicateProxy','pos', 'abi value');\n\n// get abi\n\nmanager.getABI('ERC20PredicateProxy','pos');\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);