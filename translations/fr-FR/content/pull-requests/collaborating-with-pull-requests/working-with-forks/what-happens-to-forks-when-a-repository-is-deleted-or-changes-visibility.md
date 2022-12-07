---
title: "Que se passe-t-il avec les duplications quand un dépôt est supprimé ou que sa visibilité change\_?"
intro: La suppression de votre référentiel ou la modification de sa visibilité affecte les duplications de ce référentiel.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Deleted or changes visibility
ms.openlocfilehash: 95296f33d9163cd1171481386efd0a2351095c39
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191362'
---
{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Suppression d’un dépôt privé

Quand vous supprimez un dépôt privé, toutes ses duplications privées sont également supprimées.

{% ifversion fpt or ghes or ghec %}

## Suppression d’un dépôt public

Quand vous supprimez un référentiel public, l’une des duplications publiques existantes est choisie comme nouveau référentiel en amont. Tous les autres référentiels sont dupliqués à partir de ce nouveau référentiel en amont et les demande de tirage (pull request) suivantes se dirigent vers ce nouveau référentiel en amont.

{% endif %}

## Duplications privées et autorisations

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## Changement d’un dépôt public en dépôt privé

Si un dépôt public est rendu privé, ses duplications publiques sont séparées dans un nouveau réseau. Comme pour la suppression d’un référentiel public, une des duplications publiques existantes est choisie comme nouveau référentiel en amont et tous les autres référentiels sont dupliqués à partir de ce nouveau référentiel en amont. Les demandes de tirage suivantes sont poussées vers ce nouveau référentiel en amont.

En d’autres termes, les duplications d’un référentiel public restent publiques dans leur propre réseau de référentiels distinct, même après que le référentiel en amont soit devenu privé. Cela permet aux propriétaires de duplication de continuer à travailler et à collaborer sans interruption. Si les duplications publiques n’ont pas été déplacées dans un réseau distinct de cette façon, les propriétaires de ces duplications doivent obtenir les [autorisations d’accès](/articles/access-permissions-on-github) appropriées pour tirer les changements du référentiel en amont (maintenant privé) et lui envoyer des demandes de tirage, même s’ils n’avaient pas besoin de ces autorisations avant.

{% ifversion ghes or ghae %} Si un dépôt public a un accès en lecture Git anonyme activé et que le dépôt est rendu privé, toutes les duplications du dépôt perdent l’accès en lecture Git anonyme et ont à nouveau le paramètre désactivé par défaut. Si un dépôt dupliqué est rendu public, les administrateurs de dépôt peuvent réactiver l’accès en lecture Git anonyme. Pour plus d’informations, consultez « [Activation de l’accès en lecture Git anonyme pour un dépôt](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) ».
{% endif %}

### Suppression du dépôt privé

Si un dépôt public est rendu privé, puis supprimé, ses duplications publiques continuent d’exister dans un réseau distinct.

## Changement d’un dépôt privé en dépôt public

Si un référentiel privé est rendu public, chacune de ses duplications privées est transformée en référentiel privé autonome et devient le référentiel en amont de son propre nouveau réseau de référentiels. Les duplications privées ne sont jamais rendues publiques automatiquement, car elles peuvent contenir des commits sensibles qui ne doivent pas être exposés publiquement.

### Suppression du dépôt public

Si un dépôt privé est rendu public, puis supprimé, ses duplications privées continuent d’exister comme des dépôts privés autonomes dans des réseaux distincts.

{% endif %}

{% ifversion ghes or ghec or ghae %}

## Changement de la visibilité d’un dépôt interne



Si la stratégie de votre entreprise autorise la duplication, toute duplication d’un dépôt interne est privée. Si vous changez la visibilité d’un dépôt interne, toute duplication appartenant à une organisation ou un compte personnel reste privée.

### Suppression du dépôt interne

Si vous changez la visibilité d’un dépôt interne, puis supprimez le dépôt, les duplications continuent d’exister dans un réseau distinct.

{% endif %}

## Pour aller plus loin

- « [Définition de la visibilité du dépôt](/articles/setting-repository-visibility) »
- « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) »
- « [Gestion de la stratégie de duplication pour votre dépôt](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) »
- « [Gestion de la stratégie de duplication pour votre organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) »
- « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories) »
