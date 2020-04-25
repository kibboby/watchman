(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=(r(0),r(209));const c={id:"type",title:"type"},o={id:"type",title:"type",description:"Evaluates as true if the type of the file matches that specified by the second",source:"@site/docs/type.md",permalink:"/watchman/docs/type",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/type.md",sidebar:"sidebar",previous:{title:"suffix",permalink:"/watchman/docs/suffix"},next:{title:"BSER Binary Protocol",permalink:"/watchman/docs/bser"}},i=[],l={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Evaluates as true if the type of the file matches that specified by the second\nargument; this matches regular files:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'["type", "f"]\n')),Object(a.b)("p",null,"Possible types are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"b"),": block special file"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"c"),": character special file"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"d"),": directory"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"f"),": regular file"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"p"),": named pipe (fifo)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"l"),": symbolic link"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"s"),": socket"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"D"),": Solaris Door")))}p.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||s[f]||c;return r?a.a.createElement(m,i({ref:t},p,{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);