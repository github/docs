---
title: Managing billing for GitHub Codespaces in your organization
shortTitle: Manage billing
intro: 'You can check your {% data variables.product.prodname_github_codespaces %} usage and set usage limits.'
product: '{% data reusables.gated-features.codespaces %}'
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
---

## Overview

To learn about pricing for {% data variables.product.prodname_github_codespaces %}, see "[{% data variables.product.prodname_codespaces %} pricing](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)."

{% data reusables.codespaces.codespaces-billing %}

- As an organization owner or a billing manager, you can manage {% data variables.product.prodname_codespaces %} billing for your organization: ["About billing for Codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)
- As an organization owner, you can list the currently active and stopped codespaces for your organization. In addition to these codespaces, costs for the current month may include costs for codespaces that existed earlier in the current month but have since been deleted.
- For users, there is a guide that explains how billing works: ["Understanding billing for Codespaces"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Usage limits

You can set a usage limit for the codespaces in your organization or repository. This limit is applied to the compute and storage usage for {% data variables.product.prodname_github_codespaces %}:
 
- **Compute minutes:** Compute usage is calculated by the actual number of minutes used by all {% data variables.product.prodname_codespaces %} instances while they are active. These totals are reported to the billing service daily, and is billed monthly. You can set a spending limit for {% data variables.product.prodname_codespaces %} usage in your organization. For more information, see "[Managing spending limits for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)."

- **Storage usage:** For {% data variables.product.prodname_codespaces %} billing purposes, this includes all storage used by all codespaces in your account. This includes resources such as cloned repositories, configuration files, and extensions, among others. These totals are reported to the billing service daily, and is billed monthly. At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. To check how many compute minutes and storage GB have been used by {% data variables.product.prodname_codespaces %}, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage"](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

## Disabling or limiting {% data variables.product.prodname_codespaces %}

You can disable all use of {% data variables.product.prodname_github_codespaces %} that would be billed to your organization. Alternatively, you can specify which organization members or collaborators can use {% data variables.product.prodname_codespaces %} at your organization's expense. For more information, see "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)."

{% data reusables.codespaces.codespaces-disabling-org-billing %}

You can configure which repositories can be accessed from codespaces created for a particular repository. For more information, see "[Managing access to other repositories within your codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."

You can limit the choice of types of machine that are available for codespaces created from repositories owned by your organization. This allows you to prevent people using overly resourced machines for their codespaces, and incurring unnecessary charges. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

You can also restrict how long a codespace can remain unused before it is automatically deleted. This can help to reduce storage costs for {% data variables.product.prodname_codespaces %}. For more information, see "[Restricting the retention period for codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)."

## Deleting unused codespaces

Your users can delete their own codespaces in https://github.com/codespaces and from within {% data variables.product.prodname_vscode %}. To reduce the size of a codespace, users can manually delete files using the terminal or from within {% data variables.product.prodname_vscode_shortname %}. 

As an organization owner, you can delete any codespace in your organization. For more information, see "[Deleting a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)."

{% note %}

**Note:** Codespaces are automatically deleted after they have been stopped and have remained inactive for a defined number of days. For more information, see "[Restricting the retention period for codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)." A codespace can only be manually deleted by the person who created the codespace.

{% endnote %}

## Further reading

- "[Listing the codespaces in your organization](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
