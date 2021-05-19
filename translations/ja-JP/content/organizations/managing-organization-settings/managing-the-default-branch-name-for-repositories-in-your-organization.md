---
title: Organization のリポジトリのデフォルブランチ名を管理する
intro: Organization でメンバーが作成するリポジトリについて、デフォルトブランチ名を設定できます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

### デフォルトブランチ名について

Organization のメンバーが Organization で新しいリポジトリを作成するとき、リポジトリにはブランチが 1 つ含まれます。これがデフォルトブランチです。 Organization のメンバーが新しいリポジトリを作成するとき、{% data variables.product.prodname_dotcom %} はブランチを 1 つ作成し、それをリポジトリのデフォルトブランチに設定します。 デフォルトブランチの詳細については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)」を参照してください。

{% data reusables.branches.set-default-branch %}

Enterprise のオーナーが Enterprise のデフォルトブランチ名にポリシーを適用している場合、Organization のデフォルトブランチ名を設定することはできません。 代わりに、個々のリポジトリのデフォルトブランチを変更できます。 詳しい情報については、{% if currentVersion == "free-pro-team@latest" %}「[Enterprise でリポジトリ管理ポリシーを適用する](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)」{% else %}「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)」{% endif %} および「[デフォルトブランチを変更する](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

### デフォルトブランチ 名を設定する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}
3. [Repository default branch] で、[**Change default branch name now**] をクリックします。 ![[Override] ボタン](/assets/images/help/organizations/repo-default-name-button.png)
4. 新しいブランチに使用したいデフォルト名を入力します。 ![デフォルト名を入力するテキストフィールド](/assets/images/help/organizations/repo-default-name-text.png)
5. [**Update**] をクリックします。 ![[Update] ボタン](/assets/images/help/organizations/repo-default-name-update.png)

### 参考リンク

- /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
