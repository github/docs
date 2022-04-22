---
title: Pre-receive Hooks
intro: 预接收挂钩 API 允许您创建、列出、更新和删除预接收挂钩。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*它只适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)站点管理员。*普通用户尝试访问它时会收到 `404` 响应。

### 对象属性

#### 预接收挂钩

| 名称                               | 类型    | 描述                 |
| -------------------------------- | ----- | ------------------ |
| `name`                           | `字符串` | 挂钩的名称。             |
| `script`                         | `字符串` | 挂钩运行的脚本。           |
| `script_repository`              | `对象`  | 保存脚本的 GitHub 仓库。   |
| `environment`                    | `对象`  | 执行脚本的预接收环境。        |
| `enforcement`                    | `字符串` | 此挂钩的实施状态。          |
| `allow_downstream_configuration` | `布尔值` | 是否可以在组织或仓库级别上覆盖实施。 |

*enforcement* 的可能值包括 `enabled`、`disabled` 和 `testing`。 `disabled` 表示预接收挂钩不会运行。 `enabled` 表示它将运行并拒绝会导致非零状态的任何推送。 `testing` 表示脚本将运行，但不会导致任何推送被拒绝。
