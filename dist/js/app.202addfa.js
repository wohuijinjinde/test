(function(t){function e(e){for(var a,r,c=e[0],o=e[1],u=e[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"006d":function(t,e,n){},"0eca":function(t,e,n){},2395:function(t,e,n){},"2d3f":function(t,e,n){"use strict";var a=n("9db4"),i=n.n(a);i.a},"47d6":function(t,e,n){"use strict";var a=n("5abd"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[t.isMobile?n("router-view"):n("h1",[t._v("请在手机端上访问")])],1)])},s=[],r={name:"app",computed:{isMobile:function(){return document.body.clientWidth<500}}},c=r,o=(n("7c55"),n("2877")),u=Object(o["a"])(c,i,s,!1,null,null,null),l=u.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[n("animate-view")],1),n("header-nav",[n("i",{staticClass:"fa fa-qrcode icon-qrcode",attrs:{slot:"right"},slot:"right"})]),n("tab-list")],1)},g=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"left-box"},[t._t("left")],2),n("div",{staticClass:"center-box"},[t._t("center",[n("i",{staticClass:"fa fa-search"}),t._v(" "),n("label",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{for:"search"}}),n("input",{staticClass:"ipt-search",attrs:{id:"search",type:"text",placeholder:"请输入关键字..."}})])],2),n("div",{staticClass:"right-box"},[t._t("right")],2)])},v=[],m={name:"hearder"},b=m,h=(n("d53d"),Object(o["a"])(b,p,v,!1,null,"5eb93854",null)),w=h.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"tab-list"},t._l(t.tabs,(function(e,a){return n("li",{key:a,staticClass:"tab-item",class:{"is-active":a===t.activeTabIndex},on:{click:function(n){return t.toggleTab(e,a)}}},[t._v(" "+t._s(e)+" ")])})),0),n("ul",{staticClass:"news-list"},t._l(t.list,(function(e,a){return n("li",{key:a,staticClass:"news-item",on:{click:function(n){return t.toNews(e)}}},[n("div",{staticClass:"news-media"},[n("img",{staticClass:"news-thumbnail",attrs:{src:e.thumbnail}}),n("div",{staticClass:"news-profile"},[n("p",[t._v(t._s(e.title))]),n("p",{staticClass:"news-mark"},[e.isHot?n("Badge",{attrs:{text:"热点"}}):t._e(),n("span",[t._v(t._s(e.source))]),t._v(" "),n("span",[t._v(t._s(t._f("supplyTime")(e.time)))])],1)])])])})),0)])},_=[],C=(n("99af"),n("5530")),x=n("2f62"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"badge",style:{color:t.color,borderColor:t.color,fontSize:t.fontSize}},[t._v(t._s(t.text))])},j=[],k=(n("c975"),{name:"Badge",props:{color:{default:"#d33d3e",validator:function(t){return 0===t.indexOf("#")&&(4===t.length||7===t.length)}},text:{default:""},fontSize:{default:"12px"}}}),L=k,N=(n("cfad"),Object(o["a"])(L,O,j,!1,null,"a14160bc",null)),$=N.exports,T={name:"tabList",components:{Badge:$},data:function(){return{activeTabIndex:0}},computed:Object(C["a"])({},Object(x["c"])("Category",["categories"]),{},Object(x["c"])("List",["list"]),{tabs:function(){return["推荐","热点"].concat(this.categories)}}),methods:Object(C["a"])({},Object(x["b"])("Category",["getCategories"]),{},Object(x["b"])("List",["getListByCategory"]),{toggleTab:function(t,e){this.activeTabIndex=e,this.getListByCategory({category:t})},toNews:function(t){this.$router.push({path:"news",query:{id:t.id}})}}),created:function(){this.$nextTick((function(){this.getCategories(),this.getListByCategory({category:"推荐"})}))},filters:{supplyTime:function(t){return t.substring(0,10)}}},B=T,P=(n("2d3f"),Object(o["a"])(B,y,_,!1,null,"7c7c2c2a",null)),E=P.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.flag?n("div",{staticClass:"container"},[n("span",{staticClass:"btn-redirect",on:{click:t.redirect}},[t._v("点击进入"+t._s(t.time)+"s")])]):t._e()},S=[],I={name:"animateView",data:function(){return{time:5}},computed:{},methods:{redirect:function(){this.$store.commit("changeFlag")}},created:function(){},mounted:function(){},activated:function(){var t=this,e=setInterval((function(){t.time<=0?(t.$store.commit("changeFlag"),clearInterval(e)):t.time--}),1e3)}},q=I,z=(n("be57"),Object(o["a"])(q,M,S,!1,null,"08d20720",null)),F=z.exports,H={name:"index",components:{headerNav:w,animateView:F,tabList:E}},K=H,J=(n("47d6"),Object(o["a"])(K,d,g,!1,null,"ce406c42",null)),V=J.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("i",{staticClass:"fa fa-angle-left icon-header icon-bg",on:{click:t.toMain}}),t._m(0)]),n("div",{staticClass:"content"},[n("h2",[t._v(t._s(t.news.title))]),n("p",{staticClass:"news-profile"},[t._v(t._s(t.news.source)+" "+t._s(t.news.time))]),n("div",{domProps:{innerHTML:t._s(t.news.content)}}),n("ul",[t._m(1),t._l(t.news.keywords,(function(e,a){return n("li",{key:a,staticClass:"keyword-item"},[t._v(" "+t._s(e)+" ")])}))],2)])])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pull-right"},[n("i",{staticClass:"fa fa-search icon-header"}),n("i",{staticClass:"fa fa-share-alt icon-header"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"keyword-item"},[n("i",{staticClass:"fa fa-key"})])}],W={name:"NewsPage",mounted:function(){this.$nextTick((function(){this.getNews({id:this.$route.query.id})}))},computed:Object(C["a"])({},Object(x["c"])("News",["news"])),methods:Object(C["a"])({},Object(x["b"])("News",["getNews"]),{toMain:function(){this.$router.push("/")}})},D=W,G=(n("a6e9"),Object(o["a"])(D,A,R,!1,null,"c0d2d18e",null)),Q=G.exports;a["a"].use(f["a"]);var U=[{path:"/",name:"index",component:V,meta:{keepAlive:!0}},{path:"/news",name:"NewsPage",component:Q}],X=new f["a"]({mode:"history",base:"/",routes:U}),Y=X,Z=n("bc3a"),tt=n.n(Z),et={getCategories:function(t){tt.a.get("/api/data").then((function(e){console.log(e.data.Category),t(e.data.Category)}))}},nt={categories:[]},at={categories:function(t){return t.categories.data}},it={setCategories:function(t,e){t.categories=e}},st={getCategories:function(t){var e=t.commit;et.getCategories((function(t){e("setCategories",t)}))}},rt={namespaced:!0,state:nt,getters:at,mutations:it,actions:st},ct=(n("4de4"),{getListByCategory:function(t,e){var n=e.category;tt.a.get("/api/data").then((function(e){var a=[];switch(n){case"":a=e.data.List.data;break;case"推荐":a=e.data.List.data.filter((function(t){return t.isRec}));break;case"热点":a=e.data.List.data.filter((function(t){return t.isHot}));break;default:a=e.data.List.data.filter((function(t){return t.category===n}));break}t(a)}))},getListByKeyword:function(t,e){var n=e.keyword;tt.a.get("/api/data").then((function(e){t(e.data.List.data.filter((function(t){return t.title.indexOf(n)>-1})))}))}}),ot={list:[]},ut={list:function(t){return t.list}},lt={setList:function(t,e){t.list=e}},ft={getListByCategory:function(t,e){var n=t.commit;ct.getListByCategory((function(t){n("setList",t)}),e)},getListByKeyword:function(t,e){var n=t.commit;ct.getListByKeyword((function(t){n("setList",t)}),e)}},dt={namespaced:!0,state:ot,getters:ut,mutations:lt,actions:ft},gt=(n("7db0"),n("a9e3"),{getNews:function(t,e){var n=e.id;tt.a.get("/api/data").then((function(e){var a=e.data.List.data.find((function(t){return t.id===Number(n)})),i=e.data.News.data.find((function(t){return t.id===Number(n)}));t(Object.assign(a,i))}))}}),pt={news:[]},vt={news:function(t){return t.news}},mt={setNews:function(t,e){t.news=e}},bt={getNews:function(t,e){var n=t.commit;gt.getNews((function(t){console.log(t),n("setNews",t)}),e)}},ht={namespaced:!0,state:pt,getters:vt,mutations:mt,actions:bt};a["a"].use(x["a"]);var wt=new x["a"].Store({state:{flag:!0},mutations:{changeFlag:function(t){t.flag=!1}},actions:{},modules:{Category:rt,List:dt,News:ht}});n("601f"),n("1f54");a["a"].config.productionTip=!1,a["a"].config.devtools=!0,new a["a"]({router:Y,store:wt,render:function(t){return t(l)}}).$mount("#app")},"5abd":function(t,e,n){},"601f":function(t,e,n){},"7c55":function(t,e,n){"use strict";var a=n("2395"),i=n.n(a);i.a},"9db4":function(t,e,n){},a6e9:function(t,e,n){"use strict";var a=n("f056"),i=n.n(a);i.a},bc60:function(t,e,n){},be57:function(t,e,n){"use strict";var a=n("006d"),i=n.n(a);i.a},cfad:function(t,e,n){"use strict";var a=n("0eca"),i=n.n(a);i.a},d53d:function(t,e,n){"use strict";var a=n("bc60"),i=n.n(a);i.a},f056:function(t,e,n){}});
//# sourceMappingURL=app.202addfa.js.map