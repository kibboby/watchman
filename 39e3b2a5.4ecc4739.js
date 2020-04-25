(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),o=(n(0),n(209));const i={id:"cli-options",title:"Command Line"},r={id:"cli-options",title:"Command Line",description:"The `watchman` executable contains both the client and the server components",source:"@site/docs/cli-options.md",permalink:"/watchman/docs/cli-options",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/cli-options.md",sidebar:"sidebar",previous:{title:"Release Notes",permalink:"/watchman/docs/release-notes"},next:{title:"watchman-make",permalink:"/watchman/docs/watchman-make"}},c=[{value:"Quick note on default locations",id:"quick-note-on-default-locations",children:[]},{value:"Locating the service",id:"locating-the-service",children:[]},{value:"Client Options",id:"client-options",children:[{value:"Input and Output",id:"input-and-output",children:[]}]},{value:"Exit Status",id:"exit-status",children:[]},{value:"Server Options",id:"server-options",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"watchman")," executable contains both the client and the server components\nof the watchman service."),Object(o.b)("p",null,"By default, when ",Object(o.b)("inlineCode",{parentName:"p"},"watchman")," is run, it will attempt to communicate with your\nexisting server instance (each user has their own persistent process), and\nwill attempt to start it if it doesn't exist."),Object(o.b)("p",null,"There are some options that affect how ",Object(o.b)("inlineCode",{parentName:"p"},"watchman")," will locate the server, some\noptions that affect only the client and some others that affect only the\nserver. Since all of the options are understood by the same executable we've\nbroken those out into sections of their own to make it clearer when they\napply."),Object(o.b)("h2",{id:"quick-note-on-default-locations"},"Quick note on default locations"),Object(o.b)("p",null,"Watchman will prefer to resolve your user name from the ",Object(o.b)("inlineCode",{parentName:"p"},"$USER")," environmental\nvariable, or ",Object(o.b)("inlineCode",{parentName:"p"},"$LOGNAME")," if ",Object(o.b)("inlineCode",{parentName:"p"},"$USER")," was not set. If neither are set watchman\nwill look it up from the system using ",Object(o.b)("inlineCode",{parentName:"p"},"getpwuid(getuid())"),". When we refer to\n",Object(o.b)("inlineCode",{parentName:"p"},"<USER>")," in this documentation we mean the result of this resolution."),Object(o.b)("p",null,"In some cases Watchman will need to create files in a temporary location.\nWatchman will resolve this temporary location by looking at the ",Object(o.b)("inlineCode",{parentName:"p"},"$TMPDIR"),"\nenvironmental variable, or ",Object(o.b)("inlineCode",{parentName:"p"},"$TMP")," if ",Object(o.b)("inlineCode",{parentName:"p"},"$TMPDIR")," was not set. If neither are set\nwatchman will use ",Object(o.b)("inlineCode",{parentName:"p"},"/tmp"),". When we refer to ",Object(o.b)("inlineCode",{parentName:"p"},"<TMPDIR>")," in this documentation we\nmean the result of this resolution."),Object(o.b)("p",null,"Watchman tracks its persistent state in a location that we refer to as the\n",Object(o.b)("inlineCode",{parentName:"p"},"<STATEDIR>")," in this documentation."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since 3.1.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"STATEDIR")," defaulted to ",Object(o.b)("inlineCode",{parentName:"p"},"<PREFIX>/var/run/watchman"),". You can change this\ndefault when you build watchman by using the configure option\n",Object(o.b)("inlineCode",{parentName:"p"},"--enable-statedir"),"."),Object(o.b)("p",null,"Earlier versions of Watchman didn't have a default statedir and would instead\nuse the ",Object(o.b)("inlineCode",{parentName:"p"},"<TMPDIR>")," for this state. We switched away from that because some\nenvironments randomize the ",Object(o.b)("inlineCode",{parentName:"p"},"<TMPDIR>")," location and this made it difficult for\nclients to locate the Watchman service."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since 3.8.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"STATEDIR")," defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"<PREFIX>/var/run/watchman/<USER>-state"),". You can\nchange this default when you build watchman by using the configure option\n",Object(o.b)("inlineCode",{parentName:"p"},"--enable-statedir"),"; the configure option replaces the\n",Object(o.b)("inlineCode",{parentName:"p"},"<PREFIX>/var/run/watchman")," portion of this string. If you specify\n",Object(o.b)("inlineCode",{parentName:"p"},"--disable-statedir")," then that portion of the string will be computed from the\n",Object(o.b)("inlineCode",{parentName:"p"},"<TMPDIR>")," location."),Object(o.b)("p",null,"Watchman will create the ",Object(o.b)("inlineCode",{parentName:"p"},"<USER>-state")," portion if it does not exist, and will\nperform some permission and ownership checks to reduce the risk of untrusted\nusers placing files in this location. If those checks are not satisfied,\nwatchman will refuse to start."),Object(o.b)("h2",{id:"locating-the-service"},"Locating the service"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," -U, --sockname=PATH   Specify alternate sockname\n")),Object(o.b)("p",null,"The default location for sockname will be ",Object(o.b)("inlineCode",{parentName:"p"},"<STATEDIR>/<USER>"),". Older versions\nof Watchman would default to ",Object(o.b)("inlineCode",{parentName:"p"},"<TMPDIR>/.watchman.<USER>"),", depending on how it\nwas configured."),Object(o.b)("p",null,"If you are building a client to access the service programmatically, we\nrecommend that you invoke ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/watchman/docs/get-sockname"}),"watchman get-sockname")," to discover\nthe path that the client and server would use. This has the side effect of\nspawning the service for you if it isn't already running."),Object(o.b)("h2",{id:"client-options"},"Client Options"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"watchman")," executable will attempt to start the service if there is no\nresponse on the socket specified above. In some cases it is desirable to avoid\nstarting the service if it isn't running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," --no-spawn            Don't spawn service if it is not already running.\n                       Will try running the command in client mode if\n                       possible.\n --no-local            When no-spawn is enabled, don't use client mode\n")),Object(o.b)("p",null,"Client mode implements the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"find"}),"watchman find command")," as an immediate\nsearch."),Object(o.b)("p",null,"These options control how the client talks to the server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," -p, --persistent           Persist and wait for further responses\n     --server-encoding=ARG  CLI<->server encoding. json or bser.\n")),Object(o.b)("p",null,"Persistent connections have relatively limited use with the CLI, but can be\nuseful to connect ad-hoc to the service to receive logging information (See\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"log-level"}),"log-level"),")."),Object(o.b)("p",null,"The server encoding option controls how requests and responses are formatted\nwhen talking to the server. You generally shouldn't need to worry about this."),Object(o.b)("h3",{id:"input-and-output"},"Input and Output"),Object(o.b)("p",null,"Most simple invocations of the CLI will pass a list of arguments:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ watchman watch /path/to/dir\n")),Object(o.b)("p",null,"This is turned into a request like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'["watch", "/path/to/dir"]\n')),Object(o.b)("p",null,"and sent to the service using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"socket-interface"}),"Socket Interface"),"."),Object(o.b)("p",null,"The response is received and then sent to the ",Object(o.b)("inlineCode",{parentName:"p"},"stdout")," stream formatted based\non the selected output-encoding:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"     --output-encoding=ARG  CLI output encoding. json (default) or bser\n     --no-pretty            Don't pretty print JSON output (more efficient\n                            when being processed by another program)\n")),Object(o.b)("p",null,"Each command has its own response output but watchman will always include a\nfield named ",Object(o.b)("inlineCode",{parentName:"p"},"error")," if something about the request was not successful. In case\nof some protocol level errors (eg: connection was terminated) instead of\nprinting a response on ",Object(o.b)("inlineCode",{parentName:"p"},"stdout"),", an unstructured error message will be printed\nto ",Object(o.b)("inlineCode",{parentName:"p"},"stderr")," and the process will exit with a non-zero exit status."),Object(o.b)("p",null,"Instead of passing the request as command line parameters, you can send a JSON\nrepresentation on the ",Object(o.b)("inlineCode",{parentName:"p"},"stdin")," stream. These invocations are all equivalent:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ watchman watch /path/to/dir\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<-EOT\n["watch", "/path/to/dir"]\nEOT\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<< \'["watch", "/path/to/dir"]\'\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ echo \'["watch", "/path/to/dir"]\' | watchman -j\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ echo \'["watch", "/path/to/dir"]\' > cmd.json\n$ watchman -j < cmd.json\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman --json-command <<-EOT\n["watch", "/path/to/dir"]\nEOT\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since 3.8")),Object(o.b)("p",null,"The CLI now also recognizes BSER as a valid input stream when using the ",Object(o.b)("inlineCode",{parentName:"p"},"-j"),"\noption. This will implicitly set ",Object(o.b)("inlineCode",{parentName:"p"},"--server-encoding=bser")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"--output-encoding=bser")," if those options have not been set to something else."),Object(o.b)("h2",{id:"exit-status"},"Exit Status"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"watchman")," binary will exit with a return code of 0 in most cases; this\nindicates that the output it generated should be valid JSON. To determine if\nyour command was successful, you need to parse the JSON and look for the\n",Object(o.b)("inlineCode",{parentName:"p"},"error")," field as described above."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"watchman")," will exit with a non-zero exit status in cases where something\nlow-level went wrong, such as protocol level errors (eg: connection was\nterminated)."),Object(o.b)("h2",{id:"server-options"},"Server Options"),Object(o.b)("p",null,"These options are used when starting the server. They are recognized by the\nclient and affect how it will start the server, but have no effect if the\nserver is already running. To change the effective values of these options for\na running server, you will need to restart it (you can stop it by running\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"shutdown-server"}),"watchman shutdown-server"),")."),Object(o.b)("p",null,"By default, watchman will remember all watches and associated triggers and\nreinstate them if the process is restarted. This state is stored in the\n",Object(o.b)("em",{parentName:"p"},"statefile"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," --statefile=PATH      Specify path to file to hold watch and trigger state\n -n, --no-save-state   Don't save state between invocations\n")),Object(o.b)("p",null,"The default location for statefile will be ",Object(o.b)("inlineCode",{parentName:"p"},"<STATEDIR>/<USER>.state"),". Older\nversions of watchman may store the state in ",Object(o.b)("inlineCode",{parentName:"p"},"<TMPDIR>/.watchman.<USER>.state"),",\ndepending on how they were configured."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"-o, --logfile=PATH   Specify path to logfile\n    --log-level      set log verbosity (0 = off, default is 1, verbose = 2)\n")),Object(o.b)("p",null,"The default location for logfile will be ",Object(o.b)("inlineCode",{parentName:"p"},"<STATEDIR>/<USER>.log"),". Older\nversions of watchman may store the logs in ",Object(o.b)("inlineCode",{parentName:"p"},"<TMPDIR>/.watchman.<USER>.log"),",\ndepending on how they were configured."),Object(o.b)("p",null,"In some relatively uncommon circumstances, such as in test harnesses, you may\nneed to directly run the service without it putting itself into the\nbackground:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," -f, --foreground      Run the service in the foreground\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since 4.6.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"     --inetd                Spawning from an inetd style supervisor\n")),Object(o.b)("p",null,"When this flag is specified, watchman will use stdin as the listening socket\nrather than attempting to set it up for itself. This allows some other process\nto maintain the socket and defer activating the watchman service until a\nclient is ready to connect. This is most practically beneficial when used\ntogether with ",Object(o.b)("inlineCode",{parentName:"p"},"systemd"),"."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/watchman/commit/2985377eaf8c8538b28fae9add061b67991a87c2"}),"This commit includes a sample configuration for systemd"),"."))}l.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(r,".").concat(u)]||b[u]||h[u]||i;return n?o.a.createElement(d,c({ref:t},l,{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);