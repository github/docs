---
title: GitHub Codespaces 用に C# (.NET) プロジェクトを設定する
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_github_codespaces %} で C# (.NET) プロジェクトを始めます。'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 10282aedf3bdb239fa238e546c2fc6280787a6a0
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158614'
---
## はじめに

このガイドでは、C# (.NET) プロジェクトの設定方法を紹介します {% data reusables.codespaces.setting-up-project-intro %}

### 前提条件

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の C# (.NET) プロジェクトがある必要があります。 プロジェクトがない場合は、次の例を使用してこのチュートリアルを試すことができます: https://github.com/2percentsilk/dotnet-quickstart 。
- Organization で {% data variables.product.prodname_github_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. リポジトリ名の下で、 **{% octicon "code" aria-label="The code icon" %} コード** のドロップダウン メニューを使用し、 **[Codespaces]** タブでプラス記号 {% octicon "plus" aria-label="The plus icon" %} をクリックします。

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、.NET を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## ステップ 2: テンプレートからリポジトリに開発コンテナーの構成を追加する

{% data variables.product.prodname_github_codespaces %} の既定の開発コンテナー ("開発コンテナー") には、.NET の最新バージョンと一般的なツールがプレインストールされています。 ただし、独自の開発コンテナーを構成して、プロジェクトに必要なすべてのツールとスクリプトを含めることをお勧めします。 これにより、リポジトリのすべての {% data variables.product.prodname_github_codespaces %} ユーザーに対して、完全に再現可能な環境が保証されます。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、 **[C# (.NET)]** をクリックします。 追加機能が必要な場合は、C# (.NET) に固有の任意のコンテナ、または C# (.NET) や MSSQL などのツールの組み合わせを選択できます。
  ![リストから [C# (.NET)] オプションを選択します](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. .NET の推奨バージョンをクリックします。
  ![.NET のバージョンの選択](/assets/images/help/codespaces/add-dotnet-version.png)
1. デフォルトのオプションを使用して、Node.js をカスタマイズに追加します。
  ![Node.js の選択に追加](/assets/images/help/codespaces/dotnet-options.png) {% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

C# (.NET) 開発コンテナー テンプレートを追加すると、`.devcontainer` フォルダーが、次のファイルを含むプロジェクトのリポジトリのルートに追加されます。

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルでは、サンプルの後に説明されるいくつかのプロパティを定義します。

#### devcontainer.json

```json
{
    "name": "C# (.NET)",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update 'VARIANT' to pick a .NET Core version: 2.1, 3.1, 5.0
            "VARIANT": "5.0",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*",
            "INSTALL_AZURE_CLI": "false"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-dotnettools.csharp"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [5000, 5001],

    // [Optional] To reuse of your local HTTPS dev cert:
    //
    // 1. Export it locally using this command:
    //    * Windows PowerShell:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //    * macOS/Linux terminal:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //
    // 2. Uncomment these 'remoteEnv' lines:
    //    "remoteEnv": {
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. Start the container.
    //
    // 4. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer.
    //
    // 5. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https".
    //

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name** - 開発コンテナーには任意の名前を付けることができます。これは既定値です。
- **build** - ビルドのプロパティ。
  - **dockerfile** - `build` オブジェクトの `dockerfile` には、やはりテンプレートから追加された Dockerfile へのパスが含まれます。
  - **args**
    - **variant**: このファイルには、使う .NET Core バージョンであるビルド引数が 1 つだけ含まれています。
- **settings** - これらは {% data variables.product.prodname_vscode %} 設定です。
  - **terminal.integrated.shell.linux** - ここでは bash が既定値ですが、これを変更すると他のターミナル シェルを使用できます。
- **extensions** - これらは既定で含まれる拡張機能です。
  - **ms-dotnettools.csharp** - Microsoft C# 機能拡張は、IntelliSense、リンティング、デバッグ、コード ナビゲーション、コード形式、リファクタリング、変数エクスプローラー、テスト エクスプローラーなどの機能を含み、C# での開発に豊富なサポートを提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。
- **postCreateCommand** - codespace が作成された後に、Dockerfile で定義されていないコマンドを実行するには、これを使います。
- **remoteUser** - 既定では、vscode ユーザーとして実行されていますが、必要に応じてこれを root に設定することができます。

#### Dockerfile

```bash
# [Choice] .NET version: 5.0, 3.1, 2.1
ARG VARIANT="5.0"
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Option] Install Azure CLI
ARG INSTALL_AZURE_CLI="false"
COPY library-scripts/azcli-debian.sh /tmp/library-scripts/
RUN if [ "$INSTALL_AZURE_CLI" = "true" ]; then bash /tmp/library-scripts/azcli-debian.sh; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile を使用して、コンテナレイヤーを追加し、コンテナに含める OS パッケージ、ノードバージョン、またはグローバルパッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

開発コンテナーの構成を追加し、すべての機能を基本的に理解したので、変更を行って環境をさらにカスタマイズできます。 この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

1. エクスプローラーで、ツリーから `devcontainer.json` ファイルを選択してそれを開きます。 表示するには、`.devcontainer` フォルダーを展開する必要がある場合があります。

   ![エクスプローラーの devcontainer.json ファイル](/assets/images/help/codespaces/devcontainers-options.png)

2. `devcontainer.json` ファイル内の `extensions` リストを更新して、プロジェクトを操作する際に役立つ拡張機能をいくつか追加します。

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. codespace 設定プロセスの一部として依存関係を復元するには、`postCreateCommand` のコメントを解除します。

   ```json{:copy}
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. 「Code Spell Checker」機能拡張がインストールされていることを確認して、変更が正常に適用されたことを確認します。

    ![機能拡張のリスト](/assets/images/help/codespaces/dotnet-extensions.png)

## 手順 4:アプリケーションを実行する

前のセクションでは、`postCreateCommand` を使用して、一連のパッケージを `dotnet restore` コマンドを使ってインストールしました。 依存関係がインストールされているため、アプリケーションを実行できます。

1. ターミナルで `F5` を押すか、`dotnet watch run` を入力してアプリケーションを実行します。

2. プロジェクトが開始されると、{% data variables.product.prodname_vscode_shortname %} の右下隅に "トースト" 通知メッセージが表示されるはずです。プロジェクトで使用されるポートに接続するように促されます。

   ![ポート転送の "トースト" 通知](/assets/images/help/codespaces/python-port-forwarding.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、C# (.NET) で {% data variables.product.prodname_github_codespaces %} プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
