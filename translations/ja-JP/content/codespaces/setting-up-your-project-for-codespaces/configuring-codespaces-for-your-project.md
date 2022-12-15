---
title: 開発コンテナーの概要
intro: You can use a `devcontainer.json` file to define a {% data variables.product.prodname_codespaces %} environment for your repository.
allowTitleToDifferFromFilename: true
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
- /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
- /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
- /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
- /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 298957822472a3b7699c3d2a8e491540125f9494
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141519213"
---
## <a name="about-dev-containers"></a>開発コンテナについて

開発コンテナ (development container)、または開発コンテナ (dev container) は、{% data variables.product.prodname_codespaces %} がプロジェクトの開発に必要なツールとランタイムを提供するために使用する環境です。 プロジェクトにまだ開発コンテナーが定義されていない場合、{% data variables.product.prodname_codespaces %} では既定の構成を使用します。この構成には、チームがプロジェクトで開発するために必要な一般的なツールの多くが含まれています。 詳細については、「[既定の構成の使用](#using-the-default-configuration)」を参照してください。

プロジェクトのすべてのユーザーに、プロジェクトに合わせて調整された一貫性のある環境を持たせたい場合は、リポジトリに開発コンテナーを追加できます。 定義済みの構成を使用して、プロジェクトをさらにカスタマイズするオプションを使用して、さまざまなプロジェクトの種類の共通構成を選択するか、独自のカスタム構成を作成できます。 詳細については、「[定義済みのコンテナー構成の使用](#using-a-predefined-container-configuration)」および「[カスタム codespace 構成の作成](#creating-a-custom-codespace-configuration)」を参照してください。 選択するオプションは、ユーザのプロジェクトが上手くいくために必要なツール、ランタイム、依存関係、およびワークフローによって異なります。

{% data variables.product.prodname_codespaces %} は、`devcontainer.json` ファイルを使用して、プロジェクトごとおよびブランチごとにカスタマイズできます。 この設定ファイルは、フレームワーク、ツール、機能拡張、およびポート転送を含めることができる開発コンテナを定義することにより、リポジトリ用に作成するすべての新しい codespace の環境を決定します。 Dockerfile を `.devcontainer` フォルダー内の `devcontainer.json` ファイルと共に使用して、コンテナー イメージの作成に必要なすべてを定義することもできます。

### <a name="devcontainerjson"></a>devcontainer.json

{% data reusables.codespaces.devcontainer-location %}

`devcontainer.json` を使用して、エディターを含め、codespace 環境全体の既定の設定を設定することができますが、`.vscode/settings.json` という名前のファイル内の codespace にある個々の[ワークスペース](https://code.visualstudio.com/docs/editor/workspaces)に対してエディター固有の設定を設定することもできます。

`devcontainer.json` で設定できる設定とプロパティの詳細については、{% data variables.product.prodname_vscode %} ドキュメントの [devcontainer.json リファレンス](https://aka.ms/vscode-remote/devcontainer.json)を参照してください。

### <a name="dockerfile"></a>Dockerfile

Dockerfile は `.devcontainer` フォルダーにもあります。 

Dockerfile をプロジェクトに追加して、コンテナイメージを定義し、ソフトウェアをインストールできます。 Dockerfile では、`FROM` を使用してコンテナー イメージを指定できます。

```Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# ** [Optional] Uncomment this section to install additional packages. **
# USER root
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
#
# USER codespace
```

`RUN` 命令を使用して、任意のソフトウェアをインストールし、`&&` を使用してコマンドを結合できます。

`dockerfile` プロパティを使用して、`devcontainer.json` ファイル内の Dockerfile を参照します。

```json
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

開発コンテナーでの Dockerfile の使用の詳細については、{% data variables.product.prodname_vscode %} ドキュメントの「[開発コンテナーを作成する](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile)」を参照してください。 

## <a name="using-the-default-configuration"></a>デフォルト設定を使用する

リポジトリで設定を定義しない場合、{% data variables.product.prodname_dotcom %} はベースの Linux イメージを使用して Codespaces を作成します。 ベース Linux イメージには、Python、Node.js、JavaScript、TypeScript、C++、Java、.NET、PHP、PowerShell、Go、Ruby、Rust などの言語とランタイムが含まれています。 また、git、GitHub CLI、yarn、openssh、vim などの他の開発者ツールやユーティリティも含まれています。 含まれているすべての言語、ランタイム、およびツールを表示するには、codespace 端末内で `devcontainer-info content-url` コマンドを使用し、コマンドが出力する URL に従います。

または、Linux 基本イメージに含まれるすべての詳細については、[`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) リポジトリの最新のファイルを参照してください。 

{% data variables.product.prodname_codespaces %} が提供する言語とツールを使用する小さなプロジェクトで作業している場合は、デフォルトの設定が適しています。


## <a name="using-a-predefined-container-configuration"></a>事前定義済みのコンテナ設定を使用する

事前定義済みのコンテナの定義には、特定のプロジェクトタイプの共通設定が含まれており、インストールする必要のある適切なコンテナオプション、{% data variables.product.prodname_vscode %} 設定、および {% data variables.product.prodname_vscode %} 機能拡張が既に含まれている設定を使用してすばやく開始できます。

追加の拡張性が必要な場合は、事前定義済みの設定を使用することをお勧めします。 事前定義済みの設定をひな形にして、プロジェクトの設定に合わせて修正することもできます。

{% data reusables.codespaces.command-palette-container %}
1. 使用する定義をクリックします。
  ![定義済みのコンテナー定義の一覧](/assets/images/help/codespaces/predefined-container-definitions-list.png)
1. プロンプトに従って定義をカスタマイズします。 定義をカスタマイズするためのオプションの詳細については、「[`devcontainer.json` ファイルへの追加機能の追加](#adding-additional-features-to-your-devcontainerjson-file)」を参照してください。
1. **[OK]** をクリックします。
  ![[OK] ボタン](/assets/images/help/codespaces/prebuilt-container-ok-button.png)
1. 変更を適用するには、画面の右下隅にある **[Rebuild now]\(今すぐリビルド\)** をクリックします。 コンテナーのリビルドの詳細については、「[構成への変更の適用](#applying-changes-to-your-configuration)」を参照してください。
  ![{% data variables.product.prodname_vscode_command_palette %} の [Codespaces: コンテナーのリビルド]](/assets/images/help/codespaces/rebuild-prompt.png)

### <a name="adding-additional-features-to-your-devcontainerjson-file"></a>`devcontainer.json` ファイルへの追加機能の追加

{% note %}

**注:** この機能はベータ版であり、変更される可能性があります。

{% endnote %}

定義済みのコンテナー構成に機能を追加して、使用可能なツールをカスタマイズし、カスタム codespace 構成を作成せずにワークスペースの機能を拡張できます。 たとえば、定義済みのコンテナー構成を使用し、{% data variables.product.prodname_cli %} も追加できます。 コンテナー構成を設定するときに `devcontainer.json` ファイルに機能を追加することで、これらの追加機能がプロジェクトで使用できるようになります。

定義済みのコンテナーを構成するときにそれらを選択することで、最も一般的な機能の一部を追加できます。 使用可能な機能の詳細については、`vscode-dev-containers` リポジトリの[スクリプト ライブラリ](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts)を参照してください。

![コンテナーの構成時の追加機能メニューの選択。](/assets/images/help/codespaces/select-additional-features.png)

**[開発コンテナー構成ファイルの追加]** ワークフローの外部で機能を追加または削除することもできます。 
1. コマンド パレット (`Shift + Command + P` / `Ctrl + Shift + P`) にアクセスし、「configure」と入力します。 **[Codespaces: Configure Devcontainer Features]\(Codespaces: Devcontainer 機能の構成\)** を選択します。
  ![コマンド パレットの [Codespaces: Configure Devcontainer Features]\(Codespaces: Devcontainer 機能の構成\) コマンド](/assets/images/help/codespaces/codespaces-configure-features.png)
2. 機能の選択を更新し、 **[OK]** をクリックします。
  ![コンテナーの構成時の追加機能メニューの選択。](/assets/images/help/codespaces/select-additional-features.png)
1. 変更を適用するには、画面の右下隅にある **[Rebuild now]\(今すぐリビルド\)** をクリックします。 コンテナーのリビルドの詳細については、「[構成への変更の適用](#applying-changes-to-your-configuration)」を参照してください。
  ![コマンド パレットの [Codespaces: コンテナーのリビルド]](/assets/images/help/codespaces/rebuild-prompt.png)


## <a name="creating-a-custom-codespace-configuration"></a>カスタム codespace 設定を作成する

定義済みの構成のいずれもニーズを満たさない場合は、`devcontainer.json` ファイルを追加してカスタム構成を作成できます。 {% data reusables.codespaces.devcontainer-location %}

このファイルでは、[サポートされている構成キー](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)を使用して、codespace の環境の要素を指定できます。たとえば、どの {% data variables.product.prodname_vscode %} 拡張機能をインストールするかなどです。

{% data reusables.codespaces.vscode-settings-order %}

2 つの場所で {% data variables.product.prodname_vscode %} のデフォルトのエディタ設定を定義できます。

* `.vscode/settings.json` で定義されたエディター設定は、codespace で _Workspace_ スコープの設定として適用されます。
* `devcontainer.json` の `settings` キーで定義されたエディター設定は、codespace で _Remote [Codespaces]_ スコープの設定として適用されます。

`devcontainer.json` ファイルを更新した後、codespace のコンテナーをリビルドして変更を適用できます。 詳細については、「[構成への変更の適用](#applying-changes-to-your-configuration)」を参照してください。

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

## <a name="applying-changes-to-your-configuration"></a>構成への変更の適用

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} 構成のエラーを修正します。
  ![回復モードに関するエラー メッセージ](/assets/images/help/codespaces/recovery-mode-error-message.png)
   - 作成ログを確認してエラーを診断するには、 **[View creation log]\(作成ログの表示\)** をクリックします。
   - ログで識別されたエラーを修正するには、`devcontainer.json` ファイルを更新します。
   - 変更を適用するには、コンテナーをリビルドします。 

## <a name="further-reading"></a>参考資料

- 「[codespaces の事前ビルド](/codespaces/prebuilding-your-codespaces)」
