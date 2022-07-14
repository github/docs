---
title: 开始在 Neovim 中使用 GitHub Copilot
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: '了解如何在 Neovim 中安装 {% data variables.product.prodname_copilot %}，并在编写注释和代码时开始查看建议。'
versions:
  feature: copilot
topics:
  - Copilot
---

## 关于 {% data variables.product.prodname_copilot %} 和 Neovim

{% data reusables.copilot.procedural-intro %}

如果使用 Neovim，则可以直接在编辑器中查看和合并来自 {% data variables.product.prodname_copilot %} 的建议。

## 基本要求

要在 Neovim 中使用 {% data variables.product.prodname_copilot %} ，您必须安装 Neovim 和 Node.js 版本 17 或更低版本。 有关详细信息，请参阅 [Neovim 文档](https://neovim.io/doc/)和 [Node.js 网站](https://nodejs.org/en/)。

## 安装 Neovim 扩展

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - 要直接安装 {% data variables.product.prodname_copilot %} 插件，您必须知道 Neovim 存储插件的位置。 要安装插件，请在终端中输入以下命令。

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. 要配置 {% data variables.product.prodname_copilot %}，请打开 Neovim 并输入以下命令。

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - 要直接安装 {% data variables.product.prodname_copilot %} 插件，您必须知道 Neovim 存储插件的位置。 要安装插件，请在 Git Bash 中输入以下命令。

      ```
      git clone https://github.com/github/copilot.vim \
      ~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
1. 要配置 {% data variables.product.prodname_copilot %}，请打开 Neovim 并输入以下命令。

   ```
   :Copilot setup
   ```

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - 要直接安装 {% data variables.product.prodname_copilot %} 插件，您必须知道 Neovim 在哪里储存插件。 要安装插件，请在 Git Bash 中输入以下命令。

      ```
      git clone https://github.com/github/copilot.vim \
~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
      ```
1. 要配置 {% data variables.product.prodname_copilot %}，请打开 Neovim 并输入以下命令。

   ```
   :Copilot setup
   ```
{% endlinux %}

## Learning to use {% data variables.product.prodname_copilot %} in Neovim

For guidance on using {% data variables.product.prodname_copilot %} in Neovim, you can view the plugin documentation. 要查看文档，请打开 Neovim 并运行以下命令。
```
:help copilot ```

## 延伸阅读

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
