---
ms.openlocfilehash: 8adf896da9e4748cfaa5d0d0562172af14264f97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145133495"
---
Lorsque vous activez les mises à jour de version pour la première fois, vous pouvez avoir de nombreuses dépendances obsolètes et certaines peuvent remonter à de nombreuses versions avant la dernière version. {% data variables.product.prodname_dependabot %} recherche les dépendances obsolètes dès qu’il est activé. Vous pouvez voir de nouvelles demandes de tirage pour les mises à jour de version dans les minutes qui suivent l’ajout du fichier de configuration, en fonction du nombre de fichiers manifeste pour lesquels vous configurez les mises à jour. {% data variables.product.prodname_dependabot %} exécute également une mise à jour sur les modifications suivantes apportées au fichier de configuration.

{% data variables.product.prodname_dependabot %} peut également créer des demandes de tirage lorsque vous modifiez un fichier manifeste une fois qu’une mise à jour a échoué. Cela est dû au fait que les modifications apportées à un manifeste, telles que la suppression de la dépendance qui a provoqué l’échec de la mise à jour, peuvent entraîner la réussite de la mise à jour nouvellement déclenchée.

Pour que les demandes de tirage restent faciles à gérer et à réviser, {% data variables.product.prodname_dependabot %} déclenche un maximum de cinq demandes de tirage pour commencer à mettre les dépendances à niveau vers la version la plus récente. Si vous fusionnez certaines de ces premières demandes de tirage avant la prochaine mise à jour planifiée, les demandes de tirage restantes seront ouvertes au cours de la prochaine mise à jour, jusqu’à ce maximum. Vous pouvez modifier le nombre maximal de demandes de tirage ouvertes en définissant l’[option de configuration `open-pull-requests-limit`](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit).
