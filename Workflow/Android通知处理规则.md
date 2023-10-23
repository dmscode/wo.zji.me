---
created: 2023-06-29 05:55:48
updated: 2023-10-23 17:59:24
id: 916ca6e4-4966-4b11-b6cc-6ffdd4e379db
published: true
---

使用 [BuzzKill](https://play.google.com/store/apps/details?id=com.samruston.buzzkill) 进行处理，这里记录一下自己设定的规则，重点不在规则本身，而是处理思路。

我尽量将同类处理放在同一个规则中，这样可以做的限定相对会模糊，但是够用。

【显示不正常请刷新一下页面】

## 自动移除

```mermaid
flowchart LR

%% 通知来源
subgraph Apps
  any[任意 App]
end

%% 通知规则
subgraph Rule
  subgraph Group[群组-包含任意]
    %% 某猫猫的规则自动更新，a、b 是规则的名称
    1["内容-正则匹配：更新(a|b)成功"]
    %% 中国移动的流量短信，周提醒是例行提醒，如果真的用超了是会有其他提醒的，所以不看也罢
    2["内容-包含：【流量周提醒】"]
    %% 联通的余额提醒太频繁了
    3["内容-正则匹配：(手机号码)可用额度已不足\d+元"]
  end
end

%% 通知处理
Do[移除-立刻]

%% 连线
Apps ---> Rule ---> Do

%% 节点样式
style Apps fill:#425066,color:#FFF
style Rule fill:#ffa400,color:#FFF
style Group fill:#ffc773,color:#333
style Do fill:#057748,color:#FFF
```

## 无需记录

```mermaid
flowchart LR

%% 通知来源
subgraph Apps
  any[任意 App]
end

%% 通知规则
subgraph Rule
  subgraph Group[群组-包含任意]
    %% PWA 应用自带的复制网址通知
    1["内容-完全匹配：点按即可复制该应用的网址"]
    %% PWA 应用：微博
    2["标题-完全匹配：微博"]
    %% 某猫猫的速度显示
    3["内容-正则匹配：\d+ Bytes\/s↑	\d+ Bytes\/s↓"]
    %% KWGT 挂件更新通知
    4["标题-完全匹配：服务正在运行"]
    %% 输入法切换通知
    5["标题-完全匹配：选择输入法"]
    %% 快贴
    6["标题-完全匹配：快贴服务运行中,点击复制"]
  end
end

%% 通知处理
Do[从通知历史删除]

%% 连线
Apps ---> Rule ---> Do

%% 节点样式
style Apps fill:#425066,color:#FFF
style Rule fill:#ffa400,color:#FFF
style Group fill:#ffc773,color:#333
style Do fill:#057748,color:#FFF
```

## 微信消息增强提醒

```mermaid
flowchart LR

%% 通知来源
subgraph Apps
  any[微信]
end

%% 通知规则
subgraph Rule
  subgraph Group[包含任意]
    %% 特定人的消息
    1["标题-正则匹配：名字|名字"]
  end
end

%% 通知处理
Do[自定义提醒]

%% 连线
Apps ---> Rule ---> Do

%% 节点样式
style Apps fill:#425066,color:#FFF
style Rule fill:#ffa400,color:#FFF
style Group fill:#ffc773,color:#333
style Do fill:#057748,color:#FFF
```

## 聊天工具别老叫

```mermaid
flowchart LR

%% 通知来源
subgraph Apps
  any["微信QQ"]
end

%% 通知规则
subgraph Rule
  subgraph Group[包含任意]

  end
end

%% 通知处理
Do["冷却：此对话-3 分钟内"]

%% 连线
Apps ---> Rule ---> Do

%% 节点样式
style Apps fill:#425066,color:#FFF
style Rule fill:#ffa400,color:#FFF
style Group fill:#ffc773,color:#333
style Do fill:#057748,color:#FFF
```

## 微信消息增强提醒

```mermaid
flowchart LR

%% 通知来源
subgraph Apps
  any[微信]
end

%% 通知规则
subgraph Rule
  subgraph Group[包含任意]
    %% 特定人的消息
    1["标题-正则匹配：名字|名字"]
  end
end

%% 通知处理
Do[自定义提醒]

%% 连线
Apps ---> Rule ---> Do

%% 节点样式
style Apps fill:#425066,color:#FFF
style Rule fill:#ffa400,color:#FFF
style Group fill:#ffc773,color:#333
style Do fill:#057748,color:#FFF
```