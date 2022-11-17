---
title: Suppression d’un problème
intro: Les personnes disposant des autorisations d’administrateur dans un référentiel peuvent supprimer définitivement un problème dans un référentiel.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 140bd1fdb272dd3203b993cf5f5f7038963fafe2
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146774571'
---
La possibilité de supprimer des problèmes dépend du fait que le référentiel appartient à un compte personnel ou à une organisation :
- Le seul compte qui peut supprimer des problèmes dans un référentiel appartenant à un compte personnel est ce compte lui-même.
- Seuls les comptes disposant des autorisations d’administrateur ou de propriétaire peuvent supprimer des problèmes dans un référentiel appartenant à une organisation.

  Pour supprimer un problème dans un référentiel appartenant à une organisation, un propriétaire d’organisation doit activer la suppression de problèmes pour les référentiels de l’organisation. Pour plus d’informations, consultez « [Autoriser les utilisateurs à supprimer des problèmes au sein de votre organisation](/articles/allowing-people-to-delete-issues-in-your-organization) » et « [Rôles de référentiel pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

Les collaborateurs ne reçoivent pas de notification quand des problèmes sont supprimés. Si des collaborateurs consultent l’URL d’un problème supprimé, un message leur indique que la page web n’est pas disponible (mais ils peuvent utiliser l’API pour déterminer qu’elle a été supprimée). Les personnes disposant d’autorisations d’administrateur ou de propriétaire dans le référentiel voient également le nom d’utilisateur de la personne qui a supprimé le problème et quand il a été supprimé.

1. Accédez au problème que vous souhaitez supprimer.
2. Dans la barre de droite, sous « Notifications », cliquez sur **Supprimer le problème**.
![Texte « Supprimer le problème » mis en surbrillance en bas de la barre latérale droite de la page du problème](/assets/images/help/issues/delete-issue.png)
4. Pour confirmer la suppression, cliquez sur **Supprimer ce problème**.

## Pour aller plus loin

- « [Création d’un lien entre une demande de tirage et un problème](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) »
