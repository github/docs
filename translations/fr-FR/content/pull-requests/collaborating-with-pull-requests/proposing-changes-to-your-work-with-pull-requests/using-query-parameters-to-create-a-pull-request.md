---
title: Utilisation des paramètres de requête pour créer une demande de tirage
intro: Utilisez les paramètres de requête pour créer des URL personnalisées afin d’ouvrir des demandes de tirage (pull request) avec des champs prédéfinis.
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 89ca4b13ff6291f7b4449d25b3daa911734a22b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133900'
---
Vous pouvez utiliser des paramètres de requête pour ouvrir des demandes de tirage. Les paramètres de requête sont des éléments facultatifs d’URL que vous pouvez personnaliser pour partager une vue de page web spécifique, comme des résultats de filtre de recherche ou un modèle de demande de tirage sur {% data variables.product.prodname_dotcom %}. Pour créer vos propres paramètres de requête, vous devez faire correspondre la paire clé-valeur.

{% tip %}

**Astuce :** Vous pouvez également créer des modèles de demande de tirage qui s’ouvrent avec des étiquettes, des destinataires et un titre de demande de tirage par défaut. Pour plus d’informations, consultez « [Utilisation de modèles pour encourager les problèmes et demandes de tirage utiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests) ».

{% endtip %}

Vous devez avoir les autorisations appropriées pour chaque action dont vous voulez utiliser le paramètre de requête équivalent. Par exemple, vous devez avoir l’autorisation d’ajouter une étiquette à une demande de tirage pour utiliser le paramètre de requête `labels`. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

Si vous créez une URL non valide avec des paramètres de requête, ou si vous n’avez pas les autorisations appropriées, l’URL renvoie une page d’erreur `404 Not Found`. Si vous créez une URL qui dépasse la limite du serveur, l’URL retourne une page d’erreur `414 URI Too Long`.

Paramètre de requête. | Exemple
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` crée une demande de tirage qui compare la branche de base `main` et la branche principale `my-branch`. La requête `quick_pull=1` vous dirige directement sur la page « Ouvrir une demande de tirage ».
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` crée une demande de tirage avec l’étiquette « bug » et le titre « Bug fix ».
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` crée une demande de tirage avec le titre « Bug fix » et le commentaire « Describe the fix » dans le corps de la demande de tirage.
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` crée une demande de tirage avec les étiquettes « help wanted » et « bug ».
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` crée une demande de tirage avec le jalon « testing milestones ».
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` crée une demande de tirage et l’attribue à @octocat.
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` crée une demande de tirage avec le titre « Bug fix » et l’ajoute au tableau de projet 1 de l’organisation.
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` crée une demande de tirage avec un modèle dans le corps de la demande de tirage. Le paramètre de requête `template` fonctionne avec des modèles stockés dans un sous-répertoire `PULL_REQUEST_TEMPLATE` à la racine, répertoire `docs/` ou `.github/` d’un dépôt. Pour plus d’informations, consultez « [Utilisation de modèles pour encourager les problèmes et demandes de tirage utiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests) ».
