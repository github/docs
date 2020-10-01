---
title: Managing the display of member names in your organization
intro: You can allow members of your organization to see a comment author's profile name in private repositories in the organization.
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Organization owners can manage the display of member names in an organization.

![Commenter's profile name displayed in comment](/assets/images/help/issues/commenter-full-name.png)

Each organization member chooses their own profile name in their settings. For more information, see "[Personalizing your profile](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Admin repository permissions", select or unselect **Allow members to see comment author's profile name in private repositories**.
![Checkbox to allow members to see comment author's full name in private repositories](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. Click **Save**.
