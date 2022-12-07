---
title: Cherrypicking eines Commits
intro: Du kannst einen bestimmten Commit in einem Branch auswählen und diesen in einen anderen Branch kopieren.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
ms.openlocfilehash: 6dad1615b9a8c224c3648be60759b5bb6ccf0d62
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090132'
---
## Informationen zum Git-Cherrypicking

Du kannst das Cherrypicking für einen Commit in einem Branch ausführen, um eine Kopie des Commits mit den gleichen Änderungen an einem anderen Branch zu erstellen. Wenn du Änderungen am falschen Branch committest oder dieselben Änderungen an einem anderen Branch vornehmen möchtest, kannst du den Commit auswählen, um die Änderungen auf einen andere Branch anzuwenden. Du kannst das Cherrypicking auch verwenden, um bestimmte Änderungen anzuwenden, bevor du bereit bist, einen Pull Request zu erstellen oder zusammenzuführen. Wenn du beispielsweise eine Fehlerkorrektur für einen Featurebranch ausführst, kannst du den Commit mit der Fehlerkorrektur für andere Branches deines Projekts auswählen.

Du kannst das Cherrypicking auch verwenden, wenn du mit einem Team zusammenarbeitest. Einige Projekte umfassen Beiträge von Cherrypicking-Commits. Weitere Informationen findest du unter [Verteiltes Git – Verwalten eines Projekts](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) in der Git-Dokumentation.

## Cherrypicking eines Commits

{% data reusables.desktop.current-branch-menu %}
2. Klicke in der Liste der Branches auf den Branch, der den Commit hat, den du zum Cherrypicking verwenden möchtest.
{% data reusables.desktop.history-tab %}
4. Ziehe den Commit, den für das Cherrypicking verwenden möchtest, auf das Menü {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** (Aktueller Branch) und lege den Commit auf dem Branch ab, auf den du den Commit kopieren möchtest.
  ![Ziehen eines Commits auf einen anderen Branch im Menü „Current Branch“ (Aktueller Branch)](/assets/images/help/desktop/cherry-picking.png)

## Weitere Informationsquellen
- [Git-Cherrypicking](https://git-scm.com/docs/git-cherry-pick) in der Git-Dokumentation
