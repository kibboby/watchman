(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(1),a=(n(0),n(209));const c={id:"pcre",title:"pcre & ipcre"},i={id:"pcre",title:"pcre & ipcre",description:"_To use this feature, you must configure watchman `--with-pcre`!_",source:"@site/docs/pcre.md",permalink:"/watchman/docs/pcre",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/pcre.md",sidebar:"sidebar",previous:{title:"not",permalink:"/watchman/docs/not"},next:{title:"since",permalink:"/watchman/docs/exp-since"}},o=[],p={rightToc:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"To use this feature, you must configure watchman ",Object(a.b)("inlineCode",{parentName:"em"},"--with-pcre"),"!")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"pcre")," expression performs a Perl Compatible Regular Expression match\nagainst the basename of the file. This pattern matches ",Object(a.b)("inlineCode",{parentName:"p"},"test_plan.php")," but not\n",Object(a.b)("inlineCode",{parentName:"p"},"mytest_plan"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'["pcre", "^test_"]\n')),Object(a.b)("p",null,"You may optionally provide a third argument to change the scope of the match\nfrom the basename to the wholename of the file."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'["pcre", "txt", "basename"]\n["pcre", "txt", "wholename"]\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pcre")," is case sensitive; for case insensitive matching use ",Object(a.b)("inlineCode",{parentName:"p"},"ipcre")," instead;\nit behaves identically to ",Object(a.b)("inlineCode",{parentName:"p"},"pcre")," except that the match is performed ignoring\ncase."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Since 2.9.9.")),Object(a.b)("p",null,"Starting in version 2.9.9, on macOS systems where the watched root is a case\ninsensitive filesystem (this is the common case for macOS), ",Object(a.b)("inlineCode",{parentName:"p"},"pcre")," is\nequivalent to ",Object(a.b)("inlineCode",{parentName:"p"},"ipcre"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Since 4.7.")),Object(a.b)("p",null,"You can override the case sensitivity of all name matching operations used in\nthe query by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"case_sensitive")," field in your query."))}s.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||c;return n?a.a.createElement(f,o({ref:t},s,{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);