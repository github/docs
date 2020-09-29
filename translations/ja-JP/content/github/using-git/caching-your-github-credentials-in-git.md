---
title: Git に GitHub の認証情報をキャッシュする
redirect_from:
  - /firewalls-and-proxies/
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
intro: '[HTTPS で {% data variables.product.product_name %} リポジトリをクローンする](/github/using-git/which-remote-url-should-i-use) 場合、認証情報ヘルパー を使って、ユーザ名とパスワードを記憶するように Git に指示できます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

SSH で {% data variables.product.product_name %} リポジトリをクローンする場合、他の認証情報ではなく SSH キーで認証します。 SSH 接続のセットアップについては「[SSH キーを生成する](/articles/generating-an-ssh-key)」を参照してください。

{% mac %}

{% tip %}

**参考:**

- osxkeychain 認証情報ヘルパーを利用するには、Git **1.7.10** 以降が必要です。
- [Homebrew](http://brew.sh/) を使って Git をインストールした場合、`osxkeychain helper` はインストール済みです。
- Mac OS X 10.7 以降を実行しており、Apple の Xcode コマンドラインツールで Git をインストールした場合、`osxkeychain helper` は インストールした Git に含まれています。

{% endtip %}

Git および `osxkeychain helper` をインストールし、Git に `osxkeychain helper` の利用を指示します。

1. Git および `osxkeychain helper` がインストールされているか、以下のコマンドで確認します:
  ```shell
  $ git credential-osxkeychain
  # Test for the cred helper
  > Usage: git credential-osxkeychain &lt;get|store|erase>
  ```
2. `osxkeychain helper` がインストールされておらず、OS X バージョン10.9以降を実行している場合は、Xcode コマンドラインツールの一部としてダウンロードするよう求められます。
  ```shell
  $ git credential-osxkeychain
  > xcode-select: note: no developer tools were found at '/Applications/Xcode.app',
  > requesting install. Choose an option in the dialog to download the command line developer tools.
  ```

 または、[Homebrew](http://brew.sh/) を使用して Git と`osxkeychain helper` をインストールします。
  ```shell
  $ brew install git
  ```

4. グローバルな `credential.helper` config を使用して `osxkeychain helper` を使用するよう Git に指示します。
  ```shell
  $ git config --global credential.helper osxkeychain
  # Set git to use the osxkeychain credential helper
  ```

認証が必要な HTTPS URL を次にクローンするときに、ユーザ名とパスワードの入力を求められます。 {% data reusables.user_settings.password-authentication-deprecation %}

認証に成功すると、認証情報は macOS のキーチェーンに保存され、HTTPS URL をクローンするたびに使用されます。 認証情報を変更しない限り、今後は Git で認証情報を入力する必要はなくなります。

{% endmac %}

{% windows %}

{% tip %}

**ヒント:** 認証情報ヘルパーを利用するには、Git **1.7.10** 以降が必要です。

{% endtip %}

[Git for Windows](https://git-for-windows.github.io/) など、ネイティブ Git シェルをインストールすることもできます。 Git for Windows では、以下のコマンドを実行すると認証情報が保存されます:

```shell
$ git config --global credential.helper wincred
```

{% endwindows %}

{% linux %}

{% tip %}

**ヒント:** 認証情報ヘルパーを利用するには、Git **1.7.10** 以降が必要です。

{% endtip %}

認証情報ヘルパーを有効化し、Git が任意の時間、メモリにパスワードを保存できるようにしてください。 デフォルトでは、Git はパスワードを 15 分間保存します。

1. ターミナルに、以下を入力します。
  ```shell
  $ git config --global credential.helper cache
  # Set git to use the credential memory cache
  ```
2. パスワードのキャッシュがタイムアウトする時間を変更するには、以下のように入力します:
  ```shell
  $ git config --global credential.helper 'cache --timeout=3600'
  # Set the cache to timeout after 1 hour (setting is in seconds)
  ```

{% endlinux %}

### 参考リンク

- "[OSX キーチェーンの認証情報の更新](/articles/updating-credentials-from-the-osx-keychain/)"
- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)
