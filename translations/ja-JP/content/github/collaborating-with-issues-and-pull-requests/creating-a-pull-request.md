---
title: プルリクエストの作成方法
intro: リポジトリへの、変更の提案、または変更における共同作業をするには、プルリクエストを作成できます。 これらの変更は「ブランチ」を介して提案され、デフォルトブランチには完成していて、かつ承認された作業のみが含まれるようにします。
redirect_from:
  - /articles/creating-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

リポジトリに対する読み取り権限があるユーザなら誰でもプルリクエストを作成できますが、ブランチの作成には書き込み権限が必要です。 プルリクエストのための新しいブランチを作成したいけれども、リポジトリへの書き込み権限がない場合は、まずリポジトリをフォークできます。 詳細は「[フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)」および「[フォークについて](/articles/about-forks)」を参照してください。

プルリクエストを作成するとき、変更をどのブランチにマージするかを指定できます。 2 つのブランチ間で違いがある場合にのみ、プルリクエストをオープンできます。

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

### ブランチの範囲と宛先リポジトリの変更

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

### プルリクエストの作成

{% tip %}

**ヒント**: {% data variables.product.prodname_desktop %} を使用してプルリクエストを作成することもできます。 詳しい情報については、{% data variables.product.prodname_desktop %} ドキュメントにある「[Issue またはプルリクエストを作成する](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)」を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. [Branch] メニューで、自分のコミットが含まれるブランチを選択します。 ![ブランチのドロップダウンメニュー](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. 変更をマージする対象のブランチを [_base_] ブランチドロップダウンメニューで選択し、次に変更を行ったトピックブランチを [_compare_] ブランチドロップダウンメニューで選択します。 ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

プルリクエストのレビューが済むと、そのプルリクエストを[リポジトリにマージ](/articles/merging-a-pull-request)できます。

### 参考リンク

- [フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)
- [プルリクエストのベースブランチを変更する](/articles/changing-the-base-branch-of-a-pull-request)
- 「[サイドバーからプロジェクトボードへ Issue およびプルリクエストを追加する](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)」
