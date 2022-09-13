---
title: GitHub ホステッド ランナーのカスタマイズ
intro: ワークフローの一部として、GitHub でホストされるランナーに追加のソフトウェアをインストールできます。
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
shortTitle: Customize runners
ms.openlocfilehash: d6793216b099fe3dcec44572da0b3d65cbb13fd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121086'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_dotcom %} ホステッド ランナーに追加のソフトウェア パッケージが必要な場合は、ワークフローの一部としてパッケージをインストールするジョブを作成できます。 

既定で既にインストールされているパッケージを確認するには、「[プレインストールされたソフトウェア](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)」を参照してください。

このガイドでは、{% data variables.product.prodname_dotcom %} ホステッド ランナーに追加のソフトウェアをインストールするジョブを作成する方法について説明します。

## Ubuntu ランナーへのソフトウェアのインストール

次の例では、ジョブの一部として `apt` パッケージをインストールする方法を示します。

```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```

{% note %}

**注:** パッケージをインストールする前に `sudo apt-get update` を常に実行してください。 `apt` インデックスが古い場合、このコマンドは使用可能なパッケージをフェッチしてインデックスを再作成します。これにより、パッケージのインストール エラーを防ぐことができます。 

{% endnote %}

## macOS ランナーへのソフトウェアのインストール

次の例では、ジョブの一部として Brew パッケージと cask をインストールする方法を示します。

```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```

## Windows ランナーへのソフトウェアのインストール

次の例では、[Chocolatey](https://community.chocolatey.org/packages) を使用して、ジョブの一部として {% data variables.product.prodname_dotcom %} CLI をインストールする方法を示します。

{% raw %}
```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
{% endraw %}
