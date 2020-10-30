---
title: Issueもしくはプルリクエストの作成
intro: リポジトリに対する変更の提案あるいは共同作業のために、Issueあるいはプルリクエストを作成できます。
redirect_from:
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---

### 新しいIssueのオープン
{% data variables.product.prodname_desktop %}でローカルに作業をしていてバグを見つけた時、あるいは拡張を提案したい時は、作業をしているリポジトリでIssueが有効化されているなら、新しいIssueをオープンできます。 Issueでの作業に関する詳しい情報については「[Issueについて](/github/managing-your-work-on-github/about-issues)」を参照してください。

{% mac %}

1. 画面の左上で、**Repository（リポジトリ）**メニューを選択してください。 ![Macメニューバー内のGitHub Desktopメニュー](/assets/images/help/desktop/select-repository-menu-mac.png)
2. **Create Issue on {% data variables.product.prodname_dotcom %}（{% data variables.product.prodname_dotcom %}上でIssueを作成）**をクリックしてください。 ![ブランチメニュー内のリポジトリの値](/assets/images/help/desktop/create-issue-mac.png)
3. {% data variables.product.prodname_dotcom %}上で、**Get started（始める）**をクリックしてIssueテンプレートをオープンするか、**Open a blank issue（空のIssueをオープン）**をクリックしてください。 ![新規Issueの作成オプション](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. ウィンドウの左上で、**Repository（リポジトリ）**メニューを選択してください。 ![Macメニューバー内のGitHub Desktopメニュー](/assets/images/help/desktop/select-repository-menu-windows.png)
2. **Create Issue on {% data variables.product.prodname_dotcom %}（{% data variables.product.prodname_dotcom %}上でIssueを作成）**をクリックしてください。 ![ブランチメニュー内のリポジトリの値](/assets/images/help/desktop/create-issue-windows.png)
3. {% data variables.product.prodname_dotcom %}上で、**Get started（始める）**をクリックしてIssueテンプレートをオープンするか、**Open a blank issue（空のIssueをオープン）**をクリックしてください。 ![新規Issueの作成オプション](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**ノート**: 現在のリポジトリでIssueテンプレートが有効化されていないなら、{% data variables.product.prodname_desktop %}は{% data variables.product.prodname_dotcom %}上の空のIssueへリダイレクトします。

{% endnote %}

### 新しいプルリクエストの作成
[ブランチを作成](/desktop/guides/contributing-to-projects/managing-branches)して、[変更をコミット](/desktop/guides/contributing-to-projects/committing-and-reviewing-changes-to-your-project)した後、変更の提案についてフィードバックを受け取るためにプルリクエストを開くことができます。

{% mac %}

1. 画面左上にある**Branch**メニューを選択します。 ![Macメニューバー内のGitHub Desktopメニュー](/assets/images/help/desktop/mac-select-branch-menu.png)
2. **Create Pull Request**をクリックします ![ブランチメニュー内のCreate pull request値](/assets/images/help/desktop/create-pull-request-mac.png)
3. {% data variables.product.prodname_dotcom %}で、ドロップダウンメニュー内のデフォルトの_base_ブランチと_compare_ブランチを検証し、必要であれば変更します。 ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. ウィンドウ左上にある**Branch**メニューをクリックします。 ![Windowsメニューバー内のGitHub Desktopメニュー](/assets/images/help/desktop/windows-select-branch-menu.png)
2. **Create pull request**をクリックします。 ![ブランチメニュー内のCreate pull request値](/assets/images/help/desktop/create-pull-request-win.png)
3. {% data variables.product.prodname_dotcom %}で、ドロップダウンメニュー内のデフォルトの_base_ブランチと_compare_ブランチを検証し、必要であれば変更します。 ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}
