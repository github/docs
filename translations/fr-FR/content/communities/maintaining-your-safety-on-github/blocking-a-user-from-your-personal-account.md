---
title: Blocage de l’accès d’un utilisateur à votre compte personnel
intro: 'Vous pouvez bloquer un utilisateur afin de lui refuser l’accès à votre activité et à vos dépôts, et l’empêcher d’envoyer des notifications.'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your account
ms.openlocfilehash: bd657c221b007b6b574e97f54f2b330401b8fd9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422875'
---
## À propos du blocage d’utilisateurs

Vous pouvez bloquer un utilisateur dans les paramètres de votre compte ou à partir du profil de l’utilisateur. {% data variables.product.prodname_dotcom %} ne notifie pas l’utilisateur quand vous le bloquez. Si vous souhaitez éviter de contribuer au même projet qu’une personne que vous avez bloquée, vous pouvez afficher un avertissement en cas de détection d’un dépôt auquel un utilisateur bloqué a contribué. Pour plus d’informations, consultez « [Blocage d’un utilisateur dans les paramètres de votre compte](#blocking-a-user-in-your-account-settings) ». Vous pouvez toujours voir l’activité des utilisateurs bloqués dans les espaces partagés, et les utilisateurs bloqués peuvent supprimer leur contenu existant.

{% tip %}

**Conseil** : Si vous bloquez un utilisateur en raison d’une conversation houleuse, pensez à verrouiller la conversation pour que seuls les collaborateurs puissent ajouter des commentaires. Pour plus d’informations, consultez « [Verrouillage des conversations](/communities/moderating-comments-and-conversations/locking-conversations) ».

{% endtip %}

Quand vous bloquez un utilisateur :
- L’utilisateur cesse de vous suivre
- Vos dépôts ne sont plus visibles par l’utilisateur et sont désépinglés
- L’utilisateur ne peut pas rejoindre les organisations dont vous êtes propriétaire
- Les étoiles et les affectations de problèmes de l’utilisateur sont supprimées de vos dépôts
- Les votes de l’utilisateur sur les discussions ou les commentaires de vos dépôts sont supprimés
- L’utilisateur est supprimé en tant que collaborateur de vos dépôts
- Les contributions de l’utilisateur à vos dépôts ne sont plus comptées à son profit
- Vos contributions aux dépôts de l’utilisateur bloqué ne sont plus comptées à votre profit
- Vous êtes supprimé en tant que collaborateur de ses dépôts
- Son parrainage est annulé
- Toutes les invitations en attente de nomination d’un successeur pour un dépôt ou un compte, à destination ou en provenance de l’utilisateur bloqué, sont annulées
- L’utilisateur est supprimé comme collaborateur de tous les projets et des {% data variables.projects.projects_v1_boards %} vous appartenant
- Vous êtes supprimé comme collaborateur de tous les projets et des {% data variables.projects.projects_v1_boards %} appartenant à l’utilisateur

Une fois que vous avez bloqué un utilisateur, il ne peut plus :
- Vous envoyer de notifications, notamment via [@mentioning](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) votre nom d’utilisateur
- Commenter ou modifier les problèmes ou demandes de tirage (pull requests) que vous avez créées
- Réagir à vos commentaires sur les problèmes, les demandes de tirage et les commits
- Vous suivre ou voir votre contenu dans son flux d’activité
- Vous affecter à des problèmes ou des demandes de tirage
- Vous inviter en tant que collaborateur de ses dépôts
- Vous inviter en tant que collaborateur d’un avis de sécurité
- Effectuer de références croisées vers vos dépôts dans les commentaires
- Dupliquer (fork), voir, épingler ou marquer d’une étoile vos dépôts
- Vous parrainer
- Vous ajouter comme collaborateur sur ses projets et ses {% data variables.projects.projects_v1_boards %}
- Apporter des modifications sur vos projets publics et vos {% data variables.projects.projects_v1_boards %}

Dans les dépôts qui vous appartiennent, les utilisateurs bloqués ne peuvent pas non plus :
- Ouvrir des problèmes
- Envoyer, fermer ou fusionner des demandes de tirage
- Commenter des problèmes, des demandes de tirage ou des commits
- Ajouter ou modifier des pages wiki

## Blocage d’un utilisateur dans les paramètres de votre compte

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.blocked_users %}
3. Sous « Bloquer un utilisateur », tapez le nom d’utilisateur de l’utilisateur à bloquer, puis cliquez sur **Bloquer l’utilisateur**.
  ![Champ de nom d’utilisateur et bouton de blocage](/assets/images/help/settings/user-settings-block-user.png)
4. Si vous le souhaitez, vous pouvez afficher un avertissement quand vous visitez un dépôt dont un utilisateur bloqué est contributeur. Pour ce faire, sélectionnez **M’avertir quand un utilisateur bloqué a contribué à un dépôt**.
  ![Option d’avertissement relative aux utilisateurs bloqués](/assets/images/help/settings/warn-block-user.png)

## Blocage d’un utilisateur à partir de sa page de profil

{% data reusables.profile.user_profile_page_navigation %} {% data reusables.profile.user_profile_page_block_or_report %}
3. Cliquez sur **Bloquer l’utilisateur**.
   ![Boîte modale avec des options permettant de bloquer un utilisateur ou de signaler un abus](/assets/images/help/profile/profile-blockuser.png)

{% note %}

Utilisez {% data variables.contact.report_abuse %} pour nous contacter en cas de harcèlement. {% data reusables.policies.abuse %}

{% endnote %}

## Pour aller plus loin

- « [Affichage des utilisateurs dont vous avez bloqué l’accès à votre compte personnel](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account) »
- « [Déblocage de l’accès d’un utilisateur à votre compte personnel](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account) »
- « [Blocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization) »
- « [Déblocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization) »
- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) »
- « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) »
