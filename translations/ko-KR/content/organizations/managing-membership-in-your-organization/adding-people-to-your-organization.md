---
title: Adding people to your organization
intro: 'You can make anyone a member of your organization using their {% data variables.product.product_name %} username or email address.'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
permissions: 'Organization owners can add people to an organization.'
---

{% if currentVersion != "github-ae@latest" %}
If your organization [requires members to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), users must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before you can add them to the organization.
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.choose-user-license %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}

### 더 읽을거리
- "[Adding organization members to a team](/articles/adding-organization-members-to-a-team)"
