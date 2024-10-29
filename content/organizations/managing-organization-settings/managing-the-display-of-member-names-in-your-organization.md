---
title: Managing the display of member names in your organization
intro: You can allow members of your organization to see a comment author's profile name in private repositories in the organization.
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage display of member names
---

Organization owners can manage the display of member names in an organization.

![Screenshot of an issue comment. The header says "ashtom (Thomas Dohmke) commented 1 minute ago," with "(Thomas Dohmke)" outlined in dark orange.](/assets/images/help/issues/commenter-full-name.png)

Changes to the display of usernames within an organization will affect the display of other people's usernames, not your own. Each organization member chooses their own profile name in their settings. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#changing-your-profile-name)."

{% ifversion profile-name-enterprise-setting %}
You may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Repository Comments", select or deselect **Allow members to see comment author's profile name in private repositories**.
1. Click **Save**.
