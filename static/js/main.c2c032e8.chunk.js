(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(60)},31:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),o=n(10),u=n(11),s=n(14),i=n(12),p=n(15),m=(n(31),n(8)),h=n(6),f=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home page"))},v=n(7),E=n.n(v),d=n(13),b=(n(33),n(23)),g=n.n(b),j=function(){var e=Object(d.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={phones:[],isLoading:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,j();case 3:t=e.sent,this.setState({phones:t,isLoading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.phones;return r.a.createElement("div",null,t&&r.a.createElement(g.a,{type:"Oval",color:"blue",height:"50",width:"50"}),r.a.createElement("h1",null,"Phones page"),r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",null,e.name)})))}}]),t}(r.a.Component),O=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"),r.a.createElement("span",null,r.a.createElement(m.b,{className:"navlink",to:"/",exact:!0},"Back to Home")))},y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/",exact:!0},"HomePage")),r.a.createElement("li",null,r.a.createElement(m.b,{className:"navlink",to:"/phones/"},"PhonesPage"))))),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:f}),r.a.createElement(h.a,{path:"/phones/:phoneId?",exact:!0,component:w}),r.a.createElement(h.a,{path:"*",exact:!0,component:O})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c2c032e8.chunk.js.map