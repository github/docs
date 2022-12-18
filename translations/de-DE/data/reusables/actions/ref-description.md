---
ms.openlocfilehash: 298bcacbb02a443ae929ddcd48d9d9cd4bebd41a
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179612"
---
Das vollständig geformte Ref des Branch- oder Tagnamens, der die Workflowausführung ausgelöst hat. Bei Workflows, die durch `push` ausgelöst wurden, ist dies das Branch- oder Tag-Ref, das gepusht wurde. Bei Workflows, die von `pull_request` ausgelöst werden, ist dies der Branch für das Mergen des Pull Requests. Bei Workflows, die von `release` ausgelöst werden, ist dies das erstellte Releasetag. Bei anderen Triggern handelt es sich um das Branch- oder Tag-Ref, das die Workflowausführung ausgelöst hat. Es wird nur festgelegt, wenn für den Ereignistyp ein Branch oder ein Tag verfügbar ist. Das Ref ist vollständig gebildet, d.h. für Branches ist das Format `refs/heads/<branch_name>`, für Pull Requests `refs/pull/<pr_number>/merge` und für Tags `refs/tags/<tag_name>`. Beispiel: `refs/heads/feature-branch-1`.