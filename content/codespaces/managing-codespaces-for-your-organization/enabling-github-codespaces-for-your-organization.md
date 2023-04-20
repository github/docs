---
title: Enabling GitHub Codespaces for your organization
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: 'You can control which users in your organization can use {% data variables.product.prodname_github_codespaces %} at the organization''s expense.'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
product: 'Organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans can enable use of {% data variables.product.prodname_github_codespaces %}, billable to the organization. These organizations can then access settings that apply to codespaces paid for by the organization. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)."'
---

## About enabling {% data variables.product.prodname_github_codespaces %} for your organization

Owners of organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans can allow certain users to create and use codespaces at the organization's expense. This applies to codespaces created from repositories owned by the organization. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)" and "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

If a user can access one of your organization's repositories, but you haven't allowed them to create a codespace at your organization's expense, the user can still create codespaces from the repository. These codespaces will incur usage on the user's personal account.

Regardless of who pays for a codespace, only people who can either push changes to a repository, or fork the repository, can create a codespace for that repository. To allow a user to create codespaces for a repository owned by your organization, you must do one of the following things.

- Ensure that the user has read access to the repository, and the repository permits forking, so that the user can create a codespace from the repository, push their changes to a fork, and create a pull request for any changes they want to make. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)."
- Ensure that the user has write access to the repository, so that they can push changes directly to the repository without forking.

You must also ensure that your organization does not have an IP address allow list enabled. For more information, see "[Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

To allow people to create codespaces for which your organization will be billed, you must:

- [Set a spending limit](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)
- [Choose who can create codespaces that are billed to your organization](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

When you have set a spending limit, you can access settings for {% data variables.product.prodname_github_codespaces %} in your organization's settings and in repositories owned by your organization. For example, you can set up prebuilds for a repository, or you can set a policy to restrict the base image or machine type that can be used in your organization's codespaces. These policies apply to codespaces that your organization pays for, but not to codespaces created from your repositories that are billed to a user's personal account. 

You can also use the REST API to manage codespaces owned by your organization, for example to stop or delete a codespace. For more information, see "[AUTOTITLE](/rest/codespaces/organizations)" in the REST API documentation.

{% ifversion ghec %}
{% note %}

**Note:** If you own an {% data variables.enterprise.prodname_emu_org %}, and do not allow {% data variables.product.prodname_github_codespaces %} to be billed to your organization, your {% data variables.enterprise.prodname_managed_users %} will not be able to use {% data variables.product.prodname_github_codespaces %} anywhere on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)."

{% endnote %}
{% endif %}

{% ifversion fpt %}
{% note %}

**Note:** If you are a verified educator or a teacher, you must enable {% data variables.product.prodname_github_codespaces %} from a {% data variables.product.prodname_classroom %} to use your {% data variables.product.prodname_codespaces %} Education benefit. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)."

{% endnote %}
{% endif %}

By default, a codespace can only access the repository from which it was created. If you want codespaces in your organization to be able to access other organization repositories that the codespace creator can access, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)."

## Choose who can create codespaces that are billed to your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
{% data reusables.organizations.click-general %}
1. On the {% data variables.product.prodname_codespaces %} settings page, under "Billing," select one of the following options:

   - **Disabled** - Your organization will not be charged for codespace usage. {% data variables.product.prodname_codespaces %} created for your organization's repositories will be billed to the individual users who create them.
   - **Selected members** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by selected members will be billed to the organization.
   - **All members** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by members of your organization will be billed to the organization.
   - **All members and outside collaborators** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by organization members and outside collaborators will be billed to the organization.

   {% note %}

   **Note:** When you select **All members and outside collaborators**,  all outside collaborators who have been added to specific repositories can create and use {% data variables.product.prodname_codespaces %} for those repositories, and your organization will be billed for this usage. For more information on managing outside collaborators, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)."

   {% endnote %}

1. Click **Save**.
1. If you chose **Selected members**, an input box is displayed for you to enter the names of users you want to select.

   ![Screenshot of the input box, below the "Save" button, for entering user names. The user "octocat" has already been added as a selected member.](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Disabling {% data variables.product.prodname_codespaces %} for your organization

You can prevent the creation and use of codespaces billable to your organization.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
{% data reusables.organizations.click-general %}
1. On the {% data variables.product.prodname_codespaces %} settings page, under "Billing," select **Disabled**.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

For information on managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."
