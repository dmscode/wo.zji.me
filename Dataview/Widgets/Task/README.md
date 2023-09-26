---
created: 2023-09-21 20:13:27
updated: 2023-09-26 14:23:03
---
# 任务列表组件

任务列表组件。注意：此挂件细节上基于我个人使用的任务标记方案：

- [ ] `- [ ]` 一般任务。确定需要去完成，但是没有特别的优先级
- [x] `- [x]` 已完成。已经完成，应该被归档的任务，应该不被显示（或者只显示当日已完成） ✅ 2023-08-03
- [!]  `- [!]` 重要的。应该首先被完成的任务。
- [>]  `- [>]` 计划中的。打算去完成，但是是在未来的某一刻，即目前优先级很低
- [?] `- [?]` 未确定的。尚未确定是否要这样做，表示需要再深入思考

同时搭配 Dataview 和 Tasks 两个插件共同支持的日期标记方案：


|含义|格式|个人理解|
|---|---|---|
|截止日期（due）|`🗓️YYYY-MM-DD`|任务的 Deadline|
|完成日期（completion）|`✅YYYY-MM-DD`|任务实际被完成|
|创建日期（created）|`➕YYYY-MM-DD`|任务创建（写下来）|
|开始日期（start）|`🛫YYYY-MM-DD`|开始进行这个任务|
|预定日期（scheduled）|`⏳YYYY-MM-DD`|计划开始的时间|

我只使用了截止日期和完成日期。

## 基本用法

```js
dv.view('Task')
```

## 可选参数

```js
dv.view('Clock'， {
    page: '',
    group: ['Past', 'Today', 'Todo', 'Future', 'Will', 'Maybe', 'Done']
})
```

- `page` 要检索的页面路径，会当做 [dv.page](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvpagepath) 的参数传入；
- `pages` 要检索的页面，会当做 [dv.pages](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvpagessource) 的参数传入，这两个属性只需要设定一个，如果两个都设定，则取 `pages` 设定，都不设定则默认查询素有页面
- `group` 要显示的组
    - `Past`：截止日期在今天之前的未完成任务；
    - `Today`：截止日期在今天的未完成任务；
    - `Todo`：没有截止日期的未完成任务；
    - `Future`：截止日期在未来的未完成任务
    - `Will`：状态标记为 `>` 的任务
    - `Maybe`：状态标记为 `?` 的任务
    - `Done`：今日完成的任务

## 自定义样式

可以自行修改 view.css 中的内容，结构和样式完全分离，所以可改造空间很大。

## 细节说明

状态标记为 `!` 的任务会在每个组的最前面。

此组件目前未依赖 Base 组件。

## 组件下载

https://afdian.net/item/e808efe84f7a11ed86ec52540025c377