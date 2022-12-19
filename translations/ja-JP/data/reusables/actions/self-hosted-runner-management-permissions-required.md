---
ms.openlocfilehash: 324332325762999d6daaf4241ec0f9e291ce98a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067979"
---
セルフホステッド ランナーは、リポジトリまたは Organization のいずれかに配置するか、{% data variables.product.product_location %} の {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %} Enterprise 設定の {% ifversion fpt or ghec %} Enterprise アカウント設定に配置することができます {% endif %}。 セルフホストランナーを管理するには、セルフホストランナーが追加された場所に応じて以下の権限が必要になります。
- **ユーザーのリポジトリ**: リポジトリ オーナーである必要があります。
- **Organization**: Organization オーナーである必要があります。 
- **Organization のリポジトリ**: Organization オーナーまたは、そのリポジトリへの管理者アクセスを持っている必要があります。
{% ifversion ghec %}
- **Enterprise アカウント**: Enterprise オーナーである必要があります。
{% elsif ghes or ghae %}
- **Enterprise**: {% data variables.product.prodname_enterprise %} サイト管理者である必要があります。
{% endif %}
