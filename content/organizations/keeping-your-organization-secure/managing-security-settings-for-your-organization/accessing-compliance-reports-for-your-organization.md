---
title: Accessing compliance reports for your organization
intro: 'You can access {% data variables.product.company_short %}''s compliance reports, such as our SOC reports and Cloud Security Alliance CAIQ self-assessment (CSA CAIQ), for your organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: Access compliance reports
---

## About {% data variables.product.company_short %}'s compliance reports

You can access {% data variables.product.company_short %}'s compliance reports in your organization settings.

{% data reusables.security.compliance-report-list %}

## Accessing compliance reports for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.compliance %}
1. To the right of the report you want to access, click {% octicon "download" aria-hidden="true" %} **Download** or {% octicon "link-external" aria-hidden="true" %} **View**.

   {% data reusables.security.compliance-report-screenshot %}

{% ifversion ghec %}

## Further reading

* "[AUTOTITLE](/admin/overview/accessing-compliance-reports-for-your-enterprise)"

{% endif %}
