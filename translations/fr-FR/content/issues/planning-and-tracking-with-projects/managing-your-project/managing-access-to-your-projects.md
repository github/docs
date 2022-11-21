---
title: 'Gestion de l’accès à vos {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} access'
intro: 'Découvrez comment gérer l’accès de l’équipe et de chacun à votre {% data variables.projects.project_v2 %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 9c414ab3bfbbd9bbf488a73e5dd2600458074914
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108548'
---
## À propos de l’accès aux projets

Les administrateurs de projets de niveau organisation peuvent gérer l’accès pour l’ensemble de l’organisation, les équipes, les membres individuels de l’organisation et les collaborateurs externes. 

Les administrateurs de projets de niveau utilisateur peuvent inviter des collaborateurs individuels et gérer leur accès.

Les administrateurs de projet peuvent également contrôler la visibilité de leur projet pour tout le monde sur Internet. Pour plus d’informations, consultez « [Gestion de la visibilité de vos projets](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects) ».

## Gestion de l’accès pour les projets de niveau organisation

### Gestion de l’accès pour tous les membres de votre organisation

Le rôle de base par défaut est `write`, ce qui signifie que tout le monde dans l’organisation peut voir et modifier votre projet. Pour modifier l’accès au projet pour tous les membres de l’organisation, vous pouvez modifier le rôle de base. Les modifications apportées au rôle de base affectent uniquement les membres de l’organisation qui ne sont pas propriétaires de l’organisation et qui ne bénéficient pas d’un accès individuel.

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
   ![Capture d’écran montrant l’élément « Gérer l’accès »](/assets/images/help/projects-v2/manage-access.png)
2. Sous **Rôle de base**, sélectionnez le rôle par défaut.
   ![Capture d’écran montrant le menu de rôles de base](/assets/images/help/projects-v2/base-role.png)
   - **Aucun accès** : seuls les propriétaires et les utilisateurs de l’organisation disposant d’un accès individuel peuvent voir le projet. Les propriétaires de l’organisation sont également administrateurs du projet.
   - **Lecture** : tout le monde dans l’organisation peut voir le projet. Les propriétaires de l’organisation sont également administrateurs du projet.
   - **Écriture** : tout le monde dans l’organisation peut voir et modifier le projet. Les propriétaires de l’organisation sont également administrateurs du projet.
   - **Administrateur** : tout le monde dans l’organisation est administrateur du projet.

### Gestion de l’accès pour les équipes et les membres individuels de votre organisation

Vous pouvez également ajouter des équipes, des collaborateurs externes et des membres individuels de l’organisation en tant que collaborateurs pour un projet de niveau organisation. Pour plus d’informations, consultez « [À propos des équipes](/organizations/organizing-members-into-teams/about-teams) ».

{% ifversion projects-v2-add-to-team %}

Si vous accordez à une équipe des autorisations de lecture ou plus élevées pour un projet, le projet s’affiche également sur la page des projets de l’équipe. Vous pouvez aussi ajouter des projets à une équipe sur la page des projets de l’équipe. Pour plus d’informations, consultez « [Ajout de votre projet à une équipe](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team) ».  

{% endif %}

Vous ne pouvez inviter un utilisateur individuel à collaborer à votre projet de niveau organisation que s’il est déjà membre de l’organisation ou collaborateur externe sur au moins un dépôt de l’organisation.

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
   ![Capture d’écran montrant l’élément « Gérer l’accès »](/assets/images/help/projects-v2/manage-access.png)
2. Sous **Inviter des collaborateurs**, recherchez l’équipe ou l’utilisateur individuel que vous souhaitez inviter.
   ![Capture d’écran montrant la recherche d’un collaborateur](/assets/images/help/projects-v2/access-search.png)
3. Sélectionnez le rôle du collaborateur.
   ![Capture d’écran montrant la sélection d’un rôle](/assets/images/help/projects-v2/access-role.png)
   - **Lecture** : l’équipe ou l’individu peut voir le projet.
   - **Écriture** : l’équipe ou l’individu peut voir et modifier le projet.
   - **Administrateur** : l’équipe ou l’individu peut voir le projet, le modifier et ajouter de nouveaux collaborateurs.
4. Cliquez sur **Invite**.
   ![Capture d’écran montrant le bouton Inviter](/assets/images/help/projects-v2/access-invite.png)

### Gestion de l’accès d’un collaborateur existant sur votre projet

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
   ![Capture d’écran montrant l’élément « Gérer l’accès »](/assets/images/help/projects-v2/manage-access.png)
1. Sous **Gérer l’accès**, recherchez le ou les collaborateurs dont vous souhaitez modifier les autorisations.

   Vous pouvez utiliser les menus déroulants **Type** et **Rôle** pour filtrer la liste d’accès.
   ![Capture d’écran montrant un collaborateur](/assets/images/help/projects-v2/access-find-member.png)

1. Modifiez le rôle du ou des collaborateurs.
   ![Capture d’écran montrant le changement de rôle d’un collaborateur](/assets/images/help/projects-v2/access-change-role.png)
1. Si vous le souhaitez, cliquez sur **Supprimer** pour supprimer le ou les collaborateurs.
   ![Capture d’écran montrant la suppression d’un collaborateur](/assets/images/help/projects-v2/access-remove-member.png)

## Gestion de l’accès pour les projets de niveau utilisateur

### Octroi de l’accès à votre projet à un collaborateur

{% note %}

Cela affecte uniquement les collaborateurs de votre projet, et non les dépôts de votre projet. Pour voir un élément du projet, quelqu’un doit disposer des autorisations requises sur le dépôt auquel l’élément appartient. Si votre projet inclut des éléments d’un dépôt privé, les personnes qui ne sont pas des collaborateurs du dépôt ne peuvent pas voir les éléments de ce dépôt. Pour plus d’informations, consultez « [Définition de la visibilité du dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) » et « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) ».

{% endnote %}

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
   ![Capture d’écran montrant l’élément « Gérer l’accès »](/assets/images/help/projects-v2/manage-access.png)
2. Sous **Inviter des collaborateurs**, recherchez l’utilisateur que vous souhaitez inviter.
   ![Capture d’écran montrant la recherche d’un collaborateur](/assets/images/help/projects-v2/access-search.png)
3. Sélectionnez le rôle du collaborateur.
   ![Capture d’écran montrant la sélection d’un rôle](/assets/images/help/projects-v2/access-role.png)
   - **Lecture** : l’individu peut voir le projet.
   - **Écriture** : l’individu peut voir et modifier le projet.
   - **Administrateur** : l’individu peut voir le projet, le modifier et ajouter de nouveaux collaborateurs.
4. Cliquez sur **Invite**.
   ![Capture d’écran montrant le bouton Inviter](/assets/images/help/projects-v2/access-invite.png)

### Gestion de l’accès d’un collaborateur existant sur votre projet

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
   ![Capture d’écran montrant l’élément « Gérer l’accès »](/assets/images/help/projects-v2/manage-access.png)
1. Sous **Gérer l’accès**, recherchez le ou les collaborateurs dont vous souhaitez modifier les autorisations.

   Vous pouvez utiliser les menus déroulants **Type** et **Rôle** pour filtrer la liste d’accès.
   ![Capture d’écran montrant un collaborateur](/assets/images/help/projects-v2/access-find-member.png)

1. Modifiez le rôle du ou des collaborateurs.
   ![Capture d’écran montrant le changement de rôle d’un collaborateur](/assets/images/help/projects-v2/access-change-role.png)
1. Si vous le souhaitez, cliquez sur **Supprimer** pour supprimer le ou les collaborateurs.
   ![Capture d’écran montrant la suppression d’un collaborateur](/assets/images/help/projects-v2/access-remove-member.png)
