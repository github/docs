---
title: Exporting data from the risk and coverage pages
shortTitle: Export data
intro: You can export CSV files of your risk and coverage data from security overview.
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
versions:
  feature: security-overview-export-data
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
---

## About exporting your risk and coverage data

{% data reusables.security-overview.download-csv-files %}

The CSV file you download will contain data corresponding to the filters you have applied to security overview. For example, if you add the filter `dependabot-alerts:enabled`, your file will only contain data for repositories that have enabled {% data variables.product.prodname_dependabot_alerts %}.

{% note %}

**Note:** In the "Teams" column of the CSV file, each repository will list a maximum of 20 teams with write access to that repository. If more than 20 teams have write access to a repository, the data will be truncated.

{% endnote %}

## Exporting risk or coverage data from your organization's security overview

{% data reusables.profile.access_org %}
1. In the "Organizations" section, select the organization for which you would like to download risk and/or coverage data.
{% data reusables.organizations.security-overview %} By default, you will see the risk page of your organization's security overview.
1. If you would instead like to download coverage data for your organization, in the "Security" sidebar, click {% octicon "meter" aria-hidden="true" %} **Coverage**.
1. Next to the search bar, click {% octicon "download" aria-hidden="true" %} **Export CSV**.

    It may take a moment for {% data variables.product.product_name %} to generate the CSV file of your data. Once the CSV file generates, the file will automatically start downloading, and a banner will appear confirming your report is ready.
