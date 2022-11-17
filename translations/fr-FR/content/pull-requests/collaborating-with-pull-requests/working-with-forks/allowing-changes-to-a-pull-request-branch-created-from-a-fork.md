---
title: Autorisation de changements sur une branche de demande de tirage créée à partir d’une duplication
intro: 'Pour une meilleure collaboration, vous pouvez autoriser les commits sur les branches que vous avez créées à partir de duplications (fork) appartenant à votre compte personnel.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
ms.openlocfilehash: 26255f5aeab3bcaa5ecc1aa6cf865981990c456a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133695'
---
Seuls les auteurs des demandes de tirage (pull requests) peuvent donner aux gestionnaires de référentiel en amont, ou aux utilisateurs disposant d’un accès envoi (push) au référentiel en amont, l’autorisation d’effectuer des validations (commits) sur la branche de comparaison de leur demande de tirage dans une duplication (fork) appartenant à l’utilisateur. Pour en savoir plus sur les référentiels en amont, consultez « [À propos des duplications (forks)](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) ».

Les auteurs des demandes de tirage (pull requests) peuvent accorder ces autorisations quand ils créent initialement une demande de tirage à partir d’une duplication (fork) appartenant à l’utilisateur ou après avoir créé la demande de tirage. Pour plus d’informations, consultez « [Création d’une demande de tirage (pull request) à partir d’une duplication (fork)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) ».

Vous pouvez définir des autorisations de validation (commit) quand vous créez d’abord une demande de tirage (pull request) à partir d’une duplication (fork). Pour plus d’informations, consultez « [Création d’une demande de tirage (pull request) à partir d’une duplication (fork)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) ». En outre, vous pouvez modifier une demande de tirage existante pour permettre aux gestionnaires de référentiels d’effectuer des validations (commits) dans votre branche.

## Activation des autorisations du gestionnaire de référentiel sur les demandes de tirage (pull requests) existantes

1. Sur {% data variables.product.product_name %}, accédez à la page principale du référentiel en amont de votre demande de tirage (pull request).
2. Sous le nom du référentiel en amont, cliquez sur {% octicon "git-pull-request" aria-label="The pull request icon" %} **Demandes de tirage (pull requests)** .
![Sélection de l’onglet Problèmes et demandes de tirage](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. Dans la liste des demandes de tirage, accédez à la demande de tirage pour laquelle vous souhaitez autoriser les validations (commits).
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## Pour aller plus loin

- [« Validation (commit) de modifications sur une branche de demande de tirage créée à partir d’une duplication (fork) »](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)
