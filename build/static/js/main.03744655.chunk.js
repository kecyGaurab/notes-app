(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),o=(n(22),n(1)),i=n.n(o),s=n(3),p=n(4),l=n(6),f=function(e){var t=e.handleNoteChange,n=e.handleSubmit,a=e.newNote;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("input",{value:a.content||"",onChange:t}),r.a.createElement("button",{disabled:a.content.length<1,type:"submit"},"Add")))},d=function(e){var t=e.note,n=e.handleRemove,a=e.handleStatus;return r.a.createElement("div",null,r.a.createElement("span",null,t.content),r.a.createElement("button",{style:{marginLeft:"15px"},type:"button",onClick:a},t.done?"not done":"mark as done"),r.a.createElement("button",{style:{marginLeft:"15px"},type:"button",onClick:n},"remove"))},v=n(5),m=n.n(v),b={getAll:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/notes",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.put("".concat("/api/notes","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("".concat("/api/notes","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)({content:"",done:!1}),o=Object(l.a)(u,2),v=o[0],m=o[1];Object(a.useEffect)((function(){b.getAll().then((function(e){c(e)}))}),[]);console.log("notes",n);var h=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.create(v);case 4:a=e.sent,c(n.concat(a)),m(Object(p.a)(Object(p.a)({},v),{},{content:""})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.filter((function(e){return e.id!==t})),!window.confirm("Are you sure you want to delete the note ?")){e.next=11;break}return e.prev=2,e.next=5,b.remove(t);case 5:c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.find((function(e){return e.id===t})),r=Object(p.a)(Object(p.a)({},a),{},{done:!a.done}),e.prev=2,e.next=5,b.update(t,r);case 5:u=e.sent,c(n.map((function(e){return e.id!==t?e:u}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("h1",null,"Note App"),r.a.createElement(f,{handleSubmit:h,newNote:v,handleNoteChange:function(e){e.preventDefault(),m(Object(p.a)(Object(p.a)({},v),{},{content:e.target.value}))}})),r.a.createElement("div",{style:{padding:"10px"}},n?n.map((function(e){return r.a.createElement(d,{key:e.id,note:e,handleRemove:function(){return x(e.id)},handleStatus:function(){return w(e.id)}})})):null))};u.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.03744655.chunk.js.map