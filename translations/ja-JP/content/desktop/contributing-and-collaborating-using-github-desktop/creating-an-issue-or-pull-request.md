---
title: Issueもしくはプルリクエストの作成
intro: リポジトリに対する変更の提案あるいは共同作業のために、Issueあるいはプルリクエストを作成できます。
permissions: 'Issue が有効になっているパブリックリポジトリに誰でも Issue を作成できます。 リポジトリに対する読み取り権限があるユーザなら誰でもプルリクエストを作成できますが、ブランチの作成には書き込み権限が必要です。'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---

### Issue とプルリクエストについて

Issue を使用して、プロジェクトにとって重要なアイデア、バグ、タスク、およびその他の情報を追跡できます。 {% data variables.product.prodname_desktop %} を使用して、プロジェクトのリポジトリに Issue を作成できます。 Issue に関する詳しい情報については「[Issue について](/github/managing-your-work-on-github/about-issues)」を参照してください。

ブランチを作成してプロジェクトのファイルに変更を加えた後、プルリクエストを作成できます。 プルリクエストを使用すると、変更をプロジェクトにマージする前に、変更を提案、議論、反復できます。 {% data variables.product.prodname_desktop %} を使用して、プロジェクトのリポジトリにプルリクエストを作成できます。 プルリクエストに関する詳しい情報については「[プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)」を参照してください。

### 必要な環境

プルリクエストを作成する前に、変更を {% data variables.product.prodname_dotcom %} のブランチにプッシュする必要があります。
- ローカルブランチの変更を保存してコミットします。 詳しい情報については「[プロジェクトに対する変更のコミットとレビュー](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)」を参照してください。
- ローカルコミットをリモートリポジトリにプッシュします。 詳しい情報については、「[GitHub への変更をプッシュする](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)」を参照してください。
- 現在のブランチを {% data variables.product.prodname_dotcom %} に公開します。 詳しい情報については、「[ブランチを管理する](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)」を参照してください。

### Issue の作成

{% mac %}

1. メニューバーで、[**Repository**] ドロップダウンメニューを使用して、[**Create Issue on {% data variables.product.prodname_dotcom %}**] をクリックします。 ![ブランチメニュー内のリポジトリの値](/assets/images/help/desktop/create-issue-mac.png)
2. {% data variables.product.prodname_dotcom %}上で、**Get started（始める）**をクリックしてIssueテンプレートをオープンするか、**Open a blank issue（空のIssueをオープン）**をクリックしてください。 ![新規Issueの作成オプション](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. メニューバーで、[**Repository**] ドロップダウンメニューを使用して、[**Create Issue on {% data variables.product.prodname_dotcom %}**] をクリックします。 ![ブランチメニュー内のリポジトリの値](/assets/images/help/desktop/create-issue-windows.png)
2. {% data variables.product.prodname_dotcom %}上で、**Get started（始める）**をクリックしてIssueテンプレートをオープンするか、**Open a blank issue（空のIssueをオープン）**をクリックしてください。 ![新規Issueの作成オプション](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**ノート**: 現在のリポジトリでIssueテンプレートが有効化されていないなら、{% data variables.product.prodname_desktop %}は{% data variables.product.prodname_dotcom %}上の空のIssueへリダイレクトします。

{% endnote %}

### プルリクエストの作成方法

{% mac %}

1. プルリクエストを作成するブランチに切り替えます。 詳しい情報については、「[ブランチの切り替え](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **Create Pull Request**をクリックします {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。 ![[Create Pull Request] ボタン](/assets/images/help/desktop/mac-create-pull-request.png)
4. On
{% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. **compare:** ドロップダウンメニューのブランチが、変更を加えたトピックブランチであることを確認します。
  ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. プルリクエストを作成するブランチに切り替えます。 詳しい情報については、「[ブランチの切り替え](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **Create Pull Request**をクリックします {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。 ![[Create Pull Request] ボタン](/assets/images/help/desktop/windows-create-pull-request.png)
3. On
{% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. **compare:** ドロップダウンメニューのブランチが、変更を加えたトピックブランチであることを確認します。
  ![ベースを選択し、ブランチを比較するドロップダウンメニュー](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

### 参考リンク
- {% data variables.product.prodname_dotcom %} 用語集の「[Issue](/github/getting-started-with-github/github-glossary#issue)」
- {% data variables.product.prodname_dotcom %} 用語集中の[プルリクエスト](/github/getting-started-with-github/github-glossary#pull-request)
- {% data variables.product.prodname_dotcom %} 用語集の[ベースブランチ](/github/getting-started-with-github/github-glossary#base-branch)
- {% data variables.product.prodname_dotcom %} 用語集の[トピックブランチ](/github/getting-started-with-github/github-glossary#topic-branch)
