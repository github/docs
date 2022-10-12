---
title: エンタープライズへの組織の追加
intro: Enterprise 内で管理するために、新しい Organization を作成したり、既存の Organization を招待したりできます。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 09e4fa9c1b33f50e35f6088eb671b90df4a5eda3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573354'
---
## Enterprise アカウントへの Organization の追加について

エンタープライズ アカウントは、組織を所有できます。 エンタープライズのメンバーは、組織内の関連プロジェクト間で共同作業を行うことができます。 詳細については、「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」を参照してください。

Enterprise アカウントに新しい Organization を追加することができます。 {% data variables.product.prodname_emus %} を使用しない場合は、{% data variables.product.product_location %} の既存の Organization を Enterprise に追加できます。 {% data variables.product.prodname_emu_enterprise %} から別の Enterprise に既存の Organization を追加することはできません。

{% data reusables.enterprise.create-an-enterprise-account %} 詳細については、「[Enterprise アカウントの作成](/admin/overview/creating-an-enterprise-account)」を参照してください。

既存の Organization を Enterprise に追加した後も、メンバーは Organization のリソースに同じ URL で引き続きアクセスでき、次の変更が適用されます。

- Organization のメンバーは Enterprise のメンバーになり、{% data variables.product.company_short %} は Organization の使用状況に対して Enterprise アカウントに請求します。 Enterprise アカウントに、新しいメンバーに対応できる十分なライセンスがあることを確認する必要があります。 詳しくは、「[Enterprise の支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」をご覧ください。
- Enterprise 所有者は、Organization 内で自分の役割を管理できます。 詳細については、「[Enterprise の Organization を管理する](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)」を参照してください。
- Enterprise に適用されるすべてのポリシーは、Organization にも適用されます。 詳しくは、「[Enterprise ポリシーについて](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)」を参照してください。
- Enterprise アカウントに対して SAML SSO が構成されている場合、Enterprise の SAML 構成が Organization にも適用されます。 Organization が SAML SSO を使用している場合は、Enterprise アカウントの構成が Organization の構成に置き換えられます。 SCIM は Enterprise アカウントでは使用できないため、SCIM は Organization で無効になります。 詳しくは、「[Enterprise 向けの SAML シングル サインオンを構成する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)」および「[Organization から Enterprise アカウントへの SAML 構成の切り替え](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)」を参照してください。
- SAML SSO が Organization に対して構成されている場合、Organization のリソースへのアクセスが承認されたメンバーの既存の個人用アクセス トークン (PAT) または SSH キーは、同じリソースへのアクセスが承認されます。 Enterprise が所有する追加の Organization にアクセスするには、メンバーが PAT またはキーを承認する必要があります。 詳細については、「[SAML シングル サインオンで利用するために個人アクセス トークンを承認する](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」および「[SAML シングル サインオンで利用するために SSH キーを承認する](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。
- Organization が {% data variables.product.prodname_github_connect %} を使って {% data variables.product.prodname_ghe_server %} または {% data variables.product.prodname_ghe_managed %} に接続されていた場合、Organization を Enterprise に追加しても、接続は更新されません。 {% data variables.product.prodname_github_connect %} 機能は Organization では機能しなくなります。 {% data variables.product.prodname_github_connect %} を引き続き使用するには、機能を無効にしてもう一度有効にする必要があります。 詳細については、次の記事を参照してください。

  - {% data variables.product.prodname_ghe_server %} ドキュメントの [[{% data variables.product.prodname_github_connect %} の管理]](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)
  - {% data variables.product.prodname_ghe_managed %} ドキュメントの [[{% data variables.product.prodname_github_connect %} の管理]](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)
- Organization が課金された {% data variables.product.prodname_marketplace %} アプリを使用した場合、Organization は引き続きアプリを使用できますが、ベンダーに直接支払う必要があります。 詳しくは、アプリのベンダーにお問い合わせください。

## Enterprise アカウント内で Organization を作成する

Enterprise アカウント設定内で作成した新しい Organization は、Enterprise アカウントの {% data variables.product.prodname_ghe_cloud %} プランに含められます。

Enterprise アカウントにより所有される Organization を作成した Enterprise のオーナーは、自動的に Organization のオーナーになります。 組織の所有者の詳細については、「[組織内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
2. **[組織]** タブの、組織の一覧の上にある **[新しい組織]** をクリックします。
  ![[新しい組織] ボタン](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. [Organization name] の下に Organization の名前を入力します。
  ![新しい組織名を入力するフィールド](/assets/images/help/business-accounts/new-organization-name-field.png)
4. **[Create organization]\(組織の作成\)** をクリックします。
5. [所有者の招待] の下で、組織の所有者にするよう招待したい人のユーザー名を入力し、 **[招待]** をクリックします。
  ![組織の所有者の検索フィールドと招待ボタン](/assets/images/help/business-accounts/invite-org-owner.png)
6. **[完了]** をクリックします。

## 組織を招待してエンタープライズ アカウントに参加させる

エンタープライズ所有者は、既存の組織を招待してエンタープライズ アカウントに参加させることができます。 招待する組織が既に別のエンタープライズによって所有されている場合、前のエンタープライズが組織の所有権を放棄するまで、招待を発行することはできません。 詳細については、「[エンタープライズからの組織の削除](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
2. **[組織]** タブの、組織の一覧の上にある **[組織の招待]** をクリックします。
![組織を招待する](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. [組織名] で、招待する組織の名前を入力し、ドロップダウン リストに表示されたら選択します。
![組織を検索する](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. **[組織の招待]** をクリックします。
5. 組織の所有者は、エンタープライズに参加するよう招待する電子メールを受け取ります。 プロセスを続行するには、少なくとも 1 人の所有者が招待に同意する必要があります。 招待は、所有者が承認する前にいつでもキャンセルまたは再送信できます。
![キャンセルまたは再送信](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. 組織の所有者が招待を承認すると、保留中の招待の一覧でその状態を表示できます。
![保留中の招待](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. **[承認]** をクリックして転送を完了するか、 **[キャンセル]** をクリックして取り消します。
![招待を承認する](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
