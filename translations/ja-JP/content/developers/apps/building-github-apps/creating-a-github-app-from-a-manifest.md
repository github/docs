---
title: マニフェストから GitHub App を作成する
intro: GitHub App Manifest は、アプリケーションを個人のリポジトリで使いたい人と共有できる、構成済みの GitHub App です。 マニフェストフローにより、ユーザはアプリケーションを登録したり、ホストされたアプリケーションコードに登録を接続したりすることなく、GitHub App の拡張を素早く作成、インストール、開始できるようになります。
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation manifest flow
ms.openlocfilehash: 9ff6fa93e0f31de16e6ee2d96f1d7665742151d3
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135722'
---
## GitHub App Manifest について

GitHub App をマニフェストから作成する場合、URL とアプリケーションの名前をフォローするだけで済みます。 マニフェストには、アプリケーションを自動的に登録するために必要な権限、イベント、webhook URL が含まれています。 マニフェストフローは、GitHub App の登録を作成し、アプリケーションの webhook シークレット、秘密鍵 (PEM ファイル)、および GitHub App ID を取得します。 マニフェストからアプリケーションを作成したユーザーはそのアプリを所有し、[アプリの構成設定を編集したり](/apps/managing-github-apps/modifying-a-github-app/)、削除したり、GitHub 上の別のユーザーに移譲したりできます。

[Probot](https://probot.github.io/) を使用して、GitHub App Manifest の作業を開始したり、実装例を確認したりできます。 詳細については、「[Probot を使用して GitHub App Manifest フローを実装する](#using-probot-to-implement-the-github-app-manifest-flow)」を参照してください。

GitHub App Manifest を使用して構成済みのアプリケーションを作成するシナリオをいくつか挙げます。

* GitHub App を開発時に、新しい Team メンバーが迅速に取りかかれるようにする。
* 他のユーザーがアプリケーションを構成する必要なく、GitHub API を使用して GitHub App を拡張できるようにする。
* GitHub コミュニティに共有するため、GitHub App リファレンスデザインを作成する。
* 開発環境と本番環境で確実に同じ構成を使用して GitHub App をデプロイする。
* GitHub App の構成のリビジョンを追跡する。

## GitHub App Manifest フローを実装する

GitHub App Manifest フローでは、[OAuth フロー](/apps/building-oauth-apps/authorizing-oauth-apps/)に似たハンドシェイク プロセスが使用されます。 このフローでは、マニフェストを使用して [GitHub アプリを登録](/apps/building-github-apps/creating-a-github-app/)し、アプリの秘密キー、Webhook シークレット、ID の取得に使用される一時的な `code` を受け取ります。

{% note %}

**注:** GitHub App Manifest フローの 3 つのステップすべてを 1 時間以内に完了する必要があります。

{% endnote %}

GitHub App Manifest フローを実装するには、以下の 3 つのステップに従います。

1. GitHub にユーザをリダイレクトして新しい GitHub App を作成する。
1. GitHub がユーザをリダイレクトしてサイトに戻す。
1. 一時コードをやり取りして、アプリケーションの構成を取得する。

### 1. GitHub にユーザーをリダイレクトして新しい GitHub アプリを作成する

ユーザーをリダイレクトして新しい GitHub アプリを作成するには、クリックすると個人アカウントの場合は `https://github.com/settings/apps/new` に、組織アカウントの場合は `https://github.com/organizations/ORGANIZATION/settings/apps/new` に対して `POST` 要求を送信する[リンクを提供](#examples)します。`ORGANIZATION` は、アプリを作成する組織アカウントの名前に置き換えます。

[GitHub App Manifest パラメーター](#github-app-manifest-parameters)を、JSON でエンコードされた文字列として `manifest` というパラメーターに含める必要があります。 また、セキュリティを強化するために `state` [パラメーター](#parameters)を含めることもできます。

アプリを作成するユーザーは GitHub ページにリダイレクトされます。そのページには、`manifest` パラメーターに含めたアプリの名前をユーザーが編集できる入力フィールドがあります。 `manifest` に `name` を含めない場合は、ユーザーがこのフィールドでアプリの独自の名前を設定できます。

![GitHub App Manifest の作成](/assets/images/github-apps/create-github-app-manifest.png)

#### GitHub App Manifest のパラメータ

 名前 | Type | 説明
-----|------|-------------
`name` | `string` | GitHub App の名前。
`url` | `string` | **必須。** GitHub アプリのホームページ。
`hook_attributes` | `object` | GitHub App の webhook の構成。
`redirect_url` | `string` | ユーザーがマニフェストから GitHub アプリの作成を開始した後にリダイレクトする完全な URL。
`callback_urls` | `array of strings` | インストールの承認後にリダイレクトする完全な URL。 最大 10 個のコールバック URL を指定できます。
`setup_url` | `string` | 追加設定が必要な場合、GitHub アプリをインストールした後にユーザーをリダイレクトする先の完全な URL。
`description` | `string` | GitHub App の説明。
`public` | `boolean` | GitHub アプリを公開する場合は `true` に設定し、アプリの所有者のみがアクセスできるようにするには `false` に設定します。
`default_events` | `array` | GitHub アプリがサブスクライブする[イベント](/webhooks/event-payloads)のリスト。
`default_permissions` | `object` | GitHub アプリに必要な[アクセス許可](/rest/reference/permissions-required-for-github-apps)のセット。 このオブジェクトの形式は、キーとしてアクセス許可の名前 (たとえば `issues`) を、値としてアクセスの種類 (たとえば `write`) を使います。

`hook_attributes` オブジェクトには、次のキーがあります。

名前 | Type | 説明
-----|------|-------------
`url` | `string` | **必須。** Webhook の `POST` 要求を受け取るサーバーの URL。
`active` | `boolean` | フックがトリガーされた時に、イベントの内容が配信される (デフォルトはtrue)。

#### パラメーター

 名前 | Type | 説明
-----|------|-------------
`state`| `string` | {% data reusables.apps.state_description %}

#### 例

次の例では、個人アカウントに対して `POST` 要求をトリガーするボタンがある Web ページ上のフォームを使用します。

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
   "callback_urls": [
     "https://example.com/callback"
   ],
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

次の例では、組織アカウントに対して `POST` 要求をトリガーするボタンがある Web ページ上のフォームを使用します。 `ORGANIZATION` は、アプリを作成したい組織アカウントの名前に置き換えてください。

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
   "callback_urls": [
     "https://example.com/callback"
   ],
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

### 2. GitHub によってユーザーがサイトにリダイレクトされる

ユーザーが **[GitHub アプリの作成]** をクリックすると、GitHub によって、コード パラメーターに一時的な `code` を含む `redirect_url` にリダイレクトされます。 たとえば次のような点です。

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

`state` パラメーターを指定した場合は、そのパラメーターも `redirect_url` に表示されます。 たとえば次のような点です。

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

### 3. 一時的なコードを交換してアプリの構成を取得する

ハンドシェイクを完了するには、「[マニフェストから GitHub アプリを作成する](/rest/reference/apps#create-a-github-app-from-a-manifest)」のエンドポイントに対して `POST` 要求で一時的な `code` を送信します。 その応答には、`id` (GitHub アプリ ID)、`pem` (秘密キー)、`webhook_secret` が含まれます。 GitHub はアプリケーションに対する webhook シークレットを自動的に作成します。 これらの値は、アプリケーションのサーバーの環境変数に格納できます。 たとえば、アプリで [dotenv](https://github.com/bkeepers/dotenv) を使用して環境変数を格納する場合は、アプリの `.env` ファイルに変数を格納します。

GitHub App Manifest フローのこのステップを、1 時間以内に完了する必要があります。

{% note %}

**注:** このエンドポイントはレート制限されています。 現在のレート制限状態を確認する方法については、「[レート制限](/rest/reference/rate-limit)」を参照してください。

{% endnote %}

    POST /app-manifests/{code}/conversions

エンドポイントの応答について詳しくは、「[マニフェストから GitHub アプリを作成する](/rest/reference/apps#create-a-github-app-from-a-manifest)」を参照してください。

マニフェストフローの最後のステップをフローからアプリケーションを作成するユーザは、登録した GitHub App の所有者となり、そのユーザの任意の個人用リポジトリにその GitHub App をインストールできます。 所有者は、GitHub API を使用してアプリケーションを拡張したり、所有権を他のユーザに移譲したり、任意の時に削除したりできます。

## Probot を使用してGitHub App Manifest フローを実装する

[Probot](https://probot.github.io/) は [Node.js](https://nodejs.org/) で構築されたフレームワークです。Webhook の検証や認証の実行など、すべての GitHub アプリで必要になるタスクの多くを実行できます。 Probot によって [GitHub App Manifest フロー](#implementing-the-github-app-manifest-flow)が実装され、簡単に GitHub アプリのリファレンス デザインを作成し、GitHub コミュニティと共有できます。

共有する Probot App を作成するには、次の手順に従います。

1. [新しい GitHub アプリを生成します](https://probot.github.io/docs/development/#generating-a-new-app)。
1. 作成したプロジェクトを開き、`app.yml` ファイルの設定をカスタマイズします。 Probot では、`app.yml` の設定が [GitHub App Manifest パラメーター](#github-app-manifest-parameters)として使用されます。
1. アプリケーションのカスタムコードを追加します。
1. [GitHub アプリをローカルで実行する](https://probot.github.io/docs/development/#running-the-app-locally)か、[任意の場所でホストします](#hosting-your-app-with-glitch)。 ホストされたアプリの URL に移動すると、 **[GitHub App を登録]** ボタンがある Web ページが表示され、これをクリックすると構成済みのアプリを作成できます。 以下の Web ページは、Probot による GitHub App Manifest フローの[ステップ 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) の実装です。

![Probot GitHub App の登録](/assets/images/github-apps/github_apps_probot-registration.png)

Probot では、[dotenv](https://github.com/bkeepers/dotenv) を使用して、`.env` ファイルを作成し、`APP_ID`、`PRIVATE_KEY`、`WEBHOOK_SECRET` 環境変数を[アプリ構成から取得した](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)値を使用して設定します。

### Glitch でアプリケーションをホストする

アプリをホストおよび共有するために [Glitch](https://glitch.com/) を使用した [Probot アプリの例](https://glitch.com/~auspicious-aardwolf)を確認できます。 この例では、[Checks API](/rest/reference/checks) を使用し、`app.yml` ファイルで必要な Checks API イベントとアクセス許可を選択します。 Glitch は、既存のアプリケーションを流用して独自のアプリケーションを作成 (リミックス) できるツールです。 アプリケーションをリミックスすると、アプリケーションのコピーが作成され、Glitch はそれをホストしてデプロイします。 Glitch アプリのリミックスについては、[Glitch の概要](https://glitch.com/about/)に関するページを参照してください。
