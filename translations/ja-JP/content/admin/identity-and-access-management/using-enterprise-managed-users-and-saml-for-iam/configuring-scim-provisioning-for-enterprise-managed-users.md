---
title: エンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
- Accounts
- Enterprise
ms.openlocfilehash: 7bd9d539218492c474f7a530636ac7719ff14f44
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116605"
---
## <a name="about-provisioning-for--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %} のプロビジョニングについて

エンタープライズ メンバーのユーザー アカウントを作成、管理、非アクティブ化するには、{% data variables.product.prodname_emus %} のプロビジョニングを構成する必要があります。 {% data variables.product.prodname_emus %} のプロビジョニングを構成すると、ID プロバイダーの {% data variables.product.prodname_emu_idp_application %} アプリケーションに割り当てられているユーザーは、SCIM を介して {% data variables.product.prodname_dotcom %} の新しいユーザー アカウントとしてプロビジョニングされ、そのユーザーはエンタープライズに追加されます。 

IdP でユーザーの ID に関連付けられている情報を更新すると、IdP によって GitHub.com のユーザーのアカウントが更新されます。 {% data variables.product.prodname_emu_idp_application %} アプリケーションからユーザーの割り当てを解除するか、IdP でユーザーのアカウントを非アクティブ化すると、IdP は {% data variables.product.prodname_dotcom %} と通信して SAML セッションを無効にし、メンバーのアカウントを無効にします。 無効になったアカウントの情報は維持され、それらのユーザー名は、短いコードが追加された元のユーザー名のハッシュに変更されます。 ユーザーを {% data variables.product.prodname_emu_idp_application %} アプリケーションに再割り当てするか、IdP で自分のアカウントを再アクティブ化すると、{% data variables.product.prodname_dotcom %} の {% data variables.product.prodname_managed_user %} アカウントが再アクティブ化され、ユーザー名が復元されます。

IdP 内のグループを使用して、エンタープライズの組織内のチーム メンバーシップを管理できます。これにより、IdP を使用してリポジトリへのアクセスとアクセス許可を構成できます。 詳細については、「[ID プロバイダー グループを使用したチーム メンバーシップの管理](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)」を参照してください。

## <a name="prerequisites"></a>前提条件

{% data variables.product.prodname_emus %} のプロビジョニングを構成する前に、SAML シングル サインオンを構成する必要があります。 詳細については、「[エンタープライズ マネージド ユーザーの SAML シングル サインオンの構成](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)」を参照してください。

## <a name="creating-a-personal-access-token"></a>個人用アクセス トークンの作成

{% data variables.product.prodname_emu_enterprise %} のプロビジョニングを構成するには、セットアップ ユーザーに属する **admin:enterprise** スコープを持つ個人用アクセス トークンが必要です。

{% warning %}

**警告:** トークンの有効期限が切れた場合、またはプロビジョニングされたユーザーがトークンを作成すると、SCIM プロビジョニングが予期せず動作しなくなる可能性があります。 セットアップ ユーザーとしてサインインしているときにトークンを作成し、トークンの有効期限が [有効期限なし] に設定されていることを確認します。

{% endwarning %}

1. ユーザー名 **@<em>SHORT-CODE</em>_admin** を使用して、新しいエンタープライズのセットアップ ユーザーとして {% data variables.product.prodname_dotcom_the_website %} にサインインします。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. **[メモ]** で、トークンにわかりやすい名前を付けます。
   ![トークンの名前を示すスクリーンショット](/assets/images/help/enterprises/emu-pat-name.png)
1. **[有効期限]** ドロップダウン メニューを選択し、 **[有効期限なし]** をクリックします。
   ![トークンの有効期限が [有効期限なし] に設定されているスクリーンショット](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. **[admin:enterprise]** スコープを選択します。
   ![[admin:enterprise] スコープを示すスクリーンショット](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. **[トークンの生成]** をクリックします。
   ![[トークンの生成] ボタン](/assets/images/help/settings/generate_token.png)
1. トークンをクリップボードにコピーするには、{% octicon "paste" aria-label="The copy icon" %} をクリックします。
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens.png)
2. 後で使用するためにトークンを保存するには、パスワード マネージャーに新しいトークンを安全に格納します。

## <a name="configuring-provisioning-for--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %} のプロビジョニングの構成

個人用アクセス トークンを作成して安全に格納した後、ID プロバイダーでプロビジョニングを構成できます。

{% data reusables.scim.emu-scim-rate-limit %}

{% data variables.product.prodname_emu_enterprise %} のユーザーをプロビジョニングするように Azure Active Directory を構成するには、Azure AD ドキュメントの「[チュートリアル: GitHub Enterprise Managed User を構成し、自動ユーザー プロビジョニングに対応させる](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial)」を参照してください。

{% data variables.product.prodname_emu_enterprise %} のユーザーをプロビジョニングするように Okta を構成するには、「[Okta でのエンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)」を参照してください。

