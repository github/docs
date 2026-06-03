---
title: Managing Copilot Memory for your personal account
shortTitle: Manage for yourself
intro: Review and manage the coding conventions, preferences, and other details that {% data variables.product.prodname_copilot_short %} has stored from your interactions.
product: 'Individual users on a paid {% data variables.product.prodname_copilot_short %} plan.<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-how-to-signup&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.memory-how-to-intro %}

{% data variables.copilot.copilot_memory %} is enabled for your account by default if:

* You are on a paid, individual {% data variables.product.prodname_copilot_short %} plan.
* Your plan is managed by an enterprise or organization that has allowed you to use {% data variables.copilot.copilot_memory %}.

In either case, you can disable or re-enable {% data variables.copilot.copilot_memory %} at any time in your personal {% data variables.product.prodname_copilot_short %} settings.

## Disabling or enabling {% data variables.copilot.copilot_memory %}

When enabled, {% data variables.copilot.copilot_memory %} will be used in any repository in which you use a supported {% data variables.product.prodname_copilot_short %} feature. Both repository-level facts and user-level preferences will be saved.

{% data reusables.user-settings.copilot-settings %}
1. Under "Features", scroll down to the setting for **{% data variables.copilot.copilot_memory %}**.
1. Click the dropdown button and select **Enabled** or **Disabled**.

## Selecting a default billing entity

If you receive {% data variables.product.prodname_copilot_short %} access through multiple enterprises or organizations, you **must** select a default billing entity in order to generate user-level preferences with {% data variables.copilot.copilot_memory %}. The billing entity determines which account "owns" (can manage and delete) preferences that are generated for your account. Do this in your [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text).

## Viewing and deleting repository-level facts

As an owner of a repository in which {% data variables.copilot.copilot_memory %} is in use, you can review the currently stored repository-level facts. If you think any are inappropriate, misleading, or incorrect, you can delete them.

{% data reusables.copilot.manage-repo-memories %}

## Viewing and deleting your user-level preferences

{% data variables.copilot.copilot_memory %} stores preferences for your personal use of {% data variables.product.prodname_copilot_short %}.

{% data reusables.user-settings.copilot-settings %}
1. In the sidebar, under **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, click **Memory**.
1. You will see a list of your user-level preferences, which you can delete as needed.

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator)
