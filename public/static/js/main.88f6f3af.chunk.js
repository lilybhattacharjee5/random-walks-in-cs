(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(50)},44:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),s=n.n(o),c=(n(44),n(36)),i=n(14),l=n(15),d=n(13),u="SELECT_DOCTOR",p="SELECT_EPISODE",f="REQUEST_INTERACTIONS_DOCTOR",v="REQUEST_INTERACTIONS_EPISODE",h="RECEIVE_INTERACTIONS_DOCTOR",E="RECEIVE_INTERACTIONS_EPISODE",m=5;function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,nodes:[],links:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case v:return Object(d.a)({},e,{isFetching:!0});case h:return Object(d.a)({},e,{isFetching:!1,nodes:t.nodes,links:t.links,lastUpdated:t.receivedAt});case E:return Object(d.a)({},e,{season:t.season,episode:t.episode,isFetching:!1,nodes:t.nodes,links:t.links,lastUpdated:t.receivedAt});default:return e}}var O=Object(i.c)({interactionsBySpecs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=void 0;if(Object.keys(e).length>=m){var a=1/0;for(var r in e)e[r]&&e[r].hasOwnProperty("lastUpdated")&&e[r].lastUpdated<a&&(a=e[r].lastUpdated,n=r)}var o=Object.assign({},e);switch(delete o[n],t.type){case h:return Object(d.a)({},o,Object(l.a)({},t.doctor,b(e[t.doctor],t)));case E:return Object(d.a)({},o,Object(l.a)({},"".concat(t.season,"-").concat(t.episode),b({season:e[t.season],episode:e[t.episode]},t)));case f:return Object(d.a)({},e,Object(l.a)({isEpisode:!1,isDoctor:!0},t.doctor,b(e[t.doctor],t)));case v:return Object(d.a)({},e,Object(l.a)({isEpisode:!0,isDoctor:!1},t.season.toString()+"-"+t.episode.toString(),b({season:e[t.season],episode:e[t.episode]},t)));default:return e}},selectedDoctor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.doctor;default:return e}},selectedEpisode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{season:"1",episode:"1"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{season:t.season,episode:t.episode};default:return e}}}),g=Object(i.d)(O,Object(i.a)(c.a)),y=n(17),j=n(23),k=n(24),S=n(27),w=n(26),D=n(25),N=n(28);var x=n(32),C=n.n(x);function I(e,t,n){return function(a){var r,o=e,s=t,c=n,i="None"!==o.valueOf()&&"None"===s.valueOf()&&"None"===c.valueOf(),l="None"===o.valueOf()&&"None"!==s.valueOf()&&"None"!==c.valueOf();return i?(a(function(e){return{type:f,doctor:e}}(e)),r=C()("/doctors/doctor_".concat(e,".txt"))):l&&(a(function(e,t){return{type:v,season:e,episode:t}}(t,n)),r=C()("/episodes/ep_".concat(t,"-").concat(n,".txt"))),r.then(function(e){return e.json()},function(e){return console.log("An error occurred.")}).then(function(r){return a(i?function(e,t){return void 0===t||void 0===t.nodes||void 0===t.links?{type:h,doctor:e,nodes:[],links:[],receivedAt:Date.now()}:{type:h,doctor:e,nodes:t.nodes,links:t.links,receivedAt:Date.now()}}(e,r):function(e,t,n){return void 0===n||void 0===n.nodes||void 0===n.links?{type:E,season:e,episode:t,nodes:[],links:[],receivedAt:Date.now()}:{type:E,season:e,episode:t,nodes:n.nodes,links:n.links,receivedAt:Date.now()}}(t,n,r))})}}function A(e){var t=e.dispatch,n={padding:"10px 10px 10px 10px"},a=r.a.createRef(),o=r.a.createRef(),s=r.a.createRef();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=a.current.state.selectValue,r=o.current.state.selectValue,c=s.current.state.selectValue,i="None"!==n.valueOf()&&"None"===r.valueOf()&&"None"===c.valueOf(),l="None"===n.valueOf()&&"None"!==r.valueOf()&&"None"!==c.valueOf();if(i)t({type:u,doctor:n}),t(I(n,r,c));else{if(!l)return;t({type:p,season:r,episode:c}),t(I(n,r,c))}}},r.a.createElement("table",{style:{width:"100%"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:n},"(Doctor:\xa0\xa0",r.a.createElement(R,{ref:a,selectName:"doctor",start:"1",end:"13"}),")"),r.a.createElement("td",{style:n},r.a.createElement("b",null,"OR")),r.a.createElement("td",{style:n},"(Season:\xa0\xa0",r.a.createElement(R,{ref:o,selectName:"season",start:"1",end:"37"})),r.a.createElement("td",{style:n},"Episode:\xa0\xa0",r.a.createElement(R,{ref:s,selectName:"episode",start:"1",end:"18"}),")"),r.a.createElement("td",{style:n},r.a.createElement("button",{type:"submit"},"Graph"))))),r.a.createElement("br",null),r.a.createElement("br",null)))}var R=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(w.a)(t).call(this,e))).elementList=function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var n=["None"],a=e;a<=t;a++)n.push(a);return n}(parseInt(e.start,10),parseInt(e.end,10)),n.state={selectValue:"None"},n.handleChange=n.handleChange.bind(Object(D.a)(n)),n}return Object(N.a)(t,e),Object(k.a)(t,[{key:"handleChange",value:function(e){this.setState({selectValue:e.target.value})}},{key:"render",value:function(){return r.a.createElement("select",{value:this.state.selectValue,onChange:this.handleChange,name:this.props.selectName},this.elementList.map(function(e){return r.a.createElement("option",{value:e,key:e},e)}),";")}}]),t}(r.a.Component),T=A=Object(y.b)()(A),B=n(33),_=n(38),V=n(0),U=n(10),P=n(19),F=n(22),L=n(3);var W=Object(y.b)(function(e){var t=[],n=[];return void 0!==e.interactionsBySpecs&&(e.selectedDoctor.toString()in e.interactionsBySpecs&&e.interactionsBySpecs.isDoctor&&(t=e.interactionsBySpecs[e.selectedDoctor.toString()].nodes,n=e.interactionsBySpecs[e.selectedDoctor.toString()].links),e.selectedEpisode.season.toString()+"-"+e.selectedEpisode.episode.toString()in e.interactionsBySpecs&&e.interactionsBySpecs.isEpisode&&(t=e.interactionsBySpecs[e.selectedEpisode.season.toString()+"-"+e.selectedEpisode.episode.toString()].nodes,n=e.interactionsBySpecs[e.selectedEpisode.season.toString()+"-"+e.selectedEpisode.episode.toString()].links)),e.interactionsBySpecs.isDoctor?{nodes:t,links:n,doctor:e.selectedDoctor}:{nodes:t,links:n,season:e.selectedEpisode.season,episode:e.selectedEpisode.episode}})(function(e){var t=e.nodes,n=void 0===t?[]:t,a=e.links,o=void 0===a?[]:a,s=e.season,c=void 0===s?void 0:s,i=e.episode,l=void 0===i?void 0:i,d=e.doctor,u=void 0===d?void 0:d;return 0===n.length||0===o.length?r.a.createElement("div",null,r.a.createElement("p",null,"Data is either unavailable at this time or loading.")):r.a.createElement("div",{style:{textAlign:"center"}},u?r.a.createElement("div",null,r.a.createElement("b",null,"Doctor"),": ",u):null,c?r.a.createElement("div",null,r.a.createElement("b",null,"Season"),": ",c):null,l?r.a.createElement("div",null,r.a.createElement("b",null,"Episode"),": ",l):null,r.a.createElement("br",null),function(e,t){return r.a.createElement(z,{nodes:e,links:t,id:"graph"})}(n,o))}),z=function(e){function t(e){return Object(j.a)(this,t),Object(S.a)(this,Object(w.a)(t).call(this,e))}return Object(N.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=20,t=50,n=50,a=1500-n-30,r=700-e-t,o=this.node,s=Object(_.a)(B.b),c=Object(V.f)(o).attr("width","100%").attr("height",r+e+t),i=c.append("g").attr("transform","translate("+n+","+e+")"),l=Object(P.d)(this.props.nodes).force("charge",Object(P.c)()).force("link",Object(P.b)(this.props.links).distance(400).id(function(e){return e.id})).force("center",Object(P.a)(a/2,r/2));l.stop(),Object(F.a)().on("zoom",function(){i.attr("transform",V.b.transform)})(c);var d=Object(U.a)().on("start",function(e){B.a.sourceEvent.stopPropagation(),l.stop()}).on("drag",function(e,t){e.px+=V.b.dx,e.py+=V.b.dy,e.x+=V.b.dx,e.y+=V.b.dy,v()}).on("end",function(e,t){e.fixed=!0,v(),l.alpha(1).restart()}),u=i.selectAll(".link").data(this.props.links).enter().append("line").attr("stroke-width",function(e){return e.weight/7}).attr("stroke",function(e){return Object(L.f)(e.red,e.green,e.blue,.5)}).attr("class","link");i.selectAll(".node").data(this.props.nodes).enter().append("g").attr("class","node");var p=i.selectAll("node").data(this.props.nodes).enter().append("text").attr("dx",12).attr("dy","0.35em").attr("font-size",function(e){return 1.5*e.influence>9?e.influence/2:9}).text(function(e){return e.character}),f=i.selectAll("node").data(this.props.nodes).enter().append("circle").attr("r",function(e){return e.influence/2>5?e.influence/2:5}).attr("fill",function(e){return s(10*e.zone)}).attr("fill-opacity",.5).call(d);function v(e){f.attr("r",function(e){return e.influence}).attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}),p.attr("dx",function(e){return e.x}).attr("dy",function(e){return e.y}),u.attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y})}l.on("tick",function(e){v(e)}),l.alpha(1).restart()}},{key:"render",value:function(){var e=this;return r.a.createElement("svg",{ref:function(t){return e.node=t}})}}]),t}(r.a.Component),J=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Interactive ",r.a.createElement("i",null,"Doctor Who")),r.a.createElement("p",null,r.a.createElement("b",null,"Directions"),": Please select either a doctor OR a season and episode number to view a representative interaction graph between ",r.a.createElement("i",null,"Doctor Who")," characters. The gradient from red to blue edge colors represents involvement ranging from negative sentiment dialogue to positive sentiment dialogue respectively."),r.a.createElement("br",null),r.a.createElement(T,null),r.a.createElement("br",null),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y.a,{store:g},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.88f6f3af.chunk.js.map