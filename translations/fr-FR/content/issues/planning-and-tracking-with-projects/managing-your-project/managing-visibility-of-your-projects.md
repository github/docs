---
title: 'Gestion de la visibilité de vos {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Découvrez comment définir votre {% data variables.projects.project_v2 %} avec une visibilité privée ou publique.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108769'
---
## À propos de la visibilité des projets

Les projets peuvent être publics ou privés. Pour les projets publics, tout le monde sur Internet peut voir le projet. Pour les projets privés, seuls les utilisateurs disposant au moins d’un accès en lecture peuvent voir le projet.

Seule la visibilité du projet est concernée. Pour voir un élément du projet, quelqu’un doit disposer des autorisations requises sur le dépôt auquel l’élément appartient. Si votre projet contient des éléments provenant d’un référentiel privé, les personnes qui ne sont pas des collaborateurs du référentiel ne peuvent pas voir les éléments de celui-ci.

![Projet avec élément masqué](/assets/images/help/projects/hidden-items.png)

Les administrateurs de projet et les propriétaires d’organisation peuvent contrôler la visibilité des projets. Les propriétaires de l’organisation{% ifversion project-visibility-policy %} et les propriétaires d’entreprise{% endif %} peuvent restreindre la possibilité de modifier la visibilité du projet aux propriétaires de l’organisation uniquement.

Dans les projets publics et privés, les insights sont visibles uniquement par les utilisateurs avec des autorisations en écriture pour le projet.

Dans les projets privés appartenant à une organisation, les avatars des utilisateurs qui effectuent des mises à jour du projet sont affichés dans l'interface utilisateur du projet.

Les administrateurs de projet peuvent également gérer l’accès en écriture et administrateur à leur projet, et contrôler l’accès en lecture des utilisateurs individuels. Pour plus d’informations, consultez « [Gestion de l’accès à vos projets](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects) ».

## Modification de la visibilité d’un projet

{% data reusables.projects.project-settings %}
1. En regard de **Visibilité** dans la zone « Danger », sélectionnez **Privé** ou **Public**.
   ![Capture d’écran montrant les commandes de visibilité](/assets/images/help/projects-v2/visibility.png)

## Pour aller plus loin

- [Autorisation de changer la visibilité des projets de votre organisation](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
