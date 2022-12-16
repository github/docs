---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145107596"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

Verwende zum Authentifizieren bei der {% data variables.product.prodname_container_registry %} innerhalb eines {% data variables.product.prodname_actions %}-Workflows das `GITHUB_TOKEN` für beste Sicherheit und Erfahrung. Wenn dein Workflow ein persönliches Zugriffstoken (Personal Access Token, PAT) zum Authentifizieren bei `{% data reusables.package_registry.container-registry-hostname %}` verwendet, solltest du deinen Workflow unbedingt so aktualisieren, dass der das `GITHUB_TOKEN` verwendet.

{% ifversion fpt or ghec %}Anleitungen zum Aktualisieren deiner Workflows, die sich mit einem persönlichen Zugriffstoken bei `{% data reusables.package_registry.container-registry-hostname %}` authentifizieren, findest du unter [Upgrade eines Workflows, der auf `ghcr.io` zugreift](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio).{% endif %}

Weitere Informationen über das `GITHUB_TOKEN` findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

Wenn du die {% data variables.product.prodname_container_registry %} in Aktionen verwendest, befolge unsere bewährten Sicherheitsmethoden unter [Sicherheitshärtung für GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access).

{% endif %}
