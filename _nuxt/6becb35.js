(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{110:function(o,r,e){var content=e(168);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(33).default)("6e627448",content,!0,{sourceMap:!1})},111:function(o,r,e){var content=e(170);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(33).default)("3da95306",content,!0,{sourceMap:!1})},112:function(o,r,e){var content=e(172);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(33).default)("11e2a1e9",content,!0,{sourceMap:!1})},119:function(o,r,e){"use strict";e(24);var t=e(1),l=(e(165),e(2)),n=(e(26),e(35),e(11),e(36),e(85)),c={created:function(){this.repoUrl="maticnetwork/matic.js"},computed:{shouldShowMenuIcon:function(){return"/"!=this.$route.path},githubUrl:function(){return"https://github.com/"+this.repoUrl},forkUrl:function(){return this.githubUrl+"/fork"},apiUrl:function(){return"https://api.github.com/repos/"+this.repoUrl}},data:function(){return{release:null,starCount:null}},mounted:function(){var o=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.activeVersion=o.getVersion(),r.prev=1,r.next=4,Promise.all([fetch(o.apiUrl),fetch("".concat(o.apiUrl,"/releases"))]);case 4:return e=r.sent,r.next=7,e[0].json();case 7:return o.starCount=r.sent.stargazers_count,r.next=10,e[1].json();case 10:t=r.sent,o.release={tag:t[0].tag_name,url:t[0].html_url},r.next=16;break;case 14:r.prev=14,r.t0=r.catch(1);case 16:case"end":return r.stop()}}),r,null,[[1,14]])})))()},methods:{onMenuBtnClick:function(){n.a.$emit("menuClicked")},onVersionChange:function(){this.$emit("version_change",this.activeVersion)},getVersion:function(){var o=this.$route.path;return o.indexOf("v1")>=0&&o.indexOf("v2")<0?1:o.indexOf("v2")>=0&&o.indexOf("v3")<0?2:3}}},d=(e(167),e(14)),menu=Object(d.a)(c,(function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{staticClass:"b-menu row"},[e("div",{staticClass:"row col-6 col-sm-4 b-menu__left"},[o.shouldShowMenuIcon?e("button",{staticClass:"b-menu__left__hamburger",on:{click:o.onMenuBtnClick}},[e("i",{staticClass:"material-icons"},[o._v("menu")])]):o._e(),o._v(" "),e("a",{staticClass:"row b-menu__left__icon content-v-center",attrs:{href:"",title:"JsStore Index Page"}},[e("img",{attrs:{src:o._f("imgPath")("logo.svg"),alt:"MaticJs Logo"}}),o._v(" "),e("span",{staticClass:"ml-10px"},[o._v("Matic.js")])])]),o._v(" "),e("div",{staticClass:"col-6 col-sm-8 row content-v-center b-menu__github-info",attrs:{id:"b-menu__github-info"}},[e("a",{staticClass:"b-menu__github-info__item",attrs:{title:"star jsstore",href:o.githubUrl}},[e("i",{staticClass:"fab fa-github"}),o._v("\n      Star\n      "),o.starCount?e("span",{staticClass:"star-count"},[o._v(o._s(o.starCount))]):o._e()]),o._v(" "),e("span",{staticClass:"b-menu__github-info__item hide-on-mobile"},[e("span",{staticClass:"ml-10px mr-10px"},[o._v("|")]),o._v(" "),e("a",{attrs:{title:"fork on github",href:o.forkUrl}},[e("svg",{staticClass:"octicon octicon-repo-forked",staticStyle:{fill:"white","vertical-align":"sub"},attrs:{version:"1.1",width:"10",height:"18",viewBox:"0 0 10 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]),o._v("\n        Fork\n      ")])]),o._v(" "),e("span",{staticClass:"b-menu__github-info__item hide-on-mobile"},[o.release?[e("span",{staticClass:"ml-10px mr-10px"},[o._v("|")]),o._v(" "),e("a",{attrs:{target:"_blank",href:o.release.url}},[o._v(o._s(o.release.tag))])]:o._e()],2)])])}),[],!1,null,"4edda938",null).exports,f={},footer=(e(169),Object(d.a)(f,(function(){var o=this,r=o.$createElement;o._self._c;return o._m(0)}),[function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{staticClass:"b-footer row"},[e("div",{staticClass:"col-lg-8"},[e("h4",[o._v("Help Us Grow")]),o._v(" "),e("div",{staticClass:"row"},[e("button",{staticClass:"btn"},[o._v("Sponsor Us")]),o._v(" "),e("button",{staticClass:"btn ml-10px"},[o._v("Be a backer")])])]),o._v(" "),e("div",{staticClass:"col-lg-4"},[o._v("\n    Created with\n    "),e("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}}),o._v(" by\n    "),e("a",{attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/"}},[o._v("Ujjwal Gupta")])])])}],!1,null,null,null).exports);t.a.filter("imgPath",(function(o){return"img/"+o}));var x={components:{Menu:menu,AppFooter:footer},mounted:function(){document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((function(o){if(o.id){var link=document.createElement("a");link.classList="anchor",link.innerText="#",link.href="#"+o.id,link.setAttribute("aria-hidden","true"),o.appendChild(link)}}));var o=document.querySelector("div.tabs");if(null!=o){var r,e=o.querySelectorAll(".tab"),t=[],l=document.createElement("div");l.className="tabs__names",o.appendChild(l),e.forEach((function(o,e){var l=o.getAttribute("name"),n=document.createElement("div");n.innerText=l,n.className="tabs__names__item",n.setAttribute("target",l),o.style.cssText="display:none","true"==o.getAttribute("active")&&(r=e),t.push(n)}));var n=document.createElement("div");n.className="tabs__content",o.appendChild(n),n.innerHTML="OKKKKKK",r=r||0,t.forEach((function(e,c){l.appendChild(e),e.onclick=function(e){var l=e.target;t[r].classList.remove("active"),r=c,l.classList.add("active");l.getAttribute("target");var d=o.querySelectorAll(".tab")[r];d&&(n.innerHTML=d.innerHTML)},c===r&&e.click()}))}}},m=(e(171),Object(d.a)(x,(function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",[e("Menu"),o._v(" "),e("nuxt")],1)}),[],!1,null,null,null));r.a=m.exports},123:function(o,r,e){o.exports=e(124)},165:function(o,r,e){var content=e(166);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(33).default)("7f7a6066",content,!0,{sourceMap:!1})},166:function(o,r,e){var t=e(32)(!1);t.push([o.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}.center{margin-left:auto;margin-right:auto}.border{border:1px solid #000}.block{display:block}.width-full{width:100%}.text-center{text-align:center}.text-right{text-align:right}.text-primary{color:#42a5f5;color:var(--primary-color)}.text-secondary{color:#f59242;color:var(--secondary-color)}.text-info{color:#8c9eff;color:var(--info-color)}.text-error{color:#b71c1c;color:var(--error-color)}.text-warning{color:#ffc107;color:var(--warning-color)}.text-success{color:#4caf50;color:var(--success-color)}.quote:after,.quote:before{content:"\\201C";font-family:Sanchez}.highlight{position:relative;padding-left:1em;border-left:.2em solid;font-size:1.4em;line-height:1.5em;font-weight:100}.highlight.primary{border-left-color:#42a5f5;border-left-color:var(--primary-color)}.highlight.secondary{border-left-color:#f59242;border-left-color:var(--secondary-color)}.highlight.info{border-left-color:#8c9eff;border-left-color:var(--info-color)}.highlight.error{border-left-color:#b71c1c;border-left-color:var(--error-color)}.highlight.warning{border-left-color:#ffc107;border-left-color:var(--warning-color)}.highlight.success{border-left-color:#4caf50;border-left-color:var(--success-color)}.row{display:flex}.row:not(.no-wrap){flex-wrap:wrap}.row.content-center{justify-content:center}.row.content-v-center{align-items:center}.col,.column{display:flex;flex-direction:column}.col.content-v-center,.column.content-v-center{justify-content:center}.col.content-center,.column.content-center{align-items:center}.btn{padding:5px;display:inline-block;text-align:center;border-radius:2px;font-size:1rem;font-weight:500;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;border:1px solid;text-decoration:none}.btn:not(.link){background-color:#e7e7e7;padding:.5em 1em}.btn:before{content:"";display:inline-block;vertical-align:middle;height:100%}.btn.primary{background-color:#42a5f5;background-color:var(--primary-color);color:#fff;color:var(--primary-contrast-color)}.btn.secondary{background-color:#f59242;background-color:var(--secondary-color);color:#fff;color:var(--secondary-contrast-color)}.btn.info{background-color:#8c9eff;background-color:var(--info-color);color:#fff;color:var(--info-contrast-color)}.btn.success{background-color:#4caf50;background-color:var(--success-color);color:#fff;color:var(--success-contrast-color)}.btn.error{background-color:#b71c1c;background-color:var(--error-color);color:#fff;color:var(--error-contrast-color)}.btn.warning{background-color:#ffc107;background-color:var(--warning-color);color:#fff;color:var(--warning-contrast-color)}.btn.link{color:#000;color:var(--link-color)}.btn.outlined{background-color:transparent}.btn.outlined.primary{color:#42a5f5;color:var(--primary-color);border-color:#42a5f5;border-color:var(--primary-color)}.btn.outlined.secondary{color:#f59242;color:var(--secondary-color);border-color:#f59242;border-color:var(--secondary-color)}.btn.outlined.info{color:#8c9eff;color:var(--info-color);border-color:#8c9eff;border-color:var(--info-color)}.btn.outlined.success{color:var(--sucess-color);border-color:var(--sucess-color)}.btn.outlined.error{color:#b71c1c;color:var(--error-color);border-color:#b71c1c;border-color:var(--error-color)}.btn.outlined.warning{color:#ffc107;color:var(--warning-color);border-color:#ffc107;border-color:var(--warning-color)}.btn.small{font-size:.85rem}.btn.x-small{font-size:.7rem}.btn.big{font-size:1.25rem}.btn.x-big{font-size:1.5rem}.btn.rounded{border-radius:20px}.btn.disabled{opacity:.4;cursor:not-allowed}.btns{letter-spacing:-.31em}.btns .btn{margin:0;border-radius:0;border-right:1px solid rgba(0,0,0,.2);letter-spacing:normal}.btns :first-child{border-top-left-radius:2px;border-bottom-left-radius:2px}.btns :last-child{border-top-right-radius:2px;border-bottom-right-radius:2px}h1{font-size:2rem}h2{font-size:1.8rem}h3{font-size:1.6rem}h4{font-size:1.4rem}h5{font-size:1.2rem}h6,input{font-size:1rem}.dropdown,.textbox{padding:0;border-radius:2px;border:1px solid #dddfe2;border:1px solid var(--input-border-color);width:300px;height:30px;background:inherit}.textbox{display:flex;align-items:center}.textbox input{border:0;padding:0 0 0 7px;height:100%}.textbox input:focus{outline:none}.textbox[focus-within]{box-shadow:0 0 0 2px #e7f3ff;border:2px solid #dddfe2;border:2px solid var(--input-border-color)}.textbox:focus-within{box-shadow:0 0 0 2px #e7f3ff;border:2px solid #dddfe2;border:2px solid var(--input-border-color)}.textbox.primary{border-color:#42a5f5;border-color:var(--primary-color)}.textbox.primary[focus-within]{border-color:#42a5f5;border-color:var(--primary-color)}.textbox.primary:focus-within{border-color:#42a5f5;border-color:var(--primary-color)}.textbox.error{border-color:#b71c1c;border-color:var(--error-color)}.textbox.error[focus-within]{border-color:#b71c1c;border-color:var(--error-color)}.textbox.error:focus-within{border-color:#b71c1c;border-color:var(--error-color)}.checkbox{width:20px;height:20px;margin:0;display:flex;justify-content:center;align-items:center;border:1px solid #dddfe2;border:1px solid var(--input-border-color)}.checkbox.primary{border-color:#42a5f5;border-color:var(--primary-color)}.checkbox.secondary{border-color:#f59242;border-color:var(--secondary-color)}.checkbox[checked]:after{content:"\\2714"}.checkbox[checked].primary{background-color:#42a5f5;background-color:var(--primary-color);color:#fff;color:var(--primary-contrast-color)}.checkbox[checked].secondary{background-color:#f59242;background-color:var(--secondary-color);color:#fff;color:var(--secondary-contrast-color)}.dropdown:focus{outline:none;border:2px solid #dddfe2;border:2px solid var(--input-border-color);box-shadow:0 0 0 2px #e7f3ff}.dropdown.primary{border-color:#42a5f5;border-color:var(--primary-color)}.dropdown.primary:focus{border-color:#42a5f5;border-color:var(--primary-color)}.dropdown.error{border-color:#b71c1c;border-color:var(--error-color)}.dropdown.error[focus-within]{border-color:#b71c1c;border-color:var(--error-color)}.dropdown.error:focus-within{border-color:#b71c1c;border-color:var(--error-color)}:root{--primary-color:#f6755e;--secondary-color:#25a2c3;--info-color:#8c9eff;--success-color:#4caf50;--error-color:#b71c1c;--warning-color:#ffc107;--primary-contrast-color:#fff;--secondary-contrast-color:#fff;--info-contrast-color:#fff;--success-contrast-color:#fff;--error-contrast-color:#fff;--warning-contrast-color:#fff;--link-color:#1867c0;--input-border-color:#dddfe2}.row>*{box-sizing:border-box}.row>[class^=col-]{box-sizing:border-box}.col-1{flex-basis:8.33333%;max-width:8.33333%}.col-2{flex-basis:16.66667%;max-width:16.66667%}.col-3{flex-basis:25%;max-width:25%}.col-4{flex-basis:33.33333%;max-width:33.33333%}.col-5{flex-basis:41.66667%;max-width:41.66667%}.col-6{flex-basis:50%;max-width:50%}.col-7{flex-basis:58.33333%;max-width:58.33333%}.col-8{flex-basis:66.66667%;max-width:66.66667%}.col-9{flex-basis:75%;max-width:75%}.col-10{flex-basis:83.33333%;max-width:83.33333%}.col-11{flex-basis:91.66667%;max-width:91.66667%}.col-12{flex-basis:100%;max-width:100%}@media (min-width:576px){.col-sm-1{flex-basis:8.33333%;max-width:8.33333%}.col-sm-2{flex-basis:16.66667%;max-width:16.66667%}.col-sm-3{flex-basis:25%;max-width:25%}.col-sm-4{flex-basis:33.33333%;max-width:33.33333%}.col-sm-5{flex-basis:41.66667%;max-width:41.66667%}.col-sm-6{flex-basis:50%;max-width:50%}.col-sm-7{flex-basis:58.33333%;max-width:58.33333%}.col-sm-8{flex-basis:66.66667%;max-width:66.66667%}.col-sm-9{flex-basis:75%;max-width:75%}.col-sm-10{flex-basis:83.33333%;max-width:83.33333%}.col-sm-11{flex-basis:91.66667%;max-width:91.66667%}.col-sm-12{flex-basis:100%;max-width:100%}}@media (min-width:768px){.col-md-1{flex-basis:8.33333%;max-width:8.33333%}.col-md-2{flex-basis:16.66667%;max-width:16.66667%}.col-md-3{flex-basis:25%;max-width:25%}.col-md-4{flex-basis:33.33333%;max-width:33.33333%}.col-md-5{flex-basis:41.66667%;max-width:41.66667%}.col-md-6{flex-basis:50%;max-width:50%}.col-md-7{flex-basis:58.33333%;max-width:58.33333%}.col-md-8{flex-basis:66.66667%;max-width:66.66667%}.col-md-9{flex-basis:75%;max-width:75%}.col-md-10{flex-basis:83.33333%;max-width:83.33333%}.col-md-11{flex-basis:91.66667%;max-width:91.66667%}.col-md-12{flex-basis:100%;max-width:100%}}@media (min-width:992px){.col-lg-1{flex-basis:8.33333%;max-width:8.33333%}.col-lg-2{flex-basis:16.66667%;max-width:16.66667%}.col-lg-3{flex-basis:25%;max-width:25%}.col-lg-4{flex-basis:33.33333%;max-width:33.33333%}.col-lg-5{flex-basis:41.66667%;max-width:41.66667%}.col-lg-6{flex-basis:50%;max-width:50%}.col-lg-7{flex-basis:58.33333%;max-width:58.33333%}.col-lg-8{flex-basis:66.66667%;max-width:66.66667%}.col-lg-9{flex-basis:75%;max-width:75%}.col-lg-10{flex-basis:83.33333%;max-width:83.33333%}.col-lg-11{flex-basis:91.66667%;max-width:91.66667%}.col-lg-12{flex-basis:100%;max-width:100%}}@media (min-width:1200px){.col-xl-1{flex-basis:8.33333%;max-width:8.33333%}.col-xl-2{flex-basis:16.66667%;max-width:16.66667%}.col-xl-3{flex-basis:25%;max-width:25%}.col-xl-4{flex-basis:33.33333%;max-width:33.33333%}.col-xl-5{flex-basis:41.66667%;max-width:41.66667%}.col-xl-6{flex-basis:50%;max-width:50%}.col-xl-7{flex-basis:58.33333%;max-width:58.33333%}.col-xl-8{flex-basis:66.66667%;max-width:66.66667%}.col-xl-9{flex-basis:75%;max-width:75%}.col-xl-10{flex-basis:83.33333%;max-width:83.33333%}.col-xl-11{flex-basis:91.66667%;max-width:91.66667%}.col-xl-12{flex-basis:100%;max-width:100%}}@media (min-width:1500px){.col-xxl-1{flex-basis:8.33333%;max-width:8.33333%}.col-xxl-2{flex-basis:16.66667%;max-width:16.66667%}.col-xxl-3{flex-basis:25%;max-width:25%}.col-xxl-4{flex-basis:33.33333%;max-width:33.33333%}.col-xxl-5{flex-basis:41.66667%;max-width:41.66667%}.col-xxl-6{flex-basis:50%;max-width:50%}.col-xxl-7{flex-basis:58.33333%;max-width:58.33333%}.col-xxl-8{flex-basis:66.66667%;max-width:66.66667%}.col-xxl-9{flex-basis:75%;max-width:75%}.col-xxl-10{flex-basis:83.33333%;max-width:83.33333%}.col-xxl-11{flex-basis:91.66667%;max-width:91.66667%}.col-xxl-12{flex-basis:100%;max-width:100%}}.ripple{position:relative;overflow:hidden;transform:translateZ(0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#000 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0);opacity:.2;transition:0s}.ml-5px{margin-left:5px}.ml-10px{margin-left:10px}.ml-15px{margin-left:15px}.ml-20px{margin-left:20px}.mr-5px{margin-right:5px}.mr-15px{margin-right:15px}.mr-20px{margin-right:20px}.mt-5px{margin-top:5px}.mt-10px{margin-top:10px}.mt-15px{margin-top:15px}.mt-20px{margin-top:20px}.mb-5px{margin-bottom:5px}.mb-10px{margin-bottom:10px}.mb-15px{margin-bottom:15px}.mb-20px{margin-bottom:20px}.pt-5px{padding-top:5px}.pt-10px{padding-top:10px}.pt-15px{padding-top:15px}.pt-20px{padding-top:20px}.pb-5px{padding-bottom:5px}.pb-10px{padding-bottom:10px}.pb-15px{padding-bottom:15px}.pb-20px{padding-bottom:20px}.pl-5px{padding-left:5px}.pl-10px{padding-left:10px}.pl-15px{padding-left:15px}.pl-20px{padding-left:20px}.pr-5px{padding-right:5px}.pr-10px{padding-right:10px}.pr-15px{padding-right:15px}.pr-20px{padding-right:20px}.list>*,ol>*,ul>*{font-size:1rem;line-height:2rem}.list.decimal,ol.decimal,ul.decimal{list-style-type:decimal}.list.disc,ol.disc,ul.disc{list-style-type:disc}.list.square,ol.square,ul.square{list-style-type:square}:root{--primary-color:#42a5f5;--secondary-color:#f59242;--link-color:#000}.h1,.h2,.h3,.h4,h1,h2,h3,h4{margin:2rem 0 1rem;font-weight:700;scroll-margin-top:64px}body{font-family:"Jost",-apple-system,blinkmacsystemfont,"Segoe UI",roboto,"Helvetica Neue",arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}a{text-decoration:none}.mr-10px{margin-right:10px}pre{margin:2rem 0}code,pre{font-family:sfmono-regular,menlo,monaco,consolas,"Liberation Mono","Courier New",monospace;font-size:.875rem;border-radius:.25rem}pre code{padding:1.25rem 1.5rem!important}code{background:#e6e0d7;padding:2px 10px}p{margin-top:0;margin-bottom:1rem}ul{list-style-type:disc}ol{list-style-type:decimal}ol,ul{padding-left:40px}.top-border{border-top:2px solid #e9ecef}b,strong{font-weight:bolder}div :hover .anchor,h1 :hover .anchor,h2 :hover .anchor,h3 :hover .anchor,h4 :hover .anchor,h5 :hover .anchor,h6 :hover .anchor,p :hover .anchor{visibility:visible;text-decoration:none}.anchor{visibility:hidden;padding-left:.5rem}.tabs{flex-direction:column;width:max-content}.tabs,.tabs .tabs__names{display:flex}.tabs .tabs__names .tabs__names__item{padding:5px 20px;cursor:pointer;border:1px solid #f59242;border:1px solid var(--secondary-color);margin-right:5px}.tabs .tabs__names .tabs__names__item.active{color:#fff;color:var(--primary-contrast-color);border:none;background:#42a5f5;background:var(--primary-color)}.tabs .tabs__content{margin-top:5px;border-left:1px solid;border-bottom:1px solid;padding:5px}',""]),o.exports=t},167:function(o,r,e){"use strict";e(110)},168:function(o,r,e){var t=e(32)(!1);t.push([o.i,'.b-menu[data-v-4edda938]{justify-content:space-between;align-items:center;background:var(--primary-color);padding:0 10px;height:64px;color:var(--primary-contrast-color);position:sticky;z-index:1001;top:0}.b-menu__left__icon img[data-v-4edda938]{height:22px}.b-menu__left__hamburger[data-v-4edda938]{background-color:transparent;outline:none;border:0;color:#fff;height:64px;margin-right:10px}@media (min-width:768px){.b-menu__left__icon img[data-v-4edda938]{height:30px}.b-menu__left__hamburger[data-v-4edda938]{display:none}}a[data-v-4edda938]{color:var(--primary-contrast-color)}.b-menu__github-info[data-v-4edda938]{justify-content:flex-end}@media (max-width:576px){.b-menu__github-info__item.hide-on-mobile[data-v-4edda938]{display:none}}#selectVersions[data-v-4edda938]{-webkit-appearance:menulist;background-color:#fff;margin-top:-3px;margin-left:5px;padding:3px;width:50px}.height-50px[data-v-4edda938]{height:50px}.star-count[data-v-4edda938]{padding:5px;color:#000;background:#fff;margin-left:6px;position:relative;border-radius:4px}.star-count[data-v-4edda938]:before{content:"";position:absolute;display:inline-block;width:0;height:0;top:50%;left:-5px;margin-top:-6px;border-color:transparent #fafafa transparent transparent;border-style:solid;border-width:6px 6px 6px 0}',""]),o.exports=t},169:function(o,r,e){"use strict";e(111)},170:function(o,r,e){var t=e(32)(!1);t.push([o.i,".b-footer{margin-top:20px;background:var(--primary-color);color:#fff;padding:20px}",""]),o.exports=t},171:function(o,r,e){"use strict";e(112)},172:function(o,r,e){var t=e(32)(!1);t.push([o.i,".code-copy{z-index:1000;cursor:pointer;padding:5px;margin-bottom:-30px;text-align:right}",""]),o.exports=t},85:function(o,r,e){"use strict";e.d(r,"b",(function(){return t})),e.d(r,"a",(function(){return l}));var t=function(o){var r=document.createElement("textarea");r.value=o,r.setAttribute("readonly",""),r.style.position="absolute",r.style.left="-9999px",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r)},l=new(e(1).a)}},[[123,125,2,126]]]);