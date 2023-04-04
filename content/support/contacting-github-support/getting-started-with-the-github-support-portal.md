---
title: Getting started with the GitHub Support portal
intro: 'Learn about using the {% data variables.contact.enterprise_portal %} to interact with {% data variables.contact.github_support %}.'
shortTitle: Getting started
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
  - Support
---

## About the {% data variables.contact.enterprise_portal %}

{% data reusables.support.support-portal-notes %}

You can use the {% data variables.contact.contact_landing_page_portal %} to view and manage support tickets, find markdown support, and manage the users in your enterprise account. The {% data variables.contact.enterprise_portal %} offers SSO connected to your {% data variables.product.prodname_dotcom %} account.

For the best experience using the {% data variables.contact.enterprise_portal %}, complete the following actions.

- Identify the {% data variables.product.prodname_dotcom %} user who is an owner of your enterprise account.
- Configure a verified domain. For more information, see "[AUTOTITLE](/github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain)".
- Add owners, billing managers, or support-entitled members to your enterprise account. {% ifversion ghes %}For more information, see "[Adding people to your organization](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)"{% else %}For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)"{% endif %}.

As an {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %} customer, capabilities available to you in the {% data variables.contact.enterprise_portal %} depend on your role in your enterprise account as well as the account you select when you submit a ticket.

As an owner, billing manager, or member with support entitlements, you can view all tickets associated with your enterprise account or organizations managed by your enterprise account. Under certain conditions, you can also comment on tickets opened by other users and associated to your enterprise account. For more information, see "[AUTOTITLE](/support/contacting-github-support/viewing-and-updating-support-tickets)".

{% data reusables.support.enterprise-comment-on-support-tickets %}
