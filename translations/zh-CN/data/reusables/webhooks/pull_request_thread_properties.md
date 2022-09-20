---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883770"
---
密钥 | 类型 | 说明
----|------|------------
`action` | `string` | 执行的操作内容. 可以是以下选项之一：<ul><li>`resolved` - 拉取请求上的批注线程被标记为已解决。</li><li>`unresolved` - 拉取请求上先前已解决的批注线程标记为未解决。</li></ul>
`pull_request` | `object` | 与线程相关的[拉取请求](/rest/reference/pulls)。
`thread` | `object` | 受影响的线程。
