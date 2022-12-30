---
title: 关联文本编辑器与 Git
intro: 使用文本编辑器打开文件并通过 Git 编辑。
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148751'
---
{% mac %}

## 使用 Atom 作为编辑器

1. 安装 [Atom](https://atom.io/)。 有关详细信息，请参阅 Atom 文档中的“[安装 Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## 将 {% data variables.product.prodname_vscode %} 用作编辑器

1. 安装 [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %})。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[设置 {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## 使用 Sublime Text 作为编辑器

1. 安装 [Sublime Text](https://www.sublimetext.com/)。 有关详细信息，请参阅 Sublime Text 文档中的“[安装](https://docs.sublimetext.io/guide/getting-started/installation.html)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## 使用 TextMate 作为编辑器

1. 安装 [TextMate](https://macromates.com/)。
2. 安装 TextMate 的 `mate` shell 实用工具。 有关详细信息，请参阅 TextMate 文档中的“[`mate` 和 `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
4. 键入以下命令：
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## 使用 Atom 作为编辑器

1. 安装 [Atom](https://atom.io/)。 有关详细信息，请参阅 Atom 文档中的“[安装 Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## 将 {% data variables.product.prodname_vscode %} 用作编辑器

1. 安装 [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %})。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[设置 {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## 使用 Sublime Text 作为编辑器

1. 安装 [Sublime Text](https://www.sublimetext.com/)。 有关详细信息，请参阅 Sublime Text 文档中的“[安装](https://docs.sublimetext.io/guide/getting-started/installation.html)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## 使用 Notepad++ 作为编辑器

1. 从 https://notepad-plus-plus.org/ 安装 Notepad++。 有关详细信息，请参阅 Notepad++ 文档中的“[入门](https://npp-user-manual.org/docs/getting-started/)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## 使用 Atom 作为编辑器

1. 安装 [Atom](https://atom.io/)。 有关详细信息，请参阅 Atom 文档中的“[安装 Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

## 将 {% data variables.product.prodname_vscode %} 用作编辑器

1. 安装 [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %})。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[设置 {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/Docs/setup/setup-overview)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## 使用 Sublime Text 作为编辑器

1. 安装 [Sublime Text](https://www.sublimetext.com/)。 有关详细信息，请参阅 Sublime Text 文档中的“[安装](https://docs.sublimetext.io/guide/getting-started/installation.html)”。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 键入以下命令：
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
