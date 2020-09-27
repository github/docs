---
title: About enterprise accounts
intro: 'With {{ site.data.variables.product.prodname_ghe_cloud }}, you can create an enterprise account to enable collaboration between your organizations, while giving administrators a single point of visibility and management.'
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About enterprise accounts

An enterprise account allows you to manage multiple {{ site.data.variables.product.prodname_dotcom }} organizations and {{ site.data.variables.product.prodname_ghe_server }} instances. Your enterprise account must have a handle, like an organization or personal account on {{ site.data.variables.product.prodname_dotcom }}. Enterprise administrators can manage settings and preferences, like:

- Member access and management (organization members, outside collaborators)
- Billing and usage ({{ site.data.variables.product.prodname_ghe_server }} instances, user licenses, {{ site.data.variables.large_files.product_name_short }} packs)
- Security (single sign-on, two factor authentication)
- Requests and support bundle sharing with {{ site.data.variables.contact.enterprise_support }}

{{ site.data.reusables.enterprise-accounts.enterprise-accounts-billing }}

For more information about the differences between {{ site.data.variables.product.prodname_ghe_cloud }} and {{ site.data.variables.product.prodname_ghe_server }}, see "[{{ site.data.variables.product.prodname_dotcom }}'s products](/articles/githubs-products)." To upgrade to {{ site.data.variables.product.prodname_enterprise }} or to get started with an enterprise account, contact {{ site.data.variables.contact.contact_enterprise_sales }}.

For more information about member access and management, see "[Managing users in your enterprise account](/articles/managing-users-in-your-enterprise-account)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/v4/guides/managing-enterprise-accounts)."
{% endif %}

### Managing organizations linked to your enterprise account

Organizations are shared accounts where groups of people can collaborate across many projects at once. Owners can manage member access to the organization's data and projects with sophisticated security and administrative features. For more information, see "[About organizations](/articles/about-organizations)."

Enterprise owners can create organizations and link them to the enterprise. After you add organizations to your enterprise account, you can manage and enforce the organizations' policies. Specific enforcement options vary by setting; generally, you can choose to enforce a single policy for every organization in your enterprise account or allow owners to set policy on the organization level.

For more information, see "[Managing organizations in your enterprise account](/articles/managing-organizations-in-your-enterprise-account)" and "[Setting policies for organizations in your enterprise account](/articles/setting-policies-for-organizations-in-your-enterprise-account)."

### Managing {{ site.data.variables.product.prodname_ghe_server }} licenses linked to your enterprise account

{{ site.data.reusables.enterprise-accounts.admin-managing-licenses }}
