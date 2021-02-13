---
title: Enterprise アカウントについて
intro: 'With {% data variables.product.product_name %}, you can use an enterprise account to give administrators a single point of visibility and management{% if enterpriseServerVersions contains currentVersion %} for billing and license usage{% endif %}.'
redirect_from:
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
versions:
  enterprise-server: '>=2.20'
  github-ae: '*'
---

### {% data variables.product.product_name %} の Enterprise アカウントについて

An enterprise account allows you to manage multiple organizations{% if enterpriseServerVersions contains currentVersion %} and {% data variables.product.prodname_ghe_server %} instances{% else %} on {% data variables.product.product_name %}{% endif %}. Enterprise アカウントは、{% data variables.product.prodname_dotcom %} 上の Organization や個人アカウントのようにハンドルを持たなければなりません。 Enterprise 管理者は、以下のような設定やプリファレンスを管理できます:

- Member access and management (organization members, outside collaborators){% if enterpriseServerVersions contains currentVersion %}
- Billing and usage ({% data variables.product.prodname_ghe_server %} instances, user licenses, {% data variables.large_files.product_name_short %} packs){% endif %}
- Security {% if enterpriseServerVersions contains currentVersion %}(single sign-on, two factor authentication)
- Requests {% if enterpriseServerVersions contains currentVersion %}and support bundle sharing {% endif %}with {% data variables.contact.enterprise_support %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about the management of your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." {% endif %}For more information about managing your {% data variables.product.product_name %} billing settings, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

For more information about the management of users, organizations, data, and policies for {% data variables.product.product_location %}, see "[Managing users, organizations, and repositories](/admin/user-management)" and "[Setting policies for your enterprise](/admin/policies)."

For more information about the management of enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."

{% if enterpriseServerVersions contains currentVersion %}

{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_ghe_server %} の違いについては、「[{% data variables.product.prodname_dotcom %} の製品](/articles/githubs-products)」を参照してください。 {% data variables.product.prodname_enterprise %} にアップグレードする、または Enterprise アカウントを使い始める場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

### Enterprise アカウントにリンクされている {% data variables.product.prodname_ghe_server %} ライセンスの管理

{% data reusables.enterprise-accounts.admin-managing-licenses %}

{% endif %}
