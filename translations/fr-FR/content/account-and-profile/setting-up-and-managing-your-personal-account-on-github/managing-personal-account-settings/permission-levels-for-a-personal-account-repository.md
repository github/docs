---
title: Niveaux d’autorisation pour un référentiel de compte personnel
intro: "Un dépôt détenu par un compte personnel a deux niveaux d’autorisation\_: propriétaire du dépôt et collaborateurs."
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Repository permissions
ms.openlocfilehash: dd2124c23054fa7bd44bb6501dae4363e59bab75
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113872'
---
## À propos des niveaux d’autorisation pour un dépôt de compte personnel

Les dépôts appartenant à des comptes personnels ont un seul propriétaire. Les autorisations de propriété ne peuvent pas être partagées avec un autre compte personnel.

Vous pouvez également {% ifversion fpt or ghec %}inviter{% else %}ajouter{% endif %} des utilisateurs sur {% data variables.product.product_name %} à votre dépôt en tant que collaborateurs. Pour plus d’informations, consultez « [Invitation de collaborateurs à un dépôt personnel](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) ».

{% tip %}

**Astuce :** Si vous avez besoin d’un accès plus précis à un dépôt appartenant à votre compte personnel, vous pouvez transférer ce dépôt à une organisation. Pour plus d’informations, consultez « [Transfert d’un dépôt](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account) ».

{% endtip %}

## Accès propriétaire pour un dépôt appartenant à un compte personnel

Le propriétaire du dépôt dispose d’un contrôle total sur le dépôt. Outre les actions que n’importe quel collaborateur peut effectuer, le propriétaire du dépôt peut effectuer les actions suivantes.

| Action | Plus d’informations |
| :- | :- |
| {% ifversion fpt or ghec %}Inviter des collaborateurs{% else %}Ajouter des collaborateurs{% endif %} | « [Invitation de collaborateurs à un dépôt personnel](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) » |
| Modifier la visibilité du dépôt | « [Définition de la visibilité du dépôt](/github/administering-a-repository/setting-repository-visibility) » |{% ifversion fpt or ghec %}
| Limiter les interactions avec le dépôt | « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) » |{% endif %}
| Renommer une branche, y compris la branche par défaut | « [Renommer une branche](/github/administering-a-repository/renaming-a-branch) » |
| Fusionner une demande de tirage sur une branche protégée, même s’il n’y a pas de révisions d’approbation | « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches) » |
| Supprimer le dépôt | « [Suppression d’un dépôt](/repositories/creating-and-managing-repositories/deleting-a-repository) » |
| Gérer les rubriques du dépôt | « [Classifier votre dépôt avec des rubriques](/github/administering-a-repository/classifying-your-repository-with-topics) » |{% ifversion fpt or ghec %}
| Gérer les paramètres de sécurité et d’analyse du dépôt | « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) » |{% endif %}{% ifversion fpt or ghec %}
| Activer le graphe des dépendances pour un dépôt privé | « [Exploration des dépendances d’un dépôt](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) » |{% endif %}
| Supprimer et restaurer des packages | « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) » |
| Personnaliser l’aperçu du dépôt sur les réseaux sociaux | « [Personnalisation de l’aperçu de votre dépôt sur les réseaux sociaux](/github/administering-a-repository/customizing-your-repositorys-social-media-preview) » |
| Créer un modèle à partir du dépôt | « [Création d’un modèle de dépôt](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository) » |
| Contrôler l’accès aux {% data variables.product.prodname_dependabot_alerts %}| « [Gestion des paramètres de sécurité et d’analyse de votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) » |{% ifversion fpt or ghec %}
| Ignorer {% data variables.product.prodname_dependabot_alerts %} dans le dépôt | « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) » |
| Gérer l’utilisation des données pour un dépôt privé | « [Gestion des paramètres d’utilisation des données pour votre dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) »|{% endif %}
| Définir les propriétaires de code pour le dépôt | « [À propos des propriétaires de code](/github/creating-cloning-and-archiving-repositories/about-code-owners) » |
| Archiver le dépôt | « [Archivage des dépôts](/repositories/archiving-a-github-repository/archiving-repositories) » |{% ifversion fpt or ghec %}
| Créer des avis de sécurité | « [À propos des avis de sécurité des référentiels](/github/managing-security-vulnerabilities/about-github-security-advisories) » |
| Afficher un bouton de sponsor | « [Affichage d’un bouton de sponsor dans votre dépôt](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository) » |{% endif %}
| Autoriser ou interdire la fusion automatique pour les demandes de tirage | « [Gestion de la fusion automatique pour les demandes de tirage dans votre dépôt](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) » | 
| Gérer les webhooks et déployer des clés   | « [Gestion des clés de déploiement](/developers/overview/managing-deploy-keys#deploy-keys) » |

## Accès collaborateur pour un dépôt appartenant à un compte personnel

Les collaborateurs d’un dépôt personnel peuvent tirer (lire) le contenu du dépôt et pousser (écrire) des modifications au dépôt.

{% note %}

**Remarque :** Dans un dépôt privé, les propriétaires de dépôt ne peuvent accorder qu’un accès en écriture aux collaborateurs. Les collaborateurs ne peuvent pas avoir accès en lecture seule à des dépôts appartenant à un compte personnel.

{% endnote %}

Les collaborateurs peuvent également effectuer les actions suivantes.

| Action | Plus d’informations |
| :- | :- |
| Dupliquer (fork) le référentiel | « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) » |
| Renommer une branche autre que la branche par défaut | « [Renommer une branche](/github/administering-a-repository/renaming-a-branch) » |
| Créer, modifier et supprimer des commentaires sur des commits, des demandes de tirage et des problèmes dans le dépôt | <ul><li>« [À propos des problèmes](/github/managing-your-work-on-github/about-issues) »</li><li>« [Commentaires sur une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) »</li><li>« [Gestion des commentaires perturbants](/communities/moderating-comments-and-conversations/managing-disruptive-comments) »</li></ul> |
| Créer, affecter, fermer et rouvrir des problèmes dans le dépôt | « [Gestion de votre travail avec les problèmes](/github/managing-your-work-on-github/managing-your-work-with-issues) » |
| Gérer les étiquettes pour les problèmes et les demandes de tirage dans le dépôt | « [Étiquetage des problèmes et demandes de tirage](/github/managing-your-work-on-github/labeling-issues-and-pull-requests) » |
| Gérer les jalons pour les problèmes et les demandes de tirage dans le dépôt | « [Création et modification de jalons pour les problèmes et les demandes de tirage](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests) » |
| Marquer un problème ou une demande de tirage dans le dépôt en tant que doublon | « [À propos des doublons de problèmes et de demandes de tirage](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests) » |
| Créer, fusionner et fermer des demandes de tirage dans le dépôt | «  [Propositions de modifications de votre travail avec des demandes de tirage](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) » |
| Activer et désactiver la fusion automatique pour une demande de tirage | « [Fusion automatique d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) »
| Appliquer des modifications suggérées à des demandes de tirage dans le dépôt |« [Incorporation de commentaires dans votre demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) » |
| Créer une demande de tirage à partir d’une duplication (fork) du dépôt | « [Création d’une demande de tirage à partir d’une duplication](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) » |
| Soumettre une révision sur une demande de tirage qui affecte la capacité de fusion de la demande de tirage | « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) » |
| Créer et modifier un wiki pour le dépôt | « [À propos des wikis](/communities/documenting-your-project-with-wikis/about-wikis) » |
| Créer et modifier des mises en production pour le dépôt | « [Gestion des mises en production dans un dépôt](/github/administering-a-repository/managing-releases-in-a-repository) » |
| Agir en tant que propriétaire de code pour le dépôt | « [À propos des propriétaires de code](/articles/about-code-owners) » |{% ifversion fpt or ghae or ghec %}
| Publier, afficher ou installer des packages | « [Publication et gestion des packages](/github/managing-packages-with-github-packages/publishing-and-managing-packages) » |{% endif %}
| Se supprimer en tant que collaborateur sur le dépôt | « [Vous supprimer en tant que collaborateur d’un dépôt](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository) » |

## Pour aller plus loin

- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
