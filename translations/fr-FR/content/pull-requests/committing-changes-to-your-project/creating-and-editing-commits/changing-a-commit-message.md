---
title: Changement d’un message de commit
redirect_from:
  - /articles/can-i-delete-a-commit-message
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
  - /github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message
intro: 'Si un message de commit contient des informations peu claires, incorrectes ou sensibles, vous pouvez le modifier localement et pousser (push) un nouveau commit avec un nouveau message vers {% data variables.product.product_name %}. Vous pouvez également changer un message de commit pour ajouter des informations manquantes.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fa4966da0fe443e6635b43fc9b3b11108d57cf6e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132572'
---
## Réécriture du dernier message de commit

Vous pouvez changer le dernier message de commit avec la commande `git commit --amend`.

Dans Git, le texte du message de commit fait partie du commit. Le changement du message de commit change l’ID de commit, c’est-à-dire la somme de contrôle SHA1 qui nomme le commit. En fait, vous créez un commit qui remplace l’ancien.

## Le commit n’a pas été poussé en ligne

Si le commit existe uniquement dans votre dépôt local et n’a pas été poussé sur {% data variables.product.product_location %}, vous pouvez corriger le message de commit avec la commande `git commit --amend`.

1. Sur la ligne de commande, accédez au dépôt qui contient le commit que vous voulez corriger.
2. Tapez `git commit --amend`, puis appuyez sur **Entrée**.
3. Dans votre éditeur de texte, modifiez le message de commit et enregistrez le commit.
    - Vous pouvez ajouter un co-auteur en ajoutant un code de fin au commit. Pour plus d’informations, consultez « [Création d’un commit avec plusieurs auteurs](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) ».
{% ifversion fpt or ghec %}
    - Vous pouvez créer des commits pour le compte de votre organisation en ajoutant un code de fin au commit. Pour plus d’informations, consultez « [Création d’un commit pour le compte d’une organisation](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization) ».{% endif %}

Le nouveau commit et le message s’affichent sur {% data variables.product.product_location %} la prochaine fois que vous poussez du code.

{% tip %}

Vous pouvez changer l’éditeur de texte par défaut de Git en changeant le paramètre `core.editor`. Pour plus d’informations, consultez « [Configuration du client de base](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration) » dans le manuel Git.

{% endtip %}

## Correction d’anciens messages ou de plusieurs messages de commit

Si vous avez déjà poussé le commit sur {% data variables.product.product_location %}, vous devez forcer la poussée d’un commit avec un message corrigé.

{% warning %}

Nous vous déconseillons fortement de forcer la poussée, car cela change l’historique de votre dépôt. Si vous forcez la poussée, les personnes qui ont déjà cloné votre dépôt doivent corriger manuellement leur historique local. Pour plus d’informations, consultez « [Récupération à partir d’un rebasage en amont](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase) » dans le manuel Git.

{% endwarning %}

**Changement du message du dernier commit poussé**

1. Suivez les [étapes ci-dessus](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) pour corriger le message de commit.
2. Utilisez la commande `push --force-with-lease` pour forcer la poussée sur l’ancien commit.
  ```shell
  $ git push --force-with-lease origin <em>example-branch</em>
  ```

**Changement du message d’anciens ou de plusieurs messages de commit**

Si vous devez corriger le message de plusieurs commits ou d’un ancien commit, vous pouvez utiliser un rebasage interactif, puis forcer la poussée pour changer l’historique des commits.

1. Sur la ligne de commande, accédez au dépôt qui contient le commit que vous voulez corriger.
2. Utilisez la commande `git rebase -i HEAD~n` pour afficher une liste des derniers `n` commits dans votre éditeur de texte par défaut.

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    La liste ressemble à la suivante :

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
3. Remplacez `pick` par `reword` avant chaque message de commit à changer.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Enregistrez et fermez le fichier de liste de commits.
5. Dans chaque fichier de commit que vous obtenez, tapez le nouveau message de commit, enregistrez le fichier et fermez-le.
6. Quand vous êtes prêt à pousser vos changements sur GitHub, utilisez la commande push --force pour forcer la poussée sur l’ancien commit.
```shell
$ git push --force origin <em>example-branch</em>
```

Pour plus d’informations sur le rebasage interactif, consultez « [Mode interactif](https://git-scm.com/docs/git-rebase#_interactive_mode) » dans le manuel Git.

{% tip %}

Comme auparavant, la correction du message de commit entraîne un nouveau commit avec un nouvel ID. Toutefois, dans ce cas, chaque commit qui suit le commit corrigé obtient également un nouvel ID, car chaque commit contient également l’ID de son parent.

{% endtip %}

{% warning %}

Si vous avez ajouté des informations sensibles dans un message de commit, la poussée forcée d’un commit avec un commit corrigé peut ne pas supprimer le commit d’origine dans {% data variables.product.product_name %}. L’ancien commit ne fait pas partie des clones effectués par la suite, mais il peut toujours être mis en cache sur {% data variables.product.product_name %} et accessible via l’ID de commit. Vous devez contacter {% data variables.contact.contact_support %} avec l’ancien ID de commit pour le supprimer du dépôt distant.

{% endwarning %}

## Pour aller plus loin

* « [Signature de commits](/articles/signing-commits) »
