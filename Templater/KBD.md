---
created: 2023-10-20 16:58:03
updated: 2023-10-23 17:59:24
id: 9340c393-1fcd-42cc-8a13-57c9f2ea04e7
published: true
---
就是 Keyboard，键盘。HTML 里面有个标签 `kbd` 用来标记按键，比如：

<kbd class=key-win>Win</kbd> + <kbd class=key-d>D</kbd>

就是：

```html
<kbd>Win</kbd> + <kbd>D</kbd>
```

然后就可以据此设定一些特殊样式了，就像上面这样。

我用了一个 Templater 模板，代码稍微有点长：

```md
<%*
  let content = tp.file.selection()
  if(!(content && content.length)) content = await tp.system.prompt("请输入快捷键")
  if(!(content && content.length)) return
  const keyNames = {
      "-": "minus",
      "=": "equal",
      "`": "backtick",
      "[": "leftSquareBracket",
      "]": "rightSquareBracket",
      "\\": "backslash",
      ";": "semicolon",
      "'": "singleQuotationMark",
      ",": "comma",
      ".": "period",
      "/": "forwardSlash",
      "↑": "up",
      "↓": "down",
      "←": "left",
      "→": "right",
  }
  tR += content.replace(/([a-z0-9\[\];',.\/\\`\-=↑↓←→]+)/gi, (m, s)=>{
    const className = 'key-'+(/^[a-z0-9]+$/i.test(s) ? s.toLowerCase() : keyNames[s])
    return `<kbd class=${className}>${s}</kbd>`
  })
%>
```

然后选中你输入的快捷键（文字），插入这个模板即可；如果没选中文字则弹出输入框来输入。这个模板会给每个按键添加上对应的类，便于进行更复杂的自定义。所以上面按键实际生成的代码是这样的：

```html
<kbd class=key-win>Win</kbd> + <kbd class=key-d>D</kbd>
```