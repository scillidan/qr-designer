(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{773:function(t,e,n){"use strict";n.r(e);var o={},r=n(75),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("h3",{staticClass:"text-gray-400"},[t._v("Rotation")]),t._v(" "),n("div",{staticClass:"pb-1"},[n("div",{staticClass:"flex flex-row items-center"},[n("input",{attrs:{type:"radio",name:"rotation",id:"uniform",value:"uniform"},on:{change:function(e){return t.$store.commit("designMeta/setRotationStyle",e.target.value)}}}),t._v(" "),n("label",{staticClass:"ml-1",attrs:{for:"uniform"}},[t._v("Uniform")])]),t._v(" "),n("input",{staticClass:"w-full",attrs:{disabled:"uniform"!==t.$store.state.designMeta.qr.dots.rotation.style,id:"rotationAmount",type:"range",min:"0",max:"360"},domProps:{value:t.$store.state.designMeta.qr.dots.rotation.value},on:{input:function(e){t.$store.commit("designMeta/setRotationValue",parseInt(e.target.value))}}})]),t._v(" "),t._l(["random","radial","magnetic"],(function(e){return n("div",{key:e,staticClass:"pb-1 flex flex-row items-center"},[n("input",{attrs:{type:"radio",name:"rotation",id:e},domProps:{value:e},on:{change:function(n){return t.$store.commit("designMeta/setRotationStyle",e)}}}),t._v(" "),n("label",{staticClass:"ml-1",attrs:{for:e}},[t._v(t._s(e))])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);