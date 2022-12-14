---
title: Rôles de dépôt pour une organisation
intro: Vous pouvez personnaliser l’accès à chaque dépôt de votre organisation en affectant des rôles précis, permettant ainsi aux utilisateurs d’accéder aux fonctionnalités et aux tâches dont ils ont besoin.
miniTocMaxHeadingLevel: 3
redirect_from:
- /articles/repository-permission-levels-for-an-organization-early-access-program
- /articles/repository-permission-levels-for-an-organization
- /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
- /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Repository roles
ms.openlocfilehash: dbb5075dfc57e01e0658138b65d6231fb12f1071
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526701"
---
## Rôles de dépôt pour des organisations

Vous pouvez accorder aux membres de l’organisation, aux collaborateurs externes et aux équipes de personnes différents niveaux d’accès aux dépôts détenus par une organisation en leur attribuant des rôles. Choisissez le rôle qui correspond le mieux à chaque personne ou fonction de l’équipe dans votre projet en n’accordant que l’accès strictement nécessaire.

Du niveau d’accès le moins élevé au niveau d’accès le plus élevé, les rôles pour un dépôt d’organisation sont les suivants :
- **Lecture** : recommandé pour les contributeurs hors code qui veulent voir ou discuter de votre projet
- **Triage** : recommandé pour les contributeurs qui doivent gérer de façon proactive les problèmes et les demandes de tirage (pull request) sans accès en écriture
- **Écriture** : recommandé pour les contributeurs qui effectuent activement des poussées (push) vers votre projet
- **Gestion** : recommandé pour les chefs de projet qui doivent gérer le dépôt sans avoir accès à des actions sensibles ou destructrices
- **Administration** : recommandé pour les personnes qui ont besoin d’un accès complet au projet, notamment aux actions sensibles et destructrices, comme la gestion de la sécurité ou la suppression d’un dépôt

{% ifversion fpt %} Si votre organisation utilise {% data variables.product.prodname_ghe_cloud %}, vous pouvez créer des rôles de dépôt personnalisés. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes > 3.4 or ghae-issue-6271 %} Vous pouvez créer des rôles de dépôt personnalisés. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
{% endif %}

Les propriétaires d’organisation peuvent définir des autorisations de base qui s’appliquent à tous les membres d’une organisation lors de l’accès à l’un des dépôts de celle-ci. Pour plus d’informations, consultez « [Définition des autorisations de base pour une organisation](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions) ».

Les propriétaires d’organisation peuvent également choisir de limiter davantage l’accès à certains paramètres et actions au sein de l’organisation. Pour plus d’informations sur les options des paramètres spécifiques, consultez « [Gestion des paramètres de l’organisation](/articles/managing-organization-settings) ».

Outre la gestion des paramètres au niveau de l’organisation, les propriétaires d’organisation ont accès à chaque dépôt appartenant à l’organisation. Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

{% warning %}

**Avertissement :** Quand une personne ajoute une clé de déploiement à un dépôt, tout utilisateur disposant de la clé privée peut lire ou écrire dans le dépôt (en fonction des paramètres de clé), même s’il est supprimé ultérieurement de l’organisation.

{% endwarning %}

## Autorisations pour chaque rôle

{% ifversion fpt %} Certaines des fonctionnalités listées ci-dessous sont limitées aux organisations utilisant {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Remarque :** Les rôles requis pour utiliser les fonctionnalités de sécurité sont listés dans « [Exigences d’accès pour les fonctionnalités de sécurité](#access-requirements-for-security-features) » ci-dessous.

{% endnote %} {% endif %}

| Action de dépôt | Lire | Tri | Write | Maintenance | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| Gérer l’accès [individuel](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository), d’[équipe](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) et de [collaborateur externe](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) au dépôt | | | | | **✔️** |
| Effectuer un tirage (pull) à partir des dépôts attribués à la personne ou à l’équipe | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Dupliquer (fork) les dépôts attribués à la personne ou à l’équipe | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Modifier et supprimer leurs propres commentaires | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Ouvrir des problèmes | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Fermer les problèmes qu’ils ont ouverts eux-mêmes | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Rouvrir les problèmes qu’ils ont fermés eux-mêmes | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Faire en sorte qu’un problème leur soit attribué | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Envoyer des demandes de tirage à partir des duplications des dépôts attribués à l’équipe | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Envoyer des revues sur des demandes de tirage | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Afficher les mises en production publiées | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Afficher les [exécutions de workflow GitHub Actions](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Modifier les wikis dans des dépôts publics | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Modifier les wikis dans des dépôts privés | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [Signaler du contenu abusif ou factice](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Appliquer/ignorer des étiquettes | | **✔️** | **✔️** | **✔️** | **✔️** |
| Créer, modifier, supprimer des étiquettes | | | **✔️** | **✔️** | **✔️** |
| Fermer, rouvrir et affecter tous les problèmes et demandes de tirage | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Activer et désactiver la fusion automatique sur une demande de tirage](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| Appliquer des jalons |  | **✔️** | **✔️** | **✔️** | **✔️** |
| Marquer les [doublons de problèmes et de demandes de tirage](/articles/about-duplicate-issues-and-pull-requests)| | **✔️** | **✔️** | **✔️** | **✔️** |
| Demander des [revues de demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | | **✔️** | **✔️** | **✔️** | **✔️** |
| Fusionner une [demande de tirage](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | | | **✔️** | **✔️** | **✔️** |
| Effectuer une poussée (écrire) vers les dépôts attribués à la personne ou à l’équipe | | | **✔️** | **✔️** | **✔️** |
| Modifier et supprimer les commentaires de toute personne sur les commits, les demandes de tirage et les problèmes | | | **✔️** | **✔️** | **✔️** |
| [Masquer les commentaires de tout le monde](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [Verrouiller les conversations](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| Transférer des problèmes (voir « [Transfert d’un problème vers un autre dépôt](/articles/transferring-an-issue-to-another-repository) » pour plus d’informations) |  | | **✔️** | **✔️** | **✔️** |
| [Agir en tant que propriétaire de code désigné pour un dépôt](/articles/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [Marquer un brouillon de demande de tirage comme étant prêt pour la révision](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [Convertir une demande de tirage en brouillon](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| Envoyer des révisions qui affectent la possibilité de fusion d’une demande de tirage | | | **✔️** | **✔️** | **✔️** |
| [Appliquer des modifications suggérées](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) aux demandes de tirage | | | **✔️** | **✔️** | **✔️** |
| Créer [des vérifications d’état](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Créer, modifier, exécuter, réexécuter et annuler [des workflows GitHub Actions](/actions/automating-your-workflow-with-github-actions/) | | | **✔️** | **✔️** | **✔️** |{% endif %}
| Créer et modifier des mises en production | | | **✔️** | **✔️** | **✔️** |
| Afficher les mises en production à l’état de brouillon | | | **✔️** | **✔️** | **✔️** |
| Modifier la description d’un dépôt | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [Afficher et installer des packages](/packages/publishing-and-managing-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Publier des packages](/packages/publishing-and-managing-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [Supprimer et restaurer des packages](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| Gérer les [rubriques](/articles/classifying-your-repository-with-topics) | | | | **✔️** | **✔️** |
| Activer les wikis et restreindre les éditeurs de wiki | | | | **✔️** | **✔️** |
| Activer les tableaux de projet | | | | **✔️** | **✔️** |
| Configurer des [fusions de demande de tirage](/articles/configuring-pull-request-merges) | | | | **✔️** | **✔️** |
| Configurer [une source de publication pour {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages) | | | | **✔️** | **✔️** |
| [Gérer les règles de protection de branche](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [Effectuer une poussée vers des branches protégées](/articles/about-protected-branches) | | | | **✔️** | **✔️** |
| Fusionner des demande de tirage sur des branches protégées, même s’il n’y a pas de révisions d’approbation | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae-issue-6337 or ghec %}
| Créer des étiquettes qui correspondent à une [règle de protection des étiquettes](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | **✔️** | **✔️** |
| Supprimer des étiquettes qui correspondent à une [règle de protection des étiquettes](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | | **✔️** |{% endif %}
| [Créer et modifier des cartes de réseau social pour un dépôt](/articles/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Limiter [les interactions dans un dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **✔️** | **✔️** |{% endif %}
| Supprimer un problème (voir « [Suppression d’un problème](/articles/deleting-an-issue) ») | | | | | **✔️** |
| [Définir les propriétaires de code pour un dépôt](/articles/about-code-owners) | | | | | **✔️** |
| Ajoutez un dépôt à une équipe (voir « [Gestion de l’accès d’une équipe à un dépôt d’organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository) » pour plus d’informations) | | | | | **✔️** |
| [Gérer l’accès des collaborateurs externes à un dépôt](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [Changer la visibilité d’un dépôt](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| Transformer un dépôt en modèle (voir « [Création d’un modèle de dépôt](/articles/creating-a-template-repository) ») | | | | | **✔️** |
| Changer les paramètres d’un dépôt | | | | | **✔️** |
| Gérer l’accès de l’équipe et des collaborateurs au dépôt | | | | | **✔️** |
| Modifier la branche par défaut du dépôt | | | | | **✔️** |
| Renommer la branche par défaut du dépôt (voir « [Renommer une branche](/github/administering-a-repository/renaming-a-branch) ») | | | | | **✔️** |
| Renommer une branche autre que la branche par défaut du dépôt (voir « [Renommer une branche](/github/administering-a-repository/renaming-a-branch) ») | | | **✔️** | **✔️** | **✔️** |
| Gérer les webhooks et déployer des clés | | | | | **✔️** |{% ifversion fpt or ghec %}
| [Gérer les paramètres d’utilisation des données de votre dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [Gérer la stratégie de duplication pour un dépôt](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [Transférer des dépôts vers l’organisation](/articles/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [Supprimer ou transférer des dépôts hors de l’organisation](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [Archiver des dépôts](/articles/about-archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| Afficher un bouton de sponsor (voir « [Affichage d’un bouton de sponsor dans votre dépôt](/articles/displaying-a-sponsor-button-in-your-repository) ») | | | | | **✔️** |{% endif %}
| Créer des références de liaison automatique à des ressources externes, telles que Jira ou Zendesk (voir « [Configuration des liaisons automatiques pour référencer des ressources externes](/articles/configuring-autolinks-to-reference-external-resources) ») | | | | | **✔️** |{% ifversion discussions %}
| [Activer {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) dans un dépôt | | | | **✔️** | **✔️** |
| [Créer et modifier des catégories](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) pour {% data variables.product.prodname_discussions %} | | | | **✔️** | **✔️** |
| [Déplacer une discussion vers une autre catégorie](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Transférer une discussion](/discussions/managing-discussions-for-your-community/managing-discussions) vers un nouveau dépôt| | | **✔️** | **✔️** | **✔️** |
| [Gérer les discussions épinglées](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Convertir des problèmes en discussions en bloc](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Verrouiller et déverrouiller les discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Convertir individuellement des problèmes en discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Créer des discussions et commenter des discussions existantes](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Supprimer une discussion](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Créer des [codespaces](/codespaces/about-codespaces) | | | **✔️** | **✔️** | **✔️** |{% endif %}

### Exigences d’accès pour les fonctionnalités de sécurité

Dans cette section, vous trouverez l’accès requis pour les fonctionnalités de sécurité, telles que les fonctionnalités {% data variables.product.prodname_advanced_security %}.

| Action de dépôt | Lire | Tri | Write | Maintenance | Admin |
|:---|:---:|:---:|:---:|:---:|:---:| 
| Recevoir des [{% data variables.product.prodname_dependabot_alerts %} pour les dépendances non sécurisées](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) dans un dépôt | | | | | **✔️** |
| [Ignorer les {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Désigner des personnes ou des équipes supplémentaires pour recevoir des alertes de sécurité](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Créer des [avis de sécurité](/code-security/security-advisories/about-github-security-advisories) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| Gérer l’accès aux fonctionnalités {% data variables.product.prodname_GH_advanced_security %} (voir « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ») | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| [Activer le graphe de dépendances](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) pour un dépôt privé | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Afficher les vérifications des dépendances](/code-security/supply-chain-security/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [Afficher les alertes d’{% data variables.product.prodname_code_scanning %} sur les demandes de tirage](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Lister, ignorer et supprimer des alertes d’{% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [Afficher les alertes d’{% data variables.product.prodname_secret_scanning %} dans un dépôt](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Résoudre, révoquer ou rouvrir des alertes d’{% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Désigner des personnes ou des équipes supplémentaires pour recevoir des alertes d’{% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) dans les dépôts | | | | | **✔️** |{% endif %}

[1] Les rédacteurs et les responsables de dépôt ne peuvent voir des informations d’alerte que pour leurs propres commits.

## Pour aller plus loin

- « [Gestion de l’accès aux dépôts de votre organisation](/articles/managing-access-to-your-organization-s-repositories) »
- « [Ajout de collaborateurs externes à des dépôts de votre organisation](/articles/adding-outside-collaborators-to-repositories-in-your-organization) »
- « [Autorisations de tableau de projet pour une organisation](/articles/project-board-permissions-for-an-organization) »
