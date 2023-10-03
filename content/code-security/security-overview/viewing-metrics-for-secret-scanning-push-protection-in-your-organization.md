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
- the secret types that have been blocked or bypassed the most
- the repositories that have had the most pushes blocked
- the repositories that are bypassing push protection the most
- the percentage distribution of reasons that users give when they bypass the protection

The metrics are based on activity from the last 30 days.

![Screenshot of the top section of the "Metrics" view for secret scanning on the "Security" tab for an organization.](/assets/images/help/security-overview/security-overview-secret-scanning-metrics.png)

## Viewing metrics for {% data variables.product.prodname_secret_scanning %} push protection

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "graph" aria-hidden="true"  %} {% data variables.product.prodname_secret_scanning_caps %}**.
1. Click on an individual secret type or repository to see the associated {% data variables.secret-scanning.alerts %} for your organization.
