---
title: Neuanordnen von Commits
intro: 'Du kannst mit {% data variables.product.prodname_desktop %} im Verlauf deines Branchs Commits neu anordnen.'
versions:
  fpt: '*'
ms.openlocfilehash: 5f68af5f2798e6780a91515886130f2b3ca7e6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105343'
---
## Informationen zum Neuanordnen eines Commits

Durch die Neuanordnung kannst du den Commitverlauf ändern, um eine sinnvollere Abfolge von Commits bereitzustellen. {% data variables.product.prodname_desktop %} ermöglicht das Neuanordnen von Commits im Branchverlauf per Drag & Drop.

## Neuanordnen eines Commits

{% data reusables.desktop.current-branch-menu %}
2. Klicke in der Liste der Branches auf den Branch mit den Commits, die du neu anordnen möchtest.
{% data reusables.desktop.history-tab %}
4. Ziehe den Commit, den du neu anordnen möchtest, und lege ihn zwischen zwei angrenzenden Commits ab.
  ![Neuanordnen per Drag & Drop](/assets/images/help/desktop/reorder-drag-and-drop.png) Während die Anwendung die Commits neu anordnet, gibt das Dialogfeld **Neuanordnung wird ausgeführt** den Fortschritt der Änderung an.

## Fehlermeldungen beim Neuanordnen von Commits

Wenn du Commits neu anordnest, wird möglicherweise eine der folgenden Benachrichtigungen oder Fehlermeldungen angezeigt.

* Eine Benachrichtigung gibt an, dass die angeforderte Änderung am Branch einen erzwungenen Push erfordert, um den Remotebranch zu aktualisieren. Dies wird angezeigt, wenn die von dir neu angeordneten Commits zuvor in den Remotebranch gepusht wurden. Ein erzwungener Push ändert den Commitverlauf des Branchs und wirkt sich auf andere Personen aus, die in diesem Branch arbeiten.  Wähle **Neuanordnung beginnen** aus, um die Neuanordnung zu starten, und klicke dann auf **Pushursprung erzwingen**, um deine Änderungen zu pushen.

  ![Dialogfeld zum Erzwingen von Pushes beim Neuanordnen](/assets/images/help/desktop/reorder-force-push-dialog.png)

* Ein Fehler gibt an, dass die Neuanordnung nicht ausgeführt werden konnte, da die neu angeordneten Commits einen Mergecommit enthalten.

  ![Dialogfeld zum Neuanordnen von Mergecommits](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* In einer Benachrichtigung wird angezeigt, dass im aktuellen Branch noch nicht committete Änderungen vorhanden sind. Wähle **Änderungen stashen und weiter** aus, um die Änderungen zu speichern und fortzufahren, oder wähle **Schließen** aus, um die Nachricht zu verwerfen und die Änderungen zu committen. Wenn keine noch nicht committeten Änderungen mehr vorhanden sind, kannst du deine Commits neu anordnen.

  ![Dialogfeld zum Neuanordnen von Stashs](/assets/images/help/desktop/reorder-stash-dialog.png)

* Eine Meldung gibt an, dass Mergekonflikte vorhanden sind, die du beheben musst, bevor die Anwendung das Neuanordnen von Commits in deinem Branch fortsetzen kann.
    1. Klicke auf **Konflikte anzeigen**, um die Konflikte anzuzeigen.
      ![Meldung zum Lösen von Konflikten beim Neuanordnen](/assets/images/help/desktop/reorder-resolve-conflicts.png) {% data reusables.desktop.resolve-merge-conflicts %}
   3. Wenn alle Konflikte gelöst sind, kannst du deine Commits neu anordnen.
  
