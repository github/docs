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

## Prerequisites

To use {% data variables.product.prodname_copilot %} in Neovim you must have Neovim and Node.js version 17 or below installed. For more information, see the [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

## Installing the Neovim extension

{% mac %}

1. To use {% data variables.product.prodname_copilot %} in Neovim, install the {% data variables.product.prodname_copilot %} plugin:
   - You can install `github/copilot.vim` with a plugin manager, such as vim-plug or packer.nvim. For more information, see the [vim plug](https://github.com/junegunn/vim-plug) documentation, or the [packer.nvim](https://github.com/wbthomason/packer.nvim) documentation.
   - Alternatively, you can install the {% data variables.product.prodname_copilot %} plugin directly into your Neovim config file by running the following command in Terminal:

      ```
      git clone https://github.com/github/copilot.vim \
      ~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
      ```
1. To authenticate and invoke {% data variables.product.prodname_copilot %} run the following command in Neovim:

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

## Seeing suggestions in Neovim

For guidance on using {% data variables.product.prodname_copilot %} in Neovim, invoke the {% data variables.product.prodname_copilot %} documentation in Neovim by running the following command:

      ```
      :help copilot
      ```

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
