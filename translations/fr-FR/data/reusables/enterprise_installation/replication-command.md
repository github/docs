---
ms.openlocfilehash: 0ee285efb8b386c47d2782151fdf6a2bb24589fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877124"
---
1. Pour démarrer la réplication des magasins de données, utilisez la commande `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Avertissement :** `ghe-repl-start` provoque une brève interruption sur le serveur principal, pendant laquelle les utilisateurs peuvent voir des erreurs de serveur interne. Pour fournir un message plus convivial, exécutez `ghe-maintenance -s` sur le nœud principal avant d’exécuter `ghe-repl-start` sur le nœud de réplica pour mettre l’appliance en mode maintenance. Une fois la réplication démarrée, désactivez le mode maintenance avec `ghe-maintenance -u`. La réplication Git ne progresse pas tant que le nœud principal est en mode maintenance.

    {% endwarning %}
