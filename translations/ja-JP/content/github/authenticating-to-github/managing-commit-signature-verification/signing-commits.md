---
title: コミットに署名する
intro: GPG または S/MIME を使用してローカルでコミットに署名できます。
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg/
  - /articles/signing-commits-using-gpg/
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**参考:**

Git バージョン 2.0.0 以降で、ローカルリポジトリでデフォルトでコミットに署名するために Git クライアントを設定するには、`git config commit.gpgsign true` を実行します。 コンピュータのローカルリポジトリでデフォルトですべてのコミットに署名するには、`git config --global commit.gpgsign true` を実行します。

コミットに署名するたびに入力する必要をなくすために GPG キーパスフレーズを保管するには、次のツールの使用をおすすめします:
  - Mac ユーザは、[GPG Suite](https://gpgtools.org/) により、Mac OS キーチェーンに GPG キーパスフレーズを保管できます。
  - Windows ユーザの場合、[Gpg4win](https://www.gpg4win.org/) が他の Windows ツールと統合します。

また、GPG キーパスフレーズを保管しておくために [gpg-agent](http://linux.die.net/man/1/gpg-agent) を手動で設定できます。ですが、ssh-agent のように Mac OS キーチェーンでは統合されず、さらにセットアップが必要です。

{% endtip %}

複数のキーを持っている場合、または、コミッターのアイデンティティにマッチしないキーでコミットやタグに署名しようとする場合、[ サインインのキーを Git に伝える](/articles/telling-git-about-your-signing-key)必要があります。

1. ローカルブランチに変更をコミットする場合、 -S フラグをGitコミットコマンドに追加します。
  ```shell
  $ git commit -S -m <em>your commit message</em>
  # 署名済みのコミットを作成する
  ```
2. コミットの作成後にGPGを使っている場合、設定したパスフレーズをGPGキーを作成する時に提供します。
3. ローカルでのコミット作成が完了したら、{% data variables.product.product_name %} 上のリモートリポジトリにプッシュします。
  ```shell
  $ git push
  # ローカルコミットをリモートリポジトリにプッシュする
  ```
4. {% data variables.product.product_name %}上で、プルリクエストに移動します。
{% data reusables.repositories.review-pr-commits %}
5. ベリファイされた署名の詳しい情報を見るには、Verifiedをクリックします。 ![署名されたコミット](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

### 参考リンク

* [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
* [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
* [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
* 「[タグに署名する](/articles/signing-tags)」
