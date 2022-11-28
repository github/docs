---
title: Blocage de l’accès d’un utilisateur à votre organisation
intro: Les propriétaires et les modérateurs de l’organisation peuvent empêcher toute personne qui n’est pas membre de l’organisation de collaborer aux dépôts de l’organisation.
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your org
ms.openlocfilehash: 527ce4fcf92946836f7a3d93e5caf07193561d4b
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164354'
---
Vous pouvez bloquer les personnes non-membres à partir des paramètres de votre organisation ou à partir d’un commentaire spécifique effectué par un utilisateur. Quand vous bloquez un utilisateur dans un commentaire, vous pouvez lui envoyer une notification indiquant qu’il a été bloqué et pourquoi. Sinon, l’utilisateur ne reçoit aucune notification lui indiquant que vous l’avez bloqué. Les utilisateurs bloqués peuvent toujours supprimer leur contenu existant.

{% data reusables.organizations.blocking-a-user %}

{% tip %}

**Conseil** : Si vous bloquez un utilisateur en raison d’une conversation houleuse, pensez à verrouiller la conversation pour que seuls les collaborateurs puissent ajouter des commentaires. Pour plus d’informations, consultez « [Verrouillage des conversations](/communities/moderating-comments-and-conversations/locking-conversations) ».

{% endtip %}

Au moment où vous bloquez l’accès d’un utilisateur à votre organisation :
- L’utilisateur ne peut plus voir les dépôts de votre organisation
- Les étoiles et les affectations de problèmes de l’utilisateur sont supprimées de vos dépôts
- Les votes de l’utilisateur sur les discussions ou les commentaires dans les dépôts de votre organisation sont supprimés
- L’utilisateur est supprimé en tant que collaborateur dans les dépôts de votre organisation
- Les contributions de l’utilisateur aux dépôts de votre organisation ne sont plus comptées à son profit
- Toutes les invitations en attente pour l’accès à un dépôt ou une organisation, et qui sont adressées à l’utilisateur bloqué, sont annulées

Une fois que vous avez bloqué l’accès d’un utilisateur à votre organisation, il ne peut plus :
- Effectuer de références croisées vers les dépôts de votre organisation dans les commentaires
- Dupliquer, voir, épingler ou marquer d’une étoile les dépôts de votre organisation

Dans les dépôts de votre organisation, les utilisateurs bloqués ne peuvent pas non plus :
- Ouvrir des problèmes
- Envoyer, fermer ou fusionner des demandes de tirage
- Commenter des problèmes, des demandes de tirage ou des commits
- Ajouter ou modifier des pages wiki

## Blocage d’un utilisateur dans un commentaire

1. Accédez au commentaire dont vous souhaitez bloquer l’auteur.
2. Dans le coin supérieur droit du commentaire, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Bloquer l’utilisateur**.
![Icône de menu kebab horizontal et menu de modération des commentaires montrant l’option de blocage de l’utilisateur](/assets/images/help/repository/comment-menu-block-user.png)
3. Si vous souhaitez limiter la durée du blocage, utilisez le menu déroulant Bloquer l’utilisateur, puis sélectionnez la durée pendant laquelle vous souhaitez bloquer l’utilisateur.
![Limitation de la durée du blocage dans le menu déroulant Bloquer l’utilisateur](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. Si vous souhaitez masquer tous les commentaires faits par l’utilisateur dans l’organisation, sélectionnez **Masquer les commentaires de cet utilisateur**, puis choisissez un motif.
![Envoi d’une notification dans le menu déroulant Bloquer l’utilisateur](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. Si vous souhaitez notifier à l’utilisateur la raison pour laquelle il est bloqué, sélectionnez **Envoyer une notification à cet utilisateur**.
![Envoi d’une notification dans le menu déroulant Bloquer l’utilisateur](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. Pour bloquer l’utilisateur, cliquez sur **Bloquer l’utilisateur à partir de l’organisation** ou sur **Bloquer l’utilisateur à partir de l’organisation et envoyer un message**.
![Bouton Bloquer l’utilisateur](/assets/images/help/organizations/org-block-user-button-in-comment.png)

## Blocage d’un utilisateur dans les paramètres de l’organisation

1. Pour bloquer un membre de l’organisation, vous devez d’abord [supprimer l’utilisateur](/articles/removing-a-member-from-your-organization) de l’organisation.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
6. Sous « Bloquer un utilisateur », tapez le nom d’utilisateur de l’utilisateur à bloquer.
![Champ Nom d’utilisateur](/assets/images/help/organizations/org-block-username-field.png)
7. Si vous souhaitez limiter la durée du blocage, utilisez le menu déroulant Options de blocage, puis sélectionnez la durée pendant laquelle vous souhaitez bloquer l’utilisateur.
![Menu déroulant Options de blocage](/assets/images/help/organizations/org-block-options-menu.png)
8. Cliquez sur **Bloquer l’utilisateur**.
![Bouton de blocage](/assets/images/help/organizations/org-block-user-button.png)

## Pour aller plus loin

- « [Affichage des utilisateurs dont vous avez bloqué l’accès à votre organisation](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization) »
- « [Déblocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization) »
- « [Blocage de l’accès d’un utilisateur à votre compte personnel](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account) »
- « [Déblocage de l’accès d’un utilisateur à votre compte personnel](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account) »
- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) »
