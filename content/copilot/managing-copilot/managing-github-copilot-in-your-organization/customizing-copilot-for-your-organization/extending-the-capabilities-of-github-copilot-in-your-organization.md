---
title: Extending the capabilities of GitHub Copilot in your organization
shortTitle: Install extensions
intro: 'You can add additional functionality to {% data variables.product.prodname_copilot_short %} in your organization, by installing certain {% data variables.product.prodname_github_apps %} from {% data variables.product.prodname_marketplace %}.'
product: 'Organization owners can install {% data variables.product.prodname_copilot_extensions %} for an organization.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/enhancing-copilot-for-your-organization/extending-the-capabilities-of-github-copilot-in-your-organization
  - /copilot/github-copilot-chat/github-copilot-extensions/installing-github-copilot-extensions-for-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/installing-github-copilot-extensions-for-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/enhancing-copilot-for-your-organization/installing-github-copilot-extensions-for-your-organization
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About {% data variables.product.prodname_copilot_extensions %} for your organization

{% data reusables.copilot.copilot-extensions.copilot-extensions-on-marketplace %}

Any organization owner can install {% data variables.product.prodname_copilot_extensions_short %} for their organization, but your organization must have an active {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription.

> [!NOTE] Anyone can install a {% data variables.product.prodname_copilot_extension_short %} on their personal account. However, if they get access to {% data variables.product.prodname_copilot_short %} through a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription, they will only be able to use the extension if it is installed at the organization level.

You can also create your own custom {% data variables.product.prodname_copilot_extensions_short %} for your organization. For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/about-building-copilot-extensions)."

## Prerequisites

Before you install any {% data variables.product.prodname_copilot_extensions_short %} in your organization, you should set a usage policy for {% data variables.product.prodname_copilot_extensions_short %} at the {% ifversion ghec %}enterprise or {% endif %}organization level. See "[AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/managing-github-copilot-extensions)."

## Installing {% data variables.product.prodname_copilot_extensions %} for your organization

1. Open [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=apps&copilot_app=true).
1. In the left sidebar, click {% octicon "copilot" aria-hidden="true" %} **{% data variables.product.prodname_copilot_short %}**.
1. In the list of {% data variables.product.prodname_copilot_extensions_short %}, locate an app you'd like to install.
1. To install the {% data variables.product.prodname_copilot_extension_short %} on an organization with a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations)."
{% data reusables.copilot.copilot-extensions.extension-specific-onboarding-steps %}

## Next steps

After installing a {% data variables.product.prodname_copilot_extension_short %} for your organization, developers in your organization can start using the extension. See "[AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/using-github-copilot-extensions)."

You can also manage the permissions of installed {% data variables.product.prodname_copilot_extensions_short %}. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#managing-permissions-for-a-github-copilot-extension-in-your-organization)."
