(this.webpackJsonp02_gif_expert=this.webpackJsonp02_gif_expert||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(11),r=n.n(c),i=(n(19),n(6)),s=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),t([r]),o("")},children:Object(s.jsx)("input",{className:"form-control",placeholder:"Search...",type:"text",value:r,onChange:function(e){o(e.target.value)}})})},j=n(2),u=n(7),d=function(e){var t=e.id,n=e.title,a=e.img;return Object(s.jsxs)(u.a,{className:"animate__animated animate__fadeIn",style:{width:"18rem",height:"100%"},children:[Object(s.jsx)(u.a.Img,{variant:"top",src:a,height:200}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsx)(u.a.Title,{children:n}),Object(s.jsx)(u.a.Text,{})]})]},t)},l=n(24),b=n(25),h=n(10),f=n.n(h),m=n(13),O=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return n="https://api.giphy.com/v1/gifs/search?api_key=E813qUR8a8ZJa0CE5bhG8LwYLLPhut6h&q=".concat(encodeURI(t),"&offset=0&limit=10"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,img:null===(t=e.images)||void 0===t?void 0:t.downsized_large.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(14),g=n.n(x),p=function(e){e.loading;return Object(s.jsx)(g.a,{type:"bubbles",color:"#20232a",height:100,width:100})},v=function(e){var t=e.category,n=(e.setLoading,function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){O(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t)),c=n.data,r=n.loading;return Object(s.jsxs)(l.a,{style:{marginBottom:40},children:[Object(s.jsx)(b.a,{md:12,children:Object(s.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:["  ",t,"  "]})}),r&&Object(s.jsx)(l.a,{style:{marginBottom:40},children:Object(s.jsx)(b.a,{md:12,className:"center",children:Object(s.jsx)(p,{loading:r})})}),c.map((function(e){return Object(s.jsx)(b.a,{md:3,style:{marginBottom:20},children:Object(s.jsx)(d,Object(j.a)({},e),e.id)},e.id)}))]})},_=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Gif App"}),Object(s.jsx)(o,{setCategories:c}),Object(s.jsx)("br",{}),Object(s.jsx)("ul",{children:n.map((function(e,t){return Object(s.jsx)(v,{category:e},t)}))})]})};r.a.render(Object(s.jsx)(_,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5dad1c6d.chunk.js.map