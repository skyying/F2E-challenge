(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,i){"use strict";i.r(e);i(6);var n=i(0),r=i.n(n),o=i(5),a=i.n(o),s={x:(window.innerWidth||window.body.clienWidth)/2,y:(window.innerHeight||window.body.clientHeight)/2};var l=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=e.pos,this.size=e.bulletSize,this.color=e.color,this.angle=e.angle,this.currentRadius=e.positionRadius,this.initalRadius=e.positionRadius},c=function(t){return Math.PI/180*t},h=function(t,e,i,n){return{x:t+Math.cos(c(n))*i,y:e+Math.sin(c(n))*i}},u=function(t,e){var i=Math.pow(e.x-t.x,2),n=Math.pow(e.y-t.y,2);return Math.sqrt(i+n)},d=function(t,e){t=Math.ceil(t),e=Math.floor(e);Math.floor(Math.random()*(e-t));return Math.floor(Math.random()*(e-t))+t},f=function(t,e,i){for(var n=[],r=0,o=0;o<e;o++)r+=3===e?120:d(360/e-16,360/e+16),n.push(h(0,0,i,r));return n},p=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=e,this.angle=d(0,360),this.bulletList=[],this.emitInterval=d(2,4),this.isDead=!1,this.life=3,this.isHit=!1,this.color,this.bulletSpeed=8,this.setEmitInterval()}return p(t,[{key:"setEmitInterval",value:function(){this.emitInterval=1e3*d(3,10)}},{key:"emit",value:function(){this.bulletList.push(new l(this))}},{key:"autoEmit",value:function(){var t=this,e=(new Date).getTime();!function i(){(new Date).getTime()-e>t.emitInterval&&(t.emit(),e=(new Date).getTime()),requestAnimationFrame(i)}()}},{key:"moveBullet",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=0;e<this.bulletList.length;e++){var i=this.bulletList[e];i.currentRadius+=5*t,i.pos=h(s.x,s.y,i.currentRadius,i.angle),i.currentRadius>window.innerWidth&&this.bulletList.length&&this.bulletList.splice(e,1)}}}]),t}(),v=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var w=function(t){function e(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.dashColor="#74878E",t.glowColor="rgba(255, 255, 255, 0.6)",t.radius=90,t.color="#fff",t.innerRadius=.58*t.radius,t.splitLines=3,t.splitLineWidth=3,t.innerGlowLevel=.35*t.innerRadius,t.bulletSize=8,t.bulletHead={width:40,height:26,shrink:6},t.outerArc=80,t.outerArcWidth=6,t.turnSpeed=5,t.positionRadius=90,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,y),v(e,[{key:"setAngle",value:function(t,e){var i=e-this.pos.y,n=t-this.pos.x,r=Math.atan2(i,n);r*=180/Math.PI,this.angle=r<0?r+360:r}}]),e}(),g=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos={x:e,y:i},this.origin=n}g(t,[{key:"setOrigin",value:function(t){this.origin=t}},{key:"angle",value:function(t){}},{key:"collide",value:function(t){var e=u(this.origin,this.pos),i=u(t.pos,this.pos)+u(t.pos,this.origin);if(Math.abs(e-i)<1)return!0}}])}();var x=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parent=e,this.ctx=this.getCanvas(),this.grid={size:80,color:"rgba(255, 255, 255, 0.05)"},this.canvas,this.drawShape={Circle:function(t,e){var i=e.pos,n=e.radius,r=e.isFill,o=e.lineWidth,a=e.color;t.beginPath(),t.fillStyle=a,t.strokeStyle=a,t.arc(i.x,i.y,n,90,0,2*Math.PI),r?t.fill():(t.lineWidth=o,t.stroke())},Polygon:function(t,e){var i=e.pos,n=e.cord,r=e.color;t.beginPath(),t.moveTo(n[0].x+i.x,n[0].y+i.y);for(var o=1;o<n.length;o++)t.lineTo(n[o].x+i.x,n[o].y+i.y);t.closePath(),t.fillStyle=r,t.fill()},Rectangle:function(t,e){var i=e.pos,n=e.width,r=e.height,o=e.color;t.fillStyle=o,t.fillRect(i.x,i.y,n,r)}}}return b(t,[{key:"clear",value:function(){this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)}},{key:"setShadow",value:function(t,e,i,n){this.ctx.shadowColor=t,this.ctx.shadowBlur=e,this.ctx.shadowOffsetX=i,this.ctx.shadowOffsetY=n}},{key:"resetShadow",value:function(){this.ctx.shadowColor="rgba(255, 255, 255, 0)",this.ctx.shadowOffsetX=0,this.ctx.shadowOffsetY=0,this.ctx.shadowBlur=0}},{key:"getCanvas",value:function(){return this.canvas=document.createElement("canvas"),this.canvas.height=window.innerHeight||window.body.clientHeight,this.canvas.width=window.innerWidth||window.body.clienWidth,this.parent.appendChild(this.canvas),this.canvas.getContext("2d")}},{key:"drawGridBg",value:function(){var t=this.grid,e=t.size,i=t.color,n=1;for(this.ctx.lineWidth=1,this.ctx.strokeStyle=i;n*e<this.canvas.width;)this.ctx.beginPath(),this.ctx.moveTo(n*e,0),this.ctx.lineTo(n*e,this.canvas.height),this.ctx.stroke(),n++;for(n=1;n*e<this.canvas.height;)this.ctx.beginPath(),this.ctx.moveTo(0,n*e),this.ctx.lineTo(this.canvas.width,n*e),this.ctx.stroke(),n++}},{key:"drawCircleWithDash",value:function(t){var e=t.pos,i=t.radius,n=t.dashColor,r=i/14;this.resetShadow(),this.ctx.beginPath(),this.ctx.arc(e.x,e.y,i,90,0,2*Math.PI),this.ctx.strokeStyle=n,this.ctx.setLineDash([r,r]),this.ctx.lineWidth=2,this.ctx.stroke(),this.ctx.setLineDash([0,0])}},{key:"drawCircleWithGlow",value:function(t){var e=t.pos,i=t.radius,n=t.innerRadius,r=t.color,o=t.innerGlowLevel,a=t.glowColor,s=i/8.5;this.ctx.beginPath(),this.ctx.arc(e.x,e.y,n,90,0,2*Math.PI),this.ctx.strokeStyle=r,this.ctx.lineWidth=s,this.setShadow(a,o,0,0),this.ctx.stroke(),this.resetShadow()}},{key:"drawSplitLines",value:function(t){var e=t.pos,i=t.innerRadius,n=t.splitLines,r=t.splitLineWidth,o=t.innerGlowLevel,a=t.glowColor,s=t.angle;this.ctx.beginPath();for(var l=0;l<n;l++){this.ctx.moveTo(e.x,e.y);var c=h(e.x,e.y,i,s+360/n*l);this.ctx.lineTo(c.x,c.y),this.setShadow(a,o,0,0),this.ctx.lineWidth=r,this.ctx.stroke(),this.resetShadow()}}},{key:"drawOuterArc",value:function(t){var e=t.pos,i=t.radius,n=t.angle,r=t.outerArc,o=t.outerArcWidth;this.ctx.beginPath(),this.ctx.arc(e.x,e.y,i+24,c(n-r/2-180),c(n-180+r/2)),this.ctx.lineWidth=o,this.ctx.stroke()}},{key:"drawLanding",value:function(t){var e=this;t.map(function(t){return e.drawShape[t.type](e.ctx,t)})}},{key:"drawBulletHead",value:function(t){var e=t.pos,i=t.radius,n=t.color,r=t.angle,o=t.bulletHead,a=o.width,s=o.height,l=o.shrink,u=h(e.x,e.y,i,r),d=u.x,f=u.y;this.ctx.translate(d,f),this.ctx.rotate(c(r));var p=0-a/2,y=0-s/2;this.ctx.beginPath(),this.ctx.moveTo(p,y),this.ctx.lineTo(p+a/2,y),this.ctx.lineTo(p+a,y+l),this.ctx.lineTo(p+a,y+s-l),this.ctx.lineTo(p+a/2,y+s),this.ctx.lineTo(p,y+s),this.ctx.closePath(),this.ctx.fillStyle=n,this.ctx.fill(),this.ctx.rotate(-c(r)),this.ctx.translate(-d,-f)}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"white";this.ctx.beginPath(),this.ctx.strokeStyle=i,this.ctx.moveTo(t.x,t.y),this.ctx.lineWidth=3,this.ctx.lineTo(e.x,e.y),this.ctx.closePath(),this.ctx.stroke()}},{key:"drawEnding",value:function(t){var e=t?"TRY AGAIN? JUST REFRESH THIS PAGE":"HEN棒, 完美, 你真有耐心";this.ctx.font="50px Roboto",this.ctx.fillStyle="white",this.ctx.textAlign="center",this.ctx.fillText(""+e,window.innerWidth/2,window.innerHeight/2)}},{key:"drawTriangle",value:function(t){var e=t.pos,i=(t.shadowColor,t.angle),n=t.color,r=t.coordinatesForDraw,o=t.offsetAngle,a=e.x,s=e.y,l=x(r,3),h=x(l[0],2),u=h[0],d=h[1],f=x(l[1],2),p=f[0],y=f[1],v=x(l[2],2),w=v[0],g=v[1],b=c(i-o);this.ctx.translate(a,s),this.ctx.rotate(b),this.ctx.beginPath(),this.ctx.moveTo(u,d),this.ctx.lineTo(p,y),this.ctx.lineTo(w,g),this.ctx.closePath(),this.ctx.fillStyle=n,this.ctx.fill(),this.ctx.rotate(-b),this.ctx.translate(-a,-s)}},{key:"drawBullet",value:function(t){for(var e=t.bulletList,i=t.bulletSize,n=0;n<e.length;n++){var r=e[n].pos,o=r.x,a=r.y;this.ctx.beginPath(),this.ctx.arc(o,a,i,90,0,2*Math.PI),this.ctx.fillStyle=r.color,this.ctx.fill()}}},{key:"drawPlayer",value:function(t){this.drawGridBg(),this.drawCircleWithDash(t),this.drawCircleWithGlow(t),this.drawSplitLines(t),this.drawOuterArc(t),this.drawBulletHead(t),this.drawBullet(t)}},{key:"drawEnemy",value:function(t){this.drawShape[t.type](this.ctx,t),this.drawBullet(t)}},{key:"drawPlayingScene",value:function(){this.drawShape.Rectangle(this.ctx,{pos:{x:window.innerWidth-400,y:50},color:"#F6AF5F",width:300,height:30})}},{key:"drawEnemies",value:function(t){var e=this;t.forEach(function(t){return e.drawEnemy(t)})}}]),t}(),k=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function E(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var S=function(t){function e(){P(this,e);var t=O(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.positionRadius=window.innerHeight/2-10,t.radius=window.innerWidth/2-10,t.life=2,t.isDead=0===t.life,t.setPos(),t}return E(e,y),k(e,[{key:"setPos",value:function(){this.pos=h(s.x,s.y,this.positionRadius,this.angle)}},{key:"move",value:function(){var t=this,e=(new Date).getTime();!function i(){(new Date).getTime()-e>1&&t.positionRadius>130&&(t.positionRadius-=.1,t.setPos(),e=(new Date).getTime()),requestAnimationFrame(i)}()}}]),e}(),_=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d(0,360);P(this,e);var n=O(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.isFill=!0,n.side=0,n.angle=i,n.bulletSize=6,n.lineWidth=0,n.type="Circle",n.color="#F6AF5F",n.radius=t,n.setPos(),n}return E(e,S),k(e,[{key:"collide",value:function(t){var e=this,i=t.bulletList;i.forEach(function(t,n){return u(t.pos,e.pos)<=e.radius+t.size&&(i.splice(n,1),e.life-=1,!0)})}}]),e}(),L=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:40,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d(0,360);P(this,e);var n=O(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.radius=t,n.color="#2878cc",n.dx=(Math.random()-.5)*d(1,5),n.dy=(Math.random()-.5)*d(1,5),n.type="Polygon",n.sides=3,n.angle=i,n.initCoordinate=f({x:0,y:0},n.sides,n.radius),n.cord=n.initCoordinate,n.setPos(),n.bulletSize=5,n}return E(e,S),k(e,[{key:"collide",value:function(t){var e=this,i=t.bulletList;i.forEach(function(t,n){return u(t.pos,e.pos)<=e.radius+t.size&&(i.splice(n,1),e.life-=1,!0)})}}]),e}(),T=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d(0,360);P(this,e);var n=O(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.radius=t,n.color="#E8465D",n.dx=Math.random()-.5,n.dy=Math.random()-.5,n.type="Polygon",n.angle=i,n.sides=6,n.setPos(),n.bulletSize=5,n.initCoordinate=f({x:0,y:0},n.sides,n.radius),n.cord=n.initCoordinate,n}return E(e,L),e}();function C(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function j(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var R=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;M(this,t),this.color="white",this.radius=50,this.pos=e},W=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;M(this,e);var i=C(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.pos=t,i.isFill=!0,i.side=0,i.lineWidth=0,i.type="Circle",i.dx=Math.random()-.5*d(1,2),i.dy=Math.random()-.5*d(1,3),i.color="#F6AF5F",i}return j(e,R),e}(),A=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerHeight/2-150;M(this,e);var n=C(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.pos=s,n.radius=i,n.color=t,n.dx=Math.random()-.5*d(1,3),n.dy=Math.random()-.5*d(1,3),n.type="Circle",n.side=0,n.lineWidth=1,n}return j(e,R),e}(),D=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;M(this,e);var i=C(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.pos=t,i.radius=70,i.color="#2878cc",i.dx=(Math.random()-.5)*d(1,5),i.dy=(Math.random()-.5)*d(1,5),i.type="Polygon",i.sides=3,i.angle=0,i.initCoordinate=f({x:0,y:0},i.sides,i.radius),i.cord=i.initCoordinate,i}return j(e,R),e}(),I=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;M(this,e);var i=C(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.pos=t,i.radius=60,i.color="#E8465D",i.dx=Math.random()-.5,i.dy=Math.random()-.5,i.type="Polygon",i.angle=0,i.sides=6,i.initCoordinate=f({x:0,y:0},i.sides,i.radius),i.cord=i.initCoordinate,i}return j(e,D),e}(),H=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var F=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.player=this.createPlayer(),this.levle=0,this.score=0,this.state=0,this.enemyList=[],this.landingShape=[],this.landingDripple=new A,this.dripperList=[],this.drippleIn={color:"rgba(255, 255, 255, 1)",radius:window.innerHeight/2-230},this.drippleOut={color:"rgba(255, 255, 255, .3)",radius:window.innerHeight/2-100},this.landingMaxRadius=500,this.createEnemey(d(1,3),d(1,3),d(1,4)),this.createDripple(),this.createLandingShape()}return H(t,[{key:"createLandingShape",value:function(){for(var t=window.innerWidth,e=window.innerHeight,i=[],n=0;n<3;n++){var r=d(0,t),o=d(0,e);i.push({x:r,y:o})}var a=new D(i[0]),s=new I(i[1]),l=new W(i[2]);this.landingShape=[a,s,l]}},{key:"init",value:function(t){this.state=t}},{key:"start",value:function(){this.state=1,this.attack(),this.approach()}},{key:"createDripple",value:function(){this.drippleList=[new A(this.drippleIn.color,this.drippleIn.radius),new A(this.drippleOut.color,this.drippleOut.radius)]}},{key:"startDripple",value:function(){var t=window.innerWidth/2;this.drippleOut.radius<t+50?this.drippleOut.radius+=2:this.drippleOut.radius=Math.abs(t-330),this.drippleIn.radius<t+50?this.drippleIn.radius+=3:this.drippleIn.radius=Math.abs(t-430),this.drippleList=[new A(this.drippleIn.color,this.drippleIn.radius),new A(this.drippleOut.color,this.drippleOut.radius)]}},{key:"createPlayer",value:function(){return new w}},{key:"createEnemey",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=void 0,r=0,o=360/(t+e+i),a=("p".repeat(t)+"t".repeat(e)+"c".repeat(i)).split("").map(function(t){return n=d(o-50,o+50),r+=n,"p"===t?new T(d(40,80),r):"t"===t?new L(d(40,60),r):new _(d(30,50),r)});this.enemyList=a}},{key:"attack",value:function(){this.enemyList.forEach(function(t){t.autoEmit()})}},{key:"approach",value:function(){this.enemyList.forEach(function(t){t.move()})}},{key:"moveBullet",value:function(){var t=this;this.player.moveBullet(),this.enemyList.forEach(function(e){e.moveBullet(-1),t.killEnemy()})}},{key:"killEnemy",value:function(){var t=this;if(this.enemyList.length){var e=this.enemyList.filter(function(t){return t.life>=0});this.enemyList=e,this.enemyList.forEach(function(e){e.collide(t.player)})}}},{key:"drawLanding",value:function(t){t.drawLanding(this.landingShape),t.drawLanding(this.drippleList)}},{key:"draw",value:function(t){t.drawPlayer(this.player),t.drawEnemies(this.enemyList),t.drawPlayingScene()}},{key:"detect",value:function(){this.enemyList.length||(this.state=-2),this.enemyList.filter(function(t){return t.positionRadius<=130}).length&&(this.state=-1)}},{key:"moveLandingShape",value:function(){for(var t=this.landingShape,e=window.innerWidth,i=window.innerHeight,n=0;n<t.length;n++){var r=t[n];(r.pos.x+100>e||r.pos.x<0)&&(r.dx=-r.dx),(r.pos.y+100>i||r.pos.y<0)&&(r.dy=-r.dy);var o=r.pos.x+r.dx,a=r.pos.y+r.dy;r.pos={x:o,y:a}}}},{key:"landingAnimation",value:function(){this.startDripple(),this.moveLandingShape()}}]),t}(),B=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var z=new F,G=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.state={game:z.state},i.start=i.start.bind(i),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n["Component"]),B(e,[{key:"start",value:function(){this.setState({playing:!0})}},{key:"render",value:function(){var t=r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"R"),r.a.createElement("h2",null,"Radio Defense"),r.a.createElement("a",{onClick:this.start},"Start Game")),r.a.createElement("div",{className:"notes"},"Press W or Space to shoot. Press Arrow Key to control direction"));return this.state.playing?r.a.createElement("div",null):t}}]),e}();a.a.render(r.a.createElement(G,null),document.getElementById("main"));var q=new m(document.getElementById("main"));z.init(0);var N=(new Date).getTime();document.addEventListener("keydown",function(t){"ArrowLeft"===t.code||"KeyH"===t.code?z.player.angle-=5:"ArrowRight"===t.code||"KeyL"===t.code?z.player.angle+=5:"Space"!==t.code&&"KeyW"!==t.code||z.player.emit()});var K=document.querySelector("a");K&&K.addEventListener("click",function(t){z.state=1,q.clear(),z.start()}),document.addEventListener("click",function(t){1===z.state&&z.player.emit()}),document.addEventListener("mousemove",function(t){var e=t.clientX,i=t.clientY;z.player.setAngle(e,i)},!1),function t(){(new Date).getTime()-N>=1&&(z.moveBullet(),0===z.state&&z.landingAnimation(),N=(new Date).getTime()),q.clear(),0===z.state?z.drawLanding(q):1===z.state?(z.draw(q),z.detect()):z.state<0&&q.drawEnding(z.state+2),requestAnimationFrame(t)}()},6:function(t,e,i){}},[[17,2,1]]]);
//# sourceMappingURL=main.06af.js.map