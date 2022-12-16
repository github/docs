---
title: Neovim で GitHub Copilot の使用を開始する
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: '{% data variables.product.prodname_copilot %} を Neovim にインストールし、コメントやコードを記述するときに候補が表示されるようにする方法について説明します。'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 2eab3d278453ad283337d8e8dd6e66f7d39364e8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193034'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} と Neovim について

{% data reusables.copilot.procedural-intro %}

Neovim を使用すると、{% data variables.product.prodname_copilot %} からの候補をエディター内で直接表示し、取り入れることができます。

## 前提条件

{% data reusables.copilot.subscription-prerequisite %}

- Neovim で {% data variables.product.prodname_copilot %} を使うには、Neovim と Node.js バージョン 17 以降をインストールする必要があります。 詳細については、[Neovim のドキュメント](https://neovim.io/doc/)と [Node.js の Web サイト](https://nodejs.org/en/)を参照してください。

## Neovim 拡張機能のインストール

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Neovim の組み込みプラグイン マネージャーを使って {% data variables.product.prodname_copilot %} をインストールするには、ターミナルで次のコマンドを入力します。

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Neovim の組み込みプラグイン マネージャーを使って {% data variables.product.prodname_copilot %} をインストールするには、Git Bash で次のコマンドを入力します。

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Neovim の組み込みプラグイン マネージャーを使って {% data variables.product.prodname_copilot %} をインストールするには、次のコマンドを入力します。

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## Neovim で {% data variables.product.prodname_copilot %} を使う方法を学習する

Neovim での {% data variables.product.prodname_copilot %} の使用に関するガイダンスについては、プラグインのドキュメントを参照してください。 ドキュメントを表示するには、Neovim を開いて次のコマンドを実行します。

  ```
  :help copilot
  ```

## 参考資料

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
