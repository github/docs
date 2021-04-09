---
title: Managing access and security for Codespaces
intro: You can manage the repositories that codespaces can access.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% note %}

**Note:** Access and security for {% data variables.product.prodname_codespaces %} is currently in beta and subject to change.

{% endnote %}

### Managing security and access for your user account

When you enable access and security for a repository owned by your user account, any codespaces you create for that repository will have read and write permissions to all other repositories you own. You can enable access and security for none of your repositories, all of your repositories, or specific repositories. You should only enable access and security for repositories you trust.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Access and security", select the setting you want for your user account.
  ![Radio buttons to manage trusted repositories](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. If you chose "Selected repositories", select the drop-down menu, then click a repository to allow the repository's codespaces to access other repositories you own. Repeat for all repositories whose codespaces you want to access other repositories you own.
  !["Selected repositories" drop-down menu](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

### Managing security and access for your organization

Organization owners can manage security and access for {% data variables.product.prodname_codespaces %}.

When you enable access and security for a repository owned by your organization, any codespaces that are created for that repository will have read and write permissions to all other repositories the organization owns. You can enable access and security for none of your organization's repositories, all of your organization's repositories, or specific repositories. You should only enable access and security for repositories you trust.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.click-codespaces %}
5. To approve of the [pre-release program terms of service](/github/site-policy/github-pre-release-program) on behalf of your organization and enable {% data variables.product.prodname_codespaces %}, under "User permissions", select **Selected users**, then type the username for each person to grant access to. Repeat for all users who you want to have access to your organization's codespaces.  
  ![Radio button for "Selected users"](/assets/images/help/organizations/select-selected-users-radio-button.png)
1. Under "Access and security", select the setting you want for your organization.
  ![Radio buttons to manage trusted repositories](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. If you chose "Selected repositories", select the drop-down menu, then click a repository to allow the repository's codespaces to access other repositories owned by your organization. Repeat for all repositories whose codespaces you want to access other repositories.
    !["Selected repositories" drop-down menu](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
