(this["webpackJsonpreact-app-test"]=this["webpackJsonpreact-app-test"]||[]).push([[0],{128:function(t,e,c){},129:function(t,e,c){},427:function(t,e,c){"use strict";c.r(e);var s=c(1),n=c(15),i=c.n(n),a=c(16),j=c.n(a),r=(c(128),c(118)),l=c(119),d=c(123),b=c(122),h=c.p+"static/media/headphones.054e2115.png",o=(c(129),c(130),c(131),function(t){Object(d.a)(c,t);var e=Object(b.a)(c);function c(t){var s;return Object(r.a)(this,c),(s=e.call(this,t)).increment=function(){s.setState({count:s.state.count+1})},s.decrement=function(){s.setState({count:s.state.count-1})},s.calculateShip=function(){s.state.subtotal<=100?s.setState({ship:23.8}):s.setState({ship:0})},s.updateShoppingCart=function(){var t=s.state.count*s.state.price*100/100;t.toFixed(2),s.setState({subtotal:t}),s.calculateShip()},s.proceed=function(){document.getElementById("cartview").style.display="none"},s.state={price:11.9,count:0,subtotal:0,grandtotal:0,ship:0},s}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{id:"cartview",children:[Object(s.jsxs)("div",{id:"product",children:[Object(s.jsx)("h2",{children:"Shoping Cart"}),Object(s.jsx)("br",{}),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col"}),Object(s.jsx)("th",{scope:"col"}),Object(s.jsx)("th",{scope:"col",children:"Product Name"}),Object(s.jsx)("th",{scope:"col",children:"Unit Price"}),Object(s.jsx)("th",{scope:"col",children:"Qty"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAA+klEQVRIiWP8////fwYaASZaGcwwavggMvzLCYZ2ZxkGteT1DA8wJH8wnOhwZZCzzmPYjimJCv6jg8/n//f5Sf9nZWIGY9Wkdf/vw5V8/3+82Roux2qV+3/bfQwT4ADT8NOt/2VhmlEs+P7/eLsLhlzs6uckGI7uOii2dcI0WDZu2X88DsdmOG4LSDEYj+Eg8B6nBcQYDAJ40jkHAwePIIMEFhkFAQHi0iKuYDnf74MRxihxkLeNnGDBbrCslDTJFhCVFMFh/Bt7HJCWFD8f/9/mJI1mMEwSzQK11P/rScpESBaoJiEbjGQBKDMRMBgERmuiUcOJBAwMDAAXgb+vvIwv6wAAAABJRU5ErkJggg==",alt:""})}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:h,alt:""})}),Object(s.jsx)("td",{children:"Headphones"}),Object(s.jsx)("td",{children:"$11.90"}),Object(s.jsx)("td",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"Qty",onClick:this.decrement,children:"-"}),Object(s.jsx)("input",{className:"Qty",type:"text",value:this.state.count}),Object(s.jsx)("button",{className:"Qty",onClick:this.increment,children:"+"}),Object(s.jsx)("span",{onClick:this.updateShoppingCart,children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAABGUlEQVRIiWP8////fwYaASZaGcwwajh1Df9ygqHf24bBv+cEww986v6TCn5f+z/NT/o/KxPzf1Ym6f9u7cf/f8dhBGmGfz7+f9788//v7679bws2HGJB7OrnWJUTHyxfLjD0R8cybFhfy5B/JYhh1sYsBgtCeohz8fn/fX4q//3al/2fFicNdq1f//n/1zeX/k/rP09BsEANju1e9r8vDhbWIKzyv2z3e7xa8RsOM3jysv9tfsgGQ1yOy8WEDYcbPPd/nRPpBuM2/Pv5/9NABhflIqUKwkmPOMMfL/sfGrTs//3////fX536X5UMg/EbLqXz361o2//n/5//X57E/N+2mTSD8RuOFBzkGAwCo5XFqOGDwXAGBgYAhwMsoA0T4yAAAAAASUVORK5CYII=",alt:""})})]})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{type:"button",className:"btn btn-dark btn-lg",onClick:this.updateShoppingCart,children:"Update Shopping Cart"})})]})]})]})]}),Object(s.jsxs)("div",{id:"summary",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{type:"button",className:"button1 btn btn-dark btn-lg",children:"Proceed to checkout"}),Object(s.jsx)("br",{})]}),Object(s.jsx)("div",{class:"card",children:Object(s.jsxs)("div",{class:"card-header",children:["SHIPPING $ ",Object(s.jsx)("span",{children:this.state.ship})]})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header",children:"CART TOTALS"}),Object(s.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(s.jsxs)("li",{className:"list-group-item",children:["Subtotal $ ",Object(s.jsx)("span",{children:this.state.subtotal})]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Grand Total $ ",Object(s.jsx)("span",{children:this.state.ship+this.state.subtotal})," "]}),Object(s.jsx)("li",{className:"list-group-item",children:Object(s.jsx)("button",{onClick:this.proceed,type:"button",className:"btn btn-dark btn-lg",children:"Proceed to checkout"})})]})]})]})]})})}}]),c}(n.Component)),u=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,428)).then((function(e){var c=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,a=e.getTTFB;c(t),s(t),n(t),i(t),a(t)}))};j.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root")),u()}},[[427,1,2]]]);
//# sourceMappingURL=main.af2a80b8.chunk.js.map