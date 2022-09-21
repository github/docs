---
title: 既存の GPG キーの確認
intro: GPG キーを生成する前に、GPG キーがすでに存在するかどうかを確認できます。
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
ms.openlocfilehash: c766f4707f2b208c84394f655a7e8b47a9456f6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369298'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**注:** 既定では、macOS や Windows に GPG はインストールされていません。 GPG コマンド ライン ツールをインストールするには、[GnuPG のダウンロード ページ](https://www.gnupg.org/download/)を参照してください。

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. コマンドの出力結果を見て、GPG キーペアがあるか確認します。
    * GPG キーのペアが存在しないか、既存の GPG キーをコミットやタグへの署名に利用したくない場合、[新しい GPG キーを作成](/articles/generating-a-new-gpg-key)します。
    * 既存の GPG キー ペアがあり、それを使用してコミットとタグの署名を行う場合は、次のコマンドを使用して公開キーを表示し、使用する GPG キー ID に置き換えます。 この例では、GPG キー ID は `3AA5C34371567BD2` です。
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      その後、[GPG キーを GitHub アカウントに追加](/articles/adding-a-gpg-key-to-your-github-account)できます。

## 参考資料

* 「[新しい GPG キーを生成する](/articles/generating-a-new-gpg-key)」
* [GitHub アカウントに GPG キーを追加する](/articles/adding-a-gpg-key-to-your-github-account)
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* 「[GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)」
* 「[コミットに署名する](/articles/signing-commits)」
* [タグに署名する](/articles/signing-tags)
