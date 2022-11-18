---
title: Gestion de la stratégie de duplication pour votre référentiel
intro: 'Vous pouvez autoriser ou empêcher la duplication (fork) d’un dépôt privé{% ifversion ghae or ghes or ghec %} ou interne{% endif %} appartenant à une organisation.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
ms.openlocfilehash: 18355227ad40567de3824f3cc286763cd081e153
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132119'
---
Un propriétaire d’organisation doit autoriser les duplications de référentiels privés{% ifversion ghae or ghes or ghec %} et internes{% endif %} au niveau de l’organisation avant de pouvoir autoriser ou interdire les duplications pour un référentiel spécifique. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous « Fonctionnalités », sélectionnez **Autoriser la duplication**.
  ![Case à cocher permettant d’autoriser ou d’interdire la duplication d’un référentiel privé](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## Pour aller plus loin

- « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) »
- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
