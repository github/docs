---
title: 从命令行启动 GitHub Desktop
shortTitle: Launching from the command line
intro: 您可以从命令行启动 GitHub Desktop。
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: f1624bb5266183d09804d43cf0b04db580231957
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099212'
---
{% mac %}

1. 在菜单栏中，选择 {% data variables.product.prodname_desktop %} 菜单，然后单击“安装命令行工具” 。
![在 {% data variables.product.prodname_desktop %} 下拉菜单中安装命令行工具选项](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. 打开终端。
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  还可以更改为存储库路径，然后键入 `github .` 可打开该存储库。

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. 打开命令提示符。
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 还可以更改为存储库路径，然后键入 `github .` 可打开该存储库。

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
