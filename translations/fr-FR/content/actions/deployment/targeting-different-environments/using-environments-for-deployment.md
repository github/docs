---
title: Utilisation d’environnements pour le déploiement
shortTitle: Use environments for deployment
intro: Vous pouvez configurer les environnements avec des règles de protection et des secrets. Un travail de workflow qui fait référence à un environnement doit respecter les règles de protection de l’environnement avant d’exécuter les secrets de l’environnement ou d’y accéder.
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 21163a759cfd7eab3b197aeb4bb9283e1ccb90a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572302'
---
## À propos des environnements

Les environnements sont utilisés pour décrire une cible de déploiement général comme `production`, `staging` ou `development`. Quand un workflow {% data variables.product.prodname_actions %} est déployé dans un environnement, l’environnement s’affiche dans la page principale du dépôt. Pour plus d’informations sur l’affichage des déploiements dans les environnements, consultez « [Consultation de l’historique de déploiement](/developers/overview/viewing-deployment-history) ».

Vous pouvez configurer les environnements avec des règles de protection et des secrets. Lorsqu’un travail de workflow référence un environnement, le travail démarre seulement après que toutes les règles de protection de l’environnement sont validées. Un travail ne peut pas non plus accéder à des secrets définis dans un environnement tant que toutes les règles de protection de l’environnement n’ont pas été validées.

{% ifversion fpt %} {% note %}

**Remarque :** Vous ne pouvez configurer des environnements que pour les dépôts publics. Si vous convertissez un dépôt public en dépôt privé, les règles de protection et les secrets d’environnement configurés sont ignorés et vous ne pourrez pas configurer d’environnements. Si vous convertissez votre dépôt pour le rendre à nouveau public, vous avez accès à toutes les règles de protection et à tous les secrets d’environnement précédemment configurés.

Les organisations avec {% data variables.product.prodname_team %} et les utilisateurs avec {% data variables.product.prodname_pro %} peuvent configurer des environnements pour les référentiels privés. Pour plus d’informations, consultez « [Produits de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products) ».

{% endnote %} {% endif %}

## Règles de protection de l’environnement

Les règles de protection de l’environnement nécessitent la validation de conditions spécifiques pour qu’un travail référençant l’environnement puisse continuer. Vous pouvez utiliser des règles de protection de l’environnement pour exiger une approbation manuelle, retarder un travail ou restreindre l’environnement à certaines branches.

### Réviseurs requis

Utilisez des réviseurs requis pour exiger qu’une personne ou équipe spécifique soit chargée d’approuver les travaux de workflow qui référencent l’environnement. Vous pouvez lister jusqu’à six utilisateurs ou équipes comme réviseurs. Les réviseurs doivent avoir au moins un accès en lecture au dépôt. Seul l’un des réviseurs requis doit approuver le travail pour qu’il continue.

Pour plus d’informations sur les travaux de révision qui référencent un environnement avec des réviseurs requis, consultez « [Révision des déploiements](/actions/managing-workflow-runs/reviewing-deployments) ».

### Minuteur d’attente

Utilisez un minuteur d’attente pour retarder d’un certain temps un travail après son déclenchement. Le temps (en minutes) doit être un entier compris entre 0 et 43 200 (30 jours).

### Branches de déploiement

Utilisez des branches de déploiement pour restreindre les branches qui peuvent être déployées dans l’environnement. Voici les options des branches de déploiement pour un environnement :

* **Toutes les branches** : toutes les branches du dépôt peuvent être déployées dans l’environnement.
* **Branches protégées** : seules les branches avec des règles de protection de branche activées peuvent être déployées dans l’environnement. Si aucune règle de protection de branche n’est définie pour une branche dans le dépôt, toutes les branches peuvent être déployées. Pour plus d’informations sur les règles de protection de branche, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches) ».
* **Branches sélectionnées**: seules les branches qui correspondent à vos modèles de nom spécifiés peuvent être déployées dans l’environnement.

  Par exemple, si vous spécifiez `releases/*` comme règle de branche de déploiement, seules les branches dont le nom commence par `releases/` peuvent être déployées dans l’environnement. (Les caractères génériques ne correspondent pas à `/`. Pour faire correspondre les branches qui commencent par `release/` et qui contiennent une barre oblique unique supplémentaire, utilisez `release/*/*`.) Si vous ajoutez `main` en tant que règle de branche de déploiement, une branche nommée `main` peut également être déployée dans l’environnement. Pour plus d’informations sur les options de syntaxe des branches de déploiement, consultez la [documentation Ruby sur File.fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
## Secrets d’environnement

Les secrets stockés dans un environnement sont disponibles uniquement pour les travaux de workflow qui référencent l’environnement. Si l’environnement nécessite une approbation, un travail ne peut pas accéder aux secrets d’environnement tant que l’un des réviseurs requis ne l’approuve pas. Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».

{% note %}

**Remarque :** Les workflows qui s’exécutent sur des exécuteurs auto-hébergés ne sont pas exécutés dans un conteneur isolé, même s’ils utilisent des environnements. Les secrets d’environnement doivent être traités avec le même niveau de sécurité que les secrets de dépôt et d’organisation. Pour plus d’informations, consultez « [Renforcement de la sécurité pour GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners) ».

{% endnote %}

## Création d’un environnement

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %} {% note %}

**Remarque :** La création d’un environnement dans un référentiel privé est disponible pour les organisations avec {% data variables.product.prodname_team %} et les utilisateurs avec {% data variables.product.prodname_pro %}.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %} {% data reusables.actions.new-environment %} {% data reusables.actions.name-environment %}
1. Si vous le souhaitez, spécifiez des personnes ou des équipes qui doivent approuver les travaux de workflow qui utilisent cet environnement.
   1. Sélectionnez **Required reviewers**.
   1. Entrez jusqu’à 6 personnes ou équipes. Seul l’un des réviseurs requis doit approuver le travail pour qu’il continue.
   1. Cliquez sur **Enregistrer les règles de protection**.
2. Si vous le souhaitez, spécifiez le temps d’attente avant d’autoriser les travaux de workflow qui utilisent cet environnement à poursuivre.
   1. Sélectionnez **Minuteur d’attente**.
   1. Entrez le nombre de minutes à attendre.
   1. Cliquez sur **Enregistrer les règles de protection**.
3. Si vous le souhaitez, spécifiez les branches qui peuvent être déployées dans cet environnement. Pour plus d’informations sur les valeurs possibles, consultez « [Branches de déploiement](#deployment-branches) ».
   1. Sélectionnez l’option souhaitée dans la liste déroulante **Branches de déploiement**.
   1. Si vous avez choisi **Branches sélectionnées**, entrez les modèles de nom de branche que vous souhaitez autoriser.
4. Si vous le souhaitez, ajoutez des secrets d’environnement. Ces secrets sont disponibles uniquement pour les travaux de workflow qui utilisent l’environnement. En outre, les travaux de workflow qui utilisent cet environnement peuvent uniquement accéder à ces secrets après la validation des règles éventuellement configurées (par exemple, les réviseurs requis). Pour plus d’informations sur les secrets, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».
   1. Sous **Secrets d’environnement**, cliquez sur **Ajouter un secret**.
   1. Entrez le nom du secret.
   1. Entrez la valeur du secret.
   1. Cliquez sur **Ajouter un secret**.

Vous pouvez également créer et configurer des environnements via l’API REST. Pour plus d’informations, consultez « [Environnements de déploiement](/rest/deployments/environments) », « [Secrets GitHub Actions](/rest/actions/secrets) » et « [Stratégies de branche de déploiement](/rest/deployments/branch-policies) ».

L’exécution d’un workflow qui référence un environnement qui n’existe pas crée un environnement avec le nom référencé. L’environnement nouvellement créé n’aura pas de règles de protection ni de secrets configurés. Toute personne qui peut modifier des workflows dans le dépôt peut créer des environnements via un fichier de workflow, mais seuls les administrateurs de dépôt peuvent configurer l’environnement.

## Utilisation d’un environnement

Chaque travail d’un workflow peut référencer un seul environnement. Toutes les règles de protection configurées pour l’environnement doivent être validées pour qu’un travail référençant l’environnement soit envoyé à un exécuteur. Le travail peut accéder aux secrets de l’environnement après seulement que le travail a été envoyé à un exécuteur.

Quand un workflow référence un environnement, l’environnement apparaît dans les déploiements du dépôt. Pour plus d’informations sur l’affichage des déploiements actuels et précédents, consultez « [Consultation de l’historique de déploiement](/developers/overview/viewing-deployment-history) ».

{% data reusables.actions.environment-example %}

## Suppression d’un environnement

{% data reusables.actions.permissions-statement-environment %}

La suppression d’un environnement supprime toutes les règles de protection et tous les secrets associés à l’environnement. Tous les travaux actuellement en attente en raison de règles de protection de l’environnement supprimé échouent automatiquement.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. À côté de l’environnement que vous souhaitez supprimer, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
2. Cliquez sur **Je comprends, supprimez cet environnement**.

Vous pouvez également supprimer des environnements via l’API REST. Pour plus d’informations, consultez « [Environnements](/rest/reference/repos#environments) ».

## Relation entre les environnements et les déploiements

{% data reusables.actions.environment-deployment-event %}

Vous pouvez accéder à ces objets via l’API REST ou l’API GraphQL. Vous pouvez également vous abonner à ces événements webhook. Pour plus d’informations, consultez « [Dépôts](/rest/reference/repos#deployments) » (API REST), « [Objets](/graphql/reference/objects#deployment)» (API GraphQL) ou « [Événements et charges utiles du webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment) ».

## Étapes suivantes

{% data variables.product.prodname_actions %} fournit plusieurs fonctionnalités pour la gestion de vos déploiements. Pour plus d’informations, consultez « [Déploiement avec GitHub Actions](/actions/deployment/deploying-with-github-actions) ».
