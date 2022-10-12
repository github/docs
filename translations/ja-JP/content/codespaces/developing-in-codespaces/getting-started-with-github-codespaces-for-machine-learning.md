---
title: 機械学習のための GitHub Codespaces の概要
shortTitle: Machine learning
intro: '{% data variables.product.prodname_github_codespaces %} とそのすぐに使えるツールを使用して、機械学習プロジェクトに取り組む方法について学習します。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 07aa272377cf82d6bd660819d96aa348b2fb2a64
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147764004'
---
## はじめに

このガイドでは、{% data variables.product.prodname_github_codespaces %} を使用した機械学習について説明します。 単純な画像分類器を構築し、{% data variables.product.prodname_github_codespaces %} にプレインストールされているツールの一部について学習し、NVIDIA CUDA の開発環境を構成し、{% data variables.product.prodname_cli %} を使用して JupyterLab で codespace を開きます。

## 前提条件

{% data variables.product.prodname_github_codespaces %} にアクセスできる。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-github-codespaces)」を参照してください。

## 単純な画像分類器を構築する

Jupyter Notebook を使用して、単純な画像分類器を構築します。 

Jupyter Notebook は、順次実行できるセルのセットです。 使用するノートブックには、[PyTorch](https://pytorch.org/) を使って画像分類器を構築する多数のセルが含まれています。 各セルは、データセットのダウンロード、ニューラル ネットワークの設定、モデルのトレーニング、そのモデルのテストなど、そのプロセスの異なるフェーズです。

すべてのセルを順番に実行して、画像分類器を構築するすべてのフェーズを実行します。 この操作を行うと、Jupyter によって出力がノートブックに保存され、結果を確認できるようになります。

### リポジトリと codespace の作成

1. [github/codespaces-getting-started-ml](https://github.com/github/codespaces-getting-started-ml) テンプレート リポジトリに移動し、 **[このテンプレートを使用する]** をクリックします。
{% data reusables.codespaces.open-codespace-from-template-repo %}

   既定では、このリポジトリの codespace は、Web ベース バージョンの {% data variables.product.prodname_vscode %} で開きます。

### 画像分類器ノートブックを開く

{% data variables.product.prodname_github_codespaces %} によって使用される既定のコンテナー イメージには、codespace にプレインストールされている一連の機械学習ライブラリが含まれています。 たとえば、Numpy、pandas、SciPy、Matplotlib、seaborn、scikit-learn、TensorFlow、Keras、PyTorch、Requests、Plotly などです。 既定のイメージについては詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)」と[ `devcontainers/images` リポジトリ](https://github.com/devcontainers/images/tree/main/src/codespaces#github-codespaces-default-linux-universal)を参照してください。

1. {% data variables.product.prodname_vscode_shortname %} エディターで、表示されている [作業の開始] タブを閉じます。
1. `image-classifier.ipynb` ノートブック ファイルを開きます。
1. エディターの右上にある Python カーネル リンクをクリックします。

   ![Python カーネル リンクのスクリーンショット](/assets/images/help/codespaces/jupyter-python-kernel-link.png)
   
1. ドロップダウン メニューで、ディレクトリ `/opt/python/latest/bin/python` 内のカーネルを選びます。

   ![Python カーネル ドロップダウン メニューのスクリーンショット](/assets/images/help/codespaces/jupyter-python-kernel-dropdown.png)

### 画像分類器を構築する

画像分類器ノートブックには、データセットのダウンロード、ニューラル ネットワークのトレーニング、そのパフォーマンスの評価に必要なすべてのコードが含まれています。

1. **[すべて実行]** をクリックして、ノートブックのセルをすべて実行します。

   ![[すべて実行] ボタンのスクリーンショット。](/assets/images/help/codespaces/jupyter-run-all.png)

1. 下にスクロールして、各セルの出力を表示します。

   ![エディターの手順 3 のスクリーンショット](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## codespace 用に NVIDIA CUDA を構成する

TensorFlow などの一部のソフトウェアでは、codespace の GPU を使用するために NVIDIA CUDA をインストールする必要があります。 その場合は、`devcontainer.json` ファイルを使用して独自のカスタム構成を作成し、CUDA をインストールする必要があることを指定できます。 カスタム構成の作成について詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)」を参照してください。

{% note %}

**注**: `nvidia-cuda` 機能を追加するときに実行されるスクリプトについて詳しくは、[devcontainers/features リポジトリ](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda)を参照してください。

{% endnote %}

1. codespace 内で、エディターで `.devcontainer/devcontainer.json` ファイルを開きます。
1. 次の内容を含む最上位の `features` オブジェクトを追加します。

   ```json{:copy}
     “features”: {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   `features` オブジェクトについて詳しくは、「[開発コンテナーの仕様](https://containers.dev/implementors/features/#devcontainer-json-properties)」を参照してください。

   このチュートリアル用に作成した画像分類器リポジトリの `devcontainer.json` ファイルを使用している場合、`devcontainer.json` ファイルは次のようになります。

   ```
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     “features”: {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. 変更を保存します。
{% data reusables.codespaces.rebuild-command %}codespace コンテナーが再構築されます。 これには数分かかります。 再構築が完了すると、自動的に codespace が再び開きます。
1. 変更をリポジトリにコミットして、CUDA が今後このリポジトリから作成する新しい codespace にインストールされるようにします。

## JupyterLab で codespace を開く

{% data variables.product.prodname_github_codespaces %} によって使用される既定のコンテナー イメージには、Web ベースの Jupyter IDE である JupyterLab が含まれています。 {% data variables.product.prodname_cli %} を使用すると、codespace に他のものをインストールしなくても、JupyterLab で codespace を開くことができます。

1. ターミナルで、{% data variables.product.prodname_cli %} コマンド `gh cs jupyter` を入力します。
1. 開く codespace を選びます。

   ![ターミナルから codespace を開くスクリーンショット](/assets/images/help/codespaces/open-codespace-in-jupyter.png)

