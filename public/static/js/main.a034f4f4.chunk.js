(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),i=s(4),l=s.n(i),r=(s(14),s(15),s(2));var a=s(1);var d=function(){var e=Object(r.c)((function(e){return e}));console.log(e);var t=Object(r.b)();return Object(n.useEffect)((function(){t((function(e){fetch("https://covid19.mathdro.id/api/confirmed").then((function(e){return e.json()})).then((function(t){return e({type:"GETTODOS",todos:t})}))}))}),[]),Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-3",children:[Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des mb-3",children:"Country Region"}),e.todos.map((function(e,t){return Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des",children:e.countryRegion},t)}))]}),Object(a.jsxs)("div",{className:"col-md-3",children:[Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des mb-3 ",children:"Confirmed"}),e.todos.map((function(e,t){return Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des",children:e.confirmed},t)}))]}),Object(a.jsxs)("div",{className:"col-md-3",children:[Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des mb-3",children:"recovered"}),e.todos.map((function(e,t){return Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des",children:e.recovered},t)}))]}),Object(a.jsxs)("div",{className:"col-md-3",children:[Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des mb-3",children:"Deaths"}),e.todos.map((function(e,t){return Object(a.jsx)("li",{className:"list-unstyled p-3 m-2 text-light my-des",children:e.deaths},t)}))]})]})})})},o=s(8),m=s(3),j={username:"Ayan",todos:[]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Update Data":return Object(m.a)(Object(m.a)({},e),{},{username:t.username});case"GETTODOS":return Object(m.a)(Object(m.a)({},e),{},{todos:t.todos});default:return e}},h=s(9),b=Object(o.b)(u,Object(o.a)(h.a));s(21);var O=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(r.a,{store:b,children:Object(a.jsx)(d,{})})})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;s(e),n(e),c(e),i(e),l(e)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()}},[[22,1,2]]]);
//# sourceMappingURL=main.a034f4f4.chunk.js.map