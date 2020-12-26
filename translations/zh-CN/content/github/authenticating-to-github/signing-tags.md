---
title: 对标记签名
intro: 您可以使用 GPG 或 S/MIME 在本地对标记进行签名。
redirect_from:
  - /articles/signing-tags-using-gpg/
  - /articles/signing-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
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

### 延伸阅读

- "[查看仓库的标记](/articles/viewing-your-repositorys-tags)"
- "[检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)"
- "[生成新 GPG 密钥](/articles/generating-a-new-gpg-key)"
- "[添加新 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[向 Git 告知您的签名密钥](/articles/telling-git-about-your-signing-key)"
- "[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)"
- "[对提交签名](/articles/signing-commits)"
