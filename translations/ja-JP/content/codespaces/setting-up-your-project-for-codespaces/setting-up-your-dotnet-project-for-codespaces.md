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

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

codespace を作成すると、プロジェクトは専用のリモート VM 上に作成されます。 デフォルト設定では、codespace のコンテナには、.NET を含む多くの言語とランタイムがあります。 また、git、wget、rsync、openssh、nano などの一般的なツールセットも含まれています。

vCPU と RAM の量を調整したり、[ドットファイルを追加して環境をパーソナライズ](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)したり、インストールされているツールやスクリプトを変更したりして、codespace をカスタマイズできます。

{% data variables.product.prodname_codespaces %} は、`devcontainer.json` というファイルを使用して設定を保存します。 起動時に、{% data variables.product.prodname_codespaces %} はファイルを使用して、プロジェクトに必要となる可能性のあるツール、依存関係、またはその他のセットアップをインストールします。 For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


## ステップ 2: テンプレートから codespace に開発コンテナを追加する

デフォルトの Codespaces コンテナには、最新の .NET バージョンと一般的なツールがプリインストールされています。 ただし、カスタムコンテナを設定して、codespace 作成の一部として実行されるツールとスクリプトをプロジェクトのニーズに合わせて調整し、リポジトリ内のすべての {% data variables.product.prodname_codespaces %} ユーザに完全に再現可能な環境を確保することをお勧めします。

カスタムコンテナを使用してプロジェクトを設定するには、`devcontainer.json` ファイルを使用して環境を定義する必要があります。 {% data variables.product.prodname_codespaces %} で、これをテンプレートから追加することも、独自に作成することもできます。 For more information on dev containers, see "[Introduction to dev containers ](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


{% data reusables.codespaces.command-palette-container %}
2. この例では、**C# (.NET)** をクリックします。 追加機能が必要な場合は、C# (.NET) に固有の任意のコンテナ、または C# (.NET) や MSSQL などのツールの組み合わせを選択できます。 ![リストから C# (.NET) オプションの選択](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
3. .NET の推奨バージョンをクリックします。 ![.NET バージョンの選択](/assets/images/help/codespaces/add-dotnet-version.png)
4. デフォルトのオプションを使用して、Node.js をカスタマイズに追加します。 ![Node.js の選択に追加](/assets/images/help/codespaces/dotnet-options.png)
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
  - **Dockerfile** - ビルドオブジェクトでは、Dockerfile は、これもまたテンプレートから追加された `dockerfile` への参照です。
  - **Args**
    - **バリアント**: このファイルには、使用する .NETCore バージョンであるビルド引数が1つだけ含まれています。
- **設定** - これらは {% data variables.product.prodname_vscode %} 設定です。
  - **Terminal.integrated.shell.linux** - ここでは bash がデフォルトですが、これを変更することで他のターミナルシェルを使用できます。
- **機能拡張** - これらはデフォルト設定で含まれている機能拡張です。
  - **ms-dotnettools.csharp** - Microsoft C# 機能拡張は、IntelliSense、linting、デバッグ、コードナビゲーション、コード形式、リファクタリング、変数エクスプローラ、テストエクスプローラなどの機能を含む、C# での開発に豊富なサポートを提供します。
- **forwardPorts** - ここにリストされているポートはすべて自動的に転送されます。 For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - `dotnet restore` のように、Dockerfileで定義されていない codespace への到達後に何らかの操作を実行する場合は、ここで実行できます。
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

開発コンテナを追加し、すべての機能を基本的に理解したら、環境に合わせてコンテナを設定するための変更を加えます。 この例では、機能拡張をインストールし、codespace の起動時にプロジェクトの依存関係を復元するためのプロパティを追加します。

1. Explorer で `.devcontainer` フォルダを展開し、ツリーから `devcontainer.json` ファイルを選択して開きます。

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

{% data reusables.codespaces.rebuild-command %}

  codespace 内でリビルドすると、リポジトリに変更をコミットする前に、期待どおりに変更が動作します。 何らかの失敗があった場合、コンテナの調整を継続するためにリビルドできるリカバリコンテナを備えた codespace に配置されます。

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

- [{% data variables.product.prodname_codespaces %} の暗号化されたシークレットを管理する](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [{% data variables.product.prodname_codespaces %} の GPG 検証を管理する](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
