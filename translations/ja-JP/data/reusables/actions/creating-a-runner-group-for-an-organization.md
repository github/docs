---
ms.openlocfilehash: b62a0e5829c03ff7879fda2d714c4a7652d762b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109673"
---
{% comment %} 

この手順にかかわらず、セキュリティ上の忠告は常に含めてください。 これは、コンテキストがセルフホステッド ランナーか、より大きなランナーであるかに応じて、次のいずれかとなります。

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

すべての Organization には、単一の既定のランナー グループがあります。 Enterprise アカウント内の Organization を使うと、追加のグループを作成できます。 Organization の管理者は、個々のリポジトリにランナーグループへのアクセスを許可できます。 REST API を使ってランナー グループを作成する方法について詳しくは、「[セルフホスト ランナー グループ](/rest/reference/actions#self-hosted-runner-groups)」をご覧ください。

ランナーは、作成時に既定のグループに自動的に割り当てられます。一度に 1 つのグループでのみメンバーになることができます。 ランナーはデフォルトグループから作成した任意のグループに移動できます。

グループを作成するときは、ランナー グループにアクセスできるリポジトリ{% ifversion restrict-groups-to-workflows %}とワークフロー{% endif %}が定義されているポリシーを選ぶ必要があります。

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. "ランナー グループ" セクションで、 **[新しいランナー グループ]** をクリックします。
1. ランナー グループの名前を入力します。
 {% data reusables.actions.runner-group-assign-policy-repo %} {% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Organization が所有するランナー グループは、Enterprise 内の別の Organization からのワークフローにはアクセスできません。代わりに、Enterprise が所有するランナー グループを作成する必要があります。{% endif %} {% data reusables.actions.create-runner-group %} {% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. {% ifversion ghes or ghae %}[ランナー] で、{% endif %} **[新規追加]** をクリックし、 **[新しいグループ]** をクリックします。

    ![新しいランナーを追加](/assets/images/help/settings/actions-org-add-runner-group.png)
1. ランナーグループの名前を入力し、リポジトリアクセスのポリシーを割り当てます。

   リポジトリの特定のリストまたは組織内のすべてのリポジトリにアクセス可能なランナー グループを設定できます。{% ifversion ghec or ghes %}既定では、プライベート リポジトリのみがランナー グループ内のランナーにアクセスできますが、これをオーバーライドできます。 エンタープライズによって共有された組織のランナー グループを構成する場合、この設定をオーバーライドすることはできません。{% endif %}
   
   ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. **[グループの保存]** をクリックしてグループを作成し、ポリシーを適用します。
{% endif %}
