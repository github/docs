---
ms.openlocfilehash: 3492de2cd163b4bbb59b912c17d152b7d2af5c68
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098330"
---
### 基于操作搜索

使用 `operation` 限定符将操作限制为特定类型的操作。 例如：

  * `operation:access` 查找访问过资源的所有事件。
  * `operation:authentication` 查找执行过身份验证事件的所有事件。
  * `operation:create` 查找创建过资源的所有事件。
  * `operation:modify` 查找修改过现有资源的所有事件。
  * `operation:remove` 查找删除过现有资源的所有事件。
  * `operation:restore` 查找还原过现有资源的所有事件。
  * `operation:transfer` 查找传输过现有资源的所有事件。
