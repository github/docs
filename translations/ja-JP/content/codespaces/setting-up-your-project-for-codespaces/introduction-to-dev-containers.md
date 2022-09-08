---
title: 開発コンテナーの概要
intro: codespace で作業する場合、作業している環境は、仮想マシンでホストされている開発コンテナーを使用して作成されます。
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 22a227f8f97b054e4d3980876dae47d72fb03d08
ms.sourcegitcommit: 3a16368cd8beb8b8487eb77d3e597cf49f4c4335
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/14/2022
ms.locfileid: '147111171'
---
## <a name="about-dev-containers"></a>開発コンテナについて

開発コンテナーは、完全な機能を備えた開発環境を提供するように特別に構成された Docker コンテナーです。 codespace で作業を行うときは常に、仮想マシンで開発コンテナーを使用します。

リポジトリの開発コンテナーを構成できるので、そのリポジトリ用に作成された codespace によって、特定のプロジェクトの作業を行うために必要なすべてのツールとランタイムを備えた、カスタマイズされた開発環境が提供されます。 リポジトリで構成を定義しない場合、{% data variables.product.prodname_github_codespaces %} で既定の構成が使用されます。この構成には、チームがプロジェクトで開発を行うために必要な可能性がある一般的なツールの多くが含まれています。 詳しくは、「[既定の開発コンテナー構成の使用](#using-the-default-dev-container-configuration)」をご覧ください。

開発コンテナーの構成ファイルは、リポジトリの `.devcontainer` ディレクトリに含まれています。 {% data variables.product.prodname_vscode %} を使用して、構成ファイルを追加できます。 さまざまなプロジェクト タイプ向けにあらかじめ定義されている構成の中から選択できます。 これらを追加の構成なしで使うこともできますし、構成を編集して生成される開発環境を改善することもできます。 詳しくは、「[事前定義済みの開発コンテナー構成の使用](#using-a-predefined-dev-container-configuration)」をご覧ください。

または、独自のカスタム構成ファイルを追加することもできます。 詳しくは、「[カスタム開発コンテナー構成の作成](#creating-a-custom-dev-container-configuration)」をご覧ください。

リポジトリ用に単一の開発コンテナー構成を定義したり、異なるブランチ用に異なる構成を定義したり、複数の構成を定義したりできます。 複数の構成を利用できる場合、ユーザーは codespace を作成するときに好みの構成を選択できます。 これは、異なるプログラミング言語のソース コードを含む大規模なリポジトリの場合や、さまざまなプロジェクトがある場合に特に役立ちます。 構成の選択肢を作成することで、異なるチームが、実行する作業用に適切に設定された codespace で作業できるようになります。

### <a name="devcontainerjson"></a>devcontainer.json

開発コンテナー構成のプライマリ ファイルは `devcontainer.json` ファイルです。 このファイルを使用して、リポジトリ用に作成される codespace の環境を決定できます。 このファイルの内容によって、フレームワーク、ツール、拡張機能、ポート フォワーディングを含めることができる開発コンテナーが定義されます。 通常、`devcontainer.json` ファイルには Dockerfile (通常は `devcontainer.json` ファイルと一緒に配置します) への参照が含まれています。

リポジトリに `devcontainer.json` ファイルを追加しない場合、 既定の開発コンテナー構成が使用されます。 詳しくは、「[既定の開発コンテナー構成の使用](#using-the-default-dev-container-configuration)」をご覧ください。

通常、`devcontainer.json` ファイルはリポジトリの `.devcontainer` ディレクトリに配置します。 または、リポジトリのルートに直接配置することもできます。その場合は、ファイル名の先頭をピリオドにする必要があります (`.devcontainer.json`)。 

リポジトリで開発コンテナー構成を選択できるようにする場合は、`.devcontainer/devcontainer.json` (または `.devcontainer.json`) ファイルに代わるファイルを `.devcontainer/SUBDIRECTORY/devcontainer.json` というパスの独自のサブディレクトリに配置する必要があります。 たとえば、次の 2 つの構成から選ぶようにすることができます。 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

リポジトリに複数の `devcontainer.json` ファイルがある場合、各 codespace はいずれかの構成のみから作成されます。 `devcontainer.json` ファイル間で設定をインポートまたは継承することはできません。 カスタム サブディレクトリの `devcontainer.json` ファイルに依存ファイル (Dockerfile など) や `devcontainer.json` ファイル内のコマンドによって実行されるスクリプトがある場合は、これらのファイルを同じサブディレクトリに一緒に配置することをお勧めします。

codespace の作成時にお好みの開発コンテナー構成を選ぶ方法については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」をご覧ください。

{% data reusables.codespaces.more-info-devcontainer %}

#### <a name="how-to-use-the-devcontainerjson"></a>devcontainer.json の使用方法

`devcontainer.json` ファイルは、"パーソナル化" ではなく "カスタマイズ" を提供するものだと考えると有益です。 コードベースで作業するすべてのユーザーが必要とするもののみを開発環境の標準要素として含め、個人の好みのものは含めないようにする必要があります。 リンターのようなものは標準化して、すべてのユーザーにインストールするよう求めることが適切なので、`devcontainer.json` ファイルに含めることができます。 ユーザー インターフェイスのデコレーターやテーマなどは、`devcontainer.json` ファイルに含めるべきでない個人的な選択肢です。

ドットファイルと Settings Sync を使用すると、codespace をパーソナル化できます。詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)」をご覧ください。

### <a name="dockerfile"></a>Dockerfile

開発コンテナー構成の一部として Dockerfile を追加できます。 

Dockerfile は Docker コンテナー イメージを作成するために必要な命令が含まれているテキスト ファイルです。 このイメージは、この Dockerfile を参照する `devcontainer.json` ファイルを使用して codespace を作成するたびに、開発コンテナーの生成に使用されます。 Dockerfile 内の命令は通常、作成される新しいイメージの基になる親イメージを参照することから始まります。 その後に、ソフトウェア パッケージのインストールなど、イメージの作成プロセス中に実行されるコマンドが続きます。

開発コンテナーの Dockerfile は通常、参照元の `devcontainer.json` と共に `.devcontainer` フォルダーに配置します。 

{% note %}

**注**: Dockerfile を使用する代わりに、`image` プロパティを `devcontainer.json` ファイルで使用して、使用する既存のイメージを直接参照できます。 Dockerfile もイメージも見つからない場合は、既定のコンテナー イメージが使用されます。 詳しくは、「[既定の開発コンテナー構成の使用](#using-the-default-dev-container-configuration)」をご覧ください。

{% endnote %}

#### <a name="simple-dockerfile-example"></a>シンプルな Dockerfile の例

次の例では、4 つの命令を使用します。

`ARG` は、ビルド時の変数を定義します。

`FROM` は、生成される Docker イメージの基になる親イメージを指定します。

`COPY` は、ファイルをコピーしてファイルシステムに追加します。 

`RUN` は、パッケージの一覧を更新して、スクリプトを実行します。 コメント アウトされた命令で示されているように、`RUN` 命令を使用してソフトウェアをインストールすることもできます。 複数のコマンドを実行するには、`&&` を使用して、コマンドを 1 つの `RUN` ステートメントに結合します。

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Dockerfile の命令について詳しくは、Docker のドキュメントの「[Dockerfile リファレンス](https://docs.docker.com/engine/reference/builder)」をご覧ください。

#### <a name="using-a-dockerfile"></a>Dockerfile の使用

開発コンテナー構成の一部として Dockerfile を使用するには、`devcontainer.json` ファイル内で `dockerfile` プロパティを使用して参照します。

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

開発コンテナー構成での Dockerfile の使用について詳しくは、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[開発コンテナーを作成する](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile)」をご覧ください。

## <a name="using-the-default-dev-container-configuration"></a>既定の開発コンテナー構成の使用

リポジトリで構成を定義しない場合は、{% data variables.product.prodname_dotcom %} が既定の Linux イメージを使用して codespace を作成します。 この Linux イメージには、Python、Node、PHP、Java、Go、C++、Ruby、.NET Core/C# などの一般的な言語のランタイム バージョンが多数含まれています。 これらの言語の最新または LTS リリースが使用されます。 JupyterLab や Conda など、データ サイエンスと機械学習をサポートするツールもあります。 イメージには、Git、GitHub CLI、yarn、openssh、vim などの他の開発者ツールやユーティリティも含まれています。 含まれているすべての言語、ランタイム、ツールを確認するには、codespace ターミナル内で `devcontainer-info content-url` コマンドを使用し、コマンドで出力された URL にアクセスしてください。

または、既定の Linux イメージに含まれているすべてのものについて詳しくは、[`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) リポジトリの最新のファイルをご覧ください。 

{% data variables.product.prodname_github_codespaces %} が提供する言語とツールを使用する小さなプロジェクトで作業している場合は、既定の構成が適しています。

## <a name="using-a-predefined-dev-container-configuration"></a>事前定義済みの開発コンテナー構成の使用

事前定義済みの構成の一覧から選択して、リポジトリの開発コンテナー構成を作成できます。 これらの構成は、特定のプロジェクト タイプの共通セットアップを提供します。また、適切なコンテナー オプション、{% data variables.product.prodname_vscode_shortname %} 設定、インストールする必要がある {% data variables.product.prodname_vscode_shortname %} 拡張機能が構成で既に用意されているので、短時間で使い始めることができます。

追加の拡張性が必要な場合は、事前定義済みの設定を使用することをお勧めします。 事前定義済みの構成から始めて、プロジェクトに合わせて修正することもできます。

事前定義済みの開発コンテナー構成は、codespace での作業中、またはローカルでのリポジトリの作業中に追加できます。 

{% data reusables.codespaces.command-palette-container %}
1. 使用する定義をクリックします。

   ![定義済みのコンテナー定義の一覧](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. プロンプトに従って定義をカスタマイズします。 定義をカスタマイズするためのオプションの詳細については、「[`devcontainer.json` ファイルへの追加機能の追加](#adding-additional-features-to-your-devcontainerjson-file)」を参照してください。
1. **[OK]** をクリックします。

   ![[OK] ボタン](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. codespace で作業している場合は、ウィンドウの右下にあるメッセージで **[今すぐリビルド]** をクリックして変更を適用します。 コンテナーのリビルドの詳細については、「[構成への変更の適用](#applying-configuration-changes-to-a-codespace)」を参照してください。

   ![{% data variables.product.prodname_vscode_command_palette %} の [Codespaces: コンテナーのリビルド]](/assets/images/help/codespaces/rebuild-prompt.png)

### <a name="adding-additional-features-to-your-devcontainerjson-file"></a>`devcontainer.json` ファイルへの追加機能の追加

{% note %}

**注:** この機能はベータ版であり、変更される可能性があります。

{% endnote %}

事前定義済みのコンテナー構成に機能を追加すると、カスタム開発コンテナー構成をゼロから作成せずに、使用可能なツールをカスタマイズし、ワークスペースの機能を拡張できます。 たとえば、事前定義済みのコンテナー構成を使用して、{% data variables.product.prodname_cli %} を追加できます。 コンテナー構成を設定するときに `devcontainer.json` ファイルに機能を追加することで、これらの追加機能がプロジェクトで使用できるようになります。

定義済みのコンテナーを構成するときにそれらを選択することで、最も一般的な機能の一部を追加できます。 使用可能な機能の詳細については、`vscode-dev-containers` リポジトリの[スクリプト ライブラリ](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts)を参照してください。


1. コマンド パレット (`Shift + Command + P` / `Ctrl + Shift + P`) にアクセスし、「configure」と入力します。 **[Codespaces: Configure Devcontainer Features]\(Codespaces: Devcontainer 機能の構成\)** を選択します。

   ![コマンド パレットの [Codespaces: Configure Devcontainer Features]\(Codespaces: Devcontainer 機能の構成\) コマンド](/assets/images/help/codespaces/codespaces-configure-features.png)

1. 機能の選択を更新し、 **[OK]** をクリックします。

   ![コンテナーの構成時の追加機能メニューの選択](/assets/images/help/codespaces/select-additional-features.png)

1. 変更を適用するには、画面の右下隅にある **[Rebuild now]\(今すぐリビルド\)** をクリックします。 コンテナーのリビルドの詳細については、「[構成への変更の適用](#applying-configuration-changes-to-a-codespace)」を参照してください。

   ![コマンド パレットの [Codespaces: コンテナーのリビルド]](/assets/images/help/codespaces/rebuild-prompt.png)

## <a name="creating-a-custom-dev-container-configuration"></a>カスタム開発コンテナー構成の作成

事前定義済みの構成がどれもニーズを満たさない場合は、独自の `devcontainer.json` ファイルを記述してカスタム構成を作成できます。

* リポジトリから codespace を作成するすべてのユーザーが使用する単一の `devcontainer.json` ファイルを追加する場合は、リポジトリのルートにある `.devcontainer` ディレクトリ内にファイルを作成します。 
* ユーザーが構成を選択できるようにする場合は、複数のカスタム `devcontainer.json` ファイルを作成して、それぞれを `.devcontainer` ディレクトリの個別のサブディレクトリ内に配置できます。

   {% note %}

   **注**: `devcontainer.json` ファイルは、`.devcontainer` より 2 レベル以上下位のディレクトリに配置することはできません。 たとえば、`.devcontainer/teamA/devcontainer.json` にあるファイルは機能しますが、`.devcontainer/teamA/testing/devcontainer.json` の場合は機能しません。 

   {% endnote %}

   リポジトリで複数の `devcontainer.json` ファイルが見つかった場合は、それらが codespace の作成オプション ページに一覧表示されます。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。

   ![構成ファイルの選択肢](/assets/images/help/codespaces/configuration-file-choice.png)

### <a name="default-configuration-selection-during-codespace-creation"></a>codespace の作成時における既定の構成の選択

`.devcontainer/devcontainer.json` または `.devcontainer.json` が存在する場合は、codespace を作成するときに使用可能な構成ファイルの一覧でそれが既定の選択になります。 どちらのファイルも存在しない場合は、既定の開発コンテナー構成が既定で選択されます。 

![選択された既定の構成](/assets/images/help/codespaces/configuration-file-choice-default.png)

### <a name="editing-the-devcontainerjson-file"></a>devcontainer.json ファイルの編集

`devcontainer.json` ファイルでサポートされている構成キーを追加および編集して、codespace の環境の要素を指定できます (たとえば、どの {% data variables.product.prodname_vscode_shortname %} 拡張機能をインストールするか)。 {% data reusables.codespaces.more-info-devcontainer %}

`devcontainer.json` ファイルは JSONC 形式を使用して記述されます。 これにより、構成ファイル内にコメントを含めることができます。 詳しくは、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[{% data variables.product.prodname_vscode_shortname %} での JSON の編集](https://code.visualstudio.com/docs/languages/json#_json-with-comments)」をご覧ください。

{% note %}

**注**: リンターを使用して `devcontainer.json` ファイルを検証する場合は、JSON ではなく JSONC に設定されていることを確認してください。正しく設定されていないと、コメントがエラーとして報告されます。

{% endnote %}

### <a name="editor-settings-for--data-variablesproductprodname_vscode_shortname-"></a>{% data variables.product.prodname_vscode_shortname %} のエディター設定

{% data reusables.codespaces.vscode-settings-order %}

{% data variables.product.prodname_vscode_shortname %} の既定のエディター設定は、2 か所で定義できます。

* リポジトリの `.vscode/settings.json` ファイルで定義されたエディター設定は、codespace で _Workspace_ スコープの設定として適用されます。
* `devcontainer.json` ファイルの `settings` キーで定義されたエディター設定は、codespace で _Remote [Codespaces]_ スコープの設定として適用されます。

## <a name="applying-configuration-changes-to-a-codespace"></a>codespace への構成変更の適用

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} 構成のエラーを修正します。

   ![回復モードに関するエラー メッセージ](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - 作成ログを確認してエラーを診断するには、 **[View creation log]\(作成ログの表示\)** をクリックします。
   - ログで識別されたエラーを修正するには、`devcontainer.json` ファイルを更新します。
   - 変更を適用するには、コンテナーをリビルドします。 

## <a name="further-reading"></a>参考資料

- 「[codespaces の事前ビルド](/codespaces/prebuilding-your-codespaces)」
