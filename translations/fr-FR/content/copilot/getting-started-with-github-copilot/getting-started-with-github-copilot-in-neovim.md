---
title: Bien démarrer avec GitHub Copilot dans Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Découvrez comment installer {% data variables.product.prodname_copilot %} dans Neovim, et commencez à voir des suggestions lorsque vous écrivez des commentaires et du code.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 6296ff5b89e86b4b51cbb04bd9ac4ba91863a1ac
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185066'
---
{% data reusables.copilot.copilot-cta-button %}

## À propos de {% data variables.product.prodname_copilot %} et de Neovim

{% data reusables.copilot.procedural-intro %}

Si vous utilisez Neovim, vous pouvez visualiser et intégrer les suggestions de {% data variables.product.prodname_copilot %} directement dans l’éditeur.

## Prérequis

- Pour utiliser {% data variables.product.prodname_copilot %}, vous devez disposer d’un abonnement {% data variables.product.prodname_copilot %} actif. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot) ».

- Pour utiliser {% data variables.product.prodname_copilot %} dans Neovim, vous devez avoir Neovim et Node.js version 17 ou version inférieure installés. Pour plus d’informations, consultez la [documentation de Neovim](https://neovim.io/doc/) et le [ site web Node.js](https://nodejs.org/en/).

## Installation de l’extension Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Pour installer {% data variables.product.prodname_copilot %} avec le gestionnaire de plug-ins intégré de Neovim, entrez la commande suivante dans Terminal.

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Pour installer {% data variables.product.prodname_copilot %} avec le gestionnaire de plug-ins intégré de Neovim, entrez la commande suivante dans Git Bash.

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Pour installer {% data variables.product.prodname_copilot %} avec le gestionnaire de plug-ins intégré de Neovim, entrez la commande suivante :

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## En savoir plus sur l’utilisation de {% data variables.product.prodname_copilot %} dans Neovim

Pour obtenir de l’aide sur l’utilisation de {% data variables.product.prodname_copilot %} dans Neovim, vous pouvez consulter la documentation du plug-in. Pour consulter la documentation, ouvrez Neovim et exécutez la commande suivante.

  ```
  :help copilot
  ```

## Pour aller plus loin

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
