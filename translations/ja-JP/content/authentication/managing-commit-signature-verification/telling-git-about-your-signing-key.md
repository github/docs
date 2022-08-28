---
title: Git へ署名キーを伝える
intro: ローカルでコミットに署名するには、使用する GPG または X.509 キーがあることを Git に知らせる必要があります。
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
---

{% mac %}

## Git へ GPG キーを伝える

コミッタのアイデンティティと {% data variables.product.product_name %}アカウントに関連付けられた検証済みのメールアドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

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

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

## Git へ GPG キーを伝える

コミッタのアイデンティティと {% data variables.product.product_name %}アカウントに関連付けられた検証済みのメールアドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細は「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% data reusables.gpg.x-509-key %}

{% endwindows %}

{% linux %}

## Git へ GPG キーを伝える

コミッタのアイデンティティと {% data variables.product.product_name %}アカウントに関連付けられた検証済みのメールアドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細は「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. GPG キーを bash プロファイルに追加するには、次のコマンドを実行します。
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
  {% note %}

  **メモ:** `.bash_profile` を持っていない場合、このコマンドで `.profile` に GPG キーを追加します。

  {% endnote %}

{% endlinux %}

## 参考リンク

- [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
- [GPG キーで検証済みのメールアドレスを使う](/articles/using-a-verified-email-address-in-your-gpg-key)
- [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
- [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
