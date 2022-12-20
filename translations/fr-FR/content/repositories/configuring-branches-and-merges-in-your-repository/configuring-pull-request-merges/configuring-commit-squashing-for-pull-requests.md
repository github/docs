---
title: Configuration de la fusion Squash des validations pour les demandes de tirage
intro: 'Vous pouvez appliquer, autoriser ou désactiver le squashing de commits pour toutes les fusions de demandes de tirage (pull request) sur {% data variables.product.product_location %} dans votre dépôt.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 8d53a558163b6a847fa4fb509399b1e7b7c6c05c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580710'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Sous {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}« Demandes de tirage »{% else %}« bouton Fusionner »{% endif %}, sélectionnez **Autoriser la fusion Squash**. Cette option permet aux contributeurs de fusionner une demande de tirage en effectuant une fusion Squash de toutes les validations en une seule. Le message de validation par défaut présenté aux contributeurs lors de la fusion est le titre et le message de validation si la demande de tirage contient seulement 1 validation, ou le titre de la demande de tirage et la liste des validations si la demande de tirage contient 2 validations ou plus. {% ifversion ghes = 3.6 %} Pour toujours utiliser le titre de la demande de tirage quel que soit le nombre e validation dans la demande de tirage, sélectionnez **Choisir par défaut le titre de la demande de tirage pour les validations de fusion Squash**.{% endif %}{% ifversion default-merge-squash-commit-message %} ![Validations Squash de la demande de tirage](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Capture d’écran des paramètres Demande de tirage avec la case à cocher Autoriser les validations de fusion mise en évidence](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Validations Squash de la demande de tirage](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Ou si vous le souhaitez, sous **Autoriser la fusion Squash**, utilisez la liste déroulante pour choisir le format du message de validation Squash par défaut présenté aux contributeurs lors de la fusion. Le message par défaut utilise le titre et le message de la validation si la demande de tirage contient uniquement 1 validation, ou le titre de la demande de tirage et la liste des validations si la demande de tirage contient 2 validations ou plus. Vous pouvez également choisir d’utiliser uniquement le titre de la demande de tirage, le titre de la demande de tirage et les détails de la validation, ou le titre et la description de la demande de tirage.
![Capture d’écran de la liste déroulante des messages Squash par défaut mise en évidence](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

Si vous sélectionnez plusieurs méthodes de fusion, les collaborateurs peuvent choisir le type de fusion des validations à utiliser lorsqu’ils fusionnent une demande de tirage. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Pour aller plus loin

- « [À propos des fusions de demandes de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) »
- « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) »
