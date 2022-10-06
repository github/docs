---
title: サポートされるオペレーティング システム
intro: 'サポートされているオペレーティングシステムで {% data variables.product.prodname_desktop %} を使用できます。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  fpt: '*'
shortTitle: Supported OS
ms.openlocfilehash: 13e148ccf8e254c4e40f9e20ad6c5af083e21d8c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117277'
---
## サポートされているオペレーティングシステムについて

{% data variables.product.prodname_desktop %} では、次のオペレーティングシステムがサポートされています。
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. {% data variables.product.prodname_desktop %} を実行するには、64 ビットのオペレーティングシステムが必要です。

## macOS に関する問題のトラブルシューティング
macOS で {% data variables.product.prodname_desktop %} を使用して問題が発生した場合は、以下の解決策を試してください。 詳細については、「[`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md)」を参照してください。

### アカウントにサインインした後に `The username or passphrase you entered is not correct` エラーが発生する

このエラーは、{% data variables.product.prodname_desktop %} がキーチェーンに保存されている認証情報にアクセスできない場合に発生する可能性があります。

このエラーのトラブルシューティングを行うには、次のステップを実行します。

1. 「Keychain Access」アプリケーションを開きます。
2. **[ログイン]** を右クリックし、 **[Lock Keychain "login"]\(キーチェーンのロック "ログイン"\)** をクリックします。
  ![[Lock Keychain "login"]\(キーチェーンのロック "ログイン"\) オプション](/assets/images/help/desktop/mac-lock-keychain.png)
3. **[ログイン]** を右クリックし、 **[Unlock Keychain "login"]\(キーチェーンのロック解除 "ログイン"\)** をクリックします。 画面の指示に従って、Keychain "login" のロック解除を完了します。
  ![[Unlock Keychain "login"]\(キーチェーンのロック解除 "ログイン"\) オプション](/assets/images/help/desktop/mac-unlock-keychain.png)
4. {% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} でアカウントを再認証します。

### 更新プログラムのチェック後に `Could not create temporary directory: Permission denied` エラーが発生する

このエラーは、`~/Library/Caches/com.github.GitHubClient.ShipIt` ディレクトリのアクセス許可の不足が原因で発生している可能性があります。 {% data variables.product.prodname_desktop %} はこのディレクトリを使用して、アプリケーションの更新の一部として一時ファイルを作成および解凍します。

このエラーのトラブルシューティングを行うには、次のステップを実行します。

1. {% data variables.product.prodname_desktop %} を閉じます。
2. [Finder] を開き、`~/Library/Caches/` に移動します。
3. [`com.github.GitHubClient.ShipIt`] を右クリックし、 **[情報の取得]** をクリックします。
4. [共有とアクセス許可] の左にある矢印をクリックします。
5. ユーザー アカウントの右側の特権に "読み取りと書き込み" と表示されない場合は、テキストをクリックし、 **[読み取りと書き込み]** をクリックします。
  ![[共有とアクセス許可] オプション](/assets/images/help/desktop/mac-adjust-permissions.png)
6. {% data variables.product.prodname_desktop %} を開き、更新を確認します。

## Windows に関する問題のトラブルシューティング
Windows で {% data variables.product.prodname_desktop %} を使用して問題が発生した場合は、以下の解決策を試してください。 詳細については、「[`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md)」を参照してください。

### `The revocation function was unable to check revocation for the certificate.` エラー

このエラーは、Windows が証明書の失効ステータスチェックをブロックする企業ネットワークで {% data variables.product.prodname_desktop %} を使用している場合に発生する可能性があります。

トラブルシューティングを行うには、システム管理者にお問い合わせください。

### フォルダー リダイレクトで構成されたリポジトリの複製中に `git clone failed` エラーが発生する

{% data variables.product.prodname_desktop %} は、フォルダリダイレクトで設定されたリポジトリをサポートしていません。

### `cygheap base mismatch detected` エラー

このエラーは、必須 ASLR が有効になっている場合に発生する可能性があります。 必須 ASLR を有効にすると、{% data variables.product.prodname_desktop %} がプロセスのフォークをエミュレートするために依存している MSYS2 コアライブラリに影響します。

このエラーのトラブルシューティングを行うには、必須 ASLR を無効にするか、MSYS2 に依存する `<Git>\usr\bin` 下のすべての実行可能ファイルを明示的に許可します。
