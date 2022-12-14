---
title: Examen des intégrations installées de votre organisation
intro: Vous pouvez passer en revue les niveaux d’autorisation pour les intégrations installées de votre organisation et configurer l’accès de chaque intégration dans les dépôts de l’organisation.
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128541"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Dans la section « Intégrations » de la barre latérale, cliquez sur **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}** .
{% else %}
1. Dans la barre latérale située à gauche, cliquez sur **{% data variables.product.prodname_github_apps %} installées**.
  ![Onglet {% data variables.product.prodname_github_apps %} installées dans la barre latérale des paramètres de l’organisation](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. En regard des {% data variables.product.prodname_github_app %} à examiner, cliquez sur **Configurer**.
  ![Configurer le bouton](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Passez en revue les autorisations et l’accès aux dépôts de l’{% data variables.product.prodname_github_app %}.
  ![Option permettant d’accorder à l’{% data variables.product.prodname_github_app %} un accès à tous les dépôts ou à des dépôts spécifiques](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - Pour donner à l’{% data variables.product.prodname_github_app %} un accès à tous les dépôts de votre organisation, sélectionnez **Tous les dépôts**.
    - Pour choisir les dépôts spécifiques auxquels permettre à l’application d’accéder, sélectionnez **Uniquement les dépôts sélectionnés**, puis tapez un nom de dépôt.
7. Cliquez sur **Enregistrer**.
