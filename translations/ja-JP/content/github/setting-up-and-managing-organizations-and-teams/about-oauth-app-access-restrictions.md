---
title: OAuthアプリケーションのアクセス制限について
intro: 'Organizationは、{{ site.data.variables.product.prodname_oauth_app }}のアクセス制限を有効化することによって、どの{{ site.data.variables.product.prodname_oauth_app }}がリポジトリやその他のリソースにアクセスできるかを選択できます。'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
versions:
  free-pro-team: '*'
---

{{ site.data.variables.product.prodname_oauth_app }}のアクセス制限が有効化されると、Organizationのメンバーは{{ site.data.variables.product.prodname_oauth_app }}のOrganizationのリソースへのアクセスを認可できなくなります。 Organizationのメンバーは、オーナーに対して使用したい{{ site.data.variables.product.prodname_oauth_app }}の認可をリクエストでき、Organizationのオーナーはペンディングになっているリクエストの通知を受信します。

{{ site.data.reusables.organizations.oauth_app_restrictions_default }}

{% tip %}

**Tip：**Organizationが{{ site.data.variables.product.prodname_oauth_app }}のアクセス制限をセットアップしていない場合、Organizationのメンバーが認可したすべての{{ site.data.variables.product.prodname_oauth_app }}は、Organizationのプライベートリソースにアクセスできます。

{% endtip %}

### {{ site.data.variables.product.prodname_oauth_app }}のアクセス制限のセットアップ

Organizationのオーナーが{{ site.data.variables.product.prodname_oauth_app }}のアクセス制限を初めてセットアップする場合、以下のようになります。

- **Organizationが所有するアプリケーション**には、自動的にOrganizationのリソースへのアクセスが与えられます。
- **{{ site.data.variables.product.prodname_oauth_app }}**は、Organizationのリソースへのアクセスを即座に失います。
- **2014年の2月以前に作成されたSSHキー**は、Organizationのリソースへのアクセスを即座に失います（これにはユーザ及びデプロイキーが含まれます）。
- **{{ site.data.variables.product.prodname_oauth_app }}によって2014年の2月あるいはそれ以降に作成されたSSHキー**は、Organizationのリソースへのアクセスを即座に失います。
- **プライベートのOrganizationリポジトリからのフックの配信**は、認可されていない{{ site.data.variables.product.prodname_oauth_app }}には送信されなくなります。
- 認可されていない{{ site.data.variables.product.prodname_oauth_app }}からのプライベートなOrganizationのリソースへの**APIアクセス**はできなくなります。 加えて、パブリックなOrganizationリソースの作成、更新、削除のアクションの権限はありません。
- **ユーザが作成したフック及び2014年の5月以前に作成されたフック**には影響ありません。
- **Organizationが所有するリポジトリのプライベートフォーク**は、Organizationのアクセス制限に従います。

### SSHアクセスの失敗の解決

{{ site.data.variables.product.prodname_oauth_app }}のアクセス制限が有効化されたOrganizationへのアクセスを2014年2月以前に作成されたSSHキーが失った場合、それ以降のSSHアクセスの試行は失敗します。 ユーザには、キーを認可できる、あるいは信頼されたキーをそこにアップロードできるURLを示すエラーメッセージが返されます。

### webhook

{{ site.data.variables.product.prodname_oauth_app }}が制限が有効化された後のOrganizationへのアクセスを許可された場合、その{{ site.data.variables.product.prodname_oauth_app }}が作成した既存のwebhookは、ディスパッチを再開します。

Organizationが以前に認可された{{ site.data.variables.product.prodname_oauth_app }}からアクセスを削除した場合、そのアプリケーションが作成した既存のwebhookはディスパッチされなくなります（それらのフックは無効化されますが、削除はされません）。

### アクセス制限の再有効化

Organizationが{{ site.data.variables.product.prodname_oauth_app }}のアクセスアプリケーション制限を無効化し、後に再び有効化した場合、以前に認可されていた{{ site.data.variables.product.prodname_oauth_app }}は自動的にOrganizationのリソースへのアクセスを許可されます。

### 参考リンク

- [Organizationの{{ site.data.variables.product.prodname_oauth_app }}アクセス制限の有効化](/articles/enabling-oauth-app-access-restrictions-for-your-organization)
- [Organizationの{{ site.data.variables.product.prodname_oauth_app }}の承認](/articles/approving-oauth-apps-for-your-organization)
- [Organizationにインストールされたインテグレーションのレビュー](/articles/reviewing-your-organization-s-installed-integrations)
- [Organizationに以前に承認された{{ site.data.variables.product.prodname_oauth_app }}へのアクセスの拒否](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)
- [Organizationの{{ site.data.variables.product.prodname_oauth_app }}アクセス制限の無効化](/articles/disabling-oauth-app-access-restrictions-for-your-organization)
- 「[{{ site.data.variables.product.prodname_oauth_app }}に対する Organization の承認をリクエストする](/articles/requesting-organization-approval-for-oauth-apps)」
- 「[{{ site.data.variables.product.prodname_oauth_app }} を認可する](/articles/authorizing-oauth-apps)」
