---
title: Configuring reachability analysis for Dependabot alerts
intro: Enable {% data variables.product.prodname_dependabot_reachability %} to prioritize alerts based on whether your application can call vulnerable functions in its dependencies.
allowTitleToDifferFromFilename: true
shortTitle: Configure {% data variables.product.prodname_dependabot_reachability %}
permissions: 'Repository administrators, organization owners, security managers, and enterprise owners can enable or disable {% data variables.product.prodname_dependabot_reachability %} for {% data variables.product.prodname_dependabot_alerts %}'
product: '{% data reusables.gated-features.dependabot-reachability %}'
versions:
  feature: dependabot-reachability
contentType: how-tos
category:
  - Secure your dependencies
---

> [!NOTE]
> {% data reusables.dependabot.reachability-public-preview %}

{% data variables.product.prodname_dependabot_reachability_caps %} helps prioritize {% data variables.product.prodname_dependabot_alerts %} by identifying whether your application can reach vulnerable dependency code. See [AUTOTITLE](/code-security/concepts/supply-chain-security/about-reachability-analysis-for-dependabot-alerts).

## Enabling or disabling {% data variables.product.prodname_dependabot_reachability %} for your repository

{% data variables.product.prodname_dependabot_alerts %} must be enabled for {% data variables.product.prodname_dependabot_reachability %} to work.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. To enable {% data variables.product.prodname_dependabot_reachability %}, you first need to enable {% data variables.product.prodname_dependabot_alerts %}. Under "{% data variables.product.UI_advanced_security %}", to the right of {% data variables.product.prodname_dependabot_alerts %}, toggle the setting to **On**.
1. In the "{% data variables.product.prodname_dependabot %}" section, to the right of "{% data variables.product.prodname_dependabot_reachability_caps %}", toggle the setting **On** or **Off**.

## Enabling {% data variables.product.prodname_dependabot_reachability %} for your organization or enterprise

You can enable {% data variables.product.prodname_dependabot_reachability %} for repositories in your organization or enterprise with a {% data variables.product.prodname_custom_security_configuration %}. {% data variables.product.prodname_security_configurations_caps %} are collections of security settings that you can customize and apply at scale. See:

* [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration)
* [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration)

## Next steps

To review alerts and prioritize fixes, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts).
