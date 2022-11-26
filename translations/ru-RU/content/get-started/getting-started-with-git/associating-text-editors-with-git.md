---
title: Связывание текстовых редакторов с Git
intro: В текстовом редакторе вы можете открывать и редактировать файлы с использованием GIT.
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
ms.openlocfilehash: b700d2c11771ccebf5a3888d0052892c9f7a3e51
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009223'
---
{% mac %}

## Использование {% data variables.product.prodname_vscode %} в качестве редактора

1. Установите [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) в документации по {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Введите эту команду:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Использование Sublime Text в качестве редактора

1. Установите [Sublime Text](https://www.sublimetext.com/). Дополнительные сведения см. в разделе [Установка](https://docs.sublimetext.io/guide/getting-started/installation.html) документации по Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Введите эту команду:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## Использование TextMate в качестве редактора

1. Установите [TextMate](https://macromates.com/).
2. Установите служебную программу оболочки TextMate `mate`. Дополнительные сведения см. в разделе [`mate` и `rmate`](https://macromates.com/blog/2011/mate-and-rmate/) документации TextMate.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Введите эту команду:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## Использование {% data variables.product.prodname_vscode %} в качестве редактора

1. Установите [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) в документации по {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Введите эту команду:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Использование Sublime Text в качестве редактора

1. Установите [Sublime Text](https://www.sublimetext.com/). Дополнительные сведения см. в разделе [Установка](https://docs.sublimetext.io/guide/getting-started/installation.html) документации по Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Введите эту команду:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## Использование Notepad++ в качестве редактора

1. Установите Notepad++ со страницы https://notepad-plus-plus.org/. Дополнительные сведения см. в разделе [Приступая к работе](https://npp-user-manual.org/docs/getting-started/) документации по Notepad++.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Введите эту команду:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## Использование {% data variables.product.prodname_vscode %} в качестве редактора

1. Установите [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}). Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview) в документации по {% data variables.product.prodname_vscode_shortname %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Введите эту команду:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Использование Sublime Text в качестве редактора

1. Установите [Sublime Text](https://www.sublimetext.com/). Дополнительные сведения см. в разделе [Установка](https://docs.sublimetext.io/guide/getting-started/installation.html) документации по Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Введите эту команду:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
