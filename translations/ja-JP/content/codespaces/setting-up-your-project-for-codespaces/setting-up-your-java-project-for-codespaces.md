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

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 By default, the container for your codespace has many languages and runtimes including Java, nvm, npm, and Yarn. また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration to your repository from a template

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} comes with the latest Java version, package managers (Maven, Gradle), and other common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. これにより、リポジトリ内のすべての {% data variables.product.prodname_github_codespaces %} ユーザに対して完全に再現可能な環境を確保できます。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、[**Java**] をクリックします。 実際には、Java に固有の任意のコンテナ、または Java と Azure Functions などのツールの組み合わせを選択できます。 ![リストから Java オプションを選択](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Java の推奨バージョンをクリックします。 ![Java バージョンを選択](/assets/images/help/codespaces/add-java-version.png)
{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

Adding the Java dev container template adds a `.devcontainer` directory to the root of your project's repository with the following files:

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

- **name** - You can name your dev container anything, this is just the default.
- **ビルド** - ビルドプロパティです。
  - **dockerfile** - In the `build` object, `dockerfile` contains the path to the Dockerfile that was also added from the template.
  - **args**
    - **variant**: This file only contains one build argument, which is the Java version that is passed into the Dockerfile.
- **settings** - These are {% data variables.product.prodname_vscode %} settings that you can set.
  - **terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **vscjava.vscode-java-pack** - The Java Extension Pack provides popular extensions for Java development to get you started.
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - Use this to run commands that aren't defined in the Dockerfile, after your codespace is created.
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

You can use the Dockerfile to add additional container layers to specify OS packages, Java versions, or global packages we want included in our container.

## ステップ 3: devcontainer.json ファイルを変更する

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

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

1. `F5` キーを押してアプリケーションを実行します。

2. プロジェクトが開始されると、プロジェクトが使用するポートに接続するためのプロンプトが表示されたトーストが右下隅に表示されます。

   ![ポートフォワーディングトースト](/assets/images/help/codespaces/codespaces-port-toast.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、{% data variables.product.prodname_codespaces %} で Java プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
