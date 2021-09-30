---
title: Setting up your Python project for Codespaces
shortTitle: Setting up your Python project
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_codespaces %} で Python プロジェクトを始めます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
---



## はじめに

このガイドでは、Python プロジェクトを {% data variables.product.prodname_codespaces %} で設定する方法を説明します。 codespace でプロジェクトを開き、テンプレートから開発コンテナ設定を追加および変更する例を紹介します。

### 必要な環境

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の Python プロジェクトがあります。 プロジェクトがない場合は、https://github.com/2percentsilk/python-quickstart の例でこのチュートリアルを試すことができます。
- Organization で {% data variables.product.prodname_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.



codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、Node.js、JavaScript、Typescript、nvm、npm、yarn を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

vCPU と RAM の量を調整したり、[ドットファイルを追加して環境をパーソナライズ](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)したり、インストールされているツールやスクリプトを変更したりして、codespace をカスタマイズできます。

{% data variables.product.prodname_codespaces %} は、`devcontainer.json` というファイルを使用して設定を保存します。 起動時に、{% data variables.product.prodname_codespaces %} はファイルを使用して、プロジェクトに必要となる可能性のあるツール、依存関係、またはその他のセットアップをインストールします。 詳しい情報については、「[プロジェクトの Codespaces を設定する](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」を参照してください。


## ステップ 2: テンプレートから codespace に開発コンテナを追加する

デフォルトの Codespaces コンテナには、最新の Python バージョン、パッケージマネージャー（pip、Miniconda）、およびその他の一般的なツールがプリインストールされています。 ただし、プロジェクトに必要なツールとスクリプトを定義するために、カスタムコンテナを設定することをお勧めします。 これにより、リポジトリ内のすべての {% data variables.product.prodname_codespaces %} ユーザに対して完全に再現可能な環境を確保できます。

カスタムコンテナを使用してプロジェクトを設定するには、`devcontainer.json` ファイルを使用して環境を定義する必要があります。 {% data variables.product.prodname_codespaces %} で、これをテンプレートから追加することも、独自に作成することもできます。 開発コンテナの詳細については、「[プロジェクトの Codespaces を設定する](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」を参照してください。


{% data reusables.codespaces.command-palette-container %}
2. この例では、[**Python 3**] をクリックします。 追加機能が必要な場合は、Python に固有の任意のコンテナ、または Python 3 と PostgreSQL などのツールの組み合わせを選択できます。 ![リストから Python オプションを選択](/assets/images/help/codespaces/add-python-prebuilt-container.png)
3. Python の推奨バージョンをクリックします。 ![Python バージョンの選択](/assets/images/help/codespaces/add-python-version.png)
4. デフォルトのオプションを使用して、Node.js をカスタマイズに追加します。 ![Node.js の選択に追加](/assets/images/help/codespaces/add-nodejs-selection.png)
{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Python 開発コンテナテンプレートを追加すると、次のファイルを含む `.devcontainer` フォルダがプロジェクトのリポジトリのルートに追加されます。

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
        "ms-python.python",
    ],

    // 'forwardPorts' を使用して、コンテナ内のポートのリストをローカルで使用できるようにします。
    // "forwardPorts": [],

    // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // 代わりに、connect を root としてコメントアウトします。 詳細は https://aka.ms/vscode-remote/containers/non-root を参照します。
    "remoteUser": "vscode"
}
```

- **名前** - 開発コンテナには任意の名前を付けることができます。これはデフォルトです。
- **ビルド** - ビルドプロパティです。
  - **Dockerfile** - ビルドオブジェクトでは、Dockerfile は、テンプレートからも追加された `dockerfile` への参照です。
  - **Args**
    - **バリアント**: このファイルには、Dockerfile に渡される使用するノードのバリアントであるビルド引数が 1 つだけ含まれています。
- **設定** - これらは {% data variables.product.prodname_vscode %} 設定です。
  - **Terminal.integrated.shell.linux** - ここでは bash がデフォルトですが、これを変更することで他のターミナルシェルを使用できます。
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **ms-python.python** - Microsoft Python 機能拡張は、IntelliSense、linting、デバッグ、コードナビゲーション、コード形式、リファクタリング、変数エクスプローラ、テストエクスプローラなどの機能を含む、Python 言語（言語のアクティブにサポートされているすべてのバージョン 3.6 または以降）の豊富なサポートを提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。
- **postCreateCommand** - `dotnet restore` のように、Dockerfileで定義されていない codespace への到達後に何らかの操作を実行する場合は、ここで実行できます。
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

開発コンテナを追加し、すべての機能を基本的に理解したら、環境に合わせてコンテナを設定するための変更を加えます。 この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

1. Explorer で `.devcontainer` フォルダを展開し、ツリーから `devcontainer.json` ファイルを選択して開きます。

  ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. `devcontainer.json` ファイルの `extensions` リストを更新し、プロジェクトでの作業に役立ついくつかの機能拡張を追加します。

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker",
      ],
  ```

3. `postCreateCommand` のコメントを解除して、Codespaces の設定プロセスの一部として要件を自動インストールします。

  ```json{:copy}
  // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

  codespace 内でリビルドすると、リポジトリに変更をコミットする前に、期待どおりに変更が動作します。 何らかの失敗があった場合、コンテナの調整を継続するためにリビルドできるリカバリコンテナを備えた codespace に配置されます。

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

- [{% data variables.product.prodname_codespaces %} の暗号化されたシークレットを管理する](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [{% data variables.product.prodname_codespaces %} の GPG 検証を管理する](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
