(function(e){function t(t){for(var r,n,c=t[0],l=t[1],u=t[2],s=0,d=[];s<c.length;s++)n=c[s],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,n=1;n<o.length;n++){var c=o[n];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},n={app:0},i={app:0},a=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-b9d4d07c":"2098e4d9","chunk-293e7971":"4b684ce6","chunk-30e61e5c":"eec5b17c"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={"chunk-b9d4d07c":1,"chunk-293e7971":1,"chunk-30e61e5c":1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var r="css/"+({}[e]||e)+"."+{"chunk-b9d4d07c":"fc2b0f2f","chunk-293e7971":"be7e1162","chunk-30e61e5c":"b143c53e"}[e]+".css",i=l.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===r||s===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete n[e],h.parentNode.removeChild(h),o(a)},h.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){n[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,o){r=i[e]=[t,o]}));t.push(r[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(h);var o=i[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,o[1](d)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){o("8f7e"),e.exports=o("cd49")},"5c0b":function(e,t,o){"use strict";var r=o("9c0c"),n=o.n(r);n.a},"9c0c":function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a=(o("5c0b"),o("2877")),c={},l=Object(a["a"])(c,n,i,!1,null,null,null),u=l.exports,s=(o("d3b7"),o("8c4f")),d=function(){return Promise.all([o.e("chunk-b9d4d07c"),o.e("chunk-293e7971")]).then(o.bind(null,"427d"))},h=function(){return Promise.all([o.e("chunk-b9d4d07c"),o.e("chunk-30e61e5c")]).then(o.bind(null,"32cb"))};r["a"].use(s["a"]);var p=[{path:"/",name:"Home",component:d},{path:"/editor",name:"Editor",component:h}],f=new s["a"]({routes:p}),g=f,m=o("a925"),v={"Do Not Click Me":"没事不要点","Dark Theme":"暗色主题","Light Theme":"浅色主题",GitHub:"代码猫",Telegram:"观星台",Discord:"Discord",English:"英文","Toggle chorus mode":"多重吟唱模式开关","Music board":"声音面板",Back:"返回","Suisei Remix Editor":"星音混响编辑器",experimental:"实验性",Play:"播放",Export:"导出",Clear:"清除","Your device screen is too small to run this editor. Sorry~":"你的屏幕尺寸过小，不适合运行此编辑器。抱歉～","long-editor-description":"你可以在此页对星音剪辑进行组合，并且导出你的作品。<br>轨道总长度为 5 秒。拖动声音剪辑按钮到轨道上以添加音频片段。<br>在创作衍生作品时，请遵守 <a href='https://hololive.tv/terms'>Hololive 二创条例</a>。<br>（这是一个实验性编辑器。在将来可能会有大量改变及功能添加。）","Error in sound playing:":"在播放声音时出现错误","We've known about it and will work on it soon.":"我们已经获知此问题并将着手处理。","Sound list fetch error:":"音频列表获取失败："},b={"Do Not Click Me":"Do Not Click Me","Dark Theme":"Dark Theme","Light Theme":"Light Theme",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"English","Toggle chorus mode":"Toggle chorus mode","Music board":"Music board",Back:"Back","Suisei Remix Editor":"Suisei Remix Editor",experimental:"experimental",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"Your device screen is too small to run this editor. Sorry~","long-editor-description":"Here you can remix with Suisei's voice clips and export your sparks.<br>The full track length is 5 seconds. Drag the voice clip button on wherever you want on the track.<br>Please comply to <a href='https://en.hololive.tv/terms'>Hololive's fan work guidelines</a> when creating derivative works.<br>(This editor is experimental and may change a lot and add many features in the future.)","Error in sound playing:":"Error in sound playing:","We've known about it and will work on it soon.":"We've known about it and will work on it soon.","Sound list fetch error:":"Sound list fetch error:"},y={"Do Not Click Me":"クリックしないでください","Dark Theme":"暗色のテーマ","Light Theme":"明色のテーマ",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"英語","Toggle chorus mode":"コーラスモードをオンにする","Music board":"Music board",Back:"Back","Suisei Remix Editor":"すいちゃんリミックスエディター",experimental:"試作版",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"ごめんなさい。画面が小さいためこのエディターを利用できません。","long-editor-description":"ここですいちゃんの音声素材をリミックスして保存することができます。<br>音声は5秒まで可能です。 追加したい場所に音声素材をドラッグしてください。<br>使用する際は<a href='https://hololive.tv/terms'>ホロライブ二次創作規約</a>に従ってください。<br>(このエディターは試作版です。今後新たな機能が追加されることがあります。)","Error in sound playing:":"Error in sound playing:","We've known about it and will work on it soon.":"We've known about it and will work on it soon.","Sound list fetch error:":"Sound list fetch error:"};r["a"].use(m["a"]);var k=new m["a"]({locale:"zh",fallbackLocale:"en",messages:{en:b,ja:y,zh:v}}),w=o("b85c"),E=o("d4ec"),T=o("bee2"),x=function(){function e(){Object(E["a"])(this,e),this.audios=[],this.multiPlay=!0,this.playCount=0}return Object(T["a"])(e,[{key:"addAudio",value:function(e){var t=this,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new Audio(e);return this.audios.push(r),r.addEventListener("play",(function(){t.playCount+=1})),r.addEventListener("pause",(function(){t.playCount-=1})),o&&r.addEventListener("loadeddata",(function(){t.stopAllWhenNonMultiPlay(),r.play()})),r}},{key:"stopAllWhenNonMultiPlay",value:function(){this.multiPlay||this.stopAll()}},{key:"preload",value:function(e){this.addAudio(e,!1)}},{key:"stopAll",value:function(){var e,t=Object(w["a"])(this.audios);try{for(t.s();!(e=t.n()).done;){var o=e.value;o.pause()}}catch(r){t.e(r)}finally{t.f()}}}]),e}(),S=o("dc21"),P=o("e594"),C=o("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].prototype.$status={darkMode:!1,playCount:0,player:new x},S["a"]({dsn:"https://fea8a42155df4851b95de0a8de86cb17@o407537.ingest.sentry.io/5276695",integrations:[new P["a"]({Vue:r["a"],attachProps:!0})]}),r["a"].config.productionTip=!1,new r["a"]({router:g,i18n:k,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.55b3bb6c.js.map