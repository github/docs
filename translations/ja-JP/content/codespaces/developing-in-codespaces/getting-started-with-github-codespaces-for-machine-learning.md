---
title: 機械学習のための GitHub Codespaces の概要
shortTitle: Machine learning
intro: '{% data variables.product.prodname_github_codespaces %} とそのすぐに使えるツールを使用して、機械学習プロジェクトに取り組む方法について学習します。'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158918'
---
## はじめに

このガイドでは、{% data variables.product.prodname_github_codespaces %} を使用した機械学習について説明します。 単純な画像分類器を構築し、{% data variables.product.prodname_github_codespaces %} にプレインストールされているツールの一部について学習し、NVIDIA CUDA の開発環境を構成し、JupyterLab で codespace を開きます。

## 単純な画像分類器を構築する

Jupyter Notebook を使用して、単純な画像分類器を構築します。 

Jupyter Notebook は、順次実行できるセルのセットです。 使用するノートブックには、[PyTorch](https://pytorch.org/) を使って画像分類器を構築する多数のセルが含まれています。 各セルは、データセットのダウンロード、ニューラル ネットワークの設定、モデルのトレーニング、そのモデルのテストなど、そのプロセスの異なるフェーズです。

すべてのセルを順番に実行して、画像分類器を構築するすべてのフェーズを実行します。 この操作を行うと、Jupyter によって出力がノートブックに保存され、結果を確認できるようになります。

### codespace を作成する

1. [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter) テンプレート リポジトリに移動します。
{% data reusables.codespaces.open-template-in-codespace-step %}

このテンプレートの codespace は、Web ベース バージョンの {% data variables.product.prodname_vscode %} で開きます。

### 画像分類器ノートブックを開く 

{% data variables.product.prodname_github_codespaces %} によって使用される既定のコンテナー イメージには、codespace にプレインストールされている一連の機械学習ライブラリが含まれています。 たとえば、Numpy、pandas、SciPy、Matplotlib、seaborn、scikit-learn、Keras、PyTorch、Requests、Plotly などです。 既定のイメージについては詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)」と[ `devcontainers/images` リポジトリ](https://github.com/devcontainers/images/tree/main/src/universal)を参照してください。

1. {% data variables.product.prodname_vscode_shortname %} エディターで、表示されている [作業の開始] タブを閉じます。
1. `notebooks/image-classifier.ipynb` ノートブック ファイルを開きます。

### 画像分類器を構築する

画像分類器ノートブックには、データセットのダウンロード、ニューラル ネットワークのトレーニング、そのパフォーマンスの評価に必要なすべてのコードが含まれています。

1. **[すべて実行]** をクリックして、ノートブックのセルをすべて実行します。

   ![[すべて実行] ボタンのスクリーンショット。](/assets/images/help/codespaces/jupyter-run-all.png)

1. 下にスクロールして、各セルの出力を表示します。

   ![エディターの手順 3 のスクリーンショット](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## codespace 用に NVIDIA CUDA を構成する

一部のソフトウェアでは、codespace の GPU を使用するために NVIDIA CUDA をインストールする必要があります。 その場合は、`devcontainer.json` ファイルを使用して独自のカスタム構成を作成し、CUDA をインストールする必要があることを指定できます。 カスタム構成の作成について詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)」を参照してください。

{% note %}

**注**: `nvidia-cuda` 機能を追加するときに実行されるスクリプトについて詳しくは、[devcontainers/features リポジトリ](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda)を参照してください。

{% endnote %}

1. codespace 内で、エディターで `.devcontainer/devcontainer.json` ファイルを開きます。
1. 次の内容を含む最上位の `features` オブジェクトを追加します。

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   `features` オブジェクトについて詳しくは、「[開発コンテナーの仕様](https://containers.dev/implementors/features/#devcontainer-json-properties)」を参照してください。

   このチュートリアル用に作成した画像分類器リポジトリの `devcontainer.json` ファイルを使用している場合、`devcontainer.json` ファイルは次のようになります。

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. 変更を保存します。
{% data reusables.codespaces.rebuild-command %}codespace コンテナーが再構築されます。 これには数分かかります。 再構築が完了すると、自動的に codespace が再び開きます。
1. 変更をリポジトリに発行し、CUDA が今後このリポジトリから作成する新しい codespace にインストールされるようにします。 詳しくは、「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code)」を参照してください。

## JupyterLab で codespace を開く

codespace は [github.com/codespaces](https://github.com/codespaces) の "Your codespaces" ページの JupyterLab で開くことができます。あるいは、{% data variables.product.prodname_cli %} を使用して開くことができます。 詳細については、「[既存の codespace を開く](/codespaces/developing-in-codespaces/opening-an-existing-codespace)」を参照してください。

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
