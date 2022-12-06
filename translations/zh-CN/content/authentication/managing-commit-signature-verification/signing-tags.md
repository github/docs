---
title: 对标记签名
intro: '可以使用 GPG{% ifversion ssh-commit-verification %}、SSH、{% endif %} 或 S/MIME 在本地对标记进行签名。'
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
ms.openlocfilehash: 22bdc1c5095a8fa82d2ac406a19dc633f8f44fc6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106675'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. 若要对标记进行签名，请将 `-s` 添加到 `git tag` 命令。
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. 通过运行 `git tag -v [tag-name]` 验证已签名的标记。
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## 延伸阅读

- [查看存储库的标记](/articles/viewing-your-repositorys-tags)
- “[将签名密钥告知 Git](/articles/telling-git-about-your-signing-key)”
- [将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)
- [对提交签名](/articles/signing-commits)
