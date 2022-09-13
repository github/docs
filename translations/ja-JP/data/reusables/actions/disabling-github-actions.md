---
ms.openlocfilehash: 3812d31ab730736a7af4ae38c347325f28aeffba
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879151"
---
既定では、{% ifversion ghes or ghae %}{% data variables.product.prodname_actions %} が {% data variables.product.product_location %}上で有効化されると、{% elsif fpt or ghec %}{% data variables.product.prodname_actions %}{% endif %} はすべてのリポジトリと Organization で有効になります。 {% data variables.product.prodname_actions %} を無効にするか、または {% ifversion ghec or ghes or ghae %}Enterprise{% else %}Organization{% endif %} のアクション{% ifversion actions-workflow-policy %}と再生可能なワークフロー{% endif %}に制限することができます。
