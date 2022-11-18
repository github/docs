---
title: Automatisation des formulaires de mise en production avec des paramètres de requête
intro: 'Pour créer rapidement des mises en production en remplissant automatiquement le nouveau formulaire de mise en production avec des informations personnalisées, vous pouvez ajouter des paramètres de requête à l’URL de la page du formulaire de mise en production.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/releasing-projects-on-github/automation-for-release-forms-with-query-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automate release forms
ms.openlocfilehash: 75c7fe4b79a6103060151742f1277861f23785c4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145193562'
---
Les paramètres de requête sont des parties facultatives d’une URL que vous pouvez personnaliser pour partager un affichage de page web spécifique, comme des résultats de filtre de recherche, un modèle de problème ou la page de formulaire de mise en production sur {% data variables.product.prodname_dotcom %}. Pour créer vos propres paramètres de requête, vous devez faire correspondre la paire clé-valeur.

Vous devez disposer des autorisations appropriées pour toute action pour utiliser le paramètre de requête équivalent. Par exemple, vous devez avoir l’autorisation de créer des mises en production pour pré-remplir le formulaire de mise en production. Pour plus d’informations, consultez « [Gestion des mises en production dans un dépôt](/github/administering-a-repository/managing-releases-in-a-repository) ».

Si vous créez une URL non valide à l’aide de paramètres de requête, ou si vous n’avez pas les autorisations appropriées, l’URL renvoie une page d’erreur 404.  

## Paramètres de requête pris en charge

Paramètre de requête. | Exemple
---  | ---
`tag` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` crée une mise en production basée sur une étiquette nommée « v1.0.1 ».
`target` | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` crée une mise en production basée sur la dernière validation pour la branche « release-1.0.1 ».
`title` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` crée une mise en production nommée « octo-1.0.1 » basée sur une étiquette nommée « v1.0.1 ».
`body` | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` crée une mise en production avec la description « Ajoute la prise en charge de widget » dans le corps de la mise en production.
`prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` crée une mise en production qui sera identifiée comme non prête pour la production.

## Pour aller plus loin

- « [Création d’un problème à partir d’une requête d’URL](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query) »
- « [Utilisation des paramètres de requête pour créer une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request/) »
