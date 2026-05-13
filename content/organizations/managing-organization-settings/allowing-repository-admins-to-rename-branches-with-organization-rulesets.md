---
title: Allowing repository admins to rename branches with organization rulesets
intro: 'Organization owners can allow people with repository admin permission to rename branches that are targeted by organization rulesets.'
versions:
  feature: repo-admin-branch-rename
permissions: Organization owners can manage this setting.
shortTitle: Allow branch renames
category:
  - Configure organization features
---

Organization owners control whether repository administrators can rename branches that are targeted by one or more branch rulesets. For existing organizations, this setting is off by default. For newly created organizations, this setting is on by default.

When this setting is enabled, repository administrators can rename these branches, provided the new branch name is still targeted by all the same organization rulesets as the current branch name. This ensures that rulesets cannot be circumvented through branch renaming.

Organization administrators can rename branches targeted by organization rulesets without restriction.

> [!NOTE]
> Even with this setting enabled, changing the default branch of a repository still requires an organization administrator when organization rulesets are in play.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Branch renames", select **Allow repository administrators to rename branches protected by organization rules**.
1. Click **Save**.

## Further reading

* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)
* [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-renaming-protected-branches)
