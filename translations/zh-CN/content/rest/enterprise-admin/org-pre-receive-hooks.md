---
title: 组织预接收挂钩
intro: 组织预接收挂钩 API 允许你查看和修改组织可用的预接收挂钩的实施。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 802ed40ac8e42c1f0a9ef3b6bab4a150dd68603c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063960'
---
### 对象属性

| 名称                             | 类型      | 说明                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | 挂钩的名称。                                     |
| `enforcement`                    | `string`  | 此仓库中挂钩的实施状态。 |
| `allow_downstream_configuration` | `boolean` | 仓库是否可以覆盖实施。            |
| `configuration_url`              | `string`  | 设置实施的端点 URL。            |

强制执行的可能值为 `enabled`、`disabled` 和 `testing`。 `disabled` 表示预接收挂钩不会运行。 `enabled` 表示它将运行并拒绝任何导致非零状态的推送。 `testing` 表示脚本将运行但不会导致任何推送被拒绝。

`configuration_url` 可能是指向此终结点或此挂钩的全局配置的链接。 只有站点管理员才能访问全局配置。
