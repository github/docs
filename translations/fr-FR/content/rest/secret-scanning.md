---
title: Analyse de secrets
intro: Utilisez l’API d’analyse des secrets pour récupérer et mettre à jour des alertes de secret à partir d’un dépôt.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880123'
---
{% data reusables.secret-scanning.api-beta %}

## À propos de l’API Secret scanning

L’API d’{% data variables.product.prodname_secret_scanning %} vous permet de :

- Activer ou désactiver {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} et la protection des poussées{% endif %} pour un dépôt. Pour plus d’informations, consultez « [Dépôts](/rest/repos/repos#update-a-repository) » et développez la section « Propriétés de l’objet `security_and_analysis` » dans la documentation de l’API REST.
- Récupérer et mettre à jour les alertes {% data variables.product.prodname_secret_scanning_GHAS %} d’un dépôt. Pour plus d’informations, consultez les sections ci-dessous.

Pour plus d’informations sur {% data variables.product.prodname_secret_scanning %}, consultez « [À propos de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning) ».
