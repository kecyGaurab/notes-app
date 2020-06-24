(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=(n(94),n(159)),u=n(17),l=n(78),p=Object(l.a)({palette:{primary:{main:"#26a69a",light:"64d8cb",dark:"#00766c"},secondary:{main:"#FFFFFF"},background:{default:"#f5f5f5"}}});p.overrides={MuiCard:{root:{borderRadius:"15px",width:"280px",marginBottom:"40px"}},MuiContainer:{root:{padding:"10px 0"}},MuiTextField:{root:{backgroundColor:p.palette.common.white,fontSize:"30px",borderRadius:"5px"}},MuiCardContent:{root:{padding:"25px !important"}},MuiDialog:{root:{margin:"".concat(p.spacing(5),"px")},paperFullScreen:{backgroundColor:p.palette.background.default}},MuiCardHeader:{root:{padding:p.spacing(4),"& + .MuiCardContent-root":{paddingTop:"0 !important"}},title:Object(u.a)(Object(u.a)({},p.typography.h6),{},{color:p.palette.text.secondary}),action:{marginTop:0,marginRight:0,alignSelf:"center",display:"flex"}},MuiInputBase:{root:{borderRadius:"15px",height:"3.5em"}},MuiSvgIcon:{root:{paddingRight:"5px",fontSize:"30px"},fontSizeInherit:{fontSize:"60px",paddingTop:"25px"},fontSizeLarge:{fontSize:"50px"}},MuiButton:{root:{margin:"5px"},sizeLarge:{height:"55px"},outlinedSecondary:{backgroundColor:p.palette.primary.main}},MuiAppBar:{root:{background:p.palette.background.default},colorPrimary:{backgroundColor:p.palette.background.default}}};var s=p,d=n(13),m=n.n(d),f=n(18),h=n(41),b=n(34),g=n(158),v=n(150),E=n(148),x=n(149),j=n(162),O=n(151),y=n(152),w=n(144),k=n(147),C=n(117),S=n(160),F=function(e){var t=e.handleSubmit,n=e.handleChange,a=e.newNote;return r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement("form",{onSubmit:t},r.a.createElement(E.a,{container:!0,direction:"column",spacing:4},r.a.createElement(E.a,{item:!0,xs:12,align:"center"},r.a.createElement(C.a,{variant:"h6"},"New Note")),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(S.a,{fullWidth:!0,onChange:n,variant:"outlined",type:"text",label:"title",name:"title",value:a.title||""})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(S.a,{fullWidth:!0,onChange:n,variant:"outlined",type:"text",label:"content",name:"content",multiline:!0,rows:3,value:a.content||""})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(x.a,{disabled:a.title.length<1||a.content.length<1,color:"primary",type:"submit",variant:"outlined"},"Submit"))))))},M=function(e){var t=e.handleSubmit,n=e.handleChange,a=e.dialogOpen,c=e.newNote,o=e.handleDialog;return r.a.createElement(v.a,null,r.a.createElement(j.a,{open:a,disablePortal:!0,disableEnforceFocus:!0},r.a.createElement(O.a,null,r.a.createElement(x.a,{variant:"contained",onClick:o},"Close")),r.a.createElement(y.a,null,r.a.createElement(F,{handleSubmit:t,handleChange:n,newNote:c}))))},z=n(154),R=n(30),N=n(31),I=n(75),A=n.n(I);function q(){var e=Object(R.a)(["\n      padding-top: '8px';\n    "]);return q=function(){return e},e}function B(){var e=Object(R.a)(["\n  ","\n"]);return B=function(){return e},e}function D(){var e=Object(R.a)(["\n      color: red;\n    "]);return D=function(){return e},e}function L(){var e=Object(R.a)(["\n  ","\n"]);return L=function(){return e},e}function Q(){var e=Object(R.a)(["\n      height: ",";\n    "]);return Q=function(){return e},e}function T(){var e=Object(R.a)(["\n  ","\n"]);return T=function(){return e},e}var W=Object(N.b)(w.a)(T(),(function(e){return Object(N.a)(Q(),!0===e.extended?" 590px":"380px")})),P=(Object(N.b)(A.a)(L(),(function(){return Object(N.a)(D())})),Object(N.b)(C.a)(B(),(function(){return Object(N.a)(q())})),n(153)),J=n(76),H=n.n(J),G=function(e){var t=e.note,n=e.handleRemove;return r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:10},r.a.createElement(C.a,{variant:"h6"},t.title)),r.a.createElement(E.a,{item:!0,xs:2},r.a.createElement(P.a,{onClick:function(){return n(t)}},r.a.createElement(H.a,null))))},K=function(e){var t=e.note,n=e.handleRemove;return r.a.createElement(W,{square:!0,elevation:5},r.a.createElement(k.a,null,r.a.createElement(E.a,{container:!0,direction:"column",spacing:1},r.a.createElement(E.a,{item:!0},r.a.createElement(G,{note:t,handleRemove:n})),r.a.createElement(z.a,null),r.a.createElement(E.a,{item:!0},r.a.createElement(C.a,{variant:"body1"},t.content)))))},U=n(39),V=n.n(U),X={getAll:function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("/api/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("/api/notes",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.put("".concat("/api/notes","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.delete("".concat("/api/notes","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=n(156),Z=n(157),$=n(155),_=n(77),ee=n.n(_),te=function(e){var t=e.query,n=e.handleQueryChange;return r.a.createElement(E.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:5},r.a.createElement(S.a,{value:t,onChange:n,fullWidth:!0,size:"medium",id:"outlined-search",type:"search",variant:"outlined",placeholder:"Search for notes",InputProps:{startAdornment:r.a.createElement($.a,{position:"start"},r.a.createElement(ee.a,{fontSize:"large"}))}})))},ne=function(e){var t=e.handleQueryChange,n=e.query;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{color:"primary",position:"static"},r.a.createElement(Z.a,null,r.a.createElement(E.a,{container:!0,justify:"space-between"},r.a.createElement(E.a,{item:!0,xs:3,align:"right"},r.a.createElement(C.a,{variant:"h3",color:"primary"},"Notes")),r.a.createElement(E.a,{item:!0,xs:4},r.a.createElement(te,{query:n,handleQueryChange:t}))))))},ae=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({title:"",content:"",done:!1}),i=Object(b.a)(o,2),l=i[0],p=i[1],s=Object(a.useState)(""),d=Object(b.a)(s,2),j=d[0],O=d[1],y=Object(a.useState)(!1),w=Object(b.a)(y,2),k=w[0],C=w[1],S=Object(a.useState)([]),F=Object(b.a)(S,2),z=F[0],R=F[1];Object(a.useEffect)((function(){X.getAll().then((function(e){c(e)}))}),[]),Object(a.useEffect)((function(){!function(){var e=n.filter((function(e){return e.title.toLowerCase().startsWith(j.toLowerCase())}));R(e)}()}),[j,n]);var N=function(){var e=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,X.create(l);case 4:a=e.sent,c(n.concat(a)),p(Object(u.a)(Object(u.a)({},l),{},{title:"",content:""})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0);case 12:C(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.filter((function(e){return e.id!==t})),!window.confirm("Are you sure you want to delete the note ?")){e.next=11;break}return e.prev=2,e.next=5,X.remove(t);case 5:c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.find((function(e){return e.id===t})),r=Object(u.a)(Object(u.a)({},a),{},{done:!a.done}),e.prev=2,e.next=5,X.update(t,r);case 5:o=e.sent,c(n.map((function(e){return e.id!==t?e:o}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null),r.a.createElement(ne,{query:j,handleQueryChange:function(e){O(e.target.value)}}),r.a.createElement(v.a,null,r.a.createElement(E.a,{container:!0,justify:"space-around",direction:"row",spacing:5},r.a.createElement(E.a,{item:!0,xs:12,align:"center"},r.a.createElement(x.a,{variant:"outlined",size:"large",color:"primary",onClick:function(){return C(!0)}},"Add New"),r.a.createElement(M,{handleDialog:function(){C(!1)},dialogOpen:k,handleSubmit:N,newNote:l,handleChange:function(e){p(Object(u.a)(Object(u.a)({},l),{},Object(h.a)({},e.target.name,e.target.value)))}})),0!==z.length?z.map((function(e){return r.a.createElement(K,{key:e.id,note:e,handleRemove:function(){return I(e.id)},handleStatus:function(){return A(e.id)}})})):n.map((function(e){return r.a.createElement(K,{key:e.id,note:e,handleRemove:function(){return I(e.id)},handleStatus:function(){return A(e.id)}})})))))};o.a.render(r.a.createElement(i.a,{theme:s},r.a.createElement(ae,null)),document.getElementById("root"))},89:function(e,t,n){e.exports=n(116)},94:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.0b415160.chunk.js.map