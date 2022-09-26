---
title: Associar editores de texto ao Git
intro: Use um editor de texto para abrir e editar seus arquivos com o Git.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148749'
---
{% mac %}

## Usar o Atom como seu editor

1. Instale o [Atom](https://atom.io/). Para obter mais informações, confira "[Como instalar o Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" na documentação do Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Usando o {% data variables.product.prodname_vscode %} como editor

1. Instale o [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obter mais informações, confira "[Configurar o {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" na documentação do {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar o Sublime Text como seu editor

1. Instale o [Sublime Text](https://www.sublimetext.com/). Para obter mais informações, confira "[Instalação](https://docs.sublimetext.io/guide/getting-started/installation.html)" na documentação do Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## Usar o TextMate como seu editor

1. Instale o [TextMate](https://macromates.com/).
2. Instale o utilitário de shell `mate` do TextMate. Para obter mais informações, confira "[`mate` e `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)" na documentação do TextMate.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Digite este comando:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## Usar o Atom como seu editor

1. Instale o [Atom](https://atom.io/). Para obter mais informações, confira "[Como instalar o Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" na documentação do Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Usando o {% data variables.product.prodname_vscode %} como editor

1. Instale o [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obter mais informações, confira "[Configurar o {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" na documentação do {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar o Sublime Text como seu editor

1. Instale o [Sublime Text](https://www.sublimetext.com/). Para obter mais informações, confira "[Instalação](https://docs.sublimetext.io/guide/getting-started/installation.html)" na documentação do Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## Usar o Notepad++ como seu editor

1. Instale o Notepad++ por meio de https://notepad-plus-plus.org/. Para obter mais informações, confira "[Introdução](https://npp-user-manual.org/docs/getting-started/)" na documentação do Notepad++.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## Usar o Atom como seu editor

1. Instale o [Atom](https://atom.io/). Para obter mais informações, confira "[Como instalar o Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" na documentação do Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Usando o {% data variables.product.prodname_vscode %} como editor

1. Instale o [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obter mais informações, confira "[Configurar o {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" na documentação do {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar o Sublime Text como seu editor

1. Instale o [Sublime Text](https://www.sublimetext.com/). Para obter mais informações, confira "[Instalação](https://docs.sublimetext.io/guide/getting-started/installation.html)" na documentação do Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
