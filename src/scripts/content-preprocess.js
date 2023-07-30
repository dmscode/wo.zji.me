function FMHandle(content) {
  // 移除 front matter，但是不包含侧边栏
  return content.replace(/^-{3,}\r?\n([\s\S\r\n]*?)-{3,}\r?\n/g, (m, s1)=>{
    return ''
  })
}
// 因为无法用 hook 直接影响侧边栏内容，所以在每次 跳转后查找删除元素
function FMSideHandle(){
  const els = document.body.querySelectorAll('aside.sidebar > .sidebar-nav > *')
  if(els[0].tagName==='HR'){
    let hrCount = 0
    els.forEach((el, i)=>{
      if(hrCount>=2) return
      hrCount += el.tagName==='HR' ? 1 : 0
      el.parentElement.removeChild(el)
    })
  }
}

window.$docsify.plugins = [].concat(function (hook) {
  hook.beforeEach(FMHandle);
  hook.doneEach(FMSideHandle)
}, window.$docsify.plugins);