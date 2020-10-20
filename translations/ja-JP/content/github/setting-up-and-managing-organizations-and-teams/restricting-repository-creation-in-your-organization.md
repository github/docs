---
title: Organization 内でリポジトリの作成を制限する
intro: 'Organization のデータを保護するために、Organization 内でリポジトリを作成するための権限を設定できます。'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

メンバーが Organization でリポジトリを作成できるかどうかを選択できます。 If you allow members to create repositories, you can choose which types of repositories members can create.{% if currentVersion == "free-pro-team@latest" %} To allow members to create private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.{% endif %} For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

Organization のオーナーは、いつでもどんなタイプの Team でも作成できます。

{% if currentVersion == "free-pro-team@latest" %}Enterprise owners{% else %}Site administrators{% endif %} can restrict the options you have available for your organization's repository creation policy. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Enforcing repository management policies in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account)."{% else %}"[Restricting repository creation in your instance](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)."{% endif %}

{% warning %}

**警告**: この設定で制限されるのは、リポジトリを作成するときの可視性オプションだけです。後からリポジトリの可視性を変更する機能は制限されません。 詳しい情報については「[Organization 内でリポジトリの可視性の変更を制限する](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository creation", select one or more options. ![リポジトリ作成のオプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. [**Save**] をクリックします。
