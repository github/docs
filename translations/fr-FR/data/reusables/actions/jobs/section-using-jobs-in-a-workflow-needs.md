---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145883576"
---
Utilisez `jobs.<job_id>.needs` pour identifier les travaux à accomplir avant l’exécution de ce travail. Il peut s’agir d’une chaîne ou d’un tableau de chaînes. En cas d’échec d’un travail, tous les travaux qui besoin de celui-ci sont ignorés, sauf s’ils utilisent une expression conditionnelle entraînant la poursuite du travail. Si une exécution contient une série de travaux qui ont besoin l’un de l’autre, une défaillance s’applique à tous les travaux de la chaîne de dépendance à partir du point de défaillance.

#### Exemple : Exigence de réussite de travaux dépendants 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

Dans cet exemple, `job1` doit être correctement accompli avant que `job2` commence, et `job3` attend que `job1` et `job2` soient accomplis.

Les travaux dans cet exemple s’exécutent séquentiellement :

1. `job1`
2. `job2`
3. `job3`

#### Exemple : Non-exigence de réussite de travaux dépendants

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

Dans cet exemple, `job3` utilise l’expression conditionnelle `always()` afin de toujours s’exécuter après que `job1` et `job2` ont été effectués avec ou sans succès. Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions#status-check-functions) ».
