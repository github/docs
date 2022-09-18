---
ms.openlocfilehash: 6d9406bf1e4b268122142416f69c62e8f55337fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147423674"
---
{% data variables.product.prodname_projects_v2 %} 包含内置工作流，该工作流可用于根据某些事件更新项的状态。 例如，可以在项添加到项目时自动将状态设置为“待办”，或者在问题关闭时将状态设置为“完成” 。

项目初始化时，默认启用两个工作流：当项目中的问题或拉取请求已关闭时，其状态设置为“完成”，当项目中的拉取请求已合并时，其状态设置为“完成” 。
