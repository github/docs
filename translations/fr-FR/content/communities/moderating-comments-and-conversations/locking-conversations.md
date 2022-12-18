---
title: Verrouillage des conversations
intro: 'Les propriétaires et collaborateurs du dépôt, ainsi que les personnes ayant un accès en écriture à celui-ci, peuvent verrouiller les conversations concernant des problèmes, des demandes de tirage (pull request) et des commits de manière définitive ou temporaire, afin de désamorcer toute tension.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 986d23cb4fe9850cb6c6824e9a3f2c256b6fd4e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086553'
---
Vous pouvez verrouiller une conversation quand l’intégralité de celle-ci n’est pas constructive, ou qu’elle enfreint le code de conduite de votre communauté{% ifversion fpt or ghec %} ou les [recommandations relatives à la communauté](/free-pro-team@latest/github/site-policy/github-community-guidelines) de GitHub{% endif %}. Quand vous verrouillez une conversation, vous pouvez également spécifier un motif, qui est visible publiquement.

Le verrouillage d’une conversation crée un événement de chronologie visible par toute personne disposant d’un accès en lecture au dépôt. Toutefois, le nom d’utilisateur de la personne qui a verrouillé la conversation est visible uniquement par les personnes disposant d’un accès en écriture au dépôt. Pour les personnes qui ne disposent pas d’un accès en écriture, l’événement de chronologie est anonymisé.

![Événement de chronologie anonymisé pour une conversation verrouillée](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

Quand une conversation est verrouillée, seules les [personnes disposant d’un accès en écriture](/articles/repository-permission-levels-for-an-organization/) ainsi que les [propriétaires et collaborateurs du dépôt](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account) peuvent ajouter, masquer et supprimer des commentaires.

Pour rechercher des conversations verrouillées dans un dépôt qui n’est pas archivé, vous pouvez utiliser les qualificateurs de recherche `is:locked` et `archived:false`. Les conversations sont automatiquement verrouillées dans les dépôts archivés. Pour plus d’informations, consultez « [Recherche de problèmes et de demandes de tirage](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked) ».

1. Vous pouvez éventuellement écrire un commentaire expliquant pourquoi vous verrouillez la conversation.
2. Dans la marge de droite du problème ou de la demande de tirage (pull request), ou au-dessus de la zone de commentaire de la page de commit, cliquez sur **Verrouiller la conversation**.
![Lien Verrouiller la conversation](/assets/images/help/repository/lock-conversation.png)
3. Choisissez éventuellement un motif pour verrouiller la conversation.
![Menu du motif de verrouillage d’une conversation](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Lisez les informations sur le verrouillage des conversations, puis cliquez sur **Verrouiller la conversation pour ce problème**, **Verrouiller la conversation pour cette demande de tirage** ou **Verrouiller la conversation pour ce commit**.
![Boîte de dialogue de confirmation du verrouillage avec motif](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. Une fois que vous êtes prêt à déverrouiller la conversation, cliquez sur **Déverrouiller la conversation**.
![Lien Déverrouiller la conversation](/assets/images/help/repository/unlock-conversation.png)

## Pour aller plus loin

- « [Configuration de votre projet pour des contributions saines](/communities/setting-up-your-project-for-healthy-contributions) »
- « [Utilisation de modèles pour encourager les problèmes et demandes de tirage utiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests) »
- « [Gestion des commentaires perturbateurs](/communities/moderating-comments-and-conversations/managing-disruptive-comments) »{% ifversion fpt or ghec %}
- « [Gestion de votre sécurité sur {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github) »
- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) »
- « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) » {% endif %}
