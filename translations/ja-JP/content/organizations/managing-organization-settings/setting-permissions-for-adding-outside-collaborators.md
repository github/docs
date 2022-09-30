---
title: 外部のコラボレーターを追加するための権限を設定する
intro: Organization のデータを保護し、Organization 内で使用されている有料ライセンスの数が無駄遣いされないようにするために、外部コラボレーターを Organization のリポジトリに追加できる人を構成できます。
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: eadf4f805775a99f763ec4df211fe6ea9735dabc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119245'
---
デフォルトでは、リポジトリへの管理アクセスを持つ人は、そのリポジトリで作業してもらうために外部のコラボレータを招待できます。 外部のコラボレータを追加する機能は、Organizationのオーナーのみに制限することもできます。

{% ifversion ghec %} {% note %}

**注:** {% data variables.product.prodname_ghe_cloud %} を使う Organization だけが、外部のコラボレータを招待する機能を Organization のオーナーに制限できます。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}Organization がエンタープライズアカウントによって所有されているとき、{% else %}{% endif %}エンタープライズ所有者がエンタープライズレベルでポリシーを設定している場合、Organization にこの設定を構成できないことがあります。 詳しくは、「Enterprise でリポジトリ管理ポリシーを適用する{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}」を参照してください。

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion ghes < 3.3 %}
5. [リポジトリ招待] の下で、 **[この Organization のリポジトリに外部コラボレータを招待することをメンバーに許可する]** を選択します。
   ![外部コラボレータを Organization リポジトリに招待することをメンバーに許可するためのチェックボックス](/assets/images/help/organizations/repo-invitations-checkbox-old.png){% else %}
5. [リポジトリの外部コラボレータ] で **[この Organization のリポジトリに外部コラボレータを招待することをリポジトリ管理者に許可する]** の選択を解除します。
  ![外部コラボレータを Organization リポジトリに招待することをリポジトリ管理者に許可するためのチェックボックス](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% endif %}
6. **[保存]** をクリックします。
