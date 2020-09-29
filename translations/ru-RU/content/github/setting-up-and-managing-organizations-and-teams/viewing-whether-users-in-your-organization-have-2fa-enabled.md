---
title: Viewing whether users in your organization have 2FA enabled
intro: 'You can see which organization owners, members, and outside collaborators have enabled two-factor authentication.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Note:** You can require that all members{% if currentVersion == "free-pro-team@latest" %}, including, owners, billing managers and{% else %} and{% endif %} outside collaborators in your organization have two-factor authentication enabled. For more information, see "[Requiring two-factor authentication in your organization](/articles/requiring-two-factor-authentication-in-your-organization)."

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. To view organization members, including organization owners, who have enabled or disabled two-factor authentication, on the right, click **2FA**, and select **Enabled** or **Disabled**. ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. To view outside collaborators in your organization, under the "People" tab, click **Outside collaborators**. ![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. To view which outside collaborators have enabled or disabled two-factor authentication, on the right, click **2FA**, and select **Enabled** or **Disabled**. ![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

### Дополнительная литература

- "[Viewing people's roles in an organization](/articles/viewing-people-s-roles-in-an-organization)"
