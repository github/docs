---
ms.openlocfilehash: 3600943afa41941183272b47ca9be2e4eecbae78
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764249"
---
{% comment %} 

この手順にかかわらず、セキュリティ上の忠告は常に含めてください。 これは、コンテキストがセルフホステッド ランナーか、より大きなランナーであるかに応じて、次のいずれかとなります。

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Enterprise のランナー グループの場合、Enterprise 内のどの Organization がランナー グループにアクセスできるかを変更{% ifversion restrict-groups-to-workflows %}したり、ランナー グループで実行できるワークフローを制限したり{% endif %}できます。 Organization のランナー グループの場合、Organization 内のどのリポジトリがランナー グループにアクセスできるかを変更{% ifversion restrict-groups-to-workflows %}したり、ランナー グループで実行できるワークフローを制限したり{% endif %}できます。

### ランナー グループにアクセスできる組織またはリポジトリを変更する

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. エンタープライズ内のランナー グループの場合、 **[組織のアクセス]** で、ランナー グループにアクセスできる組織を変更します。 組織内のランナー グループの場合、 **[リポジトリ アクセス]** で、ランナー グループにアクセスできるリポジトリを変更します。

{% elsif ghae or ghes < 3.4 %} {% data reusables.actions.configure-runner-group-access %} {% endif %}

{% ifversion restrict-groups-to-workflows %}
### ランナー グループにアクセスできるワークフローの変更
選択したワークフローまたはすべてのワークフローを実行するようにランナー グループを構成できます。 たとえば、この設定を使って、ランナーに格納されているシークレットを保護したり、ランナー グループが特定の再利用可能なワークフローのみを実行するように制限してデプロイ ワークフローを標準化したりすることができます。 エンタープライズによって共有された組織のランナー グループを構成している場合、この設定をオーバーライドできません。 {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. **[ワークフロー アクセス]** で、ドロップダウン メニューを選択し、 **[選択したワークフロー]** をクリックします。
1. {% octicon "gear" aria-label="the gear icon" %} をクリックします。
1. ランナー グループにアクセスできるワークフローのコンマ区切りの一覧を入力します。 リポジトリ名と所有者を含む完全なパスを使用します。 ワークフローをブランチ、タグ、または完全 SHA にピン留めします。 (例: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`)。

   選択したワークフロー内で直接定義されたジョブのみがランナー グループにアクセスできます。
   
   組織所有のランナー グループは、エンタープライズ内の別の組織からワークフローにアクセスできません。代わりに、エンタープライズ所有のランナー グループを作成する必要があります。

1. **[保存]** をクリックします。

{% endif %}