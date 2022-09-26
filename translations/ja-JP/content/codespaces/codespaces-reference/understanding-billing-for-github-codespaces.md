---
title: Understanding billing for GitHub Codespaces
intro: 'Learn how your {% data variables.product.prodname_github_codespaces %} usage is billed.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
  - Codespaces
  - Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
---

This article explains how billing works for your codespaces, and explains how your organization's billing manager can help.

## Getting access to {% data variables.product.prodname_github_codespaces %}

Your organization's administrator might limit {% data variables.product.prodname_github_codespaces %} usage to only specific personal accounts. To get access, you will need to contact your billing manager. For more information, see "[Managing access to other repositories within your codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."

## How much it costs to use {% data variables.product.prodname_codespaces %}

To see the pricing for {% data variables.product.prodname_github_codespaces %} usage, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)."

## How your codespace usage is billed

Your codespace is billed for its compute minutes and for the amount of storage it uses on disk.

If you enable prebuilding of codespaces this will incur additional charges. For more information, see "[About {% data variables.product.prodname_github_codespaces %} prebuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)."

### Understanding what compute minutes are
Your codespace is billed for the number of minutes that it's active. If your codespaces window is left idle for 30 minutes, it will automatically shutdown, and compute billing for the codespace will end until you start the codespace again.

### Understanding how codespace storage is billed
For {% data variables.product.prodname_github_codespaces %}, storage is defined to include any files relating to your codespace, such as the cloned repository, configuration files, and extensions, among others. This storage is billed while your codespace is shutdown. The storage billing for a codespace ends when you manually delete it from https://github.com/codespaces.

## How spending limits work

Before your organization can use {% data variables.product.prodname_github_codespaces %}, your billing manager will need to set a spending limit. For more information, see "[Managing spending limits for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)." 

## Exporting changes when you have reached your spending limit

{% data reusables.codespaces.exporting-changes %}

## Checking your current usage and limits
If you need to check your current usage or spending limit, contact your organization's billing manager. For more information, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

## Codespaces can be automatically deleted

Your codespace will be automatically deleted when you are removed from an organization or repository.

## Deleting your unused codespaces

You can manually delete your codespaces in https://github.com/codespaces and from within {% data variables.product.prodname_vscode %}. To reduce the size of a codespace, you can manually delete files using the terminal or from within {% data variables.product.prodname_vscode %}.

## Further reading

- "[Managing billing for {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
