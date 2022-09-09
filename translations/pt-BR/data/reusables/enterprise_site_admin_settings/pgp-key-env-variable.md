---
ms.openlocfilehash: 3598eaa94fadd1b5bed7e58f37941ebce60058fb
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062103"
---
1. Defina a chave como uma variável de ambiente para {% data variables.product.product_name %}, substituindo `<YOUR-KEY-ID>` pela ID da chave GPG.

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
