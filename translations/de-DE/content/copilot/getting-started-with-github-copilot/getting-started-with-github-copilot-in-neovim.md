---
title: Erste Schritte mit GitHub Copilot in Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Erfahre, wie du {% data variables.product.prodname_copilot %} in Neovim installierst, um beim Schreiben von Kommentaren und Code Vorschläge zu erhalten.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 6296ff5b89e86b4b51cbb04bd9ac4ba91863a1ac
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185067'
---
{% data reusables.copilot.copilot-cta-button %}

## Informationen zu {% data variables.product.prodname_copilot %} und Neovim

{% data reusables.copilot.procedural-intro %}

Wenn du Neovim verwendest, kannst du Vorschläge aus {% data variables.product.prodname_copilot %} direkt im Editor anzeigen und übernehmen.

## Voraussetzungen

- Um {% data variables.product.prodname_copilot %} verwenden zu können, benötigst du ein aktives {% data variables.product.prodname_copilot %}-Abonnement. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot).

- Um {% data variables.product.prodname_copilot %} in Neovim zu verwenden, musst Neovim und höchstens die Node.js-Version 17 installiert sein. Weitere Informationen findest du in der [Neovim-Dokumentation](https://neovim.io/doc/) und auf der [Node.js-Website](https://nodejs.org/en/).

## Die Neovim-Erweiterung installieren

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Gib den folgenden Befehl in Terminal ein, um {% data variables.product.prodname_copilot %} mit dem integrierten Plug-In-Manager von Neovim zu installieren:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Gib den folgenden Befehl in Git Bash ein, um {% data variables.product.prodname_copilot %} mit dem integrierten Plug-In-Manager von Neovim zu installieren:

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Gib den folgenden Befehl ein, um {% data variables.product.prodname_copilot %} mit dem integrierten Plug-In-Manager von Neovim zu installieren:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## Erlernen der Verwendung von {% data variables.product.prodname_copilot %} in Neovim

Einen Leitfaden zur Verwendung von {% data variables.product.prodname_copilot %} in Neovim findest du in der Plug-In-Dokumentation. Öffne Neovim, und führe den folgenden Befehl aus, um die Dokumentation anzuzeigen.

  ```
  :help copilot
  ```

## Weitere Informationsquellen

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
