---
title: Enterprise 内の個人用アクセス トークンに対するポリシーの適用
intro: 'Enterprise 所有者は、{% data variables.product.pat_v2 %} と {% data variables.product.pat_v1_plural %} を許可するかどうかを制御することができ、{% data variables.product.pat_v2 %} に対する承認を要求できます。'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
ms.openlocfilehash: 6252f7ac67fe77cbe20ab85ff2cbd6f04ac17905
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107006'
---
{% note %}

**注**: {% data reusables.user-settings.pat-v2-beta %}

ベータ期間中、Enterprise は {% data variables.product.pat_v2 %} にオプトインする必要があります。 Enterprise がまだオプトインしていない場合は、次の手順のようにすると、オプトインとポリシーの設定のダイアログが表示されます。

Enterprise が {% data variables.product.pat_v2 %} にオプトインしていない場合でも、Enterprise が所有する Organization はオプトインできます。 {% data variables.product.prodname_emus %} を含むすべてのユーザーは、Enterprise が {% data variables.product.pat_v2 %} にオプトインしていない場合でも、ユーザーが所有するリソース (自分のアカウントで作成されたリポジトリなど) にアクセスできる {% data variables.product.pat_v2 %} を作成できます。

{% endnote %}

## {% data variables.product.pat_v2 %} によるアクセスの制限

Enterprise 所有者は、{% data variables.product.pat_v2 %} が、Enterprise が所有するプライベート リソースと内部リソースにアクセスできないようにすることができます。 {% data variables.product.pat_v2_caps %} では引き続き Organization 内のパブリック リソースにアクセスすることができます。 この設定による制御対象は、{% data variables.product.pat_v2 %} によるアクセスのみであり、{% data variables.product.pat_v1_plural %} は異なります。 {% data variables.product.pat_v1_plural %} によるアクセスの制限について詳しくは、このページの「[{% data variables.product.pat_v1_plural %} によるアクセスの制限](#restricting-access-by-personal-access-tokens-classic)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. {% octicon "law" aria-label="The law icon" %} **[ポリシー]** で、 **[Organization]** をクリックします。
1. **[{% data variables.product.pat_v2 %} 経由のアクセスを制限する]** で、ニーズを満たすオプションを選びます。
   - **Organization によるアクセス要件の構成を許可する**: Enterprise が所有する各 Organization は、{% data variables.product.pat_v2 %} でアクセスを制限するかどうかを決定できます。
   - **{% data variables.product.pat_v2 %} を介したアクセスを制限する**: {% data variables.product.pat_v2_caps %} は、Enterprise が所有する Organization にアクセスできません。 {% data variables.product.pat_v2 %} によって作成された SSH キーは引き続き機能します。 Organization は、この設定をオーバーライドできません。
   - **{% data variables.product.pat_v2 %} を介したアクセスを許可する**: {% data variables.product.pat_v2_caps %} は、Enterprise が所有する Organization にアクセスできます。 Organization は、この設定をオーバーライドできません。
1. **[保存]** をクリックします。

## {% data variables.product.pat_v2 %} の承認ポリシーを適用する

Enterprise 所有者は、Enterprise が所有するすべての Organization が、Organization にアクセスできる各 {% data variables.product.pat_v2 %} を承認する必要があることを要求できます。 {% data variables.product.pat_v2_caps %} は、Organization 内のパブリック リソースを承認なしで読み取ることができます。 反対に、Enterprise 所有者は、{% data variables.product.pat_v2 %} が事前の承認なしに Enterprise 内の Organization にアクセスすることを許可できます。 Enterprise 所有者は、Enterprise 内の各 Organization が独自の承認設定を選べるようにすることもできます。

{% note %}

**注**: 承認の対象となるのは {% data variables.product.pat_v2 %} だけであり、{% data variables.product.pat_v1_plural %} はなりません。 Organization または Enterprise が {% data variables.product.pat_v1_plural %} によるアクセスを制限していない限り、{% data variables.product.pat_v1 %} は事前の承認なしに Organization のリソースにアクセスできます。 {% data variables.product.pat_v1_plural %} の制限について詳しくは、このページの「[{% data variables.product.pat_v1_plural %}によるアクセスの制限](#restricting-access-by-personal-access-tokens-classic)」および「[Organization の {% data variables.product.pat_generic %} ポリシーを設定する](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」を参照してください。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. {% octicon "law" aria-label="The law icon" %} **[ポリシー]** で、 **[Organization]** をクリックします。
1. **[{% data variables.product.pat_v2 %} の承認を要求する]** で、ニーズを満たすオプションを選びます。
   - **承認要件の構成を Organization に許可する**: Enterprise が所有する各 Organization は、Organization にアクセスできる {% data variables.product.pat_v2 %} の承認を要求するかどうかを決定できます。
   - **承認フローの使用を Organization に要求する**: Enterprise が所有するすべての Organization は、Organization にアクセスできる各 {% data variables.product.pat_v2 %} を承認する必要があります。 Organization 所有者によって作成された {% data variables.product.pat_v2_caps %} は、承認を必要としません。 Organization は、この設定をオーバーライドできません。
   - **すべての Organization で承認フローを無効にする**: Organization のメンバーによって作成された {% data variables.product.pat_v2_caps %} は、事前の承認なしに Enterprise が所有する Organization にアクセスできます。 Organization は、この設定をオーバーライドできません。
1. **[保存]** をクリックします。

## {% data variables.product.pat_v1_plural %} によるアクセスの制限

Enterprise 所有者は、{% data variables.product.pat_v1_plural %} が Enterprise が所有する Enterprise および Organization にアクセスできないようにすることができます。 {% data variables.product.pat_v1_caps_plural %} では引き続き Organization 内のパブリック リソースにアクセスすることができます。 この設定による制御対象は、{% data variables.product.pat_v1_plural %} によるアクセスのみであり、{% data variables.product.pat_v2 %} はそうではありません。 {% data variables.product.pat_v2 %} によるアクセスの制限について詳しくは、このページの「[{% data variables.product.pat_v2 %} によるアクセスの制限](#restricting-access-by-fine-grained-personal-access-tokens)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. {% octicon "law" aria-label="The law icon" %} **[ポリシー]** で、 **[Organization]** をクリックします。
1. **[{% data variables.product.pat_v1_plural %} による Organization へのアクセスを制限する]** で、ニーズを満たすオプションを選びます。
   - **Organization による {% data variables.product.pat_v1_plural %} アクセス要件の構成を許可する**: Enterprise が所有する各 Organization は、{% data variables.product.pat_v1_plural %} でアクセスを制限するかどうかを決定できます。
   - **{% data variables.product.pat_v1_plural %} を介したアクセスを制限する**: {% data variables.product.pat_v1_caps_plural %} では、Enterprise が所有する Enterprise または Organization にアクセスできません。 {% data variables.product.pat_v1_plural %} によって作成された SSH キーは引き続き機能します。 Organization は、この設定をオーバーライドできません。
   - **{% data variables.product.pat_v1_plural %} を介したアクセスを許可する**: {% data variables.product.pat_v1_caps_plural %} で、Enterprise が所有する Enterprise および Organization にアクセスできます。 Organization は、この設定をオーバーライドできません。
1. **[保存]** をクリックします。
