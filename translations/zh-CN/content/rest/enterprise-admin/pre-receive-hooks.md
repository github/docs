---
title: 预接收挂钩
intro: 预接收挂钩 API 允许您创建、列出、更新和删除预接收挂钩。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: dd776e7ec95a970f025d4de1ec03f07b2a7b29f7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066152'
---
它仅适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)网站管理员。 如果普通用户尝试访问它，他们将收到 `404` 响应。

### 对象属性

#### 预接收挂钩

| 名称                             | 类型      | 说明                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | 挂钩的名称。                                           |
| `script`                         | `string`  | 挂钩运行的脚本。                                  |
| `script_repository`              | `object`  | 保存脚本的 GitHub 仓库。                 |
| `environment`                    | `object`  | 执行脚本的预接收环境。       |
| `enforcement`                    | `string`  | 此挂钩的实施状态。                         |
| `allow_downstream_configuration` | `boolean` | 是否可以在组织或仓库级别上覆盖实施。 |

强制执行的可能值为 `enabled`、`disabled` 和 `testing`。 `disabled` 表示预接收挂钩不会运行。 `enabled` 表示它将运行并拒绝任何导致非零状态的推送。 `testing` 表示脚本将运行但不会导致任何推送被拒绝。
