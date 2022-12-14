---
title: Fusion d’une demande de tirage
intro: Fusionnez une demande de tirage (pull request) dans la branche en amont quand le travail est terminé. Toute personne disposant d’un accès en poussée (push) au dépôt peut effectuer la fusion.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: cccb85404c9cfe7305d639911528afed3706edfa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132987'
---
## À propos des fusions de demande de tirage

Dans une demande de tirage, vous proposez que les modifications que vous avez apportées sur une branche de tête doivent être fusionnées dans une branche de base. Par défaut, toute demande de tirage peut être fusionnée à tout moment, sauf si la branche principale est en conflit avec la branche de base. Mais il peut y avoir des restrictions sur le moment où vous pouvez fusionner une demande de tirage dans une branche spécifique. Par exemple, vous pouvez uniquement fusionner une demande de tirage dans la branche par défaut si les vérifications d’état requises aboutissent. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches) ».

{% data reusables.pull_requests.you-can-auto-merge %}

Si la demande de tirage présente des conflits de fusion ou si vous souhaitez tester les modifications avant de fusionner, vous pouvez [extraire la demande de tirage localement](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) et la fusionner à l’aide de la ligne de commande.

Vous ne pouvez pas fusionner un brouillon de demande de tirage. Pour plus d’informations sur les brouillons de demandes de tirage, consultez « [À propos des demandes de tirage](/articles/about-pull-requests#draft-pull-requests) ».

Le référentiel peut être configuré afin que la branche principale d’une demande de tirage soit automatiquement supprimée lorsque vous fusionnez une demande de tirage. Pour plus d’informations, consultez « [Gestion de la suppression automatique des branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches) ».

{% note %}

**Remarque :** {% data reusables.pull_requests.retargeted-on-branch-deletion %} Pour plus d’informations, consultez « [À propos des branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches) ».

{% endnote %}

Les requêtes de tirage sont fusionnées à l’aide de [l’option `--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge), à l’exception des [requêtes de tirage avec validations écrasées ou rebasées](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), qui sont fusionnées à l’aide de l’option fast-forward (avance rapide).

{% data reusables.pull_requests.close-issues-using-keywords %}

Si vous décidez de ne pas fusionner les modifications apportées à une branche de rubrique dans la branche en amont, vous pouvez [fermer la demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) sans fusionner.

## Fusion d’une demande de tirage

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez fusionner.
3. Selon les options de fusion activées pour votre référentiel, vous pouvez :
    - [Fusionner toutes les validations dans la branche de base](/articles/about-pull-request-merges/) en cliquant sur **Fusionner la demande de tirage**. Si l’option **Fusionner la demande de tirage** n’est pas affichée, cliquez sur le menu déroulant de fusion et sélectionnez **Créer une validation de fusion**.
    ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Écraser les validations en une validation](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) en cliquant sur le menu déroulant de fusion, en sélectionnant **Squash et fusion**, puis en cliquant sur le bouton **Squash et fusion**.
    ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Rebaser les validations individuellement sur la branche de base](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) en cliquant sur le menu déroulant de fusion, en sélectionnant **Rebase et fusion**, puis en cliquant sur le bouton **Rebase et fusion**.
    ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Remarque :** la rebase et la fusion mettent toujours à jour les informations du validateur et créent de nouvelles autorités de certification de validation. Pour plus d’informations, consultez « [À propos des fusions de demandes de tirage](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits) ».

    {% endnote %}
4. Si vous y êtes invité, tapez un message de commit ou acceptez le message par défaut.

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![Champ de message de commit](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Remarque :** le sélecteur d’e-mail n’est pas disponible pour les fusions avec rebase qui ne créent pas de validation de fusion, ou pour les fusions avec écrasement, qui créditent l’utilisateur qui a créé la demande de tirage en tant qu’auteur de la validation écrasée.

   {% endnote %}

6. Cliquez sur **Confirmer la fusion**, **Confirmer l’écrasement et la fusion**, ou **Confirmer la rebase et la fusion**.
6. Si vous le souhaitez, [supprimez la branche](/articles/deleting-unused-branches). Cela permet de garder la liste des branches de votre référentiel bien ordonnée.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour fusionner une demande de tirage, utilisez la sous-commande `gh pr merge`. Remplacez `pull-request` par le nombre, l’URL ou la branche de tête de la demande de tirage.

```shell
gh pr merge <em>pull-request</em>
```

Suivez les invites interactives pour terminer la fusion. Pour plus d’informations sur les méthodes de fusion que vous pouvez choisir, consultez « [À propos des fusions de demandes de tirage](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) ».

Vous pouvez également utiliser des indicateurs pour ignorer les invites interactives. Par exemple, cette commande va écraser les validations en une seule validation avec le message de validation « my squash commit », fusionner la validation écrasée dans la branche de base, puis supprimer la branche locale et distante.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Pour aller plus loin

- « [Restauration d’une demande de tirage (pull request)](/articles/reverting-a-pull-request) »
- « [Synchronisation de votre branche](/desktop/guides/contributing-to-projects/syncing-your-branch/) » avec {% data variables.product.prodname_desktop %}
- « [À propos des fusions de demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) »
- « [Traitement des conflits de fusion](/github/collaborating-with-pull-requests/addressing-merge-conflicts) »
