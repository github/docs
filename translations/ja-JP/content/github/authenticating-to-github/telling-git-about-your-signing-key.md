---
title: Git へ署名キーを伝える
intro: 'ローカルでコミットに署名するには、使いたい GPG{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} または X.509{% endif %} キーがあることを Git に通知する必要があります。'
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% mac %}

### Git へ GPG キーを伝える

コミッタのアイデンティティと {% data variables.product.product_name %}アカウントに関連付けられた検証済みのメールアドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細は「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. GPG スイートを使っていない場合、bash プロフィールに GPG キーを追加するために下記のテキストをペーストしてください:
  ```shell
  $ test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
  $ echo 'export GPG_TTY=$(tty)' >> ~/.profile
  ```
  {% note %}

  **メモ:** `.bash_profile` を持っていない場合、このコマンドで `.profile` に GPG キーを追加します。

  {% endnote %}

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

### Git へ GPG キーを伝える

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

{% note %}

**メモ:** Linux 上の X.509 はサポートされていません。 暗号化と署名サービスを提供するために gpgsm を設定できます。ですが、現在 {% data variables.product.product_name %} はこれをサポートしていません。 詳しい情報については、GnuPG のドキュメンテーションの [gpgsm](https://www.gnupg.org/documentation/manuals/gnupg/Invoking-GPGSM.html) のトピックを参照してください。

{% endnote %}

### Git へ GPG キーを伝える

コミッタのアイデンティティと {% data variables.product.product_name %}アカウントに関連付けられた検証済みのメールアドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% note %}

コミッターアイデンティティにマッチする GPG キーを持っていない場合、既存のキーとメールアドレスを関連付ける必要があります。 詳細は「[メールを GPG キーに関連付ける](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

{% endnote %}

複数の GPG キーを持っている場合、どれを使うかを Git に伝える必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Bash プロフィールに GPG キーを追加するには、下記のテキストを貼り付けてください。
  ```shell
  $ test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
  $ echo 'export GPG_TTY=$(tty)' >> ~/.profile
  ```
  {% note %}

  **メモ:** `.bash_profile` を持っていない場合、このコマンドで `.profile` に GPG キーを追加します。

  {% endnote %}

{% endlinux %}

### 参考リンク

- [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
- [GPG キーで検証済みのメールアドレスを使う](/articles/using-a-verified-email-address-in-your-gpg-key)
- [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
- [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
