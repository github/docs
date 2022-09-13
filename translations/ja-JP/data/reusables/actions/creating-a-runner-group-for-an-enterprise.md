---
ms.openlocfilehash: f49d42aa3fafbdbde2a650f84bc3b48a61e26182
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764241"
---
{% comment %} 

この手順にかかわらず、セキュリティ上の忠告は常に含めてください。 これは、コンテキストがセルフホステッド ランナーか、より大きなランナーであるかに応じて、次のいずれかとなります。

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Enterprise を使うと、ランナーがグループに追加されて、アクセス管理を行うことができます。 Enterprise は、Enterprises アカウント内の特定の Organization {% ifversion restrict-groups-to-workflows %}、または特定のワークフローにアクセス可能なランナーのグループを作成できます{% endif %}。 その後、Organization の所有者は、Enterprise ランナー グループに対し、追加の詳細なリポジトリ{% ifversion restrict-groups-to-workflows %}またはワークフロー{% endif %} アクセス ポリシーを割り当てることができます。 REST API を使ってランナー グループを作成する方法については、[{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups) の Enterprise エンドポイントをご覧ください。

ランナーは、作成時に既定のグループに自動的に割り当てられます。一度に 1 つのグループでのみメンバーになることができます。 登録処理中にランナーを特定のグループに割り当てることも、後でランナーをデフォルトグループからカスタムグループに移動することもできます。

グループを作成するときは、ランナーグループにアクセスできる Organization を定義するポリシーを選択する必要があります。

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. 組織アクセスのポリシーを選択するには、 **[組織のアクセス]** ドロップダウンを選択し、[ポリシー] をクリックします。 組織の特定のリストまたはエンタープライズ内のすべての組織にアクセス可能なランナー グループを設定できます。{% ifversion ghes %}既定では、プライベート リポジトリのみがランナー グループ内のランナーにアクセスできますが、これをオーバーライドできます。{% endif %}

   {%- ifversion ghec or ghes %}

   ![ランナー グループ オプションを追加する](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png){%- elsif ghae %}

   ![ランナー グループ オプションを追加する](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png){%- endif %} {% data reusables.actions.runner-group-assign-policy-workflow %}
1. **[グループの保存]** をクリックしてグループを作成し、ポリシーを適用します。

