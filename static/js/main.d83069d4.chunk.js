(this.webpackJsonpsnoutbook=this.webpackJsonpsnoutbook||[]).push([[0],{24:function(e,a,t){e.exports=t(40)},33:function(e,a,t){},34:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),l=t.n(r),o=t(6),s=(t(29),t(32),t(33),t(22)),i=t(7),m=t(8),u=t(11),b=t(10),d=t(1),v=t(23),p=t(9),g=(t(34),function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.listName,a=p[e].map((function(a){var t=a.name,n=a.src;Object(v.a)(a,["name","src"]);return c.a.createElement("li",{className:"list-item col-lg-4 text-center mt-5",key:t},c.a.createElement(o.b,{to:"/".concat(e,"/").concat(n)},c.a.createElement("img",{src:"./img/".concat(n,".jpg"),alt:t}),c.a.createElement("h3",{className:"underline mt-4"},t)))}));return c.a.createElement("ul",{className:"row"},a)}}]),t}(c.a.Component)),h=(t(39),function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.listName,t=e.src,n=e.history,r=p[a].find((function(e){return e.src===t}));if(!r)return c.a.createElement(d.a,{to:"/".concat(a)});var l=r.name,o=r.descr,s=r.facts.map((function(e,a){return c.a.createElement("li",{className:"list-group-item",key:a},e)}));return c.a.createElement("div",{className:"row justify-content-center mt-5"},c.a.createElement("div",{className:"col-11 col-lg-5"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"./img/".concat(t,".jpg"),alt:l}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",{className:"card-title"},l),c.a.createElement("h4",{className:"card-subtitle text-muted"},o)),c.a.createElement("ul",{className:"list-group list-group-flush"},s),c.a.createElement("div",{className:"card-body"},c.a.createElement("button",{className:"btn btn-info",onClick:n.goBack},"Go Back")))))}}]),t}(c.a.Component)),E=Object(d.g)(h),f=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.listName,a=p[e].map((function(a){var t=a.name,n=a.src;return c.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#navbarNav",key:n},c.a.createElement(o.c,{exact:!0,to:"/".concat(e,"/").concat(n),className:"nav-link"},t))}));return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(o.b,{className:"navbar-brand",to:"/".concat(e)},e.replace(/^\w/,(function(e){return e.toUpperCase()}))),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#navbarNav"},c.a.createElement(o.c,{exact:!0,to:"/".concat(e),className:"nav-link"},"Home")),a)))}}]),t}(c.a.Component),N=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=Object.keys(p),a=Object(s.a)(e,1)[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement(f,{listName:a})),c.a.createElement("main",{className:"container"},c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/".concat(a,"/:src"),render:function(e){var t=e.match;return c.a.createElement(E,{listName:a,src:t.params.src})}}),c.a.createElement(d.b,{exact:!0,path:"/".concat(a),render:function(){return c.a.createElement(g,{listName:a})}}),c.a.createElement(d.a,{to:"/".concat(a)}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{basename:"/snoutbook"},c.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('{"dogs":[{"name":"Whiskey","descr":"5 years old","src":"whiskey","facts":["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]},{"name":"Hazel","descr":"3 years old","src":"hazel","facts":["Hazel has soooo much energy!","Hazel is highly intelligent.","Hazel loves people more than dogs."]},{"name":"Tubby","descr":"4 years old","src":"tubby","facts":["Tubby is not the brightest dog","Tubby does not like walks or exercise.","Tubby loves eating food."]}]}')}},[[24,1,2]]]);
//# sourceMappingURL=main.d83069d4.chunk.js.map