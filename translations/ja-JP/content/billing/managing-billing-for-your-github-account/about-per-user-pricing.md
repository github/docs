---
title: ユーザごとの価格付けについて
intro: '{% ifversion fpt or ghec %}For organizations{% ifversion ghec %} and enterprises{% endif %}, your {% else %}Your {% endif %}bill begins with the number of licensed seats you choose.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## ユーザごとの価格付けについて

{% ifversion fpt %}
{% data variables.product.prodname_dotcom_the_website %}上の新しいOrganizationは、{% data variables.product.prodname_free_team %}でパブリック及びオープンソースのプロジェクトを構築するか、ユーザごとの価格付けの有料製品にアップグレードすることができます。 詳しい情報については「[{% data variables.product.company_short %}の製品](/get-started/learning-about-github/githubs-products)」及び「[{% data variables.product.prodname_dotcom %}プランのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

2016 年 5 月 11 日以前に有料プランを使っていた Organization は、既存のリポジトリ単位のプランに留まるか、ユーザごとの価格付けに切り替えることができます。 {% data variables.product.company_short %}は、プランへの強制的な変更の前に12ヶ月間通知します。 プランの切り替えに関する詳しい情報については、「[{% data variables.product.prodname_dotcom %} プランをアップグレードする](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

{% else %}

The foundation of your bill is the number of standard licensed seats that you choose for your{% ifversion ghec %} organization or{% endif %} enterprise.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you can synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} environments. For more information, see "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

In addition to licensed seats, your bill may include other charges, such as {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."
{% endif %}

## People that consume a license

Each person consumes one license, and {% data variables.product.company_short %} identifies individuals by primary email address.

{% data variables.product.company_short %} bills for the following people.

{%- ifversion ghec %}
- Enterprise owners who are a member or owner of at least one organization in the enterprise
{%- endif %}
- Organization members, including owners
- Outside collaborators on private{% ifversion ghec %} or internal{% endif %} repositories owned by your organization, excluding forks
- Anyone with a pending invitation to become an organization owner or member
- Anyone with a pending invitation to become an outside collaborator on private{% ifversion ghec %} or internal{% endif %} repositories owned by your organization, excluding forks
{%- ifversion ghec %}
- Each user on any {% data variables.product.prodname_ghe_server %} instance that you deploy
{%- endif %}
- 休眠ユーザ

{% data variables.product.company_short %} does not bill for any of the following people.

{%- ifversion ghec %}
- Enterprise owners who are not a member or owner of at least one organization in the enterprise
- Enterprise billing managers
{%- endif %}
- Organization billing managers{% ifversion ghec %} for individual organizations on {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Anyone with a pending invitation to become an{% ifversion ghec %} enterprise or{% endif %} organization billing manager
- Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization
{%- ifversion ghes %}
- 停止されたユーザ
{%- endif %}

{% note %}

**注釈**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}

For more information, see {% ifversion not fpt %}"[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" or {% endif %}"[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data variables.product.company_short %} counts each {% ifversion not fpt %}member or {% endif %}outside collaborator once for billing purposes, even if the user account has {% ifversion not fpt %}membership in multiple organizations in an enterprise or {% endif %}access to multiple repositories owned by your organization. 外部のコラボレータに関する詳しい情報については「[Organization内のリポジトリへの外部のコラボレータの追加](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)」を参照してください。

{% ifversion ghes %}Suspended users are not counted when calculating the number of licensed users consuming seats. For more information, see "[Suspending and unsuspending users](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)."{% endif %}

Dormant users do occupy a seat license.{% ifversion ghes %} As such, you can choose to suspend dormant users to release user licenses.{% endif %} For more information, see "[Managing dormant users](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)."

## プランの変更について

{% ifversion fpt %}

{% data variables.product.prodname_dotcom %}プランは、いつでも変更できます。

### ユーザごとのプランのOrganizationでの変更について

{% endif %}

You can add more licensed seats to your {% ifversion fpt or ghec %} organization{% endif %}{% ifversion ghec %} or{% endif %}{% ifversion ghec or ghes %} enterprise{% endif %} at any time. If you pay for more seats than are being used, you can also reduce the number of seats.{% ifversion fpt %} For more information, see "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" and "[Downgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)."

プランに関する質問がある場合は、{% data variables.contact.contact_support %}にお問い合わせください。

Teamのコラボレーション機能をさらにサポートするために、SAMLシングルサインオンや高度な監査のような機能を含む{% data variables.product.prodname_ghe_cloud %}にアップグレードできます。 {% data reusables.enterprise.link-to-ghec-trial %}

{% data variables.product.prodname_ghe_cloud %}のユーザごとの価格付けに関する詳しい情報については[{% data variables.product.prodname_ghe_cloud %}ドキュメンテーション](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)を参照してください。

{% else %}

{% data variables.product.prodname_dotcom_the_website %}でEnterpriseアカウントを使用しており、プランの変更に関する疑問がある場合は、{% data variables.contact.contact_enterprise_sales %}にお問い合わせください。

{% endif %}
{% ifversion ghec %}

{% data variables.product.prodname_ghe_cloud %}上の個々のOrganizationを使っている場合は、プランをアップグレードもしくはダウングレードできます。 詳しい情報については「[{% data variables.product.prodname_dotcom %}プランのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」もしくは「[{% data variables.product.prodname_dotcom %}プランのダウングレード](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)」を参照してください。 プランに関する質問がある場合は、{% data variables.contact.contact_support %}にお問い合わせください。

{% endif %}

{% ifversion fpt %}

### リポジトリごとのプランのOrganizationの変更について

レガシーの有料プラン間でのアップグレード及びダウングレードは、Organizationの支払い設定から行えます。 より多くのプライベートリポジトリを持つプランにアップグレードするなら、{% data variables.product.company_short %}は即座にアカウントを新しいプランに移行し、支払いサイクル中に残っている日数に比例した価格の差異を課金します。

プライベートリポジトリ数が少ないレガシーの有料プランにダウングレードする場合、新しいプランは次の支払日に有効になります。 新しいプランで利用できる以上のプライベートリポジトリを持っている場合、新しいプランが有効になった時点でプライベートリポジトリはロックされます。 プライベートリポジトリの数を減らすには、プライベートリポジトリの一部をパブリックにするか、プライベートリポジトリをローカルにクローンして {% data variables.product.prodname_dotcom %} 上のコピーを削除します。

{% endif %}

## 参考リンク

{%- ifversion not fpt %}
- 「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」
{%- endif %}
- 「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」
