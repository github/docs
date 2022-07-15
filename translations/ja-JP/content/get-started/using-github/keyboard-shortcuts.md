---
title: キーボードショートカット
intro: '{% data variables.product.prodname_dotcom %} のほぼすべてのページには、アクションを速く実行するためのキーボードショートカットがあります。'
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
---

## キーボードショートカットについて

Typing <kbd>?</kbd> on {% data variables.product.prodname_dotcom %} brings up a dialog box that lists the keyboard shortcuts available for that page. マウスを使用して移動しなくても、これらのキーボードショートカットを使用して、サイト全体でアクションを実行できます。

{% ifversion keyboard-shortcut-accessibility-setting %}
You can disable character key shortcuts, while still allowing shortcuts that use modifier keys, in your accessibility settings. For more information, see "[Managing accessibility settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings)."{% endif %}

以下は利用可能なキーボードショートカットのリストです:
{% ifversion command-palette %}
The {% data variables.product.prodname_command_palette %} also gives you quick access to a wide range of actions, without the need to remember keyboard shortcuts. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## サイト全体のショートカット

| キーボードショートカット                  | 説明                                                                                                                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>S</kbd> または <kbd>/</kbd> | 検索バーにフォーカスします。 詳細は「[{% data variables.product.company_short %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。 |
| <kbd>G</kbd> <kbd>N</kbd>     | 通知に移動します。 詳しい情報については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」を参照してください。                                              |
| <kbd>Esc</kbd>                | ユーザ、Issue、またはプルリクエストのホバーカードにフォーカスすると、ホバーカードが閉じ、ホバーカードが含まれている要素に再フォーカスします                                                                                               |

{% ifversion command-palette %}

<kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Opens the {% data variables.product.prodname_command_palette %}. If you are editing Markdown text, open the command palette with <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## リポジトリ

| キーボードショートカット              | 説明                                                                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>G</kbd> <kbd>C</kbd> | [**Code**] タブに移動します                                                                                                                                                                                                           |
| <kbd>G</kbd> <kbd>I</kbd> | [**Issues**] タブに移動します。 詳細は「[Issue について](/articles/about-issues)」を参照してください。                                                                                                                                                    |
| <kbd>G</kbd> <kbd>P</kbd> | [**Pull requests**] タブに移動します。 詳しい情報については、「[プルリクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。"{% ifversion fpt or ghes or ghec %}
| <kbd>G</kbd> <kbd>A</kbd> | [**Actions**] タブに移動します。 詳しい情報については、「[アクションについて](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。{% endif %}
| <kbd>G</kbd> <kbd>B</kbd> | [**Projects**] タブに移動します。 詳細は「[プロジェクトボードについて](/articles/about-project-boards)」を参照してください。                                                                                                                                       |
| <kbd>G</kbd> <kbd>W</kbd> | [**Wiki**] タブに移動します。 For more information, see "[About wikis](/communities/documenting-your-project-with-wikis/about-wikis)."{% ifversion fpt or ghec %}
| <kbd>G</kbd> <kbd>G</kbd> | Go to the **Discussions** tab. For more information, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."{% endif %}

## ソースコード編集

| キーボードショートカット                                                                                                                                    | 説明                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| <kbd>から実行されます。</kbd>                                                                                                                            | Opens a repository or pull request in the web-based editor. For more information, see "[Web-based editor](/codespaces/developing-in-codespaces/web-based-editor)."{% endif %}
| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)                                                     | 太字テキストの Markdown 書式を挿入します                                                                                                                                                     |
| <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux)                                                     | イタリック体のテキストの Markdown 書式を挿入します                                                                                                                                                |
| <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                                     | Inserts Markdown formatting for creating a link{% ifversion fpt or ghec or ghae or ghes > 3.3 %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux)                   | Inserts Markdown formatting for an ordered list                                                                                                                               |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux)                   | Inserts Markdown formatting for an unordered list                                                                                                                             |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux)                   | Inserts Markdown formatting for a quote{% endif %}
| <kbd>E</kbd>                                                                                                                                    | [**Edit file**] タブでソースコードファイルを開きます                                                                                                                                            |
| <kbd>Command</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux)                                                     | ファイルエディタで検索を開始します                                                                                                                                                             |
| <kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux)                                                     | 次を検索します                                                                                                                                                                       |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Windows/Linux)                   | 前を検索します                                                                                                                                                                       |
| <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> (Windows/Linux)                  | 置き換えます                                                                                                                                                                        |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> (Windows/Linux) | すべてを置き換えます                                                                                                                                                                    |
| <kbd>Alt</kbd>+<kbd>G</kbd>                                                                                                                     | 行にジャンプします                                                                                                                                                                     |
| <kbd>Command</kbd>+<kbd>Z</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux)                                                     | 元に戻します                                                                                                                                                                        |
| <kbd>Command</kbd>+<kbd>Y</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux)                                                     | やり直します                                                                                                                                                                        |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>                                                                                                | [**Edit file**] タブと [**Preview changes**] タブを切り替えます                                                                                                                           |
| <kbd>Command</kbd>+<kbd>S</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux)                                                     | Write a commit message                                                                                                                                                        |

その他のキーボードショートカットについては、[CodeMirror ドキュメント](https://codemirror.net/doc/manual.html#commands)を参照してください。

## ソースコード閲覧

| キーボードショートカット | 説明                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| <kbd>T</kbd> | ファイルファインダーを起動します                                                                                                   |
| <kbd>L</kbd> | コード内の行にジャンプします                                                                                                     |
| <kbd>W</kbd> | 新しいブランチまたはタグに切り替えます                                                                                                |
| <kbd>Y</kbd> | URL を正規の形式に展開します。 詳細は「[ファイルにパーマリンクを張る](/articles/getting-permanent-links-to-files)」を参照してください。                      |
| <kbd>I</kbd> | 差分に関するコメントを表示または非表示にします。 詳細は「[プルリクエストの差分についてコメントする](/articles/commenting-on-the-diff-of-a-pull-request)」を参照してください。 |
| <kbd>A</kbd> | diff の注釈を表示または非表示にします                                                                                              |
| <kbd>B</kbd> | blame ビューを開きます。 詳細は「[ファイル内の変更を追跡する](/articles/tracing-changes-in-a-file)」を参照してください。                                |

## コメント

| キーボードショートカット                                                                                                                                                | 説明                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)                                                                 | 太字テキストの Markdown 書式を挿入します                                                                                                                                                                       |
| <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux)                                                                 | イタリック体のテキストの Markdown 書式を挿入します                                                                                                                                                                  |
| <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux)                                                                 | Inserts Markdown formatting for code or a command within a line{% ifversion fpt or ghae-issue-5434 or ghes or ghec %}
| <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                                                 | Inserts Markdown formatting for creating a link{% endif %}{% ifversion fpt or ghae-issue-7103 or ghes > 3.5 or ghec %}
| <kbd>Command</kbd>+<kbd>V</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>V</kbd> (Windows/Linux)                                                                 | Creates a Markdown link when applied over highlighted text{% endif %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)                               | Toggles between the **Write** and **Preview** comment tabs{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Windows/Linux)                               | Pastes HTML link as plain text{% endif %}{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Opt</kbd>+<kbd>V</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> (Windows/Linux) | Pastes HTML link as plain text{% endif %}{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux)                               | Inserts Markdown formatting for an ordered list                                                                                                                                                 |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux)                               | Inserts Markdown formatting for an unordered list{% endif %}
| <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux)                                                         | コメントをサブミットします                                                                                                                                                                                   |
| <kbd>Ctrl</kbd>+<kbd>.</kbd> and then <kbd>Ctrl</kbd>+<kbd>[saved reply number]</kbd>                                                                       | 返信テンプレートメニューを開き、コメントフィールドに返信テンプレートを自動入力します。 詳細は「[返信テンプレートについて](/articles/about-saved-replies)」を参照してください。{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux)                               | Inserts Markdown formatting for a quote{% endif %}{% ifversion fpt or ghec %}
| <kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux)                                                                 | 提案を挿入します。 詳細は「[プルリクエストで提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。 
{% endif %}
| <kbd>R</kbd>                                                                                                                                                | 返信で選択したテキストを引用します。 For more information, see "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax#quoting-text)."                                               |

## Issue およびプルリクエストのリスト

| キーボードショートカット                                                                                | 説明                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>C</kbd>                                                                                | Issueの作成                                                                                                                                                                                                    |
| <kbd>Command</kbd>+<kbd>/</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | Issue またはプルリクエストの検索バーにカーソルを合わせます。 For more information, see "[Filtering and searching issues and pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)."| |
| <kbd>U</kbd>                                                                                | 作者によりフィルタリングします                                                                                                                                                                                             |
| <kbd>L</kbd>                                                                                | ラベルによりフィルタリグするか、ラベルを編集します。 詳細は「[Issue およびプルリクエストをラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。                                                                          |
| <kbd>Alt</kbd> およびクリック                                                                      | ラベルによりフィルタリングすると同時に、ラベルを除外します。 詳細は「[Issue およびプルリクエストをラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。                                                                      |
| <kbd>M</kbd>                                                                                | マイルストーンによりフィルタリングするか、 マイルストーンを編集します。 詳細は「[Issue およびプルリクエストをマイルストーンでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。                                                            |
| <kbd>A</kbd>                                                                                | アサインされた人によりフィルタリングするか、 アサインされた人を編集します。 詳細は「[Issue およびプルリクエストをアサインされた人でフィルタリングする](/articles/filtering-issues-and-pull-requests-by-assignees)」を参照してください。                                                      |
| <kbd>O</kbd> or <kbd>Enter</kbd>                                                            | Issue を開きます                                                                                                                                                                                                 |

## Issue およびプルリクエスト
| キーボードショートカット                                                                                                                  | 説明                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Q</kbd>                                                                                                                  | レビュー担当者にリクエストします。 詳細は「[Pull Request レビューをリクエストする](/articles/requesting-a-pull-request-review/)」を参照してください。                                                                                                                                                                                                                                                                                                        |
| <kbd>M</kbd>                                                                                                                  | マイルストーンを設定します。 詳細は「[Issue およびプルリクエストにマイルストーンを関連付ける](/articles/associating-milestones-with-issues-and-pull-requests)」を参照してください。                                                                                                                                                                                                                                                                                   |
| <kbd>L</kbd>                                                                                                                  | ラベルを適用します。 詳細は「[Issue およびプルリクエストにラベルを適用する](/articles/applying-labels-to-issues-and-pull-requests)」を参照してください。                                                                                                                                                                                                                                                                                                     |
| <kbd>A</kbd>                                                                                                                  | アサインされた人を設定します。 詳細は「[{% data variables.product.company_short %} の他のユーザに Issue およびプルリクエストをアサインする](/articles/assigning-issues-and-pull-requests-to-other-github-users/)」を参照してください。                                                                                                                                                                                                                                 |
| <kbd>X</kbd>                                                                                                                  | Link an issue or pull request from the same repository. 詳しい情報については「[プルリクエストのIssueへのリンク](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/)」を参照してください。                                                                                                                                                                                                                                   |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | Toggles between the **Write** and **Preview** tabs{% ifversion fpt or ghec %}
| <kbd>Alt</kbd> およびクリック                                                                                                        | When creating an issue from a task list, open the new issue form in the current tab by holding <kbd>Alt</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. 詳しい情報については[タスクリストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)を参照してください。                                                                  |
| <kbd>Shift</kbd> and click                                                                                                    | When creating an issue from a task list, open the new issue form in a new tab by holding <kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. 詳しい情報については[タスクリストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)を参照してください。                                                                      |
| <kbd>Command</kbd> and click (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and click (Windows/Linux)                        | When creating an issue from a task list, open the new issue form in the new window by holding <kbd>Command</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see "[About task lists](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)."{% endif %}

## プルリクエストの変更

| キーボードショートカット                                         | 説明                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>C</kbd>                                         | プルリクエスト内のコミットのリストを開きます                                                                                                                                                                                                                                                                               |
| <kbd>T</kbd>                                         | プルリクエストで変更されたファイルのリストを開きます                                                                                                                                                                                                                                                                           |
| <kbd>J</kbd>                                         | リストで選択を下に移動します                                                                                                                                                                                                                                                                                       |
| <kbd>K</kbd>                                         | リストで選択を上に移動します                                                                                                                                                                                                                                                                                       |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> | プルリクエストの差分にコメントを 1 つ追加します                                                                                                                                                                                                                                                                            |
| <kbd>Alt</kbd> およびクリック                               | Toggle between collapsing and expanding all outdated review comments in a pull request by holding down <kbd>Alt</kbd> and clicking **Show outdated** or **Hide outdated**.                                                                                                                           |
| Click, then <kbd>Shift</kbd> and click               | Comment on multiple lines of a pull request by clicking a line number, holding <kbd>Shift</kbd>, then clicking another line number. 詳しい情報については、「[プルリクエストへコメントする](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)」を参照してください。 |

## プロジェクトボード

### 列を移動する

| キーボードショートカット                                                                                                                                                   | 説明                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| <kbd>Enter</kbd> or <kbd>Space</kbd>                                                                                                                           | フォーカスされた列を動かし始めます |
| <kbd>Esc</kbd>                                                                                                                                                 | 進行中の移動をキャンセルします   |
| <kbd>Enter</kbd>                                                                                                                                               | 進行中の移動を完了します      |
| <kbd>←</kbd> or <kbd>H</kbd>                                                                                                                                   | 左に列を移動します         |
| <kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | 左端に列を移動します        |
| <kbd>→</kbd> or <kbd>L</kbd>                                                                                                                                   | 右に列を移動します         |
| <kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | 右端に列を移動します        |

### カードを移動する

| キーボードショートカット                                                                                                                                                                                                                       | 説明                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| <kbd>Enter</kbd> or <kbd>Space</kbd>                                                                                                                                                                                               | フォーカスされたカードを動かし始めます |
| <kbd>Esc</kbd>                                                                                                                                                                                                                     | 進行中の移動をキャンセルします     |
| <kbd>Enter</kbd>                                                                                                                                                                                                                   | 進行中の移動を完了します        |
| <kbd>↓</kbd> or <kbd>J</kbd>                                                                                                                                                                                                       | カードを下に移動します         |
| <kbd>Command</kbd>+<kbd>↓</kbd> or <kbd>Command</kbd>+<kbd>J</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> or <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux)                                                                     | カードを列の一番下に移動します     |
| <kbd>↑</kbd> or <kbd>K</kbd>                                                                                                                                                                                                       | カードを上に移動します         |
| <kbd>Command</kbd>+<kbd>↑</kbd> or <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                                                     | カードを列の一番上に移動します     |
| <kbd>←</kbd> or <kbd>H</kbd>                                                                                                                                                                                                       | カードを左側の列の一番下に移動します  |
| <kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Shift</kbd>+<kbd>H</kbd>                                                                                                                                                                     | カードを左側の列の一番上に移動します  |
| <kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux)                                                                     | カードを一番左の列の一番下に移動します |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | カードを一番左の列の一番上に移動します |
| <kbd>→</kbd>                                                                                                                                                                                                                       | カードを右側の列の一番下に移動します  |
| <kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Shift</kbd>+<kbd>L</kbd>                                                                                                                                                                     | カードを右側の列の一番上に移動します  |
| <kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux)                                                                     | カードを一番右の列の一番下に移動します |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | カードを一番右の列の一番下に移動します |

### カードをプレビューする

| キーボードショートカット   | 説明               |
| -------------- | ---------------- |
| <kbd>Esc</kbd> | カードのプレビューペインを閉じる |

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| キーボードショートカット                                                                                         | 説明                                   |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ |
| <kbd>Command</kbd>+<kbd>Space </kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Space</kbd> (Windows/Linux) | ワークフローエディターで、ワークフローファイルに対する提案を取得します。 |
| <kbd>G</kbd> <kbd>F</kbd>                                                                            | ワークフローファイルに移動します                     |
| <kbd>Shift</kbd>+<kbd>T</kbd> or <kbd>T</kbd>                                                        | ログのタイムスタンプを切り替えます                    |
| <kbd>Shift</kbd>+<kbd>F</kbd> or <kbd>F</kbd>                                                        | フルスクリーン表示を切り替えます                     |
| <kbd>Esc</kbd>                                                                                       | フルスクリーン表示を終了します                      |

{% endif %}

## 通知

| キーボードショートカット                  | 説明           |
| ----------------------------- | ------------ |
| <kbd>E</kbd>                  | 完了済としてマークします |
| <kbd>Shift</kbd>+<kbd>U</kbd> | 未読としてマークします  |
| <kbd>Shift</kbd>+<kbd>I</kbd> | 既読としてマーク     |
| <kbd>Shift</kbd>+<kbd>M</kbd> | サブスクライブ解除します |

## ネットワークグラフ

| キーボードショートカット                                                                               | 説明           |
| ------------------------------------------------------------------------------------------ | ------------ |
| <kbd>←</kbd> or <kbd>H</kbd>                                                               | 左にスクロールします   |
| <kbd>→</kbd> or <kbd>L</kbd>                                                               | 右にスクロールします   |
| <kbd>↑</kbd> or <kbd>K</kbd>                                                               | 上にスクロールします   |
| <kbd>↓</kbd> or <kbd>J</kbd>                                                               | 下にスクロールします   |
| <kbd>Shift</kbd>+<kbd>←</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | 左端までスクロールします |
| <kbd>Shift</kbd>+<kbd>→</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | 右端までスクロールします |
| <kbd>Shift</kbd>+<kbd>↑</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>K</kbd> (Windows/Linux) | 上端までスクロールします |
| <kbd>Shift</kbd>+<kbd>↓</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>J</kbd> (Windows/Linux) | 下端までスクロールします |
