---
title: Setting up your Python project for Codespaces
shortTitle: Setting up your Python project
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_codespaces %} で Python プロジェクトを始めます。'
product: '{% data reusables.gated-features.codespaces %}'
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
---

## はじめに

このガイドでは、Python プロジェクトを {% data variables.product.prodname_codespaces %} で設定する方法を説明します。 codespace でプロジェクトを開き、テンプレートから開発コンテナ設定を追加および変更する例を紹介します。

### 必要な環境

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の Python プロジェクトがあります。 プロジェクトがない場合は、https://github.com/2percentsilk/python-quickstart の例でこのチュートリアルを試すことができます。
- Organization で {% data variables.product.prodname_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、Node.js、JavaScript、Typescript、nvm、npm、yarn を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration to your repository from a template

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} comes with the latest Python version, package managers (pip, Miniconda), and other common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. これにより、リポジトリ内のすべての {% data variables.product.prodname_github_codespaces %} ユーザに対して完全に再現可能な環境を確保できます。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、[**Python 3**] をクリックします。 追加機能が必要な場合は、Python に固有の任意のコンテナ、または Python 3 と PostgreSQL などのツールの組み合わせを選択できます。 ![リストから Python オプションを選択](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Python の推奨バージョンをクリックします。 ![Python バージョンの選択](/assets/images/help/codespaces/add-python-version.png)
1. デフォルトのオプションを使用して、Node.js をカスタマイズに追加します。 ![Node.js の選択に追加](/assets/images/help/codespaces/add-nodejs-selection.png)
{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Adding the Python dev container template adds a `.devcontainer` directory to the root of your project's repository with the following files:

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルは、サンプルの後に説明されるいくつかのプロパティを定義します。

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

    // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // 代わりに、connect を root としてコメントアウトします。 詳細は https://aka.ms/vscode-remote/containers/non-root を参照します。
    "remoteUser": "vscode"
}
```

- **名前** - 開発コンテナには任意の名前を付けることができます。これはデフォルトです。
- **ビルド** - ビルドプロパティです。
  - **dockerfile** - In the `build` object, `dockerfile` contains the path to the Dockerfile that was also added from the template.
  - **args**
    - **variant**: This file only contains one build argument, which is the node variant we want to use that is passed into the Dockerfile.
- **設定** - これらは {% data variables.product.prodname_vscode %} 設定です。
  - **terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **ms-python.python** - Microsoft Python 機能拡張は、IntelliSense、linting、デバッグ、コードナビゲーション、コード形式、リファクタリング、変数エクスプローラ、テストエクスプローラなどの機能を含む、Python 言語（言語のアクティブにサポートされているすべてのバージョン 3.6 または以降）の豊富なサポートを提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - Use this to run commands that aren't defined in the Dockerfile, like `pip3 install -r requirements`, after your codespace is created.
- **remoteUser** - デフォルト設定では、`vscode` ユーザとして実行していますが、オプションでこれを `root` に設定できます。

#### Dockerfile

```bash
# [Choice] Python バージョン: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Node.js をインストールします
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] pip の要件をめったに変更しない場合は、このセクションのコメントを解除して、画像に追加します。
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] このセクションのコメントを解除して追加の OS パッケージをインストールします。
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] この行のコメントを解除してグローバルノードパッケージをインストールします。
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile を使用して、コンテナレイヤーを追加し、コンテナに含める OS パッケージ、ノードバージョン、またはグローバルパッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

1. Explorer で `.devcontainer` フォルダを展開し、ツリーから `devcontainer.json` ファイルを選択して開きます。

  ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. `devcontainer.json` ファイルの `extensions` リストを更新し、プロジェクトでの作業に役立ついくつかの機能拡張を追加します。

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. `postCreateCommand` のコメントを解除して、Codespaces の設定プロセスの一部として要件を自動インストールします。

  ```json{:copy}
  // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Code Spell Checker と Flask Snippet 機能拡張がインストールされていることを確認して、変更が正常に適用されたことを確認します。

   ![機能拡張のリスト](/assets/images/help/codespaces/python-extensions.png)

## Step 4: アプリケーションを実行する

前のセクションでは、`postCreateCommand` を使用して pip3 を介してパッケージのセットをインストールしました。 依存関係がインストールされたら、アプリケーションを実行できます。

1. `F5` キーを押すか、codespace ターミナルで `python -m flask run` と入力してアプリケーションを実行します。

2. プロジェクトが開始されると、プロジェクトが使用するポートに接続するためのプロンプトが表示されたトーストが右下隅に表示されます。

  ![ポートフォワーディングトースト](/assets/images/help/codespaces/python-port-forwarding.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、{% data variables.product.prodname_codespaces %} で Python プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
