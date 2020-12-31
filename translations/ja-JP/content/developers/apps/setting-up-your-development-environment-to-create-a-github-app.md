---
title: GitHub Appを作成するための開発環境のセットアップ
intro: '新しい{% data variables.product.prodname_github_apps %}を拡張して構築するための基礎を学んでください。'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### はじめに

このガイドは、GitHub Appを設定してサーバー上で実行するために必要なステップを案内します。 GitHub Appには、webhookイベントを管理し、GitHub上のアプリケーションの登録をコードに接続するためのセットアップのステップが必要です。 このガイドのアプリケーションは、拡張して新しいGitHub Appを構築するための基盤の役目を果たします。

このガイドを終えれば、GitHub Appを登録し、webhookイベントを受信するためのWebサーバーをセットアップできます。 Smeeというツールを使ってwebhookペイロードをキャプチャし、ローカルの開発環境に転送する方法を学びます。 このセクションで設定するテンプレートのアプリケーションは特別なことはしませんが、APIを使ってアプリケーションコードを書きはじめたり、他の[クイックスタートガイド](/apps/quickstart-guides/)を完了させたりするために使用できるフレームワークとして働きます。 {% if currentVersion == "free-pro-team@latest" %} アプリケーションの成功例は、[GitHub Marketplace](https://github.com/marketplace)や[Works with GitHub](https://github.com/works-with)で調べることができます。{% endif %}

このプロジェクトを完了すると、GitHub App及びインストールとして認証を受ける方法と、それらの認証方法の違いを理解できます。

以下のステップで、テンプレートのGitHub Appを設定できます。

1. [新しいSmeeチャンネルの開始](#step-1-start-a-new-smee-channel)
1. [新しいGitHub Appの登録](#step-2-register-a-new-github-app)
1. [秘密鍵とApp IDの保存](#step-3-save-your-private-key-and-app-id)
1. [ランタイム環境の準備](#step-4-prepare-the-runtime-environment)
1. [GitHub Appのテンプレートコードのレビュー](#step-5-review-the-github-app-template-code)
1. [サーバーの起動](#step-6-start-the-server)
1. [アカウントへのアプリケーションのインストール](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

### 必要な環境

以下に関する基本的な理解があると役立つでしょう。

* [GitHub Apps](/apps/about-apps)
* [webhook](/webhooks)
* [プログラミング言語のRuby](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

とはいえ、経験のレベルにかかわらず見ていくことはできます。 その過程で必要な情報にはリンクしていきます！

始める前に、このクイックスタートで使われるテンプレートコードのリポジトリをクローンする必要があります。 ターミナルアプリケーションを開いて、コードを保存したいディレクトリに移動してください。 以下のコマンドを実行して、[GitHub Appテンプレート](https://github.com/github-developer/github-app-template)リポジトリをクローンしてください。

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

### ステップ 1. 新しいSmeeチャンネルの開始

ローカルのマシンをインターネットに公開することなく、GitHubがwebhookを送信するのを支援するために、Smeeというツールが利用できます。 まず https://smee.io にアクセスして、**Start a new channel**をクリックしてください。 [ngrok](https://dashboard.ngrok.com/get-started)や[localtunnel](https://localtunnel.github.io/www/)のような、ローカルマシンをインターネットに公開してくれる他のツールに慣れているなら、それらを使ってもかまいません。

![The Smee new channel button](/assets/images/smee-new-channel.png)

新しいSmeeのチャンネルを起動すると、GitHubがwebhookペイロードを送信できるユニークなドメインが作成されます。 次のステップで必要なので、このドメインを知っておく必要があります。 ユニークなドメインの例は`https://smee.io/qrfeVRbFbffd6vD`といったものです。

![A Smee unique channel](/assets/images/smee-unique-domain.png)

次に、ターミナルに戻って以下のステップに従い、Smeeのコマンドラインインターフェース（CLI）クライアントを実行してください。

{% note %}

**ノート:** 以下のステップは、Smeeチャンネルのページに表示される"Use the CLI"の指示とはやや異なっています。 "Use the Node.js client"あるいは"Using Probot's built-in support"の指示に従う必要は**ありません**。

{% endnote %}

1. クライアントをインストールします。

    ```shell
    $ npm install --global smee-client
    ```

2. クライアントを実行します（`https://smee.io/qrfeVRbFbffd6vD`を自分のドメインで置き換えてください）。

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    以下のように出力されるでしょう。

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

`smee --url <unique_channel>`というコマンドは、Smeeに対してSmeeのチャンネルが受信したすべてのwebhookイベントを、コンピューター上で動作するSmeeクライアントに転送するように指示しています。 `--path /event_handler`オプションは、イベントを`/event_handler`というルートに転送します。このルートについては[後のセクション](#step-5-review-the-github-app-template-code)で取り上げます。 `--port 3000`オプションはポート3000を指定しており、サーバーはこのポートで待ち受けます。 Smeeを使えば、GitHubからのwebhookを受信するためにあなたのマシンがパブリックなインターネットに対してオープンである必要はありません。 また、ブラウザでSmeeのURLを開いて、受信したwebhookのペイロードを調べることもできます。

このターミナルのウィンドウは開いたままにしておき、このガイドの残りのステップを完了させるまでの間、Smeeに接続したままにしておくことをおすすめします。 ユニークなドメインを失うことなくSmeeのクライアントの接続を切って、接続しなおすことも_できます_が（ngrokとは違って）、これは接続したままにしておいて、別のターミナルウィンドウで他のコマンドラインのタスクを行うようにするほうが簡単でしょう。

### ステップ 2. 新しいGitHub Appの登録

まだGitHubのアカウントを持っていないなら、ここが[参加する時です](https://github.com/join)。 続行する前にメールを確認するのを忘れないようにしてください! 新しいアプリケーションを登録するには、自分のGitHubのプロフィール内の[アプリケーション設定ペー委](https://github.com/settings/apps)にアクセスし、**New GitHub App**をクリックしてください。

![GitHub website, showing the **New App**](/assets/images/new-app.png)

表示されるフォームで、アプリケーションの詳細を入力できます。 このページのフィールドに関する一般的な情報については「[GitHub Appの作成](/apps/building-github-apps/creating-a-github-app/)」を参照してください。 このガイドについては、いくつかのフィールドに特定のデータを入力する必要があります。

{% note %}

**ノート:** これらの設定はいつでも更新して、ホストされたサーバーを指すようにできます。

{% endnote %}

* "Homepage URL（ホームページのURL）"には、Smeeが発行したドメインを使用してください。 例:

    ![Form with Smee domain filled in for homepage URL](/assets/images/homepage-url.png)

* "Webhook URL（webhookのURL）"には、やはりSmeeが発行したドメインを使ってください。 例:

    ![Form with Smee domain filled in for webhook URL](/assets/images/webhook-url.png)

* "Webhook secret（webhookのシークレット）"には、webhookのエンドポイントを保護するパスワードを作成してください。 これは、あなた（そしてこのフォームを介してGitHub）だけが知っているものにするべきです。 パブリックなインターネットから受信したペイロードで、webhookの送信者を検証するのに使われるので、このシークレットは重要です。 GitHub Appの設定ではこのwebhookのシークレットはオプションとなっており、これはほとんどの場合正しいですが、このテンプレートのアプリケーションコードを動作させるためには、webhookのシークレットは設定しなければなりません。

    ![Form with webhook secret filled in](/assets/images/webhook-secret.png)

* Permissions & Webhooks（権限とwebhook）ページでは、アプリケーションの権限セットを指定できます。これによって、アプリケーションがどれだけのデータにアクセスできるかが決まります。 このページはデフォルト値のままにしておいてください。 このテンプレートアプリケーションを拡張することにしたら、後でこれらの権限を更新できます。

* Permissions & Webhooks（権限とwebhook）ページの下部で、これがプライベートのアプリケーションなのか、パブリックのアプリケーションなのかを指定してください。 これは、アプリケーションを誰がインストールできるのか、すなわちあなただけなのか、誰でもできるのかを指します。 この時点では、**Only on this account（このアカウントのみ）**を選択して、アプリケーションをプライベートのままにしておいてください。

    ![GitHub App privacy](/assets/images/create_app.png)

**Create GitHub App（GitHub Appの作成）**をクリックして、アプリケーションを作成してください!

### ステップ 3. 秘密鍵とApp IDの保存

アプリケーションを作成すると、[アプリケーションの設定ページ](https://github.com/settings/apps)に戻されます。 ここで行うことがあと2つあります。

* **アプリケーションの秘密鍵の生成。**これは後でアプリケーションを認証するために必要です。 ページをスクロールダウンして、**Generate a private key（秘密鍵の生成）**をクリックしてください。 生成されたPEMファイル（_`app-name`_-_`date`_-private-key.pemというような名前）を、また見つけられるディレクトリに保存してください。

    ![The private key generation dialog](/assets/images/private_key.png)

* **GitHubがアプリケーションに割り当てたApp IDを記録してください。**これは、ランタイム環境を準備するのに必要になります。

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px" />

### ステップ 4. ランタイム環境の準備

情報を保護するために、アプリケーションに関するすべてのシークレットは、直接コードに埋め込むのではなく、アプリケーションが見つけることができるコンピュータのメモリ中に置いておくことをおすすめします。 [dotenv](https://github.com/bkeepers/dotenv)という便利な開発ツールは、プロジェクトに固有の変数を`.env`ファイルから`ENV`にロードしてくれます。 `.env`ファイルは、決してGitHubにチェックインしないでください。 これは、パブリックなインターネット上にさらしたくない機密情報を保存するローカルファイルです。 そうならないようにするために、すでに`.env`はリポジトリの[`.gitignore`](/articles/ignoring-files/)に含まれています。

[必要な環境のセクション](#prerequisites)でダウンロードしたテンプレートコードには、`.env-example`というサンプルのファイルが用意されています。 このサンプルのファイルの名前を`.env-example`から`.env`に変更するか、`.env`というファイルを`.env-example`をコピーして作成してください。 まだdotenvはインストールしていませんが、このクイックスタートで後に`bundle install`を実行する際にインストールします。 **ノート:**このガイドのステップを参照するクイックスタートは、`.env-example`に追加の環境変数を含んでいることがあります。 それらの追加の環境変数を設定するためのガイダンスについては、GitHub上でクローンしたプロジェクトのクイックスタートガイドを参照してください。

以下の変数を`.env`ファイルに追加しなければなりません。

* _`GITHUB_PRIVATE_KEY`_: [以前に生成して保存した](#step-3-save-your-private-key-and-app-id)秘密鍵を追加してください。 テキストエディタで`.pem`ファイルを開くか、コマンドラインから`cat path/to/your/private-key.pem`としてファイルの内容を表示してください。 ファイルの内容全体を`.env`ファイル中の`GITHUB_PRIVATE_KEY`の値としてコピーしてください。 **ノート:** PEMファイルには複数行があるので、以下の例のように引用符を値の周りに追加しなければなりません。
* _`GITHUB_APP_IDENTIFIER`_: 前セクションで記録したApp IDを使ってください。
* _`GITHUB_WEBHOOK_SECRET`_: webhookのシークレットを追加してください。

以下は`.env`ファイルの例です。

```
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

### ステップ 5. GitHub Appのテンプレートコードのレビュー

テンプレートのアプリケーションコードには、すべてのGitHub Appが必要とする多少のコードがすでに含まれています。 このセクションでは、GitHub Appのテンプレートにすでにあるコードを見ていきます。 このセクションで完了しなければならないステップはありません。 テンプレートコードにすでに馴染んでいるなら、「[ステップ 6  サーバーの起動](#step-6-start-the-server)」までスキップできます。

好きなテキストエディタで`template_server.rb`ファイルを開いてください。 このファイルには、全体を通じてテンプレートコードの追加のコンテキストを提供するコメントがあります。 これらのコメントを注意深く読んで、さらには作成する新しいコードに添えて独自のコメントを追加することをおすすめします。

ファイルの先頭には`set :port 3000`があります。これは、Webサーバーを起動するときに使われるポートを設定して、「[ステップ1  新しいSmeeチャンネルの開始](#step-1-start-a-new-smee-channel)"でwebhookのペイロードをリダイレクトしたポートと一致させます。

次に出てくるコードは`class GHApp < Sintra::Application`という宣言です。 GitHub Appのすべてのコードは、このクラスの中に書いていきます。

そのままの状態では、テンプレート中のこのクラスは以下のことを行います。
* [環境変数の読み取り](#read-the-environment-variables)
* [ロギングの有効化](#turn-on-logging)
* [ビフォアフィルタの定義](#define-a-before-filter)
* [ルートハンドラの定義](#define-a-route-handler)
* [ヘルパーメソッドの定義](#define-the-helper-methods)

#### 環境変数の読み取り

このクラスが最初に行うのは、「[ステップ4  ランタイム環境の準備](#step-4-prepare-the-runtime-environment)」で設定した3つの環境変数を読み取り、後で使うために変数に設定することです。

``` ruby
#秘密鍵はPEMフォーマットであることを期待する。 改行を変換する。
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# 登録されたアプリケーションにはシークレットが設定されていなければならない。 このシークレットは検証に使われる
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# アプリケーションの登録時に設定されたGitHub Appの識別子(型はinteger)。
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

#### ロギングの有効化

次は、Sinatraにおけるデフォルトの環境である開発の間、ロギングを有効にするコードブロックです。 このコードは`DEBUG`レベルでロギングを有効化し、アプリケーションの開発の間、ターミナルに有益な出力を行います。

``` ruby
# Sinatraの詳細なロギングを開発の間有効にする
configure :development do
  set :logging, Logger::DEBUG
end
```

#### ビフォアフィルタの定義

Sinatraは、ルートハンドラよりも先にコードを実行できるようにしてくれる[ビフォアフィルタ](https://github.com/sinatra/sinatra#filters)を使います。 テンプレート中の`before`ブロックは、4つの[ヘルパーメソッド](https://github.com/sinatra/sinatra#helpers)を呼びます。 このテンプレートアプリケーションでは、これらのヘルパーメソッドは[後のセクション](#define-the-helper-methods)で定義します。

``` ruby
# `/event_handler`ルートへの各リクエストの前
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # API操作を実行するために、アプリケーションのインストールを認証
  authenticate_installation(@payload)
end
```

#### ルートハンドラの定義

テンプレートコードには、空のルートが含まれています。 このコードは、`/event_handler`ルートへのすべての`POST`リクエストを処理します。 このクイックスタートではこのイベントハンドラは書きませんが、このテンプレートアプリケーションの拡張方法の例については他の[クイックスタートガイド](/apps/quickstart-guides/)を参照してください。

``` ruby
post '/event_handler' do

end
```

#### ヘルパーメソッドの定義

このテンプレートのヘルパーメソッドは、最も難しい処理のほとんどを行います。 コードのこのセクションでは、4つのヘルパーメソッドが定義されています。

##### webhookペイロードの処理

最初のメソッドである`get_payload_request`は、webhookのペイロードをキャプチャしてJSON形式に変換し、ペイロードのデータにアクセスしやすくします。

##### webhookの署名の検証

2番目のメソッドの`verify_webhook_signature`は、webhookの署名を検証して、そのイベントがGitHubが生成したものであることを確認します。 `verify_webhook_signature`ヘルパーメソッド中のコードについてさらに学ぶには、「[webhookをセキュアにする](/webhooks/securing/)」を参照してください。 webhookがセキュアであれば、このメソッドは受け取ったペイロードのすべてをターミナルに出力します。 ロガーのコードはWebサーバーが動作していることを確認するのに役立ちますが、後でいつでも取り除くことができます。

##### GitHub Appとしての認証

API呼び出しを行うには、[Octokitライブラリ](http://octokit.github.io/octokit.rb/)を使います。 このライブラリで何か面白いことを行うには、あなた、あるいはむしろアプリケーションが認証を受ける必要があります。 GitHub Appには2つの認証方法があります。

- [JSON Webトークン (JWT)](https://jwt.io/introduction)を使ってGitHub Appとして認証を受ける。
- インストールアクセストークンを使って特定のGitHub Appのインストールとして認証を受ける。

インストールとしての認証については[次のセクション](#authenticating-as-an-installation)で学びます。

[GitHub Appとして認証を受ける](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)と、いくつかのことができるようになります。

 * GitHub Appに関する高レベルの管理情報を取得できます。
 * アプリケーションのインストールのため、アクセストークンをリクエストできます。

たとえば、GitHub Appとして認証を受けて、そのアプリケーションをインストールしたアカウント（Organization及び個人）のリストを取得できます。 しかし、この認証方法ではAPIを使って多くのことは行えません。 インストールの代わりにリポジトリのデータにアクセスして操作を行うには、インストールとして認証を受けなければなりません。 そのためには、まずGitHub Appとして認証を受けて、インストールアクセストークンをリクエストしなければなりません。

API呼び出しを発行するためにOctokit.rbライブラリを使えるようになる前に、GitHub Appとして認証された[Octokit client](http://octokit.github.io/octokit.rb/Octokit/Client.html)を初期化しなければなりません。 `authenticate_app`ヘルパーメソッドがまさにそれを行ってくれます!

``` ruby
# GitHub Appとして認証されたOctokitクライアントを初期化する。
# GitHub Appの認証には、アプリケーションの秘密鍵で署名された
# JWT (https://jwt.io/introduction/)を構築して、それがアプリケーション
# から来ており、悪意あるサードパーティによって改変されていない
# ことをGitHubが確認できるようにする必要がある。
def authenticate_app
  payload = {
      # このJWTが発行された時刻。たとえば今。
      iat: Time.now.to_i,

      # JWTの有効期限(最大10分)
      exp: Time.now.to_i + (10 * 60),

      # GitHub Appの識別番号
      iss: APP_IDENTIFIER
  }

  # 暗号的に JWTに署名
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # JWTを認証トークンとして使ってOctokitクライアントを作成。
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

The code above generates a [JSON Web Token (JWT)](https://jwt.io/introduction) and uses it (along with your app's private key) to initialize the Octokit client. GitHub checks a request's authentication by verifying the token with the app's stored public key. To learn more about how this code works, see "[Authenticating as a GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)."

##### インストールとして認証を行う

_インストレーション_とは、アプリケーションをインストールしたユーザまたは Organization のアカウントを指します。 Even if someone installs the app on more than one repository, it only counts as one installation because it's within the same account. The last helper method `authenticate_installation` initializes an [Octokit client](http://octokit.github.io/octokit.rb/Octokit/Client.html) authenticated as an installation. This Octokit client is what you'd use to make authenticated API calls.

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

The [`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) Octokit method creates an installation token. This method accepts two arguments:

* Installation (integer): The ID of a GitHub App installation
* Options (hash, defaults to `{}`): A customizable set of options

Any time a GitHub App receives a webhook, it includes an `installation` object with an `id`. Using the client authenticated as a GitHub App, you pass this ID to the `create_app_installation_access_token` method to generate an access token for each installation. Since you're not passing any options to the method, the options default to an empty hash. If you look back at [the docs](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation), you can see the response for `create_app_installation_access_token` includes two fields: `token` and `expired_at`. The template code selects the token in the response and initializes an installation client.

With this method in place, each time your app receives a new webhook payload, it creates a client for the installation that triggered the event. This authentication process enables your GitHub App to work for all installations on any account.

Now you're ready to start making API calls!

### ステップ 6. サーバーの起動

Your app doesn't _do_ anything yet, but at this point, you can get it running on the server.

Keep Smee running in the current tab in your Terminal. Open a new tab and `cd` into the directory where you [cloned the template app code](#prerequisites). The Ruby code in this repository will start up a [Sinatra](http://sinatrarb.com/) web server. This code has a few dependencies. You can install these by running:

```shell
$ gem install bundler
```

Followed by:

```shell
$ bundle install
```

With the dependencies installed, you can start the server:

```shell
$ ruby template_server.rb
```

You should see a response like:

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

If you see an error, make sure you've created the `.env` file in the directory that contains `template_server.rb`.

Once the server is running, you can test it by going to `http://localhost:3000` in your browser. If the app works as expected, you'll see a helpful error page:

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px" />

This is good! Even though it's an error page, it's a _Sinatra_ error page, which means your app is connected to the server as expected. You're seeing this message because you haven't given the app anything else to show.

### ステップ 7. アカウントへのアプリケーションのインストール

You can test that the server is listening to your app by triggering an event for it to receive. A simple event you can test is installing the app on your GitHub account, which should send the [`installation`](/webhooks/event-payloads/#installation) event. If the app receives it, you should see some output in the Terminal tab where you started `template_server.rb`.

To install the app, visit the [app settings page](https://github.com/settings/apps), choose your app, and click **Install App** in the sidebar. Next to your username, click **Install**.

You'll be asked whether to install the app on all repositories or selected repositories. If you don't want to install the app on _all_ of your repositories, that's okay! You may want to create a sandbox repository for testing purposes and install your app there.

<img src="/assets/images/install_permissions.png" alt="アプリケーションのインストール権限" width="500px" />

After you click **Install**, look at the output in your Terminal. You should see something like this:

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/1.1" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/1.1" 200 2 0.0019
```

This is good news! It means your app received a notification that it was installed on your GitHub account. If you see something like this, your app is running on the server as expected. 🙌

If you don't see the output, make sure Smee is running correctly in another Terminal tab. If you need to restart Smee, note that you'll also need to _uninstall_ and _reinstall_ the app to send the `installation` event to your app again and see the output in Terminal. If Smee isn't the problem, see the "[Troubleshooting](#troubleshooting)" section for other ideas.

If you're wondering where the Terminal output above is coming from, it's written in the [app template code](#prerequisites) in `template_server.rb`.

### トラブルシューティング

Here are a few common problems and some suggested solutions. If you run into any other trouble, you can ask for help or advice in the {% data variables.product.prodname_support_forum_with_url %}.

* **Q:** When I try to install the Smee command-line client, I get the following error:

    ```shell
    > npm: command not found
    ```

    **A:** Looks like you don't have npm installed. The best way to install it is to download the Node.js package at https://nodejs.org and follow the installation instructions for your system. npm will be installed alongside Node.js.

* **Q:** When I run the server, I get the following error:

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **A:** You probably haven't set up your private key environment variable quite right. Your `GITHUB_PRIVATE_KEY` variable should look like this:

    ```
    PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    Double-check that you've copied the correct public key into your `.env` file.

* **Q:** When I run the server, it crashes with this error:

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **A:** You may be authenticated as a GitHub App but not as an installation. Make sure you follow all the steps under "[Authenticate as an installation](#authenticating-as-an-installation)," and use the `@installation_client` instance variable (authenticated with an installation access token) for your API operations, not the `@app_client` instance variable (authenticated with a JWT). The `@app_client` can only retrieve high-level information about your app and obtain installation access tokens. It can't do much else in the API.

* **Q:** My server isn't listening to events! The Smee client is running in a Terminal window, and I'm installing the app on a repository on GitHub, but I don't see any output in the Terminal window where I'm running the server.

    **A:** You may not be running the Smee client, or you may not have the correct Smee domain in your GitHub App settings. First check to make sure the Smee client is running in a Terminal tab. If that's not the problem, visit your [app settings page](https://github.com/settings/apps) and check the fields shown in "[Step 2. Register a new GitHub App](#step-2-register-a-new-github-app)." Make sure the domain in those fields matches the domain you used in your `smee -u <unique_channel>` command in "[Step 1. 新しいSmeeチャンネルの開始](#step-1-start-a-new-smee-channel)"でwebhookのペイロードをリダイレクトしたポートと一致させます。

* **Q:** I'm getting an `Octokit::NotFound` 404 error in my debug output:
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST https://api.github.com/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **A:** Ensure the variables in your `.env` file are correct. Make sure that you have not set identical variables in any other environment variable files like `bash_profile`. You can check the environment variables your app is using by adding `puts` statements to your app code and re-running the code. For example, to ensure you have the correct private key set, you could add `puts PRIVATE_KEY` to your app code:

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

### おわりに

After walking through this guide, you've learned the basic building blocks for developing GitHub Apps! To review, you:

* Registered a new GitHub App
* Used Smee to receive webhook payloads
* Ran a simple web server via Sinatra
* Authenticated as a GitHub App
* Authenticated as an installation

### 次のステップ

You now have a GitHub App running on a server. It doesn't do anything special yet, but check out some of the ways you can customize your GitHub App template in the other [quickstart guides](/apps/quickstart-guides/).
