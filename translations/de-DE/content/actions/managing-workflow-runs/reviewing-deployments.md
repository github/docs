---
title: Überprüfen von Bereitstellungen
intro: 'Du kannst Aufträge genehmigen oder ablehnen, die auf die Überprüfung warten.'
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6a01d89c0ad5355bd5e6774b1bdf5f19dd471df2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718101'
---
## Informationen zu erforderlichen Überprüfungen in Workflows

Aufträge, die auf eine Umgebung verweisen, die mit erforderlichen Reviewern konfiguriert wurde, warten auf eine Genehmigung, bevor sie gestartet werden. Während ein Auftrag auf die Genehmigung wartet, hat er den Status „Warten“. Wenn ein Auftrag innerhalb von 30 Tagen nicht genehmigt wird, wird die Workflowausführung automatisch abgebrochen.

Weitere Informationen zu Umgebungen und erforderlichen Genehmigungen findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/using-environments-for-deployment). Informationen zum Überprüfen von Bereitstellungen mit der REST-API findest du unter [Workflowausführungen](/rest/reference/actions#workflow-runs).

## Genehmigen oder Ablehnen eines Auftrags

1. Navigiere zu der Workflowausführung, die eine Überprüfung erfordert. Weitere Informationen zum Navigieren zu einer Workflowausführung findest du unter [Anzeigen des Ausführungsverlaufs eines Workflows](/actions/managing-workflow-runs/viewing-workflow-run-history).
2. Klicke auf **Bereitstellungen überprüfen**. 
   ![Überprüfen von Bereitstellungen](/assets/images/actions-review-deployments.png).
3. Wähle die Auftragsumgebung(en) aus, die genehmigt oder abgelehnt werden soll(en). Hinterlasse optional einen Kommentar.
   ![Genehmigen von Bereitstellungen](/assets/images/actions-approve-deployments.png)
4. Genehmigen oder ablehnen:
   - Um den Auftrag zu genehmigen, klicke auf **Genehmigen und bereitstellen**. Sobald ein Auftrag genehmigt wurde (und alle anderen Umgebungsschutzregeln eingehalten wurden), wird der Auftrag fortgesetzt. An diesem Punkt kann der Auftrag auf alle Geheimnisse zugreifen, die in der Umgebung gespeichert sind.
   - Klicke auf **Ablehnen**, um den Auftrag abzulehnen. Wenn ein Auftrag abgelehnt wird, tritt beim Workflow ein Fehler auf.
