---
title: Managing rulesets for repositories in your organization
intro: 'You can edit, monitor, and delete existing rulesets to alter how people can interact with repositories in your organization.'
versions:
  feature: repo-rules-enterprise
permissions: 'Organization owners and users with the "Manage organization ref update rules and rulesets" permission can manage rulesets at the organization level.'
topics:
  - Organizations
shortTitle: Manage rulesets
---

## About managing rulesets for an organization

After creating a ruleset at the organization level, you can make changes to the ruleset to alter how people can interact with the targeted repositories. For example, you can add rules to better protect the branches or tags in those repositories, or you can switch your ruleset from "Evaluate" mode to "Active" after testing its effects on the contributor experience for your repositories. Organizational rulesets that apply to branches of a repository will no longer allow the repository administrator to rename branches of the targeted repository or change the default branch to another branch. Repository administrators may create and delete branches so long as they have the appropriate permissions.

You can use the REST and GraphQL APIs to manage rulesets. For more information, see "[AUTOTITLE](/rest/orgs/rules)" and "[AUTOTITLE](/graphql/reference/mutations#createrepositoryruleset)."

{% data reusables.repositories.rulesets-anyone-can-view %}

## Editing a ruleset

{% data reusables.repositories.about-editing-rulesets %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.edit-ruleset-steps %}

## Deleting a ruleset

{% data reusables.repositories.deleting-ruleset-tip %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.delete-ruleset-steps %}

{% ifversion repo-rules-management %}

## Using ruleset history

{% data reusables.repositories.ruleset-beta-note %}

{% data reusables.repositories.ruleset-history-conceptual %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.ruleset-history %}

### Importing a ruleset

You can import a ruleset from another repository or organization using the exported JSON file from the previous section. This can be useful if you want to apply the same ruleset to multiple repositories or organizations.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.import-a-ruleset %}

{% endif %}

## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting the repositories in your organization. {% data reusables.repositories.about-ruleset-insights %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, in the "Code, planning, and automation" section, click **{% octicon "repo" aria-hidden="true" %} Repository**, then click **Rule insights**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rule insights" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rule-insights.png)

1. On the "Rule insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, repository, actor, and time period.
{% data reusables.repositories.rulesets-view-rule-runs %}
