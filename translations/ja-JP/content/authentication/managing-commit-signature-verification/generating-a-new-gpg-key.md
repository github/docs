---
title: 新しい GPG キーを生成する
intro: 既存の GPG キーがない場合は、新しい GPG キーを生成してコミットおよびタグの署名に使用できます。
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: fbe51f7b50414632e6994d6f621441c8923e47f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710228'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## GPG キーの生成

{% note %}

**注:** 新しい GPG キーを生成する前にメール アドレスを検証しておいてください。 メール アドレスを確認していない場合、GPG を使用してコミットとタグに署名することはできません。{% ifversion fpt or ghec %}詳細については、「[メール アドレスの確認](/articles/verifying-your-email-address)」を参照してください。{% endif %}

{% endnote %}

1. オペレーティング システム用の [GPG コマンド ライン ツール](https://www.gnupg.org/download/)をダウンロードしてインストールします。 通常はオペレーティングシステム向けの最新バージョンをインストールすることをおすすめします。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. GPG キーペアを生成します。 GPG には複数のバージョンがあるため、適切なキー生成コマンドを見つけるには、関連する [_man ページ_](https://en.wikipedia.org/wiki/Man_page)を参照する必要がある場合があります。 キーには RSA を使用する必要があります。
    - バージョン 2.1.17 以降の場合は、以下のテキストを貼り付けて GPG キーペアを生成します。
      ```shell{:copy}
      $ gpg --full-generate-key
      ```
    - バージョン 2.1.17 以降を使用していない場合、`gpg --full-generate-key` コマンドは機能しません。 以下のテキストを貼り付けてステップ 6 に進んでください。
      ```shell{:copy}
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. プロンプトで、目的のキーの種類を指定するか、`Enter` を押して既定値をそのまま使用します。
5. プロンプトで、目的のキー サイズを指定するか、`Enter` を押して既定値をそのまま使用します。 キーは少なくとも `4096` ビットである必要があります。
6. キーの有効期間を入力します。 `Enter` を押して、無期限を示す既定の選択を指定します。 有効期限が必要な場合を除き、この既定値をそのまま使用することをお勧めします。
7. 選択内容が正しいことを確認します。
8. ユーザ ID 情報を入力します。

  {% note %}

  **注:** メール アドレスの入力を求められた場合は、GitHub アカウント用の検証済みメール アドレスを入力してください。 {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %}詳細については、「[メール アドレスの確認](/articles/verifying-your-email-address)」および「[コミット メール アドレスの設定](/articles/setting-your-commit-email-address)」を参照してください。{% endif %}

  {% endnote %}

9. 安全なパスフレーズを入力します。
{% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
10. 以下のテキストを貼り付けます。GPG キー ID は実際に使用するものを入力してください。 この例では、GPG キー ID は `3AA5C34371567BD2` です。
 ```shell{:copy}
 $ gpg --armor --export 3AA5C34371567BD2
 # Prints the GPG key ID, in ASCII armor format
 ```
11. `-----BEGIN PGP PUBLIC KEY BLOCK-----` で始まり、`-----END PGP PUBLIC KEY BLOCK-----` で終わる GPG キーをコピーします。
12. [GitHub アカウントに GPG キーを追加します](/articles/adding-a-gpg-key-to-your-github-account)。

## 参考資料

* 「[既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)」
* [GitHub アカウントに GPG キーを追加する](/articles/adding-a-gpg-key-to-your-github-account)
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* 「[GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)」
* 「[コミットに署名する](/articles/signing-commits)」
* [タグに署名する](/articles/signing-tags)
