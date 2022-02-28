---
title: OAuthアプリケーションのアクセス制限について
intro: 'Organizations can choose which {% data variables.product.prodname_oauth_apps %} have access to their repositories and other resources by enabling {% data variables.product.prodname_oauth_app %} access restrictions.'
redirect_from:
  - /articles/about-third-party-application-restrictions
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: OAuth Appのアクセス
---

## OAuthアプリケーションのアクセス制限について

{% data variables.product.prodname_oauth_app %}のアクセス制限が有効化されると、Organizationのメンバーは{% data variables.product.prodname_oauth_app %}のOrganizationのリソースへのアクセスを認可できなくなります。 Organization members can request owner approval for {% data variables.product.prodname_oauth_apps %} they'd like to use, and organization owners receive a notification of pending requests.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Tip：**Organizationが{% data variables.product.prodname_oauth_app %}のアクセス制限をセットアップしていない場合、Organizationのメンバーが認可したすべての{% data variables.product.prodname_oauth_app %}は、Organizationのプライベートリソースにアクセスできます。

{% endtip %}

{% ifversion fpt %}
To further protect your organization's resources, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes security features like SAML single sign-on. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## {% data variables.product.prodname_oauth_app %}のアクセス制限のセットアップ

Organizationのオーナーが{% data variables.product.prodname_oauth_app %}のアクセス制限を初めてセットアップする場合、以下のようになります。

- **Organizationが所有するアプリケーション**には、自動的にOrganizationのリソースへのアクセスが与えられます。
- **{% data variables.product.prodname_oauth_apps %}** immediately lose access to the organization's resources.
- **2014年の2月以前に作成されたSSHキー**は、Organizationのリソースへのアクセスを即座に失います（これにはユーザ及びデプロイキーが含まれます）。
- **SSH keys created by {% data variables.product.prodname_oauth_apps %} during or after February 2014** immediately lose access to the organization's resources.
- **Hook deliveries from private organization repositories** will no longer be sent to unapproved {% data variables.product.prodname_oauth_apps %}.
- **API access** to private organization resources is not available for unapproved {% data variables.product.prodname_oauth_apps %}. 加えて、パブリックなOrganizationリソースの作成、更新、削除のアクションの権限はありません。
- **ユーザが作成したフック及び2014年の5月以前に作成されたフック**には影響ありません。
- **Organizationが所有するリポジトリのプライベートフォーク**は、Organizationのアクセス制限に従います。

## SSHアクセスの失敗の解決

{% data variables.product.prodname_oauth_app %}のアクセス制限が有効化されたOrganizationへのアクセスを2014年2月以前に作成されたSSHキーが失った場合、それ以降のSSHアクセスの試行は失敗します。 ユーザには、キーを認可できる、あるいは信頼されたキーをそこにアップロードできるURLを示すエラーメッセージが返されます。

## webhook

{% data variables.product.prodname_oauth_app %}が制限が有効化された後のOrganizationへのアクセスを許可された場合、その{% data variables.product.prodname_oauth_app %}が作成した既存のwebhookは、ディスパッチを再開します。

Organizationが以前に認可された{% data variables.product.prodname_oauth_app %}からアクセスを削除した場合、そのアプリケーションが作成した既存のwebhookはディスパッチされなくなります（それらのフックは無効化されますが、削除はされません）。

## アクセス制限の再有効化

Organizationが{% data variables.product.prodname_oauth_app %}のアクセスアプリケーション制限を無効化し、後に再び有効化した場合、以前に認可されていた{% data variables.product.prodname_oauth_app %}は自動的にOrganizationのリソースへのアクセスを許可されます。

## 参考リンク

- [Organizationの{% data variables.product.prodname_oauth_app %}アクセス制限の有効化](/articles/enabling-oauth-app-access-restrictions-for-your-organization)
- "[Approving {% data variables.product.prodname_oauth_apps %} for your organization](/articles/approving-oauth-apps-for-your-organization)"
- [Organizationにインストールされたインテグレーションのレビュー](/articles/reviewing-your-organization-s-installed-integrations)
- [Organizationに以前に承認された{% data variables.product.prodname_oauth_app %}へのアクセスの拒否](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)
- [Organizationの{% data variables.product.prodname_oauth_app %}アクセス制限の無効化](/articles/disabling-oauth-app-access-restrictions-for-your-organization)
- "[Requesting organization approval for {% data variables.product.prodname_oauth_apps %}](/articles/requesting-organization-approval-for-oauth-apps)"
- 「[{% data variables.product.prodname_oauth_apps %} を認可する](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)」
