---
ms.openlocfilehash: 3598eaa94fadd1b5bed7e58f37941ebce60058fb
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062104"
---
1. 将密钥定义为 {% data variables.product.product_name %} 的环境变量，将 `<YOUR-KEY-ID>` 替换为 GPG 密钥 ID。

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
