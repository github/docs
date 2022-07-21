---
title: Primeiros passos com o GitHub Copilot no Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Aprenda a instalar {% data variables.product.prodname_copilot %} no Neovim, e comece a ver sugestões conforme você escreve comentários e códigos.'
versions:
  feature: copilot
topics:
  - Copilot
---

## Sobre {% data variables.product.prodname_copilot %} e Neovim

{% data reusables.copilot.procedural-intro %}

Se você usar um Neovim, você poderá ver e incorporar sugestões de {% data variables.product.prodname_copilot %} diretamente no editor.

## Pré-requisitos

Para usar {% data variables.product.prodname_copilot %} no Neovim, é necessário ter a Neovim e o Node.js versão 17 ou inferior instalada. Para obter mais informações, consulte a [documentação do Neovim](https://neovim.io/doc/) e o [site Node.js](https://nodejs.org/en/).

## Instalando a extensão do Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar o plugin de {% data variables.product.prodname_copilot %} diretamente, você deve saber onde Neovim armazena plugins. Para instalar o plugin, digite o seguinte comando no Terminal.

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. Para configurar {% data variables.product.prodname_copilot %}, abra o Neovim e digite o seguinte comando.

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - Para instalar o plugin de {% data variables.product.prodname_copilot %} diretamente, você deve saber onde Neovim armazena plugins. Para instalar o plugin, digite o seguinte comando no Git Bash.

      ```
      git clone https://github.com/github/copilot.vim \
      ~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
1. Para configurar {% data variables.product.prodname_copilot %}, abra o Neovim e digite o seguinte comando.

   ```
   :Copilot setup
   ```

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - To install the {% data variables.product.prodname_copilot %} plugin directly, you must know where Neovim stores plugins. Para instalar o plugin, digite o seguinte comando no Git Bash.

      ```
      git clone https://github.com/github/copilot.vim \
~/.config/PATH/TO/YOUR/NEOVIM/CONFIG/FILE/copilot.vim
      ```
1. Para configurar {% data variables.product.prodname_copilot %}, abra o Neovim e digite o seguinte comando.

   ```
   :Copilot setup
   ```
{% endlinux %}

## Learning to use {% data variables.product.prodname_copilot %} em Neovim

Para orientações sobre o uso de {% data variables.product.prodname_copilot %} no Neovim, você pode consultar a documentação do plugin. Para ver a documentação, abra o Neovim e execute o seguinte comando.
```
:help copilot ```

## Leia mais

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
