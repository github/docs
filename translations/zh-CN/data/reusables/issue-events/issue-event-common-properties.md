---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080974"
---
名称 | 类型 | 说明
-----|------|--------------
`id` | `integer` | 事件的唯一标识符。
`node_id` | `string` | 事件的[全局节点 ID](/graphql/guides/using-global-node-ids)。
`url`| `string` | 用于提取事件的 REST API URL。
`actor` | `object`| 生成事件的人。
`event` | `string` | 识别所发生事件的实际类型。
`commit_id` | `string` | 引用此议题的提交的 SHA。
`commit_url` | `string` | 指向引用此议题的提交的 GitHub REST API 链接。
`created_at` | `string` | 指示事件发生时间的时间戳。
