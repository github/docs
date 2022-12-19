---
title: Introdução ao GitHub Copilot no Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Saiba como instalar o {% data variables.product.prodname_copilot %} no Neovim e passar a ver sugestões enquanto escreve comentários e códigos.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 2eab3d278453ad283337d8e8dd6e66f7d39364e8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193030'
---
{% data reusables.copilot.copilot-cta-button %}

## Sobre o {% data variables.product.prodname_copilot %} e o Neovim

{% data reusables.copilot.procedural-intro %}

Usando o Neovim, você pode ver e incorporar sugestões do {% data variables.product.prodname_copilot %} diretamente no editor.

## Pré-requisitos

{% data reusables.copilot.subscription-prerequisite %}

- Para usar o {% data variables.product.prodname_copilot %} no Neovim, você precisa ter o Neovim e o Node.js versão 17 ou inferior instalados. Para obter mais informações, confira a [documentação do Neovim](https://neovim.io/doc/) e o [site do Node.js](https://nodejs.org/en/).

## Como instalar a extensão do Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar o {% data variables.product.prodname_copilot %} com o gerenciador de plug-in interno do Neovim, insira o seguinte comando no Terminal.

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar o {% data variables.product.prodname_copilot %} com o gerenciador de plug-in interno do Neovim, insira o seguinte comando no Git Bash.

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar o {% data variables.product.prodname_copilot %} com o gerenciador de plug-in interno do Neovim, insira o seguinte comando:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## Aprendendo a usar o {% data variables.product.prodname_copilot %} no Neovim

Para obter diretrizes sobre como usar o {% data variables.product.prodname_copilot %} no Neovim, exiba a documentação do plug-in. Para ver a documentação, abra o Neovim e execute o comando a seguir.

  ```
  :help copilot
  ```

## Leitura adicional

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
