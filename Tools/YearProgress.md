简单的显示今年的进度

## 效果演示

<iframe src="https://wo.zji.me/Tools/YearProgress.html" width=100% height=300></iframe>

## 技术细节

- 资源占用极低随精度变化
- 默认显示两位小数，五秒钟更新一次
- 界面自适应
- 点击文字复制格式为：`Year Progress: 45.70%` 的内容
- 点击进度条复制格式为：`Year Progress: ▓▓▓▓▓▓▓▓▓░░░░░░░░░░░ 45.70%` 的内容

## 使用方法

参见 [使用方法](/Tools/WidgetUsage.md)

## 高级用法

网址中有一个可选参数：

- `l` 要显示的小数位数，0 到 10，默认 2

使用演示：

```text
https://wo.zji.me/Tools/YearProgress.html?l=10
```

显示十位小数，直观感受时光流逝。