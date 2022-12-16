---
ms.openlocfilehash: 59e70683dad451b603d2d34286976bfaa8d1d9c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881058"
---
Jede Person kann ein öffentliches Repository forken und dann einen Pull Request übermitteln, um Änderungen an den {% data variables.product.prodname_actions %}-Workflows des Repositorys vorzuschlagen. Workflows von Forks haben zwar keinen Zugriff auf vertrauliche Daten wie Geheimnisse, können aber für die Verwalter störend sein, wenn sie zu missbräuchlichen Zwecken geändert werden.

Um dies zu verhindern, werden Workflows in Pull Requests an öffentliche Repositorys von einigen externen Mitwirkenden nicht automatisch ausgeführt, sondern müssen möglicherweise zuerst genehmigt werden. Standardmäßig ist bei allen erstmaligen Mitwirkenden eine Genehmigung zum Ausführen von Workflows erforderlich.

{% note %}

**Hinweis:** Workflows, die durch `pull_request_target`-Ereignisse ausgelöst wurden, werden im Kontext des Basisbranch ausgeführt. Da der Basisbranch als vertrauenswürdig betrachtet wird, werden die von diesen Ereignissen ausgelösten Workflows immer ausgeführt, unabhängig von den Genehmigungseinstellungen.

{% endnote %}
