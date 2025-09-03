---
title: Troubleshooting license usage for GitHub Enterprise
intro: You can troubleshoot license usage for your enterprise by auditing license reports.
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Enterprise license usage
redirect_from:
  - /billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise
contentType: how-tos
---

## About unexpected license usage

If the number of consumed licenses for your enterprise is unexpected, you can review your consumed license report to audit your license usage across all your enterprise deployments and subscriptions. For more information, see [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise) and [AUTOTITLE](/billing/reference/license-usage-calculation).

> [!NOTE] For privacy reasons, enterprise owners cannot directly access the details of user accounts unless you use {% data variables.product.prodname_emus %}.

If you find errors, you can try the troubleshooting steps below.

## Troubleshooting consumed licenses

To ensure that each user is only consuming a single {% ifversion enterprise-licensing-language %}license{% else %}seat{% endif %} for different deployments and subscriptions, try the following troubleshooting steps.

1. To help identify users that are consuming multiple {% ifversion enterprise-licensing-language %}licenses{% else %}seats{% endif %}, if your enterprise uses verified domains for {% data variables.product.prodname_ghe_cloud %}, review the list of enterprise members who do not have an email address from a verified domain associated with their account on {% data variables.product.prodname_ghe_cloud %}.

   Often, these are the users who erroneously consume more than one {% ifversion enterprise-licensing-language %}license{% else %}licensed seat{% endif %}. For more information, see [AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain).

   > [!NOTE]
   > To make troubleshooting easier, we recommend using verified domains with your enterprise account on {% data variables.product.prodname_ghe_cloud %}. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

1. After you identify users who are consuming multiple {% ifversion enterprise-licensing-language %}licenses{% else %}seats{% endif %}, make sure that the same email address is associated with all of the user's accounts. For more information about which email addresses must match, see [AUTOTITLE](/billing/reference/license-usage-calculation).
1. If an email address was recently updated or verified to correct a mismatch, view the timestamp of the last license sync job. If a job hasn't run since the correction was made, manually trigger a new job. For more information, see [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

If you still have questions about your consumed licenses after reviewing the troubleshooting information above, you can contact {% data variables.contact.github_support %} through the {% data variables.contact.contact_enterprise_portal %}.
