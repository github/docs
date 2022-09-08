---
ms.openlocfilehash: 3598eaa94fadd1b5bed7e58f37941ebce60058fb
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062110"
---
1. Define la clave como una variable de entorno para {% data variables.product.product_name %}, reemplazando `<YOUR-KEY-ID>` por el Id. de clave GPG.

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
