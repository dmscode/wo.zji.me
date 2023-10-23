---
created: 2023-10-20 16:26:07
updated: 2023-10-23 17:59:24
id: 67f6a6d7-f91a-40c2-b0bb-a35c765fdb32
published: true
---

想要重新整理一下自己笔记发布的结构，因为我的内容总在整理之中，所以如果以路径、分类、标签、标题……作为路径的一部分，都可能遭遇变化，很不利于分享。如果用创建日期作为依据，随着更新又有误导嫌疑，就想干脆用个无意义的 ID 算了，正好 Obsidian 里面环境简单，可以使用一些先进的前段方法。

以下是我现在用的笔记模板，注意要用 Templater 插件驱动：

```md
---
created: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
updated: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
id: <% crypto.randomUUID() %>
published: true
---

```

除了 ID 有点长，也没啥毛病。

至于现有笔记如何批量添加……参见：[UUID](/Dataview/Tools/UUID/)