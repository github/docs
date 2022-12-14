---
title: Enterprise 向けのユーザプロビジョニングを設定する
shortTitle: Configure user provisioning
intro: System for Cross-domain Identity Management (SCIM) のシステムを設定できます。これにより、{% data variables.product.product_location %} のアプリケーションをアイデンティティプロバイダ (IdP) 上のユーザに割り当てると、{% data variables.product.product_location %} のユーザアカウントが自動的にプロビジョニングされます。
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
versions:
  ghae: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
redirect_from:
- /admin/authentication/configuring-user-provisioning-for-your-enterprise
- /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c76cf3a3245b272fc61db68470e7a34796a89e42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145112638"
---
## Enterprise 向けのユーザプロビジョニングについて

{% data reusables.saml.ae-uses-saml-sso %} 詳細については、「[Enterprise 向けの SAML シングルサインオンを設定する](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

SCIM を使ってユーザー プロビジョニングを構成することで、IdP に対してアプリケーションの割り当てまたは割り当て解除を行うときに、ユーザー アカウントを自動的に作成または一時停止し、{% data variables.product.product_name %} のアクセスを付与することができます。 SCIM の詳細については、IETF の Web サイトの「[クロスドメインの ID 管理用システム: プロトコル (RFC 7644)](https://tools.ietf.org/html/rfc7644)」を参照してください。

SCIM を使ったユーザー プロビジョニングを構成しない場合、アプリケーションをユーザーに割り当てるとき、または割り当てを解除するときに、IdP は {% data variables.product.product_name %} と自動的に通信しません。 SCIM を使わない場合、誰かが初めて {% data variables.product.product_name %} に移動し、あなたの IdP を使って認証してサインインしたときに、{% data variables.product.product_name %} により、SAML Just-in-Time (JIT) プロビジョニングを使ってユーザー アカウントが作成されます。

プロビジョニングを設定すると、{% data variables.product.product_name %} のアプリケーションを IdP のユーザに割り当てたり、割り当て解除したりするときに、IdP が {% data variables.product.product_location %} と通信できるようになります。 アプリケーションを割り当てると、IdP は {% data variables.product.product_location %} にアカウントを作成し、オンボーディングメールをユーザに送信するように求めます。 アプリケーションの割り当てを解除すると、IdP は {% data variables.product.product_name %} と通信して、SAML セッションを無効にし、メンバーのアカウントを無効にします。

Enterprise のプロビジョニングを設定するには、{% data variables.product.product_name %} でプロビジョニングを有効にしてから、IdP にプロビジョニングアプリケーションをインストールして設定する必要があります。

IdP のプロビジョニングアプリケーションは、Enterprise 向けの SCIM API を介して {% data variables.product.product_name %} と通信します。 詳細については、{% data variables.product.prodname_dotcom %} REST API ドキュメントの「[GitHub Enterprise の管理](/rest/reference/enterprise-admin#scim)」を参照してください。

## サポートされているアイデンティティプロバイダ

次の IdP は、{% data variables.product.prodname_ghe_managed %} を使う SSO をサポートしています。

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

チーム マッピングをサポートする IdP の場合、IdP 内のユーザーのグループに {% data variables.product.product_name %} のアプリケーションを割り当てるか、割り当てを解除できます。 これらのグループは、{% data variables.product.product_location %} の Organization のオーナーとチームメンテナが {% data variables.product.product_name %} Team にマッピングできるようになります。 詳細については、[Okta グループのチームへのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。

## 前提条件

IdP から {% data variables.product.product_location %} へのアクセスを自動的にプロビジョニングおよびプロビジョニング解除するには、{% data variables.product.product_name %} を初期化するときに最初に SAML SSO を設定する必要があります。 詳細については、「[{% data variables.product.prodname_ghe_managed %} の初期化](/admin/configuration/initializing-github-ae)」を参照してください。

{% data variables.product.product_name %} のユーザプロビジョニング用にアプリケーションを設定するには、IdP の管理アクセス権が必要です。

## Enterprise 向けのユーザプロビジョニングを有効化する

1. {% data variables.product.product_location %} に Enterprise オーナーとしてサインインしているときに、**admin:enterprise** スコープで個人アクセス トークンを作成します。 詳細については、[個人アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)に関する記事を参照してください。
  {% note %}

  **注**:
    - 個人アクセストークンを作成するには、初期化中に作成した最初の Enterprise オーナーのアカウントを使用することをお勧めします。 詳細については、「[{% data variables.product.prodname_ghe_managed %} の初期化](/admin/configuration/initializing-github-ae)」を参照してください。
    - IdP で SCIM 用にアプリケーションを設定するには、この個人アクセストークンが必要です。 手順の後半でトークンが再び必要になるまで、トークンをパスワードマネージャーに安全に保管してください。

  {% endnote %} {% warning %}

  **警告**: 個人アクセス トークンを作成する Enterprise オーナーのユーザー アカウントが非アクティブ化またはプロビジョニング解除された場合、IdP によって Enterprise のユーザ アカウントが自動的にプロビジョニングおよびプロビジョニング解除されなくなります。 別の Enterprise オーナーは、新しい個人アクセストークンを作成し、IdP でプロビジョニングを再設定する必要があります。

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [SCIM ユーザー プロビジョニング] で、 **[SCIM ユーザー プロビジョニングを必須にする]** を選択します。
  ![エンタープライズ セキュリティ設定内の [SCIM ユーザー プロビジョニングを必須にする] のチェック ボックス](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. **[保存]** をクリックします。
  ![Enterprise セキュリティ設定内の [SCIM ユーザー プロビジョニングを必須にする] の下にある [保存] ボタン](/assets/images/help/enterprises/settings-scim-save.png)
1. IdP の {% data variables.product.product_name %} のアプリケーションでユーザプロビジョニングを設定します。

  次の IdP では、{% data variables.product.product_name %} のプロビジョニングの設定に関するドキュメントを提供しています。 IdP がリストにない場合は、IdP に問い合わせて、{% data variables.product.product_name %} のサポートをご依頼ください。

  | IdP | 詳細情報 |
  | :- | :- |
  | Azure AD | Microsoft Docs の「[チュートリアル: {% data variables.product.prodname_ghe_managed %} を構成し、自動ユーザー プロビジョニングに対応させる](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial)」。{% data variables.product.prodname_ghe_managed %} に Azure AD を設定するには、「[Azure AD を使用して Enterprise の認証とプロビジョニングを設定する](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)」を参照してください。|
| Okta | (ベータ版) {% data variables.product.prodname_ghe_managed %} に Okta を設定するには、「[Okta を使用して Enterprise の認証とプロビジョニングを設定する](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)」を参照してください。|

  IdP のアプリケーションでは、{% data variables.product.product_location %} でユーザアカウントをプロビジョニングまたはプロビジョニング解除するために 2 つの値が必要です。

  | 値 | その他の名前 | 説明 | 例 |
  | :- | :- | :- | :- |
  | URL | テナントの URL | {% data variables.product.prodname_ghe_managed %} にある Enterprise の SCIM プロビジョニング API への URL | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | 共有シークレット | 個人アクセストークン、シークレットトークン | Enterprise オーナーに代わってプロビジョニングタスクを実行するための IdP 上のアプリケーションのトークン | ステップ 1 で作成した個人アクセストークン |
