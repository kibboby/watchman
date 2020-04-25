(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(1),r=(t(0),t(209));const i={id:"version",title:"version"},c={id:"version",title:"version",description:"The version command will tell you the version and build information for the",source:"@site/docs/version.md",permalink:"/watchman/docs/version",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/version.md",sidebar:"sidebar",previous:{title:"unsubscribe",permalink:"/watchman/docs/unsubscribe"},next:{title:"watch",permalink:"/watchman/docs/watch"}},o=[{value:"Capabilities",id:"capabilities",children:[]},{value:"capabilityCheck",id:"capabilitycheck",children:[]}],l={rightToc:o};function s({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The version command will tell you the version and build information for the\ncurrently running watchman service:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman version\n{\n    "version": "2.9.6",\n    "buildinfo": "git:2727d9a1e47a4a2229c65cbb2f0c7656cbd96270"\n}\n')),Object(r.b)("p",null,"To get the version of the client:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ watchman -v\n2.9.8\n")),Object(r.b)("p",null,"If the server and client versions don't match up, you should probably restart\nyour server: ",Object(r.b)("inlineCode",{parentName:"p"},"watchman shutdown-server ; watchman"),"."),Object(r.b)("h3",{id:"capabilities"},"Capabilities"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.8.")),Object(r.b)("p",null,"The version command can be used to check for named capabilities. Capabilities\nmake it easier to check whether the server implements functionality based on\nthe name of that function rather than by having the client build up knowledge\nabout when those functions were introduced."),Object(r.b)("p",null,"You can read more about the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"capabilities"}),"available capability names"),"."),Object(r.b)("p",null,"To check whether the ",Object(r.b)("inlineCode",{parentName:"p"},"relative_root")," capability is supported:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<< \'["version", {"optional":["relative_root"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "relative_root": true\n    }\n}\n')),Object(r.b)("p",null,"If the capability is not supported:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<< \'["version", {"optional":["will-never-exist"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "will-never-exist": false\n    }\n}\n')),Object(r.b)("p",null,"To have the server generate an error response if a capability is not\nsupported:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<< \'["version", {"required":["will-never-exist"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "will-never-exist": false\n    },\n    "error": "client required capability `will-never-exist` is not supported by this server"\n}\n')),Object(r.b)("p",null,"To require one feature and test whether some optional features are supported:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<< \'["version", {"required":["term-match"],"optional":["a","b"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "a": false,\n        "b": false,\n        "term-match": true\n    }\n}\n')),Object(r.b)("h3",{id:"capabilitycheck"},"capabilityCheck"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"node")," and ",Object(r.b)("strong",{parentName:"p"},"python")," clients provide a ",Object(r.b)("inlineCode",{parentName:"p"},"capabilityCheck")," method that\nwill perform the version check above, and that also provide limited support\nfor testing capability support against older versions of the watchman server.\nThis facilitates a smoother transition from version number based checks to\ncapability named based checks."),Object(r.b)("p",null,"In ",Object(r.b)("em",{parentName:"p"},"python"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import pywatchman\nclient = pywatchman.client()\n# will throw an error if any of the required names are not supported\nres = client.capabilityCheck(optional=['a'], required=['term-match'])\nprint res\n# {'version': '3.8.0', 'capabilities': {'term-match': True, 'a': False}}\n")),Object(r.b)("p",null,"In ",Object(r.b)("em",{parentName:"p"},"node"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var watchman = require('fb-watchman');\nvar client = new watchman.Client();\nclient.capabilityCheck({optional: ['a'], required: ['term-match']}, function(\n  error,\n  resp,\n) {\n  if (error) {\n    // error will be an Error object if any of the required named\n    // are not supported\n  }\n  console.log(resp);\n  // {'version': '3.8.0', 'capabilities': {'term-match': false, 'a': false}}\n  client.end();\n});\n")))}s.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?r.a.createElement(h,o({ref:n},s,{components:t})):r.a.createElement(h,o({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);