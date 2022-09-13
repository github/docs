---
title: Introdução ao GitHub Copilot no Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Saiba como instalar o {% data variables.product.prodname_copilot %} no Neovim e passar a ver sugestões enquanto escreve comentários e códigos.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 8884d3ac0ae6fecdc75def792e2b3d4157537498
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079477'
---
## Sobre o {% data variables.product.prodname_copilot %} e o Neovim

{% data reusables.copilot.procedural-intro %}

Usando o Neovim, você pode ver e incorporar sugestões do {% data variables.product.prodname_copilot %} diretamente no editor.

## Pré-requisitos

Para usar o {% data variables.product.prodname_copilot %} no Neovim, você precisa ter o Neovim e o Node.js versão 17 ou inferior instalados. Para obter mais informações, confira a [documentação do Neovim](https://neovim.io/doc/) e o [site do Node.js](https://nodejs.org/en/).

## Como instalar a extensão do Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar o plug-in do {% data variables.product.prodname_copilot %} diretamente, você precisa saber onde o Neovim armazena plug-ins. Para instalar o plug-in, insira o comando a seguir no terminal.

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. Para configurar o {% data variables.product.prodname_copilot %}, abra o Neovim e insira o comando a seguir.

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - Para instalar o plug-in do {% data variables.product.prodname_copilot %} diretamente, você precisa saber onde o Neovim armazena plug-ins. Para instalar o plug-in, insira o comando a seguir no Git Bash.

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
