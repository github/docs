---
title: À propos des vérifications d’état
intro: Les vérifications d’état vous indiquent si vos commits remplissent les conditions définies pour le dépôt auquel vous contribuez.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 759889bd4f014e4bc2afff5f182a0b7258c8bb07
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065865'
---
Les vérifications d’état sont basées sur des processus externes, tels que des builds d’intégration continue, qui s’exécutent pour chaque envoi (push) que vous effectuez vers un référentiel. Vous pouvez voir l’état *en attente*, *en cours de passage* ou *en échec* des vérifications d’état en regard des validations individuelles dans votre demande de tirage.

![Liste des validations et des états](/assets/images/help/pull_requests/commit-list-statuses.png)

Toute personne disposant d’autorisations d’écriture dans un référentiel peut définir l’état pour toute vérification d’état dans le référentiel.

Vous pouvez afficher l’état global de la dernière validation sur une branche sur la page des branches de votre référentiel ou dans la liste des demandes de tirage.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

## Types de vérifications d’état sur {% data variables.product.product_name %}

Il existe deux types de vérifications d’état sur {% data variables.product.product_name %} :

- Vérifications
- États

_Les vérifications_ sont différentes des _états_ car elles fournissent des annotations de ligne, une messagerie plus détaillée et sont uniquement disponibles pour une utilisation avec {% data variables.product.prodname_github_apps %}.

Les propriétaires et les utilisateurs de l’organisation disposant d’un accès d’envoi (push) à un référentiel peuvent créer des vérifications et des états avec l’API de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Vérifications](/rest/reference/checks) » et « [États](/rest/reference/commits#commit-statuses) ».

## Vérifications

Lorsque _des vérifications_ sont configurées dans un référentiel, les demandes de tirage ont un onglet **Vérifications** dans lequel vous pouvez afficher la sortie détaillée de build à partir des vérifications d’état et réexécuter les vérifications ayant échoué.

![Vérifications d’état dans une demande de tirage](/assets/images/help/pull_requests/checks.png)

{% note %}

**Remarque :** l’onglet **Vérifications** est rempli uniquement pour les demandes de tirage si vous configurez _des vérifications_ et non des _états_, pour le référentiel.

{% endnote %}

Lorsqu’une ligne spécifique d’une validation entraîne l’échec d’une vérification, vous verrez des détails sur la défaillance, l’avertissement ou l’avis en regard du code approprié sous l’onglet **Fichiers** de la demande de tirage.

![Détails d’une vérification d’état](/assets/images/help/pull_requests/checks-detailed.png)

Vous pouvez naviguer entre les résumés des vérifications pour différentes validations dans une demande de tirage, à l’aide du menu déroulant de validation sous l’onglet **Conversation**.

![Vérifier les résumés des différentes validations dans un menu déroulant](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### Ignorer et demander des vérifications pour les validations individuelles

Lorsqu’un référentiel est défini pour demander automatiquement des vérifications pour les envois push, vous pouvez choisir d’ignorer les vérifications pour une validation individuelle que vous envoyez. Lorsqu’un référentiel n’est _pas_ défini pour demander automatiquement des vérifications pour les envois push, vous pouvez choisir d’ignorer les vérifications pour une validation individuelle que vous envoyez. Pour plus d'informations sur ces paramètres, consultez « [Vérifier les suites](/rest/reference/checks#update-repository-preferences-for-check-suites) ».

Pour ignorer ou demander des vérifications pour votre validation, ajoutez l’une des lignes d’amorce de fin suivantes à la fin de votre message de validation :

- Pour _ignorer des vérifications_ pour une validation, entrez votre message de validation ainsi qu’une description courte et explicite de vos modifications. Après la description de votre validation, avant de fermer la quotation, ajoutez deux lignes vides suivies de `skip-checks: true` :
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- Pour _demander_ des vérifications pour une validation, entrez votre message de validation ainsi qu’une description courte et explicite de vos modifications. Après la description de votre validation, avant de fermer la quotation, ajoutez deux lignes vides suivies de `request-checks: true` :
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% ifversion fpt or ghec %}
### Conservation des vérifications d’état

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
