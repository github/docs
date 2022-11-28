---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089500"
---
Du kannst für einen spezifischen Auftrag `jobs.<job_id>.permissions` verwenden, um die Standardberechtigungen zu ändern, die dem`GITHUB_TOKEN` gewährt werden, und können so den Zugriff nach Bedarf hinzufügen oder entfernen, um nur den erforderlich Mindestzugriff zu gewähren. Weitere Informationen findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token).

Wenn du die Berechtigung in einer Auftragsdefinition angibst, kannst du bei Bedarf einen anderen Satz von Berechtigungen für die `GITHUB_TOKEN` für jeden Auftrag konfigurieren. Alternativ kannst du die Berechtigungen für alle Aufträge im Workflow angeben. Informationen zum Definieren von Berechtigungen auf Workflow-Ebene findest du unter [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### Beispiel: Festlegen von Berechtigungen für einen bestimmten Auftrag

In diesem Beispiel werden Berechtigungen angezeigt, die für den `GITHUB_TOKEN` eingestellt werden, der nur für den Auftrag namens `stale` angewendet werden. Der Schreibzugriff wird für die `issues`- und `pull-requests`-Bereiche gewährt. Alle anderen Bereiche haben keinen Zugriff.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
