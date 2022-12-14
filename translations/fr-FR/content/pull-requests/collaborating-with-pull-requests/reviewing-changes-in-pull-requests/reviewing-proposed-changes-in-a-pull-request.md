---
title: Révision des changements proposés dans une demande de tirage
intro: "Dans une demande de tirage (pull request), vous pouvez examiner et discuter des commits, des fichiers modifiés et des différences (ou «\_diff\_») entre les fichiers dans la base et comparer les branches."
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: f4d9e710a628b8c3c47c8816dc3c183328894958
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108340'
---
## À propos de la révision des demandes de tirage

Vous pouvez réviser des changements dans une demande de tirage, fichier par fichier. Quand vous révisez des fichiers dans une demande de tirage, vous pouvez laisser des commentaires individuels sur des changements spécifiques. Une fois que vous avez terminé de réviser un fichier, vous pouvez le marquer comme consulté. Le fichier est alors réduit, ce qui vous permet d’identifier facilement ceux qu’il vous reste à réviser. Une barre de progression située dans l’en-tête de la demande de tirage indique le nombre de fichiers que vous avez consultés. Une fois que vous avez révisé le nombre de fichiers souhaité, vous pouvez approuver la demande de tirage ou demander des changements supplémentaires en envoyant votre révision avec un commentaire récapitulatif.

{% data reusables.search.requested_reviews_search_tip %}

## Démarrage d’une révision

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   Vous pouvez modifier l’aspect de la vue des différences sous cet onglet en cliquant sur {% octicon "gear" aria-label="The Settings gear" %} et en choisissant la vue unifiée ou fractionnée. Ce choix s’applique quand vous affichez les différences pour d’autres demandes de tirage.

   ![Paramètres de la vue des différences](/assets/images/help/pull_requests/diff-view-settings.png)

   Vous pouvez aussi choisir de masquer les différences d’espaces blancs. Ce choix s’applique uniquement à cette demande de tirage et reste le même pour votre prochaine consultation de cette page.
{% endif %}
1. Filtrez éventuellement les fichiers pour voir uniquement ceux que vous voulez réviser{% ifversion pr-tree-view %} ou utilisez l’arborescence des fichiers pour accéder à un fichier spécifique{% endif %}. Pour plus d’informations, consultez « [Filtrage des fichiers dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request) ».
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. Quand vous avez terminé, cliquez sur **Démarrer une révision**. Si vous avez déjà démarré une révision, vous pouvez cliquer sur **Ajouter un commentaire de révision**.

   ![Bouton Démarrer une révision](/assets/images/help/pull_requests/start-a-review-button.png)

Avant de soumettre votre révision, vos commentaires de ligne sont _en attente_ et uniquement visibles par vous. Vous pouvez modifier des commentaires en attente à tout moment avant de soumettre votre révision. Pour annuler une révision en attente, y compris tous ses commentaires en attente, faites défiler la page jusqu’à la fin de la chronologie sous l’onglet Conversation, puis cliquez sur **Annuler la révision**.

![Bouton Annuler la révision](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

Vous pouvez utiliser [{% data variables.product.prodname_github_codespaces %}](/codespaces/overview) pour tester, exécuter et réviser des demandes de tirage.

{% data reusables.codespaces.review-pr %}

Pour plus d’informations sur la révision des demandes de tirage dans {% data variables.product.prodname_github_codespaces %}, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} pour les demandes de tirage](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests) ».

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Révision des changements de dépendances

Si la demande de tirage contient des changements apportés aux dépendances, vous pouvez utiliser la révision des dépendances d’un fichier manifeste ou d’un fichier de verrouillage pour voir ce qui a changé et vérifier si les changements introduisent des vulnérabilités de sécurité. Pour plus d’informations, consultez « [Révision des changements de dépendances dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request) ».

{% data reusables.repositories.changed-files %}

1. À droite de l’en-tête d’un fichier manifeste ou d’un fichier de verrouillage, affichez la révision des dépendances en cliquant sur le bouton des différences enrichies **{% octicon "file" aria-label="The rich diff icon" %}** .

   ![Bouton des différences enrichies](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## Marquage d’un fichier comme consulté

Une fois que vous avez terminé de réviser un fichier, vous pouvez le marquer comme consulté. Il est alors réduit. Si le fichier change après que vous l’avez consulté, son marquage comme consulté est annulé.

{% data reusables.repositories.changed-files %}
2. À droite de l’en-tête du fichier que vous avez terminé de réviser, sélectionnez **Consulté**.

   ![Case à cocher Consulté](/assets/images/help/pull_requests/viewed-checkbox.png)

## Soumission de votre révision

Une fois que vous avez terminé de réviser tous les fichiers souhaités dans la demande de tirage, soumettez votre révision.

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. Sélectionnez le type de révision que vous voulez laisser :

   ![Cases d’option avec des options de révision](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - Sélectionnez **Commenter** pour laisser des commentaires généraux sans approuver explicitement les changements ni demander des changements supplémentaires.
    - Sélectionnez **Approuver** pour soumettre vos commentaires et approuver la fusion des changements proposés dans la demande de tirage.
    - Sélectionnez **Demander des changements** pour soumettre des commentaires à traiter avant de pouvoir fusionner la demande de tirage.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Pour aller plus loin

- « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) »
- « [Filtrage des demandes de tirage par état de révision](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status) »
