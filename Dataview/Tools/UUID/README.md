---
created: 2023-10-20 16:35:26
updated: 2023-10-23 18:00:24
id: 47906fd3-7b1a-47e1-b17e-86eb02f2c5f8
published: true
---

我想用 ID 作为笔记的唯一识别符，主要是用在内容的发布上，新笔记当然很简单，套用一个模板就可以了，参见：[UUID](/Templater/UUID.md)

另一个问题是怎么给已有的笔记添加 ID，这有点麻烦，得写个脚本跑一下。但又想到 Dataview 可以很轻松的判断笔记是否具有某个 frontmatter 属性，就可以快速过滤获得未设定 ID 的笔记，然后进行进一步处理。但是，Dataview 本身不具有修改文件的功能，这得调用 Obsidian 的 Api 去实现。然后我就写了这么个视图（view）

调用视图会在笔记中显示一个按钮，用来触发批量修改；一个列表，列出当前没有 ID 的笔记。

一个问题，有些文件夹的内容不需要处理。我是在代码中直接排出的，也就是说你在使用中如果有需要得自行修改这部分代码。我本来是想做到设定参数中的，但是因为是正则，想想算了（懒

然后批量处理需要时间，可能得等一会儿，如果点击后就切换到其他笔记可能导致没处理完。我遭遇了，但是懒得改了，毕竟……这种工具大概也不会多次使用。日后用来检查补救一下也是很小数量的笔记，所以，就这样吧。