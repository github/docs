---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193269"
---
デフォルトでは、アプリケーションを割り当てあるいは割り当て解除したときに、IdPは{% data variables.product.product_name %}と自動的に通信はしません。 {% data variables.product.product_name %}{% ifversion fpt or ghec %}は、{% endif %} のリソースへのアクセスを {% else %} でプロビジョニングします。SAML Just-in-Time (JIT) プロビジョニングを使用してユーザー アカウント が作成され、{% endif %} {% data variables.product.product_name %} 上のリソースが初めて {% ifversion fpt or ghec %} に移動し、IdP を認証してサインインします。 {% data variables.product.product_name %}へのアクセスを許可した際には、ユーザに手動で通知する必要があるかもしれません。そしてオフボーディングの間には、手動で{% data variables.product.product_name %}{% ifversion fpt or ghec %}へのアクセスのプロビジョニングを解除{% else %}上のユーザアカウントの無効化{% endif %}をしなければなりません。

または、SAML JIT プロビジョニングの代わりに、SCIM を使って、IdP でアプリケーションの割り当てまたは割り当てを解除した後、自動的に{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %} のエンタープライズが所有する Organization へのアクセス{% else %}ユーザー アカウント{% endif %}{% ifversion ghec %}をプロビジョニングまたはプロビジョニング解除{% elsif ghae or scim-for-ghes %}を作成または中断し、{% data variables.location.product_location %} へのアクセスを許可または拒否{% endif %}することもできます。{% ifversion scim-for-ghes %}{% data variables.product.product_name %} の SCIM は現在プライベート ベータ版であり、変更される可能性があります。{% endif %}
