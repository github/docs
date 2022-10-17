---
title: 添付コンテンツを使用する
intro: 添付コンテンツを使うと、GitHub Appは登録されたドメインにリンクするURLに対し、GitHub内でより多くの情報を提供できます。 GitHubは、アプリケーションから提供された情報を、IssueやPull Requestのボディやコメント内のURLの下に表示します。
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  ghes: <3.4
topics:
  - GitHub Apps
ms.openlocfilehash: f557a804d48144df24398f75e90a589d563d941b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081024'
---
{% data reusables.pre-release-program.content-attachments-public-beta %}

## 添付コンテンツについて

GitHub App では、`content_reference` イベントをトリガーするドメインを登録できます。 登録したドメインにリンクする URL が issue または pull request の本文またはコメントに含まれている場合、アプリは [`content_reference` webhook](/webhooks/event-payloads/#content_reference) を受け取ります。 添付コンテンツを使用して、Issueまたはプルリクエストに追加したURLについてのコンテキストやデータを視覚的に追加できます。 URL は完全修飾 URL である必要があり、`http://` または `https://` のいずれかで始まります。 markdown リンクの一部である URL は無視され、`content_reference` イベントをトリガーしません。

{% data variables.product.prodname_unfurls %} APIを使用する前に、以下を行ってGitHub Appのコンテンツ参照を設定する必要があります。
* "コンテンツ参照" のアクセス許可をアプリ `Read & write` に付与します。
* [Content references] 権限を設定する際に、一般にアクセス可能なドメインを5つまで登録します。 コンテンツ参照ドメインを設定する際は、IPアドレスは使用しないでください。 ドメイン名 (example.com) またはサブドメイン (subdomain.example.com) を登録できます。
* アプリケーションを [Content reference] イベントにサブスクライブします。

アプリケーションがリポジトリにインストールされると、登録されたドメインへのURLが含まれるIssueまたはプルリクエストのコメントでは、コンテンツ参照イベントが生成されます。 アプリケーションは、コンテンツ参照URLがポストされてから6時間以内に添付コンテンツを作成しなければなりません。

添付コンテンツが、URLを遡って更新することはありません。 上記でまとめた要件に従ってアプリケーションを設定した後に、ユーザがリポジトリにアプリケーションをインストールしてから、Issueまたはプルリクエストに追加したURLに対してのみ機能します。

GitHub App のアクセス許可とイベント サブスクリプションの構成に必要な手順については、「[GitHub App の作成](/apps/building-github-apps/creating-a-github-app/)」または「[GitHub App のアクセス許可の編集](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

## 添付コンテンツフローを実装する

添付コンテンツのフローは、issue または pull request 中の URL、`content_reference` Webhook イベント、追加情報で issue または pull request を更新するために呼ぶ必要がある REST API エンドポイント間の関係を示します。

**ステップ 1.** 「[コンテンツの添付ファイルについて](#about-content-attachments)」で説明されているガイドラインを使用して、アプリを設定します。 [Probot アプリの例](#example-using-probot-and-github-app-manifests)を使用して、コンテンツの添付ファイルの使用を開始することもできます。

**ステップ 2.** issue または pull request に登録したドメインの URL を追加します。 `http://` または `https://` で始まる完全修飾 URL を使用する必要があります。

![Issueに追加されたURL](/assets/images/github-apps/github_apps_content_reference.png)

**ステップ 3.** アプリは、アクション `created` 含む [`content_reference` Webhook](/webhooks/event-payloads/#content_reference) を受け取ります。

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {
    "full_name": "Codertocat/Hello-World",
  },
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**ステップ 4.** アプリは、REST API で[コンテンツ添付ファイルを作成](/rest/reference/apps#create-a-content-attachment)するために、`content_reference` `id` および `repository` `full_name` フィールドを使用します。 また、[GitHub App インストール](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)として `installation` `id` を認証する必要もあります。

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

`body` パラメーターには markdown を含めることができます。

```shell
curl -X POST \
  {% data variables.product.api_url_code %}/repos/Codertocat/Hello-World/content_references/17/attachments \
  -H 'Accept: application/vnd.github.corsair-preview+json' \
  -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
  -d '{
    "title": "[A-1234] Error found in core/models.py file",
    "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
}'
```

インストール トークンの作成の詳細については、「[GitHub App としての認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)」を参照してください。

**ステップ 5.** pull request または issue コメント内のリンクの下に、新しい添付コンテンツが表示されます。

![Issueのリファレンスに添付されたコンテンツ](/assets/images/github-apps/content_reference_attachment.png)

## GraphQLでの添付コンテンツの利用
GraphQL API で `createContentAttachment` ミューテーションを参照できるように、[`content_reference` webhook](/webhooks/event-payloads/#content_reference) イベントで `node_id` を提供します。

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

次に例を示します。

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
cURLの例:

```shell
curl -X "POST" "{% data variables.product.api_url_code %}/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

詳細については `node_id`、「[グローバル ノード ID の使用](/graphql/guides/using-global-node-ids)」を参照してください。

## ProbotとGitHub Appマニフェストの利用例

{% data variables.product.prodname_unfurls %} API を使用できる GitHub App を手早くセットアップするために、[Probot](https://probot.github.io/) を使用できます。 Probot が GitHub アプリ マニフェスト使用する方法については、「[マニフェストから GitHub App を作成する](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。

Probotアプリケーションを作成するには、以下のステップに従ってください。

1. [新しい GitHub App を生成します](https://probot.github.io/docs/development/#generating-a-new-app)。
2. 作成したプロジェクトを開き、`app.yml` ファイルの設定をカスタマイズします。 `content_reference` イベントを登録し、`content_references` 書き込みアクセス許可を有効にします。

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. `content_reference` イベントを処理して REST API を呼び出すには、次のコードを `index.js` ファイルに追加します。

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/repos/${context.payload.repository.full_name}/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [GitHub App をローカルで実行します](https://probot.github.io/docs/development/#running-the-app-locally)。 `http://localhost:3000` に移動し、 **[GitHub App を登録]** ボタンをクリックします。

   ![Probot GitHub App の登録](/assets/images/github-apps/github_apps_probot-registration.png)

5. テストリポジトリにアプリケーションをインストールしてください。
6. テストリポジトリでIssueを作成してください。
7. オープンした issue に `app.yml` ファイルで設定した URL を含むコメントを追加します。
8. Issueのコメントを見ると、以下のように更新されています。

   ![Issueのリファレンスに添付されたコンテンツ](/assets/images/github-apps/content_reference_attachment.png)
