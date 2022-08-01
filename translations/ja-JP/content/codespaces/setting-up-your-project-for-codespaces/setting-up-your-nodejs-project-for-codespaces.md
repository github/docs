---
title: Setting up your Node.js project for Codespaces
shortTitle: Setting up your Node.js project
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_codespaces %} で JavaScript、Node.js、または TypeScript プロジェクトを始めます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
---



## はじめに

このガイドでは、JavaScript、Node.js、または TypeScript プロジェクトを {% data variables.product.prodname_codespaces %} で設定する方法を説明します。 codespace でプロジェクトを開き、テンプレートから開発コンテナ設定を追加および変更する例を紹介します。

### 必要な環境

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の JavaScript、Node.js、または TypeScript プロジェクトがあります。 プロジェクトがない場合は、https://github.com/microsoft/vscode-remote-try-node の例でこのチュートリアルを試すことができます。
- Organization で {% data variables.product.prodname_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

   ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

   If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.


codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、Node.js、JavaScript、Typescript、nvm、npm、yarn を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration to your repository from a template

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} will support running Node.js projects like [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) out of the box. However, we recommend that you configure your own dev container, as this allows you to define any particular tools and scripts your project needs. This will ensure a fully reproducible environment for all GitHub Codespaces users in your repository.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、[**Node.js**] をクリックします。  追加機能が必要な場合は、Node に固有の任意のコンテナ、または Node と MongoDB などのツールの組み合わせを選択できます。

   ![リストから Node オプションを選択](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Click the recommended version of Node.js.

   ![Node.js バージョンの選択](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Adding the Node.js dev container template adds a `.devcontainer` directory to the root of your project's repository with the following files:

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルは、サンプルの後に説明されるいくつかのプロパティを定義します。

#### devcontainer.json

```json
// フォーマットの詳細は https://aka.ms/devcontainer.json を参照します。 設定オプションについては、次の README を参照します。
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // コンテナの作成時に*デフォルト*のコンテナ固有の settings.json 値を設定します。
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // コンテナの作成時にインストールする拡張機能の ID を追加します。
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // 'forwardPorts' を使用して、コンテナ内のポートのリストをローカルで使用できるようにします。
    // "forwardPorts": [],

    // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
    // "postCreateCommand": "yarn install",

    // 代わりに、connect を root としてコメントアウトします。 詳細は https://aka.ms/vscode-remote/containers/non-root を参照します。
    "remoteUser": "node"
}
```

- **name** - You can name your dev container anything, this is just the default.
- **ビルド** - ビルドプロパティです。
  - **dockerfile** - In the `build` object, `dockerfile` contains the path to the Dockerfile that was also added from the template.
  - **args**
    - **variant**: This file only contains one build argument, which is the node variant we want to use that is passed into the Dockerfile.
- **settings** - These are {% data variables.product.prodname_vscode %} settings that you can set.
  - **terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **dbaeumer.vscode-eslint** - ES lint is a great extension for linting, but for JavaScript there are a number of great Marketplace extensions you could also include.
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - Use this to run commands that aren't defined in the Dockerfile, after your codespace is created.
- **remoteUser** - デフォルト設定では、vscode ユーザとして実行していますが、オプションでこれを root に設定できます。

#### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

Dockerfile を使用して、コンテナレイヤーを追加し、コンテナに含める OS パッケージ、ノードバージョン、またはグローバルパッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. この例では、codespace の起動時に npm をインストールするためのプロパティを追加し、コンテナ内のポートのリストをローカルで使用できるようにします。

1. Explorer で、ツリーから `devcontainer.json` ファイルを選択して開きます。 表示するには、`.devcontainer` フォルダを展開する必要がある場合があります。

   ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. `extensions` の後に、`devcontainer.json` ファイルに次の行を追加します。

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Step 4: アプリケーションを実行する

前のセクションでは、`postCreateCommand` を使用して npm を介してパッケージのセットをインストールしました。 これを使用して、npm でアプリケーションを実行できます。

1. `npm start` を使用してターミナルで start コマンドを実行します。

   ![npm をターミナルで開始](/assets/images/help/codespaces/codespaces-npmstart.png)

2. プロジェクトが開始されると、プロジェクトが使用するポートに接続するためのプロンプトが表示されたトーストが右下隅に表示されます。

   ![ポートフォワーディングトースト](/assets/images/help/codespaces/codespaces-port-toast.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、{% data variables.product.prodname_codespaces %} で JavaScript プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
