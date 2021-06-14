---
title: Okta を使用して Enterprise アカウントの SAML シングルサインオンおよび SCIM を設定する
intro: 'Okta を使う Security Assertion Markup Language (SAML) シングルサインオン (SSO) および System for Cross-domain Identity Management (SCIM) を使用すると、 {% data variables.product.product_name %} で Enterprise アカウントへのアクセスを自動的に管理することができます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

### Okta での SAML と SCIM について

Enterprise アカウントがアイデンティティプロバイダ (IdP) である Okta を使う SAML SSO と SCIM を使用するように設定すれば、{% data variables.product.product_name %} の Enterprise アカウントや 他の Web アプリケーションへのアクセスを 1 つの集中インターフェースから制御することができます。

SAML SSO は、リポジトリや Issue、プルリクエストといった Enterprise アカウントのリソースに対するアクセスを制御し、保護します。 SCIM は、Okta で変更を行ったとき、Enterprise アカウントによって所有されている Organization に対するメンバーのアクセスを自動的に追加、管理、削除します。 詳細は、「[Enterprise アカウントでセキュリティ設定を強制する](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)」を参照してください。

SCIM を有効にすると、Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを割り当てる任意のユーザが次のプロビジョニング機能を使えるようになります。

| 機能            | 説明                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 新しいユーザのプッシュ   | Okta で作成される新しいユーザは Enterprise アカウントのリソースにアクセスでき、Enterprise アカウントによって所有されている Organization にオプションで自動的に招待されます。                                                |
| ユーザ無効化のプッシュ   | Okta のユーザを無効にすると、そのユーザは Enterprise アカウントのリソースにアクセスできなくなり、Enterprise アカウントで所有されているすべての Organization から削除されます。                                               |
| プロフィール更新のプッシュ | Okta のユーザのプロファイルに対する更新が、そのユーザの Enterprise アカウントのメタデータにプッシュされます。                                                                                            |
| ユーザの再アクティブ化   | Okta のユーザを再アクティブ化すると、そのユーザの Enterprise アカウントに対するアクセスが再度有効になり、オプションでそのユーザが以前メンバーだった Enterprise アカウントによって所有されている Organization に再度参加するための 招待メールがオプションで送信されます。 |

### 必要な環境

{% data reusables.saml.use-classic-ui %}

### Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを追加する

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. [{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts] をクリックします。
1. [**Add**] をクリックします。
1. オプションで、[Application label] の右にアプリケーションのわかりやすい名前を入力します。 ![[Application label] フィールド](/assets/images/help/saml/okta-application-label.png)
1. [{% data variables.product.prodname_dotcom %} Enterprises] の右に、Enterprise アカウントの名前を入力します。 たとえば、Enterprise アカウントの URL が `https://github.com/enterprises/octo-corp` の場合は、`octo-corp` と入力します。 ![[GitHub Enterprises] フィールド](/assets/images/help/saml/okta-github-enterprises.png)
1. [**Done**] をクリックします。

### SAML SSO の有効化とテスト

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. [Settings] の右にある [**Edit**] をクリックします。
1. [Configured SAML Attributes] で、[groups] の右にあるドロップダウンメニューを使用して [**Matches regex**] を選択します。
1. ドロップダウンメニューの右に `.*.*` と入力します。
1. [**Save**] をクリックします。
{% data reusables.saml.okta-view-setup-instructions %}
1. 設定手順の情報を使用して、Enterprise アカウントの SAML を有効にします。 詳しい情報については、「[Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)」参照してください。

### Okta でグループを作成する

1. Okta で、Enterprise アカウントが所有する各 Organization に合わせてグループを作成します。 各グループの名前は、Organization のアカウント名 (Organization の表示名ではく) に一致する必要があります。 たとえば、Organization の URL が `https://github.com/octo-org` の場合は、グループに `octo-org` という名前をつけます。
1. Enterprise アカウントに作成したアプリケーションを各グループに割り当てます。 {% data variables.product.prodname_dotcom %} が、ユーザごとに `groups` データをすべて受け取ります。
1. ユーザを所属させたい Organization に基づいて、ユーザをグループに追加します。

### Okta で SCIM を使ってユーザのプロビジョニングを設定する

{% data reusables.scim.enterprise-account-scim %}

Okta で SCIM を使ってユーザのプロビジョニングを設定するには、OAuth アプリケーションを認可して、Okta が {% data variables.product.product_name %} への認証に使用するトークンを作成する必要があります。 Okta と {% data variables.product.prodname_dotcom %} が連携して、okta-oauth アプリケーションが作成されます。

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. [**Authenticate with Github Enterprise Cloud - Enterprise Accounts**] をクリックします。 ![{% data variables.product.prodname_dotcom %} に認証するボタン](/assets/images/help/business-accounts/authenticate-with-github-button.png)
1. Enterprise アカウント名の右にある [**Grant**] をクリックします。
1. [**Authorize okta-oauth**] をクリックします。
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}
1. アプリケーション名の下で [ **Push Groups**] をクリックします。 ![[Push Groups] タブ](/assets/images/help/business-accounts/okta-push-groups-tab.png)
1. [**Push Groups**] ドロップダウンメニューを使用して、[**Find groups by name**] を選択します。 ![[Push Groups] ドロップダウンメニュー](/assets/images/help/business-accounts/okta-push-groups-drop-down.png)
1. ユーザプロビジョニングを有効にしたい Enterprise アカウントで各 Organization のプッシュグループを追加します。
   - [PUSH GROUPS BY NAME] で、Enterprise アカウントが所有する Organization に対応するグループを検索し、見つかったグループを検索結果でクリックします。
   - グループ名の右にある [Match results & push action] ドロップダウンメニューで、[**Create Group**] が選択されていることを確認します。 ![[Match result] ドロップダウンメニューで [Create Group] を選択](/assets/images/help/saml/create-group-okta.png)
   - [**Save**] をクリックします。
   - Organization ごとに繰り返します。
1. アプリケーション名の下で [ **Assignments**] をクリックします。 ![[Assignments] タブ](/assets/images/help/business-accounts/okta-assignments-tab.png)
1. [**Provision users**] と表示される場合は、グループのプッシュグループを追加する前に Okta グループのメンバーだったユーザは、プロビジョニングされていません。 そのようなユーザの {% data variables.product.product_name %} に SCIM を送信するには、[**Provision users**] をクリックします。

### SAML ユーザプロビジョニングを有効にする

SCIM のプロビジョニングとプロビジョニング解除を有効にすると、オプションで SAML のユーザプロビジョニングおよびプロビジョニング解除を有効にできます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. [SAML User Provisioning] で、[**Enable SAML user provisioning**] を選択します。 ![SAML によるユーザプロビジョニングを有効にするチェックボックス](/assets/images/help/business-accounts/user-provisioning.png)
1. [**Save**] をクリックします。
1. オプションで、SAML ユーザプロビジョニングを有効にします。
   - [**Enable SAML user deprovisioning**] を選択して [**Save**] をクリックします。 ![SAML によるユーザプロビジョニング解除を有効にするチェックボックス](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - 警告を読んでから、[**Enable SAML deprovisioning**] をクリックします。 ![[Enable SAML deprovisioning] ボタン](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
