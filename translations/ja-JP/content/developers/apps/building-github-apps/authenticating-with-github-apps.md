---
title: GitHub App による認証
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 認証
---


## 秘密鍵を生成する

GitHub App の作成後は、1 つ以上の秘密鍵を生成する必要があります。 アクセストークンのリクエストに署名するには、この秘密鍵を使用します。

鍵が危殆化したり、鍵を紛失した場合にダウンタイムを回避するため、複数の秘密鍵を作成してローテーションすることができます。 秘密鍵が公開鍵と適合することを確認するには、[秘密鍵を検証する](#verifying-private-keys)を参照してください。

秘密鍵を生成するには、以下の手順に従います。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. [Private keys] で、[**Generate a private key**] をクリックします。 ![秘密鍵の生成](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. お手元のコンピュータにダウンロードされた PEM フォーマットの秘密鍵が表示されます。 このファイルは必ず保存してください。GitHub では公開鍵の部分しか保存しません。

{% note %}

**注釈:** 特定のファイルフォーマットが必要なライブラリを使用している場合、ダウンロードする PEM ファイルは `PKCS#1 RSAPrivateKey` フォーマットになります。

{% endnote %}

## 秘密鍵を検証する
{% data variables.product.product_name %} generates a fingerprint for each private and public key pair using the SHA-256 hash function. 秘密鍵のフィンガープリントを生成し、{% data variables.product.product_name %} で表示されているフィンガープリントと比較することにより、秘密鍵が {% data variables.product.product_name %} に保存宇されている公開鍵と適合することを検証できます。

秘密鍵を検証するには、以下の手順に従います。

1. {% data variables.product.prodname_github_app %} の開発者設定ページにある [Private keys] セクションで、検証する秘密鍵と公開鍵のペアを見つけます。 詳しい情報については、[秘密鍵を生成する](#generating-a-private-key)を参照してください。 ![秘密鍵のフィンガープリント](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. 次のコマンドを使用して、秘密鍵 (PEM) のフィンガープリントをローカルで生成します。
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. ローカルで生成されたフィンガープリントの結果と、{% data variables.product.product_name %} に表示されているフィンガープリントを比較します。

## 秘密鍵を削除する
紛失や危殆化した秘密鍵は削除できますが、最低 1 つは秘密鍵を所有する必要があります。 鍵が 1 つしかない場合、その鍵を削除する前に新しい鍵を生成する必要があります。 ![直近の秘密鍵を削除する](/assets/images/github-apps/github_apps_delete_key.png)

## {% data variables.product.prodname_github_app %} として認証を行う

{% data variables.product.prodname_github_app %} として認証を行うと、以下のことが可能になります。

* {% data variables.product.prodname_github_app %} について管理情報の概要を取得できます。
* アプリケーションのインストールのため、アクセストークンをリクエストできます。

{% data variables.product.prodname_github_app %} として認証するには、PEM フォーマットで[秘密鍵を生成](#generating-a-private-key)し、ローカルマシンにダウンロードします。 この鍵を使用して [JSON Web Token (JWT)](https://jwt.io/introduction) に署名し、`RS256` アルゴリズムを使用してエンコードします。 {% data variables.product.product_name %} は、トークンをアプリケーションが保存する公開鍵で検証することにより、リクエストが認証されていることを確認します。

JWT を生成するために使用できる簡単な Ruby スクリプトを掲載します。 `gem install jwt` を実行してから、このスクリプトを使用してください。

<a name="jwt-payload"></a>

```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` と `YOUR_APP_ID` の値は置き換えてください。 値はダブルクオートで囲んでください。

{% data variables.product.prodname_github_app %} の識別子 (`YOUR_APP_ID`) を、JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (発行者) クレームの値として使用します。 {% data variables.product.prodname_github_app %} 識別子は、[アプリケーションを作成](/apps/building-github-apps/creating-a-github-app/)後の最初の webhook ping から、または GitHub.com UI のアプリケーション設定ページからいつでも取得できます。

JWT を作成後は、それを API リクエストの `Header` に設定します。

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` の値は置き換えてください。

上記の例では、最大有効期限として 10 分間を設定し、その後は API が `401` エラーを返し始めます。

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

有効期限が経過した後は、JWT を新しく作成する必要があります。

## {% data variables.product.prodname_github_app %} として API エンドポイントにアクセスする

{% data variables.product.prodname_github_app %} の概要を取得するために使用できる REST API エンドポイントの一覧については、「[GitHub App](/rest/reference/apps)」を参照してください。

## インストールとして認証を行う

インストールとして認証を行うと、そのインストールの API でアクションを実行できます。 インストールとして認証を行う前に、インストールアクセストークンを作成する必要があります。 GitHub Appが少なくとも1つのリポジトリにインストールされていることを確認してください。まったくインストールされていない場合、インストールトークンを作成することは不可能です。 インストールアクセストークンは、認証を行うため {% data variables.product.prodname_github_apps %} により使用されます。 詳しい情報については「[GitHub Appのインストール](/developers/apps/managing-github-apps/installing-github-apps)」を参照してください。

デフォルトでは、インストールトークンのスコープは、インストールがアクセスできるすべてのリポジトリにアクセスできるよう設定されています。 `repository_ids` パラメータを使用すると、インストールアクセストークンのスコープを特定のリポジトリに限定できます。 詳細については、[アプリケーション (エンドポイント) に対するアクセストークンの作成](/rest/reference/apps#create-an-installation-access-token-for-an-app)を参照してください。 インストールアクセストークンは {% data variables.product.prodname_github_app %} によって設定された権限を持ち、1 時間後に期限切れになります。

認証されたアプリケーションのインストールを一覧表示するには、[上記で生成した](#jwt-payload) JWT を API リクエストの Authorization ヘッダに含めます。

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

レスポンスには、インストールのリストが含まれ、各インストールの `id` がインストールのアクセストークンを作成するために利用できます。 レスポンスのフォーマットに関する詳しい情報については、「[認証されたアプリケーションのインストールの一覧表示](/rest/reference/apps#list-installations-for-the-authenticated-app)」を参照してください。

インストールアクセストークンを作成するには、[上記で生成した](#jwt-payload) JWT を API リクエストの Authorization ヘッダに含め、`:installation_id` をインストールの `id` に置き換えます。

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

レスポンスには、インストールアクセストークン、有効期限、トークンの権限、およびトークンがアクセスできるリポジトリが含まれます。 レスポンスのフォーマットに関する詳しい情報については、[アプリケーション (エンドポイント) に対するアクセストークンの作成](/rest/reference/apps#create-an-installation-access-token-for-an-app)を参照してください。

インストールアクセストークンで認証を行うには、インストールアクセストークンを API リクエストの Authorization ヘッダに含めます。

```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN` の値は置き換えてください。

## インストールとして API エンドポイントにアクセスする

インストールアクセストークンを使用して {% data variables.product.prodname_github_apps %} の概要を取得するために利用できる REST API エンドポイントの一覧については、「[利用可能なエンドポイント](/rest/overview/endpoints-available-for-github-apps)」を参照してください。

インストールに関連するエンドポイントの一覧については、「[インストール](/rest/reference/apps#installations)」を参照してください。

## インストールによる HTTP ベースの Git アクセス

リポジトリの `contents` に[権限](/apps/building-github-apps/setting-permissions-for-github-apps/)があるインストールは、インストールアクセストークンを使用して Git へのアクセスを認証できます。 インストールアクセストークンを HTTP パスワードとして使用してください。

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
