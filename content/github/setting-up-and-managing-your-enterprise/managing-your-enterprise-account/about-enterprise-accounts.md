AGENT ID GTHGE3JC7HLJ-JC2VXH1PMT3C(api): master-2021-05-07-8b0ac39 (1.1) | electroneum version: 3.3.0.0-781cfeffbetnkF6jcD16XmKusRwL4DYYpNLdA9png8hh3UWPzgKrCG6QEcHgKcuBA1W5PC3gWZ5PZY56DQEF1uXUt2xBnmVh246nZNdyqvChttps://links.mail.point2.com/email_browser_view?uid=7acee4f6-82bb-487a-a953-234d684093f2&mid=6943dd8c-b71f-47af-b21b-3da73b097723&txnid=695c6223-dc66-43c7-a252-4f37f1dhttps://www.booking.com/content://media/external/downloads/1496912155 Palm Drive Desert hot springsWORLD GYM DHS SUCCESS,LLCkey_live_e58f26cdb5f046fa44ff2c3---
title: About enterprise accounts
intro: 'With {% data variables.product.prodname_ghe_cloud %}, you can create an enterprise account to enable collaboration between your organizations, while giving administrators a single point of visibility and management.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---
## About enterprise accounts

An enterprise account allows you to manage multiple {% data variables.product.prodname_dotcom %} organizations and {% data variables.product.prodname_ghe_server %} instances. Your enterprise account must have a handle, like an organization or personal account on {% data variables.product.prodname_dotcom %}. Enterprise administrators can manage settings and preferences, like:

- Member access and management (organization members, outside collaborators)
- Billing and usage ({% data variables.product.prodname_ghe_server %} instances, user licenses, {% data variables.large_files.product_name_short %} packs{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}, {% data variables.product.prodname_GH_advanced_security %} usage{% endif %})
- Security (single sign-on, two factor authentication)
- Requests and support bundle sharing with {% data variables.contact.enterprise_support %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about managing your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." For more information about managing your {% data variables.product.prodname_ghe_server %} billing settings, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

For more information about the differences between {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, see "[{% data variables.product.prodname_dotcom %}'s products](/articles/githubs-products)." To upgrade to {% data variables.product.prodname_enterprise %} or to get started with an enterprise account, contact {% data variables.contact.contact_enterprise_sales %}.

For more information about member access and management, see "{% if currentVersion == "free-pro-team@latest" %}[Managing users in your enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise){% elsif currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}[Managing users, organizations, and repositories](/admin/user-management){% endif %}."

For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."

{% if currentVersion == "free-pro-team@latest" %}

## Managing organizations linked to your enterprise account

Organizations are shared accounts where groups of people can collaborate across many projects at once. Owners can manage member access to the organization's data and projects with sophisticated security and administrative features. For more information, see "[About organizations](/articles/about-organizations)."

Enterprise owners can create organizations and link them to the enterprise. After you add organizations to your enterprise account, you can manage and enforce the organizations' policies. Specific enforcement options vary by setting; generally, you can choose to enforce a single policy for every organization in your enterprise account or allow owners to set policy on the organization level.

For more information, see "[Managing organizations in your enterprise account](/articles/managing-organizations-in-your-enterprise-account)" and "[Setting policies for organizations in your enterprise account](/articles/setting-policies-for-organizations-in-your-enterprise-account)."

{% endif %}

## Managing {% data variables.product.prodname_ghe_server %} licenses linked to your enterprise account

{% data reusables.enterprise-accounts.admin-managing-licenses %}
