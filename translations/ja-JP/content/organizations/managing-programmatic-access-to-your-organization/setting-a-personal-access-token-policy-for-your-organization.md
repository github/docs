---
title: Organization の個人用アクセス トークン ポリシーを設定する
intro: 'Organization 所有者は、{% data variables.product.pat_v2 %} and {% data variables.product.pat_v1_plural %} を許可するかどうかを制御することができ、{% data variables.product.pat_v2 %} に対する承認を要求できます。'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106470'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## {% data variables.product.pat_v2 %} によるアクセスの制限

Organization 所有者は、Organization が所有するリソースに {% data variables.product.pat_v2 %} がアクセスできないようにすることができます。 {% data variables.product.pat_v2_caps %} では引き続き Organization 内のパブリック リソースを読み取ることができます。 この設定による制御対象は、{% data variables.product.pat_v2 %} によるアクセスのみであり、{% data variables.product.pat_v1_plural %} はそうではありません。 {% data variables.product.pat_v1_plural %} によるアクセスの制限について詳しくは、このページの「[{% data variables.product.pat_v1_plural %} によるアクセスの制限](#restricting-access-by-personal-access-tokens-classic)」を参照してください。

{% ifversion ghec or ghes or ghae %} Organization が Enterprise によって所有されていて、Enterprise 所有者が {% data variables.product.pat_v2 %} によるアクセスを制限している場合、Organization 内のポリシーをオーバーライドすることはできません。 詳しくは、「[Enterprise での {% data variables.product.pat_generic %} のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)」を参照してください。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}]** の下にある **[設定]** をクリックします。
1. **[{% data variables.product.pat_v2_caps %}]** で、ニーズを満たすオプションを選びます。
   - **{% data variables.product.pat_v2 %} を介したアクセスを許可する**: {% data variables.product.pat_v2_caps %} では、Organization が所有するリソースにアクセスできます。
   - **{% data variables.product.pat_v2 %} を介したアクセスを制限する**: {% data variables.product.pat_v2_caps %} では、Organization が所有するリソースにアクセスできません。 {% data variables.product.pat_v2 %} によって作成された SSH キーは引き続き機能します。
1. **[保存]** をクリックします。

## {% data variables.product.pat_v2 %} の承認ポリシーを適用する

Organization 所有者は、Organization にアクセスできる {% data variables.product.pat_v2 %} ごとに承認を要求できます。 {% data variables.product.pat_v2_caps %} は、Organization 内のパブリック リソースを承認なしで読み取ることができます。 Organization 所有者によって作成された {% data variables.product.pat_v2_caps %} は、承認を必要としません。

{% ifversion ghec or ghes or ghae %} Organization が Enterprise によって所有されていて、その Enterprise 所有者が {% data variables.product.pat_v2 %} の承認ポリシーを設定している場合、Organization 内のポリシーをオーバーライドすることはできません。 詳しくは、「[Enterprise での {% data variables.product.pat_generic %} のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)」を参照してください。{% endif %}

{% note %}

**注**: 承認の対象となるのは {% data variables.product.pat_v2 %} だけであり、{% data variables.product.pat_v1_plural %} はなりません。 Organization が {% data variables.product.pat_v1_plural %} によるアクセスを制限していない限り、{% data variables.product.pat_v1 %} は事前の承認なしに Organization のリソースにアクセスできます。 詳しくは、このページの「[{% data variables.product.pat_v1_plural %} によるアクセスの制限](#restricting-access-by-personal-access-tokens-classic)」を参照してください。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}]** の下にある **[設定]** をクリックします。
1. **[{% data variables.product.pat_v2 %} の承認を要求する]** で、ニーズを満たすオプションを選びます。
   - **管理者の承認が必要**: Organization 所有者は、Organization にアクセスできる各 {% data variables.product.pat_v2 %} を承認する必要があります。 Organization 所有者によって作成された {% data variables.product.pat_v2_caps %} は、承認を必要としません。
   - **管理者の承認を必要としない**: Organization のメンバーによって作成された {% data variables.product.pat_v2_caps %} を使用すると、事前の承認なしに Organization 内のリソースにアクセスできます。
1. **[保存]** をクリックします。

## {% data variables.product.pat_v1_plural %} によるアクセスの制限

Organization 所有者は、Organization が所有するリソースに {% data variables.product.pat_v1_plural %} がアクセスできないようにすることができます。 {% data variables.product.pat_v1_caps_plural %} では引き続き Organization 内のパブリック リソースを読み取ることができます。 この設定による制御対象は、{% data variables.product.pat_v1_plural %} によるアクセスのみであり、{% data variables.product.pat_v2 %} はそうではありません。 {% data variables.product.pat_v2 %} によるアクセスの制限について詳しくは、このページの「[{% data variables.product.pat_v2 %} によるアクセスの制限](#restricting-access-by-fine-grained-personal-access-tokens)」を参照してください。

{% ifversion ghec or ghes or ghae %} Organization が Enterprise によって所有されていて、Enterprise 所有者が {% data variables.product.pat_v1_plural %} によるアクセスを制限している場合、Organization 内のポリシーをオーバーライドすることはできません。 詳しくは、「[Enterprise での {% data variables.product.pat_generic %} のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)」を参照してください。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}]** の下にある **[設定]** をクリックします。
1. **[{% data variables.product.pat_v1_caps %}]** で、ニーズを満たすオプションを選びます。
   - **{% data variables.product.pat_v1_plural %} を介したアクセスを許可する**: {% data variables.product.pat_v1_caps_plural %} では、Organization が所有するリソースにアクセスできます。
   - **{% data variables.product.pat_v1_plural %} を介したアクセスを制限する**: {% data variables.product.pat_v1_caps_plural %} では、Organization が所有するリソースにアクセスできません。 {% data variables.product.pat_v1_plural %} によって作成された SSH キーは引き続き機能します。
1. **[保存]** をクリックします。
