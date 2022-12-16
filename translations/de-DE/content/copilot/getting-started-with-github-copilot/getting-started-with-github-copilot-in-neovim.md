---
title: Erste Schritte mit GitHub Copilot in Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Erfahre, wie du {% data variables.product.prodname_copilot %} in Neovim installierst, um beim Schreiben von Kommentaren und Code Vorschläge zu erhalten.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 2eab3d278453ad283337d8e8dd6e66f7d39364e8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193033'
---
{% data reusables.copilot.copilot-cta-button %}

## Informationen zu {% data variables.product.prodname_copilot %} und Neovim

{% data reusables.copilot.procedural-intro %}

Wenn du Neovim verwendest, kannst du Vorschläge aus {% data variables.product.prodname_copilot %} direkt im Editor anzeigen und übernehmen.

## Voraussetzungen

{% data reusables.copilot.subscription-prerequisite %}

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
