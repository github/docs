---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084350"
---
密钥 | 类型 | 说明
----|------|-------------
`action` | `string` | 执行的操作内容. 可以是以下选项之一：`created`、`reopened_by_user`、`closed_by_user`、`fixed`、`appeared_in_branch` 或 `reopened`。
`alert` | `object` | 事件中涉及的代码扫描警报。
`ref` | `string` | 代码扫描警报的 Git 引用。 当操作为 `reopened_by_user` 或 `closed_by_user` 时，事件由 `sender` 触发，此值将为空。
`commit_oid` | `string` | 代码扫描警报的提交 SHA。 当操作为 `reopened_by_user` 或 `closed_by_user` 时，事件由 `sender` 触发，此值将为空。
