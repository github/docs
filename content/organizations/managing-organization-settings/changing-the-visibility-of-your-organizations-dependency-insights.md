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
Enterprise owners can set limitations for viewing organization dependency insights on all organizations in your enterprise account. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-for-visibility-of-dependency-insights)."
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Member organization permissions", select or deselect **Allow members to view dependency insights**.
1. Click **Save**.
