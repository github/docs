---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113865"
---
Wenn dein Workflow ein {% data variables.product.pat_generic %} zum Authentifizieren bei einer Registrierung verwendet, solltest du deinen Workflow unbedingt so aktualisieren, dass das `GITHUB_TOKEN` verwendet wird.

{% ifversion fpt or ghec %}Anleitungen zum Aktualisieren deiner Workflows, die sich mit einem {% data variables.product.pat_generic %} bei einer Registrierung authentifizieren, findest du unter [Upgrade eines Workflows mit Registrierungszugriff über ein {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token).{% endif %}

Weitere Informationen über das `GITHUB_TOKEN` findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

Weitere Informationen zu den Best Practices bei der Verwendung einer Registrierung in Actions findest du unter [Sicherheitshärtung für GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access).
