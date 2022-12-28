---
title: Commentaires sur une demande de tirage
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: 'Une fois que vous avez ouvert une demande de tirage (pull request) dans un dépôt, les collaborateurs ou les membres de l’équipe peuvent commenter la comparaison des fichiers entre les deux branches spécifiées ou laisser des commentaires généraux sur le projet dans son ensemble.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578955'
---
## À propos des commentaires sur une demande de tirage

Vous pouvez commenter l’onglet **Conversation** d’une demande de tirage pour laisser des commentaires généraux, questions ou propriétés. Vous pouvez également suggérer des modifications que l’auteur de la demande de tirage peut appliquer directement à partir de votre commentaire.

![Conversation de demande de tirage](/assets/images/help/pull_requests/conversation.png)

Vous pouvez également commenter des sections spécifiques d’un fichier sous l’onglet **Fichiers modifiés** d’une demande de tirage sous forme de commentaires de ligne individuels ou dans le cadre d’une [révision de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews). L’ajout de commentaires en ligne est un excellent moyen de discuter des questions d’implémentation ou de fournir des commentaires à l’auteur.

Pour plus d’informations sur l’ajout de commentaires de ligne à une évaluation de demande de tirage (pull request), consultez « [Évaluation des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) ».

{% note %}

**Note :** si vous répondez à une demande de tirage par e-mail, votre commentaire est ajouté sous l’onglet **Conversation** et ne fait pas partie d’une révision de demande de tirage.

{% endnote %}

Pour répondre à un commentaire en ligne existant, vous devez accéder au commentaire sous l’onglet **Conversation** ou **Fichiers modifiés** et ajouter un commentaire en ligne supplémentaire en dessous.

{% tip %}

**Conseils :**
- Les commentaires de demande de tirage prennent en charge la même [mise en forme](/categories/writing-on-github) que les commentaires classiques sur {% data variables.product.product_name %}, comme les @mentions, emojis et références.
- Vous pouvez ajouter des réactions aux commentaires des demandes de tirage sous l’onglet **Fichiers modifiés**.

{% endtip %}

## Ajout de commentaires en ligne à une demande de tirage

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste des demandes de tirage, cliquez sur la demande de tirage dans laquelle vous souhaitez laisser des commentaires en ligne.
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. Lorsque vous avez terminé, cliquez sur **Ajouter un commentaire unique**.
  ![Fenêtre de commentaire en ligne](/assets/images/help/commits/inline-comment.png)

Toute personne consultant la demande de tirage ou le référentiel sera informée de votre commentaire.

{% data reusables.pull_requests.resolving-conversations %}

## Pour aller plus loin

- « [Écriture sur GitHub](/github/writing-on-github) » {% ifversion fpt or ghec %}- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) » {% endif %}
