---
title: Setting up your C# (.NET) project for Codespaces
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
intro: 'カスタム開発コンテナを作成して、{% data variables.product.prodname_codespaces %} で C# (.NET) プロジェクトを始めます。'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
---

## はじめに

このガイドでは、{% data variables.product.prodname_codespaces %} で C# (.NET) プロジェクトを設定する方法を説明します。 codespace でプロジェクトを開き、テンプレートから開発コンテナ設定を追加および変更する例を紹介します。

### 必要な環境

- {% data variables.product.prodname_dotcom_the_website %} のリポジトリに既存の C# (.NET) プロジェクトがある必要があります。 プロジェクトがない場合は、https://github.com/2percentsilk/dotnet-quickstart の例でこのチュートリアルを試すことができます。
- Organization で {% data variables.product.prodname_codespaces %} を有効にする必要があります。

## ステップ 1: codespace でプロジェクトを開く

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、.NET を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration to your repository from a template

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} comes with the latest .NET version and common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. これにより、リポジトリ内のすべての {% data variables.product.prodname_github_codespaces %} ユーザに対して完全に再現可能な環境を確保できます。

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. この例では、**C# (.NET)** をクリックします。 追加機能が必要な場合は、C# (.NET) に固有の任意のコンテナ、または C# (.NET) や MSSQL などのツールの組み合わせを選択できます。 ![リストから C# (.NET) オプションの選択](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. .NET の推奨バージョンをクリックします。 ![.NET バージョンの選択](/assets/images/help/codespaces/add-dotnet-version.png)
1. デフォルトのオプションを使用して、Node.js をカスタマイズに追加します。 ![Node.js の選択に追加](/assets/images/help/codespaces/dotnet-options.png)
{% data reusables.codespaces.rebuild-command %}

### 開発コンテナの構造

C# (.NET) 開発コンテナテンプレートを追加すると、次のファイルを含む `.devcontainer` フォルダがプロジェクトのリポジトリのルートに追加されます。

- `devcontainer.json`
- Dockerfile

新しく追加された `devcontainer.json` ファイルは、サンプルの後に説明されるいくつかのプロパティを定義します。

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

    // コンテナの作成時にインストールする拡張機能の ID を追加します。
    "extensions": [
        "ms-dotnettools.csharp"
    ],

    // 'forwardPorts' を使用して、コンテナ内のポートのリストをローカルで使用できるようにします。
    // "forwardPorts": [5000, 5001],

    // [Optional] To reuse of your local HTTPS dev cert:
    //
    // 1. Export it locally using this command:
    //    * Windows PowerShell:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //    * macOS/Linux terminal:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //
    // 2. これらの「remoteEnv」行のコメントを解除します。
    //    "remoteEnv": {
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. シナリオに応じて、次のいずれかを実行します。
    //    * GitHub Codespaces や Remote - Containers を使用する場合:
    //      1. コンテナを開始します
    //      2. ~/.aspnet/https/aspnetapp.pfx をファイルエクスプローラのルートにドラッグします
    //      3. VS Code でターミナルを開き、"mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https" を実行します
    //
    //    * Remote - Containers のみをローカルコンテナとともに使用する場合は、代わりに次の行のコメントを解除します。
    //      "mounts": [ "source=${env:HOME}${env:USERPROFILE}/.aspnet/https,target=/home/vscode/.aspnet/https,type=bind" ],

    // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
    // "postCreateCommand": "dotnet restore",

    // 代わりに、connect を root としてコメントアウトします。 詳細は https://aka.ms/vscode-remote/containers/non-root を参照します。
    "remoteUser": "vscode"
}
```

- **名前** - 開発コンテナには任意の名前を付けることができます。これはデフォルトです。
- **ビルド** - ビルドプロパティです。
  - **dockerfile** - In the `build` object, `dockerfile` contains the path to the Dockerfile that was also added from the template.
  - **args**
    - **バリアント**: このファイルには、使用する .NETCore バージョンであるビルド引数が1つだけ含まれています。
- **設定** - これらは {% data variables.product.prodname_vscode %} 設定です。
  - **terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **ms-dotnettools.csharp** - Microsoft C# 機能拡張は、IntelliSense、linting、デバッグ、コードナビゲーション、コード形式、リファクタリング、変数エクスプローラ、テストエクスプローラなどの機能を含む、C# での開発に豊富なサポートを提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - Use this to run commands that aren't defined in the Dockerfile, after your codespace is created.
- **remoteUser** - デフォルト設定では、vscode ユーザとして実行していますが、オプションでこれを root に設定できます。

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

# [Optional] この行のコメントを解除してグローバルノードパッケージをインストールします。
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Dockerfile を使用して、コンテナレイヤーを追加し、コンテナに含める OS パッケージ、ノードバージョン、またはグローバルパッケージを指定できます。

## ステップ 3: devcontainer.json ファイルを変更する

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. この例では、コードスペースの起動時に拡張機能とプロジェクトの依存関係をインストールするためのプロパティを追加します。

1. Explorer で、ツリーから `devcontainer.json` ファイルを選択して開きます。 表示するには、`.devcontainer` フォルダを展開する必要がある場合があります。

   ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. `devcontainer.json` ファイルの `extensions` リストを更新し、プロジェクトでの作業に役立ついくつかの機能拡張を追加します。

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. codespace 設定プロセスの一部として依存関係を復元するには、`postCreateCommand` のコメントを解除します。

   ```json{:copy}
   // コンテナの作成後にコマンドを実行するには、「postCreateCommand」を使用します。
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. 「Code Spell Checker」機能拡張がインストールされていることを確認して、変更が正常に適用されたことを確認します。

    ![機能拡張のリスト](/assets/images/help/codespaces/dotnet-extensions.png)

## Step 4: アプリケーションを実行する

前のセクションでは、`postCreateCommand` を使用して、`dotnet restore` コマンドを介してパッケージ一式をインストールしました。 依存関係がインストールされているため、アプリケーションを実行できます。

1. `F5` キーを押すか、ターミナルで `dotnet watch run` と入力して、アプリケーションを実行します。

2. プロジェクトが開始されると、プロジェクトが使用するポートに接続するためのプロンプトが表示されたトーストが右下隅に表示されます。

   ![ポートフォワーディングトースト](/assets/images/help/codespaces/python-port-forwarding.png)

## ステップ 5: 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

## 次のステップ

これで、C# (.NET) で {% data variables.product.prodname_codespaces %} プロジェクトの開発を始める準備ができました。 より高度なシナリオ向けの追加のリソースは次のとおりです。

{% data reusables.codespaces.next-steps-adding-devcontainer %}
