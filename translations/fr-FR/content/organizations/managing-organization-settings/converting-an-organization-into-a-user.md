---
title: Conversion d’une organisation en utilisateur
intro: 'Il n’est pas possible de convertir une organisation en compte personnel, mais vous pouvez créer un compte personnel et transférer les référentiels de l’organisation vers celui-ci.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149798'
---
{% ifversion fpt or ghec %}

{% note %}

**Remarque** : quand vous supprimez un compte, le nom d’utilisateur ne peut pas être réutilisé pendant 90 jours à partir du jour de la suppression. Pour réutiliser immédiatement le nom d’utilisateur d’une organisation, vous devez changer le nom d’utilisateur avant de supprimer l’organisation.

 {% endnote %}

1. [Inscrivez-vous](/articles/signing-up-for-a-new-github-account) pour obtenir un nouveau compte sur GitHub.
2. [Définissez le rôle de l’utilisateur sur Propriétaire](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} au nouveau compte personnel.
4. [Transférez chaque dépôt d’organisation](/articles/how-to-transfer-a-repository) vers le nouveau compte personnel.
5. [Renommez l’organisation](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) pour que le nom d’utilisateur actuel soit disponible.
6. [Renommez l’utilisateur](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) avec le nom de l’organisation.
7. [Supprimez l’organisation](/organizations/managing-organization-settings/deleting-an-organization-account).


{% else %}

1. Inscrivez-vous pour avoir un nouveau compte personnel GitHub Enterprise.
2. [Définissez le rôle de l’utilisateur sur Propriétaire](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} au nouveau compte personnel.
4. [Transférez chaque dépôt d’organisation](/articles/how-to-transfer-a-repository) vers le nouveau compte personnel.
5. [Supprimez l’organisation](/articles/deleting-an-organization-account).
6. [Renommez l’utilisateur](/articles/changing-your-github-username) avec le nom de l’organisation.

{% endif %}
