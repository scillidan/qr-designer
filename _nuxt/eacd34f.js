(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{470:function(r,t,n){"use strict";n.r(t);n(39),n(171),n(30),n(25),n(70);var e,o=((e=function(r){if("transparent"===r)r=[0,0,0,0];else if("string"==typeof r){var t=r;if(!(r=t.match(/rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/)))throw new Error("Invalid string: "+t);r.shift()}void 0===r[3]&&(r[3]=1),r=r.map((function(a){return+a})),this.rgba=r}).prototype={get rgb(){return this.rgba.slice(0,3)},get alpha(){return this.rgba[3]},set alpha(r){this.rgba[3]=r},get luminance(){for(var r=this.rgba.slice(),i=0;i<3;i++){var t=r[i];t=(t/=255)<.03928?t/12.92:Math.pow((t+.055)/1.055,2.4),r[i]=t}return.2126*r[0]+.7152*r[1]+.0722*r[2]},get inverse(){return new e([255-this.rgba[0],255-this.rgba[1],255-this.rgba[2],this.alpha])},toString:function(){return"rgb"+(this.alpha<1?"a":"")+"("+this.rgba.slice(0,this.alpha>=1?3:4).join(", ")+")"},clone:function(){return new e(this.rgba)},overlayOn:function(r){var t=this.clone(),n=this.alpha;if(n>=1)return t;for(var i=0;i<3;i++)t.rgba[i]=t.rgba[i]*n+r.rgba[i]*r.rgba[3]*(1-n);return t.rgba[3]=n+r.rgba[3]*(1-n),t},contrast:function(r){var t=this.alpha;if(t>=1){r.alpha<1&&(r=r.overlayOn(this));var n=this.luminance+.05,o=r.luminance+.05,h=n/o;return o>n&&(h=1/h),{ratio:h,error:0,min:h,max:h}}var c=this.overlayOn(e.BLACK),l=this.overlayOn(e.WHITE),f=c.contrast(r).ratio,m=l.contrast(r).ratio,v=Math.max(f,m),w=this.rgb.map((function(n,i){return Math.min(Math.max(0,(r.rgb[i]-n*t)/(1-t)),255)}));w=new e(w);var d=1;return c.luminance>r.luminance?d=f:l.luminance<r.luminance&&(d=m),{ratio:(d+v)/2,error:(v-d)/2,min:d,max:v,closest:w,farthest:l==v?e.WHITE:e.BLACK}}},e.BLACK=new e([0,0,0]),e.GRAY=new e([127.5,127.5,127.5]),e.WHITE=new e([255,255,255]),e);t.default=o}}]);