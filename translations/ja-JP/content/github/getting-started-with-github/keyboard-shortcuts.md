---
title: キーボードショートカット
intro: '{% data variables.product.product_name %} のほぼすべてのページには、アクションを速く実行するためのキーボードショートカットがあります。'
redirect_from:
  - /articles/using-keyboard-shortcuts/
  - /categories/75/articles/
  - /categories/keyboard-shortcuts/
  - /articles/keyboard-shortcuts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


### キーボードショートカットについて

{% data variables.product.product_name %} に <kbd>?</kbd> と入力すると、そのページで使用可能なキーボードショートカットを一覧表示するダイアログボックスが表示されます。 マウスを使用して移動しなくても、これらのキーボードショートカットを使用して、サイト全体でアクションを実行できます。

以下は利用可能なキーボードショートカットのリストです:

### サイト全体のショートカット

| キーボードショートカット                  | 説明                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>s</kbd> または <kbd>/</kbd> | 検索バーにフォーカスします。 詳細は「[{% data variables.product.company_short %} での検索について](/articles/about-searching-on-github)」を参照してください。                                                                                                                                                                                                                                                 |
| <kbd>g</kbd> <kbd>n</kbd>     | 通知に移動します。 For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[About notifications](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}." |
| <kbd>esc</kbd>                | ユーザ、Issue、またはプルリクエストのホバーカードにフォーカスすると、ホバーカードが閉じ、ホバーカードが含まれている要素に再フォーカスします                                                                                                                                                                                                                                                                                                 |

### リポジトリ

| キーボードショートカット              | 説明                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>g</kbd> <kbd>c</kbd> | [**Code**] タブに移動します                                                                                                                                                                                                |
| <kbd>g</kbd> <kbd>i</kbd> | [**Issues**] タブに移動します。 詳細は「[Issue について](/articles/about-issues)」を参照してください。                                                                                                                                         |
| <kbd>g</kbd> <kbd>p</kbd> | [**Pull requests**] タブに移動します。 For more information, see "[About pull requests](/articles/about-pull-requests)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| <kbd>g</kbd> <kbd>a</kbd> | Go to the **Actions** tab. For more information, see "[About Actions](/actions/getting-started-with-github-actions/about-github-actions)."{% endif %}
| <kbd>g</kbd> <kbd>b</kbd> | [**Projects**] タブに移動します。 詳細は「[プロジェクトボードについて](/articles/about-project-boards)」を参照してください。                                                                                                                            |
| <kbd>g</kbd> <kbd>w</kbd> | [**Wiki**] タブに移動します。 詳細は「[ウィキについて](/articles/about-wikis)」を参照してください。                                                                                                                                               |

### ソースコード編集

| キーボードショートカット                                                     | 説明                                                  |
| ---------------------------------------------------------------- | --------------------------------------------------- |
| <kbd>e</kbd>                                                     | [**Edit file**] タブでソースコードファイルを開きます                  |
| <kbd>control f</kbd> または <kbd>command f</kbd>                    | ファイルエディタで検索を開始します                                   |
| <kbd>control g</kbd> または <kbd>command g</kbd>                    | 次を検索します                                             |
| <kbd>shift control g</kbd> または <kbd>shift command g</kbd>        | 前を検索します                                             |
| <kbd>shift control f</kbd> または <kbd>command option f</kbd>       | 置き換えます                                              |
| <kbd>shift control r</kbd> または <kbd>shift command option f</kbd> | すべてを置き換えます                                          |
| <kbd>alt g</kbd>                                                 | 行にジャンプします                                           |
| <kbd>control z</kbd> または <kbd>command z</kbd>                    | 元に戻します                                              |
| <kbd>control y</kbd> または <kbd>command y</kbd>                    | やり直します                                              |
| <kbd>cmd + shift + p</kbd>                                       | [**Edit file**] タブと [**Preview changes**] タブを切り替えます |

その他のキーボードショートカットについては、[CodeMirror ドキュメント](https://codemirror.net/doc/manual.html#commands)を参照してください。

### ソースコード閲覧

| キーボードショートカット | 説明                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| <kbd>t</kbd> | ファイルファインダーを起動します                                                                                                   |
| <kbd>l</kbd> | コード内の行にジャンプします                                                                                                     |
| <kbd>w</kbd> | 新しいブランチまたはタグに切り替えます                                                                                                |
| <kbd>y</kbd> | URL を正規の形式に展開します。 詳細は「[ファイルにパーマリンクを張る](/articles/getting-permanent-links-to-files)」を参照してください。                      |
| <kbd>i</kbd> | 差分に関するコメントを表示または非表示にします。 詳細は「[プルリクエストの差分についてコメントする](/articles/commenting-on-the-diff-of-a-pull-request)」を参照してください。 |
| <kbd>b</kbd> | blame ビューを開きます。 詳細は「[ファイル内の変更を追跡する](/articles/tracing-changes-in-a-file)」を参照してください。                                |

### コメント

| キーボードショートカット                                              | 説明                                                                                                                                                                             |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>control b</kbd> または <kbd>command b</kbd>             | 太字テキストの Markdown 書式を挿入します                                                                                                                                                      |
| <kbd>control i</kbd> または <kbd>command i</kbd>             | イタリック体のテキストの Markdown 書式を挿入します                                                                                                                                                 |
| <kbd>control k</kbd> または <kbd>command k</kbd>             | リンクを作成するための Markdown 書式を挿入します                                                                                                                                                  |
| <kbd>control shift p</kbd> または <kbd>command shift p</kbd> | **Write** と **Preview** のコメントタブを切り替えます。                                                                                                                                        |
| <kbd>control enter</kbd>                                  | コメントをサブミットします                                                                                                                                                                  |
| <kbd>control .</kbd>、次に <kbd>control [返信テンプレート番号]</kbd>   | 返信テンプレートメニューを開き、コメントフィールドに返信テンプレートを自動入力します。 For more information, see "[About saved replies](/articles/about-saved-replies)."{% if currentVersion == "free-pro-team@latest" %}
| <kbd>control g</kbd> または <kbd>command g</kbd>             | 提案を挿入します。 詳細は「[プルリクエストで提案された変更をレビューする](/articles/reviewing-proposed-changes-in-a-pull-request)」を参照してください。 |{% endif %}
| <kbd>r</kbd>                                              | 返信で選択したテキストを引用します。 詳細は「[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)」を参照してください。                                                                           |

### Issue およびプルリクエストのリスト

| キーボードショートカット                                  | 説明                                                                                                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>c</kbd>                                  | Issue を作成します                                                                                                                                           |
| <kbd>control /</kbd> または <kbd>command /</kbd> | Issue またはプルリクエストの検索バーにカーソルを合わせます。 詳細は「[検索を使用して Issue およびプルリクエストをフィルタリングする](/articles/using-search-to-filter-issues-and-pull-requests)」を参照してください。       |
| <kbd>u</kbd>                                  | 作者によりフィルタリングします                                                                                                                                        |
| <kbd>l</kbd>                                  | ラベルによりフィルタリグするか、ラベルを編集します。 詳細は「[Issue およびプルリクエストをラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。                     |
| <kbd>alt</kbd> およびクリック                        | ラベルによりフィルタリングすると同時に、ラベルを除外します。 詳細は「[Issue およびプルリクエストをラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。                 |
| <kbd>m</kbd>                                  | マイルストーンによりフィルタリングするか、 マイルストーンを編集します。 詳細は「[Issue およびプルリクエストをマイルストーンでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」を参照してください。       |
| <kbd>a</kbd>                                  | アサインされた人によりフィルタリングするか、 アサインされた人を編集します。 詳細は「[Issue およびプルリクエストをアサインされた人でフィルタリングする](/articles/filtering-issues-and-pull-requests-by-assignees)」を参照してください。 |
| <kbd>o</kbd> または <kbd>enter</kbd>             | Issue を開きます                                                                                                                                            |

### Issue およびプルリクエスト
| キーボードショートカット                                                  | 説明                                                                                                                                                                               |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>q</kbd>                                                  | レビュー担当者にリクエストします。 詳細は「[Pull Request レビューをリクエストする](/articles/requesting-a-pull-request-review/)」を参照してください。                                                                        |
| <kbd>m</kbd>                                                  | マイルストーンを設定します。 詳細は「[Issue およびプルリクエストにマイルストーンを関連付ける](/articles/associating-milestones-with-issues-and-pull-requests)」を参照してください。                                                   |
| <kbd>l</kbd>                                                  | ラベルを適用します。 詳細は「[Issue およびプルリクエストにラベルを適用する](/articles/applying-labels-to-issues-and-pull-requests)」を参照してください。                                                                     |
| <kbd>a</kbd>                                                  | アサインされた人を設定します。 詳細は「[{% data variables.product.company_short %} の他のユーザに Issue およびプルリクエストをアサインする](/articles/assigning-issues-and-pull-requests-to-other-github-users/)」を参照してください。 |
| <kbd>cmd + shift + p</kbd> または <kbd>control + shift + p</kbd> | [**Write**] タブと [**Preview**] タブを切り替えます。                                                                                                                                         |

### プルリクエストの変更

| キーボードショートカット                    | 説明                                                                                                                                                                                                                                                                    |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>c</kbd>                    | プルリクエスト内のコミットのリストを開きます                                                                                                                                                                                                                                                |
| <kbd>t</kbd>                    | プルリクエストで変更されたファイルのリストを開きます                                                                                                                                                                                                                                            |
| <kbd>j</kbd>                    | リストで選択を下に移動します                                                                                                                                                                                                                                                        |
| <kbd>k</kbd>                    | リストで選択を上に移動します                                                                                                                                                                                                                                                        |
| <kbd>cmd + shift + enter </kbd> | プルリクエストの差分にコメントを 1 つ追加します                                                                                                                                                                                                                                             |
| <kbd>alt</kbd> およびクリック          | Toggle between collapsing and expanding all outdated review comments in a pull request by holding down `alt` and clicking **Show outdated** or **Hide outdated**.|{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
| クリック後、<kbd>shift</kbd> およびクリック  | プルリクエストの複数行にコメントするには、行番号をクリックし、<kbd>shift</kbd> を押したまま、別の行番号をクリックします。 詳しい情報については、「[プルリクエストへコメントする](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)」を参照してください。|{% endif %}

### プロジェクトボード

#### 列を移動する

| キーボードショートカット                                                                                     | 説明                |
| ------------------------------------------------------------------------------------------------ | ----------------- |
| <kbd>enter</kbd> または <kbd>space</kbd>                                                            | フォーカスされた列を動かし始めます |
| <kbd>escape</kbd>                                                                                | 進行中の移動をキャンセルします   |
| <kbd>enter</kbd>                                                                                 | 進行中の移動を完了します      |
| <kbd>←</kbd> または <kbd>h</kbd>                                                                    | 左に列を移動します         |
| <kbd>command ←</kbd> または <kbd>command h</kbd> あるいは <kbd>control ←</kbd> または <kbd>control h</kbd> | 左端に列を移動します        |
| <kbd>→</kbd> または <kbd>l</kbd>                                                                    | 右に列を移動します         |
| <kbd>command →</kbd> または <kbd>command l</kbd> あるいは <kbd>control →</kbd> または <kbd>control l</kbd> | 右端に列を移動します        |

#### カードを移動する

| キーボードショートカット                                                                                                             | 説明                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| <kbd>enter</kbd> または <kbd>space</kbd>                                                                                    | フォーカスされたカードを動かし始めます |
| <kbd>escape</kbd>                                                                                                        | 進行中の移動をキャンセルします     |
| <kbd>enter</kbd>                                                                                                         | 進行中の移動を完了します        |
| <kbd>↓</kbd> または <kbd>j</kbd>                                                                                            | カードを下に移動します         |
| <kbd>command ↓</kbd> または <kbd>command j</kbd> あるいは <kbd>control ↓</kbd> または <kbd>control j</kbd>                         | カードを列の一番下に移動します     |
| <kbd>↑</kbd> または <kbd>k</kbd>                                                                                            | カードを上に移動します         |
| <kbd>command ↑</kbd> または <kbd>command k</kbd> あるいは <kbd>control ↑</kbd> または <kbd>control k</kbd>                         | カードを列の一番上に移動します     |
| <kbd>←</kbd> または <kbd>h</kbd>                                                                                            | カードを左側の列の一番下に移動します  |
| <kbd>shift ←</kbd> または <kbd>shift h</kbd>                                                                                | カードを左側の列の一番上に移動します  |
| <kbd>command ←</kbd> または <kbd>command h</kbd> あるいは <kbd>control ←</kbd> または <kbd>control h</kbd>                         | カードを一番左の列の一番下に移動します |
| <kbd>command shift ←</kbd> または <kbd>command shift h</kbd> あるいは <kbd>control shift ←</kbd> または <kbd>control shift h</kbd> | カードを一番左の列の一番上に移動します |
| <kbd>→</kbd>                                                                                                             | カードを右側の列の一番下に移動します  |
| <kbd>shift →</kbd> または <kbd>shift l</kbd>                                                                                | カードを右側の列の一番上に移動します  |
| <kbd>command →</kbd> または <kbd>command l</kbd> あるいは <kbd>control →</kbd> または <kbd>control l</kbd>                         | カードを一番右の列の一番下に移動します |
| <kbd>command shift →</kbd> または <kbd>command shift l</kbd> あるいは <kbd>control shift →</kbd> または <kbd>control shift l</kbd> | カードを一番右の列の一番下に移動します |

#### Previewing a card

| キーボードショートカット   | 説明                          |
| -------------- | --------------------------- |
| <kbd>esc</kbd> | Close the card preview pane |

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_actions %}

| キーボードショートカット                                           | 説明                                   |
| ------------------------------------------------------ | ------------------------------------ |
| <kbd>command space </kbd> または <kbd>control space</kbd> | ワークフローエディターで、ワークフローファイルに対する提案を取得します。 |

{% endif %}

### 通知
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
| キーボードショートカット       | 説明           |
| ------------------ | ------------ |
| <kbd>e</kbd>       | 完了済としてマークします |
| <kbd>shift u</kbd> | 未読としてマークします  |
| <kbd>shift i</kbd> | 既読としてマークします  |
| <kbd>shift m</kbd> | サブスクライブ解除します |

{% else %}

| キーボードショートカット                                   | 説明           |
| ---------------------------------------------- | ------------ |
| <kbd>e</kbd> または <kbd>I</kbd> または <kbd>y</kbd> | 既読としてマークします  |
| <kbd>shift m</kbd>                             | スレッドをミュートします |
{% endif %}

### ネットワークグラフ

| キーボードショートカット                              | 説明           |
| ----------------------------------------- | ------------ |
| <kbd>←</kbd> または <kbd>h</kbd>             | 左にスクロールします   |
| <kbd>→</kbd> または <kbd>l</kbd>             | 右にスクロールします   |
| <kbd>↑</kbd> または <kbd>k</kbd>             | 上にスクロールします   |
| <kbd>↓</kbd> または <kbd>j</kbd>             | 下にスクロールします   |
| <kbd>shift ←</kbd> または <kbd>shift h</kbd> | 左端までスクロールします |
| <kbd>shift →</kbd> または <kbd>shift l</kbd> | 右端までスクロールします |
| <kbd>shift ↑</kbd> または <kbd>shift k</kbd> | 上端までスクロールします |
| <kbd>shift ↓</kbd> または <kbd>shift j</kbd> | 下端までスクロールします |
