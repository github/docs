---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089275"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} für wiederverwendbare Workflows in öffentlichen {% ifversion ghes or ghec or ghae %}oder internen{% endif %} Repositorys.
* `./.github/workflows/{filename}` für wiederverwendbare Workflows im gleichen Repository.{% endif %}

`{ref}` kann ein SHA-Wert, ein Releasetag oder ein Branchname sein. Die Verwendung des Commit-SHA-Werts ist in Bezug auf Stabilität und Sicherheit am sichersten. Weitere Informationen findest du unter [Sicherheitshärtung für GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows). {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Wenn du die zweite Syntaxoption verwendest (ohne `{owner}/{repo}` und `@{ref}`), stammt der aufgerufene Workflow aus demselben Commit wieder aufrufende Workflow.{% endif %}
