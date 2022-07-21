---
title: 组织预接收挂钩
intro: 组织预接收挂钩 API 允许您查看和修改组织可用的预接收挂钩的实施。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

### 对象属性

| 名称                               | 类型    | 描述           |
| -------------------------------- | ----- | ------------ |
| `name`                           | `字符串` | 挂钩的名称。       |
| `enforcement`                    | `字符串` | 此仓库中挂钩的实施状态。 |
| `allow_downstream_configuration` | `布尔值` | 仓库是否可以覆盖实施。  |
| `configuration_url`              | `字符串` | 设置实施的端点 URL。 |

*enforcement* 的可能值包括 `enabled`、`disabled` 和 `testing`。 `disabled` 表示预接收挂钩不会运行。 `enabled` 表示它将运行并拒绝会导致非零状态的任何推送。 `testing` 表示脚本将运行，但不会导致任何推送被拒绝。

`configuration_url` 可能是此端点或此挂钩的全局配置的链接。 只有站点管理员才能访问全局配置。
