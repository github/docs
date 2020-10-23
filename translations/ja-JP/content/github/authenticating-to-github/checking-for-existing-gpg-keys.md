---
title: 既存の GPG キーの確認
intro: 'GPG キーを生成する前に、GPG キーがすでに存在するかどうかを確認できます。'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**メモ:** OS X や Windows では、GPG はデフォルトではインストールされていません。 GPG コマンドラインツールをインストールするには、[GnuPG のダウンロードページ](https://www.gnupg.org/download/)を参照してください。

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
3. コマンドの出力結果を見て、GPG キーペアがあるか確認します。
    * GPG キーのペアが存在しないか、既存の GPG キーをコミットやタグへの署名に利用したくない場合、[新しい GPG キーを作成](/articles/generating-a-new-gpg-key)します。
    * GPG キーのペアが存在し、そのキーをコミットやタグへの署名に利用したい場合、[GPG キーを GitHub アカウント](/articles/adding-a-new-gpg-key-to-your-github-account)に追加します。

### 参考リンク

* [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
* [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
* 「[コミットに署名する](/articles/signing-commits)」
* 「[タグに署名する](/articles/signing-tags)」
