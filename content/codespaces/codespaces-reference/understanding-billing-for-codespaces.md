---
title: Understanding billing for Codespaces
intro: 'Learn how your {% data variables.product.prodname_codespaces %} usage is billed.'
versions:
  fpt: '*'
redirect_from:
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
  - Codespaces
  - Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
---

{% data reusables.codespaces.codespaces-trial-period %}

This article explains how billing works for your codespaces, and explains how your organization's billing manager can help.

## Getting access to {% data variables.product.prodname_codespaces %}

Your organization's administrator might limit {% data variables.product.prodname_codespaces %} usage to only specific user accounts. To get access, you will need to contact your billing manager. For more information, see "[Managing access and security for your codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)."

## How spending limits work

Before your organization can use {% data variables.product.prodname_codespaces %}, your billing manager will need to set a spending limit. For more information, see "[Managing billing for Codespaces in your organization](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."

## How your codespace usage is billed

Your codespace is billed for its compute minutes and for the amount of storage it uses on disk.

### Understanding what compute minutes are
Your codespace is billed for the number of minutes that it's active. If your codespaces window is left idle for 30 minutes, it will automatically shutdown, and compute billing for the codespace will end until you start the codespace again.

### Understanding how codespace storage is billed
For {% data variables.product.prodname_codespaces %}, storage is defined to include any files relating to your codespace, such as the cloned repository, configuration files, and extensions, among others. This storage is billed while your codespace is shutdown. The storage billing for a codespace ends when you manually delete it from https://github.com/codespaces.

## How much it costs to use {% data variables.product.prodname_codespaces %}

To see the pricing for {% data variables.product.prodname_codespaces %} usage, see "[{% data variables.product.prodname_codespaces %} pricing](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)."

## Checking your current usage and limits
If you need to check your current usage or spending limit, contact your organization's billing manager. For more information, see "[Viewing your Codespaces usage](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)."

## Codespaces can be automatically deleted

Your codespace will be automatically deleted when you are removed from an organization or repository.

## Deleting your unused codespaces

You can manually delete your codespaces in https://github.com/codespaces and from within {% data variables.product.prodname_vscode %}. To reduce the size of a codespace, you can manually delete files using the terminal or from within {% data variables.product.prodname_vscode %}.
