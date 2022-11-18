---
title: À propos des rôles de référentiel personnalisés
intro: Vous pouvez contrôler de façon plus précise l’accès aux dépôts de votre organisation avec des rôles de dépôt personnalisés.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: About custom roles
ms.openlocfilehash: c4e7f791b9402b45160b31aab2653bf80150ddee
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160687'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## À propos des rôles de référentiel personnalisés

Pour effectuer toute action sur {% data variables.product.product_name %}, comme la création d’une demande de tirage dans un référentiel ou la modification des paramètres de facturation d’une organisation, une personne doit disposer d’un accès suffisant au compte ou à la ressource approprié. Cet accès est contrôlé par les autorisations. Une autorisation est la possibilité d’effectuer une action spécifique. Par exemple, la possibilité de supprimer un problème est une autorisation. Un rôle est un ensemble d’autorisations que vous pouvez attribuer à des personnes ou des équipes.

Au sein d’une organisation, vous pouvez attribuer des rôles au niveau de l’organisation, de l’équipe et du référentiel. Pour plus d’informations sur les différents niveaux de rôles, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

Vous pouvez avoir un contrôle plus précis sur les autorisations que vous accordez au niveau du référentiel en créant jusqu’à trois rôles de référentiel personnalisés. {% data reusables.organizations.about-custom-repo-roles %} Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».

Une fois que vous avez créé un rôle personnalisé, toute personne disposant d’un accès administrateur à un référentiel peut affecter le rôle à une personne ou à une équipe. Pour plus d’informations, consultez « [Gestion de l’accès d’un individu à un dépôt d’organisation](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository) » et « [Gestion de l’accès d’une équipe à un dépôt d’organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) ».

{% ifversion custom-repo-role-api %}

Vous pouvez également utiliser l’API REST pour créer et gérer des rôles de dépôt personnalisés. Pour plus d’informations, consultez « [Rôles de dépôt personnalisés](/rest/orgs/custom-roles) ».

{% else %}

Vous pouvez également utiliser l’API REST pour lister les rôles de dépôt personnalisés disponibles dans votre organisation. Pour plus d’informations, consultez « [API de rôles de dépôt personnalisés](/rest/orgs/custom-roles) ».

{% endif %}

## À propos du rôle hérité

Lorsque vous créez un rôle de référentiel personnalisé, vous commencez par choisir un rôle hérité à partir d’un ensemble d’options prédéfinies. Le rôle hérité détermine l’ensemble initial d’autorisations inclus dans le rôle personnalisé. Ensuite, vous pouvez personnaliser davantage le rôle en choisissant des autorisations supplémentaires à donner au rôle. Pour obtenir la liste complète des autorisations disponibles, consultez « [Autorisations supplémentaires pour les rôles personnalisés](#additional-permissions-for-custom-roles) ».

Vos options pour le rôle hérité sont normalisées pour différents types de contributeurs dans votre référentiel.

| Rôle hérité | Conçu pour |
|----|----|
| **Lire** | Contributeurs hors code qui veulent voir votre projet ou en discuter |
| **Tri** | Contributeurs qui doivent gérer de façon proactive les problèmes et les demandes de tirage (pull requests) sans accès en écriture |
| **Écrire** | Membres et collaborateurs de l’organisation qui contribuent activement à votre projet |
| **Maintenance** | Chefs de projet qui doivent gérer le dépôt sans avoir accès à des actions sensibles ou destructrices |

## Exemples de rôles personnalisés

Voici quelques exemples de rôles de référentiel personnalisés que vous pouvez configurer.

| Rôle de référentiel personnalisé | Résumé | Rôle hérité | Autorisations supplémentaires |
|----|----|----|----|
| Security Engineer | Capable de contribuer au code et de gérer le pipeline de sécurité | **Maintenance** | Supprimer les résultats de l’analyse du code |
| Contractor | Capable de développer des intégrations de webhooks | **Écrire** | Gérer les webhooks |
| Gestionnaire de la communauté | Capable de gérer toutes les interactions de la communauté sans pouvoir contribuer au code | **Lire** | - Marquer un problème comme dupliqué <br> - Gérer les paramètres de la page GitHub <br> - Gérer les paramètres du wiki <br> - Définir l’aperçu social <br> - Modifier les métadonnées du référentiel <br> - Discussions de triage |

## Autorisations supplémentaires pour les rôles personnalisés

Après avoir choisi un rôle hérité, vous pouvez sélectionner des autorisations supplémentaires pour votre rôle personnalisé.

Vous ne pouvez choisir qu’une autorisation supplémentaire si elle n’est pas déjà incluse dans le rôle hérité. Par exemple, si le rôle hérité offre un accès en **écriture** à un référentiel, l’autorisation « Fermer une demande de tirage » sera déjà incluse dans le rôle hérité.

{% ifversion discussions %}
### Discussions

- Créer une catégorie de discussion
- Modifier une catégorie de discussion
- Supprimer une catégorie de discussion 
- Marquer ou supprimer le marquage des réponses de discussion 
- Masquer ou afficher les commentaires de discussion 
- Convertir des problèmes en discussions 

Pour plus d’informations, consultez « [{% data variables.product.prodname_discussions %}](/discussions) ».
{% endif %}

### Problème et demandes d’extraction

- Affecter ou supprimer un utilisateur 
- Ajouter ou supprimer une étiquette 

### Problème

- Fermer un problème
- Rouvrir un problème fermé
- Supprimer un problème
- Marquer un problème en tant que doublon

### Demande de tirage (pull request)

- Fermer une demande de tirage
- Rouvrir une demande de tirage fermée
- Demander une révision de demande de tirage

### Dépôt

- Définir des jalons
- Gérer les paramètres du wiki 
- Gérer les paramètres du projet
- Gérer les paramètres de fusion des demandes de tirage 
- Gérer les paramètres {% data variables.product.prodname_pages %} (voir « [Configuration d’une source de publication pour votre site {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) »)
- Gérer les webhooks 
- Gérer les clés de déploiement 
- Modifier les métadonnées de dépôt {%- ifversion ghec %}
- Définir les limites d’interaction {%- endif %}
- Définir l’aperçu social 
- Pousser les commits vers des branches protégées (les règles de protection de branche s’appliquent toujours)
- Créer des étiquettes protégées
- Supprimer les étiquettes protégées {%- ifversion bypass-branch-protections %}
- Contourner les protections de branche {%- endif %}

### Sécurité

- Afficher les résultats d’{% data variables.product.prodname_code_scanning %} 
- Ignorer ou rouvrir les résultats d’{% data variables.product.prodname_code_scanning %}
- Supprimer les résultats d’{% data variables.product.prodname_code_scanning %} 
- Afficher les {% data variables.product.prodname_dependabot_alerts %} 
- Ignorer ou rouvrir les {% data variables.product.prodname_dependabot_alerts %} 
- Afficher les résultats d’{% data variables.product.prodname_secret_scanning %} 
- Ignorer ou rouvrir les résultats d’{% data variables.product.prodname_secret_scanning %} 

## Priorité pour différents niveaux d’accès

Si une personne reçoit différents niveaux d’accès via différents canaux, comme l’appartenance à une équipe et les autorisations de base pour une organisation, l’accès le plus élevé l’emporte sur les autres. Par exemple, si un propriétaire d’organisation donne à un membre de l’organisation un rôle personnalisé qui utilise le rôle hérité « Lecture », puis qu’un propriétaire de l’organisation définit l’autorisation de base de l’organisation sur « Écriture », ce rôle personnalisé aura un accès en écriture, ainsi que toutes les autorisations supplémentaires incluses dans le rôle personnalisé.

{% data reusables.organizations.mixed-roles-warning %}

Pour résoudre les conflits d’accès, vous pouvez ajuster les autorisations de base de votre organisation ou l’accès de l’équipe, ou modifier le rôle personnalisé. Pour plus d'informations, consultez les pages suivantes :
  - "[Définition des autorisations de base pour une organisation](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
  - « [Gestion de l’accès de l’équipe à un référentiel de l’organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) »
  - « [Modification d’un rôle de référentiel](#editing-a-repository-role) »
