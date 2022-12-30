---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160055"
---
既定のコンテナー イメージには JupyterLab が含まれているため、既定のイメージから作成された codespace には常に JupyterLab がインストールされます。 既定のイメージについては詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)」と[ `devcontainers/images` リポジトリ](https://github.com/devcontainers/images/tree/main/src/universal)を参照してください。 開発コンテナー構成で既定のイメージを使用していない場合は、`devcontainer.json` ファイルに `ghcr.io/devcontainers/features/python` 機能を追加して JupyterLab をインストールできます。 オプション `"installJupyterlab": true`を含める必要があります。 詳細については、`devcontainers/features` リポジトリの [`python` 機能の README](https://github.com/devcontainers/features/tree/main/src/python#python-python) を参照してください。