---
ms.openlocfilehash: ec6ab3ed5541819ee7578b34ce61fc11de31b51f
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120916"
---

{% ifversion target-runner-groups %}{% ifversion ghec or ghae or ghes %}
## Verwenden eindeutiger Namen für Runnergruppen

{% data variables.product.prodname_actions %} setzt voraus, dass Runnergruppennamen auf Organisationsebene eindeutig sein müssen. Das bedeutet, dass eine Organisation nicht mehr in der Lage ist, eine Runnergruppe mit demselben Namen wie eine im Unternehmen zu erstellen. Darüber hinaus wird Benutzern ein Warnbanner für alle Runnergruppen angezeigt, die denselben Namen wie eine Gruppe im Unternehmen haben. Die Warnung enthält die Aufforderung, die Organisationsgruppe umzubenennen.

Um Mehrdeutigkeiten zu vermeiden, schlägt ein Workflow fehl, wenn doppelte Runnergruppen in der Organisation und im Unternehmen vorhanden sind. Um dies zu beheben, kannst du entweder eine deiner Runnergruppen in der Organisation oder im Unternehmen umbenennen oder deine Workflowdatei aktualisieren, um dem Namen der Runnergruppe ein Präfix hinzuzufügen:

- `org/` oder `organization/`
- `ent/` oder `enterprise/`

### Beispiel: Verwenden von Präfixen zum Unterscheiden von Runnergruppen

Wenn du beispielsweise eine Runnergruppe mit dem Namen `my-group` in der Organisation und eine andere Gruppe mit dem Namen `my-group` im Unternehmen hast, kannst du deine Workflowdatei aktualisieren, sodass `org/my-group` oder `ent/my-group` verwendet wird, um zwischen den beiden Gruppen zu unterscheiden.

Verwenden von `org/`:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

Verwenden von `ent/`:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```

{% endif %}

{% endif %}
