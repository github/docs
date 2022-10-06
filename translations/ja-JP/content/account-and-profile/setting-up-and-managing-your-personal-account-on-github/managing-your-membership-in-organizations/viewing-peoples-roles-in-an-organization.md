---
title: Organization の人のロールを表示する
intro: 'Organization 内の人のリストを表示し、それらのロールでフィルタリングすることができます。 Organization ロールの詳細については、「[ 内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。'
permissions: Organization members can see people's roles in the organization.
redirect_from:
  - /articles/viewing-people-s-roles-in-an-organization
  - /articles/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: View people in an organization
ms.openlocfilehash: e0632ffeb394615b7b64ad55673b69fc738bca27
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '146179632'
---
## 組織のロールを表示する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Organization 内の人のリストが表示されます。 ロールでリストをフィルター処理するには、 **[ロール]** をクリックし、検索するロールを選択します。
  ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

Organization で {% data variables.product.prodname_ghe_cloud %} を使用している場合は、すべての企業のOrganization の課金設定とポリシーを管理する Enterprise オーナーを表示することもできます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization)を参照してください。

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}
## Organization 内の Enterprise オーナーとそのロールを表示する

Organization が Enterprise アカウントで管理されている場合は、すべての企業のOrganization の課金設定とポリシーを管理するEnterprise オーナーを表示できます。 Enterprise アカウントの詳細については、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

また、Enterprise オーナーが Organization 内で特定のロールを持っているかどうかを確認することもできます。 Enterprise オーナーは、Organization のメンバーや、その他の Organization のロールになることもできるほか、Organization に所属しない場合もあります。

{% note %}

**注:** Organization オーナーである場合は、Enterprise オーナーを Organization のロールに招待することもできます。 Enterprise オーナーが招待に同意した場合、Organization 内のシートまたはライセンスは、Enterprise で使用可能なライセンスから使用されます。 ライセンスのしくみの詳細については、「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)」を参照してください。

{% endnote %}

| **Enterprise のロール** | **Organization のロール** | **Organization のアクセスまたは影響** |
|----|----|----|----|
| Enterprise owner | 所属していないか、正式な Organization ロールがない | Organization のコンテンツまたはリポジトリにアクセスすることはできませんが、Organization に影響を与える Enterprise 設定とポリシーを管理します。 |
| Enterprise owner | Organization owner | Team などを通じて、Organization の設定を構成し、Organization のリソースへのアクセスを管理できます。 | 
| Enterprise owner | Organization のメンバー | Organization の設定にアクセスすることなく、リポジトリなどの Organization のリソースとコンテンツにアクセスできます。 |

Organization 内のすべてのロールを確認するには、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。 {% ifversion custom-repository-roles %}Organization メンバーは、特定のリポジトリのカスタム ロールを持つこともできます。 詳細については、「[Organization のカスタムリポジトリロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。{% endif %}

Enterprise オーナー ロールの詳細については、「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)」を参照してください。 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 左側のサイドバーの [Enterprise のアクセス許可] で、 **[Enterprise オーナー]** をクリックします。
  ![サイドバー メニューの [Enterprise オーナー] オプションのスクリーンショット](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. お使いの Enterprise の Enterprise オーナーの一覧を表示します。 Enterprise オーナーが Organization のメンバーでもある場合は、Organization 内のロールを確認できます。

  ![Enterprise オーナーとその Organization でのロールを示すリストのスクリーンショット](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
