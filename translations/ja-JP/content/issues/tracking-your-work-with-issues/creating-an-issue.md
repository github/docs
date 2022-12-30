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
shortTitle: Create an issue
type: how_to
ms.openlocfilehash: 21bef9325848b6242b505a8c28ec65483b36448f
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410084'
---
Issue は、バグ、拡張、その他リクエストの追跡に使用できます。 詳細については、「[Issue について](/issues/tracking-your-work-with-issues/about-issues)」を参照してください。

{% data reusables.repositories.administrators-can-disable-issues %}

## リポジトリからのIssueの作成

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. リポジトリで issue テンプレートを使用している場合は、開く issue の種類の横にある **[作業の開始]** をクリックします。
  ![作成する issue の種類を選択します](/assets/images/help/issues/issue_template_get_started_button.png) または、開きたい issue の種類が使用可能なオプションに含まれていない場合は、 **[空の issue を開く]** をクリックします。
   ![空の issue を開くためのリンク](/assets/images/help/issues/blank_issue_link.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## {% data variables.product.prodname_cli %}でのIssueの作成

{% data reusables.cli.about-cli %}{% data variables.product.prodname_cli %} の詳細については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

issue を作成するには、`gh issue create` サブコマンドを使用します。 対話型プロンプトをスキップするには、`--body` フラグと `--title` フラグを含めます。

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
2. そのコメントで、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。
  ![pull request レビュー コメントの三点ボタン](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. **[新しい issue で参照]** をクリックします。
  ![[新しい issue で参照] メニュー項目](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. [Repository] ドロップダウンメニューで、開こうとするIssueがあるリポジトリを選択します。
  ![新しい issue の [リポジトリ] ドロップダウン](/assets/images/help/pull_requests/new-issue-repository.png)
5. Issueのわかりやすいタイトルと本文を入力します。
  ![新しい issue のタイトルと本文](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. **[issue の作成]** をクリックします。
  ![新しい issue を作成するボタン](/assets/images/help/pull_requests/create-issue.png) {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## コードからのIssueの作成

コードの特定の行または複数の行から、ファイルまたはプルリクエストで Issue を開くことができます。 コードから Issue を開くと、Issue には選択した行またはコードの範囲を示すスニペットが含まれています。 Issue を開くことができるのは、コードを保存したのと同じリポジトリでだけです。

![コードから開いた Issue で表示されるコードスニペット](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Issue で参照したいコードを探します。
    - ファイルのコードに関する Issue を開くには、そのファイルに移動します。
    - pull request でコードに関する issue を開くには、対象の pull request に移動して {% octicon "diff" aria-label="The file diff icon" %} **[変更されたファイル]** をクリックします。 次に、コメントに取り込むコードが含まれているファイルを参照して、 **[表示]** をクリックします。
{% data reusables.repositories.choose-line-or-range %}
4. コード範囲の左にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックします。 ドロップダウン メニューで、 **[新しい issue で参照]** をクリックします。
  ![選択した行から新しい issue を開くオプションを含むケバブ メニュー](/assets/images/help/repository/open-new-issue-specific-line.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## ディスカッションからのIssueの作成

リポジトリへのTriage権限を持つユーザは、ディスカッションからIssueを作成できます。

ディスカッションからIssueを作成する場合、ディスカッションの投稿の内容は自動的にIssueの本文に含められ、ラベルがあればそのまま残されます。 ディスカッションからIssueを作成しても、そのディスカッションがIssueに変換されたり、既存のディスカッションが削除されたりすることはありません。 {% data variables.product.prodname_discussions %} の詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右側のサイドバーで、{% octicon "issue-opened" aria-label="The issues icon" %} **[ディスカッションから issue を作成する]** をクリックします。
   ![ディスカッションから issue を作成するボタン](/assets/images/help/discussions/create-issue-from-discussion.jpg) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% endif %}

## プロジェクトボードのノートからのIssueの作成

プロジェクトボードを使用して作業の追跡や優先順位付けをしている場合、プロジェクトボードのノートを Issue に変換できます。 詳細については、「[プロジェクト ボードについて](/github/managing-your-work-on-github/about-project-boards)」と「[プロジェクト ボードへのノートの追加](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)」を参照してください。

{% ifversion fpt or ghec %}

## タスクリストのアイテムからのIssueの作成

Issue内で、タスクリストを使って作業を小さなタスクに分割し、作業全体を完了するまで追跡できます。 さらなる追跡あるいはディスカッションがタスクに必要な場合、そのタスクにマウスを移動させ、タスクの右上の{% octicon "issue-opened" aria-label="The issue opened icon" %}をクリックし、Issueに変換できます。 詳細については、「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください。

{% endif %}

## URLクエリからのIssueの作成

Issueをオープンするのにクエリパラメータを利用できます。 クエリパラメータはカスタマイズ可能なURLのオプション部分で、{% data variables.product.prodname_dotcom %}上の検索フィルタの結果やIssueテンプレートといった特定のWebページビューを共有できます。 独自のクエリパラメータを作成するには、キーと値のペアをマッチさせなければなりません。

{% tip %}

**ヒント:** 既定のラベル、担当者、issue タイトルを使用して開く issue テンプレートを作成することもできます。 詳細については、「[テンプレートを使用して便利な issue や pull request を促進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。

{% endtip %}

クエリパラメータを使うには、同等のアクションを行うための適切な権限を持っていなければなりません。 たとえば、`labels` クエリ パラメーターを使うには、issue にラベルを追加するアクセス許可を持っている必要があります。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

クエリ パラメーターを使用して無効な URL を作成した場合、または適切なアクセス許可を持っていない場合は、URL から `404 Not Found` エラー ページが返されます。 サーバーの制限を超える URL を作成すると、URL から `414 URI Too Long` エラー ページが返されます。

Query parameter (クエリ パラメーター) | 例
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` では、ラベル "bug" とタイトル "New bug report" で issue が作成されます。
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` では、タイトルが "New bug report" で、issue 本文に "Describe the problem" というコメントが含まれる、issue が作成されます。
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` では、"help wanted" と "bug" というラベルを持つ issue が作成されます。
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` では、"testing milestones" というマイルストーンで issue が作成されます。
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` では、issue が作成されて、@octocat に割り当てられます。
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` では、"Bug fix" というタイトルの issue が作成されて、組織のプロジェクト ボード 1 に追加されます。
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` では、issue 本文にテンプレートが含まれる issue が作成されます。 `template` クエリ パラメーターは、リポジトリのルート、`docs/`、または `.github/` ディレクトリ内の `ISSUE_TEMPLATE` サブディレクトリに格納されているテンプレートで動作します。 詳細については、「[テンプレートを使用して便利な issue や pull request を促進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。

{% ifversion code-scanning-task-lists %}
## {% data variables.product.prodname_code_scanning %}アラートからのIssueの作成

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}issue を使用して作業の追跡と優先順位付けを行っている場合は、issue を使用して {% data variables.product.prodname_code_scanning %} アラートを追跡できます。
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## 参考資料

- "[GitHub での書き込み](/github/writing-on-github)"
