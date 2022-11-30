---
title: GitHub Codespaces 用の Node.js プロジェクトを設定する
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Node.js project
intro: 'カスタム開発コンテナーを作成して、{% data variables.product.prodname_github_codespaces %} で JavaScript、Node.js または TypeScript プロジェクトを始めます。'
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
ms.openlocfilehash: 19c29f7d3c8110d1c671a9af46227a399a467800
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159904'
---
## はじめに

このガイドでは、JavaScript、Node.js または TypeScript プロジェクトの設定方法を紹介します {% data reusables.codespaces.setting-up-project-intro %}

### 前提条件

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の JavaScript、Node.js、または TypeScript プロジェクトがあります。 プロジェクトがない場合は、次の例を使用してこのチュートリアルを試すことができます: https://github.com/microsoft/vscode-remote-try-node
- Organization で {% data variables.product.prodname_github_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. リポジトリ名の下で、 **{% octicon "code" aria-label="The code icon" %} コード** のドロップダウン メニューを使い、 **[Codespaces]** タブでプラス記号 {% octicon "plus" aria-label="The plus icon" %} をクリックします。

   ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、Node.js、JavaScript、Typescript、nvm、npm、yarn を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## ステップ 2: テンプレートからリポジトリに開発コンテナーの構成を追加する

{% data variables.product.prodname_github_codespaces %} の既定の開発コンテナーでは、[vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) などの Node.js プロジェクトをすぐに実行できます。 ただし、独自の開発コンテナーを構成することをお勧めします。プロジェクトで必要な特定のツールとスクリプトを定義できるからです。 これにより、リポジトリのすべての {% data variables.product.prodname_github_codespaces %} ユーザーに対して、完全に再現可能な環境が保証されます。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、 **[Node.js]** をクリックします。  追加機能が必要な場合は、Node に固有の任意のコンテナ、または Node と MongoDB などのツールの組み合わせを選択できます。

   ![リストから Node オプションを選択](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Node.js の推奨バージョンをクリックします。

   ![Node.js バージョンの選択](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Node.js 開発コンテナー テンプレートを追加すると、次のファイルを含む `.devcontainer` ディレクトリが、プロジェクトのリポジトリのルートに追加されます。

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルでは、サンプルの後に説明されるいくつかのプロパティを定義します。

#### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "yarn install",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **name** - 開発コンテナーには任意の名前を付けることができます。これは既定値です。
- **build** - ビルドのプロパティ。
  - **dockerfile** - `build` オブジェクトの `dockerfile` には、やはりテンプレートから追加された Dockerfile へのパスが含まれます。
  - **args**
    - **バリアント**: このファイルにはビルド引数が 1 つだけ含まれています。それは使用するノード バリアントで、Dockerfile に渡されます。
- **settings** - これらは、ユーザーが設定できる {% data variables.product.prodname_vscode %} の設定です。
  - **terminal.integrated.shell.linux** - ここでは bash が既定値ですが、これを変更すると他のターミナル シェルを使用できます。
- **extensions** - これらは既定で含まれる拡張機能です。
  - **Dbaeumer.vscode-eslint** - ES lint は lint の優れた機能拡張ですが、JavaScript の場合は、Marketplace の優れた機能拡張も多数含めることができます。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。
- **postCreateCommand** - codespace が作成された後に、Dockerfile で定義されていないコマンドを実行するには、これを使います。
- **remoteUser** - 既定では、vscode ユーザーとして実行されていますが、必要に応じてこれを root に設定することができます。

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

開発コンテナーの構成を追加し、すべての機能を基本的に理解したので、変更を行って環境をさらにカスタマイズできます。 この例では、codespace の起動時に npm をインストールするためのプロパティを追加し、コンテナ内のポートのリストをローカルで使用できるようにします。

1. エクスプローラーで、ツリーから `devcontainer.json` ファイルを選択してそれを開きます。 表示するには、`.devcontainer` フォルダーを展開する必要がある場合があります。

   ![エクスプローラーの devcontainer.json ファイル](/assets/images/help/codespaces/devcontainers-options.png)

2. `extensions` の後で、`devcontainer.json` ファイルに次の行を追加します。

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## 手順 4:アプリケーションを実行する

前のセクションでは、`postCreateCommand` 使用して、一連のパッケージを npm を介してインストールしました。 これを使用して、npm でアプリケーションを実行できます。

1. ターミナルで `npm start` を使用して start コマンドを実行します。

   ![npm をターミナルで開始](/assets/images/help/codespaces/codespaces-npmstart.png)

2. プロジェクトが始まると、{% data variables.product.prodname_vscode_shortname %} の右下隅に "トースト" 通知メッセージが表示されるはずです。プロジェクトで使用されるポートに接続するように促されます。

   ![ポート転送の "トースト" 通知](/assets/images/help/codespaces/codespaces-port-toast.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、{% data variables.product.prodname_github_codespaces %} で JavaScript プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
