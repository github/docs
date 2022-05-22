---
title: サポートされているオペレーティングシステム
intro: 'サポートされているオペレーティングシステムで {% data variables.product.prodname_desktop %} を使用できます。'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  free-pro-team: '*'
---
### サポートされているオペレーティングシステムについて

{% data variables.product.prodname_desktop %} では、次のオペレーティングシステムがサポートされています。
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. {% data variables.product.prodname_desktop %} を実行するには、64 ビットのオペレーティングシステムが必要です。

### macOS に関する問題のトラブルシューティング
macOS で {% data variables.product.prodname_desktop %} を使用して問題が発生した場合は、以下の解決策を試してください。 詳しい情報については、[`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md) を参照してください。

#### アカウントへのサインイン時のエラー：`The username or passphrase you entered is not correct`（入力したユーザ名またはパスフレーズが正しくありません）

このエラーは、{% data variables.product.prodname_desktop %} がキーチェーンに保存されている認証情報にアクセスできない場合に発生する可能性があります。

このエラーのトラブルシューティングを行うには、次のステップを実行します。

1. 「Keychain Access」アプリケーションを開きます。
2. [**login**] を右クリックして、[**Lock Keychain "login"**] をクリックします。 !["Lock Keychain "login" オプション](/assets/images/help/desktop/mac-lock-keychain.png)
3. [**login**] を右クリックして、[**Unlock Keychain "login"**] をクリックします。 画面の指示に従って、Keychain "login" のロック解除を完了します。 !["Unlock Keychain "login" オプション](/assets/images/help/desktop/mac-unlock-keychain.png)
4. {% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} でアカウントを再認証します。

#### アップデート確認時のエラー：`Could not create temporary directory: Permission denied`（一時ディレクトリを作成できませんでした：権限が拒否されました）

このエラーは、`~/Library/Caches/com.github.GitHubClient.ShipIt` ディレクトリの権限がない場合に発生する可能性があります。 {% data variables.product.prodname_desktop %} はこのディレクトリを使用して、アプリケーションの更新の一部として一時ファイルを作成および解凍します。

このエラーのトラブルシューティングを行うには、次のステップを実行します。

1. {% data variables.product.prodname_desktop %} を閉じます。
2. 「Finder」を開き、`~/Library/Caches/` に移動します。
3. `com.github.GitHubClient.ShipIt` を右クリックし、[**Get Info**] をクリックします。
4. [Sharing & Permissions] の左にある矢印をクリックします。
5. ユーザアカウントの右にある権限に「Read & Write」と表示されていない場合は、テキストをクリックして、[**Read & Write**] をクリックします。 !["Sharing & Permissions" オプション](/assets/images/help/desktop/mac-adjust-permissions.png)
6. {% data variables.product.prodname_desktop %} を開き、更新を確認します。

### Windows に関する問題のトラブルシューティング
Windows で {% data variables.product.prodname_desktop %} を使用して問題が発生した場合は、以下の解決策を試してください。 詳しい情報については、[`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md) を参照してください。

#### エラー: `The revocation function was unable to check revocation for the certificate.`（失効機能で証明書の失効を確認できませんでした。）

このエラーは、Windows が証明書の失効ステータスチェックをブロックする企業ネットワークで {% data variables.product.prodname_desktop %} を使用している場合に発生する可能性があります。

トラブルシューティングを行うには、システム管理者にお問い合わせください。

#### エラー: `git clone failed` (フォルダリダイレクトで設定されたリポジトリのクローン作成中にエラーが発生しました)

{% data variables.product.prodname_desktop %} は、フォルダリダイレクトで設定されたリポジトリをサポートしていません。

#### エラー: `cygheap base mismatch detected` (cygheap ベースの不一致が検出されました)

このエラーは、必須 ASLR が有効になっている場合に発生する可能性があります。 必須 ASLR を有効にすると、{% data variables.product.prodname_desktop %} がプロセスのフォークをエミュレートするために依存している MSYS2 コアライブラリに影響します。

このエラーのトラブルシューティングを行うには、必須 ASLR を無効にするか、MSYS2 に依存する `<Git>\usr\bin` 下のすべての実行可能ファイルを明示的に許可します。
