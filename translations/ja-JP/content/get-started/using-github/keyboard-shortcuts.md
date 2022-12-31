---
title: キーボード ショートカット
intro: '{% data variables.product.prodname_dotcom %} のほぼすべてのページには、アクションを速く実行するためのキーボード ショートカットがあります。'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ad75d2afe5750ee2596d2695334ab5c7101aee79
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180778'
---
## キーボードショートカットについて

「<kbd>?</kbd>」と {% data variables.product.prodname_dotcom %} に入力すると、そのページで使用可能なキーボード ショートカットを一覧表示するダイアログ ボックスが表示されます。 マウスを使用して移動しなくても、これらのキーボードショートカットを使用して、サイト全体でアクションを実行できます。

{% ifversion keyboard-shortcut-accessibility-setting %} アクセシビリティ設定では、修飾キーを使用するショートカットを許可したまま、文字キーのショートカットを無効にすることができます。 詳細については、「[Managing accessibility settings (アクセシビリティ設定の管理)](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings)」を参照してください。{% endif %}

{% ifversion command-palette %}また、{% data variables.product.prodname_command_palette %} を使うと、キーボード ショートカットを覚えていなくても、さまざまなアクションにすばやくアクセスできます。 詳細については、「[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)」を参照してください。{% endif %}

次のセクションによって、使用可能なキーボード ショートカットの一部が、それらを {% data variables.location.product_location %} で使用できるページごとに整理されて、リストで表示されます。

## サイト全体のショートカット

| ショートカット キー | [説明]
|-----------|------------
|<kbd>S</kbd> または <kbd>/</kbd> | 検索バーにフォーカスします。 詳細については、「[{% data variables.product.company_short %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。
|<kbd>G</kbd> <kbd>N</kbd> | 通知に移動します。 詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」を参照してください。
|<kbd>Esc</kbd> | ユーザ、Issue、またはプルリクエストのホバーカードにフォーカスすると、ホバーカードが閉じ、ホバーカードが含まれている要素に再フォーカスします
{% ifversion command-palette %}|<kbd>Command</kbd>+<kbd>K</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | {% data variables.product.prodname_command_palette %} を開きます。 Markdown テキストを編集する場合は、<kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> または <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> を使用して、コマンド パレットを開きます。 詳細については、「[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)」を参照してください。{% endif %}

## リポジトリ

| ショートカット キー | [説明]
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | **[コード]** タブに移動します
|<kbd>G</kbd> <kbd>I</kbd> | **[Issue]** タブに移動します。詳細については、「[Issue について](/articles/about-issues)」を参照してください。
|<kbd>G</kbd> <kbd>P</kbd> | **[プルリクエスト]** タブに移動します。詳細については、「[プルリクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | **[アクション]** タブに移動します。詳細については、「[About Actions (アクションについて)](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | **[プロジェクト]** タブに移動します。詳細については、「[プロジェクト ボードについて](/articles/about-project-boards)」を参照してください。
|<kbd>G</kbd> <kbd>W</kbd> | **[Wiki]** タブにアクセスします。詳しくは、「[ウィキについて](/communities/documenting-your-project-with-wikis/about-wikis)」をご覧ください。{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | **[ディスカッション]** タブに移動します。詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。{% endif %}

## ソースコード編集

| キーボード ショートカット | 説明 |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | 同じブラウザー タブの Web ベースのエディターでリポジトリまたは pull request を開きます。エディターを使用するには、サインインしている必要があります。 詳細については、[Web ベースのエディター](/codespaces/developing-in-codespaces/web-based-editor)に関するページを参照してください。
|<kbd>></kbd> | 新しいブラウザー タブの Web ベースのエディターでリポジトリまたは pull request を開きます。エディターを使用するには、サインインしている必要があります。 詳細については、「[Web-based editor (Web ベースのエディター)](/codespaces/developing-in-codespaces/web-based-editor)」を参照してください。{% endif %} |<kbd>Command</kbd>+<kbd>B</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | テキストを太字にするための Markdown 書式を挿入します |<kbd>Command</kbd>+<kbd>I</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | テキストを斜体にするための Markdown 書式を挿入します |<kbd>Command</kbd>+<kbd>K</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | リンクを作成するための Markdown 書式を挿入します{% ifversion fpt or ghec or ghae or ghes > 3.3 %} |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | 番号付きリストの Markdown 書式を挿入します |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | 番号なしリストの Markdown 書式を挿入します |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | 引用符の Markdown 書式を挿入します{% endif %} |<kbd>E</kbd> | **[ファイルの編集]** タブでソース コード ファイルを開きます |<kbd>Command</kbd>+<kbd>F</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) | ファイル エディターで検索を開始します |<kbd>Command</kbd>+<kbd>G</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | 次を検索します |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Windows/Linux) | 前を検索します |<kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> (Windows/Linux) | 置き換えます |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> (Windows/Linux) | すべて置き換えます |<kbd>Alt</kbd>+<kbd>G</kbd> | 行にジャンプします |<kbd>Command</kbd>+<kbd>Z</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux) | 元に戻します |<kbd>Command</kbd>+<kbd>Y</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux) | やり直します |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> | **[ファイルの編集]** タブと **[変更のプレビュー]** タブを切り替えます |<kbd>Command</kbd>+<kbd>S</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux) | コミット メッセージを書き込みます

その他のキーボード ショートカットについては、[CodeMirror のドキュメント](https://codemirror.net/doc/manual.html#commands)を参照してください。

## ソースコード閲覧

| ショートカット キー | [説明]
|-----------|------------
|<kbd>T</kbd> | ファイルファインダーを起動します
|<kbd>L</kbd> | コード内の行にジャンプします
|<kbd>W</kbd> | 新しいブランチまたはタグに切り替えます
|<kbd>Y</kbd> | URL を正規の形式に展開します。 詳細については、「[ファイルへのパーマリンクを取得する](/articles/getting-permanent-links-to-files)」を参照してください。
|<kbd>I</kbd> | 差分に関するコメントを表示または非表示にします。 詳細については、「[Commenting on the diff of a pull request (プルリクエストの差分についてコメントする)](/articles/commenting-on-the-diff-of-a-pull-request)」を参照してください。
|<kbd>A</kbd> | diff の注釈を表示または非表示にします
|<kbd>B</kbd> | blame ビューを開きます。 詳細については、「[コメントの変更を追跡する](/articles/tracing-changes-in-a-file)」を参照してください。

## コメント

| ショートカット キー | [説明]
|-----------|------------
|<kbd>Command</kbd>+<kbd>B</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | 太字テキストの Markdown 書式を挿入します
|<kbd>Command</kbd>+<kbd>I</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | イタリック体のテキストの Markdown 書式を挿入します
|<kbd>Command</kbd>+<kbd>E</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) | 行内のコードまたはコマンドの Markdown 書式を挿入します{% ifversion fpt or ghae > 3.3 or ghes or ghec %}
|<kbd>Command</kbd>+<kbd>K</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | リンクを作成するための Markdown 書式を挿入します{% endif %}{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}
|<kbd>Command</kbd> + <kbd>V</kbd> (Mac) または </br> <kbd>Ctrl</kbd> + <kbd>V</kbd> (Windows/Linux) | 強調表示されたテキストに適用されたときに、Markdown リンクを作成します{% endif %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | **[記述]** および **[プレビュー]** コメント タブを切り替えます{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Windows/Linux) | HTML リンクをプレーン テキストとして貼り付けます{% endif %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>V</kbd> (Mac) または </br> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd> (Windows/Linux) | HTML リンクをプレーン テキストとして貼り付けます
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | 番号付きリストの Markdown 書式を挿入します
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | 番号なしリストの Markdown 書式を挿入します
|<kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux) | コメントをサブミットします
|<kbd>Ctrl</kbd>+ <kbd>.</kbd> を押してから <kbd>Ctrl</kbd>+<kbd>[返信テンプレートの番号]</kbd> | 返信テンプレートメニューを開き、コメントフィールドに返信テンプレートを自動入力します。 詳しくは、「[返信テンプレートについて](/articles/about-saved-replies)」をご覧ください。
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | 引用符の Markdown 書式を挿入します{% ifversion fpt or ghec %}
|<kbd>Command</kbd>+<kbd>G</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | 提案を挿入します。 詳細については、「[pull request で提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。 |{% endif %}
|<kbd>R</kbd> | 返信で選択したテキストを引用します。 詳細については、「[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax#quoting-text)」を参照してください。 |

## Issue およびプルリクエストのリスト

| ショートカット キー | [説明]
|-----------|------------
|<kbd>C</kbd> | 問題の作成
|<kbd>Command</kbd>+<kbd>/</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | Issue またはプルリクエストの検索バーにカーソルを合わせます。 詳細については、「[Issue および Pull Request のフィルタリングと検索](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)」を参照してください。||
|<kbd>U</kbd> | 作者によりフィルタリングします
|<kbd>L</kbd> | ラベルによりフィルタリグするか、ラベルを編集します。 詳細については、「[Issue および Pull Request をラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。
|<kbd>Alt</kbd> キーを押しながらクリック | ラベルによりフィルタリングすると同時に、ラベルを除外します。 詳細については、「[Issue および Pull Request をラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。
|<kbd>M</kbd> | マイルストーンによりフィルタリングするか、 マイルストーンを編集します。 詳細については、「[Issue と Pull Request をマイルストーンでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-milestone)」を参照してください。
|<kbd>A</kbd> | アサインされた人によりフィルタリングするか、 アサインされた人を編集します。 詳細については、「[Issue および Pull Request をアサインされた人でフィルタリングする](/articles/filtering-issues-and-pull-requests-by-assignees)」を参照してください。
|<kbd>O</kbd> または <kbd>Enter</kbd> | オープンなIssue

## Issue およびプルリクエスト
| ショートカット キー | [説明]
|-----------|------------
|<kbd>Q</kbd> | レビュー担当者にリクエストします。 詳細については、「[Pull Request レビューをリクエストする](/articles/requesting-a-pull-request-review/)」を参照してください。
|<kbd>M</kbd> | マイルストーンを設定します。 詳細については、「[Issue および Pull Request にマイルストーンを関連付ける](/articles/associating-milestones-with-issues-and-pull-requests/)」を参照してください。
|<kbd>L</kbd> | ラベルを適用します。 詳細については、「[Issue と Pull request にラベルを適用する](/articles/applying-labels-to-issues-and-pull-requests/)」を参照してください。
|<kbd>A</kbd> | アサインされた人を設定します。 詳細については、「[{% data variables.product.company_short %} の他のユーザに Issue および Pull Request をアサインする](/articles/assigning-issues-and-pull-requests-to-other-github-users/)」を参照してください。
|<kbd>X</kbd> | 同じリポジトリからの Issue またはプルリクエストをリンクします。 詳細については、「[pull request を Issue にリンクする](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/)」を参照してください。
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | **[記述]** および **[プレビュー]** タブを切り替えます{% ifversion fpt or ghec %}
|<kbd>Alt</kbd> キーを押しながらクリック | タスク リストから Issue を作成する場合は、<kbd>Alt </kbd> キーを押しながらタスクの右上隅にある {% octicon "issue-opened" aria-label="The issue opened icon" %} をクリックして、現在のタブに新しい Issue フォームを開きます。 詳細については、「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください。
|<kbd>Shift</kbd> キーを押しながらクリック | タスク リストから Issue を作成する場合は、<kbd>Shift </kbd> キーを押しながらタスクの右上隅にある {% octicon "issue-opened" aria-label="The issue opened icon" %} をクリックして、新しいタブに新しい Issue フォームを開きます。 詳細については、「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください。
|<kbd>Command</kbd> キーを押しながらクリック (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd> キーを押しながらクリック (Windows/Linux) | タスク リストから Issue を作成する場合は、<kbd>Command</kbd> または <kbd>Ctrl</kbd>+<kbd>Shift</kbd> キーを押しながらタスクの右上隅にある {% octicon "issue-opened" aria-label="The issue opened icon" %} をクリックして、新しいウィンドウに新しい Issue フォームを開きます。 詳細については、「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください。{% endif %}

## pull request の [変更されたファイル] タブ

| ショートカット キー | [説明]
|-----------|------------
|<kbd>C</kbd> | **[コミット]** ドロップダウン メニューを開き、差分に表示するコミットをフィルター処理します
|<kbd>T</kbd> | "変更されたファイル" フィールドにカーソルを移動する
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> キー (Mac)、または <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> キー (Windows/Linux) | レビュー コメントを送信する |
|<kbd>Option</kbd> キーとクリック (Mac)、または <kbd>Alt</kbd> キーとクリック (Windows/Linux) | pull request ですべての古いレビュー コメントまたは解決されたレビュー コメントの折りたたみと展開を切り替えます (たとえば、<kbd>Alt</kbd> キーを押したまま、 **[期限切れを表示]** または **[期限切れを非表示]** をクリックします) |
|クリックし、<kbd>Shift</kbd> キーを押しながらクリック | プルリクエストの複数行にコメントするには、行番号をクリックし、<kbd>Shift</kbd> キーを押したまま、別の行番号をクリックします。 詳細については、「[プルリクエストへコメントする](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)」を参照してください。|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### プロジェクト内の移動

| ショートカット キー | [説明]
|-----------|------------
|<kbd>Command</kbd>+<kbd>f</kbd> (Mac) または <kbd>Ctrl</kbd>+<kbd>f</kbd> (Windows/Linux) | フィルター フィールドにフォーカスする
|<kbd>←</kbd> | セルのフォーカスを左に移動する
|<kbd>→</kbd> | セルのフォーカスを右に移動する
|<kbd>↑</kbd> | セルのフォーカスを上に移動する
|<kbd>↓</kbd> | セルのフォーカスを下に移動する

### プロジェクトの操作

| ショートカット キー | [説明]
|-----------|------------
|<kbd>Enter</kbd> | フォーカスされたセルの編集モードを切り替える
|<kbd>Escape</kbd> | フォーカスされたセルの編集をキャンセルする
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Mac) または <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Windows/Linux) | 行アクション メニューを開く
|<kbd>Shift</kbd>+<kbd>Space</kbd> | 項目の選択
|<kbd>Space</kbd> | 選んだ項目を開く
|<kbd>e</kbd> | 選んだ項目をアーカイブする

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### 列を移動する

| ショートカット キー | [説明]
|-----------|------------
|<kbd>Enter</kbd> または <kbd>Space</kbd> | フォーカスされた列を動かし始めます
|<kbd>Esc</kbd> | 進行中の移動をキャンセルします
|<kbd>Enter</kbd> | 進行中の移動を完了します
|<kbd>←</kbd> または <kbd>H</kbd> | 左に列を移動します
|<kbd>Command</kbd>+<kbd>←</kbd> または <kbd>Command</kbd>+<kbd>H</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> または <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | 左端に列を移動します
|<kbd>→</kbd> または <kbd>L</kbd> | 右に列を移動します
|<kbd>Command</kbd>+<kbd>→</kbd> または <kbd>Command</kbd>+<kbd>L</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> または <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | 右端に列を移動します

### カードを移動する

| ショートカット キー | [説明]
|-----------|------------
|<kbd>Enter</kbd> または <kbd>Space</kbd> | フォーカスされたカードを動かし始めます
|<kbd>Esc</kbd> | 進行中の移動をキャンセルします
|<kbd>Enter</kbd> | 進行中の移動を完了します
|<kbd>↓</kbd> または <kbd>J</kbd> | カードを下に移動します
|<kbd>Command</kbd>+<kbd>↓</kbd> または <kbd>Command</kbd>+<kbd>J</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> または <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux) | カードを列の一番下に移動します
|<kbd>↑</kbd> または <kbd>K</kbd> | カードを上に移動します
|<kbd>Command</kbd>+<kbd>↑</kbd> または <kbd>Command</kbd>+<kbd>K</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> または <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | カードを列の一番上に移動します
|<kbd>←</kbd> または <kbd>H</kbd> | カードを左側の列の一番下に移動します
|<kbd>Shift</kbd>+<kbd>←</kbd> または <kbd>Shift</kbd>+<kbd>H</kbd> | カードを左側の列の一番上に移動します
|<kbd>Command</kbd>+<kbd>←</kbd> または <kbd>Command</kbd>+<kbd>H</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> または <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | カードを一番左の列の一番下に移動します
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> または <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> または <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | カードを一番左の列の一番上に移動します
|<kbd>→</kbd> | カードを右側の列の一番下に移動します
|<kbd>Shift</kbd>+<kbd>→</kbd> または <kbd>Shift</kbd>+<kbd>L</kbd> | カードを右側の列の一番上に移動します
|<kbd>Command</kbd>+<kbd>→</kbd> または <kbd>Command</kbd>+<kbd>L</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> または <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | カードを一番右の列の一番下に移動します
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> または <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> または <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | カードを一番右の列の一番下に移動します

### カードをプレビューする

| ショートカット キー | [説明]
|-----------|------------
|<kbd>Esc</kbd> | カードのプレビューペインを閉じる

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| ショートカット キー | [説明]
|-----------|------------
|<kbd>Command</kbd>+<kbd>Space</kbd> (Mac) または </br> <kbd>Ctrl</kbd>+<kbd>Space</kbd> (Windows/Linux) | ワークフローエディターで、ワークフローファイルに対する提案を取得します。
|<kbd>G</kbd> <kbd>F</kbd> | ワークフローファイルに移動します
|<kbd>Shift</kbd>+<kbd>T</kbd> または <kbd>T</kbd> | ログのタイムスタンプを切り替えます
|<kbd>Shift</kbd>+<kbd>F</kbd> または <kbd>F</kbd> | フルスクリーン表示を切り替えます
|<kbd>Esc</kbd> | フルスクリーン表示を終了します

{% endif %}

## 通知

| ショートカット キー | [説明]
|-----------|------------
|<kbd>E</kbd> | 完了としてマーク
|<kbd>Shift</kbd>+<kbd>U</kbd>| 未開封にする
|<kbd>Shift</kbd>+<kbd>I</kbd>| 既読としてマークする
|<kbd>Shift</kbd>+<kbd>M</kbd> | サブスクライブ解除

## ネットワークグラフ

| ショートカット キー | [説明]
|-----------|------------
|<kbd>←</kbd> または <kbd>H</kbd> | 左にスクロール
|<kbd>→</kbd> または <kbd>L</kbd> | 右にスクロール
|<kbd>↑</kbd> または <kbd>K</kbd> | 上にスクロール
|<kbd>↓</kbd> または <kbd>J</kbd> | 下にスクロール
|<kbd>Shift</kbd>+<kbd>←</kbd> (Mac) または </br> <kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | 左端までスクロールします
|<kbd>Shift</kbd>+<kbd>→</kbd> (Mac) または </br> <kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | 右端までスクロールします
|<kbd>Shift</kbd>+<kbd>↑</kbd> (Mac) または </br> <kbd>Shift</kbd>+<kbd>K</kbd> (Windows/Linux) | 上端までスクロールします
|<kbd>Shift</kbd>+<kbd>↓</kbd> (Mac) または </br> <kbd>Shift</kbd>+<kbd>J</kbd> (Windows/Linux) | 下端までスクロールします
