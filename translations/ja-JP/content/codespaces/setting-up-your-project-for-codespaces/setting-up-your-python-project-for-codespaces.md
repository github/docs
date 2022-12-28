---
title: GitHub Codespaces 用に Python プロジェクトを設定する
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: 'カスタム開発コンテナーを作成して、{% data variables.product.prodname_github_codespaces %} で Python プロジェクトを始めます。'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 2d9c627907f447a3efd873fceba963b899b57c39
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159848'
---
## はじめに

このガイドでは、Python プロジェクトの設定方法を紹介します {% data reusables.codespaces.setting-up-project-intro %}

### 前提条件

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の Python プロジェクトがあります。 プロジェクトがない場合は、次の例を使用してこのチュートリアルを試すことができます: https://github.com/2percentsilk/python-quickstart 。
- Organization で {% data variables.product.prodname_github_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. リポジトリ名の下で、 **{% octicon "code" aria-label="The code icon" %} コード** のドロップダウン メニューを使い、 **[Codespaces]** タブでプラス記号 {% octicon "plus" aria-label="The plus icon" %} をクリックします。

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、Node.js、JavaScript、Typescript、nvm、npm、yarn を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## ステップ 2: テンプレートからリポジトリに開発コンテナーの構成を追加する

{% data variables.product.prodname_github_codespaces %} の既定の開発コンテナー ("dev コンテナー") には、Python の最新バージョン、パッケージ マネージャー (pip、Miniconda)、その他の一般的なツールがプレインストールされています。 ただし、独自の開発コンテナーを構成して、プロジェクトに必要なすべてのツールとスクリプトを含めることをお勧めします。 これにより、リポジトリのすべての {% data variables.product.prodname_github_codespaces %} ユーザーに対して、完全に再現可能な環境が保証されます。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、 **[Python 3]** をクリックします。 追加機能が必要な場合は、Python に固有の任意のコンテナ、または Python 3 と PostgreSQL などのツールの組み合わせを選択できます。
  ![リストから Python オプションを選択する](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Python の推奨バージョンをクリックします。
  ![Python バージョンの選択](/assets/images/help/codespaces/add-python-version.png)
1. デフォルトのオプションを使用して、Node.js をカスタマイズに追加します。
  ![Node.js の選択に追加](/assets/images/help/codespaces/add-nodejs-selection.png) {% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Python 開発コンテナー テンプレートを追加すると、次のファイルを含む `.devcontainer` ディレクトリが、プロジェクトのリポジトリのルートに追加されます。

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルでは、サンプルの後に説明されるいくつかのプロパティを定義します。

#### devcontainer.json

```json
{
    "name": "Python 3",
    "build": {
        "dockerfile": "Dockerfile",
        "context": "..",
        "args": {
            // Update 'VARIANT' to pick a Python version: 3, 3.6, 3.7, 3.8, 3.9
            "VARIANT": "3",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.formatting.yapfPath": "/usr/local/py-utils/bin/yapf",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-python.python"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name** - 開発コンテナーには任意の名前を付けることができます。これは既定値です。
- **build** - ビルドのプロパティ。
  - **dockerfile** - `build` オブジェクトの `dockerfile` には、やはりテンプレートから追加された Dockerfile へのパスが含まれます。
  - **args**
    - **variant**: このファイルにはビルド引数が 1 つだけ含まれています。それは使用するノード バリアントで、Dockerfile に渡されます。
- **settings** - これらは {% data variables.product.prodname_vscode %} 設定です。
  - **terminal.integrated.shell.linux** - ここでは bash が既定値ですが、これを変更すると他のターミナル シェルを使用できます。
- **extensions** - これらは既定で含まれる拡張機能です。
  - **ms-python.python** - Microsoft Python 機能拡張は、IntelliSense、linting、デバッグ、コードナビゲーション、コード形式、リファクタリング、変数エクスプローラ、テストエクスプローラなどの機能を含む、Python 言語 (言語のアクティブにサポートされているすべてのバージョン 3.6 または以降) の豊富なサポートを提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。
- **postCreateCommand** - codespace が作成された後に、`pip3 install -r requirements` のような Dockerfile で定義されていないコマンドを実行するには、これを使います。
- **remoteUser** - 既定では、`vscode` ユーザーとして実行されていますが、必要に応じてこれを `root` に設定することができます。

#### Dockerfile

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile を使用して、コンテナレイヤーを追加し、コンテナに含める OS パッケージ、ノードバージョン、またはグローバルパッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

開発コンテナーの構成を追加し、すべての機能を基本的に理解したので、変更を行って環境をさらにカスタマイズできます。 この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

1. エクスプローラーで、`.devcontainer` フォルダーを展開し、ツリーから `devcontainer.json` ファイルを選択してそれを開きます。

  ![エクスプローラーの devcontainer.json ファイル](/assets/images/help/codespaces/devcontainers-options.png)

2. `devcontainer.json` ファイル内の `extensions` 一覧を更新して、プロジェクトを操作する際に役立つ拡張機能をいくつか追加します。

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. `postCreateCommand` のコメントを解除して、codespaces の設定プロセスの一環として要件を自動インストールします。

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Code Spell Checker と Flask Snippet 機能拡張がインストールされていることを確認して、変更が正常に適用されたことを確認します。

   ![機能拡張のリスト](/assets/images/help/codespaces/python-extensions.png)

## 手順 4:アプリケーションを実行する

前のセクションでは、`postCreateCommand` 使用して、一連のパッケージを pip3 を介してインストールしました。 依存関係がインストールされたら、アプリケーションを実行できます。

1. codespace ターミナルで `F5` を押すか、`python -m flask run` を入力してアプリケーションを実行します。

2. プロジェクトが始まると、{% data variables.product.prodname_vscode_shortname %} の右下隅に "トースト" 通知メッセージが表示されるはずです。プロジェクトで使用されるポートに接続するように促されます。

  ![ポート転送の "トースト" 通知](/assets/images/help/codespaces/python-port-forwarding.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、Python で {% data variables.product.prodname_github_codespaces %} プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
