import{n as M}from"./chunks/index.Da_DU5FM.js";import{d as C,h as r,b as K,w as n,E as I,o as p,J as o,c as k,G as x,F as y,p as e,m as w,t as _,a as f,V as $}from"./chunks/framework.BpLZpJbo.js";const L="/assets/DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B_.DUIR8b_p.png",N=i=>atob(i);function G(i){return[...new URL(i).searchParams].reduce((s,[l,c])=>(s[l]=c,s),{})}const U=[{link:"https://www.123pan.com/s/BEzKjv-yZqqv.html",date:"2024/4/6",version:"1.0.3",changes:["修复了大量 bug"],env:"v1"},{link:"https://www.123pan.com/s/BEzKjv-1bqqv.html",date:"2024/4/5",version:"1.0.2 fixed",changes:["修复了大量的累计 bug"],env:"v1"},{link:"https://www.123pan.com/s/BEzKjv-A7qqv.html",date:"2024/4/3",version:"1.0.2",changes:["更新上游代码","混音控制台的音量调节可用了","使用非跨进程的 BS-RoFormer 处理音频（人话：更快了）"],patch:"https://www.123pan.com/s/BEzKjv-o7qqv.html"},{link:"https://www.123pan.com/s/BEzKjv-uUqqv.html",date:"2024/3/31",version:"1.0.1",changes:["喜报：DDSP 6.0","混音功能支持自定义","更换 BS-RoFormer 模型作为人声提取模型，速度很快","修复了累计的一大堆 bug","功能稳定下来啦，现在是正式版了"]},{link:"https://www.123pan.com/s/BEzKjv-eCqqv.html",date:"2024/3/10",version:"1.0.0 rc11-fixed",changes:["该版本需要额外下载补丁: [Patch 1 for 1.0.0 rc11-fixed](https://www.123pan.com/s/BEzKjv-18qqv.html) 使用该压缩包内的 webui.bin 覆盖完整包的 webui.bin 即可","修复 rc11 中的一些小 bug","新增无说话人配置自动 fallback 到默认说话人的功能","~~再也不深夜写代码了~~"],patch:"https://www.123pan.com/s/BEzKjv-18qqv.html"},{link:"https://www.123pan.com/s/BEzKjv-ICqqv.html",date:"2024/3/10",version:"1.0.0 rc11",changes:["新增自动混音功能","修复了一些小 bug"]},{link:"https://www.123pan.com/s/BEzKjv-jXqqv.html",date:"2024/3/10",version:"1.0.0 rc10-fixed",changes:["该版本为紧急修复版本 没有功能更新"]},{link:"https://www.123pan.com/s/BEzKjv-NXqqv.html",date:"2024/3/10",version:"1.0.0 rc10",changes:["此版本无法使用 请下载上面的 rc10-fixed","修复了写入配置覆盖 spk 的问题","自带 uvr 部分模型，支持推理","修复启动脚本的问题"]},{link:"https://www.123pan.com/s/BEzKjv-9fqqv.html",date:"2024/2/24",version:"1.0.0 rc9",changes:["更新 nsf_hifigan 声码器模型","去掉了无用日志输出","添加 FFmpeg，支持 mp3 等其他格式的推理了","修复了一些小 bug"]},{link:"https://www.123pan.com/s/BEzKjv-ykqqv.html",date:"2024/2/15",version:"1.0.0 rc8",changes:["添加了当 spk 字段缺失时的提醒"]},{link:"https://www.123pan.com/s/BEzKjv-PEqqv.html",date:"2024/2/15",version:"1.0.0 rc7",changes:["支持保存配置"]},{link:"https://www.123pan.com/s/BEzKjv-EEqqv.html",date:"2024/2/15",version:`1.0.0 rc6
:::warning
此版本 bug 较多，已停止下载
:::`,changes:["支持在 WebUI 实现训练暂停","启动 tensorboard 后自动打开"]},{link:"https://www.123pan.com/s/BEzKjv-WQqqv.html",date:"2024/2/14",version:"1.0.0 rc5",changes:["支持多说话人训练，推理","训练：增加最大轮数选项 ~~其实是为了凑整~~","数据处理：更新手动数据处理","布局：采用平行布局，更加美观","更换压缩参数，减小体积","~~下一个版本上加功德按钮~~"]},{link:"https://www.123pan.com/s/BEzKjv-V9qqv.html",date:"2024/2/13",version:"1.0.0 rc4",changes:["训练：新增不使用底模选项","数据处理：新增使用设备选项","移除模型"]},{link:"https://www.123pan.com/s/BEzKjv-l9qqv.html",date:"2024/2/13",version:"1.0.0 rc3",changes:["修复了归档后缺工作目录的 bug","此版本自带真寻的模型，绝对不是我不小心打包进去的"]},{link:"https://www.123pan.com/s/BEzKjv-89qqv.html",date:"2024/2/13",version:"1.0.0 rc2",changes:["添加群链接","重打环境，减小体积"]},{link:"https://www.123pan.com/s/BEzKjv-W9qqv.html",date:"2024/2/13",version:"1.0.0 rc1 ",changes:["第一个没多少 bug 的版本"]}],O="https://www.123pan.com/s/BEzKjv-obqqv.html",R={v1:O},T={class:"tip custom-block"},V={class:"custom-block-title"},A=["innerHTML"],H=C({__name:"comp",props:{wait_time:{},link:{},version:{}},setup(i){const{NButton:s,NSpace:l,NModalProvider:c,NCard:v,NModal:q,NCheckbox:E}=M,d=i,b=r([]),u=r(["我已知晓使用去伴奏功能需要额外下载模型"]),h=r([]),D=()=>{console.log(h.value),h.value.every(a=>a)&&h.value.length===u.value.length&&window.open(z.value,"_blank")},B=r(!1),z=r(""),t=U.find(a=>a.version===d.version);console.log(t),t!=null&&t.patch&&(b.value.push(`
该版本需要安装补丁才可使用，补丁 <a href="${t==null?void 0:t.patch}" target="_blank">点击下载</a>
使用方法：
将补丁内文件覆盖到整合包根目录
    `.split(`
`).map(a=>`<p>${a}</p>`).join("")),u.value.push("我已知晓该版本需要安装补丁")),t!=null&&t.env&&(b.value.push(`
该版本需要搭配环境包才可使用
环境版本 ${t==null?void 0:t.env}，如果您已安装过该环境包，可直接下载整合包
<a href="${R[t==null?void 0:t.env]}" target="_blank">点击下载</a>
将环境包内文件覆盖到整合包根目录，确保根目录存在 <code>.conda</code> 文件夹即可
    `.split(`
`).map(a=>`<p>${a}</p>`).join("")),u.value.push("我已知晓该版本需要安装环境包"));const F=()=>{d.wait_time>0||(z.value=d.link,B.value=!0)};return(a,j)=>{const P=I("ClientOnly");return p(),K(P,null,{default:n(()=>[o(e(c),null,{default:n(()=>[(p(!0),k(y,null,x(b.value,(m,g)=>(p(),k("div",T,[w("p",V,"版本额外说明 "+_(g+1),1),w("div",{innerHTML:m},null,8,A)]))),256)),o(e(l),{vertical:""},{default:n(()=>[w("div",null," 等待 "+_(d.wait_time)+"s 后，方可点击跳转按钮 ",1),o(e(s),{onClick:F,style:{width:"100%"}},{default:n(()=>[f("跳转到 123 云盘")]),_:1})]),_:1}),o(e(q),{show:B.value,"onUpdate:show":j[0]||(j[0]=m=>B.value=m)},{default:n(()=>[o(e(v),{style:{width:"600px"},title:"请确认",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:n(()=>[o(e(l),{vertical:""},{default:n(()=>[(p(!0),k(y,null,x(u.value,(m,g)=>(p(),K(e(E),{checked:h.value[g],"onUpdate:checked":S=>h.value[g]=S},{default:n(()=>[f(_(m),1)]),_:2},1032,["checked","onUpdate:checked"]))),256)),o(e(s),{style:{width:"100%"},type:"info",onClick:D},{default:n(()=>[f("GOGOGO")]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1})]),_:1})}}}),W={id:"下载中转页-version",tabindex:"-1"},J=w("a",{class:"header-anchor",href:"#下载中转页-version","aria-label":'Permalink to "下载中转页 {{ version }}"'},"​",-1),X=$('<p>您需要查看下列的注意事项后才能跳转到网盘</p><p>其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><details class="details custom-block"><summary>新底模相关</summary><p>DDSP 6.0 整合包中的底模是我自己炖的 非官方底模（截至发布也没有官方底模）</p></details></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>再次说明，请使用 <strong>bandizip（最新版本）</strong> 或者 <strong>7zip</strong> 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。</p><details class="details custom-block"><summary>图片</summary><img src="'+L+'"></details></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>从 1.0.0 rc11 开始，包内不再自带 uvr 模型，需要自行下载</p><p>下载链接：<a href="https://www.123pan.com/s/BEzKjv-h7qqv.html" target="_blank" rel="noreferrer">uvr 模型</a></p><p>下载后解压至整合包根目录 完成操作后你应该能 <code>other_weights</code> 文件夹</p></div>',5),tt=JSON.parse('{"title":"下载中转页 {{ version }}","description":"","frontmatter":{},"headers":[],"relativePath":"download/index.md","filePath":"download/index.md"}'),Q={name:"download/index.md"},et=C({...Q,setup(i){const s=G(typeof window>"u"?"http://localhost:5173/download/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA==":location.href);console.log(s),s.link;const l=N(s.link),c=N(s.version),v=r(15);console.log(l);const q=setInterval(()=>{v.value--,v.value<=0&&clearInterval(q)},1e3);return(E,d)=>(p(),k("div",null,[w("h1",W,[f("下载中转页 "+_(e(c))+" ",1),J]),X,o(H,{wait_time:v.value,link:e(l),version:e(c)},null,8,["wait_time","link","version"])]))}});export{tt as __pageData,et as default};
