(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{288:function(n,e,t){},297:function(n,e){},300:function(n,e){},307:function(n,e){},318:function(n,e){},319:function(n,e){},380:function(n,e){},382:function(n,e){},396:function(n,e){},400:function(n,e){},402:function(n,e){},412:function(n,e){},414:function(n,e){},445:function(n,e){},447:function(n,e){},454:function(n,e){},455:function(n,e){},479:function(n,e){},482:function(n,e,t){"use strict";t.r(e);var c,a,i,o,r,s,l=t(1),j=t.n(l),d=t(32),u=t.n(d),b=(t(288),t(130)),x=t(85),h=t(27),O=Object(h.f)((function(n){var e=n.history;return Object(l.useEffect)((function(){var n=e.listen((function(){window.scrollTo(0,0)}));return function(){n()}}),[]),null})),p=t(66),f=t(276),m=t(67),g=m.a.nav(c||(c=Object(p.a)(["\nbackground: #63D471;\nheight: 85px;\ndisplay: flex;\njustify-content: space-between;\npadding: 0.2rem calc((100vw - 1000px) / 2);\nz-index: 12;\n/* Third Nav */\n/* justify-content: flex-start; */\n"]))),v=Object(m.a)(x.b)(a||(a=Object(p.a)(["\ncolor: #808080;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n&.active {\n\tcolor: #000000;\n}\n"]))),y=Object(m.a)(f.a)(i||(i=Object(p.a)(["\ndisplay: none;\ncolor: #808080;\n@media screen and (max-width: 768px) {\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(-100%, 75%);\n\tfont-size: 1.8rem;\n\tcursor: pointer;\n}\n"]))),w=m.a.div(o||(o=Object(p.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: -24px;\n/* Second Nav */\n/* margin-right: 24px; */\n/* Third Nav */\n/* width: 100vw;\nwhite-space: nowrap; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),k=(m.a.nav(r||(r=Object(p.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 24px;\n/* Third Nav */\n/* justify-content: flex-end;\nwidth: 100vw; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),Object(m.a)(x.b)(s||(s=Object(p.a)(["\nborder-radius: 4px;\nbackground: #808080;\npadding: 10px 22px;\ncolor: #000000;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\n/* Second Nav */\nmargin-left: 24px;\n&:hover {\n\ttransition: all 0.2s ease-in-out;\n\tbackground: #fff;\n\tcolor: #808080;\n}\n"]))),t(19)),N=t(39),T=t(3),S=t(68),C=t(177),E=t(20),I=t(12),D=function(){var n=T.e.Devnet,e=Object(N.c)("autoConnect",!1),t=Object(k.a)(e,2),c=(t[0],t[1],Object(l.useMemo)((function(){return Object(E.e)(n)}),[n])),a=Object(l.useMemo)((function(){return[Object(S.b)(),Object(S.d)(),Object(S.c)(),Object(S.f)({options:{clientId:"Get a client ID @ https://developer.tor.us"}}),Object(S.a)(),Object(S.e)({network:n})]}),[n]),i=Object(b.b)().enqueueSnackbar;Object(l.useCallback)((function(n){i(n.message?"".concat(n.name,": ").concat(n.message):n.name,{variant:"error"}),console.error(n)}),[i]);return Object(I.jsx)(N.a,{endpoint:c,children:Object(I.jsx)(N.b,{wallets:a,autoConnect:!0,children:Object(I.jsx)(C.a,{children:Object(I.jsx)(C.b,{})})})})};var F=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(g,{children:[Object(I.jsx)(y,{}),Object(I.jsxs)(w,{children:[Object(I.jsx)(v,{to:"/home",children:"Home"}),Object(I.jsx)(v,{to:"/about",children:"About"}),Object(I.jsx)(v,{to:"/transact",children:"Transact"})]}),Object(I.jsx)(D,{})]})})},R=function(){return Object(I.jsx)("div",{className:"nc-Page404",children:Object(I.jsx)("div",{className:"container relative py-16 lg:py-20",children:Object(I.jsxs)("header",{className:"text-center max-w-2xl mx-auto space-y-7",children:[Object(I.jsx)("h2",{className:"text-7xl md:text-8xl",children:"\ud83e\ude94"}),Object(I.jsx)("h1",{className:"text-8xl md:text-9xl font-semibold tracking-widest",children:"404"}),Object(I.jsxs)("span",{className:"block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium",children:["THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST."," "]})]})})})},B=function(){return Object(I.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(I.jsx)("h1",{children:"This is my homepage!"})})},L=t(15),P=t(2),K=t.n(P),A=t(8),G=t(504),H=t(508),M=t(507),z=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(n.slice(0,e),"...").concat(n.slice(-e))},J=[{path:"/",exact:!0,component:B},{path:"/#",exact:!0,component:B},{path:"/about",exact:!0,component:function(){return Object(I.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(I.jsx)("h1",{children:"This is my about page!"})})}},{path:"/transact",exact:!0,component:function(n){var e,t=Object(l.useState)(),c=Object(k.a)(t,2),a=c[0],i=c[1],o=Object(l.useState)({open:!1,message:"",severity:void 0}),r=Object(k.a)(o,2),s=r[0],j=r[1];console.log(n);var d=Object(N.d)();return console.log("wallet",d),console.log("walleted connected",d.connected),Object(l.useEffect)((function(){Object(A.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===d||void 0===d?void 0:d.publicKey)){e.next=5;break}return e.next=3,n.connection.getBalance(d.publicKey);case 3:t=e.sent,i(t/E.c);case 5:case"end":return e.stop()}}),e)})))()}),[d,n.connection]),Object(I.jsxs)("main",{children:[d.connected&&Object(I.jsxs)("p",{children:["Address: ",z((null===(e=d.publicKey)||void 0===e?void 0:e.toBase58())||"")]}),d.connected&&Object(I.jsxs)("p",{children:["Balance: ",(a||0).toLocaleString()," SOL"]}),Object(I.jsx)("div",{children:d.connected?Object(I.jsx)(G.a,{}):Object(I.jsx)("h1",{children:"Please connect wallet"})}),Object(I.jsx)(H.a,{open:s.open,autoHideDuration:6e3,onClose:function(){return j(Object(L.a)(Object(L.a)({},s),{},{open:!1}))},children:Object(I.jsx)(M.a,{onClose:function(){return j(Object(L.a)(Object(L.a)({},s),{},{open:!1}))},severity:s.severity,children:s.message})})]})}}],q=function(){return Object(I.jsxs)(x.a,{children:[Object(I.jsx)(O,{}),Object(I.jsx)(F,{}),Object(I.jsxs)(h.c,{children:[J.map((function(n){var e=n.component,t=n.path,c=n.exact;return Object(I.jsx)(h.a,{component:e,exact:!!c,path:t},t)})),Object(I.jsx)(h.a,{component:R})]})]})};var U=function(){return Object(I.jsx)(b.a,{children:Object(I.jsx)("div",{className:"bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200",children:Object(I.jsx)(q,{})})})},W=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,511)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),a(n),i(n),o(n)}))};u.a.render(Object(I.jsx)(j.a.StrictMode,{children:Object(I.jsx)(U,{})}),document.getElementById("root")),W()}},[[482,1,2]]]);
//# sourceMappingURL=main.22843000.chunk.js.map