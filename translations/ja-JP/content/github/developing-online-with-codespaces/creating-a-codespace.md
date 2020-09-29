---
title: codespace を作成する
intro: リポジトリのブランチの codespace を作成して、オンラインで開発できます。
product: '{% data reusables.gated-features.codespaces %}'
permissions: すべてのユーザは、任意のパブリックリポジトリ、またはユーザアカウントが所有する任意のリポジトリの codespace を作成できます。
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### codespace の作成について

{% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %}詳しい情報については、「[codespace を削除する](/github/developing-online-with-codespaces/deleting-a-codespace)」を参照してください。

{% data reusables.codespaces.unsupported-repos %}

空のリポジトリに codespace を作成することはできません。 リポジトリが空の場合は、codespace を作成する前に、リポジトリにファイルを作成します。 詳しい情報については、「[ファイルをリポジトリに追加する](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)」および「[コマンドラインを使ったリポジトリへのファイルの追加](/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line)」を参照してください。

作成する codespace の環境は、リポジトリの設定に基づきます。 詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)」を参照してください。

{% data reusables.codespaces.about-personalization %} 詳しい情報については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)」を参照してください。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### codespace を作成する

{% data reusables.repositories.navigate-to-repo %}
2. リポジトリ名の下で、[Branch] ドロップダウンメニューを使用して、codespace を作成するブランチを選択します。 ![[Branch] ドロップダウンメニュー](/assets/images/help/codespaces/branch-drop-down.png)
3. リポジトリ名の下で、{% octicon "download" aria-label="The download icon" %} [**Code**] ドロップダウンメニューを使用して、[**Open with Codespaces**] を選択します。 ![[Open with Codespaces] ボタン](/assets/images/help/codespaces/open-with-codespaces-button.png)
4. ブランチの codespace がすでにある場合は、{% octicon "plus" aria-label="The plus icon" %} [**New codespace**] をクリックします。 ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)
