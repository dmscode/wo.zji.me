function handle(content) {
  console.log(3)
  console.log(/^(\s*(?:>\s+)?(?:\-|\*)\s+)/g.test(content))
  return content.replace(/^(\s*(?:>\s+)?[-*]\s+)\[ \] /g, (m, s1, s2)=>{
    console.log(m, s1, s2);
    return 123
  })
}

window.$docsify.plugins = [].concat(function (hook) {
  hook.beforeEach(handle);
}, window.$docsify.plugins);