---
created: 2023-09-08 10:00:51
updated: 2023-10-23 18:00:24
id: fed7a349-d9f0-4bbd-8dc0-058e3c511c46
published: true
---
# 时钟组件

显示数字时钟，可设定点击后复制特定的时间字符串。

## 基本用法

```js
dv.view('Clock')
```

## 可选参数

```js
dv.view('Clock'， {
        fontSize: 120,
        seconds: false,
        copy: ['time', 'timeNoSeconds', 'timeNoSeconds', 'timestamp']
})
```

- `fontSize` 为文字大小，不带单位，默认会自动适应（调整窗口尺寸后需重新加载组件）
- `seconds` 是否显示秒钟，默认显示
- `copy` 数字点击事件，可设定从左到右每个数字点击后要复制的内容
  - `time` 复制时间，格式为：`10:06:36`
  - `timeNoSeconds` 复制不带秒数的时间，格式为：`10:06`
  - `timestamp` 复制时间戳，格式为：`1694138866166`

## 自定义样式

可以自行修改 view.css 中的内容，结构和样式完全分离，所以可改造空间很大。

## 组件下载

https://afdian.net/item/e808efe84f7a11ed86ec52540025c377