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

### Reviewing your security log for {% data variables.product.prodname_codespaces %}

The security log is where you can review {% data variables.product.prodname_codespaces %} actions that you have performed. For information about accessing the log, see "[Reviewing your security log](/github/authenticating-to-github/reviewing-your-security-log#accessing-your-security-log)."

The security log includes details on what action occured and when you performed it. For information about {% data variables.product.prodname_codespaces %} actions, see "[{% data variables.product.prodname_codespaces %} category actions](/github/authenticating-to-github/reviewing-your-security-log#codespaces-category-actions)".

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

### Reviewing your organization's audit logs for {% data variables.product.prodname_codespaces %}

The audit log is where you can review actions related to {% data variables.product.prodname_codespaces %} that have been performed by members of your organization. For information about accessing the log, see "[Reviewing your security log](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log)."

The audit log includes details such as who performed the action, what the action was, and when the action was performed. For information on {% data variables.product.prodname_codespaces %} actions, see "[{% data variables.product.prodname_codespaces %} category actions](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#codespaces-category-actions)."
