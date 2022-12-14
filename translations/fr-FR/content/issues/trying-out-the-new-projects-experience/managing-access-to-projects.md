---
title: Gestion de l’accès aux projets (bêta)
intro: Vous pouvez contrôler qui peut afficher, modifier ou gérer vos projets.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 2c50343bfe8e3fd4e65a9a39b798f355cf0f13bb
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128670"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-access"></a>À propos de l’accès aux projets

Les administrateurs de projets de niveau organisation peuvent gérer l’accès pour l’ensemble de l’organisation, les équipes, les membres individuels de l’organisation et les collaborateurs externes. 

Les administrateurs de projets de niveau utilisateur peuvent inviter des collaborateurs individuels et gérer leur accès.

Les administrateurs de projet peuvent également contrôler la visibilité de leur projet pour tout le monde sur Internet. Pour plus d’informations, consultez « [Gestion de la visibilité de vos projets](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects) ».

## <a name="managing-access-for-organization-level-projects"></a>Gestion de l’accès pour les projets de niveau organisation

### <a name="managing-access-for-everyone-in-your-organization"></a>Gestion de l’accès pour tous les membres de votre organisation

Le rôle de base par défaut est `write`, ce qui signifie que tout le monde dans l’organisation peut voir et modifier votre projet. Pour modifier l’accès au projet pour tous les membres de l’organisation, vous pouvez modifier le rôle de base. Les modifications apportées au rôle de base affectent uniquement les membres de l’organisation qui ne sont pas propriétaires de l’organisation et qui ne bénéficient pas d’un accès individuel.

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
2. Sous **Rôle de base**, sélectionnez le rôle par défaut.
   - **Aucun accès** : seuls les propriétaires et les utilisateurs de l’organisation disposant d’un accès individuel peuvent voir le projet. Les propriétaires de l’organisation sont également administrateurs du projet.
   - **Lecture** : tout le monde dans l’organisation peut voir le projet. Les propriétaires de l’organisation sont également administrateurs du projet.
   - **Écriture** : tout le monde dans l’organisation peut voir et modifier le projet. Les propriétaires de l’organisation sont également administrateurs du projet.
   - **Administrateur** : tout le monde dans l’organisation est administrateur du projet.

### <a name="managing-access-for-teams-and-individual-members-of-your-organization"></a>Gestion de l’accès pour les équipes et les membres individuels de votre organisation

Vous pouvez également ajouter des équipes, des collaborateurs externes et des membres individuels de l’organisation en tant que collaborateurs pour un projet de niveau organisation. Pour plus d’informations, consultez « [À propos des équipes](/organizations/organizing-members-into-teams/about-teams) ».

Vous ne pouvez inviter un utilisateur individuel à collaborer à votre projet de niveau organisation que s’il est déjà membre de l’organisation ou collaborateur externe sur au moins un dépôt de l’organisation.

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
2. Sous **Inviter des collaborateurs**, recherchez l’équipe ou l’utilisateur individuel que vous souhaitez inviter.
3. Sélectionnez le rôle du collaborateur.
   - **Lecture** : l’équipe ou l’individu peut voir le projet.
   - **Écriture** : l’équipe ou l’individu peut voir et modifier le projet.
   - **Administrateur** : l’équipe ou l’individu peut voir le projet, le modifier et ajouter de nouveaux collaborateurs.
4. Cliquez sur **Invite**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Gestion de l’accès d’un collaborateur existant sur votre projet

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
1. Sous **Gérer l’accès**, recherchez le ou les collaborateurs dont vous souhaitez modifier les autorisations.

   Vous pouvez utiliser les menus déroulants **Type** et **Rôle** pour filtrer la liste d’accès.

1. Modifiez le rôle du ou des collaborateurs ou cliquez sur {% octicon "trash" aria-label="the trash icon" %} pour supprimer le ou les collaborateurs.

## <a name="managing-access-for-user-level-projects"></a>Gestion de l’accès pour les projets de niveau utilisateur

### <a name="granting-a-collaborator-access-to-your-project"></a>Octroi de l’accès à votre projet à un collaborateur

{% note %}

Cela affecte uniquement les collaborateurs de votre projet, et non les dépôts de votre projet. Pour voir un élément du projet, quelqu’un doit disposer des autorisations requises sur le dépôt auquel l’élément appartient. Si votre projet inclut des éléments d’un dépôt privé, les personnes qui ne sont pas des collaborateurs du dépôt ne peuvent pas voir les éléments de ce dépôt. Pour plus d’informations, consultez « [Définition de la visibilité du dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) » et « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) ».

{% endnote %}

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
2. Sous **Inviter des collaborateurs**, recherchez l’utilisateur que vous souhaitez inviter.
3. Sélectionnez le rôle du collaborateur.
   - **Lecture** : l’individu peut voir le projet.
   - **Écriture** : l’individu peut voir et modifier le projet.
   - **Administrateur** : l’individu peut voir le projet, le modifier et ajouter de nouveaux collaborateurs.
4. Cliquez sur **Invite**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Gestion de l’accès d’un collaborateur existant sur votre projet

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
1. Sous **Gérer l’accès**, recherchez le ou les collaborateurs dont vous souhaitez modifier les autorisations.

   Vous pouvez utiliser le menu déroulant **Rôle** pour filtrer la liste d’accès.

1. Modifiez le rôle du ou des collaborateurs ou cliquez sur {% octicon "trash" aria-label="the trash icon" %} pour supprimer le ou les collaborateurs.
