---
title: Duplication d’un dépôt
intro: 'Pour conserver un miroir d’un dépôt sans le dupliquer (fork), vous pouvez exécuter une commande de clone spéciale, puis pousser (push) le miroir vers le nouveau dépôt.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135485'
---
{% ifversion fpt or ghec %}

{% note %}

**Remarque :** Si vous avez un projet hébergé sur un autre système de gestion de versions, vous pouvez importer automatiquement votre projet dans {% data variables.product.prodname_dotcom %} à l’aide de l’outil {% data variables.product.prodname_dotcom %} Importer. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_dotcom %} Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer) ».

{% endnote %}

{% endif %}

Avant de pouvoir envoyer (push) le référentiel d’origine vers votre nouvelle copie, ou _miroir_, du référentiel, vous devez [créer le référentiel](/articles/creating-a-new-repository) sur {% data variables.location.product_location %}. Dans ces exemples, `exampleuser/new-repository` ou `exampleuser/mirrored` sont les miroirs.

## Mise en miroir d’un dépôt

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Créez un clone nu du dépôt.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Poussez le miroir vers le nouveau dépôt.
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. Supprimez le dépôt local temporaire que vous avez créé.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Mise en miroir d’un dépôt qui contient des objets {% data variables.large_files.product_name_long %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Créez un clone nu du dépôt. Remplacez l’exemple de nom d’utilisateur par le nom de la personne ou de l’organisation propriétaire du dépôt, puis remplacez l’exemple de nom de dépôt par le nom du dépôt que vous souhaitez dupliquer.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Accédez au dépôt que vous venez de cloner.
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. Extrayez les objets {% data variables.large_files.product_name_long %} du dépôt.
  ```shell
  $ git lfs fetch --all
  ```
5. Poussez le miroir vers le nouveau dépôt.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. Poussez les objets {% data variables.large_files.product_name_long %} du dépôt vers votre miroir.
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. Supprimez le dépôt local temporaire que vous avez créé.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Mise en miroir d’un dépôt dans un autre emplacement

Si vous souhaitez mettre en miroir un dépôt dans un autre emplacement, y compris obtenir des mises à jour à partir de l’original, vous pouvez cloner un miroir et pousser régulièrement les modifications.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Créez un clone en miroir nu du dépôt.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. Définissez votre miroir comme emplacement de poussée.
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
Comme pour un clone nu, un clone mis en miroir inclut toutes les étiquettes et branches distantes, mais toutes les références locales seront remplacées chaque fois que vous effectuerez une récupération (fetch) ; il sera par conséquent toujours identique au dépôt d’origine. La définition de l’URL pour les poussées simplifie la poussée vers votre miroir.

4. Pour mettre à jour votre miroir, récupérez les mises à jour et effectuez une poussée.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## Pour aller plus loin

* « [Poussée de modifications vers GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github) »
* « [À propos de Git Large File Storage et GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop) »
* « [À propos de GitHub Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer) »

{% endif %}
