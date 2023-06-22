(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{479:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("637b58a0",content,!0,{sourceMap:!1})},541:function(t,e,n){"use strict";n(479)},542:function(t,e,n){var o=n(64)((function(i){return i[1]}));o.push([t.i,'.poppins{\n  font-family:Poppins\n}\n.bgstripe:before{\n  content:"";\n  background-color:#312e81;\n  position:absolute;\n  height:110%;\n  width:4000px;\n  left:-1000px;\n  z-index:-1;\n  background-image:linear-gradient(to bottom left, var(--tw-gradient-stops));\n  --tw-gradient-from:#8b5cf6;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 92, 246, 0));\n  --tw-gradient-stops:var(--tw-gradient-from), #6d28d9, var(--tw-gradient-to, rgba(109, 40, 217, 0));\n  --tw-gradient-to:#5b21b6\n}',""]),o.locals={},t.exports=o},583:function(t,e,n){"use strict";n.r(e);var o=n(2).default.extend({data:function(){return{examples:[{image:"1.png",description:"Artsy lines"},{image:"2.png",description:"Some logos fit more perfectly than others"},{image:"3.png",description:"Wedding invitations anyone?"},{image:"4.png",description:"Might use this one in some marketing materials"},{image:"5.png",description:"You can use emoji 😮"},{image:"6.png",description:"More text"},{image:"7.png",description:"Idk"},{image:"8.png",description:"This is technically scannable but we don't recommend designs like these."}]}}}),l=(n(541),n(75)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"\n      w-full\n      px-4\n      md:px-8\n      mt-24\n      flex flex-col\n      bgstripe\n      relative\n      overflow-hidden\n    "},[n("div",{staticClass:"m-auto flex flex-col",staticStyle:{"max-width":"1200px"}},[t._m(1),t._v(" "),n("div",{staticClass:"flex mt-4 flex-wrap justify-center"},t._l(t.examples,(function(e){return n("div",{key:e.image,staticClass:"mr-4 md:mr-8 mb-4 md:mb-8 md:w-64 w-32"},[n("img",{staticClass:"w-full h-auto",attrs:{loading:"lazy",src:"/qr-designer/example_designs/"+e.image}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center mt-1"},[n("p",{staticClass:"italic text-purple-300 text-light text-sm"},[t._v("\n              "+t._s(e.description)+"\n            ")])])])})),0)])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full px-4 md:px-8 mt-24 flex flex-col m-auto",staticStyle:{"max-width":"1200px"}},[n("div",{staticClass:"md:w-1/2"},[n("h2",{staticClass:"font-bold text-gray-300 text-5xl poppins",attrs:{id:"how"}},[t._v("\n        How the designer works\n      ")]),t._v(" "),n("div",{staticClass:"my-4 text-light"},[n("p",[t._v("\n          Most QR codes take advantage of error correction to put cute icons\n          in the middle. Swink QRs incorporate whatever imagery is put into\n          the QR area as part of the QR code itself, which means that they can\n          actually be more accurate and more scannable than other QR codes.\n          It's not infallible, but when done correctly can make for some\n          creative, scannable designs.\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ml-auto md:w-1/2 mt-8"},[n("h2",{staticClass:"font-bold text-purple-300 text-5xl poppins",attrs:{id:"examples"}},[t._v("\n          Gallery\n        ")]),t._v(" "),n("div",{staticClass:"my-4 text-light text-purple-200"},[n("p",[t._v("\n            The following examples are all very scannable - try for yourself!\n          ")]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"italic text-purple-200 text-sm"},[t._v("\n            We look forward to replacing our admittedly weak designs with\n            designs that more creative people come up with. If you think you\n            have such a design, please\n            "),n("a",{staticClass:"underline",attrs:{href:"mailto:contact@sw.ink"}},[t._v("email it to us!")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-auto",staticStyle:{"max-width":"1200px"}},[n("div",{staticClass:"w-full px-4 md:px-8 flex flex-col"},[n("div",{staticClass:"md:w-1/2 mt-8"},[n("h2",{staticClass:"font-bold text-gray-300 text-5xl poppins",attrs:{id:"goodDesign"}},[t._v("\n          What makes a good design\n        ")]),t._v(" "),n("div",{staticClass:"my-4 text-light"},[n("p",[t._v("\n            There's only one rule -\n            "),n("span",{staticClass:"font-bold italic"},[t._v("a good design is one that scans well")]),t._v("."),n("br"),n("br"),t._v("\n            You'll find it's easy to make something that doesn't scan. There's\n            nothing preventing you from placing a black square over the entire\n            QR code. But this would not be a good design.\n            "),n("br"),n("br"),t._v("Here are a few tips:\n          ")]),t._v(" "),n("ol",{staticClass:"list-decimal list-inside mt-1"},[n("li",[t._v("\n              Try to stick to one color for whatever elements you put inside\n              the QR code's drawing area.\n            ")]),t._v(" "),n("li",[t._v("Try to match up elements to the QR grid, if possible.")]),t._v(" "),n("li",[t._v("\n              Less is more - don't overdo it by putting a bunch of stuff in\n              the middle.\n            ")]),t._v(" "),n("li",[t._v("\n              Try to test with an Android phone; they are consistenly worse\n              than iOS for scanning. If it scans on an Android, we can assume\n              it'll scan on iOS.\n            ")]),t._v(" "),n("li",[t._v("\n              With all that being said, I'll reiterate the first rule - if it\n              scans, you're golden.\n            ")])])])]),t._v(" "),n("div",{staticClass:"ml-auto md:w-1/2 mt-8"},[n("h2",{staticClass:"font-bold text-gray-300 text-5xl poppins",attrs:{id:"faq"}},[t._v("\n          Frequently asked questions\n        ")]),t._v(" "),n("div",{staticClass:"my-4 text-light"},[n("p",[t._v("Can I have multiple QR codes in one design?")]),t._v(" "),n("p",{staticClass:"italic text-gray-400"},[t._v("No, at least not yet.")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n            Do I have to draw or put something in the middle of the QR code?\n            What if I don't want to?\n          ")]),t._v(" "),n("p",{staticClass:"italic text-gray-400"},[t._v("\n            No, you don't have to draw anything. They are scannable from the\n            start.\n          ")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("Will the QR code scan if I rotate it?")]),t._v(" "),n("p",{staticClass:"italic text-gray-400"},[t._v("\n            Yes. The orientation of the QR code does not affect whether it\n            will scan or not.\n          ")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("How do I change what the QR code links to?")]),t._v(" "),n("p",{staticClass:"italic text-gray-400"},[t._v("\n            Click on the "),n("span",{staticClass:"font-bold poppins"},[t._v("Link")]),t._v(" tab next\n            to the "),n("span",{staticClass:"font-bold poppins"},[t._v("Design")]),t._v(" tab, and type\n            or paste the link you want the QR code to go to. If you don't\n            already have an account, you'll be prompted to make one.\n          ")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("Can I save my design and come back to it later?")]),t._v(" "),n("p",{staticClass:"italic text-gray-400"},[t._v("Not yet. We're working on that.")])])])])])}],!1,null,null,null);e.default=component.exports}}]);