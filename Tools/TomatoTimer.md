---
created: 2023-06-12 15:17:16
updated: 2023-10-20 15:22:40
id: 7b6de366-e010-4e09-a7a1-9ca9f6aac7ce
---
一个番茄时钟，默认显示当前时间（小时:分钟），在显示时间的状态下点击小时（左侧数字）进入番茄时钟的倒计时（默认 25 分钟），点击分钟（右侧数字）进入休息时间倒计时（默认 5 分钟）。

计时中不可暂停、取消，除非刷新页面。

## 效果演示

<iframe src="https://wo.zji.me/Tools/TomatoTimer.html" width=100% height=300></iframe>

## 技术细节

- 资源占用极低
- 精确度在 1 秒内，所以点击操作可能有轻微延迟感
- 界面自适应
- 计时结束会 Ding~ 一下

## 使用方法

### 直接打开

[https://wo.zji.me/Tools/TomatoTimer.html](https://wo.zji.me/Tools/TomatoTimer.html)

### 作为挂件

```text
https://wo.zji.me/Tools/TomatoTimer.html
```

将上述网址添加到 Obsidian 的 Custom Frame 插件中。

### 使用框架

复制如下代码，宽高数值可以根据需求自行修改。

```html
<iframe src="https://wo.zji.me/Tools/TomatoTimer.html" width=100% height=300></iframe>
```

### 笔记挂件

使用 [动态挂件](/Notes/0005_动态挂件.md) 方式添加则无需设定宽高。

```html
<iframe src="https://wo.zji.me/Tools/TomatoTimer.html"></iframe>
```

## 高级用法

网址中有两个可选参数：

- `l` 是番茄时间的长度，默认 25（单位：分钟）
- `s` 是休息时间的长度，默认 5（单位：分钟）

使用演示：

```text
https://wo.zji.me/Tools/TomatoTimer.html?l=30&s=10
```

即工作时间为 30 分钟，休息时间为 10 分钟。