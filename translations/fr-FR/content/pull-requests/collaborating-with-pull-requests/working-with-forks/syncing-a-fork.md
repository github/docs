---
title: Synchronisation d’une duplication
intro: Synchronisez une duplication d’un référentiel pour la maintenir à jour avec le référentiel en amont.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
ms.openlocfilehash: 85b149e26cb65a428d7e9b66aea99d6b62430ae0
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188327'
---
## Synchronisation d’une branche de duplication à partir de l’interface utilisateur web

{% ifversion syncing-fork-web-ui %}
1. Sur {% data variables.product.product_name %}, accédez à la page principale du dépôt dupliqué que vous souhaitez synchroniser avec le dépôt en amont.
2. Sélectionnez la liste déroulante **Fork de synchronisation**.
    ![Liste déroulante « Fork de synchronisation » soulignée](/assets/images/help/repository/sync-fork-dropdown.png)
3. Examinez les détails des validations à partir du référentiel en amont, puis cliquez sur **Mettre à jour la  branche**.
    ![Modèle Fork de synchronisation avec le bouton « Mettre à jour la branche » souligné](/assets/images/help/repository/update-branch-button.png) {% else %}
1. Sur {% data variables.product.product_name %}, accédez à la page principale du dépôt dupliqué que vous souhaitez synchroniser avec le dépôt en amont.
2. Sélectionnez la liste déroulante **Récupérer en amont**.
    ![Liste déroulante « Extraire en amont »](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. Examinez les détails des validations à partir du dépôt en amont, puis cliquez sur **Extraire et fusionner**.
    ![Bouton « Extraire et fusionner »](/assets/images/help/repository/fetch-and-merge-button.png){% endif %}

Si les modifications du dépôt en amont provoquent des conflits,{% data variables.product.company_short %} vous invitera à créer une demande de tirage pour résoudre les conflits.

## Synchronisation d’une branche de duplication avec {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Pour en savoir plus sur {% data variables.product.prodname_cli %}, consultez « [À propos de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) ».

Pour mettre à jour la duplication distante à partir de son parent, utilisez la sous-commande `gh repo sync -b BRANCHNAME` et fournissez le nom de votre duplication et de votre branche comme des arguments.

```shell
$ gh repo sync owner/cli-fork -b BRANCH_NAME
```

Si les modifications du dépôt en amont provoquent un conflit, l’{% data variables.product.prodname_cli %} ne peut pas se synchroniser. Vous pouvez définir l’indicateur `-force` pour remplacer la branche de destination.

## Synchronisation d’une duplication de branche à partir de la ligne de commande

Avant de pouvoir synchroniser votre duplication avec un référentiel en amont, vous devez configurer un élément distant qui pointe vers le référentiel en amont dans Git. Pour plus d’informations, consultez « [Configuration d’un dépôt distant pour une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork) ».

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Remplacez le répertoire de travail actuel par votre projet local.
3. Extrayez les branches et leurs validations respectives du dépôt en amont. Les validations dans `BRANCHNAME` seront stockées dans la branche locale `upstream/BRANCHNAME`.

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
  >  * [new branch]      main     -> upstream/main
  ```

4. Vérifiez la branche locale par défaut de votre duplication. Dans ce cas, nous utilisons `main`.

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. Fusionnez les modifications de la branche par défaut en amont (dans ce cas, `upstream/main`) dans votre branche locale par défaut. Cela synchronise la branche par défaut de votre duplication avec le dépôt en amont, sans perte de vos modifications locales.

  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```
  
  Si votre branche locale n’a pas de validation unique, Git effectue un transfert rapide. Pour plus d’informations, consultez [Création de branches et fusion](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) dans la documentation Git.
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  Si votre branche locale avait des validations uniques, vous devrez peut-être résoudre les conflits. Pour plus d’informations, consultez « [Traitement des conflits de fusion](/github/collaborating-with-pull-requests/addressing-merge-conflicts) ».

{% tip %}

**Astuce** : la synchronisation de votre duplication met uniquement à jour votre copie locale du dépôt. Pour mettre à jour votre duplication sur {% data variables.location.product_location %}, vous devez [pousser (push) vos modifications](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}
