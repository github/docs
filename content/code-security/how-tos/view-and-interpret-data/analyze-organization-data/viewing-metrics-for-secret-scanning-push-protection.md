---
title: Viewing metrics for secret scanning push protection
shortTitle: View secret scanning metrics
allowTitleToDifferFromFilename: true
intro: Monitor push protection's performance across your organization{% ifversion security-overview-enterprise-secret-scanning-metrics %} or enterprise{% endif %} to identify repositories where you may need to take action.
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-sp-only %}'
contentType: how-tos
redirect_from:
  - /code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection-in-your-organization
  - /code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---

{% data reusables.secret-scanning.push-protection-org-metrics-beta %}

## Viewing metrics for {% data variables.product.prodname_secret_scanning %} push protection for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} {% data variables.product.prodname_secret_scanning_caps %}**.
1. Click on an individual secret type or repository to see the associated {% data variables.secret-scanning.alerts %} for your organization.
{% data reusables.security-overview.filter-secret-scanning-metrics %}

## Viewing metrics for {% data variables.product.prodname_secret_scanning %} push protection for an enterprise

You can view metrics for {% data variables.product.prodname_secret_scanning %} push protection across organizations in an enterprise. {% data reusables.security-overview.information-varies-GHAS %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. In the sidebar, click **{% data variables.product.prodname_secret_scanning_caps %} metrics**.
1. Click on an individual secret type or repository to see the associated {% data variables.secret-scanning.alerts %} for your enterprise.
{% data reusables.security-overview.filter-secret-scanning-metrics %}

{% data reusables.security-overview.enterprise-filters-tip %}
