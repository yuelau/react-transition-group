(this["webpackJsonpreact-transition-group-go"]=this["webpackJsonpreact-transition-group-go"]||[]).push([[0],{20:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(13),r=n.n(s),l=(n(31),n(32),n(3)),o=n(11);function j(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center mt-5 mb-3",children:"React Transitoin Group"}),Object(c.jsxs)("ul",{className:"list-group",children:[Object(c.jsx)("li",{className:"list-group-item disabled",children:"Components"}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(o.b,{to:"transition",children:"Transitoin Component"})}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(o.b,{to:"csstransiton",children:"CSSTransiton Component"})}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(o.b,{to:"transitongroup",children:"TransitionGroup Component"})}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(o.b,{to:"switchtransition",children:"SwitchTransition Component"})})]})]})}var b=n(10),d=n(5);function u(){var e=Object(a.useState)(!0),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"Transiton"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(!n)},children:"\u6587\u672c\u5c55\u793a"}),Object(c.jsx)(d.d,{appear:!0,in:n,timeout:800,children:function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{className:"page-fade-initial page-fade page-fade-".concat(e),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("p",{className:"page-fade-initial page-fade page-fade-".concat(e),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("p",{className:"page-fade-initial page-fade page-fade-".concat(e),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("p",{className:"page-fade-initial page-fade page-fade-".concat(e),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("p",{className:"page-fade-initial page-fade page-fade-".concat(e),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("p",{className:"page-fade-initial page-fade page-fade-".concat(e),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("p",{className:"page-fade-initial page-fade page-fade-".concat(e),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]})]})}})]})}var p=n(14),m=n(40);n(20);function O(){var e=Object(a.useState)((function(){return[(new Date).getTime()]})),t=Object(b.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!1),r=Object(b.a)(s,2),l=r[0],o=r[1],j=function(){i([].concat(Object(p.a)(n),[(new Date).getTime()]))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-center",children:"CSSTransitonPage"}),Object(c.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){return o(!l)},children:"\u6587\u672c\u5c55\u793a"}),Object(c.jsx)(m.a,{in:l,appear:!0,timeout:800,unmountOnExit:!0,classNames:"page-fade",children:Object(c.jsxs)("p",{children:["\u72b6\u6001\uff1a ",l?"\u663e\u793a":"\u9690\u85cf"," "]})}),Object(c.jsx)("ul",{className:"list-group",children:n.map((function(e,t){return Object(c.jsx)(m.a,{in:!0,classNames:"page-fade",timeout:800,appear:!0,children:Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[t+1," - ",e,Object(c.jsxs)("div",{children:[n.length>1&&Object(c.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return function(e){i((function(t){var n=Object(p.a)(t);return n.splice(e,1),n}))}(t)},children:"\u79fb\u9664"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:j,children:"\u589e\u52a0"})]})]})},e)}))})]})})}var h=n(41);function x(){var e=Object(a.useState)([(new Date).getTime()]),t=Object(b.a)(e,2),n=t[0],i=t[1],s=function(){i([].concat(Object(p.a)(n),[(new Date).getTime()]))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"TransitionGroupPage"}),Object(c.jsx)("ul",{className:"list-group",children:Object(c.jsx)(h.a,{component:null,children:n.map((function(e,t){return Object(c.jsx)(m.a,{appear:!0,timeout:800,classNames:"page-fade",children:Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[t+1," - ",e,Object(c.jsxs)("div",{children:[n.length>1&&Object(c.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return function(e){i((function(t){var n=Object(p.a)(t);return n.splice(e,1),n}))}(t)},children:"\u79fb\u9664"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:s,children:"\u589e\u52a0"})]})]})},e)}))})})]})}var g=n(39);function f(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"SwitchTransiton"}),Object(c.jsx)(g.a,{mode:"out-in",children:Object(c.jsx)(m.a,{addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:"page-fade",children:Object(c.jsx)("button",{onClick:function(){return i((function(e){return!e}))},className:"btn btn-primary",children:n?"Goodbye, world!":"Hello, world!"})},n?"Goodbye, world!":"Hello, world!")})]})}var N=function(){return Object(c.jsx)("div",{className:"app pl-3 pr-3",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/transition",component:u}),Object(c.jsx)(l.a,{path:"/csstransiton",component:O}),Object(c.jsx)(l.a,{path:"/transitongroup",component:x}),Object(c.jsx)(l.a,{path:"/switchtransition",component:f}),Object(c.jsx)(l.a,{component:j})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.04399646.chunk.js.map