---
ms.openlocfilehash: d9874c3884e3191a0296272fbead8f30b7630e5a
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163813"
---
- **从分支拉取请求运行工作流** - 允许用户使用具有只读权限、没有密码访问权限的 `GITHUB_TOKEN`，从分支拉取请求运行工作流。
- **从拉取请求向工作流发送写入令牌** - 允许来自分支的拉取请求使用具有写入权限的 `GITHUB_TOKEN`。
- 从拉取请求向工作流发送机密 - 使所有机密都可用于拉取请求。{% ifversion actions-private-fork-workflow-approvals %}
- 需要批准拉取请求分支工作流 - 如果工作流在没有写权限的协作者发出的拉取请求上运行，则需要获得具有写权限的人员的批准，然后才能运行。{% endif %}
