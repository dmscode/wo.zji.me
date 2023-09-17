/* 样式对象 */
const styleObj = {
  /* 数字字体 DIN-Regular-2 */
  NumberFont: `
  @font-face {
    font-family: "Number";
    src: url('data:font/woff2;charset=utf-8;base64,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') format('woff2'),
        url('data:font/woff;charset=utf-8;base64,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') format('woff');
  }
  `,
  /* 白板满框显示 */
  Canvas: `
  .canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view {
    padding: 0;
    overflow: hidden;
  }
  .canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view::before,
  .canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view::after {
    display: none;
  }
  .canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view > .markdown-preview-sizer > div {
    width: 100%;
    height: 100%;
  }
  .canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view > .markdown-preview-sizer > div。markdown-preview-pusher {
    display: none;
  }
  .canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view > .markdown-preview-sizer > div > iframe {
    width: 100%;
    height: 100%;
  }
  `,
  /* 一些基础工具样式 */
  Tools: `
  .clickable { cursor: pointer; }
  `
}
/* 给容器元素添加一个类，便于查找，也便于和其他内容隔离 */
dv.container.classList.add('DMS-Widgets-Base-container')
/* 根据情况注入需要的样式 */
const style = document.createElement('style')
style.innerHTML = input?.length ? input.map(t=>styleObj[t]).join('\n') : Object.keys(styleObj).map(t=>styleObj[t]).join('\n')
dv.container.appendChild(style)

/* ==== 工具函数 ==== */
/**
 * 设置定时器，可根据条件自销毁，以取代原生定时器方法
 *
 * @param {Function} Func 要执行的函数
 * @param {number} interval 执行间隔
 * @param {string} elSelector 判断是否需要继续执行的元素选择器
 * @param {HTMLElement} [rootEl=document] 搜索上述元素的元素范围
 */
const setInterval = (Func, interval, elSelector, rootEl=document)=>{
  const IntervalID = window.setInterval(()=>{
    /* 如果不存在对应元素，则清除此定时器 */
    if(!elSelector || !rootEl || !rootEl.querySelector(elSelector)){
      clearInterval(IntervalID)
      return
    }
    /* 执行对应功能 */
    Func()
  }, interval)
}
/**
 * 复制文本内容
 *
 * @param {string} text 要复制的文本
 * @param {string} [title=""] 用来说明复制内容的标题，暂未启用
 */
const copyText = (text, title="")=>{
  navigator.clipboard.writeText(text).then(
    ()=>new Notice('Copy Succeeded!', 3000),
    ()=>new Notice('Copy Failed!', 3000)
  )
}
/**
 * 时间格式化输出
 *
 * @param {string} format 格式化字符串
 * @param {string|number|Date} [time=Date.now()] 要格式化的时间
 */
const formatTime = (formatStr, time=Date.now())=>{
  const now = new Date(time)
  const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return formatStr
  .replace(/\{YYYY\}/g, now.getFullYear())
  .replace(/\{YY\}/g,   now.getFullYear().toString().substring(2))
  .replace(/\{MM\}/g,   String(now.getMonth()+1).padStart(2, "0"))
  .replace(/\{M\}/g,    String(now.getMonth()+1))
  .replace(/\{DD\}/g,   String(now.getDate()).padStart(2, "0"))
  .replace(/\{D\}/g,    String(now.getDate()))
  .replace(/\{EEEE\}/g, weekNames[now.getDay()])
  .replace(/\{EE\}/g,   weekShortNames[now.getDay()])
  .replace(/\{hh\}/g,   String(now.getHours()).padStart(2, "0"))
  .replace(/\{h\}/g,    String(now.getHours()))
  .replace(/\{mm\}/g,   String(now.getMinutes()).padStart(2, "0"))
  .replace(/\{m\}/g,    String(now.getMinutes()))
  .replace(/\{sss\}/g,  String(now.getMilliseconds()).padStart(3, "0"))
  .replace(/\{ts\}/g,   now.getTime())
  .replace(/\{ss\}/g,   String(now.getSeconds()).padStart(2, "0"))
  .replace(/\{s\}/g,    String(now.getSeconds()))
}
/**
 * 复制格式化时间
 *
 * @param {string} formatStr
 * @param {string} [title="Format Time"] 用来说明复制内容的标题，暂未启用
 */
const copyTimeStr = (formatStr, title='Format Time')=>{
  copyText(formatTime(formatStr), title)
}
window.DMSToolsFunc = {
  setInterval,
  copyText,
  copyTimeStr,
  formatTime,
}