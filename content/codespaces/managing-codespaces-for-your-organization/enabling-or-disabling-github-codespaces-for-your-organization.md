---
title: Enabling or disabling GitHub Codespaces for your organization
shortTitle: 'Enable or disable Codespaces'
intro: 'You can control which users can use {% data variables.product.prodname_github_codespaces %} in your organization''s private {% ifversion ghec %}and internal {% endif %}repositories.'
permissions: 'Organization owners can control which users can use {% data variables.product.prodname_github_codespaces %}.'
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
product: 'Organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans can choose to disable {% data variables.product.prodname_github_codespaces %} in private {% ifversion ghec %}and internal {% endif %}repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)."'
---

## About enabling and disabling {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} is always available in an organization's public repositories, and any user can create a codespace from these repositories. If your organization is on a {% data variables.product.prodname_free_team %} plan, {% data variables.product.prodname_github_codespaces %} is always available in your organization's private repositories too, and any users with access to these repositories can create a codespace at their own expense.

If you're the owner of an organization on a {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} plan, you can choose whether to enable or disable {% data variables.product.prodname_github_codespaces %} in your organization's private {% ifversion ghec %}and internal {% endif %}repositories. If you enable {% data variables.product.prodname_github_codespaces %} in these repositories, you can choose whether to enable for all users or for a selection of members and collaborators.

By enabling {% data variables.product.prodname_github_codespaces %}, you can help your members and collaborators get started with projects quickly, without needing to install lots of tools and dependencies locally to start contributing. However, you might want to roll out {% data variables.product.prodname_github_codespaces %} gradually across your organization by enabling it for groups of users at a time. Alternatively, if you need to comply with security regulations that require increased control over the private code in your organization, you might want to disable {% data variables.product.prodname_github_codespaces %} for all your members.

If you have enabled {% data variables.product.prodname_github_codespaces %} in private {% ifversion ghec %}and internal {% endif %}repositories for at least some users, you can choose to pay for these users' usage of {% data variables.product.prodname_github_codespaces %} across all repositories in your organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)."

If you cannot access the settings to enable {% data variables.product.prodname_github_codespaces %} in your organization, this may be because an enterprise owner has disabled {% data variables.product.prodname_github_codespaces %} for your organization. For more information, see {% ifversion ghec %}"[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-codespaces-in-your-enterprise)."{% elsif fpt %}"[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-codespaces-in-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

## Prerequisites for enabling {% data variables.product.prodname_github_codespaces %}

Only people who can either push changes to a repository, or fork the repository, can create a codespace for that repository. To allow a user to create codespaces for a repository owned by your organization, you must do one of the following things.

* Ensure that the user has read access to the repository, and the repository permits forking, so that the user can create a codespace from the repository, push their changes to a fork, and create a pull request for any changes they want to make. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)."
* Ensure that the user has write access to the repository, so that they can push changes directly to the repository without forking.

In addition, to allow users to create codespaces, you must ensure that{% ifversion ghec %}:
* Your enterprise does not use OIDC with CAP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."
* Your{% else %} your{% endif %} organization does not have an IP address allow list enabled. For more information, see "[Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% ifversion fpt %}
{% note %}

**Note:** If you are a verified educator or a teacher, you must enable {% data variables.product.prodname_github_codespaces %} from a {% data variables.product.prodname_classroom %} to use your {% data variables.product.prodname_codespaces %} Education benefit. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)."

{% endnote %}
{% endif %}

## About changing your settings

If you remove a user's access to {% data variables.product.prodname_github_codespaces %}, the user will immediately be unable to open existing codespaces they have created from your organization's private {% ifversion ghec %}and internal {% endif %}repositories. If you were previously paying for codespaces the user had created from your organization's public repositories, ownership of these codespaces will transfer the user.

Before removing users' access, you should alert the affected users. If they have unpublished work in a codespace, they can make sure the work is pushed to a branch in the repository before they lose access.

Once a user loses access to a codespace, the codespace is retained for a period of 7 days, then it is permanently deleted. During this 7-day period, to recover unpublished work from the codespace, the user must contact {% data variables.contact.contact_support %}.

## Enabling or disabling {% data variables.product.prodname_github_codespaces %}

{% note %}

**Note:** If you remove a user's access to {% data variables.product.prodname_github_codespaces %}, the user will immediately be unable to open existing codespaces they have created from your organization's private {% ifversion ghec %}and internal {% endif %}repositories. For more information, see "[About changing your settings](#about-changing-your-settings)."

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
{% data reusables.organizations.click-general %}
1. On the {% data variables.product.prodname_codespaces %} settings page, under "Codespaces access," select your preferred setting for {% data variables.product.prodname_github_codespaces %} in your organization's private {% ifversion ghec %}and internal {% endif %}repositories.

   You can disable {% data variables.product.prodname_codespaces %}, enable for specific members or teams, enable for all members, or enable for all members and collaborators.
