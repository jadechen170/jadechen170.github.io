(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[853],{1496:function(e,t,i){"use strict";var a=i(5318);t.Z=void 0;var r,n=a(i(1506)),o=a(i(5354)),s=a(i(7316)),d=a(i(7154)),l=a(i(7294)),c=a(i(5697)),u=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=D([].concat(t.fluid))),t.fixed&&(t.fixed=D([].concat(t.fixed))),t},g=function(e){var t=e.media;return!!t&&(h&&!!window.matchMedia(t).matches)},M=function(e){var t=e.fluid,i=e.fixed,a=I(t||i||[]);return a&&a.src},I=function(e){if(h&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(g);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},f=Object.create({}),m=function(e){var t=u(e),i=M(t);return f[i]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,j=h&&window.IntersectionObserver,y=new WeakMap;function N(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),i&&l.default.createElement("source",{media:r,srcSet:i,sizes:n}))}))}function D(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function z(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function b(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function S(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),y.set(e,t)),function(){i.unobserve(e),y.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+l+o+s+i+a+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=l.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(x,(0,d.default)({ref:t,src:i},n,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,r(a),s):s})),x=l.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,g=e.draggable,M=e.ariaHidden,I=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":M,sizes:i,srcSet:a,src:r},I,{onLoad:o,onError:c,ref:t,loading:u,draggable:g,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=h&&m(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!p&&j&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||h&&(p||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=l.default.createRef(),i.placeholderRef=t.placeholderRef||l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:h}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),(i=M(t))&&(f[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,g=void 0===c?{}:c,M=e.placeholderClassName,f=e.fluid,m=e.fixed,p=e.backgroundColor,h=e.durationFadeIn,j=e.Tag,y=e.itemProp,D=e.loading,S=e.draggable,L=f||m;if(!L)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,E=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:O?1:0,transition:E?"opacity "+h+"ms":"none"},s),C="boolean"==typeof p?"lightgray":p,k={transitionDelay:h+"ms"},v=(0,d.default)({opacity:this.state.imgLoaded?0:1},E&&k,s,g),U={title:t,alt:this.state.isVisible?"":i,style:v,className:M,itemProp:y},Q=this.state.isHydrated?I(L):L[0];if(f)return l.default.createElement(j,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:Q.maxWidth?Q.maxWidth+"px":null,maxHeight:Q.maxHeight?Q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},l.default.createElement(j,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),C&&l.default.createElement(j,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},E&&k)}),Q.base64&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:Q.base64,spreadProps:U,imageVariants:L,generateSources:b}),Q.tracedSVG&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:Q.tracedSVG,spreadProps:U,imageVariants:L,generateSources:z}),this.state.isVisible&&l.default.createElement("picture",null,N(L),l.default.createElement(x,{alt:i,title:t,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:D,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,d.default)({alt:i,title:t,loading:D},Q,{imageVariants:L}))}}));if(m){var Y=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},n);return"inherit"===n.display&&delete Y.display,l.default.createElement(j,{className:(a||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},C&&l.default.createElement(j,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:Q.width,opacity:this.state.imgLoaded?0:1,height:Q.height},E&&k)}),Q.base64&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:Q.base64,spreadProps:U,imageVariants:L,generateSources:b}),Q.tracedSVG&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:Q.tracedSVG,spreadProps:U,imageVariants:L,generateSources:z}),this.state.isVisible&&l.default.createElement("picture",null,N(L),l.default.createElement(x,{alt:i,title:t,width:Q.width,height:Q.height,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:D,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,d.default)({alt:i,title:t,loading:D},Q,{imageVariants:L}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,i,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[i]=e,r),t,"prop",a)}}O.propTypes={resolutions:E,sizes:T,fixed:C(c.default.oneOfType([E,c.default.arrayOf(E)])),fluid:C(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=O;t.Z=k},2118:function(e,t,i){"use strict";var a=i(7294),r=i(9),n=i(4449),o=r.ZP.h2.withConfig({displayName:"SubHeading__Text",componentId:"sc-14bc3y9-0"})(["font-size:",";padding-top:",";text-align:",";"],(function(e){return e.title?"2.5rem":"1.25rem"}),(function(e){return e.title?"2rem":"none"}),(function(e){return e.title?"center":"left"})),s=r.ZP.span.withConfig({displayName:"SubHeading__Dot",componentId:"sc-14bc3y9-1"})(["color:",";"],n.r.magenta);t.Z=function(e){var t=e.text,i=e.title;return a.createElement(o,{title:i},t,a.createElement(s,null,"."))}},4935:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var a=i(7294),r=i(9),n=i(2413),o=i(5444),s=i(1496),d=i(4449),l=i(2118),c=r.ZP.div.withConfig({displayName:"ProjectItem__CenterWrapper",componentId:"sc-1vk885-0"})(["width:90%;margin:auto;padding-bottom:6rem;@media (min-width:","){width:80%;}@media (min-width:","){width:60%;}"],d.r.mobile,d.r.largeDesktop),u=r.ZP.div.withConfig({displayName:"ProjectItem__Container",componentId:"sc-1vk885-1"})(["margin:3rem 0 0 0;padding:2rem;border-radius:3rem;background-color:",";display:flex;flex-direction:column;@media (min-width:","){flex-direction:row;padding:4rem;}"],d.r.lightBlue,d.r.mobile),g=r.ZP.div.withConfig({displayName:"ProjectItem__TextContainer",componentId:"sc-1vk885-2"})(["width:100%;display:flex;flex-direction:column;justify-content:center;@media (min-width:","){order:1;width:",";margin-right:",";}@media (min-width:","){width:",";}"],d.r.mobile,(function(e){return e.hasImage?"50%":"100%"}),(function(e){return e.hasImage?"2rem":"0"}),d.r.largeDesktop,(function(e){return e.hasImage?"80%":"100%"})),M=r.ZP.div.withConfig({displayName:"ProjectItem__IconContainer",componentId:"sc-1vk885-3"})(["display:flex;flex-direction:row;padding-top:0.5rem;"]),I=r.ZP.a.withConfig({displayName:"ProjectItem__Icon",componentId:"sc-1vk885-4"})(["padding-right:1rem;padding-top:1.5rem;display:",";"],(function(e){return e.exists?"block":"none"})),f=r.ZP.p.withConfig({displayName:"ProjectItem__Stack",componentId:"sc-1vk885-5"})(["color:",";"],d.r.magenta),m=r.ZP.div.withConfig({displayName:"ProjectItem__ImgContainer",componentId:"sc-1vk885-6"})(["width:100%;margin:1rem auto;display:",";@media (min-width:","){order:2;width:50%;margin:auto;}"],(function(e){return e.hasImage?"block":"none"}),d.r.mobile),p=[{title:"Music Visualization",description:"Developed a tool that creates an animated album cover for a song. After analyzing audio frequencies and amplitude levels, I selected multiple key elements (beats, middle frequency ranges, etc.) to represent as visuals  in order to create a comprehensive and representative visualization of the song.",stack:"javascript, p5.js, html/css",github:"https://github.com/jadechen170/animated-album-cover",link:"https://editor.p5js.org/jadechen170/present/7ejR6RY1o"},{title:"Ray Tracer",description:"Implemented a Monte Carlo rendering ray tracer using global illumination and a Russian Roulette termination algorithm. Also includes algorithms for direct illumination and ambient occlusion renderers.",stack:"OpenGL, Java",github:"https://github.com/jadechen170/ray_tracer"},{title:"Eden Chen Music",description:"Originally coded in vanilla HTML / JavaScript /CSS, this website had poor performance and minimal optimization. I redid the whole thing from scratch on ReactJS and Gatsby, so that I could optimize image loading and make reusable components for maintainability. I also designed the website.",stack:"ReactJS, Gatsby, Git",github:"https://github.com/jadechen170/edenchenmusic.github.io",link:"https://edenchenmusic.com"},{title:"GLSL Shaders",description:"Implemented Gourand and Phong shaders, as well as a shader that maps textures from  image files onto a mesh, and a shader that uses RGB color channels from a normal map to give surfaces the appearance of being textured. I also implemented a CEL (toon) shader, using non-photorealistic rendering to make a 3D object appear flat.",stack:"OpenGL, Java",github:"https://github.com/jadechen170/glsl_shaders"},{title:"Web Development",description:"I coded a variety of websites, and my work includes building components as an intern for Gigfinesse, and designing and coding the website for the Intercollegiate Chamber Music Festival (which I also lead!). Of course, I also designed and created this website over multiple iterations (available on Github).",stack:"Python, Django, ReactJS, HTML/CSS/JavaScript",github:"https://github.com/jadechen170/icmfnyc.github.io",link:"https://icmfnyc.github.io/"},{title:"Full Stack Intern at Shoptaki",description:"I led a team of 7 interns in developing a brand new website for Shoptaki, a start-up fintech company. Given a design to work with, I focused on coding to improve performance and user interaction. Multiple components are animated with ThreeJS. For example, the globe on the homepage can be dragged to spin.",stack:"ReactJS, Gatsby, Git",link:"https://www.shoptaki.com/"},{title:"Online Shopping Database",description:"Implemented a database design on PostgreSQL and coded a simple front end web application that manipulates the database through updates and queries. This application is modeled after real-world online shopping websites, and allows for typical functionalities such as checking out an order and viewing previous purchases.",stack:"PostgreSQL, Python, Flask, Google Cloud",github:"https://github.com/jadechen170/coms4111-dbproj",link:"https://youtu.be/_K_QiEeWp18"}],h=function(){var e,t=(0,o.useStaticQuery)("147255705").allFile.edges.map((function(e){return a.createElement(s.Z,{style:{width:"100%"},fluid:e.node.childImageSharp.fluid,key:e.node.id,alt:e.node.name})})),i=(e=t,p.map((function(t,i){return[t,e[i]]}))).map((function(e){return a.createElement(u,{hasImage:e[1]},a.createElement(m,{hasImage:e[1]},e[1]),a.createElement(g,{hasImage:e[1]},a.createElement(l.Z,{text:e[0].title}),a.createElement("p",null,e[0].description),a.createElement(M,null,a.createElement(I,{href:e[0].github,exists:e[0].github},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAwQzYuNzEyNSAwIDAgNi43MTI1IDAgMTVDMCAyMS42Mzc1IDQuMjkzNzUgMjcuMjQzNyAxMC4yNTYzIDI5LjIzMTNDMTEuMDA2MyAyOS4zNjI1IDExLjI4NzUgMjguOTEyNSAxMS4yODc1IDI4LjUxODhDMTEuMjg3NSAyOC4xNjI1IDExLjI2ODggMjYuOTgxMyAxMS4yNjg4IDI1LjcyNUM3LjUgMjYuNDE4OCA2LjUyNSAyNC44MDYyIDYuMjI1IDIzLjk2MjVDNi4wNTYyNSAyMy41MzEyIDUuMzI1IDIyLjIgNC42ODc1IDIxLjg0MzhDNC4xNjI1IDIxLjU2MjUgMy40MTI1IDIwLjg2ODcgNC42Njg3NSAyMC44NUM1Ljg1IDIwLjgzMTMgNi42OTM3NSAyMS45Mzc1IDYuOTc1IDIyLjM4NzVDOC4zMjUgMjQuNjU2MiAxMC40ODEyIDI0LjAxODcgMTEuMzQzOCAyMy42MjVDMTEuNDc1IDIyLjY1IDExLjg2ODggMjEuOTkzNyAxMi4zIDIxLjYxODdDOC45NjI1IDIxLjI0MzcgNS40NzUgMTkuOTUgNS40NzUgMTQuMjEyNUM1LjQ3NSAxMi41ODEzIDYuMDU2MjUgMTEuMjMxMyA3LjAxMjUgMTAuMTgxM0M2Ljg2MjUgOS44MDYyNSA2LjMzNzUgOC4yNjg3NSA3LjE2MjUgNi4yMDYyNUM3LjE2MjUgNi4yMDYyNSA4LjQxODc1IDUuODEyNSAxMS4yODc1IDcuNzQzNzVDMTIuNDg3NSA3LjQwNjI1IDEzLjc2MjUgNy4yMzc1IDE1LjAzNzUgNy4yMzc1QzE2LjMxMjUgNy4yMzc1IDE3LjU4NzUgNy40MDYyNSAxOC43ODc1IDcuNzQzNzVDMjEuNjU2MiA1Ljc5Mzc1IDIyLjkxMjUgNi4yMDYyNSAyMi45MTI1IDYuMjA2MjVDMjMuNzM3NSA4LjI2ODc1IDIzLjIxMjUgOS44MDYyNSAyMy4wNjI1IDEwLjE4MTNDMjQuMDE4OCAxMS4yMzEzIDI0LjYgMTIuNTYyNSAyNC42IDE0LjIxMjVDMjQuNiAxOS45Njg4IDIxLjA5MzggMjEuMjQzNyAxNy43NTYzIDIxLjYxODdDMTguMyAyMi4wODc1IDE4Ljc2ODggMjIuOTg3NSAxOC43Njg4IDI0LjM5MzdDMTguNzY4OCAyNi40IDE4Ljc1IDI4LjAxMjUgMTguNzUgMjguNTE4OEMxOC43NSAyOC45MTI1IDE5LjAzMTIgMjkuMzgxMyAxOS43ODEyIDI5LjIzMTNDMjIuNzU5IDI4LjIyNTkgMjUuMzQ2NSAyNi4zMTIxIDI3LjE3OTYgMjMuNzU5MkMyOS4wMTI3IDIxLjIwNjMgMjkuOTk5MSAxOC4xNDI5IDMwIDE1QzMwIDYuNzEyNSAyMy4yODc1IDAgMTUgMFoiIGZpbGw9IiM4MTRGNjciLz4KPC9zdmc+Cg==",alt:"Github Icon"})),a.createElement(I,{href:e[0].link,exists:e[0].link},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yNS4zMTI1IDE4Ljc1SDIzLjQzNzVDMjMuMTg4OSAxOC43NSAyMi45NTA0IDE4Ljg0ODggMjIuNzc0NiAxOS4wMjQ2QzIyLjU5ODggMTkuMjAwNCAyMi41IDE5LjQzODkgMjIuNSAxOS42ODc1VjI2LjI1SDMuNzVWNy41SDEyLjE4NzVDMTIuNDM2MSA3LjUgMTIuNjc0NiA3LjQwMTIzIDEyLjg1MDQgNy4yMjU0MUMxMy4wMjYyIDcuMDQ5NiAxMy4xMjUgNi44MTExNCAxMy4xMjUgNi41NjI1VjQuNjg3NUMxMy4xMjUgNC40Mzg4NiAxMy4wMjYyIDQuMjAwNCAxMi44NTA0IDQuMDI0NTlDMTIuNjc0NiAzLjg0ODc3IDEyLjQzNjEgMy43NSAxMi4xODc1IDMuNzVIMi44MTI1QzIuMDY2NTggMy43NSAxLjM1MTIxIDQuMDQ2MzIgMC44MjM3NjIgNC41NzM3NkMwLjI5NjMxNiA1LjEwMTIxIDAgNS44MTY1OCAwIDYuNTYyNUwwIDI3LjE4NzVDMCAyNy45MzM0IDAuMjk2MzE2IDI4LjY0ODggMC44MjM3NjIgMjkuMTc2MkMxLjM1MTIxIDI5LjcwMzcgMi4wNjY1OCAzMCAyLjgxMjUgMzBIMjMuNDM3NUMyNC4xODM0IDMwIDI0Ljg5ODggMjkuNzAzNyAyNS40MjYyIDI5LjE3NjJDMjUuOTUzNyAyOC42NDg4IDI2LjI1IDI3LjkzMzQgMjYuMjUgMjcuMTg3NVYxOS42ODc1QzI2LjI1IDE5LjQzODkgMjYuMTUxMiAxOS4yMDA0IDI1Ljk3NTQgMTkuMDI0NkMyNS43OTk2IDE4Ljg0ODggMjUuNTYxMSAxOC43NSAyNS4zMTI1IDE4Ljc1Wk0yOC41OTM4IDBIMjEuMDkzOEMxOS44NDE2IDAgMTkuMjE1OCAxLjUxODE2IDIwLjA5NzcgMi40MDIzNEwyMi4xOTEyIDQuNDk1OUw3LjkxMDE2IDE4Ljc3MTdDNy43NzkwNiAxOC45MDIzIDcuNjc1MDQgMTkuMDU3NiA3LjYwNDA2IDE5LjIyODVDNy41MzMwOCAxOS4zOTk0IDcuNDk2NTUgMTkuNTgyNyA3LjQ5NjU1IDE5Ljc2NzhDNy40OTY1NSAxOS45NTI5IDcuNTMzMDggMjAuMTM2MSA3LjYwNDA2IDIwLjMwN0M3LjY3NTA0IDIwLjQ3OCA3Ljc3OTA2IDIwLjYzMzIgNy45MTAxNiAyMC43NjM5TDkuMjM4NDggMjIuMDg5OEM5LjM2OTEyIDIyLjIyMDkgOS41MjQzNiAyMi4zMjUgOS42OTUyOSAyMi4zOTU5QzkuODY2MjMgMjIuNDY2OSAxMC4wNDk1IDIyLjUwMzUgMTAuMjM0NiAyMi41MDM1QzEwLjQxOTcgMjIuNTAzNSAxMC42MDI5IDIyLjQ2NjkgMTAuNzczOCAyMi4zOTU5QzEwLjk0NDggMjIuMzI1IDExLjEgMjIuMjIwOSAxMS4yMzA3IDIyLjA4OThMMjUuNTA0NyA3LjgxMTcyTDI3LjU5NzcgOS45MDIzNEMyOC40NzY2IDEwLjc4MTIgMzAgMTAuMTY2IDMwIDguOTA2MjVWMS40MDYyNUMzMCAxLjAzMzI5IDI5Ljg1MTggMC42NzU2MDQgMjkuNTg4MSAwLjQxMTg4MUMyOS4zMjQ0IDAuMTQ4MTU4IDI4Ljk2NjcgMCAyOC41OTM4IDBWMFoiIGZpbGw9IiM4MTRGNjciLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",alt:"Link Icon"}))),a.createElement(f,null,e[0].stack)))}));return a.createElement(c,null," ",i," ")},j=r.ZP.div.withConfig({displayName:"projects__Container",componentId:"p1dby9-0"})(["width:100%;display:flex;justify-content:center;"]),y=function(){return a.createElement(n.Z,null,a.createElement(j,null,a.createElement(l.Z,{text:"My Projects",title:!0})),a.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-54df2751703dff22bbbf.js.map