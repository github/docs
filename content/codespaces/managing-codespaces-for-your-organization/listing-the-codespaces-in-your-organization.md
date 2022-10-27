---
title: Listing the codespaces in your organization
shortTitle: List organization codespaces
intro: You can list all of the currently active or stopped codespaces for your organization.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
---

## Overview

As an organization owner, you can list all of the currently active and stopped codespaces for your organization. You might want to do this to check how many codespaces users are creating, to make sure they aren't incurring unnecessary costs. For information about pricing, see "[About billing for GitHub Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

The easiest way to list the codespaces for an organization is by using {% data variables.product.prodname_cli %}. You can also use the REST API, which provides more information about each codespace.

For information on how to see the current total {% data variables.product.prodname_codespaces %} usage for your organization or enterprise, and generate a detailed report, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

### Using {% data variables.product.prodname_cli %} to list codespaces

To list all of the current codespaces for a specified organization, use the following command.

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

This command returns a list that includes the following information for each codespace: 
	- The name and display name 
	- The user who created the codespace
	- The repository and branch
	- The current state of the codespace

To list all of the current codespaces for an organization that were created by a specific user, use the following command.

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**Note**: In the above commands, replace `ORGANIZATION` with the name of the organization you are querying. You must be an owner of the organization.

{% endnote %}

### Using the REST API to list codespaces

You can use the `/orgs/{org}/codespaces` API endpoint as an alternative method of listing the current codespaces for an organization. This returns more information than {% data variables.product.prodname_cli %}; for example, the machine type details.

For more information about this endpoint, see "[Codespaces organizations](/rest/codespaces/organizations#list-codespaces-for-the-organization)."
