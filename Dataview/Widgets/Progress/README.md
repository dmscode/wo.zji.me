---
created: 2023-09-11 11:14:45
updated: 2023-10-23 18:00:24
id: 213b44cf-ca47-4e4c-85bf-26f8e585d4f7
published: true
---
# 时光进度组件

显示年、月、周、日、时、分的进度

## 基本用法

```js
dv.view('Progress')
```

## 可选参数

```js
dv.view('Clock'， {
        fontSize: 24,
        content: ['Year', 'Month', 'Week', 'Day'],
})
```

- `fontSize` 为文字大小，不带单位，默认会自动适应（调整窗口尺寸后需重新加载组件）
- `content`要显示的进度条和顺序，可用的值：
  - `Year`
  - `Month`
  - `Week`
  - `Day`
  - `Hour`
  - `Minute`

## 点击复制

点击左侧内容标题，比如 `Year` 可以复制带有进度条的内容，如：`Year Progress: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 69.44%`

点击右侧的百分比，则复制不带进度条的内容，如：`Year Progress: 69.44%`

## 自定义样式

可以自行修改 view.css 中的内容，结构和样式完全分离，所以可改造空间很大。

## 细节说明

- 此组件自动更新，最高频率每秒钟更新一次。
- 时、分进度多数人不需要，所以默认不显示，在默认状态下 4 秒钟更新一次。

## 组件下载

https://afdian.net/item/e808efe84f7a11ed86ec52540025c377