---
title: About security configurations
shortTitle: Security configurations
intro: 'Security configurations are collections of security settings that you can apply across your enterprise.'
product: '{% data reusables.gated-features.security-configurations-enterprise %}'
versions:
  feature: security-configuration-enterprise-level
topics:
  - Advanced Security
  - Enterprise
  - Security
---

## About {% data variables.product.prodname_security_configurations %}

{% data variables.product.prodname_security_configurations_caps %} simplify the rollout of {% data variables.product.company_short %} security products at scale by helping you define collections of security settings and apply them across your enterprise.

{% data reusables.security-configurations.overview %}

{% ifversion security-configurations-ghes-only %}

When creating a security configuration, keep in mind that:
* Only features installed by a site administrator on your {% data variables.product.prodname_ghe_server %} instance will appear in the UI.
* {% data variables.product.prodname_GH_advanced_security %} features will only be visible if your enterprise or {% data variables.product.prodname_ghe_server %} instance holds a {% data variables.product.prodname_GH_advanced_security %} license.
* Certain features, like {% data variables.product.prodname_dependabot_security_updates %} and {% data variables.product.prodname_code_scanning %} default setup, also require that {% data variables.product.prodname_actions %} is installed on the {% data variables.product.prodname_ghe_server %} instance.

{% endif %}

{% data reusables.security-configurations.emu-note %}

{% data reusables.security-configurations.security-features-use-actions %}

## Preserving default settings for new repositories

If you had default security settings in place for newly created repositories, {% data variables.product.github %} will preserve these settings by automatically creating a "New repository default settings" security configuration for your enterprise. The configuration matches your previous enterprise-level default settings for new repositories as of December, 2024.

The "New repository default settings" configuration will automatically get applied to any newly created repositories in your enterprise, if no organization-level defaults are set.
