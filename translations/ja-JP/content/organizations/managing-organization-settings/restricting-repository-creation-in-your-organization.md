---
title: Organization 内でリポジトリの作成を制限する
intro: Organization のデータを保護するために、Organization 内でリポジトリを作成するための権限を設定できます。
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068320'
---
メンバーが Organization でリポジトリを作成できるかどうかを選択できます。 {% ifversion ghec or ghes or ghae %}メンバーにリポジトリの作成を許可した場合、メンバーが作成できるリポジトリの種類を選択できます。{% elsif fpt %}メンバーにリポジトリの作成を許可した場合、メンバーがパブリックとプライベートのリポジトリをどちらも作成できるのか、あるいはパブリックリポジトリだけを作成できるのかが選択できます。{% endif %}Organizationのオーナーは、常にすべての種類のリポジトリを作成できます。

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} を使う Organization は、プライベート リポジトリだけを作成できるメンバーも制限できます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)を参照してください。
{% endif %}

{% ifversion ghec or ghae or ghes %} Enterprise のオーナーは、Organizatoin のリポジトリ作成ポリシーで利用できるオプションを制限できます。 詳細については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)」を参照してください。
{% endif %}

{% warning %}

**警告**: この設定で制限されるのは、リポジトリを作成するときの可視性オプションだけです。後からリポジトリの可視性を変更する機能は制限されません。 既存のリポジトリの可視性に対する変更の制限について詳しくは、「[Organizatoin 内のリポジトリの可視性の変更を制限する](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)」をご覧ください。

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [Repository creation] で、1 つ以上のオプションを選択します。

   {%- ifversion ghes or ghec or ghae %} ![リポジトリの作成オプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![リポジトリの作成オプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **注:** プライベート リポジトリだけを作成できるメンバーを制限するには、Organization は {% data variables.product.prodname_ghe_cloud %} を使用する必要があります。 {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. **[保存]** をクリックします。
