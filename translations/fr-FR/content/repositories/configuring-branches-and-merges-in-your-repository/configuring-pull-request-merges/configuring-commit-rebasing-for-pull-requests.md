---
title: Configuration du rebasage de validation pour les demandes de tirage
intro: 'Vous pouvez appliquer, autoriser ou désactiver le rebasage de commits pour toutes les fusions de demandes de tirage (pull request) sur {% data variables.product.product_location %} dans votre dépôt.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
ms.openlocfilehash: e2614349b5baab9be33d1fe6d80a99a78811d8df
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580526'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}« Demandes de tirage »{% else %}« Bouton Fusionner »{% endif %}, sélectionnez **Autoriser la fusion rebase**. Cela permet aux contributeurs de fusionner une demande de tirage en rebasant leurs validations individuelles sur la branche de base. 
{% ifversion default-merge-squash-commit-message %} ![Capture d’écran des paramètres Demande de tirage avec la case à cocher Autoriser la fusion rebase mise en évidence](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %} ![Capture d’écran des paramètres Demande de tirage avec la case à cocher Autoriser la fusion rebase mise en évidence](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Validations de demande de tirage avec rebase](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

Si vous sélectionnez également une autre méthode de fusion, les collaborateurs pourront choisir le type de validation de fusion lors de la fusion d’une demande de tirage. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
