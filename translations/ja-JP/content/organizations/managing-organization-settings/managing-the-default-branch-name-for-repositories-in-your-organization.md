---
title: Organization のリポジトリのデフォルブランチ名を管理する
intro: '{% data variables.product.product_location %} 上の組織でメンバーが作成するリポジトリについて、既定のブランチ名を設定できます。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
ms.openlocfilehash: 38bd35506728f4437c9a1644235fe748c6a8a58a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886607'
---
## デフォルトブランチ名について

Organization のメンバーが Organization で新しいリポジトリを作成するとき、リポジトリにはブランチが 1 つ含まれます。これがデフォルトブランチです。 Organization のメンバーが新しいリポジトリを作成するとき、{% data variables.product.product_name %} はブランチを 1 つ作成し、それをリポジトリのデフォルトブランチに設定します。 既定のブランチの詳細については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)」を参照してください。

{% data reusables.branches.change-default-branch %}

Enterprise のオーナーが Enterprise のデフォルトブランチ名にポリシーを適用している場合、Organization のデフォルトブランチ名を設定することはできません。 代わりに、個々のリポジトリのデフォルトブランチを変更できます。 詳細については、{% ifversion fpt %}「[Enterprise でリポジトリ管理ポリシーを適用する](/enterprise-cloud@latest/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)」{% else %}「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)」{% endif %} および「[既定のブランチを変更する](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

## デフォルトブランチ 名を設定する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
3. [リポジトリの既定のブランチ] で、 **[既定のブランチ名を今すぐ変更]** をクリックします。
    ![[オーバーライド] ボタン](/assets/images/help/organizations/repo-default-name-button.png)
4. 新しいブランチに使用したいデフォルト名を入力します。
    ![既定の名前を入力するテキスト ボックス](/assets/images/help/organizations/repo-default-name-text.png)
5. **[Update]** をクリックします。
    ![[更新] ボタン](/assets/images/help/organizations/repo-default-name-update.png)

## 参考資料

- 「[リポジトリの既定のブランチ名を管理する](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)」
