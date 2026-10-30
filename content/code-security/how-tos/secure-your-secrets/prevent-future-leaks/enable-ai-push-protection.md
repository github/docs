---
title: Enabling push protection for AI-detected secrets
shortTitle: Enable AI push protection
intro: Block pushes that contain passwords and other unstructured secrets found using AI.
permissions: '{% data reusables.permissions.push-protection %}'
versions:
  feature: secret-scanning-ai-push-protection
contentType: how-tos
category:
  - Protect your secrets
---

> [!NOTE]
> {% data reusables.secret-scanning.ai-push-protection-public-preview %}

When you enable push protection for {% data variables.secret-scanning.ai-detected-secrets %}, {% data variables.product.github %} uses AI to find and block generic secrets, such as passwords, that do not match any pattern. 

Push protection for {% data variables.secret-scanning.ai-detected-secrets %} consumes {% data variables.product.prodname_ai_credits_short %} in addition to your {% data variables.product.prodname_GH_secret_protection %} or {% data variables.product.prodname_GHAS %} license. See [AUTOTITLE](/code-security/concepts/secret-security/push-protection#generic-secrets-found-with-ai) and [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security#secret-protection-ai-credits).

## Prerequisites

* Your repository must have {% data variables.product.prodname_GH_secret_protection %} or {% data variables.product.prodname_GHAS %} enabled.
* Push protection must be enabled. See [AUTOTITLE](/code-security/how-tos/secure-your-secrets/prevent-future-leaks/enable-push-protection).
* {% data variables.secret-scanning.generic-secret-detection-caps %} must be enabled. See [AUTOTITLE](/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-ai-detected-secrets).

{% data reusables.secret-scanning.generic-secret-detection-policy-note %}

## Enabling push protection for {% data variables.secret-scanning.ai-detected-secrets %} for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.UI_secret_protection_scanning %}", to the right of "Push protection for {% data variables.secret-scanning.ai-detected-secrets-caps %}", toggle the setting to **On**.

## Enabling push protection for {% data variables.secret-scanning.ai-detected-secrets %} for your organization

You can enable push protection for {% data variables.secret-scanning.ai-detected-secrets %} for repositories in your organization with a {% data variables.product.prodname_custom_security_configuration %}. {% data variables.product.prodname_security_configurations_caps %} are collections of security settings that you can customize and apply at scale. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).
