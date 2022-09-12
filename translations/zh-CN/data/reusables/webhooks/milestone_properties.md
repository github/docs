---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084793"
---
密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 执行的操作内容. 可以是以下项之一：`created`、`closed`、`opened`（关闭的里程碑重新打开）、`edited` 或 `deleted`。
`milestone`  |`object` | 里程碑本身。
`changes`|`object`| 对里程碑的更改（如果操作为 `edited`）。
`changes[description][from]`|`string` | 先前版本的说明（如果操作为 `edited`）。
`changes[due_on][from]`|`string` | 先前版本的截止日期（如果操作为 `edited`）。
`changes[title][from]`|`string` | 先前版本的标题（如果操作为 `edited`）。
