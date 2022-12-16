---
ms.openlocfilehash: ea162bdacad3d8e4a85c343eb9c3c08afd2b9056
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145102449"
---
Quand vous restaurez une mise à niveau, vous devez utiliser un fichier de package de mise à niveau avec l’extension *.pkg*. Les fichiers de package de patch à chaud avec l’extension *.hpkg* ne sont pas pris en charge.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

Un redémarrage est nécessaire après l’exécution de cette commande. La restauration n’affecte pas la partition de données, car les migrations ne sont pas exécutées sur les versions de patch.
