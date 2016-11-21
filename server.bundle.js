!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var n=r(1),a=t(n),o=r(2),s=t(o),c=r(3),u=t(c),i=r(4),l=t(i),f=r(5),_=r(6),d=r(7),p=t(d),m=(0,a["default"])(),E=process.env.PORT||8080,O=function(e){return'\n    <!DOCTYPE html>\n        <head>\n            <meta charset="utf-8">\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            <title>Forecaster</title>\n            <meta name="description" content="">\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            <link rel="stylesheet" href="https://bootswatch.com/yeti/bootstrap.min.css">\n        </head>\n        <body>\n        \n        <div id="app">'+e+'</div>\n\n        <script src="https://use.fontawesome.com/63d289309a.js"></script>\n        <script src="/bundle.js"></script>\n        </body>\n    </html>\n    '};m.use((0,u["default"])()),m.use(a["default"]["static"](s["default"].join(e,"dist"))),m.get("*",function(e,t){(0,_.match)({routes:p["default"],location:e.url},function(e,r,n){if(e)t.status(500).send(e.message);else if(r)t.status(500).send("Unable to redirect");else if(n){var a=(0,f.renderToString)(l["default"].createElement(_.RouterContext,n));t.send(O(a))}else t.status(404).send("Page not found.")})}),m.listen(E,function(){console.log("server running at localhost:"+E)});(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"app","/Users/shawnmoore/Documents/workspace-JS/forecaster/server.js"),__REACT_HOT_LOADER__.register(E,"PORT","/Users/shawnmoore/Documents/workspace-JS/forecaster/server.js"),__REACT_HOT_LOADER__.register(O,"renderPage","/Users/shawnmoore/Documents/workspace-JS/forecaster/server.js"))})()}).call(t,"")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(4),o=n(a),s=r(6),c=r(8),u=n(c),i=r(24),l=n(i),f=r(31),_=n(f),d=r(17),p=n(d),m=r(15),E=function(e){p["default"].dispatch((0,m.coordinatesRequest)(e.params.requested))};e.exports=o["default"].createElement(s.Route,{path:"/",component:u["default"]},o["default"].createElement(s.Route,{path:"fivedays/:requested",component:l["default"],onEnter:E}),o["default"].createElement(s.Route,{path:"day/:requested/:dayID",component:_["default"],onEnter:E}));(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(E,"forecastDirect","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/routes.js")})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(9),o=n(a),s=o["default"];t["default"]=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(s,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/index.js")})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(4),l=n(i),f=(r(10),r(11)),_=r(12),d=n(_),p=r(23),m=n(p),E=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:"container-fluid"},l["default"].createElement(d["default"],{dispatch:this.props.dispatch}),this.props.children&&l["default"].cloneElement(this.props.children,c({},this.props.forecast)),l["default"].createElement(m["default"],null))}}]),t}(i.Component),O=function(e){return c({},e)},h=(0,f.connect)(O)(E);t["default"]=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"Home","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Containers/Home.js"),__REACT_HOT_LOADER__.register(O,"mapStateToProps","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Containers/Home.js"),__REACT_HOT_LOADER__.register(h,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Containers/Home.js"))})()},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),o=n(a),s=(r(10),r(13)),c=n(s),u=function(e){return o["default"].createElement("div",null,o["default"].createElement(c["default"],{dispatch:e.dispatch}))},i=u;t["default"]=i;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"Header","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Header.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Header.js"))})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(4),l=n(i),f=r(14),_=r(15),d=function(e){var t=e.meta.touched&&e.meta.error;return l["default"].createElement("div",null,l["default"].createElement("div",{className:"formError"},t?e.meta.error:null),l["default"].createElement("h1",null,"What's the weather in"," ",l["default"].createElement("input",u({},e.input,{type:e.type,placeholder:e.placeholder,className:t?"inputError":null}))," ","?"))},p=function(e){var t={};return e.location||(t.location="Location is missing"),/^[a-z0-9, -]+$/i.test(e.location)||(t.location="Location is invalid"),t},m=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleDispatch=r.handleDispatch.bind(r),r}return s(t,e),c(t,[{key:"handleDispatch",value:function(e){this.props.dispatch((0,_.coordinatesRequest)(e)),this.context.router.push("/fivedays/"+e.location),document.activeElement.blur()}},{key:"render",value:function(){var e=this.props.handleSubmit;return l["default"].createElement("form",{className:"formLocation",onSubmit:e(this.handleDispatch)},l["default"].createElement(f.Field,{name:"location",label:"Location",component:d,type:"text",placeholder:"Reykjavik, Iceland"}),l["default"].createElement("button",{className:"btn btn-info",type:"submit"},"Let's Find Out"))}}]),t}(i.Component);m.contextTypes={router:l["default"].PropTypes.object};var E=(0,f.reduxForm)({form:"Location",validate:p})(m);t["default"]=E;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"renderInput","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Location.js"),__REACT_HOT_LOADER__.register(p,"validate","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Location.js"),__REACT_HOT_LOADER__.register(m,"Location","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Location.js"),__REACT_HOT_LOADER__.register(E,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Location.js"))})()},function(e,t){e.exports=require("redux-form")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.weatherRequest=t.coordinatesRequest=t.fetchError=t.FETCH_ERROR=t.parseDay=t.PARSE_DAY=t.parseForecast=t.PARSE_FORECAST=t.parseCoordinates=t.PARSE_COORDINATES=t.getCoordinates=t.GET_COORDINATES=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(16),s=n(o),c=r(17),u=n(c);"undefined"==typeof window&&(global.window={});var i="2d545aab6d1b689af05beb887f824b02",l="AIzaSyCsNvqA5Z6wvYLEf0URgE3aLvbvas7E0mM",f=t.GET_COORDINATES="GET_COORDINATES",_=t.getCoordinates=function(e){return{type:f,payload:{first:!1,isFetching:!0,requested:e}}},d=t.PARSE_COORDINATES="PARSE_COORDINATES",p=t.parseCoordinates=function(e){return{type:d,payload:a({},e)}},m=t.PARSE_FORECAST="PARSE_FORECAST",E=t.parseForecast=function(e){return{type:m,payload:a({isFetching:!1},e)}},O=t.PARSE_DAY="PARSE_DAY",h=t.parseDay=function(e){return{type:O,payload:a({isFetching:!1},e)}},y=t.FETCH_ERROR="FETCH_ERROR",T=t.fetchError=function(e){return{type:y,payload:{isFetching:!1,error:e}}},A=t.coordinatesRequest=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Seattle";return function(t,r){return e.location&&(e=e.location),r().forecast.formatted_address&&e===r().forecast.requested?(t(E({current:r().forecast.current,days:r().forecast.days,alerts:r().forecast.alerts})),new Promise(function(e){return e("Repeated Request")})):(t(_(e)),(0,s["default"])("https://maps.googleapis.com/maps/api/geocode/json?address="+e+"&key="+l).then(function(e){return e.json()}).then(function(e){var r={};try{r.lat=e.results[0].geometry.location.lat,r.lng=e.results[0].geometry.location.lng,r.fa=e.results[0].formatted_address,t(p(r)),t(D(r))}catch(n){console.log("Longitude and latitude not found."),t(T(n))}})["catch"](function(e){return t(T(e))}))}},R=function(e){var t={},r=[],n=[];try{t=e.currently,r=e.daily.data,n=e.alerts,u["default"].dispatch(E({current:t,days:r,alerts:n}))}catch(a){console.log("Weather not found. "+a.message),u["default"].dispatch(T(a))}};window.darkSkyCallback=function(e){R(e)};var w=function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.src=e,r.addEventListener("load",function(e){e.target.remove()}),t.insertBefore(r,null)},D=t.weatherRequest=function(e){return function(t){var r="https://api.darksky.net/forecast/"+i+"/"+e.lat+","+e.lng+"?callback=darkSkyCallback";w(r)}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"DARK_SKY","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(l,"GEOCODE","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(f,"GET_COORDINATES","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(_,"getCoordinates","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(d,"PARSE_COORDINATES","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(p,"parseCoordinates","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(m,"PARSE_FORECAST","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(E,"parseForecast","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(O,"PARSE_DAY","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(h,"parseDay","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(y,"FETCH_ERROR","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(T,"fetchError","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(A,"coordinatesRequest","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(R,"buildForecast","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(w,"requestJSONP","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"),__REACT_HOT_LOADER__.register(D,"weatherRequest","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Actions/index.js"))})()},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(18),o=r(19),s=n(o),c=r(20),u=(n(c),r(21)),i=n(u),l=function(e){return(0,a.createStore)(i["default"],e,(0,a.compose)((0,a.applyMiddleware)(s["default"])))},f=l(),_=f;t["default"]=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"configureStore","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/store.js"),__REACT_HOT_LOADER__.register(f,"store","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/store.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/store.js"))})()},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("redux-logger")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(18),o=r(22),s=n(o),c=r(14),u=(0,a.combineReducers)({forecast:s["default"],form:c.reducer});t["default"]=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(u,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/combinedReducers.js")})()},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.forecast=t.initForecast=void 0;var a=r(15),o=n(a),s=t.initForecast={first:!0,isFetching:!1,requested:"",formatted_address:"",current:{},days:[],alerts:[],error:{}},c=t.forecast=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1],r={};switch(t.type){case o.GET_COORDINATES:return r=Object.assign({},e,s),Object.assign({},r,t.payload);case o.PARSE_COORDINATES:return Object.assign({},e,{formatted_address:t.payload.fa});case o.PARSE_FORECAST:return Object.assign({},e,t.payload);case o.FETCH_ERROR:return r=Object.assign({},e,s),Object.assign({},r,t.payload);default:return e}},u=c;t["default"]=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"initForecast","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Reducers/index.js"),__REACT_HOT_LOADER__.register(c,"forecast","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Reducers/index.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Reducers/index.js"))})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),o=n(a),s=function(){return o["default"].createElement("div",{className:"footer"},o["default"].createElement("div",null,"Forecaster by Shawn Moore"),o["default"].createElement("div",null,"Powered by"),o["default"].createElement("ul",{className:"list-inline"},o["default"].createElement("li",null,o["default"].createElement("a",{href:"https://darksky.net",target:"_blank"},o["default"].createElement("img",{src:"https://darksky.net/images/darkskylogo.png",alt:"Dark Sky API"}))),o["default"].createElement("li",null,"&"),o["default"].createElement("li",null,o["default"].createElement("a",{href:"https://developers.google.com/maps/documentation/geocoding/start",target:"_blank"},o["default"].createElement("i",{className:"fa fa-google fa-2x"})))))};t["default"]=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(s,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Footer.js")})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(4),s=n(o),c=r(10),u=(n(c),r(6)),i=r(25),l=r(26),f=n(l),_=r(28),d=r(29),p=n(d),m=r(30),E=n(m),O=function(e){var t=e.time,r=e.summary,n=e.icon,a=e.temperatureMin,o=e.temperatureMax,c=e.dayID,l=e.requested,_=e.params;return s["default"].createElement("div",{className:"day"},s["default"].createElement(u.Link,{to:"/day/"+l+"/"+c},s["default"].createElement("div",{className:"dayDate"},(0,i.calendarDate)(t)),s["default"].createElement(f["default"],{icon:n,isDay:void 0!==_.dayID}),s["default"].createElement("div",null,r),s["default"].createElement("div",null,"Min: ",Math.round(a)," ℉"),s["default"].createElement("div",null,"Max: ",Math.round(o)," ℉")))},h=function(e){var t=e.first,r=e.isFetching,n=e.days,o=e.requested,c=e.formatted_address,u=e.alerts,i=e.params;return t?null:r?s["default"].createElement(_.Processing,null):0===n.length?s["default"].createElement(_.Unknown,null):s["default"].createElement("div",{className:"forecastBlock fadeIn"},s["default"].createElement("h1",{className:"address"},s["default"].createElement(E["default"],{formatted_address:c})),s["default"].createElement("div",{className:"fiveBlock"},s["default"].createElement("h2",null,"Five Day Forecast"),s["default"].createElement("ul",{className:"list-inline"},n.slice(0,5).map(function(e,t){return s["default"].createElement("li",{key:t},s["default"].createElement(O,a({},e,{dayID:t,requested:o,params:i})))}))),s["default"].createElement(p["default"],{alerts:u}))},y=h;t["default"]=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"DayLink","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/FiveDays.js"),__REACT_HOT_LOADER__.register(h,"FiveDays","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/FiveDays.js"),__REACT_HOT_LOADER__.register(y,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/FiveDays.js"))})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.forecastConverter=t.standardTime=t.calendarDate=void 0;var a=r(4),o=n(a),s=t.calendarDate=function(e){var t=new Date(1e3*e),r=["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return r[t.getDay()]+" "+n[t.getMonth()]+" "+t.getDate()+" "+t.getFullYear()},c=t.standardTime=function(e){var t=new Date(1e3*e),r=0===t.getHours()?12:t.getHours(),n=t.getMinutes().toString();return n=n.length>1?n:"0"+n,r>12?r-12+":"+n+" PM":r+":"+n+" AM"},u=t.forecastConverter={time:{name:"Date",format:function(e){return s(e)}},summary:{name:"Summary",format:function(e){return e}},sunriseTime:{name:"Sunrise",format:function(e){return c(e)}},sunsetTime:{name:"Sunset",format:function(e){return c(e)}},moonPhase:{name:"Moon Phase",format:function(e){return e}},precipIntensity:{name:"Precipitation Intensity",format:function(e){return e}},precipIntensityMax:{name:"Max Precipitation",format:function(e){return e}},precipIntensityMaxTime:{name:"Max Precipitation Time",format:function(e){return c(e)}},precipProbability:{name:"Precipitation Probability",format:function(e){return e}},precipAccumulation:{name:"Precipitation Accumulation",format:function(e){return e+" in."}},precipType:{name:"Precipitation Type",format:function(e){return e}},temperatureMin:{name:"Min Temperature",format:function(e){return o["default"].createElement("span",null,e,"℉")}},temperatureMinTime:{name:"Min Temperature Time",format:function(e){return c(e)}},temperatureMax:{name:"Max Temperature",format:function(e){return o["default"].createElement("span",null,e,"℉")}},temperatureMaxTime:{name:"Max Temperature Time",format:function(e){return c(e)}},apparentTemperatureMin:{name:"Apparent Min Temperature",format:function(e){return o["default"].createElement("span",null,e,"℉")}},apparentTemperatureMinTime:{name:"Apparent Min Temperature Time",format:function(e){return c(e)}},apparentTemperatureMax:{name:"Apparent Max Temperature",format:function(e){return o["default"].createElement("span",null,e,"℉")}},apparentTemperatureMaxTime:{name:"Apparent Max Temperature Time",format:function(e){return c(e)}},dewPoint:{name:"Dew Point",format:function(e){return e}},humidity:{name:"Humidity",format:function(e){return e}},windSpeed:{name:"Wind Speed",format:function(e){return e}},windBearing:{name:"Wind Bearing",format:function(e){return e}},visibility:{name:"Visibility",format:function(e){return e}},cloudCover:{name:"Cloud Cover",format:function(e){return e}},pressure:{name:"Pressure",format:function(e){return e}},ozone:{name:"Ozone",format:function(e){return e}}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"calendarDate","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Utilities/index.js"),__REACT_HOT_LOADER__.register(c,"standardTime","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Utilities/index.js"),__REACT_HOT_LOADER__.register(u,"forecastConverter","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Utilities/index.js"))})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(4),i=n(u);r(10);"undefined"==typeof window&&(global.window={});var l=r(27)(window),f=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleCanvas=r.handleCanvas.bind(r),r}return s(t,e),c(t,[{key:"handleCanvas",value:function(e){this.skycons=new l({color:"black"}),this.skycons.add(e,this.props.icon),this.skycons.play()}},{key:"render",value:function(){return i["default"].createElement("canvas",{ref:this.handleCanvas,className:"icon"})}}]),t}(u.Component),_=f;t["default"]=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Skycons","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Icons.js"),__REACT_HOT_LOADER__.register(f,"Icon","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Icons.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Icons.js"))})()},function(e,t){e.exports=require("skycons")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Unknown=t.Processing=void 0;var a=r(4),o=n(a),s=(r(10),t.Processing=function(){return o["default"].createElement("div",{className:"spinnerBlock"},o["default"].createElement("i",{className:"fa fa-circle-o-notch fa-2x fa-spin"}))}),c=t.Unknown=function(){return o["default"].createElement("div",null,o["default"].createElement("h4",null,"Sorry, we couldn't find that location."))};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"Processing","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Processing.js"),__REACT_HOT_LOADER__.register(c,"Unknown","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Processing.js"))})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),o=n(a),s=(r(10),function(e){var t=e.title,r=e.uri;return o["default"].createElement("div",{className:"alertSingle"},o["default"].createElement("div",{className:"alertTitle"},t),o["default"].createElement("div",{className:"alertLink"},o["default"].createElement("a",{href:r,target:"_blank"},"More Information")))}),c=function(e){var t=e.alerts;return o["default"].createElement("div",{className:"alertBlock"},o["default"].createElement("h2",null,"Alerts"),o["default"].createElement("ul",{className:"list-unstyled"},t?t.map(function(e,t){return o["default"].createElement("li",{key:t},o["default"].createElement(s,e))}):"No alerts found."))},u=c;t["default"]=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"Alert","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Alerts.js"),__REACT_HOT_LOADER__.register(c,"Alerts","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Alerts.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Alerts.js"))})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),o=n(a),s=(r(10),function(e){var t=e.formatted_address.replace(/\s/g,"+"),r="https://www.google.com/maps/place/"+t;return o["default"].createElement("a",{href:r,target:"_blank"},e.formatted_address)}),c=s;t["default"]=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"AddressLink","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/AddressLink.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/AddressLink.js"))})()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(4),i=n(u),l=(r(10),r(6)),f=r(25),_=r(26),d=n(_),p=r(28),m=r(30),E=n(m),O=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.dataDisplay=r.dataDisplay.bind(r),r}return s(t,e),c(t,[{key:"dataDisplay",value:function(e){var t=[],r=0;t.push(i["default"].createElement("h2",{key:r},(0,f.calendarDate)(e.time))),r++,e.icon&&(t.push(i["default"].createElement("div",{key:r},i["default"].createElement(d["default"],{icon:e.icon,isDay:void 0!==this.props.params.dayID}))),r++);for(var n in e){if("summary"===n)t.push(i["default"].createElement("div",{key:r,className:"summary"},f.forecastConverter[n].format(e[n])));else if("icon"!==n&&"time"!==n)try{t.push(i["default"].createElement("div",{key:r},f.forecastConverter[n].name,": ",f.forecastConverter[n].format(e[n])))}catch(a){console.log(n+" is unknown")}r++}return t}},{key:"render",value:function(){var e=this.props,t=e.isFetching,r=e.days,n=e.formatted_address,a=e.params,o=r[a.dayID];return t?i["default"].createElement(p.Processing,null):0===r.length?i["default"].createElement(p.Unknown,null):i["default"].createElement("div",{className:"forecastBlock fadeIn dayBlock"},i["default"].createElement(l.Link,{to:"/fivedays/"+a.requested},"Five Day Forecast"),i["default"].createElement("h1",{className:"address"},i["default"].createElement(E["default"],{formatted_address:n})),i["default"].createElement("div",{className:"dayBlock"},this.dataDisplay(o)))}}]),t}(u.Component),h=O;t["default"]=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"Day","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Day.js"),__REACT_HOT_LOADER__.register(h,"default","/Users/shawnmoore/Documents/workspace-JS/forecaster/app/Forecast/Components/Day.js"))})()}]);