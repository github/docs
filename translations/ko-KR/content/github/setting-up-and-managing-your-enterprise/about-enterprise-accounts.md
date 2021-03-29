---
title: About enterprise accounts
intro: 'With {% data variables.product.prodname_ghe_cloud %}, you can create an enterprise account to enable collaboration between your organizations, while giving administrators a single point of visibility and management.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 엔터프라이즈
---

### About enterprise accounts

An enterprise account allows you to manage multiple {% data variables.product.prodname_dotcom %} organizations and {% data variables.product.prodname_ghe_server %} instances. Your enterprise account must have a handle, like an organization or personal account on {% data variables.product.prodname_dotcom %}. Enterprise administrators can manage settings and preferences, like:

- Member access and management (organization members, outside collaborators)
- Billing and usage ({% data variables.product.prodname_ghe_server %} instances, user licenses, {% data variables.large_files.product_name_short %} packs{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}, {% data variables.product.prodname_GH_advanced_security %} usage{% endif %})
- Security (single sign-on, two factor authentication)
- Requests and support bundle sharing with {% data variables.contact.enterprise_support %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about managing your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." For more information about managing your {% data variables.product.prodname_ghe_server %} billing settings, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

For more information about the differences between {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, see "[{% data variables.product.prodname_dotcom %}'s products](/articles/githubs-products)." To upgrade to {% data variables.product.prodname_enterprise %} or to get started with an enterprise account, contact {% data variables.contact.contact_enterprise_sales %}.

For more information about member access and management, see "{% if currentVersion == "free-pro-team@latest" %}[Managing users in your enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise){% elsif currentVersion == "enterprise-ae@latest" or enterpriseServerVersions contains currentVersion %}[Managing users, organizations, and repositories](/admin/user-management){% endif %}."

For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."

{% if currentVersion == "free-pro-team@latest" %}

### Managing organizations linked to your enterprise account

Organizations are shared accounts where groups of people can collaborate across many projects at once. Owners can manage member access to the organization's data and projects with sophisticated security and administrative features. For more information, see "[About organizations](/articles/about-organizations)."

Enterprise owners can create organizations and link them to the enterprise. After you add organizations to your enterprise account, you can manage and enforce the organizations' policies. Specific enforcement options vary by setting; generally, you can choose to enforce a single policy for every organization in your enterprise account or allow owners to set policy on the organization level.

For more information, see "[Managing organizations in your enterprise account](/articles/managing-organizations-in-your-enterprise-account)" and "[Setting policies for organizations in your enterprise account](/articles/setting-policies-for-organizations-in-your-enterprise-account)."

{% endif %}

### Managing {% data variables.product.prodname_ghe_server %} licenses linked to your enterprise account

{% data reusables.enterprise-accounts.admin-managing-licenses %}
