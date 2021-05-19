---
title: デフォルトブランチを変更する
intro: リポジトリに複数のブランチがある場合、任意のブランチをデフォルトブランチとして設定できます。
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
topics:
  - Repositories
---

### デフォルトブランチの変更について

リポジトリのデフォルトブランチは選択できます。 デフォルトブランチは、プルリクエストやコードのコミットを行う基点となるブランチです。 デフォルトブランチの詳細については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)」を参照してください。

{% if currentVersion != "github-ae@latest" %}
{% note %}

**注釈**: Git-Subversion ブリッジを使用している場合、デフォルトブランチを変更すると, changing the default branch will affect your `trunk` ブランチのコンテンツと、リモートリポジトリのリファレンスを一覧表示するときに表示される`HEAD` に影響を与えます。 詳しい情報については、「[Subversion クライアントのサポート](/github/importing-your-projects-to-github/support-for-subversion-clients)」および Git ドキュメンテーション内の [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) を参照してください。

{% endnote %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

デフォルトブランチの名前は変更することもできます。 詳しい情報については、「[ブランチの名前を変更する](/github/administering-a-repository/renaming-a-branch)」を参照してください。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

{% data reusables.branches.set-default-branch %}

{% endif %}

### 必要な環境

デフォルトブランチを変更するには、リポジトリに複数のブランチが存在する必要があります。 詳しい情報については[リポジトリ内でのブランチの作成と削除](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)を参照してください。

### デフォルトブランチを変更する

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. [Default branch] の下にある、デフォルトブランチ名の右側の、{% octicon "arrow-switch" aria-label="The switch icon with two arrows" %} をクリックします。 ![現在のデフォルトブランチ名の右側にある、2 つの矢印がついた切り替えアイコン](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. ドロップダウンメニューで、ブランチ名をクリックします。 ![新しいデフォルトブランチを選択するドロップダウン](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. [**Update**] をクリックします。 ![新しいブランチを選択後の [Update] ボタン](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. 警告を読んでから、[**I understand, update the default branch.**] (わかりました。デフォルトのブランチを更新してください) をクリックします。 ![新しいブランチを選択後の [Update] ボタン](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. デフォルトブランチのドロップダウンメニューで、新しいデフォルトブランチを選択します。 ![デフォルトブランチ ドロップダウン セレクター](/assets/images/help/repository/repository-options-defaultbranch.png)
1. [**Update**] をクリックします。

{% endif %}
