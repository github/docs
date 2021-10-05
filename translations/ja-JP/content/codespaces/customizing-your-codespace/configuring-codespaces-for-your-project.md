---
title: プロジェクトの Codespace の設定
intro: '「devcontainer.json」ファイルを使用して、リポジトリの {% data variables.product.prodname_codespaces %} 環境を定義できます。'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: プロジェクトの設定
---

 

## 開発コンテナについて

開発コンテナ (development container)、または開発コンテナ (dev container) は、{% data variables.product.prodname_codespaces %} がプロジェクトの開発に必要なツールとランタイムを提供するために使用する環境です。 When working with a dev container in {% data variables.product.prodname_codespaces %} you can either [use the default configuration](#using-the-default-configuration), [use a predefined configuration](#using-a-predefined-container-configuration), or [create your own configuration](#creating-a-custom-codespace-configuration). 選択するオプションは、ユーザのプロジェクトが上手くいくために必要なツール、ランタイム、依存関係、およびワークフローによって異なります。

{% data variables.product.prodname_codespaces %} は、`devcontainer.json` ファイルを使用して、プロジェクトごとおよびブランチごとにカスタマイズできます。 この設定ファイルは、フレームワーク、ツール、機能拡張、およびポート転送を含めることができる開発コンテナを定義することにより、リポジトリ用に作成するすべての新しい codespace の環境を決定します。 Dockerfile を `.devcontainer` フォルダ内の `devcontainer.json` ファイルと一緒に使用して、コンテナイメージの作成に必要なすべてを定義することもできます。

### devcontainer.json

{% data reusables.codespaces.devcontainer-location %}

`devcontainer.json` を使用して、エディタを含む codespace 環境全体のデフォルト設定をすることができますが、`.vscode/settings.json` という名前のファイルの codespace 内の個々の[ワークスペース](https://code.visualstudio.com/docs/editor/workspaces)にエディタ固有の設定をすることもできます。

`devcontainer.json` で可能な設定とプロパティについては、{% data variables.product.prodname_vscode %} ドキュメントの [devcontainer.json リファレンス](https://aka.ms/vscode-remote/devcontainer.json)を参照してください。

### Dockerfile

Dockerfile は `.devcontainer` フォルダにもあります。

Dockerfile をプロジェクトに追加して、コンテナイメージを定義し、ソフトウェアをインストールできます。 Dockerfileでは、`FROM` を使用してコンテナイメージを指定できます。

```Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# ** [Optional] このセクションのコメントを解除して、追加のパッケージをインストールします。 **
# USER root
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
#
# USER codespace
```

`RUN` 命令を使用して任意のソフトウェアをインストールし、`&&` を使用してコマンドを結合できます。

`dockerfile` プロパティを使用して、`devcontainer.json` ファイルで Dockerfile を参照します。

```json
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

開発コンテナでの Dockerfile の使用について詳しくは、{% data variables.product.prodname_vscode %} ドキュメントの「[開発コンテナの作成](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile)」を参照してください。

## デフォルト設定を使用する

リポジトリで設定を定義しない場合、{% data variables.product.prodname_dotcom %} はベースの Linux イメージを使用して Codespaces を作成します。 ベース Linux イメージには、Python、Node.js、JavaScript、TypeScript、C++、Java、.NET、PHP、PowerShell、Go、Ruby、Rust などの言語とランタイムが含まれています。 また、git、GitHub CLI、yarn、openssh、vim などの他の開発者ツールやユーティリティも含まれています。 含まれているすべての言語、ランタイム、およびツールを表示するには、codespace 端末内で `devcontainer-info content-url` コマンドを使用し、コマンドが出力する URL に従います。

または、ベース Linux イメージに含まれるすべての詳細については、[`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) リポジトリの最新ファイルを参照してください。

{% data variables.product.prodname_codespaces %} が提供する言語とツールを使用する小さなプロジェクトで作業している場合は、デフォルトの設定が適しています。


## 事前定義済みのコンテナ設定を使用する

事前定義済みのコンテナの定義には、特定のプロジェクトタイプの共通設定が含まれており、インストールする必要のある適切なコンテナオプション、{% data variables.product.prodname_vscode %} 設定、および {% data variables.product.prodname_vscode %} 機能拡張が既に含まれている設定を使用してすばやく開始できます。

追加の拡張性が必要な場合は、事前定義済みの設定を使用することをお勧めします。 事前定義済みの設定をひな形にして、プロジェクトの設定に合わせて修正することもできます。

{% data reusables.codespaces.command-palette-container %}
1. Click the definition you want to use. ![List of predefined container definitions](/assets/images/help/codespaces/predefined-container-definitions-list.png)
1. Follow the prompts to customize your definition.
1. [**OK**] をクリックします。 ![OK button](/assets/images/help/codespaces/prebuilt-container-ok-button.png)
1. To apply the changes, in the bottom right corner of the screen, click **Rebuild now**. For more information about rebuilding your container, see "[Applying changes to your configuration](#applying-changes-to-your-configuration)." !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/rebuild-prompt.png)


## カスタム codespace 設定を作成する

事前設定済みの設定のいずれもニーズを満たさない場合は、`devcontainer.json` ファイルを追加してカスタム設定を作成できます。 {% data reusables.codespaces.devcontainer-location %}

このファイルでは、[サポートされている設定キー](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)を使用して、codespace の環境の要素を指定できます。たとえば、{% data variables.product.prodname_vscode %} 拡張機能がインストールできます。

{% data reusables.codespaces.vscode-settings-order %}

2 つの場所で {% data variables.product.prodname_vscode %} のデフォルトのエディタ設定を定義できます。

* `.vscode/settings.json` で定義されたエディタ設定は、_Workspace_ スコープの設定として codespace に適用されます。
* `devcontainer.json` の`設定`キーで定義されたエディタ設定は、codespace の _リモート [Codespaces]_ スコープ設定として適用されます。

After updating the `devcontainer.json` file, you can rebuild the container for your codespace to apply the changes. For more information, see "[Applying changes to your configuration](#applying-changes-to-your-configuration)."


<!--
## Supported codespace configuration keys

You can use configuration keys supported by {% data variables.product.prodname_codespaces %} in `devcontainer.json`.

### General settings

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `postCreateCommand`

### Docker, Dockerfile, or image settings

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `mounts`
- `runArgs`
- `overrideCommand`
- `dockerComposeFile`

For more information about the available settings for `devcontainer.json`, see [devcontainer.json reference](https://aka.ms/vscode-remote/devcontainer.json) in the {% data variables.product.prodname_vscode %} documentation.
-->

## Applying changes to your configuration

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} Fix the errors in the configuration. ![Error message about recovery mode](/assets/images/help/codespaces/recovery-mode-error-message.png)
   - To diagnose the error by reviewing the creation logs, click **View creation log**.
   - To fix the errors identified in the logs, update your `devcontainer.json` file.
   - To apply the changes, rebuild your container. 
