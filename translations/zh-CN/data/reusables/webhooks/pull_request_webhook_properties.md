---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148007905"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 执行的操作内容. 可以是以下选项之一：<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`：如果操作为 `closed`，并且 `merged` 键为 `false`，则拉取请求随未合并的提交而关闭。 如果操作为 `closed`，并且 `merged` 键为 `true`，则合并拉取请求。</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued`：从合并队列中删除拉取请求时触发</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued`：向合并队列中添加拉取请求时触发</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`：更新拉取请求的主分支时触发。 例如，当头部分支从基础分支更新时，当新提交被推送到头部分支时，或者当基础分支更改时。</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
