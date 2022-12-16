---
title: Incorporation de commentaires dans votre demande de tirage
intro: 'Quand les réviseurs suggèrent des modifications dans une demande de tirage (pull request), vous pouvez incorporer automatiquement les modifications dans la demande de tirage ou ouvrir un problème pour suivre les suggestions hors étendue.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /articles/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Incorporate feedback
ms.openlocfilehash: b94c7ddc682b1e53077770877140eb2a218a19de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133867'
---
## Application des changements suggérés

D’autres personnes peuvent suggérer des modifications spécifiques à votre demande de tirage. Vous pouvez appliquer ces modifications suggérées directement dans une demande de tirage si vous avez accès en écriture au référentiel. Si la demande de tirage a été créée à partir d’une duplication et que l’auteur a autorisé les modifications des responsables de maintenance, vous pouvez également appliquer des modifications suggérées si vous avez un accès en écriture au référentiel en amont. Pour plus d’informations, consultez « [Commentaire sur une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) » et « [Autorisation des modifications apportées à une branche de demande de tirage créée à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) ».

Pour incorporer rapidement plusieurs modifications suggérées dans une validation unique, vous pouvez également appliquer des modifications suggérées en tant que lot. L’application d’une modification suggérée ou d’un lot de modifications suggérées crée une validation unique sur la branche de comparaison de la demande de tirage.

Chaque personne qui a suggéré une modification incluse dans la validation sera co-auteur de la validation. La personne qui applique les modifications suggérées sera co-auteur et validateur de la validation. Pour plus d’informations sur le terme validateur dans Git, consultez « [Bases de Git - Affichage de l’historique des validations](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) » sur le site du livre _Pro Git_.

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste des demandes de tirage, cliquez sur la demande de tirage à laquelle vous souhaitez appliquer une modification suggérée.
3. Accédez à la première modification suggérée que vous souhaitez appliquer.
    - Pour appliquer la modification dans sa propre validation, cliquez sur **Valider la suggestion**.
  ![Bouton Valider la suggestion](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Pour ajouter la suggestion à un lot de modifications, cliquez sur **Ajouter une suggestion au lot**. Continuez à ajouter les modifications suggérées que vous souhaitez inclure dans une validation unique. Une fois que vous avez terminé d’ajouter des modifications suggérées, cliquez sur **Valider les suggestions**.
  ![Bouton Ajouter une suggestion au lot](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. Dans le champ de message de validation, tapez un message de validation court et descriptif qui indique la modification que vous avez apportée au fichier ou aux fichiers.
![Champ du message de commit](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Cliquez sur **Valider les modifications.** 
![Bouton Valider les modifications](/assets/images/help/pull_requests/commit-changes-button.png)

## Demander une révision

{% data reusables.pull_requests.re-request-review %}

## Ouverture d’un problème pour une suggestion hors étendue

Si quelqu’un suggère des modifications à votre demande de tirage et que les modifications sont hors de l’étendue de la demande de tirage, vous pouvez ouvrir un nouveau problème pour suivre les commentaires. Pour plus d’informations, consultez « [Ouverture d’un problème à partir d’un commentaire](/github/managing-your-work-on-github/opening-an-issue-from-a-comment) ».

## Pour aller plus loin

- « [À propos des révisions de demande de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews) »
- « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) »
- « [Commentaires sur une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) »
- « [Demande d’une révision de demande de tirage](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review) »
- « [Ouverture d’un problème à partir d’un commentaire](/github/managing-your-work-on-github/opening-an-issue-from-a-comment) »
