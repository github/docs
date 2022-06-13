---
title: Getting started with GitHub Copilot in Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in Neovim, and start seeing suggestions as you write comments and code.'
versions:
  feature: 'copilot'
topics: 
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and Neovim

{% data reusables.copilot.procedural-intro %}

If you use a Neovim, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor.

## Prerequisites

To use {% data variables.product.prodname_copilot %} in Neovim you must have Neovim and Node.js version 17 or below installed. For more information, see the [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

## Installing the Neovim extension

{% mac %}

1. To use {% data variables.product.prodname_copilot %} in Neovim, install the {% data variables.product.prodname_copilot %} plugin. You can either install the plugin from a plugin manager or directly.
   - If you use a plugin manager like vim-plug or packer.nvim, use the plugin manager to install `github/copilot.vim`. For more information, see the documentation for the plugin manager. For example, you can see the documentation for [vim-plug](https://github.com/junegunn/vim-plug) or [packer.nvim](https://github.com/wbthomason/packer.nvim).
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

1. To use {% data variables.product.prodname_copilot %} in Neovim, install the {% data variables.product.prodname_copilot %} plugin:
   - You can install `github/copilot.vim` with a plugin manager, such as vim-plug or packer.nvim. For more information, see the [vim-plug](https://github.com/junegunn/vim-plug) documentation, or the [packer.nvim](https://github.com/wbthomason/packer.nvim) documentation.
   - Alternatively, you can install the {% data variables.product.prodname_copilot %} plugin directly into your Neovim config file by running the following command in Git Bash:

      ```
      git clone https://github.com/github/copilot.vim \
      ~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
1. To authenticate and invoke {% data variables.product.prodname_copilot %} run the following command in Neovim:

```
:Copilot setup
 ```

{% endwindows %}


{% linux %}

1. To use {% data variables.product.prodname_copilot %} in Neovim, install the {% data variables.product.prodname_copilot %} plugin:
   - You can install `github/copilot.vim` with a plugin manager, such as vim-plug or packer.nvim. For more information, see the [vim plug](https://github.com/junegunn/vim-plug) documentation, or the [packer.nvim](https://github.com/wbthomason/packer.nvim) documentation.
   - Alternatively, you can install the {% data variables.product.prodname_copilot %} plugin directly into your Neovim config file by running the following command in the terminal:

      ```
      git clone https://github.com/github/copilot.vim \
      ~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
      ```
1. To authenticate and invoke {% data variables.product.prodname_copilot %} run the following command in Neovim:

```
:Copilot setup
 ```
{% endlinux %}

## Learning to use {% data variables.product.prodname_copilot %} in Neovim

For guidance on using {% data variables.product.prodname_copilot %} in Neovim, you can view the plugin documentation. To see the documentation, open Neovim and run the following command.

      
      :help copilot
      

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
