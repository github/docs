---
title: Asociar editores de texto con Git
intro: Usar un editor de texto para abrir y editar tus archivos con Git.
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145148763'
---
{% mac %}

## Usar Atom como editor

1. Instale [Atom](https://atom.io/). Para más información, vea "[Instalación de Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" en la documentación de Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Uso de {% data variables.product.prodname_vscode %} como editor

1. Instala [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode_shortname %}, la sección "[Configuración de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)".
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar Sublime Text como editor

1. Instale [Sublime Text](https://www.sublimetext.com/). Para obtener más información, vea "[Instalación](https://docs.sublimetext.io/guide/getting-started/installation.html)" en la documentación de Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## Usar TextMate como editor

1. Instale [TextMate](https://macromates.com/).
2. Instale la utilidad de shell `mate` de TextMate. Para obtener más información, vea "[`mate` y `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)" en la documentación de TextMate.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## Usar Atom como editor

1. Instale [Atom](https://atom.io/). Para más información, vea "[Instalación de Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" en la documentación de Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Uso de {% data variables.product.prodname_vscode %} como editor

1. Instala [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode_shortname %}, la sección "[Configuración de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)".
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar Sublime Text como editor

1. Instale [Sublime Text](https://www.sublimetext.com/). Para obtener más información, vea "[Instalación](https://docs.sublimetext.io/guide/getting-started/installation.html)" en la documentación de Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## Usar Notepad++ como editor

1. Instale Notepad++ desde https://notepad-plus-plus.org/. Para obtener más información, vea "[Introducción](https://npp-user-manual.org/docs/getting-started/)" en la documentación de Notepad++.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## Usar Atom como editor

1. Instale [Atom](https://atom.io/). Para más información, vea "[Instalación de Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" en la documentación de Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Uso de {% data variables.product.prodname_vscode %} como editor

1. Instala [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode_shortname %}, la sección "[Configuración de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)".
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar Sublime Text como editor

1. Instale [Sublime Text](https://www.sublimetext.com/). Para obtener más información, vea "[Instalación](https://docs.sublimetext.io/guide/getting-started/installation.html)" en la documentación de Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escriba el siguiente comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
