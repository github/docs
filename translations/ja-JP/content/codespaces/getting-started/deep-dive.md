---
title: '{% data variables.product.prodname_github_codespaces %} の詳細'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: '{% data variables.product.prodname_github_codespaces %} のしくみを理解します。'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 0c6f2aad203bfc11bcf5a9fbeaf3e7a187c4f180
ms.sourcegitcommit: 969a4bd906dd5a3366d404cf2fe125f671062397
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/15/2022
ms.locfileid: '147145074'
---
{% data variables.product.prodname_github_codespaces %} は、クラウドベースのインスタント開発環境であり、コンテナーを使用して開発用の共通言語、ツール、ユーティリティを提供します。 また、{% data variables.product.prodname_codespaces %} は構成可能で、プロジェクトに合わせてカスタマイズされた開発環境を作成できます。 プロジェクト用のカスタム開発環境を構成することにより、プロジェクトのすべてのユーザーに対して繰り返し可能な codespace 構成を作成できます。

## <a name="creating-your-codespace"></a>codespace を作成する

codespace を作成するためのエントリ ポイントは数多くあります。

- 新しい機能作業のリポジトリから。
- 進行中の作業を探索するオープンの pull request から。
- 特定の時点のバグを調査するリポジトリ内のコミットから。
- {% data variables.product.prodname_vscode %} から。
  
何らかのテストを行う必要がある場合、または同じ codespace に戻って長期間の機能作業を行うことができる場合、codespace をエフェメラルにすることができます。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace)」を参照してください。

新しい codespace を作成するオプションを選び、codespace 用のさまざまな構成オプションを選ぶと、codespace を使えるようになるまでにバックグラウンドでいくつかの手順が発生します。

![[Open with Codespaces] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

### <a name="step-1-vm-and-storage-are-assigned-to-your-codespace"></a>手順 1: VM とストレージを codespace に割り当てる

codespace を作成すると、専用と個人用の両方の Linux 仮想マシン上に、リポジトリの[シャロー クローン](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/)が作成されます。 専用の VM を使用すると、そのマシンから使用できるコンピューティング リソースのセット全体を確保できます。 必要に応じて、これにより、コンテナーへの完全なルート アクセス権を取得することもできます。

### <a name="step-2-container-is-created"></a>手順 2: コンテナーを作成する

{% data variables.product.prodname_codespaces %} では、開発環境としてコンテナーが使用されます。 このコンテナーは、リポジトリ内の `devcontainer.json` ファイルまたは Dockerfile で定義できる構成に基づいて作成されます。 [コンテナーを構成](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project)しない場合、{% data variables.product.prodname_codespaces %} では、[既定のイメージ](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#using-the-default-configuration)が使用されます。このイメージには、使用可能な多数の言語とランタイムが含まれています。 既定のイメージの内容については、[`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) リポジトリを参照してください。

{% note %}

**注:** codespace で Git フックを使用し、[git テンプレート ディレクトリ](https://git-scm.com/docs/git-init#_template_directory)内の何らかのものを codespace に適用する場合、コンテナーの作成後に手順 4 でフックを設定する必要があります。

コンテナーの作成前にリポジトリがホスト VM に複製されるため、手順 4 の `postCreateCommand`を使用して `devcontainer.json` 構成ファイルでフックを設定しない限り、[git テンプレート ディレクトリ](https://git-scm.com/docs/git-init#_template_directory)内のものは codespace に適用されません。 詳細については、「[手順 4: 作成後のセットアップ](#step-4-post-creation-setup)」を参照してください。

{% endnote %}

### <a name="step-3-connecting-to-the-codespace"></a>手順 3: codespace に接続する

コンテナーが作成され、その他の初期化が実行されると、codespace に接続されます。 必要に応じて、Web または [{% data variables.product.prodname_vscode_shortname %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code) または両方を介して接続できます。

### <a name="step-4-post-creation-setup"></a>手順 4: 作成後のセットアップ

codespace に接続された後、`devcontainer.json` ファイルで指定した構成に基づいて、自動セットアップが引き続きビルドされる場合があります。 `postCreateCommand`が表示され、`postAttachCommand` が実行される場合があります。

codespace で Git フックを使用する場合は、`postCreateCommand` などの[`devcontainer.json`ライフサイクル スクリプト](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)を使用してフックを設定します。 詳しい情報については、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[`devcontainer.json` リファレンス](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)」を参照してください。

{% data variables.product.prodname_github_codespaces %} のパブリックのドットファイル リポジトリがある場合、それを新しい codespace で使用できるように有効にすることができます。 有効にすると、ドットファイルがコンテナーに複製され、インストール スクリプトが呼び出されます。 詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)」をご覧ください。 

最後に、リポジトリの履歴全体が完全なクローンでコピーされます。

作成後のセットアップ中も、統合ターミナルを使用してファイルを編集できますが、作業と実行中のコマンドの間の競合状態を回避するように注意してください。
## <a name="-data-variablesproductprodname_codespaces--lifecycle"></a>{% data variables.product.prodname_codespaces %} のライフサイクル

### <a name="saving-files-in-your-codespace"></a>ファイルを codespace に保存する

codespace で開発を行う場合、ファイルに加えた変更は数秒ごとに保存されます。 codespace は、最後のアクティビティ後 30 分間実行され続けます。 その後、実行は停止しますが、既存のブラウザー タブまたは既存の codespace の一覧のいずれかから再起動できます。 エディターとターミナル出力からのファイルの変更はアクティビティとしてカウントされるため、ターミナル出力が継続されている場合、codespace は停止しません。

{% note %}

**注:** [[自動保存]](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) を有効にしていない限り、{% data variables.product.prodname_vscode_shortname %} の codespace の変更は自動的に保存されません。
{% endnote %}

### <a name="closing-or-stopping-your-codespace"></a>codespace の終了または停止

codespace を停止するには、[{% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (`Shift + Command + P` (Mac) または `Ctrl + Shift + P` (Windows)) を使用します。 stop コマンド (たとえば、ブラウザー タブを閉じる) を実行せずに codespace を終了した場合、または操作なしで codespace を実行したままにした場合、codespace とその実行中のプロセスは、非アクティブのウィンドウが発生するまで続行され、その後で codespace が停止します。  既定では、非アクティブのウィンドウは 30 分です。 

codespace を終了または停止すると、codespace に再度接続するまで、コミットされていない変更はすべて保持されます。


## <a name="running-your-application"></a>アプリケーションの実行

ポート転送を使用すると、Codespaces 内で実行されている TCP ポートにアクセスできます。 たとえば、codespace 内のポート 4000 で Web アプリケーションを実行している場合、そのポートを自動的に転送して、ブラウザーからアプリケーションをアクセスできるようにします。

ポートの転送は、リモート マシンからアクセス可能にするポートを決定します。 ポートを転送しない場合でも、そのポートには、codespace 自体内で実行されている他のプロセスにアクセスできます。

![codespace 内でのポートの転送のしくみを示す図](/assets/images/help/codespaces/port-forwarding.png)

{% data variables.product.prodname_codespaces %} 内で実行されているアプリケーションでポートをコンソールに出力すると、{% data variables.product.prodname_codespaces %} では、localhost の URL パターンを検出し、ポートを自動的に転送します。 ターミナルまたはトースト メッセージで URL をクリックして、ブラウザーでポートを開くことができます。 既定では、{% data variables.product.prodname_codespaces %} は HTTP を使用してポートを転送します。 ポートの転送の詳細については、「[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」 (codespace でのポートの転送) を参照してください。

ポートは自動的に転送できますが、インターネットからパブリックにアクセスすることはできません。 既定では、すべてのポートはプライベートですが、手動で、組織またはパブリックでポートを使用できるようにして、URL を使用してアクセスを共有できます。 詳細については、「[Sharing a port](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)」 (ポートの共有) を参照してください。

初めて codespace に入ったときにアプリケーションを実行すると、高速の内部開発ループを実現できます。 編集すると、変更は自動的に保存され、転送されたポートで使用できるようになります。 変更を表示するには、ブラウザーで実行中のアプリケーションのタブに戻って更新します。

## <a name="committing-and-pushing-your-changes"></a>変更のコミットとプッシュ

codespace では既定により Git を使用できるため、既存の Git ワークフローに依存できます。 Git を codespace で操作するには、ターミナルを使うか、[{% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol) のソース管理 UI を使います。 詳細については、「[Using source control in your codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)」 (codespace でのソース管理の使用) を参照してください

![Codespaces Terminal での Git 状態の実行](/assets/images/help/codespaces/git-status.png)

プロジェクト内のブランチ、コミット、または pull request からコードを作成することも、アクティブな codespace 内から新しいまたは既存のブランチに切り替えることもできます。 {% data variables.product.prodname_github_codespaces %} はエフェメラルになるように設計されているため、分離された環境として使用して、実験、チームメイトの pull request の確認、またはマージ競合の修正を行うことができます。 リポジトリごと、さらにはブランチごとに1つ以上のcodespaceを作成できます。 ただし、各個人アカウントの codespace 数には 10 個という制限があります。 この制限に達した場合に新しいcodespaceを作成したいなら、まずcodespaceを削除しなければなりません。

{% note %}

**注:** codespace からのコミットは、 https://github.com/settings/profile で構成された名前とパブリック メールに起因します。 スコープがリポジトリにされ、`GITHUB_TOKEN` として環境に含まれたトークンと、GitHub 資格情報が認証に使用されます。

{% endnote %}

## <a name="personalizing-your-codespace-with-extensions"></a>拡張機能を使用して codespace をカスタマイズする

codespace で {% data variables.product.prodname_vscode_shortname %} を使うと、{% data variables.product.prodname_vscode_marketplace %} にアクセスして必要な拡張機能を追加できるようになります。 拡張機能が {% data variables.product.prodname_codespaces %} でどのように実行されるかについては、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[リモート開発と GitHub Codespaces のサポート](https://code.visualstudio.com/api/advanced-topics/remote-extensions)」を参照してください。 

既に {% data variables.product.prodname_vscode_shortname %} を使っている場合は、[[設定の同期]](https://code.visualstudio.com/docs/editor/settings-sync) を使って、ローカル インスタンスと作成した {% data variables.product.prodname_codespaces %} の間で拡張機能、設定、テーマ、キーボード ショートカットを自動的に同期させることができます。

## <a name="further-reading"></a>参考資料

- [Organization に対して {% data variables.product.prodname_codespaces %} を有効にする](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Organization で {% data variables.product.prodname_codespaces %} の課金を管理する](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
- [codespaces 用にプロジェクトを設定する](/codespaces/setting-up-your-project-for-codespaces)
- [codespaces のライフサイクル](/codespaces/developing-in-codespaces/codespaces-lifecycle)
