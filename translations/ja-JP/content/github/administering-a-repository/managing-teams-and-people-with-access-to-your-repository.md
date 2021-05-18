---
title: リポジトリへのアクセス権を持つ Team と人を管理する
intro: リポジトリへのアクセス権を持つすべての人を確認し、権限を調整できます。
permissions: Repository administrators can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### リポジトリへのアクセス管理について

{% data variables.product.prodname_dotcom %}で管理するリポジトリごとに、リポジトリへのアクセス権を持つすべての Team または人の概要を確認できます。 概要から、新しい Team または人を招待したり、各 Team または人の権限を変更したり、リポジトリへのアクセスを削除したりすることもできます。

この概要は、リポジトリ、オンボードまたはオフボードの独立契約者または従業員へのアクセスを監査し、セキュリティインシデントに効果的に対応するのに役立ちます。

リポジトリの権限レベルについての詳細は、「[ユーザアカウントのリポジトリの権限レベル](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)」および「[Organization のリポジトリの権限レベル](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)」を参照してください。

![アクセス管理の概要](/assets/images/help/repository/manage-access-overview.png)

### Team と人のリストのフィルタリング

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. [Manage access] の検索フィールドで、検索する Team または人の名前を入力します。 ![アクセスできる Team または人のリストをフィルタリングするための検索フィールド](/assets/images/help/repository/manage-access-filter.png)

### Team または人の権限を変更する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. [Manage access] で、権限を変更する Team または人を探し、[**Role**] ドロップダウンを使用して新しい権限を選択します。 !["Role"ドロップダウンを使用して、Team または人の新しい権限を選択します](/assets/images/help/repository/manage-access-role-drop-down.png)

### Team または人を招待する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. 検索フィールドで、招待する Team または人の名前を入力し、リストから一致する名前をクリックします。 ![リポジトリに招待する Team または人の名前を入力するための検索フィールド](/assets/images/help/repository/manage-access-invite-search-field.png)
6. [Choose a role] で、Team または人に付与する権限を選択し、[**Add NAME to REPOSITORY**] をクリックします。 ![Team または人の権限を選択する](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

### Team または人のアクセス権を削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. [Manage access] でアクセスを削除する Team またはユーザーを探し、{% octicon "trash" aria-label="The trash icon" %} をクリックします。 ![アクセス削除用のゴミ箱アイコン](/assets/images/help/repository/manage-access-remove.png)

### 参考リンク

- 「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」
- 「[Organization の基本レベルの権限の設定](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)」
