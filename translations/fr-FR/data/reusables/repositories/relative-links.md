---
ms.openlocfilehash: 20b17f568debf8a418827882dd6d1cc9815445a0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146171860"
---
Vous pouvez définir des liens et des chemins d’image relatifs dans vos fichiers affichés pour aider les lecteurs à accéder à d’autres fichiers de votre dépôt.

Un lien relatif est relatif par rapport au fichier actuel. Par exemple, si vous avez un fichier README à la racine de votre dépôt et que vous avez un autre fichier dans _docs/CONTRIBUTING.md_, le lien relatif vers _CONTRIBUTING.md_ dans votre fichier README peut ressembler à ceci :

```
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %} transforme automatiquement votre lien ou votre chemin d’image relatif en fonction de la branche où vous vous trouvez, pour que le lien ou le chemin fonctionne toujours. Le chemin du lien sera relatif au fichier actif. Les liens commençant par `/` seront relatifs à la racine du dépôt. Vous pouvez utiliser tous les opérandes de lien relatif, comme `./` et `../`.

Les liens relatifs sont plus pratiques pour les utilisateurs qui clonent votre dépôt. Les liens absolus peuvent ne pas fonctionner dans les clones de votre dépôt. Nous vous recommandons d’utiliser des liens relatifs pour référencer d’autres fichiers au sein de votre dépôt.
