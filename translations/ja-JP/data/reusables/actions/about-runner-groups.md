---
ms.openlocfilehash: 8492ebc0962837c6f748fe30dbca08f529c353fc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109090"
---
{% ifversion fpt %} {% note %}

**メモ:** すべての Organization には、単一の既定のランナー グループがあります。 追加のランナー グループを作成して管理できるのは、Enterprise アカウントと、Enterprise アカウントが所有する Organization のみです。

{% endnote %}

ランナー グループは、ランナーへのアクセスの制御に使います。 Organization の管理者は、Organization 内のどのリポジトリがランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。

{% data variables.product.prodname_ghe_cloud %} を使用する場合は、追加のランナー グループを作成できます。エンタープライズ管理者は、そのランナー グループにアクセスできるエンタープライズ内の組織をコントロールする、アクセス ポリシーを設定できます。また、組織の管理者は、エンタープライズ ランナー グループに追加の詳細なリポジトリ アクセス ポリシーを割り当てることができます。 {% endif -%} {% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

新しいランナーが作成されると、それらは自動的にデフォルトグループに割り当てられます。 ランナーは一度に1つのグループにのみ参加できます。 ランナーはデフォルトグループから別のグループに移動できます。 詳しくは、「[ランナーをグループに移動する](#moving-a-runner-to-a-group)」をご覧ください。

{% endif %}
