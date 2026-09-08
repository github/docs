---
title: Public monitoring for secret scanning
shortTitle: Public monitoring
allowTitleToDifferFromFilename: true
intro: 'Public monitoring detects credentials leaked by your enterprise members in public repositories across {% data variables.product.github %}, giving you visibility into secret exposure beyond your enterprise''s boundaries.'
versions:
  feature: secret-scanning-public-monitoring
product: 'Public monitoring is available for enterprises on {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %} or {% data variables.product.prodname_GH_secret_protection %} enabled. Public monitoring is **not available for {% data variables.enterprise.data_residency %}**.'
contentType: concepts
category:
  - Protect your secrets
---

{% data reusables.secret-scanning.public-monitoring-public-preview %}

## About public monitoring

{% data variables.product.github %} monitors for secrets leaked across {% data variables.product.github %} in real time. Public monitoring attributes publicly exposed secrets back to your enterprise, based on where your people commit.

{% data variables.product.prodname_secret_scanning_caps %} detects secrets in repositories that your enterprise owns. Public monitoring extends this detection to secrets found in arbitrary public repos across {% data variables.product.github %}.com, regardless of whether or not your enterprise owns the repository where it was leaked.

This gives enterprise security administrators visibility into credential exposure they wouldn't otherwise be aware of, helping identify potential risks and leaked secrets which could be exploited by bad actors.

## How public monitoring works

Public monitoring scans public repositories, including non-code content like issue and pull request comments across {% data variables.product.github %} for secrets associated with your enterprise. When a secret is detected, an alert is surfaced in the enterprise-level security overview.

### Attribution methods

Public monitoring uses two methods to associate detected secrets with your enterprise:

* **Enterprise membership:** Secrets leaked by users who are members of your enterprise
* **Verified domain matching:** Secrets leaked by users whose email address matches a verified domain of your enterprise, even if they are not direct enterprise members

Both attribution methods are active when public monitoring is enabled.

## Requirements

To use public monitoring, your enterprise must:

* Have {% data variables.product.prodname_GH_advanced_security %} or {% data variables.product.prodname_GH_secret_protection %} enabled
