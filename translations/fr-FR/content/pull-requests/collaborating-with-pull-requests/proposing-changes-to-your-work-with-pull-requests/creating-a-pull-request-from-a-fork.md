---
title: Création d’une demande de tirage à partir d’une duplication
intro: Vous pouvez créer une demande de tirage pour proposer des modifications apportées à une duplication d’un référentiel en amont.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
ms.openlocfilehash: 5a4aceef12c214d157dbdac7bf838bbe80e81731
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883286'
---
Si votre demande de tirage compare votre branche de rubrique à une branche dans le dépôt en amont définie comme branche de base, votre branche de rubrique est également appelée branche de comparaison de la demande de tirage. Pour plus d’informations sur les branches de demande de tirage, y compris des exemples, consultez « [Création d’une demande de tirage](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository) ».

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Accédez au dépôt d’origine où vous avez créé votre duplication.
{% data reusables.repositories.new-pull-request %}
3. Dans la page Comparer, cliquez sur **comparer les duplications**.
  ![Lien Comparer les duplications](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. Dans le menu déroulant « branche de base », sélectionnez la branche du dépôt en amont où vous voulez fusionner les changements.
  ![Menus déroulants pour choisir la duplication et la branche de base](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. Dans le menu déroulant « duplication principale », sélectionnez votre duplication, puis utilisez le menu déroulant « comparer la branche » pour sélectionner la branche où vous avez fait vos changements.
  ![Menus déroulants pour le choix de la duplication principale et de la branche de comparaison](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png) {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## Pour aller plus loin

- « [Utilisation des duplications](/articles/working-with-forks) »
- « [Autorisation de changements sur une branche de demande de tirage créée à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) »
