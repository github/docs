---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879704"
---
ワークフロー実行は、既定で並列実行される 1 つ以上の `jobs` で構成されます。 ジョブを順番に実行するには、`jobs.<job_id>.needs` キーワードを使用して他のジョブへの依存関係を定義できます。

各ジョブは、`runs-on` で指定されたランナー環境で実行されます。

ワークフローの利用限度内であれば、実行するジョブ数に限度はありません。 詳細については、{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %} がホストするランナーの「[使用量制限と課金](/actions/reference/usage-limits-billing-and-administration)」と{% endif %}セルフホステッド ランナーの使用制限の「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」{% ifversion fpt or ghec or ghes %}{% elsif ghae %}を参照してください。{% endif %}

ワークフロー実行で実行されているジョブの一意識別子を見つける必要がある場合は、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API を使用できます。 詳細については、「[ワークフロー ジョブ](/rest/reference/actions#workflow-jobs)」を参照してください。
