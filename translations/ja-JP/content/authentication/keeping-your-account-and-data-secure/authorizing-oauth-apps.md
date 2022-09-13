---
title: OAuth アプリの承認
intro: '{% data variables.product.product_name %}のアイデンティティを、OAuth を使うサードパーティのアプリケーションに接続できます。 {% data variables.product.prodname_oauth_app %}を認可する際には、そのアプリケーションを信頼することを確認し、誰が開発したのかをレビューし、そのアプリケーションがどういった種類の情報にアクセスしたいのかをレビューしなければなりません。'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: a6205e33d29170c7ff72ad6f6d6ede45c0145ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423165'
---
{% data variables.product.prodname_oauth_app %} から {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のアカウントによる識別を求められた場合、アプリの開発者の連絡先情報とリクエスト中のデータのリストが記載されたページが表示されます。

{% ifversion fpt or ghec %}

{% tip %}

**ヒント:** {% data variables.product.prodname_oauth_app %} を承認する前に、[メール アドレスを確認](/articles/verifying-your-email-address)する必要があります。

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %}のアクセス

{% data variables.product.prodname_oauth_apps %} は、ユーザーの {% data variables.product.product_name %} データへの "*読み取り*" アクセスまたは "*書き込み*" アクセスを行うことができます。

- **読み取りアクセス** では、ユーザーのデータの "*閲覧*" のみ可能です。
- **書き込みアクセス** では、ユーザーのデータの "*変更*" が可能です。

{% tip %}

**ヒント:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### OAuth のスコープについて

"*スコープ*" は、権限の名前付きグループです。これは、{% data variables.product.prodname_oauth_app %} がパブリック データと非パブリック データへのアクセスをリクエストできるという権限です。

{% data variables.product.product_name %}と統合される {% data variables.product.prodname_oauth_app %}を使用したい場合、そのアプリケーションはデータに対してどういった種類のアクセスが必要になるのかを知らせてきます。 アプリケーションにアクセスを許可すれば、アプリケーションはあなたの代わりにデータの読み取りや変更といったアクションを行えるようになります。 たとえば、`user:email` スコープを要求するアプリを使用する必要がある場合、アプリは個人用メール アドレスへの読み取り専用アクセス権を持つことになります。 詳しい情報については、「[{% data variables.product.prodname_oauth_apps %} のスコープについて](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)」を参照してください。

{% tip %}

**注:** 現在、ソース コード アクセスを読み取り専用にスコープすることはできません。

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### リクエストされるデータの種類

{% data variables.product.prodname_oauth_apps %} がリクエストできるデータは、数種類あります。

| データの種類 | 説明 |
| --- | --- |
| コミットのステータス | アプリケーションにコミットのステータスをレポートするためのアクセスを許可できます。 コミットステータスのアクセスがあれば、アプリケーションはビルドが特定のコミットに対して成功したかどうかを判定できます。 アプリケーションはコードへのアクセスは持ちませんが、特定のコミットに対するステータス情報を読み書きできます。 |
| デプロイメント | デプロイメントのステータスへアクセスできれば、アプリケーションはパブリック及びプライベートのリポジトリの特定のコミットに対してデプロイメントが成功したかを判断できます。 アプリケーションはコードにはアクセスできません。 |
| Gists | [Gist](https://gist.github.com) アクセスでは、ユーザーのパブリック Gist とシークレット Gist の両方への、アプリによる読み取りや書き込みが可能です。 |
| フック | [Webhook](/webhooks) アクセスでは、管理するリポジトリのフック構成への、アプリによる読み取りや書き込みが可能です。 |
| 通知 | 通知アクセスがあれば、アプリケーションは Issue やプルリクエストへのコメントなど、あなたの {% data variables.product.product_name %}通知を読むことができます。 しかし、アプリケーションはリポジトリ内へはアクセスできないままです。 |
| 組織とチーム | Organization および Team のアクセスがあれば、アプリケーションは Organization および Team のメンバー構成へのアクセスと管理ができます。 |
| ユーザーの個人データ | ユーザデータには、名前、メールアドレス、所在地など、ユーザプロファイル内の情報が含まれます。 |
| リポジトリ | リポジトリ情報には、コントリビュータの名前、あなたが作成したブランチ、リポジトリ内の実際のファイルなどが含まれます。 アプリケーションはユーザ単位のレベルでパブリックあるいはプライベートリポジトリへのアクセスをリクエストできます。 |
| リポジトリの削除 | アプリケーションはあなたが管理するリポジトリの削除をリクエストできますが、コードにアクセスすることはできません。 |{% ifversion projects-oauth-scope %}
| プロジェクト | ユーザーおよび Organization の {% data variables.projects.projects_v2 %} へのアクセス。 アプリでは、読み取りおよび書き込みアクセスか、読み取り専用アクセスのいずれかを要求できます。 |{% endif %}

## 更新された権限のリクエスト

{% data variables.product.prodname_oauth_apps %} によって新しいアクセス権限がリクエストされると、現在の権限と新しい権限の違いが知らされます。

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} と Organization

個人用のユーザー アカウントで {% data variables.product.prodname_oauth_app %} を承認する場合、自分がメンバーになっている各 Organization がどのように影響を受けるかについてもわかります。

- **{% data variables.product.prodname_oauth_app %} のアクセス制限が "*ある*" Organization の場合、その Organization でのアプリケーションの使用の承認を Organization 管理者にリクエストできます。** Organization からアプリケーションの承認が受けられない場合、アプリケーションによるアクセスは、Organization のパブリック リソースに限られます。 Organization 管理者であれば、自分で[アプリケーションを承認](/articles/approving-oauth-apps-for-your-organization)できます。

- **{% data variables.product.prodname_oauth_app %} のアクセス制限が "*ない*" Organization の場合、このアプリケーションによるその Organization のリソースへのアクセスは自動的に承認されます。** このため、すべての Organization リソースはもとより、個人用アカウント リソースへのアクセスが承認されている {% data variables.product.prodname_oauth_apps %} については、注意を払う必要があります。

SAML シングルサインオンを実施する Organization に所属している場合は、{% data variables.product.prodname_oauth_app %}を承認するたびに、Organization ごとのアクティブな SAML セッションが必要です。

{% note %}

**注:** SAML シングル サインオンを適用している Organization の認証でエラーが発生する場合は、このアプリを再承認するために、[アカウント設定ページ](https://github.com/settings/applications)で OAuth App を取り消して、認証フローをもう一度実行する必要があるかもしれません。

{% endnote %}

## 参考資料

- "[{% data variables.product.prodname_oauth_app %} アクセス制限について](/articles/about-oauth-app-access-restrictions)"
- 「[GitHub App の承認](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)」
- 「[{% data variables.product.prodname_marketplace %} のサポート](/articles/github-marketplace-support)」

{% endif %}
