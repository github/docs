---
title: 对提交签名
intro: '可以使用 GPG{% ifversion ssh-commit-verification %}、SSH、{% endif %} 或 S/MIME 在本地对提交进行签名。'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 8550393cc31571756099ac364698434f38b02cfa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106747'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**提示：**

若要将 Git 客户端配置为默认对本地存储库的提交进行签名，请在 Git 版本 2.0.0 及更高版本中，运行 `git config commit.gpgsign true`。 要在计算机上的任何本地存储库中默认对所有提交进行签名，请运行 `git config --global commit.gpgsign true`。

要存储 GPG 密钥密码，以便无需在每次对提交签名时输入该密码，我们建议使用以下工具：
  - 对于 Mac 用户，[GPG Suite](https://gpgtools.org/) 支持在 Mac OS 密钥链中存储 GPG 密钥密码。
  - 对于 Windows 用户，[Gpg4win](https://www.gpg4win.org/) 将与其他 Windows 工具集成。

你也可以手动配置 [gpg-agent](http://linux.die.net/man/1/gpg-agent) 以保存 GPG 密钥密码，但这不会与 Mac OS 密钥链（如 ssh 代理）集成，并且需要更多设置。

{% endtip %}

如果你有多个密钥或尝试使用与你的提交者标识不匹配的密钥对提交或标记进行签名，应[将签名密钥告知 Git](/articles/telling-git-about-your-signing-key)。

1. 当本地分支中的提交更改时，请将 S 标志添加到 git commit 命令：
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. 如果使用 GPG，创建提交后，请提供[生成 GPG 密钥](/articles/generating-a-new-gpg-key)时设置的密码。
3. 在本地完成创建提交后，将其推送到 {% data variables.product.product_name %} 上的远程仓库：
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. 在 {% data variables.product.product_name %} 上，导航到您的拉取请求。
{% data reusables.repositories.review-pr-commits %}
5. 要查看关于已验证签名的更多详细信息，请单击 Verified（已验证）。
![已签名提交](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## 延伸阅读

* “[将签名密钥告知 Git](/articles/telling-git-about-your-signing-key)”
* [对标记签名](/articles/signing-tags)
