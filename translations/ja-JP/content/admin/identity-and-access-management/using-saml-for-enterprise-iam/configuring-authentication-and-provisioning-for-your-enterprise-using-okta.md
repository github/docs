---
title: Okta を使用するエンタープライズ用の認証とプロビジョニングの構成
shortTitle: Configure with Okta
intro: 'Okta を ID プロバイダー (IdP) として使用して、{% data variables.location.product_location %}の認証とユーザー プロビジョニングを一元管理できます。'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 62a1436fcedc4d90f767d0c612e70810132aff58
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192674'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Okta を使用した認証とユーザー プロビジョニングについて

{% data variables.product.product_name %} の ID プロバイダー (IdP) として Okta を使用できます。これにより、Okta ユーザーは Okta 資格情報を使用して {% data variables.product.product_name %} にサインインできます。

{% data variables.product.product_name %} の IdP として Okta を使用するために、Okta に {% data variables.product.product_name %} アプリを追加し、{% data variables.product.product_name %} で Okta を IdP として構成し、Okta ユーザーとグループのアクセス権をプロビジョニングできます。

{% data reusables.saml.idp-saml-and-scim-explanation %}
- "[チームへの Okta グループのマッピング](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)"

SCIM を有効にすると、Okta で {% data variables.product.product_name %} アプリケーションを割り当てる任意のユーザーが次のプロビジョニング機能を使えるようになります。

{% data reusables.scim.ghes-beta-note %}

次のプロビジョニング機能は、{% data variables.product.product_name %} アプリケーションに割り当てられたすべての Okta ユーザーが使用できます。

| 機能 | 説明 |
| --- | --- |
| 新しいユーザのプッシュ | Okta で新しいユーザーを作成すると、ユーザーは {% data variables.product.product_name %} に追加されます。 |
| ユーザ無効化のプッシュ | Okta でユーザーを非アクティブにすると、{% data variables.product.product_name %} で Enterprise からユーザーが停止されます。 |
| プロフィール更新のプッシュ | Okta でユーザーのプロファイルを更新すると、{% data variables.product.product_name %} で Enterprise 内のユーザーのメンバーシップのメタデータが更新されます。 |
| ユーザの再アクティブ化 | Okta でユーザーを再アクティブ化すると、{% data variables.product.product_name %} で Enterprise 内のユーザーの停止が解除されます。 |

{% data variables.location.product_location %} での Enterprise の ID とアクセスの管理について詳しくは、「[Enterprise の ID とアクセスを管理する](/admin/authentication/managing-identity-and-access-for-your-enterprise)」をご覧ください。

## 前提条件

- Okta を使用して {% data variables.product.product_name %} の認証とユーザー プロビジョニングを設定するには、Okta アカウントとテナントが必要です。

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %}{%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Okta で {% data variables.product.product_name %} アプリケーションを追加する


{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {%- ifversion ghae %}
1. 検索フィールドに「GitHub AE」と入力し、その結果で **[GitHub AE]** をクリックします。

  !["検索結果"](/assets/images/help/saml/okta-ae-search.png)
1. **[追加]** をクリックします。

  !["GitHub AE アプリを追加する"](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. [ベース URL] には、{% data variables.product.product_name %} 上の Enterprise の URL を入力します。

  !["ベース URL を構成する"](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. **[Done]** をクリックします。
{%- elsif scim-for-ghes %}
1. 検索フィールドに「GitHub Enterprise Server」を入力し、結果で **[GitHub Enterprise Server]** をクリックします。
1. **[追加]** をクリックします。
1. [ベース URL] で、{% data variables.location.product_location %} の URL を入力します。
1. **[Done]** をクリックします。
{% endif %}

## {% data variables.product.product_name %} に対する SAML SSO の有効化

{% data variables.product.product_name %} に対してシングル サインオン (SSO) を有効にするには、Okta によって提供されるサインオン URL、発行者 URL、パブリック証明書を使用するように {% data variables.product.product_name %} を設定する必要があります。 これらの詳細については、{% data variables.product.product_name %} の Okta アプリで確認できます。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% ifversion ghae %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. [サインオン URL]、[発行者]、[公開証明書] の詳細を書き留めます。 
1. この詳細を使用して、{% data variables.product.product_name %} で Enterprise に対して SAML SSO を有効にします。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。
{% elsif scim-for-ghes %} {% data reusables.saml.okta-sign-on-tab %}
1. 詳細を使用して、{% data variables.location.product_location %} に対して SAML SSO を有効にします。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。
{%- endif %}

{% note %}

**注:** {% data variables.product.product_name %} から SAML 構成をテストするには、Okta ユーザー アカウントを {% data variables.product.product_name %} アプリに割り当てる必要があります。

{% endnote %}

## API 統合の有効化

Okta アプリでは、SCIM プロビジョニングに {% data variables.product.product_name %} の REST API を使用します。 {% data variables.product.product_name %} の {% data variables.product.pat_generic %} を使用して Okta を設定することで、API へのアクセスを有効にしてテストできます。

1. {% data variables.product.product_name %} では、`admin:enterprise` スコープを持つ {% data variables.product.pat_v1 %} を生成します。 詳しい情報については、「[{% data variables.product.pat_generic %}の作成](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. **[API 統合の構成]** をクリックします。

1. **[Enable API integration]\(API 統合を有効にする\)** を選択します。

  ![[API 統合を有効にする]](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. [API トークン] に、前に生成した {% data variables.product.product_name %} {% data variables.product.pat_generic %} を入力します。

1. **[Test API Credentials]\(API 資格情報のテスト\)** をクリックします。 

{% note %}

**注:** `Error authenticating: No results for users returned` が表示される場合は、{% data variables.product.product_name %} に対して SSO を有効にしていることを確認します。 詳しい情報については、「[{% data variables.product.product_name %} に対する SAML SSO の有効化](#enabling-saml-sso-for-github-ae)」を参照してください。

{% endnote %}

## SCIM プロビジョニング設定の構成

この手順では、Okta プロビジョニング用に SCIM 設定を構成する方法を示します。 これらの設定では、Okta ユーザー アカウントを {% data variables.product.product_name %} に自動的にプロビジョニングするときに使用される機能を定義します。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. [設定] で、 **[アプリへ]** をクリックします。

  ![[アプリへ] 設定](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. [アプリへのプロビジョニング] の右側にある **[編集]** をクリックします。
1. [ユーザーの作成] の右側にある **[有効にする]** を選択します。
1. [ユーザー属性の更新] の右側にある **[有効]** を選択します。
1. [ユーザーの非アクティブ化] の右側にある **[有効]** を選択します。
1. **[保存]** をクリックします。

## Okta ユーザーとグループが {% data variables.product.product_name %} にアクセスできるようにする

個々の Okta ユーザー、またはグループ全体に対して、{% data variables.product.product_name %} へのアクセスをプロビジョニングできます。

### Okta ユーザーのアクセスのプロビジョニング

Okta ユーザーが自分の資格情報を使用して {% data variables.product.product_name %} にサインインできるようにするには、ユーザーを {% data variables.product.product_name %} の Okta アプリに割り当てる必要があります。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %}

1. **[割り当て]** をクリックします。

  ![[Assignments] タブ](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. [割り当て] ドロップダウン メニューを選択し、 **[ユーザーに割り当てる]** をクリックします。

  ![[ユーザーに割り当てる] ボタン](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. 必要なユーザー アカウントの右側にある **[割り当て]** をクリックします。

  ![ユーザーの一覧](/assets/images/help/saml/okta-ae-assign-user.png)

1. [ロール] の右側で、ユーザーのロールをクリックし、 **[保存して戻る]** をクリックします。

  ![ロールの選択](/assets/images/help/saml/okta-ae-assign-role.png)

1. **[Done]** をクリックします。

{% ifversion ghae %}
### Okta グループのアクセスのプロビジョニング

Okta グループを {% data variables.product.product_name %} の Team にマップできます。 その後、Okta グループのメンバーは、マップされた {% data variables.product.product_name %} の Team のメンバーになります。 詳細については、[Okta グループのチームへのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
{% endif %}

## 参考資料

- Okta ドキュメントの「[Understanding SAML](https://developer.okta.com/docs/concepts/saml/)」 (SAML について)。
- Okta ドキュメントの「[Understanding SCIM](https://developer.okta.com/docs/concepts/scim/)」 (SCIM について)。
