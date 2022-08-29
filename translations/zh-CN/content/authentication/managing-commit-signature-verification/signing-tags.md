---
title: 对标记签名
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

1. 要对标记签名，请将 `-s` 添加到您的 `git tag` 命令。
  ```shell
  $ git tag -s <em>mytag</em>
  # Creates a signed tag
  ```
2. 通过运行 `git tag -v [tag-name]` 验证您签名的标记。
  ```shell
  $ git tag -v <em>mytag</em>
  # Verifies the signed tag
  ```

## 延伸阅读

- "[查看仓库的标记](/articles/viewing-your-repositorys-tags)"
- "[向 Git 告知您的签名密钥](/articles/telling-git-about-your-signing-key)"
- "[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)"
- "[对提交签名](/articles/signing-commits)"
