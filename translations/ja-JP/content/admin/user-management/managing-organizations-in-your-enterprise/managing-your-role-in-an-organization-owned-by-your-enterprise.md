---
title: Enterprise によって所有される Organization のロールを管理する
intro: Enterprise によって所有される任意の Organization のメンバーシップを管理し、Organization 内のロールを変更できます。
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage your organization roles
ms.openlocfilehash: e7a95602fe103dcbccb80bc2dfec6a67f8b4b312
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884238'
---
## ロールの管理について

Enterprise によって所有される Organization にメンバーまたは Organization の所有者として参加したり、Organization 内でのロールを変更したり、Organization を離れたりすることができます。

{% ifversion ghec %} {% warning %}

**警告**: Organization が SCIM を使ってユーザーをプロビジョニングしている場合、この方法で Organization に参加すると、意図しない結果が生じることがあります。 詳細については、「[Organization の SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。

{% endwarning %} {% endif %}

Organization 内の他のユーザーのロールを管理する方法については、「[Organization でメンバーシップを管理する](/organizations/managing-membership-in-your-organization)」および「[Organization へのアクセスをロールで管理する](/organizations/managing-peoples-access-to-your-organization-with-roles)」を参照してください。

## Enterprise の設定でロールを管理する

Enterprise アカウントの設定から直接、Enterprise が所有する Organization に参加し、Organization 内でのロールを管理できます。

{% ifversion ghec %}

Organization で SAML シングル サインオン (SSO) が適用されている場合は、Enterprise の設定を使って Organization に参加することはできません。 代わりに、その Organization の ID プロバイダー (IdP) を使って Organization に参加する必要があります。 その後、Enterprise の設定でロールを管理できます。 詳細については、「[SAML SSO を適用している Organization に参加する](#joining-an-organization-that-enforces-saml-sso)」を参照してください。

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. **[Organization]** タブで、ロールを管理したい Organization の右側にある {% octicon "gear" aria-label="The gear icon" %} ドロップダウン メニューを選択して、実行するアクションをクリックします。

   ![Organization の歯車アイコンのドロップダウン メニューのスクリーンショット](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## SAML SSO を適用している Organization に参加する

Organization で SAML SSO が適用されている場合は、Enterprise の設定を使って Organization に参加することはできません。 代わりに、その Organization の ID プロバイダー (IdP) を使って Organization に参加する必要があります。

1. Organization で使われている {% data variables.product.prodname_ghe_cloud %} 用アプリケーションへのアクセス権が、IdP で割り当てられている必要があります。 IdP を自分で構成できない場合は、IdP 管理者に問い合わせてください。
1. SAML SSO を使って Organization に対する認証を行います。

   - Organization で SCIM が使われている場合は、SCIM 統合によって生成された Organization の招待を受け入れます。
   - Organization で SCIM が使われていない場合は、次の URL にアクセスし (ORGANIZATION を Organization の名前に置き換えます)、プロンプトに従って認証を行います。

    `https://github.com/orgs/ORGANIZATION/sso`

Organization に参加した後は、Enterprise の設定を使って、Organization の所有者になるなど、Organization 内でのロールを管理できます。 詳細については、「[Enterprise の設定を使用してロールを管理する](#managing-your-role-with-the-enterprise-settings)」を参照してください。

{% endif %}
