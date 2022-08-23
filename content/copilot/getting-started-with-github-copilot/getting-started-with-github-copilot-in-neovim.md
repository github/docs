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

## Prerequisites

To use {% data variables.product.prodname_copilot %} in Neovim you must have Neovim and Node.js version 17 or below installed. For more information, see the [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

## Installing the Neovim extension

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - To install {% data variables.product.prodname_copilot %} with Neovim's built-in plugin manager, enter the following command in Terminal.

         mkdir -p ~/.config/nvim/pack/github/start
         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim
  
   - Alternatively, if you use a third-party plugin manager, use the plugin manager to install `github/copilot.vim`. 

1. To configure {% data variables.product.prodname_copilot %}, open Neovim and enter the following command.

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - To install {% data variables.product.prodname_copilot %} with Neovim's built-in plugin manager, enter the following command in Git Bash.

         mkdir -p ~/.config/nvim/pack/github/start
         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim
  
   - Alternatively, if you use a third-party plugin manager, use the plugin manager to install `github/copilot.vim`. 
1. Visit https://github.com/settings/copilot and complete the required steps.

1. To configure {% data variables.product.prodname_copilot %}, open Neovim and enter the following command.

   ```
   :Copilot setup
   ```

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - To install {% data variables.product.prodname_copilot %} with Neovim's built-in plugin manager, enter the following command in Terminal.

         mkdir -p ~/.config/nvim/pack/github/start
         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim
  
   - Alternatively, if you use a third-party plugin manager, use the plugin manager to install `github/copilot.vim`. 

      ```
1. Visit https://github.com/settings/copilot and complete the required steps.
1. To configure {% data variables.product.prodname_copilot %}, open Neovim and enter the following command.

   ```
   :Copilot setup
   ```
1. Enable {% data variables.product.prodname_copilot %} in your Neovim configuration, or with the Neovim command.
   ```
   :Copilot enable
   ```
{% endlinux %}

## Learning to use {% data variables.product.prodname_copilot %} in Neovim

For guidance on using {% data variables.product.prodname_copilot %} in Neovim, you can view the plugin documentation. To see the documentation, open Neovim and run the following command.
```
:help copilot
```      

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
