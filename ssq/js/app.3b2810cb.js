(function(t){function e(e){for(var r,a,l=e[0],i=e[1],u=e[2],c=0,d=[];c<l.length;c++)a=l[c],o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function l(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a20e0433"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"0e1ff5e0"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var u=s[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],c=u.getAttribute("data-href");if(c===r||c===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete a[t],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(t),u=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18fe":function(t,e,n){},4733:function(t,e,n){"use strict";var r=n("a231"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iCountUp"},[n("ICountUp",{attrs:{startVal:t.startVal,endVal:t.endVal1,options:t.options},on:{ready:t.onReady1}}),t._v("\n      \n    "),n("ICountUp",{attrs:{startVal:t.startVal,endVal:t.endVal2,options:t.options},on:{ready:t.onReady2}}),t._v("      \n      \n    "),n("ICountUp",{attrs:{startVal:t.startVal,endVal:t.endVal3,options:t.options},on:{ready:t.onReady3}}),t._v("  \n      \n    "),n("ICountUp",{attrs:{startVal:t.startVal,endVal:t.endVal4,options:t.options},on:{ready:t.onReady4}}),t._v("  \n      \n    "),n("ICountUp",{attrs:{startVal:t.startVal,endVal:t.endVal5,options:t.options},on:{ready:t.onReady5}}),t._v("  \n      \n    "),n("ICountUp",{attrs:{startVal:t.startVal,endVal:t.endVal6,options:t.options},on:{ready:t.onReady6}}),t._v(" \n      \n    "),n("ICountUp",{staticClass:"blueOne",attrs:{startVal:t.startVal,endVal:t.endVal7,options:t.options},on:{ready:t.onReady7}}),n("div",{staticClass:"caibtn"},[n("button",{on:{click:t.goRandom}},[t._v("碰撞")]),n("button",{on:{click:t.goCollect}},[t._v("收藏")])]),n("div",{staticClass:"list"},t._l(t.history,function(e,r){return n("div",[t._v(t._s(e)+"  \n          "),n("button",{on:{click:function(e){return t.goDelete(r)}}},[t._v("X")])])}),0)],1)},o=[],s=n("75fc"),l=(n("55dd"),n("f499")),i=n.n(l),u=n("1ddb"),c=n.n(u),d={name:"demo",components:{ICountUp:c.a},data:function(){return{readyTo:[],history:[],startVal:0,endVal1:0,endVal2:0,endVal3:0,endVal4:0,endVal5:0,endVal6:0,endVal7:0,options:{useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:"",duration:7},arrList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],arrList2:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}},methods:{onReady1:function(t,e){var n=this;t.update(n.endVal1)},onReady2:function(t,e){var n=this;t.update(n.endVal2)},onReady3:function(t,e){var n=this;t.update(n.endVal3)},onReady4:function(t,e){var n=this;t.update(n.endVal4)},onReady5:function(t,e){var n=this;t.update(n.endVal5)},onReady6:function(t,e){var n=this;t.update(n.endVal6)},onReady7:function(t,e){var n=this;t.update(n.endVal7)},goDelete:function(t){this.history.splice(t,1),localStorage.setItem("sscode",i()(this.history))},goCollect:function(){if(localStorage.getItem("sscode")){var t=JSON.parse(localStorage.getItem("sscode"));t.push(this.readyTo);var e=i()(t);localStorage.setItem("sscode",e)}else{var n=[];n.push(this.readyTo);var r=i()(n);localStorage.setItem("sscode",r)}this.history=JSON.parse(localStorage.getItem("sscode"))},goRandom:function(){var t=this.getArrayItems(this.arrList,6);console.log(t),t.sort(function(t,e){return t-e}),this.endVal1=t[0],this.endVal2=t[1],this.endVal3=t[2],this.endVal4=t[3],this.endVal5=t[4],this.endVal6=t[5];var e=this.getArrayItems(this.arrList2,1);this.endVal7=e[0],this.readyTo=[].concat(Object(s["a"])(t),Object(s["a"])(e))},getArrayItems:function(t,e){var n=new Array;for(var r in t)n.push(t[r]);for(var a=new Array,o=0;o<e;o++){if(!(n.length>0))break;var s=Math.floor(Math.random()*n.length);a[o]=n[s],n.splice(s,1)}return a}}},p=d,f=(n("4733"),n("2877")),h=Object(f["a"])(p,a,o,!1,null,"4a095121",null),v=h.exports,g=n("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},_=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],V={name:"HelloWorld",props:{msg:String}},j=V,k=(n("ccd1"),Object(f["a"])(j,b,y,!1,null,"379548a4",null)),w=k.exports,C={name:"home",components:{HelloWorld:w}},I=C,E=Object(f["a"])(I,m,_,!1,null,null,null),O=E.exports;r["a"].use(g["a"]);var S=new g["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),R=n("2f62");r["a"].use(R["a"]);var x=new R["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:x,render:function(t){return t(v)}}).$mount("#app")},a231:function(t,e,n){},ccd1:function(t,e,n){"use strict";var r=n("18fe"),a=n.n(r);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});