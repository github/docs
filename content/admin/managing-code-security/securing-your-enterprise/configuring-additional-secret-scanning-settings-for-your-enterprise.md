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

* [Configuring a resource link for push protection](#configuring-a-resource-link-for-push-protection)
* [Controlling features for new repositories created in a user namespace](#controlling-features-for-new-repositories-created-in-a-user-namespace)

These additional settings apply only to repositories with {% data variables.product.prodname_secret_scanning %} and {% data variables.product.prodname_GHAS %} both enabled{% ifversion ghas-products %}, or with {% data variables.product.prodname_GH_secret_protection %} enabled{% endif %}.

## Accessing the additional settings for {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
1. Scroll down the page to the "Additional settings" section.

### Configuring a resource link for push protection

To provide context for developers when {% data variables.product.prodname_secret_scanning %} blocks a commit, you can display a link with more information on why the commit was blocked.

1. Under "Additional settings", to the right of "Resource link for push protection", click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %}**.
1. In the text box, type the link to the desired resource, then click **{% octicon "check" aria-label="Save" %}**.

### Controlling features for new repositories created in a user namespace

To ensure that any repositories created by users outside of an organization are protected by the same security features as repositories created within an organization, you can enable or disable {% data variables.product.prodname_secret_scanning %} features for new repositories created in a user namespace.

Under "Additional settings", use the options in the "User namespace repositories" section to enable or disable features for new repositories.
