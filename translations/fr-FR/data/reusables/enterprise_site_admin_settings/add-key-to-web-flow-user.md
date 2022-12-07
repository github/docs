---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147369248"
---
1. Exécutez la commande suivante, en remplaçant KEY-ID par votre ID de clé PGP.

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. Copiez votre clé PGP en commençant par `-----BEGIN PGP PUBLIC KEY BLOCK-----` et en terminant par `-----END PGP PUBLIC KEY BLOCK-----`.
1. Connectez-vous à {% data variables.product.prodname_ghe_server %} en tant qu’utilisateur `web-flow`.
1. Ajoutez la clé PGP publique au profil de l’utilisateur. Pour plus d’informations, consultez « [Ajout d’une clé GPG à votre compte {% data variables.product.prodname_dotcom %}](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account) ».

   {% note %}

   **Remarque :** ne supprimez pas les autres clés publiques de la liste des clés GPG. Si une clé publique est supprimée, les validations signées avec la clé privée correspondante ne seront plus marquées comme vérifiées.

   {% endnote %}
