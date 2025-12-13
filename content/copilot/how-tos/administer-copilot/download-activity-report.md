---
title: Downloading a GitHub Copilot activity report for your organization or enterprise
intro: Monitor Copilot license usage with a detailed report.
permissions: Enterprise owners and organization owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
versions:
  feature: copilot
allowTitleToDifferFromFilename: true
topics:
  - Copilot
  - Enterprise
shortTitle: Download activity report
redirect_from:
  - /copilot/how-tos/administer/download-activity-report
contentType: how-tos
category:
  - Manage Copilot for a team
---

You can download a CSV report for {% data variables.product.prodname_copilot_short %} user activity in your organization. The data in the report allows you to:

* Accurately monitor {% data variables.product.prodname_copilot_short %} license usage accurately.
* Understand patterns in user authentication.
* Manage licenses and measure key performance indicators.

## Downloading the report for an enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the "Billing and licensing" sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. Next to "Copilot", click **{% octicon "download" aria-hidden="true" aria-label="download" %} Get activity report**.

## Downloading the report for an organization

1. Navigate to your organization settings.
1. In the left sidebar, click **Copilot**, then click **Access**.
1. Next to "Access management", click **Get usage report**, then click **Get activity report**.

   ![Screenshot of the "Access" page. The "Get activity report" button is highlighted with an orange outline.](/assets/images/help/copilot/activity-report-org.png)

## Report fields

For field definitions and details of included features, see [AUTOTITLE](/copilot/reference/metrics-data#copilot-activity-report).
