---
title: Synchronisation de votre branche
intro: 'Quand vos commits sont poussés vers votre projet dans {% data variables.product.prodname_dotcom %}, vous pouvez garder votre copie locale du projet synchronisée en effectuant un tirage à partir du dépôt distant.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086493'
---
## À propos de la synchronisation de branche

Vous pouvez synchroniser votre branche locale avec le dépôt distant en tirant les commits ajoutés à la branche dans {% data variables.product.product_name %} depuis la dernière synchronisation. Si vous effectuez des commits à partir d’un autre appareil ou si plusieurs personnes contribuent à un projet, vous devez synchroniser votre branche locale pour la maintenir à jour.

Quand vous effectuez un tirage vers votre branche locale, vous mettez uniquement à jour votre copie locale du dépôt. Pour mettre à jour votre branche sur {% data variables.product.prodname_dotcom %}, vous devez pousser vos changements. Pour plus d’informations, consultez « [Poussée de changements vers {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github) ».

Pour ajouter des changements d’une branche à une autre, vous pouvez fusionner les branches. Pour appliquer les changements apportés à votre branche à partir d’une autre branche du même dépôt, vous pouvez fusionner l’autre branche avec votre branche dans {% data variables.product.prodname_desktop %}. Pour demander la fusion des changements de votre branche dans une autre branche, dans le même dépôt ou dans un autre dépôt du réseau, vous pouvez créer une demande de tirage (pull request) sur {% data variables.product.prodname_desktop %}. Pour plus d’informations, consultez « [Fusion d’une autre branche avec votre branche de projet](#merging-another-branch-into-your-project-branch) » et « [À propos des demandes de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-requests) ».

Certains workflows ont besoin ou bénéficient d’un rebasage au lieu d’une fusion. Le rebasage vous permet d’effectuer la réorganisation, la modification ou le squash des commits de manière groupée. Pour plus d’informations, consultez « [À propos du rebasage Git](/github/getting-started-with-github/about-git-rebase) » et « [Rebasage de votre branche de projet dans une autre branche](#rebasing-your-project-branch-onto-another-branch) ».

## Tirage vers votre branche locale à partir du dépôt distant

1. Dans {% data variables.product.prodname_desktop %}, utilisez la liste déroulante {% octicon "git-branch" aria-label="The branch icon" %} **Branche actuelle**, puis sélectionnez la branche locale à mettre à jour.
2.  Pour rechercher la présence de commits dans la branche distante, cliquez sur **Récupérer origin**
![Bouton Récupérer origin](/assets/images/help/desktop/fetch-button.png)
3. Pour tirer des commits de la branche distante, cliquez sur **Tirer origin** ou **Tirer origin avec rebasage**.
![Bouton Tirer origin](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## Fusion d’une autre branche avec votre branche de projet

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Remarque :** En cas de conflit de fusion, {% data variables.product.prodname_desktop %} vous avertit au-dessus du bouton **Fusionner <em>BRANCHE</em> dans <em>BRANCHE</em>** . Vous ne pourrez pas fusionner les branches tant que vous n’aurez pas résolu tous les conflits.

   {% endnote %}

   ![Bouton de fusion](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## Rebasage de votre branche de projet dans une autre branche

{% mac %}

1. Dans la barre de menus, utilisez le menu déroulant **Branche**, puis cliquez sur **Rebaser la branche actuelle**.
![Rebaser la branche actuelle dans le menu déroulant Branche](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Cliquez sur la branche à rebaser dans la branche actuelle, puis cliquez sur **Démarrer le rebasage**.
![Bouton Démarrer le rebasage](/assets/images/help/desktop/start-rebase-button.png)
3. Si vous êtes sûr de vouloir effectuer le rebasage, cliquez sur **Commencer le rebasage**.
![Bouton Commencer le rebasage](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Pour pousser vos changements locaux, cliquez sur **Forcer la poussée vers origin**.
![Forcer la poussée vers origin](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Utilisez le menu déroulant **Branche**, puis cliquez sur **Rebaser la branche actuelle**.
![Rebaser la branche actuelle dans le menu déroulant Branche](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Cliquez sur la branche à rebaser dans la branche actuelle, puis cliquez sur **Démarrer le rebasage**.
![Bouton Démarrer le rebasage](/assets/images/help/desktop/start-rebase-button.png)
3. Si vous êtes sûr de vouloir effectuer le rebasage, cliquez sur **Commencer le rebasage**.
![Bouton Commencer le rebasage](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Pour pousser vos changements locaux, cliquez sur **Forcer la poussée vers origin**.
![Forcer la poussée vers origin](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## Squash et fusion d’une autre branche dans votre branche de projet

1. Utilisez le menu déroulant **Branche**, puis cliquez sur **Effectuer un squash et une fusion dans la branche actuelle**.
![Effectuer un squash et une fusion dans le menu déroulant Branche](/assets/images/help/desktop/squash-and-merge-menu.png)
2. Cliquez sur la branche à fusionner dans la branche actuelle, puis cliquez sur **Effectuer un squash et une fusion**.
![Bouton Effectuer un squash et une fusion](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   **Remarque :** En cas de conflit de fusion, {% data variables.product.prodname_desktop %} vous avertit au-dessus du bouton **Effectuer un squash et une fusion**. Vous ne pourrez pas effectuer un squash et une fusion de la branche tant que vous n’aurez pas résolu tous les conflits.

   {% endnote %} {% data reusables.desktop.push-origin %}

## En savoir plus
- « [Tirer](/github/getting-started-with-github/github-glossary#pull) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [Fusionner](/github/getting-started-with-github/github-glossary#merge) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [Rebaser](/github/getting-started-with-github/github-glossary#rebase) » dans le glossaire de {% data variables.product.prodname_dotcom %}
