---
title: Extraction de demandes de tirage localement
intro: 'Quand une personne vous envoie une demande de tirage (pull request) à partir d’une duplication (fork) ou d’une branche de votre dépôt, vous pouvez la fusionner localement pour résoudre un conflit de fusion ou pour tester et vérifier les modifications avant d’effectuer une fusion sur {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: bdb63d3951c92996ca4d6dc393bdc49b8d37acce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133891'
---
{% note %}

  **Remarque :** Les auteurs de demandes de tirage peuvent donner aux responsables de référentiel en amont, ou ceux disposant d’un accès push au référentiel en amont, l’autorisation d’effectuer des validations sur la branche de comparaison de leur demande de tirage dans une duplication appartenant à l’utilisateur. Pour plus d’informations, consultez « [Autorisation des modifications apportées à une branche de demande de tirage créée à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) ».

  {% endnote %}

## Modification d’une demande de tirage active localement

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste des demandes de tirage, cliquez sur la demande de tirage que vous souhaitez modifier.{% ifversion fpt or ghec %}
3. Pour choisir l’endroit où vous souhaitez ouvrir la demande de tirage, sélectionnez le menu déroulant **Ouvrir avec {% octicon "triangle-down" aria-label="The down triangle icon" %}** et cliquez sur l’un des onglets.
  ![Lien vers l’accès aux instructions de demande de tirage en ligne de commande](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. Dans la zone de fusion, cliquez sur les **instructions de ligne de commande**. Suivez la séquence d’étapes pour afficher la demande de tirage proposée.
  ![Lien vers l’accès aux instructions de demande de tirage en ligne de commande](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. Si vous le souhaitez, pour afficher les modifications proposées dans {% data variables.product.prodname_desktop %}, cliquez sur **Ouvrir dans {% data variables.product.prodname_desktop %}** .
  ![Lien pour ouvrir une demande de tirage localement dans la version de bureau](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour extraire une demande de tirage localement, utilisez la sous-commande `gh pr checkout`. Remplacez `pull-request` par le nombre, l’URL ou la branche de tête de la demande de tirage.

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## Modification d’une demande de tirage inactive localement

Si l’auteur d’une requête de tirage ne répond pas aux requêtes ou a supprimé sa duplication, la demande de tirage peut toujours être fusionnée. Toutefois, si vous souhaitez apporter des modifications à une demande de tirage et que l’auteur ne répond pas, vous devez effectuer certaines étapes supplémentaires pour mettre à jour la demande de tirage.

Une fois qu’une demande de tirage est ouverte, {% data variables.product.product_name %} stocke toutes les modifications à distance. En d’autres termes, les validations dans une demande de tirage sont disponibles dans un référentiel même avant la fusion de la demande de tirage. Vous pouvez extraire une demande de tirage ouverte et la recréer en tant que la vôtre.

N’importe qui peut utiliser une demande de tirage ouverte précédemment pour continuer à travailler dessus, la tester ou même ouvrir une nouvelle demande de tirage avec des modifications supplémentaires. Toutefois, seuls les collaborateurs disposant d’un accès push peuvent fusionner les demandes de tirage.

{% data reusables.repositories.sidebar-issue-pr %}
2. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez fusionner.
3. Recherchez le numéro d’ID de la demande de tirage inactive. Il s’agit de la séquence de chiffres juste après le titre de la demande de tirage.
  ![Numéro d’ID des demandes de tirage](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. Récupérez la référence à la demande de tirage en fonction de son numéro d’ID, en créant une nouvelle branche au passage.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Basculez vers la nouvelle branche basée sur cette demande de tirage :
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. À ce stade, vous pouvez faire tout ce que vous voulez avec cette branche. Vous pouvez exécuter des tests locaux ou fusionner d’autres branches dans la branche.
8. Lorsque vous êtes prêt, vous pouvez envoyer la nouvelle branche :
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. [Créez une demande de tirage](/articles/creating-a-pull-request) avec votre nouvelle branche.

## Erreur : Échec de l’envoi de certaines références

L’espace de noms distant `refs/pull/` est *en lecture seule*. Si vous essayez d’envoyer des validations là-bas, vous verrez cette erreur :
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Conseil :** Lorsque vous supprimez ou renommez une référence distante, votre espace de noms `refs/pull/origin/` local n’est pas affecté par les appels à `git-remote`.

{% endtip %}
