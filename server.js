!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=14)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-router-dom")},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(c=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}var c,o,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-loadable")},function(e){e.exports=JSON.parse('{"entrypoints":["main"],"origins":{"main":[0]},"assets":{"0":{"css":[{"file":"main.css","hash":"1da9e5a355073700da0f","publicPath":"/main.css"}],"js":[{"file":"bundle.js","hash":"1da9e5a355073700da0f","publicPath":"/bundle.js"}]}}}')},function(e,n){e.exports=require("cors")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("react-loadable-ssr-addon")},function(e,n){e.exports=require("isomorphic-fetch")},function(e,n,t){"use strict";var r=t(2),a=t.n(r)()(!1);a.push([e.i,".filterSection{border-radius:1rem;margin-bottom:1rem}@media screen and (max-width:1024px) and (min-width:700px){.filterSection{width:30%}}@media screen and (max-width:700px){.filterSection{width:100%}}@media screen and (min-width:1024px){.filterSection{width:18%}}.filterData{background-color:#fff;}.filterHeading{font-size:10rem;margin:0 4rem;font-weight:700;padding-top:5px;letter-spacing:0}.filterSubHeading{border-bottom:.5rem solid #cbcbcb;text-align:center;font-size:7rem;font-weight:600;width:74%;color:#000;margin:auto;padding-top:2rem}.filterOptions{margin:2rem 6rem;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}a{background-color:#c3e09d;padding:0 7rem;border-radius:1rem;font-size:7rem;color:#000;font-weight:500;max-width: 12rem;margin:4rem 3rem;text-transform:capitalize}.activeLink{background-color:green}",""])},function(e,n,t){"use strict";var r=t(2),a=t.n(r)()(!1);a.push([e.i,".launchDisplay{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin-left:10rem}@media screen and (max-width:1024px) and (min-width:700px){.launchDisplay{width:68%;display:flex;flex-direction:row;flex-wrap:wrap}}@media screen and (max-width:1024px) and (min-width:700px){.launchDisplay{width:70%}}@media screen and (max-width:700px){.launchDisplay{width:100%}}@media screen and (min-width:1024px){.launchDisplay{width:82%}}.launchDisplay>div .imgBg{background-color:#f2f2f2;text-align:center;margin-bottom:6rem;width:72rem;height:72rem;padding:2rem}.launchDisplay>div{background-color:#fff;border-radius:2rem;color:#424794;padding:7rem;margin-bottom:8rem;margin-right:2rem;max-width:76rem;max-height:155rem}.launchInfo span:nth-child(1){font-size:6rem;color:#000;font-weight:800;margin-top:5rem}.launchInfo span:nth-child(2){font-size:6rem;color:#424794;font-weight:500}.imgBg{background-color:#f2f2f2;text-align:center;margin-bottom:6rem;width:72rem;height:72rem;padding:2rem}.launchName{font-weight:700;font-size:8rem;margin-bottom:2rem}",""])},function(e,n,t){"use strict";var r=t(2),a=t.n(r)()(!1);a.push([e.i,".footer{\r\n    font-size:10rem;\r\n    display:flex;\r\n    justify-content:center;\r\n        width:100%\r\n}\r\n@media screen and (max-width:700px){\r\n    .footer{\r\n        flex-direction:column;     \r\n    }\r\n}\r\n@media screen and (min-width: 701px){\r\n    .footer{\r\n        flex-direction:row;\r\n    }\r\n}",""])},function(e,n,t){"use strict";var r=t(2),a=t.n(r)()(!1);a.push([e.i,'main{margin:2em}body,html{margin:0;padding:0;border:0;vertical-align:baseline;max-width:100%;overflow-x:hidden}body{font-family:"San Fransisco",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvatica Neue",Helvatica,sans-serif;font-size:1rem;line-height:1.65;color:#333;background-color:#f2f2f2;max-width:100%;overflow-x:hidden}a{text-decoration:none}@media screen and (max-width:700px){html{font-size:1vw}}@media screen and (max-width:1024px) and (min-width:700px){html{font-size:.35vw}}@media screen and (min-width:1024px){html{font-size:.2vw}}.mainHeading{font-size:9em;font-weight:700;letter-spacing:.2rem;margin-top:-3rem;display:inline-block;margin-left:5px}@media screen and (max-width:700px){.mainContainer{display:flex;flex-direction:column;justify-content:space-between}}@media screen and (max-width: 1024px) and (min-width:701px){.mainContainer{display:flex;flex-direction:row;justify-content:space-between}}@media screen and (min-width: 1024px) {.mainContainer{display:flex;flex-direction:row;justify-content:space-between}}',""])},function(e,n,t){"use strict";t.r(n);var r=t(3),a=t.n(r),i=t(6),c=t.n(i),o=t(0),l=t.n(o),u=t(7),s=t(1),f=t(4),m=t.n(f),d=t(8),p=(t(10),function(e,n,t){if(!e&&t)return"?".concat(n,"=").concat(t);if(!e&&!t)return"";if(!(e.indexOf(n)>-1))return["launchSuccess","landSuccess"].includes(n)?t?"".concat(e,"&").concat(n,"=").concat(t):"".concat(e):"".concat(e,"&").concat(n,"=").concat(t);if(["launchSuccess","landSuccess"].includes(n)){if(t)return e;var r=e.split("?")[1].split("&").filter((function(e){return-1==e.indexOf(n)}));if(r.length>0)return"?".concat(r.join("&"))}else{if(!(e.indexOf(t)>-1))return"".concat(e.replace(e.split("year=")[1].substr(0,4),t));var a=e.split("?")[1].split("&").filter((function(e){return-1==e.indexOf(n)}));if(a.length>0)return"?".concat(a.join("&"))}return""}),h=function(e){var n=e.year,t=e.urlParams,r=e.routeProps,a=e.setYear,i=e.setLaunchSuccess,c=e.setLandingSuccess,o=t?t.split("/").length>1?t.split("/")[1]:"":r&&r.location&&r.location.search?r.location.search:"",u=["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];u=u.map((function(e){return l.a.createElement(s.Link,{className:o.indexOf(e)>-1?"activeLink":"",to:"".concat(p(o,"year",e)),key:e,onClick:function(){return a(null===n||n!=e?e:null)}},e)}));var f=[!0,!1];f=f.map((function(e){return l.a.createElement(s.Link,{to:"".concat(p(o,"launchSuccess",e)),key:"launchSuccess-".concat(e),className:"".concat(o.indexOf("launchSuccess=".concat(e))>-1?"activeLink":""),onClick:function(){return i(e)}},"".concat(e))}));var m=[!0,!1];return m=m.map((function(e){return l.a.createElement(s.Link,{to:"".concat(p(o,"launchSuccess",e)),key:"landSuccess-".concat(e),onClick:function(){return c(e)},className:o.indexOf("landSuccess=".concat(e))>-1?"activeLink":""},"".concat(e))})),l.a.createElement("div",{className:"filterSection"},l.a.createElement("div",{className:"filterData"},l.a.createElement("div",{className:"filterHeading"}," Filters "),l.a.createElement("div",{className:"filterSubHeading"},"Launch Year"),l.a.createElement("div",{className:"filterOptions"},u),l.a.createElement("div",{className:"filterSubHeading"},"Successful Launch"),l.a.createElement("div",{className:"filterOptions"},f),l.a.createElement("div",{className:"filterSubHeading"},"Successful Landing"),l.a.createElement("div",{className:"filterOptions"},m)))};t(11);function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return t}(e,n)||b(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){if(e){if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var x=function(e){var n=e.launchData,t=y(Object(o.useState)(n.slice(0,20)),2),r=t[0],a=t[1],i=y(Object(o.useState)(20),2),c=i[0],u=i[1];Object(o.useEffect)((function(){r!=n&&a(n);var e=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var t=e.target;t.src=t.dataset.src,t.classList.remove("lzy-img"),n.unobserve(t)}}))}),{rootMargin:"900px"});document.querySelectorAll("img.lzy-img").forEach((function(n){e.observe(n)}));var t=0,i=new IntersectionObserver((function(e,i){e.forEach((function(e){if(e.isIntersecting){t++;var o=e.target;o.classList.remove("lzy-div"),20==t&&r.length<100&&(a([].concat(g(r),g(n.slice(c,c+20)))),u(r.length+20)),i.unobserve(o)}}))}),{rootMargin:"900px"});document.querySelectorAll("div.lzy-div").forEach((function(e){i.observe(e)}))}),[r,n]);var s=r.map((function(e,n){return l.a.createElement("div",{key:e.mn,className:"lzy-div"},l.a.createElement("div",{className:"imgBg"},e.img?l.a.createElement("img",{width:"200",height:"200",className:"lzy-img","data-src":e.img,alt:e.mn}):null),l.a.createElement("div",{className:"launchName"},"".concat(e.mn," #").concat(n+1)),e.mId.length>0?l.a.createElement("div",{className:"missions"},l.a.createElement("span",null,"Mission Ids:"),l.a.createElement("ul",null,e.mId.map((function(e){return l.a.createElement("li",{key:e},e)})))):null,l.a.createElement("div",{className:"launchInfo"},l.a.createElement("span",null,"Launch Year: "),l.a.createElement("span",null,e.yr)),l.a.createElement("div",{className:"launchInfo"},l.a.createElement("span",null,"Successful Launch: "),l.a.createElement("span",null,"".concat(e.launchSucc))),null!==e.landSucc?l.a.createElement("div",{className:"launchInfo"},l.a.createElement("span",null,"Successful Landing: "),l.a.createElement("span",null,"".concat(e.landSucc))):null)}));return l.a.createElement("div",{className:"launchDisplay"},s)},w=(t(12),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",null,"Developed by: "),l.a.createElement("div",null," Poonam Verma"))}),S=t(9),O=t.n(S);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){N(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r="https://api.spacexdata.com/v3/launches?limit=100";return n&&(r+="&launch_success=true"),t&&(r+="&land_success=true"),e&&(r+="&launch_year=".concat(e)),O()(r).then((function(e){return e.json()})).then((function(e){return{launchData:e.map((function(e){return E({},{mn:e.mission_name,mId:e.mission_id,yr:e.launch_year,launchSucc:e.launch_success,img:e.links.mission_patch_small,landSucc:e.rocket.first_stage.cores[0].land_success})}))}})).catch((function(e){console.log("Oops! There is some problem, in fetching data."+e)}))};t(13);function D(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var k=function(e){var n=e.launchData,t=e.urlParams,r=e.routeProps,a=D(Object(o.useState)(null),2),i=a[0],c=a[1],u=D(Object(o.useState)(null),2),s=u[0],f=u[1],m=D(Object(o.useState)(null),2),d=m[0],p=m[1],g=D(Object(o.useState)(null),2),y=g[0],b=g[1];Object(o.useEffect)((function(){null===s&&null===d&&null===i||A(i,s,d).then((function(e){b(e.launchData)}))}),[i,s,d]);var v=y||n;return l.a.createElement("main",null,l.a.createElement("div",{className:"mainHeading"},"SpaceX Launch Programs"),l.a.createElement("div",{className:"mainContainer"},l.a.createElement(h,{year:i,urlParams:t,routeProps:r,setYear:c,setLaunchSuccess:f,setLandingSuccess:p}),l.a.createElement(x,{launchData:y||v})),l.a.createElement(w,null))},I=function(e){var n=e.initialData,t=n.reqUrl?n.reqUrl:"";return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.Switch,null,l.a.createElement(s.Route,{exact:!0,path:"/",render:function(e){return l.a.createElement(k,{routeProps:e,launchData:n.launchData,urlParams:e.location.key?"":t})}}),l.a.createElement(s.Route,{path:"/:id",render:function(e){return l.a.createElement(k,{routeProps:e,launchData:n.launchData,urlParams:t})}})))},L=t(5);function _(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var q=a()(),C=process.env.PORT||3001;q.use(c()()),q.use(a.a.static("public")),q.get("/",(function(e,n,t){var r={reqUrl:e.url},a=e.url.indexOf("year="),i=null;a>-1&&(i=e.url.substring(a+1,6)),A(i,e.url.indexOf("launchSuccess")>-1,e.url.indexOf("landingSuccess")>-1).then((function(e){r.launchData=e.launchData;var t=new Set,a=Object(u.renderToString)(l.a.createElement(m.a.Capture,{report:function(e){return t.add(e)}},l.a.createElement(s.StaticRouter,null,l.a.createElement(I,{initialData:r})))),i=Object(d.getBundles)(L,[].concat(_(L.entrypoints),_(Array.from(t)))),c=i.css||[],o=i.js||[];n.send('\n            <!DOCTYPE html>\n            <html lang="en">\n            <head>\n                <meta charset="utf-8" />\n                <meta name="viewport" content="width=device-width, initial-scale=1" />\n                <meta name="description" content="SpaceX Launches SSR Web site"/>\n                <title>SpaaceX Launches SSR App</title>\n                '.concat(c.map((function(e){return'<link href="/'.concat(e.file,'" rel="stylesheet" />')})).join("\n"),"\n                <script>window.__INITIAL_DATA__ = ").concat(JSON.stringify(r),'<\/script>\n            </head>\n            <body>\n                <noscript>You need to enable JavaScript to run this app.</noscript>\n                <div id="root">').concat(a,"</div>\n                ").concat(o.map((function(e){return'<script src="/'.concat(e.file,'"><\/script>')})).join("\n"),"\n            </body>\n            </html>\n            "))})).catch((function(e){console.log({err:e})}))})),m.a.preloadAll().then((function(){q.listen(C,(function(){console.log("Running on port"+C)}))})).catch((function(e){console.log(e)}))}]);