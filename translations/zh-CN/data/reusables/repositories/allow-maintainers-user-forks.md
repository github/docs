---
ms.openlocfilehash: 3c71b4f4d9bfae794b8325c01d85db55f91c2fa8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882865"
---
1. 在用户拥有的分支中，如果你希望允许对上游存储库具有推送访问权限的任何人更改你的拉取请求，请选择“允许维护员编辑”。

    {% warning %}

    警告：如果你的分支包含 {% data variables.product.prodname_actions %} 工作流，则选项是“允许维护员编辑和访问机密” 。 允许对包含 {% data variables.product.prodname_actions %} 工作流程的复刻分支进行编辑，也会允许维护员编辑复刻的仓库的工作流程，从而可能暴露密码值并允许访问其他分支。

    {% endwarning %}
