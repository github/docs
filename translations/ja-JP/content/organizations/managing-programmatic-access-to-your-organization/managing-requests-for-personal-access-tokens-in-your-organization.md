---
title: Organization で個人用アクセス トークンの要求を管理する
intro: 'Organization の所有者は、Organization へのアクセスを要求する {% data variables.product.pat_v2 %} を承認または拒否できます。'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: 3925b74ad29268ec80eca8dd5355c58987e52843
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131386'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## {% data variables.product.pat_v2 %} の要求について

Organization が所有するリソースにアクセスするために Organization のメンバーが {% data variables.product.pat_v2 %} を作成するとき、Organization による {% data variables.product.pat_v2 %} の承認が必要な場合は、Organization の所有者がトークンを承認してからでないと、パブリックではないリソースへのアクセスにそのトークンを使うことはできません。 詳しくは、「[Organization の {% data variables.product.pat_generic %} ポリシーを設定する](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」をご覧ください。

{% data variables.product.company_short %} は、承認を待っているすべての {% data variables.product.pat_v2 %} について、Organization の所有者に毎日メールで通知します。 トークンが拒否または承認されると、トークンを作成したユーザーはメール通知を受け取ります。

{% note %}

**注**: 承認の対象となるのは {% data variables.product.pat_v2 %} だけであり、{% data variables.product.pat_v1_plural %} はなりません。 Organization が {% data variables.product.pat_v1_plural %} によるアクセスを制限していない限り、{% data variables.product.pat_v1 %} は事前の承認なしに Organization のリソースにアクセスできます。 詳しくは、「[Organization の {% data variables.product.pat_generic %} ポリシーを設定する](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」をご覧ください。

{% endnote %}

## {% data variables.product.pat_v2 %} の要求を管理する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}]** の下にある **[保留中の要求]** をクリックします。 Organization の承認を待っているトークンがある場合、それらが表示されます。
1. 承認または拒否するトークンの名前をクリックします。
1. トークンが要求しているアクセスとアクセス許可を確認します。
1. トークンに Organization へのアクセスを許可するには、 **[承認]** をクリックします。 トークンに Organization へのアクセスを禁止するには、 **[拒否]** をクリックします。
1. 要求を拒否した場合は、必要に応じて、確認ボックスにトークンを拒否した理由を入力します。 この理由は、トークンの所有者に送信される通知で共有されます。 その後、 **[拒否]** をクリックします。

または、複数のトークンを一度に承認または拒否することもできます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}]** の下にある **[保留中の要求]** をクリックします。 Organization の承認を待っているトークンがある場合、それらが表示されます。
{% data reusables.user-settings.patv2-filters %}
1. 承認または拒否する各トークンを選びます。
1. **[選択した要求の処理]** ドロップダウン メニューを選んで、 **[承認]** または **[拒否]** をクリックします。
