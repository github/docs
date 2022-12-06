---
title: Introdução ao GitHub Copilot no Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Saiba como instalar o {% data variables.product.prodname_copilot %} no Neovim e passar a ver sugestões enquanto escreve comentários e códigos.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 6296ff5b89e86b4b51cbb04bd9ac4ba91863a1ac
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185064'
---
{% data reusables.copilot.copilot-cta-button %}

## Sobre o {% data variables.product.prodname_copilot %} e o Neovim

{% data reusables.copilot.procedural-intro %}

Usando o Neovim, você pode ver e incorporar sugestões do {% data variables.product.prodname_copilot %} diretamente no editor.

## Pré-requisitos

- Para usar o {% data variables.product.prodname_copilot %}, é preciso ter uma assinatura ativa do {% data variables.product.prodname_copilot %}. Para ver mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)".

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
