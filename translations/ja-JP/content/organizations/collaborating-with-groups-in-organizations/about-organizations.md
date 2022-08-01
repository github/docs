---
title: Organizationについて
intro: Organizationは、洗練されたセキュリティと管理機能を備えた、企業とオープンソースプロジェクトが多くのプロジェクトに渡って協力しあえる共有アカウントです。
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## Organizationについて

{% data reusables.organizations.about-organizations %} アカウントの種類に関する詳しい情報については「[{% data variables.product.prodname_dotcom %}アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

組織に参加してもらうよう、人数に制限無く招待をして、それらのOrganizationメンバーに、Organizationとそのデータに対して様々なレベルのアクセスを付与する様々なロールを与えることができます。 詳しい情報については「[Organization内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

Organizationそのものへのアクセスの管理に加え、別個にOrganizationのリポジトリ、プロジェクトボード、アプリケーションへのアクセスも管理できます。 詳しい情報については「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」、「[Organizationのプロジェクトボードの権限](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)」、「[Organizationのアプリケーションへのアクセス管理](/organizations/managing-access-to-your-organizations-apps)」を参照してください。

アクセス管理をシンプルにし、コラボレーションを拡大するために、カスケードされた権限とメンションを持つ、グループの構造を反映した入れ子チームを作成できます。 詳細は「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

メンバーが作成できるリポジトリの種類の制限などの設定を管理することによって、自分のグループ特有の要求を満たすようにOrganizationを設定できます。 詳しい情報については「[Organizationの設定の管理](/organizations/managing-organization-settings)」を参照してください。

Organizationのセキュリティを強化するために、セキュリティの要件を適用し、OrganizationのAudit logをレビューできます。 詳しい情報については「[Organizationをセキュアに保つ](/organizations/keeping-your-organization-secure)」を参照してください。

{% data reusables.organizations.org-ownership-recommendation %}詳細は、「[Organization の所有権の継続性を管理する](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)」を参照してください。

{% ifversion fpt or ghec %}
## 利用できる機能について

{% data reusables.organizations.organization-plans %}
{% endif %}

## Organization と Enterprise アカウント

{% ifversion fpt %}
Enterpriseアカウントは、オーナーが複数のOrganizationのポリシーと支払いを集中管理できるようにする{% data variables.product.prodname_ghe_cloud %}の機能です。 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)を参照してください。
{% else %}
{% ifversion ghec %}Enterpriseアカウントに属するOrganizationでは、支払いはEnterpriseアカウントのレベルで管理され、支払い設定はOrganizationレベルでは利用できません。{% endif %}EnterpriseオーナーはEnterpriseアカウント内のすべてのOrganizationに対するポリシーを設定するか、OrganizationのオーナーにOrganizationレベルでポリシーを設定できるよう許可することができます。 Organization のオーナーは、Enterprise アカウントのレベルで Organization に強制された設定を変更することはできません。 Organization のポリシーや設定について質問がある場合は Enterprise アカウントのオーナーに問い合わせてください。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} 詳しい情報については「[Enterpriseアカウントの作成](/admin/overview/creating-an-enterprise-account)」を参照してください。

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## Organization の利用規約とデータ保護

会社、非営利団体、グループなどは、Organization として標準の利用規約あるいは企業向け利用規約に合意できます。 詳細は「[企業向け利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。

{% endif %}
