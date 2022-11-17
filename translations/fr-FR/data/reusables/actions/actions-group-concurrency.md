---
ms.openlocfilehash: a0c8b24bacdd41e32d9b8bdd0d8850e7a6ada557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103970"
---
Quand un travail ou un workflow simultané est mis en file d’attente, si un autre travail ou workflow utilisant le même groupe d’accès concurrentiel dans le dépôt est en cours d’exécution, le travail ou le workflow en file d’attente a la valeur `pending`. Tout travail ou workflow en attente dans le groupe d’accès concurrentiel est annulé. Pour annuler également un travail ou un workflow en cours d’exécution dans le même groupe d’accès concurrentiel, spécifiez `cancel-in-progress: true`.

### Exemples : Utilisation de la concurrence et du comportement par défaut

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

### Exemple : Utilisation de la concurrence pour annuler un travail ou une exécution en cours

{% raw %}
```yaml
concurrency: 
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### Exemple : Utilisation d’une valeur de secours

Si vous créez le nom de groupe avec une propriété définie uniquement pour des événements spécifiques, vous pouvez utiliser une valeur de secours. Par exemple, `github.head_ref` est défini uniquement pour les événements `pull_request`. Si votre workflow répond à d’autres événements en plus des événements `pull_request`, vous devez fournir une valeur de secours pour éviter une erreur de syntaxe. Le groupe d’accès concurrentiel suivant annule les travaux ou les exécutions en cours pour les événements `pull_request` uniquement. Si `github.head_ref` n’est pas défini, le groupe d’accès concurrent utilise l’ID d’exécution, qui offre la garantie d’être à la fois unique et défini pour l’exécution.

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### Exemple : Annuler uniquement les travaux ou les exécutions en cours pour le workflow actuel

 Si vous avez plusieurs workflows dans le même dépôt, les noms de groupes d’accès concurrentiel doivent être uniques au sein de tous les workflows pour éviter l’annulation de travaux ou d’exécutions en cours à partir d’autres workflows. Sinon, tout travail en cours ou en attente est annulé, quel que soit le workflow.

Pour annuler uniquement les exécutions en cours du même workflow, vous pouvez utiliser la propriété `github.workflow` afin de créer le groupe d’accès concurrentiel :

{% raw %}
```yaml
concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

