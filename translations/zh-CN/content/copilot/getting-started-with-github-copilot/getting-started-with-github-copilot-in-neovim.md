---
title: 在 Neovim 中开始使用 GitHub Copilot
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: '了解如何在 Neovim 中安装 {% data variables.product.prodname_copilot %}，并了解如何开始在编写注释和代码时查看建议。'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 8884d3ac0ae6fecdc75def792e2b3d4157537498
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079734'
---
## 关于 {% data variables.product.prodname_copilot %} 和 Neovim

{% data reusables.copilot.procedural-intro %}

如果使用 Neovim，可以直接在编辑器中查看并合并来自 {% data variables.product.prodname_copilot %} 的建议。

## 先决条件

若要在 Neovim 中使用 {% data variables.product.prodname_copilot %}，必须安装 Neovim 和 Node.js 版本 17 或更低版本。 有关详细信息，请参阅 [Neovim 文档](https://neovim.io/doc/)和 [Node.js 网站](https://nodejs.org/en/)。

## 安装 Neovim 扩展

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - 若要直接安装 {% data variables.product.prodname_copilot %} 插件，必须要知道 Neovim 存储插件的位置。 若要安装插件，请在终端中输入以下命令。

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. 若要配置 {% data variables.product.prodname_copilot %}，请打开 Neovim 并输入以下命令。

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - 若要直接安装 {% data variables.product.prodname_copilot %} 插件，必须要知道 Neovim 存储插件的位置。 若要安装插件，请在 Git Bash 中输入以下命令。

      ```
      git clone https://github.com/github/copilot.vim \
      ~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
1. To configure {% data variables.product.prodname_copilot %}, open Neovim and enter the following command.

   ```
   :Copilot setup
   ```

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - To install the {% data variables.product.prodname_copilot %} plugin directly, you must know where Neovim stores plugins. To install the plugin, enter the following command in Git Bash.

      ```
      git clone https://github.com/github/copilot.vim \
      ~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
      ```
1. To configure {% data variables.product.prodname_copilot %}, open Neovim and enter the following command.

   ```
   :Copilot setup
   ```
{% endlinux %}

## Learning to use {% data variables.product.prodname_copilot %} in Neovim

For guidance on using {% data variables.product.prodname_copilot %} in Neovim, you can view the plugin documentation. To see the documentation, open Neovim and run the following command.
```
:help copilot
```      

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
