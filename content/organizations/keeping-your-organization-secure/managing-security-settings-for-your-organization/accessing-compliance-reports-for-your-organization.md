---
title: Accessing compliance reports for your organization
intro: 'You can access {% data variables.product.company_short %}''s compliance reports, such as our SOC reports and Cloud Security Alliance CAIQ self-assessment (CSA CAIQ), for your organization.'
versions:
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

{% note %}

**Note:** To view compliance reports, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

If you are not using {% data variables.product.prodname_ghe_cloud %}, you can find similar reports at [GitHub Security](https://www.github.com/security).
{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.compliance %}
1. To the right of the report you want to access, click {% octicon "download" aria-hidden="true" %} **Download** or {% octicon "link-external" aria-hidden="true" %} **View**.

   {% data reusables.security.compliance-report-screenshot %}

## Further reading

- "[AUTOTITLE](/admin/overview/accessing-compliance-reports-for-your-enterprise)"
