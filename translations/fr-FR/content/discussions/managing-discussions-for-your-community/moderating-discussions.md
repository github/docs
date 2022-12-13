---
title: Modération de discussions
intro: 'Vous pouvez promouvoir une collaboration saine en marquant les commentaires en tant que réponses, en ouvrant ou fermant des discussions, en convertissant des problèmes en discussions et en modifiant ou supprimant des commentaires, des discussions et des catégories qui ne sont pas en phase avec{% ifversion fpt or ghec %} le code de conduite de votre communauté{% elsif ghes > 3.5 %} les directives de contribution de l’organisation{% endif %}.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
ms.openlocfilehash: 4d09537a3c38d2eb9ac2650c48f2c44c1b0cbd95
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164472'
---
## À propos de la modération de discussions

{% data reusables.discussions.about-discussions %} Si vous avez des autorisations de tri sur un dépôt, vous pouvez aider à modérer les discussions de ce dépôt en marquant les commentaires comme des réponses, en verrouillant les discussions qui ne sont plus utiles ou qui sont préjudiciables à la communauté et en convertissant les problèmes en discussions quand une idée est encore en phase initiale de développement. De même, si vous disposez d’une autorisation de triage sur le dépôt source des discussions de l’organisation, vous pouvez modérer les discussions pour cette organisation.

## Marquage d’un commentaire comme une réponse

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Verrouillage de discussions

Vous pouvez verrouiller une conversation quand elle n’est pas constructive, ou qu’elle enfreint le code de conduite de votre communauté ou les [directives pour la communauté](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. Vous pouvez également verrouiller une conversation pour empêcher les commentaires sur une discussion que vous voulez utiliser comme annonce pour la communauté. Quand vous verrouillez une conversation, les personnes dotées d’un accès en écriture au dépôt, ou au dépôt source pour les discussions de l’organisation, peuvent quand même commenter la discussion.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. Dans la liste des discussions, cliquez sur la discussion à verrouiller.
  ![Verrouiller la discussion](/assets/images/help/discussions/unanswered-discussion.png)
1. Dans la marge droite d’une discussion, cliquez sur **Verrouiller la conversation**.
1. Lisez les informations sur le verrouillage des conversations et cliquez sur **Verrouiller la conversation sur cette discussion**.
1. Quand vous êtes prêt à déverrouiller la conversation, cliquez sur **Déverrouiller la conversation**, puis sur **Déverrouiller la conversation sur cette discussion**.

## Conversion d’un problème en discussion

Quand vous convertissez un problème en discussion, la discussion est automatiquement créée à partir du contenu du problème. Les personnes dotées d’un accès en écriture à un dépôt, ou au dépôt source pour les discussions de l’organisation, peuvent convertir en bloc des problèmes en fonction des étiquettes. Pour plus d’informations, consultez « [Gestion des discussions](/discussions/managing-discussions-for-your-community/managing-discussions) ».

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.repositories.sidebar-issues %}
1. Dans la liste des problèmes, cliquez sur le problème à convertir.
1. Dans la marge droite d’un problème, cliquez sur **Convertir en discussion**.
1. Sélectionnez le menu déroulant **Choisir une catégorie** et cliquez sur une catégorie pour votre discussion.
1. Cliquez sur **Je comprends, convertir ce problème en discussion**.

{% ifversion discussions-hide-comments-on-block %}
## Blocage de l’accès d’un utilisateur à votre organisation

Les propriétaires et modérateurs de l’organisation peuvent bloquer un utilisateur de l’organisation si leurs commentaires ne correspondent pas au code de conduite de la communauté. Lorsque vous bloquez un utilisateur, il ne peut plus commenter les discussions. Vous pouvez également masquer tous les commentaires d’un utilisateur dans l’organisation. Pour plus d’informations, consultez « [Blocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization) ».

{% data reusables.organizations.blocking-a-user %} {% endif %}
