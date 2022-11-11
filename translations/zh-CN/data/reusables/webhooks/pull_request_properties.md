---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148007906"
---
`number`|`integer` | 拉取请求号。
`changes`|`object`| 对注释的更改（如果操作为 `edited`）。
`changes[title][from]`|`string` | 先前版本的标题（如果操作为 `edited`）。
`changes[body][from]`|`string` | 先前版本的正文（如果操作为 `edited`）。
`pull_request`|`object` | [拉取请求](/rest/reference/pulls) 本身。{% ifversion fpt or ghec %} `reason`|`string` | 如果操作为 `dequeued`，则从合并队列中删除拉取请求的原因。{% endif %}
