(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c(17),s=c.n(r),i=(c(52),c(22)),l=c(6),o=(c(53),c(101)),j=(c(54),c(7)),d=c(30),b=c(9),u={v:"VERTICAL",va:"VERTICAL_ALTERNATING",h:"HORIZONTAL"},h="http://localhost:8000",O={option:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{cursor:"pointer"})},control:function(e){return Object(b.a)(Object(b.a)({},e),{},{cursor:"pointer"})}},x=c(16),f=c.n(x),m=c(25),p=function(e){var t=e.onChange,c=Object(a.useState)([]),r=Object(j.a)(c,2),s=r[0],i=r[1];"".concat(h,"/api/tracker/");return Object(a.useEffect)((function(){f.a.get("http://localhost:8000/api/bills/").then((function(e){i(e.data.map((function(e){return{value:e.id,label:e.title}})))})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)(m.a,{placeholder:"Select Bill...",options:s,onChange:t,styles:O})},g=c(45),v=c.n(g),S=c(20),k=c.n(S),y=c(23),A=c.n(y);k.a.extend(A.a);var B=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)([]),l=Object(j.a)(i,2),o=l[0],b=l[1],O=Object(a.useState)({}),x=Object(j.a)(O,2),m=x[0],g=x[1],S=Object(a.useState)(),y=Object(j.a)(S,2),A=y[0],B=y[1],N="".concat(h,"/api/tracker/"),D=function(e){return{bill_id:e.bill,title:k()(e.stage_date).format("Do MMM YYYY"),cardSubtitle:e.bill_name,cardDetailedText:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("b",{children:e.stage}),Object(n.jsx)("br",{}),e.details]})}};return Object(a.useEffect)((function(){f.a.get(N).then((function(e){var t=e.data.map(D);s(t),b(t)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){var t=e.selBill?e.selBill.value:m.value;b(r.filter((function(e){return e.bill_id==t}))),B(Object(n.jsx)(n.Fragment,{}))}),[m,e.selBill]),Object(a.useEffect)((function(){e.performedAjax&&f.a.get(N).then((function(t){var c=t.data.map(D);s(c),g(e.selBill),e.setPerformedAjax&&e.setPerformedAjax(!1)})).catch((function(e){return console.log(e)}))}),[e.performedAjax]),Object(a.useEffect)((function(){e.hideInitBills&&v.a.isEmpty(e.selBill)?B(Object(n.jsx)(n.Fragment,{})):o.length>0&&B(Object(n.jsx)(d.a,{items:o,slideShow:!0,slideItemDuration:2500,scrollable:!0,mode:u[e.chronoMode?e.chronoMode:"va"]}))}),[o]),Object(n.jsxs)(n.Fragment,{children:[!e.hideBillSelector&&Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-10",children:Object(n.jsx)(p,{onChange:function(e){g(e)}})}),Object(n.jsx)("div",{className:"col-md-2",children:Object(n.jsx)("button",{className:"btn btn-info",onClick:function(){B(Object(n.jsx)(n.Fragment,{})),b(r)},children:"Refresh"})})]}),o&&o.length>0&&A,Object(n.jsxs)("h1",{style:{color:"#D6DBDF",textAlign:"center",display:o.length>0&&"none"},children:["\u4e41( \u2070\u0361  \u0139\u032f \u2070\u0361 ) \u310f",Object(n.jsx)("br",{}),"No Data"]})]})},N=c(96),D=c(97),F=c(98),T=c(99),E=function(e){var t=Object(a.useState)({}),c=Object(j.a)(t,2),r=c[0],s=c[1],i="".concat(h,"/api/tracker/"),l=function(e){e.preventDefault(),f.a.post(i,r).then((function(e){return console.log("saved")}))};return Object(n.jsxs)("form",{onSubmit:function(t){return e.submitForm?e.submitForm(t,r):l},ref:e.formRef,children:[Object(n.jsxs)(N.a,{children:[Object(n.jsx)(D.a,{children:"Bill"}),Object(n.jsx)(p,{onChange:function(t){s(Object(b.a)(Object(b.a)({},r),{},{bill:t.value})),e.setSelBill&&e.setSelBill(t),e.setPerformedAjax&&e.setPerformedAjax(!1)}})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsx)(D.a,{children:"Stage"}),Object(n.jsx)(m.a,{styles:O,placeholder:"Stage...",options:["First reading","Second reading","Committee Stage","Third Reading","Presidential Assent"].map((function(e){return{value:e,label:e}})),onChange:function(e){s(Object(b.a)(Object(b.a)({},r),{},{stage:e.value}))}})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsx)(D.a,{children:"Publication Date"}),Object(n.jsx)(F.a,{type:"date",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{stage_date:e.target.value}))}})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsx)(D.a,{children:"Description"}),Object(n.jsx)(F.a,{placeholder:"further description...",type:"textarea",onChange:function(e){return s(Object(b.a)(Object(b.a)({},r),{},{details:e.target.value}))}})]}),Object(n.jsx)(N.a,{children:Object(n.jsx)(T.a,{outline:!0,color:"success",children:"Save"})})]})},w=function(){var e=Object(a.useState)(),t=Object(j.a)(e,2),c=(t[0],t[1],Object(a.useState)({})),r=Object(j.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(!1),o=Object(j.a)(l,2),d=o[0],b=o[1],u="".concat(h,"/api/tracker/");return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(E,{submitForm:function(e,t){e.preventDefault(),f.a.post(u,t).then((function(e){b(!0),i({value:t.bill})})),console.log(t)},setSelBill:i,setPerformedAjax:b})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(B,{selBill:s,performedAjax:d,setPerformedAjax:b,hideBillSelector:!0,chronoMode:"v",hideInitBills:!0})})]})},C=c(100);k.a.extend(A.a);var I=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],s="".concat(h,"/api/tracker/");return Object(a.useEffect)((function(){f.a.get(s).then((function(e){var t=e.data.map((function(e){return{bill_id:e.bill,title:k()(e.stage_date).format("MMMM Do, YYYY"),cardSubtitle:e.bill_name,cardDetailedText:e.details}}));r(t)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(T.a,{color:"warning",size:"sm",className:"float-right",onClick:function(){var e=window.open("","my div","height=400,width=1200");e.document.write('<html><head><title>Bills Report</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">'),e.document.write('</head><body><div class="container-fluid">'),e.document.write(document.getElementById("rpt").innerHTML),e.document.write("</div></body></html>"),e.document.close(),setTimeout((function(){e.print()}),1e3)},children:[Object(n.jsx)("i",{className:"fa fa-print","aria-hidden":"true"})," Print"]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{id:"rpt",children:[Object(n.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"}),Object(n.jsxs)(C.a,{hover:!0,bordered:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Bill"}),Object(n.jsx)("th",{children:"Details"})]})}),Object(n.jsx)("tbody",{children:c&&c.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.title}),Object(n.jsx)("td",{children:e.cardSubtitle}),Object(n.jsx)("td",{children:e.cardDetailedText})]})}))})]})]})]})},P=function(){return Object(n.jsx)(i.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row mt-5",children:[Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsx)("center",{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(i.b,{className:"btn btn-outline-secondary",to:"/tracker/addtracker",children:"Add Bill Tracker"}),Object(n.jsx)(i.b,{className:"btn btn-outline-danger",to:"/tracker/",children:"Tracker"}),Object(n.jsx)(i.b,{className:"btn btn-outline-success",to:"/tracker/rpt",children:"Report"})]})})}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/tracker/addtracker",children:Object(n.jsx)(w,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/tracker/",component:B}),Object(n.jsx)(l.a,{exact:!0,path:"/tracker/rpt",component:I})]})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(n.jsx)(P,{}),document.getElementById("root")),M()}},[[95,1,2]]]);
//# sourceMappingURL=main.bdcf4b50.chunk.js.map