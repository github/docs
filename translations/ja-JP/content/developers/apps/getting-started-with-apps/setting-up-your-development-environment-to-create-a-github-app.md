---
title: GitHub Appを作成するための開発環境のセットアップ
intro: '新しい{% data variables.product.prodname_github_apps %}を拡張して構築するための基礎を学んでください。'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Development environment
ms.openlocfilehash: 61370cfa0643bcba91cfe78e077346cd40286e1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089943'
---
## はじめに

このガイドは、GitHub Appを設定してサーバー上で実行するために必要なステップを案内します。 GitHub Appには、webhookイベントを管理し、GitHub上のアプリケーションの登録をコードに接続するためのセットアップのステップが必要です。 このガイドのアプリケーションは、拡張して新しいGitHub Appを構築するための基盤の役目を果たします。

このガイドを終えれば、GitHub Appを登録し、webhookイベントを受信するためのWebサーバーをセットアップできます。 Smeeというツールを使ってwebhookペイロードをキャプチャし、ローカルの開発環境に転送する方法を学びます。 このセクションで設定するテンプレートのアプリケーションでは特別な処理は実施されませんが、API を使ってアプリケーション コードの作成を開始し、他の[クイックスタート ガイド](/apps/quickstart-guides/)を完了するために使用できるフレームワークとして機能します。 {% ifversion fpt or ghec %}[GitHub Marketplace](https://github.com/marketplace) と「[GitHub での作業](https://github.com/works-with)」でアプリの成功事例を確認できます。{% endif %}

このプロジェクトを完了すると、GitHub App及びインストールとして認証を受ける方法と、それらの認証方法の違いを理解できます。

以下のステップで、テンプレートのGitHub Appを設定できます。

1. [新しい Smee チャンネルの開始](#step-1-start-a-new-smee-channel)
1. [新しい GitHub アプリの登録](#step-2-register-a-new-github-app)
1. [秘密キーとアプリ IDの保存](#step-3-save-your-private-key-and-app-id)
1. [ランタイム環境の準備](#step-4-prepare-the-runtime-environment)
1. [GitHub アプリのテンプレート コードのレビュー](#step-5-review-the-github-app-template-code)
1. [サーバーの起動](#step-6-start-the-server)
1. [アカウントへのアプリのインストール](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

## 前提条件

以下に関する基本的な理解があると役立つでしょう。

* [GitHub アプリ](/apps/about-apps)
* [Webhook](/webhooks)
* [プログラミング言語の Ruby](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

とはいえ、経験のレベルにかかわらず見ていくことはできます。 その過程で必要な情報にはリンクしていきます！

始める前に、このクイックスタートで使われるテンプレートコードのリポジトリをクローンする必要があります。 ターミナルアプリケーションを開いて、コードを保存したいディレクトリに移動してください。 次のコマンドを実行して、[GitHub App template](https://github.com/github-developer/github-app-template) リポジトリを複製します。

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

## 手順 1. 新しいSmeeチャンネルの開始

ローカルのマシンをインターネットに公開することなく、GitHubがwebhookを送信するのを支援するために、Smeeというツールが利用できます。 まず https://smee.io に移動し、 **[新しいチャンネルの開始]** をクリックします。 ローカル コンピューターをインターネットに公開する他のツール ([`ngrok`](https://dashboard.ngrok.com/get-started) や [`localtunnel`](https://localtunnel.github.io/www/) など) に既に慣れている場合は、自由に使用してください。

![Smeeの新規チャンネルボタン](/assets/images/smee-new-channel.png)

新しいSmeeのチャンネルを起動すると、GitHubがwebhookペイロードを送信できるユニークなドメインが作成されます。 次のステップで必要なので、このドメインを知っておく必要があります。 `https://smee.io/qrfeVRbFbffd6vD` の一意のドメインの例を次に示します。

![Smeeのユニークなチャンネル](/assets/images/smee-unique-domain.png)

次に、ターミナルに戻って以下のステップに従い、Smeeのコマンドラインインターフェース（CLI）クライアントを実行してください。

{% note %}

**注:** 以下の手順は、Smee チャンネルのページに表示される「CLI の使用」の指示とは多少異なります。 「Node.js クライアントを使用する」または「Probot の組み込みサポートを使用する」の指示に従う必要は **ありません**。

{% endnote %}

1. クライアントをインストールします。

    ```shell
    $ npm install --global smee-client
    ```

2. クライアントを実行します (`https://smee.io/qrfeVRbFbffd6vD` を自分のドメインに置き換えます)。

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    次のような出力結果が表示されます。

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

`smee --url <unique_channel>` コマンドは、Smee チャンネルによって受信されるすべての Webhook イベントをコンピューター上で稼働している Smee クライアントに転送するように Smee に指示します。 `--path /event_handler` オプションでは、イベントが `/event_handler` ルートに転送されます。これについては、[後のセクション](#step-5-review-the-github-app-template-code)で説明します。 `--port 3000` オプションでは、サーバーがリッスンするポートのポート 3000 が指定されます。 Smeeを使えば、GitHubからのwebhookを受信するためにあなたのマシンがパブリックなインターネットに対してオープンである必要はありません。 また、ブラウザでSmeeのURLを開いて、受信したwebhookのペイロードを調べることもできます。

このターミナルのウィンドウは開いたままにしておき、このガイドの残りのステップを完了させるまでの間、Smeeに接続したままにしておくことをおすすめします。 一意のドメインを失うことなく (`ngrok`とは異なります) Smee クライアントの接続を切り、再接続することも _できます_ が、これは接続したままにしておいて、別のターミナル ウィンドウで他のコマンド ラインのタスクを実行する方が簡単な場合もあります。

## 手順 2. 新しいGitHub Appの登録

まだ GitHub アカウントをお持ちでない場合は、今すぐ[作成してください](https://github.com/join)。 続行する前にメールを確認するのを忘れないようにしてください! 新しいアプリを登録するには、GitHub プロファイルの [アプリ設定ページ](https://github.com/settings/apps)にアクセスし、 **[新しい GitHub アプリ]** をクリックします。

![**New App**を表示しているGitHubのWebサイト](/assets/images/new-app.png)

表示されるフォームで、アプリケーションの詳細を入力できます。 このページのフィールドに関する一般的な情報については、「[GitHub アプリの作成](/apps/building-github-apps/creating-a-github-app/)」を参照してください。 このガイドについては、いくつかのフィールドに特定のデータを入力する必要があります。

{% note %}

**注:** これらの設定は後でいつでも更新して、ホストされたサーバーを指すようにできます。

{% endnote %}

* "Homepage URL（ホームページのURL）"には、Smeeが発行したドメインを使用してください。 次に例を示します。

    ![ホームページURLにSmeeのドメインが入力されたフォーム](/assets/images/homepage-url.png)

* "Webhook URL（webhookのURL）"には、やはりSmeeが発行したドメインを使ってください。 次に例を示します。

    ![webhookURLにSmeeのドメインが入力されたフォーム](/assets/images/webhook-url.png)

* "Webhook secret（webhookのシークレット）"には、webhookのエンドポイントを保護するパスワードを作成してください。 これは、あなた（そしてこのフォームを介してGitHub）だけが知っているものにするべきです。 パブリックなインターネットから受信したペイロードで、webhookの送信者を検証するのに使われるので、このシークレットは重要です。 GitHub Appの設定ではこのwebhookのシークレットはオプションとなっており、これはほとんどの場合正しいですが、このテンプレートのアプリケーションコードを動作させるためには、webhookのシークレットは設定しなければなりません。

    ![webhookのシークレットが入力されたフォーム](/assets/images/webhook-secret.png)

* [アクセス許可と Webhook] のページでは、アプリケーションの一連のアクセス許可を指定できます。これにより、アプリケーションがどれだけのデータにアクセスできるかが決まります。 [リポジトリのアクセス許可] セクションで、下にある [メタデータ] にスクロールして、`Access: Read-only` を選択します。 このテンプレートアプリケーションを拡張することにしたら、後でこれらの権限を更新できます。

* [アクセス許可と Webhook] のページの下部で、これがプライベートのアプリケーションなのかパブリックのアプリケーションなのかを指定します。 これは、アプリケーションを誰がインストールできるのか、すなわちあなただけなのか、誰でもできるのかを指します。 ここでは、 **[このアカウントでのみ]** を選択して、アプリをプライベートのままにします。

    ![GitHub Appのプライバシー](/assets/images/create_app.png)

**[GitHub アプリの作成]** をクリックしてアプリを作成します。

## 手順 3. 秘密鍵とApp IDの保存

アプリを作成すると、[アプリ設定ページ](https://github.com/settings/apps)に戻ります。 ここで行うことがあと2つあります。

* **アプリケーションの秘密鍵を生成してください。** これは、後でアプリを認証するために必要です。 ページを下にスクロールし、 **[秘密キーの生成]** をクリックします。 生成される `PEM` ファイル ( _`app-name`_ - _`date`_ -`private-key.pem` など) をディレクトリに保存すると、このディレクトリで再確認できます。

    ![秘密鍵の生成ダイアログ](/assets/images/private_key.png)

* **GitHub がアプリに設定したアプリ ID を確認してください。** ランタイム環境を準備するにはこれが必要です。

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px"/>

## 手順 4. ランタイム環境の準備

情報を保護するために、アプリケーションに関するすべてのシークレットは、直接コードに埋め込むのではなく、アプリケーションが見つけることができるコンピュータのメモリ中に置いておくことをおすすめします。 [dotenv](https://github.com/bkeepers/dotenv) と呼ばれる便利な開発ツールは、プロジェクト固有の環境変数を `.env` ファイルから `ENV` にロードします。 `.env` ファイルを GitHub にチェックインしないでください。 これは、パブリックなインターネット上にさらしたくない機密情報を保存するローカルファイルです。 これを防止するために、`.env` ファイルがリポジトリの [`.gitignore`](/github/getting-started-with-github/ignoring-files/) ファイルに既に含まれています。

[[前提条件] セクション](#prerequisites)でダウンロードしたテンプレート コードには、既に `.env-example` という名前のサンプル ファイルが含まれています。 サンプル ファイルの名前を `.env-example` から `.env` に変更するか、`.env` という名前の `.env-example` ファイルのコピーを作成します。 まだ dotenv をインストールしていませんが、`bundle install` を実行するときは、このクイック スタートの後半でインストールします。 **注:** このガイドの手順を参照するクイック スタートには、`.env-example` ファイルに追加の環境変数が含まれている場合があります。 それらの追加の環境変数を設定するためのガイダンスについては、GitHub上でクローンしたプロジェクトのクイックスタートガイドを参照してください。

次の変数を `.env` ファイルに追加する必要があります。

* _`GITHUB_PRIVATE_KEY`_ : [前に生成して保存した](#step-3-save-your-private-key-and-app-id)秘密キーを追加します。 テキスト エディターで `.pem` ファイルを開くか、次のコマンド ラインを使用してファイルの内容を表示します: `cat path/to/your/private-key.pem`。 ファイルの内容全体を `.env` ファイル内の `GITHUB_PRIVATE_KEY` の値としてコピーします。 **注:** PEM ファイルには複数行があるため、以下の例のように値の周りに引用符を追加しなければなりません。
* _`GITHUB_APP_IDENTIFIER`_ : 前のセクションで説明したアプリ ID を使用します。
* _`GITHUB_WEBHOOK_SECRET`_ : Webhook シークレットを追加します。

`.env` ファイルの例を次に示します。

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

## 手順 5. GitHub Appのテンプレートコードのレビュー

テンプレートのアプリケーションコードには、すべてのGitHub Appが必要とする多少のコードがすでに含まれています。 このセクションでは、GitHub Appのテンプレートにすでにあるコードを見ていきます。 このセクションで完了しなければならないステップはありません。 テンプレート コードについて既にご存知の場合は、手順をスキップして「[手順 6. サーバーを起動する](#step-6-start-the-server)」に進んでください。

任意のテキスト エディターで `template_server.rb` ファイルを開きます。 このファイルには、全体を通じてテンプレートコードの追加のコンテキストを提供するコメントがあります。 これらのコメントを注意深く読んで、さらには作成する新しいコードに添えて独自のコメントを追加することをおすすめします。

ファイルの先頭には `set :port 3000` があります。これにより、Web サーバーを起動するときに使われるポートを設定して、「[手順1. 新しい Smee チャンネル の開始](#step-1-start-a-new-smee-channel)」で Webhook ペイロードをリダイレクトしたポートとマッチさせることができます。

次に表示されるコードは `class GHApp < Sinatra::Application` の宣言です。 GitHub Appのすべてのコードは、このクラスの中に書いていきます。

そのままの状態では、テンプレート中のこのクラスは以下のことを行います。
* [環境変数を読み取る](#read-the-environment-variables)
* [ログ記録を有効にする](#turn-on-logging)
* [ビフォア フィルターを定義する](#define-a-before-filter)
* [ルート ハンドラーを定義する](#define-a-route-handler)
* [ヘルパー メソッドを定義する](#define-the-helper-methods)

### 環境変数の読み取り

このクラスで最初に行うことは、「[手順 4. ランタイム環境を準備](#step-4-prepare-the-runtime-environment)」で設定した 3 つの環境変数を読み取り、後で使用するために変数に格納します。

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

### ログ記録を有効にする

次は、Sinatraにおけるデフォルトの環境である開発の間、ロギングを有効にするコードブロックです。 このコードは `DEBUG` レベルでログを有効化し、アプリケーションの開発中にターミナルに有益な出力を表示します。

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

### ビフォアフィルタの定義

Sinatra では、ルート ハンドラーの前にコードを実行できる[ビフォア フィルター](https://github.com/sinatra/sinatra#filters)を使用します。 テンプレートの `before` ブロックは、4 つの[ヘルパー メソッド](https://github.com/sinatra/sinatra#helpers)を呼び出します。 テンプレート アプリでは、[後のセクション](#define-the-helper-methods)でこれらのヘルパー メソッドが定義されます。

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

### ルートハンドラの定義

テンプレートコードには、空のルートが含まれています。 このコードは、`/event_handler` ルートへのすべての `POST` 要求を処理します。 このクイックスタートではこのイベント ハンドラーに関する記述はありませんが、このテンプレート アプリを拡張する方法の例については、他の[クイックスタート ガイド](/apps/quickstart-guides/)を参照してください。

``` ruby
post '/event_handler' do

end
```

### ヘルパー メソッドを定義する

このテンプレートのヘルパーメソッドは、最も難しい処理のほとんどを行います。 コードのこのセクションでは、4つのヘルパーメソッドが定義されています。

#### webhookペイロードの処理

最初のメソッドの `get_payload_request` は、Webhook ペイロードをキャプチャし、JSON 形式に変換します。これにより、ペイロードのデータへのアクセスがはるかに簡単になります。

#### webhookの署名の検証

2 番目のメソッドの `verify_webhook_signature` は Webhook シグネチャの検証を実行して、GitHub がこのイベントを生成したことを確認します。 `verify_webhook_signature` ヘルパー メソッドのコードの詳細については、「[Webhook のセキュリティ保護](/webhooks/securing/)」を参照してください。 webhookがセキュアであれば、このメソッドは受け取ったペイロードのすべてをターミナルに出力します。 ロガーのコードはWebサーバーが動作していることを確認するのに役立ちますが、後でいつでも取り除くことができます。

#### GitHub Appとしての認証

API 呼び出しを行うには、[Octokit ライブラリ](http://octokit.github.io/octokit.rb/)を使用します。 このライブラリで何か面白いことを行うには、あなた、あるいはむしろアプリケーションが認証を受ける必要があります。 GitHub Appには2つの認証方法があります。

- [JSON Web トークン (JWT)](https://jwt.io/introduction) を使用した GitHub アプリとしての認証。
- インストールアクセストークンを使って特定のGitHub Appのインストールとして認証を受ける。

[次のセクション](#authenticating-as-an-installation)では、インストールとしての認証について説明します。

[GitHub アプリとしての認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)を実施すると、次のいくつかの操作を実行できます。

 * GitHub Appに関する高レベルの管理情報を取得できます。
 * アプリケーションのインストールのため、アクセストークンをリクエストできます。

たとえば、GitHub Appとして認証を受けて、そのアプリケーションをインストールしたアカウント（Organization及び個人）のリストを取得できます。 しかし、この認証方法ではAPIを使って多くのことは行えません。 インストールの代わりにリポジトリのデータにアクセスして操作を行うには、インストールとして認証を受けなければなりません。 そのためには、まずGitHub Appとして認証を受けて、インストールアクセストークンをリクエストしなければなりません。

Octokit.rb ライブラリを使用して API 呼び出しを行う前に、GitHub アプリとして認証された [Octokit クライアント](http://octokit.github.io/octokit.rb/Octokit/Client.html)を初期化する必要があります。 `authenticate_app` ヘルパー メソッドでこの処理が行われます。

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

上記のコードは [JSON Web トークン (JWT)](https://jwt.io/introduction) を生成し、これを (アプリの秘密キーと共に) 使用して Octokit クライアントを初期化します。 GitHubは、保存されたアプリケーションの公開鍵でトークンを検証することによって、リクエストの認証を確認します。 このコードの仕組みの詳細については、「[GitHub アプリとしての認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)」を参照してください。

#### インストールとして認証を行う

_インストール_ とは、アプリをインストールしたユーザーまたは組織のアカウントを指します。 ある人がアプリケーションを複数のリポジトリにインストールした場合でも、それらは同じアカウント内なので1つのインストールとしかカウントされません。 最後のヘルパー メソッドの `authenticate_installation` は、インストールとして認証された [Octokit クライアント](http://octokit.github.io/octokit.rb/Octokit/Client.html)を初期化します。 このOctokitクライアントは、認証されたAPI呼び出しを行うために使われます。

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

[`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) Octokit メソッドはインストール トークンを作成します。 このメソッドは、2つの引数を取ります。

* Installation (integer): GitHub AppのインストールのID
* オプション (ハッシュ、既定値 `{}`): カスタマイズ可能な一連のオプション

GitHub アプリが Webhook を受け取るたびに、`id` とともに `installation` オブジェクト が含まれます。 GitHub アプリとして認証されたクライアントを使用すると、この ID を `create_app_installation_access_token` メソッドに渡して、インストールごとにアクセス トークンを生成できます。 メソッドにはオプションを渡していないので、オプションはデフォルトの空のハッシュになります。 [ドキュメント](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)を再確認すると、`create_app_installation_access_token` の応答に 2 つのフィールド (`token` と `expired_at`) が含まれることを確認できます。 テンプレートのコードはレスポンス中のトークンを選択し、インストールクライアントを初期化します。

このメソッドを利用して、アプリケーションは新しいwebhookのペイロードを受信するたびに、そのイベントをトリガーしたインストールのためのクライアントを作成します。 この認証プロセスによって、GitHub Appは任意のアカウントのすべてのインストールで動作できます。

これでAPI呼び出しを発行する準備ができました!

## 手順 6. サーバーを起動する

このアプリケーションではまだ何も _実行_ できませんが、この時点でサーバー上で稼働させることができます。

Smeeは、ターミナルの現在のタブで動作させ続けておいてください。 新しいタブを開き、[テンプレート アプリ コードを複製した](#prerequisites)ディレクトリで `cd` を実施します。 このリポジトリの Ruby コードにより、[Sinatra](http://sinatrarb.com/) Web サーバーが起動されます。 このコードにはいくつかの依存関係があります。 それらは以下のようにしてインストールできます。

```shell
$ gem install bundler
```

続けて次を入力します。

```shell
$ bundle install
```

依存関係をインストールしたら、サーバーを起動できます。

```shell
$ bundle exec ruby template_server.rb
```

次のように、応答が表示されます。

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

エラーが表示された場合は、`template_server.rb` を含むディレクトリに `.env` ファイルが作成されていることを確認します。

サーバーが稼働すると、ブラウザーで `http://localhost:3000` に移動してテストを実施できます。 アプリケーションが期待どおりに動作していれば、役に立つエラーページが表示されます。

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px"/>

うまくいっています! これはエラー ページですが、_Sinatra_ のエラー ページであるため、期待どおりにアプリケーションがサーバーに接続されています。 このメッセージが表示されているのは、他に表示するものを何もアプリケーションに加えていないからです。

## 手順 7. アカウントへのアプリケーションのインストール

サーバーがアプリケーションを待ち受けているかは、受信するイベントをトリガーすればテストできます。 テストできる簡単なイベントは、GitHub アカウントにアプリをインストールすることです。この場合、[`installation`](/webhooks/event-payloads/#installation) イベントを送信する必要があります。 アプリがイベントを受け取ると、`template_server.rb` を開始した [ターミナル] タブにいくつかの出力が表示されます。

アプリをインストールするには、[アプリ設定ページ](https://github.com/settings/apps)にアクセスし、アプリを選択し、サイドバーの **[アプリのインストール]** をクリックします。 ユーザー名の横にある **[インストール]** をクリックします。

アプリケーションをすべてのリポジトリにインストールするか、選択したリポジトリにインストールするかを尋ねられます。 _すべての_ リポジトリにアプリをインストールしたくない場合は、それでも問題ありません。 テスト用にサンドボックスリポジトリを作成し、そこにアプリケーションをインストールしても良いでしょう。

<img src="/assets/images/install_permissions.png" alt="App installation permissions" width="500px"/>

**[インストール]** をクリックした後、ターミナルの出力を確認します。 次のような結果が表示されます。

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

うまくいっています! これは、GitHubアカウントにアプリケーションがインストールされたという通知をアプリケーションが受信したということです。 このような出力があれば、アプリケーションはサーバー上で期待どおりに動作しています。 🙌

出力が表示されない場合は、Smee が別の [ターミナル] タブで正しく実行されていることを確認します。Smee を再起動する必要がある場合は、アプリを _アンインストール_ して _再インストール_ することで、もう一度アプリに `installation` イベントを送信し、ターミナルで出力を確認する必要があることに注意してください。 Smee に問題がない場合は、「[トラブルシューティング](#troubleshooting)」セクションで他のアイデアを参照してください。

上記のターミナル出力がどこから来ているのか疑問に思う場合は、`template_server.rb` の[アプリのテンプレート コード](#prerequisites)に記述されています。

## トラブルシューティング

以下は、いくつかの一般的な問題と推奨される解決策です。 他の問題が生じた場合は、{% data variables.product.prodname_support_forum_with_url %}で助けやアドバイスを求めることができます。

* **Q:** Smee コマンド ライン クライアントをインストールしようとすると、次のエラーが表示されます。

    ```shell
    > npm: command not found
    ```

    **A:** npm がインストールされていないようです。 npm をインストールする最もよい方法は、 https://nodejs.org から Node.js パッケージをダウンロードし、使用中のシステムのインストールの指示に従うことです。 npmはNode.jsと併せてインストールされます。

* **Q:** サーバーを実行すると、次のエラーが表示されます。

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **A:** おそらく、秘密キーの環境変数を適切に設定していないと思われます。 `GITHUB_PRIVATE_KEY` 変数は次のようになるはずです。

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    正しい公開キーが `.env` ファイルにコピーされていることを再確認します。

* **Q:** サーバーを実行すると、次のエラーでクラッシュします。

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **A:** GitHub アプリとして認証されているものの、インストールとして認証されていない可能性があります。 「[インストールとして認証を行う](#authenticating-as-an-installation)」のすべての手順に従い、`@app_client` インスタンス変数 (JWT で認証) ではなく、API 操作のための `@installation_client` インスタンス変数 (インストール アクセス トークンで認証) を使用してください。 `@app_client` はアプリケーションに関する高レベルの情報のみを抽出し、インストール アクセス トークンを取得できます。 それ以外のことをAPIで行うことはあまりできません。

* **Q:** サーバーがイベントをリッスンしていません。 Smeeクライアントはターミナルウィンドウで動作していて、アプリケーションをGitHubのリポジトリにインストールしていますが、サーバーを動作させているターミナルウィンドウに出力がありません。

    **A:** Smee コマンドのパラメーターが間違っていて Smee クライアントが動作していないか、GitHub アプリの設定に正しい Smee のドメインがないかもしれません。 まず、Smee クライアントが [ターミナル] タブで実行されていることを確認します。問題がない場合は、[アプリ設定ページ](https://github.com/settings/apps)にアクセスし、「[手順 2. 新しい GitHub アプリの登録](#step-2-register-a-new-github-app)」で表示されるフィールドをクリックします。 これらのフィールドのドメインが、「[手順 1. 新しい Smee チャンネルの開始](#step-1-start-a-new-smee-channel)」の `smee -u <unique_channel>` コマンドで 使用したドメインと一致していることを確認します。 上記の方法でもうまくいかない場合は、`--path` と `--port` のオプションを含む完全な Smee コマンド (`smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000` など) を実行していることを確認します (`https://smee.io/qrfeVRbFbffd6vD` を独自の Smee ドメインに置き換えてください)。

* **Q:** デバッグ出力で `Octokit::NotFound` 404 エラーが発生します。
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST {% data variables.product.api_url_code %}/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **A:** `.env` ファイル内の変数が正しいことを確認します。 `bash_profile` のような他の環境変数ファイルで同じ変数を設定していないことを確認してください。 アプリケーションが使用している環境変数は、アプリケーションのコードに `puts` 文を追加して実行し直すことで確認できます。 たとえば、正しい秘密キーが設定されているかを確認するには、アプリケーションのコードに `puts PRIVATE_KEY` を追加できます。

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

## まとめ

このガイドを見終えれば、GitHub Appを開発するための基本的なビルディングブロックを学んだことになります! 振り返ると、以下を行いました。

* 新しいGitHub Appの登録
* Smeeを使ってwebhookのペイロードを受信
* SinatraでシンプルなWebサーバーを実行
* GitHub Appとして認証
* インストールとして認証

## 次の手順

これでGitHub Appをサーバー上で動作させることができました。 これだけでは特別な処理は何も実施していませんが、他の[クイックスタート ガイド](/apps/quickstart-guides/)で GitHub アプリ テンプレートをカスタマイズする方法を確認できます。
