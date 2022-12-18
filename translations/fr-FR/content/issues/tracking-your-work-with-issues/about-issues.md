---
title: À propos des problèmes
intro: 'Utilisez {% data variables.product.prodname_github_issues %} pour suivre des idées, des commentaires, des tâches ou des bogues pour le travail sur {% data variables.product.company_short %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422731'
---
## Intégration à GitHub

Les problèmes vous permettent de suivre votre travail sur {% data variables.product.company_short %}, où le développement a lieu. Lorsque vous mentionnez un problème dans un autre problème ou une demande de tirage, la chronologie du problème reflète la référence croisée afin que vous puissiez effectuer le suivi du travail associé. Pour indiquer que le travail est en cours, vous pouvez lier un problème à une demande de tirage. Lorsque la demande de tirage fusionne, le problème lié se ferme automatiquement.

Pour plus d’informations sur les mots clés, consultez « [Liaison d’une demande de tirage à un problème](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) ».

## Créer rapidement des problèmes

Les problèmes peuvent être créés de différentes façons. Vous pouvez donc choisir la méthode la plus pratique pour votre workflow. Par exemple, vous pouvez créer un problème à partir d’un référentiel,{% ifversion fpt or ghec %} un élément d’une liste de tâches,{% endif %} une note dans un projet, un commentaire dans un problème ou une demande de tirage, une ligne de code spécifique ou une requête URL. Vous pouvez également créer un problème à partir de la plateforme de votre choix : via l’interface utilisateur web, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, les API GraphQL et REST, ou {% data variables.product.prodname_mobile %}. Pour plus d’informations, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue) ».

## Suivre le travail

Vous pouvez organiser et hiérarchiser les problèmes liés aux projets. {% ifversion fpt or ghec %} Pour suivre les problèmes dans le cadre d’un problème plus important, vous pouvez utiliser des listes de tâches.{% endif %} Pour catégoriser les problèmes connexes, vous pouvez utiliser des étiquettes et des jalons.

Pour plus d’informations sur les projets, consultez {% ifversion projects-v2 %}« [À propos des projets](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) ». {% else %}« [Organisation de votre travail avec des tableaux de projet](/issues/organizing-your-work-with-project-boards) ».{% endif %} {% ifversion fpt or ghec %}Pour plus d’informations sur les listes de tâches, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) ». {% endif %}Pour plus d’informations sur les étiquettes et les jalons, consultez « [Utilisation d’étiquettes et de jalons pour le suivi du travail](/issues/using-labels-and-milestones-to-track-work) ».

## Rester informé

Pour rester à jour sur les commentaires les plus récents dans un problème, vous pouvez vous abonner à un problème pour recevoir des notifications sur les derniers commentaires. Pour trouver rapidement des liens vers des problèmes récemment mis à jour auxquels vous êtes abonné, consultez votre tableau de bord. Pour plus d’informations, consultez « [À propos des notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications) » et « [À propos de votre tableau de bord personnel](/articles/about-your-personal-dashboard) ».

## Gestion de la communauté

Pour aider les contributeurs à ouvrir des problèmes significatifs qui fournissent les informations dont vous avez besoin, vous pouvez utiliser les {% ifversion fpt or ghec %}formulaires de problème et les {% endif %}modèles de problème. Pour plus d’informations, consultez « [Utilisation de modèles pour encourager les problèmes et demandes de tirage utiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests) ».

{% ifversion fpt or ghec %}Pour maintenir une communauté saine, vous pouvez signaler les commentaires qui enfreignent les [instructions de la communauté](/free-pro-team@latest/github/site-policy/github-community-guidelines) {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) ».{% endif %}

## Communication efficace

Vous pouvez @mention les collaborateurs qui ont accès à votre référentiel dans un problème afin d’attirer leur attention sur un commentaire. Pour lier des problèmes connexes dans le même dépôt, vous pouvez taper `#` suivi d’une partie du titre du problème, puis cliquer sur le problème que vous voulez lier. Pour communiquer la responsabilité, vous pouvez attribuer des problèmes. Si vous vous retrouvez à taper fréquemment le même commentaire, vous pouvez utiliser les réponses enregistrées.
{% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Syntaxe de base pour l’écriture et la mise en forme](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) » et « [Affectation de problèmes et demandes de tirage à d’autres utilisateurs GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users) ».
{% endif %} {% ifversion discussions %}
## Comparaison des problèmes et des discussions

Certaines conversations sont plus adaptées à {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} Pour obtenir des conseils sur l’utilisation d’un problème ou d’une discussion, consultez « [Communication sur GitHub](/github/getting-started-with-github/quickstart/communicating-on-github) ».

Lorsqu’une conversation dans un problème est mieux adaptée à une discussion, vous pouvez convertir le problème en discussion.
{% endif %}
