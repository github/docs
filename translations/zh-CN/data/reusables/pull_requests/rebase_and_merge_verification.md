---
ms.openlocfilehash: 038896fa537c7cc3ea3fa95e903900a9eb8f3db7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145917059"
---
在拉取请求上使用“变基与合并”时，请务必注意，头分支中的提交将添加到基分支，无需提交签名验证。 使用此选项时，{% data variables.product.prodname_dotcom %} 会使用原始提交的数据和内容创建修改的提交。 这意味着 {% data variables.product.prodname_dotcom %} 未真正创建此提交，因此无法将其签名为通用系统用户。 {% data variables.product.prodname_dotcom %} 无权访问提交者的专用签名密钥，因此无法代表用户对提交进行签名。

解决方法是在本地进行变基和合并，然后将更改推送到拉取请求的基分支。
