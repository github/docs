---
title: GitHubへの認証方法
shortTitle: 認証
intro: '{% data variables.product.prodname_dotcom %} を認証することで、{% data variables.product.prodname_desktop %} 上のアカウントのリソースに安全にアクセスできます。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
versions:
  free-pro-team: '*'
---

### 認証について

アカウントを安全に保つには、{% data variables.product.prodname_desktop %} を使用して {% data variables.product.prodname_dotcom %} のリソースにアクセスする前に認証する必要があります。

認証する前には、{% data reusables.desktop.get-an-account %}

{% mac %}

### {% data variables.product.prodname_dotcom %} 上のアカウントを認証する

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
3. [{% data variables.product.prodname_dotcom_the_website %}] の右にある [**Sign In**] をクリックします。 ![GitHubのサインインボタン](/assets/images/help/desktop/mac-sign-in-github.png)
4. [Sign in] ペインで [**Sign in using your browser**] をクリックします。 {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開きます。 ![ブラウザリンク経由でのサインイン](/assets/images/help/desktop/mac-sign-in-browser.png)

  {% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.2fa-in-browser %}
7. アカウントが {% data variables.product.prodname_dotcom %} に認証されたら、プロンプトに従って {% data variables.product.prodname_desktop %} に戻ります。

### {% data variables.product.prodname_enterprise %} 上のアカウントを認証する

{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
4. To add a
{% data variables.product.prodname_enterprise %} account, type your credentials under "Enterprise server address," then click **Continue**.
  ![GitHub EnterpriseのSign Inボタン](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
{% data reusables.desktop.retrieve-2fa %}

{% endmac %}

{% windows %}

### {% data variables.product.prodname_dotcom %} 上のアカウントを認証する

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
3. [GitHub.com] の右にある [**Sign in**] をクリックします。 ![GitHubのサインインボタン](/assets/images/help/desktop/windows-sign-in-github.png)
4. サインインペインで、**Sign in using your browser**をクリックします。 ![ブラウザリンク経由でのサインイン](/assets/images/help/desktop/windows-sign-in-browser.png)

  {% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.2fa-in-browser %}
7. アカウントが {% data variables.product.prodname_dotcom %} に認証されたら、プロンプトに従って {% data variables.product.prodname_desktop %} に戻ります。

### {% data variables.product.prodname_enterprise %} 上のアカウントを認証する


{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
4. To add a
{% data variables.product.prodname_enterprise %} account, type your credentials under "Enterprise server address," then click **Continue**.
  ![GitHub EnterpriseのSign Inボタン](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
{% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

### 認証問題のトラブルシューティング

{% data variables.product.prodname_desktop %} で認証エラーが発生した場合は、エラーメッセージを使用してトラブルシューティングを行うことができます。

認証エラーが発生した場合は、まず {% data variables.product.prodname_desktop %} 上のアカウントからサインアウトした後にサインインします。

一部のエラーでは、{% data variables.product.prodname_desktop %} がエラーメッセージを表示します。 プロンプトが表示されない場合、またはエラーに関する詳細情報を確認する場合は、次のステップに従って {% data variables.product.prodname_desktop %} ログファイルを表示します。

{% mac %}

1. [**Help**] ドロップダウンメニューを使用して、[**Show Logs in Finder**] をクリックします。 ![[Show Logs in Finder] ボタン](/assets/images/help/desktop/mac-show-logs.png)
2. 認証エラーが発生した日付からログファイルを選択します。

{% endmac %}

{% windows %}

1. [**Help**] ドロップダウンメニューを使用して、[**Show Logs in Explorer**] をクリックします。 ![[Show Logs in Explorer] ボタン](/assets/images/help/desktop/windows-show-logs.png)
2. 認証エラーが発生した日付からログファイルを選択します。

{% endwindows %}

エラーメッセージについては、下記のトラブルシューティング情報を確認してください。

#### 不正な認証情報

```shell
Error: Bad credentials
```

このエラーは、保存されているアカウントの認証情報に問題があることを示しています。

トラブルシューティングを行うには、{% data variables.product.prodname_desktop %} でアカウントからサインアウトして、再度サインインします。

#### 空のトークン

```shell
info: [ui] [AppStore.withAuthenticatingUser] account found for repository: node - <username> (empty token)
```

このエラーは、{% data variables.product.prodname_desktop %} がシステムキーチェーンに作成したアクセストークンを見つけられないことを示しています。

トラブルシューティングを行うには、{% data variables.product.prodname_desktop %} でアカウントからサインアウトして、再度サインインします。

#### リポジトリが見つからない

```shell
fatal: repository 'https://github.com/<user>/<repo>.git' not found

（エラーは 8 として解析されました：リポジトリはもう存在していないようです。 アクセス権がないか、削除または名前が変更された可能性があります。）
```

このエラーは、クローンを作成しようとしているリポジトリにアクセスする権限がないことを意味します。

トラブルシューティングを行うには、権限を管理する Organization 内の担当者にお問い合わせください。

#### リモートリポジトリから読み込めない

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

正しいアクセス権があり、リポジトリが存在することを確認してください。
```

このエラーは、有効な SSH キーが設定されていないことを示しています。

トラブルシューティングを行うには、「[新しい SSH キーを生成して SSH エージェントに追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

#### クローン失敗

```shell
fatal: clone of 'git@github.com:<user>/<repo>' into submodule path '<path>' failed
Failed to clone 'src/github.com/<user>/<repo>'. Retry scheduled
Cloning into '<path>'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
正しいアクセス権があり、リポジトリが存在することを確認してください。
```

このエラーは、クローンを作成しようとしているリポジトリにアクセス権のないサブモジュールがあるか、有効な SSH キーが設定されていないことを示しています。

サブモジュールにアクセスできない場合は、リポジトリの権限の管理者に連絡してトラブルシューティングを行ってください。

有効な SSH キーが設定されていない場合は、「[新しい SSH キーを生成して SSH エージェントに追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% windows %}

#### AskPass レスポンスが読み取れない

```shell
error: unable to read askpass response from '/Users/<path>/GitHub Desktop.app/Contents/Resources/app/static/ask-pass-trampoline.sh'
fatal: could not read Username for 'https://github.com': terminal prompts disabled
```

このエラーは、複数のイベントによって発生する可能性があります。

`Command Processor` のレジストリエントリが変更されると、{% data variables.product.prodname_desktop %} は、`Authentication failed` で応答します。 これらのレジストリエントリが変更されているかどうかを確認するには、次のステップを実行します。

1. レジストリエディタ（`regedit.exe`）を開き、次の場所に移動します。 `` HKEY_CURRENT_USER\Software\Microsoft\Command Processor\` ``HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. いずれかの場所に `Autorun` 値があるかどうかを確認します。
3. `Autorun` 値がある場合は、それを削除します。

Windows ユーザ名に拡張 Unicode 文字が含まれている場合、AskPass レスポンスエラーが発生する可能性があります。 トラブルシューティングを行うには、新しい Windows ユーザアカウントを作成し、ファイルをそのアカウントに移行します。 詳しい情報については、Microsoft ドキュメンテーションの「[Windows でユーザアカウントを作成する](https://support.microsoft.com/en-us/help/13951/windows-create-user-account)」を参照してください。

{% endwindows %}

### 参考リンク
- 「[GitHub への認証について](/github/authenticating-to-github/about-authentication-to-github)」
