---
title: Okta を使用するエンタープライズ用の認証とプロビジョニングの構成
shortTitle: Configure with Okta
intro: 'Okta を ID プロバイダー (IdP) として使用して、{% data variables.product.prodname_ghe_managed %} の認証とユーザー プロビジョニングを一元管理できます。'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
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
ms.openlocfilehash: 824554d1e35131e1e44f816e6fac3b40803db46d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112645'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Okta での SAML と SCIM について

{% data variables.product.prodname_ghe_managed %} の ID プロバイダー (IdP) として Okta を使用できます。これにより、Okta ユーザーは Okta 資格情報を使用して {% data variables.product.prodname_ghe_managed %} にサインインできます。

{% data variables.product.prodname_ghe_managed %} の IdP として Okta を使用するために、Okta に {% data variables.product.prodname_ghe_managed %} アプリを追加し、Okta を {% data variables.product.prodname_ghe_managed %} の IdP として構成し、Okta ユーザーとグループのアクセス権をプロビジョニングできます。

次のプロビジョニング機能は、{% data variables.product.prodname_ghe_managed %} アプリケーションに割り当てるすべての Okta ユーザーに対して使用できます。

| 機能 | 説明 |
| --- | --- |
| 新しいユーザのプッシュ | Okta で新しいユーザーを作成すると、ユーザーは {% data variables.product.prodname_ghe_managed %} に追加されます。 |
| ユーザ無効化のプッシュ | Okta でユーザーを非アクティブ化すると、{% data variables.product.prodname_ghe_managed %} のエンタープライズからユーザーが停止されます。 |
| プロフィール更新のプッシュ | Okta でユーザーのプロファイルを更新すると、{% data variables.product.prodname_ghe_managed %} のエンタープライズでのユーザーのメンバーシップのメタデータが更新されます。 |
| ユーザの再アクティブ化 | Okta でユーザーを再アクティブ化すると、{% data variables.product.prodname_ghe_managed %} のエンタープライズ内のユーザーの停止が解除されます。 |

## Okta での {% data variables.product.prodname_ghe_managed %} アプリケーションの追加

{% data reusables.saml.okta-ae-applications-menu %}
1. **[アプリ カタログの参照]** をクリックします

  ![[アプリ カタログの参照]](/assets/images/help/saml/okta-ae-browse-app-catalog.png)

1. 検索フィールドに「GitHub AE」と入力し、その結果で **[GitHub AE]** をクリックします。

  !["検索結果"](/assets/images/help/saml/okta-ae-search.png)

1. **[追加]** をクリックします。

  !["GitHub AE アプリを追加する"](/assets/images/help/saml/okta-ae-add-github-ae.png)

1. [ベース URL] には、{% data variables.product.prodname_ghe_managed %} のエンタープライズの URL を入力します。

  !["ベース URL を構成する"](/assets/images/help/saml/okta-ae-configure-base-url.png)

1. **[Done]** をクリックします。

## {% data variables.product.prodname_ghe_managed %} に対する SAML SSO の有効化

{% data variables.product.prodname_ghe_managed %} に対してシングル サインオン (SSO) を有効にするには、Okta によって提供されるサインオン URL、発行者 URL、公開証明書を使用するように {% data variables.product.prodname_ghe_managed %} を構成する必要があります。 これらの詳細は、"GitHub AE" アプリで確認できます。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}
1. **[サインオン]** をクリックします。

  ![[サインオン] タブ](/assets/images/help/saml/okta-ae-sign-on-tab.png)

1. **[セットアップ手順の表示]** をクリックします。

  ![[サインオン] タブ](/assets/images/help/saml/okta-ae-view-setup-instructions.png)

1. [サインオン URL]、[発行者]、[公開証明書] の詳細を書き留めます。 
1. その詳細を使用して、{% data variables.product.prodname_ghe_managed %} でエンタープライズに対して SAML SSO を有効にします。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% note %}

**注:** {% data variables.product.prodname_ghe_managed %} から SAML 構成をテストするには、Okta ユーザー アカウントを {% data variables.product.prodname_ghe_managed %} アプリに割り当てる必要があります。

{% endnote %}

## API 統合の有効化

Okta の "GitHub AE" アプリでは、{% data variables.product.product_name %} API を使用して、SCIM と SSO のためにエンタープライズとやり取りします。 この手順では、{% data variables.product.prodname_ghe_managed %} の個人用アクセス トークンを使用して Okta を構成することで、API へのアクセスを有効にしてテストする方法について説明します。

1. {% data variables.product.prodname_ghe_managed %} で、`admin:enterprise` スコープを持つ個人用アクセス トークンを生成します。 詳細については、「[個人アクセス トークンを使用する](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. **[API 統合の構成]** をクリックします。

1. **[Enable API integration]\(API 統合を有効にする\)** を選択します。

  ![[API 統合を有効にする]](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. [API トークン] には、前に生成した {% data variables.product.prodname_ghe_managed %} 個人用アクセス トークンを入力します。

1. **[Test API Credentials]\(API 資格情報のテスト\)** をクリックします。 

{% note %}

**注:** `Error authenticating: No results for users returned` が表示される場合は、{% data variables.product.prodname_ghe_managed %} に対して SSO を有効にしたことを確認します。 詳細については、「[{% data variables.product.prodname_ghe_managed %} に対する SAML SSO の有効化](#enabling-saml-sso-for-github-ae)」を参照してください。

{% endnote %}

## SCIM プロビジョニング設定の構成

この手順では、Okta プロビジョニング用に SCIM 設定を構成する方法を示します。 これらの設定では、Okta ユーザー アカウントを {% data variables.product.prodname_ghe_managed %} に自動的にプロビジョニングするときに使用される機能を定義します。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. [設定] で、 **[アプリへ]** をクリックします。

  ![[アプリへ] 設定](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. [アプリへのプロビジョニング] の右側にある **[編集]** をクリックします。
1. [ユーザーの作成] の右側にある **[有効にする]** を選択します。
1. [ユーザー属性の更新] の右側にある **[有効]** を選択します。
1. [ユーザーの非アクティブ化] の右側にある **[有効]** を選択します。
1. **[保存]** をクリックします。

## Okta ユーザーとグループが {% data variables.product.prodname_ghe_managed %} にアクセスできるようにする

個々の Okta ユーザー、またはグループ全体に対して、{% data variables.product.product_name %} へのアクセスをプロビジョニングできます。

### Okta ユーザーのアクセスのプロビジョニング

Okta ユーザーが自分の資格情報を使用して {% data variables.product.prodname_ghe_managed %} にサインインできるようにするには、Okta の "GitHub AE" アプリにユーザーを割り当てる必要があります。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. **[割り当て]** をクリックします。

  ![[Assignments] タブ](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. [割り当て] ドロップダウン メニューを選択し、 **[ユーザーに割り当てる]** をクリックします。

  ![[ユーザーに割り当てる] ボタン](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. 必要なユーザー アカウントの右側にある **[割り当て]** をクリックします。

  ![ユーザーの一覧](/assets/images/help/saml/okta-ae-assign-user.png)

1. [ロール] の右側で、ユーザーのロールをクリックし、 **[保存して戻る]** をクリックします。

  ![ロールの選択](/assets/images/help/saml/okta-ae-assign-role.png)

1. **[Done]** をクリックします。

### Okta グループのアクセスのプロビジョニング

Okta グループは、{% data variables.product.prodname_ghe_managed %} のチームにマップできます。 その後、Okta グループのメンバーは、マップされた {% data variables.product.prodname_ghe_managed %} チームのメンバーになります。 詳細については、[Okta グループのチームへのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。

## 参考資料

- Okta ドキュメントの「[SAML について](https://developer.okta.com/docs/concepts/saml/)」。
- Okta ドキュメントの「[SCIM について](https://developer.okta.com/docs/concepts/scim/)」。
