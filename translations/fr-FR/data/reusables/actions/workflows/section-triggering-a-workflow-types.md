---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877052"
---
Utilisez `on.<event_name>.types` pour définir le type d’activité qui déclenchera une exécution de workflow. La plupart des événements GitHub sont déclenchés par plusieurs types d’activité.  Par exemple, le déclencheur `label` est déclenché lorsqu’une étiquette est `created`, `edited`ou `deleted`. Le mot clé `types` vous permet d’affiner l’activité qui provoque l’exécution du workflow. Lorsqu’un seul type d’activité déclenche un événement de webhook, le mot clé `types` n’est pas nécessaire.

Vous pouvez utiliser un tableau d’événements `types`. Pour plus d’informations sur chaque événement et leurs types d’activité, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows#available-events) ».

```yaml
on:
  label:
    types: [created, edited]
```
