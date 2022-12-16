---
ms.openlocfilehash: 6cff9129bc98844ebcbcf3449cd5b5621559242c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147710195"
---
1. Definiere den Schlüssel als Umgebungsvariable für {% data variables.product.product_name %}, und ersetze `<YOUR-KEY-ID>` durch die GPG-Schlüssel-ID.

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
