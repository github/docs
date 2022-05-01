---
title: Acceder a los reportes de cumplimiento de tu organización
intro: 'You can access {% data variables.product.company_short %}''s compliance reports, such as our SOC reports and Cloud Security Alliance CAIQ self-assessment (CSA CAIQ), for your organization.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: Acceso a los reportes de cumplimiento
---

## Acerca de los reportes de cumplimiento de {% data variables.product.company_short %}

You can access {% data variables.product.company_short %}'s compliance reports in your organization settings.

{% data reusables.security.compliance-report-list %}


{% note %}

**Note:** To view compliance reports, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Acceder a los reportes de cumplimiento de tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "Compliance reports", to the right of the report you want to access, click {% octicon "download" aria-label="The Download icon" %} **Download** or {% octicon "link-external" aria-label="The external link icon" %} **View**.

   {% data reusables.security.compliance-report-screenshot %}

## Leer más

- "[Acceder a los reportes de cumplimiento para tu empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)"
