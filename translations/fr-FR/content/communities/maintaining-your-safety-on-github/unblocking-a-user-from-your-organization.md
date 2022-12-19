---
title: Déblocage de l’accès d’un utilisateur à votre organisation
intro: 'Les propriétaires et modérateurs de l’organisation peuvent débloquer un utilisateur qui a été précédemment bloqué, en restaurant son accès aux dépôts de l’organisation.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
ms.openlocfilehash: 0c7099c21e3342717605f59a94e0025a7949b1cc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105426'
---
Une fois que vous avez débloqué l’accès d’un utilisateur à votre organisation, celui-ci peut contribuer aux dépôts de votre organisation.

Si vous avez sélectionné une durée de blocage spécifique pour l’utilisateur, il est automatiquement débloqué à la fin de cette période. Pour plus d’informations, consultez « [Blocage de l’accès d’un utilisateur à votre organisation](/articles/blocking-a-user-from-your-organization) ».

{% tip %}

**Conseil** : Les paramètres supprimés au moment où vous avez bloqué l’accès de l’utilisateur à votre organisation, par exemple l’état de collaboration, les étoiles et les suivis, ne sont pas restaurés quand vous débloquez l’utilisateur.

{% endtip %}

## Déblocage d’un utilisateur dans un commentaire

1. Accédez au commentaire dont vous souhaitez débloquer l’auteur.
2. Dans le coin supérieur droit du commentaire, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Débloquer l’utilisateur**.
![Icône de menu kebab horizontal et menu de modération des commentaires montrant l’option de déblocage de l’utilisateur](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Pour confirmer le déblocage de l’utilisateur, cliquez sur **OK**.

## Déblocage d’un utilisateur dans les paramètres de l’organisation


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
1. Sous « Utilisateurs bloqués », à côté de l’utilisateur à débloquer, cliquez sur **Débloquer**.
![Bouton Débloquer l’utilisateur](/assets/images/help/organizations/org-unblock-user-button.png)

## Pour aller plus loin

- « [Blocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization) »
- « [Blocage de l’accès d’un utilisateur à votre compte personnel](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account) »
- « [Déblocage de l’accès d’un utilisateur à votre compte personnel](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account) »
- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) »
