(this.webpackJsonpspacexlaunches=this.webpackJsonpspacexlaunches||[]).push([[0],{23:function(n,t,e){n.exports=e.p+"static/media/dark2.fa285ec5.png"},24:function(n,t,e){n.exports=e.p+"static/media/darkinvert.7495107b.png"},26:function(n,t,e){n.exports=e(43)},31:function(n,t,e){},32:function(n,t,e){n.exports=e.p+"static/media/logo.5d5d9eef.svg"},33:function(n,t,e){},42:function(n,t,e){n.exports=e.p+"static/media/dark.5f515653.png"},43:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e.n(a),r=e(16),o=e.n(r),l=(e(31),e(4)),c=e(2),s=(e(32),e(33),e(3)),m=e(17),u=e.n(m),d=e(19),h=e.n(d),g=(e(41),e(13)),p=e.n(g),f=e(20),x=e.n(f);function b(){var n=Object(c.a)(["\n\t\tmargin: auto auto auto ",";\n\t\tline-height: 0px;\n\t\theight: ",";\t\n\t\twidth: 2px; \n/*\t\twidth: 10px; */\n/*\t\tborder-radius: 100%;*/\n\t\tbackground-color: ",";\n\t\topacity: ",";\n\t\t/*transform: scale(",");*/\n\t\tmargin-top: -",";\t\n\n\t\th1 {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\t/*transform: scale(2);*/\n\t\t\th1 {\n\t\t\t\tdisplay: flex; flex-wrap: nowrap;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tposition: absolute;\n\t\t\t\tmargin-right: 10px;\n\t\t\t\t\n\t\t\t\tdisplay: flex;\n/*\t\t\t\tmargin-top: -40px;*/\n\t\t\t\tline-height: 1rem;\n\t\t\t\tcolor: white;\n\t\t\t\tfont-size: 0.8rem;\n\t\t\t\tbackground-color: black;\n\t\t\t\topacity: 1;\n\t\t\t\twidth: auto;\n\t\t\t\theight: 1.2rem;\n\t\t\t\t\n\t\t\t\tpadding: 0.2rem;\n\t\t\t\ttop: 0.5rem;\n\t\t\t\tz-index: 333;\n\t\t\t}\n\t\t}\n"]);return b=function(){return n},n}function w(){var n=Object(c.a)(["\n\theight: 4rem;\n\twidth: 100%;\n\tpadding-bottom: 2rem;\n\tmargin: auto;\n\tpadding-right: -1rem;\n\n\n\t  min-width: 300px;\n  max-width: 600px;\n  width: 90%;\n\t.line {\n\t\twidth: 100%;\n\t\theight: 2px;\n\t\tbackground-color: gray;\n\t\tmargin-top: 4px;\n\t}\n\t.points {\n\t\tposition: relative;\n\t\ttop: -4px;\n/*\t\tdisplay: flex;\n\t\tflex-direction: row; flex-wrap: none;\n\t\twidth: auto;*/\n\t}\n"]);return w=function(){return n},n}s.a.div(w()),s.a.div(b(),(function(n){return n.location+"%"}),(function(n){return n&&n.size?10*n.size+"px":"10px"}),(function(n){return"black"===n.color?"rgba(10,10,10,1)":"red"===n.color?"red":null}),(function(n){return"red"===n.color?1:.5}),(function(n){return"red"===n.color?1.5:null}),(function(n){return n&&n.size?10*n.size+"px":"10px"}));function E(){var n=Object(c.a)(["\n\twidth: 75px; height: 150px; \n\ttransform: rotate(",");\n\ttransition: all 1s;\n\t&:hover {\n\t}\n\tposition: absolute;\n\ttransform-origin: center right;\n\n\t&:after {\n\t\tcontent:'';\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 0;\n\t\twidth: 2px; height: ","; \n\t\tbackground-color: ",";\n\t}\n"]);return E=function(){return n},n}function v(){var n=Object(c.a)(["\n\twidth: 150px; height: 150px;\n\tborder-radius: 100%;\n\tmargin: auto;\n\tposition: relative;\n\tmargin-bottom: 3rem; margin-top: 1rem;\n\n\th1 {\n\t\tbackground-color: rgba(10,10,10,0.1);\n\t\tborder-radius: 100%;\n\t\tpadding: 10px;\n\t\tz-index: 22;\n\t\ttext-align: center;\n\t\tposition: absolute;\n  \t\ttop: 50%;\n  \t\tleft: 50%;\n  \t\ttransform: translate(-50%, -60%);\n  \t\tfont-size: 0.6rem;\n  \t\tfont-weight: lighter;\n  \t\tspan {\n  \t\t\tfont-size: 1rem;\n  \t\t\tdisplay: block;\n  \t\t\ttext-align: center;\n  \t\t}\n\t}\n\t\n"]);return v=function(){return n},n}var _=s.a.div(v()),k=s.a.div(E(),(function(n){return n.location+"deg"}),(function(n){return 5*n.size+"px"}),(function(n){return n.color})),y=function(n){return i.a.createElement(k,{location:n.location,color:n.color,size:n.size})},O=function(n){var t=function(t){var e=n.launches.length,a=Math.abs(t-0),i=Math.abs(e-0);return console.log(a/i*100*3.6),a/i*100*3.6};return i.a.createElement(_,null,i.a.createElement("h1",null,"total ",i.a.createElement("br",null),"core flights",i.a.createElement("span",null,n.selectedMission.reuse_count?n.selectedMission.reuse_count+1:0)),n.launches.map((function(e,a){return i.a.createElement(y,{location:t(a),color:e.core_serial===n.selectedMission.core_serial?"red":"black",size:e.reuse_count+1||1})})))},C=(e(42),e(23)),z=e.n(C),j=e(24),N=e.n(j);function L(){var n=Object(c.a)(["\n    position: absolute;\n    top: 0; right: 0;\n    display: flex; flex-direction: column;\n    margin: 0.5rem 0.8rem 1rem auto; padding: 0px;\n\n    h1 {\n      font-size: 2.25rem; padding: 0px;\n      margin: 0 0 0 auto;\n      line-height: 2rem;  \n      font-weight: bolder;\n      color: rgba(0,0,0,1);\n    }\n    h2 {\n      font-size: 2.1rem; padding: 0px;\n      margin: 0rem 0 0 auto;\n      line-height: 1.7rem;\n      color: rgba(0,0,0,0.8);\n      font-weight: bold;\n    }\n    h3 {\n      font-size: 1.8rem; padding: 0px;\n      margin: 0 0 0 auto;\n      line-height: 1.5rem;\n      color: rgba(0,0,0,0.6);\n      font-weight: light;\n    }\n    h4 {\n      font-size: 1rem; padding: 0px;\n      margin: 0 0 0 auto;\n      line-height: 1rem;\n      color: rgba(0,0,0,0.38);\n      font-weight: lighter;\n    }\n    h5 {\n      font-size: 0.7rem; padding: 0px;\n      margin: 0 0 0 auto;\n      line-height: 0.7rem;\n      color: rgba(0,0,0,0.25); \n      font-weight: lighter;     \n    }\n"]);return L=function(){return n},n}var S=s.a.div(L()),A=function(){return i.a.createElement(S,null,i.a.createElement("h1",null,"TMWY"),i.a.createElement("h2",null,"Take"),i.a.createElement("h3",null,"Me"),i.a.createElement("h4",null,"With"),i.a.createElement("h5",null,"You"))};function M(){var n=Object(c.a)(["\n  \t\tbackground-color: ",";\n  \t"]);return M=function(){return n},n}function U(){var n=Object(c.a)(["\n    margin-bottom: 1rem;\n    margin-left: 0.8rem;\n    ul {\n      padding: 0px;\n      margin: 0px;\n      min-height: 0px;\n      height: auto;\n      list-style-type: none;\n      display: flex; flex-direction: row;\n    }\n    li {\n      height: 10px; width: 10px; \n      margin: 2px;\n      border-radius: 100%;\n    }\n    span {\n      font-size: 0.5rem;\n      text-indent: 0.1rem;\n    }\n  "]);return U=function(){return n},n}var D=function(n){var t=s.a.div(U()),e=function(n){var t=n.n,e=s.a.li(M(),(function(n){return n.color}));return i.a.createElement(e,{color:0===t?"#320404":t>3?"#3E3E3E":t>2?"#081B51":t>1?"#1E1E1E":t>0?"#3E3E3E":"green"})},a=function(n){var t=[];if(n)for(var a=0;a<n;a++)t.push(i.a.createElement(e,{n:a}));return t};return i.a.createElement(t,null,i.a.createElement("ul",null,a(n.amount0),n.amount0>0?i.a.createElement("span",null,"*booster reflights"):null),i.a.createElement("ul",null,a(n.amount1),n.amount1>0?i.a.createElement("span",null,"*launch site landing attempts"):null),i.a.createElement("ul",null,a(n.amount2),n.amount2>0?i.a.createElement("span",null,"*drone ship landing attempts"):null))};function T(){var n=Object(c.a)(["\n  width: 20rem;\n  height: auto;\n  //background-color: #131313;\n  background-image: url(",");\n  background-size: cover;\n  display: ",";\n  position: relative;\n  z-index: 255;\n  box-sizing: border-box;\n  top: 0; left: 0; right: 0;\n\n  .menubtn {\n    display: none;\n    position: absolute;\n    width: 35px; height: 35px;\n    padding: 5px;\n    border: 1px solid white;\n    border-radius: 100%;\n    margin: 1rem auto auto 1rem;\n  }\n\n  @media only screen and (max-width: 600px) {\n    position: fixed; \n    height: 100vh;\n    width: 14rem;\n    top: 0;\n    .menubtn {\n      display: flex;   \n    }\n  }\n"]);return T=function(){return n},n}function F(){var n=Object(c.a)(["\n  height: auto;\n  border-bottom: 0.5px solid black;\n  display: flex; \n  flex-direction: column;\n  margin: auto auto auto auto;\n  color: black;\n  .row {\n    display: flex; flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  max-width: 600px;\n  width: auto;\n\n  @media only screen and (max-width: 800px) {\n    \n  }\n\n  .selected-vehicle-label {\n    height: auto; width: 200px;\n    margin: auto;\n    margin-bottom: 2rem;\n    margin-top: 1rem;\n\n    @media only screen and (max-width: 800px) {\n      margin-top: 3rem;\n    }\n  }\n\n  .selected-vehicle-missions {\n    margin: auto;\n    min-height: 40px;\n    max-height: 300px;\n    height: auto;\n    min-width: 300px;\n    width: auto;\n    margin: auto 1rem 1rem auto;\n    width: 100%;\n    /*border-left: 0.5px solid black;*/\n    border-right: 0.5px solid black;\n    overflow: scroll;\n    cursor: pointer;\n    &::-webkit-scrollbar {\n      display: none; \n    }\n\n    .mission-result {\n      height: auto;\n      margin-bottom: 0.1rem;\n      margin-left: 12px;\n      z-index: 2;\n      border-left: 4px solid gray;\n      \n\n      h5 {\n        font-size: 1rem;\n        font-weight: lighter;\n        margin: auto;\n        width: 100%;\n        line-height: 2rem;\n        text-align: left;\n        text-indent: 5px;\n        color: black;\n\n        span {\n          font-size: 1rem;\n          line-height: 2rem;\n          text-align: right;\n          float: right;\n          font-weight: lighter;\n          padding-right: 5px;\n        }\n      }\n\n\n      transition: all 0.2s;\n\n      &:nth-child(1) {\n        margin-top: 1px;\n        border-left: 4px solid #DE0D0D;\n        \n      }\n      &:nth-child(2) {\n        border-left: 4px solid #081B51; \n      }\n      &:nth-child(3) {\n        border-left: 4px solid #1E1E1E;\n      }\n      &:nth-child(4) {\n        border-left: 4px solid #3E3E3E;\n      }\n\n      &:hover {\n        background-color: #2C2C2C;\n        h5 {\n          color: white;\n        }\n      }\n\n    }\n      .active {\n        background-color: #3A3A3A;\n        h5 {\n          color: white;\n        }\n      }\n  }\n\n  h1 {\n    margin: 1.3rem auto auto 0px;\n    height: 4rem;\n    font-family: 'Oxygen Mono', monospace;\n    font-weight: lighter;\n    font-size: 4rem;\n    font-size: ",";\n    position: relative;\n    text-align: center;\n    width: 10rem;\n    z-index: 5;\n    font-weight: bold;\n\n    span {\n      text-align: center;\n      left: 6.5%;\n      font-size: 3rem;\n      position: absolute;\n      bottom: 40%;\n      z-index: -5;\n      font-weight: bold;\n      color: #AAAAAA;\n    }\n  }\n\n  h2 {\n    text-align: center;\n    left: 20%;\n    font-size: 2.2rem;\n    position: absolute;\n    bottom: 40%;\n    z-index: -5;\n    font-weight: bold;\n    color: #323232;\n  }\n\n  h3 {\n    font-size: 0.8rem;\n    height: auto;\n    width: fit-content;\n    margin: auto 8px 8px auto;\n    text-align: bottom;\n    font-weight: lighter;\n    span {\n      color: gray;\n    }\n  }\n\n  p {\n    margin: auto;\n    font-size: 0.7rem;\n    width: 100%;\n    text-align: center;\n    padding-bottom: 1rem;\n  }\n"]);return F=function(){return n},n}function R(){var n=Object(c.a)(["\n  height: 100%;\n  display: flex; flex-direction: column;\n  margin: 1rem auto auto auto;\n  color: black;\n  min-width: 300px;\n  max-width: 600px;\n  width: 100%;\n  @media only screen and (max-width: 800px) {\n    width: auto;\n  }\n\n  .row {\n    display: flex; flex-direction: row; \n    flex-wrap: wrap;\n    width: 100%;\n  }\n\n  .selected-mission-label {\n    display: flex;\n    height: auto;\n    width: 200px;\n    h1 {\n      justify-content: center;\n      height: auto;\n      margin: auto auto auto auto;\n      /*margin-top: 4rem;*/\n      text-align: center;\n    }\n    @media only screen and (max-width: 800px) {\n      width: 100%;\n      h1 {\n        margin-top: auto; margin-bottom: 1rem;\n      }\n    }\n  }\n\n\n  ul {\n    padding: 0px; \n    margin: auto;\n    min-width: 300px;\n    max-width: 320px;\n    width: 100%;\n  }\n\n  li {\n    font-size: 0.8rem;\n    margin: 0px; padding: 0px;\n    list-style-type: none;\n    text-align: left;\n    margin-bottom: 0.2rem;\n      font-family: 'Oxygen Mono', monospace;\n\n    span {\n      margin: 0 0 0 auto;\n      float: right;\n\n    }\n  }\n\n  p {\n    margin: 1rem auto 0rem auto;\n    text-align: center;\n    margin-bottom: 4rem;\n  }\n\n  .bottombox {\n    margin-top: 2rem;\n  }\n\n  .mission_description {\n    width: 100%;\n    max-width: 400px;\n    margin: auto;\n  }\n\n  a {\n    margin: auto; padding: 0px;\n    text-align: center;\n  }\n"]);return R=function(){return n},n}function W(){var n=Object(c.a)(["\n  background-color: transparent;\n  height: 92vh;\n  width: 100%;\n  margin: 0px 0.5rem 0px 0.5rem;\n  padding-top: 1rem;\n\n  @media only screen and (max-width: 600px) {\n    padding-top: 5rem;\n  }\n\n  .topbar {\n    width: 100%;\n    display: flex; flex-direction: row;\n    margin: auto;\n    margin-bottom: 1rem;\n    height: 20px;\n    input {\n      width: 100%;\n      background-image: linear-gradient(to bottom, transparent 50%, #2C2C2C 100%);\n      background-color: transparent;\n      border: 0.5px solid white; \n      outline: none;\n      color: white;\n      text-indent: 4px;\n    }\n    .searchimg {\n      padding-left: 5px;\n      width: 20px;    \n      height: 20px;  \n    }   \n\n    .clearsearch {\n      margin-left: -1.2rem;\n      height: 1.3rem; width: 1.3rem;\n    }\n  }\n\n  .scroll-container {\n    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n\n    height: 100%;\n    width: 100%;\n    overflow: scroll;\n\n    &::-webkit-scrollbar {\n      display: none; \n    }\n    \n    .group {\n      font-family: 'Oxygen Mono', monospace;\n      margin: 0px 0rem auto 0rem; padding: 0px;\n      text-align: center;\n      line-height: 1.1rem;\n      &:last-child {\n        padding-bottom: 10vh;\n      }\n    }\n\n    .item {\n      width: 100%;\n      cursor: pointer;\n      margin: 0px; padding: 0px;\n      margin-bottom: 0.2rem;\n      background-color: #212121;\n      height: 2.2rem;\n      h1 {\n        margin: 0px; padding: 0px;\n        margin-left: 0.3rem;\n        padding-top: 0.1rem;\n        font-size: 1rem;\n        font-weight: light;\n        text-align: left;\n        line-height: auto;\n      }\n      span {\n        font-family: 'Oxygen', monospace;\n        text-align: right;\n        margin: 0 0.3rem 0 auto;\n        float: right;           \n      }\n      h2 {\n        margin: 0px; padding: 0px;\n        margin-left: 0.3rem;\n        font-size: 0.7rem;\n        font-weight: lighter;\n        text-align: left;\n        line-height: 1.2rem;      \n      }\n    }\n    .active {\n      background-color: #DE0D0D;\n    }\n  }\n"]);return W=function(){return n},n}function B(){var n=Object(c.a)([" \n  display: flex; flex-direction: column;\n  margin: auto;\n  height: auto;\n  width: auto;\n  padding: 0px;\n\n  .row {\n    display: flex; flex-direction: row; \n    width: 100%;\n  }\n\n  .content {\n    display: flex; flex-direction: column;\n    width: 100%;\n    background-color: #ECECEC;\n    background-image: linear-gradient(to bottom, transparent 20%, #E2E2E2 50%);\n    /*background-image: url(",");*/\n    background-size: cover;\n    background-position: left bottom;\n    min-height: 100vh;\n    height: 100%;\n\n    .menubtn {\n      position: absolute;\n      width: 35px; height: 35px;\n      padding: 5px;\n      border: 1px solid black;\n      border-radius: 100%;\n      margin: 1rem auto auto 1rem;\n      /*background-color: black;*/\n    }\n  }\n\n  .loadingicon {\n      animation: rotation 2s infinite linear;\n      @keyframes rotation {\n        from {\n          transform: rotate(0deg);\n        }\n        to {\n          transform: rotate(359deg);\n        }\n      }\n    }\n"]);return B=function(){return n},n}var I=s.a.div(B(),N.a),K=s.a.div(W()),J=s.a.div(R()),P=s.a.div(F(),(function(n){return n.vehiclelabelsize?n.vehiclelabelsize:"4rem"})),Y=s.a.div(T(),z.a,(function(n){return n.toggled?"flex":"none"})),X=function(){var n=Object(a.useState)([]),t=Object(l.a)(n,2),e=t[0],r=t[1],o=Object(a.useState)([]),c=Object(l.a)(o,2),s=c[0],m=c[1],d=Object(a.useState)([0]),g=Object(l.a)(d,2),f=(g[0],g[1]),b=Object(a.useState)([0]),w=Object(l.a)(b,2),E=w[0],v=w[1],_=Object(a.useState)(""),k=Object(l.a)(_,2),y=k[0],C=k[1],z=Object(a.useState)([]),j=Object(l.a)(z,2),N=j[0],L=j[1],S=Object(a.useState)(!0),M=(Object(l.a)(S,1)[0],Object(a.useState)([])),U=Object(l.a)(M,2),T=(U[0],U[1],Object(a.useState)("00000")),F=Object(l.a)(T,2),R=F[0],W=F[1],B=Object(a.useState)("00000"),X=Object(l.a)(B,2),$=X[0],q=X[1],G=Object(a.useState)(!0),H=Object(l.a)(G,2),Q=H[0],V=H[1],Z=function(n,t){var e=t.filter((function(t){return t.mission_name.toLowerCase().includes(n.toLowerCase())||t.core_serial.toLowerCase().includes(n.toLowerCase())}));L(e),console.log(e)},nn=function(n,t){r(t),console.log(n),f(t.filter((function(t){return t.core_serial?t.core_serial.toLowerCase().includes(n.toLowerCase()):"error"})));var e=t.filter((function(t){return t.core_serial.toLowerCase().includes(n.toLowerCase())}));e[e.length-1];Z(y,t)},tn=function(n){W(n),n.core_serial&&nn(n.core_serial,e)},en=function(n){q(e.filter((function(t){return t.mission_name.toLowerCase().includes(n.toLowerCase())}))[0])};return Object(a.useEffect)((function(){fetch("https://api.spacexdata.com/v3/cores").then((function(n){return n.json()})).then((function(n){!function(n,t){m(t);var e=t.filter((function(t){return t.core_serial.toLowerCase().includes(n.toLowerCase())||t.missions.filter((function(t){if(t.name.toLowerCase().includes(n.toLowerCase()))return t}))[0]}));v(e),tn(e[0]?e[0]:"00000")}(y,n.map((function(n,t){return{core_serial:n.core_serial,status:n.status,details:n.details,block:n.block||"X",reuse_count:n.reuse_count,rtls_attempts:n.rtls_attempts,asds_attempts:n.asds_attempts,missions:n.missions}})))})),fetch("https://api.spacexdata.com/v3/launches").then((function(n){return n.json()})).then((function(n){nn(R,n.map((function(n,t){return{mission_name:n.mission_name,flight_number:n.flight_number,rocket_name:n.rocket.rocket_name,launch_success:n.upcoming?"not yet launched":n.launch_success?"SUCCESS":"FAILURE",core_serial:n.rocket.first_stage.cores[0].core_serial||"NO CORE",was_reused:n.rocket.first_stage.cores[0].reused?"TRUE":"FALSE",fairing_recovered:null!==n.rocket.fairings?n.rocket.fairings.recovery_attempt?n.rocket.fairings.recovered?"SUCCESS":"FAILURE":"NO ATTEMPT":"N/A",mission_patch:n.links.mission_patch_small,details:n.details,launch_date:n.launch_date_utc.split("T")[0],launch_site:n.launch_site.site_name,landing_success:n.upcoming?"N/A":n.rocket.first_stage.cores[0].land_success?"SUCCESS":"FAILURE",video_link:n.links.video_link,core_flights:n.rocket.first_stage.cores[0].flight?n.rocket.first_stage.cores[0].flight:"UNKNOWN"}})))}))}),[]),i.a.createElement(I,null,i.a.createElement("div",{className:"row"},i.a.createElement(Y,{toggled:Q},i.a.createElement(p.a,{className:"menubtn",color:"white",onClick:function(){V(!Q)}}),i.a.createElement(K,null,i.a.createElement("div",{className:"topbar"},i.a.createElement("div",{className:"row"},i.a.createElement("input",{onChange:function(n){C(n.target.value)},value:y,onKeyDown:function(n){13==n.keyCode&&Z(y,e)}}),i.a.createElement(p.a,{className:"clearsearch",color:"white",onClick:function(){C(""),Z("",e)}})),i.a.createElement(u.a,{className:"searchimg",onClick:function(){Z(y,e)},color:"white"})),i.a.createElement("div",{className:"scroll-container"},i.a.createElement("div",{className:"group"},!N.length>0?i.a.createElement(x.a,{color:"white",className:"loadingicon"}):null,N.map((function(n,t){return i.a.createElement("div",{className:n.mission_name===$.mission_name?"item active":"item",onClick:function(){tn(function(n,t){var e=t.filter((function(t){return t.core_serial.toLowerCase().includes(n.toLowerCase())}));return e[0]?e[0]:"00000"}(n.core_serial,s)),q(n)}},i.a.createElement("h1",null,n.mission_name?n.mission_name.length>10?n.mission_name.slice(0,10-n.mission_name.length):n.mission_name:null,i.a.createElement("span",null,n.core_serial)),i.a.createElement("h2",null,n.launch_date))})))))),i.a.createElement("div",{className:"content"},i.a.createElement(h.a,{className:"menubtn",color:"black",onClick:function(){V(!Q)}}),i.a.createElement(A,null),i.a.createElement(P,{vehiclelabelsize:R.core_serial&&R.core_serial.length>5?"2.5rem":"4rem"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"selected-vehicle-label",onClick:function(){console.log(s)}},i.a.createElement("h1",null,R.core_serial||"00000",i.a.createElement("span",null,"BLOCK",R.block?R.block:0))),i.a.createElement("div",{className:"selected-vehicle-missions"},R.missions?R.missions.map((function(n,t){return i.a.createElement("div",{className:n.name===$.mission_name?"mission-result active":"mission-result",onClick:function(){en(n.name)}},i.a.createElement("h5",null,n.name?n.name.length>22?n.name.slice(0,22-n.name.length)+"...":n.name:null))})):null)),i.a.createElement("p",null,R.details),i.a.createElement("div",{className:"row"},i.a.createElement(D,{amount0:R.reuse_count?R.reuse_count:0,amount1:R.rtls_attempts?R.rtls_attempts:0,amount2:R.asds_attempts?R.asds_attempts:0}),i.a.createElement("h3",null,i.a.createElement("span",null,"status: "),R.status||"UNKNOWN"))),i.a.createElement(J,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"selected-mission-label"},i.a.createElement("h1",null,$.mission_name||"00000")),i.a.createElement("ul",null,i.a.createElement("li",null,"Launch Date",i.a.createElement("span",null,$.launch_date?$.launch_date.split("T")[0]:"00/00/00")),i.a.createElement("li",null,"Location",i.a.createElement("span",null,$.launch_site)),i.a.createElement("li",null,"Launch Status",i.a.createElement("span",null,$.launch_success)),i.a.createElement("li",null,"Fairing Recovery",i.a.createElement("span",null,$.fairing_recovered)),i.a.createElement("li",null,"Landing Status",i.a.createElement("span",null,$.landing_success)),i.a.createElement("li",null,"Flight #",i.a.createElement("span",null,$.flight_number)),i.a.createElement("li",null,"Previous Core Flights",i.a.createElement("span",null,$.core_flights-1||0)))),i.a.createElement("div",{className:"row bottombox"},$.details?i.a.createElement("p",{className:"mission_description"},$.details):null,i.a.createElement(O,{launches:E,selectedMission:R,UpdateSelectedMission:en}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6d748e59.chunk.js.map