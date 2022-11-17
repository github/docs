---
title: Ignorer des fichiers
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: 'Vous pouvez configurer Git pour qu’il ignore les fichiers que vous ne souhaitez pas archiver dans {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4e98e0a4eb4f2f75056621bd0123c651a04a9b6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129001'
---
## Configuration des fichiers ignorés pour un dépôt

Vous pouvez créer un fichier *.gitignore* dans le répertoire racine de votre dépôt pour indiquer à Git les fichiers et répertoires à ignorer quand vous faites un commit.
Pour partager les règles d’omission avec les autres utilisateurs qui clonent le dépôt, commitez le fichier *.gitignore* dans votre dépôt.

GitHub garde une liste officielle de fichiers *.gitignore* recommandés pour de nombreux systèmes d’exploitation, environnements et langages populaires dans le dépôt public `github/gitignore`. Vous pouvez également utiliser gitignore.io afin de créer un fichier *.gitignore* pour votre système d’exploitation, votre langage de programmation ou votre IDE. Pour plus d’informations, consultez « [github/gitignore](https://github.com/github/gitignore) » et le site « [gitignore.io](https://www.gitignore.io/) ».

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Accédez à l’emplacement de votre dépôt Git.
3. Créez un fichier *.gitignore* pour votre dépôt.
   ```shell
   $ touch .gitignore
  ```

   Si la commande réussit, il n’y a pas de sortie.
   
Pour obtenir un exemple de fichier *.gitignore*, consultez « [Configurations .gitignore courantes](https://gist.github.com/octocat/9257657) » dans le dépôt Octocat.

Si vous voulez ignorer un fichier déjà archivé, vous devez annuler le suivi du fichier avant d’ajouter une règle pour l’ignorer. Dans votre terminal, annulez le suivi du fichier.

```shell
$ git rm --cached <em>FILENAME</em>
```

## Configuration des fichiers ignorés pour tous les dépôts sur votre ordinateur

Vous pouvez également créer un fichier *.gitignore* global afin de définir une liste de règles pour ignorer les fichiers dans chaque dépôt Git sur votre ordinateur. Par exemple, vous pouvez créer le fichier sur *~/.gitignore_global* et y ajouter des règles.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Configurez Git pour utiliser le fichier d’exclusion *~/.gitignore_global* pour tous les dépôts Git.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## Exclusion de fichiers locaux sans créer de fichier *.gitignore*

Si vous ne voulez pas créer de fichier *.gitignore* à partager avec d’autres personnes, vous pouvez créer des règles qui ne sont pas commitées avec le dépôt. Vous pouvez utiliser cette technique pour les fichiers générés localement dont vous ne voulez pas qu’ils soient générés par d’autres utilisateurs, comme les fichiers créés par votre éditeur.

Utilisez l’éditeur de texte de votre choix pour ouvrir le fichier appelé *.git/info/exclude* à la racine de votre dépôt Git. Toute règle que vous ajoutez ici n’est pas archivée et ignore uniquement les fichiers de votre dépôt local.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Accédez à l’emplacement de votre dépôt Git.
3. Dans l’éditeur de texte de votre choix, ouvrez le fichier *.git/info/exclude*.

## En savoir plus

* [Ignorer des fichiers](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) dans la documentation Pro Git
* [.gitignore](https://git-scm.com/docs/gitignore) dans les pages man pour Git
* [Collection de modèles *.gitignore* utiles](https://github.com/github/gitignore) dans le dépôt github/gitignore
* Site [gitignore.io](https://www.gitignore.io/)
