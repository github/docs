---
ms.openlocfilehash: 6cff9129bc98844ebcbcf3449cd5b5621559242c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147710198"
---
1. Определите ключ как переменную среды для {% data variables.product.product_name %}, заменив `<YOUR-KEY-ID>` идентификатором ключа GPG.

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
