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
shortTitle: リポジトリの作成の制限
---

メンバーが Organization でリポジトリを作成できるかどうかを選択できます。 {% ifversion ghec or ghes or ghae %}メンバーにリポジトリの作成を許可した場合、メンバーが作成できるリポジトリの種類を選択できます。{% elsif fpt %}メンバーにリポジトリの作成を許可した場合、メンバーがパブリックとプライベートのリポジトリをどちらも作成できるのか、あるいはパブリックリポジトリだけを作成できるのかが選択できます。{% endif %}Organizationのオーナーは、常にすべての種類のリポジトリを作成できます。

{% ifversion fpt %}
{% data variables.product.prodname_ghe_cloud %}を使用するOrganizationは、プライベートリポジトリだけを作成できるメンバーを制限できます。 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)を参照してください。
{% endif %}

{% ifversion ghec or ghae or ghes %}
Enterpriseのオーナーは、Organizatoinのリポジトリ作成ポリシーで利用できる選択肢を制限できます。 詳しい情報については、「[Enterprise でのリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)」を参照してください。
{% endif %}

{% warning %}

**警告**: この設定で制限されるのは、リポジトリを作成するときの可視性オプションだけです。後からリポジトリの可視性を変更する機能は制限されません。 詳しい情報については「[Organization 内でリポジトリの可視性の変更を制限する](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository creation] で、1 つ以上のオプションを選択します。

   {%- ifversion ghes or ghec or ghae %}
   ![リポジトリ作成のオプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
   {%- elsif fpt %}
   ![リポジトリ作成のオプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png)
   {%- endif %}

   {% ifversion fpt or ghec %}
   {% note %}

   **ノート:** プライベートリポジトリだけを作成できるメンバーを制限するには、Organizationは{% data variables.product.prodname_ghe_cloud %}を使っていなければなりません。 {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %}
   {%- endif %}

6. [**Save**] をクリックします。
