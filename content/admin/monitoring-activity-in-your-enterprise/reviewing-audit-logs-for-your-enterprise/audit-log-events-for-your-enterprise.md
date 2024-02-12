---
title: Audit log events for your enterprise
intro: Learn about audit log events recorded for your enterprise.
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

{% note %}

{% ifversion ghes %}**Notes**:
- This article contains the events available in the latest version of {% data variables.product.prodname_ghe_server %}. Some of the events may not be available in previous versions.
- This article contains the events that may appear in the enterprise settings, specifically. The audit log in the site admin dashboard may contain additional events not listed here.
-{% else %}**Note:**{% endif %} This article contains the events that may appear in the audit log for an enterprise. For the events that can appear in a user account's security log or the audit log for an organization, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization)."

{% endnote %}

## About audit log events for your enterprise

{% ifversion ghec %}

The scope of the events that appear in your enterprise's audit log depend on whether your enterprise uses {% data variables.product.prodname_emus %}. For more information about {% data variables.product.prodname_emus %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

- If your enterprise does not use {% data variables.product.prodname_emus %}, the audit log only includes events related to the enterprise account and the organizations within the enterprise account, which are listed in this article.
- If your enterprise uses {% data variables.product.prodname_emus %}, the audit log also includes user events for {% data variables.enterprise.prodname_managed_users %}, such as each time the user logs in to {% data variables.product.product_name %} and actions they take within their user account. For a list of these user account events, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events)."

{% endif %}

{% data reusables.audit_log.reference-grouped-by-category %}

<!-- Content after this section is automatically generated -->
