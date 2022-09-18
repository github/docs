---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084309"
---
密钥 | 类型 | 说明
----|------|------------
`action` | `string` | 执行的操作内容. 可以是以下选项之一：<ul><li>`created` - 有人安装 {% data variables.product.prodname_github_app %}。</li><li>`deleted` - 有人卸载 {% data variables.product.prodname_github_app %}</li><li>`suspend` - 有人挂起 {% data variables.product.prodname_github_app %} 安装。</li><li>`unsuspend` - 有人取消挂起 {% data variables.product.prodname_github_app %} 安装。</li><li>`new_permissions_accepted` - 有人接受 {% data variables.product.prodname_github_app %} 安装的新权限。 当 {% data variables.product.prodname_github_app %} 所有者请求新权限时，安装 {% data variables.product.prodname_github_app %} 的人必须接受新权限请求。 </li></ul>
`repositories` | `array` | 安装设施可访问的仓库对象数组。
