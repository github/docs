---
ms.openlocfilehash: 371057b7fbe8e92b564e8729b11442bdbf2c1a56
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882795"
---
Wenn du die Option **Rebase und Merge** für einen Pull Request auf {% data variables.product.product_location %} auswählst, werden alle Commits aus dem Topic-Branch (oder Headbranch) ohne einen Merge-Commit einzeln auf dem Basisbranch hinzugefügt. Auf diese Weise ähnelt das Verhalten von „Rebase und Merge“ einem [Merge mit Vorlauf](https://git-scm.com/docs/git-merge#_fast_forward_merge), indem ein linearer Projektverlauf beibehalten wird. Ein Rebase erreicht dies jedoch durch erneutes Schreiben des Commitverlaufs auf dem Basisbranch mit neuen Commits.

Das Verhalten von „Rebase und Merge“ auf {% data variables.product.product_name %} weicht etwas von `git rebase` ab. „Rebase und Merge“ auf {% data variables.product.prodname_dotcom %} aktualisiert jederzeit die Informationen zum Committer und erstellt neue Commit-SHAs. Demgegenüber ändert `git rebase` außerhalb von {% data variables.product.prodname_dotcom %} nicht die Informationen zum Committer, wenn das Rebase zusätzlich zu einem Vorgängercommit erfolgt. Weitere Informationen zu `git rebase` findest du unter [git-rebase](https://git-scm.com/docs/git-rebase) in der Git-Dokumentation.

Zum Ausführen von „Rebase und Merge“ für Pull Requests musst du im Repository über [Schreibberechtigungen](/articles/repository-permission-levels-for-an-organization/) verfügen, und das Repository muss [Rebase und Merge zulassen](/articles/configuring-commit-rebasing-for-pull-requests/).

Eine visuelle Darstellung von `git rebase` findest du im [Kapitel „Git Branching – Rebasing“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Branching-Rebasing).
