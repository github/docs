---
title: Introducción a GitHub Copilot en Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Obtén información sobre cómo instalar {% data variables.product.prodname_copilot %} en Neovim y empezar a ver sugerencias a medida que escribes comentarios y código.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 8884d3ac0ae6fecdc75def792e2b3d4157537498
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080584'
---
## Acerca de {% data variables.product.prodname_copilot %} y Neovim

{% data reusables.copilot.procedural-intro %}

Si usas Neovim, puedes ver e incorporar sugerencias de {% data variables.product.prodname_copilot %} directamente en el editor.

## Prerrequisitos

Para usar {% data variables.product.prodname_copilot %} en Neovim, debes tener Neovim y la versión 17 o posterior de Node.js instalada. Para obtener más información, consulta la [documentación de Neovim](https://neovim.io/doc/) y el [sitio web de Node.js](https://nodejs.org/en/).

## Instalación de la extensión de Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar directamente el complemento de {% data variables.product.prodname_copilot %}, debes saber dónde almacena Neovim los complementos. Para instalar el complemento, escribe el comando siguiente en el terminal.

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. Para configurar {% data variables.product.prodname_copilot %}, abre Neovim y escribe el comando siguiente.

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - Para instalar directamente el complemento de {% data variables.product.prodname_copilot %}, debes saber dónde almacena Neovim los complementos. Para instalar el complemento, escribe el comando siguiente en Git Bash.

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
