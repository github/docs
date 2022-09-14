---
title: チームへの Okta グループのマッピング
shortTitle: Map Okta groups to teams
intro: 'Okta グループを {% data variables.product.prodname_ghe_managed %} の Team にマップして、チーム メンバーを自動的に追加および削除できます。'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116541'
---
{% data reusables.saml.okta-ae-sso-beta %}

## チーム マッピングについて

IdP として Okta を使用する場合は、Okta グループを {% data variables.product.prodname_ghe_managed %} のチームにマップできます。 Okta グループのメンバーは自動的に、マップされた {% data variables.product.prodname_ghe_managed %} チームのメンバーになります。 このマッピングを構成するために、グループとそのメンバーを {% data variables.product.prodname_ghe_managed %} にプッシュするように Okta "GitHub AE" アプリを構成できます。 その後、Okta グループにマップされる {% data variables.product.prodname_ghe_managed %} のチームを選択できます。

## 前提条件

あなた、または Okta の管理者は Okta のグローバル管理者、または特権ロール管理者である必要があります。
 
Okta で SAML シングル サインオンを有効にする必要があります。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

SAML SSO と Okta を使用して、エンタープライズ アカウントに対して認証を行う必要があります。 詳細については、「[SAML シングル サインオンを使用した認証](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)」を参照してください。

## "GitHub AE" アプリへの Okta グループの割り当て

1. Okta ダッシュボードで、グループの設定を開きます。
1. **[アプリの管理]** をクリックします。
  ![アプリにグループを追加する](/assets/images/help/saml/okta-ae-group-add-app.png)

1. [GitHub AE] の右側にある **[割り当て]** をクリックします。

  ![アプリを割り当てる](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. **[Done]** をクリックします。

## {% data variables.product.prodname_ghe_managed %} への Okta グループのプッシュ

Okta グループをプッシュし、グループをチームにマップすると、グループのすべてのメンバーが {% data variables.product.prodname_ghe_managed %} にサインインできるようになります。

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. **[プッシュ グループ]** をクリックします。

  ![[Push Groups] タブ](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. [プッシュ グループ] ドロップダウン メニューを選択し、 **[名前でグループを検索]** をクリックします。

  ![[グループの追加] ボタン](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. {% data variables.product.prodname_ghe_managed %} にプッシュするグループの名前を入力し、 **[保存]** をクリックします。

  ![グループ名を追加する](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Okta グループへのチームのマッピング

エンタープライズ内のチームを、以前に {% data variables.product.prodname_ghe_managed %} にプッシュした Okta グループにマップできます。 その後、Okta グループのメンバーは自動的に {% data variables.product.prodname_ghe_managed %} チームのメンバーになります。 Okta グループのメンバーシップに対するそれ以降の変更は、{% data variables.product.prodname_ghe_managed %} チームと自動的に同期されます。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. [ID プロバイダー グループ] で、ドロップダウン メニューを選択し、ID プロバイダー グループをクリックします。
    ![ID プロバイダー グループを選択するドロップダウン メニュー](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. **[変更を保存]** をクリックします。

## マップされたチームの状態の確認

エンタープライズ所有者は、サイト管理者ダッシュボードを使用して、Okta グループが {% data variables.product.prodname_ghe_managed %} のチームにどのようにマップされているかを確認できます。

1. ダッシュボードにアクセスするには、任意のページの右上隅にある {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
  ![サイト管理者設定にアクセスするための宇宙船のアイコン](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. 左側のペインで、 **[外部グループ]** をクリックします。

  ![グループ名を追加する](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. グループの詳細を表示するには、外部グループの一覧でグループをクリックします。

  ![外部グループの一覧](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. グループの詳細には、Okta グループの名前、グループのメンバーである Okta ユーザーの一覧、および {% data variables.product.prodname_ghe_managed %} の対応するマップされたチームが含まれます。 

  ![外部グループの一覧](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## マップされたグループの監査ログ イベントの表示

 マップされたグループの SSO アクティビティを監視するには、{% data variables.product.prodname_ghe_managed %} 監査ログで次のイベントを確認できます。

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

詳細については、「[組織の監査ログの確認](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)」を参照してください。
