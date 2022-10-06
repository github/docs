---
title: Neovim で GitHub Copilot の使用を開始する
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: '{% data variables.product.prodname_copilot %} を Neovim にインストールし、コメントやコードを記述するときに候補が表示されるようにする方法について説明します。'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 8884d3ac0ae6fecdc75def792e2b3d4157537498
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080158'
---
## {% data variables.product.prodname_copilot %} と Neovim について

{% data reusables.copilot.procedural-intro %}

Neovim を使用すると、{% data variables.product.prodname_copilot %} からの候補をエディター内で直接表示し、取り入れることができます。

## 前提条件

Neovim で {% data variables.product.prodname_copilot %} を使うには、Neovim と Node.js バージョン 17 以降をインストールする必要があります。 詳細については、[Neovim のドキュメント](https://neovim.io/doc/)と [Node.js の Web サイト](https://nodejs.org/en/)を参照してください。

## Neovim 拡張機能のインストール

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - {% data variables.product.prodname_copilot %} プラグインを直接インストールするには、Neovim がプラグインを格納する場所を知っている必要があります。 プラグインをインストールするには、ターミナルで次のコマンドを入力します。

     ```
     git clone https://github.com/github/copilot.vim \
        PATH/TO/NEOVIM/PLUGINS/copilot.vim
     ```
1. {% data variables.product.prodname_copilot %} を構成するには、Neovim を開き、次のコマンドを入力します。

   ```
   :Copilot setup
   ```

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
    - {% data variables.product.prodname_copilot %} プラグインを直接インストールするには、Neovim がプラグインを格納する場所を知っている必要があります。 プラグインをインストールするには、Git Bash で以下のコマンドを入力します。

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
