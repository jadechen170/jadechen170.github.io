(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[922],{6872:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(!1===(i=r?r.call(n,u,d,l):void 0)||void 0===i&&u!==d)return!1}return!0}},9:function(e,t,r){"use strict";r.d(t,{vJ:function(){return je},ZP:function(){return Le}});var n=r(8812),i=r(7294),a=r(6872),o=r.n(a);var s=function(e){function t(e,n,c,l,f){for(var h,p,m,g,k,S=0,C=0,x=0,A=0,E=0,T=0,L=m=h=0,z=0,B=0,D=0,F=0,M=c.length,G=M-1,$="",H="",Y="",U="";z<M;){if(p=c.charCodeAt(z),z===G&&0!==C+A+x+S&&(0!==C&&(p=47===C?10:47),A=x=S=0,M++,G++),0===C+A+x+S){if(z===G&&(0<B&&($=$.replace(d,"")),0<$.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:$+=c.charAt(z)}p=59}switch(p){case 123:for(h=($=$.trim()).charCodeAt(0),m=1,F=++z;z<M;){switch(p=c.charCodeAt(z)){case 123:m++;break;case 125:m--;break;case 47:switch(p=c.charCodeAt(z+1)){case 42:case 47:e:{for(L=z+1;L<G;++L)switch(c.charCodeAt(L)){case 47:if(42===p&&42===c.charCodeAt(L-1)&&z+2!==L){z=L+1;break e}break;case 10:if(47===p){z=L+1;break e}}z=L}}break;case 91:p++;case 40:p++;case 34:case 39:for(;z++<G&&c.charCodeAt(z)!==p;);}if(0===m)break;z++}switch(m=c.substring(F,z),0===h&&(h=($=$.replace(u,"").trim()).charCodeAt(0)),h){case 64:switch(0<B&&($=$.replace(d,"")),p=$.charCodeAt(1)){case 100:case 109:case 115:case 45:B=n;break;default:B=O}if(F=(m=t(n,B,m,p,f+1)).length,0<j&&(k=s(3,m,B=r(O,$,D),n,P,I,F,p,f,l),$=B.join(""),void 0!==k&&0===(F=(m=k.trim()).length)&&(p=0,m="")),0<F)switch(p){case 115:$=$.replace(w,o);case 100:case 109:case 45:m=$+"{"+m+"}";break;case 107:m=($=$.replace(v,"$1 $2"))+"{"+m+"}",m=1===_||2===_&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=$+m,112===l&&(H+=m,m="")}else m="";break;default:m=t(n,r(n,$,D),m,l,f+1)}Y+=m,m=D=B=L=h=0,$="",p=c.charCodeAt(++z);break;case 125:case 59:if(1<(F=($=(0<B?$.replace(d,""):$).trim()).length))switch(0===L&&(h=$.charCodeAt(0),45===h||96<h&&123>h)&&(F=($=$.replace(" ",":")).length),0<j&&void 0!==(k=s(1,$,n,e,P,I,H.length,l,f,l))&&0===(F=($=k.trim()).length)&&($="\0\0"),h=$.charCodeAt(0),p=$.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){U+=$+c.charAt(z);break}default:58!==$.charCodeAt(F-1)&&(H+=i($,h,p,$.charCodeAt(2)))}D=B=L=h=0,$="",p=c.charCodeAt(++z)}}switch(p){case 13:case 10:47===C?C=0:0===1+h&&107!==l&&0<$.length&&(B=1,$+="\0"),0<j*N&&s(0,$,n,e,P,I,H.length,l,f,l),I=1,P++;break;case 59:case 125:if(0===C+A+x+S){I++;break}default:switch(I++,g=c.charAt(z),p){case 9:case 32:if(0===A+S+C)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===A+C+S&&(B=D=1,g="\f"+g);break;case 108:if(0===A+C+S+R&&0<L)switch(z-L){case 2:112===E&&58===c.charCodeAt(z-3)&&(R=E);case 8:111===T&&(R=T)}break;case 58:0===A+C+S&&(L=z);break;case 44:0===C+x+A+S&&(B=1,g+="\r");break;case 34:case 39:0===C&&(A=A===p?0:0===A?p:A);break;case 91:0===A+C+x&&S++;break;case 93:0===A+C+x&&S--;break;case 41:0===A+C+S&&x--;break;case 40:if(0===A+C+S){if(0===h)switch(2*E+3*T){case 533:break;default:h=1}x++}break;case 64:0===C+x+A+S+L+m&&(m=1);break;case 42:case 47:if(!(0<A+S+x))switch(C){case 0:switch(2*p+3*c.charCodeAt(z+1)){case 235:C=47;break;case 220:F=z,C=42}break;case 42:47===p&&42===E&&F+2!==z&&(33===c.charCodeAt(F+2)&&(H+=c.substring(F,z+1)),g="",C=0)}}0===C&&($+=g)}T=E,E=p,z++}if(0<(F=H.length)){if(B=n,0<j&&(void 0!==(k=s(2,H,B,e,P,I,F,l,f,l))&&0===(H=k).length))return U+H+Y;if(H=B.join(",")+"{"+H+"}",0!=_*R){switch(2!==_||a(H,2)||(R=0),R){case 111:H=H.replace(y,":-moz-$1")+H;break;case 112:H=H.replace(b,"::-webkit-input-$1")+H.replace(b,"::-moz-$1")+H.replace(b,":-ms-input-$1")+H}R=0}}return U+H+Y}function r(e,t,r){var i=t.trim().split(m);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===_||2===_&&a(c,1)?"-webkit-"+c+c:c}if(0===_||2===_&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return h.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(k,"tb");break;case 232:c=o.replace(k,"tb-rl");break;case 220:c=o.replace(k,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(C,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(C,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),L(2!==t?n:n.replace(x,"$1"),r,t)}function o(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(S," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,a,o,s,c,u){for(var d,f=0,h=t;f<j;++f)switch(d=T[f].call(l,e,h,r,n,i,a,o,s,c,u)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function c(e){return void 0!==(e=e.prefix)&&(L=null,e?"function"!=typeof e?_=1:(_=2,L=e):_=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<j){var i=s(-1,r,n,n,P,I,0,0,0,0);void 0!==i&&"string"==typeof i&&(r=i)}var a=t(O,n,r,0,0);return 0<j&&(void 0!==(i=s(-2,a,n,n,P,I,a.length,0,0,0))&&(a=i)),"",R=0,I=P=1,a}var u=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,y=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,C=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,I=1,P=1,R=0,_=1,O=[],T=[],j=0,L=null,N=0;return l.use=function e(t){switch(t){case void 0:case null:j=T.length=0;break;default:if("function"==typeof t)T[j++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else N=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=r(5706),f=r.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,n.typeOf)(e)},g=Object.freeze([]),v=Object.freeze({});function b(e){return"function"==typeof e}function y(e){return e.displayName||e.name||"Component"}function k(e){return e&&"string"==typeof e.styledComponentId}var w="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",S="undefined"!=typeof window&&"HTMLElement"in window,C=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),x={};function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var E=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&A(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),I=new Map,P=new Map,R=1,_=function(e){if(I.has(e))return I.get(e);for(;P.has(R);)R++;var t=R++;return I.set(e,t),P.set(t,e),t},O=function(e){return P.get(e)},T=function(e,t){I.set(e,t),P.set(t,e)},j="style["+w+'][data-styled-version="5.2.3"]',L=new RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),N=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},z=function(e,t){for(var r=t.innerHTML.split("/*!sc*/\n"),n=[],i=0,a=r.length;i<a;i++){var o=r[i].trim();if(o){var s=o.match(L);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(T(l,c),N(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(o)}}},B=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},D=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(w))return n}}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(w,"active"),n.setAttribute("data-styled-version","5.2.3");var o=B();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},F=function(){function e(e){var t=this.element=D(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}A(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),M=function(){function e(e){var t=this.element=D(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),G=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),$=S,H={isServer:!S,useCSSOMInjection:!C},Y=function(){function e(e,t,r){void 0===e&&(e=v),void 0===t&&(t={}),this.options=h({},H,{},e),this.gs=t,this.names=new Map(r),!this.options.isServer&&S&&$&&($=!1,function(e){for(var t=document.querySelectorAll(j),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(w)&&(z(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return _(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(h({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new G(i):n?new F(i):new M(i),new E(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(_(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(_(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(_(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var a=O(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(void 0!==o&&0!==s.length){var c=w+".g"+i+'[id="'+a+'"]',l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),U=/(a)(d)/gi,Z=function(e){return String.fromCharCode(e+(e>25?39:97))};function W(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Z(t%52)+r;return(Z(t%52)+r).replace(U,"$1-$2")}var q=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},V=function(e){return q(5381,e)};function X(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(b(r)&&!k(r))return!1}return!0}var J=V("5.2.3"),Q=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&X(e),this.componentId=t,this.baseHash=q(J,t),this.baseStyle=r,Y.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var a=ge(this.rules,e,t,r).join(""),o=W(q(this.baseHash,a.length)>>>0);if(!t.hasNameForId(n,o)){var s=r(a,"."+o,void 0,n);t.insertRules(n,o,s)}i.push(o),this.staticRulesId=o}else{for(var c=this.rules.length,l=q(this.baseHash,r.hash),u="",d=0;d<c;d++){var f=this.rules[d];if("string"==typeof f)u+=f;else if(f){var h=ge(f,e,t,r),p=Array.isArray(h)?h.join(""):h;l=q(l,p+d),u+=p}}if(u){var m=W(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}i.push(m)}}return i.join(" ")},e}(),K=/^\s*\/\/.*$/gm,ee=[":","[",".","#"];function te(e){var t,r,n,i,a=void 0===e?v:e,o=a.options,c=void 0===o?v:o,l=a.plugins,u=void 0===l?g:l,d=new s(c),f=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,a,o,s,c,l,u,d){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===d?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),p=function(e,n,a){return 0===n&&-1!==ee.indexOf(a[r.length])||a.match(i)?e:"."+t};function m(e,a,o,s){void 0===s&&(s="&");var c=e.replace(K,""),l=a&&o?o+" "+a+" { "+c+" }":c;return t=s,r=a,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),d(o||!a?"":a,l)}return d.use([].concat(u,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,p))},h,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||A(15),q(e,t.name)}),5381).toString():"",m}var re=i.createContext(),ne=(re.Consumer,i.createContext()),ie=(ne.Consumer,new Y),ae=te();function oe(){return(0,i.useContext)(re)||ie}function se(){return(0,i.useContext)(ne)||ae}function ce(e){var t=(0,i.useState)(e.stylisPlugins),r=t[0],n=t[1],a=oe(),s=(0,i.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=(0,i.useMemo)((function(){return te({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,i.useEffect)((function(){o()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]),i.createElement(re.Provider,{value:s},i.createElement(ne.Provider,{value:c},e.children))}var le=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=ae);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return A(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ae),this.name+e.hash},e}(),ue=/([A-Z])/,de=/([A-Z])/g,fe=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function pe(e){return ue.test(e)?e.replace(de,he).replace(fe,"-ms-"):e}var me=function(e){return null==e||!1===e||""===e};function ge(e,t,r,n){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)""!==(i=ge(e[o],t,r,n))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return me(e)?"":k(e)?"."+e.styledComponentId:b(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:ge(e(t),t,r,n):e instanceof le?r?(e.inject(r,n),e.getName(n)):e:m(e)?function e(t,r){var n,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!me(t[o])&&(m(t[o])?a.push.apply(a,e(t[o],o)):b(t[o])?a.push(pe(o)+":",t[o],";"):a.push(pe(o)+": "+(n=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in c?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(a,["}"]):a}(e):e.toString();var l}function ve(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return b(e)||m(e)?ge(p(g,[e].concat(r))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ge(p(e,r))}new Set;var be=function(e,t,r){return void 0===r&&(r=v),e.theme!==r.theme&&e.theme||t||r.theme},ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function we(e){return e.replace(ye,"-").replace(ke,"")}var Se=function(e){return W(V(e)>>>0)};function Ce(e){return"string"==typeof e&&!0}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ae=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ee(e,t,r){var n=e[r];xe(t)&&xe(n)?Ie(n,t):e[r]=t}function Ie(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];if(xe(o))for(var s in o)Ae(s)&&Ee(e,o[s],s)}return e}var Pe=i.createContext();Pe.Consumer;var Re={};function _e(e,t,r){var n=k(e),a=!Ce(e),o=t.attrs,s=void 0===o?g:o,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":we(e);Re[r]=(Re[r]||0)+1;var n=r+"-"+Se("5.2.3"+r+Re[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return Ce(e)?"styled."+e:"Styled("+y(e)+")"}(e):d,m=t.displayName&&t.componentId?we(t.displayName)+"-"+t.componentId:t.componentId||l,w=n&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,S=t.shouldForwardProp;n&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(r,n){return e.shouldForwardProp(r,n)&&t.shouldForwardProp(r,n)}:e.shouldForwardProp);var C,x=new Q(r,m,n?e.componentStyle:void 0),A=x.isStatic&&0===s.length,E=function(e,t){return function(e,t,r,n){var a=e.attrs,o=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,d=e.styledComponentId,f=e.target,p=function(e,t,r){void 0===e&&(e=v);var n=h({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,a,o=e;for(t in b(o)&&(o=o(n)),o)n[t]=i[t]="className"===t?(r=i[t],a=o[t],r&&a?r+" "+a:r||a):o[t]})),[n,i]}(be(t,(0,i.useContext)(Pe),s)||v,t,a),m=p[0],g=p[1],y=function(e,t,r,n){var i=oe(),a=se();return t?e.generateAndInjectStyles(v,i,a):e.generateAndInjectStyles(r,i,a)}(o,n,m),k=r,w=g.$as||t.$as||g.as||t.as||f,S=Ce(w),C=g!==t?h({},t,{},g):t,x={};for(var A in C)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?x.as=C[A]:(l?l(A,u):!S||u(A))&&(x[A]=C[A]));return t.style&&g.style!==t.style&&(x.style=h({},t.style,{},g.style)),x.className=Array.prototype.concat(c,d,y!==d?y:null,t.className,g.className).filter(Boolean).join(" "),x.ref=k,(0,i.createElement)(w,x)}(C,e,t,A)};return E.displayName=p,(C=i.forwardRef(E)).attrs=w,C.componentStyle=x,C.displayName=p,C.shouldForwardProp=S,C.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):g,C.styledComponentId=m,C.target=n?e.target:e,C.withComponent=function(e){var n=t.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["componentId"]),a=n&&n+"-"+(Ce(e)?e:we(y(e)));return _e(e,h({},i,{attrs:w,componentId:a}),r)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?Ie({},e.defaultProps,t):t}}),C.toString=function(){return"."+C.styledComponentId},a&&f()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Oe=function(e){return function e(t,r,i){if(void 0===i&&(i=v),!(0,n.isValidElementType)(r))return A(1,String(r));var a=function(){return t(r,i,ve.apply(void 0,arguments))};return a.withConfig=function(n){return e(t,r,h({},i,{},n))},a.attrs=function(n){return e(t,r,h({},i,{attrs:Array.prototype.concat(i.attrs,n).filter(Boolean)}))},a}(_e,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Oe[e]=Oe(e)}));var Te=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=X(e),Y.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var i=n(ge(this.rules,t,r,n).join(""),""),a=this.componentId+e;r.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&Y.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function je(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=ve.apply(void 0,[e].concat(r)),o="sc-global-"+Se(JSON.stringify(a)),s=new Te(a,o);function c(e){var t=oe(),r=se(),n=(0,i.useContext)(Pe),a=(0,i.useRef)(t.allocateGSInstance(o)).current;return(0,i.useLayoutEffect)((function(){return l(a,e,t,n,r),function(){return s.removeStyles(a,t)}}),[a,e,t,n,r]),null}function l(e,t,r,n,i){if(s.isStatic)s.renderStyles(e,x,r,i);else{var a=h({},t,{theme:be(t,n,c.defaultProps)});s.renderStyles(e,a,r,i)}}return i.memo(c)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=B();return"<style "+[r&&'nonce="'+r+'"',w+'="true"','data-styled-version="5.2.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?A(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return A(2);var r=((t={})[w]="",t["data-styled-version"]="5.2.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=B();return n&&(r.nonce=n),[i.createElement("style",h({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Y({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?A(2):i.createElement(ce,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return A(3)}}();var Le=Oe},5762:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var n=r(7294),i=r(5444),a=r(9),o=r(4449),s=r(5697),c=r.n(s),l=a.ZP.div.withConfig({displayName:"custom-link__LinkContainer",componentId:"v464h3-0"})(["width:100%;vertical-align:middle;"]),u=(0,a.ZP)(i.Link).withConfig({displayName:"custom-link__Label",componentId:"v464h3-1"})(["padding:5px;position:relative;color:",";font-size:",";text-decoration:none;&:hover{color:",';}&::after{content:"";position:absolute;width:100%;height:2px;bottom:0;left:0;color:',";background-color:",';transform:scaleX(0);transform-origin:100% 50%;transition:transform 0.5s ease-in-out 0s;}&&:hover::after{color:"black" !important;transform:scaleX(1);transform-origin:0% 0%;}'],(function(e){return e.linkcolor||"#000000"}),(function(e){return e.fontSize}),(function(e){return e.linkcolor||"#000000"}),(function(e){return e.linkcolor||"#000000"}),(function(e){return e.linkcolor||"#000000"})),d=function(e){var t=e.linkcolor;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 -2 12 27"},n.createElement("path",{id:"arrow","data-name":"arrow",d:"M13,0,26,11H0Z",transform:"translate(11) rotate(90)",fill:t}))},f=n.forwardRef((function(e,t){var r=e.to,i=e.displayText,a=e.linkcolor,o=e.fontSize,s=e.arrow,c=e.clickHandler;return n.createElement(l,null,n.createElement(u,{ref:t,to:r,linkcolor:a,fontSize:o,onClick:c},i),s?n.createElement(d,{linkcolor:a}):null)}));d.defaultProps={linkcolor:"black"},f.propTypes={to:c().string,displayText:c().string.isRequired,linkcolor:c().string,fontSize:c().string},f.defaultProps={linkcolor:"black",fontSize:"1rem"};var h=f,p=a.ZP.div.withConfig({displayName:"NavBar__Container",componentId:"sc-18l97vj-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;text-align:center;background:",";"],o.r.bannerBlue),m=a.ZP.p.withConfig({displayName:"NavBar__Text",componentId:"sc-18l97vj-1"})(["color:",";padding:0.5rem 1rem;&:first-child{text-decoration:underline;width:100%;padding:2.5rem 0 0 0;}&:not-first-child{flex:1;}@media (min-width:","){padding:2rem 3rem;&:first-child{width:auto;padding:2rem 3rem;}&:not-first-child{flex:row;}}"],o.r.navBlue,o.r.tablet),g=function(e){var t=e.menuLinks.map((function(e){return n.createElement(m,null,n.createElement(h,{to:e.link,displayText:e.title,linkcolor:o.r.navBlue}))}));return n.createElement(p,null,t)},v=a.ZP.div.withConfig({displayName:"Footer__Container",componentId:"fuvo2-0"})(["width:100%;background-color:",";display:flex;padding:3rem 0;flex-direction:column;@media (min-width:","){flex-direction:row;}"],o.r.footerBlue,o.r.mobile),b=a.ZP.div.withConfig({displayName:"Footer__Name",componentId:"fuvo2-1"})(["flex-basis:45%;color:",";padding-left:3rem;h3{margin:0;}p{line-height:0.1rem;}"],o.r.lightBlue),y=a.ZP.div.withConfig({displayName:"Footer__Links",componentId:"fuvo2-2"})(["flex-basis:30%;display:flex;flex-direction:column;padding:2rem 0 0 3rem;a{color:",";text-decoration:none;padding-bottom:1rem;transition:0.1s ease-in-out;}a:hover{color:",";}@media (min-width:","){padding:0;}"],o.r.lightBlue,o.r.bannerBlue,o.r.mobile),k=function(){return n.createElement(v,null,n.createElement(b,null,n.createElement("h3",null,"Jade Chen"),n.createElement("p",null,"Designed and built by me.")),n.createElement(y,null,n.createElement("a",{href:"mailto:jade.chen@columbia.edu","aria-label":"email"},"Email me. "),n.createElement("a",{href:"https://www.linkedin.com/in/jade-chen-321a18173/","aria-label":"LinkedIn"},"Connect on LinkedIn."),n.createElement("a",{href:"https://github.com/jadechen170","aria-label":"Github"},"View my Github."),n.createElement("a",{href:"https://drive.google.com/file/d/1ba8YDHD5NvtUvttZQXGarFcbnhEkV11o/view?usp=sharing","aria-label":"Resume"},"Download my resume.")),n.createElement(y,null,n.createElement(i.Link,{to:"/"},"Home."),n.createElement(i.Link,{to:"/projects/"},"Projects."),n.createElement(i.Link,{to:"/other-work/"},"Other work."),n.createElement(i.Link,{to:"/about/"},"About.")))},w=a.ZP.div.withConfig({displayName:"layout__Container",componentId:"sc-9if3dg-0"})(["margin:0;padding:0 0 0;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"]),S=function(e){var t=e.children,r=(0,i.useStaticQuery)("2215772561");return n.createElement(n.Fragment,null,n.createElement(o.n,null),n.createElement(g,{menuLinks:r.site.siteMetadata.menuLinks}),n.createElement(w,null,n.createElement("main",null,t)),n.createElement(k,null))}},4449:function(e,t,r){"use strict";r.d(t,{n:function(){return d},r:function(){return u}});var n,i,a,o=r(9),s=r.p+"static/Lora-Regular-6b74b8d64b8efe48b898f6e3c3685a05.ttf",c=r.p+"static/Lora-Italic-9b8268a3a2e379e5602b76a11f394200.ttf",l=r.p+"static/Lora-SemiBold-dfac657fb2924d22a4ab4c2804057c52.ttf",u={navBlue:"#3E4E5B",bannerBlue:"#B9CADA",lightBlue:"#ECF3F9",footerBlue:"#394855",magenta:"#814F67",white:"#ffffff",textBlue:"#1A2A36",phone:"480px",mobile:"768px",tablet:"992px",desktop:"1200px",largeDesktop:"1440px"},d=(0,o.vJ)(n||(i=["\n    @font-face {\n        font-family: 'Lora Regular';\n        font-style: normal;\n        font-weight: normal;\n        src: url(",") format('ttf');\n    }\n\n\n    @font-face {\n        font-family: 'Lora Italic';\n        font-style: normal;\n        font-weight: normal;\n        src: url(",") format('ttf');\n    }\n\n\n    @font-face {\n        font-family: 'Lora Semibold';\n        font-style: normal;\n        font-weight: normal;\n        src: url(",") format('ttf');\n    }\n\n    * {\n        user-select: none;\n        outline: none;\n    }\n\n    html {\n        scroll-behavior: smooth;\n    }\n\n\n    body {\n        font-family: 'Lora Regular';\n        margin: 0;\n        padding: 0;\n        color: ",";\n\n        a:hover, \n        a:focus {\n            text-decoration: none;\n            \n        }\n    }\n\n    p {\n        font-size: 1.2rem;\n    }\n\n    a {\n        font-size: 1.2rem;\n    }\n\n    a:hover {\n        color: inherit;\n        text-decoration: none;\n    }\n\n  \n"],a||(a=i.slice(0)),i.raw=a,n=i),s,c,l,u.textBlue)}}]);
//# sourceMappingURL=df02015cc8c56a27a15e27c07f9f35a4bfc05882-f0b3b66b40dcebec9180.js.map