---
created: 2023-06-09 00:34:04
updated: 2023-10-20 15:21:10
id: c5049a58-ed64-48fd-9984-a6ff25dde969
---
都是基于 Markdown，那就是可以一起用！反正笔记基于 Markdown，所以一切支持 Markdown 的工具都是我的笔记工具。合理~

Docsify 就一个文件，放哪儿都不太会嫌它烦，只要给它 Markdown 文件，它就能解析展示出来。所以我把它放在笔记里面了。很合理~

记录一些具体的细节问题：

## Front matter

Docsify 不支持，直接当 markdown 展示出来了，虽然也不算难看吧。

可以使用 [docsify-mustache](https://docsify-mustache.github.io/#/)，这个插件是添加一些可供任意调用的字段的。但是它有一个附属功能，把  Front matter 的数据转换为可供调用的字段 ，同时隐藏 Front matter。所以如果只是想隐藏 Front matter，只需引入这个额外的库即可：

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/front-matter.min.js"></script>
```

但是 Docsify 的侧边栏也是一个 Markdown 文件，而上面脚本并不能照顾到侧边栏，就很尴尬 。所以我现在在 Obsidian 中排除了这个文件夹，不添加 Front matter 了。

这个问题很尴尬 ，~~后面有时间可能处理一下~~。处理了，自己写了一点代码预处理，因为我只做了删除，所以肯定性能更好。但是 Docsify 并不支持对侧边栏的控制，所以如果侧边栏文件加入 Front matter 就无解。

是的，Docsify 支持对解释器（marked）的自定义，而且解释器的影响是全局的，但是这只限于渲染器（Renderer）部分，而 hooks 似乎不起作用（怀疑被覆盖 ），所以只能先这样了。

## Mermaid

Docsify 使用 [docsify-mermaid](https://github.com/Leward/mermaid-docsify) 插件完美兼容。

可以搭配 [docsify-mermaid-zoom](https://github.com/corentinleberre/docsify-mermaid-zoom) 使用，这样阅读体验更好，毕竟有时候图片内容太多不好阅读 。

这两个我还没用，但后续很可能会用上。

## Callouts

Obsidian 中被问到最多的功能之一，不是什么标准方法，但是用来突出显示一些内容真的很方便。用这个插件 [docsify-plugin-flexible-alerts](https://github.com/fzankl/docsify-plugin-flexible-alerts) 基本兼容。一些细致问题可以通过自定义解决 。

## Todo List

>  Change at 2023-06-07

Obsidian 中一些主题支持对待办列表的更多标记，我给 Docsify 也加上了相应的支持，用 Emoji 进行标识，符号基本完全对应。