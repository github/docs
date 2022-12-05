---
title: Gestion des modérateurs dans votre organisation
intro: 'Vous pouvez donner à une personne ou à une équipe de votre organisation la possibilité de bloquer et de limiter l’accès, en les affectant au rôle modérateur.'
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
ms.openlocfilehash: 9f4d3cc70560f3cd48f5ee9e1a31a452ae71b6aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886589'
---
## À propos des modérateurs d’organisation

Parfois, il est nécessaire de bloquer un contributeur ou de configurer des limites d’interaction pour votre organisation ou pour des référentiels individuels. En tant que propriétaire de l’organisation, vous pouvez effectuer ces tâches, mais vous pouvez déléguer ces tâches à d’autres membres de votre organisation. Pour cela, affectez le rôle de modérateur à un membre de l’organisation ou à une équipe.

Les modérateurs d’organisation peuvent :
* Bloquer et débloquer les utilisateurs de l’organisation. Pour plus d’informations, consultez « [Blocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization) ».
* Gérer les limites d’interaction de l’organisation. Pour plus d’informations, consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) ».
* Gérer les limites d’interaction du référentiel. Pour plus d’informations, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».
* Masquer les commentaires dans tous les référentiels publics appartenant à l’organisation. Pour plus d’informations, consultez « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments) ».

La désignation d’un modérateur d’organisation ne lui accorde pas d’autres privilèges que ceux répertoriés ci-dessus. Par exemple, une personne qui n’a accès en lecture qu’à un référentiel n’a pas accès en écriture en étant que modérateur.

Vous pouvez ajouter jusqu’à 10 personnes individuelles, ou équipes, en tant que modérateurs. Si vous avez déjà affecté 10 personnes et/ou équipes en tant qu’utilisateurs et que vous souhaitez en ajouter d’autres, vous pouvez regrouper des personnes dans une équipe de modérateurs, puis l’utiliser pour remplacer une ou plusieurs des affectations existantes. Pour plus d’informations, consultez « [Création d’une équipe](/organizations/organizing-members-into-teams/creating-a-team) ».

## Ajout d’un modérateur d’organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Accès » de la barre latérale, sélectionnez **{% octicon "report" aria-label="The report icon" %} Modération**, puis cliquez sur **Modérateurs**.
1. Sous **Modérateurs**, recherchez et sélectionnez la personne ou l’équipe à laquelle vous souhaitez attribuer le rôle de modérateur. Chaque personne ou équipe que vous sélectionnez va apparaître dans une liste située sous la barre de recherche. 
  ![Le champ de recherche et la liste des modérateurs](/assets/images/help/organizations/add-moderators.png)


## Suppression d’un modérateur d’organisation

Suivez les étapes 1 à 3 ci-dessus, puis cliquez sur **Supprimer le modérateur** en regard de la personne ou de l’équipe que vous souhaitez supprimer en tant que modérateur.
