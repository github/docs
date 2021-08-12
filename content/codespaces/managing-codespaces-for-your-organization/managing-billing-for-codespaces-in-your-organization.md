---
title: Managing billing for Codespaces in your organization
shortTitle: Managing billing for Codespaces
intro: 'You can check your {% data variables.product.prodname_codespaces %} usage and set usage limits.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
  - Billing
---

## Overview

{% data reusables.codespaces.codespaces-billing %}

- You can manage Codespaces billing for your organization: ["About billing for Codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)


- For users, there is a guide that explains how billing works ["Understanding billing for Codespaces"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Usage limits

You can set a usage limit for the codespaces in your organization or repository. This limit is applied to the compute and storage usage for {% data variables.product.prodname_codespaces %}:
 
- **Compute minutes:** Compute usage is calculated by the actual number of minutes used by all {% data variables.product.prodname_codespaces %} instances while they are active. These totals are reported to the billing service daily, and is billed monthly. You can set a spending limit for {% data variables.product.prodname_codespaces %} usage in your organization. For more information, see "[Managing spending limits for Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."

- **Storage usage:**  For {% data variables.product.prodname_codespaces %} billing purposes, this includes all storage used by all codespaces in your account. This includes all used by the codespaces, such as cloned repositories, configuration files, and extensions, among others. These totals are reported to the billing service daily, and is billed monthly. At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. To check how many compute minutes and storage GB have been used by {% data variables.product.prodname_codespaces %}, see "[Viewing your Codespaces usage"](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)."

## Disabling or limiting {% data variables.product.prodname_codespaces %}

You can disable the use of {% data variables.product.prodname_codespaces %} in your organization or repository. For more information, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)."

You can also limit the individual users who can use {% data variables.product.prodname_codespaces %}. For more information, see "[Managing user permissions for your organization](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)."

## Deleting unused codespaces

Your users can delete their codespaces in https://github.com/codespaces and from within Visual Studio Code. To reduce the size of a codespace, users can manually delete files using the terminal or from within Visual Studio Code. 

{% note %}

**Note:** Only the person who created a codespace can delete it. There is currently no way for organization owners to delete codespaces created within their organization.

{% endnote %}
