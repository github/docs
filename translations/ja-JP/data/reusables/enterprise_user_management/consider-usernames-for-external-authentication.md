---
ms.openlocfilehash: 68778a5aac47ae812ce7fca5219ce8f7e416b1af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145067643"
---
{% data variables.product.product_name %} は、{% ifversion ghec or ghae %}IdP{% elsif ghes %}外部認証プロバイダー{% endif %} からの値を正規化し、{% ifversion ghae %}{% data variables.product.product_name %} で{% elsif ghec %}{% data variables.product.product_location %} の Enterprise で{% elsif ghes %}{% data variables.product.product_location %} で{% endif %}、新しい個人アカウントごとにユーザー名を判断します。
