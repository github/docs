---
title: Gestion de la fusion automatique pour les demandes de tirage dans votre référentiel
intro: Vous pouvez autoriser ou interdire la fusion automatique des demandes de tirage dans votre référentiel.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883440'
---
## À propos de la fusion automatique

Si vous autorisez la fusion automatique des demandes de tirage dans votre référentiel, les personnes disposant d’autorisations d’écriture peuvent configurer la fusion automatique des demandes de tirage individuelles dans le référentiel lorsque toutes les exigences de fusion sont satisfaites. Si une personne ne disposant pas d’autorisations d’écriture envoie (push) des modifications à une demande de tirage pour laquelle la fusion automatique est activée, la fusion automatique est désactivée pour cette demande de tirage. Pour plus d’informations, consultez « [Fusion automatique d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) ».

## Gestion de la fusion automatique

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Sous {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}« Demandes de tirage »{% else %}« Bouton Fusionner »{% endif %}, sélectionnez **Autoriser la fusion automatique**.
  ![Case à cocher pour autoriser ou interdire la fusion automatique](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
