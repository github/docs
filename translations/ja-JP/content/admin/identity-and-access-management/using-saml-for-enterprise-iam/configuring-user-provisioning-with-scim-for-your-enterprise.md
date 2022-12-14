---
title: Enterprise 用の SCIM を使用したユーザーのプロビジョニングを構成する
shortTitle: Configure user provisioning
intro: '{% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 用のクロスドメイン ID 管理システム (SCIM) を構成できます。これにより、{% ifversion scim-for-ghes %}インスタンス{% elsif ghae %}{% data variables.product.product_name %}{% endif %}用のアプリケーションを ID プロバイダー (IdP) のユーザーに割り当てる場合、ユーザー アカウントが自動的にプロビジョニングされます。'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
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
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c330d8e375522901d2738b581a897d42d30d628e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109120'
---
{% data reusables.scim.ghes-beta-note %}

## {% data variables.product.product_name %} のユーザー プロビジョニングについて

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} 詳細については、「[Enterprise 向けの SAML シングルサインオンを設定する](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% endif %}

{% ifversion scim-for-ghes %}SAML シングル サインオン (SSO) を {% data variables.location.product_location %}に使用する場合、{% elsif ghae %}{% endif %}IdP でアプリケーションを割り当てるか、または割り当て解除するときに、ユーザー アカウントを自動的に作成または一時停止し、{% elsif ghae %}{% data variables.product.product_name %} の {% endif %} {% ifversion scim-for-ghes %} インスタンスへのアクセスを許可するように SCIM を構成できます。 SCIM の詳細については、IETF の Web サイトの「[クロスドメインの ID 管理用システム: プロトコル (RFC 7644)](https://tools.ietf.org/html/rfc7644)」を参照してください。

SCIM を使ったユーザー プロビジョニングを構成しない場合、アプリケーションをユーザーに割り当てるとき、または割り当てを解除するときに、IdP は {% data variables.product.product_name %} と自動的に通信しません。 SCIM を使わない場合、誰かが初めて {% data variables.product.product_name %} に移動し、あなたの IdP を使って認証してサインインしたときに、{% data variables.product.product_name %} により、SAML Just-in-Time (JIT) プロビジョニングを使ってユーザー アカウントが作成されます。

プロビジョニングを設定すると、{% data variables.product.product_name %} のアプリケーションを IdP のユーザーに割り当てたり、割り当て解除したりするときに、IdP は {% data variables.location.product_location %} と通信できるようになります。 アプリケーションを割り当てると、IdP は、{% data variables.location.product_location %} に対して、アカウントを作成し、オンボーディング メールをユーザーに送信するように求めます。 アプリケーションの割り当てを解除すると、IdP は {% data variables.product.product_name %} と通信して、SAML セッションを無効にし、メンバーのアカウントを無効にします。

Enterprise のプロビジョニングを設定するには、{% data variables.product.product_name %} でプロビジョニングを有効にしてから、IdP にプロビジョニングアプリケーションをインストールして設定する必要があります。

{% ifversion scim-for-ghes %}

IdP のプロビジョニング アプリケーションは、SCIM API を使用して {% data variables.product.product_name %} と通信します。 詳しい情報については、REST API ドキュメント内の「[SCIM](/rest/enterprise-admin/scim)」を参照してください。

{% endif %}

## ID とクレームについて

IdP 管理者がユーザーに {% data variables.location.product_location %}へのアクセスを許可すると、ユーザーは IdP を介して認証を行い、SAML SSO を使用して {% data variables.product.product_name %} にアクセスできます。

認証中、{% ifversion scim-for-ghes %}インスタンス{% elsif ghae %}{% data variables.product.product_name %}{% endif %}は、ユーザーを SAML ID に関連付けようとします。 既定では、{% ifversion scim-for-ghes %}インスタンス{% elsif ghae %}{% data variables.product.product_name %}{% endif %}は、IdP からの `NameID` クレームをアカウントのユーザー名と比較します。 {% data variables.product.product_name %} は、比較のために `NameID` の値を正規化します。 ユーザー名の正規化の詳しい情報については、「[外部認証のためのユーザー名に関する考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)」を参照してください。

インスタンス上に一致するユーザー名がない場合、インスタンスによってユーザーの新しいアカウントが作成されます。 インスタンス上にユーザー名が一致するアカウントがある場合、ユーザーはアカウントにサインインします。{% ifversion scim-for-ghes %} {% data variables.product.product_name %} では、アカウントが組み込みの認証を使用するか、またはアカウントが既に SAML ID と関連付けられているかに関係なく、Idp からのクレームをインスタンス上のすべてのアカウントと比較します。{% endif %}

{% ifversion scim-for-ghes %}

SAML SSO を使用する場合、サイト管理者は、インスタンスのカスタム ユーザー属性を構成できます。 カスタム ユーザー名属性を使用すると、インスタンスで、IdP の `NameID` 以外の値を使用できます。 SCIM が構成されている場合、{% data variables.product.product_name %} では、このマッピングが考慮されます。 ユーザー属性のマッピングの詳しい情報については、「[Enterprise 向けの SAML シングル サインオンの構成](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)」を参照してください。

{% endif %}

{% data variables.product.product_name %} によって IdP のユーザーが正常に識別されたが、メール アドレスや姓名などのアカウントの詳細が一致しない場合、インスタンスによって詳細が IdP の値で更新されます。

## サポートされているアイデンティティプロバイダ

次の IdP では、{% data variables.product.product_name %} 用の SCIM を使用したユーザーのプロビジョニングがサポートされています。

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

{% ifversion ghae %} チーム マッピングをサポートする IdP の場合、IdP 内のユーザーのグループに {% data variables.product.product_name %} のアプリケーションを割り当てるか、割り当てを解除できます。 これらのグループは、{% data variables.location.product_location %} の Organization オーナーおよびチーム メンテナが使用して {% data variables.product.product_name %} チームにマッピングできます。 詳細については、[Okta グループのチームへのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
{% endif %}

## 前提条件

{% ifversion ghae %}

- {% data variables.product.product_name %} を初期化する際、SAML SSO を構成する必要があります。 詳細については、「[{% data variables.product.prodname_ghe_managed %} の初期化](/admin/configuration/initializing-github-ae)」を参照してください。

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- IdP にアカウントを持っていないユーザーに対して組み込みの認証を許可する必要があります。 詳しくは、「[プロバイダー外のユーザーのためのビルトイン認証の許可](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)」を参照してください。

- IdP は、サービス プロバイダー (SP) への SCIM 呼び出しをサポートする必要があります。

{% endif %}

- {% data variables.product.product_name %} のユーザプロビジョニング用にアプリケーションを設定するには、IdP の管理アクセス権が必要です。

## Enterprise 向けのユーザプロビジョニングを有効化する

{% ifversion scim-for-ghes %}

インスタンスに対してプロビジョニング アクションを実行するには、専用のマシン ユーザー アカウントを作成し、そのアカウントを Enterprise オーナーに昇格します。

{% data variables.product.product_name %} インスタンスで SCIM を有効にすると、すべてのユーザー アカウントが一時停止されます。 IdP からインスタンスへのユーザー アクセスを許可し、ユーザーが正常に認証されると、ユーザーのアカウントは停止解除されます。

{% endif %}

{%- ifversion ghae %}
1. Enterprise オーナーとして {% data variables.location.product_location %} にサインインし、**admin:enterprise** スコープで{% data variables.product.pat_v1 %}を作成します。 詳しい情報については、「[{% data variables.product.pat_generic %}の作成](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
  {% note %}

  **注**:
    - {% data variables.product.pat_generic %}を作成するには、初期化時に作成した最初の Enterprise オーナーのアカウントを使用することをお勧めします。 詳細については、「[{% data variables.product.prodname_ghe_managed %} の初期化](/admin/configuration/initializing-github-ae)」を参照してください。
    - IdP で SCIM 用にアプリケーションを構成するには、この{% data variables.product.pat_generic %}が必要です。 手順の後半でトークンが再び必要になるまで、トークンをパスワードマネージャーに安全に保管してください。

  {% endnote %} {% warning %}

  **警告**: {% data variables.product.pat_generic %}を作成する Enterprise オーナーのユーザー アカウントが非アクティブ化またはプロビジョニング解除された場合、IdP によって Enterprise のユーザー アカウントが自動的にプロビジョニングおよびプロビジョニング解除されなくなります。 別の Enterprise オーナーは、新しい{% data variables.product.pat_generic %} を作成し、IdP でプロビジョニングを再構成する必要があります。

  {% endwarning %} {%- elsif scim-for-ghes %}
1. インスタンに対してプロビジョニング アクションを実行するための専用のマシン ユーザー アカウントを作成します。 詳しくは、「[プロバイダー外のユーザーのためのビルトイン認証の許可](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)」を参照してください。
1. 専用のユーザー アカウントを Enterprise オーナーに昇格します。 詳細については、「[Enterprise を管理するようユーザーを招待する](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account)」を参照してください。
1. 新しい Enterprise オーナーとしてインスタンスにサインインします。
1. **admin:enterprise** スコープで{% data variables.product.pat_v1 %}を作成します。 詳しい情報については、「[{% data variables.product.pat_generic %}の作成](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

   {% note %}

   **注**: SCIM 構成をテストするため、および IdP で SCIM 用にアプリケーションを構成するためには、この{% data variables.product.pat_generic %}が必要です。 手順の後半でトークンが再び必要になるまで、トークンをパスワードマネージャーに安全に保管してください。

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. SCIM を有効にするには、アカウント マネージャーから提供されたコマンドを {% data variables.contact.contact_enterprise_sales %}で実行します。
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. SCIM が動作していることを検証するには、次のコマンドを実行します。 _PAT FROM STEP 3_ と _YOUR INSTANCE'S HOSTNAME_ を実際の値に置き換えます。

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   このコマンドは、空の配列を返します。
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [SCIM ユーザー プロビジョニング] で、 **[SCIM ユーザー プロビジョニングを必須にする]** を選択します。
  ![エンタープライズ セキュリティ設定内の [SCIM ユーザー プロビジョニングを必須にする] のチェック ボックス](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. **[保存]** をクリックします。
  ![Enterprise のセキュリティ設定内の [SCIM ユーザー プロビジョニングを必須にする] の下にある [保存] ボタン](/assets/images/help/enterprises/settings-scim-save.png) {%- endif %}
1. IdP の {% data variables.product.product_name %} のアプリケーションでユーザプロビジョニングを設定します。

  {%- ifversion ghae %} 次の IdP は、{% data variables.product.product_name %} のプロビジョニングの構成に関するドキュメントを提供しています。 IdP がリストにない場合は、IdP に問い合わせて、{% data variables.product.product_name %} のサポートをご依頼ください。
  {%- elsif scim-for-ghes %} {% data variables.product.company_short %} では、次の IdP 用のプロビジョニングの構成に関するドキュメントを提供しています。{% endif %}

  | IdP | 詳細情報 |
  | :- | :- |
  | Azure AD | {% ifversion ghae %}Microsoft Docs の「[チュートリアル: {% data variables.product.prodname_ghe_managed %} を構成し、自動ユーザー プロビジョニングに対応させる](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial)」。{% endif %}{% data variables.product.product_name %} 用に Azure AD を構成するには、「[Azure AD を使用して Enterprise の認証とプロビジョニングを構成する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)」を参照してください。 |
| Okta | {% ifversion ghae %}(beta){% endif %} {% data variables.product.product_name %} 用に Okta を構成するには、「[Okta を使用して Enterprise の認証とプロビジョニングを構成する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)」を参照してください。 |

  IdP のアプリケーションでは、{% data variables.location.product_location %} でユーザー アカウントをプロビジョニングまたはプロビジョニング解除するために次の 2 つの値が必要です。

  | 値 | その他の名前 | 説明 | 例 |
  | :- | :- | :- | :- |
  | URL | テナントの URL | {% data variables.product.prodname_ghe_managed %} にある Enterprise の SCIM プロビジョニング API への URL | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | 共有シークレット | {% data variables.product.pat_generic_caps %}、シークレット トークン | Enterprise オーナーに代わってプロビジョニングタスクを実行するための IdP 上のアプリケーションのトークン | 手順 {% ifversion ghae %}1{% elsif scim-for-ghes %}4{% endif %} で作成した{% data variables.product.pat_generic_caps %} |
