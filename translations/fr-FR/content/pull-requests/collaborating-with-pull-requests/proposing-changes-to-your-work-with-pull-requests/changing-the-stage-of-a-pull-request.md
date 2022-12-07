---
title: Modification de la phase d’une demande de tirage
intro: Vous pouvez marquer un brouillon de demande de tirage (pull request) comme étant prêt pour la révision ou convertir une demande de tirage en brouillon.
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the state
ms.openlocfilehash: 5ef2845e57518c4b66f13a804919f7bdea327040
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883294'
---
## Marquage d’une demande de tirage comme étant prête pour la révision

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

**Conseil :** vous pouvez également marquer une demande de tirage comme étant prête pour la révision à l’aide de {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [`gh pr ready`](https://cli.github.com/manual/gh_pr_ready) » dans la documentation {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez marquer comme étant prête pour la révision.
3. Dans la zone de fusion, cliquez sur **Prête pour la révision**.
  ![Bouton Prête pour la révision](/assets/images/help/pull_requests/ready-for-review-button.png)

## Conversion d’une demande de tirage en brouillon

Vous pouvez à tout moment convertir une demande de tirage en brouillon. Par exemple, si vous avez ouvert accidentellement une demande de tirage au lieu d’un brouillon, ou si vous avez reçu des commentaires à traiter sur votre demande de tirage, vous pouvez la convertir en brouillon pour indiquer que d’autres modifications sont nécessaires. Personne ne peut fusionner la demande de tirage tant que vous ne l’avez pas marquée comme étant prête pour la révision. Les personnes qui sont déjà abonnées aux notifications de la demande de tirage conservent leur abonnement lorsque vous la convertissez en brouillon.

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez convertir en brouillon.
3. Dans la barre latérale droite, sous « Réviseurs », cliquez sur **Convertir en brouillon**.
  ![Lien Convertir en brouillon](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Cliquez sur **Convertir en brouillon**.
  ![Confirmation Convertir en brouillon](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## Pour aller plus loin

- « [À propos des demandes de tirage (pull requests)](/github/collaborating-with-issues-and-pull-requests/about-pull-requests) »
