---
title: Application de stratégies pour les projets dans votre entreprise
intro: 'Vous pouvez appliquer des stratégies pour {% data variables.projects.projects_v2_and_v1 %} au sein des organisations de votre entreprise ou autoriser la définition de stratégies dans chaque organisation.'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Project board policies
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108281'
---
## À propos des stratégies pour les projets dans votre entreprise

Vous pouvez appliquer des stratégies pour contrôler la façon dont les membres de l’entreprise gèrent des {% data variables.projects.projects_v2_and_v1 %}, ou vous pouvez autoriser les propriétaires d’organisation à gérer des stratégies pour les {% data variables.projects.projects_v2_and_v1 %} au niveau de l’organisation.{% ifversion project-visibility-policy %}

Certaines stratégies s’appliquent à la fois à l’option {% data variables.product.prodname_projects_v2 %}, la nouvelle expérience de projets et les données, et à l’option {% data variables.product.prodname_projects_v1 %}, l’expérience précédente, tandis que d’autres s’appliquent uniquement à l’option {% data variables.product.prodname_projects_v1 %}. Pour plus d’informations sur chaque expérience, consultez « [À propos de l’expérience {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) » et « [À propos de l’expérience {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) ».
{% else %}Pour plus d’informations, consultez « [À propos des tableaux de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) ».{% endif %}

## Application d’une stratégie pour les projets à l’échelle de l’organisation

Dans toutes les organisations appartenant à votre entreprise, vous pouvez activer ou désactiver les tableaux de projet à l’échelle de l’organisation ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Sous « Projets d’organisation », passez en revue les informations relatives à la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Sous « Projets d’organisation », utilisez le menu déroulant et choisissez une stratégie.
  ![Menu déroulant avec les options de stratégie de tableau de projet pour les organisations](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## Application d’une stratégie pour les modifications de visibilité à des projets

Dans toutes les organisations appartenant à votre entreprise, vous pouvez activer ou désactiver la possibilité, pour les personnes disposant d’un accès administrateur à un projet, de modifier la visibilité du projet, ou vous pouvez autoriser les propriétaires à administrer le paramètre au niveau de l’organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. Sous « Autorisation de modification de la visibilité d’un projet », passez en revue les informations relatives à la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Sélectionnez le menu déroulant, puis cliquez sur une stratégie.

   ![Capture d’écran du menu déroulant permettant de configurer la stratégie « Autorisation de modification de la visibilité d’un projet »](/assets/images/help/business-accounts/project-visibility-change-drop-down.png) {% endif %}

{% ifversion projects-v1 %}
## Application de stratégies pour l’expérience {% data variables.product.prodname_projects_v1 %}

Certaines stratégies s’appliquent uniquement à l’expérience {% data variables.product.prodname_projects_v1 %}.

### Application d’une stratégie pour les projets de dépôt

Dans toutes les organisations appartenant à votre entreprise, vous pouvez activer ou désactiver les projets à niveau du dépôt ou autoriser les propriétaires à administrer le paramètre au niveau de l’organisation.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Sous « Projets de dépôt », passez en revue les informations relatives à la modification du paramètre. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Sous « Projets de dépôt », utilisez le menu déroulant et choisissez une stratégie.

   ![Menu déroulant avec les options de stratégie de tableau de projet de dépôt](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png) {% endif %}
