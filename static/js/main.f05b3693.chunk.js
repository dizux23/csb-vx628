(this["webpackJsonpperformance-scaling"]=this["webpackJsonpperformance-scaling"]||[]).push([[0],{47:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(38),a=n.n(r),c=n(42),o=(n(47),n(9)),s=n(13),i=n(0),l=n(5),u=n(14),j=n(58),b=n(59),h=n(57),p=n(36),d=n(35),O=n(55),f=n(56),g=n(11);function m(){var e=Object(u.d)((function(e){return e.mouse})),t=Object(l.useRef)(e.clone()),n=new i.Vector2;return Object(u.b)((function(r){n.copy(t.current),t.current.lerp(e,.1),n.equals(t.current)||r.performance.regress()})),t}function x(e){var t=Object(l.useRef)(),n=Object(l.useState)((function(){return new i.CanvasTexture(new f.a,i.UVMapping,i.RepeatWrapping,i.RepeatWrapping)})),r=Object(s.a)(n,1)[0],a=Object(j.a)("/untitled-draco2.glb"),c=a.nodes,b=a.materials,h=m();return Object(u.b)((function(e){t.current.rotation.y=h.current.x*Math.PI/10,t.current.rotation.x=h.current.y*Math.PI/200})),Object(g.jsxs)("group",Object(o.a)(Object(o.a)({ref:t,dispose:null},e),{},{children:[Object(g.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Alpha_Surface.geometry,children:Object(g.jsx)("meshStandardMaterial",{metalness:.4,roughness:.2,color:b.Alpha_Body_MAT.color,normalMap:r,"normalMap-repeat":[35,35],normalScale:[.15,.15]})}),Object(g.jsx)("mesh",{castShadow:!0,geometry:c.Alpha_Joints.geometry,children:Object(g.jsx)("meshStandardMaterial",{metalness:1,roughness:.1,color:b.Alpha_Joints_MAT.color})})]}))}O.a.init(),i.Vector2.prototype.equals=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.001;return Math.abs(e.x-this.x)<t&&Math.abs(e.y-this.y)<t};var y=function(){var e=Object(l.useRef)(),t=m();return Object(u.b)((function(n){e.current.rotation.x=t.current.x*Math.PI/2,e.current.rotation.y=.25*Math.PI-t.current.y*Math.PI/2})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("directionalLight",{intensity:1,position:[2,2,0],color:"red",distance:5}),Object(g.jsx)("spotLight",{intensity:2,position:[-5,10,2],angle:.2,penumbra:1,castShadow:!0,"shadow-mapSize":[2048,2048]}),Object(g.jsxs)("group",{ref:e,children:[Object(g.jsx)("rectAreaLight",{intensity:2,position:[4.5,0,-3],width:10,height:10,onUpdate:function(e){return e.lookAt(0,0,0)}}),Object(g.jsx)("rectAreaLight",{intensity:2,position:[-10,2,-10],width:15,height:15,onUpdate:function(e){return e.lookAt(0,0,0)}})]})]})};function M(){var e=Object(l.useRef)();return Object(u.b)((function(t){e.current.blendMode.setBlendFunction(t.performance.current<1?d.a.SKIP:d.a.MULTIPLY)}),[]),Object(g.jsxs)(p.b,{multisampling:8,children:[Object(g.jsx)(p.c,{ref:e,intensity:15,radius:10,luminanceInfluence:0,bias:.035}),Object(g.jsx)(p.a,{kernelSize:d.b.LARGE,luminanceThreshold:.55,luminanceSmoothing:.2})]})}function S(){return Object(g.jsxs)(u.a,{shadows:!0,dpr:[1,2],performance:{min:.5},gl:{alpha:!1,antialias:!1},camera:{position:[0,0,.8],fov:75,near:.5,far:1},children:[Object(g.jsx)("color",{attach:"background",args:["lightblue"]}),Object(g.jsx)("fog",{attach:"fog",args:["#000",.8,1]}),Object(g.jsx)(y,{}),Object(g.jsxs)(l.Suspense,{fallback:null,children:[Object(g.jsx)(x,{position:[0,-1.3,0]}),Object(g.jsx)(b.a,{position:[0,0,-.2],fontSize:.6,color:"white",font:"/noto.woff","material-fog":!1,letterSpacing:-.1,children:"\u30e9\u30f3\u30d6\u30eb"})]}),Object(g.jsxs)("mesh",{scale:4,position:[0,1,-.2],children:[Object(g.jsx)("planeGeometry",{}),Object(g.jsx)("meshStandardMaterial",{color:"lightblue",toneMapped:!1,fog:!1,envMapIntensity:0})]}),Object(g.jsx)(h.a,{}),Object(g.jsx)(M,{})]})}a.a.render(Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S,{}),Object(g.jsx)(c.a,{date:"22. June",year:"2021"})]}),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.f05b3693.chunk.js.map