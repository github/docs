---
title: 将 GPG 密钥添加到 GitHub 帐户
intro: '要在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上配置帐户以使用新的（或现有的）GPG 密钥，还需要将密钥添加到帐户。'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: db832d4e02ea5f19303b3178fb669967238e661b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369336'
---
## 关于向帐户添加 GPG 密钥

若要在 {% data variables.product.product_name %} 上对与你的帐户关联的提交进行签名，可以将公共 GPG 密钥添加到你的个人帐户。 在添加密钥之前，应检查现有密钥。 如果未找到任何现有密钥，可以生成并复制新的密钥。 有关详细信息，请参阅“[检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)”和“[生成新的 GPG 密钥](/articles/generating-a-new-gpg-key)”。

可以向你在 {% data variables.product.product_name %} 上的帐户添加多个公钥。 由任何相应的私钥签名的提交将显示为已验证。 如果删除公钥，则由相应私钥签名的任何提交将不再显示为已验证。

{% ifversion upload-expired-or-revoked-gpg-key %} 若要验证尽可能多的提交，可以添加已过期和已撤销的密钥。 如果密钥满足所有其他验证要求，则之前由任何相应私钥签名的提交将显示为已验证状态，并指出它们的签名密钥已过期或已撤销。

![一个已验证的提交，它的密钥已过期](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

验证签名时，{% data variables.product.product_name %} 将提取签名，并尝试分析它的密钥 ID。 随后，将此密钥 ID 与添加到 {% data variables.product.product_name %} 的密钥进行匹配。 在匹配的 GPG 密钥被添加到 {% data variables.product.product_name %} 之前，它将无法验证你的签名。

## 添加 GPG 密钥

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. 单击“新建 GPG 密钥”。
   ![“GPG 密钥”按钮](/assets/images/help/settings/gpg-add-gpg-key.png)
4. 在“密钥”字段中，粘贴[生成 GPG 密钥](/articles/generating-a-new-gpg-key)时复制的 GPG 密钥。
   ![密钥字段](/assets/images/help/settings/gpg-key-paste.png)
5. 单击“添加 GPG 密钥”
   ![“添加密钥”按钮](/assets/images/help/settings/gpg-add-key.png)
6. 要确认操作，请输入您的 {% data variables.product.product_name %} 密码。

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## 更新过期的 GPG 密钥

验证签名时，{% data variables.product.product_name %} 会检查密钥是否已撤销或过期。 如果您的签名密钥已撤销或过期，则 {% data variables.product.product_name %} 无法验证您的签名。

如果你的密钥已过期，必须[更新它的过期时间](https://www.gnupg.org/gph/en/manual.html#AEN329)、导出新密钥、删除 {% data variables.product.product_name %} 上帐户中的过期密钥，然后按上述步骤向帐户添加新的密钥。 只要密钥满足所有其他验证要求，您以前的提交和标记就会显示为已验证。

如果您的密钥已撤销，请使用主密钥或未撤销的其他密钥为提交签名。

如果您的密钥无效且您没有在密钥集中使用其他有效的密钥，而是使用一组新凭据生成新的 GPG 密钥，则使用已撤销或过期的密钥进行的提交将仍显示为未验证。 此外，你的新凭据将无法对你的旧提交和标记进行重新签名或验证。
{% endif %}

## 延伸阅读

- [检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)
- [生成新 GPG 密钥](/articles/generating-a-new-gpg-key)
- [将签名密钥告知 Git](/articles/telling-git-about-your-signing-key)
- [将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)
- [使用 GPG 密钥对提交和标记进行签名](/articles/signing-commits-and-tags-using-gpg)
- [关于提交签名验证](/articles/about-commit-signature-verification)
