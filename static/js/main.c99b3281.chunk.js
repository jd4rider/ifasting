(this.webpackJsonpcodesandbox=this.webpackJsonpcodesandbox||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},130:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},140:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n,c,s=a(0),r=a.n(s),o=a(31),i=a.n(o),d=(a(104),a(4)),j=(a(105),a(14)),l=a(165),b=a(15),u=a(8),O=a(24),h=a.n(O),p=(a(130),a(90)),g=(a(131),a(91)),x=a(1),f=function(e){var t=Object(j.b)(),a=Object(s.useState)("btn-success btn-edit btn btn-default"),n=Object(d.a)(a,2),c=n[0],r=n[1],o=Object(s.useState)("Start Fast"),i=Object(d.a)(o,2),l=i[0],b=i[1],u=Object(s.useState)(t().username),O=Object(d.a)(u,2),f=O[0],m=(O[1],Object(s.useState)()),v=Object(d.a)(m,2),k=(v[0],v[1]),S=Object(s.useState)((new Date).toISOString().slice(0,19).replace("T"," ")),y=Object(d.a)(S,2),C=(y[0],y[1]),F=Object(s.useState)(0),w=Object(d.a)(F,2),N=w[0],I=w[1],L=Object(s.useState)(!0),T=Object(d.a)(L,2),z=T[0],B=T[1],H={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t().token)},D=function(){r("btn-danger btn-edit btn btn-default"),b("End Fast")},E=function(){h.a.put("".concat("https://ifasting-express.herokuapp.com/").concat("api/tracker/end"),JSON.stringify({username:f}),{headers:H}).then((function(e){200!=e.status&&201!=e.status||(r("btn-success btn-edit btn btn-default"),b("Start Fast"),I(0),B(!1),C((new Date).toISOString().slice(0,19).replace("T"," "))),console.log(e)}))};return Object(s.useEffect)((function(){h.a.get("".concat("https://ifasting-express.herokuapp.com/").concat("api/tracker/get/unfinished","/").concat(t().username),{headers:H}).then((function(e){if(200==e.status||201==e.status)if(console.log(e.data),console.log(e.data[0].endtime),console.log(e.data[0].starttime),e.data[0].starttime&&null==e.data[0].endtime){D(),k(e.data[0].starttime);var t=e.data[0].hours/16*100;I(t<1e-4?1e-4:t),e.data[0].hours>=16?B(!1):B(!0)}else B(!1)})),B(!0)}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(p.a,{value:N,text:"".concat(Math.round(N),"%"),children:Object(x.jsx)(g.a,{onClick:function(){"btn-success btn-edit btn btn-default"===c?h.a.post("".concat("https://ifasting-express.herokuapp.com/").concat("api/tracker/start"),JSON.stringify({username:f}),{headers:H}).then((function(e){200!=e.status&&201!=e.status||(D(),I(1e-4),B(!0),k((new Date).toISOString().slice(0,19).replace("T"," "))),console.log(e)})):E()},style:{"border-radius":"50%"},size:"lg",className:c,disabled:z,children:l})})})},m=a(92),v=(a(133),a(164)),k=function(e){var t=Object(m.useMediaQuery)({query:"(orientation: portrait)"}),a=Object(s.useState)(!0),n=Object(d.a)(a,2),c=n[0],r=n[1];return Object(x.jsxs)(x.Fragment,{children:[c&&Object(x.jsxs)(v.a,{variant:"info",onClose:function(){r(!1)},dismissible:!0,className:"mb-0",children:[Object(x.jsx)(v.a.Heading,{children:"Hey, nice to see you"}),"Thank you for trying out the app. You will need to ",Object(x.jsx)(v.a.Link,{as:b.b,to:"/Login",children:"Login"})," or ",Object(x.jsx)(v.a.Link,{as:b.b,to:"/Signup",children:"Signup"})," to track your fasts. IT'S FREE!!!"]}),Object(x.jsx)("div",{children:t?Object(x.jsx)("div",{style:{backgroundImage:"url(".concat("/ifasting/ifasting2transm.png",")")},className:"backgroundImage",children:Object(x.jsx)("h2",{className:"text",children:"Start Tracking your 16:8 Fasting today!!!"})}):Object(x.jsx)("div",{style:{backgroundImage:"url(".concat("/ifasting/ifasting2trans.png",")")},className:"backgroundImage",children:Object(x.jsx)("h1",{className:"text",children:"Start Tracking your 16:8 Fasting today!!!"})})})]})},S=a(2),y=a(44),C=a(55),F=a(38),w=a(45),N=a.n(w),I=(a(134),Object(F.css)(n||(n=Object(y.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])))),L=function(){var e=Object(j.d)(),t=r.a.useState({username:"",password:""}),a=Object(d.a)(t,2),n=a[0],c=a[1],s=r.a.useState(!0),o=Object(d.a)(s,2),i=o[0],l=o[1],b=r.a.useState("#FF0000"),O=Object(d.a)(b,1)[0],p=Object(u.g)();return Object(x.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(x.jsxs)("div",{id:"formContent",className:i?null:"grayout",children:[Object(x.jsxs)(C.a,{onSubmit:function(t){t.preventDefault(),console.log("https://ifasting-express.herokuapp.com/"),h.a.post("".concat("https://ifasting-express.herokuapp.com/").concat("api/login"),n).then((function(t){200===t.status&&e({token:t.data.token,expiresIn:60,tokenType:"Bearer",authState:t.data})&&p.push("/")}))},children:[Object(x.jsxs)(C.a.Group,{size:"lg",controlId:"login",children:[Object(x.jsx)(C.a.Label,{children:"Username"}),Object(x.jsx)(C.a.Control,{autoFocus:!0,type:"username",value:n.username,onChange:function(e){return c(Object(S.a)(Object(S.a)({},n),{},{username:e.target.value}))},style:{"text-transform":"lowercase"}})]}),Object(x.jsxs)(C.a.Group,{size:"lg",controlId:"password",children:[Object(x.jsx)(C.a.Label,{children:"Password"}),Object(x.jsx)(C.a.Control,{type:"password",value:n.password,onChange:function(e){return c(Object(S.a)(Object(S.a)({},n),{},{password:e.target.value}))}})]}),Object(x.jsx)(g.a,{block:!0,size:"lg",type:"submit",disabled:!(n.username.length>0&&n.password.length>0),onClick:function(){return l(!i)},children:"Login"})]}),Object(x.jsx)("div",{id:"formFooter",children:Object(x.jsx)("a",{className:"underlineHover",href:"#",children:"Forgot Password?"})})]}),Object(x.jsx)("br",{}),Object(x.jsx)(N.a,{color:O,loading:!i,css:I,size:150})]})},T=(a(140),Object(F.css)(c||(c=Object(y.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])))),z=function(){var e=Object(j.d)(),t=r.a.useState({username:"",password:"",fname:"",lname:""}),a=Object(d.a)(t,2),n=a[0],c=a[1],s=r.a.useState(!0),o=Object(d.a)(s,2),i=o[0],l=o[1],b=r.a.useState("#FF0000"),O=Object(d.a)(b,1)[0],p=Object(u.g)();return Object(x.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(x.jsxs)("div",{id:"formContent",className:i?null:"grayout",children:[Object(x.jsxs)(C.a,{onSubmit:function(t){t.preventDefault(),console.log("https://ifasting-express.herokuapp.com/"),h.a.post("".concat("https://ifasting-express.herokuapp.com/").concat("api/signup"),n).then((function(t){200===t.status?e({token:t.data.token,expiresIn:60,tokenType:"Bearer",authState:t.data})&&p.push("/"):201===t.status&&"User Already Exists"===t.data.error&&(l(!0),alert(t.data.error))}))},children:[Object(x.jsxs)(C.a.Group,{size:"lg",controlId:"login",children:[Object(x.jsx)(C.a.Label,{children:"First Name"}),Object(x.jsx)(C.a.Control,{autoFocus:!0,type:"username",value:n.fname,onChange:function(e){return c(Object(S.a)(Object(S.a)({},n),{},{fname:e.target.value}))}})]}),Object(x.jsxs)(C.a.Group,{size:"lg",controlId:"login",children:[Object(x.jsx)(C.a.Label,{children:"Last Name"}),Object(x.jsx)(C.a.Control,{type:"username",value:n.lname,onChange:function(e){return c(Object(S.a)(Object(S.a)({},n),{},{lname:e.target.value}))}})]}),Object(x.jsxs)(C.a.Group,{size:"lg",controlId:"login",children:[Object(x.jsx)(C.a.Label,{children:"Username"}),Object(x.jsx)(C.a.Control,{type:"username",value:n.username,onChange:function(e){return c(Object(S.a)(Object(S.a)({},n),{},{username:e.target.value}))},style:{"text-transform":"lowercase"}})]}),Object(x.jsxs)(C.a.Group,{size:"lg",controlId:"password",children:[Object(x.jsx)(C.a.Label,{children:"Password"}),Object(x.jsx)(C.a.Control,{type:"password",value:n.password,onChange:function(e){return c(Object(S.a)(Object(S.a)({},n),{},{password:e.target.value}))}})]}),Object(x.jsx)(g.a,{block:!0,size:"lg",type:"submit",disabled:!(n.username.length>0&&n.password.length>0),onClick:function(){return l(!i)},children:"Signup"})]}),Object(x.jsx)("div",{id:"formFooter",children:Object(x.jsx)("a",{className:"underlineHover",href:"#",children:"Forgot Password?"})})]}),Object(x.jsx)("br",{}),Object(x.jsx)(N.a,{color:O,loading:!i,css:T,size:150})]})},B=a(168),H=a(169),D=a(166),E=function(e){var t=Object(j.b)(),a="",n="",c="";e.data&&(a=e.data.html,n=e.data.css,c=e.data.js);var r=Object(s.useState)({title:"",html:a,css:n,js:c,username:t().username}),o=Object(d.a)(r,2),i=o[0],l=o[1],b={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t().token)},u=function(){h.a.post("".concat("https://ifasting-express.herokuapp.com/").concat("api/workspace/save"),JSON.stringify(i),{headers:b}).then((function(t){200!=t.status&&201!=t.status||(e.loader(),setTimeout((function(){e.setLoading(!0),e.handleClose()}),1e3))}))};return Object(s.useEffect)((function(){e.setformSubmitMethod(u)})),Object(x.jsxs)(C.a,{children:[Object(x.jsxs)(C.a.Group,{controlId:"formGridName",children:[Object(x.jsx)(C.a.Label,{children:"Workspace Title"}),Object(x.jsx)(C.a.Control,{onChange:function(e){return l(Object(S.a)(Object(S.a)({},i),{},{title:e.target.value}))}})]}),Object(x.jsx)("br",{})]})},G=a(75);Object(G.createTheme)("solarized",{text:{primary:"#268bd2",secondary:"#2aa198"},background:{default:"#002b36"},context:{background:"#cb4b16",text:"#FFFFFF"},divider:{default:"#073642"},action:{button:"rgba(0,0,0,.54)",hover:"rgba(0,0,0,.08)",disabled:"rgba(0,0,0,.12)"}});a(153);var M,A=a(167),P=a(97),W=Object(F.css)(M||(M=Object(y.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),_=function(e){var t=Object(s.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(!0),o=Object(d.a)(r,2),i=o[0],j=o[1],l=Object(s.useState)("#FF0000"),b=Object(d.a)(l,1)[0],u=function(){return c(!1)},O=function(){return c(!0)},h=function(){},p=function(e){h=e};return Object(s.useEffect)((function(){e.addrecord||e.setModalHandlers(O)}),[]),Object(x.jsxs)(x.Fragment,{children:[e.addrecord&&Object(x.jsxs)("div",{className:"modalbutton",children:[Object(x.jsx)(P.a,{className:"modalplus",onClick:function(){O(),j(!0)}}),Object(x.jsx)("br",{}),"Create New"]}),Object(x.jsxs)(A.a,{show:n,onHide:function(){u(),j(!0),e.loader()},children:[Object(x.jsx)(A.a.Header,{closeButton:!0,children:Object(x.jsx)(A.a.Title,{children:e.title})}),Object(x.jsxs)(A.a.Body,{children:[e.addrecord&&Object(x.jsx)(E,{loader:function(){},setLoading:j,handleClose:u,setformSubmitMethod:p}),!e.addrecord&&Object(x.jsx)(E,{data:e.data,loader:function(){},setLoading:j,handleClose:u,setformSubmitMethod:p})]}),Object(x.jsxs)(A.a.Footer,{children:[Object(x.jsx)(N.a,{color:b,loading:!i,css:W,size:50}),Object(x.jsx)(g.a,{variant:"secondary",onClick:function(){u(),j(!0),e.loader()},children:"Close"}),Object(x.jsx)(g.a,{variant:"primary",onClick:function(){j(!1),h()},children:"Save Changes"})]})]})]})},J=(a(154),function(e){e}),R=function(e){var t=Object(j.b)(),a=Object(j.e)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(B.a,{expand:!1,bg:"dark",variant:"dark",sticky:"top",children:[Object(x.jsx)(B.a.Brand,{as:b.b,to:"/",children:"iFasting"}),Object(x.jsx)(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(B.a.Collapse,{id:"basic-navbar-nav",children:[Object(x.jsx)(H.a,{className:"me-auto"}),Object(x.jsx)(H.a,{children:Object(x.jsx)(D.a,{menuAlign:"right",title:"Hello ".concat(t().username),id:"basic-nav-dropdown",children:Object(x.jsx)(D.a.Item,{onClick:function(){return a()},children:"Logout"})})})]})]}),Object(x.jsx)(_,{title:"Save Trigger",data:e.data,loader:e.loader,addrecord:!1,setModalHandlers:J})]})},U=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(B.a,{expand:!1,bg:"dark",variant:"dark",fixed:"bottom",children:[Object(x.jsx)(B.a.Brand,{as:b.b,to:"/",children:"iFasting"}),Object(x.jsx)(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(B.a.Collapse,{id:"basic-navbar-nav",children:[Object(x.jsx)(H.a,{className:"me-auto"}),Object(x.jsx)(H.a,{children:Object(x.jsxs)(D.a,{menuAlign:"right",title:"Hello Random User",id:"basic-nav-dropdown",children:[Object(x.jsx)(D.a.Item,{as:b.b,to:"/Signup",children:"Signup"}),Object(x.jsx)(D.a.Item,{as:b.b,to:"/Login",children:"Login"})]})})]})]})})},q=function(){var e=Object(j.c)(),t=Object(s.useState)({}),a=Object(d.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)([]),o=Object(d.a)(r,2),i=o[0],O=o[1],h=Object(s.useState)({}),p=Object(d.a)(h,2),g=p[0],m=p[1];return e()?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(R,{data:n,workspaces:i,currWorkspace:g,setCurrentWorkspace:m,loader:function(){}}),Object(x.jsx)(l.a,{fluid:!0,style:{paddingLeft:"0px",paddingRight:"0px",paddingTop:"56.4px",width:"400px"},children:Object(x.jsx)(u.d,{children:Object(x.jsx)(u.b,{path:"/",children:Object(x.jsx)(f,{tutorial:!1,setData:c,currentWorkspace:g,setWorkspaces:O,setCurrentWorkspace:m,authified:!0})})})})]})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(U,{}),"  ",Object(x.jsx)(l.a,{fluid:!0,style:{paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px"},children:Object(x.jsxs)(u.d,{children:[Object(x.jsx)(u.b,{path:"/Login",children:Object(x.jsx)(L,{})}),Object(x.jsx)(u.b,{path:"/Signup",children:Object(x.jsx)(z,{})}),Object(x.jsx)(u.b,{path:"/",children:Object(x.jsx)(k,{})})]})})]})})},Q=function(){return Object(x.jsx)(j.a,{authStorageType:"localstorage",authStorageName:"_auth_t",authTimeStorageName:"_auth_time",stateStorageName:"_auth_state",children:Object(x.jsx)(q,{})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,170)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(157);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Q,{})}),document.getElementById("root")),Y()}},[[158,1,2]]]);
//# sourceMappingURL=main.c99b3281.chunk.js.map