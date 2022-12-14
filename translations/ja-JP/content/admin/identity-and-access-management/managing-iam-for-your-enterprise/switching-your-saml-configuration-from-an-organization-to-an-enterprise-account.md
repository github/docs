---
title: 組織からエンタープライズ アカウントへの SAML 構成の切り替え
intro: Learn special considerations and best practices for replacing an organization-level SAML configuration with an enterprise-level SAML configuration.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
- Authentication
- Enterprise
- Organizations
type: how_to
shortTitle: Switching from organization
redirect_from:
- /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
- /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
ms.openlocfilehash: 5b55f79d2e1fe91d106623b4902f3cc15871a2f3
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141519554"
---
## <a name="about-saml-single-sign-on-for-enterprise-accounts"></a>Enterprise アカウントの SAML シングルサインオンについて

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %} 

組織レベルで SAML SSO を構成する場合は、IdP で一意の SSO テナントを使用して各組織を構成する必要があります。つまり、メンバーは、正常に認証が行われた組織ごとに、一意の SAML ID レコードに関連付けられます。 代わりにエンタープライズ アカウントに SAML SSO を構成した場合、各エンタープライズ メンバーは、エンタープライズ アカウントが所有するすべての組織に使用される 1 つの SAML ID を持ちます。

エンタープライズ アカウントの SAML SSO を構成すると、新しい構成によって、エンタープライズ アカウントが所有する組織の既存の SAML SSO 構成がオーバーライドされます。

エンタープライズ所有者がエンタープライズ アカウントに対して SAML を有効にした場合、エンタープライズ メンバーには通知されません。 SAML SSO が組織レベルで以前に適用されていた場合、組織のリソースに直接移動するときにメンバーに大きな違いを見せないようにする必要があります。 メンバーは引き続き SAML 経由で認証するように求められます。 メンバーが IdP ダッシュボードを使用して組織のリソースに移動する場合は、組織レベルのアプリの古いタイルではなく、エンタープライズ レベルのアプリの新しいタイルをクリックする必要があります。 その後、メンバーは移動先の組織を選択できるようになります。 

組織に対して以前に承認された個人用アクセス トークン (PAT)、SSH キー、{% data variables.product.prodname_oauth_apps %}、および {% data variables.product.prodname_github_apps %} は、組織に対して引き続き承認されます。 ただし、メンバーは、組織の SAML SSO で使用する権限が与えられていないすべての PAT、SSH キー、{% data variables.product.prodname_oauth_apps %}、{% data variables.product.prodname_github_apps %} を承認する必要があります。

エンタープライズ アカウントに対して SAML SSO が構成されている場合、SCIM プロビジョニングは現在サポートされていません。 現在、エンタープライズ アカウントが所有する組織に SCIM を使用している場合、エンタープライズ レベルの構成に切り替えると、この機能が失われます。

エンタープライズ アカウントに対して SAML SSO を構成する前に、組織レベルの SAML 構成を削除する必要はありませんが、これを検討することもできます。 今後、エンタープライズ アカウントに対して SAML が無効になった場合は、残りの組織レベルの SAML 構成が有効になります。 組織レベルの構成を削除すると、今後予期しない問題が発生するのを防ぐことができます。

## <a name="switching-your-saml-configuration-from-an-organization-to-an-enterprise-account"></a>組織からエンタープライズ アカウントへの SAML 構成の切り替え

1. エンタープライズ アカウントに SAML SSO を適用し、すべての組織メンバーがエンタープライズ アカウントで使用されている IdP アプリに割り当てられている、またはアクセス権が付与されていることを確認します。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。
1. 必要に応じて、エンタープライズ アカウントが所有する組織の既存の SAML 構成をすべて削除します。 構成を削除するかどうかを判断するには、「[エンタープライズ アカウントの SAML シングル サインオンについて](#about-saml-single-sign-on-for-enterprise-accounts)」を参照してください。
1. 混乱を防ぐために組織レベルの SAML 構成を保持している場合は、IdP で組織レベルのアプリのタイルを非表示にすることを検討してください。
1. 変更についてエンタープライズ メンバーにアドバイスします。
   -  IdP ダッシュボードで組織の SAML アプリをクリックすると、メンバーは組織にアクセスできなくなります。 エンタープライズ アカウント用に構成された新しいアプリを使用する必要があります。
   - メンバーは、組織で SAML SSO での使用が以前に承認されていない、すべての PAT または SSH キーを承認する必要があります。 詳細については、「[SAML シングル サインオンで利用するために個人アクセス トークンを承認する](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」および「[SAML シングル サインオンで利用するために SSH キーを承認する](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。
   - メンバーは、組織に対して以前に承認された {% data variables.product.prodname_oauth_apps %} を再承認する必要がある場合があります。 詳細については、「[SAML のシングル サインオンでの認証について](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-and-saml-sso)」を参照してください。
