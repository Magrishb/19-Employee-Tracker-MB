(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(40)},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),s=t(2),i=t(3),o=t(5),m=t(4);var d=function(e){var a=e.users;return r.a.createElement("tbody",null,void 0!==a[0]&&void 0!==a[0].name?a.map(function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,s=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(s.date)))}):r.a.createElement(r.a.Fragment,null))};var u=function(e){var a=e.headings,t=e.users,n=e.handleSort;return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e){var a=e.name,t=e.width;return r.a.createElement("th",{className:"col",key:a,style:{width:t},onClick:function(){n(a.toLowerCase())}},a,r.a.createElement("span",{className:"pointer"}))}))),r.a.createElement(d,{users:t})))};var h=function(e){var a=e.handleSearchChange;return r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return a(e)}})))};var v=function(e){var a=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("div",{className:"navbar-collapse row",id:"navbarNav"},r.a.createElement(h,{handleSearchChange:a})))},f=t(16),p=t.n(f),E=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")},g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(a){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var t=e.state.filteredUsers.sort(function(t,n){return"ascend"===e.state.order?void 0===t[a]?1:void 0===n[a]?-1:"name"===a?t[a].first.localeCompare(n[a].first):t[a]-n[a]:void 0===t[a]?1:void 0===n[a]?-1:"name"===a?n[a].first.localeCompare(t[a].first):n[a]-t[a]});e.setState({filteredUsers:t})},e.handleSearchChange=function(a){console.log(a.target.value);var t=a.target.value,n=e.state.users.filter(function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())});e.setState({filteredUsers:n})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then(function(a){e.setState({users:a.data.results,filteredUsers:a.data.results})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"data-area"},r.a.createElement(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})))}}]),t}(n.Component),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))}}]),t}(n.Component);var N=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)},w=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"))}}]),t}(n.Component);t(39);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(w,null),r.a.createElement(b,null)))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c5df9f72.chunk.js.map