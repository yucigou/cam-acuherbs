(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports=t(44)},34:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(12),l=t.n(i),o=(t(34),t(13)),c=t(14),u=t(16),s=t(15),m=t(17),p=t(2),h=t(7),d=t(8),f=t(1),b=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).menuToggler=function(){"topnav"===t.state.topNavClass?t.setState({topNavClass:"topnav responsive"}):t.setState({topNavClass:"topnav"})},t.state={topNavClass:"topnav",activeMenu:""},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.topNavClass},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"dropbtn"},"Remedies\xa0",r.a.createElement("i",{className:"fa fa-caret-down",style:{color:"/acupuncture"===this.props.location.pathname||"/chinese-herbs"===this.props.location.pathname||"/cupping"===this.props.location.pathname?"#4CAF50":""}})),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement(h.b,{to:"/acupuncture",onClick:this.menuToggler,activeClassName:"active"},"Acupuncture"),r.a.createElement(h.b,{to:"/chinese-herbs",onClick:this.menuToggler,activeClassName:"active"},"Chinese Herbs"),r.a.createElement(h.b,{to:"/cupping",onClick:this.menuToggler,activeClassName:"active"},"Cupping"))),r.a.createElement(h.b,{to:"/testimonials",onClick:this.menuToggler,activeClassName:"active"},"Testimonials"),r.a.createElement(h.b,{to:"/opening-hours",onClick:this.menuToggler,activeClassName:"active"},"Opening Hours"),r.a.createElement(h.b,{to:"/about-doctor",onClick:this.menuToggler,activeClassName:"active"},"About Our Doctor"),r.a.createElement(h.b,{to:"/contact",onClick:this.menuToggler,activeClassName:"active"},"Contact Us"),r.a.createElement("a",{href:"javascript:void(0);",className:"icon",onClick:this.menuToggler},"\u2630"))}}]),n}(r.a.Component),g=Object(d.d)(b);function v(){var e=Object(p.a)(["\n\tmax-width: 100%;\n\theight: auto;\n\n  @media (min-width: ",") {\n    width: 100%;\n    margin-top: -2px;\n    position: relative;\n    z-index: -1;\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(p.a)(["\n\tmax-height: 350px;\n\tbackground-size: cover;\n\tbackground-position: center;\n\tdisplay: block;\n"]);return E=function(){return e},e}function y(){var e=Object(p.a)(["\n\tfont-size: 0.9em;\n  padding: 0 0 10px 0\n"]);return y=function(){return e},e}function w(){var e=Object(p.a)(["\n\tfont-size: 1.4em;\n  padding: 10px 0;\n  @media (min-width: ",") {\n    br {\n      display: none;\n    }\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(p.a)(["\n\ttext-decoration: none;\n"]);return C=function(){return e},e}function x(){var e=Object(p.a)(["\n  padding: 0 24px;\n  margin: 0 5%;\n\tborder: none;\n\tcolor: #111;\n\tfont-family: 'Playfair Display', serif;\n\t-webkit-font-smoothing: antialiased;\n"]);return x=function(){return e},e}function k(){var e=Object(p.a)(["\n  text-align: center;\n"]);return k=function(){return e},e}var j=f.b.div(k()),O=f.b.header(x()),T=f.b.a(C()),N=f.b.div(w(),function(e){return e.theme.mobileBreakpoint}),A=f.b.div(y()),B=f.b.div(E()),H=f.b.img(v(),function(e){return e.theme.mobileBreakpoint}),M=function(){return r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement(N,null,r.a.createElement(T,{href:"/",title:"Cambridge Acupuncture & Herbs \u2014 Member of The Association of Traditional Chinese Medicine (UK)",rel:"home"},r.a.createElement("strong",null,"Cambridge Acupuncture ",r.a.createElement("br",null),"& Herbs"))),r.a.createElement(A,null,"Member of The Association of ",r.a.createElement("br",null),"Traditional Chinese Medicine (UK)")),r.a.createElement(g,null),r.a.createElement(B,null,r.a.createElement(H,{src:"/images/cam-acuherbs-banner-1.png"})))};function z(){var e=Object(p.a)(["\n\tbackground-color: #111111;\n\tfont-family: 'Lato', Helvetica, sans-serif;\n\tcolor: #fff;\n\tfont-size: 12px;\n\tfont-weight: 700;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tpadding: 15px 0;\n"]);return z=function(){return e},e}var I=f.b.footer(z()),S=function(){return r.a.createElement(I,null,r.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()),r.a.createElement("p",null,"Cambridge Acupuncture & Herbs"))};function U(){var e=Object(p.a)(["\n  margin-top: 0px;\n"]);return U=function(){return e},e}function q(){var e=Object(p.a)(["\n  margin-bottom: 10px;\n"]);return q=function(){return e},e}function D(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  height: 100% !important;\n"]);return D=function(){return e},e}function F(){var e=Object(p.a)(["\n  position: relative;\n  padding-bottom: 75%; // This is the aspect ratio\n  height: 0;\n  overflow: hidden;\n"]);return F=function(){return e},e}function L(){var e=Object(p.a)(["\n  display: none;\n\n  @media (min-width: ",") {\n    display: block;\n    padding: 10px 10px 10px 50px;\n    width: 33%;\n    float: left;\n  }\n"]);return L=function(){return e},e}var P=f.b.div(L(),function(e){return e.theme.mobileBreakpoint}),R=f.b.div(F()),Q=f.b.iframe(D()),Y=f.b.h4(q()),Z=f.b.p(U()),J=function(){return r.a.createElement(P,null,r.a.createElement("h3",null,"CONTACT US"),r.a.createElement(Y,null,"Phone"),r.a.createElement(Z,null,"01223-412216"),r.a.createElement(Y,null,"Address"),r.a.createElement(Z,null,"238 Mill Road",r.a.createElement("br",null),"Cambridge, CB1 3NF"),r.a.createElement(R,null,r.a.createElement(Q,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.539085858045!2d0.14351041651951515!3d52.19725027975455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8707df1a6ee75%3A0xc6f557524383ce66!2s238+Mill+Rd%2C+Cambridge+CB1+3NF!5e0!3m2!1sen!2suk!4v1555400060436!5m2!1sen!2suk",width:"600",height:"450",frameborder:"0",style:{border:0},allowfullscreen:!0})))};function W(){var e=Object(p.a)(["\n  text-align: left;\n  padding: 0 5% 2% 5%;\n  font-family: 'Neuton', serif;\n  p, li {\n    font-size: 1.2em;\n  }\n\n  @media (min-width: ",") {\n    width: 38%;\n    float: left;\n    margin-top: -50px;\n    margin-left: 50px;\n    background-color: white;\n    border: 1px solid #ddd;\n    p, li {\n      font-size: 1.3em;\n    }\n    padding: 2% 7% 7.3% 7%;\n  }\n"]);return W=function(){return e},e}var G=f.b.div(W(),function(e){return e.theme.mobileBreakpoint}),K=function(){return r.a.createElement(G,null,r.a.createElement("h1",null,"Acupuncture"),r.a.createElement("p",null,"Acupuncture is the gentle insertion of a hair-fine needle into specific points of the body called acu-points to stimulate the flow of one\u2019s Qi or natural healing energy."),r.a.createElement("p",null,"Acupuncture treatment has proved remarkably effective especially for many diseases that are resistant to conventional forms of therapy. It has been proven to manifest the following effects:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Physiological analgesic;"),r.a.createElement("li",null,"Hasten motor recovery from trauma or paralysis;"),r.a.createElement("li",null,"Immune-enhancing effect;"),r.a.createElement("li",null,"Homeostatic effect;"),r.a.createElement("li",null,"The effect of body fat reduction and smoking cessation.")),r.a.createElement("h2",null,"Acupressure"),r.a.createElement("p",null,"The methods used in Chinese massage include the hand techniques to massage the soft tissue (muscles and tendons) of the body, acupressure techniques to directly affect the flow of Qi, and manipulation techniques to realign the musculoskeletal and ligamentous relationships."))};function $(){var e=Object(p.a)(["\n  float: left;\n  margin-right: 30px;\n  margin-bottom: 10px;\n  padding: 5px;\n  border: 1px solid #ddd;\n  width: 150px;\n"]);return $=function(){return e},e}var V=f.b.img($()),X=function(){return r.a.createElement(G,null,r.a.createElement("h1",null,"About Our Doctor"),r.a.createElement("p",null,r.a.createElement("strong",null,"Dr Li ZHANG")),r.a.createElement(V,{src:"/images/Li-Zhang.jpg",alt:"Li Zhang"}),r.a.createElement("p",null,"Dr Li Zhang has 38 years of clinical experiences including 12 years here in Cambridge, and 4 years at Leicester Chinese Acupuncture & Herbal Clinic (81 Granby Street)."),r.a.createElement("p",null,"She graduated from the Changchun University of Traditional Chinese Medicine, and was clinically trained at No. 1 hospital of the Tianjin University of Traditional Chinese Medicine for one year."),r.a.createElement("p",null,"Dr Li Zhang led before a research project by Toho University, Japan, on the anti-bacterial ability of common herbs."))},_=function(){return r.a.createElement(G,null,r.a.createElement("h1",null,"Chinese Herbs"),r.a.createElement("p",null,"Alongside acupuncture, Chinese herbal medicine is the other major pillar of Chinese medicine. It is based on the belief that the body is governed by the opposing forces of Yin and Yang. The interaction of these forces gives rise to an energy known as Qi which flows through twelve energy channels in the body. However, when these channels are blocked, illness can occur. Herbs work on these channels to improve the flow of Qi and restore equilibrium to the body."),r.a.createElement("p",null,"Herbs tends to be highly specific in their actions, and herbal formulae contain a range of herbs that not only possess different qualities and properties but also target different aspects of the patient\u2019s disharmony. Adverse reactions to Chinese herbs are extremely rare and are negligible when compared to those commonly produced by pharmaceutical drugs."),r.a.createElement("h2",null,"Prepared Patent Herbs"),r.a.createElement("p",null,"Many of the classic formulae that have been developed over the centuries are considered so useful that they are manufactured in really available patent forms. The herbs are usually available as pills, but some patents are offered as tinctures or as rubs, creams, sprays and poultices for external use. Patent formulae offer a quick and easy way to take Chinese herbs. Many can be remarkably effective."),r.a.createElement("h2",null,"Slimming tablets and teas"),r.a.createElement("p",null,"They improve metabolism, help to curb the appetite and inhibit the production of fat. They are 100% natural and 100% side effect free."))};function ee(){var e=Object(p.a)(["\n  @media (min-width: ",") {\n    display: none;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  height: 100% !important;\n"]);return ne=function(){return e},e}function te(){var e=Object(p.a)(["\n  position: relative;\n  padding-bottom: 75%; // This is the aspect ratio\n  height: 0;\n  overflow: hidden;\n\n  @media (min-width: ",") {\n    display: none;\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(p.a)(["\n  padding: 5px;\n  border: 1px solid #ddd;\n  width: 96%;\n  @media (min-width: ",") {\n    width: 100%;\n  }\n"]);return ae=function(){return e},e}var re=f.b.img(ae(),function(e){return e.theme.mobileBreakpoint}),ie=f.b.div(te(),function(e){return e.theme.mobileBreakpoint}),le=f.b.iframe(ne()),oe=f.b.ul(ee(),function(e){return e.theme.mobileBreakpoint}),ce=function(){return r.a.createElement(G,null,r.a.createElement("h1",null,"Contact Us"),r.a.createElement("p",null,"You are welcome to contact us through the telephone, or visit us on site."),r.a.createElement(oe,null,r.a.createElement("li",null,"Telephone: 01223-412216"),r.a.createElement("li",null,"Address: 238 Mill Road, Cambridge, CB1 3NF")),r.a.createElement(re,{src:"/images/2016-05-15.png",alt:"238 Mill Road, Cambridge, CB1 3NF"}),r.a.createElement(ie,null,r.a.createElement(le,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.539085858045!2d0.14351041651951515!3d52.19725027975455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8707df1a6ee75%3A0xc6f557524383ce66!2s238+Mill+Rd%2C+Cambridge+CB1+3NF!5e0!3m2!1sen!2suk!4v1555400060436!5m2!1sen!2suk",width:"600",height:"450",frameborder:"0",style:{border:0},allowfullscreen:!0})))},ue=function(){return r.a.createElement(G,null,r.a.createElement("h1",null,"Cupping"),r.a.createElement("p",null,"Cupping is performed as an alternative to acupuncture by placing a cup over acupuncture points. It is useful in the treatment of problems of local Qi, or blood stagnation in the channels."))};function se(){var e=Object(p.a)(["\n\tpadding-left: 20px;\n"]);return se=function(){return e},e}var me=f.b.p(se()),pe=function(){return r.a.createElement(G,null,r.a.createElement("h1",null,"Opening Hours"),r.a.createElement("h2",null,"Monday \u2013 Saturday: "),r.a.createElement(me,null,"10:00 \u2013 19:00"),r.a.createElement("h2",null,"Sunday: "),r.a.createElement(me,null,"By appointment only"))};function he(){var e=Object(p.a)(["\n\tpadding: 5px 5px 5px 80px;\n\tbackground: #fafafa;\n\tborder: 1px solid #eee;\n\tposition: relative;\n\tfont-size: 0.95em;\n\tfont-style: italic;\n\t&:after {\n\t\tcontent: '\u201d';\n\t\twidth: 90px;\n\t\tfont-family: 'Neuton', serif;\n\t\tfont-size: 72px;\n\t\tline-height: 72px;\n\t\tfont-weight: 700;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\tcolor: #ca2017;\n\t\tposition: absolute;\n\t\ttop: 31px;\n\t\tleft: 0px;\n\t}\n\tp {\n\t\tfont-style: italic;\n\t}\n"]);return he=function(){return e},e}var de=f.b.blockquote(he()),fe=function(){return r.a.createElement(G,null,r.a.createElement("h1",null,"Testimonials"),r.a.createElement(de,null,r.a.createElement("p",null,"The Chinese herb and acupuncture helped me to alleviate my stress, relieving the desire to smoke."),r.a.createElement("p",null,"\u2014 Marcie Roche")),r.a.createElement(de,null,r.a.createElement("p",null,"Before I started receiving Chinese massage, I could barely move my head but now I have free movement."),r.a.createElement("p",null,"\u2014 William Yu")),r.a.createElement(de,null,r.a.createElement("p",null,"The pain in my back is so much better."),r.a.createElement("p",null,"\u2014 Barbara Parkin")))};function be(){var e=Object(p.a)(["\n  @media (min-width: ",') {\n    &:after {\n      content: "";\n      clear: both;\n      display: table;\n    }\n  }\n']);return be=function(){return e},e}function ge(){var e=Object(p.a)(["\n  max-width: 1366px;\n  margin: 0 auto;\n"]);return ge=function(){return e},e}var ve={mobileBreakpoint:"768px"},Ee=f.b.div(ge()),ye=f.b.div(be(),function(){return ve.mobileBreakpoint}),we=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{theme:ve},r.a.createElement(Ee,null,r.a.createElement(M,null),r.a.createElement(ye,null,r.a.createElement(d.a,{exact:!0,path:"/acupuncture",component:K}),r.a.createElement(d.a,{exact:!0,path:"/",component:X}),r.a.createElement(d.a,{path:"/about-doctor",component:X}),r.a.createElement(d.a,{path:"/chinese-herbs",component:_}),r.a.createElement(d.a,{path:"/testimonials",component:fe}),r.a.createElement(d.a,{path:"/contact",component:ce}),r.a.createElement(d.a,{path:"/cupping",component:ue}),r.a.createElement(d.a,{path:"/opening-hours",component:pe}),r.a.createElement(J,null)),r.a.createElement(S,null))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.a72eb4ce.chunk.js.map