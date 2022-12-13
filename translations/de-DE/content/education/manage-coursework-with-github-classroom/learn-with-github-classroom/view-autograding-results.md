---
title: Anzeigen der automatischen Bewertung von Ergebnissen
intro: Du kannst die Ergebnisse der automatischen Bewertung für deine Zuordnung innerhalb des Repositorys anzeigen.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea4de9b0122e39f5ecb4d960d4f0ee8c94ba2ee5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106371'
---
## Informationen zur automatischen Bewertung

Deine Lehrkraft kann Tests konfigurieren, die deine Arbeit automatisch überprüfen, wenn du ein Zuweisungsrepository auf {% data variables.product.product_location %} pushst.

Wenn du ein Kursteilnehmer bist und dein Kursleiter die automatische Bewertung für deine Zuweisung in {% data variables.product.prodname_classroom %} konfiguriert hat, findest du die automatische Bewertung der Testergebnisse im gesamten Zuweisungsrepository. Wenn alle Tests für einen Commit erfolgreich sind, wird ein grünes Häkchen angezeigt. Wenn Tests für einen Commit fehlschlagen, wird ein rotes X angezeigt. Du kannst detaillierte Protokolle aufrufen, indem du auf das grüne Häkchen oder das rote X anklickst.

## Anzeigen der automatischen Bewertung der Ergebnisse für ein Zuweisungsrepository

{% data variables.product.prodname_classroom %} verwendet {% data variables.product.prodname_actions %} zum Ausführen von automatischen Bewertungen der Tests. Weitere Informationen zum Anzeigen der Protokolle für die automatische Bewertung von Tests findest du unter „[Verwenden von Protokollen für die Workflowausführung](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)“.

Auf der Registerkarte **Aktionen** wird der vollständige Verlauf der Testläufe angezeigt.

![Registerkarte „Aktionen“ mit ausgewählter Option „Alle Workflows“](/assets/images/help/classroom/autograding-actions-tab.png)

Du kannst auf einen bestimmten Testlauf klicken, um die Protokollausgabe zu überprüfen, z. B. Kompilierungsfehler und Testfehler.

![Die Testergebnisse im „{% data variables.product.prodname_classroom %}-Workflow für die automatische Bewertung“ werden in {% data variables.product.prodname_actions %} protokolliert. ](/assets/images/help/classroom/autograding-actions-logs.png)

## Weitere Informationsquellen

- „[Informationen zu Statuschecks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)“
