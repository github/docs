---
title: Reviewing alert dismissal requests
shortTitle: Review alert dismissal requests
intro: Triage and resolve security alerts in your organization or enterprise by regularly reviewing alert dismissal requests.
permissions: '{% data reusables.permissions.security-overview %}'
product: Organizations or enterprises with {% data variables.product.prodname_GHAS_cs_or_sp %}
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/security-overview/review-alert-dismissal-requests
contentType: how-tos
category:
  - Secure at scale
---

## Prerequisites

To receive and manage alert dismissal requests, you need to enable delegated alert dismissal. For an introduction to delegated alert dismissal and enablement instructions for specific features, see:
* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/enable-delegated-alert-dismissal)
* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/enable-delegated-dismissal){% ifversion dependabot-delegated-alert-dismissal %}
* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/enable-delegated-alert-dismissal){% endif %}

## Reviewing requests for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.choose-alert-dismissal-request-view %}
1. Optionally, to filter requests by source repository, reviewer, requester, timeframe, or status, use the dropdown menus at the top of the list of requests.
{% data reusables.security-overview.review-an-alert-dismissal-request %}

## Reviewing requests across your enterprise

> [!NOTE] To review an alert dismissal request at the enterprise level, you must be an organization owner or security manager for the source organization, or be granted the necessary permissions through a custom role.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.code-scanning.click-code-security-enterprise %}
{% data reusables.security-overview.choose-alert-dismissal-request-view %}
1. Optionally, to filter requests by source organization, reviewer, requester, timeframe, or status, use the dropdown menus at the top of the list of requests.
{% data reusables.security-overview.review-an-alert-dismissal-request %}
