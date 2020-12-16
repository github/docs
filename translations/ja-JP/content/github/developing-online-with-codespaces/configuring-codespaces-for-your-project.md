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

リポジトリで設定を定義しない場合、{% data variables.product.prodname_dotcom %} はベースの Linux イメージを使用して Codespaces を作成します。 The base Linux image includes tools for Python, Node.js, JavaScript, TypeScript, C++, Java, C#, F#, .NET Core, PHP, PowerShell, Go, Ruby, and Rust. ベースの Linux イメージの詳細については、[`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux) リポジトリを参照してください。

{% data reusables.codespaces.about-personalization %}{% data reusables.codespaces.codespace-config-order %}詳しい情報については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)」を参照してください。

プロジェクトタイプ用にビルド済みコンテナ設定を使用してデフォルトの codespace 設定を作成するか、プロジェクトのニーズに固有のカスタム設定を作成できます。

{% data variables.product.prodname_codespaces %} は、`devcontainer.json` という名前の設定ファイルに含まれている設定を使用します。 {% data reusables.codespaces.devcontainer-location %}

`devcontainer.json` を使用して、{% data variables.product.prodname_vscode %} エディタを含む Codespaces 環境全体のデフォルト設定を行うことができますが、`.vscode/settings.json` という名前のファイルでエディタ固有の設定を行うこともできます。

リポジトリの codespace 設定への変更は、すべての新しい codespace にのみ適用され、既存の codespace には影響しません。

### ビルド済みのコンテナ設定を使用する

[`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) リポジトリで利用可能な、{% data variables.product.prodname_vscode %} 用のビルド済みコンテナ設定を使用できます。 ビルド済みコンテナの定義には、特定のプロジェクトタイプの共通設定が含まれており、適切なコンテナオプション、{% data variables.product.prodname_vscode %} 設定、およびインストールする必要がある {% data variables.product.prodname_vscode %} 拡張機能のすでに用意された設定を使用して素早く開始できます。

1. [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) リポジトリをクローンまたはダウンロードします。
1. `vscode-dev-containers` リポジトリで、[`コンテナ`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers)フォルダに移動し、プロジェクトのニーズに合わせてコンテナ設定を選択します。 例として、[Node.js & JavaScript](https://aka.ms/vscode-dev-containers/definitions/node) コンテナ設定を使用します。
1. [`Node.js & JavaScript`](https://aka.ms/vscode-dev-containers/definitions/node) フォルダから、`.devcontainer` フォルダをプロジェクトのリポジトリのルートにコピーします。
1. 新しい設定をコミットして、{% data variables.product.prodname_dotcom %} のプロジェクトのリポジトリにプッシュします。

`.devcontainer` フォルダを含むブランチから作成された新しい codespace はそれぞれ、フォルダの内容に従って設定されます。 詳しい情報については、「[codespace を作成する](/github/developing-online-with-codespaces/creating-a-codespace)」を参照してください。

### カスタム codespace 設定を作成する

ビルド済みの設定のいずれもニーズを満たさない場合は、`devcontainer.json` ファイルを追加してカスタム設定を作成できます。 {% data reusables.codespaces.devcontainer-location %}

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
- `postCreateCommand`

#### Docker、Dockerfile、またはイメージ設定

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

`devcontainer.json` で使用可能な設定の詳細については、{% data variables.product.prodname_vscode %} ドキュメントの「[devcontainer.json の参照](https://aka.ms/vscode-remote/devcontainer.json)」をご覧ください。
