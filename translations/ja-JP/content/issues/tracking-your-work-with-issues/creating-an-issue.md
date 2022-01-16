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
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Issueの作成
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

## Creating an issue with {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

To create an issue, use the `gh issue create` subcommand. To skip the interactive prompts, include the `--body` and the `--title` flags.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

You can also specify assignees, labels, milestones, and projects.

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
    - プルリクエストのコードに関する Issue を開くには、そのプルリクエストに移動し、{% octicon "diff" aria-label="The file diff icon" %}[**Files changed**] をクリックします。 次に、コメントに含めたいコードを持っているファイルを探し、[**View**] をクリックします。
{% data reusables.repositories.choose-line-or-range %}
4. コード範囲の左で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックします。 ドロップダウンメニューで、[**Reference in new issue**] をクリックします。 ![選択した行から新しいIssueを開くオプションのある三点メニュー](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% ifversion fpt %}

## Creating an issue from discussion

People with triage permission to a repository can create an issue from a discussion.

When you create an issue from a discussion, the contents of the discussion post will be automatically included in the issue body, and any labels will be retained. Creating an issue from a discussion does not convert the discussion to an issue or delete the existing discussion. For more information about {% data variables.product.prodname_discussions %}, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "issue-opened" aria-label="The issues icon" %} **Create issue from discussion**. ![Button to create issue from discussion](/assets/images/help/discussions/create-issue-from-discussion.jpg)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% endif %}

## プロジェクトボードのノートからのIssueの作成

プロジェクトボードを使用して作業の追跡や優先順位付けをしている場合、プロジェクトボードの注釈を Issue に変換できます。 詳しい情報については、 「[プロジェクトボードについて](/github/managing-your-work-on-github/about-project-boards)」と「[プロジェクト ボードへのメモの追加](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)」を参照してください。

{% ifversion fpt %}

## タスクリストのアイテムからのIssueの作成

Issue内で、タスクリストを使って作業を小さなタスクに分割し、作業全体を完了するまで追跡できます。 さらなる追跡あるいはディスカッションがタスクに必要な場合、そのタスクにマウスを移動させ、タスクの右上の{% octicon "issue-opened" aria-label="The issue opened icon" %}をクリックし、Issueに変換できます。 詳しい情報については[タスクリストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)を参照してください。

{% endif %}

## URLクエリからのIssueの作成

Issueをオープンするのにクエリパラメータを利用できます。 クエリパラメータはカスタマイズ可能なURLのオプション部分で、{% data variables.product.prodname_dotcom %}上の検索フィルタの結果やIssueテンプレートといった特定のWebページビューを共有できます。 独自のクエリパラメータを作成するには、キーと値のペアをマッチさせなければなりません。

{% tip %}

**ヒント:** デフォルトのラベル、割り当て、Issue のタイトルを持ってオープンされる Issue テンプレートを作成することもできます。 詳しい情報については「[有益なIssueとPull Requestを促進するためのテンプレートの利用](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。

{% endtip %}

クエリパラメータを使うには、同等のアクションを行うための適切な権限を持っていなければなりません。 たとえばクエリパラメータの`labels`を使うには、Issueにラベルを追加する権限を持っていなければなりません。 詳細は「[Organization のためのリポジトリ権限レベル](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)」を参照してください。

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

| クエリパラメータ    | サンプル                                                                                                                                                                                                                                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`     | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` は、"bug" というラベルと "New bug report" というタイトルを付けて Issue を作成します。                                                                                                                                                                                                              |
| `body`      | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.`は、"New bug report"というタイトルで、ボディに"Describe the problem"というコメントを持つIssueを作成します。                                                                                                                                                                              |
| `labels`    | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug`は、"help wanted"及び"bug"というラベルを持つIssueを作成します。                                                                                                                                                                                                                                           |
| `マイルストーン`   | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` は、"testing milestones" というマイルストーンを持たせて Issue を作成します。                                                                                                                                                                                                                           |
| `assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` は、Issue を作成して @octocat に割り当てます。                                                                                                                                                                                                                                                           |
| `projects`  | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` は、"Bug fix" というタイトルを付けて Issue を作成し、それを Organization のプロジェクトボード 1 に追加します。                                                                                                                                                                                              |
| `template`  | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` は、ボディにテンプレートを付けて Issue を作成します。 `template`クエリパラメータは、ルート内の`ISSUE_TEMPLATE`サブディレクトリ、リポジトリ内の`docs/`あるいは`.github/`ディレクトリに保存されたテンプレートで動作します。 詳しい情報については「[有益なIssueとPull Requestを促進するためのテンプレートの利用](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。 |

## 参考リンク

- [GitHubでの執筆](/github/writing-on-github)
