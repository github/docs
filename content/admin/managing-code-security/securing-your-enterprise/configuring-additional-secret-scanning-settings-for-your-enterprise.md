---
title: Configuring additional secret scanning settings for your enterprise
shortTitle: Configure additional settings
intro: 'Learn how to configure additional {% data variables.product.prodname_secret_scanning %} settings for your enterprise.'
permissions: '{% data reusables.permissions.security-configuration-enterprise-enable %}'
versions:
  feature: security-configuration-enterprise-level
topics:
  - Advanced Security
  - Enterprise
  - Security
---

## About additional settings for {% data variables.product.prodname_secret_scanning %}

There are some additional {% data variables.product.prodname_secret_scanning %} settings that cannot be applied to repositories using {% data variables.product.prodname_security_configurations %}, so you must configure these settings separately:

* [Configuring a resource link for push protection](/admin/managing-code-security/securing-your-enterprise/configuring-additional-secret-scanning-settings-for-your-enterprise#configuring-a-resource-link-for-push-protection){% ifversion secret-scanning-ai-generic-secret-detection %}
* [Configuring AI detection to find additional secrets](/admin/managing-code-security/securing-your-enterprise/configuring-additional-secret-scanning-settings-for-your-enterprise#configuring-ai-detection-to-find-additional-secrets){% endif %}

These additional settings only apply to repositories with {% data variables.product.prodname_secret_scanning %} enabled and {% data variables.product.prodname_GHAS %}{% ifversion ghas-products %} or {% data variables.product.prodname_GH_secret_protection %}{% endif %}.

## Accessing the additional settings for {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security**.
1. Scroll down the page to the "Additional settings" section.

### Configuring a resource link for push protection

To provide context for developers when {% data variables.product.prodname_secret_scanning %} blocks a commit, you can display a link with more information on why the commit was blocked.

1. Under "Additional settings", to the right of "Resource link for push protection", click **{% octicon "pencil" aria-hidden="true" %}**.
1. In the text box, type the link to the desired resource, then click **{% octicon "check" aria-label="Save" %}**.

{% ifversion secret-scanning-ai-generic-secret-detection %}

### Configuring AI detection to find additional secrets

{% data variables.secret-scanning.copilot-secret-scanning %}'s {% data variables.secret-scanning.generic-secret-detection %} is an AI-powered expansion of {% data variables.product.prodname_secret_scanning %} that scans and creates alerts for unstructured secrets, such as passwords.

1. Under "Additional settings", to the right of "Use AI detection to find additional secrets", ensure the setting is toggled to "On".

{% data reusables.secret-scanning.copilot-secret-scanning-generic-secrets-subscription-note %}

To learn more about generic secrets, see [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets).

{% endif %}
