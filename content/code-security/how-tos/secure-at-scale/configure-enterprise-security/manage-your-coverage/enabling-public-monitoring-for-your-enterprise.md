---
title: Enabling public monitoring for your enterprise
shortTitle: Enable public monitoring
intro: 'Start detecting secrets your enterprise members leak in public repositories outside your enterprise''s boundaries.'
versions:
  feature: secret-scanning-public-monitoring
permissions: Enterprise owners can enable public monitoring for their enterprise.
contentType: how-tos
category:
  - Secure at scale
---

{% data reusables.secret-scanning.public-monitoring-public-preview %}

## Prerequisites

Before enabling public monitoring, ensure your enterprise has:

* {% data variables.product.prodname_GH_advanced_security %} or {% data variables.product.prodname_GH_secret_protection %} enabled
* While not necessary, we recommend having at one verified domain configured (see [AUTOTITLE](/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)) in order to get the full value for the feature.

## Enabling public monitoring

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
1. Under "Additional Settings," toggle **Public monitoring**.
