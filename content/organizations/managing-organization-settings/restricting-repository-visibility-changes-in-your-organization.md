---
title: Restricting repository visibility changes in your organization
intro: 'To protect your organization''s data, you can configure permissions for changing repository visibility in your organization.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
---

You can restrict who has the ability to change the visibility of repositories in your organization, such as changing a repository from private to public. For more information about repository visibility, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

You can restrict the ability to change repository visibility to organization owners only, or you can allow anyone with admin access to a repository to change visibility.

Restricting who has the ability to change the visibility of repositories in your organization helps prevent sensitive information from being exposed. For more information, see "[AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)."

{% warning %}

**Warning**: If this setting is enabled, individuals or {% data variables.product.prodname_github_apps %} with admin access can _modify_ the visibility of an existing repository even if the ability to _create_ a repository with that specific visibility has been disabled. For more information about restricting the visibility of repositories during creation, see "[AUTOTITLE](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Repository visibility change", deselect **Allow members to change repository visibilities for this organization**.
1. Click **Save**.
