---
title: Autoriser les utilisateurs à supprimer des problèmes au sein de votre organisation
intro: Les propriétaires d’organisation peuvent autoriser certaines personnes à supprimer des problèmes dans les dépôts appartenant à votre organisation.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876819'
---
Par défaut, les problèmes ne peuvent pas être supprimés dans les dépôts d’une organisation. Un propriétaire d’organisation doit d’abord activer cette fonctionnalité pour tous les dépôts de l’organisation.

Une fois activée, les propriétaires d’organisation et les personnes qui ont un accès administrateur sur un dépôt appartenant à l’organisation peuvent supprimer des problèmes. Les personnes avec un accès administrateur sur un dépôt sont les membres de l’organisation et les collaborateurs externes qui ont reçu l’accès administrateur. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) » et « [Suppression d’un problème](/articles/deleting-an-issue) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Sous « Suppression d’un problème », sélectionnez **Autoriser les membres à supprimer des problèmes pour cette organisation**.
![Case à cocher pour autoriser les utilisateurs à supprimer des problèmes](/assets/images/help/settings/issue-deletion.png)
6. Cliquez sur **Enregistrer**.
