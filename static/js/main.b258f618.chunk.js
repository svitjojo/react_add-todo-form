(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(3),s=a(7),o=(a(14),a(1)),l=a(9),d=a.n(l),u=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(u.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(u.jsx)(m,{user:r})]})},h=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,b.find((function(e){return e.id===t}))||null)});var t})),p=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(f),s=Object(c.a)(i,2),l=s[0],d=s[1],m=Object(o.useState)(""),j=Object(c.a)(m,2),p=j[0],O=j[1],v=Object(o.useState)(!1),x=Object(c.a)(v,2),y=x[0],S=x[1],I=function(e,t){return e&&Object(u.jsx)("span",{className:"error",children:t})};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(u.jsxs)("div",{className:"field",children:["Title: ",Object(u.jsx)("input",{type:"text",name:"title","data-cy":"titleInput",placeholder:"Enter a title",value:p,onChange:function(e){return O(e.target.value)}}),I(!p&&y,"Please enter a title")]}),Object(u.jsxs)("div",{className:"field",children:["User: ",Object(u.jsxs)("select",{"data-cy":"userSelect",value:a,onChange:function(e){return n(e.target.value)},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),b.map((function(e){var t=e.name,a=e.id;return Object(u.jsx)("option",{value:"".concat(t),children:t},a)}))]}),I(!a&&y,"Please choose a user")]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){e.preventDefault(),S(!0),a&&p&&(!function(){var e=b.find((function(e){return e.name===a}));if(e){var t={id:Math.max.apply(Math,Object(r.a)(l.map((function(e){return e.id}))))+1,title:p,completed:!1,userId:e.id,user:e};d([].concat(Object(r.a)(l),[t]))}}(),O(""),n(""),S(!1))},children:"Add"})]}),Object(u.jsx)(h,{todos:l})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b258f618.chunk.js.map