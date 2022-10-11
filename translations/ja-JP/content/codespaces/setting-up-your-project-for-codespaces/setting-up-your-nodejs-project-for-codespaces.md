---
title: Setting up your Node.js project for Codespaces
shortTitle: Setting up your Node.js project
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_codespaces %} で JavaScript、Node.js、または TypeScript プロジェクトを始めます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
---



## はじめに

このガイドでは、JavaScript、Node.js、または TypeScript プロジェクトを {% data variables.product.prodname_codespaces %} で設定する方法を説明します。 codespace でプロジェクトを開き、テンプレートから開発コンテナ設定を追加および変更する例を紹介します。

### 必要な環境

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の JavaScript、Node.js、または TypeScript プロジェクトがあります。 プロジェクトがない場合は、https://github.com/microsoft/vscode-remote-try-node の例でこのチュートリアルを試すことができます。
- Organization で {% data variables.product.prodname_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.


codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、Node.js、JavaScript、Typescript、nvm、npm、yarn を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

vCPU と RAM の量を調整したり、[ドットファイルを追加して環境をパーソナライズ](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)したり、インストールされているツールやスクリプトを変更したりして、codespace をカスタマイズできます。

{% data variables.product.prodname_codespaces %} は、`devcontainer.json` というファイルを使用して設定を保存します。 起動時に、{% data variables.product.prodname_codespaces %} はファイルを使用して、プロジェクトに必要となる可能性のあるツール、依存関係、またはその他のセットアップをインストールします。 詳しい情報については、「[プロジェクトの Codespaces を設定する](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」を参照してください。

## ステップ 2: テンプレートから codespace に開発コンテナを追加する

デフォルトの Codespaces コンテナは、[vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) のような Node.js プロジェクトの実行をすぐにサポートします。 カスタムコンテナを設定することで、codespace 作成の一部として実行されるツールとスクリプトをカスタマイズし、リポジトリ内のすべての {% data variables.product.prodname_codespaces %} ユーザに完全に再現可能な環境を確保できます。

カスタムコンテナを使用してプロジェクトを設定するには、`devcontainer.json` ファイルを使用して環境を定義する必要があります。 {% data variables.product.prodname_codespaces %} で、これをテンプレートから追加することも、独自に作成することもできます。 開発コンテナの詳細については、「[プロジェクトの Codespaces を設定する](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」を参照してください。

{% data reusables.codespaces.command-palette-container %}
3. この例では、[**Node.js**] をクリックします。  追加機能が必要な場合は、Node に固有の任意のコンテナ、または Node と MongoDB などのツールの組み合わせを選択できます。 ![リストから Node オプションを選択](/assets/images/help/codespaces/add-node-prebuilt-container.png)
4. Node.js の推奨バージョンをクリックします。 ![Node.js バージョンの選択](/assets/images/help/codespaces/add-node-version.png)
{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Node.js 開発コンテナテンプレートを追加すると、次のファイルを含む `.devcontainer` フォルダがプロジェクトのリポジトリのルートに追加されます。

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

- **名前** - 開発コンテナには任意の名前を付けることができます。これはデフォルトです。
- **ビルド** - ビルドプロパティです。
  - **Dockerfile** - ビルドオブジェクトでは、Dockerfile は、テンプレートからも追加された Dockerfile への参照です。
  - **Args**
    - **バリアント**: このファイルには、Dockerfile に渡される使用するノードのバリアントであるビルド引数が 1 つだけ含まれています。
- **設定** - これらは、設定可能な {% data variables.product.prodname_vscode %} 設定です。
  - **Terminal.integrated.shell.linux** - ここでは bash がデフォルトですが、これを変更することで他のターミナルシェルを使用できます。
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **Dbaeumer.vscode-eslint** - ES lint は lint の優れた機能拡張ですが、JavaScript の場合は、Marketplace の優れた機能拡張も多数含めることができます。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。
- **postCreateCommand** - Dockerfileで定義されていない codespace への到達後に何らかの操作を実行する場合は、ここで実行できます。
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

Dockerfile を使用して、コンテナレイヤーを追加し、Dockerfile に含める OS パッケージ、ノードバージョン、またはグローバルパッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

開発コンテナを追加し、すべての機能を基本的に理解したら、環境に合わせてコンテナを設定するための変更を加えます。 この例では、codespace の起動時に npm をインストールするためのプロパティを追加し、コンテナ内のポートのリストをローカルで使用できるようにします。

1. Explorer で、ツリーから `devcontainer.json` ファイルを選択して開きます。 表示するには、`.devcontainer` フォルダを展開する必要がある場合があります。

  ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. `extensions` の後に、`devcontainer.json` ファイルに次の行を追加します。

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  `devcontainer.json` プロパティの詳細については、{% data variables.product.prodname_vscode %} ドキュメントの [devcontainer.json リファレンス](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)を参照してください。

{% data reusables.codespaces.rebuild-command %}

  codespace 内でリビルドすると、リポジトリに変更をコミットする前に、期待どおりに変更が動作します。 何らかの失敗があった場合、コンテナの調整を継続するためにリビルドできるリカバリコンテナを備えた codespace に配置されます。


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

- [Codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
- [{% data variables.product.prodname_codespaces %} の GPG 検証を管理する](/codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
