---
title: 新增 GPG 密钥到 GitHub 帐户
intro: 要在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上配置帐户以使用新的（或现有的）GPG 密钥，还需要将密钥添加到帐户。
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145084629"
---
在将新的 GPG 密钥添加到 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户之前，您应该具有：
- [已检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)
- [已生成并已复制新 GPG 密钥](/articles/generating-a-new-gpg-key)

可以将多个公钥添加到 GitHub 帐户。 由任何相应的私钥签名的提交将显示为已验证。 如果删除公钥，则由相应私钥签名的任何提交将不再显示为已验证。

{% data reusables.gpg.supported-gpg-key-algorithms %}

验证签名时，我们将提取签名并尝试分析其密钥 ID。我们将密钥 ID 与上传到 {% data variables.product.product_name %} 的密钥匹配。 在将 GPG 密钥上传到 {% data variables.product.product_name %} 之前，我们无法验证您的签名。

## <a name="adding-a-gpg-key"></a>添加 GPG 密钥

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. 单击“新建 GPG 密钥”。
   ![“GPG 密钥”按钮](/assets/images/help/settings/gpg-add-gpg-key.png)
4. 在“密钥”字段中，粘贴[生成 GPG 密钥](/articles/generating-a-new-gpg-key)时复制的 GPG 密钥。
   ![密钥字段](/assets/images/help/settings/gpg-key-paste.png)
5. 单击“添加 GPG 密钥”
   ![“添加密钥”按钮](/assets/images/help/settings/gpg-add-key.png)
6. 要确认操作，请输入您的 {% data variables.product.product_name %} 密码。

## <a name="further-reading"></a>延伸阅读

* [检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)
* [生成新 GPG 密钥](/articles/generating-a-new-gpg-key)
* [将签名密钥告知 Git](/articles/telling-git-about-your-signing-key)
* [将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)
* [使用 GPG 密钥对提交和标记进行签名](/articles/signing-commits-and-tags-using-gpg)
