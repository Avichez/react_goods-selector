(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),n=c(4),a=c(5),l=c(8),d=c(7),r=c(1),i=c(6),u=c.n(i),b=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.setSelectedGood=function(t){e.setState({selectedGood:t})},e.removeSelectedGood=function(){e.setState({selectedGood:""})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[t?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.removeSelectedGood})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":t===c}),children:[Object(b.jsx)("td",{children:t===c?Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.removeSelectedGood,children:"-"}):Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.setSelectedGood(c)},children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(r.Component);o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.543547c3.chunk.js.map