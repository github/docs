---
title: Squashen von Commits
intro: 'Du kannst mit {% data variables.product.prodname_desktop %} im Verlauf deines Branchs Commits squashen.'
versions:
  fpt: '*'
ms.openlocfilehash: fb8141710a99b52f1b9a93e1abc0429b5e29f116
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105340'
---
## Informationen zum Squashen eines Commits

Mit Squashing kannst du mehrere Commits im Branchverlauf zu einem einzigen Commit kombinieren. Das kann zur besseren Lesbarkeit und Verständlichkeit des Verlaufs deines Repositorys beitragen.

## Squashen eines Commits

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. Wähle in der Liste der Branches den Branch aus, der die Commits enthält, die du squashen möchtest.
{% data reusables.desktop.history-tab %}
4. Wähle die zu squashenden Commits aus und lege sie auf dem Commit ab, mit dem du sie kombinieren möchtest. Du kannst einen oder mehrere Commits auswählen. Wenn du mehrere Commits auswählen möchtest, verwende die Tasten <kbd>BEFEHL</kbd> oder <kbd>UMSCHALT</kbd>.
  ![Ziehen und Ablegen zum Squashen](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Ändere die Commitnachricht deines neuen Commits. Die Commitnachrichten der ausgewählten Commits, die du squashen möchtest, sind in den Feldern **Zusammenfassung** und **Beschreibung** bereits ausgefüllt.
6. Klicke auf **Commits squashen**.

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. Wähle in der Liste der Branches den Branch aus, der die Commits enthält, die du squashen möchtest.
{% data reusables.desktop.history-tab %}
4. Wähle die zu squashenden Commits aus und lege sie auf dem Commit ab, mit dem du sie kombinieren möchtest. Du kannst einen oder mehrere Commits auswählen. Wenn du mehrere Commits auswählen möchtest, verwende die Tasten <kbd>STRG</kbd> oder <kbd>UMSCHALT</kbd>.
  ![Ziehen und Ablegen zum Squashen](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Ändere die Commitnachricht deines neuen Commits. Die Commitnachrichten der ausgewählten Commits, die du squashen möchtest, sind in den Feldern **Zusammenfassung** und **Beschreibung** bereits ausgefüllt.
6. Klicke auf **Commits squashen**.

{% endwindows %}

## Fehlermeldungen beim Squashen von Commits

Wenn du Commits squashst, wird möglicherweise eine der folgenden Benachrichtigungen oder Fehlermeldungen angezeigt.

* Eine Benachrichtigung gibt an, dass die angeforderte Änderung am Branch einen erzwungenen Push erfordert, um den Remotebranch zu aktualisieren. Ein erzwungener Push ändert den Commitverlauf des Branchs und wirkt sich auf andere Personen aus, die in diesem Branch arbeiten.  Wähle **Squash beginnen** aus, um den Squash zu starten, und klicke dann auf **Pushursprung erzwingen**, um deine Änderungen zu pushen.

  ![Dialogfeld zum Erzwingen von Pushes beim Squashen](/assets/images/help/desktop/squash-force-push.png)

* Ein Fehler gibt an, dass der Squash nicht ausgeführt werden konnte, da die gesquashten Commits einen Mergecommit enthalten.

  ![Dialogfeld zum Neuanordnen von Mergecommits](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* In einer Benachrichtigung wird angezeigt, dass im aktuellen Branch noch nicht committete Änderungen vorhanden sind. Wähle **Änderungen stashen und weiter** aus, um die Änderungen zu speichern und fortzufahren, oder wähle **Schließen** aus, um die Nachricht zu verwerfen und die Änderungen zu committen. Wenn keine noch nicht committeten Änderungen mehr vorhanden sind, kannst du deine Commits squashen.

  ![Dialogfeld zum Squashen von Stashs](/assets/images/help/desktop/squash-stash-dialog.png)
