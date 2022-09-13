---
title: 存储库预接收挂钩
intro: 存储库预接收挂钩 API 允许你查看和修改存储库可用的预接收挂钩的强制执行。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 63ba6f4f7d67b43dd39609a6520a0938365cfc12
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065160'
---
### 对象属性

| 名称                | 类型     | 说明                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | 挂钩的名称。                                     |
| `enforcement`       | `string` | 此仓库中挂钩的实施状态。 |
| `configuration_url` | `string` | 设置实施的端点 URL。            |

强制执行的可能值为 `enabled`、`disabled` 和 `testing`。 `disabled` 表示预接收挂钩不会运行。 `enabled` 表示它将运行并拒绝任何导致非零状态的推送。 `testing` 表示脚本将运行但不会导致任何推送被拒绝。

`configuration_url` 可能是此存储库、其组织所有者或全局配置的链接。 `configuration_url` 终结点的访问授权在所有者或站点管理员级别确定。
