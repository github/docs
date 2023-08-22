---
title: Adding outside collaborators to repositories in your organization
intro: You can allow people who aren't members of your organization to access repositories that your organization owns.
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
  - /organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization
  - /organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
---

## About outside collaborators

{% data reusables.organizations.about-outside-collaborators %} You can choose the level of access to grant for each outside collaborator. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can restrict the ability to invite collaborators. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% else %}
An organization owner can restrict the ability to invite collaborators. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)."
{% endif %}

{% ifversion ghes %}
Before you can add someone as an outside collaborator on a repository, the person must have a personal account on {% data variables.location.product_location %}. If your enterprise uses an external authentication system such as SAML or LDAP, the person you want to add must sign in through that system to create an account. If the person does not have access to the authentication system and built-in authentication is enabled for your enterprise, a site administrator can create an account for the person. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)."
{% endif %}

{% ifversion not ghae %}
If your organization requires two-factor authentication, all outside collaborators must enable two-factor authentication before accepting your invitation to collaborate on a repository. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)."
{% endif %}

## Adding outside collaborators to a repository

You can give outside collaborators access to a repository in your repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)."
