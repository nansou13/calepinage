(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),u=n.n(l),o=(n(28),n(20)),c=n(4),i=n(5),s=n(13),m=n(14),p=n(15),d=n(19),h=n(16),f=n(21),g=n(3),v=n(1),b=n(2);function x(){var e=Object(v.a)(["\n  position: relative;\n  width: ",";\n  height: ",";\n  box-shadow: inset 0px 0px 0px 2px #000;\n  overflow: hidden;\n  margin: auto;\n"]);return x=function(){return e},e}var E=Object(b.a)("div")(x(),function(e){return"".concat(e.values.long,"px")},function(e){return"".concat(e.values.larg,"px")}),j=function(e){var t=e.children,n=e.values;return r.a.createElement(E,{values:n},t)};function O(){var e=Object(v.a)(["\n  position: absolute;\n  box-shadow: inset 0px 0px 0px 1px;\n  background: black;\n  top: ",";\n  left: ",";\n  width: ",";\n  height: ",";\n"]);return O=function(){return e},e}var y=Object(b.a)("div")(O(),function(e){return"".concat(e.values.top||0,"px")},function(e){return"".concat(e.values.left||0,"px")},function(e){return"".concat(e.values.width||0,"px")},function(e){return"".concat(e.values.height||0,"px")}),w=function(e){var t=e.children,n=e.values;return r.a.createElement(y,{values:n},t)};function L(){var e=Object(v.a)(["\n  font-size: 10px;\n  box-shadow: inset 0px 0px 0px 1px;\n  margin: 0;\n  padding: 0;\n  width: ",";\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return L=function(){return e},e}var C=Object(b.a)("div")(L(),function(e){return"".concat(e.value,"px")},function(e){return"".concat(e.larg,"px")}),k=function(e){var t=e.value,n=e.larg;return r.a.createElement(C,{value:t,larg:n},"".concat(t,"cm"))};function M(){var e=Object(v.a)(["\n  display: flex;\n  text-align: center;\n  overflow: visible;\n  justify-content: center;\n"]);return M=function(){return e},e}var V=Object(b.a)("div")(M()),A=function(e){var t=e.data,n=e.lame.larg;return r.a.createElement(V,null,t&&t.map(function(e,t){return r.a.createElement(k,{key:"".concat(t,"-lame"),value:e,larg:n})}))};function T(){var e=Object(v.a)(["\n  position: relative;\n"]);return T=function(){return e},e}var F=Object(b.a)("div")(T()),I=function(e){var t=e.label,n=e.children;return r.a.createElement(F,null,n,r.a.createElement("label",null,t))};function z(){var e=Object(v.a)(["\n  padding: 5px 10px;\n  margin: 10px 0 20px;\n"]);return z=function(){return e},e}function D(){var e=Object(v.a)(["\n  color: #999;\n  position: absolute;\n  top: -21px;\n  left: 10px;\n  z-index: 1;\n  background: #fff;\n  padding: 0 6px;\n"]);return D=function(){return e},e}function H(){var e=Object(v.a)(["\n  padding: 10px;\n  border: 3px solid #999;\n  position: relative;\n  margin: 10px;\n"]);return H=function(){return e},e}var S=Object(b.a)("div")(H()),W=Object(b.a)("h2")(D()),J=Object(b.a)("button")(z()),P=function(e){var t=e.room,n=t.long,a=t.larg,l=t.dilatation,u=e.updateVal;return r.a.createElement(S,null,r.a.createElement(W,null,"Pi\xe8ce"),r.a.createElement(I,{label:"Longueur (cm)"},r.a.createElement(g.DebounceInput,{type:"text",value:n,onChange:function(e){return u("long")(e.target.value)},debounceTimeout:700})),r.a.createElement(I,{label:"Largeur (cm)"},r.a.createElement(g.DebounceInput,{type:"text",value:a,onChange:function(e){return u("larg")(e.target.value)},debounceTimeout:700})),r.a.createElement(I,{label:"Joint de dilatation (cm)"},r.a.createElement(g.DebounceInput,{type:"number",step:"0.1",min:0,value:l||0,onChange:function(e){return u("dilatation")(e.target.value)},debounceTimeout:700})))},q=function(e){var t=e.lame,n=t.long,a=t.larg,l=e.updateVal;return r.a.createElement(S,null,r.a.createElement(W,null,"Lames"),r.a.createElement(I,{label:"Longueur (cm)"},r.a.createElement(g.DebounceInput,{type:"text",value:n,onChange:function(e){return l("long")(e.target.value)},debounceTimeout:700})),r.a.createElement(I,{label:"Largeur (cm)"},r.a.createElement(g.DebounceInput,{type:"text",value:a,onChange:function(e){return l("larg")(e.target.value)},debounceTimeout:700})))},B="alterne",N="lastToFirst",K="tierTWoTier",X="custom",$=[{top:0,left:571,width:300,height:437},{top:0,left:571,width:300,height:437},{top:0,left:571,width:300,height:437},{top:812,left:0,width:176,height:97},{top:630,left:0,width:136,height:83},{top:713,left:0,width:64,height:99},{top:633,left:224,width:7,height:88},{top:626,left:0,width:408,height:7},{top:411,left:128,width:280,height:7},{top:417,left:401,width:7,height:210},{top:587,left:492,width:462,height:7},{top:823,left:281,width:7,height:367},{top:823,left:537,width:18,height:367},{top:823,left:288,width:396,height:7},{top:594,left:500,width:7,height:111},{top:594,left:679,width:7,height:280},{top:698,left:507,width:176,height:7},{top:719,left:224,width:184,height:7}];function G(){var e=Object(v.a)(["\n  margin: 5px 0;\n  text-align: left;\n  h3 {\n    font-size: 14px;\n    display: inline-block;\n    margin-left: 5px;\n    text-transform: uppercase;\n  }\n\n  p {\n    font-size: 11px;\n    font-style: italic;\n    margin: 0px 0 5px;\n  }\n"]);return G=function(){return e},e}var Q=Object(b.a)("div")(G()),R=function(e){var t=e.value,n=e.checked,a=e.onHandleChange,l=e.children;return r.a.createElement(Q,null,r.a.createElement("input",{type:"radio",name:"mode",value:t,checked:n,onChange:function(e){return a(e.currentTarget.value)}}),l)},U=function(e){var t=e.mode,n=e.updateVal,a=e.customLine,l=e.addCustomLine,u=e.displayCustom;return r.a.createElement(S,null,r.a.createElement(W,null,"Mode"),r.a.createElement("div",null,r.a.createElement(R,{value:B,checked:t===B,onHandleChange:n},r.a.createElement("h3",null,"Coupe de pierre"),r.a.createElement("p",null,'Appel\xe9 aussi "La pose altern\xe9e", Il vous suffit de d\xe9caler les lames sur une demi-longueur, pour un effet r\xe9ussi et une pose simple \xe0 r\xe9aliser, mais moins naturel.')),r.a.createElement(R,{value:N,checked:t===N,onHandleChange:n},r.a.createElement("h3",null,"Coupe perdue"),r.a.createElement("p",null,"La chute de la s\xe9rie de lame pr\xe9c\xe9dente est utilis\xe9e pour d\xe9marrer la pose de la rang\xe9e")),r.a.createElement(R,{value:K,checked:t===K,onHandleChange:n},r.a.createElement("h3",null,"1/3 & 2/3"),r.a.createElement("p",null,"La premi\xe8re s\xe9rie commence par 1/3 de la lame, la seconde 2/3 et la derni\xe8re par la lame enti\xe8re !")),r.a.createElement(R,{value:X,checked:t===X,onHandleChange:n},r.a.createElement("h3",null,"Mode sandbox"),r.a.createElement("p",null,"Ajoutez les s\xe9ries que vous voulez, l'application g\xe9n\xe9rera les lignes"),t===X&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(J,{onClick:l},"Ajouter une ligne")),a&&a.length>0&&a.map(function(e,t){return u(t,e)})))))};function Y(){var e=Object(v.a)(["\n  margin-left: 10px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(v.a)(["\n  display: flex;\n"]);return Z=function(){return e},e}function _(){var e=Object(v.a)(["\n  margin: 13px 10px 0;\n"]);return _=function(){return e},e}function ee(){var e=Object(v.a)(["\n  padding: 10px;\n"]);return ee=function(){return e},e}function te(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return te=function(){return e},e}function ne(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  align-items: flex-start;\n"]);return ne=function(){return e},e}var ae=Object(b.a)("div")(ne()),re=Object(b.a)("div")(te()),le=Object(b.a)("p")(ee()),ue=Object(b.a)("span")(_()),oe=Object(b.a)("div")(Z()),ce=Object(b.a)("span")(Y()),ie=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={lame:{long:128.5,larg:19.4},room:{long:870,larg:1195,dilatation:.5},customLine:[],mode:N,nbLineMaxCalculated:10,showWall:!1},n.updateVal=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){return function(a){if(!a||a<=0)return!1;e?n.setState(function(n){return Object(i.a)({},e,Object(s.a)({},n[e],Object(i.a)({},t,a)))}):n.setState(Object(i.a)({},t,a))}}},n.calculateLine=function(e){if(!e)return!1;var t=n.state.room.long-2*n.state.room.dilatation,a=[];if(e>n.state.room.long)return a.push(t),a;a.push(e);var r=Math.trunc((t-e)/n.state.lame.long);return a.push.apply(a,Object(c.a)(Array.from(Array(r).keys()).map(function(){return n.state.lame.long}))),a.push(Math.round(100*(t-a.reduce(function(e,t){return e+parseFloat(t)},0)))/100),a},n.displayCustom=function(e,t){var a=n.calculateLine(t)||[],l=Object(o.a)(a),u=l[0],c=l.slice(1),i=c.pop()||!1,s=i&&Math.round(100*(n.state.lame.long-i))/100;return r.a.createElement(oe,null,r.a.createElement(I,{label:"Longueur (cm)"},r.a.createElement(g.DebounceInput,{type:"number",required:!0,value:u,onChange:function(t){return n.updateFirstLineVal(e,t.target.value)},debounceTimeout:700,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&n.addCustomLine()}})),u&&r.a.createElement(ue,null," puis ".concat(c.length," lame(s) de ").concat(n.state.lame.long," et une derniere de ").concat(i,", chute de: ").concat(s),r.a.createElement(ce,{onClick:function(){return n.removeCustomLine(e)}},"[X]")))},n.updateFirstLineVal=function(e,t){var a=t<n.state.lame.long?t:n.state.lame.long;n.setState(function(t){var n=Object(c.a)(t.customLine);return n[e]=a,{customLine:n}})},n.addCustomLine=function(){n.setState(function(e){return{customLine:[].concat(Object(c.a)(e.customLine),[null])}})},n.removeCustomLine=function(e){n.setState(function(t){var n=Object(c.a)(t.customLine);return e&&n.splice(e,1),{customLine:n}})},n.generateLine=function(e){var t,a=[];if(e)(t=a).push.apply(t,Object(c.a)(e));else switch(n.state.mode){case X:a=n.state.customLine?n.state.customLine.map(function(e){return n.calculateLine(e)}):[];break;case B:var r=Math.round(n.state.lame.long/2*100)/100;a.push(n.calculateLine(n.state.lame.long),n.calculateLine(r));break;case K:var l=Math.round(n.state.lame.long/3*100)/100,u=2*l.toFixed(2);a.push(n.calculateLine(l),n.calculateLine(u),n.calculateLine(n.state.lame.long));break;case N:default:var o,i=!1,s=n.state.room.larg-2*n.state.room.dilatation,m=n.state.nbLineMaxCalculated||Math.trunc(s/n.state.lame.larg);(o=a).push.apply(o,Object(c.a)(Array.from(Array(m).keys()).map(function(){var e=i||n.state.lame.long,t=n.calculateLine(e),a=t[t.length-1];return i=Math.round(100*(n.state.lame.long-a))/100,t})))}var p=n.state.room.larg-2*n.state.room.dilatation,d=Math.trunc(p/n.state.lame.larg),h=p-d*n.state.lame.larg,f=a.length-1;return!(f<0)&&{values:Array.from(Array(d+1).keys()).map(function(){return f=f===a.length-1?0:f+1,a[f]}),message:h>0&&"La hauteur des lames de la derni\xe8re s\xe9rie fera ".concat(h.toFixed(2),"cm")}},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.generateLine(),n=t.values,l=void 0===n?[]:n,u=t.message,o=void 0!==u&&u;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Mon Plan de Calepinage"),r.a.createElement(ae,null,r.a.createElement(re,null,r.a.createElement(P,{room:this.state.room,updateVal:this.updateVal("room")}),r.a.createElement(q,{lame:this.state.lame,updateVal:this.updateVal("lame")})),r.a.createElement(U,{customLine:this.state.customLine,addCustomLine:this.addCustomLine,mode:this.state.mode,updateVal:this.updateVal()("mode"),displayCustom:this.displayCustom})),r.a.createElement(le,null,o&&r.a.createElement("strong",null,o)),r.a.createElement(j,{values:this.state.room},this.state.showWall&&r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"regle",style:{top:420,left:408,width:163,height:5}}),$.map(function(e,t){return r.a.createElement(w,{key:"".concat(t,"-piece"),values:e})})),l&&l.length>0&&l.map(function(t,n){return r.a.createElement(A,{data:t,key:"".concat(n,"-line"),lame:e.state.lame})})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.257a45f1.chunk.js.map