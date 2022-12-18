---
title: Changement de la branche de base d’une demande de tirage
intro: 'Une fois qu’une demande de tirage (pull request) est ouverte, vous pouvez changer la branche de base pour comparer les modifications apportées à la demande de tirage par rapport à une autre branche.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132980'
---
{% warning %}

**Avertissement** : Quand vous changez la branche de base de votre demande de tirage, certains commits peuvent être supprimés de la chronologie. Les commentaires de révision peuvent également devenir obsolètes, car la ligne de code référencée par le commentaire peut ne plus faire partie des changements de la demande de tirage.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous voulez modifier.
3. À côté du titre de la demande de tirage, cliquez sur **Modifier**. ![Bouton de modification de la demande de tirage](/assets/images/help/pull_requests/pull-request-edit.png)
4. Dans le menu déroulant de la branche de base, sélectionnez la branche de base sur laquelle vous voulez [comparer les changements](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Menu déroulant de la branche de base ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Lisez les informations sur le changement de la branche de base et cliquez sur **Changer la base**. ![Bouton de confirmation de changement de la branche de base ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Astuce :** Quand vous ouvrez une demande de tirage, {% data variables.product.product_name %} définit la base sur le commit référencé par cette branche. Si la branche est mise à jour par la suite, {% data variables.product.product_name %} ne met pas à jour le commit de la branche de base.

{% endtip %}

## Pour aller plus loin

- « [Création d’une demande de tirage](/articles/creating-a-pull-request) »
- « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) »
- « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) »
