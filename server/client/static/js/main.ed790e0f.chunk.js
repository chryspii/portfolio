(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/me.26c3ed96.png"},44:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),s=a(11),o=a(10),i=a(23),m=a(13),u=a(39),E=a(5),d=a(53),p={isAuthenticated:!1,user:{},userLoading:!1},f={},h=a(15),N={about:[],aboutLoading:!1},b={skill:[],education:[],work:[],skillLoading:!1,educationLoading:!1,workLoading:!1},y=Object(m.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(E.a)({},e,{isAuthenticated:!d(t.payload),user:t.payload});case"TOGGLE_USER_LOADING":return Object(E.a)({},e,{userLoading:!e.userLoading});default:return e}},about:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ABOUT":return Object(E.a)({},e,{about:Object(h.a)(t.payload)});case"ABOUT_LOADING":return Object(E.a)({},e,{aboutLoading:!e.aboutLoading});default:return e}},skill:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SKILL":return Object(E.a)({},e,{skill:Object(h.a)(t.payload)});case"ABOUT_LOADING":return Object(E.a)({},e,{skillLoading:!e.skillLoading});case"GET_EDUCATION":return Object(E.a)({},e,{education:Object(h.a)(t.payload)});case"EDUCATION_LOADING":return Object(E.a)({},e,{educationLoading:!e.educationLoading});case"GET_WORK":return Object(E.a)({},e,{work:Object(h.a)(t.payload)});case"WORK_LOADING":return Object(E.a)({},e,{workLoading:!e.workLoading});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return t.payload;default:return e}}}),g=[u.a],k=Object(m.d)(y,{},m.a.apply(void 0,g)),v=a(43),O=a(40),w=a.n(O),T=a(76),L=a(73),A=a(74),_=a(22),S=a.n(_),R=function(e){var t=e.texts,a=e.desc,n=e.buttons;return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,null,l.a.createElement(A.a,{md:12},l.a.createElement("h2",{className:"section-title"},l.a.createElement("span",null,l.a.createElement("i",{className:"icon-guest"}),"A LITTLE ABOUT ME")),l.a.createElement("div",{className:"intro"},l.a.createElement("h2",null,"Hi. I am",l.a.createElement("ul",{id:"typewritter"},t.map((function(e,t){return l.a.createElement("li",{key:t},e)}))),l.a.createElement("span",{className:"secondary__title"}," ")),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a[0]}})),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"download-button"},n.map((function(e,t){return l.a.createElement("a",{key:t,className:"button primary",href:e.url,target:"_blank",rel:"noopener noreferrer"},e.text)})))))),l.a.createElement(S.a,{url:"/js/typewritter.js"}))},j=function(e){var t=e.skills;return l.a.createElement(L.a,null,t.map((function(e,t){return l.a.createElement(A.a,{md:4,sm:4,key:t},l.a.createElement("div",{className:"service color"+Math.floor(3*Math.random()+1)},l.a.createElement("i",{className:e.icon}),l.a.createElement("h4",null,e.title),l.a.createElement("p",null,e.text)))})))},I=function(e){var t=e.works;return l.a.createElement("div",{className:"timeline"},l.a.createElement("h2",null,l.a.createElement("i",{className:"fa fa-flask"}),"WORK EXPERIENCES"),t.map((function(e,t){return l.a.createElement("div",{className:"event",key:t},l.a.createElement("span",{className:"date"},e.startdate),l.a.createElement("h4",null,e.position),l.a.createElement("h5",null,e.company," | ",e.location),l.a.createElement("p",null,e.text))})))},x=a(75),G=function(e){var t=e.educations;return l.a.createElement("div",{className:"timeline"},l.a.createElement("h2",null,l.a.createElement("i",{className:"icon-college"}),"EDUCATIONS"),t.map((function(e,t){return l.a.createElement("div",{className:"event",key:t},l.a.createElement("span",{className:"date"},e.startdate),l.a.createElement("h4",null,e.major),l.a.createElement("h5",null,e.school," | ",e.location),l.a.createElement(x.a,{className:"table-borderless text-left",style:{margin:".6em 0 .2em 0"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Period"),l.a.createElement("td",null,":"),l.a.createElement("td",null,e.startdate," - ",e.enddate)),l.a.createElement("tr",null,l.a.createElement("td",null,"Degree"),l.a.createElement("td",null,":"),l.a.createElement("td",null,e.degree)),l.a.createElement("tr",null,l.a.createElement("td",null,"GPA"),l.a.createElement("td",null,":"),l.a.createElement("td",null,e.gpa)),l.a.createElement("tr",null,l.a.createElement("td",null,"Research"),l.a.createElement("td",null,":"),l.a.createElement("td",null,e.research)))),l.a.createElement("p",{className:"m-0"}))})))},D=function(e){var t=e.skills;return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{md:5},t.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("h2",{className:"section-title"},l.a.createElement("span",null,l.a.createElement("i",{className:e.icon}),e.title)),l.a.createElement("div",{className:"skillset"},e.data.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("h4",null,l.a.createElement("b",null,e.title)),e.data.map((function(e,t){return l.a.createElement("div",{className:"skill-unit",key:t},l.a.createElement("h4",null,e.skill),l.a.createElement("div",{className:"bar","data-percent":e.value},l.a.createElement("div",{className:"progress"})))})))}))))}))),l.a.createElement(S.a,{url:"/js/fillBars.js"}))},U=function(e){var t=e.aboutDesc,a=e.aboutButtons,r=e.aboutSkills,c=e.aboutTypes,o=e.skill,i=e.education,m=e.work,u=Object(n.useState)(!1),E=Object(v.a)(u,2),d=E[0],p=E[1];Object(n.useEffect)((function(){setTimeout((function(){0===r.length&&p(!0)}),1e3)}),[r]);return l.a.createElement("div",{id:"vs-container",className:"container-xl"},l.a.createElement("header",{className:"vs-header header"},l.a.createElement(T.a,{src:w.a,alt:"avatar"}),l.a.createElement("h1",null,l.a.createElement("span",{className:"font-weight-bold"},"Vicky")," Chrystian Sugiarto"),l.a.createElement("p",null,"Developer"),l.a.createElement("ul",{className:"vs-nav"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"#about"},"about me")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"#portfolio"},"portfolio")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"#contact"},"contact")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"#resume"},"resume")))),l.a.createElement("div",{className:"vs-wrapper wrapper"},l.a.createElement("section",{id:"about",className:"page"},l.a.createElement("div",{className:"vs-content content"},l.a.createElement(R,{texts:c,desc:t,buttons:a}),r.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"section-title"},l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-magic"}),"SKILL")),l.a.createElement(j,{skills:r})):d&&l.a.createElement(l.a.Fragment,null))),l.a.createElement("section",{id:"portfolio",className:"page"},l.a.createElement("div",{className:"vs-content content"},l.a.createElement("h2",{className:"section-title center"},l.a.createElement("span",null,l.a.createElement("i",{className:"icon-leaf"}),"MY WORKS")),l.a.createElement("h2",{className:"text-secondary text-center"},"No portfolio Found"))),l.a.createElement("section",{id:"contact",className:"page"},l.a.createElement("div",{className:"vs-content content"},l.a.createElement(L.a,null,l.a.createElement(A.a,{md:6},l.a.createElement("h2",{className:"section-title"},l.a.createElement("span",null,l.a.createElement("i",{className:"icon-address-book"}),"GET IN TOUCH")),l.a.createElement("div",{className:"letter"},l.a.createElement("div",{className:"letter-info"},l.a.createElement("p",null,l.a.createElement("i",{className:"icon-at"}),l.a.createElement(s.b,{to:"mailto: vicky.chryst@gmail.com"},"vicky.chryst@gmail.com")),l.a.createElement("p",null,l.a.createElement("i",{className:"icon-phone"}),"+886 908 944 063"),l.a.createElement("p",null,l.a.createElement("i",{className:"icon-location"}),"No. 25, Lane 14, Liren Street, Zhonghe District, New Taipei City, Taiwan")))),l.a.createElement(A.a,{md:6},l.a.createElement("h2",{className:"section-title"},l.a.createElement("span",null,l.a.createElement("i",{className:"icon-chat"}),"MY SOCIAL MEDIA")),l.a.createElement("ul",{className:"social"},l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"https://www.facebook.com/chryspi",target:"_blank",rel:"noopener noreferrer"},null)),l.a.createElement("li",null,l.a.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/chryspii/",target:"_blank",rel:"noopener noreferrer"},null)),l.a.createElement("li",null,l.a.createElement("a",{className:"github",href:"https://github.com/chryspii",target:"_blank",rel:"noopener noreferrer"},null)),l.a.createElement("li",null,l.a.createElement("a",{className:"skype",href:"skype:vicky.chryst?call",target:"_blank",rel:"noopener noreferrer"},null)),l.a.createElement("li",null,l.a.createElement("a",{className:"stack-overflow",href:"https://stackexchange.com/users/17355334/chryspi",target:"_blank",rel:"noopener noreferrer"},null))))),l.a.createElement(L.a,null,l.a.createElement(A.a,{md:12},l.a.createElement("h2",{className:"section-title"},l.a.createElement("span",null,l.a.createElement("i",{className:"icon-paper-plane"}),"LEAVE A MESSAGE (UNDER MAINTENANCE)")),l.a.createElement("div",{className:"contact-form"},l.a.createElement("form",{id:"contact-form",method:"post"},l.a.createElement("input",{type:"hidden",name:"subject",id:"subject",value:"You have a new message from cvCard!"}),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"name"},"NAME"),l.a.createElement("input",{type:"text",name:"name",id:"name",className:"required"})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"email"},"EMAIL"),l.a.createElement("input",{type:"text",name:"email",id:"email",className:"required email"})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"message"},"MESSAGE"),l.a.createElement("textarea",{name:"message",id:"message",className:"required"})),l.a.createElement("p",null,l.a.createElement("button",{type:"submit",className:"submit button primary",disabled:!0},"SEND")))))))),l.a.createElement("section",{id:"resume",className:"page"},l.a.createElement("div",{className:"vs-content content"},l.a.createElement(L.a,null,l.a.createElement(A.a,{md:7},l.a.createElement(I,{works:m}),l.a.createElement(G,{educations:i})),l.a.createElement(D,{skills:o}))))))},C=a(14),B=a.n(C),M=function(e){return{type:"SET_ERRORS",payload:e}},F=function(){return{type:"ABOUT_LOADING"}},W=function(){return{type:"EDUCATION_LOADING"}},K=function(){return{type:"WORK_LOADING"}},q=function(){return{type:"ABOUT_LOADING"}},H=Object(i.b)((function(e){return{about:e.about.about,skill:e.skill.skill,work:e.skill.work,education:e.skill.education}}),{getAbout:function(){return function(e){e(F()),B.a.get("/api/abouts").then((function(t){e({type:"GET_ABOUT",payload:t.data}),e({type:"SET_ERRORS",payload:{}}),e(F())})).catch((function(t){e(M(t.response.data)),e(F())}))}},getSkill:function(){return function(e){e(q()),B.a.get("/api/skills").then((function(t){e({type:"GET_SKILL",payload:t.data}),e({type:"SET_ERRORS",payload:{}}),e(q())})).catch((function(t){e(M(t.response.data)),e(q())}))}},getEducation:function(){return function(e){e(W()),B.a.get("/api/educations").then((function(t){e({type:"GET_EDUCATION",payload:t.data}),e({type:"SET_ERRORS",payload:{}}),e(W())})).catch((function(t){e(M(t.response.data)),e(W())}))}},getWork:function(){return function(e){e(K()),B.a.get("/api/works").then((function(t){e({type:"GET_WORK",payload:t.data}),e({type:"SET_ERRORS",payload:{}}),e(K())})).catch((function(t){e(M(t.response.data)),e(K())}))}}})((function(e){var t=e.about,a=e.getAbout,r=e.skill,c=e.getSkill,s=e.work,o=e.getWork,i=e.education,m=e.getEducation;Object(n.useEffect)((function(){a(),c(),m(),o()}),[a,c,m,o]);var u=[],E=[],d=[],p=[];return t.forEach((function(e){if("description"===e.type)u.push(e.text);else if("button"===e.type)E.push({text:e.text,url:e.url});else if("skill"===e.type)d.push({title:e.title,text:e.text,icon:e.icon});else if("typewritter"===e.type){e.text.split(",").forEach((function(e){p.push(e)}))}})),l.a.createElement(U,{aboutDesc:u,aboutButtons:E,aboutSkills:d,aboutTypes:p,skill:r,education:i,work:s})})),P=function(){return l.a.createElement(i.a,{store:k},l.a.createElement(s.a,null,l.a.createElement(o.a,{path:"/",exact:!0,component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.ed790e0f.chunk.js.map