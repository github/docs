---
title: Enterprise 向けのユーザプロビジョニングを設定する
shortTitle: ユーザプロビジョニングの設定
intro: 'System for Cross-domain Identity Management (SCIM) のシステムを設定できます。これにより、{% data variables.product.product_location %} のアプリケーションをアイデンティティプロバイダ (IdP) 上のユーザに割り当てると、{% data variables.product.product_location %} のユーザアカウントが自動的にプロビジョニングされます。'
permissions: 'Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
---

### Enterprise 向けのユーザプロビジョニングについて

{% data reusables.saml.ae-uses-saml-sso %}詳しい情報については、「[Enterprise 向けの SAML シングルサインオンを設定する](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.scim.after-you-configure-saml %} SCIM の詳細については、IETF Web サイトの「[System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644)」を参照してください。

{% if currentVersion == "github-ae@latest" %}

プロビジョニングを設定すると、{% data variables.product.product_name %} のアプリケーションを IdP のユーザに割り当てたり、割り当て解除したりするときに、IdP が {% data variables.product.product_location %} と通信できるようになります。 アプリケーションを割り当てると、IdP は {% data variables.product.product_location %} にアカウントを作成し、オンボーディングメールをユーザに送信するように求めます。 アプリケーションの割り当てを解除すると、IdP は {% data variables.product.product_name %} と通信して、SAML セッションを無効にし、メンバーのアカウントを無効にします。

Enterprise のプロビジョニングを設定するには、{% data variables.product.product_name %} でプロビジョニングを有効にしてから、IdP にプロビジョニングアプリケーションをインストールして設定する必要があります。

IdP のプロビジョニングアプリケーションは、Enterprise 向けの SCIM API を介して {% data variables.product.product_name %} と通信します。 詳しい情報については、{% data variables.product.prodname_dotcom %} REST API ドキュメントの「[GitHub Enterprise の管理](/rest/reference/enterprise-admin#scim)」を参照してください。

{% endif %}

### サポートされているアイデンティティプロバイダ

{% data reusables.scim.supported-idps %}

サポートされている IdP を使用してユーザプロビジョニングを設定する場合、{% data variables.product.product_name %} のアプリケーションをユーザのグループに割り当てたり、割り当てを解除したりすることもできます。 これらのグループは、{% data variables.product.product_location %} の Organization のオーナーとチームメンテナが {% data variables.product.product_name %} Team にマッピングできるようになります。 詳しい情報については「[アイデンティティプロバイダグループとTeamの同期](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)」を参照してください。

### 必要な環境

{% if currentVersion == "github-ae@latest" %}

IdP から {% data variables.product.product_location %} へのアクセスを自動的にプロビジョニングおよびプロビジョニング解除するには、{% data variables.product.product_name %} を初期化するときに最初に SAML SSO を設定する必要があります。 詳しい情報については、「[{% data variables.product.prodname_ghe_managed %} を初期化する](/admin/configuration/initializing-github-ae)」を参照してください。

{% data variables.product.product_name %} のユーザプロビジョニング用にアプリケーションを設定するには、IdP の管理アクセス権が必要です。

{% endif %}

### Enterprise 向けのユーザプロビジョニングを有効化する

{% if currentVersion == "github-ae@latest" %}

1. Enterprise オーナーとして

{% data variables.product.product_location %} にサインインしているときに、**admin:enterprise** スコープで個人アクセストークンを作成します。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
  {% note %}

  設定ファイルでクエリスイートを指定すると、{% data variables.product.prodname_codeql %} 分析エンジンは、デフォルトのクエリセットに加えて、スイートに含まれるクエリを実行します。
    - 個人アクセストークンを作成するには、初期化中に作成した最初の Enterprise オーナーのアカウントを使用することをお勧めします。 詳しい情報については、「[{% data variables.product.prodname_ghe_managed %} を初期化する](/admin/configuration/initializing-github-ae)」を参照してください。
    - IdP で SCIM 用にアプリケーションを設定するには、この個人アクセストークンが必要です。 手順の後半でトークンが再び必要になるまで、トークンをパスワードマネージャーに安全に保管してください。

  {% endnote %}
  {% warning %}

  **警告**: 個人アクセストークンを作成する Enterprise オーナーのユーザーアカウントが非アクティブ化またはプロビジョニング解除された場合、IdP は Enterprise のユーザアカウントを自動的にプロビジョニングおよびプロビジョニング解除しません。 別の Enterprise オーナーは、新しい個人アクセストークンを作成し、IdP でプロビジョニングを再設定する必要があります。

  {% endwarning %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. [SCIM User Provisioning] で、[**Require SCIM user provisioning**] を選択します。 ![Enterprise セキュリティ設定内の [Require SCIM user provisioning] のチェックボックス](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. [**Save**] をクリックします。 ![Enterprise セキュリティ設定内の [Require SCIM user provisioning] の下にある [Save] ボタン](/assets/images/help/enterprises/settings-scim-save.png)
1. IdP の {% data variables.product.product_name %} のアプリケーションでユーザプロビジョニングを設定します。

  次の IdP では、{% data variables.product.product_name %} のプロビジョニングの設定に関するドキュメントを提供しています。 IdP がリストにない場合は、IdP に問い合わせて、{% data variables.product.product_name %} のサポートをご依頼ください。

  | IdP      | 詳細情報                                                                                                                                                                                                |
  |:-------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Azure AD | Microsoft Docs の「[チュートリアル: 自動ユーザプロビジョニング用に {% data variables.product.prodname_ghe_managed %} を設定する](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial)」 |

  IdP のアプリケーションでは、{% data variables.product.product_location %} でユーザアカウントをプロビジョニングまたはプロビジョニング解除するために 2 つの値が必要です。

  | 値        | 別名                    | 説明                                                                                            | サンプル                      |
  |:-------- |:--------------------- |:--------------------------------------------------------------------------------------------- |:------------------------- |
  | URL      | テナント URL              | {% data variables.product.prodname_ghe_managed %} にある Enterprise の SCIM プロビジョニング API への URL | <pre>https&colon;//api.<em>YOUR-GITHUB-AE-HOSTNAME</em>/scim/v2</pre> |
  | 共有シークレット | 個人アクセストークン、シークレットトークン | Enterprise オーナーに代わってプロビジョニングタスクを実行するための IdP 上のアプリケーションのトークン                                   | ステップ 1 で作成した個人アクセストークン    |

{% endif %}
