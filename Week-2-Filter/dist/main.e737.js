(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{153:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(8),o=n.n(i),l=(n(155),n(153),n(166)),c=n(60),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=c.a.Option,h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),s(t,[{key:"handleChange",value:function(e){this.props.onChange(e),console.log("current",e)}},{key:"render",value:function(){var e=this.props,t=e.options,n=e.defaultValue,a=t.map(function(e,t){return r.a.createElement(u,{key:e+"_"+t,value:e},e)});return r.a.createElement(c.a,{defaultValue:n,onChange:this.handleChange},a)}}]),t}(),f=n(0),d=n.n(f),p=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:"sidebar-panel"},r.a.createElement("h4",null,t),r.a.createElement("div",{className:"sidebar-panel-content"},n))};p.propTypes={title:d.a.string,children:d.a.oneOfType([d.a.array,d.a.element])};var m=p,g=n(165),v=["三民區","內門區","美濃區","大樹區","小港區","六龜區","仁武區","左營區","田寮區","永安區","甲仙區","鼓山區","杉林區","那瑪夏","岡山區","高雄市","前鎮區","新興區","苓雅區","茂林區","茄萣區","梓官區","旗津區","桃源區","楠梓區","前金區","鳳山區","旗山區","橋頭區","燕巢區","彌陀區","鹽埕區","鳥松區","阿蓮區","大寮區","林園區","那瑪夏區","大社區","湖內區","路竹區","鳳山溪"],y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var b=g.a.Group,E=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={checkedList:v,indeterminate:!1,checkAll:!0},n.onChange=n.onChange.bind(n),n.onCheckAllChange=n.onCheckAllChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),y(t,[{key:"onChange",value:function(e){this.setState({checkedList:e,indeterminate:!!e.length&&e.length<v.length,checkAll:e.length===v.length}),this.props.onChange(e)}},{key:"onCheckAllChange",value:function(e){var t=e.target.checked?v:[];this.setState({checkedList:t,indeterminate:!1,checkAll:e.target.checked}),this.props.onChange(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(g.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Select All")),r.a.createElement("br",null),r.a.createElement(b,{options:v,value:this.state.checkedList,onChange:this.onChange}))}}]),t}(),k=n(164);var C=function(e){var t=e.tagList,n=e.closable;return t.length&&r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(k.a,{closable:n,key:e+"_"+t}," ",e," ")})," ")||[]};C.propTypes=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({tagList:d.a.array},"tagList",d.a.any);var w=C,O=(n(89),function(e){var t=e.name,n=e.text;return r.a.createElement("span",{className:"text-with-icon"},r.a.createElement("i",{className:"fa "+t}),n)});O.propTypes={name:d.a.string,text:d.a.string};var _,j=O;function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){var t=e.city,n=e.date;return r.a.createElement("div",null,r.a.createElement(j,{name:"fa-map-marker",text:t}),r.a.createElement(j,{name:"fa-calendar",text:n}))};N.propsTypes={city:d.a.string,date:d.a.string};var x=function(e){var t=e.data,n=t.url,a=t.title,i=t.description,o=t.zone,l=t.openTime,c=t.ticketInfo;return r.a.createElement("div",{className:"result-panel-item"},r.a.createElement("div",{className:"result-panel-left"},r.a.createElement("img",{src:n})),r.a.createElement("div",{className:"result-panel-right"},r.a.createElement("h4",null,a),r.a.createElement("div",{className:"description-wrapper"},r.a.createElement("div",{className:"discription"},i),r.a.createElement("div",{className:"ellipsis"},"...")),r.a.createElement("div",null,r.a.createElement("h5",{className:"zone-info"},o),r.a.createElement(N,{city:l,date:c}))))};x.propTypes=(P(_={data:d.a.object,url:d.a.string},"data",d.a.object),P(_,"title",d.a.string),P(_,"description",d.a.string),P(_,"host",d.a.string),P(_,"tagList",d.a.array),P(_,"city",d.a.string),P(_,"date",d.a.string),_);var S=x,T=n(167),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var A=l.a.Search,Z=["All","Free"],I="https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300",D=[],F=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isLoaded:!1,current:1,selectedZones:v,text:"",isFree:!1},n.fetchData=n.fetchData.bind(n),n.handleChangeZone=n.handleChangeZone.bind(n),n.handleChangePage=n.handleChangePage.bind(n),n.handlePriceChange=n.handlePriceChange.bind(n),n.handleSearchText=n.handleSearchText.bind(n),n.handleSearchInputKeyup=n.handleSearchInputKeyup.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),L(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"handleChangePage",value:function(e){this.setState({current:e})}},{key:"handleChangeZone",value:function(e){this.setState({selectedZones:e,current:1})}},{key:"handleSearchText",value:function(e){this.setState({text:e})}},{key:"handleSearchInputKeyup",value:function(e){console.log(e.target),console.log(e.target.value)}},{key:"handlePriceChange",value:function(e){this.setState({isFree:"Free"===e})}},{key:"handleTextChange",value:function(e){console.log(e)}},{key:"fetchData",value:function(){var e=this;fetch(I).then(function(e){return e.json()}).then(function(e){return e.result.records}).then(function(e){return e.map(function(e){D.push({url:e.Picture1,title:e.Name,description:e.Description,zone:e.Zone,openTime:e.Opentime,ticketInfo:e.Ticketinfo?e.Ticketinfo:"免費或收費是個問題"})})}).then(function(t){e.setState({isLoaded:!0})}).catch(function(e){return console.log("failed to parse: ",e)})}},{key:"render",value:function(){var e=this;this.state.isLoaded&&console.log("loaded");var t=function(){var t=D;e.state.isFree&&(t=D.filter(function(e){return""!==e.ticketInfo})),t=t.filter(function(t){return-1!==e.state.selectedZones.indexOf(t.zone)});return e.state.text&&t.filter(function(t){return function(t){for(var n=Object.keys(t),a=0,r=n.length;a<r;a++){var i=n[a];if("url"!==i&&-1!==t[i].search(e.state.text))return!0}return!1}(t)})||t},n=t().length;return r.a.createElement("div",{className:"main"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-content"},r.a.createElement("h1",null," Find Somewhere to Go "),r.a.createElement("div",{className:"header-search"},r.a.createElement(A,{placeholder:"Go where?",onSearch:this.handleSearchText,enterButton:!0,disabled:!this.state.isLoaded})))),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"sidebar"},r.a.createElement(m,{title:"Price"},r.a.createElement(h,{onChange:this.handlePriceChange,options:Z,defaultValue:Z[0]})),r.a.createElement(m,{title:"Zones"},r.a.createElement(E,{onChange:this.handleChangeZone}))),r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"result-title"},r.a.createElement("h3",{className:this.state.isLoaded?"":"loading"},this.state.isLoaded?"Expolre "+n+" destinations":"Loading"),r.a.createElement(w,{tagList:this.state.text&&[this.state.text],closable:!0})),r.a.createElement("div",{className:"resultItem-panel"},this.state.isLoaded?function(e){return e.map(function(e,t){return r.a.createElement(S,{key:"result.item"+t,data:e})})}(function(){var n=t();return n.length&&n.filter(function(t,n){return n>=10*(e.state.current-1)&&n<10*e.state.current-1})||[]}()):null),this.state.isLoaded?r.a.createElement(T.a,{defaultCurrent:this.current,onChange:this.handleChangePage,total:n}):null)))}}]),t}();o.a.render(r.a.createElement(F,null),document.getElementById("App"))},89:function(e,t,n){}},[[87,0,1]]]);
//# sourceMappingURL=main.e737.js.map