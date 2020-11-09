---
title: GPG キーとメールの関連付け
intro: 'GPG キーは、コミッタのアイデンティティとマッチする {% data variables.product.product_name %} が検証済みのメールと関連づけられなければなりません。'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

コミッタのアイデンティティと {% data variables.product.product_name %}アカウントに関連付けられた検証済みのメールアドレスに一致する GPG キーを使っている場合、コミットやタグへの署名を始めることができます。

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
4. `gpg --edit-key GPG key ID` と入力してください。GPG key ID は使いたいキーの ID で置き換えてください。 以下の例では、GPG キー ID は `3AA5C34371567BD2` です。
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. `gpg> adduid` と入力して、ユーザ ID の詳細を追加してください。
  ```shell
  $ gpg> adduid
  ```
6. プロンプトに従って、本名、メールアドレス、あればコメントを入力してください。 エントリーは、`N`、`C`、`E` を選択して変更できます。 {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %} For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address)."{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. `O` を入力して選択した内容を保存してください。
8. キーのパスフレーズを入力してください。
9. `gpg --armor --export GPG key ID` と入力してください。GPG key ID は使いたいキーの ID で置き換えてください。 以下の例では、GPG キー ID は `3AA5C34371567BD2` です。
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # ASCII armor 形式で GPG キーを出力する
  ```
10. [GPG キーを GitHub アカウントに追加](/articles/adding-a-new-gpg-key-to-your-github-account)することで、GPG キーをアップロードしてください。

### 参考リンク

- [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
- [GPG キーで検証済みのメールアドレスを使う](/articles/using-a-verified-email-address-in-your-gpg-key)
- [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
