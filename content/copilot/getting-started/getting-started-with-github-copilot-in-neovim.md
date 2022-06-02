---
title: Getting started with GitHub Copilot in NeoVim
shortTitle: Neovim
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in Neovim, and start seeing suggestions as you write comments and code.'
versions:
  versions:
  fpt: '*'
  ghec: '*'
topics: 
  - Copilot
---

## Prerequisites

{% data reusables.copilot.copilot-prerequisites %}
- To use {% data variables.product.prodname_copilot %} in Neovim you must have Neovim and Node.js version 17 or below installed. For more information, see the [Neovim](https://neovim.io/doc/) documentation and the [Node.js](https://nodejs.org/en/) website.

## Installing the Neovim extension

{% mac %}


{% endmac %}


{% windows %}



{% endwindows %}




{% linux %}



{% endlinux %}

## Seeing your first suggestion

{% data reusables.copilot.supported-languages %}

1. To authenticate and invoke {% data variables.product.prodname_copilot %} in Neovim, type the following command:
    ```
      :Copilot setup
    ```
1. To see your first suggestion, begin typing a comment or code snippet. {% data variables.product.prodname_copilot %} will make a suggestion for you.
1. To accept the suggestion, press `Tab`.

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

1. To see alternative suggestions, begin typing a comment or code snippet. {% data variables.product.prodname_copilot %} will make a suggestion for you.
      - To see the next suggestion, press `<M-]>`.
      - To see the previous suggestion, press `<M-[>`.
      - To reject all suggestions, press `<C-]>`.
