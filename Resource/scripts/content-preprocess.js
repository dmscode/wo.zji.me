function FMHandle(content) {
  const FMArr = []
  // 从 front matter 提取需要的数据
  content = content.replace(/^-{3,}\r?\n([\s\S\r\n]*?)-{3,}\r?\n/g, (m, s1)=>{
    s1.split(/\s*\n\s*/g).forEach(t=>{
      if(/^(created|updated):/i.test(t)) FMArr.push(t)
    })
    return ''
  })

  return content+(FMArr.length ? `

<div class="meta-data">
  ${FMArr.map(t=>`<span>${t}</span>`).join('\n  ')}
</div>` : '')
}
// 因为无法用 hook 直接影响侧边栏、导航栏、封面内容，所以在每次跳转后查找删除元素
/**
 * 删除 FrontMatter
 *
 * @param {string} selector 选择器
 */
const removeFM = (selector) => {
  const els = document.body.querySelectorAll(selector)
  if(!els?.length) return
  if(els[0].tagName==='HR'){
    let hrCount = 0
    els.forEach((el, i)=>{
      if(hrCount>=2) return
      hrCount += el.tagName==='HR' ? 1 : 0
      el.parentElement.removeChild(el)
    })
  }
}
function FMRemoveHandle(){
  // 删除侧边栏中的元数据
  removeFM('aside.sidebar > .sidebar-nav > *')
  // 删除导航栏中的元数据
  removeFM('body > nav > *')
  // 删除封面内容中的元数据
  removeFM('.cover-main > *')
}

window.$docsify.plugins = [].concat(function (hook) {
  hook.beforeEach(FMHandle);
  hook.doneEach(FMRemoveHandle)
}, window.$docsify.plugins);