---
title: 在 Neovim 中开始使用 GitHub Copilot
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: '了解如何在 Neovim 中安装 {% data variables.product.prodname_copilot %}，并了解如何开始在编写注释和代码时查看建议。'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 2eab3d278453ad283337d8e8dd6e66f7d39364e8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193031'
---
{% data reusables.copilot.copilot-cta-button %}

## 关于 {% data variables.product.prodname_copilot %} 和 Neovim

{% data reusables.copilot.procedural-intro %}

如果使用 Neovim，可以直接在编辑器中查看并合并来自 {% data variables.product.prodname_copilot %} 的建议。

## 先决条件

{% data reusables.copilot.subscription-prerequisite %}

- 若要在 Neovim 中使用 {% data variables.product.prodname_copilot %}，必须安装 Neovim 和 Node.js 版本 17 或更低版本。 有关详细信息，请参阅 [Neovim 文档](https://neovim.io/doc/)和 [Node.js 网站](https://nodejs.org/en/)。

## 安装 Neovim 扩展

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - 若要使用 Neovim 的内置插件管理器安装 {% data variables.product.prodname_copilot %}，请在终端中输入以下命令。

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - 若要使用 Neovim 的内置插件管理器安装 {% data variables.product.prodname_copilot %}，请在 Git Bash 中输入以下命令。

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - 若要使用 Neovim 的内置插件管理器安装 {% data variables.product.prodname_copilot %}，请输入以下命令：

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## 了解如何在 Neovim 中使用 {% data variables.product.prodname_copilot %}

有关在 Neovim 中使用 {% data variables.product.prodname_copilot %} 的指导，可以查看插件文档。 若要查看文档，请打开 Neovim 并运行以下命令。

  ```
  :help copilot
  ```

## 延伸阅读

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
