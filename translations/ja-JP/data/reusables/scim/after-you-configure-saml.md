---
ms.openlocfilehash: cfe1441d8807b616dae5499c5f1fb01316364c5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130400"
---
デフォルトでは、アプリケーションを割り当てあるいは割り当て解除したときに、IdPは{% data variables.product.product_name %}と自動的に通信はしません。 {% data variables.product.product_name %}{% ifversion fpt or ghec %}は、{% endif %} のリソースへのアクセスを {% else %} でプロビジョニングします。SAML Just-in-Time (JIT) プロビジョニングを使用してユーザー アカウント が作成され、{% endif %} {% data variables.product.product_name %} 上のリソースが初めて {% ifversion fpt or ghec %} に移動し、IdP を認証してサインインします。 {% data variables.product.product_name %}へのアクセスを許可した際には、ユーザに手動で通知する必要があるかもしれません。そしてオフボーディングの間には、手動で{% data variables.product.product_name %}{% ifversion fpt or ghec %}へのアクセスのプロビジョニングを解除{% else %}上のユーザアカウントの無効化{% endif %}をしなければなりません。 IdP 上でアプリケーションを割り当てもしくは割り当て解除する際には、SCIM を使って自動的に{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}上の Enterprise が所有している Organization へのアクセスを{% else %}{% data variables.product.product_name %}のユーザー アカウントとアクセスを{% endif %}{% ifversion ghec %}プロビジョニングおよびプロビジョニング解除{% elsif ghae %}作成または一時停止{% endif %}できます。
