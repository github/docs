---
title: Getting started with GitHub Copilot in Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in Neovim, and start seeing suggestions as you write comments and code.'
versions:
  feature: copilot
topics:
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and Neovim

{% data reusables.copilot.procedural-intro %}

If you use a Neovim, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor.

## 基本要求

To use {% data variables.product.prodname_copilot %} in Neovim you must have Neovim and Node.js version 17 or below installed. For more information, see the [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

## Installing the Neovim extension

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - To install the {% data variables.product.prodname_copilot %} plugin directly, you must know where Neovim stores plugins. To install the plugin, enter the following command in Terminal.

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. To configure {% data variables.product.prodname_copilot %}, open Neovim and enter the following command.

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - To install the {% data variables.product.prodname_copilot %} plugin directly, you must know where Neovim stores plugins. To install the plugin, enter the following command in Git Bash.

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
:help copilot ```

## 延伸阅读

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
