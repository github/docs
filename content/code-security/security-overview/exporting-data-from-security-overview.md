---
title: Exporting data from security overview
shortTitle: Export data
intro: You can export CSV files of your organization's{% ifversion security-overview-export-dashboard-data %} overview,{% endif %} risk and coverage data from security overview.
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
redirect_from:
  - /code-security/security-overview/exporting-data-from-the-risk-and-coverage-pages
---

## About exporting your security overview data

{% data reusables.security-overview.download-csv-files %}

{% ifversion security-overview-export-dashboard-data %}The overview page contains data about security alerts across your organization, while the risk and coverage pages contain data about repositories and how they are affected by security alerts or covered by security features.{% endif %}

The CSV file you download will contain data corresponding to the filters you have applied to security overview. For example, if you add the filter `dependabot-alerts:enabled`, your file will only contain data for repositories that have enabled {% data variables.product.prodname_dependabot_alerts %}.

{% note %}

**Note:** In the "Teams" column of the CSV file, each repository will list a maximum of 20 teams with write access to that repository. If more than 20 teams have write access to a repository, the data will be truncated.

{% endnote %}

## Exporting data from your organization's security overview

{% data reusables.profile.access_org %}
1. In the "Organizations" section, select the organization for which you would like to download security overview data.
{% data reusables.organizations.security-overview %}
1. In the "Security" sidebar, choose the page that you want to export data from by clicking on {% ifversion security-overview-export-dashboard-data %}**{% octicon "graph" aria-hidden="true"  %}Overview**, {% endif %}**{% octicon "meter" aria-hidden="true" %} Coverage** or **{% octicon "shield" aria-hidden="true" %} Risk**.
1. Next to the search bar, click {% octicon "download" aria-hidden="true" %} **Export CSV**.

    It may take a moment for {% data variables.product.product_name %} to generate the CSV file of your data. Once the CSV file generates, the file will automatically start downloading, and a banner will appear confirming your report is ready. {% ifversion security-overview-export-dashboard-data %}If you are downloading the CSV from the overview page, you will also receive an email when your report is ready, containing a link to download the CSV.{% endif %}

{% ifversion secret-scanning-non-provider-patterns %}

{% note %}

**Note:** The summary views ({% ifversion security-overview-dashboard %}"Overview", {% endif %}"Coverage" and "Risk") show data only for high-confidence alerts. {% data variables.product.prodname_code_scanning_caps %} alerts from third-party tools, and {% data variables.product.prodname_secret_scanning %} alerts for non-provider patterns or for ignored directories are all omitted from these views. Consequently, files exported from the summary views do not contain data for these types of alert.

{% endnote %}

{% endif %}
