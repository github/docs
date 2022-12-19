---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068214"
---
Du kannst `permissions` verwenden, um die Standardberechtigungen zu ändern, die dem GitHub-Token (`GITHUB_TOKEN`) gewährt werden. So kannst du Zugriff nach Bedarf hinzufügen oder entfernen, um nur den mindestens erforderlichen Zugriff zu gewähren. Weitere Informationen findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token).

`permissions` kann entweder als Schlüssel auf oberster Ebene verwendet werden, um für alle Aufträge im Workflow zu gelten, oder innerhalb bestimmter Aufträge. Wenn du den Schlüssel `permissions` innerhalb eines bestimmten Auftrags hinzufügst, werden die von dir angegebenen Zugriffsrechte auf alle Aktionen und Ausführungsbefehle innerhalb dieses Auftrags angewendet, die das GitHub-Token (`GITHUB_TOKEN`) verwenden.  Weitere Informationen findest du unter [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### Beispiel: Zuweisen von Berechtigungen zu GITHUB_TOKEN

In diesem Beispiel wird gezeigt, wie Berechtigungen für das GitHub-Token (`GITHUB_TOKEN`) festgelegt werden, die für alle Aufträge im Workflow gelten. Bei allen Berechtigungen handelt es sich um die Gewährung von Lesezugriff.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
