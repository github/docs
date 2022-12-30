---
ms.openlocfilehash: e93dcf175f55f64e30517e500843e450f68a2323
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147704922"
---
Du benötigst ein Zugriffstoken, um Pakete zu veröffentlichen, zu installieren und zu löschen.

Du kannst ein persönliches Zugriffstoken (PAT) für die Authentifizierung bei {% data variables.product.prodname_registry %} oder bei der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API verwenden. Wenn du ein persönliches Zugriffstoken erstellst, kannst du dem Token je nach Bedarf verschiedene Bereiche zuweisen. Weitere Informationen über paketbezogene Bereiche für ein persönliches Zugriffstoken findest du unter [Informationen zu Berechtigungen für GitHub-Pakete](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

Um dich bei einer {% data variables.product.prodname_registry %}-Registrierung innerhalb eines {% data variables.product.prodname_actions %}-Workflows zu authentifizieren, kannst du Folgendes verwenden:
- `GITHUB_TOKEN`, um Pakete zu veröffentlichen, die mit dem Workflowrepository verbunden sind.
- Ein persönliches Zugriffstoken (diesem muss mindestens der Bereich `packages:read` zugeordnet sein), um Pakete zu installieren, die zu anderen privaten Repositorys gehören (auf die `GITHUB_TOKEN` nicht zugreifen kann).
