---
title: Organization 内でリポジトリの作成を制限する
intro: 'Organization のデータを保護するために、Organization 内でリポジトリを作成するための権限を設定できます。'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

メンバーが Organization でリポジトリを作成できるかどうかを選択できます。 メンバーにリポジトリの作成を許可する場合、メンバーが作成できるリポジトリの種類を選択できます。{% if currentVersion == "free-pro-team@latest" %}メンバーがプライベートリポジトリのみを作成することを許可する場合、Organization は {% data variables.product.prodname_ghe_cloud %} を使用する必要があります。{% endif %} 詳細は「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

Organization のオーナーは、いつでもどんなタイプの Team でも作成できます。

{% if currentVersion == "free-pro-team@latest" %}Enterprise オーナー{% else %}サイト管理者{% endif %}は、Organization のリポジトリ作成ポリシーで使用できるオプションを制限できます。 For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Enforcing repository management policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account)."{% else %}"[Restricting repository creation in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}

{% warning %}

**警告**: この設定で制限されるのは、リポジトリを作成するときの可視性オプションだけです。後からリポジトリの可視性を変更する機能は制限されません。 詳しい情報については「[Organization 内でリポジトリの可視性の変更を制限する](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository creation] で、1 つ以上のオプションを選択します。 ![リポジトリ作成のオプション](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. [**Save**] をクリックします。
