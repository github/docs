---
title: Autorisations GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: 'L’API d’autorisations {% data variables.product.prodname_actions %} vous permet de définir des autorisations pour les entreprises, organisations et dépôts autorisés à exécuter {% data variables.product.prodname_actions %}, ainsi que les actions {% ifversion actions-workflow-policy %} et les workflows réutilisables{% endif %} pouvant s’exécuter.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888597'
---
## À propos de l’API Autorisations

L’API d’autorisations {% data variables.product.prodname_actions %} vous permet de définir des autorisations pour les entreprises, organisations et dépôts autorisés à exécuter {% data variables.product.prodname_actions %}, ainsi que les actions {% ifversion actions-workflow-policy %} et les workflows réutilisables{% endif %} pouvant s’exécuter.{% ifversion fpt or ghec or ghes %} Pour plus d’informations, consultez « [Limites d’utilisation, facturation et administration](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization) ».{% endif %}
