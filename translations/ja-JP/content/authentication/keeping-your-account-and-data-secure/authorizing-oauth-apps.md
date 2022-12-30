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
ms.openlocfilehash: 7d116f8fc5117cdcbdbd5582e007351c47b2d55d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184021'
---
{% data variables.product.prodname_oauth_app %} から {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} のアカウントによる識別を求められた場合、アプリの開発者の連絡先情報と要求されている特定のデータのリストが記載されたページが表示されます。

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

SAML シングル サインオン (SSO) が有効になっている組織に属していて、過去に SAML 経由で認証することでその組織のリンクされた ID を作成した場合は、{% data variables.product.prodname_oauth_app %} を承認するたびに、各組織に対してアクティブな SAML セッションが必要です。

{% note %}

**注:** SAML によって保護された組織にアクセスする承認された {% data variables.product.prodname_oauth_app %} または {% data variables.product.prodname_github_app %} で問題が発生した場合は、[承認された {% data variables.product.prodname_github_apps %}](https://github.com/settings/applications) または[承認された {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/apps/authorizations) ページからアプリを取り消し、組織にアクセスしてアクティブな SAML セッションを認証して確立した後、それにアクセスしてアプリの再認証を試みることが必要になる場合があります。

{% endnote %}

## 参考資料

- "[{% data variables.product.prodname_oauth_app %} アクセス制限について](/articles/about-oauth-app-access-restrictions)"
- 「[GitHub App の承認](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)」
- 「[{% data variables.product.prodname_marketplace %} のサポート](/articles/github-marketplace-support)」

{% endif %}
