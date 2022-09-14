---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065655"
---
`issue`|`object` | [问题](/rest/reference/issues)本身。
`changes`|`object`| 对问题的更改（如果操作为 `edited`）。
`changes[title][from]`|`string` | 先前版本的标题（如果操作为 `edited`）。
`changes[body][from]`|`string` | 先前版本的正文（如果操作为 `edited`）。
`assignee`|`object` | 已分配或未分配问题的可选用户。
`label`|`object` | 从问题中添加或删除的可选标签。
