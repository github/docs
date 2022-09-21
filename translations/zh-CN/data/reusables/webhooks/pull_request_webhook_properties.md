---
ms.openlocfilehash: b7fde4d22f9d5e5e8b7a3d8f55b3ab19dee1185a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145084294"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 执行的操作内容. 可以是以下选项之一：<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`：如果操作为 `closed`，并且 `merged` 键为 `false`，则拉取请求随未合并的提交而关闭。 如果操作为 `closed`，并且 `merged` 键为 `true`，则合并拉取请求。</li><li>`converted_to_draft`</li><li>`edited`</li><li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`：更新拉取请求的主分支时触发。 例如，当头部分支从基础分支更新时，当新提交被推送到头部分支时，或者当基础分支更改时。</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
