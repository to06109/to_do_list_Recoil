(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{66:function(e,n,t){"use strict";t.r(n);var o,r=t(0),c=t.n(r),i=t(21),a=t.n(i),l=t(30),s=t(11),b=t(27),d=t(41),u=t(1),j=t(4);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={}));var O=Object(s.b)({key:"catagory",default:o.TO_DO}),f=Object(s.b)({key:"toDos",default:[]}),h=Object(s.c)({key:"toDoSelector",get:function(e){var n=e.get,t=n(f),o=n(O);return t.filter((function(e){return e.category===o}))}}),g=t(7),m=t(42),p=t(5);var x=function(){var e=Object(s.d)(f),n=Object(j.a)(e,2),t=n[0],o=n[1],r=Object(s.e)(O),c=Object(m.a)(),i=c.register,a=c.handleSubmit,l=c.setValue;return localStorage.setItem("todo",JSON.stringify(t)),Object(p.jsxs)("form",{onSubmit:a((function(e){var n=e.toDo;o((function(e){return[{text:n,id:Date.now(),category:r}].concat(Object(g.a)(e))})),l("toDo","")})),children:[Object(p.jsx)("input",Object(u.a)(Object(u.a)({},i("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(p.jsx)("button",{children:"Add"})]})};var D=function(e){var n=e.text,t=e.id,r=e.category,c=Object(s.d)(f),i=Object(j.a)(c,2),a=i[0],l=i[1],b=function(e){l((function(o){var r=o.findIndex((function(e){return e.id===t})),c={text:n,id:t,category:e};return[].concat(Object(g.a)(o.slice(0,r)),[c],Object(g.a)(o.slice(r+1)))}))};return localStorage.setItem("todo",JSON.stringify(a)),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:n}),r!==o.DOING&&Object(p.jsx)("button",{onClick:function(){return b(o.DOING)},children:"Doing"}),r!==o.TO_DO&&Object(p.jsx)("button",{onClick:function(){return b(o.TO_DO)},children:"To Do"}),r!==o.DONE&&Object(p.jsx)("button",{onClick:function(){return b(o.DONE)},children:"Done"})]})};var v,y=function(){var e=Object(s.e)(h),n=Object(s.d)(O),t=Object(j.a)(n,2),r=t[0],c=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"To Dos"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("select",{value:r,onInput:function(e){c(e.currentTarget.value)},children:[Object(p.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(p.jsx)("option",{value:o.DOING,children:"Doing"}),Object(p.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(p.jsx)(x,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(p.jsx)(D,Object(u.a)({},e),e.id)}))]})},k=Object(b.b)(v||(v=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  // \ud3f0\ud2b8 \uc124\uc815\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: ",";\n  line-height: 1.2;\n\n}\na {\n  // \ubaa8\ub4e0 \ub9c1\ud06c\uac00 \ubc11\uc904 \uac16\uc9c0 \uc54a\uac8c\n  text-decoration: none;\n  // \ubd80\ubaa8\ud55c\ud14c\uc11c \uc0c9 \uac00\uc838\uc624\ub77c\uace0\n  color: inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var T=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{}),Object(p.jsx)(y,{})]})},w=new l.QueryClient;a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsx)(b.a,{theme:{viewColor:"#353b48",bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#8c7ae6"},children:Object(p.jsx)(l.QueryClientProvider,{client:w,children:Object(p.jsx)(T,{})})})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.22e71e7a.chunk.js.map