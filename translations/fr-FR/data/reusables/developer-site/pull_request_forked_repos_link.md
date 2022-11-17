---
ms.openlocfilehash: a314a101135f5b47bfd573b1be6d7867db4ac26d
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145133140"
---
#### Workflows dans des dépôts dupliqués

Les workflows ne s’exécutent pas dans des dépôts dupliqués par défaut. Vous devez activer GitHub Actions sous l’onglet **Actions** du dépôt dupliqué.

{% data reusables.actions.forked-secrets %} Le `GITHUB_TOKEN` dispose d’autorisations en lecture seule dans des dépôts dupliqués. Pour plus d’informations, consultez « [Authentification avec GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) ».

#### Événements de demande de tirage pour des dépôts dupliqués

Pour des demandes de tirage d’un dépôt dupliqué au dépôt de base, {% data variables.product.product_name %} envoie les événements `pull_request`, `issue_comment``pull_request_review_comment`, `pull_request_review` et `pull_request_target` au dépôt de base. Aucun événement de demande de tirage ne se produit sur le dépôt dupliqué.

{% ifversion fpt or ghec %} Quand un contributeur envoie pour la première fois une demande de tirage à un dépôt public, il se peut qu’un responsable de maintenance disposant d’un accès en écriture doive approuver les flux de travail en cours d’exécution sur la demande de tirage. Pour plus d’informations, consultez « [Approbation d’exécutions de workflow à partir de duplications publiques](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks) ».
{% endif %}

{% note %}

**Remarque :** les workflows ne s’exécutent pas sur des dépôts de base privés quand vous ouvrez une demande de tirage à partir d’un dépôt dupliqué.

{% endnote %}

{% note %}

**Remarque :** les workflows déclenchés par des demandes de tirage {% data variables.product.prodname_dependabot %} sont traités comme s’ils provenaient d’un dépôt dupliqué, et sont également sujets à ces restrictions.

{% endnote %}
