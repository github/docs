---
title: GitHub Codespaces 用に Java プロジェクトを設定する
allowTitleToDifferFromFilename: true
shortTitle: Setting up with your Java project
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_github_codespaces %} で Java プロジェクトを始めます。'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: b861744483f61bc01e8069188c1ce6298411d57e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158766'
---
## はじめに

このガイドでは、Java プロジェクトの設定方法を紹介します {% data reusables.codespaces.setting-up-project-intro %}

### 前提条件

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の Java プロジェクトがあります。 プロジェクトがない場合は、次の例を使用してこのチュートリアルを試すことができます: https://github.com/microsoft/vscode-remote-try-java
- Organization で {% data variables.product.prodname_github_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. リポジトリ名の下で、 **{% octicon "code" aria-label="The code icon" %} コード** のドロップダウン メニューを使用し、 **[Codespaces]** タブでプラス記号 {% octicon "plus" aria-label="The plus icon" %} をクリックします。

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 既定では、codespace のコンテナーには、Java、nvm、npm、Yarn を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano など、一般的に使用されているツールが含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## ステップ 2: テンプレートからリポジトリに開発コンテナーの構成を追加する

{% data variables.product.prodname_github_codespaces %} の既定の開発コンテナー ("dev コンテナー") には、Java の最新バージョン、パッケージ マネージャー (Maven、Gradle)、その他の一般的なツールがプレインストールされています。 ただし、独自の開発コンテナーを構成して、プロジェクトに必要なすべてのツールとスクリプトを含めることをお勧めします。 これにより、リポジトリのすべての {% data variables.product.prodname_github_codespaces %} ユーザーに対して、完全に再現可能な環境が保証されます。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、 **[Java]** をクリックします。 実際には、Java に固有の任意のコンテナ、または Java と Azure Functions などのツールの組み合わせを選択できます。
  ![一覧から [Java] オプションを選びます](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Java の推奨バージョンをクリックします。
  ![Java のバージョンの選択](/assets/images/help/codespaces/add-java-version.png) {% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Java 開発コンテナー テンプレートを追加すると、次のファイルを含む `.devcontainer` ディレクトリが、プロジェクトのリポジトリのルートに追加されます。

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルでは、サンプルの後に説明されるいくつかのプロパティを定義します。

#### devcontainer.json

```json
// For format details, see https://aka.ms/vscode-remote/devcontainer.json or this file's README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
    "name": "Java",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update the VARIANT arg to pick a Java version: 11, 14
            "VARIANT": "11",
            // Options
            "INSTALL_MAVEN": "true",
            "INSTALL_GRADLE": "false",
            "INSTALL_NODE": "false",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "java.home": "/docker-java-home",
        "maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "vscjava.vscode-java-pack"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "java -version",

    // Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name** - 開発コンテナーには任意の名前を付けることができます。これは既定値です。
- **build** - ビルドのプロパティ。
  - **dockerfile** - `build` オブジェクトの `dockerfile` には、やはりテンプレートから追加された Dockerfile へのパスが含まれます。
  - **args**
    - **variant**: このファイルには、Dockerfile に渡される Java のバージョンであるビルド引数が 1 つだけ含まれています。
- **settings** - これらは、ユーザーが設定できる {% data variables.product.prodname_vscode %} の設定です。
  - **terminal.integrated.shell.linux** - ここでは bash が既定値ですが、これを変更すると他のターミナル シェルを使用できます。
- **extensions** - これらは既定で含まれる拡張機能です。
  - **vscjava.vscode-java-pack** - Java Extension Pack は、Java 開発を始めるための一般的な機能拡張を提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。
- **postCreateCommand** - codespace が作成された後に、Dockerfile で定義されていないコマンドを実行するには、これを使います。
- **remoteUser** - 既定では、`vscode` ユーザーとして実行されていますが、必要に応じてこれを `root` に設定することができます。

#### Dockerfile

```bash
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] Install Maven or Gradle
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile を使って、新しいコンテナー レイヤーを追加し、コンテナーに含める OS パッケージ、Java のバージョン、またはグローバル パッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

開発コンテナーの構成を追加し、すべての機能を基本的に理解したので、変更を行って環境をさらにカスタマイズできます。 この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

1. エクスプローラーで、ツリーから `devcontainer.json` ファイルを選択してそれを開きます。 表示するには、`.devcontainer` フォルダーを展開する必要がある場合があります。

   ![エクスプローラーの devcontainer.json ファイル](/assets/images/help/codespaces/devcontainers-options.png)

2. `devcontainer.json` ファイルの `extensions` の後に、次の行を追加します。

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## 手順 4:アプリケーションを実行する

前のセクションでは、`postCreateCommand` 使って、一連のパッケージを npm でインストールしました。 これを使用して、npm でアプリケーションを実行できます。

1. `F5` キーを押してアプリケーションを実行します。

2. プロジェクトが開始されると、{% data variables.product.prodname_vscode_shortname %} の右下隅に "トースト" 通知メッセージが表示されるはずです。プロジェクトで使用されるポートに接続するように促されます。

   ![ポート転送の "トースト" 通知](/assets/images/help/codespaces/codespaces-port-toast.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、Java で {% data variables.product.prodname_github_codespaces %} プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
