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
    listitem: function(text, isTask, isChecked) {
      if(isTask){
        return `<li>${text.replace(/^\s*<input.*?>/g, ()=>isChecked ? '✅' : '🔲')}</li>`
      }
      return `<li>${text.replace(/^\[(.|&[a-z]+;)\] /, (m, s)=>{
        return todoListMark[s]+'  '
      })}</li>`
    }
  }
}