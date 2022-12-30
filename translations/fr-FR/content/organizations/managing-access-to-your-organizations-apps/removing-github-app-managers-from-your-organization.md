---
title: Suppression des gestionnaires d’applications GitHub de votre organisation
intro: Les propriétaires d’organisation peuvent révoquer les autorisations de gestionnaire {% data variables.product.prodname_github_app %} qui ont été accordées à un membre de l’organisation.
redirect_from:
- /articles/removing-github-app-managers-from-your-organization
- /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove GitHub App managers
ms.openlocfilehash: c7dc813294a1fdd7e928a4212af30efa1182fd3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128525"
---
Pour plus d’informations sur les autorisations de gestionnaire {% data variables.product.prodname_github_app %}, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers) ».

## Suppression des autorisations d’un gestionnaire {% data variables.product.prodname_github_app %} pour toute l’organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Sous « Gestion », recherchez le nom d’utilisateur de la personne dont vous voulez supprimer les autorisations de gestionnaire {% data variables.product.prodname_github_app %}, puis cliquez sur **Révoquer**.
![Révoquer les autorisations de gestionnaire {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## Suppression des autorisations d’un gestionnaire {% data variables.product.prodname_github_app %} pour une {% data variables.product.prodname_github_app %} individuelle

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Sous « {% data variables.product.prodname_github_apps %} », cliquez sur l’avatar de l’application dont vous voulez supprimer un gestionnaire {% data variables.product.prodname_github_app %}.
![Sélectionnez {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. Sous « Gestionnaires d’applications », recherchez le nom d’utilisateur de la personne dont vous voulez supprimer les autorisations de gestionnaire {% data variables.product.prodname_github_app %}, puis cliquez sur **Révoquer**.
![Révoquer les autorisations de gestionnaire {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## Pour aller plus loin

- « [À propos de la Place de marché {% data variables.product.prodname_dotcom %}](/articles/about-github-marketplace/) » {% endif %}
