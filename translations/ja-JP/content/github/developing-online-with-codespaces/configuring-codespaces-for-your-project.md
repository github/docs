---
title: プロジェクトの Codespace の設定
intro: リポジトリの新しい codespace ごとにデフォルトの設定を行い、コントリビューターがオンライン開発環境で必要なすべてのツールと設定を確実に行えるようにすることができます。
product: '{% data reusables.gated-features.codespaces %}'
permissions: リポジトリへの書き込み権限を持つユーザは、デフォルトの codespace 設定を作成または編集できます。
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### デフォルトの codespace 設定について

{% data reusables.codespaces.about-configuration %}

If you don't define a configuration in your repository, {% data variables.product.prodname_dotcom %} creates a codespace with a base Linux image. The base Linux image includes tools for Node.js, JavaScript, TypeScript, Python, C++, Java, C#, .NET Core, PHP, and PowerShell. For more information about the base Linux image, see the [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux) repository.

{% data reusables.codespaces.about-personalization %}{% data reusables.codespaces.codespace-config-order %}詳しい情報については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)」を参照してください。

プロジェクトタイプ用にビルド済みコンテナ設定を使用してデフォルトの codespace 設定を作成するか、プロジェクトのニーズに固有のカスタム設定を作成できます。

{% data variables.product.prodname_codespaces %}  uses settings contained in a configuration file named `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

You can use your `devcontainer.json` to set default settings for the entire codespace environment, including the {% data variables.product.prodname_vscode %} editor, but you can also set editor-specific settings in a file named `.vscode/settings.json`.

リポジトリの codespace 設定への変更は、すべての新しい codespace にのみ適用され、既存の codespace には影響しません。

### ビルド済みのコンテナ設定を使用する

[`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) リポジトリで利用可能な、{% data variables.product.prodname_vscode %} 用のビルド済みコンテナ設定を使用できます。 ビルド済みコンテナの定義には、特定のプロジェクトタイプの共通設定が含まれており、適切なコンテナオプション、{% data variables.product.prodname_vscode %} 設定、およびインストールする必要がある {% data variables.product.prodname_vscode %} 拡張機能のすでに用意された設定を使用して素早く開始できます。

1. [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) リポジトリをクローンまたはダウンロードします。
1. `vscode-dev-containers` リポジトリで、[`コンテナ`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers)フォルダに移動し、プロジェクトのニーズに合わせてコンテナ設定を選択します。 例として、[Node.js & JavaScript](https://aka.ms/vscode-dev-containers/definitions/node) コンテナ設定を使用します。
1. [`Node.js & JavaScript`](https://aka.ms/vscode-dev-containers/definitions/node) フォルダから、`.devcontainer` フォルダをプロジェクトのリポジトリのルートにコピーします。
1. 新しい設定をコミットして、{% data variables.product.prodname_dotcom %} のプロジェクトのリポジトリにプッシュします。

`.devcontainer` フォルダを含むブランチから作成された新しい codespace はそれぞれ、フォルダの内容に従って設定されます。 詳しい情報については、「[codespace を作成する](/github/developing-online-with-codespaces/creating-a-codespace)」を参照してください。

### カスタム codespace 設定を作成する

If none of the pre-built configurations meet your needs, you can create a custom configuration by adding a `devcontainer.json` file. {% data reusables.codespaces.devcontainer-location %}

このファイルでは、サポートされている設定キーを使用して、codespace の環境の要素を指定できます。たとえば、{% data variables.product.prodname_vscode %} 拡張機能がインストールできます。

{% data reusables.codespaces.vscode-settings-order %}

2 つの場所で {% data variables.product.prodname_vscode %} のデフォルトのエディタ設定を定義できます。

* `.vscode/settings.json` で定義されたエディタ設定は、_Workspace_ スコープの設定として codespace に適用されます。
* `devcontainer.json` の`設定`キーで定義されたエディタ設定は、codespace の _リモート [Codespaces]_ スコープ設定として適用されます。

### サポートされている codespace 設定キー

`devcontainer.json` の {% data variables.product.prodname_codespaces %} でサポートされている設定キーを使用できます。

#### 一般設定

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `devPort`
- `postCreateCommand`

#### Docker、Dockerfile、またはイメージ設定

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `updateRemoteUserUID`
- `mounts`
- `workspaceMount`
- `workspaceFolder`
- `runArgs`
- `overrideCommand`
- `shutdownAction`
- `dockerComposeFile`

`devcontainer.json` で使用可能な設定の詳細については、{% data variables.product.prodname_vscode %} ドキュメントの「[devcontainer.json の参照](https://aka.ms/vscode-remote/devcontainer.json)」をご覧ください。
