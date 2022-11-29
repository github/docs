---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108468"
---
Vous pouvez utiliser le script de configuration pour ajouter automatiquement un nouvel exécuteur à un groupe. Par exemple, cette commande inscrit un nouvel exécuteur et utilise le paramètre `--runnergroup` pour l’ajouter à un groupe nommé `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

La commande échoue si le groupe d’exécuteurs n’existe pas :

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
