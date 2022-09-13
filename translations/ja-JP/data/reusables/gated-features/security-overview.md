---
ms.openlocfilehash: d358c88fda2590864a15c4cd3eb2f0bfb39cd78d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147525706"
---
{% ifversion fpt %} セキュリティの概要は、{% data variables.product.prodname_enterprise %} を使用している組織が利用できます。 詳細については、「[GitHub の製品](/articles/githubs-products)」を参照してください。
{% elsif security-overview-displayed-alerts %} すべての組織とエンタープライズにセキュリティの概要があります。 {% ifversion ghae %}ベータ リリースの間は無料である {% endif %}{% data variables.product.prodname_GH_advanced_security %} を使用しているなら、追加情報が表示されます。 {% data reusables.advanced-security.more-info-ghas %} {% elsif ghes < 3.7 %} {% data variables.product.prodname_GH_advanced_security %} のライセンスを持っているなら、ご自分の組織のセキュリティの概要が利用できます。 {% data reusables.advanced-security.more-info-ghas %} {% elsif ghae %} {% data variables.product.prodname_GH_advanced_security %} (ベータ リリースの間は無料) を使用しているなら、ご自分のエンタープライズや組織のセキュリティの概要が利用できます。 {% data reusables.advanced-security.more-info-ghas %} {% endif %}
