---
title: ユーザごとの価格付けについて
intro: 'With per-user pricing, organizations {% ifversion ghec %}and enterprises {% endif %}pay based on team size to access advanced collaboration and management tools for teams, and optionally, security, compliance, and deployment controls.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## ユーザごとの価格付けについて

New organizations on {% data variables.product.prodname_dotcom_the_website %} can build public and open-source projects with {% data variables.product.prodname_free_team %}, or upgrade to a paid product with per-user pricing. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products)" and "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)."

{% ifversion ghec %}Per-user pricing applies to all organizations that belong to your enterprise on {% data variables.product.prodname_dotcom_the_website %}, and to organizations using  {% data variables.product.prodname_ghe_cloud %} that are not part of an enterprise. Each{% elsif fpt %}Per-user pricing means that each{% endif %} billing cycle, {% data variables.product.company_short %} charges for each member or outside collaborator within your organization{% ifversion ghec %} or enterprise{% endif %}. You also pay for each pending member or outside collaborator who has not yet accepted an invitation. {% data variables.product.company_short %} does not charge for members with the billing manager role{% ifversion ghec %}, or for enterprise owners who are not also a member of at least one organization in the enterprise{% endif %}. For more information, see {% ifversion ghec %}"[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" or {% endif %}{% ifversion fpt or ghec %}"[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."{% endif %}

{% data variables.product.company_short %} counts each {% ifversion ghec %}member or {% endif %}outside collaborator once for billing purposes, even if the person has {% ifversion ghec %}membership in multiple organizations in an enterprise or {% endif %}access to multiple repositories owned by your organization.

For more information about outside collaborators, see "[Adding outside collaborators to repositories in your organization](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)."

{% ifversion ghec %}

If you deploy {% data variables.product.prodname_ghe_server %}, your usage includes licenses for each user on your instance. For more information about additional services and billing for {% data variables.product.prodname_ghe_cloud %}, see "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."

{% elsif fpt %}

2016 年 5 月 11 日以前に有料プランを使っていた Organization は、既存のリポジトリ単位のプランに留まるか、ユーザごとの価格付けに切り替えることができます。 {% data variables.product.company_short %} will notify you twelve months before any mandated change to your subscription. プランの切り替えに関する詳しい情報については、「[{% data variables.product.prodname_dotcom %} プランをアップグレードする](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

{% endif %}

## Overview of per-user pricing

{% data reusables.billing.per-user-pricing-reference %}

## About changes to your subscription

{% ifversion fpt %}

You can change your {% data variables.product.prodname_dotcom %} subscription at any time.

### About changes for organizations on per-user plans

{% endif %}

You can add more users to your organization{% ifversion ghec %} or enterprise at any time{% endif %}. If you pay for more users than are currently active, you can also reduce the number of paid users.{% ifversion fpt %} For more information, see "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" and "[Downgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)."

If you have questions about your subscription, contact {% data variables.contact.contact_support %}.

Teamのコラボレーション機能をさらにサポートするために、保護されたブランチやプライベートリポジトリでのコードオーナーのような機能を含む{% data variables.product.prodname_ghe_cloud %}にアップグレードできます。 {% data reusables.enterprise.link-to-ghec-trial %}

For more information about per-user pricing for {% data variables.product.prodname_ghe_cloud %}, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% elsif ghec %}

If you use an enterprise account on {% data variables.product.prodname_dotcom_the_website %} and have questions about changes to your subscription, contact {% data variables.contact.contact_enterprise_sales %}.

If you use an individual organization on {% data variables.product.prodname_ghe_cloud %}, you can upgrade or downgrade your subscription. For more information, see "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" or "[Downgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)." If you have questions about your subscription, contact {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### About changes for organizations on per-repository plans

レガシーの有料プラン間でのアップグレード及びダウングレードは、Organizationの支払い設定から行えます。 When you upgrade to a plan with more private repositories, {% data variables.product.company_short %} immediately moves your account to your new plan and bills you for the difference in price, prorated for the number of days left in your billing cycle.

プライベートリポジトリ数が少ないレガシーの有料プランにダウングレードする場合、新しいプランは次の支払日に有効になります。 新しいプランで利用できる以上のプライベートリポジトリを持っている場合、新しいプランが有効になった時点でプライベートリポジトリはロックされます。 プライベートリポジトリの数を減らすには、プライベートリポジトリの一部をパブリックにするか、プライベートリポジトリをローカルにクローンして {% data variables.product.prodname_dotcom %} 上のコピーを削除します。

{% endif %}

## 参考リンク

{%- ifversion ghec %}
- 「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」
{%- endif %}
- 「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」
