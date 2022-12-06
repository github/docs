---
title: '{% data variables.product.prodname_github_codespaces %} の詳細'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: '{% data variables.product.prodname_github_codespaces %} のしくみを理解します。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 01e4f3990cc47f61678811f7c4a77b86626fd8a5
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188265'
---
{% data variables.product.prodname_github_codespaces %} は、クラウドベースのインスタント開発環境であり、コンテナーを使用して開発用の共通言語、ツール、ユーティリティを提供します。 また、{% data variables.product.prodname_github_codespaces %} は構成可能で、プロジェクトに合わせてカスタマイズされた開発環境を作成できます。 プロジェクト用のカスタム開発環境を構成することにより、プロジェクトのすべてのユーザーに対して繰り返し可能な codespace 構成を作成できます。

## codespace を作成する

codespace を作成するためのエントリ ポイントは数多くあります。

- 新しいプロジェクトを開始する {% data variables.product.company_short %} テンプレートまたは {% data variables.product.prodname_dotcom_the_website %} 上の任意のテンプレート リポジトリから
- 新機能の作業を行うリポジトリ内のブランチから
- 進行中の作業を探索するオープンの pull request から
- 特定の時点のバグを調査するリポジトリ内のコミットから

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
何らかのテストを行う必要がある場合、または同じ codespace に戻って長期間の機能作業を行うことができる場合、codespace をエフェメラルにすることができます。 

詳細については、「[リポジトリの codespace の作成](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」、「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)」、「[既存の codespace を開く](/codespaces/developing-in-codespaces/opening-an-existing-codespace)」を参照してください。

{% note %}

**注**: リポジトリごと、さらにはブランチごとに 1 つ以上の codespace を作成できます。 ただし、作成できる codespace の数と、同時に実行できる codespace の数には制限があります。 codespace の最大数に達してからさらに作成しようとすると、新しい codespace を作成する前に既存のものを削除する必要があることを示すメッセージが表示されます。

{% endnote %}

### codespace の作成プロセス

codespace を作成するときは、codespace を使用できるようになるまでにバックグラウンドでさまざまな手順が発生します。

### 手順 1: VM とストレージを codespace に割り当てる

codespace を作成すると、リポジトリの (または、テンプレートから codespace を作成する場合はテンプレート リポジトリの) [シャロー クローン](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/)が作成されます。 リポジトリは、専用と個人用の両方である Linux 仮想マシンにクローンされます。 専用の VM を使用すると、そのマシンから使用できるコンピューティング リソースのセット全体を確保できます。 必要に応じて、これにより、コンテナーへの完全なルート アクセス権を取得することもできます。

### 手順 2: コンテナーを作成する

{% data variables.product.prodname_github_codespaces %} では、開発環境としてコンテナーが使用されます。 このコンテナーは、`devcontainer.json` ファイルおよび必要に応じて Dockerfile で定義できる構成に基づいて作成されます。 {% data variables.product.company_short %} の空のテンプレートから、または `devcontainer.json` ファイルのないリポジトリから codespace を作成する場合、{% data variables.product.prodname_github_codespaces %} で既定のイメージが使用されます。これには、使用可能な言語とランタイムが多数あります。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。 既定のイメージの内容について詳しくは、[`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) リポジトリを参照してください。

{% note %}

**注:** codespace で Git フックを使用し、[git テンプレート ディレクトリ](https://git-scm.com/docs/git-init#_template_directory)内の何らかのものを codespace に適用する場合、コンテナーの作成後に手順 4 でフックを設定する必要があります。

コンテナーの作成前にリポジトリがホスト VM に複製されるため、手順 4 の `postCreateCommand`を使用して `devcontainer.json` 構成ファイルでフックを設定しない限り、[git テンプレート ディレクトリ](https://git-scm.com/docs/git-init#_template_directory)内のものは codespace に適用されません。 詳細については、「[手順 4: 作成後のセットアップ](#step-4-post-creation-setup)」を参照してください。

{% endnote %}

### 手順 3: codespace に接続する

コンテナーが作成され、その他の初期化が実行されると、codespace に接続されます。 次の方法で接続できます。

* Web ブラウザー
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### 手順 4: 作成後のセットアップ

codespace に接続された後、`devcontainer.json` ファイルで指定した構成に基づいて、自動セットアップが引き続きビルドされる場合があります。 `postCreateCommand`が表示され、`postAttachCommand` が実行される場合があります。

codespace で Git フックを使用する場合は、`postCreateCommand` などの [`devcontainer.json`ライフサイクル スクリプト](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)を使用してフックを設定します。 詳しい情報については、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[`devcontainer.json` リファレンス](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)」を参照してください。

{% data variables.product.prodname_github_codespaces %} のパブリックのドットファイル リポジトリがある場合、それを新しい codespace で使用できるように有効にすることができます。 有効にすると、ドットファイルがコンテナーに複製され、インストール スクリプトが呼び出されます。 詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)」をご覧ください。 

最後に、リポジトリから codespace を作成した場合、リポジトリの履歴全体が完全なクローンでコピーされます。 テンプレートから codespace を作成した場合、テンプレート リポジトリの完全な履歴は保持されません。代わりに、空白のテンプレートを使用するのでない限り、テンプレート リポジトリの内容に対する最初のコミットから始めます。

作成後のセットアップ中も、統合ターミナルを使用してファイルを編集できますが、作業と実行中のコマンドの間の競合状態を回避するように注意してください。
## {% data variables.product.prodname_codespaces %} のライフサイクル

### ファイルを codespace に保存する

使用しているエディターに応じて、通常の方法でファイルに対する変更を保存します。

{% data variables.product.prodname_vscode %} の codespaces で作業する場合は、[自動保存](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)を有効にして、変更が常に保存されるようにすることができます。 

### codespace の終了または停止

codespace は、使用している間は実行され続けますが、一定時間非アクティブになるとタイムアウトします。 エディターとターミナル出力からのファイルの変更はアクティビティとしてカウントされるため、ターミナル出力が継続されていれば codespace はタイムアウトしません。 既定の非アクティブ タイムアウト期間は 30 分です。 作成する codespace に対して個人用タイムアウト設定を定義できますが、これは組織のタイムアウト ポリシーによって却下される可能性があります。 詳しくは、「[codespace のタイムアウト期間を設定する](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)」をご覧ください。 

codespace がタイムアウトすると実行は停止しますが、ブラウザー タブから (ブラウザーで codespace を使用している場合)、{% data variables.product.prodname_vscode_shortname %} 内から、または [https://github.com/codespaces](https://github.com/codespaces) にある codespace の一覧から再起動できます。

次の方法で codespace を停止できます。

* ブラウザーで: [https://github.com/codespaces](https://github.com/codespaces) にある codespace の一覧で、停止する codespace の右側にある省略記号 ( **...** ) をクリックし、 **[codespace の停止]** をクリックします。
* {% data variables.product.prodname_vscode_shortname %} で: [the {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace)を開き (たとえば、<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd> キー (Windows/Linux) または <kbd>Shift</kbd> + <kbd>Command</kbd> + <kbd>P</kbd> キー (Mac) を押す)、「`Codespaces: stop`」と入力して <kbd>Enter</kbd> キーを押します。
* JetBrains クライアントで、{% data variables.product.prodname_github_codespaces %} ツール ウィンドウの上部にある停止ボタンをクリックします。 詳細については、「[codespace の停止と開始](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)」の「JetBrains IDE」タブを参照してください。
* ターミナル ウィンドウで: {% data variables.product.prodname_cli %} コマンド `gh codespace stop` を使用します。 詳細については、「[{% data variables.product.prodname_github_codespaces %} と {% data variables.product.prodname_cli %} の使用](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces)」を参照してください。

stop コマンドを実行せずに codespace を終了した (たとえばブラウザー タブを閉じる) 場合、または操作なしで codespace を実行したままにした場合、codespace とその実行中のプロセスは、非アクティブ タイムアウト期間中は続行されます。 

codespace を終了または停止すると、codespace に再度接続するまで、コミットされていない変更はすべて保持されます。

## アプリケーションの実行

ポート転送を使用すると、Codespaces 内で実行されている TCP ポートにアクセスできます。 たとえば、codespace 内のポート 4000 で Web アプリケーションを実行している場合、そのポートを自動的に転送して、ブラウザーからアプリケーションをアクセスできるようにします。

ポートの転送は、リモート マシンからアクセス可能にするポートを決定します。 ポートを転送しない場合でも、そのポートには、codespace 自体内で実行されている他のプロセスにアクセスできます。

![codespace 内でのポートの転送のしくみを示す図](/assets/images/help/codespaces/port-forwarding.png)

{% data variables.product.prodname_github_codespaces %} 内で実行されているアプリケーションでポートをコンソールに出力すると、{% data variables.product.prodname_github_codespaces %} で localhost の URL パターンが検出され、ポートが自動的に転送されます。 ターミナルで URL をクリックするか、{% data variables.product.prodname_vscode_shortname %} の右下隅にポップアップ表示される "トースト" 通知メッセージ内のリンクをクリックして、ブラウザーでポートを開くことができます。 {% data variables.product.prodname_github_codespaces %} の既定では、HTTP を使用してポートが転送されます。 ポートの転送の詳細については、「[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」 (codespace でのポートの転送) を参照してください。

ポートは自動的に転送できますが、インターネットからパブリックにアクセスすることはできません。 既定では、すべてのポートはプライベートですが、手動で、組織またはパブリックでポートを使用できるようにして、URL を使用してアクセスを共有できます。 詳細については、「[Sharing a port](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)」 (ポートの共有) を参照してください。

初めて codespace に入ったときにアプリケーションを実行すると、高速の内部開発ループを実現できます。 編集すると、変更は自動的に保存され、転送されたポートで使用できるようになります。 変更を表示するには、ブラウザーで実行中のアプリケーションのタブに戻って更新します。

## 変更のコミットとプッシュ

Git は既定で codespace にインストールされるため、既存の Git ワークフローに依存できます。 Git を codespace で操作するには、ターミナルを使うか、{% data variables.product.prodname_vscode_shortname %} または JetBrains のソース管理機能を使います。

既存のリポジトリで作業している場合は、リポジトリ内のブランチ、コミット、または pull request から codespace を作成することも、アクティブな codespace 内から新しいまたは既存のブランチに切り替えることもできます。 {% data variables.product.prodname_github_codespaces %} はエフェメラルになるように設計されているため、分離された環境として使用して、実験、チームメイトの pull request の確認、またはマージ競合の修正を行うことができます。

テンプレートから作成された codespace で作業している場合、Git は既定でインストールされますが、作業を永続化し、他のユーザーと共有するには、codespace をリモート リポジトリに発行する必要があります。 {% data variables.product.company_short %} の空のテンプレートから開始する場合は、codespace 内でソース管理の使用を開始するには、まずワークスペースを Git リポジトリとして初期化する (たとえば「`git init`」を入力して) 必要があります。

詳細については、「[Codespace でソース コントロールを使用する](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)」を参照してください

{% note %}

**注:** codespace からのコミットは、 https://github.com/settings/profile で構成された名前とパブリック メールに起因します。 スコープがリポジトリにされ、`GITHUB_TOKEN` として環境に含まれたトークンと、GitHub 資格情報が認証に使用されます。

{% endnote %}

## 拡張機能またはプラグインを使用して codespace をカスタマイズする

codespace 内にプラグインと拡張機能を追加して、JetBrains と {% data variables.product.prodname_vscode_shortname %} のエクスペリエンスをそれぞれカスタマイズできます。

### {% data variables.product.prodname_vscode_shortname %} 拡張機能

{% data variables.product.prodname_vscode_shortname %} デスクトップ アプリケーションまたは Web クライアントの codespaces で作業している場合は、{% data variables.product.prodname_vscode_marketplace %} から必要な拡張機能を追加できます。 拡張機能が {% data variables.product.prodname_github_codespaces %} でどのように実行されるかについては、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[リモート開発と {% data variables.product.prodname_github_codespaces %} のサポート](https://code.visualstudio.com/api/advanced-topics/remote-extensions)」を参照してください。 

既に {% data variables.product.prodname_vscode_shortname %} を使っている場合は、[[設定の同期]](https://code.visualstudio.com/docs/editor/settings-sync) を使って、ローカル インスタンスと作成した codespace との間で拡張機能、設定、テーマ、キーボード ショートカットを自動的に同期できます。

### JetBrains プラグイン

JetBrains IDE で codespace を操作する場合は、JetBrains Marketplace からプラグインを追加できます。

1. **[JetBrains クライアント]** をクリックし、 **[基本設定]** をクリックします。
1. [基本設定] ダイアログ ボックスで、 **[ホスト上のプラグイン]** をクリックして、リモートで実行されている完全な JetBrains IDE にプラグインをインストールするか、 **[プラグイン]** をクリックしてローカル クライアントにプラグインをインストールして、たとえばユーザー インターフェイスのテーマを変更します。 
1. **[Marketplace]** タブをクリックします。

   ![[プラグイン ホスト上] の [Marketplace] タブのスクリーンショット](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. 必要なプラグインの横にある **[インストール]** をクリックします。

## 参考資料

- 「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化について](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)」
- 「[Organization で {% data variables.product.prodname_github_codespaces %} のコストを管理する](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)」
- 「[開発コンテナー構成をリポジトリに追加する](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)」
- 「[codespace のライフサイクル](/codespaces/getting-started/the-codespace-lifecycle)」
