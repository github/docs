---
title: Création de dépôt distants
intro: 'Découvrez comment utiliser vos dépôts locaux sur votre ordinateur et les dépôts distants hébergés sur {% data variables.product.product_name %}.'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185050'
---
## Ajout d’un dépôt distant

Pour ajouter un nouveau dépôt distant, utilisez la commande `git remote add` sur le terminal, dans le répertoire dans lequel votre dépôt est stocké.

La commande `git remote add` prend deux arguments :
* Un nom de dépôt distant, par exemple `origin`
* Une URL distante, par exemple, `https://{% data variables.command_line.backticks %}/user/repo.git`

Par exemple :

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

Pour plus d’informations sur l’URL à utiliser, consultez « [À propos des dépôt distants](/github/getting-started-with-github/about-remote-repositories) ».

### Résolution des problèmes : l’origine distante existe déjà

Cette erreur signifie que vous avez tenté d’ajouter un dépôt distant portant un nom existant dans votre dépôt local.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Pour corriger ce problème, vous pouvez :
* Utiliser un nom différent pour le nouveau dépôt distant.
* Renommer le dépôt distant existant avant d’ajouter le nouveau. Pour plus d’informations, consultez « [Renommer un dépôt distant](#renaming-a-remote-repository) » ci-dessous.
* Supprimer le dépôt distant existant avant d’ajouter le nouveau. Pour plus d’informations, consultez « [Renommer un dépôt distant](#removing-a-remote-repository) » ci-dessous.

## Modification de l’URL d’un dépôt distant

La commande `git remote set-url` modifie une URL de dépôt distant existant.

{% tip %}

**Conseil :** Pour plus d’informations sur la différence entre les URL HTTPS et SSH, consultez « [À propos des dépôts distants](/github/getting-started-with-github/about-remote-repositories) ».

{% endtip %}

La commande `git remote set-url` prend deux arguments :

* Un nom de dépôt distant existant. Par exemple, `origin` ou `upstream` sont deux choix courants.
* Nouvelle URL pour le dépôt distant. Par exemple :
  * Si vous effectuez une mise à jour pour utiliser HTTPS, votre URL pourrait ressembler à ceci :
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * Si vous effectuez une mise à jour pour utiliser SSH, votre URL pourrait ressembler à ceci :
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### Basculement d’URL de dépôts distants de SSH vers HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Remplacez le répertoire de travail actuel par votre projet local.
3. Répertoriez vos dépôts distants existants afin d’obtenir le nom du dépôt distant que vous souhaitez modifier.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. Modifiez l’URL de votre dépôt distant de SSH en HTTPS avec la `git remote set-url` commande.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. Vérifiez que l’URL du dépôt distant a changé.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

La prochaine fois que vous exécuterez les commandes `git fetch`, `git pull` ou `git push` sur le dépôt distant, vous serez invité à fournir vos nom d’utilisateur et mot de passe GitHub. {% data reusables.user-settings.password-authentication-deprecation %}

Vous pouvez [utiliser une assistance relative aux informations d’identification](/github/getting-started-with-github/caching-your-github-credentials-in-git) pour que Git se rappelle vos nom d’utilisateur et {% data variables.product.pat_generic %} chaque fois qu’il s’adresse à GitHub.

### Basculer des URL de dépôts distants de HTTPS vers SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Remplacez le répertoire de travail actuel par votre projet local.
3. Répertoriez vos dépôts distants existants afin d’obtenir le nom du dépôt distant que vous souhaitez modifier.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. Modifiez l’URL de votre dépôt distant de HTTPS en SSH avec la commande `git remote set-url`.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. Vérifiez que l’URL du dépôt distant a changé.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### Résolution des problèmes : Aucun dépôt distant « [nom] »

Cette erreur signifie que le dépôt distant que vous avez tenté de modifier n’existe pas :

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Vérifiez que vous avez correctement tapé le nom du dépôt distant.

## Changement du nom d’un dépôt distant

Utilisez la commande `git remote rename` pour renommer un dépôt distant existant.

La commande `git remote rename` prend deux arguments :
* Un dépôt distant existant, par exemple, `origin`
* Un nouveau nom pour le dépôt distant, par exemple, `destination`

## Exemple

Ces exemples supposent que vous [clonez à l’aide de HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), ce qui est recommandé.

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Résolution des problèmes : Impossible de changer le nom de la section « remote.[ancien nom] » en « remote.[nouveau nom] »

Cette erreur signifie que l’ancien nom de dépôt distant que vous avez tapé n’existe pas.

Vous pouvez vérifier les dépôts distants qui existent avec la commande `git remote -v` :

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Résolution des problèmes : Le dépôt distant [nouveau nom] existe déjà

Cette erreur signifie que le nom de dépôt distant que vous souhaitez utiliser existe déjà. Pour résoudre ce problème, utilisez un autre nom de dépôt distant ou renommez la dépôt distant d’origine.

## Suppression du nom d’un dépôt distant 

Utilisez la commande `git remote rm` pour supprimer une URL de dépôt distant de votre dépôt.

La commande `git remote rm` prend un argument :
* Un nom de dépôt distant, par exemple `destination`

La suppression de l’URL du dépôt distant de votre dépôt a seulement pour effet de dissocier dépôts local et distant. Elle ne supprime pas le dépôt distant.

## Exemple

Ces exemples supposent que vous [clonez à l’aide de HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), ce qui est recommandé.

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

**Remarque** : la commande `git remote rm` ne supprime pas le dépôt distant du serveur. Elle supprime simplement le dépôt distant et ses références de votre dépôt local.

{% endwarning %}

### Résolution des problèmes : Impossible de supprimer la section config « remote.[nom] »

Cette erreur signifie que le dépôt distant que vous avez tenté de supprimer n’existe pas :

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Vérifiez que vous avez correctement tapé le nom du dépôt distant.

## Pour aller plus loin

- « [Utilisation de dépôts distants](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) » dans le livre _Pro Git_
