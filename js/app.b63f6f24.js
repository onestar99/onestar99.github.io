(function(){"use strict";var t={5040:function(t,n,a){var e=a(5130),r=a(6768);const o={id:"app"},i={class:"main-content"};function s(t,n,a,e,s,l){const c=(0,r.g2)("MainSidebar"),d=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(c),(0,r.Lk)("div",i,[(0,r.bF)(d)])])}var l=a.p+"img/profile.2dd88b44.jpg";const c={class:"main-sidebar"},d=(0,r.Fv)('<img src="'+l+'" alt="프로필 이미지" class="profile-image" data-v-46a73a24><h1 data-v-46a73a24>개발자 onestar99</h1><div class="starwars-demo" data-v-46a73a24><p data-v-46a73a24>멀리 있는 은하계에서...<br data-v-46a73a24> 아름다운 푸른별 1999년, 작은 개발자가 태어나게 된다...<br data-v-46a73a24> 컴퓨터를 좋아하던 어린 아이는 점차 자라 게임을 좋아하게 되고 개발에 흥미를 가지게된다...<br data-v-46a73a24> 건국대학교 소프트웨어학과에 진학하여, 작은 레벨부터 성장해 어느 덧 개인 사이트를 직접 만들고 되는데...<br data-v-46a73a24> 백엔드 개발자가 되어 전세계 위에 서겠다는 그의 야망은 그를 성장시키고 어느덧 졸업을 앞두게 된다.<br data-v-46a73a24> C로 시작된 개발은 C++, JAVA를 맞이하며 성장통을 겪는다. 자료 구조를 공부하고 웹 프로그래밍을 공부한다, 시스템 프로그래밍과 리눅스를 만난 후 2년의 수련 시간을 거치게 된다.<br data-v-46a73a24> 이후 운영체제에 대한 공부와 안드로이드 앱 개발, 코틀린을 공부하였고, DB와 SQL에 대해 배우게 된다.<br data-v-46a73a24> 3학년 2학기, 머신러닝에 대해 공부를 시작하였고 scikit-learn과 pytorch를 통해 공부를 한다.<br data-v-46a73a24> opencv를 통한 컴퓨터 비전을 공부하였고, 언리얼 엔진4와 계속해서 따로 스프링부트와 AWS 클라우드 기술을 공부한다. </p></div><div class="sidebar-slogan" data-v-46a73a24><p data-v-46a73a24></p></div>',4),u=[d];function p(t,n,a,e,o,i){return(0,r.uX)(),(0,r.CE)("div",c,u)}var v={name:"MainSidebar",mounted(){this.animateText()},methods:{animateText(){const t=["개발자로서..","내가","정.","점에","서겠다."];let n=0;const a=this.$el.querySelector(".sidebar-slogan p"),e=()=>{n<t.length&&(a.innerHTML+=(n>0?" ":"")+t[n],n++,setTimeout(e,2e3))};e()}}},f=a(1241);const m=(0,f.A)(v,[["render",p],["__scopeId","data-v-46a73a24"]]);var g=m,b={name:"App",components:{MainSidebar:g}};const h=(0,f.A)(b,[["render",s]]);var k=h,_=a(1387),w=a.p+"img/space-home.81a08ab9.jpg",y=a.p+"img/planet1.0c106e40.png",L=a.p+"img/planet2.3dff9da2.png",M=a.p+"img/planet3.ff2a6075.png",A=a.p+"img/starrail.5e94e7dd.png";const C=t=>((0,r.Qi)("data-v-4fc3b906"),t=t(),(0,r.jt)(),t),E={class:"home-container"},O=C((()=>(0,r.Lk)("img",{src:w,alt:"Home Background",class:"background-image"},null,-1))),j={class:"planets"},x=C((()=>(0,r.Lk)("img",{src:y,alt:"Planet 1",class:"planet",style:{top:"20%",left:"30%"}},null,-1))),F=C((()=>(0,r.Lk)("img",{src:L,alt:"Planet 2",class:"planet",style:{top:"50%",left:"60%"}},null,-1))),S=C((()=>(0,r.Lk)("img",{src:M,alt:"Planet 3",class:"planet",style:{top:"13%",left:"80%"}},null,-1))),T=C((()=>(0,r.Lk)("img",{src:A,alt:"Star Rail",class:"starrail"},null,-1)));function X(t,n,a,e,o,i){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",E,[O,(0,r.Lk)("div",j,[(0,r.bF)(s,{to:"/blog"},{default:(0,r.k6)((()=>[x])),_:1}),(0,r.bF)(s,{to:"/news"},{default:(0,r.k6)((()=>[F])),_:1}),(0,r.bF)(s,{to:"/game"},{default:(0,r.k6)((()=>[S])),_:1})]),T])}var P={name:"Home-main"};const H=(0,f.A)(P,[["render",X],["__scopeId","data-v-4fc3b906"]]);var I=H,B=a(4232);const N={class:"blog-list"};function $(t,n,a,e,o,i){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",N,[(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.posts,(t=>((0,r.uX)(),(0,r.CE)("li",{key:t.id},[(0,r.bF)(s,{to:`/blog/${t.id}`,class:"blog-link"},{default:(0,r.k6)((()=>[(0,r.eW)((0,B.v_)(t.title),1)])),_:2},1032,["to"])])))),128))])])}var G=JSON.parse('[{"id":"1","title":"첫 블로그 글을 게시하며..."},{"id":"2","title":"원신 특성 소재 선택 가이드"},{"id":"3","title":"\'요리조리\' 레시피 사이트의 백엔드를 맡아 진행하며 생겼던 치명적 문제들"},{"id":"4","title":"셀레니움 최신 버전에 대한 대응"},{"id":"5","title":"파이썬 스킬"},{"id":"6","title":"[SpringBoot] JWT 토큰방식과 Session 방식에 관한 고민"}]'),J={data(){return{posts:G}}};const Q=(0,f.A)(J,[["render",$],["__scopeId","data-v-ef9524d0"]]);var W=Q;const K=t=>((0,r.Qi)("data-v-163cd6dc"),t=t(),(0,r.jt)(),t),q=["innerHTML"],D=K((()=>(0,r.Lk)("div",{class:"bottom-bar"},null,-1)));function R(t,n,a,e,o,i){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",{innerHTML:o.convertedMarkdown,class:"main-content"},null,8,q),D],64)}var V=a(6226),z=a(1017),U=a.n(z),Y={props:["id"],data(){return{convertedMarkdown:""}},mounted(){fetch(`/blogmd/${this.id}.md`).then((t=>t.text())).then((t=>{this.convertedMarkdown=V.xI.parse(t),this.$nextTick((()=>{U().highlightAll()}))}))}};const Z=(0,f.A)(Y,[["render",R],["__scopeId","data-v-163cd6dc"]]);var tt=Z;function nt(t,n,a,e,o,i){return(0,r.uX)(),(0,r.CE)("div",null,"News Main Page")}var at={name:"NewsMain"};const et=(0,f.A)(at,[["render",nt]]);var rt=et;function ot(t,n,a,e,o,i){return(0,r.uX)(),(0,r.CE)("div",null,"Game Main Page")}var it={name:"GameMain"};const st=(0,f.A)(it,[["render",ot]]);var lt=st;const ct=[{path:"/",name:"Home",component:I},{path:"/blog",name:"Blog",component:W},{path:"/blog/:id",name:"BlogPost",component:tt,props:!0},{path:"/news",name:"News",component:rt},{path:"/game",name:"Game",component:lt}],dt=(0,_.aE)({history:(0,_.LA)("/"),routes:ct});var ut=dt;(0,e.Ef)(k).use(ut).mount("#app")}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(n,e,r,o){if(!e){var i=1/0;for(d=0;d<t.length;d++){e=t[d][0],r=t[d][1],o=t[d][2];for(var s=!0,l=0;l<e.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](e[l])}))?e.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(d--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[e,r,o]}}(),function(){a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,{a:n}),n}}(),function(){a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,o,i=e[0],s=e[1],l=e[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(n&&n(e);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},e=self["webpackChunkonestar99_github_io"]=self["webpackChunkonestar99_github_io"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=a.O(void 0,[504],(function(){return a(5040)}));e=a.O(e)})();
//# sourceMappingURL=app.b63f6f24.js.map