---
title: About enterprise accounts
intro: Learn how enterprise accounts enable scalability by simplifying administration and billing across multiple organizations.
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
  - /admin/overview/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
---

## What are enterprise accounts?

<!-- expires 2024-10-01 -->
{% ifversion ghec %}
> [!NOTE] Currently, {% data variables.product.prodname_ghe_cloud %} customers who use a single organization are being automatically upgraded to an enterprise account at no additional cost. For details, see "[AUTOTITLE](/admin/managing-your-enterprise-account/creating-an-enterprise-account#what-will-happen-after-i-upgrade-my-organization)."
{% endif %}
<!-- end expires 2024-10-01 -->

An enterprise account enables centralized management for **multiple organizations**.

Administrators for the enterprise account can:

* View and manage enterprise membership
* Manage billing and usage
* Configure security, such as single sign-on, IP allow lists, SSH certificate authorities, and two-factor authentication
* Stream audit and Git events data
* Use internal repositories
* Access features like {% data variables.product.prodname_copilot_enterprise %} and {% data variables.product.prodname_advanced_security %}
* Enforce policies. See "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} See "[AUTOTITLE](/admin/managing-your-enterprise-account/creating-an-enterprise-account)."

{% endif %}

## What if I use multiple deployment options?

If you use both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, you'll have an enterprise account for each.

For the most part, you will manage each enterprise account separately. For example, you will configure the policies and settings for your {% data variables.product.prodname_ghe_server %} instance using the enterprise account on {% data variables.product.prodname_ghe_server %}.

However, you can also use the enterprise account on {% data variables.product.prodname_ghe_cloud %} to view all license usage across all deployments. This allows you to ensure people with accounts in both environments only consume one user license. See "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

## What if I only use {% data variables.product.prodname_ghe_server %}?

Even if you **only** use {% data variables.product.prodname_ghe_server %}, we recommend creating an enterprise account on {% data variables.product.prodname_ghe_cloud %}. This will make it easier to contact {% data variables.contact.enterprise_support %} and share support bundles with them.

To create an additional enterprise account on {% data variables.product.prodname_ghe_cloud %}, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

## Further reading

* "[AUTOTITLE](/graphql/guides/managing-enterprise-accounts)" in the GraphQL API documentation {% ifversion ghec %}
* "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)"{% endif %}
