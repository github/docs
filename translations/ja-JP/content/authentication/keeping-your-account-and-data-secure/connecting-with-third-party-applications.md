---
title: サードパーティアプリケーションと接続する
intro: '{% data variables.product.product_name %}のアイデンティティを、OAuth を使うサードパーティのアプリケーションに接続できます。 これらのアプリケーションを認可する際には、そのアプリケーションを信頼するか、誰が開発したのか、そのアプリケーションがどういった種類の情報にアクセスしたいのかを確認すべきです。'
redirect_from:
  - /articles/connecting-with-third-party-applications
  - /github/authenticating-to-github/connecting-with-third-party-applications
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/connecting-with-third-party-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Third-party applications
ms.openlocfilehash: b8cd20d36926c373116061e211be62701b1bd2f6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115053'
---
サードパーティアプリケーションが {% data variables.product.product_name %} ログインであなたを識別したい場合、そのアプリケーションの開発者の連絡先情報と、リクエストされている情報のリストのページが表示されます。

## アプリケーション開発者に連絡する

アプリケーションは、{% data variables.product.product_name %} 以外のサードパーティにより開発されているため、アプリケーションがアクセスを要求しているデータをどう使うかについて、私たちは正確に把握していません。 アプリケーションについて、質問や懸念がある場合は、ページ上部の開発者情報を使って、アプリケーション管理者に連絡できます。

![{% data variables.product.prodname_oauth_app %}オーナー情報](/assets/images/help/platform/oauth_owner_bar.png)

開発者が情報を入力している場合は、ページの右側に、アプリケーションの詳細情報や関連ウェブサイトが表示されます。

![OAuth アプリケーションの情報とウェブサイト](/assets/images/help/platform/oauth_app_info.png)

## アプリケーションのアクセスとデータのタイプ

アプリケーションは、{% data variables.product.product_name %} のデータに対して *読み取り* または *書き取り* アクセスを持つことができます。

- **読み取りアクセス** では、アプリケーションはデータの "*閲覧*" のみ可能です。
- **書き込みアクセス** では、アプリケーションはデータの "*変更*" が可能です。

### OAuth のスコープについて

*スコープ* は、アプリケーションがパブリックおよび非パブリックのデータへのアクセスを要求する権限の名前付きのグループです。

{% data variables.product.product_name %} と統合するサードパーティアプリケーションを使用したい場合、そのアプリケーションは、データに対してどういった種類のアクセスが必要になるのかをあなたに通知します。 アプリケーションにアクセスを許可すれば、アプリケーションはあなたの代わりにデータの読み取りや変更といったアクションを行えるようになります。 たとえば、`user:email` スコープを要求するアプリを使用する必要がある場合、アプリは個人用メール アドレスへの読み取り専用アクセス権を持つことになります。 詳しい情報については、「[{% data variables.product.prodname_oauth_apps %} のスコープについて](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)」を参照してください。

{% tip %}

**注:** 現在、ソース コード アクセスを読み取り専用にスコープすることはできません。

{% endtip %}

### リクエストされるデータの種類

アプリケーションがリクエストできるデータの種類はいくつかあります。

![OAuth アクセスの詳細](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**ヒント:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

| データの種類 | 説明 |
| --- | --- |
| コミットのステータス | サードパーティアプリケーションに、コミットのステータスを報告するためのアクセスを許可できます。 コミットステータスのアクセスがあれば、アプリケーションはビルドが特定のコミットに対して成功したかどうかを判定できます。 アプリケーションはコードへはアクセスできませんが、特定のコミットに対するステータス情報を読み書きすることは<em>できます</em>。 |
| デプロイメント | デプロイメントステータスにアクセスできれば、アプリケーションは、リポジトリの特定のコミットに対してデプロイメントが成功したかどうかを判断できます。 アプリケーションはコードにアクセスできなくなります。 |
| Gists | アプリケーションは、[Gist](https://gist.github.com) アクセスで、{% ifversion not ghae %}パブリックおよび{% else %}内部および{% endif %}シークレットの両方の Gists の読み取りや書き込みができるようになります。 |
| フック | アプリケーションは、[Webhook](/webhooks) アクセスで、管理するリポジトリのフック構成の読み取りや書き込みができるようになります。 |
| 通知 | 通知アクセスがあれば、アプリケーションは Issue やプルリクエストへのコメントなど、あなたの {% data variables.product.product_name %} 通知を読むことができます。 ただし、アプリケーションはリポジトリ内へはアクセスできません。 |
| 組織とチーム | Organization および Team のアクセスがあれば、アプリケーションは Organization および Team のメンバー構成へのアクセスと管理ができます。 |
| ユーザーの個人データ | ユーザデータには、名前、メールアドレス、所在地など、ユーザプロファイル内の情報が含まれます。 |
| リポジトリ | リポジトリ情報には、コントリビュータの名前、あなたが作成したブランチ、リポジトリ内の実際のファイルなどが含まれます。 アプリケーションは、可視可能な全レベルのすべてのリポジトリへのアクセスを要求できます。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)に関する説明を参照してください。 |
| リポジトリの削除 | アプリケーションはあなたが管理するリポジトリの削除をリクエストできますが、コードにアクセスすることはできません。 |

## 更新された権限のリクエスト

アプリケーションは新しいアクセス権限をリクエストできます。 権限の更新を要求する場合、アプリケーションはその違いについて通知します。

![サードパーティアプリケーションのアクセスを変更する](/assets/images/help/platform/oauth_existing_access_pane.png)
