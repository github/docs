---
title: Installation de Git Large File Storage
intro: 'Pour utiliser {% data variables.large_files.product_name_short %}, vous devez télécharger et installer un nouveau programme distinct de Git.'
redirect_from:
  - /articles/installing-large-file-storage
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/installing-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Install Git LFS
ms.openlocfilehash: b7078a3147ed610ff67bdc4b0bdce93158279a94
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131924'
---
{% mac %}

1. Accédez à [git-lfs.github.com](https://git-lfs.github.com) et cliquez sur **Télécharger**. Vous pouvez également installer {% data variables.large_files.product_name_short %} en utilisant un gestionnaire de package :
    - Pour utiliser [Homebrew](http://brew.sh/), exécutez `brew install git-lfs`.
    - Pour utiliser [MacPorts](https://www.macports.org/), exécutez `port install git-lfs`.

 Si vous installez {% data variables.large_files.product_name_short %} avec Homebrew ou MacPorts, passez à l’étape 6.

2. Sur votre ordinateur, localisez et décompressez le fichier téléchargé.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Remplacez le répertoire de travail actuel par le dossier que vous avez téléchargé et décompressé.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Remarque :** Le chemin de fichier que vous utilisez après `cd` dépend de votre système d’exploitation, de la version Git LFS que vous avez téléchargée et de l’emplacement où vous avez enregistré le téléchargement de {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Pour installer le fichier, exécutez cette commande :
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Remarque :** Vous devez peut-être utiliser `sudo ./install.sh` pour installer le fichier.

 {% endnote %}
5. Vérifiez que l’installation a réussi :
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si vous ne voyez pas de message indiquant que `git {% data variables.large_files.command_name %} install` a réussi, contactez {% data variables.contact.contact_support %}. Veillez à ajouter le nom de votre système d’exploitation.

{% endmac %}

{% windows %}

1. Accédez à [git-lfs.github.com](https://git-lfs.github.com) et cliquez sur **Télécharger**.

  {% tip %}

  **Astuce :** Pour plus d’informations sur les autres méthodes d’installation de {% data variables.large_files.product_name_short %} pour Windows, consultez ce [guide de démarrage](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Sur votre ordinateur, localisez le fichier téléchargé.
3. Double-cliquez sur le fichier appelé *git-lfs-windows-1.X.X.exe*, où 1.X.X est remplacé par la version Git LFS que vous avez téléchargée. Quand vous ouvrez ce fichier, Windows exécute un Assistant d’installation pour installer {% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Vérifiez que l’installation a réussi :
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si vous ne voyez pas de message indiquant que `git {% data variables.large_files.command_name %} install` a réussi, contactez {% data variables.contact.contact_support %}. Veillez à ajouter le nom de votre système d’exploitation.

{% endwindows %}

{% linux %}

1. Accédez à [git-lfs.github.com](https://git-lfs.github.com) et cliquez sur **Télécharger**.

  {% tip %}

  **Astuce :** Pour plus d’informations sur les autres méthodes d’installation de {% data variables.large_files.product_name_short %} pour Linux, consultez ce [guide de démarrage](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Sur votre ordinateur, localisez et décompressez le fichier téléchargé.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Remplacez le répertoire de travail actuel par le dossier que vous avez téléchargé et décompressé.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Remarque :** Le chemin de fichier que vous utilisez après `cd` dépend de votre système d’exploitation, de la version Git LFS que vous avez téléchargée et de l’emplacement où vous avez enregistré le téléchargement de {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Pour installer le fichier, exécutez cette commande :
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Remarque :** Vous devez peut-être utiliser `sudo ./install.sh` pour installer le fichier.

 {% endnote %}
5. Vérifiez que l’installation a réussi :
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Si vous ne voyez pas de message indiquant que `git {% data variables.large_files.command_name %} install` a réussi, contactez {% data variables.contact.contact_support %}. Veillez à ajouter le nom de votre système d’exploitation.

{% endlinux %}

## Pour aller plus loin

- « [Configuration de {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage) »
