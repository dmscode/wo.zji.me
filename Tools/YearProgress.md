简单的显示今年的进度

## 效果演示

<iframe src="https://wo.zji.me/Tools/YearProgress.html" width=100% height=300></iframe>

## 技术细节

- 资源占用极低随精度变化
- 默认显示两位小数，五秒钟更新一次
- 界面自适应

## 使用方法

### 直接打开

[https://wo.zji.me/Tools/YearProgress.html](https://wo.zji.me/Tools/YearProgress.html)

### 作为挂件

```text
https://wo.zji.me/Tools/YearProgress.html
```

将上述网址添加到 Obsidian 的 Custom Frame 插件中。

### 使用框架

复制如下代码，宽高数值可以根据需求自行修改。

```html
<iframe src="https://wo.zji.me/Tools/YearProgress.html" width=100% height=300></iframe>
```

### 笔记挂件

使用 [动态挂件](/Notes/0005_动态挂件.md) 方式添加则无需设定宽高。

```html
<iframe src="https://wo.zji.me/Tools/YearProgress.html"></iframe>
```

## 高级用法

网址中有一个可选参数：

- `l` 要显示的小数位数，0 到 10，默认 2

使用演示：

```text
https://wo.zji.me/Tools/YearProgress.html?l=10
```

显示十位小数，直观感受时光流逝。