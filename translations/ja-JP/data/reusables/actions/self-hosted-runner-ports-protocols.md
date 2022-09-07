---
ms.openlocfilehash: 51b563029cedae82f02da31a5d6473274efb8218
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145089127"
---
{% ifversion ghes or ghae %} セルフホステッド ランナーと {% data variables.product.product_name %} の接続は、{% ifversion ghes %}HTTP (ポート 80) または {% endif %}HTTPS (ポート 443) を経由します。 {% ifversion ghes %}HTTPS 経由で確実に接続を行うには、{% data variables.product.product_location %} に対して TLS を構成します。 詳細については、「[TLS の構成](/admin/configuration/configuring-network-settings/configuring-tls)」を参照してください。{% endif %} {% endif %}
