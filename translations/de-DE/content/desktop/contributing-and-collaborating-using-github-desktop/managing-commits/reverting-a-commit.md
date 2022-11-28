---
title: Einen Commit rückgängig machen
intro: 'Du kannst einen bestimmten Commit zurücksetzen, um dessen Änderungen aus deinem Branch zu entfernen.'
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
ms.openlocfilehash: f6cf6f120beff99bdb1c8bfd7868bb157e68d5dd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090126'
---
Wenn du einen vorherigen Commit rückgängig machst, ist das Rückgängigmachen ebenfalls ein Commit. Der ursprüngliche Commit verbleibt ebenfalls im Verlauf des Repositorys.

{% tip %}

**Tipp**: Wenn du mehrere Commits rückgängig machst, empfiehlt es sich, dabei in der Reihenfolge vom neuesten zum ältesten vorzugehen. Wenn du Commits in einer anderen Reihenfolge rückgängig machst, werden möglicherweise Merge-Konflikte angezeigt.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![ Die Option „Wiederherstellen“ oberhalb der Diff-Ansicht](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![ Die Option „Wiederherstellen“ oberhalb der Diff-Ansicht](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
