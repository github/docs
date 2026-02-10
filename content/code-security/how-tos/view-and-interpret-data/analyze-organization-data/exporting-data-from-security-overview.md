---
title: Exporting data from security overview
shortTitle: Export data
intro: From security overview, you can export CSV files of the data used for your organization or enterprise's overview, risk, coverage, and {% data variables.product.prodname_codeql %} pull request alerts pages.
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-both %}'
versions:
  feature: security-overview-export-data
contentType: how-tos
topics:
  - Security overview
  - Code Security
  - Secret Protection
  - Alerts
  - Organizations
  - Teams
redirect_from:
  - /code-security/security-overview/exporting-data-from-the-risk-and-coverage-pages
  - /code-security/security-overview/exporting-data-from-security-overview
---

{% data reusables.security-overview.download-csv-files %}

The CSV file you download will contain data corresponding to the filters you have applied to security overview. For example, if you add the filter `dependabot-alerts:enabled`, your file will only contain data for repositories that have enabled {% data variables.product.prodname_dependabot_alerts %}.

> [!NOTE]
> In the "Teams" column of the CSV file, each repository will list a maximum of 20 teams with write access to that repository. If more than 20 teams have write access to a repository, the data will be truncated.

## Exporting overview, coverage, and risk data from your organization's security overview

{% data reusables.profile.access_org %}
1. In the "Organizations" section, select the organization for which you would like to download security overview data.
{% data reusables.organizations.security-overview %}
1. In the "Security" sidebar, choose the page that you want to export data from by clicking on **{% octicon "graph" aria-hidden="true" aria-label="graph" %}Overview**, **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Coverage**, **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Risk** or **{% octicon "graph" aria-hidden="true" aria-label="graph" %} {% data variables.product.prodname_codeql %} pull request alerts**.
1. Next to the search bar, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV**.

    It may take a moment for {% data variables.product.github %} to generate the CSV file of your data. Once the CSV file generates, the file will automatically start downloading, and a banner will appear confirming your report is ready. If you are downloading the CSV from the overview page, you will also receive an email when your report is ready, containing a link to download the CSV.

> [!NOTE]
> The summary views ("Overview", "Coverage" and "Risk") show data only for default alerts. {% data variables.product.prodname_code_scanning_caps %} alerts from third-party tools, and {% data variables.product.prodname_secret_scanning %} alerts for non-provider patterns or for ignored directories are all omitted from these views. Consequently, files exported from the summary views do not contain data for these types of alert.

## Exporting overview, coverage, and risk data from your enterprise's security overview

{% ifversion ghes %}{% data reusables.enterprise-accounts.access-enterprise-ghes %}{% else %}{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}{% endif %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. Choose the page that you want to export data from by clicking on **Overview**, **Risk**, or **Coverage**.
1. Next to the search bar, click {% octicon "download" aria-hidden="true" aria-label="download" %} **Export CSV**.

    It may take a moment for {% data variables.product.github %} to generate the CSV file of your data. Once the CSV file generates, the file will automatically start downloading, and a banner will appear confirming your report is ready. If you are downloading the CSV from the overview page, you will also receive an email when your report is ready, containing a link to download the CSV.
