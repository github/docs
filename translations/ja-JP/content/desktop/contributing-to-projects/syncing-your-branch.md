---
title: ブランチの同期
intro: '{% data variables.product.prodname_dotcom %}にあるプロジェクトにコミットをプッシュしていくと、ローカルコピーをリモートリポジトリと同期させることができます。'
versions:
  free-pro-team: '*'
---

最初に[ブランチを作成](/desktop/guides/contributing-to-projects/managing-branches)して以降追加されたコミットを、取得するには、ローカルブランチをリモートリポジトリと同期する必要があります。

### ローカルブランチの更新方法

1. {% data variables.product.prodname_desktop %}で、{% octicon "git-branch" aria-label="The branch icon" %}**Current Branch**をクリックし、リストからブランチを選択して更新するローカルブランチに切り替えます。
2. ブランチを更新するには**Fetch origin**をクリックします。 ![Fetch originボタン](/assets/images/help/desktop/fetch-button.png)
3. リモートブランチにコミットがある場合、[**Pull origin**] または [**Pull origin with rebase**] をクリックすることでそれらをプルできます。 ![[Pull origin] ボタン](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### プロジェクトブランチへの他のブランチのマージ方法

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **注釈：**マージコンフリクトがある場合、{% data variables.product.prodname_desktop %}は**Merge <em>BRANCH</em> into <em>BRANCH</em>**ボタンの上に警告を表示します。 全てのコンフリクトを解決するまではブランチをマージすることはできません。

   {% endnote %}

   ![Mergeボタン](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### プロジェクトブランチを他のブランチにリベースする
ワークフローによっては、マージではなくリベースが必要または役立つ場合があります。 リベースすることで、コミットの順序を変更したり、編集したり、まとめて squash したりできます。 詳細は「[Git のリベースについて](/articles/about-git-rebase)」を参照してください。

1. [**Branch**] ドロップダウンメニューで、[**Rebase Current Branch**] をクリックします。 ![ブランチのドロップダウンメニューにある [Rebase Current Branch]](/assets/images/help/desktop/rebase-current-branch.png)
2. 現在のブランチにリベースしたいブランチをクリックし、[**Start rebase**] をクリックします。 ![[Start rebase] ボタン](/assets/images/help/desktop/start-rebase-button.png)
3. リベースしたい場合は、[**Begin rebase**] をクリックします。 ![[Begin rebase] ボタン](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. ローカルの変更をプッシュするには、[**Force push origin**] をクリックします。 ![[Force push origin]](/assets/images/help/desktop/force-push-origin.png)
