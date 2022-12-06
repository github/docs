---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147369249"
---
1. Führe den folgenden Befehl aus, wobei du KEY-ID durch deine PGP-Schlüssel-ID ersetzt.

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. Kopiere deinen PGP-Schlüssel, der mit `-----BEGIN PGP PUBLIC KEY BLOCK-----` beginnt und auf `-----END PGP PUBLIC KEY BLOCK-----` endet.
1. Melde dich bei {% data variables.product.prodname_ghe_server %} als `web-flow`-Benutzer*in an.
1. Füge dem Benutzerprofil den öffentlichen PGP-Schlüssel hinzu. Weitere Informationen findest du unter [Hinzufügen eines GPG-Schlüssels zu deinem {% data variables.product.prodname_dotcom %}-Konto](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

   {% note %}

   **Hinweis:** Entferne keine anderen öffentlichen Schlüssel aus der Liste der GPG-Schlüssel. Wenn ein öffentlicher Schlüssel gelöscht wird, werden alle mit dem entsprechenden privaten Schlüssel signierten Commits nicht mehr als überprüft gekennzeichnet.

   {% endnote %}
