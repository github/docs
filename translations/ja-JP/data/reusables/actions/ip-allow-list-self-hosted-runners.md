---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180125"
---
{% ifversion ghae %} セルフホスト ランナーを {% data variables.product.prodname_dotcom %} と通信できるようにするためには、セルフホスト ランナーの IP アドレスもしくは IP アドレスの範囲を IP 許可リストに追加してください。 詳細については、「[許可 IP アドレスの追加する](#adding-an-allowed-ip-address)」を参照してください。
{% else %} {% warning %}

**警告**: IP 許可リストを使用し、{% data variables.product.prodname_actions %} も使用したい場合は、セルフホステッド ランナー {% ifversion actions-hosted-runners %}、または静的 IP アドレス範囲を持つより大きな {% data variables.product.prodname_dotcom %} ホスト型ランナーを使用する必要があります{% endif %}。 詳しくは、[独自のランナーのホスティング](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners){% ifversion actions-hosted-runners %}に関するページまたは「[より大きなランナーの使用](/actions/using-github-hosted-runners/using-larger-runners)」を参照してください{% endif %}。

{% endwarning %}

セルフホスト型の {% ifversion actions-hosted-runners %} またはより大きなホスト型の{% endif %}ランナーが {% data variables.product.prodname_dotcom %} と通信できるようにするには、該当するランナーの IP アドレスまたは IP アドレス範囲を Enterprise 用に構成した IP 許可リストに追加します。 {% endif %}
