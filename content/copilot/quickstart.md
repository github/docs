---
title: Quickstart for GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} can help you work, by offering inline suggestions as you code.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
---

## Introduction

{% data variables.product.prodname_copilot %} is an AI pair programmer. You can use {% data variables.product.prodname_copilot %} to get suggestions for whole lines or entire functions right inside your editor.

This guide will show you how to set up a {% data variables.product.prodname_copilot %} subscription for your personal {% ifversion fpt %}or organization{% else %}, organization, or enterprise{% endif %} account, install the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}, and get your first suggestion. For more information on {% data variables.product.prodname_copilot %}, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)." For more in-depth information on how to use {% data variables.product.prodname_copilot %} in a variety of environments, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot)."

## Signing up for {% data variables.product.prodname_copilot %} for your personal account

Before you can start using {% data variables.product.prodname_copilot %}, you will need to set up a free trial or subscription for your personal account.

{% data reusables.copilot.tp-users-trial-eligibility %}

{% data reusables.copilot.signup-procedure %}

{% note %}

**Note:** As a member of an organization owned by a {% data variables.product.prodname_ghe_cloud %} account with a {% data variables.product.prodname_copilot %} subscription, you must be assigned a {% data variables.product.prodname_copilot %} seat by your organization before you can use {% data variables.product.prodname_copilot %}.
{% endnote %}

{% ifversion fpt %}

## Signing up for {% data variables.product.prodname_copilot %} for your organization account

Before you can start using {% data variables.product.prodname_copilot %} in your organization account, you will need to set up a subscription.

{% data reusables.copilot.signup-procedure-org %}
{% endif %}

{% ifversion ghec %}

## Signing up for {% data variables.product.prodname_copilot %} for your enterprise account

{% note %}

**Note:** If you already have a payment method set up for your enterprise account and are billed by {% data variables.product.prodname_dotcom %}, you can skip this section.

{% endnote %}

### Customers under a Microsoft Enterprise Agreement

{% data reusables.copilot.signup-procedure-enterprise-msft-ea %}

### Customers under a direct GitHub contract

{% data reusables.copilot.signup-procedure-enterprise %}

## Enabling {% data variables.product.prodname_copilot %} for your enterprise account

{% data reusables.copilot.enabling-in-enterprise %}

For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/enabling-and-setting-up-github-copilot-for-business)."

{% endif %}

## Installing the {% data variables.product.prodname_copilot %} extension for {% data variables.product.prodname_vscode %}

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vscode %} extension.

1. In the {% data variables.product.prodname_vscode %} Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**.
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.

   - If you have previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, {% data variables.product.prodname_copilot %} will be automatically authorized.

1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialogue box, to confirm the authentication, click **Open**.

## Getting your first suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

1. Open {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
{% data reusables.copilot.accept-suggestion %}

## Next steps

{% data reusables.copilot.next-steps %}

- [AUTOTITLE](/copilot/getting-started-with-github-copilot): You've learned how to get your first suggestion in {% data variables.product.prodname_vscode %}. These guides show you how to set up and navigate the various functions of {% data variables.product.prodname_copilot %} across all of the supported environments.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): See practical examples of how {% data variables.product.prodname_copilot %} can help you work.
- [AUTOTITLE](/copilot/configuring-github-copilot): These guides provide details on how to configure {% data variables.product.prodname_copilot %} to your personal preferences.

## Further reading

- [AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)
- [AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-business)
