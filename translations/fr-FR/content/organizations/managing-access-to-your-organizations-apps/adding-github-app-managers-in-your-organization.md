---
title: Ajout des gestionnaires d’applications GitHub dans votre organisation
intro: Les propriétaires d’organisations peuvent accorder aux utilisateurs la possibilité de gérer une partie ou l’ensemble des {% data variables.product.prodname_github_apps %} détenues par l’organisation.
redirect_from:
- /articles/adding-github-app-managers-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add GitHub App managers
ms.openlocfilehash: d8389c85c847b750bdb83eb8b922ad16bfa33bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128527"
---
Pour plus d’informations sur les autorisations de gestionnaire {% data variables.product.prodname_github_app %}, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers) ».

## Octroi à une personne de la possibilité de gérer toutes les {% data variables.product.prodname_github_apps %} appartenant à l’organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Sous « Gestion », tapez le nom d’utilisateur de la personne que vous souhaitez désigner en tant que responsable {% data variables.product.prodname_github_app %} dans l’organisation, puis cliquez sur **Octroyer**.
![Ajouter un responsable {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/add-github-app-manager.png)

## Octroi à une personne de la possibilité de gérer une {% data variables.product.prodname_github_app %} individuelle

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Sous « {% data variables.product.prodname_github_apps %} », cliquez sur l’avatar de l’application pour laquelle vous aimeriez ajouter un gestionnaire {% data variables.product.prodname_github_app %}.
![Sélectionnez {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. Sous « Gestionnaires d’applications », tapez le nom d’utilisateur de la personne que vous souhaitez désigner comme Gestionnaire d’applications GitHub pour l’application, puis cliquez sur **Octroyer**.
![Ajouter un gestionnaire de {% data variables.product.prodname_github_app %} pour une application spécifique](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## Pour aller plus loin

- « [À propos de la Place de marché {% data variables.product.prodname_dotcom %}](/articles/about-github-marketplace/) » {% endif %}
