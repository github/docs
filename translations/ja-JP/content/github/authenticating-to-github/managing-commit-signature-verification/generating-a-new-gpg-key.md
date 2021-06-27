---
title: 新しい GPG キーを生成する
intro: 既存の GPG キーがない場合は、新しい GPG キーを生成してコミットおよびタグの署名に使用できます。
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

### GPG キーの生成

{% note %}

**メモ:** 新しい GPG キーを生成する前にメールアドレスを検証しておいてください。 メールアドレスを検証していないと、GPG を使用してコミットやタグに署名できません。{% if currentVersion == "free-pro-team@latest" %} 詳しい情報については、「[メールアドレスを検証する](/articles/verifying-your-email-address)」を参照してください。{% endif %}

{% endnote %}

1. オペレーティングシステムに [GPG コマンドラインツール](https://www.gnupg.org/download/)をダウンロードしてインストールします。 通常はオペレーティングシステム向けの最新バージョンをインストールすることをおすすめします。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. GPG キーペアを生成します。 GPG には複数のバージョンがあるため、関連する [_man ページ_](https://en.wikipedia.org/wiki/Man_page)を参考にして適切なキーの生成コマンドを見つける必要があります。 キーには RSA を使用する必要があります。
    - バージョン 2.1.17 以降の場合は、以下のテキストを貼り付けて GPG キーペアを生成します。
      ```shell
      $ gpg --full-generate-key
      ```
    - バージョン 2.1.17 およびそれ以降でない場合は、 `gpg --full-generate-key` コマンドが使えません。 以下のテキストを貼り付けてステップ 6 に進んでください。
      ```shell
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. プロンプトで、必要なキーの種類を指定するか、`Enter` キーを押してデフォルトの `RSA and RSA` を受け入れます。
5. 希望のキーサイズを入力します。 キーは少なくとも `4096` ビットである必要があります。
6. キーの有効期間を入力します。 `Enter` キーを押して、無期限を示すデフォルトの選択を指定します。
7. 選択内容が正しいことを確認します。
8. ユーザ ID 情報を入力します。

  {% note %}

  **メモ:** メールアドレスの入力を求められた場合は、GitHub アカウント用の検証済みメールアドレスを入力してください。 {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %} 詳しい情報については、「[メールアドレスを検証する](/articles/verifying-your-email-address)」および「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。{% endif %}

  {% endnote %}

9. 安全なパスフレーズを入力します。
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
10. 以下のテキストを貼り付けます。GPG キー ID は実際に使用するものを入力してください。 この例では、GPG キー ID は `3AA5C34371567BD2` です。
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # ASCII armor 形式で GPG キーを出力する
  ```
11. `-----BEGIN PGP PUBLIC KEY BLOCK-----` で始まり、`-----END PGP PUBLIC KEY BLOCK-----` で終わる GPG キーをコピーします。
12. [GPG キーを GitHub アカウントに追加](/articles/adding-a-new-gpg-key-to-your-github-account)します。

### 参考リンク

* [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
* [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
* 「[コミットに署名する](/articles/signing-commits)」
* 「[タグに署名する](/articles/signing-tags)」
