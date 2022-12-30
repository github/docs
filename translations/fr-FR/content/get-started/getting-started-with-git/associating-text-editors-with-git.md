---
title: Association d’éditeurs de texte à Git
intro: Utilisez un éditeur de texte pour ouvrir et modifier vos fichiers avec Git.
redirect_from:
  - /textmate
  - /articles/using-textmate-as-your-default-editor
  - /articles/using-sublime-text-2-as-your-default-editor
  - /articles/associating-text-editors-with-git
  - /github/using-git/associating-text-editors-with-git
  - /github/getting-started-with-github/associating-text-editors-with-git
  - /github/getting-started-with-github/getting-started-with-git/associating-text-editors-with-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Associate text editors
ms.openlocfilehash: 0d02c32ff04d4a5a2a1003464175e866630603f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148753'
---
{% mac %}

## Utilisation d’Atom comme éditeur

1. Installez [Atom](https://atom.io/). Pour plus d’informations, consultez « [Installing Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/) » dans la documentation Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Utilisation de {% data variables.product.prodname_vscode %} en tant qu’éditeur

1. Installez [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) » dans la documentation de {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Utilisation de Sublime Text comme éditeur

1. Installez [Sublime Text](https://www.sublimetext.com/). Pour plus d’informations, consultez « [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html) » dans la documentation Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## Utilisation de TextMate comme éditeur

1. Installez [TextMate](https://macromates.com/).
2. Installez l’utilitaire d’interpréteur de commandes `mate` de TextMate. Pour plus d’informations, consultez « [`mate` and `rmate`](https://macromates.com/blog/2011/mate-and-rmate/) » dans la documentation TextMate.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## Utilisation d’Atom comme éditeur

1. Installez [Atom](https://atom.io/). Pour plus d’informations, consultez « [Installing Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/) » dans la documentation Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Utilisation de {% data variables.product.prodname_vscode %} en tant qu’éditeur

1. Installez [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) » dans la documentation de {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Utilisation de Sublime Text comme éditeur

1. Installez [Sublime Text](https://www.sublimetext.com/). Pour plus d’informations, consultez « [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html) » dans la documentation Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## Utilisation de Notepad++ comme éditeur

1. Installez Notepad++ à partir de https://notepad-plus-plus.org/. Pour plus d’informations, consultez « [Getting Started](https://npp-user-manual.org/docs/getting-started/) » dans la documentation Notepad++.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## Utilisation d’Atom comme éditeur

1. Installez [Atom](https://atom.io/). Pour plus d’informations, consultez « [Installing Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/) » dans la documentation Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Utilisation de {% data variables.product.prodname_vscode %} en tant qu’éditeur

1. Installez [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) » dans la documentation de {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Utilisation de Sublime Text comme éditeur

1. Installez [Sublime Text](https://www.sublimetext.com/). Pour plus d’informations, consultez « [Installation](https://docs.sublimetext.io/guide/getting-started/installation.html) » dans la documentation Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Tapez la commande suivante :
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
