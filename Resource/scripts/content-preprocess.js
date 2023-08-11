function FMHandle(content) {
  const FMArr = []
  // 从 front matter 提取需要的数据
  content = content.replace(/^-{3,}\r?\n([\s\S\r\n]*?)-{3,}\r?\n/g, (m, s1)=>{
    s1.split(/\s*\n\s*/g).forEach(t=>{
      if(/^(created|updated):/i.test(t)) FMArr.push(t)
    })
    return ''
  })
  console.log(content)

  return content+(FMArr.length ? `
  
  <div class="meta-data">
    ${FMArr.map(t=>`<span>${t}</span>`).join('\n')}
  </div>` : '')
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