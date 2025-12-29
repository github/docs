---
title: Enabling or disabling GitHub Codespaces for your organization
shortTitle: 'Enable or disable Codespaces'
intro: 'You can control which users can use {% data variables.product.prodname_github_codespaces %} in your organization''s private {% ifversion ghec %}and internal {% endif %}repositories.'
permissions: 'Organization owners'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
product: '{% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %}'
---

## About enabling and disabling {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} is always available in an organization's public repositories. Any user can create a codespace from these repositories.

If your organization is on a {% data variables.product.prodname_free_team %} plan, {% data variables.product.prodname_github_codespaces %} is always available in your organization's private repositories. Any user with access to these repositories can create a codespace at their own expense.

If you're an organization owner on a paid {% data variables.product.github %} plan, you can enable or disable {% data variables.product.prodname_github_codespaces %} for your organization's private {% ifversion ghec %}and internal {% endif %}repositories. You can enable {% data variables.product.prodname_github_codespaces %} for all users or only for selected members and collaborators.

## Enabling or disabling {% data variables.product.prodname_github_codespaces %}

> [!NOTE]
> Removing a user's access to {% data variables.product.prodname_github_codespaces %} will prevent them from opening any of their existing codespaces in your organization's private {% ifversion ghec %}and internal {% endif %}repositories. For more details, see [What happens when I remove a user's access to {% data variables.product.prodname_github_codespaces %}?](#what-happens-when-i-remove-a-users-access-to-github-codespaces)

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
{% data reusables.organizations.click-general %}
1. On the {% data variables.product.prodname_codespaces %} settings page, under "Codespaces access," select your preferred setting for {% data variables.product.prodname_github_codespaces %} in your organization's private {% ifversion ghec %}and internal {% endif %}repositories.

## Ensuring your users can create codespaces

To allow a user to create codespaces for a repository owned by your organization, you must do one of the following:

* Give the user **read access** to the repository and permit forking. This allows the user to create a codespace, push changes to a fork, and open a pull request. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization).
* Give the user **write access** to the repository so that they can push changes directly to the repository without forking.

{% ifversion ghec %}

Additionally, ensure that:
* Your enterprise does not use OIDC with CAP. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy).
* Your organization does not have an IP address allow list enabled. For more information, see [Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization).

{% endif %}

{% ifversion fpt %}

> [!NOTE]
> If you are a verified educator or a teacher, you must enable {% data variables.product.prodname_github_codespaces %} from a {% data variables.product.prodname_classroom %} to use your {% data variables.product.prodname_codespaces %} Education benefit. For more information, see [AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers).

{% endif %}

## What happens when I remove a user's access to {% data variables.product.prodname_github_codespaces %}?

Before removing users' access to {% data variables.product.prodname_github_codespaces %}, you should **alert the affected users.**

When you remove a user's access, the user will immediately be unable to open existing codespaces they have created from your organization's private {% ifversion ghec %}and internal {% endif %}repositories.

* If you alert them first, they can push any unpublished work to a branch in the repository before they lose access.
* Once a user loses access to a codespace, the codespace is retained for a period of 7 days, then it is permanently deleted. During this 7-day period, to recover unpublished work from the codespace, the user must contact {% data variables.contact.contact_support %}.

If you were previously paying for codespaces the user had created from your organization's public repositories, ownership of these codespaces will transfer to the user.

## Further reading

* [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)
