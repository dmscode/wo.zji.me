const todoListMark = {
  '/': '🌓',    // 未完成
  '-': '⛔',    // 取消
  '&gt;': '⏩',    // 推迟
  '&lt;': '⏪️',    // 日程
  '?': '❓️',    // 疑问
  '!': '⚠️',    // 重要
  '*': '⭐️',    // 星标
  '&quot;': '🗨️',    // 引用
  'i': 'ℹ️',    // 信息
  'I': '💡',    // 闪念
  'f': '🔥',    // 热点
  'l': '📍',    // 地点
  'b': '🔖',    // 书签
  'S': '💾',    // 存储
  'p': '👍️',    // 优点
  'c': '👎️',    // 缺点
  'k': '🔑',    // 关键
  'w': '🎂',    // 胜利
  'u': '📈',    // 提升
  'd': '📉',    // 下降
}

window.$docsify.markdown = {
  renderer: {
    // 任务列表项的特殊标记
    listitem: function(text, isTask, isChecked) {
      if(isTask){
        return `<li>${text.replace(/^\s*<input.*?>/g, ()=>isChecked ? '✅' : '🔲')}</li>`
      }
      return `<li>${text.replace(/^\[(.|&[a-z]+;)\] /, (m, s)=>{
        return todoListMark[s]+'  '
      })}</li>`
    },
    // 解决图片相对路径的问题
    image: function(href, title) {
      const hashPath = window.location.hash.replace(/^#|\/[^/]*$/g, '')+'/'
      // 如果是相对路径，并且是相对于当前页面
      if(/^\.\//.test(href)) href = href.replace(/^\.\//, hashPath)
      // 如果是相对路径，并且不是相对于当前页面
      if(/^\.\.\//.test(href)){
        const upTimes = href.match(/\.\.\//g).length
        const reg = new RegExp(`([^/]+\/){${upTimes}}$`)
        href = hashPath.replace(reg, '')+href.replace(/\.\.\//g, '')
      }
      return `<img src="${href}" alt="${title}">`
    },
    // 使 == 标记的内容高亮
    text: function(text) {
      return text.replace(/(?<!=)==([^=]+)==(?!=)/g, '<mark>$1</mark>')
    }
  }
}