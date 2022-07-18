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
shortTitle: Editores de texto asociados
---

{% mac %}

## Usar Atom como editor

1. Instala [Atom](https://atom.io/). Para obtener más información, consulta la sección "[Instalar Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" en la documentación de Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Utilizar {% data variables.product.prodname_vscode %} como tu editor

1. Omstañar [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar Sublime Text como tu editor

1. Instala [Sublime Text](https://www.sublimetext.com/). Para obtener más información, consulta la sección "[Instalación](https://docs.sublimetext.io/guide/getting-started/installation.html)" en la documentación de Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## Usar TextMate como editor

1. Instala [TextMate](https://macromates.com/).
2. Instala la utilidad de shell `mate` de TextMate. Para obtener más información, consulta "[`mate` y `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)" en la documentación de TextMate.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Escribe este comando:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## Usar Atom como editor

1. Instala [Atom](https://atom.io/). Para obtener más información, consulta la sección "[Instalar Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" en la documentación de Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Utilizar {% data variables.product.prodname_vscode %} como tu editor

1. Omstañar [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar Sublime Text como tu editor

1. Instala [Sublime Text](https://www.sublimetext.com/). Para obtener más información, consulta la sección "[Instalación](https://docs.sublimetext.io/guide/getting-started/installation.html)" en la documentación de Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## Usar Notepad++ como editor

1. Instala Notepad++ desde https://notepad-plus-plus.org/. Para obtener más información, consulta la sección "[Comenzar](https://npp-user-manual.org/docs/getting-started/)" en la documentación de Notepad++.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## Usar Atom como editor

1. Instala [Atom](https://atom.io/). Para obtener más información, consulta la sección "[Instalar Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" en la documentación de Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## Utilizar {% data variables.product.prodname_vscode %} como tu editor

1. Omstañar [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Usar Sublime Text como tu editor

1. Instala [Sublime Text](https://www.sublimetext.com/). Para obtener más información, consulta la sección "[Instalación](https://docs.sublimetext.io/guide/getting-started/installation.html)" en la documentación de Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Escribe este comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
