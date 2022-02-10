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

メンバーが Organization でリポジトリを作成できるかどうかを選択できます。 {% ifversion ghec or ghes or ghae %}If you allow members to create repositories, you can choose which types of repositories members can create.{% elsif fpt %}If you allow members to create repositories, you can choose whether members can create both public and private repositories or public repositories only.{% endif %} Organization owners can always create any type of repository.

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} can also restrict members to creating private repositories only. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %}
Enterprise owners can restrict the options you have available for your organization's repository creation policy. 詳しい情報については、「[Enterprise でのリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)」を参照してください。
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

   {% note %}

   **Note:** To restrict members to creating private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.

   {% endnote %}
   {%- endif %}

6. [**Save**] をクリックします。
