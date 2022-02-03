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

メンバーが Organization でリポジトリを作成できるかどうかを選択できます。 If you allow members to create repositories, you can choose which types of repositories members can create.{% ifversion fpt or ghec %} To allow members to create private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.{% endif %}{% ifversion fpt %} For more information, see "[About repositories](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)" in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

Organization のオーナーは、いつでもどんなタイプの リポジトリ でも作成できます。
{% ifversion ghec or ghae or ghes %}
{% ifversion ghec or ghae %}Enterprise owners{% elsif ghes %}Site administrators{% endif %} can restrict the options you have available for your organization's repository creation policy.{% ifversion ghec or ghes or ghae %} For more information, see "[Restricting repository creation in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}{% endif %}

{% warning %}

**警告**: この設定で制限されるのは、リポジトリを作成するときの可視性オプションだけです。後からリポジトリの可視性を変更する機能は制限されません。 For more information about restricting changes to existing repositories' visibilities, see "[Restricting repository visibility changes in your organization](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository creation", select one or more options.

   {%- ifversion ghes or ghec or ghae %}
   ![リポジトリ作成のオプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
   {%- elsif fpt %}
   ![リポジトリ作成のオプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png)
   {%- endif %}
6. [**Save**] をクリックします。
