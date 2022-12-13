---
title: Introducción a GitHub Copilot en Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Obtén información sobre cómo instalar {% data variables.product.prodname_copilot %} en Neovim y empezar a ver sugerencias a medida que escribes comentarios y código.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 6296ff5b89e86b4b51cbb04bd9ac4ba91863a1ac
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185071'
---
{% data reusables.copilot.copilot-cta-button %}

## Acerca de {% data variables.product.prodname_copilot %} y Neovim

{% data reusables.copilot.procedural-intro %}

Si usas Neovim, puedes ver e incorporar sugerencias de {% data variables.product.prodname_copilot %} directamente en el editor.

## Prerrequisitos

- Para usar {% data variables.product.prodname_copilot %} debes tener una suscripción de {% data variables.product.prodname_copilot %}. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)".

- Para usar {% data variables.product.prodname_copilot %} en Neovim, debes tener Neovim y la versión 17 o posterior de Node.js instalada. Para obtener más información, consulta la [documentación de Neovim](https://neovim.io/doc/) y el [sitio web de Node.js](https://nodejs.org/en/).

## Instalación de la extensión de Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar {% data variables.product.prodname_copilot %} con el administrador de complementos integrado de Neovim, escribe el siguiente comando en Terminal.

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar {% data variables.product.prodname_copilot %} con el administrador de complementos integrado de Neovim, escribe el siguiente comando en Git Bash.

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Para instalar {% data variables.product.prodname_copilot %} con el administrador de complementos integrado de Neovim, escribe el siguiente comando:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## Aprender a usar {% data variables.product.prodname_copilot %} en Neovim

Para obtener instrucciones sobre el uso de {% data variables.product.prodname_copilot %} en Neovim, puedes ver la documentación del complemento. Para ver la documentación, abre Neovim y ejecuta el siguiente comando.

  ```
  :help copilot
  ```

## Información adicional

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
