---
title: Eine Workflowausführung löschen
intro: 'Du kannst eine Workflowausführung löschen, die bereits abgeschlossen wurde oder älter als zwei Wochen ist.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 54e494b2cff73650c0b9d5e46c8ce2772926831f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105191'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Verwende zum Löschen einer Workflowausführung das Dropdownmenü {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, und wähle **Delete workflow run** (Workflowausführung löschen) aus.

    ![Eine Workflowausführung löschen](/assets/images/help/settings/workflow-delete-run.png)
2. Überprüfe die Bestätigungsaufforderung, und klicke auf **Yes, permanently delete this workflow run** (Ja, diese Workflowausführung endgültig löschen).

    ![Löschbestätigung für Workflowausführung](/assets/images/help/settings/workflow-delete-run-confirmation.png)
