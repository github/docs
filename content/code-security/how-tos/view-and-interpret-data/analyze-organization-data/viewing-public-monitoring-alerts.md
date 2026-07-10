---
title: Viewing public monitoring alerts
shortTitle: View public monitoring alerts
allowTitleToDifferFromFilename: true
intro: 'Find out which credentials your enterprise members have exposed in public repositories across {% data variables.product.github %}.'
permissions: 'Enterprise owners can access the public monitoring page in security overview.'
versions:
  feature: secret-scanning-public-monitoring
contentType: how-tos
category:
  - Secure at scale
---

{% data reusables.secret-scanning.public-monitoring-public-preview %}

## About the public monitoring page

The **Public monitoring** page is a dedicated view within the enterprise-level security overview. It displays alerts for secrets detected in public repositories across {% data variables.product.github %} that are attributed to your enterprise members or users with an email matching your enterprise's verified domain.

> [!NOTE]
> The Public monitoring page is available at the enterprise level only. It is not available at the organization level.

## Prerequisites

Public monitoring must be enabled for your enterprise. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/enabling-public-monitoring-for-your-enterprise).

## Viewing public monitoring alerts

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.security-and-code-quality-tab %}
1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Public monitoring**.

   The alert list shows each detected secret with the following details:

   * The type of secret detected (for example, "Google API Key")
   * A partial secret value
   * Who the leak is attributed to and in which public repository
   * How long ago the secret was detected

1. Click an alert to open the detail panel. The panel includes:
   * The date the secret was committed
   * The full secret literal
   * Attribution details, including the committer's username and email
   * The file location where the secret was detected, with the secret highlighted in context
   * A **Recommendations** tab with suggested remediation steps
