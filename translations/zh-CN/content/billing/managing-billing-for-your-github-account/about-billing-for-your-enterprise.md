---
title: About billing for your enterprise
intro: 'You can view billing information for your enterprise{% ifversion ghec or ghes %} account on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
---

## About billing for your enterprise

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} 每天一次，{% data variables.product.prodname_dotcom %} 将计算拥有企业许可证的用户数目。 {% data variables.product.company_short %} 对每个许可的用户计费，而不论用户当天是否登录 {% data variables.product.prodname_ghe_managed %}。

对于商业区，每个用户每天的价格是 1.2580645161 美元。 在 31 天的月份中，每个用户的每月费用为 39 美元。 对于天数较少的月份，每月费用较低。 每个计费月份在日历月第一天的固定时间开始。

如果月中添加许可用户，则该用户将仅包含在其拥有许可证的天数的计数中。 当您移除授权用户时，该用户将在计数中保留到该月底。 因此，如果在一个月中添加用户然后在该月移除该用户，则用户将从添加之日到月底包含在计数中。 如果您在用户被移除的同一个月内重新添加该用户，不会有额外的费用。

例如，以下是在不同日期具有许可证的用户的费用。

| 用户        | 许可日期                                          | 计入的天数 | 费用     |
| --------- | --------------------------------------------- | ----- | ------ |
| @octocat  | 1 月 1 日至 1 月 31 日                             | 31    | $39    |
| @robocat  | 2 月 1 日至 2 月 28 日                             | 28    | $35.23 |
| @devtocat | 1 月 15 日至 1 月 31 日                            | 17    | $21.39 |
| @doctocat | 1 月 1 日至 1 月 15 日                             | 31    | $39    |
| @prodocat | 1 月 7 日至 1 月 15 日                             | 25    | $31.45 |
| @monalisa | 1 月 1 日至 1 月 7 日，<br>1 月 15 日至 1 月 31 日 | 31    | $39    |

{% data variables.product.prodname_ghe_managed %} 的每个实例至少 500 个用户。 {% data variables.product.company_short %} 按每个实例至少 500 个用户计费，即使当天拥有许可证的用户少于 500 个也一样。

您可以在[Azure 帐户门户](https://portal.azure.com)中看到您当前的使用情况。

{% elsif ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.company_short %} bills monthly for the total number of members in your enterprise account, as well as any additional services you use with {% data variables.product.prodname_ghe_cloud %}.

{% elsif ghes %}

Each user on {% data variables.product.product_location %} consumes a seat on your license. {% data variables.product.company_short %} bills monthly for the total number of seats consumed on your license.

{% endif %}

{% data reusables.billing.about-invoices-for-enterprises %} For more information about {% ifversion ghes %}licensing, usage, and invoices{% elsif ghec %}usage and invoices{% endif %}, see the following{% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{%- ifversion ghes %}
- “[关于每用户定价](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)”
{%- endif %}
- "[Viewing the subscription and usage for your enterprise account]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)"
- "[Managing invoices for your enterprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)"

Administrators for your enterprise account on {% data variables.product.prodname_dotcom_the_website %} can access and manage billing for the enterprise. For more information, see "[Roles in an enterprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}."{% elsif ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% ifversion ghec %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."

{% endif %}

{% ifversion ghes %}

{% data reusables.billing.ghes-with-no-enterprise-account %}

{% endif %}

{% ifversion ghec %}

## Per-user pricing

{% data variables.product.company_short %} bills for services consumed on {% data variables.product.prodname_dotcom_the_website %}, each user for deployments of {% data variables.product.prodname_ghe_server %}, and each member of organizations on {% data variables.product.prodname_ghe_cloud %}. For more information about per-user pricing, see "[About per-user pricing](/billing/managing-billing-for-your-github-account/about-per-user-pricing)."

{% data reusables.billing.per-user-pricing-reference %}

For more information about roles, see "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" or "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

有关外部协作者的详细信息，请参阅“[将外部协作者添加到组织中的仓库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”。

{% endif %}

## About synchronization of license usage

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.about-license-sync %} For more information, see {% ifversion ghec %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

{% endif %}

## 延伸阅读

- "[About enterprise accounts](/admin/overview/about-enterprise-accounts)"{% ifversion ghec or ghes %}
- "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)"{% endif %}
