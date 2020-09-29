---
title: ブランチの同期
intro: 'コミットは {% data variables.product.prodname_dotcom %} のプロジェクトにプッシュされるため、リモートリポジトリからプルすることにより、プロジェクトのローカルコピーを同期した状態に保つことができます。'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
versions:
  free-pro-team: '*'
---

### ブランチの同期について

最後に同期してから {% data variables.product.product_name %} のブランチに追加されたコミットをプルすることにより、ローカルブランチをリモートリポジトリと同期できます。 別のデバイスからコミットする場合、または複数のユーザがプロジェクトに貢献する場合は、ローカルブランチを同期してブランチを更新し続ける必要があります。

ローカルブランチにプルすると、リポジトリのローカルコピーのみを更新します。 {% data variables.product.prodname_dotcom %} のブランチを更新するには、変更をプッシュする必要があります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} への変更をプッシュする](/desktop/contributing-to-projects/pushing-changes-to-github)」を参照してください。

あるブランチから別のブランチへの変更を追加するには、ブランチをマージします。 同じリポジトリ内の別のブランチからブランチに変更を適用するには、他のブランチを {% data variables.product.prodname_desktop %} のブランチにマージします。 ブランチからの変更を、同じリポジトリまたはネットワーク内の別のリポジトリにある別のブランチにマージするようにリクエストするには、{% data variables.product.prodname_desktop %} でプルリクエストを作成します。 詳しい情報については、「[プロジェクトブランチに他のブランチを結合する](#merging-another-branch-into-your-project-branch)」および「[プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests) 」を参照してください。

一部のワークフローでは、マージではなくリベースが必要または役立つ場合があります。 リベースすることで、コミットの順序を変更したり、編集したり、まとめて squash したりできます。 詳しい情報については、「[Git リベースについて](/articles/about-git-rebase)」および「[プロジェクトブランチを別のブランチにリベースする](#rebasing-your-project-branch-onto-another-branch) 」を参照してください。

### リモートからローカルブランチにプルする

1. {% data variables.product.prodname_desktop %} で、{% octicon "git-branch" aria-label="The branch icon" %} [**Current Branch**] ドロップダウンを使用して、更新するローカルブランチを選択します。
2.  リモートブランチのコミットを確認するには、[**Fetch origin**] をクリックします。 ![Fetch originボタン](/assets/images/help/desktop/fetch-button.png)
3. リモートブランチからコミットをプルするには、[**Pull origin**] または [**Pull origin with rebase**] をクリックします。 ![[Pull origin] ボタン](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### プロジェクトブランチに他のブランチをマージする

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **注釈：**マージコンフリクトがある場合、{% data variables.product.prodname_desktop %}は**Merge <em>BRANCH</em> into <em>BRANCH</em>**ボタンの上に警告を表示します。 全てのコンフリクトを解決するまではブランチをマージすることはできません。

   {% endnote %}

   ![Mergeボタン](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### プロジェクトブランチを他のブランチにリベースする

{% mac %}

1. メニューバーで [**Branch**] ドロップダウンを使用して、[**Rebase Current Branch**] をクリックします。 ![ブランチのドロップダウンメニューにある [Rebase Current Branch]](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. 現在のブランチにリベースしたいブランチをクリックし、[**Start rebase**] をクリックします。 ![[Start rebase] ボタン](/assets/images/help/desktop/start-rebase-button.png)
3. リベースしたい場合は、[**Begin rebase**] をクリックします。 ![[Begin rebase] ボタン](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. ローカルの変更をプッシュするには、[**Force push origin**] をクリックします。 ![[Force push origin]](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. [**Branch**] ドロップダウンメニューで、[**Rebase Current Branch**] をクリックします。 ![ブランチのドロップダウンメニューにある [Rebase Current Branch]](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. 現在のブランチにリベースしたいブランチをクリックし、[**Start rebase**] をクリックします。 ![[Start rebase] ボタン](/assets/images/help/desktop/start-rebase-button.png)
3. リベースしたい場合は、[**Begin rebase**] をクリックします。 ![[Begin rebase] ボタン](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. ローカルの変更をプッシュするには、[**Force push origin**] をクリックします。 ![[Force push origin]](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

### 参考リンク
- {% data variables.product.prodname_dotcom %} 用語集の「[プル](/github/getting-started-with-github/github-glossary#pull)」
- {% data variables.product.prodname_dotcom %} 用語集の「[マージ](/github/getting-started-with-github/github-glossary#merge)」
- {% data variables.product.prodname_dotcom %} 用語集の「[リベース](/github/getting-started-with-github/github-glossary#rebase)」
