---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "146179720"
---
{% data reusables.actions.policy-label-for-select-actions-workflows %} を選択した場合、{% ifversion ghec or ghes or ghae %}エンタープライズ{% else %}組織{% endif %}内のアクション{% ifversion actions-workflow-policy %}および再利用可能なワークフロー{% endif %}が許可され、追加のオプションで、その他の特定のアクション{% ifversion actions-workflow-policy %}や再利用可能なワークフロー{% endif %}も許可されます。 詳細については、「[選択したアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}の実行の許可](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run)」を参照してください。

{% ifversion ghec or fpt %}{% ifversion ghec or ghes or ghae %}エンタープライズ{% else %}組織{% endif %}{% ifversion actions-workflow-policy %}からのみ再利用可能なワークフローと{% else %}に対してローカルの{% endif %}アクションを許可する場合、ポリシーにより {% data variables.product.prodname_dotcom %} で作成したアクションへのすべてのアクセスがブロックされます。 たとえば、[`actions/checkout`](https://github.com/actions/checkout) アクションにはアクセスできません。{% endif %}
