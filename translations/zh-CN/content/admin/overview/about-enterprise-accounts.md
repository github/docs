---
title: 关于企业帐户
intro: 'With {% data variables.product.product_name %}, you can use an enterprise account to give administrators a single point of visibility and management{% if enterpriseServerVersions contains currentVersion %} for billing and license usage{% endif %}.'
redirect_from:
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
versions:
  enterprise-server: '>=2.20'
  github-ae: '*'
---

### 关于 {% data variables.product.product_name %} 上的企业账户

An enterprise account allows you to manage multiple organizations{% if enterpriseServerVersions contains currentVersion %} and {% data variables.product.prodname_ghe_server %} instances{% else %} on {% data variables.product.product_name %}{% endif %}. 您的企业帐户必须有操作点，如 {% data variables.product.prodname_dotcom %} 上的组织或个人帐户。 企业管理员可以管理设置和首选项，如：

- Member access and management (organization members, outside collaborators){% if enterpriseServerVersions contains currentVersion %}
- Billing and usage ({% data variables.product.prodname_ghe_server %} instances, user licenses, {% data variables.large_files.product_name_short %} packs){% endif %}
- Security{% if enterpriseServerVersions contains currentVersion %}(single sign-on, two factor authentication)
- Requests {% if enterpriseServerVersions contains currentVersion %}and support bundle sharing {% endif %}with {% data variables.contact.enterprise_support %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about managing your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." {% endif %}For more information about managing your {% data variables.product.product_name %} billing settings, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

{% if enterpriseServerVersions contains currentVersion %}

有关 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_ghe_server %} 之间差异的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/articles/githubs-products)”。 要升级至 {% data variables.product.prodname_enterprise %} 或开始使用企业帐户，请联系 {% data variables.contact.contact_enterprise_sales %}。

### 管理链接至企业帐户的 {% data variables.product.prodname_ghe_server %} 许可

{% data reusables.enterprise-accounts.admin-managing-licenses %}

{% endif %}
