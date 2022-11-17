---
title: Affichage de l’activité de déploiement de votre dépôt
intro: Vous pouvez afficher des informations sur les déploiements pour votre dépôt entier ou une demande de tirage (pull request) spécifique.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132032'
---
{% note %}

**Remarque :** Le tableau de bord des déploiements est actuellement en version bêta et peut faire l’objet de modifications.

{% endnote %}

Les personnes ayant accès en lecture à un dépôt peuvent voir un aperçu de tous les déploiements actuels et un journal de l’activité de déploiement passée si le workflow de déploiement du dépôt est intégré à {% data variables.product.product_name %} via l’API Déploiements ou une application dans [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). Pour plus d’informations, consultez « [Déploiements](/rest/reference/repos#deployments) ».

Vous pouvez également voir les informations de déploiement sous l’onglet « Conversation » d’une demande de tirage (pull request).

## Affichage du tableau de bord des déploiements

{% data reusables.repositories.navigate-to-repo %}
2. À droite de la liste des fichiers, cliquez sur **Environnements**.
![Environnements à droite de la page du dépôt](/assets/images/help/repository/environments.png)

## Pour aller plus loin
 - « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) »
