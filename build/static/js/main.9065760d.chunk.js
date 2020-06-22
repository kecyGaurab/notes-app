(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{71:function(e,t,n){e.exports=n(99)},76:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(76),n(142)),u=n(15),l=n(62),s=Object(l.a)({palette:{primary:{main:"#26a69a",light:"64d8cb",dark:"#00766c"},secondary:{main:"#FFFFFF"},background:{default:"#f5f5f5"}}});s.overrides={MuiCard:{root:{borderRadius:"10px"}},MuiContainer:{root:{padding:"10px 0"}},MuiTextField:{root:{backgroundColor:s.palette.common.white,fontSize:"30px",borderRadius:"5px"}},MuiCardContent:{root:{padding:"".concat(s.spacing(4),"px !important")}},MuiDialog:{root:{margin:"".concat(s.spacing(5),"px")},paperFullScreen:{backgroundColor:s.palette.background.default}},MuiCardHeader:{root:{padding:s.spacing(4),"& + .MuiCardContent-root":{paddingTop:"0 !important"}},title:Object(u.a)(Object(u.a)({},s.typography.h6),{},{color:s.palette.text.secondary}),action:{marginTop:0,marginRight:0,alignSelf:"center",display:"flex"}},MuiInputBase:{root:{borderRadius:"15px",height:"3.5em"}},MuiSvgIcon:{root:{paddingRight:"5px",fontSize:"30px"},fontSizeInherit:{fontSize:"60px",paddingTop:"25px"},fontSizeLarge:{fontSize:"50px"}},MuiButton:{root:{margin:"5px"},sizeLarge:{height:"55px"},outlinedSecondary:{backgroundColor:s.palette.primary.main}},MuiAppBar:{root:{background:s.palette.background.default},colorPrimary:{backgroundColor:s.palette.background.default}}};var p=s,d=n(12),m=n.n(d),f=n(16),v=n(37),b=n(139),g=n(140),h=n(141),x=n(131),E=n(143),y=n(134),k=function(e){var t=e.handleNoteChange,n=e.handleSubmit,a=e.newNote;return r.a.createElement("form",{onSubmit:n},r.a.createElement(x.a,{container:!0,justify:"center"},r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(E.a,{fullWidth:!0,variant:"outlined",value:a.content||"",onChange:t})),r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement(y.a,{size:"large",variant:"text",disabled:a.content.length<1,type:"submit"},"Add"))))},j=n(64),w=n(135),O=n(60),C=n.n(O),S=n(58),z=n.n(S),M=n(59),F=n.n(M),I=function(e){var t=e.note,n=e.handleRemove,a=e.handleStatus;return r.a.createElement(x.a,{container:!0,alignItems:"center",direction:"row",spacing:2,justify:"center"},r.a.createElement(x.a,{item:!0,xs:3},r.a.createElement(j.a,{elevation:0},r.a.createElement(w.a,{variant:"h6"},t.content))),r.a.createElement(x.a,{item:!0,xs:4},t.done?r.a.createElement(y.a,{size:"small",variant:"contained",color:"primary",startIcon:r.a.createElement(z.a,null),onClick:a},"Done"):r.a.createElement(y.a,{size:"small",variant:"contained",color:"secondary",startIcon:r.a.createElement(F.a,null),onClick:a},"Not done"),r.a.createElement(y.a,{size:"small",variant:"contained",color:"secondary",startIcon:r.a.createElement(C.a,null),onClick:n},"remove")))},R=n(28),N=n.n(R),A={getAll:function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/notes",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.put("".concat("/api/notes","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("".concat("/api/notes","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=n(136),D=n(137),T=n(138),J=n(61),L=n.n(J),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{color:"primary",position:"static"},r.a.createElement(D.a,null,r.a.createElement(T.a,{edge:"start","aria-label":"menu"},r.a.createElement(L.a,null)),r.a.createElement(w.a,{variant:"h3",color:"primary"},"Notes"))))},H=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({content:"",done:!1}),i=Object(v.a)(o,2),l=i[0],s=i[1];Object(a.useEffect)((function(){A.getAll().then((function(e){c(e)}))}),[]);var p=function(){var e=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,A.create(l);case 4:a=e.sent,c(n.concat(a)),s(Object(u.a)(Object(u.a)({},l),{},{content:""})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.filter((function(e){return e.id!==t})),!window.confirm("Are you sure you want to delete the note ?")){e.next=11;break}return e.prev=2,e.next=5,A.remove(t);case 5:c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.find((function(e){return e.id===t})),r=Object(u.a)(Object(u.a)({},a),{},{done:!a.done}),e.prev=2,e.next=5,A.update(t,r);case 5:o=e.sent,c(n.map((function(e){return e.id!==t?e:o}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{square:!0},r.a.createElement(h.a,null),r.a.createElement(x.a,{container:!0,direction:"column",justify:"center",spacing:2},r.a.createElement(x.a,{item:!0},r.a.createElement(q,null)),r.a.createElement(x.a,{item:!0},r.a.createElement(k,{handleSubmit:p,newNote:l,handleNoteChange:function(e){e.preventDefault(),s(Object(u.a)(Object(u.a)({},l),{},{content:e.target.value}))}})),r.a.createElement(x.a,{item:!0},n?n.map((function(e){return r.a.createElement(I,{key:e.id,note:e,handleRemove:function(){return d(e.id)},handleStatus:function(){return E(e.id)}})})):null)))))};o.a.render(r.a.createElement(i.a,{theme:p},r.a.createElement(H,null)),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9065760d.chunk.js.map