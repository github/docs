---
title: Git へ署名キーを伝える
intro: 'ローカル環境でコミットに署名するには、使う GPG{% ifversion ssh-commit-verification %}、SSH、{% endif %} または X.509 キーがあることを Git に知らせる必要があります。'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
ms.openlocfilehash: e78306bb1519f2b7f51ab6bc039bff0b982e48cf
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118996'
---
{% mac %}

## Git へ GPG キーを伝える

コミッター ID と、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} でのアカウントに関連付けられた検証済みのメール アドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細については、「[メールと GPG キーの関連付け](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. GPG スイートを使用していない場合は、`zsh` シェルで次のコマンドを実行して、存在する場合は `.zshrc` ファイル、または `.zprofile` ファイルに GPG キーを追加します。
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  または、`bash` シェルを使用する場合は、次のコマンドを実行します。
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. 必要に応じて、PIN またはパスフレーズの入力を求めるメッセージを表示するには、`pinentry-mac` をインストールします。 たとえば、[Homebrew](https://brew.sh/) を使用すると、次のようになります。
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Git へ GPG キーを伝える

コミッター ID と、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} でのアカウントに関連付けられた検証済みのメール アドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細については、「[メールと GPG キーの関連付け](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## Git へ GPG キーを伝える

コミッター ID と、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} でのアカウントに関連付けられた検証済みのメール アドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細については、「[メールと GPG キーの関連付け](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. GPG キーを `.bashrc` スタートアップ ファイルに追加するには、次のコマンドを実行します。
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## Git に SSH キーについて知らせる

既存の SSH キーを使ってコミットとタグに署名することも、署名専用に新しいキーを生成することもできます。 詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.copy-ssh-public-key %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## 関連項目

- [GitHub アカウントへの新しい SSH キーの追加](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- 「[コミットに署名する](/articles/signing-commits)」
- [タグに署名する](/articles/signing-tags)
