---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163825"
---
Betreuer mit Schreibzugriff auf ein Repository können mithilfe des folgenden Verfahrens Workflows für Pull Requests von Mitwirkenden überprüfen und ausführen, die eine Genehmigung erfordern.

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. Überprüfe die vorgeschlagenen Änderungen im Pull Request, und stelle sicher, dass dir die Ausführung deiner Workflows im Pull Request-Branch zusagt. Du solltest besonders auf vorgeschlagene Änderungen im `.github/workflows/`-Verzeichnis achten, die sich auf Workflowdateien auswirken.
1. Wenn du mit der Ausführung von Workflows im Pull Request-Branch zufrieden bist, kehre zur Registerkarte {% octicon "comment-discussion" aria-label="The discussion icon" %} **Unterhaltung** zurück, und klicke unter „Auf Genehmigung wartende Workflows“ auf **Genehmigen und ausführen**.

   ![Genehmigen und Ausführen von Workflows](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)