---
title: タグに署名する
intro: 'You can sign tags locally using GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or S/MIME.'
redirect_from:
  - /articles/signing-tags-using-gpg
  - /articles/signing-tags
  - /github/authenticating-to-github/signing-tags
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

1. タグに署名するには、`git tag` コマンドに `-s` を追加します。
  ```shell
  $ git tag -s <em>mytag</em>
  # 署名済みのタグを作成する
  ```
2. Verify your signed tag by running `git tag -v [tag-name]`.
  ```shell
  $ git tag -v <em>mytag</em>
  # 署名済みのタグを検証する
  ```

## 参考リンク

- [リポジトリのタグを表示する](/articles/viewing-your-repositorys-tags)
- 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
- [GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)
- 「[コミットに署名する](/articles/signing-commits)」
