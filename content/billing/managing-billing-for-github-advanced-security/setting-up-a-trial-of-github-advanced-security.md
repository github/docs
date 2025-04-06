---
title: Setting up a trial of GitHub Advanced Security
intro: 'You can try {% data variables.product.prodname_GH_advanced_security %} for free.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: Set up an Advanced Security trial
---

{% ifversion metered-ghe-ghas %}

{% data reusables.billing.ghas-metered-billing-note-with-link %}

{% endif %}

## About {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_GH_advanced_security %} provides features that help you improve and maintain the security and quality of code, such as {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and dependency review. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

## About trials of {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-trial-availability %}

{% data reusables.advanced-security.ghas-trial-invoiced %}

During a trial, you can add any number of committers and enable {% data variables.product.prodname_GH_advanced_security %} for any number of organizations. The standard length of the trial is 30 days. If you're taking part in a free trial of {% data variables.product.prodname_ghe_cloud %}, the trial of {% data variables.product.prodname_GH_advanced_security %} will last for the time you have remaining on your trial of {% data variables.product.prodname_ghe_cloud %}.

## Prerequisites

To set up a trial of {% data variables.product.prodname_GH_advanced_security %}, you must be an owner of an enterprise account. For more information, see "[AUTOTITLE](/admin/overview/about-enterprise-accounts)" and "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)."

## Setting up your trial of {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. To the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Start free trial**.
1. Click **Start trial**.

## Finishing your trial

You can finish your trial at any time by purchasing {% data variables.product.prodname_GH_advanced_security %}. If you haven't purchased {% data variables.product.prodname_GH_advanced_security %} by the end of the 30 days, your trial will expire.

{% ifversion metered-ghe-ghas%}

If you pay for {% data variables.product.prodname_ghe_cloud %} with usage-based billing, but did not set up a free trial of {% data variables.product.prodname_GH_advanced_security %}, you can still use usage-based billing to pay for {% data variables.product.prodname_GH_advanced_security %} after the {% data variables.product.prodname_ghe_cloud %} trial ends. For more information, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. To the right of "{% data variables.product.prodname_GH_advanced_security %} trial", select the **Manage** dropdown menu and click **Purchase**.
{% data reusables.advanced-security.purchase-ghas %}

## Further reading

* "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)"
* "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale)"
* "[AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale)"
