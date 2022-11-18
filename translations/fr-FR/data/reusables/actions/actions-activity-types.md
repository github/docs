---
ms.openlocfilehash: 03c7480afe114a1f9fa676f6872be9081289295a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146688932"
---
Certains événements ont des types d’activités qui vous donnent davantage de contrôle sur le moment où votre workflow devrait s’exécuter. Utilisez `on.<event_name>.types` pour définir le type d’activité d’événement qui déclenchera l’exécution d’un workflow.

Par exemple, l’événement `issue_comment` a les types d’activité `created`, `edited` et `deleted`. Si votre worflow se déclenche sur l’événement `label`, il s’exécute chaque fois qu’une étiquette est créée, modifiée ou supprimée. Si vous spécifiez le type d’activité `created` de l’événement `label`, votre workflow s’exécute quand une étiquette est créée, mais pas quand une étiquette est modifiée ou supprimée.

```yaml
on:
  label:
    types:
      - created
```

Si vous spécifiez plusieurs types d’activités, un seul de ceux-ci doit se produire pour déclencher votre workflow. Si plusieurs types d’activité d’événement déclencheur pour votre workflow se produisent simultanément, plusieurs exécutions de workflow seront déclenchées. Par exemple, le workflow suivant se déclenche quand un problème est ouvert ou étiqueté. Si un problème avec deux étiquettes est ouvert, trois exécutions de workflow démarrent : une pour l’événement d’ouverture du problème, et deux pour les deux événements étiquetés du problème.

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

Pour plus d’informations sur chaque événement et leurs types d’activité, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows) ».
