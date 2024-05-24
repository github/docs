---
title: Installing GitHub Copilot Extensions for your organization
intro: 'You can install {% data variables.product.prodname_copilot_extensions %} for your organization from {% data variables.product.prodname_marketplace %}.'
product: 'Organization owners can install {% data variables.product.prodname_copilot_extensions %} for an organization.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Install organization extensions
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About installing {% data variables.product.prodname_copilot_extensions %} for your organization

Before you install any {% data variables.product.prodname_copilot_extensions_short %} in your organization, you should set a usage policy for {% data variables.product.prodname_copilot_extensions_short %} at the {% ifversion ghec %}enterprise or {% endif %}organization level. See "[AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/managing-github-copilot-extensions)."

Any organization owner can install {% data variables.product.prodname_copilot_extensions_short %} for their organization, but your organization must meet the following criteria to use an installed {% data variables.product.prodname_copilot_extension_short %}:

- Your organization is enrolled in the limited public beta for {% data variables.product.prodname_copilot_extensions_short %}.
- Your organization has an active {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription.

> [!NOTE] Anyone can install a {% data variables.product.prodname_copilot_extension_short %} on their personal account. However, if they get access to {% data variables.product.prodname_copilot_short %} through a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription, they will only be able to use the extension if it is installed at the organization level.

## Installing {% data variables.product.prodname_copilot_extensions %} for your organization

{% data reusables.copilot.copilot-extensions.copilot-extensions-on-marketplace %}

To install a {% data variables.product.prodname_copilot_extension_short %} on an organization with a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations)."

## Next steps

After installing a {% data variables.product.prodname_copilot_extension_short %} for your organization, developers in your organization can start using the extension. See "[AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/using-github-copilot-extensions)."
