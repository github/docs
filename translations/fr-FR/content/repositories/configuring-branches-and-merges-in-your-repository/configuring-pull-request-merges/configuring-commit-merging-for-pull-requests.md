---
title: Configuration de la fusion de validation pour les demandes de tirage
intro: 'Vous pouvez appliquer, autoriser ou désactiver la fusion avec une validation de fusion pour toutes les fusions de demandes de tirage sur {% data variables.product.product_location %} dans votre référentiel.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 322f74168935175a75f3a8f19cc4faca2cde174b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580738'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Sous {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}« Demandes de tirage »{% else %}« bouton Fusionner »{% endif %}, sélectionnez **Autoriser les validations de fusion**. Cela permet aux contributeurs de fusionner une demande de tirage avec un historique complet de validations.{% ifversion default-merge-squash-commit-message %} ![Capture d’écran des paramètres Demande de tirage avec la case à cocher Autoriser les validations de fusion mise en évidence](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %} ![Capture d’écran des paramètres Demande de tirage avec la case à cocher Autoriser les validations de fusion mise en évidence](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Ou si vous le souhaitez, sous **Autoriser les validations de fusion**, utilisez la liste déroulante pour choisir le format du message de validation présenté aux contributeurs lors de la fusion. Le message par défaut inclut le numéro et le titre de la demande de tirage. Par exemple : `Merge pull request #123 from patch-1`. Vous pouvez également choisir d’utiliser uniquement le titre de la demande de tirage, ou le titre et la description de la demande de tirage. 
![Capture d’écran de la liste déroulante des messages de validation par défaut mise en évidence](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

Si vous sélectionnez plusieurs méthodes de fusion, les collaborateurs peuvent choisir le type de fusion des validations à utiliser lorsqu’ils fusionnent une demande de tirage. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Pour aller plus loin

- « [À propos des fusions de demandes de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) »
- « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) »
