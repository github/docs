---
title: Iniciar con el Copiloto de GitHub en Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Aprende cómo instalar el {% data variables.product.prodname_copilot %} en Neovim y comienza a ver sugerencias conforme escribas comentarios y código.'
versions:
  feature: copilot
topics:
  - Copilot
---

## Acerca del {% data variables.product.prodname_copilot %} y Neovim

{% data reusables.copilot.procedural-intro %}

Si utilizas un Neovim, puedes ver e incorporar sugerencias desde el {% data variables.product.prodname_copilot %} directamente dentro del editor.

## Prerrequisitos

Para utilizar el {% data variables.product.prodname_copilot %} en Neovim, debes tener instalados Neovim y Node.js versión 17 o inferior. Para obtener más información, consulta la [documentación de Neovim](https://neovim.io/doc/) y el [sitio web de Node.js](https://nodejs.org/en/).

## Instalar la extensión de Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar el complemento del {% data variables.product.prodname_copilot %} directamente, debes saber dónde Neovim almacena los complementos. Para instalar el complemento, ingresa el siguiente comando en la terminal.

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. Para configurar el {% data variables.product.prodname_copilot %}, abre Neovim e ingresa el siguiente comando.

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - Para instalar el complemento del {% data variables.product.prodname_copilot %} directamente, debes saber dónde Neovim almacena los complementos. Para instalar el complemento, ingresa el siguiente comando en Git Bash.

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

## Leer más

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
