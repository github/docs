---
title: GitHub Marketplace
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: acbdb60fc93898dd7c56c21f60e12fb9dbadb31d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131747'
---
## À propos de l’API {% data variables.product.prodname_marketplace %}

Pour plus d’informations sur {% data variables.product.prodname_marketplace %}, consultez « [Place de marché GitHub](/marketplace/) ».

L’API {% data variables.product.prodname_marketplace %} vous permet de voir quels clients utilisent un plan tarifaire, voir les achats d’un client et voir si un compte dispose d’un abonnement actif.

### Test avec des points de terminaison nommés

Cette API inclut des points de terminaison qui vous permettent de [tester votre {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) avec des **données nommées**. Les données nommées sont codées en dur ; ce sont de fausses données qui ne changeront pas en fonction des abonnements réels.

Pour tester avec des données nommées, utilisez un point de terminaison appelé à la place de son équivalent de production. Cela vous permet de tester si la logique d’API réussit avant de répertorier des {% data variables.product.prodname_github_apps %} sur {% data variables.product.prodname_marketplace %}.

Veillez à remplacer les points de terminaison appelés par des points de terminaison de production avant de déployer votre {% data variables.product.prodname_github_app %}.
