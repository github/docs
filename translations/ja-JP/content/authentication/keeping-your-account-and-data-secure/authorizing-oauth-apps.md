---
title: OAuth アプリケーションの認可
intro: '{% data variables.product.product_name %}のアイデンティティを、OAuth を使うサードパーティのアプリケーションに接続できます。 {% data variables.product.prodname_oauth_app %}を認可する際には、そのアプリケーションを信頼することを確認し、誰が開発したのかをレビューし、そのアプリケーションがどういった種類の情報にアクセスしたいのかをレビューしなければなりません。'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
---

{% data variables.product.prodname_oauth_app %}が {% data variables.product.product_name %}アカウントであなたを識別したい場合、そのアプリケーションの開発者の連絡先情報と、リクエストされている情報のリストのページが表示されます。

{% ifversion fpt %}

{% tip %}

**ヒント:** {% data variables.product.prodname_oauth_app %}を認可するには、[メールアドレスを検証](/articles/verifying-your-email-address)しておかなければなりません。

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %}のアクセス

{% data variables.product.prodname_oauth_apps %} can have *read* or *write* access to your {% data variables.product.product_name %} data.

- **読み取りアクセス**がアプリケーションに許すのは、データを*見る*ことだけです。
- **書き込みアクセス**は、アプリケーションに対してデータを*変更*することを許します。

{% tip %}

**ヒント:** {% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

### OAuth のスコープについて

*スコープ*は、{% data variables.product.prodname_oauth_app %}がパブリックおよび非パブリックのデータにアクセスするためにリクエストできる権限の名前付きグループです。

{% data variables.product.product_name %}と統合される {% data variables.product.prodname_oauth_app %}を使用したい場合、そのアプリケーションはデータに対してどういった種類のアクセスが必要になるのかを知らせてきます。 アプリケーションにアクセスを許可すれば、アプリケーションはあなたの代わりにデータの読み取りや変更といったアクションを行えるようになります。 たとえば `user:email` スコープをリクエストするアプリケーションを使用したい場合、そのアプリケーションはあなたのプライベートのメールアドレスに対してリードオンリーのアクセスを持つことになります。 For more information, see "[About scopes for {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**メモ:** 現時点では、ソースコードへのアクセスのスコープをリードオンリーにすることはできません。

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### リクエストされるデータの種類

{% data variables.product.prodname_oauth_apps %} can request several types of data.

| データの種類                | 説明                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| コミットのステータス            | アプリケーションにコミットのステータスをレポートするためのアクセスを許可できます。 コミットステータスのアクセスがあれば、アプリケーションはビルドが特定のコミットに対して成功したかどうかを判定できます。 アプリケーションはコードへのアクセスは持ちませんが、特定のコミットに対するステータス情報を読み書きできます。 |
| デプロイメント               | デプロイメントのステータスへアクセスできれば、アプリケーションはパブリック及びプライベートのリポジトリの特定のコミットに対してデプロイメントが成功したかを判断できます。 アプリケーションはコードにはアクセスできません。                                                |
| Gist                  | [Gist](https://gist.github.com) アクセスがあれば、アプリケーションはあなたのパブリックおよびシークレット Gist の双方を読み書きできます。                                                                      |
| フック                   | [webhook](/webhooks) アクセスがあれば、アプリケーションはあなたが管理するリポジトリ上のフックの設定を読み書きできます。                                                                                       |
| 通知                    | 通知アクセスがあれば、アプリケーションは Issue やプルリクエストへのコメントなど、あなたの {% data variables.product.product_name %}通知を読むことができます。 しかし、アプリケーションはリポジトリ内へはアクセスできないままです。                   |
| Organization および Team | Organization および Team のアクセスがあれば、アプリケーションは Organization および Team のメンバー構成へのアクセスと管理ができます。                                                                       |
| 個人ユーザデータ              | ユーザデータには、名前、メールアドレス、所在地など、ユーザプロファイル内の情報が含まれます。                                                                                                               |
| リポジトリ                 | リポジトリ情報には、コントリビュータの名前、あなたが作成したブランチ、リポジトリ内の実際のファイルなどが含まれます。 アプリケーションはユーザ単位のレベルでパブリックあるいはプライベートリポジトリへのアクセスをリクエストできます。                                          |
| リポジトリの削除              | アプリケーションはあなたが管理するリポジトリの削除をリクエストできますが、コードにアクセスすることはできません。                                                                                                     |

## 更新された権限のリクエスト

When {% data variables.product.prodname_oauth_apps %} request new access permissions, they will notify you of the differences between their current permissions and the new permissions.

{% ifversion fpt %}

## {% data variables.product.prodname_oauth_apps %} and organizations

{% data variables.product.prodname_oauth_app %}をあなたの個人ユーザアカウントに対して認可する際には、その認可があなたがメンバーになっているそれぞれの Organization に対してどう影響するかを理解してください。

- **{% data variables.product.prodname_oauth_app %}のアクセス制限が*ある* Organization の場合、Organization の管理者にその Organization 内でのアプリケーションの利用を承認してもらえるようリクエストできます。**Organization がそのアプリケーションを承認しなければ、そのアプリケーションは Organization のパブリックなリソースにしかアクセスできません。 あなたが Organization の管理者であれば、自分自身で [アプリケーションを承認](/articles/approving-oauth-apps-for-your-organization)できます。

- **For organizations *without* {% data variables.product.prodname_oauth_app %} access restrictions, the application will automatically be authorized for access to that organization's resources.** For this reason, you should be careful about which {% data variables.product.prodname_oauth_apps %} you approve for access to your personal account resources as well as any organization resources.

SAML シングルサインオンを実施する Organization に所属している場合は、{% data variables.product.prodname_oauth_app %}を承認するたびに、Organization ごとのアクティブな SAML セッションが必要です。

{% note %}

**Note:** If you are encountering errors authenticating to an organization that enforces SAML single sign-on, you may need to revoke the OAuth App from your [account settings page](https://github.com/settings/applications) and repeat the authentication flow to reauthorize the app.

{% endnote %}

## 参考リンク

- [{% data variables.product.prodname_oauth_app %}のアクセス制限について](/articles/about-oauth-app-access-restrictions)
- "[Authorizing GitHub Apps](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- [{% data variables.product.prodname_marketplace %}のサポート](/articles/github-marketplace-support)

{% endif %}
