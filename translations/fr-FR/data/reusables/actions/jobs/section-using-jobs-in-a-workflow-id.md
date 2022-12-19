---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103709"
---
Utilisez `jobs.<job_id>` pour attribuer un identificateur unique à votre travail. La clé `job_id` est une chaîne et sa valeur est une carte des données de configuration du travail. Vous devez remplacer `<job_id>` par une chaîne propre à l’objet `jobs`. `<job_id>` doit commencer par une lettre ou par `_`, et contenir uniquement des caractères alphanumériques, des `-` ou des `_`.

#### Exemple : Création de travaux

Dans cet exemple, deux travaux ont été créés, et leurs valeurs `job_id` sont `my_first_job` et `my_second_job`.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
