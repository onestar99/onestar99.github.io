(function(){"use strict";var n={8851:function(n,t,e){var r=e(5130),a=e(6768);const o={id:"app"},i={class:"main-content"};function l(n,t,e,r,l,s){const u=(0,a.g2)("MainSidebar"),c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(u),(0,a.Lk)("div",i,[(0,a.bF)(c)])])}var s=e.p+"img/profile.2dd88b44.jpg";const u=n=>((0,a.Qi)("data-v-0bd14788"),n=n(),(0,a.jt)(),n),c={class:"main-sidebar"},d=u((()=>(0,a.Lk)("img",{src:s,alt:"프로필 이미지",class:"profile-image"},null,-1))),p=u((()=>(0,a.Lk)("h1",null,"개발자 정한별",-1))),f=u((()=>(0,a.Lk)("div",{class:"starwars-demo"},[(0,a.Lk)("p",null,[(0,a.eW)("이것은 1999년. 멀리 있는 은하계에서..."),(0,a.Lk)("br"),(0,a.eW)(" 아름다운 푸른별에서 태어난 어린 개발자의 성장기이다..."),(0,a.Lk)("br"),(0,a.eW)(" 컴퓨터를 좋아하던 어린 아이는 점차 자라 게임을 좋아하게 되고 개발에 흥미를 가지게된다..."),(0,a.Lk)("br"),(0,a.eW)(" 건국대학교 소프트웨어학과에 진학하여 작은 레벨부터 성장하여 어느 덧 개인 사이트를 직접 만들기까지 한다..."),(0,a.Lk)("br"),(0,a.eW)(" 백엔드 개발자가 되어 전세계 위에 서겠다는 그의 야망은 그를 성장시키고 어느덧 졸업을 앞두게 되는데... ")])],-1))),m=u((()=>(0,a.Lk)("div",{class:"sidebar-slogan"},[(0,a.Lk)("p")],-1))),v=[d,p,f,m];function g(n,t,e,r,o,i){return(0,a.uX)(),(0,a.CE)("div",c,v)}var b={name:"MainSidebar",mounted(){this.animateText()},methods:{animateText(){const n=["개발자로서..","내가","정.","점에","서겠다."];let t=0;const e=this.$el.querySelector(".sidebar-slogan p"),r=()=>{t<n.length&&(e.innerHTML+=(t>0?" ":"")+n[t],t++,setTimeout(r,2e3))};r()}}},h=e(1241);const k=(0,h.A)(b,[["render",g],["__scopeId","data-v-0bd14788"]]);var L=k,w={name:"App",components:{MainSidebar:L}};const _=(0,h.A)(w,[["render",l]]);var y=_,M=e(1387),E=e.p+"img/space-home.81a08ab9.jpg",C=e.p+"img/planet1.0c106e40.png",O=e.p+"img/planet2.3dff9da2.png",j=e.p+"img/planet3.ff2a6075.png",x=e.p+"img/starrail.5e94e7dd.png";const A=n=>((0,a.Qi)("data-v-4fc3b906"),n=n(),(0,a.jt)(),n),P={class:"home-container"},X=A((()=>(0,a.Lk)("img",{src:E,alt:"Home Background",class:"background-image"},null,-1))),F={class:"planets"},T=A((()=>(0,a.Lk)("img",{src:C,alt:"Planet 1",class:"planet",style:{top:"20%",left:"30%"}},null,-1))),H=A((()=>(0,a.Lk)("img",{src:O,alt:"Planet 2",class:"planet",style:{top:"50%",left:"60%"}},null,-1))),W=A((()=>(0,a.Lk)("img",{src:j,alt:"Planet 3",class:"planet",style:{top:"13%",left:"80%"}},null,-1))),S=A((()=>(0,a.Lk)("img",{src:x,alt:"Star Rail",class:"starrail"},null,-1)));function I(n,t,e,r,o,i){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",P,[X,(0,a.Lk)("div",F,[(0,a.bF)(l,{to:"/blog"},{default:(0,a.k6)((()=>[T])),_:1}),(0,a.bF)(l,{to:"/news"},{default:(0,a.k6)((()=>[H])),_:1}),(0,a.bF)(l,{to:"/game"},{default:(0,a.k6)((()=>[W])),_:1})]),S])}var $={name:"Home-main"};const B=(0,h.A)($,[["render",I],["__scopeId","data-v-4fc3b906"]]);var G=B,N=e(4232);function Q(n,t,e,r,o,i){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.posts,(n=>((0,a.uX)(),(0,a.CE)("li",{key:n},[(0,a.bF)(l,{to:`/blog/${n}`},{default:(0,a.k6)((()=>[(0,a.eW)((0,N.v_)(`Post ${n}`),1)])),_:2},1032,["to"])])))),128))])])}var q={data(){return{posts:[1,2,3,104]}}};const K=(0,h.A)(q,[["render",Q]]);var R=K;const z=["innerHTML"];function D(n,t,e,r,o,i){return(0,a.uX)(),(0,a.CE)("div",{innerHTML:o.convertedMarkdown},null,8,z)}var J=e(6226),U={props:["id"],data(){return{convertedMarkdown:""}},mounted(){fetch(`/blogmd/${this.id}.md`).then((n=>n.text())).then((n=>{this.convertedMarkdown=J.xI.parse(n)}))}};const V=(0,h.A)(U,[["render",D]]);var Y=V;function Z(n,t,e,r,o,i){return(0,a.uX)(),(0,a.CE)("div",null,"News Main Page")}var nn={name:"NewsMain"};const tn=(0,h.A)(nn,[["render",Z]]);var en=tn;function rn(n,t,e,r,o,i){return(0,a.uX)(),(0,a.CE)("div",null,"Game Main Page")}var an={name:"GameMain"};const on=(0,h.A)(an,[["render",rn]]);var ln=on;const sn=[{path:"/",name:"Home",component:G},{path:"/blog",name:"Blog",component:R},{path:"/blog/:id",name:"BlogPost",component:Y,props:!0},{path:"/news",name:"News",component:en},{path:"/game",name:"Game",component:ln}],un=(0,M.aE)({history:(0,M.LA)("/"),routes:sn});var cn=un;(0,r.Ef)(y).use(cn).mount("#app")}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return n[r].call(o.exports,o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,r,a,o){if(!r){var i=1/0;for(c=0;c<n.length;c++){r=n[c][0],a=n[c][1],o=n[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){n.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[r,a,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/"}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((function(t){return 0!==n[t]}))){for(a in l)e.o(l,a)&&(e.m[a]=l[a]);if(s)var c=s(e)}for(t&&t(r);u<i.length;u++)o=i[u],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(c)},r=self["webpackChunkonestar99_github_io"]=self["webpackChunkonestar99_github_io"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(8851)}));r=e.O(r)})();
//# sourceMappingURL=app.ac44cccb.js.map