"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?i.createElement(f,a(a({ref:t},u),{},{components:r})):i.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const l={id:"ISeriesPrimitiveAxisView",title:"Interface: ISeriesPrimitiveAxisView",sidebar_label:"ISeriesPrimitiveAxisView",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,o={unversionedId:"api/interfaces/ISeriesPrimitiveAxisView",id:"version-4.1/api/interfaces/ISeriesPrimitiveAxisView",title:"Interface: ISeriesPrimitiveAxisView",description:"This interface represents a label on the price or time axis",source:"@site/versioned_docs/version-4.1/api/interfaces/ISeriesPrimitiveAxisView.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ISeriesPrimitiveAxisView",permalink:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitiveAxisView",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"ISeriesPrimitiveAxisView",title:"Interface: ISeriesPrimitiveAxisView",sidebar_label:"ISeriesPrimitiveAxisView",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Methods",id:"methods",level:2},{value:"coordinate",id:"coordinate",level:3},{value:"Returns",id:"returns",level:4},{value:"fixedCoordinate",id:"fixedcoordinate",level:3},{value:"Returns",id:"returns-1",level:4},{value:"text",id:"text",level:3},{value:"Returns",id:"returns-2",level:4},{value:"textColor",id:"textcolor",level:3},{value:"Returns",id:"returns-3",level:4},{value:"backColor",id:"backcolor",level:3},{value:"Returns",id:"returns-4",level:4},{value:"visible",id:"visible",level:3},{value:"Returns",id:"returns-5",level:4},{value:"tickVisible",id:"tickvisible",level:3},{value:"Returns",id:"returns-6",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This interface represents a label on the price or time axis"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"coordinate"},"coordinate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"coordinate"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The desired coordinate for the label. Note that the label will be automatically moved to prevent overlapping with other labels. If you would like the label to be drawn at the\nexact coordinate under all circumstances then rather use ",(0,n.kt)("inlineCode",{parentName:"p"},"fixedCoordinate"),".\nFor a price axis the value returned will represent the vertical distance (pixels) from the top. For a time axis the value will represent the horizontal distance from the left."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"coordinate. distance from top for price axis, or distance from left for time axis."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fixedcoordinate"},"fixedCoordinate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"fixedCoordinate"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"fixed coordinate of the label. A label with a fixed coordinate value will always be drawn at the specified coordinate and will appear above any 'unfixed' labels. If you supply\na fixed coordinate then you should return a large negative number for ",(0,n.kt)("inlineCode",{parentName:"p"},"coordinate")," so that the automatic placement of unfixed labels doesn't leave a blank space for this label.\nFor a price axis the value returned will represent the vertical distance (pixels) from the top. For a time axis the value will represent the horizontal distance from the left."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"coordinate. distance from top for price axis, or distance from left for time axis."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"text"},"text"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"text"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"text of the label"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"textcolor"},"textColor"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"textColor"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"text color of the label"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"backcolor"},"backColor"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"backColor"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"background color of the label"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"visible"},"visible"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"visible"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"whether the label should be visible (default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tickvisible"},"tickVisible"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"tickVisible"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"whether the tick mark line should be visible (default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),")"))}c.isMDXComponent=!0}}]);