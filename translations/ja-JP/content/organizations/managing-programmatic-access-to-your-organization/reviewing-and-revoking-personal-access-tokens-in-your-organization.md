---
title: Organization での個人用アクセス トークンの確認と取り消し
intro: 'Organization 所有者は、Organization にアクセスできる {% data variables.product.pat_v2 %} を確認できます。 また、特定の {% data variables.product.pat_v2 %} のアクセスを取り消すこともできます。'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: b45401441473f892ba61cf199852588e2a3b3d67
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131378'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## {% data variables.product.pat_v2 %} の確認と取り消しについて

Organization 所有者は、Organization が所有するリソースにアクセスできる {% data variables.product.pat_v2 %} をすべて表示できます。 Organization 所有者は、{% data variables.product.pat_v2 %} によるアクセスを取り消すこともできます。 {% data variables.product.pat_v2 %} が取り消された場合、トークンによって作成された SSH キーは機能し続け、トークンでは引き続き Organization 内のパブリック リソースを読み取ることができます。

トークンが取り消されると、そのトークンを作成したユーザーはメール通知を受け取ります。

Organization 所有者は、{% data variables.product.pat_v1_plural %} ではなく、{% data variables.product.pat_v2 %} のみを表示および取り消すことができます。 Organization {% ifversion ghec or ghes or ghae %}または Enterprise {% endif %}が {% data variables.product.pat_v1_plural %} によるアクセスを制限していない限り、{% data variables.product.pat_v1 %} はトークンの有効期限が切れるまで Organization リソースにアクセスできます。 {% data variables.product.pat_v1_plural %} によるアクセスの制限について詳しくは、「[Organization に対する {% data variables.product.pat_generic %} ポリシーの設定](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」{% ifversion ghec or ghes or ghae %}と「[Enterprise での {% data variables.product.pat_generic %} に対するポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)」{% endif %}を参照してください。

{% ifversion ghec %} Organization 所有者は、Organization で SAML シングル サインオンが必要な場合、{% data variables.product.pat_v1_plural %} を表示および取り消すこともできます。 詳しくは、「[Enterprise へのユーザーの SAML アクセスの表示および管理](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials)」を参照してください。 REST API を使用してこれを行う方法について詳しくは、「[Organization の SAML SSO 認証の一覧表示](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization)」および「[Organization の SAML SSO 認証の削除](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization)」を参照してください。{% endif %}

## {% data variables.product.pat_v2 %} の確認と取り消し

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}]** の下にある **[アクティブ トークン]** をクリックします。 Organization にアクセスできる {% data variables.product.pat_v2 %} が表示されます。
1. 確認または取り消すトークンの名前をクリックします。
1. トークンのアクセス許可と権限を確認します。
1. トークンによる Organization へのアクセスを取り消すには、 **[取り消し]** をクリックします。

一度に複数のトークンを取り消すこともできます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}]** の下にある **[アクティブ トークン]** をクリックします。 Organization にアクセスできる {% data variables.product.pat_v2 %} が表示されます。
{% data reusables.user-settings.patv2-filters %}
1. 取り消す各トークンを選びます。
1. **[選択されたトークン]** ドロップダウン メニューを選び、 **[取り消し]** をクリックします。
