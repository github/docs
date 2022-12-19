---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147369253"
---
1. Ejecuta el comando siguiente, pero reemplaza KEY-ID por el identificador de tu clave de PGP.

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. Copia la clave de PGP, que empieza por `-----BEGIN PGP PUBLIC KEY BLOCK-----` y termina con `-----END PGP PUBLIC KEY BLOCK-----`.
1. Inicia sesión en {% data variables.product.prodname_ghe_server %} como usuario de `web-flow`.
1. Agrega la clave PGP pública al perfil del usuario. Para obtener más información, consulta [Adición de una clave de GPG nueva a la cuenta de {% data variables.product.prodname_dotcom %}](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

   {% note %}

   **Nota:** No quites otras claves públicas de la lista de claves GPG. Si se elimina una clave pública, los commits firmados con la clave privada correspondiente dejarán de estar marcados como comprobados.

   {% endnote %}
