---
title: Deleting an organization account
intro: 'When you delete an organization, all repositories, forks of private repositories, wikis, issues, pull requests, and Project or Organization Pages are deleted as well. {% if currentVersion == "free-pro-team@latest" %}The organization name becomes available for use on a new user or organization account, and your billing will end.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Tip**: If you want to cancel your paid subscription, you can [downgrade your organization to {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) instead of deleting the organization and its content.

{% endtip %}

{% endif %}

### 1. Back up your organization content

Once you delete an organization, GitHub **cannot restore your content**. Therefore, before you delete your organization, make sure you have a copy of all repositories, wikis, and issues from the account.

### 2. Delete the organization

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Near the bottom of the organization's settings page, click **Delete this Organization**.
   ![Delete this organization button](/assets/images/help/settings/settings-organization-delete.png)
