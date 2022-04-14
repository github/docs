---
title: Setting up your Java project for Codespaces
shortTitle: Setting up with your Java project
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_codespaces %} で Java プロジェクトを始めます。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
---



## はじめに

このガイドでは、Java プロジェクトを {% data variables.product.prodname_codespaces %} で設定する方法を説明します。 codespace でプロジェクトを開き、テンプレートから開発コンテナ設定を追加および変更する例を紹介します。

### 必要な環境

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の Java プロジェクトがあります。 プロジェクトがない場合は、https://github.com/microsoft/vscode-remote-try-java の例でこのチュートリアルを試すことができます。
- Organization で {% data variables.product.prodname_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 By default, the container for your codespace has many languages and runtimes including Java, nvm, npm, and Yarn. また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

vCPU と RAM の量を調整したり、[ドットファイルを追加して環境をパーソナライズ](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)したり、インストールされているツールやスクリプトを変更したりして、codespace をカスタマイズできます。

{% data variables.product.prodname_codespaces %} は、`devcontainer.json` というファイルを使用して設定を保存します。 起動時に、{% data variables.product.prodname_codespaces %} はファイルを使用して、プロジェクトに必要となる可能性のあるツール、依存関係、またはその他のセットアップをインストールします。 For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


## ステップ 2: テンプレートから codespace に開発コンテナを追加する

デフォルトの Codespaces コンテナには、最新の Java バージョン、パッケージマネージャー（Maven、Gradle）、およびその他の一般的なツールがプリインストールされています。 ただし、プロジェクトに必要なツールとスクリプトを定義するために、カスタムコンテナを設定することをお勧めします。 これにより、リポジトリ内のすべての {% data variables.product.prodname_codespaces %} ユーザに対して完全に再現可能な環境を確保できます。

カスタムコンテナを使用してプロジェクトを設定するには、`devcontainer.json` ファイルを使用して環境を定義する必要があります。 {% data variables.product.prodname_codespaces %} で、これをテンプレートから追加することも、独自に作成することもできます。 For more information on dev containers, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


{% data reusables.codespaces.command-palette-container %}
3. この例では、[**Java**] をクリックします。 実際には、Java に固有の任意のコンテナ、または Java と Azure Functions などのツールの組み合わせを選択できます。 ![リストから Java オプションを選択](/assets/images/help/codespaces/add-java-prebuilt-container.png)
4. Java の推奨バージョンをクリックします。 ![Java バージョンを選択](/assets/images/help/codespaces/add-java-version.png)
{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Java 開発コンテナテンプレートを追加すると、次のファイルを含む `.devcontainer` フォルダがプロジェクトのリポジトリのルートに追加されます。

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルは、サンプルの後に説明されるいくつかのプロパティを定義します。

#### devcontainer.json

```json
// フォーマットの詳細については、https://aka.ms/vscode-remote/devcontainer.json または次のファイルの README を参照してください。
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
    "name": "Java",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // VARIANT引数を更新して Java バージョン11、14 を選択します。
            "VARIANT": "11",
            // オプション
            "INSTALL_MAVEN": "true",
            "INSTALL_GRADLE": "false",
            "INSTALL_NODE": "false",
            "NODE_VERSION": "lts/*"
        }
    },

    // コンテナの作成時に *デフォルト* のコンテナ固有の settings.json 値を設定します。
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "java.home": "/docker-java-home",
        "maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "vscjava.vscode-java-pack"
    ],

    // 'forwardPorts' を使用して、コンテナ内のポートのリストをローカルで使用できるようにします。
    // "forwardPorts": [],

    // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
    // "postCreateCommand": "java -version",

    // 非 root ユーザとして接続するためコメントを解除します。 （参照: https://aka.ms/vscode-remote/containers/non-root）
    "remoteUser": "vscode"
}
```

- **名前** - 開発コンテナには任意の名前を付けることができます。これはデフォルトです。
- **ビルド** - ビルドプロパティです。
  - **Dockerfile** - ビルドオブジェクトでは、Dockerfile は、テンプレートからも追加された Dockerfile への参照です。
  - **Args**
    - **バリアント**: このファイルには、Dockerfile に渡される Java バージョンであるビルド引数が1つだけ含まれています。
- **設定** - これらは、設定可能な {% data variables.product.prodname_vscode %} 設定です。
  - **Terminal.integrated.shell.linux** - ここでは bash がデフォルトですが、これを変更することで他のターミナルシェルを使用できます。
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **Vscjava.vscode-java-pack** - Java Extension Pack は、Java 開発を始めるための一般的な機能拡張を提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - Dockerfileで定義されていない codespace への到達後に何らかの操作を実行する場合は、ここで実行できます。
- **remoteUser** - デフォルト設定では、`vscode` ユーザとして実行していますが、オプションでこれを `root` に設定できます。

#### Dockerfile

```bash
# 画像の内容はこちら: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] MavenまたはGradleをインストールします
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] フロントエンド開発用の nvm を使用して Node.js のバージョンをインストールします
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] このセクションのコメントを解除して、追加の OS パッケージをインストールします。
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] この行のコメントを解除してグローバルノードパッケージをインストールします。
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile を使用して、コンテナレイヤーを追加し、Dockerfile に含める OS パッケージ、Java バージョン、またはグローバルパッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

開発コンテナを追加し、すべての機能を基本的に理解したら、環境に合わせてコンテナを設定するための変更を加えます。 この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

1. Explorer で、ツリーから `devcontainer.json` ファイルを選択して開きます。 表示するには、`.devcontainer` フォルダを展開する必要がある場合があります。

  ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. `extensions` の後に、`devcontainer.json` ファイルに次の行を追加します。

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  `devcontainer.json` プロパティの詳細については、Visual Studio Codeドキュメントの [devcontainer.json リファレンス](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)を参照してください。

{% data reusables.codespaces.rebuild-command %}

  codespace 内でリビルドすると、リポジトリに変更をコミットする前に、期待どおりに変更が動作します。 何らかの失敗があった場合、コンテナの調整を継続するためにリビルドできるリカバリコンテナを備えた codespace に配置されます。


## Step 4: アプリケーションを実行する

前のセクションでは、`postCreateCommand` を使用して npm を介してパッケージのセットをインストールしました。 これを使用して、npm でアプリケーションを実行できます。

1. `F5` キーを押してアプリケーションを実行します。

2. プロジェクトが開始されると、プロジェクトが使用するポートに接続するためのプロンプトが表示されたトーストが右下隅に表示されます。

  ![ポートフォワーディングトースト](/assets/images/help/codespaces/codespaces-port-toast.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、{% data variables.product.prodname_codespaces %} で Java プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

- [{% data variables.product.prodname_codespaces %} の暗号化されたシークレットを管理する](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [{% data variables.product.prodname_codespaces %} の GPG 検証を管理する](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
