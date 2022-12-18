---
ms.openlocfilehash: c7eea7975ef49a5a6e3deed2ade3cb6bb5543ac0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105859"
---
Wenn du die Option **Squashmerge** in einem Pull Request auf {% data variables.product.product_location %} auswählst, werden die Commits des Pull Requests in einem einzigen Commit zusammengefasst. Anstatt dass alle einzelnen Commits eines Mitarbeiters aus einem Themen-Branch angezeigt werden, werden die Commits in einem Commit kombiniert und in den Standardbranch zusammengeführt. Pull Request mit so zusammengefassten Commits werden mithilfe der [Vorlaufoption](https://git-scm.com/docs/git-merge#_fast_forward_merge) gemergt.

Zum Squashmergen von Pull Requests musst du über [Schreibberechtigungen](/articles/repository-permission-levels-for-an-organization/) im Repository verfügen, und das Repository muss das [Squashmergen zulassen](/articles/configuring-commit-squashing-for-pull-requests/).

![Commit-Squashing-Diagramm](/assets/images/help/pull_requests/commit-squashing-diagram.png)

Mittels Squash und Merge kannst du einen optimierteren Git-Verlauf in deinem Repository erstellen. In Arbeit befindliche Commits sind hilfreich, wenn du auf einem Feature-Branch arbeitest, sie müssen aber nicht unbedingt im Git-Verlauf beibehalten werden. Wenn du diese Commits während dem Merge zum Standardbranch in einen Commit zusammenführst (squashen), kannst du die ursprünglichen Änderungen in einem leeren Git-Verlauf beibehalten.
