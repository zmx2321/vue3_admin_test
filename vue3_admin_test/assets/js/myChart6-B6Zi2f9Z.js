import{c as jn,m as Hs,d as Zn,a as Vs,_ as ks,e as Ws}from"./index.vuevuetypescriptsetuptruenameEChartslang-HI7Vcth2.js";import{ay as ca,au as yt,bD as Xs,bE as js,bF as Do,W as Po,j as Zs,bG as Pn,ap as xt,as as qs,b2 as Ys,b3 as Ks,b4 as $s,P as Qs,aB as Mr,az as se,ao as zt,bH as Js,aV as No,M as Xi,Z as Pi,b as Ni,aC as oi,s as Ro,bI as Oo,at as Io,aF as ji,k as Zi,am as e1,bJ as t1,an as r1,bd as Xe,aT as Nn,d as si,aG as Tt,bK as qn,J as i1,aX as da,bL as n1,aA as a1,y as o1,ag as s1,ae as pr,ac as va,aw as l1,ah as h1,af as u1,aQ as Bo,aD as ft,aE as ct,bM as f1,f as c1,F as di,bN as d1,bO as v1,bP as Fo,v as pa,aq as ma,bQ as ga}from"./installCanvasRenderer-BM3_8jvr.js";import{G as p1,l as m1}from"./Graph--cR6tmfJ.js";import{d as g1,c as _1,o as y1,b as x1,aq as vi}from"./index-D1QEh7pE.js";import{_ as T1}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./index-C5N5ERxh.js";function _a(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?ya(this,e.call(this,l)):w1(this,e,n),this.constructor===o)for(var h=o.__initializers__,u=0;u<h.length;u++)h[u].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,ya(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function ya(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function w1(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}const S1={extend:_a,derive:_a};function b1(e,t){this.action=e,this.context=t}var Yn={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new b1(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}},E1=0,A1=Array.prototype,L1=A1.forEach,we={genGUID:function(){return++E1},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===L1)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(we.isObject(e)){if(we.isArray(e))return e.slice();if(we.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return we.extend({},e)}else return e}},He=function(){this.__uid__=we.genGUID()};He.__initializers__=[function(e){we.extend(this,e)}];we.extend(He,S1);we.extend(He.prototype,Yn);var xa=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Ta=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function M1(e){for(var t={},r={},i=0;i<xa.length;i++){var n=xa[i];o(n)}for(var i=0;i<Ta.length;i++){var a=Ta[i];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}const D={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CW:2304,CCW:2305,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FRAMEBUFFER:36160,RENDERBUFFER:36161,DEPTH_STENCIL:34041,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306};function C1(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const D1={get:C1};var nn,ie={};ie.supportWebGL=function(){if(nn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{nn=!1}return nn};ie.Int8Array=typeof Int8Array>"u"?Array:Int8Array;ie.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;ie.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;ie.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;ie.Int16Array=typeof Int16Array>"u"?Array:Int16Array;ie.Float32Array=typeof Float32Array>"u"?Array:Float32Array;ie.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var $t={};typeof window<"u"?$t=window:typeof global<"u"&&($t=global);ie.requestAnimationFrame=$t.requestAnimationFrame||$t.msRequestAnimationFrame||$t.mozRequestAnimationFrame||$t.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};ie.createCanvas=function(){return document.createElement("canvas")};ie.createImage=function(){return new $t.Image};ie.request={get:D1.get};ie.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};ie.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var Fe=function(){this.head=null,this.tail=null,this._length=0};Fe.prototype.insert=function(e){var t=new Fe.Entry(e);return this.insertEntry(t),t};Fe.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new Fe.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};Fe.prototype.insertBeforeEntry=function(e,t){var r=new Fe.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};Fe.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Fe.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Fe.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Fe.prototype.getHead=function(){if(this.head)return this.head.value};Fe.prototype.getTail=function(){if(this.tail)return this.tail.value};Fe.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Fe.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Fe.prototype.length=function(){return this._length};Fe.prototype.isEmpty=function(){return this._length===0};Fe.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t<"u";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};Fe.prototype.clear=function(){this.tail=this.head=null,this._length=0};Fe.Entry=function(e){this.value=e,this.next=null,this.prev=null};var ar=function(e){this._list=new Fe,this._map={},this._maxSize=e||10};ar.prototype.setMaxSize=function(e){this._maxSize=e};ar.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};ar.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};ar.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};ar.prototype.clear=function(){this._list.clear(),this._map={}};var me={},wa={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function ht(e){return e=Math.round(e),e<0?0:e>255?255:e}function P1(e){return e=Math.round(e),e<0?0:e>360?360:e}function Kr(e){return e<0?0:e>1?1:e}function an(e){return e.length&&e.charAt(e.length-1)==="%"?ht(parseFloat(e)/100*255):ht(parseInt(e,10))}function yr(e){return e.length&&e.charAt(e.length-1)==="%"?Kr(parseFloat(e)/100):Kr(parseFloat(e))}function on(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function It(e,t,r){return e+(t-e)*r}function lt(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function Rn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var zo=new ar(20),pi=null;function or(e,t){pi&&Rn(pi,t),pi=zo.put(e,pi||t.slice())}me.parse=function(e,t){if(e){t=t||[];var r=zo.get(e);if(r)return Rn(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in wa)return Rn(t,wa[i]),or(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){lt(t,0,0,0,1);return}return lt(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),or(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){lt(t,0,0,0,1);return}return lt(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),or(e,t),t}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),h=1;switch(s){case"rgba":if(l.length!==4){lt(t,0,0,0,1);return}h=yr(l.pop());case"rgb":if(l.length!==3){lt(t,0,0,0,1);return}return lt(t,an(l[0]),an(l[1]),an(l[2]),h),or(e,t),t;case"hsla":if(l.length!==4){lt(t,0,0,0,1);return}return l[3]=yr(l[3]),On(l,t),or(e,t),t;case"hsl":if(l.length!==3){lt(t,0,0,0,1);return}return On(l,t),or(e,t),t;default:return}}lt(t,0,0,0,1)}};me.parseToFloat=function(e,t){if(t=me.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function On(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=yr(e[1]),n=yr(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],lt(t,ht(on(o,a,r+1/3)*255),ht(on(o,a,r)*255),ht(on(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function N1(e){if(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),o=a-n,s=(a+n)/2,l,h;if(o===0)l=0,h=0;else{s<.5?h=o/(a+n):h=o/(2-a-n);var u=((a-t)/6+o/2)/o,f=((a-r)/6+o/2)/o,d=((a-i)/6+o/2)/o;t===a?l=d-f:r===a?l=1/3+u-d:i===a&&(l=2/3+f-u),l<0&&(l+=1),l>1&&(l-=1)}var c=[l*360,h,s];return e[3]!=null&&c.push(e[3]),c}}me.lift=function(e,t){var r=me.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return me.stringify(r,r.length===4?"rgba":"rgb")}};me.toHex=function(e){var t=me.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};me.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=t[n],s=t[a],l=i-n;return r[0]=ht(It(o[0],s[0],l)),r[1]=ht(It(o[1],s[1],l)),r[2]=ht(It(o[2],s[2],l)),r[3]=Kr(It(o[3],s[3],l)),r}};me.fastMapToColor=me.fastLerp;me.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=me.parse(t[n]),s=me.parse(t[a]),l=i-n,h=me.stringify([ht(It(o[0],s[0],l)),ht(It(o[1],s[1],l)),ht(It(o[2],s[2],l)),Kr(It(o[3],s[3],l))],"rgba");return r?{color:h,leftIndex:n,rightIndex:a,value:i}:h}};me.mapToColor=me.lerp;me.modifyHSL=function(e,t,r,i){if(e=me.parse(e),e)return e=N1(e),t!=null&&(e[0]=P1(t)),r!=null&&(e[1]=yr(r)),i!=null&&(e[2]=yr(i)),me.stringify(On(e),"rgba")};me.modifyAlpha=function(e,t){if(e=me.parse(e),e&&t!=null)return e[3]=Kr(t),me.stringify(e,"rgba")};me.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var R1=me.parseToFloat,sn={};function Sa(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function O1(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=Sa(e)+`
`+Sa(t)+`
`+i.join(`
`);if(sn[o])return sn[o];var s=we.genGUID();return sn[o]=s,s}var nt=He.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=R1(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(h){var u=this.uniforms[h].type;return u==="t"||u==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=we.clone(e.vertexDefines),this.fragmentDefines=we.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);we.defaults(this.vertexDefines,n),we.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=we.clone(this.vertexDefines),e.fragmentDefines=we.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=O1(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Ci=1e-6,Ve=Array,mr=Math.random,I={};I.create=function(){var e=new Ve(2);return e[0]=0,e[1]=0,e};I.clone=function(e){var t=new Ve(2);return t[0]=e[0],t[1]=e[1],t};I.fromValues=function(e,t){var r=new Ve(2);return r[0]=e,r[1]=t,r};I.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};I.set=function(e,t,r){return e[0]=t,e[1]=r,e};I.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};I.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};I.sub=I.subtract;I.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};I.mul=I.multiply;I.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};I.div=I.divide;I.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};I.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};I.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};I.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};I.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};I.dist=I.distance;I.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};I.sqrDist=I.squaredDistance;I.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};I.len=I.length;I.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};I.sqrLen=I.squaredLength;I.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};I.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};I.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};I.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};I.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};I.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};I.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};I.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};I.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};I.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};I.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};I.forEach=function(){var e=I.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();var q=function(e,t){e=e||0,t=t||0,this.array=I.fromValues(e,t),this._dirty=!0};q.prototype={constructor:q,add:function(e){return I.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new q(this.x,this.y)},copy:function(e){return I.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return I.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return I.dist(this.array,e.array)},distance:function(e){return I.distance(this.array,e.array)},div:function(e){return I.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return I.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return I.dot(this.array,e.array)},len:function(){return I.len(this.array)},length:function(){return I.length(this.array)},lerp:function(e,t,r){return I.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return I.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return I.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return I.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return I.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return I.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return I.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return I.random(this.array,e),this._dirty=!0,this},scale:function(e){return I.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return I.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return I.sqrDist(this.array,e.array)},squaredDistance:function(e){return I.squaredDistance(this.array,e.array)},sqrLen:function(){return I.sqrLen(this.array)},squaredLength:function(){return I.squaredLength(this.array)},sub:function(e){return I.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return I.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return I.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return I.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return I.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return I.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var ba=q.prototype;Object.defineProperty(ba,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(ba,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}q.add=function(e,t,r){return I.add(e.array,t.array,r.array),e._dirty=!0,e};q.set=function(e,t,r){return I.set(e.array,t,r),e._dirty=!0,e};q.copy=function(e,t){return I.copy(e.array,t.array),e._dirty=!0,e};q.cross=function(e,t,r){return I.cross(e.array,t.array,r.array),e._dirty=!0,e};q.dist=function(e,t){return I.distance(e.array,t.array)};q.distance=q.dist;q.div=function(e,t,r){return I.divide(e.array,t.array,r.array),e._dirty=!0,e};q.divide=q.div;q.dot=function(e,t){return I.dot(e.array,t.array)};q.len=function(e){return I.length(e.array)};q.lerp=function(e,t,r,i){return I.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};q.min=function(e,t,r){return I.min(e.array,t.array,r.array),e._dirty=!0,e};q.max=function(e,t,r){return I.max(e.array,t.array,r.array),e._dirty=!0,e};q.mul=function(e,t,r){return I.multiply(e.array,t.array,r.array),e._dirty=!0,e};q.multiply=q.mul;q.negate=function(e,t){return I.negate(e.array,t.array),e._dirty=!0,e};q.normalize=function(e,t){return I.normalize(e.array,t.array),e._dirty=!0,e};q.random=function(e,t){return I.random(e.array,t),e._dirty=!0,e};q.scale=function(e,t,r){return I.scale(e.array,t.array,r),e._dirty=!0,e};q.scaleAndAdd=function(e,t,r,i){return I.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};q.sqrDist=function(e,t){return I.sqrDist(e.array,t.array)};q.squaredDistance=q.sqrDist;q.sqrLen=function(e){return I.sqrLen(e.array)};q.squaredLength=q.sqrLen;q.sub=function(e,t,r){return I.subtract(e.array,t.array,r.array),e._dirty=!0,e};q.subtract=q.sub;q.transformMat2=function(e,t,r){return I.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};q.transformMat2d=function(e,t,r){return I.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};q.transformMat3=function(e,t,r){return I.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};q.transformMat4=function(e,t,r){return I.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var Ea=1,Aa=2,ln=3,La={};function I1(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function Ma(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),I1(r)].join(`
`)}var Ca=new ie.Float32Array(16),B1=He.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)Ca[o]=i[o];i=Ca}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new ie.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var h=i[o],u=0;u<16;u++)s[l++]=h[u];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=La[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=La[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var h=t[l];if(!this.attributes[h]){s[l]=-1;continue}var u=a[h];if(u==null){if(u=i.getAttribLocation(n,h),u===-1){s[l]=-1;continue}a[h]=u}s[l]=u,o[u]?o[u]=Aa:o[u]=Ea}for(var l=0;l<o.length;l++)switch(o[l]){case Ea:i.enableVertexAttribArray(l),o[l]=ln;break;case Aa:o[l]=ln;break;case ln:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=Ma(e,n,r);if(s||(s=Ma(e,o,i),s))return s;if(e.attachShader(a,n),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var h=0;h<t.uniforms.length;h++){var u=t.uniforms[h];this._locations[u]=e.getUniformLocation(a,u)}}}),F1=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Da(e,t,r){function i(o,s,l,h){var u="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var f=parseInt(s);f<parseInt(l);f++)u+="{"+h.replace(/float\s*\(\s*_idx_\s*\)/g,f.toFixed(1)).replace(/_idx_/g,f)+"}";return u}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(F1,i)}function hn(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function z1(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function G1(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Go(e){this._renderer=e,this._cache={}}Go.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),n&&(o+=",sk"+e.joints.length),a&&(o+=",is");var _=i[o];if(_)return _;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,h=l.gl,u=t.getEnabledTextures(),f="";if(n){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),f+=`
`+hn(d)+`
`}a&&(f+=`
#define INSTANCING
`);var c=f+hn(t.vertexDefines,s,u),v=f+hn(t.fragmentDefines,s,u),p=c+`
`+t.shader.vertex,m=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(b){return l.getGLExtension(b)!=null});m.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),m.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var g=z1(m)+`
`+G1(t.precision)+`
`+v+`
`+t.shader.fragment,T=Da(p,t.vertexDefines,s),x=Da(g,t.fragmentDefines,s),_=new B1;_.uniformSemantics=t.shader.uniformSemantics,_.attributes=t.shader.attributes;var S=_.buildProgram(h,t.shader,T,x);return _.__error=S,i[o]=_,_};var Pa=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,U1=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Na=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,H1={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function wt(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Ra={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return wt(2)},vec3:function(){return wt(3)},vec4:function(){return wt(4)},ivec2:function(){return wt(2)},ivec3:function(){return wt(3)},ivec4:function(){return wt(4)},mat2:function(){return wt(4)},mat3:function(){return wt(9)},mat4:function(){return wt(16)},array:function(){return[]}},In=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],Uo=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Ho=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],V1={vec4:4,vec3:3,vec2:2,float:1},un={},Vo={};function k1(e,t){var r="vertex:"+e+"fragment:"+t;if(un[r])return un[r];var i=we.genGUID();return un[r]=i,Vo[i]={vertex:e,fragment:t},i}function Oa(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function sr(){console.error("Wrong uniform/attributes syntax")}function Ia(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,h=3,u=4,f=5,d=o,c={},v=null,p;m(i[0]);function m(x){x||sr();var _=x.match(/\[(.*?)\]/);p=x.replace(/\[(.*?)\]/,""),c[p]={},_&&(c[p].isArray=!0,c[p].arraySize=_[1])}for(var a=1;a<i.length;a++){var g=i[a];if(g){if(g==="="){if(d!==o&&d!==h){sr();break}d=s;continue}else if(g===":"){d=u;continue}else if(g===","){if(d===l){if(!(v instanceof Array)){sr();break}v.push(+i[++a])}else d=f;continue}else if(g===")"){c[p].value=new ie.Float32Array(v),v=null,d=f;continue}else if(g==="("){if(d!==l){sr();break}if(!(v instanceof Array)){sr();break}v.push(+i[++a]);continue}else if(g.indexOf("vec")>=0){if(d!==s&&d!==u){sr();break}d=l,v=[];continue}else if(d===s){e==="bool"?c[p].value=g==="true":c[p].value=parseFloat(g),v=null;continue}else if(d===u){var T=g;In.indexOf(T)>=0||Uo.indexOf(T)>=0||Ho.indexOf(T)>=0?c[p].semantic=T:T==="ignore"||T==="unconfigurable"?c[p].ignore=!0:e==="bool"?c[p].value=T==="true":c[p].value=parseFloat(T);continue}m(g),d=o}}return c}function z(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Oa(e),t=Oa(t),this._shaderID=k1(e,t),this._vertexCode=z.parseImport(e),this._fragmentCode=z.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}z.prototype={constructor:z,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=z.parseImport(this.vertex),this._fragmentCode=z.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(In.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(Ho.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else Uo.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?Ra.array:i||Ra[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Pa,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(Pa,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,o,s){var l=Ia(o,s),h=[];for(var u in l){var f=l[u],d=f.semantic,c=u,v=H1[o],p=i(l[u].value);l[u].isArray&&(c+="["+l[u].arraySize+"]",v+="v"),h.push(c),t._uniformList.push(u),f.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[u]={shaderType:r,type:o}),d?t._addSemanticUniform(u,v,d):t._addMaterialUniform(u,o,v,p,l[u].isArray,e))}return h.length>0?"uniform "+o+" "+h.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(U1,r);function r(i,n,a){var o=Ia(n,a),s=V1[n]||1,l=[];for(var h in o){var u=o[h].semantic;if(e[h]={type:"float",size:s,semantic:u||null},u){if(In.indexOf(u)<0)throw new Error('Unkown semantic "'+u+'"');t.attributeSemantics[u]={symbol:h,type:n}}l.push(h)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(Na,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(Na,r);function r(i,n,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[n]||(a==="false"?o[n]=!1:a==="true"?o[n]=!0:o[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=Vo[this._shaderID],t=new z(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(z.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(z.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(z.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(z.prototype,"uniforms",{get:function(){return this._uniformList}}));var W1=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;z.parseImport=function(e){return e=e.replace(W1,function(n,r,i){var n=z.source(i);return n?z.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var X1=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;z.import=function(e){e.replace(X1,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=i.split("."),s=z.codes,l=0,h;l<o.length-1;)h=o[l++],s[h]||(s[h]={}),s=s[h];h=o[l],s[h]=a}return a})};z.codes={};z.source=function(e){for(var t=e.split("."),r=z.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const ko=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var N={};N.create=function(){var e=new Ve(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};N.clone=function(e){var t=new Ve(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};N.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};N.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};N.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};N.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],c=t[11],v=t[12],p=t[13],m=t[14],g=t[15],T=r*s-i*o,x=r*l-n*o,_=r*h-a*o,S=i*l-n*s,b=i*h-a*s,A=n*h-a*l,E=u*p-f*v,M=u*m-d*v,O=u*g-c*v,C=f*m-d*p,B=f*g-c*p,G=d*g-c*m,R=T*G-x*B+_*C+S*O-b*M+A*E;return R?(R=1/R,e[0]=(s*G-l*B+h*C)*R,e[1]=(n*B-i*G-a*C)*R,e[2]=(p*A-m*b+g*S)*R,e[3]=(d*b-f*A-c*S)*R,e[4]=(l*O-o*G-h*M)*R,e[5]=(r*G-n*O+a*M)*R,e[6]=(m*_-v*A-g*x)*R,e[7]=(u*A-d*_+c*x)*R,e[8]=(o*B-s*O+h*E)*R,e[9]=(i*O-r*B-a*E)*R,e[10]=(v*b-p*_+g*T)*R,e[11]=(f*_-u*b-c*T)*R,e[12]=(s*M-o*C-l*E)*R,e[13]=(r*C-i*M+n*E)*R,e[14]=(p*x-v*S-m*T)*R,e[15]=(u*S-f*x+d*T)*R,e):null};N.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],c=t[11],v=t[12],p=t[13],m=t[14],g=t[15];return e[0]=s*(d*g-c*m)-f*(l*g-h*m)+p*(l*c-h*d),e[1]=-(i*(d*g-c*m)-f*(n*g-a*m)+p*(n*c-a*d)),e[2]=i*(l*g-h*m)-s*(n*g-a*m)+p*(n*h-a*l),e[3]=-(i*(l*c-h*d)-s*(n*c-a*d)+f*(n*h-a*l)),e[4]=-(o*(d*g-c*m)-u*(l*g-h*m)+v*(l*c-h*d)),e[5]=r*(d*g-c*m)-u*(n*g-a*m)+v*(n*c-a*d),e[6]=-(r*(l*g-h*m)-o*(n*g-a*m)+v*(n*h-a*l)),e[7]=r*(l*c-h*d)-o*(n*c-a*d)+u*(n*h-a*l),e[8]=o*(f*g-c*p)-u*(s*g-h*p)+v*(s*c-h*f),e[9]=-(r*(f*g-c*p)-u*(i*g-a*p)+v*(i*c-a*f)),e[10]=r*(s*g-h*p)-o*(i*g-a*p)+v*(i*h-a*s),e[11]=-(r*(s*c-h*f)-o*(i*c-a*f)+u*(i*h-a*s)),e[12]=-(o*(f*m-d*p)-u*(s*m-l*p)+v*(s*d-l*f)),e[13]=r*(f*m-d*p)-u*(i*m-n*p)+v*(i*d-n*f),e[14]=-(r*(s*m-l*p)-o*(i*m-n*p)+v*(i*l-n*s)),e[15]=r*(s*d-l*f)-o*(i*d-n*f)+u*(i*l-n*s),e};N.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],c=e[12],v=e[13],p=e[14],m=e[15],g=t*o-r*a,T=t*s-i*a,x=t*l-n*a,_=r*s-i*o,S=r*l-n*o,b=i*l-n*s,A=h*v-u*c,E=h*p-f*c,M=h*m-d*c,O=u*p-f*v,C=u*m-d*v,B=f*m-d*p;return g*B-T*C+x*O+_*M-S*E+b*A};N.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=t[9],c=t[10],v=t[11],p=t[12],m=t[13],g=t[14],T=t[15],x=r[0],_=r[1],S=r[2],b=r[3];return e[0]=x*i+_*s+S*f+b*p,e[1]=x*n+_*l+S*d+b*m,e[2]=x*a+_*h+S*c+b*g,e[3]=x*o+_*u+S*v+b*T,x=r[4],_=r[5],S=r[6],b=r[7],e[4]=x*i+_*s+S*f+b*p,e[5]=x*n+_*l+S*d+b*m,e[6]=x*a+_*h+S*c+b*g,e[7]=x*o+_*u+S*v+b*T,x=r[8],_=r[9],S=r[10],b=r[11],e[8]=x*i+_*s+S*f+b*p,e[9]=x*n+_*l+S*d+b*m,e[10]=x*a+_*h+S*c+b*g,e[11]=x*o+_*u+S*v+b*T,x=r[12],_=r[13],S=r[14],b=r[15],e[12]=x*i+_*s+S*f+b*p,e[13]=x*n+_*l+S*d+b*m,e[14]=x*a+_*h+S*c+b*g,e[15]=x*o+_*u+S*v+b*T,e};N.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[4],s=t[5],l=t[6],h=t[8],u=t[9],f=t[10],d=t[12],c=t[13],v=t[14],p=r[0],m=r[1],g=r[2];return e[0]=p*i+m*o+g*h,e[1]=p*n+m*s+g*u,e[2]=p*a+m*l+g*f,p=r[4],m=r[5],g=r[6],e[4]=p*i+m*o+g*h,e[5]=p*n+m*s+g*u,e[6]=p*a+m*l+g*f,p=r[8],m=r[9],g=r[10],e[8]=p*i+m*o+g*h,e[9]=p*n+m*s+g*u,e[10]=p*a+m*l+g*f,p=r[12],m=r[13],g=r[14],e[12]=p*i+m*o+g*h+d,e[13]=p*n+m*s+g*u+c,e[14]=p*a+m*l+g*f+v,e};N.mul=N.multiply;N.mulAffine=N.multiplyAffine;N.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],o,s,l,h,u,f,d,c,v,p,m,g;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],h=t[3],u=t[4],f=t[5],d=t[6],c=t[7],v=t[8],p=t[9],m=t[10],g=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=h,e[4]=u,e[5]=f,e[6]=d,e[7]=c,e[8]=v,e[9]=p,e[10]=m,e[11]=g,e[12]=o*i+u*n+v*a+t[12],e[13]=s*i+f*n+p*a+t[13],e[14]=l*i+d*n+m*a+t[14],e[15]=h*i+c*n+g*a+t[15]),e};N.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};N.rotate=function(e,t,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,h,u,f,d,c,v,p,m,g,T,x,_,S,b,A,E,M,O,C,B,G,R,H;return Math.abs(s)<Ci?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),h=Math.cos(r),u=1-h,f=t[0],d=t[1],c=t[2],v=t[3],p=t[4],m=t[5],g=t[6],T=t[7],x=t[8],_=t[9],S=t[10],b=t[11],A=n*n*u+h,E=a*n*u+o*l,M=o*n*u-a*l,O=n*a*u-o*l,C=a*a*u+h,B=o*a*u+n*l,G=n*o*u+a*l,R=a*o*u-n*l,H=o*o*u+h,e[0]=f*A+p*E+x*M,e[1]=d*A+m*E+_*M,e[2]=c*A+g*E+S*M,e[3]=v*A+T*E+b*M,e[4]=f*O+p*C+x*B,e[5]=d*O+m*C+_*B,e[6]=c*O+g*C+S*B,e[7]=v*O+T*C+b*B,e[8]=f*G+p*R+x*H,e[9]=d*G+m*R+_*H,e[10]=c*G+g*R+S*H,e[11]=v*G+T*R+b*H,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};N.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+h*i,e[5]=o*n+u*i,e[6]=s*n+f*i,e[7]=l*n+d*i,e[8]=h*n-a*i,e[9]=u*n-o*i,e[10]=f*n-s*i,e[11]=d*n-l*i,e};N.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],h=t[8],u=t[9],f=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-h*i,e[1]=o*n-u*i,e[2]=s*n-f*i,e[3]=l*n-d*i,e[8]=a*i+h*n,e[9]=o*i+u*n,e[10]=s*i+f*n,e[11]=l*i+d*n,e};N.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+h*i,e[1]=o*n+u*i,e[2]=s*n+f*i,e[3]=l*n+d*i,e[4]=h*n-a*i,e[5]=u*n-o*i,e[6]=f*n-s*i,e[7]=d*n-l*i,e};N.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=i+i,l=n+n,h=a+a,u=i*s,f=i*l,d=i*h,c=n*l,v=n*h,p=a*h,m=o*s,g=o*l,T=o*h;return e[0]=1-(c+p),e[1]=f+T,e[2]=d-g,e[3]=0,e[4]=f-T,e[5]=1-(u+p),e[6]=v+m,e[7]=0,e[8]=d+g,e[9]=v-m,e[10]=1-(u+c),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};N.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,h=r*o,u=i*o,f=i*s,d=n*o,c=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return e[0]=1-f-v,e[1]=u+g,e[2]=d-m,e[3]=0,e[4]=u-g,e[5]=1-h-v,e[6]=c+p,e[7]=0,e[8]=d+m,e[9]=c-p,e[10]=1-h-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};N.frustum=function(e,t,r,i,n,a,o){var s=1/(r-t),l=1/(n-i),h=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(n+i)*l,e[10]=(o+a)*h,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*h,e[15]=0,e};N.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),o=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*o,e[15]=0,e};N.ortho=function(e,t,r,i,n,a,o){var s=1/(t-r),l=1/(i-n),h=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*h,e[11]=0,e[12]=(t+r)*s,e[13]=(n+i)*l,e[14]=(o+a)*h,e[15]=1,e};N.lookAt=function(e,t,r,i){var n,a,o,s,l,h,u,f,d,c,v=t[0],p=t[1],m=t[2],g=i[0],T=i[1],x=i[2],_=r[0],S=r[1],b=r[2];return Math.abs(v-_)<Ci&&Math.abs(p-S)<Ci&&Math.abs(m-b)<Ci?N.identity(e):(u=v-_,f=p-S,d=m-b,c=1/Math.sqrt(u*u+f*f+d*d),u*=c,f*=c,d*=c,n=T*d-x*f,a=x*u-g*d,o=g*f-T*u,c=Math.sqrt(n*n+a*a+o*o),c?(c=1/c,n*=c,a*=c,o*=c):(n=0,a=0,o=0),s=f*o-d*a,l=d*n-u*o,h=u*a-f*n,c=Math.sqrt(s*s+l*l+h*h),c?(c=1/c,s*=c,l*=c,h*=c):(s=0,l=0,h=0),e[0]=n,e[1]=s,e[2]=u,e[3]=0,e[4]=a,e[5]=l,e[6]=f,e[7]=0,e[8]=o,e[9]=h,e[10]=d,e[11]=0,e[12]=-(n*v+a*p+o*m),e[13]=-(s*v+l*p+h*m),e[14]=-(u*v+f*p+d*m),e[15]=1,e)};N.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var w={};w.create=function(){var e=new Ve(3);return e[0]=0,e[1]=0,e[2]=0,e};w.clone=function(e){var t=new Ve(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};w.fromValues=function(e,t,r){var i=new Ve(3);return i[0]=e,i[1]=t,i[2]=r,i};w.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};w.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};w.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};w.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};w.sub=w.subtract;w.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};w.mul=w.multiply;w.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};w.div=w.divide;w.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};w.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};w.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};w.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};w.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};w.dist=w.distance;w.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};w.sqrDist=w.squaredDistance;w.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};w.len=w.length;w.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};w.sqrLen=w.squaredLength;w.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};w.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};w.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};w.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};w.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=n*l-a*s,e[1]=a*o-i*l,e[2]=i*s-n*o,e};w.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e};w.random=function(e,t){t=t||1;var r=mr()*2*Math.PI,i=mr()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};w.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,e};w.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};w.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],h=r[3],u=h*i+s*a-l*n,f=h*n+l*i-o*a,d=h*a+o*n-s*i,c=-o*i-s*n-l*a;return e[0]=u*h+c*-o+f*-l-d*-s,e[1]=f*h+c*-s+d*-o-u*-l,e[2]=d*h+c*-l+u*-s-f*-o,e};w.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};w.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};w.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};w.forEach=function(){var e=w.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();w.angle=function(e,t){var r=w.fromValues(e[0],e[1],e[2]),i=w.fromValues(t[0],t[1],t[2]);w.normalize(r,r),w.normalize(i,i);var n=w.dot(r,i);return n>1?0:Math.acos(n)};z.import(ko);var pe=N.create,Ba={};function Fa(e){return e.material}function j1(e,t,r){return t.uniforms[r].value}function Z1(e,t,r,i){return r!==i}function q1(e){return!0}function za(){}var Ga={float:D.FLOAT,byte:D.BYTE,ubyte:D.UNSIGNED_BYTE,short:D.SHORT,ushort:D.UNSIGNED_SHORT};function Y1(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function K1(e){var t,r;this.bind=function(i){t||(t=ie.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var at=He.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=ie.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new M1(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Go(this),this._placeholderTexture=new K1},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var h=e.updateRenderList(t,!0);this._sceneRendering=e;var u=h.opaque,f=h.transparent,d=e.material;e.trigger("beforerender",this,e,t,h),i?(this.renderPreZ(u,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var c=pe(),v=w.create(),p=0;p<f.length;p++){var m=f[p];N.multiplyAffine(c,t.viewMatrix.array,m.worldTransform.array),w.transformMat4(v,m.position.array,c),m.__depth=v[2]}this.renderPass(u,t,{getMaterial:function(g){return d||g.material},sortCompare:this.opaqueSortCompare}),this.renderPass(f,t,{getMaterial:function(g){return d||g.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,h),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(Ba[e.__uid__])return;if(Ba[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||Fa;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],o=i.call(this,a);if(n>0){var s=e[n-1],l=s.joints?s.joints.length:0,h=a.joints?a.joints.length:0;if(h===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var u=this._programMgr.getProgram(a,o,t);this.validateProgram(u),a.__program=u}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Fa,r.getUniform=r.getUniform||j1,r.isMaterialChanged=r.isMaterialChanged||Z1,r.beforeRender=r.beforeRender||za,r.afterRender=r.afterRender||za;var i=r.ifRender||q1;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,o=[n.x*a,n.y*a,n.width*a,n.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],h=[o[2],o[3]],u=Date.now();t?(N.copy(ve.VIEW,t.viewMatrix.array),N.copy(ve.PROJECTION,t.projectionMatrix.array),N.copy(ve.VIEWINVERSE,t.worldTransform.array)):(N.identity(ve.VIEW),N.identity(ve.PROJECTION),N.identity(ve.VIEWINVERSE)),N.multiply(ve.VIEWPROJECTION,ve.PROJECTION,ve.VIEW),N.invert(ve.PROJECTIONINVERSE,ve.PROJECTION),N.invert(ve.VIEWPROJECTIONINVERSE,ve.VIEWPROJECTION);for(var f=this.gl,d=this._sceneRendering,c,v,p,m,g,T,x,_,S,b,A,E,M=null,O=0;O<e.length;O++){var C=e[O],B=C.worldTransform!=null,G;if(i(C)){B&&(G=C.isSkinnedMesh&&C.isSkinnedMesh()?C.offsetMatrix?C.offsetMatrix.array:ve.IDENTITY:C.worldTransform.array);var R=C.geometry,H=r.getMaterial.call(this,C),W=C.__program,j=H.shader,k=R.__uid__+"-"+W.__uid__,ne=k!==b;b=k,B&&(N.copy(ve.WORLD,G),N.multiply(ve.WORLDVIEWPROJECTION,ve.VIEWPROJECTION,G),N.multiplyAffine(ve.WORLDVIEW,ve.VIEW,G),(j.matrixSemantics.WORLDINVERSE||j.matrixSemantics.WORLDINVERSETRANSPOSE)&&N.invert(ve.WORLDINVERSE,G),(j.matrixSemantics.WORLDVIEWINVERSE||j.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&N.invert(ve.WORLDVIEWINVERSE,ve.WORLDVIEW),(j.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||j.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&N.invert(ve.WORLDVIEWPROJECTIONINVERSE,ve.WORLDVIEWPROJECTION)),C.beforeRender&&C.beforeRender(this),r.beforeRender.call(this,C,H,c);var X=W!==v;X?(W.bind(this),W.setUniformOfSemantic(f,"VIEWPORT",o),W.setUniformOfSemantic(f,"WINDOW_SIZE",l),t&&(W.setUniformOfSemantic(f,"NEAR",t.near),W.setUniformOfSemantic(f,"FAR",t.far)),W.setUniformOfSemantic(f,"DEVICEPIXELRATIO",a),W.setUniformOfSemantic(f,"TIME",u),W.setUniformOfSemantic(f,"VIEWPORT_SIZE",h),d&&d.setLightUniforms(W,C.lightGroup,this)):W=v,(X||r.isMaterialChanged(C,p,H,c))&&(H.depthTest!==m&&(H.depthTest?f.enable(f.DEPTH_TEST):f.disable(f.DEPTH_TEST),m=H.depthTest),H.depthMask!==g&&(f.depthMask(H.depthMask),g=H.depthMask),H.transparent!==S&&(H.transparent?f.enable(f.BLEND):f.disable(f.BLEND),S=H.transparent),H.transparent&&(H.blend?H.blend(f):(f.blendEquationSeparate(f.FUNC_ADD,f.FUNC_ADD),f.blendFuncSeparate(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA))),E=this._bindMaterial(C,H,W,p||null,c||null,v||null,r.getUniform),c=H);var he=j.matrixSemanticKeys;if(B)for(var re=0;re<he.length;re++){var ce=he[re],de=j.matrixSemantics[ce],Q=ve[ce];if(de.isTranspose){var Ae=ve[de.semanticNoTranspose];N.transpose(Q,Ae)}W.setUniform(f,de.type,de.symbol,Q)}C.cullFace!==x&&(x=C.cullFace,f.cullFace(x)),C.frontFace!==_&&(_=C.frontFace,f.frontFace(_)),C.culling!==T&&(T=C.culling,T?f.enable(f.CULL_FACE):f.disable(f.CULL_FACE)),this._updateSkeleton(C,W,E),ne&&(A=this._bindVAO(M,j,R,W)),this._renderObject(C,A,W),r.afterRender(this,C),C.afterRender&&C.afterRender(this),v=W,p=C}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var o=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var h=this.getGLExtension("OES_element_index_uint"),u=h&&n.indices instanceof Uint32Array,f=u?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,f,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,f,0)}else s?o.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(s)for(var d=0;d<l.length;d++)i.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],o=0;o<n.length;o++){var s=n[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var h=Ga[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,h,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,o){for(var s=this.gl,l=a===r,h=r.currentTextureSlot(),u=t.getEnabledUniforms(),f=t.getTextureUniforms(),d=this._placeholderTexture,c=0;c<f.length;c++){var v=f[c],p=o(e,t,v),m=t.uniforms[v].type;if(m==="t"&&p)p.__slot=-1;else if(m==="tv")for(var g=0;g<p.length;g++)p[g]&&(p[g].__slot=-1)}d.__slot=-1;for(var c=0;c<u.length;c++){var v=u[c],T=t.uniforms[v],p=o(e,t,v),m=T.type,x=m==="t";if(x&&(!p||!p.isRenderable())&&(p=d),n&&l){var _=o(i,n,v);if(x&&(!_||!_.isRenderable())&&(_=d),_===p){if(x)r.takeCurrentTextureSlot(this,null);else if(m==="tv"&&p)for(var g=0;g<p.length;g++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(x)if(p.__slot<0){var S=r.currentTextureSlot(),b=r.setUniform(s,"1i",v,S);b&&(r.takeCurrentTextureSlot(this,p),p.__slot=S)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(m==="tv"){if(!r.hasUniform(v))continue;for(var A=[],g=0;g<p.length;g++){var E=p[g];if(E.__slot<0){var S=r.currentTextureSlot();A.push(S),r.takeCurrentTextureSlot(this,E),E.__slot=S}else A.push(E.__slot)}r.setUniform(s,"1iv",v,A)}else r.setUniform(s,T.type,v,p)}else r.setUniform(s,T.type,v,p)}var M=r.currentTextureSlot();return r.resetTextureSlot(h),M},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var h=l[0],u=h.attributeBuffers,_=h.indicesBuffer,x=[],f=[],d=0;d<u.length;d++){var c=u[d],v=c.name,p=c.semantic,m;if(p){var g=t.attributeSemantics[p];m=g&&g.symbol}else m=v;m&&i.attributes[m]&&(x.push(c),f.push(m))}s=new Y1(x,f,_),n&&(r.__vaoCache[o]=s)}var T=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():T=!1,e.bindVertexArrayOES(s.vao));var x=s.availableAttributes,_=s.indicesBuffer;if(T){for(var S=i.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),d=0;d<x.length;d++){var b=S[d];if(b!==-1){var c=x[d],A=c.buffer,E=c.size,M=Ga[c.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,A),a.vertexAttribPointer(b,E,M,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,_.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new nt({shader:new z(z.source("clay.prez.vertex"),z.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],h=a.uniforms[l].value,u=a.uniforms[l].type;if(h){if(u==="t")h.dispose&&h.dispose(this);else if(u==="tv")for(var f=0;f<h.length;f++)h[f]&&h[f].dispose&&h[f].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new q),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});at.opaqueSortCompare=at.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};at.transparentSortCompare=at.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var ve={IDENTITY:pe(),WORLD:pe(),VIEW:pe(),PROJECTION:pe(),WORLDVIEW:pe(),VIEWPROJECTION:pe(),WORLDVIEWPROJECTION:pe(),WORLDINVERSE:pe(),VIEWINVERSE:pe(),PROJECTIONINVERSE:pe(),WORLDVIEWINVERSE:pe(),VIEWPROJECTIONINVERSE:pe(),WORLDVIEWPROJECTIONINVERSE:pe(),WORLDTRANSPOSE:pe(),VIEWTRANSPOSE:pe(),PROJECTIONTRANSPOSE:pe(),WORLDVIEWTRANSPOSE:pe(),VIEWPROJECTIONTRANSPOSE:pe(),WORLDVIEWPROJECTIONTRANSPOSE:pe(),WORLDINVERSETRANSPOSE:pe(),VIEWINVERSETRANSPOSE:pe(),PROJECTIONINVERSETRANSPOSE:pe(),WORLDVIEWINVERSETRANSPOSE:pe(),VIEWPROJECTIONINVERSETRANSPOSE:pe(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:pe()};at.COLOR_BUFFER_BIT=D.COLOR_BUFFER_BIT;at.DEPTH_BUFFER_BIT=D.DEPTH_BUFFER_BIT;at.STENCIL_BUFFER_BIT=D.STENCIL_BUFFER_BIT;var L=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=w.fromValues(e,t,r),this._dirty=!0};L.prototype={constructor:L,add:function(e){return w.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new L(this.x,this.y,this.z)},copy:function(e){return w.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return w.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return w.dist(this.array,e.array)},distance:function(e){return w.distance(this.array,e.array)},div:function(e){return w.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return w.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return w.dot(this.array,e.array)},len:function(){return w.len(this.array)},length:function(){return w.length(this.array)},lerp:function(e,t,r){return w.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return w.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return w.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return w.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return w.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return w.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return w.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return w.random(this.array,e),this._dirty=!0,this},scale:function(e){return w.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return w.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return w.sqrDist(this.array,e.array)},squaredDistance:function(e){return w.squaredDistance(this.array,e.array)},sqrLen:function(){return w.sqrLen(this.array)},squaredLength:function(){return w.squaredLength(this.array)},sub:function(e){return w.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return w.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return w.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return w.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return w.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){L.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){L.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var mi=Object.defineProperty;if(mi){var fn=L.prototype;mi(fn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),mi(fn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),mi(fn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}L.add=function(e,t,r){return w.add(e.array,t.array,r.array),e._dirty=!0,e};L.set=function(e,t,r,i){w.set(e.array,t,r,i),e._dirty=!0};L.copy=function(e,t){return w.copy(e.array,t.array),e._dirty=!0,e};L.cross=function(e,t,r){return w.cross(e.array,t.array,r.array),e._dirty=!0,e};L.dist=function(e,t){return w.distance(e.array,t.array)};L.distance=L.dist;L.div=function(e,t,r){return w.divide(e.array,t.array,r.array),e._dirty=!0,e};L.divide=L.div;L.dot=function(e,t){return w.dot(e.array,t.array)};L.len=function(e){return w.length(e.array)};L.lerp=function(e,t,r,i){return w.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};L.min=function(e,t,r){return w.min(e.array,t.array,r.array),e._dirty=!0,e};L.max=function(e,t,r){return w.max(e.array,t.array,r.array),e._dirty=!0,e};L.mul=function(e,t,r){return w.multiply(e.array,t.array,r.array),e._dirty=!0,e};L.multiply=L.mul;L.negate=function(e,t){return w.negate(e.array,t.array),e._dirty=!0,e};L.normalize=function(e,t){return w.normalize(e.array,t.array),e._dirty=!0,e};L.random=function(e,t){return w.random(e.array,t),e._dirty=!0,e};L.scale=function(e,t,r){return w.scale(e.array,t.array,r),e._dirty=!0,e};L.scaleAndAdd=function(e,t,r,i){return w.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};L.sqrDist=function(e,t){return w.sqrDist(e.array,t.array)};L.squaredDistance=L.sqrDist;L.sqrLen=function(e){return w.sqrLen(e.array)};L.squaredLength=L.sqrLen;L.sub=function(e,t,r){return w.subtract(e.array,t.array,r.array),e._dirty=!0,e};L.subtract=L.sub;L.transformMat3=function(e,t,r){return w.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};L.transformMat4=function(e,t,r){return w.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};L.transformQuat=function(e,t,r){return w.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function rt(e,t,r){return e<t?t:e>r?r:e}var ue=Math.atan2,it=Math.asin,lr=Math.abs;L.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],o=t[2],s=t[3],l=n*n,h=a*a,u=o*o,f=s*s,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":i[0]=ue(2*(n*s-a*o),f-l-h+u),i[1]=it(rt(2*(n*o+a*s),-1,1)),i[2]=ue(2*(o*s-n*a),f+l-h-u);break;case"YXZ":i[0]=it(rt(2*(n*s-a*o),-1,1)),i[1]=ue(2*(n*o+a*s),f-l-h+u),i[2]=ue(2*(n*a+o*s),f-l+h-u);break;case"ZXY":i[0]=it(rt(2*(n*s+a*o),-1,1)),i[1]=ue(2*(a*s-o*n),f-l-h+u),i[2]=ue(2*(o*s-n*a),f-l+h-u);break;case"ZYX":i[0]=ue(2*(n*s+o*a),f-l-h+u),i[1]=it(rt(2*(a*s-n*o),-1,1)),i[2]=ue(2*(n*a+o*s),f+l-h-u);break;case"YZX":i[0]=ue(2*(n*s-o*a),f-l+h-u),i[1]=ue(2*(a*s-n*o),f+l-h-u),i[2]=it(rt(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=ue(2*(n*s+a*o),f-l+h-u),i[1]=ue(2*(n*o+a*s),f+l-h-u),i[2]=it(rt(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};L.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],h=i[7],u=i[2],f=i[5],d=i[8],c=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":c[1]=it(rt(o,-1,1)),lr(o)<.99999?(c[0]=ue(-h,d),c[2]=ue(-a,n)):(c[0]=ue(f,l),c[2]=0);break;case"YXZ":c[0]=it(-rt(h,-1,1)),lr(h)<.99999?(c[1]=ue(o,d),c[2]=ue(s,l)):(c[1]=ue(-u,n),c[2]=0);break;case"ZXY":c[0]=it(rt(f,-1,1)),lr(f)<.99999?(c[1]=ue(-u,d),c[2]=ue(-a,l)):(c[1]=0,c[2]=ue(s,n));break;case"ZYX":c[1]=it(-rt(u,-1,1)),lr(u)<.99999?(c[0]=ue(f,d),c[2]=ue(s,n)):(c[0]=0,c[2]=ue(-a,l));break;case"YZX":c[2]=it(rt(s,-1,1)),lr(s)<.99999?(c[0]=ue(-h,l),c[1]=ue(-u,n)):(c[0]=0,c[1]=ue(o,d));break;case"XZY":c[2]=it(-rt(a,-1,1)),lr(a)<.99999?(c[0]=ue(f,l),c[1]=ue(o,n)):(c[0]=ue(-h,d),c[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(L,{POSITIVE_X:{get:function(){return new L(1,0,0)}},NEGATIVE_X:{get:function(){return new L(-1,0,0)}},POSITIVE_Y:{get:function(){return new L(0,1,0)}},NEGATIVE_Y:{get:function(){return new L(0,-1,0)}},POSITIVE_Z:{get:function(){return new L(0,0,1)}},NEGATIVE_Z:{get:function(){return new L(0,0,-1)}},UP:{get:function(){return new L(0,1,0)}},ZERO:{get:function(){return new L}}});var $1=1e-5,er=function(e,t){this.origin=e||new L,this.direction=t||new L};er.prototype={constructor:er,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,o=w.dot(r,a);if(o===0)return null;t||(t=new L);var s=(w.dot(r,n)-i)/o;return w.scaleAndAdd(t.array,n,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=w.dot(e.normal.array,this.direction.array);w.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=w.create();return function(t){w.sub(e,t,this.origin.array);var r=w.dot(e,this.direction.array);if(r<0)return w.distance(this.origin.array,t);var i=w.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=w.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,w.sub(e,t,n);var o=w.dot(e,a),s=w.squaredLength(e),l=s-o*o,h=r*r;if(!(l>h)){var u=Math.sqrt(h-l),f=o-u,d=o+u;return i||(i=new L),f<0?d<0?null:(w.scaleAndAdd(i.array,n,a,d),i):(w.scaleAndAdd(i.array,n,a,f),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],h,u,f,d,c,v;if(o>=0?(h=(n[0]-i[0])*o,u=(a[0]-i[0])*o):(u=(n[0]-i[0])*o,h=(a[0]-i[0])*o),s>=0?(f=(n[1]-i[1])*s,d=(a[1]-i[1])*s):(d=(n[1]-i[1])*s,f=(a[1]-i[1])*s),h>d||f>u||((f>h||h!==h)&&(h=f),(d<u||u!==u)&&(u=d),l>=0?(c=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,c=(a[2]-i[2])*l),h>v||c>u)||((c>h||h!==h)&&(h=c),(v<u||u!==u)&&(u=v),u<0))return null;var p=h>=0?h:u;return t||(t=new L),w.scaleAndAdd(t.array,i,r,p),t},intersectTriangle:function(){var e=w.create(),t=w.create(),r=w.create(),i=w.create();return function(n,a,o,s,l,h){var u=this.direction.array,f=this.origin.array;n=n.array,a=a.array,o=o.array,w.sub(e,a,n),w.sub(t,o,n),w.cross(i,t,u);var d=w.dot(e,i);if(s){if(d>-1e-5)return null}else if(d>-1e-5&&d<$1)return null;w.sub(r,f,n);var c=w.dot(i,r)/d;if(c<0||c>1)return null;w.cross(i,e,r);var v=w.dot(u,i)/d;if(v<0||v>1||c+v>1)return null;w.cross(i,e,t);var p=-w.dot(r,i)/d;return p<0?null:(l||(l=new L),h&&L.set(h,1-c-v,c,v),w.scaleAndAdd(l.array,f,u,p),l)}}(),applyTransform:function(e){L.add(this.direction,this.direction,this.origin),L.transformMat4(this.origin,this.origin,e),L.transformMat4(this.direction,this.direction,e),L.sub(this.direction,this.direction,this.origin),L.normalize(this.direction,this.direction)},copy:function(e){L.copy(this.origin,e.origin),L.copy(this.direction,e.direction)},clone:function(){var e=new er;return e.copy(this),e}};var P={};P.create=function(){var e=new Ve(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};P.clone=function(e){var t=new Ve(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};P.fromValues=function(e,t,r,i){var n=new Ve(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};P.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};P.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};P.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};P.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};P.sub=P.subtract;P.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};P.mul=P.multiply;P.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};P.div=P.divide;P.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};P.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};P.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};P.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};P.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};P.dist=P.distance;P.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};P.sqrDist=P.squaredDistance;P.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};P.len=P.length;P.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};P.sqrLen=P.squaredLength;P.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};P.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};P.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};P.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};P.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};P.random=function(e,t){return t=t||1,e[0]=mr(),e[1]=mr(),e[2]=mr(),e[3]=mr(),P.normalize(e,e),P.scale(e,e,t),e};P.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,e};P.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],h=r[3],u=h*i+s*a-l*n,f=h*n+l*i-o*a,d=h*a+o*n-s*i,c=-o*i-s*n-l*a;return e[0]=u*h+c*-o+f*-l-d*-s,e[1]=f*h+c*-s+d*-o-u*-l,e[2]=d*h+c*-l+u*-s-f*-o,e};P.forEach=function(){var e=P.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var Z={};Z.create=function(){var e=new Ve(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Z.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Z.clone=function(e){var t=new Ve(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Z.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Z.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Z.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Z.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=u*o-s*h,d=-u*a+s*l,c=h*a-o*l,v=r*f+i*d+n*c;return v?(v=1/v,e[0]=f*v,e[1]=(-u*i+n*h)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(u*r-n*l)*v,e[5]=(-s*r+n*a)*v,e[6]=c*v,e[7]=(-h*r+i*l)*v,e[8]=(o*r-i*a)*v,e):null};Z.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8];return e[0]=o*u-s*h,e[1]=n*h-i*u,e[2]=i*s-n*o,e[3]=s*l-a*u,e[4]=r*u-n*l,e[5]=n*a-r*s,e[6]=a*h-o*l,e[7]=i*l-r*h,e[8]=r*o-i*a,e};Z.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],h=e[8];return t*(h*a-o*l)+r*(-h*n+o*s)+i*(l*n-a*s)};Z.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=r[0],c=r[1],v=r[2],p=r[3],m=r[4],g=r[5],T=r[6],x=r[7],_=r[8];return e[0]=d*i+c*o+v*h,e[1]=d*n+c*s+v*u,e[2]=d*a+c*l+v*f,e[3]=p*i+m*o+g*h,e[4]=p*n+m*s+g*u,e[5]=p*a+m*l+g*f,e[6]=T*i+x*o+_*h,e[7]=T*n+x*s+_*u,e[8]=T*a+x*l+_*f,e};Z.mul=Z.multiply;Z.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=r[0],c=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*i+c*o+h,e[7]=d*n+c*s+u,e[8]=d*a+c*l+f,e};Z.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=Math.sin(r),c=Math.cos(r);return e[0]=c*i+d*o,e[1]=c*n+d*s,e[2]=c*a+d*l,e[3]=c*o-d*i,e[4]=c*s-d*n,e[5]=c*l-d*a,e[6]=h,e[7]=u,e[8]=f,e};Z.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Z.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Z.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,h=r*o,u=i*o,f=i*s,d=n*o,c=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return e[0]=1-f-v,e[3]=u-g,e[6]=d+m,e[1]=u+g,e[4]=1-h-v,e[7]=c-p,e[2]=d-m,e[5]=c+p,e[8]=1-h-f,e};Z.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],c=t[11],v=t[12],p=t[13],m=t[14],g=t[15],T=r*s-i*o,x=r*l-n*o,_=r*h-a*o,S=i*l-n*s,b=i*h-a*s,A=n*h-a*l,E=u*p-f*v,M=u*m-d*v,O=u*g-c*v,C=f*m-d*p,B=f*g-c*p,G=d*g-c*m,R=T*G-x*B+_*C+S*O-b*M+A*E;return R?(R=1/R,e[0]=(s*G-l*B+h*C)*R,e[1]=(l*O-o*G-h*M)*R,e[2]=(o*B-s*O+h*E)*R,e[3]=(n*B-i*G-a*C)*R,e[4]=(r*G-n*O+a*M)*R,e[5]=(i*O-r*B-a*E)*R,e[6]=(p*A-m*b+g*S)*R,e[7]=(m*_-v*A-g*x)*R,e[8]=(v*b-p*_+g*T)*R,e):null};Z.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var V={};V.create=function(){var e=new Ve(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};V.rotationTo=function(){var e=w.create(),t=w.fromValues(1,0,0),r=w.fromValues(0,1,0);return function(i,n,a){var o=w.dot(n,a);return o<-.999999?(w.cross(e,t,n),w.length(e)<1e-6&&w.cross(e,r,n),w.normalize(e,e),V.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(w.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,V.normalize(i,i))}}();V.setAxes=function(){var e=Z.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],V.normalize(t,V.fromMat3(t,e))}}();V.clone=P.clone;V.fromValues=P.fromValues;V.copy=P.copy;V.set=P.set;V.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};V.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};V.add=P.add;V.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],h=r[2],u=r[3];return e[0]=i*u+o*s+n*h-a*l,e[1]=n*u+o*l+a*s-i*h,e[2]=a*u+o*h+i*l-n*s,e[3]=o*u-i*s-n*l-a*h,e};V.mul=V.multiply;V.scale=P.scale;V.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=o*l-i*s,e};V.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*s,e[1]=n*l+o*s,e[2]=a*l+i*s,e[3]=o*l-n*s,e};V.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};V.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};V.dot=P.dot;V.lerp=P.lerp;V.slerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3],l=r[0],h=r[1],u=r[2],f=r[3],d,c,v,p,m;return c=n*l+a*h+o*u+s*f,c<0&&(c=-c,l=-l,h=-h,u=-u,f=-f),1-c>1e-6?(d=Math.acos(c),v=Math.sin(d),p=Math.sin((1-i)*d)/v,m=Math.sin(i*d)/v):(p=1-i,m=i),e[0]=p*n+m*l,e[1]=p*a+m*h,e[2]=p*o+m*u,e[3]=p*s+m*f,e};V.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=a*s,e};V.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};V.length=P.length;V.len=V.length;V.squaredLength=P.squaredLength;V.sqrLen=V.squaredLength;V.normalize=P.normalize;V.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[o*3+o]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+o]-t[o*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[o]=(t[o*3+n]+t[n*3+o])*i}return e};var U=function(){this._axisX=new L,this._axisY=new L,this._axisZ=new L,this.array=N.create(),this._dirty=!0};U.prototype={constructor:U,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return N.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new U().copy(this)},copy:function(e){return N.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return N.determinant(this.array)},fromQuat:function(e){return N.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return N.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return U.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return N.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return N.identity(this.array),this._dirty=!0,this},invert:function(){return N.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return N.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return N.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return N.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return N.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return N.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return N.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return N.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return N.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return N.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return N.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return N.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return N.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return N.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return N.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=w.create(),t=w.create(),r=w.create(),i=Z.create();return function(n,a,o){var s=this.array;w.set(e,s[0],s[1],s[2]),w.set(t,s[4],s[5],s[6]),w.set(r,s[8],s[9],s[10]);var l=w.length(e),h=w.length(t),u=w.length(r),f=this.determinant();f<0&&(l=-l),n&&n.set(l,h,u),o.set(s[12],s[13],s[14]),Z.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=h,i[4]/=h,i[5]/=h,i[6]/=u,i[7]/=u,i[8]/=u,V.fromMat3(a.array,i),V.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var gi=Object.defineProperty;if(gi){var cn=U.prototype;gi(cn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),gi(cn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),gi(cn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}U.adjoint=function(e,t){return N.adjoint(e.array,t.array),e._dirty=!0,e};U.copy=function(e,t){return N.copy(e.array,t.array),e._dirty=!0,e};U.determinant=function(e){return N.determinant(e.array)};U.identity=function(e){return N.identity(e.array),e._dirty=!0,e};U.ortho=function(e,t,r,i,n,a,o){return N.ortho(e.array,t,r,i,n,a,o),e._dirty=!0,e};U.perspective=function(e,t,r,i,n){return N.perspective(e.array,t,r,i,n),e._dirty=!0,e};U.lookAt=function(e,t,r,i){return N.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};U.invert=function(e,t){return N.invert(e.array,t.array),e._dirty=!0,e};U.mul=function(e,t,r){return N.mul(e.array,t.array,r.array),e._dirty=!0,e};U.multiply=U.mul;U.fromQuat=function(e,t){return N.fromQuat(e.array,t.array),e._dirty=!0,e};U.fromRotationTranslation=function(e,t,r){return N.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};U.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};U.rotate=function(e,t,r,i){return N.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};U.rotateX=function(e,t,r){return N.rotateX(e.array,t.array,r),e._dirty=!0,e};U.rotateY=function(e,t,r){return N.rotateY(e.array,t.array,r),e._dirty=!0,e};U.rotateZ=function(e,t,r){return N.rotateZ(e.array,t.array,r),e._dirty=!0,e};U.scale=function(e,t,r){return N.scale(e.array,t.array,r.array),e._dirty=!0,e};U.transpose=function(e,t){return N.transpose(e.array,t.array),e._dirty=!0,e};U.translate=function(e,t,r){return N.translate(e.array,t.array,r.array),e._dirty=!0,e};var oe=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=V.fromValues(e,t,r,i),this._dirty=!0};oe.prototype={constructor:oe,add:function(e){return V.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return V.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new oe(this.x,this.y,this.z,this.w)},conjugate:function(){return V.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return V.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return V.dot(this.array,e.array)},fromMat3:function(e){return V.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=Z.create();return function(t){return Z.fromMat4(e,t.array),Z.transpose(e,e),V.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return V.identity(this.array),this._dirty=!0,this},invert:function(){return V.invert(this.array,this.array),this._dirty=!0,this},len:function(){return V.len(this.array)},length:function(){return V.length(this.array)},lerp:function(e,t,r){return V.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return V.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return V.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return V.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return V.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return V.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return V.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return V.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return V.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return V.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return V.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return V.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return V.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return V.sqrLen(this.array)},squaredLength:function(){return V.squaredLength(this.array)},fromEuler:function(e,t){return oe.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Br=Object.defineProperty;if(Br){var _i=oe.prototype;Br(_i,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Br(_i,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Br(_i,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Br(_i,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}oe.add=function(e,t,r){return V.add(e.array,t.array,r.array),e._dirty=!0,e};oe.set=function(e,t,r,i,n){V.set(e.array,t,r,i,n),e._dirty=!0};oe.copy=function(e,t){return V.copy(e.array,t.array),e._dirty=!0,e};oe.calculateW=function(e,t){return V.calculateW(e.array,t.array),e._dirty=!0,e};oe.conjugate=function(e,t){return V.conjugate(e.array,t.array),e._dirty=!0,e};oe.identity=function(e){return V.identity(e.array),e._dirty=!0,e};oe.invert=function(e,t){return V.invert(e.array,t.array),e._dirty=!0,e};oe.dot=function(e,t){return V.dot(e.array,t.array)};oe.len=function(e){return V.length(e.array)};oe.lerp=function(e,t,r,i){return V.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};oe.slerp=function(e,t,r,i){return V.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};oe.mul=function(e,t,r){return V.multiply(e.array,t.array,r.array),e._dirty=!0,e};oe.multiply=oe.mul;oe.rotateX=function(e,t,r){return V.rotateX(e.array,t.array,r),e._dirty=!0,e};oe.rotateY=function(e,t,r){return V.rotateY(e.array,t.array,r),e._dirty=!0,e};oe.rotateZ=function(e,t,r){return V.rotateZ(e.array,t.array,r),e._dirty=!0,e};oe.setAxisAngle=function(e,t,r){return V.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};oe.normalize=function(e,t){return V.normalize(e.array,t.array),e._dirty=!0,e};oe.sqrLen=function(e){return V.sqrLen(e.array)};oe.squaredLength=oe.sqrLen;oe.fromMat3=function(e,t){return V.fromMat3(e.array,t.array),e._dirty=!0,e};oe.setAxes=function(e,t,r,i){return V.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};oe.rotationTo=function(e,t,r){return V.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};oe.fromEuler=function(e,t,u){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),h=Math.sin(t[2]/2),u=(u||"XYZ").toUpperCase();switch(u){case"XYZ":i[0]=s*a*o+n*l*h,i[1]=n*l*o-s*a*h,i[2]=n*a*h+s*l*o,i[3]=n*a*o-s*l*h;break;case"YXZ":i[0]=s*a*o+n*l*h,i[1]=n*l*o-s*a*h,i[2]=n*a*h-s*l*o,i[3]=n*a*o+s*l*h;break;case"ZXY":i[0]=s*a*o-n*l*h,i[1]=n*l*o+s*a*h,i[2]=n*a*h+s*l*o,i[3]=n*a*o-s*l*h;break;case"ZYX":i[0]=s*a*o-n*l*h,i[1]=n*l*o+s*a*h,i[2]=n*a*h-s*l*o,i[3]=n*a*o+s*l*h;break;case"YZX":i[0]=s*a*o+n*l*h,i[1]=n*l*o+s*a*h,i[2]=n*a*h-s*l*o,i[3]=n*a*o-s*l*h;break;case"XZY":i[0]=s*a*o-n*l*h,i[1]=n*l*o-s*a*h,i[2]=n*a*h+s*l*o,i[3]=n*a*o+s*l*h;break}};var Dt=w.set,yi=w.copy,Ue=function(e,t){this.min=e||new L(1/0,1/0,1/0),this.max=t||new L(-1/0,-1/0,-1/0),this.vertices=null};Ue.prototype={constructor:Ue,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;yi(i,e[0]),yi(n,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]),o[2]>n[2]&&(n[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return w.min(t.array,t.array,e.min.array),w.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return w.max(t.array,t.array,e.min.array),w.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=w.create(),t=w.create(),r=w.create(),i=w.create(),n=w.create(),a=w.create();return function(o,s){var l=o.min.array,h=o.max.array,u=s.array;return e[0]=u[0]*l[0],e[1]=u[1]*l[0],e[2]=u[2]*l[0],t[0]=u[0]*h[0],t[1]=u[1]*h[0],t[2]=u[2]*h[0],r[0]=u[4]*l[1],r[1]=u[5]*l[1],r[2]=u[6]*l[1],i[0]=u[4]*h[1],i[1]=u[5]*h[1],i[2]=u[6]*h[1],n[0]=u[8]*l[2],n[1]=u[9]*l[2],n[2]=u[10]*l[2],a[0]=u[8]*h[2],a[1]=u[9]*h[2],a[2]=u[10]*h[2],l=this.min.array,h=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+u[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+u[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+u[14],h[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+u[12],h[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+u[13],h[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+u[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],o=t[2],s=r[0],l=r[1],h=t[2],u=r[0],f=r[1],d=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*u+i[12],r[1]=i[5]*f+i[13],t[2]=i[10]*d+i[14];else{var c=-1/o;t[0]=i[0]*n*c,t[1]=i[5]*a*c,r[2]=(i[10]*o+i[14])*c,c=-1/h,r[0]=i[0]*s*c,r[1]=i[5]*l*c,c=-1/d,t[2]=(i[10]*d+i[14])*c}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=w.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return Dt(e[0],r[0],r[1],r[2]),Dt(e[1],r[0],i[1],r[2]),Dt(e[2],i[0],r[1],r[2]),Dt(e[3],i[0],i[1],r[2]),Dt(e[4],r[0],r[1],i[2]),Dt(e[5],r[0],i[1],i[2]),Dt(e[6],i[0],r[1],i[2]),Dt(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return yi(t.array,e.min.array),yi(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new Ue;return e.copy(this),e}};var Q1=0,mt=He.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Q1++),this.position||(this.position=new L),this.rotation||(this.rotation=new oe),this.scale||(this.scale=new L(1,1,1)),this.worldTransform=new U,this.localTransform=new U,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(n){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){N.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){N.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=N.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(N.invert(e,this._parent.worldTransform.array),N.multiply(r.array,e,i.array)):N.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;N.fromRotationTranslation(i,t.array,e.array),N.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?N.multiplyAffine(t,this._parent.worldTransform.array,e):N.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new Ue,r=new U,i=new U;return function(n,a){return a=a||new Ue,this._parent?U.invert(i,this._parent.worldTransform):U.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),U.multiply(r,i,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new L(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new L,t=new U;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new U;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),Ye=mt.extend({material:null,geometry:null,mode:D.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:D.BACK,frontFace:D.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=mt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=mt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});Ye.POINTS=D.POINTS;Ye.LINES=D.LINES;Ye.LINE_LOOP=D.LINE_LOOP;Ye.LINE_STRIP=D.LINE_STRIP;Ye.TRIANGLES=D.TRIANGLES;Ye.TRIANGLE_STRIP=D.TRIANGLE_STRIP;Ye.TRIANGLE_FAN=D.TRIANGLE_FAN;Ye.BACK=D.BACK;Ye.FRONT=D.FRONT;Ye.FRONT_AND_BACK=D.FRONT_AND_BACK;Ye.CW=D.CW;Ye.CCW=D.CCW;var Kn=He.extend({scene:null,camera:null,renderer:null},function(){this._ray=new er,this._ndc=new q},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof Ye&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===D.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new L,t=new L,r=new L,i=new er,n=new U;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),U.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,h=s?a.skeleton.boundingBox:l.boundingBox;if(!(h&&!i.intersectBoundingBox(h))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var u=a.cullFace===D.BACK&&a.frontFace===D.CCW||a.cullFace===D.FRONT&&a.frontFace===D.CW,f,d=l.indices,c=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,m,g=[];if(!(!c||!c.value||!d)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var T=0;T<a.joints.length;T++){g[T]=g[T]||[];for(var x=0;x<16;x++)g[T][x]=m[T*16+x]}var _=[],S=[],b=[],A=[],E=[],M=l.attributes.skinnedPosition;(!M||!M.value)&&(l.createAttribute("skinnedPosition","f",3),M=l.attributes.skinnedPosition,M.init(l.vertexCount));for(var T=0;T<l.vertexCount;T++){c.get(T,_),v.get(T,S),p.get(T,b),S[3]=1-S[0]-S[1]-S[2],w.set(A,0,0,0);for(var x=0;x<4;x++)b[x]>=0&&S[x]>1e-4&&(w.transformMat4(E,_,g[b[x]]),w.scaleAndAdd(A,A,E,S[x]));M.set(T,A)}}for(var T=0;T<d.length;T+=3){var O=d[T],C=d[T+1],B=d[T+2],G=s?l.attributes.skinnedPosition:c;if(G.get(O,e.array),G.get(C,t.array),G.get(B,r.array),u?f=i.intersectTriangle(e,t,r,a.culling):f=i.intersectTriangle(e,r,t,a.culling),f){var R=new L;s?L.copy(R,f):L.transformMat4(R,f,a.worldTransform),o.push(new Kn.Intersection(f,R,a,[O,C,B],T/3,L.dist(R,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Kn.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var Fr="__dt__",xr=function(){this._contextId=0,this._caches=[],this._context={}};xr.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=Fr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=Fr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=Fr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=Fr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=Fr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};xr.prototype.constructor=xr;var F=He.extend({width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.REPEAT,wrapT:D.REPEAT,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new xr},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===D.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===F.SRGB&&!r&&(this.format=F.RGB),this.format===F.SRGB_ALPHA&&!r&&(this.format=F.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===D.NEAREST_MIPMAP_NEAREST||e===D.NEAREST_MIPMAP_LINEAR?D.NEAREST:e===D.LINEAR_MIPMAP_LINEAR||e===D.LINEAR_MIPMAP_NEAREST?D.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(F.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(F.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});F.BYTE=D.BYTE;F.UNSIGNED_BYTE=D.UNSIGNED_BYTE;F.SHORT=D.SHORT;F.UNSIGNED_SHORT=D.UNSIGNED_SHORT;F.INT=D.INT;F.UNSIGNED_INT=D.UNSIGNED_INT;F.FLOAT=D.FLOAT;F.HALF_FLOAT=36193;F.UNSIGNED_INT_24_8_WEBGL=34042;F.DEPTH_COMPONENT=D.DEPTH_COMPONENT;F.DEPTH_STENCIL=D.DEPTH_STENCIL;F.ALPHA=D.ALPHA;F.RGB=D.RGB;F.RGBA=D.RGBA;F.LUMINANCE=D.LUMINANCE;F.LUMINANCE_ALPHA=D.LUMINANCE_ALPHA;F.SRGB=35904;F.SRGB_ALPHA=35906;F.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;F.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;F.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;F.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;F.NEAREST=D.NEAREST;F.LINEAR=D.LINEAR;F.NEAREST_MIPMAP_NEAREST=D.NEAREST_MIPMAP_NEAREST;F.LINEAR_MIPMAP_NEAREST=D.LINEAR_MIPMAP_NEAREST;F.NEAREST_MIPMAP_LINEAR=D.NEAREST_MIPMAP_LINEAR;F.LINEAR_MIPMAP_LINEAR=D.LINEAR_MIPMAP_LINEAR;F.REPEAT=D.REPEAT;F.CLAMP_TO_EDGE=D.CLAMP_TO_EDGE;F.MIRRORED_REPEAT=D.MIRRORED_REPEAT;var Oe=Ye.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=Ye.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});Oe.POINTS=D.POINTS;Oe.LINES=D.LINES;Oe.LINE_LOOP=D.LINE_LOOP;Oe.LINE_STRIP=D.LINE_STRIP;Oe.TRIANGLES=D.TRIANGLES;Oe.TRIANGLE_STRIP=D.TRIANGLE_STRIP;Oe.TRIANGLE_FAN=D.TRIANGLE_FAN;Oe.BACK=D.BACK;Oe.FRONT=D.FRONT;Oe.FRONT_AND_BACK=D.FRONT_AND_BACK;Oe.CW=D.CW;Oe.CCW=D.CCW;var li={};li.isPowerOfTwo=function(e){return(e&e-1)===0};li.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};li.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var Ua=li.isPowerOfTwo;function Ha(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function J1(e,t){var r=Ha(e.width),i=Ha(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var Y=F.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===F.REPEAT||this.wrapT===F.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=D.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,h=0;h<this.mipmaps.length;h++){var u=this.mipmaps[h];this._updateTextureData(t,u,h,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=J1(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=F.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=F.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return Ua(this.width)&&Ua(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=ie.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(Y.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Y.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Wo(e){return{byte:ie.Int8Array,ubyte:ie.Uint8Array,short:ie.Int16Array,ushort:ie.Uint16Array}[e]||ie.Float32Array}function dn(e){return"attr_"+e}function Tr(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}Tr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=Wo(this.type);this.value=new t(e*this.size)}};Tr.prototype.fromArray=function(e){var t=Wo(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)r[i++]=e[a][o]}else r=new t(e);this.value=r};Tr.prototype.clone=function(e){var t=new Tr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function Xo(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function jo(e){this.buffer=e,this.count=0}var Ke=He.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new xr,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(dn(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?ie.Uint32Array:ie.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)t[i++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new Tr(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],o=this.attributes[a];o.value&&o.value.length===i*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(dn(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var o=n[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var h=this.getEnabledAttributes(),u={};if(!a)for(var f=0;f<s.length;f++)u[s[f].name]=s[f];for(var d=0;d<h.length;d++){var c=h[d],v=this.attributes[c],p;a||(p=u[c]);var m;p?m=p.buffer:m=e.createBuffer(),i.isDirty(dn(c))&&(e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new Xo(c,v.type,m,v.size,v.semantic)}for(var f=d;f<s.length;f++)e.deleteBuffer(s[f].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new jo(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var h=this.__vaoCache[l].vao;h&&s.deleteVertexArrayOES(h)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(Ke.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(Ke.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));Ke.STATIC_DRAW=D.STATIC_DRAW;Ke.DYNAMIC_DRAW=D.DYNAMIC_DRAW;Ke.STREAM_DRAW=D.STREAM_DRAW;Ke.AttributeBuffer=Xo;Ke.IndicesBuffer=jo;Ke.Attribute=Tr;var je=w.create,hr=w.add,Wt=w.set,vt=Ke.Attribute,$=Ke.extend(function(){return{attributes:{position:new vt("position","float",3,"POSITION"),texcoord0:new vt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new vt("texcoord1","float",2,"TEXCOORD_1"),normal:new vt("normal","float",3,"NORMAL"),tangent:new vt("tangent","float",4,"TANGENT"),color:new vt("color","float",4,"COLOR"),weight:new vt("weight","float",3,"WEIGHT"),joint:new vt("joint","float",4,"JOINT"),barycentric:new vt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new Ue);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;w.set(n,t[0],t[1],t[2]),w.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],h=t[o++];s<n[0]&&(n[0]=s),l<n[1]&&(n[1]=l),h<n[2]&&(n[2]=h),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),h>a[2]&&(a[2]=h)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new ie.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=je(),o=je(),s=je(),l=je(),h=je(),u=je(),f=e?e.length:this.vertexCount,d,c,v,p=0;p<f;){e?(d=e[p++],c=e[p++],v=e[p++]):(d=p++,c=p++,v=p++),Wt(a,r[d*3],r[d*3+1],r[d*3+2]),Wt(o,r[c*3],r[c*3+1],r[c*3+2]),Wt(s,r[v*3],r[v*3+1],r[v*3+2]),w.sub(l,a,o),w.sub(h,o,s),w.cross(u,l,h);for(var n=0;n<3;n++)i[d*3+n]=i[d*3+n]+u[n],i[c*3+n]=i[c*3+n]+u[n],i[v*3+n]=i[v*3+n]+u[n]}for(var n=0;n<i.length;)Wt(u,i[n],i[n+1],i[n+2]),w.normalize(u,u),i[n++]=u[0],i[n++]=u[1],i[n++]=u[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=je(),a=je(),o=je(),s=je(),l=je(),h=je();i||(i=t.normal.value=new Float32Array(r.length));for(var u=e?e.length:this.vertexCount,f,d,c,v=0;v<u;){e?(f=e[v++],d=e[v++],c=e[v++]):(f=v++,d=v++,c=v++),Wt(n,r[f*3],r[f*3+1],r[f*3+2]),Wt(a,r[d*3],r[d*3+1],r[d*3+2]),Wt(o,r[c*3],r[c*3+1],r[c*3+2]),w.sub(s,n,a),w.sub(l,a,o),w.cross(h,s,l),w.normalize(h,h);for(var p=0;p<3;p++)i[f*3+p]=h[p],i[d*3+p]=h[p],i[c*3+p]=h[p]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var h=[0,0,0],u=[0,0,0],f=this.indices,d=f?f.length:this.vertexCount,c,v,p,l=0;l<d;){f?(c=f[l++],v=f[l++],p=f[l++]):(c=l++,v=l++,p=l++);var m=r[c*2],g=r[v*2],T=r[p*2],x=r[c*2+1],_=r[v*2+1],S=r[p*2+1],b=i[c*3],A=i[v*3],E=i[p*3],M=i[c*3+1],O=i[v*3+1],C=i[p*3+1],B=i[c*3+2],G=i[v*3+2],R=i[p*3+2],H=A-b,W=E-b,j=O-M,k=C-M,ne=G-B,X=R-B,he=g-m,re=T-m,ce=_-x,de=S-x,Q=1/(he*de-ce*re);h[0]=(de*H-ce*W)*Q,h[1]=(de*j-ce*k)*Q,h[2]=(de*ne-ce*X)*Q,u[0]=(he*W-re*H)*Q,u[1]=(he*k-re*j)*Q,u[2]=(he*X-re*ne)*Q,hr(o[c],o[c],h),hr(o[v],o[v],h),hr(o[p],o[p],h),hr(s[c],s[c],u),hr(s[v],s[v],u),hr(s[p],s[p],u)}for(var Ae=je(),ge=je(),xe=je(),l=0;l<e;l++){xe[0]=a[l*3],xe[1]=a[l*3+1],xe[2]=a[l*3+2];var ke=o[l];w.scale(Ae,xe,w.dot(xe,ke)),w.sub(Ae,ke,Ae),w.normalize(Ae,Ae),w.cross(ge,xe,ke),n[l*4]=Ae[0],n[l*4+1]=Ae[1],n[l*4+2]=Ae[2],n[l*4+3]=w.dot(ge,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new ie.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],n=0;n<r.length;n++)for(var a=r[n],h=e[a].value,u=e[a].size,f=0;f<u;f++)h[o*u+f]=i[a][l*u+f];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=N.create();N.invert(a,e),N.transpose(a,a);var o=w.transformMat4,s=w.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,a),n&&s(n,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var h=this.__vaoCache[l].vao;h&&s.deleteVertexArrayOES(h)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});$.STATIC_DRAW=Ke.STATIC_DRAW;$.DYNAMIC_DRAW=Ke.DYNAMIC_DRAW;$.STREAM_DRAW=Ke.STREAM_DRAW;$.AttributeBuffer=Ke.AttributeBuffer;$.IndicesBuffer=Ke.IndicesBuffer;$.Attribute=vt;const e2=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var st="uniform vec3 ",zr="uniform float ",ur="@export clay.header.",fr="@end",Ge=":unconfigurable;";const t2=[ur+"directional_light",st+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Ge,st+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Ge,fr,ur+"ambient_light",st+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Ge,fr,ur+"ambient_sh_light",st+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Ge,st+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Ge,e2,fr,ur+"ambient_cubemap_light",st+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,fr,ur+"point_light",st+"pointLightPosition[POINT_LIGHT_COUNT]"+Ge,zr+"pointLightRange[POINT_LIGHT_COUNT]"+Ge,st+"pointLightColor[POINT_LIGHT_COUNT]"+Ge,fr,ur+"spot_light",st+"spotLightPosition[SPOT_LIGHT_COUNT]"+Ge,st+"spotLightDirection[SPOT_LIGHT_COUNT]"+Ge,zr+"spotLightRange[SPOT_LIGHT_COUNT]"+Ge,zr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Ge,zr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Ge,zr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Ge,st+"spotLightColor[SPOT_LIGHT_COUNT]"+Ge,fr].join(`
`);z.import(t2);var ut=mt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=mt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),qr=function(e,t){this.normal=e||new L(0,1,0),this.distance=t||0};qr.prototype={constructor:qr,distanceToPoint:function(e){return w.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new L);var r=this.distanceToPoint(e);return w.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/w.len(this.normal.array);w.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=w.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(w.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=w.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;w.sub(e,r.array,t.array),w.normalize(e,e);var h=w.dot(o,e);if(h===0)return null;i||(i=new L);var u=(w.dot(o,l)-s)/h;return w.scaleAndAdd(i.array,l,e,-u),i._dirty=!0,i}}(),applyTransform:function(){var e=N.create(),t=P.create(),r=P.create();return r[3]=1,function(i){i=i.array,w.scale(r,this.normal.array,this.distance),P.transformMat4(r,r,i),this.distance=w.dot(r,this.normal.array),N.invert(e,i),N.transpose(e,e),t[3]=0,w.copy(t,this.normal.array),P.transformMat4(t,t,e),w.copy(this.normal.array,t)}}(),copy:function(e){w.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new qr;return e.copy(this),e}};var Te=w.set,Va=w.copy,ka=w.transformMat4,vn=Math.min,pn=Math.max,qi=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new qr);this.boundingBox=new Ue,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=w.fromValues(0,0,0)};qi.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],l=r[5],h=r[6],u=r[7],f=r[8],d=r[9],c=r[10],v=r[11],p=r[12],m=r[13],g=r[14],T=r[15];Te(t[0].normal.array,o-i,u-s,v-f),t[0].distance=-(T-p),t[0].normalize(),Te(t[1].normal.array,o+i,u+s,v+f),t[1].distance=-(T+p),t[1].normalize(),Te(t[2].normal.array,o+n,u+l,v+d),t[2].distance=-(T+m),t[2].normalize(),Te(t[3].normal.array,o-n,u-l,v-d),t[3].distance=-(T-m),t[3].normalize(),Te(t[4].normal.array,o-a,u-h,v-c),t[4].distance=-(T-g),t[4].normalize(),Te(t[5].normal.array,o+a,u+h,v+c),t[5].distance=-(T+g),t[5].normalize();var x=this.boundingBox,_=this.vertices;if(T===0){var S=l/i,b=-g/(c-1),A=-g/(c+1),E=-A/l,M=-b/l;x.min.set(-E*S,-E,A),x.max.set(E*S,E,b),Te(_[0],-E*S,-E,A),Te(_[1],-E*S,E,A),Te(_[2],E*S,-E,A),Te(_[3],E*S,E,A),Te(_[4],-M*S,-M,b),Te(_[5],-M*S,M,b),Te(_[6],M*S,-M,b),Te(_[7],M*S,M,b)}else{var O=(-1-p)/i,C=(1-p)/i,B=(1-m)/l,G=(-1-m)/l,R=(-1-g)/c,H=(1-g)/c;x.min.set(Math.min(O,C),Math.min(G,B),Math.min(H,R)),x.max.set(Math.max(C,O),Math.max(B,G),Math.max(R,H));var W=x.min.array,j=x.max.array;Te(_[0],W[0],W[1],W[2]),Te(_[1],W[0],j[1],W[2]),Te(_[2],j[0],W[1],W[2]),Te(_[3],j[0],j[1],W[2]),Te(_[4],W[0],W[1],j[2]),Te(_[5],W[0],j[1],j[2]),Te(_[6],j[0],W[1],j[2]),Te(_[7],j[0],j[1],j[2])}},getTransformedBoundingBox:function(){var e=w.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,o=t.max,s=a.array,l=o.array,h=i[0];ka(e,h,n),Va(s,e),Va(l,e);for(var u=1;u<8;u++)h=i[u],ka(e,h,n),s[0]=vn(e[0],s[0]),s[1]=vn(e[1],s[1]),s[2]=vn(e[2],s[2]),l[0]=pn(e[0],l[0]),l[1]=pn(e[1],l[1]),l[2]=pn(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};var wr=mt.extend(function(){return{projectionMatrix:new U,invProjectionMatrix:new U,viewMatrix:new U,frustum:new qi}},function(){this.update(!0)},{update:function(e){mt.prototype.update.call(this,e),U.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),U.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){U.copy(this.viewMatrix,e),U.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){U.copy(this.projectionMatrix,e),U.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=P.create();return function(t,r){var i=r!==void 0?r:new er,n=t.array[0],a=t.array[1];return P.set(e,n,a,-1,1),P.transformMat4(e,e,this.invProjectionMatrix.array),P.transformMat4(e,e,this.worldTransform.array),w.scale(i.origin.array,e,1/e[3]),P.set(e,n,a,1,1),P.transformMat4(e,e,this.invProjectionMatrix.array),P.transformMat4(e,e,this.worldTransform.array),w.scale(e,e,1/e[3]),w.sub(i.direction.array,e,i.origin.array),w.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),r2=N.create(),Wa=N.create(),mn={};function i2(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(mn[a])return mn[a];var o=we.genGUID();return mn[a]=o,o}function Yi(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}Yi.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};Yi.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};Yi.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var Gt=mt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Ue,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new ar(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof wr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof ut&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof wr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof ut&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=i2(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var o=0;o<n._children.length;o++){var s=n._children[o],l=a._children[o];i(s,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new Yi,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?r2:o.worldTransform.array,l=o.geometry;N.multiplyAffine(Wa,t.viewMatrix.array,s),(n&&!l.boundingBox||!this.isFrustumCulled(o,t,Wa))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,n)}},isFrustumCulled:function(){var e=new Ue,t=new U;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(n2);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var o=a.uniformTemplates[i],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var h=0;h<s.length;h++)l.value.push(s[h]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],h=r.takeCurrentTextureSlot(i,l);o.push(h)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function n2(e,t){if(t.castShadow&&!e.castShadow)return!0}var xi=li.isPowerOfTwo,a2=["px","nx","py","ny","pz","nz"],tr=F.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=D.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var h=this.mipmaps[l];this._updateTextureData(t,h,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,o){for(var s=0;s<6;s++){var l=a2[s],h=t.image&&t.image[l];h?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,h):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,i,n,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?xi(this.image.px.width)&&xi(this.image.px.height):xi(this.width)&&xi(this.height)},isRenderable:function(){return this.image.px?cr(this.image.px)&&cr(this.image.nx)&&cr(this.image.py)&&cr(this.image.ny)&&cr(this.image.pz)&&cr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return we.each(e,function(n,a){var o=ie.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=n,i.image[a]=o}),this}});Object.defineProperty(tr.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(tr.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function cr(e){return e.width>0&&e.height>0}var Re=wr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=wr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Ti="framebuffer",bt="renderbuffer",Xa=bt+"_width",ja=bt+"_height",gn=bt+"_attached",_n="depthtexture_attached",Xt=D.FRAMEBUFFER,Gr=D.RENDERBUFFER,Wr=D.DEPTH_ATTACHMENT,Zo=D.COLOR_ATTACHMENT0,Se=He.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new xr,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(Xt,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(n=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var h=l[o];this._doDetach(t,o,h)}}if(!r.get(_n)&&this.depthBuffer){r.miss(bt)&&r.put(bt,t.createRenderbuffer());var u=r.get(bt);(n!==r.get(Xa)||a!==r.get(ja))&&(t.bindRenderbuffer(Gr,u),t.renderbufferStorage(Gr,t.DEPTH_COMPONENT16,n,a),r.put(Xa,n),r.put(ja,a),t.bindRenderbuffer(Gr,null)),r.get(gn)||(t.framebufferRenderbuffer(Xt,Wr,Gr,u),r.put(gn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(Xt,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===F.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?D.TEXTURE_CUBE_MAP:D.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(Xt)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(Ti)&&t.put(Ti,e.gl.createFramebuffer()),t.get(Ti)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||Zo,r=r||D.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var o=this._cache;o.use(i.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===Wr||r===D.DEPTH_STENCIL_ATTACHMENT){var h=e.getGLExtension("WEBGL_depth_texture");if(h||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==D.DEPTH_COMPONENT&&t.format!==D.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var u=this._cache.get(bt);u&&(n.framebufferRenderbuffer(Xt,Wr,Gr,null),n.deleteRenderbuffer(u),this._cache.put(bt,!1)),this._cache.put(gn,!1),this._cache.put(_n,!0)}}return n.framebufferTexture2D(Xt,r,i,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(Xt,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===Wr||t===D.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(_n,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(bt);i&&t.deleteRenderbuffer(i);var n=r.get(Ti);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});Se.DEPTH_ATTACHMENT=Wr;Se.COLOR_ATTACHMENT0=Zo;Se.STENCIL_ATTACHMENT=D.STENCIL_ATTACHMENT;Se.DEPTH_STENCIL_ATTACHMENT=D.DEPTH_STENCIL_ATTACHMENT;var o2=["px","nx","py","ny","pz","nz"],$n=He.extend(function(){var e={position:new L,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Re({fov:90}),nx:new Re({fov:90}),py:new Re({fov:90}),ny:new Re({fov:90}),pz:new Re({fov:90}),nz:new Re({fov:90})};return t.px.lookAt(L.POSITIVE_X,L.NEGATIVE_Y),t.nx.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y),t.py.lookAt(L.POSITIVE_Y,L.POSITIVE_Z),t.ny.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z),t.pz.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y),t.nz.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y),e._frameBuffer=new Se,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,o=0;o<6;o++){var s=o2[o],l=this._cameras[s];if(L.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var h=t.getBoundingBox();h.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(h),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),Ki=$.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,h=0;h<=t;h++){var u=h/t;if(i.push([2*u-1,2*l-1,0]),n&&n.push([u,l]),a&&a.push([0,0,1]),h<t&&s<e){var f=h+s*(t+1);o.push([f,f+1,f+t+1]),o.push([f+t+1,f+1,f+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new Ue,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),_e=new U,qo=$.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:dr("px",this.depthSegments,this.heightSegments),nx:dr("nx",this.depthSegments,this.heightSegments),py:dr("py",this.widthSegments,this.depthSegments),ny:dr("ny",this.widthSegments,this.depthSegments),pz:dr("pz",this.widthSegments,this.heightSegments),nz:dr("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new ie.Uint16Array(i);var o=0,s=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var h=t[a],u=l.attributes[h].value,f=l.attributes[h].size,d=h==="normal",c=0;c<u.length;c++){var v=u[c];this.inside&&d&&(v=-v),this.attributes[h].value[c+f*s]=v}for(var p=l.indices.length,c=0;c<l.indices.length;c++)this.indices[c+o]=s+l.indices[this.inside?p-c-1:c];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Ue,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function dr(e,t,r){_e.identity();var i=new Ki({widthSegments:t,heightSegments:r});switch(e){case"px":U.translate(_e,_e,L.POSITIVE_X),U.rotateY(_e,_e,Math.PI/2);break;case"nx":U.translate(_e,_e,L.NEGATIVE_X),U.rotateY(_e,_e,-Math.PI/2);break;case"py":U.translate(_e,_e,L.POSITIVE_Y),U.rotateX(_e,_e,-Math.PI/2);break;case"ny":U.translate(_e,_e,L.NEGATIVE_Y),U.rotateX(_e,_e,Math.PI/2);break;case"pz":U.translate(_e,_e,L.POSITIVE_Z);break;case"nz":U.translate(_e,_e,L.NEGATIVE_Z),U.rotateY(_e,_e,Math.PI);break}return i.applyTransform(_e),i}const s2=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;z.import(s2);var $r=Oe.extend(function(){var e=new z({vertex:z.source("clay.skybox.vertex"),fragment:z.source("clay.skybox.fragment")}),t=new nt({shader:e,depthMask:!1});return{scene:null,geometry:new qo,material:t,environmentMap:null,culling:!1,_dummyCamera:new Re}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=F.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),U.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),l2=542327876,h2=131072,u2=512,f2=4;function Qn(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var c2=31,d2=Qn("DXT1"),v2=Qn("DXT3"),p2=Qn("DXT5"),m2=0,g2=1,_2=2,y2=3,x2=4,T2=7,w2=20,S2=21,b2=28,E2={parse:function(e,t){var r=new Int32Array(e,0,c2);if(r[m2]!==l2||!r(w2)&f2)return null;var i=r(S2),n=r[x2],a=r[y2],o=r[b2]&u2,s=r[_2]&h2,l,h;switch(i){case d2:l=8,h=F.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case v2:l=16,h=F.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case p2:l=16,h=F.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var u=r[g2]+4,f=o?6:1,d=1;s&&(d=Math.max(1,r[T2]));for(var c=[],v=0;v<f;v++){var p=n,m=a;c[v]=new Y({width:p,height:m,format:h});for(var g=[],T=0;T<d;T++){var x=Math.max(4,p)/4*Math.max(4,m)/4*l,_=new Uint8Array(e,u,x);u+=x,p*=.5,m*=.5,g[T]=_}c[v].pixels=g[0],s&&(c[v].mipmaps=g)}if(t)t.width=c[0].width,t.height=c[0].height,t.format=c[0].format,t.pixels=c[0].pixels,t.mipmaps=c[0].mipmaps;else return c[0]}},Di=String.fromCharCode,A2=8,L2=32767;function M2(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function C2(e,t,r){for(var i="",n=t;n<r;n++)i+=Di(e[n]);return i}function D2(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function Za(e,t,r,i){for(var n=0,a=0,o=i;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<n>>>0;s>0;s--)D2(e[a-1],e[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function P2(e,t,r,i){if(i<A2|i>L2)return Za(e,t,r,i);var n=t[r++];if(n!=2)return Za(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][n]=s}else for(;o--;)e[a++][n]=t[r++]}return r}var N2={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(C2(i,0,2)==="#?"){for(var a=2;a<n&&!(Di(i[a])===`
`&&Di(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var o="";a<n;a++){var s=Di(i[a]);if(s===`
`)break;o+=s}var l=o.split(" "),h=parseInt(l[1]),u=parseInt(l[3]);if(!(!u||!h)){for(var f=a+1,d=[],c=0;c<u;c++){d[c]=[];for(var v=0;v<4;v++)d[c][v]=0}for(var p=new Float32Array(u*h*4),m=0,g=0;g<h;g++){var f=P2(d,i,f,u);if(!f)return null;for(var c=0;c<u;c++)M2(d[c],p,m,r),m+=4}return t||(t=new Y),t.width=u,t.height=h,t.pixels=p,t.type=F.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},gt={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new Y({width:0,height:0,sRGB:!1}),gt._fetchTexture(e,function(a){N2.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new Y({width:0,height:0}),gt._fetchTexture(e,function(a){E2.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new Y,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(n=new tr,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var o=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},gt.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new $n,a=new $r({scene:new Gt});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var o=a.getImageData(0,0,i,n),s=a.createImageData(i,n),l=0;l<o.data.length;l+=4){if(t){var h=o.data[l],u=o.data[l+1],f=o.data[l+2],d=Math.abs(h-u)+Math.abs(u-f);if(d>20)return console.warn("Given image is not a height map"),e}var c,v,p,m;l%(i*4)===0?(c=o.data[l],p=o.data[l+4]):l%(i*4)===(i-1)*4?(c=o.data[l-4],p=o.data[l]):(c=o.data[l-4],p=o.data[l+4]),l<i*4?(v=o.data[l],m=o.data[l+i*4]):l>i*(n-1)*4?(v=o.data[l-i*4],m=o.data[l]):(v=o.data[l-i*4],m=o.data[l+i*4]),s.data[l]=c-p+127,s.data[l+1]=v-m+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var o=n.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],h=o.data[s+1],u=o.data[s+2],f=Math.abs(l-h)+Math.abs(h-u);if(f>r)return!1}return!0},_fetchTexture:function(e,t,r){ie.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<n;s++)for(var l=0;l<n;l++){var h=l%2?s%2:s%2-1;h&&o.fillRect(s*t,l*t,t,t)}var u=new Y({image:a,anisotropic:8});return u},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new Y({image:t});return i}},Bn=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function Fn(e){return"_on"+e}var zn=function(e){var t=this;this._texture=new Y({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),Y.prototype.dispose.call(this,r)}}),Bn.forEach(function(r){this[Fn(r)]=function(i){i.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};zn.prototype={constructor:zn,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new L,t=new L,r=new L,i=new q,n=new q,a=new q,o=new q,s=new L;return function(l,h,u,f){var d=h.geometry,c=d.attributes.position,v=d.attributes.texcoord0,p=L.dot,m=L.cross;c.get(u[0],e.array),c.get(u[1],t.array),c.get(u[2],r.array),v.get(u[0],i.array),v.get(u[1],n.array),v.get(u[2],a.array),m(s,t,r);var g=p(e,s),T=p(f,s)/g;m(s,r,e);var x=p(f,s)/g;m(s,e,t);var _=p(f,s)/g;q.scale(o,i,T),q.scaleAndAdd(o,o,n,x),q.scaleAndAdd(o,o,a,_);var S=o.x*this._chart.getWidth(),b=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:S,zrY:b})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Bn.forEach(function(t){e.on(t,this[Fn(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Bn.forEach(function(r){e.off(r,this[Fn(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Sr=wr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=wr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const R2=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;z.import(R2);var O2=new Ki,qa=new Oe({geometry:O2,frustumCulling:!1}),I2=new Sr,Ee=He.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new z(z.source("clay.compositor.vertex"),this.fragment),t=new nt({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||D.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){qa.material=this.material,e.renderPass([qa],I2)},dispose:function(e){}});const B2=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,F2=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var _t={},yn=["px","nx","py","ny","pz","nz"];_t.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=_t.generateNormalDistribution(),n=_t.integrateBRDF(e,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new tr({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var h=Math.min(a,o),u=Math.log(h)/Math.log(2)+1,f=new nt({shader:new z({vertex:z.source("clay.skybox.vertex"),fragment:F2})});f.set("normalDistribution",i),r.encodeRGBM&&f.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&f.define("fragment","RGBM_DECODE");var d=new Gt,c;if(t.textureType==="texture2D"){var v=new tr({width:a,height:o,type:s===F.FLOAT?F.HALF_FLOAT:s});gt.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}c=new $r({scene:d,material:f}),c.material.set("environmentMap",t);var p=new $n({texture:l});r.encodeRGBM&&(s=l.type=F.UNSIGNED_BYTE);for(var m=new Y({width:a,height:o,type:s}),g=new Se({depthBuffer:!1}),T=ie[s===F.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],x=0;x<u;x++){l.mipmaps[x]={pixels:{}},c.material.set("roughness",x/(u-1));for(var _=m.width,S=2*Math.atan(_/(_-.5))/Math.PI*180,b=0;b<yn.length;b++){var A=new T(m.width*m.height*4);g.attach(m),g.bind(e);var E=p.getCamera(yn[b]);E.fov=S,e.render(d,E),e.gl.readPixels(0,0,m.width,m.height,F.RGBA,s,A),g.unbind(e),l.mipmaps[x].pixels[yn[b]]=A}m.width/=2,m.height/=2,m.dirty()}return g.dispose(e),m.dispose(e),c.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:u}};_t.integrateBRDF=function(e,t){t=t||_t.generateNormalDistribution();var r=new Se({depthBuffer:!1}),i=new Ee({fragment:B2}),n=new Y({width:512,height:256,type:F.HALF_FLOAT,wrapS:F.CLAMP_TO_EDGE,wrapT:F.CLAMP_TO_EDGE,minFilter:F.NEAREST,magFilter:F.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};_t.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new Y({width:r,height:i,type:F.FLOAT,minFilter:F.NEAREST,magFilter:F.NEAREST,wrapS:F.CLAMP_TO_EDGE,wrapT:F.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),o=[],s=0;s<r;s++){for(var l=s/r,h=l*l,u=0;u<i;u++){var f=(u<<16|u>>>16)>>>0;f=((f&1431655765)<<1|(f&2863311530)>>>1)>>>0,f=((f&858993459)<<2|(f&3435973836)>>>2)>>>0,f=((f&252645135)<<4|(f&4042322160)>>>4)>>>0,f=(((f&16711935)<<8|(f&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-f)/(1+(h*h-1)*f));o[u]=d}for(var u=0;u<i;u++){var c=(u*r+s)*4,d=o[u],v=Math.sqrt(1-d*d),p=u/i,m=2*Math.PI*p;a[c]=v*Math.cos(m),a[c+1]=d,a[c+2]=v*Math.sin(m),a[c+3]=1}}return n.pixels=a,n};var z2=ut.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=_t.generateNormalDistribution(),this._brdfLookup=_t.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=_t.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),G2=ut.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new ie.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),Yo={},Qt=["px","nx","py","ny","pz","nz"];function U2(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var H2={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function V2(e,t,r,i){for(var n=new ie.Float32Array(27),a=w.create(),o=w.create(),s=w.create(),l=0;l<9;l++){for(var h=w.create(),u=0;u<Qt.length;u++){for(var f=t[Qt[u]],d=w.create(),c=0,v=0,p=H2[Qt[u]],m=0;m<i;m++)for(var g=0;g<r;g++){a[0]=g/(r-1)*2-1,a[1]=m/(i-1)*2-1,a[2]=-1,w.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=f[v++]/255,o[1]=f[v++]/255,o[2]=f[v++]/255;var T=f[v++]/255*8.12;o[0]*=T,o[1]*=T,o[2]*=T,w.scaleAndAdd(d,d,o,U2(s,l)*-a[2]),c+=-a[2]}w.scaleAndAdd(h,h,d,1/c)}n[l*3]=h[0]/6,n[l*3+1]=h[1]/6,n[l*3+2]=h[2]/6}return n}Yo.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new Gt,a=64;t.textureType==="texture2D"?i=new $r({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new $r({scene:n,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new Y({width:o,height:s}),h=new Se;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var u=new $n({texture:l}),f={},d=0;d<Qt.length;d++){f[Qt[d]]=new Uint8Array(o*s*4);var c=u.getCamera(Qt[d]);c.fov=90,h.attach(l),h.bind(e),e.render(n,c),e.gl.readPixels(0,0,o,s,F.RGBA,F.UNSIGNED_BYTE,f[Qt[d]]),h.unbind(e)}return i.dispose(e),h.dispose(e),l.dispose(e),V2(e,f,o,s)};var K={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return yt(t.dataIndex)?ca(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return yt(t.name)?ca(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},k2=$.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,h,u,f,d,c,v,x=this.radius,p=this.phiStart,m=this.phiLength,g=this.thetaStart,T=this.thetaLength,x=this.radius,_=[],S=[],b=0,A=1/x;for(v=0;v<=e;v++)for(c=0;c<=t;c++)f=c/t,d=v/e,l=-x*Math.cos(p+f*m)*Math.sin(g+d*T),h=x*Math.cos(g+d*T),u=x*Math.sin(p+f*m)*Math.sin(g+d*T),_[0]=l,_[1]=h,_[2]=u,S[0]=f,S[1]=d,r.set(b,_),i.set(b,S),_[0]*=A,_[1]*=A,_[2]*=A,n.set(b,_),b++;var E,M,O,C,B=t+1,G=0;for(v=0;v<e;v++)for(c=0;c<t;c++)M=v*B+c,E=v*B+c+1,C=(v+1)*B+c+1,O=(v+1)*B+c,s[G++]=E,s[G++]=M,s[G++]=C,s[G++]=M,s[G++]=O,s[G++]=C;this.boundingBox=new Ue,this.boundingBox.max.set(x,x,x),this.boundingBox.min.set(-x,-x,-x)}}),W2=ut.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),X2=ut.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ut.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),j2=ut.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ut.prototype.clone.call(this);return e.range=this.range,e}}),Z2=ut.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ut.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),ee=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=P.fromValues(e,t,r,i),this._dirty=!0};ee.prototype={constructor:ee,add:function(e){return P.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ee(this.x,this.y,this.z,this.w)},copy:function(e){return P.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return P.dist(this.array,e.array)},distance:function(e){return P.distance(this.array,e.array)},div:function(e){return P.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return P.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return P.dot(this.array,e.array)},len:function(){return P.len(this.array)},length:function(){return P.length(this.array)},lerp:function(e,t,r){return P.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return P.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return P.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return P.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return P.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return P.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return P.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return P.random(this.array,e),this._dirty=!0,this},scale:function(e){return P.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return P.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return P.sqrDist(this.array,e.array)},squaredDistance:function(e){return P.squaredDistance(this.array,e.array)},sqrLen:function(){return P.sqrLen(this.array)},squaredLength:function(){return P.squaredLength(this.array)},sub:function(e){return P.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return P.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return P.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return P.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Ur=Object.defineProperty;if(Ur){var wi=ee.prototype;Ur(wi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Ur(wi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Ur(wi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Ur(wi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ee.add=function(e,t,r){return P.add(e.array,t.array,r.array),e._dirty=!0,e};ee.set=function(e,t,r,i,n){P.set(e.array,t,r,i,n),e._dirty=!0};ee.copy=function(e,t){return P.copy(e.array,t.array),e._dirty=!0,e};ee.dist=function(e,t){return P.distance(e.array,t.array)};ee.distance=ee.dist;ee.div=function(e,t,r){return P.divide(e.array,t.array,r.array),e._dirty=!0,e};ee.divide=ee.div;ee.dot=function(e,t){return P.dot(e.array,t.array)};ee.len=function(e){return P.length(e.array)};ee.lerp=function(e,t,r,i){return P.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ee.min=function(e,t,r){return P.min(e.array,t.array,r.array),e._dirty=!0,e};ee.max=function(e,t,r){return P.max(e.array,t.array,r.array),e._dirty=!0,e};ee.mul=function(e,t,r){return P.multiply(e.array,t.array,r.array),e._dirty=!0,e};ee.multiply=ee.mul;ee.negate=function(e,t){return P.negate(e.array,t.array),e._dirty=!0,e};ee.normalize=function(e,t){return P.normalize(e.array,t.array),e._dirty=!0,e};ee.random=function(e,t){return P.random(e.array,t),e._dirty=!0,e};ee.scale=function(e,t,r){return P.scale(e.array,t.array,r),e._dirty=!0,e};ee.scaleAndAdd=function(e,t,r,i){return P.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};ee.sqrDist=function(e,t){return P.sqrDist(e.array,t.array)};ee.squaredDistance=ee.sqrDist;ee.sqrLen=function(e){return P.sqrLen(e.array)};ee.squaredLength=ee.sqrLen;ee.sub=function(e,t,r){return P.subtract(e.array,t.array,r.array),e._dirty=!0,e};ee.subtract=ee.sub;ee.transformMat4=function(e,t,r){return P.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};ee.transformQuat=function(e,t,r){return P.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var te={};te.create=function(){var e=new Ve(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};te.clone=function(e){var t=new Ve(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};te.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};te.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};te.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};te.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*a-n*i;return o?(o=1/o,e[0]=a*o,e[1]=-i*o,e[2]=-n*o,e[3]=r*o,e):null};te.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};te.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};te.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],h=r[2],u=r[3];return e[0]=i*s+a*l,e[1]=n*s+o*l,e[2]=i*h+a*u,e[3]=n*h+o*u,e};te.mul=te.multiply;te.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=i*-s+a*l,e[3]=n*-s+o*l,e};te.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=n*s,e[2]=a*l,e[3]=o*l,e};te.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};te.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var qe=function(){this.array=te.create(),this._dirty=!0};qe.prototype={constructor:qe,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new qe().copy(this)},copy:function(e){return te.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return te.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return te.determinant(this.array)},identity:function(){return te.identity(this.array),this._dirty=!0,this},invert:function(){return te.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return te.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return te.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return te.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return te.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return te.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return te.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return te.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};qe.adjoint=function(e,t){return te.adjoint(e.array,t.array),e._dirty=!0,e};qe.copy=function(e,t){return te.copy(e.array,t.array),e._dirty=!0,e};qe.determinant=function(e){return te.determinant(e.array)};qe.identity=function(e){return te.identity(e.array),e._dirty=!0,e};qe.invert=function(e,t){return te.invert(e.array,t.array),e._dirty=!0,e};qe.mul=function(e,t,r){return te.mul(e.array,t.array,r.array),e._dirty=!0,e};qe.multiply=qe.mul;qe.rotate=function(e,t,r){return te.rotate(e.array,t.array,r),e._dirty=!0,e};qe.scale=function(e,t,r){return te.scale(e.array,t.array,r.array),e._dirty=!0,e};qe.transpose=function(e,t){return te.transpose(e.array,t.array),e._dirty=!0,e};var ae={};ae.create=function(){var e=new Ve(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};ae.clone=function(e){var t=new Ve(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};ae.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};ae.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};ae.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*s-a*o)*l,e[5]=(i*o-r*s)*l,e):null};ae.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};ae.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=r[0],u=r[1],f=r[2],d=r[3],c=r[4],v=r[5];return e[0]=i*h+a*u,e[1]=n*h+o*u,e[2]=i*f+a*d,e[3]=n*f+o*d,e[4]=i*c+a*v+s,e[5]=n*c+o*v+l,e};ae.mul=ae.multiply;ae.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=Math.sin(r),u=Math.cos(r);return e[0]=i*u+a*h,e[1]=n*u+o*h,e[2]=i*-h+a*u,e[3]=n*-h+o*u,e[4]=s,e[5]=l,e};ae.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=r[0],u=r[1];return e[0]=i*h,e[1]=n*h,e[2]=a*u,e[3]=o*u,e[4]=s,e[5]=l,e};ae.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=r[0],u=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=i*h+a*u+s,e[5]=n*h+o*u+l,e};ae.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var Je=function(){this.array=ae.create(),this._dirty=!0};Je.prototype={constructor:Je,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Je().copy(this)},copy:function(e){return ae.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ae.determinant(this.array)},identity:function(){return ae.identity(this.array),this._dirty=!0,this},invert:function(){return ae.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ae.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ae.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ae.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ae.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ae.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ae.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ae.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Je.copy=function(e,t){return ae.copy(e.array,t.array),e._dirty=!0,e};Je.determinant=function(e){return ae.determinant(e.array)};Je.identity=function(e){return ae.identity(e.array),e._dirty=!0,e};Je.invert=function(e,t){return ae.invert(e.array,t.array),e._dirty=!0,e};Je.mul=function(e,t,r){return ae.mul(e.array,t.array,r.array),e._dirty=!0,e};Je.multiply=Je.mul;Je.rotate=function(e,t,r){return ae.rotate(e.array,t.array,r),e._dirty=!0,e};Je.scale=function(e,t,r){return ae.scale(e.array,t.array,r.array),e._dirty=!0,e};Je.translate=function(e,t,r){return ae.translate(e.array,t.array,r.array),e._dirty=!0,e};var De=function(){this.array=Z.create(),this._dirty=!0};De.prototype={constructor:De,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return Z.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new De().copy(this)},copy:function(e){return Z.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Z.determinant(this.array)},fromMat2d:function(e){return Z.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return Z.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return Z.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return Z.identity(this.array),this._dirty=!0,this},invert:function(){return Z.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Z.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Z.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Z.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Z.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Z.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Z.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Z.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return Z.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return Z.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};De.adjoint=function(e,t){return Z.adjoint(e.array,t.array),e._dirty=!0,e};De.copy=function(e,t){return Z.copy(e.array,t.array),e._dirty=!0,e};De.determinant=function(e){return Z.determinant(e.array)};De.identity=function(e){return Z.identity(e.array),e._dirty=!0,e};De.invert=function(e,t){return Z.invert(e.array,t.array),e};De.mul=function(e,t,r){return Z.mul(e.array,t.array,r.array),e._dirty=!0,e};De.multiply=De.mul;De.fromMat2d=function(e,t){return Z.fromMat2d(e.array,t.array),e._dirty=!0,e};De.fromMat4=function(e,t){return Z.fromMat4(e.array,t.array),e._dirty=!0,e};De.fromQuat=function(e,t){return Z.fromQuat(e.array,t.array),e._dirty=!0,e};De.normalFromMat4=function(e,t){return Z.normalFromMat4(e.array,t.array),e._dirty=!0,e};De.rotate=function(e,t,r){return Z.rotate(e.array,t.array,r),e._dirty=!0,e};De.scale=function(e,t,r){return Z.scale(e.array,t.array,r.array),e._dirty=!0,e};De.transpose=function(e,t){return Z.transpose(e.array,t.array),e._dirty=!0,e};De.translate=function(e,t,r){return Z.translate(e.array,t.array,r.array),e._dirty=!0,e};var q2={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,o=0,s=n.length;o<s;o++)a&&(a=a[n[o]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,h=new Xs(i,t),u=this;return h.during(function(){u.__zr&&u.__zr.refresh()}).done(function(){var f=l.indexOf(h);f>=0&&l.splice(f,1)}),l.push(h),this.__zr&&this.__zr.animation.addAnimator(h),h},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const Ko=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Y2=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,K2=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,$2=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Q2=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,J2=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,el=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(mt.prototype,q2);z.import(Ko);z.import(ko);z.import(Y2);z.import(K2);z.import($2);z.import(Q2);z.import(J2);z.import(el);function tl(e){return!e||e==="none"}function $o(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function rl(e){return e.getZr&&e.setOption}var il=Gt.prototype.addToScene,nl=Gt.prototype.removeFromScene;Gt.prototype.addToScene=function(e){if(il.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Gt.prototype.removeFromScene=function(e){nl.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};nt.prototype.setTextureImage=function(e,t,r,i){if(this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),tl(t)||(o=y.loadTexture(t,r,i,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var y={};y.Renderer=at;y.Node=mt;y.Mesh=Oe;y.Shader=z;y.Material=nt;y.Texture=F;y.Texture2D=Y;y.Geometry=$;y.SphereGeometry=k2;y.PlaneGeometry=Ki;y.CubeGeometry=qo;y.AmbientLight=W2;y.DirectionalLight=X2;y.PointLight=j2;y.SpotLight=Z2;y.PerspectiveCamera=Re;y.OrthographicCamera=Sr;y.Vector2=q;y.Vector3=L;y.Vector4=ee;y.Quaternion=oe;y.Matrix2=qe;y.Matrix2d=Je;y.Matrix3=De;y.Matrix4=U;y.Plane=qr;y.Ray=er;y.BoundingBox=Ue;y.Frustum=qi;var Si=null;function al(){return Si!==null||(Si=gt.createBlank("rgba(255,255,255,0)").image),Si}function Ya(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Ka(e){if((e.wrapS===F.REPEAT||e.wrapT===F.REPEAT)&&e.image){var t=Ya(e.width),r=Ya(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}y.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new js(20);if(rl(e)){var l=e.__textureid__,h=s.get(a+l);if(h)h.texture.surface.setECharts(e),i&&i(h.texture);else{var u=new zn(e);u.onupdate=function(){t.getZr().refresh()},h={texture:u.getTexture()};for(var o=0;o<n.length;o++)h.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_ec__"+h.texture.__uid__,e.__textureid__=l,s.put(a+l,h),i&&i(h.texture)}return h.texture}else if($o(e)){var l=e.__textureid__,h=s.get(a+l);if(!h){h={texture:new y.Texture2D({image:e})};for(var o=0;o<n.length;o++)h.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_image__"+h.texture.__uid__,e.__textureid__=l,s.put(a+l,h),Ka(h.texture),i&&i(h.texture)}return h.texture}else{var h=s.get(a+e);if(h)h.callbacks?h.callbacks.push(i):i&&i(h.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){h={callbacks:[i]};var f=gt.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){f.dirty(),h.callbacks.forEach(function(v){v&&v(f)}),h.callbacks=null});h.texture=f,s.put(a+e,h)}else{for(var f=new y.Texture2D({image:new Image}),o=0;o<n.length;o++)f[n[o]]=r[n[o]];h={texture:f,callbacks:[i]};var d=f.image;d.onload=function(){f.image=d,Ka(f),f.dirty(),h.callbacks.forEach(function(p){p&&p(f)}),h.callbacks=null},d.crossOrigin="Anonymous",d.src=e,f.image=al(),s.put(a+e,h)}return h.texture}};y.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=K.firstNotNull(e.exposure,1),o=new z2({intensity:K.firstNotNull(e.specularIntensity,1)}),s=new G2({intensity:K.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=y.loadTexture(n,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=Yo.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};y.createBlankTexture=gt.createBlank;y.isImage=$o;y.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};y.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=Do(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};y.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};y.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};y.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];y.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=z.source(e+".vertex"),r=z.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new z(t,r);return i.name=e,i};y.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=y.createShader(e),i=new nt({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};y.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),o=K.firstNotNull(n.get("textureTiling"),1),s=K.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?y.Texture.REPEAT:y.Texture.CLAMP_TO_EDGE,h={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var u=n.get("roughness"),f=n.get("metalness");f!=null?isNaN(f)&&(t.setTextureImage("metalnessMap",f,i,h),f=K.firstNotNull(n.get("metalnessAdjust"),.5)):f=0,u!=null?isNaN(u)&&(t.setTextureImage("roughnessMap",u,i,h),u=K.firstNotNull(n.get("roughnessAdjust"),.5)):u=.5;var d=n.get("normalTexture");t.setTextureImage("detailMap",a,i,h),t.setTextureImage("normalMap",d,i,h),t.set({roughness:u,metalness:f,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,h),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,h),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var c=n.get("hatchingTextures")||[];c.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),c[v],i,{anisotropic:8,wrapS:y.Texture.REPEAT,wrapT:y.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};y.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var fe=function(e,t){this.id=e,this.zr=t;try{this.renderer=new at({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new Kn({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Po({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};fe.prototype.setUnpainted=function(){};fe.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function Qo(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}fe.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(Qo,this),e.layer=null,this._viewsToDispose.push(e))}};fe.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(Qo,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};fe.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};fe.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};fe.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};fe.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};fe.prototype.needsRefresh=function(){this.zr.refresh()};fe.prototype.refresh=function(e){this._backgroundColor=e?y.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};fe.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};fe.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};fe.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var ol=1;fe.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?n(a):Pn(function(){n(a)}))}}this._accumulatingId=ol++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};fe.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Ri(this._textureList),Ri(this._geometriesList));for(var r=0;r<this.views.length;r++)sl(this.views[r].scene,e,t);this._textureList&&(Oi(this.renderer,this._textureList),Oi(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Ri(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Oi(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function bi(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function sl(e,t,r){var i,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var h=l.getTextureUniforms(),u=0;u<h.length;u++){var f=h[u],d=l.uniforms[f].value;if(d){if(d instanceof F)bi(d,t);else if(d instanceof Array)for(var c=0;c<d.length;c++)d[c]instanceof F&&bi(d[c],t)}}s!==n&&bi(s,r),i=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&bi(e.lights[a].cubemap,t)}fe.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Ri(this._textureList),Ri(this._geometriesList),Oi(this.renderer,this._textureList),Oi(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};fe.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};fe.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};fe.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};fe.prototype.onclick=fe.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};fe.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};fe.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};fe.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]};fe.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};fe.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var h={target:l};const u=Zs(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(u.dataIndex=this._lastDataIndex,u.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(h,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(u.eventData=this._lastEventData,this.zr.handler.dispatchToElement(h,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),u.eventData=o,u.dataIndex=n,u.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(h,e,t),s&&this.zr.handler.dispatchToElement(h,"mouseover",t))};fe.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(fe.prototype,Yn);var ll=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Xr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function hl(e){Xr(e,"itemStyle"),Xr(e,"lineStyle"),Xr(e,"areaStyle"),Xr(e,"label")}function Ei(e){e&&(e instanceof Array||(e=[e]),xt(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function ul(e){xt(e.series,function(t){qs(ll,t.type)>=0&&(hl(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Ei(e.xAxis3D),Ei(e.yAxis3D),Ei(e.zAxis3D),Ei(e.grid3D),Xr(e.geo3D)}function Jo(e){this._layers={},this._zr=e}Jo.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var h=r._layers,u=h[l];if(!u){if(u=h[l]=new fe("gl-"+l,i),i.painter.isSingleCanvas()){u.virtual=!0;var f=new Qs({z:1e4,style:{image:u.renderer.canvas},silent:!0});u.__hostImage=f,i.add(f)}i.painter.insertLayer(l,u)}return u.__hostImage&&u.__hostImage.setStyle({width:u.renderer.getWidth(),height:u.renderer.getHeight()}),u}function a(s,l){s&&s.traverse(function(h){h.isRenderable&&h.isRenderable()&&(h.ignorePicking=h.$ignorePicking!=null?h.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var h=t.getViewOfComponentModel(l),u=l.coordinateSystem;if(h.__ecgl__){var f;if(u){if(!u.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}f=u.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}f=u.viewGL}var f=u.viewGL,d=n(l);d.addView(f),h.afterRender&&h.afterRender(l,e,t,d),a(h.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),h=s.coordinateSystem;if(l.__ecgl__){if(h&&!h.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var u=h&&h.viewGL||l.viewGL,f=n(s);f.addView(u),l.afterRender&&l.afterRender(s,e,t,f),a(l.groupGL,s.get("silent"))}})};Ys(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof fe&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},h,u=this;function f(p,m){var g=u._zlevelList;p==null&&(p=-1/0);for(var T,x=0;x<g.length;x++){var _=g[x],S=u._layers[_];if(!S.__builtin__&&_>p&&_<m){T=S;break}}T&&T.renderToCanvas&&(o.save(),T.renderToCanvas(o),o.restore())}for(var d={ctx:o},c=0;c<s.length;c++){var v=s[c];v.zlevel!==h&&(f(h,v.zlevel),h=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return f(h,1/0),n}});Ks(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new Jo(r);i.update(e,t)});$s(ul);const $i={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Cr={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Dr={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var Qi=Mr.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});se(Qi.prototype,$i);se(Qi.prototype,Cr);se(Qi.prototype,Dr);var Hr=K.firstNotNull,$a={left:0,middle:1,right:2};function Qa(e){return e instanceof Array||(e=[e,e]),e}var hi=He.extend(function(){return{zr:null,viewGL:null,_center:new L,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new q,_panVelocity:new q,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Hr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Hr(e.get(d),s&&s.get(d))});var h=Hr(t.alpha,e.get("alpha"))||0,u=Hr(t.beta,e.get("beta"))||0,f=Hr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:h,beta:u,center:f,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(h),this.setBeta(u),this.setCenter(f),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new L,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===$a[this.rotateMouseButton]?this._mode="rotate":e.event.button===$a[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=Qa(this.panSensitivity),r=Qa(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(hi.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const ui={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},be={vec2:I,vec3:w,vec4:P,mat3:Z,mat4:N};var xn=be.vec3,Ja=[[0,0],[1,1]],Ut=$.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new $.Attribute("position","float",3,"POSITION"),positionPrev:new $.Attribute("positionPrev","float",3),positionNext:new $.Attribute("positionNext","float",3),prevPositionPrev:new $.Attribute("prevPositionPrev","float",3),prevPosition:new $.Attribute("prevPosition","float",3),prevPositionNext:new $.Attribute("prevPositionNext","float",3),offset:new $.Attribute("offset","float",1),color:new $.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=xn.dist(e,t)+xn.dist(r,t)+xn.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Ja)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Ja)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],h=t[0],u=t[1],f=t[2],d=r[0],c=r[1],v=r[2],p=i[0],m=i[1],g=i[2],T=this._getCubicCurveApproxStep(e,t,r,i),x=T*T,_=x*T,S=3*T,b=3*x,A=6*x,E=6*_,M=o-h*2+d,O=s-u*2+c,C=l-f*2+v,B=(h-d)*3-o+p,G=(u-c)*3-s+m,R=(f-v)*3-l+g,H=o,W=s,j=l,k=(h-o)*S+M*b+B*_,ne=(u-s)*S+O*b+G*_,X=(f-l)*S+C*b+R*_,he=M*A+B*E,re=O*A+G*E,ce=C*A+R*E,de=B*E,Q=G*E,Ae=R*E,ge=0,xe=0,ke=Math.ceil(1/T),ze=new Float32Array((ke+1)*3),ze=[],Ne=0,xe=0;xe<ke+1;xe++)ze[Ne++]=H,ze[Ne++]=W,ze[Ne++]=j,H+=k,W+=ne,j+=X,k+=he,ne+=re,X+=ce,he+=de,re+=Q,ce+=Ae,ge+=T,ge>1&&(H=k>0?Math.min(H,p):Math.max(H,p),W=ne>0?Math.min(W,m):Math.max(W,m),j=X>0?Math.min(j,g):Math.max(j,g));return this.addPolyline(ze,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,h=this.attributes.positionNext,u=this.attributes.color,f=this.attributes.offset,d=this.indices,c=this._vertexOffset,v,p;r=Math.max(r,.01);for(var m=i;m<n;m++){if(a)v=e[m],o?p=t[m]:p=t;else{var g=m*3;if(v=v||[],v[0]=e[g],v[1]=e[g+1],v[2]=e[g+2],o){var T=m*4;p=p||[],p[0]=t[T],p[1]=t[T+1],p[2]=t[T+2],p[3]=t[T+3]}else p=t}if(this.useNativeLine?m>1&&(s.copy(c,c-1),u.copy(c,c-1),c++):(m<n-1&&(l.set(c+2,v),l.set(c+3,v)),m>0&&(h.set(c-2,v),h.set(c-1,v)),s.set(c,v),s.set(c+1,v),u.set(c,p),u.set(c+1,p),f.set(c,r/2),f.set(c+1,-r/2),c+=2),this.useNativeLine)u.set(c,p),s.set(c,v),c++;else if(m>0){var x=this._triangleOffset*3,d=this.indices;d[x]=c-4,d[x+1]=c-3,d[x+2]=c-2,d[x+3]=c-3,d[x+4]=c-1,d[x+5]=c-2,this._triangleOffset+=2}}if(!this.useNativeLine){var _=this._vertexOffset,S=this._vertexOffset+n*2;l.copy(_,_+2),l.copy(_+1,_+3),h.copy(S-1,S-3),h.copy(S-2,S-4)}return this._vertexOffset=c,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});zt(Ut.prototype,ui);function Ii(e,t,r,i,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}Ii.prototype={constructor:Ii,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var h=[this.offsetX/this.width,this.offsetY/this.height],u=[[n/o+h[0],a/s+h[1]],[(n+t)/o+h[0],(a+r)/s+h[1]]];return u},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function Bi(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new Y({image:t,flipY:!1});var r=this;this._zr=Js(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Ii(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}Bi.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new Ii(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function Ft(){}Ft.prototype={constructor:Ft,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new y.DirectionalLight({shadowBias:.005}),this.ambientLight=new y.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=y.parseColor(n.get("color")).slice(0,3),r.color=y.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(y.directionFromAlphaBeta(o,s)),t.lookAt(y.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=y.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=y.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new $r,n._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&Do(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new y.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var h=l.image=document.createElement("canvas");h.width=h.height=16;var u=h.getContext("2d"),f=new Po({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});No(u,f),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=y.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var c=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[c]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var jt=be.vec3,es=$.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new $.Attribute("position","float",3,"POSITION"),normal:new $.Attribute("normal","float",3,"NORMAL"),color:new $.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=jt.create(),t=jt.create(),r=jt.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;jt.sub(e,n[1],n[0]),jt.sub(t,n[2],n[1]),jt.cross(r,e,t),jt.normalize(r,r);for(var h=0;h<4;h++)o.set(this._vertexOffset+h,n[h]),l.set(this._vertexOffset+h,a),s.set(this._vertexOffset+h,r);for(var u=this._faceOffset*3,h=0;h<6;h++)this.indices[u+h]=i[h]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});zt(es.prototype,ui);var Gn=K.firstNotNull,fl={x:0,y:2,z:1};function cl(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[fl[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function Ji(e,t,r){this.rootNode=new y.Node;var i=new y.Mesh({geometry:new Ut({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new y.Mesh({geometry:new es,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new y.Plane,this.linesMesh=i,this.quadsMesh=n}Ji.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(o,n,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);cl(this.rootNode,this.plane,s,this.faceInfo[3])};Ji.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var h=s.getModel("splitLine",r.getModel("splitLine"));if(h.get("show")){var u=h.getModel("lineStyle"),f=u.get("color"),d=Gn(u.get("opacity"),1),c=Gn(u.get("width"),1);f=yt(f)?f:[f];for(var v=a.getTicksCoords({tickModel:h}),p=0,m=0;m<v.length;m++){var g=v[m].coord,T=y.parseColor(f[p%f.length]);T[3]*=d;var x=[0,0,0],_=[0,0,0];x[o]=_[o]=g,x[1-o]=l[0],_[1-o]=l[1],e.addLine(x,_,T,c*n),p++}}}})};Ji.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var h=l.getModel("areaStyle"),u=h.get("color"),f=Gn(h.get("opacity"),1);u=yt(u)?u:[u];for(var d=n.getTicksCoords({tickModel:l,clamp:!0}),c=0,v=[0,0,0],p=[0,0,0],m=0;m<d.length;m++){var g=d[m].coord,T=[0,0,0],x=[0,0,0];if(T[a]=x[a]=g,T[1-a]=s[0],x[1-a]=s[1],m===0){v=T,p=x;continue}var _=y.parseColor(u[c%u.length]);_[3]*=f,e.addQuad([v,T,x,p],_),v=T,p=x,c++}}}})};var eo=[0,1,2,0,2,3],ts=$.extend(function(){return{attributes:{position:new $.Attribute("position","float",3,"POSITION"),texcoord:new $.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new $.Attribute("offset","float",2),color:new $.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,o,s,l;switch(n=n||0,r){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(i){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var h=e*4,u=this.attributes.offset;u.set(h,[a,l]),u.set(h+1,[s,l]),u.set(h+2,[s,o]),u.set(h+3,[a,o])},addSprite:function(e,t,r,i,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var s=0;s<eo.length;s++)this.indices[this._faceOffset*3+s]=eo[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,n,a,o){for(var s=e*4,l=this.attributes,h=0;h<4;h++)l.position.set(s+h,t);var u=l.texcoord;u.set(s,[i[0][0],i[0][1]]),u.set(s+1,[i[1][0],i[0][1]]),u.set(s+2,[i[1][0],i[1][1]]),u.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,o)}});zt(ts.prototype,ui);const dl=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;y.Shader.import(dl);const Jn=y.Mesh.extend(function(){var e=new ts({dynamic:!0}),t=new y.Material({shader:y.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var Zt=K.firstNotNull,qt={x:0,y:2,z:1};function ea(e,t){var r=new y.Mesh({geometry:new Ut({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new Jn;i.material.depthMask=!1;var n=new y.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var Tn={x:"y",y:"x",z:"y"};ea.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),C=r.getDevicePixelRatio(),h=s.getModel("axisLine",e.getModel("axisLine")),u=s.getModel("axisTick",e.getModel("axisTick")),f=s.getModel("axisLabel",e.getModel("axisLabel")),d=h.get("lineStyle.color");if(h.get("show")){var c=h.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],m=qt[n.dim];v[m]=l[0],p[m]=l[1],this.axisLineCoords=[v,p];var g=y.parseColor(d),T=Zt(c.get("width"),1),x=Zt(c.get("opacity"),1);g[3]*=x,a.addLine(v,p,g,T*C)}if(u.get("show")){var _=u.getModel("lineStyle"),S=y.parseColor(Zt(_.get("color"),d)),T=Zt(_.get("width"),1);S[3]*=Zt(_.get("opacity"),1);for(var b=n.getTicksCoords(),A=u.get("length"),E=0;E<b.length;E++){var M=b[E].coord,v=[0,0,0],p=[0,0,0],m=qt[n.dim],O=qt[Tn[n.dim]];v[m]=p[m]=M,p[O]=A,a.addLine(v,p,S,T*C)}}this.labelElements=[];var C=r.getDevicePixelRatio();if(f.get("show"))for(var b=n.getTicksCoords(),B=s.get("data"),G=f.get("margin"),R=n.getViewLabels(),E=0;E<R.length;E++){var H=R[E].tickValue,W=R[E].formattedLabel,j=R[E].rawLabel,M=n.dataToCoord(H),k=[0,0,0],m=qt[n.dim],O=qt[Tn[n.dim]];k[m]=k[m]=M,k[O]=G;var ne=f;B&&B[H]&&B[H].textStyle&&(ne=new Xi(B[H].textStyle,f,s.ecModel));var X=Zt(ne.get("color"),d),he=new Pi({style:Ni(ne,{text:W,fill:typeof X=="function"?X(n.type==="category"?j:n.type==="value"?H+"":H,E):X,verticalAlign:"top",align:"left"})}),re=t.add(he),ce=he.getBoundingRect();o.addSprite(k,[ce.width*C,ce.height*C],re),this.labelElements.push(he)}if(s.get("name")){var de=s.getModel("nameTextStyle"),k=[0,0,0],m=qt[n.dim],O=qt[Tn[n.dim]],Q=Zt(de.get("color"),d),Ae=de.get("borderColor"),T=de.get("borderWidth");k[m]=k[m]=(l[0]+l[1])/2,k[O]=s.get("nameGap");var he=new Pi({style:Ni(de,{text:s.get("name"),fill:Q,stroke:Ae,lineWidth:T})}),re=t.add(he),ce=he.getBoundingRect();o.addSprite(k,[ce.width*C,ce.height*C],re),he.__idx=this.labelElements.length,this.nameLabelElement=he}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};ea.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};const en=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;var to=K.firstNotNull;y.Shader.import(en);var Yt={x:0,y:2,z:1};const vl=oi.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new y.Material({shader:y.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new y.Material({shader:y.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new y.Node,this._control=new hi({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new Ji(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new ea(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new Bi({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new y.Mesh({geometry:new Ut({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Bi({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new Jn({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new y.Node,this._sceneHelper=new Ft,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new y.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(l){var h=r.getAxis(s.faceInfo[0]),u=r.getAxis(s.faceInfo[1]),f=Yt[s.faceInfo[0]],d=Yt[s.faceInfo[1]];h.contain(l.array[f])&&u.contain(l.array[d])&&(a=l)}}}if(a){var c=r.pointToData(a.array,[],!0);this._updateAxisPointer(c),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new y.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),h=r.getExtentMin(),u=this._axes[0].rootNode,f=this._axes[1].rootNode,d=this._axes[2].rootNode,c=this._faces,v=c[4].rootNode.invisible?h:l,p=c[2].rootNode.invisible?n:a,m=c[0].rootNode.invisible?o:s,g=c[2].rootNode.invisible?n:a,T=c[0].rootNode.invisible?s:o,x=c[4].rootNode.invisible?h:l;u.rotation.identity(),f.rotation.identity(),d.rotation.identity(),c[4].rootNode.invisible&&(this._axes[0].flipped=!0,u.rotation.rotateX(Math.PI)),c[0].rootNode.invisible&&(this._axes[1].flipped=!0,f.rotation.rotateZ(Math.PI)),c[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),u.position.set(0,p,v),f.position.set(m,g,0),d.position.set(T,0,x),u.update(),f.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new y.Vector4,new y.Vector4],r=new y.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,h=(t[1].y+t[0].y)/2,u,f;Math.abs(s/o)<.5?(u="center",f=h>r.y?"bottom":"top"):(f="middle",u=l>r.x?"left":"right"),i.setSpriteAlign(u,f,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(E){return K.firstNotNull(E.model.get("axisPointer.show"),a.get("show"))}function l(E){var M=E.model.getModel("axisPointer",a),O=M.getModel("lineStyle"),C=y.parseColor(O.get("color")),B=to(O.get("width"),1),G=to(O.get("opacity"),1);return C[3]*=G,{color:C,lineWidth:B}}for(var h=0;h<this._faces.length;h++){var u=this._faces[h];if(!u.rootNode.invisible){for(var f=u.faceInfo,d=f[3]<0?t.getAxis(f[2]).getExtentMin():t.getAxis(f[2]).getExtentMax(),c=Yt[f[2]],v=0;v<2;v++){var p=f[v],m=f[1-v],g=t.getAxis(p),T=t.getAxis(m);if(s(g)){var x=[0,0,0],_=[0,0,0],S=Yt[p],b=Yt[m];x[S]=_[S]=r[S],x[c]=_[c]=d,x[b]=T.getExtentMin(),_[b]=T.getExtentMax();var A=l(g);n.addLine(x,_,A.color,A.lineWidth*o)}}if(s(t.getAxis(f[2]))){var x=r.slice(),_=r.slice();_[c]=d;var A=l(t.getAxis(f[2]));n.addLine(x,_,A.color,A.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var h=n.getAxis(s.dim),u=h.model,f=u.getModel("axisPointer",a),d=f.getModel("label"),c=f.get("lineStyle.color");if(!(!d.get("show")||!f.get("show"))){var v=e[l],p=d.get("formatter"),m=h.scale.getLabel({value:v});if(p!=null)m=p(m,e);else if(h.scale.type==="interval"||h.scale.type==="log"){var g=Ro(h.scale.getTicks()[0]);m=v.toFixed(g+2)}var T=d.get("color"),x=new Pi({style:Ni(d,{text:m,fill:T||c,align:"left",verticalAlign:"top"})}),_=i.add(x),S=x.getBoundingRect(),b=this._api.getDevicePixelRatio(),A=s.rootNode.position.toArray(),E=Yt[o[s.dim]];A[E]+=(s.flipped?-1:1)*d.get("margin"),A[Yt[s.dim]]=h.dataToCoord(e[l]),r.geometry.addSprite(A,[S.width*b,S.height*b],_,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Qr(e){Oo.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Qr.prototype={constructor:Qr,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};Io(Qr,Oo);function Fi(e,t,r){ji.call(this,e,t,r)}Fi.prototype={constructor:Fi,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Io(Fi,ji);var zi=function(){this._pool={},this._allocatedTextures=[]};zi.prototype={constructor:zi,get:function(e){var t=ro(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new Y(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=ro(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var rs={width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.CLAMP_TO_EDGE,wrapT:D.CLAMP_TO_EDGE,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},wn=Object.keys(rs);function ro(e){we.defaultsWithPropList(e,rs,wn),pl(e);for(var t="",r=0;r<wn.length;r++){var i=wn[r],n=e[i].toString();t+=n}return t}function pl(e){var t=ml(e.width,e.height);e.format===D.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==D.NEAREST_MIPMAP_NEAREST||e.minFilter==D.NEAREST_MIPMAP_LINEAR?e.minFilter=D.NEAREST:(e.minFilter==D.LINEAR_MIPMAP_LINEAR||e.minFilter==D.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=D.LINEAR)),t||(e.wrapS=D.CLAMP_TO_EDGE,e.wrapT=D.CLAMP_TO_EDGE)}function ml(e,t){return(e&e-1)===0&&(t&t-1)===0}const gl=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var Pt=["px","nx","py","ny","pz","nz"];z.import(gl);function Sn(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function io(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var pt=He.extend(function(){return{softShadow:pt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Se,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new zi}},function(){this._gaussianPassH=new Ee({fragment:z.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Ee({fragment:z.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Ee({fragment:z.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,o=a;this.softShadow===pt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,n,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===pt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],h=[],u=[],f=[],d,c=0;c<this._lightsCastShadow.length;c++){var v=this._lightsCastShadow[c];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,u,h,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,f);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var m=this._shadowMapNumber[p],g=p+"_SHADOWMAP_COUNT",c=0;c<this._receivers.length;c++){var T=this._receivers[c],x=T.material;x.fragmentDefines[g]!==m&&(m>0?x.define("fragment",g,m):x.isDefined("fragment",g)&&x.undefine("fragment",g))}for(var c=0;c<this._receivers.length;c++){var T=this._receivers[c],x=T.material;d?x.define("fragment","SHADOW_CASCADE",d.shadowCascade):x.undefine("fragment","SHADOW_CASCADE")}var _=t.shadowUniforms;function S(O){return O.height}if(l.length>0){var b=l.map(S);if(_.directionalLightShadowMaps={value:l,type:"tv"},_.directionalLightMatrices={value:h,type:"m4v"},_.directionalLightShadowMapSizes={value:b,type:"1fv"},d){var A=u.slice(),E=u.slice();A.pop(),E.shift(),A.reverse(),E.reverse(),h.reverse(),_.shadowCascadeClipsNear={value:A,type:"1fv"},_.shadowCascadeClipsFar={value:E,type:"1fv"}}}if(o.length>0){var M=o.map(S),_=t.shadowUniforms;_.spotLightShadowMaps={value:o,type:"tv"},_.spotLightMatrices={value:s,type:"m4v"},_.spotLightShadowMapSizes={value:M,type:"1fv"}}f.length>0&&(_.pointLightShadowMaps={value:f,type:"tv"})},renderDirectionalLightShadow:function(){var e=new qi,t=new U,r=new Ue,i=new U,n=new U,a=new U,o=new U;return function(s,l,h,u,f,d,c){var v=this._getDepthMaterial(u),p={getMaterial:function(ce){return ce.shadowDepthMaterial||v},isMaterialChanged:io,getUniform:Sn,ifRender:function(ce){return ce.castShadow},sortCompare:at.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(h.viewMatrix)}var g=Math.min(-l.viewBoundingBoxLastFrame.min.z,h.far),T=Math.max(-l.viewBoundingBoxLastFrame.max.z,h.near),x=this._getDirectionalLightCamera(u,l,h),_=a.array;o.copy(x.projectionMatrix),N.invert(n.array,x.worldTransform.array),N.multiply(n.array,n.array,h.worldTransform.array),N.multiply(_,o.array,n.array);for(var S=[],b=h instanceof Re,A=(h.near+h.far)/(h.near-h.far),E=2*h.near*h.far/(h.near-h.far),M=0;M<=u.shadowCascade;M++){var O=T*Math.pow(g/T,M/u.shadowCascade),C=T+(g-T)*M/u.shadowCascade,B=O*u.cascadeSplitLogFactor+C*(1-u.cascadeSplitLogFactor);S.push(B),f.push(-(-B*A+E)/-B)}var G=this._getTexture(u,u.shadowCascade);c.push(G);var R=s.viewport,H=s.gl;this._frameBuffer.attach(G),this._frameBuffer.bind(s),H.clear(H.COLOR_BUFFER_BIT|H.DEPTH_BUFFER_BIT);for(var M=0;M<u.shadowCascade;M++){var W=S[M],j=S[M+1];b?N.perspective(t.array,h.fov/180*Math.PI,h.aspect,W,j):N.ortho(t.array,h.left,h.right,h.bottom,h.top,W,j),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(o);var k=r.min.array,ne=r.max.array;k[0]=Math.max(k[0],-1),k[1]=Math.max(k[1],-1),ne[0]=Math.min(ne[0],1),ne[1]=Math.min(ne[1],1),i.ortho(k[0],ne[0],k[1],ne[1],1,-1),x.projectionMatrix.multiplyLeft(i);var X=u.shadowResolution||512;s.setViewport((u.shadowCascade-M-1)*X,0,X,X,1);var he=l.updateRenderList(x);s.renderPass(he.opaque,x,p),this.softShadow===pt.VSM&&this._gaussianFilter(s,G,G.width);var re=new U;re.copy(x.viewMatrix).multiplyLeft(x.projectionMatrix),d.push(re.array),x.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(R)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),h={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:io,getUniform:Sn,ifRender:function(d){return d.castShadow},sortCompare:at.opaqueSortCompare},u=t.updateRenderList(o);e.renderPass(u.opaque,o,h),this._frameBuffer.unbind(e),this.softShadow===pt.VSM&&this._gaussianFilter(e,a,a.width);var f=new U;f.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),i.push(f.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var o=this._getDepthMaterial(r),s={getMaterial:function(T){return T.shadowDepthMaterial||o},getUniform:Sn,sortCompare:at.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},h=new Ue,u=r.getWorldPosition().array,f=new Ue,d=r.range;f.min.setArray(u),f.max.setArray(u);var c=new L(d,d,d);f.max.add(c),f.min.sub(c);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(T){if(T.isRenderable()&&T.castShadow){var x=T.geometry;if(!x.boundingBox){for(var _=0;_<Pt.length;_++)l[Pt[_]].push(T);return}if(h.transformFrom(x.boundingBox,T.worldTransform),!h.intersectBoundingBox(f))return;h.updateVertices();for(var _=0;_<Pt.length;_++)v[Pt[_]]=!1;for(var _=0;_<8;_++){var S=h.vertices[_],b=S[0]-u[0],A=S[1]-u[1],E=S[2]-u[2],M=Math.abs(b),O=Math.abs(A),C=Math.abs(E);M>O?M>C?v[b>0?"px":"nx"]=!0:v[E>0?"pz":"nz"]=!0:O>C?v[A>0?"py":"ny"]=!0:v[E>0?"pz":"nz"]=!0}for(var _=0;_<Pt.length;_++)v[Pt[_]]&&l[Pt[_]].push(T)}});for(var p=0;p<6;p++){var m=Pt[p],g=this._getPointLightCamera(r,m);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[m],g,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new nt({precision:this.precision,shader:new z(z.source(i+"vertex"),z.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===pt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:F.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new tr:i=new Y,i.width=n*t,i.height=n,this.softShadow===pt.VSM?(i.type=F.FLOAT,i.anisotropic=4):(i.minFilter=D.NEAREST,i.magFilter=D.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Re,nx:new Re,py:new Re,ny:new Re,pz:new Re,nz:new Re});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(L.POSITIVE_X,L.NEGATIVE_Y);break;case"nx":r.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y);break;case"py":r.lookAt(L.POSITIVE_Y,L.POSITIVE_Z);break;case"ny":r.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z);break;case"pz":r.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y);break;case"nz":r.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new U,t=new Ue,r=new Ue;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Sr);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),U.invert(e,o.worldTransform),U.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Re);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),N.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});pt.VSM=1;pt.PCF=2;var Jr=He.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),no=He.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof Jr)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),_l=no.extend(function(){return{_outputs:[],_texturePool:new zi,_frameBuffer:new Se({depthBuffer:!1})}},{addNode:function(e){no.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),yl=Jr.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Se},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],s=this._compositor.allocateTexture(a);this._outputTextures[n]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var h=e.getGLExtension("EXT_draw_buffers");if(h){var u=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&u.push(l);h.drawBuffersEXT(u)}e.saveClear(),e.clearBit=D.DEPTH_BUFFER_BIT|D.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),xl=Jr.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Tl=Jr.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Ee({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var h=this.outputs[s],u=this._compositor.allocateTexture(l);this._outputTextures[s]=u;var f=h.attachment||r.COLOR_ATTACHMENT0;typeof f=="string"&&(f=r[f]),o[f]=u}this._compositor.getFrameBuffer().bind(e);for(var f in o)this._compositor.getFrameBuffer().attach(o[f],f);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){Jr.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const wl=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,is=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,Sl=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,ns=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,bl=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,as=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,os=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,ss=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,ls=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,hs=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,El=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,us=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,fs=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function Al(e){e.import(wl),e.import(is),e.import(Sl),e.import(ns),e.import(bl),e.import(as),e.import(os),e.import(ss),e.import(ls),e.import(hs),e.import(El),e.import(us),e.import(fs)}Al(z);var Ll=/^#source\((.*?)\)/;function Ml(e,t){var r=new _l;t=t||{};var i={textures:{},parameters:{}},n=function(s,l){for(var h=0;h<e.nodes.length;h++){var u=e.nodes[h],f=Cl(u,i,t);f&&r.addNode(f)}};for(var a in e.parameters){var o=e.parameters[a];i.parameters[a]=ta(o)}return Nl(e,i,t,function(s){i.textures=s,n()}),r}function Cl(e,t,r){var i=e.type||"filter",n,a,o;if(i==="filter"){var s=e.shader.trim(),l=Ll.exec(s);if(l?n=z.source(l[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){a={};for(var h in e.inputs)typeof e.inputs[h]=="string"?a[h]=e.inputs[h]:a[h]={node:e.inputs[h].node,pin:e.inputs[h].pin}}if(e.outputs){o={};for(var h in e.outputs){var u=e.outputs[h];o[h]={},u.attachment!=null&&(o[h].attachment=u.attachment),u.keepLastFrame!=null&&(o[h].keepLastFrame=u.keepLastFrame),u.outputLastFrame!=null&&(o[h].outputLastFrame=u.outputLastFrame),u.parameters&&(o[h].parameters=ta(u.parameters))}}var f;if(i==="scene"?f=new yl({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?f=new xl({name:e.name,outputs:o}):f=new Tl({name:e.name,shader:n,inputs:a,outputs:o}),f){if(e.parameters)for(var h in e.parameters){var d=e.parameters[h];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:f.on("beforerender",Rl(h,cs(d)))):typeof d=="function"&&f.on("beforerender",d),f.setParameter(h,d)}if(e.defines&&f.pass)for(var h in e.defines){var d=e.defines[h];f.pass.material.define("fragment",h,d)}}return f}function Dl(e,t){return e}function Pl(e,t){return t}function ta(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=F[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=Ol(i,cs(n),r)):t[i]=n}}),t.width||(t.width=Dl),t.height||(t.height=Pl),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function Nl(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;we.each(e.textures,function(l,h){var u,f=l.path,d=ta(l.parameters);if(Array.isArray(f)&&f.length===6)s&&(f=f.map(function(c){return we.relative2absolute(c,s)})),u=new tr(d);else if(typeof f=="string")s&&(f=we.relative2absolute(f,s)),u=new Y(d);else return;u.load(f),a++,u.once("success",function(){n[h]=u,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function Rl(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=t(n,a,i);this.setParameter(e,o)}}function Ol(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return t(a,o,n)}}function cs(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function br(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}const Il=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;z.import(Il);function ds(e){for(var t=new Uint8Array(e*e*4),r=0,i=new L,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function ao(e){return new Y({pixels:ds(e),wrapS:F.REPEAT,wrapT:F.REPEAT,width:e,height:e})}function Bl(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=br(n+t,2)*(r?1:2)*Math.PI,o=br(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,h=Math.cos(o)*s,u=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=h,i[n*3+2]=u}return i}function At(e){e=e||{},this._ssaoPass=new Ee({fragment:z.source("ecgl.ssao.estimate")}),this._blurPass=new Ee({fragment:z.source("ecgl.ssao.blur")}),this._framebuffer=new Se({depthBuffer:!1}),this._ssaoTexture=new Y,this._blurTexture=new Y,this._blurTexture2=new Y,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}At.prototype.setDepthTexture=function(e){this._depthTex=e};At.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};At.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new U;U.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,h=this._blurTexture,u=this._blurTexture2;l.width=i/2,l.height=n/2,h.width=i,h.height=n,u.width=i,u.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(h),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(u),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",h),o.render(e),this._framebuffer.unbind(e);var f=e.clearColor;e.gl.clearColor(f[0],f[1],f[2],f[3])};At.prototype.getTargetTexture=function(){return this._blurTexture2};At.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};At.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Bl(e,t*e,!!this._normalTex)};At.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=ds(e),t.width=t.height=e,t.dirty()):(t=ao(e),this._ssaoPass.setUniform("noiseTex",ao(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};At.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const Fl=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;z.import(Fl);function Lt(e){e=e||{},this._ssrPass=new Ee({fragment:z.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Ee({fragment:z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Ee({fragment:z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Ee({fragment:z.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new Y({type:F.HALF_FLOAT}),this._texture2=new Y({type:F.HALF_FLOAT}),this._texture3=new Y({type:F.HALF_FLOAT}),this._prevTexture=new Y({type:F.HALF_FLOAT}),this._currentTexture=new Y({type:F.HALF_FLOAT}),this._frameBuffer=new Se({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Lt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Lt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var h=this._frameBuffer,u=this._ssrPass,f=this._blurPass1,d=this._blurPass2,c=this._blendPass,v=new U,p=new U;U.transpose(v,t.worldTransform),U.transpose(p,t.viewMatrix),u.setUniform("sourceTexture",r),u.setUniform("projection",t.projectionMatrix.array),u.setUniform("projectionInv",t.invProjectionMatrix.array),u.setUniform("toViewSpace",v.array),u.setUniform("toWorldSpace",p.array),u.setUniform("nearZ",t.near);var m=i/this._totalSamples*this._samplePerFrame;if(u.setUniform("jitterOffset",m),u.setUniform("sampleOffset",i*this._samplePerFrame),f.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[n,a]),d.setUniform("sourceTexture",r),f.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),h.attach(o),h.bind(e),u.render(e),this._physicallyCorrect&&(h.attach(this._currentTexture),c.setUniform("texture1",this._prevTexture),c.setUniform("texture2",o),c.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),c.render(e)),h.attach(s),f.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),f.render(e),h.attach(l),d.setUniform("texture",s),d.render(e),h.unbind(e),this._physicallyCorrect){var g=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=g}};Lt.prototype.getTargetTexture=function(){return this._texture3};Lt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Lt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=_t.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Lt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Lt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Lt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const oo=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],zl=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;z.import(zl);function bn(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function Gl(e,t,r,i,n){var a,o,s,l,h=e.gl;return function(u,f,d){if(!(l&&l.material===u.material)){var c=u.material,v=u.__program,p=c.get("roughness");p==null&&(p=1);var m=c.get("normalMap")||t,g=c.get("roughnessMap"),T=c.get("bumpMap"),x=c.get("uvRepeat"),_=c.get("uvOffset"),S=c.get("detailUvRepeat"),b=c.get("detailUvOffset"),A=!!T&&c.isTextureEnabled("bumpMap"),E=!!g&&c.isTextureEnabled("roughnessMap"),M=c.isDefined("fragment","DOUBLE_SIDED");T=T||r,g=g||i,d!==f?(f.set("normalMap",m),f.set("bumpMap",T),f.set("roughnessMap",g),f.set("useBumpMap",A),f.set("useRoughnessMap",E),f.set("doubleSide",M),x!=null&&f.set("uvRepeat",x),_!=null&&f.set("uvOffset",_),S!=null&&f.set("detailUvRepeat",S),b!=null&&f.set("detailUvOffset",b),f.set("roughness",p)):(v.setUniform(h,"1f","roughness",p),a!==m&&bn(e,v,"normalMap",m,0),o!==T&&T&&bn(e,v,"bumpMap",T,1),s!==g&&g&&bn(e,v,"roughnessMap",g,2),x!=null&&v.setUniform(h,"2f","uvRepeat",x),_!=null&&v.setUniform(h,"2f","uvOffset",_),S!=null&&v.setUniform(h,"2f","detailUvRepeat",S),b!=null&&v.setUniform(h,"2f","detailUvOffset",b),v.setUniform(h,"1i","useBumpMap",+A),v.setUniform(h,"1i","useRoughnessMap",+E),v.setUniform(h,"1i","doubleSide",+M)),a=m,o=T,s=g,l=u}}}function Pr(e){this._depthTex=new Y({format:F.DEPTH_COMPONENT,type:F.UNSIGNED_INT}),this._normalTex=new Y({type:F.HALF_FLOAT}),this._framebuffer=new Se,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Se.DEPTH_ATTACHMENT),this._normalMaterial=new nt({shader:new z(z.source("ecgl.normal.vertex"),z.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=gt.createBlank("#000"),this._defaultBumpMap=gt.createBlank("#000"),this._defaultRoughessMap=gt.createBlank("#000"),this._debugPass=new Ee({fragment:z.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Pr.prototype.getDepthTexture=function(){return this._depthTex};Pr.prototype.getNormalTexture=function(){return this._normalTex};Pr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(h){return h.renderNormal},beforeRender:Gl(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Pr.prototype.renderDebug=function(e){this._debugPass.render(e)};Pr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function fi(e){e=e||{},this._edgePass=new Ee({fragment:z.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new Y({type:F.HALF_FLOAT}),this._frameBuffer=new Se,this._frameBuffer.attach(this._targetTexture)}fi.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};fi.prototype.getTargetTexture=function(){return this._targetTexture};fi.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};fi.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const Ul={nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},Hl=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Vl=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;z.import(is);z.import(ns);z.import(as);z.import(os);z.import(ss);z.import(ls);z.import(hs);z.import(us);z.import(fs);z.import(Hl);z.import(Vl);function vs(e,t){return{color:{parameters:{width:e,height:t}}}}var ra=["composite","FXAA"];function J(){this._width,this._height,this._dpr,this._sourceTexture=new Y({type:F.HALF_FLOAT}),this._depthTexture=new Y({format:F.DEPTH_COMPONENT,type:F.UNSIGNED_INT}),this._framebuffer=new Se,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Se.DEPTH_ATTACHMENT),this._normalPass=new Pr,this._compositor=Ml(Ul);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=ra.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new At(r),this._ssrPass=new Lt(r),this._edgePass=new fi(r)}J.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=n,o.width=i,o.height=n;var s={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(h,u){if(typeof h[u]=="function"){var f=h[u].__original||h[u];h[u]=function(d){return f.call(this,s)},h[u].__original=f}}this._compositor.nodes.forEach(function(h){for(var u in h.outputs){var f=h.outputs[u].parameters;f&&(l(f,"width"),l(f,"height"))}for(var d in h.parameters)l(h.parameters,d)}),this._width=i,this._height=n,this._dpr=r};J.prototype.getWidth=function(){return this._width};J.prototype.getHeight=function(){return this._height};J.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};J.prototype._getPrevNode=function(e){for(var t=ra.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};J.prototype._getNextNode=function(e){for(var t=ra.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};J.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=vs(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};J.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=vs(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};J.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};J.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};J.prototype.enableSSAO=function(){this._enableSSAO=!0};J.prototype.disableSSAO=function(){this._enableSSAO=!1};J.prototype.enableSSR=function(){this._enableSSR=!0};J.prototype.disableSSR=function(){this._enableSSR=!1};J.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};J.prototype.getSourceFrameBuffer=function(){return this._framebuffer};J.prototype.getSourceTexture=function(){return this._sourceTexture};J.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};J.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};J.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};J.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};J.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};J.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};J.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};J.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};J.prototype.enableEdge=function(){this._enableEdge=!0};J.prototype.disableEdge=function(){this._enableEdge=!1};J.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};J.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};J.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};J.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};J.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};J.prototype.setEdgeColor=function(e){var t=y.parseColor(e);this._edgePass.setParameter("edgeColor",t)};J.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};J.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST,flipY:!1})};J.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};J.prototype.isSSREnabled=function(){return this._enableSSR};J.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,h=Math.floor(oo.length/2/l),u=n%h,f=0;f<l*2;f++)s[f]=oo[f+u*l*2];for(var f=0;f<this._dofBlurNodes.length;f++)this._dofBlurNodes[f].setParameter("percent",n/30),this._dofBlurNodes[f].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};J.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Un(e){for(var t=[],r=0;r<30;r++)t.push([br(r,2),br(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new Y,this._sourceFb=new Se,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new Y,this._outputTex=new Y;var i=this._blendPass=new Ee({fragment:z.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Se({depthBuffer:!1}),this._outputPass=new Ee({fragment:z.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}Un.prototype={constructor:Un,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new U;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,U.mul(t.projectionMatrix,s,t.projectionMatrix),U.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function le(e){e=e||"perspective",this.layer=null,this.scene=new Gt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new J,this._temporalSS=new Un,this._shadowMapPass=new pt;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(br(r,2)*4-2),n.push(br(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}le.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Re||(this.camera=new Re,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Sr||(this.camera=new Sr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};le.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Re&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};le.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var so=new q;le.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,so),this.camera.castRay(so,r),i.viewport=n,r};le.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};le.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};le.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};le.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};le.prototype.hasDOF=function(){return this._enableDOF};le.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};le.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};le.prototype._updateTransparent=function(e,t,r,i){for(var n=new L,a=new U,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var h=s[l],u=h.geometry;U.invert(a,h.worldTransform),L.transformMat4(n,o,a),u.needsSortTriangles&&u.needsSortTriangles()&&u.doSortTriangles(n,i),u.needsSortVertices&&u.needsSortVertices()&&u.doSortVertices(n,i)}};le.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};le.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};le.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};le.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),h=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),h.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(h.get("lookupTexture"),t),r.setExposure(h.get("exposure")),["radius","quality","intensity"].forEach(function(u){r.setSSAOParameter(u,o.get(u))}),["quality","maxRoughness","physical"].forEach(function(u){r.setSSRParameter(u,s.get(u))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(u){r.setDOFParameter(u,a.get(u))}),["brightness","contrast","saturation"].forEach(function(u){r.setColorCorrection(u,h.get(u))})};le.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};le.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};le.prototype.isLinearSpace=function(){return this._enablePostEffect};le.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};le.prototype.add=function(e){this.rootNode.add(e)};le.prototype.remove=function(e){this.rootNode.remove(e)};le.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(le.prototype,Yn);function kl(e,t){var r=e.getBoxLayoutParams(),i=Zi(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function Wl(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var h=l.getAxis(o);if(!h){var u=jn(r[o]||[1/0,-1/0],a);h=new Fi(o,u),h.type=a.get("type");var f=h.type==="category";h.onBand=f&&a.get("boundaryGap"),h.inverse=a.get("inverse"),a.axis=h,h.model=a,h.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},h.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(h)}}},this)},this),this.resize(this.model,t)}var Xl={dimensions:Qr.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new le;var o=new Qr;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=kl,o.update=Wl});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return i.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(u){u.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}},ps=Mr.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Hs(ps);var ms={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},jl=se({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},ms),ia=se({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},ms),Zl=zt({scale:!0,min:"dataMin",max:"dataMax"},ia),gs=zt({logBase:10},ia);gs.scale=!0;const ql={categoryAxis3D:jl,valueAxis3D:ia,timeAxis3D:Zl,logAxis3D:gs};var Yl=["value","category","time","log"];function Kl(e,t,r,i,n){Yl.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var h=l.getTheme();se(s,h.get(a+"Axis3D")),se(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=t1.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:se(e1(ql[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",r1(i,t))}function $l(e,t){return t.type||(t.data?"category":"value")}function Ql(e){e.registerComponentModel(Qi),e.registerComponentView(vl),e.registerCoordinateSystem("grid3D",Xl),["x","y","z"].forEach(function(t){Kl(e,t,ps,$l,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}Xe(Ql);const Nr={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},_s={getFilledRegions:function(e,t){var r=(e||[]).slice(),i;if(typeof t=="string"?(t=Nn(t),i=t&&t.geoJson):t&&t.features&&(i=t),!i)return[];for(var n={},a=i.features,o=0;o<r.length;o++)n[r[o].name]=r[o];for(var o=0;o<a.length;o++){var s=a[o].properties.name;n[s]||r.push({name:s})}return r},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var Rr=Mr.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=si(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new Tt(t,this);r.initData(e.regions);var i={};r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,this._data=r},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Xi(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),r=this.coordinateSystem.getRegion(t);return r?r.geometries:[]},getFormattedLabel:function(e,t){var r=this._data.getName(e),i=this.getRegionModel(e),n=i.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=i.get(["label","formatter"]));var a={name:r};if(typeof n=="function")return a.status=t,n(a);if(typeof n=="string"){var o=a.seriesName;return n.replace("{a}",o??"")}else return r},defaultOption:{regions:[]}});se(Rr.prototype,_s);se(Rr.prototype,$i);se(Rr.prototype,Cr);se(Rr.prototype,Dr);se(Rr.prototype,Nr);function ys(e,t,r){r=r||2;var i=t&&t.length,n=i?t[0]*r:e.length,a=xs(e,0,n,r,!0),o=[];if(!a)return o;var s,l,h,u,f,d,c;if(i&&(a=ih(e,t,a,r)),e.length>80*r){s=h=e[0],l=u=e[1];for(var v=r;v<n;v+=r)f=e[v],d=e[v+1],f<s&&(s=f),d<l&&(l=d),f>h&&(h=f),d>u&&(u=d);c=Math.max(h-s,u-l)}return ti(a,o,r,s,l,c),o}function xs(e,t,r,i,n){var a,o;if(n===kn(e,t,r,i)>0)for(a=t;a<r;a+=i)o=lo(a,e[a],e[a+1],o);else for(a=r-i;a>=t;a-=i)o=lo(a,e[a],e[a+1],o);return o&&Jt(o,o.next)&&(ii(o),o=o.next),o}function ei(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(Jt(r,r.next)||Ze(r.prev,r,r.next)===0)){if(ii(r),r=t=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==t);return t}function ti(e,t,r,i,n,a,o){if(e){!o&&a&&sh(e,i,n,a);for(var s=e,l,h;e.prev!==e.next;){if(l=e.prev,h=e.next,a?eh(e,i,n,a):Jl(e)){t.push(l.i/r),t.push(e.i/r),t.push(h.i/r),ii(e),e=h.next,s=h.next;continue}if(e=h,e===s){o?o===1?(e=th(e,t,r),ti(e,t,r,i,n,a,2)):o===2&&rh(e,t,r,i,n,a):ti(ei(e),t,r,i,n,a,1);break}}}}function Jl(e){var t=e.prev,r=e,i=e.next;if(Ze(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(Gi(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&Ze(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function eh(e,t,r,i){var n=e.prev,a=e,o=e.next;if(Ze(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,h=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,u=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,f=Hn(s,l,t,r,i),d=Hn(h,u,t,r,i),c=e.nextZ;c&&c.z<=d;){if(c!==e.prev&&c!==e.next&&Gi(n.x,n.y,a.x,a.y,o.x,o.y,c.x,c.y)&&Ze(c.prev,c,c.next)>=0)return!1;c=c.nextZ}for(c=e.prevZ;c&&c.z>=f;){if(c!==e.prev&&c!==e.next&&Gi(n.x,n.y,a.x,a.y,o.x,o.y,c.x,c.y)&&Ze(c.prev,c,c.next)>=0)return!1;c=c.prevZ}return!0}function th(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!Jt(n,a)&&Ts(n,i,i.next,a)&&ri(n,a)&&ri(a,n)&&(t.push(n.i/r),t.push(i.i/r),t.push(a.i/r),ii(i),ii(i.next),i=e=a),i=i.next}while(i!==e);return i}function rh(e,t,r,i,n,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&uh(o,s)){var l=ws(o,s);o=ei(o,o.next),l=ei(l,l.next),ti(o,t,r,i,n,a),ti(l,t,r,i,n,a);return}s=s.next}o=o.next}while(o!==e)}function ih(e,t,r,i){var n=[],a,o,s,l,h;for(a=0,o=t.length;a<o;a++)s=t[a]*i,l=a<o-1?t[a+1]*i:e.length,h=xs(e,s,l,i,!1),h===h.next&&(h.steiner=!0),n.push(hh(h));for(n.sort(nh),a=0;a<n.length;a++)ah(n[a],r),r=ei(r,r.next);return r}function nh(e,t){return e.x-t.x}function ah(e,t){if(t=oh(e,t),t){var r=ws(t,e);ei(r,r.next)}}function oh(e,t){var r=t,i=e.x,n=e.y,a=-1/0,o;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var s=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(n===r.y)return r;if(n===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!o)return null;if(i===a)return o.prev;var l=o,h=o.x,u=o.y,f=1/0,d;for(r=o.next;r!==l;)i>=r.x&&r.x>=h&&i!==r.x&&Gi(n<u?i:a,n,h,u,n<u?a:i,n,r.x,r.y)&&(d=Math.abs(n-r.y)/(i-r.x),(d<f||d===f&&r.x>o.x)&&ri(r,e)&&(o=r,f=d)),r=r.next;return o}function sh(e,t,r,i){var n=e;do n.z===null&&(n.z=Hn(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,lh(n)}function lh(e){var t,r,i,n,a,o,s,l,h=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,i=r,s=0,t=0;t<h&&(s++,i=i.nextZ,!!i);t++);for(l=h;s>0||l>0&&i;)s!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,h*=2}while(o>1);return e}function Hn(e,t,r,i,n){return e=32767*(e-r)/n,t=32767*(t-i)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function hh(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function Gi(e,t,r,i,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function uh(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fh(e,t)&&ri(e,t)&&ri(t,e)&&ch(e,t)}function Ze(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Jt(e,t){return e.x===t.x&&e.y===t.y}function Ts(e,t,r,i){return Jt(e,t)&&Jt(r,i)||Jt(e,i)&&Jt(r,t)?!0:Ze(e,t,r)>0!=Ze(e,t,i)>0&&Ze(r,i,e)>0!=Ze(r,i,t)>0}function fh(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Ts(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function ri(e,t){return Ze(e.prev,e,e.next)<0?Ze(e,t,e.next)>=0&&Ze(e,e.prev,t)>=0:Ze(e,t,e.prev)<0||Ze(e,e.next,t)<0}function ch(e,t){var r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function ws(e,t){var r=new Vn(e.i,e.x,e.y),i=new Vn(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function lo(e,t,r,i){var n=new Vn(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ii(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Vn(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}ys.deviation=function(e,t,r,i){var n=t&&t.length,a=n?t[0]*r:e.length,o=Math.abs(kn(e,0,a,r));if(n)for(var s=0,l=t.length;s<l;s++){var h=t[s]*r,u=s<l-1?t[s+1]*r:e.length;o-=Math.abs(kn(e,h,u,r))}var f=0;for(s=0;s<i.length;s+=3){var d=i[s]*r,c=i[s+1]*r,v=i[s+2]*r;f+=Math.abs((e[d]-e[v])*(e[c+1]-e[d+1])-(e[d]-e[c])*(e[v+1]-e[d+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function kn(e,t,r,i){for(var n=0,a=t,o=r-i;a<r;a+=i)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}function En(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function Ss(e,t,r,i,n){var a=r,o=e[t];En(e,t,i);for(var s=r;s<i;s++)n(e[s],o)<0&&(En(e,s,a),a++);return En(e,i,a),a}function Ui(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=Ss(e,n,r,i,t);Ui(e,t,r,a-1),Ui(e,t,a+1,i)}}function Er(){this._parts=[]}Er.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Ss(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,h=a[o].pivot-1;h>l&&s.push({pivot:Math.floor((h+l)/2),left:l,right:h});var l=a[o].pivot+1,h=a[o].right;h>l&&s.push({pivot:Math.floor((h+l)/2),left:l,right:h})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var u=a.length-1-this._currentSortPartIdx;if(Ui(e,t,a[u].left,a[u].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Er.sort=Ui;var _r=be.vec3,ho=_r.create(),uo=_r.create(),fo=_r.create();const na={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<r.length;){i.get(r[o++],ho),i.get(r[o++],uo),i.get(r[o++],fo);var s=_r.sqrDist(ho,e),l=_r.sqrDist(uo,e),h=_r.sqrDist(fo,e),u=Math.min(s,l);u=Math.min(u,h),o===3?(a=u,u=0):u=u-a,this._triangleZList[n++]=u}}for(var f=this._sortedTriangleIndices,o=0;o<f.length;o++)f[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var d=this._indicesTmp,c=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=f[o]*3,m=o*3;d[m++]=r[p++],d[m++]=r[p++],d[m]=r[p],c[o]=v[f[o]]}var g=this._indicesTmp;this._indicesTmp=this.indices,this.indices=g;var g=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=g,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Er.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Er,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function dh(e){const t=e.getVisual("style");if(t){const r=e.getVisual("drawType");return t[r]}}function vh(e){return e.getVisual("style").opacity}function Be(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function Ie(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var bs=1,Es=2;function Mt(e,t,r){this._labelsMesh=new Jn,this._labelTextureSurface=new Bi({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}Mt.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};Mt.prototype.getLabelDistance=function(e,t,r){return 0};Mt.prototype.getMesh=function(){return this._labelsMesh};Mt.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var i=["label","show"],n=["emphasis","label","show"],a=t;a<r;a++){var o=e.getItemModel(a),s=o.get(i),l=o.get(n);l==null&&(l=s);var h=(s?bs:0)|(l?Es:0);this._labelsVisibilitiesBits[a-t]=h}this._start=t,this._end=r,this._data=e};Mt.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},i=0;i<e.length;i++)r[e[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(n),h=o.getModel(a,l),u={left:"right",right:"left",top:"center",bottom:"center"},f={left:"middle",right:"middle",top:"bottom",bottom:"top"},d=this._start;d<this._end;d++){var c=!1;t&&r[d]&&(c=!0);var v=this._labelsVisibilitiesBits[d-this._start]&(c?Es:bs);if(v){var p=s.getItemModel(d),m=p.getModel(c?a:n,c?h:l),g=m.get("distance")||0,T=m.get("position"),x=this._api.getDevicePixelRatio(),_=o.getFormattedLabel(d,c?"emphasis":"normal");if(_==null||_==="")return;var S=new Pi({style:Ni(m,{text:_,fill:m.get("color")||Be(s,d)||"#000",align:"left",verticalAlign:"top",opacity:K.firstNotNull(m.get("opacity"),Ie(s,d),1)})}),b=S.getBoundingRect(),A=1.2;b.height*=A;var E=this._labelTextureSurface.add(S),M=u[T]||"center",O=f[T]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(d,T,g),[b.width*x,b.height*x],E,M,O,this.getLabelDistance(d,T,g)*x)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};Mt.prototype.dispose=function(){this._labelTextureSurface.dispose()};var $e=be.vec3;y.Shader.import(en);function Ar(e){this.rootNode=new y.Node,this._triangulationResults={},this._shadersMap=y.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=y.createShader("ecgl."+i),r},{}),this._linesShader=y.createShader("ecgl.meshLines3D");var t={};y.COMMON_SHADERS.forEach(function(r){t[r]=new y.Material({shader:y.createShader("ecgl."+r)})}),this._groundMaterials=t,this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new Mt(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}Ar.prototype={constructor:Ar,extrudeY:!0,update:function(e,t,r,i,n){var a=e.getData();i==null&&(i=0),n==null&&(n=a.count()),this._startIndex=i,this._endIndex=n-1,this._triangulation(e,i,n);var o=this._getShader(e.get("shading"));this._prepareMesh(e,o,r,i,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,r,i,n);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,r);var l=this;this._labelsBuilder.updateData(a,i,n),this._labelsBuilder.getLabelPosition=function(h,u,f){var d=a.getName(h),c,v=f;if(s.type==="geo3D"){var p=s.getRegion(d);if(!p)return[NaN,NaN,NaN];c=p.getCenter();var m=s.dataToPoint([c[0],c[1],v]);return m}else var g=l._triangulationResults[h-l._startIndex],c=l.extrudeY?[(g.max[0]+g.min[0])/2,g.max[1]+v,(g.max[2]+g.min[2])/2]:[(g.max[0]+g.min[0])/2,(g.max[1]+g.min[1])/2,g.max[2]+v]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new y.Mesh({name:"Polygon",material:new y.Material({shader:e._shadersMap.lambert}),geometry:new y.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,na),n}var r=t(),i=new y.Mesh({material:new y.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new Ut({useNativeLine:!1})});this.rootNode.add(r),this.rootNode.add(i),r.material.define("both","VERTEX_COLOR"),r.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=r,this._linesMesh=i,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,r,i,n){for(var a=0,o=0,s=0,l=0,h=i;h<n;h++){var u=this._getRegionPolygonInfo(h),f=this._getRegionLinesInfo(h,e,this._linesMesh.geometry);a+=u.vertexCount,o+=u.triangleCount,s+=f.vertexCount,l+=f.triangleCount}var d=this._polygonMesh,c=d.geometry;["position","normal","texcoord0","color"].forEach(function(v){c.attributes[v].init(a)}),c.indices=a>65535?new Uint32Array(o*3):new Uint16Array(o*3),d.material.shader!==t&&d.material.attachShader(t,!0),y.setMaterialFromModel(t.__shading,d.material,e,r),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((n-i)*2)},_updateRegionMesh:function(e,t,r,i){for(var n=e.getData(),a=0,o=0,s=!1,b=this._polygonMesh,l=this._linesMesh,h=r;h<i;h++){var u=e.getRegionModel(h),f=u.getModel("itemStyle"),d=K.firstNotNull(Be(n,h),f.get("color"),"#fff"),c=K.firstNotNull(Ie(n,h),f.get("opacity"),1),v=y.parseColor(d),p=y.parseColor(f.get("borderColor"));v[3]*=c,p[3]*=c;var m=v[3]<.99;b.material.set("color",[1,1,1,1]),s=s||m;for(var g=K.firstNotNull(u.get("height",!0),e.get("regionHeight")),T=this._updatePolygonGeometry(e,b.geometry,h,g,a,o,v),x=a;x<T.vertexOffset;x++)this._dataIndexOfVertex[x]=h;this._vertexRangeOfDataIndex[(h-r)*2]=a,this._vertexRangeOfDataIndex[(h-r)*2+1]=T.vertexOffset,a=T.vertexOffset,o=T.triangleOffset;var _=f.get("borderWidth"),S=_>0;S&&(_*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,h,g,_,e.coordinateSystem.transform)),l.invisible=!S,l.material.set({color:p})}var b=this._polygonMesh;b.material.transparent=s,b.material.depthMask=!s,b.geometry.updateBoundingBox(),b.frontFace=this.extrudeY?y.Mesh.CCW:y.Mesh.CW,b.material.get("normalMap")&&b.geometry.generateTangents(),b.seriesIndex=e.seriesIndex,b.on("mousemove",this._onmousemove,this),b.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var r=y.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),i=K.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",r),n.material.set("wireframeLineWidth",i)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,r){var i=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!i.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),a=this._groundMaterials[n];a||(a=this._groundMaterials.lambert),y.setMaterialFromModel(n,a,i,r),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",y.parseColor(i.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,r){this._triangulationResults=[];for(var i=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],a=e.coordinateSystem,o=t;o<r;o++){for(var s=[],l=e.getRegionPolygonCoords(o),h=0;h<l.length;h++){var u=l[h].exterior,f=l[h].interiors,d=[],c=[];if(!(u.length<3)){for(var v=0,p=0;p<u.length;p++){var m=u[p];d[v++]=m[0],d[v++]=m[1]}for(var p=0;p<f.length;p++)if(!(f[p].length<3)){for(var g=d.length/2,T=0;T<f[p].length;T++){var m=f[p][T];d.push(m[0]),d.push(m[1])}c.push(g)}for(var x=ys(d,c),_=new Float64Array(d.length/2*3),S=[],b=[1/0,1/0,1/0],A=[-1/0,-1/0,-1/0],E=0,p=0;p<d.length;)$e.set(S,d[p++],0,d[p++]),a&&a.transform&&$e.transformMat4(S,S,a.transform),$e.min(b,b,S),$e.max(A,A,S),_[E++]=S[0],_[E++]=S[1],_[E++]=S[2];$e.min(i,i,b),$e.max(n,n,A),s.push({points:_,indices:x,min:b,max:A})}}this._triangulationResults.push(s)}this._geoBoundingBox=[i,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],r=0,i=0,n=0;n<t.length;n++)r+=t[n].points.length/3,i+=t[n].indices.length/3;var a=r*2+r*4,o=i*2+r*2;return{vertexCount:a,triangleCount:o}},_updatePolygonGeometry:function(e,t,r,i,n,a,o){var s=e.get("projectUVOnGround"),l=t.attributes.position,h=t.attributes.normal,u=t.attributes.texcoord0,f=t.attributes.color,d=this._triangulationResults[r-this._startIndex],c=f.value&&o,v=t.indices,p=this.extrudeY?1:2,m=this.extrudeY?2:1,g=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],T=$e.mul([],this._geoBoundingBox[0],g),x=$e.mul([],this._geoBoundingBox[1],g),_=Math.max(x[0]-T[0],x[2]-T[2]);function S(xe,ke,ze){for(var Ne=xe.points,Ir=Ne.length,Le=[],dt=[],We=0;We<Ir;We+=3)Le[0]=Ne[We],Le[p]=ke,Le[m]=Ne[We+2],dt[0]=(Ne[We]*g[0]-T[0])/_,dt[1]=(Ne[We+2]*g[m]-T[2])/_,l.set(n,Le),c&&f.set(n,o),u.set(n++,dt)}function b(xe,ke,ze){var Ne=n;S(xe,ke);for(var Ir=xe.indices.length,Le=0;Le<Ir;Le++)v[a*3+Le]=xe.indices[Le]+Ne;a+=xe.indices.length/3}for(var A=this.extrudeY?[0,1,0]:[0,0,1],E=$e.negate([],A),M=0;M<d.length;M++){var O=n,C=d[M];b(C,0),b(C,i);for(var B=C.points.length/3,G=0;G<B;G++)h.set(O+G,E),h.set(O+G+B,A);for(var R=[0,3,1,1,3,2],H=[[],[],[],[]],W=[],j=[],k=[],ne=[],X=0,G=0;G<B;G++){for(var he=(G+1)%B,re=(C.points[he*3]-C.points[G*3])*g[0],ce=(C.points[he*3+2]-C.points[G*3+2])*g[m],de=Math.sqrt(re*re+ce*ce),Q=0;Q<4;Q++){var Ae=Q===0||Q===3,ge=(Ae?G:he)*3;H[Q][0]=C.points[ge],H[Q][p]=Q>1?i:0,H[Q][m]=C.points[ge+2],l.set(n+Q,H[Q]),s?(ne[0]=(C.points[ge]*g[0]-T[0])/_,ne[1]=(C.points[ge+2]*g[m]-T[m])/_):(ne[0]=(Ae?X:X+de)/_,ne[1]=(H[Q][p]*g[p]-T[p])/_),u.set(n+Q,ne)}$e.sub(W,H[1],H[0]),$e.sub(j,H[3],H[0]),$e.cross(k,W,j),$e.normalize(k,k);for(var Q=0;Q<4;Q++)h.set(n+Q,k),c&&f.set(n+Q,o);for(var Q=0;Q<6;Q++)v[a*3+Q]=R[Q]+n;n+=4,a+=2,X+=de}}return t.dirty(),{vertexOffset:n,triangleOffset:a}},_getRegionLinesInfo:function(e,t,r){var i=0,n=0,a=t.getRegionModel(e),o=a.getModel("itemStyle"),s=o.get("borderWidth");if(s>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(h){var u=h.exterior,f=h.interiors;i+=r.getPolylineVertexCount(u),n+=r.getPolylineTriangleCount(u);for(var d=0;d<f.length;d++)i+=r.getPolylineVertexCount(f[d]),n+=r.getPolylineTriangleCount(f[d])},this)}return{vertexCount:i,triangleCount:n}},_updateLinesGeometry:function(e,t,r,i,n,a){function o(h){for(var u=new Float64Array(h.length*3),f=0,d=[],c=0;c<h.length;c++)d[0]=h[c][0],d[1]=i+.1,d[2]=h[c][1],a&&$e.transformMat4(d,d,a),u[f++]=d[0],u[f++]=d[1],u[f++]=d[2];return u}var s=[1,1,1,1],l=t.getRegionPolygonCoords(r);l.forEach(function(h){var u=h.exterior,f=h.interiors;e.addPolyline(o(u),s,n);for(var d=0;d<f.length;d++)e.addPolyline(o(f[d]),s,n)})},highlight:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=r.getModel(["emphasis","itemStyle"]),n=i.get("color"),a=K.firstNotNull(i.get("opacity"),Ie(t,e),1);if(n==null){var o=Be(t,e);n=qn(o,-.4)}a==null&&(a=Ie(t,e));var s=y.parseColor(n);s[3]*=a,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=K.firstNotNull(Be(t,e),r.get(["itemStyle","color"]),"#fff"),n=K.firstNotNull(Ie(t,e),r.get(["itemStyle","opacity"]),1),a=y.parseColor(i);a[3]*=n,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,r){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var i=this._vertexRangeOfDataIndex[t*2];i<this._vertexRangeOfDataIndex[t*2+1];i++)this._polygonMesh.geometry.attributes.color.set(i,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const ph=oi.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Ar(t),this.groupGL=new y.Node,this._lightRoot=new y.Node,this._sceneHelper=new Ft(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new hi({zr:t.getZr()}),this._control.init()},render:function(e,t,r){this.groupGL.add(this._geo3DBuilder.rootNode);var i=e.coordinateSystem;if(!(!i||!i.viewGL)){i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var mh={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function gh(e,t){if(e==="world"){var r=mh[t.name];if(r){var i=[r[0],r[1]];t.setCenter(i)}}}var _h=be.vec3,gr=be.mat4,yh=[n1,gh];function Hi(e,t,r,i,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,n),this.transform=gr.identity(new Float64Array(16)),this.invTransform=gr.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}Hi.prototype={constructor:Hi,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,r){var i=da||da;try{this.regions=e?i(e):[]}catch(h){throw`Invalid geoJson format
`+h}t=t||{},r=r||{};for(var n=this.regions,a={},o=0;o<n.length;o++){var s=n[o].name;s=r[s]||s,n[o].name=s,a[s]=n[o],this.addGeoCoord(s,n[o].getCenter());var l=t[s];l&&n[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,yh.forEach(function(h){h(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,r=0;r<t.length;r++){var i=t[r].getBoundingRect();e=e||i.clone(),e.union(i)}return this._geoRect=e||new i1(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,r=0;r<t.length;r++)if(t[r].contain(e))return t[r]},setSize:function(e,t,r){this.size=[e,t,r];var i=this.getGeoBoundingRect(),n=e/i.width,a=-r/i.height,o=-e/2-i.x*n,s=r/2-i.y*a,l=this.extrudeY?[o,0,s]:[o,s,0],h=this.extrudeY?[n,1,a]:[n,a,1],u=this.transform;gr.identity(u),gr.translate(u,u,l),gr.scale(u,u,h),gr.invert(this.invTransform,u)},dataToPoint:function(e,t){t=t||[];var r=this.extrudeY?1:2,i=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[i]=e[1],this.altitudeAxis?t[r]=this.altitudeAxis.dataToCoord(n):t[r]=0,t[r]+=this.regionHeight,_h.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function xh(e,t){var r=e.getBoxLayoutParams(),i=Zi(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(e.get("aspectScale")||.75),o=e.get("boxWidth"),s=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function Th(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=jn(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new ji("altitude",i),this.resize(this.model,t)}}var co=0,aa={dimensions:Hi.prototype.dimensions,create:function(e,t){var r=[];if(!Nn)throw new Error("geo3D component depends on geo component");function i(n,a){var o=aa.createGeo3D(n);n.__viewGL=n.__viewGL||new le,o.viewGL=n.__viewGL,n.coordinateSystem=o,o.model=n,r.push(o),o.resize=xh,o.resize(n,t),o.update=Th}return e.eachComponent("geo3D",function(n,a){i(n)}),e.eachSeriesByType("map3D",function(n,a){var o=n.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&i(n)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var a=n.getReferringComponents("geo3D").models[0];if(a||(a=e.getComponent("geo3D")),!a)throw new Error('geo "'+K.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=a.coordinateSystem}}),r},createGeo3D:function(e){var t=e.get("map"),r;return typeof t=="string"?(r=t,t=Nn(t)):t&&t.features&&(t={geoJson:t}),r==null&&(r="GEO_ANONYMOUS_"+co++),new Hi(r+co++,r,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}};function As(e){e.registerComponentModel(Rr),e.registerComponentView(ph),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"geo3D",query:t},function(i){i.setView(t)})}),e.registerCoordinateSystem("geo3D",aa)}Xe(As);function vo(e,t){e.id=e.id||e.name||t+""}var rr=Mr.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){rr.superApply(this,"init",arguments),xt(this.option.layers,function(e,t){se(e,this.defaultLayerOption),vo(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,rr.superApply(this,"mergeOption",arguments);function r(o){return a1(o,function(s,l,h){return vo(l,h),s[l.id]=l,s},{})}if(t&&t.length){var i=r(e.layers),n=r(t);for(var a in i)n[a]?se(n[a],i[a],!0):t.push(e.layers[a]);this.option.layers=t}xt(this.option.layers,function(o){se(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});se(rr.prototype,$i);se(rr.prototype,Cr);se(rr.prototype,Dr);se(rr.prototype,Nr);var Ls=Math.PI,ot=Math.sin,Et=Math.cos,Ms=Math.tan,Cs=Math.asin,Ds=Math.atan2,ir=Ls/180,wh=1e3*60*60*24,Sh=2440588,bh=2451545;function Eh(e){return e.valueOf()/wh-.5+Sh}function Ah(e){return Eh(e)-bh}var Vi=ir*23.4397;function Lh(e,t){return Ds(ot(e)*Et(Vi)-Ms(t)*ot(Vi),Et(e))}function Mh(e,t){return Cs(ot(t)*Et(Vi)+Et(t)*ot(Vi)*ot(e))}function Ch(e,t,r){return Ds(ot(e),Et(e)*ot(t)-Ms(r)*Et(t))}function Dh(e,t,r){return Cs(ot(t)*ot(r)+Et(t)*Et(r)*Et(e))}function Ph(e,t){return ir*(280.16+360.9856235*e)-t}function Nh(e){return ir*(357.5291+.98560028*e)}function Rh(e){var t=ir*(1.9148*ot(e)+.02*ot(2*e)+3e-4*ot(3*e)),r=ir*102.9372;return e+t+r+Ls}function Oh(e){var t=Nh(e),r=Rh(t);return{dec:Mh(r,0),ra:Lh(r,0)}}var Ps={};Ps.getPosition=function(e,t,r){var i=ir*-r,n=ir*t,a=Ah(e),o=Oh(a),s=Ph(a,i)-o.ra;return{azimuth:Ch(s,n,o.dec),altitude:Dh(s,n,o.dec)}};const Ih=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;y.Shader.import(Ko);y.Shader.import(Ih);const Bh=oi.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new y.Node,this._sphereGeometry=new y.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new y.PlaneGeometry,this._earthMesh=new y.Mesh({renderNormal:!0}),this._atmosphereMesh=new y.Mesh,this._atmosphereGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.atmosphere.vertex"),y.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=y.Mesh.CW,this._lightRoot=new y.Node,this._sceneHelper=new Ft,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new hi({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var i=e.coordinateSystem,n=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+n;(!a.material||a.material.shader.name!==o)&&(a.material=y.createMaterial(o)),y.setMaterialFromModel(n,a.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(f){var d=a.material.get(f);d&&(d.flipY=!1)}),a.material.set("color",y.parseColor(e.get("baseColor")));var s=i.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var h=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a);var u=a.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,i=e.get("layers"),n=r.radius,a=[],o=[],s=[],l=[];xt(i,function(c){var v=new Xi(c),p=v.get("type"),m=y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(m.surface&&m.surface.attachToMesh(this._earthMesh),p==="blend"){var g=v.get("blendTo"),T=K.firstNotNull(v.get("intensity"),1);g==="emission"?(s.push(m),l.push(T)):(a.push(m),o.push(T))}else{var x=v.get("id"),_=this._layerMeshes[x];_||(_=this._layerMeshes[x]=new y.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var S=v.get("shading");S==="lambert"?(_.material=_.__lambertMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),_.__lambertMaterial=_.material):(_.material=_.__colorMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.color"),transparent:!0,depthMask:!1}),_.__colorMaterial=_.material),_.material.enableTexture("diffuseMap");var b=v.get("distance"),A=n+(b??r.radius/100);_.scale.set(A,A,A),n=A;var E=this._blankTexture||(this._blankTexture=y.createBlankTexture("rgba(255, 255, 255, 0)"));_.material.set("diffuseMap",E),y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(M){M.surface&&M.surface.attachToMesh(_),_.material.set("diffuseMap",M),t.getZr().refresh()}),v.get("show")?this.groupGL.add(_):this.groupGL.remove(_)}},this);var h=this._earthMesh.material;h.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),h.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),h.set("layerDiffuseMap",a),h.set("layerDiffuseIntensity",o),h.set("layerEmissiveMap",s),h.set("layerEmissionIntensity",l);var u=e.getModel("debug.wireframe");if(u.get("show")){h.define("both","WIREFRAME_TRIANGLE");var f=y.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)"),d=K.firstNotNull(u.get("lineStyle.width"),1);h.set("wireframeLineWidth",d),h.set("wireframeLineColor",f)}else h.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,i=e.getModel("viewControl");r.viewGL.camera;var n=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-r.radius,center:o.getCenter(),from:n.uid,globeId:e.id}}var o=this._control;o.setViewGL(r.viewGL);var s=i.get("targetCoord"),l,h;s!=null&&(h=s[0]+90,l=s[1]),o.setFromViewControlModel(i,{baseDistance:r.radius,alpha:l,beta:h}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=i;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(a.widthSegments!==o||i)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,n),i&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,i=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==r.length)&&(n=new Float32Array(r.length),n.set(r),e.__originalPosition=n);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var h=l*3,u=l*2,f=n[h+1],d=n[h+2],c=n[h+3],v=i[u++],p=i[u++],m=Math.round(v*(a-1)),g=Math.round(p*(o-1)),T=g*a+m,x=s?s[T]:0;r[h+1]=f+f*x,r[h+2]=d+d*x,r[h+3]=c+c*x}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=Ps.getPosition(o1(n),0,0),o=Math.cos(a.altitude);i.position.y=-o*Math.cos(a.azimuth),i.position.x=Math.sin(a.altitude),i.position.z=o*Math.sin(a.azimuth),i.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var Fh=be.vec3;function ki(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}ki.prototype={constructor:ki,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),n=Math.round(r)+Math.round(i)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var r=e[0],i=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,i)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),r=r*Math.PI/180,i=i*Math.PI/180;var o=Math.cos(i)*a;return t=t||[],t[0]=-o*Math.cos(r+Math.PI),t[1]=Math.sin(i)*a,t[2]=o*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],i=e[1],n=e[2],a=Fh.len(e);r/=a,i/=a,n/=a;var o=Math.asin(i),s=Math.atan2(n,-r);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,h=s*180/Math.PI-180;return t=t||[],t[0]=h,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function zh(e,t){var r=document.createElement("canvas"),i=r.getContext("2d"),n=e.width,a=e.height;r.width=n,r.height=a,i.drawImage(e,0,0,n,a);for(var o=i.getImageData(0,0,n,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var h=o[l*4];s[l]=h/255*t}return{data:s,width:n,height:a}}function Gh(e,t){var r=e.getBoxLayoutParams(),i=Zi(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function Uh(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=jn(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new ji("altitude",i),this.resize(this.model,t)}}var Hh={dimensions:ki.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new le;var n=new ki;n.viewGL=i.__viewGL,i.coordinateSystem=n,n.model=i,r.push(n),n.resize=Gh,n.resize(i,t),n.update=Uh}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var n=i.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+K.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;i.coordinateSystem=a}}),e.eachComponent("globe",function(i,n){var a=i.coordinateSystem,o=i.getDisplacementTexture(),s=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var l=!0;y.loadTexture(o,t,function(h){var u=h.image,f=zh(u,s);i.setDisplacementData(f.data,f.width,f.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),r}};function Vh(e){e.registerComponentModel(rr),e.registerComponentView(Bh),e.registerCoordinateSystem("globe",Hh),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}Xe(Vh);var po=["zoom","center","pitch","bearing"],oa=Mr.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return po.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMapboxCameraOption:function(e){e!=null&&po.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});se(oa.prototype,Cr);se(oa.prototype,Dr);function Ht(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}Ht.prototype.setUnpainted=function(){};Ht.prototype.resize=function(){this._mapbox.resize()};Ht.prototype.getMapbox=function(){return this._mapbox};Ht.prototype.clear=function(){};Ht.prototype.refresh=function(){this._mapbox.resize()};var Ns=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];Ht.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},Ns.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);e.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};Ht.prototype.dispose=function(){Ns.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};const Rs=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;y.Shader.import(Rs);const kh=oi.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var r=t.getZr();this._zrLayer=new Ht("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ft(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,i);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){i.on(a,n)}),this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,r){var i=this._zrLayer.getMapbox(),n=e.get("style"),a=JSON.stringify(n);a!==this._oldStyleStr&&n&&i.setStyle(n),this._oldStyleStr=a,i.setCenter(e.get("center")),i.setZoom(e.get("zoom")),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMapbox(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});var Nt=be.mat4,Vr=512,An=.6435011087932844,Qe=Math.PI,vr=1/10;function Lr(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Lr.prototype={constructor:Lr,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,Vr)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(An/2)*this.height*vr,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=An/2,i=Math.PI/2+t,n=Math.sin(r)*e/Math.sin(Math.PI-i-r),a=Math.cos(Math.PI/2-t)*n+e,o=a*1.1;this.pitch>50&&(o=1e3);var s=[];Nt.perspective(s,An,this.width/this.height,1,o),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=Nt.identity([]),l=this.dataToPoint(this.center);Nt.scale(s,s,[1,-1,1]),Nt.translate(s,s,[0,0,-e]),Nt.rotateX(s,s,t),Nt.rotateZ(s,s,-this.bearing/180*Math.PI),Nt.translate(s,s,[-l[0]*this.getScale()*vr,-l[1]*this.getScale()*vr,0]),this.viewGL.camera.viewMatrix.array=s;var h=[];Nt.invert(h,s),this.viewGL.camera.worldTransform.array=h,this.viewGL.camera.decomposeWorldTransform();var u=Vr*this.getScale(),f;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var d=this.altitudeExtent[1]-this.altitudeExtent[0];f=this.boxHeight/d*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else f=u/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*vr;this.viewGL.rootNode.scale.set(this.getScale()*vr,this.getScale()*vr,f)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*Vr,t)},projectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i*Qe/180,o=n*Qe/180,s=t*(a+Qe)/(2*Qe),l=t*(Qe-Math.log(Math.tan(Qe/4+o*.5)))/(2*Qe);return r=r||[],r[0]=s,r[1]=l,r},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*Vr,t)},unprojectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i/t*(2*Qe)-Qe,o=2*(Math.atan(Math.exp(Qe-n/t*(2*Qe)))-Qe/4);return r=r||[],r[0]=a*180/Qe,r[1]=o*180/Qe,r},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,Vr,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function ni(){Lr.apply(this,arguments)}ni.prototype=new Lr;ni.prototype.constructor=ni;ni.prototype.type="mapbox3D";function Os(e,t,r){function i(a,o){var s=o.getWidth(),l=o.getHeight(),h=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,h),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var h=l.getData(),u=l.coordDimToDataDim("alt")[0];if(u){var f=h.getDataExtent(u,!0);s[0]=Math.min(s[0],f[0]),s[1]=Math.max(s[1],f[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(e,function(l){var h=l.__viewGL;h||(h=l.__viewGL=new le,h.setRootNode(new y.Node));var u=new t;u.viewGL=l.__viewGL,u.resize=i,u.resize(l,o),s.push(u),l.coordinateSystem=u,u.model=l,u.update=n}),a.eachSeries(function(l){if(l.get("coordinateSystem")===e){var h=l.getReferringComponents(e).models[0];if(h||(h=a.getComponent(e)),!h)throw new Error(e+' "'+K.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=h.coordinateSystem}}),r&&r(s,a,o),s}}}var Wh=Os("mapbox3D",ni,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})});function Xh(e){e.registerComponentModel(oa),e.registerComponentView(kh),e.registerCoordinateSystem("mapbox3D",Wh),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,r){r.eachComponent({mainType:"mapbox3D",query:t},function(i){i.setMapboxCameraOption(t)})})}Xe(Xh);var mo=["zoom","center","pitch","bearing"],sa=Mr.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return mo.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMaptalksCameraOption:function(e){e!=null&&mo.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});se(sa.prototype,Cr);se(sa.prototype,Dr);function Vt(e,t,r,i){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}Vt.prototype.setUnpainted=function(){};Vt.prototype.resize=function(){this._maptalks.checkSize()};Vt.prototype.getMaptalks=function(){return this._maptalks};Vt.prototype.clear=function(){};Vt.prototype.refresh=function(){this._maptalks.checkSize()};var Is=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];Vt.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},Is.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};Vt.prototype.dispose=function(){Is.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};y.Shader.import(Rs);const jh=oi.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var r=t.getZr();this._zrLayer=new Vt("maptalks3D",r,e.get("center"),e.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ft(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,i);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){i.on(a,n)})},render:function(e,t,r){this._zrLayer||this._initMaptalksLayer(e,r);var i=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),a=i.getBaseLayer();n!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),i.setBaseLayer(a))),this._oldUrlTemplate=n,i.setCenter(e.get("center")),i.setZoom(e.get("zoom"),{animation:!1}),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMaptalks(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:qh(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Zh=2*6378137*Math.PI/(256*Math.pow(2,20));function qh(e){return 19-Math.log(e/Zh)/Math.LN2}function ai(){Lr.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}ai.prototype=new Lr;ai.prototype.constructor=ai;ai.prototype.type="maptalks3D";var Yh=Os("maptalks3D",ai,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})});function Kh(e){e.registerComponentModel(sa),e.registerComponentView(jh),e.registerCoordinateSystem("maptalks3D",Yh),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,r){r.eachComponent({mainType:"maptalks3D",query:t},function(i){i.setMaptalksCameraOption(t)})})}Xe(Kh);var $h=be.vec3,Qh=Zn.isDimensionStacked;function Jh(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function eu(e,t){var r=e.getData(),i=e.get("barSize");if(i==null){var n=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(n[1]/Math.sqrt(r.count()))*.6,i=[a,o]}else yt(i)||(i=[i,i]);var h=t.getAxis("z").scale.getExtent(),u=Jh(h),f=["x","y","z"].map(function(v){return e.coordDimToDataDim(v)[0]}),d=Qh(r,f[2]),c=d?r.getCalculationInfo("stackResultDimension"):f[2];r.each(f,function(v,p,m,g){var T=r.get(c,g),x=d?T-m:u?0:h[0],_=t.dataToPoint([v,p,x]),S=t.dataToPoint([v,p,T]),b=$h.dist(_,S),A=[0,S[1]<_[1]?-1:1,0];Math.abs(b)===0&&(b=.1);var E=[i[0],b,i[1]];r.setItemLayout(g,[_,A,E])}),r.setLayout("orient",[1,0,0])}function la(e,t,r){for(var i=e.getDataExtent(t),n=e.getDataExtent(r),a=i[1]-i[0]||i[0],o=n[1]-n[0]||n[0],s=50,l=new Uint8Array(s*s),h=0;h<e.count();h++){var u=e.get(t,h),f=e.get(r,h),d=Math.floor((u-i[0])/a*(s-1)),c=Math.floor((f-n[0])/o*(s-1)),v=c*s+d;l[v]=l[v]||1}for(var p=0,h=0;h<l.length;h++)l[h]&&p++;return p/l.length}var go=be.vec3,tu=Zn.isDimensionStacked;function ru(e,t){var r=e.getData(),i=e.get("minHeight")||0,n=e.get("barSize"),a=["lng","lat","alt"].map(function(h){return e.coordDimToDataDim(h)[0]});if(n==null){var o=t.radius*Math.PI,s=la(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else yt(n)||(n=[n,n]);var l=ha(r,a);r.each(a,function(h,u,f,d){var c=r.get(l.dimension,d),v=l.isStacked?c-f:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(f),i),m=t.dataToPoint([h,u,v]),g=t.dataToPoint([h,u,c]),T=go.sub([],g,m);go.normalize(T,T);var x=[n[0],p,n[1]];r.setItemLayout(d,[m,T,x])}),r.setLayout("orient",L.UP.array)}function iu(e,t){var r=e.getData(),i=e.get("barSize"),n=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(i==null){var o=Math.min(t.size[0],t.size[2]),s=la(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else yt(i)||(i=[i,i]);var l=[0,1,0],h=ha(r,a);r.each(a,function(u,f,d,c){var v=r.get(h.dimension,c),p=h.isStacked?v-d:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(d),n),g=t.dataToPoint([u,f,p]),T=[i[0],m,i[1]];r.setItemLayout(c,[g,l,T])}),r.setLayout("orient",[1,0,0])}function nu(e,t){var r=e.getData(),i=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(i),h=r.getDataExtent(n),u=t.dataToPoint([l[0],h[0]]),f=t.dataToPoint([l[1],h[1]]),d=Math.min(Math.abs(u[0]-f[0]),Math.abs(u[1]-f[1]))||1,c=la(r,i,n);o=[d/Math.sqrt(r.count()/c),d/Math.sqrt(r.count()/c)]}else yt(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var v=[0,0,1],p=[i,n,a],m=ha(r,p);r.each(p,function(g,T,x,_){var S=r.get(m.dimension,_),b=m.isStacked?S-x:0,A=t.dataToPoint([g,T,b]),E=t.dataToPoint([g,T,S]),M=Math.max(E[2]-A[2],s),O=[o[0],M,o[1]];r.setItemLayout(_,[A,v,O])}),r.setLayout("orient",[1,0,0])}function ha(e,t){var r=tu(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function au(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(i){var n=i.coordinateSystem,a=n&&n.type;a==="globe"?ru(i,n):a==="cartesian3D"?eu(i,n):a==="geo3D"?iu(i,n):(a==="mapbox3D"||a==="maptalks3D")&&nu(i,n)})})}var kt={};kt.getFormattedLabel=function(e,t,r,i,n){r=r||"normal";var a=e.getData(i),o=a.getItemModel(t),s=e.getDataParams(t,i);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var h;return typeof l=="function"?(s.status=r,h=l(s)):typeof l=="string"&&(h=s1(l,s)),h};kt.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};function ou(e,t){var r=[];return xt(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=n.name)}),r}function ci(e,t,r){function i(f){var d=[],c=ou(n,"tooltip");c.length?xt(c,function(p){v(n.get(p,t),p)}):xt(f,v);function v(p,m){var g=n.getDimensionInfo(m);if(!(!g||g.otherDims.tooltip===!1)){var T=g.type,x="- "+(g.tooltipName||g.name)+": "+(T==="ordinal"?p+"":T==="time"?u1("yyyy/MM/dd hh:mm:ss",p):va(p));x&&d.push(pr(x))}}return"<br/>"+d.join("<br/>")}var n=e.getData(),a=e.getRawValue(t),o=yt(a)?i(a):pr(va(a)),s=n.getName(t),l=Be(n,t);l1(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var h=h1(l),u=e.name;return u==="\0-"&&(u=""),u=u?pr(u)+"<br/>":"",u+h+(s?pr(s)+": "+o:o)}function tn(e,t,r){r=r||e.getSource();var i=t||Bo(e.get("coordinateSystem"))||["x","y","z"],n=si(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=Zn.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new Tt(n,e);return o.setCalculationInfo(a),o.initData(r),o}var Bs=ft.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return tn(this)},getFormattedLabel:function(e,t,r,i){var n=kt.getFormattedLabel(this,e,t,r,i);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return ci(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});se(Bs.prototype,Nr);var ye=be.vec3,su=be.mat3,ua=$.extend(function(){return{attributes:{position:new $.Attribute("position","float",3,"POSITION"),normal:new $.Attribute("normal","float",3,"NORMAL"),color:new $.Attribute("color","float",4,"COLOR"),prevPosition:new $.Attribute("prevPosition","float",3),prevNormal:new $.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,i=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),i=r*e,n=r*(e+1),a=i;a<n;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=ye.create,t=ye.scaleAndAdd,r=e(),i=e(),n=e(),a=e(),o=e(),s=e(),l=e(),h=[],u=[],f=0;f<8;f++)h[f]=e();for(var d=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],c=[0,1,2,0,2,3],v=[],f=0;f<d.length;f++)for(var p=d[f],m=0;m<2;m++){for(var g=[],T=0;T<3;T++)g.push(p[c[m*3+T]]);v.push(g)}return function(x,_,S,b,A,E){var M=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(x,_,S,b,this.bevelSize,this.bevelSegments,A);else{ye.copy(n,_),ye.normalize(n,n),ye.cross(a,S,n),ye.normalize(a,a),ye.cross(i,n,a),ye.normalize(a,a),ye.negate(o,i),ye.negate(s,n),ye.negate(l,a),t(h[0],x,i,b[0]/2),t(h[0],h[0],a,b[2]/2),t(h[1],x,i,b[0]/2),t(h[1],h[1],l,b[2]/2),t(h[2],x,o,b[0]/2),t(h[2],h[2],l,b[2]/2),t(h[3],x,o,b[0]/2),t(h[3],h[3],a,b[2]/2),t(r,x,n,b[1]),t(h[4],r,i,b[0]/2),t(h[4],h[4],a,b[2]/2),t(h[5],r,i,b[0]/2),t(h[5],h[5],l,b[2]/2),t(h[6],r,o,b[0]/2),t(h[6],h[6],l,b[2]/2),t(h[7],r,o,b[0]/2),t(h[7],h[7],a,b[2]/2);var O=this.attributes;if(this.enableNormal){u[0]=i,u[1]=o,u[2]=n,u[3]=s,u[4]=a,u[5]=l;for(var C=this._vertexOffset,B=0;B<d.length;B++){for(var G=this._triangleOffset*3,R=0;R<6;R++)this.indices[G++]=C+c[R];C+=4,this._triangleOffset+=2}for(var B=0;B<d.length;B++)for(var H=u[B],R=0;R<4;R++){var W=d[B][R];O.position.set(this._vertexOffset,h[W]),O.normal.set(this._vertexOffset,H),O.color.set(this._vertexOffset++,A)}}else{for(var B=0;B<v.length;B++){for(var G=this._triangleOffset*3,R=0;R<3;R++)this.indices[G+R]=v[B][R]+this._vertexOffset;this._triangleOffset++}for(var B=0;B<h.length;B++)O.position.set(this._vertexOffset,h[B]),O.color.set(this._vertexOffset++,A)}}for(var j=this._vertexOffset,B=M;B<j;B++)this._dataIndices[B]=E}}(),_addBevelBar:function(){var e=ye.create(),t=ye.create(),r=ye.create(),i=su.create(),n=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,h,u,f,d,c,v){ye.copy(t,h),ye.normalize(t,t),ye.cross(r,u,t),ye.normalize(r,r),ye.cross(e,t,r),ye.normalize(r,r),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],d=Math.min(f[0],f[2])/2*d;for(var p=0;p<3;p++)n[p]=Math.max(f[p]-d*2,0);for(var m=(f[0]-n[0])/2,g=(f[1]-n[1])/2,T=(f[2]-n[2])/2,x=[],_=[],S=this._vertexOffset,b=[],p=0;p<2;p++){b[p]=b[p]=[];for(var A=0;A<=c;A++)for(var E=0;E<4;E++){(A===0&&p===0||p===1&&A===c)&&b[p].push(S);for(var M=0;M<=c;M++){var O=M/c*Math.PI/2+Math.PI/2*E,C=A/c*Math.PI/2+Math.PI/2*p;_[0]=m*Math.cos(O)*Math.sin(C),_[1]=g*Math.cos(C),_[2]=T*Math.sin(O)*Math.sin(C),x[0]=_[0]+a[E]*n[0]/2,x[1]=_[1]+g+s[p]*n[1]/2,x[2]=_[2]+o[E]*n[2]/2,Math.abs(m-g)<1e-6&&Math.abs(g-T)<1e-6||(_[0]/=m*m,_[1]/=g*g,_[2]/=T*T),ye.normalize(_,_),ye.transformMat3(x,x,i),ye.transformMat3(_,_,i),ye.add(x,x,l),this.attributes.position.set(S,x),this.enableNormal&&this.attributes.normal.set(S,_),this.attributes.color.set(S,v),S++}}}for(var B=c*4+3,G=c*2+1,R=B+1,E=0;E<G;E++)for(var p=0;p<=B;p++){var H=E*R+p+this._vertexOffset,W=E*R+(p+1)%R+this._vertexOffset,j=(E+1)*R+(p+1)%R+this._vertexOffset,k=(E+1)*R+p+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[j,H,W]),this.setTriangleIndices(this._triangleOffset++,[j,k,H])}this.setTriangleIndices(this._triangleOffset++,[b[0][0],b[0][2],b[0][1]]),this.setTriangleIndices(this._triangleOffset++,[b[0][0],b[0][3],b[0][2]]),this.setTriangleIndices(this._triangleOffset++,[b[1][0],b[1][1],b[1][2]]),this.setTriangleIndices(this._triangleOffset++,[b[1][0],b[1][2],b[1][3]]),this._vertexOffset=S}}()});zt(ua.prototype,ui);zt(ua.prototype,na);var lu=be.vec3;const hu=ct.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t,this._labelsBuilder=new Mt(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(i,n,a){if(r._data){var o=r._data.getItemLayout(i),s=o[0],l=o[1],h=o[2][1];return lu.scaleAndAdd([],s,l,a+h)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var i=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=i,this._barMesh||(this._barMesh=new y.Mesh({geometry:new ua,shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),i=e.get("shading"),n=i!=="color",a=this,o=this._barMesh,s="ecgl."+i;(!o.material||o.material.shader.name!==s)&&(o.material=y.createMaterial(s,["VERTEX_COLOR"])),y.setMaterialFromModel(i,o.material,e,t),o.geometry.enableNormal=n,o.geometry.resetOffset();var l=e.get("bevelSize"),h=e.get("bevelSmoothness");o.geometry.bevelSegments=h,o.geometry.bevelSize=l;var u=[],f=new Float32Array(r.count()*4),d=0,m=0,c=!1;r.each(function(T){if(r.hasValue(T)){var x=Be(r,T),_=Ie(r,T);_==null&&(_=1),y.parseColor(x,u),u[3]*=_,f[d++]=u[0],f[d++]=u[1],f[d++]=u[2],f[d++]=u[3],u[3]>0&&(m++,u[3]<.99&&(c=!0))}}),o.geometry.setBarCount(m);var v=r.getLayout("orient"),p=this._barIndexOfData=new Int32Array(r.count()),m=0;r.each(function(T){if(!r.hasValue(T)){p[T]=-1;return}var x=r.getItemLayout(T),_=x[0],S=x[1],b=x[2],A=T*4;u[0]=f[A++],u[1]=f[A++],u[2]=f[A++],u[3]=f[A++],u[3]>0&&(a._barMesh.geometry.addBar(_,S,v,b,u,T),p[T]=m++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var g=o.material;g.transparent=c,g.depthMask=!c,o.geometry.sortTriangles=c,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),i=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";i.seriesIndex=e.seriesIndex;var a=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var s=i.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,i.dataIndex=s},this),i.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,i.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=t.getItemModel(e),n=i.getModel("emphasis.itemStyle"),a=n.get("color"),o=n.get("opacity");if(a==null){var s=Be(t,e);a=qn(s,-.4)}o==null&&(o=Ie(t,e));var l=y.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=Be(t,e),n=Ie(t,e),a=y.parseColor(i);a[3]*=n,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=K.queryDataIndex(a,n),s=this;o!=null?xt(kt.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function uu(e){e.registerChartView(hu),e.registerSeriesModel(Bs),au(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(i){var n=i.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}Xe(uu);var fu=ft.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return tn(this)},formatTooltip:function(e){return ci(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),cu=be.vec3;y.Shader.import(en);const du=ct.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t},render:function(e,t,r){var i=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=i,this._line3DMesh||(this._line3DMesh=new y.Mesh({geometry:new Ut({useNativeLine:!1,sortTriangles:!0}),material:new y.Material({shader:y.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(e,r),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var r=e.getData(),i=this._line3DMesh;i.geometry.resetOffset();var n=r.getLayout("points"),a=[],o=new Float32Array(n.length/3*4),s=0,l=!1;r.each(function(f){var d=Be(r,f),c=Ie(r,f);c==null&&(c=1),y.parseColor(d,a),a[3]*=c,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(l=!0)}),i.geometry.setVertexCount(i.geometry.getPolylineVertexCount(n)),i.geometry.setTriangleCount(i.geometry.getPolylineTriangleCount(n)),i.geometry.addPolyline(n,o,K.firstNotNull(e.get("lineStyle.width"),1)),i.geometry.dirty(),i.geometry.updateBoundingBox();var h=i.material;h.transparent=l,h.depthMask=!l;var u=e.getModel("debug.wireframe");u.get("show")?(i.geometry.createAttribute("barycentric","float",3),i.geometry.generateBarycentric(),i.material.set("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",y.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)")),i.material.set("wireframeLineWidth",K.firstNotNull(u.get("lineStyle.width"),1))):i.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var r=e.getData(),i=e.coordinateSystem,n=this._line3DMesh,a=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=i.pointToData(o.point.array),l=r.indicesOfNearest("x",s[0])[0];l!==a&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),n.dataIndex=l),a=l},this),n.on("mouseout",function(o){a=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new U,t=this._camera;U.multiply(e,t.projectionMatrix,t.viewMatrix);var r=this._positionNDC,i=this._points,n=i.length/3;(!r||r.length/2!==n)&&(r=this._positionNDC=new Float32Array(n*2));for(var a=[],o=0;o<n;o++){var s=o*3,l=o*2;a[0]=i[s],a[1]=i[s+1],a[2]=i[s+2],a[3]=1,cu.transformMat4(a,a,e.array),r[l]=a[0]/a[3],r[l+1]=a[1]/a[3]}},_pick:function(e,t,r,i,n,a){var o=this._positionNDC,s=this._data.hostModel,l=s.get("lineStyle.width"),h=-1,u=r.viewport.width,f=r.viewport.height,d=u*.5,c=f*.5;e=(e+1)*d,t=(t+1)*c;for(var v=1;v<o.length/2;v++){var p=(o[(v-1)*2]+1)*d,m=(o[(v-1)*2+1]+1)*c,g=(o[v*2]+1)*d,T=(o[v*2+1]+1)*c;if(f1(p,m,g,T,l,e,t)){var x=(p-e)*(p-e)+(m-t)*(m-t),_=(g-e)*(g-e)+(T-t)*(T-t);h=x<_?v-1:v}}if(h>=0){var S=h*3,b=new L(this._points[S],this._points[S+1],this._points[S+2]);a.push({dataIndex:h,point:b,pointWorld:b.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(b)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function vu(e){e.registerChartView(du),e.registerSeriesModel(fu),e.registerLayout(function(t,r){t.eachSeriesByType("line3D",function(i){var n=i.getData(),a=i.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(n.count()*3),s=[],l=[],h=a.dimensions,u=h.map(function(f){return i.coordDimToDataDim(f)[0]});a&&n.each(u,function(f,d,c,v){s[0]=f,s[1]=d,s[2]=c,a.dataToPoint(s,l),o[v*3]=l[0],o[v*3+1]=l[1],o[v*3+2]=l[2]}),n.setLayout("points",o)}})})}Xe(vu);const pu=ft.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return tn(this)},getFormattedLabel:function(e,t,r,i){var n=kt.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},formatTooltip:function(e){return ci(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function Ln(e,i,r){var i=i||document.createElement("canvas");i.width=e,i.height=e;var n=i.getContext("2d");return r&&r(n),i}function mu(e,t,r,i){yt(t)||(t=[t,t]);var n=Wi.getMarginByStyle(r,i),a=t[0]+n.left+n.right,o=t[1]+n.top+n.bottom,s=c1(e,0,0,t[0],t[1]),l=Math.max(a,o);s.x=n.left,s.y=n.top,a>o?s.y+=(l-o)/2:s.x+=(l-a)/2;var h=s.getBoundingRect();return s.x-=h.x,s.y-=h.y,s.setStyle(r),s.update(),s.__size=l,s}function gu(e,t,r){var i=t.width,n=t.height,a=e.canvas.width,o=e.canvas.height,s=i/a,l=n/o;function h(g){return g<128?1:-1}function u(g,T){var x=1/0;g=Math.floor(g*s),T=Math.floor(T*l);for(var _=T*i+g,S=t.data[_*4],b=h(S),A=Math.max(T-r,0);A<Math.min(T+r,n);A++)for(var E=Math.max(g-r,0);E<Math.min(g+r,i);E++){var _=A*i+E,M=t.data[_*4],O=h(M),C=E-g,B=A-T;if(b!==O){var G=C*C+B*B;G<x&&(x=G)}}return b*Math.sqrt(x)}for(var f=e.createImageData(a,o),d=0;d<o;d++)for(var c=0;c<a;c++){var v=u(c,d),p=v/r*.5+.5,m=(d*a+c)*4;f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=255}return f}var Wi={getMarginByStyle:function(e){var t=e.minMargin||0,r=0;e.stroke&&e.stroke!=="none"&&(r=e.lineWidth==null?1:e.lineWidth);var i=e.shadowBlur||0,n=e.shadowOffsetX||0,a=e.shadowOffsetY||0,o={};return o.left=Math.max(r/2,-n+i,t),o.right=Math.max(r/2,n+i,t),o.top=Math.max(r/2,-a+i,t),o.bottom=Math.max(r/2,a+i,t),o},createSymbolSprite:function(e,t,r,i){var n=mu(e,t,r),a=Wi.getMarginByStyle(r);return{image:Ln(n.__size,i,function(o){No(o,n)}),margin:a}},createSDFFromCanvas:function(e,t,r,i){return Ln(t,i,function(n){var a=e.getContext("2d"),o=a.getImageData(0,0,e.width,e.height);n.putImageData(gu(n,o,r),0,0)})},createSimpleSprite:function(e,t){return Ln(e,t,function(r){var i=e/2;r.beginPath(),r.arc(i,i,60,0,Math.PI*2,!1),r.closePath();var n=r.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=n,r.fill()})}},_o=be.vec3;const _u={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var r=this.indices,i=_o.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<r.length;n++)r[n]=n}if(t===0){var a=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,n=0;n<this.vertexCount;n++){a.get(n,i);var l=_o.sqrDist(i,e);isNaN(l)&&(l=1e7,o++),n===0?(s=l,l=0):l=l-s,this._zList[n]=l}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,r=this.indices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Er.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._zList,r=this.indices;this._quickSort=this._quickSort||new Er,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}},yu=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`;var Mn=be.vec4;y.Shader.import(yu);var xu=y.Mesh.extend(function(){var e=new y.Geometry({dynamic:!0,attributes:{color:new y.Geometry.Attribute("color","float",4,"COLOR"),position:new y.Geometry.Attribute("position","float",3,"POSITION"),size:new y.Geometry.Attribute("size","float",1),prevPosition:new y.Geometry.Attribute("prevPosition","float",3),prevSize:new y.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,_u);var t=new y.Material({shader:y.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var r=new y.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",r),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:y.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,r,i,n,a){var o=this._positionNDC;if(o)for(var s=r.viewport,l=2/s.width,h=2/s.height,u=this.geometry.vertexCount-1;u>=0;u--){var f;this.geometry.indices?f=this.geometry.indices[u]:f=u;var d=o[f*2],c=o[f*2+1],v=this.geometry.attributes.size.get(f)/this.sizeScale,p=v/2;if(e>d-p*l&&e<d+p*l&&t>c-p*h&&t<c+p*h){var m=new y.Vector3,g=new y.Vector3;this.geometry.attributes.position.get(f,m.array),y.Vector3.transformMat4(g,m,this.worldTransform),a.push({vertexIndex:f,point:m,pointWorld:g,target:this,distance:g.distance(i.getWorldPosition())})}}},updateNDCPosition:function(e,t,r){var i=this._positionNDC,n=this.geometry;(!i||i.length/2!==n.vertexCount)&&(i=this._positionNDC=new Float32Array(n.vertexCount*2));for(var a=Mn.create(),o=0;o<n.vertexCount;o++)n.attributes.position.get(o,a),a[3]=1,Mn.transformMat4(a,a,e.array),Mn.scale(a,a,1/a[3]),i[o*2]=a[0],i[o*2+1]=a[1]}}),yo=20,xo=-10;function Tu(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function nr(e,t){this.rootNode=new y.Node,this.is2D=e,this._labelsBuilder=new Mt(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}nr.prototype={constructor:nr,highlightOnMouseover:!0,update:function(e,t,r,i,n){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=e.getData();if(i==null&&(i=0),n==null&&(n=o.count()),this._startDataIndex=i,this._endDataIndex=n-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new xu({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,l=this._mesh.geometry,h=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var u=this._getSymbolInfo(e,i,n),f=r.getDevicePixelRatio(),d=e.getModel("itemStyle").getItemStyle(),c=e.get("large"),v=1;u.maxSize>2?(v=this._updateSymbolSprite(e,d,u,f),s.enableTexture("sprite")):s.disableTexture("sprite"),h.position.init(n-i);var p=[];if(c){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var m=dh(o),g=vh(o);y.parseColor(m,p),p[3]*=g,s.set({color:p,u_Size:u.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),h.size.init(n-i),h.color.init(n-i),this._originalOpacity=new Float32Array(n-i);for(var T=o.getLayout("points"),x=h.position.value,_=0;_<n-i;_++){var S=_*3,b=_*2;if(this.is2D?(x[S]=T[b],x[S+1]=T[b+1],x[S+2]=xo):(x[S]=T[S],x[S+1]=T[S+1],x[S+2]=T[S+2]),!c){var m=Be(o,_),g=Ie(o,_);y.parseColor(m,p),p[3]*=g,h.color.set(_,p),p[3]<.99;var A=o.getItemVisual(_,"symbolSize");A=A instanceof Array?Math.max(A[0],A[1]):A,isNaN(A)&&(A=0),h.size.value[_]=A*v*this._sizeScale,this._originalOpacity[_]=p[3]}}this._mesh.sizeScale=v,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,d);var E=e.coordinateSystem;if(E&&E.viewGL){var M=E.viewGL.isLinearSpace()?"define":"undefine";s[M]("fragment","SRGB_DECODE")}c||this._updateLabelBuilder(e,i,n),this._updateHandler(e,t,r),this._updateAnimation(e),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,r,i){r.maxSize=Math.min(r.maxSize*2,200);var n=[];return r.aspect>1?(n[0]=r.maxSize,n[1]=r.maxSize/r.aspect):(n[1]=r.maxSize,n[0]=r.maxSize*r.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==r.type||!Tu(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&(Wi.createSymbolSprite(r.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),Wi.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),yo,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/r.maxSize*i},_updateMaterial:function(e,t){var r=e.get("blendMode")==="lighter"?y.additiveBlend:null,i=this._mesh.material;i.blend=r,i.set("lineWidth",t.lineWidth/yo);var n=y.parseColor(t.stroke);i.set("strokeColor",n),i.transparent=!0,i.depthMask=!1,i.depthTest=!this.is2D,i.sortVertices=!this.is2D},_updateLabelBuilder:function(e,o,r){var i=e.getData(),n=this._mesh.geometry,a=n.attributes.position.value,o=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(i,o,r),this._labelsBuilder.getLabelPosition=function(l,h,u){var f=(l-o)*3;return[a[f],a[f+1],a[f+2]]},this._labelsBuilder.getLabelDistance=function(l,h,u){var f=n.attributes.size.get(l-o)/s;return f/2+u},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,r){var i=e.getData(),n=this._mesh,a=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;s&&(l=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(h){var u=h.vertexIndex+a._startDataIndex;u!==o&&(this.highlightOnMouseover&&(this.downplay(i,o),this.highlight(i,u),this._labelsBuilder.updateLabels([u])),s&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(e.coordDimToDataDim("x")[0],u),i.get(e.coordDimToDataDim("y")[0],u),i.get(e.coordDimToDataDim("z")[0],u)],grid3DIndex:l.componentIndex})),n.dataIndex=u,o=u},this),n.on("mouseout",function(h){var u=h.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,u),this._labelsBuilder.updateLabels()),o=-1,n.dataIndex=-1,s&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,r){var i=e.getData();if(this._mesh){var n=this._mesh.geometry.attributes.position.value,a=i.getLayout("points");if(this.is2D)for(var o=0;o<a.length/2;o++){var s=o*3,l=o*2;n[s]=a[l],n[s+1]=a[l+1],n[s+2]=xo}else for(var o=0;o<a.length;o++)n[o]=a[o];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new U;U.mul(t,e.viewMatrix,this._mesh.worldTransform),U.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=e.getItemModel(t),i=r.getModel("emphasis.itemStyle"),n=i.get("color"),a=i.get("opacity");if(n==null){var o=Be(e,t);n=qn(o,-.4)}a==null&&(a=Ie(e,t));var s=y.parseColor(n);s[3]*=a,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=Be(e,t),i=Ie(e,t),n=y.parseColor(r);n[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,r=0;r<t.vertexCount;r++){var i=this._originalOpacity[r]*e;t.attributes.color.value[r*4+3]=i}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var r=this._mesh.geometry.attributes;if(r.size.value)for(var i=0;i<r.size.value.length;i++)r.size.value[i]=r.size.value[i]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,r){if(e.get("large")){var i=K.firstNotNull(e.get("symbolSize"),1),s,a;return i instanceof Array?(s=Math.max(i[0],i[1]),a=i[0]/i[1]):(s=i,a=1),{maxSize:i,type:e.get("symbol"),aspect:a}}for(var n=e.getData(),a,o=n.getItemVisual(0,"symbol")||"circle",s=0,l=t;l<r;l++){var i=n.getItemVisual(l,"symbolSize"),h=n.getItemVisual(l,"symbol"),u;if(i instanceof Array)u=i[0]/i[1],s=Math.max(Math.max(i[0],i[1]),s);else{if(isNaN(i))continue;u=1,s=Math.max(i,s)}o=h,a=u}return{maxSize:s,type:o,aspect:a}}};const wu=ct.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,r){if(this.groupGL.removeAll(),!!e.getData().count()){var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new nr(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,r),n.updateView(i.viewGL.camera)}}},incrementalPrepareRender:function(e,t,r){var i=e.coordinateSystem;i&&i.viewGL&&(i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new nr(!1,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,r,i,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=K.queryDataIndex(a,n),s=e==="highlight";o!=null?xt(kt.normalizeToArray(o),function(l){for(var h=0;h<this._pointsBuilderList.length;h++){var u=this._pointsBuilderList[h];s?u.highlight(a,l):u.downplay(a,l)}},this):a.each(function(l){for(var h=0;h<this._pointsBuilderList.length;h++){var u=this._pointsBuilderList[h];s?u.highlight(a,l):u.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Su(e){e.registerChartView(wu),e.registerSeriesModel(pu),e.registerLayout({seriesType:"scatter3D",reset:function(t){var r=t.coordinateSystem;if(r){var i=r.dimensions;if(i.length<3)return;var n=i.map(function(s){return t.coordDimToDataDim(s)[0]}),a=[],o=[];return{progress:function(s,l){for(var h=new Float32Array((s.end-s.start)*3),u=s.start;u<s.end;u++){var f=(u-s.start)*3;a[0]=l.get(n[0],u),a[1]=l.get(n[1],u),a[2]=l.get(n[2],u),r.dataToPoint(a,o),h[f]=o[0],h[f+1]=o[1],h[f+2]=o[2]}l.setLayout("points",h)}}}}})}Xe(Su);var Ce=be.vec3,To=be.vec2,St=Ce.normalize,Ai=Ce.cross,wo=Ce.sub,Cn=Ce.add,Bt=Ce.create,Rt=Bt(),tt=Bt(),Ot=Bt(),kr=Bt(),So=[],bo=[];function bu(e,t){To.copy(So,e[0]),To.copy(bo,e[1]);var r=[],i=r[0]=Bt(),n=r[1]=Bt(),a=r[2]=Bt(),o=r[3]=Bt();t.dataToPoint(So,i),t.dataToPoint(bo,o),St(Rt,i),wo(tt,o,i),St(tt,tt),Ai(Ot,tt,Rt),St(Ot,Ot),Ai(tt,Rt,Ot),Cn(n,Rt,tt),St(n,n),St(Rt,o),wo(tt,i,o),St(tt,tt),Ai(Ot,tt,Rt),St(Ot,Ot),Ai(tt,Rt,Ot),Cn(a,Rt,tt),St(a,a),Cn(kr,i,o),St(kr,kr);var s=Ce.dot(i,kr),l=Ce.dot(kr,n),h=(Math.max(Ce.len(i),Ce.len(o))-s)/l*2;return Ce.scaleAndAdd(n,i,n,h),Ce.scaleAndAdd(a,o,a,h),r}function Eu(e,t,r){var i=[],n=i[0]=Ce.create(),a=i[1]=Ce.create(),o=i[2]=Ce.create(),s=i[3]=Ce.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],s);var l=Ce.dist(n,s);return Ce.lerp(a,n,s,.3),Ce.lerp(o,n,s,.3),Ce.scaleAndAdd(a,a,r,Math.min(l*.1,10)),Ce.scaleAndAdd(o,o,r,Math.min(l*.1,10)),i}function Fs(e,t){for(var r=new Float32Array(e.length*3),i=0,n=[],a=0;a<e.length;a++)t.dataToPoint(e[a],n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];return r}function zs(e){var t=[];return e.each(function(r){var i=e.getItemModel(r),n=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function Au(e,t){var r=e.getData(),i=e.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var n=zs(r);r.each(function(a){var o=n.coordsList[a],s=i?Fs:bu;r.setItemLayout(a,s(o,t))})}function Eo(e,t,r){var i=e.getData(),n=e.get("polyline"),a=zs(i);i.setLayout("lineType",n?"polyline":"cubicBezier"),i.each(function(o){var s=a.coordsList[o],l=n?Fs(s,t):Eu(s,t,r);i.setItemLayout(o,l)})}function Lu(e,t){e.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?Au(r,i):i.type==="geo3D"?Eo(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&Eo(r,i,[0,0,1])})}const Mu=ft.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new Tt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),Cu=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`;var Ao=be.vec3;function Du(e){return e>0?1:-1}y.Shader.import(Cu);const Pu=y.Mesh.extend(function(){var e=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.trail2.vertex"),y.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Ut({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var i=e.hostModel,n=this.geometry,a=i.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),l=i.get("effect.constantSpeed"),h=i.get("effect.period")*1e3,u=l!=null;u?this.material.set("speed",l/1e3):this.material.set("period",h),this.material[u?"define":"undefine"]("vertex","CONSTANT_SPEED");var f=i.get("polyline");n.trailLength=s,this.material.set("trailLength",s),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(A){n.attributes[A].value=r.attributes[A].value});var d=["dist","distAll","start","offset","color"];d.forEach(function(A){n.attributes[A].init(n.vertexCount)}),n.indices=r.indices;var c=[],v=a.get("trailColor"),p=a.get("trailOpacity"),m=v!=null,g=p!=null;this.updateWorldTransform();var T=this.worldTransform.x.len(),x=this.worldTransform.y.len(),_=this.worldTransform.z.len(),S=0,b=0;e.each(function(A){var E=e.getItemLayout(A),M=g?p:Ie(e,A),O=Be(e,A);M==null&&(M=1),c=y.parseColor(m?v:O,c),c[3]*=M;for(var C=f?r.getPolylineVertexCount(E):r.getCubicCurveVertexCount(E[0],E[1],E[2],E[3]),B=0,G=[],R=[],H=S;H<S+C;H++)n.attributes.position.get(H,G),G[0]*=T,G[1]*=x,G[2]*=_,H>S&&(B+=Ao.dist(G,R)),n.attributes.dist.set(H,B),Ao.copy(R,G);b=Math.max(b,B);for(var W=Math.random()*(u?B:h),H=S;H<S+C;H++)n.attributes.distAll.set(H,B),n.attributes.start.set(H,W),n.attributes.offset.set(H,Du(r.attributes.offset.get(H))*o/2),n.attributes.color.set(H,c);S+=C}),this.material.set("spotSize",b*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});y.Shader.import(en);function Nu(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const Ru=ct.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._meshLinesMaterial=new y.Material({shader:y.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new y.Mesh({geometry:new Ut,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new Pu},render:function(e,t,r){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,n=e.getData();if(i&&i.viewGL){var a=i.viewGL;a.add(this.groupGL),this._updateLines(e,t,r);var o=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(n,r,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var i=e.getData(),n=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=Nu(n);a.segmentScale=s/20;var l="lineStyle.width".split("."),h=r.getDevicePixelRatio();i.each(function(c){var v=i.getItemModel(c),p=v.get(l);p==null&&(p=1),i.setItemVisual(c,"lineWidth",p)}),a.useNativeLine=!1;var u=0,f=0;i.each(function(c){var v=i.getItemLayout(c);o?(u+=a.getPolylineVertexCount(v),f+=a.getPolylineTriangleCount(v)):(u+=a.getCubicCurveVertexCount(v[0],v[1],v[2],v[3]),f+=a.getCubicCurveTriangleCount(v[0],v[1],v[2],v[3]))}),a.setVertexCount(u),a.setTriangleCount(f),a.resetOffset();var d=[];i.each(function(c){var v=i.getItemLayout(c),p=Be(i,c),m=Ie(i,c),g=i.getItemVisual(c,"lineWidth")*h;m==null&&(m=1),d=y.parseColor(p,d),d[3]*=m,o?a.addPolyline(v,d,g):a.addCubicCurve(v[0],v[1],v[2],v[3],d,g)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Ou(e){e.registerChartView(Ru),e.registerSeriesModel(Mu),e.registerLayout(Lu),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}Xe(Ou);function Lo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Gs=ft.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(i=[i]);for(var n=[],a=0;a<i.length;a++){for(var o=[],s=1;s<i[a].length;s++)o.push(Lo(t,i[a][s]));n.push({exterior:Lo(t,i[a][0]),interiors:o})}return n},getInitialData:function(e){var t=new Tt(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(r,i,n,a){if(r instanceof Array)return NaN;t.hasItemOption=!0;var o=r.value;if(o!=null)return o instanceof Array?o[a]:o}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});se(Gs.prototype,Nr);const Iu=ct.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new Ar(r),n.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(i,n),n.update(e,t,r),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,r,i){var n=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;n||(n=new Ar(i),n.extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,r,i,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(a,n),this._currentStep++},_updateShaderDefines:function(e,t){var r=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(i){i.material&&(i.material[r]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function Bu(e){e.registerChartView(Iu),e.registerSeriesModel(Gs)}Xe(Bu);var Us=ft.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return ci(this,e)},getInitialData:function(e,t){var r=e.data;function i(j){return!(isNaN(j.min)||isNaN(j.max)||isNaN(j.step))}function n(j){var k=Ro;return Math.max(k(j.min),k(j.max),k(j.step))+1}if(!r)if(e.parametric){var _=e.parametricEquation||{},S=_.u||{},b=_.v||{};["u","v"].forEach(function(k){i(_[k])}),["x","y","z"].forEach(function(k){_[k]});var A=Math.floor((S.max+S.step-S.min)/S.step),E=Math.floor((b.max+b.step-b.min)/b.step);r=new Float32Array(A*E*5);for(var M=n(S),O=n(b),d=0,c=0;c<E;c++)for(var v=0;v<A;v++){var C=v*S.step+S.min,B=c*b.step+b.min,G=di(Math.min(C,S.max),M),R=di(Math.min(B,b.max),O),p=_.x(G,R),m=_.y(G,R),x=_.z(G,R);r[d++]=p,r[d++]=m,r[d++]=x,r[d++]=G,r[d++]=R}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(j){i(a[j])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),h=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*h*3);for(var u=n(o),f=n(s),d=0,c=0;c<h;c++)for(var v=0;v<l;v++){var p=v*o.step+o.min,m=c*s.step+s.min,g=di(Math.min(p,o.max),u),T=di(Math.min(m,s.max),f),x=a.z(g,T);r[d++]=g,r[d++]=T,r[d++]=x}}var H=["x","y","z"];e.parametric&&H.push("u","v");var W=tn(this,H,r);return W},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});se(Us.prototype,Nr);var Kt=be.vec3;function Fu(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}const zu=ct.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=y.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),y.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var h=e.get("parametric"),u=e.get("dataShape");u||(u=this._getDataShape(o,h));var f=e.getModel("wireframe"),d=f.get("lineStyle.width"),c=f.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,u,c);var v=this._surfaceMesh.material;c?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",d),v.set("wireframeLineColor",y.parseColor(f.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new y.Mesh({geometry:new y.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,na),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var h=1/0,u=-1,f=[],d=0;d<s.length;d++){i.geometry.attributes.position.get(s[d],f);var c=Kt.dist(l.array,f);c<h&&(h=c,u=s[d])}return u}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var h=[];i.geometry.attributes.position.get(l,h);for(var u=n.pointToData(h),f=1/0,d=-1,c=[],v=0;v<r.count();v++){c[0]=r.get("x",v),c[1]=r.get("y",v),c[2]=r.get("z",v);var p=Kt.squaredDistance(c,u);p<f&&(d=v,f=p)}d!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:u}),o=d,i.dataIndex=d}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(Le){a.hasValue(Le)||s++});var l=s||i,h=n.attributes.position,u=n.attributes.normal,f=n.attributes.texcoord0,d=n.attributes.barycentric,c=n.attributes.color,v=r[0],p=r[1],m=t.get("shading"),g=m!=="color";if(l){var T=(v-1)*(p-1)*4;h.init(T),i&&d.init(T)}else h.value=new Float32Array(o);c.init(n.vertexCount),f.init(n.vertexCount);var x=[0,3,1,1,3,2],_=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],S=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),b=function(Le,dt,We){We[1]=Le*p+dt,We[0]=Le*p+dt+1,We[3]=(Le+1)*p+dt+1,We[2]=(Le+1)*p+dt},A=!1;if(l){var E=[],M=[],O=0;g?u.init(n.vertexCount):u.value=null;for(var C=[[],[],[]],B=[],G=[],R=Kt.create(),H=function(Le,dt,We){var rn=dt*3;return We[0]=Le[rn],We[1]=Le[rn+1],We[2]=Le[rn+2],We},W=new Float32Array(o.length),j=new Float32Array(o.length/3*4),k=0;k<a.count();k++)if(a.hasValue(k)){var ze=y.parseColor(Be(a,k)),ne=Ie(a,k);ne!=null&&(ze[3]*=ne),ze[3]<.99&&(A=!0);for(var X=0;X<4;X++)j[k*4+X]=ze[X]}for(var he=[1e7,1e7,1e7],k=0;k<v-1;k++)for(var re=0;re<p-1;re++){var ce=k*(p-1)+re,de=ce*4;b(k,re,E);for(var Q=!1,X=0;X<4;X++)H(o,E[X],M),Fu(M)&&(Q=!0);for(var X=0;X<4;X++)Q?h.set(de+X,he):(H(o,E[X],M),h.set(de+X,M)),i&&d.set(de+X,_[X]);for(var X=0;X<6;X++)S[O++]=x[X]+de;if(g&&!Q)for(var X=0;X<2;X++){for(var Ae=X*3,ge=0;ge<3;ge++){var xe=E[x[Ae]+ge];H(o,xe,C[ge])}Kt.sub(B,C[0],C[1]),Kt.sub(G,C[1],C[2]),Kt.cross(R,B,G);for(var ge=0;ge<3;ge++){var ke=E[x[Ae]+ge]*3;W[ke]=W[ke]+R[0],W[ke+1]=W[ke+1]+R[1],W[ke+2]=W[ke+2]+R[2]}}}if(g)for(var k=0;k<W.length/3;k++)H(W,k,R),Kt.normalize(R,R),W[k*3]=R[0],W[k*3+1]=R[1],W[k*3+2]=R[2];for(var ze=[],Ne=[],k=0;k<v-1;k++)for(var re=0;re<p-1;re++){var ce=k*(p-1)+re,de=ce*4;b(k,re,E);for(var X=0;X<4;X++){for(var ge=0;ge<4;ge++)ze[ge]=j[E[X]*4+ge];c.set(de+X,ze),g&&(H(W,E[X],R),u.set(de+X,R));var xe=E[X];Ne[0]=xe%p/(p-1),Ne[1]=Math.floor(xe/p)/(v-1),f.set(de+X,Ne)}ce++}}else{for(var Ne=[],k=0;k<a.count();k++){Ne[0]=k%p/(p-1),Ne[1]=Math.floor(k/p)/(v-1);var ze=y.parseColor(Be(a,k)),ne=Ie(a,k);ne!=null&&(ze[3]*=ne),ze[3]<.99&&(A=!0),c.set(k,ze),f.set(k,Ne)}for(var E=[],Ir=0,k=0;k<v-1;k++)for(var re=0;re<p-1;re++){b(k,re,E);for(var X=0;X<6;X++)S[Ir++]=E[x[X]]}g?n.generateVertexNormals():u.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=A,e.material.depthMask=!A},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var h=e.get(o,l);h<r&&(n=0,i++),r=h,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var u=Math.floor(Math.sqrt(s));u>0;){if(Math.floor(s/u)===s/u)return[u,s/u];u--}return u=Math.floor(Math.sqrt(s)),[u,u]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Gu(e){e.registerChartView(zu),e.registerSeriesModel(Us),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,h=l.map(function(u){return i.coordDimToDataDim(u)[0]});a.each(h,function(u,f,d,c){var v;a.hasValue(c)?v=n.dataToPoint([u,f,d]):v=s,o[c*3]=v[0],o[c*3+1]=v[1],o[c*3+2]=v[2]})}a.setLayout("points",o)})})}Xe(Gu);function Mo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Or=ft.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=si(e.data,{coordDimensions:["value"]}),r=new Tt(t,this);r.initData(e.data);var i={};return r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,r},formatTooltip:function(e){return ci(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Xi(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getName(e);if(t.transform){var i=t.getRegion(r);return i?i.geometries:[]}else{this._geo||(this._geo=aa.createGeo3D(this));for(var i=this._geo.getRegion(r),n=[],a=0;a<i.geometries.length;a++){var o=i.geometries[a],s=[],l=Mo(t,o.exterior);if(s&&s.length)for(var h=0;h<o.interiors.length;h++)s.push(Mo(t,s[h]));n.push({interiors:s,exterior:l})}return n}},getFormattedLabel:function(e,t){var r=kt.getFormattedLabel(this,e,t);return r==null&&(r=this.getData().getName(e)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});se(Or.prototype,_s);se(Or.prototype,$i);se(Or.prototype,Cr);se(Or.prototype,Dr);se(Or.prototype,Nr);const Uu=ct.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Ar(t),this.groupGL=new y.Node},render:function(e,t,r){var i=e.coordinateSystem;if(!(!i||!i.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),i.viewGL.add(this.groupGL),i.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new Ft,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._control;n||(n=this._control=new hi({zr:r.getZr()}),this._control.init());var a=e.getModel("viewControl");n.setViewGL(i.viewGL),n.setFromViewControlModel(a,0),n.off("update"),n.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,r,i){var n=i.renderer,a=e.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function Hu(e){As(e),e.registerChartView(Uu),e.registerSeriesModel(Or),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"series",subType:"map3D",query:t},function(i){i.setView(t)})})}Xe(Hu);const Vu=ft.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Vs(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function Ct(e){this.viewGL=e}Ct.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=d1(),this.updateTransform(e,t)};Ct.prototype.updateTransform=function(e,t){var r=e.coordinateSystem;r.getRoamTransform&&(v1(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};Ct.prototype.dataToPoint=function(e,t,r){r=e.dataToPoint(t,null,r);var i=this._viewTransform;i&&Fo(r,r,i)};Ct.prototype.removeTransformInPoint=function(e){return this._viewTransform&&Fo(e,e,this._viewTransform),e};Ct.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};Ct.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};Ct.prototype._updateCamera=function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=t,i.right=e,i.near=0,i.far=100};const ku=ct.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new le("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new Ct(this.viewGL)},render:function(e,t,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,r),!!e.getData().count()){var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new nr(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.update(e,t,r),this.viewGL.setPostEffect(e.getModel("postEffect"),r)}},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new nr(!0,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,r,i,e.start,e.end),i.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,r){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,r);var i=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(i-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(a){a.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],r=0;r<e.length;r+=2)t[0]=e[r],t[1]=e[r+1],this._glViewHelper.removeTransformInPoint(t),e[r]=t[0],e[r+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function Wu(e){e.registerChartView(ku),e.registerSeriesModel(Vu),e.registerLayout({seriesType:"scatterGL",reset:function(t){var r=t.coordinateSystem,i=t.getData(),n;if(r){var a=r.dimensions.map(function(s){return i.mapDimension(s)}).slice(0,2),o=[];a.length===1?n=function(s){for(var l=new Float32Array((s.end-s.start)*2),h=s.start;h<s.end;h++){var u=(h-s.start)*2,f=i.get(a[0],h),d=r.dataToPoint(f);l[u]=d[0],l[u+1]=d[1]}i.setLayout("points",l)}:a.length===2&&(n=function(s){for(var l=new Float32Array((s.end-s.start)*2),h=s.start;h<s.end;h++){var u=(h-s.start)*2,f=i.get(a[0],h),d=i.get(a[1],h);o[0]=f,o[1]=d,o=r.dataToPoint(o),l[u]=o[0],l[u+1]=o[1]}i.setLayout("points",l)})}return{progress:n}}})}Xe(Wu);function Xu(e,t,r,i,n){for(var a=new p1(i),o=0;o<e.length;o++)a.addNode(K.firstNotNull(e[o].id,e[o].name,o),o);for(var s=[],l=[],h=0,o=0;o<t.length;o++){var u=t[o],f=u.source,d=u.target;a.addEdge(f,d,h)&&(l.push(u),s.push(K.firstNotNull(u.id,f+" > "+d)),h++)}var c,v=si(e,{coordDimensions:["value"]});c=new Tt(v,r),c.initData(e);var p=new Tt(["value"],r);return p.initData(l,s),n&&n(c,p),m1({mainData:c,struct:a,structAttr:"graph",datas:{node:c,edge:p},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}var jr=ft.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){jr.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){jr.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,r,i){var n=kt.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},getInitialData:function(e,t){var r=e.edges||e.links||[],i=e.data||e.nodes||[],n=this;if(i&&r)return Xu(i,r,this,!0,a).data;function a(o,s){o.wrapMethod("getItemModel",function(f){const d=n._categoriesModels,c=f.getShallow("category"),v=d[c];return v&&(v.parentModel=f.parentModel,f.parentModel=v),f});const l=t.getModel([]).getModel;function h(f,d){const c=l.call(this,f,d);return c.resolveParentPath=u,c}s.wrapMethod("getItemModel",function(f){return f.resolveParentPath=u,f.getModel=h,f});function u(f){if(f&&(f[0]==="label"||f[1]==="label")){const d=f.slice();return f[0]==="label"?d[0]="edgeLabel":f[1]==="label"&&(d[1]="edgeLabel"),d}return f}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,r){if(r==="edge"){var i=this.getData(),n=this.getDataParams(e,r),a=i.graph.getEdgeByIndex(e),o=i.getName(a.node1.dataIndex),s=i.getName(a.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=pr(l.join(" > ")),n.value&&(l+=" : "+pr(n.value)),l}else return jr.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),t=new Tt(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(r){return t.getItemModel(r,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var r=e[t*2],i=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=r,n.y=i}},isAnimationEnabled:function(){return jr.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),Me=be.vec2,Co=[[0,0],[1,1]],fa=$.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new $.Attribute("position","float",2,"POSITION"),normal:new $.Attribute("normal","float",2),offset:new $.Attribute("offset","float",1),color:new $.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Me.dist(e,t)+Me.dist(r,t)+Me.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Co)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Co)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=t[0],h=t[1],u=r[0],f=r[1],d=i[0],c=i[1],v=this._getCubicCurveApproxStep(e,t,r,i),p=v*v,m=p*v,g=3*v,T=3*p,x=6*p,_=6*m,S=o-l*2+u,b=s-h*2+f,A=(l-u)*3-o+d,E=(h-f)*3-s+c,M=o,O=s,C=(l-o)*g+S*T+A*m,B=(h-s)*g+b*T+E*m,G=S*x+A*_,R=b*x+E*_,H=A*_,W=E*_,j=0,k=0,ne=Math.ceil(1/v),X=new Float32Array((ne+1)*3),X=[],he=0,k=0;k<ne+1;k++)X[he++]=M,X[he++]=O,M+=C,O+=B,C+=G,B+=R,G+=H,R+=W,j+=v,j>1&&(M=C>0?Math.min(M,d):Math.max(M,d),O=B>0?Math.min(O,c):Math.max(O,c));this.addPolyline(X,n,a)},addLine:function(e,t,r,i){this.addPolyline([e,t],r,i)},addPolyline:function(){var e=Me.create(),t=Me.create(),r=Me.create(),i=Me.create(),n=[],a=[],o=[];return function(s,l,h,u,f){if(s.length){var d=typeof s[0]!="number";if(f==null&&(f=d?s.length:s.length/2),!(f<2)){u==null&&(u=0),h==null&&(h=1),this._itemVertexOffsets.push(this._vertexOffset);for(var c=d?typeof l[0]!="number":l.length/4===f,v=this.attributes.position,p=this.attributes.color,m=this.attributes.offset,g=this.attributes.normal,T=this.indices,x=this._vertexOffset,_,S=0;S<f;S++){if(d)n=s[S+u],c?_=l[S+u]:_=l;else{var b=S*2+u;if(n=n||[],n[0]=s[b],n[1]=s[b+1],c){var A=S*4+u;_=_||[],_[0]=l[A],_[1]=l[A+1],_[2]=l[A+2],_[3]=l[A+3]}else _=l}if(this.useNativeLine)S>1&&(v.copy(x,x-1),p.copy(x,x-1),x++);else{var E;if(S<f-1){if(d)Me.copy(a,s[S+1]);else{var b=(S+1)*2+u;a=a||[],a[0]=s[b],a[1]=s[b+1]}if(S>0){Me.sub(e,n,o),Me.sub(t,a,n),Me.normalize(e,e),Me.normalize(t,t),Me.add(i,e,t),Me.normalize(i,i);var M=h/2*Math.min(1/Me.dot(e,i),2);r[0]=-i[1],r[1]=i[0],E=M}else Me.sub(e,a,n),Me.normalize(e,e),r[0]=-e[1],r[1]=e[0],E=h/2}else Me.sub(e,n,o),Me.normalize(e,e),r[0]=-e[1],r[1]=e[0],E=h/2;g.set(x,r),g.set(x+1,r),m.set(x,E),m.set(x+1,-E),Me.copy(o,n),v.set(x,n),v.set(x+1,n),p.set(x,_),p.set(x+1,_),x+=2}if(this.useNativeLine)p.set(x,_),v.set(x,n),x++;else if(S>0){var O=this._faceOffset*3,T=this.indices;T[O]=x-4,T[O+1]=x-3,T[O+2]=x-2,T[O+3]=x-3,T[O+4]=x-1,T[O+5]=x-2,this._faceOffset+=2}}this._vertexOffset=x}}}}(),setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")}});zt(fa.prototype,ui);const ju=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;y.Shader.import(ju);var Dn={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Pe(e){var t={type:y.Texture.FLOAT,minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST};this._positionSourceTex=new y.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new y.Texture2D(t),this._positionPrevTex=new y.Texture2D(t),this._forceTex=new y.Texture2D(t),this._forcePrevTex=new y.Texture2D(t),this._weightedSumTex=new y.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new y.Texture2D(t),this._globalSpeedPrevTex=new y.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Ee({fragment:y.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Ee({fragment:y.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Ee({fragment:y.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Ee({fragment:y.Shader.source("clay.compositor.output")});var r=function(i){i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ONE)};this._edgeForceMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node1:new y.Geometry.Attribute("node1","float",2),node2:new y.Geometry.Attribute("node2","float",2),weight:new y.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._weightedSumMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._framebuffer=new Se({depthBuffer:!1}),this._dummyCamera=new y.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Pe.prototype.updateOption=function(e){for(var t in Dn)this[t]=Dn[t];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,e)for(var t in Dn)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)i[n*4+2]=(this._nodes[n].degree||0)+1};Pe.prototype._updateGravityCenter=function(e){var t=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[1/0,1/0],n=[-1/0,-1/0],a=0;a<t.length;a++)i[0]=Math.min(t[a].x,i[0]),i[1]=Math.min(t[a].y,i[1]),n[0]=Math.max(t[a].x,n[0]),n[1]=Math.max(t[a].y,n[1]);this._gravityCenter=[(i[0]+n[0])*.5,(i[1]+n[1])*.5]}for(var a=0;a<r.length;a++){var o=r[a].node1,s=r[a].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}};Pe.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(e.length)),i=r,n=new Float32Array(r*i*4);this._resize(r,i);for(var a=0,o=0;o<e.length;o++){var s=e[o];n[a++]=s.x||0,n[a++]=s.y||0,n[a++]=s.mass||1,n[a++]=s.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,h=t.length;l.attributes.node1.init(h*2),l.attributes.node2.init(h*2),l.attributes.weight.init(h*2);for(var u=[],o=0;o<t.length;o++){var f=l.attributes,d=t[o].weight;d==null&&(d=1),f.node1.set(o,this.getNodeUV(t[o].node1,u)),f.node2.set(o,this.getNodeUV(t[o].node2,u)),f.weight.set(o,d),f.node1.set(o+h,this.getNodeUV(t[o].node2,u)),f.node2.set(o+h,this.getNodeUV(t[o].node1,u)),f.weight.set(o+h,d)}var c=this._weightedSumMesh.geometry;c.attributes.node.init(e.length);for(var o=0;o<e.length;o++)c.attributes.node.set(o,this.getNodeUV(o,u));l.dirty(),c.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0};Pe.prototype.getNodes=function(){return this._nodes};Pe.prototype.getEdges=function(){return this._edges};Pe.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()};Pe.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1);for(var i=0;i<t;i++)this.step(e);r&&r()};Pe.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Pe.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1)||0,t};Pe.prototype.getNodePosition=function(e,t){var r=this._positionArr,i=this._positionTex.width,n=this._positionTex.height,a=i*n;(!r||r.length!==a*4)&&(r=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,r),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)t[o*2]=r[o*4],t[o*2+1]=r[o*4+1];return t};Pe.prototype.getTextureData=function(e,t){var r=this["_"+t+"Tex"],i=r.width,n=r.height;this._framebuffer.bind(e),this._framebuffer.attach(r);var a=new Float32Array(i*n*4);return e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a};Pe.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Pe.prototype.isFinished=function(e){return this._frame>e};Pe.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Pe.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Pe.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=e,this[r].height=t,this[r].dirty()},this)};Pe.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function Zu(){var e={create:function(){return new Float32Array(2)},dist:function(l,h){var u=h[0]-l[0],f=h[1]-l[1];return Math.sqrt(u*u+f*f)},len:function(l){var h=l[0],u=l[1];return Math.sqrt(h*h+u*u)},scaleAndAdd:function(l,h,u,f){return l[0]=h[0]+u[0]*f,l[1]=h[1]+u[1]*f,l},scale:function(l,h,u){return l[0]=h[0]*u,l[1]=h[1]*u,l},add:function(l,h,u){return l[0]=h[0]+u[0],l[1]=h[1]+u[1],l},sub:function(l,h,u){return l[0]=h[0]-u[0],l[1]=h[1]-u[1],l},normalize:function(l,h){var u=h[0],f=h[1],d=u*u+f*f;return d>0&&(d=1/Math.sqrt(d),l[0]=h[0]*d,l[1]=h[1]*d),l},negate:function(l,h){return l[0]=-h[0],l[1]=-h[1],l},copy:function(l,h){return l[0]=h[0],l[1]=h[1],l},set:function(l,h,u){return l[0]=h,l[1]=u,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=t.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,h){for(var u=0;u<this.nSubRegions;u++){var f=this.subRegions[u];if(f.contain(l,h))return f}},r.contain=function(l,h){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=h&&this.bbox[3]>=h},r.setBBox=function(l,h,u,f){this.bbox[0]=l,this.bbox[1]=h,this.bbox[2]=u,this.bbox[3]=f,this.size=(u-l+f-h)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var h=this.findSubRegion(l.position[0],l.position[1]),u=this.bbox;if(!h){var f=(u[0]+u[2])/2,d=(u[1]+u[3])/2,c=(u[2]-u[0])/2,v=(u[3]-u[1])/2,p=l.position[0]>=f?1:0,m=l.position[1]>=d?1:0,h=this._newSubRegion();h.setBBox(p*c+u[0],m*v+u[1],(p+1)*c+u[0],(m+1)*v+u[1])}h.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var h=this.centerOfMass[0]*this.mass,u=this.centerOfMass[1]*this.mass;h+=l.position[0]*l.mass,u+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=h/this.mass,this.centerOfMass[1]=u/this.mass};function i(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,h){this.source=l,this.target=h,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(l,h,u){var f=h.length;this.nodes.length=0;for(var d=typeof u<"u",c=0;c<f;c++){var v=new i;v.position[0]=l[c*2],v.position[1]=l[c*2+1],v.mass=h[c],d&&(v.size=u[c]),this.nodes.push(v)}this._massArr=h,this._swingingArr=new Float32Array(f),d&&(this._sizeArr=u)},o.initEdges=function(l,h){var u=l.length/2;this.edges.length=0;for(var f=0;f<u;f++){var d=l[f*2],c=l[f*2+1],v=this.nodes[d],p=this.nodes[c];if(!v||!p){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,p.inDegree++;var m=new n(v,p);h&&(m.weight=h[f]),this.edges.push(m)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var h=this.nodes[l];h.mass=h.inDegree+h.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var h=this.nodes[l];h.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var h=0;h<l;h++)this.rootRegion.addNode(this.nodes[h]);this.rootRegion.afterUpdate()}for(var h=0;h<l;h++){var u=this.nodes[h];e.copy(u.forcePrev,u.force),e.set(u.force,0,0)}for(var h=0;h<l;h++){var f=this.nodes[h];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,f);else for(var d=h+1;d<l;d++){var c=this.nodes[d];this.applyNodeToNodeRepulsion(f,c,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(f):this.applyNodeGravity(f))}for(var h=0;h<this.edges.length;h++)this.applyEdgeAttraction(this.edges[h]);for(var v=0,p=0,m=e.create(),h=0;h<l;h++){var u=this.nodes[h],g=e.dist(u.force,u.forcePrev);v+=g*u.mass,e.add(m,u.force,u.forcePrev);var T=e.len(m)*.5;p+=T*u.mass,this._swingingArr[h]=g}var x=this.jitterTolerence*this.jitterTolerence*p/v;this._globalSpeed>0&&(x=Math.min(x/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=x;for(var h=0;h<l;h++){var u=this.nodes[h],g=this._swingingArr[h],_=.1*x/(1+x*Math.sqrt(g)),S=e.len(u.force);S>0&&(_=Math.min(S*_,10)/S,e.scaleAndAdd(u.position,u.position,u.force,_))}},o.applyRegionToNodeRepulsion=function(){var l=e.create();return function(u,f){if(u.node)this.applyNodeToNodeRepulsion(u.node,f,!0);else{e.sub(l,f.position,u.centerOfMass);var d=l[0]*l[0]+l[1]*l[1];if(d>this.barnesHutTheta*u.size*u.size){var c=this.scaling*f.mass*u.mass/d;e.scaleAndAdd(f.force,f.force,l,c)}else for(var v=0;v<u.nSubRegions;v++)this.applyRegionToNodeRepulsion(u.subRegions[v],f)}}}(),o.applyNodeToNodeRepulsion=function(){var l=e.create();return function(u,f,d){if(u!=f){e.sub(l,u.position,f.position);var c=l[0]*l[0]+l[1]*l[1];if(c!==0){var v;if(this.preventOverlap){var p=Math.sqrt(c);if(p=p-u.size-f.size,p>0)v=this.scaling*u.mass*f.mass/(p*p);else if(p<0)v=this.scaling*100*u.mass*f.mass;else return}else v=this.scaling*u.mass*f.mass/c;e.scaleAndAdd(u.force,u.force,l,v),e.scaleAndAdd(f.force,f.force,l,-v)}}}}(),o.applyEdgeAttraction=function(){var l=e.create();return function(u){var f=u.source,d=u.target;e.sub(l,f.position,d.position);var c=e.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=u.weight:v=Math.pow(u.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(c=c-f.size-d.size,c<=0)||(this.linLogMode?p=-v*Math.log(c+1)/(c+1):p=-v,e.scaleAndAdd(f.force,f.force,l,p),e.scaleAndAdd(d.force,d.force,l,-p))}}(),o.applyNodeGravity=function(){var l=e.create();return function(h){e.sub(l,this.gravityCenter,h.position);var u=e.len(l);e.scaleAndAdd(h.force,h.force,l,this.gravity*h.mass/(u+1))}}(),o.applyNodeStrongGravity=function(){var l=e.create();return function(h){e.sub(l,this.gravityCenter,h.position),e.scaleAndAdd(h.force,h.force,l,this.gravity*h.mass)}}(),o.updateBBox=function(){for(var l=1/0,h=1/0,u=-1/0,f=-1/0,d=0;d<this.nodes.length;d++){var c=this.nodes[d].position;l=Math.min(l,c[0]),h=Math.min(h,c[1]),u=Math.max(u,c[0]),f=Math.max(f,c[1])}this.bbox[0]=l,this.bbox[1]=h,this.bbox[2]=u,this.bbox[3]=f},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new a,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var h in l.data.config)s[h]=l.data.config[h];break;case"update":var u=l.data.steps;if(s){for(var f=0;f<u;f++)s.update();for(var d=s.nodes.length,c=new Float32Array(d*2),f=0;f<d;f++){var v=s.nodes[f];c[f*2]=v.position[0],c[f*2+1]=v.position[1]}self.postMessage({buffer:c.buffer,globalSpeed:s.getGlobalSpeed()},[c.buffer])}else{var p=new Float32Array;self.postMessage({buffer:p.buffer,globalSpeed:s.getGlobalSpeed()},[p.buffer])}break}}}var Zr=Zu.toString();Zr=Zr.slice(Zr.indexOf("{")+1,Zr.lastIndexOf("}"));var Yr={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},et=function(e){for(var t in Yr)this[t]=Yr[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new Y({type:F.FLOAT,flipY:!1,minFilter:F.NEAREST,magFilter:F.NEAREST})};et.prototype.initData=function(e,t){var r=new Blob([Zr]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,a=t.length,o=new Float32Array(n*2),s=new Float32Array(n),l=new Float32Array(n),h=new Float32Array(a*2),u=new Float32Array(a),f=0;f<e.length;f++){var d=e[f];o[f*2]=d.x,o[f*2+1]=d.y,s[f]=d.mass==null?1:d.mass,l[f]=d.size==null?1:d.size}for(var f=0;f<t.length;f++){var c=t[f],v=c.node1,p=c.node2;h[f*2]=v,h[f*2+1]=p,u[f]=c.weight==null?1:c.weight}var m=Math.ceil(Math.sqrt(e.length)),g=m,T=new Float32Array(m*g*4),x=this._positionTex;x.width=m,x.height=g,x.pixels=T,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:h,edgesWeight:u}),this._globalSpeed=1/0};et.prototype.updateOption=function(e){var t={};for(var r in Yr)t[r]=Yr[r];var i=this._nodes,n=this._edges,a=i.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var r in Yr)e[r]!=null&&(t[r]=e[r]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<i.length;l++)o[0]=Math.min(i[l].x,o[0]),o[1]=Math.min(i[l].y,o[1]),s[0]=Math.max(i[l].x,s[0]),s[1]=Math.max(i[l].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<n.length;l++){var h=n[l].node1,u=n[l].node2;i[h].degree=(i[h].degree||0)+1,i[u].degree=(i[u].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};et.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};et.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};et.prototype.getNodePositionTexture=function(){return this._positionTex};et.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1),t};et.prototype.getNodes=function(){return this._nodes};et.prototype.getEdges=function(){return this._edges};et.prototype.isFinished=function(e){return this._frame>e};et.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)t[r]=this._positionArr[r];return t};et.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,r=0,i=0;i<e.length;)t[r++]=e[i++],t[r++]=e[i++],t[r++]=1,t[r++]=1;this._positionTex.dirty()};et.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var qu=He.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,r))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var i=this._convertPos(t,r);this._x=i.x,this._y=i.y}}},_convertPos:function(e,t){var r=this.viewGL.camera,i=this.viewGL.viewport;return{x:(e-i.x)/i.width*(r.right-r.left)+r.left,y:(t-i.y)/i.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=a/this._zoom;var o=this._convertPos(r,i),s=(o.x-this._dx)*(n-1),l=(o.y-this._dy)*(n-1);this._dx-=s,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}});const Yu=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`;var Li=be.vec2;y.Shader.import(Yu);var Ku=1;const $u=ct.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new le("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new nr(!0,t),this._forceEdgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2),color:new y.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:y.Mesh.LINES}),this._edgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new fa({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new qu({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=r,this._initLayout(e,t,r),this._pointsBuilder.update(e,t,r),this._forceLayoutInstance instanceof Pe||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(K.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var i=this._pointsBuilder.getPointsMesh();if(i.off("mousemove",this._mousemoveHandler),i.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?r.getZr().on("click",this._clickHandler):n==="mouseover"&&(i.on("mousemove",this._mousemoveHandler,this),i.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var r=this._forceEdgesMesh.geometry,i=t.getEdgeData(),n=0,a=this._forceLayoutInstance,o=i.count()*2;r.attributes.node.init(o),r.attributes.color.init(o),i.each(function(s){var l=e[s];r.attributes.node.set(n,a.getNodeUV(l.node1)),r.attributes.node.set(n+1,a.getNodeUV(l.node2));var h=Be(i,l.dataIndex),u=y.parseColor(h);u[3]*=K.firstNotNull(Ie(i,l.dataIndex),1),r.attributes.color.set(n,u),r.attributes.color.set(n+1,u),n+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),r=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var i=[],n=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=s.node1.dataIndex*2,h=s.node2.dataIndex*2;i[0]=r[l],i[1]=r[l+1],n[0]=r[h],n[1]=r[h+1];var u=Be(t,s.dataIndex),f=y.parseColor(u);f[3]*=K.firstNotNull(Ie(t,s.dataIndex),1);var d=t.getItemModel(s.dataIndex),c=K.firstNotNull(d.get(a),1)*this._api.getDevicePixelRatio();e.addLine(i,n,f,c);for(var v=0;v<4;v++)this._originalEdgeColors[s.dataIndex*4+v]=f[v];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),r=[],i=0;i<e.count();i++)this._forceLayoutInstance.getNodeUV(i,r),t.geometry.attributes.position.set(i,r);t.geometry.dirty("position")},_initLayout:function(e,t,r){var i=e.get("layout"),n=e.getGraph(),a=e.getBoxLayoutParams(),o=Zi(a,{width:r.getWidth(),height:r.getHeight()});i==="force"&&(i="forceAtlas2"),this.stopLayout(e,t,r,{beforeLayout:!0});var s=e.getData(),l=e.getData();if(i==="forceAtlas2"){var h=e.getModel("forceAtlas2"),u=this._forceLayoutInstance,f=[],d=[],c=s.getDataExtent("value"),v=l.getDataExtent("value"),p=K.firstNotNull(h.get("edgeWeight"),1),m=K.firstNotNull(h.get("nodeWeight"),1);typeof p=="number"&&(p=[p,p]),typeof m=="number"&&(m=[m,m]);var g=0,T={},x=new Float32Array(s.count()*2);if(n.eachNode(function(S){var b=S.dataIndex,A=s.get("value",b),E,M;if(s.hasItemOption){var O=s.getItemModel(b);E=O.get("x"),M=O.get("y")}E==null&&(E=o.x+Math.random()*o.width,M=o.y+Math.random()*o.height),x[g*2]=E,x[g*2+1]=M,T[S.id]=g++;var C=pa(A,c,m);isNaN(C)&&(isNaN(m[0])?C=1:C=m[0]),f.push({x:E,y:M,mass:C,size:s.getItemVisual(b,"symbolSize")})}),s.setLayout("points",x),n.eachEdge(function(S){var b=S.dataIndex,A=s.get("value",b),E=pa(A,v,p);isNaN(E)&&(isNaN(p[0])?E=1:E=p[0]),d.push({node1:T[S.node1.id],node2:T[S.node2.id],weight:E,dataIndex:b})}),!u){var _=h.get("GPU");this._forceLayoutInstance&&(_&&!(this._forceLayoutInstance instanceof Pe)||!_&&!(this._forceLayoutInstance instanceof et))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),u=this._forceLayoutInstance=_?new Pe:new et}u.initData(f,d),u.updateOption(h.option),this._updateForceEdgesGeometry(u.getEdges(),e),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var x=new Float32Array(s.count()*2),g=0;n.eachNode(function(A){var E=A.dataIndex,M,O;if(s.hasItemOption){var C=s.getItemModel(E);M=C.get("x"),O=C.get("y")}x[g++]=M,x[g++]=O}),s.setLayout("points",x),this._updateAfterLayout(e,t,r)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,a,i){if(!(i&&i.from!=null&&i.from!==this.uid)){var n=this.viewGL,a=this._api,o=this._forceLayoutInstance,s=this._model.getData(),l=this._model.getModel("forceAtlas2");if(o&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var h=this,u=this._layoutId=Ku++,f=l.getShallow("maxSteps"),d=l.getShallow("steps"),c=0,v=Math.max(d*2,20),p=function(m){if(m===h._layoutId){if(o.isFinished(f)){a.dispatchAction({type:"graphGLStopLayout",from:h.uid}),a.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:h.uid});return}o.update(n.layer.renderer,d,function(){h._updatePositionTexture(),c+=d,c>=v&&(h._syncNodePosition(e),c=0),a.getZr().refresh(),Pn(function(){p(m)})})}};Pn(function(){h._forceLayoutInstanceToDispose&&(h._forceLayoutInstanceToDispose.dispose(n.layer.renderer),h._forceLayoutInstanceToDispose=null),p(u)}),this._layouting=!0}}},stopLayout:function(e,t,r,i){i&&i.from!=null&&i.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(i&&i.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,r)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,r,i){var n=this._model.getData();this._downplayAll();var a=i.dataIndex,o=n.graph,s=[],l=o.getNodeByIndex(a);s.push(l),l.edges.forEach(function(u){u.dataIndex<0||(u.node1!==l&&s.push(u.node1),u.node2!==l&&s.push(u.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(u){this._pointsBuilder.highlight(n,u.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(u){return u.dataIndex}));var h=[];l.edges.forEach(function(u){u.dataIndex>=0&&(this._highlightEdge(u.dataIndex),h.push(u))},this),this._focusNodes=s,this._focusEdges=h},unfocusNodeAdjacency:function(e,t,r,i){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),r=y.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),i=K.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);r[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,r){this._getColor(t,e),e[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var r=0;r<4;r++)t[r]=this._originalEdgeColors[e*4+r];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(r){this._setEdgeFade(r.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var r=this.viewGL.camera,i=e.getData(),n=i.getLayout("points"),a=Li.create(1/0,1/0),o=Li.create(-1/0,-1/0),s=[],l=0;l<n.length;)s[0]=n[l++],s[1]=n[l++],Li.min(a,a,s),Li.max(o,o,s);var h=(o[1]+a[1])/2,u=(o[0]+a[0])/2;if(!(u>r.left&&u<r.right&&h<r.bottom&&h>r.top)){var f=Math.max(o[0]-a[0],10),d=f/t.getWidth()*t.getHeight();f*=1.4,d*=1.4,a[0]-=f*.2,r.left=a[0],r.top=h-d/2,r.bottom=h+d/2,r.right=f+a[0],r.near=0,r.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function Mi(e){return e instanceof Array||(e=[e,e]),e}function Qu(e){e.registerChartView($u),e.registerSeriesModel(jr),e.registerVisual(function(r){const i={};r.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),o=n.getData(),s={};a.each(function(l){var h=a.getName(l);s["ec-"+h]=l;var u=a.getItemModel(l),f=u.getModel("itemStyle").getItemStyle();f.fill||(f.fill=n.getColorFromPalette(h,i)),a.setItemVisual(l,"style",f);var d=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<d.length;v++){var c=u.getShallow(d[v],!0);c!=null&&a.setItemVisual(l,d[v],c)}}),a.count()&&o.each(function(l){var h=o.getItemModel(l);let u=h.getShallow("category");if(u!=null){typeof u=="string"&&(u=s["ec-"+u]);var f=a.getItemVisual(u,"style"),d=o.ensureUniqueItemVisual(l,"style");ma(d,f);var c=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<c.length;v++)o.setItemVisual(l,c[v],a.getItemVisual(u,c[v]))}})})}),e.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var n=i.getGraph(),a=i.getEdgeData(),o=Mi(i.get("edgeSymbol")),s=Mi(i.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",i.getModel("lineStyle").getLineStyle()),a.each(function(l){var h=a.getItemModel(l),u=n.getEdgeByIndex(l),f=Mi(h.getShallow("symbol",!0)),d=Mi(h.getShallow("symbolSize",!0)),c=h.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(ma(v,c),v.stroke){case"source":{var p=u.node1.getVisual("style");v.stroke=p&&p.fill;break}case"target":{var p=u.node2.getVisual("style");v.stroke=p&&p.fill;break}}f[0]&&u.setVisual("fromSymbol",f[0]),f[1]&&u.setVisual("toSymbol",f[1]),d[0]&&u.setVisual("fromSymbolSize",d[0]),d[1]&&u.setVisual("toSymbolSize",d[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(n){n.setView(r)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}Xe(Qu);const Ju=ft.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var r=this.get("coordinateSystem"),i=r==="geo"?["lng","lat"]:Bo(r)||["x","y"];i.push("vx","vy");var n=si(this.getSource(),{coordDimensions:i,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new Tt(n,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}});var ef=$.extend(function(){return{dynamic:!0,attributes:{position:new $.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,r=4*e,i=2*e;this.vertexCount!==r&&t.position.init(r),this.triangleCount!==i&&(i===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(i*3):new Uint16Array(i*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});const tf=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;z.import(tf);function rf(e){var t=document.createElement("canvas");t.width=t.height=e;var r=t.getContext("2d");return r.fillStyle="#fff",r.arc(e/2,e/2,e/2,0,Math.PI*2),r.fill(),t}var Wn=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new Y({type:F.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};Wn.prototype={constructor:Wn,init:function(){var e={type:F.FLOAT,minFilter:F.NEAREST,magFilter:F.NEAREST,useMipmap:!1};this._spawnTexture=new Y(e),this._particleTexture0=new Y(e),this._particleTexture1=new Y(e),this._frameBuffer=new Se({depthBuffer:!1}),this._particlePass=new Ee({fragment:z.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Ee({fragment:z.source("clay.compositor.downsample")});var t=new Oe({renderOrder:10,material:new nt({shader:new z(z.source("ecgl.vfParticle.renderPoints.vertex"),z.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:Oe.POINTS,geometry:new $({dynamic:!0,mainAttribute:"texcoord0"})}),r=new Oe({renderOrder:10,material:new nt({shader:new z(z.source("ecgl.vfParticle.renderLines.vertex"),z.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new ef,culling:!1}),i=new Oe({material:new nt({shader:new z(z.source("ecgl.color.vertex"),z.source("ecgl.color.fragment"))}),geometry:new Ki});i.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=i,this._camera=new Sr,this._thisFrameTexture=new Y,this._lastFrameTexture=new Y},setParticleDensity:function(e,t){for(var r=e*t,i=new Float32Array(r*4),n=0,a=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,n++){i[n*4]=Math.random(),i[n*4+1]=Math.random(),i[n*4+2]=Math.random();var l=(a[1]-a[0])*Math.random()+a[0];i[n*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=i,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var r=e*t,i=this._particlePointsMesh.geometry,n=i.attributes;n.texcoord0.init(r);for(var a=0,o=0;o<e;o++)for(var s=0;s<t;s++,a++)n.texcoord0.value[a*2]=o/e,n.texcoord0.value[a*2+1]=s/t;i.dirty()},_setLineGeometry:function(e,t){var r=e*t,i=this._getParticleMesh().geometry;i.setLineCount(r),i.resetOffset();for(var n=0;n<e;n++)for(var a=0;a<t;a++)i.addLine([n/e,a/t]);i.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,r,i){var n=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;i&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform("firstFrameTime",i?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",r),o.setUniform("elapsedTime",this._elapsedTime),o.render(e,a),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,n],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=r},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var r=0,i=this._thisFrameTexture,n=t[r];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",i),this._downsamplePass.setUniform("textureSize",[i.width,i.height]),this._downsamplePass.render(e,this._frameBuffer),i=n,n=t[++r]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new Y),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=rf(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var r=this._getParticleMesh().material;r.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var r=this._downsampleTextures,i=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<i;s++)r[s]=r[s]||new Y,r[s].width=a/n,r[s].height=o/n,n*=2;for(;s<r.length;s++)r[s].dispose(e);r.length=i},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};const nf=ct.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new le("orthographic"),this.groupGL=new y.Node,this.viewGL.add(this.groupGL),this._particleSurface=new Wn;var r=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.color.vertex"),fragment:y.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(e,t,r){var i=this._particleSurface;i.setParticleType(e.get("particleType")),i.setSupersampling(e.get("supersampling")),this._updateData(e,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var n=K.firstNotNull(e.get("particleDensity"),128);i.setParticleDensity(n,n);var a=this._planeMesh,o=+new Date,s=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var f=+new Date,d=Math.min(f-o,20);o=o+d,s._renderer&&(i.update(s._renderer,r,d/1e3,l),a.material.set("diffuseMap",i.getSurfaceTexture())),l=!1}).start();var h=e.getModel("itemStyle"),u=y.parseColor(h.get("color"));u[3]*=K.firstNotNull(h.get("opacity"),1),a.material.set("color",u),i.setColorTextureImage(e.get("colorTexture"),r),i.setParticleSize(e.get("particleSize")),i.particleSpeedScaling=e.get("particleSpeed"),i.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,r){this._updateData(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._renderer=n},_updateData:function(e,t){var r=e.coordinateSystem,i=r.dimensions.map(function(T){return e.coordDimToDataDim(T)[0]}),n=e.getData(),a=n.getDataExtent(i[0]),o=n.getDataExtent(i[1]),s=e.get("gridWidth"),l=e.get("gridHeight");if(s==null||s==="auto"){var h=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(h*n.count()))}(l==null||l==="auto")&&(l=Math.ceil(n.count()/s));var u=this._particleSurface.vectorFieldTexture,f=u.pixels;if(!f||f.length!==l*s*4)f=u.pixels=new Float32Array(s*l*4);else for(var d=0;d<f.length;d++)f[d]=0;var c=0,v=1/0,p=new Float32Array(n.count()*2),m=0,g=[[1/0,1/0],[-1/0,-1/0]];n.each([i[0],i[1],"vx","vy"],function(T,x,_,S){var b=r.dataToPoint([T,x]);p[m++]=b[0],p[m++]=b[1],g[0][0]=Math.min(b[0],g[0][0]),g[0][1]=Math.min(b[1],g[0][1]),g[1][0]=Math.max(b[0],g[1][0]),g[1][1]=Math.max(b[1],g[1][1]);var A=Math.sqrt(_*_+S*S);c=Math.max(c,A),v=Math.min(v,A)}),n.each(["vx","vy"],function(T,x,_){var S=Math.round((p[_*2]-g[0][0])/(g[1][0]-g[0][0])*(s-1)),b=l-1-Math.round((p[_*2+1]-g[0][1])/(g[1][1]-g[0][1])*(l-1)),A=(b*s+S)*4;f[A]=T/c*.5+.5,f[A+1]=x/c*.5+.5,f[A+3]=1}),u.width=s,u.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(u),u.dirty(),this._updatePlanePosition(g[0],g[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[v,c])},_fillEmptyPixels:function(e){var t=e.pixels,r=e.width,i=e.height;function n(p,m,g){p=Math.max(Math.min(p,r-1),0),m=Math.max(Math.min(m,i-1),0);var T=(m*(r-1)+p)*4;return t[T+3]===0?!1:(g[0]=t[T],g[1]=t[T+1],!0)}function a(p,m,g){g[0]=p[0]+m[0],g[1]=p[1]+m[1]}for(var o=[],s=[],l=[],h=[],u=[],f=0,d=0;d<i;d++)for(var c=0;c<r;c++){var v=(d*(r-1)+c)*4;t[v+3]===0&&(f=o[0]=o[1]=0,n(c-1,d,s)&&(f++,a(s,o,o)),n(c+1,d,l)&&(f++,a(l,o,o)),n(c,d-1,h)&&(f++,a(h,o,o)),n(c,d+1,u)&&(f++,a(u,o,o)),o[0]/=f,o[1]/=f,t[v]=o[0],t[v+1]=o[1]),t[v+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new y.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,i=r.image;i.width=200,i.height=1;var n=i.getContext("2d"),a=n.createLinearGradient(0,.5,i.width,.5);e[0].stops.forEach(function(o){var s;t[1]===t[0]?s=0:(s=o.value/t[1],s=Math.min(Math.max(s,0),1)),a.addColorStop(s,o.color)}),n.fillStyle=a,n.fillRect(0,0,i.width,i.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,r,i){var n=this._limitInViewportAndFullFill(e,t,r,i);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,i.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,r,i){var n=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],i.getWidth()),Math.min(t[1],i.getHeight())];if(r.get("coordinateSystem")==="bmap"){var o=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]),s=Math.floor(o[1]-o[0])>=359;s&&(n[0]>0&&(n[0]=0),a[0]<i.getWidth()&&(a[0]=i.getWidth()))}var l=t[0]-e[0],h=t[1]-e[1],u=a[0]-n[0],f=a[1]-n[1],d=[(n[0]-e[0])/l,1-f/h-(n[1]-e[1])/h,u/l,f/h];return{leftTop:n,rightBottom:a,region:d}},_updateCamera:function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.bottom=0,i.top=t,i.right=e,i.near=0,i.far=100,i.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function af(e){e.registerChartView(nf),e.registerSeriesModel(Ju)}Xe(af);var Xn=ft.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),Xn.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),Xn.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=ga(this._flatCoords,t.flatCoords),this._flatCoordsOffset=ga(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),r=t.option instanceof Array?t.option:t.getShallow("coords");return r},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[e*2],i=this._flatCoordsOffset[e*2+1],n=0;n<i;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[r+n*2],t[n][1]=this._flatCoords[r+n*2+1];return i}else{for(var a=this._getCoordsFromItemModel(e),n=0;n<a.length;n++)t[n]=t[n]||[],t[n][0]=a[n][0],t[n][1]=a[n][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var r=e.length,i=new Uint32Array(r),n=new Float64Array(r),a=0,o=0,s=0,l=0;l<r;){s++;var h=e[l++];i[o++]=a+t,i[o++]=h;for(var u=0;u<h;u++){var f=e[l++],d=e[l++];n[a++]=f,n[a++]=d}}return{flatCoordsOffset:new Uint32Array(i.buffer,0,o),flatCoords:n,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var r=new Tt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const of=ct.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new le("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new Ct(this.viewGL),this._nativeLinesShader=y.createShader("ecgl.lines3D"),this._meshLinesShader=y.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r);var i=this._linesMeshes[0];i||(i=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(i),this._updateLinesMesh(e,i,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),i.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,r){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,r)},_createLinesMesh:function(e){var t=new y.Mesh({$ignorePicking:!0,material:new y.Material({shader:y.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new fa({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:y.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,r,i){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null;var a=e.get("lineStyle.curveness")||0,o=e.get("polyline"),s=t.geometry,l=e.coordinateSystem,h=K.firstNotNull(e.get("lineStyle.width"),1);h>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=y.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=y.Mesh.LINES),r=r||0,i=i||n.count(),s.resetOffset();var u=0,f=0,d=[],c=[],v=[],p=[],m=[],g=.3,T=.7;function x(){c[0]=d[0]*T+p[0]*g-(d[1]-p[1])*a,c[1]=d[1]*T+p[1]*g-(p[0]-d[0])*a,v[0]=d[0]*g+p[0]*T-(d[1]-p[1])*a,v[1]=d[1]*g+p[1]*T-(p[0]-d[0])*a}if(o||a!==0)for(var _=r;_<i;_++)if(o){var S=e.getLineCoordsCount(_);u+=s.getPolylineVertexCount(S),f+=s.getPolylineTriangleCount(S)}else e.getLineCoords(_,m),this._glViewHelper.dataToPoint(l,m[0],d),this._glViewHelper.dataToPoint(l,m[1],p),x(),u+=s.getCubicCurveVertexCount(d,c,v,p),f+=s.getCubicCurveTriangleCount(d,c,v,p);else{var b=i-r;u+=b*s.getLineVertexCount(),f+=b*s.getLineVertexCount()}s.setVertexCount(u),s.setTriangleCount(f);for(var A=r,E=[],_=r;_<i;_++){y.parseColor(Be(n,A),E);var M=K.firstNotNull(Ie(n,A),1);E[3]*=M;for(var S=e.getLineCoords(_,m),O=0;O<S;O++)this._glViewHelper.dataToPoint(l,m[O],m[O]);o?s.addPolyline(m,E,h,0,S):a!==0?(d=m[0],p=m[1],x(),s.addCubicCurve(d,c,v,p,E,h)):s.addPolyline(m,E,h,0,2),A++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function sf(e){e.registerChartView(of),e.registerSeriesModel(Xn)}Xe(sf);const lf="FeatureCollection",hf=[{type:"Feature",properties:{adcode:330203,name:"海曙区",center:[121.539698,29.874452],centroid:[121.352816,29.82502],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:0,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.190132,29.73604],[121.195173,29.739065],[121.198251,29.733472],[121.20397,29.724852],[121.208517,29.724672],[121.220646,29.728908],[121.22306,29.729088],[121.226421,29.727191],[121.228397,29.727911],[121.230925,29.730724],[121.234031,29.727502],[121.235655,29.727976],[121.239707,29.732948],[121.241571,29.730887],[121.243548,29.731264],[121.245694,29.734175],[121.248476,29.732883],[121.25106,29.733505],[121.255917,29.736432],[121.257866,29.736727],[121.259842,29.735026],[121.262935,29.729988],[121.266662,29.729464],[121.270517,29.726945],[121.274979,29.729252],[121.276574,29.728957],[121.278438,29.726487],[121.281206,29.726978],[121.29253,29.730397],[121.300155,29.730037],[121.304814,29.728957],[121.310603,29.728974],[121.315178,29.727583],[121.317974,29.727812],[121.328013,29.731133],[121.331091,29.731771],[121.337558,29.729006],[121.341978,29.729595],[121.344011,29.732981],[121.348205,29.736792],[121.351593,29.735385],[121.354799,29.73689],[121.358922,29.73653],[121.360715,29.739065],[121.362353,29.739409],[121.365558,29.736171],[121.367323,29.73568],[121.371305,29.737872],[121.373098,29.73797],[121.377122,29.73478],[121.380864,29.734355],[121.38349,29.735614],[121.387289,29.735173],[121.387811,29.738002],[121.394518,29.737904],[121.395718,29.738444],[121.398175,29.742794],[121.3997,29.743841],[121.403964,29.74425],[121.420428,29.74093],[121.425102,29.742189],[121.426556,29.745673],[121.423661,29.752296],[121.424946,29.754634],[121.427121,29.755632],[121.432359,29.755239],[121.432882,29.76008],[121.434195,29.764446],[121.434152,29.770136],[121.437499,29.771411],[121.448696,29.770381],[121.4508,29.774714],[121.449953,29.776904],[121.446013,29.778343],[121.442709,29.780681],[121.441947,29.782921],[121.443641,29.786043],[121.448075,29.787155],[121.45159,29.784261],[121.4532,29.779586],[121.454697,29.777542],[121.45738,29.777705],[121.459554,29.784555],[121.461347,29.785961],[121.463592,29.785193],[121.466063,29.785667],[121.467504,29.790261],[121.470836,29.792484],[121.472968,29.791585],[121.475863,29.787694],[121.477712,29.787841],[121.477882,29.7925],[121.478983,29.79317],[121.485577,29.789509],[121.488316,29.790996],[121.489305,29.796472],[121.490943,29.79997],[121.492821,29.800608],[121.495037,29.799365],[121.50077,29.791928],[121.505528,29.790947],[121.507943,29.793121],[121.508225,29.795573],[121.50454,29.801409],[121.503509,29.805201],[121.505528,29.806181],[121.510598,29.804416],[121.514198,29.804056],[121.516358,29.805037],[121.516839,29.807374],[121.515709,29.809336],[121.516542,29.81133],[121.520976,29.810774],[121.523037,29.812735],[121.522712,29.815399],[121.519945,29.818929],[121.513647,29.823652],[121.513662,29.825678],[121.517135,29.82643],[121.523164,29.8254],[121.526384,29.827165],[121.526031,29.835597],[121.526567,29.837835],[121.532709,29.839796],[121.535265,29.842312],[121.534968,29.848716],[121.53566,29.850301],[121.538343,29.850824],[121.543624,29.850268],[121.54762,29.851673],[121.552562,29.857358],[121.558139,29.862537],[121.559523,29.865199],[121.560949,29.872435],[121.557574,29.873513],[121.547436,29.886693],[121.545474,29.890499],[121.542155,29.88929],[121.542085,29.890809],[121.534912,29.889535],[121.53086,29.889568],[121.528742,29.890401],[121.532017,29.90446],[121.533429,29.907693],[121.530012,29.908885],[121.526313,29.909016],[121.521936,29.907693],[121.517149,29.904248],[121.513605,29.903007],[121.509962,29.905162],[121.507209,29.912069],[121.499302,29.921652],[121.493654,29.923334],[121.489319,29.922811],[121.487582,29.921065],[121.482654,29.909848],[121.480593,29.90735],[121.476823,29.906436],[121.469593,29.910632],[121.46091,29.918469],[121.455728,29.922632],[121.454189,29.926093],[121.454711,29.930484],[121.453144,29.935479],[121.451054,29.93685],[121.446917,29.935952],[121.437047,29.930892],[121.423831,29.929047],[121.420329,29.930353],[121.416983,29.93845],[121.410925,29.945795],[121.406943,29.94648],[121.401168,29.944864],[121.396241,29.945321],[121.389915,29.949712],[121.388263,29.94444],[121.376134,29.926207],[121.374934,29.923236],[121.376021,29.915546],[121.375964,29.912771],[121.371093,29.903758],[121.359571,29.893977],[121.357171,29.893438],[121.351466,29.894744],[121.346087,29.898517],[121.345409,29.899888],[121.346948,29.903121],[121.343531,29.90895],[121.340763,29.909261],[121.333012,29.904819],[121.327999,29.905162],[121.324413,29.904411],[121.323678,29.905309],[121.324243,29.910877],[121.322619,29.91344],[121.317706,29.909163],[121.315545,29.910028],[121.316477,29.915873],[121.315446,29.917261],[121.309361,29.916575],[121.303741,29.912232],[121.303007,29.907938],[121.299378,29.907056],[121.298178,29.905146],[121.297853,29.90175],[121.298983,29.89801],[121.296639,29.896818],[121.288308,29.896263],[121.284609,29.894189],[121.278721,29.89365],[121.267721,29.895398],[121.265024,29.894614],[121.260859,29.890939],[121.258148,29.886775],[121.252839,29.886514],[121.251992,29.881582],[121.248801,29.879344],[121.24359,29.878446],[121.241289,29.876682],[121.241741,29.871341],[121.235401,29.862373],[121.234921,29.855039],[121.23389,29.85236],[121.229259,29.848243],[121.226943,29.845449],[121.219347,29.841953],[121.218796,29.839845],[121.212795,29.841609],[121.211722,29.840368],[121.204803,29.838211],[121.199932,29.838619],[121.199367,29.835515],[121.19619,29.832688],[121.198604,29.831169],[121.196218,29.83045],[121.195724,29.828554],[121.188664,29.826136],[121.186179,29.826299],[121.186871,29.824387],[121.185416,29.822982],[121.186885,29.82089],[121.188975,29.820367],[121.188593,29.815808],[121.186715,29.810692],[121.182536,29.809777],[121.179514,29.812539],[121.176464,29.81352],[121.173005,29.809663],[121.173189,29.807783],[121.169715,29.802275],[121.169376,29.798532],[121.172285,29.796031],[121.170068,29.790244],[121.172991,29.78789],[121.175052,29.783427],[121.169207,29.782283],[121.16603,29.784572],[121.163898,29.784327],[121.165903,29.782806],[121.165168,29.781613],[121.162133,29.78176],[121.162217,29.788822],[121.159012,29.790424],[121.153392,29.789411],[121.151472,29.790244],[121.147857,29.785307],[121.146347,29.786141],[121.143381,29.783607],[121.141207,29.783771],[121.143071,29.776136],[121.139724,29.775547],[121.140077,29.772441],[121.142266,29.772245],[121.144723,29.774043],[121.146714,29.773275],[121.145838,29.771852],[121.145485,29.767454],[121.147236,29.764936],[121.149721,29.764217],[121.152108,29.762205],[121.152136,29.759573],[121.149919,29.753163],[121.148916,29.745378],[121.150399,29.742287],[121.155129,29.741862],[121.160184,29.743579],[121.162796,29.740537],[121.158744,29.738722],[121.158207,29.734388],[121.160099,29.732392],[121.167795,29.729252],[121.173457,29.729808],[121.176366,29.731182],[121.181378,29.735925],[121.181802,29.740145],[121.184386,29.740668],[121.187549,29.738133],[121.186405,29.73635],[121.190132,29.73604]]]]}},{type:"Feature",properties:{adcode:330205,name:"江北区",center:[121.559282,29.888361],centroid:[121.488701,29.960487],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:1,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.480805,30.043952],[121.480988,30.047001],[121.482344,30.047979],[121.48216,30.052382],[121.480932,30.055381],[121.479124,30.056327],[121.472417,30.055952],[121.469057,30.053507],[121.450659,30.049219],[121.449063,30.050686],[121.444361,30.051941],[121.440732,30.052072],[121.437626,30.049267],[121.434124,30.048306],[121.427798,30.047865],[121.423887,30.046235],[121.423082,30.043789],[121.425553,30.040006],[121.424438,30.035489],[121.419454,30.033826],[121.415048,30.031445],[121.407522,30.030793],[121.403851,30.026667],[121.399121,30.019605],[121.397285,30.014712],[121.397709,30.013554],[121.401168,30.012282],[121.40138,30.01039],[121.399248,30.006524],[121.398726,30.001484],[121.403442,30.000701],[121.403385,29.997797],[121.399516,29.99075],[121.399121,29.987585],[121.395167,29.983653],[121.392767,29.983262],[121.387839,29.987014],[121.384253,29.986492],[121.382784,29.984828],[121.380822,29.976311],[121.381259,29.973684],[121.38414,29.969539],[121.381104,29.966406],[121.378972,29.961756],[121.376925,29.960515],[121.36954,29.959879],[121.360701,29.955228],[121.36673,29.952078],[121.373013,29.950218],[121.376925,29.950838],[121.381965,29.953482],[121.387105,29.951589],[121.389915,29.949712],[121.396241,29.945321],[121.401168,29.944864],[121.406943,29.94648],[121.410925,29.945795],[121.416983,29.93845],[121.420329,29.930353],[121.423831,29.929047],[121.437047,29.930892],[121.446917,29.935952],[121.451054,29.93685],[121.453144,29.935479],[121.454711,29.930484],[121.454189,29.926093],[121.455728,29.922632],[121.46091,29.918469],[121.469593,29.910632],[121.476823,29.906436],[121.480593,29.90735],[121.482654,29.909848],[121.487582,29.921065],[121.489319,29.922811],[121.493654,29.923334],[121.499302,29.921652],[121.507209,29.912069],[121.509962,29.905162],[121.513605,29.903007],[121.517149,29.904248],[121.521936,29.907693],[121.526313,29.909016],[121.530012,29.908885],[121.533429,29.907693],[121.532017,29.90446],[121.528742,29.890401],[121.53086,29.889568],[121.534912,29.889535],[121.542085,29.890809],[121.542155,29.88929],[121.545474,29.890499],[121.547436,29.886693],[121.557574,29.873513],[121.560949,29.872435],[121.564281,29.881222],[121.568122,29.886465],[121.571228,29.888849],[121.576905,29.891429],[121.58556,29.893536],[121.588991,29.89481],[121.610227,29.900264],[121.621043,29.903938],[121.625364,29.905032],[121.630461,29.905048],[121.632819,29.903497],[121.63618,29.898941],[121.639795,29.902158],[121.640811,29.901488],[121.645923,29.908477],[121.643183,29.912738],[121.640091,29.911938],[121.633667,29.91153],[121.633723,29.913587],[121.631068,29.914991],[121.621481,29.913914],[121.620775,29.916004],[121.617768,29.918126],[121.612374,29.913783],[121.60962,29.915481],[121.607841,29.913359],[121.60297,29.915579],[121.602151,29.926648],[121.603874,29.929537],[121.600457,29.932704],[121.601586,29.93605],[121.600315,29.93858],[121.595529,29.939788],[121.595373,29.936638],[121.587904,29.940425],[121.587452,29.939396],[121.579079,29.946823],[121.578585,29.952127],[121.575408,29.95229],[121.573685,29.956893],[121.570282,29.957725],[121.569718,29.959455],[121.567232,29.95983],[121.562079,29.958802],[121.562658,29.961233],[121.55749,29.966488],[121.55396,29.965101],[121.552872,29.96887],[121.548566,29.973227],[121.536959,29.983229],[121.533909,29.983898],[121.532201,29.985692],[121.527796,29.988303],[121.522599,29.986916],[121.52099,29.984616],[121.513534,29.982984],[121.511572,29.98566],[121.506206,29.986166],[121.503072,29.989233],[121.501067,29.989983],[121.494473,29.989983],[121.488302,29.989216],[121.484546,29.992593],[121.484928,29.995171],[121.488218,29.997667],[121.48857,29.999951],[121.485323,30.009836],[121.481228,30.013196],[121.478842,30.017257],[121.47582,30.020894],[121.474211,30.024547],[121.469636,30.028705],[121.466459,30.033027],[121.466431,30.035065],[121.473745,30.035],[121.477148,30.035832],[121.47928,30.038848],[121.477995,30.041278],[121.478602,30.043186],[121.480805,30.043952]]]]}},{type:"Feature",properties:{adcode:330206,name:"北仑区",center:[121.831303,29.90944],centroid:[121.888548,29.862707],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:2,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.895308,29.708935],[121.906449,29.719225],[121.925553,29.741257],[121.937611,29.748535],[121.946676,29.749663],[121.959201,29.750007],[121.979632,29.754569],[121.989742,29.758837],[121.997903,29.760161],[122.003156,29.762271],[122.015977,29.771934],[122.017756,29.775041],[122.019422,29.780599],[122.024251,29.788234],[122.031833,29.801327],[122.03638,29.806623],[122.037594,29.813732],[122.040164,29.817899],[122.044188,29.822524],[122.048565,29.826054],[122.066469,29.836446],[122.077539,29.841103],[122.084783,29.844518],[122.090516,29.850938],[122.102221,29.859662],[122.11997,29.865673],[122.135911,29.872272],[122.143084,29.877711],[122.143818,29.888637],[122.142731,29.895741],[122.140133,29.90175],[122.125844,29.908869],[122.121071,29.909963],[122.116708,29.909963],[122.107163,29.905603],[122.096248,29.905048],[122.092704,29.903007],[122.080138,29.892621],[122.076579,29.89058],[122.073176,29.890303],[122.065523,29.891789],[122.038526,29.891184],[122.031184,29.892246],[122.009764,29.891135],[122.005161,29.893373],[122.003467,29.899006],[122.002972,29.903203],[122.002972,29.910534],[122.003707,29.919971],[122.002902,29.923187],[121.998214,29.926468],[121.994529,29.934581],[121.992608,29.935871],[121.985548,29.936801],[121.984391,29.937617],[121.981722,29.947035],[121.980084,29.94914],[121.976187,29.949467],[121.972685,29.952062],[121.971019,29.955489],[121.967997,29.956517],[121.963295,29.955261],[121.952903,29.950724],[121.949472,29.947655],[121.938487,29.940131],[121.92712,29.931153],[121.925045,29.928133],[121.926499,29.924379],[121.919524,29.92082],[121.90964,29.922615],[121.901803,29.923677],[121.859966,29.943983],[121.8352,29.957937],[121.814373,29.974353],[121.804037,29.981124],[121.788392,29.990799],[121.766436,29.976572],[121.756298,29.972672],[121.74479,29.970094],[121.737674,29.966994],[121.732492,29.962686],[121.730416,29.959389],[121.726957,29.951686],[121.72498,29.948961],[121.721831,29.946284],[121.715618,29.944766],[121.704986,29.946007],[121.699733,29.944783],[121.697926,29.943559],[121.694128,29.937748],[121.68968,29.927513],[121.685727,29.92304],[121.682973,29.92095],[121.676478,29.918403],[121.671917,29.917212],[121.663572,29.916069],[121.659887,29.915138],[121.656329,29.912395],[121.6527,29.90753],[121.657444,29.905603],[121.660395,29.902664],[121.661836,29.903219],[121.663106,29.900362],[121.665055,29.900492],[121.668161,29.89414],[121.664843,29.891135],[121.666481,29.887902],[121.671522,29.887151],[121.674162,29.88364],[121.672637,29.879328],[121.674261,29.874918],[121.671903,29.869561],[121.67532,29.869201],[121.678652,29.866261],[121.680177,29.860315],[121.682606,29.854549],[121.684936,29.853078],[121.689129,29.854973],[121.69184,29.854255],[121.696218,29.85677],[121.699719,29.856411],[121.703532,29.857407],[121.706666,29.859923],[121.714192,29.864595],[121.71888,29.86796],[121.723991,29.870475],[121.727903,29.873856],[121.731997,29.873203],[121.734257,29.871733],[121.738351,29.870737],[121.739622,29.867829],[121.741345,29.860675],[121.741119,29.857407],[121.737688,29.852262],[121.740272,29.85017],[121.746188,29.850971],[121.746696,29.846625],[121.75,29.845335],[121.753671,29.845416],[121.755818,29.841756],[121.760025,29.842034],[121.762186,29.836544],[121.764699,29.835254],[121.770488,29.833685],[121.777068,29.833979],[121.77728,29.831332],[121.781248,29.829535],[121.788308,29.825057],[121.78907,29.821789],[121.786994,29.819436],[121.784947,29.815513],[121.786063,29.814549],[121.793419,29.813503],[121.796582,29.812392],[121.803303,29.808764],[121.807214,29.805282],[121.810603,29.801196],[121.811817,29.797927],[121.816886,29.796178],[121.820261,29.792467],[121.820303,29.781645],[121.825245,29.779373],[121.827646,29.775727],[121.832856,29.772081],[121.836499,29.767634],[121.840382,29.760325],[121.841638,29.758951],[121.844717,29.759311],[121.848289,29.756008],[121.852525,29.751151],[121.856549,29.749925],[121.859444,29.747766],[121.864894,29.74775],[121.865953,29.745853],[121.870288,29.745313],[121.879056,29.741126],[121.88781,29.738035],[121.889067,29.735696],[121.893487,29.720517],[121.895308,29.708935]]],[[[122.035745,29.803027],[122.032384,29.801098],[122.03196,29.799578],[122.033048,29.79268],[122.035208,29.794658],[122.033697,29.796587],[122.03854,29.800281],[122.035745,29.803027]]],[[[122.009976,29.902648],[122.016061,29.901211],[122.021625,29.901554],[122.023983,29.904542],[122.02418,29.909587],[122.02315,29.911889],[122.020933,29.91331],[122.018222,29.912869],[122.012588,29.916787],[122.009778,29.916738],[122.006728,29.915187],[122.005302,29.913065],[122.005175,29.908411],[122.005966,29.905799],[122.009976,29.902648]]],[[[122.041167,29.804007],[122.043991,29.806018],[122.038936,29.812327],[122.03919,29.809695],[122.041167,29.804007]]],[[[122.006262,29.899578],[122.005486,29.897961],[122.006446,29.893977],[122.008352,29.892654],[122.014381,29.892654],[122.017036,29.89445],[122.019309,29.898157],[122.017219,29.900786],[122.009595,29.900492],[122.006262,29.899578]]],[[[122.158348,29.898059],[122.156427,29.898876],[122.153533,29.896949],[122.154648,29.893683],[122.156907,29.894254],[122.158348,29.898059]]],[[[122.025564,29.909032],[122.02507,29.905766],[122.027555,29.904983],[122.02997,29.905668],[122.030831,29.907856],[122.029447,29.910926],[122.025564,29.909032]]]]}},{type:"Feature",properties:{adcode:330211,name:"镇海区",center:[121.713162,29.952107],centroid:[121.618133,29.992989],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:3,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.632636,30.072124],[121.623825,30.067462],[121.620069,30.063027],[121.61332,30.05274],[121.612134,30.049072],[121.609832,30.045843],[121.603026,30.040789],[121.600089,30.040088],[121.594865,30.040446],[121.581268,30.038457],[121.577286,30.038653],[121.57233,30.040919],[121.563236,30.044115],[121.558873,30.050132],[121.55653,30.051876],[121.548552,30.054045],[121.547747,30.056376],[121.542749,30.055267],[121.539106,30.055137],[121.535053,30.053898],[121.531311,30.054534],[121.529589,30.056425],[121.52685,30.055039],[121.525452,30.055838],[121.524901,30.058968],[121.522486,30.060403],[121.516542,30.058903],[121.510357,30.058479],[121.505133,30.054436],[121.497438,30.052675],[121.493625,30.052805],[121.492143,30.048827],[121.493244,30.045305],[121.487427,30.042648],[121.480805,30.043952],[121.478602,30.043186],[121.477995,30.041278],[121.47928,30.038848],[121.477148,30.035832],[121.473745,30.035],[121.466431,30.035065],[121.466459,30.033027],[121.469636,30.028705],[121.474211,30.024547],[121.47582,30.020894],[121.478842,30.017257],[121.481228,30.013196],[121.485323,30.009836],[121.48857,29.999951],[121.488218,29.997667],[121.484928,29.995171],[121.484546,29.992593],[121.488302,29.989216],[121.494473,29.989983],[121.501067,29.989983],[121.503072,29.989233],[121.506206,29.986166],[121.511572,29.98566],[121.513534,29.982984],[121.52099,29.984616],[121.522599,29.986916],[121.527796,29.988303],[121.532201,29.985692],[121.533909,29.983898],[121.536959,29.983229],[121.548566,29.973227],[121.552872,29.96887],[121.55396,29.965101],[121.55749,29.966488],[121.562658,29.961233],[121.562079,29.958802],[121.567232,29.95983],[121.569718,29.959455],[121.570282,29.957725],[121.573685,29.956893],[121.575408,29.95229],[121.578585,29.952127],[121.579079,29.946823],[121.587452,29.939396],[121.587904,29.940425],[121.595373,29.936638],[121.595529,29.939788],[121.600315,29.93858],[121.601586,29.93605],[121.600457,29.932704],[121.603874,29.929537],[121.602151,29.926648],[121.60297,29.915579],[121.607841,29.913359],[121.60962,29.915481],[121.612374,29.913783],[121.617768,29.918126],[121.620775,29.916004],[121.621481,29.913914],[121.631068,29.914991],[121.633723,29.913587],[121.633667,29.91153],[121.640091,29.911938],[121.643183,29.912738],[121.645923,29.908477],[121.640811,29.901488],[121.639795,29.902158],[121.63618,29.898941],[121.639484,29.894859],[121.641221,29.894499],[121.64533,29.89592],[121.646869,29.897553],[121.6527,29.90753],[121.656329,29.912395],[121.659887,29.915138],[121.663572,29.916069],[121.671917,29.917212],[121.676478,29.918403],[121.682973,29.92095],[121.685727,29.92304],[121.68968,29.927513],[121.694128,29.937748],[121.697926,29.943559],[121.699733,29.944783],[121.704986,29.946007],[121.715618,29.944766],[121.721831,29.946284],[121.72498,29.948961],[121.726957,29.951686],[121.730416,29.959389],[121.732492,29.962686],[121.737674,29.966994],[121.74479,29.970094],[121.756298,29.972672],[121.766436,29.976572],[121.788392,29.990799],[121.784029,29.993507],[121.771434,29.994959],[121.761706,29.994649],[121.725008,29.992218],[121.721083,29.992969],[121.699776,30.008041],[121.672666,30.043724],[121.667484,30.048876],[121.657769,30.067445],[121.653095,30.071129],[121.644567,30.070966],[121.635347,30.069825],[121.632636,30.072124]]]]}},{type:"Feature",properties:{adcode:330212,name:"鄞州区",center:[121.558436,29.831662],centroid:[121.673169,29.749186],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:4,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.6527,29.90753],[121.646869,29.897553],[121.64533,29.89592],[121.641221,29.894499],[121.639484,29.894859],[121.63618,29.898941],[121.632819,29.903497],[121.630461,29.905048],[121.625364,29.905032],[121.621043,29.903938],[121.610227,29.900264],[121.588991,29.89481],[121.58556,29.893536],[121.576905,29.891429],[121.571228,29.888849],[121.568122,29.886465],[121.564281,29.881222],[121.560949,29.872435],[121.559523,29.865199],[121.558139,29.862537],[121.552562,29.857358],[121.54762,29.851673],[121.543624,29.850268],[121.538343,29.850824],[121.53566,29.850301],[121.534968,29.848716],[121.535265,29.842312],[121.532709,29.839796],[121.526567,29.837835],[121.526031,29.835597],[121.526384,29.827165],[121.523164,29.8254],[121.517135,29.82643],[121.513662,29.825678],[121.513647,29.823652],[121.519945,29.818929],[121.522712,29.815399],[121.523037,29.812735],[121.520976,29.810774],[121.516542,29.81133],[121.515709,29.809336],[121.516839,29.807374],[121.516358,29.805037],[121.514198,29.804056],[121.510598,29.804416],[121.505528,29.806181],[121.503509,29.805201],[121.50454,29.801409],[121.508225,29.795573],[121.507943,29.793121],[121.505528,29.790947],[121.50077,29.791928],[121.495037,29.799365],[121.492821,29.800608],[121.490943,29.79997],[121.489305,29.796472],[121.488316,29.790996],[121.485577,29.789509],[121.478983,29.79317],[121.477882,29.7925],[121.477712,29.787841],[121.475863,29.787694],[121.472968,29.791585],[121.470836,29.792484],[121.467504,29.790261],[121.466063,29.785667],[121.463592,29.785193],[121.464849,29.782872],[121.464567,29.778523],[121.462901,29.779046],[121.457831,29.775335],[121.457535,29.773618],[121.459314,29.772866],[121.459272,29.770708],[121.46091,29.769351],[121.460077,29.765999],[121.461799,29.761584],[121.466784,29.762483],[121.469156,29.759671],[121.471231,29.755746],[121.471768,29.750007],[121.472375,29.7267],[121.474352,29.719012],[121.475298,29.712354],[121.476978,29.710489],[121.481567,29.707724],[121.488203,29.705303],[121.500022,29.705973],[121.505105,29.707544],[121.516245,29.709115],[121.528078,29.709229],[121.534192,29.70738],[121.538894,29.703454],[121.542904,29.701949],[121.551178,29.69992],[121.56109,29.698889],[121.564705,29.697187],[121.572372,29.697711],[121.577116,29.695698],[121.578811,29.691166],[121.577695,29.686404],[121.571158,29.678942],[121.57024,29.674114],[121.568955,29.671987],[121.565016,29.668108],[121.563293,29.664998],[121.562107,29.660055],[121.560638,29.656896],[121.561387,29.65449],[121.560836,29.651494],[121.558591,29.647058],[121.558436,29.644651],[121.560511,29.640821],[121.565171,29.638856],[121.566413,29.634959],[121.574476,29.63383],[121.582129,29.630228],[121.584049,29.628476],[121.583837,29.624055],[121.586238,29.621844],[121.592196,29.621615],[121.597265,29.620518],[121.601304,29.62227],[121.60537,29.627526],[121.612501,29.629671],[121.61901,29.633928],[121.624376,29.635713],[121.62655,29.635107],[121.630122,29.632504],[121.635135,29.626642],[121.639427,29.624513],[121.643423,29.620371],[121.653025,29.619454],[121.655454,29.61988],[121.667964,29.62358],[121.671804,29.626888],[121.673287,29.629147],[121.678328,29.631849],[121.683707,29.63121],[121.692504,29.633208],[121.698434,29.631423],[121.703362,29.628787],[121.707499,29.629851],[121.710225,29.632569],[121.717863,29.632831],[121.725516,29.633764],[121.734172,29.632274],[121.738648,29.632029],[121.743901,29.630703],[121.752514,29.631554],[121.754928,29.630359],[121.75682,29.627166],[121.759602,29.62602],[121.780895,29.612658],[121.786924,29.618766],[121.789748,29.621042],[121.823805,29.643129],[121.833534,29.653131],[121.863214,29.679236],[121.895308,29.708935],[121.893487,29.720517],[121.889067,29.735696],[121.88781,29.738035],[121.879056,29.741126],[121.870288,29.745313],[121.865953,29.745853],[121.864894,29.74775],[121.859444,29.747766],[121.856549,29.749925],[121.852525,29.751151],[121.848289,29.756008],[121.844717,29.759311],[121.841638,29.758951],[121.840382,29.760325],[121.836499,29.767634],[121.832856,29.772081],[121.827646,29.775727],[121.825245,29.779373],[121.820303,29.781645],[121.820261,29.792467],[121.816886,29.796178],[121.811817,29.797927],[121.810603,29.801196],[121.807214,29.805282],[121.803303,29.808764],[121.796582,29.812392],[121.793419,29.813503],[121.786063,29.814549],[121.784947,29.815513],[121.786994,29.819436],[121.78907,29.821789],[121.788308,29.825057],[121.781248,29.829535],[121.77728,29.831332],[121.777068,29.833979],[121.770488,29.833685],[121.764699,29.835254],[121.762186,29.836544],[121.760025,29.842034],[121.755818,29.841756],[121.753671,29.845416],[121.75,29.845335],[121.746696,29.846625],[121.746188,29.850971],[121.740272,29.85017],[121.737688,29.852262],[121.741119,29.857407],[121.741345,29.860675],[121.739622,29.867829],[121.738351,29.870737],[121.734257,29.871733],[121.731997,29.873203],[121.727903,29.873856],[121.723991,29.870475],[121.71888,29.86796],[121.714192,29.864595],[121.706666,29.859923],[121.703532,29.857407],[121.699719,29.856411],[121.696218,29.85677],[121.69184,29.854255],[121.689129,29.854973],[121.684936,29.853078],[121.682606,29.854549],[121.680177,29.860315],[121.678652,29.866261],[121.67532,29.869201],[121.671903,29.869561],[121.674261,29.874918],[121.672637,29.879328],[121.674162,29.88364],[121.671522,29.887151],[121.666481,29.887902],[121.664843,29.891135],[121.668161,29.89414],[121.665055,29.900492],[121.663106,29.900362],[121.661836,29.903219],[121.660395,29.902664],[121.657444,29.905603],[121.6527,29.90753]]]]}},{type:"Feature",properties:{adcode:330213,name:"奉化区",center:[121.41089,29.662348],centroid:[121.387745,29.60639],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:5,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.228101,29.406538],[121.235034,29.406342],[121.241246,29.407917],[121.250763,29.41448],[121.254985,29.424833],[121.25692,29.427458],[121.26045,29.43589],[121.266945,29.441025],[121.270573,29.445486],[121.270785,29.450112],[121.268371,29.454262],[121.269303,29.45805],[121.274033,29.464233],[121.280613,29.469891],[121.282971,29.472597],[121.285639,29.478254],[121.287531,29.478353],[121.296243,29.473187],[121.300479,29.472023],[121.303854,29.472023],[121.306509,29.474401],[121.312015,29.476254],[121.314006,29.481173],[121.31539,29.482829],[121.326333,29.489863],[121.327886,29.491699],[121.329002,29.497257],[121.33184,29.496339],[121.335836,29.493126],[121.341088,29.492995],[121.346468,29.491552],[121.351029,29.486731],[121.354785,29.484551],[121.359119,29.48401],[121.369808,29.484731],[121.374679,29.488404],[121.376134,29.494913],[121.386258,29.507766],[121.390522,29.510946],[121.393812,29.514929],[121.39312,29.518388],[121.393854,29.52119],[121.404797,29.519994],[121.409951,29.517339],[121.413396,29.512044],[121.420456,29.506339],[121.423464,29.50593],[121.427276,29.509175],[121.432119,29.51029],[121.43949,29.510831],[121.442667,29.512421],[121.444855,29.518076],[121.449501,29.517519],[121.46074,29.511798],[121.462067,29.509536],[121.468407,29.508011],[121.47198,29.505962],[121.475298,29.502962],[121.477232,29.49929],[121.483953,29.496093],[121.490011,29.4957],[121.49981,29.496011],[121.505091,29.494634],[121.511501,29.495355],[121.530097,29.495896],[121.538018,29.495208],[121.553819,29.490814],[121.557165,29.490552],[121.566301,29.492126],[121.570946,29.496126],[121.579969,29.50229],[121.590403,29.510536],[121.596701,29.510946],[121.609776,29.513306],[121.623415,29.517863],[121.628922,29.519191],[121.643353,29.520486],[121.64708,29.521289],[121.658235,29.521469],[121.663812,29.522616],[121.67244,29.526452],[121.675941,29.5285],[121.683086,29.53109],[121.70068,29.538235],[121.714743,29.542922],[121.716819,29.544725],[121.720829,29.549936],[121.723144,29.554032],[121.732026,29.563125],[121.733522,29.565829],[121.737292,29.569548],[121.742037,29.573086],[121.749266,29.57746],[121.751539,29.57959],[121.75466,29.584324],[121.758303,29.587452],[121.780895,29.612658],[121.759602,29.62602],[121.75682,29.627166],[121.754928,29.630359],[121.752514,29.631554],[121.743901,29.630703],[121.738648,29.632029],[121.734172,29.632274],[121.725516,29.633764],[121.717863,29.632831],[121.710225,29.632569],[121.707499,29.629851],[121.703362,29.628787],[121.698434,29.631423],[121.692504,29.633208],[121.683707,29.63121],[121.678328,29.631849],[121.673287,29.629147],[121.671804,29.626888],[121.667964,29.62358],[121.655454,29.61988],[121.653025,29.619454],[121.643423,29.620371],[121.639427,29.624513],[121.635135,29.626642],[121.630122,29.632504],[121.62655,29.635107],[121.624376,29.635713],[121.61901,29.633928],[121.612501,29.629671],[121.60537,29.627526],[121.601304,29.62227],[121.597265,29.620518],[121.592196,29.621615],[121.586238,29.621844],[121.583837,29.624055],[121.584049,29.628476],[121.582129,29.630228],[121.574476,29.63383],[121.566413,29.634959],[121.565171,29.638856],[121.560511,29.640821],[121.558436,29.644651],[121.558591,29.647058],[121.560836,29.651494],[121.561387,29.65449],[121.560638,29.656896],[121.562107,29.660055],[121.563293,29.664998],[121.565016,29.668108],[121.568955,29.671987],[121.57024,29.674114],[121.571158,29.678942],[121.577695,29.686404],[121.578811,29.691166],[121.577116,29.695698],[121.572372,29.697711],[121.564705,29.697187],[121.56109,29.698889],[121.551178,29.69992],[121.542904,29.701949],[121.538894,29.703454],[121.534192,29.70738],[121.528078,29.709229],[121.516245,29.709115],[121.505105,29.707544],[121.500022,29.705973],[121.488203,29.705303],[121.481567,29.707724],[121.476978,29.710489],[121.475298,29.712354],[121.474352,29.719012],[121.472375,29.7267],[121.471768,29.750007],[121.471231,29.755746],[121.469156,29.759671],[121.466784,29.762483],[121.461799,29.761584],[121.460077,29.765999],[121.46091,29.769351],[121.459272,29.770708],[121.459314,29.772866],[121.457535,29.773618],[121.457831,29.775335],[121.462901,29.779046],[121.464567,29.778523],[121.464849,29.782872],[121.463592,29.785193],[121.461347,29.785961],[121.459554,29.784555],[121.45738,29.777705],[121.454697,29.777542],[121.4532,29.779586],[121.45159,29.784261],[121.448075,29.787155],[121.443641,29.786043],[121.441947,29.782921],[121.442709,29.780681],[121.446013,29.778343],[121.449953,29.776904],[121.4508,29.774714],[121.448696,29.770381],[121.437499,29.771411],[121.434152,29.770136],[121.434195,29.764446],[121.432882,29.76008],[121.432359,29.755239],[121.427121,29.755632],[121.424946,29.754634],[121.423661,29.752296],[121.426556,29.745673],[121.425102,29.742189],[121.420428,29.74093],[121.403964,29.74425],[121.3997,29.743841],[121.398175,29.742794],[121.395718,29.738444],[121.394518,29.737904],[121.387811,29.738002],[121.387289,29.735173],[121.38349,29.735614],[121.380864,29.734355],[121.377122,29.73478],[121.373098,29.73797],[121.371305,29.737872],[121.367323,29.73568],[121.365558,29.736171],[121.362353,29.739409],[121.360715,29.739065],[121.358922,29.73653],[121.354799,29.73689],[121.351593,29.735385],[121.348205,29.736792],[121.344011,29.732981],[121.341978,29.729595],[121.337558,29.729006],[121.331091,29.731771],[121.328013,29.731133],[121.317974,29.727812],[121.315178,29.727583],[121.310603,29.728974],[121.304814,29.728957],[121.300155,29.730037],[121.29253,29.730397],[121.281206,29.726978],[121.278438,29.726487],[121.276574,29.728957],[121.274979,29.729252],[121.270517,29.726945],[121.266662,29.729464],[121.262935,29.729988],[121.259842,29.735026],[121.257866,29.736727],[121.255917,29.736432],[121.25106,29.733505],[121.248476,29.732883],[121.245694,29.734175],[121.243548,29.731264],[121.241571,29.730887],[121.239707,29.732948],[121.235655,29.727976],[121.234031,29.727502],[121.230925,29.730724],[121.228397,29.727911],[121.226421,29.727191],[121.22306,29.729088],[121.220646,29.728908],[121.208517,29.724672],[121.20397,29.724852],[121.198251,29.733472],[121.195173,29.739065],[121.190132,29.73604],[121.191926,29.730151],[121.191869,29.725899],[121.188537,29.722938],[121.181646,29.722611],[121.177269,29.720959],[121.172525,29.718178],[121.170492,29.714186],[121.167145,29.710816],[121.164053,29.710374],[121.162486,29.707102],[121.160707,29.706088],[121.157756,29.706431],[121.150879,29.703028],[121.145231,29.698513],[121.139654,29.698594],[121.138072,29.697171],[121.13498,29.69002],[121.131789,29.684457],[121.127313,29.679891],[121.117994,29.675014],[121.112558,29.675096],[121.107602,29.679466],[121.096165,29.691362],[121.094569,29.691591],[121.091265,29.688466],[121.088667,29.687386],[121.076552,29.687435],[121.071638,29.68917],[121.065313,29.69992],[121.064028,29.70082],[121.059255,29.700934],[121.055598,29.698267],[121.052054,29.691051],[121.05091,29.684179],[121.0542,29.685651],[121.058803,29.683868],[121.068377,29.666864],[121.073375,29.662854],[121.075084,29.660202],[121.076453,29.651985],[121.074194,29.637235],[121.076496,29.63324],[121.079842,29.632078],[121.087721,29.628066],[121.090277,29.629491],[121.094145,29.629933],[121.097111,29.627821],[121.1017,29.626265],[121.104778,29.622483],[121.10619,29.617374],[121.109607,29.617079],[121.112713,29.61482],[121.113038,29.612445],[121.110186,29.607467],[121.111838,29.605895],[121.113744,29.606615],[121.117203,29.605698],[121.119025,29.603749],[121.117683,29.602357],[121.113927,29.602521],[121.115057,29.598476],[121.114182,29.597296],[121.11099,29.597411],[121.10955,29.596166],[121.11075,29.590597],[121.105681,29.58819],[121.10571,29.585438],[121.109169,29.586011],[121.110934,29.583996],[121.115382,29.586601],[121.116723,29.586502],[121.116695,29.582145],[121.120423,29.575609],[121.117443,29.571907],[121.117584,29.569253],[121.11349,29.565976],[121.112741,29.563961],[121.112191,29.557538],[121.112995,29.554835],[121.11685,29.555408],[121.130942,29.554163],[121.136618,29.55123],[121.13844,29.545495],[121.140346,29.54302],[121.146361,29.541726],[121.155722,29.541759],[121.162655,29.539808],[121.169306,29.537121],[121.174685,29.537137],[121.184499,29.53871],[121.189398,29.536334],[121.195357,29.537858],[121.205862,29.536957],[121.207796,29.53558],[121.208898,29.532909],[121.213204,29.53032],[121.216678,29.530893],[121.220674,29.533106],[121.225573,29.532925],[121.223328,29.529549],[121.223921,29.527599],[121.229343,29.524206],[121.229372,29.521256],[121.231546,29.513077],[121.228355,29.509946],[121.224853,29.509716],[121.222368,29.507044],[121.221916,29.503421],[121.220095,29.5027],[121.215788,29.503044],[121.214207,29.501143],[121.216057,29.499339],[121.216734,29.496815],[121.223653,29.494208],[121.227946,29.49188],[121.228468,29.490732],[121.225446,29.486731],[121.22419,29.483878],[121.219812,29.477779],[121.217935,29.469858],[121.219855,29.465644],[121.219615,29.463708],[121.215238,29.462232],[121.216212,29.459313],[121.215336,29.454704],[121.220123,29.450768],[121.223907,29.449538],[121.223526,29.445388],[121.217511,29.439237],[121.215195,29.440451],[121.20942,29.438433],[121.209731,29.435874],[121.212329,29.434496],[121.21528,29.430559],[121.215576,29.425407],[121.218259,29.421158],[121.215111,29.417253],[121.222411,29.4164],[121.223964,29.414956],[121.22683,29.414759],[121.229019,29.413086],[121.230035,29.410723],[121.228101,29.406538]]]]}},{type:"Feature",properties:{adcode:330225,name:"象山县",center:[121.877091,29.470206],centroid:[121.844541,29.384526],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:6,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.833534,29.653131],[121.823805,29.643129],[121.789748,29.621042],[121.786924,29.618766],[121.780895,29.612658],[121.758303,29.587452],[121.75466,29.584324],[121.751539,29.57959],[121.749266,29.57746],[121.742037,29.573086],[121.737292,29.569548],[121.733522,29.565829],[121.732026,29.563125],[121.723144,29.554032],[121.720829,29.549936],[121.716819,29.544725],[121.714743,29.542922],[121.70068,29.538235],[121.683086,29.53109],[121.675941,29.5285],[121.67244,29.526452],[121.663812,29.522616],[121.658235,29.521469],[121.64708,29.521289],[121.643353,29.520486],[121.628922,29.519191],[121.623415,29.517863],[121.609776,29.513306],[121.613164,29.512585],[121.637606,29.510962],[121.640614,29.508667],[121.637027,29.504225],[121.630871,29.500864],[121.627284,29.497011],[121.621043,29.492667],[121.605751,29.488748],[121.591363,29.483714],[121.577879,29.480058],[121.573304,29.475598],[121.571977,29.471121],[121.574349,29.465004],[121.579517,29.458903],[121.580858,29.456213],[121.583654,29.447406],[121.584854,29.44611],[121.588384,29.445503],[121.595628,29.446897],[121.602871,29.444158],[121.610665,29.444519],[121.615706,29.445552],[121.619829,29.451441],[121.620874,29.451506],[121.62367,29.44798],[121.62703,29.445208],[121.63073,29.443354],[121.632664,29.441369],[121.641079,29.43963],[121.642068,29.438613],[121.643042,29.433971],[121.648916,29.430887],[121.653025,29.427376],[121.655157,29.424456],[121.658856,29.422159],[121.657275,29.41704],[121.657444,29.413988],[121.660974,29.409492],[121.668218,29.405734],[121.675603,29.403355],[121.678751,29.403388],[121.68166,29.402223],[121.685162,29.399335],[121.691022,29.397332],[121.69225,29.398777],[121.693634,29.404356],[121.696274,29.408409],[121.698844,29.408491],[121.703122,29.406703],[121.705212,29.407293],[121.709377,29.404881],[121.714164,29.40452],[121.718174,29.408524],[121.720391,29.409574],[121.722848,29.406506],[121.721662,29.401451],[121.724726,29.396775],[121.725474,29.394132],[121.724796,29.390062],[121.722226,29.386008],[121.722057,29.377178],[121.723963,29.370875],[121.723879,29.366689],[121.722975,29.36508],[121.723271,29.361814],[121.725601,29.358793],[121.730416,29.355575],[121.733932,29.351077],[121.736883,29.350748],[121.73965,29.348877],[121.743604,29.347662],[121.743307,29.344049],[121.744183,29.340601],[121.743632,29.338089],[121.745411,29.336431],[121.747614,29.332325],[121.74832,29.327842],[121.744818,29.324492],[121.741698,29.317118],[121.741867,29.313045],[121.745948,29.310894],[121.746626,29.309005],[121.746781,29.300168],[121.748278,29.29542],[121.750664,29.292118],[121.751554,29.28788],[121.749845,29.277135],[121.74969,29.27242],[121.755239,29.27311],[121.756947,29.272601],[121.761875,29.277004],[121.7671,29.276363],[121.784891,29.275098],[121.789141,29.275065],[121.795918,29.275936],[121.799363,29.277037],[121.80672,29.278006],[121.812227,29.276035],[121.819131,29.269922],[121.820317,29.267277],[121.820035,29.263547],[121.817169,29.256645],[121.81498,29.254722],[121.799858,29.246029],[121.796172,29.243465],[121.793843,29.240473],[121.789833,29.230562],[121.788322,29.225105],[121.784552,29.216754],[121.782999,29.210145],[121.779073,29.197254],[121.775769,29.183112],[121.768031,29.166666],[121.769401,29.148292],[121.777562,29.116241],[121.780556,29.109626],[121.785893,29.106466],[121.794224,29.105199],[121.803642,29.107075],[121.807722,29.109593],[121.811168,29.109905],[121.817296,29.107996],[121.82091,29.106104],[121.827024,29.101841],[121.83496,29.093727],[121.842359,29.088378],[121.851748,29.086271],[121.860023,29.086419],[121.865614,29.089892],[121.872406,29.095356],[121.876981,29.100212],[121.884492,29.105445],[121.89408,29.105906],[121.898076,29.103931],[121.905249,29.091456],[121.907451,29.090007],[121.909654,29.085876],[121.899417,29.076427],[121.899106,29.072492],[121.903837,29.069051],[121.913029,29.070681],[121.931596,29.070731],[121.932175,29.068376],[121.931596,29.056637],[121.933008,29.05364],[121.93507,29.051829],[121.951647,29.047449],[121.956433,29.050545],[121.961036,29.052751],[121.966134,29.052867],[121.968435,29.056966],[121.967856,29.061511],[121.968802,29.071159],[121.969833,29.075883],[121.972516,29.078912],[121.983092,29.085398],[121.984405,29.086945],[121.983092,29.088822],[121.983332,29.091439],[121.980465,29.092328],[121.976949,29.092114],[121.968732,29.093052],[121.969833,29.096278],[121.974168,29.098879],[121.983374,29.101216],[121.986791,29.104985],[121.988528,29.110975],[121.98593,29.135262],[121.985365,29.137615],[121.979618,29.140823],[121.978587,29.142156],[121.979293,29.144837],[121.985633,29.145742],[121.988302,29.149279],[121.988372,29.152191],[121.986678,29.154856],[121.971979,29.162472],[121.960443,29.17058],[121.955727,29.175926],[121.953284,29.180481],[121.949091,29.18331],[121.937287,29.182849],[121.937287,29.187108],[121.946606,29.192584],[121.951364,29.193522],[121.960966,29.19339],[121.963832,29.192979],[121.971909,29.193374],[121.973236,29.194623],[121.973899,29.201085],[121.977119,29.217049],[121.978686,29.218792],[121.977175,29.220748],[121.977444,29.224102],[121.976074,29.227488],[121.968026,29.243892],[121.967009,29.248297],[121.968322,29.249989],[121.973956,29.24902],[121.975114,29.25326],[121.990985,29.260786],[122.001984,29.260096],[122.002266,29.263843],[121.999386,29.264582],[121.998525,29.26611],[121.999697,29.271697],[121.999315,29.275082],[122.000219,29.278828],[121.996774,29.279879],[121.989756,29.283083],[121.985351,29.284101],[121.981086,29.284085],[121.976752,29.282656],[121.967574,29.281424],[121.960274,29.283691],[121.955685,29.284414],[121.944841,29.284184],[121.942017,29.288652],[121.940873,29.298279],[121.94261,29.306475],[121.946549,29.316708],[121.952861,29.325231],[121.958368,29.334362],[121.957902,29.339879],[121.955854,29.342555],[121.95207,29.344115],[121.941819,29.346299],[121.935988,29.348105],[121.933164,29.350157],[121.932218,29.353457],[121.932613,29.357824],[121.933954,29.361994],[121.938571,29.369496],[121.936425,29.371893],[121.936976,29.381117],[121.93771,29.384105],[121.945829,29.395314],[121.959667,29.407146],[121.963479,29.408934],[121.975523,29.411166],[121.98151,29.429952],[121.984955,29.43571],[121.988909,29.44091],[121.991747,29.445962],[121.993328,29.452113],[121.992072,29.461396],[121.986014,29.46753],[121.977359,29.474253],[121.973109,29.478008],[121.97044,29.483026],[121.96667,29.506585],[121.968972,29.515585],[121.986424,29.541185],[121.995079,29.545102],[121.996421,29.549788],[121.990857,29.553884],[121.985774,29.563797],[121.986226,29.568417],[121.987186,29.570629],[121.997197,29.578247],[122.00029,29.582424],[122.000671,29.589123],[121.999725,29.593677],[121.99491,29.600506],[121.987892,29.604273],[121.985379,29.606304],[121.982851,29.610709],[121.970482,29.630342],[121.966077,29.635844],[121.959991,29.637743],[121.953708,29.640248],[121.947354,29.641623],[121.937583,29.642556],[121.934124,29.644438],[121.929718,29.648531],[121.923421,29.651674],[121.917123,29.651658],[121.909569,29.650086],[121.90265,29.644111],[121.899191,29.640329],[121.89384,29.636564],[121.8863,29.634665],[121.872476,29.632487],[121.866828,29.633126],[121.858964,29.636597],[121.833534,29.653131]]],[[[122.026355,29.17836],[122.026115,29.176715],[122.029264,29.176304],[122.028289,29.172669],[122.025988,29.173031],[122.023813,29.17012],[122.020721,29.173195],[122.015497,29.172817],[122.014466,29.169906],[122.015384,29.167735],[122.01938,29.167143],[122.018843,29.163212],[122.016358,29.162537],[122.016654,29.158063],[122.013139,29.15502],[122.013379,29.151516],[122.015567,29.151335],[122.017982,29.153457],[122.02041,29.152388],[122.022359,29.153606],[122.022712,29.150941],[122.024844,29.150825],[122.027626,29.155793],[122.029574,29.155974],[122.031876,29.15229],[122.034544,29.151154],[122.037623,29.151944],[122.038724,29.154066],[122.038413,29.157932],[122.041393,29.158853],[122.039868,29.163261],[122.043751,29.16382],[122.044301,29.16086],[122.046603,29.160564],[122.048537,29.162554],[122.049017,29.159363],[122.05235,29.15961],[122.056713,29.158458],[122.061993,29.162044],[122.063617,29.165251],[122.065862,29.164593],[122.067924,29.16563],[122.069392,29.168788],[122.071256,29.169988],[122.072047,29.172422],[122.075845,29.176402],[122.074518,29.178162],[122.070409,29.176995],[122.064168,29.173968],[122.061499,29.176814],[122.05739,29.176551],[122.054835,29.174791],[122.049031,29.175087],[122.046052,29.177143],[122.044668,29.179313],[122.044541,29.184099],[122.045572,29.1853],[122.048777,29.184576],[122.051997,29.185382],[122.0529,29.18696],[122.056303,29.187076],[122.057574,29.188967],[122.051022,29.192765],[122.050232,29.194936],[122.053931,29.19681],[122.056176,29.20051],[122.054665,29.201776],[122.051517,29.199836],[122.049568,29.200855],[122.049144,29.203469],[122.047394,29.202483],[122.045332,29.203996],[122.043511,29.203206],[122.040785,29.20513],[122.040065,29.207794],[122.036239,29.207366],[122.034488,29.203305],[122.03751,29.201431],[122.037453,29.198652],[122.033203,29.20028],[122.031269,29.198389],[122.031269,29.196333],[122.034728,29.195084],[122.03703,29.190545],[122.035081,29.189263],[122.032299,29.189263],[122.029758,29.187388],[122.031029,29.18599],[122.037933,29.182257],[122.040729,29.182997],[122.040842,29.179544],[122.037637,29.178261],[122.026355,29.17836]]],[[[122.231305,28.859837],[122.229018,28.857725],[122.232449,28.855614],[122.232265,28.853502],[122.23869,28.853304],[122.24181,28.855663],[122.240949,28.85888],[122.243745,28.861239],[122.242573,28.864687],[122.237899,28.861008],[122.235753,28.862015],[122.230839,28.861487],[122.231305,28.859837]]],[[[122.181942,29.407703],[122.183933,29.408245],[122.186616,29.413676],[122.190202,29.415908],[122.193549,29.41384],[122.196641,29.413857],[122.200354,29.417598],[122.203432,29.417105],[122.205353,29.418106],[122.20483,29.421437],[122.2074,29.42503],[122.204378,29.428131],[122.207908,29.429673],[122.211862,29.428902],[122.218343,29.42941],[122.223892,29.42836],[122.226363,29.43005],[122.22721,29.432954],[122.225375,29.435546],[122.224852,29.438367],[122.22152,29.438827],[122.220743,29.436891],[122.216747,29.437531],[122.215025,29.439926],[122.2111,29.440943],[122.206115,29.438482],[122.199352,29.436235],[122.19794,29.434726],[122.197643,29.430674],[122.199465,29.430165],[122.199747,29.428278],[122.197248,29.425489],[122.193407,29.426178],[122.190979,29.425046],[122.190922,29.423061],[122.187505,29.421798],[122.18526,29.424177],[122.179796,29.424685],[122.180022,29.421978],[122.178158,29.420846],[122.178158,29.41704],[122.181264,29.414759],[122.179584,29.411773],[122.179429,29.409131],[122.181942,29.407703]]],[[[121.790877,29.082287],[121.789522,29.078583],[121.791089,29.074221],[121.796455,29.070945],[121.805209,29.062219],[121.805986,29.060457],[121.808584,29.059255],[121.812326,29.062565],[121.817324,29.063042],[121.819682,29.061099],[121.817635,29.05965],[121.818355,29.057543],[121.820642,29.057296],[121.818948,29.054332],[121.823537,29.051055],[121.826191,29.052323],[121.832348,29.05038],[121.833675,29.051582],[121.833675,29.054299],[121.836386,29.053443],[121.838617,29.05774],[121.832107,29.060424],[121.836936,29.062762],[121.837699,29.06398],[121.833548,29.066401],[121.834536,29.069051],[121.839351,29.0692],[121.84154,29.071307],[121.841158,29.07539],[121.833392,29.07669],[121.834451,29.081151],[121.833392,29.083192],[121.840932,29.081513],[121.843121,29.082122],[121.84298,29.085365],[121.839351,29.086896],[121.835807,29.091061],[121.831585,29.094994],[121.820289,29.099405],[121.80936,29.099274],[121.793814,29.099455],[121.790722,29.098615],[121.788689,29.094616],[121.790877,29.082287]]],[[[122.184314,29.460625],[122.187519,29.459641],[122.183001,29.457279],[122.183241,29.45559],[122.186404,29.454934],[122.189341,29.456049],[122.189016,29.454754],[122.191332,29.452621],[122.194127,29.453442],[122.195794,29.457001],[122.19273,29.457624],[122.19472,29.460396],[122.197573,29.462232],[122.194255,29.462692],[122.195172,29.465299],[122.190823,29.464725],[122.188578,29.46256],[122.184244,29.461576],[122.184314,29.460625]]],[[[122.026482,29.621861],[122.022373,29.620191],[122.022133,29.618242],[122.02387,29.617161],[122.022542,29.615262],[122.024138,29.611708],[122.020707,29.609497],[122.021385,29.606828],[122.024604,29.60596],[122.025691,29.604306],[122.027837,29.606107],[122.030167,29.606042],[122.032003,29.609579],[122.032172,29.612511],[122.037623,29.613444],[122.037594,29.615376],[122.035152,29.6159],[122.034008,29.617865],[122.034954,29.622123],[122.033867,29.624726],[122.030337,29.625332],[122.02644,29.624841],[122.026482,29.621861]]],[[[122.258797,28.886591],[122.260717,28.883837],[122.258669,28.880802],[122.259432,28.879087],[122.261818,28.880258],[122.266506,28.880274],[122.268003,28.882287],[122.266647,28.883936],[122.268271,28.884958],[122.267028,28.886855],[122.261225,28.888966],[122.258797,28.886591]]],[[[121.983459,29.2278],[121.983628,29.226502],[121.991083,29.221422],[121.991097,29.219203],[121.994402,29.218085],[121.998652,29.218825],[121.999273,29.221718],[122.0018,29.221439],[121.999541,29.224233],[121.997762,29.224595],[121.99748,29.227274],[121.994077,29.227587],[121.990857,29.230973],[121.989643,29.230562],[121.990279,29.228014],[121.987384,29.228951],[121.983459,29.2278]]],[[[121.980719,29.472662],[121.986268,29.468431],[121.990829,29.467858],[121.996816,29.470645],[121.998863,29.470465],[121.999019,29.473187],[121.996887,29.472236],[121.996971,29.474138],[121.995235,29.474253],[121.990222,29.470203],[121.987751,29.47158],[121.98833,29.474237],[121.984292,29.474794],[121.982866,29.476368],[121.97863,29.475942],[121.980719,29.472662]]],[[[121.976159,29.501126],[121.975664,29.497847],[121.978305,29.499225],[121.97911,29.496585],[121.981524,29.495782],[121.983826,29.497044],[121.982908,29.498864],[121.987116,29.501716],[121.984744,29.50388],[121.991563,29.503061],[121.995559,29.501339],[121.998143,29.502389],[122.004582,29.50029],[122.005867,29.501438],[122.004949,29.503766],[122.002549,29.504946],[121.997833,29.505093],[121.995489,29.508143],[121.993187,29.509552],[121.989926,29.510077],[121.982682,29.50729],[121.982131,29.505126],[121.980409,29.504503],[121.978206,29.505618],[121.975664,29.504569],[121.976159,29.501126]]],[[[122.236642,29.46097],[122.238224,29.459395],[122.242361,29.459248],[122.24253,29.461166],[122.244959,29.461117],[122.243646,29.462626],[122.243971,29.46507],[122.241528,29.46584],[122.241288,29.463774],[122.23941,29.463971],[122.236642,29.46097]]],[[[122.006474,29.629802],[122.005542,29.63085],[121.999442,29.62263],[122.002916,29.620567],[122.009411,29.625594],[122.008832,29.628214],[122.006474,29.629802]]],[[[121.952042,29.187635],[121.951717,29.183096],[121.955501,29.180201],[121.956659,29.177932],[121.963832,29.17058],[121.966741,29.166715],[121.9714,29.163294],[121.974648,29.164363],[121.977938,29.162685],[121.978969,29.160267],[121.980804,29.161583],[121.981143,29.164232],[121.983515,29.165416],[121.981044,29.167192],[121.980268,29.170235],[121.982696,29.171847],[121.981101,29.17387],[121.981792,29.175893],[121.979886,29.17711],[121.974577,29.177422],[121.971584,29.180711],[121.971584,29.185086],[121.973532,29.187602],[121.976596,29.189592],[121.975622,29.192107],[121.970977,29.190858],[121.967715,29.192206],[121.965653,29.190562],[121.961587,29.190479],[121.952042,29.187635]]],[[[122.203164,29.446963],[122.205748,29.447028],[122.206765,29.445519],[122.210817,29.444863],[122.209349,29.448193],[122.205734,29.449603],[122.202854,29.44898],[122.203164,29.446963]]],[[[121.930467,29.036053],[121.935917,29.03602],[121.936157,29.033105],[121.941,29.033698],[121.941339,29.037881],[121.944332,29.039364],[121.948625,29.038705],[121.94847,29.041735],[121.954555,29.045144],[121.949994,29.046346],[121.944135,29.045786],[121.939249,29.04269],[121.937668,29.042986],[121.931003,29.041389],[121.929803,29.037058],[121.930467,29.036053]]],[[[122.006629,29.234885],[122.004427,29.231959],[122.001137,29.231055],[122.001038,29.227406],[122.003523,29.225088],[122.008606,29.222968],[122.010978,29.224184],[122.011713,29.228458],[122.013831,29.232797],[122.01681,29.232009],[122.01616,29.233981],[122.017219,29.236151],[122.01489,29.236266],[122.011317,29.233882],[122.006629,29.234885]]],[[[122.001617,29.410411],[122.00197,29.407736],[122.003834,29.405062],[122.006841,29.40434],[122.00951,29.405275],[122.010173,29.403092],[122.01304,29.404602],[122.016301,29.404208],[122.018928,29.409673],[122.016245,29.410772],[122.012037,29.410296],[122.0116,29.411724],[122.0067,29.413036],[122.002591,29.411691],[122.001617,29.410411]]],[[[121.975721,29.231302],[121.977076,29.230151],[121.980635,29.229937],[121.981383,29.22854],[121.983473,29.229757],[121.984376,29.23311],[121.981086,29.232009],[121.978884,29.234803],[121.97894,29.236529],[121.976695,29.236331],[121.975721,29.231302]]],[[[122.247571,28.880274],[122.248545,28.878625],[122.250819,28.879103],[122.248814,28.882072],[122.245609,28.880918],[122.247571,28.880274]]],[[[121.981425,29.332621],[121.983233,29.333885],[121.985238,29.337219],[121.982033,29.338303],[121.978686,29.340503],[121.979632,29.343031],[121.985944,29.346512],[121.985153,29.348466],[121.981849,29.348006],[121.979491,29.346545],[121.974902,29.345379],[121.9702,29.340848],[121.970369,29.338828],[121.975269,29.336972],[121.975876,29.333376],[121.981425,29.332621]]],[[[122.003791,29.29427],[122.003509,29.291297],[122.00629,29.291346],[122.009227,29.293794],[122.011981,29.291987],[122.014141,29.292053],[122.013901,29.294599],[122.011317,29.295897],[122.008027,29.295519],[122.004737,29.296751],[122.003791,29.29427]]],[[[121.97301,29.405603],[121.9763,29.402108],[121.979943,29.401812],[121.981044,29.402879],[121.975735,29.406801],[121.974125,29.409886],[121.971739,29.407999],[121.97301,29.405603]]],[[[122.222325,29.375192],[122.229131,29.373386],[122.231969,29.375832],[122.230331,29.379213],[122.22762,29.37987],[122.222932,29.378196],[122.222325,29.375192]]],[[[122.00317,29.342424],[122.00204,29.340273],[122.005344,29.338812],[122.012404,29.338368],[122.012814,29.340716],[122.010188,29.341307],[122.007533,29.345067],[122.002182,29.344444],[122.000233,29.342719],[122.00317,29.342424]]],[[[121.999174,29.571546],[121.996844,29.56709],[121.999442,29.5675],[122.000883,29.571088],[121.999174,29.571546]]],[[[121.998948,29.559832],[122.001899,29.558554],[122.007251,29.558374],[122.002167,29.562323],[121.999739,29.561618],[121.998948,29.559832]]],[[[122.229935,29.462118],[122.232774,29.461691],[122.23797,29.463315],[122.238125,29.464102],[122.232632,29.464988],[122.229102,29.464463],[122.229935,29.462118]]],[[[122.253149,29.452507],[122.255662,29.450522],[122.258655,29.450473],[122.259954,29.452785],[122.258571,29.45454],[122.25353,29.454655],[122.251779,29.453868],[122.253149,29.452507]]],[[[122.057546,29.12924],[122.056515,29.132284],[122.053634,29.130935],[122.055668,29.12901],[122.054171,29.127315],[122.056797,29.127628],[122.057546,29.12924]]],[[[122.178313,29.406013],[122.174953,29.403798],[122.173894,29.399778],[122.177409,29.400631],[122.179612,29.399663],[122.184342,29.399614],[122.185768,29.400828],[122.184611,29.4037],[122.181998,29.406063],[122.178313,29.406013]]],[[[122.023489,29.02632],[122.027329,29.024706],[122.030464,29.025991],[122.030195,29.027407],[122.022415,29.027143],[122.023489,29.02632]]],[[[122.220574,29.458067],[122.225078,29.460035],[122.22786,29.459182],[122.228368,29.460838],[122.226843,29.463003],[122.223483,29.464299],[122.221675,29.463315],[122.221661,29.461019],[122.219924,29.459362],[122.220574,29.458067]]],[[[121.78482,29.072542],[121.787785,29.072426],[121.788308,29.074254],[121.786712,29.076608],[121.784213,29.074715],[121.78482,29.072542]]],[[[122.253812,28.880819],[122.251412,28.880423],[122.252287,28.877916],[122.256509,28.878064],[122.258218,28.880967],[122.254786,28.882715],[122.253812,28.880819]]],[[[121.985478,29.285432],[121.988401,29.285317],[121.992114,29.286582],[121.993484,29.28834],[121.989573,29.289424],[121.986763,29.289276],[121.983529,29.290739],[121.984193,29.286697],[121.985478,29.285432]]],[[[122.028092,29.284479],[122.027894,29.283526],[122.03333,29.283724],[122.03405,29.285613],[122.036945,29.288209],[122.032568,29.287814],[122.030323,29.285251],[122.028092,29.284479]]],[[[121.805689,29.038623],[121.807454,29.037305],[121.810405,29.038425],[121.80912,29.041389],[121.804913,29.042888],[121.804037,29.041159],[121.805689,29.038623]]],[[[122.062459,29.213449],[122.064719,29.21312],[122.066498,29.2158],[122.063815,29.21626],[122.062459,29.213449]]],[[[121.991168,29.63175],[121.991239,29.629294],[121.993583,29.627755],[121.994274,29.631914],[121.991154,29.635827],[121.989205,29.634436],[121.991168,29.63175]]],[[[122.042875,29.262577],[122.042522,29.263908],[122.037058,29.264089],[122.035942,29.263169],[122.041138,29.261854],[122.042875,29.262577]]],[[[122.076269,29.188588],[122.074546,29.186697],[122.076622,29.187043],[122.076269,29.188588]]],[[[122.083526,29.504503],[122.085009,29.503438],[122.086661,29.504602],[122.083526,29.504503]]],[[[122.061047,29.206692],[122.058478,29.207021],[122.05852,29.203519],[122.060807,29.203584],[122.061047,29.206692]]],[[[121.927346,29.651903],[121.92873,29.65151],[121.93041,29.653998],[121.929761,29.655013],[121.925539,29.654932],[121.927346,29.651903]]],[[[122.037481,29.278039],[122.042917,29.276396],[122.044485,29.277185],[122.040418,29.280043],[122.037481,29.278039]]],[[[122.033683,29.100788],[122.036253,29.101611],[122.034714,29.102631],[122.033683,29.100788]]],[[[121.844731,29.072393],[121.844406,29.071192],[121.847075,29.070796],[121.847413,29.072673],[121.844731,29.072393]]],[[[122.016386,29.050281],[122.01472,29.048487],[122.017939,29.048552],[122.016386,29.050281]]],[[[121.984941,29.085579],[121.98768,29.084279],[121.987059,29.086995],[121.984786,29.08711],[121.984941,29.085579]]],[[[122.205155,29.387338],[122.207937,29.386534],[122.207499,29.388454],[122.205155,29.387338]]],[[[122.019916,29.284824],[122.02178,29.281621],[122.024844,29.281637],[122.026764,29.284446],[122.024576,29.286171],[122.019916,29.284824]]]]}},{type:"Feature",properties:{adcode:330226,name:"宁海县",center:[121.432606,29.299836],centroid:[121.475296,29.305485],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:7,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.228101,29.406538],[121.228637,29.400631],[121.231391,29.394132],[121.231137,29.391621],[121.228637,29.391047],[121.227056,29.388503],[121.226406,29.384646],[121.226774,29.378048],[121.230078,29.373501],[121.230614,29.370465],[121.230063,29.362667],[121.223371,29.357135],[121.220137,29.355312],[121.215788,29.35482],[121.213106,29.353572],[121.210875,29.350584],[121.206427,29.348614],[121.203688,29.346611],[121.200214,29.342391],[121.196416,29.341307],[121.193422,29.341439],[121.19602,29.336201],[121.195385,29.33226],[121.196839,29.326512],[121.196684,29.324689],[121.192575,29.321175],[121.188523,29.319516],[121.187534,29.317824],[121.189709,29.312602],[121.19074,29.312372],[121.197178,29.315772],[121.201061,29.31247],[121.200398,29.307724],[121.197009,29.303223],[121.185289,29.295273],[121.180912,29.29202],[121.17991,29.289901],[121.181788,29.286878],[121.178978,29.286007],[121.175307,29.278285],[121.175038,29.271237],[121.178215,29.265371],[121.179302,29.258716],[121.174869,29.258387],[121.168416,29.259504],[121.166849,29.25888],[121.164095,29.250745],[121.162246,29.249168],[121.158871,29.244484],[121.159549,29.24215],[121.162754,29.236019],[121.169786,29.229066],[121.169786,29.226058],[121.171395,29.224184],[121.175109,29.222277],[121.172567,29.217904],[121.168374,29.216129],[121.165762,29.213942],[121.164717,29.211591],[121.167244,29.209306],[121.173513,29.206396],[121.188749,29.20536],[121.202713,29.203568],[121.214913,29.205525],[121.223455,29.204703],[121.225319,29.203864],[121.226774,29.199638],[121.228666,29.197731],[121.233692,29.19681],[121.232958,29.186599],[121.235118,29.182027],[121.238888,29.175745],[121.246753,29.168722],[121.251017,29.163541],[121.250735,29.161254],[121.253065,29.157192],[121.256016,29.158376],[121.257979,29.156863],[121.258755,29.153836],[121.261367,29.154625],[121.263076,29.156451],[121.265222,29.156155],[121.264375,29.154379],[121.25867,29.150513],[121.257541,29.148983],[121.25747,29.141267],[121.258741,29.129224],[121.257724,29.122593],[121.254717,29.118989],[121.256072,29.114036],[121.261381,29.113378],[121.264036,29.113773],[121.266719,29.111864],[121.270715,29.110333],[121.267778,29.106416],[121.271223,29.10217],[121.277789,29.099981],[121.280613,29.096937],[121.285766,29.094961],[121.287235,29.091357],[121.292629,29.091406],[121.295213,29.092707],[121.293998,29.096542],[121.297698,29.100228],[121.297486,29.104524],[121.299745,29.106894],[121.297034,29.110646],[121.29863,29.114579],[121.308217,29.11453],[121.310886,29.111995],[121.310547,29.106762],[121.312142,29.105034],[121.316986,29.105643],[121.317183,29.108013],[121.319781,29.11086],[121.323805,29.117163],[121.330032,29.120766],[121.336598,29.121951],[121.339337,29.123416],[121.343672,29.127282],[121.344999,29.131116],[121.347823,29.133452],[121.347555,29.140395],[121.34531,29.142814],[121.345409,29.145183],[121.348092,29.15076],[121.361915,29.173278],[121.36207,29.175975],[121.355858,29.182586],[121.356338,29.186023],[121.36248,29.189526],[121.366914,29.189131],[121.378788,29.199227],[121.381189,29.199375],[121.385396,29.196925],[121.395167,29.186763],[121.397794,29.182767],[121.403738,29.178837],[121.402962,29.175893],[121.405009,29.167834],[121.40138,29.163919],[121.401352,29.160712],[121.404331,29.157669],[121.407042,29.156895],[121.414342,29.157257],[121.418268,29.158475],[121.423831,29.157734],[121.431032,29.159774],[121.445251,29.159922],[121.450066,29.159626],[121.455389,29.158327],[121.460811,29.155629],[121.470539,29.147618],[121.477133,29.144196],[121.484532,29.142847],[121.508367,29.140609],[121.524887,29.136513],[121.529716,29.136266],[121.533203,29.137385],[121.537962,29.142304],[121.54858,29.157422],[121.555795,29.168952],[121.558775,29.171452],[121.564281,29.173047],[121.57257,29.172883],[121.580477,29.171929],[121.608448,29.169117],[121.648789,29.150924],[121.680008,29.13903],[121.715618,29.124962],[121.749958,29.136694],[121.768031,29.166666],[121.775769,29.183112],[121.779073,29.197254],[121.782999,29.210145],[121.784552,29.216754],[121.788322,29.225105],[121.789833,29.230562],[121.793843,29.240473],[121.796172,29.243465],[121.799858,29.246029],[121.81498,29.254722],[121.817169,29.256645],[121.820035,29.263547],[121.820317,29.267277],[121.819131,29.269922],[121.812227,29.276035],[121.80672,29.278006],[121.799363,29.277037],[121.795918,29.275936],[121.789141,29.275065],[121.784891,29.275098],[121.7671,29.276363],[121.761875,29.277004],[121.756947,29.272601],[121.755239,29.27311],[121.74969,29.27242],[121.749845,29.277135],[121.751554,29.28788],[121.750664,29.292118],[121.748278,29.29542],[121.746781,29.300168],[121.746626,29.309005],[121.745948,29.310894],[121.741867,29.313045],[121.741698,29.317118],[121.744818,29.324492],[121.74832,29.327842],[121.747614,29.332325],[121.745411,29.336431],[121.743632,29.338089],[121.744183,29.340601],[121.743307,29.344049],[121.743604,29.347662],[121.73965,29.348877],[121.736883,29.350748],[121.733932,29.351077],[121.730416,29.355575],[121.725601,29.358793],[121.723271,29.361814],[121.722975,29.36508],[121.723879,29.366689],[121.723963,29.370875],[121.722057,29.377178],[121.722226,29.386008],[121.724796,29.390062],[121.725474,29.394132],[121.724726,29.396775],[121.721662,29.401451],[121.722848,29.406506],[121.720391,29.409574],[121.718174,29.408524],[121.714164,29.40452],[121.709377,29.404881],[121.705212,29.407293],[121.703122,29.406703],[121.698844,29.408491],[121.696274,29.408409],[121.693634,29.404356],[121.69225,29.398777],[121.691022,29.397332],[121.685162,29.399335],[121.68166,29.402223],[121.678751,29.403388],[121.675603,29.403355],[121.668218,29.405734],[121.660974,29.409492],[121.657444,29.413988],[121.657275,29.41704],[121.658856,29.422159],[121.655157,29.424456],[121.653025,29.427376],[121.648916,29.430887],[121.643042,29.433971],[121.642068,29.438613],[121.641079,29.43963],[121.632664,29.441369],[121.63073,29.443354],[121.62703,29.445208],[121.62367,29.44798],[121.620874,29.451506],[121.619829,29.451441],[121.615706,29.445552],[121.610665,29.444519],[121.602871,29.444158],[121.595628,29.446897],[121.588384,29.445503],[121.584854,29.44611],[121.583654,29.447406],[121.580858,29.456213],[121.579517,29.458903],[121.574349,29.465004],[121.571977,29.471121],[121.573304,29.475598],[121.577879,29.480058],[121.591363,29.483714],[121.605751,29.488748],[121.621043,29.492667],[121.627284,29.497011],[121.630871,29.500864],[121.637027,29.504225],[121.640614,29.508667],[121.637606,29.510962],[121.613164,29.512585],[121.609776,29.513306],[121.596701,29.510946],[121.590403,29.510536],[121.579969,29.50229],[121.570946,29.496126],[121.566301,29.492126],[121.557165,29.490552],[121.553819,29.490814],[121.538018,29.495208],[121.530097,29.495896],[121.511501,29.495355],[121.505091,29.494634],[121.49981,29.496011],[121.490011,29.4957],[121.483953,29.496093],[121.477232,29.49929],[121.475298,29.502962],[121.47198,29.505962],[121.468407,29.508011],[121.462067,29.509536],[121.46074,29.511798],[121.449501,29.517519],[121.444855,29.518076],[121.442667,29.512421],[121.43949,29.510831],[121.432119,29.51029],[121.427276,29.509175],[121.423464,29.50593],[121.420456,29.506339],[121.413396,29.512044],[121.409951,29.517339],[121.404797,29.519994],[121.393854,29.52119],[121.39312,29.518388],[121.393812,29.514929],[121.390522,29.510946],[121.386258,29.507766],[121.376134,29.494913],[121.374679,29.488404],[121.369808,29.484731],[121.359119,29.48401],[121.354785,29.484551],[121.351029,29.486731],[121.346468,29.491552],[121.341088,29.492995],[121.335836,29.493126],[121.33184,29.496339],[121.329002,29.497257],[121.327886,29.491699],[121.326333,29.489863],[121.31539,29.482829],[121.314006,29.481173],[121.312015,29.476254],[121.306509,29.474401],[121.303854,29.472023],[121.300479,29.472023],[121.296243,29.473187],[121.287531,29.478353],[121.285639,29.478254],[121.282971,29.472597],[121.280613,29.469891],[121.274033,29.464233],[121.269303,29.45805],[121.268371,29.454262],[121.270785,29.450112],[121.270573,29.445486],[121.266945,29.441025],[121.26045,29.43589],[121.25692,29.427458],[121.254985,29.424833],[121.250763,29.41448],[121.241246,29.407917],[121.235034,29.406342],[121.228101,29.406538]]]]}},{type:"Feature",properties:{adcode:330281,name:"余姚市",center:[121.156294,30.045404],centroid:[121.125653,30.024547],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:8,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.04008,30.352861],[121.034757,30.342311],[121.032554,30.336996],[121.01393,30.323615],[120.995165,30.319924],[120.968718,30.311583],[120.954373,30.306428],[120.947313,30.302509],[120.916037,30.285773],[120.884521,30.276388],[120.867041,30.271735],[120.877363,30.253449],[120.893431,30.228828],[120.900039,30.216849],[120.913552,30.193424],[120.917661,30.184762],[120.919567,30.177337],[120.920584,30.17509],[120.92763,30.165238],[120.927827,30.158479],[120.930877,30.149538],[120.931216,30.146606],[120.939462,30.125738],[120.938205,30.120639],[120.936017,30.118227],[120.930453,30.115197],[120.931569,30.112851],[120.938304,30.11303],[120.942074,30.106724],[120.94134,30.103009],[120.944136,30.097582],[120.950137,30.091014],[120.953582,30.091536],[120.955488,30.094046],[120.959738,30.094551],[120.964793,30.092758],[120.967631,30.089971],[120.971867,30.080404],[120.973872,30.078301],[120.973194,30.076215],[120.970808,30.073803],[120.969947,30.070282],[120.972319,30.068537],[120.97599,30.070005],[120.977727,30.067885],[120.972503,30.06707],[120.973067,30.064967],[120.9788,30.065668],[120.97815,30.067005],[120.98144,30.067364],[120.981596,30.065587],[120.984702,30.060501],[120.987597,30.061919],[120.991847,30.061055],[120.99251,30.057256],[120.986651,30.05442],[120.986806,30.053376],[120.991324,30.052039],[120.992553,30.050409],[120.989432,30.049594],[120.988416,30.044816],[120.986524,30.044278],[120.987427,30.038522],[120.988811,30.036125],[120.986382,30.032407],[120.989771,30.031201],[120.990152,30.027792],[120.998271,30.022834],[121.001265,30.020209],[121.005218,30.019687],[121.007972,30.017567],[121.008861,30.015397],[121.016415,30.013848],[121.016317,30.011891],[121.01818,30.010782],[121.021936,30.010879],[121.026059,30.012233],[121.033458,30.012657],[121.037256,30.015838],[121.039487,30.013913],[121.036452,30.009509],[121.037779,30.008074],[121.034729,30.00398],[121.038118,29.998727],[121.039869,30.00013],[121.042424,29.999739],[121.046053,30.000783],[121.04971,30.00597],[121.051404,30.006785],[121.056516,30.004453],[121.059622,30.004877],[121.064395,30.006818],[121.071243,30.004485],[121.07579,30.00199],[121.080491,29.997781],[121.082849,29.990848],[121.091604,29.987259],[121.090615,29.98349],[121.087834,29.980406],[121.086577,29.973651],[121.085843,29.972672],[121.079785,29.969801],[121.07682,29.970388],[121.074575,29.968952],[121.071539,29.964481],[121.068235,29.961625],[121.066132,29.960809],[121.061288,29.961592],[121.056205,29.959585],[121.052619,29.959324],[121.045051,29.955636],[121.044232,29.954298],[121.044217,29.947704],[121.042622,29.939037],[121.042015,29.933194],[121.040899,29.929635],[121.038132,29.924754],[121.034136,29.922354],[121.030789,29.918779],[121.030338,29.915759],[121.031976,29.913114],[121.031651,29.911057],[121.029265,29.908934],[121.023391,29.901423],[121.023193,29.897357],[121.017785,29.895904],[121.016458,29.894646],[121.019818,29.891397],[121.022346,29.886285],[121.026977,29.880291],[121.032554,29.878528],[121.031114,29.874608],[121.033825,29.871472],[121.040278,29.867862],[121.054963,29.856885],[121.056615,29.855071],[121.060554,29.854157],[121.061288,29.857865],[121.063124,29.859025],[121.067529,29.857081],[121.069704,29.852833],[121.074025,29.849827],[121.077018,29.848994],[121.081635,29.849925],[121.085448,29.849403],[121.091618,29.843488],[121.095021,29.843423],[121.101092,29.841234],[121.106472,29.836234],[121.106303,29.833718],[121.103507,29.828979],[121.102843,29.825711],[121.098494,29.821413],[121.096687,29.815742],[121.102321,29.810006],[121.104933,29.805462],[121.105371,29.802961],[121.103987,29.801425],[121.096037,29.797829],[121.092592,29.788937],[121.089401,29.786403],[121.083457,29.784032],[121.082073,29.778441],[121.080167,29.775956],[121.076072,29.773046],[121.066089,29.767634],[121.059029,29.76093],[121.05509,29.760668],[121.048228,29.766506],[121.045531,29.767291],[121.034023,29.768762],[121.026031,29.766457],[121.024803,29.763906],[121.026751,29.760276],[121.034799,29.747112],[121.035435,29.745117],[121.03295,29.743383],[121.027627,29.747275],[121.022092,29.743988],[121.017983,29.743678],[121.014947,29.741682],[121.010739,29.735255],[121.012391,29.729808],[121.016133,29.725293],[121.019734,29.723412],[121.028036,29.723985],[121.031637,29.723101],[121.035858,29.721155],[121.036649,29.71857],[121.034799,29.715986],[121.023984,29.712305],[121.015102,29.711961],[121.009638,29.709016],[121.00752,29.703977],[121.0068,29.698594],[121.013394,29.69362],[121.0141,29.689497],[121.010203,29.686731],[121.003948,29.68683],[120.999076,29.685111],[120.993216,29.68539],[120.990844,29.68354],[120.99052,29.679531],[120.992426,29.675816],[120.995546,29.674327],[121.001646,29.672674],[121.006531,29.673018],[121.012292,29.671741],[121.017771,29.669728],[121.023504,29.670546],[121.029236,29.673639],[121.036226,29.675931],[121.038414,29.675767],[121.04498,29.679629],[121.05091,29.684179],[121.052054,29.691051],[121.055598,29.698267],[121.059255,29.700934],[121.064028,29.70082],[121.065313,29.69992],[121.071638,29.68917],[121.076552,29.687435],[121.088667,29.687386],[121.091265,29.688466],[121.094569,29.691591],[121.096165,29.691362],[121.107602,29.679466],[121.112558,29.675096],[121.117994,29.675014],[121.127313,29.679891],[121.131789,29.684457],[121.13498,29.69002],[121.138072,29.697171],[121.139654,29.698594],[121.145231,29.698513],[121.150879,29.703028],[121.157756,29.706431],[121.160707,29.706088],[121.162486,29.707102],[121.164053,29.710374],[121.167145,29.710816],[121.170492,29.714186],[121.172525,29.718178],[121.177269,29.720959],[121.181646,29.722611],[121.188537,29.722938],[121.191869,29.725899],[121.191926,29.730151],[121.190132,29.73604],[121.186405,29.73635],[121.187549,29.738133],[121.184386,29.740668],[121.181802,29.740145],[121.181378,29.735925],[121.176366,29.731182],[121.173457,29.729808],[121.167795,29.729252],[121.160099,29.732392],[121.158207,29.734388],[121.158744,29.738722],[121.162796,29.740537],[121.160184,29.743579],[121.155129,29.741862],[121.150399,29.742287],[121.148916,29.745378],[121.149919,29.753163],[121.152136,29.759573],[121.152108,29.762205],[121.149721,29.764217],[121.147236,29.764936],[121.145485,29.767454],[121.145838,29.771852],[121.146714,29.773275],[121.144723,29.774043],[121.142266,29.772245],[121.140077,29.772441],[121.139724,29.775547],[121.143071,29.776136],[121.141207,29.783771],[121.143381,29.783607],[121.146347,29.786141],[121.147857,29.785307],[121.151472,29.790244],[121.153392,29.789411],[121.159012,29.790424],[121.162217,29.788822],[121.162133,29.78176],[121.165168,29.781613],[121.165903,29.782806],[121.163898,29.784327],[121.16603,29.784572],[121.169207,29.782283],[121.175052,29.783427],[121.172991,29.78789],[121.170068,29.790244],[121.172285,29.796031],[121.169376,29.798532],[121.169715,29.802275],[121.173189,29.807783],[121.173005,29.809663],[121.176464,29.81352],[121.179514,29.812539],[121.182536,29.809777],[121.186715,29.810692],[121.188593,29.815808],[121.188975,29.820367],[121.186885,29.82089],[121.185416,29.822982],[121.186871,29.824387],[121.186179,29.826299],[121.188664,29.826136],[121.195724,29.828554],[121.196218,29.83045],[121.198604,29.831169],[121.19619,29.832688],[121.199367,29.835515],[121.199932,29.838619],[121.204803,29.838211],[121.211722,29.840368],[121.212795,29.841609],[121.218796,29.839845],[121.219347,29.841953],[121.226943,29.845449],[121.229259,29.848243],[121.23389,29.85236],[121.234921,29.855039],[121.235401,29.862373],[121.241741,29.871341],[121.241289,29.876682],[121.24359,29.878446],[121.248801,29.879344],[121.251992,29.881582],[121.252839,29.886514],[121.258148,29.886775],[121.260859,29.890939],[121.265024,29.894614],[121.267721,29.895398],[121.278721,29.89365],[121.284609,29.894189],[121.288308,29.896263],[121.296639,29.896818],[121.298983,29.89801],[121.297853,29.90175],[121.298178,29.905146],[121.299378,29.907056],[121.303007,29.907938],[121.303741,29.912232],[121.309361,29.916575],[121.315446,29.917261],[121.316477,29.915873],[121.315545,29.910028],[121.317706,29.909163],[121.322619,29.91344],[121.324243,29.910877],[121.323678,29.905309],[121.324413,29.904411],[121.327999,29.905162],[121.333012,29.904819],[121.340763,29.909261],[121.343531,29.90895],[121.346948,29.903121],[121.345409,29.899888],[121.346087,29.898517],[121.351466,29.894744],[121.357171,29.893438],[121.359571,29.893977],[121.371093,29.903758],[121.375964,29.912771],[121.376021,29.915546],[121.374934,29.923236],[121.376134,29.926207],[121.388263,29.94444],[121.389915,29.949712],[121.387105,29.951589],[121.381965,29.953482],[121.376925,29.950838],[121.373013,29.950218],[121.36673,29.952078],[121.360701,29.955228],[121.36954,29.959879],[121.376925,29.960515],[121.378972,29.961756],[121.381104,29.966406],[121.38414,29.969539],[121.381259,29.973684],[121.380822,29.976311],[121.382784,29.984828],[121.384253,29.986492],[121.387839,29.987014],[121.392767,29.983262],[121.395167,29.983653],[121.399121,29.987585],[121.399516,29.99075],[121.403385,29.997797],[121.403442,30.000701],[121.398726,30.001484],[121.399248,30.006524],[121.40138,30.01039],[121.401168,30.012282],[121.397709,30.013554],[121.397285,30.014712],[121.399121,30.019605],[121.403851,30.026667],[121.407522,30.030793],[121.415048,30.031445],[121.419454,30.033826],[121.424438,30.035489],[121.425553,30.040006],[121.423082,30.043789],[121.423887,30.046235],[121.418804,30.044099],[121.415839,30.043805],[121.405899,30.047572],[121.401804,30.05217],[121.40162,30.055447],[121.404487,30.059066],[121.409443,30.062017],[121.412704,30.063207],[121.41341,30.064967],[121.412902,30.068472],[121.411801,30.069075],[121.406703,30.065734],[121.402566,30.064201],[121.400674,30.064527],[121.39809,30.066989],[121.396339,30.070575],[121.39497,30.071227],[121.392075,30.06888],[121.391779,30.065326],[121.387472,30.064381],[121.381796,30.06694],[121.379339,30.066695],[121.373832,30.063142],[121.369695,30.061837],[121.363256,30.062571],[121.351551,30.07007],[121.345847,30.069369],[121.340594,30.067673],[121.33263,30.069532],[121.323721,30.072384],[121.311267,30.07408],[121.307949,30.073395],[121.305407,30.071879],[121.292982,30.071472],[121.289805,30.0717],[121.286007,30.073085],[121.283437,30.072662],[121.271703,30.068668],[121.259263,30.068472],[121.257979,30.068097],[121.257696,30.065147],[121.254745,30.06456],[121.2476,30.068032],[121.244169,30.070265],[121.238507,30.071178],[121.235584,30.070461],[121.232196,30.071488],[121.227282,30.070086],[121.217807,30.070526],[121.214277,30.071635],[121.208488,30.076525],[121.204761,30.082686],[121.201485,30.083843],[121.194707,30.083745],[121.192448,30.082523],[121.191262,30.085473],[121.186052,30.0909],[121.187831,30.093508],[121.187196,30.097875],[121.182268,30.103644],[121.182931,30.109592],[121.179811,30.113682],[121.17597,30.115588],[121.1734,30.118961],[121.17806,30.124028],[121.196373,30.126944],[121.199254,30.128606],[121.202629,30.132206],[121.205735,30.133004],[121.211835,30.137647],[121.216268,30.146215],[121.21768,30.147274],[121.222481,30.147355],[121.225404,30.148104],[121.230374,30.151916],[121.230487,30.156378],[121.22169,30.163593],[121.220603,30.171133],[121.220999,30.173592],[121.218909,30.172843],[121.209985,30.173706],[121.207429,30.173543],[121.206977,30.175188],[121.201485,30.175693],[121.201061,30.174667],[121.189497,30.17312],[121.187944,30.168951],[121.178865,30.169374],[121.148578,30.17014],[121.143014,30.168918],[121.141616,30.162535],[121.138496,30.163903],[121.138905,30.165466],[121.131549,30.166003],[121.131775,30.167551],[121.126127,30.16773],[121.124164,30.166085],[121.124517,30.163903],[121.122173,30.164033],[121.122032,30.159717],[121.118262,30.160141],[121.119985,30.163951],[121.117613,30.163772],[121.118418,30.167209],[121.117076,30.165857],[121.1138,30.165922],[121.113786,30.169016],[121.111668,30.169293],[121.111259,30.166704],[121.108181,30.16869],[121.109112,30.172012],[121.108816,30.176035],[121.105794,30.179698],[121.10057,30.179373],[121.097562,30.195019],[121.09841,30.19782],[121.098085,30.206431],[121.099567,30.208515],[121.104679,30.209345],[121.104439,30.21348],[121.102321,30.221895],[121.099059,30.240984],[121.097365,30.238967],[121.095346,30.238836],[121.093468,30.247526],[121.089119,30.246078],[121.083075,30.243263],[121.066908,30.238983],[121.058507,30.236119],[121.056855,30.239927],[121.064296,30.245443],[121.0798,30.251236],[121.081734,30.252277],[121.081635,30.25789],[121.083824,30.262072],[121.086365,30.264528],[121.097464,30.27058],[121.098523,30.270645],[121.096094,30.27751],[121.093891,30.281316],[121.054101,30.331029],[121.04008,30.352861]]]]}},{type:"Feature",properties:{adcode:330282,name:"慈溪市",center:[121.248052,30.177142],centroid:[121.314502,30.230119],childrenNum:0,level:"district",parent:{adcode:330200},subFeatureIndex:9,acroutes:[1e5,33e4,330200]},geometry:{type:"MultiPolygon",coordinates:[[[[121.423887,30.046235],[121.427798,30.047865],[121.434124,30.048306],[121.437626,30.049267],[121.440732,30.052072],[121.444361,30.051941],[121.449063,30.050686],[121.450659,30.049219],[121.469057,30.053507],[121.472417,30.055952],[121.479124,30.056327],[121.480932,30.055381],[121.48216,30.052382],[121.482344,30.047979],[121.480988,30.047001],[121.480805,30.043952],[121.487427,30.042648],[121.493244,30.045305],[121.492143,30.048827],[121.493625,30.052805],[121.497438,30.052675],[121.505133,30.054436],[121.510357,30.058479],[121.516542,30.058903],[121.522486,30.060403],[121.524901,30.058968],[121.525452,30.055838],[121.52685,30.055039],[121.529589,30.056425],[121.531311,30.054534],[121.535053,30.053898],[121.539106,30.055137],[121.542749,30.055267],[121.547747,30.056376],[121.548552,30.054045],[121.55653,30.051876],[121.558873,30.050132],[121.563236,30.044115],[121.57233,30.040919],[121.577286,30.038653],[121.581268,30.038457],[121.594865,30.040446],[121.600089,30.040088],[121.603026,30.040789],[121.609832,30.045843],[121.612134,30.049072],[121.61332,30.05274],[121.620069,30.063027],[121.623825,30.067462],[121.632636,30.072124],[121.626042,30.077715],[121.619928,30.088504],[121.614718,30.108288],[121.591702,30.143527],[121.561472,30.18416],[121.527541,30.224906],[121.497791,30.258606],[121.476286,30.279413],[121.452706,30.298557],[121.395083,30.338442],[121.37187,30.370901],[121.328041,30.397127],[121.278763,30.405039],[121.22546,30.404666],[121.1832,30.434342],[121.161427,30.452481],[121.119208,30.489772],[121.109508,30.466866],[121.099511,30.443647],[121.091858,30.416898],[121.086973,30.397127],[121.060201,30.376345],[121.046279,30.360744],[121.04008,30.352861],[121.054101,30.331029],[121.093891,30.281316],[121.096094,30.27751],[121.098523,30.270645],[121.097464,30.27058],[121.086365,30.264528],[121.083824,30.262072],[121.081635,30.25789],[121.081734,30.252277],[121.0798,30.251236],[121.064296,30.245443],[121.056855,30.239927],[121.058507,30.236119],[121.066908,30.238983],[121.083075,30.243263],[121.089119,30.246078],[121.093468,30.247526],[121.095346,30.238836],[121.097365,30.238967],[121.099059,30.240984],[121.102321,30.221895],[121.104439,30.21348],[121.104679,30.209345],[121.099567,30.208515],[121.098085,30.206431],[121.09841,30.19782],[121.097562,30.195019],[121.10057,30.179373],[121.105794,30.179698],[121.108816,30.176035],[121.109112,30.172012],[121.108181,30.16869],[121.111259,30.166704],[121.111668,30.169293],[121.113786,30.169016],[121.1138,30.165922],[121.117076,30.165857],[121.118418,30.167209],[121.117613,30.163772],[121.119985,30.163951],[121.118262,30.160141],[121.122032,30.159717],[121.122173,30.164033],[121.124517,30.163903],[121.124164,30.166085],[121.126127,30.16773],[121.131775,30.167551],[121.131549,30.166003],[121.138905,30.165466],[121.138496,30.163903],[121.141616,30.162535],[121.143014,30.168918],[121.148578,30.17014],[121.178865,30.169374],[121.187944,30.168951],[121.189497,30.17312],[121.201061,30.174667],[121.201485,30.175693],[121.206977,30.175188],[121.207429,30.173543],[121.209985,30.173706],[121.218909,30.172843],[121.220999,30.173592],[121.220603,30.171133],[121.22169,30.163593],[121.230487,30.156378],[121.230374,30.151916],[121.225404,30.148104],[121.222481,30.147355],[121.21768,30.147274],[121.216268,30.146215],[121.211835,30.137647],[121.205735,30.133004],[121.202629,30.132206],[121.199254,30.128606],[121.196373,30.126944],[121.17806,30.124028],[121.1734,30.118961],[121.17597,30.115588],[121.179811,30.113682],[121.182931,30.109592],[121.182268,30.103644],[121.187196,30.097875],[121.187831,30.093508],[121.186052,30.0909],[121.191262,30.085473],[121.192448,30.082523],[121.194707,30.083745],[121.201485,30.083843],[121.204761,30.082686],[121.208488,30.076525],[121.214277,30.071635],[121.217807,30.070526],[121.227282,30.070086],[121.232196,30.071488],[121.235584,30.070461],[121.238507,30.071178],[121.244169,30.070265],[121.2476,30.068032],[121.254745,30.06456],[121.257696,30.065147],[121.257979,30.068097],[121.259263,30.068472],[121.271703,30.068668],[121.283437,30.072662],[121.286007,30.073085],[121.289805,30.0717],[121.292982,30.071472],[121.305407,30.071879],[121.307949,30.073395],[121.311267,30.07408],[121.323721,30.072384],[121.33263,30.069532],[121.340594,30.067673],[121.345847,30.069369],[121.351551,30.07007],[121.363256,30.062571],[121.369695,30.061837],[121.373832,30.063142],[121.379339,30.066695],[121.381796,30.06694],[121.387472,30.064381],[121.391779,30.065326],[121.392075,30.06888],[121.39497,30.071227],[121.396339,30.070575],[121.39809,30.066989],[121.400674,30.064527],[121.402566,30.064201],[121.406703,30.065734],[121.411801,30.069075],[121.412902,30.068472],[121.41341,30.064967],[121.412704,30.063207],[121.409443,30.062017],[121.404487,30.059066],[121.40162,30.055447],[121.401804,30.05217],[121.405899,30.047572],[121.415839,30.043805],[121.418804,30.044099],[121.423887,30.046235]]]]}}],uf={type:lf,features:hf},ff=""+new URL("../png/mapbg-C6yIwrm7.png",import.meta.url).href,cf={class:"chart_wrap"},df=g1({__name:"myChart6",props:{chartData:{default:()=>[]}},setup(e){const t=e,r=()=>{Ws.registerMap("ningbo",uf)},i={tooltip:{show:!0,textStyle:{fontSize:13,color:"#fff"},trigger:"item",backgroundColor:"rgba(0,0,0,0.3)",borderColor:"rgba(74,190,254,0.5)",borderWidth:2.5,formatter:n=>{let{data:a}=n;return`
            <div class="chart_tooltip">
              <h3>${a.name}</h3>
              <ul>
                <li>
                  <dl>
                    <dt>近30天健康度平均分:</dt>
                    <dd>${a.data1} 分</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>投诉数量:</dt>
                    <dd>${vi(a.data2)} 个</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>故障工单:</dt>
                    <dd>${vi(a.data3)} 个</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>采编未处理:</dt>
                    <dd>${vi(a.data4)} 个</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>其他关键信息:</dt>
                    <dd>${vi(a.data5)} 个</dd>
                  </dl>  
                </li>  
              </ul>
            </div>
          `}},series:[{type:"map3D",map:"ningbo",data:t.chartData,label:{show:!0,color:"#fff",fontSize:11,opacity:.8},itemStyle:{color:"#0b3eb3",borderWidth:.5,borderColor:"rgba(0, 178, 255, 1)"},emphasis:{label:{show:!0,color:"#fff",fontSize:15},itemStyle:{color:"#00ade0",borderWidth:10,borderColor:"#00ade0"}},groundPlane:{show:!1,color:"#0C264D"},shading:"realistic",realisticMaterial:{detailTexture:ff,textureTiling:1,roughness:.8,metalness:0},light:{main:{color:"#ffe",intensity:1.1,shadow:!0,shadowQuality:"high",alpha:25,beta:40},ambient:{color:"#fff",intensity:1}},viewControl:{projection:"orthographic",autoRotate:!0,autoRotateDirection:"ccw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:0,rotateSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",alpha:23,beta:40,minAlpha:5,maxAlpha:50,minBeta:-360,maxBeta:360,center:[-3,3,-1.5],animation:!0,animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",zoomSensitivity:.5}}]};return(n,a)=>(y1(),_1("div",cf,[x1(ks,{option:i,resize:!1,chartAuto:!0,onBeforeSetOption:r})]))}}),xf=T1(df,[["__scopeId","data-v-c7a11098"]]);export{xf as default};
