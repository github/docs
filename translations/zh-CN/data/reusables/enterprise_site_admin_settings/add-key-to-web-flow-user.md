---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147369247"
---
1. 运行以下命令，将 KEY-ID 替换为 PGP 密钥 ID。

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. 复制以 `-----BEGIN PGP PUBLIC KEY BLOCK-----` 开头并以 `-----END PGP PUBLIC KEY BLOCK-----` 结尾的 PGP 密钥。
1. 以 `web-flow` 用户身份登录 {% data variables.product.prodname_ghe_server %}。
1. 将公共 PGP 密钥添加到用户配置文件。 有关详细信息，请参阅“[将 GPG 密钥添加到 {% data variables.product.prodname_dotcom %} 帐户](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)”。

   {% note %}

   注意：不要从 GPG 密钥列表中删除其他公钥。 如果删除公钥，则使用相应私钥签名的任何提交都将不再标记为已验证。

   {% endnote %}
