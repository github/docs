---
title: マニフェストから GitHub App を作成する
intro: GitHub App Manifest は、アプリケーションを個人のリポジトリで使いたい人と共有できる、構成済みの GitHub App です。 マニフェストフローにより、ユーザはアプリケーションを登録したり、ホストされたアプリケーションコードに登録を接続したりすることなく、GitHub App の拡張を素早く作成、インストール、開始できるようになります。
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

### GitHub App Manifest について

GitHub App をマニフェストから作成する場合、URL とアプリケーションの名前をフォローするだけで済みます。 マニフェストには、アプリケーションを自動的に登録するために必要な権限、イベント、webhook URL が含まれています。 マニフェストフローは、GitHub App の登録を作成し、アプリケーションの webhook シークレット、秘密鍵 (PEM ファイル)、および GitHub App ID を取得します。 マニフェストからアプリケーションを作成した人はそのアプリケーションを所有し、[アプリケーションの構成設定を編集](/apps/managing-github-apps/modifying-a-github-app/)、削除、または GitHub 上の他のユーザに移譲することを選択できます。

[Probot](https://probot.github.io/) を使用して GitHub App Manifest に取りかかったり、実装例を見たりすることができます。 詳細については、「[Probot を使用して GitHub App Manifest フローを実装する](#using-probot-to-implement-the-github-app-manifest-flow)」を参照してください。

GitHub App Manifest を使用して構成済みのアプリケーションを作成するシナリオをいくつか挙げます。

* GitHub App を開発時に、新しい Team メンバーが迅速に取りかかれるようにする。
* 他のユーザーがアプリケーションを構成する必要なく、GitHub API を使用して GitHub App を拡張できるようにする。
* GitHub コミュニティに共有するため、GitHub App リファレンスデザインを作成する。
* 開発環境と本番環境で確実に同じ構成を使用して GitHub App をデプロイする。
* GitHub App の構成のリビジョンを追跡する。

### GitHub App Manifest フローを実装する

GitHub App Manifest フローは、[OAuth フロー](/apps/building-oauth-apps/authorizing-oauth-apps/)と同様のハンドシェイクプロセスを使用します。 このフローではマニフェストを使用して [GitHub App を登録](/apps/building-github-apps/creating-a-github-app/) し、アプリケーションの秘密鍵、webhook シークレット、およびID を取得するための一時 `code` を受け取ります。

{% note %}

**注釈:** 1 時間以内に、GitHub App Manifest フローの以下の 3 つのステップすべてを完了する必要があります。

{% endnote %}

GitHub App Manifest フローを実装するには、以下の 3 つのステップに従います。

1. GitHub にユーザをリダイレクトして新しい GitHub App を作成する。
1. GitHub がユーザをリダイレクトしてサイトに戻す。
1. 一時コードをやり取りして、アプリケーションの構成を取得する。

#### 1. GitHub にユーザをリダイレクトして新しい GitHub App を作成する

新しい GitHub App を作成するためユーザをリダイレクトするには、ユーザアカウントが `https://github.com/settings/apps/new` に、または Organization アカウントが `https://github.com/organizations/ORGANIZATION/settings/apps/new` に `POST` リクエストをクリックして送信するための[リンクを指定](#examples)します。`ORGANIZATION` は、アプリケーションが作成される Organization アカウントの名前で置き換えてください。

`manifest` と呼ばれるパラメータに、JSON エンコードされた文字列として [GitHub App Manifest パラメータ](#github-app-manifest-parameters)を含める必要があります。 セキュリティ強化のため、`state` [parameter](#parameters) を追加することもできます。

アプリケーションを作成するユーザは GitHub ページにリダイレクトされます。GitHub ページには、 `manifest` パラメータに含めるアプリケーションの名前を編集する入力フィールドがあります。 `manifest` に `name` を含めていない場合、ユーザがこのフィールドでアプリケーションに独自の名前を設定できます。

![GitHub App Manifest の作成](/assets/images/github-apps/create-github-app-manifest.png)

##### GitHub App Manifest のパラメータ

 | 名前                    | 種類                 | 説明                                                                                                                                                                                                                                       |
 | --------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `name`                | `string`           | GitHub App の名前。                                                                                                                                                                                                                          |
 | `url`                 | `string`           | **必須。**GitHub App のホームページ。                                                                                                                                                                                                               |
 | `hook_attributes`     | `オブジェクト`           | GitHub App の webhook の構成。                                                                                                                                                                                                                |
 | `redirect_url`        | `string`           | The full URL to redirect to after a user initiates the creation of a GitHub App from a manifest.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}
 | `callback_urls`       | `array of strings` | A full URL to redirect to after someone authorizes an installation. You can provide up to 10 callback URLs.{% else %}
 | `callback_url`        | `string`           | A full URL to redirect to after someone authorizes an installation.{% endif %}
 | `説明`                  | `string`           | GitHub App の説明。                                                                                                                                                                                                                          |
 | `public`              | `boolean`          | GitHub App を公開する場合には `true` に、アプリケーションの所有者のみがアクセスできるようにするには `false` を設定。                                                                                                                                                                 |
 | `default_events`      | `array`            | GitHub App がサブスクライブする[イベント](/webhooks/event-payloads)のリスト。                                                                                                                                                                               |
 | `default_permissions` | `オブジェクト`           | GitHub App が必要とする[権限](/rest/reference/permissions-required-for-github-apps)のセット。 オブジェクトのフォーマットでは、キーの権限名 (`issues` など) と、値のアクセスタイプ (`write` など) を使用します。                                                                                   |

`hook_attributes` オブジェクトは、以下のキーを持っています。

| 名前       | 種類        | 説明                                              |
| -------- | --------- | ----------------------------------------------- |
| `url`    | `string`  | **必須。**webhook の `POST` リクエストを受信するサーバーの URL です。 |
| `active` | `boolean` | フックがトリガーされた時に、イベントの内容が配信される (デフォルトはtrue)。       |

##### パラメータ

 | 名前      | 種類       | 説明                                          |
 | ------- | -------- | ------------------------------------------- |
 | `state` | `string` | {% data reusables.apps.state_description %}

##### サンプル

この例では、ウェブページ上にユーザアカウントに対して `POST` リクエストをトリガするボタンがあるフォームを使用します。

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

この例では、ウェブページ上に Organization アカウントに対して `POST` リクエストをトリガするボタンがあるフォームを使用します。 `ORGANIZATION` は、アプリケーションを作成する場所の Organization アカウントの名前に置き換えます。

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

#### 2. GitHub がユーザをリダイレクトしてサイトに戻す

**Create GitHub App** をクリックすると、GitHub はコードパラメータに一時的 `code` を付けて `redirect_url` にリダイレクトして戻します。 例:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

`state` パラメータを指定した場合、`redirect_url` にもそのパラメータが表示されます。 例:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

#### 3. 一時コードをやり取りして、アプリケーションの構成を取得する

ハンドシェイクを完了するため、`POST` リクエストにある一時的 `code` を [GitHub App をマニフェストから作成する](/rest/reference/apps#create-a-github-app-from-a-manifest)エンドポイントに送信します。 このレスポンスには `id` (GitHub App ID)、`pem` (秘密鍵)、`webhook_secret` が含まれます。 GitHub はアプリケーションに対する webhook シークレットを自動的に作成します。 これらの値は、アプリケーションのサーバーの環境変数に格納できます。 たとえば、アプリケーションが [dotenv](https://github.com/bkeepers/dotenv) を使用して環境変数を格納する場合、変数をアプリケーションの `.env` ファイルに格納することになるでしょう。

GitHub App Manifest フローのこのステップを、1 時間以内に完了する必要があります。

{% note %}

**注釈:** このエンドポイントはレート制限されます。 現在のレート制限状態を確認する方法については、[レート制限](/rest/reference/rate-limit)を参照してください。

{% endnote %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% data reusables.pre-release-program.fury-pre-release %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

    POST /app-manifests/{code}/conversions

エンドポイントのレスポンスに関する詳しい情報については、[マニフェストから GitHub App を作成する](/rest/reference/apps#create-a-github-app-from-a-manifest)を参照してください。

マニフェストフローの最後のステップをフローからアプリケーションを作成するユーザは、登録した GitHub App の所有者となり、そのユーザの任意の個人用リポジトリにその GitHub App をインストールできます。 所有者は、GitHub API を使用してアプリケーションを拡張したり、所有権を他のユーザに移譲したり、任意の時に削除したりできます。

### Probot を使用してGitHub App Manifest フローを実装する

[Probot](https://probot.github.io/) は [Node.js](https://nodejs.org/) で構築されたフレームワークで、webhook の検証や認証の実行といった、あらゆる GitHub App が必要とする多くのタスクを実行します。 Probot は [GitHub App マニフェストフロー](#implementing-the-github-app-manifest-flow)を実装し、GitHub App のリファレンスデザインを作成し、GitHub コミュニティで共有することを容易化します。

共有する Probot App を作成するには、次の手順に従います。

1. [新しい GitHub App を作成](https://probot.github.io/docs/development/#generating-a-new-app)します。
1. 作成したプロジェクトを開き、 `app.yml` ファイルの設定をカスタマイズします。 Probotは、`app.yml` の設定を [GitHub App Manifest パラメータ](#github-app-manifest-parameters)として使用します。
1. アプリケーションのカスタムコードを追加します。
1. [GitHub App をローカルで](https://probot.github.io/docs/development/#running-the-app-locally) 実行するか、[任意の場所にホスト](#hosting-your-app-with-glitch) ホストします。 ホストされたアプリの URL に移動すると、 [**Register GitHub App**] ボタンがあるウェブページが表示され、これをクリックすると構成済みのアプリケーションを作成できます。 以下のウェブページは、GitHub App Manifest フローの [ステップ 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) で Probot を実装したものです。

![Probot GitHub App の登録](/assets/images/github-apps/github_apps_probot-registration.png)

[dotenv](https://github.com/bkeepers/dotenv) を使用して、Probot は `.env` ファイルを作成し、`APP_ID`、`PRIVATE_KEY`、`WEBHOOK_SECRET` の環境変数に、[アプリケーションの設定](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)から取得した変数を設定します。

#### Glitch でアプリケーションをホストする

[Probot アプリケーションのサンプル](https://glitch.com/~auspicious-aardwolf)で、[Glitch](https://glitch.com/) でアプリケーションをホストして共有する例を見ることができます。 この例では、[Checks API](/rest/reference/checks) を使用し、`app.yml` ファイルで、必要な Checks API イベントと権限を選択しています。 Glitch は、既存のアプリケーションを流用して独自のアプリケーションを作成 (リミックス) できるツールです。 アプリケーションをリミックスすると、アプリケーションのコピーが作成され、Glitch はそれをホストしてデプロイします。 Glitch アプリケーションのリミックスについては、「[Glitch について](https://glitch.com/about/)」を参照してください。
