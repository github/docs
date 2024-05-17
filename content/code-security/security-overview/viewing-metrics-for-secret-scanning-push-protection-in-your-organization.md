---
title: Viewing metrics for secret scanning push protection in your organization
shortTitle: View secret scanning metrics
allowTitleToDifferFromFilename: true
intro: 'You can use security overview to see how {% data variables.product.prodname_secret_scanning %} push protection is performing in repositories across your organization, and to identify repositories where you may need to take action.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Secret scanning
  - Organizations
  - Teams
versions:
  feature: security-overview-push-protection-metrics-page
---

{% data reusables.secret-scanning.push-protection-org-metrics-beta %}

## About metrics for {% data variables.product.prodname_secret_scanning %} push protection

If you are an organization owner or security manager, the metrics overview for {% data variables.product.prodname_secret_scanning %} push protection helps you to understand how well you are preventing security leaks in your organization. You can use the metrics to assess how push protection is performing, and to easily identify the repositories where you may need to take action in order to prevent leaks of sensitive information.

The overview shows you a summary of how many pushes containing secrets have been successfully blocked across your organization by push protection, as well as how many times push protection was bypassed.

You can also find more granular metrics, such as:
- The secret types that have been blocked or bypassed the most
- The repositories that have had the most pushes blocked
- The repositories that are bypassing push protection the most
- The percentage distribution of reasons that users give when they bypass the protection

{% ifversion security-overview-additional-tools %}Use the date picker to set the time range that you want to view alert activity and metrics for, and click in the search box to add further filters on the alerts and metrics displayed. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview#additional-filters-for-secret-scanning-alert-views)."

You can see {% data variables.product.prodname_secret_scanning %} metrics if you have:

- The `admin` role for the repository.
- A custom repository role with the "View {% data variables.product.prodname_secret_scanning %} results" fine-grained permissions for the repository. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles#security)."
- Access to alerts for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

The metrics are based on activity from the default period or your selected period.

![Screenshot of the top section of the "Metrics" view for secret scanning on the "Security" tab for an organization.](/assets/images/help/security-overview/security-overview-secret-scanning-metrics-additional-tools.png)

{% else %}

The metrics are based on activity from the default period or your selected period.

![Screenshot of the top section of the "Metrics" view for secret scanning on the "Security" tab for an organization.](/assets/images/help/security-overview/security-overview-secret-scanning-metrics.png)

{% endif %}

## Viewing metrics for {% data variables.product.prodname_secret_scanning %} push protection

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "graph" aria-hidden="true"  %} {% data variables.product.prodname_secret_scanning_caps %}**.
1. Click on an individual secret type or repository to see the associated {% data variables.secret-scanning.alerts %} for your organization.
