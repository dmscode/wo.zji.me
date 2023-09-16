// 给容器元素添加一个类，便于查找，也便于和其他内容隔离
dv.container.classList.add('timeline-style-container')
// 向容器内注入样式代码
dv.container.innerHTML = `
<style>
/*==== TimeLine ====*/
.callout[data-callout="timeline"] {
  --callout-color: 0, 191, 188;
  --callout-icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gantt-chart"><path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/></svg>;
}
.callout[data-callout="timeline"] > .callout-content > ul {
  position: relative;
  margin-left: 7rem;
  padding-left: 7rem;
  padding-bottom: 1rem;
  border-left: 3px solid rgba(0, 191, 188);
  font-size: 1rem;
}
.callout[data-callout="timeline"] > .callout-content > ul::before {
  content: " ";
  position: absolute;
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  left: -7px;
  top: -12px;
  border: 2px solid rgba(0, 191, 188);
  border-radius: 50%;
}
.callout[data-callout="timeline"] > .callout-content > ul > li {
  position: relative;
  margin-bottom: .3rem;
  line-height: 1.6rem;
}
.callout[data-callout="timeline"] > .callout-content > ul > li > strong:first-child,
.markdown-reading-view .callout[data-callout="timeline"] > .callout-content > ul > li > .list-bullet + strong {
  position: absolute;
  left: -14rem;
  z-index: 10;
  display: block;
  width: 6rem;
  font-size: .8rem;
  font-weight: normal;
  text-align: center;
  line-height: 1.2rem;
  margin-top: .2rem;
  border: 2px solid rgba(0, 191, 188);
  border-radius: 12px;
}
.callout[data-callout="timeline"] > .callout-content > ul > li > em:first-child,
.callout[data-callout="timeline"] > .callout-content > ul > li > strong:first-child + em,
.markdown-reading-view .callout[data-callout="timeline"] > .callout-content > ul > li > .list-bullet + em,
.markdown-reading-view .callout[data-callout="timeline"] > .callout-content > ul > li > .list-bullet + strong + em {
  position: absolute;
  left: -6rem;
  z-index: 10;
  display: block;
  width: 4rem;
  color: white;
  font-size: .8rem;
  font-weight: normal;
  text-align: center;
  line-height: 1.2rem;
  margin-top: .2rem;
  background-color: rgba(0, 191, 188);
  border-radius: 12px;
}
.callout[data-callout="timeline"] > .callout-content > ul > li > em:first-child::before,
.callout[data-callout="timeline"] > .callout-content > ul > li > strong + em::before,
.markdown-reading-view .callout[data-callout="timeline"] > .callout-content > ul > li > .list-bullet + em::before,
.markdown-reading-view .callout[data-callout="timeline"] > .callout-content > ul > li > .list-bullet + strong + em::before {
  content: " ";
  position: absolute;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  left: calc(-1rem - 5px);
  top: calc(.8rem - 4px);
  background-color: rgba(0, 191, 188);
  border-radius: 50%;
}
</style>
`
if(!input?.hide){
  // 添加一些内容使此代码段可见
  dv.el('div', '[---------- Dataview Style ----------]', {cls: 'dataview-style-show'})
  dv.container.querySelector('div.dataview-style-show').style = `font-size: 10px; text-align: center; opacity: .3;`
}