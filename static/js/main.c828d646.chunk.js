(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={enter:"transitions_enter__3x7Vk",enterActive:"transitions_enterActive__oLyvq",exit:"transitions_exit__164dh",exitActive:"transitions_exitActive__1iUzH"}},16:function(t,e,n){t.exports={info:"ContactList_info__S-pyD",list:"ContactList_list__1tk2C",item:"ContactList_item__2ek-u",btn:"ContactList_btn__1g3j4"}},26:function(t,e,n){t.exports={label:"Filter_label__1FgH1",input:"Filter_input__3GT-3"}},34:function(t,e,n){t.exports={form:"Form_form__2P3Yv"}},58:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c,a=n(1),r=n(0),o=n(7),i=n.n(o),s=n(5),l=n(30),b=n(19),u=n(8),j=n(31),m=n.n(j),O=n(10),h=n(32),d=n.n(h),f=n(20),p=n(2),v=n(33),_=n.n(v),x=Object(u.b)("contacts/add",(function(t,e){return{payload:{id:_.a.generate(),name:t,number:e}}})),g=Object(u.b)("contacts/delete"),y=Object(u.b)("contacts/filter"),N=Object(u.c)([],(c={},Object(f.a)(c,x,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(f.a)(c,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),w=Object(u.c)("",Object(f.a)({},y,(function(t,e){return e.payload}))),C=Object(p.c)({items:N,filter:w}),E=[].concat(Object(b.a)(Object(u.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[m.a]),k={key:"contacts",storage:d.a,blacklist:["filter"]},P=Object(u.a)({reducer:{contacts:Object(O.g)(k,C)},middleware:E,devTools:!1}),T=Object(O.h)(P),F=(n(57),n(58),n(6)),I=(n(59),n(34)),S=n.n(I);function z(t){var e=t.children;return Object(a.jsx)("div",{className:S.a.form,children:e})}var L=n(27),A=function(t){return t.contacts.items},M=function(t){return t.contacts.filter},R=function(t){var e=A(t),n=M(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},H=n(35),J=n.n(H),Y=n(9),B=n.n(Y);function D(){var t=Object(s.b)(),e=Object(s.c)(A),n=Object(r.useState)(""),c=Object(L.a)(n,2),o=c[0],i=c[1],l=Object(r.useState)(""),b=Object(L.a)(l,2),u=b[0],j=b[1],m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":i(c);break;case"number":j(c);break;default:return}},O=function(){i(""),j("")};return Object(a.jsxs)("form",{className:B.a.form,onSubmit:function(n){n.preventDefault(),!function(t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(o)?!function(t){return e.find((function(e){return e.number===t}))}(u)?!function(t,e){return""===t.trim()||""===e.trim()}(o,u)?!function(t){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(t)}(u)?t(x(o,u)):F.b.error("Enter the correct number phone!",{position:F.b.POSITION.TOP_CENTER}):F.b.info("Enter the contact's name and number phone!",{position:F.b.POSITION.TOP_CENTER}):F.b.warn("".concat(u," is already in the phonebook."),{position:F.b.POSITION.TOP_CENTER}):F.b.warn("".concat(o," is already in the phonebook."),{position:F.b.POSITION.TOP_CENTER}),O()},children:[Object(a.jsxs)("label",{className:B.a.label,children:[Object(a.jsx)("span",{className:B.a.title,children:"Name"}),Object(a.jsx)("input",{className:B.a.input,type:"text",name:"name",value:o,onChange:m,placeholder:"Jennifer Aniston"})]}),Object(a.jsxs)("label",{className:B.a.label,children:[Object(a.jsx)("span",{className:B.a.title,children:"Number"}),Object(a.jsx)(J.a,{options:{delimiter:"-",blocks:[3,2,2]},placeholder:"734-85-92",type:"tel",name:"number",value:u,onChange:m,className:B.a.input})]}),Object(a.jsx)("button",{className:B.a.btn,type:"submit",children:"Add contact"})]})}var G=n(62),U=n(15),q=n.n(U),Q=n(26),V=n.n(Q);function K(){var t=Object(s.b)(),e=Object(s.c)(M),n=Object(s.c)(A);return Object(a.jsx)(G.a,{in:n.length>1,timeout:250,classNames:q.a,mountOnEnter:!0,unmountOnExit:!0,children:Object(a.jsxs)("label",{className:V.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:V.a.input,type:"text",value:e,onChange:function(e){return t(y(e.target.value))},name:"filter",placeholder:"input name"})]})})}var W=n(63);function X(){return(X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function Z(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var $=r.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"}),tt=r.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"});function et(t,e){var n=t.title,c=t.titleId,a=Z(t,["title","titleId"]);return r.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"bin"):n?r.createElement("title",{id:c},n):null,$,tt)}var nt=r.forwardRef(et),ct=(n.p,n(16)),at=n.n(ct);function rt(){var t=Object(s.b)(),e=Object(s.c)(R),n=Object(s.c)(A);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(G.a,{in:!n.length,timeout:250,classNames:q.a,mountOnEnter:!0,unmountOnExit:!0,children:Object(a.jsx)("p",{children:"Your phonebook is empty. Please add contact."})}),Object(a.jsx)(W.a,{component:"ul",className:at.a.list,children:e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(a.jsx)(G.a,{timeout:250,mountOnEnter:!0,unmountOnExit:!0,classNames:q.a,children:Object(a.jsxs)("li",{className:at.a.item,children:[Object(a.jsxs)("p",{className:at.a.info,children:[c,": ",r]}),Object(a.jsx)("button",{className:at.a.btn,type:"button",onClick:function(){return t(g(n))},children:Object(a.jsx)(nt,{width:"24",height:"24"})})]})},n)}))})]})}function ot(){return Object(a.jsxs)(z,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(D,{}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(K,{}),Object(a.jsx)(rt,{}),Object(a.jsx)(F.a,{autoClose:2700})]})}i.a.render(Object(a.jsx)(s.a,{store:P,children:Object(a.jsx)(l.a,{loading:null,persistor:T,children:Object(a.jsx)(ot,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__cP86s",label:"ContactForm_label__2wU5A",title:"ContactForm_title__1vH1o",input:"ContactForm_input__8n0hf",btn:"ContactForm_btn__ucQxk",glowing:"ContactForm_glowing__3kcGY"}}},[[61,1,2]]]);
//# sourceMappingURL=main.c828d646.chunk.js.map