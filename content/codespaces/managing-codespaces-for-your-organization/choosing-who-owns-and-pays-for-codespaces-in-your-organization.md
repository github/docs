---
title: Choosing who owns and pays for codespaces in your organization
shortTitle: 'Billing and ownership'
intro: 'You can choose whether codespaces are paid for and owned by your organization or by your members.'
permissions: "Organization owners can change an organization's billing details and control who owns and pays for codespaces."
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
product: 'Organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans can pay for their members'' use of {% data variables.product.prodname_github_codespaces %}. These organizations can then access policies that apply to codespaces paid for by the organization. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)."'
---

## Overview

If you're the owner of an organization on a {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} plan, you can pay for your members' and collaborators' usage of {% data variables.product.prodname_github_codespaces %}. Paying for usage will allow people to use {% data variables.product.prodname_github_codespaces %} to work in your repositories without having to do so at their own expense and will give your organization more control over the codespaces created from your repositories.

To pay for usage, you must do all of the following things:

* Allow at least some of your members and collaborators to use {% data variables.product.prodname_github_codespaces %} in your organization's private {% ifversion ghec %}and internal {% endif %}repositories. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization#enabling-or-disabling-github-codespaces)."
* Choose for codespaces created from your organization's repositories to be **organization-owned**. For more information, see "[Choosing who owns and pays for codespaces](#choosing-who-owns-and-pays-for-codespaces)."
* Set a non-zero spending limit for {% data variables.product.prodname_github_codespaces %}. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-organization-account)."

## About choosing who pays for codespaces

Paying for a codespace means paying for the storage and compute costs of the codespace over the codespace's lifetime. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

Organizations on a {% data variables.product.prodname_free_team %} plan cannot pay for {% data variables.product.prodname_github_codespaces %}, so the user who creates the codespace always pays.

For organizations on a {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} plan, when a user creates a codespace from a repository in the organization, either the user or the organization can pay for the codespace. The user who creates a codespace can't choose who pays for it, but the organization can choose to pay for certain users. In an organization's settings, you can choose for codespaces to be **user-owned** or **organization-owned**.

If an organization chooses for codespaces to be **user-owned**, a user who creates a codespace from a repository in the organization always pays for the codespace. The user's access to create codespaces depends on the visibility of the repository and your organization's access settings.

If an organization chooses for codespaces to be **organization-owned**, the organization will pay for a codespace if all the following things are true:

{% data reusables.codespaces.when-an-org-pays %}

For more information about enabling {% data variables.product.prodname_github_codespaces %} for members and collaborators, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)."

{% ifversion ghec %}
{% note %}

**Note:** If you own an {% data variables.enterprise.prodname_emu_org %} and do not allow {% data variables.product.prodname_github_codespaces %} to be billed to your organization, members with {% data variables.enterprise.prodname_managed_users %} will not be able to use {% data variables.product.prodname_github_codespaces %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)."

{% endnote %}
{% endif %}

## About ownership of codespaces

A codespace is paid for by the account that owns it. The codespace owner can be the user who created the codespace, or it can be an organization.

If your organization owns a codespace, your organization has control over that codespace. For example, for codespaces owned by your organization, you can:

* Use the [REST API](/rest/codespaces/organizations) to manage codespaces, such as stopping or deleting a codespace
* Access audit logs to review actions related to {% data variables.product.prodname_github_codespaces %}
* Set policies to manage constraints, such as restricting the dev container image or machine type that can be used in codespaces, or setting a default timeout and retention period

If a user owns a codespace, your organization does not have any of these options for managing the codespace, even if the codespace was created from one of your organization's repositories.

When a user creates a codespace, they're told who will pay for it, and therefore who owns it. From a user's point of view, apart from the policies your organization can use to set constraints on codespaces, the experience with {% data variables.product.prodname_github_codespaces %} will be similar regardless of who owns a codespace. For example, most of a user's personal settings for {% data variables.product.prodname_github_codespaces %}, such as dotfiles, secrets, and GPG verification, apply regardless of who owns the codespace.

## About changing your settings

When you change your ownership settings, existing codespaces can transfer to a new owner.

If you change from **organization ownership** to **user ownership**, codespaces that are currently owned by your organization will be transferred to the ownership of the user who created the codespace. Before you make this change, you should ask each user to review the codespaces that will be transferred to their ownership. These codespaces will now incur usage on the user's personal account.

If you change from **user ownership** to **organization ownership**, existing codespaces may be transferred to your organization's ownership. A codespace will be transferred if the user who currently owns the codespace is a member or collaborator, and you have enabled {% data variables.product.prodname_github_codespaces %} for this user. Otherwise, a codespace will remain under the ownership of the user.

## Choosing who owns and pays for codespaces

{% note %}

**Note:** If you cannot access the option to make codespaces **organization-owned**, this may be because you have disabled {% data variables.product.prodname_github_codespaces %} for all users in your organization's private{% ifversion ghec %} and internal{% endif %} repositories. For more information, see "[About choosing who pays for codespaces](#about-choosing-who-pays-for-codespaces)."

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
{% data reusables.organizations.click-general %}
1. On the {% data variables.product.prodname_codespaces %} settings page, under "Codespace ownership," select the setting you want for your organization:
   * **Organization ownership**: Codespaces can be owned and paid for by your organization.
   * **User ownership**: Codespaces are always owned and paid for by the user who creates the codespace.

1. Optionally, under "Codespaces access," review the members and collaborators for whom you have enabled {% data variables.product.prodname_codespaces %}. These are the only users who can create codespaces that your organization pays for. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)."

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

For information on managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-organization-account)."
