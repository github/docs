---
title: Accessing compliance reports for your enterprise
intro: 'You can access {% data variables.product.company_short %}''s compliance reports, such as our SOC reports and Cloud Security Alliance CAIQ self-assessment (CSA CAIQ), for your enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Enterprise owners can access compliance reports for the enterprise.
shortTitle: Access compliance reports
---

## About {% data variables.product.company_short %}'s compliance reports

You can access {% data variables.product.company_short %}'s compliance reports in your enterprise settings.

{% data reusables.security.compliance-report-list %}

## Accessing compliance reports for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. Under "Resources", to the right of the report you want to access, click {% octicon "download" aria-label="The Download icon" %} **Download** or {% octicon "link-external" aria-label="The external link icon" %} **View**.

   {% data reusables.security.compliance-report-screenshot %}

## Further reading

- "[Accessing compliance reports for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)"{% ifversion enterprise-member-csv %}
- "[Exporting membership information for your enterprise](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)"{% endif %}
