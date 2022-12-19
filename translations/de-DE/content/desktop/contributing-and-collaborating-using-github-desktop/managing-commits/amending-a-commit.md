---
title: Ändern eines Commits
intro: 'Du kannst mit {% data variables.product.prodname_desktop %} deinen letzten Commit ändern.'
versions:
  fpt: '*'
ms.openlocfilehash: 8d92d5f755df662c4948196cf9f84b3227ec0067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105347'
---
## Informationen zum Ändern eines Commits

Durch das Ändern eines Commits kannst du den letzten Commit bearbeiten, den du in deinem aktuellen Branch durchgeführt hast. Das kann nützlich sein, wenn du die Commitnachricht bearbeiten musst, oder wenn du vergessen hast, Änderungen in den Commit aufzunehmen.

Du kannst einen Commit so lange ändern, bis du ihn an das Remoterepository pushst. Nachdem du einen Commit gepusht hast, wird die Option zur Änderung des Commits in {% data variables.product.prodname_desktop %} deaktiviert. Wenn du einen Commit änderst, ersetzt du den vorherigen Commit durch einen neuen Commit in deinem aktuellen Branch. Das Ändern eines Commits, der in das Remoterepository gepusht wurde, könnte für Verwirrung bei anderen Projektbeteiligten sorgen, die mit dem Repository arbeiten.

## Ändern eines Commits

{% data reusables.desktop.history-tab %}
2. Klicke mit der rechten Maustaste auf den letzten Commit, und wähle **Commit ändern** aus.
  ![Kontextmenü „Commit ändern“](/assets/images/help/desktop/amend-commit-context-menu.png)
3. Klicke auf das Feld **Zusammenfassung**, um die Commitnachricht zu ändern. Optional kannst du im Feld **Beschreibung** Informationen zum Commit ändern oder hinzufügen.
4. Wähle alle Änderungen aus, die bisher nicht committet wurden und die du dem Commit hinzufügen möchtest. Weitere Informationen findest du unter [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit).
5. Wenn du deine Änderungen fertig gestellt hast, klicke auf **Letzten Commit ändern**.
  ![Übersicht: Ändern des letzten Commits](/assets/images/help/desktop/amend-last-commit-overview.png)
