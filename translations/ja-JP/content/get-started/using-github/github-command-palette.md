---
title: GitHub コマンド パレット
intro: '{% data variables.product.product_name %} のコマンド パレットを使って、キーボードから直接移動、検索、コマンドの実行を行います。'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 5c6b739f2422be780cef6fa0e44e5d75663cc036
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159054'
---
{% data reusables.command-palette.beta-note %}

## {% data variables.product.prodname_command_palette %} について

{% data variables.product.prodname_command_palette %} を使って、{% data variables.product.product_name %} で移動、検索、コマンドを実行できます。 コマンド パレットは、現在のコンテキストと最近使ったリソースに基づく候補を表示するオンデマンドの方法です。 コマンド パレットは、{% data variables.product.product_name %} の任意の場所からキーボード ショートカットで開くことができるので、時間を節約してキーボードから手を離さずにいることができます。

### 高速ナビゲーション

コマンド パレットを開くと、リポジトリ、個人アカウント、組織のどこからでも issue ページなどのトップレベルのページに簡単にアクセスできるように、候補が最適化されています。 目的の場所が一覧表示されていない場合は、場所の名前または番号を入力し始めると、候補が絞り込まれます。

![コマンド パレット リポジトリの候補](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### コマンドへの簡単なアクセス

メニューから操作することなく、キーボードから直接コマンドを実行できるため、{% data variables.product.prodname_dotcom %} の使い方が変わるかもしれません。 たとえば、数回のキー操作でテーマを切り替えられるので、ニーズの変化に応じて簡単にテーマを切り替えることができます。

![コマンド パレットのテーマの変更](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## {% data variables.product.prodname_command_palette %} を開く

コマンド パレットを開くには、次の既定のキーボード ショートカットのいずれかを使います。
- Windows と Linux: <kbd>Ctrl</kbd>+<kbd>K</kbd> または <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Command</kbd>+<kbd>K</kbd> または <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

コマンド パレットを開くためのキーボード ショートカットは、ユーザー設定の [[アクセシビリティ セクション]](https://github.com/settings/accessibility) でカスタマイズすることができます。 詳細については「[{% data variables.product.prodname_command_palette %} キーボード ショートカットのカスタマイズ](#customizing-your-github-command-palette-keyboard-shortcuts)」を参照してください。

コマンド パレットを開くと、左上隅に場所が表示され、それを候補のスコープとして使います (たとえば、`mashed-avocado` 組織)。

![コマンド パレットの起動](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**注:**
- Markdown テキストを編集している場合、<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> キー (Windows および Linux) または <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> キー (Mac) を使用してコマンド パレットを開きます。{% ifversion projects-v2 %}
- {% data variables.projects.project_v2 %} で作業している場合は、代わりにプロジェクト固有のコマンド パレットが表示されます。 詳しい情報については、「[ビューのカスタマイズ](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)」を参照してください。{% endif %}

{% endnote %}

### {% data variables.product.prodname_command_palette %} キーボード ショートカットのカスタマイズ


コマンド パレットを開くための既定のキーボード ショートカットは、OS とブラウザーの既定のキーボード ショートカットと競合する場合があります。 アカウント設定の [[アクセシビリティ セクション]](https://github.com/settings/accessibility) に、キーボード ショートカットをカスタマイズするオプションがあります。 コマンド パレットの設定では、検索モードとコマンド モードの両方でコマンド パレットを開くためのキーボード ショートカットをカスタマイズできます。 

![コマンド パレットのキーボード ショートカット設定](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## {% data variables.product.prodname_command_palette %} による移動

コマンド パレットを使うと、{% data variables.product.product_name %} でアクセスできる任意のページに移動できます。

{% data reusables.command-palette.open-palette %}

2. 移動したいパスの入力を開始します。 コマンド パレットの候補は、テキストに合わせて変化します。

   ![コマンド パレット ナビゲーションの現在のスコープ](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   キー入力による絞り込み検索もできます。 詳細については、「[キー入力関数](#keystroke-functions)」を参照してください。

4. パスの入力を完了するか、方向キーを使って候補の中から必要なパスを強調表示します。

5. <kbd>Enter</kbd> キーで選んだ場所にジャンプします。 または、<kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows と Linux) または <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) を使って、新しいブラウザー タブで場所を開きます。

## {% data variables.product.prodname_command_palette %} を使用した検索

コマンド パレットを使用して、{% data variables.location.product_location %} からすべてのことを検索できます。

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. 必要に応じて、キー ストロークを使用して特定の種類のリソースを検索します。

   - <kbd>#</kbd> issue、pull request、ディスカッション、プロジェクトを検索する
   - <kbd>!</kbd> プロジェクトを検索する
   - <kbd>@</kbd> ユーザー、組織、リポジトリを管理する
   - <kbd>/</kbd> リポジトリ スコープ内のファイルを検索する

   ![コマンド パレットのファイル検索](/assets/images/help/command-palette/command-palette-search-files.png)

4. 検索語句の入力を開始します。 コマンド パレットでは、ユーザーの検索範囲に基づいて、一連の検索語の候補が表示されます。

   {% tip %}

   コマンド パレット内で {% data variables.product.prodname_dotcom %} の統合検索の完全な構文を使用することもできます。 詳細については、「[{% data variables.product.prodname_dotcom %} での情報の検索](/search-github)」を参照してください。

   {% endtip %}

5. 矢印キーを使用して目的の検索結果を強調表示し、<kbd>Enter キー</kbd>を使用して選択した場所にジャンプします。 または、<kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows と Linux) または <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) を使って、新しいブラウザー タブで場所を開きます。

## {% data variables.product.prodname_command_palette %} からのコマンドの実行

{% data variables.product.prodname_command_palette %} を使用してコマンドを実行できます。 たとえば、新しいリポジトリや issue を作成したり、テーマを変更したりできます。 コマンドを実行する際、そのアクションの対象となる場所は、基になるページ、またはコマンド パレットに表示されるスコープによって決まります。

- pull request コマンドと issue コマンドは、常に基になるページで実行されます。
- リポジトリ コマンドなどの上位レベル コマンドは、コマンド パレットに表示されているスコープで実行されます。

サポートされているコマンドの完全な一覧については、「[{% data variables.product.prodname_command_palette %} リファレンス](#github-command-palette-reference)」を参照してください。

1. コマンド パレットをコマンド モードで開くための既定のキーボード ショートカットは、<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows および Linux) または <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac) です。 コマンド パレットを既に開いている場合は、<kbd>></kbd> を押してコマンド モードに切り替えます。 {% data variables.product.prodname_dotcom %} では、ユーザーの場所に基づいてコマンドが提案されます。

   ![コマンド パレットのコマンド モード](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. 目的のコマンドが表示されない場合は、スコープを確認した後、テキスト ボックスでコマンド名の入力を開始します。

4. 方向キーを使用して目的のコマンドを強調表示し、<kbd>Enter キー</kbd>を使用して実行します。


## コマンド パレットの終了

コマンド パレットがアクティブな場合は、次のいずれかのキーボード ショートカットを使用してコマンド パレットを閉じます。

- 検索およびナビゲーション モード: <kbd>Esc</kbd> または <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows および Linux)  <kbd>Command</kbd>+<kbd>K</kbd> (Mac)
- コマンド モード: <kbd>Esc</kbd> または <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows および Linux)  <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac)

アクセシビリティ設定でコマンド パレットのキーボード ショートカットをカスタマイズした場合、カスタマイズしたキーボード ショートカットは、コマンド パレットの開閉の両方に使用されます。  

## {% data variables.product.prodname_command_palette %} リファレンス

### キーストローク関数

これらのキーストロークは、コマンド パレットがナビゲーション モードと検索モードにある場合、つまりコマンド モードでは使用できない場合に使用できます。

| キー操作 | 機能 |
| :- | :- |
|<kbd>></kbd>| コマンド モードを開始します。 詳細については、「[{% data variables.product.prodname_command_palette %} からのコマンドの実行](#running-commands-from-the-github-command-palette)」を参照してください。 |
|<kbd>#</kbd>| issue、pull request、ディスカッション、プロジェクトを検索します。 詳細については、「[{% data variables.product.prodname_command_palette %} を使用した検索](#searching-with-the-github-command-palette)」を参照してください。|
|<kbd>@</kbd>| ユーザー、組織、リポジトリを管理します。 詳細については、「[{% data variables.product.prodname_command_palette %} を使用した検索](#searching-with-the-github-command-palette)」を参照してください。|
|<kbd>/</kbd>| リポジトリ スコープ内のファイル、または組織スコープ内のリポジトリを検索します。 詳細については、「[{% data variables.product.prodname_command_palette %} を使用した検索](#searching-with-the-github-command-palette)」を参照してください。 |
|<kbd>!</kbd>| プロジェクトのみを検索します。 詳細については、「[{% data variables.product.prodname_command_palette %} を使用した検索](#searching-with-the-github-command-palette)」を参照してください。|
|<kbd>Ctrl</kbd>+<kbd>C</kbd> または <kbd>Command</kbd>+<kbd>C</kbd>| 強調表示された結果の検索 URL またはナビゲーション URL をクリップボードにコピーします。|
|<kbd>Enter</kbd>| 強調表示された結果に移動するか、強調表示されたコマンドを実行します。|
|<kbd>Ctrl</kbd>+<kbd>Enter</kbd> または <kbd>Command</kbd>+<kbd>Enter</kbd>| 強調表示された検索またはナビゲーションの結果を新しいブラウザー タブで開きます。|
|<kbd>?</kbd>| コマンド パレット内にヘルプを表示します。|

### グローバル コマンド

これらのコマンドは、すべてのスコープから使用できます。

| コマンド | 動作|
| :- | :- | :- |
|`Import repository`|別のバージョン管理システムからプロジェクトをインポートして、新しいリポジトリを作成します。 詳細については、「[GitHub Importer でリポジトリをインポートする](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)」を参照してください。  |
|`New gist`|新しい gist を開きます。 詳細については、「[Gist の作成](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)」を参照してください。 |
|`New organization`|新しい組織を作成します。 詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。 |
|`New project`|新しいプロジェクト ボードを作成します。 詳細については、「[プロジェクトの作成](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)」を参照してください。  |
|`New repository`|新しいリポジトリを最初から作成します。 詳細については、「[新しいリポジトリの作成](/repositories/creating-and-managing-repositories/creating-a-new-repository)」を参照してください。 |
|`Switch theme to <theme name>`|UI の別のテーマに直接変更します。 詳細については、「[テーマ設定を管理する](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)」を参照してください。 |


### 組織コマンド

これらのコマンドは、組織スコープ内でのみ使用できます。

| コマンド | 動作|
| :- | :- |
| `New team`| 現在の組織に新しいチームを作成します。 詳細については、「[チームを作成する](/organizations/organizing-members-into-teams/creating-a-team)」を参照してください。

### リポジトリ コマンド

これらのコマンドのほとんどは、リポジトリのホーム ページでのみ使用できます。 コマンドが他のページでも使用できる場合は、動作列にその旨を記します。

| コマンド | 動作|
| :- | :- |
|`Clone repository: <URL type>`|{% data variables.product.prodname_cli %}、HTTPS、または SSH を使用してリポジトリを複製するために必要な URL をクリップボードにコピーします。 詳細については、「[リポジトリをクローンする](/repositories/creating-and-managing-repositories/cloning-a-repository)」を参照してください。|
|`New discussion`|リポジトリに新しいディスカッションを作成します。 詳細については、「[新しいディスカッションを作成する](/discussions/quickstart#creating-a-new-discussion)」を参照してください。|
|`New file`|リポジトリ内の任意のページから新しいファイルを作成します。 詳細については、「[リポジトリにファイルを追加する](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)」を参照してください。
|`New issue`|リポジトリ内の任意のページから新しい issue を開きます。 詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。|
|`Open in new codespace`|このリポジトリのコードスペースを作成して開きます。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」を参照してください。|
|`Open in github.dev editor`|github.dev エディターで現在のリポジトリを開きます。 詳細については、「[Web ベースのエディターを開く](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)」を参照してください。|

### ファイル コマンド

これらのコマンドは、リポジトリ内のファイルからコマンド パレットを開く場合にのみ使用できます。

| コマンド | 動作|
| :- | :- |
|`Copy permalink`|現在のコミット SHA を含むファイルへのリンクを作成し、リンクをクリップボードにコピーします。 詳細については、「[ファイルへのパーマリンクを取得する](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)」を参照してください。
|`Open in github.dev editor`|現在表示されているファイルを github.dev エディターで開きます。 詳細については、「[Web ベースのエディターを開く](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)」を参照してください。|

### ディスカッション コマンド

これらのコマンドは、ディスカッションからコマンド パレットを開く場合にのみ使用できます。 これらは現在のページで動作し、コマンド パレットで設定されたスコープの影響を受けません。

| コマンド | 動作|
| :- | :- |
|`Delete discussion...`|ディスカッションを完全に削除します。 詳しくは、「[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)」を参照してください。
|`Edit discussion body`|編集する準備ができているディスカッションの本文を開きます。
|`Subscribe`/`unsubscribe`|ディスカッションへの追加の通知をオプトインまたはオプトアウトします。 詳細については、「[通知について](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)」を参照してください。
|`Transfer discussion...`|ディスカッションを別のリポジトリに移動します。 詳しくは、「[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)」を参照してください。

### issue コマンド

これらのコマンドは、issue からコマンド パレットを開く場合にのみ使用できます。 これらは現在のページで動作し、コマンド パレットで設定されたスコープの影響を受けません。

| コマンド | 動作|
| :- | :- |
|`Close`/`reopen issue`|現在の issue を閉じるか、もう一度開きます。 詳細については、「[Issue について](/issues/tracking-your-work-with-issues/about-issues)」を参照してください。|
|`Convert issue to discussion...`|現在の issue をディスカッションに変換します。 詳細については、「[ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)」を参照してください。
|`Delete issue...`|現在の issue を削除します。 詳細については、「[Issue の削除](/issues/tracking-your-work-with-issues/deleting-an-issue)」を参照してください。|
|`Edit issue body`|編集する準備ができている issue の本文を開きます。
|`Edit issue title`|編集する準備ができている issue のタイトルを開きます。
|`Lock issue`|リポジトリへの書き込みアクセス権を持つユーザーへの新しいコメントを制限します。 詳細については、[会話のロック](/communities/moderating-comments-and-conversations/locking-conversations)に関するページを参照してください。
|`Pin`/`unpin issue`|リポジトリのピン留めされた issue セクションに issue が表示されるかどうかを変更します。 詳細については、「[Issue をリポジトリにピン止めする](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)」を参照してください。|
|`Subscribe`/`unsubscribe`|この issue に対する変更についての通知をオプトインまたはオプトアウトします。 詳細については、「[通知について](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)」を参照してください。
|`Transfer issue...`|issue を別のリポジトリに転送します。 詳細については、「[Transferring an issue to another repository (Issue を別のリポジトリに転送する)](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)」を参照してください。|

### pull request コマンド

これらのコマンドは、pull request からコマンド パレットを開く場合にのみ使用できます。 これらは現在のページで動作し、コマンド パレットで設定されたスコープの影響を受けません。

| コマンド | 動作|
| :- | :- |
|`Close`/`reopen pull request`|現在の pull request を閉じるか、もう一度開きます。 詳細については、「[pull request について](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。|
|`Convert to draft`/`Mark pull request as ready for review`|pull request の状態を変更して、レビューの準備ができているか、準備ができていない状態として表示します。 詳細については、[pull request の状態変更](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)に関するページを参照してください。|
|`Copy current branch name`| pull request のヘッド ブランチの名前をクリップボードに追加します。
|`Edit pull request body`|編集の準備ができている pull request の本文を開きます。
|`Edit pull request title`|編集の準備ができている pull request のタイトルを開きます。
|`Open in new codespace`|pull request のヘッド ブランチのコードスペースを作成して開きます。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」を参照してください。
|`Subscribe`/`unsubscribe`|この pull request に対する変更についての通知をオプトインまたはオプトアウトします。 詳細については、「[通知について](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)」を参照してください。
|`Update current branch`|pull request のヘッド ブランチを、ベース ブランチからの変更内容で更新します。 これは、リポジトリの既定のブランチを対象とする pull request でのみ使用できます。 詳細については、[ブランチについて](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)のページを参照してください。|
