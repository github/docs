---
title: Autorisation de changer la visibilité des projets de votre organisation
intro: 'Les propriétaires d’organisation peuvent autoriser les membres disposant d’autorisations d’administration à ajuster la visibilité des {% data variables.projects.projects_v2_and_v1 %} de leur organisation.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108625'
---
## À propos des modifications de visibilité pour les projets

Vous pouvez limiter les personnes pouvant changer la visibilité des {% data variables.projects.projects_v2_and_v1 %} de votre organisation, notamment limiter les membres pouvant changer les {% data variables.projects.projects_v2_and_v1 %} de privé à public. 

Vous pouvez limiter la capacité à changer la visibilité des {% data variables.projects.project_v2_and_v1 %} aux seuls propriétaires de l’organisation, ou vous pouvez autoriser toute personne avec des autorisations d’administration octroyées à changer la visibilité.

{% ifversion project-visibility-policy %} Cette option risque de ne pas être disponible si un propriétaire d’entreprise limite les modifications de visibilité pour les {% data variables.projects.projects_v2_and_v1 %} au niveau de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies pour les projets dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise) ».
{% endif %}

## Autoriser les membres à modifier les visibilités des projets

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "table" aria-label="The table icon" %} Projets**.
1. Pour autoriser les membres à ajuster la visibilité de projets, sélectionnez **Autoriser les membres à changer les visibilités des projets de cette organisation**.
  ![Capture d’écran montrant la case à cocher pour définir les changements de visibilité](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. Cliquez sur **Enregistrer**.

## Pour aller plus loin

{% ifversion projects-v2 %}
- « [Gestion de la visibilité de vos {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects) » {%- endif %}{%- ifversion projects-v1 %}
- « [Changement de la visibilité d’un {% data variables.product.prodname_project_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility) » {% endif %}
