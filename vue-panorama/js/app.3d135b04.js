(function(e){function t(t){for(var r,u,i=t[0],c=t[1],p=t[2],l=0,f=[];l<i.length;l++)u=i[l],o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"49f2":function(e,t,n){},"4b61":function(e,t,n){"use strict";var r=n("49f2"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{msg:"VueJS Panorama Viewer"}}),n("Panorama",{staticClass:"pano",attrs:{source:e.url1,caption:e.caption}}),n("Panorama",{staticClass:"pano",attrs:{source:e.url2,caption:e.caption}})],1)},a=[],u=n("a5f7"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Embed panorama photos on your website with Panorama Viewer"),n("br"),e._v("\n    VueJS version of\n    "),n("a",{attrs:{href:"https://github.com/peachananr/panorama_viewer",target:"_blank",rel:"noopener"}},[e._v("JQuery Panorama Viewer")]),e._v(".\n  ")])}],p={name:"HelloWorld",props:{msg:String}},s=p,l=(n("4b61"),n("2877")),f=Object(l["a"])(s,i,c,!1,null,"20f0b4a3",null),d=f.exports,m={name:"app",components:{Header:d,Panorama:u},data:function(){return{url1:"http://www.thepetedesign.com/demos/panorama_viewer/demo_photo4.jpg",url2:"http://www.thepetedesign.com/demos/panorama_viewer/demo_photo.jpg",caption:"Photo by DAVID ILIFF. License: CC-BY-SA 3.0"}}},h=m,v=(n("034f"),Object(l["a"])(h,o,a,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.3d135b04.js.map