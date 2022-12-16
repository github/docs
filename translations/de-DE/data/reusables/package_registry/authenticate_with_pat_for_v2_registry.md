---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192753"
---
Einige {% data variables.product.prodname_registry %}-Registrierungen unterstützen differenzierte Berechtigungen. Das bedeutet, dass du festlegen kannst, dass Pakete sich im Besitz eines Benutzers oder einer Organisation befinden oder mit einem Repository verknüpft sein dürfen. Die Liste mit Registrierungen, die differenzierte Berechtigungen unterstützen, findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

Wenn dein Workflow ein {% data variables.product.pat_generic %} zum Authentifizieren bei einer Registrierung verwendet, solltest du für Registrierungen, die differenzierte Berechtigungen unterstützen, deinen Workflow unbedingt so aktualisieren, dass das `GITHUB_TOKEN` verwendet wird.

Anleitungen zum Aktualisieren deiner Workflows, die sich mit einem {% data variables.product.pat_generic %} bei einer Registrierung authentifizieren, findest du unter [Upgrade eines Workflows mit Registrierungszugriff über ein {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token).

Weitere Informationen über das `GITHUB_TOKEN` findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

Weitere Informationen zu den Best Practices bei der Verwendung einer Registrierung in Actions findest du unter [Sicherheitshärtung für GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access).
