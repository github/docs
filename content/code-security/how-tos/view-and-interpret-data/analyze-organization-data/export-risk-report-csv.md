---
title: Exporting the secret risk assessment report to CSV
shortTitle: Export risk report CSV
intro: Export the {% data variables.product.prodname_secret_risk_assessment %} report to a CSV file for detailed investigation and stakeholder sharing.
product: '{% data reusables.gated-features.secret-risk-assessment-report %}'
permissions: '{% data reusables.permissions.secret-risk-assessment-report-generation %}'
contentType: how-tos
versions:
  feature: secret-risk-assessment
topics:
  - Code Security
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/export-risk-report-csv
---

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. Towards the top-right side of the report, select the {% octicon "kebab-horizontal" aria-label="More options" %} dropdown menu, then click {% octicon "download" aria-hidden="true" aria-label="download" %} **Download CSV**.

## Next steps

To better understand the fields of your CSV file, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/risk-report-csv-contents).
