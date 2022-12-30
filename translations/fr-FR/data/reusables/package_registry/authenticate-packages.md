---
ms.openlocfilehash: e93dcf175f55f64e30517e500843e450f68a2323
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147704921"
---
Vous avez besoin d’un jeton d’accès pour publier, installer et supprimer des packages.

Vous pouvez utiliser un jeton d’accès personnel (PAT) pour vous authentifier sur {% data variables.product.prodname_registry %} ou l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Quand vous créez un jeton d’accès personnel, vous pouvez l’attribuer à différentes étendues en fonction de vos besoins. Pour plus d’informations sur les étendues liées aux packages pour un jeton PAT, consultez « [À propos des autorisations de GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries) ».

Pour vous authentifier sur un registre {% data variables.product.prodname_registry %} dans un workflow {% data variables.product.prodname_actions %}, vous pouvez utiliser :
- `GITHUB_TOKEN` pour publier des packages associés au dépôt du workflow.
- Un PAT avec au moins l’étendue `packages:read` pour installer des packages associés à d’autres dépôts privés (auxquels `GITHUB_TOKEN` ne peut pas accéder).
