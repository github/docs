---
title: タグに署名する
intro: You can sign tags locally using GPG or S/MIME.
redirect_from:
  - /articles/signing-tags-using-gpg/
  - /articles/signing-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

1. タグに署名するには、`git tag` コマンドに `-s` を追加します。
  ```shell
  $ git tag -s <em>mytag</em>
  # 署名済みのタグを作成する
  ```
2. `git tag -v [tag-name]`を実行して、署名したタグをベリファイします。
  ```shell
  $ git tag -v <em>mytag</em>
  # 署名済みのタグを検証する
  ```

### 参考リンク

- [リポジトリのタグを表示する](/articles/viewing-your-repositorys-tags)
- [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
- [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
- 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
- [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
- 「[コミットに署名する](/articles/signing-commits)」
