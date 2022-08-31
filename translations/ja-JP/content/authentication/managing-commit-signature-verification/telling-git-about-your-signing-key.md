---
title: Git へ署名キーを伝える
intro: 'To sign commits locally, you need to inform Git that there''s a GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or X.509 key you''d like to use.'
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
---

{% mac %}

## Git へ GPG キーを伝える

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細は「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. GPG スイートを使用していない場合は、`zsh` シェルで次のコマンドを実行して、GPG キーがある場合に `.zshrc` ファイル、または `.zprofile` ファイルに追加します。
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  または、`bash` シェルを使用する場合は、次のコマンドを実行します。
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Optionally, to prompt you to enter a PIN or passphrase when required, install `pinentry-mac`. For example, using [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Git へ GPG キーを伝える

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細は「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% endwindows %}

{% linux %}

## Git へ GPG キーを伝える

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細は「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. To add your GPG key to your `.bashrc` startup file, run the following command:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %}
{% ifversion ssh-commit-verification %}

## Telling Git about your SSH key

You can use an existing SSH key to sign commits and tags, or generate a new one specifically for signing. 詳しい情報については、「[新しい SSH キーを生成して ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.configure-ssh-signing %}
{% data reusables.gpg.copy-ssh-public-key %}
{% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## 参考リンク

- "[Adding a new SSH key to your GitHub account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."
- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
