---
title: 检查现有 GPG 密钥
intro: 在生成 GPG 密钥之前，您可以检查是否有任何现有的 GPG 密钥。
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
ms.openlocfilehash: c766f4707f2b208c84394f655a7e8b47a9456f6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369295'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

注意：GPG 并未默认安装在 macOS 或 Windows 上。 若要安装 GPG 命令行工具，请参阅 [GnuPG 的下载页面](https://www.gnupg.org/download/)。

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. 检查命令输出以查看是否有 GPG 密钥对。
    * 如果没有 GPG 密钥对，或者不想使用任何可用于对提交和标记进行签名的密钥对，则[生成新的 GPG 密钥](/articles/generating-a-new-gpg-key)。
    * 如果存在现有的 GPG 密钥对，并且您希望使用它来对提交和标记进行签名，则可以使用以下命令显示公钥，并替换要使用的 GPG 密钥 ID。 在本例中，GPG 密钥 ID 为 `3AA5C34371567BD2`：
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      然后，可[将 GPG 密钥添加到 GitHub 帐户](/articles/adding-a-gpg-key-to-your-github-account)。

## 延伸阅读

* [生成新 GPG 密钥](/articles/generating-a-new-gpg-key)
* [将 GPG 密钥添加到 GitHub 帐户](/articles/adding-a-gpg-key-to-your-github-account)
* “[将签名密钥告知 Git](/articles/telling-git-about-your-signing-key)”
* [将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)
* [对提交签名](/articles/signing-commits)
* [对标记签名](/articles/signing-tags)
