function handle(content) {
  // 移除 front matter，但是不包含侧边栏
  return content.replace(/^-{3,}\r?\n([\s\S\r\n]*?)-{3,}\r?\n/g, (m, s1)=>{
    return ''
  })
}

window.$docsify.plugins = [].concat(function (hook) {
  hook.beforeEach(handle);
}, window.$docsify.plugins);