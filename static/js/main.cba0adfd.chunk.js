(this["webpackJsonpreact-transition-group-go"]=this["webpackJsonpreact-transition-group-go"]||[]).push([[0],{20:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),s=n.n(i),r=n(13),a=n.n(r),o=(n(31),n(32),n(3)),l=n(11);function j(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center mt-5 mb-3",children:"React Transitoin Group"}),Object(c.jsxs)("ul",{className:"list-group",children:[Object(c.jsx)("li",{className:"list-group-item disabled",children:"Components"}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(l.b,{to:"transition",children:"Transitoin Component"})}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(l.b,{to:"csstransiton",children:"CSSTransiton Component"})}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(l.b,{to:"transitongroup",children:"TransitionGroup Component"})}),Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(l.b,{to:"switchtransition",children:"SwitchTransition Component"})})]})]})}var b=n(10),u=n(5);function m(){var t=Object(i.useState)(!1),e=Object(b.a)(t,2),n=e[0],s=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"Transiton"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return s(!n)},children:"\u6587\u672c\u5c55\u793a"}),Object(c.jsx)(u.d,{in:n,timeout:400,unmountOnExit:!0,children:function(t){return Object(c.jsxs)("p",{className:"fade fade-".concat(t),children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]})}})]})}var d=n(14),O=n(40);n(20);function h(){var t=Object(i.useState)((function(){return[(new Date).getTime()]})),e=Object(b.a)(t,2),n=e[0],s=e[1],r=Object(i.useState)(!1),a=Object(b.a)(r,2),o=a[0],l=a[1],j=function(){s([].concat(Object(d.a)(n),[(new Date).getTime()]))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-center",children:"CSSTransitonPage"}),Object(c.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){return l(!o)},children:"\u6587\u672c\u5c55\u793a"}),Object(c.jsx)(O.a,{in:o,appear:!0,timeout:1e3,unmountOnExit:!0,classNames:"fade",children:Object(c.jsxs)("p",{children:["\u72b6\u6001\uff1a ",o?"\u663e\u793a":"\u9690\u85cf"," "]})}),Object(c.jsx)("ul",{className:"list-group",children:n.map((function(t,e){return Object(c.jsx)(O.a,{in:!0,classNames:"fade",timeout:1e3,appear:!0,children:Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[e+1," - ",t,Object(c.jsxs)("div",{children:[n.length>1&&Object(c.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return function(t){s((function(e){var n=Object(d.a)(e);return n.splice(t,1),n}))}(e)},children:"\u79fb\u9664"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:j,children:"\u589e\u52a0"})]})]})},t)}))})]})})}var x=n(41);function p(){var t=Object(i.useState)([(new Date).getTime()]),e=Object(b.a)(t,2),n=e[0],s=e[1],r=function(){s([].concat(Object(d.a)(n),[(new Date).getTime()]))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"TransitionGroupPage"}),Object(c.jsx)("ul",{className:"list-group",children:Object(c.jsx)(x.a,{component:null,children:n.map((function(t,e){return Object(c.jsx)(O.a,{timeout:1e3,classNames:"fade",children:Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[e+1," - ",t,Object(c.jsxs)("div",{children:[n.length>1&&Object(c.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return function(t){s((function(e){var n=Object(d.a)(e);return n.splice(t,1),n}))}(e)},children:"\u79fb\u9664"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:r,children:"\u589e\u52a0"})]})]})},t)}))})})]})}var f=n(39);function g(){var t=Object(i.useState)(!1),e=Object(b.a)(t,2),n=e[0],s=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"SwitchTransiton"}),Object(c.jsx)(f.a,{mode:"out-in",children:Object(c.jsx)(O.a,{addEndListener:function(t,e){return t.addEventListener("transitionend",e,!1)},classNames:"fade",children:Object(c.jsx)("button",{onClick:function(){return s((function(t){return!t}))},className:"btn btn-primary",children:n?"Goodbye, world!":"Hello, world!"})},n?"Goodbye, world!":"Hello, world!")})]})}var N=function(){return Object(c.jsx)("div",{className:"app pl-3 pr-3",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/transition",component:m}),Object(c.jsx)(o.a,{path:"/csstransiton",component:h}),Object(c.jsx)(o.a,{path:"/transitongroup",component:p}),Object(c.jsx)(o.a,{path:"/switchtransition",component:g}),Object(c.jsx)(o.a,{component:j})]})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.cba0adfd.chunk.js.map