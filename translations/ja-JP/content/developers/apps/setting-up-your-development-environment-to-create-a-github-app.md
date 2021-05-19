---
title: GitHub Appを作成するための開発環境のセットアップ
intro: '新しい{% data variables.product.prodname_github_apps %}を拡張して構築するための基礎を学んでください。'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
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

![Smeeの新規チャンネルボタン](/assets/images/smee-new-channel.png)

新しいSmeeのチャンネルを起動すると、GitHubがwebhookペイロードを送信できるユニークなドメインが作成されます。 次のステップで必要なので、このドメインを知っておく必要があります。 ユニークなドメインの例は`https://smee.io/qrfeVRbFbffd6vD`といったものです。

![Smeeのユニークなチャンネル](/assets/images/smee-unique-domain.png)

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

![**New App**を表示しているGitHubのWebサイト](/assets/images/new-app.png)

表示されるフォームで、アプリケーションの詳細を入力できます。 このページのフィールドに関する一般的な情報については「[GitHub Appの作成](/apps/building-github-apps/creating-a-github-app/)」を参照してください。 このガイドについては、いくつかのフィールドに特定のデータを入力する必要があります。

{% note %}

**ノート:** これらの設定はいつでも更新して、ホストされたサーバーを指すようにできます。

{% endnote %}

* "Homepage URL（ホームページのURL）"には、Smeeが発行したドメインを使用してください。 例:

    ![ホームページURLにSmeeのドメインが入力されたフォーム](/assets/images/homepage-url.png)

* "Webhook URL（webhookのURL）"には、やはりSmeeが発行したドメインを使ってください。 例:

    ![webhookURLにSmeeのドメインが入力されたフォーム](/assets/images/webhook-url.png)

* "Webhook secret（webhookのシークレット）"には、webhookのエンドポイントを保護するパスワードを作成してください。 これは、あなた（そしてこのフォームを介してGitHub）だけが知っているものにするべきです。 パブリックなインターネットから受信したペイロードで、webhookの送信者を検証するのに使われるので、このシークレットは重要です。 GitHub Appの設定ではこのwebhookのシークレットはオプションとなっており、これはほとんどの場合正しいですが、このテンプレートのアプリケーションコードを動作させるためには、webhookのシークレットは設定しなければなりません。

    ![webhookのシークレットが入力されたフォーム](/assets/images/webhook-secret.png)

* Permissions & Webhooks（権限とwebhook）ページでは、アプリケーションの権限セットを指定できます。これによって、アプリケーションがどれだけのデータにアクセスできるかが決まります。 Under the "Repository permissions" section, scroll down to "Metadata" and select `Access: Read-only`. このテンプレートアプリケーションを拡張することにしたら、後でこれらの権限を更新できます。

* Permissions & Webhooks（権限とwebhook）ページの下部で、これがプライベートのアプリケーションなのか、パブリックのアプリケーションなのかを指定してください。 これは、アプリケーションを誰がインストールできるのか、すなわちあなただけなのか、誰でもできるのかを指します。 この時点では、**Only on this account（このアカウントのみ）**を選択して、アプリケーションをプライベートのままにしておいてください。

    ![GitHub Appのプライバシー](/assets/images/create_app.png)

**Create GitHub App（GitHub Appの作成）**をクリックして、アプリケーションを作成してください!

### ステップ 3. 秘密鍵とApp IDの保存

アプリケーションを作成すると、[アプリケーションの設定ページ](https://github.com/settings/apps)に戻されます。 ここで行うことがあと2つあります。

* **アプリケーションの秘密鍵の生成。**これは後でアプリケーションを認証するために必要です。 ページをスクロールダウンして、**Generate a private key（秘密鍵の生成）**をクリックしてください。 生成されたPEMファイル（_`app-name`_-_`date`_-private-key.pemというような名前）を、また見つけられるディレクトリに保存してください。

    ![秘密鍵の生成ダイアログ](/assets/images/private_key.png)

* **GitHubがアプリケーションに割り当てたApp IDを記録してください。**これは、ランタイム環境を準備するのに必要になります。

    <img src="/assets/images/app_id.png" alt="アプリケーションのID番号" width="200px" />

### ステップ 4. ランタイム環境の準備

情報を保護するために、アプリケーションに関するすべてのシークレットは、直接コードに埋め込むのではなく、アプリケーションが見つけることができるコンピュータのメモリ中に置いておくことをおすすめします。 [dotenv](https://github.com/bkeepers/dotenv)という便利な開発ツールは、プロジェクトに固有の変数を`.env`ファイルから`ENV`にロードしてくれます。 `.env`ファイルは、決してGitHubにチェックインしないでください。 これは、パブリックなインターネット上にさらしたくない機密情報を保存するローカルファイルです。 そうならないようにするために、すでに`.env`はリポジトリの[`.gitignore`](/github/getting-started-with-github/ignoring-files/)に含まれています。

[必要な環境のセクション](#prerequisites)でダウンロードしたテンプレートコードには、`.env-example`というサンプルのファイルが用意されています。 このサンプルのファイルの名前を`.env-example`から`.env`に変更するか、`.env`というファイルを`.env-example`をコピーして作成してください。 まだdotenvはインストールしていませんが、このクイックスタートで後に`bundle install`を実行する際にインストールします。 **ノート:**このガイドのステップを参照するクイックスタートは、`.env-example`に追加の環境変数を含んでいることがあります。 それらの追加の環境変数を設定するためのガイダンスについては、GitHub上でクローンしたプロジェクトのクイックスタートガイドを参照してください。

以下の変数を`.env`ファイルに追加しなければなりません。

* _`GITHUB_PRIVATE_KEY`_: [以前に生成して保存した](#step-3-save-your-private-key-and-app-id)秘密鍵を追加してください。 テキストエディタで`.pem`ファイルを開くか、コマンドラインから`cat path/to/your/private-key.pem`としてファイルの内容を表示してください。 ファイルの内容全体を`.env`ファイル中の`GITHUB_PRIVATE_KEY`の値としてコピーしてください。 **ノート:** PEMファイルには複数行があるので、以下の例のように引用符を値の周りに追加しなければなりません。
* _`GITHUB_APP_IDENTIFIER`_: 前セクションで記録したApp IDを使ってください。
* _`GITHUB_WEBHOOK_SECRET`_: webhookのシークレットを追加してください。

以下は`.env`ファイルの例です。

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
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

このコードは[JSON Webトークン（JWT）](https://jwt.io/introduction)を生成し、それを（アプリケーションの秘密鍵とともに）使ってOctokitクライアントを初期化します。 GitHubは、保存されたアプリケーションの公開鍵でトークンを検証することによって、リクエストの認証を確認します。 このコードの動作についてさらに学ぶには、「[GitHub Appとして認証する](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)」を参照してください。

##### インストールとして認証を行う

_インストール_とは、アプリケーションをインストールしたユーザまたは Organization のアカウントを指します。 ある人がアプリケーションを複数のリポジトリにインストールした場合でも、それらは同じアカウント内なので1つのインストールとしかカウントされません。 最後のヘルパーメソッドである`authenticate_installation`は、インストールとして認証された[Octokitクライアント](http://octokit.github.io/octokit.rb/Octokit/Client.html)を初期化します。 このOctokitクライアントは、認証されたAPI呼び出しを行うために使われます。

``` ruby
# GitHub Appのインストールとして認証されたOctokitクライアントを、
# API操作を実行するために初期化する。
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

Octokitの[`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method)メソッドは、インストールトークンを作成します。 このメソッドは、2つの引数を取ります。

* Installation (integer): GitHub AppのインストールのID
* Options (hash、デフォルトは`{}`): カスタマイズ可能なオプションのセット

いつでもGitHub Appがwebhookを受け取ると、その中には`id`付きの`installation`オブジェクトが含まれています。 GitHub Appとして認証されたクライアントを使い、このIDを`create_app_installation_access_token`メソッドに渡してインストールごとのアクセストークンを生成します。 メソッドにはオプションを渡していないので、オプションはデフォルトの空のハッシュになります。 [ドキュメント](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)を見返してみれば、`create_app_installation_access_token`のレスポンスには`token`と`expired_at`という2つのフィールドが含まれていることが分かります。 テンプレートのコードはレスポンス中のトークンを選択し、インストールクライアントを初期化します。

このメソッドを利用して、アプリケーションは新しいwebhookのペイロードを受信するたびに、そのイベントをトリガーしたインストールのためのクライアントを作成します。 この認証プロセスによって、GitHub Appは任意のアカウントのすべてのインストールで動作できます。

これでAPI呼び出しを発行する準備ができました!

### ステップ 6. サーバーの起動

このアプリケーションはまだなにも_行い_ませんが、この時点でサーバー上で動作させることができます。

Smeeは、ターミナルの現在のタブで動作させ続けておいてください。 新しいタブを開き、[テンプレートアプリケーションのコードをクローンした](#prerequisites)ディレクトリに`cd`してください。 このリポジトリのRubyのコードは、[Sinatra](http://sinatrarb.com/) Webサーバーを起動します。 このコードにはいくつかの依存関係があります。 それらは以下のようにしてインストールできます。

```shell
$ gem install bundler
```

続いて

```shell
$ bundle install
```

依存関係をインストールしたら、サーバーを起動できます。

```shell
$ ruby template_server.rb
```

次のようなレスポンスが返されるはずです。

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

エラーが出た場合は、`template_server.rb`があるディレクトリに`.env`ファイルを作成したかを確かめてください。

サーバーが動作したら、ブラウザで`http://localhost:3000`にアクセスしてテストしてください。 アプリケーションが期待どおりに動作していれば、役に立つエラーページが表示されます。

<img src="/assets/images/sinatra-404.png" alt="Sinatraの404エラーページ" width="500px" />

うまくいっています! これはエラーページではありますが、_Sinatra_のエラーページであり、期待どおりにアプリケーションがサーバーに接続されているということです。 このメッセージが表示されているのは、他に表示するものを何もアプリケーションに加えていないからです。

### ステップ 7. アカウントへのアプリケーションのインストール

サーバーがアプリケーションを待ち受けているかは、受信するイベントをトリガーすればテストできます。 テストできるシンプルなイベントは、自分のGitHubアカウントにアプリケーションをインストールしてみることで、そうすれば[`installation`](/webhooks/event-payloads/#installation)イベントが送信されます。 アプリケーションがそれを受信すれば、`template_server.rb`を起動したターミナルのタブに、何か出力されるでしょう。

アプリケーションをインストールするには、[アプリケーションの設定ページ](https://github.com/settings/apps)にアクセスし、アプリケーションを選択し、サイドバーの**Install App（アプリケーションのインストール）**をクリックしてください。 ユーザ名の隣の** Install（インストール）**をクリックしてください。

アプリケーションをすべてのリポジトリにインストールするか、選択したリポジトリにインストールするかを尋ねられます。 アプリケーションを自分の_すべての_リポジトリにインストールしたいなら、それで問題ありません! テスト用にサンドボックスリポジトリを作成し、そこにアプリケーションをインストールしても良いでしょう。

<img src="/assets/images/install_permissions.png" alt="アプリケーションのインストール権限" width="500px" />

**Install（インストール）**をクリックして、ターミナルの出力を見てみてください。 以下のように出力されているでしょう。

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

うまくいっています! これは、GitHubアカウントにアプリケーションがインストールされたという通知をアプリケーションが受信したということです。 このような出力があれば、アプリケーションはサーバー上で期待どおりに動作しています。 🙌

この出力がなければ、別のターミナルタブでSmeeが正しく動作していることを確認してください。 Smeeを再起動しなければならない場合は、アプリケーションに`installation`を再度送信してターミナルの出力を見るために、アプリケーションを_アンインストール_してから_インストールしなおさなければ_ならないことに注意してください。 Smeeが問題ではない場合は、他の原因を[トラブルシューティング](#troubleshooting)セクションで参照してください。

上記のターミナルの出力がどこから来るのか疑問に思うなら、それは`template_server.rb`中の[アプリケーションのテンプレートコード](#prerequisites)に書かれています。

### トラブルシューティング

以下は、いくつかの一般的な問題と推奨される解決策です。 他の問題が生じた場合は、{% data variables.product.prodname_support_forum_with_url %}で助けやアドバイスを求めることができます。

* **Q:** Smeeのコマンドラインクライアントをインストールしようとすると、以下のエラーが返されます。

    ```shell
    > npm: command not found
    ```

    **A:** npmがインストールされていないようです。 npmをインストールする最もよい方法は、https://nodejs.orgからNode.jsパッケージをダウンロードし、使っているシステムのためのインストールの指示に従うことです。 npmはNode.jsと併せてインストールされます。

* **Q:** サーバーを実行すると、以下のエラーが返されます。

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **A:** おそらく秘密鍵の環境変数が正しく設定セットアップされていません。 `GITHUB_PRIVATE_KEY`変数は、以下のようになっていなければなりません。

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    `.env`ファイルに正しい公開鍵がコピーされているかを再確認してください。

* **Q:** サーバーを動作させると、以下のエラーでクラッシュします。

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **A:** インストールとしてではなく、GitHub Appとして認証されている可能性があります。 [インストールとして認証](#authenticating-as-an-installation)以下のすべてのステップに従ったことを確認し、API操作ではインスタンス変数の`@app_client`（JWTでの認証）ではなく、`@installation_client`を使って（インストールアクセストークンで認証を受ける）ください。 `@app_client`はアプリケーションに関する高レベルの情報だけを取得でき、インストールアクセストークンを取得できます。 それ以外のことをAPIで行うことはあまりできません。

* **Q:** サーバーがイベントを待ち受けていません! Smeeクライアントはターミナルウィンドウで動作していて、アプリケーションをGitHubのリポジトリにインストールしていますが、サーバーを動作させているターミナルウィンドウに出力がありません。

    **A:** You may not be running the Smee client, running the Smee command with the wrong parameters or you may not have the correct Smee domain in your GitHub App settings. まず、ターミナルのタブでSmeeのクライアントが動作しているかを確認してください。 もしそれが問題ではないなら、「[アプリケーションの設定ページ](https://github.com/settings/apps)にアクセスし、[ステップ2  新しいGitHub Appの登録](#step-2-register-a-new-github-app)」で示されているフィールドを確認してください。 それらのフィールド内のドメインが「[ステップ1  新しいSmeeチャンネルの開始](#step-1-start-a-new-smee-channel)"の`smee -u <unique_channel>` コマンドで使ったドメインと一致することを確認してください。 If none of the above work, check that you are running the full Smee command including the `--path` and `--port` options, for example: `smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000` (replacing `https://smee.io/qrfeVRbFbffd6vD` with your own Smee domain).

* **Q:** デバッグ出力に`Octokit::NotFound` 404エラーが出ます。
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST https://api.github.com/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **A:** `.env`ファイル内の変数が正しいことを確認してください。 `bash_profile`のような他の環境変数ファイルで同じ変数を設定していないことを確認してください。 アプリケーションが使用している環境変数は、アプリケーションのコードに`puts`文を追加して実行し直すことで確認できます。 たとえば、正しい秘密鍵が設定されているかを確認するには、アプリケーションのコードに`puts PRIVATE_KEY`を追加できます。

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

### おわりに

このガイドを見終えれば、GitHub Appを開発するための基本的なビルディングブロックを学んだことになります! 振り返ると、以下を行いました。

* 新しいGitHub Appの登録
* Smeeを使ってwebhookのペイロードを受信
* SinatraでシンプルなWebサーバーを実行
* GitHub Appとして認証
* インストールとして認証

### 次のステップ

これでGitHub Appをサーバー上で動作させることができました。 まだこれは特別なことは何もしていませんが、他の[クイックスタートガイド](/apps/quickstart-guides/)でGitHub Appテンプレートをカスタマイズする方法を調べてみてください。
