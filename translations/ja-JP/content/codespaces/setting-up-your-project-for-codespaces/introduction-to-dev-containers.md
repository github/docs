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
ms.openlocfilehash: 646f8068e68040f1d12f8155c3ba9e2bdb84c2ca
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185092'
---
## 開発コンテナについて

開発コンテナーは、完全な機能を備えた開発環境を提供するように特別に構成された Docker コンテナーです。 codespace で作業を行うときは常に、仮想マシンで開発コンテナーを使用します。

リポジトリの開発コンテナーを構成できるので、そのリポジトリ用に作成された codespace によって、特定のプロジェクトの作業を行うために必要なすべてのツールとランタイムを備えた、カスタマイズされた開発環境が提供されます。 リポジトリで構成を定義しない場合、{% data variables.product.prodname_github_codespaces %} で既定の構成が使用されます。この構成には、チームがプロジェクトで開発を行うために必要な可能性がある一般的なツールの多くが含まれています。 詳しくは、「[既定の開発コンテナー構成の使用](#using-the-default-dev-container-configuration)」をご覧ください。

開発コンテナーの構成ファイルは、リポジトリの `.devcontainer` ディレクトリに含まれています。 {% data variables.product.prodname_vscode %} を使用して、構成ファイルを追加できます。 さまざまなプロジェクト タイプ向けにあらかじめ定義されている構成の中から選択できます。 これらを追加の構成なしで使うこともできますし、構成を編集して生成される開発環境を改善することもできます。 詳しくは、「[事前定義済みの開発コンテナー構成の使用](#using-a-predefined-dev-container-configuration)」をご覧ください。

または、独自のカスタム構成ファイルを追加することもできます。 詳しくは、「[カスタム開発コンテナー構成の作成](#creating-a-custom-dev-container-configuration)」をご覧ください。

リポジトリ用に単一の開発コンテナー構成を定義したり、異なるブランチ用に異なる構成を定義したり、複数の構成を定義したりできます。 複数の構成を利用できる場合、ユーザーは codespace を作成するときに好みの構成を選択できます。 これは、異なるプログラミング言語のソース コードを含む大規模なリポジトリの場合や、さまざまなプロジェクトがある場合に特に役立ちます。 構成の選択肢を作成することで、異なるチームが、実行する作業用に適切に設定された codespace で作業できるようになります。

テンプレートから codespace を作成する場合は、ワークスペース内の 1 つ以上の開発コンテナー構成ファイルを使用して開始できます。 環境をさらに構成するには、これらのファイルの設定を追加または削除し、コンテナーをリビルドして、作業中の codespace に変更を適用します。 {% data variables.product.product_name %} 上のリポジトリに codespace を発行すると、そのリポジトリから作成されたすべての codespace で、定義した構成が共有されます。 詳しい情報については、「[codespace に構成変更を適用する](#applying-configuration-changes-to-a-codespace)」と「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository)」をご覧ください。

### devcontainer.json

開発コンテナー構成のプライマリ ファイルは `devcontainer.json` ファイルです。 このファイルを使用して、リポジトリ用に作成される codespace の環境を決定できます。 このファイルの内容によって、フレームワーク、ツール、拡張機能、ポート フォワーディングを含めることができる開発コンテナーが定義されます。 通常、`devcontainer.json` ファイルには Dockerfile (通常は `devcontainer.json` ファイルと一緒に配置します) への参照が含まれています。

`devcontainer.json` ファイルを含まないリポジトリから codespace を作成する場合、または {% data variables.product.company_short %} の空のテンプレートから開始する場合は、既定の開発コンテナー構成が使用されます。 詳しくは、「[既定の開発コンテナー構成の使用](#using-the-default-dev-container-configuration)」をご覧ください。

通常、`devcontainer.json` ファイルはリポジトリの `.devcontainer` ディレクトリに配置します。 または、リポジトリのルートに直接配置することもできます。その場合は、ファイル名の先頭をピリオドにする必要があります (`.devcontainer.json`)。 

リポジトリで開発コンテナー構成を選択できるようにする場合は、`.devcontainer/devcontainer.json` (または `.devcontainer.json`) ファイルに代わるファイルを `.devcontainer/SUBDIRECTORY/devcontainer.json` というパスの独自のサブディレクトリに配置する必要があります。 たとえば、次の 2 つの構成から選ぶようにすることができます。 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

リポジトリに複数の `devcontainer.json` ファイルがある場合、各 codespace はいずれかの構成のみから作成されます。 `devcontainer.json` ファイル間で設定をインポートまたは継承することはできません。 カスタム サブディレクトリの `devcontainer.json` ファイルに依存ファイル (Dockerfile など) や `devcontainer.json` ファイル内のコマンドによって実行されるスクリプトがある場合は、これらのファイルを同じサブディレクトリに一緒に配置することをお勧めします。

codespace の作成時にお好みの開発コンテナー構成を選ぶ方法については、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)」をご覧ください。

{% data reusables.codespaces.more-info-devcontainer %}

#### devcontainer.json の使用方法

`devcontainer.json` ファイルは、"パーソナル化" ではなく "カスタマイズ" を提供するものだと考えると有益です。 コードベースで作業するすべてのユーザーが必要とするもののみを開発環境の標準要素として含め、個人の好みのものは含めないようにする必要があります。 リンターのようなものは標準化して、すべてのユーザーにインストールするよう求めることが適切なので、`devcontainer.json` ファイルに含めることができます。 ユーザー インターフェイスのデコレーターやテーマなどは、`devcontainer.json` ファイルに含めるべきでない個人的な選択肢です。

ドットファイルと Settings Sync を使用すると、codespace をパーソナル化できます。詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)」をご覧ください。

### Dockerfile

開発コンテナー構成の一部として Dockerfile を追加できます。 

Dockerfile は Docker コンテナー イメージを作成するために必要な命令が含まれているテキスト ファイルです。 このイメージは、この Dockerfile を参照する `devcontainer.json` ファイルを使用して codespace を作成するたびに、開発コンテナーの生成に使用されます。 Dockerfile 内の命令は通常、作成される新しいイメージの基になる親イメージを参照することから始まります。 その後に、ソフトウェア パッケージのインストールなど、イメージの作成プロセス中に実行されるコマンドが続きます。

開発コンテナーの Dockerfile は通常、参照元の `devcontainer.json` と共に `.devcontainer` フォルダーに配置します。 

{% note %}

**注**: Dockerfile を使用する代わりに、`image` プロパティを `devcontainer.json` ファイルで使用して、使用する既存のイメージを直接参照できます。 ここで指定するイメージは、設定されている Organization のイメージ ポリシーで許可されている必要があります。 詳しい情報については、「[codespace の基本イメージを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)」をご覧ください。 Dockerfile もイメージも見つからない場合は、既定のコンテナー イメージが使用されます。 詳しくは、「[既定の開発コンテナー構成の使用](#using-the-default-dev-container-configuration)」をご覧ください。

{% endnote %}

#### シンプルな Dockerfile の例

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

#### Dockerfile の使用

開発コンテナー構成の一部として Dockerfile を使用するには、`devcontainer.json` ファイル内で `dockerfile` プロパティを使用して参照します。

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

開発コンテナー内で既存のコンテナー オーケストレーションを使用する場合は、さまざまなオプションを使用できます。 詳しい情報については、開発コンテナーの Web サイトで[仕様](https://containers.dev/implementors/spec/#orchestration-options)の「オーケストレーション オプション」セクションをご覧ください。

## 既定の開発コンテナー構成の使用

リポジトリで構成を定義しない場合は、{% data variables.product.prodname_dotcom %} が既定の Linux イメージを使用して codespace を作成します。 この Linux イメージには、Python、Node、PHP、Java、Go、C++、Ruby、.NET Core/C# などの一般的な言語のランタイム バージョンが多数含まれています。 これらの言語の最新または LTS リリースが使用されます。 JupyterLab や Conda など、データ サイエンスと機械学習をサポートするツールもあります。 イメージには、Git、GitHub CLI、yarn、openssh、vim などの他の開発者ツールやユーティリティも含まれています。 含まれているすべての言語、ランタイム、ツールを確認するには、codespace ターミナル内で `devcontainer-info content-url` コマンドを使用し、コマンドで出力された URL にアクセスしてください。

既定の Linux イメージに何が含まれているかについては、[`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) リポジトリをご覧ください。 

{% data variables.product.prodname_github_codespaces %} が提供する言語とツールを使用する小さなプロジェクトで作業している場合は、既定の構成が適しています。

## 事前定義済みの開発コンテナー構成の使用

{% data variables.product.prodname_vscode %} または Web ブラウザーで {% data variables.product.prodname_codespaces %} を使用する場合は、定義済みの構成の一覧から選ぶことで、リポジトリの開発コンテナー構成を作成できます。 これらの構成は、特定のプロジェクト タイプの共通セットアップを提供するものです。また、適切なコンテナー オプション、{% data variables.product.prodname_vscode %} 設定、インストールする必要がある {% data variables.product.prodname_vscode %} 拡張機能が構成で既に用意されているので、短時間で使い始めることができます。

追加の拡張性が必要な場合は、事前定義済みの設定を使用することをお勧めします。 事前定義済みの構成から始めて、プロジェクトに合わせて修正することもできます。 定義済みの開発コンテナーの定義について詳しくは、[`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src) リポジトリをご覧ください。

事前定義済みの開発コンテナー構成は、codespace での作業中、またはローカルでのリポジトリの作業中に追加できます。 ローカルで作業していて、codespace に接続されていないときに {% data variables.product.prodname_vscode_shortname %} でこれを行うには、"Dev Containers" 拡張機能がインストールされ、有効になっている必要があります。 この拡張機能について詳しくは、「[{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)」をご覧ください。 次の手順では、codespace を使用している場合のプロセスについて説明します。 codespace に接続していない場合の {% data variables.product.prodname_vscode_shortname %} の手順は非常によく似ています。

{% data reusables.codespaces.command-palette-container %}
1. 使用する定義をクリックします。

   ![定義済みのコンテナー定義の一覧のスクリーンショット](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. プロンプトに従って定義をカスタマイズします。 定義をカスタマイズするためのオプションの詳細については、「[`devcontainer.json` ファイルへの追加機能の追加](#adding-additional-features-to-your-devcontainerjson-file)」を参照してください。
1. **[OK]** をクリックします。

   ![[OK] ボタンのスクリーンショット](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. codespace で作業している場合は、ウィンドウの右下にあるメッセージで **[今すぐリビルド]** をクリックして変更を適用します。 コンテナーのリビルドの詳細については、「[構成への変更の適用](#applying-configuration-changes-to-a-codespace)」を参照してください。

   ![[今すぐリビルド] を確認するスクリーンショット](/assets/images/help/codespaces/rebuild-prompt.png)

### `devcontainer.json` ファイルへの追加機能の追加

{% data reusables.codespaces.about-features %}詳しい情報については、「[`devcontainer.json` ファイルへの機能の追加](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode)」をご覧ください。

## カスタム開発コンテナー構成の作成

事前定義済みの構成がどれもニーズを満たさない場合は、独自の `devcontainer.json` ファイルを記述してカスタム構成を作成できます。

* リポジトリから codespace を作成するすべてのユーザーが使用する単一の `devcontainer.json` ファイルを追加する場合は、リポジトリのルートにある `.devcontainer` ディレクトリ内にファイルを作成します。 
* ユーザーが構成を選択できるようにする場合は、複数のカスタム `devcontainer.json` ファイルを作成して、それぞれを `.devcontainer` ディレクトリの個別のサブディレクトリ内に配置できます。

   {% note %}

   **注**:
   - `devcontainer.json` ファイルは、`.devcontainer` より 2 レベル以上下位のディレクトリに配置することはできません。 たとえば、`.devcontainer/teamA/devcontainer.json` にあるファイルは機能しますが、`.devcontainer/teamA/testing/devcontainer.json` の場合は機能しません。
   - {% data reusables.codespaces.configuration-choice-templates %}詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} のテンプレート リポジトリを設定する](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)」をご覧ください。

   {% endnote %}

   リポジトリで複数の `devcontainer.json` ファイルが見つかった場合は、それらが codespace の作成オプション ページに一覧表示されます。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)」を参照してください。

   ![構成ファイルの選択肢のスクリーンショット](/assets/images/help/codespaces/configuration-file-choice.png)

### `devcontainer.json` ファイルの追加

リポジトリにまだ `devcontainer.json` ファイルがない場合は、{% data variables.product.prodname_dotcom_the_website %} からそれをすばやく追加できます。
1. 自分のリポジトリに移動し、 **[{% octicon "code" aria-label="The code icon" %} コード]** ドロップダウンをクリックします。
1. **[Codespaces]** タブで省略記号 ( **...** ) をクリックし、次に **[開発コンテナーの構成]** を選択します。

   ![[コード] ドロップダウンのスクリーンショット。[開発コンテナーの構成] が強調表示されています](/assets/images/help/codespaces/configure-dev-container.png)

新しい `.devcontainer/devcontainer.json` ファイルがエディターで開きます。 ファイルには、新しいツール、ライブラリ、またはランタイムを追加できる `features` オブジェクトなど、いくつかの初期プロパティが含まれます。 詳しい情報については、「[ファイルへの `devcontainer.json` 機能の追加](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui)」をご覧ください。

リポジトリに既に 1 つ以上の `devcontainer.json` ファイルが含まれている場合は、 **[開発コンテナーの構成]** をクリックすると、containers.dev の`devcontainer.json`仕様 [に従って、優先順位が最も高い既存の](https://containers.dev/implementors/spec/#devcontainerjson) ファイルが開きます。 

### codespace の作成時における既定の構成の選択

`.devcontainer/devcontainer.json` または `.devcontainer.json` が存在する場合は、codespace を作成するときに使用可能な構成ファイルの一覧でそれが既定の選択になります。 どちらのファイルも存在しない場合は、既定の開発コンテナー構成が既定で選択されます。 

![既定の構成の選択肢が選択されたスクリーンショット](/assets/images/help/codespaces/configuration-file-choice-default.png)

### devcontainer.json ファイルの編集

`devcontainer.json` ファイルでサポートされている構成キーを追加および編集して、codespace の環境の要素を指定できます (たとえば、どの {% data variables.product.prodname_vscode_shortname %} 拡張機能をインストールするか)。 {% data reusables.codespaces.more-info-devcontainer %}

`devcontainer.json` ファイルは JSONC (コメント付きの JSON) 形式を使用して記述されます。 これにより、構成ファイル内にコメントを含めることができます。 詳しくは、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[{% data variables.product.prodname_vscode_shortname %} での JSON の編集](https://code.visualstudio.com/docs/languages/json#_json-with-comments)」をご覧ください。

{% note %}

**注**: リンターを使用して `devcontainer.json` ファイルを検証する場合は、JSON ではなく JSONC に設定されていることを確認してください。正しく設定されていないと、コメントがエラーとして報告されます。

{% endnote %}

### {% data variables.product.prodname_vscode_shortname %} のインターフェイス設定

{% data variables.product.prodname_vscode_shortname %} のインターフェイス設定は、ワークスペース、リモート [Codespaces]、ユーザーの 3 つのスコープで構成できます。 これらのスコープは、{% data variables.product.prodname_vscode_shortname %} 設定エディターで表示できます。

![設定エディターでのスコープの選択を示すスクリーンショット](/assets/images/help/codespaces/scopes-for-vscode.png)

設定が複数のスコープで定義されている場合は、ワークスペース 設定が優先され、次にリモート [コードスペース] が優先され、次にユーザーが優先されます。

{% data variables.product.prodname_vscode_shortname %} の既定のインターフェイス設定は、2 か所で定義できます。

* リポジトリの `.vscode/settings.json` ファイルで定義されたインターフェイス設定は、codespace でワークスペースをスコープとする設定として適用されます。
* `devcontainer.json` ファイルの `settings` キーで定義されたインターフェイス設定は、codespace でリモート [Codespaces] をスコープとする設定として適用されます。

## codespace への構成変更の適用

構成に対する変更は、次回 codespace を作成するときに適用されます。 ただし、コンテナーをリビルドすることで、既存の codespace に変更を適用できます。 これは、{% data variables.product.prodname_vscode_shortname %} の Web クライアントまたはデスクトップ アプリケーションの codespace 内で行うか、{% data variables.product.prodname_cli %} を使用することができます。

### {% data variables.product.prodname_vscode_shortname %} Web クライアントまたはデスクトップ アプリケーションで開発コンテナーをリビルドする

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![回復モードに関するエラー メッセージのスクリーンショット](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - 作成ログを確認してエラーを診断するには、 **[View creation log]\(作成ログの表示\)** をクリックします。
   - ログで識別されたエラーを修正するには、`devcontainer.json` ファイルを更新します。
   - 変更を適用するには、コンテナーをリビルドします。 

### {% data variables.product.prodname_cli %} を使用して開発コンテナーをリビルドする

VS Code の外部 (たとえば、{% data variables.product.prodname_dotcom_the_website %} や JetBrains IDE など) で開発コンテナーの構成を変更した場合は、{% data variables.product.prodname_cli %} を使って既存の codespace の開発コンテナーをリビルドできます。

1. ターミナルで、次のコマンドを入力します。

   ```
   gh cs rebuild
   ```

   codespace が一覧表示されます。

1. キーボードの方向キーを使って必要な codespace を強調表示してから、<kbd>Enter</kbd> キーを押します。


## 参考資料

- 「[codespaces の事前ビルド](/codespaces/prebuilding-your-codespaces)」
