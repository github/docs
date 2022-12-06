---
title: Neovim で GitHub Copilot の使用を開始する
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: '{% data variables.product.prodname_copilot %} を Neovim にインストールし、コメントやコードを記述するときに候補が表示されるようにする方法について説明します。'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 6296ff5b89e86b4b51cbb04bd9ac4ba91863a1ac
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185068'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} と Neovim について

{% data reusables.copilot.procedural-intro %}

Neovim を使用すると、{% data variables.product.prodname_copilot %} からの候補をエディター内で直接表示し、取り入れることができます。

## 前提条件

- {% data variables.product.prodname_copilot %} を使用するには、アクティブな {% data variables.product.prodname_copilot %} サブスクリプションが必要です。 詳しくは、「[{% data variables.product.prodname_copilot %} の課金について](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)」をご覧ください。

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
