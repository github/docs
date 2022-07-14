---
title: Issue の作成
intro: Issueは様々な方法で作成できるので、ワークフローで最も便利な方法を選択できます。
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Issueの作成
type: how_to
---

Issue は、バグ、拡張、その他リクエストの追跡に使用できます。 詳細は「[Issue について](/issues/tracking-your-work-with-issues/about-issues)」を参照してください。

{% data reusables.repositories.administrators-can-disable-issues %}

## リポジトリからのIssueの作成

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. リポジトリでIssueテンプレートが使われているなら、オープンしたいIssueの種類の隣にある**Get started（始める）**をクリックしてください。 ![Select the type of issue you want to create](/assets/images/help/issues/issue_template_get_started_button.png) あるいは、利用できる選択肢にオープンしたいIssueの種類が含まれていない場合は、**Open a blank issue（空のIssueをオープン）**をクリックしてください。 ![空白の Issue を開くリンク](/assets/images/help/issues/blank_issue_link.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## {% data variables.product.prodname_cli %}でのIssueの作成

{% data reusables.cli.about-cli %} {% data variables.product.prodname_cli %}について学ぶには、「[{% data variables.product.prodname_cli %}について](/github-cli/github-cli/about-github-cli)」を参照してください。

Issueを作成するには、`gh issue create`サブコマンドを使ってください。 対話的なプロンプトをスキップするには、`--body`及び`--title`フラグを含めてください。

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

アサインされる人、ラベル、マイルストーン、プロジェクトを指定することもできます。

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## コメントからのIssueの作成

IssueもしくはPull Requestのコメントから、新しいIssueをオープンできます。 コメントから開いたIssueには、コメントの元の投稿場所を示すスニペットが含まれています。

1. Issueをオープンしたいコメントにアクセスしてください。
2. そのコメントで、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![Pull Requestレビューコメントの三点ボタン](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. [**Reference in new issue**] をクリックします。 ![[Reference in new issue] メニュー項目](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. [Repository] ドロップダウンメニューで、開こうとするIssueがあるリポジトリを選択します。 ![新しいIssueの [Repository] ドロップダウン](/assets/images/help/pull_requests/new-issue-repository.png)
5. Issueのわかりやすいタイトルと本文を入力します。 ![新しいIssueのタイトルと本文](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. [**Create issue**] をクリックします。 ![新しいIssueを作成するボタン](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## コードからのIssueの作成

コードの特定の行または複数の行から、ファイルまたはプルリクエストで Issue を開くことができます。 コードから Issue を開くと、Issue には選択した行またはコードの範囲を示すスニペットが含まれています。 Issue を開くことができるのは、コードを保存したのと同じリポジトリでだけです。

![コードから開いた Issue で表示されるコードスニペット](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Issue で参照したいコードを探します。
    - ファイルのコードに関する Issue を開くには、そのファイルに移動します。
    - プルリクエストのコードに関する Issue を開くには、そのプルリクエストに移動し、{% octicon "diff" aria-label="The file diff icon" %}[**Files changed**] をクリックします。 そして、コメントに含めたいコードを持つファイルを探し、** View（ビュー）**をクリックしてください。
{% data reusables.repositories.choose-line-or-range %}
4. コード範囲の左で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックします。 ドロップダウンメニューで、[**Reference in new issue**] をクリックします。 ![選択した行から新しいIssueを開くオプションのある三点メニュー](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% ifversion fpt or ghec %}

## ディスカッションからのIssueの作成

リポジトリへのTriage権限を持つユーザは、ディスカッションからIssueを作成できます。

ディスカッションからIssueを作成する場合、ディスカッションの投稿の内容は自動的にIssueの本文に含められ、ラベルがあればそのまま残されます。 ディスカッションからIssueを作成しても、そのディスカッションがIssueに変換されたり、既存のディスカッションが削除されたりすることはありません。 {% data variables.product.prodname_discussions %}に関する詳しい情報については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 右のサイドバーで、{% octicon "issue-opened" aria-label="The issues icon" %} **Create issue from discussion（ディスカッションからIssueを作成）**をクリックします。 ![ディスカッションからIssueを作成するボタン](/assets/images/help/discussions/create-issue-from-discussion.jpg)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% endif %}

## プロジェクトボードのノートからのIssueの作成

プロジェクトボードを使用して作業の追跡や優先順位付けをしている場合、プロジェクトボードの注釈を Issue に変換できます。 詳しい情報については、 「[プロジェクトボードについて](/github/managing-your-work-on-github/about-project-boards)」と「[プロジェクト ボードへのメモの追加](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)」を参照してください。

{% ifversion fpt or ghec %}

## タスクリストのアイテムからのIssueの作成

Issue内で、タスクリストを使って作業を小さなタスクに分割し、作業全体を完了するまで追跡できます。 さらなる追跡あるいはディスカッションがタスクに必要な場合、そのタスクにマウスを移動させ、タスクの右上の{% octicon "issue-opened" aria-label="The issue opened icon" %}をクリックし、Issueに変換できます。 詳しい情報については[タスクリストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)を参照してください。

{% endif %}

## URLクエリからのIssueの作成

Issueをオープンするのにクエリパラメータを利用できます。 クエリパラメータはカスタマイズ可能なURLのオプション部分で、{% data variables.product.prodname_dotcom %}上の検索フィルタの結果やIssueテンプレートといった特定のWebページビューを共有できます。 独自のクエリパラメータを作成するには、キーと値のペアをマッチさせなければなりません。

{% tip %}

**ヒント:** デフォルトのラベル、割り当て、Issue のタイトルを持ってオープンされる Issue テンプレートを作成することもできます。 詳しい情報については「[有益なIssueとPull Requestを促進するためのテンプレートの利用](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。

{% endtip %}

クエリパラメータを使うには、同等のアクションを行うための適切な権限を持っていなければなりません。 たとえばクエリパラメータの`labels`を使うには、Issueにラベルを追加する権限を持っていなければなりません。 詳しい情報については「[Organizationのためのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

クエリパラメータを使うのに不正なURLを作成したり、適切な権限を持っていなかったりした場合には、そのURLに対して`404 Not Found`エラーページが返されます。 サーバーの限度を超えるURLを作成すると、そのURLは`414 URI Too Long`エラーページを返します。

| クエリパラメータ    | サンプル                                                                                                                                                                                                                                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`     | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` は、"bug" というラベルと "New bug report" というタイトルを付けて Issue を作成します。                                                                                                                                                                                                              |
| `body`      | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.`は、"New bug report"というタイトルで、ボディに"Describe the problem"というコメントを持つIssueを作成します。                                                                                                                                                                              |
| `labels`    | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug`は、"help wanted"及び"bug"というラベルを持つIssueを作成します。                                                                                                                                                                                                                                           |
| `マイルストーン`   | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` は、"testing milestones" というマイルストーンを持たせて Issue を作成します。                                                                                                                                                                                                                           |
| `assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` は、Issue を作成して @octocat に割り当てます。                                                                                                                                                                                                                                                           |
| `projects`  | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` は、"Bug fix" というタイトルを付けて Issue を作成し、それを Organization のプロジェクトボード 1 に追加します。                                                                                                                                                                                              |
| `template`  | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` は、ボディにテンプレートを付けて Issue を作成します。 `template`クエリパラメータは、ルート内の`ISSUE_TEMPLATE`サブディレクトリ、リポジトリ内の`docs/`あるいは`.github/`ディレクトリに保存されたテンプレートで動作します。 詳しい情報については「[有益なIssueとPull Requestを促進するためのテンプレートの利用](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。 |

{% ifversion code-scanning-task-lists %}
## {% data variables.product.prodname_code_scanning %}アラートからのIssueの作成

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}
作業の追跡と優先順位付けにIssueを使っているなら、{% data variables.product.prodname_code_scanning %}アラートの追跡にIssueを使えます。
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## 参考リンク

- [GitHubでの執筆](/github/writing-on-github)
