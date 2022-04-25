---
title: Changing the visibility of your organization's dependency insights
intro: You can allow all organization members to view dependency insights for your organization or limit viewing to organization owners.
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Change insight visibility
---

Organization owners can set limitations for viewing organization dependency insights. All members of an organization can view organization dependency insights by default.

{% ifversion ghec %}
Enterprise owners can set limitations for viewing organization dependency insights on all organizations in your enterprise account. For more information, see "[Enforcing policies for dependency insights in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)."
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Member organization permissions", select or unselect **Allow members to view dependency insights**.
![Checkbox to allow members to view insights](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. Click **Save**.
