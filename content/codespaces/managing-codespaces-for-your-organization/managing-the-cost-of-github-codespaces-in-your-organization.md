---
title: Managing the cost of GitHub Codespaces in your organization
shortTitle: Manage Codespaces costs
intro: 'You can check your {% data variables.product.prodname_github_codespaces %} usage and set usage limits.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
product: '{% data reusables.gated-features.codespaces-org %}'
---

## Overview

Your organization is billed according to its compute and storage usage for {% data variables.product.prodname_github_codespaces %}. This article explains the ways in which you, as an organization owner, can manage these costs.

To learn about pricing for {% data variables.product.prodname_github_codespaces %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

## Spending limits

You can set a spending limit for {% data variables.product.prodname_github_codespaces %} for your organization. This limit is applied to the total compute and storage cost for {% data variables.product.prodname_github_codespaces %}. For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).

* **Compute usage:** This is the total time during which all {% data variables.product.prodname_github_codespaces %} instances ("codespaces") were active in a billing month.

* **Storage usage:** For {% data variables.product.prodname_github_codespaces %} billing purposes, this includes all files used by all codespaces and prebuilds in your account. This includes resources such as cloned repositories, configuration files, and extensions, among others.

You can check the compute and storage usage for {% data variables.product.prodname_github_codespaces %} for the current billing month. For information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

> [!NOTE]
> Prebuilds for {% data variables.product.prodname_github_codespaces %} are created and updated using {% data variables.product.prodname_actions %}. This may incur billable costs for {% data variables.product.prodname_actions %}. You can set a spending limit for {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-codespaces-prebuilds) and [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions). Storage of the generated prebuilds is charged at the same rate as your codespaces, and is included in your {% data variables.product.prodname_github_codespaces %} spending limit.

## Disabling or limiting billing for {% data variables.product.prodname_codespaces %}

You can choose for all usage of {% data variables.product.prodname_codespaces %} in your organization to be billed to the user who creates the codespace. Alternatively, you can specify which organization members or collaborators can use {% data variables.product.prodname_codespaces %} at your organization's expense. For more information, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).

You can limit the number of codespaces that people can create, where the organization will be billed for the codespace. This can help to reduce codespace storage charges for your organization. For more information, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-number-of-organization-billed-codespaces-a-user-can-create).

You can configure which repositories can be accessed from codespaces created for a particular repository. For more information, see [AUTOTITLE](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

You can limit the choice of types of machine that are available for codespaces created from repositories owned by your organization. This allows you to prevent people using overly resourced machines for their codespaces, and incurring unnecessary charges. For more information, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

You can set a maximum idle timeout constraint to limit the maximum timeout that people can set for codespaces that are billable to your organization. This can reduce the compute usage charges generated by codespaces that are left running in an idle state, by stopping active codespace after a shorter timeout period. For more information, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

You can also restrict how long stopped codespaces can remain unused before they are automatically deleted. This can help to reduce storage costs for {% data variables.product.prodname_codespaces %}. For more information, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

Repository owners who set up prebuilds for their repository can reduce the storage costs of prebuilds by configuring these to be created only in selected regions. For more information, see [AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

## Deleting unused codespaces

Your users can delete their own codespaces in https://github.com/codespaces and from within {% data variables.product.prodname_vscode %}. To reduce the size of a codespace, users can manually delete files using the terminal or from within {% data variables.product.prodname_vscode_shortname %}.

As an organization owner, you can delete any codespace in your organization. For more information, see [AUTOTITLE](/codespaces/developing-in-a-codespace/deleting-a-codespace#deleting-codespaces-in-your-organization).

> [!NOTE]
> Codespaces are automatically deleted after they have been stopped and have remained inactive for a user-definable number of days. For more information, see [AUTOTITLE](/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces). As an organization owner, you can set the maximum retention period for codespaces owned by your organization. This will override a user's personal retention setting. For more information, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

## Further reading

* [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
