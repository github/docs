---
title: 添付コンテンツを使用する
intro: 添付コンテンツを使うと、GitHub Appは登録されたドメインにリンクするURLに対し、GitHub内でより多くの情報を提供できます。 GitHubは、アプリケーションから提供された情報を、IssueやPull Requestのボディやコメント内のURLの下に表示します。
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% data reusables.pre-release-program.content-attachments-public-beta %}

### 添付コンテンツについて

GitHub Appは、`content_reference`イベントをトリガーするドメインを登録できます。 Issueまたはプルリクエストの、ボディまたはコメントに、登録されたドメインにリンクするURLが含まれている場合、アプリケーションは[`content_reference` webhook](/webhooks/event-payloads/#content_reference)を受け取ります。 添付コンテンツを使用して、Issueまたはプルリクエストに追加したURLについてのコンテキストやデータを視覚的に追加できます。 URLは、`http://`または`https://`から始まる、完全修飾URLである必要があります。 Markdownリンクの一部であるURLは無視され、`content_reference`イベントをトリガーしません。

{% data variables.product.prodname_unfurls %} APIを使用する前に、以下を行ってGitHub Appのコンテンツ参照を設定する必要があります。
* アプリケーションに、[Content references] に対する`Read & write`権限を付与します。
* [Content references] 権限を設定する際に、一般にアクセス可能なドメインを5つまで登録します。 コンテンツ参照ドメインを設定する際は、IPアドレスは使用しないでください。 ドメイン名 (example.com) またはサブドメイン (subdomain.example.com) を登録できます。
* アプリケーションを [Content reference] イベントにサブスクライブします。

アプリケーションがリポジトリにインストールされると、登録されたドメインへのURLが含まれるIssueまたはプルリクエストのコメントでは、コンテンツ参照イベントが生成されます。 アプリケーションは、コンテンツ参照URLがポストされてから6時間以内に添付コンテンツを作成しなければなりません。

添付コンテンツが、URLを遡って更新することはありません。 上記でまとめた要件に従ってアプリケーションを設定した後に、ユーザがリポジトリにアプリケーションをインストールしてから、Issueまたはプルリクエストに追加したURLに対してのみ機能します。

GitHub App の権限やイベントのサブスクリプションを設定するために必要なステップに関する詳しい情報については、「<[GitHub App を作成する](/apps/building-github-apps/creating-a-github-app/)」または「[GitHub App の権限を編集する](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

### 添付コンテンツフローを実装する

添付コンテンツのフローは、IssueもしくはPull Request中のURL、`content_reference` webhookイベント、追加情報でIssueもしくはPull Requestを更新するために呼ぶ必要があるREST APIエンドポイント間の関係を示します。

**ステップ 1.** [添付コンテンツについて](#about-content-attachments)に記載されているガイドラインに従ってアプリケーションを設定します。 添付コンテンツを使い始めるには、[Probotアプリケーションのサンプル](#example-using-probot-and-github-app-manifests)を使うこともできます。

**ステップ2。**IssueもしくはPull Requestに登録したドメインのURLを追加します。 `http://`もしくは`https://`で始まる完全修飾URLを使わなければなりません。

![Issueに追加されたURL](/assets/images/github-apps/github_apps_content_reference.png)

**ステップ3。**アプリケーションは`created`アクション付きで[`content_reference` webhook](/webhooks/event-payloads/#content_reference)を受信します。

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

**Step 4.** The app uses the `content_reference` `id` and `repository` `full_name` fields to [Create a content attachment](/rest/reference/apps#create-a-content-attachment) using the REST API. [GitHub Appのインストール](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)として認証を受けるために、`installation` `id`も必要になります。

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

`body`パラメータにはMarkdownが含まれていることがあります。

    ```shell
    curl -X POST \
      https://api.github.com/repos/Codertocat/Hello-World/content_references/17/attachments \
      -H 'Accept: application/vnd.github.corsair-preview+json' \
      -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
      -d '{
        "title": "[A-1234] Error found in core/models.py file",
        "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
    }'
    ```

インストールトークンの作成に関する詳しい情報については「[GitHub Appとして認証する](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)」を参照してください。

**ステップ5。** Pull RequestもしくはIssueコメント内のリンクの下に、新しい添付コンテンツが表示されます。

![Issueのリファレンスに添付されたコンテンツ](/assets/images/github-apps/content_reference_attachment.png)

### GraphQLでの添付コンテンツの利用
[`content_reference` webhook](/webhooks/event-payloads/#content_reference)イベント中で`node_id`を提供しているので、GraphQL APIの`createContentAttachment`ミューテーションを参照できます。

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

例:

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
curl -X "POST" "https://api.github.com/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

`node_id`の詳しい情報については「[グローバルノードIDの利用](/graphql/guides/using-global-node-ids)」を参照してください。

### ProbotとGitHub Appマニフェストの利用例

{% data variables.product.prodname_unfurls %} APIを使用できるGitHub Appを手早くセットアップするには、[Probot](https://probot.github.io/)が利用できます。 ProbotがどのようにGitHub Appのマニフェストを使用するかを学ぶには、「[マニフェストからのGitHub Appの作成](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。

Probotアプリケーションを作成するには、以下のステップに従ってください。

1. [新しい GitHub App を作成](https://probot.github.io/docs/development/#generating-a-new-app)します。
2. 作成したプロジェクトを開き、 `app.yml` ファイルの設定をカスタマイズします。 `content_reference`イベントをサブスクライブし、`content_references`の書き込み権限を有効化してください。

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. このオブジェクトのフォーマットは、
    # キーの権限名（たとえばissues）と値のためのアクセスの
    # 種類（たとえばwrite）を使います。
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. このコードを`index.js` ファイルに追加して、`content_reference`を処理してREST APIを呼ぶようにします。

    ``` javascript
    module.exports = app => {
      // ここにコードを書く
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

4. [GitHub Appをローカルで動作させます](https://probot.github.io/docs/development/#running-the-app-locally)。 `http://localhost:3000`にアクセスして、**Register GitHub App**ボタンをクリックしてください。

   ![Probot GitHub App の登録](/assets/images/github-apps/github_apps_probot-registration.png)

5. テストリポジトリにアプリケーションをインストールしてください。
6. テストリポジトリでIssueを作成してください。
7. オープンしたIssueに`app.yml`ファイルで設定したURLを含むコメントを追加してください。
8. Issueのコメントを見ると、以下のように更新されています。

   ![Issueのリファレンスに添付されたコンテンツ](/assets/images/github-apps/content_reference_attachment.png)
