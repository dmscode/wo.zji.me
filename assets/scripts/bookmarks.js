alert()
const style = document.createElement('style')
style.innerHTML = `
ul > li > a > img {
  position: absolute;
  top: .3em;
  width: 1em;
  height: 1em;
}
`
document.body.querySelector('article.markdown-section').appendChild(style)