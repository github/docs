---
title: Création d’un problème ou d’une demande de tirage
intro: Vous pouvez créer un problème ou une demande de tirage pour proposer et collaborer sur des modifications d’un référentiel.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  fpt: '*'
shortTitle: Create an issue or PR
ms.openlocfilehash: 5430c8f11d08efc3f21cf1c62f470f38dcc2f257
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105334'
---
## À propos des problèmes et des demandes de tirage

Vous pouvez utiliser les problèmes pour effectuer le suivi des idées, des bogues, des tâches et des autres informations importantes liées à votre projet. Vous pouvez créer un problème dans le dépôt de votre projet avec {% data variables.product.prodname_desktop %}. Pour plus d’informations sur les problèmes, consultez « [À propos des problèmes](/github/managing-your-work-on-github/about-issues) ».

Après avoir créé une branche et apporté des changements aux fichiers d’un projet, vous pouvez créer une demande de tirage (pull request). Avec une demande de tirage, vous pouvez faire des propositions, mener des discussions et effectuer des itérations relatives aux changements avant de les fusionner dans le projet. Vous pouvez créer une demande de tirage dans le dépôt de votre projet avec {% data variables.product.prodname_desktop %}. Pour plus d’informations sur les demandes de tirage, consultez « [À propos des demandes de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-requests) ».

## Prérequis

Avant de créer une demande de tirage, vous devez pousser les changements apportés à une branche sur {% data variables.product.prodname_dotcom %}.
- Enregistrez et commitez les changements apportés sur votre branche locale. Pour plus d’informations, consultez « [Commit et revue des changements apportés à votre projet](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project) ».
- Poussez vos commits locaux vers le dépôt distant. Pour plus d’informations, consultez « [Poussée de changements vers GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github) ».
- Publiez votre branche actuelle sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Gestion des branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches) ».

## Création d’un problème

{% mac %}

1. Dans la barre de menus, utilisez le menu déroulant **Dépôt**, puis cliquez sur **Créer un problème sur {% data variables.product.prodname_dotcom %}** .
    ![Valeur du dépôt dans le menu Branche](/assets/images/help/desktop/create-issue-mac.png)
2. Sur {% data variables.product.prodname_dotcom %}, cliquez sur **Démarrer** pour ouvrir un modèle de problème, ou cliquez sur **Ouvrir un problème vide**.
    ![Options de création d’un problème](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. Dans la barre de menus, utilisez le menu déroulant **Dépôt**, puis cliquez sur **Créer un problème sur {% data variables.product.prodname_dotcom %}** .
    ![Valeur du dépôt dans le menu Branche](/assets/images/help/desktop/create-issue-windows.png)
2. Sur {% data variables.product.prodname_dotcom %}, cliquez sur **Démarrer** pour ouvrir un modèle de problème, ou cliquez sur **Ouvrir un problème vide**.
    ![Options de création d’un problème](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Remarque** : Si les modèles de problème ne sont pas activés dans votre dépôt actuel, {% data variables.product.prodname_desktop %} vous redirige vers un ticket vide sur {% data variables.product.prodname_dotcom %}.

{% endnote %}

## Création d’une demande de tirage

{% mac %}

1. Accédez à la branche pour laquelle vous voulez créer une demande de tirage. Pour plus d’informations, consultez « [Basculement entre les branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches) ».
2. Cliquez sur **Créer une demande de tirage**. {% data variables.product.prodname_desktop %} ouvre votre navigateur par défaut pour vous permettre d’accéder à {% data variables.product.prodname_dotcom %}.
  ![Bouton Créer une demande de tirage](/assets/images/help/desktop/mac-create-pull-request.png)
4. Sur {% data variables.product.prodname_dotcom %}, vérifiez que la branche dans le menu déroulant **base :** correspond à la branche dans laquelle vous souhaitez fusionner vos changements. Vérifiez que la branche dans le menu déroulant **comparer :** correspond à la branche de rubrique où vous avez apporté vos changements.
  ![Menus déroulants pour le choix des branches de base et de comparaison](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Accédez à la branche pour laquelle vous voulez créer une demande de tirage. Pour plus d’informations, consultez « [Basculement entre les branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches) ».
2. Cliquez sur **Créer une demande de tirage**. {% data variables.product.prodname_desktop %} ouvre votre navigateur par défaut pour vous permettre d’accéder à {% data variables.product.prodname_dotcom %}.
  ![Bouton Créer une demande de tirage](/assets/images/help/desktop/windows-create-pull-request.png)
3. Sur {% data variables.product.prodname_dotcom %}, vérifiez que la branche dans le menu déroulant **base :** correspond à la branche dans laquelle vous souhaitez fusionner vos changements. Vérifiez que la branche dans le menu déroulant **comparer :** correspond à la branche de rubrique où vous avez apporté vos changements.
  ![Menus déroulants pour le choix des branches de base et de comparaison](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

## Pour aller plus loin
- « [Problème](/github/getting-started-with-github/github-glossary#issue) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [Demande de tirage](/github/getting-started-with-github/github-glossary#pull-request) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [Branche de base](/github/getting-started-with-github/github-glossary#base-branch) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [Branche de rubrique](/github/getting-started-with-github/github-glossary#topic-branch) » dans le glossaire de {% data variables.product.prodname_dotcom %}
