---
title: プルリクエストの作成方法
intro: リポジトリへの、変更の提案、または変更における共同作業をするには、プルリクエストを作成できます。 これらの変更は「ブランチ」を介して提案され、デフォルトブランチには完成していて、かつ承認された作業のみが含まれるようにします。
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
---

If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. 詳細は「[フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)」および「[フォークについて](/articles/about-forks)」を参照してください。

プルリクエストを作成するとき、変更をどのブランチにマージするかを指定できます。 2 つのブランチ間で違いがある場合にのみ、プルリクエストをオープンできます。

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## ブランチの範囲と宛先リポジトリの変更

デフォルトでは、プルリクエストは親リポジトリの[デフォルトブランチ](/articles/setting-the-default-branch)に基づいています。 詳細は「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)」を参照してください。

デフォルトの親リポジトリが正しくない場合、親リポジトリとブランチをどちらもドロップダウンリストで変更できます。 また、基準点間の差分を確認するために、ドロップダウンリストで head ブランチと base ブランチを入れ替えることもできます。 ここで言う基準は GitHub リポジトリにあるブランチ名でなければなりません。

![プルリクエスト編集ブランチ](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

ブランチを考えるとき、*base branch* は変更の適用**先**であり、*head ブランチ*には、適用する**変更内容**が含まれていることに注意してください。

base リポジトリを変更するとき、プルリクエストの通知も変更します。 base リポジトリにプッシュできる人は誰でもメール通知を受信し、次回サインインすると自分のダッシュボードで新しいプルリクエストを確認できます。

ブランチの範囲にある何らかの情報を変更すると、[Commits] と [Files changed] プレビュー領域は更新されて新しい範囲を表示します。

{% tip %}

**ヒント**:
- 比較ビューを使用して、どの時間枠であっても比較対象として設定できます。 詳しい情報については「[コミットを比較する](/github/committing-changes-to-your-project/comparing-commits)」を参照してください。
- プロジェクトメンテナーはプルリクエストテンプレートをリポジトリに追加できます。 テンプレートにはプルリクエスト本文にある情報のプロンプトが含まれます。 詳しい情報については[Issue およびプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates)を参照してください。

{% endtip %}

## プルリクエストの作成

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. [Branch] メニューで、自分のコミットが含まれるブランチを選択します。 ![ブランチのドロップダウンメニュー](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. 変更をマージする対象のブランチを [_base_] ブランチドロップダウンメニューで選択し、次に変更を行ったトピックブランチを [_compare_] ブランチドロップダウンメニューで選択します。 ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

プルリクエストのレビューが済むと、そのプルリクエストを[リポジトリにマージ](/articles/merging-a-pull-request)できます。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a pull request, use the `gh pr create` subcommand.

```shell
gh pr create
```

To assign a pull request to an individual, use the `--assignee` or `-a` flags. You can use `@me` to self-assign the pull request.

```shell
gh pr create --assignee "@octocat"
```

To specify the branch into which you want the pull request merged, use the `--base` or `-B` flags. To specify the branch that contains commits for your pull request, use the `--head` or `-H` flags.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

To include a title and body for the new pull request, use the `--title` and `--body` flags.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

To mark a pull request as a draft, use the `--draft` flag.

```shell
gh pr create --draft
```

To add a labels or milestones to the new pull request, use the `--label` and `--milestone`  flags.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

To add the new pull request to a specific project, use the `--project` flag.

```shell
gh pr create --project octocat-project
```

To assign an individual or team as reviewers, use the `--reviewer` flag.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

To create the pull request in your default web browser, use the `--web` flag.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. プルリクエストを作成するブランチに切り替えます。 詳しい情報については、「[ブランチの切り替え](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **Create Pull Request**をクリックします {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。 ![[Create Pull Request] ボタン](/assets/images/help/desktop/mac-create-pull-request.png)
4. {% data variables.product.prodname_dotcom %} で、**base:** ドロップダウンメニューのブランチが変更をマージするブランチであることを確認します。 **compare:** ドロップダウンメニューのブランチが、変更を加えたトピックブランチであることを確認します。 ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. プルリクエストを作成するブランチに切り替えます。 詳しい情報については、「[ブランチの切り替え](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **Create Pull Request**をクリックします {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。 ![[Create Pull Request] ボタン](/assets/images/help/desktop/windows-create-pull-request.png)
3. {% data variables.product.prodname_dotcom %} で、**base:** ドロップダウンメニューのブランチが変更をマージするブランチであることを確認します。 **compare:** ドロップダウンメニューのブランチが、変更を加えたトピックブランチであることを確認します。 ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt %}

{% codespaces %}

1. Once you've committed changes to your local copy of the repository, click the **Create Pull Request** icon. ![ステージングボタンが強調表示されたソースコントロールサイドバー](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. マージ元のローカルブランチとリポジトリ、およびマージ先のリモートブランチとリポジトリが正しいことを確認します。 そして、プルリクエストにタイトルと説明を付けます。 ![ステージングボタンが強調表示されたソースコントロールサイドバー](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. ** Create（作成）**をクリックしてください。

For more information on creating pull requests in {% data variables.product.prodname_codespaces %}, see "[Using Codespaces for pull requests](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests)."

{% endcodespaces %}

{% endif %}
## 参考リンク

- [フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)
- [プルリクエストのベースブランチを変更する](/articles/changing-the-base-branch-of-a-pull-request)
- 「[サイドバーからプロジェクトボードへ Issue およびプルリクエストを追加する](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)」
- 「[クエリパラメータによる Issue およびプルリクエストの自動化について](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)」
- "[Assigning issues and pull requests to other GitHub users](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- [GitHubでの執筆](/github/writing-on-github)
