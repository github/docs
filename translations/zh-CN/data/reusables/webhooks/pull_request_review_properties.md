---
ms.openlocfilehash: 6b8d3bb77c6a40a43ab22ffd0e60e61cd049fa61
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065625"
---
密钥 | 类型 | 说明
----|------|------------
`action` | `string` | 执行的操作内容. 可以是以下选项之一：<ul><li>`submitted` - 拉取请求审查被提交为非挂起状态。</li><li>`edited` - 审查的正文被编辑。</li><li>`dismissed` - 审查被驳回。</li></ul>
`pull_request` | `object` | 与审查相关的[拉取请求](/rest/reference/pulls)。
`review` | `object` | 受影响的审查。
`changes[body][from]`|`string` | 如果操作为 `edited`，则为先前版本的正文。
