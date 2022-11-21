---
ms.openlocfilehash: b4949218acc89828772bf2bea3998dfde3a10e95
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079962"
---
Das Branch- oder Tag-Ref, das den Workflow-Lauf ausgelöst hat. Bei Workflows, die durch `push` ausgelöst wurden, ist dies das Branch- oder Tag-Ref, das gepusht wurde. Bei Workflows, die von `pull_request` ausgelöst werden, ist dies der Branch für das Mergen des Pull Requests. Bei Workflows, die von `release` ausgelöst werden, ist dies das erstellte Releasetag. Bei anderen Triggern handelt es sich um das Branch- oder Tag-Ref, das die Workflowausführung ausgelöst hat. Es wird nur festgelegt, wenn für den Ereignistyp ein Branch oder ein Tag verfügbar ist. Das Ref ist vollständig gebildet, d.h. für Branches ist das Format `refs/heads/<branch_name>`, für Pull Requests `refs/pull/<pr_number>/merge` und für Tags `refs/tags/<tag_name>`. Beispiel: `refs/heads/feature-branch-1`.
