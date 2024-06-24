---
title: Enforcing policies for GitHub Codespaces in your enterprise
shortTitle: GitHub Codespaces policies
intro: 'You can enforce policies for {% data variables.product.prodname_github_codespaces %} within your enterprise''s organizations.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_github_codespaces %} in an enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-codespaces-in-your-enterprise
---

## About enterprise policies for {% data variables.product.prodname_github_codespaces %}

As an enterprise owner, you can set a policy to enable or disable {% data variables.product.prodname_github_codespaces %} across organizations in your enterprise. You can enable {% data variables.product.prodname_github_codespaces %} for all organizations, enable for specific organizations, or disable for all organizations.

If you disable {% data variables.product.prodname_github_codespaces %} for an organization, users cannot use or create codespaces for any of that organization's private or internal repositories, regardless of whether use of the codespace would be billed to the user or to your organization or enterprise. You cannot prevent users from creating and using codespaces for public repositories in your organizations at their own expense, but an organization will not be able to pay for this usage if {% data variables.product.prodname_github_codespaces %} is disabled.

By enabling {% data variables.product.prodname_github_codespaces %}, you can help your members and collaborators get started with projects quickly, without needing to install lots of tools and dependencies locally to start contributing. However, you might want to roll out {% data variables.product.prodname_github_codespaces %} gradually across your organizations by enabling it for more organizations over time. Alternatively, if you need to comply with security regulations that require increased control over the private code in your enterprise, you might want to disable {% data variables.product.prodname_github_codespaces %} for all  organizations in your enterprise.

If you're an organization owner, you can enable {% data variables.product.prodname_github_codespaces %} for specific members and collaborators in an organization. You can also choose to pay for these users' usage of {% data variables.product.prodname_codespaces %}. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)" and "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)."

## Enabling or disabling {% data variables.product.prodname_github_codespaces %} in your enterprise

{% note %}

**Note:** If you remove a user's access to {% data variables.product.prodname_github_codespaces %}, the user will immediately be unable to open existing codespaces they have created from an organization's private {% ifversion ghec %}and internal {% endif %}repositories. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization#about-changing-your-settings)."

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under "{% octicon "law" aria-hidden="true" %} Policies," click **Codespaces**.
1. On the {% data variables.product.prodname_github_codespaces %} policies page, under "Manage organization access to {% data variables.product.prodname_github_codespaces %}," select whether to enable {% data variables.product.prodname_github_codespaces %} in your organizations' private and internal repositories.

   You can enable for all organizations, enable for specific organizations, or disable for all organizations.
1. Click **Save**.
1. Read the confirmation dialog, then click **Submit** to proceed.
