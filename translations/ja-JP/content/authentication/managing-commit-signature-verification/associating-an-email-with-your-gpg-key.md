---
title: GPG キーとメールの関連付け
intro: 'GPG キーは、コミッタのアイデンティティとマッチする {% data variables.product.product_name %} が検証済みのメールと関連づけられなければなりません。'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
ms.openlocfilehash: d36c053e1df0c329fb8d4607b1338c49414e76de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369282'
---
{% note %}

コミッター ID と、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} でのアカウントに関連付けられた検証済みのメール アドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
4. `gpg --edit-key GPG key ID` を入力します。GPG キー ID は実際に使用するものに置き換えてください。 次の例では、GPG キー ID は `3AA5C34371567BD2` です。
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. `gpg> adduid` を入力して、ユーザー ID の詳細を追加します。
  ```shell
  $ gpg> adduid
  ```
6. プロンプトに従って、本名、メールアドレス、あればコメントを入力してください。 `N`、`C`、または `E` を選択して、エントリを変更できます。 {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} 詳細については、「[コミット メール アドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. `O` を入力し、選択内容を確認します。
8. キーのパスフレーズを入力してください。
9. `gpg> save` を入力し、変更を保存します
  ```shell
  $ gpg> save
  ```
10. `gpg --armor --export GPG key ID` を入力します。GPG キー ID は実際に使用するものに置き換えてください。 次の例では、GPG キー ID は `3AA5C34371567BD2` です。
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key, in ASCII armor format
  ```
11. GPG キーを、[GitHub アカウントに追加](/articles/adding-a-gpg-key-to-your-github-account)してアップロードします。

## 参考資料

- 「[既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)」
- 「[新しい GPG キーを生成する](/articles/generating-a-new-gpg-key)」
- 「[GPG キーで検証済みのメール アドレスを使う](/articles/using-a-verified-email-address-in-your-gpg-key)」
- [GitHub アカウントに GPG キーを追加する](/articles/adding-a-gpg-key-to-your-github-account)
- 「[コミットに署名する](/articles/signing-commits)」
- [タグに署名する](/articles/signing-tags)
