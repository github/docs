---
title: Affichage des personnes ayant accès à votre dépôt
intro: Vous pouvez afficher{% ifversion ghec or ghes or ghae %} et exporter{% endif %} une liste de personnes ayant accès à un référentiel au sein d’une organisation.
redirect_from:
- /articles/viewing-people-with-access-to-your-repository
- /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: 01ee5b1844e32b4ba631fda67babaa9e9f8a982e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147066633"
---
## À propos de la liste des personnes ayant accès à votre dépôt

Vous pouvez utiliser ces informations pour aider à retirer des personnes, à collecter des données pour la conformité et pour d’autres vérifications de sécurité générales. 

{% ifversion fpt %} Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent également exporter une liste CSV des personnes ayant accès à un dépôt. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} ![ Vue d’ensemble de la gestion des accès](/assets/images/help/repository/manage-access-overview.png) {% else %} ![Liste des autorisations des personnes sur le dépôt](/assets/images/help/repository/repository-permissions-list.png) {% endif %}
## Affichage des personnes ayant accès à votre dépôt

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Vous pouvez voir une vue d’ensemble combinée des équipes et des personnes ayant accès à votre dépôt dans les paramètres de ce dernier. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories) ». {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## Exportation d’une liste des personnes ayant accès à votre dépôt

{% ifversion ghec %} {% note %}

**Remarque :** Seules les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent exporter une liste de personnes ayant accès à un dépôt. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. Cliquez sur **Exporter au format CSV**.
  ![Onglet Personnes dans la barre latérale du dépôt](/assets/images/help/repository/export-repository-permissions.png) {% endif %}
