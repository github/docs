---
title: Managing repository access for your organization's codespaces
shortTitle: Repository access
intro: 'You can manage the repositories in your organization that {% data variables.product.prodname_github_codespaces %} can access.'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
---

{% warning %}

**Deprecation note**: The access and security setting described below is now deprecated and is documented here for reference only. To enable expanded access to other repositories, add the requested permissions to your `devcontainer.json` configuration file. For more information, see "[Managing access to other repositories within your codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."

{% endwarning %}

By default, a codespace can only access the repository where it was created. When you enable access and security for a repository owned by your organization, any codespaces that are created for that repository will also have read permissions to all other repositories the organization owns and the codespace creator has permissions to access. If you want to restrict the repositories a codespace can access, you can limit it to either the repository where the codespace was created, or to specific repositories. You should only enable access and security for repositories you trust.

To manage which users in your organization can use {% data variables.product.prodname_github_codespaces %}, see "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "Access and security", select the setting you want for your organization.
  ![Radio buttons to manage trusted repositories](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. If you chose "Selected repositories", select the dropdown menu, then click a repository to allow the repository's codespaces to access other repositories owned by your organization. Repeat for all repositories whose codespaces you want to access other repositories.
    !["Selected repositories" dropdown menu](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Further reading

- "[Managing repository access for your codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)"
