---
title: pull request の作成
intro: リポジトリへの変更の提案や共同作業を行うには、pull request を作成します。 これらの変更は *"ブランチ"* を介して提案され、既定のブランチには完成していて、かつ承認された作業のみが確実に含まれるようにします。
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110994'
---
pull request 用に新しいブランチを作成する必要があり、リポジトリへの書き込みアクセス許可がない場合は、まずリポジトリをフォークできます。 詳細については、「[フォークから pull request を作成する](/articles/creating-a-pull-request-from-a-fork)」と「[フォークについて](/articles/about-forks)」を参照してください。

プルリクエストを作成するとき、変更をどのブランチにマージするかを指定できます。 2 つのブランチ間で違いがある場合にのみ、プルリクエストをオープンできます。

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## ブランチの範囲と宛先リポジトリの変更

デフォルトでは、プルリクエストは親リポジトリの<a href="/articles/setting-the-default-branch">デフォルトブランチ</a>に基づいています。 詳細については、[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)のページを参照してください。

デフォルトの親リポジトリが正しくない場合、親リポジトリとブランチをどちらもドロップダウンリストで変更できます。 また、基準点間の差分を確認するために、ドロップダウンリストで head ブランチと base ブランチを入れ替えることもできます。 ここで言う基準は GitHub リポジトリにあるブランチ名でなければなりません。

![プルリクエスト編集ブランチ](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

ブランチについて考えるときは、"*base ブランチ*" が変更を適用する "**場所**" であり、"*head ブランチ*" には適用する "**内容**" が含まれていることに注意してください。

base リポジトリを変更するとき、プルリクエストの通知も変更します。 base リポジトリにプッシュできる人は誰でもメール通知を受信し、次回サインインすると自分のダッシュボードで新しいプルリクエストを確認できます。

ブランチの範囲にある何らかの情報を変更すると、[Commits] と [Files changed] プレビュー領域は更新されて新しい範囲を表示します。

{% tip %}

**ヒント**:
- 比較ビューを使用して、どの時間枠であっても比較対象として設定できます。 詳細については、「[コミットを比較する](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)」を参照してください。
- プロジェクトメンテナーはプルリクエストテンプレートをリポジトリに追加できます。 テンプレートにはプルリクエスト本文にある情報のプロンプトが含まれます。 詳細については、「[Issue と pull request テンプレートについて](/articles/about-issue-and-pull-request-templates)」を参照してください。

{% endtip %}

## プルリクエストの作成

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. [Branch] メニューで、自分のコミットが含まれるブランチを選択します。
  ![[Branch] ドロップダウン メニュー](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. 変更をマージする対象のブランチを _[base]_ ブランチ ドロップダウン メニューで選択し、次に _[compare]_ ブランチ ドロップダウン メニューを使用して、変更を行ったトピック ブランチを選択します。
  ![[base] ブランチと [compare] ブランチを選択するためのドロップダウン メニュー](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

pull request が確認されたら、[リポジトリにマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)できます。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

pull request を作成するには、`gh pr create` サブコマンドを使用します。

```shell
gh pr create
```

pull request を個人に割り当てるには、`--assignee` または `-a` フラグを使用します。 pull request を自己割り当てするために `@me` を使用できます。

```shell
gh pr create --assignee "@octocat"
```

pull request をマージするブランチを指定するには、`--base` または `-B` フラグを使用します。 pull request のコミットを含むブランチを指定するには、`--head` または `-H` フラグを使用します。

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

新しい pull request のタイトルと本文を含めるには、`--title` と `--body` フラグを使用します。

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

pull request をドラフトとしてマークするには、`--draft` フラグを使用します。

```shell
gh pr create --draft
```

新しい pull request にラベルまたはマイルストーンを追加するには、`--label` と `--milestone` フラグを使用します。

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

特定のプロジェクトに新しい pull request を追加するには、`--project` フラグを使用します。

```shell
gh pr create --project octocat-project
```

個人またはチームをレビュー担当者として割り当てるには、`--reviewer` フラグを使用します。

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

既定の Web ブラウザーで pull request を作成するには、`--web` フラグを使用します。

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. プルリクエストを作成するブランチに切り替えます。 詳細については、「[ブランチ間で切り替える](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **[pull request の作成]** をクリックします。 {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。
  ![[Create pull request]\(pull request の作成\) ボタン](/assets/images/help/desktop/mac-create-pull-request.png)
4. {% data variables.product.prodname_dotcom %} で、 **[base:]** ドロップダウン メニューのブランチが変更をマージするブランチであることを確認します。 **[compare:]** ドロップダウン メニューのブランチが、変更を加えたトピック ブランチであることを確認します。
  ![[base] ブランチと [compare] ブランチを選択するためのドロップダウン メニュー](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. プルリクエストを作成するブランチに切り替えます。 詳細については、「[ブランチ間で切り替える](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **[pull request の作成]** をクリックします。 {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。
  ![[Create pull request]\(pull request の作成\) ボタン](/assets/images/help/desktop/windows-create-pull-request.png)
3. {% data variables.product.prodname_dotcom %} で、 **[base:]** ドロップダウン メニューのブランチが変更をマージするブランチであることを確認します。 **[compare:]** ドロップダウン メニューのブランチが、変更を加えたトピック ブランチであることを確認します。
  ![[base] ブランチと [compare] ブランチを選択するためのドロップダウン メニュー](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. リポジトリのローカル コピーに変更をコミットしたら、 **[Create pull request]\(pull request の作成\)** アイコンをクリックします。
![ステージング ボタンが強調表示されたソース コントロール サイドバー](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. マージ元のローカルブランチとリポジトリ、およびマージ先のリモートブランチとリポジトリが正しいことを確認します。 そして、プルリクエストにタイトルと説明を付けます。
![GitHub pull request サイド バー](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. **Create** をクリックしてください。

{% data variables.product.prodname_github_codespaces %} で pull request を作成する方法について詳しくは、「[pull request で {% data variables.product.prodname_github_codespaces %} を使用する](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)」をご覧ください。

{% endcodespaces %}

{% endif %}
## 参考資料

- "[フォークから pull request を作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[ベース ブランチと pull request の同期の維持](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)"
- "[pull request の base ブランチを変更する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
- "[サイドバーからのプロジェクト ボードへの Issue および pull request の追加](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[クエリ パラメーターを使用した Issule および pull request の自動化について](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[GitHub の他のユーザーに Issue および pull request を割り当てる](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[GitHub での書き込み](/github/writing-on-github)"
