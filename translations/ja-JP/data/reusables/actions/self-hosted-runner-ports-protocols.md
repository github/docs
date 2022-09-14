---
ms.openlocfilehash: 51b563029cedae82f02da31a5d6473274efb8218
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089127"
---
{% ifversion ghes or ghae %} セルフホステッド ランナーと {% data variables.product.product_name %} の接続は、{% ifversion ghes %}HTTP (ポート 80) または {% endif %}HTTPS (ポート 443) を経由します。 {% ifversion ghes %}HTTPS 経由で確実に接続を行うには、{% data variables.product.product_location %} に対して TLS を構成します。 詳細については、「[TLS の構成](/admin/configuration/configuring-network-settings/configuring-tls)」を参照してください。{% endif %} {% endif %}
